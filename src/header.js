/* =============================================
   HEADER — Madeira Mania
   Injection of custom #mm-header shell
   Idempotent (checks guard ID before injecting)
   ============================================= */

(function(){
  if (document.getElementById('mm-header')) return;

  function init() {
    if (document.getElementById('mm-header')) return;

    var logoUrl = 'https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg';
    // ^^^ extracted from live site (2026-04-09) — Magazord CDN SVG, 1800x446 native

    // Inline SVG icons (stroke-based, currentColor inherits from text)
    var svg = {
      search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
      heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
      user: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
      bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>'
    };

    var header = document.createElement('div');
    header.id = 'mm-header';
    header.innerHTML = [
      '<a class="mm-h-skip" href="#main">Pular para o conteúdo</a>',
      '<div class="mm-h-topbar">',
      '  <div class="mm-h-topbar-inner">',
      '    <span class="mm-h-topbar-desktop-only">',
      '      <a href="/atendimento">Atendimento</a>',
      '      <span class="mm-h-topbar-sep" aria-hidden="true">·</span>',
      '    </span>',
      '    <span>Frete grátis R$ 2.000+</span>',
      '    <span class="mm-h-topbar-sep" aria-hidden="true">·</span>',
      '    <span>12x sem juros</span>',
      '  </div>',
      '</div>',
      '<div class="mm-h-main">',
      '  <div class="mm-h-main-left">',
      '    <button class="mm-h-burger" id="mm-h-burger" type="button" aria-label="Abrir menu"><span aria-hidden="true">☰</span></button>',
      '    <button class="mm-h-action" id="mm-h-buscar" type="button">' + svg.search + '<span>Buscar</span></button>',
      '  </div>',
      '  <a class="mm-h-logo" href="/" aria-label="Madeira Mania, ir para a página inicial">',
      '    <img src="' + logoUrl + '" alt="" width="280" height="70" loading="eager" />',
      '  </a>',
      '  <div class="mm-h-main-right">',
      '    <a class="mm-h-action" href="/wishlist">' + svg.heart + '<span>Favoritos</span></a>',
      '    <a class="mm-h-action" href="/login">' + svg.user + '<span>Conta</span></a>',
      '    <button class="mm-h-action" type="button" id="mm-h-cart" aria-label="Carrinho, 0 itens" aria-live="polite">',
      '      <span class="mm-h-cart-icon">' + svg.bag + '<span class="mm-h-cart-badge" id="mm-h-cart-count" aria-hidden="true" hidden>0</span></span>',
      '      <span>Carrinho</span>',
      '    </button>',
      '  </div>',
      '</div>',
      '<nav class="mm-h-nav" role="navigation" aria-label="Categorias">',
      '  <ul class="mm-h-nav-list">',
      '    <li class="mm-h-nav-item" data-menu="ambientes">',
      '      <a href="#" class="mm-h-nav-link" aria-haspopup="true" aria-expanded="false">Ambientes</a>',
      '      <div class="mm-h-mega" role="menu" aria-label="Ambientes">',
      '        <div class="mm-h-mega-inner">',
      '          <div class="mm-h-mega-col">',
      '            <a href="/sala-de-estar-9677307902" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="sala-de-estar">Sala de Estar</a>',
      '            <ul>',
      '              <li><a href="/sala-de-estar/mesas">Mesas</a></li>',
      '              <li><a href="/sala-de-estar/racks">Racks para TV</a></li>',
      '              <li><a href="/sala-de-estar/estantes">Estantes</a></li>',
      '              <li><a href="/sala-de-estar/home-theaters">Home Theaters</a></li>',
      '              <li><a href="/sala-de-estar/aparadores">Aparadores</a></li>',
      '              <li><a href="/sala-de-estar/cristaleiras">Cristaleiras</a></li>',
      '              <li><a href="/sala-de-estar/buffets">Buffets</a></li>',
      '              <li><a href="/sala-de-estar/bares">Bares</a></li>',
      '              <li><a href="/sala-de-estar/paineis">Painéis</a></li>',
      '              <li><a href="/sala-de-estar/nichos">Nichos</a></li>',
      '            </ul>',
      '          </div>',
      '          <div class="mm-h-mega-col">',
      '            <a href="/sala-de-jantar-1916970475" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="sala-de-jantar">Sala de Jantar</a>',
      '            <ul>',
      '              <li><a href="/sala-de-jantar/mesas">Mesas</a></li>',
      '              <li><a href="/sala-de-jantar/cadeiras">Cadeiras</a></li>',
      '              <li><a href="/sala-de-jantar/aparadores">Aparadores</a></li>',
      '              <li><a href="/sala-de-jantar/buffets">Buffets</a></li>',
      '              <li><a href="/sala-de-jantar/cristaleiras">Cristaleiras</a></li>',
      '              <li><a href="/sala-de-jantar/balcoes">Balcões</a></li>',
      '              <li><a href="/sala-de-jantar/banquetas">Banquetas</a></li>',
      '              <li><a href="/sala-de-jantar/bares">Bares</a></li>',
      '            </ul>',
      '          </div>',
      '          <div class="mm-h-mega-col">',
      '            <a href="/cozinha-6327619447" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="cozinha">Cozinha</a>',
      '            <ul>',
      '              <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>',
      '              <li><a href="/cozinha/banquetas">Banquetas</a></li>',
      '              <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>',
      '              <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>',
      '            </ul>',
      '            <a href="/bar-e-cafe" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="bar-e-cafe">Bar e Café</a>',
      '            <ul>',
      '              <li><a href="/bar-e-cafe/bares">Bares</a></li>',
      '              <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',
      '            </ul>',
      '          </div>',
      '          <div class="mm-h-mega-col">',
      '            <a href="/quarto-0961844589" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="quarto">Quarto</a>',
      '            <ul>',
      '              <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>',
      '              <li><a href="/quarto/comodas">Cômodas</a></li>',
      '              <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>',
      '              <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>',
      '              <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>',
      '            </ul>',
      '            <a href="/escritorio-899523853" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="escritorio">Escritório</a>',
      '            <ul>',
      '              <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',
      '            </ul>',
      '          </div>',
      '          <div class="mm-h-mega-col mm-h-mega-col-hero" aria-hidden="true">',
      '            <div class="mm-h-mega-hero">',
      '              <img class="mm-h-mega-hero-img" src="" alt="" loading="lazy" width="320" height="240" />',
      '              <div class="mm-h-mega-hero-label"></div>',
      '            </div>',
      '          </div>',
      '        </div>',
      '        <div class="mm-h-mega-footer">',
      '          <a href="/envio-imediato" class="mm-h-mega-cta">Ver todos os ambientes <span aria-hidden="true">→</span></a>',
      '        </div>',
      '      </div>',
      '    </li>',
      '    <li class="mm-h-nav-item">',
      '      <a href="/envio-imediato" class="mm-h-nav-link">Envio Imediato</a>',
      '    </li>',
      '    <li class="mm-h-nav-item">',
      '      <a href="/outlet" class="mm-h-nav-link">Outlet</a>',
      '    </li>',
      '  </ul>',
      '</nav>',
      '<div class="mm-h-drawer" id="mm-h-drawer" hidden role="dialog" aria-modal="true" aria-label="Menu">',
      '  <div class="mm-h-drawer-backdrop"></div>',
      '  <aside class="mm-h-drawer-panel">',
      '    <div class="mm-h-drawer-header">',
      '      <span class="mm-h-drawer-title">Menu</span>',
      '      <button class="mm-h-drawer-close" id="mm-h-drawer-close" type="button" aria-label="Fechar menu">',
      '        <span aria-hidden="true">×</span>',
      '      </button>',
      '    </div>',
      '    <div class="mm-h-drawer-search">',
      '      <form action="/busca" method="get">',
      '        <input type="search" name="q" placeholder="Buscar" aria-label="Buscar" />',
      '      </form>',
      '    </div>',
      '    <nav class="mm-h-drawer-nav" aria-label="Navegação móvel">',
      '      <details class="mm-h-drawer-section">',
      '        <summary>Sala de Estar</summary>',
      '        <ul>',
      '          <li class="mm-h-drawer-viewall"><a href="/sala-de-estar-9677307902">Ver todos →</a></li>',
      '          <li><a href="/sala-de-estar/mesas">Mesas</a></li>',
      '          <li><a href="/sala-de-estar/racks">Racks para TV</a></li>',
      '          <li><a href="/sala-de-estar/estantes">Estantes</a></li>',
      '          <li><a href="/sala-de-estar/home-theaters">Home Theaters</a></li>',
      '          <li><a href="/sala-de-estar/aparadores">Aparadores</a></li>',
      '          <li><a href="/sala-de-estar/cristaleiras">Cristaleiras</a></li>',
      '          <li><a href="/sala-de-estar/buffets">Buffets</a></li>',
      '          <li><a href="/sala-de-estar/bares">Bares</a></li>',
      '          <li><a href="/sala-de-estar/paineis">Painéis</a></li>',
      '          <li><a href="/sala-de-estar/nichos">Nichos</a></li>',
      '        </ul>',
      '      </details>',
      '      <details class="mm-h-drawer-section">',
      '        <summary>Sala de Jantar</summary>',
      '        <ul>',
      '          <li class="mm-h-drawer-viewall"><a href="/sala-de-jantar-1916970475">Ver todos →</a></li>',
      '          <li><a href="/sala-de-jantar/mesas">Mesas</a></li>',
      '          <li><a href="/sala-de-jantar/cadeiras">Cadeiras</a></li>',
      '          <li><a href="/sala-de-jantar/aparadores">Aparadores</a></li>',
      '          <li><a href="/sala-de-jantar/buffets">Buffets</a></li>',
      '          <li><a href="/sala-de-jantar/cristaleiras">Cristaleiras</a></li>',
      '          <li><a href="/sala-de-jantar/balcoes">Balcões</a></li>',
      '          <li><a href="/sala-de-jantar/banquetas">Banquetas</a></li>',
      '          <li><a href="/sala-de-jantar/bares">Bares</a></li>',
      '        </ul>',
      '      </details>',
      '      <details class="mm-h-drawer-section">',
      '        <summary>Cozinha</summary>',
      '        <ul>',
      '          <li class="mm-h-drawer-viewall"><a href="/cozinha-6327619447">Ver todos →</a></li>',
      '          <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>',
      '          <li><a href="/cozinha/banquetas">Banquetas</a></li>',
      '          <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>',
      '          <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>',
      '        </ul>',
      '      </details>',
      '      <details class="mm-h-drawer-section">',
      '        <summary>Quarto</summary>',
      '        <ul>',
      '          <li class="mm-h-drawer-viewall"><a href="/quarto-0961844589">Ver todos →</a></li>',
      '          <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>',
      '          <li><a href="/quarto/comodas">Cômodas</a></li>',
      '          <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>',
      '          <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>',
      '          <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>',
      '        </ul>',
      '      </details>',
      '      <details class="mm-h-drawer-section">',
      '        <summary>Bar e Café</summary>',
      '        <ul>',
      '          <li class="mm-h-drawer-viewall"><a href="/bar-e-cafe">Ver todos →</a></li>',
      '          <li><a href="/bar-e-cafe/bares">Bares</a></li>',
      '          <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',
      '        </ul>',
      '      </details>',
      '      <details class="mm-h-drawer-section">',
      '        <summary>Escritório</summary>',
      '        <ul>',
      '          <li class="mm-h-drawer-viewall"><a href="/escritorio-899523853">Ver todos →</a></li>',
      '          <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',
      '        </ul>',
      '      </details>',
      '      <a href="/envio-imediato" class="mm-h-drawer-link">Envio Imediato</a>',
      '      <a href="/outlet" class="mm-h-drawer-link">Outlet</a>',
      '    </nav>',
      '    <div class="mm-h-drawer-footer">',
      '      <a href="/wishlist">Favoritos</a>',
      '      <a href="/login">Conta</a>',
      '      <a href="/atendimento">Atendimento</a>',
      '    </div>',
      '  </aside>',
      '</div>',
      '<div class="mm-h-search-overlay" id="mm-h-search-overlay" hidden role="dialog" aria-modal="true" aria-label="Buscar">',
      '  <div class="mm-h-search-backdrop"></div>',
      '  <div class="mm-h-search-inner">',
      '    <button class="mm-h-search-close" id="mm-h-search-close" type="button" aria-label="Fechar busca">',
      '      <span aria-hidden="true">×</span>',
      '    </button>',
      '    <form action="/busca" method="get" class="mm-h-search-form">',
      '      <label for="mm-h-search-input" class="mm-h-search-label">O que você procura?</label>',
      '      <input type="search" name="q" id="mm-h-search-input" placeholder="O que você procura?" autocomplete="off" />',
      '    </form>',
      '    <div class="mm-h-search-results" id="mm-h-search-results" hidden></div>',
      '    <div class="mm-h-search-suggestions" id="mm-h-search-suggestions">',
      '      <span class="mm-h-search-sug-label">Sugestões populares</span>',
      '      <a href="/busca?q=mesa+de+jantar">Mesa de jantar</a>',
      '      <a href="/busca?q=rack">Rack</a>',
      '      <a href="/busca?q=guarda-roupas">Guarda-roupas</a>',
      '      <a href="/busca?q=cristaleira">Cristaleira</a>',
      '      <a href="/busca?q=aparador">Aparador</a>',
      '    </div>',
      '    <div class="mm-h-search-hint"><kbd>Esc</kbd> para fechar</div>',
      '  </div>',
      '</div>'
    ].join('\n');
    document.body.insertBefore(header, document.body.firstChild);

    // Mega-menu hero image swap on hover
    // Detect if running in dev mode (loaded from localhost) vs production (jsDelivr)
    var HERO_BASE = (function () {
      try {
        var script = Array.from(document.scripts).find(function (s) { return s.src && s.src.indexOf('madeira-mania.js') !== -1; });
        if (script && script.src.indexOf('localhost') !== -1) return 'http://localhost:8080/assets/mega-hero/';
        return 'https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@v1.0/dist/assets/mega-hero/';
      } catch (e) { return 'https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@v1.0/dist/assets/mega-hero/'; }
    })();

    var heroLabels = {
      'sala-de-estar': 'Sala de Estar',
      'sala-de-jantar': 'Sala de Jantar',
      'cozinha': 'Cozinha',
      'bar-e-cafe': 'Bar e Café',
      'quarto': 'Quarto',
      'escritorio': 'Escritório'
    };

    var heroImg = header.querySelector('.mm-h-mega-hero-img');
    var heroLabel = header.querySelector('.mm-h-mega-hero-label');

    // Preload all hero images
    Object.keys(heroLabels).forEach(function (slug) {
      var img = new Image();
      img.src = HERO_BASE + slug + '.jpg';
    });

    // Default hero = Sala de Estar (loaded on menu open)
    function setHero(slug) {
      if (!heroImg) return;
      heroImg.src = HERO_BASE + slug + '.jpg';
      heroImg.alt = heroLabels[slug] || '';
      if (heroLabel) heroLabel.textContent = heroLabels[slug] || '';
    }
    setHero('sala-de-estar');

    // Swap hero on heading hover
    header.querySelectorAll('.mm-h-mega-heading-link[data-hero]').forEach(function (link) {
      link.addEventListener('mouseenter', function () {
        setHero(link.dataset.hero);
      });
    });

    // Hover-intent for mega-menus (150ms delay to prevent accidental triggers)
    var navItems = header.querySelectorAll('.mm-h-nav-item[data-menu]');
    var intentTimer = null;
    var leaveTimer = null;
    navItems.forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        clearTimeout(leaveTimer);
        clearTimeout(intentTimer);
        intentTimer = setTimeout(function () {
          navItems.forEach(function (i) {
            i.classList.remove('is-open');
            var link = i.querySelector('.mm-h-nav-link');
            if (link) link.setAttribute('aria-expanded', 'false');
          });
          item.classList.add('is-open');
          var link = item.querySelector('.mm-h-nav-link');
          if (link) link.setAttribute('aria-expanded', 'true');
        }, 150);
      });
      item.addEventListener('mouseleave', function () {
        clearTimeout(intentTimer);
        leaveTimer = setTimeout(function () {
          item.classList.remove('is-open');
          var link = item.querySelector('.mm-h-nav-link');
          if (link) link.setAttribute('aria-expanded', 'false');
        }, 200);
      });
    });

    // Escape key closes mega-menus
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        navItems.forEach(function (i) {
          i.classList.remove('is-open');
          var link = i.querySelector('.mm-h-nav-link');
          if (link) link.setAttribute('aria-expanded', 'false');
        });
      }
    });

    // Prevent the Ambientes link with href="#" from jumping the page
    var ambientesLink = header.querySelector('.mm-h-nav-item[data-menu="ambientes"] > .mm-h-nav-link');
    if (ambientesLink) {
      ambientesLink.addEventListener('click', function (e) { e.preventDefault(); });
    }

    // Search overlay
    var overlay = document.getElementById('mm-h-search-overlay');
    var openBtn = document.getElementById('mm-h-buscar');
    var closeBtn = document.getElementById('mm-h-search-close');
    var searchInput = document.getElementById('mm-h-search-input');
    var searchBackdrop = overlay && overlay.querySelector('.mm-h-search-backdrop');
    var prevFocus = null;

    function openSearch() {
      if (!overlay) return;
      prevFocus = document.activeElement;
      overlay.hidden = false;
      document.body.style.overflow = 'hidden';
      setTimeout(function () { if (searchInput) searchInput.focus(); }, 50);
    }
    function closeSearch() {
      if (!overlay) return;
      overlay.hidden = true;
      document.body.style.overflow = '';
      if (prevFocus && prevFocus.focus) prevFocus.focus();
    }

    if (openBtn) openBtn.addEventListener('click', openSearch);
    if (closeBtn) closeBtn.addEventListener('click', closeSearch);
    if (searchBackdrop) searchBackdrop.addEventListener('click', closeSearch);

    // Keyboard: Esc closes overlay, `/` opens search when not typing
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay && !overlay.hidden) {
        closeSearch();
        return;
      }
      if (e.key === '/' && overlay && overlay.hidden) {
        var tag = document.activeElement && document.activeElement.tagName;
        if (tag !== 'INPUT' && tag !== 'TEXTAREA' && !(document.activeElement && document.activeElement.isContentEditable)) {
          e.preventDefault();
          openSearch();
        }
      }
    });

    // Basic focus trap (Tab cycles inside overlay)
    if (overlay) {
      overlay.addEventListener('keydown', function (e) {
        if (e.key !== 'Tab' || overlay.hidden) return;
        var focusables = overlay.querySelectorAll('button, input, a[href]');
        if (focusables.length === 0) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      });
    }

    // Search autocomplete — live visual results + CTA + recent searches.
    //
    // STRATEGY (revised 2026-04-09 after re-probing Magazord):
    // Previous session concluded "no JSON endpoint" and used static popular
    // terms only. Re-investigation showed that `/busca?q=<query>` returns
    // SSR HTML (202KB, ~30KB gzipped) with all products as static markup
    // (ul.product-list > li with img, title, price, slug). We can fetch
    // this from the customer's session (AWS WAF cookie already set) and
    // parse with DOMParser to extract top N products for live autocomplete.
    //
    // Implementation:
    //   • Debounce 300ms after input stops
    //   • Min 3 chars before fetching (below 3 = popular filter only)
    //   • Session-scoped cache (sessionStorage) with 10min TTL per query
    //   • AbortController cancels stale in-flight requests
    //   • Extracts first 6 products: href, title, img, price, oldPrice, discount
    //   • Graceful fallback: on network/parse error, shows CTA + popular only
    var searchResults = document.getElementById('mm-h-search-results');
    var searchSuggestions = document.getElementById('mm-h-search-suggestions');
    var POPULAR_TERMS = [
      { label: 'Mesa de jantar', q: 'mesa de jantar' },
      { label: 'Mesa de centro', q: 'mesa de centro' },
      { label: 'Rack para TV', q: 'rack' },
      { label: 'Guarda-roupas', q: 'guarda-roupas' },
      { label: 'Cristaleira', q: 'cristaleira' },
      { label: 'Aparador', q: 'aparador' },
      { label: 'Buffet', q: 'buffet' },
      { label: 'Painel para TV', q: 'painel' },
      { label: 'Cabeceira', q: 'cabeceira' },
      { label: 'Cômoda', q: 'comoda' },
      { label: 'Estante', q: 'estante' },
      { label: 'Home theater', q: 'home theater' }
    ];
    var RECENT_KEY = 'mm_recent_searches';
    function getRecentSearches() {
      try {
        var raw = localStorage.getItem(RECENT_KEY);
        if (!raw) return [];
        var arr = JSON.parse(raw);
        return Array.isArray(arr) ? arr.slice(0, 5) : [];
      } catch (e) { return []; }
    }
    function pushRecentSearch(q) {
      if (!q) return;
      try {
        var list = getRecentSearches().filter(function (x) { return x && x.toLowerCase() !== q.toLowerCase(); });
        list.unshift(q);
        localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, 5)));
      } catch (e) { /* localStorage blocked */ }
    }
    function escHtml(s) {
      return String(s).replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
      });
    }
    var searchIconSvg = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>';
    var clockIconSvg = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';

    // ------- Live product search (fetch /busca?q=X, parse SSR HTML) -------
    var SEARCH_CACHE_KEY = 'mm_search_cache_v1';
    var SEARCH_CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes
    var MAX_CACHE_ENTRIES = 20;
    var searchAbortController = null;

    function loadSearchCache() {
      try { return JSON.parse(sessionStorage.getItem(SEARCH_CACHE_KEY) || '{}'); }
      catch (e) { return {}; }
    }
    function saveSearchCache(cache) {
      try {
        // Trim to last MAX_CACHE_ENTRIES by timestamp
        var keys = Object.keys(cache);
        if (keys.length > MAX_CACHE_ENTRIES) {
          keys.sort(function (a, b) { return cache[a].ts - cache[b].ts; });
          for (var i = 0; i < keys.length - MAX_CACHE_ENTRIES; i++) delete cache[keys[i]];
        }
        sessionStorage.setItem(SEARCH_CACHE_KEY, JSON.stringify(cache));
      } catch (e) { /* quota exceeded — ignore */ }
    }
    function getCachedSearch(q) {
      var cache = loadSearchCache();
      var entry = cache[q.toLowerCase()];
      if (!entry) return null;
      if (Date.now() - entry.ts > SEARCH_CACHE_TTL_MS) return null;
      return entry.products;
    }
    function setCachedSearch(q, products) {
      var cache = loadSearchCache();
      cache[q.toLowerCase()] = { ts: Date.now(), products: products };
      saveSearchCache(cache);
    }

    // Parse the /busca HTML. Product data is embedded as SSR JSON inside an
    // inline script: `var dataVitrine = { id, itens: [...] }`. This is what
    // the Magazord React component hydrates from — it's the authoritative
    // source. We extract just the `itens` array via bracket-balanced slice
    // and JSON.parse it (keys are quoted inside the array, so it's valid JSON).
    //
    // Fields per item that we use:
    //   nome, titulo     — product name
    //   link             — PDP slug (starts with /)
    //   midia_url        — primary thumbnail
    //   valor            — current price (string, e.g. "3651.60")
    //   valor_de         — old price (number)
    //   percentual_off   — discount % (number)
    //   nota             — rating (e.g. "4.97")
    //   avaliacoes       — review count
    function extractItensJson(html) {
      // Find the itens array inside dataVitrine. There may be multiple
      // dataVitrine blocks on pages with several vitrines — pick the first
      // one that has 1+ items (the search result block).
      var marker = 'itens:';
      var idx = 0;
      while ((idx = html.indexOf(marker, idx)) !== -1) {
        // Skip forward to the `[`
        var bracketIdx = html.indexOf('[', idx);
        if (bracketIdx === -1) return null;
        // Count brackets and parse strings properly (strings can contain
        // brackets like "[12,\"3651.60\"]" nested arrays too)
        var depth = 0;
        var inString = false;
        var escape = false;
        var end = -1;
        for (var i = bracketIdx; i < html.length; i++) {
          var ch = html.charAt(i);
          if (escape) { escape = false; continue; }
          if (ch === '\\') { escape = true; continue; }
          if (ch === '"') { inString = !inString; continue; }
          if (inString) continue;
          if (ch === '[') depth++;
          else if (ch === ']') {
            depth--;
            if (depth === 0) { end = i; break; }
          }
        }
        if (end !== -1) {
          var json = html.substring(bracketIdx, end + 1);
          try {
            var arr = JSON.parse(json);
            if (Array.isArray(arr) && arr.length > 0) return arr;
          } catch (e) {}
        }
        idx = bracketIdx + 1;
      }
      return null;
    }

    function parseSearchHtml(html) {
      var itens = extractItensJson(html);
      if (!itens) return [];
      var out = [];
      for (var i = 0; i < itens.length && out.length < 6; i++) {
        var it = itens[i];
        if (!it) continue;
        var title = it.titulo || it.nome || '';
        if (!title) continue;
        var href = it.link || '';
        if (href && href.charAt(0) !== '/' && href.indexOf('http') !== 0) href = '/' + href;
        var img = it.midia_url || '';
        // valor is a string like "3651.60" — format to BRL
        var valorNum = parseFloat(it.valor);
        var valorDeNum = parseFloat(it.valor_de);
        var priceText = !isNaN(valorNum)
          ? 'R$ ' + valorNum.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
          : '';
        var oldPriceText = (!isNaN(valorDeNum) && valorDeNum > valorNum)
          ? 'R$ ' + valorDeNum.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
          : '';
        var discountText = '';
        if (typeof it.percentual_off === 'number' && it.percentual_off > 0) {
          discountText = '-' + Math.round(it.percentual_off) + '%';
        }
        out.push({
          href: href,
          title: title,
          img: img,
          price: priceText,
          oldPrice: oldPriceText,
          discount: discountText
        });
      }
      return out;
    }

    function fetchSearchProducts(q) {
      // Returns a Promise<Product[]> — cached, debounced, abortable
      var key = q.toLowerCase().trim();
      if (!key || key.length < 3) return Promise.resolve([]);
      var cached = getCachedSearch(key);
      if (cached) return Promise.resolve(cached);
      if (searchAbortController) {
        try { searchAbortController.abort(); } catch (e) {}
      }
      searchAbortController = (typeof AbortController !== 'undefined') ? new AbortController() : null;
      var url = '/busca?q=' + encodeURIComponent(key);
      var opts = { credentials: 'same-origin', headers: { 'Accept': 'text/html' } };
      if (searchAbortController) opts.signal = searchAbortController.signal;
      return fetch(url, opts)
        .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); })
        .then(function (html) {
          var products = parseSearchHtml(html);
          setCachedSearch(key, products);
          return products;
        })
        .catch(function (e) {
          if (e && e.name === 'AbortError') return null; // stale request — ignore
          return []; // network/parse error — treat as "no results"
        });
    }

    // Render a product card row. Expects a product parsed by parseSearchHtml.
    function renderProductCard(p) {
      var imgHtml = p.img
        ? '<img src="' + escHtml(p.img) + '" alt="" loading="lazy" width="64" height="64"/>'
        : '<div class="mm-h-search-product-noimg"></div>';
      var priceHtml = p.price
        ? '<span class="mm-h-search-product-price">' + escHtml(p.price) + '</span>'
        : '';
      var oldHtml = p.oldPrice && p.oldPrice !== p.price
        ? '<span class="mm-h-search-product-oldprice">' + escHtml(p.oldPrice) + '</span>'
        : '';
      var discountHtml = p.discount
        ? '<span class="mm-h-search-product-discount">' + escHtml(p.discount) + '</span>'
        : '';
      return '<a class="mm-h-search-product" href="' + escHtml(p.href) + '" data-recent="1">' +
        '<span class="mm-h-search-product-thumb">' + imgHtml + discountHtml + '</span>' +
        '<span class="mm-h-search-product-body">' +
          '<span class="mm-h-search-product-name">' + escHtml(p.title) + '</span>' +
          '<span class="mm-h-search-product-prices">' + oldHtml + priceHtml + '</span>' +
        '</span>' +
      '</a>';
    }

    function renderEmptyState() {
      if (!searchResults) return;
      var recents = getRecentSearches();
      if (!recents.length) {
        // Show only the popular-terms cloud (original behavior)
        searchResults.hidden = true;
        searchResults.innerHTML = '';
        if (searchSuggestions) searchSuggestions.hidden = false;
        return;
      }
      // Show recent searches list + popular terms cloud
      var html = '<div class="mm-h-search-section">';
      html += '<span class="mm-h-search-sug-label">Buscas recentes</span>';
      html += '<ul class="mm-h-search-list">';
      for (var i = 0; i < recents.length; i++) {
        var r = recents[i];
        html += '<li><a class="mm-h-search-result" href="/busca?q=' + encodeURIComponent(r) + '">' +
          '<span class="mm-h-search-result-icon">' + clockIconSvg + '</span>' +
          '<span class="mm-h-search-result-label">' + escHtml(r) + '</span>' +
          '</a></li>';
      }
      html += '</ul></div>';
      searchResults.innerHTML = html;
      searchResults.hidden = false;
      if (searchSuggestions) searchSuggestions.hidden = false;
    }

    // Render the CTA + popular matches sync portion. Returns the current qTrim
    // so the async product fetch can verify it's still current before injecting.
    function renderSyncQueryResults(q) {
      if (!searchResults) return '';
      if (searchSuggestions) searchSuggestions.hidden = true;
      var qTrim = q.trim();
      if (qTrim.length < 2) { renderEmptyState(); return ''; }
      var qLower = qTrim.toLowerCase();
      var matches = POPULAR_TERMS.filter(function (t) {
        return t.label.toLowerCase().indexOf(qLower) !== -1 || t.q.toLowerCase().indexOf(qLower) !== -1;
      }).slice(0, 4);
      var html = '';
      // Primary "Buscar por" CTA (always first)
      html += '<ul class="mm-h-search-list">';
      html += '<li><a class="mm-h-search-result mm-h-search-result-primary" href="/busca?q=' + encodeURIComponent(qTrim) + '" data-recent="1">' +
        '<span class="mm-h-search-result-icon">' + searchIconSvg + '</span>' +
        '<span class="mm-h-search-result-label">Buscar por <strong>&ldquo;' + escHtml(qTrim) + '&rdquo;</strong></span>' +
        '<span class="mm-h-search-result-arrow" aria-hidden="true">&rarr;</span>' +
        '</a></li>';
      for (var i = 0; i < matches.length; i++) {
        var m = matches[i];
        html += '<li><a class="mm-h-search-result" href="/busca?q=' + encodeURIComponent(m.q) + '" data-recent="1">' +
          '<span class="mm-h-search-result-icon">' + searchIconSvg + '</span>' +
          '<span class="mm-h-search-result-label">' + escHtml(m.label) + '</span>' +
          '</a></li>';
      }
      html += '</ul>';
      // Product section placeholder (populated asynchronously by fetchSearchProducts)
      if (qTrim.length >= 3) {
        html += '<div class="mm-h-search-products-section" data-q="' + escHtml(qTrim) + '">' +
          '<span class="mm-h-search-sug-label">Produtos</span>' +
          '<div class="mm-h-search-products-grid mm-h-search-products-loading">' +
            '<div class="mm-h-search-product-skel"></div>' +
            '<div class="mm-h-search-product-skel"></div>' +
            '<div class="mm-h-search-product-skel"></div>' +
            '<div class="mm-h-search-product-skel"></div>' +
          '</div>' +
        '</div>';
      }
      searchResults.innerHTML = html;
      searchResults.hidden = false;
      return qTrim;
    }

    function renderQueryResults(q) {
      var qTrim = renderSyncQueryResults(q);
      if (!qTrim || qTrim.length < 3) return;
      // Async fetch + inject
      fetchSearchProducts(qTrim).then(function (products) {
        // Stale check: input may have changed while fetch was in flight
        if (!searchInput) return;
        var currentQ = (searchInput.value || '').trim();
        if (currentQ !== qTrim) return; // user typed more, this result is stale
        if (products === null) return; // AbortError from stale cancel
        var section = searchResults && searchResults.querySelector('.mm-h-search-products-section[data-q="' + qTrim.replace(/"/g, '\\"') + '"]');
        if (!section) return;
        var grid = section.querySelector('.mm-h-search-products-grid');
        if (!grid) return;
        grid.classList.remove('mm-h-search-products-loading');
        if (!products || products.length === 0) {
          section.innerHTML = '<span class="mm-h-search-sug-label">Nenhum produto encontrado para &ldquo;' + escHtml(qTrim) + '&rdquo;</span>';
          return;
        }
        var cards = '';
        for (var i = 0; i < products.length; i++) cards += renderProductCard(products[i]);
        grid.innerHTML = cards;
      });
    }

    var searchDebounce = null;
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        clearTimeout(searchDebounce);
        var val = searchInput.value;
        searchDebounce = setTimeout(function () {
          if (!val || val.trim().length < 2) renderEmptyState();
          else renderQueryResults(val);
        }, 300);
      });
      // Wire up recent-search persistence on result click and form submit
      if (searchResults) {
        searchResults.addEventListener('click', function (e) {
          var a = e.target.closest && e.target.closest('a[data-recent]');
          if (a) {
            var q = a.getAttribute('href').split('q=')[1];
            if (q) pushRecentSearch(decodeURIComponent(q.replace(/\+/g, ' ')));
          }
        });
      }
      var searchForm = overlay && overlay.querySelector('.mm-h-search-form');
      if (searchForm) {
        searchForm.addEventListener('submit', function () {
          pushRecentSearch((searchInput.value || '').trim());
        });
      }
    }
    // On overlay open, render the empty state so recent searches appear immediately
    if (openBtn) {
      openBtn.addEventListener('click', function () {
        renderEmptyState();
      });
    }

    // Mobile drawer (replaces the Phase 1 stub that opened search)
    var drawer = document.getElementById('mm-h-drawer');
    var drawerClose = document.getElementById('mm-h-drawer-close');
    var drawerBackdrop = drawer && drawer.querySelector('.mm-h-drawer-backdrop');

    function openDrawer() {
      if (!drawer) return;
      drawer.hidden = false;
      document.body.style.overflow = 'hidden';
      // Focus first interactive for keyboard users
      setTimeout(function () {
        var first = drawer.querySelector('.mm-h-drawer-close');
        if (first) first.focus();
      }, 100);
    }
    function closeDrawer() {
      if (!drawer || drawer.hidden) return;
      // Play exit animation, then hide
      drawer.classList.add('mm-h-drawer-closing');
      document.body.style.overflow = '';
      setTimeout(function () {
        drawer.hidden = true;
        drawer.classList.remove('mm-h-drawer-closing');
        var burger = document.getElementById('mm-h-burger');
        if (burger) burger.focus();
      }, 320);
    }

    var burger = document.getElementById('mm-h-burger');
    if (burger) {
      burger.addEventListener('click', openDrawer);
    }
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

    // Esc closes drawer (extends existing Esc handlers — add new listener)
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer && !drawer.hidden) closeDrawer();
    });

    // Swipe-left to close (basic touch handler)
    if (drawer) {
      var touchStartX = 0;
      drawer.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
      }, { passive: true });
      drawer.addEventListener('touchend', function (e) {
        var touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 80) closeDrawer();
      }, { passive: true });
    }

    // Animated expand/collapse for <details> sections in the mobile drawer.
    // Native <details> snaps open/close instantly. We intercept the toggle,
    // animate maxHeight + opacity, then set/remove [open] attribute.
    if (drawer) {
      drawer.querySelectorAll('.mm-h-drawer-section summary').forEach(function (summary) {
        summary.addEventListener('click', function (e) {
          e.preventDefault();
          var details = summary.parentElement;
          var ul = details.querySelector('ul');
          if (!ul) return;
          if (details.open) {
            // Close: animate from current height → 0
            ul.style.maxHeight = ul.scrollHeight + 'px';
            ul.style.opacity = '1';
            requestAnimationFrame(function () {
              ul.style.maxHeight = '0';
              ul.style.opacity = '0';
              ul.style.paddingTop = '0';
              ul.style.paddingBottom = '0';
            });
            setTimeout(function () {
              details.open = false;
              ul.style.maxHeight = '';
              ul.style.opacity = '';
              ul.style.paddingTop = '';
              ul.style.paddingBottom = '';
            }, 300);
          } else {
            // Open: set open, measure, animate from 0 → scrollHeight
            details.open = true;
            var h = ul.scrollHeight;
            ul.style.maxHeight = '0';
            ul.style.opacity = '0';
            ul.style.paddingTop = '0';
            ul.style.paddingBottom = '0';
            requestAnimationFrame(function () {
              ul.style.maxHeight = h + 'px';
              ul.style.opacity = '1';
              ul.style.paddingTop = '';
              ul.style.paddingBottom = '';
            });
            setTimeout(function () {
              ul.style.maxHeight = '';
              ul.style.opacity = '';
            }, 320);
          }
        });
      });
    }

    // Cart drawer integration — reuse Magazord native .carrinho-rapido-ctn
    // (The drawer lives inside .header-middle which we hide via display:none.
    //  We lift it out on first open, then toggle transform to slide in/out.)
    var cartLink = document.getElementById('mm-h-cart');
    var liftedDrawer = null;
    var cartScrim = null;

    function findDrawer() {
      return document.querySelector('.carrinho-rapido-ctn');
    }
    // Inline SVG X used for the close button. Kept small so it inherits
    // currentColor from the .mm-close-x wrapper for theming.
    var cartCloseSvg = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';

    // The drawer has TWO possible structures depending on whether
    // Magazord's atualizaPreview AJAX has run yet:
    //   (a) SSR initial: .top-carrinho > .icon-arrow-bottom  (empty cart)
    //   (b) Post-AJAX:   .header-cart > .close-car-fast      (with items)
    // We wire whichever is present at the time we lift, and also add a
    // delegated listener on the drawer so closes keep working even if
    // Magazord re-renders the header mid-session.
    // Inject X icon into .close-car-fast (may be called multiple times since
    // Magazord's atualizaPreview AJAX can replace the header on subsequent
    // re-renders). Idempotent: only injects if the span is empty.
    function hydrateCloseFast(drawer) {
      if (!drawer) return;
      var closeFast = drawer.querySelector('.close-car-fast');
      if (closeFast && !closeFast.innerHTML.trim()) {
        closeFast.innerHTML = cartCloseSvg;
        closeFast.setAttribute('aria-label', 'Fechar carrinho');
        closeFast.setAttribute('role', 'button');
        closeFast.setAttribute('tabindex', '0');
      }
    }

    // The drawer has TWO possible structures depending on whether
    // Magazord's atualizaPreview AJAX has run yet:
    //   (a) SSR initial: .top-carrinho > .icon-arrow-bottom  (empty cart)
    //   (b) Post-AJAX:   .header-cart > .close-car-fast      (with items)
    // Delegated click listener on the drawer (outer element, never replaced
    // by AJAX) handles both. Called once per drawer via dataset.mmCloseWired.
    function wireCloseButtons(drawer) {
      if (!drawer || drawer.dataset.mmCloseWired) return;
      drawer.dataset.mmCloseWired = '1';
      drawer.addEventListener('click', function (e) {
        var t = e.target;
        if (t && t.closest && (t.closest('.close-car-fast') || t.closest('.icon-arrow-bottom'))) {
          e.preventDefault();
          e.stopPropagation();
          closeCartDrawer();
        }
      }, true);
      drawer.addEventListener('keydown', function (e) {
        if ((e.key === 'Enter' || e.key === ' ') && e.target && e.target.closest && e.target.closest('.close-car-fast')) {
          e.preventDefault();
          closeCartDrawer();
        }
      });
    }

    function liftDrawer(drawer) {
      // NOTE: we intentionally no longer move the drawer out of its parent.
      // Earlier versions did `document.body.appendChild(drawer)` to escape
      // `.header-middle { display: none }`, but that broke React
      // reconciliation on subsequent updates (Zord.checkout.adicionaQuantidade
      // threw NotFoundError: Failed to execute removeChild) AND made
      // atualizaPreview's target selector `$(".carrinho-rapido", "#cart-preview-area")`
      // return 0 elements, so AJAX updates to the drawer content were dropped.
      //
      // Instead, global.css hides .header-middle via `visibility:hidden +
      // width/height:0` and explicitly opts `.carrinho-rapido-ctn` back in
      // to `visibility:visible`. The position:fixed drawer renders at the
      // viewport while staying in the React-owned DOM tree.
      if (!drawer) return;
      if (!drawer.dataset.mmLifted) {
        drawer.dataset.mmLifted = '1';
        drawer.style.position = 'fixed';
        drawer.style.display = 'block';
        drawer.style.zIndex = '200';
        // Clear stacking contexts on ancestors between the drawer and
        // .header-middle. Magazord's CSS may set z-index, transform, or
        // filter on intermediate wrappers (#cart-preview-area, etc) which
        // creates a stacking context that traps the drawer's z-index:200
        // inside it — making it paint below our scrim (150) and header (100).
        var p = drawer.parentElement;
        while (p && !p.classList.contains('header-middle')) {
          p.style.zIndex = 'auto';
          p.style.transform = 'none';
          p.style.filter = 'none';
          p.style.isolation = 'auto';
          p = p.parentElement;
        }
      }
      wireCloseButtons(drawer);
      hydrateCloseFast(drawer);
    }
    // Curated top-10 products (captured from /top-10-produtos 2026-04-09).
    // Fetching at runtime is not viable: /top-10-produtos renders product
    // cards client-side via React after scroll, so raw fetch() returns no
    // product links. A hardcoded curated list is stable (top-10 rarely
    // changes) and guarantees zero layout shift + zero latency.
    var MM_CART_TOP_PRODUCTS = [
      {
        href: '/rack-atenas-cor-naturalle-largura-220-cm',
        name: 'Rack Atenas 220cm',
        img: 'https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5519/am-2501-mavaular-rack-atenas-220-naturalle-lado.jpg?ims=200x200',
        priceFrom: 'R$ 1.615,49',
        priceTo: 'R$ 1.032,30'
      },
      {
        href: '/rack-atenas-cor-naturalle-largura-180-cm',
        name: 'Rack Atenas 180cm',
        img: 'https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5419/am-2501-mavaular-rack-atenas-180-naturalle.jpg?ims=200x200',
        priceFrom: 'R$ 1.688,71',
        priceTo: 'R$ 942,31'
      },
      {
        href: '/buffet-arcus-cor-naturalle-largura-92-cm',
        name: 'Buffet Arcus 92cm',
        img: 'https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5439/am-2501-mavaular-arcus-02-pts-naturalle.jpg?ims=200x200',
        priceFrom: 'R$ 1.359,09',
        priceTo: 'R$ 807,30'
      },
      {
        href: '/buffet-atenas-cor-naturalle',
        name: 'Buffet Atenas',
        img: 'https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/4237/am-2502-mavaular-buffet-atenas-naturalle.jpg?ims=200x200',
        priceFrom: 'R$ 2.124,07',
        priceTo: 'R$ 1.032,30'
      }
    ];
    var cartBagSvg = '<svg viewBox="0 0 48 48" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 14 8 20v22a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V20l-4-6z"/><path d="M8 20h32"/><path d="M32 28a8 8 0 0 1-16 0"/></svg>';

    function getCartCountFromSources() {
      // Source 1 (CANONICAL): Zord.get("cart.size") — Magazord's internal
      // in-memory store. Inspected via Zord.checkout.atualizaPreview source,
      // which uses exactly this key. Zord.set("cart.size", N) is what
      // Magazord calls to update it. This is THE source of truth.
      try {
        if (typeof Zord !== 'undefined' && typeof Zord.get === 'function') {
          var size = Zord.get('cart.size');
          if (typeof size === 'number') return size;
          if (typeof size === 'string' && /^\d+$/.test(size)) return parseInt(size, 10);
        }
      } catch (e) {}
      // Source 2: Magazord's native counter element .item-ctn — updated by
      // Zord.checkout.atualizaContadorCarrinho after server sync. Lives in
      // hidden #cart-preview-area parent but textContent is still readable.
      var countEl = document.querySelector('#cart-preview-area .item-ctn, .carrinho-container .item-ctn');
      if (countEl) {
        var txt = (countEl.textContent || '').trim();
        if (txt && /\d/.test(txt)) {
          var n = parseInt(txt.replace(/\D/g, ''), 10);
          if (!isNaN(n)) return n;
        }
      }
      // Source 3: DOM .cart-item fallback (only if Zord not loaded yet)
      var drawerRef = document.querySelector('.carrinho-rapido-ctn');
      if (drawerRef) {
        var real = 0;
        drawerRef.querySelectorAll('.cart-item').forEach(function (it) {
          if (!it.closest('.mm-cart-empty-wrapper')) real++;
        });
        if (real > 0) return real;
      }
      return 0;
    }

    function isCartReallyEmpty(content) {
      // CONSERVATIVE: only return true if BOTH conditions are met
      //   1. Zord.get('cart.size') === 0 (canonical count says empty)
      //   2. DOM shows .box-empty-cart visible (Magazord rendered empty)
      // This avoids fighting React during hydration when count says "empty"
      // but items haven't been rendered yet.
      if (getCartCountFromSources() !== 0) return false;
      if (!content) return false;
      var emptyBox = content.querySelector('.box-empty-cart');
      if (!emptyBox) return false; // Magazord hasn't rendered yet — wait
      var s = getComputedStyle(emptyBox);
      if (s.display === 'none' || s.visibility === 'hidden') return false;
      return true;
    }

    function hasRealCartItems(content) {
      // Used for cleanup decisions: only return true if we see actual
      // cart items rendered in the DOM AND count > 0.
      if (!content) return false;
      var count = getCartCountFromSources();
      if (count === 0) return false;
      var real = 0;
      content.querySelectorAll('.cart-item').forEach(function (it) {
        if (!it.closest('.mm-cart-empty-wrapper')) real++;
      });
      return real > 0;
    }

    function removeEmptyEnhancement(content) {
      if (!content) return;
      content.classList.remove('mm-cart-has-empty-enhancement');
      var existingWrap = content.querySelector(':scope > .mm-cart-empty-wrapper');
      if (existingWrap) existingWrap.remove();
    }

    function enhanceEmptyCart(drawer) {
      if (!drawer) return;
      var content = drawer.querySelector('.content-cart');
      if (!content) return;

      // Self-healing cleanup: only remove enhancement when we SEE real items
      // rendered in the DOM. Don't remove based on count alone — React may
      // not have hydrated yet and removing prematurely leaves an empty drawer.
      if (hasRealCartItems(content)) {
        removeEmptyEnhancement(content);
        return;
      }

      // Only INJECT enhancement when BOTH count is 0 AND native empty box is
      // visible. In any ambiguous state (count=6 but no DOM items, or count=0
      // but empty box not yet rendered), do nothing and wait for mutations.
      if (!isCartReallyEmpty(content)) return;

      // Already enhanced — don't duplicate
      if (content.querySelector(':scope > .mm-cart-empty-wrapper')) return;

      // Build our custom empty state node (appended as sibling to native box)
      var wrap = document.createElement('div');
      wrap.className = 'mm-cart-empty-wrapper';
      var productsHtml = '';
      for (var i = 0; i < MM_CART_TOP_PRODUCTS.length; i++) {
        var pd = MM_CART_TOP_PRODUCTS[i];
        productsHtml += '<a class="mm-cart-suggestion-card" href="' + pd.href + '">' +
          '<span class="mm-cart-suggestion-thumb"><img src="' + pd.img + '" alt="" loading="lazy" width="80" height="80"/></span>' +
          '<span class="mm-cart-suggestion-body">' +
            '<span class="mm-cart-suggestion-name">' + pd.name + '</span>' +
            '<span class="mm-cart-suggestion-price">' +
              '<span class="mm-cart-suggestion-price-from">' + pd.priceFrom + '</span>' +
              '<span class="mm-cart-suggestion-price-to">' + pd.priceTo + '</span>' +
            '</span>' +
          '</span>' +
          '</a>';
      }
      wrap.innerHTML =
        '<div class="mm-cart-empty-hero">' +
          '<div class="mm-cart-empty-icon">' + cartBagSvg + '</div>' +
          '<h3 class="mm-cart-empty-title">Seu carrinho está vazio</h3>' +
          '<p class="mm-cart-empty-copy">Dê uma olhada nos móveis que nossos clientes mais amam.</p>' +
        '</div>' +
        '<div class="mm-cart-suggestions">' +
          '<span class="mm-cart-suggestions-label">Você pode gostar de</span>' +
          '<div class="mm-cart-suggestions-grid">' + productsHtml + '</div>' +
        '</div>';
      // Mark the content-cart so our CSS hides the native empty state
      content.classList.add('mm-cart-has-empty-enhancement');
      content.appendChild(wrap);
    }

    // Trigger Magazord's native preview loader. Source (inspected via
    // Zord.checkout.atualizaPreview.toString()):
    //   if (!Zord.get("cart.preview") && 0 < Zord.get("cart.size") || forced) {
    //     Zord.set("cart.preview", true);
    //     var b = $(".carrinho-rapido", "#cart-preview-area");
    //     b.addClass("loading").empty();
    //     Zord.call("cliente", "getInfoExtra", {preview:true}, function(a) {
    //       if (a.preview) b.html(a.preview);
    //     });
    //   }
    // CRITICAL: the target selector requires .carrinho-rapido to be a child
    // of #cart-preview-area. If we lift the drawer out BEFORE this AJAX
    // completes, the response handler finds 0 elements and the drawer stays
    // empty. So we must wait for the preview HTML to land before lifting.
    function loadCartPreview(drawer, done) {
      try {
        if (typeof Zord === 'undefined' || !Zord.checkout || typeof Zord.checkout.atualizaPreview !== 'function') {
          done();
          return;
        }
        var count = getCartCountFromSources();
        if (count === 0) { done(); return; }
        // If items already rendered, skip reload
        if (drawer.querySelector('.cart-item')) { done(); return; }
        // Force reload (no-arg form sets a=true inside Magazord's fn)
        Zord.checkout.atualizaPreview();
        // Poll for .cart-item to appear (AJAX is async, ~200-800ms typical)
        var start = Date.now();
        var MAX_WAIT = 2000;
        (function poll() {
          if (drawer.querySelector('.cart-item')) { done(); return; }
          if (Date.now() - start >= MAX_WAIT) { done(); return; }
          setTimeout(poll, 50);
        })();
      } catch (e) {
        done();
      }
    }

    function openCartDrawer() {
      var drawer = findDrawer();
      if (drawer) {
        loadCartPreview(drawer, function () { continueOpenDrawer(drawer); });
        return;
      }
      // Retry — React may not have rendered .carrinho-rapido-ctn yet
      // (common on mobile where hydration can be slower)
      var retries = 0;
      var maxRetries = 5;
      (function retry() {
        retries++;
        drawer = findDrawer();
        if (drawer) {
          loadCartPreview(drawer, function () { continueOpenDrawer(drawer); });
        } else if (retries < maxRetries) {
          setTimeout(retry, 150);
        } else {
          window.location.href = '/checkout/cart';
        }
      })();
    }

    function continueOpenDrawer(drawer) {
      liftDrawer(drawer);
      // Re-hydrate close X icon in case AJAX re-rendered the header since
      // last open (wireCloseButtons is one-time but hydrateCloseFast must
      // run whenever .close-car-fast is freshly empty).
      hydrateCloseFast(drawer);
      // Try to enhance empty state — runs every open so if React re-renders
      // the drawer contents between opens, we re-inject.
      enhanceEmptyCart(drawer);
      // Also observe changes to .content-cart so adding an item removes the
      // empty enhancement and vice-versa (self-healing)
      var content = drawer.querySelector('.content-cart');
      if (content && !content.dataset.mmObserved) {
        content.dataset.mmObserved = '1';
        var observer = new MutationObserver(function () {
          enhanceEmptyCart(drawer);
        });
        observer.observe(content, { childList: true, subtree: true, attributes: false });
      }
      // Force transform via inline style (bypasses Tailwind class system)
      drawer.style.transform = 'translateX(0)';
      drawer.style.transition = 'transform 320ms cubic-bezier(0.16, 1, 0.3, 1)';
      // Scrim — z-index 150 (between header 100 and drawer 200)
      if (!cartScrim) {
        cartScrim = document.createElement('div');
        cartScrim.id = 'mm-h-cart-scrim';
        cartScrim.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:150;opacity:0;transition:opacity 320ms;';
        cartScrim.addEventListener('click', closeCartDrawer);
        document.body.appendChild(cartScrim);
        // Trigger transition
        requestAnimationFrame(function () { cartScrim.style.opacity = '1'; });
      }
      document.body.style.overflow = 'hidden';
    }
    function closeCartDrawer() {
      var drawer = findDrawer();
      if (drawer) drawer.style.transform = 'translateX(110%)';
      if (cartScrim) {
        cartScrim.style.opacity = '0';
        var s = cartScrim;
        setTimeout(function () { if (s && s.parentNode) s.parentNode.removeChild(s); }, 320);
        cartScrim = null;
      }
      document.body.style.overflow = '';
    }

    if (cartLink) {
      // Desktop: our #mm-h-cart button opens the drawer via click.
      // Mobile: Magazord's native tabbar (.header-bottom) has its own cart
      // button that opens the drawer via React's built-in handler — we
      // re-show .header-bottom on mobile via CSS so that continues to work.
      cartLink.addEventListener('click', function (e) {
        e.preventDefault();
        openCartDrawer();
      });
    }

    // Esc closes cart drawer (separate listener, doesn't conflict with search/mega-menu)
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && cartScrim) closeCartDrawer();
    });

    // Cart count sync — subscribe to Magazord's reactItemAddedToCart event
    // and read the count from the native DOM badge (if it exists) OR from data attributes.
    var cartBadge = document.getElementById('mm-h-cart-count');
    var cartAction = document.getElementById('mm-h-cart');

    function updateCartCount() {
      if (!cartBadge) return;
      // Use the canonical source from getCartCountFromSources() — .item-ctn
      // native element first, localStorage.pwcart_result second, DOM .cart-item
      // counting as last fallback.
      var count = getCartCountFromSources();

      if (count > 0) {
        cartBadge.textContent = count > 99 ? '99+' : String(count);
        cartBadge.hidden = false;
      } else {
        cartBadge.hidden = true;
      }
      // Update aria-label for screen readers
      if (cartAction) {
        cartAction.setAttribute('aria-label', 'Carrinho, ' + count + ' ' + (count === 1 ? 'item' : 'itens'));
      }

      // Also trigger a re-check of the empty state enhancement on the drawer
      // (in case items loaded after initial enhance call)
      var drawerNow = findDrawer();
      if (drawerNow && drawerNow.dataset.mmLifted) enhanceEmptyCart(drawerNow);
    }

    // Listen for cart mutations
    window.addEventListener('reactItemAddedToCart', updateCartCount);
    // Also listen on document for jQuery-dispatched events (Magazord is jQuery-based)
    if (typeof jQuery !== 'undefined') {
      jQuery(document).on('reactItemAddedToCart', updateCartCount);
      // Also hook into ajax cart updates directly
      jQuery(document).ajaxComplete(function (event, xhr, settings) {
        if (settings && settings.url && settings.url.indexOf('checkout/cart') !== -1) {
          setTimeout(updateCartCount, 150);
        }
      });
    }
    // Initial read on load (cart may already have items from session)
    setTimeout(updateCartCount, 500);
    setTimeout(updateCartCount, 2000); // retry after Magazord finishes rendering
    setTimeout(updateCartCount, 5000); // final retry for slow connections

    // Watch Magazord's native count element .item-ctn for mutations —
    // React updates its text when cart items change. This catches cases
    // where reactItemAddedToCart event doesn't fire (quantity change,
    // item removal, page navigation, etc).
    function attachCountObserver() {
      var nativeEl = document.querySelector('#cart-preview-area .item-ctn, .carrinho-container .item-ctn');
      if (!nativeEl || nativeEl.dataset.mmObserved) return;
      nativeEl.dataset.mmObserved = '1';
      var mo = new MutationObserver(updateCartCount);
      mo.observe(nativeEl, { childList: true, characterData: true, subtree: true });
    }
    attachCountObserver();
    setTimeout(attachCountObserver, 1000);
    setTimeout(attachCountObserver, 3000);

    // Sticky compact state (scroll-direction sticky)
    var lastScrollY = 0;
    var ticking = false;
    var COMPACT_THRESHOLD = 24;

    function onScroll() {
      var y = window.scrollY;
      var delta = y - lastScrollY;

      if (y > COMPACT_THRESHOLD && delta > 0) {
        // Scrolling DOWN past threshold
        header.classList.add('is-compact');
      } else if (y <= COMPACT_THRESHOLD || delta < 0) {
        // At top OR scrolling UP
        header.classList.remove('is-compact');
      }

      lastScrollY = y;
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
