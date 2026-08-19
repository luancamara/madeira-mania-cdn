import { mapMagazordProductToRecord } from './catalog.mjs';
import { damerauLevenshtein, normalizeText, uniqueStrings } from './utils.mjs';

const RAW_FIXTURE_PRODUCTS = [
  {
    nome: 'Mini Cristaleira de Madeira Maciça 4 portas - Cor: Preto/Amêndoa', codigo: 'MM-135-WF', marca: 'WillFama',
    categoria: 'Sala de Estar,Cristaleiras', link: '/mini-cristaleira-de-madeira-macica-4-portas-preto-fundo-amendoa',
    midia_url: 'https://madeiramania.cdn.magazord.com.br/img/2026/03/produto/7280/foto-0012-la4505ptam-fundo-infinito.jpg?ims=400x400',
    commercial: { price: 2756.16, oldPrice: null, discountPercent: null, inStock: true }
  },
  {
    nome: 'Mesa de Jantar 6 Lugares Jade - Cinamomo/Off White', codigo: 'VALDE-065-MM', marca: 'Valdemóveis',
    categoria: 'Sala de Jantar,Mesas', link: '/mesa-de-jantar-6-lugares-jade-cinamomo-off-white',
    midia_url: 'https://madeiramania.cdn.magazord.com.br/img/2026/06/produto/8886/valde-065-mm-1.jpg?ims=400x400',
    commercial: { price: 1025.78, oldPrice: null, discountPercent: null, inStock: true }
  },
  {
    nome: 'Quarto Infantil Completo com Guarda-Roupa e Beliche Théo Branco', codigo: 'TIG-071-MM', marca: 'Tigus Baby',
    categoria: 'Quarto,Dormitórios', link: '/quarto-infantil-completo-com-guarda-roupa-e-beliche-theo-cor-branco',
    midia_url: 'https://madeiramania.cdn.magazord.com.br/img/2026/06/produto/14990/tig-p071-mm-1.jpg?ims=400x400',
    commercial: { price: 2208.23, oldPrice: null, discountPercent: null, inStock: true }
  },
  {
    nome: 'Quarto de Bebê Completo com Guarda-roupa, Berço e Cômoda Gael', codigo: 'TIG-067-MM', marca: 'Tigus Baby',
    categoria: 'Quarto,Cômodas', link: '/quarto-de-bebe-completo-gemeos-com-guarda-roupa-2-bercos-e-comoda-gael-cor-branco-amadeirado',
    midia_url: 'https://madeiramania.cdn.magazord.com.br/img/2026/06/produto/14901/tig-p067-mm-1.jpg?ims=400x400',
    commercial: { price: 3102.10, oldPrice: null, discountPercent: null, inStock: true }
  },
  {
    nome: 'Painel para TV até 55 Polegadas Tiradentes - Cinamomo', codigo: 'VALDE-111-MM', marca: 'Valdemóveis',
    categoria: 'Sala de Estar,Painéis', link: '/painel-para-tv-ate-55-polegadas-tiradentes-cinamomo',
    midia_url: 'https://madeiramania.cdn.magazord.com.br/img/2026/06/produto/9372/valde-111-mm-1.jpg?ims=400x400',
    commercial: { price: 476.48, oldPrice: null, discountPercent: null, inStock: true }
  },
  {
    nome: 'Balcão Aparador Buffet Cantinho do Café Gramado Branco', codigo: 'KAI-150-MM', marca: 'Kaiki',
    categoria: 'Cozinha,Balcões', link: '/balcao-aparador-buffet-cantinho-do-cafe-gramado-cor-branco',
    midia_url: 'https://madeiramania.cdn.magazord.com.br/img/2026/06/produto/11525/kai-p150-mm-1.jpg?ims=400x400',
    commercial: { price: 277.63, oldPrice: null, discountPercent: null, inStock: true }
  },
  {
    nome: 'Mesa para Computador Giga - Cinamomo/Off White', codigo: 'VALDE-017-MM', marca: 'Valdemóveis',
    categoria: 'Escritório,Mesas para Computador', palavraChave: 'escrivaninha home office',
    link: '/mesa-para-computador-giga-cinamomo-off-white-2',
    midia_url: 'https://madeiramania.cdn.magazord.com.br/img/2026/06/produto/8674/valde-017-mm-1.jpg?ims=400x400',
    commercial: { price: 545.26, oldPrice: null, discountPercent: null, inStock: true }
  },
  {
    nome: 'Roupeiro Fly 4 Portas 2 Gavetas Branco/Ypê', codigo: 'TIG-018-MM', marca: 'Tigus Baby',
    categoria: 'Quarto,Roupeiros', palavraChave: 'guarda roupa',
    link: '/roupeiro-fly-4-portas-2-gavetas-cor-flex-color-branco-ype-branco',
    midia_url: 'https://madeiramania.cdn.magazord.com.br/img/2026/06/produto/14368/tig-p018-mm-1.jpg?ims=400x400',
    commercial: { price: 956.12, oldPrice: null, discountPercent: null, inStock: false }
  },
  {
    nome: 'Armário de Cozinha Aéreo 2 Portas Burguesa Premium 100% MDF', codigo: 'NES-190-MM', marca: 'Nesher',
    categoria: 'Cozinha,Armários de Cozinha', link: '/armario-de-cozinha-aereo-2-portas-burguesa-premium-100-mdf-cor-freijo-grafite',
    midia_url: 'https://madeiramania.cdn.magazord.com.br/img/2026/06/produto/12624/nes-p190-mm-1.jpg?ims=400x400',
    caracteristicas: [{ nome: 'Material', procar_valor: 'MDF' }],
    commercial: { price: 475.56, oldPrice: null, discountPercent: null, inStock: true }
  },
  {
    nome: 'Rack Atenas Naturalle - Largura 220 cm', codigo: 'MM-085-MAV', marca: 'Mavaular', derivacao_id: 1408,
    categoria: 'Sala de Estar,Racks', link: '/rack-atenas-cor-naturalle-largura-220-cm',
    midia_url: 'https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5519/am-2501-mavaular-rack-atenas-220-naturalle-lado.jpg?ims=400x400',
    nota: '4.97', avaliacoes: 224,
    commercial: { price: 1086.63, oldPrice: 1615.49, discountPercent: 33, inStock: true, deposit: 1 }
  }
];

