import test from 'node:test';
import assert from 'node:assert/strict';

import { handleRequest } from '../../worker/index.mjs';

function request(path, init = {}) {
  return new Request(`http://localhost:8080${path}`, init);
}

const assets = {
  async fetch(assetRequest) {
    return new Response(new URL(assetRequest.url).pathname, { status: 200 });
  }
};

test('serve busca fixture local com no-store e CORS', async () => {
  const response = await handleRequest(request('/api/search?q=cristalera&limit=6', {
    headers: { Origin: 'https://www.madeiramania.com.br' }
  }), { ASSETS: assets });
  const payload = await response.json();
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('Cache-Control'), 'no-store, no-cache, must-revalidate');
  assert.equal(response.headers.get('Access-Control-Allow-Origin'), 'https://www.madeiramania.com.br');
  assert.equal(response.headers.get('X-MM-Search-Source'), 'fixture');
  assert.equal(payload.interpretedQuery, 'cristaleira');
  assert.equal(payload.hits[0].sku, 'MM-135-WF');
  assert.equal(payload.hits[0].commercial.status, 'confirmed');
});

test('rejeita query curta e origem desconhecida', async () => {
  const short = await handleRequest(request('/api/search?q=a'), { ASSETS: assets });
  assert.equal(short.status, 400);
  assert.equal((await short.json()).error.code, 'QUERY_TOO_SHORT');

  const denied = await handleRequest(request('/api/search?q=mesa', {
    headers: { Origin: 'https://evil.example' }
  }), { ASSETS: assets });
  assert.equal(denied.status, 403);
});

test('fixture não é fallback silencioso fora de localhost', async () => {
  const response = await handleRequest(new Request('https://cdn.example/api/search?q=mesa'), { ASSETS: assets });
  assert.equal(response.status, 503);
  assert.equal((await response.json()).error.code, 'SEARCH_NOT_CONFIGURED');
});

test('health sanitizado diferencia fixture', async () => {
  const response = await handleRequest(request('/api/search/health'), { ASSETS: assets });
  assert.deepEqual(await response.json(), {
    status: 'fixture', provider: 'fixture', commercial: 'fixture-only', lastSync: null
  });
});

test('contexto de carrinho confirma preço, estoque e depósito sem cache', async () => {
  const response = await handleRequest(request('/api/search/cart-context?sku=MM-085-MAV'), { ASSETS: assets });
  const payload = await response.json();
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('Cache-Control'), 'no-store, no-cache, must-revalidate');
  assert.equal(payload.sku, 'MM-085-MAV');
  assert.equal(payload.derivationId, 1408);
  assert.equal(payload.price, 1086.63);
  assert.equal(payload.deposit, 1);
});

test('aceita evento próprio e rejeita nome arbitrário', async () => {
  const accepted = await handleRequest(request('/api/search/events', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ eventName: 'mm_search_product_clicked', objectID: 'A', queryID: 'Q', position: 1 })
  }), { ASSETS: assets });
  assert.equal(accepted.status, 202);

  const rejected = await handleRequest(request('/api/search/events', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ eventName: 'purchase' })
  }), { ASSETS: assets });
  assert.equal(rejected.status, 400);
});

test('mantém alias legado do bundle e delega demais assets', async () => {
  const legacy = await handleRequest(request('/madeira-mania.js'), { ASSETS: assets });
  assert.equal(await legacy.text(), '/js/madeira-mania.js');
  assert.equal(legacy.headers.get('Cache-Control'), 'no-store, no-cache, must-revalidate');
  const regular = await handleRequest(request('/assets/logo.svg'), { ASSETS: assets });
  assert.equal(await regular.text(), '/assets/logo.svg');
});

test('limita rajadas por IP dentro do próprio Worker', async () => {
  let last;
  for (let index = 0; index < 11; index += 1) {
    last = await handleRequest(request('/api/search?q=mesa', {
      headers: { 'CF-Connecting-IP': '203.0.113.99' }
    }), { ASSETS: assets, SEARCH_RATE_LIMIT_MAX: '10' });
  }
  assert.equal(last.status, 429);
  assert.equal((await last.json()).error.code, 'SEARCH_RATE_LIMITED');
  assert.ok(Number(last.headers.get('Retry-After')) >= 1);
});
