import { readFile } from 'node:fs/promises';

function parseDotEnv(source) {
  const values = {};
  for (const line of String(source || '').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const separator = trimmed.indexOf('=');
    if (separator < 1) continue;
    const key = trimmed.slice(0, separator).trim();
    let value = trimmed.slice(separator + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    values[key] = value;
  }
  return values;
}

async function localVars() {
  try { return parseDotEnv(await readFile(new URL('../.dev.vars', import.meta.url), 'utf8')); }
  catch (error) {
    if (error?.code === 'ENOENT') return {};
    throw error;
  }
}

const vars = await localVars();
const token = String(process.env.SEARCH_ADMIN_TOKEN || vars.SEARCH_ADMIN_TOKEN || '').trim();
const origin = String(process.env.MM_SEARCH_ORIGIN || 'http://127.0.0.1:8080').replace(/\/$/, '');

if (!token) {
  console.error('SEARCH_ADMIN_TOKEN não encontrado. Preencha .dev.vars sem versionar o arquivo.');
  process.exit(1);
}

console.log(`Iniciando reindexação completa em ${origin}…`);
const response = await fetch(`${origin}/api/search/admin/reindex`, {
  method: 'POST',
  headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' }
});
const payload = await response.json().catch(() => ({}));
if (!response.ok) {
  console.error(payload?.error?.message || `Reindexação falhou com HTTP ${response.status}.`);
  process.exit(1);
}

console.log(`Reindexação concluída: ${payload.indexed || 0} registros indexados.`);
if (payload.failed) console.log(`Registros ignorados por falha: ${payload.failed}.`);
if (payload.reviews) console.log(`Avaliações: ${payload.reviews.status}.`);
