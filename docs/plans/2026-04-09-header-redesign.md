# Header Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the 4-row Magazord-themed header (~205px) with a premium 3-layer custom header (168px) aligned with the design spec at `docs/superpowers/specs/2026-04-09-header-redesign-design.md`.

**Architecture:** Inject `#mm-header` as sibling to Magazord's `.ra-header` via `src/global.js`, hide Magazord header children via `src/global.css`, add header-specific styles via new guard-ID style tag. Build stays single-bundle (`build.sh` concatenates into `dist/js/madeira-mania.js`). Validation via Playwright `page.route()` intercept per CLAUDE.md rules. Phased commits, each phase visually validated before moving on.

**Tech Stack:** Vanilla JS (IIFE), CSS (scoped to `#mm-header`), Playwright-core (validation), Magazord platform (host), jsDelivr CDN (production delivery).

**Reference docs:**
- Spec: `docs/superpowers/specs/2026-04-09-header-redesign-design.md`
- Repo rules: `CLAUDE.md` (build.sh, page.route pattern, v1.0 tag workflow)
- Design tokens: memory/reference_design_tokens.md

---

## Phasing overview (v1 — 3-item nav)

| Phase | Scope | Risk | Blockers |
|---|---|---|---|
| ~~0~~ | ~~Magazord API research~~ | ✅ **DONE** (2026-04-09) — see spec §13; pivot to 3-item nav | — |
| 1 | Shell: topbar + header main + hide natives + body padding | MED (base layer) | None |
| 2 | Nav row + Ambientes mega-menu (desktop) | LOW | Phase 1 |
| ~~3~~ | ~~Móveis mega-menu~~ | **DEFERRED to v1.1** — see spec §13 rationale | — |
| 4 | Search overlay | LOW | Phase 1 |
| 5 | Sticky compact state (scroll behavior) | MED | Phase 1 |
| 6 | Mobile drawer + responsive adaptations (3-item nav in drawer) | MED | Phase 1 |
| 7 | `/atendimento` page content (Magazord CMS, manual by Luan) | LOW | Phase 1 |
| 8 | UAT + deploy (push + tag v1.0 move) | HIGH (production) | All phases + Luan UAT sign-off |

**Phase 0 findings summary** (consolidated into spec §13, deleted from this plan):
- Magazord `/v2/site/paginas` Pesquisa filter only accepts single scalar categoria — array valor and multi-filtros entries rejected silently
- Parent categorias auto-aggregate children → Ambientes axis needs zero new pages
- Cross-cutting Móveis requires either bulk product multi-categorization (148+ products touched, SEO risk) or manual CMS work (3-4h Luan time)
- **Decision**: ship 3-item nav for v1, Móveis upgrade path for v1.1 is additive and non-blocking

**Ambientes cat IDs (verified via GET /v2/site/categoria)** for Phase 2 mega-menu:
- Sala de Estar → cat 56, URL `/sala-de-estar-9677307902`
- Sala de Jantar → cat 65, URL `/sala-de-jantar-1916970475`
- Cozinha → cat 74, URL `/cozinha-6327619447`
- Bar e Café → cat 85, URL `/bar-e-cafe`
- Quarto → cat 76, URL `/quarto-0961844589`
- Escritório → cat 82, URL `/escritorio-899523853`

**Phasing principle**: ship each phase as a green commit with visual validation. Luan can stop/redirect between phases. **No phase runs without Playwright validation.**

---

## Phase 0 — Magazord API research (blocking for Phase 3)

### Task 0.1: Investigate Magazord admin API capabilities

**Goal:** Determine whether we can create a custom "Móveis" menu/category hierarchy via API (Strategy A), need facet filters (Strategy B), or must hard-code cross-links (Strategy C).

**Files:**
- Create: `docs/research/2026-04-09-magazord-api-moveis.md`

**Step 1: Check if Magazord has public API docs**

Luan to provide: Magazord admin panel URL + credentials, OR link to Magazord API docs (if exists), OR existing API token if already set up.

If no API access today, skip to Strategy C (hard-coded) and note Phase 3 is simpler.

**Step 2: Probe Magazord admin for menu management**

If API access exists, test endpoints:
```bash
# Example — adjust once Luan provides real endpoints
curl -H "Authorization: Bearer $MAGAZORD_TOKEN" \
  https://api.madeiramania.com.br/v1/categories
```

Goal: confirm whether custom categories (cross-cutting, not tied to ambiente tree) can be created.

**Step 3: Write findings to research doc**

Document:
- API availability (yes/no)
- Endpoint for menu/category CRUD (if exists)
- Chosen strategy (A, B, or C)
- Estimated effort for Strategy A (if chosen)
- URL structure for Móveis sub-items (depends on strategy)

**Step 4: Commit research**

```bash
git add docs/research/2026-04-09-magazord-api-moveis.md
git commit -m "docs(research): Magazord API capabilities for Moveis cross-cutting menu"
```

**Decision point after Phase 0**: if Strategy A (API), Phase 3 includes creating real categories via API. If Strategy B/C, Phase 3 is just wiring hard-coded URLs.

---

## Phase 1 — Shell (topbar + header main + body reservation)

**Goal:** Ship a static shell of the new header (topbar + logo + text-label actions, no nav, no overlays, no stickiness) that replaces the current Magazord header visually. Validate on desktop and mobile.

### Task 1.1: Create `src/header.css` with scoped tokens

**Files:**
- Create: `src/header.css`

**Step 1: Write the CSS file**

Paste from spec §4 (tokens) + add layer styles for topbar and header main. Scope everything under `#mm-header`.

