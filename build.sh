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

# === Entrega do bundle (multi-CDN) ===
# PRIMÁRIO: Cloudflare Pages — host dedicado, deploy automático no push do repo,
#   sem rate-limit de "mirror sob demanda" (o que derrubou o jsDelivr: 503 no
#   repo inteiro por excesso de cache-miss). Serve o dist/ do repo: o bundle fica
#   em https://<CDN_PAGES_HOST>/js/madeira-mania.js. ?v=CDN_VERSION = cache-bust.
# FALLBACK: jsDelivr @tag — infra independente, carregado SÓ se o CF Pages falhar
#   (loader tem onerror em cadeia). Manter a tag por deploy dá paridade ao fallback.
#   NUNCA purgar a tag (purge dá erros) — sempre criar uma TAG NOVA por deploy.
CDN_PAGES_HOST="madeira-mania-cdn.luancamara.workers.dev"
CDN_VERSION="v2.0.34"
CDN_REPO="gh/luancamara/madeira-mania-cdn"

# Bundle cru vai pra um temp; depois é minificado (esbuild) pro path final.
RAW_BUNDLE="$(mktemp /tmp/mm-bundle.raw.XXXXXX.js)"

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
  css_to_js "$SRC/pedidos.css" "mm-pedidos-css" | sed 's/^/  /'
  echo ""
  css_to_js "$SRC/ticker.css" "mm-ticker-css" | sed 's/^/  /'
  echo ""
  css_to_js "$SRC/header.css" "mm-header-css" | sed 's/^/  /'
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
  # Contentsquare (REATIVADO 2026-06-19) — session replay puro, NÃO duplica
  # conversão. Foi desligado por engano junto do tracking.js em c34fae7.
  # Já tem guard próprio: pula /checkout/* (bug de recursão hkINP) e opt-out.
  echo "  /* === contentsquare-loader.js === */"
  sed 's/^/  /' "$SRC/contentsquare-loader.js"
  echo ""

  # Microsoft Clarity (REATIVADO 2026-06-19) — heatmap/session-replay puro,
  # NÃO empurra eventos pro dataLayer/GA4/Ads/Meta, então NÃO duplica conversão.
  # Saiu por engano junto do tracking.js em c34fae7. Agora isolado e idle-loaded.
  echo "  /* === clarity-loader.js === */"
  sed 's/^/  /' "$SRC/clarity-loader.js"
  echo ""

  # --- 4. Core JS (all pages) ---
  echo "  /* ============================================="
  echo "     SEÇÃO 4: GLOBAL JS (todas as páginas)"
  echo "     ============================================= */"
  echo ""
  # TEMPORARIAMENTE DESATIVADO — tracking.js despacha gtag/fbq/dataLayer,
  # duplicando eventos que o Magazord já dispara nativamente.
  # echo "  /* === tracking.js === */"
  # sed 's/^/  /' "$SRC/tracking.js"
  # echo ""
  echo "  /* === global.js === */"
  sed 's/^/  /' "$SRC/global.js"
  echo ""
  echo "  /* === header.js === */"
  sed 's/^/  /' "$SRC/header.js"
  echo ""
  echo "  /* === schema-organization.js === */"
  sed 's/^/  /' "$SRC/schema-organization.js"
  echo ""
  # TEMPORARIAMENTE DESATIVADO — fb-purchase.js dispara fbq('track','Purchase')
  # duplicando o evento que o Magazord já dispara em /checkout/done.
  # echo "  /* === fb-purchase.js === */"
  # sed 's/^/  /' "$SRC/fb-purchase.js"
  # echo ""

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

  # --- 7. Pedidos (consulta + resultado) ---
  echo "  /* ============================================="
  echo "     SEÇÃO 7: PEDIDOS (consultar pedido + resultado)"
  echo "     ============================================= */"
  echo ""
  echo "  /* === pedidos.js === */"
  sed 's/^/  /' "$SRC/pedidos.js"
  echo ""

  echo "})();"
} > "$RAW_BUNDLE"

