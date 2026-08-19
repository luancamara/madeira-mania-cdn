#!/bin/bash
# =============================================
# Madeira Mania CDN - Dev Loop
#
# Assiste src/, rebuilda e inicia o Worker completo em
# http://localhost:8080 (bundle + /api/search). Para revisar dentro do site
# HTTPS real, use MM_DEV_TUNNEL=1; o Wrangler cria uma URL HTTPS temporária.
#
# Watch backend (auto-detectado):
#   1. inotifywait (inotify-tools)  — mais rápido, recomendado
#   2. fallback: node fs.watch      — zero-install, usa Node
#
# Requer: node + npm install (Wrangler local)
#
# Uso:
#   ./dev.sh                    # porta padrão 8080
#   MM_DEV_PORT=9999 ./dev.sh   # porta custom
#   MM_DEV_TUNNEL=1 ./dev.sh    # revisão no site real via HTTPS temporário
#
# Ativar dev mode no Chrome (modo local; o CSP HTTPS pode exigir tunnel):
#   localStorage.setItem('mm_dev_url','http://localhost:8080/madeira-mania.js'); location.reload()
#
# Desativar:
#   localStorage.removeItem('mm_dev_url'); location.reload()
#
# Ou use o bookmarklet documentado em CLAUDE.md.
# =============================================
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

# Dev loop serve bundle NÃO-minificado pra debug legível. O deploy
# (bash ./build.sh direto) minifica normalmente. Herdado por todos os
# rebuilds abaixo, inclusive o spawnSync do watcher Node.
export MM_NO_MINIFY=1

PORT=${MM_DEV_PORT:-8080}
TUNNEL=${MM_DEV_TUNNEL:-0}
SERVER_PID=""
WATCHER_PID=""
SERVER_LOG=""

cleanup() {
  [ -n "$SERVER_PID" ] && kill $SERVER_PID 2>/dev/null || true
  [ -n "$WATCHER_PID" ] && kill $WATCHER_PID 2>/dev/null || true
  [ -n "$SERVER_LOG" ] && rm -f "$SERVER_LOG" 2>/dev/null || true
  exit 0
}
trap cleanup EXIT INT TERM

# ---- Dependências ----
command -v node >/dev/null 2>&1 || {
  echo "❌ node requerido"; exit 1
}

WRANGLER="$SCRIPT_DIR/node_modules/.bin/wrangler"
if [ ! -x "$WRANGLER" ]; then
  echo "❌ Wrangler local não encontrado. Rode: npm install"
  exit 1
fi

# Backend de watch: inotifywait (preferido) ou node (fallback)
WATCH_BACKEND=""
if command -v inotifywait >/dev/null 2>&1; then
  WATCH_BACKEND="inotify"
elif command -v node >/dev/null 2>&1; then
  WATCH_BACKEND="node"
else
  echo "❌ Precisa de inotifywait (sudo apt install inotify-tools) OU node"
  exit 1
fi

# ---- Porta livre? ----
port_in_use() {
  if command -v lsof >/dev/null 2>&1; then
    lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1
  elif command -v ss >/dev/null 2>&1; then
    ss -lnt 2>/dev/null | grep -q ":$PORT "
  else
    return 1
  fi
}

if port_in_use; then
  echo "❌ Porta $PORT já está em uso."
  echo "   Usa MM_DEV_PORT=9999 ./dev.sh pra escolher outra"
  exit 1
fi

# ---- Build inicial ----
echo "🔨 Build inicial..."
bash ./build.sh >/dev/null
BUNDLE_SIZE=$(wc -c < dist/js/madeira-mania.js)
echo "✅ Bundle: ${BUNDLE_SIZE} bytes"

# Detecta o provider antes de iniciar: o hostname público do Quick Tunnel não
# é localhost, então a fixture precisa ser autorizada explicitamente nele.
SEARCH_MODE="fixture local"
REAL_SEARCH=0
if [ -f .dev.vars ] && grep -Eq '^SEARCH_PROVIDER[[:space:]]*=[[:space:]]*algolia[[:space:]]*$' .dev.vars; then
  SEARCH_MODE="Algolia + Magazord reais"
  REAL_SEARCH=1
fi

# ---- Worker local (assets + API) ----
echo ""
WRANGLER_ARGS=(dev --ip 127.0.0.1 --port "$PORT" --local --show-interactive-dev-session false)
if [ "$REAL_SEARCH" = "0" ]; then
  WRANGLER_ARGS+=(--var SEARCH_PROVIDER:fixture --var ALLOW_FIXTURE_SEARCH:1)
fi
if [ "$TUNNEL" = "1" ]; then
  WRANGLER_ARGS+=(--tunnel)
  # BSD/macOS mktemp exige que os X encerrem o template. O formato anterior
  # (`XXXXXX.log`) funciona no GNU coreutils, mas falha no macOS.
  SERVER_LOG=$(mktemp "${TMPDIR:-/tmp}/mm-dev-tunnel.XXXXXX")
  echo "📡 Iniciando Worker + HTTPS tunnel (porta local $PORT)"
  "$WRANGLER" "${WRANGLER_ARGS[@]}" > >(tee "$SERVER_LOG") 2>&1 &
