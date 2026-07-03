# Madeira Mania CDN — Workflow & Rules

E-commerce Madeira Mania (móveis) roda na plataforma **Magazord** (SaaS brasileiro).
Magazord **não permite modificar código diretamente** — só permite injetar conteúdo
HTML/CSS/JS via "Conteúdos Adicionais" (CAs) no `<head>`/`<body>`/etc.

Este repo existe pra consolidar TODAS essas injeções em **um único bundle JS** servido
via jsDelivr CDN, carregado por um loader HTML que fica colado no `<head>` do Magazord.

---

## Arquitetura

```
src/*.{js,css,html}
       │
       ▼ bash build.sh (concatena tudo num IIFE único)
       │
dist/js/madeira-mania.js  (bundle ~260KB)
dist/loaders/loader.html  (snippet pro <head> do Magazord — conteúdo adicional único)
       │
       ├── [DEV]   serve http://localhost:8080/madeira-mania.js via ./dev.sh
       └── [PROD]  Cloudflare Workers (primário, auto-deploy no push)
                   + jsDelivr @v<VERSION> tag imutável (fallback)
                          │
                          ▼
            Loader checa localStorage.mm_dev_url:
            se setado → bundle dev local
            se não    → workers.dev; se falhar → jsDelivr
```

### File layout

```
src/
  global.{css,js}        # Aplica em TODAS as páginas
  produto.{css,js}       # PDP (produto)
  variacoes.{css,js}     # Seletor de variações na PDP
  cart-sheet.{css,js}    # Mini-carrinho do header (diferente de /checkout/cart!)
  checkout-cro.{css,js}  # /checkout/cart, /identify, /onepage, /payment
  schema-*.js            # JSON-LD structured data
  tracking.js            # GA + Meta Pixel + eventos analytics
  fb-purchase.js         # Meta Pixel Purchase event no /checkout/done
  ticker.{css,html}      # Ticker bar no topo do site
  contentsquare-loader.js # Loader do Contentsquare (session replay)
  og-tags-product.js     # Open Graph tags dinâmicas pra PDP
  faq-universal.js       # Accordion FAQ universal

dist/
  js/madeira-mania.js       # Bundle único, gerado por build.sh
  loaders/loader.html       # Loader do Magazord, gerado por build.sh
  loaders/schema-organization.html # JSON-LD incluído no loader

build.sh    # Gera o bundle (concatena CSS injectado + JS + HTML injectado)
dev.sh      # Watch + rebuild + serve localhost:8080
```

---

## Workflow de desenvolvimento (loop rápido)

**Pré-requisitos** (uma vez por máquina):
- `python3` (já vem no Linux/WSL2)
- `inotify-tools`: `sudo apt install inotify-tools`
- Chrome instalado

**1. Inicia o dev loop:**
```bash
./dev.sh
```
Builda uma vez, sobe servidor HTTP em `http://localhost:8080` servindo `dist/js/`,
e fica escutando `src/` com inotifywait. Toda mudança em src/ → rebuilda automático.

**2. Ativa dev mode no Chrome** (uma vez, fica no localStorage):
- Abre qualquer página de `madeiramania.com.br` no Chrome
- Cole no console:
```js
localStorage.setItem('mm_dev_url','http://localhost:8080/madeira-mania.js'); location.reload()
```
- Confirma: uma **barra vermelha "⚡ DEV MODE — localhost"** aparece no topo do site.
- A partir daqui, F5 pega sempre o bundle atual do disco.

**3. Bookmarklet toggle** (mais rápido que console):
Arrasta esse link pro bookmarks bar do Chrome:
```
javascript:(function(){var u=localStorage.getItem('mm_dev_url');if(u){localStorage.removeItem('mm_dev_url');}else{var d=prompt('Dev URL:','http://localhost:8080/madeira-mania.js');if(!d)return;localStorage.setItem('mm_dev_url',d);}location.reload();})();
```
Clique = toggla dev mode ON/OFF.

**4. Desativar dev mode:**
```js
localStorage.removeItem('mm_dev_url'); location.reload()
```
Ou clique no bookmarklet de novo. A barra vermelha some, volta a carregar do jsDelivr.

**Fallback automático**: se o servidor local estiver offline quando o dev mode está
ativo, o loader cai automaticamente no jsDelivr prod (`s.onerror` handler). Não
quebra o site se você esqueceu `./dev.sh` rodando.

---

## Workflow de validação

### Manual (no seu Chrome)
Dev mode ativo + navega no site + F5. A barra vermelha confirma que você está
vendo o bundle local. Use DevTools → Device Toolbar (Ctrl+Shift+M) pra simular
mobile. **Device emulation cobre 95% dos casos** — mobile físico raramente
necessário.

