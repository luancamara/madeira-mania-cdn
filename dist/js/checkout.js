(function() {
  'use strict';

  /* Inject CSS: checkout-cro.css */
  (function() {
    if (document.getElementById('mm-checkout-cro-css')) return;
    var s = document.createElement('style');
    s.id = 'mm-checkout-cro-css';
    s.textContent = '/* ============================================= CHECKOUT CRO - Madeira Mania Melhorias de conversão no checkout Design system: - Paleta: herda do site (#4b664a verde, #2e7d32 trust) - Font mínimo: 16px inputs, 14px body, 12px micro - Touch targets: min 44px height - Spacing: 8/12/16/24px (8dp grid) - Border radius: 8px cards, herda botões - Ícones: SVG stroke 2px (sem emojis) - Regras: UI/UX Pro Max checklist Aplica em: /checkout/* (todas as etapas) Dispositivo: TODOS ============================================= */ /* ========================================== TRUST STRIP — Componente reutilizável Usado em cart, identify e onepage ========================================== */ .mm-trust-strip { display: flex !important; align-items: center !important; justify-content: center !important; flex-wrap: wrap !important; gap: 16px !important; padding: 10px 16px !important; margin: 12px 0 !important; background: #f0faf0 !important; border: 1px solid #e0ece0 !important; border-radius: 8px !important; font-size: 12px !important; color: #444 !important; line-height: 1.3 !important; font-family: inherit !important; } .mm-trust-strip-item { display: inline-flex !important; align-items: center !important; gap: 5px !important; white-space: nowrap !important; } .mm-trust-strip-item svg { flex-shrink: 0 !important; } .mm-trust-strip-item b { font-weight: 600 !important; color: #333 !important; } /* ========================================== BARRA FRETE GRÁTIS ========================================== */ .mm-shipping-bar { padding: 12px 16px !important; background: #f0faf0 !important; border: 1px solid #c8e6c9 !important; border-radius: 8px !important; margin-bottom: 16px !important; font-family: inherit !important; } .mm-shipping-bar-text { font-size: 13px !important; color: #333 !important; margin-bottom: 8px !important; font-weight: 500 !important; display: flex !important; align-items: center !important; gap: 6px !important; } .mm-shipping-bar-text strong { color: #1a1a1a !important; } .mm-shipping-bar-text .mm-green { color: #2e7d32 !important; } .mm-shipping-bar-track { background: #e0e0e0 !important; border-radius: 4px !important; height: 6px !important; overflow: hidden !important; } .mm-shipping-bar-fill { background: #2e7d32 !important; height: 100% !important; border-radius: 4px !important; transition: width 0.3s ease !important; } /* ========================================== INPUTS — Touch targets + iOS zoom prevention ========================================== */ .checkout-etapa-1 input, .checkout-etapa-2 input, .checkout-etapa-3 input { min-height: 44px !important; font-size: 16px !important; /* previne zoom iOS */ } /* ========================================== CTA FINALIZAR — Estilo consistente Não sobrescreve cor — herda do Magazord Apenas garante tamanho e toque adequado ========================================== */ #checkout-main-area .button-success, #checkout-main-area button.button-success { min-height: 48px !important; font-size: 16px !important; font-weight: 600 !important; border-radius: 8px !important; width: 100% !important; } /* ========================================== IDENTIFY — Ajustes mínimos (nova estrutura email-first do Magazord) ========================================== */ /* "Nunca postaremos" — esconder */ .checkout-etapa-2 p:last-of-type { /* Seletor frágil — JS faz o trabalho pesado */ } /* ========================================== MOBILE RESPONSIVE — 375px e menor ========================================== */ @media (max-width: 480px) { .mm-trust-strip { gap: 8px !important; padding: 8px 12px !important; justify-content: space-between !important; } .mm-trust-strip-item { font-size: 11px !important; } .mm-shipping-bar { margin: 8px 0 12px !important; } } ';
    document.head.appendChild(s);
  })();

  /* === checkout-cro.js === */
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
  
      var items = [
        { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>', label: 'Compra segura' },
        { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>', label: 'Troca em 7 dias' },
        { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', label: 'Garantia 12 meses' }
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
  
        /* Inserir acima do #cart-area (dentro de #main-cart-area) */
        var cartArea = document.getElementById('cart-area');
        var mainCartArea = document.getElementById('main-cart-area');
        if (mainCartArea && cartArea) {
          mainCartArea.insertBefore(bar, cartArea);
        } else {
          var container = mainArea.querySelector('.container');
          if (container) container.insertBefore(bar, container.firstChild);
        }
      })();
  
      /* 2. Trust strip — dentro do conteúdo, não no rodapé fixo */
      (function addCartTrust() {
        if (document.getElementById('mm-cart-trust')) return;
  
        /* Colocar acima do "Resumo da compra" ou após os produtos */
        var resumo = document.getElementById('resumo-compra');
        if (resumo) {
          resumo.insertBefore(createTrustStrip('mm-cart-trust'), resumo.firstChild);
        } else {
          /* Fallback: acima do último botão no conteúdo (não no .summary-fixed) */
          var container = mainArea.querySelector('.container');
          if (container) container.appendChild(createTrustStrip('mm-cart-trust'));
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

})();
