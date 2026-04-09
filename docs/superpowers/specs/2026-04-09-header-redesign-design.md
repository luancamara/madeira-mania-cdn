# Header Redesign — Madeira Mania
**Date**: 2026-04-09
**Status**: Design approved, awaiting plan
**Author**: Luan + Claude
**Related**: `src/global.css` (header overrides), `src/global.js` (header injection), `src/ticker.html` (will be removed)

---

## 1. Problem

The current Madeira Mania header is a 4-row stack (~205px of vertical chrome) inherited from Magazord defaults, themed but not redesigned. It tier-matches mass-market BR e-commerce (Tok&Stok, Casas Bahia) and contradicts the "premium minimal" identity the brand wants to project to its mid-to-high ticket BR audience (R$ 2k–50k furniture purchases, long deliberation cycles).

### Measured anti-patterns in current header

| Layer | Height | Content | Problem |
|---|---|---|---|
| Ticker bar | 44px | Auto-scrolling promo with emoji (🎟️ 🚚 📞), phone number, 4 messages | #1 mass-market tell — premium tier never uses scrolling tickers |
| `header-top` | 30px | Social icons (Facebook/Instagram/TikTok) left + duplicated promo text right | Social in header = mass-market tell; duplicates ticker content |
| `header-middle` | 86px | Logo · gigantic search bar (~620px) · Entre/Cadastre-se · cart icon | Search dominates visual axis, breaks hierarchy |
| `header-bottom` | 45px | 7 nav items including "Envio Imediato" (a filter, mixed with categories) | Hick's law violation (research: premium tier uses 4–5 items max) |

**Total chrome**: ~205px before content. 4 stacked rows. Phone number + promo text shown twice. Social icons in header. Worst-case for the premium target.

### Audience context (informs every decision)

- BR middle-to-upper-middle class buyers
- Real wood furniture, R$ 2k–50k, considered purchases
- Deliberation cycle: returns to site 4–8 times before buying
- High WhatsApp dependency (BR norm) for big-ticket purchases — trust signal essential
- B2C only (no architects/decorators channel — confirmed by stakeholder)
- No physical showroom (confirmed by stakeholder)

### Research grounding

External research compared 13 sites across BR premium (Etel, Tidelli, Westwing, Oppa, Tok&Stok, Breton), global premium (Hay, Hem, Aesop, Ferm Living, Article, Burrow), and one mass-market BR control (Tok&Stok). Premium tier shares 7 patterns; mass-market BR violates all 7.

**Anchor references for this redesign** (in priority order):
1. **Breton** (BR-appropriate sophistication, glassmorphic sticky, Cmd+K search)
2. **Etel / Hay** (atelier restraint, generous whitespace, text labels over icons)
3. **Article.com** (dual-axis mega-menu pattern)

**Explicitly rejected**: Westwing — stakeholder feedback: "não reflete nosso padrão de premium e nem se comunica com o perfil brasileiro médio a alto".

---

## 2. Goals

1. Cut visual chrome from 4 stacked rows to **3 logical layers** (topbar 32px + header 88px + nav 48px = 168px) with clear hierarchy.
2. Eliminate every documented anti-pattern: scrolling ticker, social icons in header, duplicated promo text, exposed phone number, emoji-as-icon, 7-item nav.
3. Apply premium-tier patterns: centered image-logo, text labels over icons, dual-axis mega-menu, sticky compact state with blur, restrained topbar.
4. Preserve trust signals critical to BR conversion (frete grátis, parcelamento, atendimento) without violating restraint.
5. Preserve existing conversion drivers: WhatsApp access (via existing floating bubble), Pronta Entrega filter (promoted to nav top-level).
6. Stay within Magazord constraints — inject via single bundle, hide native header elements via CSS, render custom header via JS.

### Non-goals

- Not changing the search backend behavior (still uses Magazord native search endpoint)
- Not redesigning category landing pages
- Not replacing Magazord cart logic — only the visual treatment of the cart entry point in the header
- Not adding new features (no language switcher, no currency, no region selector)
- No A/B test setup in this phase — full cut-over after UAT (per user preference: "híbrido > A/B test")

