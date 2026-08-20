import test from 'node:test';
import assert from 'node:assert/strict';

import { createMagazordClient, normalizeMagazordPage } from '../../worker/search/magazord.mjs';

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

const env = {
  MAGAZORD_BASE_URL: 'https://example.magazord.test/api',
  MAGAZORD_BASIC_AUTH: 'Basic local-test-only',
  MAGAZORD_STORE_ID: '7'
};

test('consulta comércio por SKU sem cache e sem expor auth na resposta', async () => {
  const calls = [];
  const client = createMagazordClient(env, {
    fetchImpl: async (url, options) => {
      calls.push({ url, options });
      if (options.cache === 'no-store' && options.cf?.cacheTtl === 0) {
        throw new TypeError('CacheTtl: 0 is incompatible with cache: no-store');
      }
      return jsonResponse({ data: {
        produto_id: 10, derivacao_id: 20, derivacao_nome: 'Amêndoa', codigo: 'MM/1',
        nome: 'Mesa', marca: 'Marca', categorias: [{ nome: 'Sala' }], link: '/mesa',
        valor: '123.45', valor_de: null, qtde_estoque: 2, ativo: true
      } });
    }
  });
  const result = await client.getCommercial('MM/1');
  assert.equal(result.valor, '123.45');
  assert.equal(result.produto_id, 10);
  assert.equal(result.categoria, 'Sala');
  assert.equal(calls[0].url, 'https://example.magazord.test/api/v2/site/frontend/produto/7/MM%2F1');
  assert.equal(calls[0].options.headers.Authorization, 'Basic local-test-only');
  assert.equal(calls[0].options.cache, 'no-store');
  assert.equal(calls[0].options.cf, undefined);
});

test('identifica automaticamente a loja quando o ID não foi configurado', async () => {
  const urls = [];
  const client = createMagazordClient({
    MAGAZORD_BASE_URL: 'https://example.magazord.test/api',
    MAGAZORD_BASIC_AUTH: 'Basic local-test-only'
  }, {
    fetchImpl: async (url) => {
      urls.push(url);
      if (url.includes('/v2/site/loja')) {
        return jsonResponse({ data: [{ id: 42, nome: 'Madeira Mania', urlAcesso: 'https://www.madeiramania.com.br', ativo: true }] });
      }
      return jsonResponse({ data: { codigo: 'A', nome: 'Mesa', valor: 100, qtde_estoque: 1, ativo: true } });
    }
  });
  const product = await client.getCommercial('A');
  assert.equal(product.codigo, 'A');
  assert.match(urls[0], /\/v2\/site\/loja\?/);
  assert.match(urls[1], /\/v2\/site\/frontend\/produto\/42\/A$/);
});

test('agrega somente avaliações aprovadas sem retornar PII', async () => {
  const calls = [];
  const client = createMagazordClient(env, {
    fetchImpl: async (url, options) => {
      calls.push({ url, body: options.body ? JSON.parse(options.body) : null });
      return jsonResponse({
        items: [
          { idProduto: 10, nota: 5, situacao: 2, nomePessoa: 'Privado' },
          { idProduto: 10, nota: 3, situacao: 2, nomePessoa: 'Privado' },
          { idProduto: 10, nota: 1, situacao: 3, nomePessoa: 'Privado' }
        ],
        page: 1,
        totalPages: 1,
        hasMore: false
      });
    }
  });
  const aggregates = await client.listApprovedReviewAggregates();
  assert.deepEqual(aggregates.get('10'), { ratingAverage: 4, reviewCount: 2 });
  assert.deepEqual(calls[0].body.filters, [{ field: 'situacao', operator: 'eq', value: 2 }]);
  assert.equal(new URL(calls[0].url).searchParams.get('limit'), '500');
  assert.equal(JSON.stringify(aggregates).includes('Privado'), false);
});

test('repete consulta idempotente de avaliações quando a Magazord responde 429', async () => {
  let attempts = 0;
  const waits = [];
  const client = createMagazordClient(env, {
    sleepImpl: async (milliseconds) => waits.push(milliseconds),
    fetchImpl: async () => {
      attempts += 1;
      if (attempts === 1) {
        return new Response(JSON.stringify({ message: 'Too Many Requests' }), {
          status: 429,
          headers: { 'Content-Type': 'application/json', 'Retry-After': '1' }
        });
      }
      return jsonResponse({
        items: [{ idProduto: 10, nota: 5, situacao: 2 }],
        page: 1,
        totalPages: 1,
        hasMore: false
      });
    }
  });

  const aggregates = await client.listApprovedReviewAggregates();

  assert.equal(attempts, 2);
  assert.deepEqual(waits, [1000]);
  assert.deepEqual(aggregates.get('10'), { ratingAverage: 5, reviewCount: 1 });
});

