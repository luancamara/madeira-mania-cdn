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


/* --- 3. Footer rebuild — hide Magazord footer + inject ours
   Aplica em TODAS as páginas (inclusive checkout)
   --- */
(function buildMmFooter() {
  var MM_LOGO_URL = 'https://madeiramania.cdn.magazord.com.br/resources/Design%20sem%20nome%20(1).svg';
  var WHATS = 'https://api.whatsapp.com/send?phone=5511915299488&text=' + encodeURIComponent('Olá! Vim pelo site e gostaria de ajuda.');

  var ICONS = {
    phone: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    whats: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',
    mail: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    clock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    pin: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    lock: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    shield: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    truck: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    card: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
    instagram: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    facebook: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>',
    tiktok: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.39a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.42z"/></svg>'
  };

  function buildFooterDom() {
    if (document.getElementById('mm-footer')) return;
    if (!document.body) return;

    document.body.classList.add('mm-footer-rebuild');

    var footer = document.createElement('footer');
    footer.id = 'mm-footer';
    footer.className = 'mm-footer';
    footer.setAttribute('role', 'contentinfo');

    footer.innerHTML =
      /* MAIN GRID */
      '<div class="mm-footer-main">' +
        '<div class="mm-footer-grid">' +
          /* Brand */
          '<div class="mm-footer-col mm-footer-brand">' +
            '<a class="mm-footer-logo" href="/" aria-label="Madeira Mania - voltar à home">' +
              '<img src="' + MM_LOGO_URL + '" alt="Madeira Mania" width="180" height="48">' +
            '</a>' +
            '<p class="mm-footer-tagline">Móveis com design moderno e qualidade superior pra transformar sua casa em um lar cheio de personalidade.</p>' +
            '<div class="mm-footer-social">' +
              '<a href="https://www.instagram.com/madeira.mania" target="_blank" rel="noopener" aria-label="Instagram da Madeira Mania">' + ICONS.instagram + '</a>' +
              '<a href="https://web.facebook.com/profile.php?id=61578397120844" target="_blank" rel="noopener" aria-label="Facebook da Madeira Mania">' + ICONS.facebook + '</a>' +
              '<a href="https://www.tiktok.com/@madeira.mania" target="_blank" rel="noopener" aria-label="TikTok da Madeira Mania">' + ICONS.tiktok + '</a>' +
            '</div>' +
          '</div>' +
          /* Atendimento */
          '<div class="mm-footer-col">' +
            '<h4 class="mm-footer-h">Atendimento</h4>' +
            '<ul class="mm-footer-list">' +
              '<li><a href="tel:+5511915299488">' + ICONS.phone + '<span>(11) 91529-9488</span></a></li>' +
              '<li><a href="' + WHATS + '" target="_blank" rel="noopener">' + ICONS.whats + '<span>WhatsApp</span></a></li>' +
              '<li><a href="mailto:contato@madeiramania.com.br">' + ICONS.mail + '<span>contato@madeiramania.com.br</span></a></li>' +
              '<li><span class="mm-footer-meta">' + ICONS.clock + '<span>Seg a Sex · 8h às 18h</span></span></li>' +
            '</ul>' +
          '</div>' +
          /* Compra */
          '<div class="mm-footer-col">' +
            '<h4 class="mm-footer-h">Sua compra</h4>' +
            '<ul class="mm-footer-list">' +
              '<li><a href="/como-comprar">Como comprar</a></li>' +
              '<li><a href="/politica-de-entrega">Frete e entrega</a></li>' +
              '<li><a href="/politica-de-trocas-e-devolucoes">Trocas e devoluções</a></li>' +
              '<li><a href="/compra-segura">Compra segura</a></li>' +
              '<li><a href="/avaliacoes-de-clientes">Avaliações de clientes</a></li>' +
            '</ul>' +
          '</div>' +
          /* Institucional */
          '<div class="mm-footer-col">' +
            '<h4 class="mm-footer-h">Madeira Mania</h4>' +
            '<ul class="mm-footer-list">' +
              '<li><a href="/quem-somos">Quem somos</a></li>' +
              '<li><a href="/atendimento">Central de atendimento</a></li>' +
              '<li><a href="/envio-imediato">Pronta entrega</a></li>' +
              '<li><a href="/politica-de-privacidade">Política de privacidade</a></li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
      '</div>' +

      /* TRUST STRIP */
      '<div class="mm-footer-trust">' +
        '<div class="mm-footer-trust-inner">' +
          '<div class="mm-footer-trust-item">' + ICONS.lock +
            '<div class="mm-footer-trust-text"><strong>Compra 100% segura</strong><small>Site protegido por SSL</small></div>' +
          '</div>' +
          '<div class="mm-footer-trust-item">' + ICONS.shield +
            '<div class="mm-footer-trust-text"><strong>7 dias para troca</strong><small>Direito de arrependimento</small></div>' +
          '</div>' +
          '<div class="mm-footer-trust-item">' + ICONS.truck +
            '<div class="mm-footer-trust-text"><strong>Frete grátis</strong><small>Acima de R$ 2.000</small></div>' +
          '</div>' +
          '<div class="mm-footer-trust-item">' + ICONS.card +
            '<div class="mm-footer-trust-text"><strong>12x sem juros</strong><small>Em todos os cartões</small></div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      /* BOTTOM STRIP */
      '<div class="mm-footer-bottom">' +
        '<div class="mm-footer-bottom-inner">' +
          '<p class="mm-footer-legal">' +
            '© 2026 <strong>Madeira Mania</strong> · CNPJ 60.021.382/0001-61<br>' +
            'Av. Paulista, 1636 · Bela Vista · São Paulo/SP · 01310-200' +
          '</p>' +
          '<div class="mm-footer-payments" aria-label="Formas de pagamento aceitas">' +
            '<span class="mm-pay-chip" title="PIX"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/pix.svg" alt="PIX" loading="lazy"></span>' +
            '<span class="mm-pay-chip" title="Visa"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/visa.svg" alt="Visa" loading="lazy"></span>' +
            '<span class="mm-pay-chip" title="Mastercard"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/mastercard.svg" alt="Mastercard" loading="lazy"></span>' +
            '<span class="mm-pay-chip" title="Elo"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/elo.svg" alt="Elo" loading="lazy"></span>' +
            '<span class="mm-pay-chip" title="Hipercard"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/hipercard.svg" alt="Hipercard" loading="lazy"></span>' +
            '<span class="mm-pay-chip" title="American Express"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/american2.svg" alt="American Express" loading="lazy"></span>' +
            '<span class="mm-pay-chip" title="Boleto Bancário"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/boleto.svg" alt="Boleto Bancário" loading="lazy"></span>' +
          '</div>' +
        '</div>' +
      '</div>';

    document.body.appendChild(footer);
    /* Remove anti-flicker loading class — nosso footer já renderizou */
    document.documentElement.classList.remove('mm-footer-loading');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildFooterDom);
  } else {
    buildFooterDom();
  }

  /* Re-aplicar guard se React re-renderizar e remover nosso footer */
  setTimeout(buildFooterDom, 1000);
  setTimeout(buildFooterDom, 3000);

  /* Failsafe: remove loading class após 6s mesmo se algo der errado, evita ficar sem footer pra sempre */
  setTimeout(function() {
    document.documentElement.classList.remove('mm-footer-loading');
  }, 6000);
})();
