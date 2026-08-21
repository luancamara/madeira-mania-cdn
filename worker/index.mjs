import { createAlgoliaClient } from './search/algolia.mjs';
import { createFixtureProvider } from './search/fixture.mjs';
import { createMagazordClient } from './search/magazord.mjs';
import { createSearchService } from './search/service.mjs';
import { createSearchSynchronizer } from './search/sync.mjs';
import { parseSearchParams, sanitizeError } from './search/utils.mjs';

const PROD_ORIGINS = new Set([
  'https://www.madeiramania.com.br',
  'https://madeiramania.com.br'
]);
const SEARCH_EVENTS = new Set([
  'mm_search_submitted',
  'mm_search_results_viewed',
  'mm_search_no_results',
  'mm_search_product_clicked',
  'mm_search_correction_used',
  'mm_search_filter_changed'
]);
const FULL_SYNC_CRON = '17 3 * * *';
const RATING_SYNC_CRON = '37 * * * *';
let lastSyncStatus = null;
const rateBuckets = new Map();

function isLocalHostname(hostname) {
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]';
}

function allowedOrigin(origin) {
  if (!origin) return null;
  if (PROD_ORIGINS.has(origin)) return origin;
  try {
    const url = new URL(origin);
    if (url.protocol === 'http:' && isLocalHostname(url.hostname)) return origin;
  } catch {}
  return null;
}

function corsHeaders(request) {
  const origin = request.headers.get('Origin');
  const allowed = allowedOrigin(origin);
  return {
    ...(allowed ? { 'Access-Control-Allow-Origin': allowed } : {}),
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '600',
    Vary: 'Origin'
  };
}

function jsonResponse(request, body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
      ...corsHeaders(request),
      ...extraHeaders
    }
  });
}

function apiError(request, error) {
  const status = Number(error?.status) || 500;
  const safe = sanitizeError(error);
  if (status >= 500 && !error?.safeMessage) safe.message = 'Não foi possível concluir a busca agora.';
  return jsonResponse(request, { error: safe }, status, {
    ...(error?.retryAfter ? { 'Retry-After': String(error.retryAfter) } : {})
  });
}

function assertRateLimit(request, env, url, now = Date.now()) {
  if (env.SEARCH_RATE_LIMIT_DISABLED === '1') return;
  if (!['/api/search', '/api/search/cart-context', '/api/search/events'].includes(url.pathname)) return;
  const limit = Math.max(10, Math.min(1000, Number(env.SEARCH_RATE_LIMIT_MAX || 120)));
  const periodSeconds = Math.max(10, Math.min(3600, Number(env.SEARCH_RATE_LIMIT_PERIOD_SECONDS || 60)));
  const periodMs = periodSeconds * 1000;
  const client = request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For') || 'local';
  const key = `${url.pathname}:${String(client).split(',')[0].trim().slice(0, 80)}`;
  const current = rateBuckets.get(key);
  const bucket = !current || now >= current.resetAt
    ? { count: 0, resetAt: now + periodMs }
    : current;
  bucket.count += 1;
  rateBuckets.set(key, bucket);

  if (rateBuckets.size > 5000) {
    for (const [bucketKey, value] of rateBuckets) {
      if (now >= value.resetAt) rateBuckets.delete(bucketKey);
      if (rateBuckets.size <= 4000) break;
    }
  }

  if (bucket.count > limit) {
    const error = new Error('Muitas buscas. Tente novamente em instantes.');
    error.code = 'SEARCH_RATE_LIMITED';
    error.status = 429;
    error.safeMessage = error.message;
    error.retryAfter = Math.max(1, Math.ceil((bucket.resetAt - now) / 1000));
    throw error;
  }
}

async function readSyncStatus(env) {
  if (env.SEARCH_STATE?.get) {
    try {
      const stored = await env.SEARCH_STATE.get('last-sync', { type: 'json' });
      if (stored && typeof stored === 'object') return stored;
    } catch {}
  }
  return lastSyncStatus;
}

async function writeSyncStatus(env, status) {
  lastSyncStatus = status;
  if (env.SEARCH_STATE?.put) {
    try { await env.SEARCH_STATE.put('last-sync', JSON.stringify(status)); } catch {}
  }
}

function providerMode(env, url) {
  const configured = String(env.SEARCH_PROVIDER || '').trim().toLowerCase();
  if (configured) return configured;
  return isLocalHostname(url.hostname) ? 'fixture' : 'disabled';
}

