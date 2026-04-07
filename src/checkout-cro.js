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
  var FRETE_GRATIS_THRESHOLD = 2000;
  var MM_LOGO_URL = 'https://madeiramania.cdn.magazord.com.br/resources/Design%20sem%20nome%20(1).svg';
  var MM_WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5511915299488&text=' + encodeURIComponent('Olá! Estou no checkout e gostaria de tirar uma dúvida sobre meu pedido.');

  var path = location.pathname;
  var isCart = path.indexOf('/checkout/cart') !== -1;
  var isIdentify = path.indexOf('/checkout/identify') !== -1;
  var isOnepage =
    path.indexOf('/checkout/onepage') !== -1 ||
    path.indexOf('/checkout/payment') !== -1;

  if (!isCart && !isIdentify && !isOnepage) return;

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
    set: function(k, v) { try { localStorage.setItem(k, v); } catch(e) {} }
  };


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
     clear progress indicator, big readable trust signal */
  function renderCheckoutHeader() {
    var lockBig = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';

    return (
      '<header class="mm-checkout-header">' +
        '<a class="mm-checkout-header-logo" href="/" aria-label="Madeira Mania - voltar à home">' +
          '<img src="' + MM_LOGO_URL + '" alt="Madeira Mania" width="180" height="44">' +
        '</a>' +
        '<nav class="mm-checkout-steps" aria-label="Etapas do checkout">' +
          '<ol>' +
            '<li class="mm-checkout-step is-active" aria-current="step">' +
              '<span class="mm-checkout-step-label">Carrinho</span>' +
            '</li>' +
            '<li class="mm-checkout-step-sep" aria-hidden="true">›</li>' +
            '<li class="mm-checkout-step">' +
              '<span class="mm-checkout-step-label">Identificação</span>' +
            '</li>' +
            '<li class="mm-checkout-step-sep" aria-hidden="true">›</li>' +
            '<li class="mm-checkout-step">' +
              '<span class="mm-checkout-step-label">Pagamento</span>' +
            '</li>' +
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
      renderCheckoutHeader() +
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

    /* Se a UI mostrar um cupom aplicado, sincroniza o cupom label */
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
     IDENTIFY — minimal CRO copy
     ============================================= */

  if (isIdentify) {
    var h2 = mainArea.querySelector('h2');
    if (h2 && h2.textContent.indexOf('Acesse') !== -1) {
      h2.textContent = 'Quase lá! Identifique-se';
    }
    var subtitleEls = mainArea.querySelectorAll('div, span, p');
    for (var d = 0; d < subtitleEls.length; d++) {
      var txt = subtitleEls[d].textContent.trim();
      if (txt === 'Informe seu e-mail ou CPF/CNPJ para continuar.' && subtitleEls[d].children.length === 0) {
        subtitleEls[d].textContent = 'Informe seu e-mail para finalizar a compra de forma rápida e segura.';
        break;
      }
    }
    var allP = mainArea.querySelectorAll('p');
    for (var p = 0; p < allP.length; p++) {
      if (allP[p].textContent.indexOf('Nunca postaremos') !== -1) {
        allP[p].style.display = 'none';
      }
    }
    var emailInput = mainArea.querySelector('input[type="text"]');
    if (emailInput && emailInput.placeholder && emailInput.placeholder.indexOf('e-mail') !== -1) {
      emailInput.type = 'email';
    }
  }


  /* =============================================
     ONEPAGE / PAYMENT — input modes + security label
     ============================================= */

  if (isOnepage) {
    var cepInput2 = mainArea.querySelector('#cep, input[placeholder*="00000" i]');
    if (cepInput2) cepInput2.inputMode = 'numeric';

    var cardNumInput = mainArea.querySelector('input[placeholder*="numero do cart" i]');
    if (cardNumInput) cardNumInput.inputMode = 'numeric';

    var cvvInput = mainArea.querySelector('input[placeholder*="000" i]');
    if (cvvInput && (!cvvInput.maxLength || cvvInput.maxLength <= 4)) cvvInput.inputMode = 'numeric';

    var cpfInput = mainArea.querySelector('input[placeholder*="CPF" i]');
    if (cpfInput) cpfInput.inputMode = 'numeric';
  }

})();