else
  echo "📡 Iniciando Worker em http://localhost:$PORT"
  "$WRANGLER" "${WRANGLER_ARGS[@]}" &
fi
SERVER_PID=$!

# Aguarda o health do Worker por até 10 segundos.
READY=0
for _ in $(seq 1 40); do
  if ! kill -0 "$SERVER_PID" 2>/dev/null; then break; fi
  if node -e "fetch('http://127.0.0.1:$PORT/api/search/health').then(r=>{if(!r.ok)process.exit(1)}).catch(()=>process.exit(1))" >/dev/null 2>&1; then
    READY=1
    break
  fi
  sleep 0.25
done

if [ "$READY" != "1" ]; then
  echo "❌ Worker local falhou ao iniciar"
  exit 1
fi

DEV_ORIGIN="http://localhost:$PORT"
if [ "$TUNNEL" = "1" ]; then
  PUBLIC_URL=""
  for _ in $(seq 1 80); do
    PUBLIC_URL=$(grep -Eo 'https://[a-z0-9-]+\.trycloudflare\.com/?' "$SERVER_LOG" 2>/dev/null | tail -1 || true)
    [ -n "$PUBLIC_URL" ] && break
    if ! kill -0 "$SERVER_PID" 2>/dev/null; then break; fi
    sleep 0.25
  done
  if [ -z "$PUBLIC_URL" ]; then
    echo "❌ Tunnel HTTPS não informou uma URL pública"
    exit 1
  fi
  DEV_ORIGIN=${PUBLIC_URL%/}
fi

cat <<EOF

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 Dev mode ativo (watch: $WATCH_BACKEND; busca: $SEARCH_MODE)
 Abre o Chrome em madeiramania.com.br e roda:

   localStorage.setItem('mm_dev_url','$DEV_ORIGIN/madeira-mania.js');
   location.reload()

 Pra desativar:

   localStorage.removeItem('mm_dev_url'); location.reload()

 Ou use o bookmarklet documentado em CLAUDE.md.

 API local:

   $DEV_ORIGIN/api/search/health

 Sem .dev.vars, a busca usa dados de demonstração claramente identificados.
 Para upstreams reais, copie .dev.vars.example para .dev.vars e use credenciais novas.

 A cada edição em src/, este script rebuilda. Dá F5 no browser.
 Ctrl+C aqui pra parar tudo.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👀 Watching src/ ...

EOF

# ---- Helper de rebuild ----
rebuild() {
  echo ""
  echo "🔄 [$(date +%H:%M:%S)] Mudança detectada, rebuild..."
  if bash ./build.sh >/dev/null 2>&1; then
    local size=$(wc -c < dist/js/madeira-mania.js)
    echo "✅ Build ok (${size} bytes) — F5 no browser"
  else
    echo "❌ Build falhou — corrige e salva de novo"
    bash ./build.sh >&2 || true
  fi
}

# ---- Watch loop (backend-specific) ----
if [ "$WATCH_BACKEND" = "inotify" ]; then
  while inotifywait -qq -r -e modify,create,delete,move src/; do
    rebuild
  done
else
  # Node fs.watch fallback — recursive desde Node v19.1 (Linux) / v7 (macOS/Win)
  node - <<'NODEWATCH' &
const { watch, statSync } = require('fs');
const { spawnSync } = require('child_process');

let timer = null;
function rebuild() {
  if (timer) return; // debounce window em progresso
  timer = setTimeout(() => {
    timer = null;
    const t = new Date().toLocaleTimeString();
    process.stdout.write(`\n🔄 [${t}] Mudança detectada, rebuild...\n`);
    const r = spawnSync('bash', ['./build.sh'], { stdio: 'pipe' });
    if (r.status === 0) {
      const size = statSync('dist/js/madeira-mania.js').size;
      process.stdout.write(`✅ Build ok (${size} bytes) — F5 no browser\n`);
    } else {
      process.stdout.write(`❌ Build falhou — corrige e salva de novo\n`);
      if (r.stderr) process.stderr.write(r.stderr);
    }
  }, 200);
}

try {
  watch('src', { recursive: true }, (event, filename) => {
    if (filename) rebuild();
  });
} catch (e) {
  console.error(`Watch erro: ${e.message}`);
  console.error(`Node pode não suportar recursive watch. Tente instalar inotify-tools.`);
  process.exit(1);
}

// Keep alive
process.stdin.resume();
process.on('SIGINT', () => process.exit(0));
process.on('SIGTERM', () => process.exit(0));
NODEWATCH
  WATCHER_PID=$!
  wait $WATCHER_PID
fi