### Agentic (Claude + Playwright) — PADRÃO OBRIGATÓRIO

**NUNCA** use `page.evaluate()` pra injetar CSS/JS parcialmente no site. Causa
conflito com o bundle que já rodou (IDs duplicados de `<style>`, event listeners
dobrados, React re-renders perdidos). Usa **`page.route()` pra substituir o
bundle inteiro** antes dele parsear.

```js
import { chromium } from 'playwright-core';
import { readFileSync } from 'fs';

const bundle = readFileSync('dist/js/madeira-mania.js', 'utf-8');

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage();

// Intercepta qualquer tag do bundle (@v1.0, @main, @commit-sha, etc.)
await page.route(
  '**/cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@*/dist/js/madeira-mania.js',
  route => route.fulfill({
    status: 200,
    contentType: 'application/javascript; charset=utf-8',
    headers: { 'Cache-Control': 'no-store' },
    body: bundle,
  })
);

await page.goto('https://www.madeiramania.com.br/...');
// screenshots, asserts, probes — mesmo que um browser real
```

Scripts de referência em `/tmp/mm-validation/` (gerados durante sessões de trabalho).

---

## Workflow de deploy

```bash
# 1. Bump de versão: editar CDN_VERSION em build.sh (ex.: v2.0.34)

# 2. Build determinístico (minifica com esbuild — ver nota abaixo)
bash ./build.sh

# 3. Commit (incluir build.sh + dist/js + dist/loaders/loader.html)
git add -p  # ou arquivos específicos; NUNCA use -A
git commit -m "feat(escopo): descrição curta (vX.Y.Z)"

# 4. Push main → Cloudflare Workers Builds AUTO-DEPLOYA o worker
#    (integração GitHub; NÃO precisa de wrangler manual)
git push origin main

# 5. Criar tag IMUTÁVEL da versão (fallback jsDelivr do loader novo)
git tag v2.0.34 && git push origin v2.0.34
```

**Como o rollout chega em produção:**
- CDN primário: `madeira-mania-cdn.luancamara.workers.dev/js/madeira-mania.js?v=<VERSION>`
  — o worker serve sempre o asset mais novo (o `?v=` é só cache-bust de browser).
  O loader colado no Site Builder pede um `?v=` fixo; sem re-colar o loader, a
  propagação acontece conforme o cache dos browsers expira (max-age=86400, ≤24h).
  Pra rollout instantâneo: re-colar o loader novo (com `?v=` bumpado) no Site Builder.
- Fallback: jsDelivr `@v<VERSION>` (tag imutável = resolve na hora, sem purge).

**NUNCA force-mova tag pra deployar** (fluxo antigo do `v1.0`): o jsDelivr cacheia
a resolução tag→commit e o purge de arquivo NÃO invalida essa resolução — a tag
movida fica dias servindo o commit antigo. Tag nova por versão resolve na hora.

**Nota esbuild:** `bash ./build.sh` minifica e RENOMEIA identificadores. Pra conferir
se uma mudança entrou no bundle, grep por literal que sobrevive à minificação
(string, regex literal), não por nome de função. `MM_NO_MINIFY=1 bash ./build.sh`
gera bundle cru legível (dev). Se o esbuild falhar (ex.: erro de sintaxe), o build
cai pro bundle cru SEM quebrar — cuidado com `*/` dentro de comentários de bloco.

---

## Regras pro Claude (rígidas)

1. **SEMPRE** rode `bash ./build.sh` depois de editar qualquer arquivo em `src/`
   antes de validar ou commitar. O bundle em `dist/js/` é a source of truth
   pra testes e pra deploy.

2. **SEMPRE** valide mudanças visuais ANTES de commitar. Opções:
   - **Preferido**: Playwright com `page.route()` intercept (pattern acima)
   - Alternativa: dev mode ativo + screenshot via agent-browser skill

3. **NUNCA** use `page.evaluate()` pra injetar CSS/JS parcial em validação
   agentic. Gera conflito com o bundle já carregado. Sempre `page.route()`.

4. **SEMPRE** valide em desktop (1440px) E mobile (375px via device emulation).
   Layout do Magazord é React, quebras responsivas são comuns.

5. **NUNCA** commit sem ter validado visualmente. Commits tipo "fix: X" em
   sequência são sintoma de iteração cega — não faça isso.

6. **NUNCA** push no `main` sem commit já validado. O push AUTO-DEPLOYA o worker
   (CDN primário) e afeta 100% dos clientes conforme o cache dos browsers expira.

