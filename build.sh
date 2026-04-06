#!/bin/bash
# =============================================
# Build Único - Madeira Mania CDN
# Gera 1 bundle JS + 1 loader para Magazord
#
# SAÍDA:
#   dist/js/madeira-mania.js     → Bundle único (todas páginas)
#   dist/loaders/loader.html     → Colar no Magazord (head, todas páginas)
# =============================================

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SRC="$SCRIPT_DIR/src"
DIST="$SCRIPT_DIR/dist"

mkdir -p "$DIST/js" "$DIST/loaders"

# IMPORTANTE: Atualizar a versão aqui a cada deploy significativo
CDN_VERSION="v1.0"
CDN_BASE="https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@${CDN_VERSION}/dist/js"

echo "=== Build Madeira Mania CDN ==="
echo ""

# ---- Helper: CSS → JS injector (usa node para escape seguro) ----
css_to_js() {
  local css_file="$1"
  local style_id="$2"
  if [ ! -f "$css_file" ]; then return; fi
  node -e "
    var fs = require('fs');
    var css = fs.readFileSync('$css_file', 'utf8');
    var escaped = JSON.stringify(css);
    console.log('/* Inject CSS: ' + require('path').basename('$css_file') + ' */');
    console.log('(function(){if(document.getElementById(\"$style_id\"))return;var s=document.createElement(\"style\");s.id=\"$style_id\";s.textContent=' + escaped + ';document.head.appendChild(s)})();');
  "
}

# ---- Helper: HTML → JS injector (usa node para escape seguro) ----
html_to_js() {
  local html_file="$1"
  if [ ! -f "$html_file" ]; then return; fi
  node -e "
    var fs = require('fs');
    var html = fs.readFileSync('$html_file', 'utf8');
    var escaped = JSON.stringify(html);
    console.log('/* Inject HTML: ' + require('path').basename('$html_file') + ' */');
    console.log('(function(){if(document.getElementById(\"tickerBar\"))return;var d=document.createElement(\"div\");d.innerHTML=' + escaped + ';var el=d.firstElementChild;document.body.insertBefore(el,document.body.firstChild)})();');
  "
}

