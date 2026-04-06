/* =============================================
   CHECKOUT CRO - Madeira Mania
   Melhorias de conversão no checkout mobile

   Features:
   - Trust strip em cada etapa (cart, identify, onepage)
   - Barra dinâmica de frete grátis (cart)
   - Copy melhorada no identify
   - Input types corretos
   - Segurança no form de cartão (onepage)

   Design: UI/UX Pro Max validated
   - SVG icons (stroke-width 2, round caps)
   - Paleta herda do site (#4b664a, #2e7d32)
   - Touch targets min 44px
   - Font-size min 16px inputs

   Executa em: /checkout/*
   ============================================= */

(function initCheckoutCRO() {
  'use strict';

  var path = location.pathname;
  var isCart = path.indexOf('/checkout/cart') !== -1;
  var isIdentify = path.indexOf('/checkout/identify') !== -1;
  var isOnepage = path.indexOf('/checkout/onepage') !== -1 || path.indexOf('/checkout/payment') !== -1;

  if (!isCart && !isIdentify && !isOnepage) return;

  /* Retry — esperar DOM do checkout */
  initCheckoutCRO._retries = (initCheckoutCRO._retries || 0) + 1;
  var mainArea = document.querySelector('#checkout-main-area');
  if (!mainArea) {
    if (initCheckoutCRO._retries < 30) setTimeout(initCheckoutCRO, 500);
    return;
  }

  if (document.getElementById('mm-checkout-cro-done')) return;
  var marker = document.createElement('div');
  marker.id = 'mm-checkout-cro-done';
  marker.style.display = 'none';
  document.body.appendChild(marker);


  /* === HELPER: Trust strip component === */

  function createTrustStrip(id) {
    var strip = document.createElement('div');
    strip.className = 'mm-trust-strip';
    if (id) strip.id = id;

    /* Ícones: Lucide family, stroke 2, todos visual weight similar.
       - Compra segura: lock
       - Troca em 7 dias: rotate-ccw (1 arrow circular, leve)
       - Garantia 12 meses: shield-check (escudo + check dentro) */
    var items = [
      { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>', label: 'Compra segura' },
      { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>', label: 'Troca em 7 dias' },
      { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>', label: 'Garantia 12 meses' }
    ];

    items.forEach(function(item) {
      var span = document.createElement('span');
      span.className = 'mm-trust-strip-item';
      span.innerHTML = item.icon + '<b>' + item.label + '</b>';
      strip.appendChild(span);
    });

    return strip;
  }


  /* === HELPER: Extrair total do carrinho === */

  function extractCartTotal() {
    /* 1. Tentar pegar de .value-content ou .totais-valor (total real do carrinho) */
    var totalEls = mainArea.querySelectorAll('.value-content, .totais-valor');
    for (var t = 0; t < totalEls.length; t++) {
      var txt = totalEls[t].textContent.trim();
      var match = txt.match(/R\$\s*([\d.]+,\d{2})/);
      if (match) {
        var val = parseFloat(match[1].replace(/\./g, '').replace(',', '.'));
        if (val > 50 && val < 100000) return val;
      }
    }
    /* 2. Fallback: procurar o MAIOR valor R$ entre folhas (evita pegar preço de item) */
    var maxVal = 0;
    var candidates = mainArea.querySelectorAll('div, span');
    for (var i = 0; i < candidates.length; i++) {
      var el = candidates[i];
      if (el.children.length > 0) continue;
      var txt2 = el.textContent.trim();
      var match2 = txt2.match(/^R\$\s*([\d.]+,\d{2})$/);
      if (match2) {
        var v = parseFloat(match2[1].replace(/\./g, '').replace(',', '.'));
        if (v > maxVal && v < 100000) maxVal = v;
      }
    }
    return maxVal;
  }

  /* === HELPER: Checar se frete já é grátis === */

  function isShippingAlreadyFree() {
    var rows = mainArea.querySelectorAll('div, span');
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].textContent.trim() === 'Grátis' || rows[i].textContent.trim() === 'Frete Grátis') {
        /* Confirmar que está perto de "Entrega" */
        var parent = rows[i].parentElement;
        if (parent && parent.textContent.indexOf('Entrega') !== -1) return true;
      }
    }
    return false;
  }


  /* === ETAPA: CART === */

  if (isCart) {
    /* 1. Barra frete grátis */
    (function addShippingBar() {
      if (document.getElementById('mm-shipping-bar')) return;

      var truckSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>';
      var checkSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';

      var bar = document.createElement('div');
      bar.id = 'mm-shipping-bar';
      bar.className = 'mm-shipping-bar';

      if (isShippingAlreadyFree()) {
        /* Frete já é grátis — mensagem de reforço positivo */
        bar.innerHTML = '<div class="mm-shipping-bar-text">'
          + checkSvg
          + '<span><strong class="mm-green">FRETE GR\u00c1TIS</strong> no seu pedido!</span>'
          + '</div>';
      } else {
        /* Calcular progresso */
        var threshold = 2000;
        var total = extractCartTotal();
        if (total <= 0 || total >= threshold) return;

        var falta = threshold - total;
        var progress = Math.min((total / threshold) * 100, 100);

        bar.innerHTML = '<div class="mm-shipping-bar-text">'
          + truckSvg
          + '<span>Faltam <strong>R$\u00a0' + falta.toFixed(2).replace('.', ',') + '</strong> para <strong class="mm-green">FRETE GR\u00c1TIS!</strong></span>'
          + '</div>'
          + '<div class="mm-shipping-bar-track">'
          + '<div class="mm-shipping-bar-fill" style="width:' + progress + '%;"></div>'
          + '</div>';
      }

      /* Inserir como sibling ANTES de #main-cart-area (full-width, fora do flex row).
         #main-cart-area é display:flex space-between — se inserir DENTRO dele, a bar
         vira um flex item squeezed de ~137px. Inserindo ANTES, fica full width do
         container pai naturalmente. */
      var mainCartArea = document.getElementById('main-cart-area');
      if (mainCartArea && mainCartArea.parentElement) {
        mainCartArea.parentElement.insertBefore(bar, mainCartArea);
      } else {
        var container = mainArea.querySelector('.container');
        if (container) container.insertBefore(bar, container.firstChild);
      }
    })();

    /* 2. Trust strip — colado no CTA Finalizar compra (desktop + mobile)
       Desktop: insere antes do #finalizar-compra dentro de .proxima-etapa (sidebar direito).
       Mobile: insere antes do #finalizar-compra dentro de .summary-fixed (sticky footer).
       Ambos usam o mesmo DOM target — só o CSS diverge (ver checkout-cro.css). */
    (function addCartTrust() {
      if (document.getElementById('mm-cart-trust')) return;

      var finalizarBtn = document.getElementById('finalizar-compra');
      if (finalizarBtn && finalizarBtn.parentElement) {
        finalizarBtn.parentElement.insertBefore(
          createTrustStrip('mm-cart-trust'),
          finalizarBtn
        );
        return;
      }

      /* Fallback: se a estrutura mudou e não achamos o botão, cai no #resumo-compra */
      var resumo = document.getElementById('resumo-compra');
      if (resumo) {
        resumo.appendChild(createTrustStrip('mm-cart-trust'));
      }
    })();
  }


  /* === ETAPA: IDENTIFY === */

  if (isIdentify) {
    /* 1. Melhorar título */
    var h2 = mainArea.querySelector('h2');
    if (h2 && h2.textContent.indexOf('Acesse') !== -1) {
      h2.textContent = 'Quase l\u00e1! Identifique-se';
    }

    /* 2. Melhorar subtítulo (pode ser div ou span) */
    var subtitleEls = mainArea.querySelectorAll('div, span, p');
    for (var d = 0; d < subtitleEls.length; d++) {
      var txt = subtitleEls[d].textContent.trim();
      if (txt === 'Informe seu e-mail ou CPF/CNPJ para continuar.' && subtitleEls[d].children.length === 0) {
        subtitleEls[d].textContent = 'Informe seu e-mail para finalizar a compra de forma r\u00e1pida e segura.';
        break;
      }
    }

    /* 3. Esconder "Nunca postaremos" */
    var allP = mainArea.querySelectorAll('p');
    for (var p = 0; p < allP.length; p++) {
      if (allP[p].textContent.indexOf('Nunca postaremos') !== -1) {
        allP[p].style.display = 'none';
      }
    }

    /* 4. Trust strip após o botão Continuar */
    var continueBtn = Array.from(mainArea.querySelectorAll('button')).find(function(b) {
      return b.textContent.trim() === 'Continuar';
    });
    if (continueBtn && !document.getElementById('mm-identify-trust')) {
      continueBtn.parentNode.insertBefore(
        createTrustStrip('mm-identify-trust'),
        continueBtn.nextSibling
      );
    }

    /* 5. Input type email */
    var emailInput = mainArea.querySelector('input[type="text"]');
    if (emailInput && emailInput.placeholder && emailInput.placeholder.indexOf('e-mail') !== -1) {
      emailInput.type = 'email';
    }
  }


  /* === ETAPA: ONEPAGE === */

  if (isOnepage) {
    /* 1. Trust strip após "Próxima etapa" (botão visível de submit) */
    var proximaBtn = Array.from(mainArea.querySelectorAll('button')).find(function(b) {
      return b.textContent.trim() === 'Pr\u00f3xima etapa';
    });
    if (proximaBtn && !document.getElementById('mm-onepage-trust-0')) {
      proximaBtn.parentNode.insertBefore(createTrustStrip('mm-onepage-trust-0'), proximaBtn.nextSibling);
    }
    /* Trust strip também no botão final de pagamento (se existir) */
    var payBtn = Array.from(mainArea.querySelectorAll('button')).find(function(b) {
      var t = b.textContent.trim().toLowerCase();
      return t.indexOf('finalizar') !== -1 || t.indexOf('pagar') !== -1 || t.indexOf('confirmar') !== -1;
    });
    if (payBtn && !document.getElementById('mm-onepage-trust-pay')) {
      payBtn.parentNode.insertBefore(createTrustStrip('mm-onepage-trust-pay'), payBtn);
    }

    /* 2. Segurança no form de cartão */
    var cardInputs = mainArea.querySelectorAll('input[placeholder*="cart" i], input[placeholder*="numero" i]');
    if (cardInputs.length > 0) {
      var cardForm = cardInputs[0].closest('form') || cardInputs[0].closest('fieldset') || cardInputs[0].parentElement.parentElement;
      if (cardForm && !cardForm.querySelector('#mm-card-security')) {
        var lockSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';
        var msg = document.createElement('div');
        msg.id = 'mm-card-security';
        msg.className = 'mm-trust-strip';
        msg.style.justifyContent = 'flex-start';
        msg.innerHTML = '<span class="mm-trust-strip-item">' + lockSvg + '<b>Dados criptografados e protegidos via SSL</b></span>';
        cardForm.insertBefore(msg, cardForm.firstChild);
      }
    }

    /* 3. Input modes corretos */
    var cepInput = mainArea.querySelector('#cep, input[placeholder*="00000" i]');
    if (cepInput) cepInput.inputMode = 'numeric';

    var cardNumInput = mainArea.querySelector('input[placeholder*="numero do cart" i]');
    if (cardNumInput) cardNumInput.inputMode = 'numeric';

    var cvvInput = mainArea.querySelector('input[placeholder*="000" i]');
    if (cvvInput && (!cvvInput.maxLength || cvvInput.maxLength <= 4)) cvvInput.inputMode = 'numeric';

    var cpfInput = mainArea.querySelector('input[placeholder*="CPF" i]');
    if (cpfInput) cpfInput.inputMode = 'numeric';
  }

})();
