/* =============================================
   HEADER — Madeira Mania
   Injection of custom #mm-header shell
   Idempotent (checks guard ID before injecting)
   ============================================= */

(function(){
  if (document.getElementById('mm-header')) return;

  function init() {
    if (document.getElementById('mm-header')) return;

    var logoUrl = 'https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@v1.0/dist/assets/logo-mm.png';
    // ^^^ placeholder — Task 1.4 will replace with actual logo URL from site or local asset

    var header = document.createElement('div');
    header.id = 'mm-header';
    header.innerHTML = [
      '<div class="mm-h-topbar">',
      '  <div class="mm-h-topbar-inner">',
      '    <a href="/atendimento">Atendimento</a>',
      '    <span class="mm-h-topbar-sep">·</span>',
      '    <span>Frete grátis R$ 2.000+</span>',
      '    <span class="mm-h-topbar-sep">·</span>',
      '    <span>12x sem juros</span>',
      '  </div>',
      '</div>',
      '<div class="mm-h-main">',
      '  <div class="mm-h-main-left">',
      '    <button class="mm-h-action" id="mm-h-buscar" type="button">Buscar</button>',
      '  </div>',
      '  <a class="mm-h-logo" href="/" aria-label="Madeira Mania — início">',
      '    <img src="' + logoUrl + '" alt="Madeira Mania" width="280" height="70" />',
      '  </a>',
      '  <div class="mm-h-main-right">',
      '    <a class="mm-h-action" href="/wishlist">Favoritos</a>',
      '    <a class="mm-h-action" href="/login">Conta</a>',
      '    <a class="mm-h-action" href="/checkout/cart" id="mm-h-cart">',
      '      Carrinho<span class="mm-h-cart-badge" id="mm-h-cart-count" hidden>0</span>',
      '    </a>',
      '  </div>',
      '</div>'
    ].join('\n');
    document.body.insertBefore(header, document.body.firstChild);

    // Mobile: reduce topbar content
    if (window.matchMedia('(max-width: 767px)').matches) {
      var inner = header.querySelector('.mm-h-topbar-inner');
      inner.innerHTML = '<span>Frete grátis R$ 2.000+</span><span class="mm-h-topbar-sep">·</span><span>12x sem juros</span>';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
