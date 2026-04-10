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
  var ONEPAGE_DRAFT_KEY = 'mm_onepage_draft';
  var ONEPAGE_DRAFT_TTL_MS = 24 * 60 * 60 * 1000; /* 24h */
  var FRETE_GRATIS_THRESHOLD = 2000;
  var MM_LOGO_URL = 'https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg';
  var MM_WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5511915299488&text=' + encodeURIComponent('Olá! Estou no checkout e gostaria de tirar uma dúvida sobre meu pedido.');

  var path = location.pathname;
  var isCart = path.indexOf('/checkout/cart') !== -1;
  var isIdentify = path.indexOf('/checkout/identify') !== -1;
  var isOnepage = path.indexOf('/checkout/onepage') !== -1;
  var isPayment = path.indexOf('/checkout/payment') !== -1;
  var isDone = path.indexOf('/checkout/done') !== -1;

  /* Pedido confirmado — limpa o draft do onepage (user terminou o fluxo) */
  if (isDone) {
    try { localStorage.removeItem('mm_onepage_draft'); } catch (e) {}
    return;
  }

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
    truck: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-5l-3-4zM6 18.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.5-7H17V9.5h2.04l1.46 2-.04 0z"/></svg>',
    check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    checkCircle: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    bolt: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    shield: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>',
    lock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>',
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
        shippingName: state.shippingName,
        shippingCity: state.shippingCity,
        shippingOptions: state.shippingOptions,
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

  /* Draft do onepage — persiste campos em localStorage pra sobreviver
     reload. TTL 24h. Chaves == ids dos inputs (mm-op-*).
     IMPORTANTE: não sobrescreve o draft existente se NENHUM campo tem
     valor (ex: chamado do beforeunload na página do step 3 onde os
     inputs mm-op-* não existem). Isso preservaria o draft bom. */
  function saveOnepageDraft() {
    try {
      var ids = ['mm-op-email','mm-op-nome','mm-op-cpf','mm-op-tel','mm-op-cep','mm-op-rua','mm-op-num','mm-op-comp','mm-op-bairro','mm-op-cidade','mm-op-uf'];
      var data = { ts: Date.now() };
      var count = 0;
      for (var i = 0; i < ids.length; i++) {
        var el = document.getElementById(ids[i]);
        if (el && el.value) { data[ids[i]] = el.value; count++; }
      }
      /* Guard: zero campos = não sobrescreve. Preserva draft anterior. */
      if (count === 0) {
        if (window._mmDraftDebug) console.log('[mm-draft] skip save (0 fields)');
        return;
      }
      STORAGE.set(ONEPAGE_DRAFT_KEY, JSON.stringify(data));
      if (window._mmDraftDebug) console.log('[mm-draft] saved', count, 'fields', data);
    } catch (e) {
      if (window._mmDraftDebug) console.warn('[mm-draft] save failed', e);
    }
  }
  function loadOnepageDraft() {
    try {
      var raw = STORAGE.get(ONEPAGE_DRAFT_KEY);
      if (!raw) return null;
      var d = JSON.parse(raw);
      if (!d || !d.ts) return null;
      if (Date.now() - d.ts > ONEPAGE_DRAFT_TTL_MS) { STORAGE.remove(ONEPAGE_DRAFT_KEY); return null; }
      return d;
    } catch (e) { return null; }
  }
  function clearOnepageDraft() {
    try { STORAGE.remove(ONEPAGE_DRAFT_KEY); } catch(e) {}
  }
  function restoreOnepageDraft() {
    var d = loadOnepageDraft();
    if (!d) {
      if (window._mmDraftDebug) console.log('[mm-draft] no draft to restore');
      return null;
    }
    var ids = ['mm-op-email','mm-op-nome','mm-op-cpf','mm-op-tel','mm-op-cep','mm-op-rua','mm-op-num','mm-op-comp','mm-op-bairro','mm-op-cidade','mm-op-uf'];
    var restored = 0;
    for (var i = 0; i < ids.length; i++) {
      var el = document.getElementById(ids[i]);
      /* Sempre restaura (não checa !el.value) — draft é autoritative */
      if (el && d[ids[i]]) {
        try {
          var nativeSet = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
          nativeSet.call(el, d[ids[i]]);
        } catch (e) { el.value = d[ids[i]]; }
        el.dispatchEvent(new Event('input', { bubbles: true }));
        restored++;
      }
    }
    if (window._mmDraftDebug) console.log('[mm-draft] restored', restored, 'fields from draft', d);
    return d;
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
      shipping: null,      /* null = não calculado, 0 = grátis, > 0 = valor (modalidade selecionada) */
      shippingRaw: '',     /* texto original do frete-calculado */
      shippingDeadline: '',/* prazo da modalidade selecionada */
      shippingName: '',    /* nome da modalidade selecionada (Econômico, Normal, Expressa) */
      shippingCity: '',    /* cidade do CEP (São Paulo/SP) */
      shippingOptions: [], /* todas as modalidades: [{id, name, deadline, value, isFree, isSelected}] */
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

    /* Shipping — parse rico via .servico-frete + fallback texto */
    var freteEl = mainArea.querySelector('#resumo-compra .frete-calculado, .frete-calculado');
    if (freteEl && freteEl.textContent.trim()) {
      state.shippingRaw = freteEl.textContent.trim();

      /* Cidade do CEP — ".frete-location .city" */
      var cityEl = freteEl.querySelector('.frete-location .city');
      if (cityEl) state.shippingCity = cityEl.textContent.trim();

      /* Opções de modalidade — cada .servico-frete com data attrs e radio */
      var servEls = freteEl.querySelectorAll('.servico-frete');
      for (var si = 0; si < servEls.length; si++) {
        var s = servEls[si];
        var radio = s.querySelector('input[type="radio"]');
        var prazoEl = s.querySelector('.dias-entrega');
        var valor = parseFloat(s.getAttribute('data-valor-frete') || '0');
        var nome = s.getAttribute('data-servico-frete') || '';
        var prazoText = prazoEl ? prazoEl.textContent.trim().replace(/\s+/g, ' ').replace(/\s*-\s*$/, '').trim() : '';
        /* Normaliza prazo: extrai só "8 a 10 dias úteis" do texto bruto */
        var pm = prazoText.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i);
        var prazoClean = pm ? pm[1].replace(/\s+/g, ' ') : prazoText;
        state.shippingOptions.push({
          id: radio ? radio.value : '',
          name: nome,
          deadline: prazoClean,
          value: valor,
          isFree: valor === 0,
          isSelected: radio ? radio.checked : false
        });
      }

      /* Modalidade selecionada — usa info-frete-selec se existir, senão pega o checked */
      var selectedOpt = state.shippingOptions.filter(function(o) { return o.isSelected; })[0];
      if (!selectedOpt && state.shippingOptions.length > 0) selectedOpt = state.shippingOptions[0];

      if (selectedOpt) {
        state.shipping = selectedOpt.value;
        state.shippingName = selectedOpt.name;
        state.shippingDeadline = selectedOpt.deadline;
      } else {
        /* Fallback: parsing por texto (sem .servico-frete) */
        var infoSelec = freteEl.querySelector('.info-frete-selec');
        var diasEl = freteEl.querySelector('.dias-entrega, .info-frete-selec .dias-entrega');
        var valEl = freteEl.querySelector('.valor-frete .value, .value.valor-frete');
        var nomeSelEl = freteEl.querySelector('.info-frete-selec .info-title span, .info-title span');
        if (valEl) {
          var valTxt = valEl.textContent.trim();
          if (/gr[aá]tis/i.test(valTxt)) {
            state.shipping = 0;
          } else {
            var parsed = parseBRL(valTxt);
            if (parsed > 0) state.shipping = parsed;
          }
        }
        if (diasEl) {
          var dpm = diasEl.textContent.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*\([^)]+\))?(?:\s*[úu]teis)?)/i);
          if (dpm) state.shippingDeadline = dpm[1].replace(/\s+/g, ' ').replace(/\(s\)/, '').trim();
        }
        if (nomeSelEl) state.shippingName = nomeSelEl.textContent.trim();
        /* Fallback final por regex no raw */
        if (state.shipping === null) {
          if (/gr[aá]tis/i.test(state.shippingRaw)) {
            state.shipping = 0;
          } else {
            var parsedRaw = parseBRL(state.shippingRaw);
            if (parsedRaw > 0) state.shipping = parsedRaw;
          }
        }
        if (!state.shippingDeadline) {
          var dm2 = state.shippingRaw.match(/(\d+(?:\s*[aà]\s*\d+)?)\s*dias?/i);
          if (dm2) state.shippingDeadline = dm2[1] + ' dias úteis';
        }
      }
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

  /* Shipping nudge REMOVED — the "Adicione mais R$ X e ganhe frete grátis"
     with olive bg + truck icon was ai-slop. Shipping info is now handled by
     the cart drawer's mmRenderShipping() pattern (CEP-aware, delivery dates,
     subtle progress bar). The checkout summary already shows "Frete: Grátis"
     when threshold is met — no separate nudge needed. */

  /* Custom checkout header — substitui o header-checkout da Magazord
     ui-ux-pro-max applied: visual hierarchy via size > color, premium spacing,
     clear progress indicator, big readable trust signal.
     currentStep: 'cart' | 'delivery' | 'payment' (default 'cart')
     Note: 'delivery' cobre /checkout/identify E /checkout/onepage —
     ambas marcam "Entrega" como ativo (continuidade visual entre telas) */
  function renderCheckoutHeader(currentStep) {
    currentStep = currentStep || 'cart';
    /* Shield-check filled — universal SSL/security mark, recognizable at small sizes */
    var lockBig = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>';

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
      var freteLabelParts = '<span class="mm-row-label">Frete';
      if (state.shippingName) freteLabelParts += ' <span class="mm-row-sub">· ' + escapeHTML(state.shippingName) + '</span>';
      if (state.shippingDeadline) freteLabelParts += ' <span class="mm-row-sub">· ' + escapeHTML(state.shippingDeadline) + '</span>';
      freteLabelParts += '</span>';
      rows +=
        '<div class="mm-row">' +
          freteLabelParts +
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
    var existing = document.getElementById('mm-layout');
    if (existing) {
      /* Safety: se o Magazord reparentou pra dentro de .container,
         move de volta pra ser filho direto do mainArea. Senão o
         mm-shadow-mode joga o .container pai offscreen junto. */
      if (existing.parentElement !== mainArea) {
        mainArea.insertBefore(existing, mainArea.firstChild);
      }
      return existing;
    }

    var layout = document.createElement('div');
    layout.id = 'mm-layout';

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
            /* nudge slot removed — shipping communicated via summary line */ '' +
            /* CEP card */
            '<div class="mm-cep">' +
              '<div class="mm-cep-label">' +
                '<span class="mm-cep-label-text">Calcular frete</span>' +
                '<a class="mm-cep-label-link" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a>' +
              '</div>' +
              /* Ignore attributes pra password managers não interferirem.
                 Bitwarden, 1Password, LastPass e Dashlane respeitam combinações
                 diferentes — aplica todos pra cobrir o máximo possível.
                 Também usa name="mm_cep_calc" (não "cep" / "postal" / "zip")
                 pra evitar heurísticas de form-field matching. */
              '<div class="mm-cep-row">' +
                '<input type="text" class="mm-input" id="mm-cep-input"' +
                  ' name="mm_cep_calc"' +
                  ' inputmode="numeric"' +
                  ' maxlength="9"' +
                  ' placeholder="00000-000"' +
                  ' autocomplete="off"' +
                  ' data-lpignore="true"' +
                  ' data-1p-ignore="true"' +
                  ' data-bwignore="true"' +
                  ' data-form-type="other"' +
                  ' aria-label="CEP" />' +
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

    /* IMPORTANTE: insere direto no mainArea (não no .container).
       O CSS mm-shadow-mode joga > * (filhos diretos do mainArea) offscreen,
       então o mm-layout precisa ser filho direto pra escapar do hide.
       Caso contrário o .container que envolve nosso layout vai offscreen
       e o mm-layout vai junto, mesmo com :not(#mm-layout) no seletor. */
    mainArea.insertBefore(layout, mainArea.firstChild);
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

    /* nudge slot intentionally left empty — shipping info handled by drawer */

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
        /* WhatsApp help — ABAIXO do summary (contexto de dúvida = ver o total) */
        '<a class="mm-help mm-sum-help" href="' + MM_WHATSAPP_URL + '" target="_blank" rel="noopener" data-mm-track="help-whats-sum">' +
          ICON.whats +
          '<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span>' +
        '</a>' +
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

        /* política de privacidade */
        '<p class="mm-id-lgpd">Ao continuar, você concorda com nossa <a href="/politica-de-privacidade" target="_blank" rel="noopener">Política de Privacidade</a></p>' +
      '</section>'
    );
  }

  /* ----- monta o layout completo do identify ----- */
  function buildIdentifyLayout(snap) {
    var existing = document.getElementById('mm-layout');
    if (existing) {
      if (existing.parentElement !== mainArea) {
        mainArea.insertBefore(existing, mainArea.firstChild);
      }
      return existing;
    }

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
    mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',
    user: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',
    doc: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 12h8v2H8zm0 4h5v2H8z"/></svg>',
    phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>',
    pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
    home: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
    /* Fase 4 — step 3 payment (todos filled, 24px) */
    /* PIX — logo oficial via svgrepo.com/download/500416/pix.svg */
    pix: '<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M11.917 11.71a2.046 2.046 0 0 1-1.454-.602l-2.1-2.1a.4.4 0 0 0-.551 0l-2.108 2.108a2.044 2.044 0 0 1-1.454.602h-.414l2.66 2.66c.83.83 2.177.83 3.007 0l2.667-2.668h-.253zM4.25 4.282c.55 0 1.066.214 1.454.602l2.108 2.108a.39.39 0 0 0 .552 0l2.1-2.1a2.044 2.044 0 0 1 1.453-.602h.253L9.503 1.623a2.127 2.127 0 0 0-3.007 0l-2.66 2.66h.414z"/><path d="m14.377 6.496-1.612-1.612a.307.307 0 0 1-.114.023h-.733c-.379 0-.75.154-1.017.422l-2.1 2.1a1.005 1.005 0 0 1-1.425 0L5.268 5.32a1.448 1.448 0 0 0-1.018-.422h-.9a.306.306 0 0 1-.109-.021L1.623 6.496c-.83.83-.83 2.177 0 3.008l1.618 1.618a.305.305 0 0 1 .108-.022h.901c.38 0 .75-.153 1.018-.421L7.375 8.57a1.034 1.034 0 0 1 1.426 0l2.1 2.1c.267.268.638.421 1.017.421h.733c.04 0 .079.01.114.024l1.612-1.612c.83-.83.83-2.178 0-3.008z"/></svg>',
    cardBig: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>',
    barcode: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 6h2v12H2zm3 0h1v12H5zm2 0h3v12H7zm4 0h1v12h-1zm3 0h2v12h-2zm3 0h1v12h-1zm2 0h3v12h-3z"/></svg>',
    editPencil: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>'
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

        /* trust strip — WhatsApp help foi movido pra sidebar (abaixo do summary) */
        '<div class="mm-trust mm-id-trust">' +
          '<span class="mm-trust-item">' + ICON.lock + '<span>Pagamento seguro</span></span>' +
          '<span class="mm-trust-item">' + ICON.rotate + '<span>7 dias para troca</span></span>' +
          '<span class="mm-trust-item">' + ICON.shield + '<span>Garantia 12 meses</span></span>' +
        '</div>' +
      '</section>'
    );
  }

  /* ----- monta layout completo do onepage ----- */
  function buildOnepageLayout(snap, prefilledEmail) {
    var existing = document.getElementById('mm-layout');
    if (existing) {
      if (existing.parentElement !== mainArea) {
        mainArea.insertBefore(existing, mainArea.firstChild);
      }
      return existing;
    }

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
    /* state = { value: number|0, deadline: string, name: string, city: string, options: array } */
    var isFree = state.value === 0;
    var valueLabel = isFree
      ? '<strong class="mm-op-frete-value is-free">Grátis</strong>'
      : '<strong class="mm-op-frete-value">' + formatBRL(state.value) + '</strong>';
    var nameLabel = state.name
      ? '<span class="mm-op-frete-name">' + escapeHTML(state.name) + '</span>'
      : '';
    var deadlineLabel = state.deadline
      ? '<span class="mm-op-frete-deadline">Entrega em ' + escapeHTML(state.deadline) + '</span>'
      : '';
    var cityLabel = state.city
      ? '<span class="mm-op-frete-city">para ' + escapeHTML(state.city) + '</span>'
      : '';

    /* Se tem múltiplas opções, mostra a selecionada + link "alterar" */
    var optionsHTML = '';
    if (state.options && state.options.length > 1) {
      optionsHTML =
        '<div class="mm-op-frete-options">' +
          '<button type="button" class="mm-op-frete-toggle" data-mm-act="toggle-frete-opts" aria-expanded="false">' +
            'Ver outras opções (' + state.options.length + ')' +
          '</button>' +
          '<div class="mm-op-frete-options-list" hidden>';
      for (var oi = 0; oi < state.options.length; oi++) {
        var opt = state.options[oi];
        var sel = opt.isSelected ? ' is-selected' : '';
        var ov = opt.isFree
          ? '<span class="mm-op-frete-opt-value is-free">Grátis</span>'
          : '<span class="mm-op-frete-opt-value">' + formatBRL(opt.value) + '</span>';
        optionsHTML +=
          '<button type="button" class="mm-op-frete-opt' + sel + '" data-mm-act="op-ship-select" data-ship-id="' + escapeHTML(opt.id) + '" aria-pressed="' + (opt.isSelected ? 'true' : 'false') + '">' +
            '<span class="mm-op-frete-opt-radio" aria-hidden="true"><span></span></span>' +
            '<span class="mm-op-frete-opt-body">' +
              '<span class="mm-op-frete-opt-name">' + escapeHTML(opt.name || 'Padrão') + '</span>' +
              (opt.deadline ? '<span class="mm-op-frete-opt-deadline">' + escapeHTML(opt.deadline) + '</span>' : '') +
            '</span>' +
            ov +
          '</button>';
      }
      optionsHTML += '</div></div>';
    }

    slot.innerHTML =
      '<div class="mm-op-frete-card' + (isFree ? ' is-free' : '') + '">' +
        '<div class="mm-op-frete-icon">' + ICON.truck + '</div>' +
        '<div class="mm-op-frete-body">' +
          '<div class="mm-op-frete-row">' +
            nameLabel +
            valueLabel +
          '</div>' +
          deadlineLabel +
          cityLabel +
        '</div>' +
      '</div>' +
      optionsHTML;
  }

  /* Lê frete do DOM Magazord — retorna { value, deadline, name, city, options[] }
     Suporta tanto cart (.frete-calculado com .servico-frete) quanto onepage
     (.info-frete-selec com .item-frete + .dias-entrega). */
  function readFreteFromDom() {
    function parseDeadline(text) {
      if (!text) return '';
      var m = text.match(/(\d+(?:\s*[aà]\s*\d+)?)\s*dias?(?:\s*\([^)]+\))?\s*([úu]teis)?/i);
      if (!m) return '';
      return m[1].replace(/\s+/g, ' ') + ' dias úteis';
    }

    /* Lê todas as opções de modalidade — funciona em qualquer página
       que tenha .frete-calculado com .servico-frete (cart e às vezes onepage) */
    function readOptions(scope) {
      var out = [];
      var servEls = scope.querySelectorAll('.servico-frete');
      for (var i = 0; i < servEls.length; i++) {
        var s = servEls[i];
        var radio = s.querySelector('input[type="radio"]');
        var prazoEl = s.querySelector('.dias-entrega');
        var valor = parseFloat(s.getAttribute('data-valor-frete') || '0');
        var nome = s.getAttribute('data-servico-frete') || '';
        var prazoText = prazoEl ? prazoEl.textContent.trim() : '';
        var pm = prazoText.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i);
        out.push({
          id: radio ? radio.value : '',
          name: nome,
          deadline: pm ? pm[1].replace(/\s+/g, ' ') : prazoText,
          value: valor,
          isFree: valor === 0,
          isSelected: radio ? radio.checked : false
        });
      }
      return out;
    }

    /* 1) .frete-calculado existe (cart + às vezes onepage com cálculo recente) */
    var freteEl = mainArea.querySelector('.frete-calculado');
    if (freteEl && freteEl.textContent.trim()) {
      var options = readOptions(freteEl);
      var cityEl = freteEl.querySelector('.frete-location .city');
      var city = cityEl ? cityEl.textContent.trim() : '';
      var selected = options.filter(function(o) { return o.isSelected; })[0] || options[0];
      if (selected) {
        return {
          value: selected.value,
          name: selected.name,
          deadline: selected.deadline,
          city: city,
          options: options
        };
      }
      /* Fallback: parse pelo .info-frete-selec se .servico-frete não existir */
      var infoTitle = freteEl.querySelector('.info-frete-selec .info-title span, .info-title span');
      var diasEl = freteEl.querySelector('.info-frete-selec .dias-entrega, .dias-entrega');
      var valEl = freteEl.querySelector('.value.valor-frete, .valor-frete .value');
      var rawTxt = freteEl.textContent;
      var val = null;
      if (valEl) {
        if (/gr[aá]tis/i.test(valEl.textContent)) val = 0;
        else val = parseBRL(valEl.textContent);
      }
      if (val === null) {
        if (/gr[aá]tis/i.test(rawTxt)) val = 0;
        else val = parseBRL(rawTxt) || null;
      }
      if (val !== null) {
        return {
          value: val,
          name: infoTitle ? infoTitle.textContent.trim() : '',
          deadline: diasEl ? parseDeadline(diasEl.textContent) : parseDeadline(rawTxt),
          city: city,
          options: []
        };
      }
    }

    /* 2) Onepage: .line-entrega (Magazord nativo, simples) — Magazord onepage
       só expõe o valor final, não as modalidades. Mergeia com snapshot pra
       recuperar nome/prazo/opções salvos pelo cart. */
    var lineEntrega = mainArea.querySelector('.line-entrega');
    var valorFreteEl = mainArea.querySelector('.value.valor-frete, .valor-frete .value');
    if (lineEntrega || valorFreteEl) {
      var fullText = ((lineEntrega || valorFreteEl).textContent || '').trim();
      var snap = loadCartSnapshot();
      var snapName = snap ? (snap.shippingName || '') : '';
      var snapDeadline = snap ? (snap.shippingDeadline || '') : '';
      var snapCity = snap ? (snap.shippingCity || '') : '';
      var snapOptions = snap ? (snap.shippingOptions || []) : [];

      if (fullText) {
        var nome2 = (mainArea.querySelector('.nome-servico-frete, .info-frete-selec .info-title span') || {}).textContent || '';
        var infoEntrega = (mainArea.querySelector('.info-entrega, .prazo-entrega, .line-entrega .sub, .info-frete-selec .dias-entrega') || {}).textContent || '';
        var deadline = parseDeadline(infoEntrega) || parseDeadline(fullText) || snapDeadline;
        var name = nome2.trim() || snapName;
        if (/gr[aá]tis/i.test(fullText)) return { value: 0, deadline: deadline, name: name, city: snapCity, options: snapOptions };
        var p = parseBRL(fullText);
        if (p > 0) return { value: p, deadline: deadline, name: name, city: snapCity, options: snapOptions };
      }

      /* fallback puro: usa snapshot se DOM existe mas vazio */
      if (snap && snap.shipping !== null && snap.shipping !== undefined) {
        return {
          value: snap.shipping,
          deadline: snapDeadline,
          name: snapName,
          city: snapCity,
          options: snapOptions
        };
      }
    }

    return null;
  }

  /* calcFreteOnepage — dedupe por CEP: só recalcula se o CEP mudou desde
     o último cálculo. Evita múltiplos polls concorrentes ao digitar número. */
  function calcFreteOnepage() {
    var cepInput = document.getElementById('mm-op-cep');
    if (!cepInput) return;
    var digits = (cepInput.value || '').replace(/\D/g, '');
    if (digits.length !== 8) return;

    /* Dedupe: se já calculamos pra este CEP e o resultado está no slot,
       não recalcula. Previne bug de keystroke no número disparar fetch. */
    if (calcFreteOnepage._lastCep === digits) {
      var slot = document.getElementById('mm-op-frete-slot');
      if (slot && slot.querySelector('.mm-op-frete-card')) return;
    }
    calcFreteOnepage._lastCep = digits;

    /* Token cancela polls anteriores — novo cálculo invalida o anterior */
    var myToken = (calcFreteOnepage._token || 0) + 1;
    calcFreteOnepage._token = myToken;

    saveCep(digits);

    var hidden = mainArea.querySelector('#cep, .input-cep');
    if (hidden) {
      hidden.value = formatCep(digits);
      triggerInputEvent(hidden);
    }

    renderFreteResult('loading');

    try {
      if (window.Zord && window.Zord.Cart && typeof window.Zord.Cart.calculaFreteCarrinho === 'function') {
        window.Zord.Cart.calculaFreteCarrinho();
      }
    } catch (e) {}

    var attempts = 0;
    var maxAttempts = 18;
    function pollFrete() {
      /* Cancelado por cálculo mais recente? aborta silenciosamente */
      if (calcFreteOnepage._token !== myToken) return;
      attempts++;
      var result = readFreteFromDom();
      if (result) {
        renderFreteResult(result);
        var snap = loadCartSnapshot();
        if (snap) {
          snap.shipping = result.value;
          snap.shippingDeadline = result.deadline;
          snap.shippingName = result.name || '';
          snap.shippingCity = result.city || '';
          snap.shippingOptions = result.options || [];
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

    /* Click handlers — frete options + toggle */
    layout.addEventListener('click', function(e) {
      var toggle = e.target.closest('[data-mm-act="toggle-frete-opts"]');
      if (toggle) {
        e.preventDefault();
        var list = toggle.parentElement.querySelector('.mm-op-frete-options-list');
        if (list) {
          var hidden = list.hasAttribute('hidden');
          if (hidden) list.removeAttribute('hidden'); else list.setAttribute('hidden', '');
          toggle.setAttribute('aria-expanded', hidden ? 'true' : 'false');
          toggle.textContent = hidden ? 'Ocultar opções' : 'Ver outras opções';
        }
        return;
      }
      var optBtn = e.target.closest('[data-mm-act="op-ship-select"]');
      if (optBtn) {
        e.preventDefault();
        var modId = optBtn.getAttribute('data-ship-id');
        if (!modId) return;
        var radio = mainArea.querySelector('.servico-frete input[type="radio"][value="' + modId + '"]');
        if (!radio) {
          console.warn('[mm-op] modalidade não encontrada no DOM:', modId);
          return;
        }
        /* Optimistic UI */
        var btns = layout.querySelectorAll('.mm-op-frete-opt');
        for (var i = 0; i < btns.length; i++) {
          var b = btns[i];
          var match = b.getAttribute('data-ship-id') === modId;
          b.classList.toggle('is-selected', match);
          b.setAttribute('aria-pressed', match ? 'true' : 'false');
        }
        radio.checked = true;
        radio.click();
        /* Re-poll the frete result após Magazord recalcular */
        setTimeout(function() {
          var result = readFreteFromDom();
          if (result) {
            renderFreteResult(result);
            var snap = loadCartSnapshot();
            if (snap) {
              snap.shipping = result.value;
              snap.shippingDeadline = result.deadline;
              snap.shippingName = result.name || '';
              snap.shippingOptions = result.options || [];
              STORAGE.set(CART_SNAPSHOT_KEY, JSON.stringify(snap));
              rehydrateIdentifySummary(snap);
            }
          }
        }, 700);
        return;
      }
    });

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

      /* NÃO limpa draft aqui — usuário pode voltar pro onepage e ainda
         deve encontrar seus dados preenchidos. Draft expira em 24h ou
         é limpo em /checkout/done quando o pedido é confirmado. */

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
      }
      /* Nota: NÃO recalcula frete no input número — o CEP já é suficiente
         pro Magazord calcular (o número influencia só a entrega física,
         não o valor/prazo do frete). Recalcular a cada keystroke causava
         múltiplos polls concorrentes e prazo perdido. Dedupe em calcFreteOnepage
         + trigger único no handleCepComplete resolvem o problema. */

      /* Persiste draft do form (debounced 400ms) */
      if (t.id && t.id.indexOf('mm-op-') === 0) {
        if (bindOnepageEvents._draftTimer) clearTimeout(bindOnepageEvents._draftTimer);
        bindOnepageEvents._draftTimer = setTimeout(saveOnepageDraft, 400);
      }
    });

    /* Flush imediato em blur + beforeunload — cobre reloads rápidos
       e navegações antes do debounce disparar. */
    function flushDraftSave() {
      if (bindOnepageEvents._draftTimer) {
        clearTimeout(bindOnepageEvents._draftTimer);
        bindOnepageEvents._draftTimer = null;
      }
      saveOnepageDraft();
    }
    layout.addEventListener('blur', function(e) {
      var t = e.target;
      if (t && t.id && t.id.indexOf('mm-op-') === 0) flushDraftSave();
    }, true);
    window.addEventListener('beforeunload', flushDraftSave);
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

  /* Submit final: estratégia híbrida.
     1. Preenche TODOS os fields Magazord (anonymous _3 + PF _2 + endereço)
     2. Mostra overlay fullscreen "Processando..."
     3. Remove shadow-mode + hide #mm-layout (Magazord original visible offscreen)
     4. Clica no button visible "Próxima etapa" do Magazord
     5. Magazord JS faz toda a chain interna (POSTs + cliques + navegação)
     6. Overlay persiste até /payment carregar

     Por que essa abordagem: o Magazord JS interno tem callbacks complexos
     (animações fade, validação, fingerprint, sessão state) que são frágeis
     pra replicar via fetch direto. Deixar o Magazord rodar nativo é robusto. */
  function showSubmitOverlay(message) {
    if (document.getElementById('mm-op-overlay')) return;
    var overlay = document.createElement('div');
    overlay.id = 'mm-op-overlay';
    overlay.innerHTML =
      '<div class="mm-op-overlay-card">' +
        '<div class="mm-op-overlay-spinner"></div>' +
        '<p class="mm-op-overlay-text">' + escapeHTML(message || 'Processando...') + '</p>' +
      '</div>';
    document.body.appendChild(overlay);
  }

  function submitOnepageToMagazord(data) {
    var nomeT = data.nome.trim();
    var emailT = data.email.trim();
    var ruaT = data.rua.trim();
    var bairroT = data.bairro.trim();
    var cidadeT = data.cidade.trim();
    var ufT = data.uf.trim();
    var cepF = formatCep(data.cep.replace(/\D/g, ''));

    /* Persiste pra próximas telas */
    STORAGE.set('mm_user_email', emailT);

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

    /* IDs do form anonymous (Compra sem cadastro) — anonymous flow tem
       sufixos mistos: nome/cpf/tel = _2, email = _3 */
    setVal('#nome-completo_2', nomeT);
    setVal('#cpf_2', data.cpf);
    setVal('#email_3', emailT);
    setVal('#telefone_2', data.tel);

    /* Form de endereço — todos sem sufixo, plus #destinatario que é
       específico do form endereço (mesmo valor que nome) */
    setVal('#cep', cepF);
    setVal('#destinatario', nomeT);
    setVal('#logradouro', ruaT);
    setVal('#numero', data.num);
    setVal('#complemento', data.comp);
    setVal('#bairro', bairroT);
    setVal('#cidade', cidadeT);
    setVal('#estado', ufT);

    /* Show overlay loading fullscreen */
    showSubmitOverlay('Indo para o pagamento...');

    /* Hide nosso layout + remove shadow-mode pra Magazord ficar no flow
       normal (overlay esconde visualmente). Magazord JS roda a chain
       interna nativa (form transitions + POSTs + navegação). */
    setTimeout(function() {
      var layout = document.getElementById('mm-layout');
      if (layout) layout.style.display = 'none';
      mainArea.classList.remove('mm-shadow-mode');

      /* Helper: encontra form ATUALMENTE visible que contém um input
         específico (ID conhecido por ser sempre presente naquele step) */
      function findFormByInputId(id) {
        var input = mainArea.querySelector('#' + id);
        if (!input) return null;
        return input.closest('form');
      }

      /* STEP 1 — submit form anonymous (dados pessoais).
         requestSubmit() é mais robusto que btn.click() porque dispara o
         submit handler nativo do form, que o Magazord JS escuta. */
      function submitStep1() {
        var f1 = findFormByInputId('nome-completo_2');
        if (f1 && typeof f1.requestSubmit === 'function') {
          f1.requestSubmit();
          return true;
        }
        if (f1) { f1.submit(); return true; }
        return false;
      }

      /* STEP 2/3 — submit form de endereço. O CEP pode estar num form
         intermediário (button-cep "Continuar") ou no form completo de
         endereço (button-endereco "Cadastrar endereço"). Tentamos
         requestSubmit em qualquer form que contenha #cep. */
      function submitEnderecoForm() {
        var f = findFormByInputId('cep');
        if (f && typeof f.requestSubmit === 'function') {
          f.requestSubmit();
          return true;
        }
        if (f) { f.submit(); return true; }
        return false;
      }

      setTimeout(function() {
        submitStep1();

        /* Aguarda ~1.5s pro POST etapa 1 + DOM transition pra etapa 2 */
        setTimeout(function() {
          submitEnderecoForm();

          /* Aguarda Magazord chegar no step 3 (pagamento — forma-pagto-pix
             aparece). NÃO navegamos pra /checkout/payment porque o flow
             Magazord onepage tem dados + endereço + pagamento INLINE
             na mesma URL — /checkout/payment é só a tela de processing/done.

             Quando detectamos os radios de pagamento → Fase 4 hijack:
             re-ativa shadow-mode + re-renderiza #mm-layout com nosso
             step 3 premium (radios PIX/cartão/boleto, cartão form inline,
             botão Finalizar compra). Os forms nativos Magazord ficam
             hidden atrás, sincronizamos valores via native setter e
             delegamos o submit final pra form.requestSubmit(). */
          var paymentDetectAttempts = 0;
          function pollForPaymentStep() {
            paymentDetectAttempts++;
            var paymentRadio = document.querySelector('input[name="forma-pagto"], #forma-pagto-pix, #forma-pagto-cartao, #forma-pagto-boleto');
            if (paymentRadio && paymentRadio.offsetParent !== null) {
              /* Magazord chegou no step 3 — hijack pra nosso layout premium */
              try {
                mountStep3Payment(data);
              } catch (e) {
                /* Fallback: se o hijack falhar, remove overlay e deixa o
                   user no Magazord native (degradação graceful) */
                var ovErr = document.getElementById('mm-op-overlay');
                if (ovErr) ovErr.remove();
                var layoutErr = document.getElementById('mm-layout');
                if (layoutErr) layoutErr.style.display = 'none';
              }
              return;
            }
            if (paymentDetectAttempts < 30) {
              setTimeout(pollForPaymentStep, 250);
            } else {
              /* Timeout — algo deu errado, remove overlay mesmo assim
                 pra user não ficar travado na tela de loading */
              var ov2 = document.getElementById('mm-op-overlay');
              if (ov2) ov2.remove();
            }
          }
          setTimeout(pollForPaymentStep, 800);
        }, 1500);
      }, 150);
    }, 100);
  }

  /* =============================================
     FASE 4 — Step 3 Payment (inline no /onepage)
     =============================================
     Hijack quando Magazord chega no step 3 de pagamento. Re-renderiza
     #mm-layout com UI premium: radios PIX/cartão/boleto, cartão form com
     auto-detect de bandeira + parcelas sincronizadas com Zord, summary
     lateral com total dinâmico por forma selecionada, trust máximo.

     Mental models aplicados:
     - Goal-gradient: stepper "Pagamento" ativo + copy "última etapa"
     - Loss aversion: PIX badge "Economize R$ X" + anchor no cartão
     - Default effect: PIX pre-selecionado (respeita Zord default)
     - Progressive disclosure: cartão form só expande quando ativo
     - Commitment & consistency: summary lateral reforça passos concluídos
     - Regret aversion: trust signals + garantia próximos ao CTA
     ========================================== */

  /* Lê Zord.Calculo.FormasPagamentoPedido e consolida info por forma.
     Retorna objeto { pix: {...}, cartao: {...}, boleto: {...} } com
     preços, parcelas e condições — robusto a estruturas variáveis.

     Estratégia de detecção ROBUSTA (2 passadas):
     1) Cartão: isCartao=true (pode ter múltiplos gateways — pega o mais rico)
     2) PIX / Boleto: ambos têm isCartao=false e label "À Vista" genérico,
        então NÃO dá pra distinguir por nome. Usamos fonte confiável: DOM
        do Magazord native — o forma-pagto-pix radio tem o valorTotal real
        e o forma-pagto-boleto também. Linkamos cada forma Magazord ao
        id do Zord por meio do data-pagamento-tipo ou pelo form[name]. */
  function readFormasPagamento() {
    var out = { pix: null, cartao: null, boleto: null };
    var list = [];
    try {
      list = (window.Zord && window.Zord.Calculo && window.Zord.Calculo.FormasPagamentoPedido) || [];
    } catch (e) {}

    /* Cartão: iteração por isCartao flag */
    list.forEach(function(fp) {
      var formaId = fp.formaPagamento && fp.formaPagamento.id;
      var isCartao = fp.formaPagamento && fp.formaPagamento.isCartao;
      var condicoes = fp.condicoes || [];
      if (!condicoes.length || !isCartao) return;

      if (!out.cartao || condicoes.length > out.cartao.condicoes.length) {
        out.cartao = {
          formaId: formaId,
          valorTotal: condicoes[0].valorTotal,
          condicoes: condicoes.map(function(c) {
            return {
              nome: c.condicaoPagamento && c.condicaoPagamento.nome,
              numParcelas: c.condicaoPagamento && c.condicaoPagamento.numeroParcelas,
              valorParcela: c.valorParcela,
              valorTotal: c.valorTotal
            };
          })
        };
      }
    });

    /* PIX: fonte primária = DOM Magazord (#valor-total-pedido-pix ou
       data-valor-total no elemento PIX). Fonte secundária = Zord list
       com formaId=17 (id padrão Magazord pra PIX). */
    function parseValorFromEl(el) {
      if (!el) return 0;
      var dv = el.getAttribute && el.getAttribute('data-valor-total');
      if (dv) { var v = parseFloat(dv); if (v > 0) return v; }
      var txt = (el.textContent || '').replace(/[^\d,.]/g, '');
      /* BRL: "1.234,56" → "1234.56" */
      if (txt.indexOf(',') !== -1) {
        txt = txt.replace(/\./g, '').replace(',', '.');
      }
      return parseFloat(txt) || 0;
    }

    /* PIX real: lê do form nativo pix */
    var pixEl = document.querySelector('#valor-total-pedido-pix, .valor-total-pix[data-valor-total]');
    var pixVal = parseValorFromEl(pixEl);
    if (pixVal > 0) {
      out.pix = { formaId: 17, valorTotal: pixVal };
    } else {
      /* Fallback: Zord list id=17 */
      var pixFp = list.find && list.find(function(fp) {
        return fp.formaPagamento && fp.formaPagamento.id === 17;
      });
      if (pixFp && pixFp.condicoes && pixFp.condicoes[0]) {
        out.pix = { formaId: 17, valorTotal: pixFp.condicoes[0].valorTotal };
      }
    }

    /* BOLETO real: lê do form nativo boleto */
    var boletoEl = document.querySelector('#valor-total-pedido-boleto, .valor-total-boleto[data-valor-total]');
    var boletoVal = parseValorFromEl(boletoEl);
    if (boletoVal > 0) {
      out.boleto = { valorTotal: boletoVal };
    } else {
      /* Fallback: Zord list — primeiro não-cartão, não-id-17 */
      var bolFp = list.find && list.find(function(fp) {
        var fpId = fp.formaPagamento && fp.formaPagamento.id;
        var fpCart = fp.formaPagamento && fp.formaPagamento.isCartao;
        return !fpCart && fpId !== 17 && fp.condicoes && fp.condicoes.length;
      });
      if (bolFp) {
        out.boleto = { formaId: bolFp.formaPagamento.id, valorTotal: bolFp.condicoes[0].valorTotal };
      }
    }

    /* Cartão fallback: se não pegou da Zord list, pega do DOM */
    if (!out.cartao) {
      var carEl = document.querySelector('.valor-parcela-cartao');
      if (carEl) {
        var parcNum = parseValorFromEl(carEl);
        if (parcNum > 0) {
          out.cartao = { valorTotal: parcNum * 12, condicoes: [] };
        }
      }
    }

    return out;
  }

  /* Hijack principal: re-ativa shadow-mode + re-renderiza #mm-layout
     com o step 3 payment UI + bind de eventos. */
  function mountStep3Payment(userData) {
    var snap = loadCartSnapshot();
    var formas = readFormasPagamento();

    /* Re-ativa shadow-mode (tinha sido removido no submit chain) */
    mainArea.classList.add('mm-shadow-mode');
    document.body.classList.add('mm-checkout-rebuild');

    /* Rebuild layout — CRÍTICO: sempre garantir que o mm-layout seja
       filho DIRETO do mainArea (não dentro de .container). O CSS
       mm-shadow-mode joga > * offscreen, então se o layout estiver
       wrapped em .container, ele vai offscreen junto. Magazord
       re-renderiza o mainArea na transição pro step 3 — o layout
       existente pode ter sido removido ou reparentado. */
    var layout = document.getElementById('mm-layout');
    if (!layout || layout.parentElement !== mainArea) {
      if (layout && layout.parentElement) {
        layout.parentElement.removeChild(layout);
      }
      layout = document.createElement('div');
      layout.id = 'mm-layout';
      mainArea.insertBefore(layout, mainArea.firstChild);
    }
    layout.className = 'mm-op-layout mm-op-step3-layout';
    layout.style.display = '';
    layout.innerHTML = buildStep3Layout(snap, userData, formas);

    /* Remove anti-flicker class se ainda ativa */
    document.documentElement.classList.remove('mm-cart-loading');

    /* Remove overlay */
    var ov = document.getElementById('mm-op-overlay');
    if (ov) ov.remove();

    /* Scroll top pra user ver header + stepper */
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { window.scrollTo(0, 0); }

    bindStep3Events(userData, formas);
  }

  function buildStep3Layout(snap, userData, formas) {
    var footerHTML = typeof renderGlobalFooter === 'function' ? renderGlobalFooter() : '';

    /* Layout 2-col: payment card sozinho à esquerda, direita com
       dados + endereço + resumo empilhados (mesma coluna do resumo). */
    return (
      renderCheckoutHeader('payment') +
      '<main class="mm-op-main">' +
        '<div class="mm-op-step3-grid">' +
          '<section class="mm-op-step3-left">' +
            renderStep3PaymentCard(formas) +
            renderStep3TrustFooter() +
          '</section>' +
          '<aside class="mm-op-step3-sum-wrap">' +
            renderStep3CompletedCards(userData) +
            renderStep3Summary(snap, formas, 'pix') +
          '</aside>' +
        '</div>' +
      '</main>' +
      footerHTML
    );
  }

  function renderStep3CompletedCards(userData) {
    var u = userData || {};
    var nome = escapeHTML(u.nome || '');
    var email = escapeHTML(u.email || '');
    var cpf = escapeHTML(u.cpf || '');
    var tel = escapeHTML(u.tel || '');
    var rua = escapeHTML(u.rua || '');
    var num = escapeHTML(u.num || '');
    var comp = u.comp ? ', ' + escapeHTML(u.comp) : '';
    var bairro = escapeHTML(u.bairro || '');
    var cidade = escapeHTML(u.cidade || '');
    var uf = escapeHTML(u.uf || '');
    var cep = escapeHTML(u.cep || '');

    return (
      '<div class="mm-op-step3-completed">' +
        '<div class="mm-op-completed-card" data-section="dados">' +
          '<div class="mm-op-completed-head">' +
            '<span class="mm-op-completed-check">' + ICON.check + '</span>' +
            '<h3 class="mm-op-completed-title">Dados pessoais</h3>' +
            '<a href="/checkout/onepage" class="mm-op-completed-edit" data-mm-act="edit-dados" aria-label="Editar dados">' + ICONS_OP.editPencil + ' Editar</a>' +
          '</div>' +
          '<dl class="mm-op-completed-body">' +
            (nome ? '<div><dt>Nome</dt><dd>' + nome + '</dd></div>' : '') +
            (email ? '<div><dt>E-mail</dt><dd>' + email + '</dd></div>' : '') +
            (cpf ? '<div><dt>CPF</dt><dd>' + cpf + '</dd></div>' : '') +
            (tel ? '<div><dt>Telefone</dt><dd>' + tel + '</dd></div>' : '') +
          '</dl>' +
        '</div>' +
        '<div class="mm-op-completed-card" data-section="endereco">' +
          '<div class="mm-op-completed-head">' +
            '<span class="mm-op-completed-check">' + ICON.check + '</span>' +
            '<h3 class="mm-op-completed-title">Endereço de entrega</h3>' +
            '<a href="/checkout/onepage" class="mm-op-completed-edit" data-mm-act="edit-endereco" aria-label="Editar endereço">' + ICONS_OP.editPencil + ' Editar</a>' +
          '</div>' +
          '<address class="mm-op-completed-address">' +
            rua + ', ' + num + comp + '<br>' +
            bairro + ' — ' + cidade + '/' + uf + '<br>' +
            (cep ? 'CEP ' + cep : '') +
          '</address>' +
        '</div>' +
      '</div>'
    );
  }

  function renderStep3PaymentCard(formas) {
    var pixVal = formas.pix ? formas.pix.valorTotal : 0;
    var cartaoVal = formas.cartao ? formas.cartao.valorTotal : 0;
    var boletoVal = formas.boleto ? formas.boleto.valorTotal : 0;
    var save = cartaoVal > pixVal ? cartaoVal - pixVal : 0;

    /* Parcelas label do cartão: última condição (normalmente 12x sem juros) */
    var maxParcela = null;
    if (formas.cartao && formas.cartao.condicoes && formas.cartao.condicoes.length) {
      maxParcela = formas.cartao.condicoes[formas.cartao.condicoes.length - 1];
    }
    var cartaoSub = maxParcela
      ? 'até ' + maxParcela.numParcelas + 'x de ' + formatBRL(maxParcela.valorParcela) + ' sem juros'
      : (cartaoVal > 0 ? 'até 12x sem juros' : 'Cartão de crédito');

    var pixRadio =
      '<label class="mm-op-pay-radio is-active" data-forma="pix">' +
        '<input type="radio" name="mm-pay" value="pix" checked>' +
        '<div class="mm-op-pay-head">' +
          '<span class="mm-op-pay-radio-dot" aria-hidden="true"></span>' +
          '<span class="mm-op-pay-icon">' + ICONS_OP.pix + '</span>' +
          '<div class="mm-op-pay-body">' +
            '<span class="mm-op-pay-title">PIX</span>' +
            '<span class="mm-op-pay-sub">Aprovação instantânea · em 1 minuto</span>' +
          '</div>' +
          '<div class="mm-op-pay-price">' +
            (save > 0 ? '<span class="mm-op-pay-badge-save">Economize ' + formatBRL(save) + '</span>' : '') +
            '<span class="mm-op-pay-amount">' + formatBRL(pixVal) + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="mm-op-pay-detail">' +
          /* Desconto já aparece 2x (badge no header + row no resumo) —
             não duplicar aqui. Só benefícios úteis. */
          '<ul class="mm-op-pay-benefits">' +
            '<li>' + ICON.check + '<span>QR Code e Copia-e-Cola após confirmar</span></li>' +
            '<li>' + ICON.check + '<span>Pedido aprovado em até 1 minuto</span></li>' +
            '<li>' + ICON.check + '<span>Pagamento 100% seguro · sem dados de cartão</span></li>' +
          '</ul>' +
        '</div>' +
      '</label>';

    var bandeirasHTML =
      '<div class="mm-op-pay-brands">' +
        '<img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-visa.svg" alt="Visa" width="32" height="20">' +
        '<img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-mastercard.svg" alt="Mastercard" width="32" height="20">' +
        '<img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-american-express.svg" alt="American Express" width="32" height="20">' +
        '<img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-elo.svg" alt="Elo" width="32" height="20">' +
        '<img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-hipercard.svg" alt="Hipercard" width="32" height="20">' +
      '</div>';

    /* Required asterisk helper — sinaliza campos obrigatórios sem poluir */
    var req = '<span class="mm-op-req" aria-hidden="true">*</span>';
    /* Error slot template — pra cada campo, um <span> aria-live com msg específica on blur */
    function errSlot(id) {
      return '<span class="mm-op-field-err" id="' + id + '-err" role="alert" aria-live="polite"></span>';
    }

    /* Estado inicial: PIX ativo, cartão inativo → inputs do cartão começam
       disabled + autocomplete="off" pra não serem preenchidos pelo
       Bitwarden/password managers. setActiveForma habilita quando o user
       escolhe cartão. (Os data-* guardam o autocomplete original.) */
    var cartaoForm =
      '<div class="mm-op-card-form">' +
        '<div class="mm-op-card-field mm-op-card-field-full">' +
          '<label for="mm-pay-card-num">Número do cartão' + req + '</label>' +
          '<div class="mm-input-wrap mm-input-wrap-card">' +
            '<span class="mm-input-icon" aria-hidden="true">' + ICON.card + '</span>' +
            '<input id="mm-pay-card-num" type="tel" class="mm-input" inputmode="numeric" autocomplete="off" data-mmac="cc-number" placeholder="0000 0000 0000 0000" maxlength="23" aria-describedby="mm-pay-card-num-err" aria-required="true" disabled>' +
            '<span class="mm-op-card-brand-detected" aria-live="polite"></span>' +
          '</div>' +
          errSlot('mm-pay-card-num') +
        '</div>' +
        '<div class="mm-op-card-field mm-op-card-field-full">' +
          '<label for="mm-pay-card-name">Nome impresso no cartão' + req + '</label>' +
          '<input id="mm-pay-card-name" type="text" class="mm-input mm-input-noicon" autocomplete="off" data-mmac="cc-name" placeholder="Como aparece no cartão" maxlength="100" aria-describedby="mm-pay-card-name-err" aria-required="true" disabled>' +
          errSlot('mm-pay-card-name') +
        '</div>' +
        '<div class="mm-op-card-field mm-op-card-field-half">' +
          '<label for="mm-pay-card-exp">Validade' + req + '</label>' +
          '<input id="mm-pay-card-exp" type="tel" class="mm-input mm-input-noicon" inputmode="numeric" autocomplete="off" data-mmac="cc-exp" placeholder="MM/AA" maxlength="5" aria-describedby="mm-pay-card-exp-err" aria-required="true" disabled>' +
          errSlot('mm-pay-card-exp') +
        '</div>' +
        '<div class="mm-op-card-field mm-op-card-field-half">' +
          '<label for="mm-pay-card-cvv">CVV' + req + '</label>' +
          '<input id="mm-pay-card-cvv" type="tel" class="mm-input mm-input-noicon" inputmode="numeric" autocomplete="off" data-mmac="cc-csc" placeholder="000" maxlength="4" aria-describedby="mm-pay-card-cvv-err" aria-required="true" disabled>' +
          errSlot('mm-pay-card-cvv') +
        '</div>' +
        '<div class="mm-op-card-field mm-op-card-field-full">' +
          '<label for="mm-pay-card-installments">Condições de pagamento' + req + '</label>' +
          '<select id="mm-pay-card-installments" class="mm-input mm-input-noicon mm-op-card-installments" aria-describedby="mm-pay-card-installments-err" aria-required="true" disabled>' +
            '<option value="">Digite o cartão pra ver as condições</option>' +
          '</select>' +
          errSlot('mm-pay-card-installments') +
        '</div>' +
      '</div>';

    var cartaoRadio =
      '<label class="mm-op-pay-radio" data-forma="cartao">' +
        '<input type="radio" name="mm-pay" value="cartao">' +
        '<div class="mm-op-pay-head">' +
          '<span class="mm-op-pay-radio-dot" aria-hidden="true"></span>' +
          '<span class="mm-op-pay-icon">' + ICONS_OP.cardBig + '</span>' +
          '<div class="mm-op-pay-body">' +
            '<span class="mm-op-pay-title">Cartão de Crédito</span>' +
            '<span class="mm-op-pay-sub">' + escapeHTML(cartaoSub) + '</span>' +
          '</div>' +
          '<div class="mm-op-pay-price">' +
            '<span class="mm-op-pay-amount">' + formatBRL(cartaoVal) + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="mm-op-pay-detail">' +
          bandeirasHTML +
          cartaoForm +
        '</div>' +
      '</label>';

    var boletoRadio =
      '<label class="mm-op-pay-radio" data-forma="boleto">' +
        '<input type="radio" name="mm-pay" value="boleto">' +
        '<div class="mm-op-pay-head">' +
          '<span class="mm-op-pay-radio-dot" aria-hidden="true"></span>' +
          '<span class="mm-op-pay-icon">' + ICONS_OP.barcode + '</span>' +
          '<div class="mm-op-pay-body">' +
            '<span class="mm-op-pay-title">Boleto Bancário</span>' +
            '<span class="mm-op-pay-sub">Aprovação em 1 a 3 dias úteis</span>' +
          '</div>' +
          '<div class="mm-op-pay-price">' +
            '<span class="mm-op-pay-amount">' + formatBRL(boletoVal) + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="mm-op-pay-detail">' +
          /* Prazo já aparece no sub do header ("Aprovação em 1 a 3 dias úteis")
             — sem warning duplicado. Só benefícios úteis. */
          '<ul class="mm-op-pay-benefits">' +
            '<li>' + ICON.check + '<span>Código de barras enviado por e-mail</span></li>' +
            '<li>' + ICON.check + '<span>Pagamento em banco, lotérica ou app</span></li>' +
            '<li>' + ICON.check + '<span>Vencimento em 3 dias úteis</span></li>' +
          '</ul>' +
        '</div>' +
      '</label>';

    return (
      '<section class="mm-op-step3-card" aria-labelledby="mm-op-step3-h">' +
        '<div class="mm-op-step3-heading">' +
          '<h2 id="mm-op-step3-h" class="mm-h">Como você quer pagar?</h2>' +
          '<p class="mm-op-step3-sub">Última etapa · escolha sua forma de pagamento ' +
            (save > 0 ? '· PIX tem desconto de ' + formatBRL(save) : '') +
          '</p>' +
        '</div>' +
        '<div class="mm-op-pay-radios" role="radiogroup" aria-label="Forma de pagamento">' +
          pixRadio +
          cartaoRadio +
          boletoRadio +
        '</div>' +
        '<button type="button" class="mm-cta mm-op-cta mm-op-finalizar" data-mm-act="finalizar-compra">' +
          ICON.lock +
          '<span class="mm-op-finalizar-label">Finalizar compra · ' + formatBRL(pixVal) + '</span>' +
        '</button>' +
        '<p class="mm-op-finalizar-sub">' +
          ICON.shield +
          '<span>Pagamento seguro · criptografia SSL-256 · seus dados não são armazenados</span>' +
        '</p>' +
      '</section>'
    );
  }

  function renderStep3TrustFooter() {
    return (
      '<div class="mm-op-trust-payment">' +
        '<div class="mm-op-trust-payment-row">' +
          '<span class="mm-trust-item">' + ICON.lock + '<span>Site 100% seguro</span></span>' +
          '<span class="mm-trust-item">' + ICON.shield + '<span>Garantia 12 meses</span></span>' +
          '<span class="mm-trust-item">' + ICON.rotate + '<span>7 dias pra trocar</span></span>' +
          '<span class="mm-trust-item">' + ICON.whats + '<span>Atendimento humano</span></span>' +
        '</div>' +
        '<p class="mm-op-trust-payment-note">Ao finalizar, você concorda com os ' +
          '<a href="/termos-de-uso" target="_blank" rel="noopener">termos de compra</a> e a ' +
          '<a href="/politica-privacidade" target="_blank" rel="noopener">política de privacidade</a>.' +
        '</p>' +
      '</div>'
    );
  }

  /* Summary lateral do step 3 — reaproveita renderIdentifySummary e sobrepõe
     o total baseado na forma ativa (PIX mostra com desconto, cartão/boleto
     mostra valor cheio). Usa um wrapper com .mm-op-step3-sum e data-forma
     pra CSS/JS destacar a opção ativa. */
  function renderStep3Summary(snap, formas, activeForma) {
    if (!snap || !snap.items || !snap.items.length) {
      return (
        '<aside class="mm-id-sum mm-sum mm-op-step3-sum">' +
          '<h2 class="mm-h">Resumo</h2>' +
          '<div class="mm-sum-card">' +
            '<p class="mm-sum-empty">Não conseguimos carregar o resumo do seu pedido.</p>' +
          '</div>' +
        '</aside>'
      );
    }

    var pixVal = formas.pix ? formas.pix.valorTotal : 0;
    var cartaoVal = formas.cartao ? formas.cartao.valorTotal : 0;
    var boletoVal = formas.boleto ? formas.boleto.valorTotal : 0;
    var save = cartaoVal > pixVal ? cartaoVal - pixVal : 0;

    /* Total dinâmico por forma */
    var activeTotal = activeForma === 'pix' ? pixVal : (activeForma === 'boleto' ? boletoVal : cartaoVal);
    var activeLabel = activeForma === 'pix' ? 'no PIX' : (activeForma === 'boleto' ? 'no boleto' : 'no cartão');

    /* Thumbs (até 3) */
    var maxThumbs = 3;
    var displayItems = snap.items.slice(0, maxThumbs);
    var extraCount = snap.items.length - maxThumbs;
    var thumbsHTML = displayItems.map(function(it) {
      var img = it.imgSrc
        ? '<img src="' + escapeHTML(it.imgSrc) + '" alt="' + escapeHTML(it.name) + '" loading="lazy">'
        : '<div class="mm-id-thumb-placeholder">' + ICON.box + '</div>';
      var qtyPrefix = it.quantity > 1 ? '<strong class="mm-id-thumb-qty">' + it.quantity + '×</strong> ' : '';
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
      thumbsHTML += '<div class="mm-id-thumb-more">+ ' + extraCount + ' ' + (extraCount === 1 ? 'item' : 'itens') + ' a mais</div>';
    }

    /* Rows subtotal + frete + desconto */
    var subtotalFull = snap.subtotalFull > 0 ? snap.subtotalFull : snap.subtotalPix;
    var rows =
      '<div class="mm-row">' +
        '<span class="mm-row-label">Subtotal</span>' +
        '<span class="mm-row-value">' + formatBRL(subtotalFull) + '</span>' +
      '</div>';
    if (snap.shipping !== null && snap.shipping !== undefined) {
      var freteValue = snap.shipping === 0
        ? '<span class="mm-row-value is-free">' + ICON.check + ' Grátis</span>'
        : '<span class="mm-row-value">' + formatBRL(snap.shipping) + '</span>';
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
          '<span class="mm-row-label">Cupom' + (snap.couponCode ? ' <span class="mm-row-sub">· ' + escapeHTML(snap.couponCode) + '</span>' : '') + '</span>' +
          '<span class="mm-row-value is-discount">− ' + formatBRL(snap.discount) + '</span>' +
        '</div>';
    }
    if (save > 0 && activeForma === 'pix') {
      rows +=
        '<div class="mm-row mm-row-pix-discount">' +
          '<span class="mm-row-label">' + ICON.bolt + ' Desconto PIX</span>' +
          '<span class="mm-row-value is-discount">− ' + formatBRL(save) + '</span>' +
        '</div>';
    }

    var totalBlock =
      '<div class="mm-total">' +
        '<div class="mm-total-label">Total</div>' +
        '<div class="mm-total-value" data-mm-total>' + formatBRL(activeTotal) + '</div>' +
        '<div class="mm-total-pix" data-mm-total-sub>' +
          '<span>' + activeLabel + '</span>' +
        '</div>' +
      '</div>';

    return (
      '<aside class="mm-id-sum mm-sum mm-op-step3-sum" data-active-forma="' + escapeHTML(activeForma) + '">' +
        '<h2 class="mm-h">Resumo do pedido</h2>' +
        '<div class="mm-sum-card">' +
          '<div class="mm-id-thumbs">' + thumbsHTML + '</div>' +
          '<div class="mm-sum-rows">' + rows + '</div>' +
          totalBlock +
        '</div>' +
      '</aside>'
    );
  }

  /* ============ Bind events ============ */
  function bindStep3Events(userData, formas) {
    var layout = document.getElementById('mm-layout');
    if (!layout || layout._mmStep3Bound) return;
    layout._mmStep3Bound = true;

    var snap = loadCartSnapshot();
    var state = {
      activeForma: 'pix',
      cardNumValid: false,
      cardBrand: null,
      cardInstallments: null, /* {numero, valorParcela} */
      submitting: false
    };

    /* ---- Click delegation: radio cards ---- */
    layout.addEventListener('click', function(e) {
      var radio = e.target.closest('.mm-op-pay-radio');
      if (radio) {
        /* Previne navegação default do label wrapping um input */
        var input = radio.querySelector('input[type="radio"]');
        if (input && !input.checked) {
          e.preventDefault();
          input.checked = true;
          setActiveForma(radio.getAttribute('data-forma'));
        }
        return;
      }

      /* Finalizar compra */
      if (e.target.closest('[data-mm-act="finalizar-compra"]')) {
        e.preventDefault();
        submitFinalizar();
        return;
      }

      /* Editar dados/endereço — recarrega onepage (volta ao form) */
      var editBtn = e.target.closest('[data-mm-act="edit-dados"], [data-mm-act="edit-endereco"]');
      if (editBtn) {
        e.preventDefault();
        location.reload();
        return;
      }
    });

    /* ---- Input delegation: cartão form ---- */
    layout.addEventListener('input', function(e) {
      var t = e.target;
      if (!t || !t.id) return;
      if (t.id === 'mm-pay-card-num') handleCardNumInput(t);
      else if (t.id === 'mm-pay-card-exp') handleCardExpInput(t);
      else if (t.id === 'mm-pay-card-cvv') t.value = (t.value || '').replace(/\D/g, '').slice(0, 4);
    });

    /* ---- Change: parcelas dropdown ---- */
    layout.addEventListener('change', function(e) {
      if (e.target && e.target.id === 'mm-pay-card-installments') {
        var sel = e.target;
        var opt = sel.options[sel.selectedIndex];
        if (opt && opt.value) {
          state.cardInstallments = {
            numero: parseInt(opt.value, 10),
            label: opt.textContent || ''
          };
          /* Sync pro select nativo Magazord */
          syncMagazordInstallments(opt.value);
          clearFieldError('mm-pay-card-installments');
        }
      }
    });

    /* ---- Blur: inline validation (form-cro: validate on blur, não keystroke) ---- */
    layout.addEventListener('blur', function(e) {
      var t = e.target;
      if (!t || !t.id) return;
      var cardFieldIds = ['mm-pay-card-num', 'mm-pay-card-name', 'mm-pay-card-exp', 'mm-pay-card-cvv'];
      if (cardFieldIds.indexOf(t.id) === -1) return;
      validateField(t.id);
    }, true); /* true = captura (blur não bubbles) */

    /* ---- Focus: limpa erro do campo ao re-focar ---- */
    layout.addEventListener('focus', function(e) {
      var t = e.target;
      if (!t || !t.id) return;
      if (/^mm-pay-card-/.test(t.id)) clearFieldError(t.id);
    }, true);

    /* ---- Field validators + error display ---- */
    function showFieldError(id, msg) {
      var input = document.getElementById(id);
      var slot = document.getElementById(id + '-err');
      if (input) {
        input.classList.add('mm-input-error');
        input.setAttribute('aria-invalid', 'true');
      }
      if (slot) {
        slot.textContent = msg;
        slot.classList.add('is-visible');
      }
    }
    function clearFieldError(id) {
      var input = document.getElementById(id);
      var slot = document.getElementById(id + '-err');
      if (input) {
        input.classList.remove('mm-input-error');
        input.removeAttribute('aria-invalid');
      }
      if (slot) {
        slot.textContent = '';
        slot.classList.remove('is-visible');
      }
    }

    /* Valida 1 campo. Retorna true se válido, false+mostra erro se inválido.
       Mensagens específicas por campo (form-cro: error clarity). */
    function validateField(id) {
      var el = document.getElementById(id);
      if (!el) return true;
      var v = (el.value || '').trim();

      if (id === 'mm-pay-card-num') {
        var digits = v.replace(/\D/g, '');
        if (!digits) { showFieldError(id, 'Informe o número do cartão'); return false; }
        if (digits.length < 13) { showFieldError(id, 'Número do cartão incompleto'); return false; }
        if (!luhnCheck(digits)) { showFieldError(id, 'Número do cartão inválido — confira os dígitos'); return false; }
        clearFieldError(id);
        return true;
      }
      if (id === 'mm-pay-card-name') {
        if (!v) { showFieldError(id, 'Informe o nome impresso no cartão'); return false; }
        if (v.split(/\s+/).length < 2) { showFieldError(id, 'Use o nome completo como aparece no cartão'); return false; }
        clearFieldError(id);
        return true;
      }
      if (id === 'mm-pay-card-exp') {
        var expDigits = v.replace(/\D/g, '');
        if (expDigits.length !== 4) { showFieldError(id, 'Informe a validade no formato MM/AA'); return false; }
        var mm = parseInt(expDigits.slice(0, 2), 10);
        var aa = parseInt(expDigits.slice(2), 10);
        if (mm < 1 || mm > 12) { showFieldError(id, 'Mês inválido (01 a 12)'); return false; }
        /* Ano atual 20XX → compara. Se aa < (ano atual % 100) OR (aa == ano atual AND mm < mes atual) → expirado */
        var now = new Date();
        var curYear = now.getFullYear() % 100;
        var curMonth = now.getMonth() + 1;
        if (aa < curYear || (aa === curYear && mm < curMonth)) {
          showFieldError(id, 'Cartão expirado');
          return false;
        }
        clearFieldError(id);
        return true;
      }
      if (id === 'mm-pay-card-cvv') {
        var cvvDigits = v.replace(/\D/g, '');
        if (cvvDigits.length < 3) { showFieldError(id, 'CVV deve ter 3 ou 4 dígitos'); return false; }
        clearFieldError(id);
        return true;
      }
      if (id === 'mm-pay-card-installments') {
        if (!v) { showFieldError(id, 'Selecione o número de parcelas'); return false; }
        clearFieldError(id);
        return true;
      }
      return true;
    }

    /* Luhn check pra validar número de cartão (mod 10) */
    function luhnCheck(num) {
      var sum = 0;
      var alt = false;
      for (var i = num.length - 1; i >= 0; i--) {
        var d = parseInt(num.charAt(i), 10);
        if (alt) { d *= 2; if (d > 9) d -= 9; }
        sum += d;
        alt = !alt;
      }
      return sum % 10 === 0;
    }

    /* ---- Funções ---- */
    function setActiveForma(forma) {
      if (!forma || state.activeForma === forma) return;
      state.activeForma = forma;

      /* Visual: marca o radio card ativo */
      layout.querySelectorAll('.mm-op-pay-radio').forEach(function(el) {
        el.classList.toggle('is-active', el.getAttribute('data-forma') === forma);
      });

      /* Sync pro radio nativo Magazord */
      var nativeRadio = document.getElementById('forma-pagto-' + forma);
      if (nativeRadio && !nativeRadio.checked) {
        try { nativeRadio.click(); } catch (e) {}
      }

      /* Desabilita inputs do cartão quando não for cartão — evita que o
         Bitwarden/password managers tentem autofill em campos invisíveis.
         Inputs disabled são ignorados por form autofill e submission. */
      var cardFormInputs = layout.querySelectorAll('.mm-op-card-form input, .mm-op-card-form select');
      var cardActive = forma === 'cartao';
      cardFormInputs.forEach(function(input) {
        input.disabled = !cardActive;
        /* Toggle autocomplete: restaura o cc-* value original quando ativo,
           força "off" quando inativo. O data-mmac guarda o valor original. */
        if (cardActive) {
          if (input.dataset.mmac) {
            input.setAttribute('autocomplete', input.dataset.mmac);
          }
        } else {
          input.setAttribute('autocomplete', 'off');
        }
      });

      /* Atualiza summary lateral (total + label + destaque) + CTA label */
      updateSummaryForForma(forma);

      /* Se cartão ativo, foca no input do cartão (próximo step lógico) */
      if (forma === 'cartao') {
        setTimeout(function() {
          var cardInput = document.getElementById('mm-pay-card-num');
          if (cardInput && !cardInput.value) cardInput.focus();
        }, 250);
      }
    }

    /* Update cirúrgico — evita o flicker de innerHTML replace.
       Anima só o valor total + swap label + toggle da linha de desconto PIX. */
    function updateSummaryForForma(forma) {
      var sum = layout.querySelector('.mm-op-step3-sum');
      if (!sum) return;
      sum.setAttribute('data-active-forma', forma);

      var pixVal = formas.pix ? formas.pix.valorTotal : 0;
      var cartaoVal = formas.cartao ? formas.cartao.valorTotal : 0;
      var boletoVal = formas.boleto ? formas.boleto.valorTotal : 0;
      var save = cartaoVal > pixVal ? cartaoVal - pixVal : 0;
      var newTotal = forma === 'pix' ? pixVal : (forma === 'boleto' ? boletoVal : cartaoVal);
      var newLabel = forma === 'pix' ? 'no PIX' : (forma === 'boleto' ? 'no boleto' : 'no cartão');

      /* Anima o valor do total de forma incremental */
      var totalEl = sum.querySelector('[data-mm-total]');
      if (totalEl) {
        var fromText = totalEl.textContent || '';
        var fromVal = parseBRL(fromText);
        if (fromVal !== newTotal) {
          animateValue(totalEl, fromVal, newTotal, 360);
        } else {
          totalEl.textContent = formatBRL(newTotal);
        }
      }

      /* Swap label "no PIX" / "no cartão" / "no boleto" */
      var subEl = sum.querySelector('[data-mm-total-sub] span');
      if (subEl && subEl.textContent !== newLabel) {
        subEl.textContent = newLabel;
      }

      /* Toggle row de desconto PIX — aparece só em PIX com save > 0 */
      var rowsEl = sum.querySelector('.mm-sum-rows');
      var discountRow = rowsEl ? rowsEl.querySelector('.mm-row-pix-discount') : null;
      if (forma === 'pix' && save > 0) {
        if (!discountRow && rowsEl) {
          var tmp = document.createElement('div');
          tmp.innerHTML =
            '<div class="mm-row mm-row-pix-discount">' +
              '<span class="mm-row-label">' + ICON.bolt + ' Desconto PIX</span>' +
              '<span class="mm-row-value is-discount">− ' + formatBRL(save) + '</span>' +
            '</div>';
          rowsEl.appendChild(tmp.firstChild);
        }
      } else if (discountRow) {
        discountRow.remove();
      }

      /* Atualiza CTA label também */
      updateCtaLabel(forma);
    }

    /* Animação de número incremental com easing cubic-out */
    function animateValue(el, from, to, duration) {
      if (el._mmAnimToken) cancelAnimationFrame(el._mmAnimToken);
      var start = null;
      var diff = to - from;
      function step(ts) {
        if (!start) start = ts;
        var elapsed = ts - start;
        var t = Math.min(1, elapsed / duration);
        /* easeOutCubic */
        var eased = 1 - Math.pow(1 - t, 3);
        var current = from + diff * eased;
        el.textContent = formatBRL(current);
        if (t < 1) {
          el._mmAnimToken = requestAnimationFrame(step);
        } else {
          el.textContent = formatBRL(to);
          el._mmAnimToken = null;
        }
      }
      el._mmAnimToken = requestAnimationFrame(step);
    }

    function updateCtaLabel(forma) {
      var label = layout.querySelector('.mm-op-finalizar-label');
      if (!label) return;
      var val = forma === 'pix' ? (formas.pix && formas.pix.valorTotal)
              : forma === 'boleto' ? (formas.boleto && formas.boleto.valorTotal)
              : (formas.cartao && formas.cartao.valorTotal);
      label.textContent = 'Finalizar compra · ' + formatBRL(val || 0);
    }

    /* Bandeira detection básica por primeiros dígitos (BIN simplificado).
       Não substitui o backend Zord — só mostra feedback visual imediato. */
    function detectCardBrand(num) {
      var n = (num || '').replace(/\D/g, '');
      if (!n) return null;
      if (/^4/.test(n)) return 'visa';
      if (/^(5[1-5]|22[2-9]|2[3-6]|27[01]|2720)/.test(n)) return 'mastercard';
      if (/^3[47]/.test(n)) return 'amex';
      if (/^(4011|4312|4389|4514|4573|5041|5066|5067|509|6277|6362|6363|650|6516|6550)/.test(n)) return 'elo';
      if (/^(606282|384100|384140|384160|606|637095|637568|637599|637609|637612)/.test(n)) return 'hipercard';
      return null;
    }

    function handleCardNumInput(t) {
      var raw = (t.value || '').replace(/\D/g, '').slice(0, 19);
      /* Formata com espaço a cada 4 dígitos */
      var formatted = raw.replace(/(\d{4})(?=\d)/g, '$1 ');
      if (formatted !== t.value) {
        var pos = t.selectionStart;
        t.value = formatted;
        try { t.setSelectionRange(pos + 1, pos + 1); } catch (e) {}
      }

      /* Detect brand + update UI */
      var brand = detectCardBrand(raw);
      state.cardBrand = brand;
      state.cardNumValid = raw.length >= 13;

      var brandSlot = layout.querySelector('.mm-op-card-brand-detected');
      if (brandSlot) {
        brandSlot.className = 'mm-op-card-brand-detected' + (brand ? ' is-' + brand : '');
        brandSlot.textContent = brand ? brand.toUpperCase() : '';
      }

      /* Sync com Magazord native (trigger Zord BIN detection + parcelas fetch) */
      if (raw.length >= 6) {
        syncMagazordCardNum(raw);
        /* Observer: aguarda o select #pag-cartao-parcela populate e copia opções */
        watchMagazordInstallments();
      }
    }

    function handleCardExpInput(t) {
      var raw = (t.value || '').replace(/\D/g, '').slice(0, 4);
      var formatted = raw.length > 2 ? raw.slice(0, 2) + '/' + raw.slice(2) : raw;
      t.value = formatted;

      /* Quando 5 chars (MM/AA), sync pros selects nativos de validade */
      if (raw.length === 4) {
        var mm = raw.slice(0, 2);
        var aa = '20' + raw.slice(2);
        syncMagazordSelect('pag-cartao-mes-validade', String(parseInt(mm, 10)));
        syncMagazordSelect('pag-cartao-ano-validade', aa);
      }
    }

    function syncMagazordCardNum(num) {
      var native = document.getElementById('pag-cartao-numero');
      if (!native) return;
      try {
        var setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        setter.call(native, num);
      } catch (e) { native.value = num; }
      native.dispatchEvent(new Event('input', { bubbles: true }));
      native.dispatchEvent(new Event('change', { bubbles: true }));
      native.dispatchEvent(new Event('blur', { bubbles: true }));
    }

    function syncMagazordSelect(id, value) {
      var sel = document.getElementById(id);
      if (!sel) return;
      try {
        var setter = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, 'value').set;
        setter.call(sel, value);
      } catch (e) { sel.value = value; }
      sel.dispatchEvent(new Event('change', { bubbles: true }));
    }

    function syncMagazordInstallments(parcelas) {
      syncMagazordSelect('pag-cartao-parcela', parcelas);
    }

    /* Observer nas opções do select nativo de parcelas — quando Zord popula
       após o BIN detection, copia pro nosso select shadow */
    var _installmentsObserver = null;
    function watchMagazordInstallments() {
      if (_installmentsObserver) return;
      var native = document.getElementById('pag-cartao-parcela');
      if (!native) return;

      var ourSelect = document.getElementById('mm-pay-card-installments');
      if (!ourSelect) return;

      function syncOptions() {
        var opts = native.querySelectorAll('option');
        if (opts.length <= 1) return; /* ainda não populou */

        var html = '';
        opts.forEach(function(opt) {
          if (!opt.value) {
            html += '<option value="">Selecione as parcelas</option>';
            return;
          }
          html += '<option value="' + escapeHTML(opt.value) + '">' + escapeHTML(opt.textContent.trim()) + '</option>';
        });
        ourSelect.innerHTML = html;

        /* Auto-seleciona a primeira opção válida (geralmente max parcelas) */
        if (ourSelect.options.length > 1) {
          ourSelect.selectedIndex = 1;
          state.cardInstallments = {
            numero: parseInt(ourSelect.options[1].value, 10) || 1,
            label: ourSelect.options[1].textContent
          };
          /* CRITICAL: also sync the value back to the native select.
             Without this, pag-cartao-parcela stays empty → form submission
             silently fails at Magazord because parcela is required. */
          syncMagazordInstallments(ourSelect.options[1].value);
        }
      }

      syncOptions();
      _installmentsObserver = new MutationObserver(syncOptions);
      _installmentsObserver.observe(native, { childList: true, subtree: true });
    }

    /* Submit final — direciona pro form nativo Magazord correto */
    function submitFinalizar() {
      if (state.submitting) return;

      var forma = state.activeForma;
      var btn = layout.querySelector('.mm-op-finalizar');
      if (!btn) return;

      /* Validação por forma — usa validateField (com textos específicos) */
      if (forma === 'cartao') {
        var fields = ['mm-pay-card-num', 'mm-pay-card-name', 'mm-pay-card-exp', 'mm-pay-card-cvv', 'mm-pay-card-installments'];
        var errors = fields.filter(function(id) { return !validateField(id); });

        if (errors.length) {
          var first = document.getElementById(errors[0]);
          if (first) {
            first.focus();
            try { first.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) {}
          }
          return;
        }

        var name = document.getElementById('mm-pay-card-name');
        var cvv = document.getElementById('mm-pay-card-cvv');

        /* Sync titular + CPF do titular (usa CPF do buyer como default) */
        var titularNative = document.getElementById('pag-cartao-titular');
        if (titularNative) {
          try {
            var setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
            setter.call(titularNative, name.value.trim());
          } catch (e) { titularNative.value = name.value.trim(); }
          titularNative.dispatchEvent(new Event('input', { bubbles: true }));
          titularNative.dispatchEvent(new Event('blur', { bubbles: true }));
        }

        var cvvNative = document.getElementById('pag-cartao-vericacao');
        if (cvvNative) {
          try {
            var setterCvv = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
            setterCvv.call(cvvNative, cvv.value.replace(/\D/g, ''));
          } catch (e) { cvvNative.value = cvv.value.replace(/\D/g, ''); }
          cvvNative.dispatchEvent(new Event('input', { bubbles: true }));
          cvvNative.dispatchEvent(new Event('blur', { bubbles: true }));
        }

        /* CPF do titular (usa o do buyer) */
        var cpfNative = document.getElementById('pag-cartao-cpf');
        if (cpfNative && userData && userData.cpf) {
          try {
            var setterCpf = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
            setterCpf.call(cpfNative, userData.cpf);
          } catch (e) { cpfNative.value = userData.cpf; }
          cpfNative.dispatchEvent(new Event('input', { bubbles: true }));
          cpfNative.dispatchEvent(new Event('blur', { bubbles: true }));
        }
      }

      /* Loading state */
      state.submitting = true;
      btn.classList.add('is-loading');
      btn.setAttribute('aria-busy', 'true');
      var lbl = btn.querySelector('.mm-op-finalizar-label');
      if (lbl) lbl.textContent = 'Processando pagamento...';

      /* Overlay fullscreen (reusa o do F3) */
      showSubmitOverlay('Finalizando seu pedido...');

      /* Re-sync installments BEFORE submit — user may not have touched our
         custom select, so watchMagazordInstallments() auto-selected but
         the native select might still be empty. */
      if (forma === 'cartao') {
        var ourInstSel = document.getElementById('mm-pay-card-installments');
        if (ourInstSel && ourInstSel.value) {
          syncMagazordInstallments(ourInstSel.value);
        }
      }

      function doSubmit() {
        /* Aceita termos bcash se cartão */
        if (forma === 'cartao') {
          var terms = document.getElementById('aceito-termos-bcash-one-card');
          if (terms && !terms.checked) {
            terms.checked = true;
            terms.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }

        /* Pega o form nativo correto por ID */
        var formId = forma === 'pix' ? 'form-pag-pix'
                   : forma === 'boleto' ? 'form-pag-boleto'
                   : 'form-pag-cartao';
        var form = document.getElementById(formId);

        if (form && typeof form.requestSubmit === 'function') {
          try { form.requestSubmit(); }
          catch (e) {
            var btnNative = form.querySelector('button.button-success, button[type="submit"], input[type="submit"]');
            if (btnNative) btnNative.click();
          }
        } else if (form) {
          var btnFallback = form.querySelector('button.button-success, button[type="submit"], input[type="submit"]');
          if (btnFallback) btnFallback.click();
          else form.submit();
        }

        /* Tenta esconder nosso layout pra Magazord assumir (processing page) */
        setTimeout(function() {
          mainArea.classList.remove('mm-shadow-mode');
          if (layout) layout.style.display = 'none';
        }, 400);
      }

      /* Para cartão: espera o token do MercadoPago ficar pronto.
         O input #pag-cartao-token-mp começa com "loading..." e só recebe
         o valor real após a tokenização async do MP (~1-3 seg após digitar).
         Submeter antes causa falha silenciosa (MP rejeita token inválido). */
      if (forma === 'cartao') {
        var tokenStart = Date.now();
        var TOKEN_MAX_WAIT = 12000; // 12 seg max
        (function waitForToken() {
          var tokenEl = document.getElementById('pag-cartao-token-mp');
          var tokenVal = tokenEl ? (tokenEl.value || '').trim() : '';
          var tokenReady = tokenVal && tokenVal !== 'loading...' && tokenVal.length > 10;
          if (tokenReady) {
            doSubmit();
            return;
          }
          if (Date.now() - tokenStart >= TOKEN_MAX_WAIT) {
            // Timeout — try submit anyway (Magazord may recover) or surface error
            console.warn('[mm-checkout] Token MP timeout, submitting anyway');
            doSubmit();
            return;
          }
          setTimeout(waitForToken, 200);
        })();
      } else {
        setTimeout(doSubmit, 500);
      }
    }
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

      /* Liga debug do draft — expose pra user inspecionar no console.
         Desativa com: window._mmDraftDebug = false */
      if (typeof window._mmDraftDebug === 'undefined') window._mmDraftDebug = true;

      buildOnepageLayout(snap, prefilledEmail);
      bindOnepageEvents();

      /* Restaura draft salvo (campos que o user já tinha digitado antes do reload) */
      var draft = restoreOnepageDraft();

      /* Render inicial do frete a partir do snapshot do cart — Magazord
         onepage não expõe modalidades (.servico-frete), só o valor final.
         O snapshot tem nome+prazo+opções porque foi salvo no cart. */
      if (snap && snap.shipping !== null && snap.shipping !== undefined) {
        renderFreteResult({
          value: snap.shipping,
          name: snap.shippingName || '',
          deadline: snap.shippingDeadline || '',
          city: snap.shippingCity || '',
          options: snap.shippingOptions || []
        });
      }

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
    /* Fallback legado: /checkout/payment ainda existe no Magazord mas o fluxo novo
       não navega pra lá (step 3 payment ficou inline em /onepage). Se o usuário
       cair aqui por back button / link externo, deixamos a tela nativa do Magazord
       aparecer — mas precisamos remover mm-cart-loading pra não deixar o spinner
       travado (o anti-flicker roda pra qualquer /checkout/* exceto /done). */
    document.documentElement.classList.remove('mm-cart-loading');

    var cardNumInput = mainArea.querySelector('input[placeholder*="numero do cart" i]');
    if (cardNumInput) cardNumInput.inputMode = 'numeric';

    var cvvInput = mainArea.querySelector('input[placeholder*="000" i]');
    if (cvvInput && (!cvvInput.maxLength || cvvInput.maxLength <= 4)) cvvInput.inputMode = 'numeric';
  }

  /* Safety net: failsafe global — se chegamos até o final da IIFE e a classe
     ainda está presente (ex: algum handler acima teve early-return), remove
     depois de 2s pro spinner não ficar eterno em caso de edge case. */
  setTimeout(function(){
    if (document.documentElement.classList.contains('mm-cart-loading')) {
      console.warn('[mm-cart] failsafe: removing mm-cart-loading after 2s timeout');
      document.documentElement.classList.remove('mm-cart-loading');
    }
  }, 2000);

})();
