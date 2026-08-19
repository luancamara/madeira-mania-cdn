import { assertSearchRecordSafe } from './catalog.mjs';
import {
  ALGOLIA_INDEX_SETTINGS,
  ALGOLIA_REPLICA_SETTINGS,
  ALGOLIA_SYNONYMS,
  SEARCH_FACET_NAMES,
  SEARCH_SORTS
} from './constants.mjs';
import { buildAlgoliaFacetFilters } from './utils.mjs';

function configurationError(message) {
  const error = new Error(message);
  error.code = 'CONFIG_ERROR';
  error.status = 503;
  error.safeMessage = message;
  return error;
}

function upstreamError(status) {
  const error = new Error('Algolia retornou uma falha.');
  error.code = status === 429 ? 'SEARCH_RATE_LIMITED' : 'SEARCH_UPSTREAM_ERROR';
  error.status = status === 429 ? 429 : 502;
  error.safeMessage = status === 429 ? 'Muitas buscas. Tente novamente em instantes.' : 'Busca temporariamente indisponível.';
  return error;
}

export function createAlgoliaClient(env = {}, { fetchImpl = fetch } = {}) {
  const appId = String(env.ALGOLIA_APP_ID || '').trim();
  const searchKey = String(env.ALGOLIA_SEARCH_KEY || '').trim();
  const writeKey = String(env.ALGOLIA_WRITE_KEY || env.ALGOLIA_ADMIN_KEY || '').trim();
  const indexName = String(env.ALGOLIA_INDEX_NAME || 'madeira_mania_products').trim();
  const timeoutMs = Math.max(500, Math.min(10000, Number(env.ALGOLIA_TIMEOUT_MS || 3500)));

  function requireConfig(keyType) {
    if (!appId) throw configurationError('ALGOLIA_APP_ID não configurado.');
    const key = keyType === 'write' ? writeKey : searchKey;
    if (!key) throw configurationError(`${keyType === 'write' ? 'ALGOLIA_WRITE_KEY' : 'ALGOLIA_SEARCH_KEY'} não configurada.`);
    return key;
  }

  async function request(path, { method = 'POST', body, keyType = 'write', host = 'write', timeout = timeoutMs } = {}) {
    const key = requireConfig(keyType);
    const base = host === 'search'
      ? `https://${appId}-dsn.algolia.net`
      : host === 'insights'
        ? 'https://insights.algolia.io'
        : `https://${appId}.algolia.net`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    let response;
    try {
      response = await fetchImpl(`${base}${path}`, {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Algolia-Application-Id': appId,
          'X-Algolia-API-Key': key
        },
        body: body == null ? undefined : JSON.stringify(body),
        signal: controller.signal,
        cache: 'no-store'
      });
    } catch (error) {
      if (error?.name === 'AbortError') {
        const timeoutError = upstreamError(504);
        timeoutError.code = 'SEARCH_TIMEOUT';
        throw timeoutError;
      }
      throw upstreamError(502);
    } finally {
      clearTimeout(timeoutId);
    }

    if (!response.ok) throw upstreamError(response.status);
    try {
      return await response.json();
    } catch {
      throw upstreamError(502);
    }
  }

  const indexPath = (name = indexName) => `/1/indexes/${encodeURIComponent(name)}`;
  const replicaNames = Object.fromEntries(
    Object.entries(SEARCH_SORTS)
      .filter(([, suffix]) => suffix)
      .map(([sort, suffix]) => [sort, `${indexName}_${suffix}`])
  );

  function indexForSort(sort) {
    return replicaNames[sort] || indexName;
  }

  async function waitTask(name, taskID, { timeout = 30000, interval = 120 } = {}) {
    const started = Date.now();
    while (Date.now() - started < timeout) {
      const result = await request(`${indexPath(name)}/task/${encodeURIComponent(taskID)}`, { method: 'GET' });
      if (result.status === 'published') return result;
      await new Promise((resolve) => setTimeout(resolve, interval));
    }
    const error = new Error('Tempo esgotado aguardando indexação Algolia.');
    error.code = 'ALGOLIA_TASK_TIMEOUT';
    throw error;
  }

  async function batch(name, requests, { wait = false } = {}) {
    for (const operation of requests) {
      if (operation?.action === 'addObject' || operation?.action === 'updateObject' || operation?.action === 'partialUpdateObject') {
        assertSearchRecordSafe(operation.body);
      }
    }
    if (!requests.length) return { taskID: null, objectIDs: [] };
    const result = await request(`${indexPath(name)}/batch`, { body: { requests } });
    if (wait && result.taskID != null) await waitTask(name, result.taskID);
    return result;
  }

  return {
    name: 'algolia',
    indexName,
    async search(params) {
      const body = {
        query: params.interpretedQuery,
        page: params.page,
        hitsPerPage: params.limit,
        facets: SEARCH_FACET_NAMES,
        facetFilters: buildAlgoliaFacetFilters(params.filters),
        clickAnalytics: true,
        analytics: true,
        analyticsTags: ['madeira-mania-storefront'],
        typoTolerance: params.exact ? false : true,
        synonyms: !params.exact,
        getRankingInfo: false
      };
      const result = await request(`${indexPath(indexForSort(params.sort))}/query`, {
        body,
        keyType: 'search',
        host: 'search'
      });
      const hits = (result.hits || []).map((hit) => {
        const { _highlightResult, _rankingInfo, ...stable } = hit;
        assertSearchRecordSafe(stable);
        return stable;
      });
      return { ...result, hits };
    },
    async batchUpsert(records, name = indexName, options) {
      return batch(name, records.map((record) => ({ action: 'addObject', body: record })), options);
    },
    async batchDelete(objectIDs, name = indexName, options) {
      return batch(name, objectIDs.map((objectID) => ({ action: 'deleteObject', body: { objectID } })), options);
    },
    async batchPartialUpdate(records, name = indexName, options) {
      return batch(name, records.map((record) => ({
        action: 'partialUpdateObject',
        body: { ...record, createIfNotExists: false }
      })), options);
    },
    async setSettings(name = indexName, settings = ALGOLIA_INDEX_SETTINGS, { wait = false, forwardToReplicas = false } = {}) {
      const suffix = forwardToReplicas ? '?forwardToReplicas=true' : '';
      const result = await request(`${indexPath(name)}/settings${suffix}`, { method: 'PUT', body: settings });
      if (wait && result.taskID != null) await waitTask(name, result.taskID);
      return result;
    },
    async replaceSynonyms(name = indexName, synonyms = ALGOLIA_SYNONYMS, { wait = false, forwardToReplicas = false } = {}) {
      const suffix = forwardToReplicas ? '&forwardToReplicas=true' : '';
      const result = await request(`${indexPath(name)}/synonyms/batch?replaceExistingSynonyms=true${suffix}`, { body: synonyms });
      if (wait && result.taskID != null) await waitTask(name, result.taskID);
      return result;
    },
    async configureReplicas(primary = indexName) {
      const names = Object.fromEntries(
        Object.entries(SEARCH_SORTS)
          .filter(([, suffix]) => suffix)
          .map(([sort, suffix]) => [sort, `${primary}_${suffix}`])
      );
      await this.setSettings(primary, {
        ...ALGOLIA_INDEX_SETTINGS,
        replicas: Object.values(names)
      }, { wait: true });
      for (const [sort, name] of Object.entries(names)) {
        await this.setSettings(name, {
          ...ALGOLIA_INDEX_SETTINGS,
          ...ALGOLIA_REPLICA_SETTINGS[sort]
        }, { wait: true });
      }
      await this.replaceSynonyms(primary, ALGOLIA_SYNONYMS, {
        wait: true,
        forwardToReplicas: true
      });
      return names;
    },
    async moveIndex(source, destination = indexName, { wait = false } = {}) {
      const result = await request(`${indexPath(source)}/operation`, {
        body: { operation: 'move', destination }
      });
      if (wait && result.taskID != null) await waitTask(destination, result.taskID);
      return result;
    },
    async deleteIndex(name) {
      return request(indexPath(name), { method: 'DELETE' });
    },
    async sendEvents(events) {
      if (!Array.isArray(events) || events.length === 0) return { status: 202 };
      return request('/1/events', {
        body: { events },
        keyType: 'search',
        host: 'insights',
        timeout: 1800
      });
    },
    batch,
    indexForSort,
    replicaNames,
    waitTask,
    request
  };
}