---

## 3. Visual Design

### 3.1 Layout — Desktop (≥1024px)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│              Atendimento  ·  Frete grátis R$ 2.000+  ·  12x sem juros           │  ← topbar 32px
│                                                                                  │     bg #F5F1EA, text #4b664a 12px
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│   Buscar                          [LOGO MM]                  ♡ Favoritos   Conta   Sacola (2)   │  ← header 88px
│                                                                                  │     bg #FFFFFF, logo 280×70px center
├─────────────────────────────────────────────────────────────────────────────────┤
│              Ambientes      Móveis      Pronta Entrega      Outlet              │  ← nav 48px
│                                                                                  │     bg #FFFFFF, border-top #E6E6E6
└─────────────────────────────────────────────────────────────────────────────────┘
```

**Total**: 168px (vs 205px current), 3 logical layers (vs 4 stacked rows).

### 3.2 Topbar (32px)

- **Background**: `#F5F1EA` (creme — differentiates hierarchy without color shouting)
- **Content**: 3 items separated by middle dot `·`, centered horizontally:
  ```
  Atendimento  ·  Frete grátis R$ 2.000+  ·  12x sem juros
  ```
- **Typography**: Montserrat 12px, weight 500, letter-spacing 0.04em, color `#4b664a`
- **"Atendimento"** is a link → routes to `/atendimento` page (existing or to-be-created) containing: WhatsApp button (links to existing wa.me URL), full hours, email. **Phone number is NOT shown in the topbar itself.**
- **Frete grátis R$ 2.000+** and **12x sem juros** are static text (no link)
- **No icon, no emoji, no social, no scrolling animation**
- **Mobile collapses** to `Frete grátis R$ 2.000+ · 12x sem juros` (28px tall)

### 3.3 Header main (88px)

- **Background**: `#FFFFFF`
- **Layout**: Flex with absolute-positioned center logo to avoid disputing flex space
  ```
  [Buscar (left, abs left:40px)]   [LOGO (abs center)]   [Favoritos · Conta · Sacola (right, abs right:40px)]
  ```
- **Container max-width**: 1280px, centered, padding 0 40px
- **Logo**:
  - Source: existing Madeira Mania logo image (sofá illustration + script wordmark, ~280×70px native)
  - Display width: 280px desktop, 200px mobile/sticky
  - Click → home (`/`)
  - `loading="eager"` (above the fold)
- **"Buscar"** (left action):
  - Text-only, Montserrat 14px weight 500, letter-spacing 0.04em, color `#333333`
  - Hover: color shifts to `#4b664a`
  - Click → opens **search overlay** (see §3.6)
  - Hit area ≥44×44px (padding 12px 16px)
- **Right cluster** (`Favoritos · Conta · Sacola`):
  - All text, Montserrat 14px weight 500, letter-spacing 0.04em
  - Separated by 32px gap
  - **Favoritos**: links to `/wishlist` (Magazord native)
  - **Conta**: links to `/login` if logged out, `/conta` if logged in
  - **Sacola**: links to `/checkout/cart`
    - Badge: superscript number top-right, 11px, bold, color `#4b664a`, only renders if count > 0
    - Click on desktop: opens existing cart-sheet drawer (already implemented in `src/cart-sheet.js`); on mobile: navigates to `/checkout/cart`
- **No icons anywhere in this layer.** All actions use text labels.

### 3.4 Nav (48px)

- **Background**: `#FFFFFF`
- **Border-top**: 1px solid `#E6E6E6`
- **Layout**: 4 nav items, centered horizontally, equal gap (~64px)
- **Typography**: Montserrat 13px, **uppercase**, weight 500, letter-spacing 0.08em, color `#333333`
- **Items**:
  1. **Ambientes** → mega-menu hover (3 cols, see §3.5.1)
  2. **Móveis** → mega-menu hover (3 cols, see §3.5.2)
  3. **Pronta Entrega** → direct link to filter `/pronta-entrega` (existing Magazord category) — **no mega-menu, single click**
  4. **Outlet** → direct link to `/outlet`