# ---- Minify (esbuild) ----
# Default ON quando o esbuild estiver disponível. Pula (mantém cru) se:
#   - MM_NO_MINIFY=1 (dev loop usa isso pra debugar legível), ou
#   - esbuild não instalado (rode `npm install` — node_modules é gitignored).
# Falha do esbuild NUNCA quebra o build: cai pro bundle cru.
OUT="$DIST/js/madeira-mania.js"
RAWSIZE=$(wc -c < "$RAW_BUNDLE")
ESBUILD=""
if [ -x "$SCRIPT_DIR/node_modules/.bin/esbuild" ]; then ESBUILD="$SCRIPT_DIR/node_modules/.bin/esbuild";
elif command -v esbuild >/dev/null 2>&1; then ESBUILD="esbuild"; fi

if [ "$MM_NO_MINIFY" = "1" ]; then
  mv "$RAW_BUNDLE" "$OUT"
  echo "  minify: PULADO (MM_NO_MINIFY=1) — bundle não-minificado p/ dev"
elif [ -n "$ESBUILD" ]; then
  if "$ESBUILD" "$RAW_BUNDLE" --minify --legal-comments=none --charset=utf8 --outfile="$OUT.tmp" 2>/tmp/mm-esbuild.err; then
    mv "$OUT.tmp" "$OUT"; rm -f "$RAW_BUNDLE"
    SIZE=$(wc -c < "$OUT")
    PCT=$(node -e "console.log(((1-$SIZE/$RAWSIZE)*100).toFixed(1))" 2>/dev/null || echo "?")
    echo "  minify: OK (esbuild) — ${SIZE} bytes (de ${RAWSIZE} cru, -${PCT}%)"
  else
    echo "  minify: esbuild FALHOU ($(head -1 /tmp/mm-esbuild.err)) — usando cru"
    mv "$RAW_BUNDLE" "$OUT"; rm -f "$OUT.tmp"
  fi
else
  mv "$RAW_BUNDLE" "$OUT"
  echo "  minify: PULADO (esbuild não encontrado — rode 'npm install') — bundle não-minificado"
fi

SIZE=$(wc -c < "$OUT")
echo "  dist/js/madeira-mania.js (${SIZE} bytes)"

