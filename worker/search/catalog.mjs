import { COMMERCIAL_FIELD_NAMES } from './constants.mjs';
import {
  normalizeFieldName,
  normalizeText,
  toArray,
  uniqueStrings,
  unixTimestamp
} from './utils.mjs';

function valueFromCharacteristic(characteristic) {
  if (!characteristic || typeof characteristic !== 'object') return [];
  return uniqueStrings([
    characteristic.procar_valor,
    characteristic.valor,
    characteristic.value,
    characteristic.carlis_valor,
    characteristic.values
  ]);
}

export function extractCharacteristics(item) {
  const output = [];
  for (const characteristic of toArray(item?.caracteristicas || item?.characteristics)) {
    if (!characteristic || typeof characteristic !== 'object') continue;
    const name = String(characteristic.nome || characteristic.name || '').trim();
    const values = valueFromCharacteristic(characteristic);
    if (!name || !values.length) continue;
    output.push({ name, values });
  }
  return output;
}

export function extractCategories(item, parent = {}) {
  const raw = item?.categoria ?? item?.categorias ?? parent?.categoria ?? parent?.categorias ?? [];
  const values = [];
  for (const category of toArray(raw)) {
    if (typeof category === 'string') {
      values.push(...category.split(','));
    } else if (category && typeof category === 'object') {
      values.push(category.nome || category.name || category.titulo || '');
    }
  }
  return uniqueStrings(values).filter((value) => !/^\d+$/.test(value));
}

export function extractImage(item) {
  const direct = item?.midia_url || item?.image || item?.imagem || item?.imageUrl;
  if (direct) return String(direct);
  const media = toArray(item?.midias || item?.media)[0];
  if (!media) return '';
  if (typeof media === 'string') return media;
  const path = String(media.url || media.path || media.midia_path || '').trim();
  const filename = String(media.arquivo_nome || media.midia_arquivo_nome || '').trim();
  if (!path) return '';
  if (!filename || path.endsWith(filename)) return path;
  return `${path.replace(/\/$/, '')}/${filename.replace(/^\//, '')}`;
}

export function extractProductUrl(item) {
  const raw = String(item?.link || item?.url || item?.slug || '').trim();
  if (!raw) return '';
  if (/^https?:\/\//i.test(raw) || raw.startsWith('/')) return raw;
  return `/${raw}`;
}

export function extractDerivationSkus(product) {
  const skus = [];
  for (const derivation of toArray(product?.derivacoes || product?.derivations)) {
    const sku = derivation?.codigo || derivation?.sku || derivation?.derivacaoCodigo;
    if (sku) skus.push(String(sku));
  }
  if (!skus.length && (product?.codigo || product?.sku)) {
    skus.push(String(product.codigo || product.sku));
  }
  return uniqueStrings(skus);
}

export function mapMagazordProductToRecord(item, parent = {}) {
  const sku = String(
    item?.codigo || item?.sku || item?.derivacaoCodigo || parent?.codigo || parent?.sku || ''
  ).trim();
  if (!sku) throw new Error('Produto sem SKU não pode ser indexado.');

  const characteristics = extractCharacteristics(item);
  const material = [];
  let requiresAssembly = '';
  const attributes = [];
  for (const characteristic of characteristics) {
    attributes.push(`${characteristic.name}: ${characteristic.values.join(', ')}`);
    const normalizedName = normalizeText(characteristic.name);
    if (normalizedName.includes('material')) material.push(...characteristic.values);
    if (normalizedName.includes('requer montagem') || normalizedName === 'montagem') {
      requiresAssembly = characteristic.values[0] || '';
    }
  }

  const name = String(
    item?.titulo || item?.nome || item?.name || parent?.nome || parent?.name || sku
  ).trim();
  const ratingAverageRaw = item?.ratingAverage ?? item?.nota ?? parent?.ratingAverage ?? parent?.nota;
  const reviewCountRaw = item?.reviewCount ?? item?.avaliacoes ?? parent?.reviewCount ?? parent?.avaliacoes;
  const ratingAverage = Number(ratingAverageRaw);
  const reviewCount = Number(reviewCountRaw);
  const brandValue = item?.marca ?? item?.brand ?? parent?.marca ?? parent?.brand ?? '';
  const brand = typeof brandValue === 'object'
    ? String(brandValue.nome || brandValue.name || '')
    : (/^\d+$/.test(String(brandValue)) ? '' : String(brandValue || ''));

  const launchedAt = item?.dataLancamento || item?.launchedAt || parent?.dataLancamento || '';
  const updatedAt = item?.dataAtualizacao || item?.updatedAt || parent?.dataAtualizacao || '';
  const record = {
    objectID: sku,
    sku,
    name,
    nameSort: normalizeText(name),
    brand: brand.trim(),
    categories: extractCategories(item, parent),
    material: uniqueStrings(material),
    requiresAssembly: requiresAssembly.trim(),
    keywords: uniqueStrings([
      item?.palavraChave,
      item?.keywords,
      item?.modelo,
      item?.model,
      parent?.palavraChave,
      parent?.modelo
    ]),
    attributes: uniqueStrings(attributes),
    url: extractProductUrl(item),
    image: extractImage(item),
    productId: Number(item?.produto_id ?? item?.produtoId ?? parent?.produto_id ?? parent?.produtoId) || null,
    derivationId: Number(item?.derivacao_id ?? item?.derivacaoId ?? parent?.derivacao_id ?? parent?.derivacaoId) || null,
    launchedAt: launchedAt ? String(launchedAt) : '',
    launchedAtTimestamp: unixTimestamp(launchedAt),
    updatedAt: updatedAt ? String(updatedAt) : '',
    active: item?.ativo !== false && parent?.ativo !== false
  };

  if (ratingAverageRaw != null || reviewCountRaw != null) {
    record.ratingAverage = Number.isFinite(ratingAverage) && ratingAverage > 0
      ? Math.round(ratingAverage * 100) / 100
      : 0;
    record.reviewCount = Number.isFinite(reviewCount) && reviewCount > 0 ? Math.floor(reviewCount) : 0;
  }

  assertSearchRecordSafe(record);
  return record;
}

export function assertSearchRecordSafe(record) {
  const visit = (value, path) => {
    if (!value || typeof value !== 'object') return;
    for (const [key, child] of Object.entries(value)) {
      const normalized = normalizeFieldName(key);
      if (COMMERCIAL_FIELD_NAMES.has(normalized)) {
        const error = new Error(`Campo comercial proibido no índice: ${path}${key}`);
        error.code = 'COMMERCIAL_FIELD_IN_INDEX';
        throw error;
      }
      visit(child, `${path}${key}.`);
    }
  };
  visit(record, 'record.');
  return true;
}