- **Active state** (current category): underline 2px `#4b664a`, offset 8px from text baseline
- **Hover state**: color `#4b664a`, underline animates in 200ms ease-out

### 3.5 Mega-menus

#### 3.5.1 Ambientes

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                      │
│   SALA              COZINHA & BAR        QUARTO &              [Hero │
│   Sala de Estar     Cozinha              ESCRITÓRIO            image]│
│   Sala de Jantar    Bar                  Quarto                      │
│                     Sala de Jantar       Escritório                  │
│                                                                      │
│                                                Ver todos os ambientes│
└─────────────────────────────────────────────────────────────────────┘
```
- 3 columns of links + 1 column with hero image (curated room photo)
- "Ver todos os ambientes" CTA bottom-right
- Heading typography: Montserrat 11px uppercase weight 600 letter-spacing 0.1em color `#999999`
- Link typography: Montserrat 14px weight 400 color `#333333`, hover `#4b664a`

#### 3.5.2 Móveis

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                      │
│   ESTOFADOS         APOIO               GUARDA                 [Hero │
│   Sofás             Mesas de Jantar     Armários               image]│
│   Poltronas         Mesas de Centro     Estantes                     │
│   Puffs             Aparadores          Racks                        │
│                     Cadeiras            Cômodas                      │
│                     Banquetas                                        │
│                                                                      │
│                                                Ver todos os móveis   │
└─────────────────────────────────────────────────────────────────────┘
```
- Same structure as Ambientes
- Categories grouped semantically: Estofados (sit/relax) · Apoio (surfaces/seating) · Guarda (storage)
- **Note**: exact category names need confirmation against current Magazord taxonomy in implementation phase

#### Mega-menu behavior

- **Trigger**: hover on desktop (≥1024px) with 150ms intent delay (prevents accidental triggers when mouse passes through nav)
- **Trigger on touch/mobile**: not applicable — touch users get the mobile drawer
- **Position**: absolute, full container width (1280px max), top: bottom of nav
- **Animation**: fade-in 200ms ease-out, translateY(-8px → 0)
- **Backdrop**: subtle scrim `rgba(0,0,0,0.04)` over the page below
- **Close**: mouse leave with 200ms grace period, OR Escape key, OR click outside

### 3.6 Search overlay

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                      │
│              [    O que você procura?              🔍   ]            │
│                                                                      │
│              SUGESTÕES POPULARES                                     │
│              Sofá retrátil  ·  Mesa de jantar  ·  Cama box           │
│                                                                      │
│              [Esc para fechar]                                       │
└─────────────────────────────────────────────────────────────────────┘
```

- **Trigger**: click on "Buscar" link OR keyboard shortcut `/` (slash) on desktop (Aesop pattern)
- **Layout**: full-width overlay, fixed top, 240px tall, slides down 250ms ease-out
- **Backdrop**: `rgba(0,0,0,0.5)` over rest of page, blocks scroll
- **Input**:
  - Single line, no border, font 24px Montserrat weight 400
  - Placeholder: "O que você procura?"
  - Auto-focus on open
  - Submit: `Enter` → `/busca?q=<query>` (uses existing Magazord search endpoint)
- **Sugestões populares**: 3–5 hardcoded popular search terms (configurable in `src/global.js`)
- **Close**: `Esc`, click backdrop, OR click X (top-right)

### 3.7 Sticky compact state

**Trigger**: window `scroll` past 24px from top
**Active layers**: only the header main (88px) remains; topbar (32px) + nav (48px) hide
**Compact behavior**:
- Header main shrinks: 88px → 56px
- Logo: 280px → 200px
- Background: `rgba(255, 255, 255, 0.85)` + `backdrop-filter: blur(12px)` (glassmorphic, Breton pattern)
- Border-bottom: 1px solid `rgba(0, 0, 0, 0.06)`
- Transition: 250ms ease-out on height/transform/background
- **Nav becomes accessible via**: hovering the compact header reveals nav as a dropdown beneath (or — simpler v1 — nav reappears when scrolling up; the "scroll-direction sticky" pattern)