```css
/* =============================================
   HEADER — Madeira Mania
   Substitui .ra-header > .header-top / .header-middle / .header-bottom
   Aplica em TODAS as páginas
   ============================================= */

#mm-header {
  /* Layout */
  --h-topbar: 32px;
  --h-main: 88px;
  --h-nav: 48px;
  --h-main-compact: 56px;
  --h-mobile-topbar: 28px;
  --h-mobile-main: 64px;
  --container-max: 1280px;
  --container-pad: 40px;
  --container-pad-mobile: 16px;

  /* Colors */
  --c-topbar-bg: #F5F1EA;
  --c-header-bg: #FFFFFF;
  --c-text: #333333;
  --c-text-muted: #999999;
  --c-text-heading: #4b664a;
  --c-brand: #4b664a;
  --c-border: #E6E6E6;
  --c-scrim: rgba(0, 0, 0, 0.5);
  --c-scrim-light: rgba(0, 0, 0, 0.04);

  /* Glass */
  --c-glass-bg: rgba(255, 255, 255, 0.85);
  --glass-blur: blur(12px);

  /* Typography */
  --font-sans: 'Montserrat', system-ui, -apple-system, sans-serif;
  --ls-loose: 0.04em;
  --ls-nav: 0.08em;

  /* Motion */
  --t-fast: 200ms cubic-bezier(0.16, 1, 0.3, 1);
  --t-base: 250ms cubic-bezier(0.16, 1, 0.3, 1);

  /* Z */
  --z-header: 100;
  --z-overlay: 200;
  --z-drawer: 300;

  /* Reset */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-header);
  font-family: var(--font-sans);
  color: var(--c-text);
}

#mm-header *, #mm-header *::before, #mm-header *::after {
  box-sizing: border-box;
}

#mm-header a {
  color: inherit;
  text-decoration: none;
  transition: color var(--t-fast);
}

/* Topbar */
#mm-header .mm-h-topbar {
  height: var(--h-topbar);
  background: var(--c-topbar-bg);
  display: flex;
  align-items: center;
  justify-content: center;
}
#mm-header .mm-h-topbar-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: var(--ls-loose);
  color: var(--c-brand);
}
#mm-header .mm-h-topbar-inner a:hover { opacity: 0.7; }
#mm-header .mm-h-topbar-sep { color: var(--c-brand); opacity: 0.4; }

/* Header main */
#mm-header .mm-h-main {
  height: var(--h-main);
  background: var(--c-header-bg);
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 var(--container-pad);
  max-width: 100vw;
  border-bottom: 1px solid var(--c-border);
}
#mm-header .mm-h-main-left {
  flex: 1;
  display: flex;
  align-items: center;
}
#mm-header .mm-h-main-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 32px;
}
#mm-header .mm-h-logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  line-height: 0;
}
#mm-header .mm-h-logo img {
  width: 280px;
  height: auto;
  display: block;
}
#mm-header .mm-h-action {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: var(--ls-loose);
  padding: 12px 16px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
  color: var(--c-text);
}
#mm-header .mm-h-action:hover { color: var(--c-brand); }
#mm-header .mm-h-cart-badge {
  display: inline-block;
  margin-left: 4px;
  font-size: 11px;
  font-weight: 700;
  color: var(--c-brand);
  vertical-align: super;
}

/* Mobile */
@media (max-width: 767px) {
  #mm-header .mm-h-topbar { height: var(--h-mobile-topbar); }
  #mm-header .mm-h-topbar-inner { font-size: 11px; gap: 10px; }
  #mm-header .mm-h-main { height: var(--h-mobile-main); padding: 0 var(--container-pad-mobile); }
  #mm-header .mm-h-logo img { width: 200px; }
}
```

**Step 2: Verify file exists**

```bash
ls -la src/header.css && wc -l src/header.css
```
Expected: file ~140 lines.

**Step 3: Commit**

```bash
git add src/header.css
git commit -m "feat(header): scoped CSS tokens and shell styles for mm-header"
```

---

### Task 1.2: Add global.css rules to hide Magazord native header

**Files:**
- Modify: `src/global.css` (append at end)

**Step 1: Append hide rules**

```css

/* =============================================
   HEADER REBUILD — Hide Magazord native header
   Aplica em TODO o site — substituído por #mm-header custom
   ============================================= */

#tickerBar,
.ticker-bar,
header.ra-header > .header-top,
header.ra-header > .header-middle,
header.ra-header > .header-bottom {
  display: none !important;
}

header.ra-header {
  min-height: 0 !important;
  padding: 0 !important;
}

body {
  padding-top: var(--mm-header-total, 168px);
}
@media (max-width: 767px) {
  body {
    padding-top: var(--mm-header-total-mobile, 92px);
  }
}
```

**Step 2: Build and verify**

```bash
bash ./build.sh
grep -c "mm-header-total" dist/js/madeira-mania.js
```
Expected: at least 2 matches.

**Step 3: Commit**

```bash
git add src/global.css
git commit -m "feat(global): hide Magazord native header layers and reserve body padding"
```

---

### Task 1.3: Add `src/header.js` with shell DOM injection

**Files:**
- Create: `src/header.js`

**Step 1: Write the injection logic**

