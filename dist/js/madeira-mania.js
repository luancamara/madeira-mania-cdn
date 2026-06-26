(function(){"use strict";(function(){if(!document.getElementById("mm-global-css")){var x=document.createElement("style");x.id="mm-global-css",x.textContent=`/* =============================================
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
`,document.head.appendChild(x)}})(),(function(){if(!document.getElementById("mm-produto-css")){var x=document.createElement("style");x.id="mm-produto-css",x.textContent=`/* =============================================
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
`,document.head.appendChild(x)}})(),(function(){if(!document.getElementById("mm-variacoes-css")){var x=document.createElement("style");x.id="mm-variacoes-css",x.textContent=`/* ============================================
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
}`,document.head.appendChild(x)}})(),(function(){if(!document.getElementById("mm-cart-sheet-css")){var x=document.createElement("style");x.id="mm-cart-sheet-css",x.textContent=`/* =============================================
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
`,document.head.appendChild(x)}})(),(function(){if(!document.getElementById("mm-checkout-cro-css")){var x=document.createElement("style");x.id="mm-checkout-cro-css",x.textContent=`/* =============================================
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
`,document.head.appendChild(x)}})(),(function(){if(!document.getElementById("mm-ticker-css")){var x=document.createElement("style");x.id="mm-ticker-css",x.textContent=`.ticker-bar {
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
  }`,document.head.appendChild(x)}})(),(function(){if(!document.getElementById("mm-header-css")){var x=document.createElement("style");x.id="mm-header-css",x.textContent=`/* =============================================
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
`,document.head.appendChild(x)}})(),(function(){if(!document.getElementById("tickerBar")){var x=document.createElement("div");x.innerHTML=`<div class="ticker-bar" id="tickerBar">
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
</div>`;var O=x.firstElementChild;document.body.insertBefore(O,document.body.firstChild)}})(),(function(){var x=location.pathname;if(/^\/checkout\//i.test(x))return;try{if(localStorage.getItem("mm_no_tracking")==="1")return}catch{}if(window._uxa||document.querySelector('script[src*="contentsquare.net"]'))return;function O(){if(!(window._uxa||document.querySelector('script[src*="contentsquare.net"]'))){var I=document.createElement("script");I.src="https://t.contentsquare.net/uxa/7126f355c4bb8.js",I.async=!0,document.head.appendChild(I)}}function j(){"requestIdleCallback"in window?requestIdleCallback(O,{timeout:5e3}):setTimeout(O,2500)}document.readyState==="complete"?j():window.addEventListener("load",j,{once:!0})})(),(function(){var x="vnhd0x9eve";try{if(localStorage.getItem("mm_no_tracking")==="1")return}catch{}if(window.clarity||document.querySelector('script[src*="clarity.ms"]'))return;function O(){window.clarity||(function(I,v,i,l,u,g,f){I[i]=I[i]||function(){(I[i].q=I[i].q||[]).push(arguments)},g=v.createElement(l),g.async=1,g.src="https://www.clarity.ms/tag/"+u,f=v.getElementsByTagName(l)[0],f.parentNode.insertBefore(g,f)})(window,document,"clarity","script",x)}function j(){"requestIdleCallback"in window?requestIdleCallback(O,{timeout:4e3}):setTimeout(O,2e3)}document.readyState==="complete"?j():window.addEventListener("load",j,{once:!0})})(),(function(){if(!document.getElementById("mm-floating-whatsapp")){var O="5511915299488",j=(document.querySelector("#prod-nome")||{}).value,I=window.location.href,v;j?v="Olá! Tenho interesse no "+j.trim()+". "+I:v="Olá! Vim pelo site e gostaria de ajuda. "+I;var i="https://api.whatsapp.com/send?phone="+O+"&text="+encodeURIComponent(v),l=document.createElement("a");l.id="mm-floating-whatsapp",l.href=i,l.target="_blank",l.rel="noopener noreferrer",l.setAttribute("aria-label","Fale conosco pelo WhatsApp"),l.style.cssText=["position: fixed","right: 14px","z-index: 98","display: flex","align-items: center","justify-content: center","width: 52px","height: 52px","background: #4b664a","border-radius: 50%","box-shadow: 0 3px 12px rgba(0,0,0,0.18)","text-decoration: none","transition: transform 0.15s ease","-webkit-tap-highlight-color: transparent"].join(";"),l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" style="display:block;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',l.addEventListener("touchstart",function(){l.style.transform="scale(0.92)"},{passive:!0}),l.addEventListener("touchend",function(){l.style.transform=""},{passive:!0}),document.body.appendChild(l)}})(),(function(){var O=document.querySelector(".back-to-top");if(O){var j=O.querySelector(".icon");j&&(j.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',j.style.cssText="display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:none !important;")}})(),(function(){var O="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",j="https://api.whatsapp.com/send?phone=5511915299488&text="+encodeURIComponent("Olá! Vim pelo site e gostaria de ajuda."),I={phone:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',whats:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',mail:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',clock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',pin:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',lock:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>',shield:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>',truck:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',card:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',instagram:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',facebook:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>',tiktok:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.39a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.42z"/></svg>'};function v(){if(!document.getElementById("mm-footer")&&document.body){document.body.classList.add("mm-footer-rebuild");var i=document.createElement("footer");i.id="mm-footer",i.className="mm-footer",i.setAttribute("role","contentinfo"),i.innerHTML='<div class="mm-footer-main"><div class="mm-footer-grid"><div class="mm-footer-col mm-footer-brand"><a class="mm-footer-logo" href="/" aria-label="Madeira Mania - voltar à home"><img src="'+O+'" alt="Madeira Mania" width="180" height="48"></a><p class="mm-footer-tagline">Móveis com design moderno e qualidade superior pra transformar sua casa em um lar cheio de personalidade.</p><div class="mm-footer-social"><a href="https://www.instagram.com/madeira.mania" target="_blank" rel="noopener" aria-label="Instagram da Madeira Mania">'+I.instagram+'</a><a href="https://web.facebook.com/profile.php?id=61578397120844" target="_blank" rel="noopener" aria-label="Facebook da Madeira Mania">'+I.facebook+'</a><a href="https://www.tiktok.com/@madeira.mania" target="_blank" rel="noopener" aria-label="TikTok da Madeira Mania">'+I.tiktok+'</a></div></div><div class="mm-footer-col"><h4 class="mm-footer-h">Atendimento</h4><ul class="mm-footer-list"><li><a href="tel:+5511915299488">'+I.phone+'<span>(11) 91529-9488</span></a></li><li><a href="'+j+'" target="_blank" rel="noopener">'+I.whats+'<span>WhatsApp</span></a></li><li><a href="mailto:contato@madeiramania.com.br">'+I.mail+'<span>contato@madeiramania.com.br</span></a></li><li><span class="mm-footer-meta">'+I.clock+'<span>Seg a Sex · 8h às 18h</span></span></li></ul></div><div class="mm-footer-col"><h4 class="mm-footer-h">Sua compra</h4><ul class="mm-footer-list"><li><a href="/como-comprar">Como comprar</a></li><li><a href="/politica-de-entrega">Frete e entrega</a></li><li><a href="/politica-de-trocas-e-devolucoes">Trocas e devoluções</a></li><li><a href="/compra-segura">Compra segura</a></li><li><a href="/avaliacoes-de-clientes">Avaliações de clientes</a></li></ul></div><div class="mm-footer-col"><h4 class="mm-footer-h">Madeira Mania</h4><ul class="mm-footer-list"><li><a href="/quem-somos">Quem somos</a></li><li><a href="/atendimento">Central de atendimento</a></li><li><a href="/envio-imediato">Pronta entrega</a></li><li><a href="/politica-de-privacidade">Política de privacidade</a></li></ul></div></div></div><div class="mm-footer-trust"><div class="mm-footer-trust-inner"><div class="mm-footer-trust-item">'+I.lock+'<div class="mm-footer-trust-text"><strong>Compra 100% segura</strong><small>Site protegido por SSL</small></div></div><div class="mm-footer-trust-item">'+I.shield+'<div class="mm-footer-trust-text"><strong>7 dias para troca</strong><small>Direito de arrependimento</small></div></div><div class="mm-footer-trust-item">'+I.truck+'<div class="mm-footer-trust-text"><strong>Frete grátis</strong><small>Acima de R$ 2.000</small></div></div><div class="mm-footer-trust-item">'+I.card+'<div class="mm-footer-trust-text"><strong>12x sem juros</strong><small>Em todos os cartões</small></div></div></div></div><div class="mm-footer-bottom"><div class="mm-footer-bottom-inner"><p class="mm-footer-legal">© 2026 <strong>Madeira Mania</strong> · CNPJ 60.021.382/0001-61<br>Av. Paulista, 1636 · Bela Vista · São Paulo/SP · 01310-200</p><div class="mm-footer-payments" aria-label="Formas de pagamento aceitas"><span class="mm-pay-chip" title="PIX"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/pix.svg" alt="PIX" loading="lazy"></span><span class="mm-pay-chip" title="Visa"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/visa.svg" alt="Visa" loading="lazy"></span><span class="mm-pay-chip" title="Mastercard"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/mastercard.svg" alt="Mastercard" loading="lazy"></span><span class="mm-pay-chip" title="Elo"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/elo.svg" alt="Elo" loading="lazy"></span><span class="mm-pay-chip" title="Hipercard"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/hipercard.svg" alt="Hipercard" loading="lazy"></span><span class="mm-pay-chip" title="American Express"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/american2.svg" alt="American Express" loading="lazy"></span><span class="mm-pay-chip" title="Boleto Bancário"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/boleto.svg" alt="Boleto Bancário" loading="lazy"></span></div></div></div>',document.body.appendChild(i),document.documentElement.classList.remove("mm-footer-loading")}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v(),setTimeout(v,1e3),setTimeout(v,3e3),setTimeout(function(){document.documentElement.classList.remove("mm-footer-loading")},6e3)})(),(function(){"use strict";if(location.pathname.replace(/\/$/,"")!=="/atendimento")return;function x(){var O=document.querySelector(".atendimento .title-content");if(!(!O||O.dataset.mmEnhanced)){O.dataset.mmEnhanced="1";var j='<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.053 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64.001 5.122 1.03 6.988 2.898 1.866 1.868 2.893 4.352 2.892 6.992-.003 5.45-4.437 9.887-9.885 9.887zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.465 3.488z"/></svg>';O.innerHTML=["<h1>Fale com a gente</h1>",'<p class="mm-atd-lead">Nosso time está pronto para ajudar você a escolher os móveis certos para sua casa. Use o WhatsApp para respostas rápidas ou preencha o formulário abaixo.</p>','<div class="mm-atd-channels">','  <a class="mm-atd-whatsapp" href="https://api.whatsapp.com/send?phone=5511915299488&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20m%C3%B3veis." target="_blank" rel="noopener">',"    "+j,'    <span class="mm-atd-whatsapp-label">Fale pelo WhatsApp</span>','    <span class="mm-atd-whatsapp-number">11 91529-9488</span>',"  </a>",'  <div class="mm-atd-info">','    <div class="mm-atd-info-item">',"      <strong>Horário de atendimento</strong>","      <span>Segunda a sexta · 9h às 18h</span>","      <span>Sábado · 9h às 13h</span>","    </div>",'    <div class="mm-atd-info-item">',"      <strong>E-mail</strong>",'      <a href="mailto:contato@madeiramania.com.br">contato@madeiramania.com.br</a>',"    </div>","  </div>","</div>",'<h2 class="mm-atd-form-title">Formulário de contato</h2>'].join(`
`)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",x):x(),setTimeout(x,500),setTimeout(x,2e3)})(),(function(){if(/^\/checkout\//.test(location.pathname)||document.getElementById("mm-header"))return;function x(){if(document.getElementById("mm-header"))return;var O="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",j={search:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',user:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',bag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>'},I=document.createElement("div");I.id="mm-header",I.innerHTML=['<a class="mm-h-skip" href="#main">Pular para o conteúdo</a>','<div class="mm-h-topbar">','  <div class="mm-h-topbar-inner">','    <span class="mm-h-topbar-desktop-only">','      <a href="/atendimento">Atendimento</a>','      <span class="mm-h-topbar-sep" aria-hidden="true">·</span>',"    </span>","    <span>Frete grátis R$ 2.000+</span>",'    <span class="mm-h-topbar-sep" aria-hidden="true">·</span>',"    <span>12x sem juros</span>","  </div>","</div>",'<div class="mm-h-main">','  <div class="mm-h-main-left">','    <button class="mm-h-burger" id="mm-h-burger" type="button" aria-label="Abrir menu"><span aria-hidden="true">☰</span></button>','    <button class="mm-h-action" id="mm-h-buscar" type="button">'+j.search+"<span>Buscar</span></button>","  </div>",'  <a class="mm-h-logo" href="/" aria-label="Madeira Mania, ir para a página inicial">','    <img src="'+O+'" alt="" width="280" height="70" loading="eager" />',"  </a>",'  <div class="mm-h-main-right">','    <a class="mm-h-action" href="/wishlist">'+j.heart+"<span>Favoritos</span></a>",'    <a class="mm-h-action" href="/login">'+j.user+"<span>Conta</span></a>",'    <button class="mm-h-action" type="button" id="mm-h-cart" aria-label="Carrinho, 0 itens" aria-live="polite">','      <span class="mm-h-cart-icon">'+j.bag+'<span class="mm-h-cart-badge" id="mm-h-cart-count" aria-hidden="true" hidden>0</span></span>',"      <span>Carrinho</span>","    </button>","  </div>","</div>",'<nav class="mm-h-nav" role="navigation" aria-label="Categorias">','  <ul class="mm-h-nav-list">','    <li class="mm-h-nav-item" data-menu="ambientes">','      <a href="#" class="mm-h-nav-link" aria-haspopup="true" aria-expanded="false">Ambientes</a>','      <div class="mm-h-mega" role="menu" aria-label="Ambientes">','        <div class="mm-h-mega-inner">','          <div class="mm-h-mega-col">','            <a href="/sala-de-estar-9677307902" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="sala-de-estar">Sala de Estar</a>',"            <ul>",'              <li><a href="/sala-de-estar/mesas">Mesas</a></li>','              <li><a href="/sala-de-estar/racks">Racks para TV</a></li>','              <li><a href="/sala-de-estar/estantes">Estantes</a></li>','              <li><a href="/sala-de-estar/home-theaters">Home Theaters</a></li>','              <li><a href="/sala-de-estar/aparadores">Aparadores</a></li>','              <li><a href="/sala-de-estar/cristaleiras">Cristaleiras</a></li>','              <li><a href="/sala-de-estar/buffets">Buffets</a></li>','              <li><a href="/sala-de-estar/bares">Bares</a></li>','              <li><a href="/sala-de-estar/paineis">Painéis</a></li>','              <li><a href="/sala-de-estar/nichos">Nichos</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col">','            <a href="/sala-de-jantar-1916970475" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="sala-de-jantar">Sala de Jantar</a>',"            <ul>",'              <li><a href="/sala-de-jantar/mesas">Mesas</a></li>','              <li><a href="/sala-de-jantar/cadeiras">Cadeiras</a></li>','              <li><a href="/sala-de-jantar/aparadores">Aparadores</a></li>','              <li><a href="/sala-de-jantar/buffets">Buffets</a></li>','              <li><a href="/sala-de-jantar/cristaleiras">Cristaleiras</a></li>','              <li><a href="/sala-de-jantar/balcoes">Balcões</a></li>','              <li><a href="/sala-de-jantar/banquetas">Banquetas</a></li>','              <li><a href="/sala-de-jantar/bares">Bares</a></li>',"            </ul>",'            <a href="/bar-e-cafe" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="bar-e-cafe">Bar e Café</a>',"            <ul>",'              <li><a href="/bar-e-cafe/bares">Bares</a></li>','              <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col">','            <a href="/cozinha-6327619447" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="cozinha">Cozinha</a>',"            <ul>",'              <li><a href="/cozinha/armarios-de-cozinha">Armários de Cozinha</a></li>','              <li><a href="/cozinha/balcoes">Balcões</a></li>','              <li><a href="/cozinha/banquetas">Banquetas</a></li>','              <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>','              <li><a href="/cozinha/cozinhas-completas">Cozinhas Completas</a></li>','              <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>','              <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>','              <li><a href="/cozinha/multiuso">Multiuso</a></li>','              <li><a href="/cozinha/paneleiros">Paneleiros</a></li>',"            </ul>",'            <a href="/lavanderia" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="lavanderia">Lavanderia</a>','            <a href="/banheiro" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="banheiro">Banheiro</a>',"          </div>",'          <div class="mm-h-mega-col">','            <a href="/quarto-0961844589" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="quarto">Quarto</a>',"            <ul>",'              <li><a href="/quarto/bercos">Berços</a></li>','              <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>','              <li><a href="/quarto/camas">Camas</a></li>','              <li><a href="/quarto/colchoes">Colchões</a></li>','              <li><a href="/quarto/comodas">Cômodas</a></li>','              <li><a href="/quarto/dormitorios">Dormitórios</a></li>','              <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>','              <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>','              <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>','              <li><a href="/quarto/roupeiros">Roupeiros</a></li>',"            </ul>",'            <a href="/escritorio-899523853" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="escritorio">Escritório</a>',"            <ul>",'              <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col mm-h-mega-col-hero" aria-hidden="true">','            <div class="mm-h-mega-hero">','              <img class="mm-h-mega-hero-img" src="" alt="" loading="lazy" width="320" height="240" />','              <div class="mm-h-mega-hero-label"></div>',"            </div>","          </div>","        </div>",'        <div class="mm-h-mega-footer">','          <a href="/envio-imediato" class="mm-h-mega-cta">Ver todos os ambientes <span aria-hidden="true">→</span></a>',"        </div>","      </div>","    </li>",'    <li class="mm-h-nav-item">','      <a href="/envio-imediato" class="mm-h-nav-link">Envio Imediato</a>',"    </li>",'    <li class="mm-h-nav-item">','      <a href="/outlet" class="mm-h-nav-link">Outlet</a>',"    </li>","  </ul>","</nav>",'<div class="mm-h-drawer" id="mm-h-drawer" hidden role="dialog" aria-modal="true" aria-label="Menu">','  <div class="mm-h-drawer-backdrop"></div>','  <aside class="mm-h-drawer-panel">','    <div class="mm-h-drawer-header">','      <span class="mm-h-drawer-title">Menu</span>','      <button class="mm-h-drawer-close" id="mm-h-drawer-close" type="button" aria-label="Fechar menu">','        <span aria-hidden="true">×</span>',"      </button>","    </div>",'    <div class="mm-h-drawer-search">','      <form action="/busca" method="get">','        <input type="search" name="q" placeholder="Buscar" aria-label="Buscar" />',"      </form>","    </div>",'    <nav class="mm-h-drawer-nav" aria-label="Navegação móvel">','      <details class="mm-h-drawer-section">',"        <summary>Sala de Estar</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/sala-de-estar-9677307902">Ver todos →</a></li>','          <li><a href="/sala-de-estar/mesas">Mesas</a></li>','          <li><a href="/sala-de-estar/racks">Racks para TV</a></li>','          <li><a href="/sala-de-estar/estantes">Estantes</a></li>','          <li><a href="/sala-de-estar/home-theaters">Home Theaters</a></li>','          <li><a href="/sala-de-estar/aparadores">Aparadores</a></li>','          <li><a href="/sala-de-estar/cristaleiras">Cristaleiras</a></li>','          <li><a href="/sala-de-estar/buffets">Buffets</a></li>','          <li><a href="/sala-de-estar/bares">Bares</a></li>','          <li><a href="/sala-de-estar/paineis">Painéis</a></li>','          <li><a href="/sala-de-estar/nichos">Nichos</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Sala de Jantar</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/sala-de-jantar-1916970475">Ver todos →</a></li>','          <li><a href="/sala-de-jantar/mesas">Mesas</a></li>','          <li><a href="/sala-de-jantar/cadeiras">Cadeiras</a></li>','          <li><a href="/sala-de-jantar/aparadores">Aparadores</a></li>','          <li><a href="/sala-de-jantar/buffets">Buffets</a></li>','          <li><a href="/sala-de-jantar/cristaleiras">Cristaleiras</a></li>','          <li><a href="/sala-de-jantar/balcoes">Balcões</a></li>','          <li><a href="/sala-de-jantar/banquetas">Banquetas</a></li>','          <li><a href="/sala-de-jantar/bares">Bares</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Cozinha</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/cozinha-6327619447">Ver todos →</a></li>','          <li><a href="/cozinha/armarios-de-cozinha">Armários de Cozinha</a></li>','          <li><a href="/cozinha/balcoes">Balcões</a></li>','          <li><a href="/cozinha/banquetas">Banquetas</a></li>','          <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>','          <li><a href="/cozinha/cozinhas-completas">Cozinhas Completas</a></li>','          <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>','          <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>','          <li><a href="/cozinha/multiuso">Multiuso</a></li>','          <li><a href="/cozinha/paneleiros">Paneleiros</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Quarto</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/quarto-0961844589">Ver todos →</a></li>','          <li><a href="/quarto/bercos">Berços</a></li>','          <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>','          <li><a href="/quarto/camas">Camas</a></li>','          <li><a href="/quarto/colchoes">Colchões</a></li>','          <li><a href="/quarto/comodas">Cômodas</a></li>','          <li><a href="/quarto/dormitorios">Dormitórios</a></li>','          <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>','          <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>','          <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>','          <li><a href="/quarto/roupeiros">Roupeiros</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Bar e Café</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/bar-e-cafe">Ver todos →</a></li>','          <li><a href="/bar-e-cafe/bares">Bares</a></li>','          <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Escritório</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/escritorio-899523853">Ver todos →</a></li>','          <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',"        </ul>","      </details>",'      <a href="/lavanderia" class="mm-h-drawer-link">Lavanderia</a>','      <a href="/banheiro" class="mm-h-drawer-link">Banheiro</a>','      <a href="/envio-imediato" class="mm-h-drawer-link">Envio Imediato</a>','      <a href="/outlet" class="mm-h-drawer-link">Outlet</a>',"    </nav>",'    <div class="mm-h-drawer-footer">','      <a href="/wishlist">Favoritos</a>','      <a href="/login">Conta</a>','      <a href="/atendimento">Atendimento</a>',"    </div>","  </aside>","</div>",'<div class="mm-h-search-overlay" id="mm-h-search-overlay" hidden role="dialog" aria-modal="true" aria-label="Buscar">','  <div class="mm-h-search-backdrop"></div>','  <div class="mm-h-search-inner">','    <button class="mm-h-search-close" id="mm-h-search-close" type="button" aria-label="Fechar busca">','      <span aria-hidden="true">×</span>',"    </button>",'    <form action="/busca" method="get" class="mm-h-search-form">','      <label for="mm-h-search-input" class="mm-h-search-label">O que você procura?</label>','      <input type="search" name="q" id="mm-h-search-input" placeholder="O que você procura?" autocomplete="off" />',"    </form>",'    <div class="mm-h-search-results" id="mm-h-search-results" hidden></div>','    <div class="mm-h-search-suggestions" id="mm-h-search-suggestions">','      <span class="mm-h-search-sug-label">Sugestões populares</span>','      <a href="/busca?q=mesa+de+jantar">Mesa de jantar</a>','      <a href="/busca?q=rack">Rack</a>','      <a href="/busca?q=guarda-roupas">Guarda-roupas</a>','      <a href="/busca?q=cristaleira">Cristaleira</a>','      <a href="/busca?q=aparador">Aparador</a>',"    </div>",'    <div class="mm-h-search-hint"><kbd>Esc</kbd> para fechar</div>',"  </div>","</div>"].join(`
`),document.body.insertBefore(I,document.body.firstChild),document.documentElement.classList.remove("mm-header-loading");var v=(function(){try{var t=Array.from(document.scripts).find(function(s){return s.src&&s.src.indexOf("madeira-mania.js")!==-1});if(t&&t.src.indexOf("localhost")!==-1)return"http://localhost:8080/assets/mega-hero/";if(t){var a=t.src.match(/@([^/]+)/);if(a)return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@"+a[1]+"/dist/assets/mega-hero/"}return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@main/dist/assets/mega-hero/"}catch{return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@main/dist/assets/mega-hero/"}})(),i={"sala-de-estar":"Sala de Estar","sala-de-jantar":"Sala de Jantar",cozinha:"Cozinha","bar-e-cafe":"Bar e Café",quarto:"Quarto",escritorio:"Escritório",lavanderia:"Lavanderia",banheiro:"Banheiro"},l=I.querySelector(".mm-h-mega-hero-img"),u=I.querySelector(".mm-h-mega-hero-label");Object.keys(i).forEach(function(t){var a=new Image;a.src=v+t+".jpg"});function g(t){l&&(l.onerror=function(){l.style.visibility="hidden"},l.style.visibility="",l.src=v+t+".jpg",l.alt=i[t]||"",u&&(u.textContent=i[t]||""))}g("sala-de-estar"),I.querySelectorAll(".mm-h-mega-heading-link[data-hero]").forEach(function(t){t.addEventListener("mouseenter",function(){g(t.dataset.hero)})});var f=I.querySelectorAll(".mm-h-nav-item[data-menu]"),C=null,w=null;f.forEach(function(t){t.addEventListener("mouseenter",function(){clearTimeout(w),clearTimeout(C),C=setTimeout(function(){f.forEach(function(s){s.classList.remove("is-open");var d=s.querySelector(".mm-h-nav-link");d&&d.setAttribute("aria-expanded","false")}),t.classList.add("is-open");var a=t.querySelector(".mm-h-nav-link");a&&a.setAttribute("aria-expanded","true")},150)}),t.addEventListener("mouseleave",function(){clearTimeout(C),w=setTimeout(function(){t.classList.remove("is-open");var a=t.querySelector(".mm-h-nav-link");a&&a.setAttribute("aria-expanded","false")},200)})}),document.addEventListener("keydown",function(t){t.key==="Escape"&&f.forEach(function(a){a.classList.remove("is-open");var s=a.querySelector(".mm-h-nav-link");s&&s.setAttribute("aria-expanded","false")})});var T=I.querySelector('.mm-h-nav-item[data-menu="ambientes"] > .mm-h-nav-link');T&&T.addEventListener("click",function(t){t.preventDefault()});var z=document.getElementById("mm-h-search-overlay"),B=document.getElementById("mm-h-buscar"),k=document.getElementById("mm-h-search-close"),L=document.getElementById("mm-h-search-input"),X=z&&z.querySelector(".mm-h-search-backdrop"),N=null;function F(){z&&(N=document.activeElement,z.hidden=!1,document.body.style.overflow="hidden",setTimeout(function(){L&&L.focus()},50))}function Y(){z&&(z.hidden=!0,document.body.style.overflow="",N&&N.focus&&N.focus())}B&&B.addEventListener("click",F),k&&k.addEventListener("click",Y),X&&X.addEventListener("click",Y),document.addEventListener("keydown",function(t){if(t.key==="Escape"&&z&&!z.hidden){Y();return}if(t.key==="/"&&z&&z.hidden){var a=document.activeElement&&document.activeElement.tagName;a!=="INPUT"&&a!=="TEXTAREA"&&!(document.activeElement&&document.activeElement.isContentEditable)&&(t.preventDefault(),F())}}),z&&z.addEventListener("keydown",function(t){if(!(t.key!=="Tab"||z.hidden)){var a=z.querySelectorAll("button, input, a[href]");if(a.length!==0){var s=a[0],d=a[a.length-1];t.shiftKey&&document.activeElement===s?(t.preventDefault(),d.focus()):!t.shiftKey&&document.activeElement===d&&(t.preventDefault(),s.focus())}}});var nn=document.getElementById("mm-h-search-results"),en=document.getElementById("mm-h-search-suggestions"),on=[{label:"Mesa de jantar",q:"mesa de jantar"},{label:"Mesa de centro",q:"mesa de centro"},{label:"Rack para TV",q:"rack"},{label:"Guarda-roupas",q:"guarda-roupas"},{label:"Cristaleira",q:"cristaleira"},{label:"Aparador",q:"aparador"},{label:"Buffet",q:"buffet"},{label:"Painel para TV",q:"painel"},{label:"Cabeceira",q:"cabeceira"},{label:"Cômoda",q:"comoda"},{label:"Estante",q:"estante"},{label:"Home theater",q:"home theater"}],kn="mm_recent_searches";function gn(){try{var t=localStorage.getItem(kn);if(!t)return[];var a=JSON.parse(t);return Array.isArray(a)?a.slice(0,5):[]}catch{return[]}}function Qn(t){if(t)try{var a=gn().filter(function(s){return s&&s.toLowerCase()!==t.toLowerCase()});a.unshift(t),localStorage.setItem(kn,JSON.stringify(a.slice(0,5)))}catch{}}function mn(t){return String(t).replace(/[&<>"']/g,function(a){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[a]})}var Fn='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',Yn='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',Tn="mm_search_cache_v1",Vn=600*1e3,In=20,Mn=null;function xn(){try{return JSON.parse(sessionStorage.getItem(Tn)||"{}")}catch{return{}}}function hn(t){try{var a=Object.keys(t);if(a.length>In){a.sort(function(d,h){return t[d].ts-t[h].ts});for(var s=0;s<a.length-In;s++)delete t[a[s]]}sessionStorage.setItem(Tn,JSON.stringify(t))}catch{}}function tt(t){var a=xn(),s=a[t.toLowerCase()];return!s||Date.now()-s.ts>Vn?null:s.products}function et(t,a){var s=xn();s[t.toLowerCase()]={ts:Date.now(),products:a},hn(s)}function Hn(t){for(var a="itens:",s=0;(s=t.indexOf(a,s))!==-1;){var d=t.indexOf("[",s);if(d===-1)return null;for(var h=0,b=!1,q=!1,P=-1,H=d;H<t.length;H++){var _=t.charAt(H);if(q){q=!1;continue}if(_==="\\"){q=!0;continue}if(_==='"'){b=!b;continue}if(!b){if(_==="[")h++;else if(_==="]"&&(h--,h===0)){P=H;break}}}if(P!==-1){var G=t.substring(d,P+1);try{var U=JSON.parse(G);if(Array.isArray(U)&&U.length>0)return U}catch{}}s=d+1}return null}function Kn(t){var a=Hn(t);if(!a)return[];for(var s=[],d=0;d<a.length&&s.length<6;d++){var h=a[d];if(h){var b=h.titulo||h.nome||"";if(b){var q=h.link||"";q&&q.charAt(0)!=="/"&&q.indexOf("http")!==0&&(q="/"+q);var P=h.midia_url||"",H=parseFloat(h.valor),_=parseFloat(h.valor_de),G=isNaN(H)?"":"R$ "+H.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),U=!isNaN(_)&&_>H?"R$ "+_.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):"",J="";typeof h.percentual_off=="number"&&h.percentual_off>0&&(J="-"+Math.round(h.percentual_off)+"%"),s.push({href:q,title:b,img:P,price:G,oldPrice:U,discount:J})}}}return s}function st(t){var a=t.toLowerCase().trim();if(!a||a.length<3)return Promise.resolve([]);var s=tt(a);if(s)return Promise.resolve(s);if(Mn)try{Mn.abort()}catch{}Mn=typeof AbortController<"u"?new AbortController:null;var d="/busca?q="+encodeURIComponent(a),h={credentials:"same-origin",headers:{Accept:"text/html"}};return Mn&&(h.signal=Mn.signal),fetch(d,h).then(function(b){if(!b.ok)throw new Error("HTTP "+b.status);return b.text()}).then(function(b){var q=Kn(b);return et(a,q),q}).catch(function(b){return b&&b.name==="AbortError"?null:[]})}function ht(t){var a=t.img?'<img src="'+mn(t.img)+'" alt="" loading="lazy" width="64" height="64"/>':'<div class="mm-h-search-product-noimg"></div>',s=t.price?'<span class="mm-h-search-product-price">'+mn(t.price)+"</span>":"",d=t.oldPrice&&t.oldPrice!==t.price?'<span class="mm-h-search-product-oldprice">'+mn(t.oldPrice)+"</span>":"",h=t.discount?'<span class="mm-h-search-product-discount">'+mn(t.discount)+"</span>":"";return'<a class="mm-h-search-product" href="'+mn(t.href)+'" data-recent="1"><span class="mm-h-search-product-thumb">'+a+h+'</span><span class="mm-h-search-product-body"><span class="mm-h-search-product-name">'+mn(t.title)+'</span><span class="mm-h-search-product-prices">'+d+s+"</span></span></a>"}function lt(){if(nn){var t=gn();if(!t.length){nn.hidden=!0,nn.innerHTML="",en&&(en.hidden=!1);return}var a='<div class="mm-h-search-section">';a+='<span class="mm-h-search-sug-label">Buscas recentes</span>',a+='<ul class="mm-h-search-list">';for(var s=0;s<t.length;s++){var d=t[s];a+='<li><a class="mm-h-search-result" href="/busca?q='+encodeURIComponent(d)+'"><span class="mm-h-search-result-icon">'+Yn+'</span><span class="mm-h-search-result-label">'+mn(d)+"</span></a></li>"}a+="</ul></div>",nn.innerHTML=a,nn.hidden=!1,en&&(en.hidden=!1)}}function at(t){if(!nn)return"";en&&(en.hidden=!0);var a=t.trim();if(a.length<2)return lt(),"";var s=a.toLowerCase(),d=on.filter(function(P){return P.label.toLowerCase().indexOf(s)!==-1||P.q.toLowerCase().indexOf(s)!==-1}).slice(0,4),h="";h+='<ul class="mm-h-search-list">',h+='<li><a class="mm-h-search-result mm-h-search-result-primary" href="/busca?q='+encodeURIComponent(a)+'" data-recent="1"><span class="mm-h-search-result-icon">'+Fn+'</span><span class="mm-h-search-result-label">Buscar por <strong>&ldquo;'+mn(a)+'&rdquo;</strong></span><span class="mm-h-search-result-arrow" aria-hidden="true">&rarr;</span></a></li>';for(var b=0;b<d.length;b++){var q=d[b];h+='<li><a class="mm-h-search-result" href="/busca?q='+encodeURIComponent(q.q)+'" data-recent="1"><span class="mm-h-search-result-icon">'+Fn+'</span><span class="mm-h-search-result-label">'+mn(q.label)+"</span></a></li>"}return h+="</ul>",a.length>=3&&(h+='<div class="mm-h-search-products-section" data-q="'+mn(a)+'"><span class="mm-h-search-sug-label">Produtos</span><div class="mm-h-search-products-grid mm-h-search-products-loading"><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div></div></div>'),nn.innerHTML=h,nn.hidden=!1,a}function xt(t){var a=at(t);!a||a.length<3||st(a).then(function(s){if(L){var d=(L.value||"").trim();if(d===a&&s!==null){var h=nn&&nn.querySelector('.mm-h-search-products-section[data-q="'+a.replace(/"/g,'\\"')+'"]');if(h){var b=h.querySelector(".mm-h-search-products-grid");if(b){if(b.classList.remove("mm-h-search-products-loading"),!s||s.length===0){h.innerHTML='<span class="mm-h-search-sug-label">Nenhum produto encontrado para &ldquo;'+mn(a)+"&rdquo;</span>";return}for(var q="",P=0;P<s.length;P++)q+=ht(s[P]);b.innerHTML=q}}}}})}var Bn=null;if(L){L.addEventListener("input",function(){clearTimeout(Bn);var t=L.value;Bn=setTimeout(function(){!t||t.trim().length<2?lt():xt(t)},300)}),nn&&nn.addEventListener("click",function(t){var a=t.target.closest&&t.target.closest("a[data-recent]");if(a){var s=a.getAttribute("href").split("q=")[1];s&&Qn(decodeURIComponent(s.replace(/\+/g," ")))}});var Cn=z&&z.querySelector(".mm-h-search-form");Cn&&Cn.addEventListener("submit",function(){Qn((L.value||"").trim())})}B&&B.addEventListener("click",function(){lt()});var an=document.getElementById("mm-h-drawer"),Gn=document.getElementById("mm-h-drawer-close"),ft=an&&an.querySelector(".mm-h-drawer-backdrop");function rt(){an&&(an.hidden=!1,document.body.style.overflow="hidden",setTimeout(function(){var t=an.querySelector(".mm-h-drawer-close");t&&t.focus()},100))}function _n(){!an||an.hidden||(an.classList.add("mm-h-drawer-closing"),document.body.style.overflow="",setTimeout(function(){an.hidden=!0,an.classList.remove("mm-h-drawer-closing");var t=document.getElementById("mm-h-burger");t&&t.focus()},320))}var Xn=document.getElementById("mm-h-burger");if(Xn&&Xn.addEventListener("click",rt),Gn&&Gn.addEventListener("click",_n),ft&&ft.addEventListener("click",_n),document.addEventListener("keydown",function(t){t.key==="Escape"&&an&&!an.hidden&&_n()}),an){var pt=0;an.addEventListener("touchstart",function(t){pt=t.touches[0].clientX},{passive:!0}),an.addEventListener("touchend",function(t){var a=t.changedTouches[0].clientX;pt-a>80&&_n()},{passive:!0})}an&&an.querySelectorAll(".mm-h-drawer-section summary").forEach(function(t){t.addEventListener("click",function(a){a.preventDefault();var s=t.parentElement,d=s.querySelector("ul");if(d)if(s.open)d.style.maxHeight=d.scrollHeight+"px",d.style.opacity="1",requestAnimationFrame(function(){d.style.maxHeight="0",d.style.opacity="0",d.style.paddingTop="0",d.style.paddingBottom="0"}),setTimeout(function(){s.open=!1,d.style.maxHeight="",d.style.opacity="",d.style.paddingTop="",d.style.paddingBottom=""},300);else{s.open=!0;var h=d.scrollHeight;d.style.maxHeight="0",d.style.opacity="0",d.style.paddingTop="0",d.style.paddingBottom="0",requestAnimationFrame(function(){d.style.maxHeight=h+"px",d.style.opacity="1",d.style.paddingTop="",d.style.paddingBottom=""}),setTimeout(function(){d.style.maxHeight="",d.style.opacity=""},320)}})});var gt=document.getElementById("mm-h-cart"),Pn=null,vn=null;function Jn(){var t=document.querySelector(".carrinho-rapido-ctn");return t||document.querySelector('#cart-preview-area > div.z-\\[9999\\], #cart-preview-area > div[class*="z-[9999]"]')}function vt(t){return!!(t&&t.className&&t.className.indexOf("z-[9999]")!==-1)}var Ct='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';function ot(t){if(t){var a=t.querySelector(".close-car-fast");a&&!a.innerHTML.trim()&&(a.innerHTML=Ct,a.setAttribute("aria-label","Fechar carrinho"),a.setAttribute("role","button"),a.setAttribute("tabindex","0"))}}function cn(t){!t||t.dataset.mmCloseWired||(t.dataset.mmCloseWired="1",t.addEventListener("click",function(a){var s=a.target;s&&s.closest&&(s.closest(".close-car-fast")||s.closest(".icon-arrow-bottom"))&&(a.preventDefault(),a.stopPropagation(),c())},!0),t.addEventListener("keydown",function(a){(a.key==="Enter"||a.key===" ")&&a.target&&a.target.closest&&a.target.closest(".close-car-fast")&&(a.preventDefault(),c())}))}function Et(t){if(t){if(!t.dataset.mmLifted){t.dataset.mmLifted="1",t.style.position="fixed",t.style.display="block",t.style.zIndex="200";for(var a=t.parentElement;a&&!a.classList.contains("header-middle");)a.style.zIndex="auto",a.style.transform="none",a.style.filter="none",a.style.isolation="auto",a=a.parentElement}cn(t),ot(t)}}var ct=[{href:"/rack-atenas-cor-naturalle-largura-220-cm",name:"Rack Atenas 220cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5519/am-2501-mavaular-rack-atenas-220-naturalle-lado.jpg?ims=200x200",priceFrom:"R$ 1.615,49",priceTo:"R$ 1.032,30"},{href:"/rack-atenas-cor-naturalle-largura-180-cm",name:"Rack Atenas 180cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5419/am-2501-mavaular-rack-atenas-180-naturalle.jpg?ims=200x200",priceFrom:"R$ 1.688,71",priceTo:"R$ 942,31"},{href:"/buffet-arcus-cor-naturalle-largura-92-cm",name:"Buffet Arcus 92cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5439/am-2501-mavaular-arcus-02-pts-naturalle.jpg?ims=200x200",priceFrom:"R$ 1.359,09",priceTo:"R$ 807,30"},{href:"/buffet-atenas-cor-naturalle",name:"Buffet Atenas",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/4237/am-2502-mavaular-buffet-atenas-naturalle.jpg?ims=200x200",priceFrom:"R$ 2.124,07",priceTo:"R$ 1.032,30"}],it='<svg viewBox="0 0 48 48" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 14 8 20v22a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V20l-4-6z"/><path d="M8 20h32"/><path d="M32 28a8 8 0 0 1-16 0"/></svg>';function Un(){try{if(typeof Zord<"u"&&typeof Zord.get=="function"){var t=Zord.get("cart.size");if(typeof t=="number"&&t>0)return t;if(typeof t=="string"&&/^\d+$/.test(t)&&parseInt(t,10)>0)return parseInt(t,10)}}catch{}var a=document.querySelector("#cart-preview-area .item-ctn, .carrinho-container .item-ctn");if(a){var s=(a.textContent||"").trim();if(s&&/\d/.test(s)){var d=parseInt(s.replace(/\D/g,""),10);if(!isNaN(d))return d}}var h=document.querySelector(".carrinho-rapido-ctn");if(h){var b=0;if(h.querySelectorAll(".cart-item").forEach(function(q){q.closest(".mm-cart-empty-wrapper")||b++}),b>0)return b}return 0}function Ln(t){if(Un()!==0||!t)return!1;var a=t.querySelector(".box-empty-cart");if(!a)return!1;var s=getComputedStyle(a);return!(s.display==="none"||s.visibility==="hidden")}function $n(t){if(!t)return!1;var a=Un();if(a===0)return!1;var s=0;return t.querySelectorAll(".cart-item").forEach(function(d){d.closest(".mm-cart-empty-wrapper")||s++}),s>0}function dt(t){if(t){t.classList.remove("mm-cart-has-empty-enhancement");var a=t.querySelector(":scope > .mm-cart-empty-wrapper");a&&a.remove()}}function On(t){if(t){var a=t.querySelector(".content-cart");if(a){if($n(a)){dt(a);return}var s=a.querySelectorAll(".cart-item").length===0;if(!(!Ln(a)&&!(s&&Un()===0))&&!a.querySelector(":scope > .mm-cart-empty-wrapper")){var d=document.createElement("div");d.className="mm-cart-empty-wrapper";for(var h="",b=0;b<ct.length;b++){var q=ct[b];h+='<a class="mm-cart-suggestion-card" href="'+q.href+'"><span class="mm-cart-suggestion-thumb"><img src="'+q.img+'" alt="" loading="lazy" width="80" height="80"/></span><span class="mm-cart-suggestion-body"><span class="mm-cart-suggestion-name">'+q.name+'</span><span class="mm-cart-suggestion-price"><span class="mm-cart-suggestion-price-from">'+q.priceFrom+'</span><span class="mm-cart-suggestion-price-to">'+q.priceTo+"</span></span></span></a>"}d.innerHTML='<div class="mm-cart-empty-hero"><div class="mm-cart-empty-icon">'+it+'</div><h3 class="mm-cart-empty-title">Seu carrinho está vazio</h3><p class="mm-cart-empty-copy">Dê uma olhada nos móveis que nossos clientes mais amam.</p></div><div class="mm-cart-suggestions"><span class="mm-cart-suggestions-label">Você pode gostar de</span><div class="mm-cart-suggestions-grid">'+h+"</div></div>",a.classList.add("mm-cart-has-empty-enhancement"),a.appendChild(d)}}}}function ut(t,a){try{if(typeof Zord>"u"||!Zord.checkout||typeof Zord.checkout.atualizaPreview!="function"){a();return}var s=Un();if(s===0){a();return}if(t.querySelector(".cart-item")){a();return}Zord.checkout.atualizaPreview();var d=Date.now(),h=2e3;(function b(){if(t.querySelector(".cart-item")){a();return}if(Date.now()-d>=h){a();return}setTimeout(b,50)})()}catch{a()}}function o(){if(window.innerWidth<=767){var t=document.querySelector("#cart-preview-area a.link-cart")||document.querySelector('#cart-preview-area a[href*="/checkout/cart"]');if(t){let b=function(){var q=document.querySelector('#cart-preview-area > div[class*="z-[9999]"]');q&&(q.dataset.mmUserOpened="1",q.className.indexOf("translate-x-[0]")===-1&&(q.classList.remove("translate-x-[100%]"),q.classList.add("translate-x-[0]")))};document.documentElement.dataset.mmCartOpening="1",t.dataset.mmBypass="1",t.click(),delete t.dataset.mmBypass,setTimeout(b,120),setTimeout(b,380),setTimeout(b,700),setTimeout(function(){delete document.documentElement.dataset.mmCartOpening},800);return}window.location.href="/checkout/cart";return}var a=Jn();if(a){ut(a,function(){p(a)});return}var s=0,d=14,h=!1;(function b(){if(s++,a=Jn(),a){ut(a,function(){p(a)});return}if(!h&&s>=2){h=!0;try{typeof Zord<"u"&&Zord.checkout&&typeof Zord.checkout.atualizaPreview=="function"&&Zord.checkout.atualizaPreview()}catch{}}s<d?setTimeout(b,200):window.location.href="/checkout/cart"})()}function p(t){var a=vt(t);a||(Et(t),ot(t)),On(t);var s=t.querySelector(".content-cart");if(s&&!s.dataset.mmObserved){s.dataset.mmObserved="1";var d=new MutationObserver(function(){On(t)});d.observe(s,{childList:!0,subtree:!0,attributes:!1})}if(a){t.classList.remove("translate-x-[100%]"),t.classList.add("translate-x-[0]");var h=t.querySelector('.group.cursor-pointer, [class*="text-error-700"]');h&&!h.dataset.mmWired&&(h.dataset.mmWired="1",h.addEventListener("click",function(b){b.preventDefault(),b.stopPropagation(),c()},!0))}else t.classList.add("mm-drawer-open");!a&&!vn&&(vn=document.createElement("div"),vn.id="mm-h-cart-scrim",vn.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:150;opacity:0;transition:opacity 320ms;",vn.addEventListener("click",c),document.body.appendChild(vn),requestAnimationFrame(function(){vn.style.opacity="1"})),document.body.style.overflow="hidden"}function c(){var t=Jn();if(t&&(vt(t)?(t.classList.remove("translate-x-[0]"),t.classList.add("translate-x-[100%]")):t.classList.remove("mm-drawer-open")),vn){vn.style.opacity="0";var a=vn;setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},320),vn=null}document.body.style.overflow=""}gt&&gt.addEventListener("click",function(t){t.preventDefault(),o()}),window.innerWidth<=767&&(function t(){var a=document.querySelector('#cart-preview-area > [class*="z-[9999]"]');if(!a){setTimeout(t,500);return}if(!a.dataset.mmGuardWired){a.dataset.mmGuardWired="1";var s=new MutationObserver(function(){if(a.className.indexOf("translate-x-[0]")===-1){delete a.dataset.mmUserOpened;return}document.documentElement.dataset.mmCartOpening||a.dataset.mmUserOpened||(a.classList.remove("translate-x-[0]"),a.classList.add("translate-x-[100%]"))});s.observe(a,{attributes:!0,attributeFilter:["class"]})}})(),document.addEventListener("click",function(t){var a=t.target.closest('#cart-preview-area a.link-cart, header.ra-header > .header-bottom a[href*="/checkout/cart"], header.ra-header > .header-bottom a[href*="carrinho"]');if(a){if(a.dataset.mmBypass)return;t.preventDefault(),t.stopPropagation(),o()}},!0);var y=document.querySelector("header.ra-header > .header-bottom");y&&y.addEventListener("click",function(t){var a=t.target.closest('a[href*="carrinho"], a[href*="/checkout/cart"], [class*="carrinho"]');a&&(t.preventDefault(),t.stopPropagation(),o())},!0),document.addEventListener("keydown",function(t){t.key==="Escape"&&vn&&c()});var M=document.getElementById("mm-h-cart-count"),A=document.getElementById("mm-h-cart");function D(){if(M){var t=Un();t>0?(M.textContent=t>99?"99+":String(t),M.hidden=!1):M.hidden=!0,A&&A.setAttribute("aria-label","Carrinho, "+t+" "+(t===1?"item":"itens"));var a=Jn();a&&a.dataset.mmLifted&&On(a)}}window.addEventListener("reactItemAddedToCart",D),typeof jQuery<"u"&&(jQuery(document).on("reactItemAddedToCart",D),jQuery(document).ajaxComplete(function(t,a,s){s&&s.url&&s.url.indexOf("checkout/cart")!==-1&&setTimeout(D,150)})),setTimeout(D,500),setTimeout(D,2e3),setTimeout(D,5e3);function R(){var t=document.querySelector("#cart-preview-area .item-ctn, .carrinho-container .item-ctn");if(!(!t||t.dataset.mmObserved)){t.dataset.mmObserved="1";var a=new MutationObserver(D);a.observe(t,{childList:!0,characterData:!0,subtree:!0})}}R(),setTimeout(R,1e3),setTimeout(R,3e3);var Z=new MutationObserver(function(t){for(var a=0;a<t.length;a++)for(var s=t[a].addedNodes,d=0;d<s.length;d++){var h=s[d];if(h.nodeType===1){var b=h.classList&&h.classList.contains("popup-adicionado-ao-carrinho")||h.querySelector&&h.querySelector(".popup-adicionado-ao-carrinho");if(b){setTimeout(D,120),setTimeout(D,700);return}}}});Z.observe(document.body,{childList:!0,subtree:!0});var K=-1;setInterval(function(){var t=Un();t!==K&&(K=t,D())},1e3);var n=0,e=!1,r=24;function m(){var t=window.scrollY,a=t-n;t>r&&a>0?I.classList.add("is-compact"):(t<=r||a<0)&&I.classList.remove("is-compact"),n=t,e=!1}window.addEventListener("scroll",function(){e||(requestAnimationFrame(m),e=!0)},{passive:!0})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",x):x()})(),(function(){if(!document.getElementById("mm-org-schema")){var O=document.querySelector('.logo img, header img[alt*="logo" i], header img[alt*="Madeira" i]'),j=O&&O.getAttribute("src")||"";j&&j.indexOf("http")!==0&&(j="https://www.madeiramania.com.br"+j);var I={"@context":"https://schema.org","@type":"OnlineStore","@id":"https://www.madeiramania.com.br/#organization",name:"Madeira Mania",url:"https://www.madeiramania.com.br",description:"Loja online de móveis com preços abaixo dos marketplaces. Racks, mesas, cristaleiras, sofás, camas e estantes com entrega para todo o Brasil. Até 12x sem juros ou 7% de desconto no PIX.",sameAs:["https://www.instagram.com/madeiramaniabr/","https://www.facebook.com/madeiramaniabr/","https://www.reclameaqui.com.br/empresa/madeira-mania-comercio-de-moveis-ltda/","https://www.youtube.com/@madeiramaniabr","https://www.tiktok.com/@madeiramaniabr"],contactPoint:[{"@type":"ContactPoint",telephone:"+55-11-91529-9488",contactType:"customer service",availableLanguage:"Portuguese"},{"@type":"ContactPoint",url:"https://wa.me/5511915299488",contactType:"customer service",description:"WhatsApp"}],hasMerchantReturnPolicy:{"@type":"MerchantReturnPolicy",applicableCountry:"BR",returnPolicyCategory:"https://schema.org/MerchantReturnFiniteReturnWindow",merchantReturnDays:7,returnMethod:"https://schema.org/ReturnByMail"}};j&&j.indexOf("http")===0&&(I.logo=j);var v=document.createElement("script");v.type="application/ld+json",v.id="mm-org-schema",v.textContent=JSON.stringify(I),document.head.appendChild(v)}})(),(function x(){x._retries=(x._retries||0)+1;var O=document.querySelector("#produto-react-app");if(!O||!O.querySelector(".informacoes-compra-produto")){x._retries<30&&setTimeout(x,500);return}if((function(){var v=O.querySelector("#container-swiper"),i=O.querySelector(".swiper-pagination");if(!v||!i)return;var l=i.querySelectorAll(".swiper-pagination-bullet");if(l.length<2)return;var u=O.querySelector(".gallery-main");if(u)for(var g=u.querySelectorAll(".button-prev, .button-next"),f=0;f<g.length;f++)g[f].style.display="none";var C=document.createElement("div");C.id="mm-gallery-counter",C.style.cssText=["position: absolute","top: 12px","left: 12px","background: rgba(255,255,255,0.85)","color: #333","font-size: 12px","font-weight: 500","padding: 3px 10px","border-radius: 12px","z-index: 10","pointer-events: none","font-family: -apple-system, BlinkMacSystemFont, sans-serif","letter-spacing: 0.5px"].join(";"),u&&(u.style.position="relative",u.appendChild(C));function w(){var z=i.querySelector(".swiper-pagination-bullet-active"),B=i.querySelectorAll(".swiper-pagination-bullet");if(!(!z||!B.length)){var k=Array.prototype.indexOf.call(B,z)+1;C.textContent=k+" / "+B.length}}w();var T=new MutationObserver(w);T.observe(i,{subtree:!0,attributes:!0,attributeFilter:["class"]})})(),(function(){var v=O.querySelector(".avaliacoes");if(v){for(var i=document.querySelectorAll("script:not([src])"),l=0,u=0,g=0;g<i.length;g++){var f=i[g].textContent;if(!(f.indexOf("Zord.avaliacoes")===-1&&f.indexOf("produtoAvaliacoes")===-1)){var C=f.match(/produtoAvaliacoes\s*:\s*(\d+)/),w=f.match(/\bnota\s*:\s*(?:Number\()?([\d.]+)/);if(C&&(l=parseInt(C[1],10)),w&&(u=parseFloat(w[1])),l>0)break}}if(l===0){v.style.display="none";return}for(var T=(u%1===0,u.toFixed(1)),z="",B=1;B<=5;B++)B<=Math.floor(u)||B-u<1&&B-u>0?z+='<span style="color:#f5a623;font-size:14px;">&#9733;</span>':z+='<span style="color:#ddd;font-size:14px;">&#9733;</span>';var k=l===1?"avaliação":"avaliações";v.innerHTML='<a href="#avaliacoes" style="display:inline-flex;align-items:center;gap:4px;text-decoration:none;color:#555;font-size:13px;">'+z+' <span style="font-weight:600;color:#1a1a1a;">'+T+'</span> <span style="color:#777;">('+l+" "+k+")</span></a>",v.style.display="",v.style.marginTop="4px"}})(),(function(){var v=O.querySelector("h1");if(v){var i=v.parentElement.querySelector(".text-secondary-700.text-xs");if(i){var l=v.textContent.toLowerCase().replace(/\s+/g," ").trim(),u=i.textContent.toLowerCase().replace(/\s+/g," ").trim(),g=u.split(/[\s\-:,]+/).filter(function(C){return C.length>2}),f=g.filter(function(C){return l.indexOf(C)!==-1});f.length>=g.length*.6&&(i.style.display="none")}}})(),(function(){var v=O.querySelector(".informacoes-compra-produto");if(!v||document.getElementById("mm-action-row"))return;var i=v.querySelector(".salvar-favoritos"),l=v.querySelector(".exibe-botao-whatsapp"),u=v.querySelector(".compartilhar-produto");if(!i&&!l&&!u)return;var g=document.createElement("div");g.id="mm-action-row";function f(){var F=document.createElementNS("http://www.w3.org/2000/svg","svg");F.setAttribute("width","18"),F.setAttribute("height","18"),F.setAttribute("viewBox","0 0 24 24"),F.setAttribute("fill","none"),F.setAttribute("stroke","currentColor"),F.setAttribute("stroke-width","2"),F.setAttribute("stroke-linecap","round"),F.setAttribute("stroke-linejoin","round");var Y=document.createElementNS("http://www.w3.org/2000/svg","path");return Y.setAttribute("d","M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"),F.appendChild(Y),F}function C(){var F=document.createElementNS("http://www.w3.org/2000/svg","svg");F.setAttribute("width","18"),F.setAttribute("height","18"),F.setAttribute("viewBox","0 0 24 24"),F.setAttribute("fill","none"),F.setAttribute("stroke","currentColor"),F.setAttribute("stroke-width","2"),F.setAttribute("stroke-linecap","round"),F.setAttribute("stroke-linejoin","round");var Y=document.createElementNS("http://www.w3.org/2000/svg","path");return Y.setAttribute("d","M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"),F.appendChild(Y),F}if(i){var w=document.createElement("div");w.className="salvar-favoritos";var T=document.createElement("button");T.setAttribute("aria-label","Favoritar"),T.appendChild(C()),T.addEventListener("click",function(){var F=i.querySelector("button");F&&F.click()}),w.appendChild(T),g.appendChild(w),i.style.cssText+=";position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;"}if(l&&(l.style.display="none"),u){var z=document.createElement("div");z.className="compartilhar-produto";var B=document.createElement("button");B.setAttribute("aria-label","Compartilhar"),B.appendChild(f()),B.addEventListener("click",function(){var F=u.querySelector("button");F&&F.click()}),z.appendChild(B),g.appendChild(z),u.style.cssText+=";position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;"}var k=v.querySelector("#area-comprar");if(k){for(var L=k,X=k.nextElementSibling;X;){var N=window.getComputedStyle(X).position;if(N==="fixed"||N==="sticky")L=X,X=X.nextElementSibling;else break}L.parentNode.insertBefore(g,L.nextSibling)}else v.appendChild(g)})(),(function(){var v=O.querySelector(".comprar-fixo.area-compra-float");if(!(!v||v.querySelector("#mm-sticky-old-price"))){var i=O.querySelector(".informacoes-compra-produto");if(i){var l=i.querySelector(".line-through");if(l){var u=l.textContent.trim(),g=v.querySelector(".price-fixed");if(g){var f=document.createElement("span");f.id="mm-sticky-old-price",f.textContent=u,f.style.cssText=["text-decoration: line-through","color: #999","font-size: 11px","display: block","line-height: 1.2","margin-bottom: 1px"].join(";"),g.insertBefore(f,g.firstChild)}}}}})(),(function(){var v=O.querySelector(".informacoes-compra-produto");if(!(!v||document.getElementById("mm-trust-badges"))){var i=v.querySelector("#area-comprar");if(i){var l=document.createElement("div");l.id="mm-trust-badges",l.style.cssText=["display: flex","justify-content: center","align-items: center","flex-wrap: wrap","gap: 6px 10px","padding: 8px 0","margin-top: 2px"].join(";");var u=[{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',text:"Compra Segura"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',text:"Troca 7 dias"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10" stroke="#4b664a"/></svg>',text:"Reclame Aqui"}],g="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:#777;white-space:nowrap;";u.forEach(function(C,w){var T=document.createElement("span");if(T.style.cssText=g,T.innerHTML=C.icon+" "+C.text,l.appendChild(T),w<u.length-1){var z=document.createElement("span");z.textContent="|",z.style.cssText="color:#ddd;font-size:10px;",l.appendChild(z)}});for(var f=i.nextElementSibling;f&&window.getComputedStyle(f).position==="fixed";)f=f.nextElementSibling;f?v.insertBefore(l,f):v.appendChild(l)}}})(),(function(){var v=O.querySelector(".informacoes-compra-produto");if(!(!v||document.getElementById("mm-whatsapp-cta"))){var i=(document.querySelector("#prod-nome")||{}).value||"",l=(document.querySelector("#prod-valor")||{}).value||"",u=window.location.href,g="5511915299488",f="";l&&(f=parseFloat(l).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}));var C="Olá! Tenho interesse no "+i.trim();f&&(C+=" ("+f+")"),C+=". "+u;var w="https://api.whatsapp.com/send?phone="+g+"&text="+encodeURIComponent(C),T=document.createElement("a");T.id="mm-whatsapp-cta",T.href=w,T.target="_blank",T.rel="noopener noreferrer";var z='<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';T.innerHTML=z+"<span>Compre pelo WhatsApp</span>";var B=document.getElementById("mm-action-row"),k=document.getElementById("mm-trust-badges"),L=B||k;L&&L.parentNode===v&&v.insertBefore(T,L.nextElementSibling)}})(),(function(){var v=O.querySelector(".informacoes-compra-produto");if(!(!v||document.getElementById("mm-stock-indicator"))){for(var i=10,l=document.querySelectorAll("script:not([src])"),u=-1,g=0;g<l.length;g++){var f=l[g].textContent,C=f.match(/"qtde_estoque"\s*:\s*(\d+)/);if(C){u=parseInt(C[1],10);break}}var w=u-i;if(!(w<1||w>9)){var T=document.createElement("div");T.id="mm-stock-indicator",T.style.cssText=["display: flex","align-items: center","gap: 6px","padding: 8px 12px","background: #fff8f0","border: 1px solid #fde0c2","border-radius: 8px","font-size: 13px","color: #c65d00","font-weight: 500","margin-top: 4px"].join(";");var z=w===1?"unidade":"unidades";T.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c65d00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>Restam apenas <strong>'+w+"</strong> "+z+" em estoque";var B=v.firstElementChild;B&&B.parentNode.insertBefore(T,B.nextElementSibling)}}})(),(function(){if(!document.getElementById("mm-trust-block")){var v=window.innerWidth>=769,i=document.createElement("div");i.id="mm-trust-block",i.style.cssText=["background: #f7f8f7","display: flex","align-items: center","justify-content: center","gap: "+(v?"40px":"10px"),"padding: "+(v?"14px 24px":"12px 16px"),v?"flex-direction: row":"flex-direction: column",v?"border-top: 1px solid #e8ece8":"border-radius: 10px",v?"border-bottom: 1px solid #e8ece8":"",v?"margin: 0":"margin-top: 10px"].filter(Boolean).join(";");var l=[{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',label:"Atendimento",desc:"Seg à Sex 8h-18h"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',label:"Garantia",desc:"12 meses fabricação"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',label:"Trocas",desc:"Até 7 dias"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',label:"Frete",desc:"Todo o Brasil"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',label:"12x sem juros",desc:"No cartão"}],u="display:flex;align-items:center;gap:8px;",g="font-size:13px;font-weight:600;color:#1a1a1a;line-height:1.2;",f="font-size:11px;color:#777;line-height:1.2;";if(l.forEach(function(B){var k=document.createElement("div");k.style.cssText=u,k.innerHTML=B.icon+'<div><div style="'+g+'">'+B.label+'</div><div style="'+f+'">'+B.desc+"</div></div>",i.appendChild(k)}),v){var C=document.querySelector("#pagina-produto-react-app");if(C&&C.nextSibling)C.parentNode.insertBefore(i,C.nextSibling);else{var w=document.querySelector(".main-produto");w&&w.appendChild(i)}}else{var T=O.querySelector(".informacoes-compra-produto"),z=T?T.querySelector(".calculo-frete"):null;z?z.parentNode.insertBefore(i,z.nextElementSibling):T&&T.appendChild(i)}}})(),(function(){var v=O.querySelector(".informacoes-compra-produto");if(!v||document.getElementById("mm-inline-payments"))return;var i=v.querySelector(".form-pag-link");if(!i)return;var l=parseFloat(i.getAttribute("data-valor"))||0,u=parseFloat(i.getAttribute("data-valor-pix"))||0;if(l<=0)return;for(var g=[],f=1;f<=12;f++)g.push({vezes:f,valor:(l/f).toFixed(2).replace(".",",")});function C(gn){return"R$ "+gn.toFixed(2).replace(".",",")}var w=l-u,T=document.createElement("div");T.id="mm-inline-payments",T.style.cssText=["padding: 12px 0","border-top: 1px solid #f0f0f0","margin-top: 4px"].join(";");var z=window.innerWidth>=769,B="display:flex;align-items:center;gap:6px;padding:"+(z?"2px":"4px")+" 0;font-size:13px;color:#444;",k="width:5px;height:5px;border-radius:50%;background:#4b664a;flex-shrink:0;",L='<div style="'+B+'"><span style="'+k+'"></span><span><strong style="color:#1a1a1a;">PIX: '+C(u)+"</strong>"+(w>0?' <span style="color:#2e7d32;font-size:12px;font-weight:600;">(economize '+C(w)+")</span>":"")+"</span></div>";if(z)T.innerHTML=L+'<button id="mm-toggle-parcelas" style="background:none;border:none;color:#4b664a;font-size:13px;font-weight:500;padding:2px 0 0;cursor:pointer;display:flex;align-items:center;gap:4px;">Ver todas as parcelas <span style="font-size:10px;">&#9660;</span></button><div id="mm-more-parcelas" style="display:none;"></div>';else{for(var X="",N=0;N<3;N++)X+='<div style="'+B+'"><span style="'+k+'"></span><span>'+g[N].vezes+"x de R$ "+g[N].valor+" sem juros</span></div>";T.innerHTML=L+X+'<button id="mm-toggle-parcelas" style="background:none;border:none;color:#4b664a;font-size:13px;font-weight:500;padding:6px 0 0;cursor:pointer;display:flex;align-items:center;gap:4px;">Ver todas as parcelas <span style="font-size:10px;">&#9660;</span></button><div id="mm-more-parcelas" style="display:none;"></div>'}for(var F="",Y=z?0:3,nn=Y;nn<12;nn++)F+='<div style="'+B+'"><span style="'+k+'"></span><span>'+g[nn].vezes+"x de R$ "+g[nn].valor+" sem juros</span></div>";var en=i.closest("div");en&&(en.parentNode.insertBefore(T,en),i.style.display="none");var on=document.getElementById("mm-more-parcelas");on&&(on.innerHTML=F);var kn=document.getElementById("mm-toggle-parcelas");kn&&on&&kn.addEventListener("click",function(){var gn=on.style.display!=="none";on.style.display=gn?"none":"block",kn.innerHTML=gn?'Ver todas as parcelas <span style="font-size:10px;">&#9660;</span>':'Ver menos <span style="font-size:10px;">&#9650;</span>'})})(),(function(){var v=document.querySelector(".recomendacao-ctn-0.accordion"),i=document.querySelector(".descricao-produto.accordion");if(!(!v||!i)){var l=v.parentNode;if(!(!l||l!==i.parentNode)){var u=Array.prototype.slice.call(l.children),g=u.indexOf(v),f=u.indexOf(i);g<f&&l.insertBefore(i,v)}}})(),(function(){var v=document.querySelector("#cep");if(!v)return;var i="mm_cep",l=v.closest(".area-calculo");if(l){var u=l.querySelector("button");u&&u.addEventListener("click",function(){var z=v.value.replace(/\D/g,"");if(z.length===8)try{localStorage.setItem(i,z)}catch{}})}var g=null;try{g=localStorage.getItem(i)}catch{}if(!g||g.length!==8||v.value.replace(/\D/g,"").length>0)return;var f=g.substring(0,5)+"-"+g.substring(5);function C(z,B){z.focus();try{z.setSelectionRange(0,(z.value||"").length)}catch{}try{document.execCommand("delete")}catch{}try{document.execCommand("insertText",!1,B)}catch{}}function w(){var z=v.closest(".calculo-frete");return!!(z&&/R\$\s*\d/.test(z.innerText))}function T(z){z<=0||w()||(C(v,f),setTimeout(function(){if(!w()){var B=v.closest(".area-calculo"),k=B&&B.querySelector("button:not([disabled])");k&&k.click(),setTimeout(function(){w()||T(z-1)},2e3)}},2500))}setTimeout(function(){T(3)},600)})(),(function(){for(var v=document.querySelectorAll('.exibe-botao-whatsapp a[href*="whatsapp"]'),i=0;i<v.length;i++){var l=v[i].getAttribute("href");l&&l.indexOf("null")!==-1&&v[i].setAttribute("href",l.replace(/\s*null\s*/g," ").replace(/\s{2,}/g," "))}var u=document.querySelector(".exibe-botao-whatsapp");if(u){var g=new MutationObserver(function(){var f=u.querySelector('a[href*="whatsapp"]');f&&f.href.indexOf("null")!==-1&&f.setAttribute("href",f.getAttribute("href").replace(/\s*null\s*/g," ").replace(/\s{2,}/g," "))});g.observe(u,{subtree:!0,attributes:!0,attributeFilter:["href"]})}})(),(function(){var v=O.querySelector(".informacoes-compra-produto");if(!(!v||document.getElementById("mm-envio-badge"))){for(var i=!1,l=O.querySelectorAll(".tag-produto .text-tag, .tag-produto"),u=0;u<l.length;u++)if(l[u].textContent.toLowerCase().indexOf("envio")!==-1){i=!0;break}if(!i)for(var g=document.querySelectorAll("script:not([src])"),f=0;f<g.length;f++){var C=g[f].textContent.match(/"qtde_estoque"\s*:\s*(\d+)/);if(C){parseInt(C[1],10)>10&&(i=!0);break}}if(i){var w=document.createElement("div");w.id="mm-envio-badge",w.style.cssText=["display: inline-flex","align-items: center","gap: 6px","padding: 4px 0","font-size: 13px","color: #1a1a1a","margin-top: 4px"].join(";"),w.innerHTML='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c65d00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span><strong style="color:#1a1a1a;">Pronta entrega</strong> <span style="color:#777;font-weight:400;">·</span> <span style="color:#555;font-weight:400;">Enviamos em 24h</span></span>';var T=v.firstElementChild;T&&T.nextElementSibling&&T.parentNode.insertBefore(w,T.nextElementSibling)}}})(),(function(){for(var v=O.querySelectorAll(".tag-1.tag-produto"),i=0;i<v.length;i++){var l=v[i].textContent.trim();(l.indexOf("%")!==-1||l.indexOf("OFF")!==-1)&&(v[i].style.display="none")}})(),(function(){for(var v=document.querySelectorAll('a[href*="avaliacoes"], a[href="#avaliacoes"]'),i=0;i<v.length;i++)v[i].addEventListener("click",function(l){l.preventDefault();var u=document.querySelector("#avaliacoes")||document.querySelector(".container-avaliacoes");u&&u.scrollIntoView({behavior:"smooth",block:"start"})})})(),(function(){var v=O.querySelector("h1");if(!(!v||document.getElementById("mm-brand"))){var i=document.querySelector("#prod-marca");if(!(!i||!i.value||i.value.trim()==="")){var l=document.createElement("span");l.id="mm-brand",l.style.cssText="display:block;font-size:13px;color:#777;font-weight:400;margin-top:2px;",l.textContent="por "+i.value.trim();var u=v.parentElement;if(u){var g=v.nextElementSibling;g?u.insertBefore(l,g):u.appendChild(l)}}}})(),(function(){var v=document.getElementById("mm-trust-badges");if(v){for(var i=v.querySelectorAll("span"),l=0;l<i.length;l++)if(i[l].textContent.indexOf("Reclame")!==-1){var u=document.querySelector('footer .reclame-aqui a, footer a[href*="reclameaqui"]'),g=u?u.href:"https://www.reclameaqui.com.br/empresa/madeira-mania-comercio-de-moveis-ltda/";i[l].innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10" stroke="#4b664a"/></svg> <a href="'+g+'" target="_blank" rel="noopener" style="color:#777;text-decoration:none;">RA Verificada</a>'}}})(),(function(){var v=O.querySelector(".informacoes-compra-produto");if(v){var i=v.querySelector(".calculo-frete");if(i){v.style.cssText+=";display:flex !important;flex-direction:column !important;",i.style.cssText+=";order:20 !important;";var l=document.getElementById("mm-trust-block");l&&(l.style.cssText+=";order:30 !important;")}}})(),(function(){var v=O.querySelector(".informacoes-compra-produto");if(!(!v||document.getElementById("mm-mini-specs"))){var i=document.querySelector(".descricao-produto"),l={};if(i)for(var u=i.querySelectorAll("td"),g=0;g<u.length-1;g+=2){var f=u[g].textContent.trim().toLowerCase(),C=u[g+1].textContent.trim();f.indexOf("largura")!==-1&&(l.largura=C),f.indexOf("altura")!==-1&&(l.altura=C),f.indexOf("profundidade")!==-1&&(l.profundidade=C),f.indexOf("material")!==-1&&(l.material=C),f.indexOf("dobradi")!==-1&&(l.dobradicas=C),(f.indexOf("pes")!==-1||f.indexOf("pés")!==-1)&&(l.pes=C)}if(!(!l.largura&&!l.material)){var w=[];if(l.material&&w.push(l.material),l.dobradicas&&w.push("Dobradiças "+l.dobradicas),l.pes&&w.push("Pés: "+l.pes),l.largura&&w.push(l.largura+" × "+(l.altura||"")+" × "+(l.profundidade||"")),w.length!==0){var T=document.createElement("div");T.id="mm-mini-specs",T.style.cssText="padding:8px 0;border-top:1px solid #f0f0f0;margin-top:4px;";var z="";w.forEach(function(k){z+='<div style="display:flex;align-items:center;gap:6px;padding:2px 0;font-size:13px;color:#555;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polyline points="20 6 9 17 4 12"/></svg><span>'+k+"</span></div>"}),T.innerHTML=z;var B=v.querySelector("#area-comprar");B&&v.insertBefore(T,B)}}}})(),(function(){if(window.innerWidth<769||document.getElementById("mm-desktop-sticky"))return;var v=O.querySelector(".informacoes-compra-produto");if(!v)return;var i=v.querySelector(".line-through"),l=(document.querySelector("#prod-valor-principal")||{}).value,u=(document.querySelector("#prod-valor")||{}).value,g=(document.querySelector("#prod-nome")||{}).value||"",f=g.split(" - ")[0]||g;if(!l)return;var C=i?i.textContent.trim():"",w=parseFloat(l).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),T=u?parseFloat(u).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}):"",z=u?(parseFloat(u)/12).toFixed(2).replace(".",","):"",B=document.createElement("div");B.id="mm-desktop-sticky",B.style.cssText=["position: fixed","top: -60px","left: 0","width: 100%","height: 56px","background: #ffffff","border-bottom: 1px solid #e8ece8","box-shadow: 0 2px 8px rgba(0,0,0,0.06)","z-index: 100","display: flex","align-items: center","justify-content: center","padding: 0 24px","transition: top 0.25s ease","font-family: -apple-system, BlinkMacSystemFont, sans-serif"].join(";");var k="display:flex;align-items:center;gap:16px;max-width:1200px;width:100%;",L="font-size:14px;font-weight:500;color:#1a1a1a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:300px;",X="display:flex;align-items:center;gap:8px;margin-left:auto;",N="text-decoration:line-through;color:#999;font-size:12px;",F="font-size:15px;font-weight:600;color:#1a1a1a;",Y="font-size:12px;color:#666;",nn="display:inline-flex;align-items:center;justify-content:center;padding:8px 20px;background:#4b664a;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer;white-space:nowrap;";B.innerHTML='<div style="'+k+'"><span style="'+L+'">'+f+'</span><div style="'+X+'">'+(C?'<span style="'+N+'">'+C+"</span>":"")+'<span style="'+F+'">'+w+' <small style="font-weight:400;font-size:11px;color:#666;">PIX</small></span>'+(z?'<span style="'+Y+'">12x R$ '+z+"</span>":"")+'</div><button id="mm-desktop-sticky-btn" style="'+nn+'">Comprar</button></div>',document.body.appendChild(B);var en=document.getElementById("mm-desktop-sticky-btn");en&&en.addEventListener("click",function(){var gn=O.querySelector(".btn-comprar");gn&&gn.click()});var on=v.querySelector("#area-comprar");if(!on)return;function kn(){var gn=on.getBoundingClientRect();B.style.top=gn.bottom<0?"0px":"-60px"}window.addEventListener("scroll",kn,{passive:!0}),kn()})(),(function(){var v=[".selos-seguranca",".formas-pagto"];v.forEach(function(i){var l=document.querySelector("footer "+i);l&&l.classList.contains("closed")&&(l.classList.remove("closed"),l.classList.add("open"))})})(),window.innerWidth>=769){var j=O.querySelector(".informacoes-compra-produto");j&&(j.style.setProperty("gap","12px","important"),j.style.setProperty("row-gap","12px","important"))}document.body.classList.add("mm-ready")})();var wt=document.currentScript;(function x(){x._retries=(x._retries||0)+1;var O=document.querySelector("#produto-react-app");if(!O||!O.querySelector(".informacoes-compra-produto")){x._retries<30&&setTimeout(x,500);return}if(!document.getElementById("mm-product-schema")){var j=O.querySelector("h1"),I=j?j.textContent.trim():"";if(I){var v=document.querySelector('link[rel="canonical"]'),i=v?v.href:location.href.split("?")[0],l=document.querySelector("#prod-marca"),u=l?l.value.trim():"";!u&&window.dataLayer&&window.dataLayer[0]&&(u=window.dataLayer[0].brand||"");var g=O.querySelector(".form-pag-link"),f=document.querySelector("#prod-valor-principal"),C=document.querySelector("#prod-valor"),w=0,T=0;g&&(w=parseFloat(g.getAttribute("data-valor-pix"))||0,T=parseFloat(g.getAttribute("data-valor"))||0),!T&&C&&(T=parseFloat(C.value)||0),!w&&f&&(w=parseFloat(f.value)||0);var z=w>0?w:T;if(!(z<=0)){var B="";window.dataLayer&&window.dataLayer[0]&&(B=window.dataLayer[0].sku||"");var k="",L="";window.dataLayer&&window.dataLayer[0]&&(k=window.dataLayer[0].category||"",L=window.dataLayer[0].category2||"");for(var X=document.querySelector("#prod-deposito"),N=X?X.value==="1":!0,F=[],Y=O.querySelectorAll(".gallery-main img, #block-imagem img"),nn=0;nn<Y.length;nn++){var en=Y[nn].getAttribute("src")||Y[nn].getAttribute("data-src")||"";en&&en.indexOf("http")===0&&F.indexOf(en)===-1&&F.push(en)}if(F.length===0){var on=document.querySelector('meta[property="og:image"]');on&&on.content&&F.push(on.content)}var kn=document.querySelector('meta[name="description"]'),gn=kn?kn.content.trim():"";if(!gn){var Qn=document.querySelector(".descricao-produto .accordion-content p");Qn&&(gn=Qn.textContent.trim().substring(0,500))}for(var mn=0,Fn=0,Yn=document.querySelectorAll("script:not([src])"),Tn=0;Tn<Yn.length;Tn++){var Vn=Yn[Tn].textContent;if(!(Vn.indexOf("Zord.avaliacoes")===-1&&Vn.indexOf("produtoAvaliacoes")===-1)){var In=Vn.match(/produtoAvaliacoes\s*:\s*(\d+)/),Mn=Vn.match(/\bnota\s*:\s*(?:Number\()?([\d.]+)/);In&&(mn=parseInt(In[1],10)),Mn&&(Fn=parseFloat(Mn[1]))}}var xn={"@context":"https://schema.org","@type":"Product",name:I,url:i,image:F,description:gn,sku:B,brand:{"@type":"Brand",name:u||"Madeira Mania"},offers:{"@type":"Offer",url:i,price:z.toFixed(2),priceCurrency:"BRL",availability:N?"https://schema.org/InStock":"https://schema.org/OutOfStock",itemCondition:"https://schema.org/NewCondition",seller:{"@type":"Organization",name:"Madeira Mania"},hasMerchantReturnPolicy:{"@type":"MerchantReturnPolicy",applicableCountry:"BR",returnPolicyCategory:"https://schema.org/MerchantReturnFiniteReturnWindow",merchantReturnDays:7,returnMethod:"https://schema.org/ReturnByMail"},shippingDetails:{"@type":"OfferShippingDetails",shippingDestination:{"@type":"DefinedRegion",addressCountry:"BR"},deliveryTime:{"@type":"ShippingDeliveryTime",handlingTime:{"@type":"QuantitativeValue",minValue:1,maxValue:3,unitCode:"DAY"},transitTime:{"@type":"QuantitativeValue",minValue:5,maxValue:20,unitCode:"DAY"}}}}};T>0&&(xn.offers.priceSpecification=[{"@type":"UnitPriceSpecification",price:w>0?w.toFixed(2):z.toFixed(2),priceCurrency:"BRL",name:"PIX"},{"@type":"UnitPriceSpecification",price:(T/12).toFixed(2),priceCurrency:"BRL",name:"12x sem juros",referenceQuantity:{"@type":"QuantitativeValue",value:12,unitCode:"MON"}}]),mn>0&&Fn>0&&(xn.aggregateRating={"@type":"AggregateRating",ratingValue:Fn.toFixed(1),bestRating:"5",worstRating:"1",reviewCount:String(mn)}),k&&(xn.category=k+(L?" > "+L:""));var hn=document.createElement("script");hn.type="application/ld+json",hn.id="mm-product-schema",hn.textContent=JSON.stringify(xn),document.head.appendChild(hn),wt&&wt.parentNode&&wt.parentNode.removeChild(wt)}}}})();var kt=document.currentScript;(function x(){x._retries=(x._retries||0)+1;var O=document.querySelector("#produto-react-app"),j=O?O.querySelector("h1"):null;if(!j){x._retries<30&&setTimeout(x,500);return}if(!document.getElementById("mm-breadcrumb-schema")){var I=[],v=1;I.push({"@type":"ListItem",position:v++,name:"Home",item:"https://www.madeiramania.com.br"});var i=document.querySelectorAll('.breadcrumb a, nav[aria-label*="breadcrumb" i] a, .migalha a, .breadcrumb-item a');if(i.length>0)for(var l=0;l<i.length;l++){var u=i[l],g=u.textContent.trim(),f=u.href;!g||g.toLowerCase()==="home"||g.toLowerCase()==="início"||!f||f==="#"||I.push({"@type":"ListItem",position:v++,name:g,item:f})}else if(window.dataLayer&&window.dataLayer[0]){var C=window.dataLayer[0].category||"",w=window.dataLayer[0].category2||"";C&&I.push({"@type":"ListItem",position:v++,name:C,item:"https://www.madeiramania.com.br/"+C.toLowerCase().replace(/\s+/g,"-").replace(/[àáâã]/g,"a").replace(/[éêë]/g,"e").replace(/[íî]/g,"i").replace(/[óôõ]/g,"o").replace(/[úû]/g,"u").replace(/ç/g,"c")}),w&&w!==C&&I.push({"@type":"ListItem",position:v++,name:w,item:"https://www.madeiramania.com.br/"+w.toLowerCase().replace(/\s+/g,"-").replace(/[àáâã]/g,"a").replace(/[éêë]/g,"e").replace(/[íî]/g,"i").replace(/[óôõ]/g,"o").replace(/[úû]/g,"u").replace(/ç/g,"c")})}if(I.push({"@type":"ListItem",position:v,name:j.textContent.trim()}),!(I.length<2)){var T={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:I},z=document.createElement("script");z.type="application/ld+json",z.id="mm-breadcrumb-schema",z.textContent=JSON.stringify(T),document.head.appendChild(z),kt&&kt.parentNode&&kt.parentNode.removeChild(kt)}}})();var St=document.currentScript;(function x(){x._retries=(x._retries||0)+1;var O=document.querySelector(".descricao-produto");if(!O){x._retries<30&&setTimeout(x,500);return}if(!document.getElementById("mm-faq-section")){var j=[{q:"Como funciona a entrega de móveis?",a:"Enviamos para todo o Brasil por transportadora especializada em móveis. O prazo varia de 5 a 20 dias úteis dependendo da sua região. Você pode calcular o frete e prazo exato informando seu CEP na página do produto, acima do botão de compra."},{q:"O móvel vem montado ou precisa montar?",a:"A maioria dos móveis é enviada desmontada para garantir segurança no transporte. Cada produto inclui manual de montagem com instruções passo a passo e todas as ferragens necessárias. Produtos de madeira maciça geralmente exigem apenas encaixe simples de pés ou portas."},{q:"Vocês entregam em apartamento e zona rural?",a:"Sim, entregamos em apartamentos e áreas urbanas em todo o Brasil. Para zonas rurais, a disponibilidade depende da região — consulte informando seu CEP. A entrega é realizada até a portaria ou térreo do edifício."},{q:"E se o produto chegar com defeito?",a:"Você tem 7 dias para solicitar troca ou devolução a partir do recebimento, conforme o Código de Defesa do Consumidor (Art. 49). Basta entrar em contato pelo nosso WhatsApp com fotos do defeito. Todos os produtos possuem garantia de 12 meses contra defeitos de fabricação."},{q:"Quais as formas de pagamento?",a:"Aceitamos PIX com 7% de desconto (processado na hora), cartão de crédito em até 12x sem juros (Visa, Mastercard, Elo, American Express) e boleto bancário. O pagamento via PIX agiliza o despacho do seu pedido."},{q:"O preço de vocês é realmente menor que nos marketplaces?",a:"Sim. Como vendemos direto ao consumidor, sem comissões de marketplace, nossos preços são consistentemente 10% a 25% menores que MadeiraMadeira, Mercado Livre e outros. Compare o mesmo produto pelo código SKU do fabricante e confira a diferença."},{q:"Como funciona a garantia?",a:"Todos os produtos possuem garantia de 12 meses contra defeitos de fabricação, além do direito de arrependimento de 7 dias garantido pelo CDC. Móveis de madeira maciça, com os cuidados adequados, possuem durabilidade superior a 30 anos."}];if(!document.getElementById("mm-faq-styles")){var I=document.createElement("style");I.id="mm-faq-styles",I.textContent=["#mm-faq-section button:focus-visible { outline: 2px solid #4b664a; outline-offset: 2px; border-radius: 4px; }","#mm-faq-section button:active { opacity: 0.7; }","@media (prefers-reduced-motion: reduce) { #mm-faq-section * { transition: none !important; } }"].join(`
`),document.head.appendChild(I)}var v=document.createElement("div");v.id="mm-faq-section",v.style.cssText=["margin: 24px 0","padding: 0 8px"].join(";");var i=document.createElement("h2");i.style.cssText=["font-size: 18px","font-weight: 700","color: #1a1a1a","margin-bottom: 16px","padding-bottom: 8px","border-bottom: 2px solid #4b664a"].join(";"),i.textContent="Perguntas Frequentes",v.appendChild(i);var l=document.createElement("div");l.style.cssText=["display: flex","flex-direction: column","gap: 0"].join(";"),j.forEach(function(w,T){var z=document.createElement("div");z.style.cssText="border-bottom: 1px solid #e8ece8;";var B=document.createElement("button");B.setAttribute("aria-expanded","false"),B.setAttribute("aria-controls","mm-faq-answer-"+T),B.style.cssText=["display: flex","justify-content: space-between","align-items: center","width: 100%","padding: 16px 0","background: none","border: none","cursor: pointer","text-align: left","font-size: 15px","font-weight: 600","color: #1a1a1a","line-height: 1.4","font-family: inherit","-webkit-tap-highlight-color: transparent"].join(";");var k=document.createElement("span");k.textContent=w.q,k.style.cssText="flex: 1; padding-right: 12px;";var L=document.createElement("span");L.textContent="+",L.style.cssText=["font-size: 20px","font-weight: 300","color: #4b664a","flex-shrink: 0","transition: transform 0.2s ease","width: 24px","text-align: center"].join(";"),B.appendChild(k),B.appendChild(L);var X=document.createElement("div");X.id="mm-faq-answer-"+T,X.setAttribute("role","region"),X.setAttribute("aria-labelledby","mm-faq-q-"+T),B.id="mm-faq-q-"+T,X.style.cssText=["max-height: 0","overflow: hidden","transition: max-height 0.3s ease, padding 0.3s ease","font-size: 14px","line-height: 1.6","color: #444"].join(";");var N=document.createElement("div");N.style.cssText="padding: 0 0 14px 0;",N.textContent=w.a,X.appendChild(N),B.addEventListener("click",function(){var F=B.getAttribute("aria-expanded")==="true";F?(X.style.maxHeight="0px",L.textContent="+",B.setAttribute("aria-expanded","false")):(X.style.maxHeight=X.scrollHeight+"px",L.textContent="−",B.setAttribute("aria-expanded","true"))}),B.addEventListener("touchstart",function(){B.style.opacity="0.7"},{passive:!0}),B.addEventListener("touchend",function(){B.style.opacity="1"},{passive:!0}),z.appendChild(B),z.appendChild(X),l.appendChild(z)}),v.appendChild(l);var u=document.querySelector(".produtos-relacionados"),g=document.querySelector(".container-avaliacoes");if(u&&u.nextSibling?u.parentNode.insertBefore(v,u.nextSibling):g?g.parentNode.insertBefore(v,g):O.parentNode.appendChild(v),!document.getElementById("mm-faq-schema")){var f={"@context":"https://schema.org","@type":"FAQPage",mainEntity:j.map(function(w){return{"@type":"Question",name:w.q,acceptedAnswer:{"@type":"Answer",text:w.a}}})},C=document.createElement("script");C.type="application/ld+json",C.id="mm-faq-schema",C.textContent=JSON.stringify(f),document.head.appendChild(C)}St&&St.parentNode&&St.parentNode.removeChild(St)}})(),(function x(){x._retries=(x._retries||0)+1;var O=document.querySelector("#produto-react-app");if(!O||!O.querySelector("h1")){x._retries<30&&setTimeout(x,500);return}if(!document.querySelector('meta[property="og:title"]')){var j=O.querySelector("h1"),I=j?j.textContent.trim():document.title,v=document.querySelector('meta[name="description"]'),i=v?v.content.trim():"";if(!i){var l=document.querySelector(".descricao-produto .accordion-content p");l&&(i=l.textContent.trim().substring(0,200))}i||(i=I+" - Compre online na Madeira Mania com até 12x sem juros ou 7% de desconto no PIX.");var u=document.querySelector('link[rel="canonical"]'),g=u?u.href:location.href.split("?")[0],f="",C=O.querySelector(".gallery-main img, #block-imagem img");if(C&&(f=C.getAttribute("src")||C.getAttribute("data-src")||""),!f){var w=document.querySelector('meta[property="og:image"]');w&&(f=w.content)}var T=O.querySelector(".form-pag-link"),z=T&&parseFloat(T.getAttribute("data-valor-pix"))||0;if(z>0){var B="R$ "+z.toFixed(2).replace(".",",");i.indexOf("R$")===-1&&(i=i.replace(/\.$/,"")+" | A partir de "+B+" no PIX.")}i.length>200&&(i=i.substring(0,197)+"...");var k=[{property:"og:type",content:"product"},{property:"og:title",content:I},{property:"og:description",content:i},{property:"og:url",content:g},{property:"og:site_name",content:"Madeira Mania"},{property:"og:locale",content:"pt_BR"}];f&&(k.push({property:"og:image",content:f}),k.push({property:"og:image:width",content:"600"}),k.push({property:"og:image:height",content:"600"})),k.push({name:"twitter:card",content:"summary_large_image"}),k.push({name:"twitter:title",content:I}),k.push({name:"twitter:description",content:i}),f&&k.push({name:"twitter:image",content:f}),k.forEach(function(L){var X=document.createElement("meta");L.property&&X.setAttribute("property",L.property),L.name&&X.setAttribute("name",L.name),X.setAttribute("content",L.content),document.head.appendChild(X)})}})(),(function(x){"use strict";if(!document.getElementById("produto-react-app")&&!document.getElementById("pagina-produto-react-app"))return;const O="3.0.0";window.innerWidth>=1500&&x(document).ready(function(){function v(){x(".gallery-main .swiper-slide img").each(function(){var i=this,l=x(this).closest(".swiper-slide"),u=l.closest(".swiper");function g(){var f=i.naturalWidth,C=i.naturalHeight;f&&C&&f===C&&u.css({"max-width":f+"px",overflow:"hidden"})}i.complete?g():i.addEventListener("load",g)})}v()}),window._variacoesMagazordCarregado&&(console.log(`%c⚠️ Variações Magazord v${O} - Substituindo instância anterior`,"color: #ff9800; font-weight: bold"),window.GerenciadorVariacoesPillsMagazord&&x(".product-variations-pills-container").remove()),window._variacoesMagazordCarregado=O,console.log(`%c🚀 Variações Magazord v${O} (dataProduct) - Inicializando...`,"color: #2196f3; font-weight: bold");const j={formatoNome:{separador:" - ",separadorTipoValor:": ",exibirNomeCompleto:!1,primeiraParte:"nome_base"},labels:{ALTURA:"Altura",LARGURA:"Largura",ILUMINACAO:"Iluminação",ILUMINAÇÃO:"Iluminação",PROFUNDIDADE:"Profundidade",COR:"Cor",ACABAMENTO:"Acabamento",TAMANHO:"Tamanho",PORTAS:"Número de Portas",ESPELHO:"Espelho",GAVETAS:"Gavetas",MODELO:"Modelo",MATERIAL:"Material",LUGARES:"Lugares",FORMATO:"Formato"},variacoesComImagem:["COR","ACABAMENTO"],ignorarPalavras:[],selectors:{areaProdutosSugeridos:".sugestoes-cores",areaVariacoes:".derivacoes-produto .area-derivacoes",containerProduto:".info-produto, .box-info-produto, main",subtituloProduto:".informacoes-compra-produto .text-secondary-700.text-xs"},retry:{maxTentativas:10,intervaloMs:500,usarMutationObserver:!0},debug:!0,performance:{useRequestAnimationFrame:!0,debounceDelay:150}};class I{constructor(){this.variacoes={},this.produtoAtualId=null,this.produtos=[],this.tentativasDeCarregamento=0,this.observer=null,this.inicializado=!1}init(){this.log("🎯 Gerenciador de Variações Magazord v3 (dataProduct)","info"),this.log("🎨 Swatches de imagem para cores + Pills para outras variações","info"),this.esperarDOMPronto()}esperarDOMPronto(){if(typeof jQuery>"u"){setTimeout(()=>this.esperarDOMPronto(),100);return}x(document).ready(()=>{this.log("✅ DOM pronto! Aguardando dataProduct...","success"),this.esperarDataProduct()})}esperarDataProduct(){typeof dataProduct<"u"&&dataProduct.listaProdutosSugeridos?(this.log("✅ dataProduct encontrado!","success"),this.tentarCarregar()):(this.log("⏳ Aguardando dataProduct...","info"),setTimeout(()=>this.esperarDataProduct(),300))}tentarCarregar(){this.tentativasDeCarregamento++,this.log(`
🔄 Tentativa ${this.tentativasDeCarregamento}/${j.retry.maxTentativas}`,"info"),this.carregarProdutos()?(this.processarVariacoes(),this.renderizarVariacoes(),this.bindEventos(),this.inicializado=!0,this.log(`
🎉 Inicialização concluída com sucesso!`,"success"),j.retry.usarMutationObserver&&this.observarMudancasDOM()):this.tentativasDeCarregamento<j.retry.maxTentativas?setTimeout(()=>this.tentarCarregar(),j.retry.intervaloMs):this.log("❌ Número máximo de tentativas atingido.","error")}observarMudancasDOM(){this.log("ℹ️ MutationObserver desativado - dados carregados via dataProduct","info")}log(i,l="log",u=null){if(!j.debug)return;const g={info:"color: #2196f3; font-weight: bold",success:"color: #4caf50; font-weight: bold",warning:"color: #ff9800; font-weight: bold",error:"color: #f44336; font-weight: bold",log:"color: #666"};console.log(`%c${i}`,g[l]||g.log),u&&console.log(u)}carregarProdutos(){if(this.produtos=[],typeof dataProduct>"u"||!dataProduct.listaProdutosSugeridos)return this.log("❌ dataProduct ou listaProdutosSugeridos não encontrado","error"),!1;const i=dataProduct.listaProdutosSugeridos,l=dataProduct.produto,u=dataProduct.hostImagem||"";if(this.log(`📦 Encontrados ${i.length} produtos sugeridos + produto atual`,"info"),l&&l.complemento){const g=l.midia_path&&l.midia_arquivo_nome?`${u}/${l.midia_path}${l.midia_arquivo_nome}`:"",f={id:l.derivacao_id||l.produto_id,nomeCompleto:l.complemento.trim(),estoque:l.qtde_estoque,url:l.link?`/${l.link}`:"",imagem:g,imagemData:g,elemento:null,variacoes:{},nomeBase:"",nomeExibicao:"",isAtual:!0};this.produtoAtualId=f.id,this.extrairVariacoesDoNome(f),this.produtos.push(f),this.log(`   ✓ Produto atual: "${f.nomeCompleto}"`,"success")}return i.forEach((g,f)=>{const C=g.complemento||g.nome||"";if(!C)return;const w=g.derivacao_id||g.produto_id;if(w===this.produtoAtualId){this.log(`   ⏭️ Ignorando duplicata: "${C}"`,"info");return}const T=g.midia_path&&g.midia_arquivo_nome?`${u}/${g.midia_path}${g.midia_arquivo_nome}`:"",z={id:w||f,nomeCompleto:C.trim(),estoque:g.qtde_estoque,url:g.link?`/${g.link}`:"",imagem:T,imagemData:T,elemento:null,variacoes:{},nomeBase:"",nomeExibicao:"",isAtual:!1};this.extrairVariacoesDoNome(z),this.produtos.push(z),this.log(`   ✓ Sugerido: "${z.nomeCompleto}"`,"log")}),this.produtos.length===0?!1:(this.log("✅ Produtos carregados e processados:","success",this.produtos),!0)}normalizarSeparadores(i){const l=["–","—","−","‐","‑","⁃"];let u=i;return l.forEach(g=>{const f=new RegExp(`\\s${g}\\s`,"g");u=u.replace(f," - ")}),u}extrairVariacoesDoNome(i){const u=this.normalizarSeparadores(i.nomeCompleto).split(j.formatoNome.separador);this.log(`
📝 Processando: "${i.nomeCompleto}"`,"log"),j.formatoNome.primeiraParte==="nome_base"&&(i.nomeBase=u[0].trim(),u.shift()),u.forEach(g=>{const f=g.trim();if(f&&f.includes(j.formatoNome.separadorTipoValor)){const[C,...w]=f.split(j.formatoNome.separadorTipoValor),T=w.join(j.formatoNome.separadorTipoValor).trim(),z=this.normalizarTipo(C.trim());if(j.ignorarPalavras.includes(z))return;i.variacoes[z]=T,this.log(`   ✓ ${z}: ${T}`,"success")}}),i.nomeExibicao=j.formatoNome.exibirNomeCompleto?i.nomeCompleto:i.nomeBase||i.nomeCompleto,Object.keys(i.variacoes).length===0&&(i.variacoes.MODELO=i.nomeCompleto,i.nomeExibicao=i.nomeCompleto)}normalizarTipo(i){return i.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim()}processarVariacoes(){this.log(`
🔄 Processando variações...`,"info");const i=new Set;this.produtos.forEach(l=>{Object.keys(l.variacoes).forEach(u=>i.add(u))}),i.forEach(l=>{const u=new Set,g={};this.produtos.forEach(C=>{const w=C.variacoes[l];w&&(u.add(w),g[w]||(g[w]=[]),g[w].push(C))});const f=Array.from(u).sort();this.variacoes[l]={label:j.labels[l]||l,valores:f,produtosPorValor:g,usarImagem:j.variacoesComImagem.includes(l)},this.log(`   📊 ${l}: ${f.length} valor(es) único(s) → [${f.join(", ")}]`,f.length>1?"success":"warning")}),this.log("✅ Variações processadas:","success",this.variacoes)}renderizarVariacoes(){this.log(`
🎨 Renderizando variações...`,"info");let i=x(j.selectors.areaVariacoes);if(i.length===0&&(this.criarAreaVariacoes(),i=x(j.selectors.areaVariacoes)),Object.keys(this.variacoes).length===0)return;const l=x("<div>",{class:"product-variations-pills-container"});let u=0;if(Object.keys(this.variacoes).forEach(g=>{const f=this.variacoes[g];if(f.valores.length<=1){this.log(`⏭️ Ignorando "${g}" - apenas ${f.valores.length} valor(es)`,"info");return}if(f.usarImagem){const C=this.criarGrupoSwatches(g,f);l.append(C),u++}}),Object.keys(this.variacoes).forEach(g=>{const f=this.variacoes[g];if(!(f.valores.length<=1)&&!f.usarImagem){const C=this.criarGrupoPills(g,f);l.append(C),u++}}),u===0){this.log("ℹ️ Nenhuma variação com múltiplas opções - ocultando área","info"),i.closest(".derivacoes-produto").hide(),x(j.selectors.subtituloProduto).hide();return}j.performance.useRequestAnimationFrame&&window.requestAnimationFrame?requestAnimationFrame(()=>{i.empty().append(l),this.log(`✅ ${u} variação(ões) renderizada(s)!`,"success"),this.atualizarNomeProduto()}):(i.empty().append(l),this.log(`✅ ${u} variação(ões) renderizada(s)!`,"success"),this.atualizarNomeProduto())}criarAreaVariacoes(){const i=x(j.selectors.areaProdutosSugeridos);i.length>0?i.before('<div class="derivacoes-produto"><div class="area-derivacoes"></div></div>'):x("body").prepend('<div class="derivacoes-produto"><div class="area-derivacoes"></div></div>')}criarGrupoSwatches(i,l){const u=this.obterValorAtualParaTipo(i),g=x("<div>",{class:"variation-pill-group variation-pill-group--swatches","data-variacao-tipo":i,role:"group","aria-labelledby":`pill-label-${i.toLowerCase()}`}),f=x("<div>",{class:"variation-pill-label",id:`pill-label-${i.toLowerCase()}`});f.append(x("<span>").text(l.label+":")),f.append(x("<span>",{class:"variation-pill-label-value","data-label-value":i}).text(u||""));const C=x("<div>",{class:"variation-swatches-container",role:"radiogroup","aria-labelledby":`pill-label-${i.toLowerCase()}`});return l.valores.forEach((w,T)=>{const z=l.produtosPorValor[w],B=z.some(on=>on.estoque===void 0||on.estoque>0),k=w===u,L=`pill-${i.toLowerCase()}-${this.sanitizeId(w)}`,X=this.encontrarMelhorProdutoParaSwatch(i,w,z);let N=null;X&&(N=X.imagemData||X.imagem);const F=x("<input>",{type:"radio",class:"variation-pill-input",id:L,name:`variation-${i}`,value:w,"data-variacao-tipo":i,"data-produtos":JSON.stringify(z.map(on=>({id:on.id,url:on.url}))),checked:k,disabled:!B,"aria-label":`${l.label}: ${w}${B?"":" (Indisponível)"}`}),Y=x("<label>",{class:"variation-color-swatch-wrapper",for:L,"data-tooltip":w}),nn=x("<div>",{class:"variation-color-swatch","data-valor":w,tabindex:k?0:-1});N?nn.append(x("<img>",{src:N,alt:w,class:"variation-color-swatch-image",loading:"lazy"})):nn.css({"background-color":"#E5E7EB",display:"flex","align-items":"center","justify-content":"center","font-size":"14px",color:"#6B7280"}).text(w.charAt(0).toUpperCase());const en=x("<span>",{class:"variation-color-swatch-name",text:w,title:w});Y.append(nn).append(en),C.append(F).append(Y)}),g.append(f).append(C),g}criarGrupoPills(i,l){const u=this.obterValorAtualParaTipo(i),g=x("<div>",{class:"variation-pill-group variation-pill-group--pills","data-variacao-tipo":i,role:"group","aria-labelledby":`pill-label-${i.toLowerCase()}`}),f=x("<div>",{class:"variation-pill-label",id:`pill-label-${i.toLowerCase()}`});f.append(x("<span>").text(l.label+":")),f.append(x("<span>",{class:"variation-pill-label-value","data-label-value":i}).text(u||""));const C=x("<div>",{class:"variation-pills-container",role:"radiogroup","aria-labelledby":`pill-label-${i.toLowerCase()}`});return l.valores.forEach((w,T)=>{const z=l.produtosPorValor[w],B=z.some(Y=>Y.estoque===void 0||Y.estoque>0),k=w===u,L=`pill-${i.toLowerCase()}-${this.sanitizeId(w)}`,X=x("<input>",{type:"radio",class:"variation-pill-input",id:L,name:`variation-${i}`,value:w,"data-variacao-tipo":i,"data-produtos":JSON.stringify(z.map(Y=>({id:Y.id,url:Y.url}))),checked:k,disabled:!B,"aria-label":`${l.label}: ${w}${B?"":" (Indisponível)"}`});let N=w;B||(N+=' <span class="variation-pill-badge">Indisponível</span>');const F=x("<label>",{class:"variation-pill",for:L,html:N,"data-valor":w,tabindex:k?0:-1});C.append(X).append(F)}),g.append(f).append(C),g}sanitizeId(i){return i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}encontrarMelhorProdutoParaSwatch(i,l,u){const g=this.produtos.find(T=>T.isAtual||T.id===this.produtoAtualId);if(!g||u.length===0)return u[0]||null;if(u.length===1)return u[0];const f=g.variacoes;let C=null,w=-1;return u.forEach(T=>{let z=0;Object.keys(f).forEach(B=>{B!==i&&T.variacoes[B]===f[B]&&z++}),(T.imagemData||T.imagem)&&(z+=.5),z>w&&(w=z,C=T)}),this.log(`   🎯 Melhor produto para ${i}="${l}": score=${w}`,"log"),C||u[0]}obterValorAtualParaTipo(i){const l=this.produtos.find(u=>u.isAtual||u.id===this.produtoAtualId);return l?l.variacoes[i]:null}atualizarNomeProduto(){const i=this.produtos.find(u=>u.isAtual||u.id===this.produtoAtualId);if(!i)return;["h1.nome-produto",".product-name h1",".info-produto h1",'h1[itemprop="name"]',".box-info-produto h1"].forEach(u=>{const g=x(u);g.length>0&&g.text(i.nomeExibicao)})}bindEventos(){this.log(`
🔗 Vinculando eventos...`,"info"),x(document).on("change",".variation-pill-input",i=>{this.aoMudarVariacao(i)}),x(document).on("keydown",".variation-pills-container, .variation-swatches-container",i=>{this.handleKeyboardNavigation(i)}),x(document).on("click",".variation-pill, .variation-color-swatch-wrapper",function(){const i=x(this).is("label")?x("#"+x(this).attr("for")):x(this).closest("label").prev(".variation-pill-input");i.length&&!i.prop("disabled")&&x(this).closest(".variation-pill-group").addClass("is-loading")}),this.log("✅ Eventos vinculados","success")}handleKeyboardNavigation(i){const u=x(i.currentTarget).find(".variation-pill-input:not(:disabled)"),g=x(document.activeElement);if(!g.hasClass("variation-pill-input"))return;const f=u.index(g);let C=f;switch(i.key){case"ArrowRight":case"ArrowDown":i.preventDefault(),C=(f+1)%u.length;break;case"ArrowLeft":case"ArrowUp":i.preventDefault(),C=f-1<0?u.length-1:f-1;break;case"Home":i.preventDefault(),C=0;break;case"End":i.preventDefault(),C=u.length-1;break;default:return}u.eq(C).focus().prop("checked",!0).trigger("change")}aoMudarVariacao(i){const l=x(i.target),u=l.data("variacao-tipo"),g=l.val();this.log(`
🔄 Variação selecionada: ${u} = ${g}`,"info"),x(`.variation-pill-label-value[data-label-value="${u}"]`).text(g);const f={};x(".variation-pill-input:checked").each(function(){const w=x(this).data("variacao-tipo"),T=x(this).val();T&&(f[w]=T)}),this.log("📋 Seleção atual:","info",f);const C=this.encontrarProdutoPorVariacoes(f);if(C)this.log("✅ Produto encontrado!","success",C),this.navegarParaProduto(C);else{this.log("⚠️ Produto exato não encontrado, buscando melhor correspondência...","warning");const w=this.encontrarMelhorCorrespondencia(f);w?(this.log("✅ Melhor correspondência encontrada!","success",w),this.navegarParaProduto(w)):(this.log("❌ Nenhum produto correspondente encontrado","error"),x(".variation-pill-group").removeClass("is-loading"))}}encontrarProdutoPorVariacoes(i){return this.produtos.find(l=>Object.keys(i).every(u=>l.variacoes[u]===i[u]))}encontrarMelhorCorrespondencia(i){let l=null,u=0;return this.produtos.forEach(g=>{let f=0;Object.keys(i).forEach(C=>{g.variacoes[C]===i[C]&&f++}),f>u&&(u=f,l=g)}),u>0?l:null}navegarParaProduto(i){this.log(`
🚀 Navegando para: ${i.url}`,"info"),i.url?window.location.href=i.url:(this.log("❌ URL não encontrada para navegação","error"),x(".variation-pill-group").removeClass("is-loading"))}}setTimeout(function(){x(".product-variations-pills-container").remove(),x(".derivacoes-produto").remove();const v=new I;v.init(),window.GerenciadorVariacoesPillsMagazord=v},100)})(typeof jQuery<"u"?jQuery:window.jQuery||window.$),(function(){"use strict";function x(){if(!(typeof jQuery>"u"&&typeof $>"u")){var o=typeof jQuery<"u"?jQuery:$;o(document).ajaxComplete(function(p,c,y){y.url&&y.url.indexOf("checkout/cart")!==-1&&setTimeout(function(){window.dispatchEvent(new CustomEvent("reactItemAddedToCart"))},100)})}}function O(){var o=document.querySelector("#cart-preview-area .border-t.border-solid");if(!(!o||o.querySelector(".installment-total"))){var p=0,c=document.querySelectorAll("#cart-preview-area .cart-item");if(c.forEach(function(D){var R=parseFloat(D.getAttribute("data-item-price"))||0,Z=parseInt(D.getAttribute("data-item-quantity"))||1;p+=R*Z}),!(p<=0)){var y=(p/12).toFixed(2).replace(".",","),M=document.createElement("div");M.className="installment-total",M.textContent="ou 12x de R$ "+y;var A=o.querySelector(".valor-pix");A&&A.parentNode&&A.parentNode.insertBefore(M,A.nextSibling)}}}var j='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/></svg>',I='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',v='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>';function i(){O();var o=document.querySelectorAll("#cart-preview-area .cart-item, .content-cart .cart-item");o.forEach(function(p){if(!p.querySelector(".qty-btn-minus")){var c=p.querySelector(".qtd-value");if(c){var y=p.querySelector(".cart-remove-item"),M=y?y.getAttribute("data-id"):null;if(M){var A=p.querySelector(".prod-remove");A&&!c.contains(y)&&(c.appendChild(y),A.style.display="none");var D=c.parentElement,R=null;if(D)for(var Z=0;Z<D.children.length;Z++){var K=D.children[Z];if(K!==c&&K.classList&&K.classList.contains("valor")){R=K;break}}R&&!c.contains(R)&&c.appendChild(R);var n=parseInt(p.getAttribute("data-item-quantity"));if(!n||isNaN(n)){var e=c.textContent.match(/(\d+)/);n=e?parseInt(e[1]):1}var r=document.createElement("button");r.className="qty-btn-minus",r.type="button",r.setAttribute("aria-label","Diminuir quantidade"),r.innerHTML=j,r.addEventListener("click",function(s){s.preventDefault(),s.stopPropagation();var d=parseInt(m.textContent)||1;if(d<=1){var h=p.querySelector(".cart-remove-item");h&&h.click();return}Jn(p,M,-1,m,r,t)});var m=document.createElement("span");m.className="qty-display",m.textContent=n;var t=document.createElement("button");t.className="qty-btn-plus",t.type="button",t.setAttribute("aria-label","Aumentar quantidade"),t.innerHTML=I,t.addEventListener("click",function(s){s.preventDefault(),s.stopPropagation(),Jn(p,M,1,m,r,t)});var a=document.createElement("div");a.className="mm-qty-wrap",a.appendChild(r),a.appendChild(m),a.appendChild(t),c.insertBefore(a,c.firstChild),y&&(y.innerHTML=v,y.setAttribute("aria-label","Remover produto"))}}}})}function l(){document.addEventListener("click",function(o){var p=o.target.closest(".cart-remove-item");if(!(!p||!p.closest("#cart-preview-area"))){o.preventDefault(),o.stopPropagation(),o.stopImmediatePropagation();var c=p.getAttribute("data-id");if(c){var y=p.closest(".cart-item"),M=y&&y.querySelector(".prod-nome")?.textContent?.trim()||"este produto",A=M.length>50?M.substring(0,50)+"…":M,D=document.getElementById("mm-confirm-overlay");D&&D.remove();var R=document.createElement("div");R.id="mm-confirm-overlay",R.className="mm-confirm-overlay",R.innerHTML='<div class="mm-confirm-card"><p class="mm-confirm-title">Remover produto?</p><p class="mm-confirm-desc">'+A.replace(/&/g,"&amp;").replace(/</g,"&lt;")+'</p><div class="mm-confirm-actions"><button class="mm-confirm-btn mm-confirm-btn-cancel">Manter</button><button class="mm-confirm-btn mm-confirm-btn-delete">Remover</button></div></div>',document.body.appendChild(R),R.querySelector(".mm-confirm-btn-cancel").addEventListener("click",function(){R.remove()}),R.querySelector(".mm-confirm-btn-delete").addEventListener("click",function(){R.remove(),window.__mmDeleteItem&&y?window.__mmDeleteItem(y,c):typeof Zord<"u"&&Zord.checkout&&Zord.checkout.deleteItem(parseInt(c))}),R.addEventListener("click",function(Z){Z.target===R&&R.remove()})}}},!0)}function u(){document.addEventListener("click",function(o){var p=o.target.closest(".finalizar-compra");p&&p.closest("#cart-preview-area")&&(o.preventDefault(),o.stopPropagation(),window.location.href="/checkout/identify")},!0)}function g(o,p){var c="cep=&cupom-desconto=&nenhumCreditoSelecionado=true&id="+encodeURIComponent(String(p))+"&area=main-cart";return fetch("/checkout/cart?operation="+encodeURIComponent(o),{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"text/html,application/json,*/*","X-Requested-With":"XMLHttpRequest"},body:c}).then(function(y){if(!y.ok)throw new Error("HTTP "+y.status);return y.text()})}var f=1500,C=2e3,w="mm_cep",T="mm_cart_snapshot",z=1800*1e3;function B(){try{var o=localStorage.getItem(w)||"",p=o.replace(/\D/g,"");if(p.length===8)return p}catch{}return null}function k(o){return!o||o.length!==8?"":o.slice(0,5)+"-"+o.slice(5)}function L(o){if(!o||o.length!==8)return C;var p=parseInt(o.slice(0,2),10);return isNaN(p)?C:p>=1&&p<=39||p>=80&&p<=99?f:C}function X(){try{var o=localStorage.getItem(T);if(!o)return null;var p=JSON.parse(o);return!p||!p.ts||Date.now()-p.ts>z?null:p}catch{return null}}function N(o){var p=[];return o.forEach(function(c){var y=(c.querySelector(".prod-nome a, .prod-nome")||{}).textContent||"",M=c.querySelector(".qty-display"),A=M?parseInt(M.textContent):parseInt(c.getAttribute("data-item-quantity"))||1;p.push(y.trim().slice(0,30)+"x"+A)}),p.sort().join("|")}function F(o){if(!o||!Array.isArray(o.items))return"";var p=o.items.map(function(c){return(c.name||"").trim().slice(0,30)+"x"+(c.quantity||1)});return p.sort().join("|")}var Y='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg>',nn='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18M6 6l12 12"/></svg>',en=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];function on(o){if(!o)return null;var p=String(o).match(/\d+/g);return!p||!p.length?null:Math.max.apply(null,p.map(Number))}function kn(o,p){for(var c=new Date(o.getTime()),y=0;y<p;){c.setDate(c.getDate()+1);var M=c.getDay();M!==0&&M!==6&&y++}return c}function gn(o){var p=new Date,c="dia "+o.getDate()+" de "+en[o.getMonth()];return o.getFullYear()!==p.getFullYear()&&(c+=" de "+o.getFullYear()),c}function Qn(o){var p=on(o);if(!p||p<1)return null;var c=kn(new Date,p);return"Receba até "+gn(c)}var mn={},Fn=4e3,Yn={};function Tn(o,p){if(!o||o.length!==8)return Promise.resolve(null);if(mn[o])return mn[o];if(!p){var c=Yn[o]||0;if(Date.now()-c<Fn)return Promise.resolve(null)}var y="cep="+encodeURIComponent(o.slice(0,5)+"-"+o.slice(5))+"&cupom-desconto=&nenhumCreditoSelecionado=true&area=main-cart",M=fetch("/checkout/cart?operation=atualizaValoresCarrinho",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"text/html,application/json,*/*","X-Requested-With":"XMLHttpRequest"},body:y}).then(function(A){if(!A.ok)throw new Error("HTTP "+A.status);return A.text()}).then(function(A){return Yn[o]=Date.now(),Vn(A)}).catch(function(){return null}).then(function(A){return delete mn[o],A});return mn[o]=M,M}function Vn(o){try{var p=new DOMParser().parseFromString(o,"text/html"),c=p.querySelector("#resumo-compra .frete-calculado")||p.querySelector(".frete-calculado");if(!c)return null;var y="",M=c.querySelector(".frete-location .city");M&&(y=M.textContent.trim());var A=null,D="",R="",Z=c.querySelector(".info-frete-selec");if(Z){var K=Z.querySelector(".dias-entrega"),n=Z.querySelector(".info-title span, .info-title");K&&(D=(K.textContent||"").trim()),n&&(R=(n.textContent||"").trim())}var e=c.querySelector(".line.valor-frete .value, .value.valor-frete")||c.querySelector(".valor-compra-frete .value");if(e){var r=(e.textContent||"").trim();if(/gr[áa]tis/i.test(r))A=0;else{var m=r.match(/[\d.,]+/);if(m){var t=parseFloat(m[0].replace(/\./g,"").replace(",","."));isNaN(t)||(A=t)}}}if(A==null){var a=c.querySelector(".servico-frete");if(a){var s=parseFloat(a.getAttribute("data-valor-frete")||"0");if(isNaN(s)||(A=s),R||(R=a.getAttribute("data-servico-frete")||""),!D){var d=a.querySelector(".dias-entrega");d&&(D=(d.textContent||"").trim())}}}if(A==null)return null;var h=null,b=p.querySelector(".total-boleto .value, .totais-valor.total-boleto .value");if(b){var q=(b.textContent||"").trim(),P=q.match(/[\d.,]+/);if(P){var H=parseFloat(P[0].replace(/\./g,"").replace(",","."));isNaN(H)||(h=H)}}return{city:y,shipping:A,shippingDeadline:D,shippingName:R,totalPix:h}}catch{return null}}function In(o,p,c){if(!(!o||!c)){st(o);try{var y=X()||{};y.ts=Date.now(),y.cepValue=p.slice(0,5)+"-"+p.slice(5),y.shipping=c.shipping,y.shippingDeadline=c.shippingDeadline,y.shippingName=c.shippingName,y.shippingCity=c.city,c.totalPix!=null&&(y.subtotalPix=c.totalPix);var M=o.querySelectorAll(".cart-item:not(.mm-removing)");y.items=Array.prototype.map.call(M,function(R){var Z=R.querySelector(".prod-nome a, .prod-nome"),K=(Z&&Z.textContent||"").trim(),n=R.querySelector(".qty-display"),e=n?parseInt(n.textContent):parseInt(R.getAttribute("data-item-quantity"))||1;return{name:K,quantity:e}}),localStorage.setItem(T,JSON.stringify(y))}catch{}var A=o.querySelectorAll(".cart-item:not(.mm-removing)"),D=0;A.forEach(function(R){var Z=R.querySelector(".valor");if(Z){var K=Bn(Z.textContent);isNaN(K)||(D+=K)}}),o.querySelector(".box-total-btn")?Xn(o):Pn(o)}}function Mn(o){var p=B();if(p){var c=X(),y=F(c),M=N(o.querySelectorAll(".cart-item:not(.mm-removing)")),A=c&&c.cepValue&&c.cepValue.replace(/\D/g,"")===p,D=c&&c.shipping!=null&&!isNaN(c.shipping);c&&y===M&&A&&D||Tn(p).then(function(R){R&&In(o,p,R)})}}function xn(o){return String(o||"").replace(/[&<>"']/g,function(p){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[p]})}function hn(o){if(!o)return null;var p=o.querySelector(".box-total-btn");if(p)return{host:p,before:p.querySelector(".total")};var c=o.querySelector(".area-finalizar-compra");if(c)return{host:c,before:c.firstElementChild};var y=o.querySelector(".finalizar-compra");if(y&&y.parentElement){var M=y.parentElement;return{host:M,before:M.firstElementChild}}return null}function tt(o){if(!o)return null;var p=o.closest(".carrinho-rapido-ctn");return p||(o.closest("#cart-preview-area")?pt():null)}function et(o,p,c,y){if(o){var M=hn(o);if(M){var A=M.host;o.classList.add("mm-ship-scope");var D=B(),R=X(),Z=N(o.querySelectorAll(".cart-item:not(.mm-removing)")),K=F(R),n=R&&K===Z,e=L(D),r=p>=e,m=Math.max(0,e-p),t=Math.max(0,Math.min(100,p/e*100)),a=A.querySelector(".mm-cart-ship");if(!a){a=document.createElement("div"),a.className="mm-cart-ship",a.setAttribute("role","group"),a.setAttribute("aria-label","Informações de frete");var s=M.before;s&&s.parentNode===A?A.insertBefore(a,s):A.insertBefore(a,A.firstChild)}if(a.classList.toggle("is-free",r),ht(a),a.dataset.mmEditing!=="1"){var d=R&&R.cepValue&&R.cepValue.replace(/\D/g,"")===D,h=D&&n&&d&&R.shippingCity,b=h?Qn(R.shippingDeadline):null,q="";if(q+='<div class="mm-cart-ship-location">',D){var P=k(D);if(h&&(P+=" · "+xn(R.shippingCity)),q+='<span class="mm-cart-ship-label">Envio para</span><div class="mm-cart-ship-location-value"><span>'+P+'</span><button class="mm-cart-ship-edit" type="button" data-mm-ship="edit">Trocar</button></div>',b){var H=xn(b);y&&c>0?H+=" · <strong>"+xn(Cn(c))+"</strong>":y&&c===0&&(H+=" · <strong>Grátis</strong>"),q+='<span class="mm-cart-ship-deadline">'+H+"</span>"}}else q+='<span class="mm-cart-ship-label">Calcule o frete</span><div class="mm-cart-ship-location-value"><span style="color:#9CA3AF;font-weight:500;">Informe seu CEP</span><button class="mm-cart-ship-edit" type="button" data-mm-ship="edit">Calcular</button></div>';q+="</div>";var _=r?"Frete grátis desbloqueado":"Faltam "+Cn(m)+" para frete grátis",G=parseFloat(o.dataset.mmShipPct||"0")||0;q+='<div class="mm-cart-ship-progress">',q+='<div class="mm-cart-ship-bar" role="progressbar" aria-valuenow="'+Math.round(p)+'" aria-valuemin="0" aria-valuemax="'+Math.round(e)+'" aria-valuetext="'+xn(_)+'" aria-label="Progresso para frete grátis"><div class="mm-cart-ship-bar-fill" style="width:'+G.toFixed(1)+'%"></div></div>',q+='<p class="mm-cart-ship-nudge'+(r?" is-free":"")+'">',r?q+=Y+"Frete grátis garantido":q+="Faltam <strong>"+xn(Cn(m))+"</strong> para frete grátis",q+="</p>",q+="</div>",a.innerHTML=q;var U=a.querySelector(".mm-cart-ship-bar-fill");U&&requestAnimationFrame(function(){U.style.width=t.toFixed(1)+"%"});var J=o.dataset.mmShipWasFree==="1";r&&!J&&G>0&&(a.classList.remove("mm-just-unlocked"),a.offsetWidth,a.classList.add("mm-just-unlocked"),setTimeout(function(){a.classList.remove("mm-just-unlocked")},1400)),o.dataset.mmShipWasFree=r?"1":"",o.dataset.mmShipPct=t.toFixed(1)}}}}var Hn='<svg class="mm-cart-ship-spinner" width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><style>.mm-sp{animation:mm-spin 1.2s linear infinite;transform-origin:center}.mm-sp circle{stroke:#4B664A;stroke-width:3;fill:none;stroke-linecap:round;stroke-dasharray:44;stroke-dashoffset:16;animation:mm-sp-dash 1.2s ease-in-out infinite}@keyframes mm-spin{to{transform:rotate(360deg)}}@keyframes mm-sp-dash{0%{stroke-dashoffset:44}50%{stroke-dashoffset:8}100%{stroke-dashoffset:44}}</style><g class="mm-sp"><circle cx="12" cy="12" r="9.5"/></g></svg>';function Kn(o){if(o){var p=o.querySelector(".mm-cart-ship-deadline");if(p)p.innerHTML="Recalculando frete "+Hn;else{var c=o.querySelector(".mm-cart-ship-location");if(c){var y=document.createElement("span");y.className="mm-cart-ship-deadline",y.innerHTML="Recalculando frete "+Hn,c.appendChild(y)}}var M=hn(o);M&&M.host.classList.add("mm-ship-loading")}}function st(o){if(o){var p=hn(o);p&&p.host.classList.remove("mm-ship-loading")}}function ht(o){!o||o.dataset.mmShipBound||(o.dataset.mmShipBound="1",o.addEventListener("click",function(p){var c=p.target.closest('[data-mm-ship="edit"]');if(c){p.preventDefault(),p.stopPropagation(),lt(o);return}var y=p.target.closest('[data-mm-ship="cancel"]');if(y){p.preventDefault(),p.stopPropagation(),at(o);return}p.target.closest(".mm-cart-ship-cep-form")&&p.stopPropagation()},!0))}function lt(o){var p=o.querySelector(".mm-cart-ship-location");if(p){o.dataset.mmEditing="1";var c=B()||"";p.innerHTML='<span class="mm-cart-ship-label">Digite seu CEP</span><form class="mm-cart-ship-cep-form" data-mm-ship-form="1" novalidate><input class="mm-cart-ship-cep-input" type="text" inputmode="numeric" autocomplete="postal-code" placeholder="00000-000" maxlength="9" value="'+xn(k(c))+'" aria-label="CEP" /><button class="mm-cart-ship-cep-save" type="submit">OK</button><button class="mm-cart-ship-cep-cancel" type="button" data-mm-ship="cancel" aria-label="Cancelar">'+nn+"</button></form>";var y=p.querySelector(".mm-cart-ship-cep-input"),M=p.querySelector("form");y&&(setTimeout(function(){try{y.focus(),y.select()}catch{}},10),y.addEventListener("input",function(){y.classList.remove("is-invalid");var A=y.value.replace(/\D/g,"").slice(0,8);y.value=A.length>5?A.slice(0,5)+"-"+A.slice(5):A}),y.addEventListener("keydown",function(A){A.key==="Escape"&&(A.preventDefault(),at(o))})),M&&M.addEventListener("submit",function(A){A.preventDefault(),A.stopPropagation(),xt(o)})}}function at(o){o.dataset.mmEditing="";var p=tt(o);if(p){var c=p.querySelectorAll(".cart-item:not(.mm-removing)"),y=0;c.forEach(function(M){var A=M.querySelector(".valor");if(A){var D=Bn(A.textContent);isNaN(D)||(y+=D)}}),et(p,y)}}function xt(o){var p=o.querySelector(".mm-cart-ship-cep-input");if(p){var c=p.value.replace(/\D/g,"");if(c.length!==8){p.classList.add("is-invalid"),p.focus();return}try{localStorage.setItem(w,c)}catch{}var y=o.querySelector(".mm-cart-ship-cep-save");y&&(y.disabled=!0,y.textContent="...");var M=tt(o);try{var A=X();A&&(A.cepValue="",localStorage.setItem(T,JSON.stringify(A)))}catch{}at(o),Tn(c).then(function(D){D&&M&&In(M,c,D)})}}function Bn(o){if(!o)return NaN;var p=String(o).replace(/\s/g,"").match(/([\d.,]+)/);return p?parseFloat(p[1].replace(/\./g,"").replace(",",".")):NaN}function Cn(o){return isNaN(o)?"":"R$ "+o.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function an(o){if(isNaN(o))return"";var p=o.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),c=p.split(",");return"R$&nbsp;"+c[0]+'<span class="mm-cents">,'+(c[1]||"00")+"</span>"}function Gn(o){var p=0;return Array.prototype.forEach.call(o,function(c){var y=parseFloat(c.getAttribute("data-item-price"))||0,M=parseInt(c.getAttribute("data-item-quantity"));if(!M||isNaN(M)){var A=c.querySelector(".qty-display");A?M=parseInt(A.textContent)||1:M=1}p+=y*M}),p}function ft(o){var p=o.querySelectorAll(".cart-item:not(.mm-removing)");p.forEach(function(c){var y=parseFloat(c.getAttribute("data-item-price"))||0,M=parseInt(c.getAttribute("data-item-quantity"));if(!M||isNaN(M)){var A=c.querySelector(".qty-display");A?M=parseInt(A.textContent)||1:M=1}var D=c.querySelector(".valor");D&&y>0&&(D.innerHTML=an(y*M))})}function rt(o){if(!(!o||o.dataset.mmTotalRatio)){var p=o.querySelectorAll(".cart-item");if(p.length){var c=Gn(p),y=o.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||o.querySelector(".box-total-btn .linha-total .valor-final strong");if(y&&c>.01){var M=Bn(y.textContent);isNaN(M)||(o.dataset.mmTotalRatio=String(M/c))}}}}function _n(o,p){var c=o.querySelector(".box-total-btn .linha-total");if(c){var y=c.parentElement.querySelector(".mm-cart-savings");if(y&&y.remove(),!(!p||p<.01)){var M=document.createElement("span");M.className="mm-cart-savings",M.textContent="Você economiza "+Cn(p)+" com PIX",c.nextSibling?c.parentElement.insertBefore(M,c.nextSibling):c.parentElement.appendChild(M)}}}function Xn(o){if(o){rt(o);var p=o.querySelectorAll(".cart-item:not(.mm-removing)"),c=Gn(p),y=o.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||o.querySelector(".box-total-btn .linha-total .valor-final strong"),M=parseFloat(o.dataset.mmTotalRatio||"0.95")||.95,A=c*M,D=c-A,R=B(),Z=X(),K=F(Z),n=N(p),e=Z&&Z.cepValue&&Z.cepValue.replace(/\D/g,"")===R,r=!!(R&&Z&&e&&Z.shipping!=null&&!isNaN(Z.shipping)),m=o.dataset.mmShipPendingFetch==="1";!r&&m&&R&&Z&&Z.shipping!=null&&(r=!0);var t=r?parseFloat(Z.shipping):0,a=A+t,s=c+t;if(y){var d=Bn(y.textContent);if(!isNaN(d)&&Math.abs(a-d)>.005){var h=o.querySelector(".box-total-btn .linha-total .valor-final");h&&(h.classList.remove("mm-pop"),h.offsetWidth,h.classList.add("mm-pop"),setTimeout(function(){h.classList.remove("mm-pop")},450)),vn(y,d,a)}else y.innerHTML=an(a)}var b=o.querySelector(".box-total-btn .valor-final.card");if(b){var q=s/12;b.innerHTML="<span>ou em até <strong>12x</strong> de <strong>"+Cn(q)+"</strong> no cartão</span>"}var P=o.querySelector(".box-total-btn .linha-total .valor-final .tipo-pagto");P&&(P.textContent="No PIX"),_n(o,D),et(o,c,t,r);try{var H=0;p.forEach(function(G){var U=G.querySelector(".qty-display");U&&(H+=parseInt(U.textContent)||0)});var _=document.getElementById("mm-h-cart-count");_&&(H>0?(_.textContent=H>99?"99+":String(H),_.hidden=!1):_.hidden=!0)}catch{}}}function pt(){var o=document.querySelector('#cart-preview-area > div[class*="z-[9999]"]');if(o)return o;var p=document.querySelector(".carrinho-rapido-ctn");return p&&!p.querySelector(".box-total-btn")&&p.querySelector(".valor-pix")?p:null}function gt(o,p){var c=o.querySelector(".installment-total");if(!(!c||!c.parentElement)){var y=c.parentElement,M=y.querySelector(".mm-cart-savings-mobile");if(!p||p<.01){M&&M.remove();return}var A="Você economiza "+Cn(p)+" com PIX";if(M){M.textContent!==A&&(M.textContent=A);return}var D=document.createElement("span");D.className="mm-cart-savings-mobile",D.textContent=A,c.nextSibling?y.insertBefore(D,c.nextSibling):y.appendChild(D)}}function Pn(o){if(o=o||pt(),!(!o||o.querySelector(".box-total-btn")||!o.querySelector(".valor-pix"))){var p=o.querySelectorAll(".cart-item:not(.mm-removing)"),c=p.length,y=document.getElementById("mm-h-cart-count");if(y&&c>0){var M=c>99?"99+":String(c);(y.textContent!==M||y.hidden)&&(y.textContent=M,y.hidden=!1)}if(p.length){var A=Gn(p);if(A>0){Array.prototype.forEach.call(p,function(G){var U=parseFloat(G.getAttribute("data-item-price"))||0;if(U>0){var J=parseInt(G.getAttribute("data-item-quantity"));if(!J||isNaN(J)){var tn=G.querySelector(".qty-display");J=tn&&parseInt(tn.textContent)||1}var sn=G.querySelector(".valor");if(sn){var dn=U*J,wn=sn.querySelector("span")||sn,qn=Bn(wn.textContent);(isNaN(qn)||Math.abs(qn-dn)>.005)&&(wn.textContent=Cn(dn))}}});var D=o.querySelector(".valor-pix"),R=D?D.querySelector("span")||D:null;if(!o.dataset.mmMobileRatio&&R){var Z=Bn(R.textContent);if(!isNaN(Z)&&Z>0){var K=Z/A;K>.8&&K<=1.0001&&(o.dataset.mmMobileRatio=String(K))}}var n=parseFloat(o.dataset.mmMobileRatio||"0.95");if(n>.8&&n<=1.0001||(n=.95),R){var e=A*n,r=Bn(R.textContent);(isNaN(r)||Math.abs(r-e)>.005)&&(R.textContent=Cn(e))}var m=o.querySelector(".installment-total");if(m){var t=A/12,a=Bn(m.textContent);(isNaN(a)||Math.abs(a-t)>.005)&&(m.textContent="ou 12x de "+Cn(t))}var s=B(),d=X(),h=d&&d.cepValue&&d.cepValue.replace(/\D/g,"")===s,b=!!(s&&d&&h&&d.shipping!=null&&!isNaN(d.shipping)),q=b?parseFloat(d.shipping):0,P=(s||"")+"|"+A.toFixed(2)+"|"+(b?1:0)+"|"+q,H=o.querySelector(".mm-cart-ship"),_=H&&H.dataset.mmEditing==="1";!_&&(!H||o.dataset.mmMobShipSig!==P)&&(o.dataset.mmMobShipSig=P,et(o,A,q,b)),Mn(o),gt(o,A-A*n)}}}}function vn(o,p,c){if(!o||isNaN(p)||isNaN(c))return;var y=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(y){o.innerHTML=an(c);return}var M=420,A=performance.now();function D(R){return 1-Math.pow(1-R,3)}(function R(Z){var K=Math.min(1,(Z-A)/M);o.innerHTML=an(p+(c-p)*D(K)),K<1&&requestAnimationFrame(R)})(A)}function Jn(o,p,c,y,M,A){if(!(!o||!p)){var D=parseInt(y.textContent)||1,R=D+c;if(!(R<1)){var e=o.closest(".carrinho-rapido-ctn");rt(e),M.disabled=!0,A.disabled=!0;var Z=parseFloat(o.getAttribute("data-item-price"))||0;y.textContent=R,o.setAttribute("data-item-quantity",R);var K=o.querySelector(".valor");if(K){var n=Z*R;K.textContent=Cn(n),K.classList.remove("mm-pop"),K.offsetWidth,K.classList.add("mm-pop"),setTimeout(function(){K.classList.remove("mm-pop")},450)}var e=o.closest(".carrinho-rapido-ctn"),r=c>0?"adicionaItem":"removeItem";B()&&e&&(e.dataset.mmShipPendingFetch="1"),Xn(e),Pn(),B()&&Kn(e),g(r,p).catch(function(){y.textContent=D,o.setAttribute("data-item-quantity",D),K&&(K.innerHTML=an(Z*D)),e&&(e.dataset.mmShipPendingFetch=""),Xn(e),Pn()}).then(function(){M.disabled=!1,A.disabled=!1;var m=B();m&&e?(Kn(e),Tn(m,!0).then(function(t){e.dataset.mmShipPendingFetch="",t?In(e,m,t):st(e)})):e&&(e.dataset.mmShipPendingFetch="")})}}}function vt(o,p){if(!(!o||!p)){var c=o.closest(".carrinho-rapido-ctn");rt(c);var y=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,M=y?0:360;y||o.classList.add("mm-removing"),setTimeout(function(){o.parentNode&&o.parentNode.removeChild(o);var A=c?c.querySelectorAll(".cart-item:not(.mm-removing)"):[],D=A.length===0;if(D){if(c){c.dataset.mmShipPendingFetch="";var R=c.querySelector(".mm-cart-ship");R&&R.remove();var Z=c.querySelector(".box-total-btn, .area-finalizar-compra");Z&&(Z.style.display="none")}}else Xn(c),B()&&Kn(c);var K=document.getElementById("mm-h-cart-count"),n=document.getElementById("mm-h-cart"),e=A.length;K&&(K.textContent=e>99?"99+":String(e),K.hidden=e===0),n&&n.setAttribute("aria-label","Carrinho, "+e+" "+(e===1?"item":"itens")),Pn()},M),g("deleteItem",p).catch(function(){}).then(function(){var A=c?c.querySelectorAll(".cart-item:not(.mm-removing)"):[],D=document.getElementById("mm-h-cart-count");if(D&&(D.textContent=A.length>99?"99+":String(A.length),D.hidden=A.length===0),A.length===0){c&&(c.dataset.mmShipPendingFetch="");return}var R=B();R&&c?(c.dataset.mmShipPendingFetch="1",Kn(c),Tn(R,!0).then(function(Z){c.dataset.mmShipPendingFetch="",Z?In(c,R,Z):st(c)})):c&&(c.dataset.mmShipPendingFetch="")})}}window.__mmDeleteItem=vt;var Ct=null,ot=new Set,cn=null;function Et(o){if(!o)return NaN;var p=String(o).replace(/\s/g,"").match(/([\d.,]+)/);if(!p)return NaN;var c=p[1].replace(/\./g,"").replace(",","."),y=parseFloat(c);return isNaN(y)?NaN:y}function ct(o){return isNaN(o)?"":"R$ "+o.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function it(o,p,c){if(!o||isNaN(p)||isNaN(c))return;cn&&cancelAnimationFrame(cn);var y=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(y){o.textContent=ct(c);return}var M=420,A=performance.now();function D(Z){return 1-Math.pow(1-Z,3)}function R(Z){var K=Z-A,n=Math.min(1,K/M),e=p+(c-p)*D(n);o.textContent=ct(e),n<1?cn=requestAnimationFrame(R):cn=null}cn=requestAnimationFrame(R)}function Un(o){return o?o.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||o.querySelector(".box-total-btn .linha-total .valor-final strong")||o.querySelector(".valor-pix strong")||o.querySelector(".valor-pix"):null}function Ln(o){return o?o.querySelector(".box-total-btn .linha-total .valor-final"):null}function $n(o){var p=Ln(o);p&&(p.classList.remove("mm-pop"),p.offsetWidth,p.classList.add("mm-pop"),setTimeout(function(){p.classList.remove("mm-pop")},450))}function dt(){var o=document.querySelector(".carrinho-rapido-ctn");if(o){var p=o.querySelectorAll(".cart-item:not(.mm-removing)");if(p.length>0){var c=o.querySelector(".box-total-btn");c&&c.dataset.mmTotalEnhanced!=="1"&&(rt(o),ft(o),Xn(o),c.dataset.mmTotalEnhanced="1",o.dataset.mmShipRendered="1",Mn(o))}o.querySelector(".box-total-btn")||Pn(o);var y=o.querySelectorAll(".cart-item"),M=new Set;y.forEach(function(A){var D=A.id||A.getAttribute("data-item-id")||"";D&&(M.add(D),!ot.has(D)&&ot.size>0&&(A.classList.add("mm-added"),setTimeout(function(){A.classList.remove("mm-added")},500)))}),ot=M}}function On(){var o=document.querySelector(".carrinho-rapido-ctn");if(!(!o||o.dataset.mmAnimObserved)){o.dataset.mmAnimObserved="1",dt();var p=new MutationObserver(function(){clearTimeout(On._t),On._t=setTimeout(dt,60)});p.observe(o,{childList:!0,subtree:!0,characterData:!0})}}function ut(){x(),l(),u();var o=document.getElementById("cart-preview-area");if(o){var p=new MutationObserver(function(){setTimeout(i,100),setTimeout(On,150),setTimeout(Pn,180)});p.observe(o,{childList:!0,subtree:!0})}setInterval(i,800),setInterval(On,800),setInterval(Pn,800),i(),On(),Pn()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ut):ut()})(),(function x(){"use strict";var O="mm_cep",j="mm_cart_snapshot",I=18e5,v="mm_onepage_draft",i=1440*60*1e3,l=2e3,u="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",g="https://api.whatsapp.com/send?phone=5511915299488&text="+encodeURIComponent("Olá! Estou no checkout e gostaria de tirar uma dúvida sobre meu pedido."),f=location.pathname,C=f.indexOf("/checkout/cart")!==-1,w=f.indexOf("/checkout/identify")!==-1,T=f.indexOf("/checkout/onepage")!==-1,z=f.indexOf("/checkout/payment")!==-1,B=f.indexOf("/checkout/done")!==-1;if(B){try{localStorage.removeItem("mm_onepage_draft")}catch{}return}if(!C&&!w&&!T&&!z)return;x._retries=(x._retries||0)+1;var k=document.querySelector("#checkout-main-area");if(!k){x._retries<40&&setTimeout(x,400);return}function L(n){return isNaN(n)||n<0?"R$ 0,00":"R$ "+n.toFixed(2).replace(".",",").replace(/(\d)(?=(\d{3})+,)/g,"$1.")}function X(n){if(!n)return 0;var e=String(n).match(/(-?[\d.]+,\d{2})/);return e&&parseFloat(e[1].replace(/\./g,"").replace(",","."))||0}function N(n){return String(n||"").replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})}var F={truck:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-5l-3-4zM6 18.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.5-7H17V9.5h2.04l1.46 2-.04 0z"/></svg>',check:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',checkCircle:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',bolt:'<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',shield:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>',lock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>',card:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',rotate:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',minus:'<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',plus:'<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M3 7h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',trash:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',close:'<svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5l-7 7M3.5 3.5l7 7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',arrow:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',tag:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',whats:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',box:'<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>'},Y={get:function(n){try{return localStorage.getItem(n)}catch{return null}},set:function(n,e){try{localStorage.setItem(n,e)}catch{}},remove:function(n){try{localStorage.removeItem(n)}catch{}}};function nn(n){try{var e={ts:Date.now(),items:n.items.map(function(r){return{name:r.name,variant:r.variant,imgSrc:r.imgSrc,quantity:r.quantity,lineTotal:r.lineTotal,lineTotalPix:r.lineTotalPix,isPix:r.isPix,deposito:r.deposito}}),subtotalPix:n.subtotalPix,subtotalFull:n.subtotalFull,discount:n.discount,couponCode:n.couponCode,shipping:n.shipping,shippingDeadline:n.shippingDeadline,shippingName:n.shippingName,shippingCity:n.shippingCity,shippingOptions:n.shippingOptions,cepValue:n.cepValue};Y.set(j,JSON.stringify(e))}catch{}}function en(){try{var n=Y.get(j);if(!n)return null;var e=JSON.parse(n);return!e||!e.ts||Date.now()-e.ts>I?null:e}catch{return null}}function on(){try{for(var n=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep","mm-op-rua","mm-op-num","mm-op-comp","mm-op-bairro","mm-op-cidade","mm-op-uf"],e={ts:Date.now()},r=0,m=0;m<n.length;m++){var t=document.getElementById(n[m]);t&&t.value&&(e[n[m]]=t.value,r++)}if(r===0){window._mmDraftDebug&&console.log("[mm-draft] skip save (0 fields)");return}Y.set(v,JSON.stringify(e)),window._mmDraftDebug&&console.log("[mm-draft] saved",r,"fields",e)}catch(a){window._mmDraftDebug&&console.warn("[mm-draft] save failed",a)}}function kn(){try{var n=Y.get(v);if(!n)return null;var e=JSON.parse(n);return!e||!e.ts?null:Date.now()-e.ts>i?(Y.remove(v),null):e}catch{return null}}function gn(){try{Y.remove(v)}catch{}}function Qn(){var n=kn();if(!n)return window._mmDraftDebug&&console.log("[mm-draft] no draft to restore"),null;for(var e=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep","mm-op-rua","mm-op-num","mm-op-comp","mm-op-bairro","mm-op-cidade","mm-op-uf"],r=0,m=0;m<e.length;m++){var t=document.getElementById(e[m]);if(t&&n[e[m]]){try{var a=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;a.call(t,n[e[m]])}catch{t.value=n[e[m]]}t.dispatchEvent(new Event("input",{bubbles:!0})),/^mm-op-(rua|bairro|cidade|uf)$/.test(e[m])&&(t.dataset.mmCepFill="1"),r++}}return window._mmDraftDebug&&console.log("[mm-draft] restored",r,"fields from draft",n),n}function mn(){for(var n={items:[],subtotalPix:0,subtotalFull:0,discount:0,shipping:null,shippingRaw:"",shippingDeadline:"",shippingName:"",shippingCity:"",shippingOptions:[],couponCode:"",cepValue:"",canFinalize:!1,hasFinalizar:!1},e=k.querySelectorAll(".cart-item"),r=0;r<e.length;r++){var m=e[r],t=m.querySelector('.qtd-item[id^="item_carrinho_"]'),a=t&&t.id.match(/item_carrinho_(\d+)/),s=a?parseInt(a[1],10):null,d=m.querySelector("figure img")||m.querySelector("#product-img")||m.querySelector("img"),h=m.querySelector(".nome-produto .link")||m.querySelector("figure a"),b=m.querySelector(".column-valor-produto .valor"),q=b?b.textContent.trim():"",P=!!m.querySelector(".column-valor-produto .sub");n.items.push({dataId:s,sku:m.getAttribute("data-item-id")||"",name:m.getAttribute("data-item-name")||m.getAttribute("data-name")||"",variant:m.getAttribute("data-item-variant")||"",brand:m.getAttribute("data-item-brand")||"",category:m.getAttribute("data-item-category")||"",priceUnit:parseFloat(m.getAttribute("data-item-price")||"0"),lineTotal:parseFloat(m.getAttribute("data-valor")||"0"),quantity:parseInt(m.getAttribute("data-item-quantity")||"1",10),deposito:m.getAttribute("data-item-deposito")==="1",imgSrc:d?d.getAttribute("src")||d.currentSrc:"",href:h?h.getAttribute("href"):"",lineTotalPix:X(q),isPix:P}),n.subtotalFull+=parseFloat(m.getAttribute("data-valor")||"0")}var H=k.querySelector("#resumo-compra .resumo-valores .value");H&&(n.subtotalPix=X(H.textContent)),n.subtotalPix<=0&&(n.subtotalPix=n.items.reduce(function(bt,zt){return bt+(zt.lineTotalPix||0)},0));var _=k.querySelector("#resumo-compra .discount-value");_&&(n.discount=X(_.textContent));var G=k.querySelector("#resumo-compra .txt-cupom, #resumo-compra .alert.alert-type-1");if(G){var U=G.textContent.match(/([A-Z0-9]{3,})/);U&&(n.couponCode=U[1])}var J=k.querySelector("#resumo-compra .frete-calculado, .frete-calculado");if(J&&J.textContent.trim()){n.shippingRaw=J.textContent.trim();var tn=J.querySelector(".frete-location .city");tn&&(n.shippingCity=tn.textContent.trim());for(var sn=J.querySelectorAll(".servico-frete"),dn=0;dn<sn.length;dn++){var wn=sn[dn],qn=wn.querySelector('input[type="radio"]'),S=wn.querySelector(".dias-entrega"),E=parseFloat(wn.getAttribute("data-valor-frete")||"0"),V=wn.getAttribute("data-servico-frete")||"",Q=S?S.textContent.trim().replace(/\s+/g," ").replace(/\s*-\s*$/,"").trim():"",W=Q.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i),ln=W?W[1].replace(/\s+/g," "):Q;n.shippingOptions.push({id:qn?qn.value:"",name:V,deadline:ln,value:E,isFree:E===0,isSelected:qn?qn.checked:!1})}var pn=n.shippingOptions.filter(function(bt){return bt.isSelected})[0];if(!pn&&n.shippingOptions.length>0&&(pn=n.shippingOptions[0]),pn)n.shipping=pn.value,n.shippingName=pn.name,n.shippingDeadline=pn.deadline;else{var fn=J.querySelector(".info-frete-selec"),bn=J.querySelector(".dias-entrega, .info-frete-selec .dias-entrega"),yn=J.querySelector(".valor-frete .value, .value.valor-frete"),An=J.querySelector(".info-frete-selec .info-title span, .info-title span");if(yn){var Sn=yn.textContent.trim();if(/gr[aá]tis/i.test(Sn))n.shipping=0;else{var Dn=X(Sn);Dn>0&&(n.shipping=Dn)}}if(bn){var Rn=bn.textContent.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*\([^)]+\))?(?:\s*[úu]teis)?)/i);Rn&&(n.shippingDeadline=Rn[1].replace(/\s+/g," ").replace(/\(s\)/,"").trim())}if(An&&(n.shippingName=An.textContent.trim()),n.shipping===null)if(/gr[aá]tis/i.test(n.shippingRaw))n.shipping=0;else{var nt=X(n.shippingRaw);nt>0&&(n.shipping=nt)}if(!n.shippingDeadline){var un=n.shippingRaw.match(/(\d+(?:\s*[aà]\s*\d+)?)\s*dias?/i);un&&(n.shippingDeadline=un[1]+" dias úteis")}}}var mt=k.querySelector("#cep, .input-cep");return mt&&(n.cepValue=mt.value||""),n.hasFinalizar=!!k.querySelector("#finalizar-compra"),n.canFinalize=n.items.length>0,n}function Fn(n){n=n||"cart";var e='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>';function r(m,t){var a=m===n,s="mm-checkout-step"+(a?" is-active":""),d=a?' aria-current="step"':"";return'<li class="'+s+'"'+d+'><span class="mm-checkout-step-label">'+t+"</span></li>"}return'<header class="mm-checkout-header"><a class="mm-checkout-header-logo" href="/" aria-label="Madeira Mania - voltar à home"><img src="'+u+'" alt="Madeira Mania" width="180" height="44"></a><nav class="mm-checkout-steps" aria-label="Etapas do checkout"><ol>'+r("cart","Carrinho")+'<li class="mm-checkout-step-sep" aria-hidden="true">›</li>'+r("delivery","Entrega")+'<li class="mm-checkout-step-sep" aria-hidden="true">›</li>'+r("payment","Pagamento")+'</ol></nav><div class="mm-checkout-secure">'+e+'<span class="mm-checkout-secure-text"><strong>Compra 100% segura</strong><small>Site protegido por SSL</small></span></div></header>'}function Yn(n){var e=n.imgSrc?'<img src="'+N(n.imgSrc)+'" alt="'+N(n.name)+'" loading="lazy">':"",r=n.href?'<a class="mm-item-name" href="'+N(n.href)+'">'+N(n.name)+"</a>":'<span class="mm-item-name">'+N(n.name)+"</span>",m=n.variant?'<p class="mm-item-variant">'+N(n.variant)+"</p>":"",t=n.deposito?'<span class="mm-item-badge">'+F.bolt+"<span>Pronta entrega · Envio em 24h</span></span>":"",a=n.quantity<=1?' disabled aria-disabled="true"':"",s;if(n.lineTotalPix>0&&n.isPix){var d='<span class="mm-item-price-sub">no PIX</span>',h=n.quantity>1?L(n.lineTotalPix/n.quantity)+" cada":"";s='<div class="mm-item-price"><span class="mm-item-price-value">'+L(n.lineTotalPix)+"</span>"+d+(h?'<span class="mm-item-price-unit">'+h+"</span>":"")+"</div>"}else{var b=n.quantity>1?L(n.priceUnit)+" cada":"";s='<div class="mm-item-price"><span class="mm-item-price-value">'+L(n.lineTotal)+"</span>"+(b?'<span class="mm-item-price-unit">'+b+"</span>":"")+"</div>"}return'<div class="mm-item" data-mm-id="'+n.dataId+'"><div class="mm-item-thumb">'+e+'</div><div class="mm-item-body">'+r+m+t+"</div>"+s+'<div class="mm-item-controls"><div class="mm-qty" role="group" aria-label="Quantidade"><button type="button" class="mm-qty-btn" data-mm-act="dec"'+a+' aria-label="Diminuir quantidade">'+F.minus+'</button><span class="mm-qty-value">'+n.quantity+'</span><button type="button" class="mm-qty-btn" data-mm-act="inc" aria-label="Aumentar quantidade">'+F.plus+'</button></div><button type="button" class="mm-item-remove" data-mm-act="remove" aria-label="Remover item" title="Remover">'+F.trash+"</button></div></div>"}function Tn(n){return n.items.length?n.items.map(Yn).join(""):'<div class="mm-empty"><div class="mm-empty-icon">'+F.box+'</div><h3 class="mm-empty-title">Seu carrinho está vazio</h3><p class="mm-empty-desc">Explore nossos móveis e encontre a peça certa para sua casa.</p><a class="mm-empty-cta" href="/">Explorar produtos '+F.arrow+'</a><p class="mm-empty-perks">Frete grátis acima de R$ 2.000 · 12x sem juros · 7% off no PIX</p></div>'}function Vn(n){for(var e="",r=0;r<n;r++)e+='<div class="mm-skel-item"><div class="mm-skel mm-skel-thumb"></div><div class="mm-skel-lines"><div class="mm-skel mm-skel-line w-3-4"></div><div class="mm-skel mm-skel-line w-1-2"></div><div class="mm-skel mm-skel-line w-1-3"></div></div><div class="mm-skel-lines"><div class="mm-skel mm-skel-line w-1-2"></div></div></div>';return e}function In(n){var e=n.subtotalFull>0?n.subtotalFull:n.subtotalPix,r='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+L(e)+"</span></div>";if(n.shipping!==null){var m;n.shipping===0?m='<span class="mm-row-value is-free">'+F.check+" Grátis</span>":m='<span class="mm-row-value">'+L(n.shipping)+"</span>";var t='<span class="mm-row-label">Frete';n.shippingName&&(t+=' <span class="mm-row-sub">· '+N(n.shippingName)+"</span>"),n.shippingDeadline&&(t+=' <span class="mm-row-sub">· '+N(n.shippingDeadline)+"</span>"),t+="</span>",r+='<div class="mm-row">'+t+m+"</div>"}n.discount>0&&(r+='<div class="mm-row"><span class="mm-row-label">Desconto</span><span class="mm-row-value is-discount">− '+L(n.discount)+"</span></div>");var a="";if(n.shipping!==null){var s=Math.max(0,e+n.shipping-n.discount),d=Math.max(0,n.subtotalPix+n.shipping-n.discount),h=s-d,b=s/12;a='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value">'+L(s)+'</div><div class="mm-total-pix"><span>'+L(d)+" à vista no PIX</span>"+(h>0?'<span class="mm-total-pix-save">economia de '+L(h)+"</span>":"")+'</div><div class="mm-total-parcela">ou 12x de '+L(b)+" sem juros no cartão</div></div>"}else a='<div class="mm-total"><div class="mm-total-label">Subtotal</div><div class="mm-total-value">'+L(n.subtotalPix)+'</div><div class="mm-total-pix"><span>à vista no PIX</span></div><div class="mm-total-pending">Informe seu CEP para ver o frete e o total final.</div></div>';var q;return n.couponCode?q='<div class="mm-coupon-applied"><span class="mm-coupon-applied-left">'+F.tag+"<span>"+N(n.couponCode)+'</span></span><button type="button" data-mm-act="coupon-remove" aria-label="Remover cupom">'+F.close+"</button></div>":q='<div class="mm-coupon"><button type="button" class="mm-coupon-toggle" data-mm-act="coupon-toggle">'+F.tag+'<span>Tenho um cupom</span></button><form class="mm-coupon-form" data-mm-act="coupon-submit"><input type="text" class="mm-input" name="mm-coupon-code" placeholder="CUPOM" autocomplete="off" autocapitalize="characters" spellcheck="false" /><button type="submit" class="mm-btn-secondary">Aplicar</button></form></div>','<div class="mm-sum-stack"><div class="mm-rows">'+r+"</div>"+q+a+"</div>"}function Mn(){var n=document.getElementById("mm-layout");if(n)return n.parentElement!==k&&k.insertBefore(n,k.firstChild),n;var e=document.createElement("div");return e.id="mm-layout",e.innerHTML=Fn("cart")+'<div class="mm-grid"><section class="mm-items"><h2 class="mm-h">Carrinho</h2><div class="mm-items-card"><div id="mm-item-list">'+Vn(2)+'</div></div></section><aside class="mm-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><div class="mm-cep"><div class="mm-cep-label"><span class="mm-cep-label-text">Calcular frete</span><a class="mm-cep-label-link" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a></div><div class="mm-cep-row"><input type="text" class="mm-input" id="mm-cep-input" name="mm_cep_calc" inputmode="numeric" maxlength="9" placeholder="00000-000" autocomplete="off" data-lpignore="true" data-1p-ignore="true" data-bwignore="true" data-form-type="other" aria-label="CEP" /><button type="button" class="mm-btn-secondary" data-mm-act="calc-cep">Calcular</button></div></div><div id="mm-sum-dynamic"></div><button type="button" class="mm-cta" data-mm-act="finalizar">Finalizar compra'+F.arrow+'</button><div class="mm-trust"><span class="mm-trust-item">'+F.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+F.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+F.card+'<span>12x sem juros</span></span></div><a class="mm-help" href="'+g+'" target="_blank" rel="noopener" data-mm-track="help-whats">'+F.whats+"<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span></a></div></aside></div>",k.insertBefore(e,k.firstChild),k.classList.add("mm-shadow-mode"),document.body.classList.add("mm-checkout-rebuild"),document.documentElement.classList.remove("mm-cart-loading"),e}function xn(){var n=mn(),e=document.getElementById("mm-item-list");e&&(e.innerHTML=Tn(n));var r=document.getElementById("mm-sum-dynamic");r&&(r.innerHTML=In(n));var m=document.querySelector(".mm-cta");m&&(m.disabled=!n.canFinalize,m.style.opacity=n.canFinalize?"1":"0.5",m.style.pointerEvents=n.canFinalize?"auto":"none");var t=document.getElementById("mm-cep-input");if(t&&!t.matches(":focus")){var a=Y.get(O),s=n.cepValue||a||"";s&&(t.value=hn(s))}return n.items&&n.items.length>0&&nn(n),n}function hn(n){var e=String(n||"").replace(/\D/g,"").slice(0,8);return e.length<=5?e:e.slice(0,5)+"-"+e.slice(5)}function tt(n){var e=String(n||"").replace(/\D/g,"");e.length===8&&Y.set(O,e)}function et(n){n=n||0;var e=Y.get(O);if(!(!e||e.length!==8)){var r=k.querySelector("#cep, .input-cep");if(!r){n<12&&setTimeout(function(){et(n+1)},350);return}var m=k.querySelector("#resumo-compra .frete-calculado");if(m&&m.textContent.trim()){var t=document.getElementById("mm-cep-input");t&&!t.value&&(t.value=hn(e));return}var a=document.getElementById("mm-cep-input");a&&!a.value&&(a.value=hn(e)),r.value=hn(e),Hn(r),setTimeout(function(){Kn()},200)}}function Hn(n){try{var e=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;e.call(n,n.value)}catch{}n.dispatchEvent(new Event("input",{bubbles:!0})),n.dispatchEvent(new Event("change",{bubbles:!0}))}function Kn(){try{if(window.Zord&&window.Zord.Cart&&typeof window.Zord.Cart.calculaFreteCarrinho=="function"){window.Zord.Cart.calculaFreteCarrinho();return}}catch{}var n=k.querySelector("#resumo-compra .calcula-frete > button, .area-frete button");n&&n.click()}function st(){var n=document.getElementById("mm-layout");!n||n._mmBound||(n._mmBound=!0,n.addEventListener("click",function(e){var r=e.target.closest("[data-mm-act]");if(r){var m=r.getAttribute("data-mm-act"),t=r.closest(".mm-item"),a=t?parseInt(t.getAttribute("data-mm-id"),10):null;switch(m){case"inc":ht(a,t,"inc");break;case"dec":ht(a,t,"dec");break;case"remove":lt(a,t);break;case"calc-cep":at();break;case"coupon-toggle":var s=r.closest(".mm-coupon");if(s){s.classList.add("is-open");var d=s.querySelector("input");d&&setTimeout(function(){d.focus()},100)}break;case"coupon-remove":Bn();break;case"finalizar":Cn();break}}}),n.addEventListener("submit",function(e){var r=e.target.closest('[data-mm-act="coupon-submit"]');if(r){e.preventDefault();var m=r.querySelector("input");m&&xt(m.value.trim())}}),n.addEventListener("input",function(e){e.target&&e.target.id==="mm-cep-input"&&(e.target.value=hn(e.target.value))}),n.addEventListener("keydown",function(e){e.key==="Enter"&&e.target&&e.target.id==="mm-cep-input"&&(e.preventDefault(),at())}))}function ht(n,e,r){if(!(!n||!e)&&!(!window.Zord||!window.Zord.checkout)){e.classList.add("is-updating");try{r==="inc"?window.Zord.checkout.adicionaQuantidade(n):window.Zord.checkout.removeQuantidade(n)}catch(m){console.warn("[mm-cart] qty change failed",m),e.classList.remove("is-updating")}}}function lt(n,e){if(!(!n||!e)&&!(!window.Zord||!window.Zord.checkout)){e.classList.add("is-updating"),e.style.transition="opacity 200ms, transform 200ms",e.style.opacity="0",e.style.transform="translateX(-12px)";try{typeof window.Zord.checkout.deleteItem=="function"?window.Zord.checkout.deleteItem(n):window.Zord.checkout.removeQuantidade(n)}catch(r){console.warn("[mm-cart] remove failed",r),e.classList.remove("is-updating"),e.style.opacity="1",e.style.transform=""}}}function at(){var n=document.getElementById("mm-cep-input");if(n){var e=(n.value||"").replace(/\D/g,"");if(e.length!==8){n.focus(),n.classList.add("mm-input-error"),setTimeout(function(){n.classList.remove("mm-input-error")},1200);return}tt(e);var r=k.querySelector("#cep, .input-cep");r&&(r.value=hn(e),Hn(r)),Kn()}}function xt(n){if(n&&!(!window.Zord||!window.Zord.checkout)){var e=k.querySelector("#cupom-desconto");e&&(e.value=n.toUpperCase(),Hn(e));try{window.Zord.checkout.addCupomDesconto()}catch(r){console.warn("[mm-cart] coupon apply failed",r)}}}function Bn(){if(!(!window.Zord||!window.Zord.checkout))try{window.Zord.checkout.removeCupomDesconto()}catch(n){console.warn("[mm-cart] coupon remove failed",n)}}function Cn(){try{var n=mn();n.items&&n.items.length>0&&nn(n)}catch{}var e=document.getElementById("finalizar-compra");if(e){e.click();return}location.href="/checkout/identify"}if(C){let n=function(r){if(r=r||0,r>30){e();return}var m=k.querySelectorAll(".cart-item").length>0,t=k.querySelector("#resumo-compra");m||t||r>8?e():setTimeout(function(){n(r+1)},250)},e=function(){Mn(),st(),xn(),et(),typeof jQuery<"u"&&jQuery(document).ajaxComplete(function(t,a,s){if(!(!s||!s.url)){var d=s.url;(d.indexOf("checkout/cart")!==-1||d.indexOf("atualiza")!==-1||d.indexOf("cupom")!==-1||d.indexOf("frete")!==-1||d.indexOf("removeItem")!==-1||d.indexOf("adicionaItem")!==-1)&&(setTimeout(xn,120),setTimeout(function(){var h=mn();h.shipping!==null&&h.cepValue&&tt(h.cepValue)},200))}});try{var r=new MutationObserver(function(t){e._mutTimer&&clearTimeout(e._mutTimer),e._mutTimer=setTimeout(xn,200)}),m=[k.querySelector("#cart-area"),k.querySelector(".cart-area"),k.querySelector("#resumo-compra")].filter(Boolean);m.forEach(function(t){r.observe(t,{childList:!0,subtree:!0,characterData:!0})})}catch{}};if(!document.getElementById("mm-checkout-cro-done")){var an=document.createElement("div");an.id="mm-checkout-cro-done",an.style.display="none",document.body.appendChild(an)}n()}function Gn(n){if(!n||!n.items||!n.items.length)return'<aside class="mm-id-sum mm-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><div class="mm-sum-empty"><p>Não conseguimos carregar o resumo do seu pedido.</p><a class="mm-btn-secondary" href="/checkout/cart">Voltar ao carrinho</a></div></div></aside>';var e=3,r=n.items.slice(0,e),m=n.items.length-e,t=r.map(function(U){var J=U.imgSrc?'<img src="'+N(U.imgSrc)+'" alt="'+N(U.name)+'" loading="lazy">':'<div class="mm-id-thumb-placeholder">'+F.box+"</div>",tn=U.quantity>1?'<strong class="mm-id-thumb-qty">'+U.quantity+"×</strong> ":"",sn=U.lineTotalPix>0?U.lineTotalPix:U.lineTotal;return'<div class="mm-id-thumb"><div class="mm-id-thumb-img">'+J+'</div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+tn+N(U.name)+"</p>"+(U.variant?'<p class="mm-id-thumb-variant">'+N(U.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price">'+L(sn)+"</div></div>"}).join("");m>0&&(t+='<div class="mm-id-thumb-more">+ '+m+" "+(m===1?"item":"itens")+" a mais</div>");var a=n.subtotalFull>0?n.subtotalFull:n.subtotalPix,s='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+L(a)+"</span></div>";if(n.shipping!==null&&n.shipping!==void 0){var d;n.shipping===0?d='<span class="mm-row-value is-free">'+F.check+" Grátis</span>":d='<span class="mm-row-value">'+L(n.shipping)+"</span>",s+='<div class="mm-row"><span class="mm-row-label">Frete'+(n.shippingDeadline?' <span class="mm-row-sub">· '+N(n.shippingDeadline)+"</span>":"")+"</span>"+d+"</div>"}n.discount>0&&(s+='<div class="mm-row"><span class="mm-row-label">Desconto'+(n.couponCode?' <span class="mm-row-sub">· '+N(n.couponCode)+"</span>":"")+'</span><span class="mm-row-value is-discount">− '+L(n.discount)+"</span></div>");var h,b=n.shipping!==null&&n.shipping!==void 0?n.shipping:0;if(n.shipping!==null&&n.shipping!==void 0){var q=Math.max(0,a+b-(n.discount||0)),P=Math.max(0,n.subtotalPix+b-(n.discount||0)),H=q-P,_=q/12;h='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value">'+L(q)+'</div><div class="mm-total-pix"><span>'+L(P)+" à vista no PIX</span>"+(H>0?'<span class="mm-total-pix-save">economia de '+L(H)+"</span>":"")+'</div><div class="mm-total-parcela">ou 12x de '+L(_)+" sem juros</div></div>"}else{var G=a/12;h='<div class="mm-total"><div class="mm-total-label">Subtotal</div><div class="mm-total-value">'+L(n.subtotalPix)+'</div><div class="mm-total-pix"><span>à vista no PIX</span></div><div class="mm-total-parcela">ou 12x de '+L(G)+" sem juros</div></div>"}return'<aside class="mm-id-sum mm-sum"><h2 class="mm-h">Resumo do pedido</h2><div class="mm-sum-card"><div class="mm-id-thumbs">'+t+'</div><div class="mm-rows">'+s+"</div>"+h+'<a class="mm-id-edit-cart" href="/checkout/cart"><span>Editar carrinho</span></a></div><a class="mm-help mm-sum-help" href="'+g+'" target="_blank" rel="noopener" data-mm-track="help-whats-sum">'+F.whats+"<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span></a></aside>"}function ft(){var n='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',e='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',r='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="9" x2="17" y2="9"/><line x1="7" y1="13" x2="17" y2="13"/><line x1="7" y1="17" x2="13" y2="17"/></svg>',m='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';return'<section class="mm-id-form-col"><h2 class="mm-id-h2">Quase lá! Identifique-se</h2><p class="mm-id-sub">Informe seu e-mail para finalizar a compra de forma rápida e segura.</p><form class="mm-id-form" data-mm-act="identify-submit" novalidate><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+n+'</span><input type="email" id="mm-id-email" name="mm-email" class="mm-input" placeholder="seu@email.com" autocomplete="email" inputmode="email" required></div><p class="mm-id-microcopy">'+F.lock+'<span>Seu e-mail é seguro · Não compartilhamos com terceiros</span></p><button type="submit" class="mm-cta">Continuar'+F.arrow+'</button></form><div class="mm-id-divider"><span>ou</span></div><div class="mm-id-google-slot"></div><button type="button" class="mm-id-guest-toggle" data-mm-act="guest-go" aria-label="Continuar como visitante"><span class="mm-id-guest-icon" aria-hidden="true">'+e+'</span><span class="mm-id-guest-label">Continuar como visitante (sem criar conta)</span><span class="mm-id-guest-arrow" aria-hidden="true">'+F.arrow+'</span></button><div class="mm-trust mm-id-trust"><span class="mm-trust-item">'+F.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+F.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+F.shield+'<span>Garantia 12 meses</span></span></div><p class="mm-id-lgpd">Ao continuar, você concorda com nossa <a href="/politica-de-privacidade" target="_blank" rel="noopener">Política de Privacidade</a></p></section>'}function rt(n){var e=document.getElementById("mm-layout");if(e)return e.parentElement!==k&&k.insertBefore(e,k.firstChild),e;var r=document.createElement("div");return r.id="mm-layout",r.classList.add("mm-id-layout"),r.innerHTML=Fn("delivery")+'<div class="mm-grid mm-id-grid">'+ft()+Gn(n)+"</div>",k.insertBefore(r,k.firstChild),document.body.classList.add("mm-checkout-rebuild"),_n(),k.classList.add("mm-shadow-mode"),document.documentElement.classList.remove("mm-cart-loading"),r}function _n(){var n=document.querySelector(".mm-id-google-slot"),e=k.querySelector(".social-login-area");if(!(!n||!e)&&!n.contains(e))try{n.appendChild(e),n.classList.add("is-loaded")}catch{}}function Xn(n){Y.set("mm_user_email",n);var e=k.querySelector("#login");if(!e)return!1;e.value=n,Hn(e);var r=e.closest("form"),m=r?r.querySelector('button.button-send, button[type="submit"]'):null;return m?(m.click(),!0):r?(r.submit(),!0):!1}function pt(){var n=document.getElementById("mm-layout");!n||n._mmBound||(n._mmBound=!0,n.addEventListener("submit",function(e){var r=e.target.closest('[data-mm-act="identify-submit"]');if(r){e.preventDefault();var m=r.querySelector("#mm-id-email"),t=m?m.value.trim():"";if(!t||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){m&&(m.classList.add("mm-input-error"),m.focus(),setTimeout(function(){m.classList.remove("mm-input-error")},1500));return}var a=Xn(t);if(a){var s=r.querySelector(".mm-cta");s&&s.classList.add("is-loading")}return}}),n.addEventListener("click",function(e){var r=e.target.closest("[data-mm-act]");if(r){var m=r.getAttribute("data-mm-act");m==="guest-go"&&(Y.set("mm_checkout_mode","guest"),r.classList.add("is-loading"),location.href="/checkout/onepage")}}))}function gt(n){try{var e=new DOMParser().parseFromString(n,"text/html"),r=e.querySelector("#checkout-main-area");if(!r)return null;for(var m=[],t=r.querySelectorAll(".cart-item"),a=0,s=0;s<t.length;s++){var d=t[s],h=d.querySelector("figure img")||d.querySelector("#product-img")||d.querySelector("img"),b=d.querySelector(".column-valor-produto .valor"),q=parseFloat(d.getAttribute("data-valor")||"0"),P=b?X(b.textContent):0;m.push({name:d.getAttribute("data-item-name")||d.getAttribute("data-name")||"",variant:d.getAttribute("data-item-variant")||"",imgSrc:h&&h.getAttribute("src")||"",quantity:parseInt(d.getAttribute("data-item-quantity")||"1",10),lineTotal:q,lineTotalPix:P,isPix:!!d.querySelector(".column-valor-produto .sub"),deposito:d.getAttribute("data-item-deposito")==="1"}),a+=q}if(m.length===0)return null;var H=r.querySelector("#resumo-compra .resumo-valores .value"),_=H?X(H.textContent):0;_<=0&&(_=m.reduce(function(Q,W){return Q+(W.lineTotalPix||0)},0));var G=r.querySelector("#resumo-compra .discount-value"),U=G?X(G.textContent):0,J=r.querySelector("#resumo-compra .txt-cupom, #resumo-compra .alert.alert-type-1"),tn="";if(J){var sn=J.textContent.match(/([A-Z0-9]{3,})/);sn&&(tn=sn[1])}var dn=r.querySelector("#resumo-compra .frete-calculado"),wn=null,qn="";if(dn&&dn.textContent.trim()){var S=dn.textContent.trim();if(/gr[aá]tis/i.test(S))wn=0;else{var E=X(S);E>0&&(wn=E)}var V=S.match(/(\d+)\s*dias?/i);V&&(qn=V[1]+" dias úteis")}return{ts:Date.now(),items:m,subtotalPix:_,subtotalFull:a,discount:U,couponCode:tn,shipping:wn,shippingDeadline:qn,cepValue:""}}catch{return null}}function Pn(n){try{fetch("/checkout/cart",{credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(e){return e.text()}).then(function(e){var r=gt(e);r&&Y.set(j,JSON.stringify(r)),n(r)}).catch(function(){n(null)})}catch{n(null)}}function vn(n){var e=document.querySelector("#mm-layout .mm-id-sum");if(e){var r=e.parentNode;if(r){var m=document.createElement("div");m.innerHTML=Gn(n);var t=m.firstChild;t&&r.replaceChild(t,e)}}}if(w){let n=function(r){if(r=r||0,r>30){e();return}var m=k.querySelector("#login, #login-form-etapa-01");m||r>8?e():setTimeout(function(){n(r+1)},250)},e=function(){var r=en();rt(r),pt(),_n(),setTimeout(_n,600),setTimeout(_n,1500),(!r||!r.items||r.items.length===0)&&Pn(function(m){m&&m.items&&m.items.length>0&&vn(m)}),setTimeout(function(){var m=document.getElementById("mm-id-email");m&&!("ontouchstart"in window)&&m.focus()},250)};n()}function Jn(n){var e=String(n||"").replace(/\D/g,"").slice(0,11);return e.length<=3?e:e.length<=6?e.slice(0,3)+"."+e.slice(3):e.length<=9?e.slice(0,3)+"."+e.slice(3,6)+"."+e.slice(6):e.slice(0,3)+"."+e.slice(3,6)+"."+e.slice(6,9)+"-"+e.slice(9)}function vt(n){var e=String(n||"").replace(/\D/g,"").slice(0,11);return e.length<=2?e.length?"("+e:"":e.length<=6?"("+e.slice(0,2)+") "+e.slice(2):e.length<=10?"("+e.slice(0,2)+") "+e.slice(2,6)+"-"+e.slice(6):"("+e.slice(0,2)+") "+e.slice(2,7)+"-"+e.slice(7)}function Ct(n){var e=String(n||"").replace(/\D/g,"").slice(0,8);return e.length<=5?e:e.slice(0,5)+"-"+e.slice(5)}function ot(n,e){var r=String(n||"").replace(/\D/g,"");if(r.length!==8){e(null);return}try{fetch("https://viacep.com.br/ws/"+r+"/json/",{headers:{Accept:"application/json"}}).then(function(m){return m.json()}).then(function(m){if(!m||m.erro){e(null);return}e({logradouro:m.logradouro||"",bairro:m.bairro||"",cidade:m.localidade||"",estado:m.uf||""})}).catch(function(){e(null)})}catch{e(null)}}var cn={mail:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',doc:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 12h8v2H8zm0 4h5v2H8z"/></svg>',phone:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>',pin:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',pix:'<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M11.917 11.71a2.046 2.046 0 0 1-1.454-.602l-2.1-2.1a.4.4 0 0 0-.551 0l-2.108 2.108a2.044 2.044 0 0 1-1.454.602h-.414l2.66 2.66c.83.83 2.177.83 3.007 0l2.667-2.668h-.253zM4.25 4.282c.55 0 1.066.214 1.454.602l2.108 2.108a.39.39 0 0 0 .552 0l2.1-2.1a2.044 2.044 0 0 1 1.453-.602h.253L9.503 1.623a2.127 2.127 0 0 0-3.007 0l-2.66 2.66h.414z"/><path d="m14.377 6.496-1.612-1.612a.307.307 0 0 1-.114.023h-.733c-.379 0-.75.154-1.017.422l-2.1 2.1a1.005 1.005 0 0 1-1.425 0L5.268 5.32a1.448 1.448 0 0 0-1.018-.422h-.9a.306.306 0 0 1-.109-.021L1.623 6.496c-.83.83-.83 2.177 0 3.008l1.618 1.618a.305.305 0 0 1 .108-.022h.901c.38 0 .75-.153 1.018-.421L7.375 8.57a1.034 1.034 0 0 1 1.426 0l2.1 2.1c.267.268.638.421 1.017.421h.733c.04 0 .079.01.114.024l1.612-1.612c.83-.83.83-2.178 0-3.008z"/></svg>',cardBig:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>',barcode:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 6h2v12H2zm3 0h1v12H5zm2 0h3v12H7zm4 0h1v12h-1zm3 0h2v12h-2zm3 0h1v12h-1zm2 0h3v12h-3z"/></svg>',editPencil:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>'};function Et(n){var e=n?' value="'+N(n)+'"':"";return'<section class="mm-op-form-col"><h2 class="mm-id-h2">Falta pouco. Onde entregar?</h2><p class="mm-id-sub">Preencha seus dados e o endereço de entrega — o frete é calculado automaticamente.</p><form class="mm-op-form" data-mm-act="onepage-submit" novalidate><div class="mm-op-card"><h3 class="mm-op-card-title">'+cn.user+'<span>Quem vai receber</span></h3><div class="mm-op-grid-2"><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+cn.mail+'</span><input type="email" id="mm-op-email" class="mm-input" placeholder="seu@email.com" autocomplete="email" inputmode="email" required'+e+'></div><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+cn.user+'</span><input type="text" id="mm-op-nome" class="mm-input" placeholder="Nome completo" autocomplete="name" required></div><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+cn.doc+'</span><input type="tel" id="mm-op-cpf" class="mm-input" placeholder="CPF" inputmode="numeric" autocomplete="off" maxlength="14" required></div><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+cn.phone+'</span><input type="tel" id="mm-op-tel" class="mm-input" placeholder="(11) 91234-5678" inputmode="tel" autocomplete="tel" maxlength="15" required></div></div><p class="mm-op-microcopy-soft">Usamos seus dados só pra emitir nota fiscal e te avisar da entrega.</p></div><div class="mm-op-card"><h3 class="mm-op-card-title">'+cn.pin+'<span>Endereço de entrega</span></h3><div class="mm-op-grid-2"><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+cn.pin+'</span><input type="tel" id="mm-op-cep" class="mm-input" placeholder="CEP — 00000-000" inputmode="numeric" autocomplete="postal-code" maxlength="9" required><span class="mm-input-status" id="mm-op-cep-status" aria-live="polite"></span></div><a class="mm-op-cep-help" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+cn.home+'</span><input type="text" id="mm-op-rua" class="mm-input" placeholder="Rua, Av, Travessa..." autocomplete="address-line1" required></div><div class="mm-input-wrap"><input type="tel" id="mm-op-num" class="mm-input mm-input-noicon" placeholder="Número" inputmode="numeric" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-comp" class="mm-input mm-input-noicon" placeholder="Complemento (opcional)" autocomplete="address-line2"></div><div class="mm-input-wrap mm-op-col-2"><input type="text" id="mm-op-bairro" class="mm-input mm-input-noicon" placeholder="Bairro" autocomplete="address-level3" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-cidade" class="mm-input mm-input-noicon" placeholder="Cidade" autocomplete="address-level2" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-uf" class="mm-input mm-input-noicon" placeholder="UF" maxlength="2" autocomplete="address-level1" required></div></div><div class="mm-op-frete" id="mm-op-frete-slot"></div></div><button type="submit" class="mm-cta mm-op-cta">Última etapa: pagamento'+F.arrow+'</button><p class="mm-id-microcopy mm-op-cta-sub">'+F.lock+'<span>Você revisa tudo antes de finalizar</span></p></form><div class="mm-trust mm-id-trust"><span class="mm-trust-item">'+F.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+F.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+F.shield+"<span>Garantia 12 meses</span></span></div></section>"}function ct(n,e){var r=document.getElementById("mm-layout");if(r)return r.parentElement!==k&&k.insertBefore(r,k.firstChild),r;var m=document.createElement("div");return m.id="mm-layout",m.classList.add("mm-id-layout"),m.classList.add("mm-op-layout"),m.innerHTML=Fn("delivery")+'<div class="mm-grid mm-id-grid mm-op-grid">'+Et(e)+Gn(n)+"</div>",k.insertBefore(m,k.firstChild),document.body.classList.add("mm-checkout-rebuild"),k.classList.add("mm-shadow-mode"),document.documentElement.classList.remove("mm-cart-loading"),m}function it(n){var e=document.getElementById("mm-op-frete-slot");if(e){if(n==="loading"){e.innerHTML='<div class="mm-op-frete-loading"><div class="mm-op-frete-spinner"></div><span>Calculando frete...</span></div>';return}if(n==="error"){e.innerHTML='<div class="mm-op-frete-error"><span>Não conseguimos calcular o frete. Confira o CEP e tente novamente.</span></div>';return}var r=n.value===0,m=r?'<strong class="mm-op-frete-value is-free">Grátis</strong>':'<strong class="mm-op-frete-value">'+L(n.value)+"</strong>",t=n.name?'<span class="mm-op-frete-name">'+N(n.name)+"</span>":"",a=n.deadline?'<span class="mm-op-frete-deadline">Entrega em '+N(n.deadline)+"</span>":"",s=n.city?'<span class="mm-op-frete-city">para '+N(n.city)+"</span>":"",d="";if(n.options&&n.options.length>1){d='<div class="mm-op-frete-options"><button type="button" class="mm-op-frete-toggle" data-mm-act="toggle-frete-opts" aria-expanded="false">Ver outras opções ('+n.options.length+')</button><div class="mm-op-frete-options-list" hidden>';for(var h=0;h<n.options.length;h++){var b=n.options[h],q=b.isSelected?" is-selected":"",P=b.isFree?'<span class="mm-op-frete-opt-value is-free">Grátis</span>':'<span class="mm-op-frete-opt-value">'+L(b.value)+"</span>";d+='<button type="button" class="mm-op-frete-opt'+q+'" data-mm-act="op-ship-select" data-ship-id="'+N(b.id)+'" aria-pressed="'+(b.isSelected?"true":"false")+'"><span class="mm-op-frete-opt-radio" aria-hidden="true"><span></span></span><span class="mm-op-frete-opt-body"><span class="mm-op-frete-opt-name">'+N(b.name||"Padrão")+"</span>"+(b.deadline?'<span class="mm-op-frete-opt-deadline">'+N(b.deadline)+"</span>":"")+"</span>"+P+"</button>"}d+="</div></div>"}e.innerHTML='<div class="mm-op-frete-card'+(r?" is-free":"")+'"><div class="mm-op-frete-icon">'+F.truck+'</div><div class="mm-op-frete-body"><div class="mm-op-frete-row">'+t+m+"</div>"+a+s+"</div></div>"+d}}function Un(){function n(Q){if(!Q)return"";var W=Q.match(/(\d+(?:\s*[aà]\s*\d+)?)\s*dias?(?:\s*\([^)]+\))?\s*([úu]teis)?/i);return W?W[1].replace(/\s+/g," ")+" dias úteis":""}function e(Q){for(var W=[],ln=Q.querySelectorAll(".servico-frete"),pn=0;pn<ln.length;pn++){var fn=ln[pn],bn=fn.querySelector('input[type="radio"]'),yn=fn.querySelector(".dias-entrega"),An=parseFloat(fn.getAttribute("data-valor-frete")||"0"),Sn=fn.getAttribute("data-servico-frete")||"",Dn=yn?yn.textContent.trim():"",Rn=Dn.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i);W.push({id:bn?bn.value:"",name:Sn,deadline:Rn?Rn[1].replace(/\s+/g," "):Dn,value:An,isFree:An===0,isSelected:bn?bn.checked:!1})}return W}var r=k.querySelector(".frete-calculado");if(r&&r.textContent.trim()){var m=e(r),t=r.querySelector(".frete-location .city"),a=t?t.textContent.trim():"",s=m.filter(function(Q){return Q.isSelected})[0]||m[0];if(s)return{value:s.value,name:s.name,deadline:s.deadline,city:a,options:m};var d=r.querySelector(".info-frete-selec .info-title span, .info-title span"),h=r.querySelector(".info-frete-selec .dias-entrega, .dias-entrega"),b=r.querySelector(".value.valor-frete, .valor-frete .value"),q=r.textContent,P=null;if(b&&(/gr[aá]tis/i.test(b.textContent)?P=0:P=X(b.textContent)),P===null&&(/gr[aá]tis/i.test(q)?P=0:P=X(q)||null),P!==null)return{value:P,name:d?d.textContent.trim():"",deadline:n(h?h.textContent:q),city:a,options:[]}}var H=k.querySelector(".line-entrega"),_=k.querySelector(".value.valor-frete, .valor-frete .value");if(H||_){var G=((H||_).textContent||"").trim(),U=en(),J=U&&U.shippingName||"",tn=U&&U.shippingDeadline||"",sn=U&&U.shippingCity||"",dn=U?U.shippingOptions||[]:[];if(G){var wn=(k.querySelector(".nome-servico-frete, .info-frete-selec .info-title span")||{}).textContent||"",qn=(k.querySelector(".info-entrega, .prazo-entrega, .line-entrega .sub, .info-frete-selec .dias-entrega")||{}).textContent||"",S=n(qn)||n(G)||tn,E=wn.trim()||J;if(/gr[aá]tis/i.test(G))return{value:0,deadline:S,name:E,city:sn,options:dn};var V=X(G);if(V>0)return{value:V,deadline:S,name:E,city:sn,options:dn}}if(U&&U.shipping!==null&&U.shipping!==void 0)return{value:U.shipping,deadline:tn,name:J,city:sn,options:dn}}return null}function Ln(){var n=document.getElementById("mm-op-cep");if(!n)return;var e=(n.value||"").replace(/\D/g,"");if(e.length!==8)return;if(Ln._lastCep===e){var r=document.getElementById("mm-op-frete-slot");if(r&&r.querySelector(".mm-op-frete-card"))return}Ln._lastCep=e;var m=(Ln._token||0)+1;Ln._token=m,tt(e);var t=k.querySelector("#cep, .input-cep");t&&(t.value=hn(e),Hn(t)),it("loading");try{window.Zord&&window.Zord.Cart&&typeof window.Zord.Cart.calculaFreteCarrinho=="function"&&window.Zord.Cart.calculaFreteCarrinho()}catch{}var a=0,s=18;function d(){if(Ln._token===m){a++;var h=Un();if(h){it(h);var b=en();b&&(b.shipping=h.value,b.shippingDeadline=h.deadline,b.shippingName=h.name||"",b.shippingCity=h.city||"",b.shippingOptions=h.options||[],Y.set(j,JSON.stringify(b)),vn(b));return}a<s?setTimeout(d,350):it("error")}}setTimeout(d,400)}function $n(){var n=document.getElementById("mm-layout");if(!n||n._mmOpBound)return;n._mmOpBound=!0,n.addEventListener("click",function(r){var m=r.target.closest('[data-mm-act="toggle-frete-opts"]');if(m){r.preventDefault();var t=m.parentElement.querySelector(".mm-op-frete-options-list");if(t){var a=t.hasAttribute("hidden");a?t.removeAttribute("hidden"):t.setAttribute("hidden",""),m.setAttribute("aria-expanded",a?"true":"false"),m.textContent=a?"Ocultar opções":"Ver outras opções"}return}var s=r.target.closest('[data-mm-act="op-ship-select"]');if(s){r.preventDefault();var d=s.getAttribute("data-ship-id");if(!d)return;var h=k.querySelector('.servico-frete input[type="radio"][value="'+d+'"]');if(!h){console.warn("[mm-op] modalidade não encontrada no DOM:",d);return}for(var b=n.querySelectorAll(".mm-op-frete-opt"),q=0;q<b.length;q++){var P=b[q],H=P.getAttribute("data-ship-id")===d;P.classList.toggle("is-selected",H),P.setAttribute("aria-pressed",H?"true":"false")}h.checked=!0,h.click(),setTimeout(function(){var _=Un();if(_){it(_);var G=en();G&&(G.shipping=_.value,G.shippingDeadline=_.deadline,G.shippingName=_.name||"",G.shippingOptions=_.options||[],Y.set(j,JSON.stringify(G)),vn(G))}},700);return}}),n.addEventListener("submit",function(r){var m=r.target.closest('[data-mm-act="onepage-submit"]');if(m){r.preventDefault();var t={email:(document.getElementById("mm-op-email")||{}).value||"",nome:(document.getElementById("mm-op-nome")||{}).value||"",cpf:(document.getElementById("mm-op-cpf")||{}).value||"",tel:(document.getElementById("mm-op-tel")||{}).value||"",cep:(document.getElementById("mm-op-cep")||{}).value||"",rua:(document.getElementById("mm-op-rua")||{}).value||"",num:(document.getElementById("mm-op-num")||{}).value||"",comp:(document.getElementById("mm-op-comp")||{}).value||"",bairro:(document.getElementById("mm-op-bairro")||{}).value||"",cidade:(document.getElementById("mm-op-cidade")||{}).value||"",uf:(document.getElementById("mm-op-uf")||{}).value||""},a=[];if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email.trim())||a.push("mm-op-email"),t.nome.trim().split(/\s+/).length<2&&a.push("mm-op-nome"),t.cpf.replace(/\D/g,"").length!==11&&a.push("mm-op-cpf"),t.tel.replace(/\D/g,"").length<10&&a.push("mm-op-tel"),t.cep.replace(/\D/g,"").length!==8&&a.push("mm-op-cep"),t.rua.trim()||a.push("mm-op-rua"),t.num.trim()||a.push("mm-op-num"),t.bairro.trim()||a.push("mm-op-bairro"),t.cidade.trim()||a.push("mm-op-cidade"),t.uf.trim()||a.push("mm-op-uf"),a.length){a.forEach(function(h){var b=document.getElementById(h);b&&(b.classList.add("mm-input-error"),setTimeout(function(){b.classList.remove("mm-input-error")},1800))});var s=document.getElementById(a[0]);s&&(s.focus(),s.scrollIntoView({block:"center",behavior:"smooth"}));return}var d=m.querySelector(".mm-cta");d&&d.classList.add("is-loading"),Y.set("mm_user_email",t.email.trim()),ut(t)}}),n.addEventListener("input",function(r){var m=r.target;if(m){if(m.dataset&&m.dataset.mmCepFill==="1"&&delete m.dataset.mmCepFill,m.id==="mm-op-cpf")m.value=Jn(m.value);else if(m.id==="mm-op-tel")m.value=vt(m.value);else if(m.id==="mm-op-cep"){m.value=Ct(m.value);var t=m.value.replace(/\D/g,"");t.length===8&&dt(t)}else m.id==="mm-op-uf"&&(m.value=(m.value||"").replace(/[^A-Za-z]/g,"").toUpperCase().slice(0,2));m.id&&m.id.indexOf("mm-op-")===0&&($n._draftTimer&&clearTimeout($n._draftTimer),$n._draftTimer=setTimeout(on,400))}});function e(){$n._draftTimer&&(clearTimeout($n._draftTimer),$n._draftTimer=null),on()}n.addEventListener("blur",function(r){var m=r.target;m&&m.id&&m.id.indexOf("mm-op-")===0&&e()},!0),window.addEventListener("beforeunload",e)}function dt(n){var e=document.getElementById("mm-op-cep-status");e&&(e.className="mm-input-status is-loading",e.textContent="Buscando..."),ot(n,function(r){if(e&&(e.className="mm-input-status"),!r){e&&(e.className="mm-input-status is-error",e.textContent="CEP não encontrado",setTimeout(function(){e.className="mm-input-status",e.textContent=""},2500));return}e&&(e.className="mm-input-status is-ok",e.innerHTML=F.check,setTimeout(function(){e.className="mm-input-status",e.innerHTML=""},1800));var m=[["mm-op-rua",r.logradouro],["mm-op-bairro",r.bairro],["mm-op-cidade",r.cidade],["mm-op-uf",r.estado]];m.forEach(function(a){var s=document.getElementById(a[0]);!s||!a[1]||(!s.value||s.dataset.mmCepFill==="1")&&(s.value=a[1],s.dataset.mmCepFill="1")});var t=document.getElementById("mm-op-num");t&&setTimeout(function(){t.focus()},100),Ln._t&&clearTimeout(Ln._t),Ln._t=setTimeout(Ln,200)})}function On(n){if(!document.getElementById("mm-op-overlay")){var e=document.createElement("div");e.id="mm-op-overlay",e.innerHTML='<div class="mm-op-overlay-card"><div class="mm-op-overlay-spinner"></div><p class="mm-op-overlay-text">'+N(n||"Processando...")+"</p></div>",document.body.appendChild(e)}}function ut(n){var e=n.nome.trim(),r=n.email.trim(),m=n.rua.trim(),t=n.bairro.trim(),a=n.cidade.trim(),s=n.uf.trim(),d=hn(n.cep.replace(/\D/g,""));Y.set("mm_user_email",r);var h=function(b,q){var P=k.querySelector(b);if(!P)return!1;try{var H=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;H.call(P,q)}catch{P.value=q}return P.dispatchEvent(new Event("input",{bubbles:!0})),P.dispatchEvent(new Event("change",{bubbles:!0})),P.dispatchEvent(new Event("blur",{bubbles:!0})),!0};h("#nome-completo_2",e),h("#cpf_2",n.cpf),h("#email_3",r),h("#telefone_2",n.tel),h("#cep",d),h("#destinatario",e),h("#logradouro",m),h("#numero",n.num),h("#complemento",n.comp),h("#bairro",t),h("#cidade",a),h("#estado",s),On("Indo para o pagamento..."),setTimeout(function(){var b=document.getElementById("mm-layout");b&&(b.style.display="none"),k.classList.remove("mm-shadow-mode");function q(_){var G=k.querySelector("#"+_);return G?G.closest("form"):null}function P(){var _=q("nome-completo_2");return _&&typeof _.requestSubmit=="function"?(_.requestSubmit(),!0):_?(_.submit(),!0):!1}function H(){var _=q("cep");return _&&typeof _.requestSubmit=="function"?(_.requestSubmit(),!0):_?(_.submit(),!0):!1}setTimeout(function(){P(),setTimeout(function(){H();var _=0;function G(){_++;var U=document.querySelector('input[name="forma-pagto"], #forma-pagto-pix, #forma-pagto-cartao, #forma-pagto-boleto');if(U&&U.offsetParent!==null){try{p(n)}catch{var J=document.getElementById("mm-op-overlay");J&&J.remove();var tn=document.getElementById("mm-layout");tn&&(tn.style.display="none")}return}if(_<30)setTimeout(G,250);else{var sn=document.getElementById("mm-op-overlay");sn&&sn.remove()}}setTimeout(G,800)},1500)},150)},100)}function o(){var n={pix:null,cartao:null,boleto:null},e=[];try{e=window.Zord&&window.Zord.Calculo&&window.Zord.Calculo.FormasPagamentoPedido||[]}catch{}e.forEach(function(P){var H=P.formaPagamento&&P.formaPagamento.id,_=P.formaPagamento&&P.formaPagamento.isCartao,G=P.condicoes||[];!G.length||!_||(!n.cartao||G.length>n.cartao.condicoes.length)&&(n.cartao={formaId:H,valorTotal:G[0].valorTotal,condicoes:G.map(function(U){return{nome:U.condicaoPagamento&&U.condicaoPagamento.nome,numParcelas:U.condicaoPagamento&&U.condicaoPagamento.numeroParcelas,valorParcela:U.valorParcela,valorTotal:U.valorTotal}})})});function r(P){if(!P)return 0;var H=P.getAttribute&&P.getAttribute("data-valor-total");if(H){var _=parseFloat(H);if(_>0)return _}var G=(P.textContent||"").replace(/[^\d,.]/g,"");return G.indexOf(",")!==-1&&(G=G.replace(/\./g,"").replace(",",".")),parseFloat(G)||0}var m=document.querySelector("#valor-total-pedido-pix, .valor-total-pix[data-valor-total]"),t=r(m);if(t>0)n.pix={formaId:17,valorTotal:t};else{var a=e.find&&e.find(function(P){return P.formaPagamento&&P.formaPagamento.id===17});a&&a.condicoes&&a.condicoes[0]&&(n.pix={formaId:17,valorTotal:a.condicoes[0].valorTotal})}var s=document.querySelector("#valor-total-pedido-boleto, .valor-total-boleto[data-valor-total]"),d=r(s);if(d>0)n.boleto={valorTotal:d};else{var h=e.find&&e.find(function(P){var H=P.formaPagamento&&P.formaPagamento.id,_=P.formaPagamento&&P.formaPagamento.isCartao;return!_&&H!==17&&P.condicoes&&P.condicoes.length});h&&(n.boleto={formaId:h.formaPagamento.id,valorTotal:h.condicoes[0].valorTotal})}if(!n.cartao){var b=document.querySelector(".valor-parcela-cartao");if(b){var q=r(b);q>0&&(n.cartao={valorTotal:q*12,condicoes:[]})}}return n}function p(n){var e=en(),r=o();k.classList.add("mm-shadow-mode"),document.body.classList.add("mm-checkout-rebuild");var m=document.getElementById("mm-layout");(!m||m.parentElement!==k)&&(m&&m.parentElement&&m.parentElement.removeChild(m),m=document.createElement("div"),m.id="mm-layout",k.insertBefore(m,k.firstChild)),m.className="mm-op-layout mm-op-step3-layout",m.style.display="",m.innerHTML=c(e,n,r),document.documentElement.classList.remove("mm-cart-loading");var t=document.getElementById("mm-op-overlay");t&&t.remove();try{window.scrollTo({top:0,behavior:"smooth"})}catch{window.scrollTo(0,0)}R(n,r)}function c(n,e,r){var m=typeof renderGlobalFooter=="function"?renderGlobalFooter():"";return Fn("payment")+'<main class="mm-op-main"><div class="mm-op-step3-grid"><section class="mm-op-step3-left">'+M(r)+A()+'</section><aside class="mm-op-step3-sum-wrap">'+y(e)+D(n,r,"pix")+"</aside></div></main>"+m}function y(n){var e=n||{},r=N(e.nome||""),m=N(e.email||""),t=N(e.cpf||""),a=N(e.tel||""),s=N(e.rua||""),d=N(e.num||""),h=e.comp?", "+N(e.comp):"",b=N(e.bairro||""),q=N(e.cidade||""),P=N(e.uf||""),H=N(e.cep||"");return'<div class="mm-op-step3-completed"><div class="mm-op-completed-card" data-section="dados"><div class="mm-op-completed-head"><span class="mm-op-completed-check">'+F.check+'</span><h3 class="mm-op-completed-title">Dados pessoais</h3><a href="/checkout/onepage" class="mm-op-completed-edit" data-mm-act="edit-dados" aria-label="Editar dados">'+cn.editPencil+' Editar</a></div><dl class="mm-op-completed-body">'+(r?"<div><dt>Nome</dt><dd>"+r+"</dd></div>":"")+(m?"<div><dt>E-mail</dt><dd>"+m+"</dd></div>":"")+(t?"<div><dt>CPF</dt><dd>"+t+"</dd></div>":"")+(a?"<div><dt>Telefone</dt><dd>"+a+"</dd></div>":"")+'</dl></div><div class="mm-op-completed-card" data-section="endereco"><div class="mm-op-completed-head"><span class="mm-op-completed-check">'+F.check+'</span><h3 class="mm-op-completed-title">Endereço de entrega</h3><a href="/checkout/onepage" class="mm-op-completed-edit" data-mm-act="edit-endereco" aria-label="Editar endereço">'+cn.editPencil+' Editar</a></div><address class="mm-op-completed-address">'+s+", "+d+h+"<br>"+b+" — "+q+"/"+P+"<br>"+(H?"CEP "+H:"")+"</address></div></div>"}function M(n){var e=n.pix?n.pix.valorTotal:0,r=n.cartao?n.cartao.valorTotal:0,m=n.boleto?n.boleto.valorTotal:0,t=r>e?r-e:0,a=null;n.cartao&&n.cartao.condicoes&&n.cartao.condicoes.length&&(a=n.cartao.condicoes[n.cartao.condicoes.length-1]);var s=a?"até "+a.numParcelas+"x de "+L(a.valorParcela)+" sem juros":r>0?"até 12x sem juros":"Cartão de crédito",d='<label class="mm-op-pay-radio is-active" data-forma="pix"><input type="radio" name="mm-pay" value="pix" checked><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+cn.pix+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">PIX</span><span class="mm-op-pay-sub">Aprovação instantânea · em 1 minuto</span></div><div class="mm-op-pay-price">'+(t>0?'<span class="mm-op-pay-badge-save">Economize '+L(t)+"</span>":"")+'<span class="mm-op-pay-amount">'+L(e)+'</span></div></div><div class="mm-op-pay-detail"><ul class="mm-op-pay-benefits"><li>'+F.check+"<span>QR Code e Copia-e-Cola após confirmar</span></li><li>"+F.check+"<span>Pedido aprovado em até 1 minuto</span></li><li>"+F.check+"<span>Pagamento 100% seguro · sem dados de cartão</span></li></ul></div></label>",h='<div class="mm-op-pay-brands"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-visa.svg" alt="Visa" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-mastercard.svg" alt="Mastercard" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-american-express.svg" alt="American Express" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-elo.svg" alt="Elo" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-hipercard.svg" alt="Hipercard" width="32" height="20"></div>',b='<span class="mm-op-req" aria-hidden="true">*</span>';function q(G){return'<span class="mm-op-field-err" id="'+G+'-err" role="alert" aria-live="polite"></span>'}var P='<div class="mm-op-card-form"><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-num">Número do cartão'+b+'</label><div class="mm-input-wrap mm-input-wrap-card"><span class="mm-input-icon" aria-hidden="true">'+F.card+'</span><input id="mm-pay-card-num" type="tel" class="mm-input" inputmode="numeric" autocomplete="off" data-mmac="cc-number" placeholder="0000 0000 0000 0000" maxlength="23" aria-describedby="mm-pay-card-num-err" aria-required="true" disabled><span class="mm-op-card-brand-detected" aria-live="polite"></span></div>'+q("mm-pay-card-num")+'</div><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-name">Nome impresso no cartão'+b+'</label><input id="mm-pay-card-name" type="text" class="mm-input mm-input-noicon" autocomplete="off" data-mmac="cc-name" placeholder="Como aparece no cartão" maxlength="100" aria-describedby="mm-pay-card-name-err" aria-required="true" disabled>'+q("mm-pay-card-name")+'</div><div class="mm-op-card-field mm-op-card-field-half"><label for="mm-pay-card-exp">Validade'+b+'</label><input id="mm-pay-card-exp" type="tel" class="mm-input mm-input-noicon" inputmode="numeric" autocomplete="off" data-mmac="cc-exp" placeholder="MM/AA" maxlength="5" aria-describedby="mm-pay-card-exp-err" aria-required="true" disabled>'+q("mm-pay-card-exp")+'</div><div class="mm-op-card-field mm-op-card-field-half"><label for="mm-pay-card-cvv">CVV'+b+'</label><input id="mm-pay-card-cvv" type="tel" class="mm-input mm-input-noicon" inputmode="numeric" autocomplete="off" data-mmac="cc-csc" placeholder="000" maxlength="4" aria-describedby="mm-pay-card-cvv-err" aria-required="true" disabled>'+q("mm-pay-card-cvv")+'</div><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-installments">Condições de pagamento'+b+'</label><select id="mm-pay-card-installments" class="mm-input mm-input-noicon mm-op-card-installments" aria-describedby="mm-pay-card-installments-err" aria-required="true" disabled><option value="">Digite o cartão pra ver as condições</option></select>'+q("mm-pay-card-installments")+"</div></div>",H='<label class="mm-op-pay-radio" data-forma="cartao"><input type="radio" name="mm-pay" value="cartao"><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+cn.cardBig+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">Cartão de Crédito</span><span class="mm-op-pay-sub">'+N(s)+'</span></div><div class="mm-op-pay-price"><span class="mm-op-pay-amount">'+L(r)+'</span></div></div><div class="mm-op-pay-detail">'+h+P+"</div></label>",_='<label class="mm-op-pay-radio" data-forma="boleto"><input type="radio" name="mm-pay" value="boleto"><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+cn.barcode+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">Boleto Bancário</span><span class="mm-op-pay-sub">Aprovação em 1 a 3 dias úteis</span></div><div class="mm-op-pay-price"><span class="mm-op-pay-amount">'+L(m)+'</span></div></div><div class="mm-op-pay-detail"><ul class="mm-op-pay-benefits"><li>'+F.check+"<span>Código de barras enviado por e-mail</span></li><li>"+F.check+"<span>Pagamento em banco, lotérica ou app</span></li><li>"+F.check+"<span>Vencimento em 3 dias úteis</span></li></ul></div></label>";return'<section class="mm-op-step3-card" aria-labelledby="mm-op-step3-h"><div class="mm-op-step3-heading"><h2 id="mm-op-step3-h" class="mm-h">Como você quer pagar?</h2><p class="mm-op-step3-sub">Última etapa · escolha sua forma de pagamento '+(t>0?"· PIX tem desconto de "+L(t):"")+'</p></div><div class="mm-op-pay-radios" role="radiogroup" aria-label="Forma de pagamento">'+d+H+_+'</div><button type="button" class="mm-cta mm-op-cta mm-op-finalizar" data-mm-act="finalizar-compra">'+F.lock+'<span class="mm-op-finalizar-label">Finalizar compra · '+L(e)+'</span></button><p class="mm-op-finalizar-sub">'+F.shield+"<span>Pagamento seguro · criptografia SSL-256 · seus dados não são armazenados</span></p></section>"}function A(){return'<div class="mm-op-trust-payment"><div class="mm-op-trust-payment-row"><span class="mm-trust-item">'+F.lock+'<span>Site 100% seguro</span></span><span class="mm-trust-item">'+F.shield+'<span>Garantia 12 meses</span></span><span class="mm-trust-item">'+F.rotate+'<span>7 dias pra trocar</span></span><span class="mm-trust-item">'+F.whats+'<span>Atendimento humano</span></span></div><p class="mm-op-trust-payment-note">Ao finalizar, você concorda com os <a href="/termos-de-uso" target="_blank" rel="noopener">termos de compra</a> e a <a href="/politica-privacidade" target="_blank" rel="noopener">política de privacidade</a>.</p></div>'}function D(n,e,r){if(!n||!n.items||!n.items.length)return'<aside class="mm-id-sum mm-sum mm-op-step3-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><p class="mm-sum-empty">Não conseguimos carregar o resumo do seu pedido.</p></div></aside>';var m=e.pix?e.pix.valorTotal:0,t=e.cartao?e.cartao.valorTotal:0,a=e.boleto?e.boleto.valorTotal:0,s=t>m?t-m:0,d=r==="pix"?m:r==="boleto"?a:t,h=r==="pix"?"no PIX":r==="boleto"?"no boleto":"no cartão",b=3,q=n.items.slice(0,b),P=n.items.length-b,H=q.map(function(tn){var sn=tn.imgSrc?'<img src="'+N(tn.imgSrc)+'" alt="'+N(tn.name)+'" loading="lazy">':'<div class="mm-id-thumb-placeholder">'+F.box+"</div>",dn=tn.quantity>1?'<strong class="mm-id-thumb-qty">'+tn.quantity+"×</strong> ":"",wn=tn.lineTotalPix>0?tn.lineTotalPix:tn.lineTotal;return'<div class="mm-id-thumb"><div class="mm-id-thumb-img">'+sn+'</div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+dn+N(tn.name)+"</p>"+(tn.variant?'<p class="mm-id-thumb-variant">'+N(tn.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price">'+L(wn)+"</div></div>"}).join("");P>0&&(H+='<div class="mm-id-thumb-more">+ '+P+" "+(P===1?"item":"itens")+" a mais</div>");var _=n.subtotalFull>0?n.subtotalFull:n.subtotalPix,G='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+L(_)+"</span></div>";if(n.shipping!==null&&n.shipping!==void 0){var U=n.shipping===0?'<span class="mm-row-value is-free">'+F.check+" Grátis</span>":'<span class="mm-row-value">'+L(n.shipping)+"</span>";G+='<div class="mm-row"><span class="mm-row-label">Frete'+(n.shippingDeadline?' <span class="mm-row-sub">· '+N(n.shippingDeadline)+"</span>":"")+"</span>"+U+"</div>"}n.discount>0&&(G+='<div class="mm-row"><span class="mm-row-label">Cupom'+(n.couponCode?' <span class="mm-row-sub">· '+N(n.couponCode)+"</span>":"")+'</span><span class="mm-row-value is-discount">− '+L(n.discount)+"</span></div>"),s>0&&r==="pix"&&(G+='<div class="mm-row mm-row-pix-discount"><span class="mm-row-label">'+F.bolt+' Desconto PIX</span><span class="mm-row-value is-discount">− '+L(s)+"</span></div>");var J='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value" data-mm-total>'+L(d)+'</div><div class="mm-total-pix" data-mm-total-sub><span>'+h+"</span></div></div>";return'<aside class="mm-id-sum mm-sum mm-op-step3-sum" data-active-forma="'+N(r)+'"><h2 class="mm-h">Resumo do pedido</h2><div class="mm-sum-card"><div class="mm-id-thumbs">'+H+'</div><div class="mm-sum-rows">'+G+"</div>"+J+"</div></aside>"}function R(n,e){var r=document.getElementById("mm-layout");if(!r||r._mmStep3Bound)return;r._mmStep3Bound=!0;var m=en(),t={activeForma:"pix",cardNumValid:!1,cardBrand:null,cardInstallments:null,submitting:!1};r.addEventListener("click",function(S){var E=S.target.closest(".mm-op-pay-radio");if(E){var V=E.querySelector('input[type="radio"]');V&&!V.checked&&(S.preventDefault(),V.checked=!0,b(E.getAttribute("data-forma")));return}if(S.target.closest('[data-mm-act="finalizar-compra"]')){S.preventDefault(),qn();return}var Q=S.target.closest('[data-mm-act="edit-dados"], [data-mm-act="edit-endereco"]');if(Q){S.preventDefault(),location.reload();return}}),r.addEventListener("input",function(S){var E=S.target;!E||!E.id||(E.id==="mm-pay-card-num"?G(E):E.id==="mm-pay-card-exp"?U(E):E.id==="mm-pay-card-cvv"&&(E.value=(E.value||"").replace(/\D/g,"").slice(0,4)))}),r.addEventListener("change",function(S){if(S.target&&S.target.id==="mm-pay-card-installments"){var E=S.target,V=E.options[E.selectedIndex];V&&V.value&&(t.cardInstallments={numero:parseInt(V.value,10),label:V.textContent||""},sn(V.value),s("mm-pay-card-installments"))}}),r.addEventListener("blur",function(S){var E=S.target;if(!(!E||!E.id)){var V=["mm-pay-card-num","mm-pay-card-name","mm-pay-card-exp","mm-pay-card-cvv"];V.indexOf(E.id)!==-1&&d(E.id)}},!0),r.addEventListener("focus",function(S){var E=S.target;!E||!E.id||/^mm-pay-card-/.test(E.id)&&s(E.id)},!0);function a(S,E){var V=document.getElementById(S),Q=document.getElementById(S+"-err");V&&(V.classList.add("mm-input-error"),V.setAttribute("aria-invalid","true")),Q&&(Q.textContent=E,Q.classList.add("is-visible"))}function s(S){var E=document.getElementById(S),V=document.getElementById(S+"-err");E&&(E.classList.remove("mm-input-error"),E.removeAttribute("aria-invalid")),V&&(V.textContent="",V.classList.remove("is-visible"))}function d(S){var E=document.getElementById(S);if(!E)return!0;var V=(E.value||"").trim();if(S==="mm-pay-card-num"){var Q=V.replace(/\D/g,"");return Q?Q.length<13?(a(S,"Número do cartão incompleto"),!1):h(Q)?(s(S),!0):(a(S,"Número do cartão inválido — confira os dígitos"),!1):(a(S,"Informe o número do cartão"),!1)}if(S==="mm-pay-card-name")return V?V.split(/\s+/).length<2?(a(S,"Use o nome completo como aparece no cartão"),!1):(s(S),!0):(a(S,"Informe o nome impresso no cartão"),!1);if(S==="mm-pay-card-exp"){var W=V.replace(/\D/g,"");if(W.length!==4)return a(S,"Informe a validade no formato MM/AA"),!1;var ln=parseInt(W.slice(0,2),10),pn=parseInt(W.slice(2),10);if(ln<1||ln>12)return a(S,"Mês inválido (01 a 12)"),!1;var fn=new Date,bn=fn.getFullYear()%100,yn=fn.getMonth()+1;return pn<bn||pn===bn&&ln<yn?(a(S,"Cartão expirado"),!1):(s(S),!0)}if(S==="mm-pay-card-cvv"){var An=V.replace(/\D/g,"");return An.length<3?(a(S,"CVV deve ter 3 ou 4 dígitos"),!1):(s(S),!0)}return S==="mm-pay-card-installments"?V?(s(S),!0):(a(S,"Selecione o número de parcelas"),!1):!0}function h(S){for(var E=0,V=!1,Q=S.length-1;Q>=0;Q--){var W=parseInt(S.charAt(Q),10);V&&(W*=2,W>9&&(W-=9)),E+=W,V=!V}return E%10===0}function b(S){if(!(!S||t.activeForma===S)){t.activeForma=S,r.querySelectorAll(".mm-op-pay-radio").forEach(function(W){W.classList.toggle("is-active",W.getAttribute("data-forma")===S)});var E=document.getElementById("forma-pagto-"+S);if(E&&!E.checked)try{E.click()}catch{}var V=r.querySelectorAll(".mm-op-card-form input, .mm-op-card-form select"),Q=S==="cartao";V.forEach(function(W){W.disabled=!Q,Q?W.dataset.mmac&&W.setAttribute("autocomplete",W.dataset.mmac):W.setAttribute("autocomplete","off")}),q(S),S==="cartao"&&setTimeout(function(){var W=document.getElementById("mm-pay-card-num");W&&!W.value&&W.focus()},250)}}function q(S){var E=r.querySelector(".mm-op-step3-sum");if(E){E.setAttribute("data-active-forma",S);var V=e.pix?e.pix.valorTotal:0,Q=e.cartao?e.cartao.valorTotal:0,W=e.boleto?e.boleto.valorTotal:0,ln=Q>V?Q-V:0,pn=S==="pix"?V:S==="boleto"?W:Q,fn=S==="pix"?"no PIX":S==="boleto"?"no boleto":"no cartão",bn=E.querySelector("[data-mm-total]");if(bn){var yn=bn.textContent||"",An=X(yn);An!==pn?P(bn,An,pn,360):bn.textContent=L(pn)}var Sn=E.querySelector("[data-mm-total-sub] span");Sn&&Sn.textContent!==fn&&(Sn.textContent=fn);var Dn=E.querySelector(".mm-sum-rows"),Rn=Dn?Dn.querySelector(".mm-row-pix-discount"):null;if(S==="pix"&&ln>0){if(!Rn&&Dn){var nt=document.createElement("div");nt.innerHTML='<div class="mm-row mm-row-pix-discount"><span class="mm-row-label">'+F.bolt+' Desconto PIX</span><span class="mm-row-value is-discount">− '+L(ln)+"</span></div>",Dn.appendChild(nt.firstChild)}}else Rn&&Rn.remove();H(S)}}function P(S,E,V,Q){S._mmAnimToken&&cancelAnimationFrame(S._mmAnimToken);var W=null,ln=V-E;function pn(fn){W||(W=fn);var bn=fn-W,yn=Math.min(1,bn/Q),An=1-Math.pow(1-yn,3),Sn=E+ln*An;S.textContent=L(Sn),yn<1?S._mmAnimToken=requestAnimationFrame(pn):(S.textContent=L(V),S._mmAnimToken=null)}S._mmAnimToken=requestAnimationFrame(pn)}function H(S){var E=r.querySelector(".mm-op-finalizar-label");if(E){var V=S==="pix"?e.pix&&e.pix.valorTotal:S==="boleto"?e.boleto&&e.boleto.valorTotal:e.cartao&&e.cartao.valorTotal;E.textContent="Finalizar compra · "+L(V||0)}}function _(S){var E=(S||"").replace(/\D/g,"");return E?/^4/.test(E)?"visa":/^(5[1-5]|22[2-9]|2[3-6]|27[01]|2720)/.test(E)?"mastercard":/^3[47]/.test(E)?"amex":/^(4011|4312|4389|4514|4573|5041|5066|5067|509|6277|6362|6363|650|6516|6550)/.test(E)?"elo":/^(606282|384100|384140|384160|606|637095|637568|637599|637609|637612)/.test(E)?"hipercard":null:null}function G(S){var E=(S.value||"").replace(/\D/g,"").slice(0,19),V=E.replace(/(\d{4})(?=\d)/g,"$1 ");if(V!==S.value){var Q=S.selectionStart;S.value=V;try{S.setSelectionRange(Q+1,Q+1)}catch{}}var W=_(E);t.cardBrand=W,t.cardNumValid=E.length>=13;var ln=r.querySelector(".mm-op-card-brand-detected");ln&&(ln.className="mm-op-card-brand-detected"+(W?" is-"+W:""),ln.textContent=W?W.toUpperCase():""),E.length>=6&&(J(E),wn())}function U(S){var E=(S.value||"").replace(/\D/g,"").slice(0,4),V=E.length>2?E.slice(0,2)+"/"+E.slice(2):E;if(S.value=V,E.length===4){var Q=E.slice(0,2),W="20"+E.slice(2);tn("pag-cartao-mes-validade",String(parseInt(Q,10))),tn("pag-cartao-ano-validade",W)}}function J(S){var E=document.getElementById("pag-cartao-numero");if(E){try{var V=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;V.call(E,S)}catch{E.value=S}E.dispatchEvent(new Event("input",{bubbles:!0})),E.dispatchEvent(new Event("change",{bubbles:!0})),E.dispatchEvent(new Event("blur",{bubbles:!0}))}}function tn(S,E){var V=document.getElementById(S);if(V){try{var Q=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;Q.call(V,E)}catch{V.value=E}V.dispatchEvent(new Event("change",{bubbles:!0}))}}function sn(S){tn("pag-cartao-parcela",S)}var dn=null;function wn(){if(dn)return;var S=document.getElementById("pag-cartao-parcela");if(!S)return;var E=document.getElementById("mm-pay-card-installments");if(!E)return;function V(){var Q=S.querySelectorAll("option");if(!(Q.length<=1)){var W="";Q.forEach(function(ln){if(!ln.value){W+='<option value="">Selecione as parcelas</option>';return}W+='<option value="'+N(ln.value)+'">'+N(ln.textContent.trim())+"</option>"}),E.innerHTML=W,E.options.length>1&&(E.selectedIndex=1,t.cardInstallments={numero:parseInt(E.options[1].value,10)||1,label:E.options[1].textContent},sn(E.options[1].value))}}V(),dn=new MutationObserver(V),dn.observe(S,{childList:!0,subtree:!0})}function qn(){if(console.log("[mm-checkout] submitFinalizar() entry",{submitting:t.submitting,activeForma:t.activeForma}),t.submitting)return;var S=t.activeForma,E=r.querySelector(".mm-op-finalizar");if(!E){console.log("[mm-checkout] submitFinalizar: no .mm-op-finalizar btn");return}if(S==="cartao"){var V=["mm-pay-card-num","mm-pay-card-name","mm-pay-card-exp","mm-pay-card-cvv","mm-pay-card-installments"],Q=V.filter(function(rn){return!d(rn)});if(console.log("[mm-checkout] validation",{errorCount:Q.length,errors:Q}),Q.length){var W=document.getElementById(Q[0]);if(W){W.focus();try{W.scrollIntoView({block:"center",behavior:"smooth"})}catch{}}return}var ln=document.getElementById("mm-pay-card-name"),pn=document.getElementById("mm-pay-card-cvv"),fn=document.getElementById("pag-cartao-titular");if(fn){try{var bn=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;bn.call(fn,ln.value.trim())}catch{fn.value=ln.value.trim()}fn.dispatchEvent(new Event("input",{bubbles:!0})),fn.dispatchEvent(new Event("blur",{bubbles:!0}))}var yn=document.getElementById("pag-cartao-vericacao");if(yn){try{var An=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;An.call(yn,pn.value.replace(/\D/g,""))}catch{yn.value=pn.value.replace(/\D/g,"")}yn.dispatchEvent(new Event("input",{bubbles:!0})),yn.dispatchEvent(new Event("blur",{bubbles:!0}))}var Sn=document.getElementById("pag-cartao-cpf");if(Sn&&n&&n.cpf){try{var Dn=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;Dn.call(Sn,n.cpf)}catch{Sn.value=n.cpf}Sn.dispatchEvent(new Event("input",{bubbles:!0})),Sn.dispatchEvent(new Event("blur",{bubbles:!0}))}}t.submitting=!0,E.classList.add("is-loading"),E.setAttribute("aria-busy","true");var Rn=E.querySelector(".mm-op-finalizar-label");if(Rn&&(Rn.textContent="Processando pagamento..."),On("Finalizando seu pedido..."),S==="cartao"){var nt=document.getElementById("mm-pay-card-installments");nt&&nt.value&&sn(nt.value)}window.__mmCheckoutDebug=window.__mmCheckoutDebug||[];function un(rn,En){var zn={t:new Date().toISOString(),msg:rn,data:En};window.__mmCheckoutDebug.push(zn),console.log("[mm-checkout]",rn,En||"")}function mt(){if(un("doSubmit() called",{forma:S}),S==="cartao"){var rn=document.getElementById("aceito-termos-bcash-one-card");rn&&!rn.checked&&(rn.checked=!0,rn.dispatchEvent(new Event("change",{bubbles:!0}))),un("terms",{checked:rn?.checked})}var En=S==="pix"?"form-pag-pix":S==="boleto"?"form-pag-boleto":"form-pag-cartao",zn=document.getElementById(En);if(!zn){un("ERROR: form not found",{formId:En}),alert("Erro interno: formulário de pagamento não encontrado. Recarregue a página."),t.submitting=!1,E.classList.remove("is-loading");var Nn=document.getElementById("mm-op-overlay");Nn&&Nn.remove();return}S==="cartao"&&un("pre-submit cartao state",{numero:document.getElementById("pag-cartao-numero")?.value,bandeira:document.getElementById("pag-cartao-bandeira")?.value,parcela:document.getElementById("pag-cartao-parcela")?.value,titular:document.getElementById("pag-cartao-titular")?.value,mes:document.getElementById("pag-cartao-mes-validade")?.value,ano:document.getElementById("pag-cartao-ano-validade")?.value,cvv:document.getElementById("pag-cartao-vericacao")?.value?.length,cpf:document.getElementById("pag-cartao-cpf")?.value,tokenMp:document.getElementById("pag-cartao-token-mp")?.value?.substring(0,20)});var jn=zn.querySelector('button.button-success, button[type="submit"], input[type="submit"]');if(jn)un("clicking native button",{text:jn.textContent?.trim()}),jn.click();else if(typeof zn.requestSubmit=="function"){un("no native btn, using requestSubmit");try{zn.requestSubmit()}catch(Wn){un("requestSubmit error",Wn.message),zn.submit()}}else un("no native btn, using form.submit()"),zn.submit();setTimeout(function(){if(t.submitting&&location.pathname.indexOf("/onepage")!==-1){un("8s failsafe: still on /onepage, removing overlay"),t.submitting=!1,E.classList.remove("is-loading");var Wn=document.getElementById("mm-op-overlay");Wn&&Wn.remove(),k.classList.remove("mm-shadow-mode"),r&&(r.style.display="none")}},8e3),setTimeout(function(){k.classList.remove("mm-shadow-mode"),r&&(r.style.display="none")},600)}function bt(){t.submitting=!1,E.classList.remove("is-loading"),E.removeAttribute("aria-busy");var rn=E.querySelector(".mm-op-finalizar-label");rn&&(rn.textContent="Finalizar compra");var En=document.getElementById("mm-op-overlay");En&&En.remove()}function zt(){var rn=Date.now(),En=1e4;(function zn(){var Nn=document.getElementById("pag-cartao-token-mp"),jn=Nn?(Nn.value||"").trim():"",Wn=jn&&jn!=="loading..."&&jn.length>10;if(Wn){un("fallback: token ready"),mt();return}if(Date.now()-rn>=En){un("fallback: timeout",{lastVal:jn}),mt();return}setTimeout(zn,200)})()}function Mt(){if(un("generateMpTokenAndSubmit() start"),typeof Mercadopago>"u"){un("Mercadopago global missing, falling back to wait strategy"),zt();return}var rn=document.getElementById("pag-cartao-token-mp"),En=rn?(rn.value||"").trim():"";if(En&&En!=="loading..."&&En.length>10){un("token already present, submitting",{len:En.length}),mt();return}var zn=(document.getElementById("mm-pay-card-num")?.value||"").replace(/\D/g,""),Nn=(document.getElementById("mm-pay-card-exp")?.value||"").replace(/\D/g,""),jn=(document.getElementById("mm-pay-card-cvv")?.value||"").replace(/\D/g,""),Wn=(document.getElementById("mm-pay-card-name")?.value||"").trim(),qt=(n&&n.cpf||document.getElementById("mm-op-cpf")?.value||"").replace(/\D/g,"");if(!zn||!Nn||!jn||!Wn||!qt){un("missing card fields",{num:zn.length,exp:Nn.length,cvv:jn.length,name:!!Wn,doc:qt.length}),alert("Preencha todos os dados do cartão antes de finalizar."),bt();return}var At=Nn.slice(0,2),Ft=Nn.length===4?"20"+Nn.slice(2):Nn.slice(2);un("calling Mercadopago.createToken",{numLen:zn.length,month:At,year:Ft});try{Mercadopago.createToken({cardNumber:zn,securityCode:jn,cardExpirationMonth:At,cardExpirationYear:Ft,cardholderName:Wn,docType:"CPF",docNumber:qt},function(yt,Zn){if(un("createToken callback",{status:yt,hasId:!!(Zn&&Zn.id),err:Zn&&Zn.error}),yt===200||yt===201){if(rn){var Bt=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;Bt.call(rn,Zn.id),rn.dispatchEvent(new Event("input",{bubbles:!0})),rn.dispatchEvent(new Event("change",{bubbles:!0}))}mt()}else{var Tt="Não foi possível validar os dados do cartão.";Zn&&Zn.cause&&Zn.cause[0]&&Zn.cause[0].description&&(Tt=Zn.cause[0].description),alert(Tt),bt()}})}catch(yt){un("createToken exception",yt.message),zt()}}S==="cartao"?Mt():setTimeout(mt,500)}}if(T){let n=function(r){if(r=r||0,r>30){e();return}var m=k.querySelector("#cep, .box-area-dados, #nome-completo_2");m||r>8?e():setTimeout(function(){n(r+1)},250)},e=function(){var r=en(),m=Y.get("mm_user_email")||"";Y.remove("mm_checkout_mode"),typeof window._mmDraftDebug>"u"&&(window._mmDraftDebug=!0),ct(r,m),$n();var t=Qn();r&&r.shipping!==null&&r.shipping!==void 0&&it({value:r.shipping,name:r.shippingName||"",deadline:r.shippingDeadline||"",city:r.shippingCity||"",options:r.shippingOptions||[]});try{var a=Array.from(k.querySelectorAll("a, button")).find(function(h){var b=(h.textContent||"").toLowerCase();return b.indexOf("sem cadastro")!==-1&&h.offsetParent!==null});a&&!a.classList.contains("active")&&a.click()}catch{}(!r||!r.items||r.items.length===0)&&Pn(function(h){h&&h.items&&h.items.length>0&&vn(h)});var s=Y.get(O);if(s&&s.length===8){var d=document.getElementById("mm-op-cep");d&&(d.value=hn(s),setTimeout(function(){dt(s)},400))}setTimeout(function(){if(!("ontouchstart"in window))for(var h=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep"],b=0;b<h.length;b++){var q=document.getElementById(h[b]);if(q&&!q.value){q.focus();break}}},350)};n()}if(z){document.documentElement.classList.remove("mm-cart-loading");var Z=k.querySelector('input[placeholder*="numero do cart" i]');Z&&(Z.inputMode="numeric");var K=k.querySelector('input[placeholder*="000" i]');K&&(!K.maxLength||K.maxLength<=4)&&(K.inputMode="numeric")}setTimeout(function(){document.documentElement.classList.contains("mm-cart-loading")&&(console.warn("[mm-cart] failsafe: removing mm-cart-loading after 2s timeout"),document.documentElement.classList.remove("mm-cart-loading"))},2e3)})()})();