export const FIXTURE_PRODUCTS = Object.freeze(RAW_FIXTURE_PRODUCTS.map((item, index) => {
  const { commercial, ...stable } = item;
  return {
    record: {
      ...mapMagazordProductToRecord(stable),
      launchedAt: `2026-06-${String(20 - index).padStart(2, '0')}T12:00:00-03:00`,
      launchedAtTimestamp: 1780000000 - index
    },
    commercial: { status: 'confirmed', ...commercial }
  };
}));

function wordScore(queryToken, words) {
  let best = 0;
  for (const word of words) {
    if (word === queryToken) best = Math.max(best, 28);
    else if (word.startsWith(queryToken) || queryToken.startsWith(word)) best = Math.max(best, 18);
    else {
      const maxDistance = queryToken.length >= 8 ? 2 : queryToken.length >= 4 ? 1 : 0;
      if (maxDistance && damerauLevenshtein(queryToken, word) <= maxDistance) best = Math.max(best, 12);
    }
  }
  return best;
}

function scoreRecord(record, interpretedQuery) {
  const query = normalizeText(interpretedQuery);
  const normalizedSku = normalizeText(record.sku);
  if (query === normalizedSku) return 10000;

  const haystack = normalizeText([
    record.name,
    record.sku,
    record.brand,
    ...record.categories,
    ...record.keywords,
    ...record.attributes
  ].join(' '));
  if (!query || !haystack) return 0;

  let score = haystack.includes(query) ? 120 : 0;
  const words = uniqueStrings(haystack.split(' ')).map(normalizeText);
  const tokens = query.split(' ');
  let matched = 0;
  for (const token of tokens) {
    const tokenScore = wordScore(token, words);
    if (tokenScore) matched++;
    score += tokenScore;
  }
  if (matched !== tokens.length) return 0;
  if (normalizeText(record.name).startsWith(query)) score += 35;
  return score;
}

