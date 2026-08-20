import test from 'node:test';
import assert from 'node:assert/strict';

import { createSearchSynchronizer } from '../../worker/search/sync.mjs';

test('sync incremental atualiza ativos, remove inativos e usa janela sobreposta', async () => {
  const calls = { upsert: [], deleted: [], range: null };
  const magazord = {
    async listUpdatedProducts(range) {
      calls.range = range;
      return [
        { ativo: true, derivacoes: [{ codigo: 'A' }, { codigo: 'B' }] },
        { ativo: false, derivacoes: [{ codigo: 'C' }] }
      ];
    },
    async getSearchRecord(sku) {
      if (sku === 'B') throw Object.assign(new Error('gone'), { code: 'NOT_FOUND', status: 404 });
      return { objectID: sku, sku, name: `Produto ${sku}`, active: true };
    }
  };
  const algolia = {
    indexName: 'products',
    async batchUpsert(records) { calls.upsert.push(...records); },
    async batchDelete(ids) { calls.deleted.push(...ids); }
  };
  const synchronizer = createSearchSynchronizer({ magazord, algolia });
  const result = await synchronizer.incremental({ scheduledTime: Date.parse('2026-07-16T13:00:00Z') });
  assert.deepEqual(calls.upsert.map((item) => item.sku), ['A']);
  assert.deepEqual(calls.deleted.sort(), ['B', 'C']);
  assert.equal(calls.range.since, '2026-07-16T12:30:00.000Z');
  assert.equal(result.upserted, 1);
  assert.equal(result.deleted, 2);
});

test('falha transitória de detalhe não apaga registro existente', async () => {
  const deleted = [];
  const synchronizer = createSearchSynchronizer({
    magazord: {
      async listUpdatedProducts() { return [{ ativo: true, derivacoes: [{ codigo: 'A' }] }]; },
      async getSearchRecord() { throw Object.assign(new Error('timeout'), { code: 'UPSTREAM_TIMEOUT' }); }
    },
    algolia: {
      indexName: 'products',
      async batchUpsert() {},
      async batchDelete(ids) { deleted.push(...ids); }
    }
  });
  const result = await synchronizer.incremental();
  assert.deepEqual(deleted, []);
  assert.equal(result.failed, 1);
});

test('sync completa configura índice temporário e faz move atômico', async () => {
  const operations = [];
  let tick = 1000;
  const synchronizer = createSearchSynchronizer({
    magazord: {
      async listFrontendProducts() {
        return [
          { codigo: 'A', nome: 'Mesa', ativo: true, valor: 10, qtde_estoque: 1 },
          { codigo: 'B', nome: 'Rack', ativo: false, valor: 20, qtde_estoque: 2 }
        ];
      }
    },
    algolia: {
      indexName: 'products',
      async setSettings(name) { operations.push(['settings', name]); },
      async replaceSynonyms(name) { operations.push(['synonyms', name]); },
      async batchUpsert(records, name) { operations.push(['upsert', name, records]); },
      async moveIndex(source, destination) { operations.push(['move', source, destination]); },
      async deleteIndex(name) { operations.push(['delete', name]); },
      async configureReplicas(name) { operations.push(['replicas', name]); }
    },
    minimumFullRecords: 1,
    now: () => tick++
  });
  const result = await synchronizer.full();
  assert.deepEqual(operations.map((op) => op[0]), ['settings', 'synonyms', 'upsert', 'move', 'replicas']);
  assert.equal(operations[2][2][0].sku, 'A');
  assert.equal(Object.hasOwn(operations[2][2][0], 'valor'), false);
  assert.equal(result.indexed, 1);
});

test('sync completa envia os 840 produtos atuais em um único lote Algolia', async () => {
  const batchSizes = [];
  const source = Array.from({ length: 840 }, (_, index) => ({
    codigo: `SKU-${index}`,
    nome: `Produto ${index}`,
    ativo: true
  }));
  const synchronizer = createSearchSynchronizer({
    magazord: { async listFrontendProducts() { return source; } },
    algolia: {
      indexName: 'products',
      async setSettings() {},
      async replaceSynonyms() {},
      async batchUpsert(records) { batchSizes.push(records.length); },
      async moveIndex() {},
      async deleteIndex() {}
    },
    minimumFullRecords: 1
  });

  const result = await synchronizer.full();

  assert.deepEqual(batchSizes, [840]);
  assert.equal(result.indexed, 840);
});

test('sync completa aborta antes da troca quando a coleta fica abaixo do piso', async () => {
  let moved = false;
  const synchronizer = createSearchSynchronizer({
    magazord: { async listFrontendProducts() { return [{ codigo: 'A', nome: 'Mesa', ativo: true }]; } },
    algolia: {
      indexName: 'products',
      async setSettings() {}, async replaceSynonyms() {}, async batchUpsert() {},
      async moveIndex() { moved = true; }, async deleteIndex() {}
    },
    minimumFullRecords: 2
  });
  await assert.rejects(() => synchronizer.full(), (error) => error.code === 'FULL_SYNC_SAFETY_ABORT');
  assert.equal(moved, false);
});

test('sincroniza agregados de avaliação por atualização parcial', async () => {
  const updates = [];
  const synchronizer = createSearchSynchronizer({
    magazord: {
      async listFrontendProducts() { return [{ codigo: 'A', produto_id: 10, ativo: true }]; },
      async listApprovedReviewAggregates() { return new Map([['10', { ratingAverage: 4.5, reviewCount: 2 }]]); }
    },
    algolia: {
      indexName: 'products',
      async batchPartialUpdate(records) { updates.push(...records); }
    }
  });
  const result = await synchronizer.ratings();
  assert.deepEqual(updates, [{ objectID: 'A', ratingAverage: 4.5, reviewCount: 2 }]);
  assert.equal(result.updated, 1);
});

test('preserva agregado nativo do produto quando a API de avaliações não tem o item', async () => {
  const updates = [];
  const synchronizer = createSearchSynchronizer({
    magazord: {
      async listFrontendProducts() { return [{ codigo: 'A', produto_id: 10, nota: '4.97', avaliacoes: 224, ativo: true }]; },
      async listApprovedReviewAggregates() { return new Map(); }
    },
    algolia: {
      indexName: 'products',
      async batchPartialUpdate(records) { updates.push(...records); }
    }
  });
  await synchronizer.ratings();
  assert.deepEqual(updates, [{ objectID: 'A', ratingAverage: 4.97, reviewCount: 224 }]);
});
