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
      '            <a href="/sala-de-estar-9677307902" class="mm-h-mega-heading mm-h-mega-heading-link">Sala de Estar</a>',
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
      '            <a href="/sala-de-jantar-1916970475" class="mm-h-mega-heading mm-h-mega-heading-link">Sala de Jantar</a>',
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
      '            <a href="/cozinha-6327619447" class="mm-h-mega-heading mm-h-mega-heading-link">Cozinha</a>',
      '            <ul>',
      '              <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>',
      '              <li><a href="/cozinha/banquetas">Banquetas</a></li>',
      '              <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>',
      '              <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>',
      '            </ul>',
      '            <a href="/bar-e-cafe" class="mm-h-mega-heading mm-h-mega-heading-link">Bar e Café</a>',
      '            <ul>',
      '              <li><a href="/bar-e-cafe/bares">Bares</a></li>',
      '              <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',
      '            </ul>',
      '          </div>',
      '          <div class="mm-h-mega-col">',
      '            <a href="/quarto-0961844589" class="mm-h-mega-heading mm-h-mega-heading-link">Quarto</a>',
      '            <ul>',
      '              <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>',
      '              <li><a href="/quarto/comodas">Cômodas</a></li>',
      '              <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>',
      '              <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>',
      '              <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>',
      '            </ul>',
      '            <a href="/escritorio-899523853" class="mm-h-mega-heading mm-h-mega-heading-link">Escritório</a>',
      '            <ul>',
      '              <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',
      '            </ul>',
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
      '    <div class="mm-h-search-suggestions">',
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

    // Stub burger — drawer behavior ships in Phase 6; until then, opens search overlay on mobile
    var burger = document.getElementById('mm-h-burger');
    if (burger) {
      burger.addEventListener('click', function () {
        openSearch(); // temporary until Phase 6 drawer
      });
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
      }
    }
    function openCartDrawer() {
      var drawer = findDrawer();
      if (!drawer) { window.location.href = '/checkout/cart'; return; }
      liftDrawer(drawer);
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
      // Magazord renders count in multiple places — try several sources
      var count = 0;
      // 1. Check for native cart count element
      var nativeCount = document.querySelector('.header-middle .cart-count, .carrinho-ctn .count, [class*="carrinho"] [class*="qtd"], #cart-preview-area [class*="count"]');
      if (nativeCount) {
        var txt = (nativeCount.textContent || '').trim().replace(/\D/g, '');
        if (txt) count = parseInt(txt, 10) || 0;
      }
      // 2. Fallback: count cart items in the drawer
      if (count === 0) {
        var items = document.querySelectorAll('#cart-preview-area .cart-item, .carrinho-rapido-ctn .cart-item');
        count = items.length;
      }
      // 3. Fallback: data attribute on body or header (Magazord sometimes sets this)
      if (count === 0) {
        var dataCount = document.body.dataset.cartCount || document.querySelector('[data-cart-count]')?.dataset.cartCount;
        if (dataCount) count = parseInt(dataCount, 10) || 0;
      }

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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
