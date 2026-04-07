/* =============================================
   CHECKOUT CRO - Madeira Mania (rebuild v2)
   "Shadow render" strategy:
   1. Esconde DOM original da Magazord (mantém em memória como source of truth)
   2. Renderiza #mm-layout lendo .cart-item e #resumo-compra
   3. Delega mutações pro Zord API (Zord.checkout.*)
   4. Re-renderiza em $(document).ajaxComplete
   5. Observa .cart-area via MutationObserver (safety net)

   CEP: sincroniza com localStorage.mm_cep (mesma chave do produto.js)
   pra auto-calcular frete cross-page.
   ============================================= */

(function initCheckoutCRO() {
  'use strict';

  var CEP_KEY = 'mm_cep';
  var CART_SNAPSHOT_KEY = 'mm_cart_snapshot';
  var CART_SNAPSHOT_TTL_MS = 30 * 60 * 1000; /* 30 min */
  var FRETE_GRATIS_THRESHOLD = 2000;
  var MM_LOGO_URL = 'https://madeiramania.cdn.magazord.com.br/resources/Design%20sem%20nome%20(1).svg';
  var MM_WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5511915299488&text=' + encodeURIComponent('Olá! Estou no checkout e gostaria de tirar uma dúvida sobre meu pedido.');

  var path = location.pathname;
  var isCart = path.indexOf('/checkout/cart') !== -1;
  var isIdentify = path.indexOf('/checkout/identify') !== -1;
  var isOnepage = path.indexOf('/checkout/onepage') !== -1;
  var isPayment = path.indexOf('/checkout/payment') !== -1;

  if (!isCart && !isIdentify && !isOnepage && !isPayment) return;

  /* Retry até Magazord montar o DOM do checkout */
  initCheckoutCRO._retries = (initCheckoutCRO._retries || 0) + 1;
  var mainArea = document.querySelector('#checkout-main-area');
  if (!mainArea) {
    if (initCheckoutCRO._retries < 40) setTimeout(initCheckoutCRO, 400);
    return;
  }


  /* =============================================
     HELPERS — parsing, formatting, icons
     ============================================= */

  function formatBRL(n) {
    if (isNaN(n) || n < 0) return 'R$ 0,00';
    return 'R$ ' + n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+,)/g, '$1.');
  }

  function parseBRL(text) {
    if (!text) return 0;
    var m = String(text).match(/(-?[\d.]+,\d{2})/);
    if (!m) return 0;
    return parseFloat(m[1].replace(/\./g, '').replace(',', '.')) || 0;
  }

  function escapeHTML(s) {
    return String(s || '').replace(/[&<>"']/g, function(c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* Lucide-style icons (stroke 2) */
  var ICON = {
    truck: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    checkCircle: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    bolt: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    shield: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    lock: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    card: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
    rotate: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',
    minus: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    plus: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M3 7h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    trash: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
    close: '<svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5l-7 7M3.5 3.5l7 7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    arrow: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    tag: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
    whats: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',
    box: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>'
  };

  var STORAGE = {
    get: function(k) { try { return localStorage.getItem(k); } catch(e) { return null; } },
    set: function(k, v) { try { localStorage.setItem(k, v); } catch(e) {} },
    remove: function(k) { try { localStorage.removeItem(k); } catch(e) {} }
  };

  /* Cart snapshot helpers — usados pra alimentar o resumo lateral em outras
     páginas do checkout (identify/onepage) sem ter o cart no DOM. */
  function saveCartSnapshot(state) {
    try {
      var snap = {
        ts: Date.now(),
        items: state.items.map(function(it) {
          return {
            name: it.name,
            variant: it.variant,
            imgSrc: it.imgSrc,
            quantity: it.quantity,
            lineTotal: it.lineTotal,
            lineTotalPix: it.lineTotalPix,
            isPix: it.isPix,
            deposito: it.deposito
          };
        }),
        subtotalPix: state.subtotalPix,
        subtotalFull: state.subtotalFull,
        discount: state.discount,
        couponCode: state.couponCode,
        shipping: state.shipping,
        shippingDeadline: state.shippingDeadline,
        cepValue: state.cepValue
      };
      STORAGE.set(CART_SNAPSHOT_KEY, JSON.stringify(snap));
    } catch (e) {}
  }
  function loadCartSnapshot() {
    try {
      var raw = STORAGE.get(CART_SNAPSHOT_KEY);
      if (!raw) return null;
      var snap = JSON.parse(raw);
      if (!snap || !snap.ts) return null;
      if (Date.now() - snap.ts > CART_SNAPSHOT_TTL_MS) return null;
      return snap;
    } catch (e) { return null; }
  }


  /* =============================================
     READ — extrai estado da DOM Magazord
     ============================================= */

  function readCart() {
    var state = {
      items: [],
      subtotalPix: 0,      /* valor em PIX (já descontado) */
      subtotalFull: 0,     /* soma de data-valor (preço cheio) */
      discount: 0,         /* desconto do cupom */
      shipping: null,      /* null = não calculado, 0 = grátis, > 0 = valor */
      shippingRaw: '',     /* texto original do frete-calculado */
      shippingDeadline: '',/* prazo em dias */
      couponCode: '',      /* se aplicado */
      cepValue: '',        /* valor atual do #cep */
      canFinalize: false,  /* true se tem itens */
      hasFinalizar: false  /* true se #finalizar-compra existe */
    };

    /* Items */
    var itemEls = mainArea.querySelectorAll('.cart-item');
    for (var i = 0; i < itemEls.length; i++) {
      var el = itemEls[i];
      var qtyInput = el.querySelector('.qtd-item[id^="item_carrinho_"]');
      var match = qtyInput && qtyInput.id.match(/item_carrinho_(\d+)/);
      var dataId = match ? parseInt(match[1], 10) : null;
      var img = el.querySelector('figure img') || el.querySelector('#product-img') || el.querySelector('img');
      var link = el.querySelector('.nome-produto .link') || el.querySelector('figure a');
      var valorEl = el.querySelector('.column-valor-produto .valor');
      var valorDisplayText = valorEl ? valorEl.textContent.trim() : '';
      var isPix = !!el.querySelector('.column-valor-produto .sub'); /* ".sub" = "no PIX" */

      state.items.push({
        dataId: dataId,
        sku: el.getAttribute('data-item-id') || '',
        name: el.getAttribute('data-item-name') || el.getAttribute('data-name') || '',
        variant: el.getAttribute('data-item-variant') || '',
        brand: el.getAttribute('data-item-brand') || '',
        category: el.getAttribute('data-item-category') || '',
        priceUnit: parseFloat(el.getAttribute('data-item-price') || '0'),
        lineTotal: parseFloat(el.getAttribute('data-valor') || '0'), /* preço cheio linha */
        quantity: parseInt(el.getAttribute('data-item-quantity') || '1', 10),
        deposito: el.getAttribute('data-item-deposito') === '1',
        imgSrc: img ? (img.getAttribute('src') || img.currentSrc) : '',
        href: link ? link.getAttribute('href') : '',
        lineTotalPix: parseBRL(valorDisplayText),
        isPix: isPix
      });

      state.subtotalFull += parseFloat(el.getAttribute('data-valor') || '0');
    }

    /* Subtotal PIX — vem direto do Magazord no .resumo-valores .value (já descontado) */
    var resumoValueEl = mainArea.querySelector('#resumo-compra .resumo-valores .value');
    if (resumoValueEl) {
      state.subtotalPix = parseBRL(resumoValueEl.textContent);
    }
    if (state.subtotalPix <= 0) {
      /* Fallback: soma os lineTotalPix dos items */
      state.subtotalPix = state.items.reduce(function(acc, i) { return acc + (i.lineTotalPix || 0); }, 0);
    }

    /* Discount */
    var discountEl = mainArea.querySelector('#resumo-compra .discount-value');
    if (discountEl) state.discount = parseBRL(discountEl.textContent);

    var couponEl = mainArea.querySelector('#resumo-compra .txt-cupom, #resumo-compra .alert.alert-type-1');
    if (couponEl) {
      var m = couponEl.textContent.match(/([A-Z0-9]{3,})/);
      if (m) state.couponCode = m[1];
    }

    /* Shipping */
    var freteEl = mainArea.querySelector('#resumo-compra .frete-calculado');
    if (freteEl && freteEl.textContent.trim()) {
      state.shippingRaw = freteEl.textContent.trim();
      if (/gr[aá]tis/i.test(state.shippingRaw)) {
        state.shipping = 0;
      } else {
        var parsed = parseBRL(state.shippingRaw);
        if (parsed > 0) state.shipping = parsed;
      }
      var deadlineMatch = state.shippingRaw.match(/(\d+)\s*dias?/i);
      if (deadlineMatch) state.shippingDeadline = deadlineMatch[1] + ' dias úteis';
    }

    /* CEP input */
    var cepInput = mainArea.querySelector('#cep, .input-cep');
    if (cepInput) state.cepValue = cepInput.value || '';

    /* Finalize state */
    state.hasFinalizar = !!mainArea.querySelector('#finalizar-compra');
    state.canFinalize = state.items.length > 0;

    return state;
  }


  /* =============================================
     RENDER — componentes
     ============================================= */

  /* Shipping nudge: SÓ aparece enquanto falta valor pra frete grátis.
     Quando atingido, a linha "Frete: Grátis" no resumo já comunica. */
  function renderShippingNudge(state) {
    var subtotal = state.subtotalFull > 0 ? state.subtotalFull : state.subtotalPix;
    if (subtotal <= 0) return '';
    if (subtotal >= FRETE_GRATIS_THRESHOLD) return '';
    if (state.shipping === 0) return '';

    var falta = Math.max(0, FRETE_GRATIS_THRESHOLD - subtotal);
    var pct = Math.min((subtotal / FRETE_GRATIS_THRESHOLD) * 100, 100);
    return (
      '<div class="mm-nudge">' +
        '<div class="mm-nudge-head">' +
          ICON.truck +
          '<span>Adicione mais <strong>' + formatBRL(falta) + '</strong> e ganhe frete grátis</span>' +
        '</div>' +
        '<div class="mm-nudge-track"><div class="mm-nudge-fill" style="width:' + pct + '%"></div></div>' +
      '</div>'
    );
  }

  /* Custom checkout header — substitui o header-checkout da Magazord
     ui-ux-pro-max applied: visual hierarchy via size > color, premium spacing,
     clear progress indicator, big readable trust signal.
     currentStep: 'cart' | 'delivery' | 'payment' (default 'cart')
     Note: 'delivery' cobre /checkout/identify E /checkout/onepage —
     ambas marcam "Entrega" como ativo (continuidade visual entre telas) */
  function renderCheckoutHeader(currentStep) {
    currentStep = currentStep || 'cart';
    var lockBig = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';

    function step(key, label) {
      var isActive = key === currentStep;
      var cls = 'mm-checkout-step' + (isActive ? ' is-active' : '');
      var ariaCurrent = isActive ? ' aria-current="step"' : '';
      return '<li class="' + cls + '"' + ariaCurrent + '>' +
               '<span class="mm-checkout-step-label">' + label + '</span>' +
             '</li>';
    }

    return (
      '<header class="mm-checkout-header">' +
        '<a class="mm-checkout-header-logo" href="/" aria-label="Madeira Mania - voltar à home">' +
          '<img src="' + MM_LOGO_URL + '" alt="Madeira Mania" width="180" height="44">' +
        '</a>' +
        '<nav class="mm-checkout-steps" aria-label="Etapas do checkout">' +
          '<ol>' +
            step('cart', 'Carrinho') +
            '<li class="mm-checkout-step-sep" aria-hidden="true">›</li>' +
            step('delivery', 'Entrega') +
            '<li class="mm-checkout-step-sep" aria-hidden="true">›</li>' +
            step('payment', 'Pagamento') +
          '</ol>' +
        '</nav>' +
        '<div class="mm-checkout-secure">' +
          lockBig +
          '<span class="mm-checkout-secure-text">' +
            '<strong>Compra 100% segura</strong>' +
            '<small>Site protegido por SSL</small>' +
          '</span>' +
        '</div>' +
      '</header>'
    );
  }

  function renderItem(item) {
    var imgHTML = item.imgSrc
      ? '<img src="' + escapeHTML(item.imgSrc) + '" alt="' + escapeHTML(item.name) + '" loading="lazy">'
      : '';
    var nameHTML = item.href
      ? '<a class="mm-item-name" href="' + escapeHTML(item.href) + '">' + escapeHTML(item.name) + '</a>'
      : '<span class="mm-item-name">' + escapeHTML(item.name) + '</span>';
    var variantHTML = item.variant
      ? '<p class="mm-item-variant">' + escapeHTML(item.variant) + '</p>'
      : '';
    var badgeHTML = item.deposito
      ? '<span class="mm-item-badge">' + ICON.bolt + '<span>Pronta entrega · Envio em 24h</span></span>'
      : '';
    var minDisabled = item.quantity <= 1 ? ' disabled aria-disabled="true"' : '';

    var priceBlock;
    if (item.lineTotalPix > 0 && item.isPix) {
      var priceSub = '<span class="mm-item-price-sub">no PIX</span>';
      var unitStr = item.quantity > 1 ? formatBRL(item.lineTotalPix / item.quantity) + ' cada' : '';
      priceBlock =
        '<div class="mm-item-price">' +
          '<span class="mm-item-price-value">' + formatBRL(item.lineTotalPix) + '</span>' +
          priceSub +
          (unitStr ? '<span class="mm-item-price-unit">' + unitStr + '</span>' : '') +
        '</div>';
    } else {
      var unitStr2 = item.quantity > 1 ? formatBRL(item.priceUnit) + ' cada' : '';
      priceBlock =
        '<div class="mm-item-price">' +
          '<span class="mm-item-price-value">' + formatBRL(item.lineTotal) + '</span>' +
          (unitStr2 ? '<span class="mm-item-price-unit">' + unitStr2 + '</span>' : '') +
        '</div>';
    }

    return (
      '<div class="mm-item" data-mm-id="' + item.dataId + '">' +
        '<div class="mm-item-thumb">' + imgHTML + '</div>' +
        '<div class="mm-item-body">' +
          nameHTML +
          variantHTML +
          badgeHTML +
        '</div>' +
        priceBlock +
        '<div class="mm-item-controls">' +
          '<div class="mm-qty" role="group" aria-label="Quantidade">' +
            '<button type="button" class="mm-qty-btn" data-mm-act="dec"' + minDisabled + ' aria-label="Diminuir quantidade">' + ICON.minus + '</button>' +
            '<span class="mm-qty-value">' + item.quantity + '</span>' +
            '<button type="button" class="mm-qty-btn" data-mm-act="inc" aria-label="Aumentar quantidade">' + ICON.plus + '</button>' +
          '</div>' +
          '<button type="button" class="mm-item-remove" data-mm-act="remove" aria-label="Remover item" title="Remover">' +
            ICON.trash +
          '</button>' +
        '</div>' +
      '</div>'
    );
  }

  function renderItemsList(state) {
    if (!state.items.length) {
      return (
        '<div class="mm-empty">' +
          '<div class="mm-empty-icon">' + ICON.box + '</div>' +
          '<h3 class="mm-empty-title">Seu carrinho está vazio</h3>' +
          '<p class="mm-empty-desc">Explore nossos móveis e encontre a peça certa para sua casa.</p>' +
          '<a class="mm-empty-cta" href="/">Explorar produtos ' + ICON.arrow + '</a>' +
          '<p class="mm-empty-perks">Frete grátis acima de R$ 2.000 · 12x sem juros · 7% off no PIX</p>' +
        '</div>'
      );
    }
    return state.items.map(renderItem).join('');
  }

  function renderSkeletonItems(n) {
    var out = '';
    for (var i = 0; i < n; i++) {
      out +=
        '<div class="mm-skel-item">' +
          '<div class="mm-skel mm-skel-thumb"></div>' +
          '<div class="mm-skel-lines">' +
            '<div class="mm-skel mm-skel-line w-3-4"></div>' +
            '<div class="mm-skel mm-skel-line w-1-2"></div>' +
            '<div class="mm-skel mm-skel-line w-1-3"></div>' +
          '</div>' +
          '<div class="mm-skel-lines">' +
            '<div class="mm-skel mm-skel-line w-1-2"></div>' +
          '</div>' +
        '</div>';
    }
    return out;
  }

  function renderSummaryDynamic(state) {
    var subtotalFull = state.subtotalFull > 0 ? state.subtotalFull : state.subtotalPix;

    /* Rows: Subtotal, Frete (se calculado), Desconto */
    var rows =
      '<div class="mm-row">' +
        '<span class="mm-row-label">Subtotal</span>' +
        '<span class="mm-row-value">' + formatBRL(subtotalFull) + '</span>' +
      '</div>';

    if (state.shipping !== null) {
      var freteValue;
      if (state.shipping === 0) {
        freteValue = '<span class="mm-row-value is-free">' + ICON.check + ' Grátis</span>';
      } else {
        freteValue = '<span class="mm-row-value">' + formatBRL(state.shipping) + '</span>';
      }
      rows +=
        '<div class="mm-row">' +
          '<span class="mm-row-label">Frete' +
            (state.shippingDeadline ? ' <span class="mm-row-sub">· ' + escapeHTML(state.shippingDeadline) + '</span>' : '') +
          '</span>' +
          freteValue +
        '</div>';
    }

    if (state.discount > 0) {
      rows +=
        '<div class="mm-row">' +
          '<span class="mm-row-label">Desconto</span>' +
          '<span class="mm-row-value is-discount">− ' + formatBRL(state.discount) + '</span>' +
        '</div>';
    }

    /* Total block */
    var totalBlock = '';
    if (state.shipping !== null) {
      var totalFull = Math.max(0, subtotalFull + state.shipping - state.discount);
      var totalPix = Math.max(0, state.subtotalPix + state.shipping - state.discount);
      var save = totalFull - totalPix;
      var parcela = totalFull / 12;
      totalBlock =
        '<div class="mm-total">' +
          '<div class="mm-total-label">Total</div>' +
          '<div class="mm-total-value">' + formatBRL(totalFull) + '</div>' +
          '<div class="mm-total-pix">' +
            '<span>' + formatBRL(totalPix) + ' à vista no PIX</span>' +
            (save > 0 ? '<span class="mm-total-pix-save">economia de ' + formatBRL(save) + '</span>' : '') +
          '</div>' +
          '<div class="mm-total-parcela">ou 12x de ' + formatBRL(parcela) + ' sem juros no cartão</div>' +
        '</div>';
    } else {
      totalBlock =
        '<div class="mm-total">' +
          '<div class="mm-total-label">Subtotal</div>' +
          '<div class="mm-total-value">' + formatBRL(state.subtotalPix) + '</div>' +
          '<div class="mm-total-pix"><span>à vista no PIX</span></div>' +
          '<div class="mm-total-pending">Informe seu CEP para ver o frete e o total final.</div>' +
        '</div>';
    }

    /* Coupon block */
    var couponBlock;
    if (state.couponCode) {
      couponBlock =
        '<div class="mm-coupon-applied">' +
          '<span class="mm-coupon-applied-left">' + ICON.tag + '<span>' + escapeHTML(state.couponCode) + '</span></span>' +
          '<button type="button" data-mm-act="coupon-remove" aria-label="Remover cupom">' + ICON.close + '</button>' +
        '</div>';
    } else {
      couponBlock =
        '<div class="mm-coupon">' +
          '<button type="button" class="mm-coupon-toggle" data-mm-act="coupon-toggle">' +
            ICON.tag + '<span>Tenho um cupom</span>' +
          '</button>' +
          '<form class="mm-coupon-form" data-mm-act="coupon-submit">' +
            '<input type="text" class="mm-input" name="mm-coupon-code" placeholder="CUPOM" autocomplete="off" autocapitalize="characters" spellcheck="false" />' +
            '<button type="submit" class="mm-btn-secondary">Aplicar</button>' +
          '</form>' +
        '</div>';
    }

    return (
      '<div class="mm-sum-stack">' +
        '<div class="mm-rows">' + rows + '</div>' +
        couponBlock +
        totalBlock +
      '</div>'
    );
  }


  /* =============================================
     LAYOUT — cria estrutura permanente do mm-layout
     ============================================= */

  function buildLayout() {
    if (document.getElementById('mm-layout')) return document.getElementById('mm-layout');

    var layout = document.createElement('div');
    layout.id = 'mm-layout';

    /* Use o .container ou o próprio mainArea */
    var container = mainArea.querySelector('.container') || mainArea;

    layout.innerHTML =
      renderCheckoutHeader('cart') +
      '<div class="mm-grid">' +
        '<section class="mm-items">' +
          '<h2 class="mm-h">Carrinho</h2>' +
          '<div class="mm-items-card">' +
            '<div id="mm-item-list">' + renderSkeletonItems(2) + '</div>' +
          '</div>' +
        '</section>' +
        '<aside class="mm-sum">' +
          '<h2 class="mm-h">Resumo</h2>' +
          '<div class="mm-sum-card">' +
            /* Shipping nudge slot — só renderiza se faltar valor */
            '<div id="mm-nudge-slot"></div>' +
            /* CEP card */
            '<div class="mm-cep">' +
              '<div class="mm-cep-label">' +
                '<span class="mm-cep-label-text">Calcular frete</span>' +
                '<a class="mm-cep-label-link" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a>' +
              '</div>' +
              '<div class="mm-cep-row">' +
                '<input type="text" class="mm-input" id="mm-cep-input" inputmode="numeric" maxlength="9" placeholder="00000-000" autocomplete="postal-code" />' +
                '<button type="button" class="mm-btn-secondary" data-mm-act="calc-cep">Calcular</button>' +
              '</div>' +
            '</div>' +
            /* Dynamic summary (rows + total + coupon) */
            '<div id="mm-sum-dynamic"></div>' +
            /* CTA */
            '<button type="button" class="mm-cta" data-mm-act="finalizar">' +
              'Finalizar compra' + ICON.arrow +
            '</button>' +
            /* Trust */
            '<div class="mm-trust">' +
              '<span class="mm-trust-item">' + ICON.lock + '<span>Pagamento seguro</span></span>' +
              '<span class="mm-trust-item">' + ICON.rotate + '<span>7 dias para troca</span></span>' +
              '<span class="mm-trust-item">' + ICON.card + '<span>12x sem juros</span></span>' +
            '</div>' +
            /* Help (objection breaker) */
            '<a class="mm-help" href="' + MM_WHATSAPP_URL + '" target="_blank" rel="noopener" data-mm-track="help-whats">' +
              ICON.whats +
              '<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span>' +
            '</a>' +
          '</div>' +
        '</aside>' +
      '</div>';

    container.insertBefore(layout, container.firstChild);
    mainArea.classList.add('mm-shadow-mode');
    document.body.classList.add('mm-checkout-rebuild');
    /* Remove anti-flicker loading class — nosso layout já renderizou */
    document.documentElement.classList.remove('mm-cart-loading');
    return layout;
  }


  /* =============================================
     HYDRATE — lê estado e injeta no layout
     ============================================= */

  function hydrate() {
    var state = readCart();
    var itemList = document.getElementById('mm-item-list');
    if (itemList) itemList.innerHTML = renderItemsList(state);

    var dyn = document.getElementById('mm-sum-dynamic');
    if (dyn) dyn.innerHTML = renderSummaryDynamic(state);

    var nudgeSlot = document.getElementById('mm-nudge-slot');
    if (nudgeSlot) nudgeSlot.innerHTML = renderShippingNudge(state);

    /* CTA disabled se vazio */
    var cta = document.querySelector('.mm-cta');
    if (cta) {
      cta.disabled = !state.canFinalize;
      cta.style.opacity = state.canFinalize ? '1' : '0.5';
      cta.style.pointerEvents = state.canFinalize ? 'auto' : 'none';
    }

    /* Sync CEP input da nossa UI com o valor atual */
    var cepUIInput = document.getElementById('mm-cep-input');
    if (cepUIInput && !cepUIInput.matches(':focus')) {
      var saved = STORAGE.get(CEP_KEY);
      var currentVal = state.cepValue || (saved || '');
      if (currentVal) {
        cepUIInput.value = formatCep(currentVal);
      }
    }

    /* Salva snapshot pra outras telas do checkout (identify/onepage)
       só persiste quando há itens — evita sobrescrever com cart vazio */
    if (state.items && state.items.length > 0) {
      saveCartSnapshot(state);
    }

    return state;
  }


  /* =============================================
     CEP helpers
     ============================================= */

  function formatCep(raw) {
    var digits = String(raw || '').replace(/\D/g, '').slice(0, 8);
    if (digits.length <= 5) return digits;
    return digits.slice(0, 5) + '-' + digits.slice(5);
  }

  function saveCep(raw) {
    var digits = String(raw || '').replace(/\D/g, '');
    if (digits.length === 8) STORAGE.set(CEP_KEY, digits);
  }

  /* Auto-preenche e dispara cálculo de frete se houver CEP salvo.
     Retry pattern: o input #cep pode ser injetado pelo Magazord depois.
     Também pula se o frete já está calculado (state.shipping !== null). */
  function autoCalcCep(attempt) {
    attempt = attempt || 0;
    var saved = STORAGE.get(CEP_KEY);
    if (!saved || saved.length !== 8) return;

    var hiddenCep = mainArea.querySelector('#cep, .input-cep');
    if (!hiddenCep) {
      if (attempt < 12) setTimeout(function() { autoCalcCep(attempt + 1); }, 350);
      return;
    }

    /* Se o frete já está calculado, atualiza UI sem disparar de novo */
    var freteEl = mainArea.querySelector('#resumo-compra .frete-calculado');
    if (freteEl && freteEl.textContent.trim()) {
      var ourCepInput = document.getElementById('mm-cep-input');
      if (ourCepInput && !ourCepInput.value) ourCepInput.value = formatCep(saved);
      return;
    }

    /* Sincroniza UI nossa primeiro */
    var ourInput = document.getElementById('mm-cep-input');
    if (ourInput && !ourInput.value) ourInput.value = formatCep(saved);

    hiddenCep.value = formatCep(saved);
    triggerInputEvent(hiddenCep);

    /* Dispara o cálculo pela API Magazord */
    setTimeout(function() {
      triggerCepCalc();
    }, 200);
  }

  function triggerInputEvent(el) {
    try {
      var nativeSet = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      nativeSet.call(el, el.value);
    } catch(e) {}
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function triggerCepCalc() {
    /* Prefer Zord.Cart.calculaFreteCarrinho, fallback pro botão OK nativo */
    try {
      if (window.Zord && window.Zord.Cart && typeof window.Zord.Cart.calculaFreteCarrinho === 'function') {
        window.Zord.Cart.calculaFreteCarrinho();
        return;
      }
    } catch(e) {}
    var okBtn = mainArea.querySelector('#resumo-compra .calcula-frete > button, .area-frete button');
    if (okBtn) okBtn.click();
  }


  /* =============================================
     EVENT DELEGATION
     ============================================= */

  function bindEvents() {
    var layout = document.getElementById('mm-layout');
    if (!layout || layout._mmBound) return;
    layout._mmBound = true;

    layout.addEventListener('click', function(e) {
      var actEl = e.target.closest('[data-mm-act]');
      if (!actEl) return;
      var act = actEl.getAttribute('data-mm-act');
      var itemEl = actEl.closest('.mm-item');
      var dataId = itemEl ? parseInt(itemEl.getAttribute('data-mm-id'), 10) : null;

      switch (act) {
        case 'inc':
          handleQtyChange(dataId, itemEl, 'inc');
          break;
        case 'dec':
          handleQtyChange(dataId, itemEl, 'dec');
          break;
        case 'remove':
          handleRemove(dataId, itemEl);
          break;
        case 'calc-cep':
          handleCalcCep();
          break;
        case 'coupon-toggle':
          var wrap = actEl.closest('.mm-coupon');
          if (wrap) {
            wrap.classList.add('is-open');
            var inp = wrap.querySelector('input');
            if (inp) setTimeout(function() { inp.focus(); }, 100);
          }
          break;
        case 'coupon-remove':
          handleCouponRemove();
          break;
        case 'finalizar':
          handleFinalizar();
          break;
      }
    });

    /* Submit do formulário de cupom (Enter key) */
    layout.addEventListener('submit', function(e) {
      var form = e.target.closest('[data-mm-act="coupon-submit"]');
      if (!form) return;
      e.preventDefault();
      var input = form.querySelector('input');
      if (!input) return;
      handleCouponApply(input.value.trim());
    });

    /* Máscara + Enter no input CEP */
    layout.addEventListener('input', function(e) {
      if (e.target && e.target.id === 'mm-cep-input') {
        e.target.value = formatCep(e.target.value);
      }
    });
    layout.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && e.target && e.target.id === 'mm-cep-input') {
        e.preventDefault();
        handleCalcCep();
      }
    });
  }


  /* =============================================
     HANDLERS — chamam Zord API
     ============================================= */

  function handleQtyChange(dataId, itemEl, direction) {
    if (!dataId || !itemEl) return;
    if (!window.Zord || !window.Zord.checkout) return;
    itemEl.classList.add('is-updating');
    try {
      if (direction === 'inc') {
        window.Zord.checkout.adicionaQuantidade(dataId);
      } else {
        window.Zord.checkout.removeQuantidade(dataId);
      }
    } catch (e) {
      console.warn('[mm-cart] qty change failed', e);
      itemEl.classList.remove('is-updating');
    }
  }

  function handleRemove(dataId, itemEl) {
    if (!dataId || !itemEl) return;
    if (!window.Zord || !window.Zord.checkout) return;
    itemEl.classList.add('is-updating');
    /* Fade out visual antes da AJAX responder */
    itemEl.style.transition = 'opacity 200ms, transform 200ms';
    itemEl.style.opacity = '0';
    itemEl.style.transform = 'translateX(-12px)';
    try {
      /* removeQuantidade auto-deleta quando qty == 1 */
      if (typeof window.Zord.checkout.deleteItem === 'function') {
        window.Zord.checkout.deleteItem(dataId);
      } else {
        window.Zord.checkout.removeQuantidade(dataId);
      }
    } catch (e) {
      console.warn('[mm-cart] remove failed', e);
      itemEl.classList.remove('is-updating');
      itemEl.style.opacity = '1';
      itemEl.style.transform = '';
    }
  }

  function handleCalcCep() {
    var input = document.getElementById('mm-cep-input');
    if (!input) return;
    var digits = (input.value || '').replace(/\D/g, '');
    if (digits.length !== 8) {
      input.focus();
      input.classList.add('mm-input-error');
      setTimeout(function() { input.classList.remove('mm-input-error'); }, 1200);
      return;
    }
    saveCep(digits);
    /* Aplica no input hidden Magazord */
    var hidden = mainArea.querySelector('#cep, .input-cep');
    if (hidden) {
      hidden.value = formatCep(digits);
      triggerInputEvent(hidden);
    }
    triggerCepCalc();
  }

  function handleCouponApply(code) {
    if (!code) return;
    if (!window.Zord || !window.Zord.checkout) return;
    var hidden = mainArea.querySelector('#cupom-desconto');
    if (hidden) {
      hidden.value = code.toUpperCase();
      triggerInputEvent(hidden);
    }
    try {
      window.Zord.checkout.addCupomDesconto();
    } catch (e) {
      console.warn('[mm-cart] coupon apply failed', e);
    }
  }

  function handleCouponRemove() {
    if (!window.Zord || !window.Zord.checkout) return;
    try {
      window.Zord.checkout.removeCupomDesconto();
    } catch (e) {
      console.warn('[mm-cart] coupon remove failed', e);
    }
  }

  function handleFinalizar() {
    /* Salva snapshot SYNC antes de navegar — garante que identify
       sempre tem dados frescos do cart, mesmo se hydrate async não rolou */
    try {
      var s = readCart();
      if (s.items && s.items.length > 0) {
        saveCartSnapshot(s);
      }
    } catch (e) {}

    var btn = document.getElementById('finalizar-compra');
    if (btn) {
      btn.click();
      return;
    }
    /* Fallback: navegar direto */
    location.href = '/checkout/identify';
  }


  /* =============================================
     CART MAIN ENTRY
     ============================================= */

  if (isCart) {
    if (!document.getElementById('mm-checkout-cro-done')) {
      var marker = document.createElement('div');
      marker.id = 'mm-checkout-cro-done';
      marker.style.display = 'none';
      document.body.appendChild(marker);
    }

    /* Aguarda o DOM Magazord renderizar itens (ou empty) */
    function waitForCartDom(attempt) {
      attempt = attempt || 0;
      if (attempt > 30) { mountCart(); return; }
      var hasItems = mainArea.querySelectorAll('.cart-item').length > 0;
      var hasResumo = mainArea.querySelector('#resumo-compra');
      if (hasItems || hasResumo || attempt > 8) {
        mountCart();
      } else {
        setTimeout(function() { waitForCartDom(attempt + 1); }, 250);
      }
    }

    function mountCart() {
      buildLayout();
      bindEvents();
      hydrate();

      /* Auto-calcula frete se tiver CEP salvo */
      autoCalcCep();

      /* Re-hydrate em cada AJAX do cart */
      if (typeof jQuery !== 'undefined') {
        jQuery(document).ajaxComplete(function(e, xhr, settings) {
          if (!settings || !settings.url) return;
          var url = settings.url;
          if (
            url.indexOf('checkout/cart') !== -1 ||
            url.indexOf('atualiza') !== -1 ||
            url.indexOf('cupom') !== -1 ||
            url.indexOf('frete') !== -1 ||
            url.indexOf('removeItem') !== -1 ||
            url.indexOf('adicionaItem') !== -1
          ) {
            /* Pequeno delay pro Magazord terminar de mexer no DOM */
            setTimeout(hydrate, 120);
            setTimeout(function() {
              var s = readCart();
              /* Salva CEP automaticamente quando o frete é calculado com sucesso */
              if (s.shipping !== null && s.cepValue) {
                saveCep(s.cepValue);
              }
            }, 200);
          }
        });
      }

      /* MutationObserver safety net — re-render se Magazord mexer no cart-area */
      try {
        var observer = new MutationObserver(function(muts) {
          /* Debounce */
          if (mountCart._mutTimer) clearTimeout(mountCart._mutTimer);
          mountCart._mutTimer = setTimeout(hydrate, 200);
        });
        var watchNodes = [
          mainArea.querySelector('#cart-area'),
          mainArea.querySelector('.cart-area'),
          mainArea.querySelector('#resumo-compra')
        ].filter(Boolean);
        watchNodes.forEach(function(n) {
          observer.observe(n, { childList: true, subtree: true, characterData: true });
        });
      } catch (e) {}
    }

    waitForCartDom();
  }


  /* =============================================
     IDENTIFY — shadow-render strategy
     1. Esconde forms Magazord (.page.page-login) via mm-shadow-mode
     2. Renderiza #mm-layout com header + 2-col grid (form + summary)
     3. Re-parenta .social-login-area (Google iframe) pro nosso slot
     4. On submit: copia value pro #login Magazord, dispara click no btn nativo
     5. Guest CTA expande inline o form do #full-anonymous-buy-form-etapa-01
     ============================================= */

  /* ----- render do summary lateral (lê do snapshot) ----- */
  function renderIdentifySummary(snap) {
    if (!snap || !snap.items || !snap.items.length) {
      return (
        '<aside class="mm-id-sum mm-sum">' +
          '<h2 class="mm-h">Resumo</h2>' +
          '<div class="mm-sum-card">' +
            '<div class="mm-sum-empty">' +
              '<p>Não conseguimos carregar o resumo do seu pedido.</p>' +
              '<a class="mm-btn-secondary" href="/checkout/cart">Voltar ao carrinho</a>' +
            '</div>' +
          '</div>' +
        '</aside>'
      );
    }

    /* thumbs (até 3) */
    var maxThumbs = 3;
    var displayItems = snap.items.slice(0, maxThumbs);
    var extraCount = snap.items.length - maxThumbs;
    var thumbsHTML = displayItems.map(function(it) {
      var img = it.imgSrc
        ? '<img src="' + escapeHTML(it.imgSrc) + '" alt="' + escapeHTML(it.name) + '" loading="lazy">'
        : '<div class="mm-id-thumb-placeholder">' + ICON.box + '</div>';
      /* Qty inline prefix (não badge sobre a imagem):
         padrão Apple/Stripe/Mercado Livre, mais discoverable + acessível.
         Só renderiza quando qty > 1 — qty 1 não precisa de "1×" noise. */
      var qtyPrefix = it.quantity > 1
        ? '<strong class="mm-id-thumb-qty">' + it.quantity + '×</strong> '
        : '';
      var price = it.lineTotalPix > 0 ? it.lineTotalPix : it.lineTotal;
      return (
        '<div class="mm-id-thumb">' +
          '<div class="mm-id-thumb-img">' + img + '</div>' +
          '<div class="mm-id-thumb-body">' +
            '<p class="mm-id-thumb-name">' + qtyPrefix + escapeHTML(it.name) + '</p>' +
            (it.variant ? '<p class="mm-id-thumb-variant">' + escapeHTML(it.variant) + '</p>' : '') +
          '</div>' +
          '<div class="mm-id-thumb-price">' + formatBRL(price) + '</div>' +
        '</div>'
      );
    }).join('');
    if (extraCount > 0) {
      thumbsHTML +=
        '<div class="mm-id-thumb-more">' +
          '+ ' + extraCount + ' ' + (extraCount === 1 ? 'item' : 'itens') + ' a mais' +
        '</div>';
    }

    /* totals */
    var subtotalFull = snap.subtotalFull > 0 ? snap.subtotalFull : snap.subtotalPix;
    var rows =
      '<div class="mm-row">' +
        '<span class="mm-row-label">Subtotal</span>' +
        '<span class="mm-row-value">' + formatBRL(subtotalFull) + '</span>' +
      '</div>';
    if (snap.shipping !== null && snap.shipping !== undefined) {
      var freteValue;
      if (snap.shipping === 0) {
        freteValue = '<span class="mm-row-value is-free">' + ICON.check + ' Grátis</span>';
      } else {
        freteValue = '<span class="mm-row-value">' + formatBRL(snap.shipping) + '</span>';
      }
      rows +=
        '<div class="mm-row">' +
          '<span class="mm-row-label">Frete' +
            (snap.shippingDeadline ? ' <span class="mm-row-sub">· ' + escapeHTML(snap.shippingDeadline) + '</span>' : '') +
          '</span>' +
          freteValue +
        '</div>';
    }
    if (snap.discount > 0) {
      rows +=
        '<div class="mm-row">' +
          '<span class="mm-row-label">Desconto' +
            (snap.couponCode ? ' <span class="mm-row-sub">· ' + escapeHTML(snap.couponCode) + '</span>' : '') +
          '</span>' +
          '<span class="mm-row-value is-discount">− ' + formatBRL(snap.discount) + '</span>' +
        '</div>';
    }

    var totalBlock;
    var shippingNum = (snap.shipping !== null && snap.shipping !== undefined) ? snap.shipping : 0;
    if (snap.shipping !== null && snap.shipping !== undefined) {
      var totalFull = Math.max(0, subtotalFull + shippingNum - (snap.discount || 0));
      var totalPix = Math.max(0, snap.subtotalPix + shippingNum - (snap.discount || 0));
      var save = totalFull - totalPix;
      var parcela = totalFull / 12;
      totalBlock =
        '<div class="mm-total">' +
          '<div class="mm-total-label">Total</div>' +
          '<div class="mm-total-value">' + formatBRL(totalFull) + '</div>' +
          '<div class="mm-total-pix">' +
            '<span>' + formatBRL(totalPix) + ' à vista no PIX</span>' +
            (save > 0 ? '<span class="mm-total-pix-save">economia de ' + formatBRL(save) + '</span>' : '') +
          '</div>' +
          '<div class="mm-total-parcela">ou 12x de ' + formatBRL(parcela) + ' sem juros</div>' +
        '</div>';
    } else {
      var parcelaNoFrete = subtotalFull / 12;
      totalBlock =
        '<div class="mm-total">' +
          '<div class="mm-total-label">Subtotal</div>' +
          '<div class="mm-total-value">' + formatBRL(snap.subtotalPix) + '</div>' +
          '<div class="mm-total-pix"><span>à vista no PIX</span></div>' +
          '<div class="mm-total-parcela">ou 12x de ' + formatBRL(parcelaNoFrete) + ' sem juros</div>' +
        '</div>';
    }

    return (
      '<aside class="mm-id-sum mm-sum">' +
        '<h2 class="mm-h">Resumo do pedido</h2>' +
        '<div class="mm-sum-card">' +
          '<div class="mm-id-thumbs">' + thumbsHTML + '</div>' +
          '<div class="mm-rows">' + rows + '</div>' +
          totalBlock +
          '<a class="mm-id-edit-cart" href="/checkout/cart">' +
            '<span>Editar carrinho</span>' +
          '</a>' +
        '</div>' +
      '</aside>'
    );
  }

  /* ----- render do form principal (email + Google + guest + trust) ----- */
  function renderIdentifyForm() {
    var mailIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>';
    var userIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
    var docIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="9" x2="17" y2="9"/><line x1="7" y1="13" x2="17" y2="13"/><line x1="7" y1="17" x2="13" y2="17"/></svg>';
    var phoneIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';

    return (
      '<section class="mm-id-form-col">' +
        '<h2 class="mm-id-h2">Quase lá! Identifique-se</h2>' +
        '<p class="mm-id-sub">Informe seu e-mail para finalizar a compra de forma rápida e segura.</p>' +

        /* form principal email — uso DIV (não label) pra evitar conflito com
           Magazord CSS que força display:flex column em labels do checkout */
        '<form class="mm-id-form" data-mm-act="identify-submit" novalidate>' +
          '<div class="mm-input-wrap">' +
            '<span class="mm-input-icon" aria-hidden="true">' + mailIcon + '</span>' +
            '<input type="email" id="mm-id-email" name="mm-email" class="mm-input" ' +
              'placeholder="seu@email.com" autocomplete="email" inputmode="email" required>' +
          '</div>' +
          '<p class="mm-id-microcopy">' + ICON.lock + '<span>Seu e-mail é seguro · Não compartilhamos com terceiros</span></p>' +
          '<button type="submit" class="mm-cta">Continuar' + ICON.arrow + '</button>' +
        '</form>' +

        /* divider */
        '<div class="mm-id-divider"><span>ou</span></div>' +

        /* google login slot — .social-login-area é movido pra cá via JS */
        '<div class="mm-id-google-slot"></div>' +

        /* guest CTA — navegação direta pra onepage (sem coletar dados aqui;
           evita digitar nome/CPF/email duas vezes — isso será coletado na
           Fase 3 do rebuild da onepage com auto-fill via mm_checkout_mode flag) */
        '<button type="button" class="mm-id-guest-toggle" data-mm-act="guest-go" aria-label="Continuar como visitante">' +
          '<span class="mm-id-guest-icon" aria-hidden="true">' + userIcon + '</span>' +
          '<span class="mm-id-guest-label">Continuar como visitante (sem criar conta)</span>' +
          '<span class="mm-id-guest-arrow" aria-hidden="true">' + ICON.arrow + '</span>' +
        '</button>' +

        /* trust strip */
        '<div class="mm-trust mm-id-trust">' +
          '<span class="mm-trust-item">' + ICON.lock + '<span>Pagamento seguro</span></span>' +
          '<span class="mm-trust-item">' + ICON.rotate + '<span>7 dias para troca</span></span>' +
          '<span class="mm-trust-item">' + ICON.shield + '<span>Garantia 12 meses</span></span>' +
        '</div>' +

        /* whatsapp help */
        '<a class="mm-help" href="' + MM_WHATSAPP_URL + '" target="_blank" rel="noopener" data-mm-track="help-whats-id">' +
          ICON.whats +
          '<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span>' +
        '</a>' +

        /* política de privacidade */
        '<p class="mm-id-lgpd">Ao continuar, você concorda com nossa <a href="/politica-de-privacidade" target="_blank" rel="noopener">Política de Privacidade</a></p>' +
      '</section>'
    );
  }

  /* ----- monta o layout completo do identify ----- */
  function buildIdentifyLayout(snap) {
    if (document.getElementById('mm-layout')) return document.getElementById('mm-layout');

    var layout = document.createElement('div');
    layout.id = 'mm-layout';
    layout.classList.add('mm-id-layout');

    layout.innerHTML =
      renderCheckoutHeader('delivery') +
      '<div class="mm-grid mm-id-grid">' +
        renderIdentifyForm() +
        renderIdentifySummary(snap) +
      '</div>';

    /* IMPORTANTE: insere direto no mainArea (não no .container).
       Identify NÃO usa .container como wrapper — o único .container é
       #recomendacao-checkout no rodapé. Os forms Magazord são filhos
       diretos do mainArea. */
    mainArea.insertBefore(layout, mainArea.firstChild);
    document.body.classList.add('mm-checkout-rebuild');
    /* Reparenta Google ANTES de aplicar shadow-mode pra evitar iframe reload */
    reparentGoogleLogin();
    mainArea.classList.add('mm-shadow-mode');
    document.documentElement.classList.remove('mm-cart-loading');
    return layout;
  }

  /* ----- move .social-login-area (Google iframe) pro nosso slot -----
     Tenta appendChild — se a iframe re-renderizar, Google preserva sessão. */
  function reparentGoogleLogin() {
    var slot = document.querySelector('.mm-id-google-slot');
    var social = mainArea.querySelector('.social-login-area');
    if (!slot || !social) return;
    if (slot.contains(social)) return; /* já movido */
    try {
      slot.appendChild(social);
      slot.classList.add('is-loaded');
    } catch (e) {}
  }

  /* ----- handlers de submit ----- */
  function submitMagazordEmailForm(email) {
    /* Salva email pra reuso no onepage Fase 3 (pré-preenche o input) */
    STORAGE.set('mm_user_email', email);

    var hidden = mainArea.querySelector('#login');
    if (!hidden) return false;
    hidden.value = email;
    triggerInputEvent(hidden);
    /* Encontra o button.button-send dentro do form pai do #login */
    var form = hidden.closest('form');
    var btn = form ? form.querySelector('button.button-send, button[type="submit"]') : null;
    if (btn) {
      btn.click();
      return true;
    }
    if (form) {
      form.submit();
      return true;
    }
    return false;
  }

  /* ----- bind eventos do identify ----- */
  function bindIdentifyEvents() {
    var layout = document.getElementById('mm-layout');
    if (!layout || layout._mmBound) return;
    layout._mmBound = true;

    /* Submit do form email principal */
    layout.addEventListener('submit', function(e) {
      var emailForm = e.target.closest('[data-mm-act="identify-submit"]');
      if (emailForm) {
        e.preventDefault();
        var input = emailForm.querySelector('#mm-id-email');
        var val = input ? input.value.trim() : '';
        if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
          if (input) {
            input.classList.add('mm-input-error');
            input.focus();
            setTimeout(function() { input.classList.remove('mm-input-error'); }, 1500);
          }
          return;
        }
        var ok = submitMagazordEmailForm(val);
        if (ok) {
          var btn = emailForm.querySelector('.mm-cta');
          if (btn) btn.classList.add('is-loading');
        }
        return;
      }

    });

    /* Click delegation — guest CTA navega direto pra onepage.
       Salva flag pra Fase 3 detectar e auto-selecionar "Compra sem cadastro" */
    layout.addEventListener('click', function(e) {
      var actEl = e.target.closest('[data-mm-act]');
      if (!actEl) return;
      var act = actEl.getAttribute('data-mm-act');
      if (act === 'guest-go') {
        STORAGE.set('mm_checkout_mode', 'guest');
        actEl.classList.add('is-loading');
        location.href = '/checkout/onepage';
      }
    });
  }

  /* ----- fetch fallback: se snapshot está null, busca /checkout/cart
     em background, parseia e hidrata o summary -----
     Cobre cenários: snapshot expirou, user pulou direto pro identify
     via URL, primeira sessão sem cart visit prévio, etc. */
  function parseCartHtml(html) {
    try {
      var doc = new DOMParser().parseFromString(html, 'text/html');
      var area = doc.querySelector('#checkout-main-area');
      if (!area) return null;
      var items = [];
      var itemEls = area.querySelectorAll('.cart-item');
      var subtotalFull = 0;
      for (var i = 0; i < itemEls.length; i++) {
        var el = itemEls[i];
        var img = el.querySelector('figure img') || el.querySelector('#product-img') || el.querySelector('img');
        var valorEl = el.querySelector('.column-valor-produto .valor');
        var lineFull = parseFloat(el.getAttribute('data-valor') || '0');
        var linePix = valorEl ? parseBRL(valorEl.textContent) : 0;
        items.push({
          name: el.getAttribute('data-item-name') || el.getAttribute('data-name') || '',
          variant: el.getAttribute('data-item-variant') || '',
          imgSrc: img ? (img.getAttribute('src') || '') : '',
          quantity: parseInt(el.getAttribute('data-item-quantity') || '1', 10),
          lineTotal: lineFull,
          lineTotalPix: linePix,
          isPix: !!el.querySelector('.column-valor-produto .sub'),
          deposito: el.getAttribute('data-item-deposito') === '1'
        });
        subtotalFull += lineFull;
      }
      if (items.length === 0) return null;
      var resumoValueEl = area.querySelector('#resumo-compra .resumo-valores .value');
      var subtotalPix = resumoValueEl ? parseBRL(resumoValueEl.textContent) : 0;
      if (subtotalPix <= 0) {
        subtotalPix = items.reduce(function(a, i) { return a + (i.lineTotalPix || 0); }, 0);
      }
      var discountEl = area.querySelector('#resumo-compra .discount-value');
      var discount = discountEl ? parseBRL(discountEl.textContent) : 0;
      var couponEl = area.querySelector('#resumo-compra .txt-cupom, #resumo-compra .alert.alert-type-1');
      var couponCode = '';
      if (couponEl) {
        var m = couponEl.textContent.match(/([A-Z0-9]{3,})/);
        if (m) couponCode = m[1];
      }
      var freteEl = area.querySelector('#resumo-compra .frete-calculado');
      var shipping = null, shippingDeadline = '';
      if (freteEl && freteEl.textContent.trim()) {
        var raw = freteEl.textContent.trim();
        if (/gr[aá]tis/i.test(raw)) shipping = 0;
        else {
          var p = parseBRL(raw);
          if (p > 0) shipping = p;
        }
        var dm = raw.match(/(\d+)\s*dias?/i);
        if (dm) shippingDeadline = dm[1] + ' dias úteis';
      }
      return {
        ts: Date.now(),
        items: items,
        subtotalPix: subtotalPix,
        subtotalFull: subtotalFull,
        discount: discount,
        couponCode: couponCode,
        shipping: shipping,
        shippingDeadline: shippingDeadline,
        cepValue: ''
      };
    } catch (e) { return null; }
  }

  function fetchCartSnapshotFallback(callback) {
    try {
      fetch('/checkout/cart', {
        credentials: 'include',
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
      })
        .then(function(r) { return r.text(); })
        .then(function(html) {
          var snap = parseCartHtml(html);
          if (snap) {
            STORAGE.set(CART_SNAPSHOT_KEY, JSON.stringify(snap));
          }
          callback(snap);
        })
        .catch(function() { callback(null); });
    } catch (e) { callback(null); }
  }

  /* Re-renderiza apenas a coluna do summary com snapshot novo */
  function rehydrateIdentifySummary(snap) {
    var existing = document.querySelector('#mm-layout .mm-id-sum');
    if (!existing) return;
    var grid = existing.parentNode;
    if (!grid) return;
    var temp = document.createElement('div');
    temp.innerHTML = renderIdentifySummary(snap);
    var fresh = temp.firstChild;
    if (fresh) grid.replaceChild(fresh, existing);
  }

  /* ----- mount entry ----- */
  if (isIdentify) {
    function waitForIdentifyDom(attempt) {
      attempt = attempt || 0;
      if (attempt > 30) { mountIdentify(); return; }
      var hasForm = mainArea.querySelector('#login, #login-form-etapa-01');
      if (hasForm || attempt > 8) {
        mountIdentify();
      } else {
        setTimeout(function() { waitForIdentifyDom(attempt + 1); }, 250);
      }
    }

    function mountIdentify() {
      var snap = loadCartSnapshot();
      buildIdentifyLayout(snap);
      bindIdentifyEvents();
      reparentGoogleLogin();

      /* Tenta novamente o reparent depois pra cobrir caso .social-login-area
         tenha sido injetada async pelo Google script */
      setTimeout(reparentGoogleLogin, 600);
      setTimeout(reparentGoogleLogin, 1500);

      /* Fallback: se snapshot está null/empty, fetch /checkout/cart e
         re-renderiza a coluna do summary quando chegar */
      if (!snap || !snap.items || snap.items.length === 0) {
        fetchCartSnapshotFallback(function(freshSnap) {
          if (freshSnap && freshSnap.items && freshSnap.items.length > 0) {
            rehydrateIdentifySummary(freshSnap);
          }
        });
      }

      /* Auto-focus no input email após mount */
      setTimeout(function() {
        var emailInput = document.getElementById('mm-id-email');
        if (emailInput && !('ontouchstart' in window)) emailInput.focus();
      }, 250);
    }

    waitForIdentifyDom();
  }


  /* =============================================
     ONEPAGE — Fase 3 — shadow-render do form de dados + endereço
     /checkout/onepage = "Entrega" no stepper

     Estratégia:
     1. Esconde Magazord forms (mm-shadow-mode)
     2. Renderiza #mm-layout 2-col: form (esquerda) + summary (direita sticky)
     3. Form tem 2 cards: dados pessoais (4 campos) + endereço (CEP + autofill)
     4. Email pré-preenchido via localStorage.mm_user_email (set na Fase 2)
     5. CEP autofill via ViaCEP API (fallback Zord)
     6. Frete calculado automaticamente após CEP+número
     7. Auto-detect localStorage.mm_checkout_mode='guest' (set na Fase 2)
     8. Submit: copia values pros inputs Magazord originais + clica btn next
     ============================================= */

  /* ----- helpers de máscara (compartilhados com qualquer fase) ----- */
  function maskCPF(raw) {
    var d = String(raw || '').replace(/\D/g, '').slice(0, 11);
    if (d.length <= 3) return d;
    if (d.length <= 6) return d.slice(0, 3) + '.' + d.slice(3);
    if (d.length <= 9) return d.slice(0, 3) + '.' + d.slice(3, 6) + '.' + d.slice(6);
    return d.slice(0, 3) + '.' + d.slice(3, 6) + '.' + d.slice(6, 9) + '-' + d.slice(9);
  }
  function maskPhone(raw) {
    var d = String(raw || '').replace(/\D/g, '').slice(0, 11);
    if (d.length <= 2) return d.length ? '(' + d : '';
    if (d.length <= 6) return '(' + d.slice(0, 2) + ') ' + d.slice(2);
    if (d.length <= 10) return '(' + d.slice(0, 2) + ') ' + d.slice(2, 6) + '-' + d.slice(6);
    return '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7);
  }
  function maskCEP(raw) {
    var d = String(raw || '').replace(/\D/g, '').slice(0, 8);
    if (d.length <= 5) return d;
    return d.slice(0, 5) + '-' + d.slice(5);
  }

  /* ----- ViaCEP fetch ----- */
  function fetchViaCep(cep, callback) {
    var clean = String(cep || '').replace(/\D/g, '');
    if (clean.length !== 8) { callback(null); return; }
    try {
      fetch('https://viacep.com.br/ws/' + clean + '/json/', {
        headers: { 'Accept': 'application/json' }
      })
        .then(function(r) { return r.json(); })
        .then(function(data) {
          if (!data || data.erro) { callback(null); return; }
          callback({
            logradouro: data.logradouro || '',
            bairro: data.bairro || '',
            cidade: data.localidade || '',
            estado: data.uf || ''
          });
        })
        .catch(function() { callback(null); });
    } catch (e) { callback(null); }
  }

  /* ----- icons usados no onepage form ----- */
  var ICONS_OP = {
    mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    user: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    doc: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="9" x2="17" y2="9"/><line x1="7" y1="13" x2="17" y2="13"/><line x1="7" y1="17" x2="13" y2="17"/></svg>',
    phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    home: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'
  };

  /* ----- render do form onepage (dados + endereço) ----- */
  function renderOnepageForm(prefilledEmail) {
    var emailVal = prefilledEmail ? ' value="' + escapeHTML(prefilledEmail) + '"' : '';
    return (
      '<section class="mm-op-form-col">' +
        '<h2 class="mm-id-h2">Falta pouco. Onde entregar?</h2>' +
        '<p class="mm-id-sub">Preencha seus dados e o endereço de entrega — o frete é calculado automaticamente.</p>' +

        /* CARD 1 — Dados pessoais */
        '<form class="mm-op-form" data-mm-act="onepage-submit" novalidate>' +
          '<div class="mm-op-card">' +
            '<h3 class="mm-op-card-title">' + ICONS_OP.user + '<span>Quem vai receber</span></h3>' +
            '<div class="mm-op-grid-2">' +
              '<div class="mm-input-wrap mm-op-col-2">' +
                '<span class="mm-input-icon" aria-hidden="true">' + ICONS_OP.mail + '</span>' +
                '<input type="email" id="mm-op-email" class="mm-input" placeholder="seu@email.com" autocomplete="email" inputmode="email" required' + emailVal + '>' +
              '</div>' +
              '<div class="mm-input-wrap mm-op-col-2">' +
                '<span class="mm-input-icon" aria-hidden="true">' + ICONS_OP.user + '</span>' +
                '<input type="text" id="mm-op-nome" class="mm-input" placeholder="Nome completo" autocomplete="name" required>' +
              '</div>' +
              '<div class="mm-input-wrap">' +
                '<span class="mm-input-icon" aria-hidden="true">' + ICONS_OP.doc + '</span>' +
                '<input type="tel" id="mm-op-cpf" class="mm-input" placeholder="CPF" inputmode="numeric" autocomplete="off" maxlength="14" required>' +
              '</div>' +
              '<div class="mm-input-wrap">' +
                '<span class="mm-input-icon" aria-hidden="true">' + ICONS_OP.phone + '</span>' +
                '<input type="tel" id="mm-op-tel" class="mm-input" placeholder="(11) 91234-5678" inputmode="tel" autocomplete="tel" maxlength="15" required>' +
              '</div>' +
            '</div>' +
            '<p class="mm-op-microcopy-soft">Usamos seus dados só pra emitir nota fiscal e te avisar da entrega.</p>' +
          '</div>' +

          /* CARD 2 — Endereço */
          '<div class="mm-op-card">' +
            '<h3 class="mm-op-card-title">' + ICONS_OP.pin + '<span>Endereço de entrega</span></h3>' +
            '<div class="mm-op-grid-2">' +
              '<div class="mm-input-wrap">' +
                '<span class="mm-input-icon" aria-hidden="true">' + ICONS_OP.pin + '</span>' +
                '<input type="tel" id="mm-op-cep" class="mm-input" placeholder="CEP — 00000-000" inputmode="numeric" autocomplete="postal-code" maxlength="9" required>' +
                '<span class="mm-input-status" id="mm-op-cep-status" aria-live="polite"></span>' +
              '</div>' +
              '<a class="mm-op-cep-help" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a>' +
              '<div class="mm-input-wrap mm-op-col-2">' +
                '<span class="mm-input-icon" aria-hidden="true">' + ICONS_OP.home + '</span>' +
                '<input type="text" id="mm-op-rua" class="mm-input" placeholder="Rua, Av, Travessa..." autocomplete="address-line1" required>' +
              '</div>' +
              '<div class="mm-input-wrap">' +
                '<input type="tel" id="mm-op-num" class="mm-input mm-input-noicon" placeholder="Número" inputmode="numeric" required>' +
              '</div>' +
              '<div class="mm-input-wrap">' +
                '<input type="text" id="mm-op-comp" class="mm-input mm-input-noicon" placeholder="Complemento (opcional)" autocomplete="address-line2">' +
              '</div>' +
              '<div class="mm-input-wrap mm-op-col-2">' +
                '<input type="text" id="mm-op-bairro" class="mm-input mm-input-noicon" placeholder="Bairro" autocomplete="address-level3" required>' +
              '</div>' +
              '<div class="mm-input-wrap">' +
                '<input type="text" id="mm-op-cidade" class="mm-input mm-input-noicon" placeholder="Cidade" autocomplete="address-level2" required>' +
              '</div>' +
              '<div class="mm-input-wrap">' +
                '<input type="text" id="mm-op-uf" class="mm-input mm-input-noicon" placeholder="UF" maxlength="2" autocomplete="address-level1" required>' +
              '</div>' +
            '</div>' +

            /* Frete display — só renderiza após cálculo */
            '<div class="mm-op-frete" id="mm-op-frete-slot"></div>' +
          '</div>' +

          /* CTA — última etapa pagamento */
          '<button type="submit" class="mm-cta mm-op-cta">' +
            'Última etapa: pagamento' + ICON.arrow +
          '</button>' +
          '<p class="mm-id-microcopy mm-op-cta-sub">' + ICON.lock + '<span>Você revisa tudo antes de finalizar</span></p>' +
        '</form>' +

        /* trust + help */
        '<div class="mm-trust mm-id-trust">' +
          '<span class="mm-trust-item">' + ICON.lock + '<span>Pagamento seguro</span></span>' +
          '<span class="mm-trust-item">' + ICON.rotate + '<span>7 dias para troca</span></span>' +
          '<span class="mm-trust-item">' + ICON.shield + '<span>Garantia 12 meses</span></span>' +
        '</div>' +

        '<a class="mm-help" href="' + MM_WHATSAPP_URL + '" target="_blank" rel="noopener">' +
          ICON.whats +
          '<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span>' +
        '</a>' +
      '</section>'
    );
  }

  /* ----- monta layout completo do onepage ----- */
  function buildOnepageLayout(snap, prefilledEmail) {
    if (document.getElementById('mm-layout')) return document.getElementById('mm-layout');

    var layout = document.createElement('div');
    layout.id = 'mm-layout';
    layout.classList.add('mm-id-layout');
    layout.classList.add('mm-op-layout');

    layout.innerHTML =
      renderCheckoutHeader('delivery') +
      '<div class="mm-grid mm-id-grid mm-op-grid">' +
        renderOnepageForm(prefilledEmail) +
        renderIdentifySummary(snap) +
      '</div>';

    mainArea.insertBefore(layout, mainArea.firstChild);
    document.body.classList.add('mm-checkout-rebuild');
    mainArea.classList.add('mm-shadow-mode');
    document.documentElement.classList.remove('mm-cart-loading');
    return layout;
  }

  /* ----- frete cálculo: usa Zord API se disponível, lê resultado do DOM Magazord ----- */
  function renderFreteResult(state) {
    var slot = document.getElementById('mm-op-frete-slot');
    if (!slot) return;
    if (state === 'loading') {
      slot.innerHTML =
        '<div class="mm-op-frete-loading">' +
          '<div class="mm-op-frete-spinner"></div>' +
          '<span>Calculando frete...</span>' +
        '</div>';
      return;
    }
    if (state === 'error') {
      slot.innerHTML =
        '<div class="mm-op-frete-error">' +
          '<span>Não conseguimos calcular o frete. Confira o CEP e tente novamente.</span>' +
        '</div>';
      return;
    }
    /* state = { value: number|0, deadline: string } */
    var isFree = state.value === 0;
    var valueLabel = isFree
      ? '<strong class="mm-op-frete-value is-free">' + ICON.check + ' Frete grátis</strong>'
      : '<strong class="mm-op-frete-value">' + formatBRL(state.value) + '</strong>';
    var deadlineLabel = state.deadline
      ? '<span class="mm-op-frete-deadline">Entrega em ' + escapeHTML(state.deadline) + '</span>'
      : '';
    slot.innerHTML =
      '<div class="mm-op-frete-card">' +
        ICON.truck +
        '<div class="mm-op-frete-body">' + valueLabel + deadlineLabel + '</div>' +
      '</div>';
  }

  function calcFreteOnepage() {
    var cepInput = document.getElementById('mm-op-cep');
    if (!cepInput) return;
    var digits = (cepInput.value || '').replace(/\D/g, '');
    if (digits.length !== 8) return;

    /* Salva no global localStorage pra cross-page */
    saveCep(digits);

    /* Aplica no input hidden Magazord pra disparar cálculo nativo */
    var hidden = mainArea.querySelector('#cep, .input-cep');
    if (hidden) {
      hidden.value = formatCep(digits);
      triggerInputEvent(hidden);
    }

    renderFreteResult('loading');

    /* Usa Zord API se disponível pro cálculo real */
    try {
      if (window.Zord && window.Zord.Cart && typeof window.Zord.Cart.calculaFreteCarrinho === 'function') {
        window.Zord.Cart.calculaFreteCarrinho();
      }
    } catch (e) {}

    /* Read result após delay (Magazord atualiza DOM async) — múltiplas tentativas.
       Procura em vários locais possíveis: cart usa #resumo-compra .frete-calculado,
       onepage usa .line-entrega .valor-frete, payment pode usar outros. */
    var attempts = 0;
    var maxAttempts = 18;
    function readFreteFromDom() {
      /* Onepage: .line.line-entrega .valor-frete + .nome-servico-frete */
      var opVal = mainArea.querySelector('.line-entrega .valor-frete, .value.valor-frete');
      if (opVal && opVal.textContent.trim()) {
        var raw = opVal.textContent.trim();
        var nome = (mainArea.querySelector('.nome-servico-frete') || {}).textContent || '';
        var deadline = '';
        var dm = nome.match(/(\d+)\s*dias?/i);
        if (dm) deadline = dm[1] + ' dias úteis';
        if (/gr[aá]tis/i.test(raw)) return { value: 0, deadline: deadline };
        var p = parseBRL(raw);
        if (p > 0) return { value: p, deadline: deadline };
      }
      /* Cart: #resumo-compra .frete-calculado */
      var cartEl = mainArea.querySelector('#resumo-compra .frete-calculado');
      if (cartEl && cartEl.textContent.trim()) {
        var raw2 = cartEl.textContent.trim();
        var value = null, deadline2 = '';
        if (/gr[aá]tis/i.test(raw2)) {
          value = 0;
        } else {
          var p2 = parseBRL(raw2);
          if (p2 > 0) value = p2;
        }
        var dm2 = raw2.match(/(\d+)\s*dias?/i);
        if (dm2) deadline2 = dm2[1] + ' dias úteis';
        if (value !== null) return { value: value, deadline: deadline2 };
      }
      return null;
    }

    function pollFrete() {
      attempts++;
      var result = readFreteFromDom();
      if (result) {
        renderFreteResult(result);
        /* Atualiza summary lateral também */
        var snap = loadCartSnapshot();
        if (snap) {
          snap.shipping = result.value;
          snap.shippingDeadline = result.deadline;
          STORAGE.set(CART_SNAPSHOT_KEY, JSON.stringify(snap));
          rehydrateIdentifySummary(snap);
        }
        return;
      }
      if (attempts < maxAttempts) {
        setTimeout(pollFrete, 350);
      } else {
        renderFreteResult('error');
      }
    }
    setTimeout(pollFrete, 400);
  }

  /* ----- bind eventos do onepage ----- */
  function bindOnepageEvents() {
    var layout = document.getElementById('mm-layout');
    if (!layout || layout._mmOpBound) return;
    layout._mmOpBound = true;

    /* Submit form principal */
    layout.addEventListener('submit', function(e) {
      var form = e.target.closest('[data-mm-act="onepage-submit"]');
      if (!form) return;
      e.preventDefault();

      var data = {
        email: (document.getElementById('mm-op-email') || {}).value || '',
        nome: (document.getElementById('mm-op-nome') || {}).value || '',
        cpf: (document.getElementById('mm-op-cpf') || {}).value || '',
        tel: (document.getElementById('mm-op-tel') || {}).value || '',
        cep: (document.getElementById('mm-op-cep') || {}).value || '',
        rua: (document.getElementById('mm-op-rua') || {}).value || '',
        num: (document.getElementById('mm-op-num') || {}).value || '',
        comp: (document.getElementById('mm-op-comp') || {}).value || '',
        bairro: (document.getElementById('mm-op-bairro') || {}).value || '',
        cidade: (document.getElementById('mm-op-cidade') || {}).value || '',
        uf: (document.getElementById('mm-op-uf') || {}).value || ''
      };

      /* Validação inline */
      var errors = [];
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.push('mm-op-email');
      if (data.nome.trim().split(/\s+/).length < 2) errors.push('mm-op-nome');
      if (data.cpf.replace(/\D/g, '').length !== 11) errors.push('mm-op-cpf');
      if (data.tel.replace(/\D/g, '').length < 10) errors.push('mm-op-tel');
      if (data.cep.replace(/\D/g, '').length !== 8) errors.push('mm-op-cep');
      if (!data.rua.trim()) errors.push('mm-op-rua');
      if (!data.num.trim()) errors.push('mm-op-num');
      if (!data.bairro.trim()) errors.push('mm-op-bairro');
      if (!data.cidade.trim()) errors.push('mm-op-cidade');
      if (!data.uf.trim()) errors.push('mm-op-uf');

      if (errors.length) {
        errors.forEach(function(id) {
          var el = document.getElementById(id);
          if (el) {
            el.classList.add('mm-input-error');
            setTimeout(function() { el.classList.remove('mm-input-error'); }, 1800);
          }
        });
        var first = document.getElementById(errors[0]);
        if (first) {
          first.focus();
          first.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
        return;
      }

      /* Loading state */
      var btn = form.querySelector('.mm-cta');
      if (btn) btn.classList.add('is-loading');

      /* Persistir email + checkoutmode pra próxima etapa */
      STORAGE.set('mm_user_email', data.email.trim());

      /* Copiar values pros inputs Magazord originais */
      submitOnepageToMagazord(data);
    });

    /* Auto-fill via CEP — quando user preenche CEP completo */
    layout.addEventListener('input', function(e) {
      var t = e.target;
      if (!t) return;
      if (t.id === 'mm-op-cpf') {
        t.value = maskCPF(t.value);
      } else if (t.id === 'mm-op-tel') {
        t.value = maskPhone(t.value);
      } else if (t.id === 'mm-op-cep') {
        t.value = maskCEP(t.value);
        var digits = t.value.replace(/\D/g, '');
        if (digits.length === 8) {
          handleCepComplete(digits);
        }
      } else if (t.id === 'mm-op-uf') {
        t.value = (t.value || '').replace(/[^A-Za-z]/g, '').toUpperCase().slice(0, 2);
      } else if (t.id === 'mm-op-num') {
        /* Se número foi preenchido + CEP completo, dispara cálculo de frete */
        var cep = (document.getElementById('mm-op-cep') || {}).value || '';
        if (cep.replace(/\D/g, '').length === 8 && t.value) {
          if (calcFreteOnepage._t) clearTimeout(calcFreteOnepage._t);
          calcFreteOnepage._t = setTimeout(calcFreteOnepage, 400);
        }
      }
    });
  }

  /* CEP completo: dispara ViaCEP fetch + auto-fill + cálculo de frete */
  function handleCepComplete(digits) {
    var statusEl = document.getElementById('mm-op-cep-status');
    if (statusEl) {
      statusEl.className = 'mm-input-status is-loading';
      statusEl.textContent = 'Buscando...';
    }
    fetchViaCep(digits, function(data) {
      if (statusEl) statusEl.className = 'mm-input-status';
      if (!data) {
        if (statusEl) {
          statusEl.className = 'mm-input-status is-error';
          statusEl.textContent = 'CEP não encontrado';
          setTimeout(function() {
            statusEl.className = 'mm-input-status';
            statusEl.textContent = '';
          }, 2500);
        }
        return;
      }
      if (statusEl) {
        statusEl.className = 'mm-input-status is-ok';
        statusEl.innerHTML = ICON.check;
        setTimeout(function() {
          statusEl.className = 'mm-input-status';
          statusEl.innerHTML = '';
        }, 1800);
      }
      /* Auto-fill */
      var fields = [
        ['mm-op-rua', data.logradouro],
        ['mm-op-bairro', data.bairro],
        ['mm-op-cidade', data.cidade],
        ['mm-op-uf', data.estado]
      ];
      fields.forEach(function(pair) {
        var el = document.getElementById(pair[0]);
        if (el && pair[1] && !el.value) el.value = pair[1];
      });
      /* Foca no número (próximo campo lógico) */
      var num = document.getElementById('mm-op-num');
      if (num) setTimeout(function() { num.focus(); }, 100);

      /* Dispara cálculo de frete imediato (não espera número) */
      if (calcFreteOnepage._t) clearTimeout(calcFreteOnepage._t);
      calcFreteOnepage._t = setTimeout(calcFreteOnepage, 200);
    });
  }

  /* Submit final: copia values pros inputs Magazord + clica botão next */
  function submitOnepageToMagazord(data) {
    /* O Magazord onepage tem múltiplos forms (PF, PJ, anonymous, endereço).
       Os forms anonymous (id _3) e endereço são os que importam pro guest flow.
       Forms PF (id _2) também podem ser usados como fallback. */
    var setVal = function(sel, value) {
      var el = mainArea.querySelector(sel);
      if (!el) return false;
      try {
        var nativeSet = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        nativeSet.call(el, value);
      } catch (e) { el.value = value; }
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
      el.dispatchEvent(new Event('blur', { bubbles: true }));
      return true;
    };

    /* Dados pessoais — tenta tanto _2 (PF) quanto _3 (anonymous) */
    setVal('#nome-completo_2', data.nome.trim()) || setVal('#nome-completo_3', data.nome.trim());
    setVal('#cpf_2', data.cpf) || setVal('#cpf_3', data.cpf);
    setVal('#email_3', data.email.trim()) || setVal('#email-pessoa-fisica', data.email.trim());
    setVal('#telefone_2', data.tel) || setVal('#telefone_3', data.tel);

    /* Endereço */
    setVal('#cep', data.cep);
    setVal('#logradouro', data.rua.trim());
    setVal('#numero', data.num);
    setVal('#complemento', data.comp);
    setVal('#bairro', data.bairro.trim());
    setVal('#cidade', data.cidade.trim());
    setVal('#estado', data.uf.trim());

    /* Tenta clicar nos botões de "Próxima etapa" do Magazord pra avançar
       (eles fazem POST + navegam pra payment) */
    setTimeout(function() {
      /* Botão de endereço — finaliza onepage e vai pra payment */
      var nextBtns = mainArea.querySelectorAll('button.button-next, button.button-endereco, button[type="submit"]');
      var clicked = false;
      for (var i = 0; i < nextBtns.length; i++) {
        var b = nextBtns[i];
        var t = (b.textContent || '').toLowerCase();
        if (t.indexOf('próxima') !== -1 || t.indexOf('proxima') !== -1 || t.indexOf('finalizar') !== -1) {
          if (b.offsetParent !== null || b.offsetWidth > 0) {
            b.click();
            clicked = true;
            break;
          }
        }
      }
      /* Fallback: navega direto pra /checkout/payment */
      if (!clicked) {
        setTimeout(function() {
          if (location.pathname.indexOf('/checkout/onepage') !== -1) {
            location.href = '/checkout/payment';
          }
        }, 800);
      }
    }, 300);
  }

  /* ----- mount entry ----- */
  if (isOnepage) {
    function waitForOnepageDom(attempt) {
      attempt = attempt || 0;
      if (attempt > 30) { mountOnepage(); return; }
      var hasForm = mainArea.querySelector('#cep, .box-area-dados, #nome-completo_2');
      if (hasForm || attempt > 8) {
        mountOnepage();
      } else {
        setTimeout(function() { waitForOnepageDom(attempt + 1); }, 250);
      }
    }

    function mountOnepage() {
      var snap = loadCartSnapshot();
      var prefilledEmail = STORAGE.get('mm_user_email') || '';

      /* Limpa flag mm_checkout_mode (já foi usada pra entrar no flow guest) */
      STORAGE.remove('mm_checkout_mode');

      buildOnepageLayout(snap, prefilledEmail);
      bindOnepageEvents();

      /* Garante que o tab "Compra sem cadastro" do Magazord esteja ativo
         (caso não esteja por default) — clicamos no link nativo */
      try {
        var sememCadLink = Array.from(mainArea.querySelectorAll('a, button')).find(function(el) {
          var t = (el.textContent || '').toLowerCase();
          return t.indexOf('sem cadastro') !== -1 && el.offsetParent !== null;
        });
        if (sememCadLink && !sememCadLink.classList.contains('active')) {
          sememCadLink.click();
        }
      } catch (e) {}

      /* Auto-fetch cart snapshot fallback (mesmo padrão da Fase 2) */
      if (!snap || !snap.items || snap.items.length === 0) {
        fetchCartSnapshotFallback(function(freshSnap) {
          if (freshSnap && freshSnap.items && freshSnap.items.length > 0) {
            rehydrateIdentifySummary(freshSnap);
          }
        });
      }

      /* Auto-preenche CEP e dispara fetch se já tem CEP salvo */
      var savedCep = STORAGE.get(CEP_KEY);
      if (savedCep && savedCep.length === 8) {
        var cepInput = document.getElementById('mm-op-cep');
        if (cepInput) {
          cepInput.value = formatCep(savedCep);
          setTimeout(function() { handleCepComplete(savedCep); }, 400);
        }
      }

      /* Auto-focus primeiro input vazio (mobile-friendly: skip se touch) */
      setTimeout(function() {
        if ('ontouchstart' in window) return;
        var inputs = ['mm-op-email', 'mm-op-nome', 'mm-op-cpf', 'mm-op-tel', 'mm-op-cep'];
        for (var i = 0; i < inputs.length; i++) {
          var el = document.getElementById(inputs[i]);
          if (el && !el.value) { el.focus(); break; }
        }
      }, 350);
    }

    waitForOnepageDom();
  }


  /* =============================================
     PAYMENT — Fase 4 (TODO) — minimal input modes por enquanto
     ============================================= */

  if (isPayment) {
    var cardNumInput = mainArea.querySelector('input[placeholder*="numero do cart" i]');
    if (cardNumInput) cardNumInput.inputMode = 'numeric';

    var cvvInput = mainArea.querySelector('input[placeholder*="000" i]');
    if (cvvInput && (!cvvInput.maxLength || cvvInput.maxLength <= 4)) cvvInput.inputMode = 'numeric';
  }

})();
