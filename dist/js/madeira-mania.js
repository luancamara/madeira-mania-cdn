(function(){"use strict";(function(){if(!document.getElementById("mm-global-css")){var y=document.createElement("style");y.id="mm-global-css",y.textContent=`/* =============================================
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
}
/* Animação de ENTRADA — escopada a :not(.swal2-hide) pra NÃO sobrescrever a
   animação de SAÍDA do SweetAlert2. O override anterior (animation !important no
   popup, sempre) bloqueava o @keyframes swal2-hide: o animationend de fechar
   nunca disparava, então ao clicar fora o backdrop sumia (swal2-backdrop-hide)
   mas o popup ficava órfão na tela. Com o :not(.swal2-hide), no fechamento o
   swal2-hide assume e o swal2 remove o popup normalmente. */
.popup-adicionado-ao-carrinho.swal2-popup:not(.swal2-hide) {
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

/* =============================================
   "NOSSAS CATEGORIAS" — componente-id-CbvCGKvalN (swiper de círculos)
   Bug NATIVO do Magazord (reproduz com bundle bloqueado): o Swiper mede a
   altura dos slides cedo demais (antes das imagens) e trava .swiper-wrapper /
   .swiper-slide em ~73px (altura do label de texto). Como o slide é flex, o
   <a> estica pra 73px e a <figure>/<img> de 224px transbordam e são cortadas.
   Fix: forçar altura auto na cadeia swiper→wrapper→slide→a pra caber o círculo.
   Probed 2026-06-26: img 224px, slide/wrapper colapsados em 73px.
   ============================================= */
.componente-id-CbvCGKvalN .swiper,
.componente-id-CbvCGKvalN .swiper-initialized,
.componente-id-CbvCGKvalN .swiper-wrapper,
.componente-id-CbvCGKvalN .swiper-slide,
.componente-id-CbvCGKvalN .swiper-slide > a {
  height: auto !important;
}
/* Quebra a corrente de flex-stretch: wrapper e slide param de esticar os
   filhos pra altura colapsada (73px), deixando cada slide com a altura do
   próprio conteúdo (círculo + label) — responsivo, sem hardcode. */
.componente-id-CbvCGKvalN .swiper-wrapper,
.componente-id-CbvCGKvalN .swiper-slide {
  align-items: flex-start !important;
}
/* Rede de segurança contra a corrida lazy-load x Swiper recalc no desktop:
   piso de altura que impede o colapso em 73px (círculo ~224 + label ~29). */
@media (min-width: 769px) {
  .componente-id-CbvCGKvalN .swiper,
  .componente-id-CbvCGKvalN .swiper-wrapper,
  .componente-id-CbvCGKvalN .swiper-slide,
  .componente-id-CbvCGKvalN .swiper-slide > a {
    min-height: 253px !important;
  }
}
`,document.head.appendChild(y)}})(),(function(){if(!document.getElementById("mm-produto-css")){var y=document.createElement("style");y.id="mm-produto-css",y.textContent=`/* =============================================
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
`,document.head.appendChild(y)}})(),(function(){if(!document.getElementById("mm-variacoes-css")){var y=document.createElement("style");y.id="mm-variacoes-css",y.textContent=`/* ============================================
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
}`,document.head.appendChild(y)}})(),(function(){if(!document.getElementById("mm-cart-sheet-css")){var y=document.createElement("style");y.id="mm-cart-sheet-css",y.textContent=`/* =============================================
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
   TOPBAR MARQUEE acima do drawer (BUG: barra "ENTREGA EM ATÉ 72H" por cima)

   O Magazord renderiza a marquee promocional como \`.topbar-marquee\` com
   \`position:fixed; z-index:9999\`. Nosso drawer desktop fica em z-index 200 e
   o scrim em 150 — logo a marquee (9999) PINTA POR CIMA do drawer aberto.
   No mobile a overlay React também é z-[9999] (empate resolvido por ordem DOM).

   Fix reativo via :has() — sem mexer em nenhum z-index nosso (zero risco de
   cascata): enquanto QUALQUER drawer (desktop .mm-drawer-open OU overlay mobile
   .translate-x-[0]) estiver aberto, escondemos a marquee. Ela reaparece sozinha
   ao fechar. Validado live: marquee some ao abrir, volta ao fechar.
   ========================================================================== */
html:has(.carrinho-rapido-ctn.mm-drawer-open) .topbar-marquee,
html:has(#cart-preview-area > div[class*="z-[9999]"].translate-x-\\[0\\]) .topbar-marquee {
  display: none !important;
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
/* Carrinho vazio: esconde o rodapé (total/CTA) DETERMINÍSTICO via CSS.
   O mmDeleteItem já faz display:none inline, mas remoções por outros caminhos
   (qty-stepper até 0, re-render do Magazord) podiam deixar o rodapé com TOTAL
   ESTALE visível (bug reportado: "R$ 1.081,79 + Finalizar Compra" no vazio).
   Enquanto a empty-enhancement estiver ativa, o rodapé fica escondido. */
.content-cart.mm-cart-has-empty-enhancement > .area-finalizar-compra,
.content-cart.mm-cart-has-empty-enhancement > .box-total-btn,
.content-cart.mm-cart-has-empty-enhancement .area-finalizar-compra,
.content-cart.mm-cart-has-empty-enhancement .box-total-btn {
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

/* O Magazord também entrega a estrutura pós-AJAX sem o wrapper .cart-items:
   .content-cart > .cart-item* + .box-total-btn. Nesse formato, manter o
   overflow:hidden faz os cards encolherem e o footer cobrir o último item.
   O próprio content vira o scroll container; não movemos nós controlados pelo
   React. A variante com .cart-items continua usando a regra acima. */
@media (min-width: 769px) {
  .carrinho-rapido-ctn .content-cart:not(:has(> .cart-items)):has(> .cart-item) {
    overflow-y: auto !important;
    overflow-x: hidden !important;
    overscroll-behavior-y: contain !important;
    scrollbar-gutter: stable !important;
    -webkit-overflow-scrolling: touch !important;
  }

  .carrinho-rapido-ctn .content-cart:not(:has(> .cart-items)) > .cart-item {
    flex: 0 0 auto !important;
  }

  .carrinho-rapido-ctn .content-cart:not(:has(> .cart-items)) > .box-total-btn {
    position: sticky !important;
    bottom: 0 !important;
    z-index: 3 !important;
  }
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
.mm-ship-scope .mm-cart-ship {
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
.mm-ship-scope .mm-cart-ship-label {
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
.mm-ship-scope .mm-cart-ship-location {
  display: flex !important;
  flex-direction: column !important;
  gap: 3px !important;
  padding-bottom: 8px !important;
}
.mm-ship-scope .mm-cart-ship-location-value {
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
.mm-ship-scope .mm-cart-ship-location-value > span:first-child {
  min-width: 0 !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
}
.mm-ship-scope .mm-cart-ship-deadline {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  color: #6B7280 !important;
  line-height: 1.3 !important;
}

/* ---- Edit CEP action (text link, extended touch area) ---- */
.mm-ship-scope .mm-cart-ship-edit {
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
.mm-ship-scope .mm-cart-ship-edit:hover {
  color: #3D4733 !important;
  text-decoration: underline !important;
  text-underline-offset: 3px !important;
}
.mm-ship-scope .mm-cart-ship-edit:focus-visible {
  outline: 2px solid #4B664A !important;
  outline-offset: 2px !important;
  border-radius: 2px !important;
}

/* ---- Inline CEP edit form ---- */
.mm-ship-scope .mm-cart-ship-cep-form {
  display: flex !important;
  align-items: center !important;
  gap: 6px !important;
  margin-top: 4px !important;
}
.mm-ship-scope .mm-cart-ship-cep-input {
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
.mm-ship-scope .mm-cart-ship-cep-input::placeholder {
  color: #9CA3AF !important;
  font-weight: 500 !important;
}
.mm-ship-scope .mm-cart-ship-cep-input:focus {
  outline: none !important;
  border-color: #4B664A !important;
  box-shadow: 0 0 0 3px rgba(75, 102, 74, 0.14) !important;
}
.mm-ship-scope .mm-cart-ship-cep-input.is-invalid {
  border-color: #DC2626 !important;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.12) !important;
}
.mm-ship-scope .mm-cart-ship-cep-save {
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
.mm-ship-scope .mm-cart-ship-cep-save:hover { background: #3D4733 !important; }
.mm-ship-scope .mm-cart-ship-cep-save:focus-visible {
  outline: 2px solid #4B664A !important;
  outline-offset: 2px !important;
}
.mm-ship-scope .mm-cart-ship-cep-cancel {
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
.mm-ship-scope .mm-cart-ship-cep-cancel:hover {
  background: #F3F4F6 !important;
  color: #121212 !important;
}
.mm-ship-scope .mm-cart-ship-cep-cancel svg {
  width: 14px !important;
  height: 14px !important;
}

/* ---- Progress + nudge group (no separate FRETE row — shipping is folded into total) ---- */
.mm-ship-scope .mm-cart-ship-progress {
  display: flex !important;
  flex-direction: column !important;
  gap: 6px !important;
  padding-bottom: 8px !important;
  border-bottom: 1px solid #EFEFEF !important;
}

/* ---- Minimal progress bar (2px thin line, olive fill) ---- */
.mm-ship-scope .mm-cart-ship-bar {
  height: 2px !important;
  width: 100% !important;
  background: #EFEFEF !important;
  border-radius: 1px !important;
  overflow: hidden !important;
}
.mm-ship-scope .mm-cart-ship-bar-fill {
  height: 100% !important;
  background: #4B664A !important;
  border-radius: 1px !important;
  transition: width 520ms cubic-bezier(0.16, 1, 0.3, 1) !important;
}

/* ---- Nudge text (loss aversion / free confirmation) ---- */
.mm-ship-scope .mm-cart-ship-nudge {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  color: #6B7280 !important;
  line-height: 1.3 !important;
  margin: 0 !important;
}
.mm-ship-scope .mm-cart-ship-nudge strong {
  color: #121212 !important;
  font-weight: 600 !important;
  font-variant-numeric: tabular-nums !important;
}
.mm-ship-scope .mm-cart-ship-nudge.is-free {
  color: #4B664A !important;
  font-weight: 600 !important;
  display: flex !important;
  align-items: center !important;
  gap: 6px !important;
}
.mm-ship-scope .mm-cart-ship-nudge.is-free svg {
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
.mm-ship-scope .mm-cart-ship.mm-just-unlocked {
  animation: mm-cart-ship-celebrate 900ms cubic-bezier(0.34, 1.56, 0.64, 1) both !important;
}
@keyframes mm-cart-ship-celebrate {
  0%   { transform: scale(1); }
  35%  { transform: scale(1.025); }
  100% { transform: scale(1); }
}
.mm-ship-scope .mm-cart-ship.mm-just-unlocked .mm-cart-ship-nudge {
  animation: mm-cart-pop 720ms cubic-bezier(0.34, 1.56, 0.64, 1) both !important;
}
.mm-ship-scope .mm-cart-ship.mm-just-unlocked .mm-cart-ship-bar-fill {
  animation: mm-cart-ship-fill-flash 900ms ease-out both !important;
}
@keyframes mm-cart-ship-fill-flash {
  0%   { box-shadow: 0 0 0 0 rgba(75, 102, 74, 0.5); }
  60%  { box-shadow: 0 0 0 4px rgba(75, 102, 74, 0); }
  100% { box-shadow: 0 0 0 0 rgba(75, 102, 74, 0); }
}

/* "Você economiza R$ X com PIX" — single subtle line, sits between
   .linha-total and .valor-final.card */
.carrinho-rapido-ctn .mm-cart-savings,
#cart-preview-area .mm-cart-savings-mobile {
  display: block !important;
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  color: #4B664A !important;
  font-variant-numeric: tabular-nums !important;
  margin-top: 2px !important;
  line-height: 1.3 !important;
}
/* Bloco de frete dentro do overlay mobile: respiro vertical já que o footer
   nativo é compacto (p-space-8). O .mm-cart-ship herda as regras .mm-ship-scope. */
#cart-preview-area .mm-cart-ship {
  margin-bottom: 10px !important;
  padding-bottom: 10px !important;
  border-bottom: 1px solid #ECECEC !important;
}
/* Frete value strong inline in deadline line */
.mm-ship-scope .mm-cart-ship-deadline strong {
  color: #121212 !important;
  font-weight: 600 !important;
  font-variant-numeric: tabular-nums !important;
}
/* Inline shipping spinner (ring-resize style) — replaces the frete value
   text during re-fetch. */
.mm-ship-scope .mm-cart-ship-spinner {
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

/* ==========================================================================
   ESTRUTURA B desktop (.area-finalizar-compra após ADD pela vitrine):
   esconde o rodapé cru "PIX R$X / Cartão R$Y / 12x" (carrinho ERRADO) e
   estiliza nosso .mm-cart-total-b (injetado por mmRenderStructureBTotal) com
   o MESMO visual da estrutura A (.box-total-btn .linha-total): "Total R$X
   No PIX / Você economiza / ou 12x". Espelha as regras da estrutura A acima.
   ========================================================================== */
.carrinho-rapido-ctn .area-finalizar-compra .mm-native-pay-hidden {
  display: none !important;
}
.carrinho-rapido-ctn .mm-cart-total-b {
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  width: 100% !important;
  gap: 0 !important;
  padding: 2px 0 !important;
}
.carrinho-rapido-ctn .mm-cart-total-b .mm-tb-label {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 10px !important;
  font-weight: 600 !important;
  color: #6B7280 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  margin: 0 0 6px !important;
  line-height: 1 !important;
}
.carrinho-rapido-ctn .mm-cart-total-b .mm-tb-row {
  display: flex !important;
  flex-direction: row !important;
  align-items: baseline !important;
  gap: 10px !important;
  width: 100% !important;
}
.carrinho-rapido-ctn .mm-cart-total-b .mm-tb-value {
  font-family: 'Libre Baskerville', Georgia, serif !important;
  font-size: 32px !important;
  font-weight: 700 !important;
  color: #121212 !important;
  letter-spacing: -0.01em !important;
  line-height: 1.05 !important;
  font-variant-numeric: tabular-nums !important;
}
.carrinho-rapido-ctn .mm-cart-total-b .mm-tb-pix {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  color: #4B664A !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  font-variant-numeric: tabular-nums !important;
}
.carrinho-rapido-ctn .mm-cart-total-b .mm-tb-savings {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  color: #4B664A !important;
  font-variant-numeric: tabular-nums !important;
  margin-top: 2px !important;
  line-height: 1.3 !important;
}
.carrinho-rapido-ctn .mm-cart-total-b .mm-tb-parcela {
  font-family: 'Poppins', system-ui, sans-serif !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  color: #6B7280 !important;
  line-height: 1.3 !important;
  font-variant-numeric: tabular-nums !important;
  margin-top: 1px !important;
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
`,document.head.appendChild(y)}})(),(function(){if(!document.getElementById("mm-checkout-cro-css")){var y=document.createElement("style");y.id="mm-checkout-cro-css",y.textContent=`/* =============================================
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

/* ---- Cupom sempre-aberto: label + estados ---- */
.mm-coupon-label {
  display: flex;
  align-items: center;
  gap: var(--mm-s2);
  margin-bottom: var(--mm-s2);
  font-family: var(--mm-sans);
  font-size: 13px;
  font-weight: 600;
  color: var(--mm-fg-soft);
}

.mm-coupon-label svg {
  flex-shrink: 0;
  color: var(--mm-olive);
}

/* Estado ocupado (aplicando/removendo) — trava interação e sinaliza carregamento */
.mm-coupon.is-busy {
  opacity: 0.6;
  pointer-events: none;
}

.mm-coupon.is-busy .mm-btn-secondary {
  position: relative;
  color: transparent !important;
}

.mm-coupon.is-busy .mm-btn-secondary::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  margin: -8px 0 0 -8px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-top-color: #fff;
  border-radius: 50%;
  animation: mm-load-spin 0.6s linear infinite;
}

.mm-coupon-error {
  margin: var(--mm-s2) 0 0;
  font-family: var(--mm-sans);
  font-size: 12px;
  font-weight: 500;
  color: var(--mm-danger);
}

.mm-coupon-error[hidden] {
  display: none;
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

/* ===== CLIENTE LOGADO — card de identidade + seletor de endereços ===== */
#mm-layout .mm-op-ident {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
  padding: 18px 22px;
}
#mm-layout .mm-op-ident > .mm-op-ident-avatar {
  flex: 0 0 42px;
  width: 42px !important;
  height: 42px !important;
  min-width: 42px;
  max-width: 42px;
  box-sizing: border-box;
  border-radius: 50%;
  background: var(--mm-cta);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: 18px;
  font-weight: 700;
}
#mm-layout .mm-op-ident-info {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
  flex: 1 1 auto;
}
#mm-layout .mm-op-ident-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--mm-cta);
}
#mm-layout .mm-op-ident-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--mm-fg);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#mm-layout .mm-op-ident-email {
  font-size: 12.5px;
  color: var(--mm-fg-subtle);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#mm-layout .mm-op-ident-switch {
  flex: 0 0 auto;
  font-size: 12.5px;
  font-weight: 500;
  color: var(--mm-fg-subtle);
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 8px;
  transition: background 160ms ease, color 160ms ease;
}
#mm-layout .mm-op-ident-switch:hover {
  background: var(--mm-border-soft);
  color: var(--mm-fg);
}

/* seletor de endereços salvos */
#mm-layout .mm-op-addr-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
#mm-layout .mm-op-addr {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border: 1.5px solid var(--mm-border);
  border-radius: 12px;
  cursor: pointer;
  transition: border-color 160ms ease, background 160ms ease;
}
#mm-layout .mm-op-addr:hover { border-color: var(--mm-fg-muted); }
#mm-layout .mm-op-addr.is-selected {
  border-color: var(--mm-cta);
  background: var(--mm-cta-soft);
}
#mm-layout .mm-op-addr input[type="radio"] {
  position: absolute !important;
  width: 0 !important;
  height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  opacity: 0 !important;
  pointer-events: none !important;
  -webkit-appearance: none !important;
  appearance: none !important;
}
#mm-layout .mm-op-addr > .mm-op-addr-check {
  flex: 0 0 20px;
  width: 20px !important;
  height: 20px !important;
  min-width: 20px;
  max-width: 20px;
  box-sizing: border-box;
  margin-top: 1px;
  border-radius: 50%;
  border: 2px solid var(--mm-fg-muted);
  transition: border-color 160ms ease;
}
#mm-layout .mm-op-addr.is-selected .mm-op-addr-check {
  border-color: var(--mm-cta);
  background:
    radial-gradient(circle at center, var(--mm-cta) 0 5px, transparent 6px);
}
#mm-layout .mm-op-addr-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
  font-size: 13px;
  line-height: 1.4;
  color: var(--mm-fg-meta);
}
#mm-layout .mm-op-addr-body strong {
  font-size: 14px;
  font-weight: 600;
  color: var(--mm-fg);
}
#mm-layout .mm-op-addr-del {
  flex: 0 0 auto;
  align-self: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--mm-fg-muted);
  border-radius: 8px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 160ms ease, color 160ms ease, background 160ms ease;
}
#mm-layout .mm-op-addr:hover .mm-op-addr-del,
#mm-layout .mm-op-addr.is-selected .mm-op-addr-del { opacity: 1; }
#mm-layout .mm-op-addr-del:hover {
  color: var(--mm-danger);
  background: rgba(220, 38, 38, 0.08);
}
/* touch: sempre visível (não há hover) */
@media (hover: none) {
  #mm-layout .mm-op-addr-del { opacity: 1; }
}

/* ===== /checkout/done — comprovante + QR PIX ===== */
#mm-layout.mm-done-layout .mm-done-main {
  max-width: 1040px;
  margin: 0 auto;
  padding: 28px 20px 40px;
}
#mm-layout .mm-done-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  margin-bottom: 24px;
}
#mm-layout .mm-done-hero-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--mm-cta);
  color: #fff;
  box-shadow: 0 6px 18px rgba(27, 122, 69, 0.28);
}
#mm-layout .mm-done-h1 {
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: 26px;
  font-weight: 700;
  color: var(--mm-fg);
  margin: 4px 0 0;
  letter-spacing: -0.01em;
}
#mm-layout .mm-done-hero-sub {
  font-size: 14px;
  color: var(--mm-fg-meta);
  margin: 0;
}
#mm-layout .mm-done-hero-sub strong { color: var(--mm-fg); }

#mm-layout .mm-done-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 20px;
  align-items: start;
}
@media (max-width: 860px) {
  #mm-layout .mm-done-grid { grid-template-columns: 1fr; }
}

#mm-layout .mm-done-pix-card,
#mm-layout .mm-done-card,
#mm-layout .mm-done-total {
  background: var(--mm-card);
  border: 1px solid var(--mm-border);
  border-radius: 16px;
  box-shadow: var(--mm-shadow);
}
#mm-layout .mm-done-pix-card {
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
#mm-layout .mm-done-pix-head {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: 17px;
  font-weight: 700;
  color: var(--mm-fg);
  margin-bottom: 18px;
}
/* Ícones do done: uma regra global do checkout colapsa SVG sem tamanho fixo
   (mesmo bug do radio/avatar/canvas) — forçamos dimensões com !important. */
#mm-layout .mm-done-pix-head > svg {
  width: 22px !important; height: 22px !important;
  flex: 0 0 auto; color: var(--mm-cta);
}
#mm-layout .mm-done-hero-check > svg { width: 28px !important; height: 28px !important; }
#mm-layout .mm-done-copy > svg { width: 18px !important; height: 18px !important; flex: 0 0 auto; }
#mm-layout .mm-done-pix-note > svg { width: 15px !important; height: 15px !important; flex: 0 0 auto; }
#mm-layout .mm-done-help > svg { width: 22px !important; height: 22px !important; flex: 0 0 auto; }
#mm-layout .mm-done-pix-status {
  margin-left: auto;
  font-family: 'Poppins', system-ui, sans-serif;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #B7791F;
  background: #FEF6E7;
  border-radius: 999px;
  padding: 4px 10px;
}
#mm-layout .mm-done-qr {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  background: #fff;
  border: 1px solid var(--mm-border-soft);
  border-radius: 12px;
}
#mm-layout .mm-done-qr canvas,
#mm-layout .mm-done-qr img {
  display: block;
  width: 220px !important;
  height: 220px !important;
  max-width: 60vw;
}
#mm-layout .mm-done-copy {
  margin-top: 18px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 18px;
  border: 1.5px solid var(--mm-cta);
  border-radius: var(--mm-r-full, 999px);
  background: var(--mm-cta-soft);
  color: var(--mm-cta-dark);
  font-family: 'Poppins', system-ui, sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 160ms ease, color 160ms ease;
}
#mm-layout .mm-done-copy:hover { background: var(--mm-cta); color: #fff; }
#mm-layout .mm-done-copy.is-copied { background: var(--mm-cta); color: #fff; border-color: var(--mm-cta); }

/* contador de expiração do QR */
#mm-layout .mm-done-timer {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 16px;
  padding: 8px 14px;
  border-radius: 999px;
  background: #F3F4F6;
  color: var(--mm-fg-meta);
  font-size: 13px;
  font-weight: 500;
}
#mm-layout .mm-done-timer > svg { width: 16px !important; height: 16px !important; flex: 0 0 auto; color: var(--mm-fg-subtle); }
#mm-layout .mm-done-timer strong {
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: var(--mm-fg);
}
#mm-layout .mm-done-timer.is-urgent { background: #FEF2F2; color: #B42318; }
#mm-layout .mm-done-timer.is-urgent > svg { color: #DC2626; }
#mm-layout .mm-done-timer.is-urgent strong { color: #B42318; }
#mm-layout .mm-done-timer.is-expired { background: #FEF2F2; color: #B42318; flex-wrap: wrap; justify-content: center; }
#mm-layout .mm-done-timer-renew {
  border: none;
  background: var(--mm-cta);
  color: #fff;
  font-family: 'Poppins', system-ui, sans-serif;
  font-size: 12.5px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 999px;
  cursor: pointer;
}
#mm-layout .mm-done-timer-renew:hover { background: var(--mm-cta-dark); }
#mm-layout .mm-done-pix-note {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 14px 0 0;
  font-size: 12px;
  line-height: 1.4;
  color: var(--mm-fg-subtle);
}
#mm-layout .mm-done-pix-note svg { flex-shrink: 0; }
#mm-layout .mm-done-nopix { text-align: center; color: var(--mm-fg-meta); font-size: 14px; }

#mm-layout .mm-done-right {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
#mm-layout .mm-done-card { padding: 22px 24px; }
#mm-layout .mm-done-steps {
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13.5px;
  line-height: 1.45;
  color: var(--mm-fg-meta);
}
#mm-layout .mm-done-steps strong { color: var(--mm-fg); }
#mm-layout .mm-done-total {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 18px 24px;
}
#mm-layout .mm-done-total-label {
  font-size: 13px;
  color: var(--mm-fg-subtle);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 600;
}
#mm-layout .mm-done-total-value {
  margin-left: auto;
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--mm-fg);
}
#mm-layout .mm-done-total-sub { font-size: 12px; color: var(--mm-cta-dark); font-weight: 600; }
#mm-layout .mm-done-cta {
  justify-content: center;
  text-decoration: none;
}
#mm-layout .mm-done-help {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid #C9E7D3;
  background: #EAF7EF;
  color: #128C4B;
  text-decoration: none;
  font-size: 13px;
  line-height: 1.35;
  transition: background 160ms ease;
}
#mm-layout .mm-done-help:hover { background: #DDF1E5; }
#mm-layout .mm-done-help svg { color: #25D366; }
#mm-layout .mm-done-help strong { display: block; color: #0E7A40; font-weight: 600; }
#mm-layout .mm-done-back {
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  color: var(--mm-fg-subtle);
  text-decoration: none;
  padding: 4px;
}
#mm-layout .mm-done-back:hover { color: var(--mm-fg); text-decoration: underline; }
#mm-layout .mm-done-trust {
  margin-top: 4px;
  justify-content: center;
}
#mm-layout .mm-op-addr-new {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  font-size: 13px;
  font-weight: 500;
  color: var(--mm-cta);
  text-decoration: none;
}
#mm-layout .mm-op-addr-new svg { width: 16px; height: 16px; }
#mm-layout .mm-op-addr-new:hover { text-decoration: underline; }

#mm-layout .mm-op-addr-extra {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}
#mm-layout .mm-op-addr-extra[hidden] { display: none; }
#mm-layout .mm-op-addr-more {
  margin-top: 10px;
  width: 100%;
  padding: 10px 14px;
  border: 1px dashed var(--mm-border);
  border-radius: 10px;
  background: transparent;
  color: var(--mm-fg-subtle);
  font-family: 'Poppins', system-ui, sans-serif;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 160ms ease, color 160ms ease;
}
#mm-layout .mm-op-addr-more:hover {
  border-color: var(--mm-fg-muted);
  color: var(--mm-fg);
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
`,document.head.appendChild(y)}})(),(function(){if(!document.getElementById("mm-pedidos-css")){var y=document.createElement("style");y.id="mm-pedidos-css",y.textContent=`/* =============================================
   PEDIDOS — Consultar Pedido (/login) + Resultado (/cliente/pedidos)
   Linguagem visual do checkout (checkout-cro.css): Libre Baskerville pra
   títulos/valores, Poppins pro corpo, eyebrows uppercase 11px/0.08em,
   botões pill, cards r16 com hairline #E7E7E7, verde CTA #1b7a45 pontual.
   Gated por classes que o pedidos.js põe no <html> SÓ depois de rodar:
   .mm-consulta-on (login) e .mm-ped-on (resultado). JS falhou → nativo.
   ============================================= */

/* tokens (mesma escala do #mm-layout do checkout) */
html.mm-consulta-on,
html.mm-ped-on {
  --mm-olive:       #4B664A;
  --mm-olive-dark:  #3D4733;
  --mm-olive-soft:  rgba(75, 102, 74, 0.08);
  --mm-cta:         #1b7a45;
  --mm-cta-dark:    #155a33;
  --mm-cta-soft:    rgba(27, 122, 69, 0.08);
  --mm-bg:          #FAFAFA;
  --mm-card:        #FFFFFF;
  --mm-border:      #E7E7E7;
  --mm-border-soft: #F0F0F0;
  --mm-fg:          #121212;
  --mm-fg-soft:     #374151;
  --mm-fg-meta:     #4B5563;
  --mm-fg-subtle:   #6B7280;
  --mm-fg-muted:    #9CA3AF;
  --mm-danger:      #DC2626;
  --mm-sans:        'Poppins', system-ui, -apple-system, sans-serif;
  --mm-serif:       'Libre Baskerville', Georgia, serif;
  --mm-r:           8px;
  --mm-r-lg:        16px;
  --mm-r-full:      9999px;
  --mm-shadow-sm:   0 1px 2px rgba(17, 24, 39, 0.04);
  --mm-tr-fast:     180ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* ============================================================
   PARTE 1 — FORM CONSULTAR PEDIDO (/login)
   ============================================================ */

html.mm-consulta-on body { background: #EFEFED !important; }
html.mm-consulta-on #main-area { background: #EFEFED !important; }
html.mm-consulta-on, html.mm-consulta-on body,
html.mm-ped-on, html.mm-ped-on body { overflow-x: clip; }

.mm-consulta-on #form-consulta-pedido {
  font-family: var(--mm-sans);
}

/* Destaque ao chegar via "Rastrear pedido" (#rastrear) — deixa claro que é
   aqui que se rastreia, mesmo estando na /login. */
#form-consulta-pedido.mm-cp-flash {
  animation: mm-cp-flash 2.2s ease-out 1;
  border-radius: 16px;
}
@keyframes mm-cp-flash {
  0%   { box-shadow: 0 0 0 0 rgba(27, 122, 69, 0); }
  18%  { box-shadow: 0 0 0 4px rgba(27, 122, 69, 0.38); }
  100% { box-shadow: 0 0 0 0 rgba(27, 122, 69, 0); }
}

/* Aviso pra quem chega LOGADO no form de consulta (guest-only): o Magazord
   rejeita pedido em sessão logada — manda pra lista real de pedidos. */
.mm-cp-logged {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  margin: 0 0 18px;
  padding: 14px 16px;
  border: 1px solid var(--mm-border);
  border-left: 3px solid var(--mm-cta);
  border-radius: 12px;
  background: var(--mm-cta-soft);
  font-family: var(--mm-sans);
}
.mm-cp-logged strong {
  font-size: 14px;
  font-weight: 600;
  color: var(--mm-fg);
}
.mm-cp-logged span {
  font-size: 12.5px;
  line-height: 1.45;
  color: var(--mm-fg-meta);
}
.mm-cp-logged-cta {
  margin-top: 4px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 16px;
  border-radius: var(--mm-r-full);
  background: var(--mm-cta);
  color: #fff !important;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: background var(--mm-tr-fast);
}
.mm-cp-logged-cta::after { content: '→'; font-weight: 400; }
.mm-cp-logged-cta:hover { background: var(--mm-cta-dark); }

/* header do card: voltar + título serif */
.mm-consulta-on #form-consulta-pedido .cancel-consulta,
.mm-consulta-on #form-consulta-pedido .cancel-consulta span,
.mm-consulta-on .login-header .btn-voltar,
.mm-consulta-on .login-header .btn-voltar span {
  font-family: var(--mm-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--mm-fg-subtle) !important;
  transition: color var(--mm-tr-fast);
}
.mm-consulta-on #form-consulta-pedido .cancel-consulta:hover span,
.mm-consulta-on .login-header .btn-voltar:hover span {
  color: var(--mm-fg) !important;
}
.mm-consulta-on #form-consulta-pedido .cancel-consulta svg,
.mm-consulta-on #form-consulta-pedido .cancel-consulta svg path,
.mm-consulta-on .login-header .btn-voltar svg,
.mm-consulta-on .login-header .btn-voltar svg path {
  stroke: var(--mm-fg-subtle) !important;
  fill: none !important;
}

/* header: voltar absoluto na linha do eyebrow (desktop); tudo centrado */
.mm-consulta-on #form-consulta-pedido .title-area {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  text-align: center;
  position: relative;
  padding-top: 24px;
}
.mm-consulta-on #form-consulta-pedido .title-area .cancel-consulta {
  position: absolute;
  left: 0;
  top: 22px;
  margin: 0;
}
@media (max-width: 768px) {
  .mm-consulta-on #form-consulta-pedido { padding: 0 20px 8px !important; box-sizing: border-box; }
  .mm-consulta-on #form-consulta-pedido .title-area { padding-top: 16px; }
  .mm-consulta-on #form-consulta-pedido .title-area .cancel-consulta {
    position: static;
    align-self: flex-start;
    margin: 0 0 14px;
  }
}

/* eyebrow injetada + título serif + subtítulo */
.mm-cp-eyebrow {
  display: block;
  font-family: var(--mm-sans);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mm-fg-muted);
  margin: 4px 0 6px;
}
.mm-consulta-on #form-consulta-pedido .title-area h2 {
  border: none !important;
  border-bottom: none !important;
  padding-bottom: 0 !important;
  margin-bottom: 10px !important;
  font-family: var(--mm-serif) !important;
  font-weight: 400 !important;
  font-size: clamp(26px, 3.2vw, 34px) !important;
  line-height: 1.15 !important;
  letter-spacing: -0.01em !important;
  color: var(--mm-fg) !important;
}
.mm-consulta-on #form-consulta-pedido .title-area h3 {
  font-family: var(--mm-sans) !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  color: var(--mm-fg-subtle) !important;
  line-height: 1.5 !important;
  margin: 0 !important;
  text-wrap: balance;
}
.mm-consulta-on #form-consulta-pedido form { margin-top: 4px !important; }

/* form: mata floats nativos; empilha centrado */
.mm-consulta-on #form-consulta-pedido form {
  display: flex !important;
  flex-direction: column !important;
  gap: 12px;
  max-width: 480px;
  margin: 0 auto !important;
}
.mm-consulta-on #form-consulta-pedido form .line {
  float: none !important;
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
}
.mm-consulta-on #form-consulta-pedido .ipt-ctn { width: 100% !important; position: relative; }

/* ícones nativos dos campos (sprites azuis) fora */
.mm-consulta-on #form-consulta-pedido .ipt-ctn > span[class*="icon-"] {
  display: none !important;
}

/* campos: pill como o CEP do carrinho — borda hairline em repouso,
   inclusive quando a validação remota do Magazord marca como válido */
.mm-consulta-on #form-consulta-pedido .ipt-ctn input.field,
.mm-consulta-on #form-consulta-pedido .ipt-ctn input.field[remotevalidateresult],
.mm-consulta-on #form-consulta-pedido .ipt-ctn input.field.valid,
.mm-consulta-on #form-consulta-pedido .ipt-ctn input.field:not(:focus) {
  border-color: var(--mm-border) !important;
  box-shadow: none !important;
}
.mm-consulta-on #form-consulta-pedido .ipt-ctn input.field {
  width: 100% !important;
  max-width: 100% !important;
  height: 52px !important;
  box-sizing: border-box !important;
  font-family: var(--mm-sans) !important;
  font-size: 14px !important;
  color: var(--mm-fg) !important;
  background: var(--mm-card) !important;
  border: 1px solid var(--mm-border) !important;
  border-radius: var(--mm-r-full) !important;
  padding: 0 22px !important;
  transition: border-color var(--mm-tr-fast), box-shadow var(--mm-tr-fast);
}
.mm-consulta-on #form-consulta-pedido .ipt-ctn input.field::placeholder {
  color: var(--mm-fg-muted);
}
.mm-consulta-on #form-consulta-pedido .ipt-ctn input.field:focus,
.mm-consulta-on #form-consulta-pedido .ipt-ctn input.field[remotevalidateresult]:focus {
  border-color: var(--mm-cta) !important;
  box-shadow: 0 0 0 3px var(--mm-cta-soft) !important;
  outline: none !important;
}

/* micro-label eyebrow acima de cada campo (injetada via JS) */
.mm-consulta-on #form-consulta-pedido label.mm-cp-label {
  display: block;
  font-family: var(--mm-sans) !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  color: var(--mm-fg-muted) !important;
  line-height: 1.3 !important;
  margin: 0 0 6px 22px !important;
  padding: 0 !important;
  text-align: left;
}

/* hint sob o nº do pedido */
.mm-cp-hint {
  display: block;
  text-wrap: balance;
  margin: 6px 22px 0;
  font-family: var(--mm-sans);
  font-size: 12px;
  line-height: 1.5;
  color: var(--mm-fg-subtle);
}

/* botão: pill verde com seta, padrão "Finalizar compra" */
.mm-consulta-on #form-consulta-pedido button.button-login {
  height: 52px !important;
  width: 100%;
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--mm-sans) !important;
  font-size: 15px !important;
  font-weight: 600 !important;
  color: #fff !important;
  background: var(--mm-cta) !important;
  border: none !important;
  border-radius: var(--mm-r-full) !important;
  letter-spacing: 0;
  cursor: pointer;
  transition: background var(--mm-tr-fast), transform var(--mm-tr-fast);
}
.mm-consulta-on #form-consulta-pedido button.button-login:hover { background: var(--mm-cta-dark) !important; }
.mm-consulta-on #form-consulta-pedido button.button-login:active { transform: scale(0.98); }
.mm-consulta-on #form-consulta-pedido button.button-login::after {
  content: '→';
  font-size: 16px;
  line-height: 1;
}
.mm-consulta-on #form-consulta-pedido button.button-login img { display: none !important; }

/* fallback WhatsApp: box tintada como a do carrinho */
.mm-cp-wa {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  max-width: 480px;
  margin: 18px auto 28px;
  padding: 14px 18px;
  background: var(--mm-cta-soft);
  border-radius: var(--mm-r-lg);
  font-family: var(--mm-sans);
  font-size: 13px;
  color: var(--mm-fg-soft);
}
.mm-cp-wa a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--mm-cta) !important;
  font-weight: 600;
  text-decoration: none;
}
.mm-cp-wa a:hover { text-decoration: underline; }
.mm-cp-wa svg { flex-shrink: 0; }

/* ============================================================
   PARTE 1B — /login UNIFICADO: card de login + card de consulta
   lado a lado (grid), consulta sempre visível (sem toggle).
   Estados internos do login (senha/cadastro/recovery/otp) intactos:
   nenhum reparent — só layout dos irmãos dentro de .page-login.
   ============================================================ */

html.mm-login-on #main-area { background: #EFEFED !important; }

.mm-login-on .page.page-login {
  display: grid !important;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 24px;
  align-items: stretch;
  max-width: 1060px;
  margin: 36px auto 52px !important;
  padding: 0 16px;
  box-sizing: border-box;
  width: 100% !important;
}

/* cards */
.mm-login-on .login-holder,
.mm-login-on #form-otp-code {
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  background: var(--mm-card) !important;
  border: 1px solid var(--mm-border) !important;
  border-radius: var(--mm-r-lg) !important;
  padding: 28px 32px !important;
  box-shadow: var(--mm-shadow-sm) !important;
  box-sizing: border-box;
}
.mm-login-on #form-consulta-pedido {
  display: flex !important; /* nativo esconde via inline style (toggle) */
  flex-direction: column !important;
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  background: var(--mm-card) !important;
  border: 1px solid var(--mm-border) !important;
  border-radius: var(--mm-r-lg) !important;
  padding: 28px 32px 6px !important;
  box-shadow: var(--mm-shadow-sm) !important;
  box-sizing: border-box;
}
.mm-login-on #form-consulta-pedido .mm-cp-wa { margin-top: auto !important; }
.mm-login-on #form-consulta-pedido form { margin-bottom: 18px !important; }

/* toggles e duplicatas somem: consulta agora é permanente */
.mm-login-on #btn-consulta,
.mm-login-on .button-consultar-pedido,
.mm-login-on #box-consulta-pedido,
.mm-login-on #form-consulta-pedido .cancel-consulta { display: none !important; }

/* header do login: eyebrow (injetada) + título serif; estados trocam o
   texto do h2 ("Acesse ou crie sua conta" → "Cadastre-se") e o estilo segue */
.mm-login-on .login-header {
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  gap: 0;
  margin-bottom: 14px;
  border: none !important;
  padding-bottom: 0 !important;
}
.mm-login-on .mm-lg-eyebrow { margin: 0 0 8px !important; }
.mm-login-on .login-header h2 { margin: 0 !important; }
.mm-login-on .login-holder .default-form-login h3,
.mm-login-on .login-holder .default-form-login .lbl,
.mm-login-on #form-consulta-pedido .title-area h3 { border: none !important; }
/* sub-título de estado ("Digite sua senha" etc.) e link de recovery */
.mm-login-on .login-holder .default-form-login h3 {
  font-family: var(--mm-sans) !important;
  font-size: 15px !important;
  font-weight: 600 !important;
  color: var(--mm-fg) !important;
  text-align: left !important;
}
.mm-login-on .login-holder .recovery-password-area {
  color: var(--mm-cta) !important;
  font-weight: 600;
  cursor: pointer;
}
.mm-login-on .login-header h2,
.mm-login-on .login-holder h2.title {
  font-family: var(--mm-serif) !important;
  font-weight: 400 !important;
  font-size: clamp(24px, 2.6vw, 30px) !important;
  line-height: 1.2 !important;
  letter-spacing: -0.01em !important;
  color: var(--mm-fg) !important;
  border: none !important;
  margin: 0 !important;
  padding: 0 !important;
}
.mm-login-on .login-header .btn-voltar {
  order: -1;
  margin-bottom: 10px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}
.mm-login-on .mm-lg-eyebrow {
  display: block;
  font-family: var(--mm-sans);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mm-fg-muted);
}

/* corpo do card de login: textos e campos em todos os estados */
.mm-login-on .login-holder .txt-informe,
.mm-login-on .login-holder p {
  font-family: var(--mm-sans);
  font-size: 13.5px;
  color: var(--mm-fg-subtle);
  line-height: 1.55;
}
.mm-login-on .login-holder .txt-informe {
  text-align: left !important;
  display: block;
  margin: 0 0 18px !important;
  padding: 0 !important;
}
.mm-login-on .login-holder .holder-input,
.mm-login-on .login-holder .suggest-domains {
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
}
.mm-login-on .login-holder .default-form-login .line,
.mm-login-on .login-holder .default-form-login .line-field {
  width: 100% !important;
  max-width: none !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  box-sizing: border-box;
}
/* labels dos forms (cadastro/senha/recovery) */
.mm-login-on .login-holder label.lbl {
  font-family: var(--mm-sans) !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  color: var(--mm-fg-soft) !important;
}
/* links dentro do card (pessoa jurídica, consulte aqui, esqueci a senha...) */
.mm-login-on .login-holder .default-form-login a,
.mm-login-on .login-holder .mm-lg-link {
  color: var(--mm-cta) !important;
  font-weight: 600;
  cursor: pointer;
}
/* checkbox de ofertas no verde da marca */
.mm-login-on .login-holder input[type="checkbox"] { accent-color: var(--mm-cta); }
.mm-login-on .login-holder .default-form-login input[type="text"],
.mm-login-on .login-holder .default-form-login input[type="email"],
.mm-login-on .login-holder .default-form-login input[type="password"],
.mm-login-on .login-holder .default-form-login input[type="tel"],
.mm-login-on #form-otp-code input[type="text"] {
  width: 100% !important;
  height: 52px !important;
  box-sizing: border-box !important;
  font-family: var(--mm-sans) !important;
  font-size: 14px !important;
  color: var(--mm-fg) !important;
  background: var(--mm-card) !important;
  border: 1px solid var(--mm-border) !important;
  border-radius: var(--mm-r-full) !important;
  padding: 0 22px !important;
  box-shadow: none !important;
  transition: border-color var(--mm-tr-fast), box-shadow var(--mm-tr-fast);
}
.mm-login-on .login-holder .default-form-login input:focus {
  border-color: var(--mm-cta) !important;
  box-shadow: 0 0 0 3px var(--mm-cta-soft) !important;
  outline: none !important;
}
.mm-login-on .login-holder .default-form-login input::placeholder { color: var(--mm-fg-muted); }
/* ícones sprite dos campos: decorativos somem; olho de senha (funcional)
   fica, dessaturado */
.mm-login-on .login-holder .mail-icon,
.mm-login-on .login-holder [class*="icon-"],
.mm-login-on .login-holder span[class$="-icon"]:not(.eye-icon) { display: none !important; }
.mm-login-on .login-holder .eye-icon {
  filter: grayscale(1) opacity(0.55);
}

/* botão principal de cada estado: pill verde */
.mm-login-on .login-holder button.button-send,
.mm-login-on .login-holder button.button-login {
  height: 52px !important;
  width: 100%;
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--mm-sans) !important;
  font-size: 15px !important;
  font-weight: 600 !important;
  color: #fff !important;
  background: var(--mm-cta) !important;
  border: none !important;
  border-radius: var(--mm-r-full) !important;
  cursor: pointer;
  margin-top: 16px;
  transition: background var(--mm-tr-fast), transform var(--mm-tr-fast);
}
/* seta no CTA, padrão do DS (o "Consultar meu pedido" vizinho já tem) */
.mm-login-on .login-holder button.button-send::after,
.mm-login-on .login-holder button.button-login::after {
  content: '→';
  font-size: 16px;
  line-height: 1;
}
.mm-login-on .login-holder button.button-send:hover,
.mm-login-on .login-holder button.button-login:hover { background: var(--mm-cta-dark) !important; }
.mm-login-on .login-holder button.button-send:active,
.mm-login-on .login-holder button.button-login:active { transform: scale(0.98); }

/* divisor "ou" antes do login social (injetado) */
.mm-login-on .mm-lg-ou {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 18px 0 14px;
  font-family: var(--mm-sans);
  font-size: 12px;
  color: var(--mm-fg-muted);
}
.mm-login-on .mm-lg-ou::before,
.mm-login-on .mm-lg-ou::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--mm-border-soft);
}
.mm-login-on .social-login-area,
.mm-login-on .social-login-area .btn-login,
.mm-login-on .social-login-area .render-button {
  width: 100% !important;
  max-width: none !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center;
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  border: none !important;
}
.mm-login-on .social-login-area .render-button > div,
.mm-login-on .social-login-area .render-button iframe {
  margin: 0 auto !important;
  float: none !important;
}

/* logos do rodapé: só o nosso (1º), centralizado; Magazord (2º) fora */
.mm-login-on .footer-login .logos {
  display: flex !important;
  justify-content: center !important;
  align-items: center;
}
.mm-login-on .footer-login .logos .logo-login:nth-of-type(2) { display: none !important; }
.mm-login-on .footer-login .logos .logo-login:first-child svg,
.mm-login-on .footer-login .logos .logo-login:first-child img {
  max-height: 34px;
  width: auto;
}

/* 3. textos de Turnstile/Cloudflare e "Nunca postaremos" ocultos */
.mm-login-on .footer-login .mensagem-turnstile,
.mm-login-on .footer-login .mensagem-lgpd,
.mm-login-on .footer-login .mm-lg-nopost { display: none !important; }

/* 4. FAB flutuante de WhatsApp oculto no login */
html.mm-login-on #mm-floating-whatsapp { display: none !important; }

/* rodapé legal do card */
.mm-login-on .footer-login,
.mm-login-on .footer-login p {
  font-family: var(--mm-sans);
  font-size: 11.5px !important;
  color: var(--mm-fg-subtle) !important;
  line-height: 1.6;
  text-align: center;
}
.mm-login-on .footer-login { margin-top: 18px; border-top: 1px solid var(--mm-border-soft); padding-top: 14px; }
.mm-login-on .footer-login,
.mm-login-on .footer-login * {
  font-size: 11.5px !important;
  line-height: 1.6 !important;
  text-wrap: balance;
}
.mm-login-on .footer-login a { color: var(--mm-cta) !important; font-weight: 500 !important; }

/* tablet nativo centra os controles a ~63% — força largura total na cadeia */
html.mm-login-on .login-holder .default-form-login form,
html.mm-login-on .login-holder .default-form-login .holder-input,
html.mm-login-on .login-holder .default-form-login .suggest-domains,
html.mm-login-on .login-holder .default-form-login .line,
html.mm-login-on .login-holder .default-form-login .line-field,
html.mm-login-on .login-holder .default-form-login button.button-send,
html.mm-login-on .login-holder .default-form-login button.button-login,
html.mm-login-on.mm-consulta-on #form-consulta-pedido form,
html.mm-login-on.mm-consulta-on #form-consulta-pedido form .line,
html.mm-login-on.mm-consulta-on #form-consulta-pedido .ipt-ctn,
html.mm-login-on.mm-consulta-on #form-consulta-pedido button.button-login {
  width: 100% !important;
  max-width: none !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

/* social sem iframe (Google não renderizou) = divisor "ou" some — CSS
   reage na hora, sem depender de timer */
.mm-login-on .social-login-area:not(:has(iframe)) { display: none !important; }
.mm-login-on .mm-lg-ou:has(+ .social-login-area:not(:has(iframe))) { display: none !important; }

/* borda idle sempre hairline, mesmo com classe de validação nativa */
html.mm-login-on #form-consulta-pedido .ipt-ctn input.field:not(:focus),
html.mm-login-on #form-consulta-pedido .ipt-ctn input.field.field-valid:not(:focus),
html.mm-login-on .login-holder .default-form-login input:not(:focus):not([type="checkbox"]) {
  border-color: var(--mm-border) !important;
  box-shadow: none !important;
}

/* card da consulta: título alinhado à esquerda pra parear com o login */
.mm-login-on #form-consulta-pedido .title-area {
  align-items: flex-start !important;
  text-align: left;
  padding-top: 0;
}
.mm-login-on #form-consulta-pedido form .line.submit {
  padding: 0 !important;
  margin: 4px 0 0 !important;
}
.mm-login-on #form-consulta-pedido form .line.submit button { width: 100% !important; }
html.mm-login-on.mm-consulta-on #form-consulta-pedido .title-area h2 {
  font-size: clamp(24px, 2.6vw, 30px) !important;
  margin: 0 0 10px !important;
}
html.mm-login-on.mm-consulta-on #form-consulta-pedido .mm-cp-eyebrow {
  margin: 0 0 8px !important;
}
.mm-login-on #form-consulta-pedido form { max-width: none; }
.mm-login-on .mm-cp-hint { text-align: left; }
.mm-login-on .mm-cp-wa { max-width: none; }

@media (max-width: 900px) {
  .mm-login-on .page.page-login {
    grid-template-columns: 1fr !important;
    gap: 16px;
    margin: 20px auto 32px !important;
  }
  .mm-login-on .login-holder { padding: 22px 20px !important; }
  .mm-login-on #form-consulta-pedido { padding: 22px 20px 4px !important; }
}

/* ============================================================
   PARTE 2 — RESULTADO DO PEDIDO (/cliente/pedidos?verPedido=...)
   ============================================================ */

/* página: fundo deliberado + coluna central de verdade.
   Sem sidebar (consulta anônima) o JS marca .mm-ped-center no main:
   o slot vazio da sidebar deixava o article 118px fora do centro. */
html.mm-ped-on body { background: #EFEFED !important; }
.mm-ped-on .central-cliente { background: transparent; }
.mm-ped-on .central-cliente.mm-ped-center { justify-content: center !important; }
.mm-ped-on .central-cliente.mm-ped-center .main-content {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.mm-ped-on .central-cliente .main-content {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding-top: 6px !important;
  padding-bottom: 8px !important;
}
.mm-ped-on .detalhes-pedido {
  font-family: var(--mm-sans);
  color: var(--mm-fg);
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

/* FAB global de WhatsApp: redundante aqui (hero tem CTA contextual) e
   introduzia um 2º tom de verde (olive) na tela */
html.mm-ped-on #mm-floating-whatsapp { display: none !important; }

/* título nativo "Meus pedidos" some — o hero serif assume */
.mm-ped-on .mm-ped-native-title { display: none !important; }

/* --- nova hierarquia via flex order (sem mover DOM) --- */
.mm-ped-on .detalhes-pedido {
  display: flex !important;
  flex-direction: column !important;
  gap: 24px;
  margin-top: 0 !important;
}
.mm-ped-on #mm-ped-hero   { order: 0; }
.mm-ped-on .status-pedido,
.mm-ped-on .status-pagamento-pedido {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}
.mm-ped-on .status-pedido {
  order: 1;
  width: 100% !important;
  border: none !important;
  padding: 0 !important;
  box-shadow: none !important;
}
.mm-ped-on .resumo-pedido { order: 2; width: 100% !important; }

/* header nativo do resumo some — o hero assume número/data */
.mm-ped-on .resumo-pedido .resumo-topo { display: none !important; }

/* --- HERO --- */
#mm-ped-hero {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  padding: 8px 0 0;
}
#mm-ped-hero .mm-ped-eyebrow {
  display: block;
  font-family: var(--mm-sans);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mm-fg-muted);
  margin: 0 0 6px;
}
#mm-ped-hero .mm-ped-num {
  margin: 0 0 10px;
  font-family: var(--mm-serif);
  font-weight: 400;
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: var(--mm-fg);
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}
#mm-ped-hero .mm-ped-copy {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: var(--mm-sans);
  border: 1px solid var(--mm-border);
  background: var(--mm-card);
  border-radius: var(--mm-r-full);
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 500;
  color: var(--mm-fg-subtle);
  cursor: pointer;
  transition: all var(--mm-tr-fast);
  transform: translateY(-4px);
}
#mm-ped-hero .mm-ped-copy:hover { border-color: var(--mm-fg-subtle); color: var(--mm-fg); }
#mm-ped-hero .mm-ped-copy.mm-copiado {
  border-color: var(--mm-cta);
  color: var(--mm-cta);
  background: var(--mm-cta-soft);
}
#mm-ped-hero .mm-ped-meta {
  font-family: var(--mm-sans);
  font-size: 13px;
  color: var(--mm-fg-subtle);
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
#mm-ped-hero .mm-ped-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--mm-cta-soft);
  color: var(--mm-cta);
  border-radius: var(--mm-r-full);
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
}
#mm-ped-hero .mm-ped-badge::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--mm-cta);
}
#mm-ped-hero .mm-ped-hero-wa {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  background: var(--mm-cta);
  color: #fff !important;
  border-radius: var(--mm-r-full);
  padding: 0 24px;
  font-family: var(--mm-sans);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none !important;
  white-space: nowrap;
  transition: background var(--mm-tr-fast), transform var(--mm-tr-fast);
}
#mm-ped-hero .mm-ped-hero-wa:hover { background: var(--mm-cta-dark); }
#mm-ped-hero .mm-ped-hero-wa:active { transform: scale(0.98); }
#mm-ped-hero .mm-ped-hero-wa svg { flex-shrink: 0; }

/* --- SEÇÕES: status/itens viram cards r16 com título serif --- */
.mm-ped-on .status-pedido .situacao-pedido,
.mm-ped-on .itens-pedido {
  background: var(--mm-card);
  border: 1px solid var(--mm-border);
  border-radius: var(--mm-r-lg);
  padding: 26px 28px 22px;
  box-shadow: var(--mm-shadow-sm);
  box-sizing: border-box;
  margin-bottom: 0 !important;
}
.mm-ped-on .itens-pedido { margin: 24px 0 0 !important; }

.mm-ped-on .status-pedido h3 {
  font-family: var(--mm-serif) !important;
  font-weight: 400 !important;
  font-size: 22px !important;
  letter-spacing: -0.01em !important;
  color: var(--mm-fg) !important;
  margin: 0 !important;
  white-space: nowrap;
  flex-shrink: 0;
}
.mm-ped-on .title-situacao-pedido,
.mm-ped-on .title-itens-pedido { margin-bottom: 24px; }
.mm-ped-on .status-pedido .line-detalhes {
  background: var(--mm-border-soft) !important;
  height: 1px !important;
  margin-left: 16px;
}

/* --- TIMELINE / STEPPER (dots e linhas injetados pelo JS) --- */
.mm-ped-on .status-pagamento-pedido { padding: 0 !important; }
.mm-ped-on .historico-pedido {
  display: flex !important;
  align-items: stretch;
  justify-content: space-between;
  gap: 0 !important; /* nativo tem column-gap 8% que desalinha os conectores */
  margin: 0 !important;
  padding: 10px 0 2px !important;
}
.mm-ped-on .item-historico {
  position: relative;
  flex: 1 1 0 !important;
  width: auto !important;
  max-width: none !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: flex-start !important;
  text-align: center;
  border: none !important;
  background: transparent !important;
  box-shadow: none !important;
  padding: 0 8px !important;
  margin: 0 !important;
  min-width: 0;
}
/* mata ícone nativo e pseudo-elements nativos (badges de check) */
.mm-ped-on .item-historico > img { display: none !important; }
.mm-ped-on .item-historico::before,
.mm-ped-on .item-historico::after,
.mm-ped-on .item-historico strong::before,
.mm-ped-on .item-historico strong::after {
  content: none !important;
  display: none !important;
}

/* círculo do ícone */
.mm-ped-on .mm-step-dot {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 12px;
  background: #F4F5F4;
  color: var(--mm-fg-muted);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  border: 1.5px solid transparent;
  box-sizing: border-box;
  transition: all var(--mm-tr-fast);
}
.mm-ped-on .mm-step-dot svg { width: 18px; height: 18px; display: block; }
.mm-ped-on .item-historico.status-success .mm-step-dot {
  background: var(--mm-cta);
  color: #fff;
}

/* etapa atual: anel verde + pulso suave */
@keyframes mm-ped-pulse {
  0%   { box-shadow: 0 0 0 0 rgba(27, 122, 69, .25); }
  70%  { box-shadow: 0 0 0 8px rgba(27, 122, 69, 0); }
  100% { box-shadow: 0 0 0 0 rgba(27, 122, 69, 0); }
}
.mm-ped-on .item-historico.mm-atual .mm-step-dot {
  background: var(--mm-card);
  border-color: var(--mm-cta);
  color: var(--mm-cta);
  animation: mm-ped-pulse 2.4s ease-out infinite;
}

/* labels: neutros (verde fica nos dots/estado) — mata o #27AE60 nativo */
.mm-ped-on .item-historico strong {
  font-family: var(--mm-sans) !important;
  font-size: 12.5px !important;
  line-height: 1.35 !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
  color: var(--mm-fg) !important;
  font-weight: 600 !important;
  margin: 0 !important;
  min-height: 34px;
  text-wrap: balance;
}
.mm-ped-on .item-historico.status-success strong { color: var(--mm-fg) !important; }
.mm-ped-on .item-historico.status-waiting strong {
  color: var(--mm-fg-muted) !important;
  font-weight: 500;
}
.mm-ped-on .item-historico.mm-atual strong { color: var(--mm-fg) !important; }
.mm-ped-on .item-historico .data-hora-etapa {
  font-family: var(--mm-sans) !important;
  white-space: nowrap;
  font-size: 11px !important;
  font-weight: 400 !important;
  color: var(--mm-fg-subtle) !important;
  margin-top: 3px;
  min-height: 14px;
  font-variant-numeric: tabular-nums;
}
.mm-ped-on .item-historico.mm-atual .data-hora-etapa:empty::before {
  content: 'em andamento' !important;
  display: inline-block !important;
  white-space: nowrap;
  background: var(--mm-cta-soft);
  color: var(--mm-cta);
  border-radius: var(--mm-r-full);
  padding: 3px 10px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 1.3;
}

/* conector entre etapas */
.mm-ped-on .mm-step-line {
  position: absolute;
  top: 20px;
  left: calc(50% + 25px);
  width: calc(100% - 50px);
  height: 1.5px;
  background: #D1D5DB;
  z-index: 1;
}
.mm-ped-on .item-historico:last-child .mm-step-line { display: none; }
.mm-ped-on .item-historico.status-success .mm-step-line { background: var(--mm-cta); }

/* --- BLOCO ENTREGA / RASTREIO --- */
#mm-ped-entrega {
  margin: 24px 0 0;
  border-radius: var(--mm-r-lg);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--mm-bg);
  border: 1px solid var(--mm-border-soft);
  font-family: var(--mm-sans);
  font-size: 13px;
  color: var(--mm-fg-meta);
  line-height: 1.55;
}
#mm-ped-entrega.mm-tem-rastreio {
  background: var(--mm-cta-soft);
  border-color: transparent;
  color: var(--mm-fg-soft);
}
#mm-ped-entrega svg { flex-shrink: 0; }
#mm-ped-entrega a { color: var(--mm-cta) !important; font-weight: 600; }

/* --- TRANSPORTE + NOTA FISCAL (pedidos despachados) --- */
.mm-ped-on .acoes-pedido-grid {
  display: grid !important;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 24px 0 0 !important;
  width: 100% !important;
}
.mm-ped-on .acoes-pedido-grid > * {
  background: var(--mm-card);
  border: 1px solid var(--mm-border);
  border-radius: var(--mm-r-lg);
  padding: 22px !important;
  box-shadow: var(--mm-shadow-sm);
  box-sizing: border-box;
  margin: 0 !important;
  min-width: 0;
}
.mm-ped-on .acoes-pedido-grid h3,
.mm-ped-on .acoes-pedido-grid h4,
.mm-ped-on .acoes-pedido-grid .title-acao {
  font-family: var(--mm-serif) !important;
  font-weight: 400 !important;
  font-size: 18px !important;
  letter-spacing: -0.01em !important;
  color: var(--mm-fg) !important;
  margin: 0 0 14px !important;
}
/* previsão de entrega: valor em serif, label eyebrow */
.mm-ped-on .previsao-entrega-area { gap: 10px; }
.mm-ped-on .previsao-entrega-area > img { display: none !important; }
.mm-ped-on .previsao-entrega .previsao {
  font-family: var(--mm-serif) !important;
  font-size: 20px !important;
  font-weight: 700 !important;
  letter-spacing: -0.01em;
  color: var(--mm-fg) !important;
}
.mm-ped-on .previsao-entrega .text {
  font-family: var(--mm-sans) !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  color: var(--mm-fg-muted) !important;
}
/* CTA rastrear: pill verde */
.mm-ped-on a.link-rastrear-pedido {
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 20px !important;
  background: var(--mm-cta) !important;
  color: #fff !important;
  border-radius: var(--mm-r-full) !important;
  font-family: var(--mm-sans) !important;
  font-size: 13px !important;
  font-weight: 600 !important;
  text-decoration: none !important;
  white-space: nowrap;
  transition: background var(--mm-tr-fast);
}
.mm-ped-on a.link-rastrear-pedido:hover { background: var(--mm-cta-dark) !important; }
/* código de rastreio */
.mm-ped-on .title-rastreio {
  font-family: var(--mm-sans) !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  color: var(--mm-fg-muted) !important;
  margin: 14px 0 6px !important;
}
.mm-ped-on .rastreio { gap: 10px; align-items: center; }
.mm-ped-on .codigo-rastreio { flex: 1 1 auto; min-width: 0; }
.mm-ped-on .codigo-rastreio a { display: block; width: 100%; }
.mm-ped-on input.link-rastreio {
  width: 100% !important;
  height: 40px !important;
  box-sizing: border-box;
  background: var(--mm-bg) !important;
  border: 1px solid var(--mm-border-soft) !important;
  border-radius: var(--mm-r) !important;
  padding: 0 12px !important;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace !important;
  font-size: 12.5px !important;
  color: var(--mm-fg-soft) !important;
  cursor: pointer;
}
/* copiar: pill neutra (mata o botão azul nativo) */
.mm-ped-on .copy-codigo {
  background: var(--mm-card) !important;
  border: 1px solid var(--mm-border) !important;
  border-radius: var(--mm-r-full) !important;
  height: 40px;
  padding: 0 16px !important;
  font-family: var(--mm-sans) !important;
  font-size: 12.5px !important;
  font-weight: 600 !important;
  color: var(--mm-fg-soft) !important;
  cursor: pointer;
  white-space: nowrap;
  transition: all var(--mm-tr-fast);
}
.mm-ped-on .copy-codigo:hover { border-color: var(--mm-fg-subtle) !important; color: var(--mm-fg) !important; }
.mm-ped-on .copy-codigo img { display: none !important; }
/* nota fiscal: texto e link no padrão */
.mm-ped-on .acoes-pedido-grid,
.mm-ped-on .acoes-pedido-grid span,
.mm-ped-on .acoes-pedido-grid p {
  font-family: var(--mm-sans);
  font-size: 13px;
  color: var(--mm-fg-meta);
  line-height: 1.55;
}
.mm-ped-on .acoes-pedido-grid a:not(.link-rastrear-pedido) {
  color: var(--mm-cta) !important;
  font-weight: 600;
}

/* previsão dentro do stepper (etapa Entrega, injetada via JS) */
.mm-ped-on .mm-step-prev {
  display: block;
  font-family: var(--mm-sans);
  font-size: 11px;
  color: var(--mm-fg-subtle);
  margin-top: 4px;
}

/* --- ITENS DO PEDIDO --- */
.mm-ped-on .itens-listagem { background: transparent !important; padding: 0 !important; }
.mm-ped-on .pedido-item {
  background: transparent !important;
  border: none !important;
  border-top: 1px solid var(--mm-border-soft) !important;
  border-radius: 0 !important;
  padding: 16px 0 !important;
  margin: 0 !important;
  box-shadow: none !important;
}
.mm-ped-on .pedido-item:first-child { border-top: none !important; padding-top: 0 !important; }
.mm-ped-on .pedido-item .item-principal { gap: 16px; }
.mm-ped-on .pedido-item .imagem-produto img {
  width: 76px !important;
  height: 76px !important;
  object-fit: cover;
  border-radius: var(--mm-r);
  border: 1px solid var(--mm-border-soft);
}
.mm-ped-on .pedido-item .info-pedido-item {
  font-family: var(--mm-sans);
  font-size: 10.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--mm-fg-muted);
  margin-bottom: 2px;
}
.mm-ped-on .pedido-item .nome-produto {
  font-family: var(--mm-sans);
  color: var(--mm-fg) !important;
  font-weight: 500;
  font-size: 14.5px;
  line-height: 1.45;
  transition: color var(--mm-tr-fast);
}
.mm-ped-on .pedido-item .link-produto:hover .nome-produto { color: var(--mm-olive) !important; }
.mm-ped-on .pedido-item .quantidade-produto {
  font-family: var(--mm-sans);
  background: var(--mm-bg);
  border: 1px solid var(--mm-border-soft);
  border-radius: var(--mm-r-full);
  min-width: 30px;
  height: 26px;
  padding: 0 10px;
  font-weight: 600;
  font-size: 12.5px;
  color: var(--mm-fg-soft);
}
.mm-ped-on .pedido-item .item-valor {
  font-family: var(--mm-serif);
  color: var(--mm-fg) !important;
  font-weight: 700;
  font-size: 17px;
  letter-spacing: -0.01em;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

/* --- RESUMO FINANCEIRO / ENDEREÇO --- */
.mm-ped-on .resumo-pedido {
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
  box-shadow: none !important;
}
html.mm-ped-on .resumo-pedido .resumo-content {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 16px;
  width: 100% !important;
}
.mm-ped-on .resumo-info {
  width: auto !important;
  align-self: stretch !important;
  height: auto !important;
  min-height: 100% !important;
  max-height: none !important;
  background: var(--mm-card) !important;
  border: 1px solid var(--mm-border) !important;
  border-radius: var(--mm-r-lg) !important;
  padding: 22px !important;
  margin: 0 !important;
  box-shadow: var(--mm-shadow-sm) !important;
  box-sizing: border-box;
}
/* títulos dos cards viram eyebrows */
.mm-ped-on .resumo-info .title-info { margin-bottom: 14px; }
.mm-ped-on .resumo-info .title-info strong {
  font-family: var(--mm-sans) !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  color: var(--mm-fg-muted) !important;
}
.mm-ped-on .resumo-info .title-info svg { display: none !important; }
.mm-ped-on .resumo-info,
.mm-ped-on .resumo-info .dado-list {
  font-family: var(--mm-sans);
  color: var(--mm-fg-meta);
  font-size: 13px;
  line-height: 1.6;
}
.mm-ped-on .resumo-info .dado-list.destinatario strong {
  font-family: var(--mm-sans);
  color: var(--mm-fg);
  font-weight: 600;
  font-size: 13.5px;
}
.mm-ped-on .resumo-info .subtotal,
.mm-ped-on .resumo-info .frete,
.mm-ped-on .resumo-info .descontos { padding: 3px 0; }
.mm-ped-on .resumo-info .valor {
  font-family: var(--mm-serif);
  color: var(--mm-fg) !important;
  font-weight: 400;
  font-size: 13.5px;
  letter-spacing: -0.01em;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.mm-ped-on .resumo-info .descontos,
.mm-ped-on .resumo-info .descontos .valor { color: var(--mm-cta) !important; }
.mm-ped-on .resumo-forma-pagamento .resumo-total {
  flex-direction: column !important;
  align-items: flex-start !important;
  gap: 6px;
  font-size: 13.5px;
  color: var(--mm-fg-soft);
}
.mm-ped-on .resumo-forma-pagamento .resumo-total .valor {
  font-family: var(--mm-serif);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.01em;
  white-space: nowrap;
}
/* total geral: serif grande, padrão "Resumo" do carrinho */
.mm-ped-on .resumo-pagamento .resumo-total {
  border-top: 1px solid var(--mm-border-soft);
  margin-top: 12px;
  padding-top: 14px;
  align-items: baseline;
}
.mm-ped-on .resumo-pagamento .resumo-total > span:first-child {
  font-family: var(--mm-sans);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mm-fg-subtle);
  white-space: nowrap;
}
.mm-ped-on .resumo-pagamento .resumo-total .valor {
  font-family: var(--mm-serif) !important;
  white-space: nowrap;
  font-size: 24px !important;
  font-weight: 700 !important;
  color: var(--mm-fg) !important;
  letter-spacing: -0.01em;
  line-height: 1.05;
}

/* --- AÇÕES: pills outline, WhatsApp já vive no hero --- */
.mm-ped-on .mm-ped-acoes {
  background: transparent !important;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  flex-wrap: wrap;
  order: 3;
  width: 100%;
  margin: 4px 0 8px !important;
  padding: 0 !important;
}
.mm-ped-on .btn-comprar-novamente img,
.mm-ped-on .btn-ajuda-pedido img,
.mm-ped-on .btn-comprar-novamente svg,
.mm-ped-on .btn-ajuda-pedido svg { display: none !important; }
.mm-ped-on .btn-comprar-novamente,
.mm-ped-on .btn-ajuda-pedido {
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 46px !important;
  min-height: 46px !important;
  line-height: 1 !important;
  padding: 0 24px !important;
  font-family: var(--mm-sans) !important;
  font-size: 13.5px !important;
  font-weight: 600 !important;
  border: 1px solid var(--mm-border) !important;
  color: var(--mm-fg-soft) !important;
  background: var(--mm-card) !important;
  border-radius: var(--mm-r-full) !important;
  box-sizing: border-box;
  white-space: nowrap;
  transition: all var(--mm-tr-fast);
}
.mm-ped-on .btn-comprar-novamente:hover,
.mm-ped-on .btn-ajuda-pedido:hover {
  border-color: var(--mm-fg-subtle) !important;
  color: var(--mm-fg) !important;
}
.mm-ped-on .btn-comprar-novamente svg path,
.mm-ped-on .btn-ajuda-pedido svg path { stroke: currentColor !important; }

/* ============================================================
   MOBILE (≤768px)
   ============================================================ */
@media (max-width: 768px) {
  /* containers nativos têm width fixa que estoura os 375px
     (article.main-content nativo = 505px: bug herdado do Magazord) */
  .mm-ped-on .central-cliente,
  .mm-ped-on .central-cliente .main-content,
  .mm-ped-on .detalhes-pedido,
  .mm-ped-on .status-pedido,
  .mm-ped-on .status-pagamento-pedido,
  .mm-ped-on .situacao-pedido,
  .mm-ped-on .historico-pedido,
  .mm-ped-on .itens-pedido,
  .mm-ped-on .itens-listagem,
  .mm-ped-on .pedido-item,
  .mm-ped-on .pedido-item .item-principal,
  .mm-ped-on #mm-ped-entrega,
  .mm-ped-on .resumo-pedido,
  .mm-ped-on .resumo-content,
  .mm-ped-on .mm-ped-acoes {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
  }

  .mm-ped-on .detalhes-pedido { gap: 20px; }

  /* hero empilha; CTA vira full-width */
  #mm-ped-hero { flex-direction: column; align-items: stretch; }
  #mm-ped-hero .mm-ped-hero-wa { width: 100%; }

  /* cards mais enxutos */
  .mm-ped-on .status-pedido .situacao-pedido,
  .mm-ped-on .itens-pedido { padding: 20px 20px 16px; }
  .mm-ped-on .itens-pedido { margin-top: 20px; }

  /* timeline vira stepper VERTICAL */
  .mm-ped-on .historico-pedido {
    flex-direction: column !important;
    gap: 20px !important;
  }
  .mm-ped-on .item-historico {
    flex-direction: row !important;
    align-items: center !important;
    text-align: left;
    gap: 14px;
    padding: 0 !important;
  }
  .mm-ped-on .mm-step-dot { margin-bottom: 0; width: 40px; height: 40px; }
  .mm-ped-on .item-historico strong {
    font-size: 13.5px !important;
    text-align: left !important;
    flex: 1 1 auto;
    min-height: 0 !important;
  }
  .mm-ped-on .item-historico .data-hora-etapa {
    margin-top: 0;
    margin-left: auto;
    text-align: right;
    flex-shrink: 0;
  }
  /* conector vertical */
  .mm-ped-on .mm-step-line {
    top: 44px;
    left: 19px;
    right: auto;
    width: 1.5px;
    height: 22px;
  }

  /* resumo empilha */
  html.mm-ped-on .resumo-pedido .resumo-content {
    grid-template-columns: 1fr !important;
  }

  /* transporte + nota fiscal empilham */
  .mm-ped-on .acoes-pedido-grid { grid-template-columns: 1fr !important; }

  /* itens: produto em linha cheia; qtd e valor viram linhas label→valor */
  .mm-ped-on .pedido-item .item-principal {
    flex-wrap: wrap !important;
    gap: 12px;
  }
  .mm-ped-on .pedido-item .link-produto { width: 100% !important; }
  .mm-ped-on .pedido-item .item-principal > div.flex.column {
    flex-direction: row !important;
    width: 100% !important;
    justify-content: space-between !important;
    align-items: center !important;
  }
  .mm-ped-on .pedido-item .info-pedido-item { margin-bottom: 0; }

  /* total geral: label em cima, valor embaixo */
  .mm-ped-on .resumo-pagamento .resumo-total {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 6px;
  }

  /* ações full-width */
  .mm-ped-on .mm-ped-acoes { flex-direction: column; }
  .mm-ped-on .mm-ped-acoes a { width: 100%; }
}
`,document.head.appendChild(y)}})(),(function(){if(!document.getElementById("mm-ticker-css")){var y=document.createElement("style");y.id="mm-ticker-css",y.textContent=`.ticker-bar {
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
  }`,document.head.appendChild(y)}})(),(function(){if(!document.getElementById("mm-header-css")){var y=document.createElement("style");y.id="mm-header-css",y.textContent=`/* =============================================
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
  #mm-header .mm-h-main-right .mm-h-track,
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
/* "Rastrear pedido" no menu mobile — destaque (é a razão principal do usuário
   abrir o menu vindo do "Rastrear") com ícone de caminhão alinhado. */
#mm-header .mm-h-drawer-footer a.mm-h-drawer-track {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: var(--c-brand);
}
#mm-header .mm-h-drawer-footer a.mm-h-drawer-track svg {
  width: 18px;
  height: 18px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  flex: 0 0 auto;
}

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
`,document.head.appendChild(y)}})(),(function(){if(!document.getElementById("tickerBar")){var y=document.createElement("div");y.innerHTML=`<div class="ticker-bar" id="tickerBar">
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
</div>`;var D=y.firstElementChild;document.body.insertBefore(D,document.body.firstChild)}})(),(function(){var y=location.pathname;if(/^\/checkout\//i.test(y))return;try{if(localStorage.getItem("mm_no_tracking")==="1")return}catch{}if(window._uxa||document.querySelector('script[src*="contentsquare.net"]'))return;function D(){if(!(window._uxa||document.querySelector('script[src*="contentsquare.net"]'))){var N=document.createElement("script");N.src="https://t.contentsquare.net/uxa/7126f355c4bb8.js",N.async=!0,document.head.appendChild(N)}}function R(){"requestIdleCallback"in window?requestIdleCallback(D,{timeout:5e3}):setTimeout(D,2500)}document.readyState==="complete"?R():window.addEventListener("load",R,{once:!0})})(),(function(){var y="vnhd0x9eve";try{if(localStorage.getItem("mm_no_tracking")==="1")return}catch{}if(window.clarity||document.querySelector('script[src*="clarity.ms"]'))return;function D(){window.clarity||(function(N,g,r,l,u,f,b){N[r]=N[r]||function(){(N[r].q=N[r].q||[]).push(arguments)},f=g.createElement(l),f.async=1,f.src="https://www.clarity.ms/tag/"+u,b=g.getElementsByTagName(l)[0],b.parentNode.insertBefore(f,b)})(window,document,"clarity","script",y)}function R(){"requestIdleCallback"in window?requestIdleCallback(D,{timeout:4e3}):setTimeout(D,2e3)}document.readyState==="complete"?R():window.addEventListener("load",R,{once:!0})})(),(function(){if(!document.getElementById("mm-floating-whatsapp")){var D="5511915299488",R=(document.querySelector("#prod-nome")||{}).value,N=window.location.origin+window.location.pathname+(/^#derivacao=/.test(window.location.hash)?window.location.hash:""),g;R?g="Olá! Tenho interesse no "+R.trim()+". "+N:g="Olá! Vim pelo site e gostaria de ajuda. "+N;var r="https://api.whatsapp.com/send?phone="+D+"&text="+encodeURIComponent(g),l=document.createElement("a");l.id="mm-floating-whatsapp",l.href=r,l.target="_blank",l.rel="noopener noreferrer",l.setAttribute("aria-label","Fale conosco pelo WhatsApp"),l.style.cssText=["position: fixed","right: 14px","z-index: 98","display: flex","align-items: center","justify-content: center","width: 52px","height: 52px","background: #4b664a","border-radius: 50%","box-shadow: 0 3px 12px rgba(0,0,0,0.18)","text-decoration: none","transition: transform 0.15s ease","-webkit-tap-highlight-color: transparent"].join(";"),l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" style="display:block;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',l.addEventListener("touchstart",function(){l.style.transform="scale(0.92)"},{passive:!0}),l.addEventListener("touchend",function(){l.style.transform=""},{passive:!0}),document.body.appendChild(l)}})(),(function(){var D=/^(utm_|gad_|gclid$|gbraid$|wbraid$|fbclid$|msclkid$|ttclid$|srsltid$)/;function R(){try{if(!window.history||!window.history.replaceState||!window.URL||!window.location.search)return;var N=new URL(window.location.href),g=[];N.searchParams.forEach(function(u,f){g.push(f)});var r=!1;if(g.forEach(function(u){D.test(u)&&(N.searchParams.delete(u),r=!0)}),!r)return;var l=N.searchParams.toString();window.history.replaceState(window.history.state,document.title,N.pathname+(l?"?"+l:"")+N.hash)}catch{}}document.readyState==="complete"?setTimeout(R,3e3):window.addEventListener("load",function(){setTimeout(R,3e3)})})(),(function(){var D=document.querySelector(".back-to-top");if(D){var R=D.querySelector(".icon");R&&(R.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',R.style.cssText="display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:none !important;")}})(),(function(){var D="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",R="https://api.whatsapp.com/send?phone=5511915299488&text="+encodeURIComponent("Olá! Vim pelo site e gostaria de ajuda."),N={phone:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',whats:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',mail:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',clock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',pin:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',lock:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>',shield:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>',truck:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',card:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',instagram:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',facebook:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>',tiktok:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.39a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.42z"/></svg>'};function g(){if(!document.getElementById("mm-footer")&&document.body){document.body.classList.add("mm-footer-rebuild");var r=document.createElement("footer");r.id="mm-footer",r.className="mm-footer",r.setAttribute("role","contentinfo"),r.innerHTML='<div class="mm-footer-main"><div class="mm-footer-grid"><div class="mm-footer-col mm-footer-brand"><a class="mm-footer-logo" href="/" aria-label="Madeira Mania - voltar à home"><img src="'+D+'" alt="Madeira Mania" width="180" height="48"></a><p class="mm-footer-tagline">Móveis com design moderno e qualidade superior pra transformar sua casa em um lar cheio de personalidade.</p><div class="mm-footer-social"><a href="https://www.instagram.com/madeira.mania" target="_blank" rel="noopener" aria-label="Instagram da Madeira Mania">'+N.instagram+'</a><a href="https://web.facebook.com/profile.php?id=61578397120844" target="_blank" rel="noopener" aria-label="Facebook da Madeira Mania">'+N.facebook+'</a><a href="https://www.tiktok.com/@madeira.mania" target="_blank" rel="noopener" aria-label="TikTok da Madeira Mania">'+N.tiktok+'</a></div></div><div class="mm-footer-col"><h4 class="mm-footer-h">Atendimento</h4><ul class="mm-footer-list"><li><a href="tel:+5511915299488">'+N.phone+'<span>(11) 91529-9488</span></a></li><li><a href="'+R+'" target="_blank" rel="noopener">'+N.whats+'<span>WhatsApp</span></a></li><li><a href="mailto:contato@madeiramania.com.br">'+N.mail+'<span>contato@madeiramania.com.br</span></a></li><li><span class="mm-footer-meta">'+N.clock+'<span>Seg a Sex · 8h às 18h</span></span></li></ul></div><div class="mm-footer-col"><h4 class="mm-footer-h">Sua compra</h4><ul class="mm-footer-list"><li><a href="'+(/(?:^|;\s*)zordEm=[^;\s]/.test(document.cookie)?"/cliente/pedidos":"/login#rastrear")+'">Rastrear meu pedido</a></li><li><a href="/como-comprar">Como comprar</a></li><li><a href="/politica-de-entrega">Frete e entrega</a></li><li><a href="/politica-de-trocas-e-devolucoes">Trocas e devoluções</a></li><li><a href="/compra-segura">Compra segura</a></li><li><a href="/avaliacoes-de-clientes">Avaliações de clientes</a></li></ul></div><div class="mm-footer-col"><h4 class="mm-footer-h">Madeira Mania</h4><ul class="mm-footer-list"><li><a href="/quem-somos">Quem somos</a></li><li><a href="/atendimento">Central de atendimento</a></li><li><a href="/envio-imediato">Pronta entrega</a></li><li><a href="/politica-de-privacidade">Política de privacidade</a></li></ul></div></div></div><div class="mm-footer-trust"><div class="mm-footer-trust-inner"><div class="mm-footer-trust-item">'+N.lock+'<div class="mm-footer-trust-text"><strong>Compra 100% segura</strong><small>Site protegido por SSL</small></div></div><div class="mm-footer-trust-item">'+N.shield+'<div class="mm-footer-trust-text"><strong>7 dias para troca</strong><small>Direito de arrependimento</small></div></div><div class="mm-footer-trust-item">'+N.truck+'<div class="mm-footer-trust-text"><strong>Frete grátis</strong><small>Acima de R$ 2.000</small></div></div><div class="mm-footer-trust-item">'+N.card+'<div class="mm-footer-trust-text"><strong>12x sem juros</strong><small>Em todos os cartões</small></div></div></div></div><div class="mm-footer-bottom"><div class="mm-footer-bottom-inner"><p class="mm-footer-legal">© 2026 <strong>Madeira Mania</strong> · CNPJ 60.021.382/0001-61<br>Av. Paulista, 1636 · Bela Vista · São Paulo/SP · 01310-200</p><div class="mm-footer-payments" aria-label="Formas de pagamento aceitas"><span class="mm-pay-chip" title="PIX"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/pix.svg" alt="PIX" loading="lazy"></span><span class="mm-pay-chip" title="Visa"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/visa.svg" alt="Visa" loading="lazy"></span><span class="mm-pay-chip" title="Mastercard"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/mastercard.svg" alt="Mastercard" loading="lazy"></span><span class="mm-pay-chip" title="Elo"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/elo.svg" alt="Elo" loading="lazy"></span><span class="mm-pay-chip" title="Hipercard"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/hipercard.svg" alt="Hipercard" loading="lazy"></span><span class="mm-pay-chip" title="American Express"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/american2.svg" alt="American Express" loading="lazy"></span><span class="mm-pay-chip" title="Boleto Bancário"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/boleto.svg" alt="Boleto Bancário" loading="lazy"></span></div></div></div>',document.body.appendChild(r),document.documentElement.classList.remove("mm-footer-loading")}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g):g(),setTimeout(g,1e3),setTimeout(g,3e3),setTimeout(function(){document.documentElement.classList.remove("mm-footer-loading")},6e3)})(),(function(){"use strict";if(location.pathname.replace(/\/$/,"")!=="/atendimento")return;function y(){var D=document.querySelector(".atendimento .title-content");if(!(!D||D.dataset.mmEnhanced)){D.dataset.mmEnhanced="1";var R='<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.053 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64.001 5.122 1.03 6.988 2.898 1.866 1.868 2.893 4.352 2.892 6.992-.003 5.45-4.437 9.887-9.885 9.887zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.465 3.488z"/></svg>';D.innerHTML=["<h1>Fale com a gente</h1>",'<p class="mm-atd-lead">Nosso time está pronto para ajudar você a escolher os móveis certos para sua casa. Use o WhatsApp para respostas rápidas ou preencha o formulário abaixo.</p>','<div class="mm-atd-channels">','  <a class="mm-atd-whatsapp" href="https://api.whatsapp.com/send?phone=5511915299488&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20m%C3%B3veis." target="_blank" rel="noopener">',"    "+R,'    <span class="mm-atd-whatsapp-label">Fale pelo WhatsApp</span>','    <span class="mm-atd-whatsapp-number">11 91529-9488</span>',"  </a>",'  <div class="mm-atd-info">','    <div class="mm-atd-info-item">',"      <strong>Horário de atendimento</strong>","      <span>Segunda a sexta · 9h às 18h</span>","      <span>Sábado · 9h às 13h</span>","    </div>",'    <div class="mm-atd-info-item">',"      <strong>E-mail</strong>",'      <a href="mailto:contato@madeiramania.com.br">contato@madeiramania.com.br</a>',"    </div>","  </div>","</div>",'<h2 class="mm-atd-form-title">Formulário de contato</h2>'].join(`
`)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",y):y(),setTimeout(y,500),setTimeout(y,2e3)})(),(function(){if(/^\/checkout\//.test(location.pathname)||document.getElementById("mm-header"))return;function y(){if(document.getElementById("mm-header"))return;var D="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",R={search:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',user:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',bag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',truck:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>'},N=/(?:^|;\s*)zordEm=[^;\s]/.test(document.cookie),g=N?"/cliente/pedidos":"/login#rastrear",r=document.createElement("div");r.id="mm-header",r.innerHTML=['<a class="mm-h-skip" href="#main">Pular para o conteúdo</a>','<div class="mm-h-topbar">','  <div class="mm-h-topbar-inner">','    <span class="mm-h-topbar-desktop-only">','      <a href="/atendimento">Atendimento</a>','      <span class="mm-h-topbar-sep" aria-hidden="true">·</span>',"    </span>","    <span>Frete grátis R$ 2.000+</span>",'    <span class="mm-h-topbar-sep" aria-hidden="true">·</span>',"    <span>12x sem juros</span>","  </div>","</div>",'<div class="mm-h-main">','  <div class="mm-h-main-left">','    <button class="mm-h-burger" id="mm-h-burger" type="button" aria-label="Abrir menu"><span aria-hidden="true">☰</span></button>','    <button class="mm-h-action" id="mm-h-buscar" type="button">'+R.search+"<span>Buscar</span></button>","  </div>",'  <a class="mm-h-logo" href="/" aria-label="Madeira Mania, ir para a página inicial">','    <img src="'+D+'" alt="" width="280" height="70" loading="eager" />',"  </a>",'  <div class="mm-h-main-right">','    <a class="mm-h-action" href="/wishlist">'+R.heart+"<span>Favoritos</span></a>",'    <a class="mm-h-action mm-h-track" href="'+g+'">'+R.truck+"<span>Rastrear</span></a>",'    <a class="mm-h-action" href="/login">'+R.user+"<span>Conta</span></a>",'    <button class="mm-h-action" type="button" id="mm-h-cart" aria-label="Carrinho, 0 itens" aria-live="polite">','      <span class="mm-h-cart-icon">'+R.bag+'<span class="mm-h-cart-badge" id="mm-h-cart-count" aria-hidden="true" hidden>0</span></span>',"      <span>Carrinho</span>","    </button>","  </div>","</div>",'<nav class="mm-h-nav" role="navigation" aria-label="Categorias">','  <ul class="mm-h-nav-list">','    <li class="mm-h-nav-item" data-menu="ambientes">','      <a href="#" class="mm-h-nav-link" aria-haspopup="true" aria-expanded="false">Ambientes</a>','      <div class="mm-h-mega" role="menu" aria-label="Ambientes">','        <div class="mm-h-mega-inner">','          <div class="mm-h-mega-col">','            <a href="/sala-de-estar-9677307902" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="sala-de-estar">Sala de Estar</a>',"            <ul>",'              <li><a href="/sala-de-estar/mesas">Mesas</a></li>','              <li><a href="/sala-de-estar/racks">Racks para TV</a></li>','              <li><a href="/sala-de-estar/estantes">Estantes</a></li>','              <li><a href="/sala-de-estar/home-theaters">Home Theaters</a></li>','              <li><a href="/sala-de-estar/aparadores">Aparadores</a></li>','              <li><a href="/sala-de-estar/cristaleiras">Cristaleiras</a></li>','              <li><a href="/sala-de-estar/buffets">Buffets</a></li>','              <li><a href="/sala-de-estar/bares">Bares</a></li>','              <li><a href="/sala-de-estar/paineis">Painéis</a></li>','              <li><a href="/sala-de-estar/nichos">Nichos</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col">','            <a href="/sala-de-jantar-1916970475" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="sala-de-jantar">Sala de Jantar</a>',"            <ul>",'              <li><a href="/sala-de-jantar/mesas">Mesas</a></li>','              <li><a href="/sala-de-jantar/cadeiras">Cadeiras</a></li>','              <li><a href="/sala-de-jantar/aparadores">Aparadores</a></li>','              <li><a href="/sala-de-jantar/buffets">Buffets</a></li>','              <li><a href="/sala-de-jantar/cristaleiras">Cristaleiras</a></li>','              <li><a href="/sala-de-jantar/balcoes">Balcões</a></li>','              <li><a href="/sala-de-jantar/banquetas">Banquetas</a></li>','              <li><a href="/sala-de-jantar/bares">Bares</a></li>',"            </ul>",'            <a href="/bar-e-cafe" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="bar-e-cafe">Bar e Café</a>',"            <ul>",'              <li><a href="/bar-e-cafe/bares">Bares</a></li>','              <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col">','            <a href="/cozinha-6327619447" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="cozinha">Cozinha</a>',"            <ul>",'              <li><a href="/cozinha/armarios-de-cozinha">Armários de Cozinha</a></li>','              <li><a href="/cozinha/balcoes">Balcões</a></li>','              <li><a href="/cozinha/banquetas">Banquetas</a></li>','              <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>','              <li><a href="/cozinha/cozinhas-completas">Cozinhas Completas</a></li>','              <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>','              <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>','              <li><a href="/cozinha/multiuso">Multiuso</a></li>','              <li><a href="/cozinha/paneleiros">Paneleiros</a></li>',"            </ul>",'            <a href="/lavanderia" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="lavanderia">Lavanderia</a>','            <a href="/banheiro" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="banheiro">Banheiro</a>',"          </div>",'          <div class="mm-h-mega-col">','            <a href="/quarto-0961844589" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="quarto">Quarto</a>',"            <ul>",'              <li><a href="/quarto/bercos">Berços</a></li>','              <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>','              <li><a href="/quarto/camas">Camas</a></li>','              <li><a href="/quarto/colchoes">Colchões</a></li>','              <li><a href="/quarto/comodas">Cômodas</a></li>','              <li><a href="/quarto/dormitorios">Dormitórios</a></li>','              <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>','              <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>','              <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>','              <li><a href="/quarto/roupeiros">Roupeiros</a></li>',"            </ul>",'            <a href="/escritorio-899523853" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="escritorio">Escritório</a>',"            <ul>",'              <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col mm-h-mega-col-hero" aria-hidden="true">','            <div class="mm-h-mega-hero">','              <img class="mm-h-mega-hero-img" src="" alt="" loading="lazy" width="320" height="240" />','              <div class="mm-h-mega-hero-label"></div>',"            </div>","          </div>","        </div>",'        <div class="mm-h-mega-footer">','          <a href="/envio-imediato" class="mm-h-mega-cta">Ver todos os ambientes <span aria-hidden="true">→</span></a>',"        </div>","      </div>","    </li>",'    <li class="mm-h-nav-item">','      <a href="/envio-imediato" class="mm-h-nav-link">Envio Imediato</a>',"    </li>",'    <li class="mm-h-nav-item">','      <a href="/outlet" class="mm-h-nav-link">Outlet</a>',"    </li>","  </ul>","</nav>",'<div class="mm-h-drawer" id="mm-h-drawer" hidden role="dialog" aria-modal="true" aria-label="Menu">','  <div class="mm-h-drawer-backdrop"></div>','  <aside class="mm-h-drawer-panel">','    <div class="mm-h-drawer-header">','      <span class="mm-h-drawer-title">Menu</span>','      <button class="mm-h-drawer-close" id="mm-h-drawer-close" type="button" aria-label="Fechar menu">','        <span aria-hidden="true">×</span>',"      </button>","    </div>",'    <div class="mm-h-drawer-search">','      <form action="/busca" method="get">','        <input type="search" name="q" placeholder="Buscar" aria-label="Buscar" />',"      </form>","    </div>",'    <nav class="mm-h-drawer-nav" aria-label="Navegação móvel">','      <details class="mm-h-drawer-section">',"        <summary>Sala de Estar</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/sala-de-estar-9677307902">Ver todos →</a></li>','          <li><a href="/sala-de-estar/mesas">Mesas</a></li>','          <li><a href="/sala-de-estar/racks">Racks para TV</a></li>','          <li><a href="/sala-de-estar/estantes">Estantes</a></li>','          <li><a href="/sala-de-estar/home-theaters">Home Theaters</a></li>','          <li><a href="/sala-de-estar/aparadores">Aparadores</a></li>','          <li><a href="/sala-de-estar/cristaleiras">Cristaleiras</a></li>','          <li><a href="/sala-de-estar/buffets">Buffets</a></li>','          <li><a href="/sala-de-estar/bares">Bares</a></li>','          <li><a href="/sala-de-estar/paineis">Painéis</a></li>','          <li><a href="/sala-de-estar/nichos">Nichos</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Sala de Jantar</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/sala-de-jantar-1916970475">Ver todos →</a></li>','          <li><a href="/sala-de-jantar/mesas">Mesas</a></li>','          <li><a href="/sala-de-jantar/cadeiras">Cadeiras</a></li>','          <li><a href="/sala-de-jantar/aparadores">Aparadores</a></li>','          <li><a href="/sala-de-jantar/buffets">Buffets</a></li>','          <li><a href="/sala-de-jantar/cristaleiras">Cristaleiras</a></li>','          <li><a href="/sala-de-jantar/balcoes">Balcões</a></li>','          <li><a href="/sala-de-jantar/banquetas">Banquetas</a></li>','          <li><a href="/sala-de-jantar/bares">Bares</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Cozinha</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/cozinha-6327619447">Ver todos →</a></li>','          <li><a href="/cozinha/armarios-de-cozinha">Armários de Cozinha</a></li>','          <li><a href="/cozinha/balcoes">Balcões</a></li>','          <li><a href="/cozinha/banquetas">Banquetas</a></li>','          <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>','          <li><a href="/cozinha/cozinhas-completas">Cozinhas Completas</a></li>','          <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>','          <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>','          <li><a href="/cozinha/multiuso">Multiuso</a></li>','          <li><a href="/cozinha/paneleiros">Paneleiros</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Quarto</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/quarto-0961844589">Ver todos →</a></li>','          <li><a href="/quarto/bercos">Berços</a></li>','          <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>','          <li><a href="/quarto/camas">Camas</a></li>','          <li><a href="/quarto/colchoes">Colchões</a></li>','          <li><a href="/quarto/comodas">Cômodas</a></li>','          <li><a href="/quarto/dormitorios">Dormitórios</a></li>','          <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>','          <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>','          <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>','          <li><a href="/quarto/roupeiros">Roupeiros</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Bar e Café</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/bar-e-cafe">Ver todos →</a></li>','          <li><a href="/bar-e-cafe/bares">Bares</a></li>','          <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Escritório</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/escritorio-899523853">Ver todos →</a></li>','          <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',"        </ul>","      </details>",'      <a href="/lavanderia" class="mm-h-drawer-link">Lavanderia</a>','      <a href="/banheiro" class="mm-h-drawer-link">Banheiro</a>','      <a href="/envio-imediato" class="mm-h-drawer-link">Envio Imediato</a>','      <a href="/outlet" class="mm-h-drawer-link">Outlet</a>',"    </nav>",'    <div class="mm-h-drawer-footer">','      <a href="'+g+'" class="mm-h-drawer-track">'+R.truck+"<span>Rastrear pedido</span></a>",'      <a href="/wishlist">Favoritos</a>','      <a href="/login">Conta</a>','      <a href="/atendimento">Atendimento</a>',"    </div>","  </aside>","</div>",'<div class="mm-h-search-overlay" id="mm-h-search-overlay" hidden role="dialog" aria-modal="true" aria-label="Buscar">','  <div class="mm-h-search-backdrop"></div>','  <div class="mm-h-search-inner">','    <button class="mm-h-search-close" id="mm-h-search-close" type="button" aria-label="Fechar busca">','      <span aria-hidden="true">×</span>',"    </button>",'    <form action="/busca" method="get" class="mm-h-search-form">','      <label for="mm-h-search-input" class="mm-h-search-label">O que você procura?</label>','      <input type="search" name="q" id="mm-h-search-input" placeholder="O que você procura?" autocomplete="off" />',"    </form>",'    <div class="mm-h-search-results" id="mm-h-search-results" hidden></div>','    <div class="mm-h-search-suggestions" id="mm-h-search-suggestions">','      <span class="mm-h-search-sug-label">Sugestões populares</span>','      <a href="/busca?q=mesa+de+jantar">Mesa de jantar</a>','      <a href="/busca?q=rack">Rack</a>','      <a href="/busca?q=guarda-roupas">Guarda-roupas</a>','      <a href="/busca?q=cristaleira">Cristaleira</a>','      <a href="/busca?q=aparador">Aparador</a>',"    </div>",'    <div class="mm-h-search-hint"><kbd>Esc</kbd> para fechar</div>',"  </div>","</div>"].join(`
`),document.body.insertBefore(r,document.body.firstChild),document.documentElement.classList.remove("mm-header-loading");var l=(function(){try{var e=Array.from(document.scripts).find(function(c){return c.src&&c.src.indexOf("madeira-mania.js")!==-1});if(e&&e.src.indexOf("localhost")!==-1)return"http://localhost:8080/assets/mega-hero/";if(e){var m=e.src.match(/@([^/]+)/);if(m)return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@"+m[1]+"/dist/assets/mega-hero/"}return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@main/dist/assets/mega-hero/"}catch{return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@main/dist/assets/mega-hero/"}})(),u={"sala-de-estar":"Sala de Estar","sala-de-jantar":"Sala de Jantar",cozinha:"Cozinha","bar-e-cafe":"Bar e Café",quarto:"Quarto",escritorio:"Escritório",lavanderia:"Lavanderia",banheiro:"Banheiro"},f=r.querySelector(".mm-h-mega-hero-img"),b=r.querySelector(".mm-h-mega-hero-label");Object.keys(u).forEach(function(e){var m=new Image;m.src=l+e+".jpg"});function F(e){f&&(f.onerror=function(){f.style.visibility="hidden"},f.style.visibility="",f.src=l+e+".jpg",f.alt=u[e]||"",b&&(b.textContent=u[e]||""))}F("sala-de-estar"),r.querySelectorAll(".mm-h-mega-heading-link[data-hero]").forEach(function(e){e.addEventListener("mouseenter",function(){F(e.dataset.hero)})});var E=r.querySelectorAll(".mm-h-nav-item[data-menu]"),L=null,P=null;E.forEach(function(e){e.addEventListener("mouseenter",function(){clearTimeout(P),clearTimeout(L),L=setTimeout(function(){E.forEach(function(c){c.classList.remove("is-open");var k=c.querySelector(".mm-h-nav-link");k&&k.setAttribute("aria-expanded","false")}),e.classList.add("is-open");var m=e.querySelector(".mm-h-nav-link");m&&m.setAttribute("aria-expanded","true")},150)}),e.addEventListener("mouseleave",function(){clearTimeout(L),P=setTimeout(function(){e.classList.remove("is-open");var m=e.querySelector(".mm-h-nav-link");m&&m.setAttribute("aria-expanded","false")},200)})}),document.addEventListener("keydown",function(e){e.key==="Escape"&&E.forEach(function(m){m.classList.remove("is-open");var c=m.querySelector(".mm-h-nav-link");c&&c.setAttribute("aria-expanded","false")})});var j=r.querySelector('.mm-h-nav-item[data-menu="ambientes"] > .mm-h-nav-link');j&&j.addEventListener("click",function(e){e.preventDefault()});var z=document.getElementById("mm-h-search-overlay"),_=document.getElementById("mm-h-buscar"),X=document.getElementById("mm-h-search-close"),v=document.getElementById("mm-h-search-input"),G=z&&z.querySelector(".mm-h-search-backdrop"),ln=null;function U(){z&&(ln=document.activeElement,z.hidden=!1,document.body.style.overflow="hidden",setTimeout(function(){v&&v.focus()},50))}function dn(){z&&(z.hidden=!0,document.body.style.overflow="",ln&&ln.focus&&ln.focus())}_&&_.addEventListener("click",U),X&&X.addEventListener("click",dn),G&&G.addEventListener("click",dn),document.addEventListener("keydown",function(e){if(e.key==="Escape"&&z&&!z.hidden){dn();return}if(e.key==="/"&&z&&z.hidden){var m=document.activeElement&&document.activeElement.tagName;m!=="INPUT"&&m!=="TEXTAREA"&&!(document.activeElement&&document.activeElement.isContentEditable)&&(e.preventDefault(),U())}}),z&&z.addEventListener("keydown",function(e){if(!(e.key!=="Tab"||z.hidden)){var m=z.querySelectorAll("button, input, a[href]");if(m.length!==0){var c=m[0],k=m[m.length-1];e.shiftKey&&document.activeElement===c?(e.preventDefault(),k.focus()):!e.shiftKey&&document.activeElement===k&&(e.preventDefault(),c.focus())}}});var B=document.getElementById("mm-h-search-results"),V=document.getElementById("mm-h-search-suggestions"),rn=[{label:"Mesa de jantar",q:"mesa de jantar"},{label:"Mesa de centro",q:"mesa de centro"},{label:"Rack para TV",q:"rack"},{label:"Guarda-roupas",q:"guarda-roupas"},{label:"Cristaleira",q:"cristaleira"},{label:"Aparador",q:"aparador"},{label:"Buffet",q:"buffet"},{label:"Painel para TV",q:"painel"},{label:"Cabeceira",q:"cabeceira"},{label:"Cômoda",q:"comoda"},{label:"Estante",q:"estante"},{label:"Home theater",q:"home theater"}],Rn="mm_recent_searches";function wn(){try{var e=localStorage.getItem(Rn);if(!e)return[];var m=JSON.parse(e);return Array.isArray(m)?m.slice(0,5):[]}catch{return[]}}function Nn(e){if(e)try{var m=wn().filter(function(c){return c&&c.toLowerCase()!==e.toLowerCase()});m.unshift(e),localStorage.setItem(Rn,JSON.stringify(m.slice(0,5)))}catch{}}function qn(e){return String(e).replace(/[&<>"']/g,function(m){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]})}var at='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',Jn='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',Wn="mm_search_cache_v1",jn=600*1e3,An=20,Mn=null;function st(){try{return JSON.parse(sessionStorage.getItem(Wn)||"{}")}catch{return{}}}function lt(e){try{var m=Object.keys(e);if(m.length>An){m.sort(function(k,T){return e[k].ts-e[T].ts});for(var c=0;c<m.length-An;c++)delete e[m[c]]}sessionStorage.setItem(Wn,JSON.stringify(e))}catch{}}function Qn(e){var m=st(),c=m[e.toLowerCase()];return!c||Date.now()-c.ts>jn?null:c.products}function ut(e,m){var c=st();c[e.toLowerCase()]={ts:Date.now(),products:m},lt(c)}function Kn(e){for(var m="itens:",c=0;(c=e.indexOf(m,c))!==-1;){var k=e.indexOf("[",c);if(k===-1)return null;for(var T=0,O=!1,Z=!1,J=-1,mn=k;mn<e.length;mn++){var fn=e.charAt(mn);if(Z){Z=!1;continue}if(fn==="\\"){Z=!0;continue}if(fn==='"'){O=!O;continue}if(!O){if(fn==="[")T++;else if(fn==="]"&&(T--,T===0)){J=mn;break}}}if(J!==-1){var yn=e.substring(k,J+1);try{var vn=JSON.parse(yn);if(Array.isArray(vn)&&vn.length>0)return vn}catch{}}c=k+1}return null}function Bn(e){var m=Kn(e);if(!m)return[];for(var c=[],k=0;k<m.length&&c.length<6;k++){var T=m[k];if(T){var O=T.titulo||T.nome||"";if(O){var Z=T.link||"";Z&&Z.charAt(0)!=="/"&&Z.indexOf("http")!==0&&(Z="/"+Z);var J=T.midia_url||"",mn=parseFloat(T.valor),fn=parseFloat(T.valor_de),yn=isNaN(mn)?"":"R$ "+mn.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),vn=!isNaN(fn)&&fn>mn?"R$ "+fn.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):"",Tn="";typeof T.percentual_off=="number"&&T.percentual_off>0&&(Tn="-"+Math.round(T.percentual_off)+"%"),c.push({href:Z,title:O,img:J,price:yn,oldPrice:vn,discount:Tn})}}}return c}function Hn(e){var m=e.toLowerCase().trim();if(!m||m.length<3)return Promise.resolve([]);var c=Qn(m);if(c)return Promise.resolve(c);if(Mn)try{Mn.abort()}catch{}Mn=typeof AbortController<"u"?new AbortController:null;var k="/busca?q="+encodeURIComponent(m),T={credentials:"same-origin",headers:{Accept:"text/html"}};return Mn&&(T.signal=Mn.signal),fetch(k,T).then(function(O){if(!O.ok)throw new Error("HTTP "+O.status);return O.text()}).then(function(O){var Z=Bn(O);return ut(m,Z),Z}).catch(function(O){return O&&O.name==="AbortError"?null:[]})}function bn(e){var m=e.img?'<img src="'+qn(e.img)+'" alt="" loading="lazy" width="64" height="64"/>':'<div class="mm-h-search-product-noimg"></div>',c=e.price?'<span class="mm-h-search-product-price">'+qn(e.price)+"</span>":"",k=e.oldPrice&&e.oldPrice!==e.price?'<span class="mm-h-search-product-oldprice">'+qn(e.oldPrice)+"</span>":"",T=e.discount?'<span class="mm-h-search-product-discount">'+qn(e.discount)+"</span>":"";return'<a class="mm-h-search-product" href="'+qn(e.href)+'" data-recent="1"><span class="mm-h-search-product-thumb">'+m+T+'</span><span class="mm-h-search-product-body"><span class="mm-h-search-product-name">'+qn(e.title)+'</span><span class="mm-h-search-product-prices">'+k+c+"</span></span></a>"}function Fn(){if(B){var e=wn();if(!e.length){B.hidden=!0,B.innerHTML="",V&&(V.hidden=!1);return}var m='<div class="mm-h-search-section">';m+='<span class="mm-h-search-sug-label">Buscas recentes</span>',m+='<ul class="mm-h-search-list">';for(var c=0;c<e.length;c++){var k=e[c];m+='<li><a class="mm-h-search-result" href="/busca?q='+encodeURIComponent(k)+'"><span class="mm-h-search-result-icon">'+Jn+'</span><span class="mm-h-search-result-label">'+qn(k)+"</span></a></li>"}m+="</ul></div>",B.innerHTML=m,B.hidden=!1,V&&(V.hidden=!1)}}function Gn(e){if(!B)return"";V&&(V.hidden=!0);var m=e.trim();if(m.length<2)return Fn(),"";var c=m.toLowerCase(),k=rn.filter(function(J){return J.label.toLowerCase().indexOf(c)!==-1||J.q.toLowerCase().indexOf(c)!==-1}).slice(0,4),T="";T+='<ul class="mm-h-search-list">',T+='<li><a class="mm-h-search-result mm-h-search-result-primary" href="/busca?q='+encodeURIComponent(m)+'" data-recent="1"><span class="mm-h-search-result-icon">'+at+'</span><span class="mm-h-search-result-label">Buscar por <strong>&ldquo;'+qn(m)+'&rdquo;</strong></span><span class="mm-h-search-result-arrow" aria-hidden="true">&rarr;</span></a></li>';for(var O=0;O<k.length;O++){var Z=k[O];T+='<li><a class="mm-h-search-result" href="/busca?q='+encodeURIComponent(Z.q)+'" data-recent="1"><span class="mm-h-search-result-icon">'+at+'</span><span class="mm-h-search-result-label">'+qn(Z.label)+"</span></a></li>"}return T+="</ul>",m.length>=3&&(T+='<div class="mm-h-search-products-section" data-q="'+qn(m)+'"><span class="mm-h-search-sug-label">Produtos</span><div class="mm-h-search-products-grid mm-h-search-products-loading"><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div></div></div>'),B.innerHTML=T,B.hidden=!1,m}function nt(e){var m=Gn(e);!m||m.length<3||Hn(m).then(function(c){if(v){var k=(v.value||"").trim();if(k===m&&c!==null){var T=B&&B.querySelector('.mm-h-search-products-section[data-q="'+m.replace(/"/g,'\\"')+'"]');if(T){var O=T.querySelector(".mm-h-search-products-grid");if(O){if(O.classList.remove("mm-h-search-products-loading"),!c||c.length===0){T.innerHTML='<span class="mm-h-search-sug-label">Nenhum produto encontrado para &ldquo;'+qn(m)+"&rdquo;</span>";return}for(var Z="",J=0;J<c.length;J++)Z+=bn(c[J]);O.innerHTML=Z}}}}})}var tt=null;if(v){v.addEventListener("input",function(){clearTimeout(tt);var e=v.value;tt=setTimeout(function(){!e||e.trim().length<2?Fn():nt(e)},300)}),B&&B.addEventListener("click",function(e){var m=e.target.closest&&e.target.closest("a[data-recent]");if(m){var c=m.getAttribute("href").split("q=")[1];c&&Nn(decodeURIComponent(c.replace(/\+/g," ")))}});var vt=z&&z.querySelector(".mm-h-search-form");vt&&vt.addEventListener("submit",function(){Nn((v.value||"").trim())})}_&&_.addEventListener("click",function(){Fn()});var xn=document.getElementById("mm-h-drawer"),ft=document.getElementById("mm-h-drawer-close"),St=xn&&xn.querySelector(".mm-h-drawer-backdrop");function Pt(){xn&&(xn.hidden=!1,document.body.style.overflow="hidden",setTimeout(function(){var e=xn.querySelector(".mm-h-drawer-close");e&&e.focus()},100))}function Pn(){!xn||xn.hidden||(xn.classList.add("mm-h-drawer-closing"),document.body.style.overflow="",setTimeout(function(){xn.hidden=!0,xn.classList.remove("mm-h-drawer-closing");var e=document.getElementById("mm-h-burger");e&&e.focus()},320))}var En=document.getElementById("mm-h-burger");if(En&&En.addEventListener("click",Pt),ft&&ft.addEventListener("click",Pn),St&&St.addEventListener("click",Pn),document.addEventListener("keydown",function(e){e.key==="Escape"&&xn&&!xn.hidden&&Pn()}),xn){var ot=0;xn.addEventListener("touchstart",function(e){ot=e.touches[0].clientX},{passive:!0}),xn.addEventListener("touchend",function(e){var m=e.changedTouches[0].clientX;ot-m>80&&Pn()},{passive:!0})}xn&&xn.querySelectorAll(".mm-h-drawer-section summary").forEach(function(e){e.addEventListener("click",function(m){m.preventDefault();var c=e.parentElement,k=c.querySelector("ul");if(k)if(c.open)k.style.maxHeight=k.scrollHeight+"px",k.style.opacity="1",requestAnimationFrame(function(){k.style.maxHeight="0",k.style.opacity="0",k.style.paddingTop="0",k.style.paddingBottom="0"}),setTimeout(function(){c.open=!1,k.style.maxHeight="",k.style.opacity="",k.style.paddingTop="",k.style.paddingBottom=""},300);else{c.open=!0;var T=k.scrollHeight;k.style.maxHeight="0",k.style.opacity="0",k.style.paddingTop="0",k.style.paddingBottom="0",requestAnimationFrame(function(){k.style.maxHeight=T+"px",k.style.opacity="1",k.style.paddingTop="",k.style.paddingBottom=""}),setTimeout(function(){k.style.maxHeight="",k.style.opacity=""},320)}})});var pt=document.getElementById("mm-h-cart"),Ot=null,_n=null;function Dt(){var e=document.querySelector(".carrinho-rapido-ctn");return e||document.querySelector('#cart-preview-area > div.z-\\[9999\\], #cart-preview-area > div[class*="z-[9999]"]')}function Ct(e){return!!(e&&e.className&&e.className.indexOf("z-[9999]")!==-1)}var Nt='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';function Bt(e){if(e){var m=e.querySelector(".close-car-fast");m&&!m.innerHTML.trim()&&(m.innerHTML=Nt,m.setAttribute("aria-label","Fechar carrinho"),m.setAttribute("role","button"),m.setAttribute("tabindex","0"))}}function qt(e){!e||e.dataset.mmCloseWired||(e.dataset.mmCloseWired="1",e.addEventListener("click",function(m){var c=m.target;c&&c.closest&&(c.closest(".close-car-fast")||c.closest(".icon-arrow-bottom"))&&(m.preventDefault(),m.stopPropagation(),At())},!0),e.addEventListener("keydown",function(m){(m.key==="Enter"||m.key===" ")&&m.target&&m.target.closest&&m.target.closest(".close-car-fast")&&(m.preventDefault(),At())}))}function Gt(e){if(e){if(!e.dataset.mmLifted){e.dataset.mmLifted="1",e.style.position="fixed",e.style.display="block",e.style.zIndex="200";for(var m=e.parentElement;m&&!m.classList.contains("header-middle");)m.style.zIndex="auto",m.style.transform="none",m.style.filter="none",m.style.isolation="auto",m=m.parentElement}qt(e),Bt(e)}}var ht=[{href:"/rack-atenas-cor-naturalle-largura-220-cm",name:"Rack Atenas 220cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5519/am-2501-mavaular-rack-atenas-220-naturalle-lado.jpg?ims=200x200",priceFrom:"R$ 1.615,49",priceTo:"R$ 1.032,30"},{href:"/rack-atenas-cor-naturalle-largura-180-cm",name:"Rack Atenas 180cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5419/am-2501-mavaular-rack-atenas-180-naturalle.jpg?ims=200x200",priceFrom:"R$ 1.688,71",priceTo:"R$ 942,31"},{href:"/buffet-arcus-cor-naturalle-largura-92-cm",name:"Buffet Arcus 92cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5439/am-2501-mavaular-arcus-02-pts-naturalle.jpg?ims=200x200",priceFrom:"R$ 1.359,09",priceTo:"R$ 807,30"},{href:"/buffet-atenas-cor-naturalle",name:"Buffet Atenas",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/4237/am-2502-mavaular-buffet-atenas-naturalle.jpg?ims=200x200",priceFrom:"R$ 2.124,07",priceTo:"R$ 1.032,30"}],jt='<svg viewBox="0 0 48 48" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 14 8 20v22a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V20l-4-6z"/><path d="M8 20h32"/><path d="M32 28a8 8 0 0 1-16 0"/></svg>';function Et(){try{if(typeof Zord<"u"&&typeof Zord.get=="function"){var e=Zord.get("cart.size");if(typeof e=="number"&&e>0)return e;if(typeof e=="string"&&/^\d+$/.test(e)&&parseInt(e,10)>0)return parseInt(e,10)}}catch{}var m=document.querySelector("#cart-preview-area .item-ctn, .carrinho-container .item-ctn");if(m){var c=(m.textContent||"").trim();if(c&&/\d/.test(c)){var k=parseInt(c.replace(/\D/g,""),10);if(!isNaN(k))return k}}var T=document.querySelector(".carrinho-rapido-ctn");if(T){var O=0;if(T.querySelectorAll(".cart-item").forEach(function(Z){Z.closest(".mm-cart-empty-wrapper")||O++}),O>0)return O}return 0}function Ut(e){if(Et()!==0||!e)return!1;var m=e.querySelector(".box-empty-cart");if(!m)return!1;var c=getComputedStyle(m);return!(c.display==="none"||c.visibility==="hidden")}function $t(e){if(!e)return!1;var m=Et();if(m===0)return!1;var c=0;return e.querySelectorAll(".cart-item").forEach(function(k){k.closest(".mm-cart-empty-wrapper")||c++}),c>0}function _t(e){if(e){e.classList.remove("mm-cart-has-empty-enhancement");var m=e.querySelector(":scope > .mm-cart-empty-wrapper");m&&m.remove()}}function bt(e){if(e){var m=e.querySelector(".content-cart");if(m){if($t(m)){_t(m);return}var c=m.querySelectorAll(".cart-item").length===0;if(!(!Ut(m)&&!(c&&Et()===0))&&!m.querySelector(":scope > .mm-cart-empty-wrapper")){var k=document.createElement("div");k.className="mm-cart-empty-wrapper";for(var T="",O=0;O<ht.length;O++){var Z=ht[O];T+='<a class="mm-cart-suggestion-card" href="'+Z.href+'"><span class="mm-cart-suggestion-thumb"><img src="'+Z.img+'" alt="" loading="lazy" width="80" height="80"/></span><span class="mm-cart-suggestion-body"><span class="mm-cart-suggestion-name">'+Z.name+'</span><span class="mm-cart-suggestion-price"><span class="mm-cart-suggestion-price-from">'+Z.priceFrom+'</span><span class="mm-cart-suggestion-price-to">'+Z.priceTo+"</span></span></span></a>"}k.innerHTML='<div class="mm-cart-empty-hero"><div class="mm-cart-empty-icon">'+jt+'</div><h3 class="mm-cart-empty-title">Seu carrinho está vazio</h3><p class="mm-cart-empty-copy">Dê uma olhada nos móveis que nossos clientes mais amam.</p></div><div class="mm-cart-suggestions"><span class="mm-cart-suggestions-label">Você pode gostar de</span><div class="mm-cart-suggestions-grid">'+T+"</div></div>",m.classList.add("mm-cart-has-empty-enhancement"),m.appendChild(k)}}}}function ee(e){try{document.querySelectorAll("#cart-preview-area .item-ctn, .carrinho-container .item-ctn, .item-ctn").forEach(function(m){m.textContent="0"})}catch{}e&&bt(e)}window.__mmForceEmptyCartState=ee;function Vt(e,m){try{if(typeof Zord>"u"||!Zord.checkout||typeof Zord.checkout.atualizaPreview!="function"){m();return}var c=Et();if(c===0){m();return}if(e.querySelector(".cart-item")){m();return}Zord.checkout.atualizaPreview();var k=Date.now(),T=2e3;(function O(){if(e.querySelector(".cart-item")){m();return}if(Date.now()-k>=T){m();return}setTimeout(O,50)})()}catch{m()}}function Dn(){if(window.innerWidth<=767){var e=document.querySelector("#cart-preview-area a.link-cart")||document.querySelector('#cart-preview-area a[href*="/checkout/cart"]');if(e){let O=function(J){!J||J.dataset.mmCloseWired||(J.dataset.mmCloseWired="1",J.addEventListener("click",function(mn){var fn=mn.target;if(!(!fn||!fn.closest)){var yn=fn.closest('[class*="text-error-700"]');if(!yn)for(var vn=fn,Tn=0;Tn<4&&vn&&vn!==J;Tn++){if((vn.textContent||"").trim()==="Fechar"){yn=vn;break}vn=vn.parentElement}yn&&(mn.preventDefault(),mn.stopImmediatePropagation(),J.classList.remove("translate-x-[0]"),J.classList.add("translate-x-[100%]"),delete J.dataset.mmUserOpened,document.body.style.overflow="")}},!0))},Z=function(){var J=document.querySelector('#cart-preview-area > div[class*="z-[9999]"]');J&&(J.dataset.mmUserOpened="1",J.className.indexOf("translate-x-[0]")===-1&&(J.classList.remove("translate-x-[100%]"),J.classList.add("translate-x-[0]")),O(J))};document.documentElement.dataset.mmCartOpening="1",e.dataset.mmBypass="1",e.click(),delete e.dataset.mmBypass,setTimeout(Z,120),setTimeout(Z,380),setTimeout(Z,700),setTimeout(function(){delete document.documentElement.dataset.mmCartOpening},800);return}window.location.href="/checkout/cart";return}var m=Dt();if(m){Vt(m,function(){Wt(m)});return}var c=0,k=14,T=!1;(function O(){if(c++,m=Dt(),m){Vt(m,function(){Wt(m)});return}if(!T&&c>=2){T=!0;try{typeof Zord<"u"&&Zord.checkout&&typeof Zord.checkout.atualizaPreview=="function"&&Zord.checkout.atualizaPreview()}catch{}}c<k?setTimeout(O,200):window.location.href="/checkout/cart"})()}function Wt(e){var m=Ct(e);m||(Gt(e),Bt(e)),bt(e);var c=e.querySelector(".content-cart");if(c&&!c.dataset.mmObserved){c.dataset.mmObserved="1";var k=new MutationObserver(function(){bt(e)});k.observe(c,{childList:!0,subtree:!0,attributes:!1})}if(m){e.classList.remove("translate-x-[100%]"),e.classList.add("translate-x-[0]");var T=e.querySelector('.group.cursor-pointer, [class*="text-error-700"]');T&&!T.dataset.mmWired&&(T.dataset.mmWired="1",T.addEventListener("click",function(O){O.preventDefault(),O.stopPropagation(),At()},!0))}else e.classList.add("mm-drawer-open");!m&&!_n&&(_n=document.createElement("div"),_n.id="mm-h-cart-scrim",_n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:150;opacity:0;transition:opacity 320ms;",_n.addEventListener("click",At),document.body.appendChild(_n),requestAnimationFrame(function(){_n.style.opacity="1"})),document.body.style.overflow="hidden"}function At(){var e=Dt();if(e&&(Ct(e)?(e.classList.remove("translate-x-[0]"),e.classList.add("translate-x-[100%]")):e.classList.remove("mm-drawer-open")),_n){_n.style.opacity="0";var m=_n;setTimeout(function(){m&&m.parentNode&&m.parentNode.removeChild(m)},320),_n=null}document.body.style.overflow=""}pt&&pt.addEventListener("click",function(e){e.preventDefault(),Dn()}),window.innerWidth<=767&&(function e(){var m=document.querySelector('#cart-preview-area > [class*="z-[9999]"]');if(!m){setTimeout(e,500);return}if(!m.dataset.mmGuardWired){m.dataset.mmGuardWired="1";var c=new MutationObserver(function(){if(m.className.indexOf("translate-x-[0]")===-1){delete m.dataset.mmUserOpened;return}document.documentElement.dataset.mmCartOpening||m.dataset.mmUserOpened||(m.classList.remove("translate-x-[0]"),m.classList.add("translate-x-[100%]"))});c.observe(m,{attributes:!0,attributeFilter:["class"]})}})(),document.addEventListener("click",function(e){var m=e.target.closest('#cart-preview-area a.link-cart, header.ra-header > .header-bottom a[href*="/checkout/cart"], header.ra-header > .header-bottom a[href*="carrinho"]');if(m){if(m.dataset.mmBypass)return;e.preventDefault(),e.stopPropagation(),Dn()}},!0);var Qt=document.querySelector("header.ra-header > .header-bottom");Qt&&Qt.addEventListener("click",function(e){var m=e.target.closest('a[href*="carrinho"], a[href*="/checkout/cart"], [class*="carrinho"]');m&&(e.preventDefault(),e.stopPropagation(),Dn())},!0),document.addEventListener("keydown",function(e){e.key==="Escape"&&_n&&At()});var Ft=document.getElementById("mm-h-cart-count"),Tt=document.getElementById("mm-h-cart");function Zn(){if(Ft){var e=Et();e>0?(Ft.textContent=e>99?"99+":String(e),Ft.hidden=!1):Ft.hidden=!0,Tt&&Tt.setAttribute("aria-label","Carrinho, "+e+" "+(e===1?"item":"itens"));var m=Dt();m&&m.dataset.mmLifted&&bt(m)}}window.addEventListener("reactItemAddedToCart",Zn),typeof jQuery<"u"&&(jQuery(document).on("reactItemAddedToCart",Zn),jQuery(document).ajaxComplete(function(e,m,c){c&&c.url&&c.url.indexOf("checkout/cart")!==-1&&setTimeout(Zn,150)})),setTimeout(Zn,500),setTimeout(Zn,2e3),setTimeout(Zn,5e3);function o(){var e=document.querySelector("#cart-preview-area .item-ctn, .carrinho-container .item-ctn");if(!(!e||e.dataset.mmObserved)){e.dataset.mmObserved="1";var m=new MutationObserver(Zn);m.observe(e,{childList:!0,characterData:!0,subtree:!0})}}o(),setTimeout(o,1e3),setTimeout(o,3e3);var p=new MutationObserver(function(e){for(var m=0;m<e.length;m++)for(var c=e[m].addedNodes,k=0;k<c.length;k++){var T=c[k];if(T.nodeType===1){var O=T.classList&&T.classList.contains("popup-adicionado-ao-carrinho")||T.querySelector&&T.querySelector(".popup-adicionado-ao-carrinho");if(O){setTimeout(Zn,120),setTimeout(Zn,700);return}}}});p.observe(document.body,{childList:!0,subtree:!0});var d=-1;setInterval(function(){var e=Et();e!==d&&(d=e,Zn())},1e3);var x=0,S=!1,A=24;function M(){var e=window.scrollY,m=e-x;e>A&&m>0?r.classList.add("is-compact"):(e<=A||m<0)&&r.classList.remove("is-compact"),x=e,S=!1}window.addEventListener("scroll",function(){S||(requestAnimationFrame(M),S=!0)},{passive:!0})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",y):y()})(),(function(){if(!document.getElementById("mm-org-schema")){var D=document.querySelector('.logo img, header img[alt*="logo" i], header img[alt*="Madeira" i]'),R=D&&D.getAttribute("src")||"";R&&R.indexOf("http")!==0&&(R="https://www.madeiramania.com.br"+R);var N={"@context":"https://schema.org","@type":"OnlineStore","@id":"https://www.madeiramania.com.br/#organization",name:"Madeira Mania",url:"https://www.madeiramania.com.br",description:"Loja online de móveis com preços abaixo dos marketplaces. Racks, mesas, cristaleiras, sofás, camas e estantes com entrega para todo o Brasil. Até 12x sem juros ou 7% de desconto no PIX.",sameAs:["https://www.instagram.com/madeiramaniabr/","https://www.facebook.com/madeiramaniabr/","https://www.reclameaqui.com.br/empresa/madeira-mania-comercio-de-moveis-ltda/","https://www.youtube.com/@madeiramaniabr","https://www.tiktok.com/@madeiramaniabr"],contactPoint:[{"@type":"ContactPoint",telephone:"+55-11-91529-9488",contactType:"customer service",availableLanguage:"Portuguese"},{"@type":"ContactPoint",url:"https://wa.me/5511915299488",contactType:"customer service",description:"WhatsApp"}],hasMerchantReturnPolicy:{"@type":"MerchantReturnPolicy",applicableCountry:"BR",returnPolicyCategory:"https://schema.org/MerchantReturnFiniteReturnWindow",merchantReturnDays:7,returnMethod:"https://schema.org/ReturnByMail"}};R&&R.indexOf("http")===0&&(N.logo=R);var g=document.createElement("script");g.type="application/ld+json",g.id="mm-org-schema",g.textContent=JSON.stringify(N),document.head.appendChild(g)}})(),(function y(){y._retries=(y._retries||0)+1;var D=document.querySelector("#produto-react-app");if(!D||!D.querySelector(".informacoes-compra-produto")){y._retries<30&&setTimeout(y,500);return}if((function(){var g=D.querySelector("#container-swiper"),r=D.querySelector(".swiper-pagination");if(!g||!r)return;var l=r.querySelectorAll(".swiper-pagination-bullet");if(l.length<2)return;var u=D.querySelector(".gallery-main");if(u)for(var f=u.querySelectorAll(".button-prev, .button-next"),b=0;b<f.length;b++)f[b].style.display="none";var F=document.createElement("div");F.id="mm-gallery-counter",F.style.cssText=["position: absolute","top: 12px","left: 12px","background: rgba(255,255,255,0.85)","color: #333","font-size: 12px","font-weight: 500","padding: 3px 10px","border-radius: 12px","z-index: 10","pointer-events: none","font-family: -apple-system, BlinkMacSystemFont, sans-serif","letter-spacing: 0.5px"].join(";"),u&&(u.style.position="relative",u.appendChild(F));function E(){var P=r.querySelector(".swiper-pagination-bullet-active"),j=r.querySelectorAll(".swiper-pagination-bullet");if(!(!P||!j.length)){var z=Array.prototype.indexOf.call(j,P)+1;F.textContent=z+" / "+j.length}}E();var L=new MutationObserver(E);L.observe(r,{subtree:!0,attributes:!0,attributeFilter:["class"]})})(),(function(){var g=D.querySelector(".avaliacoes");if(g){for(var r=document.querySelectorAll("script:not([src])"),l=0,u=0,f=0;f<r.length;f++){var b=r[f].textContent;if(!(b.indexOf("Zord.avaliacoes")===-1&&b.indexOf("produtoAvaliacoes")===-1)){var F=b.match(/produtoAvaliacoes\s*:\s*(\d+)/),E=b.match(/\bnota\s*:\s*(?:Number\()?([\d.]+)/);if(F&&(l=parseInt(F[1],10)),E&&(u=parseFloat(E[1])),l>0)break}}if(l===0){g.style.display="none";return}for(var L=(u%1===0,u.toFixed(1)),P="",j=1;j<=5;j++)j<=Math.floor(u)||j-u<1&&j-u>0?P+='<span style="color:#f5a623;font-size:14px;">&#9733;</span>':P+='<span style="color:#ddd;font-size:14px;">&#9733;</span>';var z=l===1?"avaliação":"avaliações";g.innerHTML='<a href="#avaliacoes" style="display:inline-flex;align-items:center;gap:4px;text-decoration:none;color:#555;font-size:13px;">'+P+' <span style="font-weight:600;color:#1a1a1a;">'+L+'</span> <span style="color:#777;">('+l+" "+z+")</span></a>",g.style.display="",g.style.marginTop="4px"}})(),(function(){var g=D.querySelector("h1");if(g){var r=g.parentElement.querySelector(".text-secondary-700.text-xs");if(r){var l=g.textContent.toLowerCase().replace(/\s+/g," ").trim(),u=r.textContent.toLowerCase().replace(/\s+/g," ").trim(),f=u.split(/[\s\-:,]+/).filter(function(F){return F.length>2}),b=f.filter(function(F){return l.indexOf(F)!==-1});b.length>=f.length*.6&&(r.style.display="none")}}})(),(function(){var g=D.querySelector(".informacoes-compra-produto");if(!g||document.getElementById("mm-action-row"))return;var r=g.querySelector(".salvar-favoritos"),l=g.querySelector(".exibe-botao-whatsapp"),u=g.querySelector(".compartilhar-produto");if(!r&&!l&&!u)return;var f=document.createElement("div");f.id="mm-action-row";function b(){var G=document.createElementNS("http://www.w3.org/2000/svg","svg");G.setAttribute("width","18"),G.setAttribute("height","18"),G.setAttribute("viewBox","0 0 24 24"),G.setAttribute("fill","none"),G.setAttribute("stroke","currentColor"),G.setAttribute("stroke-width","2"),G.setAttribute("stroke-linecap","round"),G.setAttribute("stroke-linejoin","round");var ln=document.createElementNS("http://www.w3.org/2000/svg","path");return ln.setAttribute("d","M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"),G.appendChild(ln),G}function F(){var G=document.createElementNS("http://www.w3.org/2000/svg","svg");G.setAttribute("width","18"),G.setAttribute("height","18"),G.setAttribute("viewBox","0 0 24 24"),G.setAttribute("fill","none"),G.setAttribute("stroke","currentColor"),G.setAttribute("stroke-width","2"),G.setAttribute("stroke-linecap","round"),G.setAttribute("stroke-linejoin","round");var ln=document.createElementNS("http://www.w3.org/2000/svg","path");return ln.setAttribute("d","M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"),G.appendChild(ln),G}if(r){var E=document.createElement("div");E.className="salvar-favoritos";var L=document.createElement("button");L.setAttribute("aria-label","Favoritar"),L.appendChild(F()),L.addEventListener("click",function(){var G=r.querySelector("button");G&&G.click()}),E.appendChild(L),f.appendChild(E),r.style.cssText+=";position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;"}if(l&&(l.style.display="none"),u){var P=document.createElement("div");P.className="compartilhar-produto";var j=document.createElement("button");j.setAttribute("aria-label","Compartilhar"),j.appendChild(b()),j.addEventListener("click",function(){var G=u.querySelector("button");G&&G.click()}),P.appendChild(j),f.appendChild(P),u.style.cssText+=";position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;"}var z=g.querySelector("#area-comprar");if(z){for(var _=z,X=z.nextElementSibling;X;){var v=window.getComputedStyle(X).position;if(v==="fixed"||v==="sticky")_=X,X=X.nextElementSibling;else break}_.parentNode.insertBefore(f,_.nextSibling)}else g.appendChild(f)})(),(function(){var g=D.querySelector(".comprar-fixo.area-compra-float");if(!(!g||g.querySelector("#mm-sticky-old-price"))){var r=D.querySelector(".informacoes-compra-produto");if(r){var l=r.querySelector(".line-through");if(l){var u=l.textContent.trim(),f=g.querySelector(".price-fixed");if(f){var b=document.createElement("span");b.id="mm-sticky-old-price",b.textContent=u,b.style.cssText=["text-decoration: line-through","color: #999","font-size: 11px","display: block","line-height: 1.2","margin-bottom: 1px"].join(";"),f.insertBefore(b,f.firstChild)}}}}})(),(function(){var g=D.querySelector(".informacoes-compra-produto");if(!(!g||document.getElementById("mm-trust-badges"))){var r=g.querySelector("#area-comprar");if(r){var l=document.createElement("div");l.id="mm-trust-badges",l.style.cssText=["display: flex","justify-content: center","align-items: center","flex-wrap: wrap","gap: 6px 10px","padding: 8px 0","margin-top: 2px"].join(";");var u=[{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',text:"Compra Segura"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',text:"Troca 7 dias"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10" stroke="#4b664a"/></svg>',text:"Reclame Aqui"}],f="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:#777;white-space:nowrap;";u.forEach(function(F,E){var L=document.createElement("span");if(L.style.cssText=f,L.innerHTML=F.icon+" "+F.text,l.appendChild(L),E<u.length-1){var P=document.createElement("span");P.textContent="|",P.style.cssText="color:#ddd;font-size:10px;",l.appendChild(P)}});for(var b=r.nextElementSibling;b&&window.getComputedStyle(b).position==="fixed";)b=b.nextElementSibling;b?g.insertBefore(l,b):g.appendChild(l)}}})(),(function(){var g=D.querySelector(".informacoes-compra-produto");if(!(!g||document.getElementById("mm-whatsapp-cta"))){var r=(document.querySelector("#prod-nome")||{}).value||"",l=(document.querySelector("#prod-valor")||{}).value||"",u=window.location.origin+window.location.pathname+(/^#derivacao=/.test(window.location.hash)?window.location.hash:""),f="5511915299488",b="";l&&(b=parseFloat(l).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}));var F="Olá! Tenho interesse no "+r.trim();b&&(F+=" ("+b+")"),F+=". "+u;var E="https://api.whatsapp.com/send?phone="+f+"&text="+encodeURIComponent(F),L=document.createElement("a");L.id="mm-whatsapp-cta",L.href=E,L.target="_blank",L.rel="noopener noreferrer";var P='<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';L.innerHTML=P+"<span>Compre pelo WhatsApp</span>";var j=document.getElementById("mm-action-row"),z=document.getElementById("mm-trust-badges"),_=j||z;_&&_.parentNode===g&&g.insertBefore(L,_.nextElementSibling)}})(),(function(){var g=D.querySelector(".informacoes-compra-produto");if(!(!g||document.getElementById("mm-stock-indicator"))){for(var r=10,l=document.querySelectorAll("script:not([src])"),u=-1,f=0;f<l.length;f++){var b=l[f].textContent,F=b.match(/"qtde_estoque"\s*:\s*(\d+)/);if(F){u=parseInt(F[1],10);break}}var E=u-r;if(!(E<1||E>9)){var L=document.createElement("div");L.id="mm-stock-indicator",L.style.cssText=["display: flex","align-items: center","gap: 6px","padding: 8px 12px","background: #fff8f0","border: 1px solid #fde0c2","border-radius: 8px","font-size: 13px","color: #c65d00","font-weight: 500","margin-top: 4px"].join(";");var P=E===1?"unidade":"unidades";L.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c65d00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>Restam apenas <strong>'+E+"</strong> "+P+" em estoque";var j=g.firstElementChild;j&&j.parentNode.insertBefore(L,j.nextElementSibling)}}})(),(function(){if(!document.getElementById("mm-trust-block")){var g=window.innerWidth>=769,r=document.createElement("div");r.id="mm-trust-block",r.style.cssText=["background: #f7f8f7","display: flex","align-items: center","justify-content: center","gap: "+(g?"40px":"10px"),"padding: "+(g?"14px 24px":"12px 16px"),g?"flex-direction: row":"flex-direction: column",g?"border-top: 1px solid #e8ece8":"border-radius: 10px",g?"border-bottom: 1px solid #e8ece8":"",g?"margin: 0":"margin-top: 10px"].filter(Boolean).join(";");var l=[{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',label:"Atendimento",desc:"Seg à Sex 8h-18h"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',label:"Garantia",desc:"12 meses fabricação"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',label:"Trocas",desc:"Até 7 dias"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',label:"Frete",desc:"Todo o Brasil"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',label:"12x sem juros",desc:"No cartão"}],u="display:flex;align-items:center;gap:8px;",f="font-size:13px;font-weight:600;color:#1a1a1a;line-height:1.2;",b="font-size:11px;color:#777;line-height:1.2;";if(l.forEach(function(j){var z=document.createElement("div");z.style.cssText=u,z.innerHTML=j.icon+'<div><div style="'+f+'">'+j.label+'</div><div style="'+b+'">'+j.desc+"</div></div>",r.appendChild(z)}),g){var F=document.querySelector("#pagina-produto-react-app");if(F&&F.nextSibling)F.parentNode.insertBefore(r,F.nextSibling);else{var E=document.querySelector(".main-produto");E&&E.appendChild(r)}}else{var L=D.querySelector(".informacoes-compra-produto"),P=L?L.querySelector(".calculo-frete"):null;P?P.parentNode.insertBefore(r,P.nextElementSibling):L&&L.appendChild(r)}}})(),(function(){var g=D.querySelector(".informacoes-compra-produto");if(!g||document.getElementById("mm-inline-payments"))return;var r=g.querySelector(".form-pag-link");if(!r)return;var l=parseFloat(r.getAttribute("data-valor"))||0,u=parseFloat(r.getAttribute("data-valor-pix"))||0;if(l<=0)return;for(var f=[],b=1;b<=12;b++)f.push({vezes:b,valor:(l/b).toFixed(2).replace(".",",")});function F(rn){return"R$ "+rn.toFixed(2).replace(".",",")}var E=l-u,L=document.createElement("div");L.id="mm-inline-payments",L.style.cssText=["padding: 12px 0","border-top: 1px solid #f0f0f0","margin-top: 4px"].join(";");var P=window.innerWidth>=769,j="display:flex;align-items:center;gap:6px;padding:"+(P?"2px":"4px")+" 0;font-size:13px;color:#444;",z="width:5px;height:5px;border-radius:50%;background:#4b664a;flex-shrink:0;",_='<div style="'+j+'"><span style="'+z+'"></span><span><strong style="color:#1a1a1a;">PIX: '+F(u)+"</strong>"+(E>0?' <span style="color:#2e7d32;font-size:12px;font-weight:600;">(economize '+F(E)+")</span>":"")+"</span></div>";if(P)L.innerHTML=_+'<button id="mm-toggle-parcelas" style="background:none;border:none;color:#4b664a;font-size:13px;font-weight:500;padding:2px 0 0;cursor:pointer;display:flex;align-items:center;gap:4px;">Ver todas as parcelas <span style="font-size:10px;">&#9660;</span></button><div id="mm-more-parcelas" style="display:none;"></div>';else{for(var X="",v=0;v<3;v++)X+='<div style="'+j+'"><span style="'+z+'"></span><span>'+f[v].vezes+"x de R$ "+f[v].valor+" sem juros</span></div>";L.innerHTML=_+X+'<button id="mm-toggle-parcelas" style="background:none;border:none;color:#4b664a;font-size:13px;font-weight:500;padding:6px 0 0;cursor:pointer;display:flex;align-items:center;gap:4px;">Ver todas as parcelas <span style="font-size:10px;">&#9660;</span></button><div id="mm-more-parcelas" style="display:none;"></div>'}for(var G="",ln=P?0:3,U=ln;U<12;U++)G+='<div style="'+j+'"><span style="'+z+'"></span><span>'+f[U].vezes+"x de R$ "+f[U].valor+" sem juros</span></div>";var dn=r.closest("div");dn&&(dn.parentNode.insertBefore(L,dn),r.style.display="none");var B=document.getElementById("mm-more-parcelas");B&&(B.innerHTML=G);var V=document.getElementById("mm-toggle-parcelas");V&&B&&V.addEventListener("click",function(){var rn=B.style.display!=="none";B.style.display=rn?"none":"block",V.innerHTML=rn?'Ver todas as parcelas <span style="font-size:10px;">&#9660;</span>':'Ver menos <span style="font-size:10px;">&#9650;</span>'})})(),(function(){var g=document.querySelector(".recomendacao-ctn-0.accordion"),r=document.querySelector(".descricao-produto.accordion");if(!(!g||!r)){var l=g.parentNode;if(!(!l||l!==r.parentNode)){var u=Array.prototype.slice.call(l.children),f=u.indexOf(g),b=u.indexOf(r);f<b&&l.insertBefore(r,g)}}})(),(function(){var g=document.querySelector("#cep");if(!g)return;var r="mm_cep",l=g.closest(".area-calculo");if(l){var u=l.querySelector("button");u&&u.addEventListener("click",function(){var P=g.value.replace(/\D/g,"");if(P.length===8)try{localStorage.setItem(r,P)}catch{}})}var f=null;try{f=localStorage.getItem(r)}catch{}if(!f||f.length!==8||g.value.replace(/\D/g,"").length>0)return;var b=f.substring(0,5)+"-"+f.substring(5);function F(P,j){P.focus();try{P.setSelectionRange(0,(P.value||"").length)}catch{}try{document.execCommand("delete")}catch{}try{document.execCommand("insertText",!1,j)}catch{}}function E(){var P=g.closest(".calculo-frete");return!!(P&&/R\$\s*\d/.test(P.innerText))}function L(P){P<=0||E()||(F(g,b),setTimeout(function(){if(!E()){var j=g.closest(".area-calculo"),z=j&&j.querySelector("button:not([disabled])");z&&z.click(),setTimeout(function(){E()||L(P-1)},2e3)}},2500))}setTimeout(function(){L(3)},600)})(),(function(){for(var g=document.querySelectorAll('.exibe-botao-whatsapp a[href*="whatsapp"]'),r=0;r<g.length;r++){var l=g[r].getAttribute("href");l&&l.indexOf("null")!==-1&&g[r].setAttribute("href",l.replace(/\s*null\s*/g," ").replace(/\s{2,}/g," "))}var u=document.querySelector(".exibe-botao-whatsapp");if(u){var f=new MutationObserver(function(){var b=u.querySelector('a[href*="whatsapp"]');b&&b.href.indexOf("null")!==-1&&b.setAttribute("href",b.getAttribute("href").replace(/\s*null\s*/g," ").replace(/\s{2,}/g," "))});f.observe(u,{subtree:!0,attributes:!0,attributeFilter:["href"]})}})(),(function(){var g=D.querySelector(".informacoes-compra-produto");if(!(!g||document.getElementById("mm-envio-badge"))){for(var r=!1,l=D.querySelectorAll(".tag-produto .text-tag, .tag-produto"),u=0;u<l.length;u++)if(l[u].textContent.toLowerCase().indexOf("envio")!==-1){r=!0;break}if(!r)for(var f=document.querySelectorAll("script:not([src])"),b=0;b<f.length;b++){var F=f[b].textContent.match(/"qtde_estoque"\s*:\s*(\d+)/);if(F){parseInt(F[1],10)>10&&(r=!0);break}}if(r){var E=document.createElement("div");E.id="mm-envio-badge",E.style.cssText=["display: inline-flex","align-items: center","gap: 6px","padding: 4px 0","font-size: 13px","color: #1a1a1a","margin-top: 4px"].join(";"),E.innerHTML='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c65d00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span><strong style="color:#1a1a1a;">Pronta entrega</strong> <span style="color:#777;font-weight:400;">·</span> <span style="color:#555;font-weight:400;">Enviamos em 24h</span></span>';var L=g.firstElementChild;L&&L.nextElementSibling&&L.parentNode.insertBefore(E,L.nextElementSibling)}}})(),(function(){for(var g=D.querySelectorAll(".tag-1.tag-produto"),r=0;r<g.length;r++){var l=g[r].textContent.trim();(l.indexOf("%")!==-1||l.indexOf("OFF")!==-1)&&(g[r].style.display="none")}})(),(function(){for(var g=document.querySelectorAll('a[href*="avaliacoes"], a[href="#avaliacoes"]'),r=0;r<g.length;r++)g[r].addEventListener("click",function(l){l.preventDefault();var u=document.querySelector("#avaliacoes")||document.querySelector(".container-avaliacoes");u&&u.scrollIntoView({behavior:"smooth",block:"start"})})})(),(function(){var g=D.querySelector("h1");if(!(!g||document.getElementById("mm-brand"))){var r=document.querySelector("#prod-marca");if(!(!r||!r.value||r.value.trim()==="")){var l=document.createElement("span");l.id="mm-brand",l.style.cssText="display:block;font-size:13px;color:#777;font-weight:400;margin-top:2px;",l.textContent="por "+r.value.trim();var u=g.parentElement;if(u){var f=g.nextElementSibling;f?u.insertBefore(l,f):u.appendChild(l)}}}})(),(function(){var g=document.getElementById("mm-trust-badges");if(g){for(var r=g.querySelectorAll("span"),l=0;l<r.length;l++)if(r[l].textContent.indexOf("Reclame")!==-1){var u=document.querySelector('footer .reclame-aqui a, footer a[href*="reclameaqui"]'),f=u?u.href:"https://www.reclameaqui.com.br/empresa/madeira-mania-comercio-de-moveis-ltda/";r[l].innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10" stroke="#4b664a"/></svg> <a href="'+f+'" target="_blank" rel="noopener" style="color:#777;text-decoration:none;">RA Verificada</a>'}}})(),(function(){var g=D.querySelector(".informacoes-compra-produto");if(g){var r=g.querySelector(".calculo-frete");if(r){g.style.cssText+=";display:flex !important;flex-direction:column !important;",r.style.cssText+=";order:20 !important;";var l=document.getElementById("mm-trust-block");l&&(l.style.cssText+=";order:30 !important;")}}})(),(function(){var g=D.querySelector(".informacoes-compra-produto");if(!(!g||document.getElementById("mm-mini-specs"))){var r=document.querySelector(".descricao-produto"),l={};if(r)for(var u=r.querySelectorAll("td"),f=0;f<u.length-1;f+=2){var b=u[f].textContent.trim().toLowerCase(),F=u[f+1].textContent.trim();b.indexOf("largura")!==-1&&(l.largura=F),b.indexOf("altura")!==-1&&(l.altura=F),b.indexOf("profundidade")!==-1&&(l.profundidade=F),b.indexOf("material")!==-1&&(l.material=F),b.indexOf("dobradi")!==-1&&(l.dobradicas=F),(b.indexOf("pes")!==-1||b.indexOf("pés")!==-1)&&(l.pes=F)}if(!(!l.largura&&!l.material)){var E=[];if(l.material&&E.push(l.material),l.dobradicas&&E.push("Dobradiças "+l.dobradicas),l.pes&&E.push("Pés: "+l.pes),l.largura&&E.push(l.largura+" × "+(l.altura||"")+" × "+(l.profundidade||"")),E.length!==0){var L=document.createElement("div");L.id="mm-mini-specs",L.style.cssText="padding:8px 0;border-top:1px solid #f0f0f0;margin-top:4px;";var P="";E.forEach(function(z){P+='<div style="display:flex;align-items:center;gap:6px;padding:2px 0;font-size:13px;color:#555;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polyline points="20 6 9 17 4 12"/></svg><span>'+z+"</span></div>"}),L.innerHTML=P;var j=g.querySelector("#area-comprar");j&&g.insertBefore(L,j)}}}})(),(function(){if(window.innerWidth<769||document.getElementById("mm-desktop-sticky"))return;var g=D.querySelector(".informacoes-compra-produto");if(!g)return;var r=g.querySelector(".line-through"),l=(document.querySelector("#prod-valor-principal")||{}).value,u=(document.querySelector("#prod-valor")||{}).value,f=(document.querySelector("#prod-nome")||{}).value||"",b=f.split(" - ")[0]||f;if(!l)return;var F=r?r.textContent.trim():"",E=parseFloat(l).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),L=u?parseFloat(u).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}):"",P=u?(parseFloat(u)/12).toFixed(2).replace(".",","):"",j=document.createElement("div");j.id="mm-desktop-sticky",j.style.cssText=["position: fixed","top: -60px","left: 0","width: 100%","height: 56px","background: #ffffff","border-bottom: 1px solid #e8ece8","box-shadow: 0 2px 8px rgba(0,0,0,0.06)","z-index: 100","display: flex","align-items: center","justify-content: center","padding: 0 24px","transition: top 0.25s ease","font-family: -apple-system, BlinkMacSystemFont, sans-serif"].join(";");var z="display:flex;align-items:center;gap:16px;max-width:1200px;width:100%;",_="font-size:14px;font-weight:500;color:#1a1a1a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:300px;",X="display:flex;align-items:center;gap:8px;margin-left:auto;",v="text-decoration:line-through;color:#999;font-size:12px;",G="font-size:15px;font-weight:600;color:#1a1a1a;",ln="font-size:12px;color:#666;",U="display:inline-flex;align-items:center;justify-content:center;padding:8px 20px;background:#4b664a;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer;white-space:nowrap;";j.innerHTML='<div style="'+z+'"><span style="'+_+'">'+b+'</span><div style="'+X+'">'+(F?'<span style="'+v+'">'+F+"</span>":"")+'<span style="'+G+'">'+E+' <small style="font-weight:400;font-size:11px;color:#666;">PIX</small></span>'+(P?'<span style="'+ln+'">12x R$ '+P+"</span>":"")+'</div><button id="mm-desktop-sticky-btn" style="'+U+'">Comprar</button></div>',document.body.appendChild(j);var dn=document.getElementById("mm-desktop-sticky-btn");dn&&dn.addEventListener("click",function(){var rn=D.querySelector(".btn-comprar");rn&&rn.click()});var B=g.querySelector("#area-comprar");if(!B)return;function V(){var rn=B.getBoundingClientRect();j.style.top=rn.bottom<0?"0px":"-60px"}window.addEventListener("scroll",V,{passive:!0}),V()})(),(function(){var g=[".selos-seguranca",".formas-pagto"];g.forEach(function(r){var l=document.querySelector("footer "+r);l&&l.classList.contains("closed")&&(l.classList.remove("closed"),l.classList.add("open"))})})(),window.innerWidth>=769){var R=D.querySelector(".informacoes-compra-produto");R&&(R.style.setProperty("gap","12px","important"),R.style.setProperty("row-gap","12px","important"))}document.body.classList.add("mm-ready")})();var Kt=document.currentScript;(function y(){y._retries=(y._retries||0)+1;var D=document.querySelector("#produto-react-app");if(!D||!D.querySelector(".informacoes-compra-produto")){y._retries<30&&setTimeout(y,500);return}if(!document.getElementById("mm-product-schema")){var R=D.querySelector("h1"),N=R?R.textContent.trim():"";if(N){var g=document.querySelector('link[rel="canonical"]'),r=g?g.href:location.href.split("?")[0],l=document.querySelector("#prod-marca"),u=l?l.value.trim():"";!u&&window.dataLayer&&window.dataLayer[0]&&(u=window.dataLayer[0].brand||"");var f=D.querySelector(".form-pag-link"),b=document.querySelector("#prod-valor-principal"),F=document.querySelector("#prod-valor"),E=0,L=0;f&&(E=parseFloat(f.getAttribute("data-valor-pix"))||0,L=parseFloat(f.getAttribute("data-valor"))||0),!L&&F&&(L=parseFloat(F.value)||0),!E&&b&&(E=parseFloat(b.value)||0);var P=E>0?E:L;if(!(P<=0)){var j="";window.dataLayer&&window.dataLayer[0]&&(j=window.dataLayer[0].sku||"");var z="",_="";window.dataLayer&&window.dataLayer[0]&&(z=window.dataLayer[0].category||"",_=window.dataLayer[0].category2||"");for(var X=document.querySelector("#prod-deposito"),v=X?X.value==="1":!0,G=[],ln=D.querySelectorAll(".gallery-main img, #block-imagem img"),U=0;U<ln.length;U++){var dn=ln[U].getAttribute("src")||ln[U].getAttribute("data-src")||"";dn&&dn.indexOf("http")===0&&G.indexOf(dn)===-1&&G.push(dn)}if(G.length===0){var B=document.querySelector('meta[property="og:image"]');B&&B.content&&G.push(B.content)}var V=document.querySelector('meta[name="description"]'),rn=V?V.content.trim():"";if(!rn){var Rn=document.querySelector(".descricao-produto .accordion-content p");Rn&&(rn=Rn.textContent.trim().substring(0,500))}for(var wn=0,Nn=0,qn=document.querySelectorAll("script:not([src])"),at=0;at<qn.length;at++){var Jn=qn[at].textContent;if(!(Jn.indexOf("Zord.avaliacoes")===-1&&Jn.indexOf("produtoAvaliacoes")===-1)){var Wn=Jn.match(/produtoAvaliacoes\s*:\s*(\d+)/),jn=Jn.match(/\bnota\s*:\s*(?:Number\()?([\d.]+)/);Wn&&(wn=parseInt(Wn[1],10)),jn&&(Nn=parseFloat(jn[1]))}}var An={"@context":"https://schema.org","@type":"Product",name:N,url:r,image:G,description:rn,sku:j,brand:{"@type":"Brand",name:u||"Madeira Mania"},offers:{"@type":"Offer",url:r,price:P.toFixed(2),priceCurrency:"BRL",availability:v?"https://schema.org/InStock":"https://schema.org/OutOfStock",itemCondition:"https://schema.org/NewCondition",seller:{"@type":"Organization",name:"Madeira Mania"},hasMerchantReturnPolicy:{"@type":"MerchantReturnPolicy",applicableCountry:"BR",returnPolicyCategory:"https://schema.org/MerchantReturnFiniteReturnWindow",merchantReturnDays:7,returnMethod:"https://schema.org/ReturnByMail"},shippingDetails:{"@type":"OfferShippingDetails",shippingDestination:{"@type":"DefinedRegion",addressCountry:"BR"},deliveryTime:{"@type":"ShippingDeliveryTime",handlingTime:{"@type":"QuantitativeValue",minValue:1,maxValue:3,unitCode:"DAY"},transitTime:{"@type":"QuantitativeValue",minValue:5,maxValue:20,unitCode:"DAY"}}}}};L>0&&(An.offers.priceSpecification=[{"@type":"UnitPriceSpecification",price:E>0?E.toFixed(2):P.toFixed(2),priceCurrency:"BRL",name:"PIX"},{"@type":"UnitPriceSpecification",price:(L/12).toFixed(2),priceCurrency:"BRL",name:"12x sem juros",referenceQuantity:{"@type":"QuantitativeValue",value:12,unitCode:"MON"}}]),wn>0&&Nn>0&&(An.aggregateRating={"@type":"AggregateRating",ratingValue:Nn.toFixed(1),bestRating:"5",worstRating:"1",reviewCount:String(wn)}),z&&(An.category=z+(_?" > "+_:""));var Mn=document.createElement("script");Mn.type="application/ld+json",Mn.id="mm-product-schema",Mn.textContent=JSON.stringify(An),document.head.appendChild(Mn),Kt&&Kt.parentNode&&Kt.parentNode.removeChild(Kt)}}}})();var ne=document.currentScript;(function y(){y._retries=(y._retries||0)+1;var D=document.querySelector("#produto-react-app"),R=D?D.querySelector("h1"):null;if(!R){y._retries<30&&setTimeout(y,500);return}if(!document.getElementById("mm-breadcrumb-schema")){var N=[],g=1;N.push({"@type":"ListItem",position:g++,name:"Home",item:"https://www.madeiramania.com.br"});var r=document.querySelectorAll('.breadcrumb a, nav[aria-label*="breadcrumb" i] a, .migalha a, .breadcrumb-item a');if(r.length>0)for(var l=0;l<r.length;l++){var u=r[l],f=u.textContent.trim(),b=u.href;!f||f.toLowerCase()==="home"||f.toLowerCase()==="início"||!b||b==="#"||N.push({"@type":"ListItem",position:g++,name:f,item:b})}else if(window.dataLayer&&window.dataLayer[0]){var F=window.dataLayer[0].category||"",E=window.dataLayer[0].category2||"";F&&N.push({"@type":"ListItem",position:g++,name:F,item:"https://www.madeiramania.com.br/"+F.toLowerCase().replace(/\s+/g,"-").replace(/[àáâã]/g,"a").replace(/[éêë]/g,"e").replace(/[íî]/g,"i").replace(/[óôõ]/g,"o").replace(/[úû]/g,"u").replace(/ç/g,"c")}),E&&E!==F&&N.push({"@type":"ListItem",position:g++,name:E,item:"https://www.madeiramania.com.br/"+E.toLowerCase().replace(/\s+/g,"-").replace(/[àáâã]/g,"a").replace(/[éêë]/g,"e").replace(/[íî]/g,"i").replace(/[óôõ]/g,"o").replace(/[úû]/g,"u").replace(/ç/g,"c")})}if(N.push({"@type":"ListItem",position:g,name:R.textContent.trim()}),!(N.length<2)){var L={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:N},P=document.createElement("script");P.type="application/ld+json",P.id="mm-breadcrumb-schema",P.textContent=JSON.stringify(L),document.head.appendChild(P),ne&&ne.parentNode&&ne.parentNode.removeChild(ne)}}})();var te=document.currentScript;(function y(){y._retries=(y._retries||0)+1;var D=document.querySelector(".descricao-produto");if(!D){y._retries<30&&setTimeout(y,500);return}if(!document.getElementById("mm-faq-section")){var R=[{q:"Como funciona a entrega de móveis?",a:"Enviamos para todo o Brasil por transportadora especializada em móveis. O prazo varia de 5 a 20 dias úteis dependendo da sua região. Você pode calcular o frete e prazo exato informando seu CEP na página do produto, acima do botão de compra."},{q:"O móvel vem montado ou precisa montar?",a:"A maioria dos móveis é enviada desmontada para garantir segurança no transporte. Cada produto inclui manual de montagem com instruções passo a passo e todas as ferragens necessárias. Produtos de madeira maciça geralmente exigem apenas encaixe simples de pés ou portas."},{q:"Vocês entregam em apartamento e zona rural?",a:"Sim, entregamos em apartamentos e áreas urbanas em todo o Brasil. Para zonas rurais, a disponibilidade depende da região — consulte informando seu CEP. A entrega é realizada até a portaria ou térreo do edifício."},{q:"E se o produto chegar com defeito?",a:"Você tem 7 dias para solicitar troca ou devolução a partir do recebimento, conforme o Código de Defesa do Consumidor (Art. 49). Basta entrar em contato pelo nosso WhatsApp com fotos do defeito. Todos os produtos possuem garantia de 12 meses contra defeitos de fabricação."},{q:"Quais as formas de pagamento?",a:"Aceitamos PIX com 7% de desconto (processado na hora), cartão de crédito em até 12x sem juros (Visa, Mastercard, Elo, American Express) e boleto bancário. O pagamento via PIX agiliza o despacho do seu pedido."},{q:"O preço de vocês é realmente menor que nos marketplaces?",a:"Sim. Como vendemos direto ao consumidor, sem comissões de marketplace, nossos preços são consistentemente 10% a 25% menores que MadeiraMadeira, Mercado Livre e outros. Compare o mesmo produto pelo código SKU do fabricante e confira a diferença."},{q:"Como funciona a garantia?",a:"Todos os produtos possuem garantia de 12 meses contra defeitos de fabricação, além do direito de arrependimento de 7 dias garantido pelo CDC. Móveis de madeira maciça, com os cuidados adequados, possuem durabilidade superior a 30 anos."}];if(!document.getElementById("mm-faq-styles")){var N=document.createElement("style");N.id="mm-faq-styles",N.textContent=["#mm-faq-section button:focus-visible { outline: 2px solid #4b664a; outline-offset: 2px; border-radius: 4px; }","#mm-faq-section button:active { opacity: 0.7; }","@media (prefers-reduced-motion: reduce) { #mm-faq-section * { transition: none !important; } }"].join(`
`),document.head.appendChild(N)}var g=document.createElement("div");g.id="mm-faq-section",g.style.cssText=["margin: 24px 0","padding: 0 8px"].join(";");var r=document.createElement("h2");r.style.cssText=["font-size: 18px","font-weight: 700","color: #1a1a1a","margin-bottom: 16px","padding-bottom: 8px","border-bottom: 2px solid #4b664a"].join(";"),r.textContent="Perguntas Frequentes",g.appendChild(r);var l=document.createElement("div");l.style.cssText=["display: flex","flex-direction: column","gap: 0"].join(";"),R.forEach(function(E,L){var P=document.createElement("div");P.style.cssText="border-bottom: 1px solid #e8ece8;";var j=document.createElement("button");j.setAttribute("aria-expanded","false"),j.setAttribute("aria-controls","mm-faq-answer-"+L),j.style.cssText=["display: flex","justify-content: space-between","align-items: center","width: 100%","padding: 16px 0","background: none","border: none","cursor: pointer","text-align: left","font-size: 15px","font-weight: 600","color: #1a1a1a","line-height: 1.4","font-family: inherit","-webkit-tap-highlight-color: transparent"].join(";");var z=document.createElement("span");z.textContent=E.q,z.style.cssText="flex: 1; padding-right: 12px;";var _=document.createElement("span");_.textContent="+",_.style.cssText=["font-size: 20px","font-weight: 300","color: #4b664a","flex-shrink: 0","transition: transform 0.2s ease","width: 24px","text-align: center"].join(";"),j.appendChild(z),j.appendChild(_);var X=document.createElement("div");X.id="mm-faq-answer-"+L,X.setAttribute("role","region"),X.setAttribute("aria-labelledby","mm-faq-q-"+L),j.id="mm-faq-q-"+L,X.style.cssText=["max-height: 0","overflow: hidden","transition: max-height 0.3s ease, padding 0.3s ease","font-size: 14px","line-height: 1.6","color: #444"].join(";");var v=document.createElement("div");v.style.cssText="padding: 0 0 14px 0;",v.textContent=E.a,X.appendChild(v),j.addEventListener("click",function(){var G=j.getAttribute("aria-expanded")==="true";G?(X.style.maxHeight="0px",_.textContent="+",j.setAttribute("aria-expanded","false")):(X.style.maxHeight=X.scrollHeight+"px",_.textContent="−",j.setAttribute("aria-expanded","true"))}),j.addEventListener("touchstart",function(){j.style.opacity="0.7"},{passive:!0}),j.addEventListener("touchend",function(){j.style.opacity="1"},{passive:!0}),P.appendChild(j),P.appendChild(X),l.appendChild(P)}),g.appendChild(l);var u=document.querySelector(".produtos-relacionados"),f=document.querySelector(".container-avaliacoes");if(u&&u.nextSibling?u.parentNode.insertBefore(g,u.nextSibling):f?f.parentNode.insertBefore(g,f):D.parentNode.appendChild(g),!document.getElementById("mm-faq-schema")){var b={"@context":"https://schema.org","@type":"FAQPage",mainEntity:R.map(function(E){return{"@type":"Question",name:E.q,acceptedAnswer:{"@type":"Answer",text:E.a}}})},F=document.createElement("script");F.type="application/ld+json",F.id="mm-faq-schema",F.textContent=JSON.stringify(b),document.head.appendChild(F)}te&&te.parentNode&&te.parentNode.removeChild(te)}})(),(function y(){y._retries=(y._retries||0)+1;var D=document.querySelector("#produto-react-app");if(!D||!D.querySelector("h1")){y._retries<30&&setTimeout(y,500);return}if(!document.querySelector('meta[property="og:title"]')){var R=D.querySelector("h1"),N=R?R.textContent.trim():document.title,g=document.querySelector('meta[name="description"]'),r=g?g.content.trim():"";if(!r){var l=document.querySelector(".descricao-produto .accordion-content p");l&&(r=l.textContent.trim().substring(0,200))}r||(r=N+" - Compre online na Madeira Mania com até 12x sem juros ou 7% de desconto no PIX.");var u=document.querySelector('link[rel="canonical"]'),f=u?u.href:location.href.split("?")[0],b="",F=D.querySelector(".gallery-main img, #block-imagem img");if(F&&(b=F.getAttribute("src")||F.getAttribute("data-src")||""),!b){var E=document.querySelector('meta[property="og:image"]');E&&(b=E.content)}var L=D.querySelector(".form-pag-link"),P=L&&parseFloat(L.getAttribute("data-valor-pix"))||0;if(P>0){var j="R$ "+P.toFixed(2).replace(".",",");r.indexOf("R$")===-1&&(r=r.replace(/\.$/,"")+" | A partir de "+j+" no PIX.")}r.length>200&&(r=r.substring(0,197)+"...");var z=[{property:"og:type",content:"product"},{property:"og:title",content:N},{property:"og:description",content:r},{property:"og:url",content:f},{property:"og:site_name",content:"Madeira Mania"},{property:"og:locale",content:"pt_BR"}];b&&(z.push({property:"og:image",content:b}),z.push({property:"og:image:width",content:"600"}),z.push({property:"og:image:height",content:"600"})),z.push({name:"twitter:card",content:"summary_large_image"}),z.push({name:"twitter:title",content:N}),z.push({name:"twitter:description",content:r}),b&&z.push({name:"twitter:image",content:b}),z.forEach(function(_){var X=document.createElement("meta");_.property&&X.setAttribute("property",_.property),_.name&&X.setAttribute("name",_.name),X.setAttribute("content",_.content),document.head.appendChild(X)})}})(),(function(y){"use strict";if(!document.getElementById("produto-react-app")&&!document.getElementById("pagina-produto-react-app"))return;const D="3.0.0";window.innerWidth>=1500&&y(document).ready(function(){function g(){y(".gallery-main .swiper-slide img").each(function(){var r=this,l=y(this).closest(".swiper-slide"),u=l.closest(".swiper");function f(){var b=r.naturalWidth,F=r.naturalHeight;b&&F&&b===F&&u.css({"max-width":b+"px",overflow:"hidden"})}r.complete?f():r.addEventListener("load",f)})}g()}),window._variacoesMagazordCarregado&&(console.log(`%c⚠️ Variações Magazord v${D} - Substituindo instância anterior`,"color: #ff9800; font-weight: bold"),window.GerenciadorVariacoesPillsMagazord&&y(".product-variations-pills-container").remove()),window._variacoesMagazordCarregado=D,console.log(`%c🚀 Variações Magazord v${D} (dataProduct) - Inicializando...`,"color: #2196f3; font-weight: bold");const R={formatoNome:{separador:" - ",separadorTipoValor:": ",exibirNomeCompleto:!1,primeiraParte:"nome_base"},labels:{ALTURA:"Altura",LARGURA:"Largura",ILUMINACAO:"Iluminação",ILUMINAÇÃO:"Iluminação",PROFUNDIDADE:"Profundidade",COR:"Cor",ACABAMENTO:"Acabamento",TAMANHO:"Tamanho",PORTAS:"Número de Portas",ESPELHO:"Espelho",GAVETAS:"Gavetas",MODELO:"Modelo",MATERIAL:"Material",LUGARES:"Lugares",FORMATO:"Formato"},variacoesComImagem:["COR","ACABAMENTO"],ignorarPalavras:[],selectors:{areaProdutosSugeridos:".sugestoes-cores",areaVariacoes:".derivacoes-produto .area-derivacoes",containerProduto:".info-produto, .box-info-produto, main",subtituloProduto:".informacoes-compra-produto .text-secondary-700.text-xs"},retry:{maxTentativas:10,intervaloMs:500,usarMutationObserver:!0},debug:!0,performance:{useRequestAnimationFrame:!0,debounceDelay:150}};class N{constructor(){this.variacoes={},this.produtoAtualId=null,this.produtos=[],this.tentativasDeCarregamento=0,this.observer=null,this.inicializado=!1}init(){this.log("🎯 Gerenciador de Variações Magazord v3 (dataProduct)","info"),this.log("🎨 Swatches de imagem para cores + Pills para outras variações","info"),this.esperarDOMPronto()}esperarDOMPronto(){if(typeof jQuery>"u"){setTimeout(()=>this.esperarDOMPronto(),100);return}y(document).ready(()=>{this.log("✅ DOM pronto! Aguardando dataProduct...","success"),this.esperarDataProduct()})}esperarDataProduct(){typeof dataProduct<"u"&&dataProduct.listaProdutosSugeridos?(this.log("✅ dataProduct encontrado!","success"),this.tentarCarregar()):(this.log("⏳ Aguardando dataProduct...","info"),setTimeout(()=>this.esperarDataProduct(),300))}tentarCarregar(){this.tentativasDeCarregamento++,this.log(`
🔄 Tentativa ${this.tentativasDeCarregamento}/${R.retry.maxTentativas}`,"info"),this.carregarProdutos()?(this.processarVariacoes(),this.renderizarVariacoes(),this.bindEventos(),this.inicializado=!0,this.log(`
🎉 Inicialização concluída com sucesso!`,"success"),R.retry.usarMutationObserver&&this.observarMudancasDOM()):this.tentativasDeCarregamento<R.retry.maxTentativas?setTimeout(()=>this.tentarCarregar(),R.retry.intervaloMs):this.log("❌ Número máximo de tentativas atingido.","error")}observarMudancasDOM(){this.log("ℹ️ MutationObserver desativado - dados carregados via dataProduct","info")}log(r,l="log",u=null){if(!R.debug)return;const f={info:"color: #2196f3; font-weight: bold",success:"color: #4caf50; font-weight: bold",warning:"color: #ff9800; font-weight: bold",error:"color: #f44336; font-weight: bold",log:"color: #666"};console.log(`%c${r}`,f[l]||f.log),u&&console.log(u)}carregarProdutos(){if(this.produtos=[],typeof dataProduct>"u"||!dataProduct.listaProdutosSugeridos)return this.log("❌ dataProduct ou listaProdutosSugeridos não encontrado","error"),!1;const r=dataProduct.listaProdutosSugeridos,l=dataProduct.produto,u=dataProduct.hostImagem||"";if(this.log(`📦 Encontrados ${r.length} produtos sugeridos + produto atual`,"info"),l&&l.complemento){const f=l.midia_path&&l.midia_arquivo_nome?`${u}/${l.midia_path}${l.midia_arquivo_nome}`:"",b={id:l.derivacao_id||l.produto_id,nomeCompleto:l.complemento.trim(),estoque:l.qtde_estoque,url:l.link?`/${l.link}`:"",imagem:f,imagemData:f,elemento:null,variacoes:{},nomeBase:"",nomeExibicao:"",isAtual:!0};this.produtoAtualId=b.id,this.extrairVariacoesDoNome(b),this.produtos.push(b),this.log(`   ✓ Produto atual: "${b.nomeCompleto}"`,"success")}return r.forEach((f,b)=>{const F=f.complemento||f.nome||"";if(!F)return;const E=f.derivacao_id||f.produto_id;if(E===this.produtoAtualId){this.log(`   ⏭️ Ignorando duplicata: "${F}"`,"info");return}const L=f.midia_path&&f.midia_arquivo_nome?`${u}/${f.midia_path}${f.midia_arquivo_nome}`:"",P={id:E||b,nomeCompleto:F.trim(),estoque:f.qtde_estoque,url:f.link?`/${f.link}`:"",imagem:L,imagemData:L,elemento:null,variacoes:{},nomeBase:"",nomeExibicao:"",isAtual:!1};this.extrairVariacoesDoNome(P),this.produtos.push(P),this.log(`   ✓ Sugerido: "${P.nomeCompleto}"`,"log")}),this.produtos.length===0?!1:(this.log("✅ Produtos carregados e processados:","success",this.produtos),!0)}normalizarSeparadores(r){const l=["–","—","−","‐","‑","⁃"];let u=r;return l.forEach(f=>{const b=new RegExp(`\\s${f}\\s`,"g");u=u.replace(b," - ")}),u}extrairVariacoesDoNome(r){const u=this.normalizarSeparadores(r.nomeCompleto).split(R.formatoNome.separador);this.log(`
📝 Processando: "${r.nomeCompleto}"`,"log"),R.formatoNome.primeiraParte==="nome_base"&&(r.nomeBase=u[0].trim(),u.shift()),u.forEach(f=>{const b=f.trim();if(b&&b.includes(R.formatoNome.separadorTipoValor)){const[F,...E]=b.split(R.formatoNome.separadorTipoValor),L=E.join(R.formatoNome.separadorTipoValor).trim(),P=this.normalizarTipo(F.trim());if(R.ignorarPalavras.includes(P))return;r.variacoes[P]=L,this.log(`   ✓ ${P}: ${L}`,"success")}}),r.nomeExibicao=R.formatoNome.exibirNomeCompleto?r.nomeCompleto:r.nomeBase||r.nomeCompleto,Object.keys(r.variacoes).length===0&&(r.variacoes.MODELO=r.nomeCompleto,r.nomeExibicao=r.nomeCompleto)}normalizarTipo(r){return r.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim()}processarVariacoes(){this.log(`
🔄 Processando variações...`,"info");const r=new Set;this.produtos.forEach(l=>{Object.keys(l.variacoes).forEach(u=>r.add(u))}),r.forEach(l=>{const u=new Set,f={};this.produtos.forEach(F=>{const E=F.variacoes[l];E&&(u.add(E),f[E]||(f[E]=[]),f[E].push(F))});const b=Array.from(u).sort();this.variacoes[l]={label:R.labels[l]||l,valores:b,produtosPorValor:f,usarImagem:R.variacoesComImagem.includes(l)},this.log(`   📊 ${l}: ${b.length} valor(es) único(s) → [${b.join(", ")}]`,b.length>1?"success":"warning")}),this.log("✅ Variações processadas:","success",this.variacoes)}renderizarVariacoes(){this.log(`
🎨 Renderizando variações...`,"info");let r=y(R.selectors.areaVariacoes);if(r.length===0&&(this.criarAreaVariacoes(),r=y(R.selectors.areaVariacoes)),Object.keys(this.variacoes).length===0)return;const l=y("<div>",{class:"product-variations-pills-container"});let u=0;if(Object.keys(this.variacoes).forEach(f=>{const b=this.variacoes[f];if(b.valores.length<=1){this.log(`⏭️ Ignorando "${f}" - apenas ${b.valores.length} valor(es)`,"info");return}if(b.usarImagem){const F=this.criarGrupoSwatches(f,b);l.append(F),u++}}),Object.keys(this.variacoes).forEach(f=>{const b=this.variacoes[f];if(!(b.valores.length<=1)&&!b.usarImagem){const F=this.criarGrupoPills(f,b);l.append(F),u++}}),u===0){this.log("ℹ️ Nenhuma variação com múltiplas opções - ocultando área","info"),r.closest(".derivacoes-produto").hide(),y(R.selectors.subtituloProduto).hide();return}R.performance.useRequestAnimationFrame&&window.requestAnimationFrame?requestAnimationFrame(()=>{r.empty().append(l),this.log(`✅ ${u} variação(ões) renderizada(s)!`,"success"),this.atualizarNomeProduto()}):(r.empty().append(l),this.log(`✅ ${u} variação(ões) renderizada(s)!`,"success"),this.atualizarNomeProduto())}criarAreaVariacoes(){const r=y(R.selectors.areaProdutosSugeridos);r.length>0?r.before('<div class="derivacoes-produto"><div class="area-derivacoes"></div></div>'):y("body").prepend('<div class="derivacoes-produto"><div class="area-derivacoes"></div></div>')}criarGrupoSwatches(r,l){const u=this.obterValorAtualParaTipo(r),f=y("<div>",{class:"variation-pill-group variation-pill-group--swatches","data-variacao-tipo":r,role:"group","aria-labelledby":`pill-label-${r.toLowerCase()}`}),b=y("<div>",{class:"variation-pill-label",id:`pill-label-${r.toLowerCase()}`});b.append(y("<span>").text(l.label+":")),b.append(y("<span>",{class:"variation-pill-label-value","data-label-value":r}).text(u||""));const F=y("<div>",{class:"variation-swatches-container",role:"radiogroup","aria-labelledby":`pill-label-${r.toLowerCase()}`});return l.valores.forEach((E,L)=>{const P=l.produtosPorValor[E],j=P.some(B=>B.estoque===void 0||B.estoque>0),z=E===u,_=`pill-${r.toLowerCase()}-${this.sanitizeId(E)}`,X=this.encontrarMelhorProdutoParaSwatch(r,E,P);let v=null;X&&(v=X.imagemData||X.imagem);const G=y("<input>",{type:"radio",class:"variation-pill-input",id:_,name:`variation-${r}`,value:E,"data-variacao-tipo":r,"data-produtos":JSON.stringify(P.map(B=>({id:B.id,url:B.url}))),checked:z,disabled:!j,"aria-label":`${l.label}: ${E}${j?"":" (Indisponível)"}`}),ln=y("<label>",{class:"variation-color-swatch-wrapper",for:_,"data-tooltip":E}),U=y("<div>",{class:"variation-color-swatch","data-valor":E,tabindex:z?0:-1});v?U.append(y("<img>",{src:v,alt:E,class:"variation-color-swatch-image",loading:"lazy"})):U.css({"background-color":"#E5E7EB",display:"flex","align-items":"center","justify-content":"center","font-size":"14px",color:"#6B7280"}).text(E.charAt(0).toUpperCase());const dn=y("<span>",{class:"variation-color-swatch-name",text:E,title:E});ln.append(U).append(dn),F.append(G).append(ln)}),f.append(b).append(F),f}criarGrupoPills(r,l){const u=this.obterValorAtualParaTipo(r),f=y("<div>",{class:"variation-pill-group variation-pill-group--pills","data-variacao-tipo":r,role:"group","aria-labelledby":`pill-label-${r.toLowerCase()}`}),b=y("<div>",{class:"variation-pill-label",id:`pill-label-${r.toLowerCase()}`});b.append(y("<span>").text(l.label+":")),b.append(y("<span>",{class:"variation-pill-label-value","data-label-value":r}).text(u||""));const F=y("<div>",{class:"variation-pills-container",role:"radiogroup","aria-labelledby":`pill-label-${r.toLowerCase()}`});return l.valores.forEach((E,L)=>{const P=l.produtosPorValor[E],j=P.some(ln=>ln.estoque===void 0||ln.estoque>0),z=E===u,_=`pill-${r.toLowerCase()}-${this.sanitizeId(E)}`,X=y("<input>",{type:"radio",class:"variation-pill-input",id:_,name:`variation-${r}`,value:E,"data-variacao-tipo":r,"data-produtos":JSON.stringify(P.map(ln=>({id:ln.id,url:ln.url}))),checked:z,disabled:!j,"aria-label":`${l.label}: ${E}${j?"":" (Indisponível)"}`});let v=E;j||(v+=' <span class="variation-pill-badge">Indisponível</span>');const G=y("<label>",{class:"variation-pill",for:_,html:v,"data-valor":E,tabindex:z?0:-1});F.append(X).append(G)}),f.append(b).append(F),f}sanitizeId(r){return r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}encontrarMelhorProdutoParaSwatch(r,l,u){const f=this.produtos.find(L=>L.isAtual||L.id===this.produtoAtualId);if(!f||u.length===0)return u[0]||null;if(u.length===1)return u[0];const b=f.variacoes;let F=null,E=-1;return u.forEach(L=>{let P=0;Object.keys(b).forEach(j=>{j!==r&&L.variacoes[j]===b[j]&&P++}),(L.imagemData||L.imagem)&&(P+=.5),P>E&&(E=P,F=L)}),this.log(`   🎯 Melhor produto para ${r}="${l}": score=${E}`,"log"),F||u[0]}obterValorAtualParaTipo(r){const l=this.produtos.find(u=>u.isAtual||u.id===this.produtoAtualId);return l?l.variacoes[r]:null}atualizarNomeProduto(){const r=this.produtos.find(u=>u.isAtual||u.id===this.produtoAtualId);if(!r)return;["h1.nome-produto",".product-name h1",".info-produto h1",'h1[itemprop="name"]',".box-info-produto h1"].forEach(u=>{const f=y(u);f.length>0&&f.text(r.nomeExibicao)})}bindEventos(){this.log(`
🔗 Vinculando eventos...`,"info"),y(document).on("change",".variation-pill-input",r=>{this.aoMudarVariacao(r)}),y(document).on("keydown",".variation-pills-container, .variation-swatches-container",r=>{this.handleKeyboardNavigation(r)}),y(document).on("click",".variation-pill, .variation-color-swatch-wrapper",function(){const r=y(this).is("label")?y("#"+y(this).attr("for")):y(this).closest("label").prev(".variation-pill-input");r.length&&!r.prop("disabled")&&y(this).closest(".variation-pill-group").addClass("is-loading")}),this.log("✅ Eventos vinculados","success")}handleKeyboardNavigation(r){const u=y(r.currentTarget).find(".variation-pill-input:not(:disabled)"),f=y(document.activeElement);if(!f.hasClass("variation-pill-input"))return;const b=u.index(f);let F=b;switch(r.key){case"ArrowRight":case"ArrowDown":r.preventDefault(),F=(b+1)%u.length;break;case"ArrowLeft":case"ArrowUp":r.preventDefault(),F=b-1<0?u.length-1:b-1;break;case"Home":r.preventDefault(),F=0;break;case"End":r.preventDefault(),F=u.length-1;break;default:return}u.eq(F).focus().prop("checked",!0).trigger("change")}aoMudarVariacao(r){const l=y(r.target),u=l.data("variacao-tipo"),f=l.val();this.log(`
🔄 Variação selecionada: ${u} = ${f}`,"info"),y(`.variation-pill-label-value[data-label-value="${u}"]`).text(f);const b={};y(".variation-pill-input:checked").each(function(){const E=y(this).data("variacao-tipo"),L=y(this).val();L&&(b[E]=L)}),this.log("📋 Seleção atual:","info",b);const F=this.encontrarProdutoPorVariacoes(b);if(F)this.log("✅ Produto encontrado!","success",F),this.navegarParaProduto(F);else{this.log("⚠️ Produto exato não encontrado, buscando melhor correspondência...","warning");const E=this.encontrarMelhorCorrespondencia(b);E?(this.log("✅ Melhor correspondência encontrada!","success",E),this.navegarParaProduto(E)):(this.log("❌ Nenhum produto correspondente encontrado","error"),y(".variation-pill-group").removeClass("is-loading"))}}encontrarProdutoPorVariacoes(r){return this.produtos.find(l=>Object.keys(r).every(u=>l.variacoes[u]===r[u]))}encontrarMelhorCorrespondencia(r){let l=null,u=0;return this.produtos.forEach(f=>{let b=0;Object.keys(r).forEach(F=>{f.variacoes[F]===r[F]&&b++}),b>u&&(u=b,l=f)}),u>0?l:null}navegarParaProduto(r){this.log(`
🚀 Navegando para: ${r.url}`,"info"),r.url?window.location.href=r.url:(this.log("❌ URL não encontrada para navegação","error"),y(".variation-pill-group").removeClass("is-loading"))}}setTimeout(function(){y(".product-variations-pills-container").remove(),y(".derivacoes-produto").remove();const g=new N;g.init(),window.GerenciadorVariacoesPillsMagazord=g},100)})(typeof jQuery<"u"?jQuery:window.jQuery||window.$),(function(D){"use strict";if(!D||D.MMStorefrontFlow)return;function R(r){return/(?:^|;\s*)zordEm=[^;\s]+/.test(String(r||""))}function N(r){return R(r)?"/checkout/onepage":"/checkout/identify"}function g(r){return r=r||{},r.hasPendingIntent===!0&&String(r.title||"").trim()==="Adicionado ao carrinho!"&&String(r.popupClass||"").indexOf("popup-adicionado-ao-carrinho")===-1&&r.hasSwal===!0}D.MMStorefrontFlow=Object.freeze({isLoggedCustomer:R,checkoutTarget:N,shouldPromoteVitrineSuccess:g})})(window),(function(){"use strict";var y=1e4,D=0,R=!1;function N(){return window.MMStorefrontFlow||null}function g(){var o=N();return o&&typeof o.isLoggedCustomer=="function"?o.isLoggedCustomer(document.cookie):/(?:^|;\s*)zordEm=[^;\s]+/.test(document.cookie||"")}function r(){var o=N();return o&&typeof o.checkoutTarget=="function"?o.checkoutTarget(document.cookie):g()?"/checkout/onepage":"/checkout/identify"}function l(){if(!(typeof jQuery>"u"&&typeof $>"u")){var o=typeof jQuery<"u"?jQuery:$;o(document).ajaxComplete(function(p,d,x){x.url&&x.url.indexOf("checkout/cart")!==-1&&setTimeout(function(){window.dispatchEvent(new CustomEvent("reactItemAddedToCart"))},100)})}}function u(){var o=document.documentElement;if(!o||o.dataset.mmVitrineFeedbackObserver==="1")return;o.dataset.mmVitrineFeedbackObserver="1",document.addEventListener("click",function(x){var S=x.target;!S||!S.closest||!S.closest(".btn-comprar-vitrine")||(D=Date.now()+y)},!0);function p(){if(!(R||Date.now()>D))for(var x=window.Swal,S=!!(x&&typeof x.fire=="function"),A=document.querySelectorAll('.swal2-popup, [role="alert"]'),M=0;M<A.length;M+=1){var e=A[M],m=e.querySelector(".swal2-title, h2"),c=m?m.textContent:"",k=N(),T=k&&typeof k.shouldPromoteVitrineSuccess=="function"?k.shouldPromoteVitrineSuccess({hasPendingIntent:Date.now()<=D,title:c,popupClass:typeof e.className=="string"?e.className:"",hasSwal:S}):Date.now()<=D&&String(c||"").trim()==="Adicionado ao carrinho!"&&!e.classList.contains("popup-adicionado-ao-carrinho")&&S;if(T){D=0,R=!0;try{x.close()}catch{}setTimeout(function(){var O;try{O=x.fire({title:"Produto adicionado ao seu carrinho!",text:"O que você deseja fazer a seguir?",icon:"success",width:600,showCloseButton:!0,showConfirmButton:!0,showDenyButton:!0,confirmButtonText:"Continuar comprando",denyButtonText:"Finalizar compra",confirmButtonColor:"#FFFFFF",denyButtonColor:"#27AE60",focusConfirm:!1,customClass:{popup:"popup-adicionado-ao-carrinho",icon:"icone-adicionado-ao-carrinho",title:"titulo-adicionado-ao-carrinho",actions:"actions-popup-add-carrinho",confirmButton:"botao-continuar-comprando",denyButton:"botao-finalizar-compra"}})}catch{R=!1;return}if(!O||typeof O.then!="function"){R=!1;return}O.then(function(Z){R=!1,Z&&Z.isDenied&&(window.location.href="/checkout/cart")},function(){R=!1})},0);return}}}var d=new MutationObserver(function(){setTimeout(p,0)});d.observe(document.body||o,{childList:!0,subtree:!0})}function f(){var o=document.querySelector("#cart-preview-area .border-t.border-solid");if(!(!o||o.querySelector(".installment-total"))){var p=0,d=document.querySelectorAll("#cart-preview-area .cart-item");if(d.forEach(function(M){var e=parseFloat(M.getAttribute("data-item-price"))||0,m=parseInt(M.getAttribute("data-item-quantity"))||1;p+=e*m}),!(p<=0)){var x=(p/12).toFixed(2).replace(".",","),S=document.createElement("div");S.className="installment-total",S.textContent="ou 12x de R$ "+x;var A=o.querySelector(".valor-pix");A&&A.parentNode&&A.parentNode.insertBefore(S,A.nextSibling)}}}var b='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/></svg>',F='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',E='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>';function L(){f();var o=document.querySelectorAll("#cart-preview-area .cart-item, .content-cart .cart-item");o.forEach(function(p){if(!p.querySelector(".qty-btn-minus")){var d=p.querySelector(".qtd-value");if(d){var x=p.querySelector(".cart-remove-item"),S=x?x.getAttribute("data-id"):null;if(S){var A=p.querySelector(".prod-remove");A&&!d.contains(x)&&(d.appendChild(x),A.style.display="none");var M=d.parentElement,e=null;if(M)for(var m=0;m<M.children.length;m++){var c=M.children[m];if(c!==d&&c.classList&&c.classList.contains("valor")){e=c;break}}e&&!d.contains(e)&&d.appendChild(e);var k=parseInt(p.getAttribute("data-item-quantity"));if(!k||isNaN(k)){var T=d.textContent.match(/(\d+)/);k=T?parseInt(T[1]):1}var O=document.createElement("button");O.className="qty-btn-minus",O.type="button",O.setAttribute("aria-label","Diminuir quantidade"),O.innerHTML=b,O.addEventListener("click",function(fn){fn.preventDefault(),fn.stopPropagation();var yn=parseInt(Z.textContent)||1;if(yn<=1){var vn=p.querySelector(".cart-remove-item");vn&&vn.click();return}Et(p,S,-1,Z,O,J)});var Z=document.createElement("span");Z.className="qty-display",Z.textContent=k;var J=document.createElement("button");J.className="qty-btn-plus",J.type="button",J.setAttribute("aria-label","Aumentar quantidade"),J.innerHTML=F,J.addEventListener("click",function(fn){fn.preventDefault(),fn.stopPropagation(),Et(p,S,1,Z,O,J)});var mn=document.createElement("div");mn.className="mm-qty-wrap",mn.appendChild(O),mn.appendChild(Z),mn.appendChild(J),d.insertBefore(mn,d.firstChild),x&&(x.innerHTML=E,x.setAttribute("aria-label","Remover produto"))}}}})}function P(){document.addEventListener("click",function(o){var p=o.target.closest(".cart-remove-item");if(!(!p||!p.closest("#cart-preview-area"))){o.preventDefault(),o.stopPropagation(),o.stopImmediatePropagation();var d=p.getAttribute("data-id");if(d){var x=p.closest(".cart-item"),S=x&&x.querySelector(".prod-nome")?.textContent?.trim()||"este produto",A=S.length>50?S.substring(0,50)+"…":S,M=document.getElementById("mm-confirm-overlay");M&&M.remove();var e=document.createElement("div");e.id="mm-confirm-overlay",e.className="mm-confirm-overlay",e.innerHTML='<div class="mm-confirm-card"><p class="mm-confirm-title">Remover produto?</p><p class="mm-confirm-desc">'+A.replace(/&/g,"&amp;").replace(/</g,"&lt;")+'</p><div class="mm-confirm-actions"><button class="mm-confirm-btn mm-confirm-btn-cancel">Manter</button><button class="mm-confirm-btn mm-confirm-btn-delete">Remover</button></div></div>',document.body.appendChild(e),e.querySelector(".mm-confirm-btn-cancel").addEventListener("click",function(){e.remove()}),e.querySelector(".mm-confirm-btn-delete").addEventListener("click",function(){e.remove(),window.__mmDeleteItem&&x?window.__mmDeleteItem(x,d):typeof Zord<"u"&&Zord.checkout&&Zord.checkout.deleteItem(parseInt(d))}),e.addEventListener("click",function(m){m.target===e&&e.remove()})}}},!0)}function j(){document.addEventListener("click",function(o){var p=o.target;if(!(!p||!p.closest)){var d=p.closest(".finalizar-compra, .box-total-btn .checkout a, .box-total-btn .checkout .button");if(d){var x=d.closest("#cart-preview-area"),S=d.closest(".carrinho-rapido-ctn");if(!(!x&&!S)){if(g()){o.preventDefault(),o.stopPropagation(),window.location.href=r();return}x&&(o.preventDefault(),o.stopPropagation(),window.location.href="/checkout/identify")}}}},!0)}function z(){try{var o=document.querySelector("#resumo-compra");if(o){var p=o.querySelector(".txt-cupom");if(p){var d=(p.textContent||"").replace(/\s+/g,"").trim();if(/^[A-Za-z0-9][A-Za-z0-9._-]{1,}$/.test(d))return d.toUpperCase()}return""}}catch{}try{var x=JSON.parse(localStorage.getItem("mm_cart_snapshot")||"null");if(x&&x.couponCode)return String(x.couponCode).toUpperCase()}catch{}return""}function _(o,p){var d="cep=&nenhumCreditoSelecionado=true&id="+encodeURIComponent(String(p))+"&area=main-cart",x=z();return x&&(d+="&cupom-desconto="+encodeURIComponent(x)),fetch("/checkout/cart?operation="+encodeURIComponent(o),{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"text/html,application/json,*/*","X-Requested-With":"XMLHttpRequest"},body:d}).then(function(S){if(!S.ok)throw new Error("HTTP "+S.status);return S.text()})}var X=1500,v=2e3,G="mm_cep",ln="mm_cart_snapshot",U=1800*1e3;function dn(){try{var o=localStorage.getItem(G)||"",p=o.replace(/\D/g,"");if(p.length===8)return p}catch{}return null}function B(o){return!o||o.length!==8?"":o.slice(0,5)+"-"+o.slice(5)}function V(o){if(!o||o.length!==8)return v;var p=parseInt(o.slice(0,2),10);return isNaN(p)?v:p>=1&&p<=39||p>=80&&p<=99?X:v}function rn(){try{var o=localStorage.getItem(ln);if(!o)return null;var p=JSON.parse(o);return!p||!p.ts||Date.now()-p.ts>U?null:p}catch{return null}}function Rn(o){var p=[];return o.forEach(function(d){var x=(d.querySelector(".prod-nome a, .prod-nome")||{}).textContent||"",S=d.querySelector(".qty-display"),A=S?parseInt(S.textContent):parseInt(d.getAttribute("data-item-quantity"))||1;p.push(x.trim().slice(0,30)+"x"+A)}),p.sort().join("|")}function wn(o){if(!o||!Array.isArray(o.items))return"";var p=o.items.map(function(d){return(d.name||"").trim().slice(0,30)+"x"+(d.quantity||1)});return p.sort().join("|")}var Nn='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg>',qn='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18M6 6l12 12"/></svg>',at=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];function Jn(o){if(!o)return null;var p=String(o).match(/\d+/g);return!p||!p.length?null:Math.max.apply(null,p.map(Number))}function Wn(o,p){for(var d=new Date(o.getTime()),x=0;x<p;){d.setDate(d.getDate()+1);var S=d.getDay();S!==0&&S!==6&&x++}return d}function jn(o){var p=new Date,d="dia "+o.getDate()+" de "+at[o.getMonth()];return o.getFullYear()!==p.getFullYear()&&(d+=" de "+o.getFullYear()),d}function An(o){var p=Jn(o);if(!p||p<1)return null;var d=Wn(new Date,p);return"Receba até "+jn(d)}var Mn={},st=4e3,lt={};function Qn(o,p){if(!o||o.length!==8)return Promise.resolve(null);if(Mn[o])return Mn[o];if(!p){var d=lt[o]||0;if(Date.now()-d<st)return Promise.resolve(null)}var x="cep="+encodeURIComponent(o.slice(0,5)+"-"+o.slice(5))+"&nenhumCreditoSelecionado=true&area=main-cart",S=z();S&&(x+="&cupom-desconto="+encodeURIComponent(S));var A=fetch("/checkout/cart?operation=atualizaValoresCarrinho",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"text/html,application/json,*/*","X-Requested-With":"XMLHttpRequest"},body:x}).then(function(M){if(!M.ok)throw new Error("HTTP "+M.status);return M.text()}).then(function(M){return lt[o]=Date.now(),ut(M)}).catch(function(){return null}).then(function(M){return delete Mn[o],M});return Mn[o]=A,A}function ut(o){try{var p=new DOMParser().parseFromString(o,"text/html"),d=p.querySelector("#resumo-compra .frete-calculado")||p.querySelector(".frete-calculado");if(!d)return null;var x="",S=d.querySelector(".frete-location .city");S&&(x=S.textContent.trim());var A=null,M="",e="",m=d.querySelector(".info-frete-selec");if(m){var c=m.querySelector(".dias-entrega"),k=m.querySelector(".info-title span, .info-title");c&&(M=(c.textContent||"").trim()),k&&(e=(k.textContent||"").trim())}var T=d.querySelector(".line.valor-frete .value, .value.valor-frete")||d.querySelector(".valor-compra-frete .value");if(T){var O=(T.textContent||"").trim();if(/gr[áa]tis/i.test(O))A=0;else{var Z=O.match(/[\d.,]+/);if(Z){var J=parseFloat(Z[0].replace(/\./g,"").replace(",","."));isNaN(J)||(A=J)}}}if(A==null){var mn=d.querySelector(".servico-frete");if(mn){var fn=parseFloat(mn.getAttribute("data-valor-frete")||"0");if(isNaN(fn)||(A=fn),e||(e=mn.getAttribute("data-servico-frete")||""),!M){var yn=mn.querySelector(".dias-entrega");yn&&(M=(yn.textContent||"").trim())}}}if(A==null)return null;var vn=null,Tn=p.querySelector(".total-boleto .value, .totais-valor.total-boleto .value");if(Tn){var Ln=(Tn.textContent||"").trim(),Xn=Ln.match(/[\d.,]+/);if(Xn){var rt=parseFloat(Xn[0].replace(/\./g,"").replace(",","."));isNaN(rt)||(vn=rt)}}return{city:x,shipping:A,shippingDeadline:M,shippingName:e,totalPix:vn}}catch{return null}}function Kn(o,p,d){if(!(!o||!d)){vt(o);try{let m=function(c){for(var k=0;k<S.length;k++)if(S[k]&&S[k].name===c)return S[k];return null};var x=rn()||{};x.ts=Date.now(),x.cepValue=p.slice(0,5)+"-"+p.slice(5),x.shipping=d.shipping,x.shippingDeadline=d.shippingDeadline,x.shippingName=d.shippingName,x.shippingCity=d.city,d.totalPix!=null&&(x.subtotalPix=d.totalPix);var S=x.items&&x.items.length?x.items:[],A=o.querySelectorAll(".cart-item:not(.mm-removing)");x.items=Array.prototype.map.call(A,function(c){var k=c.querySelector(".prod-nome a, .prod-nome"),T=(k&&k.textContent||"").trim(),O=c.querySelector(".qty-display"),Z=O?parseInt(O.textContent):parseInt(c.getAttribute("data-item-quantity"))||1,J=m(T);return J&&J.quantity===Z&&(J.lineTotalPix>0||J.lineTotal>0||J.imgSrc)?J:{name:T,quantity:Z}}),localStorage.setItem(ln,JSON.stringify(x))}catch{}var M=o.querySelectorAll(".cart-item:not(.mm-removing)"),e=0;M.forEach(function(m){var c=m.querySelector(".valor");if(c){var k=Pn(c.textContent);isNaN(k)||(e+=k)}}),o.querySelector(".box-total-btn")?Ct(o):ht(o)}}function Bn(o){var p=dn();if(p){var d=rn(),x=wn(d),S=Rn(o.querySelectorAll(".cart-item:not(.mm-removing)")),A=d&&d.cepValue&&d.cepValue.replace(/\D/g,"")===p,M=d&&d.shipping!=null&&!isNaN(d.shipping);d&&x===S&&A&&M||Qn(p).then(function(e){e&&Kn(o,p,e)})}}function Hn(o){return String(o||"").replace(/[&<>"']/g,function(p){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[p]})}function bn(o){if(!o)return null;var p=o.querySelector(".box-total-btn");if(p)return{host:p,before:p.querySelector(".total")};var d=o.querySelector(".area-finalizar-compra");if(d)return{host:d,before:d.firstElementChild};var x=o.querySelector(".finalizar-compra");if(x&&x.parentElement){var S=x.parentElement;return{host:S,before:S.firstElementChild}}return null}function Fn(o){if(!o)return null;var p=o.closest(".carrinho-rapido-ctn");return p||(o.closest("#cart-preview-area")?Bt():null)}function Gn(o,p,d,x){if(o){var S=bn(o);if(S){var A=S.host;o.classList.add("mm-ship-scope");var M=dn(),e=rn(),m=Rn(o.querySelectorAll(".cart-item:not(.mm-removing)")),c=wn(e),k=e&&c===m,T=V(M),O=p>=T,Z=Math.max(0,T-p),J=Math.max(0,Math.min(100,p/T*100)),mn=A.querySelector(".mm-cart-ship");if(!mn){mn=document.createElement("div"),mn.className="mm-cart-ship",mn.setAttribute("role","group"),mn.setAttribute("aria-label","Informações de frete");var fn=S.before;fn&&fn.parentNode===A?A.insertBefore(mn,fn):A.insertBefore(mn,A.firstChild)}if(mn.classList.toggle("is-free",O),xn(mn),mn.dataset.mmEditing!=="1"){var yn=e&&e.cepValue&&e.cepValue.replace(/\D/g,"")===M,vn=M&&k&&yn&&e.shippingCity,Tn=vn?An(e.shippingDeadline):null,Ln="";if(Ln+='<div class="mm-cart-ship-location">',M){var Xn=B(M);if(vn&&(Xn+=" · "+Hn(e.shippingCity)),Ln+='<span class="mm-cart-ship-label">Envio para</span><div class="mm-cart-ship-location-value"><span>'+Xn+'</span><button class="mm-cart-ship-edit" type="button" data-mm-ship="edit">Trocar</button></div>',Tn){var rt=Hn(Tn);x&&d>0?rt+=" · <strong>"+Hn(En(d))+"</strong>":x&&d===0&&(rt+=" · <strong>Grátis</strong>"),Ln+='<span class="mm-cart-ship-deadline">'+rt+"</span>"}}else Ln+='<span class="mm-cart-ship-label">Calcule o frete</span><div class="mm-cart-ship-location-value"><span style="color:#9CA3AF;font-weight:500;">Informe seu CEP</span><button class="mm-cart-ship-edit" type="button" data-mm-ship="edit">Calcular</button></div>';Ln+="</div>";var zt=O?"Frete grátis desbloqueado":"Faltam "+En(Z)+" para frete grátis",gt=parseFloat(o.dataset.mmShipPct||"0")||0;Ln+='<div class="mm-cart-ship-progress">',Ln+='<div class="mm-cart-ship-bar" role="progressbar" aria-valuenow="'+Math.round(p)+'" aria-valuemin="0" aria-valuemax="'+Math.round(T)+'" aria-valuetext="'+Hn(zt)+'" aria-label="Progresso para frete grátis"><div class="mm-cart-ship-bar-fill" style="width:'+gt.toFixed(1)+'%"></div></div>',Ln+='<p class="mm-cart-ship-nudge'+(O?" is-free":"")+'">',O?Ln+=Nn+"Frete grátis garantido":Ln+="Faltam <strong>"+Hn(En(Z))+"</strong> para frete grátis",Ln+="</p>",Ln+="</div>",mn.innerHTML=Ln;var Un=mn.querySelector(".mm-cart-ship-bar-fill");Un&&requestAnimationFrame(function(){Un.style.width=J.toFixed(1)+"%"});var Yn=o.dataset.mmShipWasFree==="1";O&&!Yn&&gt>0&&(mn.classList.remove("mm-just-unlocked"),mn.offsetWidth,mn.classList.add("mm-just-unlocked"),setTimeout(function(){mn.classList.remove("mm-just-unlocked")},1400)),o.dataset.mmShipWasFree=O?"1":"",o.dataset.mmShipPct=J.toFixed(1)}}}}var nt='<svg class="mm-cart-ship-spinner" width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><style>.mm-sp{animation:mm-spin 1.2s linear infinite;transform-origin:center}.mm-sp circle{stroke:#4B664A;stroke-width:3;fill:none;stroke-linecap:round;stroke-dasharray:44;stroke-dashoffset:16;animation:mm-sp-dash 1.2s ease-in-out infinite}@keyframes mm-spin{to{transform:rotate(360deg)}}@keyframes mm-sp-dash{0%{stroke-dashoffset:44}50%{stroke-dashoffset:8}100%{stroke-dashoffset:44}}</style><g class="mm-sp"><circle cx="12" cy="12" r="9.5"/></g></svg>';function tt(o){if(o){var p=o.querySelector(".mm-cart-ship-deadline");if(p)p.innerHTML="Recalculando frete "+nt;else{var d=o.querySelector(".mm-cart-ship-location");if(d){var x=document.createElement("span");x.className="mm-cart-ship-deadline",x.innerHTML="Recalculando frete "+nt,d.appendChild(x)}}var S=bn(o);S&&S.host.classList.add("mm-ship-loading")}}function vt(o){if(o){var p=bn(o);p&&p.host.classList.remove("mm-ship-loading")}}function xn(o){!o||o.dataset.mmShipBound||(o.dataset.mmShipBound="1",o.addEventListener("click",function(p){var d=p.target.closest('[data-mm-ship="edit"]');if(d){p.preventDefault(),p.stopPropagation(),ft(o);return}var x=p.target.closest('[data-mm-ship="cancel"]');if(x){p.preventDefault(),p.stopPropagation(),St(o);return}p.target.closest(".mm-cart-ship-cep-form")&&p.stopPropagation()},!0))}function ft(o){var p=o.querySelector(".mm-cart-ship-location");if(p){o.dataset.mmEditing="1";var d=dn()||"";p.innerHTML='<span class="mm-cart-ship-label">Digite seu CEP</span><form class="mm-cart-ship-cep-form" data-mm-ship-form="1" novalidate><input class="mm-cart-ship-cep-input" type="text" inputmode="numeric" autocomplete="postal-code" placeholder="00000-000" maxlength="9" value="'+Hn(B(d))+'" aria-label="CEP" /><button class="mm-cart-ship-cep-save" type="submit">OK</button><button class="mm-cart-ship-cep-cancel" type="button" data-mm-ship="cancel" aria-label="Cancelar">'+qn+"</button></form>";var x=p.querySelector(".mm-cart-ship-cep-input"),S=p.querySelector("form");x&&(setTimeout(function(){try{x.focus(),x.select()}catch{}},10),x.addEventListener("input",function(){x.classList.remove("is-invalid");var A=x.value.replace(/\D/g,"").slice(0,8);x.value=A.length>5?A.slice(0,5)+"-"+A.slice(5):A}),x.addEventListener("keydown",function(A){A.key==="Escape"&&(A.preventDefault(),St(o))})),S&&S.addEventListener("submit",function(A){A.preventDefault(),A.stopPropagation(),Pt(o)})}}function St(o){o.dataset.mmEditing="";var p=Fn(o);if(p){var d=p.querySelectorAll(".cart-item:not(.mm-removing)"),x=0;d.forEach(function(S){var A=S.querySelector(".valor");if(A){var M=Pn(A.textContent);isNaN(M)||(x+=M)}}),Gn(p,x)}}function Pt(o){var p=o.querySelector(".mm-cart-ship-cep-input");if(p){var d=p.value.replace(/\D/g,"");if(d.length!==8){p.classList.add("is-invalid"),p.focus();return}try{localStorage.setItem(G,d)}catch{}var x=o.querySelector(".mm-cart-ship-cep-save");x&&(x.disabled=!0,x.textContent="...");var S=Fn(o);try{var A=rn();A&&(A.cepValue="",localStorage.setItem(ln,JSON.stringify(A)))}catch{}St(o),Qn(d).then(function(M){M&&S&&Kn(S,d,M)})}}function Pn(o){if(!o)return NaN;var p=String(o).replace(/\s/g,"").match(/([\d.,]+)/);return p?parseFloat(p[1].replace(/\./g,"").replace(",",".")):NaN}function En(o){return isNaN(o)?"":"R$ "+o.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function ot(o){if(isNaN(o))return"";var p=o.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),d=p.split(",");return"R$&nbsp;"+d[0]+'<span class="mm-cents">,'+(d[1]||"00")+"</span>"}function pt(o){var p=0;return Array.prototype.forEach.call(o,function(d){var x=parseFloat(d.getAttribute("data-item-price"))||0,S=parseInt(d.getAttribute("data-item-quantity"));if(!S||isNaN(S)){var A=d.querySelector(".qty-display");A?S=parseInt(A.textContent)||1:S=1}p+=x*S}),p}function Ot(o){var p=o.querySelectorAll(".cart-item:not(.mm-removing)");p.forEach(function(d){var x=parseFloat(d.getAttribute("data-item-price"))||0,S=parseInt(d.getAttribute("data-item-quantity"));if(!S||isNaN(S)){var A=d.querySelector(".qty-display");A?S=parseInt(A.textContent)||1:S=1}var M=d.querySelector(".valor");M&&x>0&&(M.innerHTML=ot(x*S))})}function _n(o){if(!(!o||o.dataset.mmTotalRatio)){var p=o.querySelectorAll(".cart-item");if(p.length){var d=pt(p),x=o.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||o.querySelector(".box-total-btn .linha-total .valor-final strong");if(x&&d>.01){var S=Pn(x.textContent);isNaN(S)||(o.dataset.mmTotalRatio=String(S/d))}}}}function Dt(o,p){var d=o.querySelector(".box-total-btn .linha-total");if(d){var x=d.parentElement.querySelector(".mm-cart-savings");if(x&&x.remove(),!(!p||p<.01)){var S=document.createElement("span");S.className="mm-cart-savings",S.textContent="Você economiza "+En(p)+" com PIX",d.nextSibling?d.parentElement.insertBefore(S,d.nextSibling):d.parentElement.appendChild(S)}}}function Ct(o,p){if(o){_n(o);var d=o.querySelectorAll(".cart-item:not(.mm-removing)"),x=pt(d),S=o.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||o.querySelector(".box-total-btn .linha-total .valor-final strong"),A=parseFloat(o.dataset.mmTotalRatio||"0.95")||.95,M=x*A,e=x-M,m=dn(),c=rn(),k=wn(c),T=Rn(d),O=c&&c.cepValue&&c.cepValue.replace(/\D/g,"")===m,Z=!!(m&&c&&O&&c.shipping!=null&&!isNaN(c.shipping)),J=o.dataset.mmShipPendingFetch==="1";!Z&&J&&m&&c&&c.shipping!=null&&(Z=!0);var mn=Z?parseFloat(c.shipping):0,fn=M+mn,yn=x+mn;if(S){var vn=Pn(S.textContent);if(p)(isNaN(vn)||Math.abs(fn-vn)>.005)&&(S.innerHTML=ot(fn));else if(!isNaN(vn)&&Math.abs(fn-vn)>.005){var Tn=o.querySelector(".box-total-btn .linha-total .valor-final");Tn&&(Tn.classList.remove("mm-pop"),Tn.offsetWidth,Tn.classList.add("mm-pop"),setTimeout(function(){Tn.classList.remove("mm-pop")},450)),jt(S,vn,fn)}else S.innerHTML=ot(fn)}var Ln=o.querySelector(".box-total-btn .valor-final.card");if(Ln){var Xn=yn/12;Ln.innerHTML="<span>ou em até <strong>12x</strong> de <strong>"+En(Xn)+"</strong> no cartão</span>"}var rt=o.querySelector(".box-total-btn .linha-total .valor-final .tipo-pagto");rt&&(rt.textContent="No PIX"),Dt(o,e),Gn(o,x,mn,Z);try{var zt=0;d.forEach(function(Un){var Yn=Un.querySelector(".qty-display");Yn&&(zt+=parseInt(Yn.textContent)||0)});var gt=document.getElementById("mm-h-cart-count");gt&&(zt>0?(gt.textContent=zt>99?"99+":String(zt),gt.hidden=!1):gt.hidden=!0)}catch{}}}function Nt(){var o=document.querySelector(".carrinho-rapido-ctn");if(!(!o||!o.querySelector(".box-total-btn"))){var p=o.querySelectorAll(".cart-item:not(.mm-removing)");if(p.length){var d=o.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||o.querySelector(".box-total-btn .linha-total .valor-final strong");if(d){var x=pt(p);if(x>.01){var S=parseFloat(o.dataset.mmTotalRatio||"0.95")||.95,A=dn(),M=rn(),e=M&&M.cepValue&&M.cepValue.replace(/\D/g,"")===A,m=!!(A&&M&&e&&M.shipping!=null&&!isNaN(M.shipping));!m&&o.dataset.mmShipPendingFetch==="1"&&A&&M&&M.shipping!=null&&(m=!0);var c=m?parseFloat(M.shipping):0,k=x*S+c,T=Pn(d.textContent);(isNaN(T)||Math.abs(k-T)>.01)&&Ct(o,!0)}}}}}function Bt(){var o=document.querySelector('#cart-preview-area > div[class*="z-[9999]"]');if(o)return o;var p=document.querySelector(".carrinho-rapido-ctn");return p&&!p.querySelector(".box-total-btn")&&p.querySelector(".valor-pix")?p:null}function qt(o,p){var d=o.querySelector(".installment-total");if(!(!d||!d.parentElement)){var x=d.parentElement,S=x.querySelector(".mm-cart-savings-mobile");if(!p||p<.01){S&&S.remove();return}var A="Você economiza "+En(p)+" com PIX";if(S){S.textContent!==A&&(S.textContent=A);return}var M=document.createElement("span");M.className="mm-cart-savings-mobile",M.textContent=A,d.nextSibling?x.insertBefore(M,d.nextSibling):x.appendChild(M)}}function Gt(o,p,d){if(!(!o||!o.classList||!o.classList.contains("carrinho-rapido-ctn"))&&!o.querySelector(".box-total-btn")){var x=o.querySelector(".area-finalizar-compra");if(!(!x||!(p>0))){var S=x.querySelector(".forma-pix"),A=S?S.parentElement:null;if(A){var M=p*d,e=p/12,m=p-M;A.classList.add("mm-native-pay-hidden");var c=x.querySelector(".mm-cart-total-b");c||(c=document.createElement("div"),c.className="mm-cart-total-b",c.innerHTML='<span class="mm-tb-label">Total</span><span class="mm-tb-row"><strong class="mm-tb-value"></strong><span class="mm-tb-pix">No PIX</span></span><span class="mm-tb-savings"></span><span class="mm-tb-parcela"></span>',A.nextSibling?x.insertBefore(c,A.nextSibling):x.appendChild(c));var k=c.querySelector(".mm-tb-value"),T=En(M);k&&k.textContent!==T&&(k.textContent=T);var O=c.querySelector(".mm-tb-savings");if(O)if(m>=.01){var Z="Você economiza "+En(m)+" com PIX";O.textContent!==Z&&(O.textContent=Z),O.style.display=""}else O.style.display="none";var J=c.querySelector(".mm-tb-parcela");if(J){var mn="ou em até 12x de "+En(e)+" no cartão";J.textContent!==mn&&(J.textContent=mn)}}}}}function ht(o){if(o=o||Bt(),!(!o||o.querySelector(".box-total-btn")||!o.querySelector(".valor-pix"))){var p=o.querySelectorAll(".cart-item:not(.mm-removing)"),d=p.length,x=document.getElementById("mm-h-cart-count");if(x&&d>0){var S=d>99?"99+":String(d);(x.textContent!==S||x.hidden)&&(x.textContent=S,x.hidden=!1)}if(p.length){var A=pt(p);if(A>0){Array.prototype.forEach.call(p,function(gt){var Un=parseFloat(gt.getAttribute("data-item-price"))||0;if(Un>0){var Yn=parseInt(gt.getAttribute("data-item-quantity"));if(!Yn||isNaN(Yn)){var Zt=gt.querySelector(".qty-display");Yn=Zt&&parseInt(Zt.textContent)||1}var Ht=gt.querySelector(".valor");if(Ht){var Yt=Un*Yn,dt=Ht.querySelector("span")||Ht,ae=Pn(dt.textContent);(isNaN(ae)||Math.abs(ae-Yt)>.005)&&(dt.textContent=En(Yt))}}});var M=o.querySelector(".valor-pix"),e=M?M.querySelector("span")||M:null;if(!o.dataset.mmMobileRatio&&e){var m=Pn(e.textContent);if(!isNaN(m)&&m>0){var c=m/A;c>.8&&c<=1.0001&&(o.dataset.mmMobileRatio=String(c))}}var k=parseFloat(o.dataset.mmMobileRatio||"0.95");if(k>.8&&k<=1.0001||(k=.95),e){var T=A*k,O=Pn(e.textContent);(isNaN(O)||Math.abs(O-T)>.005)&&(e.textContent=En(T))}var Z=o.querySelector(".installment-total");if(Z){var J=A/12,mn=Pn(Z.textContent);(isNaN(mn)||Math.abs(mn-J)>.005)&&(Z.textContent="ou 12x de "+En(J))}var fn=dn(),yn=rn(),vn=yn&&yn.cepValue&&yn.cepValue.replace(/\D/g,"")===fn,Tn=!!(fn&&yn&&vn&&yn.shipping!=null&&!isNaN(yn.shipping)),Ln=Tn?parseFloat(yn.shipping):0,Xn=(fn||"")+"|"+A.toFixed(2)+"|"+(Tn?1:0)+"|"+Ln,rt=o.querySelector(".mm-cart-ship"),zt=rt&&rt.dataset.mmEditing==="1";!zt&&(!rt||o.dataset.mmMobShipSig!==Xn)&&(o.dataset.mmMobShipSig=Xn,Gn(o,A,Ln,Tn)),Bn(o),qt(o,A-A*k),Gt(o,A,k)}}}}function jt(o,p,d){if(!o||isNaN(p)||isNaN(d))return;var x=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(x){o.innerHTML=ot(d);return}var S=420,A=performance.now();function M(e){return 1-Math.pow(1-e,3)}(function e(m){var c=Math.min(1,(m-A)/S);o.innerHTML=ot(p+(d-p)*M(c)),c<1&&requestAnimationFrame(e)})(A)}function Et(o,p,d,x,S,A){if(!(!o||!p)){var M=parseInt(x.textContent)||1,e=M+d;if(!(e<1)){var T=o.closest(".carrinho-rapido-ctn");_n(T),S.disabled=!0,A.disabled=!0;var m=parseFloat(o.getAttribute("data-item-price"))||0;x.textContent=e,o.setAttribute("data-item-quantity",e);var c=o.querySelector(".valor");if(c){var k=m*e;c.textContent=En(k),c.classList.remove("mm-pop"),c.offsetWidth,c.classList.add("mm-pop"),setTimeout(function(){c.classList.remove("mm-pop")},450)}var T=o.closest(".carrinho-rapido-ctn"),O=d>0?"adicionaItem":"removeItem";dn()&&T&&(T.dataset.mmShipPendingFetch="1"),Ct(T),ht(),dn()&&tt(T),_(O,p).catch(function(){x.textContent=M,o.setAttribute("data-item-quantity",M),c&&(c.innerHTML=ot(m*M)),T&&(T.dataset.mmShipPendingFetch=""),Ct(T),ht()}).then(function(){S.disabled=!1,A.disabled=!1;var Z=dn();Z&&T?(tt(T),Qn(Z,!0).then(function(J){T.dataset.mmShipPendingFetch="",J?Kn(T,Z,J):vt(T)})):T&&(T.dataset.mmShipPendingFetch="")})}}}function Ut(o,p){if(!(!o||!p)){var d=o.closest(".carrinho-rapido-ctn");_n(d);var x=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,S=x?0:360;x||o.classList.add("mm-removing"),setTimeout(function(){o.parentNode&&o.parentNode.removeChild(o);var A=d?d.querySelectorAll(".cart-item:not(.mm-removing)"):[],M=A.length===0;if(M){if(d){d.dataset.mmShipPendingFetch="";var e=d.querySelector(".mm-cart-ship");e&&e.remove();var m=d.querySelector(".box-total-btn, .area-finalizar-compra");m&&(m.style.display="none")}typeof window.__mmForceEmptyCartState=="function"&&window.__mmForceEmptyCartState(d)}else Ct(d),dn()&&tt(d);var c=document.getElementById("mm-h-cart-count"),k=document.getElementById("mm-h-cart"),T=A.length;c&&(c.textContent=T>99?"99+":String(T),c.hidden=T===0),k&&k.setAttribute("aria-label","Carrinho, "+T+" "+(T===1?"item":"itens")),ht()},S),_("deleteItem",p).catch(function(){}).then(function(){var A=d?d.querySelectorAll(".cart-item:not(.mm-removing)"):[],M=document.getElementById("mm-h-cart-count");if(M&&(M.textContent=A.length>99?"99+":String(A.length),M.hidden=A.length===0),A.length===0){d&&(d.dataset.mmShipPendingFetch="");return}var e=dn();e&&d?(d.dataset.mmShipPendingFetch="1",tt(d),Qn(e,!0).then(function(m){d.dataset.mmShipPendingFetch="",m?Kn(d,e,m):vt(d)})):d&&(d.dataset.mmShipPendingFetch="")})}}window.__mmDeleteItem=Ut;var $t=null,_t=new Set,bt=null;function ee(o){if(!o)return NaN;var p=String(o).replace(/\s/g,"").match(/([\d.,]+)/);if(!p)return NaN;var d=p[1].replace(/\./g,"").replace(",","."),x=parseFloat(d);return isNaN(x)?NaN:x}function Vt(o){return isNaN(o)?"":"R$ "+o.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function Dn(o,p,d){if(!o||isNaN(p)||isNaN(d))return;bt&&cancelAnimationFrame(bt);var x=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(x){o.textContent=Vt(d);return}var S=420,A=performance.now();function M(m){return 1-Math.pow(1-m,3)}function e(m){var c=m-A,k=Math.min(1,c/S),T=p+(d-p)*M(k);o.textContent=Vt(T),k<1?bt=requestAnimationFrame(e):bt=null}bt=requestAnimationFrame(e)}function Wt(o){return o?o.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||o.querySelector(".box-total-btn .linha-total .valor-final strong")||o.querySelector(".valor-pix strong")||o.querySelector(".valor-pix"):null}function At(o){return o?o.querySelector(".box-total-btn .linha-total .valor-final"):null}function Qt(o){var p=At(o);p&&(p.classList.remove("mm-pop"),p.offsetWidth,p.classList.add("mm-pop"),setTimeout(function(){p.classList.remove("mm-pop")},450))}function Ft(){var o=document.querySelector(".carrinho-rapido-ctn");if(o){var p=o.querySelectorAll(".cart-item:not(.mm-removing)");if(p.length>0){var d=o.querySelector(".box-total-btn");d&&d.dataset.mmTotalEnhanced!=="1"&&(_n(o),Ot(o),Ct(o),d.dataset.mmTotalEnhanced="1",o.dataset.mmShipRendered="1",Bn(o))}o.querySelector(".box-total-btn")||ht(o);var x=o.querySelectorAll(".cart-item"),S=new Set;x.forEach(function(A){var M=A.id||A.getAttribute("data-item-id")||"";M&&(S.add(M),!_t.has(M)&&_t.size>0&&(A.classList.add("mm-added"),setTimeout(function(){A.classList.remove("mm-added")},500)))}),_t=S}}function Tt(){var o=document.querySelector(".carrinho-rapido-ctn");if(!(!o||o.dataset.mmAnimObserved)){o.dataset.mmAnimObserved="1",Ft();var p=new MutationObserver(function(){clearTimeout(Tt._t),Tt._t=setTimeout(Ft,60)});p.observe(o,{childList:!0,subtree:!0,characterData:!0})}}function Zn(){l(),u(),P(),j();var o=document.getElementById("cart-preview-area");if(o){var p=new MutationObserver(function(){setTimeout(L,100),setTimeout(Tt,150),setTimeout(ht,180),setTimeout(Nt,220)});p.observe(o,{childList:!0,subtree:!0})}setInterval(L,800),setInterval(Tt,800),setInterval(ht,800),setInterval(Nt,800),L(),Tt(),ht(),Nt()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Zn):Zn()})(),(function y(){"use strict";var D="mm_cep",R="mm_cart_snapshot",N=18e5,g="mm_onepage_draft",r=1440*60*1e3,l=2e3,u="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",f="https://api.whatsapp.com/send?phone=5511915299488&text="+encodeURIComponent("Olá! Estou no checkout e gostaria de tirar uma dúvida sobre meu pedido."),b=location.pathname,F=b.indexOf("/checkout/cart")!==-1,E=b.indexOf("/checkout/identify")!==-1,L=b.indexOf("/checkout/onepage")!==-1,P=b.indexOf("/checkout/payment")!==-1,j=b.indexOf("/checkout/done")!==-1,z=window.MMStorefrontFlow||null,_=z&&typeof z.isLoggedCustomer=="function"?z.isLoggedCustomer(document.cookie):/(?:^|;\s*)zordEm=[^;\s]+/.test(document.cookie||"");function X(){return z&&typeof z.checkoutTarget=="function"?z.checkoutTarget(document.cookie):_?"/checkout/onepage":"/checkout/identify"}if(j)try{localStorage.removeItem("mm_onepage_draft")}catch{}if(!F&&!E&&!L&&!P&&!j)return;y._retries=(y._retries||0)+1;var v=document.querySelector("#checkout-main-area");if(!v){try{var G=document.body&&document.body.textContent||"",ln=/muito tempo inativo|realize login novamente/i.test(G);if((L||E)&&(ln||y._retries>=40)&&!sessionStorage.getItem("mm_checkout_recovery")){sessionStorage.setItem("mm_checkout_recovery","1"),location.href="/checkout/cart";return}}catch{}y._retries<40&&setTimeout(y,400);return}try{sessionStorage.removeItem("mm_checkout_recovery")}catch{}function U(n){return isNaN(n)||n<0?"R$ 0,00":"R$ "+n.toFixed(2).replace(".",",").replace(/(\d)(?=(\d{3})+,)/g,"$1.")}function dn(n){if(!n)return 0;var t=String(n).match(/(-?[\d.]+,\d{2})/);return t&&parseFloat(t[1].replace(/\./g,"").replace(",","."))||0}function B(n){return String(n||"").replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}var V={truck:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-5l-3-4zM6 18.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.5-7H17V9.5h2.04l1.46 2-.04 0z"/></svg>',check:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',checkCircle:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',bolt:'<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',shield:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>',lock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>',card:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',rotate:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',minus:'<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',plus:'<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M3 7h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',trash:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',close:'<svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5l-7 7M3.5 3.5l7 7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',arrow:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',tag:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',whats:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',box:'<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>'},rn={get:function(n){try{return localStorage.getItem(n)}catch{return null}},set:function(n,t){try{localStorage.setItem(n,t)}catch{}},remove:function(n){try{localStorage.removeItem(n)}catch{}}};function Rn(n){try{var t={ts:Date.now(),items:n.items.map(function(a){return{name:a.name,variant:a.variant,imgSrc:a.imgSrc,quantity:a.quantity,lineTotal:a.lineTotal,lineTotalPix:a.lineTotalPix,isPix:a.isPix,deposito:a.deposito}}),subtotalPix:n.subtotalPix,subtotalFull:n.subtotalFull,discount:n.discount,couponCode:n.couponCode,shipping:n.shipping,shippingDeadline:n.shippingDeadline,shippingName:n.shippingName,shippingCity:n.shippingCity,shippingOptions:n.shippingOptions,cepValue:n.cepValue};rn.set(R,JSON.stringify(t))}catch{}}function wn(){try{var n=rn.get(R);if(!n)return null;var t=JSON.parse(n);return!t||!t.ts||Date.now()-t.ts>N?null:t}catch{return null}}function Nn(){try{for(var n=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep","mm-op-rua","mm-op-num","mm-op-comp","mm-op-bairro","mm-op-cidade","mm-op-uf"],t={ts:Date.now()},a=0,i=0;i<n.length;i++){var s=document.getElementById(n[i]);s&&s.value&&(t[n[i]]=s.value,a++)}if(a===0){window._mmDraftDebug&&console.log("[mm-draft] skip save (0 fields)");return}rn.set(g,JSON.stringify(t)),window._mmDraftDebug&&console.log("[mm-draft] saved",a,"fields",t)}catch(h){window._mmDraftDebug&&console.warn("[mm-draft] save failed",h)}}function qn(){try{var n=rn.get(g);if(!n)return null;var t=JSON.parse(n);return!t||!t.ts?null:Date.now()-t.ts>r?(rn.remove(g),null):t}catch{return null}}function at(){try{rn.remove(g)}catch{}}function Jn(){var n=qn();if(!n)return window._mmDraftDebug&&console.log("[mm-draft] no draft to restore"),null;for(var t=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep","mm-op-rua","mm-op-num","mm-op-comp","mm-op-bairro","mm-op-cidade","mm-op-uf"],a=0,i=0;i<t.length;i++){var s=document.getElementById(t[i]);if(s&&n[t[i]]){try{var h=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;h.call(s,n[t[i]])}catch{s.value=n[t[i]]}s.dispatchEvent(new Event("input",{bubbles:!0})),/^mm-op-(rua|bairro|cidade|uf)$/.test(t[i])&&(s.dataset.mmCepFill="1"),a++}}return window._mmDraftDebug&&console.log("[mm-draft] restored",a,"fields from draft",n),n}function Wn(){for(var n={items:[],subtotalPix:0,subtotalFull:0,discount:0,shipping:null,shippingRaw:"",shippingDeadline:"",shippingName:"",shippingCity:"",shippingOptions:[],couponCode:"",cepValue:"",canFinalize:!1,hasFinalizar:!1},t=v.querySelectorAll(".cart-item"),a=0;a<t.length;a++){var i=t[a],s=i.querySelector('.qtd-item[id^="item_carrinho_"]'),h=s&&s.id.match(/item_carrinho_(\d+)/),q=h?parseInt(h[1],10):null,I=i.querySelector("figure img")||i.querySelector("#product-img")||i.querySelector("img"),Y=i.querySelector(".nome-produto .link")||i.querySelector("figure a"),H=i.querySelector(".column-valor-produto .valor"),tn=H?H.textContent.trim():"",Q=!!i.querySelector(".column-valor-produto .sub");n.items.push({dataId:q,sku:i.getAttribute("data-item-id")||"",name:i.getAttribute("data-item-name")||i.getAttribute("data-name")||"",variant:i.getAttribute("data-item-variant")||"",brand:i.getAttribute("data-item-brand")||"",category:i.getAttribute("data-item-category")||"",priceUnit:parseFloat(i.getAttribute("data-item-price")||"0"),lineTotal:parseFloat(i.getAttribute("data-valor")||"0"),quantity:parseInt(i.getAttribute("data-item-quantity")||"1",10),deposito:i.getAttribute("data-item-deposito")==="1",imgSrc:I?I.getAttribute("src")||I.currentSrc:"",href:Y?Y.getAttribute("href"):"",lineTotalPix:dn(tn),isPix:Q}),n.subtotalFull+=parseFloat(i.getAttribute("data-valor")||"0")}var en=v.querySelector("#resumo-compra .resumo-valores .value");en&&(n.subtotalPix=dn(en.textContent)),n.subtotalPix<=0&&(n.subtotalPix=n.items.reduce(function(Xt,re){return Xt+(re.lineTotalPix||0)},0));var nn=v.querySelector("#resumo-compra .discount-value");nn&&(n.discount=dn(nn.textContent));var sn=v.querySelector("#resumo-compra .txt-cupom");if(sn){var K=(sn.textContent||"").replace(/\s+/g,"").trim();/^[A-Za-z0-9][A-Za-z0-9._-]{1,}$/.test(K)&&(n.couponCode=K.toUpperCase())}var gn=v.querySelector("#resumo-compra .frete-calculado, .frete-calculado");if(gn&&gn.textContent.trim()){n.shippingRaw=gn.textContent.trim();var cn=gn.querySelector(".frete-location .city");cn&&(n.shippingCity=cn.textContent.trim());for(var hn=gn.querySelectorAll(".servico-frete"),pn=0;pn<hn.length;pn++){var un=hn[pn],kn=un.querySelector('input[type="radio"]'),w=un.querySelector(".dias-entrega"),C=parseFloat(un.getAttribute("data-valor-frete")||"0"),W=un.getAttribute("data-servico-frete")||"",on=w?w.textContent.trim().replace(/\s+/g," ").replace(/\s*-\s*$/,"").trim():"",an=on.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i),Sn=an?an[1].replace(/\s+/g," "):on;n.shippingOptions.push({id:kn?kn.value:"",name:W,deadline:Sn,value:C,isFree:C===0,isSelected:kn?kn.checked:!1})}var Cn=n.shippingOptions.filter(function(Xt){return Xt.isSelected})[0];if(!Cn&&n.shippingOptions.length>0&&(Cn=n.shippingOptions[0]),Cn)n.shipping=Cn.value,n.shippingName=Cn.name,n.shippingDeadline=Cn.deadline;else{var In=gn.querySelector(".info-frete-selec"),Vn=gn.querySelector(".dias-entrega, .info-frete-selec .dias-entrega"),$n=gn.querySelector(".valor-frete .value, .value.valor-frete"),ct=gn.querySelector(".info-frete-selec .info-title span, .info-title span");if($n){var et=$n.textContent.trim();if(/gr[aá]tis/i.test(et))n.shipping=0;else{var xt=dn(et);xt>0&&(n.shipping=xt)}}if(Vn){var yt=Vn.textContent.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*\([^)]+\))?(?:\s*[úu]teis)?)/i);yt&&(n.shippingDeadline=yt[1].replace(/\s+/g," ").replace(/\(s\)/,"").trim())}if(ct&&(n.shippingName=ct.textContent.trim()),n.shipping===null)if(/gr[aá]tis/i.test(n.shippingRaw))n.shipping=0;else{var It=dn(n.shippingRaw);It>0&&(n.shipping=It)}if(!n.shippingDeadline){var On=n.shippingRaw.match(/(\d+(?:\s*[aà]\s*\d+)?)\s*dias?/i);On&&(n.shippingDeadline=On[1]+" dias úteis")}}}var Rt=v.querySelector("#cep, .input-cep");return Rt&&(n.cepValue=Rt.value||""),n.hasFinalizar=!!v.querySelector("#finalizar-compra"),n.canFinalize=n.items.length>0,n}function jn(n){n=n||"cart";var t='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>';function a(i,s){var h=i===n,q="mm-checkout-step"+(h?" is-active":""),I=h?' aria-current="step"':"";return'<li class="'+q+'"'+I+'><span class="mm-checkout-step-label">'+s+"</span></li>"}return'<header class="mm-checkout-header"><a class="mm-checkout-header-logo" href="/" aria-label="Madeira Mania - voltar à home"><img src="'+u+'" alt="Madeira Mania" width="180" height="44"></a><nav class="mm-checkout-steps" aria-label="Etapas do checkout"><ol>'+a("cart","Carrinho")+'<li class="mm-checkout-step-sep" aria-hidden="true">›</li>'+a("delivery","Entrega")+'<li class="mm-checkout-step-sep" aria-hidden="true">›</li>'+a("payment","Pagamento")+'</ol></nav><div class="mm-checkout-secure">'+t+'<span class="mm-checkout-secure-text"><strong>Compra 100% segura</strong><small>Site protegido por SSL</small></span></div></header>'}function An(n){var t=n.imgSrc?'<img src="'+B(n.imgSrc)+'" alt="'+B(n.name)+'" loading="lazy">':"",a=n.href?'<a class="mm-item-name" href="'+B(n.href)+'">'+B(n.name)+"</a>":'<span class="mm-item-name">'+B(n.name)+"</span>",i=n.variant?'<p class="mm-item-variant">'+B(n.variant)+"</p>":"",s="",h=n.quantity<=1?' disabled aria-disabled="true"':"",q;if(n.lineTotalPix>0&&n.isPix){var I='<span class="mm-item-price-sub">no PIX</span>',Y=n.quantity>1?U(n.lineTotalPix/n.quantity)+" cada":"";q='<div class="mm-item-price"><span class="mm-item-price-value">'+U(n.lineTotalPix)+"</span>"+I+(Y?'<span class="mm-item-price-unit">'+Y+"</span>":"")+"</div>"}else{var H=n.quantity>1?U(n.priceUnit)+" cada":"";q='<div class="mm-item-price"><span class="mm-item-price-value">'+U(n.lineTotal)+"</span>"+(H?'<span class="mm-item-price-unit">'+H+"</span>":"")+"</div>"}return'<div class="mm-item" data-mm-id="'+n.dataId+'"><div class="mm-item-thumb">'+t+'</div><div class="mm-item-body">'+a+i+s+"</div>"+q+'<div class="mm-item-controls"><div class="mm-qty" role="group" aria-label="Quantidade"><button type="button" class="mm-qty-btn" data-mm-act="dec"'+h+' aria-label="Diminuir quantidade">'+V.minus+'</button><span class="mm-qty-value">'+n.quantity+'</span><button type="button" class="mm-qty-btn" data-mm-act="inc" aria-label="Aumentar quantidade">'+V.plus+'</button></div><button type="button" class="mm-item-remove" data-mm-act="remove" aria-label="Remover item" title="Remover">'+V.trash+"</button></div></div>"}function Mn(n){return n.items.length?n.items.map(An).join(""):'<div class="mm-empty"><div class="mm-empty-icon">'+V.box+'</div><h3 class="mm-empty-title">Seu carrinho está vazio</h3><p class="mm-empty-desc">Explore nossos móveis e encontre a peça certa para sua casa.</p><a class="mm-empty-cta" href="/">Explorar produtos '+V.arrow+'</a><p class="mm-empty-perks">Frete grátis acima de R$ 2.000 · 12x sem juros · 7% off no PIX</p></div>'}function st(n){for(var t="",a=0;a<n;a++)t+='<div class="mm-skel-item"><div class="mm-skel mm-skel-thumb"></div><div class="mm-skel-lines"><div class="mm-skel mm-skel-line w-3-4"></div><div class="mm-skel mm-skel-line w-1-2"></div><div class="mm-skel mm-skel-line w-1-3"></div></div><div class="mm-skel-lines"><div class="mm-skel mm-skel-line w-1-2"></div></div></div>';return t}function lt(n,t){return n?'<div class="mm-coupon mm-coupon-has"><div class="mm-coupon-applied"><span class="mm-coupon-applied-left">'+V.tag+"<span>"+B(n)+'</span></span><button type="button" data-mm-act="'+t+'-remove" aria-label="Remover cupom">'+V.close+"</button></div></div>":'<div class="mm-coupon is-open"><div class="mm-coupon-label">'+V.tag+'<span>Cupom de desconto</span></div><form class="mm-coupon-form" data-mm-act="'+t+'-submit"><input type="text" class="mm-input" name="mm-coupon-code" placeholder="Digite o código" autocomplete="off" autocapitalize="characters" spellcheck="false" inputmode="text" /><button type="submit" class="mm-btn-secondary">Aplicar</button></form><p class="mm-coupon-error" hidden></p></div>'}function Qn(n){var t=n.subtotalFull>0?n.subtotalFull:n.subtotalPix,a='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+U(t)+"</span></div>";if(n.shipping!==null){var i;n.shipping===0?i='<span class="mm-row-value is-free">'+V.check+" Grátis</span>":i='<span class="mm-row-value">'+U(n.shipping)+"</span>";var s='<span class="mm-row-label">Frete';n.shippingName&&(s+=' <span class="mm-row-sub">· '+B(n.shippingName)+"</span>"),n.shippingDeadline&&(s+=' <span class="mm-row-sub">· '+B(n.shippingDeadline)+"</span>"),s+="</span>",a+='<div class="mm-row">'+s+i+"</div>"}n.discount>0&&(a+='<div class="mm-row"><span class="mm-row-label">Desconto</span><span class="mm-row-value is-discount">− '+U(n.discount)+"</span></div>");var h="";if(n.shipping!==null){var q=Math.max(0,t+n.shipping-n.discount),I=Math.max(0,n.subtotalPix+n.shipping-n.discount),Y=q-I,H=q/12;h='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value">'+U(q)+'</div><div class="mm-total-pix"><span>'+U(I)+" à vista no PIX</span>"+(Y>0?'<span class="mm-total-pix-save">economia de '+U(Y)+"</span>":"")+'</div><div class="mm-total-parcela">ou 12x de '+U(H)+" sem juros no cartão</div></div>"}else h='<div class="mm-total"><div class="mm-total-label">Subtotal</div><div class="mm-total-value">'+U(n.subtotalPix)+'</div><div class="mm-total-pix"><span>à vista no PIX</span></div><div class="mm-total-pending">Informe seu CEP para ver o frete e o total final.</div></div>';var tn=lt(n.couponCode,"coupon");return'<div class="mm-sum-stack"><div class="mm-rows">'+a+"</div>"+tn+h+"</div>"}function ut(){var n=document.getElementById("mm-layout");if(n)return n.parentElement!==v&&v.insertBefore(n,v.firstChild),n;var t=document.createElement("div");return t.id="mm-layout",t.innerHTML=jn("cart")+'<div class="mm-grid"><section class="mm-items"><h2 class="mm-h">Carrinho</h2><div class="mm-items-card"><div id="mm-item-list">'+st(2)+'</div></div></section><aside class="mm-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><div class="mm-cep"><div class="mm-cep-label"><span class="mm-cep-label-text">Calcular frete</span><a class="mm-cep-label-link" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a></div><div class="mm-cep-row"><input type="text" class="mm-input" id="mm-cep-input" name="mm_cep_calc" inputmode="numeric" maxlength="9" placeholder="00000-000" autocomplete="off" data-lpignore="true" data-1p-ignore="true" data-bwignore="true" data-form-type="other" aria-label="CEP" /><button type="button" class="mm-btn-secondary" data-mm-act="calc-cep">Calcular</button></div></div><div id="mm-sum-dynamic"></div><button type="button" class="mm-cta" data-mm-act="finalizar">Finalizar compra'+V.arrow+'</button><div class="mm-trust"><span class="mm-trust-item">'+V.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+V.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+V.card+'<span>12x sem juros</span></span></div><a class="mm-help" href="'+f+'" target="_blank" rel="noopener" data-mm-track="help-whats">'+V.whats+"<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span></a></div></aside></div>",v.insertBefore(t,v.firstChild),v.classList.add("mm-shadow-mode"),document.body.classList.add("mm-checkout-rebuild"),document.documentElement.classList.remove("mm-cart-loading"),t}function Kn(){var n=Wn(),t=document.getElementById("mm-item-list");t&&(t.innerHTML=Mn(n));var a=document.getElementById("mm-sum-dynamic");a&&(a.innerHTML=Qn(n));var i=document.querySelector(".mm-cta");i&&(i.disabled=!n.canFinalize,i.style.opacity=n.canFinalize?"1":"0.5",i.style.pointerEvents=n.canFinalize?"auto":"none");var s=document.getElementById("mm-cep-input");if(s&&!s.matches(":focus")){var h=rn.get(D),q=n.cepValue||h||"";q&&(s.value=Bn(q))}return n.items&&n.items.length>0&&Rn(n),n}function Bn(n){var t=String(n||"").replace(/\D/g,"").slice(0,8);return t.length<=5?t:t.slice(0,5)+"-"+t.slice(5)}function Hn(n){var t=String(n||"").replace(/\D/g,"");t.length===8&&rn.set(D,t)}function bn(n){n=n||0;var t=rn.get(D);if(!(!t||t.length!==8)){var a=v.querySelector("#cep, .input-cep");if(!a){n<12&&setTimeout(function(){bn(n+1)},350);return}var i=v.querySelector("#resumo-compra .frete-calculado");if(i&&i.textContent.trim()){var s=document.getElementById("mm-cep-input");s&&!s.value&&(s.value=Bn(t));return}var h=document.getElementById("mm-cep-input");h&&!h.value&&(h.value=Bn(t)),a.value=Bn(t),Fn(a),setTimeout(function(){Gn()},200)}}function Fn(n){try{var t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;t.call(n,n.value)}catch{}n.dispatchEvent(new Event("input",{bubbles:!0})),n.dispatchEvent(new Event("change",{bubbles:!0}))}function Gn(){try{if(window.Zord&&window.Zord.Cart&&typeof window.Zord.Cart.calculaFreteCarrinho=="function"){window.Zord.Cart.calculaFreteCarrinho();return}}catch{}var n=v.querySelector("#resumo-compra .calcula-frete > button, .area-frete button");n&&n.click()}function nt(){var n=document.getElementById("mm-layout");!n||n._mmBound||(n._mmBound=!0,n.addEventListener("click",function(t){var a=t.target.closest("[data-mm-act]");if(a){var i=a.getAttribute("data-mm-act"),s=a.closest(".mm-item"),h=s?parseInt(s.getAttribute("data-mm-id"),10):null;switch(i){case"inc":tt(h,s,"inc");break;case"dec":tt(h,s,"dec");break;case"remove":vt(h,s);break;case"calc-cep":xn();break;case"coupon-toggle":var q=a.closest(".mm-coupon");if(q){q.classList.add("is-open");var I=q.querySelector("input");I&&setTimeout(function(){I.focus()},100)}break;case"coupon-remove":St();break;case"finalizar":Pt();break}}}),n.addEventListener("submit",function(t){var a=t.target.closest('[data-mm-act="coupon-submit"]');if(a){t.preventDefault();var i=a.querySelector("input");i&&ft(i.value.trim())}}),n.addEventListener("input",function(t){t.target&&t.target.id==="mm-cep-input"&&(t.target.value=Bn(t.target.value))}),n.addEventListener("keydown",function(t){t.key==="Enter"&&t.target&&t.target.id==="mm-cep-input"&&(t.preventDefault(),xn())}))}function tt(n,t,a){if(!(!n||!t)&&!(!window.Zord||!window.Zord.checkout)){t.classList.add("is-updating");try{a==="inc"?window.Zord.checkout.adicionaQuantidade(n):window.Zord.checkout.removeQuantidade(n)}catch(i){console.warn("[mm-cart] qty change failed",i),t.classList.remove("is-updating")}}}function vt(n,t){if(!(!n||!t)&&!(!window.Zord||!window.Zord.checkout)){t.classList.add("is-updating"),t.style.transition="opacity 200ms, transform 200ms",t.style.opacity="0",t.style.transform="translateX(-12px)";try{typeof window.Zord.checkout.deleteItem=="function"?window.Zord.checkout.deleteItem(n):window.Zord.checkout.removeQuantidade(n)}catch(a){console.warn("[mm-cart] remove failed",a),t.classList.remove("is-updating"),t.style.opacity="1",t.style.transform=""}}}function xn(){var n=document.getElementById("mm-cep-input");if(n){var t=(n.value||"").replace(/\D/g,"");if(t.length!==8){n.focus(),n.classList.add("mm-input-error"),setTimeout(function(){n.classList.remove("mm-input-error")},1200);return}Hn(t);var a=v.querySelector("#cep, .input-cep");a&&(a.value=Bn(t),Fn(a)),Gn()}}function ft(n){if(n&&!(!window.Zord||!window.Zord.checkout)){var t=v.querySelector("#cupom-desconto");t&&(t.value=n.toUpperCase(),Fn(t));try{window.Zord.checkout.addCupomDesconto()}catch(a){console.warn("[mm-cart] coupon apply failed",a)}}}function St(){if(!(!window.Zord||!window.Zord.checkout)){try{var n=wn();n&&n.couponCode&&(n.couponCode="",rn.set(R,JSON.stringify(n)))}catch{}try{window.Zord.checkout.removeCupomDesconto()}catch(t){console.warn("[mm-cart] coupon remove failed",t)}}}function Pt(){try{var n=Wn();n.items&&n.items.length>0&&Rn(n)}catch{}if(_){rn.remove("mm_checkout_mode"),location.href=X();return}var t=document.getElementById("finalizar-compra");if(t){t.click();return}location.href="/checkout/identify"}if(F){let n=function(a){if(a=a||0,a>30){t();return}var i=v.querySelectorAll(".cart-item").length>0,s=v.querySelector("#resumo-compra");i||s||a>8?t():setTimeout(function(){n(a+1)},250)},t=function(){ut(),nt(),Kn(),bn(),typeof jQuery<"u"&&jQuery(document).ajaxComplete(function(s,h,q){if(!(!q||!q.url)){var I=q.url;(I.indexOf("checkout/cart")!==-1||I.indexOf("atualiza")!==-1||I.indexOf("cupom")!==-1||I.indexOf("frete")!==-1||I.indexOf("removeItem")!==-1||I.indexOf("adicionaItem")!==-1)&&(setTimeout(Kn,120),setTimeout(function(){var Y=Wn();Y.shipping!==null&&Y.cepValue&&Hn(Y.cepValue)},200))}});try{var a=new MutationObserver(function(s){t._mutTimer&&clearTimeout(t._mutTimer),t._mutTimer=setTimeout(Kn,200)}),i=[v.querySelector("#cart-area"),v.querySelector(".cart-area"),v.querySelector("#resumo-compra")].filter(Boolean);i.forEach(function(s){a.observe(s,{childList:!0,subtree:!0,characterData:!0})})}catch{}};if(!document.getElementById("mm-checkout-cro-done")){var Pn=document.createElement("div");Pn.id="mm-checkout-cro-done",Pn.style.display="none",document.body.appendChild(Pn)}n()}function En(n){if(!n||!n.items||!n.items.length)return'<aside class="mm-id-sum mm-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><div class="mm-sum-empty"><p>Não conseguimos carregar o resumo do seu pedido.</p><a class="mm-btn-secondary" href="/checkout/cart">Voltar ao carrinho</a></div></div></aside>';var t=3,a=n.items.slice(0,t),i=n.items.length-t,s=a.map(function(K){var gn=K.quantity>1?'<strong class="mm-id-thumb-qty">'+K.quantity+"×</strong> ":"",cn=!K.imgSrc&&!(K.lineTotalPix>0)&&!(K.lineTotal>0);if(cn)return'<div class="mm-id-thumb"><div class="mm-id-thumb-img"><span class="mm-skel" style="display:block;width:100%;height:100%"></span></div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+gn+B(K.name)+"</p>"+(K.variant?'<p class="mm-id-thumb-variant">'+B(K.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price"><span class="mm-skel" style="display:inline-block;width:56px;height:15px"></span></div></div>';var hn=K.imgSrc?'<img src="'+B(K.imgSrc)+'" alt="'+B(K.name)+'" loading="lazy">':'<div class="mm-id-thumb-placeholder">'+V.box+"</div>",pn=K.lineTotal>0?K.lineTotal:K.lineTotalPix;return'<div class="mm-id-thumb"><div class="mm-id-thumb-img">'+hn+'</div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+gn+B(K.name)+"</p>"+(K.variant?'<p class="mm-id-thumb-variant">'+B(K.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price">'+U(pn)+"</div></div>"}).join("");i>0&&(s+='<div class="mm-id-thumb-more">+ '+i+" "+(i===1?"item":"itens")+" a mais</div>");var h=n.subtotalFull>0?n.subtotalFull:n.subtotalPix,q='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+U(h)+"</span></div>";if(n.shipping!==null&&n.shipping!==void 0){var I;n.shipping===0?I='<span class="mm-row-value is-free">'+V.check+" Grátis</span>":I='<span class="mm-row-value">'+U(n.shipping)+"</span>",q+='<div class="mm-row"><span class="mm-row-label">Frete'+(n.shippingDeadline?' <span class="mm-row-sub">· '+B(n.shippingDeadline)+"</span>":"")+"</span>"+I+"</div>"}n.discount>0&&(q+='<div class="mm-row"><span class="mm-row-label">Desconto'+(n.couponCode?' <span class="mm-row-sub">· '+B(n.couponCode)+"</span>":"")+'</span><span class="mm-row-value is-discount">− '+U(n.discount)+"</span></div>");var Y,H=n.shipping!==null&&n.shipping!==void 0?n.shipping:0;if(n.shipping!==null&&n.shipping!==void 0){var tn=Math.max(0,h+H-(n.discount||0)),Q=Math.max(0,n.subtotalPix+H-(n.discount||0)),en=tn-Q,nn=tn/12;Y='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value">'+U(tn)+'</div><div class="mm-total-pix"><span>'+U(Q)+" à vista no PIX</span>"+(en>0?'<span class="mm-total-pix-save">economia de '+U(en)+"</span>":"")+'</div><div class="mm-total-parcela">ou 12x de '+U(nn)+" sem juros</div></div>"}else{var sn=h/12;Y='<div class="mm-total"><div class="mm-total-label">Subtotal</div><div class="mm-total-value">'+U(n.subtotalPix)+'</div><div class="mm-total-pix"><span>à vista no PIX</span></div><div class="mm-total-parcela">ou 12x de '+U(sn)+" sem juros</div></div>"}return'<aside class="mm-id-sum mm-sum"><h2 class="mm-h">Resumo do pedido</h2><div class="mm-sum-card"><div class="mm-id-thumbs">'+s+'</div><div class="mm-rows">'+q+"</div>"+lt(n.couponCode,"summary-coupon")+Y+'<a class="mm-id-edit-cart" href="/checkout/cart"><span>Editar carrinho</span></a></div><a class="mm-help mm-sum-help" href="'+f+'" target="_blank" rel="noopener" data-mm-track="help-whats-sum">'+V.whats+"<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span></a></aside>"}function ot(){var n='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',t='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',a='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="9" x2="17" y2="9"/><line x1="7" y1="13" x2="17" y2="13"/><line x1="7" y1="17" x2="13" y2="17"/></svg>',i='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';return'<section class="mm-id-form-col"><h2 class="mm-id-h2">Quase lá! Identifique-se</h2><p class="mm-id-sub">Informe seu e-mail para finalizar a compra de forma rápida e segura.</p><form class="mm-id-form" data-mm-act="identify-submit" novalidate><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+n+'</span><input type="email" id="mm-id-email" name="mm-email" class="mm-input" placeholder="seu@email.com" autocomplete="email" inputmode="email" required></div><p class="mm-id-microcopy">'+V.lock+'<span>Seu e-mail é seguro · Não compartilhamos com terceiros</span></p><button type="submit" class="mm-cta">Continuar'+V.arrow+'</button></form><div class="mm-id-divider"><span>ou</span></div><div class="mm-id-google-slot"></div><button type="button" class="mm-id-guest-toggle" data-mm-act="guest-go" aria-label="Continuar como visitante"><span class="mm-id-guest-icon" aria-hidden="true">'+t+'</span><span class="mm-id-guest-label">Continuar como visitante (sem criar conta)</span><span class="mm-id-guest-arrow" aria-hidden="true">'+V.arrow+'</span></button><div class="mm-trust mm-id-trust"><span class="mm-trust-item">'+V.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+V.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+V.shield+'<span>Garantia 12 meses</span></span></div><p class="mm-id-lgpd">Ao continuar, você concorda com nossa <a href="/politica-de-privacidade" target="_blank" rel="noopener">Política de Privacidade</a></p></section>'}function pt(n){var t=document.getElementById("mm-layout");if(t)return t.parentElement!==v&&v.insertBefore(t,v.firstChild),t;var a=document.createElement("div");return a.id="mm-layout",a.classList.add("mm-id-layout"),a.innerHTML=jn("delivery")+'<div class="mm-grid mm-id-grid">'+ot()+En(n)+"</div>",v.insertBefore(a,v.firstChild),document.body.classList.add("mm-checkout-rebuild"),Ot(),v.classList.add("mm-shadow-mode"),document.documentElement.classList.remove("mm-cart-loading"),a}function Ot(){var n=document.querySelector(".mm-id-google-slot"),t=v.querySelector(".social-login-area");if(!(!n||!t)&&!n.contains(t))try{n.appendChild(t),n.classList.add("is-loaded")}catch{}}function _n(n){rn.set("mm_user_email",n);var t=v.querySelector("#login");if(!t)return!1;t.value=n,Fn(t);var a=t.closest("form"),i=a?a.querySelector('button.button-send, button[type="submit"]'):null;return i?(i.click(),!0):a?(a.submit(),!0):!1}function Dt(){var n=document.getElementById("mm-layout");!n||n._mmBound||(n._mmBound=!0,n.addEventListener("submit",function(t){var a=t.target.closest('[data-mm-act="identify-submit"]');if(a){t.preventDefault();var i=a.querySelector("#mm-id-email"),s=i?i.value.trim():"";if(!s||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)){i&&(i.classList.add("mm-input-error"),i.focus(),setTimeout(function(){i.classList.remove("mm-input-error")},1500));return}var h=_n(s);if(h){var q=a.querySelector(".mm-cta");q&&q.classList.add("is-loading")}return}}),n.addEventListener("click",function(t){var a=t.target.closest("[data-mm-act]");if(a){var i=a.getAttribute("data-mm-act");i==="guest-go"&&(rn.set("mm_checkout_mode","guest"),a.classList.add("is-loading"),location.href="/checkout/onepage")}}))}function Ct(n){try{var t=new DOMParser().parseFromString(n,"text/html"),a=t.querySelector("#checkout-main-area");if(!a)return null;for(var i=[],s=a.querySelectorAll(".cart-item"),h=0,q=0;q<s.length;q++){var I=s[q],Y=I.querySelector("figure img")||I.querySelector("#product-img")||I.querySelector("img"),H=I.querySelector(".column-valor-produto .valor"),tn=parseFloat(I.getAttribute("data-valor")||"0"),Q=H?dn(H.textContent):0;i.push({name:I.getAttribute("data-item-name")||I.getAttribute("data-name")||"",variant:I.getAttribute("data-item-variant")||"",imgSrc:Y&&Y.getAttribute("src")||"",quantity:parseInt(I.getAttribute("data-item-quantity")||"1",10),lineTotal:tn,lineTotalPix:Q,isPix:!!I.querySelector(".column-valor-produto .sub"),deposito:I.getAttribute("data-item-deposito")==="1"}),h+=tn}if(i.length===0)return null;var en=a.querySelector("#resumo-compra .resumo-valores .value"),nn=en?dn(en.textContent):0;nn<=0&&(nn=i.reduce(function(Cn,In){return Cn+(In.lineTotalPix||0)},0));var sn=a.querySelector("#resumo-compra .discount-value"),K=sn?dn(sn.textContent):0,gn=a.querySelector("#resumo-compra .txt-cupom"),cn="";if(gn){var hn=(gn.textContent||"").replace(/\s+/g,"").trim();/^[A-Za-z0-9][A-Za-z0-9._-]{1,}$/.test(hn)&&(cn=hn.toUpperCase())}var pn=a.querySelector("#resumo-compra .frete-calculado"),un=null,kn="";if(pn){var w=pn.querySelector(".servico-frete[data-valor-frete]");if(w){var C=w.getAttribute("data-valor-frete");if(C!==null&&C!==""){var W=parseFloat(C);isNaN(W)||(un=W)}}var on=pn.textContent.trim();if(un===null&&on){var an=dn(on);an>0&&(un=an)}var Sn=on.match(/(\d+)\s*dias?/i);Sn&&(kn=Sn[1]+" dias úteis")}return{ts:Date.now(),items:i,subtotalPix:nn,subtotalFull:h,discount:K,couponCode:cn,shipping:un,shippingDeadline:kn,cepValue:""}}catch{return null}}function Nt(n){try{fetch("/checkout/cart",{credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(t){return t.text()}).then(function(t){var a=Ct(t);a&&rn.set(R,JSON.stringify(a)),n(a)}).catch(function(){n(null)})}catch{n(null)}}function Bt(n){var t=document.querySelector("#mm-layout .mm-id-sum");if(t){var a=t.parentNode;if(a){var i=document.createElement("div");i.innerHTML=En(n);var s=i.firstChild;s&&a.replaceChild(s,t)}}}function qt(){Nt(function(n){n&&n.items&&n.items.length>0&&(_&&d(n),Bt(n))})}function Gt(n){var t="cep=&nenhumCreditoSelecionado=true&area=main-cart&cupom-desconto="+encodeURIComponent(n||"");return fetch("/checkout/cart?operation=atualizaValoresCarrinho",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"text/html,application/json,*/*","X-Requested-With":"XMLHttpRequest"},body:t}).then(function(a){if(!a.ok)throw new Error("HTTP "+a.status);return a.text()})}function ht(n,t){try{var a=new DOMParser().parseFromString(n,"text/html"),i=a.querySelector(".txt-cupom");if(!i)return!1;var s=(i.textContent||"").replace(/\s+/g,"").trim().toUpperCase();return!!s&&s===String(t).toUpperCase()}catch{return!1}}function jt(n,t){if(n){n.classList.remove("is-busy");var a=n.querySelector(".mm-coupon-error");a&&(a.textContent=t,a.removeAttribute("hidden"));var i=n.querySelector("input");if(i){i.classList.add("mm-input-error");try{i.focus()}catch{}}}}function Et(n,t){n=(n||"").trim();var a=t?t.closest(".mm-coupon"):null;if(!n){jt(a,"Digite um cupom.");return}if(a){a.classList.add("is-busy");var i=a.querySelector(".mm-coupon-error");i&&i.setAttribute("hidden","");var s=a.querySelector("input");s&&s.classList.remove("mm-input-error")}Gt(n).then(function(h){if(ht(h,n)){if(L){location.reload();return}qt()}else jt(a,"Cupom inválido ou não aplicável a este carrinho.")}).catch(function(){jt(a,"Não foi possível aplicar agora. Tente de novo.")})}function Ut(n){var t=n?n.closest(".mm-coupon"):null;t&&t.classList.add("is-busy"),Gt("").then(function(){if(L){location.reload();return}qt()}).catch(function(){t&&t.classList.remove("is-busy")})}function $t(n){!n||n._mmCouponBound||(n._mmCouponBound=!0,n.addEventListener("submit",function(t){var a=t.target.closest('[data-mm-act="summary-coupon-submit"]');if(a){t.preventDefault();var i=a.querySelector("input");Et(i?i.value:"",a)}}),n.addEventListener("click",function(t){var a=t.target.closest('[data-mm-act="summary-coupon-remove"]');a&&(t.preventDefault(),Ut(a))}))}if(E){let n=function(a){if(a=a||0,a>30){t();return}var i=v.querySelector("#login, #login-form-etapa-01");i||a>8?t():setTimeout(function(){n(a+1)},250)},t=function(){var a=wn();pt(a),Dt(),$t(document.getElementById("mm-layout")),Ot(),setTimeout(Ot,600),setTimeout(Ot,1500),qt(),setTimeout(function(){var i=document.getElementById("mm-id-email");i&&!("ontouchstart"in window)&&i.focus()},250)};n()}function _t(n){var t=String(n||"").replace(/\D/g,"").slice(0,11);return t.length<=3?t:t.length<=6?t.slice(0,3)+"."+t.slice(3):t.length<=9?t.slice(0,3)+"."+t.slice(3,6)+"."+t.slice(6):t.slice(0,3)+"."+t.slice(3,6)+"."+t.slice(6,9)+"-"+t.slice(9)}function bt(n){var t=String(n||"").replace(/\D/g,"").slice(0,11);return t.length<=2?t.length?"("+t:"":t.length<=6?"("+t.slice(0,2)+") "+t.slice(2):t.length<=10?"("+t.slice(0,2)+") "+t.slice(2,6)+"-"+t.slice(6):"("+t.slice(0,2)+") "+t.slice(2,7)+"-"+t.slice(7)}function ee(n){var t=String(n||"").replace(/\D/g,"").slice(0,8);return t.length<=5?t:t.slice(0,5)+"-"+t.slice(5)}function Vt(n,t){var a=String(n||"").replace(/\D/g,"");if(a.length!==8){t(null);return}try{fetch("https://viacep.com.br/ws/"+a+"/json/",{headers:{Accept:"application/json"}}).then(function(i){return i.json()}).then(function(i){if(!i||i.erro){t(null);return}t({logradouro:i.logradouro||"",bairro:i.bairro||"",cidade:i.localidade||"",estado:i.uf||""})}).catch(function(){t(null)})}catch{t(null)}}var Dn={mail:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',doc:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 12h8v2H8zm0 4h5v2H8z"/></svg>',phone:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>',pin:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',pix:'<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M11.917 11.71a2.046 2.046 0 0 1-1.454-.602l-2.1-2.1a.4.4 0 0 0-.551 0l-2.108 2.108a2.044 2.044 0 0 1-1.454.602h-.414l2.66 2.66c.83.83 2.177.83 3.007 0l2.667-2.668h-.253zM4.25 4.282c.55 0 1.066.214 1.454.602l2.108 2.108a.39.39 0 0 0 .552 0l2.1-2.1a2.044 2.044 0 0 1 1.453-.602h.253L9.503 1.623a2.127 2.127 0 0 0-3.007 0l-2.66 2.66h.414z"/><path d="m14.377 6.496-1.612-1.612a.307.307 0 0 1-.114.023h-.733c-.379 0-.75.154-1.017.422l-2.1 2.1a1.005 1.005 0 0 1-1.425 0L5.268 5.32a1.448 1.448 0 0 0-1.018-.422h-.9a.306.306 0 0 1-.109-.021L1.623 6.496c-.83.83-.83 2.177 0 3.008l1.618 1.618a.305.305 0 0 1 .108-.022h.901c.38 0 .75-.153 1.018-.421L7.375 8.57a1.034 1.034 0 0 1 1.426 0l2.1 2.1c.267.268.638.421 1.017.421h.733c.04 0 .079.01.114.024l1.612-1.612c.83-.83.83-2.178 0-3.008z"/></svg>',cardBig:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>',barcode:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 6h2v12H2zm3 0h1v12H5zm2 0h3v12H7zm4 0h1v12h-1zm3 0h2v12h-2zm3 0h1v12h-1zm2 0h3v12h-3z"/></svg>',editPencil:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>'};function Wt(n){var t=n?' value="'+B(n)+'"':"";return'<section class="mm-op-form-col"><h2 class="mm-id-h2">Falta pouco. Onde entregar?</h2><p class="mm-id-sub">Preencha seus dados e o endereço de entrega — o frete é calculado automaticamente.</p><form class="mm-op-form" data-mm-act="onepage-submit" novalidate><div class="mm-op-card"><h3 class="mm-op-card-title">'+Dn.user+'<span>Quem vai receber</span></h3><div class="mm-op-grid-2"><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+Dn.mail+'</span><input type="email" id="mm-op-email" class="mm-input" placeholder="seu@email.com" autocomplete="email" inputmode="email" required'+t+'></div><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+Dn.user+'</span><input type="text" id="mm-op-nome" class="mm-input" placeholder="Nome completo" autocomplete="name" required></div><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+Dn.doc+'</span><input type="tel" id="mm-op-cpf" class="mm-input" placeholder="CPF" inputmode="numeric" autocomplete="off" maxlength="14" required></div><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+Dn.phone+'</span><input type="tel" id="mm-op-tel" class="mm-input" placeholder="(11) 91234-5678" inputmode="tel" autocomplete="tel" maxlength="15" required></div></div><p class="mm-op-microcopy-soft">Usamos seus dados só pra emitir nota fiscal e te avisar da entrega.</p></div><div class="mm-op-card"><h3 class="mm-op-card-title">'+Dn.pin+'<span>Endereço de entrega</span></h3><div class="mm-op-grid-2"><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+Dn.pin+'</span><input type="tel" id="mm-op-cep" class="mm-input" placeholder="CEP — 00000-000" inputmode="numeric" autocomplete="postal-code" maxlength="9" required><span class="mm-input-status" id="mm-op-cep-status" aria-live="polite"></span></div><a class="mm-op-cep-help" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+Dn.home+'</span><input type="text" id="mm-op-rua" class="mm-input" placeholder="Rua, Av, Travessa..." autocomplete="address-line1" required></div><div class="mm-input-wrap"><input type="tel" id="mm-op-num" class="mm-input mm-input-noicon" placeholder="Número" inputmode="numeric" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-comp" class="mm-input mm-input-noicon" placeholder="Complemento (opcional)" autocomplete="address-line2"></div><div class="mm-input-wrap mm-op-col-2"><input type="text" id="mm-op-bairro" class="mm-input mm-input-noicon" placeholder="Bairro" autocomplete="address-level3" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-cidade" class="mm-input mm-input-noicon" placeholder="Cidade" autocomplete="address-level2" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-uf" class="mm-input mm-input-noicon" placeholder="UF" maxlength="2" autocomplete="address-level1" required></div></div><div class="mm-op-frete" id="mm-op-frete-slot"></div></div><button type="submit" class="mm-cta mm-op-cta">Última etapa: pagamento'+V.arrow+'</button><p class="mm-id-microcopy mm-op-cta-sub">'+V.lock+'<span>Você revisa tudo antes de finalizar</span></p></form><div class="mm-trust mm-id-trust"><span class="mm-trust-item">'+V.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+V.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+V.shield+"<span>Garantia 12 meses</span></span></div></section>"}function At(){var n=document.cookie.match(/(?:^|;\s*)zordEm=([^;]+)/);if(!n)return"";try{return decodeURIComponent(n[1])}catch{return n[1]}}function Qt(n){var t=v.querySelector("#destinatario");if(t&&t.value&&t.value.trim())return t.value.trim();var a=(n||[]).filter(function(i){return i.checked})[0]||(n||[])[0];return a&&a.lines[0]?a.lines[0]:""}function Ft(){var n=v.querySelectorAll("#box-lista-enderecos .item-endereco");return[].map.call(n,function(t){var a=t.querySelector('input[name="endereco_entrega"]');if(!a)return null;var i=t.querySelector(".info-address"),s=i?[].map.call(i.querySelectorAll(".txt-info"),function(h){return(h.textContent||"").replace(/\s+/g," ").trim()}).filter(Boolean):[];return{id:a.id,value:a.value,checked:a.checked,lines:s}}).filter(Boolean)}var Tt='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6M14 11v6"/></svg>';function Zn(n,t){var a=n.lines[0]?"<strong>"+B(n.lines[0])+"</strong>":"",i=n.lines.slice(1).map(function(s){return"<span>"+B(s)+"</span>"}).join("");return'<label class="mm-op-addr'+(n.checked?" is-selected":"")+'" data-mm-addr="'+B(n.value)+'"><input type="radio" name="mm-op-addr" value="'+B(n.value)+'"'+(n.checked?" checked":"")+'><span class="mm-op-addr-check" aria-hidden="true"></span><span class="mm-op-addr-body">'+a+i+'</span><button type="button" class="mm-op-addr-del" data-mm-act="addr-remove" data-id="'+B(n.value)+'" title="Remover endereço" aria-label="Remover este endereço">'+Tt+"</button></label>"}function o(){var n=Ft(),t=At(),a=Qt(n),i=(a||t||"?").trim().charAt(0).toUpperCase(),s=4,h;if(!n.length)h='<p class="mm-op-microcopy-soft">Nenhum endereço salvo — você adiciona na próxima etapa.</p>';else if(n.length<=s)h=n.map(Zn).join("");else{var q=null,I=[];n.forEach(function(H){H.checked&&!q?q=H:I.push(H)});var Y=q?[q].concat(I):n.slice();h=Y.slice(0,s).map(Zn).join("")+'<div class="mm-op-addr-extra" hidden>'+Y.slice(s).map(Zn).join("")+'</div><button type="button" class="mm-op-addr-more" data-mm-act="addr-more">Ver mais '+(Y.length-s)+" endereços</button>"}return'<section class="mm-op-form-col"><h2 class="mm-id-h2">Falta pouco. Confirme a entrega.</h2><p class="mm-id-sub">Seus dados já estão com a gente — é só escolher onde entregar.</p><form class="mm-op-form" data-mm-act="onepage-submit" novalidate><div class="mm-op-card mm-op-ident"><span class="mm-op-ident-avatar" aria-hidden="true">'+B(i)+'</span><span class="mm-op-ident-info"><span class="mm-op-ident-label">Você está logado</span>'+(a?'<strong class="mm-op-ident-name">'+B(a)+"</strong>":"")+(t?'<span class="mm-op-ident-email">'+B(t)+"</span>":"")+'</span><a class="mm-op-ident-switch" href="/logout">Sair</a></div><div class="mm-op-card"><h3 class="mm-op-card-title">'+Dn.pin+'<span>Endereço de entrega</span></h3><div class="mm-op-addr-list">'+h+'</div><a class="mm-op-addr-new" data-mm-act="addr-novo" href="#">'+Dn.pin+'Entregar em outro endereço</a><div class="mm-op-frete" id="mm-op-frete-slot"></div></div><button type="submit" class="mm-cta mm-op-cta">Última etapa: pagamento'+V.arrow+'</button><p class="mm-id-microcopy mm-op-cta-sub">'+V.lock+'<span>Você revisa tudo antes de finalizar</span></p></form><div class="mm-trust mm-id-trust"><span class="mm-trust-item">'+V.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+V.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+V.shield+"<span>Garantia 12 meses</span></span></div></section>"}function p(){if(!v)return null;function n(q){var I=v.querySelector(q);return I?(I.textContent||"").replace(/\s+/g," ").trim():""}var t=n(".value.valor-frete")||n("span.valor-frete"),a=n(".prazo-frete"),i=n(".nome-servico-frete").replace(/[()]/g,"").trim();if(!t&&!a)return null;var s=null;if(/gr[aá]tis/i.test(t))s=0;else if(t){var h=t.replace(/[^\d,.]/g,"");h.indexOf(",")!==-1&&(h=h.replace(/\./g,"").replace(",",".")),s=parseFloat(h),isNaN(s)&&(s=null)}return{value:s,deadline:a,name:i}}function d(n){n=n||{};var t=p();return t&&t.value!==null&&(n.shipping=t.value,t.deadline&&(n.shippingDeadline=t.deadline),t.name&&(n.shippingName=t.name)),n}function x(){var n=(v&&v.innerText||document.body.innerText||"").match(/CPF[:\s]*([\d]{3}\.?[\d]{3}\.?[\d]{3}\-?[\d]{2})/i);return n?n[1].trim():""}function S(n){[].forEach.call(document.querySelectorAll(".mm-op-addr"),function(t){t.classList.toggle("is-selected",t.getAttribute("data-mm-addr")===String(n))})}var A=null,M=null,e=null;function m(){if(!A){var n=document.getElementById("mm-layout");if(n){var t=n.getBoundingClientRect(),a=window.innerHeight||800,i=n.cloneNode(!0);i.id="mm-op-freeze",i.setAttribute("aria-hidden","true");var s="";try{s=getComputedStyle(document.body).backgroundColor}catch{}(!s||s==="rgba(0, 0, 0, 0)"||s==="transparent")&&(s="#ffffff"),i.style.cssText="position:fixed;left:"+Math.round(t.left)+"px;top:"+Math.round(t.top)+"px;width:"+Math.round(t.width)+"px;min-height:"+Math.round(Math.max(t.height,a-Math.max(t.top,0)))+"px;z-index:9990;pointer-events:none;background:"+s+";",document.body.appendChild(i),A=i,M&&clearTimeout(M),M=setTimeout(k,1600)}}}function c(){A&&(e&&clearTimeout(e),e=setTimeout(k,250))}function k(){if(M&&(clearTimeout(M),M=null),e&&(clearTimeout(e),e=null),!!A){var n=A;A=null,n.style.transition="opacity 160ms ease",n.style.opacity="0",setTimeout(function(){n.parentNode&&n.parentNode.removeChild(n)},180)}}function T(n){S(n),m();var t=document.getElementById("endereco_"+n)||v.querySelector('input[name="endereco_entrega"][value="'+n+'"]');t&&(t.checked||(t.checked=!0),t.dispatchEvent(new Event("click",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})))}var O="delivery",Z=null,J=null;function mn(){var n=document.getElementById("mm-layout");if(!(!n||n.__mmLoggedBound)){n.__mmLoggedBound=!0,n.addEventListener("submit",function(s){var h=s.target.closest('[data-mm-act="onepage-submit"]');h&&(s.preventDefault(),Tn(h))});var t=n.querySelector(".mm-op-addr-list");t&&t.addEventListener("change",function(s){s.target&&s.target.name==="mm-op-addr"&&T(s.target.value)}),t&&t.addEventListener("click",function(s){var h=s.target.closest('[data-mm-act="addr-remove"]');if(h){s.preventDefault(),s.stopPropagation();var q=h.getAttribute("data-id"),I=v.querySelector('#box-lista-enderecos .remover-endereco[data-id="'+q+'"]');I&&I.click()}});var a=n.querySelector('[data-mm-act="addr-more"]');a&&a.addEventListener("click",function(){var s=n.querySelector(".mm-op-addr-extra");s&&(s.hidden=!1),a.remove()});var i=n.querySelector('[data-mm-act="addr-novo"]');i&&i.addEventListener("click",function(s){s.preventDefault(),O="native",n.style.display="none",v.classList.remove("mm-shadow-mode"),document.body.classList.remove("mm-checkout-rebuild");try{window.scrollTo({top:0,behavior:"smooth"})}catch{window.scrollTo(0,0)}})}}function fn(){if(O!=="native"&&!document.getElementById("mm-layout")&&v){if(O==="payment"){if(!v.querySelector('input[name="forma-pagto"]'))return;try{ie(Z||{})}catch{}return}v.querySelector("#box-lista-enderecos")&&(Ln(d(wn()),""),mn(),vn(),qt(),c())}}function yn(){if(!yn._obs){var n=new MutationObserver(function(){O!=="native"&&!document.getElementById("mm-layout")&&!document.getElementById("mm-op-overlay")&&(J&&clearTimeout(J),J=setTimeout(fn,80))});n.observe(v,{childList:!0}),yn._obs=n}}function vn(){var n=document.querySelector('.mm-op-addr input[name="mm-op-addr"]:checked');n&&S(n.value);var t=p();t&&t.value!==null&&Xn({value:t.value,name:t.name||"",deadline:t.deadline||"",city:"",options:[]}),yn()}function Tn(n){var t=document.querySelector('.mm-op-addr input[name="mm-op-addr"]:checked'),a=t?t.value:"";if(!a){var i=document.querySelector('[data-mm-act="addr-novo"]');i&&i.click();return}var s=Ft(),h=s.filter(function(H){return H.value===String(a)})[0]||{},q=h.lines||[];Z={email:At(),nome:((v.querySelector("#destinatario")||{}).value||q[0]||"").trim(),cpf:x(),tel:"",addressLines:q.slice(1),rua:q[1]||"",num:"",comp:"",bairro:"",cidade:q[2]||"",uf:"",cep:""};var I=n&&n.querySelector(".mm-cta");I&&I.classList.add("is-loading"),Ht("Abrindo o pagamento..."),O="payment";var Y=0;(function H(){var tn=v.querySelector('input[name="forma-pagto"], #forma-pagto-pix, #forma-pagto-cartao');if(tn){try{ie(Z)}catch{var Q=document.getElementById("mm-op-overlay");Q&&Q.remove(),O="native";var en=document.getElementById("mm-layout");en&&(en.style.display="none"),v.classList.remove("mm-shadow-mode")}return}if(++Y<40){setTimeout(H,200);return}var nn=document.getElementById("mm-op-overlay");nn&&nn.remove(),O="native";var sn=document.getElementById("mm-layout");sn&&(sn.style.display="none"),v.classList.remove("mm-shadow-mode")})()}function Ln(n,t){var a=document.getElementById("mm-layout");if(a)return a.parentElement!==v&&v.insertBefore(a,v.firstChild),a;var i=document.createElement("div");return i.id="mm-layout",i.classList.add("mm-id-layout"),i.classList.add("mm-op-layout"),i.innerHTML=jn("delivery")+'<div class="mm-grid mm-id-grid mm-op-grid">'+(_?o():Wt(t))+En(n)+"</div>",_&&i.classList.add("mm-op-logged"),v.insertBefore(i,v.firstChild),document.body.classList.add("mm-checkout-rebuild"),v.classList.add("mm-shadow-mode"),document.documentElement.classList.remove("mm-cart-loading"),i}function Xn(n){var t=document.getElementById("mm-op-frete-slot");if(t){if(n==="loading"){t.innerHTML='<div class="mm-op-frete-loading"><div class="mm-op-frete-spinner"></div><span>Calculando frete...</span></div>';return}if(n==="error"){t.innerHTML='<div class="mm-op-frete-error"><span>Não conseguimos calcular o frete. Confira o CEP e tente novamente.</span></div>';return}var a=n.value===0,i=a?'<strong class="mm-op-frete-value is-free">Grátis</strong>':'<strong class="mm-op-frete-value">'+U(n.value)+"</strong>",s=n.name?'<span class="mm-op-frete-name">'+B(n.name)+"</span>":"",h=n.deadline?'<span class="mm-op-frete-deadline">Entrega em '+B(n.deadline)+"</span>":"",q=n.city?'<span class="mm-op-frete-city">para '+B(n.city)+"</span>":"",I="";if(n.options&&n.options.length>1){I='<div class="mm-op-frete-options"><button type="button" class="mm-op-frete-toggle" data-mm-act="toggle-frete-opts" aria-expanded="false">Ver outras opções ('+n.options.length+')</button><div class="mm-op-frete-options-list" hidden>';for(var Y=0;Y<n.options.length;Y++){var H=n.options[Y],tn=H.isSelected?" is-selected":"",Q=H.isFree?'<span class="mm-op-frete-opt-value is-free">Grátis</span>':'<span class="mm-op-frete-opt-value">'+U(H.value)+"</span>";I+='<button type="button" class="mm-op-frete-opt'+tn+'" data-mm-act="op-ship-select" data-ship-id="'+B(H.id)+'" aria-pressed="'+(H.isSelected?"true":"false")+'"><span class="mm-op-frete-opt-radio" aria-hidden="true"><span></span></span><span class="mm-op-frete-opt-body"><span class="mm-op-frete-opt-name">'+B(H.name||"Padrão")+"</span>"+(H.deadline?'<span class="mm-op-frete-opt-deadline">'+B(H.deadline)+"</span>":"")+"</span>"+Q+"</button>"}I+="</div></div>"}t.innerHTML='<div class="mm-op-frete-card'+(a?" is-free":"")+'"><div class="mm-op-frete-icon">'+V.truck+'</div><div class="mm-op-frete-body"><div class="mm-op-frete-row">'+s+i+"</div>"+h+q+"</div></div>"+I}}function rt(){try{var n=document.querySelector("#resumo-compra");if(n){var t=n.querySelector(".txt-cupom");if(t){var a=(t.textContent||"").replace(/\s+/g,"").trim();if(/^[A-Za-z0-9][A-Za-z0-9._-]{1,}$/.test(a))return a.toUpperCase()}return""}}catch{}try{var i=wn();if(i&&i.couponCode)return String(i.couponCode).toUpperCase()}catch{}return""}function zt(n,t){var a=Bn(n),i=rt(),s="cep="+encodeURIComponent(a);i&&(s+="&cupom-desconto="+encodeURIComponent(i)),fetch("/checkout/cart?operation=atualizaValoresCarrinho",{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest"},body:s}).then(function(h){return h.text()}).then(function(h){var q;try{q=new DOMParser().parseFromString(h,"text/html")}catch{t(null);return}for(var I=q.querySelectorAll(".servico-frete"),Y=[],H=0;H<I.length;H++){var tn=I[H],Q=tn.getAttribute("data-valor-frete");if(!(Q===null||Q==="")){var en=parseFloat(Q);if(!isNaN(en)){var nn=tn.querySelector('input[type="radio"]'),sn=tn.querySelector(".dias-entrega"),K=sn?sn.textContent.trim():"",gn=K.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i);Y.push({id:nn?nn.value:"",name:tn.getAttribute("data-servico-frete")||"",deadline:gn?gn[1].replace(/\s+/g," "):"",value:en,isFree:en===0,isSelected:nn?nn.checked:!1})}}}if(!Y.length){t(null);return}var cn=Y.filter(function(pn){return pn.isSelected})[0];cn||(cn=Y.reduce(function(pn,un){return un.value<pn.value?un:pn},Y[0]),cn.isSelected=!0);var hn=q.querySelector(".frete-location .city, .frete-calculado .city");t({value:cn.value,name:cn.name,deadline:cn.deadline,city:hn?hn.textContent.trim():"",options:Y})}).catch(function(){t(null)})}function gt(){function n(on){if(!on)return"";var an=on.match(/(\d+(?:\s*[aà]\s*\d+)?)\s*dias?(?:\s*\([^)]+\))?\s*([úu]teis)?/i);return an?an[1].replace(/\s+/g," ")+" dias úteis":""}function t(on){for(var an=[],Sn=on.querySelectorAll(".servico-frete"),Cn=0;Cn<Sn.length;Cn++){var In=Sn[Cn],Vn=In.querySelector('input[type="radio"]'),$n=In.querySelector(".dias-entrega"),ct=parseFloat(In.getAttribute("data-valor-frete")||"0"),et=In.getAttribute("data-servico-frete")||"",xt=$n?$n.textContent.trim():"",yt=xt.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i);an.push({id:Vn?Vn.value:"",name:et,deadline:yt?yt[1].replace(/\s+/g," "):xt,value:ct,isFree:ct===0,isSelected:Vn?Vn.checked:!1})}return an}var a=v.querySelector(".frete-calculado");if(a&&a.textContent.trim()){var i=t(a),s=a.querySelector(".frete-location .city"),h=s?s.textContent.trim():"",q=i.filter(function(on){return on.isSelected})[0]||i[0];if(q)return{value:q.value,name:q.name,deadline:q.deadline,city:h,options:i};var I=a.querySelector(".info-frete-selec .info-title span, .info-title span"),Y=a.querySelector(".info-frete-selec .dias-entrega, .dias-entrega"),H=a.querySelector(".value.valor-frete, .valor-frete .value"),tn=a.textContent,Q=null;if(H&&(/gr[aá]tis/i.test(H.textContent)?Q=0:Q=dn(H.textContent)),Q===null&&(/gr[aá]tis/i.test(tn)?Q=0:Q=dn(tn)||null),Q!==null)return{value:Q,name:I?I.textContent.trim():"",deadline:n(Y?Y.textContent:tn),city:h,options:[]}}var en=v.querySelector(".line-entrega"),nn=v.querySelector(".value.valor-frete, .valor-frete .value");if(en||nn){var sn=((en||nn).textContent||"").trim(),K=wn(),gn=K&&K.shippingName||"",cn=K&&K.shippingDeadline||"",hn=K&&K.shippingCity||"",pn=K?K.shippingOptions||[]:[];if(sn){var un=(v.querySelector(".nome-servico-frete, .info-frete-selec .info-title span")||{}).textContent||"",kn=(v.querySelector(".info-entrega, .prazo-entrega, .line-entrega .sub, .info-frete-selec .dias-entrega")||{}).textContent||"",w=n(kn)||n(sn)||cn,C=un.trim()||gn;if(/gr[aá]tis/i.test(sn))return{value:0,deadline:w,name:C,city:hn,options:pn};var W=dn(sn);if(W>0)return{value:W,deadline:w,name:C,city:hn,options:pn}}if(K&&K.shipping!==null&&K.shipping!==void 0)return{value:K.shipping,deadline:cn,name:gn,city:hn,options:pn}}return null}function Un(){var n=document.getElementById("mm-op-cep");if(n){var t=(n.value||"").replace(/\D/g,"");if(t.length===8){if(Un._lastCep===t){var a=document.getElementById("mm-op-frete-slot");if(a&&a.querySelector(".mm-op-frete-card"))return}Un._lastCep=t;var i=(Un._token||0)+1;Un._token=i,Hn(t);var s=v.querySelector("#cep, .input-cep");s&&(s.value=Bn(t),Fn(s)),Xn("loading"),zt(t,function(h){if(Un._token===i){if(!h){Xn("error");return}Xn(h);var q=wn();q&&(q.shipping=h.value,q.shippingDeadline=h.deadline,q.shippingName=h.name||"",q.shippingCity=h.city||"",q.shippingOptions=h.options||[],rn.set(R,JSON.stringify(q)),Bt(q))}})}}}function Yn(){var n=document.getElementById("mm-layout");if(!n||n._mmOpBound)return;n._mmOpBound=!0,n.addEventListener("click",function(a){var i=a.target.closest('[data-mm-act="toggle-frete-opts"]');if(i){a.preventDefault();var s=i.parentElement.querySelector(".mm-op-frete-options-list");if(s){var h=s.hasAttribute("hidden");h?s.removeAttribute("hidden"):s.setAttribute("hidden",""),i.setAttribute("aria-expanded",h?"true":"false"),i.textContent=h?"Ocultar opções":"Ver outras opções"}return}var q=a.target.closest('[data-mm-act="op-ship-select"]');if(q){a.preventDefault();var I=q.getAttribute("data-ship-id");if(!I)return;var Y=v.querySelector('.servico-frete input[type="radio"][value="'+I+'"]');if(!Y){console.warn("[mm-op] modalidade não encontrada no DOM:",I);return}for(var H=n.querySelectorAll(".mm-op-frete-opt"),tn=0;tn<H.length;tn++){var Q=H[tn],en=Q.getAttribute("data-ship-id")===I;Q.classList.toggle("is-selected",en),Q.setAttribute("aria-pressed",en?"true":"false")}Y.checked=!0,Y.click();var nn=wn();if(nn&&nn.shippingOptions&&nn.shippingOptions.length){var sn=nn.shippingOptions.filter(function(K){return String(K.id)===String(I)})[0];sn&&(nn.shipping=sn.value,nn.shippingDeadline=sn.deadline||"",nn.shippingName=sn.name||"",nn.shippingOptions=nn.shippingOptions.map(function(K){return K.isSelected=String(K.id)===String(I),K}),rn.set(R,JSON.stringify(nn)),Xn({value:sn.value,deadline:sn.deadline||"",name:sn.name||"",city:nn.shippingCity||"",options:nn.shippingOptions}),Bt(nn))}return}}),n.addEventListener("submit",function(a){var i=a.target.closest('[data-mm-act="onepage-submit"]');if(i){if(a.preventDefault(),_){Tn(i);return}var s={email:(document.getElementById("mm-op-email")||{}).value||"",nome:(document.getElementById("mm-op-nome")||{}).value||"",cpf:(document.getElementById("mm-op-cpf")||{}).value||"",tel:(document.getElementById("mm-op-tel")||{}).value||"",cep:(document.getElementById("mm-op-cep")||{}).value||"",rua:(document.getElementById("mm-op-rua")||{}).value||"",num:(document.getElementById("mm-op-num")||{}).value||"",comp:(document.getElementById("mm-op-comp")||{}).value||"",bairro:(document.getElementById("mm-op-bairro")||{}).value||"",cidade:(document.getElementById("mm-op-cidade")||{}).value||"",uf:(document.getElementById("mm-op-uf")||{}).value||""},h=[];if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email.trim())||h.push("mm-op-email"),s.nome.trim().split(/\s+/).length<2&&h.push("mm-op-nome"),s.cpf.replace(/\D/g,"").length!==11&&h.push("mm-op-cpf"),s.tel.replace(/\D/g,"").length<10&&h.push("mm-op-tel"),s.cep.replace(/\D/g,"").length!==8&&h.push("mm-op-cep"),s.rua.trim()||h.push("mm-op-rua"),s.num.trim()||h.push("mm-op-num"),s.bairro.trim()||h.push("mm-op-bairro"),s.cidade.trim()||h.push("mm-op-cidade"),s.uf.trim()||h.push("mm-op-uf"),h.length){h.forEach(function(Y){var H=document.getElementById(Y);H&&(H.classList.add("mm-input-error"),setTimeout(function(){H.classList.remove("mm-input-error")},1800))});var q=document.getElementById(h[0]);q&&(q.focus(),q.scrollIntoView({block:"center",behavior:"smooth"}));return}var I=i.querySelector(".mm-cta");I&&I.classList.add("is-loading"),rn.set("mm_user_email",s.email.trim()),ue(s)}}),n.addEventListener("input",function(a){var i=a.target;if(i){if(i.dataset&&i.dataset.mmCepFill==="1"&&delete i.dataset.mmCepFill,i.id==="mm-op-cpf")i.value=_t(i.value);else if(i.id==="mm-op-tel")i.value=bt(i.value);else if(i.id==="mm-op-cep"){i.value=ee(i.value);var s=i.value.replace(/\D/g,"");s.length===8&&Zt(s)}else i.id==="mm-op-uf"&&(i.value=(i.value||"").replace(/[^A-Za-z]/g,"").toUpperCase().slice(0,2));i.id&&i.id.indexOf("mm-op-")===0&&(Yn._draftTimer&&clearTimeout(Yn._draftTimer),Yn._draftTimer=setTimeout(Nn,400))}});function t(){Yn._draftTimer&&(clearTimeout(Yn._draftTimer),Yn._draftTimer=null),Nn()}n.addEventListener("blur",function(a){var i=a.target;i&&i.id&&i.id.indexOf("mm-op-")===0&&t()},!0),window.addEventListener("beforeunload",t)}function Zt(n){var t=document.getElementById("mm-op-cep-status");t&&(t.className="mm-input-status is-loading",t.textContent="Buscando..."),Vt(n,function(a){if(t&&(t.className="mm-input-status"),!a){t&&(t.className="mm-input-status is-error",t.textContent="CEP não encontrado",setTimeout(function(){t.className="mm-input-status",t.textContent=""},2500));return}t&&(t.className="mm-input-status is-ok",t.innerHTML=V.check,setTimeout(function(){t.className="mm-input-status",t.innerHTML=""},1800));var i=[["mm-op-rua",a.logradouro],["mm-op-bairro",a.bairro],["mm-op-cidade",a.cidade],["mm-op-uf",a.estado]];i.forEach(function(h){var q=document.getElementById(h[0]);!q||!h[1]||(!q.value||q.dataset.mmCepFill==="1")&&(q.value=h[1],q.dataset.mmCepFill="1")});var s=document.getElementById("mm-op-num");s&&setTimeout(function(){s.focus()},100),Un._t&&clearTimeout(Un._t),Un._t=setTimeout(Un,200)})}function Ht(n){if(!document.getElementById("mm-op-overlay")){var t=document.createElement("div");t.id="mm-op-overlay",t.innerHTML='<div class="mm-op-overlay-card"><div class="mm-op-overlay-spinner"></div><p class="mm-op-overlay-text">'+B(n||"Processando...")+"</p></div>",document.body.appendChild(t)}}function Yt(n){var t=document.querySelector("#mm-op-overlay .mm-op-overlay-text");t&&(t.textContent=n)}var dt=null;function ae(){if(!window.__mmStep1Observed){window.__mmStep1Observed=!0;var n=/compraSemCadastro/i;try{var t=window.fetch;typeof t=="function"&&(window.fetch=function(s,h){var q=typeof s=="string"?s:s&&s.url||"",I=h&&h.body||"",Y=n.test(q)||n.test(String(I)),H=t.apply(this,arguments);return Y&&H.then(function(tn){dt&&(tn&&tn.ok?dt.done=!0:dt.failed=!0)}).catch(function(){dt&&(dt.failed=!0)}),H})}catch{}try{var a=XMLHttpRequest.prototype.open,i=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(s,h){return this.__mmU=h||"",a.apply(this,arguments)},XMLHttpRequest.prototype.send=function(s){try{if(n.test(this.__mmU||"")||n.test(String(s||""))){var h=this;h.addEventListener("load",function(){dt&&(h.status>=200&&h.status<300?dt.done=!0:dt.failed=!0)}),h.addEventListener("error",function(){dt&&(dt.failed=!0)})}}catch{}return i.apply(this,arguments)}}catch{}}}function ue(n){var t=document.querySelector(".mm-op-form .mm-op-retry");t&&t.remove();var a=n.nome.trim(),i=n.email.trim(),s=n.rua.trim(),h=n.bairro.trim(),q=n.cidade.trim(),I=n.uf.trim(),Y=Bn(n.cep.replace(/\D/g,""));rn.set("mm_user_email",i);var H=function(tn,Q){var en=v.querySelector(tn);if(!en)return!1;try{var nn=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;nn.call(en,Q)}catch{en.value=Q}return en.dispatchEvent(new Event("input",{bubbles:!0})),en.dispatchEvent(new Event("change",{bubbles:!0})),en.dispatchEvent(new Event("blur",{bubbles:!0})),!0};H("#nome-completo_2",a),H("#cpf_2",n.cpf),H("#email_3",i),H("#telefone_2",n.tel),H("#cep",Y),H("#destinatario",a),H("#logradouro",s),H("#numero",n.num),H("#complemento",n.comp),H("#bairro",h),H("#cidade",q),H("#estado",I),Ht("Confirmando seus dados..."),setTimeout(function(){var tn=document.getElementById("mm-layout");tn&&(tn.style.display="none"),v.classList.remove("mm-shadow-mode");function Q(pn){var un=v.querySelector("#"+pn);return un?un.closest("form"):null}function en(){var pn=Q("nome-completo_2");if(!pn)return!1;var un=pn.querySelector('button[type="submit"], input[type="submit"], button:not([type])');return un?(un.click(),!0):typeof pn.requestSubmit=="function"?(pn.requestSubmit(),!0):(pn.submit(),!0)}function nn(){var pn=document.querySelector(".mz-toast-popup.error, .swal2-toast.swal2-icon-error");if(pn&&/inativo|realize login/i.test(pn.textContent||""))return"error";for(var un=document.querySelectorAll('button, [type="submit"]'),kn=0;kn<un.length;kn++){var w=(un[kn].textContent||"").toLowerCase();if(w.indexOf("cadastrar endere")!==-1&&un[kn].offsetParent!==null)return"ready"}return"wait"}function sn(){var pn=Q("cep");if(!pn)return!1;var un=pn.querySelector('button[type="submit"], input[type="submit"], button:not([type])');return un?(un.click(),!0):typeof pn.requestSubmit=="function"?(pn.requestSubmit(),!0):(pn.submit(),!0)}function K(pn){var un=document.getElementById("mm-op-overlay");un&&un.remove();var kn=document.getElementById("mm-layout");kn&&(kn.style.display=""),v.classList.add("mm-shadow-mode");var w=document.querySelector(".mm-op-form .mm-cta");w&&w.classList.remove("is-loading");var C=document.querySelector('.mm-op-form[data-mm-act="onepage-submit"]');if(C&&!C.querySelector(".mm-op-retry")){var W=document.createElement("div");W.className="mm-op-retry",W.setAttribute("data-mm-retry","1"),W.setAttribute("role","alert"),W.style.cssText="margin:14px 0;padding:12px 16px;border:1px solid #E7B84B;background:#FFF8E6;border-radius:12px;font-family:Poppins,system-ui,sans-serif;font-size:13px;color:#6B5313;line-height:1.45;",W.textContent=pn||"Quase lá — toque em “Última etapa: pagamento” novamente para concluir.",C.insertBefore(W,C.firstChild);try{W.scrollIntoView({block:"center",behavior:"smooth"})}catch{}}}function gn(pn){pn===0&&Yt("Abrindo o pagamento...");var un=document.querySelector('input[name="forma-pagto"], #forma-pagto-pix, #forma-pagto-cartao, #forma-pagto-boleto');if(un&&un.offsetParent!==null){try{ie(n)}catch{var kn=document.getElementById("mm-op-overlay");kn&&kn.remove();var w=document.getElementById("mm-layout");w&&(w.style.display="none")}return}pn<40?setTimeout(function(){gn(pn+1)},200):K("Não conseguimos abrir o pagamento. Toque em “Última etapa: pagamento” para tentar de novo.")}function cn(){Yt("Salvando sua entrega..."),sn(),gn(0)}ae();var hn={done:!1,failed:!1};dt=hn,setTimeout(function(){en();var pn=80,un=4,kn=0,w=null;(function C(){kn++;var W=document.querySelector('input[name="forma-pagto"], #forma-pagto-pix, #forma-pagto-cartao, #forma-pagto-boleto');if(W&&W.offsetParent!==null){gn(0);return}var on=nn();if(hn.failed||on==="error"){K("Não foi possível iniciar o pedido. Toque em “Última etapa: pagamento” para tentar de novo.");return}if(on==="ready"){cn();return}if(hn.done&&(w===null&&(w=kn),kn-w>=un)){cn();return}if(kn<pn){setTimeout(C,250);return}hn.done?cn():K("Está demorando mais que o normal. Toque em “Última etapa: pagamento” para tentar de novo.")})()},120)},80)}function fe(){var n={pix:null,cartao:null,boleto:null},t=[];try{t=window.Zord&&window.Zord.Calculo&&window.Zord.Calculo.FormasPagamentoPedido||[]}catch{}t.forEach(function(Q){var en=Q.formaPagamento&&Q.formaPagamento.id,nn=Q.formaPagamento&&Q.formaPagamento.isCartao,sn=Q.condicoes||[];!sn.length||!nn||(!n.cartao||sn.length>n.cartao.condicoes.length)&&(n.cartao={formaId:en,valorTotal:sn[0].valorTotal,condicoes:sn.map(function(K){return{nome:K.condicaoPagamento&&K.condicaoPagamento.nome,numParcelas:K.condicaoPagamento&&K.condicaoPagamento.numeroParcelas,valorParcela:K.valorParcela,valorTotal:K.valorTotal}})})});function a(Q){if(!Q)return 0;var en=Q.getAttribute&&Q.getAttribute("data-valor-total");if(en){var nn=parseFloat(en);if(nn>0)return nn}var sn=(Q.textContent||"").replace(/[^\d,.]/g,"");return sn.indexOf(",")!==-1&&(sn=sn.replace(/\./g,"").replace(",",".")),parseFloat(sn)||0}var i=document.querySelector("#valor-total-pedido-pix, .valor-total-pix[data-valor-total]"),s=a(i);if(s>0)n.pix={formaId:17,valorTotal:s};else{var h=t.find&&t.find(function(Q){return Q.formaPagamento&&Q.formaPagamento.id===17});h&&h.condicoes&&h.condicoes[0]&&(n.pix={formaId:17,valorTotal:h.condicoes[0].valorTotal})}var q=document.querySelector("#valor-total-pedido-boleto, .valor-total-boleto[data-valor-total]"),I=a(q);if(I>0)n.boleto={valorTotal:I};else{var Y=t.find&&t.find(function(Q){var en=Q.formaPagamento&&Q.formaPagamento.id,nn=Q.formaPagamento&&Q.formaPagamento.isCartao;return!nn&&en!==17&&Q.condicoes&&Q.condicoes.length});Y&&(n.boleto={formaId:Y.formaPagamento.id,valorTotal:Y.condicoes[0].valorTotal})}if(!n.cartao){var H=document.querySelector(".valor-parcela-cartao");if(H){var tn=a(H);tn>0&&(n.cartao={valorTotal:tn*12,condicoes:[]})}}return n}function ie(n){var t=wn(),a=fe();v.classList.add("mm-shadow-mode"),document.body.classList.add("mm-checkout-rebuild");var i=document.getElementById("mm-layout");(!i||i.parentElement!==v)&&(i&&i.parentElement&&i.parentElement.removeChild(i),i=document.createElement("div"),i.id="mm-layout",v.insertBefore(i,v.firstChild)),i.className="mm-op-layout mm-op-step3-layout",i.style.display="",i.innerHTML=he(t,n,a),document.documentElement.classList.remove("mm-cart-loading");var s=document.getElementById("mm-op-overlay");s&&s.remove();try{window.scrollTo({top:0,behavior:"smooth"})}catch{window.scrollTo(0,0)}ye(n,a)}function he(n,t,a){var i=typeof renderGlobalFooter=="function"?renderGlobalFooter():"";return jn("payment")+'<main class="mm-op-main"><div class="mm-op-step3-grid"><section class="mm-op-step3-left">'+ve(a)+be()+'</section><aside class="mm-op-step3-sum-wrap">'+ge(t)+xe(n,a,"pix")+"</aside></div></main>"+i}function ge(n){var t=n||{},a=B(t.nome||""),i=B(t.email||""),s=B(t.cpf||""),h=B(t.tel||""),q=B(t.rua||""),I=B(t.num||""),Y=t.comp?", "+B(t.comp):"",H=B(t.bairro||""),tn=B(t.cidade||""),Q=B(t.uf||""),en=B(t.cep||"");return'<div class="mm-op-step3-completed"><div class="mm-op-completed-card" data-section="dados"><div class="mm-op-completed-head"><span class="mm-op-completed-check">'+V.check+'</span><h3 class="mm-op-completed-title">Dados pessoais</h3><a href="/checkout/onepage" class="mm-op-completed-edit" data-mm-act="edit-dados" aria-label="Editar dados">'+Dn.editPencil+' Editar</a></div><dl class="mm-op-completed-body">'+(a?"<div><dt>Nome</dt><dd>"+a+"</dd></div>":"")+(i?"<div><dt>E-mail</dt><dd>"+i+"</dd></div>":"")+(s?"<div><dt>CPF</dt><dd>"+s+"</dd></div>":"")+(h?"<div><dt>Telefone</dt><dd>"+h+"</dd></div>":"")+'</dl></div><div class="mm-op-completed-card" data-section="endereco"><div class="mm-op-completed-head"><span class="mm-op-completed-check">'+V.check+'</span><h3 class="mm-op-completed-title">Endereço de entrega</h3><a href="/checkout/onepage" class="mm-op-completed-edit" data-mm-act="edit-endereco" aria-label="Editar endereço">'+Dn.editPencil+' Editar</a></div><address class="mm-op-completed-address">'+(t.addressLines&&t.addressLines.length?t.addressLines.map(function(nn){return B(nn)}).join("<br>"):q+", "+I+Y+"<br>"+H+" — "+tn+"/"+Q+"<br>"+(en?"CEP "+en:""))+"</address></div></div>"}function ve(n){var t=n.pix?n.pix.valorTotal:0,a=n.cartao?n.cartao.valorTotal:0,i=n.boleto?n.boleto.valorTotal:0,s=a>t?a-t:0,h=null;n.cartao&&n.cartao.condicoes&&n.cartao.condicoes.length&&(h=n.cartao.condicoes[n.cartao.condicoes.length-1]);var q=h?"até "+h.numParcelas+"x de "+U(h.valorParcela)+" sem juros":a>0?"até 12x sem juros":"Cartão de crédito",I='<label class="mm-op-pay-radio is-active" data-forma="pix"><input type="radio" name="mm-pay" value="pix" checked><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+Dn.pix+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">PIX</span><span class="mm-op-pay-sub">Aprovação instantânea · em 1 minuto</span></div><div class="mm-op-pay-price">'+(s>0?'<span class="mm-op-pay-badge-save">Economize '+U(s)+"</span>":"")+'<span class="mm-op-pay-amount">'+U(t)+'</span></div></div><div class="mm-op-pay-detail"><ul class="mm-op-pay-benefits"><li>'+V.check+"<span>QR Code e Copia-e-Cola após confirmar</span></li><li>"+V.check+"<span>Pedido aprovado em até 1 minuto</span></li><li>"+V.check+"<span>Pagamento 100% seguro · sem dados de cartão</span></li></ul></div></label>",Y='<div class="mm-op-pay-brands"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-visa.svg" alt="Visa" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-mastercard.svg" alt="Mastercard" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-american-express.svg" alt="American Express" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-elo.svg" alt="Elo" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-hipercard.svg" alt="Hipercard" width="32" height="20"></div>',H='<span class="mm-op-req" aria-hidden="true">*</span>';function tn(sn){return'<span class="mm-op-field-err" id="'+sn+'-err" role="alert" aria-live="polite"></span>'}var Q='<div class="mm-op-card-form"><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-num">Número do cartão'+H+'</label><div class="mm-input-wrap mm-input-wrap-card"><span class="mm-input-icon" aria-hidden="true">'+V.card+'</span><input id="mm-pay-card-num" type="tel" class="mm-input" inputmode="numeric" autocomplete="off" data-mmac="cc-number" placeholder="0000 0000 0000 0000" maxlength="23" aria-describedby="mm-pay-card-num-err" aria-required="true" disabled><span class="mm-op-card-brand-detected" aria-live="polite"></span></div>'+tn("mm-pay-card-num")+'</div><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-name">Nome impresso no cartão'+H+'</label><input id="mm-pay-card-name" type="text" class="mm-input mm-input-noicon" autocomplete="off" data-mmac="cc-name" placeholder="Como aparece no cartão" maxlength="100" aria-describedby="mm-pay-card-name-err" aria-required="true" disabled>'+tn("mm-pay-card-name")+'</div><div class="mm-op-card-field mm-op-card-field-half"><label for="mm-pay-card-exp">Validade'+H+'</label><input id="mm-pay-card-exp" type="tel" class="mm-input mm-input-noicon" inputmode="numeric" autocomplete="off" data-mmac="cc-exp" placeholder="MM/AA" maxlength="5" aria-describedby="mm-pay-card-exp-err" aria-required="true" disabled>'+tn("mm-pay-card-exp")+'</div><div class="mm-op-card-field mm-op-card-field-half"><label for="mm-pay-card-cvv">CVV'+H+'</label><input id="mm-pay-card-cvv" type="tel" class="mm-input mm-input-noicon" inputmode="numeric" autocomplete="off" data-mmac="cc-csc" placeholder="000" maxlength="4" aria-describedby="mm-pay-card-cvv-err" aria-required="true" disabled>'+tn("mm-pay-card-cvv")+'</div><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-installments">Condições de pagamento'+H+'</label><select id="mm-pay-card-installments" class="mm-input mm-input-noicon mm-op-card-installments" aria-describedby="mm-pay-card-installments-err" aria-required="true" disabled><option value="">Digite o cartão pra ver as condições</option></select>'+tn("mm-pay-card-installments")+"</div></div>",en='<label class="mm-op-pay-radio" data-forma="cartao"><input type="radio" name="mm-pay" value="cartao"><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+Dn.cardBig+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">Cartão de Crédito</span><span class="mm-op-pay-sub">'+B(q)+'</span></div><div class="mm-op-pay-price"><span class="mm-op-pay-amount">'+U(a)+'</span></div></div><div class="mm-op-pay-detail">'+Y+Q+"</div></label>",nn='<label class="mm-op-pay-radio" data-forma="boleto"><input type="radio" name="mm-pay" value="boleto"><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+Dn.barcode+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">Boleto Bancário</span><span class="mm-op-pay-sub">Aprovação em 1 a 3 dias úteis</span></div><div class="mm-op-pay-price"><span class="mm-op-pay-amount">'+U(i)+'</span></div></div><div class="mm-op-pay-detail"><ul class="mm-op-pay-benefits"><li>'+V.check+"<span>Código de barras enviado por e-mail</span></li><li>"+V.check+"<span>Pagamento em banco, lotérica ou app</span></li><li>"+V.check+"<span>Vencimento em 3 dias úteis</span></li></ul></div></label>";return'<section class="mm-op-step3-card" aria-labelledby="mm-op-step3-h"><div class="mm-op-step3-heading"><h2 id="mm-op-step3-h" class="mm-h">Como você quer pagar?</h2><p class="mm-op-step3-sub">Última etapa · escolha sua forma de pagamento '+(s>0?"· PIX tem desconto de "+U(s):"")+'</p></div><div class="mm-op-pay-radios" role="radiogroup" aria-label="Forma de pagamento">'+I+en+nn+'</div><button type="button" class="mm-cta mm-op-cta mm-op-finalizar" data-mm-act="finalizar-compra">'+V.lock+'<span class="mm-op-finalizar-label">Finalizar compra · '+U(t)+'</span></button><p class="mm-op-finalizar-sub">'+V.shield+"<span>Pagamento seguro · criptografia SSL-256 · seus dados não são armazenados</span></p></section>"}function be(){return'<div class="mm-op-trust-payment"><div class="mm-op-trust-payment-row"><span class="mm-trust-item">'+V.lock+'<span>Site 100% seguro</span></span><span class="mm-trust-item">'+V.shield+'<span>Garantia 12 meses</span></span><span class="mm-trust-item">'+V.rotate+'<span>7 dias pra trocar</span></span><span class="mm-trust-item">'+V.whats+'<span>Atendimento humano</span></span></div><p class="mm-op-trust-payment-note">Ao finalizar, você concorda com os <a href="/termos-de-uso" target="_blank" rel="noopener">termos de compra</a> e a <a href="/politica-privacidade" target="_blank" rel="noopener">política de privacidade</a>.</p></div>'}function xe(n,t,a){if(!n||!n.items||!n.items.length)return'<aside class="mm-id-sum mm-sum mm-op-step3-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><p class="mm-sum-empty">Não conseguimos carregar o resumo do seu pedido.</p></div></aside>';var i=t.pix?t.pix.valorTotal:0,s=t.cartao?t.cartao.valorTotal:0,h=t.boleto?t.boleto.valorTotal:0,q=s>i?s-i:0,I=a==="pix"?i:a==="boleto"?h:s,Y=a==="pix"?"no PIX":a==="boleto"?"no boleto":"no cartão",H=3,tn=n.items.slice(0,H),Q=n.items.length-H,en=tn.map(function(cn){var hn=cn.imgSrc?'<img src="'+B(cn.imgSrc)+'" alt="'+B(cn.name)+'" loading="lazy">':'<div class="mm-id-thumb-placeholder">'+V.box+"</div>",pn=cn.quantity>1?'<strong class="mm-id-thumb-qty">'+cn.quantity+"×</strong> ":"",un=cn.lineTotal>0?cn.lineTotal:cn.lineTotalPix;return'<div class="mm-id-thumb"><div class="mm-id-thumb-img">'+hn+'</div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+pn+B(cn.name)+"</p>"+(cn.variant?'<p class="mm-id-thumb-variant">'+B(cn.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price">'+U(un)+"</div></div>"}).join("");Q>0&&(en+='<div class="mm-id-thumb-more">+ '+Q+" "+(Q===1?"item":"itens")+" a mais</div>");var nn=n.subtotalFull>0?n.subtotalFull:n.subtotalPix,sn='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+U(nn)+"</span></div>";if(n.shipping!==null&&n.shipping!==void 0){var K=n.shipping===0?'<span class="mm-row-value is-free">'+V.check+" Grátis</span>":'<span class="mm-row-value">'+U(n.shipping)+"</span>";sn+='<div class="mm-row"><span class="mm-row-label">Frete'+(n.shippingDeadline?' <span class="mm-row-sub">· '+B(n.shippingDeadline)+"</span>":"")+"</span>"+K+"</div>"}n.discount>0&&(sn+='<div class="mm-row"><span class="mm-row-label">Cupom'+(n.couponCode?' <span class="mm-row-sub">· '+B(n.couponCode)+"</span>":"")+'</span><span class="mm-row-value is-discount">− '+U(n.discount)+"</span></div>"),q>0&&a==="pix"&&(sn+='<div class="mm-row mm-row-pix-discount"><span class="mm-row-label">'+V.bolt+' Desconto PIX</span><span class="mm-row-value is-discount">− '+U(q)+"</span></div>");var gn='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value" data-mm-total>'+U(I)+'</div><div class="mm-total-pix" data-mm-total-sub><span>'+Y+"</span></div></div>";return'<aside class="mm-id-sum mm-sum mm-op-step3-sum" data-active-forma="'+B(a)+'"><h2 class="mm-h">Resumo do pedido</h2><div class="mm-sum-card"><div class="mm-id-thumbs">'+en+'</div><div class="mm-sum-rows">'+sn+"</div>"+gn+"</div></aside>"}function ye(n,t){var a=document.getElementById("mm-layout");if(!a||a._mmStep3Bound)return;a._mmStep3Bound=!0;var i=wn(),s={activeForma:"pix",cardNumValid:!1,cardBrand:null,cardInstallments:null,submitting:!1};a.addEventListener("click",function(w){var C=w.target.closest(".mm-op-pay-radio");if(C){var W=C.querySelector('input[type="radio"]');W&&!W.checked&&(w.preventDefault(),W.checked=!0,H(C.getAttribute("data-forma")));return}if(w.target.closest('[data-mm-act="finalizar-compra"]')){w.preventDefault(),kn();return}var on=w.target.closest('[data-mm-act="edit-dados"], [data-mm-act="edit-endereco"]');if(on){w.preventDefault(),location.reload();return}}),a.addEventListener("input",function(w){var C=w.target;!C||!C.id||(C.id==="mm-pay-card-num"?sn(C):C.id==="mm-pay-card-exp"?K(C):C.id==="mm-pay-card-cvv"&&(C.value=(C.value||"").replace(/\D/g,"").slice(0,4)))}),a.addEventListener("change",function(w){if(w.target&&w.target.id==="mm-pay-card-installments"){var C=w.target,W=C.options[C.selectedIndex];W&&W.value&&(s.cardInstallments={numero:parseInt(W.value,10),label:W.textContent||""},hn(W.value),q("mm-pay-card-installments"))}}),a.addEventListener("blur",function(w){var C=w.target;if(!(!C||!C.id)){var W=["mm-pay-card-num","mm-pay-card-name","mm-pay-card-exp","mm-pay-card-cvv"];W.indexOf(C.id)!==-1&&I(C.id)}},!0),a.addEventListener("focus",function(w){var C=w.target;!C||!C.id||/^mm-pay-card-/.test(C.id)&&q(C.id)},!0);function h(w,C){var W=document.getElementById(w),on=document.getElementById(w+"-err");W&&(W.classList.add("mm-input-error"),W.setAttribute("aria-invalid","true")),on&&(on.textContent=C,on.classList.add("is-visible"))}function q(w){var C=document.getElementById(w),W=document.getElementById(w+"-err");C&&(C.classList.remove("mm-input-error"),C.removeAttribute("aria-invalid")),W&&(W.textContent="",W.classList.remove("is-visible"))}function I(w){var C=document.getElementById(w);if(!C)return!0;var W=(C.value||"").trim();if(w==="mm-pay-card-num"){var on=W.replace(/\D/g,"");return on?on.length<13?(h(w,"Número do cartão incompleto"),!1):Y(on)?(q(w),!0):(h(w,"Número do cartão inválido — confira os dígitos"),!1):(h(w,"Informe o número do cartão"),!1)}if(w==="mm-pay-card-name")return W?W.split(/\s+/).length<2?(h(w,"Use o nome completo como aparece no cartão"),!1):(q(w),!0):(h(w,"Informe o nome impresso no cartão"),!1);if(w==="mm-pay-card-exp"){var an=W.replace(/\D/g,"");if(an.length!==4)return h(w,"Informe a validade no formato MM/AA"),!1;var Sn=parseInt(an.slice(0,2),10),Cn=parseInt(an.slice(2),10);if(Sn<1||Sn>12)return h(w,"Mês inválido (01 a 12)"),!1;var In=new Date,Vn=In.getFullYear()%100,$n=In.getMonth()+1;return Cn<Vn||Cn===Vn&&Sn<$n?(h(w,"Cartão expirado"),!1):(q(w),!0)}if(w==="mm-pay-card-cvv"){var ct=W.replace(/\D/g,"");return ct.length<3?(h(w,"CVV deve ter 3 ou 4 dígitos"),!1):(q(w),!0)}return w==="mm-pay-card-installments"?W?(q(w),!0):(h(w,"Selecione o número de parcelas"),!1):!0}function Y(w){for(var C=0,W=!1,on=w.length-1;on>=0;on--){var an=parseInt(w.charAt(on),10);W&&(an*=2,an>9&&(an-=9)),C+=an,W=!W}return C%10===0}function H(w){if(!(!w||s.activeForma===w)){s.activeForma=w,a.querySelectorAll(".mm-op-pay-radio").forEach(function(an){an.classList.toggle("is-active",an.getAttribute("data-forma")===w)});var C=document.getElementById("forma-pagto-"+w);if(C&&!C.checked)try{C.click()}catch{}var W=a.querySelectorAll(".mm-op-card-form input, .mm-op-card-form select"),on=w==="cartao";W.forEach(function(an){an.disabled=!on,on?an.dataset.mmac&&an.setAttribute("autocomplete",an.dataset.mmac):an.setAttribute("autocomplete","off")}),tn(w),w==="cartao"&&setTimeout(function(){var an=document.getElementById("mm-pay-card-num");an&&!an.value&&an.focus()},250)}}function tn(w){var C=a.querySelector(".mm-op-step3-sum");if(C){C.setAttribute("data-active-forma",w);var W=t.pix?t.pix.valorTotal:0,on=t.cartao?t.cartao.valorTotal:0,an=t.boleto?t.boleto.valorTotal:0,Sn=on>W?on-W:0,Cn=w==="pix"?W:w==="boleto"?an:on,In=w==="pix"?"no PIX":w==="boleto"?"no boleto":"no cartão",Vn=C.querySelector("[data-mm-total]");if(Vn){var $n=Vn.textContent||"",ct=dn($n);ct!==Cn?Q(Vn,ct,Cn,360):Vn.textContent=U(Cn)}var et=C.querySelector("[data-mm-total-sub] span");et&&et.textContent!==In&&(et.textContent=In);var xt=C.querySelector(".mm-sum-rows"),yt=xt?xt.querySelector(".mm-row-pix-discount"):null;if(w==="pix"&&Sn>0){if(!yt&&xt){var It=document.createElement("div");It.innerHTML='<div class="mm-row mm-row-pix-discount"><span class="mm-row-label">'+V.bolt+' Desconto PIX</span><span class="mm-row-value is-discount">− '+U(Sn)+"</span></div>",xt.appendChild(It.firstChild)}}else yt&&yt.remove();en(w)}}function Q(w,C,W,on){w._mmAnimToken&&cancelAnimationFrame(w._mmAnimToken);var an=null,Sn=W-C;function Cn(In){an||(an=In);var Vn=In-an,$n=Math.min(1,Vn/on),ct=1-Math.pow(1-$n,3),et=C+Sn*ct;w.textContent=U(et),$n<1?w._mmAnimToken=requestAnimationFrame(Cn):(w.textContent=U(W),w._mmAnimToken=null)}w._mmAnimToken=requestAnimationFrame(Cn)}function en(w){var C=a.querySelector(".mm-op-finalizar-label");if(C){var W=w==="pix"?t.pix&&t.pix.valorTotal:w==="boleto"?t.boleto&&t.boleto.valorTotal:t.cartao&&t.cartao.valorTotal;C.textContent="Finalizar compra · "+U(W||0)}}function nn(w){var C=(w||"").replace(/\D/g,"");return C?/^4/.test(C)?"visa":/^(5[1-5]|22[2-9]|2[3-6]|27[01]|2720)/.test(C)?"mastercard":/^3[47]/.test(C)?"amex":/^(4011|4312|4389|4514|4573|5041|5066|5067|509|6277|6362|6363|650|6516|6550)/.test(C)?"elo":/^(606282|384100|384140|384160|606|637095|637568|637599|637609|637612)/.test(C)?"hipercard":null:null}function sn(w){var C=(w.value||"").replace(/\D/g,"").slice(0,19),W=C.replace(/(\d{4})(?=\d)/g,"$1 ");if(W!==w.value){var on=w.selectionStart;w.value=W;try{w.setSelectionRange(on+1,on+1)}catch{}}var an=nn(C);s.cardBrand=an,s.cardNumValid=C.length>=13;var Sn=a.querySelector(".mm-op-card-brand-detected");Sn&&(Sn.className="mm-op-card-brand-detected"+(an?" is-"+an:""),Sn.textContent=an?an.toUpperCase():""),C.length>=6&&(gn(C),un())}function K(w){var C=(w.value||"").replace(/\D/g,"").slice(0,4),W=C.length>2?C.slice(0,2)+"/"+C.slice(2):C;if(w.value=W,C.length===4){var on=C.slice(0,2),an="20"+C.slice(2);cn("pag-cartao-mes-validade",String(parseInt(on,10))),cn("pag-cartao-ano-validade",an)}}function gn(w){var C=document.getElementById("pag-cartao-numero");if(C){try{var W=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;W.call(C,w)}catch{C.value=w}C.dispatchEvent(new Event("input",{bubbles:!0})),C.dispatchEvent(new Event("change",{bubbles:!0})),C.dispatchEvent(new Event("blur",{bubbles:!0}))}}function cn(w,C){var W=document.getElementById(w);if(W){try{var on=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;on.call(W,C)}catch{W.value=C}W.dispatchEvent(new Event("change",{bubbles:!0}))}}function hn(w){cn("pag-cartao-parcela",w)}var pn=null;function un(){if(pn)return;var w=document.getElementById("pag-cartao-parcela");if(!w)return;var C=document.getElementById("mm-pay-card-installments");if(!C)return;function W(){var on=w.querySelectorAll("option");if(!(on.length<=1)){var an="";on.forEach(function(Sn){if(!Sn.value){an+='<option value="">Selecione as parcelas</option>';return}an+='<option value="'+B(Sn.value)+'">'+B(Sn.textContent.trim())+"</option>"}),C.innerHTML=an,C.options.length>1&&(C.selectedIndex=1,s.cardInstallments={numero:parseInt(C.options[1].value,10)||1,label:C.options[1].textContent},hn(C.options[1].value))}}W(),pn=new MutationObserver(W),pn.observe(w,{childList:!0,subtree:!0})}function kn(){if(console.log("[mm-checkout] submitFinalizar() entry",{submitting:s.submitting,activeForma:s.activeForma}),s.submitting)return;var w=s.activeForma,C=a.querySelector(".mm-op-finalizar");if(!C){console.log("[mm-checkout] submitFinalizar: no .mm-op-finalizar btn");return}if(w==="cartao"){var W=["mm-pay-card-num","mm-pay-card-name","mm-pay-card-exp","mm-pay-card-cvv","mm-pay-card-installments"],on=W.filter(function(zn){return!I(zn)});if(console.log("[mm-checkout] validation",{errorCount:on.length,errors:on}),on.length){var an=document.getElementById(on[0]);if(an){an.focus();try{an.scrollIntoView({block:"center",behavior:"smooth"})}catch{}}return}var Sn=document.getElementById("mm-pay-card-name"),Cn=document.getElementById("mm-pay-card-cvv"),In=document.getElementById("pag-cartao-titular");if(In){try{var Vn=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;Vn.call(In,Sn.value.trim())}catch{In.value=Sn.value.trim()}In.dispatchEvent(new Event("input",{bubbles:!0})),In.dispatchEvent(new Event("blur",{bubbles:!0}))}var $n=document.getElementById("pag-cartao-vericacao");if($n){try{var ct=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;ct.call($n,Cn.value.replace(/\D/g,""))}catch{$n.value=Cn.value.replace(/\D/g,"")}$n.dispatchEvent(new Event("input",{bubbles:!0})),$n.dispatchEvent(new Event("blur",{bubbles:!0}))}var et=document.getElementById("pag-cartao-cpf");if(et&&n&&n.cpf){try{var xt=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;xt.call(et,n.cpf)}catch{et.value=n.cpf}et.dispatchEvent(new Event("input",{bubbles:!0})),et.dispatchEvent(new Event("blur",{bubbles:!0}))}}s.submitting=!0,C.classList.add("is-loading"),C.setAttribute("aria-busy","true");var yt=C.querySelector(".mm-op-finalizar-label");if(yt&&(yt.textContent="Processando pagamento..."),Ht("Finalizando seu pedido..."),w==="cartao"){var It=document.getElementById("mm-pay-card-installments");It&&It.value&&hn(It.value)}window.__mmCheckoutDebug=window.__mmCheckoutDebug||[];function On(zn,it){var mt={t:new Date().toISOString(),msg:zn,data:it};window.__mmCheckoutDebug.push(mt),console.log("[mm-checkout]",zn,it||"")}function Rt(){if(On("doSubmit() called",{forma:w}),w==="cartao"){var zn=document.getElementById("aceito-termos-bcash-one-card");zn&&!zn.checked&&(zn.checked=!0,zn.dispatchEvent(new Event("change",{bubbles:!0}))),On("terms",{checked:zn?.checked})}var it=w==="pix"?"form-pag-pix":w==="boleto"?"form-pag-boleto":"form-pag-cartao",mt=document.getElementById(it);if(!mt){On("ERROR: form not found",{formId:it}),alert("Erro interno: formulário de pagamento não encontrado. Recarregue a página."),s.submitting=!1,C.classList.remove("is-loading");var wt=document.getElementById("mm-op-overlay");wt&&wt.remove();return}w==="cartao"&&On("pre-submit cartao state",{numero:document.getElementById("pag-cartao-numero")?.value,bandeira:document.getElementById("pag-cartao-bandeira")?.value,parcela:document.getElementById("pag-cartao-parcela")?.value,titular:document.getElementById("pag-cartao-titular")?.value,mes:document.getElementById("pag-cartao-mes-validade")?.value,ano:document.getElementById("pag-cartao-ano-validade")?.value,cvv:document.getElementById("pag-cartao-vericacao")?.value?.length,cpf:document.getElementById("pag-cartao-cpf")?.value,tokenMp:document.getElementById("pag-cartao-token-mp")?.value?.substring(0,20)});var kt=mt.querySelector('button.button-success, button[type="submit"], input[type="submit"]');if(kt)On("clicking native button",{text:kt.textContent?.trim()}),kt.click();else if(typeof mt.requestSubmit=="function"){On("no native btn, using requestSubmit");try{mt.requestSubmit()}catch(Lt){On("requestSubmit error",Lt.message),mt.submit()}}else On("no native btn, using form.submit()"),mt.submit();setTimeout(function(){if(s.submitting&&location.pathname.indexOf("/onepage")!==-1){On("8s failsafe: still on /onepage, removing overlay"),s.submitting=!1,C.classList.remove("is-loading");var Lt=document.getElementById("mm-op-overlay");Lt&&Lt.remove(),v.classList.remove("mm-shadow-mode"),a&&(a.style.display="none")}},8e3),setTimeout(function(){v.classList.remove("mm-shadow-mode"),a&&(a.style.display="none")},600)}function Xt(){s.submitting=!1,C.classList.remove("is-loading"),C.removeAttribute("aria-busy");var zn=C.querySelector(".mm-op-finalizar-label");zn&&(zn.textContent="Finalizar compra");var it=document.getElementById("mm-op-overlay");it&&it.remove()}function re(){var zn=Date.now(),it=1e4;(function mt(){var wt=document.getElementById("pag-cartao-token-mp"),kt=wt?(wt.value||"").trim():"",Lt=kt&&kt!=="loading..."&&kt.length>10;if(Lt){On("fallback: token ready"),Rt();return}if(Date.now()-zn>=it){On("fallback: timeout",{lastVal:kt}),Rt();return}setTimeout(mt,200)})()}function qe(){if(On("generateMpTokenAndSubmit() start"),typeof Mercadopago>"u"){On("Mercadopago global missing, falling back to wait strategy"),re();return}var zn=document.getElementById("pag-cartao-token-mp"),it=zn?(zn.value||"").trim():"";if(it&&it!=="loading..."&&it.length>10){On("token already present, submitting",{len:it.length}),Rt();return}var mt=(document.getElementById("mm-pay-card-num")?.value||"").replace(/\D/g,""),wt=(document.getElementById("mm-pay-card-exp")?.value||"").replace(/\D/g,""),kt=(document.getElementById("mm-pay-card-cvv")?.value||"").replace(/\D/g,""),Lt=(document.getElementById("mm-pay-card-name")?.value||"").trim(),me=(n&&n.cpf||document.getElementById("mm-op-cpf")?.value||"").replace(/\D/g,"");if(!mt||!wt||!kt||!Lt||!me){On("missing card fields",{num:mt.length,exp:wt.length,cvv:kt.length,name:!!Lt,doc:me.length}),alert("Preencha todos os dados do cartão antes de finalizar."),Xt();return}var pe=wt.slice(0,2),de=wt.length===4?"20"+wt.slice(2):wt.slice(2);On("calling Mercadopago.createToken",{numLen:mt.length,month:pe,year:de});try{Mercadopago.createToken({cardNumber:mt,securityCode:kt,cardExpirationMonth:pe,cardExpirationYear:de,cardholderName:Lt,docType:"CPF",docNumber:me},function(Jt,Mt){if(On("createToken callback",{status:Jt,hasId:!!(Mt&&Mt.id),err:Mt&&Mt.error}),Jt===200||Jt===201){if(zn){var Ae=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;Ae.call(zn,Mt.id),zn.dispatchEvent(new Event("input",{bubbles:!0})),zn.dispatchEvent(new Event("change",{bubbles:!0}))}Rt()}else{var ce="Não foi possível validar os dados do cartão.";Mt&&Mt.cause&&Mt.cause[0]&&Mt.cause[0].description&&(ce=Mt.cause[0].description),alert(ce),Xt()}})}catch(Jt){On("createToken exception",Jt.message),re()}}w==="cartao"?qe():setTimeout(Rt,500)}}if(L){let n=function(a){if(a=a||0,a>30){t();return}var i=_?v.querySelector("#box-lista-enderecos, #container-step-2"):v.querySelector("#cep, .box-area-dados, #nome-completo_2");i||a>8?t():setTimeout(function(){n(a+1)},250)},t=function(){var a=wn(),i=rn.get("mm_user_email")||"";if(rn.remove("mm_checkout_mode"),typeof window._mmDraftDebug>"u"&&(window._mmDraftDebug=!1),_&&d(a),Ln(a,i),$t(document.getElementById("mm-layout")),_){mn(),vn(),qt();return}Yn();var s=Jn(),h=rn.get(D),q=h&&String(h).replace(/\D/g,"").length===8;if(q?Xn("loading"):a&&typeof a.shipping=="number"&&a.shipping>0&&Xn({value:a.shipping,name:a.shippingName||"",deadline:a.shippingDeadline||"",city:a.shippingCity||"",options:a.shippingOptions||[]}),!_)try{var I=Array.from(v.querySelectorAll("a, button")).find(function(tn){var Q=(tn.textContent||"").toLowerCase();return Q.indexOf("sem cadastro")!==-1&&tn.offsetParent!==null});I&&!I.classList.contains("active")&&I.click()}catch{}qt();var Y=rn.get(D);if(Y&&Y.length===8){var H=document.getElementById("mm-op-cep");H&&(H.value=Bn(Y),setTimeout(function(){Zt(Y)},400))}setTimeout(function(){if(!("ontouchstart"in window))for(var tn=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep"],Q=0;Q<tn.length;Q++){var en=document.getElementById(tn[Q]);if(en&&!en.value){en.focus();break}}},350)};n()}if(P){document.documentElement.classList.remove("mm-cart-loading");var se=v.querySelector('input[placeholder*="numero do cart" i]');se&&(se.inputMode="numeric");var oe=v.querySelector('input[placeholder*="000" i]');oe&&(!oe.maxLength||oe.maxLength<=4)&&(oe.inputMode="numeric")}if(j){let n=function(){var i=v.innerText||"",s=i.match(/\b(\d{10,})\b/),h=i.match(/R\$\s?[\d.]+,\d{2}/),q=v.querySelector(".campo-numero-pix");return{canvas:v.querySelector("canvas"),pixCode:q&&q.value||"",order:s?s[1]:"",total:h?h[0].replace(/\s+/g," "):""}},t=function(i){var s=typeof renderGlobalFooter=="function"?renderGlobalFooter():"",h=!!i.canvas,q=h?'<div class="mm-done-pix-card"><div class="mm-done-pix-head">'+we+'<span>Pague com PIX</span><span class="mm-done-pix-status">Aguardando pagamento</span></div><div class="mm-done-qr" id="mm-done-qr-slot"></div><div class="mm-done-timer" id="mm-done-timer">'+Ee+'<span class="mm-done-timer-text">Este código expira em <strong id="mm-done-timer-val">05:00</strong></span></div>'+(i.pixCode?'<button type="button" class="mm-done-copy" data-mm-act="done-copy-pix">'+ke+"<span>Copiar código PIX (copia e cola)</span></button>":"")+'<p class="mm-done-pix-note">'+V.lock+"<span>Aprovação em até 1 minuto após o pagamento.</span></p></div>":'<div class="mm-done-pix-card mm-done-nopix"><p>Seu pedido foi registrado. Acompanhe o pagamento e o status em “Meus pedidos”.</p></div>';return jn("payment")+'<main class="mm-op-main mm-done-main"><div class="mm-done-hero"><span class="mm-done-hero-check">'+Se+'</span><h1 class="mm-done-h1">Pedido realizado com sucesso!</h1><p class="mm-done-hero-sub">'+(i.order?"Pedido <strong>Nº "+B(i.order)+"</strong> · ":"")+(h?"falta só concluir o pagamento no PIX abaixo.":"obrigado pela sua compra!")+'</p></div><div class="mm-done-grid"><section class="mm-done-left">'+q+'</section><aside class="mm-done-right">'+(h?'<div class="mm-done-card"><h3 class="mm-op-card-title">Como pagar</h3><ol class="mm-done-steps"><li>Abra o app do seu banco e entre na área <strong>PIX</strong>.</li><li>Escaneie o <strong>QR Code</strong> ou use <strong>Pix Copia e Cola</strong>.</li><li>Confirme os dados e finalize o pagamento.</li></ol></div>':"")+(i.total?'<div class="mm-done-total"><span class="mm-done-total-label">Total</span><span class="mm-done-total-value">'+B(i.total)+"</span>"+(h?'<span class="mm-done-total-sub">no PIX</span>':"")+"</div>":"")+'<a class="mm-cta mm-done-cta" href="/cliente/pedidos">Acompanhar meu pedido</a><a class="mm-done-help" href="'+f+'" target="_blank" rel="noopener">'+Ce+'<span>Dificuldade no pagamento? <strong>Fale com a gente no WhatsApp</strong></span></a><a class="mm-done-back" href="/">Voltar para a loja</a><div class="mm-trust mm-done-trust"><span class="mm-trust-item">'+V.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+V.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+V.shield+"<span>Garantia 12 meses</span></span></div></aside></div></main>"+s},a=function(){if(!document.getElementById("mm-layout")){var i=n(),s=document.createElement("div");if(s.id="mm-layout",s.className="mm-op-layout mm-done-layout",s.innerHTML=t(i),v.insertBefore(s,v.firstChild),document.body.classList.add("mm-checkout-rebuild"),v.classList.add("mm-shadow-mode"),document.documentElement.classList.remove("mm-cart-loading"),i.canvas){var h=s.querySelector("#mm-done-qr-slot");if(h)try{var q=document.createElement("img");q.src=i.canvas.toDataURL("image/png"),q.alt="QR Code PIX",q.width=220,q.height=220,h.appendChild(q)}catch{h.appendChild(i.canvas)}}var I=s.querySelector('[data-mm-act="done-copy-pix"]');I&&I.addEventListener("click",function(){var en=i.pixCode||"",nn=I.querySelector("span"),sn=nn?nn.textContent:"";function K(){I.classList.add("is-copied"),nn&&(nn.textContent="Código copiado!"),setTimeout(function(){I.classList.remove("is-copied"),nn&&(nn.textContent=sn)},2200)}function gn(){try{var hn=document.createElement("textarea");hn.value=en,hn.style.cssText="position:fixed;top:0;left:0;opacity:0;",document.body.appendChild(hn),hn.focus(),hn.select();var pn=document.execCommand("copy");return document.body.removeChild(hn),pn}catch{return!1}}function cn(){if(gn()){K();return}var hn=v.querySelector(".box-btn button, .box-btn a");hn&&(hn.click(),K())}en&&navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(en).then(K).catch(cn):cn()});var Y=s.querySelector("#mm-done-timer");if(Y){let en=function(){var nn=Math.max(0,Math.round((tn-Date.now())/1e3));if(nn<=0){Q&&clearInterval(Q),Y.classList.add("is-expired"),Y.innerHTML='<span class="mm-done-timer-text">Tempo esgotado — gere um novo código.</span><button type="button" class="mm-done-timer-renew" data-mm-act="done-renew">Gerar novo código</button>';var sn=Y.querySelector('[data-mm-act="done-renew"]');sn&&sn.addEventListener("click",function(){try{localStorage.removeItem(H)}catch{}location.reload()});return}nn<=60&&Y.classList.add("is-urgent");var K=Math.floor(nn/60),gn=nn%60,cn=Y.querySelector("#mm-done-timer-val");cn&&(cn.textContent=(K<10?"0":"")+K+":"+(gn<10?"0":"")+gn)};var H="mm_pix_deadline_"+(i.order||"x"),tn=parseInt(localStorage.getItem(H),10);if(!tn||isNaN(tn)){tn=Date.now()+ze;try{localStorage.setItem(H,String(tn))}catch{}}var Q=null;en(),Q=setInterval(en,1e3)}}};document.documentElement.classList.remove("mm-cart-loading");var we='<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm-2 16h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zm-6 4h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm4-4h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm-4 0h2v2h-2v-2z"/></svg>',ke='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z"/></svg>',Se='<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',Ce='<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.9-2.1-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3zM12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm0 18.3c-1.5 0-3-.4-4.3-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.3 8.3 0 1 1 12 20.3z"/></svg>',Ee='<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.2 3.1.8-1.3-4.5-2.7V7z"/></svg>',ze=300*1e3,le=0;(function i(){var s=v.querySelector("canvas"),h=s&&s.width>100&&s.width===s.height;if(h||le>16){a();return}le++,setTimeout(i,250)})()}setTimeout(function(){document.documentElement.classList.contains("mm-cart-loading")&&(console.warn("[mm-cart] failsafe: removing mm-cart-loading after 2s timeout"),document.documentElement.classList.remove("mm-cart-loading"))},2e3)})(),(function(){var D=window.location.pathname,R=/^\/login\/?$/.test(D),N=D.indexOf("/cliente/pedidos")===0;if(!R&&!N)return;var g="5511915299488",r='<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';function l(z){return"https://api.whatsapp.com/send?phone="+g+"&text="+encodeURIComponent(z)}function u(z){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",z):z()}function f(z){var _=(z||"").replace(/\D/g,"").slice(0,14);if(_.length<=11)return _.length>9?_.slice(0,3)+"."+_.slice(3,6)+"."+_.slice(6,9)+"-"+_.slice(9):_.length>6?_.slice(0,3)+"."+_.slice(3,6)+"."+_.slice(6):_.length>3?_.slice(0,3)+"."+_.slice(3):_;var X=_.slice(0,2)+"."+_.slice(2,5)+"."+_.slice(5,8)+"/"+_.slice(8,12);return _.length>12&&(X+="-"+_.slice(12)),X}function b(z){return typeof z!="string"||!/cpfcnpj=/i.test(z)?z:z.replace(/(^|&)(cpfcnpj=)([^&]*)/i,function(_,X,v,G){return X+v+encodeURIComponent(f(decodeURIComponent(G)))})}function F(){if(!window.__mmConsultaFix){window.__mmConsultaFix=!0;var z=/operation=consultaPedido/i;try{var _=window.fetch;typeof _=="function"&&(window.fetch=function(G,ln){try{var U=typeof G=="string"?G:G&&G.url||"";z.test(U)&&ln&&typeof ln.body=="string"&&(ln.body=b(ln.body))}catch{}return _.apply(this,arguments)})}catch{}try{var X=XMLHttpRequest.prototype.open,v=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(G,ln){return this.__mmU=ln||"",X.apply(this,arguments)},XMLHttpRequest.prototype.send=function(G){try{z.test(this.__mmU||"")&&typeof G=="string"&&(arguments[0]=b(G))}catch{}return v.apply(this,arguments)}}catch{}}}R&&F();function E(){function z(X){if(!X||X.getAttribute("data-mm-mask"))return;X.setAttribute("data-mm-mask","1"),X.setAttribute("maxlength","18"),X.setAttribute("inputmode","numeric");function v(){var U=f((X.value||"").replace(/\D/g,""));X.value!==U&&(X.value=U)}X.addEventListener("input",v),X.addEventListener("change",v),X.addEventListener("blur",v);var G=X.form;if(G&&!G.getAttribute("data-mm-mask")){G.setAttribute("data-mm-mask","1"),G.addEventListener("submit",v,!0);var ln=G.querySelector('button.button-login, button[type="submit"], input[type="submit"]');ln&&ln.addEventListener("click",v,!0)}}var _=0;(function X(){var v=document.getElementById("form-consulta-pedido"),G=document.getElementById("cpfcnpj");if(!v||!G)return++_<20?void setTimeout(X,250):void 0;z(G);var ln=v.querySelector(".title-area h2");if(ln&&!v.querySelector(".mm-cp-eyebrow")){var U=document.createElement("span");U.className="mm-cp-eyebrow",U.textContent="Acompanhe sua compra",ln.insertAdjacentElement("beforebegin",U)}function dn(bn,Fn){if(bn){var Gn=bn.closest(".line")||bn.parentElement;if(!Gn.querySelector(".mm-cp-label")){var nt=document.createElement("label");nt.className="mm-cp-label",nt.textContent=Fn,bn.id&&nt.setAttribute("for",bn.id),Gn.insertAdjacentElement("afterbegin",nt)}}}dn(G,"CPF ou CNPJ"),dn(document.getElementById("numero-pedido"),"Nº do pedido"),G.placeholder="000.000.000-00";var B=document.getElementById("numero-pedido");B&&(B.placeholder="Ex.: 0012606865731");var V=v.querySelector("button.button-login");if(V)for(var rn=0;rn<V.childNodes.length;rn++){var Rn=V.childNodes[rn];Rn.nodeType===3&&/consultar/i.test(Rn.textContent)&&(Rn.textContent=" Consultar meu pedido ")}var wn=v.querySelector(".cancel-consulta span");wn&&(wn.textContent="Voltar para login");var Nn=document.getElementById("numero-pedido");if(Nn&&!v.querySelector(".mm-cp-hint")){var qn=document.createElement("span");qn.className="mm-cp-hint",qn.textContent="O número do pedido está no e‑mail de confirmação da compra.";var at=Nn.closest(".line")||Nn.parentElement;at.appendChild(qn)}var Jn=v.querySelector("form");if(Jn&&!v.querySelector(".mm-cp-wa")){var Wn=document.createElement("div");Wn.className="mm-cp-wa",Wn.innerHTML='Não encontra os dados? <a href="'+l("Olá! Preciso de ajuda para consultar o meu pedido.")+'" target="_blank" rel="noopener">'+r+" Fale com a gente</a>",Jn.insertAdjacentElement("afterend",Wn)}if(document.documentElement.classList.add("mm-consulta-on"),/(?:^|;\s*)zordEm=[^;\s]/.test(document.cookie)&&!v.querySelector(".mm-cp-logged")){var jn=document.createElement("div");jn.className="mm-cp-logged",jn.innerHTML='<strong>Você já está logado.</strong><span>Esta consulta é para quem comprou sem cadastro. Para acompanhar as suas compras:</span><a href="/cliente/pedidos" class="mm-cp-logged-cta">Ver todos os meus pedidos</a>',v.insertAdjacentElement("afterbegin",jn)}var An=document.querySelector(".login-holder"),Mn=document.querySelector(".page.page-login");if(An&&Mn){var st=An.querySelector(".login-header");if(st&&!st.querySelector(".mm-lg-eyebrow")){var lt=document.createElement("span");lt.className="mm-lg-eyebrow",lt.textContent="Área do cliente";var Qn=st.querySelector("h2");Qn&&Qn.insertAdjacentElement("beforebegin",lt)}var ut=An.querySelector(".social-login-area");if(ut&&!An.querySelector(".mm-lg-ou")){var Kn=document.createElement("div");Kn.className="mm-lg-ou",Kn.textContent="ou",ut.insertAdjacentElement("beforebegin",Kn)}setTimeout(function(){try{var bn=An.querySelector(".social-login-area .render-button");bn&&window.google&&google.accounts&&google.accounts.id&&(bn.innerHTML="",google.accounts.id.renderButton(bn,{theme:"outline",size:"large",shape:"pill",width:320,text:"continue_with",logo_alignment:"center"}))}catch{}setTimeout(function(){var Fn=An.querySelector(".social-login-area"),Gn=An.querySelector(".mm-lg-ou"),nt=Fn&&Fn.offsetParent!==null&&Fn.querySelector("iframe");nt||(Gn&&(Gn.style.display="none"),Fn&&(Fn.style.display="none"))},2e3)},1200);var Bn=[].filter.call(An.querySelectorAll("span, div, button"),function(bn){return/pessoa jur/i.test(bn.textContent)&&bn.textContent.length<60&&bn.children.length===0})[0];Bn&&Bn.classList.add("mm-lg-link");var Hn=document.querySelector(".footer-login");Hn&&[].forEach.call(Hn.querySelectorAll("p"),function(bn){/nunca postaremos/i.test(bn.textContent)&&bn.classList.add("mm-lg-nopost")}),document.documentElement.classList.add("mm-login-on")}})(),/#consultar?-?pedido/i.test(window.location.hash)&&setTimeout(function(){var X=document.getElementById("form-consulta-pedido"),v=document.getElementById("cpfcnpj");X&&X.scrollIntoView({behavior:"smooth",block:"center"}),v&&setTimeout(function(){v.focus()},500)},600)}var L={"recebimento-pedido":"Pedido recebido","confirmacao-pagamento":"Pagamento confirmado","emissao-nota":"Nota fiscal emitida",transporte:"Em transporte",entrega:"Entregue"};function P(){var z=document.querySelector(".detalhes-pedido");if(!(!z||z.getAttribute("data-mm-ped"))){z.setAttribute("data-mm-ped","1");var _=z.querySelector(".numero-pedido"),X=_?(_.textContent.match(/[\d]+/)||[""])[0]:"",v=z.querySelector(".resumo-data strong"),G=v?v.textContent.trim().split(" ")[0]:"",ln=z.querySelectorAll(".item-historico.status-waiting");ln.length&&ln[0].classList.add("mm-atual");for(var U='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"',dn={"recebimento-pedido":"<svg "+U+'><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',"confirmacao-pagamento":"<svg "+U+'><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>',"emissao-nota":"<svg "+U+'><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M15 2v5h5"/><path d="M8 13h8"/><path d="M8 17h5"/></svg>',transporte:"<svg "+U+'><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',entrega:"<svg "+U+'><path d="M3 10.18v8.82a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8.82"/><path d="M2.5 10.5 12 3l9.5 7.5"/><path d="m9 15 2 2 4-4"/></svg>'},B=z.querySelectorAll(".item-historico"),V=0;V<B.length;V++){var rn=B[V];if(!rn.querySelector(".mm-step-dot")){var Rn="";for(var wn in dn)if(rn.classList.contains(wn)){Rn=dn[wn];break}var Nn=document.createElement("span");Nn.className="mm-step-dot",Nn.innerHTML=Rn,rn.insertAdjacentElement("afterbegin",Nn);var qn=document.createElement("span");qn.className="mm-step-line",rn.appendChild(qn)}}var at=z.querySelectorAll(".item-historico.status-success"),Jn="Pedido recebido";if(at.length){var Wn=at[at.length-1];for(var jn in L)if(Wn.classList.contains(jn)){Jn=L[jn];break}}if(!document.getElementById("mm-ped-hero")&&X){var An=document.createElement("div");An.id="mm-ped-hero",An.innerHTML='<div class="mm-ped-hero-info"><span class="mm-ped-eyebrow">Acompanhe sua compra</span><h1 class="mm-ped-num">Pedido #'+X+' <button type="button" class="mm-ped-copy" aria-label="Copiar número do pedido">copiar</button></h1><div class="mm-ped-meta">'+(G?"<span>Feito em "+G+"</span>":"")+'<span class="mm-ped-badge">'+Jn+'</span></div></div><a class="mm-ped-hero-wa" target="_blank" rel="noopener" href="'+l("Olá! Gostaria de saber sobre o meu pedido #"+X+".")+'">'+r+" Falar sobre este pedido</a>",z.insertAdjacentElement("afterbegin",An);var Mn=z.querySelector(".resumo-pagamento .resumo-total > span:first-child");Mn&&/resumo do pedido/i.test(Mn.textContent)&&(Mn.textContent="Total");var st=z.querySelector(".title-itens-pedido h3");st&&/itens do pedido/i.test(st.textContent)&&(st.textContent=" Itens do pedido ");for(var lt=document.querySelectorAll(".main-content h1, .main-content h2, .main-content .title-user-area, .main-content > div"),Qn=0;Qn<lt.length;Qn++){var ut=lt[Qn];if(!ut.contains(z)&&/meus pedidos/i.test(ut.textContent||"")&&(ut.textContent||"").trim().length<40){ut.classList.add("mm-ped-native-title");break}}var Kn=An.querySelector(".mm-ped-copy");Kn.addEventListener("click",function(){var pt=this;try{navigator.clipboard.writeText(X).then(function(){pt.textContent="copiado ✓",pt.classList.add("mm-copiado"),setTimeout(function(){pt.textContent="copiar",pt.classList.remove("mm-copiado")},2e3)})}catch{}})}var Bn=z.querySelector(".rastreio-area"),Hn=Bn?Bn.querySelector(".previsao-entrega .previsao"):null,bn=Hn?Hn.textContent.trim():"";if(bn){var Fn=z.querySelector(".item-historico.entrega");if(Fn&&!Fn.querySelector(".mm-step-prev")){var Gn=document.createElement("span");Gn.className="mm-step-prev",Gn.textContent="Previsão: "+bn,Fn.appendChild(Gn)}}var nt=z.querySelector(".status-pagamento-pedido");if(nt&&!Bn&&!document.getElementById("mm-ped-entrega")){var tt=document.createElement("div");tt.id="mm-ped-entrega";for(var vt=null,xn=z.querySelectorAll("a[href]"),ft=0;ft<xn.length;ft++){var Qn=(xn[ft].textContent||"")+" "+xn[ft].href;if(/rastre/i.test(Qn)&&!/politica/i.test(xn[ft].href)){vt=xn[ft];break}}var St='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>';vt?(tt.classList.add("mm-tem-rastreio"),tt.innerHTML=St+'<span>Seu pedido está a caminho — <a href="'+vt.href+'" target="_blank" rel="noopener">acompanhe o rastreio aqui</a>.</span>'):tt.innerHTML=St+'<span>O código de rastreio aparece aqui assim que o pedido for despachado. Enquanto isso, acompanhe as etapas acima ou veja nossa <a href="/politica-de-entrega" target="_blank" rel="noopener">política de entrega</a>.</span>',nt.insertAdjacentElement("afterend",tt)}var Pt=document.querySelector(".btn-comprar-novamente"),Pn=document.querySelector(".btn-ajuda-pedido"),En=Pt||Pn?(Pt||Pn).parentElement:null;En&&!En.classList.contains("mm-ped-acoes")&&(En.classList.add("mm-ped-acoes"),En.parentElement!==z&&z.appendChild(En));var ot=document.querySelector("main.central-cliente");ot&&ot.children.length===1&&ot.classList.add("mm-ped-center"),document.documentElement.classList.add("mm-ped-on")}}function j(){if(!(!/rastrear/i.test(location.hash||"")&&!/rastrear/i.test(location.search||""))){var z=0;(function _(){var X=document.getElementById("form-consulta-pedido");if(!X||X.offsetParent===null)return++z<30?void setTimeout(_,200):void 0;try{X.scrollIntoView({behavior:"smooth",block:"center"})}catch{try{X.scrollIntoView()}catch{}}X.classList.add("mm-cp-flash"),setTimeout(function(){X.classList.remove("mm-cp-flash")},2400);var v=document.getElementById("numero-pedido");v&&setTimeout(function(){try{v.focus({preventScroll:!0})}catch{try{v.focus()}catch{}}},700)})()}}u(function(){try{R&&(E(),j()),N&&P()}catch(z){window.console&&console.warn&&console.warn("[mm-pedidos]",z)}})})()})();