```js
/* =============================================
   HEADER — Madeira Mania
   Injection of custom #mm-header shell
   Idempotent (checks guard ID before injecting)
   ============================================= */

(function(){
  if (document.getElementById('mm-header')) return;

  function init() {
    if (document.getElementById('mm-header')) return;

    const logoUrl = 'https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@v1.0/dist/assets/logo-mm.png';
    // ^^^ placeholder — Task 1.4 will replace with actual logo URL from site or local asset

    const header = document.createElement('div');
    header.id = 'mm-header';
    header.innerHTML = `
      <div class="mm-h-topbar">
        <div class="mm-h-topbar-inner">
          <a href="/atendimento">Atendimento</a>
          <span class="mm-h-topbar-sep">·</span>
          <span>Frete grátis R$ 2.000+</span>
          <span class="mm-h-topbar-sep">·</span>
          <span>12x sem juros</span>
        </div>
      </div>
      <div class="mm-h-main">
        <div class="mm-h-main-left">
          <button class="mm-h-action" id="mm-h-buscar" type="button">Buscar</button>
        </div>
        <a class="mm-h-logo" href="/" aria-label="Madeira Mania — início">
          <img src="${logoUrl}" alt="Madeira Mania" width="280" height="70" />
        </a>
        <div class="mm-h-main-right">
          <a class="mm-h-action" href="/wishlist">Favoritos</a>
          <a class="mm-h-action" href="/login">Conta</a>
          <a class="mm-h-action" href="/checkout/cart" id="mm-h-cart">
            Carrinho<span class="mm-h-cart-badge" id="mm-h-cart-count" hidden>0</span>
          </a>
        </div>
      </div>
    `;
    document.body.insertBefore(header, document.body.firstChild);

    // Mobile: reduce topbar content
    if (window.matchMedia('(max-width: 767px)').matches) {
      const inner = header.querySelector('.mm-h-topbar-inner');
      inner.innerHTML = '<span>Frete grátis R$ 2.000+</span><span class="mm-h-topbar-sep">·</span><span>12x sem juros</span>';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
```

**Step 2: Commit**

```bash
git add src/header.js
git commit -m "feat(header): shell DOM injection with logo, topbar, and text-label actions"
```

---

### Task 1.4: Extract current logo URL from live site

**Goal:** Find the real logo URL so we don't hardcode a placeholder.

**Files:**
- Modify: `src/header.js:12` (replace logoUrl placeholder)

**Step 1: Probe logo URL from live site**

```bash
cat > /tmp/mm-validation/probe-logo.mjs << 'EOF'
import { chromium } from 'playwright-core';
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage();
await page.goto('https://www.madeiramania.com.br/');
const url = await page.evaluate(() => {
  const img = document.querySelector('.header-middle img[alt*="Madeira" i], .header-middle img[src*="logo" i]');
  return img ? img.src : null;
});
console.log('LOGO:', url);
await browser.close();
EOF
cd /tmp/mm-validation && node probe-logo.mjs
```

**Step 2: Update `src/header.js`**

Replace the `logoUrl` constant with the actual URL found.

**Step 3: Build**

```bash
bash ./build.sh
```

**Step 4: Commit**

```bash
git add src/header.js
git commit -m "fix(header): use live site logo URL instead of placeholder"
```

---

### Task 1.5: Add header.css and header.js to build.sh

**Files:**
- Modify: `build.sh`

**Step 1: Read current build.sh**

```bash
cat build.sh
```

Understand structure — where CSS injection section is, where JS injection section is, where HTML injection section is.

**Step 2: Add header.css and header.js to build.sh**

In CSS injection section, add a guard-ID style block for `mm-header-css`:
```bash
# Add near other CSS injections
echo "  if (!document.getElementById('mm-header-css')) {"
echo "    var s = document.createElement('style');"
echo "    s.id = 'mm-header-css';"
echo "    s.textContent = \`$(cat src/header.css)\`;"
echo "    document.head.appendChild(s);"
echo "  }"
```

In JS section, concatenate `src/header.js`:
```bash
cat src/header.js
```

**Step 3: Build and verify**

```bash
bash ./build.sh
grep -c "mm-header-css" dist/js/madeira-mania.js
grep -c "mm-h-topbar" dist/js/madeira-mania.js
```
Expected: both > 0.

**Step 4: Commit**

```bash
git add build.sh dist/js/madeira-mania.js dist/loaders/loader.html
git commit -m "build(header): include header.css and header.js in bundle"
```

---

### Task 1.6: Visual validation — capture BEFORE (baseline) + AFTER

**Files:**
- Create: `/tmp/mm-validation/validate-header-p1.mjs`

**Step 1: Write Playwright validation script**

```js
import { chromium } from 'playwright-core';
import { readFileSync } from 'fs';

const bundle = readFileSync('./dist/js/madeira-mania.js', 'utf-8');
const browser = await chromium.launch({ channel: 'chrome' });

async function capture(name, viewport) {
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  await page.setViewportSize(viewport);

  // BEFORE — no intercept, live site as-is
  await page.goto('https://www.madeiramania.com.br/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `/tmp/mm-validation/header-p1-${name}-BEFORE.png`, clip: { x:0, y:0, width: viewport.width, height: 280 } });

  // AFTER — intercept bundle
  await page.route('**/cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@*/dist/js/madeira-mania.js', route =>
    route.fulfill({ status: 200, contentType: 'application/javascript; charset=utf-8', headers: {'Cache-Control':'no-store'}, body: bundle })
  );
  await page.goto('https://www.madeiramania.com.br/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `/tmp/mm-validation/header-p1-${name}-AFTER.png`, clip: { x:0, y:0, width: viewport.width, height: 280 } });

  await ctx.close();
}

await capture('desktop', { width: 1440, height: 900 });
await capture('mobile', { width: 375, height: 800 });
await browser.close();
console.log('Done. Check /tmp/mm-validation/header-p1-*.png');
```

**Step 2: Run**

```bash
cd /tmp/mm-validation && node validate-header-p1.mjs
```

**Step 3: Visually review 4 screenshots**

Open with image viewer or via Read tool:
- `header-p1-desktop-BEFORE.png` — should show current 4-row mess
- `header-p1-desktop-AFTER.png` — should show our new 2-row shell (topbar + header main), Magazord natives hidden
- `header-p1-mobile-BEFORE.png` — current mobile
- `header-p1-mobile-AFTER.png` — new mobile shell

