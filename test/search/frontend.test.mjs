import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const searchSource = await readFile(new URL('../../src/search.js', import.meta.url), 'utf8');
const searchCss = await readFile(new URL('../../src/search.css', import.meta.url), 'utf8');
const headerSource = await readFile(new URL('../../src/header.js', import.meta.url), 'utf8');
const buildSource = await readFile(new URL('../../build.sh', import.meta.url), 'utf8');

function extractClientFunction(name) {
  const match = searchSource.match(new RegExp(`function ${name}\\([^)]*\\) \\{[\\s\\S]*?\\n  \\}`));
  assert.ok(match, `função ${name} não encontrada`);
  return match[0];
}

test('cliente usa somente a API avançada e não analisa HTML da busca', () => {
  assert.match(searchSource, /API_BASE \+ '\/search'/);
  assert.doesNotMatch(searchSource, /DOMParser|dataVitrine|sessionStorage/);
  assert.doesNotMatch(searchSource, /fetch\(['"]\/busca/);
});

test('fallback do bundle ignora mm_dev_url indisponível e usa a API de produção', () => {
  const resolveApiBaseSource = extractClientFunction('resolveApiBase');
  const workerOrigin = 'https://madeira-mania-cdn.luancamara.workers.dev';
  const location = {
    href: 'https://www.madeiramania.com.br/busca?q=rak',
    hostname: 'www.madeiramania.com.br',
    origin: 'https://www.madeiramania.com.br'
  };
  const document = {
    documentElement: {
      classList: {
        contains(name) { return name === 'mm-dev-fallback'; }
      }
    },
    scripts: [{ src: `${workerOrigin}/madeira-mania.js?v=v2.0.52` }]
  };
  const localStorage = {
    getItem(name) {
      if (name === 'mm_dev_url') {
        return 'https://tunnel-inexistente.trycloudflare.com/madeira-mania.js';
      }
      return null;
    }
  };
  const resolveApiBase = Function(
    'localStorage', 'document', 'location', 'URL', 'WORKER_ORIGIN',
    `${resolveApiBaseSource}\nreturn resolveApiBase;`
  )(localStorage, document, location, URL, workerOrigin);

  assert.equal(resolveApiBase(), `${workerOrigin}/api`);
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

test('resultados avançados preservam o escopo visual nativo da vitrine', () => {
  const mountBlock = searchSource.match(/function ensureResultsRoot\(\) \{([\s\S]*?)\n    \}/);
  assert.ok(mountBlock);
  assert.match(mountBlock[1], /element\('section', '[^']*\bra-vitrine\b[^']*'\)/);
});

test('página avançada reconhece o template móvel e cria a área de resultados', () => {
  const resolveElementsSource = extractClientFunction('resolveSearchPageElements');
  const appended = [];
  const productsArea = {
    appendChild(node) { appended.push(node); }
  };
  const mobilePage = {
    querySelector(selector) {
      return selector === '.pesquisa-produtos' ? productsArea : null;
    }
  };
  const document = {
    querySelector() { return null; },
    getElementById(id) { return id === 'main-area' ? mobilePage : null; },
    createElement(tagName) { return { tagName, id: '' }; }
  };
  const resolveSearchPageElements = Function(
    'document',
    `${resolveElementsSource}\nreturn resolveSearchPageElements;`
  )(document);

  const resolved = resolveSearchPageElements();

  assert.equal(resolved.pageBox, mobilePage);
  assert.equal(resolved.productsArea, productsArea);
  assert.equal(resolved.mobileTemplate, true);
  assert.equal(resolved.listArea.id, 'lista-produtos-area');
  assert.deepEqual(appended, [resolved.listArea]);
  assert.match(searchSource, /var nativeFilters = mobileTemplate \? null :/);
  assert.match(searchSource, /mobileTemplate && nativeOrder && nativeOrder\.parentNode/);
  assert.match(
    searchCss,
    /@media \(max-width:\s*767px\)[\s\S]*?#mm-search-page-results \.product-list > li\s*\{[\s\S]*?width:\s*calc\(\(100% - 12px\) \/ 2\)\s*!important;/
  );
  assert.match(
    searchCss,
    /@media \(max-width:\s*767px\)[\s\S]*?\.mm-search-mobile-filter-toggle\s*\{[\s\S]*?min-height:\s*44px;/
  );
  assert.match(
    searchCss,
    /@media \(max-width:\s*767px\)[\s\S]*?\.mm-search-native-order select\s*\{[\s\S]*?min-height:\s*44px;/
  );
});

test('busca avançada oculta o exibir todos órfão da recomendação nativa', () => {
  assert.match(
    searchCss,
    /body\.mm-search-native-active \.pesquisa-produtos > \.rightPesquisa\s*\{[\s\S]*?display:\s*none\s*!important;/
  );
});

test('página assume o carregamento antes da API e restaura o nativo na primeira falha', () => {
  const loadBlock = searchSource.match(/function load\(\) \{([\s\S]*?)\n    \}\n\n    function navigate/);
  const loadingBlock = searchSource.match(/function showPageLoading\(\) \{([\s\S]*?)\n    \}\n\n    function renderError/);
  assert.ok(loadBlock);
  assert.ok(loadingBlock);
  assert.match(loadBlock[1], /showPageLoading\(\);/);
  assert.ok(loadBlock[1].indexOf('showPageLoading();') < loadBlock[1].indexOf('fetchSearch({'));
  assert.match(loadBlock[1], /if \(!lastPayload\) \{ restoreNative\(\); return; \}/);
  assert.match(loadingBlock[1], /if \(!lastPayload\) \{[\s\S]*classList\.add\('mm-search-initial-loading'\)/);
  assert.match(searchSource, /classList\.remove\('mm-search-initial-loading'\)/);
  assert.match(searchSource, /setAttribute\('role', 'status'\)/);
  assert.match(searchCss, /\.mm-search-page-loading\s*\{/);
});

test('primeiro carregamento usa skeleton cards responsivos com shimmer acessível', () => {
  const skeletonBlock = searchSource.match(/function createPageLoadingSkeleton\(\) \{([\s\S]*?)\n  \}/);
  assert.ok(skeletonBlock);
  assert.match(skeletonBlock[1], /mm-search-sr-only[^\n]*Carregando resultados/);
  assert.match(skeletonBlock[1], /mm-search-shimmer-layout/);
  assert.match(skeletonBlock[1], /mm-search-shimmer-sidebar/);
  assert.match(skeletonBlock[1], /mm-search-shimmer-filter-group/);
  assert.match(skeletonBlock[1], /mm-search-shimmer-main/);
  assert.match(skeletonBlock[1], /mm-search-shimmer-toolbar/);
  assert.match(skeletonBlock[1], /mm-search-shimmer-notice/);
  assert.match(skeletonBlock[1], /mm-search-shimmer-grid/);
  assert.match(skeletonBlock[1], /index < 6/);
  assert.match(skeletonBlock[1], /aria-hidden/);
  assert.doesNotMatch(searchSource, /mm-search-page-spinner/);
  assert.match(
    searchCss,
    /body\.mm-search-initial-loading \.container\.box-pesquisa \.pesquisa-produtos\s*\{[\s\S]*?width:\s*100%\s*!important;/
  );
  assert.match(
    searchCss,
    /\.mm-search-shimmer-layout\s*\{[\s\S]*?grid-template-columns:\s*23%\s+74%;[\s\S]*?column-gap:\s*3%;/
  );
  assert.match(searchCss, /\.mm-search-shimmer-grid\s*\{[\s\S]*?grid-template-columns:\s*repeat\(3,/);
  assert.match(
    searchCss,
    /@media \(max-width:\s*767px\)[\s\S]*?\.mm-search-shimmer-sidebar\s*\{[\s\S]*?display:\s*none;/
  );
  assert.match(searchCss, /@keyframes mm-search-shimmer/);
  assert.match(searchCss, /@media \(prefers-reduced-motion:\s*reduce\)/);
});

test('loader do head protege o primeiro paint da busca e possui failsafe', () => {
  assert.match(buildSource, /classList\.add\("mm-search-loading"\)/);
  assert.match(buildSource, /html\.mm-search-loading \.container\.box-pesquisa #search-area/);
  assert.match(buildSource, /html\.mm-search-loading body\.device-mobile #main-area #search-area/);
  assert.match(buildSource, /html\.mm-search-loading body\.device-mobile #main-area #search-area::before/);
  assert.match(buildSource, /@keyframes mm-search-early-shimmer/);
  assert.doesNotMatch(buildSource, /content:"Carregando resultados\\2026"/);
  assert.match(buildSource, /classList\.remove\('mm-search-loading'\)/);
  assert.match(buildSource, /PAGES_HOST \+ '\/madeira-mania\.js\?v=' \+ VERSION/);
  assert.doesNotMatch(buildSource, /PAGES_HOST \+ '\/js\/madeira-mania\.js\?v=' \+ VERSION/);
});

test('cards da página usam a miniatura quadrada do CDN nativo', () => {
  const safeImageSource = extractClientFunction('safeImageUrl');
  const cardImageSource = extractClientFunction('nativeCardImageUrl');
  const nativeCardImageUrl = Function(
    'location',
    `${safeImageSource}\n${cardImageSource}\nreturn nativeCardImageUrl;`
  )({ href: 'https://www.madeiramania.com.br/busca', hostname: 'www.madeiramania.com.br' });

  assert.equal(
    nativeCardImageUrl('https://www.madeiramania.com.br/img/2025/12/produto/5488/rack.jpeg'),
    'https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5488/rack.jpeg?ims=400x400'
  );
  assert.equal(
    nativeCardImageUrl('https://madeiramania.cdn.magazord.com.br/img/produto/rack.jpg?ims=800x800'),
    'https://madeiramania.cdn.magazord.com.br/img/produto/rack.jpg?ims=400x400'
  );

  const cardBlock = searchSource.match(/function createNativeProductCard\([\s\S]*?\n  \}/);
  assert.ok(cardBlock);
  assert.match(cardBlock[0], /nativeCardImageUrl\(hit\.image\)/);
});