**v1 simplification**: implement scroll-direction sticky (compact on scroll-down, full on scroll-up) — defers the dropdown-on-hover complexity to v2 if needed.

### 3.8 Mobile (<768px)

```
┌─────────────────────────────────┐
│  Frete grátis R$ 2.000+ · 12x  │  ← topbar 28px
├─────────────────────────────────┤
│                                  │
│  ☰          [LOGO MM]      Sacola│  ← header 64px, logo 200px
│                                  │
└─────────────────────────────────┘
```

**Topbar**: 1 line, `Frete grátis R$ 2.000+ · 12x sem juros`, centered, 11px Montserrat
**Header**: 64px tall
- **Hambúrguer** (left): 24×24px icon, hit area 44×44px, opens drawer
- **Logo** (center): 200px wide, centered absolute
- **Sacola** (right): text label "Sacola" 13px, with badge if count > 0, hit area 44×44px

**Drawer (slide from left)**:
- Width: 85% of viewport, max 360px
- Background: `#FFFFFF`
- **Top**: search input (large, 18px font, full width with padding)
- **Body**:
  - "Ambientes" (collapsible accordion) — taps expand sub-list
  - "Móveis" (collapsible accordion)
  - "Pronta Entrega" (link)
  - "Outlet" (link)
- **Bottom** (sticky to drawer footer):
  - "Favoritos" (link)
  - "Conta" / "Entrar" (link, depending on auth state)
  - "Atendimento" (link to `/atendimento`)
- **Close**: tap outside drawer, swipe-left gesture, or tap close X
- **Backdrop**: `rgba(0,0,0,0.5)` over page below

---

## 4. Tokens

Add to `src/global.css` scoped to `#mm-header`:

```css
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
  --c-topbar-bg: #F5F1EA;       /* creme */
  --c-header-bg: #FFFFFF;
  --c-text: #333333;
  --c-text-muted: #999999;
  --c-text-heading: #4b664a;    /* brand verde */
  --c-brand: #4b664a;
  --c-border: #E6E6E6;
  --c-scrim: rgba(0, 0, 0, 0.5);
  --c-scrim-light: rgba(0, 0, 0, 0.04);

  /* Glass */
  --c-glass-bg: rgba(255, 255, 255, 0.85);
  --glass-blur: blur(12px);

  /* Typography */
  --font-sans: 'Montserrat', system-ui, -apple-system, sans-serif;
  --fs-12: 12px;
  --fs-13: 13px;
  --fs-14: 14px;
  --fs-24: 24px;
  --ls-loose: 0.04em;
  --ls-nav: 0.08em;

  /* Motion */
  --t-fast: 200ms cubic-bezier(0.16, 1, 0.3, 1);
  --t-base: 250ms cubic-bezier(0.16, 1, 0.3, 1);

  /* Z-index scale */
  --z-header: 100;
  --z-overlay: 200;
  --z-drawer: 300;
}
```

Reuses brand colors from `reference_design_tokens.md` (canonical: `#4b664a` brand, `#F2F2F2` page bg, `#333333` text). Topbar `#F5F1EA` is a new creme — chosen because pure white-on-white between topbar and header would lose hierarchy; `#F5F1EA` is warm-neutral (oat paper) consistent with premium furniture aesthetic. **No new brand colors invented** — only one new neutral.

---

## 5. Magazord native elements to hide

The current Magazord header DOM (measured from live site):

```
.ticker-bar                              ← our own (built by us in src/ticker.html)
header.ra-header
  .header-top                            ← gray bar with social + duplicated promo
  .header-middle                         ← logo + search + login + cart
  .header-bottom                         ← category nav
```

