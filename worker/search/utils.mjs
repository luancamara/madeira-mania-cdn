import {
  DEFAULT_PAGE_SIZE,
  MAX_PAGE_SIZE,
  MAX_QUERY_LENGTH,
  MIN_QUERY_LENGTH,
  QUERY_ALIASES,
  QUERY_TOKEN_ALIASES,
  SEARCH_SORTS
} from './constants.mjs';

export function normalizeText(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

export function normalizeFieldName(value) {
  return normalizeText(value).replace(/\s+/g, '');
}

export function resolveInterpretedQuery(query, exact = false) {
  const normalized = normalizeText(query);
  if (exact) return normalized;
  const aliased = QUERY_ALIASES[normalized] || normalized;
  return aliased
    .split(' ')
    .map((token) => QUERY_TOKEN_ALIASES[token] || token)
    .join(' ');
}

export function parseInteger(value, fallback, min, max) {
  const parsed = Number.parseInt(String(value ?? ''), 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(min, Math.min(max, parsed));
}

export function parseSearchParams(searchParams) {
  const query = String(searchParams.get('q') || '').trim().slice(0, MAX_QUERY_LENGTH + 1);
  if (query.length < MIN_QUERY_LENGTH) {
    const error = new Error(`A busca deve ter pelo menos ${MIN_QUERY_LENGTH} caracteres.`);
    error.code = 'QUERY_TOO_SHORT';
    error.status = 400;
    throw error;
  }
  if (query.length > MAX_QUERY_LENGTH) {
    const error = new Error(`A busca deve ter no máximo ${MAX_QUERY_LENGTH} caracteres.`);
    error.code = 'QUERY_TOO_LONG';
    error.status = 400;
    throw error;
  }

  const exact = searchParams.get('exact') === '1';
  return {
    query,
    interpretedQuery: resolveInterpretedQuery(query, exact),
    exact,
    sort: Object.hasOwn(SEARCH_SORTS, searchParams.get('sort') || '')
      ? searchParams.get('sort')
      : 'relevance',
    page: parseInteger(searchParams.get('page'), 0, 0, 83),
    limit: parseInteger(searchParams.get('limit'), DEFAULT_PAGE_SIZE, 1, MAX_PAGE_SIZE),
    filters: {
      categories: parseMultiValue(searchParams, ['category', 'categories']),
      brand: parseMultiValue(searchParams, ['brand']),
      material: parseMultiValue(searchParams, ['material']),
      requiresAssembly: parseMultiValue(searchParams, ['assembly', 'requiresAssembly'])
    }
  };
}

export function parseMultiValue(searchParams, names, maxValues = 12) {
  const values = [];
  for (const name of names) {
    for (const raw of searchParams.getAll(name)) {
      for (const value of String(raw).split(',')) {
        const cleaned = value.trim().slice(0, 80);
        if (cleaned && !values.includes(cleaned)) values.push(cleaned);
        if (values.length >= maxValues) return values;
      }
    }
  }
  return values;
}

export function escapeAlgoliaFilterValue(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

export function buildAlgoliaFacetFilters(filters = {}) {
  const groups = [];
  for (const [attribute, values] of Object.entries(filters)) {
    if (!Array.isArray(values) || values.length === 0) continue;
    const group = values.map((value) => `${attribute}:"${escapeAlgoliaFilterValue(value)}"`);
    groups.push(group.length === 1 ? group[0] : group);
  }
  return groups;
}

export function toArray(value) {
  if (value == null || value === '') return [];
  return Array.isArray(value) ? value : [value];
}

export function uniqueStrings(values) {
  const seen = new Set();
  const output = [];
  for (const value of toArray(values).flatMap(toArray)) {
    const string = String(value ?? '').trim();
    const key = normalizeText(string);
    if (!string || !key || seen.has(key)) continue;
    seen.add(key);
    output.push(string);
  }
  return output;
}

export async function mapWithConcurrency(items, concurrency, mapper) {
  const list = Array.from(items || []);
  const results = new Array(list.length);
  let cursor = 0;
  const workerCount = Math.max(1, Math.min(concurrency, list.length || 1));

  await Promise.all(Array.from({ length: workerCount }, async () => {
    while (cursor < list.length) {
      const index = cursor++;
      results[index] = await mapper(list[index], index);
    }
  }));
  return results;
}

export function damerauLevenshtein(left, right) {
  const a = normalizeText(left);
  const b = normalizeText(right);
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const matrix = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
      if (
        i > 1 && j > 1 &&
        a[i - 1] === b[j - 2] &&
        a[i - 2] === b[j - 1]
      ) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i - 2][j - 2] + cost);
      }
    }
  }
  return matrix[a.length][b.length];
}

export function unixTimestamp(value) {
  const timestamp = Date.parse(value || '');
  return Number.isFinite(timestamp) ? Math.floor(timestamp / 1000) : 0;
}

export function sanitizeError(error, fallbackCode = 'INTERNAL_ERROR') {
  return {
    code: error?.code || fallbackCode,
    message: error?.safeMessage || error?.message || 'Erro inesperado.'
  };
}