Expected AFTER:
- No ticker
- No header-top (social + duplicated promo)
- No header-bottom (category nav — will come in Phase 2)
- New topbar visible (Atendimento · Frete · 12x)
- New header main with logo centered + Buscar left + Favoritos/Conta/Carrinho right
- Body content pushed down (not hidden behind fixed header)

**Step 4: If issues, fix and re-commit**

Common issues and fixes:
- Logo not loading → check URL in header.js
- Magazord native still visible → inspect `.ra-header > .header-*` — check hide CSS ran
- Content hidden behind header → check body padding-top
- Horizontal scroll → check container max-width

**Step 5: If passing, tag the phase commit**

```bash
git tag phase-1-shell
```

**DO NOT move v1.0 tag yet.** Production deploy is Phase 8.

---

## Phase 2 — Nav row + Ambientes mega-menu (desktop)

### Task 2.1: Add nav row markup to `src/header.js`

**Files:**
- Modify: `src/header.js`

**Step 1: Add nav HTML inside `#mm-header`**

After the `.mm-h-main` div, before the closing of `header.innerHTML`:

```html
<nav class="mm-h-nav" role="navigation" aria-label="Categorias">
  <ul class="mm-h-nav-list">
    <li class="mm-h-nav-item" data-menu="ambientes">
      <a href="#" class="mm-h-nav-link">Ambientes</a>
    </li>
    <li class="mm-h-nav-item">
      <a href="/envio-imediato" class="mm-h-nav-link">Envio Imediato</a>
    </li>
    <li class="mm-h-nav-item">
      <a href="/outlet" class="mm-h-nav-link">Outlet</a>
    </li>
  </ul>
</nav>
```

**Step 2: Commit**

```bash
git add src/header.js
git commit -m "feat(header): nav row with 3 items (Ambientes, Envio Imediato, Outlet)"
```

---

### Task 2.2: Add nav styles to `src/header.css`

**Files:**
- Modify: `src/header.css`

**Step 1: Append nav styles**

```css
/* Nav */
#mm-header .mm-h-nav {
  height: var(--h-nav);
  background: var(--c-header-bg);
  border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  display: flex;
  align-items: center;
  justify-content: center;
}
#mm-header .mm-h-nav-list {
  list-style: none;
  display: flex;
  gap: 64px;
  margin: 0;
  padding: 0;
}
#mm-header .mm-h-nav-link {
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--ls-nav);
  color: var(--c-text);
  padding: 12px 8px;
  display: inline-flex;
  align-items: center;
  position: relative;
  min-height: 44px;
}
#mm-header .mm-h-nav-link:hover {
  color: var(--c-brand);
}
#mm-header .mm-h-nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  right: 50%;
  bottom: 8px;
  height: 2px;
  background: var(--c-brand);
  transition: left var(--t-fast), right var(--t-fast);
}
#mm-header .mm-h-nav-link:hover::after,
#mm-header .mm-h-nav-link.is-active::after {
  left: 8px;
  right: 8px;
}

/* Hide nav on mobile (replaced by drawer in Phase 6) */
@media (max-width: 767px) {
  #mm-header .mm-h-nav { display: none; }
}
```

**Step 2: Build**

```bash
bash ./build.sh
```

**Step 3: Commit**

```bash
git add src/header.css dist/js/madeira-mania.js
git commit -m "feat(header): nav row styles with hover underline animation"
```

---

### Task 2.3: Build Ambientes mega-menu DOM and styles

**Files:**
- Modify: `src/header.js` (add mega-menu markup)
- Modify: `src/header.css` (add mega-menu styles)

**Step 1: Append mega-menu HTML inside nav list**

Inside the `data-menu="ambientes"` `<li>`, after the link, add. URLs verified via `GET /v2/site/paginas` — these are the real Magazord slugs for each ambiente top-level category page:

```html
<div class="mm-h-mega" role="menu" aria-label="Ambientes">
  <div class="mm-h-mega-inner">
    <div class="mm-h-mega-col">
      <h3 class="mm-h-mega-heading">Social</h3>
      <ul>
        <li><a href="/sala-de-estar-9677307902">Sala de Estar</a></li>
        <li><a href="/sala-de-jantar-1916970475">Sala de Jantar</a></li>
        <li><a href="/bar-e-cafe">Bar e Café</a></li>
      </ul>
    </div>
    <div class="mm-h-mega-col">
      <h3 class="mm-h-mega-heading">Casa</h3>
      <ul>
        <li><a href="/cozinha-6327619447">Cozinha</a></li>
        <li><a href="/quarto-0961844589">Quarto</a></li>
      </ul>
    </div>
    <div class="mm-h-mega-col">
      <h3 class="mm-h-mega-heading">Work</h3>
      <ul>
        <li><a href="/escritorio-899523853">Escritório</a></li>
      </ul>
    </div>
  </div>
</div>
```

**Step 2: Append mega-menu CSS**

```css
/* Mega-menu */
#mm-header .mm-h-nav-item { position: static; }
#mm-header .mm-h-mega {
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  background: var(--c-header-bg);
  border-bottom: 1px solid var(--c-border);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  opacity: 0;
  pointer-events: none;
  transform: translateY(-8px);
  transition: opacity var(--t-fast), transform var(--t-fast);
  padding: 32px 0;
}
#mm-header .mm-h-nav-item:hover .mm-h-mega,
#mm-header .mm-h-nav-item.is-open .mm-h-mega {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
#mm-header .mm-h-mega-inner {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-pad);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
}
#mm-header .mm-h-mega-heading {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--c-text-muted);
  margin: 0 0 16px;
}
#mm-header .mm-h-mega-col ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
#mm-header .mm-h-mega-col a {
  font-size: 14px;
  font-weight: 400;
  color: var(--c-text);
}
#mm-header .mm-h-mega-col a:hover {
  color: var(--c-brand);
}
```

