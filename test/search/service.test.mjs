import test from 'node:test';
import assert from 'node:assert/strict';

import { createSearchService, normalizeCommercial } from '../../worker/search/service.mjs';

const params = {
  query: 'cristalera',
  interpretedQuery: 'cristaleira',
  exact: false,
  page: 0,
  limit: 6,
  filters: {}
};

function discovery(hits) {
  return {
    name: 'test',
    async search() {
      return {
        hits,
        nbHits: hits.length,
        nbPages: 1,
        page: 0,
        hitsPerPage: 6,
        queryID: 'qid',
        processingTimeMS: 2,
        facets: { categories: { Cristaleiras: hits.length }, brand: { Marca: hits.length } }
      };
    }
  };
}

test('normaliza comércio Magazord sem inventar valores', () => {
  assert.deepEqual(normalizeCommercial({ valor: '99.90', valor_de: '120', qtde_estoque: 2, ativo: true }), {
    status: 'confirmed', price: 99.9, oldPrice: 120, discountPercent: null, inStock: true,
    availableQuantity: 2, productId: null, derivationId: null, derivationName: '', code: '',
    name: '', brand: '', category: '', url: ''
  });
  assert.deepEqual(normalizeCommercial({ valor: null, qtde_estoque: 0, ativo: true }), {
    status: 'confirmed', price: null, oldPrice: null, discountPercent: null, inStock: false,
    availableQuantity: 0, productId: null, derivationId: null, derivationName: '', code: '',
    name: '', brand: '', category: '', url: ''
  });
});

test('combina hits estáveis com comércio confirmado e correção', async () => {
  const service = createSearchService({
    discoveryProvider: discovery([{ objectID: 'A', sku: 'A', name: 'Cristaleira' }]),
    commercialProvider: { async getCommercial() { return { valor: 100, qtde_estoque: 1, ativo: true }; } }
  });
  const result = await service.search(params);
  assert.equal(result.hits[0].commercial.price, 100);
  assert.equal(result.hits[0].commercial.inStock, true);
  assert.equal(result.suggestions[0].query, 'cristaleira');
  assert.equal(result.facets.categories[0].value, 'Cristaleiras');
  assert.equal(result.partialCommercial, false);
});

test('omite SKU removido e não substitui por valor antigo', async () => {
  const error = Object.assign(new Error('removed'), { code: 'NOT_FOUND', status: 404 });
  const service = createSearchService({
    discoveryProvider: discovery([{ objectID: 'A', sku: 'A', price: 10 }]),
    commercialProvider: { async getCommercial() { throw error; } }
  });
  const result = await service.search(params);
  assert.deepEqual(result.hits, []);
  assert.equal(result.partialCommercial, false);
});

test('falha transitória mantém produto sem preço e marca resposta parcial', async () => {
  const service = createSearchService({
    discoveryProvider: discovery([{ objectID: 'A', sku: 'A', name: 'Cristaleira' }]),
    commercialProvider: { async getCommercial() { throw new Error('timeout'); } }
  });
  const result = await service.search(params);
  assert.deepEqual(result.hits[0].commercial, { status: 'unavailable' });
  assert.equal(result.partialCommercial, true);
  assert.equal(Object.hasOwn(result.hits[0].commercial, 'price'), false);
});
