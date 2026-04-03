/* =============================================
   OPEN GRAPH META TAGS - Madeira Mania (PDPs)

   IMPORTANTE: Crawlers sociais (WhatsApp, Facebook,
   LinkedIn, Telegram) NÃO executam JavaScript.
   Tags OG injetadas via JS NÃO funcionam para
   previews de compartilhamento.

   ESTE SCRIPT SERVE COMO FALLBACK para motores
   que executam JS (Google, Bing) e como documentação
   de quais tags são necessárias.

   SOLUÇÃO IDEAL: Configurar OG tags server-side
   no painel Magazord.

   Se Magazord permite HTML puro no Conteúdo Adicional
   (Cabeçalho Superior), usar og-tags-static.html
   com template server-side em vez deste script.
   ============================================= */

(function injectOgTags() {
  injectOgTags._retries = (injectOgTags._retries || 0) + 1;

  var app = document.querySelector('#produto-react-app');
  if (!app || !app.querySelector('h1')) {
    if (injectOgTags._retries < 30) {
      setTimeout(injectOgTags, 500);
    }
    return;
  }

  /* Evitar duplicação */
  if (document.querySelector('meta[property="og:title"]')) return;

  /* Extrair dados */
  var h1 = app.querySelector('h1');
  var title = h1 ? h1.textContent.trim() : document.title;

  var metaDesc = document.querySelector('meta[name="description"]');
  var description = metaDesc ? metaDesc.content.trim() : '';
  if (!description) {
    var descEl = document.querySelector('.descricao-produto .accordion-content p');
    if (descEl) description = descEl.textContent.trim().substring(0, 200);
  }
  if (!description) {
    description = title + ' - Compre online na Madeira Mania com até 12x sem juros ou 7% de desconto no PIX.';
  }

  var canonical = document.querySelector('link[rel="canonical"]');
  var url = canonical ? canonical.href : location.href.split('?')[0];

  /* Imagem — pegar a primeira da galeria */
  var image = '';
  var galleryImg = app.querySelector('.gallery-main img, #block-imagem img');
  if (galleryImg) {
    image = galleryImg.getAttribute('src') || galleryImg.getAttribute('data-src') || '';
  }
  if (!image) {
    var ogExisting = document.querySelector('meta[property="og:image"]');
    if (ogExisting) image = ogExisting.content;
  }

  /* Preço para descrição */
  var formPagLink = app.querySelector('.form-pag-link');
  var pricePix = formPagLink ? parseFloat(formPagLink.getAttribute('data-valor-pix')) || 0 : 0;
  if (pricePix > 0) {
    var priceStr = 'R$ ' + pricePix.toFixed(2).replace('.', ',');
    if (description.indexOf('R$') === -1) {
      description = description.replace(/\.$/, '') + ' | A partir de ' + priceStr + ' no PIX.';
    }
  }

  /* Truncar description em 200 chars */
  if (description.length > 200) {
    description = description.substring(0, 197) + '...';
  }

  /* Injetar meta tags */
  var tags = [
    { property: 'og:type', content: 'product' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:site_name', content: 'Madeira Mania' },
    { property: 'og:locale', content: 'pt_BR' }
  ];

  if (image) {
    tags.push({ property: 'og:image', content: image });
    tags.push({ property: 'og:image:width', content: '600' });
    tags.push({ property: 'og:image:height', content: '600' });
  }

  /* Twitter Card */
  tags.push({ name: 'twitter:card', content: 'summary_large_image' });
  tags.push({ name: 'twitter:title', content: title });
  tags.push({ name: 'twitter:description', content: description });
  if (image) {
    tags.push({ name: 'twitter:image', content: image });
  }

  tags.forEach(function(tag) {
    var meta = document.createElement('meta');
    if (tag.property) meta.setAttribute('property', tag.property);
    if (tag.name) meta.setAttribute('name', tag.name);
    meta.setAttribute('content', tag.content);
    document.head.appendChild(meta);
  });
})();
