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
      '    <button class="mm-h-action" id="mm-h-buscar" type="button">Buscar</button>',
      '  </div>',
      '  <a class="mm-h-logo" href="/" aria-label="Madeira Mania, ir para a página inicial">',
      '    <img src="' + logoUrl + '" alt="" width="280" height="70" loading="eager" />',
      '  </a>',
      '  <div class="mm-h-main-right">',
      '    <a class="mm-h-action" href="/wishlist">Favoritos</a>',
      '    <a class="mm-h-action" href="/login">Conta</a>',
      '    <a class="mm-h-action" href="/checkout/cart" id="mm-h-cart" aria-label="Carrinho, 0 itens" aria-live="polite">',
      '      Carrinho<span class="mm-h-cart-badge" id="mm-h-cart-count" aria-hidden="true" hidden>0</span>',
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
      '            <h3 class="mm-h-mega-heading">Social</h3>',
      '            <ul>',
      '              <li><a href="/sala-de-estar-9677307902">Sala de Estar</a></li>',
      '              <li><a href="/sala-de-jantar-1916970475">Sala de Jantar</a></li>',
      '              <li><a href="/bar-e-cafe">Bar e Café</a></li>',
      '            </ul>',
      '          </div>',
      '          <div class="mm-h-mega-col">',
      '            <h3 class="mm-h-mega-heading">Casa</h3>',
      '            <ul>',
      '              <li><a href="/cozinha-6327619447">Cozinha</a></li>',
      '              <li><a href="/quarto-0961844589">Quarto</a></li>',
      '            </ul>',
      '          </div>',
      '          <div class="mm-h-mega-col">',
      '            <h3 class="mm-h-mega-heading">Work</h3>',
      '            <ul>',
      '              <li><a href="/escritorio-899523853">Escritório</a></li>',
      '            </ul>',
      '          </div>',
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
