import test from 'node:test';
import assert from 'node:assert/strict';

import { createAlgoliaClient } from '../../worker/search/algolia.mjs';
import { ALGOLIA_INDEX_SETTINGS } from '../../worker/search/constants.mjs';

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

const env = {
  ALGOLIA_APP_ID: 'APP123',
  ALGOLIA_SEARCH_KEY: 'search-key',
  ALGOLIA_WRITE_KEY: 'write-key',
  ALGOLIA_INDEX_NAME: 'products'
};

test('usa português do Brasil conforme a configuração aprovada', () => {
  assert.deepEqual(ALGOLIA_INDEX_SETTINGS.indexLanguages, ['pt-br']);
  assert.deepEqual(ALGOLIA_INDEX_SETTINGS.queryLanguages, ['pt-br']);
  // A API aceita o locale pt-br para index/query, mas a lista de flexões
  // de ignorePlurals usa o dicionário ISO 639-1 `pt`.
  assert.deepEqual(ALGOLIA_INDEX_SETTINGS.ignorePlurals, ['pt']);
});

test('mantém limites conservadores para não poluir termos de três letras', () => {
  assert.equal(ALGOLIA_INDEX_SETTINGS.typoTolerance, true);
  assert.equal(ALGOLIA_INDEX_SETTINGS.minWordSizefor1Typo, 4);
  assert.equal(ALGOLIA_INDEX_SETTINGS.minWordSizefor2Typos, 8);
});

test('busca no host DSN com filtros escapados e chave de busca', async () => {
  const calls = [];
  const client = createAlgoliaClient(env, {
    fetchImpl: async (url, options) => {
      calls.push({ url, options, body: JSON.parse(options.body) });
      return jsonResponse({ hits: [{ objectID: 'A', sku: 'A', name: 'Mesa', _highlightResult: {} }], nbHits: 1, page: 0, nbPages: 1, hitsPerPage: 12 });
    }
  });
  const result = await client.search({
    interpretedQuery: 'mesa', page: 0, limit: 12, exact: false,
    filters: { categories: ['Sala "Premium"'], brand: [], material: [], requiresAssembly: [] }
  });
  assert.equal(calls[0].url, 'https://APP123-dsn.algolia.net/1/indexes/products/query');
  assert.equal(calls[0].options.headers['X-Algolia-API-Key'], 'search-key');
  assert.deepEqual(calls[0].body.facetFilters, ['categories:"Sala \\"Premium\\""']);
  assert.equal(calls[0].body.typoTolerance, true);
  assert.equal(calls[0].body.synonyms, true);
  assert.equal(Object.hasOwn(result.hits[0], '_highlightResult'), false);
});

test('modo exato desativa tolerância e sinônimos', async () => {
  const calls = [];
  const client = createAlgoliaClient(env, {
    fetchImpl: async (url, options) => {
      calls.push({ url, body: JSON.parse(options.body) });
      return jsonResponse({ hits: [], nbHits: 0, page: 0, nbPages: 0, hitsPerPage: 12 });
    }
  });

  await client.search({
    interpretedQuery: 'raqui', page: 0, limit: 12, exact: true,
    filters: { categories: [], brand: [], material: [], requiresAssembly: [] }
  });

  assert.equal(calls[0].body.typoTolerance, false);
  assert.equal(calls[0].body.synonyms, false);
});

test('usa réplica global para ordenação estável', async () => {
  const calls = [];
  const client = createAlgoliaClient(env, {
    fetchImpl: async (url) => {
      calls.push(url);
      return jsonResponse({ hits: [], nbHits: 0, page: 0, nbPages: 0, hitsPerPage: 12 });
    }
  });
  await client.search({
    interpretedQuery: 'mesa', page: 0, limit: 12, exact: false, sort: 'newest',
    filters: { categories: [], brand: [], material: [], requiresAssembly: [] }
  });
  assert.match(calls[0], /\/1\/indexes\/products_newest\/query$/);
});

test('batch rejeita campo comercial antes de chamar Algolia', async () => {
  let called = false;
  const client = createAlgoliaClient(env, { fetchImpl: async () => { called = true; return jsonResponse({ taskID: 1 }); } });
  await assert.rejects(
    () => client.batchUpsert([{ objectID: 'A', sku: 'A', price: 10 }]),
    (error) => error.code === 'COMMERCIAL_FIELD_IN_INDEX'
  );
  assert.equal(called, false);
});

test('usa chave de escrita e aguarda task publicada', async () => {
  const calls = [];
  const client = createAlgoliaClient(env, {
    fetchImpl: async (url, options) => {
      calls.push({ url, options });
      if (url.includes('/task/')) return jsonResponse({ status: 'published' });
      return jsonResponse({ taskID: 42, objectIDs: ['A'] });
    }
  });
  await client.batchUpsert([{ objectID: 'A', sku: 'A', name: 'Mesa' }], 'products', { wait: true });
  assert.equal(calls[0].options.headers['X-Algolia-API-Key'], 'write-key');
  assert.match(calls[1].url, /\/task\/42$/);
});

test('erros nunca incluem chave de escrita nem corpo remoto', async () => {
  const client = createAlgoliaClient(env, { fetchImpl: async () => jsonResponse({ message: 'write-key sensitive' }, 500) });
  await assert.rejects(() => client.setSettings(), (error) => {
    assert.equal(error.code, 'SEARCH_UPSTREAM_ERROR');
    assert.equal(error.message.includes('write-key'), false);
    return true;
  });
});

test('configura réplicas e encaminha sinônimos', async () => {
  const calls = [];
  let task = 0;
  const client = createAlgoliaClient(env, {
    fetchImpl: async (url, options) => {
      calls.push({ url, body: options.body ? JSON.parse(options.body) : null });
      if (url.includes('/task/')) return jsonResponse({ status: 'published' });
      task += 1;
      return jsonResponse({ taskID: task });
    }
  });
  const names = await client.configureReplicas();
  assert.equal(names.name_asc, 'products_name_asc');
  assert.ok(calls.some((call) => call.body?.replicas?.includes('products_rating_desc')));
  assert.ok(calls.some((call) => call.url.includes('forwardToReplicas=true')));
});
