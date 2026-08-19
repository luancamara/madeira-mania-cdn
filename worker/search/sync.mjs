import { assertSearchRecordSafe, extractDerivationSkus, mapMagazordProductToRecord } from './catalog.mjs';
import { ALGOLIA_INDEX_SETTINGS, ALGOLIA_SYNONYMS } from './constants.mjs';
import { mapWithConcurrency, uniqueStrings } from './utils.mjs';

const INCREMENTAL_OVERLAP_MS = 30 * 60 * 1000;
const BATCH_SIZE = 500;

function chunks(items, size = BATCH_SIZE) {
  const output = [];
  for (let index = 0; index < items.length; index += size) output.push(items.slice(index, index + size));
  return output;
}

function errorCode(error) {
  return error?.code || 'UNKNOWN';
}

function ratingFromProduct(item) {
  const average = Number(item?.ratingAverage ?? item?.nota);
  const count = Number(item?.reviewCount ?? item?.avaliacoes);
  if (!Number.isFinite(average) && !Number.isFinite(count)) return null;
  return {
    ratingAverage: Number.isFinite(average) && average > 0 ? Math.round(average * 100) / 100 : 0,
    reviewCount: Number.isFinite(count) && count > 0 ? Math.floor(count) : 0
  };
}

export function createSearchSynchronizer({
  magazord,
  algolia,
  indexName = algolia?.indexName || 'madeira_mania_products',
  detailConcurrency = 6,
  minimumFullRecords = 100,
  maxFullFailureRatio = 0.05,
  now = () => Date.now()
}) {
  if (!magazord || !algolia) throw new Error('Clientes de sincronização não configurados.');

  async function batchUpsert(records, name = indexName) {
    for (const batch of chunks(records)) await algolia.batchUpsert(batch, name, { wait: true });
  }

  async function batchDelete(objectIDs, name = indexName) {
    for (const batch of chunks(uniqueStrings(objectIDs))) await algolia.batchDelete(batch, name, { wait: true });
  }

  async function batchPartialUpdate(records, name = indexName) {
    for (const batch of chunks(records)) await algolia.batchPartialUpdate(batch, name, { wait: true });
  }

  function fullSyncSafetyError(message, details) {
    const error = new Error(message);
    error.code = 'FULL_SYNC_SAFETY_ABORT';
    error.status = 503;
    error.safeMessage = 'A reindexação completa foi interrompida por segurança.';
    error.details = details;
    return error;
  }

  return {
    async incremental({ scheduledTime = now() } = {}) {
      const untilDate = new Date(scheduledTime);
      const sinceDate = new Date(untilDate.getTime() - INCREMENTAL_OVERLAP_MS);
      const products = await magazord.listUpdatedProducts({
        since: sinceDate.toISOString(),
        until: untilDate.toISOString()
      });

      const activeSkus = [];
      const deletedSkus = [];
      for (const product of products) {
        const skus = extractDerivationSkus(product);
        if (product?.ativo === false) deletedSkus.push(...skus);
        else activeSkus.push(...skus);
      }

      const failures = [];
      const records = (await mapWithConcurrency(uniqueStrings(activeSkus), detailConcurrency, async (sku) => {
        try {
          const record = await magazord.getSearchRecord(sku);
          if (record.active === false) {
            deletedSkus.push(sku);
            return null;
          }
          assertSearchRecordSafe(record);
          return record;
        } catch (error) {
          if (error?.code === 'NOT_FOUND' || error?.status === 404) deletedSkus.push(sku);
          else failures.push({ sku, code: errorCode(error) });
          return null;
        }
      })).filter(Boolean);

      await batchUpsert(records);
      await batchDelete(deletedSkus);
      return {
        mode: 'incremental',
        from: sinceDate.toISOString(),
        to: untilDate.toISOString(),
        productsScanned: products.length,
        upserted: records.length,
        deleted: uniqueStrings(deletedSkus).length,
        failed: failures.length,
        failures: failures.slice(0, 20)
      };
    },

    async full() {
      const startedAt = now();
      const [sourceItems, reviewResult] = await Promise.all([
        magazord.listFrontendProducts(),
        magazord.listApprovedReviewAggregates
          ? magazord.listApprovedReviewAggregates()
              .then((aggregates) => ({ ok: true, aggregates }))
              .catch((error) => ({ ok: false, code: errorCode(error), aggregates: new Map() }))
          : Promise.resolve({ ok: false, code: 'NOT_SUPPORTED', aggregates: new Map() })
      ]);
      const records = [];
      const failures = [];
      for (const item of sourceItems) {
        try {
          const productId = item?.produto_id ?? item?.produtoId;
          const aggregate = reviewResult.aggregates.get(String(productId)) || ratingFromProduct(item);
          const record = mapMagazordProductToRecord({ ...item, ...(aggregate || {}) });
          if (record.active === false) continue;
          assertSearchRecordSafe(record);
          records.push(record);
        } catch (error) {
          failures.push({ sku: item?.codigo || null, code: errorCode(error) });
        }
      }

      const uniqueRecords = Array.from(new Map(records.map((record) => [record.objectID, record])).values());
      const failureRatio = failures.length / Math.max(1, sourceItems.length);
      if (uniqueRecords.length < Math.max(1, Number(minimumFullRecords) || 1)) {
        throw fullSyncSafetyError('Quantidade coletada abaixo do piso seguro.', {
          sourceItems: sourceItems.length,
          indexed: uniqueRecords.length,
          minimumFullRecords
        });
      }
      if (failureRatio > Math.max(0, Number(maxFullFailureRatio) || 0)) {
        throw fullSyncSafetyError('Taxa de falhas acima do limite seguro.', {
          sourceItems: sourceItems.length,
          failed: failures.length,
          failureRatio,
          maxFullFailureRatio
        });
      }

      const tempIndex = `${indexName}_tmp_${startedAt}`;
      try {
        await algolia.setSettings(tempIndex, ALGOLIA_INDEX_SETTINGS, { wait: true });
        await algolia.replaceSynonyms(tempIndex, ALGOLIA_SYNONYMS, { wait: true });
        await batchUpsert(uniqueRecords, tempIndex);
        await algolia.moveIndex(tempIndex, indexName, { wait: true });
        if (algolia.configureReplicas) await algolia.configureReplicas(indexName);
      } catch (error) {
        try { await algolia.deleteIndex(tempIndex); } catch {}
        throw error;
      }

      return {
        mode: 'full',
        sourceItems: sourceItems.length,
        indexed: uniqueRecords.length,
        failed: failures.length,
        failures: failures.slice(0, 20),
        reviews: {
          status: reviewResult.ok ? 'indexed' : 'unavailable',
          productsWithReviews: reviewResult.aggregates.size,
          ...(reviewResult.ok ? {} : { code: reviewResult.code })
        },
        durationMS: Math.max(0, now() - startedAt)
      };
    },

    async ratings() {
      if (!magazord.listApprovedReviewAggregates || !algolia.batchPartialUpdate) {
        const error = new Error('Sincronização de avaliações não configurada.');
        error.code = 'RATING_SYNC_NOT_CONFIGURED';
        throw error;
      }
      const [sourceItems, aggregates] = await Promise.all([
        magazord.listFrontendProducts(),
        magazord.listApprovedReviewAggregates()
      ]);
      const updates = [];
      for (const item of sourceItems) {
        const sku = String(item?.codigo || item?.sku || '').trim();
        if (!sku || item?.ativo === false) continue;
        const productId = item?.produto_id ?? item?.produtoId;
        const aggregate = aggregates.get(String(productId)) || ratingFromProduct(item) || { ratingAverage: 0, reviewCount: 0 };
        updates.push({ objectID: sku, ...aggregate });
      }
      await batchPartialUpdate(updates);
      return {
        mode: 'ratings',
        sourceItems: sourceItems.length,
        updated: updates.length,
        productsWithReviews: aggregates.size
      };
    }
  };
}
