/* =============================================
   SCHEMA BREADCRUMBLIST JSON-LD
   Madeira Mania — TODAS as PDPs

   Extrai breadcrumb do DOM (navegação de categorias)
   e injeta BreadcrumbList schema para:
   - Breadcrumbs visuais no Google (desktop)
   - Melhor crawling/indexing
   - Voice search

   Nota: Google removeu breadcrumbs do mobile (Jan 2025)
   mas schema ainda ajuda em desktop e crawling
   ============================================= */

/* Capturar referência ao próprio <script> ANTES de qualquer async */
var __breadcrumbScript = document.currentScript;

(function initBreadcrumbSchema() {
  initBreadcrumbSchema._retries = (initBreadcrumbSchema._retries || 0) + 1;

  /* Esperar breadcrumb ou h1 existirem */
  var app = document.querySelector('#produto-react-app');
  var h1 = app ? app.querySelector('h1') : null;
  if (!h1) {
    if (initBreadcrumbSchema._retries < 30) {
      setTimeout(initBreadcrumbSchema, 500);
    }
    return;
  }

  /* Evitar duplicação */
  if (document.getElementById('mm-breadcrumb-schema')) return;

  var items = [];
  var position = 1;

  /* Item 1: Home (sempre) */
  items.push({
    '@type': 'ListItem',
    'position': position++,
    'name': 'Home',
    'item': 'https://www.madeiramania.com.br'
  });

  /* Tentar extrair breadcrumbs do DOM */
  var breadcrumbLinks = document.querySelectorAll(
    '.breadcrumb a, nav[aria-label*="breadcrumb" i] a, .migalha a, .breadcrumb-item a'
  );

  if (breadcrumbLinks.length > 0) {
    for (var i = 0; i < breadcrumbLinks.length; i++) {
      var link = breadcrumbLinks[i];
      var name = link.textContent.trim();
      var href = link.href;

      /* Pular "Home" duplicado e links vazios */
      if (!name || name.toLowerCase() === 'home' || name.toLowerCase() === 'início') continue;
      if (!href || href === '#') continue;

      items.push({
        '@type': 'ListItem',
        'position': position++,
        'name': name,
        'item': href
      });
    }
  } else {
    /* Fallback: extrair categorias do dataLayer */
    if (window.dataLayer && window.dataLayer[0]) {
      var cat1 = window.dataLayer[0].category || '';
      var cat2 = window.dataLayer[0].category2 || '';

      if (cat1) {
        items.push({
          '@type': 'ListItem',
          'position': position++,
          'name': cat1,
          'item': 'https://www.madeiramania.com.br/' + cat1.toLowerCase().replace(/\s+/g, '-').replace(/[àáâã]/g, 'a').replace(/[éêë]/g, 'e').replace(/[íî]/g, 'i').replace(/[óôõ]/g, 'o').replace(/[úû]/g, 'u').replace(/ç/g, 'c')
        });
      }
      if (cat2 && cat2 !== cat1) {
        items.push({
          '@type': 'ListItem',
          'position': position++,
          'name': cat2,
          'item': 'https://www.madeiramania.com.br/' + cat2.toLowerCase().replace(/\s+/g, '-').replace(/[àáâã]/g, 'a').replace(/[éêë]/g, 'e').replace(/[íî]/g, 'i').replace(/[óôõ]/g, 'o').replace(/[úû]/g, 'u').replace(/ç/g, 'c')
        });
      }
    }
  }

  /* Último item: produto atual (sem URL, conforme spec) */
  items.push({
    '@type': 'ListItem',
    'position': position,
    'name': h1.textContent.trim()
  });

  /* Mínimo 2 itens para ser válido */
  if (items.length < 2) return;

  var schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items
  };

  /* Injetar no <head> */
  var scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.id = 'mm-breadcrumb-schema';
  scriptTag.textContent = JSON.stringify(schema);
  document.head.appendChild(scriptTag);

  /* Remover o <script> wrapper do DOM do React */
  if (__breadcrumbScript && __breadcrumbScript.parentNode) {
    __breadcrumbScript.parentNode.removeChild(__breadcrumbScript);
  }
})();
