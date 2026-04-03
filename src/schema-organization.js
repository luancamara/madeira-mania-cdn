/* =============================================
   SCHEMA ORGANIZATION (OnlineStore) JSON-LD
   Madeira Mania — GLOBAL (todas as páginas)

   Injeta structured data de organização para:
   - Knowledge Panel no Google
   - Entity recognition por IAs
   - Conexão de entidade entre plataformas (sameAs)

   Tipo: OnlineStore (subtipo de Organization)
   recomendado pelo Google para e-commerce sem loja física
   ============================================= */

(function injectOrganizationSchema() {
  /* Evitar duplicação */
  if (document.getElementById('mm-org-schema')) return;

  /* Extrair logo da página */
  var logoEl = document.querySelector('.logo img, header img[alt*="logo" i], header img[alt*="Madeira" i]');
  var logoUrl = logoEl ? (logoEl.getAttribute('src') || '') : '';
  if (logoUrl && logoUrl.indexOf('http') !== 0) {
    logoUrl = 'https://www.madeiramania.com.br' + logoUrl;
  }

  var schema = {
    '@context': 'https://schema.org',
    '@type': 'OnlineStore',
    '@id': 'https://www.madeiramania.com.br/#organization',
    'name': 'Madeira Mania',
    'url': 'https://www.madeiramania.com.br',
    'description': 'Loja online de móveis com preços abaixo dos marketplaces. Racks, mesas, cristaleiras, sofás, camas e estantes com entrega para todo o Brasil. Até 12x sem juros ou 7% de desconto no PIX.',
    'sameAs': [
      'https://www.instagram.com/madeiramaniabr/',
      'https://www.facebook.com/madeiramaniabr/',
      'https://www.reclameaqui.com.br/empresa/madeira-mania-comercio-de-moveis-ltda/',
      'https://www.youtube.com/@madeiramaniabr',
      'https://www.tiktok.com/@madeiramaniabr'
    ],
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'telephone': '+55-11-91529-9488',
        'contactType': 'customer service',
        'availableLanguage': 'Portuguese'
      },
      {
        '@type': 'ContactPoint',
        'url': 'https://wa.me/5511915299488',
        'contactType': 'customer service',
        'description': 'WhatsApp'
      }
    ],
    'hasMerchantReturnPolicy': {
      '@type': 'MerchantReturnPolicy',
      'applicableCountry': 'BR',
      'returnPolicyCategory': 'https://schema.org/MerchantReturnFiniteReturnWindow',
      'merchantReturnDays': 7,
      'returnMethod': 'https://schema.org/ReturnByMail'
    }
  };

  /* Logo — só incluir se encontrou URL válida */
  if (logoUrl && logoUrl.indexOf('http') === 0) {
    schema.logo = logoUrl;
  }

  /* Injetar no <head> */
  var scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.id = 'mm-org-schema';
  scriptTag.textContent = JSON.stringify(schema);
  document.head.appendChild(scriptTag);
})();
