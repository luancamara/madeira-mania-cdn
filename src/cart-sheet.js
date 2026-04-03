</div><div class='pagina-conteudo-adicional conteudo-adicional-14'><style>
/* =============================================
   CARRINHO MOBILE - Override Magazord v2
   Referencia: Figma "Cart List" - Furniture eCommerce

   COMO APLICAR NO MAGAZORD:
   - Conteudo Adicional > Novo
   - Posicao: Cabecalho Superior
   - Filtro dispositivo: Mobile
   - Aplicar em: TODAS AS PAGINAS (nao apenas Home)

   SELETORES: baseados no DOM mobile real do Magazord
   #cart-preview-area como raiz

   APIs Magazord descobertas (referencia):
   - Zord.checkout.adicionaQuantidade(dataId)
   - Zord.checkout.removeQuantidade(dataId, true)
   - Zord.checkout.deleteItem(dataId)
   - Zord.checkout.atualizaPreview()
   - Zord.checkout.atualizaContadorCarrinho()
   - .cart-remove-item[data-id] = ID interno do item
   ============================================= */

@media (max-width: 768px) {

  /* ==========================================
     SITE HEADER - esconder quando carrinho aberto
     ========================================== */

  #cart-preview-area .shadow-overlay {
    background: #f4f4f4 !important;
  }

  /* Esconder header APENAS quando overlay do CARRINHO abre
     - Usa .content-cart como classe exclusiva do overlay do carrinho (descendente, não :has aninhado)
     - Não afeta: Menu (z-20), Pesquisa (tem #frm-search), Favoritos (não tem .content-cart) */
  header:has(.z-\[9999\].translate-x-\[0\] .content-cart) > .z-40 {
    display: none !important;
  }

  header:has(.z-\[9999\].translate-x-\[0\] .content-cart) > .fixed.bottom-0 {
    visibility: hidden !important;
    height: 0 !important;
    min-height: 0 !important;
    overflow: hidden !important;
    padding: 0 !important;
  }

  header:has(.z-\[9999\].translate-x-\[0\] .content-cart) > .fixed.bottom-0 #cart-preview-area,
  header:has(.z-\[9999\].translate-x-\[0\] .content-cart) > .fixed.bottom-0 #cart-preview-area .h-dvh,
  header:has(.z-\[9999\].translate-x-\[0\] .content-cart) > .fixed.bottom-0 #cart-preview-area .h-dvh > div {
    visibility: visible !important;
  }

  /* ==========================================
     HEADER - fundo cinza, titulo + fechar
     ========================================== */
  #cart-preview-area .border-b.border-solid {
    background: #f4f4f4 !important;
    border-bottom: none !important;
    padding: 16px 20px !important;
    min-height: 56px !important;
  }

  #cart-preview-area .border-b.border-solid > button {
    font-size: 16px !important;
    font-weight: 700 !important;
    color: #1a1a1a !important;
    background: transparent !important;
    box-shadow: none !important;
    padding: 0 !important;
  }

  #cart-preview-area .border-b.border-solid > button span {
    font-size: 16px !important;
    font-weight: 700 !important;
    color: #1a1a1a !important;
  }

  #cart-preview-area .border-b.border-solid > button svg {
    display: none !important;
  }

  /* Botao fechar - circulo branco com sombra */
  #cart-preview-area .border-b.border-solid > div {
    width: 40px !important;
    height: 40px !important;
    background: #ffffff !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06) !important;
    cursor: pointer !important;
    padding: 0 !important;
    border: none !important;
  }

  #cart-preview-area .border-b.border-solid > div span {
    display: none !important;
  }

  #cart-preview-area .border-b.border-solid > div svg {
    width: 16px !important;
    height: 16px !important;
  }

  /* ==========================================
     AREA DE CONTEUDO (lista de itens)
     ========================================== */
  #cart-preview-area .content-cart {
    background: #f4f4f4 !important;
    padding: 8px 20px 16px !important;
    gap: 14px !important;
  }

  /* ==========================================
     CARD DO PRODUTO
     ========================================== */
  #cart-preview-area .cart-item {
    background: #ffffff !important;
    border-radius: 16px !important;
    padding: 12px !important;
    min-height: auto !important;
    box-shadow: none !important;
    border: none !important;
    overflow: hidden !important;
    position: relative !important;
  }

  #cart-preview-area .cart-item > div {
    gap: 12px !important;
    padding: 0 !important;
    align-items: flex-start !important;
    min-height: auto !important;
  }

  /* ==========================================
     IMAGEM DO PRODUTO - quadrada com bordas arredondadas
     ========================================== */
  #cart-preview-area .cart-item .prod-img {
    width: 90px !important;
    height: 90px !important;
    min-width: 90px !important;
    min-height: 90px !important;
    max-width: 90px !important;
    max-height: 90px !important;
    border-radius: 12px !important;
    overflow: hidden !important;
    background: #ffffff !important;
    border: none !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin-top: 0 !important;
    flex-shrink: 0 !important;
  }

  #cart-preview-area .cart-item .prod-img figure {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
    height: 100% !important;
    overflow: hidden !important;
    margin: 0 !important;
  }

  #cart-preview-area .cart-item .prod-img img {
    width: 100% !important;
    height: 100% !important;
    max-height: 100% !important;
    object-fit: cover !important;
    border-radius: 0 !important;
    mix-blend-mode: normal !important;
  }

  /* ==========================================
     INFO DO PRODUTO
     ========================================== */

  #cart-preview-area .cart-item .prod-nome {
    font-size: 14px !important;
    font-weight: 700 !important;
    color: #222222 !important;
    line-height: 1.3 !important;
    display: -webkit-box !important;
    -webkit-line-clamp: 2 !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    margin-bottom: 2px !important;
  }

  #cart-preview-area .cart-item .derivacao {
    display: none !important;
  }

  /* Container preco + quantidade */
  #cart-preview-area .cart-item .flex.items-center.justify-between {
    flex-direction: column-reverse !important;
    align-items: flex-start !important;
    gap: 6px !important;
  }

  /* Valor do produto */
  #cart-preview-area .cart-item .valor {
    font-size: 14px !important;
    font-weight: 700 !important;
    color: #1a1a1a !important;
    min-width: auto !important;
    flex: none !important;
    justify-content: flex-start !important;
  }

  #cart-preview-area .cart-item .valor span {
    font-weight: 700 !important;
    color: #1a1a1a !important;
    font-size: 14px !important;
  }

  /* ==========================================
     QUANTIDADE - botoes reais injetados pelo JS
     ========================================== */
  #cart-preview-area .cart-item .qtd-value {
    display: flex !important;
    align-items: center !important;
    gap: 0 !important;
    font-size: 0 !important;
    width: auto !important;
  }

  /* Esconder pseudo-elements decorativos antigos (specificity alta para sobrescrever Magazord CDN) */
  body #cart-preview-area .cart-item .qtd-value.flex.justify-center::before,
  body #cart-preview-area .cart-item .qtd-value.flex.justify-center::after,
  #cart-preview-area .content-cart .cart-item .qtd-value::before,
  #cart-preview-area .content-cart .cart-item .qtd-value::after {
    display: none !important;
    content: none !important;
    width: 0 !important;
    height: 0 !important;
    visibility: hidden !important;
  }

  /* Esconder span original "Qtde: N" e seus pseudo-elements decorativos */
  #cart-preview-area .cart-item .qtd-value > span:not(.qty-display):not(.cart-remove-item) {
    display: none !important;
  }

  /* Botoes reais de quantidade (injetados pelo JS) */
  #cart-preview-area .qty-btn-minus,
  #cart-preview-area .qty-btn-plus {
    width: 30px !important;
    height: 30px !important;
    border: none !important;
    cursor: pointer !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    -webkit-tap-highlight-color: transparent !important;
    outline: none !important;
    padding: 0 !important;
    line-height: 1 !important;
  }

  #cart-preview-area .qty-btn-minus {
    background: transparent !important;
    color: #1a1a1a !important;
    font-size: 18px !important;
  }

  #cart-preview-area .qty-btn-plus {
    background: #1b7a45 !important;
    color: #ffffff !important;
    border-radius: 8px !important;
    font-size: 16px !important;
  }

  #cart-preview-area .qty-btn-plus:active {
    background: #156335 !important;
    transform: scale(0.95) !important;
  }

  #cart-preview-area .qty-display {
    width: 28px !important;
    text-align: center !important;
    font-size: 15px !important;
    font-weight: 600 !important;
    color: #1a1a1a !important;
  }

  /* Trash icon - posicao absoluta no card */
  #cart-preview-area .cart-item .cart-remove-item {
    position: absolute !important;
    top: 12px !important;
    right: 12px !important;
    opacity: 0.3 !important;
    padding: 0 !important;
    cursor: pointer !important;
  }

  #cart-preview-area .cart-item .cart-remove-item svg {
    width: 14px !important;
    height: 14px !important;
  }

  /* ==========================================
     AREA INFERIOR - FINALIZAR COMPRA
     ========================================== */
  #cart-preview-area .border-t.border-solid {
    background: #ffffff !important;
    border-radius: 32px 32px 0 0 !important;
    padding: 24px 24px 28px !important;
    box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.05) !important;
    border-top: none !important;
  }

  #cart-preview-area .title.boleto {
    font-size: 14px !important;
    color: #999999 !important;
    font-weight: 400 !important;
  }

  #cart-preview-area .forma-pix {
    padding: 4px 0 0 !important;
  }

  #cart-preview-area .valor-pix {
    font-size: 22px !important;
    font-weight: 700 !important;
    color: #1a1a1a !important;
  }

  #cart-preview-area .valor-pix span {
    font-size: 22px !important;
    font-weight: 700 !important;
    color: #1a1a1a !important;
  }

  /* Texto de parcelamento no total (injetado pelo JS) */
  #cart-preview-area .installment-total {
    font-size: 13px !important;
    font-weight: 400 !important;
    color: #999999 !important;
    margin-top: 2px !important;
  }

  /* ==========================================
     BOTAO FINALIZAR COMPRA
     ========================================== */
  #cart-preview-area .finalizar-compra {
    background: #1b7a45 !important;
    color: #ffffff !important;
    border-radius: 63px !important;
    padding: 16px 24px !important;
    font-size: 16px !important;
    font-weight: 700 !important;
    letter-spacing: 0 !important;
    text-transform: none !important;
    border: none !important;
    width: 100% !important;
    text-align: center !important;
    margin-top: 8px !important;
  }

  #cart-preview-area .finalizar-compra:active {
    background: #156335 !important;
    transform: scale(0.98) !important;
  }

  #cart-preview-area .finalizar-compra span {
    font-size: 16px !important;
    font-weight: 700 !important;
    color: #ffffff !important;
  }

  #cart-preview-area .finalizar-compra svg path {
    fill: #ffffff !important;
  }

  /* ==========================================
     DELETE CONFIRM MODAL
     ========================================== */
  .mm-confirm-overlay {
    position: fixed !important;
    inset: 0 !important;
    z-index: 99999 !important;
    background: rgba(0,0,0,0.4) !important;
    display: flex !important;
    align-items: flex-end !important;
    justify-content: center !important;
    animation: mmConfirmIn 0.2s ease !important;
    -webkit-backdrop-filter: blur(4px) !important;
    backdrop-filter: blur(4px) !important;
  }

  @keyframes mmConfirmIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes mmSlideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  .mm-confirm-card {
    background: #ffffff !important;
    border-radius: 24px 24px 0 0 !important;
    padding: 28px 24px !important;
    padding-bottom: max(28px, env(safe-area-inset-bottom)) !important;
    width: 100% !important;
    max-width: 420px !important;
    animation: mmSlideUp 0.25s ease !important;
  }

  .mm-confirm-title {
    font-size: 17px !important;
    font-weight: 700 !important;
    color: #1a1a1a !important;
    margin: 0 0 6px !important;
  }

  .mm-confirm-desc {
    font-size: 14px !important;
    color: #6b7280 !important;
    margin: 0 0 20px !important;
    line-height: 1.4 !important;
  }

  .mm-confirm-actions {
    display: flex !important;
    gap: 10px !important;
  }

  .mm-confirm-btn {
    flex: 1 !important;
    height: 48px !important;
    border: none !important;
    border-radius: 14px !important;
    font-size: 15px !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    -webkit-tap-highlight-color: transparent !important;
  }

  .mm-confirm-btn:active {
    transform: scale(0.97) !important;
  }

  .mm-confirm-btn-cancel {
    background: #f3f4f6 !important;
    color: #1a1a1a !important;
  }

  .mm-confirm-btn-delete {
    background: #ef4444 !important;
    color: #ffffff !important;
  }

}
</style>

<script>
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