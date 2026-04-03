/* =============================================
   PRODUTO JS - Madeira Mania (Mobile)
   Melhorias dinâmicas da página de produto

   Todas as funções são executadas após o DOM
   estar carregado e o React ter renderizado
   ============================================= */

(function initProduto() {
  /* Aguardar o React renderizar o app */
  initProduto._retries = (initProduto._retries || 0) + 1;

  var app = document.querySelector('#produto-react-app');
  if (!app || !app.querySelector('.informacoes-compra-produto')) {
    if (initProduto._retries < 30) {
      setTimeout(initProduto, 500);
    }
    return;
  }

  /* --- 1. Contador de imagens na galeria (1/5) --- */
  (function addGalleryCounter() {
    var swiper = app.querySelector('#container-swiper');
    var pagination = app.querySelector('.swiper-pagination');
    if (!swiper || !pagination) return;

    var bullets = pagination.querySelectorAll('.swiper-pagination-bullet');
    if (bullets.length < 2) return;

    /* Esconder setas de navegação — scroll natural por swipe */
    var galleryMain = app.querySelector('.gallery-main');
    if (galleryMain) {
      var arrows = galleryMain.querySelectorAll('.button-prev, .button-next');
      for (var a = 0; a < arrows.length; a++) {
        arrows[a].style.display = 'none';
      }
    }

    /* Criar counter — topo esquerdo, fundo branco */
    var counter = document.createElement('div');
    counter.id = 'mm-gallery-counter';
    counter.style.cssText = [
      'position: absolute',
      'top: 12px',
      'left: 12px',
      'background: rgba(255,255,255,0.85)',
      'color: #333',
      'font-size: 12px',
      'font-weight: 500',
      'padding: 3px 10px',
      'border-radius: 12px',
      'z-index: 10',
      'pointer-events: none',
      'font-family: -apple-system, BlinkMacSystemFont, sans-serif',
      'letter-spacing: 0.5px'
    ].join(';');

    if (galleryMain) {
      galleryMain.style.position = 'relative';
      galleryMain.appendChild(counter);
    }

    function updateCounter() {
      var active = pagination.querySelector('.swiper-pagination-bullet-active');
      var allBullets = pagination.querySelectorAll('.swiper-pagination-bullet');
      if (!active || !allBullets.length) return;
      var idx = Array.prototype.indexOf.call(allBullets, active) + 1;
      counter.textContent = idx + ' / ' + allBullets.length;
    }

    updateCounter();

    /* Observar mudanças nos bullets (classe active muda) */
    var observer = new MutationObserver(updateCounter);
    observer.observe(pagination, {
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });
  })();


  /* --- 2. Esconder estrelas vazias OU reformatar reviews --- */
  (function reformatReviews() {
    var stars = app.querySelector('.avaliacoes');
    if (!stars) return;

    /* Extrair dados de avaliações do script Zord.avaliacoes */
    var scripts = document.querySelectorAll('script:not([src])');
    var totalReviews = 0;
    var nota = 0;
    for (var i = 0; i < scripts.length; i++) {
      var txt = scripts[i].textContent;
      /* Buscar apenas no script que contém Zord.avaliacoes */
      if (txt.indexOf('Zord.avaliacoes') === -1 && txt.indexOf('produtoAvaliacoes') === -1) continue;
      var matchTotal = txt.match(/produtoAvaliacoes\s*:\s*(\d+)/);
      /* Regex específica: "nota:" sem dígito colado (evita nota1, nota5, etc.) */
      var matchNota = txt.match(/\bnota\s*:\s*(?:Number\()?([\d.]+)/);
      if (matchTotal) totalReviews = parseInt(matchTotal[1], 10);
      if (matchNota) nota = parseFloat(matchNota[1]);
      if (totalReviews > 0) break; /* Encontrou — parar de iterar */
    }

    /* Se 0 reviews, esconder */
    if (totalReviews === 0) {
      stars.style.display = 'none';
      return;
    }

    /* Reformatar: ⭐ 5.0 (231 avaliações) */
    var notaFormatted = nota % 1 === 0 ? nota.toFixed(1) : nota.toFixed(1);
    var starsHtml = '';
    for (var s = 1; s <= 5; s++) {
      if (s <= Math.floor(nota)) {
        starsHtml += '<span style="color:#f5a623;font-size:14px;">&#9733;</span>';
      } else if (s - nota < 1 && s - nota > 0) {
        starsHtml += '<span style="color:#f5a623;font-size:14px;">&#9733;</span>';
      } else {
        starsHtml += '<span style="color:#ddd;font-size:14px;">&#9733;</span>';
      }
    }

    var labelPlural = totalReviews === 1 ? 'avaliação' : 'avaliações';
    stars.innerHTML = '<a href="#avaliacoes" style="display:inline-flex;align-items:center;gap:4px;text-decoration:none;color:#555;font-size:13px;">'
      + starsHtml
      + ' <span style="font-weight:600;color:#1a1a1a;">' + notaFormatted + '</span>'
      + ' <span style="color:#777;">(' + totalReviews + ' ' + labelPlural + ')</span>'
      + '</a>';
    stars.style.display = '';
    stars.style.marginTop = '4px';
  })();


  /* --- 3. Esconder subtítulo redundante --- */
  (function hideRedundantSubtitle() {
    var h1 = app.querySelector('h1');
    if (!h1) return;
    var next = h1.parentElement.querySelector('.text-secondary-700.text-xs');
    if (!next) return;

    /* Se o subtítulo repete essencialmente o mesmo do H1, esconder */
    var h1Text = h1.textContent.toLowerCase().replace(/\s+/g, ' ').trim();
    var subText = next.textContent.toLowerCase().replace(/\s+/g, ' ').trim();

    /* Verificar sobreposição: se >60% das palavras do sub estão no h1 */
    var subWords = subText.split(/[\s\-:,]+/).filter(function(w) { return w.length > 2; });
    var matches = subWords.filter(function(w) { return h1Text.indexOf(w) !== -1; });

    if (matches.length >= subWords.length * 0.6) {
      next.style.display = 'none';
    }
  })();


  /* --- 4. Linha compacta de ações (Favoritos + WhatsApp + Compartilhar) --- */
  /* IMPORTANTE: NÃO mover elementos React do DOM (appendChild/insertBefore).
     React crasha em re-renders (ex: cálculo frete) com "insertBefore" error
     se encontrar nós fora da posição esperada.
     Fix: CLONAR os botões e esconder os originais via CSS. */
  (function createActionRow() {
    var info = app.querySelector('.informacoes-compra-produto');
    if (!info || document.getElementById('mm-action-row')) return;

    var fav = info.querySelector('.salvar-favoritos');
    var whats = info.querySelector('.exibe-botao-whatsapp');
    var shareEl = info.querySelector('.compartilhar-produto');

    /* Precisa de pelo menos 2 itens para justificar o row */
    if (!fav && !whats && !shareEl) return;

    var row = document.createElement('div');
    row.id = 'mm-action-row';

    /* Helper: criar ícone SVG de compartilhar */
    function createShareIcon() {
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '18');
      svg.setAttribute('height', '18');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13');
      svg.appendChild(path);
      return svg;
    }

    /* Helper: criar ícone SVG de coração (favoritos) */
    function createHeartIcon() {
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '18');
      svg.setAttribute('height', '18');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z');
      svg.appendChild(path);
      return svg;
    }

    /* --- Favoritos: criar botão clone que delega click ao original --- */
    if (fav) {
      var favClone = document.createElement('div');
      favClone.className = 'salvar-favoritos';
      var favBtn = document.createElement('button');
      favBtn.setAttribute('aria-label', 'Favoritar');
      favBtn.appendChild(createHeartIcon());
      favBtn.addEventListener('click', function() {
        var origBtn = fav.querySelector('button');
        if (origBtn) origBtn.click();
      });
      favClone.appendChild(favBtn);
      row.appendChild(favClone);
      /* Esconder original via CSS (não remove do DOM — React precisa dele) */
      fav.style.cssText += ';position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;';
    }

    /* WhatsApp: esconder o botão original — substituído pelo CTA dedicado (item 4b) */
    if (whats) {
      whats.style.display = 'none';
    }

    /* --- Compartilhar: criar botão clone que delega click ao original --- */
    if (shareEl) {
      var shareClone = document.createElement('div');
      shareClone.className = 'compartilhar-produto';
      var shareBtnNew = document.createElement('button');
      shareBtnNew.setAttribute('aria-label', 'Compartilhar');
      shareBtnNew.appendChild(createShareIcon());
      shareBtnNew.addEventListener('click', function() {
        var origBtn = shareEl.querySelector('button');
        if (origBtn) origBtn.click();
      });
      shareClone.appendChild(shareBtnNew);
      row.appendChild(shareClone);
      /* Esconder original via CSS (não remove do DOM) */
      shareEl.style.cssText += ';position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;';
    }

    /* Inserir após #area-comprar (quantidade fica no lugar) */
    var areaComprar = info.querySelector('#area-comprar');
    if (areaComprar) {
      var insertAfter = areaComprar;
      var next = areaComprar.nextElementSibling;
      while (next) {
        var pos = window.getComputedStyle(next).position;
        if (pos === 'fixed' || pos === 'sticky') {
          insertAfter = next;
          next = next.nextElementSibling;
        } else {
          break;
        }
      }
      insertAfter.parentNode.insertBefore(row, insertAfter.nextSibling);
    } else {
      info.appendChild(row);
    }
  })();


  /* --- 5. Preço riscado na Sticky Bar --- */
  (function addStickyBarOldPrice() {
    var stickyBar = app.querySelector('.comprar-fixo.area-compra-float');
    if (!stickyBar || stickyBar.querySelector('#mm-sticky-old-price')) return;

    /* Buscar preço "de" na área de preço principal */
    var info = app.querySelector('.informacoes-compra-produto');
    if (!info) return;
    var oldPriceEl = info.querySelector('.line-through');
    if (!oldPriceEl) return;

    var oldPriceText = oldPriceEl.textContent.trim();
    var priceFixed = stickyBar.querySelector('.price-fixed');
    if (!priceFixed) return;

    /* Criar elemento de preço riscado */
    var oldPrice = document.createElement('span');
    oldPrice.id = 'mm-sticky-old-price';
    oldPrice.textContent = oldPriceText;
    oldPrice.style.cssText = [
      'text-decoration: line-through',
      'color: #999',
      'font-size: 11px',
      'display: block',
      'line-height: 1.2',
      'margin-bottom: 1px'
    ].join(';');

    /* Inserir acima do preço PIX */
    priceFixed.insertBefore(oldPrice, priceFixed.firstChild);
  })();


  /* --- 6. Mini selos de segurança abaixo do CTA --- */
  (function addTrustBadges() {
    var info = app.querySelector('.informacoes-compra-produto');
    if (!info || document.getElementById('mm-trust-badges')) return;

    var areaComprar = info.querySelector('#area-comprar');
    if (!areaComprar) return;

    var badges = document.createElement('div');
    badges.id = 'mm-trust-badges';
    badges.style.cssText = [
      'display: flex',
      'justify-content: center',
      'align-items: center',
      'flex-wrap: wrap',
      'gap: 6px 10px',
      'padding: 8px 0',
      'margin-top: 2px'
    ].join(';');

    var items = [
      { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>', text: 'Compra Segura' },
      { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>', text: 'Troca 7 dias' },
      { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10" stroke="#4b664a"/></svg>', text: 'Reclame Aqui' }
    ];

    var itemStyle = 'display:inline-flex;align-items:center;gap:4px;font-size:11px;color:#777;white-space:nowrap;';

    items.forEach(function(item, idx) {
      var el = document.createElement('span');
      el.style.cssText = itemStyle;
      el.innerHTML = item.icon + ' ' + item.text;
      badges.appendChild(el);
      if (idx < items.length - 1) {
        var sep = document.createElement('span');
        sep.textContent = '|';
        sep.style.cssText = 'color:#ddd;font-size:10px;';
        badges.appendChild(sep);
      }
    });

    /* Inserir logo após #area-comprar, antes da sticky bar */
    var insertRef = areaComprar.nextElementSibling;
    /* Pular sticky bar (fixed) */
    while (insertRef && window.getComputedStyle(insertRef).position === 'fixed') {
      insertRef = insertRef.nextElementSibling;
    }
    if (insertRef) {
      info.insertBefore(badges, insertRef);
    } else {
      info.appendChild(badges);
    }
  })();


  /* --- 6b. Botão WhatsApp inline (substitui o original) --- */
  (function addWhatsAppCTA() {
    var info = app.querySelector('.informacoes-compra-produto');
    if (!info || document.getElementById('mm-whatsapp-cta')) return;

    /* Dados do produto para mensagem pré-preenchida */
    var prodNome = (document.querySelector('#prod-nome') || {}).value || '';
    var prodValor = (document.querySelector('#prod-valor') || {}).value || '';
    var prodUrl = window.location.href;
    var phone = '5511915299488';

    /* Formatar preço */
    var precoFormatado = '';
    if (prodValor) {
      precoFormatado = parseFloat(prodValor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    /* Mensagem direta (sem "null") */
    var msg = 'Olá! Tenho interesse no ' + prodNome.trim();
    if (precoFormatado) msg += ' (' + precoFormatado + ')';
    msg += '. ' + prodUrl;

    var whatsUrl = 'https://api.whatsapp.com/send?phone=' + phone
      + '&text=' + encodeURIComponent(msg);

    /* Criar botão — integrado à paleta do site */
    var cta = document.createElement('a');
    cta.id = 'mm-whatsapp-cta';
    cta.href = whatsUrl;
    cta.target = '_blank';
    cta.rel = 'noopener noreferrer';

    /* Ícone WhatsApp SVG (16px, combina com o tamanho do texto) */
    var waIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

    cta.innerHTML = waIcon + '<span>Compre pelo WhatsApp</span>';

    /* Posicionar após os trust badges ou após o action row */
    var actionRow = document.getElementById('mm-action-row');
    var trustBadges = document.getElementById('mm-trust-badges');
    var insertAfterEl = actionRow || trustBadges;
    if (insertAfterEl && insertAfterEl.parentNode === info) {
      info.insertBefore(cta, insertAfterEl.nextElementSibling);
    }
  })();


  /* --- 7. Indicador de estoque baixo --- */
  (function addStockIndicator() {
    var info = app.querySelector('.informacoes-compra-produto');
    if (!info || document.getElementById('mm-stock-indicator')) return;

    /* Extrair qtde_estoque dos scripts inline */
    var scripts = document.querySelectorAll('script:not([src])');
    var stock = -1;
    for (var i = 0; i < scripts.length; i++) {
      var txt = scripts[i].textContent;
      /* Buscar qtde_estoque como número (não boolean) */
      var match = txt.match(/"qtde_estoque"\s*:\s*(\d+)/);
      if (match) {
        stock = parseInt(match[1], 10);
        break;
      }
    }

    /* Só mostrar se estoque real entre 1 e 9 */
    if (stock < 1 || stock > 9) return;

    var indicator = document.createElement('div');
    indicator.id = 'mm-stock-indicator';
    indicator.style.cssText = [
      'display: flex',
      'align-items: center',
      'gap: 6px',
      'padding: 8px 12px',
      'background: #fff8f0',
      'border: 1px solid #fde0c2',
      'border-radius: 8px',
      'font-size: 13px',
      'color: #c65d00',
      'font-weight: 500',
      'margin-top: 4px'
    ].join(';');

    var plural = stock === 1 ? 'unidade' : 'unidades';
    indicator.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c65d00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'
      + 'Restam apenas <strong>' + stock + '</strong> ' + plural + ' em estoque';

    /* Inserir após a área de preço (primeiro filho do info) */
    var priceArea = info.firstElementChild;
    if (priceArea) {
      priceArea.parentNode.insertBefore(indicator, priceArea.nextElementSibling);
    }
  })();


  /* --- 8. Bloco de confiança perto da conversão --- */
  (function addTrustBlock() {
    var info = app.querySelector('.informacoes-compra-produto');
    if (!info || document.getElementById('mm-trust-block')) return;

    var frete = info.querySelector('.calculo-frete');
    if (!frete) return;

    var block = document.createElement('div');
    block.id = 'mm-trust-block';
    var isDesktop = window.innerWidth >= 769;
    block.style.cssText = [
      'background: #f7f8f7',
      'border-radius: 10px',
      'padding: 14px 16px',
      'margin-top: 10px',
      'display: flex',
      isDesktop ? 'flex-direction: row' : 'flex-direction: column',
      isDesktop ? 'flex-wrap: wrap' : '',
      isDesktop ? 'justify-content: space-between' : '',
      'gap: 10px'
    ].filter(Boolean).join(';');

    var items = [
      { icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>', label: 'Atendimento', desc: 'Seg à Sex 8h-18h' },
      { icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>', label: 'Trocas e Devoluções', desc: 'Até 7 dias para devolver' },
      { icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>', label: 'Frete', desc: 'Enviamos para todo o Brasil' },
      { icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>', label: 'Parcelamento', desc: 'Até 12x sem juros no cartão' }
    ];

    var rowStyle = 'display:flex;align-items:center;gap:10px;' + (isDesktop ? 'flex:1;min-width:0;' : '');
    var labelStyle = 'font-size:13px;font-weight:600;color:#1a1a1a;white-space:nowrap;';
    var descStyle = 'font-size:12px;color:#666;white-space:nowrap;';

    items.forEach(function(item) {
      var row = document.createElement('div');
      row.style.cssText = rowStyle;
      row.innerHTML = item.icon
        + '<div><div style="' + labelStyle + '">' + item.label + '</div>'
        + '<div style="' + descStyle + '">' + item.desc + '</div></div>';
      block.appendChild(row);
    });

    /* Inserir após .calculo-frete */
    frete.parentNode.insertBefore(block, frete.nextElementSibling);
  })();


  /* --- 9. Formas de pagamento inline (PIX + 1-3x visíveis) --- */
  (function showInlinePayments() {
    var info = app.querySelector('.informacoes-compra-produto');
    if (!info || document.getElementById('mm-inline-payments')) return;

    var formPagLink = info.querySelector('.form-pag-link');
    if (!formPagLink) return;

    /* Extrair dados do link */
    var valorCartao = parseFloat(formPagLink.getAttribute('data-valor')) || 0;
    var valorPix = parseFloat(formPagLink.getAttribute('data-valor-pix')) || 0;

    if (valorCartao <= 0) return;

    /* Calcular parcelas sem juros (1x a 12x) */
    var parcelas = [];
    for (var n = 1; n <= 12; n++) {
      parcelas.push({
        vezes: n,
        valor: (valorCartao / n).toFixed(2).replace('.', ',')
      });
    }

    /* Formatar moeda */
    function fmt(v) {
      return 'R$\u00a0' + v.toFixed(2).replace('.', ',');
    }

    /* Calcular economia PIX */
    var economia = valorCartao - valorPix;

    var container = document.createElement('div');
    container.id = 'mm-inline-payments';
    container.style.cssText = [
      'padding: 12px 0',
      'border-top: 1px solid #f0f0f0',
      'margin-top: 4px'
    ].join(';');

    var itemStyle = 'display:flex;align-items:center;gap:6px;padding:4px 0;font-size:13px;color:#444;';
    var dotStyle = 'width:5px;height:5px;border-radius:50%;background:#4b664a;flex-shrink:0;';

    /* PIX */
    var pixLine = '<div style="' + itemStyle + '">'
      + '<span style="' + dotStyle + '"></span>'
      + '<span><strong style="color:#1a1a1a;">PIX: ' + fmt(valorPix) + '</strong>'
      + (economia > 0 ? ' <span style="color:#2e7d32;font-size:12px;font-weight:600;">(economize ' + fmt(economia) + ')</span>' : '')
      + '</span></div>';

    /* 1x a 3x */
    var visibleLines = '';
    for (var v = 0; v < 3; v++) {
      visibleLines += '<div style="' + itemStyle + '">'
        + '<span style="' + dotStyle + '"></span>'
        + '<span>' + parcelas[v].vezes + 'x de R$\u00a0' + parcelas[v].valor + ' sem juros</span>'
        + '</div>';
    }

    /* 4x a 12x (expandível) */
    var hiddenLines = '';
    for (var h = 3; h < 12; h++) {
      hiddenLines += '<div style="' + itemStyle + '">'
        + '<span style="' + dotStyle + '"></span>'
        + '<span>' + parcelas[h].vezes + 'x de R$\u00a0' + parcelas[h].valor + ' sem juros</span>'
        + '</div>';
    }

    container.innerHTML = pixLine + visibleLines
      + '<div id="mm-more-parcelas" style="display:none;">' + hiddenLines + '</div>'
      + '<button id="mm-toggle-parcelas" style="'
      + 'background:none;border:none;color:#4b664a;font-size:13px;font-weight:500;'
      + 'padding:6px 0 0;cursor:pointer;display:flex;align-items:center;gap:4px;'
      + '">Ver todas as parcelas <span style="font-size:10px;">&#9660;</span></button>';

    /* Inserir antes do link .form-pag-link (substituir visualmente) */
    var formPagContainer = formPagLink.closest('div');
    if (formPagContainer) {
      formPagContainer.parentNode.insertBefore(container, formPagContainer);
      /* Esconder o link original */
      formPagLink.style.display = 'none';
    }

    /* Toggle accordion */
    var toggleBtn = document.getElementById('mm-toggle-parcelas');
    var moreSection = document.getElementById('mm-more-parcelas');
    if (toggleBtn && moreSection) {
      toggleBtn.addEventListener('click', function() {
        var isOpen = moreSection.style.display !== 'none';
        moreSection.style.display = isOpen ? 'none' : 'block';
        toggleBtn.innerHTML = isOpen
          ? 'Ver todas as parcelas <span style="font-size:10px;">&#9660;</span>'
          : 'Ver menos <span style="font-size:10px;">&#9650;</span>';
      });
    }
  })();


  /* --- 10. Trocar ordem: Descrição antes de "Que tal complementar" --- */
  (function swapDescriptionAndCrossSell() {
    var crossSell = document.querySelector('.recomendacao-ctn-0.accordion');
    var descricao = document.querySelector('.descricao-produto.accordion');
    if (!crossSell || !descricao) return;

    /* Só trocar se cross-sell vem ANTES da descrição */
    var parent = crossSell.parentNode;
    if (!parent || parent !== descricao.parentNode) return;

    var children = Array.prototype.slice.call(parent.children);
    var crossIdx = children.indexOf(crossSell);
    var descIdx = children.indexOf(descricao);

    if (crossIdx < descIdx) {
      /* Mover descrição para antes do cross-sell */
      parent.insertBefore(descricao, crossSell);
    }
  })();


  /* --- 11. CEP cache + auto-cálculo de frete --- */
  (function autoCep() {
    var cepInput = document.querySelector('#cep');
    if (!cepInput) return;

    var STORAGE_KEY = 'mm_cep';

    /* Salvar CEP quando o usuário calcular */
    var freteBtn = cepInput.closest('.area-calculo');
    if (freteBtn) {
      var btn = freteBtn.querySelector('button');
      if (btn) {
        btn.addEventListener('click', function() {
          var val = cepInput.value.replace(/\D/g, '');
          if (val.length === 8) {
            try { localStorage.setItem(STORAGE_KEY, val); } catch(e) {}
          }
        });
      }
    }

    /* Se já tem CEP salvo e o campo está vazio, preencher e calcular */
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch(e) {}
    if (!saved || saved.length !== 8) return;
    if (cepInput.value.replace(/\D/g, '').length > 0) return; /* Já preenchido */

    /* Formatar CEP: 12345-678 */
    var formatted = saved.substring(0, 5) + '-' + saved.substring(5);

    /* Simular digitação (React controlled input) */
    var nativeSet = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype, 'value'
    ).set;
    nativeSet.call(cepInput, formatted);
    cepInput.dispatchEvent(new Event('input', { bubbles: true }));

    /* Aguardar o React processar o input e habilitar o botão */
    function tryClickCalc(attempts) {
      if (attempts <= 0) return;
      var calcBtn = cepInput.closest('.area-calculo');
      if (calcBtn) {
        var b = calcBtn.querySelector('button');
        if (b && !b.disabled) {
          b.click();
        } else {
          setTimeout(function() { tryClickCalc(attempts - 1); }, 500);
        }
      }
    }
    setTimeout(function() { tryClickCalc(6); }, 500);
  })();


  /* --- 12. Fix WhatsApp "null" na mensagem --- */
  (function fixWhatsAppNull() {
    var links = document.querySelectorAll('.exibe-botao-whatsapp a[href*="whatsapp"]');
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute('href');
      if (href && href.indexOf('null') !== -1) {
        /* Remover " null" ou "null " do texto da mensagem */
        links[i].setAttribute('href', href.replace(/\s*null\s*/g, ' ').replace(/\s{2,}/g, ' '));
      }
    }

    /* Observer para caso o React re-renderize o link */
    var whatsContainer = document.querySelector('.exibe-botao-whatsapp');
    if (whatsContainer) {
      var observer = new MutationObserver(function() {
        var link = whatsContainer.querySelector('a[href*="whatsapp"]');
        if (link && link.href.indexOf('null') !== -1) {
          link.setAttribute('href', link.getAttribute('href').replace(/\s*null\s*/g, ' ').replace(/\s{2,}/g, ' '));
        }
      });
      observer.observe(whatsContainer, { subtree: true, attributes: true, attributeFilter: ['href'] });
    }
  })();


  /* --- 13. Badge "Envio Imediato" na área de compra --- */
  (function addEnvioImediatoBadge() {
    var info = app.querySelector('.informacoes-compra-produto');
    if (!info || document.getElementById('mm-envio-badge')) return;

    /* Detectar se produto tem tag "Envio Imediato" */
    var hasEnvio = false;
    var tags = app.querySelectorAll('.tag-produto .text-tag, .tag-produto');
    for (var i = 0; i < tags.length; i++) {
      if (tags[i].textContent.toLowerCase().indexOf('envio') !== -1) {
        hasEnvio = true;
        break;
      }
    }
    /* Fallback: estoque real > 10 (virtual é sempre 10, então >10 = estoque próprio) */
    if (!hasEnvio) {
      var scripts = document.querySelectorAll('script:not([src])');
      for (var s = 0; s < scripts.length; s++) {
        var match = scripts[s].textContent.match(/"qtde_estoque"\s*:\s*(\d+)/);
        if (match) {
          if (parseInt(match[1], 10) > 10) hasEnvio = true;
          break;
        }
      }
    }

    if (!hasEnvio) return;

    var badge = document.createElement('div');
    badge.id = 'mm-envio-badge';
    badge.style.cssText = [
      'display: inline-flex',
      'align-items: center',
      'gap: 6px',
      'padding: 4px 0',
      'font-size: 13px',
      'color: #1a1a1a',
      'margin-top: 4px'
    ].join(';');
    /* Ícone raio (velocidade) — SVG stroke, não emoji */
    badge.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c65d00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'
      + '<span><strong style="color:#1a1a1a;">Pronta entrega</strong>'
      + ' <span style="color:#777;font-weight:400;">·</span> '
      + '<span style="color:#555;font-weight:400;">Enviamos em 24h</span></span>';

    /* Inserir após a área de preço (primeiro filho do info) */
    var priceArea = info.firstElementChild;
    if (priceArea && priceArea.nextElementSibling) {
      priceArea.parentNode.insertBefore(badge, priceArea.nextElementSibling);
    }
  })();


  /* --- 14. Ocultar badge de desconto da galeria (evitar inconsistência) --- */
  (function hideGalleryDiscountBadge() {
    /* O badge da galeria mostra -41% (preço cartão) enquanto o da área de preço
       mostra -44% (preço PIX). Ocultar o da galeria para evitar confusão. */
    var galleryTags = app.querySelectorAll('.tag-1.tag-produto');
    for (var i = 0; i < galleryTags.length; i++) {
      var text = galleryTags[i].textContent.trim();
      if (text.indexOf('%') !== -1 || text.indexOf('OFF') !== -1) {
        galleryTags[i].style.display = 'none';
      }
    }
  })();


  /* --- 15. Fix link #avaliacoes — scroll suave para reviews --- */
  /* Nota: já tratado parcialmente em reformatReviews (item 2).
     Aqui garantimos que qualquer link para #avaliacoes funcione. */
  (function fixReviewsScroll() {
    var reviewLinks = document.querySelectorAll('a[href*="avaliacoes"], a[href="#avaliacoes"]');
    for (var i = 0; i < reviewLinks.length; i++) {
      reviewLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector('#avaliacoes') || document.querySelector('.container-avaliacoes');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  })();


  /* --- 16. Exibir marca do fabricante abaixo do título --- */
  (function showBrand() {
    var h1 = app.querySelector('h1');
    if (!h1 || document.getElementById('mm-brand')) return;

    var marca = document.querySelector('#prod-marca');
    if (!marca || !marca.value || marca.value.trim() === '') return;

    var brandEl = document.createElement('span');
    brandEl.id = 'mm-brand';
    brandEl.style.cssText = 'display:block;font-size:13px;color:#777;font-weight:400;margin-top:2px;';
    brandEl.textContent = 'por ' + marca.value.trim();

    /* Inserir logo após o h1 */
    var parent = h1.parentElement;
    if (parent) {
      var nextEl = h1.nextElementSibling;
      if (nextEl) {
        parent.insertBefore(brandEl, nextEl);
      } else {
        parent.appendChild(brandEl);
      }
    }
  })();


  /* --- 17. Atualizar trust badges com score RA e garantia --- */
  (function updateTrustInfo() {
    /* Atualizar mini selos: trocar "Reclame Aqui" por "RA Verificada" com link */
    var badges = document.getElementById('mm-trust-badges');
    if (badges) {
      var spans = badges.querySelectorAll('span');
      for (var i = 0; i < spans.length; i++) {
        if (spans[i].textContent.indexOf('Reclame') !== -1) {
          /* Encontrar URL do RA no footer */
          var raLink = document.querySelector('footer .reclame-aqui a, footer a[href*="reclameaqui"]');
          var raUrl = raLink ? raLink.href : 'https://www.reclameaqui.com.br/empresa/madeira-mania-comercio-de-moveis-ltda/';
          spans[i].innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10" stroke="#4b664a"/></svg>'
            + ' <a href="' + raUrl + '" target="_blank" rel="noopener" style="color:#777;text-decoration:none;">RA Verificada</a>';
        }
      }
    }

    /* Atualizar bloco de confiança: adicionar garantia */
    var block = document.getElementById('mm-trust-block');
    if (block && !block.querySelector('#mm-garantia-row')) {
      var garantiaRow = document.createElement('div');
      garantiaRow.id = 'mm-garantia-row';
      garantiaRow.style.cssText = 'display:flex;align-items:center;gap:10px;';
      garantiaRow.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
        + '<div><div style="font-size:13px;font-weight:600;color:#1a1a1a;">Garantia</div>'
        + '<div style="font-size:12px;color:#666;">12 meses contra defeitos de fabricação</div></div>';

      /* Inserir como segundo item (após Atendimento) */
      var firstItem = block.firstElementChild;
      if (firstItem && firstItem.nextElementSibling) {
        block.insertBefore(garantiaRow, firstItem.nextElementSibling);
      } else {
        block.appendChild(garantiaRow);
      }
    }
  })();


  /* =============================================
     FASE 2 — Área de Compra
     ============================================= */


  /* --- 19. Reposicionar frete visualmente via CSS order --- */
  /* IMPORTANTE: NÃO mover .calculo-frete no DOM com insertBefore/appendChild.
     React crasha em re-renders se elementos filhos mudarem de posição.
     Fix: usar CSS order no container flex para reordenar visualmente. */
  (function reorderFreteWithCSS() {
    var info = app.querySelector('.informacoes-compra-produto');
    if (!info) return;

    var frete = info.querySelector('.calculo-frete');
    if (!frete) return;

    /* Garantir que o container é flex column para order funcionar */
    info.style.cssText += ';display:flex !important;flex-direction:column !important;';

    /* Dar order alto ao frete para ele ficar após nossos elementos injetados,
       mas antes do trust block. Nossos elementos injetados têm order padrão (0). */
    frete.style.cssText += ';order:20 !important;';

    /* Trust block (item 8) fica depois do frete */
    var trustBlock = document.getElementById('mm-trust-block');
    if (trustBlock) trustBlock.style.cssText += ';order:30 !important;';
  })();


  /* --- 20. Progress bar frete grátis --- REMOVIDO ---
     Desativado a pedido. Manter numeração para referência. */


  /* --- 21. Mini-resumo de specs na área de compra --- */
  (function addMiniSpecs() {
    var info = app.querySelector('.informacoes-compra-produto');
    if (!info || document.getElementById('mm-mini-specs')) return;

    /* Extrair specs da tabela de descrição */
    var descSection = document.querySelector('.descricao-produto');
    var specs = {};
    if (descSection) {
      var cells = descSection.querySelectorAll('td');
      for (var i = 0; i < cells.length - 1; i += 2) {
        var label = cells[i].textContent.trim().toLowerCase();
        var value = cells[i + 1].textContent.trim();
        if (label.indexOf('largura') !== -1) specs.largura = value;
        if (label.indexOf('altura') !== -1) specs.altura = value;
        if (label.indexOf('profundidade') !== -1) specs.profundidade = value;
        if (label.indexOf('material') !== -1) specs.material = value;
        if (label.indexOf('dobradi') !== -1) specs.dobradicas = value;
        if (label.indexOf('pes') !== -1 || label.indexOf('pés') !== -1) specs.pes = value;
      }
    }

    /* Se não encontrou specs suficientes, não exibir */
    if (!specs.largura && !specs.material) return;

    var items = [];
    if (specs.material) items.push(specs.material);
    if (specs.dobradicas) items.push('Dobradiças ' + specs.dobradicas);
    if (specs.pes) items.push('Pés: ' + specs.pes);
    if (specs.largura) items.push(specs.largura + ' × ' + (specs.altura || '') + ' × ' + (specs.profundidade || ''));

    if (items.length === 0) return;

    var el = document.createElement('div');
    el.id = 'mm-mini-specs';
    el.style.cssText = 'padding:8px 0;border-top:1px solid #f0f0f0;margin-top:4px;';

    var html = '';
    items.forEach(function(item) {
      html += '<div style="display:flex;align-items:center;gap:6px;padding:2px 0;font-size:13px;color:#555;">'
        + '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polyline points="20 6 9 17 4 12"/></svg>'
        + '<span>' + item + '</span></div>';
    });

    el.innerHTML = html;

    /* Inserir após as derivações (variações) e antes do #area-comprar */
    var areaComprar = info.querySelector('#area-comprar');
    if (areaComprar) {
      info.insertBefore(el, areaComprar);
    }
  })();


  /* --- 22. Sticky bar desktop (aparece ao scrollar) --- */
  (function addDesktopStickyBar() {
    /* Apenas desktop — mobile já tem sticky bar nativa */
    if (window.innerWidth < 769) return;
    if (document.getElementById('mm-desktop-sticky')) return;

    var info = app.querySelector('.informacoes-compra-produto');
    if (!info) return;

    /* Extrair dados */
    var oldPriceEl = info.querySelector('.line-through');
    var pixPrice = (document.querySelector('#prod-valor-principal') || {}).value;
    var cardPrice = (document.querySelector('#prod-valor') || {}).value;
    var prodNome = (document.querySelector('#prod-nome') || {}).value || '';
    var shortName = prodNome.split(' - ')[0] || prodNome; /* "Rack Atenas" */

    if (!pixPrice) return;

    var oldPriceText = oldPriceEl ? oldPriceEl.textContent.trim() : '';
    var pixFormatted = parseFloat(pixPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var cardFormatted = cardPrice ? parseFloat(cardPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '';
    var parcela = cardPrice ? (parseFloat(cardPrice) / 12).toFixed(2).replace('.', ',') : '';

    var bar = document.createElement('div');
    bar.id = 'mm-desktop-sticky';
    bar.style.cssText = [
      'position: fixed',
      'top: -60px', /* Começa escondido */
      'left: 0',
      'width: 100%',
      'height: 56px',
      'background: #ffffff',
      'border-bottom: 1px solid #e8ece8',
      'box-shadow: 0 2px 8px rgba(0,0,0,0.06)',
      'z-index: 100',
      'display: flex',
      'align-items: center',
      'justify-content: center',
      'padding: 0 24px',
      'transition: top 0.25s ease',
      'font-family: -apple-system, BlinkMacSystemFont, sans-serif'
    ].join(';');

    var innerStyle = 'display:flex;align-items:center;gap:16px;max-width:1200px;width:100%;';
    var nameStyle = 'font-size:14px;font-weight:500;color:#1a1a1a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:300px;';
    var priceStyle = 'display:flex;align-items:center;gap:8px;margin-left:auto;';
    var oldStyle = 'text-decoration:line-through;color:#999;font-size:12px;';
    var pixStyle = 'font-size:15px;font-weight:600;color:#1a1a1a;';
    var parcelaStyle = 'font-size:12px;color:#666;';
    var btnStyle = 'display:inline-flex;align-items:center;justify-content:center;padding:8px 20px;background:#4b664a;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer;white-space:nowrap;';

    bar.innerHTML = '<div style="' + innerStyle + '">'
      + '<span style="' + nameStyle + '">' + shortName + '</span>'
      + '<div style="' + priceStyle + '">'
      + (oldPriceText ? '<span style="' + oldStyle + '">' + oldPriceText + '</span>' : '')
      + '<span style="' + pixStyle + '">' + pixFormatted + ' <small style="font-weight:400;font-size:11px;color:#666;">PIX</small></span>'
      + (parcela ? '<span style="' + parcelaStyle + '">12x R$\u00a0' + parcela + '</span>' : '')
      + '</div>'
      + '<button id="mm-desktop-sticky-btn" style="' + btnStyle + '">Comprar</button>'
      + '</div>';

    document.body.appendChild(bar);

    /* Botão clica no mesmo botão do Magazord */
    var stickyBtn = document.getElementById('mm-desktop-sticky-btn');
    if (stickyBtn) {
      stickyBtn.addEventListener('click', function() {
        var originalBtn = app.querySelector('.btn-comprar');
        if (originalBtn) originalBtn.click();
      });
    }

    /* Mostrar/esconder baseado no scroll */
    var areaComprar = info.querySelector('#area-comprar');
    if (!areaComprar) return;

    function onScroll() {
      var rect = areaComprar.getBoundingClientRect();
      bar.style.top = rect.bottom < 0 ? '0px' : '-60px';
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();


  /* --- 23. Footer: expandir selos e formas de pagamento --- */
  (function openFooterAccordions() {
    var selectors = ['.selos-seguranca', '.formas-pagto'];
    selectors.forEach(function(sel) {
      var section = document.querySelector('footer ' + sel);
      if (!section) return;
      /* Trocar closed por open (Tailwind group pattern) */
      if (section.classList.contains('closed')) {
        section.classList.remove('closed');
        section.classList.add('open');
      }
    });
  })();


  /* --- Sinalizar que o JS terminou (anti-flicker) --- */
  document.body.classList.add('mm-ready');

})();
