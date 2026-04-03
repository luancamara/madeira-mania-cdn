/* =============================================
   GLOBAL JS - Madeira Mania
   Funcionalidades para TODAS as páginas
   ============================================= */

/* --- 1. Floating WhatsApp — criar botão (posição controlada via CSS) --- */
(function createFloatingWhatsApp() {
  if (document.getElementById('mm-floating-whatsapp')) return;

  var phone = '5511915299488';
  var prodNome = (document.querySelector('#prod-nome') || {}).value;
  var currentUrl = window.location.href;

  var msg;
  if (prodNome) {
    msg = 'Olá! Tenho interesse no ' + prodNome.trim() + '. ' + currentUrl;
  } else {
    msg = 'Olá! Vim pelo site e gostaria de ajuda. ' + currentUrl;
  }

  var whatsUrl = 'https://api.whatsapp.com/send?phone=' + phone
    + '&text=' + encodeURIComponent(msg);

  var el = document.createElement('a');
  el.id = 'mm-floating-whatsapp';
  el.href = whatsUrl;
  el.target = '_blank';
  el.rel = 'noopener noreferrer';
  el.setAttribute('aria-label', 'Fale conosco pelo WhatsApp');

  /* Posição definida via CSS em global.css e produto.css — NÃO definir bottom aqui */
  el.style.cssText = [
    'position: fixed',
    'right: 14px',
    'z-index: 98',
    'display: flex',
    'align-items: center',
    'justify-content: center',
    'width: 52px',
    'height: 52px',
    'background: #4b664a',
    'border-radius: 50%',
    'box-shadow: 0 3px 12px rgba(0,0,0,0.18)',
    'text-decoration: none',
    'transition: transform 0.15s ease',
    '-webkit-tap-highlight-color: transparent'
  ].join(';');

  el.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" style="display:block;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  el.addEventListener('touchstart', function() { el.style.transform = 'scale(0.92)'; }, { passive: true });
  el.addEventListener('touchend', function() { el.style.transform = ''; }, { passive: true });

  document.body.appendChild(el);
})();

/* --- 2. Back-to-top — substituir ícone (posição controlada via CSS) --- */
(function improveBackToTop() {
  var btt = document.querySelector('.back-to-top');
  if (!btt) return;

  var icon = btt.querySelector('.icon');
  if (icon) {
    icon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';
    icon.style.cssText = 'display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:none !important;';
  }
})();
