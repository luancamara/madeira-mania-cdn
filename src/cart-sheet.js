/* =============================================
   CARRINHO MOBILE - JS Override Magazord v2
   Cria botoes de quantidade funcionais (+/-)
   usando as APIs nativas do Magazord:
   - Zord.checkout.adicionaQuantidade(dataId)
   - Zord.checkout.removeQuantidade(dataId, true)

   ATUALIZACAO REACT:
   O carrinho preview e um componente React que escuta
   o evento "reactItemAddedToCart" para re-renderizar.
   As funcoes Zord.checkout.* NAO disparam esse evento
   (e NAO retornam promises encadeáveis).
   Usamos $(document).ajaxComplete para detectar quando
   qualquer AJAX do carrinho completa e disparar o evento.
   ============================================= */
(function() {
  'use strict';

  // Disparar evento React apos qualquer AJAX do carrinho completar.
  // Isso cobre: adicionaQuantidade, removeQuantidade, deleteItem,
  // e qualquer outra operacao que use Zord.callArea("checkout/cart", ...).
  function registrarAjaxListener() {
    if (typeof jQuery === 'undefined' && typeof $ === 'undefined') return;
    var jq = typeof jQuery !== 'undefined' ? jQuery : $;
    jq(document).ajaxComplete(function(event, xhr, settings) {
      if (settings.url && settings.url.indexOf('checkout/cart') !== -1) {
        setTimeout(function() {
          window.dispatchEvent(new CustomEvent('reactItemAddedToCart'));
        }, 100);
      }
    });
  }

  function injetarParcelamentoTotal() {
    var footer = document.querySelector('#cart-preview-area .border-t.border-solid');
    if (!footer || footer.querySelector('.installment-total')) return;

    // Somar valor total do carrinho a partir dos itens
    var total = 0;
    var cartItems = document.querySelectorAll('#cart-preview-area .cart-item');
    cartItems.forEach(function(item) {
      var price = parseFloat(item.getAttribute('data-item-price')) || 0;
      var qty = parseInt(item.getAttribute('data-item-quantity')) || 1;
      total += price * qty;
    });

    if (total <= 0) return;

    var parcela = (total / 12).toFixed(2).replace('.', ',');
    var el = document.createElement('div');
    el.className = 'installment-total';
    el.textContent = 'ou 12x de R$ ' + parcela;

    // Inserir apos o valor-pix
    var valorPix = footer.querySelector('.valor-pix');
    if (valorPix && valorPix.parentNode) {
      valorPix.parentNode.insertBefore(el, valorPix.nextSibling);
    }
  }

  // SVG icons matching /checkout/cart (.mm-qty-btn / .mm-item-remove)
  var SVG_MINUS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/></svg>';
  var SVG_PLUS  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
  var SVG_TRASH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>';

  function criarControlesQtd() {
    injetarParcelamentoTotal();

    // Itera por .cart-item (scope correto pra funcionar em mobile E desktop —
    // no desktop o .cart-remove-item fica fora do .qtd-value, em .prod-remove sibling).
    var cartItems = document.querySelectorAll('#cart-preview-area .cart-item, .content-cart .cart-item');
    cartItems.forEach(function(cartItem) {
      // Evita re-injeção
      if (cartItem.querySelector('.qty-btn-minus')) return;

      var qtdDiv = cartItem.querySelector('.qtd-value');
      if (!qtdDiv) return;

      // Trash button pode estar dentro de .qtd-value (mobile) ou em .prod-remove sibling (desktop)
      var removeBtn = cartItem.querySelector('.cart-remove-item');
      var dataId = removeBtn ? removeBtn.getAttribute('data-id') : null;
      if (!dataId) return;

      // Desktop: trash está num wrapper .prod-remove separado com hover:bg-cor-base-light
      // que deixa tudo verde olive no hover. Move o trash pra dentro do .qtd-value,
      // e esconde o wrapper vazio pra não capturar hover.
      var prodRemoveWrap = cartItem.querySelector('.prod-remove');
      if (prodRemoveWrap && !qtdDiv.contains(removeBtn)) {
        qtdDiv.appendChild(removeBtn);
        prodRemoveWrap.style.display = 'none';
      }

      // Unifica estrutura entre mobile e desktop: no mobile o .valor é sibling
      // do .qtd-value; no desktop já está dentro. Move pra dentro pra facilitar
      // ordenação via flex.
      var qtdParent = qtdDiv.parentElement;
      var valor = null;
      if (qtdParent) {
        for (var i = 0; i < qtdParent.children.length; i++) {
          var child = qtdParent.children[i];
          if (child !== qtdDiv && child.classList && child.classList.contains('valor')) {
            valor = child;
            break;
          }
        }
      }
      if (valor && !qtdDiv.contains(valor)) {
        qtdDiv.appendChild(valor);
      }

      // Quantidade vem de data-attribute no .cart-item (disponível em ambos viewports);
      // fallback pra parse do texto do qtdDiv.
      var qty = parseInt(cartItem.getAttribute('data-item-quantity'));
      if (!qty || isNaN(qty)) {
        var m = qtdDiv.textContent.match(/(\d+)/);
        qty = m ? parseInt(m[1]) : 1;
      }

      // Criar botão minus — SVG icon matching /checkout/cart
      var btnMinus = document.createElement('button');
      btnMinus.className = 'qty-btn-minus';
      btnMinus.type = 'button';
      btnMinus.setAttribute('aria-label', 'Diminuir quantidade');
      btnMinus.innerHTML = SVG_MINUS;
      // Never disabled — on qty=1, pressing minus triggers a confirm+delete
      // instead (matching Magazord's native removeQuantidade semantics).
      btnMinus.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var currentQty = parseInt(numDisplay.textContent) || 1;
        if (currentQty <= 1) {
          // Fallback to delete flow with confirmation modal
          var removeBtn2 = cartItem.querySelector('.cart-remove-item');
          if (removeBtn2) removeBtn2.click();
          return;
        }
        mmQtyChange(cartItem, dataId, -1, numDisplay, btnMinus, btnPlus);
      });

      // Display numérico
      var numDisplay = document.createElement('span');
      numDisplay.className = 'qty-display';
      numDisplay.textContent = qty;

      // Botão plus
      var btnPlus = document.createElement('button');
      btnPlus.className = 'qty-btn-plus';
      btnPlus.type = 'button';
      btnPlus.setAttribute('aria-label', 'Aumentar quantidade');
      btnPlus.innerHTML = SVG_PLUS;
      btnPlus.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        mmQtyChange(cartItem, dataId, +1, numDisplay, btnMinus, btnPlus);
      });

      // Wrap minus + display + plus num container .mm-qty-wrap (pill border igual /checkout/cart)
      var qtyWrap = document.createElement('div');
      qtyWrap.className = 'mm-qty-wrap';
      qtyWrap.appendChild(btnMinus);
      qtyWrap.appendChild(numDisplay);
      qtyWrap.appendChild(btnPlus);

      // Inserir wrap no início do qtdDiv
      qtdDiv.insertBefore(qtyWrap, qtdDiv.firstChild);

      // Substituir o conteúdo visual do trash nativo pelo nosso ícone SVG limpo
      // (mantém o element pra preservar handlers/data-id do Magazord)
      if (removeBtn) {
        removeBtn.innerHTML = SVG_TRASH;
        removeBtn.setAttribute('aria-label', 'Remover produto');
      }
    });
  }

  // Interceptar clique no trash icon (cart-remove-item) para pedir confirmacao
  function interceptarDeleteComConfirmacao() {
    document.addEventListener('click', function(e) {
      var removeBtn = e.target.closest('.cart-remove-item');
      if (!removeBtn || !removeBtn.closest('#cart-preview-area')) return;

      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();

      var dataId = removeBtn.getAttribute('data-id');
      if (!dataId) return;

      // Get product name from the card
      var cartItem = removeBtn.closest('.cart-item');
      var prodNome = cartItem ? (cartItem.querySelector('.prod-nome')?.textContent?.trim() || 'este produto') : 'este produto';
      var truncated = prodNome.length > 50 ? prodNome.substring(0, 50) + '…' : prodNome;

      // Build modal
      var existing = document.getElementById('mm-confirm-overlay');
      if (existing) existing.remove();

      var overlay = document.createElement('div');
      overlay.id = 'mm-confirm-overlay';
      overlay.className = 'mm-confirm-overlay';
      overlay.innerHTML =
        '<div class="mm-confirm-card">' +
        '<p class="mm-confirm-title">Remover produto?</p>' +
        '<p class="mm-confirm-desc">' + truncated.replace(/&/g,'&amp;').replace(/</g,'&lt;') + '</p>' +
        '<div class="mm-confirm-actions">' +
        '<button class="mm-confirm-btn mm-confirm-btn-cancel">Manter</button>' +
        '<button class="mm-confirm-btn mm-confirm-btn-delete">Remover</button>' +
        '</div></div>';

      document.body.appendChild(overlay);

      overlay.querySelector('.mm-confirm-btn-cancel').addEventListener('click', function() {
        overlay.remove();
      });
      overlay.querySelector('.mm-confirm-btn-delete').addEventListener('click', function() {
        overlay.remove();
        // Use direct POST + manual DOM update (bypasses Zord.checkout.deleteItem
        // which triggers the React removeChild crash on the drawer).
        if (window.__mmDeleteItem && cartItem) {
          window.__mmDeleteItem(cartItem, dataId);
        } else if (typeof Zord !== 'undefined' && Zord.checkout) {
          Zord.checkout.deleteItem(parseInt(dataId));
        }
      });
      overlay.addEventListener('click', function(ev) {
        if (ev.target === overlay) overlay.remove();
      });
    }, true); // capturing phase to intercept before Magazord's handler
  }

  // Redirecionar "Finalizar compra" do carrinho preview direto para identify (pula /checkout/cart)
  function redirecionarFinalizarCompra() {
    document.addEventListener('click', function(e) {
      var btn = e.target.closest('.finalizar-compra');
      if (btn && btn.closest('#cart-preview-area')) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = '/checkout/identify';
      }
    }, true);
  }

  // ====== Direct cart operations (bypass Zord.checkout wrapper) ======
  //
  // WHY: Zord.checkout.adicionaQuantidade / removeQuantidade / deleteItem
  // internally call Zord.callArea → jQuery .html() on .carrinho-rapido,
  // which is a React-owned element. This triggers a React removeChild
  // NotFoundError (react-unificado-v18.3.1.min.js) that wipes the drawer
  // and leaves Zord state stale. The bug exists in prod @v1.0 too — the
  // drawer preview has never supported +/- reliably.
  //
  // Workaround: call the raw backend endpoint
  //   POST /checkout/cart?operation=<adicionaItem|removeItem|deleteItem>
  //   body: cep=&cupom-desconto=&nenhumCreditoSelecionado=true&id=<id>&area=main-cart
  // then update the DOM manually (optimistic UI) and sync Zord.get('cart.size').

  function mmPostCartOp(operation, id) {
    var body = 'cep=&cupom-desconto=&nenhumCreditoSelecionado=true&id=' +
      encodeURIComponent(String(id)) + '&area=main-cart';
    return fetch('/checkout/cart?operation=' + encodeURIComponent(operation), {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'text/html,application/json,*/*',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: body
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    });
  }

  // ====== Shipping display (psychological conversion) ======
  //
  // Reads localStorage.mm_cep + mm_cart_snapshot (populated by checkout-cro.js
  // on /checkout/cart visits) and renders a shipping block in the drawer
  // footer. Applies these mental models:
  //   • Loss Aversion — "Faltam R$ X" frames the gap as a loss
  //   • Goal-Gradient — progress bar motivates closing the gap
  //   • Zero-Price Effect — "GRÁTIS" in bold olive
  //   • Anchoring — crossed-out original shipping value
  //   • Hyperbolic Discounting — delivery date shown immediately
  //   • Theory of Constraints — removes checkout surprise
  //
  // FREE SHIPPING THRESHOLDS (tiered by region):
  //   • R$ 1.500 — Sul + Sudeste (CEP prefixes 01-39, 80-99)
  //   • R$ 2.000 — rest of Brazil
  //   • Default without CEP: R$ 2.000 (conservative — avoids over-promising)
  //
  // Only recalculates when cart items change (callers pass the current
  // subtotal; we inject/update the block as needed).
  var MM_THRESHOLD_REGIONAL = 1500; // Sul + Sudeste
  var MM_THRESHOLD_DEFAULT = 2000;  // Rest of Brazil / no CEP
  var MM_CEP_KEY = 'mm_cep';
  var MM_SNAPSHOT_KEY = 'mm_cart_snapshot';
  var MM_SNAPSHOT_TTL_MS = 30 * 60 * 1000;

  function mmReadCep() {
    try {
      var raw = localStorage.getItem(MM_CEP_KEY) || '';
      var digits = raw.replace(/\D/g, '');
      if (digits.length === 8) return digits;
    } catch (e) {}
    return null;
  }
  function mmFormatCep(digits) {
    if (!digits || digits.length !== 8) return '';
    return digits.slice(0, 5) + '-' + digits.slice(5);
  }
  // Return the free-shipping threshold for a given CEP.
  // Brazilian CEP first-two-digit ranges:
  //   Sudeste: SP 01-19, RJ 20-28, ES 29, MG 30-39   → 01-39
  //   Sul:     PR 80-87, SC 88-89, RS 90-99          → 80-99
  //   Other regions (Norte/Nordeste/Centro-Oeste) use default 2000
  function mmFreeShippingThreshold(cepDigits) {
    if (!cepDigits || cepDigits.length !== 8) return MM_THRESHOLD_DEFAULT;
    var prefix = parseInt(cepDigits.slice(0, 2), 10);
    if (isNaN(prefix)) return MM_THRESHOLD_DEFAULT;
    // Sudeste 01-39 (note: 00 doesn't exist in Brazilian CEP)
    if (prefix >= 1 && prefix <= 39) return MM_THRESHOLD_REGIONAL;
    // Sul 80-99
    if (prefix >= 80 && prefix <= 99) return MM_THRESHOLD_REGIONAL;
    return MM_THRESHOLD_DEFAULT;
  }
  function mmReadCartSnapshot() {
    try {
      var raw = localStorage.getItem(MM_SNAPSHOT_KEY);
      if (!raw) return null;
      var snap = JSON.parse(raw);
      if (!snap || !snap.ts) return null;
      if (Date.now() - snap.ts > MM_SNAPSHOT_TTL_MS) return null;
      return snap;
    } catch (e) { return null; }
  }
  // Compute a cart "signature" (items × qty) to detect if the snapshot
  // corresponds to the current drawer state. Used to decide whether the
  // cached shipping value is still valid.
  function mmComputeCartSignature(drawerItems) {
    var parts = [];
    drawerItems.forEach(function (it) {
      var name = (it.querySelector('.prod-nome a, .prod-nome') || {}).textContent || '';
      var qd = it.querySelector('.qty-display');
      var qty = qd ? parseInt(qd.textContent) : parseInt(it.getAttribute('data-item-quantity')) || 1;
      parts.push(name.trim().slice(0, 30) + 'x' + qty);
    });
    return parts.sort().join('|');
  }
  function mmComputeSnapshotSignature(snap) {
    if (!snap || !Array.isArray(snap.items)) return '';
    var parts = snap.items.map(function (it) {
      return (it.name || '').trim().slice(0, 30) + 'x' + (it.quantity || 1);
    });
    return parts.sort().join('|');
  }

  // Icons — stroke-width 2, minimalist (no decorative truck — we rely on copy).
  var SHIP_ICON_CHECK = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg>';
  var SHIP_ICON_CLOSE = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18M6 6l12 12"/></svg>';

  // ---- Delivery date helpers (PT-BR) ----
  var MM_MONTH_NAMES_PT = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  // Extract the maximum day count from a deadline string like "5-7 dias úteis",
  // "1 a 3 dias úteis", "até 7 dias úteis", "7 dias". Returns null on no match.
  function mmParseDeadlineMaxDays(text) {
    if (!text) return null;
    var nums = String(text).match(/\d+/g);
    if (!nums || !nums.length) return null;
    return Math.max.apply(null, nums.map(Number));
  }
  // Add N business days (skipping Sat/Sun) to a date.
  function mmAddBusinessDays(date, days) {
    var d = new Date(date.getTime());
    var added = 0;
    while (added < days) {
      d.setDate(d.getDate() + 1);
      var dow = d.getDay();
      if (dow !== 0 && dow !== 6) added++;
    }
    return d;
  }
  function mmFormatDeliveryDate(date) {
    var now = new Date();
    var s = 'dia ' + date.getDate() + ' de ' + MM_MONTH_NAMES_PT[date.getMonth()];
    if (date.getFullYear() !== now.getFullYear()) s += ' de ' + date.getFullYear();
    return s;
  }
  // Build "Receba até dia 23 de agosto" from a deadline string. Returns null
  // if the deadline can't be parsed (caller should fall back to a generic
  // message like "Prazo disponível no checkout").
  function mmDeliveryDateText(deadlineRaw) {
    var max = mmParseDeadlineMaxDays(deadlineRaw);
    if (!max || max < 1) return null;
    var date = mmAddBusinessDays(new Date(), max);
    return 'Receba até ' + mmFormatDeliveryDate(date);
  }

  // ---- Live shipping fetch ----
  // POST to Magazord's /checkout/cart?operation=atualizaValoresCarrinho with
  // the user's CEP. Server recalculates shipping for the current cart and
  // returns the cart-area HTML containing .frete-calculado .servico-frete
  // blocks with data attributes. We parse the response client-side.
  //
  // The endpoint also commits the CEP to the server-side cart state, so
  // when the user later navigates to /checkout/cart they don't need to
  // re-enter it.
  var mmShippingFetchInflight = {}; // by cep digits — dedupe in-flight
  var MM_FETCH_RATE_LIMIT_MS = 4000;
  var mmShippingLastFetch = {};

  function mmFetchShipping(cepDigits, force) {
    if (!cepDigits || cepDigits.length !== 8) return Promise.resolve(null);
    // Dedupe
    if (mmShippingFetchInflight[cepDigits]) return mmShippingFetchInflight[cepDigits];
    // Rate limit (skip when forced — explicit user action like qty change)
    if (!force) {
      var last = mmShippingLastFetch[cepDigits] || 0;
      if (Date.now() - last < MM_FETCH_RATE_LIMIT_MS) return Promise.resolve(null);
    }

    var body = 'cep=' + encodeURIComponent(cepDigits.slice(0, 5) + '-' + cepDigits.slice(5)) +
      '&cupom-desconto=&nenhumCreditoSelecionado=true&area=main-cart';

    var p = fetch('/checkout/cart?operation=atualizaValoresCarrinho', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'text/html,application/json,*/*',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: body,
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    }).then(function (html) {
      mmShippingLastFetch[cepDigits] = Date.now();
      return mmParseShippingHtml(html);
    }).catch(function () {
      return null;
    }).then(function (data) {
      delete mmShippingFetchInflight[cepDigits];
      return data;
    });

    mmShippingFetchInflight[cepDigits] = p;
    return p;
  }

  // Parse Magazord's atualizaValoresCarrinho response HTML to extract shipping
  // info. The HTML structure (verified via probe):
  //   .frete-calculado
  //     .frete-location .city                       → "São Sebastião/SP"
  //     .servico-frete[data-valor-frete] .dias-entrega
  //     .line.info-frete-selec
  //       .info-title span                          → "Econômico" (selected name)
  //       .dias-entrega                             → "8 a 9 dia(s) úteis"
  //     .line.valor-frete .value.valor-frete        → "R$ 148,36" (sibling of info-frete-selec)
  //   .total-boleto .value                          → "R$ 1.459,36" (PIX total INCLUDING shipping)
  function mmParseShippingHtml(html) {
    try {
      var doc = new DOMParser().parseFromString(html, 'text/html');
      var freteEl = doc.querySelector('#resumo-compra .frete-calculado') ||
                    doc.querySelector('.frete-calculado');
      if (!freteEl) return null;

      var city = '';
      var cityEl = freteEl.querySelector('.frete-location .city');
      if (cityEl) city = cityEl.textContent.trim();

      var shipping = null;
      var shippingDeadline = '';
      var shippingName = '';

      // Selected option name + deadline live in .info-frete-selec
      var infoSelec = freteEl.querySelector('.info-frete-selec');
      if (infoSelec) {
        var diasEl = infoSelec.querySelector('.dias-entrega');
        var nameEl = infoSelec.querySelector('.info-title span, .info-title');
        if (diasEl) shippingDeadline = (diasEl.textContent || '').trim();
        if (nameEl) shippingName = (nameEl.textContent || '').trim();
      }
      // Selected option price lives in .line.valor-frete .value (sibling of info-frete-selec)
      var valEl = freteEl.querySelector('.line.valor-frete .value, .value.valor-frete') ||
                  freteEl.querySelector('.valor-compra-frete .value');
      if (valEl) {
        var txt = (valEl.textContent || '').trim();
        if (/gr[áa]tis/i.test(txt)) {
          shipping = 0;
        } else {
          var m = txt.match(/[\d.,]+/);
          if (m) {
            var parsed = parseFloat(m[0].replace(/\./g, '').replace(',', '.'));
            if (!isNaN(parsed)) shipping = parsed;
          }
        }
      }
      // Last-resort fallback: first .servico-frete (cheapest by default)
      if (shipping == null) {
        var first = freteEl.querySelector('.servico-frete');
        if (first) {
          var v = parseFloat(first.getAttribute('data-valor-frete') || '0');
          if (!isNaN(v)) shipping = v;
          if (!shippingName) shippingName = first.getAttribute('data-servico-frete') || '';
          if (!shippingDeadline) {
            var diasEl2 = first.querySelector('.dias-entrega');
            if (diasEl2) shippingDeadline = (diasEl2.textContent || '').trim();
          }
        }
      }
      if (shipping == null) return null;

      // Also extract Magazord's authoritative TOTAL (PIX, includes shipping).
      // This sidesteps any rounding/discount-ratio drift in our local compute.
      var totalPix = null;
      var totalBoletoEl = doc.querySelector('.total-boleto .value, .totais-valor.total-boleto .value');
      if (totalBoletoEl) {
        var tt = (totalBoletoEl.textContent || '').trim();
        var tm = tt.match(/[\d.,]+/);
        if (tm) {
          var p = parseFloat(tm[0].replace(/\./g, '').replace(',', '.'));
          if (!isNaN(p)) totalPix = p;
        }
      }

      return {
        city: city,
        shipping: shipping,
        shippingDeadline: shippingDeadline,
        shippingName: shippingName,
        totalPix: totalPix,
      };
    } catch (e) {
      return null;
    }
  }

  // Update mm_cart_snapshot with freshly-fetched shipping data, then re-render.
  function mmApplyShippingFetch(drawer, cepDigits, data) {
    if (!drawer || !data) return;
    mmHideShippingLoading(drawer);
    try {
      var snap = mmReadCartSnapshot() || {};
      snap.ts = Date.now();
      snap.cepValue = cepDigits.slice(0, 5) + '-' + cepDigits.slice(5);
      snap.shipping = data.shipping;
      snap.shippingDeadline = data.shippingDeadline;
      snap.shippingName = data.shippingName;
      snap.shippingCity = data.city;
      if (data.totalPix != null) snap.subtotalPix = data.totalPix;
      // Snapshot items must match current drawer items for the signature to match.
      // MERGE em vez de OVERWRITE: preserva os campos ricos (imgSrc/lineTotalPix/
      // isPix/variant/deposito) que o checkout-cro.js gravou no snapshot, casando
      // por nome — mas SÓ quando a quantidade não mudou (senão o line total
      // preservado ficaria stale). Se a qty mudou OU não havia item rico anterior,
      // grava magro {name, quantity} e deixa o reconcileSummaryFromServer() do
      // checkout-cro refazer a partir do /checkout/cart autoritativo.
      // Por quê: o drawer DOM não expõe a imgSrc do produto (só data-item-price),
      // então NÃO dá pra reconstruir o item rico aqui — preservar o anterior é a
      // única forma de não corromper o snapshot. Sem isto, o resumo do identify/
      // onepage pisca "R$ 0,00" + ícone genérico no primeiro paint.
      var prevItems = (snap.items && snap.items.length) ? snap.items : [];
      function mmFindPrevItem(nm) {
        for (var k = 0; k < prevItems.length; k++) {
          if (prevItems[k] && prevItems[k].name === nm) return prevItems[k];
        }
        return null;
      }
      var drawerItems = drawer.querySelectorAll('.cart-item:not(.mm-removing)');
      snap.items = Array.prototype.map.call(drawerItems, function (it) {
        var nameEl = it.querySelector('.prod-nome a, .prod-nome');
        var name = (nameEl && nameEl.textContent || '').trim();
        var qd = it.querySelector('.qty-display');
        var qty = qd ? parseInt(qd.textContent) : parseInt(it.getAttribute('data-item-quantity')) || 1;
        var prev = mmFindPrevItem(name);
        if (prev && prev.quantity === qty &&
            (prev.lineTotalPix > 0 || prev.lineTotal > 0 || prev.imgSrc)) {
          return prev; // mantém o item rico (qty inalterada → line total ainda válido)
        }
        return { name: name, quantity: qty };
      });
      localStorage.setItem(MM_SNAPSHOT_KEY, JSON.stringify(snap));
    } catch (e) {}
    // Re-render with the fresh data
    var items = drawer.querySelectorAll('.cart-item:not(.mm-removing)');
    var sumRaw = 0;
    items.forEach(function (it) {
      var v = it.querySelector('.valor');
      if (!v) return;
      var n = parseBrlFromText(v.textContent);
      if (!isNaN(n)) sumRaw += n;
    });
    // Roteia pra EXATAMENTE um recompute conforme a estrutura — evita render duplo do
    // bloco de frete (flicker) quando ambos rodariam na estrutura-B.
    if (drawer.querySelector('.box-total-btn')) mmRecomputeDrawerTotal(drawer); // estrutura A
    else mmRecomputeMobileTotal(drawer);                                        // estrutura B
  }

  // Trigger a shipping fetch + re-render if we have CEP but no fresh snapshot.
  function mmMaybeFetchShipping(drawer) {
    var cep = mmReadCep();
    if (!cep) return;
    var snap = mmReadCartSnapshot();
    var snapSig = mmComputeSnapshotSignature(snap);
    var cartSig = mmComputeCartSignature(drawer.querySelectorAll('.cart-item:not(.mm-removing)'));
    var snapCepMatches = snap && snap.cepValue && snap.cepValue.replace(/\D/g, '') === cep;
    var snapHasShipping = snap && snap.shipping != null && !isNaN(snap.shipping);
    if (snap && snapSig === cartSig && snapCepMatches && snapHasShipping) return; // already fresh
    mmFetchShipping(cep).then(function (data) {
      if (data) mmApplyShippingFetch(drawer, cep, data);
    });
  }

  function mmEscapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // Generaliza o container onde o bloco .mm-cart-ship vive, entre o drawer desktop
  // (.box-total-btn) e o overlay mobile (#cart-preview-area, que NÃO tem .box-total-btn —
  // usa um footer com .finalizar-compra). Retorna { host, before } onde `host` é o
  // container e `before` é o nó-âncora pra inserir o bloco ACIMA dos totais.
  function mmShipHost(drawer) {
    if (!drawer) return null;
    var box = drawer.querySelector('.box-total-btn');
    if (box) return { host: box, before: box.querySelector('.total') };
    // Estrutura B — mini-drawer desktop da home: footer .area-finalizar-compra
    // (div com os totais + link de checkout). Insere acima do bloco de totais.
    var area = drawer.querySelector('.area-finalizar-compra');
    if (area) return { host: area, before: area.firstElementChild };
    // Estrutura B — overlay mobile: o inner do footer é o pai do .finalizar-compra.
    var fin = drawer.querySelector('.finalizar-compra');
    if (fin && fin.parentElement) {
      var inner = fin.parentElement;
      return { host: inner, before: inner.firstElementChild };
    }
    return null;
  }

  // Acha o drawer (desktop OU overlay mobile) a partir de um nó interno. Os handlers
  // do form de CEP antes assumiam só .carrinho-rapido-ctn, o que retornava null no
  // overlay mobile e quebrava o salvar do CEP.
  function mmClosestDrawer(el) {
    if (!el) return null;
    var d = el.closest('.carrinho-rapido-ctn');
    if (d) return d;
    if (el.closest('#cart-preview-area')) return mmFindMobileDrawer();
    return null;
  }

  function mmRenderShipping(drawer, subtotal, shippingAmount, hasShipping) {
    if (!drawer) return;
    var shipHost = mmShipHost(drawer);
    if (!shipHost) return;
    var boxTotal = shipHost.host;
    // Marca o drawer como escopo do bloco de frete pro CSS (.mm-ship-scope .mm-cart-ship*)
    // aplicar igual em desktop (.carrinho-rapido-ctn) e mobile (#cart-preview-area).
    drawer.classList.add('mm-ship-scope');
    // INVARIANTE: esta função (e mmRecomputeDrawerTotal) só pode MUTAR
    // descendentes do .box-total-btn — NUNCA recriar/substituir o próprio
    // .box-total-btn. O gate de re-enhancement (diffAndAnimate) usa um marcador
    // dataset NESTE elemento pra distinguir nossa mutação (marcador sobrevive)
    // de um re-render do Magazord (substitui o elemento → marcador some). Recriar
    // o .box-total-btn aqui apagaria o marcador e causaria loop no MutationObserver.

    var cep = mmReadCep();
    var snap = mmReadCartSnapshot();
    var cartSig = mmComputeCartSignature(drawer.querySelectorAll('.cart-item:not(.mm-removing)'));
    var snapSig = mmComputeSnapshotSignature(snap);
    var snapshotMatches = snap && snapSig === cartSig;

    // Tiered threshold based on CEP region (R$ 1.500 Sul/Sudeste, R$ 2.000 else)
    var threshold = mmFreeShippingThreshold(cep);
    var isFree = subtotal >= threshold;
    var delta = Math.max(0, threshold - subtotal);
    var pct = Math.max(0, Math.min(100, (subtotal / threshold) * 100));

    // Locate or create the block (inject before .total so it sits above)
    var block = boxTotal.querySelector('.mm-cart-ship');
    if (!block) {
      block = document.createElement('div');
      block.className = 'mm-cart-ship';
      // Semantic region label for screen readers
      block.setAttribute('role', 'group');
      block.setAttribute('aria-label', 'Informações de frete');
      var anchor = shipHost.before;
      if (anchor && anchor.parentNode === boxTotal) boxTotal.insertBefore(block, anchor);
      else boxTotal.insertBefore(block, boxTotal.firstChild);
    }
    block.classList.toggle('is-free', isFree);
    mmBindShippingEvents(block);

    // If the user is currently editing the CEP inline, skip the re-render
    // to avoid clobbering the form mid-typing.
    if (block.dataset.mmEditing === '1') return;

    // Snapshot shipping data is only trustworthy when the CEP matches. If
    // user changed CEP since the snapshot was taken, treat it as stale.
    var snapCepMatches = snap && snap.cepValue && snap.cepValue.replace(/\D/g, '') === cep;
    var hasShippingData = cep && snapshotMatches && snapCepMatches && snap.shippingCity;
    var deliveryDate = hasShippingData ? mmDeliveryDateText(snap.shippingDeadline) : null;

    var html = '';

    // ---- Location section (CEP + city + delivery date + TROCAR) ----
    html += '<div class="mm-cart-ship-location">';
    if (cep) {
      var locationLine = mmFormatCep(cep);
      if (hasShippingData) locationLine += ' · ' + mmEscapeHtml(snap.shippingCity);
      html +=
        '<span class="mm-cart-ship-label">Envio para</span>' +
        '<div class="mm-cart-ship-location-value">' +
          '<span>' + locationLine + '</span>' +
          '<button class="mm-cart-ship-edit" type="button" data-mm-ship="edit">Trocar</button>' +
        '</div>';
      // Render deadline + frete value inline (only when both are known).
      if (deliveryDate) {
        var deadlineLine = mmEscapeHtml(deliveryDate);
        if (hasShipping && shippingAmount > 0) {
          deadlineLine += ' · <strong>' + mmEscapeHtml(formatBrlNum(shippingAmount)) + '</strong>';
        } else if (hasShipping && shippingAmount === 0) {
          deadlineLine += ' · <strong>Grátis</strong>';
        }
        html += '<span class="mm-cart-ship-deadline">' + deadlineLine + '</span>';
      }
    } else {
      html +=
        '<span class="mm-cart-ship-label">Calcule o frete</span>' +
        '<div class="mm-cart-ship-location-value">' +
          '<span style="color:#9CA3AF;font-weight:500;">Informe seu CEP</span>' +
          '<button class="mm-cart-ship-edit" type="button" data-mm-ship="edit">Calcular</button>' +
        '</div>';
    }
    html += '</div>';

    // ---- Progress bar + nudge (loss aversion / goal-gradient) ----
    // Shipping VALUE is now folded into the .total below — no separate FRETE row.
    var valuetext = isFree
      ? 'Frete grátis desbloqueado'
      : 'Faltam ' + formatBrlNum(delta) + ' para frete grátis';

    // Bar starts at the previously rendered width so the CSS transition
    // animates from old → new (rather than appearing instantly at the new
    // width on each re-render).
    var oldPct = parseFloat(drawer.dataset.mmShipPct || '0') || 0;
    html += '<div class="mm-cart-ship-progress">';
    html +=   '<div class="mm-cart-ship-bar" role="progressbar"' +
      ' aria-valuenow="' + Math.round(subtotal) + '"' +
      ' aria-valuemin="0"' +
      ' aria-valuemax="' + Math.round(threshold) + '"' +
      ' aria-valuetext="' + mmEscapeHtml(valuetext) + '"' +
      ' aria-label="Progresso para frete grátis">' +
      '<div class="mm-cart-ship-bar-fill" style="width:' + oldPct.toFixed(1) + '%"></div>' +
      '</div>';
    html +=   '<p class="mm-cart-ship-nudge' + (isFree ? ' is-free' : '') + '">';
    if (isFree) {
      html += SHIP_ICON_CHECK + 'Frete grátis garantido';
    } else {
      html += 'Faltam <strong>' + mmEscapeHtml(formatBrlNum(delta)) + '</strong> para frete grátis';
    }
    html +=   '</p>';
    html += '</div>';

    block.innerHTML = html;

    // Animate bar fill from old → new pct (next frame so transition fires)
    var fillEl = block.querySelector('.mm-cart-ship-bar-fill');
    if (fillEl) {
      requestAnimationFrame(function () {
        fillEl.style.width = pct.toFixed(1) + '%';
      });
    }

    // Celebration: when crossing the free-shipping threshold (was below → now free)
    var wasFree = drawer.dataset.mmShipWasFree === '1';
    if (isFree && !wasFree && oldPct > 0) {
      block.classList.remove('mm-just-unlocked');
      void block.offsetWidth;
      block.classList.add('mm-just-unlocked');
      setTimeout(function () { block.classList.remove('mm-just-unlocked'); }, 1400);
    }
    drawer.dataset.mmShipWasFree = isFree ? '1' : '';
    drawer.dataset.mmShipPct = pct.toFixed(1);
  }

  // ---- Shipping loading spinner (shows during re-fetch after qty/delete) ----
  var MM_SPINNER_SVG = '<svg class="mm-cart-ship-spinner" width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><style>.mm-sp{animation:mm-spin 1.2s linear infinite;transform-origin:center}.mm-sp circle{stroke:#4B664A;stroke-width:3;fill:none;stroke-linecap:round;stroke-dasharray:44;stroke-dashoffset:16;animation:mm-sp-dash 1.2s ease-in-out infinite}@keyframes mm-spin{to{transform:rotate(360deg)}}@keyframes mm-sp-dash{0%{stroke-dashoffset:44}50%{stroke-dashoffset:8}100%{stroke-dashoffset:44}}</style><g class="mm-sp"><circle cx="12" cy="12" r="9.5"/></g></svg>';

  function mmShowShippingLoading(drawer) {
    if (!drawer) return;
    // Replace the entire deadline line with "Recalculando frete [spinner]"
    var deadlineEl = drawer.querySelector('.mm-cart-ship-deadline');
    if (deadlineEl) {
      deadlineEl.innerHTML = 'Recalculando frete ' + MM_SPINNER_SVG;
    } else {
      var loc = drawer.querySelector('.mm-cart-ship-location');
      if (loc) {
        var span = document.createElement('span');
        span.className = 'mm-cart-ship-deadline';
        span.innerHTML = 'Recalculando frete ' + MM_SPINNER_SVG;
        loc.appendChild(span);
      }
    }
    var sh = mmShipHost(drawer);
    if (sh) sh.host.classList.add('mm-ship-loading');
  }
  function mmHideShippingLoading(drawer) {
    if (!drawer) return;
    var sh = mmShipHost(drawer);
    if (sh) sh.host.classList.remove('mm-ship-loading');
  }

  // ---- CEP edit flow (inline, no modal) ----
  function mmBindShippingEvents(block) {
    if (!block || block.dataset.mmShipBound) return;
    block.dataset.mmShipBound = '1';
    // Use capture phase so we intercept before Magazord's drawer handlers
    block.addEventListener('click', function (e) {
      var editBtn = e.target.closest('[data-mm-ship="edit"]');
      if (editBtn) {
        e.preventDefault();
        e.stopPropagation();
        mmShowCepEditForm(block);
        return;
      }
      var cancelBtn = e.target.closest('[data-mm-ship="cancel"]');
      if (cancelBtn) {
        e.preventDefault();
        e.stopPropagation();
        mmExitCepEdit(block);
        return;
      }
      // Prevent clicks inside the shipping block from bubbling to the drawer
      // close handler (which delegates on the drawer container).
      if (e.target.closest('.mm-cart-ship-cep-form')) {
        e.stopPropagation();
      }
    }, true);
  }

  function mmShowCepEditForm(block) {
    var locationDiv = block.querySelector('.mm-cart-ship-location');
    if (!locationDiv) return;
    block.dataset.mmEditing = '1';
    var currentCep = mmReadCep() || '';
    locationDiv.innerHTML =
      '<span class="mm-cart-ship-label">Digite seu CEP</span>' +
      '<form class="mm-cart-ship-cep-form" data-mm-ship-form="1" novalidate>' +
        '<input class="mm-cart-ship-cep-input" type="text" inputmode="numeric" autocomplete="postal-code"' +
        ' placeholder="00000-000" maxlength="9" value="' + mmEscapeHtml(mmFormatCep(currentCep)) + '" aria-label="CEP" />' +
        '<button class="mm-cart-ship-cep-save" type="submit">OK</button>' +
        '<button class="mm-cart-ship-cep-cancel" type="button" data-mm-ship="cancel" aria-label="Cancelar">' + SHIP_ICON_CLOSE + '</button>' +
      '</form>';
    var input = locationDiv.querySelector('.mm-cart-ship-cep-input');
    var form = locationDiv.querySelector('form');
    if (input) {
      setTimeout(function () { try { input.focus(); input.select(); } catch (e) {} }, 10);
      input.addEventListener('input', function () {
        input.classList.remove('is-invalid');
        var d = input.value.replace(/\D/g, '').slice(0, 8);
        input.value = d.length > 5 ? d.slice(0, 5) + '-' + d.slice(5) : d;
      });
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { e.preventDefault(); mmExitCepEdit(block); }
      });
    }
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();
        mmSaveCepFromForm(block);
      });
    }
  }

  function mmExitCepEdit(block) {
    block.dataset.mmEditing = '';
    var drawer = mmClosestDrawer(block);
    if (!drawer) return;
    var items = drawer.querySelectorAll('.cart-item:not(.mm-removing)');
    var sumRaw = 0;
    items.forEach(function (it) {
      var v = it.querySelector('.valor');
      if (!v) return;
      var n = parseBrlFromText(v.textContent);
      if (!isNaN(n)) sumRaw += n;
    });
    mmRenderShipping(drawer, sumRaw);
  }

  function mmSaveCepFromForm(block) {
    var input = block.querySelector('.mm-cart-ship-cep-input');
    if (!input) return;
    var digits = input.value.replace(/\D/g, '');
    if (digits.length !== 8) {
      input.classList.add('is-invalid');
      input.focus();
      return;
    }
    try { localStorage.setItem(MM_CEP_KEY, digits); } catch (e) {}
    // Show loading state on the save button while we fetch
    var saveBtn = block.querySelector('.mm-cart-ship-cep-save');
    if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = '...'; }
    var drawer = mmClosestDrawer(block);
    // Invalidate the snapshot's CEP match before re-rendering so the user
    // sees the new CEP immediately (without stale shipping data)
    try {
      var snap = mmReadCartSnapshot();
      if (snap) {
        snap.cepValue = ''; // force mismatch until fetch completes
        localStorage.setItem(MM_SNAPSHOT_KEY, JSON.stringify(snap));
      }
    } catch (e) {}
    mmExitCepEdit(block);
    // Fetch fresh shipping in background, then re-render with new data
    mmFetchShipping(digits).then(function (data) {
      if (data && drawer) mmApplyShippingFetch(drawer, digits, data);
    });
  }

  function parseBrlFromText(text) {
    if (!text) return NaN;
    var m = String(text).replace(/\s/g, '').match(/([\d.,]+)/);
    if (!m) return NaN;
    return parseFloat(m[1].replace(/\./g, '').replace(',', '.'));
  }
  function formatBrlNum(n) {
    if (isNaN(n)) return '';
    return 'R$ ' + n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  // Format BRL with cents wrapped in <span class="mm-cents"> so they can be
  // styled smaller — fix #5 (centavos não importam visualmente).
  function formatBrlHtml(n) {
    if (isNaN(n)) return '';
    var s = n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    var parts = s.split(',');
    return 'R$&nbsp;' + parts[0] + '<span class="mm-cents">,' + (parts[1] || '00') + '</span>';
  }

  // Recompute the drawer total from all .cart-item.valor cells and apply
  // (with tween + pop) to .valor-final > .valor strong. Also updates the
  // 12x installment line.
  // Authoritative line-total sum: Σ(data-item-price × data-item-quantity).
  // Magazord renders .valor as UNIT PRICE — summing those ignores qty and
  // produces wrong totals for qty > 1. Always use the data attributes.
  function mmComputeLineSum(items) {
    var sum = 0;
    Array.prototype.forEach.call(items, function (it) {
      var unitPrice = parseFloat(it.getAttribute('data-item-price')) || 0;
      var qty = parseInt(it.getAttribute('data-item-quantity'));
      if (!qty || isNaN(qty)) {
        var qd = it.querySelector('.qty-display');
        if (qd) qty = parseInt(qd.textContent) || 1;
        else qty = 1;
      }
      sum += unitPrice * qty;
    });
    return sum;
  }

  // Normalize .valor display to LINE TOTAL (price × qty) so users see the
  // real value per row instead of unit price (Magazord's confusing default).
  function mmNormalizeItemValores(drawer) {
    var items = drawer.querySelectorAll('.cart-item:not(.mm-removing)');
    items.forEach(function (it) {
      var unitPrice = parseFloat(it.getAttribute('data-item-price')) || 0;
      var qty = parseInt(it.getAttribute('data-item-quantity'));
      if (!qty || isNaN(qty)) {
        var qd = it.querySelector('.qty-display');
        if (qd) qty = parseInt(qd.textContent) || 1;
        else qty = 1;
      }
      var valorEl = it.querySelector('.valor');
      if (valorEl && unitPrice > 0) {
        valorEl.innerHTML = formatBrlHtml(unitPrice * qty);
      }
    });
  }

  // Capture the PIX discount ratio: displayedTotal / lineSum. Should be ≈ 0.95.
  function mmCaptureTotalRatio(drawer) {
    if (!drawer || drawer.dataset.mmTotalRatio) return;
    var items = drawer.querySelectorAll('.cart-item');
    if (!items.length) return;
    var sumLines = mmComputeLineSum(items);
    var totalEl = drawer.querySelector('.box-total-btn .linha-total .valor-final > .valor > strong') ||
                  drawer.querySelector('.box-total-btn .linha-total .valor-final strong');
    if (totalEl && sumLines > 0.01) {
      var initialDisplay = parseBrlFromText(totalEl.textContent);
      if (!isNaN(initialDisplay)) {
        drawer.dataset.mmTotalRatio = String(initialDisplay / sumLines);
      }
    }
  }

  // Inject a single subtle "Você economiza R$ X com PIX" line inside .total
  // (only when there's a real PIX discount). Replaces the verbose 3-row
  // breakdown — minimalist, gain-framed (psychology), in line with brand.
  function mmInjectSavings(drawer, pixDiscount) {
    var linhaTotal = drawer.querySelector('.box-total-btn .linha-total');
    if (!linhaTotal) return;
    var existing = linhaTotal.parentElement.querySelector('.mm-cart-savings');
    if (existing) existing.remove();
    if (!pixDiscount || pixDiscount < 0.01) return;
    var el = document.createElement('span');
    el.className = 'mm-cart-savings';
    el.textContent = 'Você economiza ' + formatBrlNum(pixDiscount) + ' com PIX';
    // Insert AFTER the linha-total (between total and 12x card)
    if (linhaTotal.nextSibling) {
      linhaTotal.parentElement.insertBefore(el, linhaTotal.nextSibling);
    } else {
      linhaTotal.parentElement.appendChild(el);
    }
  }

  function mmRecomputeDrawerTotal(drawer, forceDirect) {
    if (!drawer) return;
    // Ensure ratio captured before first update
    mmCaptureTotalRatio(drawer);
    var items = drawer.querySelectorAll('.cart-item:not(.mm-removing)');
    // sumLines = Σ(unitPrice × qty) — the authoritative line-total sum.
    var sumLines = mmComputeLineSum(items);
    var totalEl = drawer.querySelector('.box-total-btn .linha-total .valor-final > .valor > strong') ||
                  drawer.querySelector('.box-total-btn .linha-total .valor-final strong');
    var ratio = parseFloat(drawer.dataset.mmTotalRatio || '0.95') || 0.95;
    var itemsTotal = sumLines * ratio;       // PIX-discounted items total
    var pixDiscount = sumLines - itemsTotal; // savings via PIX

    // Check if we have a fresh cached shipping value to fold into the total.
    // When a fetch is pending (mmShipPendingFetch === '1'), keep the LAST
    // known shipping amount in the total so it doesn't "dip" to items-only
    // during the ~500ms the fetch is in flight.
    var cep = mmReadCep();
    var snap = mmReadCartSnapshot();
    var snapSig = mmComputeSnapshotSignature(snap);
    var cartSig = mmComputeCartSignature(items);
    var snapCepMatches = snap && snap.cepValue && snap.cepValue.replace(/\D/g, '') === cep;
    var hasShipping = !!(cep && snap && snapCepMatches &&
                        snap.shipping != null && !isNaN(snap.shipping));
    // While re-fetching, use the last known shipping even if signature is stale
    var pendingFetch = drawer.dataset.mmShipPendingFetch === '1';
    if (!hasShipping && pendingFetch && cep && snap && snap.shipping != null) {
      hasShipping = true; // keep old shipping in total until new fetch arrives
    }
    var shippingAmount = hasShipping ? parseFloat(snap.shipping) : 0;
    var targetTotal = itemsTotal + shippingAmount;
    var cartaoTotal = sumLines + shippingAmount; // no PIX discount

    if (totalEl) {
      var current = parseBrlFromText(totalEl.textContent);
      // forceDirect: pula o tween e escreve direto. O tween anima por ~420ms;
      // nesse meio-tempo o Magazord re-renderiza o .box-total-btn (async, ~2s
      // após a edição) com o total GATED/estale, sobrescrevendo o valor final
      // do tween. A rede de segurança periódica (mmReconcileDrawerTotalA) chama
      // com forceDirect pra reafirmar o total correto com UMA escrita atômica
      // que "gruda" assim que o Magazord assenta. Validado: escrita direta no
      // strong fresco persiste (o Magazord não reescreve continuamente).
      if (forceDirect) {
        if (isNaN(current) || Math.abs(targetTotal - current) > 0.005) {
          totalEl.innerHTML = formatBrlHtml(targetTotal);
        }
      } else if (!isNaN(current) && Math.abs(targetTotal - current) > 0.005) {
        var wrapper = drawer.querySelector('.box-total-btn .linha-total .valor-final');
        if (wrapper) {
          wrapper.classList.remove('mm-pop');
          void wrapper.offsetWidth;
          wrapper.classList.add('mm-pop');
          setTimeout(function () { wrapper.classList.remove('mm-pop'); }, 450);
        }
        mmTweenTotal(totalEl, current, targetTotal);
      } else {
        totalEl.innerHTML = formatBrlHtml(targetTotal);
      }
    }
    // 12x installment — uses CARTÃO total (no PIX discount)
    var parcEl = drawer.querySelector('.box-total-btn .valor-final.card');
    if (parcEl) {
      var parcela = cartaoTotal / 12;
      parcEl.innerHTML = '<span>ou em até <strong>12x</strong> de <strong>' + formatBrlNum(parcela) + '</strong> no cartão</span>';
    }
    // "No PIX" stays clean
    var tipoPagto = drawer.querySelector('.box-total-btn .linha-total .valor-final .tipo-pagto');
    if (tipoPagto) {
      tipoPagto.textContent = 'No PIX';
    }
    // Inject "Você economiza R$ X" small text inside .total (only when there's a discount)
    mmInjectSavings(drawer, pixDiscount);
    // Re-render shipping block with the line-total sum + shipping value
    mmRenderShipping(drawer, sumLines, shippingAmount, hasShipping);
    // Update our custom header badge directly (DON'T call Zord.set or
    // dispatch reactItemAddedToCart — both trigger React re-renders that
    // cause the removeChild crash on .carrinho-rapido children that aren't
    // in React's virtual DOM).
    try {
      var totalQty = 0;
      items.forEach(function (it) {
        var qd = it.querySelector('.qty-display');
        if (qd) totalQty += parseInt(qd.textContent) || 0;
      });
      var mmBadge = document.getElementById('mm-h-cart-count');
      if (mmBadge) {
        if (totalQty > 0) {
          mmBadge.textContent = totalQty > 99 ? '99+' : String(totalQty);
          mmBadge.hidden = false;
        } else {
          mmBadge.hidden = true;
        }
      }
    } catch (e) {}
  }

  // ---- Rede de segurança para a ESTRUTURA A (.box-total-btn) ----
  // A estrutura B tem recompute periódico (mmRecomputeMobileTotal @800ms); a
  // estrutura A NÃO tinha. Causa-raiz (confirmada via instrumentação ao vivo):
  // ao editar in-session (qty +/- nativo do Magazord, ou delete), o
  // mmRecomputeDrawerTotal calcula o total CORRETO e dispara um tween (~420ms),
  // MAS o Magazord re-renderiza o .box-total-btn async (~2s depois) com o total
  // GATED/estale, sobrescrevendo o resultado do tween — e como nada reafirma
  // depois, o total fica congelado no valor anterior. Validado que o Magazord
  // ASSENTA (não reescreve continuamente) e que uma escrita DIRETA no strong
  // fresco persiste. Logo: este reconcile roda @800ms, e quando detecta
  // divergência reescreve o total com forceDirect (escrita atômica que gruda
  // assim que o Magazord assenta). Idempotente (no-op quando já correto) e
  // no-op na estrutura B (sem .box-total-btn).
  function mmReconcileDrawerTotalA() {
    var drawer = document.querySelector('.carrinho-rapido-ctn');
    if (!drawer || !drawer.querySelector('.box-total-btn')) return;
    var items = drawer.querySelectorAll('.cart-item:not(.mm-removing)');
    if (!items.length) return; // vazio → o estado-vazio cuida do rodapé
    var totalEl = drawer.querySelector('.box-total-btn .linha-total .valor-final > .valor > strong') ||
                  drawer.querySelector('.box-total-btn .linha-total .valor-final strong');
    if (!totalEl) return;
    var sumLines = mmComputeLineSum(items);
    if (!(sumLines > 0.01)) return;
    var ratio = parseFloat(drawer.dataset.mmTotalRatio || '0.95') || 0.95;
    // Frete: MESMA derivação do mmRecomputeDrawerTotal (snapshot + CEP), pra que
    // o expected do pre-check bata com o que a função de fato escreve.
    var cep = mmReadCep();
    var snap = mmReadCartSnapshot();
    var snapCepMatches = snap && snap.cepValue && snap.cepValue.replace(/\D/g, '') === cep;
    var hasShipping = !!(cep && snap && snapCepMatches && snap.shipping != null && !isNaN(snap.shipping));
    if (!hasShipping && drawer.dataset.mmShipPendingFetch === '1' && cep && snap && snap.shipping != null) {
      hasShipping = true;
    }
    var shippingAmount = hasShipping ? parseFloat(snap.shipping) : 0;
    var expected = sumLines * ratio + shippingAmount;
    var displayed = parseBrlFromText(totalEl.textContent);
    // Pre-check barato: só recalcula (que reescreve total + economiza + 12x +
    // frete) quando há divergência real — evita re-render do bloco de frete a
    // cada tick.
    if (isNaN(displayed) || Math.abs(expected - displayed) > 0.01) {
      mmRecomputeDrawerTotal(drawer, true); // forceDirect: escrita atômica
    }
  }

  // ---- Mini-carrinho MOBILE (DOM diferente do desktop) ----
  // O drawer mobile (#cart-preview-area > div.z-[9999]) NÃO tem
  // .box-total-btn/.linha-total/.valor-final — usa .valor-pix (total PIX) e o
  // nosso .installment-total (12x). Logo mmRecomputeDrawerTotal não o alcança, e o
  // atualizaPreview do Magazord é gated (não roda com o drawer aberto), então o
  // total ficava preso no valor de 1 item ao mudar a quantidade. Aqui recalculamos
  // o total PIX + 12x a partir do Σ(preço×qtd) e atualizamos o badge. No desktop
  // esse drawer não existe → no-op (mmFindMobileDrawer retorna null).
  // Acha um drawer "estrutura B" (footer .area-finalizar-compra/.valor-pix, SEM
  // .box-total-btn). Isso cobre DOIS casos que o Magazord renderiza igual:
  //   1) overlay mobile  #cart-preview-area > div.z-[9999]
  //   2) mini-drawer desktop da home/vitrine  .carrinho-rapido-ctn SEM .box-total-btn
  // O drawer da /checkout/cart (estrutura A, com .box-total-btn) é tratado pelo
  // diffAndAnimate/mmRecomputeDrawerTotal e é IGNORADO aqui.
  function mmFindMobileDrawer() {
    var ov = document.querySelector('#cart-preview-area > div[class*="z-[9999]"]');
    if (ov) return ov;
    // Marcador POSITIVO de estrutura-B: tem .valor-pix E não tem .box-total-btn. Exigir
    // .valor-pix (e não só ausência de box-total-btn) evita pegar um drawer estrutura-A
    // que perca .box-total-btn transitoriamente num re-render do Magazord (ele não tem
    // .valor-pix) — senão a normalização .valor plana corromperia o span .mm-cents.
    var ctn = document.querySelector('.carrinho-rapido-ctn');
    if (ctn && !ctn.querySelector('.box-total-btn') && ctn.querySelector('.valor-pix')) return ctn;
    return null;
  }
  function mmInjectMobileSavings(drawer, pixDiscount) {
    var inst = drawer.querySelector('.installment-total');
    if (!inst || !inst.parentElement) return;
    var anchor = inst.parentElement;
    var existing = anchor.querySelector('.mm-cart-savings-mobile');
    if (!pixDiscount || pixDiscount < 0.01) { if (existing) existing.remove(); return; }
    var txt = 'Você economiza ' + formatBrlNum(pixDiscount) + ' com PIX';
    if (existing) { if (existing.textContent !== txt) existing.textContent = txt; return; }
    var el = document.createElement('span');
    el.className = 'mm-cart-savings-mobile';
    el.textContent = txt;
    if (inst.nextSibling) anchor.insertBefore(el, inst.nextSibling);
    else anchor.appendChild(el);
  }

  // BUG "carrinho errado" (PIX/Cartão): após um ADD pela vitrine, o Magazord
  // re-renderiza o mini-drawer DESKTOP como "estrutura B" (.area-finalizar-compra)
  // com o rodapé de pagamento em DUAS LINHAS cruas "PIX R$X / Cartão R$Y / 12x".
  // Isso é visualmente COMPLETAMENTE diferente do carrinho correto (estrutura A
  // .box-total-btn: "Total R$X No PIX / Você economiza / ou 12x"). O usuário NÃO
  // quer ver o layout PIX/Cartão de jeito nenhum.
  //
  // Não dá pra forçar a estrutura A: o Zord.checkout.atualizaPreview do Magazord
  // faz .html() num nó React e CRASHA (apaga o #cart-preview-area inteiro —
  // confirmado live). Então normalizamos a estrutura B: escondemos o bloco de
  // pagamento nativo (forma-pix/forma-cartao) e renderizamos nosso .mm-cart-total-b
  // com EXATAMENTE o layout da estrutura A, a partir dos mesmos valores
  // (sumLines/ratio já computados pelo mmRecomputeMobileTotal). Funciona inclusive
  // no 1º item adicionado (sem depender de snapshot da estrutura A).
  //
  // Escopo: SÓ o mini-drawer desktop (.carrinho-rapido-ctn). O overlay mobile
  // (#cart-preview-area) mantém seu layout próprio.
  function mmRenderStructureBTotal(drawer, sumLines, ratio) {
    if (!drawer || !drawer.classList || !drawer.classList.contains('carrinho-rapido-ctn')) return;
    if (drawer.querySelector('.box-total-btn')) return; // estrutura A real — não mexe
    var area = drawer.querySelector('.area-finalizar-compra');
    if (!area || !(sumLines > 0)) return;
    var formaPix = area.querySelector('.forma-pix');
    var nativePay = formaPix ? formaPix.parentElement : null;
    if (!nativePay) return; // sem o bloco PIX/Cartão nativo não há o que normalizar
    var pix = sumLines * ratio;
    var parcela = sumLines / 12;
    var savings = sumLines - pix;
    nativePay.classList.add('mm-native-pay-hidden');
    var block = area.querySelector('.mm-cart-total-b');
    if (!block) {
      block = document.createElement('div');
      block.className = 'mm-cart-total-b';
      block.innerHTML =
        '<span class="mm-tb-label">Total</span>' +
        '<span class="mm-tb-row"><strong class="mm-tb-value"></strong><span class="mm-tb-pix">No PIX</span></span>' +
        '<span class="mm-tb-savings"></span>' +
        '<span class="mm-tb-parcela"></span>';
      // Insere logo após o bloco nativo (que fica escondido), acima do checkout.
      if (nativePay.nextSibling) area.insertBefore(block, nativePay.nextSibling);
      else area.appendChild(block);
    }
    var valEl = block.querySelector('.mm-tb-value');
    var nv = formatBrlNum(pix);
    if (valEl && valEl.textContent !== nv) valEl.textContent = nv;
    var savEl = block.querySelector('.mm-tb-savings');
    if (savEl) {
      if (savings >= 0.01) {
        var sv = 'Você economiza ' + formatBrlNum(savings) + ' com PIX';
        if (savEl.textContent !== sv) savEl.textContent = sv;
        savEl.style.display = '';
      } else { savEl.style.display = 'none'; }
    }
    var parcEl = block.querySelector('.mm-tb-parcela');
    if (parcEl) {
      var pv = 'ou em até 12x de ' + formatBrlNum(parcela) + ' no cartão';
      if (parcEl.textContent !== pv) parcEl.textContent = pv;
    }
  }

  function mmRecomputeMobileTotal(drawer) {
    drawer = drawer || mmFindMobileDrawer();
    // Só atua em drawers "estrutura B": marcador POSITIVO = tem .valor-pix E NÃO tem
    // .box-total-btn (overlay mobile + mini-drawer desktop da home). O drawer da
    // /checkout/cart (estrutura A) é tratado por mmRecomputeDrawerTotal. Exigir
    // .valor-pix fecha a corrida em que um drawer estrutura-A perde .box-total-btn
    // num re-render mas mantém itens .mm-cents — rodar a normalização .valor plana
    // ali corromperia o span de centavos.
    if (!drawer || drawer.querySelector('.box-total-btn') || !drawer.querySelector('.valor-pix')) return;
    var items = drawer.querySelectorAll('.cart-item:not(.mm-removing)');
    // Badge: usa CONTAGEM DE ITENS (items.length), espelhando getCartCountFromSources
    // do header (que conta .cart-item) pra NÃO brigar com ele. E NUNCA esconde a
    // partir daqui — espelha a regra "não confie no 0 stale" (header.js:1053-1055):
    // com a gaveta FECHADA o overlay mobile pode estar vazio enquanto o carrinho tem
    // itens (usuário recorrente). Então só atualiza pra cima quando há itens; quando
    // vazio, deixa o header decidir (senão o setInterval esconderia o badge correto).
    var count = items.length;
    var badge = document.getElementById('mm-h-cart-count');
    if (badge && count > 0) {
      var btxt = count > 99 ? '99+' : String(count);
      // Só escreve quando muda (espelha o padrão idempotente do PIX/12x abaixo) —
      // evita rewrite redundante a cada tick de 800ms.
      if (badge.textContent !== btxt || badge.hidden) { badge.textContent = btxt; badge.hidden = false; }
    }
    if (!items.length) return;
    var sumLines = mmComputeLineSum(items); // Σ(data-item-price × qtd) = total CARTÃO
    if (!(sumLines > 0)) return;
    // Normaliza o valor de CADA item pro TOTAL DA LINHA (preço × qtd), igual à
    // página /checkout/cart e ao drawer desktop. Sem isto, quando a qtd sobe via
    // ADD da vitrine (não pelos nossos botões +/-), o item mostra o preço UNITÁRIO
    // (ex.: qtd 2 mas "R$ 1.939,27" em vez de "R$ 3.878,54"). Atualiza o <span>
    // interno pra preservar o bold; idempotente (só escreve quando o valor muda).
    Array.prototype.forEach.call(items, function (it) {
      var up = parseFloat(it.getAttribute('data-item-price')) || 0;
      if (!(up > 0)) return;
      var q = parseInt(it.getAttribute('data-item-quantity'));
      if (!q || isNaN(q)) { var qd = it.querySelector('.qty-display'); q = qd ? (parseInt(qd.textContent) || 1) : 1; }
      var valorEl = it.querySelector('.valor');
      if (!valorEl) return;
      var lineTotal = up * q;
      var target = valorEl.querySelector('span') || valorEl;
      var cur = parseBrlFromText(target.textContent);
      if (isNaN(cur) || Math.abs(cur - lineTotal) > 0.005) target.textContent = formatBrlNum(lineTotal);
    });
    // Razão PIX capturada 1x do valor nativo inicial (PIX / sumLines ≈ 0,95).
    var pixWrap = drawer.querySelector('.valor-pix');
    var pixValueEl = pixWrap ? (pixWrap.querySelector('span') || pixWrap) : null;
    if (!drawer.dataset.mmMobileRatio && pixValueEl) {
      var initialPix = parseBrlFromText(pixValueEl.textContent);
      if (!isNaN(initialPix) && initialPix > 0) {
        var rr = initialPix / sumLines;
        // Guard apertado (0.80–1.0): desconto PIX real é ~5–15% (razão ~0,85–0,95).
        // Rejeita capturas de estado stale (ex.: PIX nativo de 1 item sobre sumLines
        // de 2+ itens dá razão << 0,80) → cai no fallback 0,95.
        if (rr > 0.80 && rr <= 1.0001) drawer.dataset.mmMobileRatio = String(rr);
      }
    }
    var ratio = parseFloat(drawer.dataset.mmMobileRatio || '0.95');
    if (!(ratio > 0.80 && ratio <= 1.0001)) ratio = 0.95;
    // Total PIX = sumLines × ratio. Atualiza só o <span> interno (preserva " no PIX").
    // Escreve apenas quando o valor muda → converge sem loop no MutationObserver.
    if (pixValueEl) {
      var targetPix = sumLines * ratio;
      var curPix = parseBrlFromText(pixValueEl.textContent);
      if (isNaN(curPix) || Math.abs(curPix - targetPix) > 0.005) pixValueEl.textContent = formatBrlNum(targetPix);
    }
    // 12x = total CARTÃO (sem desconto PIX) / 12.
    var inst = drawer.querySelector('.installment-total');
    if (inst) {
      var targetParc = sumLines / 12;
      var curParc = parseBrlFromText(inst.textContent);
      if (isNaN(curParc) || Math.abs(curParc - targetParc) > 0.005) inst.textContent = 'ou 12x de ' + formatBrlNum(targetParc);
    }
    // ---- Frete: porta a barra de frete (ENVIO PARA / frete grátis / delivery) pro
    // overlay mobile, que não tem .box-total-btn. Espelha a derivação do desktop
    // (mmRecomputeDrawerTotal): hasShipping/shippingAmount vêm do snapshot quando o CEP
    // bate. Re-renderiza só quando a assinatura muda OU o bloco sumiu (re-render do
    // Magazord) — evita churn de innerHTML a cada tick. Pula durante edição de CEP.
    var mCep = mmReadCep();
    var mSnap = mmReadCartSnapshot();
    var mSnapCepMatches = mSnap && mSnap.cepValue && mSnap.cepValue.replace(/\D/g, '') === mCep;
    var mHasShipping = !!(mCep && mSnap && mSnapCepMatches && mSnap.shipping != null && !isNaN(mSnap.shipping));
    var mShipAmount = mHasShipping ? parseFloat(mSnap.shipping) : 0;
    var shipSig = (mCep || '') + '|' + sumLines.toFixed(2) + '|' + (mHasShipping ? 1 : 0) + '|' + mShipAmount;
    var existingBlock = drawer.querySelector('.mm-cart-ship');
    var editing = existingBlock && existingBlock.dataset.mmEditing === '1';
    if (!editing && (!existingBlock || drawer.dataset.mmMobShipSig !== shipSig)) {
      drawer.dataset.mmMobShipSig = shipSig;
      mmRenderShipping(drawer, sumLines, mShipAmount, mHasShipping);
    }
    mmMaybeFetchShipping(drawer); // dedupe + rate-limit internos protegem contra spam
    mmInjectMobileSavings(drawer, sumLines - sumLines * ratio);
    // Desktop estrutura B: substitui o rodapé cru "PIX/Cartão" pelo layout correto
    // (estrutura A "Total No PIX / economiza / 12x"). No-op no overlay mobile.
    mmRenderStructureBTotal(drawer, sumLines, ratio);
  }

  function mmTweenTotal(el, from, to) {
    if (!el || isNaN(from) || isNaN(to)) return;
    var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { el.innerHTML = formatBrlHtml(to); return; }
    var dur = 420;
    var start = performance.now();
    function ease(t) { return 1 - Math.pow(1 - t, 3); }
    (function frame(now) {
      var t = Math.min(1, (now - start) / dur);
      el.innerHTML = formatBrlHtml(from + (to - from) * ease(t));
      if (t < 1) requestAnimationFrame(frame);
    })(start);
  }

  // Quantity change handler — optimistic update + direct POST
  function mmQtyChange(cartItem, dataId, delta, numDisplay, btnMinus, btnPlus) {
    if (!cartItem || !dataId) return;
    var currentQty = parseInt(numDisplay.textContent) || 1;
    var newQty = currentQty + delta;
    if (newQty < 1) return;
    // Capture total ratio BEFORE we mutate any item values (otherwise the
    // captured ratio would already reflect the post-mutation sum).
    var drawer = cartItem.closest('.carrinho-rapido-ctn');
    mmCaptureTotalRatio(drawer);
    // Disable buttons during request
    btnMinus.disabled = true;
    btnPlus.disabled = true;
    // Unit price from data attribute (authoritative — set by Magazord SSR)
    var unitPrice = parseFloat(cartItem.getAttribute('data-item-price')) || 0;
    // Optimistic update: qty display + item .valor + data-item-quantity attr
    numDisplay.textContent = newQty;
    cartItem.setAttribute('data-item-quantity', newQty);
    var valorEl = cartItem.querySelector('.valor');
    if (valorEl) {
      var newItemValue = unitPrice * newQty;
      valorEl.textContent = formatBrlNum(newItemValue);
      valorEl.classList.remove('mm-pop');
      void valorEl.offsetWidth;
      valorEl.classList.add('mm-pop');
      setTimeout(function () { valorEl.classList.remove('mm-pop'); }, 450);
    }
    var drawer = cartItem.closest('.carrinho-rapido-ctn');
    var op = delta > 0 ? 'adicionaItem' : 'removeItem';
    // Mark pending BEFORE recompute so mmRecomputeDrawerTotal keeps the
    // old shipping in the total instead of dropping to items-only.
    // Guard `drawer`: em .content-cart (página /checkout/cart) e no drawer mobile,
    // closest('.carrinho-rapido-ctn') é null — sem o guard, este deref lançava
    // TypeError ANTES do POST (quando havia CEP), e a mudança de qtd nunca ia pro
    // servidor ("mexo e não reflete"). Agora o POST sempre dispara.
    if (mmReadCep() && drawer) drawer.dataset.mmShipPendingFetch = '1';
    // Recompute (sees pendingFetch → retains old shipping)
    mmRecomputeDrawerTotal(drawer);
    // Mobile: o drawer (desktop) é null aqui. O MutationObserver do
    // #cart-preview-area só observa childList (não a mudança de texto da qtd),
    // então recalculamos o total do mini-carrinho mobile explicitamente.
    mmRecomputeMobileTotal();
    // Now show the spinner on the rendered frete value + TOTAL label
    if (mmReadCep()) mmShowShippingLoading(drawer);
    mmPostCartOp(op, dataId)
      .catch(function () {
        numDisplay.textContent = currentQty;
        cartItem.setAttribute('data-item-quantity', currentQty);
        if (valorEl) valorEl.innerHTML = formatBrlHtml(unitPrice * currentQty);
        if (drawer) drawer.dataset.mmShipPendingFetch = '';
        mmRecomputeDrawerTotal(drawer);
        mmRecomputeMobileTotal();
      })
      .then(function () {
        btnMinus.disabled = false;
        btnPlus.disabled = false;
        var cep = mmReadCep();
        if (cep && drawer) {
          mmShowShippingLoading(drawer);
          mmFetchShipping(cep, true).then(function (data) {
            drawer.dataset.mmShipPendingFetch = '';
            if (data) mmApplyShippingFetch(drawer, cep, data);
            else mmHideShippingLoading(drawer);
          });
        } else if (drawer) {
          drawer.dataset.mmShipPendingFetch = '';
        }
      });
  }

  // Direct delete — fires POST, animates out, then recomputes total.
  // Handles empty-cart edge case: skips shipping recalc, updates badge,
  // and dispatches reactItemAddedToCart so header badge + empty state sync.
  function mmDeleteItem(cartItem, dataId) {
    if (!cartItem || !dataId) return;
    var drawer = cartItem.closest('.carrinho-rapido-ctn');
    mmCaptureTotalRatio(drawer);
    var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var delay = prefersReduced ? 0 : 360;
    if (!prefersReduced) cartItem.classList.add('mm-removing');
    setTimeout(function () {
      if (cartItem.parentNode) cartItem.parentNode.removeChild(cartItem);
      // Count remaining real items (exclude our empty wrapper)
      var remaining = drawer ? drawer.querySelectorAll('.cart-item:not(.mm-removing)') : [];
      var isEmpty = remaining.length === 0;
      if (isEmpty) {
        // Cart is now empty — don't recalculate shipping, just clean up.
        // Guard `drawer`: no drawer mobile, closest('.carrinho-rapido-ctn') é
        // null — sem o guard, deletar o último item lançava TypeError aqui.
        if (drawer) {
          drawer.dataset.mmShipPendingFetch = '';
          var shipBlock = drawer.querySelector('.mm-cart-ship');
          if (shipBlock) shipBlock.remove();
          // Hide the footer (total + CTA) since cart is empty
          var footer = drawer.querySelector('.box-total-btn, .area-finalizar-compra');
          if (footer) footer.style.display = 'none';
        }
        // Force empty state — don't wait for Magazord React to render
        // .box-empty-cart (it won't after our custom delete). O observer de
        // .content-cart no header.js chama enhanceEmptyCart, MAS sozinho ele
        // falha: o contador nativo .item-ctn fica estale (não-zero) após nosso
        // POST, então getCartCountFromSources() retorna não-zero e o estado
        // vazio NÃO injeta (bug: corpo cinza em branco, sem "carrinho vazio").
        // forceEmptyCartState zera o .item-ctn e re-dispara enhanceEmptyCart —
        // determinístico. Validado live (.item-ctn "2" → "0" → wrapper injeta).
        if (typeof window.__mmForceEmptyCartState === 'function') {
          window.__mmForceEmptyCartState(drawer);
        }
        // Also keep the drawer OPEN so the user sees the suggestions.
      } else {
        mmRecomputeDrawerTotal(drawer);
        if (mmReadCep()) mmShowShippingLoading(drawer);
      }
      // Update header badge DIRECTLY with DOM count — Zord.get('cart.size')
      // is stale after our POST and would show the old count.
      var badge = document.getElementById('mm-h-cart-count');
      var cartAction = document.getElementById('mm-h-cart');
      var count = remaining.length;
      if (badge) {
        badge.textContent = count > 99 ? '99+' : String(count);
        badge.hidden = count === 0;
      }
      if (cartAction) {
        cartAction.setAttribute('aria-label', 'Carrinho, ' + count + ' ' + (count === 1 ? 'item' : 'itens'));
      }
      // Mobile: recalcula total PIX/12x do mini-carrinho após remover item.
      mmRecomputeMobileTotal();
    }, delay);
    mmPostCartOp('deleteItem', dataId).catch(function () {}).then(function () {
      // After server confirms, update badge again with authoritative DOM count
      var remaining = drawer ? drawer.querySelectorAll('.cart-item:not(.mm-removing)') : [];
      var badge2 = document.getElementById('mm-h-cart-count');
      if (badge2) {
        badge2.textContent = remaining.length > 99 ? '99+' : String(remaining.length);
        badge2.hidden = remaining.length === 0;
      }
      if (remaining.length === 0) {
        if (drawer) drawer.dataset.mmShipPendingFetch = '';
        return; // empty — no shipping to recalculate
      }
      var cep = mmReadCep();
      if (cep && drawer) {
        drawer.dataset.mmShipPendingFetch = '1';
        mmShowShippingLoading(drawer);
        mmFetchShipping(cep, true).then(function (data) {
          drawer.dataset.mmShipPendingFetch = '';
          if (data) mmApplyShippingFetch(drawer, cep, data);
          else mmHideShippingLoading(drawer);
        });
      } else if (drawer) {
        drawer.dataset.mmShipPendingFetch = '';
      }
    });
  }

  // Expose to the outer scope so interceptarDeleteComConfirmacao can use it
  window.__mmDeleteItem = mmDeleteItem;

  // ====== Animations: new-item add + total pop + tween ======
  // Tracks last-seen state so we know what changed between mutations.
  var lastTotalText = null;
  var lastItemIds = new Set();
  var totalTweenRaf = null;

  // Parse a BRL price string ("R$ 5.530,90") into a number (5530.9)
  function parseBrl(text) {
    if (!text) return NaN;
    var m = String(text).replace(/\s/g, '').match(/([\d.,]+)/);
    if (!m) return NaN;
    // Remove thousands separator (.) then swap decimal comma for dot
    var normalized = m[1].replace(/\./g, '').replace(',', '.');
    var n = parseFloat(normalized);
    return isNaN(n) ? NaN : n;
  }
  function formatBrl(n) {
    if (isNaN(n)) return '';
    return 'R$ ' + n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  // Tween the total value from oldVal → newVal across ~420ms with ease-out cubic.
  // Writes the formatted BRL into targetEl.textContent each frame.
  function tweenTotalValue(targetEl, oldVal, newVal) {
    if (!targetEl || isNaN(oldVal) || isNaN(newVal)) return;
    if (totalTweenRaf) cancelAnimationFrame(totalTweenRaf);
    var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      targetEl.textContent = formatBrl(newVal);
      return;
    }
    var duration = 420;
    var start = performance.now();
    function ease(t) { return 1 - Math.pow(1 - t, 3); } // easeOutCubic
    function frame(now) {
      var elapsed = now - start;
      var t = Math.min(1, elapsed / duration);
      var value = oldVal + (newVal - oldVal) * ease(t);
      targetEl.textContent = formatBrl(value);
      if (t < 1) totalTweenRaf = requestAnimationFrame(frame);
      else totalTweenRaf = null;
    }
    totalTweenRaf = requestAnimationFrame(frame);
  }

  // Find the primary total value element in the drawer, handling both
  // post-AJAX (.box-total-btn .linha-total .valor-final .valor strong) and
  // older structures (.valor-pix).
  function findTotalValueEl(root) {
    if (!root) return null;
    return (
      root.querySelector('.box-total-btn .linha-total .valor-final > .valor > strong') ||
      root.querySelector('.box-total-btn .linha-total .valor-final strong') ||
      root.querySelector('.valor-pix strong') ||
      root.querySelector('.valor-pix')
    );
  }
  function findValorFinalWrapper(root) {
    if (!root) return null;
    return root.querySelector('.box-total-btn .linha-total .valor-final');
  }

  function pulseTotal(drawer) {
    var wrap = findValorFinalWrapper(drawer);
    if (!wrap) return;
    wrap.classList.remove('mm-pop');
    // Force reflow so the animation restarts cleanly
    void wrap.offsetWidth;
    wrap.classList.add('mm-pop');
    setTimeout(function () { wrap.classList.remove('mm-pop'); }, 450);
  }

  function diffAndAnimate() {
    var drawer = document.querySelector('.carrinho-rapido-ctn');
    if (!drawer) return;

    // Note: we intentionally do NOT tween total value here — that's owned
    // exclusively by mmRecomputeDrawerTotal which runs synchronously with
    // the +/- / delete actions. Running a second tween off a MutationObserver
    // would race with the first one and produce incorrect intermediate values.

    // On first observation (after Magazord populates the drawer content),
    // capture the total ratio and recompute the total + shipping block
    // ONCE so the initial render reflects shipping inclusion. Subsequent
    // updates go through mmRecomputeDrawerTotal from the +/- / delete handlers.
    // Re-enhancement gate. O Magazord (atualizaPreview) re-renderiza o innerHTML
    // de .carrinho-rapido async (após add-to-cart, +/- ou polling próprio),
    // substituindo o .box-total-btn por um total CRU. O guard ANTIGO usava
    // drawer.dataset.mmShipRendered no .carrinho-rapido-ctn EXTERNO, que persiste
    // — então nosso total/frete NUNCA era reaplicado pós-render e o carrinho cru
    // "sobrescrevia o nosso". Agora gateamos por um marcador no .box-total-btn
    // INTERNO (que o Magazord substitui a cada re-render): nossas próprias mutações
    // mantêm o marcador setado (sem loop no MutationObserver — atributo não é
    // observado), e um re-render real do Magazord apaga o marcador → reaplicamos.
    var liveItems = drawer.querySelectorAll('.cart-item:not(.mm-removing)');
    if (liveItems.length > 0) {
      var boxTotal = drawer.querySelector('.box-total-btn');
      if (boxTotal && boxTotal.dataset.mmTotalEnhanced !== '1') {
        mmCaptureTotalRatio(drawer); // capture pre-mutation ratio (uses line totals)
        mmNormalizeItemValores(drawer); // .valor → line total (price × qty)
        mmRecomputeDrawerTotal(drawer); // includes mmRenderShipping + shipping fold-in
        boxTotal.dataset.mmTotalEnhanced = '1';
        drawer.dataset.mmShipRendered = '1';
        mmMaybeFetchShipping(drawer);
      }
    }

    // Estrutura B (.carrinho-rapido-ctn da home/vitrine, SEM .box-total-btn): o
    // enhancement de total/frete vai pelo caminho "mini" (mmRecomputeMobileTotal),
    // não pelo box-total-btn. Sem isto, o mini-drawer desktop abria CRU (Image #1) —
    // o interval de 800ms só pegaria com atraso visível.
    if (!drawer.querySelector('.box-total-btn')) mmRecomputeMobileTotal(drawer);

    // Mark new items with .mm-added for entrance animation
    var items = drawer.querySelectorAll('.cart-item');
    var currentIds = new Set();
    items.forEach(function (it) {
      var id = it.id || it.getAttribute('data-item-id') || '';
      if (!id) return;
      currentIds.add(id);
      if (!lastItemIds.has(id) && lastItemIds.size > 0) {
        // New item added to an existing drawer — play entrance
        it.classList.add('mm-added');
        setTimeout(function () { it.classList.remove('mm-added'); }, 500);
      }
    });
    lastItemIds = currentIds;
  }

  function observeDrawerForAnimations() {
    var drawer = document.querySelector('.carrinho-rapido-ctn');
    if (!drawer || drawer.dataset.mmAnimObserved) return;
    drawer.dataset.mmAnimObserved = '1';
    diffAndAnimate(); // initial snapshot
    var obs = new MutationObserver(function () {
      // Debounce: let Magazord's render finish before we diff
      clearTimeout(observeDrawerForAnimations._t);
      observeDrawerForAnimations._t = setTimeout(diffAndAnimate, 60);
    });
    obs.observe(drawer, { childList: true, subtree: true, characterData: true });
  }

  function iniciar() {
    registrarAjaxListener();
    interceptarDeleteComConfirmacao();
    redirecionarFinalizarCompra();

    var alvo = document.getElementById('cart-preview-area');
    if (alvo) {
      var obs = new MutationObserver(function() {
        setTimeout(criarControlesQtd, 100);
        setTimeout(observeDrawerForAnimations, 150);
        // Mobile: após o Magazord popular/re-renderizar o drawer (add, abrir,
        // atualizaPreview), recalcula o total PIX/12x + badge. Roda DEPOIS do
        // criarControlesQtd (que cria o .installment-total). No-op no desktop.
        setTimeout(mmRecomputeMobileTotal, 180);
        // Estrutura A: reafirma o total correto após o Magazord re-renderizar
        // com valor gated/estale (qty +/- nativo ou resposta do delete).
        setTimeout(mmReconcileDrawerTotalA, 220);
      });
      obs.observe(alvo, { childList: true, subtree: true });
    }
    // Fallback: executar periodicamente
    setInterval(criarControlesQtd, 800);
    setInterval(observeDrawerForAnimations, 800);
    setInterval(mmRecomputeMobileTotal, 800);
    setInterval(mmReconcileDrawerTotalA, 800);
    criarControlesQtd();
    observeDrawerForAnimations();
    mmRecomputeMobileTotal();
    mmReconcileDrawerTotalA();
  }

  // Aguardar DOM pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();