(function(){"use strict";(function(){if(!document.getElementById("mm-global-css")){var g=document.createElement("style");g.id="mm-global-css",g.textContent=`/* =============================================
   GLOBAL CSS - Madeira Mania (Mobile)
   Melhorias aplicadas em TODAS as páginas

   Todos com !important para sobrescrever Magazord

   Paleta oficial:
   - Verde base: #4b664a
   - Verde claro: #5d765d
   - Verde escuro: #445c43
   - Texto: #333333
   - Fundo: #ffffff
   ============================================= */

@media (max-width: 768px) {

  /* ==========================================
     1. OVERFLOW - Impedir scroll horizontal
     ========================================== */

  html, body {
    overflow-x: hidden !important;
  }

  #pagina-produto-react-app,
  #produto-react-app {
    overflow-x: hidden !important;
    max-width: 100vw !important;
  }


  /* ==========================================
     2. LINKS - Cor dentro da paleta do site
     ========================================== */

  #pagina-produto-react-app a:not([class*="bg-"]):not([class*="text-white"]):not(header a):not(nav a) {
    color: #4b664a !important;
  }


  /* ==========================================
     3. VITRINES — Ocultar estrelas com 0 reviews
     Aplica em homepage e qualquer vitrine
     ========================================== */

  .average-rating[data-value="0.00"],
  .average-rating[data-value="0.00"] + .qtd-aval,
  .average-rating[data-value="0"] + .qtd-aval,
  .average-rating[data-value="0"] {
    display: none !important;
  }

  /* Ocultar .rating inteiro quando contém apenas 0 */
  .rating:has(.average-rating[data-value="0.00"]) {
    display: none !important;
  }


}


/* =============================================
   REGRAS GLOBAIS (todos os viewports)
   ============================================= */

/* Esconder WhatsApp original — substituído por #mm-floating-whatsapp */
#popup-msg-whats {
  display: none !important;
}

/* --- Absorvido de CA-3 (Arredonda imagens) --- */
figure { border-radius: 10% !important; }
.lazyloaded { margin: 0 !important; }

/* --- Absorvido de CA-12 (Menu desktop verde) --- */
@media (min-width: 992px) {
  .menu-link-120 {
    background-color: #4b664a;
    color: #fff;
  }
}

/* ==========================================
   FLOATING WHATSAPP — Posição por contexto
   Mobile: acima do bottom nav (60px)
   PDP Mobile: override em produto.css (acima da sticky bar)
   Desktop: canto inferior
   ========================================== */

/* Default mobile: acima do bottom nav (60px nav + 15px gap) */
#mm-floating-whatsapp {
  bottom: 75px !important;
}

/* Back-to-top: acima do WA (75 + 52 WA + 10 gap) */
.back-to-top {
  bottom: 137px !important;
}

/* Desktop: mais baixo (sem bottom nav) */
@media (min-width: 769px) {
  #mm-floating-whatsapp {
    bottom: 24px !important;
  }
  .back-to-top {
    bottom: 86px !important;
  }
}

/* Back-to-top — complete override of Magazord native styling */
.back-to-top {
  width: 44px !important;
  height: 44px !important;
  border-radius: 50% !important;
  background: #ffffff !important;
  border: 1.5px solid #dbe1db !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 0 !important;
  overflow: hidden !important;
  transition: opacity 200ms, transform 200ms, right 300ms !important;
}
.back-to-top:not(.opened) {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(8px) !important;
}
.back-to-top.opened {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
.back-to-top:hover {
  border-color: #4b664a !important;
  box-shadow: 0 4px 12px rgba(75, 102, 74, 0.15) !important;
}
/* Force .icon to fill the button and suppress any Magazord content */
.back-to-top .icon {
  width: 100% !important;
  height: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: none !important;
  padding: 0 !important;
  margin: 0 !important;
  font-size: 0 !important; /* hide any text nodes from Magazord */
  line-height: 0 !important;
}
/* Hide any Magazord pseudo-elements or extra icons inside */
.back-to-top .icon::before,
.back-to-top .icon::after {
  display: none !important;
}
.back-to-top .icon svg {
  width: 18px !important;
  height: 18px !important;
  flex-shrink: 0 !important;
}


/* =============================================
   FOOTER REBUILD — Hide Magazord + render ours
   Aplica em TODO o site (não só checkout)
   ============================================= */

/* Hide Magazord footer + propaganda globally
   Aplica em TODAS as páginas — substituído por #mm-footer custom */
#footer-react-app,
footer.ra-footer,
.ra-footer,
.footer-04,
.footer-top,
.footer-middle,
.footer-about,
.footer-bottom,
.footer-checkout-info,
.horario-atendimento,
.magazord-logo-container,
.icon-magazord {
  display: none !important;
}


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&display=swap');


#mm-footer {
  /* Tokens locais (não dependem de #checkout-main-area) */
  --f-bg:        #1F2A1E;  /* very dark olive */
  --f-bg-2:      #283228;  /* trust strip */
  --f-bg-3:      #161E15;  /* legal bottom */
  --f-fg:        #E5E7EB;
  --f-fg-2:      #C4CCC4;  /* secondary text — bumped pra contrast */
  --f-fg-3:      #A0AA9F;  /* meta info — WCAG-safe em #283228 (ratio 5.58) */
  --f-heading:   #FFFFFF;
  --f-accent:    #A0BCA0;  /* light olive hover */
  --f-border:    rgba(255, 255, 255, 0.08);

  --f-sans:      'Poppins', system-ui, -apple-system, sans-serif;
  --f-serif:     'Libre Baskerville', Georgia, serif;

  font-family: var(--f-sans);
  background: var(--f-bg);
  color: var(--f-fg);
  font-size: 14px;
  line-height: 1.6;
  padding: 0;
  margin: 0;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#mm-footer * {
  box-sizing: border-box;
}

#mm-footer a {
  color: var(--f-fg);
  text-decoration: none;
  transition: color 320ms cubic-bezier(0.16, 1, 0.3, 1);
}

#mm-footer a:hover {
  color: var(--f-accent);
}

#mm-footer a:focus-visible {
  outline: 2px solid var(--f-accent);
  outline-offset: 3px;
  border-radius: 2px;
}


/* ---- Main grid ---- */
.mm-footer-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 24px 40px;
}

.mm-footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 48px;
}

@media (max-width: 1023px) {
  .mm-footer-main { padding: 40px 20px 32px; }
  .mm-footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 36px 24px;
  }
}

@media (max-width: 540px) {
  .mm-footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}


/* ---- Brand column ---- */
.mm-footer-brand {
  max-width: 360px;
}

.mm-footer-logo {
  display: inline-block;
  margin-bottom: 16px;
  line-height: 0;
}

.mm-footer-logo img {
  height: 48px;
  width: auto;
  display: block;
  filter: brightness(0) invert(1);  /* white version of brand logo */
  opacity: 0.95;
}

.mm-footer-tagline {
  color: var(--f-fg-2);
  font-size: 13px;
  line-height: 1.6;
  margin: 0 0 24px;
  max-width: 320px;
}

.mm-footer-social {
  display: flex;
  align-items: center;
  gap: 10px;
}

.mm-footer-social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--f-border);
  border-radius: 9999px;
  color: var(--f-fg);
  transition: all 320ms cubic-bezier(0.16, 1, 0.3, 1);
}

.mm-footer-social a:hover {
  background: var(--f-accent);
  border-color: var(--f-accent);
  color: var(--f-bg);
  transform: translateY(-2px);
}

.mm-footer-social svg {
  width: 16px;
  height: 16px;
  display: block;
}


/* ---- Section heading ---- */
.mm-footer-h {
  font-family: var(--f-serif);
  font-size: 16px;
  font-weight: 400;
  color: var(--f-heading);
  margin: 0 0 18px;
  letter-spacing: -0.01em;
}


/* ---- Lists ---- */
.mm-footer-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mm-footer-list li {
  display: block;
}

.mm-footer-list a,
.mm-footer-list > li > span {
  font-size: 13px;
  color: var(--f-fg-2);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  line-height: 1.4;
  min-height: 44px;
  padding: 6px 0;
  width: auto;
  -webkit-tap-highlight-color: transparent;
}

.mm-footer-list a:hover {
  color: var(--f-accent);
}

.mm-footer-list svg {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  color: var(--f-accent);
}

.mm-footer-meta {
  color: var(--f-fg-3) !important;
  font-size: 12px;
  font-style: italic;
  min-height: 0 !important;
  padding-top: 4px !important;
}


/* ---- Trust strip ---- */
.mm-footer-trust {
  background: var(--f-bg-2);
  border-top: 1px solid var(--f-border);
  border-bottom: 1px solid var(--f-border);
}

.mm-footer-trust-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px 32px;
}

.mm-footer-trust-item {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--f-fg);
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
}

.mm-footer-trust-item svg {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  color: var(--f-accent);
}

.mm-footer-trust-item strong {
  display: block;
  color: var(--f-heading);
  font-weight: 600;
  font-size: 13px;
  line-height: 1.2;
}

.mm-footer-trust-item small {
  display: block;
  color: var(--f-fg-3);
  font-size: 12px;
  font-weight: 400;
  margin-top: 2px;
}

.mm-footer-trust-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

@media (max-width: 1023px) {
  .mm-footer-trust-inner {
    padding: 20px;
    gap: 14px 24px;
  }
}


/* ---- Bottom strip ---- */
.mm-footer-bottom {
  background: var(--f-bg-3);
}

.mm-footer-bottom-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.mm-footer-legal {
  font-size: 12px;
  color: var(--f-fg-3);
  margin: 0;
  line-height: 1.6;
  font-weight: 400;
}

.mm-footer-legal strong {
  color: var(--f-fg-2);
  font-weight: 500;
}

.mm-footer-payments {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.mm-footer-payments .mm-pay-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 30px;
  padding: 4px 6px;
  border-radius: 5px;
  background: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
}

.mm-footer-payments .mm-pay-chip img {
  display: block;
  max-width: 100%;
  max-height: 22px;
  width: auto;
  height: auto;
  object-fit: contain;
}

@media (max-width: 768px) {
  .mm-footer-bottom-inner {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 20px;
    gap: 16px;
  }
  .mm-footer-legal { text-align: left; }
}


/* ---- Reduced motion ---- */
@media (prefers-reduced-motion: reduce) {
  #mm-footer *,
  #mm-footer *::before,
  #mm-footer *::after {
    transition-duration: 0.01ms !important;
  }
}


/* =============================================
   HEADER REBUILD — Hide Magazord native header
   Aplica em TODO o site — substituído por #mm-header custom
   ============================================= */

/* Hide ALL Magazord header elements — covers home, PDP, category, etc.
   Using wildcard on direct children catches any page-specific extras
   (breadcrumb bars, search overlays, category navs) that Magazord injects
   differently per page type. */
#tickerBar,
.ticker-bar,
header.ra-header > * {
  display: none !important;
}
/* Re-show .header-middle (needed for cart drawer inside it) */
header.ra-header > .header-middle {
  display: block !important;
}
/* Re-show .header-bottom on mobile — this is Magazord's native tabbar
   with cart/search/account icons. Its cart button opens the drawer natively
   (Magazord's own React handler). Hiding it broke mobile cart access. */
@media (max-width: 767px) {
  header.ra-header > .header-bottom {
    display: block !important;
    pointer-events: auto !important;
  }
  /* Mobile usa o drawer nativo do Magazord — nosso mm-h-cart delega pro
     link da tabbar via programmatic click, o React do Magazord popula o
     drawer. Pra isso funcionar, o container da tabbar (\`div.fixed.bottom-0\`
     que contém \`#cart-preview-area\`) PRECISA estar renderizado no DOM
     (não display:none). Mantemos em layout via position:fixed 0×0,
     mas VISUALMENTE invisível via visibility:hidden — o drawer interno
     (position:fixed full-screen) recebe opt-in específico pra ficar
     visível quando abrir. Os ícones da tabbar continuam hidden pelo
     cascade de visibility. */
  header.ra-header > :has(#cart-preview-area) {
    display: block !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 0 !important;
    height: 0 !important;
    overflow: visible !important;
    visibility: hidden !important;
    pointer-events: none !important;
    /* z-index 200 > #mm-header (z-100) pra drawer interno (z-9999 dentro
       desta stacking context) aparecer SOBRE o header quando aberto */
    z-index: 200 !important;
  }
  /* Opt-in pro drawer do carrinho. Seletor específico (filho direto de
     #cart-preview-area com classe z-[9999]) pra NÃO pegar drawers de
     favoritos/busca que são irmãos em outros paths do header. */
  header.ra-header #cart-preview-area > [class*="z-[9999]"],
  header.ra-header #cart-preview-area > [class*="z-[9999]"] * {
    visibility: visible !important;
    pointer-events: auto !important;
  }
  /* SVGs têm cascade próprio de visibility e escapam do visibility:hidden
     do pai (esses ícones apareciam clipados em x=-12 no canto top-left:
     lupa + sacola da tabbar nativa). display:none força esconder. */
  header.ra-header > :has(#cart-preview-area) svg {
    display: none !important;
  }
  /* Re-habilita SVGs dentro do drawer do carrinho (check, close, qty etc.) */
  header.ra-header #cart-preview-area > [class*="z-[9999]"] svg {
    display: initial !important;
    visibility: visible !important;
  }
}

/* .header-middle can't use display:none because the native cart drawer
   (.carrinho-rapido-ctn, position:fixed) lives inside it and must render.
   Lifting the drawer out of the DOM breaks React reconciliation on
   subsequent Magazord updates (adicionaQuantidade, deleteItem etc), so we
   must keep it in its React-owned parent. Instead we:
   1. Strip .header-middle from layout flow (abs 0×0 + overflow visible)
   2. Hide every descendant explicitly via \`* { visibility: hidden }\`
      (targeting \`*\` is required because SVG elements don't always inherit
       visibility from parent — they have presentation-attribute handling
       that can escape the cascade)
   3. Opt the drawer subtree back in */
header.ra-header > .header-middle {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 0 !important;
  height: 0 !important;
  /* overflow:hidden would clip the position:fixed cart drawer in some
     rendering paths (Chrome creates a clipping context when an abs-pos
     parent with overflow:hidden contains fixed descendants). We rely
     instead on display:none for SVGs and visibility:hidden cascade to
     hide non-drawer descendants. */
  overflow: visible !important;
  pointer-events: none !important;
  visibility: hidden !important;
  margin: 0 !important;
  padding: 0 !important;
}
/* Belt + suspenders: force every descendant hidden via visibility cascade.
   NOTE: we CAN'T use \`opacity: 0\` here — opacity cascades multiplicatively
   (parent × child) and cannot be "overridden" by a descendant setting
   opacity: 1, so the cart drawer would render totally transparent. Stick
   to visibility which IS overridable per-element. */
header.ra-header > .header-middle,
header.ra-header > .header-middle * {
  visibility: hidden !important;
}
/* Hide non-drawer SVGs via display:none (SVG elements can escape parent
   visibility cascade due to presentation-attribute semantics). */
header.ra-header > .header-middle svg,
header.ra-header > .header-middle svg * {
  display: none !important;
}
/* Opt back in only the cart drawer and its subtree — NOT any siblings of
   the drawer (logo, icons, nav etc were replaced by #mm-header). */
header.ra-header > .header-middle .carrinho-rapido-ctn,
header.ra-header > .header-middle .carrinho-rapido-ctn * {
  visibility: visible !important;
  pointer-events: auto !important;
}
/* SVG inside the drawer (close X, qty +/-, trash) — override the blanket
   display:none rule above so our drawer SVGs render. */
header.ra-header > .header-middle .carrinho-rapido-ctn svg,
header.ra-header > .header-middle .carrinho-rapido-ctn svg * {
  display: initial !important;
  visibility: visible !important;
}
/* Ensure the drawer is fixed-positioned and high z-index so it paints above
   our #mm-header (z-index 100) and custom scrim (150). */
.carrinho-rapido-ctn {
  position: fixed !important;
  z-index: 200 !important;
  /* Default: off-screen. Magazord's React adds .open-cart on add-to-cart
     which normally shows the drawer — we override that to stay hidden.
     Only our .mm-drawer-open class (added by openCartDrawer JS) shows it. */
  transform: translateX(110%) !important;
  transition: transform 320ms cubic-bezier(0.16, 1, 0.3, 1) !important;
}
.carrinho-rapido-ctn.mm-drawer-open {
  transform: translateX(0) !important;
}

header.ra-header {
  min-height: 0 !important;
  max-height: 0 !important;
  height: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
  overflow: visible !important;
  position: relative !important;
  z-index: auto !important;
  border: none !important;
  box-shadow: none !important;
  pointer-events: none !important; /* prevent Magazord React from intercepting taps */
}
/* Cart drawer pointer events — ONLY when we've explicitly opened it.
   Without this guard, the off-screen drawer (transform:translateX(110%))
   still intercepts clicks because Tailwind sets position:fixed + inset-y-0
   and our old rule forced pointer-events:auto always. */
header.ra-header .carrinho-rapido-ctn.mm-drawer-open,
header.ra-header .carrinho-rapido-ctn.mm-drawer-open * {
  pointer-events: auto !important;
}

body {
  /* 168 = 32 topbar + 88 main + 48 nav (Phase 2) */
  padding-top: var(--mm-header-total, 168px);
}
@media (max-width: 767px) {
  body {
    padding-top: var(--mm-header-total-mobile, 92px);
  }
}

/* =============================================
   ATENDIMENTO PAGE — premium block inside .title-content
   ============================================= */
.atendimento .title-content h1 {
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: 32px;
  font-weight: 700;
  color: #333333;
  margin: 0 0 12px;
  letter-spacing: -0.01em;
}
.atendimento .title-content .mm-atd-lead {
  font-size: 16px;
  line-height: 1.6;
  color: #333333;
  margin: 0 0 28px;
  max-width: 640px;
  font-family: 'Montserrat', sans-serif;
}
.atendimento .title-content .mm-atd-channels {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 40px;
  max-width: 720px;
}
.atendimento .title-content .mm-atd-whatsapp {
  display: flex !important;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: #25D366;
  color: #ffffff !important;
  text-decoration: none !important;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  transition: background 0.2s;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.2);
}
.atendimento .title-content .mm-atd-whatsapp:hover {
  background: #1FB755;
  color: #ffffff !important;
}
.atendimento .title-content .mm-atd-whatsapp svg {
  flex-shrink: 0;
}
.atendimento .title-content .mm-atd-whatsapp-label {
  flex: 1;
}
.atendimento .title-content .mm-atd-whatsapp-number {
  font-size: 14px;
  opacity: 0.9;
  letter-spacing: 0.02em;
  font-weight: 500;
}
.atendimento .title-content .mm-atd-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding: 28px;
  background: #F2F2F2;
  border-radius: 8px;
  border: 1px solid #E6E6E6;
}
.atendimento .title-content .mm-atd-info-item strong {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #4b664a;
  margin-bottom: 10px;
}
.atendimento .title-content .mm-atd-info-item span,
.atendimento .title-content .mm-atd-info-item a {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #333333;
  line-height: 1.8;
  text-decoration: none;
}
.atendimento .title-content .mm-atd-info-item a:hover {
  color: #4b664a;
}
.atendimento .title-content .mm-atd-form-title {
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  color: #333333;
  margin: 32px 0 16px;
  padding-top: 32px;
  border-top: 1px solid #E6E6E6;
}
@media (max-width: 600px) {
  .atendimento .title-content h1 { font-size: 26px; }
  .atendimento .title-content .mm-atd-info { grid-template-columns: 1fr; padding: 20px; }
  .atendimento .title-content .mm-atd-whatsapp { flex-direction: column; align-items: flex-start; }
  .atendimento .title-content .mm-atd-whatsapp-number { margin-left: 0; }
}

/* =============================================
   ADD-TO-CART POPUP — Madeira Mania minimalist redesign
   Brand: flat, olive #4b664a / CTA #1b7a45, radius system 4/8/12,
   zero gradientes, zero pastéis genéricos, shadows sutis.
   ============================================= */
.container-popup-add-carrinho {
  z-index: 999 !important;
}
.popup-adicionado-ao-carrinho.swal2-popup {
  border-radius: 12px !important;
  padding: 28px 24px 24px !important;
  max-width: 360px !important;
  width: calc(100% - 32px) !important;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08) !important;
  font-family: 'Poppins', system-ui, sans-serif !important;
  animation: mm-swal-pop 200ms ease-out both !important;
}
@keyframes mm-swal-pop {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Esconde o ícone nativo do SweetAlert2 (heavy, múltiplos anéis/linhas
   animadas que destoam do flat brand) e injeta um checkmark custom via
   ::before: círculo sólido olive 44px com check branco SVG. */
.popup-adicionado-ao-carrinho .swal2-icon { display: none !important; }
.popup-adicionado-ao-carrinho::before {
  content: '';
  display: block;
  width: 44px;
  height: 44px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background-color: #4b664a;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>");
  background-position: center;
  background-repeat: no-repeat;
}
/* Close X — removido (redundante com "Continuar comprando") */
.popup-adicionado-ao-carrinho .swal2-close { display: none !important; }
/* Title */
.popup-adicionado-ao-carrinho .swal2-title,
.popup-adicionado-ao-carrinho h2 {
  font-family: 'Libre Baskerville', Georgia, serif !important;
  font-size: 18px !important;
  font-weight: 700 !important;
  color: #252525 !important;
  letter-spacing: -0.005em !important;
  line-height: 1.3 !important;
  margin: 0 0 6px !important;
  padding: 0 !important;
}
/* Subtitle */
.popup-adicionado-ao-carrinho .swal2-html-container {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 13px !important;
  color: #666666 !important;
  margin: 0 0 20px !important;
  padding: 0 !important;
  line-height: 1.4 !important;
}
/* Botões empilhados — column-reverse coloca primário (último DOM) no topo */
.popup-adicionado-ao-carrinho .swal2-actions {
  flex-direction: column-reverse !important;
  gap: 8px !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  flex-wrap: nowrap !important;
}
.popup-adicionado-ao-carrinho .swal2-actions button {
  width: 100% !important;
  min-height: 44px !important;
  border-radius: 8px !important;
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  padding: 12px 16px !important;
  border: none !important;
  box-shadow: none !important;
  cursor: pointer !important;
  transition: background 150ms ease !important;
}
/* "Finalizar compra" — primário, solid CTA green, sem sombra (flat brand) */
.popup-adicionado-ao-carrinho .botao-finalizar-compra {
  background: #1b7a45 !important;
  color: #FFFFFF !important;
}
.popup-adicionado-ao-carrinho .botao-finalizar-compra:hover {
  background: #155a33 !important;
}
/* "Continuar comprando" — secundário minimalista, apenas texto */
.popup-adicionado-ao-carrinho .botao-continuar-comprando {
  background: transparent !important;
  color: #666666 !important;
  border: none !important;
  font-weight: 400 !important;
  min-height: 36px !important;
}
.popup-adicionado-ao-carrinho .botao-continuar-comprando:hover {
  background: transparent !important;
  color: #252525 !important;
  text-decoration: underline !important;
}

/* =============================================
   SWIPER NAVIGATION — minimal elegant arrows
   Replaces the default Swiper.js prev/next buttons with subtle,
   semi-transparent pill arrows that don't compete with content.
   ============================================= */
.swiper-button-prev,
.swiper-button-next {
  width: 36px !important;
  height: 36px !important;
  border-radius: 50% !important;
  background: rgba(255, 255, 255, 0.85) !important;
  border: 1px solid rgba(0, 0, 0, 0.06) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06) !important;
  color: #333 !important;
  backdrop-filter: blur(4px) !important;
  -webkit-backdrop-filter: blur(4px) !important;
  transition: opacity 200ms, background 200ms, box-shadow 200ms !important;
  opacity: 0 !important;
}
/* Show on hover of the parent swiper */
.swiper:hover .swiper-button-prev,
.swiper:hover .swiper-button-next,
.swiper-container:hover .swiper-button-prev,
.swiper-container:hover .swiper-button-next {
  opacity: 1 !important;
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
  background: #ffffff !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}
/* Replace the Swiper icon font with clean chevron SVGs */
.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 14px !important;
  font-weight: 700 !important;
  color: #333 !important;
}

/* =============================================
   TRUST BAR — informativos-desktop-3 (componente dynamic-banner)
   Imagem deve ir full-bleed (de cabo a rabo) no desktop.
   Estrutura real (probed 2026-04-09):
     #componente-id-XjCRvyXQ0p (container-row, width 1440)
       └ .swiper.swiper-componente-id-XjCRvyXQ0p.dynamic-banner.container (max-width 1240, margin 0 100px, padding 0 10px)
           └ .swiper-initialized (width 1220, overflow: hidden) <-- clips any negative-margin trick
               └ .swiper-wrapper
                   └ .swiper-slide.banner-img.banner-promo (padding 0 10px)
                       └ figure
                           └ img (max-width 100%)
   Fix: neutralizar max-width, margins e paddings da container hard-coded
   pelo Magazord e forçar img 100vw.
   ============================================= */
#componente-id-XjCRvyXQ0p,
.componente-id-XjCRvyXQ0p {
  width: 100vw !important;
  max-width: 100vw !important;
  margin-left: calc(50% - 50vw) !important;
  margin-right: calc(50% - 50vw) !important;
  margin-top: 0 !important;
  padding: 0 !important;
}
/* The inner swiper with .container + dynamic-banner class has hard-coded max-width 1240 and margin 100px */
.swiper-componente-id-XjCRvyXQ0p,
.swiper-componente-id-XjCRvyXQ0p.container,
.swiper-componente-id-XjCRvyXQ0p.dynamic-banner {
  width: 100% !important;
  max-width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.swiper-componente-id-XjCRvyXQ0p .swiper,
.swiper-componente-id-XjCRvyXQ0p .swiper-wrapper {
  width: 100% !important;
  max-width: 100% !important;
  overflow: hidden !important; /* Swiper needs overflow:hidden but now container is full-width */
}
.swiper-componente-id-XjCRvyXQ0p .swiper-slide,
.swiper-componente-id-XjCRvyXQ0p .swiper-slide.banner-img,
.swiper-componente-id-XjCRvyXQ0p .swiper-slide.banner-promo {
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important; /* kill the 10px inner gutters */
  flex-shrink: 0;
}
.swiper-componente-id-XjCRvyXQ0p figure {
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  border-radius: 0 !important; /* override the global.css figure border-radius 10% */
  line-height: 0;
}
.swiper-componente-id-XjCRvyXQ0p img {
  width: 100% !important;
  max-width: 100% !important;
  height: auto !important;
  display: block !important;
  margin: 0 !important;
  padding: 0 !important;
  object-fit: cover;
}
`,document.head.appendChild(g)}})(),(function(){if(!document.getElementById("mm-produto-css")){var g=document.createElement("style");g.id="mm-produto-css",g.textContent=`/* =============================================
   PRODUTO CSS - Madeira Mania (Mobile)
   Redesign v2 — Validado por agentes UI/UX

   Seletores validados via Playwright em 13/02/2026
   Todos com !important + prefixo de alta especificidade

   Paleta:
   - Verde base: #4b664a
   - Borda: #dbe1db
   - Borda sutil: #e8ece8
   - Texto: #1a1a1a
   - Texto sec: #555
   - Fundo seção: #f7f8f7
   ============================================= */

@media (max-width: 768px) {


  /* ==========================================
     0. CONTAINER — Corrigir overflow horizontal
     ========================================== */

  #produto-react-app {
    overflow-x: hidden !important;
  }


  /* 0b. Removido: \`.ra-produto { padding-left: 0 }\` deixava o título e
     outros textos colados na borda esquerda (assimétrico com o padding
     direito de 8px). Gallery edge-to-edge já funciona via #block-imagem
     margin-left: -8 + width: calc(100% + 16px), mantendo padding simétrico
     do container (8/8) e estendendo a imagem pros dois lados da viewport. */

  /* ==========================================
     0c. ABSORVIDO DE CA-9 (Arredonda img produto)
     ========================================== */

  .gallery-main img {
    border-radius: 2rem !important;
  }

  .gallery-main .swiper-slide {
    border-radius: 2rem !important;
  }


  /* ==========================================
     1. GALERIA - Full-bleed edge-to-edge
     ========================================== */

  #produto-react-app #block-imagem {
    margin-left: -8px !important;
    margin-right: -8px !important;
    width: calc(100% + 16px) !important;
  }

  #produto-react-app .gallery-container {
    max-width: 100vw !important;
    overflow: hidden !important;
  }

  #produto-react-app .gallery-main {
    width: 100% !important;
    max-width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  /* Esconder setas de navegação — swipe natural */
  #produto-react-app .gallery-main > .button-prev,
  #produto-react-app .gallery-main > .button-next {
    display: none !important;
  }

  /* Esconder dots do swiper — substituído por counter textual #mm-gallery-counter */
  #produto-react-app .swiper-pagination {
    display: none !important;
  }


  /* ==========================================
     2. BREADCRUMB
     ========================================== */

  #produto-react-app .breadcrumb a {
    color: #888 !important;
  }

  #produto-react-app .breadcrumb .separator {
    color: #ccc !important;
  }

  #produto-react-app .bread-produto .text-secondary-700 {
    color: #555 !important;
    font-weight: 500 !important;
  }


  /* ==========================================
     3. TÍTULO
     ========================================== */

  #produto-react-app h1.text-xl {
    font-size: 22px !important;
    line-height: 1.3 !important;
    color: #1a1a1a !important;
    letter-spacing: -0.3px !important;
  }

  /* Estrelas — discretas quando vazio */
  #produto-react-app .avaliacoes .star-back {
    opacity: 0.4 !important;
  }


  /* ==========================================
     4. PREÇO
     ========================================== */

  #produto-react-app .preco-principal {
    max-width: 100% !important;
  }

  /* Badge desconto — verde sólido */
  #produto-react-app .porcentagem-desconto,
  #produto-react-app [class*="badge-desconto"],
  #produto-react-app [class*="desconto-badge"] {
    background: #2e7d32 !important;
    color: #ffffff !important;
    font-weight: 700 !important;
    border-radius: 6px !important;
    padding: 3px 8px !important;
    font-size: 13px !important;
  }

  /* Preço antigo */
  #produto-react-app .preco-de,
  #produto-react-app [class*="preco-de"] {
    color: #999 !important;
    font-size: 14px !important;
  }

  /* Parcelamento */
  #produto-react-app .valor-parcelado {
    font-size: 14px !important;
    color: #555 !important;
  }

  /* Link "Mais formas de pagamento" */
  #produto-react-app .form-pag-link {
    border-color: #dbe1db !important;
    color: #4b664a !important;
    border-radius: 8px !important;
    font-size: 13px !important;
    font-weight: 500 !important;
  }


  /* ==========================================
     5. VARIAÇÕES — Swatches + Pills
     ========================================== */

  /* Swatches de cor — arredondar apenas a imagem */
  #produto-react-app .variation-color-swatch-image {
    border-radius: 16px !important;
  }

  #produto-react-app .variation-pill-label-value {
    font-weight: 600 !important;
    color: #1a1a1a !important;
  }

  /* Pills — formato pill verdadeiro */
  #produto-react-app .variation-pill {
    border-radius: 9999px !important;
    min-width: 80px !important;
    min-height: 44px !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0 20px !important;
    transition: all 0.2s ease !important;
  }

  /* Pill NÃO selecionado */
  #produto-react-app .variation-pill[tabindex="-1"] {
    border: 1.5px solid #dbe1db !important;
    background: #ffffff !important;
    color: #333 !important;
  }

  /* Pill selecionado — manter pill + verde do Magazord */
  #produto-react-app .variation-pill[tabindex="0"] {
    border-radius: 9999px !important;
  }


  /* ==========================================
     6. SEÇÃO DE COMPRA — Layout compacto
     ========================================== */

  #produto-react-app .informacoes-compra-produto {
    gap: 8px !important;
    padding-top: 2px !important;
    padding-bottom: 12px !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    overflow-x: hidden !important;
  }

  /* Eliminar gap do grid wrapper entre galeria e info */
  #produto-react-app > .grid {
    gap: 0 !important;
    padding-top: 0 !important;
  }

  /* Colapsar primeiro filho vazio do info (breadcrumb oculto no mobile) */
  #produto-react-app .informacoes-compra-produto > .flex.flex-col.gap-space-16:first-child {
    gap: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    display: none !important;
  }

  /* Separador antes das derivações */
  #produto-react-app .derivacoes-produto {
    border-top: 1px solid #f0f0f0 !important;
    padding-top: 10px !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }


  /* ==========================================
     7. QUANTIDADE
     ========================================== */

  #produto-react-app #area-comprar {
    gap: 12px !important;
  }

  #produto-react-app .quantidade {
    border-radius: 10px !important;
    border-color: #dbe1db !important;
    height: 44px !important;
  }

  #produto-react-app .quantidade button,
  #produto-react-app .quantidade input {
    min-width: 40px !important;
    min-height: 42px !important;
    font-size: 16px !important;
  }


  /* ==========================================
     8. BOTÕES DE AÇÃO — Linha compacta
     O JS cria um container #mm-action-row
     com Favoritos (ícone) + WhatsApp + Share (ícone)
     ========================================== */

  /* Row criada pelo JS — estilos globais fora do @media */

  /* Favoritos — ícone compacto */
  #produto-react-app #mm-action-row .salvar-favoritos {
    flex: 0 0 auto !important;
    width: auto !important;
  }

  #produto-react-app #mm-action-row .salvar-favoritos button {
    width: 46px !important;
    min-width: 46px !important;
    height: 42px !important;
    padding: 0 !important;
    border: 1.5px solid #dbe1db !important;
    border-radius: 10px !important;
    background: #ffffff !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  #produto-react-app #mm-action-row .salvar-favoritos button svg {
    width: 20px !important;
    height: 20px !important;
    color: #777 !important;
    stroke: #777 !important;
  }

  /* Compartilhar — ícone compacto */
  #produto-react-app #mm-action-row .compartilhar-produto {
    flex: 0 0 auto !important;
    width: auto !important;
  }

  #produto-react-app #mm-action-row .compartilhar-produto button {
    width: 46px !important;
    min-width: 46px !important;
    height: 42px !important;
    padding: 0 !important;
    border: 1.5px solid #dbe1db !important;
    border-radius: 10px !important;
    background: #ffffff !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  #produto-react-app #mm-action-row .compartilhar-produto button svg {
    width: 18px !important;
    height: 18px !important;
    color: #777 !important;
  }

  /* Fallback: se JS não rodou, manter botões decentes */
  #produto-react-app .salvar-favoritos button {
    border: 1.5px solid #dbe1db !important;
    border-radius: 10px !important;
    color: #555 !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    padding: 10px 16px !important;
    background: #ffffff !important;
  }

  #produto-react-app .informacoes-compra-produto > .flex.gap-space-4 {
    width: 100% !important;
  }

  #produto-react-app .compartilhar-produto {
    width: 100% !important;
    flex: 1 !important;
  }

  #produto-react-app .compartilhar-produto button {
    width: 100% !important;
    border: 1.5px solid #dbe1db !important;
    border-radius: 10px !important;
    color: #555 !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    padding: 10px 16px !important;
    background: #ffffff !important;
    justify-content: center !important;
  }


  /* ==========================================
     9. FRETE
     ========================================== */

  #produto-react-app .calculo-frete {
    border-top: 1px solid #f0f0f0 !important;
    padding-top: 14px !important;
  }

  #produto-react-app .label-frete span {
    font-weight: 500 !important;
    color: #1a1a1a !important;
  }

  #produto-react-app .calculo-frete input {
    border-radius: 10px !important;
    border-color: #dbe1db !important;
    font-size: 15px !important;
  }

  #produto-react-app .calculo-frete a {
    color: #4b664a !important;
    font-size: 13px !important;
  }

  #produto-react-app .area-calculo button {
    border-radius: 10px !important;
    font-weight: 500 !important;
  }


  /* ==========================================
     10. WHATSAPP FLUTUANTE
     Mover acima da sticky bar + bottom nav — SÓ NA PDP
     Sticky bar: bottom 60px, h=79px → topo em 139px
     Escopo via body:has(#produto-react-app) pra NÃO afetar outras páginas
     mobile (home, categoria, etc.) onde não há sticky bar.
     ========================================== */

  body:has(#produto-react-app) #popup-msg-whats {
    bottom: 152px !important;
  }


  /* ==========================================
     11. STICKY BAR
     ========================================== */

  /* PDP Mobile: WA e back-to-top acima da sticky bar
     Bottom nav: 60px + Sticky bar: 77px = 137px → WA a 152px, BTT a 214px
     Escopo via body:has(#produto-react-app) — fora da PDP usa o default
     de global.css (bottom: 75px) acima só do bottom nav. */
  body:has(#produto-react-app) #mm-floating-whatsapp {
    bottom: 152px !important;
  }

  body:has(#produto-react-app) .back-to-top {
    bottom: 214px !important;
  }

  #produto-react-app .comprar-fixo {
    position: fixed !important;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
    padding: 10px 16px !important;
    padding-bottom: max(10px, env(safe-area-inset-bottom)) !important;
    box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.08) !important;
    background: #ffffff !important;
    border-top: 1px solid #f0f0f0 !important;
    z-index: 99 !important;
    gap: 12px !important;
  }

  #produto-react-app .comprar-fixo .price-fixed {
    flex-shrink: 0 !important;
  }

  #produto-react-app .comprar-fixo > button {
    border-radius: 12px !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    padding: 14px 24px !important;
    flex: 1 !important;
    max-width: 200px !important;
  }

  /* Preço riscado na sticky bar */
  #produto-react-app .comprar-fixo #mm-sticky-old-price {
    text-decoration: line-through !important;
    color: #999 !important;
    font-size: 11px !important;
    line-height: 1.2 !important;
    display: block !important;
    margin-bottom: 1px !important;
  }


  /* ==========================================
     12. DESCRIÇÃO — Tipografia
     ========================================== */

  #pagina-produto-react-app .descricao-produto.accordion {
    border-top: 1px solid #f0f0f0 !important;
  }

  #pagina-produto-react-app .descricao-produto h2,
  #pagina-produto-react-app .descricao-produto h3 {
    font-size: 18px !important;
    color: #1a1a1a !important;
    margin-top: 20px !important;
    margin-bottom: 10px !important;
    line-height: 1.4 !important;
  }

  #pagina-produto-react-app .descricao-produto p {
    font-size: 15px !important;
    line-height: 1.7 !important;
    color: #444 !important;
  }

  #pagina-produto-react-app .descricao-produto li {
    font-size: 15px !important;
    line-height: 1.7 !important;
    color: #444 !important;
  }


  /* ==========================================
     13. ACCORDIONS — Separadores
     ========================================== */

  #pagina-produto-react-app .recomendacao-ctn-0.accordion,
  #pagina-produto-react-app .produtos-relacionados.accordion {
    border-top: 1px solid #f0f0f0 !important;
  }

  /* Ocultar avaliações vazias (0) em cross-sell e relacionados */
  .recomendacao-ctn-0 .average-rating[data-value="0.00"],
  .recomendacao-ctn-0 .average-rating[data-value="0.00"] ~ .qtd-aval,
  .produtos-relacionados .average-rating[data-value="0.00"],
  .produtos-relacionados .average-rating[data-value="0.00"] ~ .qtd-aval {
    display: none !important;
  }


  /* ==========================================
     14. AVALIAÇÕES — Verde
     ========================================== */

  .container-avaliacoes button,
  .container-avaliacoes a[class*="btn"] {
    background-color: #4b664a !important;
    border-color: #4b664a !important;
    border-radius: 12px !important;
    font-weight: 500 !important;
  }


  /* ==========================================
     15. TAGS + LINKS
     ========================================== */

  #pagina-produto-react-app [class*="tags"] a {
    color: #4b664a !important;
  }

}


/* =============================================
   REGRAS GLOBAIS (mobile + desktop)
   Fora do @media para aplicar em todos os viewports
   ============================================= */

/* Ocultar botão WhatsApp original (substituído por #mm-whatsapp-cta) */
#produto-react-app .exibe-botao-whatsapp {
  display: none !important;
}

/* Ocultar badge de desconto da galeria (% inconsistente com preço PIX) */
#produto-react-app .tag-1.tag-produto {
  display: none !important;
}

/* Reviews reformatados — reset do estilo original */
#produto-react-app .avaliacoes {
  display: flex !important;
  align-items: center !important;
}

/* WhatsApp CTA inline */
#produto-react-app #mm-whatsapp-cta {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;
  width: 100% !important;
  height: 44px !important;
  padding: 0 16px !important;
  background: #ffffff !important;
  color: #4b664a !important;
  border: 1.5px solid #4b664a !important;
  border-radius: 10px !important;
  text-decoration: none !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  font-family: inherit !important;
  transition: all 0.15s ease !important;
  cursor: pointer !important;
  -webkit-tap-highlight-color: transparent !important;
  box-sizing: border-box !important;
}

#produto-react-app #mm-whatsapp-cta:hover {
  background: #f7f8f7 !important;
}

/* Action row — flex em todos os viewports */
#produto-react-app #mm-action-row {
  display: flex !important;
  gap: 8px !important;
  align-items: stretch !important;
  width: 100% !important;
}


/* =============================================
   DESKTOP OVERRIDES (min-width: 769px)
   Ajustes para layout 2-colunas do desktop
   ============================================= */

@media (min-width: 769px) {

  /* Limitar largura dos elementos injetados na coluna de info */
  #produto-react-app #mm-trust-badges,
  #produto-react-app #mm-action-row,
  #produto-react-app #mm-whatsapp-cta,
  #produto-react-app #mm-frete-progress,
  #produto-react-app #mm-trust-block,
  #produto-react-app #mm-inline-payments,
  #produto-react-app #mm-mini-specs,
  #produto-react-app #mm-envio-badge,
  #produto-react-app #mm-stock-indicator,
  #produto-react-app #mm-brand,
  #produto-react-app .calculo-frete {
    max-width: 36rem !important;
  }

  /* WhatsApp CTA — largura automática no desktop */
  #produto-react-app #mm-whatsapp-cta {
    width: fit-content !important;
    padding: 0 24px !important;
  }

  /* Action row — layout e botões no desktop */
  #produto-react-app #mm-action-row {
    gap: 8px !important;
  }

  #produto-react-app #mm-action-row .salvar-favoritos,
  #produto-react-app #mm-action-row .compartilhar-produto {
    flex: 0 0 auto !important;
    width: auto !important;
  }

  #produto-react-app #mm-action-row .salvar-favoritos button,
  #produto-react-app #mm-action-row .compartilhar-produto button {
    width: 44px !important;
    min-width: 44px !important;
    height: 42px !important;
    padding: 0 !important;
    border: 1.5px solid #dbe1db !important;
    border-radius: 10px !important;
    background: #ffffff !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    cursor: pointer !important;
    color: #777 !important;
  }

  #produto-react-app #mm-action-row .salvar-favoritos button:hover,
  #produto-react-app #mm-action-row .compartilhar-produto button:hover {
    background: #f7f8f7 !important;
  }

  /* Trust badges — alinhar à esquerda no desktop */
  #produto-react-app #mm-trust-badges {
    justify-content: flex-start !important;
  }

  /* Desktop sticky bar */
  #mm-desktop-sticky button {
    transition: background 0.15s ease !important;
  }
  #mm-desktop-sticky button:hover {
    background: #3d5340 !important;
  }

}


/* =============================================
   DESKTOP PDP — Otimizações de conversão
   Compactar a coluna de info para CTA no fold
   ============================================= */

@media (min-width: 769px) {

  /* Reduzir gap da área de compra desktop (Magazord default gap-space-40 = 40px) */
  #produto-react-app .informacoes-compra-produto,
  #produto-react-app .informacoes-compra-produto.gap-space-40 {
    gap: 12px !important;
    row-gap: 12px !important;
  }

  /* Eliminar gap entre avaliações e próximo elemento */
  #produto-react-app .informacoes-compra-produto > .flex.flex-col.gap-space-16:first-child {
    gap: 4px !important;
  }

  /* Compactar derivações */
  #produto-react-app .derivacoes-produto {
    padding-top: 8px !important;
    padding-bottom: 4px !important;
  }

  /* Mini specs mais compactos */
  #produto-react-app #mm-mini-specs {
    padding: 4px 0 !important;
  }

  /* Botão comprar — mais destacado */
  #produto-react-app #area-comprar button[class*="bg-primary"] {
    font-size: 16px !important;
    font-weight: 600 !important;
    padding: 14px 32px !important;
    border-radius: 12px !important;
  }

  /* Trust block full-width desktop */
  #mm-trust-block {
    max-width: 1200px !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  /* Action row desktop — ícones pequenos, inline */
  #produto-react-app #mm-action-row {
    gap: 8px !important;
  }

  /* WhatsApp CTA desktop — menos destaque, ação secundária */
  #produto-react-app #mm-whatsapp-cta {
    height: 38px !important;
    font-size: 13px !important;
  }

}
`,document.head.appendChild(g)}})(),(function(){if(!document.getElementById("mm-variacoes-css")){var g=document.createElement("style");g.id="mm-variacoes-css",g.textContent=`/* ============================================
   VARIÁVEIS CSS CUSTOMIZÁVEIS
   ============================================ */
@media (min-width: 1024px) {
      .h-\\[650px\\],
      [class*="h-[650px]"] {
          height: auto !important;
          max-height: 650px !important;
      }

      .gallery-main .swiper-slide img {
          max-height: 650px !important;
          width: auto !important;
          height: auto !important;
          object-fit: contain !important;
      }

      .gallery-main .swiper,
      [class*="swiper\\]:h-\\[650px\\]"] .swiper {
          height: auto !important;
          max-height: 650px !important;
      }

      .gallery-main .swiper-slide img {
          width: 100% !important;
          height: auto !important;
          object-fit: contain !important;
      }

      

      .tags-info-product {
          position: absolute !important;
          top: 8px !important;
          left: 8px !important;
          z-index: 10 !important;
          margin: 0 !important;
      }

      .gallery-main .swiper {
          height: auto !important;
      }

      .gallery-main .swiper-wrapper {
          height: auto !important;
          align-items: center !important;
      }

      .gallery-main .swiper-slide {
          height: auto !important;
      }

      .gallery-main .swiper-slide img {
          width: 100% !important;
          height: auto !important;
          object-fit: contain !important;
      }

      .tags-info-product span {
          border-radius: 999px !important;
      }
      .gallery-main .swiper-slide img {
          object-fit: cover !important;
      }
  }

.tag-value {
    border-radius: 999px !important;
}

:root {
    /* Cores principais - MINIMALISTA */
    --pill-color-selected: rgb(75, 102, 74);
    --pill-color-selected-hover: rgb(65, 92, 64);
    --pill-color-normal: #FFFFFF;
    --pill-color-normal-hover: rgb(249, 250, 251);
    --pill-color-disabled: rgb(245, 245, 245);

    /* Cores de texto */
    --pill-text-selected: #FFFFFF;
    --pill-text-normal: rgb(55, 65, 81);
    --pill-text-disabled: #9CA3AF;

    /* Borders */
    --pill-border-selected: rgb(75, 102, 74);
    --pill-border-normal: rgb(209, 213, 219);
    --pill-border-disabled: rgb(229, 231, 235);

    /* Espaçamentos */
    --pill-padding-vertical: 12px;
    --pill-padding-horizontal: 20px;
    --pill-gap: 12px;
    --pill-group-gap: 16px;

    /* Tipografia */
    --pill-font-size: 15px;
    --pill-font-weight: 500;
    --pill-font-weight-selected: 600;
    --pill-line-height: 1.4;

    /* Border radius - design arredondado */
    --pill-radius: 40px;

    /* Transições */
    --pill-transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    /* Shadows */
    --pill-shadow-normal: 0 1px 2px rgba(0, 0, 0, 0.05);
    --pill-shadow-hover: 0 2px 4px rgba(0, 0, 0, 0.1);
    --pill-shadow-selected: 0 2px 4px rgba(75, 102, 74, 0.15);
    --pill-shadow-focus: 0 0 0 3px rgba(75, 102, 74, 0.2);

    /* ============================================
       VARIÁVEIS ESPECÍFICAS PARA CORES (IMAGENS)
       ============================================ */
    --color-swatch-size: 128px;
    --color-swatch-size-mobile: 96px;
    --color-image-size: 128px;
    --color-image-size-mobile: 96px;
    --color-border-width: 2px;
    --color-border-width-selected: 3px;
    --color-border-radius: 8px;
}

/* ============================================
   RESET E BASE STYLES
   ============================================ */
.product-variations-pills-container,
.product-variations-pills-container * {
    box-sizing: border-box;
}

/* ============================================
   GRUPOS DE VARIAÇÃO - LAYOUT MINIMALISTA
   ============================================ */
.variation-pill-group {
    margin-bottom: var(--pill-group-gap);
}

.variation-pill-group:last-child {
    margin-bottom: 0;
}

.variation-pill-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 400;
    color: #6B7280;
    margin-bottom: 12px;
    letter-spacing: 0.01em;
}

/* Valor selecionado ao lado do label */
.variation-pill-label-value {
    font-weight: 600;
    color: #1F2937;
}

.variation-pill-required {
    color: #EF4444;
    margin-left: 2px;
}

/* ============================================
   CONTAINER DE PILLS E SWATCHES
   ============================================ */
.variation-pills-container {
    display: flex;
    flex-wrap: wrap;
    gap: var(--pill-gap);
    align-items: center;
}

/* ============================================
   PILLS PADRÃO - ESTRUTURA HTML SEMÂNTICA
   ============================================ */

/* Input radio escondido mas acessível */
.variation-pill-input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

/* Label como pill visual (para variações SEM imagem) */
.variation-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: var(--pill-padding-vertical) var(--pill-padding-horizontal);
    font-size: var(--pill-font-size);
    font-weight: var(--pill-font-weight);
    line-height: var(--pill-line-height);
    color: var(--pill-text-normal);
    background-color: var(--pill-color-normal);
    border: 2px solid var(--pill-border-normal);
    border-radius: var(--pill-radius);
    cursor: pointer;
    transition: var(--pill-transition);
    user-select: none;
    box-shadow: var(--pill-shadow-normal);
    min-height: 44px;
    text-align: center;
    white-space: nowrap;
    position: relative;
}

.variation-pill:hover {
    background-color: var(--pill-color-normal-hover);
    border-color: var(--pill-color-selected);
    box-shadow: var(--pill-shadow-hover);
    transform: translateY(-1px);
}

.variation-pill-input:checked + .variation-pill {
    background-color: var(--pill-color-selected);
    border-color: var(--pill-border-selected);
    color: var(--pill-text-selected);
    font-weight: var(--pill-font-weight-selected);
    box-shadow: var(--pill-shadow-selected);
}

.variation-pill-input:checked + .variation-pill:hover {
    background-color: var(--pill-color-selected-hover);
    transform: translateY(0);
}

.variation-pill-input:focus + .variation-pill {
    outline: 3px solid var(--pill-color-selected);
    outline-offset: 2px;
    box-shadow: var(--pill-shadow-focus);
}

.variation-pill-input:focus:not(:focus-visible) + .variation-pill {
    outline: none;
}

.variation-pill-input:disabled + .variation-pill {
    background-color: var(--pill-color-disabled);
    border-color: var(--pill-border-disabled);
    color: var(--pill-text-disabled);
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
}

/* ============================================
   COLOR SWATCHES - IMAGENS GRANDES
   ============================================ */

/* Container específico para swatches de cor */
.variation-swatches-container {
    display: flex;
    flex-wrap: wrap;
    gap: var(--pill-gap);
    align-items: flex-start;
}

/* Wrapper do swatch (contém imagem + nome no mobile) */
.variation-color-swatch-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: var(--color-swatch-size);
    cursor: pointer;
    position: relative; /* Para o tooltip */
}

/* Label como swatch de cor (quadrado com imagem) */
.variation-color-swatch {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--color-swatch-size);
    height: var(--color-swatch-size);
    padding: 0;
    background-color: #FFFFFF;
    border: var(--color-border-width) solid var(--pill-border-normal);
    border-radius: var(--color-border-radius);
    cursor: pointer;
    transition: var(--pill-transition);
    user-select: none;
    position: relative;
    overflow: hidden; /* Mantém para a imagem */
}

/* Imagem dentro do swatch */
.variation-color-swatch-image {
    width: var(--color-image-size);
    height: var(--color-image-size);
    object-fit: cover;
    display: block;
    border-radius: calc(var(--color-border-radius) - 2px);
}

/* Hover state - Desktop only */
@media (hover: hover) and (pointer: fine) {
    .variation-color-swatch-wrapper:hover .variation-color-swatch {
        border-color: var(--pill-color-selected);
        box-shadow: var(--pill-shadow-hover);
        transform: scale(1.03);
    }
}

/* Selected state */
.variation-pill-input:checked + .variation-color-swatch-wrapper .variation-color-swatch {
    border-color: var(--pill-border-selected);
    border-width: var(--color-border-width-selected);
    box-shadow: 0 0 0 1px var(--pill-border-selected);
}

.variation-pill-input:checked + .variation-color-swatch-wrapper:hover .variation-color-swatch {
    transform: scale(1);
}

/* Focus state */
.variation-pill-input:focus + .variation-color-swatch-wrapper .variation-color-swatch {
    outline: 3px solid var(--pill-color-selected);
    outline-offset: 2px;
}

.variation-pill-input:focus:not(:focus-visible) + .variation-color-swatch-wrapper .variation-color-swatch {
    outline: none;
}

/* Disabled state */
.variation-pill-input:disabled + .variation-color-swatch-wrapper {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
}

.variation-pill-input:disabled + .variation-color-swatch-wrapper .variation-color-swatch::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: #EF4444;
    transform: rotate(-45deg);
}

/* ============================================
   NOME DA COR - MOBILE ONLY
   ============================================ */
.variation-color-swatch-name {
    display: none; /* Escondido no desktop */
    width: 100%;
    font-size: 11px;
    font-weight: 500;
    color: #374151;
    text-align: center;
    line-height: 1.3;
    
    /* Truncamento de texto */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/* Nome da cor quando selecionado */
.variation-pill-input:checked + .variation-color-swatch-wrapper .variation-color-swatch-name {
    font-weight: 600;
    color: var(--pill-color-selected);
}

/* ============================================
   TOOLTIP - DESKTOP ONLY (no wrapper, não no swatch)
   ============================================ */
@media (hover: hover) and (pointer: fine) {
    .variation-color-swatch-wrapper[data-tooltip] {
        position: relative;
    }

    .variation-color-swatch-wrapper[data-tooltip]::before {
        content: attr(data-tooltip);
        position: absolute;
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%) translateY(4px);
        padding: 8px 14px;
        background-color: #1F2937;
        color: #FFFFFF;
        font-size: 13px;
        font-weight: 500;
        white-space: nowrap;
        border-radius: 6px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease;
        z-index: 1000;
        pointer-events: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .variation-color-swatch-wrapper[data-tooltip]::after {
        content: '';
        position: absolute;
        bottom: calc(100% + 2px);
        left: 50%;
        transform: translateX(-50%) translateY(4px);
        border: 6px solid transparent;
        border-top-color: #1F2937;
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease;
        z-index: 1000;
    }

    .variation-color-swatch-wrapper[data-tooltip]:hover::before,
    .variation-color-swatch-wrapper[data-tooltip]:hover::after {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) translateY(0);
    }
}

/* ============================================
   BADGE DE INDISPONÍVEL
   ============================================ */
.variation-pill-badge {
    display: inline-block;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-left: 6px;
    padding: 2px 6px;
    background: rgba(239, 68, 68, 0.1);
    color: #EF4444;
    border-radius: 12px;
}

/* ============================================
   LOADING STATE
   ============================================ */
.variation-pill-group.is-loading {
    position: relative;
    pointer-events: none;
    opacity: 0.6;
}

.variation-pill-group.is-loading::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border: 3px solid var(--pill-color-normal);
    border-top-color: var(--pill-color-selected);
    border-radius: 50%;
    animation: pill-spin 0.8s linear infinite;
}

@keyframes pill-spin {
    to { transform: rotate(360deg); }
}

/* ============================================
   RESPONSIVE DESIGN - MOBILE
   ============================================ */
@media (max-width: 767px) {
    .product-variations-pills-container {
        margin: 16px 0;
    }

    .variation-pill {
        font-size: 14px;
        padding: 10px 16px;
        min-height: 44px;
    }

    .variation-pills-container,
    .variation-swatches-container {
        gap: 10px;
    }

    /* Swatches menores no mobile */
    .variation-color-swatch-wrapper {
        width: var(--color-swatch-size-mobile);
    }

    .variation-color-swatch {
        width: var(--color-swatch-size-mobile);
        height: var(--color-swatch-size-mobile);
    }

    .variation-color-swatch-image {
        width: var(--color-image-size-mobile);
        height: var(--color-image-size-mobile);
    }

    /* Mostrar nome da cor no mobile */
    .variation-color-swatch-name {
        display: block;
    }

    /* Esconder tooltip no mobile (usa o nome visível) */
    .variation-color-swatch-wrapper[data-tooltip]::before,
    .variation-color-swatch-wrapper[data-tooltip]::after {
        display: none !important;
    }
}

/* ============================================
   ACESSIBILIDADE
   ============================================ */
.variation-pill-sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

@media (prefers-contrast: high) {
    .variation-pill,
    .variation-color-swatch {
        border-width: 3px;
    }
}

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* ============================================
   ESCONDER ELEMENTOS ANTIGOS
   ============================================ */
.sugestoes-cores,
.produtos-sugeridos,
.area-produtos-sugeridos,
#produto-react-app > div > div.informacoes-compra-produto.flex.flex-col.p-4.relative.gap-space-40 > div.flex.flex-col.gap-space-16 > div.flex.flex-col > div.text-secondary-700.text-xs.md\\:text-sm {
    display: none !important;
    visibility: hidden !important;
}`,document.head.appendChild(g)}})(),(function(){if(!document.getElementById("mm-cart-sheet-css")){var g=document.createElement("style");g.id="mm-cart-sheet-css",g.textContent=`/* =============================================
   CART MODAL (mobile + desktop) — Override Magazord

   DOM real (confirmado via Playwright + route intercept):

   MOBILE (.z-[9999] overlay):
     #cart-preview-area > .z-[9999] > .relative.z-[10]
       > .border-b.border-solid  ← header
       > .content-cart > .cart-item  ← items
       > .border-t.border-solid  ← footer (.title.boleto + .valor-pix + .finalizar-compra)

   DESKTOP (.carrinho-rapido-ctn drawer):
     #cart-preview-area > .carrinho-rapido-ctn > .carrinho-rapido
       > .top-carrinho.bg-cor-base  ← header
         > .meu-carrinho > a "Meu carrinho" + .icon-arrow-bottom
       > .content-cart
         > .cart-items > .cart-item  ← items
         > .area-finalizar-compra  ← footer
           > .formas.forma-pix (icon + "PIX" + .valor.valor-pix)
           > .formas.forma-cartao (icon + "Cartão" + .valor.valor-cartao)
           > a > button.finalizar-compra

   Estratégia:
     - #cart-preview-area ancestor comum → usado como scope principal
     - Rules específicas para estrutura diferente mobile vs desktop
     - .content-cart + .finalizar-compra são classes compartilhadas

   APIs Magazord (referência):
     - Zord.checkout.adicionaQuantidade(dataId)
     - Zord.checkout.removeQuantidade(dataId, true)
     - Zord.checkout.deleteItem(dataId)
     - .cart-remove-item[data-id] = ID interno do item
   ============================================= */

/* ==========================================================================
   TOPBAR: esconder topbar do site quando cart overlay está aberto (mobile)
   ========================================================================== */
@media (max-width: 768px) {
  header:has(.z-\\[9999\\].translate-x-\\[0\\] .content-cart) > .z-40:not(.fixed) {
    display: none !important;
  }
}

/* ==========================================================================
   DRAWER / SHEET: background cinza checkout

   IMPORTANTE: não usar selector \`#cart-preview-area > div\` porque existem
   DOIS elementos com id=cart-preview-area (bug do Magazord) e um deles é
   o wrapper do ícone do carrinho no header, cujo filho direto é o scrim
   fullscreen (.fixed.w-screen.h-screen.bg-black/40) que abre junto com o
   drawer. Pintar esse div cinza cobria a tela inteira.

   Escopamos só nos containers REAIS do drawer.
   ========================================================================== */
.content-cart,
.content-cart > .cart-item,
.carrinho-rapido-ctn,
.carrinho-rapido-ctn .carrinho-rapido {
  background: #F2F2F2 !important;
}

/* Mobile overlay (.z-[9999]) — esse wrapper tem o panel branco como filho */
.z-\\[9999\\] .relative.z-\\[10\\] {
  background: #F2F2F2 !important;
}

/* ==========================================================================
   HEADER: título serif + botão fechar redondo
   ========================================================================== */
#cart-preview-area .border-b.border-solid {
  background: #F2F2F2 !important;
  border-bottom: none !important;
  padding: 18px 20px !important;
  min-height: 60px !important;
}

#cart-preview-area .border-b.border-solid > button,
#cart-preview-area .border-b.border-solid > button span {
  font-family: 'Libre Baskerville', Georgia, serif !important;
  font-size: 18px !important;
  font-weight: 700 !important;
  color: #121212 !important;
  letter-spacing: -0.01em !important;
  background: transparent !important;
  box-shadow: none !important;
  padding: 0 !important;
}
#cart-preview-area .border-b.border-solid > button svg {
  display: none !important;
}

/* Fechar — círculo branco com sombra (touch target 44x44) */
#cart-preview-area .border-b.border-solid > div {
  width: 44px !important;
  height: 44px !important;
  background: #FFFFFF !important;
  border: 1px solid #E7E7E7 !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06) !important;
  cursor: pointer !important;
  padding: 0 !important;
  transition: border-color 150ms, box-shadow 150ms !important;
}
#cart-preview-area .border-b.border-solid > div:hover {
  border-color: #4B664A !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;
}
#cart-preview-area .border-b.border-solid > div:focus-visible {
  outline: 2px solid #4B664A !important;
  outline-offset: 2px !important;
}
#cart-preview-area .border-b.border-solid > div span {
  display: none !important;
}
#cart-preview-area .border-b.border-solid > div svg {
  width: 16px !important;
  height: 16px !important;
  color: #121212 !important;
  fill: #121212 !important;
}
#cart-preview-area .border-b.border-solid > div svg path {
  fill: #121212 !important;
}
#cart-preview-area .border-b.border-solid > div:hover svg,
#cart-preview-area .border-b.border-solid > div:hover svg path {
  color: #4B664A !important;
  fill: #4B664A !important;
}

/* ==========================================================================
   LISTA: padding + gap
   ========================================================================== */
.content-cart {
  padding: 14px 14px 16px !important;
  gap: 12px !important;
}

/* ==========================================================================
   CARD DO ITEM: white surface com border soft, shadow gentil, hover lift
   Referência visual: .mm-item do /checkout/cart, mas adaptado pro drawer
   (espaço mais restrito, 390-430px de largura).
   ========================================================================== */
.content-cart .cart-item {
  background: #FFFFFF !important;
  border: 1px solid #F0F0F0 !important;
  border-radius: 14px !important;
  padding: 14px !important;
  box-shadow: 0 1px 2px rgba(17, 24, 39, 0.04) !important;
  position: relative !important;
  box-sizing: border-box !important;
  max-width: 100% !important;
  transition:
    box-shadow 260ms cubic-bezier(0.16, 1, 0.3, 1),
    border-color 260ms cubic-bezier(0.16, 1, 0.3, 1) !important;
  animation: mm-cart-item-in 420ms cubic-bezier(0.16, 1, 0.3, 1) both !important;
}
/* Força a coluna de conteúdo (título + qty + preço) a respeitar bounds do
   item. Sem min-width:0, o flex-1 não encolhe e o conteúdo vaza pra fora
   da borda direita. box-sizing garante que padding count inside o width. */
.content-cart .cart-item > div.flex.items-center,
.content-cart .cart-item .flex-col.flex-1,
.content-cart .cart-item > div.flex > div.flex-col,
.content-cart .cart-item .prod-nome {
  min-width: 0 !important;
  box-sizing: border-box !important;
  max-width: 100% !important;
}
.content-cart .cart-item:hover {
  border-color: #E0E0E0 !important;
  box-shadow: 0 3px 10px rgba(17, 24, 39, 0.05) !important;
}

/* Stagger entrada dos cart items — 50ms deltas (MD motion guidelines) */
.content-cart .cart-item:nth-child(1) { animation-delay: 40ms !important; }
.content-cart .cart-item:nth-child(2) { animation-delay: 90ms !important; }
.content-cart .cart-item:nth-child(3) { animation-delay: 140ms !important; }
.content-cart .cart-item:nth-child(4) { animation-delay: 190ms !important; }
.content-cart .cart-item:nth-child(5) { animation-delay: 240ms !important; }
.content-cart .cart-item:nth-child(6) { animation-delay: 290ms !important; }

@keyframes mm-cart-item-in {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Thumbnail — 90×90 com bg soft e border radius consistente */
.content-cart .cart-item .prod-img {
  width: 90px !important;
  height: 90px !important;
  min-width: 90px !important;
  max-width: 90px !important;
  border-radius: 10px !important;
  overflow: hidden !important;
  background: #FAFAFA !important;
  border: 1px solid #F3F4F6 !important;
  flex-shrink: 0 !important;
}
.content-cart .cart-item .prod-img figure {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.content-cart .cart-item .prod-img img,
.content-cart .cart-item .prod-img a img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  transition: transform 480ms cubic-bezier(0.16, 1, 0.3, 1) !important;
}
.content-cart .cart-item:hover .prod-img img {
  transform: scale(1.04) !important;
}

/* Nome do produto — Poppins 15 medium, 2-line clamp */
.content-cart .cart-item .prod-nome,
.content-cart .cart-item .prod-nome a {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 15px !important;
  font-weight: 500 !important;
  color: #121212 !important;
  letter-spacing: -0.005em !important;
  line-height: 1.35 !important;
  display: -webkit-box !important;
  -webkit-line-clamp: 2 !important;
  -webkit-box-orient: vertical !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  margin: 0 !important;
  text-decoration: none !important;
  max-width: 100% !important;
  white-space: normal !important;
}
/* Magazord usa class="truncate" no desktop que força white-space:nowrap — override */
.content-cart .cart-item .prod-nome.truncate {
  white-space: normal !important;
  overflow: hidden !important;
  text-overflow: clip !important;
}

.content-cart .cart-item .derivacao {
  display: none !important;
}

/* Valor — Poppins 15 bold + tabular-nums */
.content-cart .cart-item .valor,
.content-cart .cart-item .valor span {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 15px !important;
  font-weight: 700 !important;
  color: #121212 !important;
  font-variant-numeric: tabular-nums !important;
  letter-spacing: -0.01em !important;
  white-space: nowrap !important;
}

/* ==========================================================================
   FOOTER: seção branca com radius top
   ========================================================================== */
#cart-preview-area .border-t.border-solid {
  background: #FFFFFF !important;
  border-top: 1px solid #E7E7E7 !important;
  border-radius: 16px 16px 0 0 !important;
  padding: 20px 22px 22px !important;
  box-shadow: 0 -6px 20px rgba(0, 0, 0, 0.04) !important;
}

/* Label "Valor total" */
#cart-preview-area .title.boleto {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 11px !important;
  color: #4B5563 !important;
  font-weight: 500 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
}

/* Valor total — Poppins sans pra casar com resto do drawer (antes era Libre
   Baskerville 24px, destoava de tudo e parecia "pra fora" do balanço visual).
   Desktop reserva serif só pro título "Meu Carrinho". */
#cart-preview-area .valor-pix,
#cart-preview-area .valor-pix span {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 20px !important;
  font-weight: 700 !important;
  color: #121212 !important;
  letter-spacing: -0.01em !important;
  font-variant-numeric: tabular-nums !important;
}

/* Texto de parcelamento */
#cart-preview-area .installment-total {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 12px !important;
  color: #4B5563 !important;
  font-weight: 400 !important;
  margin-top: 2px !important;
  font-variant-numeric: tabular-nums !important;
}

/* ==========================================================================
   CTA Finalizar — pill olive, full-width
   ========================================================================== */
#cart-preview-area .finalizar-compra {
  background: #1b7a45 !important;
  color: #FFFFFF !important;
  border: none !important;
  border-radius: 999px !important;
  padding: 14px 24px !important;
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 15px !important;
  font-weight: 600 !important;
  letter-spacing: 0.01em !important;
  text-transform: none !important;
  width: 100% !important;
  text-align: center !important;
  margin-top: 12px !important;
  box-shadow: 0 4px 12px rgba(27, 122, 69, 0.22) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  transition: background-color 200ms, box-shadow 200ms, transform 150ms !important;
}
#cart-preview-area .finalizar-compra:hover {
  background: #155a33 !important;
  box-shadow: 0 6px 20px rgba(27, 122, 69, 0.28) !important;
}
#cart-preview-area .finalizar-compra:active {
  transform: scale(0.98) !important;
}
#cart-preview-area .finalizar-compra:focus-visible {
  outline: 2px solid #4B664A !important;
  outline-offset: 3px !important;
}
#cart-preview-area .finalizar-compra span {
  font-size: 15px !important;
  font-weight: 600 !important;
  color: #FFFFFF !important;
}
#cart-preview-area .finalizar-compra svg path {
  fill: #FFFFFF !important;
}

/* ==========================================================================
   QTD CONTROLS + TRASH — mesma identidade visual do /checkout/cart
   (.mm-qty / .mm-qty-btn / .mm-qty-value / .mm-item-remove em checkout-cro.css)

   O JS cart-sheet.js injeta esta estrutura dentro de .qtd-value:
     .mm-qty-wrap
       └─ button.qty-btn-minus (SVG)
       └─ span.qty-display
       └─ button.qty-btn-plus (SVG)

   O trash (.cart-remove-item) continua onde o Magazord renderiza nativamente:
     - Mobile: dentro do .qtd-value (sibling dos botões)
     - Desktop: em .prod-remove (sibling do main row)
   ========================================================================== */

/* Esconde os elementos nativos do Magazord que o nosso JS vai substituir */
.content-cart .cart-item .qtd-value > .quantidade,
.content-cart .cart-item .qtd-value > span:not(.qty-display):not(.cart-remove-item):not(.valor):not(.mm-qty-wrap) {
  display: none !important;
}

/* Container .qtd-value — row única com ordem forçada:
   qty pill  →  trash  →  preço (push right via margin-left: auto)  */
.content-cart .cart-item .qtd-value {
  display: flex !important;
  align-items: center !important;
  justify-content: flex-start !important;
  gap: 8px !important;
  width: 100% !important;
  margin-top: 10px !important;
}

/* Forçar ordem visual explicitamente (independente da ordem do DOM) */
.content-cart .cart-item .qtd-value > .mm-qty-wrap    { order: 1 !important; }
.content-cart .cart-item .qtd-value > .cart-remove-item { order: 2 !important; }
.content-cart .cart-item .qtd-value > .valor          { order: 3 !important; margin-left: auto !important; }

/* Pill wrap com border (replica .mm-qty do /checkout/cart) */
.content-cart .cart-item .mm-qty-wrap {
  display: inline-flex !important;
  align-items: center !important;
  border: 1px solid #E7E7E7 !important;
  border-radius: 9999px !important;
  padding: 4px !important;
  background: #FFFFFF !important;
  transition: border-color 320ms cubic-bezier(0.16, 1, 0.3, 1) !important;
}
.content-cart .cart-item .mm-qty-wrap:hover {
  border-color: #D1D5DB !important;
}

/* Botões minus/plus (replica .mm-qty-btn 36×36 do /checkout/cart)
   Wrapper pill tem padding 4px → 36 + 8 = 44 altura total (Apple HIG min). */
.content-cart .qty-btn-minus,
.content-cart .qty-btn-plus {
  width: 36px !important;
  height: 36px !important;
  min-width: 36px !important;
  min-height: 36px !important;
  border: none !important;
  background: transparent !important;
  border-radius: 9999px !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: #374151 !important;
  cursor: pointer !important;
  padding: 0 !important;
  font-family: 'Poppins', system-ui, sans-serif !important;
  transition: background-color 260ms cubic-bezier(0.16, 1, 0.3, 1),
              color 260ms cubic-bezier(0.16, 1, 0.3, 1) !important;
  -webkit-tap-highlight-color: transparent !important;
  flex: none !important;
}
.content-cart .qty-btn-minus svg,
.content-cart .qty-btn-plus svg {
  width: 14px !important;
  height: 14px !important;
  display: block !important;
  flex-shrink: 0 !important;
}
.content-cart .qty-btn-minus:hover:not(:disabled),
.content-cart .qty-btn-plus:hover:not(:disabled) {
  background: #F2F2F2 !important;
  color: #121212 !important;
}
.content-cart .qty-btn-minus:active:not(:disabled),
.content-cart .qty-btn-plus:active:not(:disabled) {
  transform: scale(0.92) !important;
}
.content-cart .qty-btn-minus:disabled,
.content-cart .qty-btn-plus:disabled {
  opacity: 0.35 !important;
  cursor: not-allowed !important;
}
.content-cart .qty-btn-minus:focus-visible,
.content-cart .qty-btn-plus:focus-visible {
  outline: 2px solid #4B664A !important;
  outline-offset: 2px !important;
}

/* Display numérico (replica .mm-qty-value) */
.content-cart .qty-display {
  min-width: 28px !important;
  text-align: center !important;
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  color: #121212 !important;
  font-variant-numeric: tabular-nums !important;
  user-select: none !important;
  padding: 0 6px !important;
}

/* Kill Magazord .prod-remove hover:bg-cor-base-light (verde olive no hover).
   O JS move o .cart-remove-item pra fora do .prod-remove no desktop, mas
   mantemos esse guard caso o wrapper ainda exista. */
.content-cart .cart-item .prod-remove,
.content-cart .cart-item .prod-remove:hover {
  background: transparent !important;
  color: inherit !important;
  display: none !important;
}

/* Trash icon — replica .mm-item-remove (44pt hit area, minimalist, red on hover) */
.content-cart .cart-item .cart-remove-item,
.content-cart .cart-item .prod-remove .cart-remove-item {
  position: static !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: transparent !important;
  border: none !important;
  color: #6B7280 !important;
  cursor: pointer !important;
  padding: 0 !important;
  width: 40px !important;
  height: 40px !important;
  min-width: 40px !important;
  min-height: 40px !important;
  border-radius: 9999px !important;
  transition: color 320ms cubic-bezier(0.16, 1, 0.3, 1),
              background-color 320ms cubic-bezier(0.16, 1, 0.3, 1) !important;
  -webkit-tap-highlight-color: transparent !important;
  opacity: 1 !important;
  top: auto !important;
  right: auto !important;
  flex: none !important;
}
.content-cart .cart-item .cart-remove-item:hover {
  color: #DC2626 !important;
  background: rgba(220, 38, 38, 0.08) !important;
}
.content-cart .cart-item .cart-remove-item:focus-visible {
  outline: 2px solid #4B664A !important;
  outline-offset: 2px !important;
}
.content-cart .cart-item .cart-remove-item svg {
  width: 16px !important;
  height: 16px !important;
  display: block !important;
  flex-shrink: 0 !important;
}
.content-cart .cart-item .cart-remove-item svg path,
.content-cart .cart-item .cart-remove-item svg polyline {
  stroke: currentColor !important;
  fill: none !important;
}

/* Empty state */
.content-cart .box-empty-cart {
  padding: 48px 20px !important;
}
.content-cart .empty-cart {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 14px !important;
  color: #4B5563 !important;
  font-weight: 500 !important;
}

/* ==========================================================================
   DELETE CONFIRM MODAL (mobile sheet bottom-up)
   ========================================================================== */
.mm-confirm-overlay {
  position: fixed !important;
  inset: 0 !important;
  z-index: 99999 !important;
  background: rgba(15, 23, 42, 0.55) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 24px !important;
  animation: mmConfirmIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
  -webkit-backdrop-filter: blur(6px) !important;
  backdrop-filter: blur(6px) !important;
}
@keyframes mmConfirmIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes mmConfirmPop {
  0%   { opacity: 0; transform: scale(0.92) translateY(8px); }
  60%  { opacity: 1; transform: scale(1.02) translateY(0); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}

.mm-confirm-card {
  background: #FFFFFF !important;
  border-radius: 20px !important;
  padding: 28px 28px 24px !important;
  width: 100% !important;
  max-width: 420px !important;
  box-shadow:
    0 20px 50px -12px rgba(15, 23, 42, 0.28),
    0 8px 20px -8px rgba(15, 23, 42, 0.12),
    0 0 0 1px rgba(15, 23, 42, 0.04) !important;
  animation: mmConfirmPop 320ms cubic-bezier(0.34, 1.56, 0.64, 1) both !important;
  text-align: center !important;
}
/* Warning icon circle above the title */
.mm-confirm-card::before {
  content: '' !important;
  display: block !important;
  width: 56px !important;
  height: 56px !important;
  margin: 0 auto 16px !important;
  border-radius: 50% !important;
  background:
    url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23dc2626' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='3 6 5 6 21 6'/><path d='M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6'/><path d='M10 11v6M14 11v6'/><path d='M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2'/></svg>") center/26px 26px no-repeat,
    #FEE2E2 !important;
}
.mm-confirm-title {
  font-family: 'Libre Baskerville', Georgia, serif !important;
  font-size: 20px !important;
  font-weight: 700 !important;
  color: #121212 !important;
  letter-spacing: -0.01em !important;
  margin: 0 0 8px !important;
  line-height: 1.25 !important;
}
.mm-confirm-desc {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 14px !important;
  color: #4B5563 !important;
  margin: 0 0 24px !important;
  line-height: 1.5 !important;
}
.mm-confirm-actions {
  display: flex !important;
  flex-direction: row-reverse !important; /* primary action (Remover) visually leads on the right */
  gap: 12px !important;
}
.mm-confirm-btn {
  flex: 1 !important;
  min-height: 48px !important;
  padding: 12px 20px !important;
  border: none !important;
  border-radius: 999px !important; /* pill to match Finalizar button */
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 15px !important;
  font-weight: 600 !important;
  cursor: pointer !important;
  -webkit-tap-highlight-color: transparent !important;
  transition: background-color 180ms ease, transform 150ms ease, box-shadow 180ms ease !important;
}
.mm-confirm-btn:active { transform: scale(0.97) !important; }
.mm-confirm-btn:focus-visible {
  outline: 2px solid #4B664A !important;
  outline-offset: 2px !important;
}
.mm-confirm-btn-cancel {
  background: #F3F4F6 !important;
  color: #121212 !important;
  border: 1px solid #E5E7EB !important;
}
.mm-confirm-btn-cancel:hover {
  background: #E5E7EB !important;
}
.mm-confirm-btn-delete {
  background: #DC2626 !important;
  color: #FFFFFF !important;
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.25) !important;
}
.mm-confirm-btn-delete:hover {
  background: #B91C1C !important;
  box-shadow: 0 6px 16px rgba(220, 38, 38, 0.32) !important;
}

/* ==========================================================================
   DESKTOP: drawer .carrinho-rapido-ctn tem estrutura diferente do mobile
   - Header: .top-carrinho (não .border-b.border-solid)
   - Footer: .area-finalizar-compra (não .border-t.border-solid)
   - Linhas PIX/Cartão: .formas.forma-pix + .formas.forma-cartao
   ========================================================================== */
@media (min-width: 769px) {

  /* Drawer container — background cinza como checkout */
  .carrinho-rapido-ctn,
  .carrinho-rapido-ctn .carrinho-rapido,
  .carrinho-rapido-ctn .content-cart {
    background: #F2F2F2 !important;
  }

  /* HEADER — substitui faixa olive por seção cinza com título serif */
  .carrinho-rapido-ctn .top-carrinho {
    background: #F2F2F2 !important;
    padding: 18px 22px !important;
    position: relative !important;
  }

  .carrinho-rapido-ctn .top-carrinho .meu-carrinho {
    align-items: center !important;
  }

  .carrinho-rapido-ctn .top-carrinho .meu-carrinho > a {
    font-family: 'Libre Baskerville', Georgia, serif !important;
    font-size: 18px !important;
    font-weight: 700 !important;
    color: #121212 !important;
    letter-spacing: -0.01em !important;
    text-transform: none !important;
    text-decoration: none !important;
  }

  /* Ícone close — círculo branco (touch target 44x44) */
  .carrinho-rapido-ctn .top-carrinho .icon-arrow-bottom {
    width: 44px !important;
    height: 44px !important;
    background: #FFFFFF !important;
    border: 1px solid #E7E7E7 !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06) !important;
    color: #121212 !important;
    cursor: pointer !important;
    transition: border-color 150ms, box-shadow 150ms !important;
  }
  .carrinho-rapido-ctn .top-carrinho .icon-arrow-bottom:hover {
    border-color: #4B664A !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;
  }
  .carrinho-rapido-ctn .top-carrinho .icon-arrow-bottom:focus-visible {
    outline: 2px solid #4B664A !important;
    outline-offset: 2px !important;
  }
  .carrinho-rapido-ctn .top-carrinho .icon-arrow-bottom svg {
    width: 14px !important;
    height: 14px !important;
    fill: #121212 !important;
    transition: transform 280ms cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  }
  .carrinho-rapido-ctn .top-carrinho .icon-arrow-bottom:hover svg {
    transform: rotate(90deg) !important;
    fill: #4B664A !important;
  }
  .carrinho-rapido-ctn .top-carrinho .icon-arrow-bottom svg path {
    fill: #121212 !important;
    stroke: #121212 !important;
  }

  /* LISTA de items */
  .carrinho-rapido-ctn .content-cart .cart-items {
    background: #F2F2F2 !important;
    padding: 8px 12px !important;
    max-height: calc(100vh - 340px) !important;
  }

  /* CARD do item — mirror /checkout/cart .mm-item grid layout so fonts,
     gaps and thumbnail sizes match the rest of the site. */
  .carrinho-rapido-ctn .content-cart .cart-item {
    background: #FFFFFF !important;
    border: 1px solid #E7E7E7 !important;
    border-radius: 14px !important;
    margin: 8px 0 !important;
    padding: 16px !important;
    min-height: 112px !important;
    box-shadow: none !important;
    display: flex !important;
    flex-direction: row !important;
    align-items: flex-start !important;
    gap: 16px !important;
  }

  .carrinho-rapido-ctn .content-cart .cart-item .prod-img {
    width: 96px !important;
    height: 96px !important;
    min-width: 96px !important;
    max-width: 96px !important;
    border-radius: 10px !important;
    border: 1px solid #F0F0F0 !important;
    flex-shrink: 0 !important;
  }

  /* prod-info fills the remaining space so name and qty controls breathe */
  .carrinho-rapido-ctn .content-cart .cart-item .prod-info {
    flex: 1 1 auto !important;
    min-width: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 8px !important;
    padding-left: 0 !important; /* gap on cart-item handles spacing */
  }

  .carrinho-rapido-ctn .content-cart .cart-item .prod-nome,
  .carrinho-rapido-ctn .content-cart .cart-item .prod-nome a {
    font-family: 'Poppins', system-ui, sans-serif !important;
    font-size: 15px !important;
    font-weight: 500 !important;
    color: #121212 !important;
    line-height: 1.35 !important;
    text-decoration: none !important;
    letter-spacing: -0.005em !important;
  }

  /* Derivacao escondida globalmente (.content-cart .cart-item .derivacao no
     bloco base) — Madeira Mania não usa sistema de variantes nativo, então
     "Único: Único" é ruído visual. */

  .carrinho-rapido-ctn .content-cart .cart-item .valor,
  .carrinho-rapido-ctn .content-cart .cart-item .valor span,
  .carrinho-rapido-ctn .content-cart .cart-item .valor strong {
    font-family: 'Poppins', system-ui, sans-serif !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    color: #121212 !important;
    font-variant-numeric: tabular-nums !important;
    letter-spacing: -0.005em !important;
    white-space: nowrap !important;
  }
  .carrinho-rapido-ctn .content-cart .cart-item .valor .mm-cents {
    font-size: 0.55em !important;
    font-weight: 600 !important;
    color: #9CA3AF !important;
    vertical-align: baseline !important;
  }

  /* FOOTER — seção branca com radius top */
  .carrinho-rapido-ctn .area-finalizar-compra {
    background: #FFFFFF !important;
    border-top: 1px solid #E7E7E7 !important;
    border-radius: 16px 16px 0 0 !important;
    padding: 16px 22px 20px !important;
    box-shadow: 0 -6px 20px rgba(0, 0, 0, 0.04) !important;
  }

  /* Linhas PIX / Cartão */
  .carrinho-rapido-ctn .area-finalizar-compra .formas {
    border: none !important;
    padding: 6px 0 !important;
  }
  .carrinho-rapido-ctn .area-finalizar-compra .formas .tittle {
    font-family: 'Poppins', system-ui, sans-serif !important;
    font-size: 12px !important;
    color: #4B5563 !important;
    font-weight: 500 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.04em !important;
  }

  /* Valor destaque — serif para o total + tabular-nums */
  .carrinho-rapido-ctn .area-finalizar-compra .valor.valor-pix,
  .carrinho-rapido-ctn .area-finalizar-compra .valor.valor-pix span {
    font-family: 'Libre Baskerville', Georgia, serif !important;
    font-size: 22px !important;
    font-weight: 700 !important;
    color: #121212 !important;
    letter-spacing: -0.01em !important;
    font-variant-numeric: tabular-nums !important;
  }

  .carrinho-rapido-ctn .area-finalizar-compra .valor.valor-cartao,
  .carrinho-rapido-ctn .area-finalizar-compra .valor.valor-cartao div {
    font-family: 'Poppins', system-ui, sans-serif !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    color: #4B5563 !important;
    font-variant-numeric: tabular-nums !important;
  }

  /* CTA Finalizar — pill olive como /checkout/cart */
  .carrinho-rapido-ctn .finalizar-compra {
    background: #1b7a45 !important;
    color: #FFFFFF !important;
    border: none !important;
    border-radius: 999px !important;
    padding: 14px 24px !important;
    font-family: 'Poppins', system-ui, sans-serif !important;
    font-size: 15px !important;
    font-weight: 600 !important;
    text-transform: none !important;
    width: 100% !important;
    margin-top: 10px !important;
    box-shadow: 0 4px 12px rgba(27, 122, 69, 0.22) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 6px !important;
    transition: background-color 200ms, box-shadow 200ms, transform 150ms !important;
  }
  .carrinho-rapido-ctn .finalizar-compra:hover {
    background: #155a33 !important;
    box-shadow: 0 6px 20px rgba(27, 122, 69, 0.28) !important;
  }
  .carrinho-rapido-ctn .finalizar-compra:active {
    transform: scale(0.98) !important;
  }
  .carrinho-rapido-ctn .finalizar-compra:focus-visible {
    outline: 2px solid #4B664A !important;
    outline-offset: 3px !important;
  }
  .carrinho-rapido-ctn .finalizar-compra span {
    color: #FFFFFF !important;
    font-family: 'Poppins', system-ui, sans-serif !important;
    font-size: 15px !important;
    font-weight: 600 !important;
  }
  .carrinho-rapido-ctn .finalizar-compra svg,
  .carrinho-rapido-ctn .finalizar-compra svg path {
    fill: #FFFFFF !important;
    stroke: #FFFFFF !important;
  }
}

/* ==========================================================================
   EMPTY CART — brand-aligned + product suggestions
   Native Magazord renders .box-empty-cart (SVG + "Seu carrinho está vazio").
   header.js injects a sibling .mm-cart-empty-wrapper when the drawer opens
   and adds .mm-cart-has-empty-enhancement on the parent .content-cart so
   we can hide the native version via CSS.
   ========================================================================== */
.content-cart.mm-cart-has-empty-enhancement {
  display: flex !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  flex-direction: column !important;
  padding: 24px 20px 24px !important;
  overflow-y: auto;
  background: #F2F2F2 !important;
}
.content-cart.mm-cart-has-empty-enhancement > .box-empty-cart,
.content-cart.mm-cart-has-empty-enhancement > .empty-cart {
  display: none !important;
}
.mm-cart-empty-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: 'Montserrat', system-ui, -apple-system, sans-serif;
  color: #333333;
}
.mm-cart-empty-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 16px 8px 8px;
}
.mm-cart-empty-icon {
  width: 72px;
  height: 72px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #FFFFFF;
  color: #4b664a;
  margin-bottom: 16px;
  box-shadow: 0 2px 12px rgba(75, 102, 74, 0.08);
}
.mm-cart-empty-title {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #4b664a;
  letter-spacing: 0.01em;
  font-family: 'Playfair Display', 'Montserrat', serif;
}
.mm-cart-empty-copy {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #666666;
  max-width: 280px;
}
.mm-cart-suggestions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 12px 16px;
}
.mm-cart-suggestions-label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999999;
  padding-left: 4px;
}
.mm-cart-suggestions-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.mm-cart-suggestion-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px;
  min-height: 80px;
  background: #FFFFFF;
  border: 1px solid #E6E6E6;
  border-radius: 10px;
  text-decoration: none;
  color: #333333;
  transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease;
  -webkit-tap-highlight-color: transparent;
}
.mm-cart-suggestion-card:hover,
.mm-cart-suggestion-card:focus-visible {
  border-color: #4b664a;
  box-shadow: 0 4px 16px rgba(75, 102, 74, 0.12);
  outline: none;
  text-decoration: none;
  color: #333333;
}
.mm-cart-suggestion-thumb {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
  background: #F2F2F2;
  display: block;
}
.mm-cart-suggestion-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.mm-cart-suggestion-body {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.mm-cart-suggestion-name {
  font-size: 13px;
  font-weight: 500;
  line-height: 1.35;
  color: #333333;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.mm-cart-suggestion-price {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
}
.mm-cart-suggestion-price-from {
  font-size: 11px;
  color: #999999;
  text-decoration: line-through;
}
.mm-cart-suggestion-price-to {
  font-size: 14px;
  font-weight: 600;
  color: #4b664a;
}

/* ==========================================================================
   POST-AJAX STRUCTURE — mirror the original SSR design exactly.
   Magazord's atualizaPreview AJAX replaces .top-carrinho → .header-cart and
   .area-finalizar-compra → .box-total-btn, so the existing desktop rules
   (lines ~567+) stop applying. These rules mirror the SAME look.design:
     • grey drawer (#F2F2F2)
     • header with Libre Baskerville 18px 700 title + 44x44 white circle close
     • item cards with 8px margin
     • WHITE footer card with top-radius + shadow up
     • olive pill CTA (#1b7a45) Poppins 15px 600
   ========================================================================== */

/* Drawer + sections keep grey bg (was overridden to white by earlier draft) */
.carrinho-rapido-ctn.open-cart,
.carrinho-rapido-ctn.open-cart .carrinho-rapido {
  background: #F2F2F2 !important;
}

/* HEADER — .header-cart (post-AJAX) mirrors .top-carrinho styling */
.carrinho-rapido-ctn .header-cart {
  position: relative !important;
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 18px 22px !important;
  background: #F2F2F2 !important;
  border-bottom: none !important;
  flex: 0 0 auto !important;
  gap: 12px !important;
}
.carrinho-rapido-ctn .header-cart > a {
  font-family: 'Libre Baskerville', Georgia, serif !important;
  font-size: 18px !important;
  font-weight: 700 !important;
  letter-spacing: -0.01em !important;
  color: #121212 !important;
  text-transform: none !important;
  text-decoration: none !important;
  pointer-events: none !important;
  cursor: default !important;
  flex: 1 1 auto !important;
}

/* Close X — .close-car-fast (post-AJAX) mirrors .icon-arrow-bottom styling */
.carrinho-rapido-ctn .close-car-fast {
  position: relative !important;
  flex: 0 0 44px !important;
  width: 44px !important;
  height: 44px !important;
  background: #FFFFFF !important;
  border: 1px solid #E7E7E7 !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06) !important;
  color: #121212 !important;
  cursor: pointer !important;
  padding: 0 !important;
  transition: border-color 150ms, box-shadow 150ms, transform 150ms !important;
}
.carrinho-rapido-ctn .close-car-fast:hover {
  border-color: #4B664A !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
}
.carrinho-rapido-ctn .close-car-fast:active {
  transform: scale(0.94) !important;
}
.carrinho-rapido-ctn .close-car-fast:focus-visible {
  outline: 2px solid #4B664A !important;
  outline-offset: 2px !important;
}
.carrinho-rapido-ctn .close-car-fast svg {
  width: 16px !important;
  height: 16px !important;
  stroke: #121212 !important;
  fill: none !important;
  stroke-width: 2.2 !important;
  pointer-events: none !important;
  transition: transform 280ms cubic-bezier(0.34, 1.56, 0.64, 1) !important;
}
.carrinho-rapido-ctn .close-car-fast:hover svg {
  transform: rotate(90deg) !important;
  stroke: #4B664A !important;
}

/* Content area — flex column so cart-items scrolls and box-total-btn sticks */
.carrinho-rapido-ctn .content-cart {
  flex: 1 1 auto !important;
  display: flex !important;
  flex-direction: column !important;
  padding: 0 !important;
  background: #F2F2F2 !important;
  overflow: hidden !important;
  min-height: 0 !important;
}
.carrinho-rapido-ctn .content-cart > .cart-items {
  flex: 1 1 auto !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  padding: 8px 12px !important;
  display: block !important; /* keep legacy 8px margins between cards */
  background: #F2F2F2 !important;
  max-height: none !important; /* override legacy calc(100vh - 340px) cap */
  -webkit-overflow-scrolling: touch !important;
}

/* Footer .box-total-btn — compact white card with top-radius + shadow-up */
.carrinho-rapido-ctn .box-total-btn {
  flex: 0 0 auto !important;
  background: #FFFFFF !important;
  border-top: 1px solid #E7E7E7 !important;
  border-radius: 16px 16px 0 0 !important;
  padding: 12px 20px 14px !important;
  box-shadow: 0 -6px 20px rgba(0, 0, 0, 0.04) !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 10px !important;
}

/* ==========================================================================
   SHIPPING BLOCK — minimalist, mirrors .mm-total pattern.
   Type system locked to Poppins (labels + body) and Libre Baskerville is
   reserved only for the .box-total-btn total value (site-wide convention).
   Psychology applied through copy + goal-gradient progress bar, NOT via
   colored card backgrounds or decorative icons.
   ========================================================================== */
.carrinho-rapido-ctn .mm-cart-ship {
  display: flex !important;
  flex-direction: column !important;
  gap: 8px !important;
  padding: 0 !important;
  background: transparent !important;
  border: none !important;
  animation: mm-cart-ship-in 280ms cubic-bezier(0.16, 1, 0.3, 1) both !important;
}
@keyframes mm-cart-ship-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* ---- Shared mini label (mirrors .mm-total-label) ---- */
.carrinho-rapido-ctn .mm-cart-ship-label {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 10px !important;
  font-weight: 600 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  color: #6B7280 !important;
  margin: 0 !important;
  line-height: 1 !important;
}

/* ---- Location section (CEP + city + delivery date + edit) ---- */
.carrinho-rapido-ctn .mm-cart-ship-location {
  display: flex !important;
  flex-direction: column !important;
  gap: 3px !important;
  padding-bottom: 8px !important;
}
.carrinho-rapido-ctn .mm-cart-ship-location-value {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 10px !important;
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  color: #121212 !important;
  font-variant-numeric: tabular-nums !important;
  letter-spacing: 0 !important;
  min-height: 20px !important;
}
.carrinho-rapido-ctn .mm-cart-ship-location-value > span:first-child {
  min-width: 0 !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
}
.carrinho-rapido-ctn .mm-cart-ship-deadline {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  color: #6B7280 !important;
  line-height: 1.3 !important;
}

/* ---- Edit CEP action (text link, extended touch area) ---- */
.carrinho-rapido-ctn .mm-cart-ship-edit {
  flex: 0 0 auto !important;
  background: transparent !important;
  border: none !important;
  padding: 4px 0 !important;
  min-height: 28px !important;
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 10px !important;
  font-weight: 600 !important;
  color: #4B664A !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  cursor: pointer !important;
  text-decoration: none !important;
  -webkit-tap-highlight-color: transparent !important;
  transition: color 160ms ease !important;
}
.carrinho-rapido-ctn .mm-cart-ship-edit:hover {
  color: #3D4733 !important;
  text-decoration: underline !important;
  text-underline-offset: 3px !important;
}
.carrinho-rapido-ctn .mm-cart-ship-edit:focus-visible {
  outline: 2px solid #4B664A !important;
  outline-offset: 2px !important;
  border-radius: 2px !important;
}

/* ---- Inline CEP edit form ---- */
.carrinho-rapido-ctn .mm-cart-ship-cep-form {
  display: flex !important;
  align-items: center !important;
  gap: 6px !important;
  margin-top: 4px !important;
}
.carrinho-rapido-ctn .mm-cart-ship-cep-input {
  flex: 1 1 auto !important;
  min-width: 0 !important;
  height: 36px !important;
  padding: 0 12px !important;
  border: 1px solid #D1D5DB !important;
  border-radius: 999px !important;
  background: #FFFFFF !important;
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  color: #121212 !important;
  font-variant-numeric: tabular-nums !important;
  letter-spacing: 0.02em !important;
  transition: border-color 180ms ease, box-shadow 180ms ease !important;
}
.carrinho-rapido-ctn .mm-cart-ship-cep-input::placeholder {
  color: #9CA3AF !important;
  font-weight: 500 !important;
}
.carrinho-rapido-ctn .mm-cart-ship-cep-input:focus {
  outline: none !important;
  border-color: #4B664A !important;
  box-shadow: 0 0 0 3px rgba(75, 102, 74, 0.14) !important;
}
.carrinho-rapido-ctn .mm-cart-ship-cep-input.is-invalid {
  border-color: #DC2626 !important;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.12) !important;
}
.carrinho-rapido-ctn .mm-cart-ship-cep-save {
  flex: 0 0 auto !important;
  background: #4B664A !important;
  color: #FFFFFF !important;
  border: none !important;
  border-radius: 999px !important;
  height: 36px !important;
  padding: 0 16px !important;
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  cursor: pointer !important;
  transition: background-color 180ms ease !important;
}
.carrinho-rapido-ctn .mm-cart-ship-cep-save:hover { background: #3D4733 !important; }
.carrinho-rapido-ctn .mm-cart-ship-cep-save:focus-visible {
  outline: 2px solid #4B664A !important;
  outline-offset: 2px !important;
}
.carrinho-rapido-ctn .mm-cart-ship-cep-cancel {
  flex: 0 0 auto !important;
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
  width: 32px !important;
  height: 32px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: #6B7280 !important;
  cursor: pointer !important;
  border-radius: 50% !important;
  transition: background-color 160ms ease, color 160ms ease !important;
}
.carrinho-rapido-ctn .mm-cart-ship-cep-cancel:hover {
  background: #F3F4F6 !important;
  color: #121212 !important;
}
.carrinho-rapido-ctn .mm-cart-ship-cep-cancel svg {
  width: 14px !important;
  height: 14px !important;
}

/* ---- Progress + nudge group (no separate FRETE row — shipping is folded into total) ---- */
.carrinho-rapido-ctn .mm-cart-ship-progress {
  display: flex !important;
  flex-direction: column !important;
  gap: 6px !important;
  padding-bottom: 8px !important;
  border-bottom: 1px solid #EFEFEF !important;
}

/* ---- Minimal progress bar (2px thin line, olive fill) ---- */
.carrinho-rapido-ctn .mm-cart-ship-bar {
  height: 2px !important;
  width: 100% !important;
  background: #EFEFEF !important;
  border-radius: 1px !important;
  overflow: hidden !important;
}
.carrinho-rapido-ctn .mm-cart-ship-bar-fill {
  height: 100% !important;
  background: #4B664A !important;
  border-radius: 1px !important;
  transition: width 520ms cubic-bezier(0.16, 1, 0.3, 1) !important;
}

/* ---- Nudge text (loss aversion / free confirmation) ---- */
.carrinho-rapido-ctn .mm-cart-ship-nudge {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  color: #6B7280 !important;
  line-height: 1.3 !important;
  margin: 0 !important;
}
.carrinho-rapido-ctn .mm-cart-ship-nudge strong {
  color: #121212 !important;
  font-weight: 600 !important;
  font-variant-numeric: tabular-nums !important;
}
.carrinho-rapido-ctn .mm-cart-ship-nudge.is-free {
  color: #4B664A !important;
  font-weight: 600 !important;
  display: flex !important;
  align-items: center !important;
  gap: 6px !important;
}
.carrinho-rapido-ctn .mm-cart-ship-nudge.is-free svg {
  flex-shrink: 0 !important;
}

/* Total block — itemized breakdown + big serif total + No PIX inline right */
.carrinho-rapido-ctn .box-total-btn > .total {
  display: flex !important;
  flex-direction: column !important;
  gap: 6px !important;
  align-items: stretch !important;
}

/* Cents (",36") rendered smaller, sitting on the same text baseline as
   the main digits — NOT floating/centered vertically. */
.carrinho-rapido-ctn .mm-cents {
  font-size: 0.5em !important;
  font-weight: inherit !important;
  font-family: inherit !important;
  color: inherit !important;
  letter-spacing: 0 !important;
  vertical-align: baseline !important;
  margin-left: 1px !important;
}

/* Free-shipping unlock celebration — applied for ~1.4s when crossing threshold */
.carrinho-rapido-ctn .mm-cart-ship.mm-just-unlocked {
  animation: mm-cart-ship-celebrate 900ms cubic-bezier(0.34, 1.56, 0.64, 1) both !important;
}
@keyframes mm-cart-ship-celebrate {
  0%   { transform: scale(1); }
  35%  { transform: scale(1.025); }
  100% { transform: scale(1); }
}
.carrinho-rapido-ctn .mm-cart-ship.mm-just-unlocked .mm-cart-ship-nudge {
  animation: mm-cart-pop 720ms cubic-bezier(0.34, 1.56, 0.64, 1) both !important;
}
.carrinho-rapido-ctn .mm-cart-ship.mm-just-unlocked .mm-cart-ship-bar-fill {
  animation: mm-cart-ship-fill-flash 900ms ease-out both !important;
}
@keyframes mm-cart-ship-fill-flash {
  0%   { box-shadow: 0 0 0 0 rgba(75, 102, 74, 0.5); }
  60%  { box-shadow: 0 0 0 4px rgba(75, 102, 74, 0); }
  100% { box-shadow: 0 0 0 0 rgba(75, 102, 74, 0); }
}

/* "Você economiza R$ X com PIX" — single subtle line, sits between
   .linha-total and .valor-final.card */
.carrinho-rapido-ctn .mm-cart-savings {
  display: block !important;
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  color: #4B664A !important;
  font-variant-numeric: tabular-nums !important;
  margin-top: 2px !important;
  line-height: 1.3 !important;
}
/* Frete value strong inline in deadline line */
.carrinho-rapido-ctn .mm-cart-ship-deadline strong {
  color: #121212 !important;
  font-weight: 600 !important;
  font-variant-numeric: tabular-nums !important;
}
/* Inline shipping spinner (ring-resize style) — replaces the frete value
   text during re-fetch. */
.carrinho-rapido-ctn .mm-cart-ship-spinner {
  display: inline-block !important;
  vertical-align: -2px !important;
  width: 14px !important;
  height: 14px !important;
}

/* Subtle pulse on the total value during shipping re-fetch */
.carrinho-rapido-ctn .box-total-btn.mm-ship-loading .linha-total .valor-final {
  animation: mm-total-pulse 1.2s ease-in-out infinite !important;
}
@keyframes mm-total-pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.65; }
}

/* ---- linha-total: TOTAL label on top, value+No PIX inline below ---- */
.carrinho-rapido-ctn .box-total-btn .linha-total {
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  gap: 0 !important;
  width: 100% !important;
  padding: 0 !important;
}
.carrinho-rapido-ctn .box-total-btn .linha-total h5 {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 10px !important;
  font-weight: 600 !important;
  color: #6B7280 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  margin: 0 0 6px !important;
  line-height: 1 !important;
}
/* Value + "No PIX" side by side (was column) */
.carrinho-rapido-ctn .box-total-btn .linha-total .valor-final {
  display: flex !important;
  flex-direction: row !important;
  align-items: baseline !important;
  gap: 10px !important;
  width: 100% !important;
}
.carrinho-rapido-ctn .box-total-btn .linha-total .valor-final > .valor,
.carrinho-rapido-ctn .box-total-btn .linha-total .valor-final > .valor > strong,
.carrinho-rapido-ctn .box-total-btn .linha-total .valor-final > strong {
  font-family: 'Libre Baskerville', Georgia, serif !important;
  font-size: 32px !important;
  font-weight: 700 !important;
  color: #121212 !important;
  letter-spacing: -0.01em !important;
  line-height: 1.05 !important;
  font-variant-numeric: tabular-nums !important;
}
.carrinho-rapido-ctn .box-total-btn .linha-total .valor-final > .valor {
  display: inline-flex !important;
  align-items: baseline !important;
}
/* "No PIX" inline right of the value, same baseline */
.carrinho-rapido-ctn .box-total-btn .linha-total .valor-final .tipo-pagto {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  color: #4B664A !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  margin: 0 !important;
  font-variant-numeric: tabular-nums !important;
}

/* 12x installments row (.valor-final.card) — muted parcela subtitle */
.carrinho-rapido-ctn .box-total-btn .valor-final.card {
  display: flex !important;
  align-items: center !important;
  justify-content: flex-start !important;
  padding: 0 !important;
  background: transparent !important;
  margin-top: 1px !important;
}
.carrinho-rapido-ctn .box-total-btn .valor-final.card > span {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  color: #6B7280 !important;
  line-height: 1.3 !important;
  font-variant-numeric: tabular-nums !important;
}
.carrinho-rapido-ctn .box-total-btn .valor-final.card strong {
  font-weight: 700 !important;
  color: #121212 !important;
}

/* ------------------------------------------------------------------
   Animations: item add/remove + total pop
   Keyframes mirror checkout-cro.css (@mm-pop bounce).
   ------------------------------------------------------------------ */
@keyframes mm-cart-pop {
  0%   { transform: scale(0.96); opacity: 0.55; }
  55%  { transform: scale(1.035); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes mm-cart-item-add {
  0%   { opacity: 0; transform: translateX(24px); max-height: 0; margin-top: 0; margin-bottom: 0; }
  40%  { opacity: 1; max-height: 240px; margin-top: 8px; margin-bottom: 8px; }
  100% { opacity: 1; transform: translateX(0); max-height: 240px; }
}
@keyframes mm-cart-item-remove {
  0%   { opacity: 1; transform: translateX(0) scale(1); max-height: 240px; margin-top: 8px; margin-bottom: 8px; padding-top: 14px; padding-bottom: 14px; border-width: 1px; }
  50%  { opacity: 0; transform: translateX(-36px) scale(0.96); max-height: 240px; }
  100% { opacity: 0; transform: translateX(-36px) scale(0.96); max-height: 0; margin-top: 0; margin-bottom: 0; padding-top: 0; padding-bottom: 0; border-width: 0; }
}

/* When we trigger the "pop" class on the total value */
.carrinho-rapido-ctn .box-total-btn .linha-total .valor-final.mm-pop > .valor,
.carrinho-rapido-ctn .box-total-btn .linha-total .valor-final.mm-pop strong {
  animation: mm-cart-pop 360ms cubic-bezier(0.34, 1.56, 0.64, 1) both !important;
}
.carrinho-rapido-ctn .content-cart .cart-item.mm-added {
  animation: mm-cart-item-add 420ms cubic-bezier(0.16, 1, 0.3, 1) both !important;
}
.carrinho-rapido-ctn .content-cart .cart-item.mm-removing {
  animation: mm-cart-item-remove 360ms cubic-bezier(0.55, 0, 0.67, 0.2) forwards !important;
  overflow: hidden !important;
  pointer-events: none !important;
}

/* Finalizar CTA — compact olive pill */
.carrinho-rapido-ctn .box-total-btn .checkout {
  width: 100% !important;
  margin-top: 6px !important;
}
.carrinho-rapido-ctn .box-total-btn .checkout > a {
  display: block !important;
  text-decoration: none !important;
  width: 100% !important;
}
.carrinho-rapido-ctn .box-total-btn .checkout .button.button-darken,
.carrinho-rapido-ctn .box-total-btn .checkout .button {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;
  width: 100% !important;
  min-height: 44px !important;
  padding: 12px 20px !important;
  border: none !important;
  border-radius: 999px !important;
  background: #1b7a45 !important;
  color: #FFFFFF !important;
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
  cursor: pointer !important;
  transition: background-color 200ms, box-shadow 200ms, transform 150ms !important;
  box-shadow: 0 4px 12px rgba(27, 122, 69, 0.22) !important;
}
.carrinho-rapido-ctn .box-total-btn .checkout .button:hover {
  background: #155a33 !important;
  box-shadow: 0 6px 16px rgba(27, 122, 69, 0.28) !important;
  transform: translateY(-1px) !important;
}
.carrinho-rapido-ctn .box-total-btn .checkout .button:active {
  transform: translateY(0) !important;
}
.carrinho-rapido-ctn .box-total-btn .checkout .button .arrow-right {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  order: 2 !important;
  transition: transform 180ms ease !important;
}
.carrinho-rapido-ctn .box-total-btn .checkout .button:hover .arrow-right {
  transform: translateX(3px) !important;
}
.carrinho-rapido-ctn .box-total-btn .checkout .button .arrow-right svg {
  width: 16px !important;
  height: 16px !important;
  stroke: #FFFFFF !important;
  fill: none !important;
}

/* ==========================================================================
   MOBILE: cart drawer full-width
   ========================================================================== */
@media (max-width: 767px) {
  .carrinho-rapido-ctn {
    width: 100% !important;
    max-width: 100% !important;
  }
}

/* Telas pequenas (iPhone SE, 320px e similares) — layout cart-item compactado.
   Sem estes overrides, thumbnail 80px + padding 16px + gap 16px + controles
   empurravam o preço pra fora do viewport. */
@media (max-width: 360px) {
  /* Box-sizing + min-width:0 em todos os descendentes pra permitir shrink.
     Tailwind padrão do Magazord (gap-space-16, w-full, etc) não encolhe
     sozinho em viewports < 360px e estora preço + controles pra fora. */
  .content-cart .cart-item,
  .content-cart .cart-item * {
    min-width: 0 !important;
    box-sizing: border-box !important;
  }
  .content-cart .cart-item {
    padding: 10px !important;
    gap: 8px !important;
    width: 100% !important;
    max-width: 100% !important;
    overflow: hidden !important;
  }
  /* Linha principal (image + content) — gap menor pra sobrar espaço */
  .content-cart .cart-item > div.flex.items-center {
    gap: 10px !important;
    width: 100% !important;
  }
  .content-cart .cart-item .prod-img,
  .content-cart .cart-item .prod-img.size-\\[80px\\] {
    width: 64px !important;
    height: 64px !important;
    min-width: 64px !important;
    max-width: 64px !important;
    flex-shrink: 0 !important;
  }
  .content-cart .cart-item .prod-img img,
  .content-cart .cart-item .prod-img figure {
    width: 64px !important;
    height: 64px !important;
    max-height: 64px !important;
  }
  .content-cart .cart-item .prod-nome,
  .content-cart .cart-item .prod-nome a {
    font-size: 13px !important;
    word-break: break-word !important;
    overflow-wrap: anywhere !important;
  }
  .content-cart .cart-item .valor,
  .content-cart .cart-item .valor span {
    font-size: 13px !important;
  }
  /* Remove min-w-[65px] do preço pra ele shrinkar se precisar */
  .content-cart .cart-item .valor[class*="min-w-"] {
    min-width: 0 !important;
  }
  /* Qty pill menor pra sobrar espaço pro preço (que é prioridade visual) */
  .content-cart .cart-item .mm-qty-wrap {
    padding: 1px !important;
    gap: 2px !important;
  }
  .content-cart .cart-item .mm-qty-wrap button {
    width: 24px !important;
    min-width: 24px !important;
    height: 24px !important;
  }
  .content-cart .cart-item .mm-qty-wrap .qty-display {
    min-width: 20px !important;
    font-size: 13px !important;
  }
  /* Preço em 12px pra caber folgado */
  .content-cart .cart-item .valor,
  .content-cart .cart-item .valor span {
    font-size: 12px !important;
  }
  /* Esconde "Qtde: N" redundante — já vemos o número no qty-wrap */
  .content-cart .cart-item .qtd-value > span:not(.cart-remove-item):not(.mm-qty-wrap) {
    display: none !important;
  }
  /* min-width:0 apenas no container do texto (não nos botões/svgs dos
     controles, que precisam manter tamanho fixo) */
  .content-cart .cart-item .prod-nome,
  .content-cart .cart-item .valor,
  .content-cart .cart-item .flex-1,
  .content-cart .cart-item .flex-col {
    min-width: 0 !important;
  }
  /* Qty wrap mantém tamanho fixo — não encolhe */
  .content-cart .cart-item .mm-qty-wrap,
  .content-cart .cart-item .mm-qty-wrap button,
  .content-cart .cart-item .cart-remove-item {
    flex-shrink: 0 !important;
  }
  /* Footer compacto */
  #cart-preview-area .valor-pix,
  #cart-preview-area .valor-pix span {
    font-size: 20px !important;
  }
  #cart-preview-area .border-t.border-solid {
    padding: 16px !important;
  }
  #cart-preview-area .finalizar-compra {
    padding: 12px 16px !important;
    font-size: 14px !important;
  }
}

/* ==========================================================================
   REDUCED MOTION: respeita preferência de sistema
   ========================================================================== */
@media (prefers-reduced-motion: reduce) {
  #cart-preview-area *,
  #cart-preview-area *::before,
  #cart-preview-area *::after,
  .carrinho-rapido-ctn *,
  .carrinho-rapido-ctn *::before,
  .carrinho-rapido-ctn *::after,
  .mm-confirm-overlay,
  .mm-confirm-card {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`,document.head.appendChild(g)}})(),(function(){if(!document.getElementById("mm-checkout-cro-css")){var g=document.createElement("style");g.id="mm-checkout-cro-css",g.textContent=`/* =============================================
   CHECKOUT CRO - Madeira Mania (rebuild v2)
   Rebuild limpo: "shadow render" strategy
   - Esconde .cart-area + #resumo-compra .conteudo-resumo (source of truth)
   - Renderiza #mm-layout com nossos próprios componentes
   - Delega mutações pro Zord API (Zord.checkout.*)
   - Re-renderiza em $(document).ajaxComplete
   Design DNA: medusa storefront tokens adaptados ao brand real Madeira Mania
   ============================================= */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');


/* ==========================================
   ZONA 1 — Esconder Magazord (source of truth fica no DOM pra leitura)
   ========================================== */

/* Header checkout original Magazord (logo + Google + stepper) */
body.mm-checkout-rebuild .header-checkout,
body.mm-checkout-rebuild .header-template-checkout-03,
body.mm-checkout-rebuild .pagina-conteudo-adicional.conteudo-adicional-25 {
  display: none !important;
}

/* Esconder distrações no checkout: ticker bar + popup whats + floating whatsapp */
body.mm-checkout-rebuild #tickerBar,
body.mm-checkout-rebuild .ticker-bar,
body.mm-checkout-rebuild #popup-msg-whats,
body.mm-checkout-rebuild #mm-floating-whatsapp {
  display: none !important;
}
/* Remove body padding reserved for #mm-header (not injected on checkout) */
body.mm-checkout-rebuild {
  padding-top: 0 !important;
}

/* Override do padding inflado do .checkout-main da Magazord */
body.mm-checkout-rebuild #checkout-main-area.checkout-main,
body.mm-checkout-rebuild #checkout-main-area,
body.mm-checkout-rebuild .checkout-main {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  margin-top: 0 !important;
}

#checkout-main-area.mm-shadow-mode .title-cart-area,
#checkout-main-area.mm-shadow-mode #cart-area,
#checkout-main-area.mm-shadow-mode .cart-area,
#checkout-main-area.mm-shadow-mode #resumo-compra,
#checkout-main-area.mm-shadow-mode .proxima-etapa,
#checkout-main-area.mm-shadow-mode > .container > *:not(#mm-layout),
/* Identify (Fase 2): forms Magazord são filhos diretos do mainArea
   — não usam .container como wrapper. Esconde tudo que não é #mm-layout. */
#checkout-main-area.mm-shadow-mode > *:not(#mm-layout):not(style):not(script) {
  position: absolute !important;
  left: -99999px !important;
  top: -99999px !important;
  width: 1px !important;
  height: 1px !important;
  overflow: hidden !important;
  pointer-events: none !important;
  opacity: 0 !important;
}

/* Libera o resumo-compra novamente SE ele for descendente do mm-layout (não é, mas paranoia) */
#checkout-main-area.mm-shadow-mode #mm-layout,
#checkout-main-area.mm-shadow-mode #mm-layout * {
  position: static;
  left: auto;
  top: auto;
  width: auto;
  height: auto;
  overflow: visible;
  pointer-events: auto;
  opacity: 1;
}


/* ==========================================
   ZONA 2 — Design tokens (scoped em #mm-layout)
   ========================================== */

#mm-layout {
  /* Brand — olive do ticker/header + forest da PDP CTA */
  --mm-olive:        #4B664A;
  --mm-olive-dark:   #3D4733;
  --mm-olive-soft:   rgba(75, 102, 74, 0.08);
  --mm-cta:          #1b7a45;
  --mm-cta-dark:     #155a33;
  --mm-cta-soft:     rgba(27, 122, 69, 0.08);

  /* Neutros (medusa-inspired) */
  --mm-bg:           #FAFAFA;
  --mm-card:         #FFFFFF;
  --mm-border:       #E7E7E7;
  --mm-border-soft:  #F0F0F0;
  --mm-divider:      #EFEFEF;

  /* Texto (escala WCAG-safe — todos os tons garantem 4.5:1 em 11px+) */
  --mm-fg:           #121212;  /* ratio 17.4 — primary  */
  --mm-fg-soft:      #374151;  /* ratio 10.4 — secondary  */
  --mm-fg-meta:      #4B5563;  /* ratio 7.14 — tertiary, body small  */
  --mm-fg-subtle:    #6B7280;  /* ratio 4.86 — meta info readable    */
  --mm-fg-muted:     #9CA3AF;  /* ratio 2.54 — DECORATIVE ONLY (icons, dividers)  */

  /* Semantic */
  --mm-danger:       #DC2626;
  --mm-danger-soft:  rgba(220, 38, 38, 0.08);
  --mm-success:      #1b7a45;

  /* Typography */
  --mm-sans:         'Poppins', system-ui, -apple-system, sans-serif;
  --mm-serif:        'Libre Baskerville', Georgia, serif;

  /* Spacing (4px base) */
  --mm-s1: 4px;
  --mm-s2: 8px;
  --mm-s3: 12px;
  --mm-s4: 16px;
  --mm-s5: 20px;
  --mm-s6: 24px;
  --mm-s8: 32px;
  --mm-s10: 40px;

  /* Radius */
  --mm-r-sm:   4px;
  --mm-r:      8px;
  --mm-r-lg:   16px;
  --mm-r-full: 9999px;

  /* Shadows (flat brand — uso minimal) */
  --mm-shadow-sm:  0 1px 2px rgba(17, 24, 39, 0.04);
  --mm-shadow:     0 1px 3px rgba(17, 24, 39, 0.06), 0 1px 2px rgba(17, 24, 39, 0.04);
  --mm-shadow-lg:  0 8px 24px rgba(17, 24, 39, 0.08);

  /* Transitions — 500ms é slow-intentional ("premium feel" medusa) */
  --mm-tr-fast: 180ms cubic-bezier(0.16, 1, 0.3, 1);
  --mm-tr:      320ms cubic-bezier(0.16, 1, 0.3, 1);
  --mm-tr-slow: 500ms cubic-bezier(0.16, 1, 0.3, 1);

  font-family: var(--mm-sans);
  color: var(--mm-fg);
  font-size: 14px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


/* ==========================================
   ZONA 3 — Layout grid
   ========================================== */

#mm-layout {
  display: block;
  max-width: 1200px;
  margin: 0 auto;
  /* Mobile default: padding horizontal 0 — cards/grids internos adicionam
     margem mínima. Aproveita quase todo o viewport no mobile estreito. */
  padding: var(--mm-s4) 0 var(--mm-s8);
  box-sizing: border-box;
  animation: mm-fade-in 320ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

#mm-layout *,
#mm-layout *::before,
#mm-layout *::after {
  box-sizing: border-box;
}

.mm-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--mm-s6);
  align-items: start;
}

@media (min-width: 1024px) {
  #mm-layout {
    /* Padding top reduzido (s8=32→s4=16) pra dar mais altura útil
       ao conteúdo e aproximar do topo da viewport. */
    padding: var(--mm-s4) var(--mm-s6) var(--mm-s10);
  }
  .mm-grid {
    grid-template-columns: 1fr 380px;
    gap: var(--mm-s10);
  }
}


/* ==========================================
   ZONA 4 — Títulos + headings
   ========================================== */

.mm-h {
  font-family: var(--mm-serif);
  font-weight: 400;
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: var(--mm-fg);
  margin: 0 0 var(--mm-s5);
  padding: 0;
}

.mm-eyebrow {
  font-family: var(--mm-sans);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mm-fg-muted);
  margin: 0;
}


/* ==========================================
   ZONA 5 — Custom checkout header (substitui o Magazord)
   Single-row layout: logo left, stepper center, secure right
   Vertical alignment perfect via grid 3-col + center align
   ========================================== */

.mm-checkout-header {
  padding: var(--mm-s5) 0;
  margin-bottom: var(--mm-s5);
  border-bottom: 1px solid var(--mm-border-soft);
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: var(--mm-s5);
  min-height: 72px;
  animation: mm-fade-down 380ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.mm-checkout-header-logo {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: var(--mm-fg);
  justify-self: start;
  line-height: 0;
}

.mm-checkout-header-logo img {
  height: 44px;
  width: auto;
  max-width: 180px;
  display: block;
}

/* Stepper centered in middle column */
.mm-checkout-steps {
  display: inline-flex;
  align-items: center;
  justify-self: center;
}

.mm-checkout-steps ol {
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: var(--mm-s3);
}

.mm-checkout-step {
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  color: var(--mm-fg-subtle);
  white-space: nowrap;
  letter-spacing: 0.02em;
  line-height: 1;
}

.mm-checkout-step.is-active {
  color: var(--mm-fg);
  font-weight: 700;
  position: relative;
}

.mm-checkout-step.is-active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -8px;
  height: 2px;
  background: var(--mm-olive);
  border-radius: 2px;
}

.mm-checkout-step-sep {
  font-size: 14px;
  color: var(--mm-fg-muted);
  user-select: none;
  line-height: 1;
}

/* Secure badge — right column */
.mm-checkout-secure {
  display: inline-flex;
  align-items: center;
  gap: var(--mm-s2);
  text-decoration: none;
  color: var(--mm-fg);
  justify-self: end;
}

.mm-checkout-secure svg {
  color: var(--mm-olive);
  flex-shrink: 0;
  width: 18px;
  height: 18px;
}

.mm-checkout-secure-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.mm-checkout-secure-text strong {
  font-size: 13px;
  font-weight: 600;
  color: var(--mm-fg);
  letter-spacing: -0.01em;
}

.mm-checkout-secure-text small {
  font-size: 12px;
  color: var(--mm-fg-meta);
  font-weight: 400;
  margin-top: 1px;
}

/* Mobile: logo centered on top, stepper below, secure badge hidden on small */
@media (max-width: 1023px) {
  .mm-checkout-header {
    grid-template-columns: 1fr;
    grid-template-areas:
      "logo"
      "steps";
    gap: var(--mm-s3);
    padding: var(--mm-s4) 0;
    margin-bottom: var(--mm-s4);
    min-height: 0;
    justify-items: center;
  }
  .mm-checkout-header-logo {
    grid-area: logo;
    justify-self: center;
  }
  .mm-checkout-header-logo img {
    height: 36px;
  }
  .mm-checkout-secure {
    display: none;
  }
  .mm-checkout-steps {
    grid-area: steps;
    justify-self: center;
    padding-top: 0;
  }
  .mm-checkout-steps ol { gap: var(--mm-s3); }
  .mm-checkout-step {
    font-family: 'Poppins', system-ui, sans-serif;
    font-size: 13px;
    letter-spacing: 0.01em;
  }
  .mm-checkout-step.is-active {
    font-weight: 600;
  }

  /* Touch target compliance: bump qty buttons to 44 on mobile */
  .mm-qty-btn {
    width: 44px !important;
    height: 44px !important;
    min-width: 44px !important;
    min-height: 44px !important;
  }
  .mm-qty-value {
    min-width: 36px;
    font-size: 15px;
  }
}

@media (max-width: 540px) {
  .mm-checkout-secure-text { display: none; }
  .mm-checkout-header-logo img { height: 32px; }
}


/* ==========================================
   ZONA 5b — Shipping nudge (goal-gradient)
   Só renderiza ENQUANTO falta valor; some quando atinge.
   ========================================== */

.mm-nudge {
  background: var(--mm-olive-soft);
  border: 1px solid rgba(75, 102, 74, 0.15);
  border-radius: var(--mm-r);
  padding: var(--mm-s3) var(--mm-s4);
  display: flex;
  flex-direction: column;
  gap: var(--mm-s2);
  animation: mm-fade-in 320ms var(--mm-tr) both;
}

.mm-nudge-head {
  display: flex;
  align-items: center;
  gap: var(--mm-s2);
  font-size: 12px;
  line-height: 1.4;
  color: var(--mm-fg);
  font-weight: 500;
}

.mm-nudge-head svg {
  flex-shrink: 0;
  color: var(--mm-olive);
}

.mm-nudge-head strong {
  color: var(--mm-olive);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.mm-nudge-track {
  background: rgba(75, 102, 74, 0.18);
  border-radius: var(--mm-r-full);
  height: 4px;
  overflow: hidden;
}

.mm-nudge-fill {
  background: var(--mm-olive);
  height: 100%;
  border-radius: var(--mm-r-full);
  transition: width 600ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: width;
}


/* ==========================================
   ZONA 6 — Cart items (single card with internal dividers)
   ========================================== */

.mm-items {
  min-width: 0;
}

.mm-items-card {
  background: var(--mm-card);
  border: 1px solid var(--mm-border);
  border-radius: var(--mm-r-lg);
  padding: 0 var(--mm-s5);
  animation: mm-fade-up 480ms cubic-bezier(0.16, 1, 0.3, 1) 80ms both;
}

.mm-items > .mm-h {
  animation: mm-fade-down 380ms cubic-bezier(0.16, 1, 0.3, 1) 60ms both;
}

#mm-item-list {
  display: flex;
  flex-direction: column;
}

.mm-item {
  padding: var(--mm-s5) 0;
  display: grid;
  grid-template-columns: 112px minmax(0, 1fr) auto;
  gap: var(--mm-s4);
  align-items: flex-start;
  position: relative;
  min-width: 0;
  border-bottom: 1px solid var(--mm-border-soft);
  transition: opacity var(--mm-tr);
  animation: mm-fade-up 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* Stagger entrada dos cart items (até 6) */
.mm-item:nth-child(1) { animation-delay: 140ms; }
.mm-item:nth-child(2) { animation-delay: 200ms; }
.mm-item:nth-child(3) { animation-delay: 260ms; }
.mm-item:nth-child(4) { animation-delay: 320ms; }
.mm-item:nth-child(5) { animation-delay: 380ms; }
.mm-item:nth-child(6) { animation-delay: 440ms; }

.mm-item:last-child {
  border-bottom: none;
}

.mm-item > * {
  min-width: 0;
}

.mm-item.is-updating {
  opacity: 0.55;
  pointer-events: none;
}

.mm-item-thumb {
  width: 112px;
  height: 112px;
  border-radius: var(--mm-r);
  overflow: hidden;
  background: var(--mm-bg);
  flex-shrink: 0;
  position: relative;
}

.mm-item-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.mm-item-body {
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: var(--mm-s2);
  padding-right: var(--mm-s6);
}

.mm-item-name {
  font-family: var(--mm-sans);
  font-size: 15px;
  font-weight: 500;
  line-height: 1.35;
  color: var(--mm-fg);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-decoration: none;
}

.mm-item-name:hover {
  color: var(--mm-olive);
}

.mm-item-name:focus-visible {
  outline: 2px solid var(--mm-olive);
  outline-offset: 2px;
  border-radius: 2px;
}

.mm-checkout-header-logo:focus-visible {
  outline: 2px solid var(--mm-olive);
  outline-offset: 4px;
  border-radius: 4px;
}

.mm-item-variant {
  font-size: 12px;
  color: var(--mm-fg-subtle);
  margin: 0;
}

.mm-item-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--mm-s1);
  background: #EEF3EE;  /* olive 8% on white, solid pra contrast checkers */
  color: var(--mm-olive);
  font-size: 12px;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: var(--mm-r-full);
  margin-top: var(--mm-s1);
  align-self: flex-start;
  line-height: 1.2;
}

.mm-item-badge svg {
  flex-shrink: 0;
}

.mm-item-controls {
  grid-column: 2;
  display: flex;
  align-items: center;
  gap: var(--mm-s4);
  margin-top: var(--mm-s3);
}

.mm-item-price {
  grid-column: 3;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  gap: 2px;
  white-space: nowrap;
}

.mm-item-price-value {
  font-family: var(--mm-sans);
  font-size: 17px;
  font-weight: 600;
  color: var(--mm-fg);
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
}

.mm-item-price-sub {
  font-size: 12px;
  color: var(--mm-olive);
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.02em;
}

.mm-item-price-unit {
  font-size: 12px;
  color: var(--mm-fg-subtle);
  font-weight: 400;
  line-height: 1;
  margin-top: 2px;
}


/* ==========================================
   ZONA 7 — Quantity selector (rounded-full pill)
   ========================================== */

.mm-qty {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--mm-border);
  border-radius: var(--mm-r-full);
  padding: 4px;
  background: var(--mm-card);
  transition: border-color var(--mm-tr);
}

.mm-qty:hover {
  border-color: #D1D5DB;
}

.mm-qty-btn {
  width: 36px !important;
  height: 36px !important;
  min-width: 36px !important;
  min-height: 36px !important;
  border: none !important;
  background: transparent !important;
  border-radius: var(--mm-r-full) !important;
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  color: var(--mm-fg-soft);
  cursor: pointer;
  padding: 0 !important;
  font-family: var(--mm-sans);
  transition: background-color var(--mm-tr-slow), color var(--mm-tr-slow);
  -webkit-tap-highlight-color: transparent;
}

.mm-qty-btn svg {
  flex-shrink: 0;
  display: block;
  width: 16px;
  height: 16px;
}

.mm-qty-btn:hover:not(:disabled) {
  background: var(--mm-bg);
  color: var(--mm-fg);
}

.mm-qty-btn:active:not(:disabled) {
  transform: scale(0.92);
}

.mm-qty-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.mm-qty-btn:focus-visible {
  outline: 2px solid var(--mm-olive);
  outline-offset: 2px;
}

.mm-qty-value {
  min-width: 32px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: var(--mm-fg);
  font-variant-numeric: tabular-nums;
  user-select: none;
  padding: 0 var(--mm-s2);
}


/* Remove button (icon-only, minimalist, 44pt hit area) */
.mm-item-remove {
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  background: transparent !important;
  border: none !important;
  color: var(--mm-fg-subtle);
  cursor: pointer;
  padding: 0 !important;
  width: 44px !important;
  height: 44px !important;
  min-width: 44px !important;
  min-height: 44px !important;
  border-radius: var(--mm-r-full) !important;
  transition: color var(--mm-tr), background-color var(--mm-tr);
  -webkit-tap-highlight-color: transparent;
}

.mm-item-remove:hover {
  color: var(--mm-danger);
  background: var(--mm-danger-soft) !important;
}

.mm-item-remove:focus-visible {
  outline: 2px solid var(--mm-olive);
  outline-offset: 2px;
}

.mm-item-remove svg {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  display: block;
}


/* ==========================================
   ZONA 8 — Summary card
   ========================================== */

.mm-sum {
  min-width: 0;
  position: relative;
}

@media (min-width: 1024px) {
  .mm-sum {
    position: sticky;
    top: var(--mm-s5);
  }
}

.mm-sum-card {
  background: var(--mm-card);
  border: 1px solid var(--mm-border);
  border-radius: var(--mm-r-lg);
  padding: var(--mm-s5);
  display: flex;
  flex-direction: column;
  gap: var(--mm-s4);
  animation: mm-fade-up 540ms cubic-bezier(0.16, 1, 0.3, 1) 180ms both;
}

.mm-sum > .mm-h {
  animation: mm-fade-down 380ms cubic-bezier(0.16, 1, 0.3, 1) 120ms both;
}

.mm-help {
  animation: mm-fade-in 400ms cubic-bezier(0.16, 1, 0.3, 1) 480ms both;
}

.mm-trust {
  animation: mm-fade-in 400ms cubic-bezier(0.16, 1, 0.3, 1) 380ms both;
}

/* Sum stack: groups dynamic content (rows + coupon + total) with consistent gap */
.mm-sum-stack {
  display: flex;
  flex-direction: column;
  gap: var(--mm-s4);
}


/* ---- CEP input block ---- */
.mm-cep {
  display: flex;
  flex-direction: column;
  gap: var(--mm-s2);
}

.mm-cep-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--mm-s2);
}

.mm-cep-label-text {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--mm-fg-subtle);
}

.mm-cep-label-link {
  font-size: 11px;
  font-weight: 500;
  color: var(--mm-olive);
  text-decoration: none;
  border-bottom: 1px solid var(--mm-olive-soft);
  padding-bottom: 1px;
  transition: border-color var(--mm-tr);
}

.mm-cep-label-link:hover {
  border-bottom-color: var(--mm-olive);
}

.mm-cep-label-link:focus-visible {
  outline: 2px solid var(--mm-olive);
  outline-offset: 2px;
  border-radius: 2px;
}

.mm-cep-row {
  display: flex;
  align-items: stretch;
  gap: var(--mm-s2);
}

.mm-input {
  flex: 1;
  height: 48px !important;
  min-height: 48px !important;
  padding: 0 var(--mm-s5) !important;
  background: var(--mm-card) !important;
  border: 1px solid var(--mm-border) !important;
  border-radius: var(--mm-r-full) !important;
  font-family: var(--mm-sans) !important;
  font-size: 16px !important;  /* 16px previne zoom no iOS */
  font-weight: 500 !important;
  color: var(--mm-fg) !important;
  outline: none !important;
  transition: border-color var(--mm-tr-slow), box-shadow var(--mm-tr-slow);
  min-width: 0;
  box-sizing: border-box !important;
  -webkit-appearance: none;
  appearance: none;
}

.mm-input::placeholder {
  color: var(--mm-fg-subtle);
  font-weight: 400;
}

.mm-input:hover {
  border-color: #D1D5DB !important;
}

.mm-input:focus,
.mm-input:focus-visible {
  border-color: var(--mm-olive) !important;
  box-shadow: 0 0 0 3px var(--mm-olive-soft) !important;
}

.mm-btn-secondary {
  flex-shrink: 0;
  height: 48px !important;
  min-height: 48px !important;
  padding: 0 var(--mm-s5) !important;
  background: var(--mm-fg) !important;
  color: #FFF !important;
  border: none !important;
  border-radius: var(--mm-r-full) !important;
  font-family: var(--mm-sans) !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background-color var(--mm-tr-slow), transform 150ms;
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  gap: var(--mm-s1);
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box !important;
}

.mm-btn-secondary:hover {
  background: var(--mm-olive-dark) !important;
}

.mm-btn-secondary:active {
  transform: scale(0.97);
}

.mm-btn-secondary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.mm-btn-secondary:focus-visible {
  outline: 3px solid var(--mm-olive);
  outline-offset: 2px;
}


/* ---- Shipping result display ---- */
.mm-shipping-result {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: var(--mm-s3);
  background: var(--mm-bg);
  border-radius: var(--mm-r);
  border: 1px solid var(--mm-border-soft);
  animation: mm-fade-in 320ms var(--mm-tr) both;
}

.mm-shipping-result-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--mm-s2);
  font-size: 12px;
}

.mm-shipping-result-label {
  color: var(--mm-fg-soft);
  font-weight: 500;
}

.mm-shipping-result-value {
  color: var(--mm-fg);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.mm-shipping-result-value.is-free {
  color: var(--mm-olive);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.mm-shipping-result-deadline {
  color: var(--mm-fg-muted);
  font-size: 11px;
}


/* ---- Divider ---- */
.mm-divider {
  border: none;
  border-top: 1px solid var(--mm-divider);
  margin: 0;
}


/* ---- Summary rows (Subtotal / Frete / Desconto) ---- */
.mm-rows {
  display: flex;
  flex-direction: column;
  gap: var(--mm-s3);
}

.mm-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--mm-s3);
  font-size: 13px;
}

.mm-row-label {
  color: var(--mm-fg-soft);
  font-weight: 500;
}

.mm-row-sub {
  color: var(--mm-fg-subtle);
  font-weight: 400;
  font-size: 12px;
}

.mm-row-value {
  color: var(--mm-fg);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.mm-row-value.is-discount {
  color: var(--mm-cta);
}

.mm-row-value.is-free {
  color: var(--mm-olive);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.mm-row-value.is-free svg {
  flex-shrink: 0;
  display: block;
}


/* ---- Total block ---- */
.mm-total {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: var(--mm-s3);
  border-top: 1px solid var(--mm-divider);
}

.mm-total-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mm-fg-subtle);
  margin-bottom: 2px;
}

.mm-total-value {
  font-family: var(--mm-serif);
  font-size: 34px;
  font-weight: 700;
  color: var(--mm-fg);
  line-height: 1.05;
  letter-spacing: -0.01em;
  font-variant-numeric: tabular-nums;
  animation: mm-pop 400ms cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.mm-total-pix {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--mm-s1) var(--mm-s2);
  font-size: 12px;
  font-weight: 600;
  color: var(--mm-olive);
  margin-top: var(--mm-s2);
  font-variant-numeric: tabular-nums;
}

.mm-total-pix-save {
  color: var(--mm-fg-muted);
  font-weight: 500;
  font-size: 11px;
}

.mm-total-parcela {
  font-size: 12px;
  color: var(--mm-fg-soft);
  font-weight: 500;
  margin-top: 2px;
  font-variant-numeric: tabular-nums;
}

.mm-total-pending {
  font-size: 12px;
  color: var(--mm-fg-subtle);
  font-weight: 500;
  line-height: 1.4;
  padding: var(--mm-s3) 0 0;
}


/* ---- Coupon (collapsible) ---- */
.mm-coupon-toggle {
  display: inline-flex;
  align-items: center;
  gap: var(--mm-s2);
  background: transparent;
  border: 1px dashed var(--mm-border);
  border-radius: var(--mm-r-full);
  padding: var(--mm-s3) var(--mm-s4);
  min-height: 44px;
  font-family: var(--mm-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--mm-fg-soft);
  cursor: pointer;
  align-self: flex-start;
  transition: border-color var(--mm-tr), color var(--mm-tr);
  -webkit-tap-highlight-color: transparent;
}

.mm-coupon-toggle:hover {
  border-color: var(--mm-olive);
  color: var(--mm-olive);
}

.mm-coupon-toggle:focus-visible {
  outline: 2px solid var(--mm-olive);
  outline-offset: 2px;
}

.mm-coupon-form {
  display: none;
  gap: var(--mm-s2);
  align-items: stretch;
}

.mm-coupon.is-open .mm-coupon-toggle {
  display: none;
}

.mm-coupon.is-open .mm-coupon-form {
  display: flex;
  animation: mm-fade-in 240ms var(--mm-tr) both;
}

.mm-coupon-applied {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--mm-s2);
  background: var(--mm-olive-soft);
  border: 1px solid var(--mm-olive-soft);
  border-radius: var(--mm-r-full);
  padding: var(--mm-s2) var(--mm-s3) var(--mm-s2) var(--mm-s4);
  font-size: 12px;
  animation: mm-fade-in 240ms var(--mm-tr) both;
}

.mm-coupon-applied-left {
  display: flex;
  align-items: center;
  gap: var(--mm-s2);
  font-weight: 600;
  color: var(--mm-olive);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.mm-coupon-applied-left svg {
  flex-shrink: 0;
}

.mm-coupon-applied button {
  background: transparent;
  border: none;
  color: var(--mm-fg-muted);
  cursor: pointer;
  padding: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--mm-r-full);
  transition: color var(--mm-tr);
}

.mm-coupon-applied button:hover {
  color: var(--mm-danger);
}


/* ---- Primary CTA ---- */
.mm-cta {
  background: var(--mm-cta) !important;
  color: #FFFFFF !important;
  border: none !important;
  border-radius: var(--mm-r-full) !important;
  padding: var(--mm-s4) var(--mm-s5) !important;
  min-height: 56px !important;
  font-family: var(--mm-sans) !important;
  font-size: 15px !important;
  font-weight: 600 !important;
  letter-spacing: 0.01em;
  cursor: pointer;
  width: 100% !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
  gap: var(--mm-s2);
  box-shadow: 0 4px 12px rgba(27, 122, 69, 0.22) !important;
  transition: background-color var(--mm-tr-slow), box-shadow var(--mm-tr-slow), transform 150ms;
  -webkit-tap-highlight-color: transparent;
  outline: none !important;
  box-sizing: border-box !important;
}

.mm-cta:hover {
  background: var(--mm-cta-dark) !important;
  box-shadow: 0 6px 20px rgba(27, 122, 69, 0.28) !important;
}

.mm-cta:active {
  transform: translateY(1px);
  box-shadow: 0 2px 6px rgba(27, 122, 69, 0.22) !important;
}

.mm-cta:focus-visible {
  outline: 3px solid var(--mm-olive) !important;
  outline-offset: 3px !important;
}

.mm-cta svg {
  transition: transform var(--mm-tr-slow);
}

.mm-cta:hover svg {
  transform: translateX(3px);
}


/* ---- Trust badges ---- */
.mm-trust {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px 18px;
  padding-top: var(--mm-s2);
}

.mm-trust-item {
  display: inline-flex;
  align-items: center;
  gap: var(--mm-s1);
  font-size: 12px;
  color: var(--mm-fg-subtle);
  font-weight: 500;
  white-space: nowrap;
  line-height: 1;
}

.mm-trust-item svg {
  flex-shrink: 0;
  width: 13px;
  height: 13px;
  color: var(--mm-fg-muted);
}


/* ---- WhatsApp help block (objection breaker) ---- */
.mm-help {
  display: flex;
  align-items: center;
  gap: var(--mm-s3);
  margin-top: var(--mm-s2);
  padding: var(--mm-s3) var(--mm-s4);
  background: #F4FCF7;  /* very subtle green-tint, solid for contrast checkers */
  border: 1px solid #DDEFE3;
  border-radius: var(--mm-r);
  text-decoration: none;
  color: var(--mm-fg);
  font-size: 13px;
  line-height: 1.4;
  min-height: 56px;
  transition: background-color var(--mm-tr-slow), border-color var(--mm-tr-slow);
}

.mm-help:hover {
  background: #E9F8EE;
  border-color: #BDDFC9;
}

.mm-help:focus-visible {
  outline: 2px solid #25D366;
  outline-offset: 2px;
}

.mm-help svg {
  color: #25D366;
  flex-shrink: 0;
}

.mm-help span {
  flex: 1 1 auto;
  min-width: 0;
}

.mm-help strong {
  display: block;
  font-weight: 600;
  color: var(--mm-fg);
  font-size: 12px;
  margin-bottom: 1px;
}


/* ==========================================
   ZONA 9 — Empty cart state
   ========================================== */

.mm-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--mm-s10) var(--mm-s4);
  gap: var(--mm-s4);
  background: var(--mm-card);
  border: 1px solid var(--mm-border);
  border-radius: var(--mm-r-lg);
  animation: mm-fade-up 400ms var(--mm-tr) both;
}

.mm-empty-icon {
  color: var(--mm-fg-muted);
  margin-bottom: var(--mm-s2);
}

.mm-empty-title {
  font-family: var(--mm-serif);
  font-size: 24px;
  font-weight: 400;
  color: var(--mm-fg);
  margin: 0;
  letter-spacing: -0.01em;
}

.mm-empty-desc {
  color: var(--mm-fg-soft);
  font-size: 14px;
  max-width: 380px;
  margin: 0;
}

.mm-empty-cta {
  display: inline-flex;
  align-items: center;
  gap: var(--mm-s2);
  background: var(--mm-cta);
  color: #FFF;
  text-decoration: none;
  padding: var(--mm-s3) var(--mm-s6);
  border-radius: var(--mm-r-full);
  font-size: 14px;
  font-weight: 600;
  margin-top: var(--mm-s2);
  box-shadow: 0 4px 12px rgba(27, 122, 69, 0.22);
  transition: background-color var(--mm-tr-slow);
}

.mm-empty-cta:hover {
  background: var(--mm-cta-dark);
}

.mm-empty-perks {
  font-size: 11px;
  color: var(--mm-fg-muted);
  margin-top: var(--mm-s2);
}


/* ==========================================
   ZONA 10 — Skeleton (loading state)
   ========================================== */

.mm-skel {
  background: linear-gradient(
    90deg,
    var(--mm-border-soft) 0%,
    #F7F7F7 50%,
    var(--mm-border-soft) 100%
  );
  background-size: 200% 100%;
  animation: mm-shimmer 1400ms ease-in-out infinite;
  border-radius: var(--mm-r-sm);
}

.mm-skel-item {
  padding: var(--mm-s5) 0;
  display: grid;
  grid-template-columns: 112px 1fr auto;
  gap: var(--mm-s4);
  align-items: flex-start;
  border-bottom: 1px solid var(--mm-border-soft);
}

.mm-skel-item:last-child {
  border-bottom: none;
}

.mm-skel-thumb {
  width: 112px;
  height: 112px;
  border-radius: var(--mm-r);
}

.mm-skel-lines {
  display: flex;
  flex-direction: column;
  gap: var(--mm-s2);
  padding-top: var(--mm-s1);
}

.mm-skel-line {
  height: 12px;
}

.mm-skel-line.w-full { width: 100%; }
.mm-skel-line.w-3-4  { width: 75%; }
.mm-skel-line.w-1-2  { width: 50%; }
.mm-skel-line.w-1-3  { width: 33%; }


/* ==========================================
   ZONA 11 — Mobile responsive (< 1024px)
   ========================================== */

@media (max-width: 1023px) {
  .mm-items-card,
  .mm-sum-card {
    padding: 0 var(--mm-s4);
    margin: 0 var(--mm-s3);
  }
  .mm-h {
    margin-left: var(--mm-s3);
    margin-right: var(--mm-s3);
  }

  .mm-item {
    grid-template-columns: 88px minmax(0, 1fr);
    grid-template-areas:
      "thumb body"
      "thumb price"
      "controls controls";
    gap: var(--mm-s2) var(--mm-s3);
    padding: var(--mm-s4) 0;
  }

  .mm-item-thumb {
    grid-area: thumb;
    width: 88px;
    height: 88px;
    align-self: start;
  }

  .mm-item-body {
    grid-area: body;
    padding-right: 0;
  }

  .mm-item-controls {
    grid-area: controls;
    margin-top: var(--mm-s2);
    grid-column: auto;
    justify-content: space-between;
  }

  .mm-item-price {
    grid-area: price;
    align-items: flex-start;
    text-align: left;
    grid-column: auto;
    grid-row: auto;
  }

  .mm-item-name {
    font-size: 14px;
  }

  .mm-item-price-value {
    font-size: 15px;
  }

  /* Touch target compliance: bump qty buttons to 44 on mobile (after base rule) */
  .mm-qty-btn {
    width: 44px !important;
    height: 44px !important;
    min-width: 44px !important;
    min-height: 44px !important;
  }
  .mm-qty-value {
    min-width: 36px;
    font-size: 15px;
  }

  .mm-skel-item {
    grid-template-columns: 88px 1fr;
  }

  .mm-skel-thumb {
    width: 88px;
    height: 88px;
  }

  .mm-h {
    font-size: 26px;
    margin-bottom: var(--mm-s3);
  }

  .mm-sum-card {
    padding: var(--mm-s4);
  }

  .mm-total-value {
    font-size: 30px;
  }

  .mm-cep-row {
    flex-direction: row;
  }

  .mm-btn-secondary {
    padding: 0 var(--mm-s4);
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  #mm-layout {
    padding: var(--mm-s4) 0 var(--mm-s10);
  }
  .mm-item-thumb {
    width: 80px;
    height: 80px;
  }
  .mm-item {
    grid-template-columns: 80px minmax(0, 1fr);
  }
  .mm-item-name {
    font-size: 13px;
  }
  .mm-item-price-value {
    font-size: 14px;
  }
}


/* ==========================================
   ZONA 12 — Keyframes
   ========================================== */

@keyframes mm-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes mm-fade-up {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes mm-fade-down {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes mm-pop {
  0%   { opacity: 0; transform: scale(0.94); }
  60%  { opacity: 1; transform: scale(1.02); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes mm-shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Respeitar prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  #mm-layout *,
  #mm-layout *::before,
  #mm-layout *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}


/* ==========================================
   ZONA 13 — Onepage (outras etapas do checkout — fallback)
   ========================================== */

.checkout-etapa-3 input {
  min-height: 44px !important;
  font-size: 16px !important; /* previne zoom iOS */
}


/* ==========================================
   ZONA 14 — IDENTIFY (Fase 2) — full shadow-render layout
   Reaproveita tokens da zona 2 e componentes da zona 6+
   Adiciona padrões novos: .mm-input-wrap (input com ícone),
   .mm-input-error, .mm-cta.is-loading, e estilos identify-only
   ========================================== */

/* ----- input com ícone (padrão novo, reutilizável) -----
   !important defensivo: Magazord aplica display:flex column em
   .checkout-main label e .holder-input que quebra o layout. */
#mm-layout .mm-input-wrap,
#mm-layout div.mm-input-wrap {
  position: relative !important;
  display: block !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  flex-direction: row !important;
}

#mm-layout .mm-input-wrap .mm-input-icon {
  position: absolute !important;
  top: 50% !important;
  left: 18px !important;
  transform: translateY(-50%) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 18px !important;
  height: 18px !important;
  margin: 0 !important;
  padding: 0 !important;
  color: var(--mm-fg-meta);
  pointer-events: none;
  transition: color 180ms ease;
  z-index: 1;
}

#mm-layout .mm-input-wrap .mm-input {
  padding-left: 48px !important;
  width: 100% !important;
  display: block !important;
  box-sizing: border-box !important;
}

#mm-layout .mm-input-wrap:focus-within .mm-input-icon {
  color: var(--mm-olive);
}

/* Error state — sem shake, só border + shadow */
#mm-layout .mm-input.mm-input-error {
  border-color: #DC2626 !important;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15) !important;
}

/* CTA loading state */
#mm-layout .mm-cta.is-loading {
  pointer-events: none;
  opacity: 0.7;
  position: relative;
}
#mm-layout .mm-cta.is-loading::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 22px;
  width: 18px;
  height: 18px;
  margin-top: -9px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: mm-load-spin 700ms linear infinite;
}
#mm-layout .mm-cta.is-loading svg {
  opacity: 0;
}

@keyframes mm-load-spin {
  to { transform: rotate(360deg); }
}

/* ----- grid layout do identify ----- */
#mm-layout.mm-id-layout {
  animation: mm-fade-in 320ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

#mm-layout .mm-id-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 32px;
  align-items: start;
  max-width: 1180px;
  margin: 24px auto 48px;
  padding: 0 24px;
}

@media (max-width: 980px) {
  #mm-layout .mm-id-grid {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 10px;
    padding: 0 8px;
  }
}

/* ----- coluna do form ----- */
#mm-layout .mm-id-form-col {
  background: var(--mm-card);
  border: 1px solid var(--mm-border);
  border-radius: 16px;
  padding: 40px 44px;
  box-shadow: var(--mm-shadow);
  animation: mm-fade-up 480ms cubic-bezier(0.16, 1, 0.3, 1) 80ms both;
}

@media (max-width: 980px) {
  #mm-layout .mm-id-form-col {
    padding: 28px 22px;
    border-radius: 14px;
  }
}

#mm-layout .mm-id-h2 {
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--mm-fg);
  margin: 0 0 8px;
  letter-spacing: -0.01em;
}

@media (max-width: 980px) {
  #mm-layout .mm-id-h2 {
    font-size: 22px;
  }
}

#mm-layout .mm-id-sub {
  font-size: 15px;
  line-height: 1.55;
  color: var(--mm-fg-soft);
  margin: 0 0 28px;
}

#mm-layout .mm-id-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
}

#mm-layout .mm-id-form .mm-cta {
  margin-top: 4px;
}

/* microcopy abaixo do input */
#mm-layout .mm-id-microcopy {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  color: var(--mm-fg-meta);
  margin: -6px 0 0 4px;
  line-height: 1.4;
}
#mm-layout .mm-id-microcopy svg {
  flex-shrink: 0;
  color: var(--mm-olive);
}

/* divider "ou" */
#mm-layout .mm-id-divider {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 24px 0 18px;
  color: var(--mm-fg-subtle);
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
#mm-layout .mm-id-divider::before,
#mm-layout .mm-id-divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--mm-border);
}

/* google login slot */
#mm-layout .mm-id-google-slot {
  display: flex;
  justify-content: center;
  min-height: 48px;
  margin-bottom: 18px;
}
#mm-layout .mm-id-google-slot:empty::before {
  content: "Carregando opção Google...";
  color: var(--mm-fg-subtle);
  font-size: 13px;
  align-self: center;
}
#mm-layout .mm-id-google-slot.is-loaded:empty::before {
  display: none;
}
/* override Magazord styles dentro do slot pra encaixar */
#mm-layout .mm-id-google-slot .social-login-area {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}
#mm-layout .mm-id-google-slot .btn-login-social,
#mm-layout .mm-id-google-slot .button-google {
  width: 100% !important;
  max-width: 320px;
  margin: 0 auto !important;
}

/* guest CTA — navegação direta pra onepage (não toggle de panel)
   !important defensivo pra Magazord button overrides */
#mm-layout button.mm-id-guest-toggle,
#mm-layout .mm-id-guest-toggle {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 10px !important;
  width: 100% !important;
  background: transparent !important;
  border: 1.5px dashed var(--mm-border) !important;
  border-radius: 9999px !important;
  padding: 14px 20px !important;
  font-family: inherit !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  line-height: 1.3 !important;
  color: var(--mm-olive) !important;
  cursor: pointer !important;
  transition: all 180ms ease !important;
  margin-top: 4px !important;
  text-align: center !important;
  flex-direction: row !important;
  flex-wrap: nowrap !important;
  min-height: 48px !important;
  box-shadow: none !important;
}
#mm-layout .mm-id-guest-toggle:hover {
  border-color: var(--mm-olive) !important;
  background: var(--mm-olive-soft) !important;
  transform: translateY(-1px);
}
#mm-layout .mm-id-guest-toggle:focus-visible {
  outline: none !important;
  border-color: var(--mm-olive) !important;
  box-shadow: 0 0 0 3px var(--mm-olive-soft) !important;
}
#mm-layout .mm-id-guest-toggle.is-loading {
  pointer-events: none !important;
  opacity: 0.7 !important;
}
#mm-layout .mm-id-guest-toggle .mm-id-guest-icon,
#mm-layout .mm-id-guest-toggle .mm-id-guest-arrow {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-shrink: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
}
#mm-layout .mm-id-guest-toggle .mm-id-guest-arrow {
  margin-left: auto !important;
  opacity: 0.6;
  transition: transform 180ms ease, opacity 180ms ease;
}
#mm-layout .mm-id-guest-toggle:hover .mm-id-guest-arrow {
  transform: translateX(3px);
  opacity: 1;
}
#mm-layout .mm-id-guest-toggle .mm-id-guest-icon svg,
#mm-layout .mm-id-guest-toggle .mm-id-guest-arrow svg {
  display: block !important;
}
#mm-layout .mm-id-guest-toggle .mm-id-guest-label {
  display: inline !important;
  margin: 0 !important;
  padding: 0 !important;
  font: inherit !important;
  color: inherit !important;
}

/* trust strip identify */
#mm-layout .mm-id-trust {
  margin-top: 24px;
  justify-content: center;
}

/* política de privacidade */
#mm-layout .mm-id-lgpd {
  margin: 16px 0 0;
  text-align: center;
  font-size: 12px;
  color: var(--mm-fg-subtle);
  line-height: 1.5;
}
#mm-layout .mm-id-lgpd a {
  color: var(--mm-olive);
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* ----- coluna do summary (sticky desktop) ----- */
#mm-layout .mm-id-sum {
  position: sticky;
  top: 24px;
  animation: mm-fade-up 540ms cubic-bezier(0.16, 1, 0.3, 1) 180ms both;
}

@media (max-width: 980px) {
  #mm-layout .mm-id-sum {
    position: static;
  }
}

#mm-layout .mm-id-sum .mm-h {
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: 15px;
  font-weight: 700;
  color: var(--mm-fg-soft);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 12px;
}

#mm-layout .mm-id-sum .mm-sum-card {
  background: var(--mm-card);
  border: 1px solid var(--mm-border);
  border-radius: 16px;
  padding: 24px;
  box-shadow: var(--mm-shadow);
}

/* thumbnails do resumo */
#mm-layout .mm-id-thumbs {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-bottom: 18px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--mm-border);
}

#mm-layout .mm-id-thumb {
  display: grid;
  grid-template-columns: 56px 1fr auto;
  gap: 12px;
  align-items: center;
}

#mm-layout .mm-id-thumb-img {
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  background: #F5F5F5;
  overflow: hidden;
  border: 1px solid var(--mm-border);
}
#mm-layout .mm-id-thumb-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
#mm-layout .mm-id-thumb-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--mm-fg-subtle);
}

/* Qty inline prefix no nome (não mais badge sobre a imagem) */
#mm-layout .mm-id-thumb-name .mm-id-thumb-qty,
#mm-layout strong.mm-id-thumb-qty {
  display: inline-block;
  font-weight: 700;
  color: var(--mm-olive);
  font-size: 13.5px;
  margin-right: 4px;
  letter-spacing: 0;
}

#mm-layout .mm-id-thumb-body {
  min-width: 0;
}
#mm-layout .mm-id-thumb-name {
  font-size: 13.5px;
  line-height: 1.35;
  color: var(--mm-fg);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 500;
}
#mm-layout .mm-id-thumb-variant {
  font-size: 11.5px;
  color: var(--mm-fg-meta);
  margin: 2px 0 0;
  line-height: 1.3;
}
#mm-layout .mm-id-thumb-price {
  font-size: 13px;
  font-weight: 600;
  color: var(--mm-fg);
  white-space: nowrap;
}

#mm-layout .mm-id-thumb-more {
  font-size: 12.5px;
  color: var(--mm-fg-meta);
  text-align: center;
  padding: 6px 0 0;
  font-style: italic;
}

/* link "Editar carrinho" abaixo do total */
#mm-layout .mm-id-edit-cart {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: 16px 0 0;
  padding: 10px;
  font-size: 13px;
  color: var(--mm-olive);
  text-decoration: none;
  border-radius: 8px;
  transition: background 180ms ease;
}
#mm-layout .mm-id-edit-cart:hover {
  background: var(--mm-olive-soft);
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* empty state do summary */
#mm-layout .mm-sum-empty {
  text-align: center;
  padding: 12px 0;
}
#mm-layout .mm-sum-empty p {
  font-size: 13.5px;
  color: var(--mm-fg-meta);
  margin: 0 0 14px;
}
#mm-layout .mm-sum-empty .mm-btn-secondary {
  display: inline-flex;
  text-decoration: none;
}


/* ==========================================
   ZONA 15 — ONEPAGE (Fase 3) — dados pessoais + endereço + frete
   Reaproveita .mm-input-wrap, .mm-cta, .mm-trust, .mm-help, etc da Zona 14
   ========================================== */

/* Layout grid mantém o mesmo da Fase 2 (.mm-id-grid) — só ajustes */
#mm-layout.mm-op-layout {
  animation: mm-fade-in 320ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

#mm-layout .mm-op-grid {
  /* mesmo grid 1.4fr / 1fr da identify */
}

/* Coluna do form é wider que a da identify pra acomodar 2 cards */
#mm-layout .mm-op-form-col {
  background: transparent;
  border: none;
  padding: 0;
  box-shadow: none;
  animation: mm-fade-up 480ms cubic-bezier(0.16, 1, 0.3, 1) 80ms both;
}

#mm-layout .mm-op-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 0 16px;
}

/* ----- Cards (dados + endereço) ----- */
#mm-layout .mm-op-card {
  background: var(--mm-card);
  border: 1px solid var(--mm-border);
  border-radius: 16px;
  padding: 32px 36px;
  box-shadow: var(--mm-shadow);
}

@media (max-width: 980px) {
  #mm-layout .mm-op-card {
    padding: 24px 20px;
    border-radius: 14px;
  }
}

#mm-layout .mm-op-card-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--mm-fg);
  margin: 0 0 20px;
  letter-spacing: -0.005em;
}
#mm-layout .mm-op-card-title svg {
  flex-shrink: 0;
  color: var(--mm-olive);
}

/* Grid 2-col interno do card */
#mm-layout .mm-op-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
#mm-layout .mm-op-col-2 {
  grid-column: 1 / -1;
}

@media (max-width: 600px) {
  #mm-layout .mm-op-grid-2 {
    grid-template-columns: 1fr;
  }
  #mm-layout .mm-op-col-2 {
    grid-column: 1;
  }
}

/* Microcopy soft (LGPD/garantia) abaixo do card de dados */
#mm-layout .mm-op-microcopy-soft {
  margin: 14px 0 0;
  padding: 0;
  font-size: 12px;
  color: var(--mm-fg-meta);
  line-height: 1.5;
}

/* Input sem ícone (números, complemento, etc) — sem padding-left extra */
#mm-layout .mm-input.mm-input-noicon {
  padding-left: 18px !important;
}
#mm-layout .mm-input-wrap:has(.mm-input-noicon) .mm-input-icon {
  display: none !important;
}
/* Fallback pra browsers sem :has() — input-noicon assume que não tem icon */

/* Status indicator dentro do CEP input (loading/ok/error) */
#mm-layout .mm-input-wrap .mm-input-status {
  position: absolute !important;
  top: 50% !important;
  right: 18px !important;
  transform: translateY(-50%) !important;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--mm-fg-meta);
  pointer-events: none;
  z-index: 2;
}
#mm-layout .mm-input-wrap .mm-input-status.is-loading::before {
  content: "";
  width: 14px;
  height: 14px;
  border: 2px solid var(--mm-border);
  border-top-color: var(--mm-olive);
  border-radius: 50%;
  animation: mm-load-spin 700ms linear infinite;
  display: inline-block;
}
#mm-layout .mm-input-wrap .mm-input-status.is-ok {
  color: var(--mm-cta);
}
#mm-layout .mm-input-wrap .mm-input-status.is-error {
  color: #DC2626;
}

/* Link "Não sei meu CEP" abaixo do input */
#mm-layout .mm-op-cep-help {
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  color: var(--mm-olive);
  text-decoration: none;
  margin: -2px 0 0;
  padding: 4px 0;
  grid-column: 1 / -1;
}
#mm-layout .mm-op-cep-help:hover {
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* ----- Frete revealed card ----- */
/* Frete slot — reserva espaço pra evitar CLS (ui-ux-pro-max §3 content-jumping).
   Quando vazio mostra placeholder neutro; quando preenchido vira card colorido. */
#mm-layout .mm-op-frete {
  margin-top: 16px;
  min-height: 62px;
}
#mm-layout .mm-op-frete:empty::before {
  content: "Informe o CEP para calcular o frete";
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 18px;
  background: #FAFAFA;
  border: 1px dashed var(--mm-border);
  border-radius: 10px;
  font-size: 13px;
  color: var(--mm-fg-subtle);
  min-height: 48px;
}

/* Tabular nums em preços — previne layout shift quando valores mudam
   (ui-ux-pro-max §6 number-tabular) */
#mm-layout .mm-total-value,
#mm-layout .mm-total-pix,
#mm-layout .mm-total-parcela,
#mm-layout .mm-row-value,
#mm-layout .mm-id-thumb-price,
#mm-layout .mm-op-frete-value {
  font-variant-numeric: tabular-nums;
  font-feature-settings: "tnum";
}

/* WhatsApp help na sidebar — margin-top pra separar do summary card */
#mm-layout .mm-sum-help {
  margin-top: 14px;
}

#mm-layout .mm-op-frete-loading {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  background: #FAFAFA;
  border: 1px dashed var(--mm-border);
  border-radius: 10px;
  font-size: 13.5px;
  color: var(--mm-fg-meta);
  animation: mm-fade-in 220ms ease-out both;
}
#mm-layout .mm-op-frete-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--mm-border);
  border-top-color: var(--mm-olive);
  border-radius: 50%;
  animation: mm-load-spin 700ms linear infinite;
  flex-shrink: 0;
}

#mm-layout .mm-op-frete-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  background: var(--mm-card);
  border: 1.5px solid var(--mm-border);
  border-radius: 12px;
  animation: mm-pop 380ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
#mm-layout .mm-op-frete-card.is-free {
  background: var(--mm-cta-soft);
  border-color: var(--mm-cta);
}
#mm-layout .mm-op-frete-icon {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--mm-olive);
}
#mm-layout .mm-op-frete-card.is-free .mm-op-frete-icon {
  color: var(--mm-cta);
}
#mm-layout .mm-op-frete-icon svg {
  width: 22px !important;
  height: 22px !important;
  display: block;
}
#mm-layout .mm-op-frete-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
}
#mm-layout .mm-op-frete-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
#mm-layout .mm-op-frete-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--mm-fg);
  letter-spacing: -0.01em;
}
#mm-layout .mm-op-frete-value {
  font-size: 16px;
  font-weight: 700;
  color: var(--mm-fg);
  letter-spacing: -0.01em;
  white-space: nowrap;
}
#mm-layout .mm-op-frete-value.is-free {
  color: var(--mm-cta);
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.04em;
}
#mm-layout .mm-op-frete-deadline {
  font-size: 13px;
  color: var(--mm-fg-soft);
  font-weight: 500;
}
#mm-layout .mm-op-frete-city {
  font-size: 12px;
  color: var(--mm-fg-meta);
}

/* Múltiplas opções (toggle + lista) */
#mm-layout .mm-op-frete-options {
  margin-top: 8px;
}
#mm-layout .mm-op-frete-toggle {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  padding: 6px 0;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  color: var(--mm-olive);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
}
#mm-layout .mm-op-frete-toggle:hover {
  color: var(--mm-olive-dark);
}
#mm-layout .mm-op-frete-options-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
}
#mm-layout .mm-op-frete-options-list[hidden] { display: none; }
#mm-layout .mm-op-frete-opt {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  background: var(--mm-card);
  border: 1.5px solid var(--mm-border);
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  width: 100%;
  font: inherit;
  color: inherit;
  transition: border-color 120ms ease, background 120ms ease, box-shadow 120ms ease;
}
#mm-layout .mm-op-frete-opt:hover {
  border-color: var(--mm-olive);
  background: var(--mm-olive-soft);
}
#mm-layout .mm-op-frete-opt.is-selected {
  border-color: var(--mm-olive);
  background: var(--mm-olive-soft);
  box-shadow: 0 0 0 3px rgba(75, 102, 74, 0.08);
}
#mm-layout .mm-op-frete-opt-radio {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid var(--mm-border);
  background: var(--mm-card);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
#mm-layout .mm-op-frete-opt.is-selected .mm-op-frete-opt-radio {
  border-color: var(--mm-olive);
}
#mm-layout .mm-op-frete-opt-radio span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--mm-olive);
  opacity: 0;
}
#mm-layout .mm-op-frete-opt.is-selected .mm-op-frete-opt-radio span {
  opacity: 1;
}
#mm-layout .mm-op-frete-opt-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
}
#mm-layout .mm-op-frete-opt-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--mm-fg);
  letter-spacing: -0.01em;
}
#mm-layout .mm-op-frete-opt-deadline {
  font-size: 12px;
  color: var(--mm-fg-meta);
}
#mm-layout .mm-op-frete-opt-value {
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 700;
  color: var(--mm-fg);
  white-space: nowrap;
}
#mm-layout .mm-op-frete-opt-value.is-free {
  color: var(--mm-cta);
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.04em;
}
#mm-layout .mm-op-frete-error {
  padding: 14px 18px;
  background: #FEF2F2;
  border: 1px solid #FCA5A5;
  border-radius: 10px;
  color: #B91C1C;
  font-size: 13px;
  line-height: 1.4;
  animation: mm-fade-in 220ms ease-out both;
}

/* ----- CTA pagamento ----- */
#mm-layout .mm-op-cta {
  margin-top: 4px;
  font-size: 16px;
}

#mm-layout .mm-op-cta-sub {
  margin: -8px 0 0;
  text-align: center;
  justify-content: center;
}

/* ----- Overlay fullscreen "Processando..." ----- */
#mm-op-overlay {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: mm-fade-in 220ms ease-out both;
}
#mm-op-overlay .mm-op-overlay-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: 36px 48px;
  background: var(--mm-card, #FFFFFF);
  border: 1px solid var(--mm-border, #E7E7E7);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}
#mm-op-overlay .mm-op-overlay-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #E7E7E7;
  border-top-color: #4B664A;
  border-radius: 50%;
  animation: mm-load-spin 800ms linear infinite;
}
#mm-op-overlay .mm-op-overlay-text {
  margin: 0;
  font-family: 'Poppins', system-ui, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #121212;
  letter-spacing: -0.005em;
}

/* ==========================================
   ZONA 16 — STEP 3 PAYMENT (Fase 4)
   Hijack do step 3 do /onepage — radios PIX/cartão/boleto, cartão form
   inline, summary lateral dinâmico, trust máximo, CTA primário único.
   Reaproveita tokens + componentes das zonas 2, 14, 15.
   ========================================== */

/* Layout grid (mirror .mm-id-grid / .mm-op-grid) */
#mm-layout.mm-op-step3-layout {
  animation: mm-fade-in 320ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* Step 3: 2-col layout — payment card sozinho à esquerda,
   coluna direita empilha dados + endereço + resumo. */
#mm-layout .mm-op-step3-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: 20px;
  align-items: start;
  max-width: 1280px;
  margin: 12px auto 32px;
  padding: 0 24px;
}

#mm-layout .mm-op-step3-left {
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: mm-fade-up 480ms cubic-bezier(0.16, 1, 0.3, 1) 80ms both;
}

/* Sidebar direita: empilha dados + endereço + resumo */
#mm-layout .mm-op-step3-sum-wrap {
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: sticky;
  top: 24px;
  animation: mm-fade-up 520ms cubic-bezier(0.16, 1, 0.3, 1) 140ms both;
}

/* Cards "completed" (dados + endereço) viram filhos diretos da coluna */
#mm-layout .mm-op-step3-completed {
  display: contents;
}

/* Summary inline (não sticky interno) */
#mm-layout .mm-op-step3-sum-wrap .mm-op-step3-sum,
#mm-layout .mm-op-step3-sum-wrap .mm-id-sum {
  position: static !important;
  top: auto !important;
  margin: 0;
  animation: none;
}

@media (max-width: 980px) {
  #mm-layout .mm-op-step3-grid {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 10px;
    padding: 0 8px;
  }
  #mm-layout .mm-op-step3-sum-wrap {
    position: static;
    order: -1;
  }
}

#mm-layout .mm-op-completed-card {
  background: var(--mm-card);
  border: 1px solid var(--mm-border);
  border-radius: 14px;
  padding: 16px 18px;
  box-shadow: var(--mm-shadow-sm);
  min-width: 0;
}
#mm-layout .mm-op-completed-head {
  margin-bottom: 10px;
}

#mm-layout .mm-op-completed-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

#mm-layout .mm-op-completed-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--mm-cta);
  color: #fff;
  flex-shrink: 0;
}
#mm-layout .mm-op-completed-check svg {
  width: 13px;
  height: 13px;
}

#mm-layout .mm-op-completed-title {
  flex: 1;
  margin: 0;
  font-family: 'Poppins', system-ui, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: var(--mm-fg);
  letter-spacing: -0.005em;
}

#mm-layout .mm-op-completed-edit {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  color: var(--mm-olive);
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 6px;
  transition: background 150ms ease;
}
#mm-layout .mm-op-completed-edit:hover {
  background: rgba(75, 102, 74, 0.08);
  text-decoration: none;
}
#mm-layout .mm-op-completed-edit svg {
  flex-shrink: 0;
}

#mm-layout .mm-op-completed-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0;
  padding: 0;
}
#mm-layout .mm-op-completed-body > div {
  display: flex;
  gap: 6px;
  align-items: baseline;
  font-size: 13px;
  line-height: 1.45;
}
#mm-layout .mm-op-completed-body dt {
  font-weight: 500;
  color: var(--mm-fg-meta);
  min-width: 48px;
  margin: 0;
}
#mm-layout .mm-op-completed-body dd {
  margin: 0;
  color: var(--mm-fg);
  word-break: break-word;
}

#mm-layout .mm-op-completed-address {
  font-style: normal;
  font-size: 13px;
  line-height: 1.55;
  color: var(--mm-fg);
}

/* ----- Card principal de pagamento ----- */
#mm-layout .mm-op-step3-card {
  background: var(--mm-card);
  border: 1px solid var(--mm-border);
  border-radius: 16px;
  padding: 22px 28px 24px;
  box-shadow: var(--mm-shadow);
}

@media (max-width: 760px) {
  #mm-layout .mm-op-step3-card {
    padding: 18px 16px;
    border-radius: 14px;
  }
}

#mm-layout .mm-op-step3-heading {
  margin-bottom: 16px;
}
#mm-layout .mm-op-step3-heading .mm-h {
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--mm-fg);
  margin: 0 0 6px;
  letter-spacing: -0.01em;
  line-height: 1.2;
}
#mm-layout .mm-op-step3-sub {
  margin: 0;
  font-size: 13px;
  color: var(--mm-fg-meta);
  line-height: 1.55;
}

/* ----- Radio cards (PIX / Cartão / Boleto) ----- */
#mm-layout .mm-op-pay-radios {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

/* Defensivo: Magazord aplica display:flex column em label → força block
   pros label radios do nosso step 3 (mas também adicionamos width/box-sizing
   explícitos nos descendants pra evitar regressões). */
#mm-layout .mm-op-pay-radio {
  display: block !important;
  flex-direction: initial !important;
  width: 100% !important;
  box-sizing: border-box !important;
  background: var(--mm-card);
  border: 1.5px solid var(--mm-border);
  border-radius: 14px;
  padding: 0;
  cursor: pointer;
  transition: border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
  overflow: hidden;
  position: relative;
  margin: 0 !important;
}
#mm-layout .mm-op-pay-head,
#mm-layout .mm-op-pay-detail,
#mm-layout .mm-op-card-form,
#mm-layout .mm-op-card-field {
  width: 100%;
  box-sizing: border-box;
}
#mm-layout .mm-op-card-field {
  min-width: 0; /* permite shrink dentro do grid */
}
#mm-layout .mm-op-card-field label {
  display: block !important;
  flex-direction: initial !important;
  margin: 0 !important;
  padding: 0 !important;
}
#mm-layout .mm-op-pay-radio:hover {
  border-color: #c7c7c7;
  background: #fdfdfd;
}
#mm-layout .mm-op-pay-radio.is-active {
  border-color: var(--mm-cta);
  background: #fafbfa;
  box-shadow: 0 0 0 3px rgba(27, 122, 69, 0.08), var(--mm-shadow-sm);
}

/* Esconde radio nativo — mm-shadow-mode wildcard força opacity:1, width:auto
   e position:static em todos descendentes do #mm-layout, então aqui precisamos
   de !important pra manter o input invisível. Usa position absolute fora da tela
   pra evitar clip/tab focus acidental. */
#mm-layout .mm-op-pay-radio input[type="radio"] {
  position: absolute !important;
  left: -9999px !important;
  top: -9999px !important;
  width: 1px !important;
  height: 1px !important;
  opacity: 0 !important;
  pointer-events: none !important;
  clip: rect(0, 0, 0, 0);
}

#mm-layout .mm-op-pay-head {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 22px;
  min-height: 72px;
}

/* !important em width/height/position — mm-shadow-mode wildcard
   (#checkout-main-area.mm-shadow-mode #mm-layout *) força
   position:static, width:auto, height:auto, quebrando o dot. */
#mm-layout .mm-op-pay-radio-dot {
  flex-shrink: 0;
  width: 20px !important;
  height: 20px !important;
  border: 2px solid #d4d4d4;
  border-radius: 50% !important;
  background: #fff;
  position: relative !important;
  transition: border-color 180ms ease;
}
#mm-layout .mm-op-pay-radio.is-active .mm-op-pay-radio-dot {
  border-color: var(--mm-cta);
}
#mm-layout .mm-op-pay-radio.is-active .mm-op-pay-radio-dot::after {
  content: '';
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%);
  width: 10px !important;
  height: 10px !important;
  background: var(--mm-cta);
  border-radius: 50% !important;
  animation: mm-pop 240ms cubic-bezier(0.16, 1, 0.3, 1);
}

#mm-layout .mm-op-pay-icon {
  flex-shrink: 0;
  color: var(--mm-olive);
  display: inline-flex;
  align-items: center;
}
#mm-layout .mm-op-pay-radio.is-active .mm-op-pay-icon {
  color: var(--mm-cta);
}

#mm-layout .mm-op-pay-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

#mm-layout .mm-op-pay-title {
  font-family: 'Poppins', system-ui, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: var(--mm-fg);
  letter-spacing: -0.005em;
}

#mm-layout .mm-op-pay-sub {
  font-size: 12.5px;
  color: var(--mm-fg-meta);
  line-height: 1.35;
}

#mm-layout .mm-op-pay-price {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  flex-shrink: 0;
}

#mm-layout .mm-op-pay-badge-save {
  display: inline-block;
  font-family: 'Poppins', system-ui, sans-serif;
  font-size: 10.5px;
  font-weight: 600;
  color: #fff;
  background: var(--mm-olive);
  padding: 3px 8px;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  white-space: nowrap;
}

#mm-layout .mm-op-pay-amount {
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--mm-fg);
  letter-spacing: -0.01em;
  font-variant-numeric: tabular-nums lining-nums;
  white-space: nowrap;
}
#mm-layout .mm-op-step3-sum .mm-total-value,
#mm-layout .mm-op-step3-sum .mm-row-value {
  font-variant-numeric: tabular-nums lining-nums;
}
#mm-layout .mm-op-pay-radio.is-active .mm-op-pay-amount {
  color: var(--mm-cta);
}

/* ----- Detail panel (expande quando ativo) -----
   Magazord CSS força overflow:visible em descendants do checkout-main —
   combate com !important + height:0 + visibility:hidden pra garantir o
   collapse absoluto quando a forma não está ativa. */
/* Detail collapsed — display:none evita flicker de height animation,
   remove do layout flow, e impede password managers (Bitwarden) de
   tentar preencher os campos do cartão quando PIX/boleto estão ativos. */
#mm-layout .mm-op-pay-detail {
  display: none !important;
}
#mm-layout .mm-op-pay-radio.is-active .mm-op-pay-detail {
  display: block !important;
  padding: 4px 22px 22px !important;
  animation: mm-fade-in 200ms ease-out both;
}

#mm-layout .mm-op-pay-benefits {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
#mm-layout .mm-op-pay-benefits li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: var(--mm-fg-soft);
  line-height: 1.45;
}
#mm-layout .mm-op-pay-benefits li svg {
  flex-shrink: 0;
  color: var(--mm-cta);
  margin-top: 2px;
}

/* Bandeiras cartão (flags row) */
#mm-layout .mm-op-pay-brands {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0 0 16px;
  flex-wrap: wrap;
}
#mm-layout .mm-op-pay-brands img {
  width: 32px;
  height: 20px;
  object-fit: contain;
  opacity: 0.85;
}

/* ----- Cartão form grid ----- */
#mm-layout .mm-op-card-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
#mm-layout .mm-op-card-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
#mm-layout .mm-op-card-field-full {
  grid-column: 1 / -1;
}
#mm-layout .mm-op-card-field label {
  font-family: 'Poppins', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: var(--mm-fg-meta);
  letter-spacing: -0.003em;
}

/* Input wrap do cartão (mostra brand detected à direita) — !important
   pra sobrescrever mm-shadow-mode wildcard que força position:static. */
#mm-layout .mm-input-wrap-card {
  position: relative !important;
}
#mm-layout .mm-input-wrap-card .mm-input {
  padding-right: 74px !important; /* espaço pro badge brand à direita */
}
#mm-layout .mm-op-card-brand-detected {
  position: absolute !important;
  right: 14px !important;
  top: 50% !important;
  left: auto !important;
  transform: translateY(-50%);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--mm-fg-meta);
  padding: 3px 6px;
  background: #f3f4f6;
  border-radius: 4px;
  text-transform: uppercase;
  pointer-events: none;
  transition: background 180ms ease, color 180ms ease;
  white-space: nowrap;
}
#mm-layout .mm-op-card-brand-detected:empty {
  display: none !important;
}
#mm-layout .mm-op-card-brand-detected.is-visa,
#mm-layout .mm-op-card-brand-detected.is-mastercard,
#mm-layout .mm-op-card-brand-detected.is-amex,
#mm-layout .mm-op-card-brand-detected.is-elo,
#mm-layout .mm-op-card-brand-detected.is-hipercard {
  background: var(--mm-cta);
  color: #fff;
}

#mm-layout .mm-op-card-installments {
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23374151' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px !important;
  cursor: pointer;
}

/* Required indicator (*) — sutil, não poluidor (form-cro) */
#mm-layout .mm-op-req {
  color: #DC2626;
  margin-left: 2px;
  font-weight: 700;
}

/* Inline error message slot — aparece só quando .is-visible (form-cro: error clarity) */
#mm-layout .mm-op-field-err {
  display: block;
  min-height: 0;
  max-height: 0;
  overflow: hidden;
  font-family: 'Poppins', system-ui, sans-serif;
  font-size: 11.5px;
  color: #DC2626;
  line-height: 1.4;
  font-weight: 500;
  letter-spacing: -0.003em;
  margin: 0;
  opacity: 0;
  transition: max-height 240ms cubic-bezier(0.16, 1, 0.3, 1),
              opacity 180ms ease,
              margin 200ms ease;
}
#mm-layout .mm-op-field-err.is-visible {
  max-height: 40px;
  margin-top: 4px;
  opacity: 1;
}

@media (max-width: 520px) {
  #mm-layout .mm-op-card-form {
    grid-template-columns: 1fr;
  }
  #mm-layout .mm-op-card-field-half {
    grid-column: 1;
  }
}
@media (min-width: 521px) {
  #mm-layout .mm-op-card-field-half {
    grid-column: span 1;
  }
}

/* ----- CTA finalizar ----- */
#mm-layout .mm-op-finalizar {
  width: 100%;
  margin-top: 4px;
  gap: 8px;
}
#mm-layout .mm-op-finalizar .mm-op-finalizar-label {
  font-weight: 600;
}

#mm-layout .mm-op-finalizar-sub {
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;
  margin: 14px 0 0;
  font-size: 11.5px;
  color: var(--mm-fg-meta);
  line-height: 1.4;
  text-align: center;
}
#mm-layout .mm-op-finalizar-sub svg {
  flex-shrink: 0;
  color: var(--mm-olive);
}

/* ----- Trust footer do step 3 ----- */
#mm-layout .mm-op-trust-payment {
  padding: 20px 22px;
  background: #fafafa;
  border: 1px solid var(--mm-border);
  border-radius: 14px;
  text-align: center;
}

#mm-layout .mm-op-trust-payment-row {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

#mm-layout .mm-op-trust-payment .mm-trust-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--mm-fg-soft);
  font-weight: 500;
}
#mm-layout .mm-op-trust-payment .mm-trust-item svg {
  color: var(--mm-olive);
}

#mm-layout .mm-op-trust-payment-note {
  margin: 0;
  font-size: 11px;
  color: var(--mm-fg-meta);
  line-height: 1.5;
}
#mm-layout .mm-op-trust-payment-note a {
  color: var(--mm-olive);
  text-decoration: underline;
}

/* ----- Summary lateral do step 3 (reaproveita .mm-id-sum) ----- */
#mm-layout .mm-op-step3-sum {
  /* Herda do .mm-id-sum da zona 14 */
}

/* Row desconto PIX destacado */
#mm-layout .mm-row-pix-discount {
  background: rgba(75, 102, 74, 0.06);
  margin: 2px -8px;
  padding: 6px 8px;
  border-radius: 6px;
}
#mm-layout .mm-row-pix-discount .mm-row-label {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--mm-olive);
  font-weight: 600;
}
#mm-layout .mm-row-pix-discount .mm-row-label svg {
  color: var(--mm-olive);
}

/* Mobile: reorder + spacing tight + sticky CTA (form-cro: always-visible CTA) */
@media (max-width: 760px) {
  #mm-layout .mm-op-pay-head {
    padding: 16px 18px;
    gap: 12px;
    min-height: 68px;
  }
  #mm-layout .mm-op-pay-title {
    font-size: 15px;
  }
  #mm-layout .mm-op-pay-amount {
    font-size: 16px;
  }
  #mm-layout .mm-op-pay-detail {
    padding: 0 18px !important;
  }
  #mm-layout .mm-op-pay-radio.is-active .mm-op-pay-detail {
    padding: 4px 18px 18px !important;
  }
  #mm-layout .mm-op-trust-payment {
    padding: 16px 14px;
  }
  #mm-layout .mm-op-trust-payment-row {
    gap: 12px 18px;
  }

  /* Mobile sticky CTA wrapper — fica visível mesmo com scroll longo.
     Padding-bottom no layout pra compensar o sticky overlap. */
  #mm-layout.mm-op-step3-layout {
    padding-bottom: 96px;
  }
  #mm-layout .mm-op-step3-card {
    position: relative;
  }
  #mm-layout .mm-op-finalizar {
    position: sticky;
    bottom: 12px;
    z-index: 100;
    box-shadow: 0 10px 30px rgba(27, 122, 69, 0.25), 0 2px 6px rgba(0, 0, 0, 0.08);
  }
}

/* Reduced motion: remove animações */
@media (prefers-reduced-motion: reduce) {
  #mm-layout.mm-op-step3-layout,
  #mm-layout .mm-op-step3-left,
  #mm-layout .mm-op-step3-sum-wrap,
  #mm-layout .mm-op-pay-detail,
  #mm-layout .mm-op-pay-radio,
  #mm-layout .mm-op-pay-radio-dot::after {
    animation: none !important;
    transition: none !important;
  }
}
`,document.head.appendChild(g)}})(),(function(){if(!document.getElementById("mm-ticker-css")){var g=document.createElement("style");g.id="mm-ticker-css",g.textContent=`.ticker-bar {
    background-color: #4b664a;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    width: 100%;
    padding: 10px 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  .ticker-track {
    display: inline-flex;
    animation: ticker-scroll 65s linear infinite;
  }

  .ticker-track:hover {
    animation-play-state: paused;
  }

  .ticker-item {
    display: inline-flex;
    align-items: center;
    padding: 0 20px;
    color: #f8f8f8;
    font-size: 13px;
    letter-spacing: 0.5px;
    text-decoration: none;
    white-space: nowrap;
  }

  .ticker-item a {
    color: #f8f8f8;
    text-decoration: none;
  }

  .ticker-item a:hover {
    text-decoration: underline;
  }

  .ticker-separator {
    display: inline-flex;
    align-items: center;
    color: #f8f8f8;
    opacity: 0.5;
    padding: 0 5px;
    font-size: 10px;
  }

  .ticker-close {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #000000;
    font-size: 16px;
    cursor: pointer;
    opacity: 0.5;
    padding: 2px 6px;
    line-height: 1;
    z-index: 2;
    transition: opacity 0.2s;
  }

  .ticker-close:hover {
    opacity: 1;
  }

  @keyframes ticker-scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }`,document.head.appendChild(g)}})(),(function(){if(!document.getElementById("mm-header-css")){var g=document.createElement("style");g.id="mm-header-css",g.textContent=`/* =============================================
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
  --c-topbar-bg: #F2F2F2; /* matches site canonical bg-background-color */
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
#mm-header .mm-h-topbar-inner a {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
#mm-header .mm-h-topbar-inner a:hover { color: #2f4a2e; }
#mm-header .mm-h-topbar-sep { color: var(--c-brand); opacity: 0.4; }
#mm-header .mm-h-topbar-desktop-only { display: contents; }
@media (max-width: 767px) {
  #mm-header .mm-h-topbar-desktop-only { display: none; }
}

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
  padding: 12px 14px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background: transparent;
  border: none;
  color: var(--c-text);
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  position: relative;
}
#mm-header .mm-h-action:hover { color: var(--c-brand); }
#mm-header .mm-h-action svg {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  stroke-width: 1.6;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  flex-shrink: 0;
}

/* Hamburger (mobile-only, shown via @media below) */
#mm-header .mm-h-burger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  background: transparent;
  border: none;
  font-size: 20px;
  color: var(--c-text);
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
#mm-header .mm-h-burger:hover { color: var(--c-brand); }
/* Cart badge — pill on top-right of the cart icon */
#mm-header #mm-h-cart .mm-h-cart-icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
#mm-header .mm-h-cart-badge {
  position: absolute;
  top: -5px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  min-height: 18px;
  width: 18px;
  height: 18px;
  padding: 0;
  background: var(--c-brand);
  color: #FFFFFF;
  font-family: 'Poppins', system-ui, sans-serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  border-radius: 50%;
  border: 1.5px solid var(--c-header-bg);
  box-sizing: border-box;
  letter-spacing: 0;
  pointer-events: none;
}

/* Focus-visible (a11y) */
#mm-header a:focus-visible,
#mm-header button:focus-visible {
  outline: 2px solid var(--c-brand);
  outline-offset: 3px;
  border-radius: 2px;
}

/* Skip-link (a11y) */
#mm-header .mm-h-skip {
  position: absolute;
  left: -9999px;
}
#mm-header .mm-h-skip:focus {
  position: fixed;
  top: 8px;
  left: 8px;
  background: #FFFFFF;
  color: var(--c-text);
  padding: 12px 16px;
  z-index: 9999;
  outline: 2px solid var(--c-brand);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

/* Mobile */
@media (max-width: 767px) {
  #mm-header .mm-h-topbar { height: var(--h-mobile-topbar); }
  #mm-header .mm-h-topbar-inner { font-size: 11px; gap: 10px; }
  #mm-header .mm-h-main { height: var(--h-mobile-main); padding: 0 var(--container-pad-mobile); }

  /* Switch from desktop absolute-center logo to flex layout
     (absolute layout causes logo/right-cluster collision at <=767px) */
  #mm-header .mm-h-main-left { flex: 0 0 auto; }
  #mm-header .mm-h-main-right { flex: 0 0 auto; gap: 8px; }
  #mm-header .mm-h-logo {
    position: static;
    transform: none;
    flex: 1;
    display: flex;
    justify-content: center;
    min-width: 0;
  }
  #mm-header .mm-h-logo img {
    max-width: 160px;
    width: auto;
    height: auto;
  }

  /* Show burger, hide desktop-only actions + text labels */
  #mm-header .mm-h-burger { display: inline-flex; }
  #mm-header .mm-h-action#mm-h-buscar { display: none; }
  #mm-header .mm-h-main-right .mm-h-action[href="/wishlist"],
  #mm-header .mm-h-main-right .mm-h-action[href="/login"] { display: none; }
  /* Hide "Carrinho" text label — only keep the bag icon + badge */
  #mm-header #mm-h-cart > span:not(.mm-h-cart-icon) { display: none; }
  /* Tighten cart button padding (icon-only) */
  #mm-header #mm-h-cart { padding: 8px; gap: 0; }
}

@media (max-width: 479px) {
  #mm-header .mm-h-logo img { max-width: 130px; }
}

/* Nav row */
#mm-header .mm-h-nav {
  height: var(--h-nav);
  background: var(--c-header-bg);
  border-top: 1px solid var(--c-border);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
#mm-header .mm-h-nav-list {
  list-style: none;
  display: flex;
  gap: 64px;
  margin: 0;
  padding: 0;
  align-items: center;
}
#mm-header .mm-h-nav-item {
  position: static; /* mega-menu uses nav as positioning context, not the li */
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
  min-height: 44px;
  position: relative;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
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
#mm-header .mm-h-nav-item.is-open > .mm-h-nav-link::after,
#mm-header .mm-h-nav-link.is-active::after {
  left: 8px;
  right: 8px;
}

/* Hide nav on mobile (drawer in Phase 6 handles mobile nav) */
@media (max-width: 767px) {
  #mm-header .mm-h-nav { display: none; }
}

/* Mega-menu (hover-triggered from nav items) */
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
  padding: 40px 0;
}
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
  grid-template-columns: repeat(4, 1fr) 320px;
  gap: 40px;
}
@media (max-width: 1200px) {
  #mm-header .mm-h-mega-inner {
    grid-template-columns: repeat(4, 1fr);
  }
  #mm-header .mm-h-mega-col-hero { display: none; }
}
#mm-header .mm-h-mega-col-hero {
  align-self: start;
}
#mm-header .mm-h-mega-hero {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  background: var(--c-topbar-bg);
  aspect-ratio: 4 / 3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
#mm-header .mm-h-mega-hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: opacity var(--t-base), transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
}
#mm-header .mm-h-mega-col-hero:hover .mm-h-mega-hero-img {
  transform: scale(1.03);
}
#mm-header .mm-h-mega-hero-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 22px 16px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
  color: #FFFFFF;
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.01em;
}
#mm-header .mm-h-mega-heading {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--c-text);
  margin: 0 0 14px;
  display: block;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--c-border);
}
#mm-header .mm-h-mega-heading-link {
  transition: color var(--t-fast), border-color var(--t-fast);
}
#mm-header .mm-h-mega-heading-link:hover {
  color: var(--c-brand);
  border-bottom-color: var(--c-brand);
}
/* Stacked heading inside same column (2nd ambiente in col 3 and 4) */
#mm-header .mm-h-mega-col ul + .mm-h-mega-heading {
  margin-top: 28px;
}
#mm-header .mm-h-mega-col ul {
  list-style: none;
  margin: 0 0 4px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
#mm-header .mm-h-mega-col a {
  font-size: 14px;
  font-weight: 400;
  color: var(--c-text);
  padding: 6px 0;
  min-height: 32px;
  display: inline-flex;
  align-items: center;
  transition: color var(--t-fast);
}
#mm-header .mm-h-mega-col a:hover {
  color: var(--c-brand);
}

/* Mega-menu footer with CTA */
#mm-header .mm-h-mega-footer {
  max-width: var(--container-max);
  margin: 32px auto 0;
  padding: 20px var(--container-pad) 0;
  border-top: 1px solid var(--c-border);
  display: flex;
  justify-content: flex-end;
}
#mm-header .mm-h-mega-cta {
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--ls-nav);
  color: var(--c-brand);
  padding: 10px 0;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: gap var(--t-fast);
  touch-action: manipulation;
}
#mm-header .mm-h-mega-cta:hover {
  gap: 12px;
  color: var(--c-text-heading);
}

/* Mega-menu hidden on mobile (drawer handles mobile nav) */
@media (max-width: 767px) {
  #mm-header .mm-h-mega { display: none; }
}

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
  animation: mm-fade-in var(--t-base) ease-out;
}
#mm-header .mm-h-search-overlay[hidden] {
  display: none;
}
#mm-header .mm-h-search-backdrop {
  position: absolute;
  inset: 0;
  background: var(--c-scrim);
}
#mm-header .mm-h-search-inner {
  position: relative;
  width: 100%;
  max-width: 800px;
  background: var(--c-header-bg);
  padding: 56px 40px 40px;
  margin-top: 80px;
  animation: mm-slide-down var(--t-base) ease-out;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
}
#mm-header .mm-h-search-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--c-text);
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
#mm-header .mm-h-search-close:hover {
  color: var(--c-brand);
}
#mm-header .mm-h-search-label {
  position: absolute;
  left: -9999px;
}
#mm-header .mm-h-search-form {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  background: var(--c-topbar-bg);
  border-radius: 9999px;
  border: 1px solid var(--c-border);
}
#mm-header .mm-h-search-form::before {
  content: '';
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23999999' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.3-4.3'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
}
#mm-header .mm-h-search-form input {
  width: 100%;
  font-size: 18px;
  font-family: var(--font-sans);
  font-weight: 400;
  border: none;
  padding: 4px 0;
  outline: none;
  background: transparent;
  color: var(--c-text);
  letter-spacing: 0.01em;
}
#mm-header .mm-h-search-form input::placeholder {
  color: var(--c-text-muted);
}
#mm-header .mm-h-search-suggestions {
  margin-top: 28px;
}
#mm-header .mm-h-search-sug-label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--c-text-muted);
  margin-bottom: 14px;
}
#mm-header .mm-h-search-suggestions a {
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  color: var(--c-text);
  padding: 10px 16px;
  margin: 0 8px 8px 0;
  background: var(--c-topbar-bg);
  border: 1px solid var(--c-border);
  border-radius: 9999px;
  min-height: 44px;
  transition: background var(--t-fast), color var(--t-fast), border-color var(--t-fast);
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
#mm-header .mm-h-search-suggestions a:hover {
  background: var(--c-brand);
  border-color: var(--c-brand);
  color: var(--c-header-bg);
}
/* Search results / recent searches (dynamic) */
#mm-header .mm-h-search-results {
  margin-top: 24px;
  border-top: 1px solid var(--c-border);
  padding-top: 16px;
}
#mm-header .mm-h-search-results[hidden] {
  display: none;
}
#mm-header .mm-h-search-section + .mm-h-search-section {
  margin-top: 16px;
}
#mm-header .mm-h-search-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
#mm-header .mm-h-search-result {
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 44px;
  padding: 10px 12px;
  margin: 0 -12px;
  font-size: 14px;
  color: var(--c-text);
  border-radius: 8px;
  transition: background var(--t-fast), color var(--t-fast);
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
#mm-header .mm-h-search-result:hover,
#mm-header .mm-h-search-result:focus-visible {
  background: var(--c-topbar-bg);
  color: var(--c-text-heading);
  outline: none;
}
#mm-header .mm-h-search-result-icon {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--c-text-muted);
}
#mm-header .mm-h-search-result:hover .mm-h-search-result-icon {
  color: var(--c-brand);
}
#mm-header .mm-h-search-result-label {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#mm-header .mm-h-search-result-label strong {
  color: var(--c-text-heading);
  font-weight: 600;
}
#mm-header .mm-h-search-result-arrow {
  flex-shrink: 0;
  font-size: 16px;
  color: var(--c-text-muted);
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity var(--t-fast), transform var(--t-fast);
}
#mm-header .mm-h-search-result:hover .mm-h-search-result-arrow {
  opacity: 1;
  transform: translateX(0);
  color: var(--c-brand);
}
#mm-header .mm-h-search-result-primary {
  font-weight: 500;
}
#mm-header .mm-h-search-result-primary .mm-h-search-result-icon {
  color: var(--c-brand);
}

/* ------------------------------------------------------------------
   Live product results — 2-col grid of cards with thumbnails
   ------------------------------------------------------------------ */
#mm-header .mm-h-search-products-section {
  margin-top: 20px;
  animation: mm-fade-in 240ms ease both;
}
#mm-header .mm-h-search-products-section .mm-h-search-sug-label {
  display: block;
  margin-bottom: 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: var(--ls-loose, 0.08em);
  text-transform: uppercase;
  color: var(--c-text-muted, #666);
}
#mm-header .mm-h-search-products-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
#mm-header .mm-h-search-product {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #ececec;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;
}
#mm-header .mm-h-search-product:hover,
#mm-header .mm-h-search-product:focus-visible {
  border-color: #4b664a;
  transform: translateY(-1px);
  box-shadow: 0 4px 14px -6px rgba(75, 102, 74, 0.2);
  outline: none;
}
#mm-header .mm-h-search-product-thumb {
  position: relative;
  flex: 0 0 64px;
  width: 64px;
  height: 64px;
  background: #fafafa;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
#mm-header .mm-h-search-product-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#mm-header .mm-h-search-product-noimg {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f3f3f3, #e8e8e8);
}
#mm-header .mm-h-search-product-discount {
  position: absolute;
  top: 4px;
  left: 4px;
  padding: 2px 5px;
  background: #dc2626;
  color: #ffffff;
  font-size: 9px;
  font-weight: 700;
  border-radius: 4px;
  line-height: 1.2;
}
#mm-header .mm-h-search-product-body {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
#mm-header .mm-h-search-product-name {
  font-size: 13px;
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
}
#mm-header .mm-h-search-product-prices {
  display: flex;
  align-items: baseline;
  gap: 6px;
  flex-wrap: wrap;
}
#mm-header .mm-h-search-product-price {
  font-size: 13px;
  font-weight: 700;
  color: #4b664a;
}
#mm-header .mm-h-search-product-oldprice {
  font-size: 11px;
  color: #999;
  text-decoration: line-through;
}
/* Skeleton loading state */
#mm-header .mm-h-search-product-skel {
  height: 86px;
  border-radius: 12px;
  background: linear-gradient(90deg, #f3f3f3 0%, #ececec 50%, #f3f3f3 100%);
  background-size: 200% 100%;
  animation: mm-skel-shimmer 1.2s ease-in-out infinite;
}
@keyframes mm-skel-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

#mm-header .mm-h-search-hint {
  margin-top: 24px;
  font-size: 12px;
  color: var(--c-text-muted);
  letter-spacing: var(--ls-loose);
}
#mm-header .mm-h-search-hint kbd {
  display: inline-block;
  padding: 2px 8px;
  background: var(--c-topbar-bg);
  border: 1px solid var(--c-border);
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 500;
  color: var(--c-text);
}

/* Mobile: make overlay full-screen */
@media (max-width: 767px) {
  #mm-header .mm-h-search-inner {
    max-width: none;
    margin-top: 0;
    min-height: 100dvh;
    padding: 56px 20px 40px;
    box-shadow: none;
  }
  #mm-header .mm-h-search-form input {
    font-size: 20px;
  }
}

@keyframes mm-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes mm-slide-down {
  from { opacity: 0; transform: translateY(-16px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Sticky compact state (scroll-direction sticky) */
#mm-header .mm-h-main,
#mm-header .mm-h-topbar,
#mm-header .mm-h-nav {
  transition: height var(--t-base), opacity var(--t-base);
}
#mm-header.is-compact .mm-h-topbar,
#mm-header.is-compact .mm-h-nav {
  height: 0;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
}
#mm-header.is-compact .mm-h-main {
  height: var(--h-main-compact);
  background: var(--c-glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
#mm-header.is-compact .mm-h-logo img {
  max-width: 200px;
  transition: max-width var(--t-base);
}
#mm-header .mm-h-logo img {
  transition: max-width var(--t-base);
}
@media (max-width: 767px) {
  #mm-header.is-compact .mm-h-main {
    height: var(--h-mobile-main);
  }
  #mm-header.is-compact .mm-h-logo img {
    max-width: 140px;
  }
}

/* Mobile drawer */
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
  animation: mm-fade-in 320ms ease-out both;
}
#mm-header .mm-h-drawer-panel {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 86%;
  max-width: 380px;
  background: var(--c-header-bg);
  overflow: hidden; /* nav area handles its own scroll */
  display: flex;
  flex-direction: column;
  animation: mm-slide-right 380ms cubic-bezier(0.16, 1, 0.3, 1) both;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.08);
}

/* Exit animations — triggered by .mm-h-drawer-closing class */
#mm-header .mm-h-drawer.mm-h-drawer-closing .mm-h-drawer-panel {
  animation: mm-slide-left 300ms cubic-bezier(0.55, 0, 0.67, 0.2) forwards;
}
#mm-header .mm-h-drawer.mm-h-drawer-closing .mm-h-drawer-backdrop {
  animation: mm-fade-out 300ms ease-in forwards;
}
@keyframes mm-slide-left {
  from { transform: translateX(0); }
  to   { transform: translateX(-100%); }
}
@keyframes mm-fade-out {
  from { opacity: 1; }
  to   { opacity: 0; }
}
#mm-header .mm-h-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0; /* never compress when nav sections expand */
  padding: 16px 20px;
  border-bottom: 1px solid var(--c-border);
  min-height: 64px;
}
#mm-header .mm-h-drawer-title {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--ls-nav);
  color: var(--c-text);
}
#mm-header .mm-h-drawer-close {
  background: transparent;
  border: none;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--c-text);
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
#mm-header .mm-h-drawer-close:hover { color: var(--c-brand); }

#mm-header .mm-h-drawer-search {
  padding: 16px 20px;
  border-bottom: 1px solid var(--c-border);
  flex-shrink: 0; /* never compress when nav sections expand */
}
#mm-header .mm-h-drawer-search input {
  width: 100%;
  font-size: 16px;
  font-family: var(--font-sans);
  padding: 12px 16px;
  background: var(--c-topbar-bg);
  border: 1px solid var(--c-border);
  border-radius: 9999px;
  outline: none;
  color: var(--c-text);
}
#mm-header .mm-h-drawer-search input:focus {
  border-color: var(--c-brand);
}

#mm-header .mm-h-drawer-nav {
  padding: 8px 0;
  flex: 1;
  overflow-y: auto;
  min-height: 0; /* allow flex child to shrink below content size for overflow */
}
#mm-header .mm-h-drawer-section {
  border-bottom: 1px solid var(--c-border);
}
#mm-header .mm-h-drawer-section summary {
  padding: 16px 20px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--ls-nav);
  color: var(--c-text);
  cursor: pointer;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  touch-action: manipulation;
}
#mm-header .mm-h-drawer-section summary::-webkit-details-marker { display: none; }
#mm-header .mm-h-drawer-section summary::after {
  content: '+';
  font-size: 20px;
  font-weight: 400;
  color: var(--c-text-muted);
  transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1), color 200ms ease;
}
#mm-header .mm-h-drawer-section[open] summary::after {
  content: '−';
  transform: rotate(180deg);
  color: var(--c-brand);
}
#mm-header .mm-h-drawer-section[open] summary {
  color: var(--c-brand);
}
#mm-header .mm-h-drawer-section ul {
  list-style: none;
  margin: 0;
  padding: 0 20px 16px 32px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: max-height 300ms cubic-bezier(0.16, 1, 0.3, 1), opacity 220ms ease;
}
#mm-header .mm-h-drawer-section li {
  padding: 0;
}
/* "Ver todos →" — pushed to last position + styled as olive CTA link */
#mm-header .mm-h-drawer-section li.mm-h-drawer-viewall {
  order: 99;
  margin-top: 4px;
  padding-top: 8px;
  border-top: 1px solid var(--c-border);
}
#mm-header .mm-h-drawer-section li.mm-h-drawer-viewall a {
  font-size: 12px !important;
  font-weight: 600 !important;
  color: var(--c-brand) !important;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
#mm-header .mm-h-drawer-section li.mm-h-drawer-viewall a:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}
#mm-header .mm-h-drawer-section li a {
  display: block;
  padding: 10px 0;
  font-size: 14px;
  color: var(--c-text);
  min-height: 44px;
  line-height: 24px;
  touch-action: manipulation;
}
#mm-header .mm-h-drawer-section li a:hover { color: var(--c-brand); }

#mm-header .mm-h-drawer-link {
  display: block;
  padding: 16px 20px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--ls-nav);
  color: var(--c-text);
  border-bottom: 1px solid var(--c-border);
  min-height: 44px;
  touch-action: manipulation;
}
#mm-header .mm-h-drawer-link:hover { color: var(--c-brand); }

#mm-header .mm-h-drawer-footer {
  padding: 16px 20px;
  background: var(--c-topbar-bg);
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: auto;
}
#mm-header .mm-h-drawer-footer a {
  display: block;
  padding: 10px 0;
  font-size: 13px;
  color: var(--c-text);
  min-height: 44px;
  line-height: 24px;
  touch-action: manipulation;
}
#mm-header .mm-h-drawer-footer a:hover { color: var(--c-brand); }

@keyframes mm-slide-right {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

/* Drawer hidden on desktop (it's mobile-only) */
@media (min-width: 768px) {
  #mm-header .mm-h-drawer { display: none !important; }
}

/* Reduced motion (a11y) */
@media (prefers-reduced-motion: reduce) {
  #mm-header *,
  #mm-header *::before,
  #mm-header *::after {
    transition-duration: 0.01ms !important;
  }
}
`,document.head.appendChild(g)}})(),(function(){if(!document.getElementById("tickerBar")){var g=document.createElement("div");g.innerHTML=`<div class="ticker-bar" id="tickerBar">
  <button class="ticker-close" onclick="document.getElementById('tickerBar').style.display='none'" aria-label="Fechar">×</button>
  <div class="ticker-track">
    <!-- Bloco 1 (original) -->
    <span class="ticker-item">
      🎟️ Use o cupom: <b> BEMVINDO </b>&nbsp;para garantir 5%OFF na sua primeira compra
    </span>
    <span class="ticker-separator">•</span>
    <span class="ticker-item">
      Parcele em até 12x sem juros no cartão
    </span>
    <span class="ticker-separator">•</span>
    <span class="ticker-item">
      🚚 Envios em até 24h para produtos pronta entrega
    </span>
    <span class="ticker-separator">•</span>
    <span class="ticker-item">
      Frete grátis em pedidos acima de R$ 2.000
    </span>
    <span class="ticker-separator">•</span>
    <span class="ticker-item">
      <a href="https://api.whatsapp.com/send?l=pt_BR&amp;phone=5511915299488&amp;text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos." target="_blank">📞 11 91529-9488</a>
    </span>
    <span class="ticker-separator">•</span>

    <!-- Bloco 2 (duplicado para loop infinito) -->
    <span class="ticker-item">
      🎟️ Use o cupom: <b> BEMVINDO </b>&nbsp;para garantir 5%OFF na sua primeira compra
    </span>
    <span class="ticker-separator">•</span>
    <span class="ticker-item">
      Parcele em até 12x sem juros no cartão
    </span>
    <span class="ticker-separator">•</span>
    <span class="ticker-item">
      🚚 Envios em até 24h para produtos pronta entrega
    </span>
    <span class="ticker-separator">•</span>
    <span class="ticker-item">
      Frete grátis em pedidos acima de R$ 2.000
    </span>
    <span class="ticker-separator">•</span>
    <span class="ticker-item">
      <a href="https://api.whatsapp.com/send?l=pt_BR&amp;phone=5511915299488&amp;text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos." target="_blank">📞 11 91529-9488</a>
    </span>
    <span class="ticker-separator">•</span>
  </div>
</div>`;var P=g.firstElementChild;document.body.insertBefore(P,document.body.firstChild)}})(),(function(){var g=location.pathname;if(/^\/checkout\//i.test(g))return;try{if(localStorage.getItem("mm_no_tracking")==="1")return}catch{}if(window._uxa||document.querySelector('script[src*="contentsquare.net"]'))return;function P(){if(!(window._uxa||document.querySelector('script[src*="contentsquare.net"]'))){var L=document.createElement("script");L.src="https://t.contentsquare.net/uxa/7126f355c4bb8.js",L.async=!0,document.head.appendChild(L)}}function O(){"requestIdleCallback"in window?requestIdleCallback(P,{timeout:5e3}):setTimeout(P,2500)}document.readyState==="complete"?O():window.addEventListener("load",O,{once:!0})})(),(function(){var g="vnhd0x9eve";try{if(localStorage.getItem("mm_no_tracking")==="1")return}catch{}if(window.clarity||document.querySelector('script[src*="clarity.ms"]'))return;function P(){window.clarity||(function(L,h,o,m,p,u,d){L[o]=L[o]||function(){(L[o].q=L[o].q||[]).push(arguments)},u=h.createElement(m),u.async=1,u.src="https://www.clarity.ms/tag/"+p,d=h.getElementsByTagName(m)[0],d.parentNode.insertBefore(u,d)})(window,document,"clarity","script",g)}function O(){"requestIdleCallback"in window?requestIdleCallback(P,{timeout:4e3}):setTimeout(P,2e3)}document.readyState==="complete"?O():window.addEventListener("load",O,{once:!0})})(),(function(){if(!document.getElementById("mm-floating-whatsapp")){var P="5511915299488",O=(document.querySelector("#prod-nome")||{}).value,L=window.location.href,h;O?h="Olá! Tenho interesse no "+O.trim()+". "+L:h="Olá! Vim pelo site e gostaria de ajuda. "+L;var o="https://api.whatsapp.com/send?phone="+P+"&text="+encodeURIComponent(h),m=document.createElement("a");m.id="mm-floating-whatsapp",m.href=o,m.target="_blank",m.rel="noopener noreferrer",m.setAttribute("aria-label","Fale conosco pelo WhatsApp"),m.style.cssText=["position: fixed","right: 14px","z-index: 98","display: flex","align-items: center","justify-content: center","width: 52px","height: 52px","background: #4b664a","border-radius: 50%","box-shadow: 0 3px 12px rgba(0,0,0,0.18)","text-decoration: none","transition: transform 0.15s ease","-webkit-tap-highlight-color: transparent"].join(";"),m.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" style="display:block;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',m.addEventListener("touchstart",function(){m.style.transform="scale(0.92)"},{passive:!0}),m.addEventListener("touchend",function(){m.style.transform=""},{passive:!0}),document.body.appendChild(m)}})(),(function(){var P=document.querySelector(".back-to-top");if(P){var O=P.querySelector(".icon");O&&(O.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',O.style.cssText="display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:none !important;")}})(),(function(){var P="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",O="https://api.whatsapp.com/send?phone=5511915299488&text="+encodeURIComponent("Olá! Vim pelo site e gostaria de ajuda."),L={phone:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',whats:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',mail:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',clock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',pin:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',lock:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>',shield:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>',truck:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',card:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',instagram:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',facebook:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>',tiktok:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.39a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.42z"/></svg>'};function h(){if(!document.getElementById("mm-footer")&&document.body){document.body.classList.add("mm-footer-rebuild");var o=document.createElement("footer");o.id="mm-footer",o.className="mm-footer",o.setAttribute("role","contentinfo"),o.innerHTML='<div class="mm-footer-main"><div class="mm-footer-grid"><div class="mm-footer-col mm-footer-brand"><a class="mm-footer-logo" href="/" aria-label="Madeira Mania - voltar à home"><img src="'+P+'" alt="Madeira Mania" width="180" height="48"></a><p class="mm-footer-tagline">Móveis com design moderno e qualidade superior pra transformar sua casa em um lar cheio de personalidade.</p><div class="mm-footer-social"><a href="https://www.instagram.com/madeira.mania" target="_blank" rel="noopener" aria-label="Instagram da Madeira Mania">'+L.instagram+'</a><a href="https://web.facebook.com/profile.php?id=61578397120844" target="_blank" rel="noopener" aria-label="Facebook da Madeira Mania">'+L.facebook+'</a><a href="https://www.tiktok.com/@madeira.mania" target="_blank" rel="noopener" aria-label="TikTok da Madeira Mania">'+L.tiktok+'</a></div></div><div class="mm-footer-col"><h4 class="mm-footer-h">Atendimento</h4><ul class="mm-footer-list"><li><a href="tel:+5511915299488">'+L.phone+'<span>(11) 91529-9488</span></a></li><li><a href="'+O+'" target="_blank" rel="noopener">'+L.whats+'<span>WhatsApp</span></a></li><li><a href="mailto:contato@madeiramania.com.br">'+L.mail+'<span>contato@madeiramania.com.br</span></a></li><li><span class="mm-footer-meta">'+L.clock+'<span>Seg a Sex · 8h às 18h</span></span></li></ul></div><div class="mm-footer-col"><h4 class="mm-footer-h">Sua compra</h4><ul class="mm-footer-list"><li><a href="/como-comprar">Como comprar</a></li><li><a href="/politica-de-entrega">Frete e entrega</a></li><li><a href="/politica-de-trocas-e-devolucoes">Trocas e devoluções</a></li><li><a href="/compra-segura">Compra segura</a></li><li><a href="/avaliacoes-de-clientes">Avaliações de clientes</a></li></ul></div><div class="mm-footer-col"><h4 class="mm-footer-h">Madeira Mania</h4><ul class="mm-footer-list"><li><a href="/quem-somos">Quem somos</a></li><li><a href="/atendimento">Central de atendimento</a></li><li><a href="/envio-imediato">Pronta entrega</a></li><li><a href="/politica-de-privacidade">Política de privacidade</a></li></ul></div></div></div><div class="mm-footer-trust"><div class="mm-footer-trust-inner"><div class="mm-footer-trust-item">'+L.lock+'<div class="mm-footer-trust-text"><strong>Compra 100% segura</strong><small>Site protegido por SSL</small></div></div><div class="mm-footer-trust-item">'+L.shield+'<div class="mm-footer-trust-text"><strong>7 dias para troca</strong><small>Direito de arrependimento</small></div></div><div class="mm-footer-trust-item">'+L.truck+'<div class="mm-footer-trust-text"><strong>Frete grátis</strong><small>Acima de R$ 2.000</small></div></div><div class="mm-footer-trust-item">'+L.card+'<div class="mm-footer-trust-text"><strong>12x sem juros</strong><small>Em todos os cartões</small></div></div></div></div><div class="mm-footer-bottom"><div class="mm-footer-bottom-inner"><p class="mm-footer-legal">© 2026 <strong>Madeira Mania</strong> · CNPJ 60.021.382/0001-61<br>Av. Paulista, 1636 · Bela Vista · São Paulo/SP · 01310-200</p><div class="mm-footer-payments" aria-label="Formas de pagamento aceitas"><span class="mm-pay-chip" title="PIX"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/pix.svg" alt="PIX" loading="lazy"></span><span class="mm-pay-chip" title="Visa"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/visa.svg" alt="Visa" loading="lazy"></span><span class="mm-pay-chip" title="Mastercard"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/mastercard.svg" alt="Mastercard" loading="lazy"></span><span class="mm-pay-chip" title="Elo"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/elo.svg" alt="Elo" loading="lazy"></span><span class="mm-pay-chip" title="Hipercard"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/hipercard.svg" alt="Hipercard" loading="lazy"></span><span class="mm-pay-chip" title="American Express"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/american2.svg" alt="American Express" loading="lazy"></span><span class="mm-pay-chip" title="Boleto Bancário"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/boleto.svg" alt="Boleto Bancário" loading="lazy"></span></div></div></div>',document.body.appendChild(o),document.documentElement.classList.remove("mm-footer-loading")}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h(),setTimeout(h,1e3),setTimeout(h,3e3),setTimeout(function(){document.documentElement.classList.remove("mm-footer-loading")},6e3)})(),(function(){"use strict";if(location.pathname.replace(/\/$/,"")!=="/atendimento")return;function g(){var P=document.querySelector(".atendimento .title-content");if(!(!P||P.dataset.mmEnhanced)){P.dataset.mmEnhanced="1";var O='<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.053 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64.001 5.122 1.03 6.988 2.898 1.866 1.868 2.893 4.352 2.892 6.992-.003 5.45-4.437 9.887-9.885 9.887zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.465 3.488z"/></svg>';P.innerHTML=["<h1>Fale com a gente</h1>",'<p class="mm-atd-lead">Nosso time está pronto para ajudar você a escolher os móveis certos para sua casa. Use o WhatsApp para respostas rápidas ou preencha o formulário abaixo.</p>','<div class="mm-atd-channels">','  <a class="mm-atd-whatsapp" href="https://api.whatsapp.com/send?phone=5511915299488&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20m%C3%B3veis." target="_blank" rel="noopener">',"    "+O,'    <span class="mm-atd-whatsapp-label">Fale pelo WhatsApp</span>','    <span class="mm-atd-whatsapp-number">11 91529-9488</span>',"  </a>",'  <div class="mm-atd-info">','    <div class="mm-atd-info-item">',"      <strong>Horário de atendimento</strong>","      <span>Segunda a sexta · 9h às 18h</span>","      <span>Sábado · 9h às 13h</span>","    </div>",'    <div class="mm-atd-info-item">',"      <strong>E-mail</strong>",'      <a href="mailto:contato@madeiramania.com.br">contato@madeiramania.com.br</a>',"    </div>","  </div>","</div>",'<h2 class="mm-atd-form-title">Formulário de contato</h2>'].join(`
`)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g):g(),setTimeout(g,500),setTimeout(g,2e3)})(),(function(){if(/^\/checkout\//.test(location.pathname)||document.getElementById("mm-header"))return;function g(){if(document.getElementById("mm-header"))return;var P="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",O={search:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',user:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',bag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>'},L=document.createElement("div");L.id="mm-header",L.innerHTML=['<a class="mm-h-skip" href="#main">Pular para o conteúdo</a>','<div class="mm-h-topbar">','  <div class="mm-h-topbar-inner">','    <span class="mm-h-topbar-desktop-only">','      <a href="/atendimento">Atendimento</a>','      <span class="mm-h-topbar-sep" aria-hidden="true">·</span>',"    </span>","    <span>Frete grátis R$ 2.000+</span>",'    <span class="mm-h-topbar-sep" aria-hidden="true">·</span>',"    <span>12x sem juros</span>","  </div>","</div>",'<div class="mm-h-main">','  <div class="mm-h-main-left">','    <button class="mm-h-burger" id="mm-h-burger" type="button" aria-label="Abrir menu"><span aria-hidden="true">☰</span></button>','    <button class="mm-h-action" id="mm-h-buscar" type="button">'+O.search+"<span>Buscar</span></button>","  </div>",'  <a class="mm-h-logo" href="/" aria-label="Madeira Mania, ir para a página inicial">','    <img src="'+P+'" alt="" width="280" height="70" loading="eager" />',"  </a>",'  <div class="mm-h-main-right">','    <a class="mm-h-action" href="/wishlist">'+O.heart+"<span>Favoritos</span></a>",'    <a class="mm-h-action" href="/login">'+O.user+"<span>Conta</span></a>",'    <button class="mm-h-action" type="button" id="mm-h-cart" aria-label="Carrinho, 0 itens" aria-live="polite">','      <span class="mm-h-cart-icon">'+O.bag+'<span class="mm-h-cart-badge" id="mm-h-cart-count" aria-hidden="true" hidden>0</span></span>',"      <span>Carrinho</span>","    </button>","  </div>","</div>",'<nav class="mm-h-nav" role="navigation" aria-label="Categorias">','  <ul class="mm-h-nav-list">','    <li class="mm-h-nav-item" data-menu="ambientes">','      <a href="#" class="mm-h-nav-link" aria-haspopup="true" aria-expanded="false">Ambientes</a>','      <div class="mm-h-mega" role="menu" aria-label="Ambientes">','        <div class="mm-h-mega-inner">','          <div class="mm-h-mega-col">','            <a href="/sala-de-estar-9677307902" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="sala-de-estar">Sala de Estar</a>',"            <ul>",'              <li><a href="/sala-de-estar/mesas">Mesas</a></li>','              <li><a href="/sala-de-estar/racks">Racks para TV</a></li>','              <li><a href="/sala-de-estar/estantes">Estantes</a></li>','              <li><a href="/sala-de-estar/home-theaters">Home Theaters</a></li>','              <li><a href="/sala-de-estar/aparadores">Aparadores</a></li>','              <li><a href="/sala-de-estar/cristaleiras">Cristaleiras</a></li>','              <li><a href="/sala-de-estar/buffets">Buffets</a></li>','              <li><a href="/sala-de-estar/bares">Bares</a></li>','              <li><a href="/sala-de-estar/paineis">Painéis</a></li>','              <li><a href="/sala-de-estar/nichos">Nichos</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col">','            <a href="/sala-de-jantar-1916970475" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="sala-de-jantar">Sala de Jantar</a>',"            <ul>",'              <li><a href="/sala-de-jantar/mesas">Mesas</a></li>','              <li><a href="/sala-de-jantar/cadeiras">Cadeiras</a></li>','              <li><a href="/sala-de-jantar/aparadores">Aparadores</a></li>','              <li><a href="/sala-de-jantar/buffets">Buffets</a></li>','              <li><a href="/sala-de-jantar/cristaleiras">Cristaleiras</a></li>','              <li><a href="/sala-de-jantar/balcoes">Balcões</a></li>','              <li><a href="/sala-de-jantar/banquetas">Banquetas</a></li>','              <li><a href="/sala-de-jantar/bares">Bares</a></li>',"            </ul>",'            <a href="/bar-e-cafe" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="bar-e-cafe">Bar e Café</a>',"            <ul>",'              <li><a href="/bar-e-cafe/bares">Bares</a></li>','              <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col">','            <a href="/cozinha-6327619447" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="cozinha">Cozinha</a>',"            <ul>",'              <li><a href="/cozinha/armarios-de-cozinha">Armários de Cozinha</a></li>','              <li><a href="/cozinha/balcoes">Balcões</a></li>','              <li><a href="/cozinha/banquetas">Banquetas</a></li>','              <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>','              <li><a href="/cozinha/cozinhas-completas">Cozinhas Completas</a></li>','              <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>','              <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>','              <li><a href="/cozinha/multiuso">Multiuso</a></li>','              <li><a href="/cozinha/paneleiros">Paneleiros</a></li>',"            </ul>",'            <a href="/lavanderia" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="lavanderia">Lavanderia</a>','            <a href="/banheiro" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="banheiro">Banheiro</a>',"          </div>",'          <div class="mm-h-mega-col">','            <a href="/quarto-0961844589" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="quarto">Quarto</a>',"            <ul>",'              <li><a href="/quarto/bercos">Berços</a></li>','              <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>','              <li><a href="/quarto/camas">Camas</a></li>','              <li><a href="/quarto/colchoes">Colchões</a></li>','              <li><a href="/quarto/comodas">Cômodas</a></li>','              <li><a href="/quarto/dormitorios">Dormitórios</a></li>','              <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>','              <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>','              <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>','              <li><a href="/quarto/roupeiros">Roupeiros</a></li>',"            </ul>",'            <a href="/escritorio-899523853" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="escritorio">Escritório</a>',"            <ul>",'              <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col mm-h-mega-col-hero" aria-hidden="true">','            <div class="mm-h-mega-hero">','              <img class="mm-h-mega-hero-img" src="" alt="" loading="lazy" width="320" height="240" />','              <div class="mm-h-mega-hero-label"></div>',"            </div>","          </div>","        </div>",'        <div class="mm-h-mega-footer">','          <a href="/envio-imediato" class="mm-h-mega-cta">Ver todos os ambientes <span aria-hidden="true">→</span></a>',"        </div>","      </div>","    </li>",'    <li class="mm-h-nav-item">','      <a href="/envio-imediato" class="mm-h-nav-link">Envio Imediato</a>',"    </li>",'    <li class="mm-h-nav-item">','      <a href="/outlet" class="mm-h-nav-link">Outlet</a>',"    </li>","  </ul>","</nav>",'<div class="mm-h-drawer" id="mm-h-drawer" hidden role="dialog" aria-modal="true" aria-label="Menu">','  <div class="mm-h-drawer-backdrop"></div>','  <aside class="mm-h-drawer-panel">','    <div class="mm-h-drawer-header">','      <span class="mm-h-drawer-title">Menu</span>','      <button class="mm-h-drawer-close" id="mm-h-drawer-close" type="button" aria-label="Fechar menu">','        <span aria-hidden="true">×</span>',"      </button>","    </div>",'    <div class="mm-h-drawer-search">','      <form action="/busca" method="get">','        <input type="search" name="q" placeholder="Buscar" aria-label="Buscar" />',"      </form>","    </div>",'    <nav class="mm-h-drawer-nav" aria-label="Navegação móvel">','      <details class="mm-h-drawer-section">',"        <summary>Sala de Estar</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/sala-de-estar-9677307902">Ver todos →</a></li>','          <li><a href="/sala-de-estar/mesas">Mesas</a></li>','          <li><a href="/sala-de-estar/racks">Racks para TV</a></li>','          <li><a href="/sala-de-estar/estantes">Estantes</a></li>','          <li><a href="/sala-de-estar/home-theaters">Home Theaters</a></li>','          <li><a href="/sala-de-estar/aparadores">Aparadores</a></li>','          <li><a href="/sala-de-estar/cristaleiras">Cristaleiras</a></li>','          <li><a href="/sala-de-estar/buffets">Buffets</a></li>','          <li><a href="/sala-de-estar/bares">Bares</a></li>','          <li><a href="/sala-de-estar/paineis">Painéis</a></li>','          <li><a href="/sala-de-estar/nichos">Nichos</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Sala de Jantar</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/sala-de-jantar-1916970475">Ver todos →</a></li>','          <li><a href="/sala-de-jantar/mesas">Mesas</a></li>','          <li><a href="/sala-de-jantar/cadeiras">Cadeiras</a></li>','          <li><a href="/sala-de-jantar/aparadores">Aparadores</a></li>','          <li><a href="/sala-de-jantar/buffets">Buffets</a></li>','          <li><a href="/sala-de-jantar/cristaleiras">Cristaleiras</a></li>','          <li><a href="/sala-de-jantar/balcoes">Balcões</a></li>','          <li><a href="/sala-de-jantar/banquetas">Banquetas</a></li>','          <li><a href="/sala-de-jantar/bares">Bares</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Cozinha</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/cozinha-6327619447">Ver todos →</a></li>','          <li><a href="/cozinha/armarios-de-cozinha">Armários de Cozinha</a></li>','          <li><a href="/cozinha/balcoes">Balcões</a></li>','          <li><a href="/cozinha/banquetas">Banquetas</a></li>','          <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>','          <li><a href="/cozinha/cozinhas-completas">Cozinhas Completas</a></li>','          <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>','          <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>','          <li><a href="/cozinha/multiuso">Multiuso</a></li>','          <li><a href="/cozinha/paneleiros">Paneleiros</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Quarto</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/quarto-0961844589">Ver todos →</a></li>','          <li><a href="/quarto/bercos">Berços</a></li>','          <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>','          <li><a href="/quarto/camas">Camas</a></li>','          <li><a href="/quarto/colchoes">Colchões</a></li>','          <li><a href="/quarto/comodas">Cômodas</a></li>','          <li><a href="/quarto/dormitorios">Dormitórios</a></li>','          <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>','          <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>','          <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>','          <li><a href="/quarto/roupeiros">Roupeiros</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Bar e Café</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/bar-e-cafe">Ver todos →</a></li>','          <li><a href="/bar-e-cafe/bares">Bares</a></li>','          <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Escritório</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/escritorio-899523853">Ver todos →</a></li>','          <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',"        </ul>","      </details>",'      <a href="/lavanderia" class="mm-h-drawer-link">Lavanderia</a>','      <a href="/banheiro" class="mm-h-drawer-link">Banheiro</a>','      <a href="/envio-imediato" class="mm-h-drawer-link">Envio Imediato</a>','      <a href="/outlet" class="mm-h-drawer-link">Outlet</a>',"    </nav>",'    <div class="mm-h-drawer-footer">','      <a href="/wishlist">Favoritos</a>','      <a href="/login">Conta</a>','      <a href="/atendimento">Atendimento</a>',"    </div>","  </aside>","</div>",'<div class="mm-h-search-overlay" id="mm-h-search-overlay" hidden role="dialog" aria-modal="true" aria-label="Buscar">','  <div class="mm-h-search-backdrop"></div>','  <div class="mm-h-search-inner">','    <button class="mm-h-search-close" id="mm-h-search-close" type="button" aria-label="Fechar busca">','      <span aria-hidden="true">×</span>',"    </button>",'    <form action="/busca" method="get" class="mm-h-search-form">','      <label for="mm-h-search-input" class="mm-h-search-label">O que você procura?</label>','      <input type="search" name="q" id="mm-h-search-input" placeholder="O que você procura?" autocomplete="off" />',"    </form>",'    <div class="mm-h-search-results" id="mm-h-search-results" hidden></div>','    <div class="mm-h-search-suggestions" id="mm-h-search-suggestions">','      <span class="mm-h-search-sug-label">Sugestões populares</span>','      <a href="/busca?q=mesa+de+jantar">Mesa de jantar</a>','      <a href="/busca?q=rack">Rack</a>','      <a href="/busca?q=guarda-roupas">Guarda-roupas</a>','      <a href="/busca?q=cristaleira">Cristaleira</a>','      <a href="/busca?q=aparador">Aparador</a>',"    </div>",'    <div class="mm-h-search-hint"><kbd>Esc</kbd> para fechar</div>',"  </div>","</div>"].join(`
`),document.body.insertBefore(L,document.body.firstChild),document.documentElement.classList.remove("mm-header-loading");var h=(function(){try{var n=Array.from(document.scripts).find(function(r){return r.src&&r.src.indexOf("madeira-mania.js")!==-1});if(n&&n.src.indexOf("localhost")!==-1)return"http://localhost:8080/assets/mega-hero/";if(n){var e=n.src.match(/@([^/]+)/);if(e)return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@"+e[1]+"/dist/assets/mega-hero/"}return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@main/dist/assets/mega-hero/"}catch{return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@main/dist/assets/mega-hero/"}})(),o={"sala-de-estar":"Sala de Estar","sala-de-jantar":"Sala de Jantar",cozinha:"Cozinha","bar-e-cafe":"Bar e Café",quarto:"Quarto",escritorio:"Escritório",lavanderia:"Lavanderia",banheiro:"Banheiro"},m=L.querySelector(".mm-h-mega-hero-img"),p=L.querySelector(".mm-h-mega-hero-label");Object.keys(o).forEach(function(n){var e=new Image;e.src=h+n+".jpg"});function u(n){m&&(m.onerror=function(){m.style.visibility="hidden"},m.style.visibility="",m.src=h+n+".jpg",m.alt=o[n]||"",p&&(p.textContent=o[n]||""))}u("sala-de-estar"),L.querySelectorAll(".mm-h-mega-heading-link[data-hero]").forEach(function(n){n.addEventListener("mouseenter",function(){u(n.dataset.hero)})});var d=L.querySelectorAll(".mm-h-nav-item[data-menu]"),k=null,b=null;d.forEach(function(n){n.addEventListener("mouseenter",function(){clearTimeout(b),clearTimeout(k),k=setTimeout(function(){d.forEach(function(r){r.classList.remove("is-open");var s=r.querySelector(".mm-h-nav-link");s&&s.setAttribute("aria-expanded","false")}),n.classList.add("is-open");var e=n.querySelector(".mm-h-nav-link");e&&e.setAttribute("aria-expanded","true")},150)}),n.addEventListener("mouseleave",function(){clearTimeout(k),b=setTimeout(function(){n.classList.remove("is-open");var e=n.querySelector(".mm-h-nav-link");e&&e.setAttribute("aria-expanded","false")},200)})}),document.addEventListener("keydown",function(n){n.key==="Escape"&&d.forEach(function(e){e.classList.remove("is-open");var r=e.querySelector(".mm-h-nav-link");r&&r.setAttribute("aria-expanded","false")})});var q=L.querySelector('.mm-h-nav-item[data-menu="ambientes"] > .mm-h-nav-link');q&&q.addEventListener("click",function(n){n.preventDefault()});var C=document.getElementById("mm-h-search-overlay"),A=document.getElementById("mm-h-buscar"),x=document.getElementById("mm-h-search-close"),T=document.getElementById("mm-h-search-input"),V=C&&C.querySelector(".mm-h-search-backdrop"),I=null;function z(){C&&(I=document.activeElement,C.hidden=!1,document.body.style.overflow="hidden",setTimeout(function(){T&&T.focus()},50))}function Q(){C&&(C.hidden=!0,document.body.style.overflow="",I&&I.focus&&I.focus())}A&&A.addEventListener("click",z),x&&x.addEventListener("click",Q),V&&V.addEventListener("click",Q),document.addEventListener("keydown",function(n){if(n.key==="Escape"&&C&&!C.hidden){Q();return}if(n.key==="/"&&C&&C.hidden){var e=document.activeElement&&document.activeElement.tagName;e!=="INPUT"&&e!=="TEXTAREA"&&!(document.activeElement&&document.activeElement.isContentEditable)&&(n.preventDefault(),z())}}),C&&C.addEventListener("keydown",function(n){if(!(n.key!=="Tab"||C.hidden)){var e=C.querySelectorAll("button, input, a[href]");if(e.length!==0){var r=e[0],s=e[e.length-1];n.shiftKey&&document.activeElement===r?(n.preventDefault(),s.focus()):!n.shiftKey&&document.activeElement===s&&(n.preventDefault(),r.focus())}}});var tn=document.getElementById("mm-h-search-results"),en=document.getElementById("mm-h-search-suggestions"),sn=[{label:"Mesa de jantar",q:"mesa de jantar"},{label:"Mesa de centro",q:"mesa de centro"},{label:"Rack para TV",q:"rack"},{label:"Guarda-roupas",q:"guarda-roupas"},{label:"Cristaleira",q:"cristaleira"},{label:"Aparador",q:"aparador"},{label:"Buffet",q:"buffet"},{label:"Painel para TV",q:"painel"},{label:"Cabeceira",q:"cabeceira"},{label:"Cômoda",q:"comoda"},{label:"Estante",q:"estante"},{label:"Home theater",q:"home theater"}],zn="mm_recent_searches";function xn(){try{var n=localStorage.getItem(zn);if(!n)return[];var e=JSON.parse(n);return Array.isArray(e)?e.slice(0,5):[]}catch{return[]}}function Yn(n){if(n)try{var e=xn().filter(function(r){return r&&r.toLowerCase()!==n.toLowerCase()});e.unshift(n),localStorage.setItem(zn,JSON.stringify(e.slice(0,5)))}catch{}}function ln(n){return String(n).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})}var Ln='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',Jn='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',Mn="mm_search_cache_v1",Un=600*1e3,In=20,On=null;function kn(){try{return JSON.parse(sessionStorage.getItem(Mn)||"{}")}catch{return{}}}function yn(n){try{var e=Object.keys(n);if(e.length>In){e.sort(function(s,f){return n[s].ts-n[f].ts});for(var r=0;r<e.length-In;r++)delete n[e[r]]}sessionStorage.setItem(Mn,JSON.stringify(n))}catch{}}function at(n){var e=kn(),r=e[n.toLowerCase()];return!r||Date.now()-r.ts>Un?null:r.products}function Kn(n,e){var r=kn();r[n.toLowerCase()]={ts:Date.now(),products:e},yn(r)}function _n(n){for(var e="itens:",r=0;(r=n.indexOf(e,r))!==-1;){var s=n.indexOf("[",r);if(s===-1)return null;for(var f=0,v=!1,y=!1,B=-1,_=s;_<n.length;_++){var D=n.charAt(_);if(y){y=!1;continue}if(D==="\\"){y=!0;continue}if(D==='"'){v=!v;continue}if(!v){if(D==="[")f++;else if(D==="]"&&(f--,f===0)){B=_;break}}}if(B!==-1){var nn=n.substring(s,B+1);try{var X=JSON.parse(nn);if(Array.isArray(X)&&X.length>0)return X}catch{}}r=s+1}return null}function ut(n){var e=_n(n);if(!e)return[];for(var r=[],s=0;s<e.length&&r.length<6;s++){var f=e[s];if(f){var v=f.titulo||f.nome||"";if(v){var y=f.link||"";y&&y.charAt(0)!=="/"&&y.indexOf("http")!==0&&(y="/"+y);var B=f.midia_url||"",_=parseFloat(f.valor),D=parseFloat(f.valor_de),nn=isNaN(_)?"":"R$ "+_.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),X=!isNaN(D)&&D>_?"R$ "+D.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):"",Z="";typeof f.percentual_off=="number"&&f.percentual_off>0&&(Z="-"+Math.round(f.percentual_off)+"%"),r.push({href:y,title:v,img:B,price:nn,oldPrice:X,discount:Z})}}}return r}function vt(n){var e=n.toLowerCase().trim();if(!e||e.length<3)return Promise.resolve([]);var r=at(e);if(r)return Promise.resolve(r);if(On)try{On.abort()}catch{}On=typeof AbortController<"u"?new AbortController:null;var s="/busca?q="+encodeURIComponent(e),f={credentials:"same-origin",headers:{Accept:"text/html"}};return On&&(f.signal=On.signal),fetch(s,f).then(function(v){if(!v.ok)throw new Error("HTTP "+v.status);return v.text()}).then(function(v){var y=ut(v);return Kn(e,y),y}).catch(function(v){return v&&v.name==="AbortError"?null:[]})}function rt(n){var e=n.img?'<img src="'+ln(n.img)+'" alt="" loading="lazy" width="64" height="64"/>':'<div class="mm-h-search-product-noimg"></div>',r=n.price?'<span class="mm-h-search-product-price">'+ln(n.price)+"</span>":"",s=n.oldPrice&&n.oldPrice!==n.price?'<span class="mm-h-search-product-oldprice">'+ln(n.oldPrice)+"</span>":"",f=n.discount?'<span class="mm-h-search-product-discount">'+ln(n.discount)+"</span>":"";return'<a class="mm-h-search-product" href="'+ln(n.href)+'" data-recent="1"><span class="mm-h-search-product-thumb">'+e+f+'</span><span class="mm-h-search-product-body"><span class="mm-h-search-product-name">'+ln(n.title)+'</span><span class="mm-h-search-product-prices">'+s+r+"</span></span></a>"}function it(){if(tn){var n=xn();if(!n.length){tn.hidden=!0,tn.innerHTML="",en&&(en.hidden=!1);return}var e='<div class="mm-h-search-section">';e+='<span class="mm-h-search-sug-label">Buscas recentes</span>',e+='<ul class="mm-h-search-list">';for(var r=0;r<n.length;r++){var s=n[r];e+='<li><a class="mm-h-search-result" href="/busca?q='+encodeURIComponent(s)+'"><span class="mm-h-search-result-icon">'+Jn+'</span><span class="mm-h-search-result-label">'+ln(s)+"</span></a></li>"}e+="</ul></div>",tn.innerHTML=e,tn.hidden=!1,en&&(en.hidden=!1)}}function nt(n){if(!tn)return"";en&&(en.hidden=!0);var e=n.trim();if(e.length<2)return it(),"";var r=e.toLowerCase(),s=sn.filter(function(B){return B.label.toLowerCase().indexOf(r)!==-1||B.q.toLowerCase().indexOf(r)!==-1}).slice(0,4),f="";f+='<ul class="mm-h-search-list">',f+='<li><a class="mm-h-search-result mm-h-search-result-primary" href="/busca?q='+encodeURIComponent(e)+'" data-recent="1"><span class="mm-h-search-result-icon">'+Ln+'</span><span class="mm-h-search-result-label">Buscar por <strong>&ldquo;'+ln(e)+'&rdquo;</strong></span><span class="mm-h-search-result-arrow" aria-hidden="true">&rarr;</span></a></li>';for(var v=0;v<s.length;v++){var y=s[v];f+='<li><a class="mm-h-search-result" href="/busca?q='+encodeURIComponent(y.q)+'" data-recent="1"><span class="mm-h-search-result-icon">'+Ln+'</span><span class="mm-h-search-result-label">'+ln(y.label)+"</span></a></li>"}return f+="</ul>",e.length>=3&&(f+='<div class="mm-h-search-products-section" data-q="'+ln(e)+'"><span class="mm-h-search-sug-label">Produtos</span><div class="mm-h-search-products-grid mm-h-search-products-loading"><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div></div></div>'),tn.innerHTML=f,tn.hidden=!1,e}function $n(n){var e=nt(n);!e||e.length<3||vt(e).then(function(r){if(T){var s=(T.value||"").trim();if(s===e&&r!==null){var f=tn&&tn.querySelector('.mm-h-search-products-section[data-q="'+e.replace(/"/g,'\\"')+'"]');if(f){var v=f.querySelector(".mm-h-search-products-grid");if(v){if(v.classList.remove("mm-h-search-products-loading"),!r||r.length===0){f.innerHTML='<span class="mm-h-search-sug-label">Nenhum produto encontrado para &ldquo;'+ln(e)+"&rdquo;</span>";return}for(var y="",B=0;B<r.length;B++)y+=rt(r[B]);v.innerHTML=y}}}}})}var Wn=null;if(T){T.addEventListener("input",function(){clearTimeout(Wn);var n=T.value;Wn=setTimeout(function(){!n||n.trim().length<2?it():$n(n)},300)}),tn&&tn.addEventListener("click",function(n){var e=n.target.closest&&n.target.closest("a[data-recent]");if(e){var r=e.getAttribute("href").split("q=")[1];r&&Yn(decodeURIComponent(r.replace(/\+/g," ")))}});var mt=C&&C.querySelector(".mm-h-search-form");mt&&mt.addEventListener("submit",function(){Yn((T.value||"").trim())})}A&&A.addEventListener("click",function(){it()});var hn=document.getElementById("mm-h-drawer"),Vn=document.getElementById("mm-h-drawer-close"),ht=hn&&hn.querySelector(".mm-h-drawer-backdrop");function tt(){hn&&(hn.hidden=!1,document.body.style.overflow="hidden",setTimeout(function(){var n=hn.querySelector(".mm-h-drawer-close");n&&n.focus()},100))}function Hn(){!hn||hn.hidden||(hn.classList.add("mm-h-drawer-closing"),document.body.style.overflow="",setTimeout(function(){hn.hidden=!0,hn.classList.remove("mm-h-drawer-closing");var n=document.getElementById("mm-h-burger");n&&n.focus()},320))}var st=document.getElementById("mm-h-burger");if(st&&st.addEventListener("click",tt),Vn&&Vn.addEventListener("click",Hn),ht&&ht.addEventListener("click",Hn),document.addEventListener("keydown",function(n){n.key==="Escape"&&hn&&!hn.hidden&&Hn()}),hn){var ft=0;hn.addEventListener("touchstart",function(n){ft=n.touches[0].clientX},{passive:!0}),hn.addEventListener("touchend",function(n){var e=n.changedTouches[0].clientX;ft-e>80&&Hn()},{passive:!0})}hn&&hn.querySelectorAll(".mm-h-drawer-section summary").forEach(function(n){n.addEventListener("click",function(e){e.preventDefault();var r=n.parentElement,s=r.querySelector("ul");if(s)if(r.open)s.style.maxHeight=s.scrollHeight+"px",s.style.opacity="1",requestAnimationFrame(function(){s.style.maxHeight="0",s.style.opacity="0",s.style.paddingTop="0",s.style.paddingBottom="0"}),setTimeout(function(){r.open=!1,s.style.maxHeight="",s.style.opacity="",s.style.paddingTop="",s.style.paddingBottom=""},300);else{r.open=!0;var f=s.scrollHeight;s.style.maxHeight="0",s.style.opacity="0",s.style.paddingTop="0",s.style.paddingBottom="0",requestAnimationFrame(function(){s.style.maxHeight=f+"px",s.style.opacity="1",s.style.paddingTop="",s.style.paddingBottom=""}),setTimeout(function(){s.style.maxHeight="",s.style.opacity=""},320)}})});var bt=document.getElementById("mm-h-cart"),lt=null,fn=null;function pt(){var n=document.querySelector(".carrinho-rapido-ctn");return n||document.querySelector('#cart-preview-area > div.z-\\[9999\\], #cart-preview-area > div[class*="z-[9999]"]')}function ct(n){return!!(n&&n.className&&n.className.indexOf("z-[9999]")!==-1)}var Et='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';function xt(n){if(n){var e=n.querySelector(".close-car-fast");e&&!e.innerHTML.trim()&&(e.innerHTML=Et,e.setAttribute("aria-label","Fechar carrinho"),e.setAttribute("role","button"),e.setAttribute("tabindex","0"))}}function Cn(n){!n||n.dataset.mmCloseWired||(n.dataset.mmCloseWired="1",n.addEventListener("click",function(e){var r=e.target;r&&r.closest&&(r.closest(".close-car-fast")||r.closest(".icon-arrow-bottom"))&&(e.preventDefault(),e.stopPropagation(),R())},!0),n.addEventListener("keydown",function(e){(e.key==="Enter"||e.key===" ")&&e.target&&e.target.closest&&e.target.closest(".close-car-fast")&&(e.preventDefault(),R())}))}function Ct(n){if(n){if(!n.dataset.mmLifted){n.dataset.mmLifted="1",n.style.position="fixed",n.style.display="block",n.style.zIndex="200";for(var e=n.parentElement;e&&!e.classList.contains("header-middle");)e.style.zIndex="auto",e.style.transform="none",e.style.filter="none",e.style.isolation="auto",e=e.parentElement}Cn(n),xt(n)}}var dt=[{href:"/rack-atenas-cor-naturalle-largura-220-cm",name:"Rack Atenas 220cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5519/am-2501-mavaular-rack-atenas-220-naturalle-lado.jpg?ims=200x200",priceFrom:"R$ 1.615,49",priceTo:"R$ 1.032,30"},{href:"/rack-atenas-cor-naturalle-largura-180-cm",name:"Rack Atenas 180cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5419/am-2501-mavaular-rack-atenas-180-naturalle.jpg?ims=200x200",priceFrom:"R$ 1.688,71",priceTo:"R$ 942,31"},{href:"/buffet-arcus-cor-naturalle-largura-92-cm",name:"Buffet Arcus 92cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5439/am-2501-mavaular-arcus-02-pts-naturalle.jpg?ims=200x200",priceFrom:"R$ 1.359,09",priceTo:"R$ 807,30"},{href:"/buffet-atenas-cor-naturalle",name:"Buffet Atenas",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/4237/am-2502-mavaular-buffet-atenas-naturalle.jpg?ims=200x200",priceFrom:"R$ 2.124,07",priceTo:"R$ 1.032,30"}],Pn='<svg viewBox="0 0 48 48" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 14 8 20v22a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V20l-4-6z"/><path d="M8 20h32"/><path d="M32 28a8 8 0 0 1-16 0"/></svg>';function Xn(){try{if(typeof Zord<"u"&&typeof Zord.get=="function"){var n=Zord.get("cart.size");if(typeof n=="number"&&n>0)return n;if(typeof n=="string"&&/^\d+$/.test(n)&&parseInt(n,10)>0)return parseInt(n,10)}}catch{}var e=document.querySelector("#cart-preview-area .item-ctn, .carrinho-container .item-ctn");if(e){var r=(e.textContent||"").trim();if(r&&/\d/.test(r)){var s=parseInt(r.replace(/\D/g,""),10);if(!isNaN(s))return s}}var f=document.querySelector(".carrinho-rapido-ctn");if(f){var v=0;if(f.querySelectorAll(".cart-item").forEach(function(y){y.closest(".mm-cart-empty-wrapper")||v++}),v>0)return v}return 0}function i(n){if(Xn()!==0||!n)return!1;var e=n.querySelector(".box-empty-cart");if(!e)return!1;var r=getComputedStyle(e);return!(r.display==="none"||r.visibility==="hidden")}function l(n){if(!n)return!1;var e=Xn();if(e===0)return!1;var r=0;return n.querySelectorAll(".cart-item").forEach(function(s){s.closest(".mm-cart-empty-wrapper")||r++}),r>0}function c(n){if(n){n.classList.remove("mm-cart-has-empty-enhancement");var e=n.querySelector(":scope > .mm-cart-empty-wrapper");e&&e.remove()}}function E(n){if(n){var e=n.querySelector(".content-cart");if(e){if(l(e)){c(e);return}var r=e.querySelectorAll(".cart-item").length===0;if(!(!i(e)&&!(r&&Xn()===0))&&!e.querySelector(":scope > .mm-cart-empty-wrapper")){var s=document.createElement("div");s.className="mm-cart-empty-wrapper";for(var f="",v=0;v<dt.length;v++){var y=dt[v];f+='<a class="mm-cart-suggestion-card" href="'+y.href+'"><span class="mm-cart-suggestion-thumb"><img src="'+y.img+'" alt="" loading="lazy" width="80" height="80"/></span><span class="mm-cart-suggestion-body"><span class="mm-cart-suggestion-name">'+y.name+'</span><span class="mm-cart-suggestion-price"><span class="mm-cart-suggestion-price-from">'+y.priceFrom+'</span><span class="mm-cart-suggestion-price-to">'+y.priceTo+"</span></span></span></a>"}s.innerHTML='<div class="mm-cart-empty-hero"><div class="mm-cart-empty-icon">'+Pn+'</div><h3 class="mm-cart-empty-title">Seu carrinho está vazio</h3><p class="mm-cart-empty-copy">Dê uma olhada nos móveis que nossos clientes mais amam.</p></div><div class="mm-cart-suggestions"><span class="mm-cart-suggestions-label">Você pode gostar de</span><div class="mm-cart-suggestions-grid">'+f+"</div></div>",e.classList.add("mm-cart-has-empty-enhancement"),e.appendChild(s)}}}}function M(n,e){try{if(typeof Zord>"u"||!Zord.checkout||typeof Zord.checkout.atualizaPreview!="function"){e();return}var r=Xn();if(r===0){e();return}if(n.querySelector(".cart-item")){e();return}Zord.checkout.atualizaPreview();var s=Date.now(),f=2e3;(function v(){if(n.querySelector(".cart-item")){e();return}if(Date.now()-s>=f){e();return}setTimeout(v,50)})()}catch{e()}}function F(){if(window.innerWidth<=767){var n=document.querySelector('#cart-preview-area a.link-cart, #cart-preview-area a[href*="/checkout/cart"]');if(n){document.documentElement.dataset.mmCartOpening="1",n.dataset.mmBypass="1",n.click(),delete n.dataset.mmBypass,setTimeout(function(){delete document.documentElement.dataset.mmCartOpening},400);return}window.location.href="/checkout/cart";return}var e=pt();if(e){M(e,function(){N(e)});return}var r=0,s=5;(function f(){r++,e=pt(),e?M(e,function(){N(e)}):r<s?setTimeout(f,150):window.location.href="/checkout/cart"})()}function N(n){var e=ct(n);e||(Ct(n),xt(n)),E(n);var r=n.querySelector(".content-cart");if(r&&!r.dataset.mmObserved){r.dataset.mmObserved="1";var s=new MutationObserver(function(){E(n)});s.observe(r,{childList:!0,subtree:!0,attributes:!1})}if(e){n.classList.remove("translate-x-[100%]"),n.classList.add("translate-x-[0]");var f=n.querySelector('.group.cursor-pointer, [class*="text-error-700"]');f&&!f.dataset.mmWired&&(f.dataset.mmWired="1",f.addEventListener("click",function(v){v.preventDefault(),v.stopPropagation(),R()},!0))}else n.classList.add("mm-drawer-open");!e&&!fn&&(fn=document.createElement("div"),fn.id="mm-h-cart-scrim",fn.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:150;opacity:0;transition:opacity 320ms;",fn.addEventListener("click",R),document.body.appendChild(fn),requestAnimationFrame(function(){fn.style.opacity="1"})),document.body.style.overflow="hidden"}function R(){var n=pt();if(n&&(ct(n)?(n.classList.remove("translate-x-[0]"),n.classList.add("translate-x-[100%]")):n.classList.remove("mm-drawer-open")),fn){fn.style.opacity="0";var e=fn;setTimeout(function(){e&&e.parentNode&&e.parentNode.removeChild(e)},320),fn=null}document.body.style.overflow=""}bt&&bt.addEventListener("click",function(n){n.preventDefault(),F()}),window.innerWidth<=767&&(function n(){var e=document.querySelector('#cart-preview-area > [class*="z-[9999]"]');if(!e){setTimeout(n,500);return}if(!e.dataset.mmGuardWired){e.dataset.mmGuardWired="1";var r=new MutationObserver(function(){e.className.indexOf("translate-x-[0]")!==-1&&(document.documentElement.dataset.mmCartOpening||(e.classList.remove("translate-x-[0]"),e.classList.add("translate-x-[100%]")))});r.observe(e,{attributes:!0,attributeFilter:["class"]})}})(),document.addEventListener("click",function(n){var e=n.target.closest('#cart-preview-area a.link-cart, header.ra-header > .header-bottom a[href*="/checkout/cart"], header.ra-header > .header-bottom a[href*="carrinho"]');if(e){if(e.dataset.mmBypass)return;n.preventDefault(),n.stopPropagation(),F()}},!0);var W=document.querySelector("header.ra-header > .header-bottom");W&&W.addEventListener("click",function(n){var e=n.target.closest('a[href*="carrinho"], a[href*="/checkout/cart"], [class*="carrinho"]');e&&(n.preventDefault(),n.stopPropagation(),F())},!0),document.addEventListener("keydown",function(n){n.key==="Escape"&&fn&&R()});var K=document.getElementById("mm-h-cart-count"),an=document.getElementById("mm-h-cart");function G(){if(K){var n=Xn();n>0?(K.textContent=n>99?"99+":String(n),K.hidden=!1):K.hidden=!0,an&&an.setAttribute("aria-label","Carrinho, "+n+" "+(n===1?"item":"itens"));var e=pt();e&&e.dataset.mmLifted&&E(e)}}window.addEventListener("reactItemAddedToCart",G),typeof jQuery<"u"&&(jQuery(document).on("reactItemAddedToCart",G),jQuery(document).ajaxComplete(function(n,e,r){r&&r.url&&r.url.indexOf("checkout/cart")!==-1&&setTimeout(G,150)})),setTimeout(G,500),setTimeout(G,2e3),setTimeout(G,5e3);function on(){var n=document.querySelector("#cart-preview-area .item-ctn, .carrinho-container .item-ctn");if(!(!n||n.dataset.mmObserved)){n.dataset.mmObserved="1";var e=new MutationObserver(G);e.observe(n,{childList:!0,characterData:!0,subtree:!0})}}on(),setTimeout(on,1e3),setTimeout(on,3e3);var pn=0,Y=!1,t=24;function a(){var n=window.scrollY,e=n-pn;n>t&&e>0?L.classList.add("is-compact"):(n<=t||e<0)&&L.classList.remove("is-compact"),pn=n,Y=!1}window.addEventListener("scroll",function(){Y||(requestAnimationFrame(a),Y=!0)},{passive:!0})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g):g()})(),(function(){if(!document.getElementById("mm-org-schema")){var P=document.querySelector('.logo img, header img[alt*="logo" i], header img[alt*="Madeira" i]'),O=P&&P.getAttribute("src")||"";O&&O.indexOf("http")!==0&&(O="https://www.madeiramania.com.br"+O);var L={"@context":"https://schema.org","@type":"OnlineStore","@id":"https://www.madeiramania.com.br/#organization",name:"Madeira Mania",url:"https://www.madeiramania.com.br",description:"Loja online de móveis com preços abaixo dos marketplaces. Racks, mesas, cristaleiras, sofás, camas e estantes com entrega para todo o Brasil. Até 12x sem juros ou 7% de desconto no PIX.",sameAs:["https://www.instagram.com/madeiramaniabr/","https://www.facebook.com/madeiramaniabr/","https://www.reclameaqui.com.br/empresa/madeira-mania-comercio-de-moveis-ltda/","https://www.youtube.com/@madeiramaniabr","https://www.tiktok.com/@madeiramaniabr"],contactPoint:[{"@type":"ContactPoint",telephone:"+55-11-91529-9488",contactType:"customer service",availableLanguage:"Portuguese"},{"@type":"ContactPoint",url:"https://wa.me/5511915299488",contactType:"customer service",description:"WhatsApp"}],hasMerchantReturnPolicy:{"@type":"MerchantReturnPolicy",applicableCountry:"BR",returnPolicyCategory:"https://schema.org/MerchantReturnFiniteReturnWindow",merchantReturnDays:7,returnMethod:"https://schema.org/ReturnByMail"}};O&&O.indexOf("http")===0&&(L.logo=O);var h=document.createElement("script");h.type="application/ld+json",h.id="mm-org-schema",h.textContent=JSON.stringify(L),document.head.appendChild(h)}})(),(function g(){g._retries=(g._retries||0)+1;var P=document.querySelector("#produto-react-app");if(!P||!P.querySelector(".informacoes-compra-produto")){g._retries<30&&setTimeout(g,500);return}if((function(){var h=P.querySelector("#container-swiper"),o=P.querySelector(".swiper-pagination");if(!h||!o)return;var m=o.querySelectorAll(".swiper-pagination-bullet");if(m.length<2)return;var p=P.querySelector(".gallery-main");if(p)for(var u=p.querySelectorAll(".button-prev, .button-next"),d=0;d<u.length;d++)u[d].style.display="none";var k=document.createElement("div");k.id="mm-gallery-counter",k.style.cssText=["position: absolute","top: 12px","left: 12px","background: rgba(255,255,255,0.85)","color: #333","font-size: 12px","font-weight: 500","padding: 3px 10px","border-radius: 12px","z-index: 10","pointer-events: none","font-family: -apple-system, BlinkMacSystemFont, sans-serif","letter-spacing: 0.5px"].join(";"),p&&(p.style.position="relative",p.appendChild(k));function b(){var C=o.querySelector(".swiper-pagination-bullet-active"),A=o.querySelectorAll(".swiper-pagination-bullet");if(!(!C||!A.length)){var x=Array.prototype.indexOf.call(A,C)+1;k.textContent=x+" / "+A.length}}b();var q=new MutationObserver(b);q.observe(o,{subtree:!0,attributes:!0,attributeFilter:["class"]})})(),(function(){var h=P.querySelector(".avaliacoes");if(h){for(var o=document.querySelectorAll("script:not([src])"),m=0,p=0,u=0;u<o.length;u++){var d=o[u].textContent;if(!(d.indexOf("Zord.avaliacoes")===-1&&d.indexOf("produtoAvaliacoes")===-1)){var k=d.match(/produtoAvaliacoes\s*:\s*(\d+)/),b=d.match(/\bnota\s*:\s*(?:Number\()?([\d.]+)/);if(k&&(m=parseInt(k[1],10)),b&&(p=parseFloat(b[1])),m>0)break}}if(m===0){h.style.display="none";return}for(var q=(p%1===0,p.toFixed(1)),C="",A=1;A<=5;A++)A<=Math.floor(p)||A-p<1&&A-p>0?C+='<span style="color:#f5a623;font-size:14px;">&#9733;</span>':C+='<span style="color:#ddd;font-size:14px;">&#9733;</span>';var x=m===1?"avaliação":"avaliações";h.innerHTML='<a href="#avaliacoes" style="display:inline-flex;align-items:center;gap:4px;text-decoration:none;color:#555;font-size:13px;">'+C+' <span style="font-weight:600;color:#1a1a1a;">'+q+'</span> <span style="color:#777;">('+m+" "+x+")</span></a>",h.style.display="",h.style.marginTop="4px"}})(),(function(){var h=P.querySelector("h1");if(h){var o=h.parentElement.querySelector(".text-secondary-700.text-xs");if(o){var m=h.textContent.toLowerCase().replace(/\s+/g," ").trim(),p=o.textContent.toLowerCase().replace(/\s+/g," ").trim(),u=p.split(/[\s\-:,]+/).filter(function(k){return k.length>2}),d=u.filter(function(k){return m.indexOf(k)!==-1});d.length>=u.length*.6&&(o.style.display="none")}}})(),(function(){var h=P.querySelector(".informacoes-compra-produto");if(!h||document.getElementById("mm-action-row"))return;var o=h.querySelector(".salvar-favoritos"),m=h.querySelector(".exibe-botao-whatsapp"),p=h.querySelector(".compartilhar-produto");if(!o&&!m&&!p)return;var u=document.createElement("div");u.id="mm-action-row";function d(){var z=document.createElementNS("http://www.w3.org/2000/svg","svg");z.setAttribute("width","18"),z.setAttribute("height","18"),z.setAttribute("viewBox","0 0 24 24"),z.setAttribute("fill","none"),z.setAttribute("stroke","currentColor"),z.setAttribute("stroke-width","2"),z.setAttribute("stroke-linecap","round"),z.setAttribute("stroke-linejoin","round");var Q=document.createElementNS("http://www.w3.org/2000/svg","path");return Q.setAttribute("d","M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"),z.appendChild(Q),z}function k(){var z=document.createElementNS("http://www.w3.org/2000/svg","svg");z.setAttribute("width","18"),z.setAttribute("height","18"),z.setAttribute("viewBox","0 0 24 24"),z.setAttribute("fill","none"),z.setAttribute("stroke","currentColor"),z.setAttribute("stroke-width","2"),z.setAttribute("stroke-linecap","round"),z.setAttribute("stroke-linejoin","round");var Q=document.createElementNS("http://www.w3.org/2000/svg","path");return Q.setAttribute("d","M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"),z.appendChild(Q),z}if(o){var b=document.createElement("div");b.className="salvar-favoritos";var q=document.createElement("button");q.setAttribute("aria-label","Favoritar"),q.appendChild(k()),q.addEventListener("click",function(){var z=o.querySelector("button");z&&z.click()}),b.appendChild(q),u.appendChild(b),o.style.cssText+=";position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;"}if(m&&(m.style.display="none"),p){var C=document.createElement("div");C.className="compartilhar-produto";var A=document.createElement("button");A.setAttribute("aria-label","Compartilhar"),A.appendChild(d()),A.addEventListener("click",function(){var z=p.querySelector("button");z&&z.click()}),C.appendChild(A),u.appendChild(C),p.style.cssText+=";position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;"}var x=h.querySelector("#area-comprar");if(x){for(var T=x,V=x.nextElementSibling;V;){var I=window.getComputedStyle(V).position;if(I==="fixed"||I==="sticky")T=V,V=V.nextElementSibling;else break}T.parentNode.insertBefore(u,T.nextSibling)}else h.appendChild(u)})(),(function(){var h=P.querySelector(".comprar-fixo.area-compra-float");if(!(!h||h.querySelector("#mm-sticky-old-price"))){var o=P.querySelector(".informacoes-compra-produto");if(o){var m=o.querySelector(".line-through");if(m){var p=m.textContent.trim(),u=h.querySelector(".price-fixed");if(u){var d=document.createElement("span");d.id="mm-sticky-old-price",d.textContent=p,d.style.cssText=["text-decoration: line-through","color: #999","font-size: 11px","display: block","line-height: 1.2","margin-bottom: 1px"].join(";"),u.insertBefore(d,u.firstChild)}}}}})(),(function(){var h=P.querySelector(".informacoes-compra-produto");if(!(!h||document.getElementById("mm-trust-badges"))){var o=h.querySelector("#area-comprar");if(o){var m=document.createElement("div");m.id="mm-trust-badges",m.style.cssText=["display: flex","justify-content: center","align-items: center","flex-wrap: wrap","gap: 6px 10px","padding: 8px 0","margin-top: 2px"].join(";");var p=[{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',text:"Compra Segura"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',text:"Troca 7 dias"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10" stroke="#4b664a"/></svg>',text:"Reclame Aqui"}],u="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:#777;white-space:nowrap;";p.forEach(function(k,b){var q=document.createElement("span");if(q.style.cssText=u,q.innerHTML=k.icon+" "+k.text,m.appendChild(q),b<p.length-1){var C=document.createElement("span");C.textContent="|",C.style.cssText="color:#ddd;font-size:10px;",m.appendChild(C)}});for(var d=o.nextElementSibling;d&&window.getComputedStyle(d).position==="fixed";)d=d.nextElementSibling;d?h.insertBefore(m,d):h.appendChild(m)}}})(),(function(){var h=P.querySelector(".informacoes-compra-produto");if(!(!h||document.getElementById("mm-whatsapp-cta"))){var o=(document.querySelector("#prod-nome")||{}).value||"",m=(document.querySelector("#prod-valor")||{}).value||"",p=window.location.href,u="5511915299488",d="";m&&(d=parseFloat(m).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}));var k="Olá! Tenho interesse no "+o.trim();d&&(k+=" ("+d+")"),k+=". "+p;var b="https://api.whatsapp.com/send?phone="+u+"&text="+encodeURIComponent(k),q=document.createElement("a");q.id="mm-whatsapp-cta",q.href=b,q.target="_blank",q.rel="noopener noreferrer";var C='<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';q.innerHTML=C+"<span>Compre pelo WhatsApp</span>";var A=document.getElementById("mm-action-row"),x=document.getElementById("mm-trust-badges"),T=A||x;T&&T.parentNode===h&&h.insertBefore(q,T.nextElementSibling)}})(),(function(){var h=P.querySelector(".informacoes-compra-produto");if(!(!h||document.getElementById("mm-stock-indicator"))){for(var o=10,m=document.querySelectorAll("script:not([src])"),p=-1,u=0;u<m.length;u++){var d=m[u].textContent,k=d.match(/"qtde_estoque"\s*:\s*(\d+)/);if(k){p=parseInt(k[1],10);break}}var b=p-o;if(!(b<1||b>9)){var q=document.createElement("div");q.id="mm-stock-indicator",q.style.cssText=["display: flex","align-items: center","gap: 6px","padding: 8px 12px","background: #fff8f0","border: 1px solid #fde0c2","border-radius: 8px","font-size: 13px","color: #c65d00","font-weight: 500","margin-top: 4px"].join(";");var C=b===1?"unidade":"unidades";q.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c65d00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>Restam apenas <strong>'+b+"</strong> "+C+" em estoque";var A=h.firstElementChild;A&&A.parentNode.insertBefore(q,A.nextElementSibling)}}})(),(function(){if(!document.getElementById("mm-trust-block")){var h=window.innerWidth>=769,o=document.createElement("div");o.id="mm-trust-block",o.style.cssText=["background: #f7f8f7","display: flex","align-items: center","justify-content: center","gap: "+(h?"40px":"10px"),"padding: "+(h?"14px 24px":"12px 16px"),h?"flex-direction: row":"flex-direction: column",h?"border-top: 1px solid #e8ece8":"border-radius: 10px",h?"border-bottom: 1px solid #e8ece8":"",h?"margin: 0":"margin-top: 10px"].filter(Boolean).join(";");var m=[{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',label:"Atendimento",desc:"Seg à Sex 8h-18h"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',label:"Garantia",desc:"12 meses fabricação"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',label:"Trocas",desc:"Até 7 dias"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',label:"Frete",desc:"Todo o Brasil"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',label:"12x sem juros",desc:"No cartão"}],p="display:flex;align-items:center;gap:8px;",u="font-size:13px;font-weight:600;color:#1a1a1a;line-height:1.2;",d="font-size:11px;color:#777;line-height:1.2;";if(m.forEach(function(A){var x=document.createElement("div");x.style.cssText=p,x.innerHTML=A.icon+'<div><div style="'+u+'">'+A.label+'</div><div style="'+d+'">'+A.desc+"</div></div>",o.appendChild(x)}),h){var k=document.querySelector("#pagina-produto-react-app");if(k&&k.nextSibling)k.parentNode.insertBefore(o,k.nextSibling);else{var b=document.querySelector(".main-produto");b&&b.appendChild(o)}}else{var q=P.querySelector(".informacoes-compra-produto"),C=q?q.querySelector(".calculo-frete"):null;C?C.parentNode.insertBefore(o,C.nextElementSibling):q&&q.appendChild(o)}}})(),(function(){var h=P.querySelector(".informacoes-compra-produto");if(!h||document.getElementById("mm-inline-payments"))return;var o=h.querySelector(".form-pag-link");if(!o)return;var m=parseFloat(o.getAttribute("data-valor"))||0,p=parseFloat(o.getAttribute("data-valor-pix"))||0;if(m<=0)return;for(var u=[],d=1;d<=12;d++)u.push({vezes:d,valor:(m/d).toFixed(2).replace(".",",")});function k(xn){return"R$ "+xn.toFixed(2).replace(".",",")}var b=m-p,q=document.createElement("div");q.id="mm-inline-payments",q.style.cssText=["padding: 12px 0","border-top: 1px solid #f0f0f0","margin-top: 4px"].join(";");var C=window.innerWidth>=769,A="display:flex;align-items:center;gap:6px;padding:"+(C?"2px":"4px")+" 0;font-size:13px;color:#444;",x="width:5px;height:5px;border-radius:50%;background:#4b664a;flex-shrink:0;",T='<div style="'+A+'"><span style="'+x+'"></span><span><strong style="color:#1a1a1a;">PIX: '+k(p)+"</strong>"+(b>0?' <span style="color:#2e7d32;font-size:12px;font-weight:600;">(economize '+k(b)+")</span>":"")+"</span></div>";if(C)q.innerHTML=T+'<button id="mm-toggle-parcelas" style="background:none;border:none;color:#4b664a;font-size:13px;font-weight:500;padding:2px 0 0;cursor:pointer;display:flex;align-items:center;gap:4px;">Ver todas as parcelas <span style="font-size:10px;">&#9660;</span></button><div id="mm-more-parcelas" style="display:none;"></div>';else{for(var V="",I=0;I<3;I++)V+='<div style="'+A+'"><span style="'+x+'"></span><span>'+u[I].vezes+"x de R$ "+u[I].valor+" sem juros</span></div>";q.innerHTML=T+V+'<button id="mm-toggle-parcelas" style="background:none;border:none;color:#4b664a;font-size:13px;font-weight:500;padding:6px 0 0;cursor:pointer;display:flex;align-items:center;gap:4px;">Ver todas as parcelas <span style="font-size:10px;">&#9660;</span></button><div id="mm-more-parcelas" style="display:none;"></div>'}for(var z="",Q=C?0:3,tn=Q;tn<12;tn++)z+='<div style="'+A+'"><span style="'+x+'"></span><span>'+u[tn].vezes+"x de R$ "+u[tn].valor+" sem juros</span></div>";var en=o.closest("div");en&&(en.parentNode.insertBefore(q,en),o.style.display="none");var sn=document.getElementById("mm-more-parcelas");sn&&(sn.innerHTML=z);var zn=document.getElementById("mm-toggle-parcelas");zn&&sn&&zn.addEventListener("click",function(){var xn=sn.style.display!=="none";sn.style.display=xn?"none":"block",zn.innerHTML=xn?'Ver todas as parcelas <span style="font-size:10px;">&#9660;</span>':'Ver menos <span style="font-size:10px;">&#9650;</span>'})})(),(function(){var h=document.querySelector(".recomendacao-ctn-0.accordion"),o=document.querySelector(".descricao-produto.accordion");if(!(!h||!o)){var m=h.parentNode;if(!(!m||m!==o.parentNode)){var p=Array.prototype.slice.call(m.children),u=p.indexOf(h),d=p.indexOf(o);u<d&&m.insertBefore(o,h)}}})(),(function(){var h=document.querySelector("#cep");if(!h)return;var o="mm_cep",m=h.closest(".area-calculo");if(m){var p=m.querySelector("button");p&&p.addEventListener("click",function(){var C=h.value.replace(/\D/g,"");if(C.length===8)try{localStorage.setItem(o,C)}catch{}})}var u=null;try{u=localStorage.getItem(o)}catch{}if(!u||u.length!==8||h.value.replace(/\D/g,"").length>0)return;var d=u.substring(0,5)+"-"+u.substring(5);function k(C,A){C.focus();try{C.setSelectionRange(0,(C.value||"").length)}catch{}try{document.execCommand("delete")}catch{}try{document.execCommand("insertText",!1,A)}catch{}}function b(){var C=h.closest(".calculo-frete");return!!(C&&/R\$\s*\d/.test(C.innerText))}function q(C){C<=0||b()||(k(h,d),setTimeout(function(){if(!b()){var A=h.closest(".area-calculo"),x=A&&A.querySelector("button:not([disabled])");x&&x.click(),setTimeout(function(){b()||q(C-1)},2e3)}},2500))}setTimeout(function(){q(3)},600)})(),(function(){for(var h=document.querySelectorAll('.exibe-botao-whatsapp a[href*="whatsapp"]'),o=0;o<h.length;o++){var m=h[o].getAttribute("href");m&&m.indexOf("null")!==-1&&h[o].setAttribute("href",m.replace(/\s*null\s*/g," ").replace(/\s{2,}/g," "))}var p=document.querySelector(".exibe-botao-whatsapp");if(p){var u=new MutationObserver(function(){var d=p.querySelector('a[href*="whatsapp"]');d&&d.href.indexOf("null")!==-1&&d.setAttribute("href",d.getAttribute("href").replace(/\s*null\s*/g," ").replace(/\s{2,}/g," "))});u.observe(p,{subtree:!0,attributes:!0,attributeFilter:["href"]})}})(),(function(){var h=P.querySelector(".informacoes-compra-produto");if(!(!h||document.getElementById("mm-envio-badge"))){for(var o=!1,m=P.querySelectorAll(".tag-produto .text-tag, .tag-produto"),p=0;p<m.length;p++)if(m[p].textContent.toLowerCase().indexOf("envio")!==-1){o=!0;break}if(!o)for(var u=document.querySelectorAll("script:not([src])"),d=0;d<u.length;d++){var k=u[d].textContent.match(/"qtde_estoque"\s*:\s*(\d+)/);if(k){parseInt(k[1],10)>10&&(o=!0);break}}if(o){var b=document.createElement("div");b.id="mm-envio-badge",b.style.cssText=["display: inline-flex","align-items: center","gap: 6px","padding: 4px 0","font-size: 13px","color: #1a1a1a","margin-top: 4px"].join(";"),b.innerHTML='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c65d00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span><strong style="color:#1a1a1a;">Pronta entrega</strong> <span style="color:#777;font-weight:400;">·</span> <span style="color:#555;font-weight:400;">Enviamos em 24h</span></span>';var q=h.firstElementChild;q&&q.nextElementSibling&&q.parentNode.insertBefore(b,q.nextElementSibling)}}})(),(function(){for(var h=P.querySelectorAll(".tag-1.tag-produto"),o=0;o<h.length;o++){var m=h[o].textContent.trim();(m.indexOf("%")!==-1||m.indexOf("OFF")!==-1)&&(h[o].style.display="none")}})(),(function(){for(var h=document.querySelectorAll('a[href*="avaliacoes"], a[href="#avaliacoes"]'),o=0;o<h.length;o++)h[o].addEventListener("click",function(m){m.preventDefault();var p=document.querySelector("#avaliacoes")||document.querySelector(".container-avaliacoes");p&&p.scrollIntoView({behavior:"smooth",block:"start"})})})(),(function(){var h=P.querySelector("h1");if(!(!h||document.getElementById("mm-brand"))){var o=document.querySelector("#prod-marca");if(!(!o||!o.value||o.value.trim()==="")){var m=document.createElement("span");m.id="mm-brand",m.style.cssText="display:block;font-size:13px;color:#777;font-weight:400;margin-top:2px;",m.textContent="por "+o.value.trim();var p=h.parentElement;if(p){var u=h.nextElementSibling;u?p.insertBefore(m,u):p.appendChild(m)}}}})(),(function(){var h=document.getElementById("mm-trust-badges");if(h){for(var o=h.querySelectorAll("span"),m=0;m<o.length;m++)if(o[m].textContent.indexOf("Reclame")!==-1){var p=document.querySelector('footer .reclame-aqui a, footer a[href*="reclameaqui"]'),u=p?p.href:"https://www.reclameaqui.com.br/empresa/madeira-mania-comercio-de-moveis-ltda/";o[m].innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10" stroke="#4b664a"/></svg> <a href="'+u+'" target="_blank" rel="noopener" style="color:#777;text-decoration:none;">RA Verificada</a>'}}})(),(function(){var h=P.querySelector(".informacoes-compra-produto");if(h){var o=h.querySelector(".calculo-frete");if(o){h.style.cssText+=";display:flex !important;flex-direction:column !important;",o.style.cssText+=";order:20 !important;";var m=document.getElementById("mm-trust-block");m&&(m.style.cssText+=";order:30 !important;")}}})(),(function(){var h=P.querySelector(".informacoes-compra-produto");if(!(!h||document.getElementById("mm-mini-specs"))){var o=document.querySelector(".descricao-produto"),m={};if(o)for(var p=o.querySelectorAll("td"),u=0;u<p.length-1;u+=2){var d=p[u].textContent.trim().toLowerCase(),k=p[u+1].textContent.trim();d.indexOf("largura")!==-1&&(m.largura=k),d.indexOf("altura")!==-1&&(m.altura=k),d.indexOf("profundidade")!==-1&&(m.profundidade=k),d.indexOf("material")!==-1&&(m.material=k),d.indexOf("dobradi")!==-1&&(m.dobradicas=k),(d.indexOf("pes")!==-1||d.indexOf("pés")!==-1)&&(m.pes=k)}if(!(!m.largura&&!m.material)){var b=[];if(m.material&&b.push(m.material),m.dobradicas&&b.push("Dobradiças "+m.dobradicas),m.pes&&b.push("Pés: "+m.pes),m.largura&&b.push(m.largura+" × "+(m.altura||"")+" × "+(m.profundidade||"")),b.length!==0){var q=document.createElement("div");q.id="mm-mini-specs",q.style.cssText="padding:8px 0;border-top:1px solid #f0f0f0;margin-top:4px;";var C="";b.forEach(function(x){C+='<div style="display:flex;align-items:center;gap:6px;padding:2px 0;font-size:13px;color:#555;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polyline points="20 6 9 17 4 12"/></svg><span>'+x+"</span></div>"}),q.innerHTML=C;var A=h.querySelector("#area-comprar");A&&h.insertBefore(q,A)}}}})(),(function(){if(window.innerWidth<769||document.getElementById("mm-desktop-sticky"))return;var h=P.querySelector(".informacoes-compra-produto");if(!h)return;var o=h.querySelector(".line-through"),m=(document.querySelector("#prod-valor-principal")||{}).value,p=(document.querySelector("#prod-valor")||{}).value,u=(document.querySelector("#prod-nome")||{}).value||"",d=u.split(" - ")[0]||u;if(!m)return;var k=o?o.textContent.trim():"",b=parseFloat(m).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),q=p?parseFloat(p).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}):"",C=p?(parseFloat(p)/12).toFixed(2).replace(".",","):"",A=document.createElement("div");A.id="mm-desktop-sticky",A.style.cssText=["position: fixed","top: -60px","left: 0","width: 100%","height: 56px","background: #ffffff","border-bottom: 1px solid #e8ece8","box-shadow: 0 2px 8px rgba(0,0,0,0.06)","z-index: 100","display: flex","align-items: center","justify-content: center","padding: 0 24px","transition: top 0.25s ease","font-family: -apple-system, BlinkMacSystemFont, sans-serif"].join(";");var x="display:flex;align-items:center;gap:16px;max-width:1200px;width:100%;",T="font-size:14px;font-weight:500;color:#1a1a1a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:300px;",V="display:flex;align-items:center;gap:8px;margin-left:auto;",I="text-decoration:line-through;color:#999;font-size:12px;",z="font-size:15px;font-weight:600;color:#1a1a1a;",Q="font-size:12px;color:#666;",tn="display:inline-flex;align-items:center;justify-content:center;padding:8px 20px;background:#4b664a;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer;white-space:nowrap;";A.innerHTML='<div style="'+x+'"><span style="'+T+'">'+d+'</span><div style="'+V+'">'+(k?'<span style="'+I+'">'+k+"</span>":"")+'<span style="'+z+'">'+b+' <small style="font-weight:400;font-size:11px;color:#666;">PIX</small></span>'+(C?'<span style="'+Q+'">12x R$ '+C+"</span>":"")+'</div><button id="mm-desktop-sticky-btn" style="'+tn+'">Comprar</button></div>',document.body.appendChild(A);var en=document.getElementById("mm-desktop-sticky-btn");en&&en.addEventListener("click",function(){var xn=P.querySelector(".btn-comprar");xn&&xn.click()});var sn=h.querySelector("#area-comprar");if(!sn)return;function zn(){var xn=sn.getBoundingClientRect();A.style.top=xn.bottom<0?"0px":"-60px"}window.addEventListener("scroll",zn,{passive:!0}),zn()})(),(function(){var h=[".selos-seguranca",".formas-pagto"];h.forEach(function(o){var m=document.querySelector("footer "+o);m&&m.classList.contains("closed")&&(m.classList.remove("closed"),m.classList.add("open"))})})(),window.innerWidth>=769){var O=P.querySelector(".informacoes-compra-produto");O&&(O.style.setProperty("gap","12px","important"),O.style.setProperty("row-gap","12px","important"))}document.body.classList.add("mm-ready")})();var wt=document.currentScript;(function g(){g._retries=(g._retries||0)+1;var P=document.querySelector("#produto-react-app");if(!P||!P.querySelector(".informacoes-compra-produto")){g._retries<30&&setTimeout(g,500);return}if(!document.getElementById("mm-product-schema")){var O=P.querySelector("h1"),L=O?O.textContent.trim():"";if(L){var h=document.querySelector('link[rel="canonical"]'),o=h?h.href:location.href.split("?")[0],m=document.querySelector("#prod-marca"),p=m?m.value.trim():"";!p&&window.dataLayer&&window.dataLayer[0]&&(p=window.dataLayer[0].brand||"");var u=P.querySelector(".form-pag-link"),d=document.querySelector("#prod-valor-principal"),k=document.querySelector("#prod-valor"),b=0,q=0;u&&(b=parseFloat(u.getAttribute("data-valor-pix"))||0,q=parseFloat(u.getAttribute("data-valor"))||0),!q&&k&&(q=parseFloat(k.value)||0),!b&&d&&(b=parseFloat(d.value)||0);var C=b>0?b:q;if(!(C<=0)){var A="";window.dataLayer&&window.dataLayer[0]&&(A=window.dataLayer[0].sku||"");var x="",T="";window.dataLayer&&window.dataLayer[0]&&(x=window.dataLayer[0].category||"",T=window.dataLayer[0].category2||"");for(var V=document.querySelector("#prod-deposito"),I=V?V.value==="1":!0,z=[],Q=P.querySelectorAll(".gallery-main img, #block-imagem img"),tn=0;tn<Q.length;tn++){var en=Q[tn].getAttribute("src")||Q[tn].getAttribute("data-src")||"";en&&en.indexOf("http")===0&&z.indexOf(en)===-1&&z.push(en)}if(z.length===0){var sn=document.querySelector('meta[property="og:image"]');sn&&sn.content&&z.push(sn.content)}var zn=document.querySelector('meta[name="description"]'),xn=zn?zn.content.trim():"";if(!xn){var Yn=document.querySelector(".descricao-produto .accordion-content p");Yn&&(xn=Yn.textContent.trim().substring(0,500))}for(var ln=0,Ln=0,Jn=document.querySelectorAll("script:not([src])"),Mn=0;Mn<Jn.length;Mn++){var Un=Jn[Mn].textContent;if(!(Un.indexOf("Zord.avaliacoes")===-1&&Un.indexOf("produtoAvaliacoes")===-1)){var In=Un.match(/produtoAvaliacoes\s*:\s*(\d+)/),On=Un.match(/\bnota\s*:\s*(?:Number\()?([\d.]+)/);In&&(ln=parseInt(In[1],10)),On&&(Ln=parseFloat(On[1]))}}var kn={"@context":"https://schema.org","@type":"Product",name:L,url:o,image:z,description:xn,sku:A,brand:{"@type":"Brand",name:p||"Madeira Mania"},offers:{"@type":"Offer",url:o,price:C.toFixed(2),priceCurrency:"BRL",availability:I?"https://schema.org/InStock":"https://schema.org/OutOfStock",itemCondition:"https://schema.org/NewCondition",seller:{"@type":"Organization",name:"Madeira Mania"},hasMerchantReturnPolicy:{"@type":"MerchantReturnPolicy",applicableCountry:"BR",returnPolicyCategory:"https://schema.org/MerchantReturnFiniteReturnWindow",merchantReturnDays:7,returnMethod:"https://schema.org/ReturnByMail"},shippingDetails:{"@type":"OfferShippingDetails",shippingDestination:{"@type":"DefinedRegion",addressCountry:"BR"},deliveryTime:{"@type":"ShippingDeliveryTime",handlingTime:{"@type":"QuantitativeValue",minValue:1,maxValue:3,unitCode:"DAY"},transitTime:{"@type":"QuantitativeValue",minValue:5,maxValue:20,unitCode:"DAY"}}}}};q>0&&(kn.offers.priceSpecification=[{"@type":"UnitPriceSpecification",price:b>0?b.toFixed(2):C.toFixed(2),priceCurrency:"BRL",name:"PIX"},{"@type":"UnitPriceSpecification",price:(q/12).toFixed(2),priceCurrency:"BRL",name:"12x sem juros",referenceQuantity:{"@type":"QuantitativeValue",value:12,unitCode:"MON"}}]),ln>0&&Ln>0&&(kn.aggregateRating={"@type":"AggregateRating",ratingValue:Ln.toFixed(1),bestRating:"5",worstRating:"1",reviewCount:String(ln)}),x&&(kn.category=x+(T?" > "+T:""));var yn=document.createElement("script");yn.type="application/ld+json",yn.id="mm-product-schema",yn.textContent=JSON.stringify(kn),document.head.appendChild(yn),wt&&wt.parentNode&&wt.parentNode.removeChild(wt)}}}})();var kt=document.currentScript;(function g(){g._retries=(g._retries||0)+1;var P=document.querySelector("#produto-react-app"),O=P?P.querySelector("h1"):null;if(!O){g._retries<30&&setTimeout(g,500);return}if(!document.getElementById("mm-breadcrumb-schema")){var L=[],h=1;L.push({"@type":"ListItem",position:h++,name:"Home",item:"https://www.madeiramania.com.br"});var o=document.querySelectorAll('.breadcrumb a, nav[aria-label*="breadcrumb" i] a, .migalha a, .breadcrumb-item a');if(o.length>0)for(var m=0;m<o.length;m++){var p=o[m],u=p.textContent.trim(),d=p.href;!u||u.toLowerCase()==="home"||u.toLowerCase()==="início"||!d||d==="#"||L.push({"@type":"ListItem",position:h++,name:u,item:d})}else if(window.dataLayer&&window.dataLayer[0]){var k=window.dataLayer[0].category||"",b=window.dataLayer[0].category2||"";k&&L.push({"@type":"ListItem",position:h++,name:k,item:"https://www.madeiramania.com.br/"+k.toLowerCase().replace(/\s+/g,"-").replace(/[àáâã]/g,"a").replace(/[éêë]/g,"e").replace(/[íî]/g,"i").replace(/[óôõ]/g,"o").replace(/[úû]/g,"u").replace(/ç/g,"c")}),b&&b!==k&&L.push({"@type":"ListItem",position:h++,name:b,item:"https://www.madeiramania.com.br/"+b.toLowerCase().replace(/\s+/g,"-").replace(/[àáâã]/g,"a").replace(/[éêë]/g,"e").replace(/[íî]/g,"i").replace(/[óôõ]/g,"o").replace(/[úû]/g,"u").replace(/ç/g,"c")})}if(L.push({"@type":"ListItem",position:h,name:O.textContent.trim()}),!(L.length<2)){var q={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:L},C=document.createElement("script");C.type="application/ld+json",C.id="mm-breadcrumb-schema",C.textContent=JSON.stringify(q),document.head.appendChild(C),kt&&kt.parentNode&&kt.parentNode.removeChild(kt)}}})();var St=document.currentScript;(function g(){g._retries=(g._retries||0)+1;var P=document.querySelector(".descricao-produto");if(!P){g._retries<30&&setTimeout(g,500);return}if(!document.getElementById("mm-faq-section")){var O=[{q:"Como funciona a entrega de móveis?",a:"Enviamos para todo o Brasil por transportadora especializada em móveis. O prazo varia de 5 a 20 dias úteis dependendo da sua região. Você pode calcular o frete e prazo exato informando seu CEP na página do produto, acima do botão de compra."},{q:"O móvel vem montado ou precisa montar?",a:"A maioria dos móveis é enviada desmontada para garantir segurança no transporte. Cada produto inclui manual de montagem com instruções passo a passo e todas as ferragens necessárias. Produtos de madeira maciça geralmente exigem apenas encaixe simples de pés ou portas."},{q:"Vocês entregam em apartamento e zona rural?",a:"Sim, entregamos em apartamentos e áreas urbanas em todo o Brasil. Para zonas rurais, a disponibilidade depende da região — consulte informando seu CEP. A entrega é realizada até a portaria ou térreo do edifício."},{q:"E se o produto chegar com defeito?",a:"Você tem 7 dias para solicitar troca ou devolução a partir do recebimento, conforme o Código de Defesa do Consumidor (Art. 49). Basta entrar em contato pelo nosso WhatsApp com fotos do defeito. Todos os produtos possuem garantia de 12 meses contra defeitos de fabricação."},{q:"Quais as formas de pagamento?",a:"Aceitamos PIX com 7% de desconto (processado na hora), cartão de crédito em até 12x sem juros (Visa, Mastercard, Elo, American Express) e boleto bancário. O pagamento via PIX agiliza o despacho do seu pedido."},{q:"O preço de vocês é realmente menor que nos marketplaces?",a:"Sim. Como vendemos direto ao consumidor, sem comissões de marketplace, nossos preços são consistentemente 10% a 25% menores que MadeiraMadeira, Mercado Livre e outros. Compare o mesmo produto pelo código SKU do fabricante e confira a diferença."},{q:"Como funciona a garantia?",a:"Todos os produtos possuem garantia de 12 meses contra defeitos de fabricação, além do direito de arrependimento de 7 dias garantido pelo CDC. Móveis de madeira maciça, com os cuidados adequados, possuem durabilidade superior a 30 anos."}];if(!document.getElementById("mm-faq-styles")){var L=document.createElement("style");L.id="mm-faq-styles",L.textContent=["#mm-faq-section button:focus-visible { outline: 2px solid #4b664a; outline-offset: 2px; border-radius: 4px; }","#mm-faq-section button:active { opacity: 0.7; }","@media (prefers-reduced-motion: reduce) { #mm-faq-section * { transition: none !important; } }"].join(`
`),document.head.appendChild(L)}var h=document.createElement("div");h.id="mm-faq-section",h.style.cssText=["margin: 24px 0","padding: 0 8px"].join(";");var o=document.createElement("h2");o.style.cssText=["font-size: 18px","font-weight: 700","color: #1a1a1a","margin-bottom: 16px","padding-bottom: 8px","border-bottom: 2px solid #4b664a"].join(";"),o.textContent="Perguntas Frequentes",h.appendChild(o);var m=document.createElement("div");m.style.cssText=["display: flex","flex-direction: column","gap: 0"].join(";"),O.forEach(function(b,q){var C=document.createElement("div");C.style.cssText="border-bottom: 1px solid #e8ece8;";var A=document.createElement("button");A.setAttribute("aria-expanded","false"),A.setAttribute("aria-controls","mm-faq-answer-"+q),A.style.cssText=["display: flex","justify-content: space-between","align-items: center","width: 100%","padding: 16px 0","background: none","border: none","cursor: pointer","text-align: left","font-size: 15px","font-weight: 600","color: #1a1a1a","line-height: 1.4","font-family: inherit","-webkit-tap-highlight-color: transparent"].join(";");var x=document.createElement("span");x.textContent=b.q,x.style.cssText="flex: 1; padding-right: 12px;";var T=document.createElement("span");T.textContent="+",T.style.cssText=["font-size: 20px","font-weight: 300","color: #4b664a","flex-shrink: 0","transition: transform 0.2s ease","width: 24px","text-align: center"].join(";"),A.appendChild(x),A.appendChild(T);var V=document.createElement("div");V.id="mm-faq-answer-"+q,V.setAttribute("role","region"),V.setAttribute("aria-labelledby","mm-faq-q-"+q),A.id="mm-faq-q-"+q,V.style.cssText=["max-height: 0","overflow: hidden","transition: max-height 0.3s ease, padding 0.3s ease","font-size: 14px","line-height: 1.6","color: #444"].join(";");var I=document.createElement("div");I.style.cssText="padding: 0 0 14px 0;",I.textContent=b.a,V.appendChild(I),A.addEventListener("click",function(){var z=A.getAttribute("aria-expanded")==="true";z?(V.style.maxHeight="0px",T.textContent="+",A.setAttribute("aria-expanded","false")):(V.style.maxHeight=V.scrollHeight+"px",T.textContent="−",A.setAttribute("aria-expanded","true"))}),A.addEventListener("touchstart",function(){A.style.opacity="0.7"},{passive:!0}),A.addEventListener("touchend",function(){A.style.opacity="1"},{passive:!0}),C.appendChild(A),C.appendChild(V),m.appendChild(C)}),h.appendChild(m);var p=document.querySelector(".produtos-relacionados"),u=document.querySelector(".container-avaliacoes");if(p&&p.nextSibling?p.parentNode.insertBefore(h,p.nextSibling):u?u.parentNode.insertBefore(h,u):P.parentNode.appendChild(h),!document.getElementById("mm-faq-schema")){var d={"@context":"https://schema.org","@type":"FAQPage",mainEntity:O.map(function(b){return{"@type":"Question",name:b.q,acceptedAnswer:{"@type":"Answer",text:b.a}}})},k=document.createElement("script");k.type="application/ld+json",k.id="mm-faq-schema",k.textContent=JSON.stringify(d),document.head.appendChild(k)}St&&St.parentNode&&St.parentNode.removeChild(St)}})(),(function g(){g._retries=(g._retries||0)+1;var P=document.querySelector("#produto-react-app");if(!P||!P.querySelector("h1")){g._retries<30&&setTimeout(g,500);return}if(!document.querySelector('meta[property="og:title"]')){var O=P.querySelector("h1"),L=O?O.textContent.trim():document.title,h=document.querySelector('meta[name="description"]'),o=h?h.content.trim():"";if(!o){var m=document.querySelector(".descricao-produto .accordion-content p");m&&(o=m.textContent.trim().substring(0,200))}o||(o=L+" - Compre online na Madeira Mania com até 12x sem juros ou 7% de desconto no PIX.");var p=document.querySelector('link[rel="canonical"]'),u=p?p.href:location.href.split("?")[0],d="",k=P.querySelector(".gallery-main img, #block-imagem img");if(k&&(d=k.getAttribute("src")||k.getAttribute("data-src")||""),!d){var b=document.querySelector('meta[property="og:image"]');b&&(d=b.content)}var q=P.querySelector(".form-pag-link"),C=q&&parseFloat(q.getAttribute("data-valor-pix"))||0;if(C>0){var A="R$ "+C.toFixed(2).replace(".",",");o.indexOf("R$")===-1&&(o=o.replace(/\.$/,"")+" | A partir de "+A+" no PIX.")}o.length>200&&(o=o.substring(0,197)+"...");var x=[{property:"og:type",content:"product"},{property:"og:title",content:L},{property:"og:description",content:o},{property:"og:url",content:u},{property:"og:site_name",content:"Madeira Mania"},{property:"og:locale",content:"pt_BR"}];d&&(x.push({property:"og:image",content:d}),x.push({property:"og:image:width",content:"600"}),x.push({property:"og:image:height",content:"600"})),x.push({name:"twitter:card",content:"summary_large_image"}),x.push({name:"twitter:title",content:L}),x.push({name:"twitter:description",content:o}),d&&x.push({name:"twitter:image",content:d}),x.forEach(function(T){var V=document.createElement("meta");T.property&&V.setAttribute("property",T.property),T.name&&V.setAttribute("name",T.name),V.setAttribute("content",T.content),document.head.appendChild(V)})}})(),(function(g){"use strict";if(!document.getElementById("produto-react-app")&&!document.getElementById("pagina-produto-react-app"))return;const P="3.0.0";window.innerWidth>=1500&&g(document).ready(function(){function h(){g(".gallery-main .swiper-slide img").each(function(){var o=this,m=g(this).closest(".swiper-slide"),p=m.closest(".swiper");function u(){var d=o.naturalWidth,k=o.naturalHeight;d&&k&&d===k&&p.css({"max-width":d+"px",overflow:"hidden"})}o.complete?u():o.addEventListener("load",u)})}h()}),window._variacoesMagazordCarregado&&(console.log(`%c⚠️ Variações Magazord v${P} - Substituindo instância anterior`,"color: #ff9800; font-weight: bold"),window.GerenciadorVariacoesPillsMagazord&&g(".product-variations-pills-container").remove()),window._variacoesMagazordCarregado=P,console.log(`%c🚀 Variações Magazord v${P} (dataProduct) - Inicializando...`,"color: #2196f3; font-weight: bold");const O={formatoNome:{separador:" - ",separadorTipoValor:": ",exibirNomeCompleto:!1,primeiraParte:"nome_base"},labels:{ALTURA:"Altura",LARGURA:"Largura",ILUMINACAO:"Iluminação",ILUMINAÇÃO:"Iluminação",PROFUNDIDADE:"Profundidade",COR:"Cor",ACABAMENTO:"Acabamento",TAMANHO:"Tamanho",PORTAS:"Número de Portas",ESPELHO:"Espelho",GAVETAS:"Gavetas",MODELO:"Modelo",MATERIAL:"Material",LUGARES:"Lugares",FORMATO:"Formato"},variacoesComImagem:["COR","ACABAMENTO"],ignorarPalavras:[],selectors:{areaProdutosSugeridos:".sugestoes-cores",areaVariacoes:".derivacoes-produto .area-derivacoes",containerProduto:".info-produto, .box-info-produto, main",subtituloProduto:".informacoes-compra-produto .text-secondary-700.text-xs"},retry:{maxTentativas:10,intervaloMs:500,usarMutationObserver:!0},debug:!0,performance:{useRequestAnimationFrame:!0,debounceDelay:150}};class L{constructor(){this.variacoes={},this.produtoAtualId=null,this.produtos=[],this.tentativasDeCarregamento=0,this.observer=null,this.inicializado=!1}init(){this.log("🎯 Gerenciador de Variações Magazord v3 (dataProduct)","info"),this.log("🎨 Swatches de imagem para cores + Pills para outras variações","info"),this.esperarDOMPronto()}esperarDOMPronto(){if(typeof jQuery>"u"){setTimeout(()=>this.esperarDOMPronto(),100);return}g(document).ready(()=>{this.log("✅ DOM pronto! Aguardando dataProduct...","success"),this.esperarDataProduct()})}esperarDataProduct(){typeof dataProduct<"u"&&dataProduct.listaProdutosSugeridos?(this.log("✅ dataProduct encontrado!","success"),this.tentarCarregar()):(this.log("⏳ Aguardando dataProduct...","info"),setTimeout(()=>this.esperarDataProduct(),300))}tentarCarregar(){this.tentativasDeCarregamento++,this.log(`
🔄 Tentativa ${this.tentativasDeCarregamento}/${O.retry.maxTentativas}`,"info"),this.carregarProdutos()?(this.processarVariacoes(),this.renderizarVariacoes(),this.bindEventos(),this.inicializado=!0,this.log(`
🎉 Inicialização concluída com sucesso!`,"success"),O.retry.usarMutationObserver&&this.observarMudancasDOM()):this.tentativasDeCarregamento<O.retry.maxTentativas?setTimeout(()=>this.tentarCarregar(),O.retry.intervaloMs):this.log("❌ Número máximo de tentativas atingido.","error")}observarMudancasDOM(){this.log("ℹ️ MutationObserver desativado - dados carregados via dataProduct","info")}log(o,m="log",p=null){if(!O.debug)return;const u={info:"color: #2196f3; font-weight: bold",success:"color: #4caf50; font-weight: bold",warning:"color: #ff9800; font-weight: bold",error:"color: #f44336; font-weight: bold",log:"color: #666"};console.log(`%c${o}`,u[m]||u.log),p&&console.log(p)}carregarProdutos(){if(this.produtos=[],typeof dataProduct>"u"||!dataProduct.listaProdutosSugeridos)return this.log("❌ dataProduct ou listaProdutosSugeridos não encontrado","error"),!1;const o=dataProduct.listaProdutosSugeridos,m=dataProduct.produto,p=dataProduct.hostImagem||"";if(this.log(`📦 Encontrados ${o.length} produtos sugeridos + produto atual`,"info"),m&&m.complemento){const u=m.midia_path&&m.midia_arquivo_nome?`${p}/${m.midia_path}${m.midia_arquivo_nome}`:"",d={id:m.derivacao_id||m.produto_id,nomeCompleto:m.complemento.trim(),estoque:m.qtde_estoque,url:m.link?`/${m.link}`:"",imagem:u,imagemData:u,elemento:null,variacoes:{},nomeBase:"",nomeExibicao:"",isAtual:!0};this.produtoAtualId=d.id,this.extrairVariacoesDoNome(d),this.produtos.push(d),this.log(`   ✓ Produto atual: "${d.nomeCompleto}"`,"success")}return o.forEach((u,d)=>{const k=u.complemento||u.nome||"";if(!k)return;const b=u.derivacao_id||u.produto_id;if(b===this.produtoAtualId){this.log(`   ⏭️ Ignorando duplicata: "${k}"`,"info");return}const q=u.midia_path&&u.midia_arquivo_nome?`${p}/${u.midia_path}${u.midia_arquivo_nome}`:"",C={id:b||d,nomeCompleto:k.trim(),estoque:u.qtde_estoque,url:u.link?`/${u.link}`:"",imagem:q,imagemData:q,elemento:null,variacoes:{},nomeBase:"",nomeExibicao:"",isAtual:!1};this.extrairVariacoesDoNome(C),this.produtos.push(C),this.log(`   ✓ Sugerido: "${C.nomeCompleto}"`,"log")}),this.produtos.length===0?!1:(this.log("✅ Produtos carregados e processados:","success",this.produtos),!0)}normalizarSeparadores(o){const m=["–","—","−","‐","‑","⁃"];let p=o;return m.forEach(u=>{const d=new RegExp(`\\s${u}\\s`,"g");p=p.replace(d," - ")}),p}extrairVariacoesDoNome(o){const p=this.normalizarSeparadores(o.nomeCompleto).split(O.formatoNome.separador);this.log(`
📝 Processando: "${o.nomeCompleto}"`,"log"),O.formatoNome.primeiraParte==="nome_base"&&(o.nomeBase=p[0].trim(),p.shift()),p.forEach(u=>{const d=u.trim();if(d&&d.includes(O.formatoNome.separadorTipoValor)){const[k,...b]=d.split(O.formatoNome.separadorTipoValor),q=b.join(O.formatoNome.separadorTipoValor).trim(),C=this.normalizarTipo(k.trim());if(O.ignorarPalavras.includes(C))return;o.variacoes[C]=q,this.log(`   ✓ ${C}: ${q}`,"success")}}),o.nomeExibicao=O.formatoNome.exibirNomeCompleto?o.nomeCompleto:o.nomeBase||o.nomeCompleto,Object.keys(o.variacoes).length===0&&(o.variacoes.MODELO=o.nomeCompleto,o.nomeExibicao=o.nomeCompleto)}normalizarTipo(o){return o.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim()}processarVariacoes(){this.log(`
🔄 Processando variações...`,"info");const o=new Set;this.produtos.forEach(m=>{Object.keys(m.variacoes).forEach(p=>o.add(p))}),o.forEach(m=>{const p=new Set,u={};this.produtos.forEach(k=>{const b=k.variacoes[m];b&&(p.add(b),u[b]||(u[b]=[]),u[b].push(k))});const d=Array.from(p).sort();this.variacoes[m]={label:O.labels[m]||m,valores:d,produtosPorValor:u,usarImagem:O.variacoesComImagem.includes(m)},this.log(`   📊 ${m}: ${d.length} valor(es) único(s) → [${d.join(", ")}]`,d.length>1?"success":"warning")}),this.log("✅ Variações processadas:","success",this.variacoes)}renderizarVariacoes(){this.log(`
🎨 Renderizando variações...`,"info");let o=g(O.selectors.areaVariacoes);if(o.length===0&&(this.criarAreaVariacoes(),o=g(O.selectors.areaVariacoes)),Object.keys(this.variacoes).length===0)return;const m=g("<div>",{class:"product-variations-pills-container"});let p=0;if(Object.keys(this.variacoes).forEach(u=>{const d=this.variacoes[u];if(d.valores.length<=1){this.log(`⏭️ Ignorando "${u}" - apenas ${d.valores.length} valor(es)`,"info");return}if(d.usarImagem){const k=this.criarGrupoSwatches(u,d);m.append(k),p++}}),Object.keys(this.variacoes).forEach(u=>{const d=this.variacoes[u];if(!(d.valores.length<=1)&&!d.usarImagem){const k=this.criarGrupoPills(u,d);m.append(k),p++}}),p===0){this.log("ℹ️ Nenhuma variação com múltiplas opções - ocultando área","info"),o.closest(".derivacoes-produto").hide(),g(O.selectors.subtituloProduto).hide();return}O.performance.useRequestAnimationFrame&&window.requestAnimationFrame?requestAnimationFrame(()=>{o.empty().append(m),this.log(`✅ ${p} variação(ões) renderizada(s)!`,"success"),this.atualizarNomeProduto()}):(o.empty().append(m),this.log(`✅ ${p} variação(ões) renderizada(s)!`,"success"),this.atualizarNomeProduto())}criarAreaVariacoes(){const o=g(O.selectors.areaProdutosSugeridos);o.length>0?o.before('<div class="derivacoes-produto"><div class="area-derivacoes"></div></div>'):g("body").prepend('<div class="derivacoes-produto"><div class="area-derivacoes"></div></div>')}criarGrupoSwatches(o,m){const p=this.obterValorAtualParaTipo(o),u=g("<div>",{class:"variation-pill-group variation-pill-group--swatches","data-variacao-tipo":o,role:"group","aria-labelledby":`pill-label-${o.toLowerCase()}`}),d=g("<div>",{class:"variation-pill-label",id:`pill-label-${o.toLowerCase()}`});d.append(g("<span>").text(m.label+":")),d.append(g("<span>",{class:"variation-pill-label-value","data-label-value":o}).text(p||""));const k=g("<div>",{class:"variation-swatches-container",role:"radiogroup","aria-labelledby":`pill-label-${o.toLowerCase()}`});return m.valores.forEach((b,q)=>{const C=m.produtosPorValor[b],A=C.some(sn=>sn.estoque===void 0||sn.estoque>0),x=b===p,T=`pill-${o.toLowerCase()}-${this.sanitizeId(b)}`,V=this.encontrarMelhorProdutoParaSwatch(o,b,C);let I=null;V&&(I=V.imagemData||V.imagem);const z=g("<input>",{type:"radio",class:"variation-pill-input",id:T,name:`variation-${o}`,value:b,"data-variacao-tipo":o,"data-produtos":JSON.stringify(C.map(sn=>({id:sn.id,url:sn.url}))),checked:x,disabled:!A,"aria-label":`${m.label}: ${b}${A?"":" (Indisponível)"}`}),Q=g("<label>",{class:"variation-color-swatch-wrapper",for:T,"data-tooltip":b}),tn=g("<div>",{class:"variation-color-swatch","data-valor":b,tabindex:x?0:-1});I?tn.append(g("<img>",{src:I,alt:b,class:"variation-color-swatch-image",loading:"lazy"})):tn.css({"background-color":"#E5E7EB",display:"flex","align-items":"center","justify-content":"center","font-size":"14px",color:"#6B7280"}).text(b.charAt(0).toUpperCase());const en=g("<span>",{class:"variation-color-swatch-name",text:b,title:b});Q.append(tn).append(en),k.append(z).append(Q)}),u.append(d).append(k),u}criarGrupoPills(o,m){const p=this.obterValorAtualParaTipo(o),u=g("<div>",{class:"variation-pill-group variation-pill-group--pills","data-variacao-tipo":o,role:"group","aria-labelledby":`pill-label-${o.toLowerCase()}`}),d=g("<div>",{class:"variation-pill-label",id:`pill-label-${o.toLowerCase()}`});d.append(g("<span>").text(m.label+":")),d.append(g("<span>",{class:"variation-pill-label-value","data-label-value":o}).text(p||""));const k=g("<div>",{class:"variation-pills-container",role:"radiogroup","aria-labelledby":`pill-label-${o.toLowerCase()}`});return m.valores.forEach((b,q)=>{const C=m.produtosPorValor[b],A=C.some(Q=>Q.estoque===void 0||Q.estoque>0),x=b===p,T=`pill-${o.toLowerCase()}-${this.sanitizeId(b)}`,V=g("<input>",{type:"radio",class:"variation-pill-input",id:T,name:`variation-${o}`,value:b,"data-variacao-tipo":o,"data-produtos":JSON.stringify(C.map(Q=>({id:Q.id,url:Q.url}))),checked:x,disabled:!A,"aria-label":`${m.label}: ${b}${A?"":" (Indisponível)"}`});let I=b;A||(I+=' <span class="variation-pill-badge">Indisponível</span>');const z=g("<label>",{class:"variation-pill",for:T,html:I,"data-valor":b,tabindex:x?0:-1});k.append(V).append(z)}),u.append(d).append(k),u}sanitizeId(o){return o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}encontrarMelhorProdutoParaSwatch(o,m,p){const u=this.produtos.find(q=>q.isAtual||q.id===this.produtoAtualId);if(!u||p.length===0)return p[0]||null;if(p.length===1)return p[0];const d=u.variacoes;let k=null,b=-1;return p.forEach(q=>{let C=0;Object.keys(d).forEach(A=>{A!==o&&q.variacoes[A]===d[A]&&C++}),(q.imagemData||q.imagem)&&(C+=.5),C>b&&(b=C,k=q)}),this.log(`   🎯 Melhor produto para ${o}="${m}": score=${b}`,"log"),k||p[0]}obterValorAtualParaTipo(o){const m=this.produtos.find(p=>p.isAtual||p.id===this.produtoAtualId);return m?m.variacoes[o]:null}atualizarNomeProduto(){const o=this.produtos.find(p=>p.isAtual||p.id===this.produtoAtualId);if(!o)return;["h1.nome-produto",".product-name h1",".info-produto h1",'h1[itemprop="name"]',".box-info-produto h1"].forEach(p=>{const u=g(p);u.length>0&&u.text(o.nomeExibicao)})}bindEventos(){this.log(`
🔗 Vinculando eventos...`,"info"),g(document).on("change",".variation-pill-input",o=>{this.aoMudarVariacao(o)}),g(document).on("keydown",".variation-pills-container, .variation-swatches-container",o=>{this.handleKeyboardNavigation(o)}),g(document).on("click",".variation-pill, .variation-color-swatch-wrapper",function(){const o=g(this).is("label")?g("#"+g(this).attr("for")):g(this).closest("label").prev(".variation-pill-input");o.length&&!o.prop("disabled")&&g(this).closest(".variation-pill-group").addClass("is-loading")}),this.log("✅ Eventos vinculados","success")}handleKeyboardNavigation(o){const p=g(o.currentTarget).find(".variation-pill-input:not(:disabled)"),u=g(document.activeElement);if(!u.hasClass("variation-pill-input"))return;const d=p.index(u);let k=d;switch(o.key){case"ArrowRight":case"ArrowDown":o.preventDefault(),k=(d+1)%p.length;break;case"ArrowLeft":case"ArrowUp":o.preventDefault(),k=d-1<0?p.length-1:d-1;break;case"Home":o.preventDefault(),k=0;break;case"End":o.preventDefault(),k=p.length-1;break;default:return}p.eq(k).focus().prop("checked",!0).trigger("change")}aoMudarVariacao(o){const m=g(o.target),p=m.data("variacao-tipo"),u=m.val();this.log(`
🔄 Variação selecionada: ${p} = ${u}`,"info"),g(`.variation-pill-label-value[data-label-value="${p}"]`).text(u);const d={};g(".variation-pill-input:checked").each(function(){const b=g(this).data("variacao-tipo"),q=g(this).val();q&&(d[b]=q)}),this.log("📋 Seleção atual:","info",d);const k=this.encontrarProdutoPorVariacoes(d);if(k)this.log("✅ Produto encontrado!","success",k),this.navegarParaProduto(k);else{this.log("⚠️ Produto exato não encontrado, buscando melhor correspondência...","warning");const b=this.encontrarMelhorCorrespondencia(d);b?(this.log("✅ Melhor correspondência encontrada!","success",b),this.navegarParaProduto(b)):(this.log("❌ Nenhum produto correspondente encontrado","error"),g(".variation-pill-group").removeClass("is-loading"))}}encontrarProdutoPorVariacoes(o){return this.produtos.find(m=>Object.keys(o).every(p=>m.variacoes[p]===o[p]))}encontrarMelhorCorrespondencia(o){let m=null,p=0;return this.produtos.forEach(u=>{let d=0;Object.keys(o).forEach(k=>{u.variacoes[k]===o[k]&&d++}),d>p&&(p=d,m=u)}),p>0?m:null}navegarParaProduto(o){this.log(`
🚀 Navegando para: ${o.url}`,"info"),o.url?window.location.href=o.url:(this.log("❌ URL não encontrada para navegação","error"),g(".variation-pill-group").removeClass("is-loading"))}}setTimeout(function(){g(".product-variations-pills-container").remove(),g(".derivacoes-produto").remove();const h=new L;h.init(),window.GerenciadorVariacoesPillsMagazord=h},100)})(typeof jQuery<"u"?jQuery:window.jQuery||window.$),(function(){"use strict";function g(){if(!(typeof jQuery>"u"&&typeof $>"u")){var i=typeof jQuery<"u"?jQuery:$;i(document).ajaxComplete(function(l,c,E){E.url&&E.url.indexOf("checkout/cart")!==-1&&setTimeout(function(){window.dispatchEvent(new CustomEvent("reactItemAddedToCart"))},100)})}}function P(){var i=document.querySelector("#cart-preview-area .border-t.border-solid");if(!(!i||i.querySelector(".installment-total"))){var l=0,c=document.querySelectorAll("#cart-preview-area .cart-item");if(c.forEach(function(N){var R=parseFloat(N.getAttribute("data-item-price"))||0,W=parseInt(N.getAttribute("data-item-quantity"))||1;l+=R*W}),!(l<=0)){var E=(l/12).toFixed(2).replace(".",","),M=document.createElement("div");M.className="installment-total",M.textContent="ou 12x de R$ "+E;var F=i.querySelector(".valor-pix");F&&F.parentNode&&F.parentNode.insertBefore(M,F.nextSibling)}}}var O='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/></svg>',L='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',h='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>';function o(){P();var i=document.querySelectorAll("#cart-preview-area .cart-item, .content-cart .cart-item");i.forEach(function(l){if(!l.querySelector(".qty-btn-minus")){var c=l.querySelector(".qtd-value");if(c){var E=l.querySelector(".cart-remove-item"),M=E?E.getAttribute("data-id"):null;if(M){var F=l.querySelector(".prod-remove");F&&!c.contains(E)&&(c.appendChild(E),F.style.display="none");var N=c.parentElement,R=null;if(N)for(var W=0;W<N.children.length;W++){var K=N.children[W];if(K!==c&&K.classList&&K.classList.contains("valor")){R=K;break}}R&&!c.contains(R)&&c.appendChild(R);var an=parseInt(l.getAttribute("data-item-quantity"));if(!an||isNaN(an)){var G=c.textContent.match(/(\d+)/);an=G?parseInt(G[1]):1}var on=document.createElement("button");on.className="qty-btn-minus",on.type="button",on.setAttribute("aria-label","Diminuir quantidade"),on.innerHTML=O,on.addEventListener("click",function(a){a.preventDefault(),a.stopPropagation();var n=parseInt(pn.textContent)||1;if(n<=1){var e=l.querySelector(".cart-remove-item");e&&e.click();return}st(l,M,-1,pn,on,Y)});var pn=document.createElement("span");pn.className="qty-display",pn.textContent=an;var Y=document.createElement("button");Y.className="qty-btn-plus",Y.type="button",Y.setAttribute("aria-label","Aumentar quantidade"),Y.innerHTML=L,Y.addEventListener("click",function(a){a.preventDefault(),a.stopPropagation(),st(l,M,1,pn,on,Y)});var t=document.createElement("div");t.className="mm-qty-wrap",t.appendChild(on),t.appendChild(pn),t.appendChild(Y),c.insertBefore(t,c.firstChild),E&&(E.innerHTML=h,E.setAttribute("aria-label","Remover produto"))}}}})}function m(){document.addEventListener("click",function(i){var l=i.target.closest(".cart-remove-item");if(!(!l||!l.closest("#cart-preview-area"))){i.preventDefault(),i.stopPropagation(),i.stopImmediatePropagation();var c=l.getAttribute("data-id");if(c){var E=l.closest(".cart-item"),M=E&&E.querySelector(".prod-nome")?.textContent?.trim()||"este produto",F=M.length>50?M.substring(0,50)+"…":M,N=document.getElementById("mm-confirm-overlay");N&&N.remove();var R=document.createElement("div");R.id="mm-confirm-overlay",R.className="mm-confirm-overlay",R.innerHTML='<div class="mm-confirm-card"><p class="mm-confirm-title">Remover produto?</p><p class="mm-confirm-desc">'+F.replace(/&/g,"&amp;").replace(/</g,"&lt;")+'</p><div class="mm-confirm-actions"><button class="mm-confirm-btn mm-confirm-btn-cancel">Manter</button><button class="mm-confirm-btn mm-confirm-btn-delete">Remover</button></div></div>',document.body.appendChild(R),R.querySelector(".mm-confirm-btn-cancel").addEventListener("click",function(){R.remove()}),R.querySelector(".mm-confirm-btn-delete").addEventListener("click",function(){R.remove(),window.__mmDeleteItem&&E?window.__mmDeleteItem(E,c):typeof Zord<"u"&&Zord.checkout&&Zord.checkout.deleteItem(parseInt(c))}),R.addEventListener("click",function(W){W.target===R&&R.remove()})}}},!0)}function p(){document.addEventListener("click",function(i){var l=i.target.closest(".finalizar-compra");l&&l.closest("#cart-preview-area")&&(i.preventDefault(),i.stopPropagation(),window.location.href="/checkout/identify")},!0)}function u(i,l){var c="cep=&cupom-desconto=&nenhumCreditoSelecionado=true&id="+encodeURIComponent(String(l))+"&area=main-cart";return fetch("/checkout/cart?operation="+encodeURIComponent(i),{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"text/html,application/json,*/*","X-Requested-With":"XMLHttpRequest"},body:c}).then(function(E){if(!E.ok)throw new Error("HTTP "+E.status);return E.text()})}var d=1500,k=2e3,b="mm_cep",q="mm_cart_snapshot",C=1800*1e3;function A(){try{var i=localStorage.getItem(b)||"",l=i.replace(/\D/g,"");if(l.length===8)return l}catch{}return null}function x(i){return!i||i.length!==8?"":i.slice(0,5)+"-"+i.slice(5)}function T(i){if(!i||i.length!==8)return k;var l=parseInt(i.slice(0,2),10);return isNaN(l)?k:l>=1&&l<=39||l>=80&&l<=99?d:k}function V(){try{var i=localStorage.getItem(q);if(!i)return null;var l=JSON.parse(i);return!l||!l.ts||Date.now()-l.ts>C?null:l}catch{return null}}function I(i){var l=[];return i.forEach(function(c){var E=(c.querySelector(".prod-nome a, .prod-nome")||{}).textContent||"",M=c.querySelector(".qty-display"),F=M?parseInt(M.textContent):parseInt(c.getAttribute("data-item-quantity"))||1;l.push(E.trim().slice(0,30)+"x"+F)}),l.sort().join("|")}function z(i){if(!i||!Array.isArray(i.items))return"";var l=i.items.map(function(c){return(c.name||"").trim().slice(0,30)+"x"+(c.quantity||1)});return l.sort().join("|")}var Q='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg>',tn='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18M6 6l12 12"/></svg>',en=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];function sn(i){if(!i)return null;var l=String(i).match(/\d+/g);return!l||!l.length?null:Math.max.apply(null,l.map(Number))}function zn(i,l){for(var c=new Date(i.getTime()),E=0;E<l;){c.setDate(c.getDate()+1);var M=c.getDay();M!==0&&M!==6&&E++}return c}function xn(i){var l=new Date,c="dia "+i.getDate()+" de "+en[i.getMonth()];return i.getFullYear()!==l.getFullYear()&&(c+=" de "+i.getFullYear()),c}function Yn(i){var l=sn(i);if(!l||l<1)return null;var c=zn(new Date,l);return"Receba até "+xn(c)}var ln={},Ln=4e3,Jn={};function Mn(i,l){if(!i||i.length!==8)return Promise.resolve(null);if(ln[i])return ln[i];if(!l){var c=Jn[i]||0;if(Date.now()-c<Ln)return Promise.resolve(null)}var E="cep="+encodeURIComponent(i.slice(0,5)+"-"+i.slice(5))+"&cupom-desconto=&nenhumCreditoSelecionado=true&area=main-cart",M=fetch("/checkout/cart?operation=atualizaValoresCarrinho",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"text/html,application/json,*/*","X-Requested-With":"XMLHttpRequest"},body:E}).then(function(F){if(!F.ok)throw new Error("HTTP "+F.status);return F.text()}).then(function(F){return Jn[i]=Date.now(),Un(F)}).catch(function(){return null}).then(function(F){return delete ln[i],F});return ln[i]=M,M}function Un(i){try{var l=new DOMParser().parseFromString(i,"text/html"),c=l.querySelector("#resumo-compra .frete-calculado")||l.querySelector(".frete-calculado");if(!c)return null;var E="",M=c.querySelector(".frete-location .city");M&&(E=M.textContent.trim());var F=null,N="",R="",W=c.querySelector(".info-frete-selec");if(W){var K=W.querySelector(".dias-entrega"),an=W.querySelector(".info-title span, .info-title");K&&(N=(K.textContent||"").trim()),an&&(R=(an.textContent||"").trim())}var G=c.querySelector(".line.valor-frete .value, .value.valor-frete")||c.querySelector(".valor-compra-frete .value");if(G){var on=(G.textContent||"").trim();if(/gr[áa]tis/i.test(on))F=0;else{var pn=on.match(/[\d.,]+/);if(pn){var Y=parseFloat(pn[0].replace(/\./g,"").replace(",","."));isNaN(Y)||(F=Y)}}}if(F==null){var t=c.querySelector(".servico-frete");if(t){var a=parseFloat(t.getAttribute("data-valor-frete")||"0");if(isNaN(a)||(F=a),R||(R=t.getAttribute("data-servico-frete")||""),!N){var n=t.querySelector(".dias-entrega");n&&(N=(n.textContent||"").trim())}}}if(F==null)return null;var e=null,r=l.querySelector(".total-boleto .value, .totais-valor.total-boleto .value");if(r){var s=(r.textContent||"").trim(),f=s.match(/[\d.,]+/);if(f){var v=parseFloat(f[0].replace(/\./g,"").replace(",","."));isNaN(v)||(e=v)}}return{city:E,shipping:F,shippingDeadline:N,shippingName:R,totalPix:e}}catch{return null}}function In(i,l,c){if(!(!i||!c)){_n(i);try{var E=V()||{};E.ts=Date.now(),E.cepValue=l.slice(0,5)+"-"+l.slice(5),E.shipping=c.shipping,E.shippingDeadline=c.shippingDeadline,E.shippingName=c.shippingName,E.shippingCity=c.city,c.totalPix!=null&&(E.subtotalPix=c.totalPix);var M=i.querySelectorAll(".cart-item:not(.mm-removing)");E.items=Array.prototype.map.call(M,function(R){var W=R.querySelector(".prod-nome a, .prod-nome"),K=(W&&W.textContent||"").trim(),an=R.querySelector(".qty-display"),G=an?parseInt(an.textContent):parseInt(R.getAttribute("data-item-quantity"))||1;return{name:K,quantity:G}}),localStorage.setItem(q,JSON.stringify(E))}catch{}var F=i.querySelectorAll(".cart-item:not(.mm-removing)"),N=0;F.forEach(function(R){var W=R.querySelector(".valor");if(W){var K=nt(W.textContent);isNaN(K)||(N+=K)}}),tt(i)}}function On(i){var l=A();if(l){var c=V(),E=z(c),M=I(i.querySelectorAll(".cart-item:not(.mm-removing)")),F=c&&c.cepValue&&c.cepValue.replace(/\D/g,"")===l,N=c&&c.shipping!=null&&!isNaN(c.shipping);c&&E===M&&F&&N||Mn(l).then(function(R){R&&In(i,l,R)})}}function kn(i){return String(i||"").replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})}function yn(i,l,c,E){if(i){var M=i.querySelector(".box-total-btn");if(M){var F=A(),N=V(),R=I(i.querySelectorAll(".cart-item:not(.mm-removing)")),W=z(N),K=N&&W===R,an=T(F),G=l>=an,on=Math.max(0,an-l),pn=Math.max(0,Math.min(100,l/an*100)),Y=M.querySelector(".mm-cart-ship");if(!Y){Y=document.createElement("div"),Y.className="mm-cart-ship",Y.setAttribute("role","group"),Y.setAttribute("aria-label","Informações de frete");var t=M.querySelector(".total");t?M.insertBefore(Y,t):M.insertBefore(Y,M.firstChild)}if(Y.classList.toggle("is-free",G),ut(Y),Y.dataset.mmEditing!=="1"){var a=N&&N.cepValue&&N.cepValue.replace(/\D/g,"")===F,n=F&&K&&a&&N.shippingCity,e=n?Yn(N.shippingDeadline):null,r="";if(r+='<div class="mm-cart-ship-location">',F){var s=x(F);if(n&&(s+=" · "+kn(N.shippingCity)),r+='<span class="mm-cart-ship-label">Envio para</span><div class="mm-cart-ship-location-value"><span>'+s+'</span><button class="mm-cart-ship-edit" type="button" data-mm-ship="edit">Trocar</button></div>',e){var f=kn(e);E&&c>0?f+=" · <strong>"+kn($n(c))+"</strong>":E&&c===0&&(f+=" · <strong>Grátis</strong>"),r+='<span class="mm-cart-ship-deadline">'+f+"</span>"}}else r+='<span class="mm-cart-ship-label">Calcule o frete</span><div class="mm-cart-ship-location-value"><span style="color:#9CA3AF;font-weight:500;">Informe seu CEP</span><button class="mm-cart-ship-edit" type="button" data-mm-ship="edit">Calcular</button></div>';r+="</div>";var v=G?"Frete grátis desbloqueado":"Faltam "+$n(on)+" para frete grátis",y=parseFloat(i.dataset.mmShipPct||"0")||0;r+='<div class="mm-cart-ship-progress">',r+='<div class="mm-cart-ship-bar" role="progressbar" aria-valuenow="'+Math.round(l)+'" aria-valuemin="0" aria-valuemax="'+Math.round(an)+'" aria-valuetext="'+kn(v)+'" aria-label="Progresso para frete grátis"><div class="mm-cart-ship-bar-fill" style="width:'+y.toFixed(1)+'%"></div></div>',r+='<p class="mm-cart-ship-nudge'+(G?" is-free":"")+'">',G?r+=Q+"Frete grátis garantido":r+="Faltam <strong>"+kn($n(on))+"</strong> para frete grátis",r+="</p>",r+="</div>",Y.innerHTML=r;var B=Y.querySelector(".mm-cart-ship-bar-fill");B&&requestAnimationFrame(function(){B.style.width=pn.toFixed(1)+"%"});var _=i.dataset.mmShipWasFree==="1";G&&!_&&y>0&&(Y.classList.remove("mm-just-unlocked"),Y.offsetWidth,Y.classList.add("mm-just-unlocked"),setTimeout(function(){Y.classList.remove("mm-just-unlocked")},1400)),i.dataset.mmShipWasFree=G?"1":"",i.dataset.mmShipPct=pn.toFixed(1)}}}}var at='<svg class="mm-cart-ship-spinner" width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><style>.mm-sp{animation:mm-spin 1.2s linear infinite;transform-origin:center}.mm-sp circle{stroke:#4B664A;stroke-width:3;fill:none;stroke-linecap:round;stroke-dasharray:44;stroke-dashoffset:16;animation:mm-sp-dash 1.2s ease-in-out infinite}@keyframes mm-spin{to{transform:rotate(360deg)}}@keyframes mm-sp-dash{0%{stroke-dashoffset:44}50%{stroke-dashoffset:8}100%{stroke-dashoffset:44}}</style><g class="mm-sp"><circle cx="12" cy="12" r="9.5"/></g></svg>';function Kn(i){if(i){var l=i.querySelector(".mm-cart-ship-deadline");if(l)l.innerHTML="Recalculando frete "+at;else{var c=i.querySelector(".mm-cart-ship-location");if(c){var E=document.createElement("span");E.className="mm-cart-ship-deadline",E.innerHTML="Recalculando frete "+at,c.appendChild(E)}}var M=i.querySelector(".box-total-btn");M&&M.classList.add("mm-ship-loading")}}function _n(i){if(i){var l=i.querySelector(".box-total-btn");l&&l.classList.remove("mm-ship-loading")}}function ut(i){!i||i.dataset.mmShipBound||(i.dataset.mmShipBound="1",i.addEventListener("click",function(l){var c=l.target.closest('[data-mm-ship="edit"]');if(c){l.preventDefault(),l.stopPropagation(),vt(i);return}var E=l.target.closest('[data-mm-ship="cancel"]');if(E){l.preventDefault(),l.stopPropagation(),rt(i);return}l.target.closest(".mm-cart-ship-cep-form")&&l.stopPropagation()},!0))}function vt(i){var l=i.querySelector(".mm-cart-ship-location");if(l){i.dataset.mmEditing="1";var c=A()||"";l.innerHTML='<span class="mm-cart-ship-label">Digite seu CEP</span><form class="mm-cart-ship-cep-form" data-mm-ship-form="1" novalidate><input class="mm-cart-ship-cep-input" type="text" inputmode="numeric" autocomplete="postal-code" placeholder="00000-000" maxlength="9" value="'+kn(x(c))+'" aria-label="CEP" /><button class="mm-cart-ship-cep-save" type="submit">OK</button><button class="mm-cart-ship-cep-cancel" type="button" data-mm-ship="cancel" aria-label="Cancelar">'+tn+"</button></form>";var E=l.querySelector(".mm-cart-ship-cep-input"),M=l.querySelector("form");E&&(setTimeout(function(){try{E.focus(),E.select()}catch{}},10),E.addEventListener("input",function(){E.classList.remove("is-invalid");var F=E.value.replace(/\D/g,"").slice(0,8);E.value=F.length>5?F.slice(0,5)+"-"+F.slice(5):F}),E.addEventListener("keydown",function(F){F.key==="Escape"&&(F.preventDefault(),rt(i))})),M&&M.addEventListener("submit",function(F){F.preventDefault(),F.stopPropagation(),it(i)})}}function rt(i){i.dataset.mmEditing="";var l=i.closest(".carrinho-rapido-ctn");if(l){var c=l.querySelectorAll(".cart-item:not(.mm-removing)"),E=0;c.forEach(function(M){var F=M.querySelector(".valor");if(F){var N=nt(F.textContent);isNaN(N)||(E+=N)}}),yn(l,E)}}function it(i){var l=i.querySelector(".mm-cart-ship-cep-input");if(l){var c=l.value.replace(/\D/g,"");if(c.length!==8){l.classList.add("is-invalid"),l.focus();return}try{localStorage.setItem(b,c)}catch{}var E=i.querySelector(".mm-cart-ship-cep-save");E&&(E.disabled=!0,E.textContent="...");var M=i.closest(".carrinho-rapido-ctn");try{var F=V();F&&(F.cepValue="",localStorage.setItem(q,JSON.stringify(F)))}catch{}rt(i),Mn(c).then(function(N){N&&M&&In(M,c,N)})}}function nt(i){if(!i)return NaN;var l=String(i).replace(/\s/g,"").match(/([\d.,]+)/);return l?parseFloat(l[1].replace(/\./g,"").replace(",",".")):NaN}function $n(i){return isNaN(i)?"":"R$ "+i.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function Wn(i){if(isNaN(i))return"";var l=i.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),c=l.split(",");return"R$&nbsp;"+c[0]+'<span class="mm-cents">,'+(c[1]||"00")+"</span>"}function mt(i){var l=0;return Array.prototype.forEach.call(i,function(c){var E=parseFloat(c.getAttribute("data-item-price"))||0,M=parseInt(c.getAttribute("data-item-quantity"));if(!M||isNaN(M)){var F=c.querySelector(".qty-display");F?M=parseInt(F.textContent)||1:M=1}l+=E*M}),l}function hn(i){var l=i.querySelectorAll(".cart-item:not(.mm-removing)");l.forEach(function(c){var E=parseFloat(c.getAttribute("data-item-price"))||0,M=parseInt(c.getAttribute("data-item-quantity"));if(!M||isNaN(M)){var F=c.querySelector(".qty-display");F?M=parseInt(F.textContent)||1:M=1}var N=c.querySelector(".valor");N&&E>0&&(N.innerHTML=Wn(E*M))})}function Vn(i){if(!(!i||i.dataset.mmTotalRatio)){var l=i.querySelectorAll(".cart-item");if(l.length){var c=mt(l),E=i.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||i.querySelector(".box-total-btn .linha-total .valor-final strong");if(E&&c>.01){var M=nt(E.textContent);isNaN(M)||(i.dataset.mmTotalRatio=String(M/c))}}}}function ht(i,l){var c=i.querySelector(".box-total-btn .linha-total");if(c){var E=c.parentElement.querySelector(".mm-cart-savings");if(E&&E.remove(),!(!l||l<.01)){var M=document.createElement("span");M.className="mm-cart-savings",M.textContent="Você economiza "+$n(l)+" com PIX",c.nextSibling?c.parentElement.insertBefore(M,c.nextSibling):c.parentElement.appendChild(M)}}}function tt(i){if(i){Vn(i);var l=i.querySelectorAll(".cart-item:not(.mm-removing)"),c=mt(l),E=i.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||i.querySelector(".box-total-btn .linha-total .valor-final strong"),M=parseFloat(i.dataset.mmTotalRatio||"0.95")||.95,F=c*M,N=c-F,R=A(),W=V(),K=z(W),an=I(l),G=W&&W.cepValue&&W.cepValue.replace(/\D/g,"")===R,on=!!(R&&W&&G&&W.shipping!=null&&!isNaN(W.shipping)),pn=i.dataset.mmShipPendingFetch==="1";!on&&pn&&R&&W&&W.shipping!=null&&(on=!0);var Y=on?parseFloat(W.shipping):0,t=F+Y,a=c+Y;if(E){var n=nt(E.textContent);if(!isNaN(n)&&Math.abs(t-n)>.005){var e=i.querySelector(".box-total-btn .linha-total .valor-final");e&&(e.classList.remove("mm-pop"),e.offsetWidth,e.classList.add("mm-pop"),setTimeout(function(){e.classList.remove("mm-pop")},450)),Hn(E,n,t)}else E.innerHTML=Wn(t)}var r=i.querySelector(".box-total-btn .valor-final.card");if(r){var s=a/12;r.innerHTML="<span>ou em até <strong>12x</strong> de <strong>"+$n(s)+"</strong> no cartão</span>"}var f=i.querySelector(".box-total-btn .linha-total .valor-final .tipo-pagto");f&&(f.textContent="No PIX"),ht(i,N),yn(i,c,Y,on);try{var v=0;l.forEach(function(B){var _=B.querySelector(".qty-display");_&&(v+=parseInt(_.textContent)||0)});var y=document.getElementById("mm-h-cart-count");y&&(v>0?(y.textContent=v>99?"99+":String(v),y.hidden=!1):y.hidden=!0)}catch{}}}function Hn(i,l,c){if(!i||isNaN(l)||isNaN(c))return;var E=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(E){i.innerHTML=Wn(c);return}var M=420,F=performance.now();function N(R){return 1-Math.pow(1-R,3)}(function R(W){var K=Math.min(1,(W-F)/M);i.innerHTML=Wn(l+(c-l)*N(K)),K<1&&requestAnimationFrame(R)})(F)}function st(i,l,c,E,M,F){if(!(!i||!l)){var N=parseInt(E.textContent)||1,R=N+c;if(!(R<1)){var G=i.closest(".carrinho-rapido-ctn");Vn(G),M.disabled=!0,F.disabled=!0;var W=parseFloat(i.getAttribute("data-item-price"))||0;E.textContent=R,i.setAttribute("data-item-quantity",R);var K=i.querySelector(".valor");if(K){var an=W*R;K.textContent=$n(an),K.classList.remove("mm-pop"),K.offsetWidth,K.classList.add("mm-pop"),setTimeout(function(){K.classList.remove("mm-pop")},450)}var G=i.closest(".carrinho-rapido-ctn"),on=c>0?"adicionaItem":"removeItem";A()&&G&&(G.dataset.mmShipPendingFetch="1"),tt(G),A()&&Kn(G),u(on,l).catch(function(){E.textContent=N,i.setAttribute("data-item-quantity",N),K&&(K.innerHTML=Wn(W*N)),G&&(G.dataset.mmShipPendingFetch=""),tt(G)}).then(function(){M.disabled=!1,F.disabled=!1;var pn=A();pn&&G?(Kn(G),Mn(pn,!0).then(function(Y){G.dataset.mmShipPendingFetch="",Y?In(G,pn,Y):_n(G)})):G&&(G.dataset.mmShipPendingFetch="")})}}}function ft(i,l){if(!(!i||!l)){var c=i.closest(".carrinho-rapido-ctn");Vn(c);var E=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,M=E?0:360;E||i.classList.add("mm-removing"),setTimeout(function(){i.parentNode&&i.parentNode.removeChild(i);var F=c?c.querySelectorAll(".cart-item:not(.mm-removing)"):[],N=F.length===0;if(N){if(c){c.dataset.mmShipPendingFetch="";var R=c.querySelector(".mm-cart-ship");R&&R.remove();var W=c.querySelector(".box-total-btn, .area-finalizar-compra");W&&(W.style.display="none")}}else tt(c),A()&&Kn(c);var K=document.getElementById("mm-h-cart-count"),an=document.getElementById("mm-h-cart"),G=F.length;K&&(K.textContent=G>99?"99+":String(G),K.hidden=G===0),an&&an.setAttribute("aria-label","Carrinho, "+G+" "+(G===1?"item":"itens"))},M),u("deleteItem",l).catch(function(){}).then(function(){var F=c?c.querySelectorAll(".cart-item:not(.mm-removing)"):[],N=document.getElementById("mm-h-cart-count");if(N&&(N.textContent=F.length>99?"99+":String(F.length),N.hidden=F.length===0),F.length===0){c&&(c.dataset.mmShipPendingFetch="");return}var R=A();R&&c?(c.dataset.mmShipPendingFetch="1",Kn(c),Mn(R,!0).then(function(W){c.dataset.mmShipPendingFetch="",W?In(c,R,W):_n(c)})):c&&(c.dataset.mmShipPendingFetch="")})}}window.__mmDeleteItem=ft;var bt=null,lt=new Set,fn=null;function pt(i){if(!i)return NaN;var l=String(i).replace(/\s/g,"").match(/([\d.,]+)/);if(!l)return NaN;var c=l[1].replace(/\./g,"").replace(",","."),E=parseFloat(c);return isNaN(E)?NaN:E}function ct(i){return isNaN(i)?"":"R$ "+i.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function Et(i,l,c){if(!i||isNaN(l)||isNaN(c))return;fn&&cancelAnimationFrame(fn);var E=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(E){i.textContent=ct(c);return}var M=420,F=performance.now();function N(W){return 1-Math.pow(1-W,3)}function R(W){var K=W-F,an=Math.min(1,K/M),G=l+(c-l)*N(an);i.textContent=ct(G),an<1?fn=requestAnimationFrame(R):fn=null}fn=requestAnimationFrame(R)}function xt(i){return i?i.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||i.querySelector(".box-total-btn .linha-total .valor-final strong")||i.querySelector(".valor-pix strong")||i.querySelector(".valor-pix"):null}function Cn(i){return i?i.querySelector(".box-total-btn .linha-total .valor-final"):null}function Ct(i){var l=Cn(i);l&&(l.classList.remove("mm-pop"),l.offsetWidth,l.classList.add("mm-pop"),setTimeout(function(){l.classList.remove("mm-pop")},450))}function dt(){var i=document.querySelector(".carrinho-rapido-ctn");if(i){var l=i.querySelectorAll(".cart-item:not(.mm-removing)");if(l.length>0){var c=i.querySelector(".box-total-btn");c&&c.dataset.mmTotalEnhanced!=="1"&&(Vn(i),hn(i),tt(i),c.dataset.mmTotalEnhanced="1",i.dataset.mmShipRendered="1",On(i))}var E=i.querySelectorAll(".cart-item"),M=new Set;E.forEach(function(F){var N=F.id||F.getAttribute("data-item-id")||"";N&&(M.add(N),!lt.has(N)&&lt.size>0&&(F.classList.add("mm-added"),setTimeout(function(){F.classList.remove("mm-added")},500)))}),lt=M}}function Pn(){var i=document.querySelector(".carrinho-rapido-ctn");if(!(!i||i.dataset.mmAnimObserved)){i.dataset.mmAnimObserved="1",dt();var l=new MutationObserver(function(){clearTimeout(Pn._t),Pn._t=setTimeout(dt,60)});l.observe(i,{childList:!0,subtree:!0,characterData:!0})}}function Xn(){g(),m(),p();var i=document.getElementById("cart-preview-area");if(i){var l=new MutationObserver(function(){setTimeout(o,100),setTimeout(Pn,150)});l.observe(i,{childList:!0,subtree:!0})}setInterval(o,800),setInterval(Pn,800),o(),Pn()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Xn):Xn()})(),(function g(){"use strict";var P="mm_cep",O="mm_cart_snapshot",L=18e5,h="mm_onepage_draft",o=1440*60*1e3,m=2e3,p="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",u="https://api.whatsapp.com/send?phone=5511915299488&text="+encodeURIComponent("Olá! Estou no checkout e gostaria de tirar uma dúvida sobre meu pedido."),d=location.pathname,k=d.indexOf("/checkout/cart")!==-1,b=d.indexOf("/checkout/identify")!==-1,q=d.indexOf("/checkout/onepage")!==-1,C=d.indexOf("/checkout/payment")!==-1,A=d.indexOf("/checkout/done")!==-1;if(A){try{localStorage.removeItem("mm_onepage_draft")}catch{}return}if(!k&&!b&&!q&&!C)return;g._retries=(g._retries||0)+1;var x=document.querySelector("#checkout-main-area");if(!x){g._retries<40&&setTimeout(g,400);return}function T(t){return isNaN(t)||t<0?"R$ 0,00":"R$ "+t.toFixed(2).replace(".",",").replace(/(\d)(?=(\d{3})+,)/g,"$1.")}function V(t){if(!t)return 0;var a=String(t).match(/(-?[\d.]+,\d{2})/);return a&&parseFloat(a[1].replace(/\./g,"").replace(",","."))||0}function I(t){return String(t||"").replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})}var z={truck:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-5l-3-4zM6 18.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.5-7H17V9.5h2.04l1.46 2-.04 0z"/></svg>',check:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',checkCircle:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',bolt:'<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',shield:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>',lock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>',card:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',rotate:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',minus:'<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',plus:'<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M3 7h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',trash:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',close:'<svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5l-7 7M3.5 3.5l7 7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',arrow:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',tag:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',whats:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',box:'<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>'},Q={get:function(t){try{return localStorage.getItem(t)}catch{return null}},set:function(t,a){try{localStorage.setItem(t,a)}catch{}},remove:function(t){try{localStorage.removeItem(t)}catch{}}};function tn(t){try{var a={ts:Date.now(),items:t.items.map(function(n){return{name:n.name,variant:n.variant,imgSrc:n.imgSrc,quantity:n.quantity,lineTotal:n.lineTotal,lineTotalPix:n.lineTotalPix,isPix:n.isPix,deposito:n.deposito}}),subtotalPix:t.subtotalPix,subtotalFull:t.subtotalFull,discount:t.discount,couponCode:t.couponCode,shipping:t.shipping,shippingDeadline:t.shippingDeadline,shippingName:t.shippingName,shippingCity:t.shippingCity,shippingOptions:t.shippingOptions,cepValue:t.cepValue};Q.set(O,JSON.stringify(a))}catch{}}function en(){try{var t=Q.get(O);if(!t)return null;var a=JSON.parse(t);return!a||!a.ts||Date.now()-a.ts>L?null:a}catch{return null}}function sn(){try{for(var t=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep","mm-op-rua","mm-op-num","mm-op-comp","mm-op-bairro","mm-op-cidade","mm-op-uf"],a={ts:Date.now()},n=0,e=0;e<t.length;e++){var r=document.getElementById(t[e]);r&&r.value&&(a[t[e]]=r.value,n++)}if(n===0){window._mmDraftDebug&&console.log("[mm-draft] skip save (0 fields)");return}Q.set(h,JSON.stringify(a)),window._mmDraftDebug&&console.log("[mm-draft] saved",n,"fields",a)}catch(s){window._mmDraftDebug&&console.warn("[mm-draft] save failed",s)}}function zn(){try{var t=Q.get(h);if(!t)return null;var a=JSON.parse(t);return!a||!a.ts?null:Date.now()-a.ts>o?(Q.remove(h),null):a}catch{return null}}function xn(){try{Q.remove(h)}catch{}}function Yn(){var t=zn();if(!t)return window._mmDraftDebug&&console.log("[mm-draft] no draft to restore"),null;for(var a=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep","mm-op-rua","mm-op-num","mm-op-comp","mm-op-bairro","mm-op-cidade","mm-op-uf"],n=0,e=0;e<a.length;e++){var r=document.getElementById(a[e]);if(r&&t[a[e]]){try{var s=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;s.call(r,t[a[e]])}catch{r.value=t[a[e]]}r.dispatchEvent(new Event("input",{bubbles:!0})),/^mm-op-(rua|bairro|cidade|uf)$/.test(a[e])&&(r.dataset.mmCepFill="1"),n++}}return window._mmDraftDebug&&console.log("[mm-draft] restored",n,"fields from draft",t),t}function ln(){for(var t={items:[],subtotalPix:0,subtotalFull:0,discount:0,shipping:null,shippingRaw:"",shippingDeadline:"",shippingName:"",shippingCity:"",shippingOptions:[],couponCode:"",cepValue:"",canFinalize:!1,hasFinalizar:!1},a=x.querySelectorAll(".cart-item"),n=0;n<a.length;n++){var e=a[n],r=e.querySelector('.qtd-item[id^="item_carrinho_"]'),s=r&&r.id.match(/item_carrinho_(\d+)/),f=s?parseInt(s[1],10):null,v=e.querySelector("figure img")||e.querySelector("#product-img")||e.querySelector("img"),y=e.querySelector(".nome-produto .link")||e.querySelector("figure a"),B=e.querySelector(".column-valor-produto .valor"),_=B?B.textContent.trim():"",D=!!e.querySelector(".column-valor-produto .sub");t.items.push({dataId:f,sku:e.getAttribute("data-item-id")||"",name:e.getAttribute("data-item-name")||e.getAttribute("data-name")||"",variant:e.getAttribute("data-item-variant")||"",brand:e.getAttribute("data-item-brand")||"",category:e.getAttribute("data-item-category")||"",priceUnit:parseFloat(e.getAttribute("data-item-price")||"0"),lineTotal:parseFloat(e.getAttribute("data-valor")||"0"),quantity:parseInt(e.getAttribute("data-item-quantity")||"1",10),deposito:e.getAttribute("data-item-deposito")==="1",imgSrc:v?v.getAttribute("src")||v.currentSrc:"",href:y?y.getAttribute("href"):"",lineTotalPix:V(_),isPix:D}),t.subtotalFull+=parseFloat(e.getAttribute("data-valor")||"0")}var nn=x.querySelector("#resumo-compra .resumo-valores .value");nn&&(t.subtotalPix=V(nn.textContent)),t.subtotalPix<=0&&(t.subtotalPix=t.items.reduce(function(gt,zt){return gt+(zt.lineTotalPix||0)},0));var X=x.querySelector("#resumo-compra .discount-value");X&&(t.discount=V(X.textContent));var Z=x.querySelector("#resumo-compra .txt-cupom, #resumo-compra .alert.alert-type-1");if(Z){var J=Z.textContent.match(/([A-Z0-9]{3,})/);J&&(t.couponCode=J[1])}var cn=x.querySelector("#resumo-compra .frete-calculado, .frete-calculado");if(cn&&cn.textContent.trim()){t.shippingRaw=cn.textContent.trim();var rn=cn.querySelector(".frete-location .city");rn&&(t.shippingCity=rn.textContent.trim());for(var vn=cn.querySelectorAll(".servico-frete"),Sn=0;Sn<vn.length;Sn++){var Tn=vn[Sn],Gn=Tn.querySelector('input[type="radio"]'),w=Tn.querySelector(".dias-entrega"),S=parseFloat(Tn.getAttribute("data-valor-frete")||"0"),j=Tn.getAttribute("data-servico-frete")||"",U=w?w.textContent.trim().replace(/\s+/g," ").replace(/\s*-\s*$/,"").trim():"",H=U.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i),dn=H?H[1].replace(/\s+/g," "):U;t.shippingOptions.push({id:Gn?Gn.value:"",name:j,deadline:dn,value:S,isFree:S===0,isSelected:Gn?Gn.checked:!1})}var un=t.shippingOptions.filter(function(gt){return gt.isSelected})[0];if(!un&&t.shippingOptions.length>0&&(un=t.shippingOptions[0]),un)t.shipping=un.value,t.shippingName=un.name,t.shippingDeadline=un.deadline;else{var bn=cn.querySelector(".info-frete-selec"),wn=cn.querySelector(".dias-entrega, .info-frete-selec .dias-entrega"),En=cn.querySelector(".valor-frete .value, .value.valor-frete"),Bn=cn.querySelector(".info-frete-selec .info-title span, .info-title span");if(En){var qn=En.textContent.trim();if(/gr[aá]tis/i.test(qn))t.shipping=0;else{var Dn=V(qn);Dn>0&&(t.shipping=Dn)}}if(wn){var Rn=wn.textContent.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*\([^)]+\))?(?:\s*[úu]teis)?)/i);Rn&&(t.shippingDeadline=Rn[1].replace(/\s+/g," ").replace(/\(s\)/,"").trim())}if(Bn&&(t.shippingName=Bn.textContent.trim()),t.shipping===null)if(/gr[aá]tis/i.test(t.shippingRaw))t.shipping=0;else{var et=V(t.shippingRaw);et>0&&(t.shipping=et)}if(!t.shippingDeadline){var gn=t.shippingRaw.match(/(\d+(?:\s*[aà]\s*\d+)?)\s*dias?/i);gn&&(t.shippingDeadline=gn[1]+" dias úteis")}}}var ot=x.querySelector("#cep, .input-cep");return ot&&(t.cepValue=ot.value||""),t.hasFinalizar=!!x.querySelector("#finalizar-compra"),t.canFinalize=t.items.length>0,t}function Ln(t){t=t||"cart";var a='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>';function n(e,r){var s=e===t,f="mm-checkout-step"+(s?" is-active":""),v=s?' aria-current="step"':"";return'<li class="'+f+'"'+v+'><span class="mm-checkout-step-label">'+r+"</span></li>"}return'<header class="mm-checkout-header"><a class="mm-checkout-header-logo" href="/" aria-label="Madeira Mania - voltar à home"><img src="'+p+'" alt="Madeira Mania" width="180" height="44"></a><nav class="mm-checkout-steps" aria-label="Etapas do checkout"><ol>'+n("cart","Carrinho")+'<li class="mm-checkout-step-sep" aria-hidden="true">›</li>'+n("delivery","Entrega")+'<li class="mm-checkout-step-sep" aria-hidden="true">›</li>'+n("payment","Pagamento")+'</ol></nav><div class="mm-checkout-secure">'+a+'<span class="mm-checkout-secure-text"><strong>Compra 100% segura</strong><small>Site protegido por SSL</small></span></div></header>'}function Jn(t){var a=t.imgSrc?'<img src="'+I(t.imgSrc)+'" alt="'+I(t.name)+'" loading="lazy">':"",n=t.href?'<a class="mm-item-name" href="'+I(t.href)+'">'+I(t.name)+"</a>":'<span class="mm-item-name">'+I(t.name)+"</span>",e=t.variant?'<p class="mm-item-variant">'+I(t.variant)+"</p>":"",r=t.deposito?'<span class="mm-item-badge">'+z.bolt+"<span>Pronta entrega · Envio em 24h</span></span>":"",s=t.quantity<=1?' disabled aria-disabled="true"':"",f;if(t.lineTotalPix>0&&t.isPix){var v='<span class="mm-item-price-sub">no PIX</span>',y=t.quantity>1?T(t.lineTotalPix/t.quantity)+" cada":"";f='<div class="mm-item-price"><span class="mm-item-price-value">'+T(t.lineTotalPix)+"</span>"+v+(y?'<span class="mm-item-price-unit">'+y+"</span>":"")+"</div>"}else{var B=t.quantity>1?T(t.priceUnit)+" cada":"";f='<div class="mm-item-price"><span class="mm-item-price-value">'+T(t.lineTotal)+"</span>"+(B?'<span class="mm-item-price-unit">'+B+"</span>":"")+"</div>"}return'<div class="mm-item" data-mm-id="'+t.dataId+'"><div class="mm-item-thumb">'+a+'</div><div class="mm-item-body">'+n+e+r+"</div>"+f+'<div class="mm-item-controls"><div class="mm-qty" role="group" aria-label="Quantidade"><button type="button" class="mm-qty-btn" data-mm-act="dec"'+s+' aria-label="Diminuir quantidade">'+z.minus+'</button><span class="mm-qty-value">'+t.quantity+'</span><button type="button" class="mm-qty-btn" data-mm-act="inc" aria-label="Aumentar quantidade">'+z.plus+'</button></div><button type="button" class="mm-item-remove" data-mm-act="remove" aria-label="Remover item" title="Remover">'+z.trash+"</button></div></div>"}function Mn(t){return t.items.length?t.items.map(Jn).join(""):'<div class="mm-empty"><div class="mm-empty-icon">'+z.box+'</div><h3 class="mm-empty-title">Seu carrinho está vazio</h3><p class="mm-empty-desc">Explore nossos móveis e encontre a peça certa para sua casa.</p><a class="mm-empty-cta" href="/">Explorar produtos '+z.arrow+'</a><p class="mm-empty-perks">Frete grátis acima de R$ 2.000 · 12x sem juros · 7% off no PIX</p></div>'}function Un(t){for(var a="",n=0;n<t;n++)a+='<div class="mm-skel-item"><div class="mm-skel mm-skel-thumb"></div><div class="mm-skel-lines"><div class="mm-skel mm-skel-line w-3-4"></div><div class="mm-skel mm-skel-line w-1-2"></div><div class="mm-skel mm-skel-line w-1-3"></div></div><div class="mm-skel-lines"><div class="mm-skel mm-skel-line w-1-2"></div></div></div>';return a}function In(t){var a=t.subtotalFull>0?t.subtotalFull:t.subtotalPix,n='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+T(a)+"</span></div>";if(t.shipping!==null){var e;t.shipping===0?e='<span class="mm-row-value is-free">'+z.check+" Grátis</span>":e='<span class="mm-row-value">'+T(t.shipping)+"</span>";var r='<span class="mm-row-label">Frete';t.shippingName&&(r+=' <span class="mm-row-sub">· '+I(t.shippingName)+"</span>"),t.shippingDeadline&&(r+=' <span class="mm-row-sub">· '+I(t.shippingDeadline)+"</span>"),r+="</span>",n+='<div class="mm-row">'+r+e+"</div>"}t.discount>0&&(n+='<div class="mm-row"><span class="mm-row-label">Desconto</span><span class="mm-row-value is-discount">− '+T(t.discount)+"</span></div>");var s="";if(t.shipping!==null){var f=Math.max(0,a+t.shipping-t.discount),v=Math.max(0,t.subtotalPix+t.shipping-t.discount),y=f-v,B=f/12;s='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value">'+T(f)+'</div><div class="mm-total-pix"><span>'+T(v)+" à vista no PIX</span>"+(y>0?'<span class="mm-total-pix-save">economia de '+T(y)+"</span>":"")+'</div><div class="mm-total-parcela">ou 12x de '+T(B)+" sem juros no cartão</div></div>"}else s='<div class="mm-total"><div class="mm-total-label">Subtotal</div><div class="mm-total-value">'+T(t.subtotalPix)+'</div><div class="mm-total-pix"><span>à vista no PIX</span></div><div class="mm-total-pending">Informe seu CEP para ver o frete e o total final.</div></div>';var _;return t.couponCode?_='<div class="mm-coupon-applied"><span class="mm-coupon-applied-left">'+z.tag+"<span>"+I(t.couponCode)+'</span></span><button type="button" data-mm-act="coupon-remove" aria-label="Remover cupom">'+z.close+"</button></div>":_='<div class="mm-coupon"><button type="button" class="mm-coupon-toggle" data-mm-act="coupon-toggle">'+z.tag+'<span>Tenho um cupom</span></button><form class="mm-coupon-form" data-mm-act="coupon-submit"><input type="text" class="mm-input" name="mm-coupon-code" placeholder="CUPOM" autocomplete="off" autocapitalize="characters" spellcheck="false" /><button type="submit" class="mm-btn-secondary">Aplicar</button></form></div>','<div class="mm-sum-stack"><div class="mm-rows">'+n+"</div>"+_+s+"</div>"}function On(){var t=document.getElementById("mm-layout");if(t)return t.parentElement!==x&&x.insertBefore(t,x.firstChild),t;var a=document.createElement("div");return a.id="mm-layout",a.innerHTML=Ln("cart")+'<div class="mm-grid"><section class="mm-items"><h2 class="mm-h">Carrinho</h2><div class="mm-items-card"><div id="mm-item-list">'+Un(2)+'</div></div></section><aside class="mm-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><div class="mm-cep"><div class="mm-cep-label"><span class="mm-cep-label-text">Calcular frete</span><a class="mm-cep-label-link" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a></div><div class="mm-cep-row"><input type="text" class="mm-input" id="mm-cep-input" name="mm_cep_calc" inputmode="numeric" maxlength="9" placeholder="00000-000" autocomplete="off" data-lpignore="true" data-1p-ignore="true" data-bwignore="true" data-form-type="other" aria-label="CEP" /><button type="button" class="mm-btn-secondary" data-mm-act="calc-cep">Calcular</button></div></div><div id="mm-sum-dynamic"></div><button type="button" class="mm-cta" data-mm-act="finalizar">Finalizar compra'+z.arrow+'</button><div class="mm-trust"><span class="mm-trust-item">'+z.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+z.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+z.card+'<span>12x sem juros</span></span></div><a class="mm-help" href="'+u+'" target="_blank" rel="noopener" data-mm-track="help-whats">'+z.whats+"<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span></a></div></aside></div>",x.insertBefore(a,x.firstChild),x.classList.add("mm-shadow-mode"),document.body.classList.add("mm-checkout-rebuild"),document.documentElement.classList.remove("mm-cart-loading"),a}function kn(){var t=ln(),a=document.getElementById("mm-item-list");a&&(a.innerHTML=Mn(t));var n=document.getElementById("mm-sum-dynamic");n&&(n.innerHTML=In(t));var e=document.querySelector(".mm-cta");e&&(e.disabled=!t.canFinalize,e.style.opacity=t.canFinalize?"1":"0.5",e.style.pointerEvents=t.canFinalize?"auto":"none");var r=document.getElementById("mm-cep-input");if(r&&!r.matches(":focus")){var s=Q.get(P),f=t.cepValue||s||"";f&&(r.value=yn(f))}return t.items&&t.items.length>0&&tn(t),t}function yn(t){var a=String(t||"").replace(/\D/g,"").slice(0,8);return a.length<=5?a:a.slice(0,5)+"-"+a.slice(5)}function at(t){var a=String(t||"").replace(/\D/g,"");a.length===8&&Q.set(P,a)}function Kn(t){t=t||0;var a=Q.get(P);if(!(!a||a.length!==8)){var n=x.querySelector("#cep, .input-cep");if(!n){t<12&&setTimeout(function(){Kn(t+1)},350);return}var e=x.querySelector("#resumo-compra .frete-calculado");if(e&&e.textContent.trim()){var r=document.getElementById("mm-cep-input");r&&!r.value&&(r.value=yn(a));return}var s=document.getElementById("mm-cep-input");s&&!s.value&&(s.value=yn(a)),n.value=yn(a),_n(n),setTimeout(function(){ut()},200)}}function _n(t){try{var a=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;a.call(t,t.value)}catch{}t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0}))}function ut(){try{if(window.Zord&&window.Zord.Cart&&typeof window.Zord.Cart.calculaFreteCarrinho=="function"){window.Zord.Cart.calculaFreteCarrinho();return}}catch{}var t=x.querySelector("#resumo-compra .calcula-frete > button, .area-frete button");t&&t.click()}function vt(){var t=document.getElementById("mm-layout");!t||t._mmBound||(t._mmBound=!0,t.addEventListener("click",function(a){var n=a.target.closest("[data-mm-act]");if(n){var e=n.getAttribute("data-mm-act"),r=n.closest(".mm-item"),s=r?parseInt(r.getAttribute("data-mm-id"),10):null;switch(e){case"inc":rt(s,r,"inc");break;case"dec":rt(s,r,"dec");break;case"remove":it(s,r);break;case"calc-cep":nt();break;case"coupon-toggle":var f=n.closest(".mm-coupon");if(f){f.classList.add("is-open");var v=f.querySelector("input");v&&setTimeout(function(){v.focus()},100)}break;case"coupon-remove":Wn();break;case"finalizar":mt();break}}}),t.addEventListener("submit",function(a){var n=a.target.closest('[data-mm-act="coupon-submit"]');if(n){a.preventDefault();var e=n.querySelector("input");e&&$n(e.value.trim())}}),t.addEventListener("input",function(a){a.target&&a.target.id==="mm-cep-input"&&(a.target.value=yn(a.target.value))}),t.addEventListener("keydown",function(a){a.key==="Enter"&&a.target&&a.target.id==="mm-cep-input"&&(a.preventDefault(),nt())}))}function rt(t,a,n){if(!(!t||!a)&&!(!window.Zord||!window.Zord.checkout)){a.classList.add("is-updating");try{n==="inc"?window.Zord.checkout.adicionaQuantidade(t):window.Zord.checkout.removeQuantidade(t)}catch(e){console.warn("[mm-cart] qty change failed",e),a.classList.remove("is-updating")}}}function it(t,a){if(!(!t||!a)&&!(!window.Zord||!window.Zord.checkout)){a.classList.add("is-updating"),a.style.transition="opacity 200ms, transform 200ms",a.style.opacity="0",a.style.transform="translateX(-12px)";try{typeof window.Zord.checkout.deleteItem=="function"?window.Zord.checkout.deleteItem(t):window.Zord.checkout.removeQuantidade(t)}catch(n){console.warn("[mm-cart] remove failed",n),a.classList.remove("is-updating"),a.style.opacity="1",a.style.transform=""}}}function nt(){var t=document.getElementById("mm-cep-input");if(t){var a=(t.value||"").replace(/\D/g,"");if(a.length!==8){t.focus(),t.classList.add("mm-input-error"),setTimeout(function(){t.classList.remove("mm-input-error")},1200);return}at(a);var n=x.querySelector("#cep, .input-cep");n&&(n.value=yn(a),_n(n)),ut()}}function $n(t){if(t&&!(!window.Zord||!window.Zord.checkout)){var a=x.querySelector("#cupom-desconto");a&&(a.value=t.toUpperCase(),_n(a));try{window.Zord.checkout.addCupomDesconto()}catch(n){console.warn("[mm-cart] coupon apply failed",n)}}}function Wn(){if(!(!window.Zord||!window.Zord.checkout))try{window.Zord.checkout.removeCupomDesconto()}catch(t){console.warn("[mm-cart] coupon remove failed",t)}}function mt(){try{var t=ln();t.items&&t.items.length>0&&tn(t)}catch{}var a=document.getElementById("finalizar-compra");if(a){a.click();return}location.href="/checkout/identify"}if(k){let t=function(n){if(n=n||0,n>30){a();return}var e=x.querySelectorAll(".cart-item").length>0,r=x.querySelector("#resumo-compra");e||r||n>8?a():setTimeout(function(){t(n+1)},250)},a=function(){On(),vt(),kn(),Kn(),typeof jQuery<"u"&&jQuery(document).ajaxComplete(function(r,s,f){if(!(!f||!f.url)){var v=f.url;(v.indexOf("checkout/cart")!==-1||v.indexOf("atualiza")!==-1||v.indexOf("cupom")!==-1||v.indexOf("frete")!==-1||v.indexOf("removeItem")!==-1||v.indexOf("adicionaItem")!==-1)&&(setTimeout(kn,120),setTimeout(function(){var y=ln();y.shipping!==null&&y.cepValue&&at(y.cepValue)},200))}});try{var n=new MutationObserver(function(r){a._mutTimer&&clearTimeout(a._mutTimer),a._mutTimer=setTimeout(kn,200)}),e=[x.querySelector("#cart-area"),x.querySelector(".cart-area"),x.querySelector("#resumo-compra")].filter(Boolean);e.forEach(function(r){n.observe(r,{childList:!0,subtree:!0,characterData:!0})})}catch{}};if(!document.getElementById("mm-checkout-cro-done")){var hn=document.createElement("div");hn.id="mm-checkout-cro-done",hn.style.display="none",document.body.appendChild(hn)}t()}function Vn(t){if(!t||!t.items||!t.items.length)return'<aside class="mm-id-sum mm-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><div class="mm-sum-empty"><p>Não conseguimos carregar o resumo do seu pedido.</p><a class="mm-btn-secondary" href="/checkout/cart">Voltar ao carrinho</a></div></div></aside>';var a=3,n=t.items.slice(0,a),e=t.items.length-a,r=n.map(function(J){var cn=J.imgSrc?'<img src="'+I(J.imgSrc)+'" alt="'+I(J.name)+'" loading="lazy">':'<div class="mm-id-thumb-placeholder">'+z.box+"</div>",rn=J.quantity>1?'<strong class="mm-id-thumb-qty">'+J.quantity+"×</strong> ":"",vn=J.lineTotalPix>0?J.lineTotalPix:J.lineTotal;return'<div class="mm-id-thumb"><div class="mm-id-thumb-img">'+cn+'</div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+rn+I(J.name)+"</p>"+(J.variant?'<p class="mm-id-thumb-variant">'+I(J.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price">'+T(vn)+"</div></div>"}).join("");e>0&&(r+='<div class="mm-id-thumb-more">+ '+e+" "+(e===1?"item":"itens")+" a mais</div>");var s=t.subtotalFull>0?t.subtotalFull:t.subtotalPix,f='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+T(s)+"</span></div>";if(t.shipping!==null&&t.shipping!==void 0){var v;t.shipping===0?v='<span class="mm-row-value is-free">'+z.check+" Grátis</span>":v='<span class="mm-row-value">'+T(t.shipping)+"</span>",f+='<div class="mm-row"><span class="mm-row-label">Frete'+(t.shippingDeadline?' <span class="mm-row-sub">· '+I(t.shippingDeadline)+"</span>":"")+"</span>"+v+"</div>"}t.discount>0&&(f+='<div class="mm-row"><span class="mm-row-label">Desconto'+(t.couponCode?' <span class="mm-row-sub">· '+I(t.couponCode)+"</span>":"")+'</span><span class="mm-row-value is-discount">− '+T(t.discount)+"</span></div>");var y,B=t.shipping!==null&&t.shipping!==void 0?t.shipping:0;if(t.shipping!==null&&t.shipping!==void 0){var _=Math.max(0,s+B-(t.discount||0)),D=Math.max(0,t.subtotalPix+B-(t.discount||0)),nn=_-D,X=_/12;y='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value">'+T(_)+'</div><div class="mm-total-pix"><span>'+T(D)+" à vista no PIX</span>"+(nn>0?'<span class="mm-total-pix-save">economia de '+T(nn)+"</span>":"")+'</div><div class="mm-total-parcela">ou 12x de '+T(X)+" sem juros</div></div>"}else{var Z=s/12;y='<div class="mm-total"><div class="mm-total-label">Subtotal</div><div class="mm-total-value">'+T(t.subtotalPix)+'</div><div class="mm-total-pix"><span>à vista no PIX</span></div><div class="mm-total-parcela">ou 12x de '+T(Z)+" sem juros</div></div>"}return'<aside class="mm-id-sum mm-sum"><h2 class="mm-h">Resumo do pedido</h2><div class="mm-sum-card"><div class="mm-id-thumbs">'+r+'</div><div class="mm-rows">'+f+"</div>"+y+'<a class="mm-id-edit-cart" href="/checkout/cart"><span>Editar carrinho</span></a></div><a class="mm-help mm-sum-help" href="'+u+'" target="_blank" rel="noopener" data-mm-track="help-whats-sum">'+z.whats+"<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span></a></aside>"}function ht(){var t='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',a='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',n='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="9" x2="17" y2="9"/><line x1="7" y1="13" x2="17" y2="13"/><line x1="7" y1="17" x2="13" y2="17"/></svg>',e='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';return'<section class="mm-id-form-col"><h2 class="mm-id-h2">Quase lá! Identifique-se</h2><p class="mm-id-sub">Informe seu e-mail para finalizar a compra de forma rápida e segura.</p><form class="mm-id-form" data-mm-act="identify-submit" novalidate><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+t+'</span><input type="email" id="mm-id-email" name="mm-email" class="mm-input" placeholder="seu@email.com" autocomplete="email" inputmode="email" required></div><p class="mm-id-microcopy">'+z.lock+'<span>Seu e-mail é seguro · Não compartilhamos com terceiros</span></p><button type="submit" class="mm-cta">Continuar'+z.arrow+'</button></form><div class="mm-id-divider"><span>ou</span></div><div class="mm-id-google-slot"></div><button type="button" class="mm-id-guest-toggle" data-mm-act="guest-go" aria-label="Continuar como visitante"><span class="mm-id-guest-icon" aria-hidden="true">'+a+'</span><span class="mm-id-guest-label">Continuar como visitante (sem criar conta)</span><span class="mm-id-guest-arrow" aria-hidden="true">'+z.arrow+'</span></button><div class="mm-trust mm-id-trust"><span class="mm-trust-item">'+z.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+z.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+z.shield+'<span>Garantia 12 meses</span></span></div><p class="mm-id-lgpd">Ao continuar, você concorda com nossa <a href="/politica-de-privacidade" target="_blank" rel="noopener">Política de Privacidade</a></p></section>'}function tt(t){var a=document.getElementById("mm-layout");if(a)return a.parentElement!==x&&x.insertBefore(a,x.firstChild),a;var n=document.createElement("div");return n.id="mm-layout",n.classList.add("mm-id-layout"),n.innerHTML=Ln("delivery")+'<div class="mm-grid mm-id-grid">'+ht()+Vn(t)+"</div>",x.insertBefore(n,x.firstChild),document.body.classList.add("mm-checkout-rebuild"),Hn(),x.classList.add("mm-shadow-mode"),document.documentElement.classList.remove("mm-cart-loading"),n}function Hn(){var t=document.querySelector(".mm-id-google-slot"),a=x.querySelector(".social-login-area");if(!(!t||!a)&&!t.contains(a))try{t.appendChild(a),t.classList.add("is-loaded")}catch{}}function st(t){Q.set("mm_user_email",t);var a=x.querySelector("#login");if(!a)return!1;a.value=t,_n(a);var n=a.closest("form"),e=n?n.querySelector('button.button-send, button[type="submit"]'):null;return e?(e.click(),!0):n?(n.submit(),!0):!1}function ft(){var t=document.getElementById("mm-layout");!t||t._mmBound||(t._mmBound=!0,t.addEventListener("submit",function(a){var n=a.target.closest('[data-mm-act="identify-submit"]');if(n){a.preventDefault();var e=n.querySelector("#mm-id-email"),r=e?e.value.trim():"";if(!r||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)){e&&(e.classList.add("mm-input-error"),e.focus(),setTimeout(function(){e.classList.remove("mm-input-error")},1500));return}var s=st(r);if(s){var f=n.querySelector(".mm-cta");f&&f.classList.add("is-loading")}return}}),t.addEventListener("click",function(a){var n=a.target.closest("[data-mm-act]");if(n){var e=n.getAttribute("data-mm-act");e==="guest-go"&&(Q.set("mm_checkout_mode","guest"),n.classList.add("is-loading"),location.href="/checkout/onepage")}}))}function bt(t){try{var a=new DOMParser().parseFromString(t,"text/html"),n=a.querySelector("#checkout-main-area");if(!n)return null;for(var e=[],r=n.querySelectorAll(".cart-item"),s=0,f=0;f<r.length;f++){var v=r[f],y=v.querySelector("figure img")||v.querySelector("#product-img")||v.querySelector("img"),B=v.querySelector(".column-valor-produto .valor"),_=parseFloat(v.getAttribute("data-valor")||"0"),D=B?V(B.textContent):0;e.push({name:v.getAttribute("data-item-name")||v.getAttribute("data-name")||"",variant:v.getAttribute("data-item-variant")||"",imgSrc:y&&y.getAttribute("src")||"",quantity:parseInt(v.getAttribute("data-item-quantity")||"1",10),lineTotal:_,lineTotalPix:D,isPix:!!v.querySelector(".column-valor-produto .sub"),deposito:v.getAttribute("data-item-deposito")==="1"}),s+=_}if(e.length===0)return null;var nn=n.querySelector("#resumo-compra .resumo-valores .value"),X=nn?V(nn.textContent):0;X<=0&&(X=e.reduce(function(U,H){return U+(H.lineTotalPix||0)},0));var Z=n.querySelector("#resumo-compra .discount-value"),J=Z?V(Z.textContent):0,cn=n.querySelector("#resumo-compra .txt-cupom, #resumo-compra .alert.alert-type-1"),rn="";if(cn){var vn=cn.textContent.match(/([A-Z0-9]{3,})/);vn&&(rn=vn[1])}var Sn=n.querySelector("#resumo-compra .frete-calculado"),Tn=null,Gn="";if(Sn&&Sn.textContent.trim()){var w=Sn.textContent.trim();if(/gr[aá]tis/i.test(w))Tn=0;else{var S=V(w);S>0&&(Tn=S)}var j=w.match(/(\d+)\s*dias?/i);j&&(Gn=j[1]+" dias úteis")}return{ts:Date.now(),items:e,subtotalPix:X,subtotalFull:s,discount:J,couponCode:rn,shipping:Tn,shippingDeadline:Gn,cepValue:""}}catch{return null}}function lt(t){try{fetch("/checkout/cart",{credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(a){return a.text()}).then(function(a){var n=bt(a);n&&Q.set(O,JSON.stringify(n)),t(n)}).catch(function(){t(null)})}catch{t(null)}}function fn(t){var a=document.querySelector("#mm-layout .mm-id-sum");if(a){var n=a.parentNode;if(n){var e=document.createElement("div");e.innerHTML=Vn(t);var r=e.firstChild;r&&n.replaceChild(r,a)}}}if(b){let t=function(n){if(n=n||0,n>30){a();return}var e=x.querySelector("#login, #login-form-etapa-01");e||n>8?a():setTimeout(function(){t(n+1)},250)},a=function(){var n=en();tt(n),ft(),Hn(),setTimeout(Hn,600),setTimeout(Hn,1500),(!n||!n.items||n.items.length===0)&&lt(function(e){e&&e.items&&e.items.length>0&&fn(e)}),setTimeout(function(){var e=document.getElementById("mm-id-email");e&&!("ontouchstart"in window)&&e.focus()},250)};t()}function pt(t){var a=String(t||"").replace(/\D/g,"").slice(0,11);return a.length<=3?a:a.length<=6?a.slice(0,3)+"."+a.slice(3):a.length<=9?a.slice(0,3)+"."+a.slice(3,6)+"."+a.slice(6):a.slice(0,3)+"."+a.slice(3,6)+"."+a.slice(6,9)+"-"+a.slice(9)}function ct(t){var a=String(t||"").replace(/\D/g,"").slice(0,11);return a.length<=2?a.length?"("+a:"":a.length<=6?"("+a.slice(0,2)+") "+a.slice(2):a.length<=10?"("+a.slice(0,2)+") "+a.slice(2,6)+"-"+a.slice(6):"("+a.slice(0,2)+") "+a.slice(2,7)+"-"+a.slice(7)}function Et(t){var a=String(t||"").replace(/\D/g,"").slice(0,8);return a.length<=5?a:a.slice(0,5)+"-"+a.slice(5)}function xt(t,a){var n=String(t||"").replace(/\D/g,"");if(n.length!==8){a(null);return}try{fetch("https://viacep.com.br/ws/"+n+"/json/",{headers:{Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){if(!e||e.erro){a(null);return}a({logradouro:e.logradouro||"",bairro:e.bairro||"",cidade:e.localidade||"",estado:e.uf||""})}).catch(function(){a(null)})}catch{a(null)}}var Cn={mail:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',doc:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 12h8v2H8zm0 4h5v2H8z"/></svg>',phone:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>',pin:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',pix:'<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M11.917 11.71a2.046 2.046 0 0 1-1.454-.602l-2.1-2.1a.4.4 0 0 0-.551 0l-2.108 2.108a2.044 2.044 0 0 1-1.454.602h-.414l2.66 2.66c.83.83 2.177.83 3.007 0l2.667-2.668h-.253zM4.25 4.282c.55 0 1.066.214 1.454.602l2.108 2.108a.39.39 0 0 0 .552 0l2.1-2.1a2.044 2.044 0 0 1 1.453-.602h.253L9.503 1.623a2.127 2.127 0 0 0-3.007 0l-2.66 2.66h.414z"/><path d="m14.377 6.496-1.612-1.612a.307.307 0 0 1-.114.023h-.733c-.379 0-.75.154-1.017.422l-2.1 2.1a1.005 1.005 0 0 1-1.425 0L5.268 5.32a1.448 1.448 0 0 0-1.018-.422h-.9a.306.306 0 0 1-.109-.021L1.623 6.496c-.83.83-.83 2.177 0 3.008l1.618 1.618a.305.305 0 0 1 .108-.022h.901c.38 0 .75-.153 1.018-.421L7.375 8.57a1.034 1.034 0 0 1 1.426 0l2.1 2.1c.267.268.638.421 1.017.421h.733c.04 0 .079.01.114.024l1.612-1.612c.83-.83.83-2.178 0-3.008z"/></svg>',cardBig:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>',barcode:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 6h2v12H2zm3 0h1v12H5zm2 0h3v12H7zm4 0h1v12h-1zm3 0h2v12h-2zm3 0h1v12h-1zm2 0h3v12h-3z"/></svg>',editPencil:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>'};function Ct(t){var a=t?' value="'+I(t)+'"':"";return'<section class="mm-op-form-col"><h2 class="mm-id-h2">Falta pouco. Onde entregar?</h2><p class="mm-id-sub">Preencha seus dados e o endereço de entrega — o frete é calculado automaticamente.</p><form class="mm-op-form" data-mm-act="onepage-submit" novalidate><div class="mm-op-card"><h3 class="mm-op-card-title">'+Cn.user+'<span>Quem vai receber</span></h3><div class="mm-op-grid-2"><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+Cn.mail+'</span><input type="email" id="mm-op-email" class="mm-input" placeholder="seu@email.com" autocomplete="email" inputmode="email" required'+a+'></div><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+Cn.user+'</span><input type="text" id="mm-op-nome" class="mm-input" placeholder="Nome completo" autocomplete="name" required></div><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+Cn.doc+'</span><input type="tel" id="mm-op-cpf" class="mm-input" placeholder="CPF" inputmode="numeric" autocomplete="off" maxlength="14" required></div><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+Cn.phone+'</span><input type="tel" id="mm-op-tel" class="mm-input" placeholder="(11) 91234-5678" inputmode="tel" autocomplete="tel" maxlength="15" required></div></div><p class="mm-op-microcopy-soft">Usamos seus dados só pra emitir nota fiscal e te avisar da entrega.</p></div><div class="mm-op-card"><h3 class="mm-op-card-title">'+Cn.pin+'<span>Endereço de entrega</span></h3><div class="mm-op-grid-2"><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+Cn.pin+'</span><input type="tel" id="mm-op-cep" class="mm-input" placeholder="CEP — 00000-000" inputmode="numeric" autocomplete="postal-code" maxlength="9" required><span class="mm-input-status" id="mm-op-cep-status" aria-live="polite"></span></div><a class="mm-op-cep-help" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+Cn.home+'</span><input type="text" id="mm-op-rua" class="mm-input" placeholder="Rua, Av, Travessa..." autocomplete="address-line1" required></div><div class="mm-input-wrap"><input type="tel" id="mm-op-num" class="mm-input mm-input-noicon" placeholder="Número" inputmode="numeric" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-comp" class="mm-input mm-input-noicon" placeholder="Complemento (opcional)" autocomplete="address-line2"></div><div class="mm-input-wrap mm-op-col-2"><input type="text" id="mm-op-bairro" class="mm-input mm-input-noicon" placeholder="Bairro" autocomplete="address-level3" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-cidade" class="mm-input mm-input-noicon" placeholder="Cidade" autocomplete="address-level2" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-uf" class="mm-input mm-input-noicon" placeholder="UF" maxlength="2" autocomplete="address-level1" required></div></div><div class="mm-op-frete" id="mm-op-frete-slot"></div></div><button type="submit" class="mm-cta mm-op-cta">Última etapa: pagamento'+z.arrow+'</button><p class="mm-id-microcopy mm-op-cta-sub">'+z.lock+'<span>Você revisa tudo antes de finalizar</span></p></form><div class="mm-trust mm-id-trust"><span class="mm-trust-item">'+z.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+z.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+z.shield+"<span>Garantia 12 meses</span></span></div></section>"}function dt(t,a){var n=document.getElementById("mm-layout");if(n)return n.parentElement!==x&&x.insertBefore(n,x.firstChild),n;var e=document.createElement("div");return e.id="mm-layout",e.classList.add("mm-id-layout"),e.classList.add("mm-op-layout"),e.innerHTML=Ln("delivery")+'<div class="mm-grid mm-id-grid mm-op-grid">'+Ct(a)+Vn(t)+"</div>",x.insertBefore(e,x.firstChild),document.body.classList.add("mm-checkout-rebuild"),x.classList.add("mm-shadow-mode"),document.documentElement.classList.remove("mm-cart-loading"),e}function Pn(t){var a=document.getElementById("mm-op-frete-slot");if(a){if(t==="loading"){a.innerHTML='<div class="mm-op-frete-loading"><div class="mm-op-frete-spinner"></div><span>Calculando frete...</span></div>';return}if(t==="error"){a.innerHTML='<div class="mm-op-frete-error"><span>Não conseguimos calcular o frete. Confira o CEP e tente novamente.</span></div>';return}var n=t.value===0,e=n?'<strong class="mm-op-frete-value is-free">Grátis</strong>':'<strong class="mm-op-frete-value">'+T(t.value)+"</strong>",r=t.name?'<span class="mm-op-frete-name">'+I(t.name)+"</span>":"",s=t.deadline?'<span class="mm-op-frete-deadline">Entrega em '+I(t.deadline)+"</span>":"",f=t.city?'<span class="mm-op-frete-city">para '+I(t.city)+"</span>":"",v="";if(t.options&&t.options.length>1){v='<div class="mm-op-frete-options"><button type="button" class="mm-op-frete-toggle" data-mm-act="toggle-frete-opts" aria-expanded="false">Ver outras opções ('+t.options.length+')</button><div class="mm-op-frete-options-list" hidden>';for(var y=0;y<t.options.length;y++){var B=t.options[y],_=B.isSelected?" is-selected":"",D=B.isFree?'<span class="mm-op-frete-opt-value is-free">Grátis</span>':'<span class="mm-op-frete-opt-value">'+T(B.value)+"</span>";v+='<button type="button" class="mm-op-frete-opt'+_+'" data-mm-act="op-ship-select" data-ship-id="'+I(B.id)+'" aria-pressed="'+(B.isSelected?"true":"false")+'"><span class="mm-op-frete-opt-radio" aria-hidden="true"><span></span></span><span class="mm-op-frete-opt-body"><span class="mm-op-frete-opt-name">'+I(B.name||"Padrão")+"</span>"+(B.deadline?'<span class="mm-op-frete-opt-deadline">'+I(B.deadline)+"</span>":"")+"</span>"+D+"</button>"}v+="</div></div>"}a.innerHTML='<div class="mm-op-frete-card'+(n?" is-free":"")+'"><div class="mm-op-frete-icon">'+z.truck+'</div><div class="mm-op-frete-body"><div class="mm-op-frete-row">'+r+e+"</div>"+s+f+"</div></div>"+v}}function Xn(){function t(U){if(!U)return"";var H=U.match(/(\d+(?:\s*[aà]\s*\d+)?)\s*dias?(?:\s*\([^)]+\))?\s*([úu]teis)?/i);return H?H[1].replace(/\s+/g," ")+" dias úteis":""}function a(U){for(var H=[],dn=U.querySelectorAll(".servico-frete"),un=0;un<dn.length;un++){var bn=dn[un],wn=bn.querySelector('input[type="radio"]'),En=bn.querySelector(".dias-entrega"),Bn=parseFloat(bn.getAttribute("data-valor-frete")||"0"),qn=bn.getAttribute("data-servico-frete")||"",Dn=En?En.textContent.trim():"",Rn=Dn.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i);H.push({id:wn?wn.value:"",name:qn,deadline:Rn?Rn[1].replace(/\s+/g," "):Dn,value:Bn,isFree:Bn===0,isSelected:wn?wn.checked:!1})}return H}var n=x.querySelector(".frete-calculado");if(n&&n.textContent.trim()){var e=a(n),r=n.querySelector(".frete-location .city"),s=r?r.textContent.trim():"",f=e.filter(function(U){return U.isSelected})[0]||e[0];if(f)return{value:f.value,name:f.name,deadline:f.deadline,city:s,options:e};var v=n.querySelector(".info-frete-selec .info-title span, .info-title span"),y=n.querySelector(".info-frete-selec .dias-entrega, .dias-entrega"),B=n.querySelector(".value.valor-frete, .valor-frete .value"),_=n.textContent,D=null;if(B&&(/gr[aá]tis/i.test(B.textContent)?D=0:D=V(B.textContent)),D===null&&(/gr[aá]tis/i.test(_)?D=0:D=V(_)||null),D!==null)return{value:D,name:v?v.textContent.trim():"",deadline:t(y?y.textContent:_),city:s,options:[]}}var nn=x.querySelector(".line-entrega"),X=x.querySelector(".value.valor-frete, .valor-frete .value");if(nn||X){var Z=((nn||X).textContent||"").trim(),J=en(),cn=J&&J.shippingName||"",rn=J&&J.shippingDeadline||"",vn=J&&J.shippingCity||"",Sn=J?J.shippingOptions||[]:[];if(Z){var Tn=(x.querySelector(".nome-servico-frete, .info-frete-selec .info-title span")||{}).textContent||"",Gn=(x.querySelector(".info-entrega, .prazo-entrega, .line-entrega .sub, .info-frete-selec .dias-entrega")||{}).textContent||"",w=t(Gn)||t(Z)||rn,S=Tn.trim()||cn;if(/gr[aá]tis/i.test(Z))return{value:0,deadline:w,name:S,city:vn,options:Sn};var j=V(Z);if(j>0)return{value:j,deadline:w,name:S,city:vn,options:Sn}}if(J&&J.shipping!==null&&J.shipping!==void 0)return{value:J.shipping,deadline:rn,name:cn,city:vn,options:Sn}}return null}function i(){var t=document.getElementById("mm-op-cep");if(!t)return;var a=(t.value||"").replace(/\D/g,"");if(a.length!==8)return;if(i._lastCep===a){var n=document.getElementById("mm-op-frete-slot");if(n&&n.querySelector(".mm-op-frete-card"))return}i._lastCep=a;var e=(i._token||0)+1;i._token=e,at(a);var r=x.querySelector("#cep, .input-cep");r&&(r.value=yn(a),_n(r)),Pn("loading");try{window.Zord&&window.Zord.Cart&&typeof window.Zord.Cart.calculaFreteCarrinho=="function"&&window.Zord.Cart.calculaFreteCarrinho()}catch{}var s=0,f=18;function v(){if(i._token===e){s++;var y=Xn();if(y){Pn(y);var B=en();B&&(B.shipping=y.value,B.shippingDeadline=y.deadline,B.shippingName=y.name||"",B.shippingCity=y.city||"",B.shippingOptions=y.options||[],Q.set(O,JSON.stringify(B)),fn(B));return}s<f?setTimeout(v,350):Pn("error")}}setTimeout(v,400)}function l(){var t=document.getElementById("mm-layout");if(!t||t._mmOpBound)return;t._mmOpBound=!0,t.addEventListener("click",function(n){var e=n.target.closest('[data-mm-act="toggle-frete-opts"]');if(e){n.preventDefault();var r=e.parentElement.querySelector(".mm-op-frete-options-list");if(r){var s=r.hasAttribute("hidden");s?r.removeAttribute("hidden"):r.setAttribute("hidden",""),e.setAttribute("aria-expanded",s?"true":"false"),e.textContent=s?"Ocultar opções":"Ver outras opções"}return}var f=n.target.closest('[data-mm-act="op-ship-select"]');if(f){n.preventDefault();var v=f.getAttribute("data-ship-id");if(!v)return;var y=x.querySelector('.servico-frete input[type="radio"][value="'+v+'"]');if(!y){console.warn("[mm-op] modalidade não encontrada no DOM:",v);return}for(var B=t.querySelectorAll(".mm-op-frete-opt"),_=0;_<B.length;_++){var D=B[_],nn=D.getAttribute("data-ship-id")===v;D.classList.toggle("is-selected",nn),D.setAttribute("aria-pressed",nn?"true":"false")}y.checked=!0,y.click(),setTimeout(function(){var X=Xn();if(X){Pn(X);var Z=en();Z&&(Z.shipping=X.value,Z.shippingDeadline=X.deadline,Z.shippingName=X.name||"",Z.shippingOptions=X.options||[],Q.set(O,JSON.stringify(Z)),fn(Z))}},700);return}}),t.addEventListener("submit",function(n){var e=n.target.closest('[data-mm-act="onepage-submit"]');if(e){n.preventDefault();var r={email:(document.getElementById("mm-op-email")||{}).value||"",nome:(document.getElementById("mm-op-nome")||{}).value||"",cpf:(document.getElementById("mm-op-cpf")||{}).value||"",tel:(document.getElementById("mm-op-tel")||{}).value||"",cep:(document.getElementById("mm-op-cep")||{}).value||"",rua:(document.getElementById("mm-op-rua")||{}).value||"",num:(document.getElementById("mm-op-num")||{}).value||"",comp:(document.getElementById("mm-op-comp")||{}).value||"",bairro:(document.getElementById("mm-op-bairro")||{}).value||"",cidade:(document.getElementById("mm-op-cidade")||{}).value||"",uf:(document.getElementById("mm-op-uf")||{}).value||""},s=[];if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email.trim())||s.push("mm-op-email"),r.nome.trim().split(/\s+/).length<2&&s.push("mm-op-nome"),r.cpf.replace(/\D/g,"").length!==11&&s.push("mm-op-cpf"),r.tel.replace(/\D/g,"").length<10&&s.push("mm-op-tel"),r.cep.replace(/\D/g,"").length!==8&&s.push("mm-op-cep"),r.rua.trim()||s.push("mm-op-rua"),r.num.trim()||s.push("mm-op-num"),r.bairro.trim()||s.push("mm-op-bairro"),r.cidade.trim()||s.push("mm-op-cidade"),r.uf.trim()||s.push("mm-op-uf"),s.length){s.forEach(function(y){var B=document.getElementById(y);B&&(B.classList.add("mm-input-error"),setTimeout(function(){B.classList.remove("mm-input-error")},1800))});var f=document.getElementById(s[0]);f&&(f.focus(),f.scrollIntoView({block:"center",behavior:"smooth"}));return}var v=e.querySelector(".mm-cta");v&&v.classList.add("is-loading"),Q.set("mm_user_email",r.email.trim()),M(r)}}),t.addEventListener("input",function(n){var e=n.target;if(e){if(e.dataset&&e.dataset.mmCepFill==="1"&&delete e.dataset.mmCepFill,e.id==="mm-op-cpf")e.value=pt(e.value);else if(e.id==="mm-op-tel")e.value=ct(e.value);else if(e.id==="mm-op-cep"){e.value=Et(e.value);var r=e.value.replace(/\D/g,"");r.length===8&&c(r)}else e.id==="mm-op-uf"&&(e.value=(e.value||"").replace(/[^A-Za-z]/g,"").toUpperCase().slice(0,2));e.id&&e.id.indexOf("mm-op-")===0&&(l._draftTimer&&clearTimeout(l._draftTimer),l._draftTimer=setTimeout(sn,400))}});function a(){l._draftTimer&&(clearTimeout(l._draftTimer),l._draftTimer=null),sn()}t.addEventListener("blur",function(n){var e=n.target;e&&e.id&&e.id.indexOf("mm-op-")===0&&a()},!0),window.addEventListener("beforeunload",a)}function c(t){var a=document.getElementById("mm-op-cep-status");a&&(a.className="mm-input-status is-loading",a.textContent="Buscando..."),xt(t,function(n){if(a&&(a.className="mm-input-status"),!n){a&&(a.className="mm-input-status is-error",a.textContent="CEP não encontrado",setTimeout(function(){a.className="mm-input-status",a.textContent=""},2500));return}a&&(a.className="mm-input-status is-ok",a.innerHTML=z.check,setTimeout(function(){a.className="mm-input-status",a.innerHTML=""},1800));var e=[["mm-op-rua",n.logradouro],["mm-op-bairro",n.bairro],["mm-op-cidade",n.cidade],["mm-op-uf",n.estado]];e.forEach(function(s){var f=document.getElementById(s[0]);!f||!s[1]||(!f.value||f.dataset.mmCepFill==="1")&&(f.value=s[1],f.dataset.mmCepFill="1")});var r=document.getElementById("mm-op-num");r&&setTimeout(function(){r.focus()},100),i._t&&clearTimeout(i._t),i._t=setTimeout(i,200)})}function E(t){if(!document.getElementById("mm-op-overlay")){var a=document.createElement("div");a.id="mm-op-overlay",a.innerHTML='<div class="mm-op-overlay-card"><div class="mm-op-overlay-spinner"></div><p class="mm-op-overlay-text">'+I(t||"Processando...")+"</p></div>",document.body.appendChild(a)}}function M(t){var a=t.nome.trim(),n=t.email.trim(),e=t.rua.trim(),r=t.bairro.trim(),s=t.cidade.trim(),f=t.uf.trim(),v=yn(t.cep.replace(/\D/g,""));Q.set("mm_user_email",n);var y=function(B,_){var D=x.querySelector(B);if(!D)return!1;try{var nn=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;nn.call(D,_)}catch{D.value=_}return D.dispatchEvent(new Event("input",{bubbles:!0})),D.dispatchEvent(new Event("change",{bubbles:!0})),D.dispatchEvent(new Event("blur",{bubbles:!0})),!0};y("#nome-completo_2",a),y("#cpf_2",t.cpf),y("#email_3",n),y("#telefone_2",t.tel),y("#cep",v),y("#destinatario",a),y("#logradouro",e),y("#numero",t.num),y("#complemento",t.comp),y("#bairro",r),y("#cidade",s),y("#estado",f),E("Indo para o pagamento..."),setTimeout(function(){var B=document.getElementById("mm-layout");B&&(B.style.display="none"),x.classList.remove("mm-shadow-mode");function _(X){var Z=x.querySelector("#"+X);return Z?Z.closest("form"):null}function D(){var X=_("nome-completo_2");return X&&typeof X.requestSubmit=="function"?(X.requestSubmit(),!0):X?(X.submit(),!0):!1}function nn(){var X=_("cep");return X&&typeof X.requestSubmit=="function"?(X.requestSubmit(),!0):X?(X.submit(),!0):!1}setTimeout(function(){D(),setTimeout(function(){nn();var X=0;function Z(){X++;var J=document.querySelector('input[name="forma-pagto"], #forma-pagto-pix, #forma-pagto-cartao, #forma-pagto-boleto');if(J&&J.offsetParent!==null){try{N(t)}catch{var cn=document.getElementById("mm-op-overlay");cn&&cn.remove();var rn=document.getElementById("mm-layout");rn&&(rn.style.display="none")}return}if(X<30)setTimeout(Z,250);else{var vn=document.getElementById("mm-op-overlay");vn&&vn.remove()}}setTimeout(Z,800)},1500)},150)},100)}function F(){var t={pix:null,cartao:null,boleto:null},a=[];try{a=window.Zord&&window.Zord.Calculo&&window.Zord.Calculo.FormasPagamentoPedido||[]}catch{}a.forEach(function(D){var nn=D.formaPagamento&&D.formaPagamento.id,X=D.formaPagamento&&D.formaPagamento.isCartao,Z=D.condicoes||[];!Z.length||!X||(!t.cartao||Z.length>t.cartao.condicoes.length)&&(t.cartao={formaId:nn,valorTotal:Z[0].valorTotal,condicoes:Z.map(function(J){return{nome:J.condicaoPagamento&&J.condicaoPagamento.nome,numParcelas:J.condicaoPagamento&&J.condicaoPagamento.numeroParcelas,valorParcela:J.valorParcela,valorTotal:J.valorTotal}})})});function n(D){if(!D)return 0;var nn=D.getAttribute&&D.getAttribute("data-valor-total");if(nn){var X=parseFloat(nn);if(X>0)return X}var Z=(D.textContent||"").replace(/[^\d,.]/g,"");return Z.indexOf(",")!==-1&&(Z=Z.replace(/\./g,"").replace(",",".")),parseFloat(Z)||0}var e=document.querySelector("#valor-total-pedido-pix, .valor-total-pix[data-valor-total]"),r=n(e);if(r>0)t.pix={formaId:17,valorTotal:r};else{var s=a.find&&a.find(function(D){return D.formaPagamento&&D.formaPagamento.id===17});s&&s.condicoes&&s.condicoes[0]&&(t.pix={formaId:17,valorTotal:s.condicoes[0].valorTotal})}var f=document.querySelector("#valor-total-pedido-boleto, .valor-total-boleto[data-valor-total]"),v=n(f);if(v>0)t.boleto={valorTotal:v};else{var y=a.find&&a.find(function(D){var nn=D.formaPagamento&&D.formaPagamento.id,X=D.formaPagamento&&D.formaPagamento.isCartao;return!X&&nn!==17&&D.condicoes&&D.condicoes.length});y&&(t.boleto={formaId:y.formaPagamento.id,valorTotal:y.condicoes[0].valorTotal})}if(!t.cartao){var B=document.querySelector(".valor-parcela-cartao");if(B){var _=n(B);_>0&&(t.cartao={valorTotal:_*12,condicoes:[]})}}return t}function N(t){var a=en(),n=F();x.classList.add("mm-shadow-mode"),document.body.classList.add("mm-checkout-rebuild");var e=document.getElementById("mm-layout");(!e||e.parentElement!==x)&&(e&&e.parentElement&&e.parentElement.removeChild(e),e=document.createElement("div"),e.id="mm-layout",x.insertBefore(e,x.firstChild)),e.className="mm-op-layout mm-op-step3-layout",e.style.display="",e.innerHTML=R(a,t,n),document.documentElement.classList.remove("mm-cart-loading");var r=document.getElementById("mm-op-overlay");r&&r.remove();try{window.scrollTo({top:0,behavior:"smooth"})}catch{window.scrollTo(0,0)}on(t,n)}function R(t,a,n){var e=typeof renderGlobalFooter=="function"?renderGlobalFooter():"";return Ln("payment")+'<main class="mm-op-main"><div class="mm-op-step3-grid"><section class="mm-op-step3-left">'+K(n)+an()+'</section><aside class="mm-op-step3-sum-wrap">'+W(a)+G(t,n,"pix")+"</aside></div></main>"+e}function W(t){var a=t||{},n=I(a.nome||""),e=I(a.email||""),r=I(a.cpf||""),s=I(a.tel||""),f=I(a.rua||""),v=I(a.num||""),y=a.comp?", "+I(a.comp):"",B=I(a.bairro||""),_=I(a.cidade||""),D=I(a.uf||""),nn=I(a.cep||"");return'<div class="mm-op-step3-completed"><div class="mm-op-completed-card" data-section="dados"><div class="mm-op-completed-head"><span class="mm-op-completed-check">'+z.check+'</span><h3 class="mm-op-completed-title">Dados pessoais</h3><a href="/checkout/onepage" class="mm-op-completed-edit" data-mm-act="edit-dados" aria-label="Editar dados">'+Cn.editPencil+' Editar</a></div><dl class="mm-op-completed-body">'+(n?"<div><dt>Nome</dt><dd>"+n+"</dd></div>":"")+(e?"<div><dt>E-mail</dt><dd>"+e+"</dd></div>":"")+(r?"<div><dt>CPF</dt><dd>"+r+"</dd></div>":"")+(s?"<div><dt>Telefone</dt><dd>"+s+"</dd></div>":"")+'</dl></div><div class="mm-op-completed-card" data-section="endereco"><div class="mm-op-completed-head"><span class="mm-op-completed-check">'+z.check+'</span><h3 class="mm-op-completed-title">Endereço de entrega</h3><a href="/checkout/onepage" class="mm-op-completed-edit" data-mm-act="edit-endereco" aria-label="Editar endereço">'+Cn.editPencil+' Editar</a></div><address class="mm-op-completed-address">'+f+", "+v+y+"<br>"+B+" — "+_+"/"+D+"<br>"+(nn?"CEP "+nn:"")+"</address></div></div>"}function K(t){var a=t.pix?t.pix.valorTotal:0,n=t.cartao?t.cartao.valorTotal:0,e=t.boleto?t.boleto.valorTotal:0,r=n>a?n-a:0,s=null;t.cartao&&t.cartao.condicoes&&t.cartao.condicoes.length&&(s=t.cartao.condicoes[t.cartao.condicoes.length-1]);var f=s?"até "+s.numParcelas+"x de "+T(s.valorParcela)+" sem juros":n>0?"até 12x sem juros":"Cartão de crédito",v='<label class="mm-op-pay-radio is-active" data-forma="pix"><input type="radio" name="mm-pay" value="pix" checked><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+Cn.pix+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">PIX</span><span class="mm-op-pay-sub">Aprovação instantânea · em 1 minuto</span></div><div class="mm-op-pay-price">'+(r>0?'<span class="mm-op-pay-badge-save">Economize '+T(r)+"</span>":"")+'<span class="mm-op-pay-amount">'+T(a)+'</span></div></div><div class="mm-op-pay-detail"><ul class="mm-op-pay-benefits"><li>'+z.check+"<span>QR Code e Copia-e-Cola após confirmar</span></li><li>"+z.check+"<span>Pedido aprovado em até 1 minuto</span></li><li>"+z.check+"<span>Pagamento 100% seguro · sem dados de cartão</span></li></ul></div></label>",y='<div class="mm-op-pay-brands"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-visa.svg" alt="Visa" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-mastercard.svg" alt="Mastercard" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-american-express.svg" alt="American Express" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-elo.svg" alt="Elo" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-hipercard.svg" alt="Hipercard" width="32" height="20"></div>',B='<span class="mm-op-req" aria-hidden="true">*</span>';function _(Z){return'<span class="mm-op-field-err" id="'+Z+'-err" role="alert" aria-live="polite"></span>'}var D='<div class="mm-op-card-form"><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-num">Número do cartão'+B+'</label><div class="mm-input-wrap mm-input-wrap-card"><span class="mm-input-icon" aria-hidden="true">'+z.card+'</span><input id="mm-pay-card-num" type="tel" class="mm-input" inputmode="numeric" autocomplete="off" data-mmac="cc-number" placeholder="0000 0000 0000 0000" maxlength="23" aria-describedby="mm-pay-card-num-err" aria-required="true" disabled><span class="mm-op-card-brand-detected" aria-live="polite"></span></div>'+_("mm-pay-card-num")+'</div><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-name">Nome impresso no cartão'+B+'</label><input id="mm-pay-card-name" type="text" class="mm-input mm-input-noicon" autocomplete="off" data-mmac="cc-name" placeholder="Como aparece no cartão" maxlength="100" aria-describedby="mm-pay-card-name-err" aria-required="true" disabled>'+_("mm-pay-card-name")+'</div><div class="mm-op-card-field mm-op-card-field-half"><label for="mm-pay-card-exp">Validade'+B+'</label><input id="mm-pay-card-exp" type="tel" class="mm-input mm-input-noicon" inputmode="numeric" autocomplete="off" data-mmac="cc-exp" placeholder="MM/AA" maxlength="5" aria-describedby="mm-pay-card-exp-err" aria-required="true" disabled>'+_("mm-pay-card-exp")+'</div><div class="mm-op-card-field mm-op-card-field-half"><label for="mm-pay-card-cvv">CVV'+B+'</label><input id="mm-pay-card-cvv" type="tel" class="mm-input mm-input-noicon" inputmode="numeric" autocomplete="off" data-mmac="cc-csc" placeholder="000" maxlength="4" aria-describedby="mm-pay-card-cvv-err" aria-required="true" disabled>'+_("mm-pay-card-cvv")+'</div><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-installments">Condições de pagamento'+B+'</label><select id="mm-pay-card-installments" class="mm-input mm-input-noicon mm-op-card-installments" aria-describedby="mm-pay-card-installments-err" aria-required="true" disabled><option value="">Digite o cartão pra ver as condições</option></select>'+_("mm-pay-card-installments")+"</div></div>",nn='<label class="mm-op-pay-radio" data-forma="cartao"><input type="radio" name="mm-pay" value="cartao"><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+Cn.cardBig+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">Cartão de Crédito</span><span class="mm-op-pay-sub">'+I(f)+'</span></div><div class="mm-op-pay-price"><span class="mm-op-pay-amount">'+T(n)+'</span></div></div><div class="mm-op-pay-detail">'+y+D+"</div></label>",X='<label class="mm-op-pay-radio" data-forma="boleto"><input type="radio" name="mm-pay" value="boleto"><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+Cn.barcode+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">Boleto Bancário</span><span class="mm-op-pay-sub">Aprovação em 1 a 3 dias úteis</span></div><div class="mm-op-pay-price"><span class="mm-op-pay-amount">'+T(e)+'</span></div></div><div class="mm-op-pay-detail"><ul class="mm-op-pay-benefits"><li>'+z.check+"<span>Código de barras enviado por e-mail</span></li><li>"+z.check+"<span>Pagamento em banco, lotérica ou app</span></li><li>"+z.check+"<span>Vencimento em 3 dias úteis</span></li></ul></div></label>";return'<section class="mm-op-step3-card" aria-labelledby="mm-op-step3-h"><div class="mm-op-step3-heading"><h2 id="mm-op-step3-h" class="mm-h">Como você quer pagar?</h2><p class="mm-op-step3-sub">Última etapa · escolha sua forma de pagamento '+(r>0?"· PIX tem desconto de "+T(r):"")+'</p></div><div class="mm-op-pay-radios" role="radiogroup" aria-label="Forma de pagamento">'+v+nn+X+'</div><button type="button" class="mm-cta mm-op-cta mm-op-finalizar" data-mm-act="finalizar-compra">'+z.lock+'<span class="mm-op-finalizar-label">Finalizar compra · '+T(a)+'</span></button><p class="mm-op-finalizar-sub">'+z.shield+"<span>Pagamento seguro · criptografia SSL-256 · seus dados não são armazenados</span></p></section>"}function an(){return'<div class="mm-op-trust-payment"><div class="mm-op-trust-payment-row"><span class="mm-trust-item">'+z.lock+'<span>Site 100% seguro</span></span><span class="mm-trust-item">'+z.shield+'<span>Garantia 12 meses</span></span><span class="mm-trust-item">'+z.rotate+'<span>7 dias pra trocar</span></span><span class="mm-trust-item">'+z.whats+'<span>Atendimento humano</span></span></div><p class="mm-op-trust-payment-note">Ao finalizar, você concorda com os <a href="/termos-de-uso" target="_blank" rel="noopener">termos de compra</a> e a <a href="/politica-privacidade" target="_blank" rel="noopener">política de privacidade</a>.</p></div>'}function G(t,a,n){if(!t||!t.items||!t.items.length)return'<aside class="mm-id-sum mm-sum mm-op-step3-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><p class="mm-sum-empty">Não conseguimos carregar o resumo do seu pedido.</p></div></aside>';var e=a.pix?a.pix.valorTotal:0,r=a.cartao?a.cartao.valorTotal:0,s=a.boleto?a.boleto.valorTotal:0,f=r>e?r-e:0,v=n==="pix"?e:n==="boleto"?s:r,y=n==="pix"?"no PIX":n==="boleto"?"no boleto":"no cartão",B=3,_=t.items.slice(0,B),D=t.items.length-B,nn=_.map(function(rn){var vn=rn.imgSrc?'<img src="'+I(rn.imgSrc)+'" alt="'+I(rn.name)+'" loading="lazy">':'<div class="mm-id-thumb-placeholder">'+z.box+"</div>",Sn=rn.quantity>1?'<strong class="mm-id-thumb-qty">'+rn.quantity+"×</strong> ":"",Tn=rn.lineTotalPix>0?rn.lineTotalPix:rn.lineTotal;return'<div class="mm-id-thumb"><div class="mm-id-thumb-img">'+vn+'</div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+Sn+I(rn.name)+"</p>"+(rn.variant?'<p class="mm-id-thumb-variant">'+I(rn.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price">'+T(Tn)+"</div></div>"}).join("");D>0&&(nn+='<div class="mm-id-thumb-more">+ '+D+" "+(D===1?"item":"itens")+" a mais</div>");var X=t.subtotalFull>0?t.subtotalFull:t.subtotalPix,Z='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+T(X)+"</span></div>";if(t.shipping!==null&&t.shipping!==void 0){var J=t.shipping===0?'<span class="mm-row-value is-free">'+z.check+" Grátis</span>":'<span class="mm-row-value">'+T(t.shipping)+"</span>";Z+='<div class="mm-row"><span class="mm-row-label">Frete'+(t.shippingDeadline?' <span class="mm-row-sub">· '+I(t.shippingDeadline)+"</span>":"")+"</span>"+J+"</div>"}t.discount>0&&(Z+='<div class="mm-row"><span class="mm-row-label">Cupom'+(t.couponCode?' <span class="mm-row-sub">· '+I(t.couponCode)+"</span>":"")+'</span><span class="mm-row-value is-discount">− '+T(t.discount)+"</span></div>"),f>0&&n==="pix"&&(Z+='<div class="mm-row mm-row-pix-discount"><span class="mm-row-label">'+z.bolt+' Desconto PIX</span><span class="mm-row-value is-discount">− '+T(f)+"</span></div>");var cn='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value" data-mm-total>'+T(v)+'</div><div class="mm-total-pix" data-mm-total-sub><span>'+y+"</span></div></div>";return'<aside class="mm-id-sum mm-sum mm-op-step3-sum" data-active-forma="'+I(n)+'"><h2 class="mm-h">Resumo do pedido</h2><div class="mm-sum-card"><div class="mm-id-thumbs">'+nn+'</div><div class="mm-sum-rows">'+Z+"</div>"+cn+"</div></aside>"}function on(t,a){var n=document.getElementById("mm-layout");if(!n||n._mmStep3Bound)return;n._mmStep3Bound=!0;var e=en(),r={activeForma:"pix",cardNumValid:!1,cardBrand:null,cardInstallments:null,submitting:!1};n.addEventListener("click",function(w){var S=w.target.closest(".mm-op-pay-radio");if(S){var j=S.querySelector('input[type="radio"]');j&&!j.checked&&(w.preventDefault(),j.checked=!0,B(S.getAttribute("data-forma")));return}if(w.target.closest('[data-mm-act="finalizar-compra"]')){w.preventDefault(),Gn();return}var U=w.target.closest('[data-mm-act="edit-dados"], [data-mm-act="edit-endereco"]');if(U){w.preventDefault(),location.reload();return}}),n.addEventListener("input",function(w){var S=w.target;!S||!S.id||(S.id==="mm-pay-card-num"?Z(S):S.id==="mm-pay-card-exp"?J(S):S.id==="mm-pay-card-cvv"&&(S.value=(S.value||"").replace(/\D/g,"").slice(0,4)))}),n.addEventListener("change",function(w){if(w.target&&w.target.id==="mm-pay-card-installments"){var S=w.target,j=S.options[S.selectedIndex];j&&j.value&&(r.cardInstallments={numero:parseInt(j.value,10),label:j.textContent||""},vn(j.value),f("mm-pay-card-installments"))}}),n.addEventListener("blur",function(w){var S=w.target;if(!(!S||!S.id)){var j=["mm-pay-card-num","mm-pay-card-name","mm-pay-card-exp","mm-pay-card-cvv"];j.indexOf(S.id)!==-1&&v(S.id)}},!0),n.addEventListener("focus",function(w){var S=w.target;!S||!S.id||/^mm-pay-card-/.test(S.id)&&f(S.id)},!0);function s(w,S){var j=document.getElementById(w),U=document.getElementById(w+"-err");j&&(j.classList.add("mm-input-error"),j.setAttribute("aria-invalid","true")),U&&(U.textContent=S,U.classList.add("is-visible"))}function f(w){var S=document.getElementById(w),j=document.getElementById(w+"-err");S&&(S.classList.remove("mm-input-error"),S.removeAttribute("aria-invalid")),j&&(j.textContent="",j.classList.remove("is-visible"))}function v(w){var S=document.getElementById(w);if(!S)return!0;var j=(S.value||"").trim();if(w==="mm-pay-card-num"){var U=j.replace(/\D/g,"");return U?U.length<13?(s(w,"Número do cartão incompleto"),!1):y(U)?(f(w),!0):(s(w,"Número do cartão inválido — confira os dígitos"),!1):(s(w,"Informe o número do cartão"),!1)}if(w==="mm-pay-card-name")return j?j.split(/\s+/).length<2?(s(w,"Use o nome completo como aparece no cartão"),!1):(f(w),!0):(s(w,"Informe o nome impresso no cartão"),!1);if(w==="mm-pay-card-exp"){var H=j.replace(/\D/g,"");if(H.length!==4)return s(w,"Informe a validade no formato MM/AA"),!1;var dn=parseInt(H.slice(0,2),10),un=parseInt(H.slice(2),10);if(dn<1||dn>12)return s(w,"Mês inválido (01 a 12)"),!1;var bn=new Date,wn=bn.getFullYear()%100,En=bn.getMonth()+1;return un<wn||un===wn&&dn<En?(s(w,"Cartão expirado"),!1):(f(w),!0)}if(w==="mm-pay-card-cvv"){var Bn=j.replace(/\D/g,"");return Bn.length<3?(s(w,"CVV deve ter 3 ou 4 dígitos"),!1):(f(w),!0)}return w==="mm-pay-card-installments"?j?(f(w),!0):(s(w,"Selecione o número de parcelas"),!1):!0}function y(w){for(var S=0,j=!1,U=w.length-1;U>=0;U--){var H=parseInt(w.charAt(U),10);j&&(H*=2,H>9&&(H-=9)),S+=H,j=!j}return S%10===0}function B(w){if(!(!w||r.activeForma===w)){r.activeForma=w,n.querySelectorAll(".mm-op-pay-radio").forEach(function(H){H.classList.toggle("is-active",H.getAttribute("data-forma")===w)});var S=document.getElementById("forma-pagto-"+w);if(S&&!S.checked)try{S.click()}catch{}var j=n.querySelectorAll(".mm-op-card-form input, .mm-op-card-form select"),U=w==="cartao";j.forEach(function(H){H.disabled=!U,U?H.dataset.mmac&&H.setAttribute("autocomplete",H.dataset.mmac):H.setAttribute("autocomplete","off")}),_(w),w==="cartao"&&setTimeout(function(){var H=document.getElementById("mm-pay-card-num");H&&!H.value&&H.focus()},250)}}function _(w){var S=n.querySelector(".mm-op-step3-sum");if(S){S.setAttribute("data-active-forma",w);var j=a.pix?a.pix.valorTotal:0,U=a.cartao?a.cartao.valorTotal:0,H=a.boleto?a.boleto.valorTotal:0,dn=U>j?U-j:0,un=w==="pix"?j:w==="boleto"?H:U,bn=w==="pix"?"no PIX":w==="boleto"?"no boleto":"no cartão",wn=S.querySelector("[data-mm-total]");if(wn){var En=wn.textContent||"",Bn=V(En);Bn!==un?D(wn,Bn,un,360):wn.textContent=T(un)}var qn=S.querySelector("[data-mm-total-sub] span");qn&&qn.textContent!==bn&&(qn.textContent=bn);var Dn=S.querySelector(".mm-sum-rows"),Rn=Dn?Dn.querySelector(".mm-row-pix-discount"):null;if(w==="pix"&&dn>0){if(!Rn&&Dn){var et=document.createElement("div");et.innerHTML='<div class="mm-row mm-row-pix-discount"><span class="mm-row-label">'+z.bolt+' Desconto PIX</span><span class="mm-row-value is-discount">− '+T(dn)+"</span></div>",Dn.appendChild(et.firstChild)}}else Rn&&Rn.remove();nn(w)}}function D(w,S,j,U){w._mmAnimToken&&cancelAnimationFrame(w._mmAnimToken);var H=null,dn=j-S;function un(bn){H||(H=bn);var wn=bn-H,En=Math.min(1,wn/U),Bn=1-Math.pow(1-En,3),qn=S+dn*Bn;w.textContent=T(qn),En<1?w._mmAnimToken=requestAnimationFrame(un):(w.textContent=T(j),w._mmAnimToken=null)}w._mmAnimToken=requestAnimationFrame(un)}function nn(w){var S=n.querySelector(".mm-op-finalizar-label");if(S){var j=w==="pix"?a.pix&&a.pix.valorTotal:w==="boleto"?a.boleto&&a.boleto.valorTotal:a.cartao&&a.cartao.valorTotal;S.textContent="Finalizar compra · "+T(j||0)}}function X(w){var S=(w||"").replace(/\D/g,"");return S?/^4/.test(S)?"visa":/^(5[1-5]|22[2-9]|2[3-6]|27[01]|2720)/.test(S)?"mastercard":/^3[47]/.test(S)?"amex":/^(4011|4312|4389|4514|4573|5041|5066|5067|509|6277|6362|6363|650|6516|6550)/.test(S)?"elo":/^(606282|384100|384140|384160|606|637095|637568|637599|637609|637612)/.test(S)?"hipercard":null:null}function Z(w){var S=(w.value||"").replace(/\D/g,"").slice(0,19),j=S.replace(/(\d{4})(?=\d)/g,"$1 ");if(j!==w.value){var U=w.selectionStart;w.value=j;try{w.setSelectionRange(U+1,U+1)}catch{}}var H=X(S);r.cardBrand=H,r.cardNumValid=S.length>=13;var dn=n.querySelector(".mm-op-card-brand-detected");dn&&(dn.className="mm-op-card-brand-detected"+(H?" is-"+H:""),dn.textContent=H?H.toUpperCase():""),S.length>=6&&(cn(S),Tn())}function J(w){var S=(w.value||"").replace(/\D/g,"").slice(0,4),j=S.length>2?S.slice(0,2)+"/"+S.slice(2):S;if(w.value=j,S.length===4){var U=S.slice(0,2),H="20"+S.slice(2);rn("pag-cartao-mes-validade",String(parseInt(U,10))),rn("pag-cartao-ano-validade",H)}}function cn(w){var S=document.getElementById("pag-cartao-numero");if(S){try{var j=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;j.call(S,w)}catch{S.value=w}S.dispatchEvent(new Event("input",{bubbles:!0})),S.dispatchEvent(new Event("change",{bubbles:!0})),S.dispatchEvent(new Event("blur",{bubbles:!0}))}}function rn(w,S){var j=document.getElementById(w);if(j){try{var U=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;U.call(j,S)}catch{j.value=S}j.dispatchEvent(new Event("change",{bubbles:!0}))}}function vn(w){rn("pag-cartao-parcela",w)}var Sn=null;function Tn(){if(Sn)return;var w=document.getElementById("pag-cartao-parcela");if(!w)return;var S=document.getElementById("mm-pay-card-installments");if(!S)return;function j(){var U=w.querySelectorAll("option");if(!(U.length<=1)){var H="";U.forEach(function(dn){if(!dn.value){H+='<option value="">Selecione as parcelas</option>';return}H+='<option value="'+I(dn.value)+'">'+I(dn.textContent.trim())+"</option>"}),S.innerHTML=H,S.options.length>1&&(S.selectedIndex=1,r.cardInstallments={numero:parseInt(S.options[1].value,10)||1,label:S.options[1].textContent},vn(S.options[1].value))}}j(),Sn=new MutationObserver(j),Sn.observe(w,{childList:!0,subtree:!0})}function Gn(){if(console.log("[mm-checkout] submitFinalizar() entry",{submitting:r.submitting,activeForma:r.activeForma}),r.submitting)return;var w=r.activeForma,S=n.querySelector(".mm-op-finalizar");if(!S){console.log("[mm-checkout] submitFinalizar: no .mm-op-finalizar btn");return}if(w==="cartao"){var j=["mm-pay-card-num","mm-pay-card-name","mm-pay-card-exp","mm-pay-card-cvv","mm-pay-card-installments"],U=j.filter(function(mn){return!v(mn)});if(console.log("[mm-checkout] validation",{errorCount:U.length,errors:U}),U.length){var H=document.getElementById(U[0]);if(H){H.focus();try{H.scrollIntoView({block:"center",behavior:"smooth"})}catch{}}return}var dn=document.getElementById("mm-pay-card-name"),un=document.getElementById("mm-pay-card-cvv"),bn=document.getElementById("pag-cartao-titular");if(bn){try{var wn=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;wn.call(bn,dn.value.trim())}catch{bn.value=dn.value.trim()}bn.dispatchEvent(new Event("input",{bubbles:!0})),bn.dispatchEvent(new Event("blur",{bubbles:!0}))}var En=document.getElementById("pag-cartao-vericacao");if(En){try{var Bn=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;Bn.call(En,un.value.replace(/\D/g,""))}catch{En.value=un.value.replace(/\D/g,"")}En.dispatchEvent(new Event("input",{bubbles:!0})),En.dispatchEvent(new Event("blur",{bubbles:!0}))}var qn=document.getElementById("pag-cartao-cpf");if(qn&&t&&t.cpf){try{var Dn=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;Dn.call(qn,t.cpf)}catch{qn.value=t.cpf}qn.dispatchEvent(new Event("input",{bubbles:!0})),qn.dispatchEvent(new Event("blur",{bubbles:!0}))}}r.submitting=!0,S.classList.add("is-loading"),S.setAttribute("aria-busy","true");var Rn=S.querySelector(".mm-op-finalizar-label");if(Rn&&(Rn.textContent="Processando pagamento..."),E("Finalizando seu pedido..."),w==="cartao"){var et=document.getElementById("mm-pay-card-installments");et&&et.value&&vn(et.value)}window.__mmCheckoutDebug=window.__mmCheckoutDebug||[];function gn(mn,An){var Fn={t:new Date().toISOString(),msg:mn,data:An};window.__mmCheckoutDebug.push(Fn),console.log("[mm-checkout]",mn,An||"")}function ot(){if(gn("doSubmit() called",{forma:w}),w==="cartao"){var mn=document.getElementById("aceito-termos-bcash-one-card");mn&&!mn.checked&&(mn.checked=!0,mn.dispatchEvent(new Event("change",{bubbles:!0}))),gn("terms",{checked:mn?.checked})}var An=w==="pix"?"form-pag-pix":w==="boleto"?"form-pag-boleto":"form-pag-cartao",Fn=document.getElementById(An);if(!Fn){gn("ERROR: form not found",{formId:An}),alert("Erro interno: formulário de pagamento não encontrado. Recarregue a página."),r.submitting=!1,S.classList.remove("is-loading");var jn=document.getElementById("mm-op-overlay");jn&&jn.remove();return}w==="cartao"&&gn("pre-submit cartao state",{numero:document.getElementById("pag-cartao-numero")?.value,bandeira:document.getElementById("pag-cartao-bandeira")?.value,parcela:document.getElementById("pag-cartao-parcela")?.value,titular:document.getElementById("pag-cartao-titular")?.value,mes:document.getElementById("pag-cartao-mes-validade")?.value,ano:document.getElementById("pag-cartao-ano-validade")?.value,cvv:document.getElementById("pag-cartao-vericacao")?.value?.length,cpf:document.getElementById("pag-cartao-cpf")?.value,tokenMp:document.getElementById("pag-cartao-token-mp")?.value?.substring(0,20)});var Nn=Fn.querySelector('button.button-success, button[type="submit"], input[type="submit"]');if(Nn)gn("clicking native button",{text:Nn.textContent?.trim()}),Nn.click();else if(typeof Fn.requestSubmit=="function"){gn("no native btn, using requestSubmit");try{Fn.requestSubmit()}catch(Zn){gn("requestSubmit error",Zn.message),Fn.submit()}}else gn("no native btn, using form.submit()"),Fn.submit();setTimeout(function(){if(r.submitting&&location.pathname.indexOf("/onepage")!==-1){gn("8s failsafe: still on /onepage, removing overlay"),r.submitting=!1,S.classList.remove("is-loading");var Zn=document.getElementById("mm-op-overlay");Zn&&Zn.remove(),x.classList.remove("mm-shadow-mode"),n&&(n.style.display="none")}},8e3),setTimeout(function(){x.classList.remove("mm-shadow-mode"),n&&(n.style.display="none")},600)}function gt(){r.submitting=!1,S.classList.remove("is-loading"),S.removeAttribute("aria-busy");var mn=S.querySelector(".mm-op-finalizar-label");mn&&(mn.textContent="Finalizar compra");var An=document.getElementById("mm-op-overlay");An&&An.remove()}function zt(){var mn=Date.now(),An=1e4;(function Fn(){var jn=document.getElementById("pag-cartao-token-mp"),Nn=jn?(jn.value||"").trim():"",Zn=Nn&&Nn!=="loading..."&&Nn.length>10;if(Zn){gn("fallback: token ready"),ot();return}if(Date.now()-mn>=An){gn("fallback: timeout",{lastVal:Nn}),ot();return}setTimeout(Fn,200)})()}function Bt(){if(gn("generateMpTokenAndSubmit() start"),typeof Mercadopago>"u"){gn("Mercadopago global missing, falling back to wait strategy"),zt();return}var mn=document.getElementById("pag-cartao-token-mp"),An=mn?(mn.value||"").trim():"";if(An&&An!=="loading..."&&An.length>10){gn("token already present, submitting",{len:An.length}),ot();return}var Fn=(document.getElementById("mm-pay-card-num")?.value||"").replace(/\D/g,""),jn=(document.getElementById("mm-pay-card-exp")?.value||"").replace(/\D/g,""),Nn=(document.getElementById("mm-pay-card-cvv")?.value||"").replace(/\D/g,""),Zn=(document.getElementById("mm-pay-card-name")?.value||"").trim(),qt=(t&&t.cpf||document.getElementById("mm-op-cpf")?.value||"").replace(/\D/g,"");if(!Fn||!jn||!Nn||!Zn||!qt){gn("missing card fields",{num:Fn.length,exp:jn.length,cvv:Nn.length,name:!!Zn,doc:qt.length}),alert("Preencha todos os dados do cartão antes de finalizar."),gt();return}var At=jn.slice(0,2),Ft=jn.length===4?"20"+jn.slice(2):jn.slice(2);gn("calling Mercadopago.createToken",{numLen:Fn.length,month:At,year:Ft});try{Mercadopago.createToken({cardNumber:Fn,securityCode:Nn,cardExpirationMonth:At,cardExpirationYear:Ft,cardholderName:Zn,docType:"CPF",docNumber:qt},function(yt,Qn){if(gn("createToken callback",{status:yt,hasId:!!(Qn&&Qn.id),err:Qn&&Qn.error}),yt===200||yt===201){if(mn){var Lt=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;Lt.call(mn,Qn.id),mn.dispatchEvent(new Event("input",{bubbles:!0})),mn.dispatchEvent(new Event("change",{bubbles:!0}))}ot()}else{var Tt="Não foi possível validar os dados do cartão.";Qn&&Qn.cause&&Qn.cause[0]&&Qn.cause[0].description&&(Tt=Qn.cause[0].description),alert(Tt),gt()}})}catch(yt){gn("createToken exception",yt.message),zt()}}w==="cartao"?Bt():setTimeout(ot,500)}}if(q){let t=function(n){if(n=n||0,n>30){a();return}var e=x.querySelector("#cep, .box-area-dados, #nome-completo_2");e||n>8?a():setTimeout(function(){t(n+1)},250)},a=function(){var n=en(),e=Q.get("mm_user_email")||"";Q.remove("mm_checkout_mode"),typeof window._mmDraftDebug>"u"&&(window._mmDraftDebug=!0),dt(n,e),l();var r=Yn();n&&n.shipping!==null&&n.shipping!==void 0&&Pn({value:n.shipping,name:n.shippingName||"",deadline:n.shippingDeadline||"",city:n.shippingCity||"",options:n.shippingOptions||[]});try{var s=Array.from(x.querySelectorAll("a, button")).find(function(y){var B=(y.textContent||"").toLowerCase();return B.indexOf("sem cadastro")!==-1&&y.offsetParent!==null});s&&!s.classList.contains("active")&&s.click()}catch{}(!n||!n.items||n.items.length===0)&&lt(function(y){y&&y.items&&y.items.length>0&&fn(y)});var f=Q.get(P);if(f&&f.length===8){var v=document.getElementById("mm-op-cep");v&&(v.value=yn(f),setTimeout(function(){c(f)},400))}setTimeout(function(){if(!("ontouchstart"in window))for(var y=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep"],B=0;B<y.length;B++){var _=document.getElementById(y[B]);if(_&&!_.value){_.focus();break}}},350)};t()}if(C){document.documentElement.classList.remove("mm-cart-loading");var pn=x.querySelector('input[placeholder*="numero do cart" i]');pn&&(pn.inputMode="numeric");var Y=x.querySelector('input[placeholder*="000" i]');Y&&(!Y.maxLength||Y.maxLength<=4)&&(Y.inputMode="numeric")}setTimeout(function(){document.documentElement.classList.contains("mm-cart-loading")&&(console.warn("[mm-cart] failsafe: removing mm-cart-loading after 2s timeout"),document.documentElement.classList.remove("mm-cart-loading"))},2e3)})()})();