**Step 3: Build**

```bash
bash ./build.sh
```

**Step 4: Commit**

```bash
git add src/header.js src/header.css dist/js/madeira-mania.js
git commit -m "feat(header): Ambientes mega-menu with Social/Casa/Work grouping"
```

---

### Task 2.4: Add hover-intent delay JS

**Goal:** Prevent accidental mega-menu triggers when mouse passes through nav quickly.

**Files:**
- Modify: `src/header.js`

**Step 1: Add hover-intent handler to `init()`**

After the `document.body.insertBefore` line:

```js
// Hover-intent for mega-menus (150ms delay)
const navItems = header.querySelectorAll('.mm-h-nav-item[data-menu]');
let intentTimer = null;
navItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    clearTimeout(intentTimer);
    intentTimer = setTimeout(() => {
      navItems.forEach(i => i.classList.remove('is-open'));
      item.classList.add('is-open');
    }, 150);
  });
  item.addEventListener('mouseleave', () => {
    clearTimeout(intentTimer);
    intentTimer = setTimeout(() => {
      item.classList.remove('is-open');
    }, 200);
  });
});
```

**Step 2: Commit**

```bash
git add src/header.js
git commit -m "feat(header): hover-intent delay for mega-menu triggers"
```

---

### Task 2.5: Phase 2 visual validation

**Files:**
- Create: `/tmp/mm-validation/validate-header-p2.mjs` (copy of p1 + interact with nav)

**Step 1: Write validation script**

Adapt `validate-header-p1.mjs`: after AFTER screenshot, hover over "Ambientes" and capture the mega-menu:

```js
// ... after the initial AFTER screenshot ...
await page.hover('.mm-h-nav-item[data-menu="ambientes"] .mm-h-nav-link');
await page.waitForTimeout(500);
await page.screenshot({ path: `/tmp/mm-validation/header-p2-${name}-ambientes-mega.png`, clip: { x:0, y:0, width: viewport.width, height: 500 } });
```

**Step 2: Run**

```bash
bash ./build.sh && cd /tmp/mm-validation && node validate-header-p2.mjs
```

**Step 3: Review screenshots**

- Nav row visible with 4 items
- Hovering "Ambientes" opens mega-menu with 3 columns
- Typography matches spec
- Links point to real Magazord URLs

**Step 4: Tag phase**

```bash
git tag phase-2-nav-ambientes
```

---

## Phase 3 — Móveis mega-menu — DEFERRED to v1.1

**Status**: removed from v1 scope after Magazord API investigation (2026-04-09). See spec §13 for full rationale.

**v1.1 upgrade path** (non-blocking, to be executed later):
1. Luan creates manual collection pages in Magazord CMS admin (one per aggregated type: Mesas, Cadeiras, Aparadores, Guarda-Roupas, etc.)
2. Collection pages use Magazord's native collection/coleção feature — not API-created Pesquisa pages (since those only accept single scalar filter)
3. Once collection URLs exist, add a 4th nav item in `src/header.js`: `<li data-menu="moveis">` with mega-menu pointing to the new collection URLs
4. Additive change — no risk to v1 behavior, no architectural impact

---

## Phase 4 — Search overlay

### Task 4.1: Build search overlay DOM + styles

**Files:**
- Modify: `src/header.js` (append overlay HTML at end of `#mm-header`)
- Modify: `src/header.css` (append overlay styles)

**Step 1: Add overlay HTML (inside `#mm-header`)**

```html
<div class="mm-h-search-overlay" id="mm-h-search-overlay" hidden>
  <div class="mm-h-search-backdrop"></div>
  <div class="mm-h-search-inner">
    <button class="mm-h-search-close" id="mm-h-search-close" aria-label="Fechar busca">×</button>
    <form action="/busca" method="get" class="mm-h-search-form">
      <input type="search" name="q" id="mm-h-search-input"
             placeholder="O que você procura?" autocomplete="off" />
    </form>
    <div class="mm-h-search-suggestions">
      <span class="mm-h-search-sug-label">Sugestões populares</span>
      <a href="/busca?q=mesa+de+jantar">Mesa de jantar</a>
      <a href="/busca?q=rack">Rack</a>
      <a href="/busca?q=guarda-roupas">Guarda-roupas</a>
      <a href="/busca?q=cristaleira">Cristaleira</a>
    </div>
  </div>
</div>
```

**Step 2: Add overlay CSS**

```css
/* Search overlay */
#mm-header .mm-h-search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: var(--z-overlay);
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
#mm-header .mm-h-search-overlay[hidden] { display: none; }
#mm-header .mm-h-search-backdrop {
  position: absolute;
  inset: 0;
  background: var(--c-scrim);
  animation: mm-fade-in var(--t-base);
}
#mm-header .mm-h-search-inner {
  position: relative;
  width: 100%;
  max-width: 800px;
  background: var(--c-header-bg);
  padding: 48px 32px;
  margin-top: 80px;
  animation: mm-slide-down var(--t-base);
  border-radius: 4px;
}
#mm-header .mm-h-search-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  width: 44px;
  height: 44px;
}
#mm-header .mm-h-search-input, #mm-header #mm-h-search-input {
  width: 100%;
  font-size: 24px;
  font-family: var(--font-sans);
  border: none;
  border-bottom: 1px solid var(--c-border);
  padding: 12px 0;
  outline: none;
}
#mm-header .mm-h-search-input:focus { border-bottom-color: var(--c-brand); }
#mm-header .mm-h-search-suggestions {
  margin-top: 24px;
  font-size: 13px;
  color: var(--c-text-muted);
}
#mm-header .mm-h-search-suggestions a {
  display: inline-block;
  margin-right: 16px;
  color: var(--c-text);
  padding: 8px 0;
}
#mm-header .mm-h-search-sug-label {
  display: block;
  margin-bottom: 8px;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.1em;
}
@keyframes mm-fade-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes mm-slide-down { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: translateY(0); } }
```