test('não repete POST genérico quando a Magazord responde 429', async () => {
  let attempts = 0;
  const client = createMagazordClient(env, {
    sleepImpl: async () => assert.fail('POST não idempotente não pode aguardar retry'),
    fetchImpl: async () => {
      attempts += 1;
      return jsonResponse({ message: 'Too Many Requests' }, 429);
    }
  });

  await assert.rejects(
    () => client.request('/v3/escrita', { method: 'POST', body: { ativo: true } }),
    (error) => error.code === 'UPSTREAM_RATE_LIMITED' && error.status === 429
  );
  assert.equal(attempts, 1);
});

test('espaça páginas de avaliações para não esgotar a cota da Magazord', async () => {
  const waits = [];
  let page = 0;
  const client = createMagazordClient({
    ...env,
    MAGAZORD_REVIEW_PAGE_DELAY_MS: '750'
  }, {
    sleepImpl: async (milliseconds) => waits.push(milliseconds),
    fetchImpl: async () => {
      page += 1;
      return jsonResponse({
        items: [{ idProduto: page, nota: 5, situacao: 2 }],
        page,
        totalPages: 2,
        hasMore: page === 1
      });
    }
  });

  const aggregates = await client.listApprovedReviewAggregates();

  assert.equal(aggregates.size, 2);
  assert.deepEqual(waits, [750]);
});

test('interrompe avaliações com erro explícito se a paginação exceder o teto', async () => {
  let requests = 0;
  const client = createMagazordClient({
    ...env,
    MAGAZORD_REVIEW_PAGE_DELAY_MS: '0'
  }, {
    fetchImpl: async () => {
      requests += 1;
      return jsonResponse({
        items: [{ idProduto: requests, nota: 5, situacao: 2 }],
        page: requests,
        totalPages: 3,
        hasMore: true
      });
    }
  });

  await assert.rejects(
    () => client.listApprovedReviewAggregates(2),
    (error) => error.code === 'UPSTREAM_PAGINATION_LIMIT' && error.status === 502
  );
  assert.equal(requests, 2);
});

test('monta contexto de carrinho com depósito que possui estoque', async () => {
  const client = createMagazordClient(env, {
    fetchImpl: async (url) => {
      if (url.includes('/v1/listEstoque')) {
        return jsonResponse({ data: [
          { produto: 'A', deposito: 3, quantidadeDisponivelVenda: 0, ativo: true },
          { produto: 'A', deposito: 7, quantidadeDisponivelVenda: 4, ativo: true }
        ] });
      }
      return jsonResponse({ data: {
        produto_id: 10, derivacao_id: 20, codigo: 'A', derivacao_nome: 'Única',
        titulo: 'Mesa A', marca: 'Marca', categorias: [{ nome: 'Sala' }], valor: 100,
        qtde_estoque: 4, ativo: true, link: '/mesa-a'
      } });
    }
  });
  const context = await client.getCartContext('A');
  assert.equal(context.deposit, 7);
  assert.equal(context.derivationId, 20);
  assert.equal(context.category, 'Sala');
});

test('pagina produtos incrementais com filtros de atualização', async () => {
  const urls = [];
  const client = createMagazordClient(env, {
    fetchImpl: async (url) => {
      urls.push(new URL(url));
      const page = Number(new URL(url).searchParams.get('page'));
      return jsonResponse({ data: { items: [{ id: page }], page, total_pages: 2, has_more: page === 1 } });
    }
  });
  const items = await client.listUpdatedProducts({ since: '2026-07-16T10:00:00-03:00', until: '2026-07-16T10:30:00-03:00' });
  assert.deepEqual(items.map((item) => item.id), [1, 2]);
  assert.equal(urls[0].searchParams.get('dataAtualizacaoInicio'), '2026-07-16T10:00:00-03:00');
  assert.equal(urls[0].searchParams.get('loja'), '7');
});

test('classifica 404 e autenticação sem consumir corpo sensível', async () => {
  const missing = createMagazordClient(env, { fetchImpl: async () => jsonResponse({ secret: 'nope' }, 404) });
  await assert.rejects(() => missing.getCommercial('X'), (error) => error.code === 'NOT_FOUND' && error.status === 404);

  const auth = createMagazordClient(env, { fetchImpl: async () => jsonResponse({ token: 'nope' }, 401) });
  await assert.rejects(() => auth.getCommercial('X'), (error) => error.code === 'UPSTREAM_AUTH' && !error.message.includes('nope'));
});

test('normaliza formas paginadas da API', () => {
  assert.deepEqual(normalizeMagazordPage({ data: [{ id: 1 }] }).items, [{ id: 1 }]);
  assert.equal(normalizeMagazordPage({ data: { items: [], page: 2, total_pages: 3 } }).hasMore, true);
});
