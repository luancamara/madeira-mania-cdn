#!/bin/bash
# =============================================
# Build Consolidado - Madeira Mania
# Gera 3 bundles JS remotos + 3 loaders para Magazord
#
# SAÍDA:
#   dist/js/global.js      → JS remoto (todas as páginas)
#   dist/js/pdp.js         → JS remoto (páginas de produto)
#   dist/js/checkout.js    → JS remoto (checkout)
#   dist/loaders/global-loader.html   → Colar no Magazord (head, todas páginas)
#   dist/loaders/pdp-loader.html      → Colar no Magazord (head, template produto)
#   dist/loaders/checkout-loader.html → Colar no Magazord (body, checkout)
#
# JS remoto via jsDelivr ou S3:
#   https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@main/dist/js/global.js
#   https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@main/dist/js/pdp.js
#   https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@main/dist/js/checkout.js
# =============================================

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SRC="$SCRIPT_DIR/src"
DIST="$SCRIPT_DIR/dist"
JS_DIR="$DIST/js"
LOADER_DIR="$DIST/loaders"

CDN_BASE="https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@main/dist/js"

mkdir -p "$JS_DIR" "$LOADER_DIR"

echo "=== Build Consolidado - Madeira Mania ==="
echo ""

# ---- Helper: combinar JS em IIFE ----
bundle_js() {
  local output="$1"
  shift
  {
    echo "(function() {"
    echo "  'use strict';"
    echo ""
    for js_file in "$@"; do
      if [ ! -f "$js_file" ]; then
        echo "ERRO: $js_file não encontrado" >&2
        exit 1
      fi
      echo "  /* === $(basename "$js_file") === */"
      sed 's/^/  /' "$js_file"
      echo ""
    done
    echo "})();"
  } > "$output"
  local size=$(wc -c < "$output")
  echo "  $output ($(echo "$size" | xargs) bytes)"
}

# ---- Helper: CSS com injeção via JS ----
css_to_js_injector() {
  local css_file="$1"
  local style_id="$2"
  local css_content
  css_content=$(cat "$css_file" | sed "s/'/\\\\'/g" | tr '\n' ' ' | sed 's/  */ /g')
  echo "/* Inject CSS: $(basename "$css_file") */"
  echo "(function() {"
  echo "  if (document.getElementById('$style_id')) return;"
  echo "  var s = document.createElement('style');"
  echo "  s.id = '$style_id';"
  echo "  s.textContent = '$css_content';"
  echo "  document.head.appendChild(s);"
  echo "})();"
}

# ==================================================
# 1. GLOBAL JS (todas as páginas)
#    = tracking.js + global.js + schema-organization.js
# ==================================================
echo "[1/3] Global JS:"
bundle_js "$JS_DIR/global.js" \
  "$SRC/tracking.js" \
  "$SRC/global.js" \
  "$SRC/schema-organization.js"

# ==================================================
# 2. PDP JS (páginas de produto)
#    = produto.js + schema-product.js + schema-breadcrumb.js
#      + faq-universal.js + og-tags-product.js
# ==================================================
echo "[2/3] PDP JS:"
bundle_js "$JS_DIR/pdp.js" \
  "$SRC/produto.js" \
  "$SRC/schema-product.js" \
  "$SRC/schema-breadcrumb.js" \
  "$SRC/faq-universal.js" \
  "$SRC/og-tags-product.js"

# ==================================================
# 3. CHECKOUT JS (checkout)
#    = checkout-cro.css (injetado) + checkout-cro.js
# ==================================================
echo "[3/3] Checkout JS:"
{
  echo "(function() {"
  echo "  'use strict';"
  echo ""
  # Injetar CSS via JS
  css_to_js_injector "$SRC/checkout-cro.css" "mm-checkout-cro-css" | sed 's/^/  /'
  echo ""
  echo "  /* === checkout-cro.js === */"
  sed 's/^/  /' "$SRC/checkout-cro.js"
  echo ""
  echo "})();"
} > "$JS_DIR/checkout.js"
echo "  $JS_DIR/checkout.js ($(wc -c < "$JS_DIR/checkout.js" | xargs) bytes)"

