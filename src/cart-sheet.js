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

  function criarControlesQtd() {
    injetarParcelamentoTotal();
    var items = document.querySelectorAll('#cart-preview-area .qtd-value');
    items.forEach(function(qtdDiv) {
      // Evitar duplicar botoes
      if (qtdDiv.querySelector('.qty-btn-minus')) return;

      var spanQtd = qtdDiv.querySelector('span:first-child');
      if (!spanQtd) return;

      var match = spanQtd.textContent.match(/(\d+)/);
      var qty = match ? parseInt(match[1]) : 1;

      // Pegar data-id do botao remover (ID interno do Magazord)
      var removeBtn = qtdDiv.querySelector('.cart-remove-item');
      var dataId = removeBtn ? removeBtn.getAttribute('data-id') : null;
      if (!dataId) return;

      // Criar botao minus
      var btnMinus = document.createElement('button');
      btnMinus.className = 'qty-btn-minus';
      btnMinus.textContent = '\u2212';
      btnMinus.type = 'button';
      btnMinus.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof Zord !== 'undefined' && Zord.checkout) {
          Zord.checkout.removeQuantidade(parseInt(dataId), true);
        }
      });

      // Criar display do numero
      var numDisplay = document.createElement('span');
      numDisplay.className = 'qty-display';
      numDisplay.textContent = qty;

      // Criar botao plus
      var btnPlus = document.createElement('button');
      btnPlus.className = 'qty-btn-plus';
      btnPlus.textContent = '+';
      btnPlus.type = 'button';
      btnPlus.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof Zord !== 'undefined' && Zord.checkout) {
          Zord.checkout.adicionaQuantidade(parseInt(dataId));
        }
      });

      // Inserir botoes no inicio do qtdDiv (antes dos spans existentes)
      qtdDiv.insertBefore(btnPlus, qtdDiv.firstChild);
      qtdDiv.insertBefore(numDisplay, qtdDiv.firstChild);
      qtdDiv.insertBefore(btnMinus, qtdDiv.firstChild);
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