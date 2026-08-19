export const MIN_QUERY_LENGTH = 2;
export const MAX_QUERY_LENGTH = 120;
export const DEFAULT_PAGE_SIZE = 12;
export const MAX_PAGE_SIZE = 12;
export const MODAL_PAGE_SIZE = 6;

export const COMMERCIAL_FIELD_NAMES = new Set([
  'commercial',
  'price',
  'oldprice',
  'instock',
  'stock',
  'quantity',
  'availablequantity',
  'valor',
  'valorde',
  'valorcartao',
  'valorboleto',
  'valorpix',
  'percentualdesconto',
  'percentualoff',
  'qtdeestoque',
  'quantidadedisponivelvenda',
  'deposito'
]);

export const QUERY_ALIASES = Object.freeze({
  'cristalera': 'cristaleira',
  'meza de jantar': 'mesa de jantar',
  'guarda ropa': 'guarda roupa',
  'painel televisao': 'painel para tv',
  'painel de televisao': 'painel para tv',
  'escrivanina': 'escrivaninha',
  'escrivaninha': 'mesa para computador',
  'canto do cafe': 'cantinho do cafe'
});

export const QUERY_TOKEN_ALIASES = Object.freeze({
  'rak': 'rack',
  'racks': 'rack',
  'raqui': 'rack',
  'raque': 'rack',
  'raki': 'rack'
});

export const ALGOLIA_SYNONYMS = Object.freeze([
  {
    objectID: 'mm-syn-guarda-roupa',
    type: 'synonym',
    synonyms: ['guarda roupa', 'guarda-roupa', 'roupeiro']
  },
  {
    objectID: 'mm-syn-criado-mudo',
    type: 'synonym',
    synonyms: ['criado mudo', 'criado-mudo', 'mesa de cabeceira']
  },
  {
    objectID: 'mm-syn-painel-tv',
    type: 'synonym',
    synonyms: ['painel para tv', 'painel tv', 'painel televisao']
  },
  {
    objectID: 'mm-syn-cafe',
    type: 'synonym',
    synonyms: ['cantinho do cafe', 'canto do cafe']
  },
  {
    objectID: 'mm-syn-escrivaninha',
    type: 'oneWaySynonym',
    input: 'escrivaninha',
    synonyms: ['mesa para computador']
  }
]);

export const ALGOLIA_INDEX_SETTINGS = Object.freeze({
  searchableAttributes: [
    'unordered(sku)',
    'name',
    'unordered(brand)',
    'unordered(categories)',
    'unordered(keywords)',
    'unordered(attributes)'
  ],
  attributesForFaceting: [
    'searchable(categories)',
    'searchable(brand)',
    'searchable(material)',
    'requiresAssembly'
  ],
  attributesToRetrieve: [
    'objectID',
    'sku',
    'name',
    'brand',
    'categories',
    'material',
    'requiresAssembly',
    'url',
    'image',
    'productId',
    'derivationId',
    'ratingAverage',
    'reviewCount',
    'launchedAt',
    'updatedAt'
  ],
  attributesToHighlight: ['name', 'brand', 'categories'],
  highlightPreTag: '<mark>',
  highlightPostTag: '</mark>',
  indexLanguages: ['pt-br'],
  queryLanguages: ['pt-br'],
  ignorePlurals: ['pt'],
  typoTolerance: true,
  minWordSizefor1Typo: 4,
  minWordSizefor2Typos: 8,
  removeWordsIfNoResults: 'lastWords',
  hitsPerPage: DEFAULT_PAGE_SIZE,
  maxValuesPerFacet: 30,
  paginationLimitedTo: 1000,
  disableTypoToleranceOnAttributes: ['sku'],
  customRanking: ['desc(reviewCount)', 'desc(launchedAtTimestamp)']
});

export const ALGOLIA_DEFAULT_RANKING = Object.freeze([
  'typo',
  'geo',
  'words',
  'filters',
  'proximity',
  'attribute',
  'exact',
  'custom'
]);

export const SEARCH_SORTS = Object.freeze({
  relevance: null,
  newest: 'newest',
  name_asc: 'name_asc',
  name_desc: 'name_desc',
  rating_desc: 'rating_desc'
});

export const ALGOLIA_REPLICA_SETTINGS = Object.freeze({
  newest: {
    ranking: ['desc(launchedAtTimestamp)', ...ALGOLIA_DEFAULT_RANKING],
    customRanking: []
  },
  name_asc: {
    ranking: ['custom', ...ALGOLIA_DEFAULT_RANKING.filter((item) => item !== 'custom')],
    customRanking: ['asc(nameSort)']
  },
  name_desc: {
    ranking: ['custom', ...ALGOLIA_DEFAULT_RANKING.filter((item) => item !== 'custom')],
    customRanking: ['desc(nameSort)']
  },
  rating_desc: {
    ranking: ['desc(ratingAverage)', 'desc(reviewCount)', ...ALGOLIA_DEFAULT_RANKING],
    customRanking: []
  }
});

export const SEARCH_FACET_NAMES = Object.freeze([
  'categories',
  'brand',
  'material',
  'requiresAssembly'
]);