**CSS to inject in `src/global.css`**:
```css
/* Hide existing ticker (built by us) and Magazord native header layers */
#tickerBar,
.ticker-bar,
header.ra-header > .header-top,
header.ra-header > .header-middle,
header.ra-header > .header-bottom {
  display: none !important;
}

/* Reserve space for our custom header */
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

**Note**: `.ra-header` itself is preserved (not removed) because Magazord may attach JS handlers to it. We hide its children and inject our `#mm-header` as a sibling/child.

---

## 6. JS injection strategy

Add a new section to `src/global.js` (or new file `src/header.js` and add to `build.sh`):

```js
// Idempotent guard
if (!document.getElementById('mm-header')) {
  const header = document.createElement('div');
  header.id = 'mm-header';
  header.innerHTML = `
    <div class="mm-h-topbar"> ... </div>
    <div class="mm-h-main"> ... </div>
    <nav class="mm-h-nav"> ... </nav>
  `;
  // Insert at top of <body>, before .ra-header
  document.body.insertBefore(header, document.body.firstChild);

  // Wire up: search overlay, mega-menu hover, cart count sync, mobile drawer
  initMmHeader();
}
```

**Cart count sync**: subscribe to existing `reactItemAddedToCart` event (already used in `cart-sheet.js`) to update the `Sacola (n)` badge. Initial count read from Magazord state on `DOMContentLoaded`.

**Build.sh additions**:
- New CSS section: `mm-header-css` style guard ID
- New HTML injection: header DOM template
- New JS section: header init function
- **Remove**: ticker.html injection (replaced by topbar inside `#mm-header`)

---

## 7. Trade-offs and risks

### 7.1 Risks accepted

| Risk | Severity | Mitigation |
|---|---|---|
| Removing exposed phone number from header | **HIGH** for BR audience | "Atendimento" link in topbar routes to dedicated page; existing floating WhatsApp bubble (`#mm-floating-whatsapp`) preserved; UAT will catch conversion drop on mobile |
| Centered logo absolute-positioned conflicts with extreme small viewports (~320px) | LOW | Mobile breakpoint switches to flex layout below 768px; logo scales to 200px |
| Mega-menu hover broken on touch laptops with no mouse | LOW-MEDIUM | First touch opens, second touch navigates (touch fallback handler) |
| Sticky compact + Magazord modals/dropdowns z-index conflicts | MEDIUM | `--z-header: 100` is below Magazord's modal `z: 1050`; verify in QA |
| Search overlay conflicts with Magazord native search component still in DOM | LOW | Native search is hidden via `display:none` in `.header-middle`; overlay submits to same `/busca?q=` endpoint |

### 7.2 Trade-offs explicitly chosen