**Step 3: Commit**

```bash
git add src/header.js src/header.css
git commit -m "feat(header): search overlay DOM and styles"
```

---

### Task 4.2: Wire up search overlay open/close behavior

**Files:**
- Modify: `src/header.js`

**Step 1: Add handlers to `init()`**

```js
// Search overlay
const overlay = document.getElementById('mm-h-search-overlay');
const openBtn = document.getElementById('mm-h-buscar');
const closeBtn = document.getElementById('mm-h-search-close');
const input = document.getElementById('mm-h-search-input');
const backdrop = overlay.querySelector('.mm-h-search-backdrop');

function openSearch() {
  overlay.hidden = false;
  setTimeout(() => input.focus(), 50);
  document.body.style.overflow = 'hidden';
}
function closeSearch() {
  overlay.hidden = true;
  document.body.style.overflow = '';
  openBtn.focus();
}

openBtn.addEventListener('click', openSearch);
closeBtn.addEventListener('click', closeSearch);
backdrop.addEventListener('click', closeSearch);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !overlay.hidden) closeSearch();
  if (e.key === '/' && overlay.hidden && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) {
    e.preventDefault();
    openSearch();
  }
});
```

**Step 2: Build + commit**

```bash
bash ./build.sh
git add src/header.js dist/js/madeira-mania.js
git commit -m "feat(header): search overlay open/close with / shortcut and Esc"
```

---

### Task 4.3: Phase 4 visual validation

**Step 1:** Add overlay interactions to `/tmp/mm-validation/validate-header-p4.mjs`:

```js
await page.click('#mm-h-buscar');
await page.waitForTimeout(400);
await page.screenshot({ path: `/tmp/mm-validation/header-p4-${name}-search-open.png`, fullPage: false });
```

**Step 2:** Review screenshot. Expected: overlay visible with focused input and backdrop.

**Step 3:** Tag
```bash
git tag phase-4-search
```

---

## Phase 5 — Sticky compact state

### Task 5.1: Add scroll listener for compact state

**Files:**
- Modify: `src/header.js`
- Modify: `src/header.css`

**Step 1: Add scroll-direction sticky CSS**

```css
/* Sticky states */
#mm-header.is-compact .mm-h-topbar { display: none; }
#mm-header.is-compact .mm-h-nav { display: none; }
#mm-header.is-compact .mm-h-main {
  height: var(--h-main-compact);
  background: var(--c-glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  box-shadow: 0 1px 0 rgba(0,0,0,0.06);
}
#mm-header.is-compact .mm-h-logo img {
  width: 200px;
  transition: width var(--t-base);
}
#mm-header .mm-h-main {
  transition: height var(--t-base), background var(--t-base);
}
```

**Step 2: Add JS logic (scroll-direction sticky)**

```js
// Scroll-direction sticky compact
let lastY = 0;
let ticking = false;
function onScroll() {
  const y = window.scrollY;
  if (y > 24 && y > lastY) {
    header.classList.add('is-compact');
  } else if (y <= 24 || y < lastY) {
    header.classList.remove('is-compact');
  }
  lastY = y;
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(onScroll);
    ticking = true;
  }
}, { passive: true });

// Update body padding when compact
const updatePadding = () => {
  const isCompact = header.classList.contains('is-compact');
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const totalFull = isMobile ? 92 : 168;
  const totalCompact = isMobile ? 64 : 56;
  document.body.style.setProperty('--mm-header-total', (isCompact ? totalCompact : totalFull) + 'px');
};
// Run on class change via MutationObserver
const mo = new MutationObserver(updatePadding);
mo.observe(header, { attributes: true, attributeFilter: ['class'] });
window.addEventListener('resize', updatePadding);
updatePadding();
```

**Step 3: Build + commit**

```bash
bash ./build.sh
git add src/header.js src/header.css dist/js/madeira-mania.js
git commit -m "feat(header): sticky compact state with scroll-direction and glass blur"
```

---

### Task 5.2: Validate sticky behavior

**Step 1:** Add scroll to validation script:

```js
await page.evaluate(() => window.scrollTo(0, 400));
await page.waitForTimeout(600);
await page.screenshot({ path: `/tmp/mm-validation/header-p5-${name}-compact.png`, clip: { x:0, y:0, width: viewport.width, height: 200 } });
```

**Step 2:** Review. Expected: topbar + nav gone, header main at 56px, glassmorphic blur visible with content behind.

**Step 3:** Tag `git tag phase-5-sticky`

---

## Phase 6 — Mobile drawer

### Task 6.1: Add hamburger button + drawer DOM

**Files:**
- Modify: `src/header.js`
- Modify: `src/header.css`

**Step 1: Add hamburger to `.mm-h-main-left` (mobile only)**

In JS, append to the left side: `<button class="mm-h-burger" id="mm-h-burger" aria-label="Menu">☰</button>`

**Step 2: Build drawer HTML (append to `#mm-header`)**