function matchesFilters(record, filters) {
  for (const [key, selected] of Object.entries(filters || {})) {
    if (!selected?.length) continue;
    const recordValues = uniqueStrings(record[key]);
    const normalizedValues = new Set(recordValues.map(normalizeText));
    if (!selected.some((value) => normalizedValues.has(normalizeText(value)))) return false;
  }
  return true;
}

function facetCounts(records, key) {
  const counts = new Map();
  for (const record of records) {
    for (const value of uniqueStrings(record[key])) counts.set(value, (counts.get(value) || 0) + 1);
  }
  return Object.fromEntries([...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])));
}

function compareScored(left, right, sort) {
  if (sort === 'newest') {
    return Number(right.record.launchedAtTimestamp || 0) - Number(left.record.launchedAtTimestamp || 0) ||
      left.record.name.localeCompare(right.record.name, 'pt-BR');
  }
  if (sort === 'name_asc') return left.record.name.localeCompare(right.record.name, 'pt-BR');
  if (sort === 'name_desc') return right.record.name.localeCompare(left.record.name, 'pt-BR');
  if (sort === 'rating_desc') {
    return Number(right.record.ratingAverage || 0) - Number(left.record.ratingAverage || 0) ||
      Number(right.record.reviewCount || 0) - Number(left.record.reviewCount || 0) ||
      left.record.name.localeCompare(right.record.name, 'pt-BR');
  }
  return right.score - left.score || left.record.name.localeCompare(right.record.name, 'pt-BR');
}

export function createFixtureProvider(products = FIXTURE_PRODUCTS) {
  const commercialBySku = new Map(products.map((item) => [item.record.sku, {
    ...item.commercial,
    productId: item.record.productId,
    derivationId: item.record.derivationId,
    code: item.record.sku,
    name: item.record.name,
    brand: item.record.brand,
    category: item.record.categories[0] || '',
    url: item.record.url
  }]));
  return {
    name: 'fixture',
    async search(params) {
      const scored = products
        .map(({ record }) => ({ record, score: scoreRecord(record, params.interpretedQuery) }))
        .filter(({ score, record }) => score > 0 && matchesFilters(record, params.filters))
        .sort((left, right) => compareScored(left, right, params.sort));
      const start = params.page * params.limit;
      const hits = scored.slice(start, start + params.limit).map(({ record }) => ({ ...record }));
      const matchingRecords = scored.map(({ record }) => record);
      return {
        hits,
        nbHits: scored.length,
        page: params.page,
        hitsPerPage: params.limit,
        nbPages: Math.max(1, Math.ceil(scored.length / params.limit)),
        processingTimeMS: 1,
        queryID: `fixture-${normalizeText(params.query).replace(/\s+/g, '-')}`,
        facets: {
          categories: facetCounts(matchingRecords, 'categories'),
          brand: facetCounts(matchingRecords, 'brand'),
          material: facetCounts(matchingRecords, 'material'),
          requiresAssembly: facetCounts(matchingRecords, 'requiresAssembly')
        }
      };
    },
    async getCommercial(sku) {
      const commercial = commercialBySku.get(String(sku));
      if (!commercial) {
        const error = new Error('Fixture product not found.');
        error.code = 'NOT_FOUND';
        error.status = 404;
        throw error;
      }
      return { ...commercial };
    },
    async getCartContext(sku) {
      const commercial = commercialBySku.get(String(sku));
      if (!commercial) {
        const error = new Error('Fixture product not found.');
        error.code = 'NOT_FOUND';
        error.status = 404;
        throw error;
      }
      return {
        sku: commercial.code,
        productId: commercial.productId,
        derivationId: commercial.derivationId,
        derivationName: '',
        name: commercial.name,
        category: commercial.category,
        brand: commercial.brand,
        price: commercial.price,
        deposit: commercial.deposit ?? 1,
        availableQuantity: commercial.inStock ? 1 : 0,
        active: true,
        url: commercial.url
      };
    }
  };
}
