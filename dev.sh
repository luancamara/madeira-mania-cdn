#!/bin/bash
# =============================================
# Madeira Mania CDN - Dev Loop
#
# Assiste src/ e rebuilda a cada mudança + serve dist/js/
# em http://localhost:8080 (bindado em 127.0.0.1).
#
# Watch backend (auto-detectado):
#   1. inotifywait (inotify-tools)  — mais rápido, recomendado
#   2. fallback: node fs.watch      — zero-install, usa Node
#
# Requer: python3 + (inotifywait OU node)
#
# Uso:
#   ./dev.sh                    # porta padrão 8080
#   MM_DEV_PORT=9999 ./dev.sh   # porta custom
#
# Ativar dev mode no Chrome (site real serve bundle local):
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

PORT=${MM_DEV_PORT:-8080}
SERVER_PID=""
WATCHER_PID=""

cleanup() {
  [ -n "$SERVER_PID" ] && kill $SERVER_PID 2>/dev/null || true
  [ -n "$WATCHER_PID" ] && kill $WATCHER_PID 2>/dev/null || true
  exit 0
}
trap cleanup EXIT INT TERM

# ---- Dependências ----
command -v python3 >/dev/null 2>&1 || {
  echo "❌ python3 requerido"; exit 1
}

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
if ss -lnt 2>/dev/null | grep -q ":$PORT "; then
  echo "❌ Porta $PORT já está em uso."
  echo "   Usa MM_DEV_PORT=9999 ./dev.sh pra escolher outra"
  exit 1
fi

# ---- Build inicial ----
echo "🔨 Build inicial..."
bash ./build.sh >/dev/null
BUNDLE_SIZE=$(wc -c < dist/js/madeira-mania.js)
echo "✅ Bundle: ${BUNDLE_SIZE} bytes"

# ---- Servidor HTTP ----
echo ""
echo "📡 Servindo dist/js/ em http://localhost:$PORT"
( cd dist/js && exec python3 -m http.server $PORT --bind 127.0.0.1 2>/dev/null ) &
SERVER_PID=$!
sleep 0.3

# Verifica se o servidor subiu
if ! kill -0 $SERVER_PID 2>/dev/null; then
  echo "❌ Servidor local falhou ao iniciar"
  exit 1
fi

cat <<EOF

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 Dev mode ativo (watch backend: $WATCH_BACKEND)
 Abre o Chrome em madeiramania.com.br e roda:

   localStorage.setItem('mm_dev_url','http://localhost:$PORT/madeira-mania.js');
   location.reload()

 Pra desativar:

   localStorage.removeItem('mm_dev_url'); location.reload()

 Ou use o bookmarklet documentado em CLAUDE.md.

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
