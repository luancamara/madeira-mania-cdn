import { mapWithConcurrency, normalizeText } from './utils.mjs';

function numberOrNull(value) {
  if (value == null || value === '') return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

export function normalizeCommercial(value) {
  if (!value || value.status === 'unavailable') return { status: 'unavailable' };
  const price = numberOrNull(value.price ?? value.valor);
  const oldPrice = numberOrNull(value.oldPrice ?? value.valor_de);
  const quantity = numberOrNull(value.availableQuantity ?? value.qtde_estoque);
  const active = value.active ?? value.ativo;
  return {
    status: 'confirmed',
    price,
    oldPrice: oldPrice != null && oldPrice > (price ?? 0) ? oldPrice : null,
    discountPercent: numberOrNull(value.discountPercent ?? value.percentual_desconto),
    inStock: Boolean(value.inStock ?? (active !== false && quantity != null && quantity > 0)),
    availableQuantity: quantity,
    productId: numberOrNull(value.productId ?? value.produto_id),
    derivationId: numberOrNull(value.derivationId ?? value.derivacao_id),
    derivationName: String(value.derivationName ?? value.derivacao_nome ?? ''),
    code: String(value.code ?? value.codigo ?? ''),
    name: String(value.name ?? value.nome ?? ''),
    brand: String(value.brand ?? value.marca ?? ''),
    category: String(value.category ?? value.categoria ?? ''),
    url: String(value.url ?? value.link ?? '')
  };
}

export function normalizeFacets(facets = {}) {
  const result = {};
  for (const [name, values] of Object.entries(facets || {})) {
    if (!values || typeof values !== 'object') {
      result[name] = [];
      continue;
    }
    result[name] = Object.entries(values)
      .map(([value, count]) => ({ value, count: Number(count) || 0 }))
      .filter((item) => item.value && item.count > 0)
      .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value, 'pt-BR'));
  }
  return result;
}

function titleCase(value) {
  return String(value).replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
}

export function buildSuggestions(params, discovery) {
  const suggestions = [];
  if (normalizeText(params.query) !== normalizeText(params.interpretedQuery)) {
    suggestions.push({
      label: titleCase(params.interpretedQuery),
      query: params.interpretedQuery,
      type: 'correction'
    });
  }

  const categories = discovery?.facets?.categories || {};
  for (const [category, count] of Object.entries(categories).slice(0, 3)) {
    suggestions.push({
      label: category,
      query: params.interpretedQuery,
      type: 'category',
      filter: { category },
      count: Number(count) || 0
    });
  }
  return suggestions;
}

export function createSearchService({ discoveryProvider, commercialProvider, commercialConcurrency = 6 }) {
  if (!discoveryProvider?.search) throw new Error('Discovery provider inválido.');
  const commerce = commercialProvider || discoveryProvider;
  if (!commerce?.getCommercial) throw new Error('Commercial provider inválido.');

  return {
    async search(params) {
      const startedAt = Date.now();
      const discovery = await discoveryProvider.search(params);
      let partialCommercial = false;
      const hydrated = await mapWithConcurrency(
        (discovery.hits || []).slice(0, params.limit),
        commercialConcurrency,
        async (hit) => {
          try {
            const commercial = normalizeCommercial(await commerce.getCommercial(hit.sku || hit.objectID));
            if (commercial.status !== 'confirmed') partialCommercial = true;
            return { ...hit, commercial };
          } catch (error) {
            if (error?.code === 'NOT_FOUND' || error?.status === 404) return null;
            partialCommercial = true;
            return { ...hit, commercial: { status: 'unavailable' } };
          }
        }
      );

      return {
        query: params.query,
        interpretedQuery: params.interpretedQuery,
        exact: Boolean(params.exact),
        page: Number(discovery.page ?? params.page),
        hitsPerPage: Number(discovery.hitsPerPage ?? params.limit),
        nbHits: Number(discovery.nbHits || 0),
        nbPages: Number(discovery.nbPages || 0),
        queryID: discovery.queryID || null,
        processingTimeMS: Math.max(Number(discovery.processingTimeMS || 0), Date.now() - startedAt),
        facets: normalizeFacets(discovery.facets),
        suggestions: buildSuggestions(params, discovery),
        hits: hydrated.filter(Boolean),
        partialCommercial,
        source: discoveryProvider.name || 'unknown'
      };
    }
  };
}
