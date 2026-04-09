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
      '</div>'
    ].join('\n');
    document.body.insertBefore(header, document.body.firstChild);

    // Stub burger handler — drawer behavior ships in Phase 6
    var burger = document.getElementById('mm-h-burger');
    if (burger) {
      burger.addEventListener('click', function () {
        console.log('mm-header: drawer pending Phase 6');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
