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
      // que deixa tudo verde olive no hover. Move o trash pra dentro do .qtd-value
      // (inline com qty pill, igual ao padrão mobile e ao /checkout/cart .mm-item-controls),
      // e esconde o wrapper vazio pra não capturar hover.
      var prodRemoveWrap = cartItem.querySelector('.prod-remove');
      if (prodRemoveWrap && !qtdDiv.contains(removeBtn)) {
        qtdDiv.appendChild(removeBtn);
        prodRemoveWrap.style.display = 'none';
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
      if (qty <= 1) btnMinus.disabled = true;
      btnMinus.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof Zord !== 'undefined' && Zord.checkout) {
          Zord.checkout.removeQuantidade(parseInt(dataId), true);
        }
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
        if (typeof Zord !== 'undefined' && Zord.checkout) {
          Zord.checkout.adicionaQuantidade(parseInt(dataId));
        }
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
        if (typeof Zord !== 'undefined' && Zord.checkout) {
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

  function iniciar() {
    registrarAjaxListener();
    interceptarDeleteComConfirmacao();
    redirecionarFinalizarCompra();

    var alvo = document.getElementById('cart-preview-area');
    if (alvo) {
      var obs = new MutationObserver(function() {
        setTimeout(criarControlesQtd, 100);
      });
      obs.observe(alvo, { childList: true, subtree: true });
    }
    // Fallback: executar periodicamente
    setInterval(criarControlesQtd, 800);
    criarControlesQtd();
  }

  // Aguardar DOM pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();