# ==================================================
# LOADERS (para colar no Magazord)
# ==================================================
echo ""
echo "Gerando loaders..."

# ---- Global Loader (head, todas as páginas) ----
{
  # CSS inline (anti-flicker não necessário para global)
  echo "<style>"
  cat "$SRC/global.css"
  echo "</style>"
  echo ""
  # Schema Organization estático (JSON-LD puro, sem JS)
  cat "$DIST/head/schema-organization.html"
  echo ""
  # JS remoto
  echo "<script src=\"$CDN_BASE/global.js\" async></script>"
} > "$LOADER_DIR/global-loader.html"
echo "  $LOADER_DIR/global-loader.html ($(wc -c < "$LOADER_DIR/global-loader.html" | xargs) bytes)"

# ---- PDP Loader (head, template produto) ----
{
  # CSS inline + anti-flicker
  echo "<style>"
  cat "$SRC/produto.css"
  echo ""
  echo "/* Anti-flicker: esconder elementos que o JS vai modificar */"
  echo "#produto-react-app .salvar-favoritos,"
  echo "#produto-react-app .compartilhar-produto,"
  echo "#produto-react-app .exibe-botao-whatsapp {"
  echo "  visibility: hidden;"
  echo "}"
  echo ".mm-ready #produto-react-app .salvar-favoritos,"
  echo ".mm-ready #produto-react-app .compartilhar-produto,"
  echo ".mm-ready #produto-react-app .exibe-botao-whatsapp {"
  echo "  visibility: visible;"
  echo "}"
  echo "</style>"
  echo ""
  # JS remoto
  echo "<script src=\"$CDN_BASE/pdp.js\" async></script>"
} > "$LOADER_DIR/pdp-loader.html"
echo "  $LOADER_DIR/pdp-loader.html ($(wc -c < "$LOADER_DIR/pdp-loader.html" | xargs) bytes)"

# ---- Checkout Loader (body, checkout) ----
{
  echo "<script src=\"$CDN_BASE/checkout.js\" async></script>"
} > "$LOADER_DIR/checkout-loader.html"
echo "  $LOADER_DIR/checkout-loader.html ($(wc -c < "$LOADER_DIR/checkout-loader.html" | xargs) bytes)"

# Build antigo (retrocompat) — apenas se existir
if [ -f "$SCRIPT_DIR/build.sh" ]; then
  echo ""
  echo "Mantendo builds individuais (retrocompat)..."
  bash "$SCRIPT_DIR/build.sh" 2>&1 | grep -E "dist/" || true
fi

echo ""
echo "======================================"
echo "Build consolidado concluído!"
echo ""
echo "DEPLOY:"
echo "  1. Commit e push para GitHub (jsDelivr atualiza automaticamente):"
echo "     git add -A && git commit -m 'build: atualizar bundles' && git push"
echo ""
echo "  2. No Magazord, SUBSTITUIR todos os CAs por 3 loaders:"
echo ""
echo "     GLOBAL (head, todas páginas, todos dispositivos):"
echo "       → Colar conteúdo de dist/loaders/global-loader.html"
echo "       → DESATIVAR: CA-3, CA-8, CA-12, CA-24, CA-17/tracking"
echo ""
echo "     PDP (head, template produto-11, mobile):"
echo "       → Colar conteúdo de dist/loaders/pdp-loader.html"
echo "       → DESATIVAR: CA-6, CA-9, CA-22, CA-25"
echo ""
echo "     CHECKOUT (body, checkout, todos dispositivos):"
echo "       → Colar conteúdo de dist/loaders/checkout-loader.html"
echo ""
echo "     MANTER INALTERADOS: CA-5, CA-10/14, CA-18, CA-20"
echo "======================================"