# ---- Loader (para Magazord head) ----
echo ""
echo "Gerando loader..."
{
  # ---- Open Graph: dimensões da imagem (fix preview WhatsApp Web/Desktop) ----
  # O Magazord renderiza og:image (?ims=400x400) nas PDPs SEM og:image:width/height.
  # WhatsApp Web/Desktop só gera a miniatura do preview quando as dimensões são
  # conhecidas (o app mobile detecta sozinho; o Web/Desktop não) -> preview some
  # no desktop. Estas tags estáticas (server-side via este CA) suprem as dimensões.
  # ims=400x400 entrega SEMPRE 400x400 exato (crop quadrado), constante em todos
  # os produtos (verificado: rack/buffet/camarim). og:image só existe em PDPs; nas
  # demais páginas (home/categoria/marca/busca) estas tags ficam órfãs e o parser
  # as ignora (sem efeito colateral). O CA é injetado no <head> DEPOIS da og:image
  # do Magazord, então a associação da propriedade estruturada é válida (OGP spec).
  # Obs: substitui a ideia de "og-tags-static.html" citada em src/og-tags-product.js
  # (arquivo que nunca existiu); tags OG via JS não funcionam p/ crawlers sociais.
  echo '<meta property="og:image:width" content="400" />'
  echo '<meta property="og:image:height" content="400" />'
  echo '<meta property="og:image:type" content="image/jpeg" />'
  echo ''
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
  echo '/* Anti-flicker HEADER: replica o estado FINAL do bundle (header nativo .ra-header colapsado/invisivel + body padding-top reservado) ANTES do bundle async rodar. Sem isso, o first paint mostra o header/menu ANTIGO do Magazord e o bundle o substitui depois -> flicker + reflow. visibility:hidden (nao display:none) preserva o #cart-preview-area React no DOM (gotcha #5). Removido por header.js apos injetar #mm-header, ou pelo failsafe (timeout 3.5s / s.onerror). NAO cobre /checkout/* (header.js da early-return la). */'
  echo 'html.mm-header-loading header.ra-header{visibility:hidden!important;height:0!important;min-height:0!important;max-height:0!important;padding:0!important;margin:0!important;border:none!important;box-shadow:none!important;overflow:visible!important}'
  echo 'html.mm-header-loading #tickerBar,html.mm-header-loading .ticker-bar{display:none!important}'
  echo 'html.mm-header-loading body{padding-top:var(--mm-header-total,168px)}'
  echo '@media(max-width:767px){html.mm-header-loading body{padding-top:var(--mm-header-total-mobile,92px)}}'
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
  # Failsafe: o bundle normalmente remove mm-cart-loading via checkout-cro.js
  # quando buildLayout completa (failsafe interno ~2s). Se o bundle falhar em
  # carregar (jsDelivr 404, rede instável, adblocker), o s.onerror do loader
  # (abaixo) já remove as classes na hora. Este timeout cego é a última rede:
  # cobre o caso "bundle carregou mas travou/early-return antes do failsafe
  # interno". Reduzido de 6s → 3.5s (alinhado ao failsafe interno de 2s) pra
  # não deixar o usuário olhando spinner/tela escondida em conexão lenta.
  echo '(function(){var p=location.pathname;if(/^\/checkout\/(?!done)/.test(p)){document.documentElement.classList.add("mm-cart-loading");setTimeout(function(){document.documentElement.classList.remove("mm-cart-loading")},3500)}if(!/^\/checkout\//.test(p)){document.documentElement.classList.add("mm-header-loading");setTimeout(function(){document.documentElement.classList.remove("mm-header-loading")},3500)}document.documentElement.classList.add("mm-footer-loading");setTimeout(function(){document.documentElement.classList.remove("mm-footer-loading")},3500)})();'
  echo '</script>'
  echo ''
  cat "$DIST/loaders/schema-organization.html"
  echo ''
  # Loader multi-CDN: dev local (localStorage.mm_dev_url) → CF Pages (primário)
  # → jsDelivr (fallback) → revela Magazord nativo. VERSION/HOST isolados no topo.
  cat <<LOADER_EOF
<script>
(function(){
  // ===== Madeira Mania CDN loader (multi-CDN com fallback) =====
  // Edita só estas 3 linhas pra trocar versão/host sem rebuild se precisar.
  var VERSION    = '$CDN_VERSION';
  var REPO       = '$CDN_REPO';
  var PAGES_HOST = '$CDN_PAGES_HOST';

  // PRIMÁRIO: Cloudflare Pages (host dedicado, sem rate-limit de mirror).
  //   ?v= força cache-bust por versão (cada deploy bumpa VERSION).
  var PRIMARY  = 'https://' + PAGES_HOST + '/js/madeira-mania.js?v=' + VERSION;
  // FALLBACK: jsDelivr @tag (infra independente) — só se o primário falhar.
  var FALLBACK = 'https://cdn.jsdelivr.net/' + REPO + '@' + VERSION + '/dist/js/madeira-mania.js';

  var devUrl;
  try { devUrl = localStorage.getItem('mm_dev_url'); } catch(e) {}
  var doc = document.documentElement;

  function reveal(){
    // Última rede: revela o Magazord nativo se TODAS as fontes falharem,
    // em vez de deixar o usuário num spinner/tela escondida.
    doc.classList.remove('mm-cart-loading');
    doc.classList.remove('mm-footer-loading');
    doc.classList.remove('mm-header-loading');
  }
  function load(src, onerr){
    var s = document.createElement('script');
    s.src = src; s.async = true;
    if (onerr) s.onerror = onerr;
    document.head.appendChild(s);
    return s;
  }

  if (devUrl) {
    // DEV: tenta localhost; se cair, segue a cadeia PROD (CF Pages → jsDelivr).
    doc.classList.add('mm-dev-pending');
    var sd = load(devUrl);
    sd.onload  = function(){ doc.classList.remove('mm-dev-pending'); doc.classList.add('mm-dev-mode'); console.info('[mm-dev] bundle local OK:', devUrl); };
    sd.onerror = function(){
      doc.classList.remove('mm-dev-pending'); doc.classList.add('mm-dev-fallback');
      console.warn('[mm-dev] localhost offline, usando PROD (CF Pages)');
      load(PRIMARY, function(){ load(FALLBACK, reveal); });
    };
  } else {
    // PROD: CF Pages (primário) → jsDelivr (fallback) → revela nativo.
    load(PRIMARY, function(){
      console.warn('[mm] primário (CF Pages) falhou, tentando fallback jsDelivr');
      load(FALLBACK, function(){ console.warn('[mm] fallback jsDelivr também falhou — revela nativo'); reveal(); });
    });
  }
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