- **Editorial centered logo over functional left-aligned logo**: ditching some horizontal space for actions in exchange for the gallery/atelier feel that the brand needs to project. Mitigation: use absolute positioning so the logo doesn't push actions out of the way; left action ("Buscar") + right cluster (3 items) easily fit at 1280px.
- **Text labels everywhere over icons**: sacrifices universal recognizability (icons are language-neutral) for the restraint signal. BR audience reads Portuguese; this is fine.
- **No A/B test, full cut-over after UAT**: per user preference ("híbrido > A/B test"). Reduces complexity, accepts conversion risk in exchange for not splitting traffic and not maintaining two header variants.
- **Pronta Entrega as a top-level nav item**: violates strict taxonomy (it's a filter, not a category) but is a primary BR conversion driver and deserves the real estate. Endowed-progress + status-quo-bias rationale: showing immediate-availability inventory reduces buyer anxiety on high-ticket purchases.

### 7.3 Plan B (if UAT fails)

If conversion drops measurably after launch:
1. **First lever**: add WhatsApp number as 4th item in topbar — `Atendimento · WhatsApp 11 91529-9488 · Frete grátis R$ 2.000+ · 12x sem juros`
2. **Second lever**: switch logo from centered to left-aligned (recovers space, more familiar layout for BR users who expect logo-left)
3. **Third lever**: re-introduce a static (non-scrolling) promo line above topbar with the most clicked promo

These are reversible CSS/HTML edits in the bundle, no architectural changes needed.

---

## 8. Testing plan

### 8.1 Visual validation (Playwright + page.route() pattern)

Capture before/after for:
- Desktop 1440×900: home, PDP, category page, cart page (header consistency)
- Desktop 1024×768 (laptop): home, PDP (verify centered logo doesn't crowd actions)
- Mobile 375×800: home, PDP (verify drawer behavior, hambúrguer position)
- Mobile 414×896: home (verify on iPhone Plus widths)

### 8.2 Behavioral checks

- [ ] Topbar `Atendimento` link routes correctly (or stub page exists)
- [ ] Logo click routes home from any page
- [ ] Search overlay opens on click and on `/` keypress; closes on Esc; submits to `/busca?q=`
- [ ] Mega-menu opens on hover with intent delay; closes on mouse-leave with grace period
- [ ] Sacola count updates when item added (subscribe to `reactItemAddedToCart`)
- [ ] Sacola click on desktop opens cart-sheet drawer; on mobile navigates to `/checkout/cart`
- [ ] Sticky compact triggers at scroll > 24px; full state on scroll-up
- [ ] Mobile drawer opens, closes, traps focus, supports swipe-left to close
- [ ] No horizontal scroll at any viewport
- [ ] Magazord modals/dropdowns still appear above header (z-index check)
- [ ] No console errors

### 8.3 A11y checks

- [ ] All interactive elements have hit area ≥44×44px (touch target rule)
- [ ] Focus visible on all interactive elements (keyboard tab through entire header)
- [ ] Skip-to-main-content link present and functional
- [ ] Drawer traps focus when open, returns focus to hambúrguer on close
- [ ] Search overlay traps focus, returns focus to "Buscar" link on close
- [ ] Mega-menus accessible via keyboard (arrow keys, Enter, Esc)
- [ ] All text passes 4.5:1 contrast (`#333333` on `#FFFFFF` = 12.6:1 ✓; `#4b664a` on `#F5F1EA` = 5.8:1 ✓)
- [ ] Logo `alt="Madeira Mania"`, link role on logo container

### 8.4 UAT

Manual UAT by Luan after implementation:
- Browse 5 products from home → category → PDP → cart → identify
- Confirm header doesn't break any existing flow
- Sanity check on real Magazord theme (not just our intercepted bundle)
- Mobile testing on real device (not just Chrome device emulation) — at least once per critical flow

---

## 9. Open questions to resolve in planning

These are decisions that don't block the design but need answers before implementation:

1. **`/atendimento` page**: does this exist? If not, who creates the page in Magazord CMS, and what content?
2. **Mega-menu category names**: exact mapping of current Magazord categories to the proposed Ambientes/Móveis grouping. Need to inspect category tree on the live site.
3. **Hero images for mega-menus**: are there curated photos available, or do we use the site's existing category banner images?
4. **Popular search terms** (search overlay sugestões): top 5 from analytics or hand-picked?
5. **Magazord ticker (`#tickerBar`)**: confirm it's safe to remove entirely from `src/ticker.html` and `build.sh` injection — no other site logic depends on it.
6. **Cart-sheet integration**: confirm desktop "Sacola" click should open the existing cart-sheet drawer (not navigate). Cross-check with `src/cart-sheet.js`.

---

## 10. Deferred / explicit non-features

- **Wishlist count badge** — only Sacola gets a badge in v1; Favoritos badge can be added later if usage justifies
- **Region/language switcher** — not needed (BR-only, PT-only)
- **Currency switcher** — not needed (R$ only)
- **Full-bleed mega-menu with editorial layout** — deferred; v1 uses 3-col simple layout
- **Hover-to-reveal nav in compact sticky state** — deferred; v1 uses scroll-direction sticky
- **Search autocomplete with live results** — deferred; v1 uses static "sugestões populares" + submit-to-search-page
- **Account dropdown menu** — deferred; v1 routes directly to `/login` or `/conta`
