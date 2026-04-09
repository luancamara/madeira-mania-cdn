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

# Semver range: @^2 resolve pra última v2.x.y publicada automaticamente.
# Major bump (v3.0.0+) requer atualizar aqui E re-colar loader.html no Magazord.
CDN_VERSION="^2"
CDN_REPO="gh/luancamara/madeira-mania-cdn"
CDN_BASE="https://cdn.jsdelivr.net/${CDN_REPO}@${CDN_VERSION}/dist/js"

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
  echo '/* Anti-flicker checkout: esconde Magazord checkout enquanto bundle não carrega */'
  echo 'html.mm-cart-loading #checkout-main-area>*:not(#mm-layout){visibility:hidden!important;opacity:0!important}'
  echo 'html.mm-cart-loading .header-checkout,html.mm-cart-loading .footer-checkout-info,html.mm-cart-loading .horario-atendimento,html.mm-cart-loading #tickerBar,html.mm-cart-loading #footer-react-app,html.mm-cart-loading .ra-footer{display:none!important}'
  echo 'html.mm-cart-loading #checkout-main-area{position:relative;min-height:480px;background:#F2F2F2}'
  echo 'html.mm-cart-loading #checkout-main-area::before{content:"";position:absolute;top:50%;left:50%;width:32px;height:32px;margin:-16px 0 0 -16px;border:3px solid #E5E7EB;border-top-color:#4B664A;border-radius:50%;animation:mm-load-spin 800ms linear infinite}'
  echo '@keyframes mm-load-spin{to{transform:rotate(360deg)}}'
  echo '/* Anti-flicker footer global: esconde Magazord footer enquanto bundle injeta o nosso */'
  echo 'html.mm-footer-loading #footer-react-app,html.mm-footer-loading .ra-footer,html.mm-footer-loading .footer-04,html.mm-footer-loading .footer-top,html.mm-footer-loading .footer-middle,html.mm-footer-loading .footer-about,html.mm-footer-loading .footer-bottom,html.mm-footer-loading .footer-checkout-info,html.mm-footer-loading .magazord-logo-container{display:none!important}'
  echo '/* DEV mode indicators — 3 estados possíveis:'
  echo '   .mm-dev-pending  = localStorage setado, ainda carregando (cinza)'
  echo '   .mm-dev-mode     = bundle local carregou OK (verde — dev real)'
  echo '   .mm-dev-fallback = bundle local falhou, carregou PROD (laranja — atenção) */'
  echo 'html.mm-dev-pending::before{content:"\231B DEV MODE \2014 carregando localhost\2026";background:#6b7280}'
  echo 'html.mm-dev-mode::before{content:"\26a1 DEV MODE \2014 localhost OK";background:#10b981}'
  echo 'html.mm-dev-fallback::before{content:"\26a0 DEV FALLBACK \2014 localhost offline, usando PROD";background:#f59e0b}'
  echo 'html.mm-dev-pending::before,html.mm-dev-mode::before,html.mm-dev-fallback::before{position:fixed;top:0;left:0;right:0;color:#fff;font:bold 11px/20px monospace;text-align:center;z-index:999999;padding:2px 8px}'
  echo 'html.mm-dev-pending body,html.mm-dev-mode body,html.mm-dev-fallback body{margin-top:20px !important}'
  echo '</style>'
  echo '<script>'
  # Cobre qualquer /checkout/* exceto /done (que é a única etapa que não reescrevemos).
  # Mais robusto que listar explicitamente (cart|identify|onepage) — pega /payment,
  # rotas futuras, e variações. /done fica de fora pro Magazord exibir a confirmação nativa.
  echo '(function(){var p=location.pathname;if(/^\/checkout\/(?!done)/.test(p)){document.documentElement.classList.add("mm-cart-loading")}document.documentElement.classList.add("mm-footer-loading")})();'
  echo '</script>'
  echo ''
  cat "$DIST/loaders/schema-organization.html"
  echo ''
  # Switchable loader: usa bundle local (localStorage.mm_dev_url) se setado, senão jsDelivr.
  # VERSION fica isolado no topo pra facilitar edit manual se precisar sem rebuild.
  cat <<LOADER_EOF
<script>
(function(){
  // ===== Madeira Mania CDN loader =====
  // Pra trocar a versão servida sem rebuild, edita só a linha abaixo.
  // Aceita semver range (@^2), tag exata (@v2.1.3), ou branch (@main).
  var VERSION = '$CDN_VERSION';
  var REPO    = '$CDN_REPO';

  var PROD = 'https://cdn.jsdelivr.net/' + REPO + '@' + VERSION + '/dist/js/madeira-mania.js';
  var devUrl;
  try { devUrl = localStorage.getItem('mm_dev_url'); } catch(e) {}
  var doc = document.documentElement;
  var s = document.createElement('script');
  s.src = devUrl || PROD;
  s.async = true;

  if (devUrl) {
    // Estado 1: tentativa inicial — pending (cinza) até sabermos se deu certo
    doc.classList.add('mm-dev-pending');

    s.onload = function(){
      // Estado 2: bundle local carregou OK — dev real (verde)
      doc.classList.remove('mm-dev-pending');
      doc.classList.add('mm-dev-mode');
      console.info('[mm-dev] bundle local OK:', devUrl);
    };

    s.onerror = function(){
      // Estado 3: bundle local falhou — fallback PROD (laranja)
      doc.classList.remove('mm-dev-pending');
      doc.classList.add('mm-dev-fallback');
      console.warn('[mm-dev] localhost offline, usando PROD:', PROD);
      var f = document.createElement('script');
      f.src = PROD; f.async = true;
      document.head.appendChild(f);
    };
  }

  document.head.appendChild(s);
})();
</script>
LOADER_EOF
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
