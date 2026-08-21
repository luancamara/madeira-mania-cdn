/* =============================================
   TEXT SEARCH — Madeira Mania
   Algolia discovery + live Magazord commerce.

   Keeps the current header modal and /busca visual language. The advanced
   page assumes the loading state immediately and restores Magazord on failure.
   ============================================= */

(function () {
  if (window.MMTextSearch && window.MMTextSearch.version) return;

  var WORKER_ORIGIN = 'https://madeira-mania-cdn.luancamara.workers.dev';
  var RECENT_KEY = 'mm_recent_searches_v2';
  var MIN_QUERY_LENGTH = 2;
  var MODAL_LIMIT = 6;
  var PAGE_LIMIT = 12;
  var REQUEST_TIMEOUT_MS = 5000;
  var BUY_TIMEOUT_MS = 6000;
  var HEADER_DEBOUNCE_MS = 240;
  var SORTS = {
    relevance: 'Relevância',
    newest: 'Lançamentos',
    name_asc: 'A a Z (Nome)',
    name_desc: 'Z a A (Nome)',
    rating_desc: 'Melhor avaliados'
  };
  var FILTERS = {
    categories: { param: 'category', label: 'Categorias', nativeName: 'categoria', className: 'filtro-categorias' },
    brand: { param: 'brand', label: 'Marcas', nativeName: 'marca', className: 'filtro-marcas' },
    material: { param: 'material', label: 'Material', nativeName: 'material', className: 'filtro-caracteristicas' },
    requiresAssembly: { param: 'assembly', label: 'Requer montagem', nativeName: 'montagem', className: 'filtro-caracteristicas' }
  };

  function ready(callback) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', callback);
    else callback();
  }

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = String(text);
    return node;
  }

  function setAttributes(node, attributes) {
    Object.keys(attributes || {}).forEach(function (name) {
      var value = attributes[name];
      if (value === false || value === null || value === undefined) return;
      if (value === true) node.setAttribute(name, '');
      else node.setAttribute(name, String(value));
    });
    return node;
  }

  function empty(node) {
    while (node && node.firstChild) node.removeChild(node.firstChild);
  }

  function numberOrNull(value) {
    if (value === null || value === undefined || value === '') return null;
    var number = Number(value);
    return Number.isFinite(number) ? number : null;
  }

  function formatMoney(value) {
    var number = numberOrNull(value);
    if (number === null) return '';
    try {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);
    } catch (error) {
      return 'R$ ' + number.toFixed(2).replace('.', ',');
    }
  }

  function formatCount(value) {
    try { return new Intl.NumberFormat('pt-BR').format(Number(value) || 0); }
    catch (error) { return String(Number(value) || 0); }
  }

  function normalizeQuery(value) {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('pt-BR')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim()
      .replace(/\s+/g, ' ');
  }

  function resolveApiBase() {
    var devFallback = Boolean(
      document.documentElement &&
      document.documentElement.classList &&
      document.documentElement.classList.contains('mm-dev-fallback')
    );
    if (devFallback) return WORKER_ORIGIN + '/api';

    try {
      var override = String(localStorage.getItem('mm_search_api_url') || '').trim();
      if (override) {
        var overrideUrl = new URL(override, location.href);
        if (overrideUrl.protocol === 'http:' || overrideUrl.protocol === 'https:') {
          return overrideUrl.origin + overrideUrl.pathname.replace(/\/$/, '').replace(/\/api$/, '') + '/api';
        }
      }
      var devBundle = String(localStorage.getItem('mm_dev_url') || '').trim();
      if (devBundle) {
        var devUrl = new URL(devBundle, location.href);
        if (devUrl.protocol === 'http:' || devUrl.protocol === 'https:') return devUrl.origin + '/api';
      }
    } catch (error) {}

    try {
      var scripts = Array.prototype.slice.call(document.scripts || []);
      var bundle = scripts.find(function (script) {
        return script.src && /(?:madeira-mania\.js)(?:\?|$)/.test(script.src);
      });
      if (bundle) {
        var bundleUrl = new URL(bundle.src, location.href);
        if (
          bundleUrl.hostname === 'localhost' || bundleUrl.hostname === '127.0.0.1' ||
          /\.trycloudflare\.com$/.test(bundleUrl.hostname)
        ) return bundleUrl.origin + '/api';
      }
      if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') return location.origin + '/api';
    } catch (error) {}
    return WORKER_ORIGIN + '/api';
  }

  var API_BASE = resolveApiBase();

  function safeImageUrl(value) {
    try {
      var url = new URL(String(value || ''), location.href);
      if (url.protocol !== 'http:' && url.protocol !== 'https:') return '';
      var allowedHost =
        url.hostname === location.hostname ||
        /(^|\.)magazord\.com\.br$/i.test(url.hostname) ||
        url.hostname === 'magazord-public.s3.sa-east-1.amazonaws.com';
      return allowedHost ? url.href : '';
    } catch (error) { return ''; }
  }

  function nativeCardImageUrl(value) {
    var safe = safeImageUrl(value);
    if (!safe) return '';
    try {
      var url = new URL(safe);
      var isProductImage = /^\/img\//i.test(url.pathname);
      if (
        isProductImage &&
        (url.hostname === 'www.madeiramania.com.br' || url.hostname === 'madeiramania.com.br')
      ) url.hostname = 'madeiramania.cdn.magazord.com.br';
      if (isProductImage && url.hostname === 'madeiramania.cdn.magazord.com.br') {
        url.protocol = 'https:';
        url.searchParams.set('ims', '400x400');
      }
      return url.href;
    } catch (error) { return safe; }
  }

  function safeProductUrl(value) {
    try {
      var raw = String(value || '').trim();
      if (!raw) return '/';
      var url = new URL(raw, location.origin);
      if (url.protocol !== 'http:' && url.protocol !== 'https:') return '/';
      var isStore = url.hostname === location.hostname || /(^|\.)madeiramania\.com\.br$/i.test(url.hostname);
      return isStore ? url.href : '/';
    } catch (error) { return '/'; }
  }

  function getRecentSearches() {
    try {
      var parsed = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
      return Array.isArray(parsed) ? parsed.filter(Boolean).map(String).slice(0, 5) : [];
    } catch (error) { return []; }
  }

  function saveRecentSearch(query) {
    query = String(query || '').trim();
    if (query.length < MIN_QUERY_LENGTH) return;
    try {
      var normalized = normalizeQuery(query);
      var list = getRecentSearches().filter(function (item) { return normalizeQuery(item) !== normalized; });
      list.unshift(query);
      localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, 5)));
    } catch (error) {}
  }

  function userToken() {
    var key = 'mm_search_user_token';
    try {
      var existing = localStorage.getItem(key);
      if (existing) return existing;
      var created = 'mm-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
      localStorage.setItem(key, created);
      return created;
    } catch (error) { return 'anonymous'; }
  }

  function emitEvent(eventName, detail) {
    var data = detail || {};
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(Object.assign({ event: eventName, eventName: eventName }, data));
    } catch (error) {}
    try { window.dispatchEvent(new CustomEvent(eventName, { detail: data })); }
    catch (error) {}

    if (
      eventName !== 'mm_search_product_clicked' &&
      eventName !== 'mm_search_results_viewed' &&
      eventName !== 'mm_search_no_results'
    ) return;
    try {
      fetch(API_BASE + '/search/events', {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        cache: 'no-store',
        keepalive: true,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.assign({ eventName: eventName, userToken: userToken() }, data))
      }).catch(function () {});
    } catch (error) {}
  }

  function buildApiUrl(params) {
    var url = new URL(API_BASE + '/search');
    url.searchParams.set('q', String(params.query || ''));
    url.searchParams.set('page', String(params.page || 0));
    url.searchParams.set('limit', String(params.limit || PAGE_LIMIT));
    if (params.exact) url.searchParams.set('exact', '1');
    if (SORTS[params.sort]) url.searchParams.set('sort', params.sort);
    Object.keys(FILTERS).forEach(function (key) {
      (params.filters && params.filters[key] || []).forEach(function (value) {
        url.searchParams.append(FILTERS[key].param, value);
      });
    });
    return url.toString();
  }

  function validateSearchPayload(payload) {
    if (!payload || typeof payload !== 'object' || !Array.isArray(payload.hits)) {
      var invalid = new Error('Resposta de busca inválida.');
      invalid.code = 'INVALID_SEARCH_RESPONSE';
      throw invalid;
    }
    payload.hits = payload.hits.filter(function (hit) {
      return hit && typeof hit === 'object' && (hit.objectID || hit.sku) && hit.name;
    }).slice(0, PAGE_LIMIT);
    payload.nbHits = Math.max(0, Number(payload.nbHits) || 0);
    payload.nbPages = Math.max(0, Number(payload.nbPages) || 0);
    payload.page = Math.max(0, Number(payload.page) || 0);
    payload.facets = payload.facets && typeof payload.facets === 'object' ? payload.facets : {};
    return payload;
  }

  function fetchSearch(params, controller) {
    var timer = setTimeout(function () {
      if (controller) controller.abort();
    }, REQUEST_TIMEOUT_MS);
    return fetch(buildApiUrl(params), {
      method: 'GET',
      mode: 'cors',
      credentials: 'omit',
      cache: 'no-store',
      signal: controller && controller.signal,
      headers: { Accept: 'application/json' }
    }).then(function (response) {
      return response.json().catch(function () { return {}; }).then(function (payload) {
        if (!response.ok) {
          var requestError = new Error(payload && payload.error && payload.error.message || 'Não foi possível concluir a busca.');
          requestError.code = payload && payload.error && payload.error.code || 'SEARCH_REQUEST_FAILED';
          requestError.status = response.status;
          throw requestError;
        }
        return validateSearchPayload(payload);
      });
    }).then(function (payload) {
      clearTimeout(timer);
      return payload;
    }, function (error) {
      clearTimeout(timer);
      throw error;
    });
  }

  function searchPageHref(query, extra) {
    var url = new URL('/busca', location.origin);
    url.searchParams.set('q', String(query || ''));
    Object.keys(extra || {}).forEach(function (key) {
      if (extra[key] !== null && extra[key] !== undefined && extra[key] !== '') {
        url.searchParams.set(key, String(extra[key]));
      }
    });
    return url.pathname + url.search;
  }

  function createHeaderTextLink(query, label, className) {
    var link = element('a', className || 'mm-h-search-result');
    link.href = searchPageHref(query);
    link.setAttribute('data-mm-search-query', query);
    link.appendChild(element('span', 'mm-h-search-result-icon', '⌕'));
    link.appendChild(element('span', 'mm-h-search-result-label', label));
    return link;
  }

  function createHeaderProduct(hit, position, queryID) {
    var link = element('a', 'mm-h-search-product');
    link.href = safeProductUrl(hit.commercial && hit.commercial.url || hit.url);
    link.setAttribute('data-mm-search-product', '');
    link.setAttribute('data-object-id', String(hit.objectID || hit.sku || ''));
    link.setAttribute('data-position', String(position));
    if (queryID) link.setAttribute('data-query-id', String(queryID));

    var thumb = element('span', 'mm-h-search-product-thumb');
    var imageUrl = safeImageUrl(hit.image);
    if (imageUrl) {
      var image = setAttributes(element('img'), {
        src: imageUrl, alt: '', loading: 'lazy', width: 64, height: 64
      });
      image.addEventListener('error', function () {
        image.remove();
        thumb.appendChild(element('span', 'mm-h-search-product-noimg'));
      });
      thumb.appendChild(image);
    } else thumb.appendChild(element('span', 'mm-h-search-product-noimg'));

    var commercial = hit.commercial || {};
    if (commercial.status === 'confirmed' && Number(commercial.discountPercent) > 0) {
      thumb.appendChild(element('span', 'mm-h-search-product-discount', '-' + Math.round(Number(commercial.discountPercent)) + '%'));
    }
    link.appendChild(thumb);

    var body = element('span', 'mm-h-search-product-body');
    body.appendChild(element('span', 'mm-h-search-product-name', hit.name || hit.sku || 'Produto'));
    var prices = element('span', 'mm-h-search-product-prices');
    if (commercial.status === 'confirmed') {
      var price = numberOrNull(commercial.price);
      var oldPrice = numberOrNull(commercial.oldPrice);
      if (price !== null && oldPrice !== null && oldPrice > price) {
        prices.appendChild(element('span', 'mm-h-search-product-oldprice', formatMoney(oldPrice)));
      }
      prices.appendChild(element(
        'span', 'mm-h-search-product-price',
        price !== null ? formatMoney(price) : 'Consulte o preço'
      ));
    } else prices.appendChild(element('span', 'mm-h-search-product-price', 'Ver produto'));
    body.appendChild(prices);
    link.appendChild(body);
    return link;
  }

  function initHeader() {
    var header = document.getElementById('mm-header');
    var overlay = document.getElementById('mm-h-search-overlay');
    var openButton = document.getElementById('mm-h-buscar');
    var input = document.getElementById('mm-h-search-input');
    var results = document.getElementById('mm-h-search-results');
    var suggestions = document.getElementById('mm-h-search-suggestions');
    var form = overlay && overlay.querySelector('.mm-h-search-form');
    if (!header || !overlay || !openButton || !input || !results || !form) return false;
    if (input.getAttribute('data-mm-text-search') === 'ready') return true;
    input.setAttribute('data-mm-text-search', 'ready');
    input.setAttribute('role', 'combobox');
    input.setAttribute('aria-autocomplete', 'list');
    input.setAttribute('aria-controls', 'mm-h-search-results');
    input.setAttribute('aria-expanded', 'false');
    results.setAttribute('role', 'listbox');
    results.setAttribute('aria-live', 'polite');
    results.setAttribute('aria-label', 'Sugestões e produtos encontrados');

    var controller = null;
    var debounce = null;
    var sequence = 0;

    function setOpen(open) {
      results.hidden = !open;
      input.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    function showPopular(show) {
      if (suggestions) suggestions.hidden = !show;
    }

    function renderIdle() {
      if (controller) controller.abort();
      empty(results);
      var recent = getRecentSearches();
      if (!recent.length) {
        setOpen(false);
        showPopular(true);
        return;
      }
      showPopular(true);
      var section = element('div', 'mm-h-search-section');
      section.appendChild(element('span', 'mm-h-search-sug-label', 'Buscas recentes'));
      var list = element('ul', 'mm-h-search-list');
      recent.forEach(function (query) {
        var item = element('li');
        item.appendChild(createHeaderTextLink(query, query));
        list.appendChild(item);
      });
      section.appendChild(list);
      results.appendChild(section);
      setOpen(true);
    }

    function renderHeaderBase(query, loading) {
      empty(results);
      showPopular(false);
      var list = element('ul', 'mm-h-search-list');
      var item = element('li');
      var cta = createHeaderTextLink(query, 'Buscar por “' + query + '”', 'mm-h-search-result mm-h-search-result-primary');
      cta.appendChild(element('span', 'mm-h-search-result-arrow', '→'));
      item.appendChild(cta);
      list.appendChild(item);
      results.appendChild(list);

      var productSection = element('div', 'mm-h-search-products-section');
      productSection.appendChild(element('span', 'mm-h-search-sug-label', loading ? 'Buscando produtos…' : 'Produtos'));
      var grid = element('div', 'mm-h-search-products-grid');
      if (loading) {
        grid.classList.add('mm-h-search-products-loading');
        for (var index = 0; index < 4; index += 1) grid.appendChild(element('div', 'mm-h-search-product-skel'));
      }
      productSection.appendChild(grid);
      results.appendChild(productSection);
      setOpen(true);
      return { section: productSection, grid: grid };
    }

    function renderHeaderResponse(payload) {
      var rendered = renderHeaderBase(payload.query, false);
      if (payload.source === 'fixture') {
        results.insertBefore(element('p', 'mm-search-fixture-note', 'Prévia local · dados de demonstração'), results.firstChild);
      }
      if (payload.interpretedQuery && normalizeQuery(payload.interpretedQuery) !== normalizeQuery(payload.query)) {
        var correction = element('div', 'mm-h-search-correction');
        var copy = element('span');
        copy.appendChild(document.createTextNode('Resultados para '));
        copy.appendChild(element('strong', '', payload.interpretedQuery));
        correction.appendChild(copy);
        var exact = element('a', '', 'Buscar exatamente “' + payload.query + '”');
        exact.href = searchPageHref(payload.query, { exact: '1' });
        exact.addEventListener('click', function () {
          emitEvent('mm_search_correction_used', {
            query: payload.query, interpretedQuery: payload.interpretedQuery, exact: true, context: 'header'
          });
        });
        correction.appendChild(exact);
        results.insertBefore(correction, rendered.section);
      }

      if (!payload.hits.length) {
        rendered.section.removeChild(rendered.grid);
        rendered.section.appendChild(element('p', 'mm-h-search-empty', 'Nenhum produto encontrado. Tente outra palavra ou o código do produto.'));
        emitEvent('mm_search_no_results', {
          query: payload.query, context: 'header', queryID: payload.queryID || ''
        });
      } else {
        payload.hits.slice(0, MODAL_LIMIT).forEach(function (hit, index) {
          rendered.grid.appendChild(createHeaderProduct(hit, index + 1, payload.queryID));
        });
        rendered.section.querySelector('.mm-h-search-sug-label').textContent =
          'Produtos · ' + formatCount(payload.nbHits) + (payload.nbHits === 1 ? ' resultado' : ' resultados');
        emitEvent('mm_search_results_viewed', {
          query: payload.query, context: 'header', resultCount: payload.nbHits, queryID: payload.queryID || ''
        });
      }
      if (payload.partialCommercial) {
        results.appendChild(element('p', 'mm-search-commercial-note', 'Alguns preços não puderam ser confirmados agora e não foram exibidos.'));
      }
    }

    function renderHeaderError(query) {
      var rendered = renderHeaderBase(query, false);
      rendered.section.removeChild(rendered.grid);
      var message = element('p', 'mm-h-search-error');
      message.appendChild(element('strong', '', 'A busca rápida não respondeu. '));
      message.appendChild(document.createTextNode('Pressione Enter para abrir a página de resultados.'));
      rendered.section.appendChild(message);
    }

    function run(query) {
      query = String(query || '').trim();
      if (query.length < MIN_QUERY_LENGTH) { renderIdle(); return; }
      sequence += 1;
      var current = sequence;
      if (controller) controller.abort();
      controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      renderHeaderBase(query, true);
      fetchSearch({ query: query, page: 0, limit: MODAL_LIMIT, sort: 'relevance', filters: {} }, controller)
        .then(function (payload) {
          if (current !== sequence || input.value.trim() !== query) return;
          renderHeaderResponse(payload);
        })
        .catch(function (error) {
          if (error && error.name === 'AbortError') return;
          if (current !== sequence || input.value.trim() !== query) return;
          renderHeaderError(query);
        });
    }

    input.addEventListener('input', function () {
      clearTimeout(debounce);
      var query = input.value.trim();
      if (query.length < MIN_QUERY_LENGTH) { renderIdle(); return; }
      renderHeaderBase(query, true);
      debounce = setTimeout(function () { run(query); }, HEADER_DEBOUNCE_MS);
    });

    input.addEventListener('keydown', function (event) {
      if (event.key !== 'ArrowDown') return;
      var first = results.querySelector('a[href], button:not([disabled])');
      if (first) { event.preventDefault(); first.focus(); }
    });

    results.addEventListener('keydown', function (event) {
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
      var items = Array.prototype.slice.call(results.querySelectorAll('a[href], button:not([disabled])'));
      var index = items.indexOf(document.activeElement);
      if (index < 0) return;
      event.preventDefault();
      if (event.key === 'ArrowDown') (items[index + 1] || items[0]).focus();
      else if (index === 0) input.focus();
      else items[index - 1].focus();
    });

    results.addEventListener('click', function (event) {
      var queryLink = event.target.closest && event.target.closest('[data-mm-search-query]');
      if (queryLink) saveRecentSearch(queryLink.getAttribute('data-mm-search-query'));
      var product = event.target.closest && event.target.closest('[data-mm-search-product]');
      if (product) {
        saveRecentSearch(input.value);
        emitEvent('mm_search_product_clicked', {
          query: input.value.trim(), context: 'header', objectID: product.getAttribute('data-object-id'),
          queryID: product.getAttribute('data-query-id') || '', position: Number(product.getAttribute('data-position')) || 1
        });
      }
    });

    form.addEventListener('submit', function (event) {
      var query = input.value.trim();
      if (query.length < MIN_QUERY_LENGTH) { event.preventDefault(); input.focus(); return; }
      saveRecentSearch(query);
      emitEvent('mm_search_submitted', { query: query, context: 'header' });
    });

    openButton.addEventListener('click', function () {
      if (input.value.trim().length >= MIN_QUERY_LENGTH) run(input.value);
      else renderIdle();
    });
    renderIdle();
    return true;
  }

  function splitValues(values) {
    var output = [];
    (values || []).forEach(function (raw) {
      String(raw || '').split(',').forEach(function (value) {
        value = value.trim();
        if (value && output.indexOf(value) === -1) output.push(value);
      });
    });
    return output.slice(0, 12);
  }

  function emptyFilters() {
    return { categories: [], brand: [], material: [], requiresAssembly: [] };
  }

  function readPageState() {
    var params = new URLSearchParams(location.search);
    var requestedPage = Number.parseInt(params.get('page') || '1', 10);
    var sort = params.get('sort') || 'relevance';
    if (!SORTS[sort]) sort = 'relevance';
    var filters = emptyFilters();
    Object.keys(FILTERS).forEach(function (key) {
      filters[key] = splitValues(params.getAll(FILTERS[key].param));
    });
    return {
      query: String(params.get('q') || '').trim(),
      exact: params.get('exact') === '1',
      page: Math.max(0, (Number.isFinite(requestedPage) ? requestedPage : 1) - 1),
      sort: sort,
      filters: filters
    };
  }

  function cloneState(state) {
    var filters = emptyFilters();
    Object.keys(FILTERS).forEach(function (key) { filters[key] = (state.filters[key] || []).slice(); });
    return {
      query: state.query,
      exact: Boolean(state.exact),
      page: Math.max(0, Number(state.page) || 0),
      sort: SORTS[state.sort] ? state.sort : 'relevance',
      filters: filters
    };
  }

  function pageStateUrl(state) {
    var url = new URL('/busca', location.origin);
    url.searchParams.set('q', state.query);
    if (state.exact) url.searchParams.set('exact', '1');
    if (state.sort && state.sort !== 'relevance') url.searchParams.set('sort', state.sort);
    Object.keys(FILTERS).forEach(function (key) {
      (state.filters[key] || []).forEach(function (value) {
        url.searchParams.append(FILTERS[key].param, value);
      });
    });
    if (state.page > 0) url.searchParams.set('page', String(state.page + 1));
    return url.pathname + url.search;
  }

  function selectedFilterCount(state) {
    return Object.keys(FILTERS).reduce(function (total, key) {
      return total + (state.filters[key] || []).length;
    }, 0);
  }

  function facetItems(payload, state, key) {
    var selected = state.filters[key] || [];
    var byValue = Object.create(null);
    var source = payload.facets && Array.isArray(payload.facets[key]) ? payload.facets[key] : [];
    source.forEach(function (item) {
      if (!item || !String(item.value || '').trim()) return;
      byValue[item.value] = { value: String(item.value), count: Math.max(0, Number(item.count) || 0) };
    });
    selected.forEach(function (value) {
      if (!byValue[value]) byValue[value] = { value: value, count: 0 };
    });
    return Object.keys(byValue).map(function (value) { return byValue[value]; }).sort(function (left, right) {
      var leftSelected = selected.indexOf(left.value) === -1 ? 0 : 1;
      var rightSelected = selected.indexOf(right.value) === -1 ? 0 : 1;
      return rightSelected - leftSelected || right.count - left.count || left.value.localeCompare(right.value, 'pt-BR');
    }).slice(0, 12);
  }

  function toggledState(state, key, value) {
    var next = cloneState(state);
    var values = next.filters[key];
    var index = values.indexOf(value);
    if (index === -1) values.push(value);
    else values.splice(index, 1);
    next.page = 0;
    return next;
  }

  function createNativeFilterGroup(payload, state, key) {
    var metadata = FILTERS[key];
    var items = facetItems(payload, state, key);
    if (!items.length) return null;
    var container = element('div', 'filtro-container ' + metadata.className);
    var heading = element('h2');
    heading.appendChild(element('span', '', metadata.label));
    var arrow = setAttributes(element('a', 'arrow down'), { href: '#', 'aria-label': 'Alternar ' + metadata.label });
    arrow.setAttribute('data-mm-filter-toggle', '');
    heading.appendChild(arrow);
    container.appendChild(heading);

    var list = element('ul', 'filtro');
    list.setAttribute('data-filter-name', metadata.nativeName);
    items.forEach(function (item, index) {
      var selected = state.filters[key].indexOf(item.value) !== -1;
      var listItem = element('li');
      var link = element('a', 'filtro-link');
      link.href = pageStateUrl(toggledState(state, key, item.value));
      link.rel = 'nofollow';
      link.setAttribute('data-mm-filter-key', key);
      link.setAttribute('data-mm-filter-value', item.value);
      var label = element('div', 'label_check');
      var input = setAttributes(element('input', 'filtro-checkbox'), {
        type: 'checkbox', id: 'mm-filter-' + key + '-' + index, value: item.value, tabindex: '-1'
      });
      input.checked = selected;
      label.appendChild(input);
      label.appendChild(element('div', 'filtro-pretty-check'));
      var description = element('span', 'filtro-desc', item.value);
      description.appendChild(element('small', 'mm-search-facet-count', ' (' + formatCount(item.count) + ')'));
      label.appendChild(description);
      link.appendChild(label);
      listItem.appendChild(link);
      list.appendChild(listItem);
    });
    container.appendChild(list);
    return container;
  }

  function createNativeFilters(payload, state) {
    var root = element('div', 'filtros mm-search-native-filters');
    var form = element('form', 'has-js');
    form.method = 'get';
    var count = selectedFilterCount(state);
    if (count) {
      var selected = element('div', 'filtros-selecionados');
      var title = element('p', 'flex center space-between', 'Filtros Selecionados ');
      title.appendChild(element('span', 'count', String(count)));
      selected.appendChild(title);
      var clear = setAttributes(element('button', 'limpa-filtros flex center justify-center', 'Remover filtros'), {
        type: 'button', title: 'Limpar filtros', 'data-mm-clear-filters': ''
      });
      selected.appendChild(clear);
      form.appendChild(selected);
    }
    Object.keys(FILTERS).forEach(function (key) {
      var group = createNativeFilterGroup(payload, state, key);
      if (group) form.appendChild(group);
    });
    root.appendChild(form);
    return root;
  }

  function createNativeOrder(payload, state) {
    var order = element('div', 'ordenacao clearfix mm-search-native-order');
    var inner = element('div', 'registros-ordem');
    inner.appendChild(element(
      'span', 'registros-numero',
      formatCount(payload.nbHits) + (payload.nbHits === 1 ? ' produto encontrado para essa busca' : ' produtos encontrados para essa busca')
    ));
    var form = element('form');
    form.method = 'get';
    var label = element('label', 'mm-search-sr-only', 'Ordenar resultados');
    label.htmlFor = 'ordem';
    form.appendChild(label);
    var select = setAttributes(element('select'), { id: 'ordem', name: 'ordem', 'data-mm-search-sort': '' });
    Object.keys(SORTS).forEach(function (value) {
      var option = element('option', '', SORTS[value]);
      option.value = value;
      option.selected = value === state.sort;
      select.appendChild(option);
    });
    form.appendChild(select);
    inner.appendChild(form);
    order.appendChild(inner);
    return order;
  }

  var PRODUCT_LI_CLASS = 'relative items-center overflow-hidden min-h-[auto] bg-color-white float-left w-[31.81%] mr-[2.27%] mt-space-10 max-md:mb-[15px] max-md:!block max-md:mt-space-10';
  var PRODUCT_NAME_CLASS = 'product-name text-cor-texto mt-space-20 max-sm:mt-space-10 block text-[1.06em] leading-[1.25em] max-sm:text-[0.94em] whitespace-normal break-words overflow-hidden h-[2.5em]';
  var BUY_BUTTON_CLASS = 'transition-colors gap-space-8 outline-none font-roboto bg-success-700 text-white border hover:bg-success-800 active:bg-success-900 focus-visible:bg-success-800 focus-visible:border-2 focus-visible:border-success-300 disabled:opacity-100 disabled:bg-secondary-50 disabled:text-secondary-300 disabled:border-0 disabled:cursor-not-allowed btn-comprar-vitrine border-transparent w-[90%] h-auto text-[0.875em] font-bold text-center border-none rounded-[8px] px-space-16 py-space-10 mx-auto my-space-8 flex items-center justify-center normal-case';

  function addDiscountTag(figure, percent) {
    if (!(Number(percent) > 0)) return;
    var area = element('div', 'tag-area tag-area-react absolute z-[1] uppercase top-space-10 right-space-10 w-auto max-md:right-space-10 superior-esquerdo !left-space-10 !right-auto');
    var tag = element('div', 'tag-produto min-w-[51px] w-inherit h-auto text-xs float-right font-normal clear-both text-right p-0 max-sm:text-[10px] relative mb-[5px] leading-[18px] uppercase flex items-center');
    var value = element('div', 'tag-value block py-[1px] px-space-8 relative rounded-[5px]');
    value.style.backgroundColor = '#ff0000';
    value.style.color = '#ffffff';
    value.appendChild(element('div', 'text-tag max-md:!text-[10.5px]', '-' + Math.round(Number(percent)) + '%'));
    tag.appendChild(value);
    area.appendChild(tag);
    figure.appendChild(area);
  }

  function createRating(hit) {
    var rating = Math.max(0, Math.min(5, Number(hit.ratingAverage) || 0));
    var count = Math.max(0, Number(hit.reviewCount) || 0);
    var box = element('span', 'rating block mt-[7px]');
    var stars = element('span', 'average-rating star-back top-[3px] left-[-3px]');
    stars.setAttribute('data-value', rating.toFixed(2));
    stars.title = rating.toFixed(2) + ' de 5';
    stars.style.setProperty('--size', '23px');
    stars.style.setProperty('--percent', ((rating / 5) * 100).toFixed(2) + '%');
    box.appendChild(stars);
    box.appendChild(element('span', 'qtd-aval text-[.75em] text-cor-texto-secundario ml-space-4', '(' + formatCount(count) + ')'));
    return box;
  }

  function createPrice(hit) {
    var commercial = hit.commercial || {};
    var price = numberOrNull(commercial.price);
    var oldPrice = numberOrNull(commercial.oldPrice);
    var hasOldPrice = commercial.status === 'confirmed' && price !== null && oldPrice !== null && oldPrice > price;
    var box = element('div', 'price-product text-cor-texto h-[90px] max-md:inline-block' + (hasOldPrice ? '' : ' pt-[30px]'));
    if (hasOldPrice) box.appendChild(element('div', 'old-price mx-0 mb-[5px] mt-[7px] inline-block h-[18px] text-[0.75em] text-cor-texto-secundario line-through', formatMoney(oldPrice)));
    var primary = element('div', 'primary-price vitrine-valor-pix leading-[1.125em]');
    var value = element('span', 'valor-big font-semibold text-cor-texto');
    if (commercial.status === 'confirmed' && price !== null) {
      value.appendChild(element('span', 'text-[1.31em] max-sm:text-[0.94em]', formatMoney(price)));
      box.setAttribute('data-valor', String(price));
    } else value.appendChild(element('span', 'text-[0.94em] max-sm:text-[0.81em]', 'Preço indisponível no momento'));
    primary.appendChild(value);
    box.appendChild(primary);
    return box;
  }

  function createNativeProductCard(hit, index, state, queryID) {
    var commercial = hit.commercial || {};
    var inStock = commercial.status === 'confirmed' && commercial.inStock === true;
    var productUrl = safeProductUrl(commercial.url || hit.url);
    var item = element('li', PRODUCT_LI_CLASS + (index % 3 === 2 ? ' !mr-0' : ''));
    setAttributes(item, {
      'data-id': hit.sku || hit.objectID || '',
      'data-name': encodeURIComponent(commercial.name || hit.name || ''),
      'data-variant': encodeURIComponent(commercial.derivationName || ''),
      'data-brand': commercial.brand || hit.brand || '',
      'data-position': state.page * PAGE_LIMIT + index
    });

    var link = element('a', inStock ? 'in_stock' : 'out_stock');
    link.href = productUrl;
    link.title = hit.name || hit.sku || 'Produto';
    link.setAttribute('data-mm-page-product', '');
    link.setAttribute('data-object-id', String(hit.objectID || hit.sku || ''));
    link.setAttribute('data-position', String(state.page * PAGE_LIMIT + index + 1));
    if (queryID) link.setAttribute('data-query-id', String(queryID));

    var figure = element('figure', 'relative flex min-w-full items-center justify-center overflow-hidden');
    var imageUrl = nativeCardImageUrl(hit.image);
    if (imageUrl) {
      var image = setAttributes(element('img', 'img-principal !transition-all !duration-500 block mx-auto w-auto object-contain'), {
        alt: hit.name || '', title: hit.name || '', src: imageUrl, loading: 'lazy', width: 400, height: 400
      });
      image.style.aspectRatio = '400 / 400';
      image.addEventListener('error', function () { image.style.visibility = 'hidden'; });
      figure.appendChild(image);
    } else figure.appendChild(element('div', 'mm-search-product-image-missing'));
    if (commercial.status === 'confirmed') addDiscountTag(figure, commercial.discountPercent);
    link.appendChild(figure);

    var body = element('div', 'vitrine-default tipo-vitrine-03 text-center');
    body.appendChild(element('h3', PRODUCT_NAME_CLASS, hit.name || hit.sku || 'Produto'));
    body.appendChild(createRating(hit));
    body.appendChild(createPrice(hit));
    link.appendChild(body);
    item.appendChild(link);

    var canBuy = inStock && numberOrNull(commercial.derivationId) !== null && numberOrNull(commercial.price) !== null;
    var button = element('button', BUY_BUTTON_CLASS, canBuy ? 'Comprar' : (commercial.status === 'confirmed' && !inStock ? 'Indisponível' : 'Ver produto'));
    button.type = 'button';
    button.setAttribute('aria-busy', 'false');
    button.setAttribute('data-object-id', String(hit.objectID || hit.sku || ''));
    button.setAttribute('data-product-url', productUrl);
    if (canBuy) button.setAttribute('data-mm-buy-product', '');
    else if (commercial.status === 'confirmed' && !inStock) button.disabled = true;
    else button.setAttribute('data-mm-open-product', '');
    item.appendChild(button);
    return item;
  }

  function createCorrection(payload, state, onExact) {
    if (!payload.interpretedQuery || normalizeQuery(payload.interpretedQuery) === normalizeQuery(payload.query)) return null;
    var notice = element('div', 'mm-search-native-notice');
    var copy = element('span');
    copy.appendChild(document.createTextNode('Mostrando resultados para '));
    copy.appendChild(element('strong', '', payload.interpretedQuery));
    copy.appendChild(document.createTextNode('. '));
    notice.appendChild(copy);
    var exact = element('a', '', 'Buscar exatamente por “' + payload.query + '”');
    var exactState = cloneState(state);
    exactState.exact = true;
    exactState.page = 0;
    exact.href = pageStateUrl(exactState);
    exact.setAttribute('data-mm-exact-search', '');
    notice.appendChild(exact);
    return notice;
  }

  function createPagination(payload, state) {
    var pages = Math.max(0, Number(payload.nbPages) || 0);
    if (pages <= 1) return null;
    var nav = element('nav', 'mm-search-pagination');
    nav.setAttribute('aria-label', 'Paginação dos resultados');

    function pageLink(label, page, current, disabled) {
      if (disabled) {
        var disabledNode = element('span', 'button button-smaller is-disabled', label);
        disabledNode.setAttribute('aria-disabled', 'true');
        return disabledNode;
      }
      var next = cloneState(state);
      next.page = page;
      var link = element('a', 'button button-smaller' + (current ? ' button-primary is-current' : ''), label);
      link.href = pageStateUrl(next);
      link.setAttribute('data-mm-search-page', String(page));
      if (current) link.setAttribute('aria-current', 'page');
      return link;
    }

    nav.appendChild(pageLink('Anterior', state.page - 1, false, state.page <= 0));
    var start = Math.max(0, Math.min(state.page - 2, pages - 5));
    var end = Math.min(pages, start + 5);
    for (var page = start; page < end; page += 1) {
      nav.appendChild(pageLink(String(page + 1), page, page === state.page, false));
    }
    nav.appendChild(pageLink('Próxima', state.page + 1, false, state.page >= pages - 1));
    return nav;
  }

  function createPageLoadingSkeleton() {
    var status = element('div', 'mm-search-page-loading');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    status.appendChild(element('span', 'mm-search-sr-only', 'Carregando resultados…'));

    var layout = element('div', 'mm-search-shimmer-layout');
    layout.setAttribute('aria-hidden', 'true');

    var sidebar = element('div', 'mm-search-shimmer-sidebar');
    for (var groupIndex = 0; groupIndex < 2; groupIndex += 1) {
      var group = element('div', 'mm-search-shimmer-filter-group');
      var filterHeading = element('span', 'mm-search-shimmer-filter-heading');
      filterHeading.appendChild(element('span', 'mm-search-shimmer-filter-title mm-search-shimmer-surface'));
      filterHeading.appendChild(element('span', 'mm-search-shimmer-filter-arrow mm-search-shimmer-surface'));
      group.appendChild(filterHeading);

      var rowCount = groupIndex === 0 ? 5 : 1;
      for (var rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
        var filterRow = element('span', 'mm-search-shimmer-filter-row');
        filterRow.appendChild(element('span', 'mm-search-shimmer-filter-check mm-search-shimmer-surface'));
        filterRow.appendChild(element(
          'span',
          'mm-search-shimmer-filter-label mm-search-shimmer-surface' + (rowIndex % 2 ? ' is-short' : '')
        ));
        group.appendChild(filterRow);
      }
      sidebar.appendChild(group);
    }
    layout.appendChild(sidebar);

    var main = element('div', 'mm-search-shimmer-main');
    var toolbar = element('div', 'mm-search-shimmer-toolbar');
    toolbar.appendChild(element('span', 'mm-search-shimmer-count mm-search-shimmer-surface'));
    var toolbarControls = element('span', 'mm-search-shimmer-toolbar-controls');
    toolbarControls.appendChild(element('span', 'mm-search-shimmer-mobile-filter mm-search-shimmer-surface'));
    toolbarControls.appendChild(element('span', 'mm-search-shimmer-sort mm-search-shimmer-surface'));
    toolbar.appendChild(toolbarControls);
    main.appendChild(toolbar);
    main.appendChild(element('span', 'mm-search-shimmer-notice mm-search-shimmer-surface'));

    var grid = element('div', 'mm-search-shimmer-grid');
    for (var index = 0; index < 6; index += 1) {
      var card = element('div', 'mm-search-shimmer-card');
      card.appendChild(element('span', 'mm-search-shimmer-image mm-search-shimmer-surface'));

      var content = element('span', 'mm-search-shimmer-content');
      content.appendChild(element('span', 'mm-search-shimmer-line mm-search-shimmer-line-title mm-search-shimmer-surface'));
      content.appendChild(element('span', 'mm-search-shimmer-line mm-search-shimmer-line-subtitle mm-search-shimmer-surface'));
      content.appendChild(element('span', 'mm-search-shimmer-line mm-search-shimmer-line-rating mm-search-shimmer-surface'));
      content.appendChild(element('span', 'mm-search-shimmer-line mm-search-shimmer-line-old-price mm-search-shimmer-surface'));
      content.appendChild(element('span', 'mm-search-shimmer-line mm-search-shimmer-line-price mm-search-shimmer-surface'));
      content.appendChild(element('span', 'mm-search-shimmer-button mm-search-shimmer-surface'));
      card.appendChild(content);
      grid.appendChild(card);
    }
    main.appendChild(grid);
    layout.appendChild(main);
    status.appendChild(layout);
    return status;
  }

  function fetchJsonWithTimeout(url, options, timeoutMs) {
    var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var timer = setTimeout(function () { if (controller) controller.abort(); }, timeoutMs);
    var init = Object.assign({}, options || {});
    if (controller) init.signal = controller.signal;
    return fetch(url, init).then(function (response) {
      return response.json().catch(function () { return {}; }).then(function (payload) {
        if (!response.ok) throw new Error('Falha ao confirmar compra.');
        return payload;
      });
    }).then(function (payload) {
      clearTimeout(timer);
      return payload;
    }, function (error) {
      clearTimeout(timer);
      throw error;
    });
  }

  function directBuy(hit) {
    var productUrl = safeProductUrl(hit.commercial && hit.commercial.url || hit.url);
    var derivationId = numberOrNull(hit.commercial && hit.commercial.derivationId);
    if (derivationId === null || productUrl === '/') return Promise.reject(new Error('Produto sem contexto de compra.'));
    var preflight = new URL(productUrl, location.href);
    preflight.searchParams.set('operation', 'buyButton');
    preflight.searchParams.set('proderivacaoId', String(derivationId));
    return fetchJsonWithTimeout(preflight.href, {
      method: 'GET', credentials: 'same-origin', cache: 'no-store', headers: { Accept: 'application/json' }
    }, BUY_TIMEOUT_MS).then(function (decision) {
      if (!decision || decision.action !== 'add-cart') throw new Error('Produto requer seleção na página.');
      var sku = String(hit.sku || hit.objectID || '');
      return fetchJsonWithTimeout(API_BASE + '/search/cart-context?sku=' + encodeURIComponent(sku), {
        method: 'GET', mode: 'cors', credentials: 'omit', cache: 'no-store', headers: { Accept: 'application/json' }
      }, BUY_TIMEOUT_MS);
    }).then(function (context) {
      var price = numberOrNull(context && context.price);
      var deposit = numberOrNull(context && context.deposit);
      var available = numberOrNull(context && context.availableQuantity);
      if (
        !context || context.active === false || price === null || deposit === null ||
        available === null || available <= 0 || typeof window.addCartVitrine !== 'function'
      ) throw new Error('Compra direta indisponível.');
      window.addCartVitrine(
        String(context.sku || hit.sku || ''),
        String(context.name || hit.name || ''),
        String(context.category || ''),
        String(context.brand || hit.brand || ''),
        String(context.derivationName || ''),
        price,
        deposit,
        1,
        { source: 'mm-search' }
      );
      return true;
    });
  }

  function initSearchPage() {
    if (location.pathname.replace(/\/$/, '') !== '/busca') return false;
    var pageBox = document.querySelector('.container.box-pesquisa');
    var listArea = document.getElementById('lista-produtos-area');
    if (pageBox && !listArea) {
      var productsArea = pageBox.querySelector('.pesquisa-produtos');
      if (productsArea) {
        listArea = element('div');
        listArea.id = 'lista-produtos-area';
        productsArea.appendChild(listArea);
      }
    }
    if (!pageBox || !listArea || pageBox.getAttribute('data-mm-text-search') === 'ready') return false;
    pageBox.setAttribute('data-mm-text-search', 'ready');

    var nativeFilters = pageBox.querySelector('.filtros') || document.querySelector('.box-pesquisa .filtros');
    var nativeOrder = pageBox.querySelector('.ordenacao') || document.querySelector('.box-pesquisa .ordenacao');
    var nativeOrderSelect = nativeOrder && nativeOrder.querySelector('#ordem');
    var nativeFilterDisplay = nativeFilters ? nativeFilters.style.display : '';
    var nativeOrderDisplay = nativeOrder ? nativeOrder.style.display : '';
    var advancedFilters = null;
    var advancedOrder = null;
    var mobileFilterButton = null;
    var resultsRoot = null;
    var state = readPageState();
    var active = false;
    var controller = null;
    var sequence = 0;
    var lastPayload = null;
    var hitsById = Object.create(null);
    var mobileFiltersOpen = false;

    function clearEarlyLoading() {
      document.documentElement.classList.remove('mm-search-loading');
    }

    function restoreNative() {
      document.body.classList.remove('mm-search-initial-loading');
      if (active) {
        active = false;
        document.body.classList.remove('mm-search-native-active');
        if (nativeFilters) nativeFilters.style.display = nativeFilterDisplay;
        if (nativeOrder) nativeOrder.style.display = nativeOrderDisplay;
        if (nativeOrderSelect) nativeOrderSelect.id = 'ordem';
        if (advancedFilters) advancedFilters.remove();
        if (advancedOrder) advancedOrder.remove();
        if (mobileFilterButton) mobileFilterButton.remove();
        if (resultsRoot) resultsRoot.remove();
        advancedFilters = advancedOrder = mobileFilterButton = resultsRoot = null;
      }
      lastPayload = null;
      hitsById = Object.create(null);
      clearEarlyLoading();
    }

    function activate() {
      if (active) return;
      active = true;
      document.body.classList.add('mm-search-native-active');
      if (nativeFilters) nativeFilters.style.display = 'none';
      if (nativeOrder) nativeOrder.style.display = 'none';
      if (nativeOrderSelect) nativeOrderSelect.id = 'mm-native-ordem';
    }

    function mountControls(payload) {
      var nextFilters = createNativeFilters(payload, state);
      var nextOrder = createNativeOrder(payload, state);
      if (advancedFilters) advancedFilters.replaceWith(nextFilters);
      else if (nativeFilters && nativeFilters.parentNode) nativeFilters.parentNode.insertBefore(nextFilters, nativeFilters);
      else pageBox.insertBefore(nextFilters, pageBox.firstChild);
      advancedFilters = nextFilters;
      if (mobileFiltersOpen) advancedFilters.classList.add('is-open');

      if (advancedOrder) advancedOrder.replaceWith(nextOrder);
      else if (nativeOrder && nativeOrder.parentNode) nativeOrder.parentNode.insertBefore(nextOrder, nativeOrder);
      else listArea.parentNode.insertBefore(nextOrder, listArea);
      advancedOrder = nextOrder;

      if (!mobileFilterButton) {
        mobileFilterButton = element('button', 'button button-primary mm-search-mobile-filter-toggle');
        mobileFilterButton.type = 'button';
        mobileFilterButton.setAttribute('aria-controls', 'mm-search-native-filters');
        if (advancedFilters.parentNode) advancedFilters.parentNode.insertBefore(mobileFilterButton, advancedFilters);
      }
      advancedFilters.id = 'mm-search-native-filters';
      mobileFilterButton.textContent = 'Filtros' + (selectedFilterCount(state) ? ' (' + selectedFilterCount(state) + ')' : '');
      mobileFilterButton.setAttribute('aria-expanded', mobileFiltersOpen ? 'true' : 'false');
    }

    function ensureResultsRoot() {
      if (resultsRoot) return resultsRoot;
      resultsRoot = element('section', 'mm-search-page-results ra-vitrine');
      resultsRoot.id = 'mm-search-page-results';
      resultsRoot.setAttribute('aria-label', 'Resultados da busca avançada');
      resultsRoot.setAttribute('aria-live', 'polite');
      listArea.appendChild(resultsRoot);
      return resultsRoot;
    }

    function showPageLoading() {
      activate();
      var root = ensureResultsRoot();
      root.setAttribute('aria-busy', 'true');
      if (!lastPayload) {
        document.body.classList.add('mm-search-initial-loading');
        empty(root);
        root.appendChild(createPageLoadingSkeleton());
      }
      clearEarlyLoading();
    }

    function renderError(error) {
      if (!active) return;
      var root = ensureResultsRoot();
      var old = root.querySelector('.mm-search-page-error');
      if (old) old.remove();
      var alert = element('div', 'mm-search-page-error');
      alert.setAttribute('role', 'alert');
      alert.appendChild(element('strong', '', 'Não foi possível atualizar os resultados. '));
      alert.appendChild(document.createTextNode('Os últimos produtos confirmados continuam visíveis. '));
      var retry = setAttributes(element('button', 'button button-smaller button-primary', 'Tentar novamente'), {
        type: 'button', 'data-mm-search-retry': ''
      });
      alert.appendChild(retry);
      root.insertBefore(alert, root.firstChild);
      root.setAttribute('aria-busy', 'false');
    }

    function renderEmpty(payload, root) {
      var emptyState = element('div', 'mm-search-empty-state');
      emptyState.appendChild(element('h2', '', 'Nenhum produto encontrado'));
      emptyState.appendChild(element('p', '', 'Tente outra palavra, um termo mais curto ou remova algum filtro.'));
      if (selectedFilterCount(state)) {
        emptyState.appendChild(setAttributes(element('button', 'button button-primary', 'Remover filtros'), {
          type: 'button', 'data-mm-clear-filters': ''
        }));
      }
      root.appendChild(emptyState);
      emitEvent('mm_search_no_results', {
        query: payload.query, context: 'page', queryID: payload.queryID || ''
      });
    }

    function renderResponse(payload) {
      if (payload.nbHits > 0 && payload.nbPages > 0 && state.page >= payload.nbPages) {
        state.page = 0;
        navigate(false);
        return;
      }
      lastPayload = payload;
      document.body.classList.remove('mm-search-initial-loading');
      hitsById = Object.create(null);
      payload.hits.forEach(function (hit) { hitsById[String(hit.objectID || hit.sku || '')] = hit; });
      activate();
      mountControls(payload);
      var root = ensureResultsRoot();
      empty(root);
      root.setAttribute('aria-busy', 'false');

      if (payload.source === 'fixture') root.appendChild(element('p', 'mm-search-fixture-note', 'Prévia local · dados de demonstração'));
      var correction = createCorrection(payload, state);
      if (correction) root.appendChild(correction);
      if (payload.partialCommercial) {
        root.appendChild(element('p', 'mm-search-commercial-note', 'Alguns preços não puderam ser confirmados agora e, por segurança, não foram exibidos.'));
      }

      if (!payload.hits.length) renderEmpty(payload, root);
      else {
        var list = element('ul', 'grid-cols-3 grid items-center product-list product-list-loading-images product-list-react template-03 gap-0 items-unset !flex clear-both flex-wrap');
        payload.hits.forEach(function (hit, index) {
          list.appendChild(createNativeProductCard(hit, index, state, payload.queryID));
        });
        root.appendChild(list);
        var pagination = createPagination(payload, state);
        if (pagination) root.appendChild(pagination);
      }
      saveRecentSearch(state.query);
      emitEvent('mm_search_results_viewed', {
        query: payload.query, context: 'page', resultCount: payload.nbHits,
        queryID: payload.queryID || '', page: state.page + 1
      });
    }

    function load() {
      if (state.query.length < MIN_QUERY_LENGTH) { restoreNative(); return; }
      showPageLoading();
      sequence += 1;
      var current = sequence;
      if (controller) controller.abort();
      controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      fetchSearch({
        query: state.query, exact: state.exact, page: state.page, limit: PAGE_LIMIT,
        sort: state.sort, filters: state.filters
      }, controller).then(function (payload) {
        if (current !== sequence) return;
        renderResponse(payload);
      }).catch(function (error) {
        if (current !== sequence) return;
        if (!active) return;
        if (!lastPayload) { restoreNative(); return; }
        renderError(error);
      });
    }

    function navigate(push) {
      var url = pageStateUrl(state);
      if (push) history.pushState({ mmTextSearch: true }, '', url);
      else history.replaceState({ mmTextSearch: true }, '', url);
      load();
    }

    pageBox.addEventListener('click', function (event) {
      var target = event.target;
      var filterToggle = target.closest && target.closest('[data-mm-filter-toggle]');
      if (filterToggle) {
        event.preventDefault();
        var group = filterToggle.closest('.filtro-container');
        var list = group && group.querySelector('.filtro');
        if (list) {
          list.hidden = !list.hidden;
          filterToggle.classList.toggle('down', !list.hidden);
        }
        return;
      }
      var filter = target.closest && target.closest('[data-mm-filter-key]');
      if (filter) {
        event.preventDefault();
        var key = filter.getAttribute('data-mm-filter-key');
        var value = filter.getAttribute('data-mm-filter-value');
        if (!FILTERS[key]) return;
        state = toggledState(state, key, value);
        emitEvent('mm_search_filter_changed', {
          query: state.query, filter: key, value: value, selected: state.filters[key].indexOf(value) !== -1
        });
        navigate(true);
        return;
      }
      if (target.closest && target.closest('[data-mm-clear-filters]')) {
        event.preventDefault();
        state.filters = emptyFilters();
        state.page = 0;
        emitEvent('mm_search_filter_changed', { query: state.query, cleared: true });
        navigate(true);
        return;
      }
      var exact = target.closest && target.closest('[data-mm-exact-search]');
      if (exact) {
        event.preventDefault();
        state.exact = true;
        state.page = 0;
        emitEvent('mm_search_correction_used', {
          query: state.query, interpretedQuery: lastPayload && lastPayload.interpretedQuery || '', exact: true, context: 'page'
        });
        navigate(true);
        return;
      }
      var pageLink = target.closest && target.closest('[data-mm-search-page]');
      if (pageLink) {
        event.preventDefault();
        state.page = Math.max(0, Number(pageLink.getAttribute('data-mm-search-page')) || 0);
        navigate(true);
        var top = pageBox.getBoundingClientRect().top + window.scrollY - 24;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        return;
      }
      if (target.closest && target.closest('[data-mm-search-retry]')) { event.preventDefault(); load(); return; }
      var productLink = target.closest && target.closest('[data-mm-page-product]');
      if (productLink) {
        emitEvent('mm_search_product_clicked', {
          query: state.query, context: 'page', objectID: productLink.getAttribute('data-object-id'),
          queryID: productLink.getAttribute('data-query-id') || '', position: Number(productLink.getAttribute('data-position')) || 1
        });
        return;
      }
      var openProduct = target.closest && target.closest('[data-mm-open-product]');
      if (openProduct) {
        event.preventDefault();
        location.assign(openProduct.getAttribute('data-product-url') || '/');
        return;
      }
      var buy = target.closest && target.closest('[data-mm-buy-product]');
      if (buy) {
        event.preventDefault();
        var objectID = buy.getAttribute('data-object-id');
        var hit = hitsById[objectID];
        if (!hit || buy.disabled) return;
        buy.disabled = true;
        buy.setAttribute('aria-busy', 'true');
        var originalLabel = buy.textContent;
        buy.textContent = 'Adicionando…';
        directBuy(hit).then(function () {
          setTimeout(function () {
            buy.disabled = false;
            buy.setAttribute('aria-busy', 'false');
            buy.textContent = originalLabel;
          }, 1200);
        }).catch(function () {
          location.assign(safeProductUrl(hit.commercial && hit.commercial.url || hit.url));
        });
      }
    });

    pageBox.addEventListener('change', function (event) {
      var sort = event.target.closest && event.target.closest('[data-mm-search-sort]');
      if (!sort || !SORTS[sort.value]) return;
      state.sort = sort.value;
      state.page = 0;
      navigate(true);
    });

    pageBox.addEventListener('click', function (event) {
      var button = event.target.closest && event.target.closest('.mm-search-mobile-filter-toggle');
      if (!button || !advancedFilters) return;
      mobileFiltersOpen = !mobileFiltersOpen;
      advancedFilters.classList.toggle('is-open', mobileFiltersOpen);
      button.setAttribute('aria-expanded', mobileFiltersOpen ? 'true' : 'false');
    });

    window.addEventListener('popstate', function () {
      state = readPageState();
      load();
    });

    if (state.query.length >= MIN_QUERY_LENGTH) navigate(false);
    return true;
  }

  window.MMTextSearch = {
    version: '1.0.0-rc.1',
    apiBase: API_BASE,
    initHeader: initHeader,
    initPage: initSearchPage,
    refresh: function () {
      if (location.pathname.replace(/\/$/, '') === '/busca') location.reload();
    }
  };

  ready(function () {
    if (!initSearchPage()) document.documentElement.classList.remove('mm-search-loading');
  });
})();
