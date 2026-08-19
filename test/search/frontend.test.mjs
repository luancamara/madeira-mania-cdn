import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const searchSource = await readFile(new URL('../../src/search.js', import.meta.url), 'utf8');
const headerSource = await readFile(new URL('../../src/header.js', import.meta.url), 'utf8');
const buildSource = await readFile(new URL('../../build.sh', import.meta.url), 'utf8');

test('cliente usa somente a API avançada e não analisa HTML da busca', () => {
  assert.match(searchSource, /API_BASE \+ '\/search'/);
  assert.doesNotMatch(searchSource, /DOMParser|dataVitrine|sessionStorage/);
  assert.doesNotMatch(searchSource, /fetch\(['"]\/busca/);
});

test('busca avançada carrega antes do header e assume o modal', () => {
  assert.ok(buildSource.indexOf('/* === search.js === */') < buildSource.indexOf('/* === header.js === */'));
  assert.match(headerSource, /MMTextSearch\.initHeader/);
  assert.match(headerSource, /if \(useLegacySearch\)/);
});

test('compra direta confirma preflight e contexto comercial ao vivo', () => {
  assert.match(searchSource, /operation', 'buyButton'/);
  assert.match(searchSource, /\/search\/cart-context\?sku=/);
  assert.match(searchSource, /typeof window\.addCartVitrine !== 'function'/);
  assert.match(searchSource, /\{ source: 'mm-search' \}/);
});

test('página expõe apenas ordenações globais sem preço ou estoque', () => {
  const sortBlock = searchSource.match(/var SORTS = \{([\s\S]*?)\n  \};/);
  assert.ok(sortBlock);
  assert.match(sortBlock[1], /relevance/);
  assert.match(sortBlock[1], /rating_desc/);
  assert.doesNotMatch(sortBlock[1], /price|stock|discount|preco|estoque|desconto/i);
});
