/* =============================================
   SCHEMA PRODUCT JSON-LD - Madeira Mania
   Injeta structured data para SEO e GEO

   Extrai dados do DOM/dataLayer do Magazord e
   gera schema Product completo no <head>

   Executa após React renderizar (retry pattern)

   IMPORTANTE: Este script é injetado pelo Magazord
   via "Conteudo Adicional" no Cabecalho Inferior,
   que fica DENTRO da árvore DOM do React.
   Precisamos remover o <script> wrapper do DOM
   para não crashar o React em re-renders.
   ============================================= */

/* Capturar referência ao próprio <script> ANTES de qualquer async */
var __schemaProductScript = document.currentScript;

(function initSchemaProduct() {
  initSchemaProduct._retries = (initSchemaProduct._retries || 0) + 1;

  var app = document.querySelector('#produto-react-app');
  if (!app || !app.querySelector('.informacoes-compra-produto')) {
    if (initSchemaProduct._retries < 30) {
      setTimeout(initSchemaProduct, 500);
    }
    return;
  }

  /* Evitar duplicação */
  if (document.getElementById('mm-product-schema')) return;

  /* ---- Extrair dados do DOM e dataLayer ---- */

  /* Nome do produto (H1) */
  var h1 = app.querySelector('h1');
  var productName = h1 ? h1.textContent.trim() : '';
  if (!productName) return;

  /* URL canônica */
  var canonical = document.querySelector('link[rel="canonical"]');
  var productUrl = canonical ? canonical.href : location.href.split('?')[0];

  /* Marca (input hidden ou dataLayer) */
  var marcaInput = document.querySelector('#prod-marca');
  var brand = marcaInput ? marcaInput.value.trim() : '';
  if (!brand && window.dataLayer && window.dataLayer[0]) {
    brand = window.dataLayer[0].brand || '';
  }

  /* Preços */
  var formPagLink = app.querySelector('.form-pag-link');
  var valorPrincipal = document.querySelector('#prod-valor-principal');
  var valorCartao = document.querySelector('#prod-valor');

  var pricePix = 0;
  var priceCard = 0;

  if (formPagLink) {
    pricePix = parseFloat(formPagLink.getAttribute('data-valor-pix')) || 0;
    priceCard = parseFloat(formPagLink.getAttribute('data-valor')) || 0;
  }
  if (!priceCard && valorCartao) {
    priceCard = parseFloat(valorCartao.value) || 0;
  }
  if (!pricePix && valorPrincipal) {
    pricePix = parseFloat(valorPrincipal.value) || 0;
  }

  /* Usar o menor preço (PIX) como principal, cartão como fallback */
  var mainPrice = pricePix > 0 ? pricePix : priceCard;
  if (mainPrice <= 0) return;

  /* SKU (dataLayer) */
  var sku = '';
  if (window.dataLayer && window.dataLayer[0]) {
    sku = window.dataLayer[0].sku || '';
  }

  /* Categorias (dataLayer) */
  var category = '';
  var category2 = '';
  if (window.dataLayer && window.dataLayer[0]) {
    category = window.dataLayer[0].category || '';
    category2 = window.dataLayer[0].category2 || '';
  }

  /* Disponibilidade */
  var deposito = document.querySelector('#prod-deposito');
  var inStock = deposito ? deposito.value === '1' : true;

  /* Imagens da galeria */
  var images = [];
  var galleryImgs = app.querySelectorAll('.gallery-main img, #block-imagem img');
  for (var i = 0; i < galleryImgs.length; i++) {
    var src = galleryImgs[i].getAttribute('src') || galleryImgs[i].getAttribute('data-src') || '';
    if (src && src.indexOf('http') === 0 && images.indexOf(src) === -1) {
      images.push(src);
    }
  }
  if (images.length === 0) {
    var ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg && ogImg.content) images.push(ogImg.content);
  }

  /* Descrição (meta description ou primeiro parágrafo) */
  var metaDesc = document.querySelector('meta[name="description"]');
  var description = metaDesc ? metaDesc.content.trim() : '';
  if (!description) {
    var descEl = document.querySelector('.descricao-produto .accordion-content p');
    if (descEl) description = descEl.textContent.trim().substring(0, 500);
  }

  /* Avaliações (scripts inline com Zord.avaliacoes) */
  var totalReviews = 0;
  var nota = 0;
  var scripts = document.querySelectorAll('script:not([src])');
  for (var s = 0; s < scripts.length; s++) {
    var txt = scripts[s].textContent;
    if (txt.indexOf('Zord.avaliacoes') === -1 && txt.indexOf('produtoAvaliacoes') === -1) continue;
    var matchTotal = txt.match(/produtoAvaliacoes\s*:\s*(\d+)/);
    var matchNota = txt.match(/\bnota\s*:\s*(?:Number\()?([\d.]+)/);
    if (matchTotal) totalReviews = parseInt(matchTotal[1], 10);
    if (matchNota) nota = parseFloat(matchNota[1]);
  }

  /* ---- Montar o objeto Schema ---- */

  var schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': productName,
    'url': productUrl,
    'image': images,
    'description': description,
    'sku': sku,
    'brand': {
      '@type': 'Brand',
      'name': brand || 'Madeira Mania'
    },
    'offers': {
      '@type': 'Offer',
      'url': productUrl,
      'price': mainPrice.toFixed(2),
      'priceCurrency': 'BRL',
      'availability': inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      'itemCondition': 'https://schema.org/NewCondition',
      'seller': {
        '@type': 'Organization',
        'name': 'Madeira Mania'
      },
      'hasMerchantReturnPolicy': {
        '@type': 'MerchantReturnPolicy',
        'applicableCountry': 'BR',
        'returnPolicyCategory': 'https://schema.org/MerchantReturnFiniteReturnWindow',
        'merchantReturnDays': 7,
        'returnMethod': 'https://schema.org/ReturnByMail'
      },
      'shippingDetails': {
        '@type': 'OfferShippingDetails',
        'shippingDestination': {
          '@type': 'DefinedRegion',
          'addressCountry': 'BR'
        },
        'deliveryTime': {
          '@type': 'ShippingDeliveryTime',
          'handlingTime': {
            '@type': 'QuantitativeValue',
            'minValue': 1,
            'maxValue': 3,
            'unitCode': 'DAY'
          },
          'transitTime': {
            '@type': 'QuantitativeValue',
            'minValue': 5,
            'maxValue': 20,
            'unitCode': 'DAY'
          }
        }
      }
    }
  };

  /* Parcelas (priceSpecification) */
  if (priceCard > 0) {
    schema.offers.priceSpecification = [
      {
        '@type': 'UnitPriceSpecification',
        'price': pricePix > 0 ? pricePix.toFixed(2) : mainPrice.toFixed(2),
        'priceCurrency': 'BRL',
        'name': 'PIX'
      },
      {
        '@type': 'UnitPriceSpecification',
        'price': (priceCard / 12).toFixed(2),
        'priceCurrency': 'BRL',
        'name': '12x sem juros',
        'referenceQuantity': {
          '@type': 'QuantitativeValue',
          'value': 12,
          'unitCode': 'MON'
        }
      }
    ];
  }

  /* Avaliações — só incluir se existem reviews reais */
  if (totalReviews > 0 && nota > 0) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      'ratingValue': nota.toFixed(1),
      'bestRating': '5',
      'worstRating': '1',
      'reviewCount': String(totalReviews)
    };
  }

  /* Categoria */
  if (category) {
    schema.category = category + (category2 ? ' > ' + category2 : '');
  }

  /* ---- Injetar no <head> ---- */

  var scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.id = 'mm-product-schema';
  scriptTag.textContent = JSON.stringify(schema);
  document.head.appendChild(scriptTag);

  /* Remover o <script> wrapper do DOM do React para evitar crash em re-renders.
     Magazord injeta o Conteudo Adicional dentro da árvore React,
     e quando React re-renderiza (ex: cálculo de frete), ele encontra
     este nó estrangeiro e crasha com insertBefore error. */
  if (__schemaProductScript && __schemaProductScript.parentNode) {
    __schemaProductScript.parentNode.removeChild(__schemaProductScript);
  }
})();
