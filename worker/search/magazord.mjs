import { mapMagazordProductToRecord } from './catalog.mjs';

function createUpstreamError(message, code, status) {
  const error = new Error(message);
  error.code = code;
  error.status = status;
  error.safeMessage = message;
  return error;
}

function authHeader(value) {
  const raw = String(value || '').trim();
  if (!raw) throw createUpstreamError('Credencial Magazord não configurada.', 'CONFIG_ERROR', 503);
  return /^Basic\s/i.test(raw) ? raw : `Basic ${raw}`;
}

function pageData(payload) {
  const root = payload?.data ?? payload ?? {};
  if (Array.isArray(root)) return { items: root, hasMore: false, page: 1, totalPages: 1 };
  const items = Array.isArray(root.items) ? root.items : [];
  const page = Number(root.page || 1);
  const totalPages = Number(root.total_pages || root.totalPages || page);
  const hasMore = Boolean(root.has_more ?? root.hasMore ?? (page < totalPages));
  return { items, hasMore, page, totalPages };
}

function finiteNumber(value) {
  if (value == null || value === '') return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function firstNamedValue(value) {
  const list = Array.isArray(value) ? value : value == null ? [] : [value];
  for (const item of list) {
    if (typeof item === 'string' && item.trim()) return item.trim();
    if (item && typeof item === 'object') {
      const named = String(item.nome || item.name || item.titulo || '').trim();
      if (named) return named;
    }
  }
  return '';
}

export function createMagazordClient(env = {}, {
  fetchImpl = fetch,
  sleepImpl = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds))
} = {}) {
  const baseUrl = String(env.MAGAZORD_BASE_URL || 'https://madeiramania.painel.magazord.com.br/api').replace(/\/$/, '');
  const storeId = String(env.MAGAZORD_STORE_ID || '').trim();
  const timeoutMs = Math.max(500, Math.min(8000, Number(env.MAGAZORD_TIMEOUT_MS || 2500)));
  const rateLimitRetries = Math.max(0, Math.min(8, Number(env.MAGAZORD_RATE_LIMIT_RETRIES ?? 8)));
  const rateLimitBaseMs = Math.max(100, Math.min(5000, Number(env.MAGAZORD_RATE_LIMIT_BASE_MS || 5000)));
  const reviewPageDelayMs = Math.max(0, Math.min(5000, Number(env.MAGAZORD_REVIEW_PAGE_DELAY_MS ?? 750)));
  let resolvedStoreIdPromise = null;

  function isIdempotentRead(path, method) {
    return method === 'GET' || (method === 'POST' && path === '/v3/avaliacoes/query');
  }

  function rateLimitDelay(response, attempt) {
    const retryAfter = String(response.headers.get('Retry-After') || '').trim();
    const seconds = Number(retryAfter);
    if (retryAfter && Number.isFinite(seconds)) return Math.max(100, Math.min(10000, seconds * 1000));
    if (retryAfter) {
      const timestamp = Date.parse(retryAfter);
      if (Number.isFinite(timestamp)) return Math.max(100, Math.min(10000, timestamp - Date.now()));
    }
    return Math.min(10000, rateLimitBaseMs * (2 ** attempt));
  }

  async function request(path, { query, method = 'GET', body, timeout = timeoutMs } = {}) {
    const url = new URL(`${baseUrl}${path}`);
    for (const [key, value] of Object.entries(query || {})) {
      if (value != null && value !== '') url.searchParams.set(key, String(value));
    }

    let response;
    for (let attempt = 0; attempt <= rateLimitRetries; attempt += 1) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);
      try {
        response = await fetchImpl(url.toString(), {
          method,
          headers: {
            Accept: 'application/json',
            Authorization: authHeader(env.MAGAZORD_BASIC_AUTH),
            ...(body ? { 'Content-Type': 'application/json' } : {})
          },
          body: body ? JSON.stringify(body) : undefined,
          signal: controller.signal,
          cache: 'no-store'
        });
      } catch (error) {
        if (error?.name === 'AbortError') {
          throw createUpstreamError('Tempo esgotado ao confirmar dados comerciais.', 'UPSTREAM_TIMEOUT', 504);
        }
        throw createUpstreamError('Magazord indisponível no momento.', 'UPSTREAM_UNAVAILABLE', 502);
      } finally {
        clearTimeout(timeoutId);
      }

      if (response.status !== 429 || !isIdempotentRead(path, method) || attempt === rateLimitRetries) break;
      try { await response.body?.cancel(); } catch {}
      await sleepImpl(rateLimitDelay(response, attempt));
    }

    if (response.status === 404) throw createUpstreamError('Produto não encontrado.', 'NOT_FOUND', 404);
    if (response.status === 401 || response.status === 403) {
      throw createUpstreamError('Autenticação Magazord inválida.', 'UPSTREAM_AUTH', 502);
    }
    if (response.status === 429) {
      throw createUpstreamError('Magazord temporariamente limitou as requisições.', 'UPSTREAM_RATE_LIMITED', 429);
    }
    if (!response.ok) throw createUpstreamError('Magazord retornou uma falha.', 'UPSTREAM_ERROR', 502);

    try {
      return await response.json();
    } catch {
      throw createUpstreamError('Resposta inválida da Magazord.', 'UPSTREAM_INVALID_RESPONSE', 502);
    }
  }

  async function resolveStoreId() {
    if (storeId) return storeId;
    if (!resolvedStoreIdPromise) {
      resolvedStoreIdPromise = request('/v2/site/loja', { query: { limit: 100, page: 1 } })
        .then((payload) => {
          const stores = pageData(payload).items.filter((item) => item?.ativo !== false);
          const expectedHost = 'madeiramania.com.br';
          const selected = stores.find((item) => {
            const accessUrl = String(item?.urlAcesso || item?.url_acesso || item?.url || '').toLowerCase();
            const name = String(item?.nome || item?.name || '').toLowerCase();
            return accessUrl.includes(expectedHost) || name.includes('madeira mania');
          }) || (stores.length === 1 ? stores[0] : null);
          const id = selected?.id ?? selected?.loja_id ?? selected?.lojaId ?? selected?.loja ?? selected?.codigo;
          if (id == null || String(id).trim() === '') {
            throw createUpstreamError('Não foi possível identificar a loja Magazord.', 'CONFIG_ERROR', 503);
          }
          return String(id).trim();
        })
        .catch((error) => {
          resolvedStoreIdPromise = null;
          throw error;
        });
    }
    return resolvedStoreIdPromise;
  }

  async function getProductDetail(sku) {
    const resolvedStoreId = await resolveStoreId();
    const payload = await request(`/v2/site/frontend/produto/${encodeURIComponent(resolvedStoreId)}/${encodeURIComponent(String(sku))}`);
    const product = payload?.data ?? payload;
    if (!product || product.ativo === false) throw createUpstreamError('Produto não encontrado.', 'NOT_FOUND', 404);
    return product;
  }

  async function listPages(path, query = {}, maxPages = 200, pageSize = 100) {
    const items = [];
    let page = 1;
    while (page <= maxPages) {
      const payload = await request(path, { query: { ...query, limit: pageSize, page } });
      const current = pageData(payload);
      items.push(...current.items);
      if (!current.hasMore || current.items.length === 0) break;
      page += 1;
    }
    return items;
  }

  async function listApprovedReviewAggregates(maxPages = 200) {
    const aggregates = new Map();
    let page = 1;
    while (page <= maxPages) {
      const payload = await request('/v3/avaliacoes/query', {
        method: 'POST',
        query: { limit: 5000, page },
        body: {
          filters: [{ field: 'situacao', operator: 'eq', value: 2 }],
          sorters: [{ field: 'id', direction: 'asc' }]
        }
      });
      const current = pageData(payload);
      for (const review of current.items) {
        if (Number(review?.situacao) !== 2) continue;
        const productId = finiteNumber(review?.idProduto);
        const rating = finiteNumber(review?.nota);
        if (productId == null || rating == null || rating < 1 || rating > 5) continue;
        const key = String(productId);
        const aggregate = aggregates.get(key) || { sum: 0, count: 0 };
        aggregate.sum += rating;
        aggregate.count += 1;
        aggregates.set(key, aggregate);
      }
      if (!current.hasMore || current.items.length === 0) break;
      if (page >= maxPages) {
        throw createUpstreamError(
          'A paginação de avaliações excedeu o limite seguro.',
          'UPSTREAM_PAGINATION_LIMIT',
          502
        );
      }
      if (reviewPageDelayMs > 0) await sleepImpl(reviewPageDelayMs);
      page += 1;
    }

    return new Map(Array.from(aggregates, ([productId, aggregate]) => [productId, {
      ratingAverage: Math.round((aggregate.sum / aggregate.count) * 100) / 100,
      reviewCount: aggregate.count
    }]));
  }

  return {
    name: 'magazord',
    async getProductDetail(sku) {
      return getProductDetail(sku);
    },
    async getSearchRecord(sku) {
      return mapMagazordProductToRecord(await getProductDetail(sku));
    },
    async getCommercial(sku) {
      const product = await getProductDetail(sku);
      return {
        status: 'confirmed',
        valor: product.valor,
        valor_de: product.valor_de,
        percentual_desconto: product.percentual_desconto,
        qtde_estoque: product.qtde_estoque,
        ativo: product.ativo,
        produto_id: product.produto_id,
        derivacao_id: product.derivacao_id,
        derivacao_nome: product.derivacao_nome,
        codigo: product.codigo,
        nome: product.titulo || product.nome,
        marca: product.marca,
        categoria: firstNamedValue(product.categorias || product.categoria),
        link: product.link
      };
    },
    async getCartContext(sku) {
      const [product, stockPayload] = await Promise.all([
        getProductDetail(sku),
        request('/v1/listEstoque', {
          query: { produto: String(sku), ativo: true, limit: 100 }
        })
      ]);
      const stockItems = pageData(stockPayload).items
        .filter((item) => item?.ativo !== false)
        .map((item) => ({
          ...item,
          available: finiteNumber(item?.quantidadeDisponivelVenda) || 0,
          deposit: finiteNumber(item?.deposito)
        }))
        .filter((item) => item.available > 0 && item.deposit != null)
        .sort((left, right) => right.available - left.available);
      const selectedStock = stockItems[0] || null;
      return {
        sku: String(product.codigo || sku),
        productId: finiteNumber(product.produto_id),
        derivationId: finiteNumber(product.derivacao_id),
        derivationName: String(product.derivacao_nome || ''),
        name: String(product.titulo || product.nome || ''),
        category: firstNamedValue(product.categorias || product.categoria),
        brand: String(product.marca || ''),
        price: finiteNumber(product.valor),
        deposit: selectedStock?.deposit ?? null,
        availableQuantity: finiteNumber(product.qtde_estoque),
        active: product.ativo !== false,
        url: String(product.link || '')
      };
    },
    async listUpdatedProducts({ since, until } = {}) {
      const resolvedStoreId = await resolveStoreId();
      return listPages('/v2/site/produto', {
        loja: resolvedStoreId,
        tipoProduto: 1,
        dataAtualizacaoInicio: since,
        dataAtualizacaoFim: until,
        order: 'id',
        orderDirection: 'asc'
      });
    },
    async listFrontendProducts() {
      const resolvedStoreId = await resolveStoreId();
      return listPages(`/v2/site/frontend/produto/${encodeURIComponent(resolvedStoreId)}`, {}, 200, 1000);
    },
    async listApprovedReviewAggregates(maxPages) {
      return listApprovedReviewAggregates(maxPages);
    },
    request
  };
}

export { pageData as normalizeMagazordPage };