```html
<div class="mm-h-drawer" id="mm-h-drawer" hidden>
  <div class="mm-h-drawer-backdrop"></div>
  <aside class="mm-h-drawer-panel" role="dialog" aria-label="Menu">
    <button class="mm-h-drawer-close" id="mm-h-drawer-close" aria-label="Fechar menu">×</button>
    <div class="mm-h-drawer-search">
      <input type="search" placeholder="Buscar" />
    </div>
    <nav class="mm-h-drawer-nav">
      <!-- Collapsible Ambientes, Móveis -->
      <details>
        <summary>Ambientes</summary>
        <ul>
          <li><a href="/sala-de-estar-9677307902">Sala de Estar</a></li>
          <li><a href="/sala-de-jantar-1916970475">Sala de Jantar</a></li>
          <li><a href="/cozinha-6327619447">Cozinha</a></li>
          <li><a href="/bar-e-cafe">Bar e Café</a></li>
          <li><a href="/quarto-0961844589">Quarto</a></li>
          <li><a href="/escritorio-899523853">Escritório</a></li>
        </ul>
      </details>
      <a href="/envio-imediato">Envio Imediato</a>
      <a href="/outlet">Outlet</a>
    </nav>
    <div class="mm-h-drawer-footer">
      <a href="/wishlist">Favoritos</a>
      <a href="/login">Conta</a>
      <a href="/atendimento">Atendimento</a>
    </div>
  </aside>
</div>
```

**Step 3: Add drawer CSS**

```css
#mm-header .mm-h-burger {
  display: none;
  background: transparent;
  border: none;
  font-size: 20px;
  width: 44px;
  height: 44px;
  cursor: pointer;
}
@media (max-width: 767px) {
  #mm-header .mm-h-burger { display: inline-flex; align-items: center; justify-content: center; }
  #mm-header .mm-h-action:not(#mm-h-cart) { display: none; } /* only Carrinho on mobile */
}
#mm-header .mm-h-drawer {
  position: fixed;
  inset: 0;
  z-index: var(--z-drawer);
}
#mm-header .mm-h-drawer[hidden] { display: none; }
#mm-header .mm-h-drawer-backdrop {
  position: absolute;
  inset: 0;
  background: var(--c-scrim);
}
#mm-header .mm-h-drawer-panel {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 85%;
  max-width: 360px;
  background: var(--c-header-bg);
  padding: 24px 20px;
  overflow-y: auto;
  animation: mm-slide-right var(--t-base);
  display: flex;
  flex-direction: column;
}
#mm-header .mm-h-drawer-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  width: 44px;
  height: 44px;
}
#mm-header .mm-h-drawer-search input {
  width: 100%;
  font-size: 16px;
  padding: 12px 16px;
  border: 1px solid var(--c-border);
  border-radius: 4px;
  margin-top: 40px;
  margin-bottom: 24px;
}
#mm-header .mm-h-drawer-nav details {
  border-bottom: 1px solid var(--c-border);
}
#mm-header .mm-h-drawer-nav summary {
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--ls-nav);
  padding: 16px 0;
  cursor: pointer;
  min-height: 44px;
}
#mm-header .mm-h-drawer-nav ul {
  list-style: none;
  margin: 0 0 16px;
  padding: 0 0 0 16px;
}
#mm-header .mm-h-drawer-nav li {
  padding: 8px 0;
}
#mm-header .mm-h-drawer-nav > a {
  display: block;
  padding: 16px 0;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--ls-nav);
  border-bottom: 1px solid var(--c-border);
  min-height: 44px;
}
#mm-header .mm-h-drawer-footer {
  margin-top: auto;
  padding-top: 24px;
  border-top: 1px solid var(--c-border);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
#mm-header .mm-h-drawer-footer a { padding: 12px 0; min-height: 44px; }
@keyframes mm-slide-right { from { transform: translateX(-100%); } to { transform: translateX(0); } }
```

**Step 4: Wire up open/close JS**

```js
const drawer = document.getElementById('mm-h-drawer');
const burger = document.getElementById('mm-h-burger');
const drawerClose = document.getElementById('mm-h-drawer-close');
const drawerBackdrop = drawer.querySelector('.mm-h-drawer-backdrop');

function openDrawer() { drawer.hidden = false; document.body.style.overflow = 'hidden'; }
function closeDrawer() { drawer.hidden = true; document.body.style.overflow = ''; }

burger.addEventListener('click', openDrawer);
drawerClose.addEventListener('click', closeDrawer);
drawerBackdrop.addEventListener('click', closeDrawer);
```

**Step 5: Build + commit**

```bash
bash ./build.sh
git add src/header.js src/header.css dist/js/madeira-mania.js
git commit -m "feat(header): mobile drawer with collapsible nav and footer actions"
```

---

### Task 6.2: Validate mobile drawer

**Step 1:** Add to mobile validation:

```js
await page.setViewportSize({ width: 375, height: 800 });
await page.click('#mm-h-burger');
await page.waitForTimeout(400);
await page.screenshot({ path: `/tmp/mm-validation/header-p6-mobile-drawer.png` });
```

**Step 2:** Review. Expected: drawer slides in from left, nav items collapsible, footer has Favoritos/Conta/Atendimento.

**Step 3:** Tag `git tag phase-6-mobile`

---

## Phase 7 — `/atendimento` page content

**Note:** This phase is **manual** — content created in Magazord CMS by Luan, not in code.

### Task 7.1: Provide content draft for `/atendimento`

**Files:**
- Create: `docs/content/atendimento-page.md` (draft text for Luan to paste into Magazord CMS)

**Step 1: Write the draft**

```markdown
# Atendimento Madeira Mania

Nosso time está pronto pra ajudar você a escolher o móvel certo pra sua casa.

## Fale com a gente

[Botão: Abrir WhatsApp] → https://api.whatsapp.com/send?phone=5511915299488

**Telefone:** 11 91529-9488
**E-mail:** contato@madeiramania.com.br

## Horário de atendimento

Segunda a sexta: 9h às 18h
Sábado: 9h às 13h
Domingo e feriados: fechado

## Frequentes

- Qual o prazo de entrega? — [link pro FAQ]
- Como funciona o parcelamento? — [link pro FAQ]
- Vocês montam os móveis? — [link pro FAQ]
```

