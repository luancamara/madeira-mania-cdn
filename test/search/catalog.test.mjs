import test from 'node:test';
import assert from 'node:assert/strict';

import {
  assertSearchRecordSafe,
  extractDerivationSkus,
  mapMagazordProductToRecord
} from '../../worker/search/catalog.mjs';
import { normalizeText, parseSearchParams, resolveInterpretedQuery } from '../../worker/search/utils.mjs';

test('normaliza acentos, pontuação e espaços em português', () => {
  assert.equal(normalizeText('  Cômoda / Amêndoa  '), 'comoda amendoa');
  assert.equal(normalizeText('Guarda-Roupa'), 'guarda roupa');
});

test('interpreta aliases aprovados sem alterar busca exata', () => {
  assert.equal(resolveInterpretedQuery('cristalera'), 'cristaleira');
  assert.equal(resolveInterpretedQuery('painel televisão'), 'painel para tv');
  assert.equal(resolveInterpretedQuery('rak'), 'rack');
  assert.equal(resolveInterpretedQuery('raqui'), 'rack');
  assert.equal(resolveInterpretedQuery('raque'), 'rack');
  assert.equal(resolveInterpretedQuery('raki'), 'rack');
  assert.equal(resolveInterpretedQuery('racks'), 'rack');
  assert.equal(resolveInterpretedQuery('raqui para tv'), 'rack para tv');
  assert.equal(resolveInterpretedQuery('cristalera', true), 'cristalera');
  assert.equal(resolveInterpretedQuery('raqui para tv', true), 'raqui para tv');
});

test('valida parâmetros e limita paginação comercial', () => {
  const params = parseSearchParams(new URLSearchParams('q=mesa&limit=100&page=2&brand=A, B&brand=C'));
  assert.equal(params.limit, 12);
  assert.equal(params.page, 2);
  assert.equal(params.sort, 'relevance');
  assert.deepEqual(params.filters.brand, ['A', 'B', 'C']);
  assert.throws(() => parseSearchParams(new URLSearchParams('q=a')), /pelo menos 2/);
});

test('mapeia produto Magazord sem preço ou estoque', () => {
  const record = mapMagazordProductToRecord({
    nome: 'Armário Aéreo',
    codigo: 'SKU-1',
    marca: 'Marca Boa',
    categoria: 'Cozinha,Armários',
    valor: 999.9,
    valor_de: 1299,
    qtde_estoque: 3,
    percentual_desconto: 20,
    link: 'armario-aereo',
    midia_url: 'https://example.com/a.jpg',
    produto_id: 10,
    derivacao_id: 20,
    ratingAverage: 4.75,
    reviewCount: 8,
    caracteristicas: [
      { nome: 'Material', procar_valor: 'MDF' },
      { nome: 'Requer montagem', procar_valor: 'Sim' }
    ]
  });

  assert.deepEqual(record.categories, ['Cozinha', 'Armários']);
  assert.deepEqual(record.material, ['MDF']);
  assert.equal(record.requiresAssembly, 'Sim');
  assert.equal(record.url, '/armario-aereo');
  assert.equal(record.productId, 10);
  assert.equal(record.derivationId, 20);
  assert.equal(record.ratingAverage, 4.75);
  assert.equal(record.reviewCount, 8);
  assert.equal(Object.hasOwn(record, 'valor'), false);
  assert.equal(Object.hasOwn(record, 'qtde_estoque'), false);
  assert.equal(assertSearchRecordSafe(record), true);
});

test('rejeita campo comercial em qualquer nível do registro', () => {
  assert.throws(
    () => assertSearchRecordSafe({ objectID: '1', metadata: { valor_pix: 10 } }),
    Object.assign(/Campo comercial proibido/, { code: undefined })
  );
  assert.throws(() => assertSearchRecordSafe({ objectID: '1', inStock: true }), /Campo comercial proibido/);
});

test('extrai SKUs de todas as derivações', () => {
  assert.deepEqual(extractDerivationSkus({
    codigo: 'PAI',
    derivacoes: [{ codigo: 'A' }, { codigo: 'B' }, { codigo: 'A' }]
  }), ['A', 'B']);
});
