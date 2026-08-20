(function(){"use strict";(function(){if(!document.getElementById("mm-global-css")){var F=document.createElement("style");F.id="mm-global-css",F.textContent=`/* =============================================
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
`,document.head.appendChild(F)}})(),(function(){if(!document.getElementById("mm-produto-css")){var F=document.createElement("style");F.id="mm-produto-css",F.textContent=`/* =============================================
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
`,document.head.appendChild(F)}})(),(function(){if(!document.getElementById("mm-variacoes-css")){var F=document.createElement("style");F.id="mm-variacoes-css",F.textContent=`/* ============================================
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
}`,document.head.appendChild(F)}})(),(function(){if(!document.getElementById("mm-cart-sheet-css")){var F=document.createElement("style");F.id="mm-cart-sheet-css",F.textContent=`/* =============================================
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
`,document.head.appendChild(F)}})(),(function(){if(!document.getElementById("mm-checkout-cro-css")){var F=document.createElement("style");F.id="mm-checkout-cro-css",F.textContent=`/* =============================================
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

/* Aviso do handoff pro checkout nativo. Fica FORA do #mm-layout (é anexado ao
   body, sobre a tela do Magazord) — por isso sem o prefixo de escopo.
   Barra fixa: o cliente precisa continuar vendo a instrução enquanto rola até
   a verificação de segurança. */
.mm-handoff-note {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2147483000;
  box-sizing: border-box;
  padding: calc(12px + env(safe-area-inset-top, 0px)) 16px 12px;
  background: #1F3D1F;
  color: #FFF;
  font-family: 'Poppins', system-ui, sans-serif;
  font-size: 13px;
  line-height: 1.45;
  letter-spacing: -0.003em;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.22);
  text-align: center;
}

.mm-handoff-note strong {
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 2px;
}

.mm-handoff-note span {
  display: block;
  opacity: 0.92;
}

/* Banner de erro acionável no topo do form guest. Substitui o "shake" mudo
   (não dizia o que corrigir) e a nota amarela "tente de novo" (mandava
   repetir um envio que nunca passaria). Usado tanto pela validação de
   pré-voo quanto pela mensagem real devolvida pelo Magazord. */
#mm-layout .mm-op-alert {
  display: block;
  margin: 0 0 16px;
  padding: 14px 16px;
  border: 1px solid #F0B4B4;
  border-left: 4px solid #DC2626;
  background: #FEF2F2;
  border-radius: 12px;
  font-family: 'Poppins', system-ui, sans-serif;
  font-size: 13.5px;
  line-height: 1.5;
  color: #8A1C1C;
  font-weight: 500;
  letter-spacing: -0.003em;
}

#mm-layout .mm-op-alert-msg {
  display: block;
}

#mm-layout .mm-op-alert-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

#mm-layout .mm-op-alert-fix,
#mm-layout .mm-op-alert-keep {
  -webkit-appearance: none;
  appearance: none;
  font-family: 'Poppins', system-ui, sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.003em;
  /* alvo de toque confortável no mobile — é aqui que a venda se salva */
  min-height: 44px;
  padding: 10px 18px;
  border-radius: 999px;
  cursor: pointer;
  transition: opacity 0.15s ease, background 0.15s ease;
}

#mm-layout .mm-op-alert-fix {
  border: 1px solid #1A1A1A;
  background: #1A1A1A;
  color: #FFF;
}

#mm-layout .mm-op-alert-keep {
  border: 1px solid #C9A9A9;
  background: transparent;
  color: #8A1C1C;
}

#mm-layout .mm-op-alert-fix:active,
#mm-layout .mm-op-alert-keep:active {
  opacity: 0.72;
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
`,document.head.appendChild(F)}})(),(function(){if(!document.getElementById("mm-pedidos-css")){var F=document.createElement("style");F.id="mm-pedidos-css",F.textContent=`/* =============================================
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
`,document.head.appendChild(F)}})(),(function(){if(!document.getElementById("mm-ticker-css")){var F=document.createElement("style");F.id="mm-ticker-css",F.textContent=`.ticker-bar {
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
  }`,document.head.appendChild(F)}})(),(function(){if(!document.getElementById("mm-header-css")){var F=document.createElement("style");F.id="mm-header-css",F.textContent=`/* =============================================
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
`,document.head.appendChild(F)}})(),(function(){if(!document.getElementById("mm-search-css")){var F=document.createElement("style");F.id="mm-search-css",F.textContent=`/* =============================================
   TEXT SEARCH — native visual adapter only
   ============================================= */

.mm-search-sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

body.mm-search-native-active #lista-produtos-area > :not(#mm-search-page-results) {
  display: none !important;
}

body.mm-search-native-active .pesquisa-produtos > .pesquisa-sem-registros,
body.mm-search-native-active .pesquisa-produtos > [id^="vitrine-react-app-"],
body.mm-search-native-active .pesquisa-produtos > .rightPesquisa {
  display: none !important;
}

#mm-search-page-results {
  width: 100%;
  clear: both;
}

#mm-search-page-results[aria-busy="true"] {
  opacity: .66;
  pointer-events: none;
}

body.mm-search-initial-loading .container.box-pesquisa .pesquisa-produtos {
  box-sizing: border-box;
  flex: 1 1 100% !important;
  width: 100% !important;
  max-width: 100% !important;
}

body.mm-search-initial-loading #mm-search-page-results[aria-busy="true"] {
  opacity: 1;
}

.mm-search-page-loading {
  box-sizing: border-box;
  width: 100%;
  min-height: 640px;
  padding: 0;
}

.mm-search-shimmer-layout {
  display: grid;
  grid-template-columns: 23% 74%;
  align-items: start;
  column-gap: 3%;
  width: 100%;
}

.mm-search-shimmer-sidebar,
.mm-search-shimmer-main {
  min-width: 0;
}

.mm-search-shimmer-filter-group {
  margin-bottom: 15px;
}

.mm-search-shimmer-filter-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 23px;
  margin-bottom: 15px;
}

.mm-search-shimmer-filter-title {
  width: 112px;
  height: 13px;
  border-radius: 999px;
}

.mm-search-shimmer-filter-arrow {
  width: 10px;
  height: 10px;
  margin-right: 4px;
  border-radius: 2px;
}

.mm-search-shimmer-filter-row {
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  margin-bottom: 7px;
}

.mm-search-shimmer-filter-check {
  flex: 0 0 24px;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border-radius: 3px;
}

.mm-search-shimmer-filter-label {
  width: 128px;
  height: 12px;
  border-radius: 999px;
}

.mm-search-shimmer-filter-label.is-short {
  width: 94px;
}

.mm-search-shimmer-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 35px;
  margin-bottom: 32px;
}

.mm-search-shimmer-count {
  width: 275px;
  max-width: 45%;
  height: 14px;
  border-radius: 999px;
}

.mm-search-shimmer-toolbar-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mm-search-shimmer-mobile-filter {
  display: none;
}

.mm-search-shimmer-sort {
  width: 190px;
  height: 35px;
  border-radius: 4px;
}

.mm-search-shimmer-notice {
  display: block;
  width: 100%;
  height: 46px;
  margin-bottom: 12px;
  border-radius: 6px;
}

.mm-search-shimmer-grid {
  display: grid;
  grid-template-columns: repeat(3, 31.81%);
  gap: 28px 2.27%;
  width: 100%;
}

.mm-search-shimmer-card,
.mm-search-shimmer-content {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: center;
}

.mm-search-shimmer-card {
  gap: 20px;
}

.mm-search-shimmer-content {
  width: 100%;
  gap: 8px;
}

.mm-search-shimmer-surface {
  display: block;
  overflow: hidden;
  background: linear-gradient(100deg, #edf0ed 25%, #f8faf8 48%, #edf0ed 72%);
  background-size: 220% 100%;
  animation: mm-search-shimmer 1.35s ease-in-out infinite;
}

.mm-search-shimmer-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
}

.mm-search-shimmer-line {
  height: 13px;
  border-radius: 999px;
}

.mm-search-shimmer-line-title {
  width: 82%;
}

.mm-search-shimmer-line-subtitle {
  width: 64%;
}

.mm-search-shimmer-line-rating {
  width: 42%;
  height: 18px;
  margin-top: 7px;
}

.mm-search-shimmer-line-old-price {
  width: 25%;
  height: 10px;
  margin-top: 1px;
}

.mm-search-shimmer-line-price {
  width: 34%;
  height: 20px;
}

.mm-search-shimmer-button {
  width: 90%;
  height: 41px;
  margin-top: 8px;
  border-radius: 8px;
}

@keyframes mm-search-shimmer {
  from { background-position: 115% 0; }
  to { background-position: -115% 0; }
}

.mm-search-native-notice,
.mm-search-commercial-note,
.mm-search-fixture-note,
.mm-search-page-error {
  box-sizing: border-box;
  width: 100%;
  margin: 12px 0;
  padding: 12px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background: #f8faf8;
  color: #333;
  font-size: 14px;
  line-height: 1.45;
}

.mm-search-native-notice a,
.mm-search-page-error button {
  margin-left: 6px;
}

.mm-search-fixture-note {
  border-color: #f4d28b;
  background: #fff8e8;
}

.mm-search-page-error {
  border-color: #efb8b8;
  background: #fff7f7;
}

.mm-search-native-filters .limpa-filtros {
  appearance: none;
  width: 100%;
  border: 0;
  background: transparent;
  cursor: pointer;
  font: inherit;
}

.mm-search-native-filters .mm-search-facet-count {
  color: inherit;
  font-size: .85em;
  opacity: .68;
}

.mm-search-product-image-missing {
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #f4f4f4;
}

.mm-search-empty-state {
  width: 100%;
  padding: 36px 16px;
  text-align: center;
}

.mm-search-empty-state h2 {
  margin: 0 0 8px;
}

.mm-search-empty-state .button {
  margin-top: 12px;
}

.mm-search-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  padding: 28px 0 12px;
  clear: both;
}

.mm-search-pagination .button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  text-decoration: none;
}

.mm-search-pagination .is-disabled {
  cursor: not-allowed;
  opacity: .45;
}

.mm-search-mobile-filter-toggle {
  display: none;
}

#mm-header .mm-h-search-correction {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 12px 0;
  padding: 10px 12px;
  border-radius: 8px;
  background: var(--c-topbar-bg, #f6f6f3);
  color: var(--c-text, #333);
  font-size: 13px;
}

#mm-header .mm-h-search-correction a {
  flex: 0 0 auto;
  color: var(--c-brand, #4b664a);
  text-decoration: underline;
}

#mm-header .mm-h-search-empty,
#mm-header .mm-h-search-error,
#mm-header .mm-search-commercial-note,
#mm-header .mm-search-fixture-note {
  margin: 0;
  padding: 10px 0;
  color: var(--c-text-muted, #666);
  font-size: 13px;
  line-height: 1.45;
}

#mm-header .mm-search-commercial-note,
#mm-header .mm-search-fixture-note {
  width: auto;
  border: 0;
  border-radius: 0;
  background: transparent;
}

@media (max-width: 767px) {
  #mm-header .mm-h-search-products-grid {
    grid-template-columns: 1fr;
  }

  #mm-header .mm-h-search-correction {
    align-items: flex-start;
    flex-direction: column;
  }

  .mm-search-mobile-filter-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 0 12px;
  }

  .mm-search-page-loading {
    min-height: 520px;
  }

  .mm-search-shimmer-layout {
    display: block;
  }

  .mm-search-shimmer-sidebar {
    display: none;
  }

  .mm-search-shimmer-toolbar {
    gap: 12px;
    margin-bottom: 12px;
  }

  .mm-search-shimmer-count {
    width: 42%;
  }

  .mm-search-shimmer-toolbar-controls {
    flex: 1 1 auto;
    justify-content: flex-end;
    gap: 8px;
  }

  .mm-search-shimmer-mobile-filter {
    display: block;
    width: 88px;
    height: 35px;
    border-radius: 4px;
  }

  .mm-search-shimmer-sort {
    width: 104px;
  }

  .mm-search-shimmer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px 12px;
  }

  .mm-search-shimmer-card:nth-child(n + 5) {
    display: none;
  }

  .mm-search-shimmer-card {
    gap: 12px;
  }

  .mm-search-shimmer-button {
    width: 90%;
    height: 44px;
    margin-top: 8px;
  }

  .mm-search-native-filters:not(.is-open) {
    display: none !important;
  }

  .mm-search-native-filters.is-open {
    display: block !important;
    width: 100%;
  }

  .mm-search-pagination {
    gap: 5px;
  }

  .mm-search-pagination .button {
    min-width: 36px;
    min-height: 36px;
    padding-left: 8px;
    padding-right: 8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mm-search-shimmer-surface {
    animation: none;
    background: #edf0ed;
  }
}
`,document.head.appendChild(F)}})(),(function(){if(!document.getElementById("tickerBar")){var F=document.createElement("div");F.innerHTML=`<div class="ticker-bar" id="tickerBar">
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
</div>`;var G=F.firstElementChild;document.body.insertBefore(G,document.body.firstChild)}})(),(function(){var F=location.pathname;if(/^\/checkout\//i.test(F))return;try{if(localStorage.getItem("mm_no_tracking")==="1")return}catch{}if(window._uxa||document.querySelector('script[src*="contentsquare.net"]'))return;function G(){if(!(window._uxa||document.querySelector('script[src*="contentsquare.net"]'))){var W=document.createElement("script");W.src="https://t.contentsquare.net/uxa/7126f355c4bb8.js",W.async=!0,document.head.appendChild(W)}}function _(){"requestIdleCallback"in window?requestIdleCallback(G,{timeout:5e3}):setTimeout(G,2500)}document.readyState==="complete"?_():window.addEventListener("load",_,{once:!0})})(),(function(){var F="vnhd0x9eve";try{if(localStorage.getItem("mm_no_tracking")==="1")return}catch{}if(window.clarity||document.querySelector('script[src*="clarity.ms"]'))return;function G(){window.clarity||(function(W,y,i,c,g,b,x){W[i]=W[i]||function(){(W[i].q=W[i].q||[]).push(arguments)},b=y.createElement(c),b.async=1,b.src="https://www.clarity.ms/tag/"+g,x=y.getElementsByTagName(c)[0],x.parentNode.insertBefore(b,x)})(window,document,"clarity","script",F)}function _(){"requestIdleCallback"in window?requestIdleCallback(G,{timeout:4e3}):setTimeout(G,2e3)}document.readyState==="complete"?_():window.addEventListener("load",_,{once:!0})})(),(function(){if(!document.getElementById("mm-floating-whatsapp")){var G="5511915299488",_=(document.querySelector("#prod-nome")||{}).value,W=window.location.origin+window.location.pathname+(/^#derivacao=/.test(window.location.hash)?window.location.hash:""),y;_?y="Olá! Tenho interesse no "+_.trim()+". "+W:y="Olá! Vim pelo site e gostaria de ajuda. "+W;var i="https://api.whatsapp.com/send?phone="+G+"&text="+encodeURIComponent(y),c=document.createElement("a");c.id="mm-floating-whatsapp",c.href=i,c.target="_blank",c.rel="noopener noreferrer",c.setAttribute("aria-label","Fale conosco pelo WhatsApp"),c.style.cssText=["position: fixed","right: 14px","z-index: 98","display: flex","align-items: center","justify-content: center","width: 52px","height: 52px","background: #4b664a","border-radius: 50%","box-shadow: 0 3px 12px rgba(0,0,0,0.18)","text-decoration: none","transition: transform 0.15s ease","-webkit-tap-highlight-color: transparent"].join(";"),c.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" style="display:block;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',c.addEventListener("touchstart",function(){c.style.transform="scale(0.92)"},{passive:!0}),c.addEventListener("touchend",function(){c.style.transform=""},{passive:!0}),document.body.appendChild(c)}})(),(function(){var G=/^(utm_|gad_|gclid$|gbraid$|wbraid$|fbclid$|msclkid$|ttclid$|srsltid$)/;function _(){try{if(!window.history||!window.history.replaceState||!window.URL||!window.location.search)return;var W=new URL(window.location.href),y=[];W.searchParams.forEach(function(g,b){y.push(b)});var i=!1;if(y.forEach(function(g){G.test(g)&&(W.searchParams.delete(g),i=!0)}),!i)return;var c=W.searchParams.toString();window.history.replaceState(window.history.state,document.title,W.pathname+(c?"?"+c:"")+W.hash)}catch{}}document.readyState==="complete"?setTimeout(_,3e3):window.addEventListener("load",function(){setTimeout(_,3e3)})})(),(function(){var G=document.querySelector(".back-to-top");if(G){var _=G.querySelector(".icon");_&&(_.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',_.style.cssText="display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:none !important;")}})(),(function(){var G="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",_="https://api.whatsapp.com/send?phone=5511915299488&text="+encodeURIComponent("Olá! Vim pelo site e gostaria de ajuda."),W={phone:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',whats:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',mail:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',clock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',pin:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',lock:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>',shield:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>',truck:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',card:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',instagram:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',facebook:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>',tiktok:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.39a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.42z"/></svg>'};function y(){if(!document.getElementById("mm-footer")&&document.body){document.body.classList.add("mm-footer-rebuild");var i=document.createElement("footer");i.id="mm-footer",i.className="mm-footer",i.setAttribute("role","contentinfo"),i.innerHTML='<div class="mm-footer-main"><div class="mm-footer-grid"><div class="mm-footer-col mm-footer-brand"><a class="mm-footer-logo" href="/" aria-label="Madeira Mania - voltar à home"><img src="'+G+'" alt="Madeira Mania" width="180" height="48"></a><p class="mm-footer-tagline">Móveis com design moderno e qualidade superior pra transformar sua casa em um lar cheio de personalidade.</p><div class="mm-footer-social"><a href="https://www.instagram.com/madeira.mania" target="_blank" rel="noopener" aria-label="Instagram da Madeira Mania">'+W.instagram+'</a><a href="https://web.facebook.com/profile.php?id=61578397120844" target="_blank" rel="noopener" aria-label="Facebook da Madeira Mania">'+W.facebook+'</a><a href="https://www.tiktok.com/@madeira.mania" target="_blank" rel="noopener" aria-label="TikTok da Madeira Mania">'+W.tiktok+'</a></div></div><div class="mm-footer-col"><h4 class="mm-footer-h">Atendimento</h4><ul class="mm-footer-list"><li><a href="tel:+5511915299488">'+W.phone+'<span>(11) 91529-9488</span></a></li><li><a href="'+_+'" target="_blank" rel="noopener">'+W.whats+'<span>WhatsApp</span></a></li><li><a href="mailto:contato@madeiramania.com.br">'+W.mail+'<span>contato@madeiramania.com.br</span></a></li><li><span class="mm-footer-meta">'+W.clock+'<span>Seg a Sex · 8h às 18h</span></span></li></ul></div><div class="mm-footer-col"><h4 class="mm-footer-h">Sua compra</h4><ul class="mm-footer-list"><li><a href="'+(/(?:^|;\s*)zordEm=[^;\s]/.test(document.cookie)?"/cliente/pedidos":"/login#rastrear")+'">Rastrear meu pedido</a></li><li><a href="/como-comprar">Como comprar</a></li><li><a href="/politica-de-entrega">Frete e entrega</a></li><li><a href="/politica-de-trocas-e-devolucoes">Trocas e devoluções</a></li><li><a href="/compra-segura">Compra segura</a></li><li><a href="/avaliacoes-de-clientes">Avaliações de clientes</a></li></ul></div><div class="mm-footer-col"><h4 class="mm-footer-h">Madeira Mania</h4><ul class="mm-footer-list"><li><a href="/quem-somos">Quem somos</a></li><li><a href="/atendimento">Central de atendimento</a></li><li><a href="/envio-imediato">Pronta entrega</a></li><li><a href="/politica-de-privacidade">Política de privacidade</a></li></ul></div></div></div><div class="mm-footer-trust"><div class="mm-footer-trust-inner"><div class="mm-footer-trust-item">'+W.lock+'<div class="mm-footer-trust-text"><strong>Compra 100% segura</strong><small>Site protegido por SSL</small></div></div><div class="mm-footer-trust-item">'+W.shield+'<div class="mm-footer-trust-text"><strong>7 dias para troca</strong><small>Direito de arrependimento</small></div></div><div class="mm-footer-trust-item">'+W.truck+'<div class="mm-footer-trust-text"><strong>Frete grátis</strong><small>Acima de R$ 2.000</small></div></div><div class="mm-footer-trust-item">'+W.card+'<div class="mm-footer-trust-text"><strong>12x sem juros</strong><small>Em todos os cartões</small></div></div></div></div><div class="mm-footer-bottom"><div class="mm-footer-bottom-inner"><p class="mm-footer-legal">© 2026 <strong>Madeira Mania</strong> · CNPJ 60.021.382/0001-61<br>Av. Paulista, 1636 · Bela Vista · São Paulo/SP · 01310-200</p><div class="mm-footer-payments" aria-label="Formas de pagamento aceitas"><span class="mm-pay-chip" title="PIX"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/pix.svg" alt="PIX" loading="lazy"></span><span class="mm-pay-chip" title="Visa"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/visa.svg" alt="Visa" loading="lazy"></span><span class="mm-pay-chip" title="Mastercard"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/mastercard.svg" alt="Mastercard" loading="lazy"></span><span class="mm-pay-chip" title="Elo"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/elo.svg" alt="Elo" loading="lazy"></span><span class="mm-pay-chip" title="Hipercard"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/hipercard.svg" alt="Hipercard" loading="lazy"></span><span class="mm-pay-chip" title="American Express"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/american2.svg" alt="American Express" loading="lazy"></span><span class="mm-pay-chip" title="Boleto Bancário"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/boleto.svg" alt="Boleto Bancário" loading="lazy"></span></div></div></div>',document.body.appendChild(i),document.documentElement.classList.remove("mm-footer-loading")}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",y):y(),setTimeout(y,1e3),setTimeout(y,3e3),setTimeout(function(){document.documentElement.classList.remove("mm-footer-loading")},6e3)})(),(function(){"use strict";if(location.pathname.replace(/\/$/,"")!=="/atendimento")return;function F(){var G=document.querySelector(".atendimento .title-content");if(!(!G||G.dataset.mmEnhanced)){G.dataset.mmEnhanced="1";var _='<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.053 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64.001 5.122 1.03 6.988 2.898 1.866 1.868 2.893 4.352 2.892 6.992-.003 5.45-4.437 9.887-9.885 9.887zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.465 3.488z"/></svg>';G.innerHTML=["<h1>Fale com a gente</h1>",'<p class="mm-atd-lead">Nosso time está pronto para ajudar você a escolher os móveis certos para sua casa. Use o WhatsApp para respostas rápidas ou preencha o formulário abaixo.</p>','<div class="mm-atd-channels">','  <a class="mm-atd-whatsapp" href="https://api.whatsapp.com/send?phone=5511915299488&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20m%C3%B3veis." target="_blank" rel="noopener">',"    "+_,'    <span class="mm-atd-whatsapp-label">Fale pelo WhatsApp</span>','    <span class="mm-atd-whatsapp-number">11 91529-9488</span>',"  </a>",'  <div class="mm-atd-info">','    <div class="mm-atd-info-item">',"      <strong>Horário de atendimento</strong>","      <span>Segunda a sexta · 9h às 18h</span>","      <span>Sábado · 9h às 13h</span>","    </div>",'    <div class="mm-atd-info-item">',"      <strong>E-mail</strong>",'      <a href="mailto:contato@madeiramania.com.br">contato@madeiramania.com.br</a>',"    </div>","  </div>","</div>",'<h2 class="mm-atd-form-title">Formulário de contato</h2>'].join(`
`)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",F):F(),setTimeout(F,500),setTimeout(F,2e3)})(),(function(){if(window.MMTextSearch&&window.MMTextSearch.version)return;var F="https://madeira-mania-cdn.luancamara.workers.dev",G="mm_recent_searches_v2",_=2,W=6,y=12,i=9e3,c=6e3,g=240,b={relevance:"Relevância",newest:"Lançamentos",name_asc:"A a Z (Nome)",name_desc:"Z a A (Nome)",rating_desc:"Melhor avaliados"},x={categories:{param:"category",label:"Categorias",nativeName:"categoria",className:"filtro-categorias"},brand:{param:"brand",label:"Marcas",nativeName:"marca",className:"filtro-marcas"},material:{param:"material",label:"Material",nativeName:"material",className:"filtro-caracteristicas"},requiresAssembly:{param:"assembly",label:"Requer montagem",nativeName:"montagem",className:"filtro-caracteristicas"}};function P(l){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",l):l()}function m(l,k,T){var h=document.createElement(l);return k&&(h.className=k),T!=null&&(h.textContent=String(T)),h}function O(l,k){return Object.keys(k||{}).forEach(function(T){var h=k[T];h===!1||h===null||h===void 0||(h===!0?l.setAttribute(T,""):l.setAttribute(T,String(h)))}),l}function H(l){for(;l&&l.firstChild;)l.removeChild(l.firstChild)}function V(l){if(l==null||l==="")return null;var k=Number(l);return Number.isFinite(k)?k:null}function B(l){var k=V(l);if(k===null)return"";try{return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(k)}catch{return"R$ "+k.toFixed(2).replace(".",",")}}function Y(l){try{return new Intl.NumberFormat("pt-BR").format(Number(l)||0)}catch{return String(Number(l)||0)}}function J(l){return String(l||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("pt-BR").replace(/[^a-z0-9]+/g," ").trim().replace(/\s+/g," ")}function w(){try{var l=String(localStorage.getItem("mm_search_api_url")||"").trim();if(l){var k=new URL(l,location.href);if(k.protocol==="http:"||k.protocol==="https:")return k.origin+k.pathname.replace(/\/$/,"").replace(/\/api$/,"")+"/api"}var T=String(localStorage.getItem("mm_dev_url")||"").trim();if(T){var h=new URL(T,location.href);if(h.protocol==="http:"||h.protocol==="https:")return h.origin+"/api"}}catch{}try{var q=Array.prototype.slice.call(document.scripts||[]),rn=q.find(function(mn){return mn.src&&/(?:madeira-mania\.js)(?:\?|$)/.test(mn.src)});if(rn){var sn=new URL(rn.src,location.href);if(sn.hostname==="localhost"||sn.hostname==="127.0.0.1"||/\.trycloudflare\.com$/.test(sn.hostname))return sn.origin+"/api"}if(location.hostname==="localhost"||location.hostname==="127.0.0.1")return location.origin+"/api"}catch{}return F+"/api"}var K=w();function kn(l){try{var k=new URL(String(l||""),location.href);if(k.protocol!=="http:"&&k.protocol!=="https:")return"";var T=k.hostname===location.hostname||/(^|\.)magazord\.com\.br$/i.test(k.hostname)||k.hostname==="magazord-public.s3.sa-east-1.amazonaws.com";return T?k.href:""}catch{return""}}function an(l){var k=kn(l);if(!k)return"";try{var T=new URL(k),h=/^\/img\//i.test(T.pathname);return h&&(T.hostname==="www.madeiramania.com.br"||T.hostname==="madeiramania.com.br")&&(T.hostname="madeiramania.cdn.magazord.com.br"),h&&T.hostname==="madeiramania.cdn.magazord.com.br"&&(T.protocol="https:",T.searchParams.set("ims","400x400")),T.href}catch{return k}}function Cn(l){try{var k=String(l||"").trim();if(!k)return"/";var T=new URL(k,location.origin);if(T.protocol!=="http:"&&T.protocol!=="https:")return"/";var h=T.hostname===location.hostname||/(^|\.)madeiramania\.com\.br$/i.test(T.hostname);return h?T.href:"/"}catch{return"/"}}function X(){try{var l=JSON.parse(localStorage.getItem(G)||"[]");return Array.isArray(l)?l.filter(Boolean).map(String).slice(0,5):[]}catch{return[]}}function U(l){if(l=String(l||"").trim(),!(l.length<_))try{var k=J(l),T=X().filter(function(h){return J(h)!==k});T.unshift(l),localStorage.setItem(G,JSON.stringify(T.slice(0,5)))}catch{}}function vn(){var l="mm_search_user_token";try{var k=localStorage.getItem(l);if(k)return k;var T="mm-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10);return localStorage.setItem(l,T),T}catch{return"anonymous"}}function Xn(l,k){var T=k||{};try{window.dataLayer=window.dataLayer||[],window.dataLayer.push(Object.assign({event:l,eventName:l},T))}catch{}try{window.dispatchEvent(new CustomEvent(l,{detail:T}))}catch{}if(!(l!=="mm_search_product_clicked"&&l!=="mm_search_results_viewed"&&l!=="mm_search_no_results"))try{fetch(K+"/search/events",{method:"POST",mode:"cors",credentials:"omit",cache:"no-store",keepalive:!0,headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.assign({eventName:l,userToken:vn()},T))}).catch(function(){})}catch{}}function $n(l){var k=new URL(K+"/search");return k.searchParams.set("q",String(l.query||"")),k.searchParams.set("page",String(l.page||0)),k.searchParams.set("limit",String(l.limit||y)),l.exact&&k.searchParams.set("exact","1"),b[l.sort]&&k.searchParams.set("sort",l.sort),Object.keys(x).forEach(function(T){(l.filters&&l.filters[T]||[]).forEach(function(h){k.searchParams.append(x[T].param,h)})}),k.toString()}function me(l){if(!l||typeof l!="object"||!Array.isArray(l.hits)){var k=new Error("Resposta de busca inválida.");throw k.code="INVALID_SEARCH_RESPONSE",k}return l.hits=l.hits.filter(function(T){return T&&typeof T=="object"&&(T.objectID||T.sku)&&T.name}).slice(0,y),l.nbHits=Math.max(0,Number(l.nbHits)||0),l.nbPages=Math.max(0,Number(l.nbPages)||0),l.page=Math.max(0,Number(l.page)||0),l.facets=l.facets&&typeof l.facets=="object"?l.facets:{},l}function xe(l,k){var T=setTimeout(function(){k&&k.abort()},i);return fetch($n(l),{method:"GET",mode:"cors",credentials:"omit",cache:"no-store",signal:k&&k.signal,headers:{Accept:"application/json"}}).then(function(h){return h.json().catch(function(){return{}}).then(function(q){if(!h.ok){var rn=new Error(q&&q.error&&q.error.message||"Não foi possível concluir a busca.");throw rn.code=q&&q.error&&q.error.code||"SEARCH_REQUEST_FAILED",rn.status=h.status,rn}return me(q)})}).then(function(h){return clearTimeout(T),h},function(h){throw clearTimeout(T),h})}function ye(l,k){var T=new URL("/busca",location.origin);return T.searchParams.set("q",String(l||"")),Object.keys(k||{}).forEach(function(h){k[h]!==null&&k[h]!==void 0&&k[h]!==""&&T.searchParams.set(h,String(k[h]))}),T.pathname+T.search}function ge(l,k,T){var h=m("a",T||"mm-h-search-result");return h.href=ye(l),h.setAttribute("data-mm-search-query",l),h.appendChild(m("span","mm-h-search-result-icon","⌕")),h.appendChild(m("span","mm-h-search-result-label",k)),h}function ve(l,k,T){var h=m("a","mm-h-search-product");h.href=Cn(l.commercial&&l.commercial.url||l.url),h.setAttribute("data-mm-search-product",""),h.setAttribute("data-object-id",String(l.objectID||l.sku||"")),h.setAttribute("data-position",String(k)),T&&h.setAttribute("data-query-id",String(T));var q=m("span","mm-h-search-product-thumb"),rn=kn(l.image);if(rn){var sn=O(m("img"),{src:rn,alt:"",loading:"lazy",width:64,height:64});sn.addEventListener("error",function(){sn.remove(),q.appendChild(m("span","mm-h-search-product-noimg"))}),q.appendChild(sn)}else q.appendChild(m("span","mm-h-search-product-noimg"));var mn=l.commercial||{};mn.status==="confirmed"&&Number(mn.discountPercent)>0&&q.appendChild(m("span","mm-h-search-product-discount","-"+Math.round(Number(mn.discountPercent))+"%")),h.appendChild(q);var yn=m("span","mm-h-search-product-body");yn.appendChild(m("span","mm-h-search-product-name",l.name||l.sku||"Produto"));var wn=m("span","mm-h-search-product-prices");if(mn.status==="confirmed"){var An=V(mn.price),Tn=V(mn.oldPrice);An!==null&&Tn!==null&&Tn>An&&wn.appendChild(m("span","mm-h-search-product-oldprice",B(Tn))),wn.appendChild(m("span","mm-h-search-product-price",An!==null?B(An):"Consulte o preço"))}else wn.appendChild(m("span","mm-h-search-product-price","Ver produto"));return yn.appendChild(wn),h.appendChild(yn),h}function ne(){var l=document.getElementById("mm-header"),k=document.getElementById("mm-h-search-overlay"),T=document.getElementById("mm-h-buscar"),h=document.getElementById("mm-h-search-input"),q=document.getElementById("mm-h-search-results"),rn=document.getElementById("mm-h-search-suggestions"),sn=k&&k.querySelector(".mm-h-search-form");if(!l||!k||!T||!h||!q||!sn)return!1;if(h.getAttribute("data-mm-text-search")==="ready")return!0;h.setAttribute("data-mm-text-search","ready"),h.setAttribute("role","combobox"),h.setAttribute("aria-autocomplete","list"),h.setAttribute("aria-controls","mm-h-search-results"),h.setAttribute("aria-expanded","false"),q.setAttribute("role","listbox"),q.setAttribute("aria-live","polite"),q.setAttribute("aria-label","Sugestões e produtos encontrados");var mn=null,yn=null,wn=0;function An(s){q.hidden=!s,h.setAttribute("aria-expanded",s?"true":"false")}function Tn(s){rn&&(rn.hidden=!s)}function gn(){mn&&mn.abort(),H(q);var s=X();if(!s.length){An(!1),Tn(!0);return}Tn(!0);var f=m("div","mm-h-search-section");f.appendChild(m("span","mm-h-search-sug-label","Buscas recentes"));var j=m("ul","mm-h-search-list");s.forEach(function(pn){var zn=m("li");zn.appendChild(ge(pn,pn)),j.appendChild(zn)}),f.appendChild(j),q.appendChild(f),An(!0)}function Ln(s,f){H(q),Tn(!1);var j=m("ul","mm-h-search-list"),pn=m("li"),zn=ge(s,"Buscar por “"+s+"”","mm-h-search-result mm-h-search-result-primary");zn.appendChild(m("span","mm-h-search-result-arrow","→")),pn.appendChild(zn),j.appendChild(pn),q.appendChild(j);var Mn=m("div","mm-h-search-products-section");Mn.appendChild(m("span","mm-h-search-sug-label",f?"Buscando produtos…":"Produtos"));var a=m("div","mm-h-search-products-grid");if(f){a.classList.add("mm-h-search-products-loading");for(var p=0;p<4;p+=1)a.appendChild(m("div","mm-h-search-product-skel"))}return Mn.appendChild(a),q.appendChild(Mn),An(!0),{section:Mn,grid:a}}function In(s){var f=Ln(s.query,!1);if(s.source==="fixture"&&q.insertBefore(m("p","mm-search-fixture-note","Prévia local · dados de demonstração"),q.firstChild),s.interpretedQuery&&J(s.interpretedQuery)!==J(s.query)){var j=m("div","mm-h-search-correction"),pn=m("span");pn.appendChild(document.createTextNode("Resultados para ")),pn.appendChild(m("strong","",s.interpretedQuery)),j.appendChild(pn);var zn=m("a","","Buscar exatamente “"+s.query+"”");zn.href=ye(s.query,{exact:"1"}),zn.addEventListener("click",function(){Xn("mm_search_correction_used",{query:s.query,interpretedQuery:s.interpretedQuery,exact:!0,context:"header"})}),j.appendChild(zn),q.insertBefore(j,f.section)}s.hits.length?(s.hits.slice(0,W).forEach(function(Mn,a){f.grid.appendChild(ve(Mn,a+1,s.queryID))}),f.section.querySelector(".mm-h-search-sug-label").textContent="Produtos · "+Y(s.nbHits)+(s.nbHits===1?" resultado":" resultados"),Xn("mm_search_results_viewed",{query:s.query,context:"header",resultCount:s.nbHits,queryID:s.queryID||""})):(f.section.removeChild(f.grid),f.section.appendChild(m("p","mm-h-search-empty","Nenhum produto encontrado. Tente outra palavra ou o código do produto.")),Xn("mm_search_no_results",{query:s.query,context:"header",queryID:s.queryID||""})),s.partialCommercial&&q.appendChild(m("p","mm-search-commercial-note","Alguns preços não puderam ser confirmados agora e não foram exibidos."))}function ee(s){var f=Ln(s,!1);f.section.removeChild(f.grid);var j=m("p","mm-h-search-error");j.appendChild(m("strong","","A busca rápida não respondeu. ")),j.appendChild(document.createTextNode("Pressione Enter para abrir a página de resultados.")),f.section.appendChild(j)}function Vn(s){if(s=String(s||"").trim(),s.length<_){gn();return}wn+=1;var f=wn;mn&&mn.abort(),mn=typeof AbortController<"u"?new AbortController:null,Ln(s,!0),xe({query:s,page:0,limit:W,sort:"relevance",filters:{}},mn).then(function(j){f!==wn||h.value.trim()!==s||In(j)}).catch(function(j){j&&j.name==="AbortError"||f!==wn||h.value.trim()!==s||ee(s)})}return h.addEventListener("input",function(){clearTimeout(yn);var s=h.value.trim();if(s.length<_){gn();return}Ln(s,!0),yn=setTimeout(function(){Vn(s)},g)}),h.addEventListener("keydown",function(s){if(s.key==="ArrowDown"){var f=q.querySelector("a[href], button:not([disabled])");f&&(s.preventDefault(),f.focus())}}),q.addEventListener("keydown",function(s){if(!(s.key!=="ArrowDown"&&s.key!=="ArrowUp")){var f=Array.prototype.slice.call(q.querySelectorAll("a[href], button:not([disabled])")),j=f.indexOf(document.activeElement);j<0||(s.preventDefault(),s.key==="ArrowDown"?(f[j+1]||f[0]).focus():j===0?h.focus():f[j-1].focus())}}),q.addEventListener("click",function(s){var f=s.target.closest&&s.target.closest("[data-mm-search-query]");f&&U(f.getAttribute("data-mm-search-query"));var j=s.target.closest&&s.target.closest("[data-mm-search-product]");j&&(U(h.value),Xn("mm_search_product_clicked",{query:h.value.trim(),context:"header",objectID:j.getAttribute("data-object-id"),queryID:j.getAttribute("data-query-id")||"",position:Number(j.getAttribute("data-position"))||1}))}),sn.addEventListener("submit",function(s){var f=h.value.trim();if(f.length<_){s.preventDefault(),h.focus();return}U(f),Xn("mm_search_submitted",{query:f,context:"header"})}),T.addEventListener("click",function(){h.value.trim().length>=_?Vn(h.value):gn()}),gn(),!0}function Zn(l){var k=[];return(l||[]).forEach(function(T){String(T||"").split(",").forEach(function(h){h=h.trim(),h&&k.indexOf(h)===-1&&k.push(h)})}),k.slice(0,12)}function te(){return{categories:[],brand:[],material:[],requiresAssembly:[]}}function Rn(){var l=new URLSearchParams(location.search),k=Number.parseInt(l.get("page")||"1",10),T=l.get("sort")||"relevance";b[T]||(T="relevance");var h=te();return Object.keys(x).forEach(function(q){h[q]=Zn(l.getAll(x[q].param))}),{query:String(l.get("q")||"").trim(),exact:l.get("exact")==="1",page:Math.max(0,(Number.isFinite(k)?k:1)-1),sort:T,filters:h}}function be(l){var k=te();return Object.keys(x).forEach(function(T){k[T]=(l.filters[T]||[]).slice()}),{query:l.query,exact:!!l.exact,page:Math.max(0,Number(l.page)||0),sort:b[l.sort]?l.sort:"relevance",filters:k}}function oe(l){var k=new URL("/busca",location.origin);return k.searchParams.set("q",l.query),l.exact&&k.searchParams.set("exact","1"),l.sort&&l.sort!=="relevance"&&k.searchParams.set("sort",l.sort),Object.keys(x).forEach(function(T){(l.filters[T]||[]).forEach(function(h){k.searchParams.append(x[T].param,h)})}),l.page>0&&k.searchParams.set("page",String(l.page+1)),k.pathname+k.search}function we(l){return Object.keys(x).reduce(function(k,T){return k+(l.filters[T]||[]).length},0)}function se(l,k,T){var h=k.filters[T]||[],q=Object.create(null),rn=l.facets&&Array.isArray(l.facets[T])?l.facets[T]:[];return rn.forEach(function(sn){!sn||!String(sn.value||"").trim()||(q[sn.value]={value:String(sn.value),count:Math.max(0,Number(sn.count)||0)})}),h.forEach(function(sn){q[sn]||(q[sn]={value:sn,count:0})}),Object.keys(q).map(function(sn){return q[sn]}).sort(function(sn,mn){var yn=h.indexOf(sn.value)===-1?0:1,wn=h.indexOf(mn.value)===-1?0:1;return wn-yn||mn.count-sn.count||sn.value.localeCompare(mn.value,"pt-BR")}).slice(0,12)}function Jn(l,k,T){var h=be(l),q=h.filters[k],rn=q.indexOf(T);return rn===-1?q.push(T):q.splice(rn,1),h.page=0,h}function le(l,k,T){var h=x[T],q=se(l,k,T);if(!q.length)return null;var rn=m("div","filtro-container "+h.className),sn=m("h2");sn.appendChild(m("span","",h.label));var mn=O(m("a","arrow down"),{href:"#","aria-label":"Alternar "+h.label});mn.setAttribute("data-mm-filter-toggle",""),sn.appendChild(mn),rn.appendChild(sn);var yn=m("ul","filtro");return yn.setAttribute("data-filter-name",h.nativeName),q.forEach(function(wn,An){var Tn=k.filters[T].indexOf(wn.value)!==-1,gn=m("li"),Ln=m("a","filtro-link");Ln.href=oe(Jn(k,T,wn.value)),Ln.rel="nofollow",Ln.setAttribute("data-mm-filter-key",T),Ln.setAttribute("data-mm-filter-value",wn.value);var In=m("div","label_check"),ee=O(m("input","filtro-checkbox"),{type:"checkbox",id:"mm-filter-"+T+"-"+An,value:wn.value,tabindex:"-1"});ee.checked=Tn,In.appendChild(ee),In.appendChild(m("div","filtro-pretty-check"));var Vn=m("span","filtro-desc",wn.value);Vn.appendChild(m("small","mm-search-facet-count"," ("+Y(wn.count)+")")),In.appendChild(Vn),Ln.appendChild(In),gn.appendChild(Ln),yn.appendChild(gn)}),rn.appendChild(yn),rn}function _n(l,k){var T=m("div","filtros mm-search-native-filters"),h=m("form","has-js");h.method="get";var q=we(k);if(q){var rn=m("div","filtros-selecionados"),sn=m("p","flex center space-between","Filtros Selecionados ");sn.appendChild(m("span","count",String(q))),rn.appendChild(sn);var mn=O(m("button","limpa-filtros flex center justify-center","Remover filtros"),{type:"button",title:"Limpar filtros","data-mm-clear-filters":""});rn.appendChild(mn),h.appendChild(rn)}return Object.keys(x).forEach(function(yn){var wn=le(l,k,yn);wn&&h.appendChild(wn)}),T.appendChild(h),T}function ae(l,k){var T=m("div","ordenacao clearfix mm-search-native-order"),h=m("div","registros-ordem");h.appendChild(m("span","registros-numero",Y(l.nbHits)+(l.nbHits===1?" produto encontrado para essa busca":" produtos encontrados para essa busca")));var q=m("form");q.method="get";var rn=m("label","mm-search-sr-only","Ordenar resultados");rn.htmlFor="ordem",q.appendChild(rn);var sn=O(m("select"),{id:"ordem",name:"ordem","data-mm-search-sort":""});return Object.keys(b).forEach(function(mn){var yn=m("option","",b[mn]);yn.value=mn,yn.selected=mn===k.sort,sn.appendChild(yn)}),q.appendChild(sn),h.appendChild(q),T.appendChild(h),T}var Hn="relative items-center overflow-hidden min-h-[auto] bg-color-white float-left w-[31.81%] mr-[2.27%] mt-space-10 max-md:mb-[15px] max-md:!block max-md:mt-space-10",pe="product-name text-cor-texto mt-space-20 max-sm:mt-space-10 block text-[1.06em] leading-[1.25em] max-sm:text-[0.94em] whitespace-normal break-words overflow-hidden h-[2.5em]",ke="transition-colors gap-space-8 outline-none font-roboto bg-success-700 text-white border hover:bg-success-800 active:bg-success-900 focus-visible:bg-success-800 focus-visible:border-2 focus-visible:border-success-300 disabled:opacity-100 disabled:bg-secondary-50 disabled:text-secondary-300 disabled:border-0 disabled:cursor-not-allowed btn-comprar-vitrine border-transparent w-[90%] h-auto text-[0.875em] font-bold text-center border-none rounded-[8px] px-space-16 py-space-10 mx-auto my-space-8 flex items-center justify-center normal-case";function Be(l,k){if(Number(k)>0){var T=m("div","tag-area tag-area-react absolute z-[1] uppercase top-space-10 right-space-10 w-auto max-md:right-space-10 superior-esquerdo !left-space-10 !right-auto"),h=m("div","tag-produto min-w-[51px] w-inherit h-auto text-xs float-right font-normal clear-both text-right p-0 max-sm:text-[10px] relative mb-[5px] leading-[18px] uppercase flex items-center"),q=m("div","tag-value block py-[1px] px-space-8 relative rounded-[5px]");q.style.backgroundColor="#ff0000",q.style.color="#ffffff",q.appendChild(m("div","text-tag max-md:!text-[10.5px]","-"+Math.round(Number(k))+"%")),h.appendChild(q),T.appendChild(h),l.appendChild(T)}}function Fe(l){var k=Math.max(0,Math.min(5,Number(l.ratingAverage)||0)),T=Math.max(0,Number(l.reviewCount)||0),h=m("span","rating block mt-[7px]"),q=m("span","average-rating star-back top-[3px] left-[-3px]");return q.setAttribute("data-value",k.toFixed(2)),q.title=k.toFixed(2)+" de 5",q.style.setProperty("--size","23px"),q.style.setProperty("--percent",(k/5*100).toFixed(2)+"%"),h.appendChild(q),h.appendChild(m("span","qtd-aval text-[.75em] text-cor-texto-secundario ml-space-4","("+Y(T)+")")),h}function Ie(l){var k=l.commercial||{},T=V(k.price),h=V(k.oldPrice),q=k.status==="confirmed"&&T!==null&&h!==null&&h>T,rn=m("div","price-product text-cor-texto h-[90px] max-md:inline-block"+(q?"":" pt-[30px]"));q&&rn.appendChild(m("div","old-price mx-0 mb-[5px] mt-[7px] inline-block h-[18px] text-[0.75em] text-cor-texto-secundario line-through",B(h)));var sn=m("div","primary-price vitrine-valor-pix leading-[1.125em]"),mn=m("span","valor-big font-semibold text-cor-texto");return k.status==="confirmed"&&T!==null?(mn.appendChild(m("span","text-[1.31em] max-sm:text-[0.94em]",B(T))),rn.setAttribute("data-valor",String(T))):mn.appendChild(m("span","text-[0.94em] max-sm:text-[0.81em]","Preço indisponível no momento")),sn.appendChild(mn),rn.appendChild(sn),rn}function De(l,k,T,h){var q=l.commercial||{},rn=q.status==="confirmed"&&q.inStock===!0,sn=Cn(q.url||l.url),mn=m("li",Hn+(k%3===2?" !mr-0":""));O(mn,{"data-id":l.sku||l.objectID||"","data-name":encodeURIComponent(q.name||l.name||""),"data-variant":encodeURIComponent(q.derivationName||""),"data-brand":q.brand||l.brand||"","data-position":T.page*y+k});var yn=m("a",rn?"in_stock":"out_stock");yn.href=sn,yn.title=l.name||l.sku||"Produto",yn.setAttribute("data-mm-page-product",""),yn.setAttribute("data-object-id",String(l.objectID||l.sku||"")),yn.setAttribute("data-position",String(T.page*y+k+1)),h&&yn.setAttribute("data-query-id",String(h));var wn=m("figure","relative flex min-w-full items-center justify-center overflow-hidden"),An=an(l.image);if(An){var Tn=O(m("img","img-principal !transition-all !duration-500 block mx-auto w-auto object-contain"),{alt:l.name||"",title:l.name||"",src:An,loading:"lazy",width:400,height:400});Tn.style.aspectRatio="400 / 400",Tn.addEventListener("error",function(){Tn.style.visibility="hidden"}),wn.appendChild(Tn)}else wn.appendChild(m("div","mm-search-product-image-missing"));q.status==="confirmed"&&Be(wn,q.discountPercent),yn.appendChild(wn);var gn=m("div","vitrine-default tipo-vitrine-03 text-center");gn.appendChild(m("h3",pe,l.name||l.sku||"Produto")),gn.appendChild(Fe(l)),gn.appendChild(Ie(l)),yn.appendChild(gn),mn.appendChild(yn);var Ln=rn&&V(q.derivationId)!==null&&V(q.price)!==null,In=m("button",ke,Ln?"Comprar":q.status==="confirmed"&&!rn?"Indisponível":"Ver produto");return In.type="button",In.setAttribute("aria-busy","false"),In.setAttribute("data-object-id",String(l.objectID||l.sku||"")),In.setAttribute("data-product-url",sn),Ln?In.setAttribute("data-mm-buy-product",""):q.status==="confirmed"&&!rn?In.disabled=!0:In.setAttribute("data-mm-open-product",""),mn.appendChild(In),mn}function Ve(l,k,T){if(!l.interpretedQuery||J(l.interpretedQuery)===J(l.query))return null;var h=m("div","mm-search-native-notice"),q=m("span");q.appendChild(document.createTextNode("Mostrando resultados para ")),q.appendChild(m("strong","",l.interpretedQuery)),q.appendChild(document.createTextNode(". ")),h.appendChild(q);var rn=m("a","","Buscar exatamente por “"+l.query+"”"),sn=be(k);return sn.exact=!0,sn.page=0,rn.href=oe(sn),rn.setAttribute("data-mm-exact-search",""),h.appendChild(rn),h}function fe(l,k){var T=Math.max(0,Number(l.nbPages)||0);if(T<=1)return null;var h=m("nav","mm-search-pagination");h.setAttribute("aria-label","Paginação dos resultados");function q(yn,wn,An,Tn){if(Tn){var gn=m("span","button button-smaller is-disabled",yn);return gn.setAttribute("aria-disabled","true"),gn}var Ln=be(k);Ln.page=wn;var In=m("a","button button-smaller"+(An?" button-primary is-current":""),yn);return In.href=oe(Ln),In.setAttribute("data-mm-search-page",String(wn)),An&&In.setAttribute("aria-current","page"),In}h.appendChild(q("Anterior",k.page-1,!1,k.page<=0));for(var rn=Math.max(0,Math.min(k.page-2,T-5)),sn=Math.min(T,rn+5),mn=rn;mn<sn;mn+=1)h.appendChild(q(String(mn+1),mn,mn===k.page,!1));return h.appendChild(q("Próxima",k.page+1,!1,k.page>=T-1)),h}function jn(){var l=m("div","mm-search-page-loading");l.setAttribute("role","status"),l.setAttribute("aria-live","polite"),l.appendChild(m("span","mm-search-sr-only","Carregando resultados…"));var k=m("div","mm-search-shimmer-layout");k.setAttribute("aria-hidden","true");for(var T=m("div","mm-search-shimmer-sidebar"),h=0;h<2;h+=1){var q=m("div","mm-search-shimmer-filter-group"),rn=m("span","mm-search-shimmer-filter-heading");rn.appendChild(m("span","mm-search-shimmer-filter-title mm-search-shimmer-surface")),rn.appendChild(m("span","mm-search-shimmer-filter-arrow mm-search-shimmer-surface")),q.appendChild(rn);for(var sn=h===0?5:1,mn=0;mn<sn;mn+=1){var yn=m("span","mm-search-shimmer-filter-row");yn.appendChild(m("span","mm-search-shimmer-filter-check mm-search-shimmer-surface")),yn.appendChild(m("span","mm-search-shimmer-filter-label mm-search-shimmer-surface"+(mn%2?" is-short":""))),q.appendChild(yn)}T.appendChild(q)}k.appendChild(T);var wn=m("div","mm-search-shimmer-main"),An=m("div","mm-search-shimmer-toolbar");An.appendChild(m("span","mm-search-shimmer-count mm-search-shimmer-surface"));var Tn=m("span","mm-search-shimmer-toolbar-controls");Tn.appendChild(m("span","mm-search-shimmer-mobile-filter mm-search-shimmer-surface")),Tn.appendChild(m("span","mm-search-shimmer-sort mm-search-shimmer-surface")),An.appendChild(Tn),wn.appendChild(An),wn.appendChild(m("span","mm-search-shimmer-notice mm-search-shimmer-surface"));for(var gn=m("div","mm-search-shimmer-grid"),Ln=0;Ln<6;Ln+=1){var In=m("div","mm-search-shimmer-card");In.appendChild(m("span","mm-search-shimmer-image mm-search-shimmer-surface"));var ee=m("span","mm-search-shimmer-content");ee.appendChild(m("span","mm-search-shimmer-line mm-search-shimmer-line-title mm-search-shimmer-surface")),ee.appendChild(m("span","mm-search-shimmer-line mm-search-shimmer-line-subtitle mm-search-shimmer-surface")),ee.appendChild(m("span","mm-search-shimmer-line mm-search-shimmer-line-rating mm-search-shimmer-surface")),ee.appendChild(m("span","mm-search-shimmer-line mm-search-shimmer-line-old-price mm-search-shimmer-surface")),ee.appendChild(m("span","mm-search-shimmer-line mm-search-shimmer-line-price mm-search-shimmer-surface")),ee.appendChild(m("span","mm-search-shimmer-button mm-search-shimmer-surface")),In.appendChild(ee),gn.appendChild(In)}return wn.appendChild(gn),k.appendChild(wn),l.appendChild(k),l}function Se(l,k,T){var h=typeof AbortController<"u"?new AbortController:null,q=setTimeout(function(){h&&h.abort()},T),rn=Object.assign({},k||{});return h&&(rn.signal=h.signal),fetch(l,rn).then(function(sn){return sn.json().catch(function(){return{}}).then(function(mn){if(!sn.ok)throw new Error("Falha ao confirmar compra.");return mn})}).then(function(sn){return clearTimeout(q),sn},function(sn){throw clearTimeout(q),sn})}function Te(l){var k=Cn(l.commercial&&l.commercial.url||l.url),T=V(l.commercial&&l.commercial.derivationId);if(T===null||k==="/")return Promise.reject(new Error("Produto sem contexto de compra."));var h=new URL(k,location.href);return h.searchParams.set("operation","buyButton"),h.searchParams.set("proderivacaoId",String(T)),Se(h.href,{method:"GET",credentials:"same-origin",cache:"no-store",headers:{Accept:"application/json"}},c).then(function(q){if(!q||q.action!=="add-cart")throw new Error("Produto requer seleção na página.");var rn=String(l.sku||l.objectID||"");return Se(K+"/search/cart-context?sku="+encodeURIComponent(rn),{method:"GET",mode:"cors",credentials:"omit",cache:"no-store",headers:{Accept:"application/json"}},c)}).then(function(q){var rn=V(q&&q.price),sn=V(q&&q.deposit),mn=V(q&&q.availableQuantity);if(!q||q.active===!1||rn===null||sn===null||mn===null||mn<=0||typeof window.addCartVitrine!="function")throw new Error("Compra direta indisponível.");return window.addCartVitrine(String(q.sku||l.sku||""),String(q.name||l.name||""),String(q.category||""),String(q.brand||l.brand||""),String(q.derivationName||""),rn,sn,1,{source:"mm-search"}),!0})}function Ne(){if(location.pathname.replace(/\/$/,"")!=="/busca")return!1;var l=document.querySelector(".container.box-pesquisa"),k=document.getElementById("lista-produtos-area");if(l&&!k){var T=l.querySelector(".pesquisa-produtos");T&&(k=m("div"),k.id="lista-produtos-area",T.appendChild(k))}if(!l||!k||l.getAttribute("data-mm-text-search")==="ready")return!1;l.setAttribute("data-mm-text-search","ready");var h=l.querySelector(".filtros")||document.querySelector(".box-pesquisa .filtros"),q=l.querySelector(".ordenacao")||document.querySelector(".box-pesquisa .ordenacao"),rn=q&&q.querySelector("#ordem"),sn=h?h.style.display:"",mn=q?q.style.display:"",yn=null,wn=null,An=null,Tn=null,gn=Rn(),Ln=!1,In=null,ee=0,Vn=null,s=Object.create(null),f=!1;function j(){document.documentElement.classList.remove("mm-search-loading")}function pn(){document.body.classList.remove("mm-search-initial-loading"),Ln&&(Ln=!1,document.body.classList.remove("mm-search-native-active"),h&&(h.style.display=sn),q&&(q.style.display=mn),rn&&(rn.id="ordem"),yn&&yn.remove(),wn&&wn.remove(),An&&An.remove(),Tn&&Tn.remove(),yn=wn=An=Tn=null),Vn=null,s=Object.create(null),j()}function zn(){Ln||(Ln=!0,document.body.classList.add("mm-search-native-active"),h&&(h.style.display="none"),q&&(q.style.display="none"),rn&&(rn.id="mm-native-ordem"))}function Mn(L){var v=_n(L,gn),A=ae(L,gn);yn?yn.replaceWith(v):h&&h.parentNode?h.parentNode.insertBefore(v,h):l.insertBefore(v,l.firstChild),yn=v,f&&yn.classList.add("is-open"),wn?wn.replaceWith(A):q&&q.parentNode?q.parentNode.insertBefore(A,q):k.parentNode.insertBefore(A,k),wn=A,An||(An=m("button","button button-primary mm-search-mobile-filter-toggle"),An.type="button",An.setAttribute("aria-controls","mm-search-native-filters"),yn.parentNode&&yn.parentNode.insertBefore(An,yn)),yn.id="mm-search-native-filters",An.textContent="Filtros"+(we(gn)?" ("+we(gn)+")":""),An.setAttribute("aria-expanded",f?"true":"false")}function a(){return Tn||(Tn=m("section","mm-search-page-results ra-vitrine"),Tn.id="mm-search-page-results",Tn.setAttribute("aria-label","Resultados da busca avançada"),Tn.setAttribute("aria-live","polite"),k.appendChild(Tn),Tn)}function p(){zn();var L=a();L.setAttribute("aria-busy","true"),Vn||(document.body.classList.add("mm-search-initial-loading"),H(L),L.appendChild(jn())),j()}function d(L){if(Ln){var v=a(),A=v.querySelector(".mm-search-page-error");A&&A.remove();var N=m("div","mm-search-page-error");N.setAttribute("role","alert"),N.appendChild(m("strong","","Não foi possível atualizar os resultados. ")),N.appendChild(document.createTextNode("Os últimos produtos confirmados continuam visíveis. "));var nn=O(m("button","button button-smaller button-primary","Tentar novamente"),{type:"button","data-mm-search-retry":""});N.appendChild(nn),v.insertBefore(N,v.firstChild),v.setAttribute("aria-busy","false")}}function C(L,v){var A=m("div","mm-search-empty-state");A.appendChild(m("h2","","Nenhum produto encontrado")),A.appendChild(m("p","","Tente outra palavra, um termo mais curto ou remova algum filtro.")),we(gn)&&A.appendChild(O(m("button","button button-primary","Remover filtros"),{type:"button","data-mm-clear-filters":""})),v.appendChild(A),Xn("mm_search_no_results",{query:L.query,context:"page",queryID:L.queryID||""})}function I(L){if(L.nbHits>0&&L.nbPages>0&&gn.page>=L.nbPages){gn.page=0,D(!1);return}Vn=L,document.body.classList.remove("mm-search-initial-loading"),s=Object.create(null),L.hits.forEach(function(Z){s[String(Z.objectID||Z.sku||"")]=Z}),zn(),Mn(L);var v=a();H(v),v.setAttribute("aria-busy","false"),L.source==="fixture"&&v.appendChild(m("p","mm-search-fixture-note","Prévia local · dados de demonstração"));var A=Ve(L,gn);if(A&&v.appendChild(A),L.partialCommercial&&v.appendChild(m("p","mm-search-commercial-note","Alguns preços não puderam ser confirmados agora e, por segurança, não foram exibidos.")),!L.hits.length)C(L,v);else{var N=m("ul","grid-cols-3 grid items-center product-list product-list-loading-images product-list-react template-03 gap-0 items-unset !flex clear-both flex-wrap");L.hits.forEach(function(Z,ln){N.appendChild(De(Z,ln,gn,L.queryID))}),v.appendChild(N);var nn=fe(L,gn);nn&&v.appendChild(nn)}U(gn.query),Xn("mm_search_results_viewed",{query:L.query,context:"page",resultCount:L.nbHits,queryID:L.queryID||"",page:gn.page+1})}function M(){if(gn.query.length<_){pn();return}p(),ee+=1;var L=ee;In&&In.abort(),In=typeof AbortController<"u"?new AbortController:null,xe({query:gn.query,exact:gn.exact,page:gn.page,limit:y,sort:gn.sort,filters:gn.filters},In).then(function(v){L===ee&&I(v)}).catch(function(v){if(L===ee&&Ln){if(!Vn){pn();return}d(v)}})}function D(L){var v=oe(gn);L?history.pushState({mmTextSearch:!0},"",v):history.replaceState({mmTextSearch:!0},"",v),M()}return l.addEventListener("click",function(L){var v=L.target,A=v.closest&&v.closest("[data-mm-filter-toggle]");if(A){L.preventDefault();var N=A.closest(".filtro-container"),nn=N&&N.querySelector(".filtro");nn&&(nn.hidden=!nn.hidden,A.classList.toggle("down",!nn.hidden));return}var Z=v.closest&&v.closest("[data-mm-filter-key]");if(Z){L.preventDefault();var ln=Z.getAttribute("data-mm-filter-key"),bn=Z.getAttribute("data-mm-filter-value");if(!x[ln])return;gn=Jn(gn,ln,bn),Xn("mm_search_filter_changed",{query:gn.query,filter:ln,value:bn,selected:gn.filters[ln].indexOf(bn)!==-1}),D(!0);return}if(v.closest&&v.closest("[data-mm-clear-filters]")){L.preventDefault(),gn.filters=te(),gn.page=0,Xn("mm_search_filter_changed",{query:gn.query,cleared:!0}),D(!0);return}var Sn=v.closest&&v.closest("[data-mm-exact-search]");if(Sn){L.preventDefault(),gn.exact=!0,gn.page=0,Xn("mm_search_correction_used",{query:gn.query,interpretedQuery:Vn&&Vn.interpretedQuery||"",exact:!0,context:"page"}),D(!0);return}var Bn=v.closest&&v.closest("[data-mm-search-page]");if(Bn){L.preventDefault(),gn.page=Math.max(0,Number(Bn.getAttribute("data-mm-search-page"))||0),D(!0);var Un=l.getBoundingClientRect().top+window.scrollY-24;window.scrollTo({top:Math.max(0,Un),behavior:"smooth"});return}if(v.closest&&v.closest("[data-mm-search-retry]")){L.preventDefault(),M();return}var Wn=v.closest&&v.closest("[data-mm-page-product]");if(Wn){Xn("mm_search_product_clicked",{query:gn.query,context:"page",objectID:Wn.getAttribute("data-object-id"),queryID:Wn.getAttribute("data-query-id")||"",position:Number(Wn.getAttribute("data-position"))||1});return}var Yn=v.closest&&v.closest("[data-mm-open-product]");if(Yn){L.preventDefault(),location.assign(Yn.getAttribute("data-product-url")||"/");return}var Fn=v.closest&&v.closest("[data-mm-buy-product]");if(Fn){L.preventDefault();var he=Fn.getAttribute("data-object-id"),ce=s[he];if(!ce||Fn.disabled)return;Fn.disabled=!0,Fn.setAttribute("aria-busy","true");var Pe=Fn.textContent;Fn.textContent="Adicionando…",Te(ce).then(function(){setTimeout(function(){Fn.disabled=!1,Fn.setAttribute("aria-busy","false"),Fn.textContent=Pe},1200)}).catch(function(){location.assign(Cn(ce.commercial&&ce.commercial.url||ce.url))})}}),l.addEventListener("change",function(L){var v=L.target.closest&&L.target.closest("[data-mm-search-sort]");!v||!b[v.value]||(gn.sort=v.value,gn.page=0,D(!0))}),l.addEventListener("click",function(L){var v=L.target.closest&&L.target.closest(".mm-search-mobile-filter-toggle");!v||!yn||(f=!f,yn.classList.toggle("is-open",f),v.setAttribute("aria-expanded",f?"true":"false"))}),window.addEventListener("popstate",function(){gn=Rn(),M()}),gn.query.length>=_&&D(!1),!0}window.MMTextSearch={version:"1.0.0-rc.1",apiBase:K,initHeader:ne,initPage:Ne,refresh:function(){location.pathname.replace(/\/$/,"")==="/busca"&&location.reload()}},P(function(){Ne()||document.documentElement.classList.remove("mm-search-loading")})})(),(function(){if(/^\/checkout\//.test(location.pathname)||document.getElementById("mm-header"))return;function F(){if(document.getElementById("mm-header"))return;var G="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",_={search:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',user:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',bag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',truck:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>'},W=/(?:^|;\s*)zordEm=[^;\s]/.test(document.cookie),y=W?"/cliente/pedidos":"/login#rastrear",i=document.createElement("div");i.id="mm-header",i.innerHTML=['<a class="mm-h-skip" href="#main">Pular para o conteúdo</a>','<div class="mm-h-topbar">','  <div class="mm-h-topbar-inner">','    <span class="mm-h-topbar-desktop-only">','      <a href="/atendimento">Atendimento</a>','      <span class="mm-h-topbar-sep" aria-hidden="true">·</span>',"    </span>","    <span>Frete grátis R$ 2.000+</span>",'    <span class="mm-h-topbar-sep" aria-hidden="true">·</span>',"    <span>12x sem juros</span>","  </div>","</div>",'<div class="mm-h-main">','  <div class="mm-h-main-left">','    <button class="mm-h-burger" id="mm-h-burger" type="button" aria-label="Abrir menu"><span aria-hidden="true">☰</span></button>','    <button class="mm-h-action" id="mm-h-buscar" type="button">'+_.search+"<span>Buscar</span></button>","  </div>",'  <a class="mm-h-logo" href="/" aria-label="Madeira Mania, ir para a página inicial">','    <img src="'+G+'" alt="" width="280" height="70" loading="eager" />',"  </a>",'  <div class="mm-h-main-right">','    <a class="mm-h-action" href="/wishlist">'+_.heart+"<span>Favoritos</span></a>",'    <a class="mm-h-action mm-h-track" href="'+y+'">'+_.truck+"<span>Rastrear</span></a>",'    <a class="mm-h-action" href="/login">'+_.user+"<span>Conta</span></a>",'    <button class="mm-h-action" type="button" id="mm-h-cart" aria-label="Carrinho, 0 itens" aria-live="polite">','      <span class="mm-h-cart-icon">'+_.bag+'<span class="mm-h-cart-badge" id="mm-h-cart-count" aria-hidden="true" hidden>0</span></span>',"      <span>Carrinho</span>","    </button>","  </div>","</div>",'<nav class="mm-h-nav" role="navigation" aria-label="Categorias">','  <ul class="mm-h-nav-list">','    <li class="mm-h-nav-item" data-menu="ambientes">','      <a href="#" class="mm-h-nav-link" aria-haspopup="true" aria-expanded="false">Ambientes</a>','      <div class="mm-h-mega" role="menu" aria-label="Ambientes">','        <div class="mm-h-mega-inner">','          <div class="mm-h-mega-col">','            <a href="/sala-de-estar-9677307902" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="sala-de-estar">Sala de Estar</a>',"            <ul>",'              <li><a href="/sala-de-estar/mesas">Mesas</a></li>','              <li><a href="/sala-de-estar/racks">Racks para TV</a></li>','              <li><a href="/sala-de-estar/estantes">Estantes</a></li>','              <li><a href="/sala-de-estar/home-theaters">Home Theaters</a></li>','              <li><a href="/sala-de-estar/aparadores">Aparadores</a></li>','              <li><a href="/sala-de-estar/cristaleiras">Cristaleiras</a></li>','              <li><a href="/sala-de-estar/buffets">Buffets</a></li>','              <li><a href="/sala-de-estar/bares">Bares</a></li>','              <li><a href="/sala-de-estar/paineis">Painéis</a></li>','              <li><a href="/sala-de-estar/nichos">Nichos</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col">','            <a href="/sala-de-jantar-1916970475" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="sala-de-jantar">Sala de Jantar</a>',"            <ul>",'              <li><a href="/sala-de-jantar/mesas">Mesas</a></li>','              <li><a href="/sala-de-jantar/cadeiras">Cadeiras</a></li>','              <li><a href="/sala-de-jantar/aparadores">Aparadores</a></li>','              <li><a href="/sala-de-jantar/buffets">Buffets</a></li>','              <li><a href="/sala-de-jantar/cristaleiras">Cristaleiras</a></li>','              <li><a href="/sala-de-jantar/balcoes">Balcões</a></li>','              <li><a href="/sala-de-jantar/banquetas">Banquetas</a></li>','              <li><a href="/sala-de-jantar/bares">Bares</a></li>',"            </ul>",'            <a href="/bar-e-cafe" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="bar-e-cafe">Bar e Café</a>',"            <ul>",'              <li><a href="/bar-e-cafe/bares">Bares</a></li>','              <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col">','            <a href="/cozinha-6327619447" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="cozinha">Cozinha</a>',"            <ul>",'              <li><a href="/cozinha/armarios-de-cozinha">Armários de Cozinha</a></li>','              <li><a href="/cozinha/balcoes">Balcões</a></li>','              <li><a href="/cozinha/banquetas">Banquetas</a></li>','              <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>','              <li><a href="/cozinha/cozinhas-completas">Cozinhas Completas</a></li>','              <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>','              <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>','              <li><a href="/cozinha/multiuso">Multiuso</a></li>','              <li><a href="/cozinha/paneleiros">Paneleiros</a></li>',"            </ul>",'            <a href="/lavanderia" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="lavanderia">Lavanderia</a>','            <a href="/banheiro" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="banheiro">Banheiro</a>',"          </div>",'          <div class="mm-h-mega-col">','            <a href="/quarto-0961844589" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="quarto">Quarto</a>',"            <ul>",'              <li><a href="/quarto/bercos">Berços</a></li>','              <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>','              <li><a href="/quarto/camas">Camas</a></li>','              <li><a href="/quarto/colchoes">Colchões</a></li>','              <li><a href="/quarto/comodas">Cômodas</a></li>','              <li><a href="/quarto/dormitorios">Dormitórios</a></li>','              <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>','              <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>','              <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>','              <li><a href="/quarto/roupeiros">Roupeiros</a></li>',"            </ul>",'            <a href="/escritorio-899523853" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="escritorio">Escritório</a>',"            <ul>",'              <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col mm-h-mega-col-hero" aria-hidden="true">','            <div class="mm-h-mega-hero">','              <img class="mm-h-mega-hero-img" src="" alt="" loading="lazy" width="320" height="240" />','              <div class="mm-h-mega-hero-label"></div>',"            </div>","          </div>","        </div>",'        <div class="mm-h-mega-footer">','          <a href="/envio-imediato" class="mm-h-mega-cta">Ver todos os ambientes <span aria-hidden="true">→</span></a>',"        </div>","      </div>","    </li>",'    <li class="mm-h-nav-item">','      <a href="/envio-imediato" class="mm-h-nav-link">Envio Imediato</a>',"    </li>",'    <li class="mm-h-nav-item">','      <a href="/outlet" class="mm-h-nav-link">Outlet</a>',"    </li>","  </ul>","</nav>",'<div class="mm-h-drawer" id="mm-h-drawer" hidden role="dialog" aria-modal="true" aria-label="Menu">','  <div class="mm-h-drawer-backdrop"></div>','  <aside class="mm-h-drawer-panel">','    <div class="mm-h-drawer-header">','      <span class="mm-h-drawer-title">Menu</span>','      <button class="mm-h-drawer-close" id="mm-h-drawer-close" type="button" aria-label="Fechar menu">','        <span aria-hidden="true">×</span>',"      </button>","    </div>",'    <div class="mm-h-drawer-search">','      <form action="/busca" method="get">','        <input type="search" name="q" placeholder="Buscar" aria-label="Buscar" />',"      </form>","    </div>",'    <nav class="mm-h-drawer-nav" aria-label="Navegação móvel">','      <details class="mm-h-drawer-section">',"        <summary>Sala de Estar</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/sala-de-estar-9677307902">Ver todos →</a></li>','          <li><a href="/sala-de-estar/mesas">Mesas</a></li>','          <li><a href="/sala-de-estar/racks">Racks para TV</a></li>','          <li><a href="/sala-de-estar/estantes">Estantes</a></li>','          <li><a href="/sala-de-estar/home-theaters">Home Theaters</a></li>','          <li><a href="/sala-de-estar/aparadores">Aparadores</a></li>','          <li><a href="/sala-de-estar/cristaleiras">Cristaleiras</a></li>','          <li><a href="/sala-de-estar/buffets">Buffets</a></li>','          <li><a href="/sala-de-estar/bares">Bares</a></li>','          <li><a href="/sala-de-estar/paineis">Painéis</a></li>','          <li><a href="/sala-de-estar/nichos">Nichos</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Sala de Jantar</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/sala-de-jantar-1916970475">Ver todos →</a></li>','          <li><a href="/sala-de-jantar/mesas">Mesas</a></li>','          <li><a href="/sala-de-jantar/cadeiras">Cadeiras</a></li>','          <li><a href="/sala-de-jantar/aparadores">Aparadores</a></li>','          <li><a href="/sala-de-jantar/buffets">Buffets</a></li>','          <li><a href="/sala-de-jantar/cristaleiras">Cristaleiras</a></li>','          <li><a href="/sala-de-jantar/balcoes">Balcões</a></li>','          <li><a href="/sala-de-jantar/banquetas">Banquetas</a></li>','          <li><a href="/sala-de-jantar/bares">Bares</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Cozinha</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/cozinha-6327619447">Ver todos →</a></li>','          <li><a href="/cozinha/armarios-de-cozinha">Armários de Cozinha</a></li>','          <li><a href="/cozinha/balcoes">Balcões</a></li>','          <li><a href="/cozinha/banquetas">Banquetas</a></li>','          <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>','          <li><a href="/cozinha/cozinhas-completas">Cozinhas Completas</a></li>','          <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>','          <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>','          <li><a href="/cozinha/multiuso">Multiuso</a></li>','          <li><a href="/cozinha/paneleiros">Paneleiros</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Quarto</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/quarto-0961844589">Ver todos →</a></li>','          <li><a href="/quarto/bercos">Berços</a></li>','          <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>','          <li><a href="/quarto/camas">Camas</a></li>','          <li><a href="/quarto/colchoes">Colchões</a></li>','          <li><a href="/quarto/comodas">Cômodas</a></li>','          <li><a href="/quarto/dormitorios">Dormitórios</a></li>','          <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>','          <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>','          <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>','          <li><a href="/quarto/roupeiros">Roupeiros</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Bar e Café</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/bar-e-cafe">Ver todos →</a></li>','          <li><a href="/bar-e-cafe/bares">Bares</a></li>','          <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Escritório</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/escritorio-899523853">Ver todos →</a></li>','          <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',"        </ul>","      </details>",'      <a href="/lavanderia" class="mm-h-drawer-link">Lavanderia</a>','      <a href="/banheiro" class="mm-h-drawer-link">Banheiro</a>','      <a href="/envio-imediato" class="mm-h-drawer-link">Envio Imediato</a>','      <a href="/outlet" class="mm-h-drawer-link">Outlet</a>',"    </nav>",'    <div class="mm-h-drawer-footer">','      <a href="'+y+'" class="mm-h-drawer-track">'+_.truck+"<span>Rastrear pedido</span></a>",'      <a href="/wishlist">Favoritos</a>','      <a href="/login">Conta</a>','      <a href="/atendimento">Atendimento</a>',"    </div>","  </aside>","</div>",'<div class="mm-h-search-overlay" id="mm-h-search-overlay" hidden role="dialog" aria-modal="true" aria-label="Buscar">','  <div class="mm-h-search-backdrop"></div>','  <div class="mm-h-search-inner">','    <button class="mm-h-search-close" id="mm-h-search-close" type="button" aria-label="Fechar busca">','      <span aria-hidden="true">×</span>',"    </button>",'    <form action="/busca" method="get" class="mm-h-search-form">','      <label for="mm-h-search-input" class="mm-h-search-label">O que você procura?</label>','      <input type="search" name="q" id="mm-h-search-input" placeholder="O que você procura?" autocomplete="off" />',"    </form>",'    <div class="mm-h-search-results" id="mm-h-search-results" hidden></div>','    <div class="mm-h-search-suggestions" id="mm-h-search-suggestions">','      <span class="mm-h-search-sug-label">Sugestões populares</span>','      <a href="/busca?q=mesa+de+jantar">Mesa de jantar</a>','      <a href="/busca?q=rack">Rack</a>','      <a href="/busca?q=guarda-roupas">Guarda-roupas</a>','      <a href="/busca?q=cristaleira">Cristaleira</a>','      <a href="/busca?q=aparador">Aparador</a>',"    </div>",'    <div class="mm-h-search-hint"><kbd>Esc</kbd> para fechar</div>',"  </div>","</div>"].join(`
`),document.body.insertBefore(i,document.body.firstChild),document.documentElement.classList.remove("mm-header-loading");var c=(function(){try{var s=Array.from(document.scripts).find(function(j){return j.src&&j.src.indexOf("madeira-mania.js")!==-1});if(s&&s.src.indexOf("localhost")!==-1)return"http://localhost:8080/assets/mega-hero/";if(s){var f=s.src.match(/@([^/]+)/);if(f)return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@"+f[1]+"/dist/assets/mega-hero/"}return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@main/dist/assets/mega-hero/"}catch{return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@main/dist/assets/mega-hero/"}})(),g={"sala-de-estar":"Sala de Estar","sala-de-jantar":"Sala de Jantar",cozinha:"Cozinha","bar-e-cafe":"Bar e Café",quarto:"Quarto",escritorio:"Escritório",lavanderia:"Lavanderia",banheiro:"Banheiro"},b=i.querySelector(".mm-h-mega-hero-img"),x=i.querySelector(".mm-h-mega-hero-label");Object.keys(g).forEach(function(s){var f=new Image;f.src=c+s+".jpg"});function P(s){b&&(b.onerror=function(){b.style.visibility="hidden"},b.style.visibility="",b.src=c+s+".jpg",b.alt=g[s]||"",x&&(x.textContent=g[s]||""))}P("sala-de-estar"),i.querySelectorAll(".mm-h-mega-heading-link[data-hero]").forEach(function(s){s.addEventListener("mouseenter",function(){P(s.dataset.hero)})});var m=i.querySelectorAll(".mm-h-nav-item[data-menu]"),O=null,H=null;m.forEach(function(s){s.addEventListener("mouseenter",function(){clearTimeout(H),clearTimeout(O),O=setTimeout(function(){m.forEach(function(j){j.classList.remove("is-open");var pn=j.querySelector(".mm-h-nav-link");pn&&pn.setAttribute("aria-expanded","false")}),s.classList.add("is-open");var f=s.querySelector(".mm-h-nav-link");f&&f.setAttribute("aria-expanded","true")},150)}),s.addEventListener("mouseleave",function(){clearTimeout(O),H=setTimeout(function(){s.classList.remove("is-open");var f=s.querySelector(".mm-h-nav-link");f&&f.setAttribute("aria-expanded","false")},200)})}),document.addEventListener("keydown",function(s){s.key==="Escape"&&m.forEach(function(f){f.classList.remove("is-open");var j=f.querySelector(".mm-h-nav-link");j&&j.setAttribute("aria-expanded","false")})});var V=i.querySelector('.mm-h-nav-item[data-menu="ambientes"] > .mm-h-nav-link');V&&V.addEventListener("click",function(s){s.preventDefault()});var B=document.getElementById("mm-h-search-overlay"),Y=document.getElementById("mm-h-buscar"),J=document.getElementById("mm-h-search-close"),w=document.getElementById("mm-h-search-input"),K=B&&B.querySelector(".mm-h-search-backdrop"),kn=null;function an(){B&&(kn=document.activeElement,B.hidden=!1,document.body.style.overflow="hidden",setTimeout(function(){w&&w.focus()},50))}function Cn(){B&&(B.hidden=!0,document.body.style.overflow="",kn&&kn.focus&&kn.focus())}Y&&Y.addEventListener("click",an),J&&J.addEventListener("click",Cn),K&&K.addEventListener("click",Cn),document.addEventListener("keydown",function(s){if(s.key==="Escape"&&B&&!B.hidden){Cn();return}if(s.key==="/"&&B&&B.hidden){var f=document.activeElement&&document.activeElement.tagName;f!=="INPUT"&&f!=="TEXTAREA"&&!(document.activeElement&&document.activeElement.isContentEditable)&&(s.preventDefault(),an())}}),B&&B.addEventListener("keydown",function(s){if(!(s.key!=="Tab"||B.hidden)){var f=B.querySelectorAll("button, input, a[href]");if(f.length!==0){var j=f[0],pn=f[f.length-1];s.shiftKey&&document.activeElement===j?(s.preventDefault(),pn.focus()):!s.shiftKey&&document.activeElement===pn&&(s.preventDefault(),j.focus())}}});var X=!0;if(window.MMTextSearch&&typeof window.MMTextSearch.initHeader=="function")try{X=!window.MMTextSearch.initHeader()}catch{X=!0}if(X){let s=function(){try{var v=localStorage.getItem($n);if(!v)return[];var A=JSON.parse(v);return Array.isArray(A)?A.slice(0,5):[]}catch{return[]}},f=function(v){if(v)try{var A=s().filter(function(N){return N&&N.toLowerCase()!==v.toLowerCase()});A.unshift(v),localStorage.setItem($n,JSON.stringify(A.slice(0,5)))}catch{}},j=function(v){return String(v).replace(/[&<>"']/g,function(A){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[A]})},pn=function(){try{return JSON.parse(sessionStorage.getItem(ye)||"{}")}catch{return{}}},zn=function(v){try{var A=Object.keys(v);if(A.length>ve){A.sort(function(nn,Z){return v[nn].ts-v[Z].ts});for(var N=0;N<A.length-ve;N++)delete v[A[N]]}sessionStorage.setItem(ye,JSON.stringify(v))}catch{}},Mn=function(v){var A=pn(),N=A[v.toLowerCase()];return!N||Date.now()-N.ts>ge?null:N.products},a=function(v,A){var N=pn();N[v.toLowerCase()]={ts:Date.now(),products:A},zn(N)},p=function(v){for(var A="itens:",N=0;(N=v.indexOf(A,N))!==-1;){var nn=v.indexOf("[",N);if(nn===-1)return null;for(var Z=0,ln=!1,bn=!1,Sn=-1,Bn=nn;Bn<v.length;Bn++){var Un=v.charAt(Bn);if(bn){bn=!1;continue}if(Un==="\\"){bn=!0;continue}if(Un==='"'){ln=!ln;continue}if(!ln){if(Un==="[")Z++;else if(Un==="]"&&(Z--,Z===0)){Sn=Bn;break}}}if(Sn!==-1){var Wn=v.substring(nn,Sn+1);try{var Yn=JSON.parse(Wn);if(Array.isArray(Yn)&&Yn.length>0)return Yn}catch{}}N=nn+1}return null},d=function(v){var A=p(v);if(!A)return[];for(var N=[],nn=0;nn<A.length&&N.length<6;nn++){var Z=A[nn];if(Z){var ln=Z.titulo||Z.nome||"";if(ln){var bn=Z.link||"";bn&&bn.charAt(0)!=="/"&&bn.indexOf("http")!==0&&(bn="/"+bn);var Sn=Z.midia_url||"",Bn=parseFloat(Z.valor),Un=parseFloat(Z.valor_de),Wn=isNaN(Bn)?"":"R$ "+Bn.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),Yn=!isNaN(Un)&&Un>Bn?"R$ "+Un.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):"",Fn="";typeof Z.percentual_off=="number"&&Z.percentual_off>0&&(Fn="-"+Math.round(Z.percentual_off)+"%"),N.push({href:bn,title:ln,img:Sn,price:Wn,oldPrice:Yn,discount:Fn})}}}return N},C=function(v){var A=v.toLowerCase().trim();if(!A||A.length<3)return Promise.resolve([]);var N=Mn(A);if(N)return Promise.resolve(N);if(ne)try{ne.abort()}catch{}ne=typeof AbortController<"u"?new AbortController:null;var nn="/busca?q="+encodeURIComponent(A),Z={credentials:"same-origin",headers:{Accept:"text/html"}};return ne&&(Z.signal=ne.signal),fetch(nn,Z).then(function(ln){if(!ln.ok)throw new Error("HTTP "+ln.status);return ln.text()}).then(function(ln){var bn=d(ln);return a(A,bn),bn}).catch(function(ln){return ln&&ln.name==="AbortError"?null:[]})},I=function(v){var A=v.img?'<img src="'+j(v.img)+'" alt="" loading="lazy" width="64" height="64"/>':'<div class="mm-h-search-product-noimg"></div>',N=v.price?'<span class="mm-h-search-product-price">'+j(v.price)+"</span>":"",nn=v.oldPrice&&v.oldPrice!==v.price?'<span class="mm-h-search-product-oldprice">'+j(v.oldPrice)+"</span>":"",Z=v.discount?'<span class="mm-h-search-product-discount">'+j(v.discount)+"</span>":"";return'<a class="mm-h-search-product" href="'+j(v.href)+'" data-recent="1"><span class="mm-h-search-product-thumb">'+A+Z+'</span><span class="mm-h-search-product-body"><span class="mm-h-search-product-name">'+j(v.title)+'</span><span class="mm-h-search-product-prices">'+nn+N+"</span></span></a>"},M=function(){if(U){var v=s();if(!v.length){U.hidden=!0,U.innerHTML="",vn&&(vn.hidden=!1);return}var A='<div class="mm-h-search-section">';A+='<span class="mm-h-search-sug-label">Buscas recentes</span>',A+='<ul class="mm-h-search-list">';for(var N=0;N<v.length;N++){var nn=v[N];A+='<li><a class="mm-h-search-result" href="/busca?q='+encodeURIComponent(nn)+'"><span class="mm-h-search-result-icon">'+xe+'</span><span class="mm-h-search-result-label">'+j(nn)+"</span></a></li>"}A+="</ul></div>",U.innerHTML=A,U.hidden=!1,vn&&(vn.hidden=!1)}},D=function(v){if(!U)return"";vn&&(vn.hidden=!0);var A=v.trim();if(A.length<2)return M(),"";var N=A.toLowerCase(),nn=Xn.filter(function(Sn){return Sn.label.toLowerCase().indexOf(N)!==-1||Sn.q.toLowerCase().indexOf(N)!==-1}).slice(0,4),Z="";Z+='<ul class="mm-h-search-list">',Z+='<li><a class="mm-h-search-result mm-h-search-result-primary" href="/busca?q='+encodeURIComponent(A)+'" data-recent="1"><span class="mm-h-search-result-icon">'+me+'</span><span class="mm-h-search-result-label">Buscar por <strong>&ldquo;'+j(A)+'&rdquo;</strong></span><span class="mm-h-search-result-arrow" aria-hidden="true">&rarr;</span></a></li>';for(var ln=0;ln<nn.length;ln++){var bn=nn[ln];Z+='<li><a class="mm-h-search-result" href="/busca?q='+encodeURIComponent(bn.q)+'" data-recent="1"><span class="mm-h-search-result-icon">'+me+'</span><span class="mm-h-search-result-label">'+j(bn.label)+"</span></a></li>"}return Z+="</ul>",A.length>=3&&(Z+='<div class="mm-h-search-products-section" data-q="'+j(A)+'"><span class="mm-h-search-sug-label">Produtos</span><div class="mm-h-search-products-grid mm-h-search-products-loading"><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div></div></div>'),U.innerHTML=Z,U.hidden=!1,A},L=function(v){var A=D(v);!A||A.length<3||C(A).then(function(N){if(w){var nn=(w.value||"").trim();if(nn===A&&N!==null){var Z=U&&U.querySelector('.mm-h-search-products-section[data-q="'+A.replace(/"/g,'\\"')+'"]');if(Z){var ln=Z.querySelector(".mm-h-search-products-grid");if(ln){if(ln.classList.remove("mm-h-search-products-loading"),!N||N.length===0){Z.innerHTML='<span class="mm-h-search-sug-label">Nenhum produto encontrado para &ldquo;'+j(A)+"&rdquo;</span>";return}for(var bn="",Sn=0;Sn<N.length;Sn++)bn+=I(N[Sn]);ln.innerHTML=bn}}}}})};var U=document.getElementById("mm-h-search-results"),vn=document.getElementById("mm-h-search-suggestions"),Xn=[{label:"Mesa de jantar",q:"mesa de jantar"},{label:"Mesa de centro",q:"mesa de centro"},{label:"Rack para TV",q:"rack"},{label:"Guarda-roupas",q:"guarda-roupas"},{label:"Cristaleira",q:"cristaleira"},{label:"Aparador",q:"aparador"},{label:"Buffet",q:"buffet"},{label:"Painel para TV",q:"painel"},{label:"Cabeceira",q:"cabeceira"},{label:"Cômoda",q:"comoda"},{label:"Estante",q:"estante"},{label:"Home theater",q:"home theater"}],$n="mm_recent_searches",me='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',xe='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',ye="mm_search_cache_v1",ge=600*1e3,ve=20,ne=null,Zn=null;if(w){w.addEventListener("input",function(){clearTimeout(Zn);var v=w.value;Zn=setTimeout(function(){!v||v.trim().length<2?M():L(v)},300)}),U&&U.addEventListener("click",function(v){var A=v.target.closest&&v.target.closest("a[data-recent]");if(A){var N=A.getAttribute("href").split("q=")[1];N&&f(decodeURIComponent(N.replace(/\+/g," ")))}});var te=B&&B.querySelector(".mm-h-search-form");te&&te.addEventListener("submit",function(){f((w.value||"").trim())})}Y&&Y.addEventListener("click",function(){M()})}var Rn=document.getElementById("mm-h-drawer"),be=document.getElementById("mm-h-drawer-close"),oe=Rn&&Rn.querySelector(".mm-h-drawer-backdrop");function we(){Rn&&(Rn.hidden=!1,document.body.style.overflow="hidden",setTimeout(function(){var s=Rn.querySelector(".mm-h-drawer-close");s&&s.focus()},100))}function se(){!Rn||Rn.hidden||(Rn.classList.add("mm-h-drawer-closing"),document.body.style.overflow="",setTimeout(function(){Rn.hidden=!0,Rn.classList.remove("mm-h-drawer-closing");var s=document.getElementById("mm-h-burger");s&&s.focus()},320))}var Jn=document.getElementById("mm-h-burger");if(Jn&&Jn.addEventListener("click",we),be&&be.addEventListener("click",se),oe&&oe.addEventListener("click",se),document.addEventListener("keydown",function(s){s.key==="Escape"&&Rn&&!Rn.hidden&&se()}),Rn){var le=0;Rn.addEventListener("touchstart",function(s){le=s.touches[0].clientX},{passive:!0}),Rn.addEventListener("touchend",function(s){var f=s.changedTouches[0].clientX;le-f>80&&se()},{passive:!0})}Rn&&Rn.querySelectorAll(".mm-h-drawer-section summary").forEach(function(s){s.addEventListener("click",function(f){f.preventDefault();var j=s.parentElement,pn=j.querySelector("ul");if(pn)if(j.open)pn.style.maxHeight=pn.scrollHeight+"px",pn.style.opacity="1",requestAnimationFrame(function(){pn.style.maxHeight="0",pn.style.opacity="0",pn.style.paddingTop="0",pn.style.paddingBottom="0"}),setTimeout(function(){j.open=!1,pn.style.maxHeight="",pn.style.opacity="",pn.style.paddingTop="",pn.style.paddingBottom=""},300);else{j.open=!0;var zn=pn.scrollHeight;pn.style.maxHeight="0",pn.style.opacity="0",pn.style.paddingTop="0",pn.style.paddingBottom="0",requestAnimationFrame(function(){pn.style.maxHeight=zn+"px",pn.style.opacity="1",pn.style.paddingTop="",pn.style.paddingBottom=""}),setTimeout(function(){pn.style.maxHeight="",pn.style.opacity=""},320)}})});var _n=document.getElementById("mm-h-cart"),ae=null,Hn=null;function pe(){var s=document.querySelector(".carrinho-rapido-ctn");return s||document.querySelector('#cart-preview-area > div.z-\\[9999\\], #cart-preview-area > div[class*="z-[9999]"]')}function ke(s){return!!(s&&s.className&&s.className.indexOf("z-[9999]")!==-1)}var Be='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';function Fe(s){if(s){var f=s.querySelector(".close-car-fast");f&&!f.innerHTML.trim()&&(f.innerHTML=Be,f.setAttribute("aria-label","Fechar carrinho"),f.setAttribute("role","button"),f.setAttribute("tabindex","0"))}}function Ie(s){!s||s.dataset.mmCloseWired||(s.dataset.mmCloseWired="1",s.addEventListener("click",function(f){var j=f.target;j&&j.closest&&(j.closest(".close-car-fast")||j.closest(".icon-arrow-bottom"))&&(f.preventDefault(),f.stopPropagation(),rn())},!0),s.addEventListener("keydown",function(f){(f.key==="Enter"||f.key===" ")&&f.target&&f.target.closest&&f.target.closest(".close-car-fast")&&(f.preventDefault(),rn())}))}function De(s){if(s){if(!s.dataset.mmLifted){s.dataset.mmLifted="1",s.style.position="fixed",s.style.display="block",s.style.zIndex="200";for(var f=s.parentElement;f&&!f.classList.contains("header-middle");)f.style.zIndex="auto",f.style.transform="none",f.style.filter="none",f.style.isolation="auto",f=f.parentElement}Ie(s),Fe(s)}}var Ve=[{href:"/rack-atenas-cor-naturalle-largura-220-cm",name:"Rack Atenas 220cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5519/am-2501-mavaular-rack-atenas-220-naturalle-lado.jpg?ims=200x200",priceFrom:"R$ 1.615,49",priceTo:"R$ 1.032,30"},{href:"/rack-atenas-cor-naturalle-largura-180-cm",name:"Rack Atenas 180cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5419/am-2501-mavaular-rack-atenas-180-naturalle.jpg?ims=200x200",priceFrom:"R$ 1.688,71",priceTo:"R$ 942,31"},{href:"/buffet-arcus-cor-naturalle-largura-92-cm",name:"Buffet Arcus 92cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5439/am-2501-mavaular-arcus-02-pts-naturalle.jpg?ims=200x200",priceFrom:"R$ 1.359,09",priceTo:"R$ 807,30"},{href:"/buffet-atenas-cor-naturalle",name:"Buffet Atenas",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/4237/am-2502-mavaular-buffet-atenas-naturalle.jpg?ims=200x200",priceFrom:"R$ 2.124,07",priceTo:"R$ 1.032,30"}],fe='<svg viewBox="0 0 48 48" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 14 8 20v22a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V20l-4-6z"/><path d="M8 20h32"/><path d="M32 28a8 8 0 0 1-16 0"/></svg>';function jn(){try{if(typeof Zord<"u"&&typeof Zord.get=="function"){var s=Zord.get("cart.size");if(typeof s=="number"&&s>0)return s;if(typeof s=="string"&&/^\d+$/.test(s)&&parseInt(s,10)>0)return parseInt(s,10)}}catch{}var f=document.querySelector("#cart-preview-area .item-ctn, .carrinho-container .item-ctn");if(f){var j=(f.textContent||"").trim();if(j&&/\d/.test(j)){var pn=parseInt(j.replace(/\D/g,""),10);if(!isNaN(pn))return pn}}var zn=document.querySelector(".carrinho-rapido-ctn");if(zn){var Mn=0;if(zn.querySelectorAll(".cart-item").forEach(function(a){a.closest(".mm-cart-empty-wrapper")||Mn++}),Mn>0)return Mn}return 0}function Se(s){if(jn()!==0||!s)return!1;var f=s.querySelector(".box-empty-cart");if(!f)return!1;var j=getComputedStyle(f);return!(j.display==="none"||j.visibility==="hidden")}function Te(s){if(!s)return!1;var f=jn();if(f===0)return!1;var j=0;return s.querySelectorAll(".cart-item").forEach(function(pn){pn.closest(".mm-cart-empty-wrapper")||j++}),j>0}function Ne(s){if(s){s.classList.remove("mm-cart-has-empty-enhancement");var f=s.querySelector(":scope > .mm-cart-empty-wrapper");f&&f.remove()}}function l(s){if(s){var f=s.querySelector(".content-cart");if(f){if(Te(f)){Ne(f);return}var j=f.querySelectorAll(".cart-item").length===0;if(!(!Se(f)&&!(j&&jn()===0))&&!f.querySelector(":scope > .mm-cart-empty-wrapper")){var pn=document.createElement("div");pn.className="mm-cart-empty-wrapper";for(var zn="",Mn=0;Mn<Ve.length;Mn++){var a=Ve[Mn];zn+='<a class="mm-cart-suggestion-card" href="'+a.href+'"><span class="mm-cart-suggestion-thumb"><img src="'+a.img+'" alt="" loading="lazy" width="80" height="80"/></span><span class="mm-cart-suggestion-body"><span class="mm-cart-suggestion-name">'+a.name+'</span><span class="mm-cart-suggestion-price"><span class="mm-cart-suggestion-price-from">'+a.priceFrom+'</span><span class="mm-cart-suggestion-price-to">'+a.priceTo+"</span></span></span></a>"}pn.innerHTML='<div class="mm-cart-empty-hero"><div class="mm-cart-empty-icon">'+fe+'</div><h3 class="mm-cart-empty-title">Seu carrinho está vazio</h3><p class="mm-cart-empty-copy">Dê uma olhada nos móveis que nossos clientes mais amam.</p></div><div class="mm-cart-suggestions"><span class="mm-cart-suggestions-label">Você pode gostar de</span><div class="mm-cart-suggestions-grid">'+zn+"</div></div>",f.classList.add("mm-cart-has-empty-enhancement"),f.appendChild(pn)}}}}function k(s){try{document.querySelectorAll("#cart-preview-area .item-ctn, .carrinho-container .item-ctn, .item-ctn").forEach(function(f){f.textContent="0"})}catch{}s&&l(s)}window.__mmForceEmptyCartState=k;function T(s,f){try{if(typeof Zord>"u"||!Zord.checkout||typeof Zord.checkout.atualizaPreview!="function"){f();return}var j=jn();if(j===0){f();return}if(s.querySelector(".cart-item")){f();return}Zord.checkout.atualizaPreview();var pn=Date.now(),zn=2e3;(function Mn(){if(s.querySelector(".cart-item")){f();return}if(Date.now()-pn>=zn){f();return}setTimeout(Mn,50)})()}catch{f()}}function h(){if(window.innerWidth<=767){var s=document.querySelector("#cart-preview-area a.link-cart")||document.querySelector('#cart-preview-area a[href*="/checkout/cart"]');if(s){let Mn=function(p){!p||p.dataset.mmCloseWired||(p.dataset.mmCloseWired="1",p.addEventListener("click",function(d){var C=d.target;if(!(!C||!C.closest)){var I=C.closest('[class*="text-error-700"]');if(!I)for(var M=C,D=0;D<4&&M&&M!==p;D++){if((M.textContent||"").trim()==="Fechar"){I=M;break}M=M.parentElement}I&&(d.preventDefault(),d.stopImmediatePropagation(),p.classList.remove("translate-x-[0]"),p.classList.add("translate-x-[100%]"),delete p.dataset.mmUserOpened,document.body.style.overflow="")}},!0))},a=function(){var p=document.querySelector('#cart-preview-area > div[class*="z-[9999]"]');p&&(p.dataset.mmUserOpened="1",p.className.indexOf("translate-x-[0]")===-1&&(p.classList.remove("translate-x-[100%]"),p.classList.add("translate-x-[0]")),Mn(p))};document.documentElement.dataset.mmCartOpening="1",s.dataset.mmBypass="1",s.click(),delete s.dataset.mmBypass,setTimeout(a,120),setTimeout(a,380),setTimeout(a,700),setTimeout(function(){delete document.documentElement.dataset.mmCartOpening},800);return}window.location.href="/checkout/cart";return}var f=pe();if(f){T(f,function(){q(f)});return}var j=0,pn=14,zn=!1;(function Mn(){if(j++,f=pe(),f){T(f,function(){q(f)});return}if(!zn&&j>=2){zn=!0;try{typeof Zord<"u"&&Zord.checkout&&typeof Zord.checkout.atualizaPreview=="function"&&Zord.checkout.atualizaPreview()}catch{}}j<pn?setTimeout(Mn,200):window.location.href="/checkout/cart"})()}function q(s){var f=ke(s);f||(De(s),Fe(s)),l(s);var j=s.querySelector(".content-cart");if(j&&!j.dataset.mmObserved){j.dataset.mmObserved="1";var pn=new MutationObserver(function(){l(s)});pn.observe(j,{childList:!0,subtree:!0,attributes:!1})}if(f){s.classList.remove("translate-x-[100%]"),s.classList.add("translate-x-[0]");var zn=s.querySelector('.group.cursor-pointer, [class*="text-error-700"]');zn&&!zn.dataset.mmWired&&(zn.dataset.mmWired="1",zn.addEventListener("click",function(Mn){Mn.preventDefault(),Mn.stopPropagation(),rn()},!0))}else s.classList.add("mm-drawer-open");!f&&!Hn&&(Hn=document.createElement("div"),Hn.id="mm-h-cart-scrim",Hn.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:150;opacity:0;transition:opacity 320ms;",Hn.addEventListener("click",rn),document.body.appendChild(Hn),requestAnimationFrame(function(){Hn.style.opacity="1"})),document.body.style.overflow="hidden"}function rn(){var s=pe();if(s&&(ke(s)?(s.classList.remove("translate-x-[0]"),s.classList.add("translate-x-[100%]")):s.classList.remove("mm-drawer-open")),Hn){Hn.style.opacity="0";var f=Hn;setTimeout(function(){f&&f.parentNode&&f.parentNode.removeChild(f)},320),Hn=null}document.body.style.overflow=""}_n&&_n.addEventListener("click",function(s){s.preventDefault(),h()}),window.innerWidth<=767&&(function s(){var f=document.querySelector('#cart-preview-area > [class*="z-[9999]"]');if(!f){setTimeout(s,500);return}if(!f.dataset.mmGuardWired){f.dataset.mmGuardWired="1";var j=new MutationObserver(function(){if(f.className.indexOf("translate-x-[0]")===-1){delete f.dataset.mmUserOpened;return}document.documentElement.dataset.mmCartOpening||f.dataset.mmUserOpened||(f.classList.remove("translate-x-[0]"),f.classList.add("translate-x-[100%]"))});j.observe(f,{attributes:!0,attributeFilter:["class"]})}})(),document.addEventListener("click",function(s){var f=s.target.closest('#cart-preview-area a.link-cart, header.ra-header > .header-bottom a[href*="/checkout/cart"], header.ra-header > .header-bottom a[href*="carrinho"]');if(f){if(f.dataset.mmBypass)return;s.preventDefault(),s.stopPropagation(),h()}},!0);var sn=document.querySelector("header.ra-header > .header-bottom");sn&&sn.addEventListener("click",function(s){var f=s.target.closest('a[href*="carrinho"], a[href*="/checkout/cart"], [class*="carrinho"]');f&&(s.preventDefault(),s.stopPropagation(),h())},!0),document.addEventListener("keydown",function(s){s.key==="Escape"&&Hn&&rn()});var mn=document.getElementById("mm-h-cart-count"),yn=document.getElementById("mm-h-cart");function wn(){if(mn){var s=jn();s>0?(mn.textContent=s>99?"99+":String(s),mn.hidden=!1):mn.hidden=!0,yn&&yn.setAttribute("aria-label","Carrinho, "+s+" "+(s===1?"item":"itens"));var f=pe();f&&f.dataset.mmLifted&&l(f)}}window.addEventListener("reactItemAddedToCart",wn),typeof jQuery<"u"&&(jQuery(document).on("reactItemAddedToCart",wn),jQuery(document).ajaxComplete(function(s,f,j){j&&j.url&&j.url.indexOf("checkout/cart")!==-1&&setTimeout(wn,150)})),setTimeout(wn,500),setTimeout(wn,2e3),setTimeout(wn,5e3);function An(){var s=document.querySelector("#cart-preview-area .item-ctn, .carrinho-container .item-ctn");if(!(!s||s.dataset.mmObserved)){s.dataset.mmObserved="1";var f=new MutationObserver(wn);f.observe(s,{childList:!0,characterData:!0,subtree:!0})}}An(),setTimeout(An,1e3),setTimeout(An,3e3);var Tn=new MutationObserver(function(s){for(var f=0;f<s.length;f++)for(var j=s[f].addedNodes,pn=0;pn<j.length;pn++){var zn=j[pn];if(zn.nodeType===1){var Mn=zn.classList&&zn.classList.contains("popup-adicionado-ao-carrinho")||zn.querySelector&&zn.querySelector(".popup-adicionado-ao-carrinho");if(Mn){setTimeout(wn,120),setTimeout(wn,700);return}}}});Tn.observe(document.body,{childList:!0,subtree:!0});var gn=-1;setInterval(function(){var s=jn();s!==gn&&(gn=s,wn())},1e3);var Ln=0,In=!1,ee=24;function Vn(){var s=window.scrollY,f=s-Ln;s>ee&&f>0?i.classList.add("is-compact"):(s<=ee||f<0)&&i.classList.remove("is-compact"),Ln=s,In=!1}window.addEventListener("scroll",function(){In||(requestAnimationFrame(Vn),In=!0)},{passive:!0})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",F):F()})(),(function(){if(!document.getElementById("mm-org-schema")){var G=document.querySelector('.logo img, header img[alt*="logo" i], header img[alt*="Madeira" i]'),_=G&&G.getAttribute("src")||"";_&&_.indexOf("http")!==0&&(_="https://www.madeiramania.com.br"+_);var W={"@context":"https://schema.org","@type":"OnlineStore","@id":"https://www.madeiramania.com.br/#organization",name:"Madeira Mania",url:"https://www.madeiramania.com.br",description:"Loja online de móveis com preços abaixo dos marketplaces. Racks, mesas, cristaleiras, sofás, camas e estantes com entrega para todo o Brasil. Até 12x sem juros ou 7% de desconto no PIX.",sameAs:["https://www.instagram.com/madeiramaniabr/","https://www.facebook.com/madeiramaniabr/","https://www.reclameaqui.com.br/empresa/madeira-mania-comercio-de-moveis-ltda/","https://www.youtube.com/@madeiramaniabr","https://www.tiktok.com/@madeiramaniabr"],contactPoint:[{"@type":"ContactPoint",telephone:"+55-11-91529-9488",contactType:"customer service",availableLanguage:"Portuguese"},{"@type":"ContactPoint",url:"https://wa.me/5511915299488",contactType:"customer service",description:"WhatsApp"}],hasMerchantReturnPolicy:{"@type":"MerchantReturnPolicy",applicableCountry:"BR",returnPolicyCategory:"https://schema.org/MerchantReturnFiniteReturnWindow",merchantReturnDays:7,returnMethod:"https://schema.org/ReturnByMail"}};_&&_.indexOf("http")===0&&(W.logo=_);var y=document.createElement("script");y.type="application/ld+json",y.id="mm-org-schema",y.textContent=JSON.stringify(W),document.head.appendChild(y)}})(),(function F(){F._retries=(F._retries||0)+1;var G=document.querySelector("#produto-react-app");if(!G||!G.querySelector(".informacoes-compra-produto")){F._retries<30&&setTimeout(F,500);return}if((function(){var y=G.querySelector("#container-swiper"),i=G.querySelector(".swiper-pagination");if(!y||!i)return;var c=i.querySelectorAll(".swiper-pagination-bullet");if(c.length<2)return;var g=G.querySelector(".gallery-main");if(g)for(var b=g.querySelectorAll(".button-prev, .button-next"),x=0;x<b.length;x++)b[x].style.display="none";var P=document.createElement("div");P.id="mm-gallery-counter",P.style.cssText=["position: absolute","top: 12px","left: 12px","background: rgba(255,255,255,0.85)","color: #333","font-size: 12px","font-weight: 500","padding: 3px 10px","border-radius: 12px","z-index: 10","pointer-events: none","font-family: -apple-system, BlinkMacSystemFont, sans-serif","letter-spacing: 0.5px"].join(";"),g&&(g.style.position="relative",g.appendChild(P));function m(){var H=i.querySelector(".swiper-pagination-bullet-active"),V=i.querySelectorAll(".swiper-pagination-bullet");if(!(!H||!V.length)){var B=Array.prototype.indexOf.call(V,H)+1;P.textContent=B+" / "+V.length}}m();var O=new MutationObserver(m);O.observe(i,{subtree:!0,attributes:!0,attributeFilter:["class"]})})(),(function(){var y=G.querySelector(".avaliacoes");if(y){for(var i=document.querySelectorAll("script:not([src])"),c=0,g=0,b=0;b<i.length;b++){var x=i[b].textContent;if(!(x.indexOf("Zord.avaliacoes")===-1&&x.indexOf("produtoAvaliacoes")===-1)){var P=x.match(/produtoAvaliacoes\s*:\s*(\d+)/),m=x.match(/\bnota\s*:\s*(?:Number\()?([\d.]+)/);if(P&&(c=parseInt(P[1],10)),m&&(g=parseFloat(m[1])),c>0)break}}if(c===0){y.style.display="none";return}for(var O=(g%1===0,g.toFixed(1)),H="",V=1;V<=5;V++)V<=Math.floor(g)||V-g<1&&V-g>0?H+='<span style="color:#f5a623;font-size:14px;">&#9733;</span>':H+='<span style="color:#ddd;font-size:14px;">&#9733;</span>';var B=c===1?"avaliação":"avaliações";y.innerHTML='<a href="#avaliacoes" style="display:inline-flex;align-items:center;gap:4px;text-decoration:none;color:#555;font-size:13px;">'+H+' <span style="font-weight:600;color:#1a1a1a;">'+O+'</span> <span style="color:#777;">('+c+" "+B+")</span></a>",y.style.display="",y.style.marginTop="4px"}})(),(function(){var y=G.querySelector("h1");if(y){var i=y.parentElement.querySelector(".text-secondary-700.text-xs");if(i){var c=y.textContent.toLowerCase().replace(/\s+/g," ").trim(),g=i.textContent.toLowerCase().replace(/\s+/g," ").trim(),b=g.split(/[\s\-:,]+/).filter(function(P){return P.length>2}),x=b.filter(function(P){return c.indexOf(P)!==-1});x.length>=b.length*.6&&(i.style.display="none")}}})(),(function(){var y=G.querySelector(".informacoes-compra-produto");if(!y||document.getElementById("mm-action-row"))return;var i=y.querySelector(".salvar-favoritos"),c=y.querySelector(".exibe-botao-whatsapp"),g=y.querySelector(".compartilhar-produto");if(!i&&!c&&!g)return;var b=document.createElement("div");b.id="mm-action-row";function x(){var K=document.createElementNS("http://www.w3.org/2000/svg","svg");K.setAttribute("width","18"),K.setAttribute("height","18"),K.setAttribute("viewBox","0 0 24 24"),K.setAttribute("fill","none"),K.setAttribute("stroke","currentColor"),K.setAttribute("stroke-width","2"),K.setAttribute("stroke-linecap","round"),K.setAttribute("stroke-linejoin","round");var kn=document.createElementNS("http://www.w3.org/2000/svg","path");return kn.setAttribute("d","M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"),K.appendChild(kn),K}function P(){var K=document.createElementNS("http://www.w3.org/2000/svg","svg");K.setAttribute("width","18"),K.setAttribute("height","18"),K.setAttribute("viewBox","0 0 24 24"),K.setAttribute("fill","none"),K.setAttribute("stroke","currentColor"),K.setAttribute("stroke-width","2"),K.setAttribute("stroke-linecap","round"),K.setAttribute("stroke-linejoin","round");var kn=document.createElementNS("http://www.w3.org/2000/svg","path");return kn.setAttribute("d","M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"),K.appendChild(kn),K}if(i){var m=document.createElement("div");m.className="salvar-favoritos";var O=document.createElement("button");O.setAttribute("aria-label","Favoritar"),O.appendChild(P()),O.addEventListener("click",function(){var K=i.querySelector("button");K&&K.click()}),m.appendChild(O),b.appendChild(m),i.style.cssText+=";position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;"}if(c&&(c.style.display="none"),g){var H=document.createElement("div");H.className="compartilhar-produto";var V=document.createElement("button");V.setAttribute("aria-label","Compartilhar"),V.appendChild(x()),V.addEventListener("click",function(){var K=g.querySelector("button");K&&K.click()}),H.appendChild(V),b.appendChild(H),g.style.cssText+=";position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;"}var B=y.querySelector("#area-comprar");if(B){for(var Y=B,J=B.nextElementSibling;J;){var w=window.getComputedStyle(J).position;if(w==="fixed"||w==="sticky")Y=J,J=J.nextElementSibling;else break}Y.parentNode.insertBefore(b,Y.nextSibling)}else y.appendChild(b)})(),(function(){var y=G.querySelector(".comprar-fixo.area-compra-float");if(!(!y||y.querySelector("#mm-sticky-old-price"))){var i=G.querySelector(".informacoes-compra-produto");if(i){var c=i.querySelector(".line-through");if(c){var g=c.textContent.trim(),b=y.querySelector(".price-fixed");if(b){var x=document.createElement("span");x.id="mm-sticky-old-price",x.textContent=g,x.style.cssText=["text-decoration: line-through","color: #999","font-size: 11px","display: block","line-height: 1.2","margin-bottom: 1px"].join(";"),b.insertBefore(x,b.firstChild)}}}}})(),(function(){var y=G.querySelector(".informacoes-compra-produto");if(!(!y||document.getElementById("mm-trust-badges"))){var i=y.querySelector("#area-comprar");if(i){var c=document.createElement("div");c.id="mm-trust-badges",c.style.cssText=["display: flex","justify-content: center","align-items: center","flex-wrap: wrap","gap: 6px 10px","padding: 8px 0","margin-top: 2px"].join(";");var g=[{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',text:"Compra Segura"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',text:"Troca 7 dias"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10" stroke="#4b664a"/></svg>',text:"Reclame Aqui"}],b="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:#777;white-space:nowrap;";g.forEach(function(P,m){var O=document.createElement("span");if(O.style.cssText=b,O.innerHTML=P.icon+" "+P.text,c.appendChild(O),m<g.length-1){var H=document.createElement("span");H.textContent="|",H.style.cssText="color:#ddd;font-size:10px;",c.appendChild(H)}});for(var x=i.nextElementSibling;x&&window.getComputedStyle(x).position==="fixed";)x=x.nextElementSibling;x?y.insertBefore(c,x):y.appendChild(c)}}})(),(function(){var y=G.querySelector(".informacoes-compra-produto");if(!(!y||document.getElementById("mm-whatsapp-cta"))){var i=(document.querySelector("#prod-nome")||{}).value||"",c=(document.querySelector("#prod-valor")||{}).value||"",g=window.location.origin+window.location.pathname+(/^#derivacao=/.test(window.location.hash)?window.location.hash:""),b="5511915299488",x="";c&&(x=parseFloat(c).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}));var P="Olá! Tenho interesse no "+i.trim();x&&(P+=" ("+x+")"),P+=". "+g;var m="https://api.whatsapp.com/send?phone="+b+"&text="+encodeURIComponent(P),O=document.createElement("a");O.id="mm-whatsapp-cta",O.href=m,O.target="_blank",O.rel="noopener noreferrer";var H='<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';O.innerHTML=H+"<span>Compre pelo WhatsApp</span>";var V=document.getElementById("mm-action-row"),B=document.getElementById("mm-trust-badges"),Y=V||B;Y&&Y.parentNode===y&&y.insertBefore(O,Y.nextElementSibling)}})(),(function(){var y=G.querySelector(".informacoes-compra-produto");if(!(!y||document.getElementById("mm-stock-indicator"))){for(var i=10,c=document.querySelectorAll("script:not([src])"),g=-1,b=0;b<c.length;b++){var x=c[b].textContent,P=x.match(/"qtde_estoque"\s*:\s*(\d+)/);if(P){g=parseInt(P[1],10);break}}var m=g-i;if(!(m<1||m>9)){var O=document.createElement("div");O.id="mm-stock-indicator",O.style.cssText=["display: flex","align-items: center","gap: 6px","padding: 8px 12px","background: #fff8f0","border: 1px solid #fde0c2","border-radius: 8px","font-size: 13px","color: #c65d00","font-weight: 500","margin-top: 4px"].join(";");var H=m===1?"unidade":"unidades";O.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c65d00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>Restam apenas <strong>'+m+"</strong> "+H+" em estoque";var V=y.firstElementChild;V&&V.parentNode.insertBefore(O,V.nextElementSibling)}}})(),(function(){if(!document.getElementById("mm-trust-block")){var y=window.innerWidth>=769,i=document.createElement("div");i.id="mm-trust-block",i.style.cssText=["background: #f7f8f7","display: flex","align-items: center","justify-content: center","gap: "+(y?"40px":"10px"),"padding: "+(y?"14px 24px":"12px 16px"),y?"flex-direction: row":"flex-direction: column",y?"border-top: 1px solid #e8ece8":"border-radius: 10px",y?"border-bottom: 1px solid #e8ece8":"",y?"margin: 0":"margin-top: 10px"].filter(Boolean).join(";");var c=[{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',label:"Atendimento",desc:"Seg à Sex 8h-18h"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',label:"Garantia",desc:"12 meses fabricação"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',label:"Trocas",desc:"Até 7 dias"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',label:"Frete",desc:"Todo o Brasil"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',label:"12x sem juros",desc:"No cartão"}],g="display:flex;align-items:center;gap:8px;",b="font-size:13px;font-weight:600;color:#1a1a1a;line-height:1.2;",x="font-size:11px;color:#777;line-height:1.2;";if(c.forEach(function(V){var B=document.createElement("div");B.style.cssText=g,B.innerHTML=V.icon+'<div><div style="'+b+'">'+V.label+'</div><div style="'+x+'">'+V.desc+"</div></div>",i.appendChild(B)}),y){var P=document.querySelector("#pagina-produto-react-app");if(P&&P.nextSibling)P.parentNode.insertBefore(i,P.nextSibling);else{var m=document.querySelector(".main-produto");m&&m.appendChild(i)}}else{var O=G.querySelector(".informacoes-compra-produto"),H=O?O.querySelector(".calculo-frete"):null;H?H.parentNode.insertBefore(i,H.nextElementSibling):O&&O.appendChild(i)}}})(),(function(){var y=G.querySelector(".informacoes-compra-produto");if(!y||document.getElementById("mm-inline-payments"))return;var i=y.querySelector(".form-pag-link");if(!i)return;var c=parseFloat(i.getAttribute("data-valor"))||0,g=parseFloat(i.getAttribute("data-valor-pix"))||0;if(c<=0)return;for(var b=[],x=1;x<=12;x++)b.push({vezes:x,valor:(c/x).toFixed(2).replace(".",",")});function P(vn){return"R$ "+vn.toFixed(2).replace(".",",")}var m=c-g,O=document.createElement("div");O.id="mm-inline-payments",O.style.cssText=["padding: 12px 0","border-top: 1px solid #f0f0f0","margin-top: 4px"].join(";");var H=window.innerWidth>=769,V="display:flex;align-items:center;gap:6px;padding:"+(H?"2px":"4px")+" 0;font-size:13px;color:#444;",B="width:5px;height:5px;border-radius:50%;background:#4b664a;flex-shrink:0;",Y='<div style="'+V+'"><span style="'+B+'"></span><span><strong style="color:#1a1a1a;">PIX: '+P(g)+"</strong>"+(m>0?' <span style="color:#2e7d32;font-size:12px;font-weight:600;">(economize '+P(m)+")</span>":"")+"</span></div>";if(H)O.innerHTML=Y+'<button id="mm-toggle-parcelas" style="background:none;border:none;color:#4b664a;font-size:13px;font-weight:500;padding:2px 0 0;cursor:pointer;display:flex;align-items:center;gap:4px;">Ver todas as parcelas <span style="font-size:10px;">&#9660;</span></button><div id="mm-more-parcelas" style="display:none;"></div>';else{for(var J="",w=0;w<3;w++)J+='<div style="'+V+'"><span style="'+B+'"></span><span>'+b[w].vezes+"x de R$ "+b[w].valor+" sem juros</span></div>";O.innerHTML=Y+J+'<button id="mm-toggle-parcelas" style="background:none;border:none;color:#4b664a;font-size:13px;font-weight:500;padding:6px 0 0;cursor:pointer;display:flex;align-items:center;gap:4px;">Ver todas as parcelas <span style="font-size:10px;">&#9660;</span></button><div id="mm-more-parcelas" style="display:none;"></div>'}for(var K="",kn=H?0:3,an=kn;an<12;an++)K+='<div style="'+V+'"><span style="'+B+'"></span><span>'+b[an].vezes+"x de R$ "+b[an].valor+" sem juros</span></div>";var Cn=i.closest("div");Cn&&(Cn.parentNode.insertBefore(O,Cn),i.style.display="none");var X=document.getElementById("mm-more-parcelas");X&&(X.innerHTML=K);var U=document.getElementById("mm-toggle-parcelas");U&&X&&U.addEventListener("click",function(){var vn=X.style.display!=="none";X.style.display=vn?"none":"block",U.innerHTML=vn?'Ver todas as parcelas <span style="font-size:10px;">&#9660;</span>':'Ver menos <span style="font-size:10px;">&#9650;</span>'})})(),(function(){var y=document.querySelector(".recomendacao-ctn-0.accordion"),i=document.querySelector(".descricao-produto.accordion");if(!(!y||!i)){var c=y.parentNode;if(!(!c||c!==i.parentNode)){var g=Array.prototype.slice.call(c.children),b=g.indexOf(y),x=g.indexOf(i);b<x&&c.insertBefore(i,y)}}})(),(function(){var y=document.querySelector("#cep");if(!y)return;var i="mm_cep",c=y.closest(".area-calculo");if(c){var g=c.querySelector("button");g&&g.addEventListener("click",function(){var H=y.value.replace(/\D/g,"");if(H.length===8)try{localStorage.setItem(i,H)}catch{}})}var b=null;try{b=localStorage.getItem(i)}catch{}if(!b||b.length!==8||y.value.replace(/\D/g,"").length>0)return;var x=b.substring(0,5)+"-"+b.substring(5);function P(H,V){H.focus();try{H.setSelectionRange(0,(H.value||"").length)}catch{}try{document.execCommand("delete")}catch{}try{document.execCommand("insertText",!1,V)}catch{}}function m(){var H=y.closest(".calculo-frete");return!!(H&&/R\$\s*\d/.test(H.innerText))}function O(H){H<=0||m()||(P(y,x),setTimeout(function(){if(!m()){var V=y.closest(".area-calculo"),B=V&&V.querySelector("button:not([disabled])");B&&B.click(),setTimeout(function(){m()||O(H-1)},2e3)}},2500))}setTimeout(function(){O(3)},600)})(),(function(){for(var y=document.querySelectorAll('.exibe-botao-whatsapp a[href*="whatsapp"]'),i=0;i<y.length;i++){var c=y[i].getAttribute("href");c&&c.indexOf("null")!==-1&&y[i].setAttribute("href",c.replace(/\s*null\s*/g," ").replace(/\s{2,}/g," "))}var g=document.querySelector(".exibe-botao-whatsapp");if(g){var b=new MutationObserver(function(){var x=g.querySelector('a[href*="whatsapp"]');x&&x.href.indexOf("null")!==-1&&x.setAttribute("href",x.getAttribute("href").replace(/\s*null\s*/g," ").replace(/\s{2,}/g," "))});b.observe(g,{subtree:!0,attributes:!0,attributeFilter:["href"]})}})(),(function(){var y=G.querySelector(".informacoes-compra-produto");if(!(!y||document.getElementById("mm-envio-badge"))){for(var i=!1,c=G.querySelectorAll(".tag-produto .text-tag, .tag-produto"),g=0;g<c.length;g++)if(c[g].textContent.toLowerCase().indexOf("envio")!==-1){i=!0;break}if(!i)for(var b=document.querySelectorAll("script:not([src])"),x=0;x<b.length;x++){var P=b[x].textContent.match(/"qtde_estoque"\s*:\s*(\d+)/);if(P){parseInt(P[1],10)>10&&(i=!0);break}}if(i){var m=document.createElement("div");m.id="mm-envio-badge",m.style.cssText=["display: inline-flex","align-items: center","gap: 6px","padding: 4px 0","font-size: 13px","color: #1a1a1a","margin-top: 4px"].join(";"),m.innerHTML='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c65d00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span><strong style="color:#1a1a1a;">Pronta entrega</strong> <span style="color:#777;font-weight:400;">·</span> <span style="color:#555;font-weight:400;">Enviamos em 24h</span></span>';var O=y.firstElementChild;O&&O.nextElementSibling&&O.parentNode.insertBefore(m,O.nextElementSibling)}}})(),(function(){for(var y=G.querySelectorAll(".tag-1.tag-produto"),i=0;i<y.length;i++){var c=y[i].textContent.trim();(c.indexOf("%")!==-1||c.indexOf("OFF")!==-1)&&(y[i].style.display="none")}})(),(function(){for(var y=document.querySelectorAll('a[href*="avaliacoes"], a[href="#avaliacoes"]'),i=0;i<y.length;i++)y[i].addEventListener("click",function(c){c.preventDefault();var g=document.querySelector("#avaliacoes")||document.querySelector(".container-avaliacoes");g&&g.scrollIntoView({behavior:"smooth",block:"start"})})})(),(function(){var y=G.querySelector("h1");if(!(!y||document.getElementById("mm-brand"))){var i=document.querySelector("#prod-marca");if(!(!i||!i.value||i.value.trim()==="")){var c=document.createElement("span");c.id="mm-brand",c.style.cssText="display:block;font-size:13px;color:#777;font-weight:400;margin-top:2px;",c.textContent="por "+i.value.trim();var g=y.parentElement;if(g){var b=y.nextElementSibling;b?g.insertBefore(c,b):g.appendChild(c)}}}})(),(function(){var y=document.getElementById("mm-trust-badges");if(y){for(var i=y.querySelectorAll("span"),c=0;c<i.length;c++)if(i[c].textContent.indexOf("Reclame")!==-1){var g=document.querySelector('footer .reclame-aqui a, footer a[href*="reclameaqui"]'),b=g?g.href:"https://www.reclameaqui.com.br/empresa/madeira-mania-comercio-de-moveis-ltda/";i[c].innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10" stroke="#4b664a"/></svg> <a href="'+b+'" target="_blank" rel="noopener" style="color:#777;text-decoration:none;">RA Verificada</a>'}}})(),(function(){var y=G.querySelector(".informacoes-compra-produto");if(y){var i=y.querySelector(".calculo-frete");if(i){y.style.cssText+=";display:flex !important;flex-direction:column !important;",i.style.cssText+=";order:20 !important;";var c=document.getElementById("mm-trust-block");c&&(c.style.cssText+=";order:30 !important;")}}})(),(function(){var y=G.querySelector(".informacoes-compra-produto");if(!(!y||document.getElementById("mm-mini-specs"))){var i=document.querySelector(".descricao-produto"),c={};if(i)for(var g=i.querySelectorAll("td"),b=0;b<g.length-1;b+=2){var x=g[b].textContent.trim().toLowerCase(),P=g[b+1].textContent.trim();x.indexOf("largura")!==-1&&(c.largura=P),x.indexOf("altura")!==-1&&(c.altura=P),x.indexOf("profundidade")!==-1&&(c.profundidade=P),x.indexOf("material")!==-1&&(c.material=P),x.indexOf("dobradi")!==-1&&(c.dobradicas=P),(x.indexOf("pes")!==-1||x.indexOf("pés")!==-1)&&(c.pes=P)}if(!(!c.largura&&!c.material)){var m=[];if(c.material&&m.push(c.material),c.dobradicas&&m.push("Dobradiças "+c.dobradicas),c.pes&&m.push("Pés: "+c.pes),c.largura&&m.push(c.largura+" × "+(c.altura||"")+" × "+(c.profundidade||"")),m.length!==0){var O=document.createElement("div");O.id="mm-mini-specs",O.style.cssText="padding:8px 0;border-top:1px solid #f0f0f0;margin-top:4px;";var H="";m.forEach(function(B){H+='<div style="display:flex;align-items:center;gap:6px;padding:2px 0;font-size:13px;color:#555;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polyline points="20 6 9 17 4 12"/></svg><span>'+B+"</span></div>"}),O.innerHTML=H;var V=y.querySelector("#area-comprar");V&&y.insertBefore(O,V)}}}})(),(function(){if(window.innerWidth<769||document.getElementById("mm-desktop-sticky"))return;var y=G.querySelector(".informacoes-compra-produto");if(!y)return;var i=y.querySelector(".line-through"),c=(document.querySelector("#prod-valor-principal")||{}).value,g=(document.querySelector("#prod-valor")||{}).value,b=(document.querySelector("#prod-nome")||{}).value||"",x=b.split(" - ")[0]||b;if(!c)return;var P=i?i.textContent.trim():"",m=parseFloat(c).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),O=g?parseFloat(g).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}):"",H=g?(parseFloat(g)/12).toFixed(2).replace(".",","):"",V=document.createElement("div");V.id="mm-desktop-sticky",V.style.cssText=["position: fixed","top: -60px","left: 0","width: 100%","height: 56px","background: #ffffff","border-bottom: 1px solid #e8ece8","box-shadow: 0 2px 8px rgba(0,0,0,0.06)","z-index: 100","display: flex","align-items: center","justify-content: center","padding: 0 24px","transition: top 0.25s ease","font-family: -apple-system, BlinkMacSystemFont, sans-serif"].join(";");var B="display:flex;align-items:center;gap:16px;max-width:1200px;width:100%;",Y="font-size:14px;font-weight:500;color:#1a1a1a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:300px;",J="display:flex;align-items:center;gap:8px;margin-left:auto;",w="text-decoration:line-through;color:#999;font-size:12px;",K="font-size:15px;font-weight:600;color:#1a1a1a;",kn="font-size:12px;color:#666;",an="display:inline-flex;align-items:center;justify-content:center;padding:8px 20px;background:#4b664a;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer;white-space:nowrap;";V.innerHTML='<div style="'+B+'"><span style="'+Y+'">'+x+'</span><div style="'+J+'">'+(P?'<span style="'+w+'">'+P+"</span>":"")+'<span style="'+K+'">'+m+' <small style="font-weight:400;font-size:11px;color:#666;">PIX</small></span>'+(H?'<span style="'+kn+'">12x R$ '+H+"</span>":"")+'</div><button id="mm-desktop-sticky-btn" style="'+an+'">Comprar</button></div>',document.body.appendChild(V);var Cn=document.getElementById("mm-desktop-sticky-btn");Cn&&Cn.addEventListener("click",function(){var vn=G.querySelector(".btn-comprar");vn&&vn.click()});var X=y.querySelector("#area-comprar");if(!X)return;function U(){var vn=X.getBoundingClientRect();V.style.top=vn.bottom<0?"0px":"-60px"}window.addEventListener("scroll",U,{passive:!0}),U()})(),(function(){var y=[".selos-seguranca",".formas-pagto"];y.forEach(function(i){var c=document.querySelector("footer "+i);c&&c.classList.contains("closed")&&(c.classList.remove("closed"),c.classList.add("open"))})})(),window.innerWidth>=769){var _=G.querySelector(".informacoes-compra-produto");_&&(_.style.setProperty("gap","12px","important"),_.style.setProperty("row-gap","12px","important"))}document.body.classList.add("mm-ready")})();var nt=document.currentScript;(function F(){F._retries=(F._retries||0)+1;var G=document.querySelector("#produto-react-app");if(!G||!G.querySelector(".informacoes-compra-produto")){F._retries<30&&setTimeout(F,500);return}if(!document.getElementById("mm-product-schema")){var _=G.querySelector("h1"),W=_?_.textContent.trim():"";if(W){var y=document.querySelector('link[rel="canonical"]'),i=y?y.href:location.href.split("?")[0],c=document.querySelector("#prod-marca"),g=c?c.value.trim():"";!g&&window.dataLayer&&window.dataLayer[0]&&(g=window.dataLayer[0].brand||"");var b=G.querySelector(".form-pag-link"),x=document.querySelector("#prod-valor-principal"),P=document.querySelector("#prod-valor"),m=0,O=0;b&&(m=parseFloat(b.getAttribute("data-valor-pix"))||0,O=parseFloat(b.getAttribute("data-valor"))||0),!O&&P&&(O=parseFloat(P.value)||0),!m&&x&&(m=parseFloat(x.value)||0);var H=m>0?m:O;if(!(H<=0)){var V="";window.dataLayer&&window.dataLayer[0]&&(V=window.dataLayer[0].sku||"");var B="",Y="";window.dataLayer&&window.dataLayer[0]&&(B=window.dataLayer[0].category||"",Y=window.dataLayer[0].category2||"");for(var J=document.querySelector("#prod-deposito"),w=J?J.value==="1":!0,K=[],kn=G.querySelectorAll(".gallery-main img, #block-imagem img"),an=0;an<kn.length;an++){var Cn=kn[an].getAttribute("src")||kn[an].getAttribute("data-src")||"";Cn&&Cn.indexOf("http")===0&&K.indexOf(Cn)===-1&&K.push(Cn)}if(K.length===0){var X=document.querySelector('meta[property="og:image"]');X&&X.content&&K.push(X.content)}var U=document.querySelector('meta[name="description"]'),vn=U?U.content.trim():"";if(!vn){var Xn=document.querySelector(".descricao-produto .accordion-content p");Xn&&(vn=Xn.textContent.trim().substring(0,500))}for(var $n=0,me=0,xe=document.querySelectorAll("script:not([src])"),ye=0;ye<xe.length;ye++){var ge=xe[ye].textContent;if(!(ge.indexOf("Zord.avaliacoes")===-1&&ge.indexOf("produtoAvaliacoes")===-1)){var ve=ge.match(/produtoAvaliacoes\s*:\s*(\d+)/),ne=ge.match(/\bnota\s*:\s*(?:Number\()?([\d.]+)/);ve&&($n=parseInt(ve[1],10)),ne&&(me=parseFloat(ne[1]))}}var Zn={"@context":"https://schema.org","@type":"Product",name:W,url:i,image:K,description:vn,sku:V,brand:{"@type":"Brand",name:g||"Madeira Mania"},offers:{"@type":"Offer",url:i,price:H.toFixed(2),priceCurrency:"BRL",availability:w?"https://schema.org/InStock":"https://schema.org/OutOfStock",itemCondition:"https://schema.org/NewCondition",seller:{"@type":"Organization",name:"Madeira Mania"},hasMerchantReturnPolicy:{"@type":"MerchantReturnPolicy",applicableCountry:"BR",returnPolicyCategory:"https://schema.org/MerchantReturnFiniteReturnWindow",merchantReturnDays:7,returnMethod:"https://schema.org/ReturnByMail"},shippingDetails:{"@type":"OfferShippingDetails",shippingDestination:{"@type":"DefinedRegion",addressCountry:"BR"},deliveryTime:{"@type":"ShippingDeliveryTime",handlingTime:{"@type":"QuantitativeValue",minValue:1,maxValue:3,unitCode:"DAY"},transitTime:{"@type":"QuantitativeValue",minValue:5,maxValue:20,unitCode:"DAY"}}}}};O>0&&(Zn.offers.priceSpecification=[{"@type":"UnitPriceSpecification",price:m>0?m.toFixed(2):H.toFixed(2),priceCurrency:"BRL",name:"PIX"},{"@type":"UnitPriceSpecification",price:(O/12).toFixed(2),priceCurrency:"BRL",name:"12x sem juros",referenceQuantity:{"@type":"QuantitativeValue",value:12,unitCode:"MON"}}]),$n>0&&me>0&&(Zn.aggregateRating={"@type":"AggregateRating",ratingValue:me.toFixed(1),bestRating:"5",worstRating:"1",reviewCount:String($n)}),B&&(Zn.category=B+(Y?" > "+Y:""));var te=document.createElement("script");te.type="application/ld+json",te.id="mm-product-schema",te.textContent=JSON.stringify(Zn),document.head.appendChild(te),nt&&nt.parentNode&&nt.parentNode.removeChild(nt)}}}})();var et=document.currentScript;(function F(){F._retries=(F._retries||0)+1;var G=document.querySelector("#produto-react-app"),_=G?G.querySelector("h1"):null;if(!_){F._retries<30&&setTimeout(F,500);return}if(!document.getElementById("mm-breadcrumb-schema")){var W=[],y=1;W.push({"@type":"ListItem",position:y++,name:"Home",item:"https://www.madeiramania.com.br"});var i=document.querySelectorAll('.breadcrumb a, nav[aria-label*="breadcrumb" i] a, .migalha a, .breadcrumb-item a');if(i.length>0)for(var c=0;c<i.length;c++){var g=i[c],b=g.textContent.trim(),x=g.href;!b||b.toLowerCase()==="home"||b.toLowerCase()==="início"||!x||x==="#"||W.push({"@type":"ListItem",position:y++,name:b,item:x})}else if(window.dataLayer&&window.dataLayer[0]){var P=window.dataLayer[0].category||"",m=window.dataLayer[0].category2||"";P&&W.push({"@type":"ListItem",position:y++,name:P,item:"https://www.madeiramania.com.br/"+P.toLowerCase().replace(/\s+/g,"-").replace(/[àáâã]/g,"a").replace(/[éêë]/g,"e").replace(/[íî]/g,"i").replace(/[óôõ]/g,"o").replace(/[úû]/g,"u").replace(/ç/g,"c")}),m&&m!==P&&W.push({"@type":"ListItem",position:y++,name:m,item:"https://www.madeiramania.com.br/"+m.toLowerCase().replace(/\s+/g,"-").replace(/[àáâã]/g,"a").replace(/[éêë]/g,"e").replace(/[íî]/g,"i").replace(/[óôõ]/g,"o").replace(/[úû]/g,"u").replace(/ç/g,"c")})}if(W.push({"@type":"ListItem",position:y,name:_.textContent.trim()}),!(W.length<2)){var O={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:W},H=document.createElement("script");H.type="application/ld+json",H.id="mm-breadcrumb-schema",H.textContent=JSON.stringify(O),document.head.appendChild(H),et&&et.parentNode&&et.parentNode.removeChild(et)}}})();var tt=document.currentScript;(function F(){F._retries=(F._retries||0)+1;var G=document.querySelector(".descricao-produto");if(!G){F._retries<30&&setTimeout(F,500);return}if(!document.getElementById("mm-faq-section")){var _=[{q:"Como funciona a entrega de móveis?",a:"Enviamos para todo o Brasil por transportadora especializada em móveis. O prazo varia de 5 a 20 dias úteis dependendo da sua região. Você pode calcular o frete e prazo exato informando seu CEP na página do produto, acima do botão de compra."},{q:"O móvel vem montado ou precisa montar?",a:"A maioria dos móveis é enviada desmontada para garantir segurança no transporte. Cada produto inclui manual de montagem com instruções passo a passo e todas as ferragens necessárias. Produtos de madeira maciça geralmente exigem apenas encaixe simples de pés ou portas."},{q:"Vocês entregam em apartamento e zona rural?",a:"Sim, entregamos em apartamentos e áreas urbanas em todo o Brasil. Para zonas rurais, a disponibilidade depende da região — consulte informando seu CEP. A entrega é realizada até a portaria ou térreo do edifício."},{q:"E se o produto chegar com defeito?",a:"Você tem 7 dias para solicitar troca ou devolução a partir do recebimento, conforme o Código de Defesa do Consumidor (Art. 49). Basta entrar em contato pelo nosso WhatsApp com fotos do defeito. Todos os produtos possuem garantia de 12 meses contra defeitos de fabricação."},{q:"Quais as formas de pagamento?",a:"Aceitamos PIX com 7% de desconto (processado na hora), cartão de crédito em até 12x sem juros (Visa, Mastercard, Elo, American Express) e boleto bancário. O pagamento via PIX agiliza o despacho do seu pedido."},{q:"O preço de vocês é realmente menor que nos marketplaces?",a:"Sim. Como vendemos direto ao consumidor, sem comissões de marketplace, nossos preços são consistentemente 10% a 25% menores que MadeiraMadeira, Mercado Livre e outros. Compare o mesmo produto pelo código SKU do fabricante e confira a diferença."},{q:"Como funciona a garantia?",a:"Todos os produtos possuem garantia de 12 meses contra defeitos de fabricação, além do direito de arrependimento de 7 dias garantido pelo CDC. Móveis de madeira maciça, com os cuidados adequados, possuem durabilidade superior a 30 anos."}];if(!document.getElementById("mm-faq-styles")){var W=document.createElement("style");W.id="mm-faq-styles",W.textContent=["#mm-faq-section button:focus-visible { outline: 2px solid #4b664a; outline-offset: 2px; border-radius: 4px; }","#mm-faq-section button:active { opacity: 0.7; }","@media (prefers-reduced-motion: reduce) { #mm-faq-section * { transition: none !important; } }"].join(`
`),document.head.appendChild(W)}var y=document.createElement("div");y.id="mm-faq-section",y.style.cssText=["margin: 24px 0","padding: 0 8px"].join(";");var i=document.createElement("h2");i.style.cssText=["font-size: 18px","font-weight: 700","color: #1a1a1a","margin-bottom: 16px","padding-bottom: 8px","border-bottom: 2px solid #4b664a"].join(";"),i.textContent="Perguntas Frequentes",y.appendChild(i);var c=document.createElement("div");c.style.cssText=["display: flex","flex-direction: column","gap: 0"].join(";"),_.forEach(function(m,O){var H=document.createElement("div");H.style.cssText="border-bottom: 1px solid #e8ece8;";var V=document.createElement("button");V.setAttribute("aria-expanded","false"),V.setAttribute("aria-controls","mm-faq-answer-"+O),V.style.cssText=["display: flex","justify-content: space-between","align-items: center","width: 100%","padding: 16px 0","background: none","border: none","cursor: pointer","text-align: left","font-size: 15px","font-weight: 600","color: #1a1a1a","line-height: 1.4","font-family: inherit","-webkit-tap-highlight-color: transparent"].join(";");var B=document.createElement("span");B.textContent=m.q,B.style.cssText="flex: 1; padding-right: 12px;";var Y=document.createElement("span");Y.textContent="+",Y.style.cssText=["font-size: 20px","font-weight: 300","color: #4b664a","flex-shrink: 0","transition: transform 0.2s ease","width: 24px","text-align: center"].join(";"),V.appendChild(B),V.appendChild(Y);var J=document.createElement("div");J.id="mm-faq-answer-"+O,J.setAttribute("role","region"),J.setAttribute("aria-labelledby","mm-faq-q-"+O),V.id="mm-faq-q-"+O,J.style.cssText=["max-height: 0","overflow: hidden","transition: max-height 0.3s ease, padding 0.3s ease","font-size: 14px","line-height: 1.6","color: #444"].join(";");var w=document.createElement("div");w.style.cssText="padding: 0 0 14px 0;",w.textContent=m.a,J.appendChild(w),V.addEventListener("click",function(){var K=V.getAttribute("aria-expanded")==="true";K?(J.style.maxHeight="0px",Y.textContent="+",V.setAttribute("aria-expanded","false")):(J.style.maxHeight=J.scrollHeight+"px",Y.textContent="−",V.setAttribute("aria-expanded","true"))}),V.addEventListener("touchstart",function(){V.style.opacity="0.7"},{passive:!0}),V.addEventListener("touchend",function(){V.style.opacity="1"},{passive:!0}),H.appendChild(V),H.appendChild(J),c.appendChild(H)}),y.appendChild(c);var g=document.querySelector(".produtos-relacionados"),b=document.querySelector(".container-avaliacoes");if(g&&g.nextSibling?g.parentNode.insertBefore(y,g.nextSibling):b?b.parentNode.insertBefore(y,b):G.parentNode.appendChild(y),!document.getElementById("mm-faq-schema")){var x={"@context":"https://schema.org","@type":"FAQPage",mainEntity:_.map(function(m){return{"@type":"Question",name:m.q,acceptedAnswer:{"@type":"Answer",text:m.a}}})},P=document.createElement("script");P.type="application/ld+json",P.id="mm-faq-schema",P.textContent=JSON.stringify(x),document.head.appendChild(P)}tt&&tt.parentNode&&tt.parentNode.removeChild(tt)}})(),(function F(){F._retries=(F._retries||0)+1;var G=document.querySelector("#produto-react-app");if(!G||!G.querySelector("h1")){F._retries<30&&setTimeout(F,500);return}if(!document.querySelector('meta[property="og:title"]')){var _=G.querySelector("h1"),W=_?_.textContent.trim():document.title,y=document.querySelector('meta[name="description"]'),i=y?y.content.trim():"";if(!i){var c=document.querySelector(".descricao-produto .accordion-content p");c&&(i=c.textContent.trim().substring(0,200))}i||(i=W+" - Compre online na Madeira Mania com até 12x sem juros ou 7% de desconto no PIX.");var g=document.querySelector('link[rel="canonical"]'),b=g?g.href:location.href.split("?")[0],x="",P=G.querySelector(".gallery-main img, #block-imagem img");if(P&&(x=P.getAttribute("src")||P.getAttribute("data-src")||""),!x){var m=document.querySelector('meta[property="og:image"]');m&&(x=m.content)}var O=G.querySelector(".form-pag-link"),H=O&&parseFloat(O.getAttribute("data-valor-pix"))||0;if(H>0){var V="R$ "+H.toFixed(2).replace(".",",");i.indexOf("R$")===-1&&(i=i.replace(/\.$/,"")+" | A partir de "+V+" no PIX.")}i.length>200&&(i=i.substring(0,197)+"...");var B=[{property:"og:type",content:"product"},{property:"og:title",content:W},{property:"og:description",content:i},{property:"og:url",content:b},{property:"og:site_name",content:"Madeira Mania"},{property:"og:locale",content:"pt_BR"}];x&&(B.push({property:"og:image",content:x}),B.push({property:"og:image:width",content:"600"}),B.push({property:"og:image:height",content:"600"})),B.push({name:"twitter:card",content:"summary_large_image"}),B.push({name:"twitter:title",content:W}),B.push({name:"twitter:description",content:i}),x&&B.push({name:"twitter:image",content:x}),B.forEach(function(Y){var J=document.createElement("meta");Y.property&&J.setAttribute("property",Y.property),Y.name&&J.setAttribute("name",Y.name),J.setAttribute("content",Y.content),document.head.appendChild(J)})}})(),(function(F){"use strict";if(!document.getElementById("produto-react-app")&&!document.getElementById("pagina-produto-react-app"))return;const G="3.0.0";window.innerWidth>=1500&&F(document).ready(function(){function y(){F(".gallery-main .swiper-slide img").each(function(){var i=this,c=F(this).closest(".swiper-slide"),g=c.closest(".swiper");function b(){var x=i.naturalWidth,P=i.naturalHeight;x&&P&&x===P&&g.css({"max-width":x+"px",overflow:"hidden"})}i.complete?b():i.addEventListener("load",b)})}y()}),window._variacoesMagazordCarregado&&(console.log(`%c⚠️ Variações Magazord v${G} - Substituindo instância anterior`,"color: #ff9800; font-weight: bold"),window.GerenciadorVariacoesPillsMagazord&&F(".product-variations-pills-container").remove()),window._variacoesMagazordCarregado=G,console.log(`%c🚀 Variações Magazord v${G} (dataProduct) - Inicializando...`,"color: #2196f3; font-weight: bold");const _={formatoNome:{separador:" - ",separadorTipoValor:": ",exibirNomeCompleto:!1,primeiraParte:"nome_base"},labels:{ALTURA:"Altura",LARGURA:"Largura",ILUMINACAO:"Iluminação",ILUMINAÇÃO:"Iluminação",PROFUNDIDADE:"Profundidade",COR:"Cor",ACABAMENTO:"Acabamento",TAMANHO:"Tamanho",PORTAS:"Número de Portas",ESPELHO:"Espelho",GAVETAS:"Gavetas",MODELO:"Modelo",MATERIAL:"Material",LUGARES:"Lugares",FORMATO:"Formato"},variacoesComImagem:["COR","ACABAMENTO"],ignorarPalavras:[],selectors:{areaProdutosSugeridos:".sugestoes-cores",areaVariacoes:".derivacoes-produto .area-derivacoes",containerProduto:".info-produto, .box-info-produto, main",subtituloProduto:".informacoes-compra-produto .text-secondary-700.text-xs"},retry:{maxTentativas:10,intervaloMs:500,usarMutationObserver:!0},debug:!0,performance:{useRequestAnimationFrame:!0,debounceDelay:150}};class W{constructor(){this.variacoes={},this.produtoAtualId=null,this.produtos=[],this.tentativasDeCarregamento=0,this.observer=null,this.inicializado=!1}init(){this.log("🎯 Gerenciador de Variações Magazord v3 (dataProduct)","info"),this.log("🎨 Swatches de imagem para cores + Pills para outras variações","info"),this.esperarDOMPronto()}esperarDOMPronto(){if(typeof jQuery>"u"){setTimeout(()=>this.esperarDOMPronto(),100);return}F(document).ready(()=>{this.log("✅ DOM pronto! Aguardando dataProduct...","success"),this.esperarDataProduct()})}esperarDataProduct(){typeof dataProduct<"u"&&dataProduct.listaProdutosSugeridos?(this.log("✅ dataProduct encontrado!","success"),this.tentarCarregar()):(this.log("⏳ Aguardando dataProduct...","info"),setTimeout(()=>this.esperarDataProduct(),300))}tentarCarregar(){this.tentativasDeCarregamento++,this.log(`
🔄 Tentativa ${this.tentativasDeCarregamento}/${_.retry.maxTentativas}`,"info"),this.carregarProdutos()?(this.processarVariacoes(),this.renderizarVariacoes(),this.bindEventos(),this.inicializado=!0,this.log(`
🎉 Inicialização concluída com sucesso!`,"success"),_.retry.usarMutationObserver&&this.observarMudancasDOM()):this.tentativasDeCarregamento<_.retry.maxTentativas?setTimeout(()=>this.tentarCarregar(),_.retry.intervaloMs):this.log("❌ Número máximo de tentativas atingido.","error")}observarMudancasDOM(){this.log("ℹ️ MutationObserver desativado - dados carregados via dataProduct","info")}log(i,c="log",g=null){if(!_.debug)return;const b={info:"color: #2196f3; font-weight: bold",success:"color: #4caf50; font-weight: bold",warning:"color: #ff9800; font-weight: bold",error:"color: #f44336; font-weight: bold",log:"color: #666"};console.log(`%c${i}`,b[c]||b.log),g&&console.log(g)}carregarProdutos(){if(this.produtos=[],typeof dataProduct>"u"||!dataProduct.listaProdutosSugeridos)return this.log("❌ dataProduct ou listaProdutosSugeridos não encontrado","error"),!1;const i=dataProduct.listaProdutosSugeridos,c=dataProduct.produto,g=dataProduct.hostImagem||"";if(this.log(`📦 Encontrados ${i.length} produtos sugeridos + produto atual`,"info"),c&&c.complemento){const b=c.midia_path&&c.midia_arquivo_nome?`${g}/${c.midia_path}${c.midia_arquivo_nome}`:"",x={id:c.derivacao_id||c.produto_id,nomeCompleto:c.complemento.trim(),estoque:c.qtde_estoque,url:c.link?`/${c.link}`:"",imagem:b,imagemData:b,elemento:null,variacoes:{},nomeBase:"",nomeExibicao:"",isAtual:!0};this.produtoAtualId=x.id,this.extrairVariacoesDoNome(x),this.produtos.push(x),this.log(`   ✓ Produto atual: "${x.nomeCompleto}"`,"success")}return i.forEach((b,x)=>{const P=b.complemento||b.nome||"";if(!P)return;const m=b.derivacao_id||b.produto_id;if(m===this.produtoAtualId){this.log(`   ⏭️ Ignorando duplicata: "${P}"`,"info");return}const O=b.midia_path&&b.midia_arquivo_nome?`${g}/${b.midia_path}${b.midia_arquivo_nome}`:"",H={id:m||x,nomeCompleto:P.trim(),estoque:b.qtde_estoque,url:b.link?`/${b.link}`:"",imagem:O,imagemData:O,elemento:null,variacoes:{},nomeBase:"",nomeExibicao:"",isAtual:!1};this.extrairVariacoesDoNome(H),this.produtos.push(H),this.log(`   ✓ Sugerido: "${H.nomeCompleto}"`,"log")}),this.produtos.length===0?!1:(this.log("✅ Produtos carregados e processados:","success",this.produtos),!0)}normalizarSeparadores(i){const c=["–","—","−","‐","‑","⁃"];let g=i;return c.forEach(b=>{const x=new RegExp(`\\s${b}\\s`,"g");g=g.replace(x," - ")}),g}extrairVariacoesDoNome(i){const g=this.normalizarSeparadores(i.nomeCompleto).split(_.formatoNome.separador);this.log(`
📝 Processando: "${i.nomeCompleto}"`,"log"),_.formatoNome.primeiraParte==="nome_base"&&(i.nomeBase=g[0].trim(),g.shift()),g.forEach(b=>{const x=b.trim();if(x&&x.includes(_.formatoNome.separadorTipoValor)){const[P,...m]=x.split(_.formatoNome.separadorTipoValor),O=m.join(_.formatoNome.separadorTipoValor).trim(),H=this.normalizarTipo(P.trim());if(_.ignorarPalavras.includes(H))return;i.variacoes[H]=O,this.log(`   ✓ ${H}: ${O}`,"success")}}),i.nomeExibicao=_.formatoNome.exibirNomeCompleto?i.nomeCompleto:i.nomeBase||i.nomeCompleto,Object.keys(i.variacoes).length===0&&(i.variacoes.MODELO=i.nomeCompleto,i.nomeExibicao=i.nomeCompleto)}normalizarTipo(i){return i.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim()}processarVariacoes(){this.log(`
🔄 Processando variações...`,"info");const i=new Set;this.produtos.forEach(c=>{Object.keys(c.variacoes).forEach(g=>i.add(g))}),i.forEach(c=>{const g=new Set,b={};this.produtos.forEach(P=>{const m=P.variacoes[c];m&&(g.add(m),b[m]||(b[m]=[]),b[m].push(P))});const x=Array.from(g).sort();this.variacoes[c]={label:_.labels[c]||c,valores:x,produtosPorValor:b,usarImagem:_.variacoesComImagem.includes(c)},this.log(`   📊 ${c}: ${x.length} valor(es) único(s) → [${x.join(", ")}]`,x.length>1?"success":"warning")}),this.log("✅ Variações processadas:","success",this.variacoes)}renderizarVariacoes(){this.log(`
🎨 Renderizando variações...`,"info");let i=F(_.selectors.areaVariacoes);if(i.length===0&&(this.criarAreaVariacoes(),i=F(_.selectors.areaVariacoes)),Object.keys(this.variacoes).length===0)return;const c=F("<div>",{class:"product-variations-pills-container"});let g=0;if(Object.keys(this.variacoes).forEach(b=>{const x=this.variacoes[b];if(x.valores.length<=1){this.log(`⏭️ Ignorando "${b}" - apenas ${x.valores.length} valor(es)`,"info");return}if(x.usarImagem){const P=this.criarGrupoSwatches(b,x);c.append(P),g++}}),Object.keys(this.variacoes).forEach(b=>{const x=this.variacoes[b];if(!(x.valores.length<=1)&&!x.usarImagem){const P=this.criarGrupoPills(b,x);c.append(P),g++}}),g===0){this.log("ℹ️ Nenhuma variação com múltiplas opções - ocultando área","info"),i.closest(".derivacoes-produto").hide(),F(_.selectors.subtituloProduto).hide();return}_.performance.useRequestAnimationFrame&&window.requestAnimationFrame?requestAnimationFrame(()=>{i.empty().append(c),this.log(`✅ ${g} variação(ões) renderizada(s)!`,"success"),this.atualizarNomeProduto()}):(i.empty().append(c),this.log(`✅ ${g} variação(ões) renderizada(s)!`,"success"),this.atualizarNomeProduto())}criarAreaVariacoes(){const i=F(_.selectors.areaProdutosSugeridos);i.length>0?i.before('<div class="derivacoes-produto"><div class="area-derivacoes"></div></div>'):F("body").prepend('<div class="derivacoes-produto"><div class="area-derivacoes"></div></div>')}criarGrupoSwatches(i,c){const g=this.obterValorAtualParaTipo(i),b=F("<div>",{class:"variation-pill-group variation-pill-group--swatches","data-variacao-tipo":i,role:"group","aria-labelledby":`pill-label-${i.toLowerCase()}`}),x=F("<div>",{class:"variation-pill-label",id:`pill-label-${i.toLowerCase()}`});x.append(F("<span>").text(c.label+":")),x.append(F("<span>",{class:"variation-pill-label-value","data-label-value":i}).text(g||""));const P=F("<div>",{class:"variation-swatches-container",role:"radiogroup","aria-labelledby":`pill-label-${i.toLowerCase()}`});return c.valores.forEach((m,O)=>{const H=c.produtosPorValor[m],V=H.some(X=>X.estoque===void 0||X.estoque>0),B=m===g,Y=`pill-${i.toLowerCase()}-${this.sanitizeId(m)}`,J=this.encontrarMelhorProdutoParaSwatch(i,m,H);let w=null;J&&(w=J.imagemData||J.imagem);const K=F("<input>",{type:"radio",class:"variation-pill-input",id:Y,name:`variation-${i}`,value:m,"data-variacao-tipo":i,"data-produtos":JSON.stringify(H.map(X=>({id:X.id,url:X.url}))),checked:B,disabled:!V,"aria-label":`${c.label}: ${m}${V?"":" (Indisponível)"}`}),kn=F("<label>",{class:"variation-color-swatch-wrapper",for:Y,"data-tooltip":m}),an=F("<div>",{class:"variation-color-swatch","data-valor":m,tabindex:B?0:-1});w?an.append(F("<img>",{src:w,alt:m,class:"variation-color-swatch-image",loading:"lazy"})):an.css({"background-color":"#E5E7EB",display:"flex","align-items":"center","justify-content":"center","font-size":"14px",color:"#6B7280"}).text(m.charAt(0).toUpperCase());const Cn=F("<span>",{class:"variation-color-swatch-name",text:m,title:m});kn.append(an).append(Cn),P.append(K).append(kn)}),b.append(x).append(P),b}criarGrupoPills(i,c){const g=this.obterValorAtualParaTipo(i),b=F("<div>",{class:"variation-pill-group variation-pill-group--pills","data-variacao-tipo":i,role:"group","aria-labelledby":`pill-label-${i.toLowerCase()}`}),x=F("<div>",{class:"variation-pill-label",id:`pill-label-${i.toLowerCase()}`});x.append(F("<span>").text(c.label+":")),x.append(F("<span>",{class:"variation-pill-label-value","data-label-value":i}).text(g||""));const P=F("<div>",{class:"variation-pills-container",role:"radiogroup","aria-labelledby":`pill-label-${i.toLowerCase()}`});return c.valores.forEach((m,O)=>{const H=c.produtosPorValor[m],V=H.some(kn=>kn.estoque===void 0||kn.estoque>0),B=m===g,Y=`pill-${i.toLowerCase()}-${this.sanitizeId(m)}`,J=F("<input>",{type:"radio",class:"variation-pill-input",id:Y,name:`variation-${i}`,value:m,"data-variacao-tipo":i,"data-produtos":JSON.stringify(H.map(kn=>({id:kn.id,url:kn.url}))),checked:B,disabled:!V,"aria-label":`${c.label}: ${m}${V?"":" (Indisponível)"}`});let w=m;V||(w+=' <span class="variation-pill-badge">Indisponível</span>');const K=F("<label>",{class:"variation-pill",for:Y,html:w,"data-valor":m,tabindex:B?0:-1});P.append(J).append(K)}),b.append(x).append(P),b}sanitizeId(i){return i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}encontrarMelhorProdutoParaSwatch(i,c,g){const b=this.produtos.find(O=>O.isAtual||O.id===this.produtoAtualId);if(!b||g.length===0)return g[0]||null;if(g.length===1)return g[0];const x=b.variacoes;let P=null,m=-1;return g.forEach(O=>{let H=0;Object.keys(x).forEach(V=>{V!==i&&O.variacoes[V]===x[V]&&H++}),(O.imagemData||O.imagem)&&(H+=.5),H>m&&(m=H,P=O)}),this.log(`   🎯 Melhor produto para ${i}="${c}": score=${m}`,"log"),P||g[0]}obterValorAtualParaTipo(i){const c=this.produtos.find(g=>g.isAtual||g.id===this.produtoAtualId);return c?c.variacoes[i]:null}atualizarNomeProduto(){const i=this.produtos.find(g=>g.isAtual||g.id===this.produtoAtualId);if(!i)return;["h1.nome-produto",".product-name h1",".info-produto h1",'h1[itemprop="name"]',".box-info-produto h1"].forEach(g=>{const b=F(g);b.length>0&&b.text(i.nomeExibicao)})}bindEventos(){this.log(`
🔗 Vinculando eventos...`,"info"),F(document).on("change",".variation-pill-input",i=>{this.aoMudarVariacao(i)}),F(document).on("keydown",".variation-pills-container, .variation-swatches-container",i=>{this.handleKeyboardNavigation(i)}),F(document).on("click",".variation-pill, .variation-color-swatch-wrapper",function(){const i=F(this).is("label")?F("#"+F(this).attr("for")):F(this).closest("label").prev(".variation-pill-input");i.length&&!i.prop("disabled")&&F(this).closest(".variation-pill-group").addClass("is-loading")}),this.log("✅ Eventos vinculados","success")}handleKeyboardNavigation(i){const g=F(i.currentTarget).find(".variation-pill-input:not(:disabled)"),b=F(document.activeElement);if(!b.hasClass("variation-pill-input"))return;const x=g.index(b);let P=x;switch(i.key){case"ArrowRight":case"ArrowDown":i.preventDefault(),P=(x+1)%g.length;break;case"ArrowLeft":case"ArrowUp":i.preventDefault(),P=x-1<0?g.length-1:x-1;break;case"Home":i.preventDefault(),P=0;break;case"End":i.preventDefault(),P=g.length-1;break;default:return}g.eq(P).focus().prop("checked",!0).trigger("change")}aoMudarVariacao(i){const c=F(i.target),g=c.data("variacao-tipo"),b=c.val();this.log(`
🔄 Variação selecionada: ${g} = ${b}`,"info"),F(`.variation-pill-label-value[data-label-value="${g}"]`).text(b);const x={};F(".variation-pill-input:checked").each(function(){const m=F(this).data("variacao-tipo"),O=F(this).val();O&&(x[m]=O)}),this.log("📋 Seleção atual:","info",x);const P=this.encontrarProdutoPorVariacoes(x);if(P)this.log("✅ Produto encontrado!","success",P),this.navegarParaProduto(P);else{this.log("⚠️ Produto exato não encontrado, buscando melhor correspondência...","warning");const m=this.encontrarMelhorCorrespondencia(x);m?(this.log("✅ Melhor correspondência encontrada!","success",m),this.navegarParaProduto(m)):(this.log("❌ Nenhum produto correspondente encontrado","error"),F(".variation-pill-group").removeClass("is-loading"))}}encontrarProdutoPorVariacoes(i){return this.produtos.find(c=>Object.keys(i).every(g=>c.variacoes[g]===i[g]))}encontrarMelhorCorrespondencia(i){let c=null,g=0;return this.produtos.forEach(b=>{let x=0;Object.keys(i).forEach(P=>{b.variacoes[P]===i[P]&&x++}),x>g&&(g=x,c=b)}),g>0?c:null}navegarParaProduto(i){this.log(`
🚀 Navegando para: ${i.url}`,"info"),i.url?window.location.href=i.url:(this.log("❌ URL não encontrada para navegação","error"),F(".variation-pill-group").removeClass("is-loading"))}}setTimeout(function(){F(".product-variations-pills-container").remove(),F(".derivacoes-produto").remove();const y=new W;y.init(),window.GerenciadorVariacoesPillsMagazord=y},100)})(typeof jQuery<"u"?jQuery:window.jQuery||window.$),(function(G){"use strict";if(!G||G.MMStorefrontFlow)return;function _(i){return/(?:^|;\s*)zordEm=[^;\s]+/.test(String(i||""))}function W(i){return _(i)?"/checkout/onepage":"/checkout/identify"}function y(i){return i=i||{},i.hasPendingIntent===!0&&String(i.title||"").trim()==="Adicionado ao carrinho!"&&String(i.popupClass||"").indexOf("popup-adicionado-ao-carrinho")===-1&&i.hasSwal===!0}G.MMStorefrontFlow=Object.freeze({isLoggedCustomer:_,checkoutTarget:W,shouldPromoteVitrineSuccess:y})})(window),(function(){"use strict";var F=1e4,G=0,_=!1;function W(){return window.MMStorefrontFlow||null}function y(){var a=W();return a&&typeof a.isLoggedCustomer=="function"?a.isLoggedCustomer(document.cookie):/(?:^|;\s*)zordEm=[^;\s]+/.test(document.cookie||"")}function i(){var a=W();return a&&typeof a.checkoutTarget=="function"?a.checkoutTarget(document.cookie):y()?"/checkout/onepage":"/checkout/identify"}function c(){if(!(typeof jQuery>"u"&&typeof $>"u")){var a=typeof jQuery<"u"?jQuery:$;a(document).ajaxComplete(function(p,d,C){C.url&&C.url.indexOf("checkout/cart")!==-1&&setTimeout(function(){window.dispatchEvent(new CustomEvent("reactItemAddedToCart"))},100)})}}function g(){var a=document.documentElement;if(!a||a.dataset.mmVitrineFeedbackObserver==="1")return;a.dataset.mmVitrineFeedbackObserver="1",document.addEventListener("click",function(C){var I=C.target;!I||!I.closest||!I.closest(".btn-comprar-vitrine")||(G=Date.now()+F)},!0);function p(){if(!(_||Date.now()>G))for(var C=window.Swal,I=!!(C&&typeof C.fire=="function"),M=document.querySelectorAll('.swal2-popup, [role="alert"]'),D=0;D<M.length;D+=1){var L=M[D],v=L.querySelector(".swal2-title, h2"),A=v?v.textContent:"",N=W(),nn=N&&typeof N.shouldPromoteVitrineSuccess=="function"?N.shouldPromoteVitrineSuccess({hasPendingIntent:Date.now()<=G,title:A,popupClass:typeof L.className=="string"?L.className:"",hasSwal:I}):Date.now()<=G&&String(A||"").trim()==="Adicionado ao carrinho!"&&!L.classList.contains("popup-adicionado-ao-carrinho")&&I;if(nn){G=0,_=!0;try{C.close()}catch{}setTimeout(function(){var Z;try{Z=C.fire({title:"Produto adicionado ao seu carrinho!",text:"O que você deseja fazer a seguir?",icon:"success",width:600,showCloseButton:!0,showConfirmButton:!0,showDenyButton:!0,confirmButtonText:"Continuar comprando",denyButtonText:"Finalizar compra",confirmButtonColor:"#FFFFFF",denyButtonColor:"#27AE60",focusConfirm:!1,customClass:{popup:"popup-adicionado-ao-carrinho",icon:"icone-adicionado-ao-carrinho",title:"titulo-adicionado-ao-carrinho",actions:"actions-popup-add-carrinho",confirmButton:"botao-continuar-comprando",denyButton:"botao-finalizar-compra"}})}catch{_=!1;return}if(!Z||typeof Z.then!="function"){_=!1;return}Z.then(function(ln){_=!1,ln&&ln.isDenied&&(window.location.href="/checkout/cart")},function(){_=!1})},0);return}}}var d=new MutationObserver(function(){setTimeout(p,0)});d.observe(document.body||a,{childList:!0,subtree:!0})}function b(){var a=document.querySelector("#cart-preview-area .border-t.border-solid");if(!(!a||a.querySelector(".installment-total"))){var p=0,d=document.querySelectorAll("#cart-preview-area .cart-item");if(d.forEach(function(D){var L=parseFloat(D.getAttribute("data-item-price"))||0,v=parseInt(D.getAttribute("data-item-quantity"))||1;p+=L*v}),!(p<=0)){var C=(p/12).toFixed(2).replace(".",","),I=document.createElement("div");I.className="installment-total",I.textContent="ou 12x de R$ "+C;var M=a.querySelector(".valor-pix");M&&M.parentNode&&M.parentNode.insertBefore(I,M.nextSibling)}}}var x='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/></svg>',P='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',m='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>';function O(){b();var a=document.querySelectorAll("#cart-preview-area .cart-item, .content-cart .cart-item");a.forEach(function(p){if(!p.querySelector(".qty-btn-minus")){var d=p.querySelector(".qtd-value");if(d){var C=p.querySelector(".cart-remove-item"),I=C?C.getAttribute("data-id"):null;if(I){var M=p.querySelector(".prod-remove");M&&!d.contains(C)&&(d.appendChild(C),M.style.display="none");var D=d.parentElement,L=null;if(D)for(var v=0;v<D.children.length;v++){var A=D.children[v];if(A!==d&&A.classList&&A.classList.contains("valor")){L=A;break}}L&&!d.contains(L)&&d.appendChild(L);var N=parseInt(p.getAttribute("data-item-quantity"));if(!N||isNaN(N)){var nn=d.textContent.match(/(\d+)/);N=nn?parseInt(nn[1]):1}var Z=document.createElement("button");Z.className="qty-btn-minus",Z.type="button",Z.setAttribute("aria-label","Diminuir quantidade"),Z.innerHTML=x,Z.addEventListener("click",function(Bn){Bn.preventDefault(),Bn.stopPropagation();var Un=parseInt(ln.textContent)||1;if(Un<=1){var Wn=p.querySelector(".cart-remove-item");Wn&&Wn.click();return}wn(p,I,-1,ln,Z,bn)});var ln=document.createElement("span");ln.className="qty-display",ln.textContent=N;var bn=document.createElement("button");bn.className="qty-btn-plus",bn.type="button",bn.setAttribute("aria-label","Aumentar quantidade"),bn.innerHTML=P,bn.addEventListener("click",function(Bn){Bn.preventDefault(),Bn.stopPropagation(),wn(p,I,1,ln,Z,bn)});var Sn=document.createElement("div");Sn.className="mm-qty-wrap",Sn.appendChild(Z),Sn.appendChild(ln),Sn.appendChild(bn),d.insertBefore(Sn,d.firstChild),C&&(C.innerHTML=m,C.setAttribute("aria-label","Remover produto"))}}}})}function H(){document.addEventListener("click",function(a){var p=a.target.closest(".cart-remove-item");if(!(!p||!p.closest("#cart-preview-area"))){a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation();var d=p.getAttribute("data-id");if(d){var C=p.closest(".cart-item"),I=C&&C.querySelector(".prod-nome")?.textContent?.trim()||"este produto",M=I.length>50?I.substring(0,50)+"…":I,D=document.getElementById("mm-confirm-overlay");D&&D.remove();var L=document.createElement("div");L.id="mm-confirm-overlay",L.className="mm-confirm-overlay",L.innerHTML='<div class="mm-confirm-card"><p class="mm-confirm-title">Remover produto?</p><p class="mm-confirm-desc">'+M.replace(/&/g,"&amp;").replace(/</g,"&lt;")+'</p><div class="mm-confirm-actions"><button class="mm-confirm-btn mm-confirm-btn-cancel">Manter</button><button class="mm-confirm-btn mm-confirm-btn-delete">Remover</button></div></div>',document.body.appendChild(L),L.querySelector(".mm-confirm-btn-cancel").addEventListener("click",function(){L.remove()}),L.querySelector(".mm-confirm-btn-delete").addEventListener("click",function(){L.remove(),window.__mmDeleteItem&&C?window.__mmDeleteItem(C,d):typeof Zord<"u"&&Zord.checkout&&Zord.checkout.deleteItem(parseInt(d))}),L.addEventListener("click",function(v){v.target===L&&L.remove()})}}},!0)}function V(){document.addEventListener("click",function(a){var p=a.target;if(!(!p||!p.closest)){var d=p.closest(".finalizar-compra, .box-total-btn .checkout a, .box-total-btn .checkout .button");if(d){var C=d.closest("#cart-preview-area"),I=d.closest(".carrinho-rapido-ctn");if(!(!C&&!I)){if(y()){a.preventDefault(),a.stopPropagation(),window.location.href=i();return}C&&(a.preventDefault(),a.stopPropagation(),window.location.href="/checkout/identify")}}}},!0)}function B(){try{var a=document.querySelector("#resumo-compra");if(a){var p=a.querySelector(".txt-cupom");if(p){var d=(p.textContent||"").replace(/\s+/g,"").trim();if(/^[A-Za-z0-9][A-Za-z0-9._-]{1,}$/.test(d))return d.toUpperCase()}return""}}catch{}try{var C=JSON.parse(localStorage.getItem("mm_cart_snapshot")||"null");if(C&&C.couponCode)return String(C.couponCode).toUpperCase()}catch{}return""}function Y(a,p){var d="cep=&nenhumCreditoSelecionado=true&id="+encodeURIComponent(String(p))+"&area=main-cart",C=B();return C&&(d+="&cupom-desconto="+encodeURIComponent(C)),fetch("/checkout/cart?operation="+encodeURIComponent(a),{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"text/html,application/json,*/*","X-Requested-With":"XMLHttpRequest"},body:d}).then(function(I){if(!I.ok)throw new Error("HTTP "+I.status);return I.text()})}var J=1500,w=2e3,K="mm_cep",kn="mm_cart_snapshot",an=1800*1e3;function Cn(){try{var a=localStorage.getItem(K)||"",p=a.replace(/\D/g,"");if(p.length===8)return p}catch{}return null}function X(a){return!a||a.length!==8?"":a.slice(0,5)+"-"+a.slice(5)}function U(a){if(!a||a.length!==8)return w;var p=parseInt(a.slice(0,2),10);return isNaN(p)?w:p>=1&&p<=39||p>=80&&p<=99?J:w}function vn(){try{var a=localStorage.getItem(kn);if(!a)return null;var p=JSON.parse(a);return!p||!p.ts||Date.now()-p.ts>an?null:p}catch{return null}}function Xn(a){var p=[];return a.forEach(function(d){var C=(d.querySelector(".prod-nome a, .prod-nome")||{}).textContent||"",I=d.querySelector(".qty-display"),M=I?parseInt(I.textContent):parseInt(d.getAttribute("data-item-quantity"))||1;p.push(C.trim().slice(0,30)+"x"+M)}),p.sort().join("|")}function $n(a){if(!a||!Array.isArray(a.items))return"";var p=a.items.map(function(d){return(d.name||"").trim().slice(0,30)+"x"+(d.quantity||1)});return p.sort().join("|")}var me='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg>',xe='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18M6 6l12 12"/></svg>',ye=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];function ge(a){if(!a)return null;var p=String(a).match(/\d+/g);return!p||!p.length?null:Math.max.apply(null,p.map(Number))}function ve(a,p){for(var d=new Date(a.getTime()),C=0;C<p;){d.setDate(d.getDate()+1);var I=d.getDay();I!==0&&I!==6&&C++}return d}function ne(a){var p=new Date,d="dia "+a.getDate()+" de "+ye[a.getMonth()];return a.getFullYear()!==p.getFullYear()&&(d+=" de "+a.getFullYear()),d}function Zn(a){var p=ge(a);if(!p||p<1)return null;var d=ve(new Date,p);return"Receba até "+ne(d)}var te={},Rn=4e3,be={};function oe(a,p){if(!a||a.length!==8)return Promise.resolve(null);if(te[a])return te[a];if(!p){var d=be[a]||0;if(Date.now()-d<Rn)return Promise.resolve(null)}var C="cep="+encodeURIComponent(a.slice(0,5)+"-"+a.slice(5))+"&nenhumCreditoSelecionado=true&area=main-cart",I=B();I&&(C+="&cupom-desconto="+encodeURIComponent(I));var M=fetch("/checkout/cart?operation=atualizaValoresCarrinho",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"text/html,application/json,*/*","X-Requested-With":"XMLHttpRequest"},body:C}).then(function(D){if(!D.ok)throw new Error("HTTP "+D.status);return D.text()}).then(function(D){return be[a]=Date.now(),we(D)}).catch(function(){return null}).then(function(D){return delete te[a],D});return te[a]=M,M}function we(a){try{var p=new DOMParser().parseFromString(a,"text/html"),d=p.querySelector("#resumo-compra .frete-calculado")||p.querySelector(".frete-calculado");if(!d)return null;var C="",I=d.querySelector(".frete-location .city");I&&(C=I.textContent.trim());var M=null,D="",L="",v=d.querySelector(".info-frete-selec");if(v){var A=v.querySelector(".dias-entrega"),N=v.querySelector(".info-title span, .info-title");A&&(D=(A.textContent||"").trim()),N&&(L=(N.textContent||"").trim())}var nn=d.querySelector(".line.valor-frete .value, .value.valor-frete")||d.querySelector(".valor-compra-frete .value");if(nn){var Z=(nn.textContent||"").trim();if(/gr[áa]tis/i.test(Z))M=0;else{var ln=Z.match(/[\d.,]+/);if(ln){var bn=parseFloat(ln[0].replace(/\./g,"").replace(",","."));isNaN(bn)||(M=bn)}}}if(M==null){var Sn=d.querySelector(".servico-frete");if(Sn){var Bn=parseFloat(Sn.getAttribute("data-valor-frete")||"0");if(isNaN(Bn)||(M=Bn),L||(L=Sn.getAttribute("data-servico-frete")||""),!D){var Un=Sn.querySelector(".dias-entrega");Un&&(D=(Un.textContent||"").trim())}}}if(M==null)return null;var Wn=null,Yn=p.querySelector(".total-boleto .value, .totais-valor.total-boleto .value");if(Yn){var Fn=(Yn.textContent||"").trim(),he=Fn.match(/[\d.,]+/);if(he){var ce=parseFloat(he[0].replace(/\./g,"").replace(",","."));isNaN(ce)||(Wn=ce)}}return{city:C,shipping:M,shippingDeadline:D,shippingName:L,totalPix:Wn}}catch{return null}}function se(a,p,d){if(!(!a||!d)){Be(a);try{let v=function(A){for(var N=0;N<I.length;N++)if(I[N]&&I[N].name===A)return I[N];return null};var C=vn()||{};C.ts=Date.now(),C.cepValue=p.slice(0,5)+"-"+p.slice(5),C.shipping=d.shipping,C.shippingDeadline=d.shippingDeadline,C.shippingName=d.shippingName,C.shippingCity=d.city,d.totalPix!=null&&(C.subtotalPix=d.totalPix);var I=C.items&&C.items.length?C.items:[],M=a.querySelectorAll(".cart-item:not(.mm-removing)");C.items=Array.prototype.map.call(M,function(A){var N=A.querySelector(".prod-nome a, .prod-nome"),nn=(N&&N.textContent||"").trim(),Z=A.querySelector(".qty-display"),ln=Z?parseInt(Z.textContent):parseInt(A.getAttribute("data-item-quantity"))||1,bn=v(nn);return bn&&bn.quantity===ln&&(bn.lineTotalPix>0||bn.lineTotal>0||bn.imgSrc)?bn:{name:nn,quantity:ln}}),localStorage.setItem(kn,JSON.stringify(C))}catch{}var D=a.querySelectorAll(".cart-item:not(.mm-removing)"),L=0;D.forEach(function(v){var A=v.querySelector(".valor");if(A){var N=fe(A.textContent);isNaN(N)||(L+=N)}}),a.querySelector(".box-total-btn")?T(a):mn(a)}}function Jn(a){var p=Cn();if(p){var d=vn(),C=$n(d),I=Xn(a.querySelectorAll(".cart-item:not(.mm-removing)")),M=d&&d.cepValue&&d.cepValue.replace(/\D/g,"")===p,D=d&&d.shipping!=null&&!isNaN(d.shipping);d&&C===I&&M&&D||oe(p).then(function(L){L&&se(a,p,L)})}}function le(a){return String(a||"").replace(/[&<>"']/g,function(p){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[p]})}function _n(a){if(!a)return null;var p=a.querySelector(".box-total-btn");if(p)return{host:p,before:p.querySelector(".total")};var d=a.querySelector(".area-finalizar-compra");if(d)return{host:d,before:d.firstElementChild};var C=a.querySelector(".finalizar-compra");if(C&&C.parentElement){var I=C.parentElement;return{host:I,before:I.firstElementChild}}return null}function ae(a){if(!a)return null;var p=a.closest(".carrinho-rapido-ctn");return p||(a.closest("#cart-preview-area")?q():null)}function Hn(a,p,d,C){if(a){var I=_n(a);if(I){var M=I.host;a.classList.add("mm-ship-scope");var D=Cn(),L=vn(),v=Xn(a.querySelectorAll(".cart-item:not(.mm-removing)")),A=$n(L),N=L&&A===v,nn=U(D),Z=p>=nn,ln=Math.max(0,nn-p),bn=Math.max(0,Math.min(100,p/nn*100)),Sn=M.querySelector(".mm-cart-ship");if(!Sn){Sn=document.createElement("div"),Sn.className="mm-cart-ship",Sn.setAttribute("role","group"),Sn.setAttribute("aria-label","Informações de frete");var Bn=I.before;Bn&&Bn.parentNode===M?M.insertBefore(Sn,Bn):M.insertBefore(Sn,M.firstChild)}if(Sn.classList.toggle("is-free",Z),Fe(Sn),Sn.dataset.mmEditing!=="1"){var Un=L&&L.cepValue&&L.cepValue.replace(/\D/g,"")===D,Wn=D&&N&&Un&&L.shippingCity,Yn=Wn?Zn(L.shippingDeadline):null,Fn="";if(Fn+='<div class="mm-cart-ship-location">',D){var he=X(D);if(Wn&&(he+=" · "+le(L.shippingCity)),Fn+='<span class="mm-cart-ship-label">Envio para</span><div class="mm-cart-ship-location-value"><span>'+he+'</span><button class="mm-cart-ship-edit" type="button" data-mm-ship="edit">Trocar</button></div>',Yn){var ce=le(Yn);C&&d>0?ce+=" · <strong>"+le(jn(d))+"</strong>":C&&d===0&&(ce+=" · <strong>Grátis</strong>"),Fn+='<span class="mm-cart-ship-deadline">'+ce+"</span>"}}else Fn+='<span class="mm-cart-ship-label">Calcule o frete</span><div class="mm-cart-ship-location-value"><span style="color:#9CA3AF;font-weight:500;">Informe seu CEP</span><button class="mm-cart-ship-edit" type="button" data-mm-ship="edit">Calcular</button></div>';Fn+="</div>";var Pe=Z?"Frete grátis desbloqueado":"Faltam "+jn(ln)+" para frete grátis",Oe=parseFloat(a.dataset.mmShipPct||"0")||0;Fn+='<div class="mm-cart-ship-progress">',Fn+='<div class="mm-cart-ship-bar" role="progressbar" aria-valuenow="'+Math.round(p)+'" aria-valuemin="0" aria-valuemax="'+Math.round(nn)+'" aria-valuetext="'+le(Pe)+'" aria-label="Progresso para frete grátis"><div class="mm-cart-ship-bar-fill" style="width:'+Oe.toFixed(1)+'%"></div></div>',Fn+='<p class="mm-cart-ship-nudge'+(Z?" is-free":"")+'">',Z?Fn+=me+"Frete grátis garantido":Fn+="Faltam <strong>"+le(jn(ln))+"</strong> para frete grátis",Fn+="</p>",Fn+="</div>",Sn.innerHTML=Fn;var Ce=Sn.querySelector(".mm-cart-ship-bar-fill");Ce&&requestAnimationFrame(function(){Ce.style.width=bn.toFixed(1)+"%"});var Ee=a.dataset.mmShipWasFree==="1";Z&&!Ee&&Oe>0&&(Sn.classList.remove("mm-just-unlocked"),Sn.offsetWidth,Sn.classList.add("mm-just-unlocked"),setTimeout(function(){Sn.classList.remove("mm-just-unlocked")},1400)),a.dataset.mmShipWasFree=Z?"1":"",a.dataset.mmShipPct=bn.toFixed(1)}}}}var pe='<svg class="mm-cart-ship-spinner" width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><style>.mm-sp{animation:mm-spin 1.2s linear infinite;transform-origin:center}.mm-sp circle{stroke:#4B664A;stroke-width:3;fill:none;stroke-linecap:round;stroke-dasharray:44;stroke-dashoffset:16;animation:mm-sp-dash 1.2s ease-in-out infinite}@keyframes mm-spin{to{transform:rotate(360deg)}}@keyframes mm-sp-dash{0%{stroke-dashoffset:44}50%{stroke-dashoffset:8}100%{stroke-dashoffset:44}}</style><g class="mm-sp"><circle cx="12" cy="12" r="9.5"/></g></svg>';function ke(a){if(a){var p=a.querySelector(".mm-cart-ship-deadline");if(p)p.innerHTML="Recalculando frete "+pe;else{var d=a.querySelector(".mm-cart-ship-location");if(d){var C=document.createElement("span");C.className="mm-cart-ship-deadline",C.innerHTML="Recalculando frete "+pe,d.appendChild(C)}}var I=_n(a);I&&I.host.classList.add("mm-ship-loading")}}function Be(a){if(a){var p=_n(a);p&&p.host.classList.remove("mm-ship-loading")}}function Fe(a){!a||a.dataset.mmShipBound||(a.dataset.mmShipBound="1",a.addEventListener("click",function(p){var d=p.target.closest('[data-mm-ship="edit"]');if(d){p.preventDefault(),p.stopPropagation(),Ie(a);return}var C=p.target.closest('[data-mm-ship="cancel"]');if(C){p.preventDefault(),p.stopPropagation(),De(a);return}p.target.closest(".mm-cart-ship-cep-form")&&p.stopPropagation()},!0))}function Ie(a){var p=a.querySelector(".mm-cart-ship-location");if(p){a.dataset.mmEditing="1";var d=Cn()||"";p.innerHTML='<span class="mm-cart-ship-label">Digite seu CEP</span><form class="mm-cart-ship-cep-form" data-mm-ship-form="1" novalidate><input class="mm-cart-ship-cep-input" type="text" inputmode="numeric" autocomplete="postal-code" placeholder="00000-000" maxlength="9" value="'+le(X(d))+'" aria-label="CEP" /><button class="mm-cart-ship-cep-save" type="submit">OK</button><button class="mm-cart-ship-cep-cancel" type="button" data-mm-ship="cancel" aria-label="Cancelar">'+xe+"</button></form>";var C=p.querySelector(".mm-cart-ship-cep-input"),I=p.querySelector("form");C&&(setTimeout(function(){try{C.focus(),C.select()}catch{}},10),C.addEventListener("input",function(){C.classList.remove("is-invalid");var M=C.value.replace(/\D/g,"").slice(0,8);C.value=M.length>5?M.slice(0,5)+"-"+M.slice(5):M}),C.addEventListener("keydown",function(M){M.key==="Escape"&&(M.preventDefault(),De(a))})),I&&I.addEventListener("submit",function(M){M.preventDefault(),M.stopPropagation(),Ve(a)})}}function De(a){a.dataset.mmEditing="";var p=ae(a);if(p){var d=p.querySelectorAll(".cart-item:not(.mm-removing)"),C=0;d.forEach(function(I){var M=I.querySelector(".valor");if(M){var D=fe(M.textContent);isNaN(D)||(C+=D)}}),Hn(p,C)}}function Ve(a){var p=a.querySelector(".mm-cart-ship-cep-input");if(p){var d=p.value.replace(/\D/g,"");if(d.length!==8){p.classList.add("is-invalid"),p.focus();return}try{localStorage.setItem(K,d)}catch{}var C=a.querySelector(".mm-cart-ship-cep-save");C&&(C.disabled=!0,C.textContent="...");var I=ae(a);try{var M=vn();M&&(M.cepValue="",localStorage.setItem(kn,JSON.stringify(M)))}catch{}De(a),oe(d).then(function(D){D&&I&&se(I,d,D)})}}function fe(a){if(!a)return NaN;var p=String(a).replace(/\s/g,"").match(/([\d.,]+)/);return p?parseFloat(p[1].replace(/\./g,"").replace(",",".")):NaN}function jn(a){return isNaN(a)?"":"R$ "+a.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function Se(a){if(isNaN(a))return"";var p=a.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),d=p.split(",");return"R$&nbsp;"+d[0]+'<span class="mm-cents">,'+(d[1]||"00")+"</span>"}function Te(a){var p=0;return Array.prototype.forEach.call(a,function(d){var C=parseFloat(d.getAttribute("data-item-price"))||0,I=parseInt(d.getAttribute("data-item-quantity"));if(!I||isNaN(I)){var M=d.querySelector(".qty-display");M?I=parseInt(M.textContent)||1:I=1}p+=C*I}),p}function Ne(a){var p=a.querySelectorAll(".cart-item:not(.mm-removing)");p.forEach(function(d){var C=parseFloat(d.getAttribute("data-item-price"))||0,I=parseInt(d.getAttribute("data-item-quantity"));if(!I||isNaN(I)){var M=d.querySelector(".qty-display");M?I=parseInt(M.textContent)||1:I=1}var D=d.querySelector(".valor");D&&C>0&&(D.innerHTML=Se(C*I))})}function l(a){if(!(!a||a.dataset.mmTotalRatio)){var p=a.querySelectorAll(".cart-item");if(p.length){var d=Te(p),C=a.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||a.querySelector(".box-total-btn .linha-total .valor-final strong");if(C&&d>.01){var I=fe(C.textContent);isNaN(I)||(a.dataset.mmTotalRatio=String(I/d))}}}}function k(a,p){var d=a.querySelector(".box-total-btn .linha-total");if(d){var C=d.parentElement.querySelector(".mm-cart-savings");if(C&&C.remove(),!(!p||p<.01)){var I=document.createElement("span");I.className="mm-cart-savings",I.textContent="Você economiza "+jn(p)+" com PIX",d.nextSibling?d.parentElement.insertBefore(I,d.nextSibling):d.parentElement.appendChild(I)}}}function T(a,p){if(a){l(a);var d=a.querySelectorAll(".cart-item:not(.mm-removing)"),C=Te(d),I=a.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||a.querySelector(".box-total-btn .linha-total .valor-final strong"),M=parseFloat(a.dataset.mmTotalRatio||"0.95")||.95,D=C*M,L=C-D,v=Cn(),A=vn(),N=$n(A),nn=Xn(d),Z=A&&A.cepValue&&A.cepValue.replace(/\D/g,"")===v,ln=!!(v&&A&&Z&&A.shipping!=null&&!isNaN(A.shipping)),bn=a.dataset.mmShipPendingFetch==="1";!ln&&bn&&v&&A&&A.shipping!=null&&(ln=!0);var Sn=ln?parseFloat(A.shipping):0,Bn=D+Sn,Un=C+Sn;if(I){var Wn=fe(I.textContent);if(p)(isNaN(Wn)||Math.abs(Bn-Wn)>.005)&&(I.innerHTML=Se(Bn));else if(!isNaN(Wn)&&Math.abs(Bn-Wn)>.005){var Yn=a.querySelector(".box-total-btn .linha-total .valor-final");Yn&&(Yn.classList.remove("mm-pop"),Yn.offsetWidth,Yn.classList.add("mm-pop"),setTimeout(function(){Yn.classList.remove("mm-pop")},450)),yn(I,Wn,Bn)}else I.innerHTML=Se(Bn)}var Fn=a.querySelector(".box-total-btn .valor-final.card");if(Fn){var he=Un/12;Fn.innerHTML="<span>ou em até <strong>12x</strong> de <strong>"+jn(he)+"</strong> no cartão</span>"}var ce=a.querySelector(".box-total-btn .linha-total .valor-final .tipo-pagto");ce&&(ce.textContent="No PIX"),k(a,L),Hn(a,C,Sn,ln);try{var Pe=0;d.forEach(function(Ce){var Ee=Ce.querySelector(".qty-display");Ee&&(Pe+=parseInt(Ee.textContent)||0)});var Oe=document.getElementById("mm-h-cart-count");Oe&&(Pe>0?(Oe.textContent=Pe>99?"99+":String(Pe),Oe.hidden=!1):Oe.hidden=!0)}catch{}}}function h(){var a=document.querySelector(".carrinho-rapido-ctn");if(!(!a||!a.querySelector(".box-total-btn"))){var p=a.querySelectorAll(".cart-item:not(.mm-removing)");if(p.length){var d=a.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||a.querySelector(".box-total-btn .linha-total .valor-final strong");if(d){var C=Te(p);if(C>.01){var I=parseFloat(a.dataset.mmTotalRatio||"0.95")||.95,M=Cn(),D=vn(),L=D&&D.cepValue&&D.cepValue.replace(/\D/g,"")===M,v=!!(M&&D&&L&&D.shipping!=null&&!isNaN(D.shipping));!v&&a.dataset.mmShipPendingFetch==="1"&&M&&D&&D.shipping!=null&&(v=!0);var A=v?parseFloat(D.shipping):0,N=C*I+A,nn=fe(d.textContent);(isNaN(nn)||Math.abs(N-nn)>.01)&&T(a,!0)}}}}}function q(){var a=document.querySelector('#cart-preview-area > div[class*="z-[9999]"]');if(a)return a;var p=document.querySelector(".carrinho-rapido-ctn");return p&&!p.querySelector(".box-total-btn")&&p.querySelector(".valor-pix")?p:null}function rn(a,p){var d=a.querySelector(".installment-total");if(!(!d||!d.parentElement)){var C=d.parentElement,I=C.querySelector(".mm-cart-savings-mobile");if(!p||p<.01){I&&I.remove();return}var M="Você economiza "+jn(p)+" com PIX";if(I){I.textContent!==M&&(I.textContent=M);return}var D=document.createElement("span");D.className="mm-cart-savings-mobile",D.textContent=M,d.nextSibling?C.insertBefore(D,d.nextSibling):C.appendChild(D)}}function sn(a,p,d){if(!(!a||!a.classList||!a.classList.contains("carrinho-rapido-ctn"))&&!a.querySelector(".box-total-btn")){var C=a.querySelector(".area-finalizar-compra");if(!(!C||!(p>0))){var I=C.querySelector(".forma-pix"),M=I?I.parentElement:null;if(M){var D=p*d,L=p/12,v=p-D;M.classList.add("mm-native-pay-hidden");var A=C.querySelector(".mm-cart-total-b");A||(A=document.createElement("div"),A.className="mm-cart-total-b",A.innerHTML='<span class="mm-tb-label">Total</span><span class="mm-tb-row"><strong class="mm-tb-value"></strong><span class="mm-tb-pix">No PIX</span></span><span class="mm-tb-savings"></span><span class="mm-tb-parcela"></span>',M.nextSibling?C.insertBefore(A,M.nextSibling):C.appendChild(A));var N=A.querySelector(".mm-tb-value"),nn=jn(D);N&&N.textContent!==nn&&(N.textContent=nn);var Z=A.querySelector(".mm-tb-savings");if(Z)if(v>=.01){var ln="Você economiza "+jn(v)+" com PIX";Z.textContent!==ln&&(Z.textContent=ln),Z.style.display=""}else Z.style.display="none";var bn=A.querySelector(".mm-tb-parcela");if(bn){var Sn="ou em até 12x de "+jn(L)+" no cartão";bn.textContent!==Sn&&(bn.textContent=Sn)}}}}}function mn(a){if(a=a||q(),!(!a||a.querySelector(".box-total-btn")||!a.querySelector(".valor-pix"))){var p=a.querySelectorAll(".cart-item:not(.mm-removing)"),d=p.length,C=document.getElementById("mm-h-cart-count");if(C&&d>0){var I=d>99?"99+":String(d);(C.textContent!==I||C.hidden)&&(C.textContent=I,C.hidden=!1)}if(p.length){var M=Te(p);if(M>0){Array.prototype.forEach.call(p,function(Oe){var Ce=parseFloat(Oe.getAttribute("data-item-price"))||0;if(Ce>0){var Ee=parseInt(Oe.getAttribute("data-item-quantity"));if(!Ee||isNaN(Ee)){var Ye=Oe.querySelector(".qty-display");Ee=Ye&&parseInt(Ye.textContent)||1}var Je=Oe.querySelector(".valor");if(Je){var We=Ce*Ee,at=Je.querySelector("span")||Je,rt=fe(at.textContent);(isNaN(rt)||Math.abs(rt-We)>.005)&&(at.textContent=jn(We))}}});var D=a.querySelector(".valor-pix"),L=D?D.querySelector("span")||D:null;if(!a.dataset.mmMobileRatio&&L){var v=fe(L.textContent);if(!isNaN(v)&&v>0){var A=v/M;A>.8&&A<=1.0001&&(a.dataset.mmMobileRatio=String(A))}}var N=parseFloat(a.dataset.mmMobileRatio||"0.95");if(N>.8&&N<=1.0001||(N=.95),L){var nn=M*N,Z=fe(L.textContent);(isNaN(Z)||Math.abs(Z-nn)>.005)&&(L.textContent=jn(nn))}var ln=a.querySelector(".installment-total");if(ln){var bn=M/12,Sn=fe(ln.textContent);(isNaN(Sn)||Math.abs(Sn-bn)>.005)&&(ln.textContent="ou 12x de "+jn(bn))}var Bn=Cn(),Un=vn(),Wn=Un&&Un.cepValue&&Un.cepValue.replace(/\D/g,"")===Bn,Yn=!!(Bn&&Un&&Wn&&Un.shipping!=null&&!isNaN(Un.shipping)),Fn=Yn?parseFloat(Un.shipping):0,he=(Bn||"")+"|"+M.toFixed(2)+"|"+(Yn?1:0)+"|"+Fn,ce=a.querySelector(".mm-cart-ship"),Pe=ce&&ce.dataset.mmEditing==="1";!Pe&&(!ce||a.dataset.mmMobShipSig!==he)&&(a.dataset.mmMobShipSig=he,Hn(a,M,Fn,Yn)),Jn(a),rn(a,M-M*N),sn(a,M,N)}}}}function yn(a,p,d){if(!a||isNaN(p)||isNaN(d))return;var C=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(C){a.innerHTML=Se(d);return}var I=420,M=performance.now();function D(L){return 1-Math.pow(1-L,3)}(function L(v){var A=Math.min(1,(v-M)/I);a.innerHTML=Se(p+(d-p)*D(A)),A<1&&requestAnimationFrame(L)})(M)}function wn(a,p,d,C,I,M){if(!(!a||!p)){var D=parseInt(C.textContent)||1,L=D+d;if(!(L<1)){var nn=a.closest(".carrinho-rapido-ctn");l(nn),I.disabled=!0,M.disabled=!0;var v=parseFloat(a.getAttribute("data-item-price"))||0;C.textContent=L,a.setAttribute("data-item-quantity",L);var A=a.querySelector(".valor");if(A){var N=v*L;A.textContent=jn(N),A.classList.remove("mm-pop"),A.offsetWidth,A.classList.add("mm-pop"),setTimeout(function(){A.classList.remove("mm-pop")},450)}var nn=a.closest(".carrinho-rapido-ctn"),Z=d>0?"adicionaItem":"removeItem";Cn()&&nn&&(nn.dataset.mmShipPendingFetch="1"),T(nn),mn(),Cn()&&ke(nn),Y(Z,p).catch(function(){C.textContent=D,a.setAttribute("data-item-quantity",D),A&&(A.innerHTML=Se(v*D)),nn&&(nn.dataset.mmShipPendingFetch=""),T(nn),mn()}).then(function(){I.disabled=!1,M.disabled=!1;var ln=Cn();ln&&nn?(ke(nn),oe(ln,!0).then(function(bn){nn.dataset.mmShipPendingFetch="",bn?se(nn,ln,bn):Be(nn)})):nn&&(nn.dataset.mmShipPendingFetch="")})}}}function An(a,p){if(!(!a||!p)){var d=a.closest(".carrinho-rapido-ctn");l(d);var C=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,I=C?0:360;C||a.classList.add("mm-removing"),setTimeout(function(){a.parentNode&&a.parentNode.removeChild(a);var M=d?d.querySelectorAll(".cart-item:not(.mm-removing)"):[],D=M.length===0;if(D){if(d){d.dataset.mmShipPendingFetch="";var L=d.querySelector(".mm-cart-ship");L&&L.remove();var v=d.querySelector(".box-total-btn, .area-finalizar-compra");v&&(v.style.display="none")}typeof window.__mmForceEmptyCartState=="function"&&window.__mmForceEmptyCartState(d)}else T(d),Cn()&&ke(d);var A=document.getElementById("mm-h-cart-count"),N=document.getElementById("mm-h-cart"),nn=M.length;A&&(A.textContent=nn>99?"99+":String(nn),A.hidden=nn===0),N&&N.setAttribute("aria-label","Carrinho, "+nn+" "+(nn===1?"item":"itens")),mn()},I),Y("deleteItem",p).catch(function(){}).then(function(){var M=d?d.querySelectorAll(".cart-item:not(.mm-removing)"):[],D=document.getElementById("mm-h-cart-count");if(D&&(D.textContent=M.length>99?"99+":String(M.length),D.hidden=M.length===0),M.length===0){d&&(d.dataset.mmShipPendingFetch="");return}var L=Cn();L&&d?(d.dataset.mmShipPendingFetch="1",ke(d),oe(L,!0).then(function(v){d.dataset.mmShipPendingFetch="",v?se(d,L,v):Be(d)})):d&&(d.dataset.mmShipPendingFetch="")})}}window.__mmDeleteItem=An;var Tn=null,gn=new Set,Ln=null;function In(a){if(!a)return NaN;var p=String(a).replace(/\s/g,"").match(/([\d.,]+)/);if(!p)return NaN;var d=p[1].replace(/\./g,"").replace(",","."),C=parseFloat(d);return isNaN(C)?NaN:C}function ee(a){return isNaN(a)?"":"R$ "+a.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function Vn(a,p,d){if(!a||isNaN(p)||isNaN(d))return;Ln&&cancelAnimationFrame(Ln);var C=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(C){a.textContent=ee(d);return}var I=420,M=performance.now();function D(v){return 1-Math.pow(1-v,3)}function L(v){var A=v-M,N=Math.min(1,A/I),nn=p+(d-p)*D(N);a.textContent=ee(nn),N<1?Ln=requestAnimationFrame(L):Ln=null}Ln=requestAnimationFrame(L)}function s(a){return a?a.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||a.querySelector(".box-total-btn .linha-total .valor-final strong")||a.querySelector(".valor-pix strong")||a.querySelector(".valor-pix"):null}function f(a){return a?a.querySelector(".box-total-btn .linha-total .valor-final"):null}function j(a){var p=f(a);p&&(p.classList.remove("mm-pop"),p.offsetWidth,p.classList.add("mm-pop"),setTimeout(function(){p.classList.remove("mm-pop")},450))}function pn(){var a=document.querySelector(".carrinho-rapido-ctn");if(a){var p=a.querySelectorAll(".cart-item:not(.mm-removing)");if(p.length>0){var d=a.querySelector(".box-total-btn");d&&d.dataset.mmTotalEnhanced!=="1"&&(l(a),Ne(a),T(a),d.dataset.mmTotalEnhanced="1",a.dataset.mmShipRendered="1",Jn(a))}a.querySelector(".box-total-btn")||mn(a);var C=a.querySelectorAll(".cart-item"),I=new Set;C.forEach(function(M){var D=M.id||M.getAttribute("data-item-id")||"";D&&(I.add(D),!gn.has(D)&&gn.size>0&&(M.classList.add("mm-added"),setTimeout(function(){M.classList.remove("mm-added")},500)))}),gn=I}}function zn(){var a=document.querySelector(".carrinho-rapido-ctn");if(!(!a||a.dataset.mmAnimObserved)){a.dataset.mmAnimObserved="1",pn();var p=new MutationObserver(function(){clearTimeout(zn._t),zn._t=setTimeout(pn,60)});p.observe(a,{childList:!0,subtree:!0,characterData:!0})}}function Mn(){c(),g(),H(),V();var a=document.getElementById("cart-preview-area");if(a){var p=new MutationObserver(function(){setTimeout(O,100),setTimeout(zn,150),setTimeout(mn,180),setTimeout(h,220)});p.observe(a,{childList:!0,subtree:!0})}setInterval(O,800),setInterval(zn,800),setInterval(mn,800),setInterval(h,800),O(),zn(),mn(),h()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Mn):Mn()})(),(function F(){"use strict";var G="mm_cep",_="mm_cart_snapshot",W=18e5,y="mm_onepage_draft",i=1440*60*1e3,c=2e3,g="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",b="https://api.whatsapp.com/send?phone=5511915299488&text="+encodeURIComponent("Olá! Estou no checkout e gostaria de tirar uma dúvida sobre meu pedido."),x=location.pathname,P=x.indexOf("/checkout/cart")!==-1,m=x.indexOf("/checkout/identify")!==-1,O=x.indexOf("/checkout/onepage")!==-1,H=x.indexOf("/checkout/payment")!==-1,V=x.indexOf("/checkout/done")!==-1,B=window.MMStorefrontFlow||null,Y=B&&typeof B.isLoggedCustomer=="function"?B.isLoggedCustomer(document.cookie):/(?:^|;\s*)zordEm=[^;\s]+/.test(document.cookie||"");function J(){return B&&typeof B.checkoutTarget=="function"?B.checkoutTarget(document.cookie):Y?"/checkout/onepage":"/checkout/identify"}if(V)try{localStorage.removeItem("mm_onepage_draft")}catch{}if(!P&&!m&&!O&&!H&&!V)return;F._retries=(F._retries||0)+1;var w=document.querySelector("#checkout-main-area");if(!w){try{var K=document.body&&document.body.textContent||"",kn=/muito tempo inativo|realize login novamente/i.test(K);if((O||m)&&(kn||F._retries>=40)&&!sessionStorage.getItem("mm_checkout_recovery")){sessionStorage.setItem("mm_checkout_recovery","1"),location.href="/checkout/cart";return}}catch{}F._retries<40&&setTimeout(F,400);return}try{sessionStorage.removeItem("mm_checkout_recovery")}catch{}function an(n){return isNaN(n)||n<0?"R$ 0,00":"R$ "+n.toFixed(2).replace(".",",").replace(/(\d)(?=(\d{3})+,)/g,"$1.")}function Cn(n){if(!n)return 0;var e=String(n).match(/(-?[\d.]+,\d{2})/);return e&&parseFloat(e[1].replace(/\./g,"").replace(",","."))||0}function X(n){return String(n||"").replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})}var U={truck:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-5l-3-4zM6 18.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.5-7H17V9.5h2.04l1.46 2-.04 0z"/></svg>',check:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',checkCircle:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',bolt:'<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',shield:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>',lock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>',card:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',rotate:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',minus:'<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',plus:'<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M3 7h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',trash:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',close:'<svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5l-7 7M3.5 3.5l7 7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',arrow:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',tag:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',whats:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',box:'<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>'},vn={get:function(n){try{return localStorage.getItem(n)}catch{return null}},set:function(n,e){try{localStorage.setItem(n,e)}catch{}},remove:function(n){try{localStorage.removeItem(n)}catch{}}};function Xn(n){try{var e={ts:Date.now(),items:n.items.map(function(t){return{name:t.name,variant:t.variant,imgSrc:t.imgSrc,quantity:t.quantity,lineTotal:t.lineTotal,lineTotalPix:t.lineTotalPix,isPix:t.isPix,deposito:t.deposito}}),subtotalPix:n.subtotalPix,subtotalFull:n.subtotalFull,discount:n.discount,couponCode:n.couponCode,shipping:n.shipping,shippingDeadline:n.shippingDeadline,shippingName:n.shippingName,shippingCity:n.shippingCity,shippingOptions:n.shippingOptions,cepValue:n.cepValue};vn.set(_,JSON.stringify(e))}catch{}}function $n(){try{var n=vn.get(_);if(!n)return null;var e=JSON.parse(n);return!e||!e.ts||Date.now()-e.ts>W?null:e}catch{return null}}function me(){try{for(var n=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep","mm-op-rua","mm-op-num","mm-op-comp","mm-op-bairro","mm-op-cidade","mm-op-uf"],e={ts:Date.now()},t=0,r=0;r<n.length;r++){var o=document.getElementById(n[r]);o&&o.value&&(e[n[r]]=o.value,t++)}if(t===0){window._mmDraftDebug&&console.log("[mm-draft] skip save (0 fields)");return}vn.set(y,JSON.stringify(e)),window._mmDraftDebug&&console.log("[mm-draft] saved",t,"fields",e)}catch(u){window._mmDraftDebug&&console.warn("[mm-draft] save failed",u)}}function xe(){try{var n=vn.get(y);if(!n)return null;var e=JSON.parse(n);return!e||!e.ts?null:Date.now()-e.ts>i?(vn.remove(y),null):e}catch{return null}}function ye(){try{vn.remove(y)}catch{}}function ge(){var n=xe();if(!n)return window._mmDraftDebug&&console.log("[mm-draft] no draft to restore"),null;for(var e=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep","mm-op-rua","mm-op-num","mm-op-comp","mm-op-bairro","mm-op-cidade","mm-op-uf"],t=0,r=0;r<e.length;r++){var o=document.getElementById(e[r]);if(o&&n[e[r]]){try{var u=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;u.call(o,n[e[r]])}catch{o.value=n[e[r]]}o.dispatchEvent(new Event("input",{bubbles:!0})),/^mm-op-(rua|bairro|cidade|uf)$/.test(e[r])&&(o.dataset.mmCepFill="1"),t++}}return window._mmDraftDebug&&console.log("[mm-draft] restored",t,"fields from draft",n),n}function ve(){for(var n={items:[],subtotalPix:0,subtotalFull:0,discount:0,shipping:null,shippingRaw:"",shippingDeadline:"",shippingName:"",shippingCity:"",shippingOptions:[],couponCode:"",cepValue:"",canFinalize:!1,hasFinalizar:!1},e=w.querySelectorAll(".cart-item"),t=0;t<e.length;t++){var r=e[t],o=r.querySelector('.qtd-item[id^="item_carrinho_"]'),u=o&&o.id.match(/item_carrinho_(\d+)/),E=u?parseInt(u[1],10):null,R=r.querySelector("figure img")||r.querySelector("#product-img")||r.querySelector("img"),tn=r.querySelector(".nome-produto .link")||r.querySelector("figure a"),en=r.querySelector(".column-valor-produto .valor"),un=en?en.textContent.trim():"",on=!!r.querySelector(".column-valor-produto .sub");n.items.push({dataId:E,sku:r.getAttribute("data-item-id")||"",name:r.getAttribute("data-item-name")||r.getAttribute("data-name")||"",variant:r.getAttribute("data-item-variant")||"",brand:r.getAttribute("data-item-brand")||"",category:r.getAttribute("data-item-category")||"",priceUnit:parseFloat(r.getAttribute("data-item-price")||"0"),lineTotal:parseFloat(r.getAttribute("data-valor")||"0"),quantity:parseInt(r.getAttribute("data-item-quantity")||"1",10),deposito:r.getAttribute("data-item-deposito")==="1",imgSrc:R?R.getAttribute("src")||R.currentSrc:"",href:tn?tn.getAttribute("href"):"",lineTotalPix:Cn(un),isPix:on}),n.subtotalFull+=parseFloat(r.getAttribute("data-valor")||"0")}var xn=w.querySelector("#resumo-compra .resumo-valores .value");xn&&(n.subtotalPix=Cn(xn.textContent)),n.subtotalPix<=0&&(n.subtotalPix=n.items.reduce(function(Ze,lt){return Ze+(lt.lineTotalPix||0)},0));var fn=w.querySelector("#resumo-compra .discount-value");fn&&(n.discount=Cn(fn.textContent));var En=w.querySelector("#resumo-compra .txt-cupom");if(En){var hn=(En.textContent||"").replace(/\s+/g,"").trim();/^[A-Za-z0-9][A-Za-z0-9._-]{1,}$/.test(hn)&&(n.couponCode=hn.toUpperCase())}var Nn=w.querySelector("#resumo-compra .frete-calculado, .frete-calculado");if(Nn&&Nn.textContent.trim()){n.shippingRaw=Nn.textContent.trim();var qn=Nn.querySelector(".frete-location .city");qn&&(n.shippingCity=qn.textContent.trim());for(var Dn=Nn.querySelectorAll(".servico-frete"),Gn=0;Gn<Dn.length;Gn++){var ie=Dn[Gn],ze=ie.querySelector('input[type="radio"]'),S=ie.querySelector(".dias-entrega"),z=parseFloat(ie.getAttribute("data-valor-frete")||"0"),Q=ie.getAttribute("data-servico-frete")||"",dn=S?S.textContent.trim().replace(/\s+/g," ").replace(/\s*-\s*$/,"").trim():"",cn=dn.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i),On=cn?cn[1].replace(/\s+/g," "):dn;n.shippingOptions.push({id:ze?ze.value:"",name:Q,deadline:On,value:z,isFree:z===0,isSelected:ze?ze.checked:!1})}var Pn=n.shippingOptions.filter(function(Ze){return Ze.isSelected})[0];if(!Pn&&n.shippingOptions.length>0&&(Pn=n.shippingOptions[0]),Pn)n.shipping=Pn.value,n.shippingName=Pn.name,n.shippingDeadline=Pn.deadline;else{var Qn=Nn.querySelector(".info-frete-selec"),re=Nn.querySelector(".dias-entrega, .info-frete-selec .dias-entrega"),de=Nn.querySelector(".valor-frete .value, .value.valor-frete"),qe=Nn.querySelector(".info-frete-selec .info-title span, .info-title span");if(de){var Ae=de.textContent.trim();if(/gr[aá]tis/i.test(Ae))n.shipping=0;else{var Re=Cn(Ae);Re>0&&(n.shipping=Re)}}if(re){var je=re.textContent.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*\([^)]+\))?(?:\s*[úu]teis)?)/i);je&&(n.shippingDeadline=je[1].replace(/\s+/g," ").replace(/\(s\)/,"").trim())}if(qe&&(n.shippingName=qe.textContent.trim()),n.shipping===null)if(/gr[aá]tis/i.test(n.shippingRaw))n.shipping=0;else{var $e=Cn(n.shippingRaw);$e>0&&(n.shipping=$e)}if(!n.shippingDeadline){var ue=n.shippingRaw.match(/(\d+(?:\s*[aà]\s*\d+)?)\s*dias?/i);ue&&(n.shippingDeadline=ue[1]+" dias úteis")}}}var Qe=w.querySelector("#cep, .input-cep");return Qe&&(n.cepValue=Qe.value||""),n.hasFinalizar=!!w.querySelector("#finalizar-compra"),n.canFinalize=n.items.length>0,n}function ne(n){n=n||"cart";var e='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>';function t(r,o){var u=r===n,E="mm-checkout-step"+(u?" is-active":""),R=u?' aria-current="step"':"";return'<li class="'+E+'"'+R+'><span class="mm-checkout-step-label">'+o+"</span></li>"}return'<header class="mm-checkout-header"><a class="mm-checkout-header-logo" href="/" aria-label="Madeira Mania - voltar à home"><img src="'+g+'" alt="Madeira Mania" width="180" height="44"></a><nav class="mm-checkout-steps" aria-label="Etapas do checkout"><ol>'+t("cart","Carrinho")+'<li class="mm-checkout-step-sep" aria-hidden="true">›</li>'+t("delivery","Entrega")+'<li class="mm-checkout-step-sep" aria-hidden="true">›</li>'+t("payment","Pagamento")+'</ol></nav><div class="mm-checkout-secure">'+e+'<span class="mm-checkout-secure-text"><strong>Compra 100% segura</strong><small>Site protegido por SSL</small></span></div></header>'}function Zn(n){var e=n.imgSrc?'<img src="'+X(n.imgSrc)+'" alt="'+X(n.name)+'" loading="lazy">':"",t=n.href?'<a class="mm-item-name" href="'+X(n.href)+'">'+X(n.name)+"</a>":'<span class="mm-item-name">'+X(n.name)+"</span>",r=n.variant?'<p class="mm-item-variant">'+X(n.variant)+"</p>":"",o="",u=n.quantity<=1?' disabled aria-disabled="true"':"",E;if(n.lineTotalPix>0&&n.isPix){var R='<span class="mm-item-price-sub">no PIX</span>',tn=n.quantity>1?an(n.lineTotalPix/n.quantity)+" cada":"";E='<div class="mm-item-price"><span class="mm-item-price-value">'+an(n.lineTotalPix)+"</span>"+R+(tn?'<span class="mm-item-price-unit">'+tn+"</span>":"")+"</div>"}else{var en=n.quantity>1?an(n.priceUnit)+" cada":"";E='<div class="mm-item-price"><span class="mm-item-price-value">'+an(n.lineTotal)+"</span>"+(en?'<span class="mm-item-price-unit">'+en+"</span>":"")+"</div>"}return'<div class="mm-item" data-mm-id="'+n.dataId+'"><div class="mm-item-thumb">'+e+'</div><div class="mm-item-body">'+t+r+o+"</div>"+E+'<div class="mm-item-controls"><div class="mm-qty" role="group" aria-label="Quantidade"><button type="button" class="mm-qty-btn" data-mm-act="dec"'+u+' aria-label="Diminuir quantidade">'+U.minus+'</button><span class="mm-qty-value">'+n.quantity+'</span><button type="button" class="mm-qty-btn" data-mm-act="inc" aria-label="Aumentar quantidade">'+U.plus+'</button></div><button type="button" class="mm-item-remove" data-mm-act="remove" aria-label="Remover item" title="Remover">'+U.trash+"</button></div></div>"}function te(n){return n.items.length?n.items.map(Zn).join(""):'<div class="mm-empty"><div class="mm-empty-icon">'+U.box+'</div><h3 class="mm-empty-title">Seu carrinho está vazio</h3><p class="mm-empty-desc">Explore nossos móveis e encontre a peça certa para sua casa.</p><a class="mm-empty-cta" href="/">Explorar produtos '+U.arrow+'</a><p class="mm-empty-perks">Frete grátis acima de R$ 2.000 · 12x sem juros · 7% off no PIX</p></div>'}function Rn(n){for(var e="",t=0;t<n;t++)e+='<div class="mm-skel-item"><div class="mm-skel mm-skel-thumb"></div><div class="mm-skel-lines"><div class="mm-skel mm-skel-line w-3-4"></div><div class="mm-skel mm-skel-line w-1-2"></div><div class="mm-skel mm-skel-line w-1-3"></div></div><div class="mm-skel-lines"><div class="mm-skel mm-skel-line w-1-2"></div></div></div>';return e}function be(n,e){return n?'<div class="mm-coupon mm-coupon-has"><div class="mm-coupon-applied"><span class="mm-coupon-applied-left">'+U.tag+"<span>"+X(n)+'</span></span><button type="button" data-mm-act="'+e+'-remove" aria-label="Remover cupom">'+U.close+"</button></div></div>":'<div class="mm-coupon is-open"><div class="mm-coupon-label">'+U.tag+'<span>Cupom de desconto</span></div><form class="mm-coupon-form" data-mm-act="'+e+'-submit"><input type="text" class="mm-input" name="mm-coupon-code" placeholder="Digite o código" autocomplete="off" autocapitalize="characters" spellcheck="false" inputmode="text" /><button type="submit" class="mm-btn-secondary">Aplicar</button></form><p class="mm-coupon-error" hidden></p></div>'}function oe(n){var e=n.subtotalFull>0?n.subtotalFull:n.subtotalPix,t='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+an(e)+"</span></div>";if(n.shipping!==null){var r;n.shipping===0?r='<span class="mm-row-value is-free">'+U.check+" Grátis</span>":r='<span class="mm-row-value">'+an(n.shipping)+"</span>";var o='<span class="mm-row-label">Frete';n.shippingName&&(o+=' <span class="mm-row-sub">· '+X(n.shippingName)+"</span>"),n.shippingDeadline&&(o+=' <span class="mm-row-sub">· '+X(n.shippingDeadline)+"</span>"),o+="</span>",t+='<div class="mm-row">'+o+r+"</div>"}n.discount>0&&(t+='<div class="mm-row"><span class="mm-row-label">Desconto</span><span class="mm-row-value is-discount">− '+an(n.discount)+"</span></div>");var u="";if(n.shipping!==null){var E=Math.max(0,e+n.shipping-n.discount),R=Math.max(0,n.subtotalPix+n.shipping-n.discount),tn=E-R,en=E/12;u='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value">'+an(E)+'</div><div class="mm-total-pix"><span>'+an(R)+" à vista no PIX</span>"+(tn>0?'<span class="mm-total-pix-save">economia de '+an(tn)+"</span>":"")+'</div><div class="mm-total-parcela">ou 12x de '+an(en)+" sem juros no cartão</div></div>"}else u='<div class="mm-total"><div class="mm-total-label">Subtotal</div><div class="mm-total-value">'+an(n.subtotalPix)+'</div><div class="mm-total-pix"><span>à vista no PIX</span></div><div class="mm-total-pending">Informe seu CEP para ver o frete e o total final.</div></div>';var un=be(n.couponCode,"coupon");return'<div class="mm-sum-stack"><div class="mm-rows">'+t+"</div>"+un+u+"</div>"}function we(){var n=document.getElementById("mm-layout");if(n)return n.parentElement!==w&&w.insertBefore(n,w.firstChild),n;var e=document.createElement("div");return e.id="mm-layout",e.innerHTML=ne("cart")+'<div class="mm-grid"><section class="mm-items"><h2 class="mm-h">Carrinho</h2><div class="mm-items-card"><div id="mm-item-list">'+Rn(2)+'</div></div></section><aside class="mm-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><div class="mm-cep"><div class="mm-cep-label"><span class="mm-cep-label-text">Calcular frete</span><a class="mm-cep-label-link" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a></div><div class="mm-cep-row"><input type="text" class="mm-input" id="mm-cep-input" name="mm_cep_calc" inputmode="numeric" maxlength="9" placeholder="00000-000" autocomplete="off" data-lpignore="true" data-1p-ignore="true" data-bwignore="true" data-form-type="other" aria-label="CEP" /><button type="button" class="mm-btn-secondary" data-mm-act="calc-cep">Calcular</button></div></div><div id="mm-sum-dynamic"></div><button type="button" class="mm-cta" data-mm-act="finalizar">Finalizar compra'+U.arrow+'</button><div class="mm-trust"><span class="mm-trust-item">'+U.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+U.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+U.card+'<span>12x sem juros</span></span></div><a class="mm-help" href="'+b+'" target="_blank" rel="noopener" data-mm-track="help-whats">'+U.whats+"<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span></a></div></aside></div>",w.insertBefore(e,w.firstChild),w.classList.add("mm-shadow-mode"),document.body.classList.add("mm-checkout-rebuild"),document.documentElement.classList.remove("mm-cart-loading"),e}function se(){var n=ve(),e=document.getElementById("mm-item-list");e&&(e.innerHTML=te(n));var t=document.getElementById("mm-sum-dynamic");t&&(t.innerHTML=oe(n));var r=document.querySelector(".mm-cta");r&&(r.disabled=!n.canFinalize,r.style.opacity=n.canFinalize?"1":"0.5",r.style.pointerEvents=n.canFinalize?"auto":"none");var o=document.getElementById("mm-cep-input");if(o&&!o.matches(":focus")){var u=vn.get(G),E=n.cepValue||u||"";E&&(o.value=Jn(E))}return n.items&&n.items.length>0&&Xn(n),n}function Jn(n){var e=String(n||"").replace(/\D/g,"").slice(0,8);return e.length<=5?e:e.slice(0,5)+"-"+e.slice(5)}function le(n){var e=String(n||"").replace(/\D/g,"");e.length===8&&vn.set(G,e)}function _n(n){n=n||0;var e=vn.get(G);if(!(!e||e.length!==8)){var t=w.querySelector("#cep, .input-cep");if(!t){n<12&&setTimeout(function(){_n(n+1)},350);return}var r=w.querySelector("#resumo-compra .frete-calculado");if(r&&r.textContent.trim()){var o=document.getElementById("mm-cep-input");o&&!o.value&&(o.value=Jn(e));return}var u=document.getElementById("mm-cep-input");u&&!u.value&&(u.value=Jn(e)),t.value=Jn(e),ae(t),setTimeout(function(){Hn()},200)}}function ae(n){try{var e=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;e.call(n,n.value)}catch{}n.dispatchEvent(new Event("input",{bubbles:!0})),n.dispatchEvent(new Event("change",{bubbles:!0}))}function Hn(){try{if(window.Zord&&window.Zord.Cart&&typeof window.Zord.Cart.calculaFreteCarrinho=="function"){window.Zord.Cart.calculaFreteCarrinho();return}}catch{}var n=w.querySelector("#resumo-compra .calcula-frete > button, .area-frete button");n&&n.click()}function pe(){var n=document.getElementById("mm-layout");!n||n._mmBound||(n._mmBound=!0,n.addEventListener("click",function(e){var t=e.target.closest("[data-mm-act]");if(t){var r=t.getAttribute("data-mm-act"),o=t.closest(".mm-item"),u=o?parseInt(o.getAttribute("data-mm-id"),10):null;switch(r){case"inc":ke(u,o,"inc");break;case"dec":ke(u,o,"dec");break;case"remove":Be(u,o);break;case"calc-cep":Fe();break;case"coupon-toggle":var E=t.closest(".mm-coupon");if(E){E.classList.add("is-open");var R=E.querySelector("input");R&&setTimeout(function(){R.focus()},100)}break;case"coupon-remove":De();break;case"finalizar":Ve();break}}}),n.addEventListener("submit",function(e){var t=e.target.closest('[data-mm-act="coupon-submit"]');if(t){e.preventDefault();var r=t.querySelector("input");r&&Ie(r.value.trim())}}),n.addEventListener("input",function(e){e.target&&e.target.id==="mm-cep-input"&&(e.target.value=Jn(e.target.value))}),n.addEventListener("keydown",function(e){e.key==="Enter"&&e.target&&e.target.id==="mm-cep-input"&&(e.preventDefault(),Fe())}))}function ke(n,e,t){if(!(!n||!e)&&!(!window.Zord||!window.Zord.checkout)){e.classList.add("is-updating");try{t==="inc"?window.Zord.checkout.adicionaQuantidade(n):window.Zord.checkout.removeQuantidade(n)}catch(r){console.warn("[mm-cart] qty change failed",r),e.classList.remove("is-updating")}}}function Be(n,e){if(!(!n||!e)&&!(!window.Zord||!window.Zord.checkout)){e.classList.add("is-updating"),e.style.transition="opacity 200ms, transform 200ms",e.style.opacity="0",e.style.transform="translateX(-12px)";try{typeof window.Zord.checkout.deleteItem=="function"?window.Zord.checkout.deleteItem(n):window.Zord.checkout.removeQuantidade(n)}catch(t){console.warn("[mm-cart] remove failed",t),e.classList.remove("is-updating"),e.style.opacity="1",e.style.transform=""}}}function Fe(){var n=document.getElementById("mm-cep-input");if(n){var e=(n.value||"").replace(/\D/g,"");if(e.length!==8){n.focus(),n.classList.add("mm-input-error"),setTimeout(function(){n.classList.remove("mm-input-error")},1200);return}le(e);var t=w.querySelector("#cep, .input-cep");t&&(t.value=Jn(e),ae(t)),Hn()}}function Ie(n){if(n&&!(!window.Zord||!window.Zord.checkout)){var e=w.querySelector("#cupom-desconto");e&&(e.value=n.toUpperCase(),ae(e));try{window.Zord.checkout.addCupomDesconto()}catch(t){console.warn("[mm-cart] coupon apply failed",t)}}}function De(){if(!(!window.Zord||!window.Zord.checkout)){try{var n=$n();n&&n.couponCode&&(n.couponCode="",vn.set(_,JSON.stringify(n)))}catch{}try{window.Zord.checkout.removeCupomDesconto()}catch(e){console.warn("[mm-cart] coupon remove failed",e)}}}function Ve(){try{var n=ve();n.items&&n.items.length>0&&Xn(n)}catch{}if(Y){vn.remove("mm_checkout_mode"),location.href=J();return}var e=document.getElementById("finalizar-compra");if(e){e.click();return}location.href="/checkout/identify"}if(P){let n=function(t){if(t=t||0,t>30){e();return}var r=w.querySelectorAll(".cart-item").length>0,o=w.querySelector("#resumo-compra");r||o||t>8?e():setTimeout(function(){n(t+1)},250)},e=function(){we(),pe(),se(),_n(),typeof jQuery<"u"&&jQuery(document).ajaxComplete(function(o,u,E){if(!(!E||!E.url)){var R=E.url;(R.indexOf("checkout/cart")!==-1||R.indexOf("atualiza")!==-1||R.indexOf("cupom")!==-1||R.indexOf("frete")!==-1||R.indexOf("removeItem")!==-1||R.indexOf("adicionaItem")!==-1)&&(setTimeout(se,120),setTimeout(function(){var tn=ve();tn.shipping!==null&&tn.cepValue&&le(tn.cepValue)},200))}});try{var t=new MutationObserver(function(o){e._mutTimer&&clearTimeout(e._mutTimer),e._mutTimer=setTimeout(se,200)}),r=[w.querySelector("#cart-area"),w.querySelector(".cart-area"),w.querySelector("#resumo-compra")].filter(Boolean);r.forEach(function(o){t.observe(o,{childList:!0,subtree:!0,characterData:!0})})}catch{}};if(!document.getElementById("mm-checkout-cro-done")){var fe=document.createElement("div");fe.id="mm-checkout-cro-done",fe.style.display="none",document.body.appendChild(fe)}n()}function jn(n){if(!n||!n.items||!n.items.length)return'<aside class="mm-id-sum mm-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><div class="mm-sum-empty"><p>Não conseguimos carregar o resumo do seu pedido.</p><a class="mm-btn-secondary" href="/checkout/cart">Voltar ao carrinho</a></div></div></aside>';var e=3,t=n.items.slice(0,e),r=n.items.length-e,o=t.map(function(hn){var Nn=hn.quantity>1?'<strong class="mm-id-thumb-qty">'+hn.quantity+"×</strong> ":"",qn=!hn.imgSrc&&!(hn.lineTotalPix>0)&&!(hn.lineTotal>0);if(qn)return'<div class="mm-id-thumb"><div class="mm-id-thumb-img"><span class="mm-skel" style="display:block;width:100%;height:100%"></span></div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+Nn+X(hn.name)+"</p>"+(hn.variant?'<p class="mm-id-thumb-variant">'+X(hn.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price"><span class="mm-skel" style="display:inline-block;width:56px;height:15px"></span></div></div>';var Dn=hn.imgSrc?'<img src="'+X(hn.imgSrc)+'" alt="'+X(hn.name)+'" loading="lazy">':'<div class="mm-id-thumb-placeholder">'+U.box+"</div>",Gn=hn.lineTotal>0?hn.lineTotal:hn.lineTotalPix;return'<div class="mm-id-thumb"><div class="mm-id-thumb-img">'+Dn+'</div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+Nn+X(hn.name)+"</p>"+(hn.variant?'<p class="mm-id-thumb-variant">'+X(hn.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price">'+an(Gn)+"</div></div>"}).join("");r>0&&(o+='<div class="mm-id-thumb-more">+ '+r+" "+(r===1?"item":"itens")+" a mais</div>");var u=n.subtotalFull>0?n.subtotalFull:n.subtotalPix,E='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+an(u)+"</span></div>";if(n.shipping!==null&&n.shipping!==void 0){var R;n.shipping===0?R='<span class="mm-row-value is-free">'+U.check+" Grátis</span>":R='<span class="mm-row-value">'+an(n.shipping)+"</span>",E+='<div class="mm-row"><span class="mm-row-label">Frete'+(n.shippingDeadline?' <span class="mm-row-sub">· '+X(n.shippingDeadline)+"</span>":"")+"</span>"+R+"</div>"}n.discount>0&&(E+='<div class="mm-row"><span class="mm-row-label">Desconto'+(n.couponCode?' <span class="mm-row-sub">· '+X(n.couponCode)+"</span>":"")+'</span><span class="mm-row-value is-discount">− '+an(n.discount)+"</span></div>");var tn,en=n.shipping!==null&&n.shipping!==void 0?n.shipping:0;if(n.shipping!==null&&n.shipping!==void 0){var un=Math.max(0,u+en-(n.discount||0)),on=Math.max(0,n.subtotalPix+en-(n.discount||0)),xn=un-on,fn=un/12;tn='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value">'+an(un)+'</div><div class="mm-total-pix"><span>'+an(on)+" à vista no PIX</span>"+(xn>0?'<span class="mm-total-pix-save">economia de '+an(xn)+"</span>":"")+'</div><div class="mm-total-parcela">ou 12x de '+an(fn)+" sem juros</div></div>"}else{var En=u/12;tn='<div class="mm-total"><div class="mm-total-label">Subtotal</div><div class="mm-total-value">'+an(n.subtotalPix)+'</div><div class="mm-total-pix"><span>à vista no PIX</span></div><div class="mm-total-parcela">ou 12x de '+an(En)+" sem juros</div></div>"}return'<aside class="mm-id-sum mm-sum"><h2 class="mm-h">Resumo do pedido</h2><div class="mm-sum-card"><div class="mm-id-thumbs">'+o+'</div><div class="mm-rows">'+E+"</div>"+be(n.couponCode,"summary-coupon")+tn+'<a class="mm-id-edit-cart" href="/checkout/cart"><span>Editar carrinho</span></a></div><a class="mm-help mm-sum-help" href="'+b+'" target="_blank" rel="noopener" data-mm-track="help-whats-sum">'+U.whats+"<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span></a></aside>"}function Se(){var n='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',e='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',t='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="9" x2="17" y2="9"/><line x1="7" y1="13" x2="17" y2="13"/><line x1="7" y1="17" x2="13" y2="17"/></svg>',r='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';return'<section class="mm-id-form-col"><h2 class="mm-id-h2">Quase lá! Identifique-se</h2><p class="mm-id-sub">Informe seu e-mail para finalizar a compra de forma rápida e segura.</p><form class="mm-id-form" data-mm-act="identify-submit" novalidate><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+n+'</span><input type="email" id="mm-id-email" name="mm-email" class="mm-input" placeholder="seu@email.com" autocomplete="email" inputmode="email" required></div><p class="mm-id-microcopy">'+U.lock+'<span>Seu e-mail é seguro · Não compartilhamos com terceiros</span></p><button type="submit" class="mm-cta">Continuar'+U.arrow+'</button></form><div class="mm-id-divider"><span>ou</span></div><div class="mm-id-google-slot"></div><button type="button" class="mm-id-guest-toggle" data-mm-act="guest-go" aria-label="Continuar como visitante"><span class="mm-id-guest-icon" aria-hidden="true">'+e+'</span><span class="mm-id-guest-label">Continuar como visitante (sem criar conta)</span><span class="mm-id-guest-arrow" aria-hidden="true">'+U.arrow+'</span></button><div class="mm-trust mm-id-trust"><span class="mm-trust-item">'+U.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+U.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+U.shield+'<span>Garantia 12 meses</span></span></div><p class="mm-id-lgpd">Ao continuar, você concorda com nossa <a href="/politica-de-privacidade" target="_blank" rel="noopener">Política de Privacidade</a></p></section>'}function Te(n){var e=document.getElementById("mm-layout");if(e)return e.parentElement!==w&&w.insertBefore(e,w.firstChild),e;var t=document.createElement("div");return t.id="mm-layout",t.classList.add("mm-id-layout"),t.innerHTML=ne("delivery")+'<div class="mm-grid mm-id-grid">'+Se()+jn(n)+"</div>",w.insertBefore(t,w.firstChild),document.body.classList.add("mm-checkout-rebuild"),Ne(),w.classList.add("mm-shadow-mode"),document.documentElement.classList.remove("mm-cart-loading"),t}function Ne(){var n=document.querySelector(".mm-id-google-slot"),e=w.querySelector(".social-login-area");if(!(!n||!e)&&!n.contains(e))try{n.appendChild(e),n.classList.add("is-loaded")}catch{}}function l(n){vn.set("mm_user_email",n);var e=w.querySelector("#login");if(!e)return!1;e.value=n,ae(e);var t=e.closest("form"),r=t?t.querySelector('button.button-send, button[type="submit"]'):null;return r?(r.click(),!0):t?(t.submit(),!0):!1}function k(){var n=document.getElementById("mm-layout");!n||n._mmBound||(n._mmBound=!0,n.addEventListener("submit",function(e){var t=e.target.closest('[data-mm-act="identify-submit"]');if(t){e.preventDefault();var r=t.querySelector("#mm-id-email"),o=r?r.value.trim():"";if(!o||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)){r&&(r.classList.add("mm-input-error"),r.focus(),setTimeout(function(){r.classList.remove("mm-input-error")},1500));return}var u=l(o);if(u){var E=t.querySelector(".mm-cta");E&&E.classList.add("is-loading")}return}}),n.addEventListener("click",function(e){var t=e.target.closest("[data-mm-act]");if(t){var r=t.getAttribute("data-mm-act");r==="guest-go"&&(vn.set("mm_checkout_mode","guest"),t.classList.add("is-loading"),location.href="/checkout/onepage")}}))}function T(n){try{var e=new DOMParser().parseFromString(n,"text/html"),t=e.querySelector("#checkout-main-area");if(!t)return null;for(var r=[],o=t.querySelectorAll(".cart-item"),u=0,E=0;E<o.length;E++){var R=o[E],tn=R.querySelector("figure img")||R.querySelector("#product-img")||R.querySelector("img"),en=R.querySelector(".column-valor-produto .valor"),un=parseFloat(R.getAttribute("data-valor")||"0"),on=en?Cn(en.textContent):0;r.push({name:R.getAttribute("data-item-name")||R.getAttribute("data-name")||"",variant:R.getAttribute("data-item-variant")||"",imgSrc:tn&&tn.getAttribute("src")||"",quantity:parseInt(R.getAttribute("data-item-quantity")||"1",10),lineTotal:un,lineTotalPix:on,isPix:!!R.querySelector(".column-valor-produto .sub"),deposito:R.getAttribute("data-item-deposito")==="1"}),u+=un}if(r.length===0)return null;var xn=t.querySelector("#resumo-compra .resumo-valores .value"),fn=xn?Cn(xn.textContent):0;fn<=0&&(fn=r.reduce(function(Pn,Qn){return Pn+(Qn.lineTotalPix||0)},0));var En=t.querySelector("#resumo-compra .discount-value"),hn=En?Cn(En.textContent):0,Nn=t.querySelector("#resumo-compra .txt-cupom"),qn="";if(Nn){var Dn=(Nn.textContent||"").replace(/\s+/g,"").trim();/^[A-Za-z0-9][A-Za-z0-9._-]{1,}$/.test(Dn)&&(qn=Dn.toUpperCase())}var Gn=t.querySelector("#resumo-compra .frete-calculado"),ie=null,ze="";if(Gn){var S=Gn.querySelector(".servico-frete[data-valor-frete]");if(S){var z=S.getAttribute("data-valor-frete");if(z!==null&&z!==""){var Q=parseFloat(z);isNaN(Q)||(ie=Q)}}var dn=Gn.textContent.trim();if(ie===null&&dn){var cn=Cn(dn);cn>0&&(ie=cn)}var On=dn.match(/(\d+)\s*dias?/i);On&&(ze=On[1]+" dias úteis")}return{ts:Date.now(),items:r,subtotalPix:fn,subtotalFull:u,discount:hn,couponCode:qn,shipping:ie,shippingDeadline:ze,cepValue:""}}catch{return null}}function h(n){try{fetch("/checkout/cart",{credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(e){return e.text()}).then(function(e){var t=T(e);t&&vn.set(_,JSON.stringify(t)),n(t)}).catch(function(){n(null)})}catch{n(null)}}function q(n){var e=document.querySelector("#mm-layout .mm-id-sum");if(e){var t=e.parentNode;if(t){var r=document.createElement("div");r.innerHTML=jn(n);var o=r.firstChild;o&&t.replaceChild(o,e)}}}function rn(){h(function(n){n&&n.items&&n.items.length>0&&(Y&&d(n),q(n))})}function sn(n){var e="cep=&nenhumCreditoSelecionado=true&area=main-cart&cupom-desconto="+encodeURIComponent(n||"");return fetch("/checkout/cart?operation=atualizaValoresCarrinho",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"text/html,application/json,*/*","X-Requested-With":"XMLHttpRequest"},body:e}).then(function(t){if(!t.ok)throw new Error("HTTP "+t.status);return t.text()})}function mn(n,e){try{var t=new DOMParser().parseFromString(n,"text/html"),r=t.querySelector(".txt-cupom");if(!r)return!1;var o=(r.textContent||"").replace(/\s+/g,"").trim().toUpperCase();return!!o&&o===String(e).toUpperCase()}catch{return!1}}function yn(n,e){if(n){n.classList.remove("is-busy");var t=n.querySelector(".mm-coupon-error");t&&(t.textContent=e,t.removeAttribute("hidden"));var r=n.querySelector("input");if(r){r.classList.add("mm-input-error");try{r.focus()}catch{}}}}function wn(n,e){n=(n||"").trim();var t=e?e.closest(".mm-coupon"):null;if(!n){yn(t,"Digite um cupom.");return}if(t){t.classList.add("is-busy");var r=t.querySelector(".mm-coupon-error");r&&r.setAttribute("hidden","");var o=t.querySelector("input");o&&o.classList.remove("mm-input-error")}sn(n).then(function(u){if(mn(u,n)){if(O){location.reload();return}rn()}else yn(t,"Cupom inválido ou não aplicável a este carrinho.")}).catch(function(){yn(t,"Não foi possível aplicar agora. Tente de novo.")})}function An(n){var e=n?n.closest(".mm-coupon"):null;e&&e.classList.add("is-busy"),sn("").then(function(){if(O){location.reload();return}rn()}).catch(function(){e&&e.classList.remove("is-busy")})}function Tn(n){!n||n._mmCouponBound||(n._mmCouponBound=!0,n.addEventListener("submit",function(e){var t=e.target.closest('[data-mm-act="summary-coupon-submit"]');if(t){e.preventDefault();var r=t.querySelector("input");wn(r?r.value:"",t)}}),n.addEventListener("click",function(e){var t=e.target.closest('[data-mm-act="summary-coupon-remove"]');t&&(e.preventDefault(),An(t))}))}if(m){let n=function(t){if(t=t||0,t>30){e();return}var r=w.querySelector("#login, #login-form-etapa-01");r||t>8?e():setTimeout(function(){n(t+1)},250)},e=function(){var t=$n();Te(t),k(),Tn(document.getElementById("mm-layout")),Ne(),setTimeout(Ne,600),setTimeout(Ne,1500),rn(),setTimeout(function(){var r=document.getElementById("mm-id-email");r&&!("ontouchstart"in window)&&r.focus()},250)};n()}function gn(n){var e=String(n||"").replace(/\D/g,"").slice(0,11);return e.length<=3?e:e.length<=6?e.slice(0,3)+"."+e.slice(3):e.length<=9?e.slice(0,3)+"."+e.slice(3,6)+"."+e.slice(6):e.slice(0,3)+"."+e.slice(3,6)+"."+e.slice(6,9)+"-"+e.slice(9)}function Ln(n){var e=String(n||"").replace(/\D/g,"").slice(0,11);return e.length<=2?e.length?"("+e:"":e.length<=6?"("+e.slice(0,2)+") "+e.slice(2):e.length<=10?"("+e.slice(0,2)+") "+e.slice(2,6)+"-"+e.slice(6):"("+e.slice(0,2)+") "+e.slice(2,7)+"-"+e.slice(7)}function In(n){var e=String(n||"").replace(/\D/g,"").slice(0,8);return e.length<=5?e:e.slice(0,5)+"-"+e.slice(5)}function ee(n,e){var t=String(n||"").replace(/\D/g,"");if(t.length!==8){e(null);return}try{fetch("https://viacep.com.br/ws/"+t+"/json/",{headers:{Accept:"application/json"}}).then(function(r){return r.json()}).then(function(r){if(!r||r.erro){e(null);return}e({logradouro:r.logradouro||"",bairro:r.bairro||"",cidade:r.localidade||"",estado:r.uf||""})}).catch(function(){e(null)})}catch{e(null)}}var Vn={mail:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',doc:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 12h8v2H8zm0 4h5v2H8z"/></svg>',phone:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>',pin:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',pix:'<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M11.917 11.71a2.046 2.046 0 0 1-1.454-.602l-2.1-2.1a.4.4 0 0 0-.551 0l-2.108 2.108a2.044 2.044 0 0 1-1.454.602h-.414l2.66 2.66c.83.83 2.177.83 3.007 0l2.667-2.668h-.253zM4.25 4.282c.55 0 1.066.214 1.454.602l2.108 2.108a.39.39 0 0 0 .552 0l2.1-2.1a2.044 2.044 0 0 1 1.453-.602h.253L9.503 1.623a2.127 2.127 0 0 0-3.007 0l-2.66 2.66h.414z"/><path d="m14.377 6.496-1.612-1.612a.307.307 0 0 1-.114.023h-.733c-.379 0-.75.154-1.017.422l-2.1 2.1a1.005 1.005 0 0 1-1.425 0L5.268 5.32a1.448 1.448 0 0 0-1.018-.422h-.9a.306.306 0 0 1-.109-.021L1.623 6.496c-.83.83-.83 2.177 0 3.008l1.618 1.618a.305.305 0 0 1 .108-.022h.901c.38 0 .75-.153 1.018-.421L7.375 8.57a1.034 1.034 0 0 1 1.426 0l2.1 2.1c.267.268.638.421 1.017.421h.733c.04 0 .079.01.114.024l1.612-1.612c.83-.83.83-2.178 0-3.008z"/></svg>',cardBig:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>',barcode:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 6h2v12H2zm3 0h1v12H5zm2 0h3v12H7zm4 0h1v12h-1zm3 0h2v12h-2zm3 0h1v12h-1zm2 0h3v12h-3z"/></svg>',editPencil:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>'};function s(n){var e=n?' value="'+X(n)+'"':"";return'<section class="mm-op-form-col"><h2 class="mm-id-h2">Falta pouco. Onde entregar?</h2><p class="mm-id-sub">Preencha seus dados e o endereço de entrega — o frete é calculado automaticamente.</p><form class="mm-op-form" data-mm-act="onepage-submit" novalidate><div class="mm-op-card"><h3 class="mm-op-card-title">'+Vn.user+'<span>Quem vai receber</span></h3><div class="mm-op-grid-2"><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+Vn.mail+'</span><input type="email" id="mm-op-email" class="mm-input" placeholder="seu@email.com" autocomplete="email" inputmode="email" required'+e+'></div><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+Vn.user+'</span><input type="text" id="mm-op-nome" class="mm-input" placeholder="Nome completo" autocomplete="name" required></div><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+Vn.doc+'</span><input type="tel" id="mm-op-cpf" class="mm-input" placeholder="CPF" inputmode="numeric" autocomplete="off" maxlength="14" required></div><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+Vn.phone+'</span><input type="tel" id="mm-op-tel" class="mm-input" placeholder="(11) 91234-5678" inputmode="tel" autocomplete="tel" maxlength="15" required></div></div><p class="mm-op-microcopy-soft">Usamos seus dados só pra emitir nota fiscal e te avisar da entrega.</p></div><div class="mm-op-card"><h3 class="mm-op-card-title">'+Vn.pin+'<span>Endereço de entrega</span></h3><div class="mm-op-grid-2"><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+Vn.pin+'</span><input type="tel" id="mm-op-cep" class="mm-input" placeholder="CEP — 00000-000" inputmode="numeric" autocomplete="postal-code" maxlength="9" required><span class="mm-input-status" id="mm-op-cep-status" aria-live="polite"></span></div><a class="mm-op-cep-help" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+Vn.home+'</span><input type="text" id="mm-op-rua" class="mm-input" placeholder="Rua, Av, Travessa..." autocomplete="address-line1" required></div><div class="mm-input-wrap"><input type="tel" id="mm-op-num" class="mm-input mm-input-noicon" placeholder="Número" inputmode="numeric" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-comp" class="mm-input mm-input-noicon" placeholder="Complemento (opcional)" autocomplete="address-line2"></div><div class="mm-input-wrap mm-op-col-2"><input type="text" id="mm-op-bairro" class="mm-input mm-input-noicon" placeholder="Bairro" autocomplete="address-level3" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-cidade" class="mm-input mm-input-noicon" placeholder="Cidade" autocomplete="address-level2" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-uf" class="mm-input mm-input-noicon" placeholder="UF" maxlength="2" autocomplete="address-level1" required></div></div><div class="mm-op-frete" id="mm-op-frete-slot"></div></div><button type="submit" class="mm-cta mm-op-cta">Última etapa: pagamento'+U.arrow+'</button><p class="mm-id-microcopy mm-op-cta-sub">'+U.lock+'<span>Você revisa tudo antes de finalizar</span></p></form><div class="mm-trust mm-id-trust"><span class="mm-trust-item">'+U.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+U.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+U.shield+"<span>Garantia 12 meses</span></span></div></section>"}function f(){var n=document.cookie.match(/(?:^|;\s*)zordEm=([^;]+)/);if(!n)return"";try{return decodeURIComponent(n[1])}catch{return n[1]}}function j(n){var e=w.querySelector("#destinatario");if(e&&e.value&&e.value.trim())return e.value.trim();var t=(n||[]).filter(function(r){return r.checked})[0]||(n||[])[0];return t&&t.lines[0]?t.lines[0]:""}function pn(){var n=w.querySelectorAll("#box-lista-enderecos .item-endereco");return[].map.call(n,function(e){var t=e.querySelector('input[name="endereco_entrega"]');if(!t)return null;var r=e.querySelector(".info-address"),o=r?[].map.call(r.querySelectorAll(".txt-info"),function(u){return(u.textContent||"").replace(/\s+/g," ").trim()}).filter(Boolean):[];return{id:t.id,value:t.value,checked:t.checked,lines:o}}).filter(Boolean)}var zn='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6M14 11v6"/></svg>';function Mn(n,e){var t=n.lines[0]?"<strong>"+X(n.lines[0])+"</strong>":"",r=n.lines.slice(1).map(function(o){return"<span>"+X(o)+"</span>"}).join("");return'<label class="mm-op-addr'+(n.checked?" is-selected":"")+'" data-mm-addr="'+X(n.value)+'"><input type="radio" name="mm-op-addr" value="'+X(n.value)+'"'+(n.checked?" checked":"")+'><span class="mm-op-addr-check" aria-hidden="true"></span><span class="mm-op-addr-body">'+t+r+'</span><button type="button" class="mm-op-addr-del" data-mm-act="addr-remove" data-id="'+X(n.value)+'" title="Remover endereço" aria-label="Remover este endereço">'+zn+"</button></label>"}function a(){var n=pn(),e=f(),t=j(n),r=(t||e||"?").trim().charAt(0).toUpperCase(),o=4,u;if(!n.length)u='<p class="mm-op-microcopy-soft">Nenhum endereço salvo — você adiciona na próxima etapa.</p>';else if(n.length<=o)u=n.map(Mn).join("");else{var E=null,R=[];n.forEach(function(en){en.checked&&!E?E=en:R.push(en)});var tn=E?[E].concat(R):n.slice();u=tn.slice(0,o).map(Mn).join("")+'<div class="mm-op-addr-extra" hidden>'+tn.slice(o).map(Mn).join("")+'</div><button type="button" class="mm-op-addr-more" data-mm-act="addr-more">Ver mais '+(tn.length-o)+" endereços</button>"}return'<section class="mm-op-form-col"><h2 class="mm-id-h2">Falta pouco. Confirme a entrega.</h2><p class="mm-id-sub">Seus dados já estão com a gente — é só escolher onde entregar.</p><form class="mm-op-form" data-mm-act="onepage-submit" novalidate><div class="mm-op-card mm-op-ident"><span class="mm-op-ident-avatar" aria-hidden="true">'+X(r)+'</span><span class="mm-op-ident-info"><span class="mm-op-ident-label">Você está logado</span>'+(t?'<strong class="mm-op-ident-name">'+X(t)+"</strong>":"")+(e?'<span class="mm-op-ident-email">'+X(e)+"</span>":"")+'</span><a class="mm-op-ident-switch" href="/logout">Sair</a></div><div class="mm-op-card"><h3 class="mm-op-card-title">'+Vn.pin+'<span>Endereço de entrega</span></h3><div class="mm-op-addr-list">'+u+'</div><a class="mm-op-addr-new" data-mm-act="addr-novo" href="#">'+Vn.pin+'Entregar em outro endereço</a><div class="mm-op-frete" id="mm-op-frete-slot"></div></div><button type="submit" class="mm-cta mm-op-cta">Última etapa: pagamento'+U.arrow+'</button><p class="mm-id-microcopy mm-op-cta-sub">'+U.lock+'<span>Você revisa tudo antes de finalizar</span></p></form><div class="mm-trust mm-id-trust"><span class="mm-trust-item">'+U.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+U.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+U.shield+"<span>Garantia 12 meses</span></span></div></section>"}function p(){if(!w)return null;function n(E){var R=w.querySelector(E);return R?(R.textContent||"").replace(/\s+/g," ").trim():""}var e=n(".value.valor-frete")||n("span.valor-frete"),t=n(".prazo-frete"),r=n(".nome-servico-frete").replace(/[()]/g,"").trim();if(!e&&!t)return null;var o=null;if(/gr[aá]tis/i.test(e))o=0;else if(e){var u=e.replace(/[^\d,.]/g,"");u.indexOf(",")!==-1&&(u=u.replace(/\./g,"").replace(",",".")),o=parseFloat(u),isNaN(o)&&(o=null)}return{value:o,deadline:t,name:r}}function d(n){n=n||{};var e=p();return e&&e.value!==null&&(n.shipping=e.value,e.deadline&&(n.shippingDeadline=e.deadline),e.name&&(n.shippingName=e.name)),n}function C(){var n=(w&&w.innerText||document.body.innerText||"").match(/CPF[:\s]*([\d]{3}\.?[\d]{3}\.?[\d]{3}\-?[\d]{2})/i);return n?n[1].trim():""}function I(n){[].forEach.call(document.querySelectorAll(".mm-op-addr"),function(e){e.classList.toggle("is-selected",e.getAttribute("data-mm-addr")===String(n))})}var M=null,D=null,L=null;function v(){if(!M){var n=document.getElementById("mm-layout");if(n){var e=n.getBoundingClientRect(),t=window.innerHeight||800,r=n.cloneNode(!0);r.id="mm-op-freeze",r.setAttribute("aria-hidden","true");var o="";try{o=getComputedStyle(document.body).backgroundColor}catch{}(!o||o==="rgba(0, 0, 0, 0)"||o==="transparent")&&(o="#ffffff"),r.style.cssText="position:fixed;left:"+Math.round(e.left)+"px;top:"+Math.round(e.top)+"px;width:"+Math.round(e.width)+"px;min-height:"+Math.round(Math.max(e.height,t-Math.max(e.top,0)))+"px;z-index:9990;pointer-events:none;background:"+o+";",document.body.appendChild(r),M=r,D&&clearTimeout(D),D=setTimeout(N,1600)}}}function A(){M&&(L&&clearTimeout(L),L=setTimeout(N,250))}function N(){if(D&&(clearTimeout(D),D=null),L&&(clearTimeout(L),L=null),!!M){var n=M;M=null,n.style.transition="opacity 160ms ease",n.style.opacity="0",setTimeout(function(){n.parentNode&&n.parentNode.removeChild(n)},180)}}function nn(n){I(n),v();var e=document.getElementById("endereco_"+n)||w.querySelector('input[name="endereco_entrega"][value="'+n+'"]');e&&(e.checked||(e.checked=!0),e.dispatchEvent(new Event("click",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0})))}var Z="delivery",ln=null,bn=null;function Sn(){var n=document.getElementById("mm-layout");if(!(!n||n.__mmLoggedBound)){n.__mmLoggedBound=!0,n.addEventListener("submit",function(o){var u=o.target.closest('[data-mm-act="onepage-submit"]');u&&(o.preventDefault(),Yn(u))});var e=n.querySelector(".mm-op-addr-list");e&&e.addEventListener("change",function(o){o.target&&o.target.name==="mm-op-addr"&&nn(o.target.value)}),e&&e.addEventListener("click",function(o){var u=o.target.closest('[data-mm-act="addr-remove"]');if(u){o.preventDefault(),o.stopPropagation();var E=u.getAttribute("data-id"),R=w.querySelector('#box-lista-enderecos .remover-endereco[data-id="'+E+'"]');R&&R.click()}});var t=n.querySelector('[data-mm-act="addr-more"]');t&&t.addEventListener("click",function(){var o=n.querySelector(".mm-op-addr-extra");o&&(o.hidden=!1),t.remove()});var r=n.querySelector('[data-mm-act="addr-novo"]');r&&r.addEventListener("click",function(o){o.preventDefault(),Z="native",n.style.display="none",w.classList.remove("mm-shadow-mode"),document.body.classList.remove("mm-checkout-rebuild");try{window.scrollTo({top:0,behavior:"smooth"})}catch{window.scrollTo(0,0)}})}}function Bn(){if(Z!=="native"&&!document.getElementById("mm-layout")&&w){if(Z==="payment"){if(!w.querySelector('input[name="forma-pagto"]'))return;try{mt(ln||{})}catch{}return}w.querySelector("#box-lista-enderecos")&&(Fn(d($n()),""),Sn(),Wn(),rn(),A())}}function Un(){if(!Un._obs){var n=new MutationObserver(function(){Z!=="native"&&!document.getElementById("mm-layout")&&!document.getElementById("mm-op-overlay")&&(bn&&clearTimeout(bn),bn=setTimeout(Bn,80))});n.observe(w,{childList:!0}),Un._obs=n}}function Wn(){var n=document.querySelector('.mm-op-addr input[name="mm-op-addr"]:checked');n&&I(n.value);var e=p();e&&e.value!==null&&he({value:e.value,name:e.name||"",deadline:e.deadline||"",city:"",options:[]}),Un()}function Yn(n){var e=document.querySelector('.mm-op-addr input[name="mm-op-addr"]:checked'),t=e?e.value:"";if(!t){var r=document.querySelector('[data-mm-act="addr-novo"]');r&&r.click();return}var o=pn(),u=o.filter(function(en){return en.value===String(t)})[0]||{},E=u.lines||[];ln={email:f(),nome:((w.querySelector("#destinatario")||{}).value||E[0]||"").trim(),cpf:C(),tel:"",addressLines:E.slice(1),rua:E[1]||"",num:"",comp:"",bairro:"",cidade:E[2]||"",uf:"",cep:""};var R=n&&n.querySelector(".mm-cta");R&&R.classList.add("is-loading"),pt("Abrindo o pagamento..."),Z="payment";var tn=0;(function en(){var un=w.querySelector('input[name="forma-pagto"], #forma-pagto-pix, #forma-pagto-cartao');if(un){try{mt(ln)}catch{var on=document.getElementById("mm-op-overlay");on&&on.remove(),Z="native";var xn=document.getElementById("mm-layout");xn&&(xn.style.display="none"),w.classList.remove("mm-shadow-mode")}return}if(++tn<40){setTimeout(en,200);return}var fn=document.getElementById("mm-op-overlay");fn&&fn.remove(),Z="native";var En=document.getElementById("mm-layout");En&&(En.style.display="none"),w.classList.remove("mm-shadow-mode")})()}function Fn(n,e){var t=document.getElementById("mm-layout");if(t)return t.parentElement!==w&&w.insertBefore(t,w.firstChild),t;var r=document.createElement("div");return r.id="mm-layout",r.classList.add("mm-id-layout"),r.classList.add("mm-op-layout"),r.innerHTML=ne("delivery")+'<div class="mm-grid mm-id-grid mm-op-grid">'+(Y?a():s(e))+jn(n)+"</div>",Y&&r.classList.add("mm-op-logged"),w.insertBefore(r,w.firstChild),document.body.classList.add("mm-checkout-rebuild"),w.classList.add("mm-shadow-mode"),document.documentElement.classList.remove("mm-cart-loading"),r}function he(n){var e=document.getElementById("mm-op-frete-slot");if(e){if(n==="loading"){e.innerHTML='<div class="mm-op-frete-loading"><div class="mm-op-frete-spinner"></div><span>Calculando frete...</span></div>';return}if(n==="error"){e.innerHTML='<div class="mm-op-frete-error"><span>Não conseguimos calcular o frete. Confira o CEP e tente novamente.</span></div>';return}var t=n.value===0,r=t?'<strong class="mm-op-frete-value is-free">Grátis</strong>':'<strong class="mm-op-frete-value">'+an(n.value)+"</strong>",o=n.name?'<span class="mm-op-frete-name">'+X(n.name)+"</span>":"",u=n.deadline?'<span class="mm-op-frete-deadline">Entrega em '+X(n.deadline)+"</span>":"",E=n.city?'<span class="mm-op-frete-city">para '+X(n.city)+"</span>":"",R="";if(n.options&&n.options.length>1){R='<div class="mm-op-frete-options"><button type="button" class="mm-op-frete-toggle" data-mm-act="toggle-frete-opts" aria-expanded="false">Ver outras opções ('+n.options.length+')</button><div class="mm-op-frete-options-list" hidden>';for(var tn=0;tn<n.options.length;tn++){var en=n.options[tn],un=en.isSelected?" is-selected":"",on=en.isFree?'<span class="mm-op-frete-opt-value is-free">Grátis</span>':'<span class="mm-op-frete-opt-value">'+an(en.value)+"</span>";R+='<button type="button" class="mm-op-frete-opt'+un+'" data-mm-act="op-ship-select" data-ship-id="'+X(en.id)+'" aria-pressed="'+(en.isSelected?"true":"false")+'"><span class="mm-op-frete-opt-radio" aria-hidden="true"><span></span></span><span class="mm-op-frete-opt-body"><span class="mm-op-frete-opt-name">'+X(en.name||"Padrão")+"</span>"+(en.deadline?'<span class="mm-op-frete-opt-deadline">'+X(en.deadline)+"</span>":"")+"</span>"+on+"</button>"}R+="</div></div>"}e.innerHTML='<div class="mm-op-frete-card'+(t?" is-free":"")+'"><div class="mm-op-frete-icon">'+U.truck+'</div><div class="mm-op-frete-body"><div class="mm-op-frete-row">'+o+r+"</div>"+u+E+"</div></div>"+R}}function ce(){try{var n=document.querySelector("#resumo-compra");if(n){var e=n.querySelector(".txt-cupom");if(e){var t=(e.textContent||"").replace(/\s+/g,"").trim();if(/^[A-Za-z0-9][A-Za-z0-9._-]{1,}$/.test(t))return t.toUpperCase()}return""}}catch{}try{var r=$n();if(r&&r.couponCode)return String(r.couponCode).toUpperCase()}catch{}return""}function Pe(n,e){var t=Jn(n),r=ce(),o="cep="+encodeURIComponent(t);r&&(o+="&cupom-desconto="+encodeURIComponent(r)),fetch("/checkout/cart?operation=atualizaValoresCarrinho",{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest"},body:o}).then(function(u){return u.text()}).then(function(u){var E;try{E=new DOMParser().parseFromString(u,"text/html")}catch{e(null);return}for(var R=E.querySelectorAll(".servico-frete"),tn=[],en=0;en<R.length;en++){var un=R[en],on=un.getAttribute("data-valor-frete");if(!(on===null||on==="")){var xn=parseFloat(on);if(!isNaN(xn)){var fn=un.querySelector('input[type="radio"]'),En=un.querySelector(".dias-entrega"),hn=En?En.textContent.trim():"",Nn=hn.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i);tn.push({id:fn?fn.value:"",name:un.getAttribute("data-servico-frete")||"",deadline:Nn?Nn[1].replace(/\s+/g," "):"",value:xn,isFree:xn===0,isSelected:fn?fn.checked:!1})}}}if(!tn.length){e(null);return}var qn=tn.filter(function(Gn){return Gn.isSelected})[0];qn||(qn=tn.reduce(function(Gn,ie){return ie.value<Gn.value?ie:Gn},tn[0]),qn.isSelected=!0);var Dn=E.querySelector(".frete-location .city, .frete-calculado .city");e({value:qn.value,name:qn.name,deadline:qn.deadline,city:Dn?Dn.textContent.trim():"",options:tn})}).catch(function(){e(null)})}function Oe(){function n(dn){if(!dn)return"";var cn=dn.match(/(\d+(?:\s*[aà]\s*\d+)?)\s*dias?(?:\s*\([^)]+\))?\s*([úu]teis)?/i);return cn?cn[1].replace(/\s+/g," ")+" dias úteis":""}function e(dn){for(var cn=[],On=dn.querySelectorAll(".servico-frete"),Pn=0;Pn<On.length;Pn++){var Qn=On[Pn],re=Qn.querySelector('input[type="radio"]'),de=Qn.querySelector(".dias-entrega"),qe=parseFloat(Qn.getAttribute("data-valor-frete")||"0"),Ae=Qn.getAttribute("data-servico-frete")||"",Re=de?de.textContent.trim():"",je=Re.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i);cn.push({id:re?re.value:"",name:Ae,deadline:je?je[1].replace(/\s+/g," "):Re,value:qe,isFree:qe===0,isSelected:re?re.checked:!1})}return cn}var t=w.querySelector(".frete-calculado");if(t&&t.textContent.trim()){var r=e(t),o=t.querySelector(".frete-location .city"),u=o?o.textContent.trim():"",E=r.filter(function(dn){return dn.isSelected})[0]||r[0];if(E)return{value:E.value,name:E.name,deadline:E.deadline,city:u,options:r};var R=t.querySelector(".info-frete-selec .info-title span, .info-title span"),tn=t.querySelector(".info-frete-selec .dias-entrega, .dias-entrega"),en=t.querySelector(".value.valor-frete, .valor-frete .value"),un=t.textContent,on=null;if(en&&(/gr[aá]tis/i.test(en.textContent)?on=0:on=Cn(en.textContent)),on===null&&(/gr[aá]tis/i.test(un)?on=0:on=Cn(un)||null),on!==null)return{value:on,name:R?R.textContent.trim():"",deadline:n(tn?tn.textContent:un),city:u,options:[]}}var xn=w.querySelector(".line-entrega"),fn=w.querySelector(".value.valor-frete, .valor-frete .value");if(xn||fn){var En=((xn||fn).textContent||"").trim(),hn=$n(),Nn=hn&&hn.shippingName||"",qn=hn&&hn.shippingDeadline||"",Dn=hn&&hn.shippingCity||"",Gn=hn?hn.shippingOptions||[]:[];if(En){var ie=(w.querySelector(".nome-servico-frete, .info-frete-selec .info-title span")||{}).textContent||"",ze=(w.querySelector(".info-entrega, .prazo-entrega, .line-entrega .sub, .info-frete-selec .dias-entrega")||{}).textContent||"",S=n(ze)||n(En)||qn,z=ie.trim()||Nn;if(/gr[aá]tis/i.test(En))return{value:0,deadline:S,name:z,city:Dn,options:Gn};var Q=Cn(En);if(Q>0)return{value:Q,deadline:S,name:z,city:Dn,options:Gn}}if(hn&&hn.shipping!==null&&hn.shipping!==void 0)return{value:hn.shipping,deadline:qn,name:Nn,city:Dn,options:Gn}}return null}function Ce(){var n=document.getElementById("mm-op-cep");if(n){var e=(n.value||"").replace(/\D/g,"");if(e.length===8){if(Ce._lastCep===e){var t=document.getElementById("mm-op-frete-slot");if(t&&t.querySelector(".mm-op-frete-card"))return}Ce._lastCep=e;var r=(Ce._token||0)+1;Ce._token=r,le(e);var o=w.querySelector("#cep, .input-cep");o&&(o.value=Jn(e),ae(o)),he("loading"),Pe(e,function(u){if(Ce._token===r){if(!u){he("error");return}he(u);var E=$n();E&&(E.shipping=u.value,E.shippingDeadline=u.deadline,E.shippingName=u.name||"",E.shippingCity=u.city||"",E.shippingOptions=u.options||[],vn.set(_,JSON.stringify(E)),q(E))}})}}}function Ee(){var n=document.getElementById("mm-layout");if(!n||n._mmOpBound)return;n._mmOpBound=!0,n.addEventListener("click",function(t){var r=t.target.closest('[data-mm-act="toggle-frete-opts"]');if(r){t.preventDefault();var o=r.parentElement.querySelector(".mm-op-frete-options-list");if(o){var u=o.hasAttribute("hidden");u?o.removeAttribute("hidden"):o.setAttribute("hidden",""),r.setAttribute("aria-expanded",u?"true":"false"),r.textContent=u?"Ocultar opções":"Ver outras opções"}return}var E=t.target.closest('[data-mm-act="op-ship-select"]');if(E){t.preventDefault();var R=E.getAttribute("data-ship-id");if(!R)return;var tn=w.querySelector('.servico-frete input[type="radio"][value="'+R+'"]');if(!tn){console.warn("[mm-op] modalidade não encontrada no DOM:",R);return}for(var en=n.querySelectorAll(".mm-op-frete-opt"),un=0;un<en.length;un++){var on=en[un],xn=on.getAttribute("data-ship-id")===R;on.classList.toggle("is-selected",xn),on.setAttribute("aria-pressed",xn?"true":"false")}tn.checked=!0,tn.click();var fn=$n();if(fn&&fn.shippingOptions&&fn.shippingOptions.length){var En=fn.shippingOptions.filter(function(hn){return String(hn.id)===String(R)})[0];En&&(fn.shipping=En.value,fn.shippingDeadline=En.deadline||"",fn.shippingName=En.name||"",fn.shippingOptions=fn.shippingOptions.map(function(hn){return hn.isSelected=String(hn.id)===String(R),hn}),vn.set(_,JSON.stringify(fn)),he({value:En.value,deadline:En.deadline||"",name:En.name||"",city:fn.shippingCity||"",options:fn.shippingOptions}),q(fn))}return}}),n.addEventListener("submit",function(t){var r=t.target.closest('[data-mm-act="onepage-submit"]');if(!r)return;if(t.preventDefault(),Y){Yn(r);return}var o={email:(document.getElementById("mm-op-email")||{}).value||"",nome:(document.getElementById("mm-op-nome")||{}).value||"",cpf:(document.getElementById("mm-op-cpf")||{}).value||"",tel:(document.getElementById("mm-op-tel")||{}).value||"",cep:(document.getElementById("mm-op-cep")||{}).value||"",rua:(document.getElementById("mm-op-rua")||{}).value||"",num:(document.getElementById("mm-op-num")||{}).value||"",comp:(document.getElementById("mm-op-comp")||{}).value||"",bairro:(document.getElementById("mm-op-bairro")||{}).value||"",cidade:(document.getElementById("mm-op-cidade")||{}).value||"",uf:(document.getElementById("mm-op-uf")||{}).value||""},u=null;function E(un,on,xn){u||(u={id:un,msg:on,fix:xn||null})}var R=document.getElementById("mm-op-email"),tn=Ct(o.email,!!(R&&R.dataset&&R.dataset.mmEmailOk==="1"));if(tn.ok||E("mm-op-email",tn.msg,tn.fix),o.nome.trim().split(/\s+/).length<2&&E("mm-op-nome","Informe nome e sobrenome (como no documento)."),Je(o.cpf)||E("mm-op-cpf",o.cpf.replace(/\D/g,"").length!==11?"CPF incompleto — precisa dos 11 dígitos.":"CPF inválido — confira os números digitados."),o.tel.replace(/\D/g,"").length<10&&E("mm-op-tel","Telefone incompleto — inclua o DDD."),o.cep.replace(/\D/g,"").length!==8&&E("mm-op-cep","CEP incompleto — precisa dos 8 dígitos."),o.rua.trim()||E("mm-op-rua","Informe a rua do endereço de entrega."),o.num.trim()||E("mm-op-num",'Informe o número (use "S/N" se não houver).'),o.bairro.trim()||E("mm-op-bairro","Informe o bairro."),o.cidade.trim()||E("mm-op-cidade","Informe a cidade."),o.uf.trim()||E("mm-op-uf","Informe o estado (UF)."),u){gt(u.msg,u.id,u.fix);return}it();var en=r.querySelector(".mm-cta");en&&en.classList.add("is-loading"),vn.set("mm_user_email",o.email.trim()),Ft(o)}),n.addEventListener("click",function(t){var r=t.target.closest&&t.target.closest(".mm-op-alert-fix");if(r){t.preventDefault();var o=document.getElementById("mm-op-email");o&&(o.value=r.getAttribute("data-mm-fix")||o.value,o.dataset&&(o.dataset.mmEmailOk="1"),o.classList.remove("mm-input-error")),it();var u=document.querySelector(".mm-op-form .mm-cta");if(u)try{u.scrollIntoView({block:"center",behavior:"smooth"})}catch{}return}var E=t.target.closest&&t.target.closest(".mm-op-alert-keep");if(E){t.preventDefault();var R=document.getElementById("mm-op-email");R&&(R.dataset&&(R.dataset.mmEmailOk="1"),R.classList.remove("mm-input-error")),it()}}),n.addEventListener("input",function(t){var r=t.target;if(r){if(r.id&&r.id.indexOf("mm-op-")===0&&(r.classList.remove("mm-input-error"),it(),r.id==="mm-op-email"&&r.dataset&&delete r.dataset.mmEmailOk),r.dataset&&r.dataset.mmCepFill==="1"&&delete r.dataset.mmCepFill,r.id==="mm-op-cpf")r.value=gn(r.value);else if(r.id==="mm-op-tel")r.value=Ln(r.value);else if(r.id==="mm-op-cep"){r.value=In(r.value);var o=r.value.replace(/\D/g,"");o.length===8&&Ye(o)}else r.id==="mm-op-uf"&&(r.value=(r.value||"").replace(/[^A-Za-z]/g,"").toUpperCase().slice(0,2));r.id&&r.id.indexOf("mm-op-")===0&&(Ee._draftTimer&&clearTimeout(Ee._draftTimer),Ee._draftTimer=setTimeout(me,400))}});function e(){Ee._draftTimer&&(clearTimeout(Ee._draftTimer),Ee._draftTimer=null),me()}n.addEventListener("blur",function(t){var r=t.target;r&&r.id&&r.id.indexOf("mm-op-")===0&&e()},!0),window.addEventListener("beforeunload",e)}function Ye(n){var e=document.getElementById("mm-op-cep-status");e&&(e.className="mm-input-status is-loading",e.textContent="Buscando..."),ee(n,function(t){if(e&&(e.className="mm-input-status"),!t){e&&(e.className="mm-input-status is-error",e.textContent="CEP não encontrado",setTimeout(function(){e.className="mm-input-status",e.textContent=""},2500));return}e&&(e.className="mm-input-status is-ok",e.innerHTML=U.check,setTimeout(function(){e.className="mm-input-status",e.innerHTML=""},1800));var r=[["mm-op-rua",t.logradouro],["mm-op-bairro",t.bairro],["mm-op-cidade",t.cidade],["mm-op-uf",t.estado]];r.forEach(function(u){var E=document.getElementById(u[0]);!E||!u[1]||(!E.value||E.dataset.mmCepFill==="1")&&(E.value=u[1],E.dataset.mmCepFill="1")});var o=document.getElementById("mm-op-num");o&&setTimeout(function(){o.focus()},100),Ce._t&&clearTimeout(Ce._t),Ce._t=setTimeout(Ce,200)})}function Je(n){var e=(n||"").replace(/\D/g,"");if(e.length!==11||/^(\d)\1{10}$/.test(e))return!1;var t=0,r,o;for(r=0;r<9;r++)t+=parseInt(e.charAt(r),10)*(10-r);if(o=t*10%11,o===10&&(o=0),o!==parseInt(e.charAt(9),10))return!1;for(t=0,r=0;r<10;r++)t+=parseInt(e.charAt(r),10)*(11-r);return o=t*10%11,o===10&&(o=0),o===parseInt(e.charAt(10),10)}var We=["gmail.com","hotmail.com","hotmail.com.br","outlook.com","outlook.com.br","yahoo.com","yahoo.com.br","icloud.com","live.com","me.com","msn.com","bol.com.br","uol.com.br","terra.com.br","globo.com","ig.com.br","r7.com","oi.com.br","zipmail.com.br","superig.com.br","aol.com"];function at(n,e){var t=n.length,r=e.length,o,u;if(Math.abs(t-r)>3)return 99;var E=[];for(o=0;o<=t;o++)E[o]=[],E[o][0]=o;for(u=0;u<=r;u++)E[0][u]=u;for(o=1;o<=t;o++)for(u=1;u<=r;u++){var R=n.charAt(o-1)===e.charAt(u-1)?0:1;E[o][u]=Math.min(E[o-1][u]+1,E[o][u-1]+1,E[o-1][u-1]+R),o>1&&u>1&&n.charAt(o-1)===e.charAt(u-2)&&n.charAt(o-2)===e.charAt(u-1)&&(E[o][u]=Math.min(E[o][u],E[o-2][u-2]+1))}return E[t][r]}function rt(n){var e=(n||"").toLowerCase(),t,r,o=null,u=99;for(t=0;t<We.length;t++)if(We[t]===e)return null;for(t=0;t<We.length;t++)r=at(e,We[t]),r<u&&(u=r,o=We[t]);return u===1||u===2&&e.length>=12?o:null}function Ct(n,e){var t=(n||"").trim();if(!t)return{ok:!1,msg:"Informe seu e-mail — é pra onde vai a confirmação do pedido."};if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t))return{ok:!1,msg:"E-mail incompleto. Confira — o formato é nome@provedor.com."};var r=t.lastIndexOf("@"),o=t.slice(r+1);if(!/^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*\.[a-z]{2,}$/i.test(o))return{ok:!1,msg:'O domínio do e-mail parece incorreto. Confira depois do "@".'};if(!e){var u=rt(o);if(u){var E=t.slice(0,r+1)+u;return{ok:!1,msg:"Você quis dizer "+E+"?",fix:E}}}return{ok:!0}}var ot=null,dt=[".toast-error .toast-text",".toast-error-ctn .toast-text",".toast-error",".mz-toast-popup.error",".swal2-popup.swal2-icon-error .swal2-html-container",".swal2-popup.swal2-icon-error .swal2-title",".swal2-toast.swal2-icon-error"];function ut(n){var e=(n||"").replace(/\s+/g," ").trim();return e=e.replace(/^[×xX]\s*/,""),e=e.replace(/Ooopss*!*/gi," "),e=e.replace(/(?:\s*(?:Fechar|Cancelar|Cancel|Confirmar|OK|Sim|N[ãa]o|No))+\s*$/i,""),e=e.replace(/\s+/g," ").trim(),e.length<3||e.length>220?"":e}function ft(){for(var n=0;n<dt.length;n++)for(var e=document.querySelectorAll(dt[n]),t=0;t<e.length;t++){var r=e[t];if(!(r.closest&&r.closest("#mm-layout"))&&r.getClientRects().length){var o=ut(r.textContent);if(o)return o}}return null}function St(){if(!window.__mmNativeErrHooked){var n=window.Zord;if(!(!n||typeof n.msgToastError!="function")){window.__mmNativeErrHooked=!0;var e=n.msgToastError;n.msgToastError=function(){try{for(var t=0;t<arguments.length;t++)if(typeof arguments[t]=="string"){var r=ut(arguments[t]);if(r){ot=r;break}}}catch{}return e.apply(this,arguments)}}}}function Et(){ot=null;for(var n=[".toast-error-ctn",".toast-error",".mz-toast-popup.error"],e=0;e<n.length;e++)for(var t=document.querySelectorAll(n[e]),r=0;r<t.length;r++){var o=t[r];if(!(o.closest&&o.closest("#mm-layout")))try{o.remove()}catch{}}var u=document.querySelector(".swal2-popup.swal2-icon-error .swal2-close, .swal2-popup.swal2-icon-error .swal2-confirm");if(u)try{u.click()}catch{}}function ht(){var n=document.querySelector('[name="cf-turnstile-response"], #cf-chl-widget-response');return!!(n&&!n.value)}function zt(){var n=document.querySelector('[name="cf-turnstile-response"], #cf-chl-widget-response');if(!n)return null;for(var e=n.parentElement;e&&e!==document.body;){var t=e.getBoundingClientRect();if(t.width>40&&t.height>20)return e;e=e.parentElement}return null}function qt(n){var e=(n||"").toLowerCase();return/e-?mail/.test(e)?"mm-op-email":/cpf|cnpj|documento/.test(e)?"mm-op-cpf":/telefone|celular/.test(e)?"mm-op-tel":/\bcep\b/.test(e)?"mm-op-cep":/n[uú]mero/.test(e)?"mm-op-num":/bairro/.test(e)?"mm-op-bairro":/cidade|munic[ií]pio/.test(e)?"mm-op-cidade":/\buf\b|estado/.test(e)?"mm-op-uf":/logradouro|endere[cç]o|\brua\b/.test(e)?"mm-op-rua":/nome|destinat/.test(e)?"mm-op-nome":null}function gt(n,e,t){var r=document.querySelector('.mm-op-form[data-mm-act="onepage-submit"]');if(r){var o=r.querySelector(".mm-op-alert");o&&o.remove();var u=r.querySelector(".mm-op-retry");u&&u.remove();var E=document.createElement("div");E.className="mm-op-alert",E.setAttribute("role","alert");var R='<span class="mm-op-alert-msg">'+X(n)+"</span>";t&&(R+='<span class="mm-op-alert-actions"><button type="button" class="mm-op-alert-fix" data-mm-fix="'+X(t)+'">Usar esse</button><button type="button" class="mm-op-alert-keep">Manter o que digitei</button></span>'),E.innerHTML=R,r.insertBefore(E,r.firstChild);var tn=e?document.getElementById(e):null;tn&&tn.classList.add("mm-input-error");try{E.scrollIntoView({block:"center",behavior:"smooth"})}catch{}if(tn&&!t)try{tn.focus({preventScroll:!0})}catch{tn.focus()}}}function it(){var n=document.querySelector('.mm-op-form[data-mm-act="onepage-submit"]');if(n){var e=n.querySelector(".mm-op-alert");e&&e.remove()}}function pt(n){if(!document.getElementById("mm-op-overlay")){var e=document.createElement("div");e.id="mm-op-overlay",e.innerHTML='<div class="mm-op-overlay-card"><div class="mm-op-overlay-spinner"></div><p class="mm-op-overlay-text">'+X(n||"Processando...")+"</p></div>",document.body.appendChild(e)}}function vt(n){var e=document.querySelector("#mm-op-overlay .mm-op-overlay-text");e&&(e.textContent=n)}var Ue=null;function At(){if(!window.__mmStep1Observed){window.__mmStep1Observed=!0;var n=/compraSemCadastro/i;try{var e=window.fetch;typeof e=="function"&&(window.fetch=function(o,u){var E=typeof o=="string"?o:o&&o.url||"",R=u&&u.body||"",tn=n.test(E)||n.test(String(R)),en=e.apply(this,arguments);return tn&&en.then(function(un){Ue&&(un&&un.ok?Ue.done=!0:Ue.failed=!0)}).catch(function(){Ue&&(Ue.failed=!0)}),en})}catch{}try{var t=XMLHttpRequest.prototype.open,r=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(o,u){return this.__mmU=u||"",t.apply(this,arguments)},XMLHttpRequest.prototype.send=function(o){try{if(n.test(this.__mmU||"")||n.test(String(o||""))){var u=this;u.addEventListener("load",function(){Ue&&(u.status>=200&&u.status<300?Ue.done=!0:Ue.failed=!0)}),u.addEventListener("error",function(){Ue&&(Ue.failed=!0)})}}catch{}return r.apply(this,arguments)}}catch{}}}function Ft(n){var e=document.querySelector(".mm-op-form .mm-op-retry");e&&e.remove();var t=n.nome.trim(),r=n.email.trim(),o=n.rua.trim(),u=n.bairro.trim(),E=n.cidade.trim(),R=n.uf.trim(),tn=Jn(n.cep.replace(/\D/g,""));vn.set("mm_user_email",r);var en=function(un,on){var xn=w.querySelector(un);if(!xn)return!1;try{var fn=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;fn.call(xn,on)}catch{xn.value=on}return xn.dispatchEvent(new Event("input",{bubbles:!0})),xn.dispatchEvent(new Event("change",{bubbles:!0})),xn.dispatchEvent(new Event("blur",{bubbles:!0})),!0};en("#nome-completo_2",t),en("#cpf_2",n.cpf),en("#email_3",r),en("#telefone_2",n.tel),en("#cep",tn),en("#destinatario",t),en("#logradouro",o),en("#numero",n.num),en("#complemento",n.comp),en("#bairro",u),en("#cidade",E),en("#estado",R),pt("Confirmando seus dados..."),setTimeout(function(){var un=document.getElementById("mm-layout");un&&(un.style.display="none"),w.classList.remove("mm-shadow-mode");function on(S){var z=w.querySelector("#"+S);return z?z.closest("form"):null}function xn(){var S=on("nome-completo_2");if(!S)return!1;var z=S.querySelector('button[type="submit"], input[type="submit"], button:not([type])');return z?(z.click(),!0):typeof S.requestSubmit=="function"?(S.requestSubmit(),!0):(S.submit(),!0)}function fn(){for(var S=document.querySelectorAll('button, [type="submit"]'),z=0;z<S.length;z++){var Q=(S[z].textContent||"").toLowerCase();if(Q.indexOf("cadastrar endere")!==-1&&S[z].offsetParent!==null)return"ready"}return"wait"}function En(){var S=on("cep");if(!S)return!1;var z=S.querySelector('button[type="submit"], input[type="submit"], button:not([type])');return z?(z.click(),!0):typeof S.requestSubmit=="function"?(S.requestSubmit(),!0):(S.submit(),!0)}function hn(){var S=document.getElementById("mm-op-overlay");S&&S.remove();var z=document.getElementById("mm-layout");z&&(z.style.display=""),w.classList.add("mm-shadow-mode");var Q=document.querySelector(".mm-op-form .mm-cta");Q&&Q.classList.remove("is-loading")}function Nn(S){hn();var z=qt(S),Q=S;z&&(Q=S.replace(/\s*$/,"")+" — corrija o campo destacado e toque em “Última etapa: pagamento”."),gt(Q,z,null)}function qn(S){var z=document.getElementById("mm-op-overlay");z&&z.remove();var Q=document.getElementById("mm-layout");if(Q&&(Q.style.display="none"),w.classList.remove("mm-shadow-mode"),!document.getElementById("mm-handoff-note")){var dn=document.createElement("div");dn.id="mm-handoff-note",dn.className="mm-handoff-note",dn.setAttribute("role","alert"),dn.innerHTML=S==="turnstile"?"<strong>Falta só confirmar que você é humano.</strong><span>Marque a verificação de segurança abaixo e toque em “Próxima etapa”. Seus dados já estão preenchidos.</span>":"<strong>Vamos concluir por aqui.</strong><span>Seus dados já estão preenchidos — é só tocar em “Próxima etapa” para seguir ao pagamento.</span>",document.body.appendChild(dn);var cn=zt();if(!cn){for(var On=document.querySelectorAll("button"),Pn=0;Pn<On.length;Pn++)if(/pr[oó]xima etapa/i.test(On[Pn].textContent||"")&&On[Pn].offsetParent!==null){cn=On[Pn];break}}if(cn)try{cn.scrollIntoView({block:"center",behavior:"smooth"})}catch{}var Qn=0;(function re(){Qn++;var de=document.querySelector('input[name="forma-pagto"], #forma-pagto-pix');if(de&&de.offsetParent!==null){var qe=document.getElementById("mm-handoff-note");qe&&qe.remove();try{mt(n)}catch{}return}Qn<900&&setTimeout(re,400)})()}}function Dn(S){hn();var z=document.querySelector('.mm-op-form[data-mm-act="onepage-submit"]');if(z&&!z.querySelector(".mm-op-retry")){var Q=document.createElement("div");Q.className="mm-op-retry",Q.setAttribute("data-mm-retry","1"),Q.setAttribute("role","alert"),Q.style.cssText="margin:14px 0;padding:12px 16px;border:1px solid #E7B84B;background:#FFF8E6;border-radius:12px;font-family:Poppins,system-ui,sans-serif;font-size:13px;color:#6B5313;line-height:1.45;",Q.textContent=S||"Quase lá — toque em “Última etapa: pagamento” novamente para concluir.",z.insertBefore(Q,z.firstChild);try{Q.scrollIntoView({block:"center",behavior:"smooth"})}catch{}}}function Gn(S){S===0&&vt("Abrindo o pagamento...");var z=document.querySelector('input[name="forma-pagto"], #forma-pagto-pix, #forma-pagto-cartao, #forma-pagto-boleto');if(z&&z.offsetParent!==null){try{mt(n)}catch{var Q=document.getElementById("mm-op-overlay");Q&&Q.remove();var dn=document.getElementById("mm-layout");dn&&(dn.style.display="none")}return}var cn=ot||ft();if(cn){Nn(cn);return}S<40?setTimeout(function(){Gn(S+1)},200):Dn("Não conseguimos abrir o pagamento. Toque em “Última etapa: pagamento” para tentar de novo.")}function ie(){vt("Salvando sua entrega..."),En(),Gn(0)}At(),St(),Et();var ze={done:!1,failed:!1};Ue=ze,setTimeout(function(){xn();var S=80,z=4,Q=0,dn=null,cn=0;(function On(){Q++;var Pn=document.querySelector('input[name="forma-pagto"], #forma-pagto-pix, #forma-pagto-cartao, #forma-pagto-boleto');if(Pn&&Pn.offsetParent!==null){Gn(0);return}var Qn=ot||ft();if(Qn){Nn(Qn);return}if(!ze.done&&ht()){if(cn++,cn>=40){qn("turnstile");return}}else cn=0;var re=fn();if(ze.failed){Dn("Não foi possível iniciar o pedido. Toque em “Última etapa: pagamento” para tentar de novo.");return}if(re==="ready"){ie();return}if(ze.done&&(dn===null&&(dn=Q),Q-dn>=z)){ie();return}if(Q<S){setTimeout(On,250);return}ze.done?ie():qn(ht()?"turnstile":"timeout")})()},120)},80)}function Tt(){var n={pix:null,cartao:null,boleto:null},e=[];try{e=window.Zord&&window.Zord.Calculo&&window.Zord.Calculo.FormasPagamentoPedido||[]}catch{}e.forEach(function(on){var xn=on.formaPagamento&&on.formaPagamento.id,fn=on.formaPagamento&&on.formaPagamento.isCartao,En=on.condicoes||[];!En.length||!fn||(!n.cartao||En.length>n.cartao.condicoes.length)&&(n.cartao={formaId:xn,valorTotal:En[0].valorTotal,condicoes:En.map(function(hn){return{nome:hn.condicaoPagamento&&hn.condicaoPagamento.nome,numParcelas:hn.condicaoPagamento&&hn.condicaoPagamento.numeroParcelas,valorParcela:hn.valorParcela,valorTotal:hn.valorTotal}})})});function t(on){if(!on)return 0;var xn=on.getAttribute&&on.getAttribute("data-valor-total");if(xn){var fn=parseFloat(xn);if(fn>0)return fn}var En=(on.textContent||"").replace(/[^\d,.]/g,"");return En.indexOf(",")!==-1&&(En=En.replace(/\./g,"").replace(",",".")),parseFloat(En)||0}var r=document.querySelector("#valor-total-pedido-pix, .valor-total-pix[data-valor-total]"),o=t(r);if(o>0)n.pix={formaId:17,valorTotal:o};else{var u=e.find&&e.find(function(on){return on.formaPagamento&&on.formaPagamento.id===17});u&&u.condicoes&&u.condicoes[0]&&(n.pix={formaId:17,valorTotal:u.condicoes[0].valorTotal})}var E=document.querySelector("#valor-total-pedido-boleto, .valor-total-boleto[data-valor-total]"),R=t(E);if(R>0)n.boleto={valorTotal:R};else{var tn=e.find&&e.find(function(on){var xn=on.formaPagamento&&on.formaPagamento.id,fn=on.formaPagamento&&on.formaPagamento.isCartao;return!fn&&xn!==17&&on.condicoes&&on.condicoes.length});tn&&(n.boleto={formaId:tn.formaPagamento.id,valorTotal:tn.condicoes[0].valorTotal})}if(!n.cartao){var en=document.querySelector(".valor-parcela-cartao");if(en){var un=t(en);un>0&&(n.cartao={valorTotal:un*12,condicoes:[]})}}return n}function mt(n){var e=$n(),t=Tt();w.classList.add("mm-shadow-mode"),document.body.classList.add("mm-checkout-rebuild");var r=document.getElementById("mm-layout");(!r||r.parentElement!==w)&&(r&&r.parentElement&&r.parentElement.removeChild(r),r=document.createElement("div"),r.id="mm-layout",w.insertBefore(r,w.firstChild)),r.className="mm-op-layout mm-op-step3-layout",r.style.display="",r.innerHTML=Lt(e,n,t),document.documentElement.classList.remove("mm-cart-loading");var o=document.getElementById("mm-op-overlay");o&&o.remove();try{window.scrollTo({top:0,behavior:"smooth"})}catch{window.scrollTo(0,0)}Ot(n,t)}function Lt(n,e,t){var r=typeof renderGlobalFooter=="function"?renderGlobalFooter():"";return ne("payment")+'<main class="mm-op-main"><div class="mm-op-step3-grid"><section class="mm-op-step3-left">'+It(t)+Bt()+'</section><aside class="mm-op-step3-sum-wrap">'+Mt(e)+Pt(n,t,"pix")+"</aside></div></main>"+r}function Mt(n){var e=n||{},t=X(e.nome||""),r=X(e.email||""),o=X(e.cpf||""),u=X(e.tel||""),E=X(e.rua||""),R=X(e.num||""),tn=e.comp?", "+X(e.comp):"",en=X(e.bairro||""),un=X(e.cidade||""),on=X(e.uf||""),xn=X(e.cep||"");return'<div class="mm-op-step3-completed"><div class="mm-op-completed-card" data-section="dados"><div class="mm-op-completed-head"><span class="mm-op-completed-check">'+U.check+'</span><h3 class="mm-op-completed-title">Dados pessoais</h3><a href="/checkout/onepage" class="mm-op-completed-edit" data-mm-act="edit-dados" aria-label="Editar dados">'+Vn.editPencil+' Editar</a></div><dl class="mm-op-completed-body">'+(t?"<div><dt>Nome</dt><dd>"+t+"</dd></div>":"")+(r?"<div><dt>E-mail</dt><dd>"+r+"</dd></div>":"")+(o?"<div><dt>CPF</dt><dd>"+o+"</dd></div>":"")+(u?"<div><dt>Telefone</dt><dd>"+u+"</dd></div>":"")+'</dl></div><div class="mm-op-completed-card" data-section="endereco"><div class="mm-op-completed-head"><span class="mm-op-completed-check">'+U.check+'</span><h3 class="mm-op-completed-title">Endereço de entrega</h3><a href="/checkout/onepage" class="mm-op-completed-edit" data-mm-act="edit-endereco" aria-label="Editar endereço">'+Vn.editPencil+' Editar</a></div><address class="mm-op-completed-address">'+(e.addressLines&&e.addressLines.length?e.addressLines.map(function(fn){return X(fn)}).join("<br>"):E+", "+R+tn+"<br>"+en+" — "+un+"/"+on+"<br>"+(xn?"CEP "+xn:""))+"</address></div></div>"}function It(n){var e=n.pix?n.pix.valorTotal:0,t=n.cartao?n.cartao.valorTotal:0,r=n.boleto?n.boleto.valorTotal:0,o=t>e?t-e:0,u=null;n.cartao&&n.cartao.condicoes&&n.cartao.condicoes.length&&(u=n.cartao.condicoes[n.cartao.condicoes.length-1]);var E=u?"até "+u.numParcelas+"x de "+an(u.valorParcela)+" sem juros":t>0?"até 12x sem juros":"Cartão de crédito",R='<label class="mm-op-pay-radio is-active" data-forma="pix"><input type="radio" name="mm-pay" value="pix" checked><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+Vn.pix+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">PIX</span><span class="mm-op-pay-sub">Aprovação instantânea · em 1 minuto</span></div><div class="mm-op-pay-price">'+(o>0?'<span class="mm-op-pay-badge-save">Economize '+an(o)+"</span>":"")+'<span class="mm-op-pay-amount">'+an(e)+'</span></div></div><div class="mm-op-pay-detail"><ul class="mm-op-pay-benefits"><li>'+U.check+"<span>QR Code e Copia-e-Cola após confirmar</span></li><li>"+U.check+"<span>Pedido aprovado em até 1 minuto</span></li><li>"+U.check+"<span>Pagamento 100% seguro · sem dados de cartão</span></li></ul></div></label>",tn='<div class="mm-op-pay-brands"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-visa.svg" alt="Visa" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-mastercard.svg" alt="Mastercard" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-american-express.svg" alt="American Express" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-elo.svg" alt="Elo" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-hipercard.svg" alt="Hipercard" width="32" height="20"></div>',en='<span class="mm-op-req" aria-hidden="true">*</span>';function un(En){return'<span class="mm-op-field-err" id="'+En+'-err" role="alert" aria-live="polite"></span>'}var on='<div class="mm-op-card-form"><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-num">Número do cartão'+en+'</label><div class="mm-input-wrap mm-input-wrap-card"><span class="mm-input-icon" aria-hidden="true">'+U.card+'</span><input id="mm-pay-card-num" type="tel" class="mm-input" inputmode="numeric" autocomplete="off" data-mmac="cc-number" placeholder="0000 0000 0000 0000" maxlength="23" aria-describedby="mm-pay-card-num-err" aria-required="true" disabled><span class="mm-op-card-brand-detected" aria-live="polite"></span></div>'+un("mm-pay-card-num")+'</div><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-name">Nome impresso no cartão'+en+'</label><input id="mm-pay-card-name" type="text" class="mm-input mm-input-noicon" autocomplete="off" data-mmac="cc-name" placeholder="Como aparece no cartão" maxlength="100" aria-describedby="mm-pay-card-name-err" aria-required="true" disabled>'+un("mm-pay-card-name")+'</div><div class="mm-op-card-field mm-op-card-field-half"><label for="mm-pay-card-exp">Validade'+en+'</label><input id="mm-pay-card-exp" type="tel" class="mm-input mm-input-noicon" inputmode="numeric" autocomplete="off" data-mmac="cc-exp" placeholder="MM/AA" maxlength="5" aria-describedby="mm-pay-card-exp-err" aria-required="true" disabled>'+un("mm-pay-card-exp")+'</div><div class="mm-op-card-field mm-op-card-field-half"><label for="mm-pay-card-cvv">CVV'+en+'</label><input id="mm-pay-card-cvv" type="tel" class="mm-input mm-input-noicon" inputmode="numeric" autocomplete="off" data-mmac="cc-csc" placeholder="000" maxlength="4" aria-describedby="mm-pay-card-cvv-err" aria-required="true" disabled>'+un("mm-pay-card-cvv")+'</div><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-installments">Condições de pagamento'+en+'</label><select id="mm-pay-card-installments" class="mm-input mm-input-noicon mm-op-card-installments" aria-describedby="mm-pay-card-installments-err" aria-required="true" disabled><option value="">Digite o cartão pra ver as condições</option></select>'+un("mm-pay-card-installments")+"</div></div>",xn='<label class="mm-op-pay-radio" data-forma="cartao"><input type="radio" name="mm-pay" value="cartao"><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+Vn.cardBig+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">Cartão de Crédito</span><span class="mm-op-pay-sub">'+X(E)+'</span></div><div class="mm-op-pay-price"><span class="mm-op-pay-amount">'+an(t)+'</span></div></div><div class="mm-op-pay-detail">'+tn+on+"</div></label>",fn='<label class="mm-op-pay-radio" data-forma="boleto"><input type="radio" name="mm-pay" value="boleto"><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+Vn.barcode+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">Boleto Bancário</span><span class="mm-op-pay-sub">Aprovação em 1 a 3 dias úteis</span></div><div class="mm-op-pay-price"><span class="mm-op-pay-amount">'+an(r)+'</span></div></div><div class="mm-op-pay-detail"><ul class="mm-op-pay-benefits"><li>'+U.check+"<span>Código de barras enviado por e-mail</span></li><li>"+U.check+"<span>Pagamento em banco, lotérica ou app</span></li><li>"+U.check+"<span>Vencimento em 3 dias úteis</span></li></ul></div></label>";return'<section class="mm-op-step3-card" aria-labelledby="mm-op-step3-h"><div class="mm-op-step3-heading"><h2 id="mm-op-step3-h" class="mm-h">Como você quer pagar?</h2><p class="mm-op-step3-sub">Última etapa · escolha sua forma de pagamento '+(o>0?"· PIX tem desconto de "+an(o):"")+'</p></div><div class="mm-op-pay-radios" role="radiogroup" aria-label="Forma de pagamento">'+R+xn+fn+'</div><button type="button" class="mm-cta mm-op-cta mm-op-finalizar" data-mm-act="finalizar-compra">'+U.lock+'<span class="mm-op-finalizar-label">Finalizar compra · '+an(e)+'</span></button><p class="mm-op-finalizar-sub">'+U.shield+"<span>Pagamento seguro · criptografia SSL-256 · seus dados não são armazenados</span></p></section>"}function Bt(){return'<div class="mm-op-trust-payment"><div class="mm-op-trust-payment-row"><span class="mm-trust-item">'+U.lock+'<span>Site 100% seguro</span></span><span class="mm-trust-item">'+U.shield+'<span>Garantia 12 meses</span></span><span class="mm-trust-item">'+U.rotate+'<span>7 dias pra trocar</span></span><span class="mm-trust-item">'+U.whats+'<span>Atendimento humano</span></span></div><p class="mm-op-trust-payment-note">Ao finalizar, você concorda com os <a href="/termos-de-uso" target="_blank" rel="noopener">termos de compra</a> e a <a href="/politica-privacidade" target="_blank" rel="noopener">política de privacidade</a>.</p></div>'}function Pt(n,e,t){if(!n||!n.items||!n.items.length)return'<aside class="mm-id-sum mm-sum mm-op-step3-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><p class="mm-sum-empty">Não conseguimos carregar o resumo do seu pedido.</p></div></aside>';var r=e.pix?e.pix.valorTotal:0,o=e.cartao?e.cartao.valorTotal:0,u=e.boleto?e.boleto.valorTotal:0,E=o>r?o-r:0,R=t==="pix"?r:t==="boleto"?u:o,tn=t==="pix"?"no PIX":t==="boleto"?"no boleto":"no cartão",en=3,un=n.items.slice(0,en),on=n.items.length-en,xn=un.map(function(qn){var Dn=qn.imgSrc?'<img src="'+X(qn.imgSrc)+'" alt="'+X(qn.name)+'" loading="lazy">':'<div class="mm-id-thumb-placeholder">'+U.box+"</div>",Gn=qn.quantity>1?'<strong class="mm-id-thumb-qty">'+qn.quantity+"×</strong> ":"",ie=qn.lineTotal>0?qn.lineTotal:qn.lineTotalPix;return'<div class="mm-id-thumb"><div class="mm-id-thumb-img">'+Dn+'</div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+Gn+X(qn.name)+"</p>"+(qn.variant?'<p class="mm-id-thumb-variant">'+X(qn.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price">'+an(ie)+"</div></div>"}).join("");on>0&&(xn+='<div class="mm-id-thumb-more">+ '+on+" "+(on===1?"item":"itens")+" a mais</div>");var fn=n.subtotalFull>0?n.subtotalFull:n.subtotalPix,En='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+an(fn)+"</span></div>";if(n.shipping!==null&&n.shipping!==void 0){var hn=n.shipping===0?'<span class="mm-row-value is-free">'+U.check+" Grátis</span>":'<span class="mm-row-value">'+an(n.shipping)+"</span>";En+='<div class="mm-row"><span class="mm-row-label">Frete'+(n.shippingDeadline?' <span class="mm-row-sub">· '+X(n.shippingDeadline)+"</span>":"")+"</span>"+hn+"</div>"}n.discount>0&&(En+='<div class="mm-row"><span class="mm-row-label">Cupom'+(n.couponCode?' <span class="mm-row-sub">· '+X(n.couponCode)+"</span>":"")+'</span><span class="mm-row-value is-discount">− '+an(n.discount)+"</span></div>"),E>0&&t==="pix"&&(En+='<div class="mm-row mm-row-pix-discount"><span class="mm-row-label">'+U.bolt+' Desconto PIX</span><span class="mm-row-value is-discount">− '+an(E)+"</span></div>");var Nn='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value" data-mm-total>'+an(R)+'</div><div class="mm-total-pix" data-mm-total-sub><span>'+tn+"</span></div></div>";return'<aside class="mm-id-sum mm-sum mm-op-step3-sum" data-active-forma="'+X(t)+'"><h2 class="mm-h">Resumo do pedido</h2><div class="mm-sum-card"><div class="mm-id-thumbs">'+xn+'</div><div class="mm-sum-rows">'+En+"</div>"+Nn+"</div></aside>"}function Ot(n,e){var t=document.getElementById("mm-layout");if(!t||t._mmStep3Bound)return;t._mmStep3Bound=!0;var r=$n(),o={activeForma:"pix",cardNumValid:!1,cardBrand:null,cardInstallments:null,submitting:!1};t.addEventListener("click",function(S){var z=S.target.closest(".mm-op-pay-radio");if(z){var Q=z.querySelector('input[type="radio"]');Q&&!Q.checked&&(S.preventDefault(),Q.checked=!0,en(z.getAttribute("data-forma")));return}if(S.target.closest('[data-mm-act="finalizar-compra"]')){S.preventDefault(),ze();return}var dn=S.target.closest('[data-mm-act="edit-dados"], [data-mm-act="edit-endereco"]');if(dn){S.preventDefault(),location.reload();return}}),t.addEventListener("input",function(S){var z=S.target;!z||!z.id||(z.id==="mm-pay-card-num"?En(z):z.id==="mm-pay-card-exp"?hn(z):z.id==="mm-pay-card-cvv"&&(z.value=(z.value||"").replace(/\D/g,"").slice(0,4)))}),t.addEventListener("change",function(S){if(S.target&&S.target.id==="mm-pay-card-installments"){var z=S.target,Q=z.options[z.selectedIndex];Q&&Q.value&&(o.cardInstallments={numero:parseInt(Q.value,10),label:Q.textContent||""},Dn(Q.value),E("mm-pay-card-installments"))}}),t.addEventListener("blur",function(S){var z=S.target;if(!(!z||!z.id)){var Q=["mm-pay-card-num","mm-pay-card-name","mm-pay-card-exp","mm-pay-card-cvv"];Q.indexOf(z.id)!==-1&&R(z.id)}},!0),t.addEventListener("focus",function(S){var z=S.target;!z||!z.id||/^mm-pay-card-/.test(z.id)&&E(z.id)},!0);function u(S,z){var Q=document.getElementById(S),dn=document.getElementById(S+"-err");Q&&(Q.classList.add("mm-input-error"),Q.setAttribute("aria-invalid","true")),dn&&(dn.textContent=z,dn.classList.add("is-visible"))}function E(S){var z=document.getElementById(S),Q=document.getElementById(S+"-err");z&&(z.classList.remove("mm-input-error"),z.removeAttribute("aria-invalid")),Q&&(Q.textContent="",Q.classList.remove("is-visible"))}function R(S){var z=document.getElementById(S);if(!z)return!0;var Q=(z.value||"").trim();if(S==="mm-pay-card-num"){var dn=Q.replace(/\D/g,"");return dn?dn.length<13?(u(S,"Número do cartão incompleto"),!1):tn(dn)?(E(S),!0):(u(S,"Número do cartão inválido — confira os dígitos"),!1):(u(S,"Informe o número do cartão"),!1)}if(S==="mm-pay-card-name")return Q?Q.split(/\s+/).length<2?(u(S,"Use o nome completo como aparece no cartão"),!1):(E(S),!0):(u(S,"Informe o nome impresso no cartão"),!1);if(S==="mm-pay-card-exp"){var cn=Q.replace(/\D/g,"");if(cn.length!==4)return u(S,"Informe a validade no formato MM/AA"),!1;var On=parseInt(cn.slice(0,2),10),Pn=parseInt(cn.slice(2),10);if(On<1||On>12)return u(S,"Mês inválido (01 a 12)"),!1;var Qn=new Date,re=Qn.getFullYear()%100,de=Qn.getMonth()+1;return Pn<re||Pn===re&&On<de?(u(S,"Cartão expirado"),!1):(E(S),!0)}if(S==="mm-pay-card-cvv"){var qe=Q.replace(/\D/g,"");return qe.length<3?(u(S,"CVV deve ter 3 ou 4 dígitos"),!1):(E(S),!0)}return S==="mm-pay-card-installments"?Q?(E(S),!0):(u(S,"Selecione o número de parcelas"),!1):!0}function tn(S){for(var z=0,Q=!1,dn=S.length-1;dn>=0;dn--){var cn=parseInt(S.charAt(dn),10);Q&&(cn*=2,cn>9&&(cn-=9)),z+=cn,Q=!Q}return z%10===0}function en(S){if(!(!S||o.activeForma===S)){o.activeForma=S,t.querySelectorAll(".mm-op-pay-radio").forEach(function(cn){cn.classList.toggle("is-active",cn.getAttribute("data-forma")===S)});var z=document.getElementById("forma-pagto-"+S);if(z&&!z.checked)try{z.click()}catch{}var Q=t.querySelectorAll(".mm-op-card-form input, .mm-op-card-form select"),dn=S==="cartao";Q.forEach(function(cn){cn.disabled=!dn,dn?cn.dataset.mmac&&cn.setAttribute("autocomplete",cn.dataset.mmac):cn.setAttribute("autocomplete","off")}),un(S),S==="cartao"&&setTimeout(function(){var cn=document.getElementById("mm-pay-card-num");cn&&!cn.value&&cn.focus()},250)}}function un(S){var z=t.querySelector(".mm-op-step3-sum");if(z){z.setAttribute("data-active-forma",S);var Q=e.pix?e.pix.valorTotal:0,dn=e.cartao?e.cartao.valorTotal:0,cn=e.boleto?e.boleto.valorTotal:0,On=dn>Q?dn-Q:0,Pn=S==="pix"?Q:S==="boleto"?cn:dn,Qn=S==="pix"?"no PIX":S==="boleto"?"no boleto":"no cartão",re=z.querySelector("[data-mm-total]");if(re){var de=re.textContent||"",qe=Cn(de);qe!==Pn?on(re,qe,Pn,360):re.textContent=an(Pn)}var Ae=z.querySelector("[data-mm-total-sub] span");Ae&&Ae.textContent!==Qn&&(Ae.textContent=Qn);var Re=z.querySelector(".mm-sum-rows"),je=Re?Re.querySelector(".mm-row-pix-discount"):null;if(S==="pix"&&On>0){if(!je&&Re){var $e=document.createElement("div");$e.innerHTML='<div class="mm-row mm-row-pix-discount"><span class="mm-row-label">'+U.bolt+' Desconto PIX</span><span class="mm-row-value is-discount">− '+an(On)+"</span></div>",Re.appendChild($e.firstChild)}}else je&&je.remove();xn(S)}}function on(S,z,Q,dn){S._mmAnimToken&&cancelAnimationFrame(S._mmAnimToken);var cn=null,On=Q-z;function Pn(Qn){cn||(cn=Qn);var re=Qn-cn,de=Math.min(1,re/dn),qe=1-Math.pow(1-de,3),Ae=z+On*qe;S.textContent=an(Ae),de<1?S._mmAnimToken=requestAnimationFrame(Pn):(S.textContent=an(Q),S._mmAnimToken=null)}S._mmAnimToken=requestAnimationFrame(Pn)}function xn(S){var z=t.querySelector(".mm-op-finalizar-label");if(z){var Q=S==="pix"?e.pix&&e.pix.valorTotal:S==="boleto"?e.boleto&&e.boleto.valorTotal:e.cartao&&e.cartao.valorTotal;z.textContent="Finalizar compra · "+an(Q||0)}}function fn(S){var z=(S||"").replace(/\D/g,"");return z?/^4/.test(z)?"visa":/^(5[1-5]|22[2-9]|2[3-6]|27[01]|2720)/.test(z)?"mastercard":/^3[47]/.test(z)?"amex":/^(4011|4312|4389|4514|4573|5041|5066|5067|509|6277|6362|6363|650|6516|6550)/.test(z)?"elo":/^(606282|384100|384140|384160|606|637095|637568|637599|637609|637612)/.test(z)?"hipercard":null:null}function En(S){var z=(S.value||"").replace(/\D/g,"").slice(0,19),Q=z.replace(/(\d{4})(?=\d)/g,"$1 ");if(Q!==S.value){var dn=S.selectionStart;S.value=Q;try{S.setSelectionRange(dn+1,dn+1)}catch{}}var cn=fn(z);o.cardBrand=cn,o.cardNumValid=z.length>=13;var On=t.querySelector(".mm-op-card-brand-detected");On&&(On.className="mm-op-card-brand-detected"+(cn?" is-"+cn:""),On.textContent=cn?cn.toUpperCase():""),z.length>=6&&(Nn(z),ie())}function hn(S){var z=(S.value||"").replace(/\D/g,"").slice(0,4),Q=z.length>2?z.slice(0,2)+"/"+z.slice(2):z;if(S.value=Q,z.length===4){var dn=z.slice(0,2),cn="20"+z.slice(2);qn("pag-cartao-mes-validade",String(parseInt(dn,10))),qn("pag-cartao-ano-validade",cn)}}function Nn(S){var z=document.getElementById("pag-cartao-numero");if(z){try{var Q=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;Q.call(z,S)}catch{z.value=S}z.dispatchEvent(new Event("input",{bubbles:!0})),z.dispatchEvent(new Event("change",{bubbles:!0})),z.dispatchEvent(new Event("blur",{bubbles:!0}))}}function qn(S,z){var Q=document.getElementById(S);if(Q){try{var dn=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;dn.call(Q,z)}catch{Q.value=z}Q.dispatchEvent(new Event("change",{bubbles:!0}))}}function Dn(S){qn("pag-cartao-parcela",S)}var Gn=null;function ie(){if(Gn)return;var S=document.getElementById("pag-cartao-parcela");if(!S)return;var z=document.getElementById("mm-pay-card-installments");if(!z)return;function Q(){var dn=S.querySelectorAll("option");if(!(dn.length<=1)){var cn="";dn.forEach(function(On){if(!On.value){cn+='<option value="">Selecione as parcelas</option>';return}cn+='<option value="'+X(On.value)+'">'+X(On.textContent.trim())+"</option>"}),z.innerHTML=cn,z.options.length>1&&(z.selectedIndex=1,o.cardInstallments={numero:parseInt(z.options[1].value,10)||1,label:z.options[1].textContent},Dn(z.options[1].value))}}Q(),Gn=new MutationObserver(Q),Gn.observe(S,{childList:!0,subtree:!0})}function ze(){if(console.log("[mm-checkout] submitFinalizar() entry",{submitting:o.submitting,activeForma:o.activeForma}),o.submitting)return;var S=o.activeForma,z=t.querySelector(".mm-op-finalizar");if(!z){console.log("[mm-checkout] submitFinalizar: no .mm-op-finalizar btn");return}if(S==="cartao"){var Q=["mm-pay-card-num","mm-pay-card-name","mm-pay-card-exp","mm-pay-card-cvv","mm-pay-card-installments"],dn=Q.filter(function(Kn){return!R(Kn)});if(console.log("[mm-checkout] validation",{errorCount:dn.length,errors:dn}),dn.length){var cn=document.getElementById(dn[0]);if(cn){cn.focus();try{cn.scrollIntoView({block:"center",behavior:"smooth"})}catch{}}return}var On=document.getElementById("mm-pay-card-name"),Pn=document.getElementById("mm-pay-card-cvv"),Qn=document.getElementById("pag-cartao-titular");if(Qn){try{var re=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;re.call(Qn,On.value.trim())}catch{Qn.value=On.value.trim()}Qn.dispatchEvent(new Event("input",{bubbles:!0})),Qn.dispatchEvent(new Event("blur",{bubbles:!0}))}var de=document.getElementById("pag-cartao-vericacao");if(de){try{var qe=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;qe.call(de,Pn.value.replace(/\D/g,""))}catch{de.value=Pn.value.replace(/\D/g,"")}de.dispatchEvent(new Event("input",{bubbles:!0})),de.dispatchEvent(new Event("blur",{bubbles:!0}))}var Ae=document.getElementById("pag-cartao-cpf");if(Ae&&n&&n.cpf){try{var Re=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;Re.call(Ae,n.cpf)}catch{Ae.value=n.cpf}Ae.dispatchEvent(new Event("input",{bubbles:!0})),Ae.dispatchEvent(new Event("blur",{bubbles:!0}))}}o.submitting=!0,z.classList.add("is-loading"),z.setAttribute("aria-busy","true");var je=z.querySelector(".mm-op-finalizar-label");if(je&&(je.textContent="Processando pagamento..."),pt("Finalizando seu pedido..."),S==="cartao"){var $e=document.getElementById("mm-pay-card-installments");$e&&$e.value&&Dn($e.value)}window.__mmCheckoutDebug=window.__mmCheckoutDebug||[];function ue(Kn,Le){var Me={t:new Date().toISOString(),msg:Kn,data:Le};window.__mmCheckoutDebug.push(Me),console.log("[mm-checkout]",Kn,Le||"")}function Qe(){if(ue("doSubmit() called",{forma:S}),S==="cartao"){var Kn=document.getElementById("aceito-termos-bcash-one-card");Kn&&!Kn.checked&&(Kn.checked=!0,Kn.dispatchEvent(new Event("change",{bubbles:!0}))),ue("terms",{checked:Kn?.checked})}var Le=S==="pix"?"form-pag-pix":S==="boleto"?"form-pag-boleto":"form-pag-cartao",Me=document.getElementById(Le);if(!Me){ue("ERROR: form not found",{formId:Le}),alert("Erro interno: formulário de pagamento não encontrado. Recarregue a página."),o.submitting=!1,z.classList.remove("is-loading");var _e=document.getElementById("mm-op-overlay");_e&&_e.remove();return}S==="cartao"&&ue("pre-submit cartao state",{numero:document.getElementById("pag-cartao-numero")?.value,bandeira:document.getElementById("pag-cartao-bandeira")?.value,parcela:document.getElementById("pag-cartao-parcela")?.value,titular:document.getElementById("pag-cartao-titular")?.value,mes:document.getElementById("pag-cartao-mes-validade")?.value,ano:document.getElementById("pag-cartao-ano-validade")?.value,cvv:document.getElementById("pag-cartao-vericacao")?.value?.length,cpf:document.getElementById("pag-cartao-cpf")?.value,tokenMp:document.getElementById("pag-cartao-token-mp")?.value?.substring(0,20)});var He=Me.querySelector('button.button-success, button[type="submit"], input[type="submit"]');if(He)ue("clicking native button",{text:He.textContent?.trim()}),He.click();else if(typeof Me.requestSubmit=="function"){ue("no native btn, using requestSubmit");try{Me.requestSubmit()}catch(Ge){ue("requestSubmit error",Ge.message),Me.submit()}}else ue("no native btn, using form.submit()"),Me.submit();setTimeout(function(){if(o.submitting&&location.pathname.indexOf("/onepage")!==-1){ue("8s failsafe: still on /onepage, removing overlay"),o.submitting=!1,z.classList.remove("is-loading");var Ge=document.getElementById("mm-op-overlay");Ge&&Ge.remove(),w.classList.remove("mm-shadow-mode"),t&&(t.style.display="none")}},8e3),setTimeout(function(){w.classList.remove("mm-shadow-mode"),t&&(t.style.display="none")},600)}function Ze(){o.submitting=!1,z.classList.remove("is-loading"),z.removeAttribute("aria-busy");var Kn=z.querySelector(".mm-op-finalizar-label");Kn&&(Kn.textContent="Finalizar compra");var Le=document.getElementById("mm-op-overlay");Le&&Le.remove()}function lt(){var Kn=Date.now(),Le=1e4;(function Me(){var _e=document.getElementById("pag-cartao-token-mp"),He=_e?(_e.value||"").trim():"",Ge=He&&He!=="loading..."&&He.length>10;if(Ge){ue("fallback: token ready"),Qe();return}if(Date.now()-Kn>=Le){ue("fallback: timeout",{lastVal:He}),Qe();return}setTimeout(Me,200)})()}function Vt(){if(ue("generateMpTokenAndSubmit() start"),typeof Mercadopago>"u"){ue("Mercadopago global missing, falling back to wait strategy"),lt();return}var Kn=document.getElementById("pag-cartao-token-mp"),Le=Kn?(Kn.value||"").trim():"";if(Le&&Le!=="loading..."&&Le.length>10){ue("token already present, submitting",{len:Le.length}),Qe();return}var Me=(document.getElementById("mm-pay-card-num")?.value||"").replace(/\D/g,""),_e=(document.getElementById("mm-pay-card-exp")?.value||"").replace(/\D/g,""),He=(document.getElementById("mm-pay-card-cvv")?.value||"").replace(/\D/g,""),Ge=(document.getElementById("mm-pay-card-name")?.value||"").trim(),ct=(n&&n.cpf||document.getElementById("mm-op-cpf")?.value||"").replace(/\D/g,"");if(!Me||!_e||!He||!Ge||!ct){ue("missing card fields",{num:Me.length,exp:_e.length,cvv:He.length,name:!!Ge,doc:ct.length}),alert("Preencha todos os dados do cartão antes de finalizar."),Ze();return}var yt=_e.slice(0,2),wt=_e.length===4?"20"+_e.slice(2):_e.slice(2);ue("calling Mercadopago.createToken",{numLen:Me.length,month:yt,year:wt});try{Mercadopago.createToken({cardNumber:Me,securityCode:He,cardExpirationMonth:yt,cardExpirationYear:wt,cardholderName:Ge,docType:"CPF",docNumber:ct},function(Ke,Xe){if(ue("createToken callback",{status:Ke,hasId:!!(Xe&&Xe.id),err:Xe&&Xe.error}),Ke===200||Ke===201){if(Kn){var Ut=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;Ut.call(Kn,Xe.id),Kn.dispatchEvent(new Event("input",{bubbles:!0})),Kn.dispatchEvent(new Event("change",{bubbles:!0}))}Qe()}else{var kt="Não foi possível validar os dados do cartão.";Xe&&Xe.cause&&Xe.cause[0]&&Xe.cause[0].description&&(kt=Xe.cause[0].description),alert(kt),Ze()}})}catch(Ke){ue("createToken exception",Ke.message),lt()}}S==="cartao"?Vt():setTimeout(Qe,500)}}if(O){let n=function(t){if(t=t||0,t>30){e();return}var r=Y?w.querySelector("#box-lista-enderecos, #container-step-2"):w.querySelector("#cep, .box-area-dados, #nome-completo_2");r||t>8?e():setTimeout(function(){n(t+1)},250)},e=function(){var t=$n(),r=vn.get("mm_user_email")||"";if(vn.remove("mm_checkout_mode"),typeof window._mmDraftDebug>"u"&&(window._mmDraftDebug=!1),Y&&d(t),Fn(t,r),Tn(document.getElementById("mm-layout")),Y){Sn(),Wn(),rn();return}Ee();var o=ge(),u=vn.get(G),E=u&&String(u).replace(/\D/g,"").length===8;if(E?he("loading"):t&&typeof t.shipping=="number"&&t.shipping>0&&he({value:t.shipping,name:t.shippingName||"",deadline:t.shippingDeadline||"",city:t.shippingCity||"",options:t.shippingOptions||[]}),!Y)try{var R=Array.from(w.querySelectorAll("a, button")).find(function(un){var on=(un.textContent||"").toLowerCase();return on.indexOf("sem cadastro")!==-1&&un.offsetParent!==null});R&&!R.classList.contains("active")&&R.click()}catch{}rn();var tn=vn.get(G);if(tn&&tn.length===8){var en=document.getElementById("mm-op-cep");en&&(en.value=Jn(tn),setTimeout(function(){Ye(tn)},400))}setTimeout(function(){if(!("ontouchstart"in window))for(var un=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep"],on=0;on<un.length;on++){var xn=document.getElementById(un[on]);if(xn&&!xn.value){xn.focus();break}}},350)};n()}if(H){document.documentElement.classList.remove("mm-cart-loading");var bt=w.querySelector('input[placeholder*="numero do cart" i]');bt&&(bt.inputMode="numeric");var st=w.querySelector('input[placeholder*="000" i]');st&&(!st.maxLength||st.maxLength<=4)&&(st.inputMode="numeric")}if(V){let n=function(){var r=w.innerText||"",o=r.match(/\b(\d{10,})\b/),u=r.match(/R\$\s?[\d.]+,\d{2}/),E=w.querySelector(".campo-numero-pix");return{canvas:w.querySelector("canvas"),pixCode:E&&E.value||"",order:o?o[1]:"",total:u?u[0].replace(/\s+/g," "):""}},e=function(r){var o=typeof renderGlobalFooter=="function"?renderGlobalFooter():"",u=!!r.canvas,E=u?'<div class="mm-done-pix-card"><div class="mm-done-pix-head">'+Dt+'<span>Pague com PIX</span><span class="mm-done-pix-status">Aguardando pagamento</span></div><div class="mm-done-qr" id="mm-done-qr-slot"></div><div class="mm-done-timer" id="mm-done-timer">'+_t+'<span class="mm-done-timer-text">Este código expira em <strong id="mm-done-timer-val">05:00</strong></span></div>'+(r.pixCode?'<button type="button" class="mm-done-copy" data-mm-act="done-copy-pix">'+Nt+"<span>Copiar código PIX (copia e cola)</span></button>":"")+'<p class="mm-done-pix-note">'+U.lock+"<span>Aprovação em até 1 minuto após o pagamento.</span></p></div>":'<div class="mm-done-pix-card mm-done-nopix"><p>Seu pedido foi registrado. Acompanhe o pagamento e o status em “Meus pedidos”.</p></div>';return ne("payment")+'<main class="mm-op-main mm-done-main"><div class="mm-done-hero"><span class="mm-done-hero-check">'+Rt+'</span><h1 class="mm-done-h1">Pedido realizado com sucesso!</h1><p class="mm-done-hero-sub">'+(r.order?"Pedido <strong>Nº "+X(r.order)+"</strong> · ":"")+(u?"falta só concluir o pagamento no PIX abaixo.":"obrigado pela sua compra!")+'</p></div><div class="mm-done-grid"><section class="mm-done-left">'+E+'</section><aside class="mm-done-right">'+(u?'<div class="mm-done-card"><h3 class="mm-op-card-title">Como pagar</h3><ol class="mm-done-steps"><li>Abra o app do seu banco e entre na área <strong>PIX</strong>.</li><li>Escaneie o <strong>QR Code</strong> ou use <strong>Pix Copia e Cola</strong>.</li><li>Confirme os dados e finalize o pagamento.</li></ol></div>':"")+(r.total?'<div class="mm-done-total"><span class="mm-done-total-label">Total</span><span class="mm-done-total-value">'+X(r.total)+"</span>"+(u?'<span class="mm-done-total-sub">no PIX</span>':"")+"</div>":"")+'<a class="mm-cta mm-done-cta" href="/cliente/pedidos">Acompanhar meu pedido</a><a class="mm-done-help" href="'+b+'" target="_blank" rel="noopener">'+jt+'<span>Dificuldade no pagamento? <strong>Fale com a gente no WhatsApp</strong></span></a><a class="mm-done-back" href="/">Voltar para a loja</a><div class="mm-trust mm-done-trust"><span class="mm-trust-item">'+U.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+U.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+U.shield+"<span>Garantia 12 meses</span></span></div></aside></div></main>"+o},t=function(){if(!document.getElementById("mm-layout")){var r=n(),o=document.createElement("div");if(o.id="mm-layout",o.className="mm-op-layout mm-done-layout",o.innerHTML=e(r),w.insertBefore(o,w.firstChild),document.body.classList.add("mm-checkout-rebuild"),w.classList.add("mm-shadow-mode"),document.documentElement.classList.remove("mm-cart-loading"),r.canvas){var u=o.querySelector("#mm-done-qr-slot");if(u)try{var E=document.createElement("img");E.src=r.canvas.toDataURL("image/png"),E.alt="QR Code PIX",E.width=220,E.height=220,u.appendChild(E)}catch{u.appendChild(r.canvas)}}var R=o.querySelector('[data-mm-act="done-copy-pix"]');R&&R.addEventListener("click",function(){var xn=r.pixCode||"",fn=R.querySelector("span"),En=fn?fn.textContent:"";function hn(){R.classList.add("is-copied"),fn&&(fn.textContent="Código copiado!"),setTimeout(function(){R.classList.remove("is-copied"),fn&&(fn.textContent=En)},2200)}function Nn(){try{var Dn=document.createElement("textarea");Dn.value=xn,Dn.style.cssText="position:fixed;top:0;left:0;opacity:0;",document.body.appendChild(Dn),Dn.focus(),Dn.select();var Gn=document.execCommand("copy");return document.body.removeChild(Dn),Gn}catch{return!1}}function qn(){if(Nn()){hn();return}var Dn=w.querySelector(".box-btn button, .box-btn a");Dn&&(Dn.click(),hn())}xn&&navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(xn).then(hn).catch(qn):qn()});var tn=o.querySelector("#mm-done-timer");if(tn){let xn=function(){var fn=Math.max(0,Math.round((un-Date.now())/1e3));if(fn<=0){on&&clearInterval(on),tn.classList.add("is-expired"),tn.innerHTML='<span class="mm-done-timer-text">Tempo esgotado — gere um novo código.</span><button type="button" class="mm-done-timer-renew" data-mm-act="done-renew">Gerar novo código</button>';var En=tn.querySelector('[data-mm-act="done-renew"]');En&&En.addEventListener("click",function(){try{localStorage.removeItem(en)}catch{}location.reload()});return}fn<=60&&tn.classList.add("is-urgent");var hn=Math.floor(fn/60),Nn=fn%60,qn=tn.querySelector("#mm-done-timer-val");qn&&(qn.textContent=(hn<10?"0":"")+hn+":"+(Nn<10?"0":"")+Nn)};var en="mm_pix_deadline_"+(r.order||"x"),un=parseInt(localStorage.getItem(en),10);if(!un||isNaN(un)){un=Date.now()+Ht;try{localStorage.setItem(en,String(un))}catch{}}var on=null;xn(),on=setInterval(xn,1e3)}}};document.documentElement.classList.remove("mm-cart-loading");var Dt='<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm-2 16h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zm-6 4h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm4-4h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm-4 0h2v2h-2v-2z"/></svg>',Nt='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z"/></svg>',Rt='<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',jt='<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.9-2.1-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3zM12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm0 18.3c-1.5 0-3-.4-4.3-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.3 8.3 0 1 1 12 20.3z"/></svg>',_t='<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.2 3.1.8-1.3-4.5-2.7V7z"/></svg>',Ht=300*1e3,xt=0;(function r(){var o=w.querySelector("canvas"),u=o&&o.width>100&&o.width===o.height;if(u||xt>16){t();return}xt++,setTimeout(r,250)})()}setTimeout(function(){document.documentElement.classList.contains("mm-cart-loading")&&(console.warn("[mm-cart] failsafe: removing mm-cart-loading after 2s timeout"),document.documentElement.classList.remove("mm-cart-loading"))},2e3)})(),(function(){var G=window.location.pathname,_=/^\/login\/?$/.test(G),W=G.indexOf("/cliente/pedidos")===0;if(!_&&!W)return;var y="5511915299488",i='<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';function c(B){return"https://api.whatsapp.com/send?phone="+y+"&text="+encodeURIComponent(B)}function g(B){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",B):B()}function b(B){var Y=(B||"").replace(/\D/g,"").slice(0,14);if(Y.length<=11)return Y.length>9?Y.slice(0,3)+"."+Y.slice(3,6)+"."+Y.slice(6,9)+"-"+Y.slice(9):Y.length>6?Y.slice(0,3)+"."+Y.slice(3,6)+"."+Y.slice(6):Y.length>3?Y.slice(0,3)+"."+Y.slice(3):Y;var J=Y.slice(0,2)+"."+Y.slice(2,5)+"."+Y.slice(5,8)+"/"+Y.slice(8,12);return Y.length>12&&(J+="-"+Y.slice(12)),J}function x(B){return typeof B!="string"||!/cpfcnpj=/i.test(B)?B:B.replace(/(^|&)(cpfcnpj=)([^&]*)/i,function(Y,J,w,K){return J+w+encodeURIComponent(b(decodeURIComponent(K)))})}function P(){if(!window.__mmConsultaFix){window.__mmConsultaFix=!0;var B=/operation=consultaPedido/i;try{var Y=window.fetch;typeof Y=="function"&&(window.fetch=function(K,kn){try{var an=typeof K=="string"?K:K&&K.url||"";B.test(an)&&kn&&typeof kn.body=="string"&&(kn.body=x(kn.body))}catch{}return Y.apply(this,arguments)})}catch{}try{var J=XMLHttpRequest.prototype.open,w=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(K,kn){return this.__mmU=kn||"",J.apply(this,arguments)},XMLHttpRequest.prototype.send=function(K){try{B.test(this.__mmU||"")&&typeof K=="string"&&(arguments[0]=x(K))}catch{}return w.apply(this,arguments)}}catch{}}}_&&P();function m(){function B(J){if(!J||J.getAttribute("data-mm-mask"))return;J.setAttribute("data-mm-mask","1"),J.setAttribute("maxlength","18"),J.setAttribute("inputmode","numeric");function w(){var an=b((J.value||"").replace(/\D/g,""));J.value!==an&&(J.value=an)}J.addEventListener("input",w),J.addEventListener("change",w),J.addEventListener("blur",w);var K=J.form;if(K&&!K.getAttribute("data-mm-mask")){K.setAttribute("data-mm-mask","1"),K.addEventListener("submit",w,!0);var kn=K.querySelector('button.button-login, button[type="submit"], input[type="submit"]');kn&&kn.addEventListener("click",w,!0)}}var Y=0;(function J(){var w=document.getElementById("form-consulta-pedido"),K=document.getElementById("cpfcnpj");if(!w||!K)return++Y<20?void setTimeout(J,250):void 0;B(K);var kn=w.querySelector(".title-area h2");if(kn&&!w.querySelector(".mm-cp-eyebrow")){var an=document.createElement("span");an.className="mm-cp-eyebrow",an.textContent="Acompanhe sua compra",kn.insertAdjacentElement("beforebegin",an)}function Cn(_n,ae){if(_n){var Hn=_n.closest(".line")||_n.parentElement;if(!Hn.querySelector(".mm-cp-label")){var pe=document.createElement("label");pe.className="mm-cp-label",pe.textContent=ae,_n.id&&pe.setAttribute("for",_n.id),Hn.insertAdjacentElement("afterbegin",pe)}}}Cn(K,"CPF ou CNPJ"),Cn(document.getElementById("numero-pedido"),"Nº do pedido"),K.placeholder="000.000.000-00";var X=document.getElementById("numero-pedido");X&&(X.placeholder="Ex.: 0012606865731");var U=w.querySelector("button.button-login");if(U)for(var vn=0;vn<U.childNodes.length;vn++){var Xn=U.childNodes[vn];Xn.nodeType===3&&/consultar/i.test(Xn.textContent)&&(Xn.textContent=" Consultar meu pedido ")}var $n=w.querySelector(".cancel-consulta span");$n&&($n.textContent="Voltar para login");var me=document.getElementById("numero-pedido");if(me&&!w.querySelector(".mm-cp-hint")){var xe=document.createElement("span");xe.className="mm-cp-hint",xe.textContent="O número do pedido está no e‑mail de confirmação da compra.";var ye=me.closest(".line")||me.parentElement;ye.appendChild(xe)}var ge=w.querySelector("form");if(ge&&!w.querySelector(".mm-cp-wa")){var ve=document.createElement("div");ve.className="mm-cp-wa",ve.innerHTML='Não encontra os dados? <a href="'+c("Olá! Preciso de ajuda para consultar o meu pedido.")+'" target="_blank" rel="noopener">'+i+" Fale com a gente</a>",ge.insertAdjacentElement("afterend",ve)}if(document.documentElement.classList.add("mm-consulta-on"),/(?:^|;\s*)zordEm=[^;\s]/.test(document.cookie)&&!w.querySelector(".mm-cp-logged")){var ne=document.createElement("div");ne.className="mm-cp-logged",ne.innerHTML='<strong>Você já está logado.</strong><span>Esta consulta é para quem comprou sem cadastro. Para acompanhar as suas compras:</span><a href="/cliente/pedidos" class="mm-cp-logged-cta">Ver todos os meus pedidos</a>',w.insertAdjacentElement("afterbegin",ne)}var Zn=document.querySelector(".login-holder"),te=document.querySelector(".page.page-login");if(Zn&&te){var Rn=Zn.querySelector(".login-header");if(Rn&&!Rn.querySelector(".mm-lg-eyebrow")){var be=document.createElement("span");be.className="mm-lg-eyebrow",be.textContent="Área do cliente";var oe=Rn.querySelector("h2");oe&&oe.insertAdjacentElement("beforebegin",be)}var we=Zn.querySelector(".social-login-area");if(we&&!Zn.querySelector(".mm-lg-ou")){var se=document.createElement("div");se.className="mm-lg-ou",se.textContent="ou",we.insertAdjacentElement("beforebegin",se)}setTimeout(function(){try{var _n=Zn.querySelector(".social-login-area .render-button");_n&&window.google&&google.accounts&&google.accounts.id&&(_n.innerHTML="",google.accounts.id.renderButton(_n,{theme:"outline",size:"large",shape:"pill",width:320,text:"continue_with",logo_alignment:"center"}))}catch{}setTimeout(function(){var ae=Zn.querySelector(".social-login-area"),Hn=Zn.querySelector(".mm-lg-ou"),pe=ae&&ae.offsetParent!==null&&ae.querySelector("iframe");pe||(Hn&&(Hn.style.display="none"),ae&&(ae.style.display="none"))},2e3)},1200);var Jn=[].filter.call(Zn.querySelectorAll("span, div, button"),function(_n){return/pessoa jur/i.test(_n.textContent)&&_n.textContent.length<60&&_n.children.length===0})[0];Jn&&Jn.classList.add("mm-lg-link");var le=document.querySelector(".footer-login");le&&[].forEach.call(le.querySelectorAll("p"),function(_n){/nunca postaremos/i.test(_n.textContent)&&_n.classList.add("mm-lg-nopost")}),document.documentElement.classList.add("mm-login-on")}})(),/#consultar?-?pedido/i.test(window.location.hash)&&setTimeout(function(){var J=document.getElementById("form-consulta-pedido"),w=document.getElementById("cpfcnpj");J&&J.scrollIntoView({behavior:"smooth",block:"center"}),w&&setTimeout(function(){w.focus()},500)},600)}var O={"recebimento-pedido":"Pedido recebido","confirmacao-pagamento":"Pagamento confirmado","emissao-nota":"Nota fiscal emitida",transporte:"Em transporte",entrega:"Entregue"};function H(){var B=document.querySelector(".detalhes-pedido");if(!(!B||B.getAttribute("data-mm-ped"))){B.setAttribute("data-mm-ped","1");var Y=B.querySelector(".numero-pedido"),J=Y?(Y.textContent.match(/[\d]+/)||[""])[0]:"",w=B.querySelector(".resumo-data strong"),K=w?w.textContent.trim().split(" ")[0]:"",kn=B.querySelectorAll(".item-historico.status-waiting");kn.length&&kn[0].classList.add("mm-atual");for(var an='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"',Cn={"recebimento-pedido":"<svg "+an+'><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',"confirmacao-pagamento":"<svg "+an+'><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>',"emissao-nota":"<svg "+an+'><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M15 2v5h5"/><path d="M8 13h8"/><path d="M8 17h5"/></svg>',transporte:"<svg "+an+'><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',entrega:"<svg "+an+'><path d="M3 10.18v8.82a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8.82"/><path d="M2.5 10.5 12 3l9.5 7.5"/><path d="m9 15 2 2 4-4"/></svg>'},X=B.querySelectorAll(".item-historico"),U=0;U<X.length;U++){var vn=X[U];if(!vn.querySelector(".mm-step-dot")){var Xn="";for(var $n in Cn)if(vn.classList.contains($n)){Xn=Cn[$n];break}var me=document.createElement("span");me.className="mm-step-dot",me.innerHTML=Xn,vn.insertAdjacentElement("afterbegin",me);var xe=document.createElement("span");xe.className="mm-step-line",vn.appendChild(xe)}}var ye=B.querySelectorAll(".item-historico.status-success"),ge="Pedido recebido";if(ye.length){var ve=ye[ye.length-1];for(var ne in O)if(ve.classList.contains(ne)){ge=O[ne];break}}if(!document.getElementById("mm-ped-hero")&&J){var Zn=document.createElement("div");Zn.id="mm-ped-hero",Zn.innerHTML='<div class="mm-ped-hero-info"><span class="mm-ped-eyebrow">Acompanhe sua compra</span><h1 class="mm-ped-num">Pedido #'+J+' <button type="button" class="mm-ped-copy" aria-label="Copiar número do pedido">copiar</button></h1><div class="mm-ped-meta">'+(K?"<span>Feito em "+K+"</span>":"")+'<span class="mm-ped-badge">'+ge+'</span></div></div><a class="mm-ped-hero-wa" target="_blank" rel="noopener" href="'+c("Olá! Gostaria de saber sobre o meu pedido #"+J+".")+'">'+i+" Falar sobre este pedido</a>",B.insertAdjacentElement("afterbegin",Zn);var te=B.querySelector(".resumo-pagamento .resumo-total > span:first-child");te&&/resumo do pedido/i.test(te.textContent)&&(te.textContent="Total");var Rn=B.querySelector(".title-itens-pedido h3");Rn&&/itens do pedido/i.test(Rn.textContent)&&(Rn.textContent=" Itens do pedido ");for(var be=document.querySelectorAll(".main-content h1, .main-content h2, .main-content .title-user-area, .main-content > div"),oe=0;oe<be.length;oe++){var we=be[oe];if(!we.contains(B)&&/meus pedidos/i.test(we.textContent||"")&&(we.textContent||"").trim().length<40){we.classList.add("mm-ped-native-title");break}}var se=Zn.querySelector(".mm-ped-copy");se.addEventListener("click",function(){var Te=this;try{navigator.clipboard.writeText(J).then(function(){Te.textContent="copiado ✓",Te.classList.add("mm-copiado"),setTimeout(function(){Te.textContent="copiar",Te.classList.remove("mm-copiado")},2e3)})}catch{}})}var Jn=B.querySelector(".rastreio-area"),le=Jn?Jn.querySelector(".previsao-entrega .previsao"):null,_n=le?le.textContent.trim():"";if(_n){var ae=B.querySelector(".item-historico.entrega");if(ae&&!ae.querySelector(".mm-step-prev")){var Hn=document.createElement("span");Hn.className="mm-step-prev",Hn.textContent="Previsão: "+_n,ae.appendChild(Hn)}}var pe=B.querySelector(".status-pagamento-pedido");if(pe&&!Jn&&!document.getElementById("mm-ped-entrega")){var ke=document.createElement("div");ke.id="mm-ped-entrega";for(var Be=null,Fe=B.querySelectorAll("a[href]"),Ie=0;Ie<Fe.length;Ie++){var oe=(Fe[Ie].textContent||"")+" "+Fe[Ie].href;if(/rastre/i.test(oe)&&!/politica/i.test(Fe[Ie].href)){Be=Fe[Ie];break}}var De='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>';Be?(ke.classList.add("mm-tem-rastreio"),ke.innerHTML=De+'<span>Seu pedido está a caminho — <a href="'+Be.href+'" target="_blank" rel="noopener">acompanhe o rastreio aqui</a>.</span>'):ke.innerHTML=De+'<span>O código de rastreio aparece aqui assim que o pedido for despachado. Enquanto isso, acompanhe as etapas acima ou veja nossa <a href="/politica-de-entrega" target="_blank" rel="noopener">política de entrega</a>.</span>',pe.insertAdjacentElement("afterend",ke)}var Ve=document.querySelector(".btn-comprar-novamente"),fe=document.querySelector(".btn-ajuda-pedido"),jn=Ve||fe?(Ve||fe).parentElement:null;jn&&!jn.classList.contains("mm-ped-acoes")&&(jn.classList.add("mm-ped-acoes"),jn.parentElement!==B&&B.appendChild(jn));var Se=document.querySelector("main.central-cliente");Se&&Se.children.length===1&&Se.classList.add("mm-ped-center"),document.documentElement.classList.add("mm-ped-on")}}function V(){if(!(!/rastrear/i.test(location.hash||"")&&!/rastrear/i.test(location.search||""))){var B=0;(function Y(){var J=document.getElementById("form-consulta-pedido");if(!J||J.offsetParent===null)return++B<30?void setTimeout(Y,200):void 0;try{J.scrollIntoView({behavior:"smooth",block:"center"})}catch{try{J.scrollIntoView()}catch{}}J.classList.add("mm-cp-flash"),setTimeout(function(){J.classList.remove("mm-cp-flash")},2400);var w=document.getElementById("numero-pedido");w&&setTimeout(function(){try{w.focus({preventScroll:!0})}catch{try{w.focus()}catch{}}},700)})()}}g(function(){try{_&&(m(),V()),W&&H()}catch(B){window.console&&console.warn&&console.warn("[mm-pedidos]",B)}})})()})();