**Step 2: Commit the draft**

```bash
git add docs/content/atendimento-page.md
git commit -m "docs(content): atendimento page copy draft for Magazord CMS"
```

**Step 3: Luan creates the page in Magazord CMS**

Manual step. Confirm route `/atendimento` responds with 200.

**Step 4: Sanity-check the link from the header**

Load any page on the live site (with dev mode OFF, or with Playwright intercept), click "Atendimento" in the topbar, confirm navigation to the new page.

---

## Phase 8 — UAT + deploy

### Task 8.1: Run full visual regression

**Goal:** Validate every page type still renders correctly with the new header.

**Files:**
- Create: `/tmp/mm-validation/validate-header-full.mjs`

**Step 1: Write comprehensive validation**

Test 5 page types × 2 viewports = 10 screenshots:
- Home
- Category (e.g. `/sala-de-estar-9677307902`)
- PDP (pick any product URL)
- `/checkout/cart`
- `/atendimento`

For each: capture BEFORE (without intercept) and AFTER (with intercept).

**Step 2: Run and review all 20 screenshots**

Ensure no page is broken, no overlap with existing content, no z-index conflicts with modals or drawers.

**Step 3: Run Chrome lighthouse / contrast check on home**

```bash
# Optional: via chrome-lighthouse-cli or manual DevTools
```

**Step 4: Commit validation outputs as reference**

Do NOT commit screenshots (they're ephemeral). Do commit the validation script.

```bash
git add /tmp/mm-validation/validate-header-full.mjs
# Actually /tmp is outside the repo — don't commit; just keep reference in docs/plans if needed
```

---

### Task 8.2: Manual UAT by Luan

**Goal:** Luan navigates the site with dev mode ON and validates real flows.

**Steps Luan should run**:

1. Open live site (dev mode active via bookmarklet — barra vermelha visible)
2. Home → category → PDP → add to cart → cart drawer → checkout/cart → identify → onepage
3. Try search overlay (click "Buscar", try `/` shortcut)
4. Hover "Ambientes" mega-menu, click 2 category links
5. Hover "Móveis" mega-menu, click 2 links
6. Scroll down → confirm compact state
7. Scroll up → confirm full state returns
8. Open Chrome DevTools → Device Toolbar (Ctrl+Shift+M) → iPhone 12 Pro → test drawer
9. Close drawer, click hamburger again
10. Click "Atendimento" in drawer footer
11. Click logo → should go home

**Sign-off checklist for Luan:**
- [ ] Header doesn't break any existing flow
- [ ] Visually matches the spec
- [ ] Mobile drawer works smoothly
- [ ] Cart count updates when item added
- [ ] No console errors in DevTools
- [ ] No horizontal scroll
- [ ] Sticky compact works
- [ ] Search overlay submits correctly

**If any check fails**: return to the failing phase, fix, re-validate.

---

### Task 8.3: Production deploy

**⚠ THIS IS DESTRUCTIVE. Requires explicit Luan confirmation. Force-moving the v1.0 tag affects all production users.**

**Precondition**: All UAT checks passed. Luan explicitly says "OK pra deploy".

**Step 1: Final build**

```bash
bash ./build.sh
```

Confirm `dist/js/madeira-mania.js` has all header code:
```bash
grep -c "mm-h-topbar\|mm-h-main\|mm-h-nav\|mm-h-drawer" dist/js/madeira-mania.js
```
Expected: high count (>10).

**Step 2: Commit final bundle**

```bash
git add dist/js/madeira-mania.js dist/loaders/loader.html
git commit -m "build(header): final bundle for production deploy"
```

**Step 3: Push main**

```bash
git push origin main
```

**Step 4: Force-move v1.0 tag**

```bash
git tag -f v1.0
git push -f origin v1.0
```

**Step 5: Purge jsDelivr cache**

```bash
curl https://purge.jsdelivr.net/gh/luancamara/madeira-mania-cdn@v1.0/dist/js/madeira-mania.js
```

**Step 6: Post-deploy sanity check**

- Open live site in incognito (no dev mode)
- Hard reload (Ctrl+Shift+R)
- Confirm new header renders (may take 2-5 min for jsDelivr cache to propagate)
- Check mobile viewport
- Check no console errors

**Step 7: Notify Luan of successful deploy**

Report: commit SHA, tag moved, purge URL, validation results.

---

## Rollback plan

**If production deploy breaks something**:

1. **Immediate**: Move v1.0 back to the previous commit
   ```bash
   git tag -f v1.0 <PREVIOUS_COMMIT_SHA>
   git push -f origin v1.0
   curl https://purge.jsdelivr.net/gh/luancamara/madeira-mania-cdn@v1.0/dist/js/madeira-mania.js
   ```
2. **Investigation**: Reproduce locally with dev mode, fix, re-validate, re-deploy.

**If a specific phase is broken mid-implementation**:
- Reset to the last `phase-N-*` tag
- Fix the specific phase
- Continue

---

## Open items to resolve during implementation

1. **Phase 0**: Magazord API availability (blocks Phase 3 strategy choice)
2. **Phase 1**: real logo URL from live site
3. **Phase 3**: Móveis cross-cutting URLs (depends on Phase 0)
4. **Phase 4**: top 5 popular search terms (currently hardcoded fallback — can be improved with analytics later)
5. **Phase 7**: `/atendimento` page needs Magazord CMS creation by Luan

---

## Skills to reference during execution

- `@superpowers:executing-plans` — main execution skill
- `@superpowers:test-driven-development` — adapt to visual TDD (capture BEFORE, change, capture AFTER)
- `@superpowers:verification-before-completion` — verify each phase passes before marking done
- `@superpowers:requesting-code-review` — optional after Phase 8 before deploy