function configError(message) {
  const error = new Error(message);
  error.code = 'SEARCH_NOT_CONFIGURED';
  error.status = 503;
  error.safeMessage = message;
  return error;
}

export function createRuntime(env, url) {
  const mode = providerMode(env, url);
  if (mode === 'fixture') {
    if (!isLocalHostname(url.hostname) && env.ALLOW_FIXTURE_SEARCH !== '1') {
      throw configError('Fixture de busca bloqueada fora do ambiente local.');
    }
    const fixture = createFixtureProvider();
    return {
      mode,
      discovery: fixture,
      commercial: fixture,
      service: createSearchService({ discoveryProvider: fixture, commercialProvider: fixture }),
      synchronizer: null,
      algolia: null
    };
  }
  if (mode !== 'algolia') throw configError('Busca avançada ainda não configurada neste ambiente.');

  const algolia = createAlgoliaClient(env);
  const magazord = createMagazordClient(env);
  return {
    mode,
    discovery: algolia,
    commercial: magazord,
    service: createSearchService({ discoveryProvider: algolia, commercialProvider: magazord }),
    synchronizer: createSearchSynchronizer({
      magazord,
      algolia,
      minimumFullRecords: Number(env.SEARCH_MIN_FULL_RECORDS || 100),
      maxFullFailureRatio: Number(env.SEARCH_MAX_FULL_FAILURE_RATIO || 0.05)
    }),
    algolia
  };
}

async function readJson(request, maxBytes = 4096) {
  const contentLength = Number(request.headers.get('Content-Length') || 0);
  if (contentLength > maxBytes) {
    const error = new Error('Payload muito grande.');
    error.code = 'PAYLOAD_TOO_LARGE';
    error.status = 413;
    throw error;
  }
  const text = await request.text();
  if (text.length > maxBytes) {
    const error = new Error('Payload muito grande.');
    error.code = 'PAYLOAD_TOO_LARGE';
    error.status = 413;
    throw error;
  }
  try { return text ? JSON.parse(text) : {}; }
  catch {
    const error = new Error('JSON inválido.');
    error.code = 'INVALID_JSON';
    error.status = 400;
    throw error;
  }
}

function sanitizeEvent(input, runtime, request) {
  const eventName = String(input?.eventName || input?.name || '').slice(0, 64);
  if (!SEARCH_EVENTS.has(eventName)) return null;
  const objectID = String(input?.objectID || '').slice(0, 100);
  const queryID = String(input?.queryID || '').slice(0, 128);
  const position = Math.max(1, Math.min(100, Number(input?.position) || 1));
  const userToken = String(input?.userToken || request.headers.get('CF-Ray') || 'anonymous').slice(0, 128);
  const eventType = eventName === 'mm_search_product_clicked' ? 'click' : 'view';
  return {
    eventType,
    eventName,
    index: runtime.algolia?.indexName,
    userToken,
    ...(queryID ? { queryID } : {}),
    ...(objectID ? { objectIDs: [objectID], positions: [position] } : {})
  };
}

