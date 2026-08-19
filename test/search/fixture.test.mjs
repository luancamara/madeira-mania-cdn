import test from 'node:test';
import assert from 'node:assert/strict';

import { createFixtureProvider } from '../../worker/search/fixture.mjs';
import { resolveInterpretedQuery } from '../../worker/search/utils.mjs';

const provider = createFixtureProvider();

async function search(query, overrides = {}) {
  const exact = overrides.exact || false;
  return provider.search({
    query,
    interpretedQuery: resolveInterpretedQuery(query, exact),
    exact,
    page: 0,
    limit: 12,
    filters: {},
    ...overrides
  });
}

for (const [query, expected] of [
  ['cristaleira', 'MM-135-WF'],
  ['cristalera', 'MM-135-WF'],
  ['mesa de jantar', 'VALDE-065-MM'],
  ['meza de jantar', 'VALDE-065-MM'],
  ['guarda ropa', 'TIG-067-MM'],
  ['cômoda', 'TIG-067-MM'],
  ['comoda', 'TIG-067-MM'],
  ['painel televisão', 'VALDE-111-MM'],
  ['cantinho do café', 'KAI-150-MM'],
  ['escrivaninha', 'VALDE-017-MM'],
  ['armário de cozinha', 'NES-190-MM'],
  ['rack atenas 220', 'MM-085-MAV'],
  ['MM-135-WF', 'MM-135-WF']
]) {
  test(`fixture encontra ${query}`, async () => {
    const result = await search(query);
    assert.equal(result.hits[0]?.sku, expected);
  });
}

test('consulta inexistente não devolve vitrine promocional', async () => {
  const result = await search('produto que definitivamente nao existe xyz');
  assert.equal(result.nbHits, 0);
  assert.deepEqual(result.hits, []);
});

test('aplica filtros e retorna facetas', async () => {
  const result = await search('armario', {
    filters: { categories: ['Armários de Cozinha'], brand: ['Nesher'], material: [], requiresAssembly: [] }
  });
  assert.equal(result.hits[0]?.sku, 'NES-190-MM');
  assert.equal(result.facets.brand.Nesher, 1);
});

test('comercial de fixture fica fora do registro pesquisável', async () => {
  const result = await search('MM-135-WF');
  assert.equal(Object.hasOwn(result.hits[0], 'commercial'), false);
  const commercial = await provider.getCommercial('MM-135-WF');
  assert.equal(commercial.status, 'confirmed');
  assert.equal(commercial.price, 2756.16);
});

test('fixture reproduz ordenação global por nome para o devmode', async () => {
  const ascending = await search('mesa', { sort: 'name_asc' });
  const descending = await search('mesa', { sort: 'name_desc' });
  assert.ok(ascending.hits.length > 1);
  assert.deepEqual(
    descending.hits.map((hit) => hit.sku),
    ascending.hits.map((hit) => hit.sku).reverse()
  );
});
