/* =============================================
   HEADER — Madeira Mania
   Injection of custom #mm-header shell
   Idempotent (checks guard ID before injecting)
   ============================================= */

(function(){
  if (document.getElementById('mm-header')) return;

  function init() {
    if (document.getElementById('mm-header')) return;

    var logoUrl = 'https://madeiramania.cdn.magazord.com.br/resources/Design%20sem%20nome%20(1).svg';
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
      '    <a class="mm-h-action" href="/checkout/cart" id="mm-h-cart" aria-label="Carrinho, 0 itens" aria-live="polite">',
      '      <span class="mm-h-cart-icon">' + svg.bag + '<span class="mm-h-cart-badge" id="mm-h-cart-count" aria-hidden="true" hidden>0</span></span>',
      '      <span>Carrinho</span>',
      '    </a>',
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
      '          <li><a href="/sala-de-estar-9677307902">Ver todos</a></li>',
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
      '          <li><a href="/sala-de-jantar-1916970475">Ver todos</a></li>',
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
      '          <li><a href="/cozinha-6327619447">Ver todos</a></li>',
      '          <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>',
      '          <li><a href="/cozinha/banquetas">Banquetas</a></li>',
      '          <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>',
      '          <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>',
      '        </ul>',
      '      </details>',
      '      <details class="mm-h-drawer-section">',
      '        <summary>Quarto</summary>',
      '        <ul>',
      '          <li><a href="/quarto-0961844589">Ver todos</a></li>',
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
      '          <li><a href="/bar-e-cafe">Ver todos</a></li>',
      '          <li><a href="/bar-e-cafe/bares">Bares</a></li>',
      '          <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',
      '        </ul>',
      '      </details>',
      '      <details class="mm-h-drawer-section">',
      '        <summary>Escritório</summary>',
      '        <ul>',
      '          <li><a href="/escritorio-899523853">Ver todos</a></li>',
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

    // Search autocomplete — debounced filter + "Buscar por" CTA + recent searches
    // NOTE: Magazord has no JSON autocomplete endpoint (probed 2026-04-09) and /busca
    // renders products client-side via React, so raw fetch() can't scrape results.
    // Strategy: instant "Buscar por '<q>'" CTA + filtered popular terms + recent
    // searches from localStorage. Honest, zero-latency, no broken promises.
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

    function renderQueryResults(q) {
      if (!searchResults) return;
      if (searchSuggestions) searchSuggestions.hidden = true;
      var qTrim = q.trim();
      if (qTrim.length < 2) { renderEmptyState(); return; }
      var qLower = qTrim.toLowerCase();
      // Filter popular terms that match
      var matches = POPULAR_TERMS.filter(function (t) {
        return t.label.toLowerCase().indexOf(qLower) !== -1 || t.q.toLowerCase().indexOf(qLower) !== -1;
      }).slice(0, 5);
      var html = '<ul class="mm-h-search-list">';
      // Primary "Buscar por" CTA (always first)
      html += '<li><a class="mm-h-search-result mm-h-search-result-primary" href="/busca?q=' + encodeURIComponent(qTrim) + '" data-recent="1">' +
        '<span class="mm-h-search-result-icon">' + searchIconSvg + '</span>' +
        '<span class="mm-h-search-result-label">Buscar por <strong>&ldquo;' + escHtml(qTrim) + '&rdquo;</strong></span>' +
        '<span class="mm-h-search-result-arrow" aria-hidden="true">&rarr;</span>' +
        '</a></li>';
      // Filtered popular matches
      for (var i = 0; i < matches.length; i++) {
        var m = matches[i];
        html += '<li><a class="mm-h-search-result" href="/busca?q=' + encodeURIComponent(m.q) + '" data-recent="1">' +
          '<span class="mm-h-search-result-icon">' + searchIconSvg + '</span>' +
          '<span class="mm-h-search-result-label">' + escHtml(m.label) + '</span>' +
          '</a></li>';
      }
      html += '</ul>';
      searchResults.innerHTML = html;
      searchResults.hidden = false;
    }

    var searchDebounce = null;
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        clearTimeout(searchDebounce);
        var val = searchInput.value;
        searchDebounce = setTimeout(function () {
          if (!val || val.trim().length < 2) renderEmptyState();
          else renderQueryResults(val);
        }, 180);
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
      if (!drawer) return;
      drawer.hidden = true;
      document.body.style.overflow = '';
      // Return focus to burger
      var burger = document.getElementById('mm-h-burger');
      if (burger) burger.focus();
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

    // Cart drawer integration — reuse Magazord native .carrinho-rapido-ctn
    // (The drawer lives inside .header-middle which we hide via display:none.
    //  We lift it out on first open, then toggle transform to slide in/out.)
    var cartLink = document.getElementById('mm-h-cart');
    var liftedDrawer = null;
    var cartScrim = null;

    function findDrawer() {
      // Drawer may not exist yet on first page load — Magazord renders it client-side
      return document.querySelector('.carrinho-rapido-ctn');
    }
    function liftDrawer(drawer) {
      if (drawer && !drawer.dataset.mmLifted) {
        // Move out of hidden parent and make it a body-level fixed element
        document.body.appendChild(drawer);
        drawer.dataset.mmLifted = '1';
        // Remove display:none inheritance from parent chain
        drawer.style.display = 'block';
        // Force z-index ABOVE our header (100) and scrim (150) so user can close it
        drawer.style.zIndex = '200';

        // Wire up native close button (.icon-arrow-bottom) — Magazord's native
        // toggle is defeated by our inline transform, so we must intercept.
        var nativeClose = drawer.querySelector('.icon-arrow-bottom');
        if (nativeClose) {
          // Expand hit area to parent to make the whole 44x44 tappable
          nativeClose.style.cursor = 'pointer';
          nativeClose.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            closeCartDrawer();
          }, true);
        }
        // The .top-carrinho parent also has a Magazord onclick — intercept
        // clicks on the arrow area to prevent native toggle from fighting ours.
        var topCarrinho = drawer.querySelector('.top-carrinho');
        if (topCarrinho) {
          topCarrinho.addEventListener('click', function (e) {
            // If user clicked the arrow icon (or inside it), close the drawer
            if (e.target.closest('.icon-arrow-bottom')) {
              e.preventDefault();
              e.stopPropagation();
              closeCartDrawer();
            }
          }, true);
        }
      }
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
      // Source 1 (PRIMARY): Magazord's native counter element .item-ctn lives
      // inside #cart-preview-area (parent of the drawer we lifted). It's
      // in a display:none parent but the textContent is still readable.
      var countEl = document.querySelector('#cart-preview-area .item-ctn, .carrinho-container .item-ctn');
      if (countEl) {
        var txt = (countEl.textContent || '').trim();
        if (txt && /\d/.test(txt)) {
          var n = parseInt(txt.replace(/\D/g, ''), 10);
          if (!isNaN(n)) return n;
        }
      }
      // Source 2: localStorage.pwcart_result (Magazord persists cart state)
      try {
        var pw = localStorage.getItem('pwcart_result');
        if (pw) {
          var parsed = JSON.parse(pw);
          if (parsed) {
            if (Array.isArray(parsed.items)) return parsed.items.length;
            if (Array.isArray(parsed.produtos)) return parsed.produtos.length;
            if (parsed.carrinho && Array.isArray(parsed.carrinho.produtos)) return parsed.carrinho.produtos.length;
            if (typeof parsed.quantidade === 'number') return parsed.quantidade;
            if (typeof parsed.totalItens === 'number') return parsed.totalItens;
          }
        }
      } catch (e) {}
      // Source 3: count .cart-item elements in the lifted drawer (fallback)
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
      // Use real count from Magazord state — NOT DOM presence (which is
      // unreliable because React lazily renders into the hidden parent)
      return getCartCountFromSources() === 0;
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

      // Self-healing: if cart has items, always clean up our enhancement
      if (!isCartReallyEmpty(content)) {
        removeEmptyEnhancement(content);
        return;
      }

      // Cart is empty — don't re-inject if already enhanced
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

    function openCartDrawer() {
      var drawer = findDrawer();
      if (!drawer) { window.location.href = '/checkout/cart'; return; }
      liftDrawer(drawer);
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
      cartLink.addEventListener('click', function (e) {
        // Mobile: let default navigate to /checkout/cart (drawer comes Phase 6 via different path)
        if (window.matchMedia('(max-width: 767px)').matches) return;
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