async function handleApi(request, env, { runtimeFactory = createRuntime } = {}) {
  const url = new URL(request.url);
  const origin = request.headers.get('Origin');
  if (origin && !allowedOrigin(origin)) {
    return jsonResponse(request, { error: { code: 'ORIGIN_NOT_ALLOWED', message: 'Origem não permitida.' } }, 403);
  }
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders(request) });

  try {
    assertRateLimit(request, env, url);
    const runtime = runtimeFactory(env, url);
    if (url.pathname === '/api/search' && request.method === 'GET') {
      const params = parseSearchParams(url.searchParams);
      const result = await runtime.service.search(params);
      return jsonResponse(request, result, 200, {
        'X-MM-Search-Source': runtime.mode,
        'Server-Timing': `search;dur=${result.processingTimeMS}`
      });
    }
    if (url.pathname === '/api/search/health' && request.method === 'GET') {
      return jsonResponse(request, {
        status: runtime.mode === 'algolia' ? 'ready' : 'fixture',
        provider: runtime.mode,
        commercial: runtime.mode === 'algolia' ? 'magazord-live' : 'fixture-only',
        lastSync: await readSyncStatus(env)
      });
    }
    if (url.pathname === '/api/search/cart-context' && request.method === 'GET') {
      if (!runtime.commercial?.getCartContext) throw configError('Contexto de carrinho indisponível.');
      const sku = String(url.searchParams.get('sku') || '').trim();
      if (!sku || sku.length > 100) {
        const error = new Error('SKU inválido.');
        error.code = 'INVALID_SKU';
        error.status = 400;
        throw error;
      }
      return jsonResponse(request, await runtime.commercial.getCartContext(sku));
    }
    if (url.pathname === '/api/search/events' && request.method === 'POST') {
      const payload = await readJson(request);
      const event = sanitizeEvent(payload, runtime, request);
      if (!event) {
        const error = new Error('Evento de busca inválido.');
        error.code = 'INVALID_EVENT';
        error.status = 400;
        throw error;
      }
      if (runtime.algolia && event.objectIDs?.length) {
        try { await runtime.algolia.sendEvents([event]); } catch {}
      }
      return jsonResponse(request, { accepted: true }, 202);
    }
    if (url.pathname === '/api/search/admin/reindex' && request.method === 'POST') {
      const expected = String(env.SEARCH_ADMIN_TOKEN || '');
      const supplied = request.headers.get('Authorization') || '';
      if (!expected || supplied !== `Bearer ${expected}`) {
        const error = new Error('Não autorizado.');
        error.code = 'UNAUTHORIZED';
        error.status = 401;
        throw error;
      }
      if (!runtime.synchronizer) throw configError('Reindexação indisponível em fixture.');
      const result = await runtime.synchronizer.full();
      await writeSyncStatus(env, {
        ok: true,
        mode: result.mode,
        finishedAt: new Date().toISOString(),
        indexed: result.indexed
      });
      return jsonResponse(request, result);
    }

    if (url.pathname.startsWith('/api/')) {
      return jsonResponse(request, { error: { code: 'NOT_FOUND', message: 'Rota não encontrada.' } }, 404);
    }
  } catch (error) {
    return apiError(request, error);
  }
  return null;
}

async function handleAsset(request, env) {
  if (!env.ASSETS?.fetch) return new Response('Asset binding not configured.', { status: 503 });
  const url = new URL(request.url);
  if (url.pathname === '/madeira-mania.js') {
    const versioned = url.searchParams.has('v');
    url.pathname = '/js/madeira-mania.js';
    const asset = await env.ASSETS.fetch(new Request(url.toString(), request));
    const headers = new Headers(asset.headers);
    if (versioned) {
      headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      headers.delete('Pragma');
      headers.delete('Expires');
    } else {
      headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      headers.set('Pragma', 'no-cache');
    }
    return new Response(asset.body, { status: asset.status, statusText: asset.statusText, headers });
  }
  return env.ASSETS.fetch(request);
}

export async function handleRequest(request, env, ctx, overrides) {
  const url = new URL(request.url);
  if (url.pathname.startsWith('/api/')) {
    return (await handleApi(request, env, overrides)) || jsonResponse(request, { error: { code: 'NOT_FOUND', message: 'Rota não encontrada.' } }, 404);
  }
  return handleAsset(request, env);
}

export default {
  fetch(request, env, ctx) {
    return handleRequest(request, env, ctx);
  },
  async scheduled(controller, env) {
    const runtime = createRuntime(env, new URL('https://madeira-mania-cdn.luancamara.workers.dev'));
    if (!runtime.synchronizer) throw configError('Sincronização indisponível em fixture.');
    try {
      const result = controller.cron === FULL_SYNC_CRON
        ? await runtime.synchronizer.full()
        : controller.cron === RATING_SYNC_CRON
          ? await runtime.synchronizer.ratings()
          : await runtime.synchronizer.incremental({ scheduledTime: controller.scheduledTime });
      const status = {
        ok: true,
        mode: result.mode,
        finishedAt: new Date().toISOString(),
        changed: result.indexed ?? result.updated ?? (result.upserted + result.deleted)
      };
      await writeSyncStatus(env, status);
      console.log(JSON.stringify({ event: 'search_sync_complete', ...status }));
    } catch (error) {
      const status = { ok: false, code: error?.code || 'UNKNOWN', finishedAt: new Date().toISOString() };
      await writeSyncStatus(env, status);
      console.error(JSON.stringify({ event: 'search_sync_failed', ...status }));
      throw error;
    }
  }
};