echo "Gerando bundle único..."
{
  echo "(function() {"
  echo "  'use strict';"
  echo ""

  # --- 1. CSS injections (primeiro, antes de qualquer DOM manipulation) ---
  echo "  /* ============================================="
  echo "     SEÇÃO 1: CSS INJECTION"
  echo "     ============================================= */"
  echo ""
  css_to_js "$SRC/global.css" "mm-global-css" | sed 's/^/  /'
  echo ""
  css_to_js "$SRC/produto.css" "mm-produto-css" | sed 's/^/  /'
  echo ""
  css_to_js "$SRC/variacoes.css" "mm-variacoes-css" | sed 's/^/  /'
  echo ""
  css_to_js "$SRC/cart-sheet.css" "mm-cart-sheet-css" | sed 's/^/  /'
  echo ""
  css_to_js "$SRC/checkout-cro.css" "mm-checkout-cro-css" | sed 's/^/  /'
  echo ""
  css_to_js "$SRC/ticker.css" "mm-ticker-css" | sed 's/^/  /'
  echo ""

  # --- 2. HTML injections (ticker bar) ---
  echo "  /* ============================================="
  echo "     SEÇÃO 2: HTML INJECTION"
  echo "     ============================================= */"
  echo ""
  html_to_js "$SRC/ticker.html" "after-header" | sed 's/^/  /'
  echo ""

  # --- 3. External script loaders ---
  echo "  /* ============================================="
  echo "     SEÇÃO 3: EXTERNAL SCRIPT LOADERS"
  echo "     ============================================= */"
  echo ""
  echo "  /* === contentsquare-loader.js === */"
  sed 's/^/  /' "$SRC/contentsquare-loader.js"
  echo ""

  # --- 4. Core JS (all pages) ---
  echo "  /* ============================================="
  echo "     SEÇÃO 4: GLOBAL JS (todas as páginas)"
  echo "     ============================================= */"
  echo ""
  echo "  /* === tracking.js === */"
  sed 's/^/  /' "$SRC/tracking.js"
  echo ""
  echo "  /* === global.js === */"
  sed 's/^/  /' "$SRC/global.js"
  echo ""
  echo "  /* === schema-organization.js === */"
  sed 's/^/  /' "$SRC/schema-organization.js"
  echo ""
  echo "  /* === fb-purchase.js === */"
  sed 's/^/  /' "$SRC/fb-purchase.js"
  echo ""

  # --- 5. PDP JS (product pages - guarded by #produto-react-app check) ---
  echo "  /* ============================================="
  echo "     SEÇÃO 5: PDP JS (páginas de produto)"
  echo "     ============================================= */"
  echo ""
  echo "  /* === produto.js === */"
  sed 's/^/  /' "$SRC/produto.js"
  echo ""
  echo "  /* === schema-product.js === */"
  sed 's/^/  /' "$SRC/schema-product.js"
  echo ""
  echo "  /* === schema-breadcrumb.js === */"
  sed 's/^/  /' "$SRC/schema-breadcrumb.js"
  echo ""
  echo "  /* === faq-universal.js === */"
  sed 's/^/  /' "$SRC/faq-universal.js"
  echo ""
  echo "  /* === og-tags-product.js === */"
  sed 's/^/  /' "$SRC/og-tags-product.js"
  echo ""
  echo "  /* === variacoes.js === */"
  sed 's/^/  /' "$SRC/variacoes.js"
  echo ""

  # --- 6. Cart/Checkout JS ---
  echo "  /* ============================================="
  echo "     SEÇÃO 6: CART + CHECKOUT JS"
  echo "     ============================================= */"
  echo ""
  echo "  /* === cart-sheet.js === */"
  sed 's/^/  /' "$SRC/cart-sheet.js"
  echo ""
  echo "  /* === checkout-cro.js === */"
  sed 's/^/  /' "$SRC/checkout-cro.js"
  echo ""

  echo "})();"
} > "$DIST/js/madeira-mania.js"

SIZE=$(wc -c < "$DIST/js/madeira-mania.js")
echo "  dist/js/madeira-mania.js (${SIZE} bytes)"

# ---- Loader (para Magazord head) ----
echo ""
echo "Gerando loader..."
{
  echo '<style>'
  echo '/* Anti-flicker: esconder elementos que o JS modifica */'
  echo '#produto-react-app .salvar-favoritos,'
  echo '#produto-react-app .compartilhar-produto,'
  echo '#produto-react-app .exibe-botao-whatsapp { visibility: hidden; }'
  echo '.mm-ready #produto-react-app .salvar-favoritos,'
  echo '.mm-ready #produto-react-app .compartilhar-produto,'
  echo '.mm-ready #produto-react-app .exibe-botao-whatsapp { visibility: visible; }'
  echo '/* Esconder WhatsApp original (substituído pelo nosso) */'
  echo '#popup-msg-whats { display: none !important; }'
  echo '</style>'
  echo ''
  cat "$DIST/loaders/schema-organization.html"
  echo ''
  echo "<script src=\"$CDN_BASE/madeira-mania.js\" async></script>"
} > "$DIST/loaders/loader.html"

LSIZE=$(wc -c < "$DIST/loaders/loader.html")
echo "  dist/loaders/loader.html (${LSIZE} bytes)"

echo ""
echo "======================================"
echo "Build concluído!"
echo ""
echo "DEPLOY:"
echo "  1. git add -A && git commit -m 'build' && git push"
echo "  2. jsDelivr atualiza automaticamente"
echo ""
echo "  3. No Magazord: 1 ÚNICO conteúdo adicional (head, todas páginas):"
echo "     → Colar conteúdo de dist/loaders/loader.html"
echo "     → DESATIVAR TODOS OS CAs: 3, 5, 6, 8, 9, 10, 12, 14, 18, 20, 22, 24, 25"
echo "======================================"