7. **NUNCA** adicione CSS/JS que dependa de ordem de carregamento. Os IDs de
   `<style>` tag criados por `build.sh` (`mm-produto-css`, `mm-trust-strip`, etc.)
   são **idempotentes por design** — o bundle checa `getElementById` antes de
   injetar. Preserve isso: não remove os guard checks.

8. **NUNCA** edite diretamente `dist/js/madeira-mania.js` ou `dist/loaders/loader.html`.
   Esses arquivos são **gerados** por `build.sh`. Edita o `src/` e build.sh.

9. Ao inserir novo conteúdo no bundle, adicione ao `build.sh` (seções CSS
   injection, HTML injection, ou JS) E garanta um ID único pro `<style>` guard
   check (`mm-<nome>-css`).

10. **NUNCA** use `git add -A`. Stage arquivos específicos. O repo tem arquivos
    temporários ocasionais (.planning/, /tmp/, notas) que não devem ir pro commit.

---

## Gotchas conhecidos

| # | Problema | Workaround |
|---|---|---|
| 1 | jsDelivr cacheia resolução tag→commit; purge de arquivo NÃO invalida — tag force-moved fica dias no commit velho | Tag imutável por versão (`@v2.0.33`); NUNCA force-mover tag |
| 2 | CSS injection às vezes é "truncada" no desktop quando override é longo | Override via JS inline em vez de CSS (commit `edf9644`) |
| 3 | Magazord usa `gap-space-40` com specificity alta | Precisa `!important` + seletor mais específico |
| 4 | `#popup-msg-whats` do Magazord flashea antes do nosso JS rodar | `display: none !important` no `<style>` do loader.html |
| 5 | `#cart-preview-area` é componente React | Usar `$(document).ajaxComplete` + evento `reactItemAddedToCart` |
| 6 | CAs velhos do Magazord conflitavam | **Desativados**: 3, 5, 6, 8, 9, 10, 12, 14, 18, 20, 22, 24, 25 — tudo no bundle único |
| 7 | Mixed content: HTTPS → HTTP localhost | Chrome permite `localhost` como secure context (HTTP→HTTPS scripts ok). Outros hosts vão falhar. |
| 8 | `page.evaluate()` pra injeção parcial conflita com bundle já carregado | Usar `page.route()` intercept sempre |
| 9 | `isShippingAlreadyFree()` não roda na tela inicial do cart (frete ainda não calculado) | Shipping bar não aparece — não é bug, é timing |

---

## Troubleshooting

**"Mudei src/, deu push, mas o site real não reflete"**
1. `bash ./build.sh` rodou? Confirma que a mudança entrou no bundle com um literal
   que sobrevive à minificação: `grep "string-ou-regex-literal" dist/js/madeira-mania.js`
   (nomes de função são renomeados pelo esbuild!)
2. Commit foi pushed? `git log origin/main..HEAD` deve estar vazio
3. Worker atualizou? `curl -s "https://madeira-mania-cdn.luancamara.workers.dev/js/madeira-mania.js" | grep "literal"`
   (auto-deploy do Cloudflare leva ~1-2 min após o push)
4. Tag da versão existe? `git ls-remote --tags origin | grep v2.0` (fallback jsDelivr)
5. Browser cache: hard reload (Ctrl+Shift+R) ou janela anônima — o loader do Site
   Builder pede `?v=` fixo, então browsers seguram o bundle por até 24h (max-age=86400)

**"Dev mode não funciona"**
1. `./dev.sh` está rodando? Checa terminal
2. `curl http://localhost:8080/madeira-mania.js | head -c 200` retorna o bundle?
3. `localStorage.getItem('mm_dev_url')` no console do Chrome retorna a URL?
4. Barra vermelha "⚡ DEV MODE" aparece no topo? Se não aparece, a classe `mm-dev-mode` não foi adicionada — loader em prod está desatualizado (precisa deploy)

**"Playwright route intercept não intercepta"**
- A URL do bundle no site pode ter mudado de tag. Use glob: `**/cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@*/dist/js/madeira-mania.js`
- Confirma que o route handler é registrado ANTES do `page.goto()`

---

## Scripts auxiliares

`/tmp/mm-validation/` (gerado durante sessões de trabalho):
- `capture-before.js` — screenshot do site real (sem intercept)
- `capture-after.js` — screenshot com `page.route()` intercept do bundle local
- `dev-browser.js` — Chrome headed com intercept pra validação manual via WSLg
- `package.json` + `node_modules/playwright-core` (já instalado)

Dependência única: `npm install playwright-core` com `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1` (usa system Chrome via `channel: 'chrome'`).
