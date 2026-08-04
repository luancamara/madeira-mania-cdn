(function(){"use strict";(function(){if(!document.getElementById("mm-global-css")){var S=document.createElement("style");S.id="mm-global-css",S.textContent=`/* =============================================
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
`,document.head.appendChild(S)}})(),(function(){if(!document.getElementById("mm-produto-css")){var S=document.createElement("style");S.id="mm-produto-css",S.textContent=`/* =============================================
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
`,document.head.appendChild(S)}})(),(function(){if(!document.getElementById("mm-variacoes-css")){var S=document.createElement("style");S.id="mm-variacoes-css",S.textContent=`/* ============================================
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
}`,document.head.appendChild(S)}})(),(function(){if(!document.getElementById("mm-cart-sheet-css")){var S=document.createElement("style");S.id="mm-cart-sheet-css",S.textContent=`/* =============================================
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
`,document.head.appendChild(S)}})(),(function(){if(!document.getElementById("mm-checkout-cro-css")){var S=document.createElement("style");S.id="mm-checkout-cro-css",S.textContent=`/* =============================================
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
`,document.head.appendChild(S)}})(),(function(){if(!document.getElementById("mm-pedidos-css")){var S=document.createElement("style");S.id="mm-pedidos-css",S.textContent=`/* =============================================
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
`,document.head.appendChild(S)}})(),(function(){if(!document.getElementById("mm-ticker-css")){var S=document.createElement("style");S.id="mm-ticker-css",S.textContent=`.ticker-bar {
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
  }`,document.head.appendChild(S)}})(),(function(){if(!document.getElementById("mm-header-css")){var S=document.createElement("style");S.id="mm-header-css",S.textContent=`/* =============================================
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
`,document.head.appendChild(S)}})(),(function(){if(!document.getElementById("tickerBar")){var S=document.createElement("div");S.innerHTML=`<div class="ticker-bar" id="tickerBar">
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
</div>`;var R=S.firstElementChild;document.body.insertBefore(R,document.body.firstChild)}})(),(function(){var S=location.pathname;if(/^\/checkout\//i.test(S))return;try{if(localStorage.getItem("mm_no_tracking")==="1")return}catch{}if(window._uxa||document.querySelector('script[src*="contentsquare.net"]'))return;function R(){if(!(window._uxa||document.querySelector('script[src*="contentsquare.net"]'))){var j=document.createElement("script");j.src="https://t.contentsquare.net/uxa/7126f355c4bb8.js",j.async=!0,document.head.appendChild(j)}}function N(){"requestIdleCallback"in window?requestIdleCallback(R,{timeout:5e3}):setTimeout(R,2500)}document.readyState==="complete"?N():window.addEventListener("load",N,{once:!0})})(),(function(){var S="vnhd0x9eve";try{if(localStorage.getItem("mm_no_tracking")==="1")return}catch{}if(window.clarity||document.querySelector('script[src*="clarity.ms"]'))return;function R(){window.clarity||(function(j,g,m,l,f,h,b){j[m]=j[m]||function(){(j[m].q=j[m].q||[]).push(arguments)},h=g.createElement(l),h.async=1,h.src="https://www.clarity.ms/tag/"+f,b=g.getElementsByTagName(l)[0],b.parentNode.insertBefore(h,b)})(window,document,"clarity","script",S)}function N(){"requestIdleCallback"in window?requestIdleCallback(R,{timeout:4e3}):setTimeout(R,2e3)}document.readyState==="complete"?N():window.addEventListener("load",N,{once:!0})})(),(function(){if(!document.getElementById("mm-floating-whatsapp")){var R="5511915299488",N=(document.querySelector("#prod-nome")||{}).value,j=window.location.origin+window.location.pathname+(/^#derivacao=/.test(window.location.hash)?window.location.hash:""),g;N?g="Olá! Tenho interesse no "+N.trim()+". "+j:g="Olá! Vim pelo site e gostaria de ajuda. "+j;var m="https://api.whatsapp.com/send?phone="+R+"&text="+encodeURIComponent(g),l=document.createElement("a");l.id="mm-floating-whatsapp",l.href=m,l.target="_blank",l.rel="noopener noreferrer",l.setAttribute("aria-label","Fale conosco pelo WhatsApp"),l.style.cssText=["position: fixed","right: 14px","z-index: 98","display: flex","align-items: center","justify-content: center","width: 52px","height: 52px","background: #4b664a","border-radius: 50%","box-shadow: 0 3px 12px rgba(0,0,0,0.18)","text-decoration: none","transition: transform 0.15s ease","-webkit-tap-highlight-color: transparent"].join(";"),l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" style="display:block;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',l.addEventListener("touchstart",function(){l.style.transform="scale(0.92)"},{passive:!0}),l.addEventListener("touchend",function(){l.style.transform=""},{passive:!0}),document.body.appendChild(l)}})(),(function(){var R=/^(utm_|gad_|gclid$|gbraid$|wbraid$|fbclid$|msclkid$|ttclid$|srsltid$)/;function N(){try{if(!window.history||!window.history.replaceState||!window.URL||!window.location.search)return;var j=new URL(window.location.href),g=[];j.searchParams.forEach(function(f,h){g.push(h)});var m=!1;if(g.forEach(function(f){R.test(f)&&(j.searchParams.delete(f),m=!0)}),!m)return;var l=j.searchParams.toString();window.history.replaceState(window.history.state,document.title,j.pathname+(l?"?"+l:"")+j.hash)}catch{}}document.readyState==="complete"?setTimeout(N,3e3):window.addEventListener("load",function(){setTimeout(N,3e3)})})(),(function(){var R=document.querySelector(".back-to-top");if(R){var N=R.querySelector(".icon");N&&(N.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',N.style.cssText="display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:none !important;")}})(),(function(){var R="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",N="https://api.whatsapp.com/send?phone=5511915299488&text="+encodeURIComponent("Olá! Vim pelo site e gostaria de ajuda."),j={phone:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',whats:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',mail:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',clock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',pin:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',lock:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>',shield:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>',truck:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',card:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',instagram:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',facebook:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>',tiktok:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.39a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.42z"/></svg>'};function g(){if(!document.getElementById("mm-footer")&&document.body){document.body.classList.add("mm-footer-rebuild");var m=document.createElement("footer");m.id="mm-footer",m.className="mm-footer",m.setAttribute("role","contentinfo"),m.innerHTML='<div class="mm-footer-main"><div class="mm-footer-grid"><div class="mm-footer-col mm-footer-brand"><a class="mm-footer-logo" href="/" aria-label="Madeira Mania - voltar à home"><img src="'+R+'" alt="Madeira Mania" width="180" height="48"></a><p class="mm-footer-tagline">Móveis com design moderno e qualidade superior pra transformar sua casa em um lar cheio de personalidade.</p><div class="mm-footer-social"><a href="https://www.instagram.com/madeira.mania" target="_blank" rel="noopener" aria-label="Instagram da Madeira Mania">'+j.instagram+'</a><a href="https://web.facebook.com/profile.php?id=61578397120844" target="_blank" rel="noopener" aria-label="Facebook da Madeira Mania">'+j.facebook+'</a><a href="https://www.tiktok.com/@madeira.mania" target="_blank" rel="noopener" aria-label="TikTok da Madeira Mania">'+j.tiktok+'</a></div></div><div class="mm-footer-col"><h4 class="mm-footer-h">Atendimento</h4><ul class="mm-footer-list"><li><a href="tel:+5511915299488">'+j.phone+'<span>(11) 91529-9488</span></a></li><li><a href="'+N+'" target="_blank" rel="noopener">'+j.whats+'<span>WhatsApp</span></a></li><li><a href="mailto:contato@madeiramania.com.br">'+j.mail+'<span>contato@madeiramania.com.br</span></a></li><li><span class="mm-footer-meta">'+j.clock+'<span>Seg a Sex · 8h às 18h</span></span></li></ul></div><div class="mm-footer-col"><h4 class="mm-footer-h">Sua compra</h4><ul class="mm-footer-list"><li><a href="'+(/(?:^|;\s*)zordEm=[^;\s]/.test(document.cookie)?"/cliente/pedidos":"/login#rastrear")+'">Rastrear meu pedido</a></li><li><a href="/como-comprar">Como comprar</a></li><li><a href="/politica-de-entrega">Frete e entrega</a></li><li><a href="/politica-de-trocas-e-devolucoes">Trocas e devoluções</a></li><li><a href="/compra-segura">Compra segura</a></li><li><a href="/avaliacoes-de-clientes">Avaliações de clientes</a></li></ul></div><div class="mm-footer-col"><h4 class="mm-footer-h">Madeira Mania</h4><ul class="mm-footer-list"><li><a href="/quem-somos">Quem somos</a></li><li><a href="/atendimento">Central de atendimento</a></li><li><a href="/envio-imediato">Pronta entrega</a></li><li><a href="/politica-de-privacidade">Política de privacidade</a></li></ul></div></div></div><div class="mm-footer-trust"><div class="mm-footer-trust-inner"><div class="mm-footer-trust-item">'+j.lock+'<div class="mm-footer-trust-text"><strong>Compra 100% segura</strong><small>Site protegido por SSL</small></div></div><div class="mm-footer-trust-item">'+j.shield+'<div class="mm-footer-trust-text"><strong>7 dias para troca</strong><small>Direito de arrependimento</small></div></div><div class="mm-footer-trust-item">'+j.truck+'<div class="mm-footer-trust-text"><strong>Frete grátis</strong><small>Acima de R$ 2.000</small></div></div><div class="mm-footer-trust-item">'+j.card+'<div class="mm-footer-trust-text"><strong>12x sem juros</strong><small>Em todos os cartões</small></div></div></div></div><div class="mm-footer-bottom"><div class="mm-footer-bottom-inner"><p class="mm-footer-legal">© 2026 <strong>Madeira Mania</strong> · CNPJ 60.021.382/0001-61<br>Av. Paulista, 1636 · Bela Vista · São Paulo/SP · 01310-200</p><div class="mm-footer-payments" aria-label="Formas de pagamento aceitas"><span class="mm-pay-chip" title="PIX"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/pix.svg" alt="PIX" loading="lazy"></span><span class="mm-pay-chip" title="Visa"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/visa.svg" alt="Visa" loading="lazy"></span><span class="mm-pay-chip" title="Mastercard"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/mastercard.svg" alt="Mastercard" loading="lazy"></span><span class="mm-pay-chip" title="Elo"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/elo.svg" alt="Elo" loading="lazy"></span><span class="mm-pay-chip" title="Hipercard"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/hipercard.svg" alt="Hipercard" loading="lazy"></span><span class="mm-pay-chip" title="American Express"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/american2.svg" alt="American Express" loading="lazy"></span><span class="mm-pay-chip" title="Boleto Bancário"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/boleto.svg" alt="Boleto Bancário" loading="lazy"></span></div></div></div>',document.body.appendChild(m),document.documentElement.classList.remove("mm-footer-loading")}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g):g(),setTimeout(g,1e3),setTimeout(g,3e3),setTimeout(function(){document.documentElement.classList.remove("mm-footer-loading")},6e3)})(),(function(){"use strict";if(location.pathname.replace(/\/$/,"")!=="/atendimento")return;function S(){var R=document.querySelector(".atendimento .title-content");if(!(!R||R.dataset.mmEnhanced)){R.dataset.mmEnhanced="1";var N='<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.053 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64.001 5.122 1.03 6.988 2.898 1.866 1.868 2.893 4.352 2.892 6.992-.003 5.45-4.437 9.887-9.885 9.887zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.465 3.488z"/></svg>';R.innerHTML=["<h1>Fale com a gente</h1>",'<p class="mm-atd-lead">Nosso time está pronto para ajudar você a escolher os móveis certos para sua casa. Use o WhatsApp para respostas rápidas ou preencha o formulário abaixo.</p>','<div class="mm-atd-channels">','  <a class="mm-atd-whatsapp" href="https://api.whatsapp.com/send?phone=5511915299488&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20m%C3%B3veis." target="_blank" rel="noopener">',"    "+N,'    <span class="mm-atd-whatsapp-label">Fale pelo WhatsApp</span>','    <span class="mm-atd-whatsapp-number">11 91529-9488</span>',"  </a>",'  <div class="mm-atd-info">','    <div class="mm-atd-info-item">',"      <strong>Horário de atendimento</strong>","      <span>Segunda a sexta · 9h às 18h</span>","      <span>Sábado · 9h às 13h</span>","    </div>",'    <div class="mm-atd-info-item">',"      <strong>E-mail</strong>",'      <a href="mailto:contato@madeiramania.com.br">contato@madeiramania.com.br</a>',"    </div>","  </div>","</div>",'<h2 class="mm-atd-form-title">Formulário de contato</h2>'].join(`
`)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",S):S(),setTimeout(S,500),setTimeout(S,2e3)})(),(function(){if(/^\/checkout\//.test(location.pathname)||document.getElementById("mm-header"))return;function S(){if(document.getElementById("mm-header"))return;var R="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",N={search:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',user:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',bag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',truck:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>'},j=/(?:^|;\s*)zordEm=[^;\s]/.test(document.cookie),g=j?"/cliente/pedidos":"/login#rastrear",m=document.createElement("div");m.id="mm-header",m.innerHTML=['<a class="mm-h-skip" href="#main">Pular para o conteúdo</a>','<div class="mm-h-topbar">','  <div class="mm-h-topbar-inner">','    <span class="mm-h-topbar-desktop-only">','      <a href="/atendimento">Atendimento</a>','      <span class="mm-h-topbar-sep" aria-hidden="true">·</span>',"    </span>","    <span>Frete grátis R$ 2.000+</span>",'    <span class="mm-h-topbar-sep" aria-hidden="true">·</span>',"    <span>12x sem juros</span>","  </div>","</div>",'<div class="mm-h-main">','  <div class="mm-h-main-left">','    <button class="mm-h-burger" id="mm-h-burger" type="button" aria-label="Abrir menu"><span aria-hidden="true">☰</span></button>','    <button class="mm-h-action" id="mm-h-buscar" type="button">'+N.search+"<span>Buscar</span></button>","  </div>",'  <a class="mm-h-logo" href="/" aria-label="Madeira Mania, ir para a página inicial">','    <img src="'+R+'" alt="" width="280" height="70" loading="eager" />',"  </a>",'  <div class="mm-h-main-right">','    <a class="mm-h-action" href="/wishlist">'+N.heart+"<span>Favoritos</span></a>",'    <a class="mm-h-action mm-h-track" href="'+g+'">'+N.truck+"<span>Rastrear</span></a>",'    <a class="mm-h-action" href="/login">'+N.user+"<span>Conta</span></a>",'    <button class="mm-h-action" type="button" id="mm-h-cart" aria-label="Carrinho, 0 itens" aria-live="polite">','      <span class="mm-h-cart-icon">'+N.bag+'<span class="mm-h-cart-badge" id="mm-h-cart-count" aria-hidden="true" hidden>0</span></span>',"      <span>Carrinho</span>","    </button>","  </div>","</div>",'<nav class="mm-h-nav" role="navigation" aria-label="Categorias">','  <ul class="mm-h-nav-list">','    <li class="mm-h-nav-item" data-menu="ambientes">','      <a href="#" class="mm-h-nav-link" aria-haspopup="true" aria-expanded="false">Ambientes</a>','      <div class="mm-h-mega" role="menu" aria-label="Ambientes">','        <div class="mm-h-mega-inner">','          <div class="mm-h-mega-col">','            <a href="/sala-de-estar-9677307902" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="sala-de-estar">Sala de Estar</a>',"            <ul>",'              <li><a href="/sala-de-estar/mesas">Mesas</a></li>','              <li><a href="/sala-de-estar/racks">Racks para TV</a></li>','              <li><a href="/sala-de-estar/estantes">Estantes</a></li>','              <li><a href="/sala-de-estar/home-theaters">Home Theaters</a></li>','              <li><a href="/sala-de-estar/aparadores">Aparadores</a></li>','              <li><a href="/sala-de-estar/cristaleiras">Cristaleiras</a></li>','              <li><a href="/sala-de-estar/buffets">Buffets</a></li>','              <li><a href="/sala-de-estar/bares">Bares</a></li>','              <li><a href="/sala-de-estar/paineis">Painéis</a></li>','              <li><a href="/sala-de-estar/nichos">Nichos</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col">','            <a href="/sala-de-jantar-1916970475" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="sala-de-jantar">Sala de Jantar</a>',"            <ul>",'              <li><a href="/sala-de-jantar/mesas">Mesas</a></li>','              <li><a href="/sala-de-jantar/cadeiras">Cadeiras</a></li>','              <li><a href="/sala-de-jantar/aparadores">Aparadores</a></li>','              <li><a href="/sala-de-jantar/buffets">Buffets</a></li>','              <li><a href="/sala-de-jantar/cristaleiras">Cristaleiras</a></li>','              <li><a href="/sala-de-jantar/balcoes">Balcões</a></li>','              <li><a href="/sala-de-jantar/banquetas">Banquetas</a></li>','              <li><a href="/sala-de-jantar/bares">Bares</a></li>',"            </ul>",'            <a href="/bar-e-cafe" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="bar-e-cafe">Bar e Café</a>',"            <ul>",'              <li><a href="/bar-e-cafe/bares">Bares</a></li>','              <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col">','            <a href="/cozinha-6327619447" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="cozinha">Cozinha</a>',"            <ul>",'              <li><a href="/cozinha/armarios-de-cozinha">Armários de Cozinha</a></li>','              <li><a href="/cozinha/balcoes">Balcões</a></li>','              <li><a href="/cozinha/banquetas">Banquetas</a></li>','              <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>','              <li><a href="/cozinha/cozinhas-completas">Cozinhas Completas</a></li>','              <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>','              <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>','              <li><a href="/cozinha/multiuso">Multiuso</a></li>','              <li><a href="/cozinha/paneleiros">Paneleiros</a></li>',"            </ul>",'            <a href="/lavanderia" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="lavanderia">Lavanderia</a>','            <a href="/banheiro" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="banheiro">Banheiro</a>',"          </div>",'          <div class="mm-h-mega-col">','            <a href="/quarto-0961844589" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="quarto">Quarto</a>',"            <ul>",'              <li><a href="/quarto/bercos">Berços</a></li>','              <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>','              <li><a href="/quarto/camas">Camas</a></li>','              <li><a href="/quarto/colchoes">Colchões</a></li>','              <li><a href="/quarto/comodas">Cômodas</a></li>','              <li><a href="/quarto/dormitorios">Dormitórios</a></li>','              <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>','              <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>','              <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>','              <li><a href="/quarto/roupeiros">Roupeiros</a></li>',"            </ul>",'            <a href="/escritorio-899523853" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="escritorio">Escritório</a>',"            <ul>",'              <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col mm-h-mega-col-hero" aria-hidden="true">','            <div class="mm-h-mega-hero">','              <img class="mm-h-mega-hero-img" src="" alt="" loading="lazy" width="320" height="240" />','              <div class="mm-h-mega-hero-label"></div>',"            </div>","          </div>","        </div>",'        <div class="mm-h-mega-footer">','          <a href="/envio-imediato" class="mm-h-mega-cta">Ver todos os ambientes <span aria-hidden="true">→</span></a>',"        </div>","      </div>","    </li>",'    <li class="mm-h-nav-item">','      <a href="/envio-imediato" class="mm-h-nav-link">Envio Imediato</a>',"    </li>",'    <li class="mm-h-nav-item">','      <a href="/outlet" class="mm-h-nav-link">Outlet</a>',"    </li>","  </ul>","</nav>",'<div class="mm-h-drawer" id="mm-h-drawer" hidden role="dialog" aria-modal="true" aria-label="Menu">','  <div class="mm-h-drawer-backdrop"></div>','  <aside class="mm-h-drawer-panel">','    <div class="mm-h-drawer-header">','      <span class="mm-h-drawer-title">Menu</span>','      <button class="mm-h-drawer-close" id="mm-h-drawer-close" type="button" aria-label="Fechar menu">','        <span aria-hidden="true">×</span>',"      </button>","    </div>",'    <div class="mm-h-drawer-search">','      <form action="/busca" method="get">','        <input type="search" name="q" placeholder="Buscar" aria-label="Buscar" />',"      </form>","    </div>",'    <nav class="mm-h-drawer-nav" aria-label="Navegação móvel">','      <details class="mm-h-drawer-section">',"        <summary>Sala de Estar</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/sala-de-estar-9677307902">Ver todos →</a></li>','          <li><a href="/sala-de-estar/mesas">Mesas</a></li>','          <li><a href="/sala-de-estar/racks">Racks para TV</a></li>','          <li><a href="/sala-de-estar/estantes">Estantes</a></li>','          <li><a href="/sala-de-estar/home-theaters">Home Theaters</a></li>','          <li><a href="/sala-de-estar/aparadores">Aparadores</a></li>','          <li><a href="/sala-de-estar/cristaleiras">Cristaleiras</a></li>','          <li><a href="/sala-de-estar/buffets">Buffets</a></li>','          <li><a href="/sala-de-estar/bares">Bares</a></li>','          <li><a href="/sala-de-estar/paineis">Painéis</a></li>','          <li><a href="/sala-de-estar/nichos">Nichos</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Sala de Jantar</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/sala-de-jantar-1916970475">Ver todos →</a></li>','          <li><a href="/sala-de-jantar/mesas">Mesas</a></li>','          <li><a href="/sala-de-jantar/cadeiras">Cadeiras</a></li>','          <li><a href="/sala-de-jantar/aparadores">Aparadores</a></li>','          <li><a href="/sala-de-jantar/buffets">Buffets</a></li>','          <li><a href="/sala-de-jantar/cristaleiras">Cristaleiras</a></li>','          <li><a href="/sala-de-jantar/balcoes">Balcões</a></li>','          <li><a href="/sala-de-jantar/banquetas">Banquetas</a></li>','          <li><a href="/sala-de-jantar/bares">Bares</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Cozinha</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/cozinha-6327619447">Ver todos →</a></li>','          <li><a href="/cozinha/armarios-de-cozinha">Armários de Cozinha</a></li>','          <li><a href="/cozinha/balcoes">Balcões</a></li>','          <li><a href="/cozinha/banquetas">Banquetas</a></li>','          <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>','          <li><a href="/cozinha/cozinhas-completas">Cozinhas Completas</a></li>','          <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>','          <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>','          <li><a href="/cozinha/multiuso">Multiuso</a></li>','          <li><a href="/cozinha/paneleiros">Paneleiros</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Quarto</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/quarto-0961844589">Ver todos →</a></li>','          <li><a href="/quarto/bercos">Berços</a></li>','          <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>','          <li><a href="/quarto/camas">Camas</a></li>','          <li><a href="/quarto/colchoes">Colchões</a></li>','          <li><a href="/quarto/comodas">Cômodas</a></li>','          <li><a href="/quarto/dormitorios">Dormitórios</a></li>','          <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>','          <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>','          <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>','          <li><a href="/quarto/roupeiros">Roupeiros</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Bar e Café</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/bar-e-cafe">Ver todos →</a></li>','          <li><a href="/bar-e-cafe/bares">Bares</a></li>','          <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Escritório</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/escritorio-899523853">Ver todos →</a></li>','          <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',"        </ul>","      </details>",'      <a href="/lavanderia" class="mm-h-drawer-link">Lavanderia</a>','      <a href="/banheiro" class="mm-h-drawer-link">Banheiro</a>','      <a href="/envio-imediato" class="mm-h-drawer-link">Envio Imediato</a>','      <a href="/outlet" class="mm-h-drawer-link">Outlet</a>',"    </nav>",'    <div class="mm-h-drawer-footer">','      <a href="'+g+'" class="mm-h-drawer-track">'+N.truck+"<span>Rastrear pedido</span></a>",'      <a href="/wishlist">Favoritos</a>','      <a href="/login">Conta</a>','      <a href="/atendimento">Atendimento</a>',"    </div>","  </aside>","</div>",'<div class="mm-h-search-overlay" id="mm-h-search-overlay" hidden role="dialog" aria-modal="true" aria-label="Buscar">','  <div class="mm-h-search-backdrop"></div>','  <div class="mm-h-search-inner">','    <button class="mm-h-search-close" id="mm-h-search-close" type="button" aria-label="Fechar busca">','      <span aria-hidden="true">×</span>',"    </button>",'    <form action="/busca" method="get" class="mm-h-search-form">','      <label for="mm-h-search-input" class="mm-h-search-label">O que você procura?</label>','      <input type="search" name="q" id="mm-h-search-input" placeholder="O que você procura?" autocomplete="off" />',"    </form>",'    <div class="mm-h-search-results" id="mm-h-search-results" hidden></div>','    <div class="mm-h-search-suggestions" id="mm-h-search-suggestions">','      <span class="mm-h-search-sug-label">Sugestões populares</span>','      <a href="/busca?q=mesa+de+jantar">Mesa de jantar</a>','      <a href="/busca?q=rack">Rack</a>','      <a href="/busca?q=guarda-roupas">Guarda-roupas</a>','      <a href="/busca?q=cristaleira">Cristaleira</a>','      <a href="/busca?q=aparador">Aparador</a>',"    </div>",'    <div class="mm-h-search-hint"><kbd>Esc</kbd> para fechar</div>',"  </div>","</div>"].join(`
`),document.body.insertBefore(m,document.body.firstChild),document.documentElement.classList.remove("mm-header-loading");var l=(function(){try{var a=Array.from(document.scripts).find(function(u){return u.src&&u.src.indexOf("madeira-mania.js")!==-1});if(a&&a.src.indexOf("localhost")!==-1)return"http://localhost:8080/assets/mega-hero/";if(a){var s=a.src.match(/@([^/]+)/);if(s)return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@"+s[1]+"/dist/assets/mega-hero/"}return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@main/dist/assets/mega-hero/"}catch{return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@main/dist/assets/mega-hero/"}})(),f={"sala-de-estar":"Sala de Estar","sala-de-jantar":"Sala de Jantar",cozinha:"Cozinha","bar-e-cafe":"Bar e Café",quarto:"Quarto",escritorio:"Escritório",lavanderia:"Lavanderia",banheiro:"Banheiro"},h=m.querySelector(".mm-h-mega-hero-img"),b=m.querySelector(".mm-h-mega-hero-label");Object.keys(f).forEach(function(a){var s=new Image;s.src=l+a+".jpg"});function F(a){h&&(h.onerror=function(){h.style.visibility="hidden"},h.style.visibility="",h.src=l+a+".jpg",h.alt=f[a]||"",b&&(b.textContent=f[a]||""))}F("sala-de-estar"),m.querySelectorAll(".mm-h-mega-heading-link[data-hero]").forEach(function(a){a.addEventListener("mouseenter",function(){F(a.dataset.hero)})});var z=m.querySelectorAll(".mm-h-nav-item[data-menu]"),M=null,P=null;z.forEach(function(a){a.addEventListener("mouseenter",function(){clearTimeout(P),clearTimeout(M),M=setTimeout(function(){z.forEach(function(u){u.classList.remove("is-open");var C=u.querySelector(".mm-h-nav-link");C&&C.setAttribute("aria-expanded","false")}),a.classList.add("is-open");var s=a.querySelector(".mm-h-nav-link");s&&s.setAttribute("aria-expanded","true")},150)}),a.addEventListener("mouseleave",function(){clearTimeout(M),P=setTimeout(function(){a.classList.remove("is-open");var s=a.querySelector(".mm-h-nav-link");s&&s.setAttribute("aria-expanded","false")},200)})}),document.addEventListener("keydown",function(a){a.key==="Escape"&&z.forEach(function(s){s.classList.remove("is-open");var u=s.querySelector(".mm-h-nav-link");u&&u.setAttribute("aria-expanded","false")})});var _=m.querySelector('.mm-h-nav-item[data-menu="ambientes"] > .mm-h-nav-link');_&&_.addEventListener("click",function(a){a.preventDefault()});var q=document.getElementById("mm-h-search-overlay"),V=document.getElementById("mm-h-buscar"),W=document.getElementById("mm-h-search-close"),v=document.getElementById("mm-h-search-input"),U=q&&q.querySelector(".mm-h-search-backdrop"),ln=null;function Z(){q&&(ln=document.activeElement,q.hidden=!1,document.body.style.overflow="hidden",setTimeout(function(){v&&v.focus()},50))}function pn(){q&&(q.hidden=!0,document.body.style.overflow="",ln&&ln.focus&&ln.focus())}V&&V.addEventListener("click",Z),W&&W.addEventListener("click",pn),U&&U.addEventListener("click",pn),document.addEventListener("keydown",function(a){if(a.key==="Escape"&&q&&!q.hidden){pn();return}if(a.key==="/"&&q&&q.hidden){var s=document.activeElement&&document.activeElement.tagName;s!=="INPUT"&&s!=="TEXTAREA"&&!(document.activeElement&&document.activeElement.isContentEditable)&&(a.preventDefault(),Z())}}),q&&q.addEventListener("keydown",function(a){if(!(a.key!=="Tab"||q.hidden)){var s=q.querySelectorAll("button, input, a[href]");if(s.length!==0){var u=s[0],C=s[s.length-1];a.shiftKey&&document.activeElement===u?(a.preventDefault(),C.focus()):!a.shiftKey&&document.activeElement===C&&(a.preventDefault(),u.focus())}}});var I=document.getElementById("mm-h-search-results"),H=document.getElementById("mm-h-search-suggestions"),rn=[{label:"Mesa de jantar",q:"mesa de jantar"},{label:"Mesa de centro",q:"mesa de centro"},{label:"Rack para TV",q:"rack"},{label:"Guarda-roupas",q:"guarda-roupas"},{label:"Cristaleira",q:"cristaleira"},{label:"Aparador",q:"aparador"},{label:"Buffet",q:"buffet"},{label:"Painel para TV",q:"painel"},{label:"Cabeceira",q:"cabeceira"},{label:"Cômoda",q:"comoda"},{label:"Estante",q:"estante"},{label:"Home theater",q:"home theater"}],Nn="mm_recent_searches";function Sn(){try{var a=localStorage.getItem(Nn);if(!a)return[];var s=JSON.parse(a);return Array.isArray(s)?s.slice(0,5):[]}catch{return[]}}function jn(a){if(a)try{var s=Sn().filter(function(u){return u&&u.toLowerCase()!==a.toLowerCase()});s.unshift(a),localStorage.setItem(Nn,JSON.stringify(s.slice(0,5)))}catch{}}function zn(a){return String(a).replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})}var ot='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',nt='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',$n="mm_search_cache_v1",_n=600*1e3,qn=20,Mn=null;function lt(){try{return JSON.parse(sessionStorage.getItem($n)||"{}")}catch{return{}}}function pt(a){try{var s=Object.keys(a);if(s.length>qn){s.sort(function(C,T){return a[C].ts-a[T].ts});for(var u=0;u<s.length-qn;u++)delete a[s[u]]}sessionStorage.setItem($n,JSON.stringify(a))}catch{}}function Wn(a){var s=lt(),u=s[a.toLowerCase()];return!u||Date.now()-u.ts>_n?null:u.products}function dt(a,s){var u=lt();u[a.toLowerCase()]={ts:Date.now(),products:s},pt(u)}function tt(a){for(var s="itens:",u=0;(u=a.indexOf(s,u))!==-1;){var C=a.indexOf("[",u);if(C===-1)return null;for(var T=0,O=!1,Y=!1,K=-1,mn=C;mn<a.length;mn++){var dn=a.charAt(mn);if(Y){Y=!1;continue}if(dn==="\\"){Y=!0;continue}if(dn==='"'){O=!O;continue}if(!O){if(dn==="[")T++;else if(dn==="]"&&(T--,T===0)){K=mn;break}}}if(K!==-1){var wn=a.substring(C,K+1);try{var vn=JSON.parse(wn);if(Array.isArray(vn)&&vn.length>0)return vn}catch{}}u=C+1}return null}function Bn(a){var s=tt(a);if(!s)return[];for(var u=[],C=0;C<s.length&&u.length<6;C++){var T=s[C];if(T){var O=T.titulo||T.nome||"";if(O){var Y=T.link||"";Y&&Y.charAt(0)!=="/"&&Y.indexOf("http")!==0&&(Y="/"+Y);var K=T.midia_url||"",mn=parseFloat(T.valor),dn=parseFloat(T.valor_de),wn=isNaN(mn)?"":"R$ "+mn.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),vn=!isNaN(dn)&&dn>mn?"R$ "+dn.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):"",Fn="";typeof T.percentual_off=="number"&&T.percentual_off>0&&(Fn="-"+Math.round(T.percentual_off)+"%"),u.push({href:Y,title:O,img:K,price:wn,oldPrice:vn,discount:Fn})}}}return u}function Hn(a){var s=a.toLowerCase().trim();if(!s||s.length<3)return Promise.resolve([]);var u=Wn(s);if(u)return Promise.resolve(u);if(Mn)try{Mn.abort()}catch{}Mn=typeof AbortController<"u"?new AbortController:null;var C="/busca?q="+encodeURIComponent(s),T={credentials:"same-origin",headers:{Accept:"text/html"}};return Mn&&(T.signal=Mn.signal),fetch(C,T).then(function(O){if(!O.ok)throw new Error("HTTP "+O.status);return O.text()}).then(function(O){var Y=Bn(O);return dt(s,Y),Y}).catch(function(O){return O&&O.name==="AbortError"?null:[]})}function xn(a){var s=a.img?'<img src="'+zn(a.img)+'" alt="" loading="lazy" width="64" height="64"/>':'<div class="mm-h-search-product-noimg"></div>',u=a.price?'<span class="mm-h-search-product-price">'+zn(a.price)+"</span>":"",C=a.oldPrice&&a.oldPrice!==a.price?'<span class="mm-h-search-product-oldprice">'+zn(a.oldPrice)+"</span>":"",T=a.discount?'<span class="mm-h-search-product-discount">'+zn(a.discount)+"</span>":"";return'<a class="mm-h-search-product" href="'+zn(a.href)+'" data-recent="1"><span class="mm-h-search-product-thumb">'+s+T+'</span><span class="mm-h-search-product-body"><span class="mm-h-search-product-name">'+zn(a.title)+'</span><span class="mm-h-search-product-prices">'+C+u+"</span></span></a>"}function An(){if(I){var a=Sn();if(!a.length){I.hidden=!0,I.innerHTML="",H&&(H.hidden=!1);return}var s='<div class="mm-h-search-section">';s+='<span class="mm-h-search-sug-label">Buscas recentes</span>',s+='<ul class="mm-h-search-list">';for(var u=0;u<a.length;u++){var C=a[u];s+='<li><a class="mm-h-search-result" href="/busca?q='+encodeURIComponent(C)+'"><span class="mm-h-search-result-icon">'+nt+'</span><span class="mm-h-search-result-label">'+zn(C)+"</span></a></li>"}s+="</ul></div>",I.innerHTML=s,I.hidden=!1,H&&(H.hidden=!1)}}function Gn(a){if(!I)return"";H&&(H.hidden=!0);var s=a.trim();if(s.length<2)return An(),"";var u=s.toLowerCase(),C=rn.filter(function(K){return K.label.toLowerCase().indexOf(u)!==-1||K.q.toLowerCase().indexOf(u)!==-1}).slice(0,4),T="";T+='<ul class="mm-h-search-list">',T+='<li><a class="mm-h-search-result mm-h-search-result-primary" href="/busca?q='+encodeURIComponent(s)+'" data-recent="1"><span class="mm-h-search-result-icon">'+ot+'</span><span class="mm-h-search-result-label">Buscar por <strong>&ldquo;'+zn(s)+'&rdquo;</strong></span><span class="mm-h-search-result-arrow" aria-hidden="true">&rarr;</span></a></li>';for(var O=0;O<C.length;O++){var Y=C[O];T+='<li><a class="mm-h-search-result" href="/busca?q='+encodeURIComponent(Y.q)+'" data-recent="1"><span class="mm-h-search-result-icon">'+ot+'</span><span class="mm-h-search-result-label">'+zn(Y.label)+"</span></a></li>"}return T+="</ul>",s.length>=3&&(T+='<div class="mm-h-search-products-section" data-q="'+zn(s)+'"><span class="mm-h-search-sug-label">Produtos</span><div class="mm-h-search-products-grid mm-h-search-products-loading"><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div></div></div>'),I.innerHTML=T,I.hidden=!1,s}function et(a){var s=Gn(a);!s||s.length<3||Hn(s).then(function(u){if(v){var C=(v.value||"").trim();if(C===s&&u!==null){var T=I&&I.querySelector('.mm-h-search-products-section[data-q="'+s.replace(/"/g,'\\"')+'"]');if(T){var O=T.querySelector(".mm-h-search-products-grid");if(O){if(O.classList.remove("mm-h-search-products-loading"),!u||u.length===0){T.innerHTML='<span class="mm-h-search-sug-label">Nenhum produto encontrado para &ldquo;'+zn(s)+"&rdquo;</span>";return}for(var Y="",K=0;K<u.length;K++)Y+=xn(u[K]);O.innerHTML=Y}}}}})}var at=null;if(v){v.addEventListener("input",function(){clearTimeout(at);var a=v.value;at=setTimeout(function(){!a||a.trim().length<2?An():et(a)},300)}),I&&I.addEventListener("click",function(a){var s=a.target.closest&&a.target.closest("a[data-recent]");if(s){var u=s.getAttribute("href").split("q=")[1];u&&jn(decodeURIComponent(u.replace(/\+/g," ")))}});var gt=q&&q.querySelector(".mm-h-search-form");gt&&gt.addEventListener("submit",function(){jn((v.value||"").trim())})}V&&V.addEventListener("click",function(){An()});var yn=document.getElementById("mm-h-drawer"),ut=document.getElementById("mm-h-drawer-close"),kt=yn&&yn.querySelector(".mm-h-drawer-backdrop");function Pt(){yn&&(yn.hidden=!1,document.body.style.overflow="hidden",setTimeout(function(){var a=yn.querySelector(".mm-h-drawer-close");a&&a.focus()},100))}function Pn(){!yn||yn.hidden||(yn.classList.add("mm-h-drawer-closing"),document.body.style.overflow="",setTimeout(function(){yn.hidden=!0,yn.classList.remove("mm-h-drawer-closing");var a=document.getElementById("mm-h-burger");a&&a.focus()},320))}var Cn=document.getElementById("mm-h-burger");if(Cn&&Cn.addEventListener("click",Pt),ut&&ut.addEventListener("click",Pn),kt&&kt.addEventListener("click",Pn),document.addEventListener("keydown",function(a){a.key==="Escape"&&yn&&!yn.hidden&&Pn()}),yn){var rt=0;yn.addEventListener("touchstart",function(a){rt=a.touches[0].clientX},{passive:!0}),yn.addEventListener("touchend",function(a){var s=a.changedTouches[0].clientX;rt-s>80&&Pn()},{passive:!0})}yn&&yn.querySelectorAll(".mm-h-drawer-section summary").forEach(function(a){a.addEventListener("click",function(s){s.preventDefault();var u=a.parentElement,C=u.querySelector("ul");if(C)if(u.open)C.style.maxHeight=C.scrollHeight+"px",C.style.opacity="1",requestAnimationFrame(function(){C.style.maxHeight="0",C.style.opacity="0",C.style.paddingTop="0",C.style.paddingBottom="0"}),setTimeout(function(){u.open=!1,C.style.maxHeight="",C.style.opacity="",C.style.paddingTop="",C.style.paddingBottom=""},300);else{u.open=!0;var T=C.scrollHeight;C.style.maxHeight="0",C.style.opacity="0",C.style.paddingTop="0",C.style.paddingBottom="0",requestAnimationFrame(function(){C.style.maxHeight=T+"px",C.style.opacity="1",C.style.paddingTop="",C.style.paddingBottom=""}),setTimeout(function(){C.style.maxHeight="",C.style.opacity=""},320)}})});var ct=document.getElementById("mm-h-cart"),Ot=null,Vn=null;function Dt(){var a=document.querySelector(".carrinho-rapido-ctn");return a||document.querySelector('#cart-preview-area > div.z-\\[9999\\], #cart-preview-area > div[class*="z-[9999]"]')}function St(a){return!!(a&&a.className&&a.className.indexOf("z-[9999]")!==-1)}var jt='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';function It(a){if(a){var s=a.querySelector(".close-car-fast");s&&!s.innerHTML.trim()&&(s.innerHTML=jt,s.setAttribute("aria-label","Fechar carrinho"),s.setAttribute("role","button"),s.setAttribute("tabindex","0"))}}function qt(a){!a||a.dataset.mmCloseWired||(a.dataset.mmCloseWired="1",a.addEventListener("click",function(s){var u=s.target;u&&u.closest&&(u.closest(".close-car-fast")||u.closest(".icon-arrow-bottom"))&&(s.preventDefault(),s.stopPropagation(),At())},!0),a.addEventListener("keydown",function(s){(s.key==="Enter"||s.key===" ")&&s.target&&s.target.closest&&s.target.closest(".close-car-fast")&&(s.preventDefault(),At())}))}function Gt(a){if(a){if(!a.dataset.mmLifted){a.dataset.mmLifted="1",a.style.position="fixed",a.style.display="block",a.style.zIndex="200";for(var s=a.parentElement;s&&!s.classList.contains("header-middle");)s.style.zIndex="auto",s.style.transform="none",s.style.filter="none",s.style.isolation="auto",s=s.parentElement}qt(a),It(a)}}var ft=[{href:"/rack-atenas-cor-naturalle-largura-220-cm",name:"Rack Atenas 220cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5519/am-2501-mavaular-rack-atenas-220-naturalle-lado.jpg?ims=200x200",priceFrom:"R$ 1.615,49",priceTo:"R$ 1.032,30"},{href:"/rack-atenas-cor-naturalle-largura-180-cm",name:"Rack Atenas 180cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5419/am-2501-mavaular-rack-atenas-180-naturalle.jpg?ims=200x200",priceFrom:"R$ 1.688,71",priceTo:"R$ 942,31"},{href:"/buffet-arcus-cor-naturalle-largura-92-cm",name:"Buffet Arcus 92cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5439/am-2501-mavaular-arcus-02-pts-naturalle.jpg?ims=200x200",priceFrom:"R$ 1.359,09",priceTo:"R$ 807,30"},{href:"/buffet-atenas-cor-naturalle",name:"Buffet Atenas",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/4237/am-2502-mavaular-buffet-atenas-naturalle.jpg?ims=200x200",priceFrom:"R$ 2.124,07",priceTo:"R$ 1.032,30"}],_t='<svg viewBox="0 0 48 48" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 14 8 20v22a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V20l-4-6z"/><path d="M8 20h32"/><path d="M32 28a8 8 0 0 1-16 0"/></svg>';function Ct(){try{if(typeof Zord<"u"&&typeof Zord.get=="function"){var a=Zord.get("cart.size");if(typeof a=="number"&&a>0)return a;if(typeof a=="string"&&/^\d+$/.test(a)&&parseInt(a,10)>0)return parseInt(a,10)}}catch{}var s=document.querySelector("#cart-preview-area .item-ctn, .carrinho-container .item-ctn");if(s){var u=(s.textContent||"").trim();if(u&&/\d/.test(u)){var C=parseInt(u.replace(/\D/g,""),10);if(!isNaN(C))return C}}var T=document.querySelector(".carrinho-rapido-ctn");if(T){var O=0;if(T.querySelectorAll(".cart-item").forEach(function(Y){Y.closest(".mm-cart-empty-wrapper")||O++}),O>0)return O}return 0}function Ut(a){if(Ct()!==0||!a)return!1;var s=a.querySelector(".box-empty-cart");if(!s)return!1;var u=getComputedStyle(s);return!(u.display==="none"||u.visibility==="hidden")}function $t(a){if(!a)return!1;var s=Ct();if(s===0)return!1;var u=0;return a.querySelectorAll(".cart-item").forEach(function(C){C.closest(".mm-cart-empty-wrapper")||u++}),u>0}function Vt(a){if(a){a.classList.remove("mm-cart-has-empty-enhancement");var s=a.querySelector(":scope > .mm-cart-empty-wrapper");s&&s.remove()}}function vt(a){if(a){var s=a.querySelector(".content-cart");if(s){if($t(s)){Vt(s);return}var u=s.querySelectorAll(".cart-item").length===0;if(!(!Ut(s)&&!(u&&Ct()===0))&&!s.querySelector(":scope > .mm-cart-empty-wrapper")){var C=document.createElement("div");C.className="mm-cart-empty-wrapper";for(var T="",O=0;O<ft.length;O++){var Y=ft[O];T+='<a class="mm-cart-suggestion-card" href="'+Y.href+'"><span class="mm-cart-suggestion-thumb"><img src="'+Y.img+'" alt="" loading="lazy" width="80" height="80"/></span><span class="mm-cart-suggestion-body"><span class="mm-cart-suggestion-name">'+Y.name+'</span><span class="mm-cart-suggestion-price"><span class="mm-cart-suggestion-price-from">'+Y.priceFrom+'</span><span class="mm-cart-suggestion-price-to">'+Y.priceTo+"</span></span></span></a>"}C.innerHTML='<div class="mm-cart-empty-hero"><div class="mm-cart-empty-icon">'+_t+'</div><h3 class="mm-cart-empty-title">Seu carrinho está vazio</h3><p class="mm-cart-empty-copy">Dê uma olhada nos móveis que nossos clientes mais amam.</p></div><div class="mm-cart-suggestions"><span class="mm-cart-suggestions-label">Você pode gostar de</span><div class="mm-cart-suggestions-grid">'+T+"</div></div>",s.classList.add("mm-cart-has-empty-enhancement"),s.appendChild(C)}}}}function ee(a){try{document.querySelectorAll("#cart-preview-area .item-ctn, .carrinho-container .item-ctn, .item-ctn").forEach(function(s){s.textContent="0"})}catch{}a&&vt(a)}window.__mmForceEmptyCartState=ee;function Ht(a,s){try{if(typeof Zord>"u"||!Zord.checkout||typeof Zord.checkout.atualizaPreview!="function"){s();return}var u=Ct();if(u===0){s();return}if(a.querySelector(".cart-item")){s();return}Zord.checkout.atualizaPreview();var C=Date.now(),T=2e3;(function O(){if(a.querySelector(".cart-item")){s();return}if(Date.now()-C>=T){s();return}setTimeout(O,50)})()}catch{s()}}function Rn(){if(window.innerWidth<=767){var a=document.querySelector("#cart-preview-area a.link-cart")||document.querySelector('#cart-preview-area a[href*="/checkout/cart"]');if(a){let O=function(K){!K||K.dataset.mmCloseWired||(K.dataset.mmCloseWired="1",K.addEventListener("click",function(mn){var dn=mn.target;if(!(!dn||!dn.closest)){var wn=dn.closest('[class*="text-error-700"]');if(!wn)for(var vn=dn,Fn=0;Fn<4&&vn&&vn!==K;Fn++){if((vn.textContent||"").trim()==="Fechar"){wn=vn;break}vn=vn.parentElement}wn&&(mn.preventDefault(),mn.stopImmediatePropagation(),K.classList.remove("translate-x-[0]"),K.classList.add("translate-x-[100%]"),delete K.dataset.mmUserOpened,document.body.style.overflow="")}},!0))},Y=function(){var K=document.querySelector('#cart-preview-area > div[class*="z-[9999]"]');K&&(K.dataset.mmUserOpened="1",K.className.indexOf("translate-x-[0]")===-1&&(K.classList.remove("translate-x-[100%]"),K.classList.add("translate-x-[0]")),O(K))};document.documentElement.dataset.mmCartOpening="1",a.dataset.mmBypass="1",a.click(),delete a.dataset.mmBypass,setTimeout(Y,120),setTimeout(Y,380),setTimeout(Y,700),setTimeout(function(){delete document.documentElement.dataset.mmCartOpening},800);return}window.location.href="/checkout/cart";return}var s=Dt();if(s){Ht(s,function(){Wt(s)});return}var u=0,C=14,T=!1;(function O(){if(u++,s=Dt(),s){Ht(s,function(){Wt(s)});return}if(!T&&u>=2){T=!0;try{typeof Zord<"u"&&Zord.checkout&&typeof Zord.checkout.atualizaPreview=="function"&&Zord.checkout.atualizaPreview()}catch{}}u<C?setTimeout(O,200):window.location.href="/checkout/cart"})()}function Wt(a){var s=St(a);s||(Gt(a),It(a)),vt(a);var u=a.querySelector(".content-cart");if(u&&!u.dataset.mmObserved){u.dataset.mmObserved="1";var C=new MutationObserver(function(){vt(a)});C.observe(u,{childList:!0,subtree:!0,attributes:!1})}if(s){a.classList.remove("translate-x-[100%]"),a.classList.add("translate-x-[0]");var T=a.querySelector('.group.cursor-pointer, [class*="text-error-700"]');T&&!T.dataset.mmWired&&(T.dataset.mmWired="1",T.addEventListener("click",function(O){O.preventDefault(),O.stopPropagation(),At()},!0))}else a.classList.add("mm-drawer-open");!s&&!Vn&&(Vn=document.createElement("div"),Vn.id="mm-h-cart-scrim",Vn.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:150;opacity:0;transition:opacity 320ms;",Vn.addEventListener("click",At),document.body.appendChild(Vn),requestAnimationFrame(function(){Vn.style.opacity="1"})),document.body.style.overflow="hidden"}function At(){var a=Dt();if(a&&(St(a)?(a.classList.remove("translate-x-[0]"),a.classList.add("translate-x-[100%]")):a.classList.remove("mm-drawer-open")),Vn){Vn.style.opacity="0";var s=Vn;setTimeout(function(){s&&s.parentNode&&s.parentNode.removeChild(s)},320),Vn=null}document.body.style.overflow=""}ct&&ct.addEventListener("click",function(a){a.preventDefault(),Rn()}),window.innerWidth<=767&&(function a(){var s=document.querySelector('#cart-preview-area > [class*="z-[9999]"]');if(!s){setTimeout(a,500);return}if(!s.dataset.mmGuardWired){s.dataset.mmGuardWired="1";var u=new MutationObserver(function(){if(s.className.indexOf("translate-x-[0]")===-1){delete s.dataset.mmUserOpened;return}document.documentElement.dataset.mmCartOpening||s.dataset.mmUserOpened||(s.classList.remove("translate-x-[0]"),s.classList.add("translate-x-[100%]"))});u.observe(s,{attributes:!0,attributeFilter:["class"]})}})(),document.addEventListener("click",function(a){var s=a.target.closest('#cart-preview-area a.link-cart, header.ra-header > .header-bottom a[href*="/checkout/cart"], header.ra-header > .header-bottom a[href*="carrinho"]');if(s){if(s.dataset.mmBypass)return;a.preventDefault(),a.stopPropagation(),Rn()}},!0);var Zt=document.querySelector("header.ra-header > .header-bottom");Zt&&Zt.addEventListener("click",function(a){var s=a.target.closest('a[href*="carrinho"], a[href*="/checkout/cart"], [class*="carrinho"]');s&&(a.preventDefault(),a.stopPropagation(),Rn())},!0),document.addEventListener("keydown",function(a){a.key==="Escape"&&Vn&&At()});var Ft=document.getElementById("mm-h-cart-count"),Tt=document.getElementById("mm-h-cart");function Zn(){if(Ft){var a=Ct();a>0?(Ft.textContent=a>99?"99+":String(a),Ft.hidden=!1):Ft.hidden=!0,Tt&&Tt.setAttribute("aria-label","Carrinho, "+a+" "+(a===1?"item":"itens"));var s=Dt();s&&s.dataset.mmLifted&&vt(s)}}window.addEventListener("reactItemAddedToCart",Zn),typeof jQuery<"u"&&(jQuery(document).on("reactItemAddedToCart",Zn),jQuery(document).ajaxComplete(function(a,s,u){u&&u.url&&u.url.indexOf("checkout/cart")!==-1&&setTimeout(Zn,150)})),setTimeout(Zn,500),setTimeout(Zn,2e3),setTimeout(Zn,5e3);function r(){var a=document.querySelector("#cart-preview-area .item-ctn, .carrinho-container .item-ctn");if(!(!a||a.dataset.mmObserved)){a.dataset.mmObserved="1";var s=new MutationObserver(Zn);s.observe(a,{childList:!0,characterData:!0,subtree:!0})}}r(),setTimeout(r,1e3),setTimeout(r,3e3);var p=new MutationObserver(function(a){for(var s=0;s<a.length;s++)for(var u=a[s].addedNodes,C=0;C<u.length;C++){var T=u[C];if(T.nodeType===1){var O=T.classList&&T.classList.contains("popup-adicionado-ao-carrinho")||T.querySelector&&T.querySelector(".popup-adicionado-ao-carrinho");if(O){setTimeout(Zn,120),setTimeout(Zn,700);return}}}});p.observe(document.body,{childList:!0,subtree:!0});var d=-1;setInterval(function(){var a=Ct();a!==d&&(d=a,Zn())},1e3);var k=0,E=!1,A=24;function B(){var a=window.scrollY,s=a-k;a>A&&s>0?m.classList.add("is-compact"):(a<=A||s<0)&&m.classList.remove("is-compact"),k=a,E=!1}window.addEventListener("scroll",function(){E||(requestAnimationFrame(B),E=!0)},{passive:!0})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",S):S()})(),(function(){if(!document.getElementById("mm-org-schema")){var R=document.querySelector('.logo img, header img[alt*="logo" i], header img[alt*="Madeira" i]'),N=R&&R.getAttribute("src")||"";N&&N.indexOf("http")!==0&&(N="https://www.madeiramania.com.br"+N);var j={"@context":"https://schema.org","@type":"OnlineStore","@id":"https://www.madeiramania.com.br/#organization",name:"Madeira Mania",url:"https://www.madeiramania.com.br",description:"Loja online de móveis com preços abaixo dos marketplaces. Racks, mesas, cristaleiras, sofás, camas e estantes com entrega para todo o Brasil. Até 12x sem juros ou 7% de desconto no PIX.",sameAs:["https://www.instagram.com/madeiramaniabr/","https://www.facebook.com/madeiramaniabr/","https://www.reclameaqui.com.br/empresa/madeira-mania-comercio-de-moveis-ltda/","https://www.youtube.com/@madeiramaniabr","https://www.tiktok.com/@madeiramaniabr"],contactPoint:[{"@type":"ContactPoint",telephone:"+55-11-91529-9488",contactType:"customer service",availableLanguage:"Portuguese"},{"@type":"ContactPoint",url:"https://wa.me/5511915299488",contactType:"customer service",description:"WhatsApp"}],hasMerchantReturnPolicy:{"@type":"MerchantReturnPolicy",applicableCountry:"BR",returnPolicyCategory:"https://schema.org/MerchantReturnFiniteReturnWindow",merchantReturnDays:7,returnMethod:"https://schema.org/ReturnByMail"}};N&&N.indexOf("http")===0&&(j.logo=N);var g=document.createElement("script");g.type="application/ld+json",g.id="mm-org-schema",g.textContent=JSON.stringify(j),document.head.appendChild(g)}})(),(function S(){S._retries=(S._retries||0)+1;var R=document.querySelector("#produto-react-app");if(!R||!R.querySelector(".informacoes-compra-produto")){S._retries<30&&setTimeout(S,500);return}if((function(){var g=R.querySelector("#container-swiper"),m=R.querySelector(".swiper-pagination");if(!g||!m)return;var l=m.querySelectorAll(".swiper-pagination-bullet");if(l.length<2)return;var f=R.querySelector(".gallery-main");if(f)for(var h=f.querySelectorAll(".button-prev, .button-next"),b=0;b<h.length;b++)h[b].style.display="none";var F=document.createElement("div");F.id="mm-gallery-counter",F.style.cssText=["position: absolute","top: 12px","left: 12px","background: rgba(255,255,255,0.85)","color: #333","font-size: 12px","font-weight: 500","padding: 3px 10px","border-radius: 12px","z-index: 10","pointer-events: none","font-family: -apple-system, BlinkMacSystemFont, sans-serif","letter-spacing: 0.5px"].join(";"),f&&(f.style.position="relative",f.appendChild(F));function z(){var P=m.querySelector(".swiper-pagination-bullet-active"),_=m.querySelectorAll(".swiper-pagination-bullet");if(!(!P||!_.length)){var q=Array.prototype.indexOf.call(_,P)+1;F.textContent=q+" / "+_.length}}z();var M=new MutationObserver(z);M.observe(m,{subtree:!0,attributes:!0,attributeFilter:["class"]})})(),(function(){var g=R.querySelector(".avaliacoes");if(g){for(var m=document.querySelectorAll("script:not([src])"),l=0,f=0,h=0;h<m.length;h++){var b=m[h].textContent;if(!(b.indexOf("Zord.avaliacoes")===-1&&b.indexOf("produtoAvaliacoes")===-1)){var F=b.match(/produtoAvaliacoes\s*:\s*(\d+)/),z=b.match(/\bnota\s*:\s*(?:Number\()?([\d.]+)/);if(F&&(l=parseInt(F[1],10)),z&&(f=parseFloat(z[1])),l>0)break}}if(l===0){g.style.display="none";return}for(var M=(f%1===0,f.toFixed(1)),P="",_=1;_<=5;_++)_<=Math.floor(f)||_-f<1&&_-f>0?P+='<span style="color:#f5a623;font-size:14px;">&#9733;</span>':P+='<span style="color:#ddd;font-size:14px;">&#9733;</span>';var q=l===1?"avaliação":"avaliações";g.innerHTML='<a href="#avaliacoes" style="display:inline-flex;align-items:center;gap:4px;text-decoration:none;color:#555;font-size:13px;">'+P+' <span style="font-weight:600;color:#1a1a1a;">'+M+'</span> <span style="color:#777;">('+l+" "+q+")</span></a>",g.style.display="",g.style.marginTop="4px"}})(),(function(){var g=R.querySelector("h1");if(g){var m=g.parentElement.querySelector(".text-secondary-700.text-xs");if(m){var l=g.textContent.toLowerCase().replace(/\s+/g," ").trim(),f=m.textContent.toLowerCase().replace(/\s+/g," ").trim(),h=f.split(/[\s\-:,]+/).filter(function(F){return F.length>2}),b=h.filter(function(F){return l.indexOf(F)!==-1});b.length>=h.length*.6&&(m.style.display="none")}}})(),(function(){var g=R.querySelector(".informacoes-compra-produto");if(!g||document.getElementById("mm-action-row"))return;var m=g.querySelector(".salvar-favoritos"),l=g.querySelector(".exibe-botao-whatsapp"),f=g.querySelector(".compartilhar-produto");if(!m&&!l&&!f)return;var h=document.createElement("div");h.id="mm-action-row";function b(){var U=document.createElementNS("http://www.w3.org/2000/svg","svg");U.setAttribute("width","18"),U.setAttribute("height","18"),U.setAttribute("viewBox","0 0 24 24"),U.setAttribute("fill","none"),U.setAttribute("stroke","currentColor"),U.setAttribute("stroke-width","2"),U.setAttribute("stroke-linecap","round"),U.setAttribute("stroke-linejoin","round");var ln=document.createElementNS("http://www.w3.org/2000/svg","path");return ln.setAttribute("d","M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"),U.appendChild(ln),U}function F(){var U=document.createElementNS("http://www.w3.org/2000/svg","svg");U.setAttribute("width","18"),U.setAttribute("height","18"),U.setAttribute("viewBox","0 0 24 24"),U.setAttribute("fill","none"),U.setAttribute("stroke","currentColor"),U.setAttribute("stroke-width","2"),U.setAttribute("stroke-linecap","round"),U.setAttribute("stroke-linejoin","round");var ln=document.createElementNS("http://www.w3.org/2000/svg","path");return ln.setAttribute("d","M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"),U.appendChild(ln),U}if(m){var z=document.createElement("div");z.className="salvar-favoritos";var M=document.createElement("button");M.setAttribute("aria-label","Favoritar"),M.appendChild(F()),M.addEventListener("click",function(){var U=m.querySelector("button");U&&U.click()}),z.appendChild(M),h.appendChild(z),m.style.cssText+=";position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;"}if(l&&(l.style.display="none"),f){var P=document.createElement("div");P.className="compartilhar-produto";var _=document.createElement("button");_.setAttribute("aria-label","Compartilhar"),_.appendChild(b()),_.addEventListener("click",function(){var U=f.querySelector("button");U&&U.click()}),P.appendChild(_),h.appendChild(P),f.style.cssText+=";position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;"}var q=g.querySelector("#area-comprar");if(q){for(var V=q,W=q.nextElementSibling;W;){var v=window.getComputedStyle(W).position;if(v==="fixed"||v==="sticky")V=W,W=W.nextElementSibling;else break}V.parentNode.insertBefore(h,V.nextSibling)}else g.appendChild(h)})(),(function(){var g=R.querySelector(".comprar-fixo.area-compra-float");if(!(!g||g.querySelector("#mm-sticky-old-price"))){var m=R.querySelector(".informacoes-compra-produto");if(m){var l=m.querySelector(".line-through");if(l){var f=l.textContent.trim(),h=g.querySelector(".price-fixed");if(h){var b=document.createElement("span");b.id="mm-sticky-old-price",b.textContent=f,b.style.cssText=["text-decoration: line-through","color: #999","font-size: 11px","display: block","line-height: 1.2","margin-bottom: 1px"].join(";"),h.insertBefore(b,h.firstChild)}}}}})(),(function(){var g=R.querySelector(".informacoes-compra-produto");if(!(!g||document.getElementById("mm-trust-badges"))){var m=g.querySelector("#area-comprar");if(m){var l=document.createElement("div");l.id="mm-trust-badges",l.style.cssText=["display: flex","justify-content: center","align-items: center","flex-wrap: wrap","gap: 6px 10px","padding: 8px 0","margin-top: 2px"].join(";");var f=[{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',text:"Compra Segura"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',text:"Troca 7 dias"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10" stroke="#4b664a"/></svg>',text:"Reclame Aqui"}],h="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:#777;white-space:nowrap;";f.forEach(function(F,z){var M=document.createElement("span");if(M.style.cssText=h,M.innerHTML=F.icon+" "+F.text,l.appendChild(M),z<f.length-1){var P=document.createElement("span");P.textContent="|",P.style.cssText="color:#ddd;font-size:10px;",l.appendChild(P)}});for(var b=m.nextElementSibling;b&&window.getComputedStyle(b).position==="fixed";)b=b.nextElementSibling;b?g.insertBefore(l,b):g.appendChild(l)}}})(),(function(){var g=R.querySelector(".informacoes-compra-produto");if(!(!g||document.getElementById("mm-whatsapp-cta"))){var m=(document.querySelector("#prod-nome")||{}).value||"",l=(document.querySelector("#prod-valor")||{}).value||"",f=window.location.origin+window.location.pathname+(/^#derivacao=/.test(window.location.hash)?window.location.hash:""),h="5511915299488",b="";l&&(b=parseFloat(l).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}));var F="Olá! Tenho interesse no "+m.trim();b&&(F+=" ("+b+")"),F+=". "+f;var z="https://api.whatsapp.com/send?phone="+h+"&text="+encodeURIComponent(F),M=document.createElement("a");M.id="mm-whatsapp-cta",M.href=z,M.target="_blank",M.rel="noopener noreferrer";var P='<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';M.innerHTML=P+"<span>Compre pelo WhatsApp</span>";var _=document.getElementById("mm-action-row"),q=document.getElementById("mm-trust-badges"),V=_||q;V&&V.parentNode===g&&g.insertBefore(M,V.nextElementSibling)}})(),(function(){var g=R.querySelector(".informacoes-compra-produto");if(!(!g||document.getElementById("mm-stock-indicator"))){for(var m=10,l=document.querySelectorAll("script:not([src])"),f=-1,h=0;h<l.length;h++){var b=l[h].textContent,F=b.match(/"qtde_estoque"\s*:\s*(\d+)/);if(F){f=parseInt(F[1],10);break}}var z=f-m;if(!(z<1||z>9)){var M=document.createElement("div");M.id="mm-stock-indicator",M.style.cssText=["display: flex","align-items: center","gap: 6px","padding: 8px 12px","background: #fff8f0","border: 1px solid #fde0c2","border-radius: 8px","font-size: 13px","color: #c65d00","font-weight: 500","margin-top: 4px"].join(";");var P=z===1?"unidade":"unidades";M.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c65d00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>Restam apenas <strong>'+z+"</strong> "+P+" em estoque";var _=g.firstElementChild;_&&_.parentNode.insertBefore(M,_.nextElementSibling)}}})(),(function(){if(!document.getElementById("mm-trust-block")){var g=window.innerWidth>=769,m=document.createElement("div");m.id="mm-trust-block",m.style.cssText=["background: #f7f8f7","display: flex","align-items: center","justify-content: center","gap: "+(g?"40px":"10px"),"padding: "+(g?"14px 24px":"12px 16px"),g?"flex-direction: row":"flex-direction: column",g?"border-top: 1px solid #e8ece8":"border-radius: 10px",g?"border-bottom: 1px solid #e8ece8":"",g?"margin: 0":"margin-top: 10px"].filter(Boolean).join(";");var l=[{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',label:"Atendimento",desc:"Seg à Sex 8h-18h"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',label:"Garantia",desc:"12 meses fabricação"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',label:"Trocas",desc:"Até 7 dias"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',label:"Frete",desc:"Todo o Brasil"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',label:"12x sem juros",desc:"No cartão"}],f="display:flex;align-items:center;gap:8px;",h="font-size:13px;font-weight:600;color:#1a1a1a;line-height:1.2;",b="font-size:11px;color:#777;line-height:1.2;";if(l.forEach(function(_){var q=document.createElement("div");q.style.cssText=f,q.innerHTML=_.icon+'<div><div style="'+h+'">'+_.label+'</div><div style="'+b+'">'+_.desc+"</div></div>",m.appendChild(q)}),g){var F=document.querySelector("#pagina-produto-react-app");if(F&&F.nextSibling)F.parentNode.insertBefore(m,F.nextSibling);else{var z=document.querySelector(".main-produto");z&&z.appendChild(m)}}else{var M=R.querySelector(".informacoes-compra-produto"),P=M?M.querySelector(".calculo-frete"):null;P?P.parentNode.insertBefore(m,P.nextElementSibling):M&&M.appendChild(m)}}})(),(function(){var g=R.querySelector(".informacoes-compra-produto");if(!g||document.getElementById("mm-inline-payments"))return;var m=g.querySelector(".form-pag-link");if(!m)return;var l=parseFloat(m.getAttribute("data-valor"))||0,f=parseFloat(m.getAttribute("data-valor-pix"))||0;if(l<=0)return;for(var h=[],b=1;b<=12;b++)h.push({vezes:b,valor:(l/b).toFixed(2).replace(".",",")});function F(rn){return"R$ "+rn.toFixed(2).replace(".",",")}var z=l-f,M=document.createElement("div");M.id="mm-inline-payments",M.style.cssText=["padding: 12px 0","border-top: 1px solid #f0f0f0","margin-top: 4px"].join(";");var P=window.innerWidth>=769,_="display:flex;align-items:center;gap:6px;padding:"+(P?"2px":"4px")+" 0;font-size:13px;color:#444;",q="width:5px;height:5px;border-radius:50%;background:#4b664a;flex-shrink:0;",V='<div style="'+_+'"><span style="'+q+'"></span><span><strong style="color:#1a1a1a;">PIX: '+F(f)+"</strong>"+(z>0?' <span style="color:#2e7d32;font-size:12px;font-weight:600;">(economize '+F(z)+")</span>":"")+"</span></div>";if(P)M.innerHTML=V+'<button id="mm-toggle-parcelas" style="background:none;border:none;color:#4b664a;font-size:13px;font-weight:500;padding:2px 0 0;cursor:pointer;display:flex;align-items:center;gap:4px;">Ver todas as parcelas <span style="font-size:10px;">&#9660;</span></button><div id="mm-more-parcelas" style="display:none;"></div>';else{for(var W="",v=0;v<3;v++)W+='<div style="'+_+'"><span style="'+q+'"></span><span>'+h[v].vezes+"x de R$ "+h[v].valor+" sem juros</span></div>";M.innerHTML=V+W+'<button id="mm-toggle-parcelas" style="background:none;border:none;color:#4b664a;font-size:13px;font-weight:500;padding:6px 0 0;cursor:pointer;display:flex;align-items:center;gap:4px;">Ver todas as parcelas <span style="font-size:10px;">&#9660;</span></button><div id="mm-more-parcelas" style="display:none;"></div>'}for(var U="",ln=P?0:3,Z=ln;Z<12;Z++)U+='<div style="'+_+'"><span style="'+q+'"></span><span>'+h[Z].vezes+"x de R$ "+h[Z].valor+" sem juros</span></div>";var pn=m.closest("div");pn&&(pn.parentNode.insertBefore(M,pn),m.style.display="none");var I=document.getElementById("mm-more-parcelas");I&&(I.innerHTML=U);var H=document.getElementById("mm-toggle-parcelas");H&&I&&H.addEventListener("click",function(){var rn=I.style.display!=="none";I.style.display=rn?"none":"block",H.innerHTML=rn?'Ver todas as parcelas <span style="font-size:10px;">&#9660;</span>':'Ver menos <span style="font-size:10px;">&#9650;</span>'})})(),(function(){var g=document.querySelector(".recomendacao-ctn-0.accordion"),m=document.querySelector(".descricao-produto.accordion");if(!(!g||!m)){var l=g.parentNode;if(!(!l||l!==m.parentNode)){var f=Array.prototype.slice.call(l.children),h=f.indexOf(g),b=f.indexOf(m);h<b&&l.insertBefore(m,g)}}})(),(function(){var g=document.querySelector("#cep");if(!g)return;var m="mm_cep",l=g.closest(".area-calculo");if(l){var f=l.querySelector("button");f&&f.addEventListener("click",function(){var P=g.value.replace(/\D/g,"");if(P.length===8)try{localStorage.setItem(m,P)}catch{}})}var h=null;try{h=localStorage.getItem(m)}catch{}if(!h||h.length!==8||g.value.replace(/\D/g,"").length>0)return;var b=h.substring(0,5)+"-"+h.substring(5);function F(P,_){P.focus();try{P.setSelectionRange(0,(P.value||"").length)}catch{}try{document.execCommand("delete")}catch{}try{document.execCommand("insertText",!1,_)}catch{}}function z(){var P=g.closest(".calculo-frete");return!!(P&&/R\$\s*\d/.test(P.innerText))}function M(P){P<=0||z()||(F(g,b),setTimeout(function(){if(!z()){var _=g.closest(".area-calculo"),q=_&&_.querySelector("button:not([disabled])");q&&q.click(),setTimeout(function(){z()||M(P-1)},2e3)}},2500))}setTimeout(function(){M(3)},600)})(),(function(){for(var g=document.querySelectorAll('.exibe-botao-whatsapp a[href*="whatsapp"]'),m=0;m<g.length;m++){var l=g[m].getAttribute("href");l&&l.indexOf("null")!==-1&&g[m].setAttribute("href",l.replace(/\s*null\s*/g," ").replace(/\s{2,}/g," "))}var f=document.querySelector(".exibe-botao-whatsapp");if(f){var h=new MutationObserver(function(){var b=f.querySelector('a[href*="whatsapp"]');b&&b.href.indexOf("null")!==-1&&b.setAttribute("href",b.getAttribute("href").replace(/\s*null\s*/g," ").replace(/\s{2,}/g," "))});h.observe(f,{subtree:!0,attributes:!0,attributeFilter:["href"]})}})(),(function(){var g=R.querySelector(".informacoes-compra-produto");if(!(!g||document.getElementById("mm-envio-badge"))){for(var m=!1,l=R.querySelectorAll(".tag-produto .text-tag, .tag-produto"),f=0;f<l.length;f++)if(l[f].textContent.toLowerCase().indexOf("envio")!==-1){m=!0;break}if(!m)for(var h=document.querySelectorAll("script:not([src])"),b=0;b<h.length;b++){var F=h[b].textContent.match(/"qtde_estoque"\s*:\s*(\d+)/);if(F){parseInt(F[1],10)>10&&(m=!0);break}}if(m){var z=document.createElement("div");z.id="mm-envio-badge",z.style.cssText=["display: inline-flex","align-items: center","gap: 6px","padding: 4px 0","font-size: 13px","color: #1a1a1a","margin-top: 4px"].join(";"),z.innerHTML='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c65d00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span><strong style="color:#1a1a1a;">Pronta entrega</strong> <span style="color:#777;font-weight:400;">·</span> <span style="color:#555;font-weight:400;">Enviamos em 24h</span></span>';var M=g.firstElementChild;M&&M.nextElementSibling&&M.parentNode.insertBefore(z,M.nextElementSibling)}}})(),(function(){for(var g=R.querySelectorAll(".tag-1.tag-produto"),m=0;m<g.length;m++){var l=g[m].textContent.trim();(l.indexOf("%")!==-1||l.indexOf("OFF")!==-1)&&(g[m].style.display="none")}})(),(function(){for(var g=document.querySelectorAll('a[href*="avaliacoes"], a[href="#avaliacoes"]'),m=0;m<g.length;m++)g[m].addEventListener("click",function(l){l.preventDefault();var f=document.querySelector("#avaliacoes")||document.querySelector(".container-avaliacoes");f&&f.scrollIntoView({behavior:"smooth",block:"start"})})})(),(function(){var g=R.querySelector("h1");if(!(!g||document.getElementById("mm-brand"))){var m=document.querySelector("#prod-marca");if(!(!m||!m.value||m.value.trim()==="")){var l=document.createElement("span");l.id="mm-brand",l.style.cssText="display:block;font-size:13px;color:#777;font-weight:400;margin-top:2px;",l.textContent="por "+m.value.trim();var f=g.parentElement;if(f){var h=g.nextElementSibling;h?f.insertBefore(l,h):f.appendChild(l)}}}})(),(function(){var g=document.getElementById("mm-trust-badges");if(g){for(var m=g.querySelectorAll("span"),l=0;l<m.length;l++)if(m[l].textContent.indexOf("Reclame")!==-1){var f=document.querySelector('footer .reclame-aqui a, footer a[href*="reclameaqui"]'),h=f?f.href:"https://www.reclameaqui.com.br/empresa/madeira-mania-comercio-de-moveis-ltda/";m[l].innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10" stroke="#4b664a"/></svg> <a href="'+h+'" target="_blank" rel="noopener" style="color:#777;text-decoration:none;">RA Verificada</a>'}}})(),(function(){var g=R.querySelector(".informacoes-compra-produto");if(g){var m=g.querySelector(".calculo-frete");if(m){g.style.cssText+=";display:flex !important;flex-direction:column !important;",m.style.cssText+=";order:20 !important;";var l=document.getElementById("mm-trust-block");l&&(l.style.cssText+=";order:30 !important;")}}})(),(function(){var g=R.querySelector(".informacoes-compra-produto");if(!(!g||document.getElementById("mm-mini-specs"))){var m=document.querySelector(".descricao-produto"),l={};if(m)for(var f=m.querySelectorAll("td"),h=0;h<f.length-1;h+=2){var b=f[h].textContent.trim().toLowerCase(),F=f[h+1].textContent.trim();b.indexOf("largura")!==-1&&(l.largura=F),b.indexOf("altura")!==-1&&(l.altura=F),b.indexOf("profundidade")!==-1&&(l.profundidade=F),b.indexOf("material")!==-1&&(l.material=F),b.indexOf("dobradi")!==-1&&(l.dobradicas=F),(b.indexOf("pes")!==-1||b.indexOf("pés")!==-1)&&(l.pes=F)}if(!(!l.largura&&!l.material)){var z=[];if(l.material&&z.push(l.material),l.dobradicas&&z.push("Dobradiças "+l.dobradicas),l.pes&&z.push("Pés: "+l.pes),l.largura&&z.push(l.largura+" × "+(l.altura||"")+" × "+(l.profundidade||"")),z.length!==0){var M=document.createElement("div");M.id="mm-mini-specs",M.style.cssText="padding:8px 0;border-top:1px solid #f0f0f0;margin-top:4px;";var P="";z.forEach(function(q){P+='<div style="display:flex;align-items:center;gap:6px;padding:2px 0;font-size:13px;color:#555;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polyline points="20 6 9 17 4 12"/></svg><span>'+q+"</span></div>"}),M.innerHTML=P;var _=g.querySelector("#area-comprar");_&&g.insertBefore(M,_)}}}})(),(function(){if(window.innerWidth<769||document.getElementById("mm-desktop-sticky"))return;var g=R.querySelector(".informacoes-compra-produto");if(!g)return;var m=g.querySelector(".line-through"),l=(document.querySelector("#prod-valor-principal")||{}).value,f=(document.querySelector("#prod-valor")||{}).value,h=(document.querySelector("#prod-nome")||{}).value||"",b=h.split(" - ")[0]||h;if(!l)return;var F=m?m.textContent.trim():"",z=parseFloat(l).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),M=f?parseFloat(f).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}):"",P=f?(parseFloat(f)/12).toFixed(2).replace(".",","):"",_=document.createElement("div");_.id="mm-desktop-sticky",_.style.cssText=["position: fixed","top: -60px","left: 0","width: 100%","height: 56px","background: #ffffff","border-bottom: 1px solid #e8ece8","box-shadow: 0 2px 8px rgba(0,0,0,0.06)","z-index: 100","display: flex","align-items: center","justify-content: center","padding: 0 24px","transition: top 0.25s ease","font-family: -apple-system, BlinkMacSystemFont, sans-serif"].join(";");var q="display:flex;align-items:center;gap:16px;max-width:1200px;width:100%;",V="font-size:14px;font-weight:500;color:#1a1a1a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:300px;",W="display:flex;align-items:center;gap:8px;margin-left:auto;",v="text-decoration:line-through;color:#999;font-size:12px;",U="font-size:15px;font-weight:600;color:#1a1a1a;",ln="font-size:12px;color:#666;",Z="display:inline-flex;align-items:center;justify-content:center;padding:8px 20px;background:#4b664a;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer;white-space:nowrap;";_.innerHTML='<div style="'+q+'"><span style="'+V+'">'+b+'</span><div style="'+W+'">'+(F?'<span style="'+v+'">'+F+"</span>":"")+'<span style="'+U+'">'+z+' <small style="font-weight:400;font-size:11px;color:#666;">PIX</small></span>'+(P?'<span style="'+ln+'">12x R$ '+P+"</span>":"")+'</div><button id="mm-desktop-sticky-btn" style="'+Z+'">Comprar</button></div>',document.body.appendChild(_);var pn=document.getElementById("mm-desktop-sticky-btn");pn&&pn.addEventListener("click",function(){var rn=R.querySelector(".btn-comprar");rn&&rn.click()});var I=g.querySelector("#area-comprar");if(!I)return;function H(){var rn=I.getBoundingClientRect();_.style.top=rn.bottom<0?"0px":"-60px"}window.addEventListener("scroll",H,{passive:!0}),H()})(),(function(){var g=[".selos-seguranca",".formas-pagto"];g.forEach(function(m){var l=document.querySelector("footer "+m);l&&l.classList.contains("closed")&&(l.classList.remove("closed"),l.classList.add("open"))})})(),window.innerWidth>=769){var N=R.querySelector(".informacoes-compra-produto");N&&(N.style.setProperty("gap","12px","important"),N.style.setProperty("row-gap","12px","important"))}document.body.classList.add("mm-ready")})();var Kt=document.currentScript;(function S(){S._retries=(S._retries||0)+1;var R=document.querySelector("#produto-react-app");if(!R||!R.querySelector(".informacoes-compra-produto")){S._retries<30&&setTimeout(S,500);return}if(!document.getElementById("mm-product-schema")){var N=R.querySelector("h1"),j=N?N.textContent.trim():"";if(j){var g=document.querySelector('link[rel="canonical"]'),m=g?g.href:location.href.split("?")[0],l=document.querySelector("#prod-marca"),f=l?l.value.trim():"";!f&&window.dataLayer&&window.dataLayer[0]&&(f=window.dataLayer[0].brand||"");var h=R.querySelector(".form-pag-link"),b=document.querySelector("#prod-valor-principal"),F=document.querySelector("#prod-valor"),z=0,M=0;h&&(z=parseFloat(h.getAttribute("data-valor-pix"))||0,M=parseFloat(h.getAttribute("data-valor"))||0),!M&&F&&(M=parseFloat(F.value)||0),!z&&b&&(z=parseFloat(b.value)||0);var P=z>0?z:M;if(!(P<=0)){var _="";window.dataLayer&&window.dataLayer[0]&&(_=window.dataLayer[0].sku||"");var q="",V="";window.dataLayer&&window.dataLayer[0]&&(q=window.dataLayer[0].category||"",V=window.dataLayer[0].category2||"");for(var W=document.querySelector("#prod-deposito"),v=W?W.value==="1":!0,U=[],ln=R.querySelectorAll(".gallery-main img, #block-imagem img"),Z=0;Z<ln.length;Z++){var pn=ln[Z].getAttribute("src")||ln[Z].getAttribute("data-src")||"";pn&&pn.indexOf("http")===0&&U.indexOf(pn)===-1&&U.push(pn)}if(U.length===0){var I=document.querySelector('meta[property="og:image"]');I&&I.content&&U.push(I.content)}var H=document.querySelector('meta[name="description"]'),rn=H?H.content.trim():"";if(!rn){var Nn=document.querySelector(".descricao-produto .accordion-content p");Nn&&(rn=Nn.textContent.trim().substring(0,500))}for(var Sn=0,jn=0,zn=document.querySelectorAll("script:not([src])"),ot=0;ot<zn.length;ot++){var nt=zn[ot].textContent;if(!(nt.indexOf("Zord.avaliacoes")===-1&&nt.indexOf("produtoAvaliacoes")===-1)){var $n=nt.match(/produtoAvaliacoes\s*:\s*(\d+)/),_n=nt.match(/\bnota\s*:\s*(?:Number\()?([\d.]+)/);$n&&(Sn=parseInt($n[1],10)),_n&&(jn=parseFloat(_n[1]))}}var qn={"@context":"https://schema.org","@type":"Product",name:j,url:m,image:U,description:rn,sku:_,brand:{"@type":"Brand",name:f||"Madeira Mania"},offers:{"@type":"Offer",url:m,price:P.toFixed(2),priceCurrency:"BRL",availability:v?"https://schema.org/InStock":"https://schema.org/OutOfStock",itemCondition:"https://schema.org/NewCondition",seller:{"@type":"Organization",name:"Madeira Mania"},hasMerchantReturnPolicy:{"@type":"MerchantReturnPolicy",applicableCountry:"BR",returnPolicyCategory:"https://schema.org/MerchantReturnFiniteReturnWindow",merchantReturnDays:7,returnMethod:"https://schema.org/ReturnByMail"},shippingDetails:{"@type":"OfferShippingDetails",shippingDestination:{"@type":"DefinedRegion",addressCountry:"BR"},deliveryTime:{"@type":"ShippingDeliveryTime",handlingTime:{"@type":"QuantitativeValue",minValue:1,maxValue:3,unitCode:"DAY"},transitTime:{"@type":"QuantitativeValue",minValue:5,maxValue:20,unitCode:"DAY"}}}}};M>0&&(qn.offers.priceSpecification=[{"@type":"UnitPriceSpecification",price:z>0?z.toFixed(2):P.toFixed(2),priceCurrency:"BRL",name:"PIX"},{"@type":"UnitPriceSpecification",price:(M/12).toFixed(2),priceCurrency:"BRL",name:"12x sem juros",referenceQuantity:{"@type":"QuantitativeValue",value:12,unitCode:"MON"}}]),Sn>0&&jn>0&&(qn.aggregateRating={"@type":"AggregateRating",ratingValue:jn.toFixed(1),bestRating:"5",worstRating:"1",reviewCount:String(Sn)}),q&&(qn.category=q+(V?" > "+V:""));var Mn=document.createElement("script");Mn.type="application/ld+json",Mn.id="mm-product-schema",Mn.textContent=JSON.stringify(qn),document.head.appendChild(Mn),Kt&&Kt.parentNode&&Kt.parentNode.removeChild(Kt)}}}})();var ne=document.currentScript;(function S(){S._retries=(S._retries||0)+1;var R=document.querySelector("#produto-react-app"),N=R?R.querySelector("h1"):null;if(!N){S._retries<30&&setTimeout(S,500);return}if(!document.getElementById("mm-breadcrumb-schema")){var j=[],g=1;j.push({"@type":"ListItem",position:g++,name:"Home",item:"https://www.madeiramania.com.br"});var m=document.querySelectorAll('.breadcrumb a, nav[aria-label*="breadcrumb" i] a, .migalha a, .breadcrumb-item a');if(m.length>0)for(var l=0;l<m.length;l++){var f=m[l],h=f.textContent.trim(),b=f.href;!h||h.toLowerCase()==="home"||h.toLowerCase()==="início"||!b||b==="#"||j.push({"@type":"ListItem",position:g++,name:h,item:b})}else if(window.dataLayer&&window.dataLayer[0]){var F=window.dataLayer[0].category||"",z=window.dataLayer[0].category2||"";F&&j.push({"@type":"ListItem",position:g++,name:F,item:"https://www.madeiramania.com.br/"+F.toLowerCase().replace(/\s+/g,"-").replace(/[àáâã]/g,"a").replace(/[éêë]/g,"e").replace(/[íî]/g,"i").replace(/[óôõ]/g,"o").replace(/[úû]/g,"u").replace(/ç/g,"c")}),z&&z!==F&&j.push({"@type":"ListItem",position:g++,name:z,item:"https://www.madeiramania.com.br/"+z.toLowerCase().replace(/\s+/g,"-").replace(/[àáâã]/g,"a").replace(/[éêë]/g,"e").replace(/[íî]/g,"i").replace(/[óôõ]/g,"o").replace(/[úû]/g,"u").replace(/ç/g,"c")})}if(j.push({"@type":"ListItem",position:g,name:N.textContent.trim()}),!(j.length<2)){var M={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:j},P=document.createElement("script");P.type="application/ld+json",P.id="mm-breadcrumb-schema",P.textContent=JSON.stringify(M),document.head.appendChild(P),ne&&ne.parentNode&&ne.parentNode.removeChild(ne)}}})();var te=document.currentScript;(function S(){S._retries=(S._retries||0)+1;var R=document.querySelector(".descricao-produto");if(!R){S._retries<30&&setTimeout(S,500);return}if(!document.getElementById("mm-faq-section")){var N=[{q:"Como funciona a entrega de móveis?",a:"Enviamos para todo o Brasil por transportadora especializada em móveis. O prazo varia de 5 a 20 dias úteis dependendo da sua região. Você pode calcular o frete e prazo exato informando seu CEP na página do produto, acima do botão de compra."},{q:"O móvel vem montado ou precisa montar?",a:"A maioria dos móveis é enviada desmontada para garantir segurança no transporte. Cada produto inclui manual de montagem com instruções passo a passo e todas as ferragens necessárias. Produtos de madeira maciça geralmente exigem apenas encaixe simples de pés ou portas."},{q:"Vocês entregam em apartamento e zona rural?",a:"Sim, entregamos em apartamentos e áreas urbanas em todo o Brasil. Para zonas rurais, a disponibilidade depende da região — consulte informando seu CEP. A entrega é realizada até a portaria ou térreo do edifício."},{q:"E se o produto chegar com defeito?",a:"Você tem 7 dias para solicitar troca ou devolução a partir do recebimento, conforme o Código de Defesa do Consumidor (Art. 49). Basta entrar em contato pelo nosso WhatsApp com fotos do defeito. Todos os produtos possuem garantia de 12 meses contra defeitos de fabricação."},{q:"Quais as formas de pagamento?",a:"Aceitamos PIX com 7% de desconto (processado na hora), cartão de crédito em até 12x sem juros (Visa, Mastercard, Elo, American Express) e boleto bancário. O pagamento via PIX agiliza o despacho do seu pedido."},{q:"O preço de vocês é realmente menor que nos marketplaces?",a:"Sim. Como vendemos direto ao consumidor, sem comissões de marketplace, nossos preços são consistentemente 10% a 25% menores que MadeiraMadeira, Mercado Livre e outros. Compare o mesmo produto pelo código SKU do fabricante e confira a diferença."},{q:"Como funciona a garantia?",a:"Todos os produtos possuem garantia de 12 meses contra defeitos de fabricação, além do direito de arrependimento de 7 dias garantido pelo CDC. Móveis de madeira maciça, com os cuidados adequados, possuem durabilidade superior a 30 anos."}];if(!document.getElementById("mm-faq-styles")){var j=document.createElement("style");j.id="mm-faq-styles",j.textContent=["#mm-faq-section button:focus-visible { outline: 2px solid #4b664a; outline-offset: 2px; border-radius: 4px; }","#mm-faq-section button:active { opacity: 0.7; }","@media (prefers-reduced-motion: reduce) { #mm-faq-section * { transition: none !important; } }"].join(`
`),document.head.appendChild(j)}var g=document.createElement("div");g.id="mm-faq-section",g.style.cssText=["margin: 24px 0","padding: 0 8px"].join(";");var m=document.createElement("h2");m.style.cssText=["font-size: 18px","font-weight: 700","color: #1a1a1a","margin-bottom: 16px","padding-bottom: 8px","border-bottom: 2px solid #4b664a"].join(";"),m.textContent="Perguntas Frequentes",g.appendChild(m);var l=document.createElement("div");l.style.cssText=["display: flex","flex-direction: column","gap: 0"].join(";"),N.forEach(function(z,M){var P=document.createElement("div");P.style.cssText="border-bottom: 1px solid #e8ece8;";var _=document.createElement("button");_.setAttribute("aria-expanded","false"),_.setAttribute("aria-controls","mm-faq-answer-"+M),_.style.cssText=["display: flex","justify-content: space-between","align-items: center","width: 100%","padding: 16px 0","background: none","border: none","cursor: pointer","text-align: left","font-size: 15px","font-weight: 600","color: #1a1a1a","line-height: 1.4","font-family: inherit","-webkit-tap-highlight-color: transparent"].join(";");var q=document.createElement("span");q.textContent=z.q,q.style.cssText="flex: 1; padding-right: 12px;";var V=document.createElement("span");V.textContent="+",V.style.cssText=["font-size: 20px","font-weight: 300","color: #4b664a","flex-shrink: 0","transition: transform 0.2s ease","width: 24px","text-align: center"].join(";"),_.appendChild(q),_.appendChild(V);var W=document.createElement("div");W.id="mm-faq-answer-"+M,W.setAttribute("role","region"),W.setAttribute("aria-labelledby","mm-faq-q-"+M),_.id="mm-faq-q-"+M,W.style.cssText=["max-height: 0","overflow: hidden","transition: max-height 0.3s ease, padding 0.3s ease","font-size: 14px","line-height: 1.6","color: #444"].join(";");var v=document.createElement("div");v.style.cssText="padding: 0 0 14px 0;",v.textContent=z.a,W.appendChild(v),_.addEventListener("click",function(){var U=_.getAttribute("aria-expanded")==="true";U?(W.style.maxHeight="0px",V.textContent="+",_.setAttribute("aria-expanded","false")):(W.style.maxHeight=W.scrollHeight+"px",V.textContent="−",_.setAttribute("aria-expanded","true"))}),_.addEventListener("touchstart",function(){_.style.opacity="0.7"},{passive:!0}),_.addEventListener("touchend",function(){_.style.opacity="1"},{passive:!0}),P.appendChild(_),P.appendChild(W),l.appendChild(P)}),g.appendChild(l);var f=document.querySelector(".produtos-relacionados"),h=document.querySelector(".container-avaliacoes");if(f&&f.nextSibling?f.parentNode.insertBefore(g,f.nextSibling):h?h.parentNode.insertBefore(g,h):R.parentNode.appendChild(g),!document.getElementById("mm-faq-schema")){var b={"@context":"https://schema.org","@type":"FAQPage",mainEntity:N.map(function(z){return{"@type":"Question",name:z.q,acceptedAnswer:{"@type":"Answer",text:z.a}}})},F=document.createElement("script");F.type="application/ld+json",F.id="mm-faq-schema",F.textContent=JSON.stringify(b),document.head.appendChild(F)}te&&te.parentNode&&te.parentNode.removeChild(te)}})(),(function S(){S._retries=(S._retries||0)+1;var R=document.querySelector("#produto-react-app");if(!R||!R.querySelector("h1")){S._retries<30&&setTimeout(S,500);return}if(!document.querySelector('meta[property="og:title"]')){var N=R.querySelector("h1"),j=N?N.textContent.trim():document.title,g=document.querySelector('meta[name="description"]'),m=g?g.content.trim():"";if(!m){var l=document.querySelector(".descricao-produto .accordion-content p");l&&(m=l.textContent.trim().substring(0,200))}m||(m=j+" - Compre online na Madeira Mania com até 12x sem juros ou 7% de desconto no PIX.");var f=document.querySelector('link[rel="canonical"]'),h=f?f.href:location.href.split("?")[0],b="",F=R.querySelector(".gallery-main img, #block-imagem img");if(F&&(b=F.getAttribute("src")||F.getAttribute("data-src")||""),!b){var z=document.querySelector('meta[property="og:image"]');z&&(b=z.content)}var M=R.querySelector(".form-pag-link"),P=M&&parseFloat(M.getAttribute("data-valor-pix"))||0;if(P>0){var _="R$ "+P.toFixed(2).replace(".",",");m.indexOf("R$")===-1&&(m=m.replace(/\.$/,"")+" | A partir de "+_+" no PIX.")}m.length>200&&(m=m.substring(0,197)+"...");var q=[{property:"og:type",content:"product"},{property:"og:title",content:j},{property:"og:description",content:m},{property:"og:url",content:h},{property:"og:site_name",content:"Madeira Mania"},{property:"og:locale",content:"pt_BR"}];b&&(q.push({property:"og:image",content:b}),q.push({property:"og:image:width",content:"600"}),q.push({property:"og:image:height",content:"600"})),q.push({name:"twitter:card",content:"summary_large_image"}),q.push({name:"twitter:title",content:j}),q.push({name:"twitter:description",content:m}),b&&q.push({name:"twitter:image",content:b}),q.forEach(function(V){var W=document.createElement("meta");V.property&&W.setAttribute("property",V.property),V.name&&W.setAttribute("name",V.name),W.setAttribute("content",V.content),document.head.appendChild(W)})}})(),(function(S){"use strict";if(!document.getElementById("produto-react-app")&&!document.getElementById("pagina-produto-react-app"))return;const R="3.0.0";window.innerWidth>=1500&&S(document).ready(function(){function g(){S(".gallery-main .swiper-slide img").each(function(){var m=this,l=S(this).closest(".swiper-slide"),f=l.closest(".swiper");function h(){var b=m.naturalWidth,F=m.naturalHeight;b&&F&&b===F&&f.css({"max-width":b+"px",overflow:"hidden"})}m.complete?h():m.addEventListener("load",h)})}g()}),window._variacoesMagazordCarregado&&(console.log(`%c⚠️ Variações Magazord v${R} - Substituindo instância anterior`,"color: #ff9800; font-weight: bold"),window.GerenciadorVariacoesPillsMagazord&&S(".product-variations-pills-container").remove()),window._variacoesMagazordCarregado=R,console.log(`%c🚀 Variações Magazord v${R} (dataProduct) - Inicializando...`,"color: #2196f3; font-weight: bold");const N={formatoNome:{separador:" - ",separadorTipoValor:": ",exibirNomeCompleto:!1,primeiraParte:"nome_base"},labels:{ALTURA:"Altura",LARGURA:"Largura",ILUMINACAO:"Iluminação",ILUMINAÇÃO:"Iluminação",PROFUNDIDADE:"Profundidade",COR:"Cor",ACABAMENTO:"Acabamento",TAMANHO:"Tamanho",PORTAS:"Número de Portas",ESPELHO:"Espelho",GAVETAS:"Gavetas",MODELO:"Modelo",MATERIAL:"Material",LUGARES:"Lugares",FORMATO:"Formato"},variacoesComImagem:["COR","ACABAMENTO"],ignorarPalavras:[],selectors:{areaProdutosSugeridos:".sugestoes-cores",areaVariacoes:".derivacoes-produto .area-derivacoes",containerProduto:".info-produto, .box-info-produto, main",subtituloProduto:".informacoes-compra-produto .text-secondary-700.text-xs"},retry:{maxTentativas:10,intervaloMs:500,usarMutationObserver:!0},debug:!0,performance:{useRequestAnimationFrame:!0,debounceDelay:150}};class j{constructor(){this.variacoes={},this.produtoAtualId=null,this.produtos=[],this.tentativasDeCarregamento=0,this.observer=null,this.inicializado=!1}init(){this.log("🎯 Gerenciador de Variações Magazord v3 (dataProduct)","info"),this.log("🎨 Swatches de imagem para cores + Pills para outras variações","info"),this.esperarDOMPronto()}esperarDOMPronto(){if(typeof jQuery>"u"){setTimeout(()=>this.esperarDOMPronto(),100);return}S(document).ready(()=>{this.log("✅ DOM pronto! Aguardando dataProduct...","success"),this.esperarDataProduct()})}esperarDataProduct(){typeof dataProduct<"u"&&dataProduct.listaProdutosSugeridos?(this.log("✅ dataProduct encontrado!","success"),this.tentarCarregar()):(this.log("⏳ Aguardando dataProduct...","info"),setTimeout(()=>this.esperarDataProduct(),300))}tentarCarregar(){this.tentativasDeCarregamento++,this.log(`
🔄 Tentativa ${this.tentativasDeCarregamento}/${N.retry.maxTentativas}`,"info"),this.carregarProdutos()?(this.processarVariacoes(),this.renderizarVariacoes(),this.bindEventos(),this.inicializado=!0,this.log(`
🎉 Inicialização concluída com sucesso!`,"success"),N.retry.usarMutationObserver&&this.observarMudancasDOM()):this.tentativasDeCarregamento<N.retry.maxTentativas?setTimeout(()=>this.tentarCarregar(),N.retry.intervaloMs):this.log("❌ Número máximo de tentativas atingido.","error")}observarMudancasDOM(){this.log("ℹ️ MutationObserver desativado - dados carregados via dataProduct","info")}log(m,l="log",f=null){if(!N.debug)return;const h={info:"color: #2196f3; font-weight: bold",success:"color: #4caf50; font-weight: bold",warning:"color: #ff9800; font-weight: bold",error:"color: #f44336; font-weight: bold",log:"color: #666"};console.log(`%c${m}`,h[l]||h.log),f&&console.log(f)}carregarProdutos(){if(this.produtos=[],typeof dataProduct>"u"||!dataProduct.listaProdutosSugeridos)return this.log("❌ dataProduct ou listaProdutosSugeridos não encontrado","error"),!1;const m=dataProduct.listaProdutosSugeridos,l=dataProduct.produto,f=dataProduct.hostImagem||"";if(this.log(`📦 Encontrados ${m.length} produtos sugeridos + produto atual`,"info"),l&&l.complemento){const h=l.midia_path&&l.midia_arquivo_nome?`${f}/${l.midia_path}${l.midia_arquivo_nome}`:"",b={id:l.derivacao_id||l.produto_id,nomeCompleto:l.complemento.trim(),estoque:l.qtde_estoque,url:l.link?`/${l.link}`:"",imagem:h,imagemData:h,elemento:null,variacoes:{},nomeBase:"",nomeExibicao:"",isAtual:!0};this.produtoAtualId=b.id,this.extrairVariacoesDoNome(b),this.produtos.push(b),this.log(`   ✓ Produto atual: "${b.nomeCompleto}"`,"success")}return m.forEach((h,b)=>{const F=h.complemento||h.nome||"";if(!F)return;const z=h.derivacao_id||h.produto_id;if(z===this.produtoAtualId){this.log(`   ⏭️ Ignorando duplicata: "${F}"`,"info");return}const M=h.midia_path&&h.midia_arquivo_nome?`${f}/${h.midia_path}${h.midia_arquivo_nome}`:"",P={id:z||b,nomeCompleto:F.trim(),estoque:h.qtde_estoque,url:h.link?`/${h.link}`:"",imagem:M,imagemData:M,elemento:null,variacoes:{},nomeBase:"",nomeExibicao:"",isAtual:!1};this.extrairVariacoesDoNome(P),this.produtos.push(P),this.log(`   ✓ Sugerido: "${P.nomeCompleto}"`,"log")}),this.produtos.length===0?!1:(this.log("✅ Produtos carregados e processados:","success",this.produtos),!0)}normalizarSeparadores(m){const l=["–","—","−","‐","‑","⁃"];let f=m;return l.forEach(h=>{const b=new RegExp(`\\s${h}\\s`,"g");f=f.replace(b," - ")}),f}extrairVariacoesDoNome(m){const f=this.normalizarSeparadores(m.nomeCompleto).split(N.formatoNome.separador);this.log(`
📝 Processando: "${m.nomeCompleto}"`,"log"),N.formatoNome.primeiraParte==="nome_base"&&(m.nomeBase=f[0].trim(),f.shift()),f.forEach(h=>{const b=h.trim();if(b&&b.includes(N.formatoNome.separadorTipoValor)){const[F,...z]=b.split(N.formatoNome.separadorTipoValor),M=z.join(N.formatoNome.separadorTipoValor).trim(),P=this.normalizarTipo(F.trim());if(N.ignorarPalavras.includes(P))return;m.variacoes[P]=M,this.log(`   ✓ ${P}: ${M}`,"success")}}),m.nomeExibicao=N.formatoNome.exibirNomeCompleto?m.nomeCompleto:m.nomeBase||m.nomeCompleto,Object.keys(m.variacoes).length===0&&(m.variacoes.MODELO=m.nomeCompleto,m.nomeExibicao=m.nomeCompleto)}normalizarTipo(m){return m.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim()}processarVariacoes(){this.log(`
🔄 Processando variações...`,"info");const m=new Set;this.produtos.forEach(l=>{Object.keys(l.variacoes).forEach(f=>m.add(f))}),m.forEach(l=>{const f=new Set,h={};this.produtos.forEach(F=>{const z=F.variacoes[l];z&&(f.add(z),h[z]||(h[z]=[]),h[z].push(F))});const b=Array.from(f).sort();this.variacoes[l]={label:N.labels[l]||l,valores:b,produtosPorValor:h,usarImagem:N.variacoesComImagem.includes(l)},this.log(`   📊 ${l}: ${b.length} valor(es) único(s) → [${b.join(", ")}]`,b.length>1?"success":"warning")}),this.log("✅ Variações processadas:","success",this.variacoes)}renderizarVariacoes(){this.log(`
🎨 Renderizando variações...`,"info");let m=S(N.selectors.areaVariacoes);if(m.length===0&&(this.criarAreaVariacoes(),m=S(N.selectors.areaVariacoes)),Object.keys(this.variacoes).length===0)return;const l=S("<div>",{class:"product-variations-pills-container"});let f=0;if(Object.keys(this.variacoes).forEach(h=>{const b=this.variacoes[h];if(b.valores.length<=1){this.log(`⏭️ Ignorando "${h}" - apenas ${b.valores.length} valor(es)`,"info");return}if(b.usarImagem){const F=this.criarGrupoSwatches(h,b);l.append(F),f++}}),Object.keys(this.variacoes).forEach(h=>{const b=this.variacoes[h];if(!(b.valores.length<=1)&&!b.usarImagem){const F=this.criarGrupoPills(h,b);l.append(F),f++}}),f===0){this.log("ℹ️ Nenhuma variação com múltiplas opções - ocultando área","info"),m.closest(".derivacoes-produto").hide(),S(N.selectors.subtituloProduto).hide();return}N.performance.useRequestAnimationFrame&&window.requestAnimationFrame?requestAnimationFrame(()=>{m.empty().append(l),this.log(`✅ ${f} variação(ões) renderizada(s)!`,"success"),this.atualizarNomeProduto()}):(m.empty().append(l),this.log(`✅ ${f} variação(ões) renderizada(s)!`,"success"),this.atualizarNomeProduto())}criarAreaVariacoes(){const m=S(N.selectors.areaProdutosSugeridos);m.length>0?m.before('<div class="derivacoes-produto"><div class="area-derivacoes"></div></div>'):S("body").prepend('<div class="derivacoes-produto"><div class="area-derivacoes"></div></div>')}criarGrupoSwatches(m,l){const f=this.obterValorAtualParaTipo(m),h=S("<div>",{class:"variation-pill-group variation-pill-group--swatches","data-variacao-tipo":m,role:"group","aria-labelledby":`pill-label-${m.toLowerCase()}`}),b=S("<div>",{class:"variation-pill-label",id:`pill-label-${m.toLowerCase()}`});b.append(S("<span>").text(l.label+":")),b.append(S("<span>",{class:"variation-pill-label-value","data-label-value":m}).text(f||""));const F=S("<div>",{class:"variation-swatches-container",role:"radiogroup","aria-labelledby":`pill-label-${m.toLowerCase()}`});return l.valores.forEach((z,M)=>{const P=l.produtosPorValor[z],_=P.some(I=>I.estoque===void 0||I.estoque>0),q=z===f,V=`pill-${m.toLowerCase()}-${this.sanitizeId(z)}`,W=this.encontrarMelhorProdutoParaSwatch(m,z,P);let v=null;W&&(v=W.imagemData||W.imagem);const U=S("<input>",{type:"radio",class:"variation-pill-input",id:V,name:`variation-${m}`,value:z,"data-variacao-tipo":m,"data-produtos":JSON.stringify(P.map(I=>({id:I.id,url:I.url}))),checked:q,disabled:!_,"aria-label":`${l.label}: ${z}${_?"":" (Indisponível)"}`}),ln=S("<label>",{class:"variation-color-swatch-wrapper",for:V,"data-tooltip":z}),Z=S("<div>",{class:"variation-color-swatch","data-valor":z,tabindex:q?0:-1});v?Z.append(S("<img>",{src:v,alt:z,class:"variation-color-swatch-image",loading:"lazy"})):Z.css({"background-color":"#E5E7EB",display:"flex","align-items":"center","justify-content":"center","font-size":"14px",color:"#6B7280"}).text(z.charAt(0).toUpperCase());const pn=S("<span>",{class:"variation-color-swatch-name",text:z,title:z});ln.append(Z).append(pn),F.append(U).append(ln)}),h.append(b).append(F),h}criarGrupoPills(m,l){const f=this.obterValorAtualParaTipo(m),h=S("<div>",{class:"variation-pill-group variation-pill-group--pills","data-variacao-tipo":m,role:"group","aria-labelledby":`pill-label-${m.toLowerCase()}`}),b=S("<div>",{class:"variation-pill-label",id:`pill-label-${m.toLowerCase()}`});b.append(S("<span>").text(l.label+":")),b.append(S("<span>",{class:"variation-pill-label-value","data-label-value":m}).text(f||""));const F=S("<div>",{class:"variation-pills-container",role:"radiogroup","aria-labelledby":`pill-label-${m.toLowerCase()}`});return l.valores.forEach((z,M)=>{const P=l.produtosPorValor[z],_=P.some(ln=>ln.estoque===void 0||ln.estoque>0),q=z===f,V=`pill-${m.toLowerCase()}-${this.sanitizeId(z)}`,W=S("<input>",{type:"radio",class:"variation-pill-input",id:V,name:`variation-${m}`,value:z,"data-variacao-tipo":m,"data-produtos":JSON.stringify(P.map(ln=>({id:ln.id,url:ln.url}))),checked:q,disabled:!_,"aria-label":`${l.label}: ${z}${_?"":" (Indisponível)"}`});let v=z;_||(v+=' <span class="variation-pill-badge">Indisponível</span>');const U=S("<label>",{class:"variation-pill",for:V,html:v,"data-valor":z,tabindex:q?0:-1});F.append(W).append(U)}),h.append(b).append(F),h}sanitizeId(m){return m.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}encontrarMelhorProdutoParaSwatch(m,l,f){const h=this.produtos.find(M=>M.isAtual||M.id===this.produtoAtualId);if(!h||f.length===0)return f[0]||null;if(f.length===1)return f[0];const b=h.variacoes;let F=null,z=-1;return f.forEach(M=>{let P=0;Object.keys(b).forEach(_=>{_!==m&&M.variacoes[_]===b[_]&&P++}),(M.imagemData||M.imagem)&&(P+=.5),P>z&&(z=P,F=M)}),this.log(`   🎯 Melhor produto para ${m}="${l}": score=${z}`,"log"),F||f[0]}obterValorAtualParaTipo(m){const l=this.produtos.find(f=>f.isAtual||f.id===this.produtoAtualId);return l?l.variacoes[m]:null}atualizarNomeProduto(){const m=this.produtos.find(f=>f.isAtual||f.id===this.produtoAtualId);if(!m)return;["h1.nome-produto",".product-name h1",".info-produto h1",'h1[itemprop="name"]',".box-info-produto h1"].forEach(f=>{const h=S(f);h.length>0&&h.text(m.nomeExibicao)})}bindEventos(){this.log(`
🔗 Vinculando eventos...`,"info"),S(document).on("change",".variation-pill-input",m=>{this.aoMudarVariacao(m)}),S(document).on("keydown",".variation-pills-container, .variation-swatches-container",m=>{this.handleKeyboardNavigation(m)}),S(document).on("click",".variation-pill, .variation-color-swatch-wrapper",function(){const m=S(this).is("label")?S("#"+S(this).attr("for")):S(this).closest("label").prev(".variation-pill-input");m.length&&!m.prop("disabled")&&S(this).closest(".variation-pill-group").addClass("is-loading")}),this.log("✅ Eventos vinculados","success")}handleKeyboardNavigation(m){const f=S(m.currentTarget).find(".variation-pill-input:not(:disabled)"),h=S(document.activeElement);if(!h.hasClass("variation-pill-input"))return;const b=f.index(h);let F=b;switch(m.key){case"ArrowRight":case"ArrowDown":m.preventDefault(),F=(b+1)%f.length;break;case"ArrowLeft":case"ArrowUp":m.preventDefault(),F=b-1<0?f.length-1:b-1;break;case"Home":m.preventDefault(),F=0;break;case"End":m.preventDefault(),F=f.length-1;break;default:return}f.eq(F).focus().prop("checked",!0).trigger("change")}aoMudarVariacao(m){const l=S(m.target),f=l.data("variacao-tipo"),h=l.val();this.log(`
🔄 Variação selecionada: ${f} = ${h}`,"info"),S(`.variation-pill-label-value[data-label-value="${f}"]`).text(h);const b={};S(".variation-pill-input:checked").each(function(){const z=S(this).data("variacao-tipo"),M=S(this).val();M&&(b[z]=M)}),this.log("📋 Seleção atual:","info",b);const F=this.encontrarProdutoPorVariacoes(b);if(F)this.log("✅ Produto encontrado!","success",F),this.navegarParaProduto(F);else{this.log("⚠️ Produto exato não encontrado, buscando melhor correspondência...","warning");const z=this.encontrarMelhorCorrespondencia(b);z?(this.log("✅ Melhor correspondência encontrada!","success",z),this.navegarParaProduto(z)):(this.log("❌ Nenhum produto correspondente encontrado","error"),S(".variation-pill-group").removeClass("is-loading"))}}encontrarProdutoPorVariacoes(m){return this.produtos.find(l=>Object.keys(m).every(f=>l.variacoes[f]===m[f]))}encontrarMelhorCorrespondencia(m){let l=null,f=0;return this.produtos.forEach(h=>{let b=0;Object.keys(m).forEach(F=>{h.variacoes[F]===m[F]&&b++}),b>f&&(f=b,l=h)}),f>0?l:null}navegarParaProduto(m){this.log(`
🚀 Navegando para: ${m.url}`,"info"),m.url?window.location.href=m.url:(this.log("❌ URL não encontrada para navegação","error"),S(".variation-pill-group").removeClass("is-loading"))}}setTimeout(function(){S(".product-variations-pills-container").remove(),S(".derivacoes-produto").remove();const g=new j;g.init(),window.GerenciadorVariacoesPillsMagazord=g},100)})(typeof jQuery<"u"?jQuery:window.jQuery||window.$),(function(R){"use strict";if(!R||R.MMStorefrontFlow)return;function N(m){return/(?:^|;\s*)zordEm=[^;\s]+/.test(String(m||""))}function j(m){return N(m)?"/checkout/onepage":"/checkout/identify"}function g(m){return m=m||{},m.hasPendingIntent===!0&&String(m.title||"").trim()==="Adicionado ao carrinho!"&&String(m.popupClass||"").indexOf("popup-adicionado-ao-carrinho")===-1&&m.hasSwal===!0}R.MMStorefrontFlow=Object.freeze({isLoggedCustomer:N,checkoutTarget:j,shouldPromoteVitrineSuccess:g})})(window),(function(){"use strict";var S=1e4,R=0,N=!1;function j(){return window.MMStorefrontFlow||null}function g(){var r=j();return r&&typeof r.isLoggedCustomer=="function"?r.isLoggedCustomer(document.cookie):/(?:^|;\s*)zordEm=[^;\s]+/.test(document.cookie||"")}function m(){var r=j();return r&&typeof r.checkoutTarget=="function"?r.checkoutTarget(document.cookie):g()?"/checkout/onepage":"/checkout/identify"}function l(){if(!(typeof jQuery>"u"&&typeof $>"u")){var r=typeof jQuery<"u"?jQuery:$;r(document).ajaxComplete(function(p,d,k){k.url&&k.url.indexOf("checkout/cart")!==-1&&setTimeout(function(){window.dispatchEvent(new CustomEvent("reactItemAddedToCart"))},100)})}}function f(){var r=document.documentElement;if(!r||r.dataset.mmVitrineFeedbackObserver==="1")return;r.dataset.mmVitrineFeedbackObserver="1",document.addEventListener("click",function(k){var E=k.target;!E||!E.closest||!E.closest(".btn-comprar-vitrine")||(R=Date.now()+S)},!0);function p(){if(!(N||Date.now()>R))for(var k=window.Swal,E=!!(k&&typeof k.fire=="function"),A=document.querySelectorAll('.swal2-popup, [role="alert"]'),B=0;B<A.length;B+=1){var a=A[B],s=a.querySelector(".swal2-title, h2"),u=s?s.textContent:"",C=j(),T=C&&typeof C.shouldPromoteVitrineSuccess=="function"?C.shouldPromoteVitrineSuccess({hasPendingIntent:Date.now()<=R,title:u,popupClass:typeof a.className=="string"?a.className:"",hasSwal:E}):Date.now()<=R&&String(u||"").trim()==="Adicionado ao carrinho!"&&!a.classList.contains("popup-adicionado-ao-carrinho")&&E;if(T){R=0,N=!0;try{k.close()}catch{}setTimeout(function(){var O;try{O=k.fire({title:"Produto adicionado ao seu carrinho!",text:"O que você deseja fazer a seguir?",icon:"success",width:600,showCloseButton:!0,showConfirmButton:!0,showDenyButton:!0,confirmButtonText:"Continuar comprando",denyButtonText:"Finalizar compra",confirmButtonColor:"#FFFFFF",denyButtonColor:"#27AE60",focusConfirm:!1,customClass:{popup:"popup-adicionado-ao-carrinho",icon:"icone-adicionado-ao-carrinho",title:"titulo-adicionado-ao-carrinho",actions:"actions-popup-add-carrinho",confirmButton:"botao-continuar-comprando",denyButton:"botao-finalizar-compra"}})}catch{N=!1;return}if(!O||typeof O.then!="function"){N=!1;return}O.then(function(Y){N=!1,Y&&Y.isDenied&&(window.location.href="/checkout/cart")},function(){N=!1})},0);return}}}var d=new MutationObserver(function(){setTimeout(p,0)});d.observe(document.body||r,{childList:!0,subtree:!0})}function h(){var r=document.querySelector("#cart-preview-area .border-t.border-solid");if(!(!r||r.querySelector(".installment-total"))){var p=0,d=document.querySelectorAll("#cart-preview-area .cart-item");if(d.forEach(function(B){var a=parseFloat(B.getAttribute("data-item-price"))||0,s=parseInt(B.getAttribute("data-item-quantity"))||1;p+=a*s}),!(p<=0)){var k=(p/12).toFixed(2).replace(".",","),E=document.createElement("div");E.className="installment-total",E.textContent="ou 12x de R$ "+k;var A=r.querySelector(".valor-pix");A&&A.parentNode&&A.parentNode.insertBefore(E,A.nextSibling)}}}var b='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/></svg>',F='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',z='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>';function M(){h();var r=document.querySelectorAll("#cart-preview-area .cart-item, .content-cart .cart-item");r.forEach(function(p){if(!p.querySelector(".qty-btn-minus")){var d=p.querySelector(".qtd-value");if(d){var k=p.querySelector(".cart-remove-item"),E=k?k.getAttribute("data-id"):null;if(E){var A=p.querySelector(".prod-remove");A&&!d.contains(k)&&(d.appendChild(k),A.style.display="none");var B=d.parentElement,a=null;if(B)for(var s=0;s<B.children.length;s++){var u=B.children[s];if(u!==d&&u.classList&&u.classList.contains("valor")){a=u;break}}a&&!d.contains(a)&&d.appendChild(a);var C=parseInt(p.getAttribute("data-item-quantity"));if(!C||isNaN(C)){var T=d.textContent.match(/(\d+)/);C=T?parseInt(T[1]):1}var O=document.createElement("button");O.className="qty-btn-minus",O.type="button",O.setAttribute("aria-label","Diminuir quantidade"),O.innerHTML=b,O.addEventListener("click",function(dn){dn.preventDefault(),dn.stopPropagation();var wn=parseInt(Y.textContent)||1;if(wn<=1){var vn=p.querySelector(".cart-remove-item");vn&&vn.click();return}Ct(p,E,-1,Y,O,K)});var Y=document.createElement("span");Y.className="qty-display",Y.textContent=C;var K=document.createElement("button");K.className="qty-btn-plus",K.type="button",K.setAttribute("aria-label","Aumentar quantidade"),K.innerHTML=F,K.addEventListener("click",function(dn){dn.preventDefault(),dn.stopPropagation(),Ct(p,E,1,Y,O,K)});var mn=document.createElement("div");mn.className="mm-qty-wrap",mn.appendChild(O),mn.appendChild(Y),mn.appendChild(K),d.insertBefore(mn,d.firstChild),k&&(k.innerHTML=z,k.setAttribute("aria-label","Remover produto"))}}}})}function P(){document.addEventListener("click",function(r){var p=r.target.closest(".cart-remove-item");if(!(!p||!p.closest("#cart-preview-area"))){r.preventDefault(),r.stopPropagation(),r.stopImmediatePropagation();var d=p.getAttribute("data-id");if(d){var k=p.closest(".cart-item"),E=k&&k.querySelector(".prod-nome")?.textContent?.trim()||"este produto",A=E.length>50?E.substring(0,50)+"…":E,B=document.getElementById("mm-confirm-overlay");B&&B.remove();var a=document.createElement("div");a.id="mm-confirm-overlay",a.className="mm-confirm-overlay",a.innerHTML='<div class="mm-confirm-card"><p class="mm-confirm-title">Remover produto?</p><p class="mm-confirm-desc">'+A.replace(/&/g,"&amp;").replace(/</g,"&lt;")+'</p><div class="mm-confirm-actions"><button class="mm-confirm-btn mm-confirm-btn-cancel">Manter</button><button class="mm-confirm-btn mm-confirm-btn-delete">Remover</button></div></div>',document.body.appendChild(a),a.querySelector(".mm-confirm-btn-cancel").addEventListener("click",function(){a.remove()}),a.querySelector(".mm-confirm-btn-delete").addEventListener("click",function(){a.remove(),window.__mmDeleteItem&&k?window.__mmDeleteItem(k,d):typeof Zord<"u"&&Zord.checkout&&Zord.checkout.deleteItem(parseInt(d))}),a.addEventListener("click",function(s){s.target===a&&a.remove()})}}},!0)}function _(){document.addEventListener("click",function(r){var p=r.target;if(!(!p||!p.closest)){var d=p.closest(".finalizar-compra, .box-total-btn .checkout a, .box-total-btn .checkout .button");if(d){var k=d.closest("#cart-preview-area"),E=d.closest(".carrinho-rapido-ctn");if(!(!k&&!E)){if(g()){r.preventDefault(),r.stopPropagation(),window.location.href=m();return}k&&(r.preventDefault(),r.stopPropagation(),window.location.href="/checkout/identify")}}}},!0)}function q(){try{var r=document.querySelector("#resumo-compra");if(r){var p=r.querySelector(".txt-cupom");if(p){var d=(p.textContent||"").replace(/\s+/g,"").trim();if(/^[A-Za-z0-9][A-Za-z0-9._-]{1,}$/.test(d))return d.toUpperCase()}return""}}catch{}try{var k=JSON.parse(localStorage.getItem("mm_cart_snapshot")||"null");if(k&&k.couponCode)return String(k.couponCode).toUpperCase()}catch{}return""}function V(r,p){var d="cep=&nenhumCreditoSelecionado=true&id="+encodeURIComponent(String(p))+"&area=main-cart",k=q();return k&&(d+="&cupom-desconto="+encodeURIComponent(k)),fetch("/checkout/cart?operation="+encodeURIComponent(r),{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"text/html,application/json,*/*","X-Requested-With":"XMLHttpRequest"},body:d}).then(function(E){if(!E.ok)throw new Error("HTTP "+E.status);return E.text()})}var W=1500,v=2e3,U="mm_cep",ln="mm_cart_snapshot",Z=1800*1e3;function pn(){try{var r=localStorage.getItem(U)||"",p=r.replace(/\D/g,"");if(p.length===8)return p}catch{}return null}function I(r){return!r||r.length!==8?"":r.slice(0,5)+"-"+r.slice(5)}function H(r){if(!r||r.length!==8)return v;var p=parseInt(r.slice(0,2),10);return isNaN(p)?v:p>=1&&p<=39||p>=80&&p<=99?W:v}function rn(){try{var r=localStorage.getItem(ln);if(!r)return null;var p=JSON.parse(r);return!p||!p.ts||Date.now()-p.ts>Z?null:p}catch{return null}}function Nn(r){var p=[];return r.forEach(function(d){var k=(d.querySelector(".prod-nome a, .prod-nome")||{}).textContent||"",E=d.querySelector(".qty-display"),A=E?parseInt(E.textContent):parseInt(d.getAttribute("data-item-quantity"))||1;p.push(k.trim().slice(0,30)+"x"+A)}),p.sort().join("|")}function Sn(r){if(!r||!Array.isArray(r.items))return"";var p=r.items.map(function(d){return(d.name||"").trim().slice(0,30)+"x"+(d.quantity||1)});return p.sort().join("|")}var jn='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg>',zn='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18M6 6l12 12"/></svg>',ot=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];function nt(r){if(!r)return null;var p=String(r).match(/\d+/g);return!p||!p.length?null:Math.max.apply(null,p.map(Number))}function $n(r,p){for(var d=new Date(r.getTime()),k=0;k<p;){d.setDate(d.getDate()+1);var E=d.getDay();E!==0&&E!==6&&k++}return d}function _n(r){var p=new Date,d="dia "+r.getDate()+" de "+ot[r.getMonth()];return r.getFullYear()!==p.getFullYear()&&(d+=" de "+r.getFullYear()),d}function qn(r){var p=nt(r);if(!p||p<1)return null;var d=$n(new Date,p);return"Receba até "+_n(d)}var Mn={},lt=4e3,pt={};function Wn(r,p){if(!r||r.length!==8)return Promise.resolve(null);if(Mn[r])return Mn[r];if(!p){var d=pt[r]||0;if(Date.now()-d<lt)return Promise.resolve(null)}var k="cep="+encodeURIComponent(r.slice(0,5)+"-"+r.slice(5))+"&nenhumCreditoSelecionado=true&area=main-cart",E=q();E&&(k+="&cupom-desconto="+encodeURIComponent(E));var A=fetch("/checkout/cart?operation=atualizaValoresCarrinho",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"text/html,application/json,*/*","X-Requested-With":"XMLHttpRequest"},body:k}).then(function(B){if(!B.ok)throw new Error("HTTP "+B.status);return B.text()}).then(function(B){return pt[r]=Date.now(),dt(B)}).catch(function(){return null}).then(function(B){return delete Mn[r],B});return Mn[r]=A,A}function dt(r){try{var p=new DOMParser().parseFromString(r,"text/html"),d=p.querySelector("#resumo-compra .frete-calculado")||p.querySelector(".frete-calculado");if(!d)return null;var k="",E=d.querySelector(".frete-location .city");E&&(k=E.textContent.trim());var A=null,B="",a="",s=d.querySelector(".info-frete-selec");if(s){var u=s.querySelector(".dias-entrega"),C=s.querySelector(".info-title span, .info-title");u&&(B=(u.textContent||"").trim()),C&&(a=(C.textContent||"").trim())}var T=d.querySelector(".line.valor-frete .value, .value.valor-frete")||d.querySelector(".valor-compra-frete .value");if(T){var O=(T.textContent||"").trim();if(/gr[áa]tis/i.test(O))A=0;else{var Y=O.match(/[\d.,]+/);if(Y){var K=parseFloat(Y[0].replace(/\./g,"").replace(",","."));isNaN(K)||(A=K)}}}if(A==null){var mn=d.querySelector(".servico-frete");if(mn){var dn=parseFloat(mn.getAttribute("data-valor-frete")||"0");if(isNaN(dn)||(A=dn),a||(a=mn.getAttribute("data-servico-frete")||""),!B){var wn=mn.querySelector(".dias-entrega");wn&&(B=(wn.textContent||"").trim())}}}if(A==null)return null;var vn=null,Fn=p.querySelector(".total-boleto .value, .totais-valor.total-boleto .value");if(Fn){var Tn=(Fn.textContent||"").trim(),Xn=Tn.match(/[\d.,]+/);if(Xn){var it=parseFloat(Xn[0].replace(/\./g,"").replace(",","."));isNaN(it)||(vn=it)}}return{city:k,shipping:A,shippingDeadline:B,shippingName:a,totalPix:vn}}catch{return null}}function tt(r,p,d){if(!(!r||!d)){gt(r);try{let s=function(u){for(var C=0;C<E.length;C++)if(E[C]&&E[C].name===u)return E[C];return null};var k=rn()||{};k.ts=Date.now(),k.cepValue=p.slice(0,5)+"-"+p.slice(5),k.shipping=d.shipping,k.shippingDeadline=d.shippingDeadline,k.shippingName=d.shippingName,k.shippingCity=d.city,d.totalPix!=null&&(k.subtotalPix=d.totalPix);var E=k.items&&k.items.length?k.items:[],A=r.querySelectorAll(".cart-item:not(.mm-removing)");k.items=Array.prototype.map.call(A,function(u){var C=u.querySelector(".prod-nome a, .prod-nome"),T=(C&&C.textContent||"").trim(),O=u.querySelector(".qty-display"),Y=O?parseInt(O.textContent):parseInt(u.getAttribute("data-item-quantity"))||1,K=s(T);return K&&K.quantity===Y&&(K.lineTotalPix>0||K.lineTotal>0||K.imgSrc)?K:{name:T,quantity:Y}}),localStorage.setItem(ln,JSON.stringify(k))}catch{}var B=r.querySelectorAll(".cart-item:not(.mm-removing)"),a=0;B.forEach(function(s){var u=s.querySelector(".valor");if(u){var C=Pn(u.textContent);isNaN(C)||(a+=C)}}),r.querySelector(".box-total-btn")?St(r):ft(r)}}function Bn(r){var p=pn();if(p){var d=rn(),k=Sn(d),E=Nn(r.querySelectorAll(".cart-item:not(.mm-removing)")),A=d&&d.cepValue&&d.cepValue.replace(/\D/g,"")===p,B=d&&d.shipping!=null&&!isNaN(d.shipping);d&&k===E&&A&&B||Wn(p).then(function(a){a&&tt(r,p,a)})}}function Hn(r){return String(r||"").replace(/[&<>"']/g,function(p){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[p]})}function xn(r){if(!r)return null;var p=r.querySelector(".box-total-btn");if(p)return{host:p,before:p.querySelector(".total")};var d=r.querySelector(".area-finalizar-compra");if(d)return{host:d,before:d.firstElementChild};var k=r.querySelector(".finalizar-compra");if(k&&k.parentElement){var E=k.parentElement;return{host:E,before:E.firstElementChild}}return null}function An(r){if(!r)return null;var p=r.closest(".carrinho-rapido-ctn");return p||(r.closest("#cart-preview-area")?It():null)}function Gn(r,p,d,k){if(r){var E=xn(r);if(E){var A=E.host;r.classList.add("mm-ship-scope");var B=pn(),a=rn(),s=Nn(r.querySelectorAll(".cart-item:not(.mm-removing)")),u=Sn(a),C=a&&u===s,T=H(B),O=p>=T,Y=Math.max(0,T-p),K=Math.max(0,Math.min(100,p/T*100)),mn=A.querySelector(".mm-cart-ship");if(!mn){mn=document.createElement("div"),mn.className="mm-cart-ship",mn.setAttribute("role","group"),mn.setAttribute("aria-label","Informações de frete");var dn=E.before;dn&&dn.parentNode===A?A.insertBefore(mn,dn):A.insertBefore(mn,A.firstChild)}if(mn.classList.toggle("is-free",O),yn(mn),mn.dataset.mmEditing!=="1"){var wn=a&&a.cepValue&&a.cepValue.replace(/\D/g,"")===B,vn=B&&C&&wn&&a.shippingCity,Fn=vn?qn(a.shippingDeadline):null,Tn="";if(Tn+='<div class="mm-cart-ship-location">',B){var Xn=I(B);if(vn&&(Xn+=" · "+Hn(a.shippingCity)),Tn+='<span class="mm-cart-ship-label">Envio para</span><div class="mm-cart-ship-location-value"><span>'+Xn+'</span><button class="mm-cart-ship-edit" type="button" data-mm-ship="edit">Trocar</button></div>',Fn){var it=Hn(Fn);k&&d>0?it+=" · <strong>"+Hn(Cn(d))+"</strong>":k&&d===0&&(it+=" · <strong>Grátis</strong>"),Tn+='<span class="mm-cart-ship-deadline">'+it+"</span>"}}else Tn+='<span class="mm-cart-ship-label">Calcule o frete</span><div class="mm-cart-ship-location-value"><span style="color:#9CA3AF;font-weight:500;">Informe seu CEP</span><button class="mm-cart-ship-edit" type="button" data-mm-ship="edit">Calcular</button></div>';Tn+="</div>";var Et=O?"Frete grátis desbloqueado":"Faltam "+Cn(Y)+" para frete grátis",ht=parseFloat(r.dataset.mmShipPct||"0")||0;Tn+='<div class="mm-cart-ship-progress">',Tn+='<div class="mm-cart-ship-bar" role="progressbar" aria-valuenow="'+Math.round(p)+'" aria-valuemin="0" aria-valuemax="'+Math.round(T)+'" aria-valuetext="'+Hn(Et)+'" aria-label="Progresso para frete grátis"><div class="mm-cart-ship-bar-fill" style="width:'+ht.toFixed(1)+'%"></div></div>',Tn+='<p class="mm-cart-ship-nudge'+(O?" is-free":"")+'">',O?Tn+=jn+"Frete grátis garantido":Tn+="Faltam <strong>"+Hn(Cn(Y))+"</strong> para frete grátis",Tn+="</p>",Tn+="</div>",mn.innerHTML=Tn;var Un=mn.querySelector(".mm-cart-ship-bar-fill");Un&&requestAnimationFrame(function(){Un.style.width=K.toFixed(1)+"%"});var Qn=r.dataset.mmShipWasFree==="1";O&&!Qn&&ht>0&&(mn.classList.remove("mm-just-unlocked"),mn.offsetWidth,mn.classList.add("mm-just-unlocked"),setTimeout(function(){mn.classList.remove("mm-just-unlocked")},1400)),r.dataset.mmShipWasFree=O?"1":"",r.dataset.mmShipPct=K.toFixed(1)}}}}var et='<svg class="mm-cart-ship-spinner" width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><style>.mm-sp{animation:mm-spin 1.2s linear infinite;transform-origin:center}.mm-sp circle{stroke:#4B664A;stroke-width:3;fill:none;stroke-linecap:round;stroke-dasharray:44;stroke-dashoffset:16;animation:mm-sp-dash 1.2s ease-in-out infinite}@keyframes mm-spin{to{transform:rotate(360deg)}}@keyframes mm-sp-dash{0%{stroke-dashoffset:44}50%{stroke-dashoffset:8}100%{stroke-dashoffset:44}}</style><g class="mm-sp"><circle cx="12" cy="12" r="9.5"/></g></svg>';function at(r){if(r){var p=r.querySelector(".mm-cart-ship-deadline");if(p)p.innerHTML="Recalculando frete "+et;else{var d=r.querySelector(".mm-cart-ship-location");if(d){var k=document.createElement("span");k.className="mm-cart-ship-deadline",k.innerHTML="Recalculando frete "+et,d.appendChild(k)}}var E=xn(r);E&&E.host.classList.add("mm-ship-loading")}}function gt(r){if(r){var p=xn(r);p&&p.host.classList.remove("mm-ship-loading")}}function yn(r){!r||r.dataset.mmShipBound||(r.dataset.mmShipBound="1",r.addEventListener("click",function(p){var d=p.target.closest('[data-mm-ship="edit"]');if(d){p.preventDefault(),p.stopPropagation(),ut(r);return}var k=p.target.closest('[data-mm-ship="cancel"]');if(k){p.preventDefault(),p.stopPropagation(),kt(r);return}p.target.closest(".mm-cart-ship-cep-form")&&p.stopPropagation()},!0))}function ut(r){var p=r.querySelector(".mm-cart-ship-location");if(p){r.dataset.mmEditing="1";var d=pn()||"";p.innerHTML='<span class="mm-cart-ship-label">Digite seu CEP</span><form class="mm-cart-ship-cep-form" data-mm-ship-form="1" novalidate><input class="mm-cart-ship-cep-input" type="text" inputmode="numeric" autocomplete="postal-code" placeholder="00000-000" maxlength="9" value="'+Hn(I(d))+'" aria-label="CEP" /><button class="mm-cart-ship-cep-save" type="submit">OK</button><button class="mm-cart-ship-cep-cancel" type="button" data-mm-ship="cancel" aria-label="Cancelar">'+zn+"</button></form>";var k=p.querySelector(".mm-cart-ship-cep-input"),E=p.querySelector("form");k&&(setTimeout(function(){try{k.focus(),k.select()}catch{}},10),k.addEventListener("input",function(){k.classList.remove("is-invalid");var A=k.value.replace(/\D/g,"").slice(0,8);k.value=A.length>5?A.slice(0,5)+"-"+A.slice(5):A}),k.addEventListener("keydown",function(A){A.key==="Escape"&&(A.preventDefault(),kt(r))})),E&&E.addEventListener("submit",function(A){A.preventDefault(),A.stopPropagation(),Pt(r)})}}function kt(r){r.dataset.mmEditing="";var p=An(r);if(p){var d=p.querySelectorAll(".cart-item:not(.mm-removing)"),k=0;d.forEach(function(E){var A=E.querySelector(".valor");if(A){var B=Pn(A.textContent);isNaN(B)||(k+=B)}}),Gn(p,k)}}function Pt(r){var p=r.querySelector(".mm-cart-ship-cep-input");if(p){var d=p.value.replace(/\D/g,"");if(d.length!==8){p.classList.add("is-invalid"),p.focus();return}try{localStorage.setItem(U,d)}catch{}var k=r.querySelector(".mm-cart-ship-cep-save");k&&(k.disabled=!0,k.textContent="...");var E=An(r);try{var A=rn();A&&(A.cepValue="",localStorage.setItem(ln,JSON.stringify(A)))}catch{}kt(r),Wn(d).then(function(B){B&&E&&tt(E,d,B)})}}function Pn(r){if(!r)return NaN;var p=String(r).replace(/\s/g,"").match(/([\d.,]+)/);return p?parseFloat(p[1].replace(/\./g,"").replace(",",".")):NaN}function Cn(r){return isNaN(r)?"":"R$ "+r.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function rt(r){if(isNaN(r))return"";var p=r.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),d=p.split(",");return"R$&nbsp;"+d[0]+'<span class="mm-cents">,'+(d[1]||"00")+"</span>"}function ct(r){var p=0;return Array.prototype.forEach.call(r,function(d){var k=parseFloat(d.getAttribute("data-item-price"))||0,E=parseInt(d.getAttribute("data-item-quantity"));if(!E||isNaN(E)){var A=d.querySelector(".qty-display");A?E=parseInt(A.textContent)||1:E=1}p+=k*E}),p}function Ot(r){var p=r.querySelectorAll(".cart-item:not(.mm-removing)");p.forEach(function(d){var k=parseFloat(d.getAttribute("data-item-price"))||0,E=parseInt(d.getAttribute("data-item-quantity"));if(!E||isNaN(E)){var A=d.querySelector(".qty-display");A?E=parseInt(A.textContent)||1:E=1}var B=d.querySelector(".valor");B&&k>0&&(B.innerHTML=rt(k*E))})}function Vn(r){if(!(!r||r.dataset.mmTotalRatio)){var p=r.querySelectorAll(".cart-item");if(p.length){var d=ct(p),k=r.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||r.querySelector(".box-total-btn .linha-total .valor-final strong");if(k&&d>.01){var E=Pn(k.textContent);isNaN(E)||(r.dataset.mmTotalRatio=String(E/d))}}}}function Dt(r,p){var d=r.querySelector(".box-total-btn .linha-total");if(d){var k=d.parentElement.querySelector(".mm-cart-savings");if(k&&k.remove(),!(!p||p<.01)){var E=document.createElement("span");E.className="mm-cart-savings",E.textContent="Você economiza "+Cn(p)+" com PIX",d.nextSibling?d.parentElement.insertBefore(E,d.nextSibling):d.parentElement.appendChild(E)}}}function St(r,p){if(r){Vn(r);var d=r.querySelectorAll(".cart-item:not(.mm-removing)"),k=ct(d),E=r.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||r.querySelector(".box-total-btn .linha-total .valor-final strong"),A=parseFloat(r.dataset.mmTotalRatio||"0.95")||.95,B=k*A,a=k-B,s=pn(),u=rn(),C=Sn(u),T=Nn(d),O=u&&u.cepValue&&u.cepValue.replace(/\D/g,"")===s,Y=!!(s&&u&&O&&u.shipping!=null&&!isNaN(u.shipping)),K=r.dataset.mmShipPendingFetch==="1";!Y&&K&&s&&u&&u.shipping!=null&&(Y=!0);var mn=Y?parseFloat(u.shipping):0,dn=B+mn,wn=k+mn;if(E){var vn=Pn(E.textContent);if(p)(isNaN(vn)||Math.abs(dn-vn)>.005)&&(E.innerHTML=rt(dn));else if(!isNaN(vn)&&Math.abs(dn-vn)>.005){var Fn=r.querySelector(".box-total-btn .linha-total .valor-final");Fn&&(Fn.classList.remove("mm-pop"),Fn.offsetWidth,Fn.classList.add("mm-pop"),setTimeout(function(){Fn.classList.remove("mm-pop")},450)),_t(E,vn,dn)}else E.innerHTML=rt(dn)}var Tn=r.querySelector(".box-total-btn .valor-final.card");if(Tn){var Xn=wn/12;Tn.innerHTML="<span>ou em até <strong>12x</strong> de <strong>"+Cn(Xn)+"</strong> no cartão</span>"}var it=r.querySelector(".box-total-btn .linha-total .valor-final .tipo-pagto");it&&(it.textContent="No PIX"),Dt(r,a),Gn(r,k,mn,Y);try{var Et=0;d.forEach(function(Un){var Qn=Un.querySelector(".qty-display");Qn&&(Et+=parseInt(Qn.textContent)||0)});var ht=document.getElementById("mm-h-cart-count");ht&&(Et>0?(ht.textContent=Et>99?"99+":String(Et),ht.hidden=!1):ht.hidden=!0)}catch{}}}function jt(){var r=document.querySelector(".carrinho-rapido-ctn");if(!(!r||!r.querySelector(".box-total-btn"))){var p=r.querySelectorAll(".cart-item:not(.mm-removing)");if(p.length){var d=r.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||r.querySelector(".box-total-btn .linha-total .valor-final strong");if(d){var k=ct(p);if(k>.01){var E=parseFloat(r.dataset.mmTotalRatio||"0.95")||.95,A=pn(),B=rn(),a=B&&B.cepValue&&B.cepValue.replace(/\D/g,"")===A,s=!!(A&&B&&a&&B.shipping!=null&&!isNaN(B.shipping));!s&&r.dataset.mmShipPendingFetch==="1"&&A&&B&&B.shipping!=null&&(s=!0);var u=s?parseFloat(B.shipping):0,C=k*E+u,T=Pn(d.textContent);(isNaN(T)||Math.abs(C-T)>.01)&&St(r,!0)}}}}}function It(){var r=document.querySelector('#cart-preview-area > div[class*="z-[9999]"]');if(r)return r;var p=document.querySelector(".carrinho-rapido-ctn");return p&&!p.querySelector(".box-total-btn")&&p.querySelector(".valor-pix")?p:null}function qt(r,p){var d=r.querySelector(".installment-total");if(!(!d||!d.parentElement)){var k=d.parentElement,E=k.querySelector(".mm-cart-savings-mobile");if(!p||p<.01){E&&E.remove();return}var A="Você economiza "+Cn(p)+" com PIX";if(E){E.textContent!==A&&(E.textContent=A);return}var B=document.createElement("span");B.className="mm-cart-savings-mobile",B.textContent=A,d.nextSibling?k.insertBefore(B,d.nextSibling):k.appendChild(B)}}function Gt(r,p,d){if(!(!r||!r.classList||!r.classList.contains("carrinho-rapido-ctn"))&&!r.querySelector(".box-total-btn")){var k=r.querySelector(".area-finalizar-compra");if(!(!k||!(p>0))){var E=k.querySelector(".forma-pix"),A=E?E.parentElement:null;if(A){var B=p*d,a=p/12,s=p-B;A.classList.add("mm-native-pay-hidden");var u=k.querySelector(".mm-cart-total-b");u||(u=document.createElement("div"),u.className="mm-cart-total-b",u.innerHTML='<span class="mm-tb-label">Total</span><span class="mm-tb-row"><strong class="mm-tb-value"></strong><span class="mm-tb-pix">No PIX</span></span><span class="mm-tb-savings"></span><span class="mm-tb-parcela"></span>',A.nextSibling?k.insertBefore(u,A.nextSibling):k.appendChild(u));var C=u.querySelector(".mm-tb-value"),T=Cn(B);C&&C.textContent!==T&&(C.textContent=T);var O=u.querySelector(".mm-tb-savings");if(O)if(s>=.01){var Y="Você economiza "+Cn(s)+" com PIX";O.textContent!==Y&&(O.textContent=Y),O.style.display=""}else O.style.display="none";var K=u.querySelector(".mm-tb-parcela");if(K){var mn="ou em até 12x de "+Cn(a)+" no cartão";K.textContent!==mn&&(K.textContent=mn)}}}}}function ft(r){if(r=r||It(),!(!r||r.querySelector(".box-total-btn")||!r.querySelector(".valor-pix"))){var p=r.querySelectorAll(".cart-item:not(.mm-removing)"),d=p.length,k=document.getElementById("mm-h-cart-count");if(k&&d>0){var E=d>99?"99+":String(d);(k.textContent!==E||k.hidden)&&(k.textContent=E,k.hidden=!1)}if(p.length){var A=ct(p);if(A>0){Array.prototype.forEach.call(p,function(ht){var Un=parseFloat(ht.getAttribute("data-item-price"))||0;if(Un>0){var Qn=parseInt(ht.getAttribute("data-item-quantity"));if(!Qn||isNaN(Qn)){var Qt=ht.querySelector(".qty-display");Qn=Qt&&parseInt(Qt.textContent)||1}var Yt=ht.querySelector(".valor");if(Yt){var Rt=Un*Qn,ae=Yt.querySelector("span")||Yt,oe=Pn(ae.textContent);(isNaN(oe)||Math.abs(oe-Rt)>.005)&&(ae.textContent=Cn(Rt))}}});var B=r.querySelector(".valor-pix"),a=B?B.querySelector("span")||B:null;if(!r.dataset.mmMobileRatio&&a){var s=Pn(a.textContent);if(!isNaN(s)&&s>0){var u=s/A;u>.8&&u<=1.0001&&(r.dataset.mmMobileRatio=String(u))}}var C=parseFloat(r.dataset.mmMobileRatio||"0.95");if(C>.8&&C<=1.0001||(C=.95),a){var T=A*C,O=Pn(a.textContent);(isNaN(O)||Math.abs(O-T)>.005)&&(a.textContent=Cn(T))}var Y=r.querySelector(".installment-total");if(Y){var K=A/12,mn=Pn(Y.textContent);(isNaN(mn)||Math.abs(mn-K)>.005)&&(Y.textContent="ou 12x de "+Cn(K))}var dn=pn(),wn=rn(),vn=wn&&wn.cepValue&&wn.cepValue.replace(/\D/g,"")===dn,Fn=!!(dn&&wn&&vn&&wn.shipping!=null&&!isNaN(wn.shipping)),Tn=Fn?parseFloat(wn.shipping):0,Xn=(dn||"")+"|"+A.toFixed(2)+"|"+(Fn?1:0)+"|"+Tn,it=r.querySelector(".mm-cart-ship"),Et=it&&it.dataset.mmEditing==="1";!Et&&(!it||r.dataset.mmMobShipSig!==Xn)&&(r.dataset.mmMobShipSig=Xn,Gn(r,A,Tn,Fn)),Bn(r),qt(r,A-A*C),Gt(r,A,C)}}}}function _t(r,p,d){if(!r||isNaN(p)||isNaN(d))return;var k=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(k){r.innerHTML=rt(d);return}var E=420,A=performance.now();function B(a){return 1-Math.pow(1-a,3)}(function a(s){var u=Math.min(1,(s-A)/E);r.innerHTML=rt(p+(d-p)*B(u)),u<1&&requestAnimationFrame(a)})(A)}function Ct(r,p,d,k,E,A){if(!(!r||!p)){var B=parseInt(k.textContent)||1,a=B+d;if(!(a<1)){var T=r.closest(".carrinho-rapido-ctn");Vn(T),E.disabled=!0,A.disabled=!0;var s=parseFloat(r.getAttribute("data-item-price"))||0;k.textContent=a,r.setAttribute("data-item-quantity",a);var u=r.querySelector(".valor");if(u){var C=s*a;u.textContent=Cn(C),u.classList.remove("mm-pop"),u.offsetWidth,u.classList.add("mm-pop"),setTimeout(function(){u.classList.remove("mm-pop")},450)}var T=r.closest(".carrinho-rapido-ctn"),O=d>0?"adicionaItem":"removeItem";pn()&&T&&(T.dataset.mmShipPendingFetch="1"),St(T),ft(),pn()&&at(T),V(O,p).catch(function(){k.textContent=B,r.setAttribute("data-item-quantity",B),u&&(u.innerHTML=rt(s*B)),T&&(T.dataset.mmShipPendingFetch=""),St(T),ft()}).then(function(){E.disabled=!1,A.disabled=!1;var Y=pn();Y&&T?(at(T),Wn(Y,!0).then(function(K){T.dataset.mmShipPendingFetch="",K?tt(T,Y,K):gt(T)})):T&&(T.dataset.mmShipPendingFetch="")})}}}function Ut(r,p){if(!(!r||!p)){var d=r.closest(".carrinho-rapido-ctn");Vn(d);var k=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,E=k?0:360;k||r.classList.add("mm-removing"),setTimeout(function(){r.parentNode&&r.parentNode.removeChild(r);var A=d?d.querySelectorAll(".cart-item:not(.mm-removing)"):[],B=A.length===0;if(B){if(d){d.dataset.mmShipPendingFetch="";var a=d.querySelector(".mm-cart-ship");a&&a.remove();var s=d.querySelector(".box-total-btn, .area-finalizar-compra");s&&(s.style.display="none")}typeof window.__mmForceEmptyCartState=="function"&&window.__mmForceEmptyCartState(d)}else St(d),pn()&&at(d);var u=document.getElementById("mm-h-cart-count"),C=document.getElementById("mm-h-cart"),T=A.length;u&&(u.textContent=T>99?"99+":String(T),u.hidden=T===0),C&&C.setAttribute("aria-label","Carrinho, "+T+" "+(T===1?"item":"itens")),ft()},E),V("deleteItem",p).catch(function(){}).then(function(){var A=d?d.querySelectorAll(".cart-item:not(.mm-removing)"):[],B=document.getElementById("mm-h-cart-count");if(B&&(B.textContent=A.length>99?"99+":String(A.length),B.hidden=A.length===0),A.length===0){d&&(d.dataset.mmShipPendingFetch="");return}var a=pn();a&&d?(d.dataset.mmShipPendingFetch="1",at(d),Wn(a,!0).then(function(s){d.dataset.mmShipPendingFetch="",s?tt(d,a,s):gt(d)})):d&&(d.dataset.mmShipPendingFetch="")})}}window.__mmDeleteItem=Ut;var $t=null,Vt=new Set,vt=null;function ee(r){if(!r)return NaN;var p=String(r).replace(/\s/g,"").match(/([\d.,]+)/);if(!p)return NaN;var d=p[1].replace(/\./g,"").replace(",","."),k=parseFloat(d);return isNaN(k)?NaN:k}function Ht(r){return isNaN(r)?"":"R$ "+r.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function Rn(r,p,d){if(!r||isNaN(p)||isNaN(d))return;vt&&cancelAnimationFrame(vt);var k=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(k){r.textContent=Ht(d);return}var E=420,A=performance.now();function B(s){return 1-Math.pow(1-s,3)}function a(s){var u=s-A,C=Math.min(1,u/E),T=p+(d-p)*B(C);r.textContent=Ht(T),C<1?vt=requestAnimationFrame(a):vt=null}vt=requestAnimationFrame(a)}function Wt(r){return r?r.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||r.querySelector(".box-total-btn .linha-total .valor-final strong")||r.querySelector(".valor-pix strong")||r.querySelector(".valor-pix"):null}function At(r){return r?r.querySelector(".box-total-btn .linha-total .valor-final"):null}function Zt(r){var p=At(r);p&&(p.classList.remove("mm-pop"),p.offsetWidth,p.classList.add("mm-pop"),setTimeout(function(){p.classList.remove("mm-pop")},450))}function Ft(){var r=document.querySelector(".carrinho-rapido-ctn");if(r){var p=r.querySelectorAll(".cart-item:not(.mm-removing)");if(p.length>0){var d=r.querySelector(".box-total-btn");d&&d.dataset.mmTotalEnhanced!=="1"&&(Vn(r),Ot(r),St(r),d.dataset.mmTotalEnhanced="1",r.dataset.mmShipRendered="1",Bn(r))}r.querySelector(".box-total-btn")||ft(r);var k=r.querySelectorAll(".cart-item"),E=new Set;k.forEach(function(A){var B=A.id||A.getAttribute("data-item-id")||"";B&&(E.add(B),!Vt.has(B)&&Vt.size>0&&(A.classList.add("mm-added"),setTimeout(function(){A.classList.remove("mm-added")},500)))}),Vt=E}}function Tt(){var r=document.querySelector(".carrinho-rapido-ctn");if(!(!r||r.dataset.mmAnimObserved)){r.dataset.mmAnimObserved="1",Ft();var p=new MutationObserver(function(){clearTimeout(Tt._t),Tt._t=setTimeout(Ft,60)});p.observe(r,{childList:!0,subtree:!0,characterData:!0})}}function Zn(){l(),f(),P(),_();var r=document.getElementById("cart-preview-area");if(r){var p=new MutationObserver(function(){setTimeout(M,100),setTimeout(Tt,150),setTimeout(ft,180),setTimeout(jt,220)});p.observe(r,{childList:!0,subtree:!0})}setInterval(M,800),setInterval(Tt,800),setInterval(ft,800),setInterval(jt,800),M(),Tt(),ft(),jt()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Zn):Zn()})(),(function S(){"use strict";var R="mm_cep",N="mm_cart_snapshot",j=18e5,g="mm_onepage_draft",m=1440*60*1e3,l=2e3,f="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",h="https://api.whatsapp.com/send?phone=5511915299488&text="+encodeURIComponent("Olá! Estou no checkout e gostaria de tirar uma dúvida sobre meu pedido."),b=location.pathname,F=b.indexOf("/checkout/cart")!==-1,z=b.indexOf("/checkout/identify")!==-1,M=b.indexOf("/checkout/onepage")!==-1,P=b.indexOf("/checkout/payment")!==-1,_=b.indexOf("/checkout/done")!==-1,q=window.MMStorefrontFlow||null,V=q&&typeof q.isLoggedCustomer=="function"?q.isLoggedCustomer(document.cookie):/(?:^|;\s*)zordEm=[^;\s]+/.test(document.cookie||"");function W(){return q&&typeof q.checkoutTarget=="function"?q.checkoutTarget(document.cookie):V?"/checkout/onepage":"/checkout/identify"}if(_)try{localStorage.removeItem("mm_onepage_draft")}catch{}if(!F&&!z&&!M&&!P&&!_)return;S._retries=(S._retries||0)+1;var v=document.querySelector("#checkout-main-area");if(!v){try{var U=document.body&&document.body.textContent||"",ln=/muito tempo inativo|realize login novamente/i.test(U);if((M||z)&&(ln||S._retries>=40)&&!sessionStorage.getItem("mm_checkout_recovery")){sessionStorage.setItem("mm_checkout_recovery","1"),location.href="/checkout/cart";return}}catch{}S._retries<40&&setTimeout(S,400);return}try{sessionStorage.removeItem("mm_checkout_recovery")}catch{}function Z(n){return isNaN(n)||n<0?"R$ 0,00":"R$ "+n.toFixed(2).replace(".",",").replace(/(\d)(?=(\d{3})+,)/g,"$1.")}function pn(n){if(!n)return 0;var t=String(n).match(/(-?[\d.]+,\d{2})/);return t&&parseFloat(t[1].replace(/\./g,"").replace(",","."))||0}function I(n){return String(n||"").replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}var H={truck:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-5l-3-4zM6 18.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.5-7H17V9.5h2.04l1.46 2-.04 0z"/></svg>',check:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',checkCircle:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',bolt:'<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',shield:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>',lock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>',card:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',rotate:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',minus:'<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',plus:'<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M3 7h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',trash:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',close:'<svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5l-7 7M3.5 3.5l7 7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',arrow:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',tag:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',whats:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',box:'<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>'},rn={get:function(n){try{return localStorage.getItem(n)}catch{return null}},set:function(n,t){try{localStorage.setItem(n,t)}catch{}},remove:function(n){try{localStorage.removeItem(n)}catch{}}};function Nn(n){try{var t={ts:Date.now(),items:n.items.map(function(e){return{name:e.name,variant:e.variant,imgSrc:e.imgSrc,quantity:e.quantity,lineTotal:e.lineTotal,lineTotalPix:e.lineTotalPix,isPix:e.isPix,deposito:e.deposito}}),subtotalPix:n.subtotalPix,subtotalFull:n.subtotalFull,discount:n.discount,couponCode:n.couponCode,shipping:n.shipping,shippingDeadline:n.shippingDeadline,shippingName:n.shippingName,shippingCity:n.shippingCity,shippingOptions:n.shippingOptions,cepValue:n.cepValue};rn.set(N,JSON.stringify(t))}catch{}}function Sn(){try{var n=rn.get(N);if(!n)return null;var t=JSON.parse(n);return!t||!t.ts||Date.now()-t.ts>j?null:t}catch{return null}}function jn(){try{for(var n=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep","mm-op-rua","mm-op-num","mm-op-comp","mm-op-bairro","mm-op-cidade","mm-op-uf"],t={ts:Date.now()},e=0,o=0;o<n.length;o++){var i=document.getElementById(n[o]);i&&i.value&&(t[n[o]]=i.value,e++)}if(e===0){window._mmDraftDebug&&console.log("[mm-draft] skip save (0 fields)");return}rn.set(g,JSON.stringify(t)),window._mmDraftDebug&&console.log("[mm-draft] saved",e,"fields",t)}catch(c){window._mmDraftDebug&&console.warn("[mm-draft] save failed",c)}}function zn(){try{var n=rn.get(g);if(!n)return null;var t=JSON.parse(n);return!t||!t.ts?null:Date.now()-t.ts>m?(rn.remove(g),null):t}catch{return null}}function ot(){try{rn.remove(g)}catch{}}function nt(){var n=zn();if(!n)return window._mmDraftDebug&&console.log("[mm-draft] no draft to restore"),null;for(var t=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep","mm-op-rua","mm-op-num","mm-op-comp","mm-op-bairro","mm-op-cidade","mm-op-uf"],e=0,o=0;o<t.length;o++){var i=document.getElementById(t[o]);if(i&&n[t[o]]){try{var c=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;c.call(i,n[t[o]])}catch{i.value=n[t[o]]}i.dispatchEvent(new Event("input",{bubbles:!0})),/^mm-op-(rua|bairro|cidade|uf)$/.test(t[o])&&(i.dataset.mmCepFill="1"),e++}}return window._mmDraftDebug&&console.log("[mm-draft] restored",e,"fields from draft",n),n}function $n(){for(var n={items:[],subtotalPix:0,subtotalFull:0,discount:0,shipping:null,shippingRaw:"",shippingDeadline:"",shippingName:"",shippingCity:"",shippingOptions:[],couponCode:"",cepValue:"",canFinalize:!1,hasFinalizar:!1},t=v.querySelectorAll(".cart-item"),e=0;e<t.length;e++){var o=t[e],i=o.querySelector('.qtd-item[id^="item_carrinho_"]'),c=i&&i.id.match(/item_carrinho_(\d+)/),y=c?parseInt(c[1],10):null,L=o.querySelector("figure img")||o.querySelector("#product-img")||o.querySelector("img"),X=o.querySelector(".nome-produto .link")||o.querySelector("figure a"),G=o.querySelector(".column-valor-produto .valor"),tn=G?G.textContent.trim():"",Q=!!o.querySelector(".column-valor-produto .sub");n.items.push({dataId:y,sku:o.getAttribute("data-item-id")||"",name:o.getAttribute("data-item-name")||o.getAttribute("data-name")||"",variant:o.getAttribute("data-item-variant")||"",brand:o.getAttribute("data-item-brand")||"",category:o.getAttribute("data-item-category")||"",priceUnit:parseFloat(o.getAttribute("data-item-price")||"0"),lineTotal:parseFloat(o.getAttribute("data-valor")||"0"),quantity:parseInt(o.getAttribute("data-item-quantity")||"1",10),deposito:o.getAttribute("data-item-deposito")==="1",imgSrc:L?L.getAttribute("src")||L.currentSrc:"",href:X?X.getAttribute("href"):"",lineTotalPix:pn(tn),isPix:Q}),n.subtotalFull+=parseFloat(o.getAttribute("data-valor")||"0")}var on=v.querySelector("#resumo-compra .resumo-valores .value");on&&(n.subtotalPix=pn(on.textContent)),n.subtotalPix<=0&&(n.subtotalPix=n.items.reduce(function(Xt,le){return Xt+(le.lineTotalPix||0)},0));var en=v.querySelector("#resumo-compra .discount-value");en&&(n.discount=pn(en.textContent));var sn=v.querySelector("#resumo-compra .txt-cupom");if(sn){var an=(sn.textContent||"").replace(/\s+/g,"").trim();/^[A-Za-z0-9][A-Za-z0-9._-]{1,}$/.test(an)&&(n.couponCode=an.toUpperCase())}var gn=v.querySelector("#resumo-compra .frete-calculado, .frete-calculado");if(gn&&gn.textContent.trim()){n.shippingRaw=gn.textContent.trim();var cn=gn.querySelector(".frete-location .city");cn&&(n.shippingCity=cn.textContent.trim());for(var hn=gn.querySelectorAll(".servico-frete"),bn=0;bn<hn.length;bn++){var In=hn[bn],Yn=In.querySelector('input[type="radio"]'),x=In.querySelector(".dias-entrega"),w=parseFloat(In.getAttribute("data-valor-frete")||"0"),D=In.getAttribute("data-servico-frete")||"",nn=x?x.textContent.trim().replace(/\s+/g," ").replace(/\s*-\s*$/,"").trim():"",J=nn.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i),fn=J?J[1].replace(/\s+/g," "):nn;n.shippingOptions.push({id:Yn?Yn.value:"",name:D,deadline:fn,value:w,isFree:w===0,isSelected:Yn?Yn.checked:!1})}var un=n.shippingOptions.filter(function(Xt){return Xt.isSelected})[0];if(!un&&n.shippingOptions.length>0&&(un=n.shippingOptions[0]),un)n.shipping=un.value,n.shippingName=un.name,n.shippingDeadline=un.deadline;else{var kn=gn.querySelector(".info-frete-selec"),Ln=gn.querySelector(".dias-entrega, .info-frete-selec .dias-entrega"),On=gn.querySelector(".valor-frete .value, .value.valor-frete"),Jn=gn.querySelector(".info-frete-selec .info-title span, .info-title span");if(On){var Kn=On.textContent.trim();if(/gr[aá]tis/i.test(Kn))n.shipping=0;else{var bt=pn(Kn);bt>0&&(n.shipping=bt)}}if(Ln){var xt=Ln.textContent.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*\([^)]+\))?(?:\s*[úu]teis)?)/i);xt&&(n.shippingDeadline=xt[1].replace(/\s+/g," ").replace(/\(s\)/,"").trim())}if(Jn&&(n.shippingName=Jn.textContent.trim()),n.shipping===null)if(/gr[aá]tis/i.test(n.shippingRaw))n.shipping=0;else{var Bt=pn(n.shippingRaw);Bt>0&&(n.shipping=Bt)}if(!n.shippingDeadline){var Dn=n.shippingRaw.match(/(\d+(?:\s*[aà]\s*\d+)?)\s*dias?/i);Dn&&(n.shippingDeadline=Dn[1]+" dias úteis")}}}var Nt=v.querySelector("#cep, .input-cep");return Nt&&(n.cepValue=Nt.value||""),n.hasFinalizar=!!v.querySelector("#finalizar-compra"),n.canFinalize=n.items.length>0,n}function _n(n){n=n||"cart";var t='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>';function e(o,i){var c=o===n,y="mm-checkout-step"+(c?" is-active":""),L=c?' aria-current="step"':"";return'<li class="'+y+'"'+L+'><span class="mm-checkout-step-label">'+i+"</span></li>"}return'<header class="mm-checkout-header"><a class="mm-checkout-header-logo" href="/" aria-label="Madeira Mania - voltar à home"><img src="'+f+'" alt="Madeira Mania" width="180" height="44"></a><nav class="mm-checkout-steps" aria-label="Etapas do checkout"><ol>'+e("cart","Carrinho")+'<li class="mm-checkout-step-sep" aria-hidden="true">›</li>'+e("delivery","Entrega")+'<li class="mm-checkout-step-sep" aria-hidden="true">›</li>'+e("payment","Pagamento")+'</ol></nav><div class="mm-checkout-secure">'+t+'<span class="mm-checkout-secure-text"><strong>Compra 100% segura</strong><small>Site protegido por SSL</small></span></div></header>'}function qn(n){var t=n.imgSrc?'<img src="'+I(n.imgSrc)+'" alt="'+I(n.name)+'" loading="lazy">':"",e=n.href?'<a class="mm-item-name" href="'+I(n.href)+'">'+I(n.name)+"</a>":'<span class="mm-item-name">'+I(n.name)+"</span>",o=n.variant?'<p class="mm-item-variant">'+I(n.variant)+"</p>":"",i="",c=n.quantity<=1?' disabled aria-disabled="true"':"",y;if(n.lineTotalPix>0&&n.isPix){var L='<span class="mm-item-price-sub">no PIX</span>',X=n.quantity>1?Z(n.lineTotalPix/n.quantity)+" cada":"";y='<div class="mm-item-price"><span class="mm-item-price-value">'+Z(n.lineTotalPix)+"</span>"+L+(X?'<span class="mm-item-price-unit">'+X+"</span>":"")+"</div>"}else{var G=n.quantity>1?Z(n.priceUnit)+" cada":"";y='<div class="mm-item-price"><span class="mm-item-price-value">'+Z(n.lineTotal)+"</span>"+(G?'<span class="mm-item-price-unit">'+G+"</span>":"")+"</div>"}return'<div class="mm-item" data-mm-id="'+n.dataId+'"><div class="mm-item-thumb">'+t+'</div><div class="mm-item-body">'+e+o+i+"</div>"+y+'<div class="mm-item-controls"><div class="mm-qty" role="group" aria-label="Quantidade"><button type="button" class="mm-qty-btn" data-mm-act="dec"'+c+' aria-label="Diminuir quantidade">'+H.minus+'</button><span class="mm-qty-value">'+n.quantity+'</span><button type="button" class="mm-qty-btn" data-mm-act="inc" aria-label="Aumentar quantidade">'+H.plus+'</button></div><button type="button" class="mm-item-remove" data-mm-act="remove" aria-label="Remover item" title="Remover">'+H.trash+"</button></div></div>"}function Mn(n){return n.items.length?n.items.map(qn).join(""):'<div class="mm-empty"><div class="mm-empty-icon">'+H.box+'</div><h3 class="mm-empty-title">Seu carrinho está vazio</h3><p class="mm-empty-desc">Explore nossos móveis e encontre a peça certa para sua casa.</p><a class="mm-empty-cta" href="/">Explorar produtos '+H.arrow+'</a><p class="mm-empty-perks">Frete grátis acima de R$ 2.000 · 12x sem juros · 7% off no PIX</p></div>'}function lt(n){for(var t="",e=0;e<n;e++)t+='<div class="mm-skel-item"><div class="mm-skel mm-skel-thumb"></div><div class="mm-skel-lines"><div class="mm-skel mm-skel-line w-3-4"></div><div class="mm-skel mm-skel-line w-1-2"></div><div class="mm-skel mm-skel-line w-1-3"></div></div><div class="mm-skel-lines"><div class="mm-skel mm-skel-line w-1-2"></div></div></div>';return t}function pt(n,t){return n?'<div class="mm-coupon mm-coupon-has"><div class="mm-coupon-applied"><span class="mm-coupon-applied-left">'+H.tag+"<span>"+I(n)+'</span></span><button type="button" data-mm-act="'+t+'-remove" aria-label="Remover cupom">'+H.close+"</button></div></div>":'<div class="mm-coupon is-open"><div class="mm-coupon-label">'+H.tag+'<span>Cupom de desconto</span></div><form class="mm-coupon-form" data-mm-act="'+t+'-submit"><input type="text" class="mm-input" name="mm-coupon-code" placeholder="Digite o código" autocomplete="off" autocapitalize="characters" spellcheck="false" inputmode="text" /><button type="submit" class="mm-btn-secondary">Aplicar</button></form><p class="mm-coupon-error" hidden></p></div>'}function Wn(n){var t=n.subtotalFull>0?n.subtotalFull:n.subtotalPix,e='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+Z(t)+"</span></div>";if(n.shipping!==null){var o;n.shipping===0?o='<span class="mm-row-value is-free">'+H.check+" Grátis</span>":o='<span class="mm-row-value">'+Z(n.shipping)+"</span>";var i='<span class="mm-row-label">Frete';n.shippingName&&(i+=' <span class="mm-row-sub">· '+I(n.shippingName)+"</span>"),n.shippingDeadline&&(i+=' <span class="mm-row-sub">· '+I(n.shippingDeadline)+"</span>"),i+="</span>",e+='<div class="mm-row">'+i+o+"</div>"}n.discount>0&&(e+='<div class="mm-row"><span class="mm-row-label">Desconto</span><span class="mm-row-value is-discount">− '+Z(n.discount)+"</span></div>");var c="";if(n.shipping!==null){var y=Math.max(0,t+n.shipping-n.discount),L=Math.max(0,n.subtotalPix+n.shipping-n.discount),X=y-L,G=y/12;c='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value">'+Z(y)+'</div><div class="mm-total-pix"><span>'+Z(L)+" à vista no PIX</span>"+(X>0?'<span class="mm-total-pix-save">economia de '+Z(X)+"</span>":"")+'</div><div class="mm-total-parcela">ou 12x de '+Z(G)+" sem juros no cartão</div></div>"}else c='<div class="mm-total"><div class="mm-total-label">Subtotal</div><div class="mm-total-value">'+Z(n.subtotalPix)+'</div><div class="mm-total-pix"><span>à vista no PIX</span></div><div class="mm-total-pending">Informe seu CEP para ver o frete e o total final.</div></div>';var tn=pt(n.couponCode,"coupon");return'<div class="mm-sum-stack"><div class="mm-rows">'+e+"</div>"+tn+c+"</div>"}function dt(){var n=document.getElementById("mm-layout");if(n)return n.parentElement!==v&&v.insertBefore(n,v.firstChild),n;var t=document.createElement("div");return t.id="mm-layout",t.innerHTML=_n("cart")+'<div class="mm-grid"><section class="mm-items"><h2 class="mm-h">Carrinho</h2><div class="mm-items-card"><div id="mm-item-list">'+lt(2)+'</div></div></section><aside class="mm-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><div class="mm-cep"><div class="mm-cep-label"><span class="mm-cep-label-text">Calcular frete</span><a class="mm-cep-label-link" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a></div><div class="mm-cep-row"><input type="text" class="mm-input" id="mm-cep-input" name="mm_cep_calc" inputmode="numeric" maxlength="9" placeholder="00000-000" autocomplete="off" data-lpignore="true" data-1p-ignore="true" data-bwignore="true" data-form-type="other" aria-label="CEP" /><button type="button" class="mm-btn-secondary" data-mm-act="calc-cep">Calcular</button></div></div><div id="mm-sum-dynamic"></div><button type="button" class="mm-cta" data-mm-act="finalizar">Finalizar compra'+H.arrow+'</button><div class="mm-trust"><span class="mm-trust-item">'+H.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+H.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+H.card+'<span>12x sem juros</span></span></div><a class="mm-help" href="'+h+'" target="_blank" rel="noopener" data-mm-track="help-whats">'+H.whats+"<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span></a></div></aside></div>",v.insertBefore(t,v.firstChild),v.classList.add("mm-shadow-mode"),document.body.classList.add("mm-checkout-rebuild"),document.documentElement.classList.remove("mm-cart-loading"),t}function tt(){var n=$n(),t=document.getElementById("mm-item-list");t&&(t.innerHTML=Mn(n));var e=document.getElementById("mm-sum-dynamic");e&&(e.innerHTML=Wn(n));var o=document.querySelector(".mm-cta");o&&(o.disabled=!n.canFinalize,o.style.opacity=n.canFinalize?"1":"0.5",o.style.pointerEvents=n.canFinalize?"auto":"none");var i=document.getElementById("mm-cep-input");if(i&&!i.matches(":focus")){var c=rn.get(R),y=n.cepValue||c||"";y&&(i.value=Bn(y))}return n.items&&n.items.length>0&&Nn(n),n}function Bn(n){var t=String(n||"").replace(/\D/g,"").slice(0,8);return t.length<=5?t:t.slice(0,5)+"-"+t.slice(5)}function Hn(n){var t=String(n||"").replace(/\D/g,"");t.length===8&&rn.set(R,t)}function xn(n){n=n||0;var t=rn.get(R);if(!(!t||t.length!==8)){var e=v.querySelector("#cep, .input-cep");if(!e){n<12&&setTimeout(function(){xn(n+1)},350);return}var o=v.querySelector("#resumo-compra .frete-calculado");if(o&&o.textContent.trim()){var i=document.getElementById("mm-cep-input");i&&!i.value&&(i.value=Bn(t));return}var c=document.getElementById("mm-cep-input");c&&!c.value&&(c.value=Bn(t)),e.value=Bn(t),An(e),setTimeout(function(){Gn()},200)}}function An(n){try{var t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;t.call(n,n.value)}catch{}n.dispatchEvent(new Event("input",{bubbles:!0})),n.dispatchEvent(new Event("change",{bubbles:!0}))}function Gn(){try{if(window.Zord&&window.Zord.Cart&&typeof window.Zord.Cart.calculaFreteCarrinho=="function"){window.Zord.Cart.calculaFreteCarrinho();return}}catch{}var n=v.querySelector("#resumo-compra .calcula-frete > button, .area-frete button");n&&n.click()}function et(){var n=document.getElementById("mm-layout");!n||n._mmBound||(n._mmBound=!0,n.addEventListener("click",function(t){var e=t.target.closest("[data-mm-act]");if(e){var o=e.getAttribute("data-mm-act"),i=e.closest(".mm-item"),c=i?parseInt(i.getAttribute("data-mm-id"),10):null;switch(o){case"inc":at(c,i,"inc");break;case"dec":at(c,i,"dec");break;case"remove":gt(c,i);break;case"calc-cep":yn();break;case"coupon-toggle":var y=e.closest(".mm-coupon");if(y){y.classList.add("is-open");var L=y.querySelector("input");L&&setTimeout(function(){L.focus()},100)}break;case"coupon-remove":kt();break;case"finalizar":Pt();break}}}),n.addEventListener("submit",function(t){var e=t.target.closest('[data-mm-act="coupon-submit"]');if(e){t.preventDefault();var o=e.querySelector("input");o&&ut(o.value.trim())}}),n.addEventListener("input",function(t){t.target&&t.target.id==="mm-cep-input"&&(t.target.value=Bn(t.target.value))}),n.addEventListener("keydown",function(t){t.key==="Enter"&&t.target&&t.target.id==="mm-cep-input"&&(t.preventDefault(),yn())}))}function at(n,t,e){if(!(!n||!t)&&!(!window.Zord||!window.Zord.checkout)){t.classList.add("is-updating");try{e==="inc"?window.Zord.checkout.adicionaQuantidade(n):window.Zord.checkout.removeQuantidade(n)}catch(o){console.warn("[mm-cart] qty change failed",o),t.classList.remove("is-updating")}}}function gt(n,t){if(!(!n||!t)&&!(!window.Zord||!window.Zord.checkout)){t.classList.add("is-updating"),t.style.transition="opacity 200ms, transform 200ms",t.style.opacity="0",t.style.transform="translateX(-12px)";try{typeof window.Zord.checkout.deleteItem=="function"?window.Zord.checkout.deleteItem(n):window.Zord.checkout.removeQuantidade(n)}catch(e){console.warn("[mm-cart] remove failed",e),t.classList.remove("is-updating"),t.style.opacity="1",t.style.transform=""}}}function yn(){var n=document.getElementById("mm-cep-input");if(n){var t=(n.value||"").replace(/\D/g,"");if(t.length!==8){n.focus(),n.classList.add("mm-input-error"),setTimeout(function(){n.classList.remove("mm-input-error")},1200);return}Hn(t);var e=v.querySelector("#cep, .input-cep");e&&(e.value=Bn(t),An(e)),Gn()}}function ut(n){if(n&&!(!window.Zord||!window.Zord.checkout)){var t=v.querySelector("#cupom-desconto");t&&(t.value=n.toUpperCase(),An(t));try{window.Zord.checkout.addCupomDesconto()}catch(e){console.warn("[mm-cart] coupon apply failed",e)}}}function kt(){if(!(!window.Zord||!window.Zord.checkout)){try{var n=Sn();n&&n.couponCode&&(n.couponCode="",rn.set(N,JSON.stringify(n)))}catch{}try{window.Zord.checkout.removeCupomDesconto()}catch(t){console.warn("[mm-cart] coupon remove failed",t)}}}function Pt(){try{var n=$n();n.items&&n.items.length>0&&Nn(n)}catch{}if(V){rn.remove("mm_checkout_mode"),location.href=W();return}var t=document.getElementById("finalizar-compra");if(t){t.click();return}location.href="/checkout/identify"}if(F){let n=function(e){if(e=e||0,e>30){t();return}var o=v.querySelectorAll(".cart-item").length>0,i=v.querySelector("#resumo-compra");o||i||e>8?t():setTimeout(function(){n(e+1)},250)},t=function(){dt(),et(),tt(),xn(),typeof jQuery<"u"&&jQuery(document).ajaxComplete(function(i,c,y){if(!(!y||!y.url)){var L=y.url;(L.indexOf("checkout/cart")!==-1||L.indexOf("atualiza")!==-1||L.indexOf("cupom")!==-1||L.indexOf("frete")!==-1||L.indexOf("removeItem")!==-1||L.indexOf("adicionaItem")!==-1)&&(setTimeout(tt,120),setTimeout(function(){var X=$n();X.shipping!==null&&X.cepValue&&Hn(X.cepValue)},200))}});try{var e=new MutationObserver(function(i){t._mutTimer&&clearTimeout(t._mutTimer),t._mutTimer=setTimeout(tt,200)}),o=[v.querySelector("#cart-area"),v.querySelector(".cart-area"),v.querySelector("#resumo-compra")].filter(Boolean);o.forEach(function(i){e.observe(i,{childList:!0,subtree:!0,characterData:!0})})}catch{}};if(!document.getElementById("mm-checkout-cro-done")){var Pn=document.createElement("div");Pn.id="mm-checkout-cro-done",Pn.style.display="none",document.body.appendChild(Pn)}n()}function Cn(n){if(!n||!n.items||!n.items.length)return'<aside class="mm-id-sum mm-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><div class="mm-sum-empty"><p>Não conseguimos carregar o resumo do seu pedido.</p><a class="mm-btn-secondary" href="/checkout/cart">Voltar ao carrinho</a></div></div></aside>';var t=3,e=n.items.slice(0,t),o=n.items.length-t,i=e.map(function(an){var gn=an.quantity>1?'<strong class="mm-id-thumb-qty">'+an.quantity+"×</strong> ":"",cn=!an.imgSrc&&!(an.lineTotalPix>0)&&!(an.lineTotal>0);if(cn)return'<div class="mm-id-thumb"><div class="mm-id-thumb-img"><span class="mm-skel" style="display:block;width:100%;height:100%"></span></div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+gn+I(an.name)+"</p>"+(an.variant?'<p class="mm-id-thumb-variant">'+I(an.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price"><span class="mm-skel" style="display:inline-block;width:56px;height:15px"></span></div></div>';var hn=an.imgSrc?'<img src="'+I(an.imgSrc)+'" alt="'+I(an.name)+'" loading="lazy">':'<div class="mm-id-thumb-placeholder">'+H.box+"</div>",bn=an.lineTotal>0?an.lineTotal:an.lineTotalPix;return'<div class="mm-id-thumb"><div class="mm-id-thumb-img">'+hn+'</div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+gn+I(an.name)+"</p>"+(an.variant?'<p class="mm-id-thumb-variant">'+I(an.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price">'+Z(bn)+"</div></div>"}).join("");o>0&&(i+='<div class="mm-id-thumb-more">+ '+o+" "+(o===1?"item":"itens")+" a mais</div>");var c=n.subtotalFull>0?n.subtotalFull:n.subtotalPix,y='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+Z(c)+"</span></div>";if(n.shipping!==null&&n.shipping!==void 0){var L;n.shipping===0?L='<span class="mm-row-value is-free">'+H.check+" Grátis</span>":L='<span class="mm-row-value">'+Z(n.shipping)+"</span>",y+='<div class="mm-row"><span class="mm-row-label">Frete'+(n.shippingDeadline?' <span class="mm-row-sub">· '+I(n.shippingDeadline)+"</span>":"")+"</span>"+L+"</div>"}n.discount>0&&(y+='<div class="mm-row"><span class="mm-row-label">Desconto'+(n.couponCode?' <span class="mm-row-sub">· '+I(n.couponCode)+"</span>":"")+'</span><span class="mm-row-value is-discount">− '+Z(n.discount)+"</span></div>");var X,G=n.shipping!==null&&n.shipping!==void 0?n.shipping:0;if(n.shipping!==null&&n.shipping!==void 0){var tn=Math.max(0,c+G-(n.discount||0)),Q=Math.max(0,n.subtotalPix+G-(n.discount||0)),on=tn-Q,en=tn/12;X='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value">'+Z(tn)+'</div><div class="mm-total-pix"><span>'+Z(Q)+" à vista no PIX</span>"+(on>0?'<span class="mm-total-pix-save">economia de '+Z(on)+"</span>":"")+'</div><div class="mm-total-parcela">ou 12x de '+Z(en)+" sem juros</div></div>"}else{var sn=c/12;X='<div class="mm-total"><div class="mm-total-label">Subtotal</div><div class="mm-total-value">'+Z(n.subtotalPix)+'</div><div class="mm-total-pix"><span>à vista no PIX</span></div><div class="mm-total-parcela">ou 12x de '+Z(sn)+" sem juros</div></div>"}return'<aside class="mm-id-sum mm-sum"><h2 class="mm-h">Resumo do pedido</h2><div class="mm-sum-card"><div class="mm-id-thumbs">'+i+'</div><div class="mm-rows">'+y+"</div>"+pt(n.couponCode,"summary-coupon")+X+'<a class="mm-id-edit-cart" href="/checkout/cart"><span>Editar carrinho</span></a></div><a class="mm-help mm-sum-help" href="'+h+'" target="_blank" rel="noopener" data-mm-track="help-whats-sum">'+H.whats+"<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span></a></aside>"}function rt(){var n='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',t='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',e='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="9" x2="17" y2="9"/><line x1="7" y1="13" x2="17" y2="13"/><line x1="7" y1="17" x2="13" y2="17"/></svg>',o='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';return'<section class="mm-id-form-col"><h2 class="mm-id-h2">Quase lá! Identifique-se</h2><p class="mm-id-sub">Informe seu e-mail para finalizar a compra de forma rápida e segura.</p><form class="mm-id-form" data-mm-act="identify-submit" novalidate><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+n+'</span><input type="email" id="mm-id-email" name="mm-email" class="mm-input" placeholder="seu@email.com" autocomplete="email" inputmode="email" required></div><p class="mm-id-microcopy">'+H.lock+'<span>Seu e-mail é seguro · Não compartilhamos com terceiros</span></p><button type="submit" class="mm-cta">Continuar'+H.arrow+'</button></form><div class="mm-id-divider"><span>ou</span></div><div class="mm-id-google-slot"></div><button type="button" class="mm-id-guest-toggle" data-mm-act="guest-go" aria-label="Continuar como visitante"><span class="mm-id-guest-icon" aria-hidden="true">'+t+'</span><span class="mm-id-guest-label">Continuar como visitante (sem criar conta)</span><span class="mm-id-guest-arrow" aria-hidden="true">'+H.arrow+'</span></button><div class="mm-trust mm-id-trust"><span class="mm-trust-item">'+H.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+H.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+H.shield+'<span>Garantia 12 meses</span></span></div><p class="mm-id-lgpd">Ao continuar, você concorda com nossa <a href="/politica-de-privacidade" target="_blank" rel="noopener">Política de Privacidade</a></p></section>'}function ct(n){var t=document.getElementById("mm-layout");if(t)return t.parentElement!==v&&v.insertBefore(t,v.firstChild),t;var e=document.createElement("div");return e.id="mm-layout",e.classList.add("mm-id-layout"),e.innerHTML=_n("delivery")+'<div class="mm-grid mm-id-grid">'+rt()+Cn(n)+"</div>",v.insertBefore(e,v.firstChild),document.body.classList.add("mm-checkout-rebuild"),Ot(),v.classList.add("mm-shadow-mode"),document.documentElement.classList.remove("mm-cart-loading"),e}function Ot(){var n=document.querySelector(".mm-id-google-slot"),t=v.querySelector(".social-login-area");if(!(!n||!t)&&!n.contains(t))try{n.appendChild(t),n.classList.add("is-loaded")}catch{}}function Vn(n){rn.set("mm_user_email",n);var t=v.querySelector("#login");if(!t)return!1;t.value=n,An(t);var e=t.closest("form"),o=e?e.querySelector('button.button-send, button[type="submit"]'):null;return o?(o.click(),!0):e?(e.submit(),!0):!1}function Dt(){var n=document.getElementById("mm-layout");!n||n._mmBound||(n._mmBound=!0,n.addEventListener("submit",function(t){var e=t.target.closest('[data-mm-act="identify-submit"]');if(e){t.preventDefault();var o=e.querySelector("#mm-id-email"),i=o?o.value.trim():"";if(!i||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)){o&&(o.classList.add("mm-input-error"),o.focus(),setTimeout(function(){o.classList.remove("mm-input-error")},1500));return}var c=Vn(i);if(c){var y=e.querySelector(".mm-cta");y&&y.classList.add("is-loading")}return}}),n.addEventListener("click",function(t){var e=t.target.closest("[data-mm-act]");if(e){var o=e.getAttribute("data-mm-act");o==="guest-go"&&(rn.set("mm_checkout_mode","guest"),e.classList.add("is-loading"),location.href="/checkout/onepage")}}))}function St(n){try{var t=new DOMParser().parseFromString(n,"text/html"),e=t.querySelector("#checkout-main-area");if(!e)return null;for(var o=[],i=e.querySelectorAll(".cart-item"),c=0,y=0;y<i.length;y++){var L=i[y],X=L.querySelector("figure img")||L.querySelector("#product-img")||L.querySelector("img"),G=L.querySelector(".column-valor-produto .valor"),tn=parseFloat(L.getAttribute("data-valor")||"0"),Q=G?pn(G.textContent):0;o.push({name:L.getAttribute("data-item-name")||L.getAttribute("data-name")||"",variant:L.getAttribute("data-item-variant")||"",imgSrc:X&&X.getAttribute("src")||"",quantity:parseInt(L.getAttribute("data-item-quantity")||"1",10),lineTotal:tn,lineTotalPix:Q,isPix:!!L.querySelector(".column-valor-produto .sub"),deposito:L.getAttribute("data-item-deposito")==="1"}),c+=tn}if(o.length===0)return null;var on=e.querySelector("#resumo-compra .resumo-valores .value"),en=on?pn(on.textContent):0;en<=0&&(en=o.reduce(function(un,kn){return un+(kn.lineTotalPix||0)},0));var sn=e.querySelector("#resumo-compra .discount-value"),an=sn?pn(sn.textContent):0,gn=e.querySelector("#resumo-compra .txt-cupom"),cn="";if(gn){var hn=(gn.textContent||"").replace(/\s+/g,"").trim();/^[A-Za-z0-9][A-Za-z0-9._-]{1,}$/.test(hn)&&(cn=hn.toUpperCase())}var bn=e.querySelector("#resumo-compra .frete-calculado"),In=null,Yn="";if(bn){var x=bn.querySelector(".servico-frete[data-valor-frete]");if(x){var w=x.getAttribute("data-valor-frete");if(w!==null&&w!==""){var D=parseFloat(w);isNaN(D)||(In=D)}}var nn=bn.textContent.trim();if(In===null&&nn){var J=pn(nn);J>0&&(In=J)}var fn=nn.match(/(\d+)\s*dias?/i);fn&&(Yn=fn[1]+" dias úteis")}return{ts:Date.now(),items:o,subtotalPix:en,subtotalFull:c,discount:an,couponCode:cn,shipping:In,shippingDeadline:Yn,cepValue:""}}catch{return null}}function jt(n){try{fetch("/checkout/cart",{credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(t){return t.text()}).then(function(t){var e=St(t);e&&rn.set(N,JSON.stringify(e)),n(e)}).catch(function(){n(null)})}catch{n(null)}}function It(n){var t=document.querySelector("#mm-layout .mm-id-sum");if(t){var e=t.parentNode;if(e){var o=document.createElement("div");o.innerHTML=Cn(n);var i=o.firstChild;i&&e.replaceChild(i,t)}}}function qt(){jt(function(n){n&&n.items&&n.items.length>0&&(V&&d(n),It(n))})}function Gt(n){var t="cep=&nenhumCreditoSelecionado=true&area=main-cart&cupom-desconto="+encodeURIComponent(n||"");return fetch("/checkout/cart?operation=atualizaValoresCarrinho",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"text/html,application/json,*/*","X-Requested-With":"XMLHttpRequest"},body:t}).then(function(e){if(!e.ok)throw new Error("HTTP "+e.status);return e.text()})}function ft(n,t){try{var e=new DOMParser().parseFromString(n,"text/html"),o=e.querySelector(".txt-cupom");if(!o)return!1;var i=(o.textContent||"").replace(/\s+/g,"").trim().toUpperCase();return!!i&&i===String(t).toUpperCase()}catch{return!1}}function _t(n,t){if(n){n.classList.remove("is-busy");var e=n.querySelector(".mm-coupon-error");e&&(e.textContent=t,e.removeAttribute("hidden"));var o=n.querySelector("input");if(o){o.classList.add("mm-input-error");try{o.focus()}catch{}}}}function Ct(n,t){n=(n||"").trim();var e=t?t.closest(".mm-coupon"):null;if(!n){_t(e,"Digite um cupom.");return}if(e){e.classList.add("is-busy");var o=e.querySelector(".mm-coupon-error");o&&o.setAttribute("hidden","");var i=e.querySelector("input");i&&i.classList.remove("mm-input-error")}Gt(n).then(function(c){if(ft(c,n)){if(M){location.reload();return}qt()}else _t(e,"Cupom inválido ou não aplicável a este carrinho.")}).catch(function(){_t(e,"Não foi possível aplicar agora. Tente de novo.")})}function Ut(n){var t=n?n.closest(".mm-coupon"):null;t&&t.classList.add("is-busy"),Gt("").then(function(){if(M){location.reload();return}qt()}).catch(function(){t&&t.classList.remove("is-busy")})}function $t(n){!n||n._mmCouponBound||(n._mmCouponBound=!0,n.addEventListener("submit",function(t){var e=t.target.closest('[data-mm-act="summary-coupon-submit"]');if(e){t.preventDefault();var o=e.querySelector("input");Ct(o?o.value:"",e)}}),n.addEventListener("click",function(t){var e=t.target.closest('[data-mm-act="summary-coupon-remove"]');e&&(t.preventDefault(),Ut(e))}))}if(z){let n=function(e){if(e=e||0,e>30){t();return}var o=v.querySelector("#login, #login-form-etapa-01");o||e>8?t():setTimeout(function(){n(e+1)},250)},t=function(){var e=Sn();ct(e),Dt(),$t(document.getElementById("mm-layout")),Ot(),setTimeout(Ot,600),setTimeout(Ot,1500),qt(),setTimeout(function(){var o=document.getElementById("mm-id-email");o&&!("ontouchstart"in window)&&o.focus()},250)};n()}function Vt(n){var t=String(n||"").replace(/\D/g,"").slice(0,11);return t.length<=3?t:t.length<=6?t.slice(0,3)+"."+t.slice(3):t.length<=9?t.slice(0,3)+"."+t.slice(3,6)+"."+t.slice(6):t.slice(0,3)+"."+t.slice(3,6)+"."+t.slice(6,9)+"-"+t.slice(9)}function vt(n){var t=String(n||"").replace(/\D/g,"").slice(0,11);return t.length<=2?t.length?"("+t:"":t.length<=6?"("+t.slice(0,2)+") "+t.slice(2):t.length<=10?"("+t.slice(0,2)+") "+t.slice(2,6)+"-"+t.slice(6):"("+t.slice(0,2)+") "+t.slice(2,7)+"-"+t.slice(7)}function ee(n){var t=String(n||"").replace(/\D/g,"").slice(0,8);return t.length<=5?t:t.slice(0,5)+"-"+t.slice(5)}function Ht(n,t){var e=String(n||"").replace(/\D/g,"");if(e.length!==8){t(null);return}try{fetch("https://viacep.com.br/ws/"+e+"/json/",{headers:{Accept:"application/json"}}).then(function(o){return o.json()}).then(function(o){if(!o||o.erro){t(null);return}t({logradouro:o.logradouro||"",bairro:o.bairro||"",cidade:o.localidade||"",estado:o.uf||""})}).catch(function(){t(null)})}catch{t(null)}}var Rn={mail:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',doc:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 12h8v2H8zm0 4h5v2H8z"/></svg>',phone:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>',pin:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',pix:'<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M11.917 11.71a2.046 2.046 0 0 1-1.454-.602l-2.1-2.1a.4.4 0 0 0-.551 0l-2.108 2.108a2.044 2.044 0 0 1-1.454.602h-.414l2.66 2.66c.83.83 2.177.83 3.007 0l2.667-2.668h-.253zM4.25 4.282c.55 0 1.066.214 1.454.602l2.108 2.108a.39.39 0 0 0 .552 0l2.1-2.1a2.044 2.044 0 0 1 1.453-.602h.253L9.503 1.623a2.127 2.127 0 0 0-3.007 0l-2.66 2.66h.414z"/><path d="m14.377 6.496-1.612-1.612a.307.307 0 0 1-.114.023h-.733c-.379 0-.75.154-1.017.422l-2.1 2.1a1.005 1.005 0 0 1-1.425 0L5.268 5.32a1.448 1.448 0 0 0-1.018-.422h-.9a.306.306 0 0 1-.109-.021L1.623 6.496c-.83.83-.83 2.177 0 3.008l1.618 1.618a.305.305 0 0 1 .108-.022h.901c.38 0 .75-.153 1.018-.421L7.375 8.57a1.034 1.034 0 0 1 1.426 0l2.1 2.1c.267.268.638.421 1.017.421h.733c.04 0 .079.01.114.024l1.612-1.612c.83-.83.83-2.178 0-3.008z"/></svg>',cardBig:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>',barcode:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 6h2v12H2zm3 0h1v12H5zm2 0h3v12H7zm4 0h1v12h-1zm3 0h2v12h-2zm3 0h1v12h-1zm2 0h3v12h-3z"/></svg>',editPencil:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>'};function Wt(n){var t=n?' value="'+I(n)+'"':"";return'<section class="mm-op-form-col"><h2 class="mm-id-h2">Falta pouco. Onde entregar?</h2><p class="mm-id-sub">Preencha seus dados e o endereço de entrega — o frete é calculado automaticamente.</p><form class="mm-op-form" data-mm-act="onepage-submit" novalidate><div class="mm-op-card"><h3 class="mm-op-card-title">'+Rn.user+'<span>Quem vai receber</span></h3><div class="mm-op-grid-2"><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+Rn.mail+'</span><input type="email" id="mm-op-email" class="mm-input" placeholder="seu@email.com" autocomplete="email" inputmode="email" required'+t+'></div><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+Rn.user+'</span><input type="text" id="mm-op-nome" class="mm-input" placeholder="Nome completo" autocomplete="name" required></div><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+Rn.doc+'</span><input type="tel" id="mm-op-cpf" class="mm-input" placeholder="CPF" inputmode="numeric" autocomplete="off" maxlength="14" required></div><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+Rn.phone+'</span><input type="tel" id="mm-op-tel" class="mm-input" placeholder="(11) 91234-5678" inputmode="tel" autocomplete="tel" maxlength="15" required></div></div><p class="mm-op-microcopy-soft">Usamos seus dados só pra emitir nota fiscal e te avisar da entrega.</p></div><div class="mm-op-card"><h3 class="mm-op-card-title">'+Rn.pin+'<span>Endereço de entrega</span></h3><div class="mm-op-grid-2"><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+Rn.pin+'</span><input type="tel" id="mm-op-cep" class="mm-input" placeholder="CEP — 00000-000" inputmode="numeric" autocomplete="postal-code" maxlength="9" required><span class="mm-input-status" id="mm-op-cep-status" aria-live="polite"></span></div><a class="mm-op-cep-help" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+Rn.home+'</span><input type="text" id="mm-op-rua" class="mm-input" placeholder="Rua, Av, Travessa..." autocomplete="address-line1" required></div><div class="mm-input-wrap"><input type="tel" id="mm-op-num" class="mm-input mm-input-noicon" placeholder="Número" inputmode="numeric" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-comp" class="mm-input mm-input-noicon" placeholder="Complemento (opcional)" autocomplete="address-line2"></div><div class="mm-input-wrap mm-op-col-2"><input type="text" id="mm-op-bairro" class="mm-input mm-input-noicon" placeholder="Bairro" autocomplete="address-level3" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-cidade" class="mm-input mm-input-noicon" placeholder="Cidade" autocomplete="address-level2" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-uf" class="mm-input mm-input-noicon" placeholder="UF" maxlength="2" autocomplete="address-level1" required></div></div><div class="mm-op-frete" id="mm-op-frete-slot"></div></div><button type="submit" class="mm-cta mm-op-cta">Última etapa: pagamento'+H.arrow+'</button><p class="mm-id-microcopy mm-op-cta-sub">'+H.lock+'<span>Você revisa tudo antes de finalizar</span></p></form><div class="mm-trust mm-id-trust"><span class="mm-trust-item">'+H.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+H.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+H.shield+"<span>Garantia 12 meses</span></span></div></section>"}function At(){var n=document.cookie.match(/(?:^|;\s*)zordEm=([^;]+)/);if(!n)return"";try{return decodeURIComponent(n[1])}catch{return n[1]}}function Zt(n){var t=v.querySelector("#destinatario");if(t&&t.value&&t.value.trim())return t.value.trim();var e=(n||[]).filter(function(o){return o.checked})[0]||(n||[])[0];return e&&e.lines[0]?e.lines[0]:""}function Ft(){var n=v.querySelectorAll("#box-lista-enderecos .item-endereco");return[].map.call(n,function(t){var e=t.querySelector('input[name="endereco_entrega"]');if(!e)return null;var o=t.querySelector(".info-address"),i=o?[].map.call(o.querySelectorAll(".txt-info"),function(c){return(c.textContent||"").replace(/\s+/g," ").trim()}).filter(Boolean):[];return{id:e.id,value:e.value,checked:e.checked,lines:i}}).filter(Boolean)}var Tt='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6M14 11v6"/></svg>';function Zn(n,t){var e=n.lines[0]?"<strong>"+I(n.lines[0])+"</strong>":"",o=n.lines.slice(1).map(function(i){return"<span>"+I(i)+"</span>"}).join("");return'<label class="mm-op-addr'+(n.checked?" is-selected":"")+'" data-mm-addr="'+I(n.value)+'"><input type="radio" name="mm-op-addr" value="'+I(n.value)+'"'+(n.checked?" checked":"")+'><span class="mm-op-addr-check" aria-hidden="true"></span><span class="mm-op-addr-body">'+e+o+'</span><button type="button" class="mm-op-addr-del" data-mm-act="addr-remove" data-id="'+I(n.value)+'" title="Remover endereço" aria-label="Remover este endereço">'+Tt+"</button></label>"}function r(){var n=Ft(),t=At(),e=Zt(n),o=(e||t||"?").trim().charAt(0).toUpperCase(),i=4,c;if(!n.length)c='<p class="mm-op-microcopy-soft">Nenhum endereço salvo — você adiciona na próxima etapa.</p>';else if(n.length<=i)c=n.map(Zn).join("");else{var y=null,L=[];n.forEach(function(G){G.checked&&!y?y=G:L.push(G)});var X=y?[y].concat(L):n.slice();c=X.slice(0,i).map(Zn).join("")+'<div class="mm-op-addr-extra" hidden>'+X.slice(i).map(Zn).join("")+'</div><button type="button" class="mm-op-addr-more" data-mm-act="addr-more">Ver mais '+(X.length-i)+" endereços</button>"}return'<section class="mm-op-form-col"><h2 class="mm-id-h2">Falta pouco. Confirme a entrega.</h2><p class="mm-id-sub">Seus dados já estão com a gente — é só escolher onde entregar.</p><form class="mm-op-form" data-mm-act="onepage-submit" novalidate><div class="mm-op-card mm-op-ident"><span class="mm-op-ident-avatar" aria-hidden="true">'+I(o)+'</span><span class="mm-op-ident-info"><span class="mm-op-ident-label">Você está logado</span>'+(e?'<strong class="mm-op-ident-name">'+I(e)+"</strong>":"")+(t?'<span class="mm-op-ident-email">'+I(t)+"</span>":"")+'</span><a class="mm-op-ident-switch" href="/logout">Sair</a></div><div class="mm-op-card"><h3 class="mm-op-card-title">'+Rn.pin+'<span>Endereço de entrega</span></h3><div class="mm-op-addr-list">'+c+'</div><a class="mm-op-addr-new" data-mm-act="addr-novo" href="#">'+Rn.pin+'Entregar em outro endereço</a><div class="mm-op-frete" id="mm-op-frete-slot"></div></div><button type="submit" class="mm-cta mm-op-cta">Última etapa: pagamento'+H.arrow+'</button><p class="mm-id-microcopy mm-op-cta-sub">'+H.lock+'<span>Você revisa tudo antes de finalizar</span></p></form><div class="mm-trust mm-id-trust"><span class="mm-trust-item">'+H.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+H.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+H.shield+"<span>Garantia 12 meses</span></span></div></section>"}function p(){if(!v)return null;function n(y){var L=v.querySelector(y);return L?(L.textContent||"").replace(/\s+/g," ").trim():""}var t=n(".value.valor-frete")||n("span.valor-frete"),e=n(".prazo-frete"),o=n(".nome-servico-frete").replace(/[()]/g,"").trim();if(!t&&!e)return null;var i=null;if(/gr[aá]tis/i.test(t))i=0;else if(t){var c=t.replace(/[^\d,.]/g,"");c.indexOf(",")!==-1&&(c=c.replace(/\./g,"").replace(",",".")),i=parseFloat(c),isNaN(i)&&(i=null)}return{value:i,deadline:e,name:o}}function d(n){n=n||{};var t=p();return t&&t.value!==null&&(n.shipping=t.value,t.deadline&&(n.shippingDeadline=t.deadline),t.name&&(n.shippingName=t.name)),n}function k(){var n=(v&&v.innerText||document.body.innerText||"").match(/CPF[:\s]*([\d]{3}\.?[\d]{3}\.?[\d]{3}\-?[\d]{2})/i);return n?n[1].trim():""}function E(n){[].forEach.call(document.querySelectorAll(".mm-op-addr"),function(t){t.classList.toggle("is-selected",t.getAttribute("data-mm-addr")===String(n))})}var A=null,B=null,a=null;function s(){if(!A){var n=document.getElementById("mm-layout");if(n){var t=n.getBoundingClientRect(),e=window.innerHeight||800,o=n.cloneNode(!0);o.id="mm-op-freeze",o.setAttribute("aria-hidden","true");var i="";try{i=getComputedStyle(document.body).backgroundColor}catch{}(!i||i==="rgba(0, 0, 0, 0)"||i==="transparent")&&(i="#ffffff"),o.style.cssText="position:fixed;left:"+Math.round(t.left)+"px;top:"+Math.round(t.top)+"px;width:"+Math.round(t.width)+"px;min-height:"+Math.round(Math.max(t.height,e-Math.max(t.top,0)))+"px;z-index:9990;pointer-events:none;background:"+i+";",document.body.appendChild(o),A=o,B&&clearTimeout(B),B=setTimeout(C,1600)}}}function u(){A&&(a&&clearTimeout(a),a=setTimeout(C,250))}function C(){if(B&&(clearTimeout(B),B=null),a&&(clearTimeout(a),a=null),!!A){var n=A;A=null,n.style.transition="opacity 160ms ease",n.style.opacity="0",setTimeout(function(){n.parentNode&&n.parentNode.removeChild(n)},180)}}function T(n){E(n),s();var t=document.getElementById("endereco_"+n)||v.querySelector('input[name="endereco_entrega"][value="'+n+'"]');t&&(t.checked||(t.checked=!0),t.dispatchEvent(new Event("click",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})))}var O="delivery",Y=null,K=null;function mn(){var n=document.getElementById("mm-layout");if(!(!n||n.__mmLoggedBound)){n.__mmLoggedBound=!0,n.addEventListener("submit",function(i){var c=i.target.closest('[data-mm-act="onepage-submit"]');c&&(i.preventDefault(),Fn(c))});var t=n.querySelector(".mm-op-addr-list");t&&t.addEventListener("change",function(i){i.target&&i.target.name==="mm-op-addr"&&T(i.target.value)}),t&&t.addEventListener("click",function(i){var c=i.target.closest('[data-mm-act="addr-remove"]');if(c){i.preventDefault(),i.stopPropagation();var y=c.getAttribute("data-id"),L=v.querySelector('#box-lista-enderecos .remover-endereco[data-id="'+y+'"]');L&&L.click()}});var e=n.querySelector('[data-mm-act="addr-more"]');e&&e.addEventListener("click",function(){var i=n.querySelector(".mm-op-addr-extra");i&&(i.hidden=!1),e.remove()});var o=n.querySelector('[data-mm-act="addr-novo"]');o&&o.addEventListener("click",function(i){i.preventDefault(),O="native",n.style.display="none",v.classList.remove("mm-shadow-mode"),document.body.classList.remove("mm-checkout-rebuild");try{window.scrollTo({top:0,behavior:"smooth"})}catch{window.scrollTo(0,0)}})}}function dn(){if(O!=="native"&&!document.getElementById("mm-layout")&&v){if(O==="payment"){if(!v.querySelector('input[name="forma-pagto"]'))return;try{me(Y||{})}catch{}return}v.querySelector("#box-lista-enderecos")&&(Tn(d(Sn()),""),mn(),vn(),qt(),u())}}function wn(){if(!wn._obs){var n=new MutationObserver(function(){O!=="native"&&!document.getElementById("mm-layout")&&!document.getElementById("mm-op-overlay")&&(K&&clearTimeout(K),K=setTimeout(dn,80))});n.observe(v,{childList:!0}),wn._obs=n}}function vn(){var n=document.querySelector('.mm-op-addr input[name="mm-op-addr"]:checked');n&&E(n.value);var t=p();t&&t.value!==null&&Xn({value:t.value,name:t.name||"",deadline:t.deadline||"",city:"",options:[]}),wn()}function Fn(n){var t=document.querySelector('.mm-op-addr input[name="mm-op-addr"]:checked'),e=t?t.value:"";if(!e){var o=document.querySelector('[data-mm-act="addr-novo"]');o&&o.click();return}var i=Ft(),c=i.filter(function(G){return G.value===String(e)})[0]||{},y=c.lines||[];Y={email:At(),nome:((v.querySelector("#destinatario")||{}).value||y[0]||"").trim(),cpf:k(),tel:"",addressLines:y.slice(1),rua:y[1]||"",num:"",comp:"",bairro:"",cidade:y[2]||"",uf:"",cep:""};var L=n&&n.querySelector(".mm-cta");L&&L.classList.add("is-loading"),pe("Abrindo o pagamento..."),O="payment";var X=0;(function G(){var tn=v.querySelector('input[name="forma-pagto"], #forma-pagto-pix, #forma-pagto-cartao');if(tn){try{me(Y)}catch{var Q=document.getElementById("mm-op-overlay");Q&&Q.remove(),O="native";var on=document.getElementById("mm-layout");on&&(on.style.display="none"),v.classList.remove("mm-shadow-mode")}return}if(++X<40){setTimeout(G,200);return}var en=document.getElementById("mm-op-overlay");en&&en.remove(),O="native";var sn=document.getElementById("mm-layout");sn&&(sn.style.display="none"),v.classList.remove("mm-shadow-mode")})()}function Tn(n,t){var e=document.getElementById("mm-layout");if(e)return e.parentElement!==v&&v.insertBefore(e,v.firstChild),e;var o=document.createElement("div");return o.id="mm-layout",o.classList.add("mm-id-layout"),o.classList.add("mm-op-layout"),o.innerHTML=_n("delivery")+'<div class="mm-grid mm-id-grid mm-op-grid">'+(V?r():Wt(t))+Cn(n)+"</div>",V&&o.classList.add("mm-op-logged"),v.insertBefore(o,v.firstChild),document.body.classList.add("mm-checkout-rebuild"),v.classList.add("mm-shadow-mode"),document.documentElement.classList.remove("mm-cart-loading"),o}function Xn(n){var t=document.getElementById("mm-op-frete-slot");if(t){if(n==="loading"){t.innerHTML='<div class="mm-op-frete-loading"><div class="mm-op-frete-spinner"></div><span>Calculando frete...</span></div>';return}if(n==="error"){t.innerHTML='<div class="mm-op-frete-error"><span>Não conseguimos calcular o frete. Confira o CEP e tente novamente.</span></div>';return}var e=n.value===0,o=e?'<strong class="mm-op-frete-value is-free">Grátis</strong>':'<strong class="mm-op-frete-value">'+Z(n.value)+"</strong>",i=n.name?'<span class="mm-op-frete-name">'+I(n.name)+"</span>":"",c=n.deadline?'<span class="mm-op-frete-deadline">Entrega em '+I(n.deadline)+"</span>":"",y=n.city?'<span class="mm-op-frete-city">para '+I(n.city)+"</span>":"",L="";if(n.options&&n.options.length>1){L='<div class="mm-op-frete-options"><button type="button" class="mm-op-frete-toggle" data-mm-act="toggle-frete-opts" aria-expanded="false">Ver outras opções ('+n.options.length+')</button><div class="mm-op-frete-options-list" hidden>';for(var X=0;X<n.options.length;X++){var G=n.options[X],tn=G.isSelected?" is-selected":"",Q=G.isFree?'<span class="mm-op-frete-opt-value is-free">Grátis</span>':'<span class="mm-op-frete-opt-value">'+Z(G.value)+"</span>";L+='<button type="button" class="mm-op-frete-opt'+tn+'" data-mm-act="op-ship-select" data-ship-id="'+I(G.id)+'" aria-pressed="'+(G.isSelected?"true":"false")+'"><span class="mm-op-frete-opt-radio" aria-hidden="true"><span></span></span><span class="mm-op-frete-opt-body"><span class="mm-op-frete-opt-name">'+I(G.name||"Padrão")+"</span>"+(G.deadline?'<span class="mm-op-frete-opt-deadline">'+I(G.deadline)+"</span>":"")+"</span>"+Q+"</button>"}L+="</div></div>"}t.innerHTML='<div class="mm-op-frete-card'+(e?" is-free":"")+'"><div class="mm-op-frete-icon">'+H.truck+'</div><div class="mm-op-frete-body"><div class="mm-op-frete-row">'+i+o+"</div>"+c+y+"</div></div>"+L}}function it(){try{var n=document.querySelector("#resumo-compra");if(n){var t=n.querySelector(".txt-cupom");if(t){var e=(t.textContent||"").replace(/\s+/g,"").trim();if(/^[A-Za-z0-9][A-Za-z0-9._-]{1,}$/.test(e))return e.toUpperCase()}return""}}catch{}try{var o=Sn();if(o&&o.couponCode)return String(o.couponCode).toUpperCase()}catch{}return""}function Et(n,t){var e=Bn(n),o=it(),i="cep="+encodeURIComponent(e);o&&(i+="&cupom-desconto="+encodeURIComponent(o)),fetch("/checkout/cart?operation=atualizaValoresCarrinho",{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest"},body:i}).then(function(c){return c.text()}).then(function(c){var y;try{y=new DOMParser().parseFromString(c,"text/html")}catch{t(null);return}for(var L=y.querySelectorAll(".servico-frete"),X=[],G=0;G<L.length;G++){var tn=L[G],Q=tn.getAttribute("data-valor-frete");if(!(Q===null||Q==="")){var on=parseFloat(Q);if(!isNaN(on)){var en=tn.querySelector('input[type="radio"]'),sn=tn.querySelector(".dias-entrega"),an=sn?sn.textContent.trim():"",gn=an.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i);X.push({id:en?en.value:"",name:tn.getAttribute("data-servico-frete")||"",deadline:gn?gn[1].replace(/\s+/g," "):"",value:on,isFree:on===0,isSelected:en?en.checked:!1})}}}if(!X.length){t(null);return}var cn=X.filter(function(bn){return bn.isSelected})[0];cn||(cn=X.reduce(function(bn,In){return In.value<bn.value?In:bn},X[0]),cn.isSelected=!0);var hn=y.querySelector(".frete-location .city, .frete-calculado .city");t({value:cn.value,name:cn.name,deadline:cn.deadline,city:hn?hn.textContent.trim():"",options:X})}).catch(function(){t(null)})}function ht(){function n(nn){if(!nn)return"";var J=nn.match(/(\d+(?:\s*[aà]\s*\d+)?)\s*dias?(?:\s*\([^)]+\))?\s*([úu]teis)?/i);return J?J[1].replace(/\s+/g," ")+" dias úteis":""}function t(nn){for(var J=[],fn=nn.querySelectorAll(".servico-frete"),un=0;un<fn.length;un++){var kn=fn[un],Ln=kn.querySelector('input[type="radio"]'),On=kn.querySelector(".dias-entrega"),Jn=parseFloat(kn.getAttribute("data-valor-frete")||"0"),Kn=kn.getAttribute("data-servico-frete")||"",bt=On?On.textContent.trim():"",xt=bt.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i);J.push({id:Ln?Ln.value:"",name:Kn,deadline:xt?xt[1].replace(/\s+/g," "):bt,value:Jn,isFree:Jn===0,isSelected:Ln?Ln.checked:!1})}return J}var e=v.querySelector(".frete-calculado");if(e&&e.textContent.trim()){var o=t(e),i=e.querySelector(".frete-location .city"),c=i?i.textContent.trim():"",y=o.filter(function(nn){return nn.isSelected})[0]||o[0];if(y)return{value:y.value,name:y.name,deadline:y.deadline,city:c,options:o};var L=e.querySelector(".info-frete-selec .info-title span, .info-title span"),X=e.querySelector(".info-frete-selec .dias-entrega, .dias-entrega"),G=e.querySelector(".value.valor-frete, .valor-frete .value"),tn=e.textContent,Q=null;if(G&&(/gr[aá]tis/i.test(G.textContent)?Q=0:Q=pn(G.textContent)),Q===null&&(/gr[aá]tis/i.test(tn)?Q=0:Q=pn(tn)||null),Q!==null)return{value:Q,name:L?L.textContent.trim():"",deadline:n(X?X.textContent:tn),city:c,options:[]}}var on=v.querySelector(".line-entrega"),en=v.querySelector(".value.valor-frete, .valor-frete .value");if(on||en){var sn=((on||en).textContent||"").trim(),an=Sn(),gn=an&&an.shippingName||"",cn=an&&an.shippingDeadline||"",hn=an&&an.shippingCity||"",bn=an?an.shippingOptions||[]:[];if(sn){var In=(v.querySelector(".nome-servico-frete, .info-frete-selec .info-title span")||{}).textContent||"",Yn=(v.querySelector(".info-entrega, .prazo-entrega, .line-entrega .sub, .info-frete-selec .dias-entrega")||{}).textContent||"",x=n(Yn)||n(sn)||cn,w=In.trim()||gn;if(/gr[aá]tis/i.test(sn))return{value:0,deadline:x,name:w,city:hn,options:bn};var D=pn(sn);if(D>0)return{value:D,deadline:x,name:w,city:hn,options:bn}}if(an&&an.shipping!==null&&an.shipping!==void 0)return{value:an.shipping,deadline:cn,name:gn,city:hn,options:bn}}return null}function Un(){var n=document.getElementById("mm-op-cep");if(n){var t=(n.value||"").replace(/\D/g,"");if(t.length===8){if(Un._lastCep===t){var e=document.getElementById("mm-op-frete-slot");if(e&&e.querySelector(".mm-op-frete-card"))return}Un._lastCep=t;var o=(Un._token||0)+1;Un._token=o,Hn(t);var i=v.querySelector("#cep, .input-cep");i&&(i.value=Bn(t),An(i)),Xn("loading"),Et(t,function(c){if(Un._token===o){if(!c){Xn("error");return}Xn(c);var y=Sn();y&&(y.shipping=c.value,y.shippingDeadline=c.deadline,y.shippingName=c.name||"",y.shippingCity=c.city||"",y.shippingOptions=c.options||[],rn.set(N,JSON.stringify(y)),It(y))}})}}}function Qn(){var n=document.getElementById("mm-layout");if(!n||n._mmOpBound)return;n._mmOpBound=!0,n.addEventListener("click",function(e){var o=e.target.closest('[data-mm-act="toggle-frete-opts"]');if(o){e.preventDefault();var i=o.parentElement.querySelector(".mm-op-frete-options-list");if(i){var c=i.hasAttribute("hidden");c?i.removeAttribute("hidden"):i.setAttribute("hidden",""),o.setAttribute("aria-expanded",c?"true":"false"),o.textContent=c?"Ocultar opções":"Ver outras opções"}return}var y=e.target.closest('[data-mm-act="op-ship-select"]');if(y){e.preventDefault();var L=y.getAttribute("data-ship-id");if(!L)return;var X=v.querySelector('.servico-frete input[type="radio"][value="'+L+'"]');if(!X){console.warn("[mm-op] modalidade não encontrada no DOM:",L);return}for(var G=n.querySelectorAll(".mm-op-frete-opt"),tn=0;tn<G.length;tn++){var Q=G[tn],on=Q.getAttribute("data-ship-id")===L;Q.classList.toggle("is-selected",on),Q.setAttribute("aria-pressed",on?"true":"false")}X.checked=!0,X.click();var en=Sn();if(en&&en.shippingOptions&&en.shippingOptions.length){var sn=en.shippingOptions.filter(function(an){return String(an.id)===String(L)})[0];sn&&(en.shipping=sn.value,en.shippingDeadline=sn.deadline||"",en.shippingName=sn.name||"",en.shippingOptions=en.shippingOptions.map(function(an){return an.isSelected=String(an.id)===String(L),an}),rn.set(N,JSON.stringify(en)),Xn({value:sn.value,deadline:sn.deadline||"",name:sn.name||"",city:en.shippingCity||"",options:en.shippingOptions}),It(en))}return}}),n.addEventListener("submit",function(e){var o=e.target.closest('[data-mm-act="onepage-submit"]');if(!o)return;if(e.preventDefault(),V){Fn(o);return}var i={email:(document.getElementById("mm-op-email")||{}).value||"",nome:(document.getElementById("mm-op-nome")||{}).value||"",cpf:(document.getElementById("mm-op-cpf")||{}).value||"",tel:(document.getElementById("mm-op-tel")||{}).value||"",cep:(document.getElementById("mm-op-cep")||{}).value||"",rua:(document.getElementById("mm-op-rua")||{}).value||"",num:(document.getElementById("mm-op-num")||{}).value||"",comp:(document.getElementById("mm-op-comp")||{}).value||"",bairro:(document.getElementById("mm-op-bairro")||{}).value||"",cidade:(document.getElementById("mm-op-cidade")||{}).value||"",uf:(document.getElementById("mm-op-uf")||{}).value||""},c=null;function y(tn,Q,on){c||(c={id:tn,msg:Q,fix:on||null})}var L=document.getElementById("mm-op-email"),X=Se(i.email,!!(L&&L.dataset&&L.dataset.mmEmailOk==="1"));if(X.ok||y("mm-op-email",X.msg,X.fix),i.nome.trim().split(/\s+/).length<2&&y("mm-op-nome","Informe nome e sobrenome (como no documento)."),Yt(i.cpf)||y("mm-op-cpf",i.cpf.replace(/\D/g,"").length!==11?"CPF incompleto — precisa dos 11 dígitos.":"CPF inválido — confira os números digitados."),i.tel.replace(/\D/g,"").length<10&&y("mm-op-tel","Telefone incompleto — inclua o DDD."),i.cep.replace(/\D/g,"").length!==8&&y("mm-op-cep","CEP incompleto — precisa dos 8 dígitos."),i.rua.trim()||y("mm-op-rua","Informe a rua do endereço de entrega."),i.num.trim()||y("mm-op-num",'Informe o número (use "S/N" se não houver).'),i.bairro.trim()||y("mm-op-bairro","Informe o bairro."),i.cidade.trim()||y("mm-op-cidade","Informe a cidade."),i.uf.trim()||y("mm-op-uf","Informe o estado (UF)."),c){ge(c.msg,c.id,c.fix);return}ie();var G=o.querySelector(".mm-cta");G&&G.classList.add("is-loading"),rn.set("mm_user_email",i.email.trim()),Fe(i)}),n.addEventListener("click",function(e){var o=e.target.closest&&e.target.closest(".mm-op-alert-fix");if(o){e.preventDefault();var i=document.getElementById("mm-op-email");i&&(i.value=o.getAttribute("data-mm-fix")||i.value,i.dataset&&(i.dataset.mmEmailOk="1"),i.classList.remove("mm-input-error")),ie();var c=document.querySelector(".mm-op-form .mm-cta");if(c)try{c.scrollIntoView({block:"center",behavior:"smooth"})}catch{}return}var y=e.target.closest&&e.target.closest(".mm-op-alert-keep");if(y){e.preventDefault();var L=document.getElementById("mm-op-email");L&&(L.dataset&&(L.dataset.mmEmailOk="1"),L.classList.remove("mm-input-error")),ie()}}),n.addEventListener("input",function(e){var o=e.target;if(o){if(o.id&&o.id.indexOf("mm-op-")===0&&(o.classList.remove("mm-input-error"),ie(),o.id==="mm-op-email"&&o.dataset&&delete o.dataset.mmEmailOk),o.dataset&&o.dataset.mmCepFill==="1"&&delete o.dataset.mmCepFill,o.id==="mm-op-cpf")o.value=Vt(o.value);else if(o.id==="mm-op-tel")o.value=vt(o.value);else if(o.id==="mm-op-cep"){o.value=ee(o.value);var i=o.value.replace(/\D/g,"");i.length===8&&Qt(i)}else o.id==="mm-op-uf"&&(o.value=(o.value||"").replace(/[^A-Za-z]/g,"").toUpperCase().slice(0,2));o.id&&o.id.indexOf("mm-op-")===0&&(Qn._draftTimer&&clearTimeout(Qn._draftTimer),Qn._draftTimer=setTimeout(jn,400))}});function t(){Qn._draftTimer&&(clearTimeout(Qn._draftTimer),Qn._draftTimer=null),jn()}n.addEventListener("blur",function(e){var o=e.target;o&&o.id&&o.id.indexOf("mm-op-")===0&&t()},!0),window.addEventListener("beforeunload",t)}function Qt(n){var t=document.getElementById("mm-op-cep-status");t&&(t.className="mm-input-status is-loading",t.textContent="Buscando..."),Ht(n,function(e){if(t&&(t.className="mm-input-status"),!e){t&&(t.className="mm-input-status is-error",t.textContent="CEP não encontrado",setTimeout(function(){t.className="mm-input-status",t.textContent=""},2500));return}t&&(t.className="mm-input-status is-ok",t.innerHTML=H.check,setTimeout(function(){t.className="mm-input-status",t.innerHTML=""},1800));var o=[["mm-op-rua",e.logradouro],["mm-op-bairro",e.bairro],["mm-op-cidade",e.cidade],["mm-op-uf",e.estado]];o.forEach(function(c){var y=document.getElementById(c[0]);!y||!c[1]||(!y.value||y.dataset.mmCepFill==="1")&&(y.value=c[1],y.dataset.mmCepFill="1")});var i=document.getElementById("mm-op-num");i&&setTimeout(function(){i.focus()},100),Un._t&&clearTimeout(Un._t),Un._t=setTimeout(Un,200)})}function Yt(n){var t=(n||"").replace(/\D/g,"");if(t.length!==11||/^(\d)\1{10}$/.test(t))return!1;var e=0,o,i;for(o=0;o<9;o++)e+=parseInt(t.charAt(o),10)*(10-o);if(i=e*10%11,i===10&&(i=0),i!==parseInt(t.charAt(9),10))return!1;for(e=0,o=0;o<10;o++)e+=parseInt(t.charAt(o),10)*(11-o);return i=e*10%11,i===10&&(i=0),i===parseInt(t.charAt(10),10)}var Rt=["gmail.com","hotmail.com","hotmail.com.br","outlook.com","outlook.com.br","yahoo.com","yahoo.com.br","icloud.com","live.com","me.com","msn.com","bol.com.br","uol.com.br","terra.com.br","globo.com","ig.com.br","r7.com","oi.com.br","zipmail.com.br","superig.com.br","aol.com"];function ae(n,t){var e=n.length,o=t.length,i,c;if(Math.abs(e-o)>3)return 99;var y=[];for(i=0;i<=e;i++)y[i]=[],y[i][0]=i;for(c=0;c<=o;c++)y[0][c]=c;for(i=1;i<=e;i++)for(c=1;c<=o;c++){var L=n.charAt(i-1)===t.charAt(c-1)?0:1;y[i][c]=Math.min(y[i-1][c]+1,y[i][c-1]+1,y[i-1][c-1]+L),i>1&&c>1&&n.charAt(i-1)===t.charAt(c-2)&&n.charAt(i-2)===t.charAt(c-1)&&(y[i][c]=Math.min(y[i][c],y[i-2][c-2]+1))}return y[e][o]}function oe(n){var t=(n||"").toLowerCase(),e,o,i=null,c=99;for(e=0;e<Rt.length;e++)if(Rt[e]===t)return null;for(e=0;e<Rt.length;e++)o=ae(t,Rt[e]),o<c&&(c=o,i=Rt[e]);return c===1||c===2&&t.length>=12?i:null}function Se(n,t){var e=(n||"").trim();if(!e)return{ok:!1,msg:"Informe seu e-mail — é pra onde vai a confirmação do pedido."};if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))return{ok:!1,msg:"E-mail incompleto. Confira — o formato é nome@provedor.com."};var o=e.lastIndexOf("@"),i=e.slice(o+1);if(!/^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*\.[a-z]{2,}$/i.test(i))return{ok:!1,msg:'O domínio do e-mail parece incorreto. Confira depois do "@".'};if(!t){var c=oe(i);if(c){var y=e.slice(0,o+1)+c;return{ok:!1,msg:"Você quis dizer "+y+"?",fix:y}}}return{ok:!0}}var re=null,de=[".toast-error .toast-text",".toast-error-ctn .toast-text",".toast-error",".mz-toast-popup.error",".swal2-popup.swal2-icon-error .swal2-html-container",".swal2-popup.swal2-icon-error .swal2-title",".swal2-toast.swal2-icon-error"];function ue(n){var t=(n||"").replace(/\s+/g," ").trim();return t=t.replace(/^[×xX]\s*/,""),t=t.replace(/Ooopss*!*/gi," "),t=t.replace(/(?:\s*(?:Fechar|Cancelar|Cancel|Confirmar|OK|Sim|N[ãa]o|No))+\s*$/i,""),t=t.replace(/\s+/g," ").trim(),t.length<3||t.length>220?"":t}function fe(){for(var n=0;n<de.length;n++)for(var t=document.querySelectorAll(de[n]),e=0;e<t.length;e++){var o=t[e];if(!(o.closest&&o.closest("#mm-layout"))&&o.getClientRects().length){var i=ue(o.textContent);if(i)return i}}return null}function Ce(){if(!window.__mmNativeErrHooked){var n=window.Zord;if(!(!n||typeof n.msgToastError!="function")){window.__mmNativeErrHooked=!0;var t=n.msgToastError;n.msgToastError=function(){try{for(var e=0;e<arguments.length;e++)if(typeof arguments[e]=="string"){var o=ue(arguments[e]);if(o){re=o;break}}}catch{}return t.apply(this,arguments)}}}}function Ee(){re=null;for(var n=[".toast-error-ctn",".toast-error",".mz-toast-popup.error"],t=0;t<n.length;t++)for(var e=document.querySelectorAll(n[t]),o=0;o<e.length;o++){var i=e[o];if(!(i.closest&&i.closest("#mm-layout")))try{i.remove()}catch{}}var c=document.querySelector(".swal2-popup.swal2-icon-error .swal2-close, .swal2-popup.swal2-icon-error .swal2-confirm");if(c)try{c.click()}catch{}}function he(){var n=document.querySelector('[name="cf-turnstile-response"], #cf-chl-widget-response');return!!(n&&!n.value)}function ze(){var n=document.querySelector('[name="cf-turnstile-response"], #cf-chl-widget-response');if(!n)return null;for(var t=n.parentElement;t&&t!==document.body;){var e=t.getBoundingClientRect();if(e.width>40&&e.height>20)return t;t=t.parentElement}return null}function qe(n){var t=(n||"").toLowerCase();return/e-?mail/.test(t)?"mm-op-email":/cpf|cnpj|documento/.test(t)?"mm-op-cpf":/telefone|celular/.test(t)?"mm-op-tel":/\bcep\b/.test(t)?"mm-op-cep":/n[uú]mero/.test(t)?"mm-op-num":/bairro/.test(t)?"mm-op-bairro":/cidade|munic[ií]pio/.test(t)?"mm-op-cidade":/\buf\b|estado/.test(t)?"mm-op-uf":/logradouro|endere[cç]o|\brua\b/.test(t)?"mm-op-rua":/nome|destinat/.test(t)?"mm-op-nome":null}function ge(n,t,e){var o=document.querySelector('.mm-op-form[data-mm-act="onepage-submit"]');if(o){var i=o.querySelector(".mm-op-alert");i&&i.remove();var c=o.querySelector(".mm-op-retry");c&&c.remove();var y=document.createElement("div");y.className="mm-op-alert",y.setAttribute("role","alert");var L='<span class="mm-op-alert-msg">'+I(n)+"</span>";e&&(L+='<span class="mm-op-alert-actions"><button type="button" class="mm-op-alert-fix" data-mm-fix="'+I(e)+'">Usar esse</button><button type="button" class="mm-op-alert-keep">Manter o que digitei</button></span>'),y.innerHTML=L,o.insertBefore(y,o.firstChild);var X=t?document.getElementById(t):null;X&&X.classList.add("mm-input-error");try{y.scrollIntoView({block:"center",behavior:"smooth"})}catch{}if(X&&!e)try{X.focus({preventScroll:!0})}catch{X.focus()}}}function ie(){var n=document.querySelector('.mm-op-form[data-mm-act="onepage-submit"]');if(n){var t=n.querySelector(".mm-op-alert");t&&t.remove()}}function pe(n){if(!document.getElementById("mm-op-overlay")){var t=document.createElement("div");t.id="mm-op-overlay",t.innerHTML='<div class="mm-op-overlay-card"><div class="mm-op-overlay-spinner"></div><p class="mm-op-overlay-text">'+I(n||"Processando...")+"</p></div>",document.body.appendChild(t)}}function ve(n){var t=document.querySelector("#mm-op-overlay .mm-op-overlay-text");t&&(t.textContent=n)}var zt=null;function Ae(){if(!window.__mmStep1Observed){window.__mmStep1Observed=!0;var n=/compraSemCadastro/i;try{var t=window.fetch;typeof t=="function"&&(window.fetch=function(i,c){var y=typeof i=="string"?i:i&&i.url||"",L=c&&c.body||"",X=n.test(y)||n.test(String(L)),G=t.apply(this,arguments);return X&&G.then(function(tn){zt&&(tn&&tn.ok?zt.done=!0:zt.failed=!0)}).catch(function(){zt&&(zt.failed=!0)}),G})}catch{}try{var e=XMLHttpRequest.prototype.open,o=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(i,c){return this.__mmU=c||"",e.apply(this,arguments)},XMLHttpRequest.prototype.send=function(i){try{if(n.test(this.__mmU||"")||n.test(String(i||""))){var c=this;c.addEventListener("load",function(){zt&&(c.status>=200&&c.status<300?zt.done=!0:zt.failed=!0)}),c.addEventListener("error",function(){zt&&(zt.failed=!0)})}}catch{}return o.apply(this,arguments)}}catch{}}}function Fe(n){var t=document.querySelector(".mm-op-form .mm-op-retry");t&&t.remove();var e=n.nome.trim(),o=n.email.trim(),i=n.rua.trim(),c=n.bairro.trim(),y=n.cidade.trim(),L=n.uf.trim(),X=Bn(n.cep.replace(/\D/g,""));rn.set("mm_user_email",o);var G=function(tn,Q){var on=v.querySelector(tn);if(!on)return!1;try{var en=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;en.call(on,Q)}catch{on.value=Q}return on.dispatchEvent(new Event("input",{bubbles:!0})),on.dispatchEvent(new Event("change",{bubbles:!0})),on.dispatchEvent(new Event("blur",{bubbles:!0})),!0};G("#nome-completo_2",e),G("#cpf_2",n.cpf),G("#email_3",o),G("#telefone_2",n.tel),G("#cep",X),G("#destinatario",e),G("#logradouro",i),G("#numero",n.num),G("#complemento",n.comp),G("#bairro",c),G("#cidade",y),G("#estado",L),pe("Confirmando seus dados..."),setTimeout(function(){var tn=document.getElementById("mm-layout");tn&&(tn.style.display="none"),v.classList.remove("mm-shadow-mode");function Q(x){var w=v.querySelector("#"+x);return w?w.closest("form"):null}function on(){var x=Q("nome-completo_2");if(!x)return!1;var w=x.querySelector('button[type="submit"], input[type="submit"], button:not([type])');return w?(w.click(),!0):typeof x.requestSubmit=="function"?(x.requestSubmit(),!0):(x.submit(),!0)}function en(){for(var x=document.querySelectorAll('button, [type="submit"]'),w=0;w<x.length;w++){var D=(x[w].textContent||"").toLowerCase();if(D.indexOf("cadastrar endere")!==-1&&x[w].offsetParent!==null)return"ready"}return"wait"}function sn(){var x=Q("cep");if(!x)return!1;var w=x.querySelector('button[type="submit"], input[type="submit"], button:not([type])');return w?(w.click(),!0):typeof x.requestSubmit=="function"?(x.requestSubmit(),!0):(x.submit(),!0)}function an(){var x=document.getElementById("mm-op-overlay");x&&x.remove();var w=document.getElementById("mm-layout");w&&(w.style.display=""),v.classList.add("mm-shadow-mode");var D=document.querySelector(".mm-op-form .mm-cta");D&&D.classList.remove("is-loading")}function gn(x){an();var w=qe(x),D=x;w&&(D=x.replace(/\s*$/,"")+" — corrija o campo destacado e toque em “Última etapa: pagamento”."),ge(D,w,null)}function cn(x){var w=document.getElementById("mm-op-overlay");w&&w.remove();var D=document.getElementById("mm-layout");if(D&&(D.style.display="none"),v.classList.remove("mm-shadow-mode"),!document.getElementById("mm-handoff-note")){var nn=document.createElement("div");nn.id="mm-handoff-note",nn.className="mm-handoff-note",nn.setAttribute("role","alert"),nn.innerHTML=x==="turnstile"?"<strong>Falta só confirmar que você é humano.</strong><span>Marque a verificação de segurança abaixo e toque em “Próxima etapa”. Seus dados já estão preenchidos.</span>":"<strong>Vamos concluir por aqui.</strong><span>Seus dados já estão preenchidos — é só tocar em “Próxima etapa” para seguir ao pagamento.</span>",document.body.appendChild(nn);var J=ze();if(!J){for(var fn=document.querySelectorAll("button"),un=0;un<fn.length;un++)if(/pr[oó]xima etapa/i.test(fn[un].textContent||"")&&fn[un].offsetParent!==null){J=fn[un];break}}if(J)try{J.scrollIntoView({block:"center",behavior:"smooth"})}catch{}var kn=0;(function Ln(){kn++;var On=document.querySelector('input[name="forma-pagto"], #forma-pagto-pix');if(On&&On.offsetParent!==null){var Jn=document.getElementById("mm-handoff-note");Jn&&Jn.remove();try{me(n)}catch{}return}kn<900&&setTimeout(Ln,400)})()}}function hn(x){an();var w=document.querySelector('.mm-op-form[data-mm-act="onepage-submit"]');if(w&&!w.querySelector(".mm-op-retry")){var D=document.createElement("div");D.className="mm-op-retry",D.setAttribute("data-mm-retry","1"),D.setAttribute("role","alert"),D.style.cssText="margin:14px 0;padding:12px 16px;border:1px solid #E7B84B;background:#FFF8E6;border-radius:12px;font-family:Poppins,system-ui,sans-serif;font-size:13px;color:#6B5313;line-height:1.45;",D.textContent=x||"Quase lá — toque em “Última etapa: pagamento” novamente para concluir.",w.insertBefore(D,w.firstChild);try{D.scrollIntoView({block:"center",behavior:"smooth"})}catch{}}}function bn(x){x===0&&ve("Abrindo o pagamento...");var w=document.querySelector('input[name="forma-pagto"], #forma-pagto-pix, #forma-pagto-cartao, #forma-pagto-boleto');if(w&&w.offsetParent!==null){try{me(n)}catch{var D=document.getElementById("mm-op-overlay");D&&D.remove();var nn=document.getElementById("mm-layout");nn&&(nn.style.display="none")}return}var J=re||fe();if(J){gn(J);return}x<40?setTimeout(function(){bn(x+1)},200):hn("Não conseguimos abrir o pagamento. Toque em “Última etapa: pagamento” para tentar de novo.")}function In(){ve("Salvando sua entrega..."),sn(),bn(0)}Ae(),Ce(),Ee();var Yn={done:!1,failed:!1};zt=Yn,setTimeout(function(){on();var x=80,w=4,D=0,nn=null,J=0;(function fn(){D++;var un=document.querySelector('input[name="forma-pagto"], #forma-pagto-pix, #forma-pagto-cartao, #forma-pagto-boleto');if(un&&un.offsetParent!==null){bn(0);return}var kn=re||fe();if(kn){gn(kn);return}if(!Yn.done&&he()){if(J++,J>=40){cn("turnstile");return}}else J=0;var Ln=en();if(Yn.failed){hn("Não foi possível iniciar o pedido. Toque em “Última etapa: pagamento” para tentar de novo.");return}if(Ln==="ready"){In();return}if(Yn.done&&(nn===null&&(nn=D),D-nn>=w)){In();return}if(D<x){setTimeout(fn,250);return}Yn.done?In():cn(he()?"turnstile":"timeout")})()},120)},80)}function Te(){var n={pix:null,cartao:null,boleto:null},t=[];try{t=window.Zord&&window.Zord.Calculo&&window.Zord.Calculo.FormasPagamentoPedido||[]}catch{}t.forEach(function(Q){var on=Q.formaPagamento&&Q.formaPagamento.id,en=Q.formaPagamento&&Q.formaPagamento.isCartao,sn=Q.condicoes||[];!sn.length||!en||(!n.cartao||sn.length>n.cartao.condicoes.length)&&(n.cartao={formaId:on,valorTotal:sn[0].valorTotal,condicoes:sn.map(function(an){return{nome:an.condicaoPagamento&&an.condicaoPagamento.nome,numParcelas:an.condicaoPagamento&&an.condicaoPagamento.numeroParcelas,valorParcela:an.valorParcela,valorTotal:an.valorTotal}})})});function e(Q){if(!Q)return 0;var on=Q.getAttribute&&Q.getAttribute("data-valor-total");if(on){var en=parseFloat(on);if(en>0)return en}var sn=(Q.textContent||"").replace(/[^\d,.]/g,"");return sn.indexOf(",")!==-1&&(sn=sn.replace(/\./g,"").replace(",",".")),parseFloat(sn)||0}var o=document.querySelector("#valor-total-pedido-pix, .valor-total-pix[data-valor-total]"),i=e(o);if(i>0)n.pix={formaId:17,valorTotal:i};else{var c=t.find&&t.find(function(Q){return Q.formaPagamento&&Q.formaPagamento.id===17});c&&c.condicoes&&c.condicoes[0]&&(n.pix={formaId:17,valorTotal:c.condicoes[0].valorTotal})}var y=document.querySelector("#valor-total-pedido-boleto, .valor-total-boleto[data-valor-total]"),L=e(y);if(L>0)n.boleto={valorTotal:L};else{var X=t.find&&t.find(function(Q){var on=Q.formaPagamento&&Q.formaPagamento.id,en=Q.formaPagamento&&Q.formaPagamento.isCartao;return!en&&on!==17&&Q.condicoes&&Q.condicoes.length});X&&(n.boleto={formaId:X.formaPagamento.id,valorTotal:X.condicoes[0].valorTotal})}if(!n.cartao){var G=document.querySelector(".valor-parcela-cartao");if(G){var tn=e(G);tn>0&&(n.cartao={valorTotal:tn*12,condicoes:[]})}}return n}function me(n){var t=Sn(),e=Te();v.classList.add("mm-shadow-mode"),document.body.classList.add("mm-checkout-rebuild");var o=document.getElementById("mm-layout");(!o||o.parentElement!==v)&&(o&&o.parentElement&&o.parentElement.removeChild(o),o=document.createElement("div"),o.id="mm-layout",v.insertBefore(o,v.firstChild)),o.className="mm-op-layout mm-op-step3-layout",o.style.display="",o.innerHTML=Le(t,n,e),document.documentElement.classList.remove("mm-cart-loading");var i=document.getElementById("mm-op-overlay");i&&i.remove();try{window.scrollTo({top:0,behavior:"smooth"})}catch{window.scrollTo(0,0)}Oe(n,e)}function Le(n,t,e){var o=typeof renderGlobalFooter=="function"?renderGlobalFooter():"";return _n("payment")+'<main class="mm-op-main"><div class="mm-op-step3-grid"><section class="mm-op-step3-left">'+Ie(e)+Be()+'</section><aside class="mm-op-step3-sum-wrap">'+Me(t)+Pe(n,e,"pix")+"</aside></div></main>"+o}function Me(n){var t=n||{},e=I(t.nome||""),o=I(t.email||""),i=I(t.cpf||""),c=I(t.tel||""),y=I(t.rua||""),L=I(t.num||""),X=t.comp?", "+I(t.comp):"",G=I(t.bairro||""),tn=I(t.cidade||""),Q=I(t.uf||""),on=I(t.cep||"");return'<div class="mm-op-step3-completed"><div class="mm-op-completed-card" data-section="dados"><div class="mm-op-completed-head"><span class="mm-op-completed-check">'+H.check+'</span><h3 class="mm-op-completed-title">Dados pessoais</h3><a href="/checkout/onepage" class="mm-op-completed-edit" data-mm-act="edit-dados" aria-label="Editar dados">'+Rn.editPencil+' Editar</a></div><dl class="mm-op-completed-body">'+(e?"<div><dt>Nome</dt><dd>"+e+"</dd></div>":"")+(o?"<div><dt>E-mail</dt><dd>"+o+"</dd></div>":"")+(i?"<div><dt>CPF</dt><dd>"+i+"</dd></div>":"")+(c?"<div><dt>Telefone</dt><dd>"+c+"</dd></div>":"")+'</dl></div><div class="mm-op-completed-card" data-section="endereco"><div class="mm-op-completed-head"><span class="mm-op-completed-check">'+H.check+'</span><h3 class="mm-op-completed-title">Endereço de entrega</h3><a href="/checkout/onepage" class="mm-op-completed-edit" data-mm-act="edit-endereco" aria-label="Editar endereço">'+Rn.editPencil+' Editar</a></div><address class="mm-op-completed-address">'+(t.addressLines&&t.addressLines.length?t.addressLines.map(function(en){return I(en)}).join("<br>"):y+", "+L+X+"<br>"+G+" — "+tn+"/"+Q+"<br>"+(on?"CEP "+on:""))+"</address></div></div>"}function Ie(n){var t=n.pix?n.pix.valorTotal:0,e=n.cartao?n.cartao.valorTotal:0,o=n.boleto?n.boleto.valorTotal:0,i=e>t?e-t:0,c=null;n.cartao&&n.cartao.condicoes&&n.cartao.condicoes.length&&(c=n.cartao.condicoes[n.cartao.condicoes.length-1]);var y=c?"até "+c.numParcelas+"x de "+Z(c.valorParcela)+" sem juros":e>0?"até 12x sem juros":"Cartão de crédito",L='<label class="mm-op-pay-radio is-active" data-forma="pix"><input type="radio" name="mm-pay" value="pix" checked><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+Rn.pix+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">PIX</span><span class="mm-op-pay-sub">Aprovação instantânea · em 1 minuto</span></div><div class="mm-op-pay-price">'+(i>0?'<span class="mm-op-pay-badge-save">Economize '+Z(i)+"</span>":"")+'<span class="mm-op-pay-amount">'+Z(t)+'</span></div></div><div class="mm-op-pay-detail"><ul class="mm-op-pay-benefits"><li>'+H.check+"<span>QR Code e Copia-e-Cola após confirmar</span></li><li>"+H.check+"<span>Pedido aprovado em até 1 minuto</span></li><li>"+H.check+"<span>Pagamento 100% seguro · sem dados de cartão</span></li></ul></div></label>",X='<div class="mm-op-pay-brands"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-visa.svg" alt="Visa" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-mastercard.svg" alt="Mastercard" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-american-express.svg" alt="American Express" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-elo.svg" alt="Elo" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-hipercard.svg" alt="Hipercard" width="32" height="20"></div>',G='<span class="mm-op-req" aria-hidden="true">*</span>';function tn(sn){return'<span class="mm-op-field-err" id="'+sn+'-err" role="alert" aria-live="polite"></span>'}var Q='<div class="mm-op-card-form"><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-num">Número do cartão'+G+'</label><div class="mm-input-wrap mm-input-wrap-card"><span class="mm-input-icon" aria-hidden="true">'+H.card+'</span><input id="mm-pay-card-num" type="tel" class="mm-input" inputmode="numeric" autocomplete="off" data-mmac="cc-number" placeholder="0000 0000 0000 0000" maxlength="23" aria-describedby="mm-pay-card-num-err" aria-required="true" disabled><span class="mm-op-card-brand-detected" aria-live="polite"></span></div>'+tn("mm-pay-card-num")+'</div><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-name">Nome impresso no cartão'+G+'</label><input id="mm-pay-card-name" type="text" class="mm-input mm-input-noicon" autocomplete="off" data-mmac="cc-name" placeholder="Como aparece no cartão" maxlength="100" aria-describedby="mm-pay-card-name-err" aria-required="true" disabled>'+tn("mm-pay-card-name")+'</div><div class="mm-op-card-field mm-op-card-field-half"><label for="mm-pay-card-exp">Validade'+G+'</label><input id="mm-pay-card-exp" type="tel" class="mm-input mm-input-noicon" inputmode="numeric" autocomplete="off" data-mmac="cc-exp" placeholder="MM/AA" maxlength="5" aria-describedby="mm-pay-card-exp-err" aria-required="true" disabled>'+tn("mm-pay-card-exp")+'</div><div class="mm-op-card-field mm-op-card-field-half"><label for="mm-pay-card-cvv">CVV'+G+'</label><input id="mm-pay-card-cvv" type="tel" class="mm-input mm-input-noicon" inputmode="numeric" autocomplete="off" data-mmac="cc-csc" placeholder="000" maxlength="4" aria-describedby="mm-pay-card-cvv-err" aria-required="true" disabled>'+tn("mm-pay-card-cvv")+'</div><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-installments">Condições de pagamento'+G+'</label><select id="mm-pay-card-installments" class="mm-input mm-input-noicon mm-op-card-installments" aria-describedby="mm-pay-card-installments-err" aria-required="true" disabled><option value="">Digite o cartão pra ver as condições</option></select>'+tn("mm-pay-card-installments")+"</div></div>",on='<label class="mm-op-pay-radio" data-forma="cartao"><input type="radio" name="mm-pay" value="cartao"><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+Rn.cardBig+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">Cartão de Crédito</span><span class="mm-op-pay-sub">'+I(y)+'</span></div><div class="mm-op-pay-price"><span class="mm-op-pay-amount">'+Z(e)+'</span></div></div><div class="mm-op-pay-detail">'+X+Q+"</div></label>",en='<label class="mm-op-pay-radio" data-forma="boleto"><input type="radio" name="mm-pay" value="boleto"><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+Rn.barcode+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">Boleto Bancário</span><span class="mm-op-pay-sub">Aprovação em 1 a 3 dias úteis</span></div><div class="mm-op-pay-price"><span class="mm-op-pay-amount">'+Z(o)+'</span></div></div><div class="mm-op-pay-detail"><ul class="mm-op-pay-benefits"><li>'+H.check+"<span>Código de barras enviado por e-mail</span></li><li>"+H.check+"<span>Pagamento em banco, lotérica ou app</span></li><li>"+H.check+"<span>Vencimento em 3 dias úteis</span></li></ul></div></label>";return'<section class="mm-op-step3-card" aria-labelledby="mm-op-step3-h"><div class="mm-op-step3-heading"><h2 id="mm-op-step3-h" class="mm-h">Como você quer pagar?</h2><p class="mm-op-step3-sub">Última etapa · escolha sua forma de pagamento '+(i>0?"· PIX tem desconto de "+Z(i):"")+'</p></div><div class="mm-op-pay-radios" role="radiogroup" aria-label="Forma de pagamento">'+L+on+en+'</div><button type="button" class="mm-cta mm-op-cta mm-op-finalizar" data-mm-act="finalizar-compra">'+H.lock+'<span class="mm-op-finalizar-label">Finalizar compra · '+Z(t)+'</span></button><p class="mm-op-finalizar-sub">'+H.shield+"<span>Pagamento seguro · criptografia SSL-256 · seus dados não são armazenados</span></p></section>"}function Be(){return'<div class="mm-op-trust-payment"><div class="mm-op-trust-payment-row"><span class="mm-trust-item">'+H.lock+'<span>Site 100% seguro</span></span><span class="mm-trust-item">'+H.shield+'<span>Garantia 12 meses</span></span><span class="mm-trust-item">'+H.rotate+'<span>7 dias pra trocar</span></span><span class="mm-trust-item">'+H.whats+'<span>Atendimento humano</span></span></div><p class="mm-op-trust-payment-note">Ao finalizar, você concorda com os <a href="/termos-de-uso" target="_blank" rel="noopener">termos de compra</a> e a <a href="/politica-privacidade" target="_blank" rel="noopener">política de privacidade</a>.</p></div>'}function Pe(n,t,e){if(!n||!n.items||!n.items.length)return'<aside class="mm-id-sum mm-sum mm-op-step3-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><p class="mm-sum-empty">Não conseguimos carregar o resumo do seu pedido.</p></div></aside>';var o=t.pix?t.pix.valorTotal:0,i=t.cartao?t.cartao.valorTotal:0,c=t.boleto?t.boleto.valorTotal:0,y=i>o?i-o:0,L=e==="pix"?o:e==="boleto"?c:i,X=e==="pix"?"no PIX":e==="boleto"?"no boleto":"no cartão",G=3,tn=n.items.slice(0,G),Q=n.items.length-G,on=tn.map(function(cn){var hn=cn.imgSrc?'<img src="'+I(cn.imgSrc)+'" alt="'+I(cn.name)+'" loading="lazy">':'<div class="mm-id-thumb-placeholder">'+H.box+"</div>",bn=cn.quantity>1?'<strong class="mm-id-thumb-qty">'+cn.quantity+"×</strong> ":"",In=cn.lineTotal>0?cn.lineTotal:cn.lineTotalPix;return'<div class="mm-id-thumb"><div class="mm-id-thumb-img">'+hn+'</div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+bn+I(cn.name)+"</p>"+(cn.variant?'<p class="mm-id-thumb-variant">'+I(cn.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price">'+Z(In)+"</div></div>"}).join("");Q>0&&(on+='<div class="mm-id-thumb-more">+ '+Q+" "+(Q===1?"item":"itens")+" a mais</div>");var en=n.subtotalFull>0?n.subtotalFull:n.subtotalPix,sn='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+Z(en)+"</span></div>";if(n.shipping!==null&&n.shipping!==void 0){var an=n.shipping===0?'<span class="mm-row-value is-free">'+H.check+" Grátis</span>":'<span class="mm-row-value">'+Z(n.shipping)+"</span>";sn+='<div class="mm-row"><span class="mm-row-label">Frete'+(n.shippingDeadline?' <span class="mm-row-sub">· '+I(n.shippingDeadline)+"</span>":"")+"</span>"+an+"</div>"}n.discount>0&&(sn+='<div class="mm-row"><span class="mm-row-label">Cupom'+(n.couponCode?' <span class="mm-row-sub">· '+I(n.couponCode)+"</span>":"")+'</span><span class="mm-row-value is-discount">− '+Z(n.discount)+"</span></div>"),y>0&&e==="pix"&&(sn+='<div class="mm-row mm-row-pix-discount"><span class="mm-row-label">'+H.bolt+' Desconto PIX</span><span class="mm-row-value is-discount">− '+Z(y)+"</span></div>");var gn='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value" data-mm-total>'+Z(L)+'</div><div class="mm-total-pix" data-mm-total-sub><span>'+X+"</span></div></div>";return'<aside class="mm-id-sum mm-sum mm-op-step3-sum" data-active-forma="'+I(e)+'"><h2 class="mm-h">Resumo do pedido</h2><div class="mm-sum-card"><div class="mm-id-thumbs">'+on+'</div><div class="mm-sum-rows">'+sn+"</div>"+gn+"</div></aside>"}function Oe(n,t){var e=document.getElementById("mm-layout");if(!e||e._mmStep3Bound)return;e._mmStep3Bound=!0;var o=Sn(),i={activeForma:"pix",cardNumValid:!1,cardBrand:null,cardInstallments:null,submitting:!1};e.addEventListener("click",function(x){var w=x.target.closest(".mm-op-pay-radio");if(w){var D=w.querySelector('input[type="radio"]');D&&!D.checked&&(x.preventDefault(),D.checked=!0,G(w.getAttribute("data-forma")));return}if(x.target.closest('[data-mm-act="finalizar-compra"]')){x.preventDefault(),Yn();return}var nn=x.target.closest('[data-mm-act="edit-dados"], [data-mm-act="edit-endereco"]');if(nn){x.preventDefault(),location.reload();return}}),e.addEventListener("input",function(x){var w=x.target;!w||!w.id||(w.id==="mm-pay-card-num"?sn(w):w.id==="mm-pay-card-exp"?an(w):w.id==="mm-pay-card-cvv"&&(w.value=(w.value||"").replace(/\D/g,"").slice(0,4)))}),e.addEventListener("change",function(x){if(x.target&&x.target.id==="mm-pay-card-installments"){var w=x.target,D=w.options[w.selectedIndex];D&&D.value&&(i.cardInstallments={numero:parseInt(D.value,10),label:D.textContent||""},hn(D.value),y("mm-pay-card-installments"))}}),e.addEventListener("blur",function(x){var w=x.target;if(!(!w||!w.id)){var D=["mm-pay-card-num","mm-pay-card-name","mm-pay-card-exp","mm-pay-card-cvv"];D.indexOf(w.id)!==-1&&L(w.id)}},!0),e.addEventListener("focus",function(x){var w=x.target;!w||!w.id||/^mm-pay-card-/.test(w.id)&&y(w.id)},!0);function c(x,w){var D=document.getElementById(x),nn=document.getElementById(x+"-err");D&&(D.classList.add("mm-input-error"),D.setAttribute("aria-invalid","true")),nn&&(nn.textContent=w,nn.classList.add("is-visible"))}function y(x){var w=document.getElementById(x),D=document.getElementById(x+"-err");w&&(w.classList.remove("mm-input-error"),w.removeAttribute("aria-invalid")),D&&(D.textContent="",D.classList.remove("is-visible"))}function L(x){var w=document.getElementById(x);if(!w)return!0;var D=(w.value||"").trim();if(x==="mm-pay-card-num"){var nn=D.replace(/\D/g,"");return nn?nn.length<13?(c(x,"Número do cartão incompleto"),!1):X(nn)?(y(x),!0):(c(x,"Número do cartão inválido — confira os dígitos"),!1):(c(x,"Informe o número do cartão"),!1)}if(x==="mm-pay-card-name")return D?D.split(/\s+/).length<2?(c(x,"Use o nome completo como aparece no cartão"),!1):(y(x),!0):(c(x,"Informe o nome impresso no cartão"),!1);if(x==="mm-pay-card-exp"){var J=D.replace(/\D/g,"");if(J.length!==4)return c(x,"Informe a validade no formato MM/AA"),!1;var fn=parseInt(J.slice(0,2),10),un=parseInt(J.slice(2),10);if(fn<1||fn>12)return c(x,"Mês inválido (01 a 12)"),!1;var kn=new Date,Ln=kn.getFullYear()%100,On=kn.getMonth()+1;return un<Ln||un===Ln&&fn<On?(c(x,"Cartão expirado"),!1):(y(x),!0)}if(x==="mm-pay-card-cvv"){var Jn=D.replace(/\D/g,"");return Jn.length<3?(c(x,"CVV deve ter 3 ou 4 dígitos"),!1):(y(x),!0)}return x==="mm-pay-card-installments"?D?(y(x),!0):(c(x,"Selecione o número de parcelas"),!1):!0}function X(x){for(var w=0,D=!1,nn=x.length-1;nn>=0;nn--){var J=parseInt(x.charAt(nn),10);D&&(J*=2,J>9&&(J-=9)),w+=J,D=!D}return w%10===0}function G(x){if(!(!x||i.activeForma===x)){i.activeForma=x,e.querySelectorAll(".mm-op-pay-radio").forEach(function(J){J.classList.toggle("is-active",J.getAttribute("data-forma")===x)});var w=document.getElementById("forma-pagto-"+x);if(w&&!w.checked)try{w.click()}catch{}var D=e.querySelectorAll(".mm-op-card-form input, .mm-op-card-form select"),nn=x==="cartao";D.forEach(function(J){J.disabled=!nn,nn?J.dataset.mmac&&J.setAttribute("autocomplete",J.dataset.mmac):J.setAttribute("autocomplete","off")}),tn(x),x==="cartao"&&setTimeout(function(){var J=document.getElementById("mm-pay-card-num");J&&!J.value&&J.focus()},250)}}function tn(x){var w=e.querySelector(".mm-op-step3-sum");if(w){w.setAttribute("data-active-forma",x);var D=t.pix?t.pix.valorTotal:0,nn=t.cartao?t.cartao.valorTotal:0,J=t.boleto?t.boleto.valorTotal:0,fn=nn>D?nn-D:0,un=x==="pix"?D:x==="boleto"?J:nn,kn=x==="pix"?"no PIX":x==="boleto"?"no boleto":"no cartão",Ln=w.querySelector("[data-mm-total]");if(Ln){var On=Ln.textContent||"",Jn=pn(On);Jn!==un?Q(Ln,Jn,un,360):Ln.textContent=Z(un)}var Kn=w.querySelector("[data-mm-total-sub] span");Kn&&Kn.textContent!==kn&&(Kn.textContent=kn);var bt=w.querySelector(".mm-sum-rows"),xt=bt?bt.querySelector(".mm-row-pix-discount"):null;if(x==="pix"&&fn>0){if(!xt&&bt){var Bt=document.createElement("div");Bt.innerHTML='<div class="mm-row mm-row-pix-discount"><span class="mm-row-label">'+H.bolt+' Desconto PIX</span><span class="mm-row-value is-discount">− '+Z(fn)+"</span></div>",bt.appendChild(Bt.firstChild)}}else xt&&xt.remove();on(x)}}function Q(x,w,D,nn){x._mmAnimToken&&cancelAnimationFrame(x._mmAnimToken);var J=null,fn=D-w;function un(kn){J||(J=kn);var Ln=kn-J,On=Math.min(1,Ln/nn),Jn=1-Math.pow(1-On,3),Kn=w+fn*Jn;x.textContent=Z(Kn),On<1?x._mmAnimToken=requestAnimationFrame(un):(x.textContent=Z(D),x._mmAnimToken=null)}x._mmAnimToken=requestAnimationFrame(un)}function on(x){var w=e.querySelector(".mm-op-finalizar-label");if(w){var D=x==="pix"?t.pix&&t.pix.valorTotal:x==="boleto"?t.boleto&&t.boleto.valorTotal:t.cartao&&t.cartao.valorTotal;w.textContent="Finalizar compra · "+Z(D||0)}}function en(x){var w=(x||"").replace(/\D/g,"");return w?/^4/.test(w)?"visa":/^(5[1-5]|22[2-9]|2[3-6]|27[01]|2720)/.test(w)?"mastercard":/^3[47]/.test(w)?"amex":/^(4011|4312|4389|4514|4573|5041|5066|5067|509|6277|6362|6363|650|6516|6550)/.test(w)?"elo":/^(606282|384100|384140|384160|606|637095|637568|637599|637609|637612)/.test(w)?"hipercard":null:null}function sn(x){var w=(x.value||"").replace(/\D/g,"").slice(0,19),D=w.replace(/(\d{4})(?=\d)/g,"$1 ");if(D!==x.value){var nn=x.selectionStart;x.value=D;try{x.setSelectionRange(nn+1,nn+1)}catch{}}var J=en(w);i.cardBrand=J,i.cardNumValid=w.length>=13;var fn=e.querySelector(".mm-op-card-brand-detected");fn&&(fn.className="mm-op-card-brand-detected"+(J?" is-"+J:""),fn.textContent=J?J.toUpperCase():""),w.length>=6&&(gn(w),In())}function an(x){var w=(x.value||"").replace(/\D/g,"").slice(0,4),D=w.length>2?w.slice(0,2)+"/"+w.slice(2):w;if(x.value=D,w.length===4){var nn=w.slice(0,2),J="20"+w.slice(2);cn("pag-cartao-mes-validade",String(parseInt(nn,10))),cn("pag-cartao-ano-validade",J)}}function gn(x){var w=document.getElementById("pag-cartao-numero");if(w){try{var D=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;D.call(w,x)}catch{w.value=x}w.dispatchEvent(new Event("input",{bubbles:!0})),w.dispatchEvent(new Event("change",{bubbles:!0})),w.dispatchEvent(new Event("blur",{bubbles:!0}))}}function cn(x,w){var D=document.getElementById(x);if(D){try{var nn=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;nn.call(D,w)}catch{D.value=w}D.dispatchEvent(new Event("change",{bubbles:!0}))}}function hn(x){cn("pag-cartao-parcela",x)}var bn=null;function In(){if(bn)return;var x=document.getElementById("pag-cartao-parcela");if(!x)return;var w=document.getElementById("mm-pay-card-installments");if(!w)return;function D(){var nn=x.querySelectorAll("option");if(!(nn.length<=1)){var J="";nn.forEach(function(fn){if(!fn.value){J+='<option value="">Selecione as parcelas</option>';return}J+='<option value="'+I(fn.value)+'">'+I(fn.textContent.trim())+"</option>"}),w.innerHTML=J,w.options.length>1&&(w.selectedIndex=1,i.cardInstallments={numero:parseInt(w.options[1].value,10)||1,label:w.options[1].textContent},hn(w.options[1].value))}}D(),bn=new MutationObserver(D),bn.observe(x,{childList:!0,subtree:!0})}function Yn(){if(console.log("[mm-checkout] submitFinalizar() entry",{submitting:i.submitting,activeForma:i.activeForma}),i.submitting)return;var x=i.activeForma,w=e.querySelector(".mm-op-finalizar");if(!w){console.log("[mm-checkout] submitFinalizar: no .mm-op-finalizar btn");return}if(x==="cartao"){var D=["mm-pay-card-num","mm-pay-card-name","mm-pay-card-exp","mm-pay-card-cvv","mm-pay-card-installments"],nn=D.filter(function(En){return!L(En)});if(console.log("[mm-checkout] validation",{errorCount:nn.length,errors:nn}),nn.length){var J=document.getElementById(nn[0]);if(J){J.focus();try{J.scrollIntoView({block:"center",behavior:"smooth"})}catch{}}return}var fn=document.getElementById("mm-pay-card-name"),un=document.getElementById("mm-pay-card-cvv"),kn=document.getElementById("pag-cartao-titular");if(kn){try{var Ln=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;Ln.call(kn,fn.value.trim())}catch{kn.value=fn.value.trim()}kn.dispatchEvent(new Event("input",{bubbles:!0})),kn.dispatchEvent(new Event("blur",{bubbles:!0}))}var On=document.getElementById("pag-cartao-vericacao");if(On){try{var Jn=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;Jn.call(On,un.value.replace(/\D/g,""))}catch{On.value=un.value.replace(/\D/g,"")}On.dispatchEvent(new Event("input",{bubbles:!0})),On.dispatchEvent(new Event("blur",{bubbles:!0}))}var Kn=document.getElementById("pag-cartao-cpf");if(Kn&&n&&n.cpf){try{var bt=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;bt.call(Kn,n.cpf)}catch{Kn.value=n.cpf}Kn.dispatchEvent(new Event("input",{bubbles:!0})),Kn.dispatchEvent(new Event("blur",{bubbles:!0}))}}i.submitting=!0,w.classList.add("is-loading"),w.setAttribute("aria-busy","true");var xt=w.querySelector(".mm-op-finalizar-label");if(xt&&(xt.textContent="Processando pagamento..."),pe("Finalizando seu pedido..."),x==="cartao"){var Bt=document.getElementById("mm-pay-card-installments");Bt&&Bt.value&&hn(Bt.value)}window.__mmCheckoutDebug=window.__mmCheckoutDebug||[];function Dn(En,mt){var st={t:new Date().toISOString(),msg:En,data:mt};window.__mmCheckoutDebug.push(st),console.log("[mm-checkout]",En,mt||"")}function Nt(){if(Dn("doSubmit() called",{forma:x}),x==="cartao"){var En=document.getElementById("aceito-termos-bcash-one-card");En&&!En.checked&&(En.checked=!0,En.dispatchEvent(new Event("change",{bubbles:!0}))),Dn("terms",{checked:En?.checked})}var mt=x==="pix"?"form-pag-pix":x==="boleto"?"form-pag-boleto":"form-pag-cartao",st=document.getElementById(mt);if(!st){Dn("ERROR: form not found",{formId:mt}),alert("Erro interno: formulário de pagamento não encontrado. Recarregue a página."),i.submitting=!1,w.classList.remove("is-loading");var yt=document.getElementById("mm-op-overlay");yt&&yt.remove();return}x==="cartao"&&Dn("pre-submit cartao state",{numero:document.getElementById("pag-cartao-numero")?.value,bandeira:document.getElementById("pag-cartao-bandeira")?.value,parcela:document.getElementById("pag-cartao-parcela")?.value,titular:document.getElementById("pag-cartao-titular")?.value,mes:document.getElementById("pag-cartao-mes-validade")?.value,ano:document.getElementById("pag-cartao-ano-validade")?.value,cvv:document.getElementById("pag-cartao-vericacao")?.value?.length,cpf:document.getElementById("pag-cartao-cpf")?.value,tokenMp:document.getElementById("pag-cartao-token-mp")?.value?.substring(0,20)});var wt=st.querySelector('button.button-success, button[type="submit"], input[type="submit"]');if(wt)Dn("clicking native button",{text:wt.textContent?.trim()}),wt.click();else if(typeof st.requestSubmit=="function"){Dn("no native btn, using requestSubmit");try{st.requestSubmit()}catch(Lt){Dn("requestSubmit error",Lt.message),st.submit()}}else Dn("no native btn, using form.submit()"),st.submit();setTimeout(function(){if(i.submitting&&location.pathname.indexOf("/onepage")!==-1){Dn("8s failsafe: still on /onepage, removing overlay"),i.submitting=!1,w.classList.remove("is-loading");var Lt=document.getElementById("mm-op-overlay");Lt&&Lt.remove(),v.classList.remove("mm-shadow-mode"),e&&(e.style.display="none")}},8e3),setTimeout(function(){v.classList.remove("mm-shadow-mode"),e&&(e.style.display="none")},600)}function Xt(){i.submitting=!1,w.classList.remove("is-loading"),w.removeAttribute("aria-busy");var En=w.querySelector(".mm-op-finalizar-label");En&&(En.textContent="Finalizar compra");var mt=document.getElementById("mm-op-overlay");mt&&mt.remove()}function le(){var En=Date.now(),mt=1e4;(function st(){var yt=document.getElementById("pag-cartao-token-mp"),wt=yt?(yt.value||"").trim():"",Lt=wt&&wt!=="loading..."&&wt.length>10;if(Lt){Dn("fallback: token ready"),Nt();return}if(Date.now()-En>=mt){Dn("fallback: timeout",{lastVal:wt}),Nt();return}setTimeout(st,200)})()}function He(){if(Dn("generateMpTokenAndSubmit() start"),typeof Mercadopago>"u"){Dn("Mercadopago global missing, falling back to wait strategy"),le();return}var En=document.getElementById("pag-cartao-token-mp"),mt=En?(En.value||"").trim():"";if(mt&&mt!=="loading..."&&mt.length>10){Dn("token already present, submitting",{len:mt.length}),Nt();return}var st=(document.getElementById("mm-pay-card-num")?.value||"").replace(/\D/g,""),yt=(document.getElementById("mm-pay-card-exp")?.value||"").replace(/\D/g,""),wt=(document.getElementById("mm-pay-card-cvv")?.value||"").replace(/\D/g,""),Lt=(document.getElementById("mm-pay-card-name")?.value||"").trim(),ce=(n&&n.cpf||document.getElementById("mm-op-cpf")?.value||"").replace(/\D/g,"");if(!st||!yt||!wt||!Lt||!ce){Dn("missing card fields",{num:st.length,exp:yt.length,cvv:wt.length,name:!!Lt,doc:ce.length}),alert("Preencha todos os dados do cartão antes de finalizar."),Xt();return}var ye=yt.slice(0,2),we=yt.length===4?"20"+yt.slice(2):yt.slice(2);Dn("calling Mercadopago.createToken",{numLen:st.length,month:ye,year:we});try{Mercadopago.createToken({cardNumber:st,securityCode:wt,cardExpirationMonth:ye,cardExpirationYear:we,cardholderName:Lt,docType:"CPF",docNumber:ce},function(Jt,Mt){if(Dn("createToken callback",{status:Jt,hasId:!!(Mt&&Mt.id),err:Mt&&Mt.error}),Jt===200||Jt===201){if(En){var Ge=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;Ge.call(En,Mt.id),En.dispatchEvent(new Event("input",{bubbles:!0})),En.dispatchEvent(new Event("change",{bubbles:!0}))}Nt()}else{var ke="Não foi possível validar os dados do cartão.";Mt&&Mt.cause&&Mt.cause[0]&&Mt.cause[0].description&&(ke=Mt.cause[0].description),alert(ke),Xt()}})}catch(Jt){Dn("createToken exception",Jt.message),le()}}x==="cartao"?He():setTimeout(Nt,500)}}if(M){let n=function(e){if(e=e||0,e>30){t();return}var o=V?v.querySelector("#box-lista-enderecos, #container-step-2"):v.querySelector("#cep, .box-area-dados, #nome-completo_2");o||e>8?t():setTimeout(function(){n(e+1)},250)},t=function(){var e=Sn(),o=rn.get("mm_user_email")||"";if(rn.remove("mm_checkout_mode"),typeof window._mmDraftDebug>"u"&&(window._mmDraftDebug=!1),V&&d(e),Tn(e,o),$t(document.getElementById("mm-layout")),V){mn(),vn(),qt();return}Qn();var i=nt(),c=rn.get(R),y=c&&String(c).replace(/\D/g,"").length===8;if(y?Xn("loading"):e&&typeof e.shipping=="number"&&e.shipping>0&&Xn({value:e.shipping,name:e.shippingName||"",deadline:e.shippingDeadline||"",city:e.shippingCity||"",options:e.shippingOptions||[]}),!V)try{var L=Array.from(v.querySelectorAll("a, button")).find(function(tn){var Q=(tn.textContent||"").toLowerCase();return Q.indexOf("sem cadastro")!==-1&&tn.offsetParent!==null});L&&!L.classList.contains("active")&&L.click()}catch{}qt();var X=rn.get(R);if(X&&X.length===8){var G=document.getElementById("mm-op-cep");G&&(G.value=Bn(X),setTimeout(function(){Qt(X)},400))}setTimeout(function(){if(!("ontouchstart"in window))for(var tn=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep"],Q=0;Q<tn.length;Q++){var on=document.getElementById(tn[Q]);if(on&&!on.value){on.focus();break}}},350)};n()}if(P){document.documentElement.classList.remove("mm-cart-loading");var be=v.querySelector('input[placeholder*="numero do cart" i]');be&&(be.inputMode="numeric");var se=v.querySelector('input[placeholder*="000" i]');se&&(!se.maxLength||se.maxLength<=4)&&(se.inputMode="numeric")}if(_){let n=function(){var o=v.innerText||"",i=o.match(/\b(\d{10,})\b/),c=o.match(/R\$\s?[\d.]+,\d{2}/),y=v.querySelector(".campo-numero-pix");return{canvas:v.querySelector("canvas"),pixCode:y&&y.value||"",order:i?i[1]:"",total:c?c[0].replace(/\s+/g," "):""}},t=function(o){var i=typeof renderGlobalFooter=="function"?renderGlobalFooter():"",c=!!o.canvas,y=c?'<div class="mm-done-pix-card"><div class="mm-done-pix-head">'+De+'<span>Pague com PIX</span><span class="mm-done-pix-status">Aguardando pagamento</span></div><div class="mm-done-qr" id="mm-done-qr-slot"></div><div class="mm-done-timer" id="mm-done-timer">'+_e+'<span class="mm-done-timer-text">Este código expira em <strong id="mm-done-timer-val">05:00</strong></span></div>'+(o.pixCode?'<button type="button" class="mm-done-copy" data-mm-act="done-copy-pix">'+Re+"<span>Copiar código PIX (copia e cola)</span></button>":"")+'<p class="mm-done-pix-note">'+H.lock+"<span>Aprovação em até 1 minuto após o pagamento.</span></p></div>":'<div class="mm-done-pix-card mm-done-nopix"><p>Seu pedido foi registrado. Acompanhe o pagamento e o status em “Meus pedidos”.</p></div>';return _n("payment")+'<main class="mm-op-main mm-done-main"><div class="mm-done-hero"><span class="mm-done-hero-check">'+Ne+'</span><h1 class="mm-done-h1">Pedido realizado com sucesso!</h1><p class="mm-done-hero-sub">'+(o.order?"Pedido <strong>Nº "+I(o.order)+"</strong> · ":"")+(c?"falta só concluir o pagamento no PIX abaixo.":"obrigado pela sua compra!")+'</p></div><div class="mm-done-grid"><section class="mm-done-left">'+y+'</section><aside class="mm-done-right">'+(c?'<div class="mm-done-card"><h3 class="mm-op-card-title">Como pagar</h3><ol class="mm-done-steps"><li>Abra o app do seu banco e entre na área <strong>PIX</strong>.</li><li>Escaneie o <strong>QR Code</strong> ou use <strong>Pix Copia e Cola</strong>.</li><li>Confirme os dados e finalize o pagamento.</li></ol></div>':"")+(o.total?'<div class="mm-done-total"><span class="mm-done-total-label">Total</span><span class="mm-done-total-value">'+I(o.total)+"</span>"+(c?'<span class="mm-done-total-sub">no PIX</span>':"")+"</div>":"")+'<a class="mm-cta mm-done-cta" href="/cliente/pedidos">Acompanhar meu pedido</a><a class="mm-done-help" href="'+h+'" target="_blank" rel="noopener">'+je+'<span>Dificuldade no pagamento? <strong>Fale com a gente no WhatsApp</strong></span></a><a class="mm-done-back" href="/">Voltar para a loja</a><div class="mm-trust mm-done-trust"><span class="mm-trust-item">'+H.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+H.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+H.shield+"<span>Garantia 12 meses</span></span></div></aside></div></main>"+i},e=function(){if(!document.getElementById("mm-layout")){var o=n(),i=document.createElement("div");if(i.id="mm-layout",i.className="mm-op-layout mm-done-layout",i.innerHTML=t(o),v.insertBefore(i,v.firstChild),document.body.classList.add("mm-checkout-rebuild"),v.classList.add("mm-shadow-mode"),document.documentElement.classList.remove("mm-cart-loading"),o.canvas){var c=i.querySelector("#mm-done-qr-slot");if(c)try{var y=document.createElement("img");y.src=o.canvas.toDataURL("image/png"),y.alt="QR Code PIX",y.width=220,y.height=220,c.appendChild(y)}catch{c.appendChild(o.canvas)}}var L=i.querySelector('[data-mm-act="done-copy-pix"]');L&&L.addEventListener("click",function(){var on=o.pixCode||"",en=L.querySelector("span"),sn=en?en.textContent:"";function an(){L.classList.add("is-copied"),en&&(en.textContent="Código copiado!"),setTimeout(function(){L.classList.remove("is-copied"),en&&(en.textContent=sn)},2200)}function gn(){try{var hn=document.createElement("textarea");hn.value=on,hn.style.cssText="position:fixed;top:0;left:0;opacity:0;",document.body.appendChild(hn),hn.focus(),hn.select();var bn=document.execCommand("copy");return document.body.removeChild(hn),bn}catch{return!1}}function cn(){if(gn()){an();return}var hn=v.querySelector(".box-btn button, .box-btn a");hn&&(hn.click(),an())}on&&navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(on).then(an).catch(cn):cn()});var X=i.querySelector("#mm-done-timer");if(X){let on=function(){var en=Math.max(0,Math.round((tn-Date.now())/1e3));if(en<=0){Q&&clearInterval(Q),X.classList.add("is-expired"),X.innerHTML='<span class="mm-done-timer-text">Tempo esgotado — gere um novo código.</span><button type="button" class="mm-done-timer-renew" data-mm-act="done-renew">Gerar novo código</button>';var sn=X.querySelector('[data-mm-act="done-renew"]');sn&&sn.addEventListener("click",function(){try{localStorage.removeItem(G)}catch{}location.reload()});return}en<=60&&X.classList.add("is-urgent");var an=Math.floor(en/60),gn=en%60,cn=X.querySelector("#mm-done-timer-val");cn&&(cn.textContent=(an<10?"0":"")+an+":"+(gn<10?"0":"")+gn)};var G="mm_pix_deadline_"+(o.order||"x"),tn=parseInt(localStorage.getItem(G),10);if(!tn||isNaN(tn)){tn=Date.now()+Ve;try{localStorage.setItem(G,String(tn))}catch{}}var Q=null;on(),Q=setInterval(on,1e3)}}};document.documentElement.classList.remove("mm-cart-loading");var De='<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm-2 16h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zm-6 4h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm4-4h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm-4 0h2v2h-2v-2z"/></svg>',Re='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z"/></svg>',Ne='<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',je='<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.9-2.1-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3zM12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm0 18.3c-1.5 0-3-.4-4.3-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.3 8.3 0 1 1 12 20.3z"/></svg>',_e='<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.2 3.1.8-1.3-4.5-2.7V7z"/></svg>',Ve=300*1e3,xe=0;(function o(){var i=v.querySelector("canvas"),c=i&&i.width>100&&i.width===i.height;if(c||xe>16){e();return}xe++,setTimeout(o,250)})()}setTimeout(function(){document.documentElement.classList.contains("mm-cart-loading")&&(console.warn("[mm-cart] failsafe: removing mm-cart-loading after 2s timeout"),document.documentElement.classList.remove("mm-cart-loading"))},2e3)})(),(function(){var R=window.location.pathname,N=/^\/login\/?$/.test(R),j=R.indexOf("/cliente/pedidos")===0;if(!N&&!j)return;var g="5511915299488",m='<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';function l(q){return"https://api.whatsapp.com/send?phone="+g+"&text="+encodeURIComponent(q)}function f(q){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",q):q()}function h(q){var V=(q||"").replace(/\D/g,"").slice(0,14);if(V.length<=11)return V.length>9?V.slice(0,3)+"."+V.slice(3,6)+"."+V.slice(6,9)+"-"+V.slice(9):V.length>6?V.slice(0,3)+"."+V.slice(3,6)+"."+V.slice(6):V.length>3?V.slice(0,3)+"."+V.slice(3):V;var W=V.slice(0,2)+"."+V.slice(2,5)+"."+V.slice(5,8)+"/"+V.slice(8,12);return V.length>12&&(W+="-"+V.slice(12)),W}function b(q){return typeof q!="string"||!/cpfcnpj=/i.test(q)?q:q.replace(/(^|&)(cpfcnpj=)([^&]*)/i,function(V,W,v,U){return W+v+encodeURIComponent(h(decodeURIComponent(U)))})}function F(){if(!window.__mmConsultaFix){window.__mmConsultaFix=!0;var q=/operation=consultaPedido/i;try{var V=window.fetch;typeof V=="function"&&(window.fetch=function(U,ln){try{var Z=typeof U=="string"?U:U&&U.url||"";q.test(Z)&&ln&&typeof ln.body=="string"&&(ln.body=b(ln.body))}catch{}return V.apply(this,arguments)})}catch{}try{var W=XMLHttpRequest.prototype.open,v=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(U,ln){return this.__mmU=ln||"",W.apply(this,arguments)},XMLHttpRequest.prototype.send=function(U){try{q.test(this.__mmU||"")&&typeof U=="string"&&(arguments[0]=b(U))}catch{}return v.apply(this,arguments)}}catch{}}}N&&F();function z(){function q(W){if(!W||W.getAttribute("data-mm-mask"))return;W.setAttribute("data-mm-mask","1"),W.setAttribute("maxlength","18"),W.setAttribute("inputmode","numeric");function v(){var Z=h((W.value||"").replace(/\D/g,""));W.value!==Z&&(W.value=Z)}W.addEventListener("input",v),W.addEventListener("change",v),W.addEventListener("blur",v);var U=W.form;if(U&&!U.getAttribute("data-mm-mask")){U.setAttribute("data-mm-mask","1"),U.addEventListener("submit",v,!0);var ln=U.querySelector('button.button-login, button[type="submit"], input[type="submit"]');ln&&ln.addEventListener("click",v,!0)}}var V=0;(function W(){var v=document.getElementById("form-consulta-pedido"),U=document.getElementById("cpfcnpj");if(!v||!U)return++V<20?void setTimeout(W,250):void 0;q(U);var ln=v.querySelector(".title-area h2");if(ln&&!v.querySelector(".mm-cp-eyebrow")){var Z=document.createElement("span");Z.className="mm-cp-eyebrow",Z.textContent="Acompanhe sua compra",ln.insertAdjacentElement("beforebegin",Z)}function pn(xn,An){if(xn){var Gn=xn.closest(".line")||xn.parentElement;if(!Gn.querySelector(".mm-cp-label")){var et=document.createElement("label");et.className="mm-cp-label",et.textContent=An,xn.id&&et.setAttribute("for",xn.id),Gn.insertAdjacentElement("afterbegin",et)}}}pn(U,"CPF ou CNPJ"),pn(document.getElementById("numero-pedido"),"Nº do pedido"),U.placeholder="000.000.000-00";var I=document.getElementById("numero-pedido");I&&(I.placeholder="Ex.: 0012606865731");var H=v.querySelector("button.button-login");if(H)for(var rn=0;rn<H.childNodes.length;rn++){var Nn=H.childNodes[rn];Nn.nodeType===3&&/consultar/i.test(Nn.textContent)&&(Nn.textContent=" Consultar meu pedido ")}var Sn=v.querySelector(".cancel-consulta span");Sn&&(Sn.textContent="Voltar para login");var jn=document.getElementById("numero-pedido");if(jn&&!v.querySelector(".mm-cp-hint")){var zn=document.createElement("span");zn.className="mm-cp-hint",zn.textContent="O número do pedido está no e‑mail de confirmação da compra.";var ot=jn.closest(".line")||jn.parentElement;ot.appendChild(zn)}var nt=v.querySelector("form");if(nt&&!v.querySelector(".mm-cp-wa")){var $n=document.createElement("div");$n.className="mm-cp-wa",$n.innerHTML='Não encontra os dados? <a href="'+l("Olá! Preciso de ajuda para consultar o meu pedido.")+'" target="_blank" rel="noopener">'+m+" Fale com a gente</a>",nt.insertAdjacentElement("afterend",$n)}if(document.documentElement.classList.add("mm-consulta-on"),/(?:^|;\s*)zordEm=[^;\s]/.test(document.cookie)&&!v.querySelector(".mm-cp-logged")){var _n=document.createElement("div");_n.className="mm-cp-logged",_n.innerHTML='<strong>Você já está logado.</strong><span>Esta consulta é para quem comprou sem cadastro. Para acompanhar as suas compras:</span><a href="/cliente/pedidos" class="mm-cp-logged-cta">Ver todos os meus pedidos</a>',v.insertAdjacentElement("afterbegin",_n)}var qn=document.querySelector(".login-holder"),Mn=document.querySelector(".page.page-login");if(qn&&Mn){var lt=qn.querySelector(".login-header");if(lt&&!lt.querySelector(".mm-lg-eyebrow")){var pt=document.createElement("span");pt.className="mm-lg-eyebrow",pt.textContent="Área do cliente";var Wn=lt.querySelector("h2");Wn&&Wn.insertAdjacentElement("beforebegin",pt)}var dt=qn.querySelector(".social-login-area");if(dt&&!qn.querySelector(".mm-lg-ou")){var tt=document.createElement("div");tt.className="mm-lg-ou",tt.textContent="ou",dt.insertAdjacentElement("beforebegin",tt)}setTimeout(function(){try{var xn=qn.querySelector(".social-login-area .render-button");xn&&window.google&&google.accounts&&google.accounts.id&&(xn.innerHTML="",google.accounts.id.renderButton(xn,{theme:"outline",size:"large",shape:"pill",width:320,text:"continue_with",logo_alignment:"center"}))}catch{}setTimeout(function(){var An=qn.querySelector(".social-login-area"),Gn=qn.querySelector(".mm-lg-ou"),et=An&&An.offsetParent!==null&&An.querySelector("iframe");et||(Gn&&(Gn.style.display="none"),An&&(An.style.display="none"))},2e3)},1200);var Bn=[].filter.call(qn.querySelectorAll("span, div, button"),function(xn){return/pessoa jur/i.test(xn.textContent)&&xn.textContent.length<60&&xn.children.length===0})[0];Bn&&Bn.classList.add("mm-lg-link");var Hn=document.querySelector(".footer-login");Hn&&[].forEach.call(Hn.querySelectorAll("p"),function(xn){/nunca postaremos/i.test(xn.textContent)&&xn.classList.add("mm-lg-nopost")}),document.documentElement.classList.add("mm-login-on")}})(),/#consultar?-?pedido/i.test(window.location.hash)&&setTimeout(function(){var W=document.getElementById("form-consulta-pedido"),v=document.getElementById("cpfcnpj");W&&W.scrollIntoView({behavior:"smooth",block:"center"}),v&&setTimeout(function(){v.focus()},500)},600)}var M={"recebimento-pedido":"Pedido recebido","confirmacao-pagamento":"Pagamento confirmado","emissao-nota":"Nota fiscal emitida",transporte:"Em transporte",entrega:"Entregue"};function P(){var q=document.querySelector(".detalhes-pedido");if(!(!q||q.getAttribute("data-mm-ped"))){q.setAttribute("data-mm-ped","1");var V=q.querySelector(".numero-pedido"),W=V?(V.textContent.match(/[\d]+/)||[""])[0]:"",v=q.querySelector(".resumo-data strong"),U=v?v.textContent.trim().split(" ")[0]:"",ln=q.querySelectorAll(".item-historico.status-waiting");ln.length&&ln[0].classList.add("mm-atual");for(var Z='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"',pn={"recebimento-pedido":"<svg "+Z+'><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',"confirmacao-pagamento":"<svg "+Z+'><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>',"emissao-nota":"<svg "+Z+'><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M15 2v5h5"/><path d="M8 13h8"/><path d="M8 17h5"/></svg>',transporte:"<svg "+Z+'><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',entrega:"<svg "+Z+'><path d="M3 10.18v8.82a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8.82"/><path d="M2.5 10.5 12 3l9.5 7.5"/><path d="m9 15 2 2 4-4"/></svg>'},I=q.querySelectorAll(".item-historico"),H=0;H<I.length;H++){var rn=I[H];if(!rn.querySelector(".mm-step-dot")){var Nn="";for(var Sn in pn)if(rn.classList.contains(Sn)){Nn=pn[Sn];break}var jn=document.createElement("span");jn.className="mm-step-dot",jn.innerHTML=Nn,rn.insertAdjacentElement("afterbegin",jn);var zn=document.createElement("span");zn.className="mm-step-line",rn.appendChild(zn)}}var ot=q.querySelectorAll(".item-historico.status-success"),nt="Pedido recebido";if(ot.length){var $n=ot[ot.length-1];for(var _n in M)if($n.classList.contains(_n)){nt=M[_n];break}}if(!document.getElementById("mm-ped-hero")&&W){var qn=document.createElement("div");qn.id="mm-ped-hero",qn.innerHTML='<div class="mm-ped-hero-info"><span class="mm-ped-eyebrow">Acompanhe sua compra</span><h1 class="mm-ped-num">Pedido #'+W+' <button type="button" class="mm-ped-copy" aria-label="Copiar número do pedido">copiar</button></h1><div class="mm-ped-meta">'+(U?"<span>Feito em "+U+"</span>":"")+'<span class="mm-ped-badge">'+nt+'</span></div></div><a class="mm-ped-hero-wa" target="_blank" rel="noopener" href="'+l("Olá! Gostaria de saber sobre o meu pedido #"+W+".")+'">'+m+" Falar sobre este pedido</a>",q.insertAdjacentElement("afterbegin",qn);var Mn=q.querySelector(".resumo-pagamento .resumo-total > span:first-child");Mn&&/resumo do pedido/i.test(Mn.textContent)&&(Mn.textContent="Total");var lt=q.querySelector(".title-itens-pedido h3");lt&&/itens do pedido/i.test(lt.textContent)&&(lt.textContent=" Itens do pedido ");for(var pt=document.querySelectorAll(".main-content h1, .main-content h2, .main-content .title-user-area, .main-content > div"),Wn=0;Wn<pt.length;Wn++){var dt=pt[Wn];if(!dt.contains(q)&&/meus pedidos/i.test(dt.textContent||"")&&(dt.textContent||"").trim().length<40){dt.classList.add("mm-ped-native-title");break}}var tt=qn.querySelector(".mm-ped-copy");tt.addEventListener("click",function(){var ct=this;try{navigator.clipboard.writeText(W).then(function(){ct.textContent="copiado ✓",ct.classList.add("mm-copiado"),setTimeout(function(){ct.textContent="copiar",ct.classList.remove("mm-copiado")},2e3)})}catch{}})}var Bn=q.querySelector(".rastreio-area"),Hn=Bn?Bn.querySelector(".previsao-entrega .previsao"):null,xn=Hn?Hn.textContent.trim():"";if(xn){var An=q.querySelector(".item-historico.entrega");if(An&&!An.querySelector(".mm-step-prev")){var Gn=document.createElement("span");Gn.className="mm-step-prev",Gn.textContent="Previsão: "+xn,An.appendChild(Gn)}}var et=q.querySelector(".status-pagamento-pedido");if(et&&!Bn&&!document.getElementById("mm-ped-entrega")){var at=document.createElement("div");at.id="mm-ped-entrega";for(var gt=null,yn=q.querySelectorAll("a[href]"),ut=0;ut<yn.length;ut++){var Wn=(yn[ut].textContent||"")+" "+yn[ut].href;if(/rastre/i.test(Wn)&&!/politica/i.test(yn[ut].href)){gt=yn[ut];break}}var kt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>';gt?(at.classList.add("mm-tem-rastreio"),at.innerHTML=kt+'<span>Seu pedido está a caminho — <a href="'+gt.href+'" target="_blank" rel="noopener">acompanhe o rastreio aqui</a>.</span>'):at.innerHTML=kt+'<span>O código de rastreio aparece aqui assim que o pedido for despachado. Enquanto isso, acompanhe as etapas acima ou veja nossa <a href="/politica-de-entrega" target="_blank" rel="noopener">política de entrega</a>.</span>',et.insertAdjacentElement("afterend",at)}var Pt=document.querySelector(".btn-comprar-novamente"),Pn=document.querySelector(".btn-ajuda-pedido"),Cn=Pt||Pn?(Pt||Pn).parentElement:null;Cn&&!Cn.classList.contains("mm-ped-acoes")&&(Cn.classList.add("mm-ped-acoes"),Cn.parentElement!==q&&q.appendChild(Cn));var rt=document.querySelector("main.central-cliente");rt&&rt.children.length===1&&rt.classList.add("mm-ped-center"),document.documentElement.classList.add("mm-ped-on")}}function _(){if(!(!/rastrear/i.test(location.hash||"")&&!/rastrear/i.test(location.search||""))){var q=0;(function V(){var W=document.getElementById("form-consulta-pedido");if(!W||W.offsetParent===null)return++q<30?void setTimeout(V,200):void 0;try{W.scrollIntoView({behavior:"smooth",block:"center"})}catch{try{W.scrollIntoView()}catch{}}W.classList.add("mm-cp-flash"),setTimeout(function(){W.classList.remove("mm-cp-flash")},2400);var v=document.getElementById("numero-pedido");v&&setTimeout(function(){try{v.focus({preventScroll:!0})}catch{try{v.focus()}catch{}}},700)})()}}f(function(){try{N&&(z(),_()),j&&P()}catch(q){window.console&&console.warn&&console.warn("[mm-pedidos]",q)}})})()})();
