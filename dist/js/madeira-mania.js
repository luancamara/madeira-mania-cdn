(function(){"use strict";(function(){if(!document.getElementById("mm-global-css")){var b=document.createElement("style");b.id="mm-global-css",b.textContent=`/* =============================================
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
`,document.head.appendChild(b)}})(),(function(){if(!document.getElementById("mm-produto-css")){var b=document.createElement("style");b.id="mm-produto-css",b.textContent=`/* =============================================
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
`,document.head.appendChild(b)}})(),(function(){if(!document.getElementById("mm-variacoes-css")){var b=document.createElement("style");b.id="mm-variacoes-css",b.textContent=`/* ============================================
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
}`,document.head.appendChild(b)}})(),(function(){if(!document.getElementById("mm-cart-sheet-css")){var b=document.createElement("style");b.id="mm-cart-sheet-css",b.textContent=`/* =============================================
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
`,document.head.appendChild(b)}})(),(function(){if(!document.getElementById("mm-checkout-cro-css")){var b=document.createElement("style");b.id="mm-checkout-cro-css",b.textContent=`/* =============================================
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
`,document.head.appendChild(b)}})(),(function(){if(!document.getElementById("mm-pedidos-css")){var b=document.createElement("style");b.id="mm-pedidos-css",b.textContent=`/* =============================================
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
`,document.head.appendChild(b)}})(),(function(){if(!document.getElementById("mm-ticker-css")){var b=document.createElement("style");b.id="mm-ticker-css",b.textContent=`.ticker-bar {
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
  }`,document.head.appendChild(b)}})(),(function(){if(!document.getElementById("mm-header-css")){var b=document.createElement("style");b.id="mm-header-css",b.textContent=`/* =============================================
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
`,document.head.appendChild(b)}})(),(function(){if(!document.getElementById("tickerBar")){var b=document.createElement("div");b.innerHTML=`<div class="ticker-bar" id="tickerBar">
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
</div>`;var D=b.firstElementChild;document.body.insertBefore(D,document.body.firstChild)}})(),(function(){var b=location.pathname;if(/^\/checkout\//i.test(b))return;try{if(localStorage.getItem("mm_no_tracking")==="1")return}catch{}if(window._uxa||document.querySelector('script[src*="contentsquare.net"]'))return;function D(){if(!(window._uxa||document.querySelector('script[src*="contentsquare.net"]'))){var I=document.createElement("script");I.src="https://t.contentsquare.net/uxa/7126f355c4bb8.js",I.async=!0,document.head.appendChild(I)}}function j(){"requestIdleCallback"in window?requestIdleCallback(D,{timeout:5e3}):setTimeout(D,2500)}document.readyState==="complete"?j():window.addEventListener("load",j,{once:!0})})(),(function(){var b="vnhd0x9eve";try{if(localStorage.getItem("mm_no_tracking")==="1")return}catch{}if(window.clarity||document.querySelector('script[src*="clarity.ms"]'))return;function D(){window.clarity||(function(I,g,i,s,u,f,h){I[i]=I[i]||function(){(I[i].q=I[i].q||[]).push(arguments)},f=g.createElement(s),f.async=1,f.src="https://www.clarity.ms/tag/"+u,h=g.getElementsByTagName(s)[0],h.parentNode.insertBefore(f,h)})(window,document,"clarity","script",b)}function j(){"requestIdleCallback"in window?requestIdleCallback(D,{timeout:4e3}):setTimeout(D,2e3)}document.readyState==="complete"?j():window.addEventListener("load",j,{once:!0})})(),(function(){if(!document.getElementById("mm-floating-whatsapp")){var D="5511915299488",j=(document.querySelector("#prod-nome")||{}).value,I=window.location.origin+window.location.pathname+(/^#derivacao=/.test(window.location.hash)?window.location.hash:""),g;j?g="Olá! Tenho interesse no "+j.trim()+". "+I:g="Olá! Vim pelo site e gostaria de ajuda. "+I;var i="https://api.whatsapp.com/send?phone="+D+"&text="+encodeURIComponent(g),s=document.createElement("a");s.id="mm-floating-whatsapp",s.href=i,s.target="_blank",s.rel="noopener noreferrer",s.setAttribute("aria-label","Fale conosco pelo WhatsApp"),s.style.cssText=["position: fixed","right: 14px","z-index: 98","display: flex","align-items: center","justify-content: center","width: 52px","height: 52px","background: #4b664a","border-radius: 50%","box-shadow: 0 3px 12px rgba(0,0,0,0.18)","text-decoration: none","transition: transform 0.15s ease","-webkit-tap-highlight-color: transparent"].join(";"),s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" style="display:block;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',s.addEventListener("touchstart",function(){s.style.transform="scale(0.92)"},{passive:!0}),s.addEventListener("touchend",function(){s.style.transform=""},{passive:!0}),document.body.appendChild(s)}})(),(function(){var D=/^(utm_|gad_|gclid$|gbraid$|wbraid$|fbclid$|msclkid$|ttclid$|srsltid$)/;function j(){try{if(!window.history||!window.history.replaceState||!window.URL||!window.location.search)return;var I=new URL(window.location.href),g=[];I.searchParams.forEach(function(u,f){g.push(f)});var i=!1;if(g.forEach(function(u){D.test(u)&&(I.searchParams.delete(u),i=!0)}),!i)return;var s=I.searchParams.toString();window.history.replaceState(window.history.state,document.title,I.pathname+(s?"?"+s:"")+I.hash)}catch{}}document.readyState==="complete"?setTimeout(j,3e3):window.addEventListener("load",function(){setTimeout(j,3e3)})})(),(function(){var D=document.querySelector(".back-to-top");if(D){var j=D.querySelector(".icon");j&&(j.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',j.style.cssText="display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:none !important;")}})(),(function(){var D="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",j="https://api.whatsapp.com/send?phone=5511915299488&text="+encodeURIComponent("Olá! Vim pelo site e gostaria de ajuda."),I={phone:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',whats:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',mail:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',clock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',pin:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',lock:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>',shield:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>',truck:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',card:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',instagram:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',facebook:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>',tiktok:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.39a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.42z"/></svg>'};function g(){if(!document.getElementById("mm-footer")&&document.body){document.body.classList.add("mm-footer-rebuild");var i=document.createElement("footer");i.id="mm-footer",i.className="mm-footer",i.setAttribute("role","contentinfo"),i.innerHTML='<div class="mm-footer-main"><div class="mm-footer-grid"><div class="mm-footer-col mm-footer-brand"><a class="mm-footer-logo" href="/" aria-label="Madeira Mania - voltar à home"><img src="'+D+'" alt="Madeira Mania" width="180" height="48"></a><p class="mm-footer-tagline">Móveis com design moderno e qualidade superior pra transformar sua casa em um lar cheio de personalidade.</p><div class="mm-footer-social"><a href="https://www.instagram.com/madeira.mania" target="_blank" rel="noopener" aria-label="Instagram da Madeira Mania">'+I.instagram+'</a><a href="https://web.facebook.com/profile.php?id=61578397120844" target="_blank" rel="noopener" aria-label="Facebook da Madeira Mania">'+I.facebook+'</a><a href="https://www.tiktok.com/@madeira.mania" target="_blank" rel="noopener" aria-label="TikTok da Madeira Mania">'+I.tiktok+'</a></div></div><div class="mm-footer-col"><h4 class="mm-footer-h">Atendimento</h4><ul class="mm-footer-list"><li><a href="tel:+5511915299488">'+I.phone+'<span>(11) 91529-9488</span></a></li><li><a href="'+j+'" target="_blank" rel="noopener">'+I.whats+'<span>WhatsApp</span></a></li><li><a href="mailto:contato@madeiramania.com.br">'+I.mail+'<span>contato@madeiramania.com.br</span></a></li><li><span class="mm-footer-meta">'+I.clock+'<span>Seg a Sex · 8h às 18h</span></span></li></ul></div><div class="mm-footer-col"><h4 class="mm-footer-h">Sua compra</h4><ul class="mm-footer-list"><li><a href="'+(/(?:^|;\s*)zordEm=[^;\s]/.test(document.cookie)?"/cliente/pedidos":"/login#rastrear")+'">Rastrear meu pedido</a></li><li><a href="/como-comprar">Como comprar</a></li><li><a href="/politica-de-entrega">Frete e entrega</a></li><li><a href="/politica-de-trocas-e-devolucoes">Trocas e devoluções</a></li><li><a href="/compra-segura">Compra segura</a></li><li><a href="/avaliacoes-de-clientes">Avaliações de clientes</a></li></ul></div><div class="mm-footer-col"><h4 class="mm-footer-h">Madeira Mania</h4><ul class="mm-footer-list"><li><a href="/quem-somos">Quem somos</a></li><li><a href="/atendimento">Central de atendimento</a></li><li><a href="/envio-imediato">Pronta entrega</a></li><li><a href="/politica-de-privacidade">Política de privacidade</a></li></ul></div></div></div><div class="mm-footer-trust"><div class="mm-footer-trust-inner"><div class="mm-footer-trust-item">'+I.lock+'<div class="mm-footer-trust-text"><strong>Compra 100% segura</strong><small>Site protegido por SSL</small></div></div><div class="mm-footer-trust-item">'+I.shield+'<div class="mm-footer-trust-text"><strong>7 dias para troca</strong><small>Direito de arrependimento</small></div></div><div class="mm-footer-trust-item">'+I.truck+'<div class="mm-footer-trust-text"><strong>Frete grátis</strong><small>Acima de R$ 2.000</small></div></div><div class="mm-footer-trust-item">'+I.card+'<div class="mm-footer-trust-text"><strong>12x sem juros</strong><small>Em todos os cartões</small></div></div></div></div><div class="mm-footer-bottom"><div class="mm-footer-bottom-inner"><p class="mm-footer-legal">© 2026 <strong>Madeira Mania</strong> · CNPJ 60.021.382/0001-61<br>Av. Paulista, 1636 · Bela Vista · São Paulo/SP · 01310-200</p><div class="mm-footer-payments" aria-label="Formas de pagamento aceitas"><span class="mm-pay-chip" title="PIX"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/pix.svg" alt="PIX" loading="lazy"></span><span class="mm-pay-chip" title="Visa"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/visa.svg" alt="Visa" loading="lazy"></span><span class="mm-pay-chip" title="Mastercard"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/mastercard.svg" alt="Mastercard" loading="lazy"></span><span class="mm-pay-chip" title="Elo"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/elo.svg" alt="Elo" loading="lazy"></span><span class="mm-pay-chip" title="Hipercard"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/hipercard.svg" alt="Hipercard" loading="lazy"></span><span class="mm-pay-chip" title="American Express"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/american2.svg" alt="American Express" loading="lazy"></span><span class="mm-pay-chip" title="Boleto Bancário"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/boleto.svg" alt="Boleto Bancário" loading="lazy"></span></div></div></div>',document.body.appendChild(i),document.documentElement.classList.remove("mm-footer-loading")}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g):g(),setTimeout(g,1e3),setTimeout(g,3e3),setTimeout(function(){document.documentElement.classList.remove("mm-footer-loading")},6e3)})(),(function(){"use strict";if(location.pathname.replace(/\/$/,"")!=="/atendimento")return;function b(){var D=document.querySelector(".atendimento .title-content");if(!(!D||D.dataset.mmEnhanced)){D.dataset.mmEnhanced="1";var j='<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.053 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64.001 5.122 1.03 6.988 2.898 1.866 1.868 2.893 4.352 2.892 6.992-.003 5.45-4.437 9.887-9.885 9.887zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.465 3.488z"/></svg>';D.innerHTML=["<h1>Fale com a gente</h1>",'<p class="mm-atd-lead">Nosso time está pronto para ajudar você a escolher os móveis certos para sua casa. Use o WhatsApp para respostas rápidas ou preencha o formulário abaixo.</p>','<div class="mm-atd-channels">','  <a class="mm-atd-whatsapp" href="https://api.whatsapp.com/send?phone=5511915299488&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20m%C3%B3veis." target="_blank" rel="noopener">',"    "+j,'    <span class="mm-atd-whatsapp-label">Fale pelo WhatsApp</span>','    <span class="mm-atd-whatsapp-number">11 91529-9488</span>',"  </a>",'  <div class="mm-atd-info">','    <div class="mm-atd-info-item">',"      <strong>Horário de atendimento</strong>","      <span>Segunda a sexta · 9h às 18h</span>","      <span>Sábado · 9h às 13h</span>","    </div>",'    <div class="mm-atd-info-item">',"      <strong>E-mail</strong>",'      <a href="mailto:contato@madeiramania.com.br">contato@madeiramania.com.br</a>',"    </div>","  </div>","</div>",'<h2 class="mm-atd-form-title">Formulário de contato</h2>'].join(`
`)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b(),setTimeout(b,500),setTimeout(b,2e3)})(),(function(){if(/^\/checkout\//.test(location.pathname)||document.getElementById("mm-header"))return;function b(){if(document.getElementById("mm-header"))return;var D="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",j={search:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',user:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',bag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',truck:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>'},I=/(?:^|;\s*)zordEm=[^;\s]/.test(document.cookie),g=I?"/cliente/pedidos":"/login#rastrear",i=document.createElement("div");i.id="mm-header",i.innerHTML=['<a class="mm-h-skip" href="#main">Pular para o conteúdo</a>','<div class="mm-h-topbar">','  <div class="mm-h-topbar-inner">','    <span class="mm-h-topbar-desktop-only">','      <a href="/atendimento">Atendimento</a>','      <span class="mm-h-topbar-sep" aria-hidden="true">·</span>',"    </span>","    <span>Frete grátis R$ 2.000+</span>",'    <span class="mm-h-topbar-sep" aria-hidden="true">·</span>',"    <span>12x sem juros</span>","  </div>","</div>",'<div class="mm-h-main">','  <div class="mm-h-main-left">','    <button class="mm-h-burger" id="mm-h-burger" type="button" aria-label="Abrir menu"><span aria-hidden="true">☰</span></button>','    <button class="mm-h-action" id="mm-h-buscar" type="button">'+j.search+"<span>Buscar</span></button>","  </div>",'  <a class="mm-h-logo" href="/" aria-label="Madeira Mania, ir para a página inicial">','    <img src="'+D+'" alt="" width="280" height="70" loading="eager" />',"  </a>",'  <div class="mm-h-main-right">','    <a class="mm-h-action" href="/wishlist">'+j.heart+"<span>Favoritos</span></a>",'    <a class="mm-h-action mm-h-track" href="'+g+'">'+j.truck+"<span>Rastrear</span></a>",'    <a class="mm-h-action" href="/login">'+j.user+"<span>Conta</span></a>",'    <button class="mm-h-action" type="button" id="mm-h-cart" aria-label="Carrinho, 0 itens" aria-live="polite">','      <span class="mm-h-cart-icon">'+j.bag+'<span class="mm-h-cart-badge" id="mm-h-cart-count" aria-hidden="true" hidden>0</span></span>',"      <span>Carrinho</span>","    </button>","  </div>","</div>",'<nav class="mm-h-nav" role="navigation" aria-label="Categorias">','  <ul class="mm-h-nav-list">','    <li class="mm-h-nav-item" data-menu="ambientes">','      <a href="#" class="mm-h-nav-link" aria-haspopup="true" aria-expanded="false">Ambientes</a>','      <div class="mm-h-mega" role="menu" aria-label="Ambientes">','        <div class="mm-h-mega-inner">','          <div class="mm-h-mega-col">','            <a href="/sala-de-estar-9677307902" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="sala-de-estar">Sala de Estar</a>',"            <ul>",'              <li><a href="/sala-de-estar/mesas">Mesas</a></li>','              <li><a href="/sala-de-estar/racks">Racks para TV</a></li>','              <li><a href="/sala-de-estar/estantes">Estantes</a></li>','              <li><a href="/sala-de-estar/home-theaters">Home Theaters</a></li>','              <li><a href="/sala-de-estar/aparadores">Aparadores</a></li>','              <li><a href="/sala-de-estar/cristaleiras">Cristaleiras</a></li>','              <li><a href="/sala-de-estar/buffets">Buffets</a></li>','              <li><a href="/sala-de-estar/bares">Bares</a></li>','              <li><a href="/sala-de-estar/paineis">Painéis</a></li>','              <li><a href="/sala-de-estar/nichos">Nichos</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col">','            <a href="/sala-de-jantar-1916970475" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="sala-de-jantar">Sala de Jantar</a>',"            <ul>",'              <li><a href="/sala-de-jantar/mesas">Mesas</a></li>','              <li><a href="/sala-de-jantar/cadeiras">Cadeiras</a></li>','              <li><a href="/sala-de-jantar/aparadores">Aparadores</a></li>','              <li><a href="/sala-de-jantar/buffets">Buffets</a></li>','              <li><a href="/sala-de-jantar/cristaleiras">Cristaleiras</a></li>','              <li><a href="/sala-de-jantar/balcoes">Balcões</a></li>','              <li><a href="/sala-de-jantar/banquetas">Banquetas</a></li>','              <li><a href="/sala-de-jantar/bares">Bares</a></li>',"            </ul>",'            <a href="/bar-e-cafe" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="bar-e-cafe">Bar e Café</a>',"            <ul>",'              <li><a href="/bar-e-cafe/bares">Bares</a></li>','              <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col">','            <a href="/cozinha-6327619447" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="cozinha">Cozinha</a>',"            <ul>",'              <li><a href="/cozinha/armarios-de-cozinha">Armários de Cozinha</a></li>','              <li><a href="/cozinha/balcoes">Balcões</a></li>','              <li><a href="/cozinha/banquetas">Banquetas</a></li>','              <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>','              <li><a href="/cozinha/cozinhas-completas">Cozinhas Completas</a></li>','              <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>','              <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>','              <li><a href="/cozinha/multiuso">Multiuso</a></li>','              <li><a href="/cozinha/paneleiros">Paneleiros</a></li>',"            </ul>",'            <a href="/lavanderia" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="lavanderia">Lavanderia</a>','            <a href="/banheiro" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="banheiro">Banheiro</a>',"          </div>",'          <div class="mm-h-mega-col">','            <a href="/quarto-0961844589" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="quarto">Quarto</a>',"            <ul>",'              <li><a href="/quarto/bercos">Berços</a></li>','              <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>','              <li><a href="/quarto/camas">Camas</a></li>','              <li><a href="/quarto/colchoes">Colchões</a></li>','              <li><a href="/quarto/comodas">Cômodas</a></li>','              <li><a href="/quarto/dormitorios">Dormitórios</a></li>','              <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>','              <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>','              <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>','              <li><a href="/quarto/roupeiros">Roupeiros</a></li>',"            </ul>",'            <a href="/escritorio-899523853" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="escritorio">Escritório</a>',"            <ul>",'              <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col mm-h-mega-col-hero" aria-hidden="true">','            <div class="mm-h-mega-hero">','              <img class="mm-h-mega-hero-img" src="" alt="" loading="lazy" width="320" height="240" />','              <div class="mm-h-mega-hero-label"></div>',"            </div>","          </div>","        </div>",'        <div class="mm-h-mega-footer">','          <a href="/envio-imediato" class="mm-h-mega-cta">Ver todos os ambientes <span aria-hidden="true">→</span></a>',"        </div>","      </div>","    </li>",'    <li class="mm-h-nav-item">','      <a href="/envio-imediato" class="mm-h-nav-link">Envio Imediato</a>',"    </li>",'    <li class="mm-h-nav-item">','      <a href="/outlet" class="mm-h-nav-link">Outlet</a>',"    </li>","  </ul>","</nav>",'<div class="mm-h-drawer" id="mm-h-drawer" hidden role="dialog" aria-modal="true" aria-label="Menu">','  <div class="mm-h-drawer-backdrop"></div>','  <aside class="mm-h-drawer-panel">','    <div class="mm-h-drawer-header">','      <span class="mm-h-drawer-title">Menu</span>','      <button class="mm-h-drawer-close" id="mm-h-drawer-close" type="button" aria-label="Fechar menu">','        <span aria-hidden="true">×</span>',"      </button>","    </div>",'    <div class="mm-h-drawer-search">','      <form action="/busca" method="get">','        <input type="search" name="q" placeholder="Buscar" aria-label="Buscar" />',"      </form>","    </div>",'    <nav class="mm-h-drawer-nav" aria-label="Navegação móvel">','      <details class="mm-h-drawer-section">',"        <summary>Sala de Estar</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/sala-de-estar-9677307902">Ver todos →</a></li>','          <li><a href="/sala-de-estar/mesas">Mesas</a></li>','          <li><a href="/sala-de-estar/racks">Racks para TV</a></li>','          <li><a href="/sala-de-estar/estantes">Estantes</a></li>','          <li><a href="/sala-de-estar/home-theaters">Home Theaters</a></li>','          <li><a href="/sala-de-estar/aparadores">Aparadores</a></li>','          <li><a href="/sala-de-estar/cristaleiras">Cristaleiras</a></li>','          <li><a href="/sala-de-estar/buffets">Buffets</a></li>','          <li><a href="/sala-de-estar/bares">Bares</a></li>','          <li><a href="/sala-de-estar/paineis">Painéis</a></li>','          <li><a href="/sala-de-estar/nichos">Nichos</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Sala de Jantar</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/sala-de-jantar-1916970475">Ver todos →</a></li>','          <li><a href="/sala-de-jantar/mesas">Mesas</a></li>','          <li><a href="/sala-de-jantar/cadeiras">Cadeiras</a></li>','          <li><a href="/sala-de-jantar/aparadores">Aparadores</a></li>','          <li><a href="/sala-de-jantar/buffets">Buffets</a></li>','          <li><a href="/sala-de-jantar/cristaleiras">Cristaleiras</a></li>','          <li><a href="/sala-de-jantar/balcoes">Balcões</a></li>','          <li><a href="/sala-de-jantar/banquetas">Banquetas</a></li>','          <li><a href="/sala-de-jantar/bares">Bares</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Cozinha</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/cozinha-6327619447">Ver todos →</a></li>','          <li><a href="/cozinha/armarios-de-cozinha">Armários de Cozinha</a></li>','          <li><a href="/cozinha/balcoes">Balcões</a></li>','          <li><a href="/cozinha/banquetas">Banquetas</a></li>','          <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>','          <li><a href="/cozinha/cozinhas-completas">Cozinhas Completas</a></li>','          <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>','          <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>','          <li><a href="/cozinha/multiuso">Multiuso</a></li>','          <li><a href="/cozinha/paneleiros">Paneleiros</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Quarto</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/quarto-0961844589">Ver todos →</a></li>','          <li><a href="/quarto/bercos">Berços</a></li>','          <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>','          <li><a href="/quarto/camas">Camas</a></li>','          <li><a href="/quarto/colchoes">Colchões</a></li>','          <li><a href="/quarto/comodas">Cômodas</a></li>','          <li><a href="/quarto/dormitorios">Dormitórios</a></li>','          <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>','          <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>','          <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>','          <li><a href="/quarto/roupeiros">Roupeiros</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Bar e Café</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/bar-e-cafe">Ver todos →</a></li>','          <li><a href="/bar-e-cafe/bares">Bares</a></li>','          <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Escritório</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/escritorio-899523853">Ver todos →</a></li>','          <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',"        </ul>","      </details>",'      <a href="/lavanderia" class="mm-h-drawer-link">Lavanderia</a>','      <a href="/banheiro" class="mm-h-drawer-link">Banheiro</a>','      <a href="/envio-imediato" class="mm-h-drawer-link">Envio Imediato</a>','      <a href="/outlet" class="mm-h-drawer-link">Outlet</a>',"    </nav>",'    <div class="mm-h-drawer-footer">','      <a href="'+g+'" class="mm-h-drawer-track">'+j.truck+"<span>Rastrear pedido</span></a>",'      <a href="/wishlist">Favoritos</a>','      <a href="/login">Conta</a>','      <a href="/atendimento">Atendimento</a>',"    </div>","  </aside>","</div>",'<div class="mm-h-search-overlay" id="mm-h-search-overlay" hidden role="dialog" aria-modal="true" aria-label="Buscar">','  <div class="mm-h-search-backdrop"></div>','  <div class="mm-h-search-inner">','    <button class="mm-h-search-close" id="mm-h-search-close" type="button" aria-label="Fechar busca">','      <span aria-hidden="true">×</span>',"    </button>",'    <form action="/busca" method="get" class="mm-h-search-form">','      <label for="mm-h-search-input" class="mm-h-search-label">O que você procura?</label>','      <input type="search" name="q" id="mm-h-search-input" placeholder="O que você procura?" autocomplete="off" />',"    </form>",'    <div class="mm-h-search-results" id="mm-h-search-results" hidden></div>','    <div class="mm-h-search-suggestions" id="mm-h-search-suggestions">','      <span class="mm-h-search-sug-label">Sugestões populares</span>','      <a href="/busca?q=mesa+de+jantar">Mesa de jantar</a>','      <a href="/busca?q=rack">Rack</a>','      <a href="/busca?q=guarda-roupas">Guarda-roupas</a>','      <a href="/busca?q=cristaleira">Cristaleira</a>','      <a href="/busca?q=aparador">Aparador</a>',"    </div>",'    <div class="mm-h-search-hint"><kbd>Esc</kbd> para fechar</div>',"  </div>","</div>"].join(`
`),document.body.insertBefore(i,document.body.firstChild),document.documentElement.classList.remove("mm-header-loading");var s=(function(){try{var o=Array.from(document.scripts).find(function(t){return t.src&&t.src.indexOf("madeira-mania.js")!==-1});if(o&&o.src.indexOf("localhost")!==-1)return"http://localhost:8080/assets/mega-hero/";if(o){var n=o.src.match(/@([^/]+)/);if(n)return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@"+n[1]+"/dist/assets/mega-hero/"}return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@main/dist/assets/mega-hero/"}catch{return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@main/dist/assets/mega-hero/"}})(),u={"sala-de-estar":"Sala de Estar","sala-de-jantar":"Sala de Jantar",cozinha:"Cozinha","bar-e-cafe":"Bar e Café",quarto:"Quarto",escritorio:"Escritório",lavanderia:"Lavanderia",banheiro:"Banheiro"},f=i.querySelector(".mm-h-mega-hero-img"),h=i.querySelector(".mm-h-mega-hero-label");Object.keys(u).forEach(function(o){var n=new Image;n.src=s+o+".jpg"});function E(o){f&&(f.onerror=function(){f.style.visibility="hidden"},f.style.visibility="",f.src=s+o+".jpg",f.alt=u[o]||"",h&&(h.textContent=u[o]||""))}E("sala-de-estar"),i.querySelectorAll(".mm-h-mega-heading-link[data-hero]").forEach(function(o){o.addEventListener("mouseenter",function(){E(o.dataset.hero)})});var w=i.querySelectorAll(".mm-h-nav-item[data-menu]"),F=null,L=null;w.forEach(function(o){o.addEventListener("mouseenter",function(){clearTimeout(L),clearTimeout(F),F=setTimeout(function(){w.forEach(function(t){t.classList.remove("is-open");var e=t.querySelector(".mm-h-nav-link");e&&e.setAttribute("aria-expanded","false")}),o.classList.add("is-open");var n=o.querySelector(".mm-h-nav-link");n&&n.setAttribute("aria-expanded","true")},150)}),o.addEventListener("mouseleave",function(){clearTimeout(F),L=setTimeout(function(){o.classList.remove("is-open");var n=o.querySelector(".mm-h-nav-link");n&&n.setAttribute("aria-expanded","false")},200)})}),document.addEventListener("keydown",function(o){o.key==="Escape"&&w.forEach(function(n){n.classList.remove("is-open");var t=n.querySelector(".mm-h-nav-link");t&&t.setAttribute("aria-expanded","false")})});var R=i.querySelector('.mm-h-nav-item[data-menu="ambientes"] > .mm-h-nav-link');R&&R.addEventListener("click",function(o){o.preventDefault()});var c=document.getElementById("mm-h-search-overlay"),G=document.getElementById("mm-h-buscar"),H=document.getElementById("mm-h-search-close"),S=document.getElementById("mm-h-search-input"),M=c&&c.querySelector(".mm-h-search-backdrop"),T=null;function P(){c&&(T=document.activeElement,c.hidden=!1,document.body.style.overflow="hidden",setTimeout(function(){S&&S.focus()},50))}function en(){c&&(c.hidden=!0,document.body.style.overflow="",T&&T.focus&&T.focus())}G&&G.addEventListener("click",P),H&&H.addEventListener("click",en),M&&M.addEventListener("click",en),document.addEventListener("keydown",function(o){if(o.key==="Escape"&&c&&!c.hidden){en();return}if(o.key==="/"&&c&&c.hidden){var n=document.activeElement&&document.activeElement.tagName;n!=="INPUT"&&n!=="TEXTAREA"&&!(document.activeElement&&document.activeElement.isContentEditable)&&(o.preventDefault(),P())}}),c&&c.addEventListener("keydown",function(o){if(!(o.key!=="Tab"||c.hidden)){var n=c.querySelectorAll("button, input, a[href]");if(n.length!==0){var t=n[0],e=n[n.length-1];o.shiftKey&&document.activeElement===t?(o.preventDefault(),e.focus()):!o.shiftKey&&document.activeElement===e&&(o.preventDefault(),t.focus())}}});var on=document.getElementById("mm-h-search-results"),pn=document.getElementById("mm-h-search-suggestions"),fn=[{label:"Mesa de jantar",q:"mesa de jantar"},{label:"Mesa de centro",q:"mesa de centro"},{label:"Rack para TV",q:"rack"},{label:"Guarda-roupas",q:"guarda-roupas"},{label:"Cristaleira",q:"cristaleira"},{label:"Aparador",q:"aparador"},{label:"Buffet",q:"buffet"},{label:"Painel para TV",q:"painel"},{label:"Cabeceira",q:"cabeceira"},{label:"Cômoda",q:"comoda"},{label:"Estante",q:"estante"},{label:"Home theater",q:"home theater"}],Vn="mm_recent_searches";function Un(){try{var o=localStorage.getItem(Vn);if(!o)return[];var n=JSON.parse(o);return Array.isArray(n)?n.slice(0,5):[]}catch{return[]}}function Tn(o){if(o)try{var n=Un().filter(function(t){return t&&t.toLowerCase()!==o.toLowerCase()});n.unshift(o),localStorage.setItem(Vn,JSON.stringify(n.slice(0,5)))}catch{}}function hn(o){return String(o).replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})}var Bn='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',In='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',$n="mm_search_cache_v1",Dn=600*1e3,xn=20,kn=null;function Rn(){try{return JSON.parse(sessionStorage.getItem($n)||"{}")}catch{return{}}}function qn(o){try{var n=Object.keys(o);if(n.length>xn){n.sort(function(e,r){return o[e].ts-o[r].ts});for(var t=0;t<n.length-xn;t++)delete o[n[t]]}sessionStorage.setItem($n,JSON.stringify(o))}catch{}}function Nn(o){var n=Rn(),t=n[o.toLowerCase()];return!t||Date.now()-t.ts>Dn?null:t.products}function Wn(o,n){var t=Rn();t[o.toLowerCase()]={ts:Date.now(),products:n},qn(t)}function jn(o){for(var n="itens:",t=0;(t=o.indexOf(n,t))!==-1;){var e=o.indexOf("[",t);if(e===-1)return null;for(var r=0,m=!1,d=!1,x=-1,q=e;q<o.length;q++){var N=o.charAt(q);if(d){d=!1;continue}if(N==="\\"){d=!0;continue}if(N==='"'){m=!m;continue}if(!m){if(N==="[")r++;else if(N==="]"&&(r--,r===0)){x=q;break}}}if(x!==-1){var B=o.substring(e,x+1);try{var _=JSON.parse(B);if(Array.isArray(_)&&_.length>0)return _}catch{}}t=e+1}return null}function Zn(o){var n=jn(o);if(!n)return[];for(var t=[],e=0;e<n.length&&t.length<6;e++){var r=n[e];if(r){var m=r.titulo||r.nome||"";if(m){var d=r.link||"";d&&d.charAt(0)!=="/"&&d.indexOf("http")!==0&&(d="/"+d);var x=r.midia_url||"",q=parseFloat(r.valor),N=parseFloat(r.valor_de),B=isNaN(q)?"":"R$ "+q.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),_=!isNaN(N)&&N>q?"R$ "+N.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):"",O="";typeof r.percentual_off=="number"&&r.percentual_off>0&&(O="-"+Math.round(r.percentual_off)+"%"),t.push({href:d,title:m,img:x,price:B,oldPrice:_,discount:O})}}}return t}function lt(o){var n=o.toLowerCase().trim();if(!n||n.length<3)return Promise.resolve([]);var t=Nn(n);if(t)return Promise.resolve(t);if(kn)try{kn.abort()}catch{}kn=typeof AbortController<"u"?new AbortController:null;var e="/busca?q="+encodeURIComponent(n),r={credentials:"same-origin",headers:{Accept:"text/html"}};return kn&&(r.signal=kn.signal),fetch(e,r).then(function(m){if(!m.ok)throw new Error("HTTP "+m.status);return m.text()}).then(function(m){var d=Zn(m);return Wn(n,d),d}).catch(function(m){return m&&m.name==="AbortError"?null:[]})}function yn(o){var n=o.img?'<img src="'+hn(o.img)+'" alt="" loading="lazy" width="64" height="64"/>':'<div class="mm-h-search-product-noimg"></div>',t=o.price?'<span class="mm-h-search-product-price">'+hn(o.price)+"</span>":"",e=o.oldPrice&&o.oldPrice!==o.price?'<span class="mm-h-search-product-oldprice">'+hn(o.oldPrice)+"</span>":"",r=o.discount?'<span class="mm-h-search-product-discount">'+hn(o.discount)+"</span>":"";return'<a class="mm-h-search-product" href="'+hn(o.href)+'" data-recent="1"><span class="mm-h-search-product-thumb">'+n+r+'</span><span class="mm-h-search-product-body"><span class="mm-h-search-product-name">'+hn(o.title)+'</span><span class="mm-h-search-product-prices">'+e+t+"</span></span></a>"}function An(){if(on){var o=Un();if(!o.length){on.hidden=!0,on.innerHTML="",pn&&(pn.hidden=!1);return}var n='<div class="mm-h-search-section">';n+='<span class="mm-h-search-sug-label">Buscas recentes</span>',n+='<ul class="mm-h-search-list">';for(var t=0;t<o.length;t++){var e=o[t];n+='<li><a class="mm-h-search-result" href="/busca?q='+encodeURIComponent(e)+'"><span class="mm-h-search-result-icon">'+In+'</span><span class="mm-h-search-result-label">'+hn(e)+"</span></a></li>"}n+="</ul></div>",on.innerHTML=n,on.hidden=!1,pn&&(pn.hidden=!1)}}function Gn(o){if(!on)return"";pn&&(pn.hidden=!0);var n=o.trim();if(n.length<2)return An(),"";var t=n.toLowerCase(),e=fn.filter(function(x){return x.label.toLowerCase().indexOf(t)!==-1||x.q.toLowerCase().indexOf(t)!==-1}).slice(0,4),r="";r+='<ul class="mm-h-search-list">',r+='<li><a class="mm-h-search-result mm-h-search-result-primary" href="/busca?q='+encodeURIComponent(n)+'" data-recent="1"><span class="mm-h-search-result-icon">'+Bn+'</span><span class="mm-h-search-result-label">Buscar por <strong>&ldquo;'+hn(n)+'&rdquo;</strong></span><span class="mm-h-search-result-arrow" aria-hidden="true">&rarr;</span></a></li>';for(var m=0;m<e.length;m++){var d=e[m];r+='<li><a class="mm-h-search-result" href="/busca?q='+encodeURIComponent(d.q)+'" data-recent="1"><span class="mm-h-search-result-icon">'+Bn+'</span><span class="mm-h-search-result-label">'+hn(d.label)+"</span></a></li>"}return r+="</ul>",n.length>=3&&(r+='<div class="mm-h-search-products-section" data-q="'+hn(n)+'"><span class="mm-h-search-sug-label">Produtos</span><div class="mm-h-search-products-grid mm-h-search-products-loading"><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div></div></div>'),on.innerHTML=r,on.hidden=!1,n}function zn(o){var n=Gn(o);!n||n.length<3||lt(n).then(function(t){if(S){var e=(S.value||"").trim();if(e===n&&t!==null){var r=on&&on.querySelector('.mm-h-search-products-section[data-q="'+n.replace(/"/g,'\\"')+'"]');if(r){var m=r.querySelector(".mm-h-search-products-grid");if(m){if(m.classList.remove("mm-h-search-products-loading"),!t||t.length===0){r.innerHTML='<span class="mm-h-search-sug-label">Nenhum produto encontrado para &ldquo;'+hn(n)+"&rdquo;</span>";return}for(var d="",x=0;x<t.length;x++)d+=yn(t[x]);m.innerHTML=d}}}}})}var En=null;if(S){S.addEventListener("input",function(){clearTimeout(En);var o=S.value;En=setTimeout(function(){!o||o.trim().length<2?An():zn(o)},300)}),on&&on.addEventListener("click",function(o){var n=o.target.closest&&o.target.closest("a[data-recent]");if(n){var t=n.getAttribute("href").split("q=")[1];t&&Tn(decodeURIComponent(t.replace(/\+/g," ")))}});var Qn=c&&c.querySelector(".mm-h-search-form");Qn&&Qn.addEventListener("submit",function(){Tn((S.value||"").trim())})}G&&G.addEventListener("click",function(){An()});var dn=document.getElementById("mm-h-drawer"),Yn=document.getElementById("mm-h-drawer-close"),rt=dn&&dn.querySelector(".mm-h-drawer-backdrop");function gt(){dn&&(dn.hidden=!1,document.body.style.overflow="hidden",setTimeout(function(){var o=dn.querySelector(".mm-h-drawer-close");o&&o.focus()},100))}function Pn(){!dn||dn.hidden||(dn.classList.add("mm-h-drawer-closing"),document.body.style.overflow="",setTimeout(function(){dn.hidden=!0,dn.classList.remove("mm-h-drawer-closing");var o=document.getElementById("mm-h-burger");o&&o.focus()},320))}var tt=document.getElementById("mm-h-burger");if(tt&&tt.addEventListener("click",gt),Yn&&Yn.addEventListener("click",Pn),rt&&rt.addEventListener("click",Pn),document.addEventListener("keydown",function(o){o.key==="Escape"&&dn&&!dn.hidden&&Pn()}),dn){var pt=0;dn.addEventListener("touchstart",function(o){pt=o.touches[0].clientX},{passive:!0}),dn.addEventListener("touchend",function(o){var n=o.changedTouches[0].clientX;pt-n>80&&Pn()},{passive:!0})}dn&&dn.querySelectorAll(".mm-h-drawer-section summary").forEach(function(o){o.addEventListener("click",function(n){n.preventDefault();var t=o.parentElement,e=t.querySelector("ul");if(e)if(t.open)e.style.maxHeight=e.scrollHeight+"px",e.style.opacity="1",requestAnimationFrame(function(){e.style.maxHeight="0",e.style.opacity="0",e.style.paddingTop="0",e.style.paddingBottom="0"}),setTimeout(function(){t.open=!1,e.style.maxHeight="",e.style.opacity="",e.style.paddingTop="",e.style.paddingBottom=""},300);else{t.open=!0;var r=e.scrollHeight;e.style.maxHeight="0",e.style.opacity="0",e.style.paddingTop="0",e.style.paddingBottom="0",requestAnimationFrame(function(){e.style.maxHeight=r+"px",e.style.opacity="1",e.style.paddingTop="",e.style.paddingBottom=""}),setTimeout(function(){e.style.maxHeight="",e.style.opacity=""},320)}})});var ct=document.getElementById("mm-h-cart"),St=null,Sn=null;function ft(){var o=document.querySelector(".carrinho-rapido-ctn");return o||document.querySelector('#cart-preview-area > div.z-\\[9999\\], #cart-preview-area > div[class*="z-[9999]"]')}function xt(o){return!!(o&&o.className&&o.className.indexOf("z-[9999]")!==-1)}var Ct='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';function Et(o){if(o){var n=o.querySelector(".close-car-fast");n&&!n.innerHTML.trim()&&(n.innerHTML=Ct,n.setAttribute("aria-label","Fechar carrinho"),n.setAttribute("role","button"),n.setAttribute("tabindex","0"))}}function yt(o){!o||o.dataset.mmCloseWired||(o.dataset.mmCloseWired="1",o.addEventListener("click",function(n){var t=n.target;t&&t.closest&&(t.closest(".close-car-fast")||t.closest(".icon-arrow-bottom"))&&(n.preventDefault(),n.stopPropagation(),p())},!0),o.addEventListener("keydown",function(n){(n.key==="Enter"||n.key===" ")&&n.target&&n.target.closest&&n.target.closest(".close-car-fast")&&(n.preventDefault(),p())}))}function Ln(o){if(o){if(!o.dataset.mmLifted){o.dataset.mmLifted="1",o.style.position="fixed",o.style.display="block",o.style.zIndex="200";for(var n=o.parentElement;n&&!n.classList.contains("header-middle");)n.style.zIndex="auto",n.style.transform="none",n.style.filter="none",n.style.isolation="auto",n=n.parentElement}yt(o),Et(o)}}var zt=[{href:"/rack-atenas-cor-naturalle-largura-220-cm",name:"Rack Atenas 220cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5519/am-2501-mavaular-rack-atenas-220-naturalle-lado.jpg?ims=200x200",priceFrom:"R$ 1.615,49",priceTo:"R$ 1.032,30"},{href:"/rack-atenas-cor-naturalle-largura-180-cm",name:"Rack Atenas 180cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5419/am-2501-mavaular-rack-atenas-180-naturalle.jpg?ims=200x200",priceFrom:"R$ 1.688,71",priceTo:"R$ 942,31"},{href:"/buffet-arcus-cor-naturalle-largura-92-cm",name:"Buffet Arcus 92cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5439/am-2501-mavaular-arcus-02-pts-naturalle.jpg?ims=200x200",priceFrom:"R$ 1.359,09",priceTo:"R$ 807,30"},{href:"/buffet-atenas-cor-naturalle",name:"Buffet Atenas",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/4237/am-2502-mavaular-buffet-atenas-naturalle.jpg?ims=200x200",priceFrom:"R$ 2.124,07",priceTo:"R$ 1.032,30"}],wt='<svg viewBox="0 0 48 48" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 14 8 20v22a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V20l-4-6z"/><path d="M8 20h32"/><path d="M32 28a8 8 0 0 1-16 0"/></svg>';function et(){try{if(typeof Zord<"u"&&typeof Zord.get=="function"){var o=Zord.get("cart.size");if(typeof o=="number"&&o>0)return o;if(typeof o=="string"&&/^\d+$/.test(o)&&parseInt(o,10)>0)return parseInt(o,10)}}catch{}var n=document.querySelector("#cart-preview-area .item-ctn, .carrinho-container .item-ctn");if(n){var t=(n.textContent||"").trim();if(t&&/\d/.test(t)){var e=parseInt(t.replace(/\D/g,""),10);if(!isNaN(e))return e}}var r=document.querySelector(".carrinho-rapido-ctn");if(r){var m=0;if(r.querySelectorAll(".cart-item").forEach(function(d){d.closest(".mm-cart-empty-wrapper")||m++}),m>0)return m}return 0}function Mt(o){if(et()!==0||!o)return!1;var n=o.querySelector(".box-empty-cart");if(!n)return!1;var t=getComputedStyle(n);return!(t.display==="none"||t.visibility==="hidden")}function qt(o){if(!o)return!1;var n=et();if(n===0)return!1;var t=0;return o.querySelectorAll(".cart-item").forEach(function(e){e.closest(".mm-cart-empty-wrapper")||t++}),t>0}function It(o){if(o){o.classList.remove("mm-cart-has-empty-enhancement");var n=o.querySelector(":scope > .mm-cart-empty-wrapper");n&&n.remove()}}function Hn(o){if(o){var n=o.querySelector(".content-cart");if(n){if(qt(n)){It(n);return}var t=n.querySelectorAll(".cart-item").length===0;if(!(!Mt(n)&&!(t&&et()===0))&&!n.querySelector(":scope > .mm-cart-empty-wrapper")){var e=document.createElement("div");e.className="mm-cart-empty-wrapper";for(var r="",m=0;m<zt.length;m++){var d=zt[m];r+='<a class="mm-cart-suggestion-card" href="'+d.href+'"><span class="mm-cart-suggestion-thumb"><img src="'+d.img+'" alt="" loading="lazy" width="80" height="80"/></span><span class="mm-cart-suggestion-body"><span class="mm-cart-suggestion-name">'+d.name+'</span><span class="mm-cart-suggestion-price"><span class="mm-cart-suggestion-price-from">'+d.priceFrom+'</span><span class="mm-cart-suggestion-price-to">'+d.priceTo+"</span></span></span></a>"}e.innerHTML='<div class="mm-cart-empty-hero"><div class="mm-cart-empty-icon">'+wt+'</div><h3 class="mm-cart-empty-title">Seu carrinho está vazio</h3><p class="mm-cart-empty-copy">Dê uma olhada nos móveis que nossos clientes mais amam.</p></div><div class="mm-cart-suggestions"><span class="mm-cart-suggestions-label">Você pode gostar de</span><div class="mm-cart-suggestions-grid">'+r+"</div></div>",n.classList.add("mm-cart-has-empty-enhancement"),n.appendChild(e)}}}}function Jn(o){try{document.querySelectorAll("#cart-preview-area .item-ctn, .carrinho-container .item-ctn, .item-ctn").forEach(function(n){n.textContent="0"})}catch{}o&&Hn(o)}window.__mmForceEmptyCartState=Jn;function vt(o,n){try{if(typeof Zord>"u"||!Zord.checkout||typeof Zord.checkout.atualizaPreview!="function"){n();return}var t=et();if(t===0){n();return}if(o.querySelector(".cart-item")){n();return}Zord.checkout.atualizaPreview();var e=Date.now(),r=2e3;(function m(){if(o.querySelector(".cart-item")){n();return}if(Date.now()-e>=r){n();return}setTimeout(m,50)})()}catch{n()}}function a(){if(window.innerWidth<=767){var o=document.querySelector("#cart-preview-area a.link-cart")||document.querySelector('#cart-preview-area a[href*="/checkout/cart"]');if(o){let m=function(x){!x||x.dataset.mmCloseWired||(x.dataset.mmCloseWired="1",x.addEventListener("click",function(q){var N=q.target;if(!(!N||!N.closest)){var B=N.closest('[class*="text-error-700"]');if(!B)for(var _=N,O=0;O<4&&_&&_!==x;O++){if((_.textContent||"").trim()==="Fechar"){B=_;break}_=_.parentElement}B&&(q.preventDefault(),q.stopImmediatePropagation(),x.classList.remove("translate-x-[0]"),x.classList.add("translate-x-[100%]"),delete x.dataset.mmUserOpened,document.body.style.overflow="")}},!0))},d=function(){var x=document.querySelector('#cart-preview-area > div[class*="z-[9999]"]');x&&(x.dataset.mmUserOpened="1",x.className.indexOf("translate-x-[0]")===-1&&(x.classList.remove("translate-x-[100%]"),x.classList.add("translate-x-[0]")),m(x))};document.documentElement.dataset.mmCartOpening="1",o.dataset.mmBypass="1",o.click(),delete o.dataset.mmBypass,setTimeout(d,120),setTimeout(d,380),setTimeout(d,700),setTimeout(function(){delete document.documentElement.dataset.mmCartOpening},800);return}window.location.href="/checkout/cart";return}var n=ft();if(n){vt(n,function(){l(n)});return}var t=0,e=14,r=!1;(function m(){if(t++,n=ft(),n){vt(n,function(){l(n)});return}if(!r&&t>=2){r=!0;try{typeof Zord<"u"&&Zord.checkout&&typeof Zord.checkout.atualizaPreview=="function"&&Zord.checkout.atualizaPreview()}catch{}}t<e?setTimeout(m,200):window.location.href="/checkout/cart"})()}function l(o){var n=xt(o);n||(Ln(o),Et(o)),Hn(o);var t=o.querySelector(".content-cart");if(t&&!t.dataset.mmObserved){t.dataset.mmObserved="1";var e=new MutationObserver(function(){Hn(o)});e.observe(t,{childList:!0,subtree:!0,attributes:!1})}if(n){o.classList.remove("translate-x-[100%]"),o.classList.add("translate-x-[0]");var r=o.querySelector('.group.cursor-pointer, [class*="text-error-700"]');r&&!r.dataset.mmWired&&(r.dataset.mmWired="1",r.addEventListener("click",function(m){m.preventDefault(),m.stopPropagation(),p()},!0))}else o.classList.add("mm-drawer-open");!n&&!Sn&&(Sn=document.createElement("div"),Sn.id="mm-h-cart-scrim",Sn.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:150;opacity:0;transition:opacity 320ms;",Sn.addEventListener("click",p),document.body.appendChild(Sn),requestAnimationFrame(function(){Sn.style.opacity="1"})),document.body.style.overflow="hidden"}function p(){var o=ft();if(o&&(xt(o)?(o.classList.remove("translate-x-[0]"),o.classList.add("translate-x-[100%]")):o.classList.remove("mm-drawer-open")),Sn){Sn.style.opacity="0";var n=Sn;setTimeout(function(){n&&n.parentNode&&n.parentNode.removeChild(n)},320),Sn=null}document.body.style.overflow=""}ct&&ct.addEventListener("click",function(o){o.preventDefault(),a()}),window.innerWidth<=767&&(function o(){var n=document.querySelector('#cart-preview-area > [class*="z-[9999]"]');if(!n){setTimeout(o,500);return}if(!n.dataset.mmGuardWired){n.dataset.mmGuardWired="1";var t=new MutationObserver(function(){if(n.className.indexOf("translate-x-[0]")===-1){delete n.dataset.mmUserOpened;return}document.documentElement.dataset.mmCartOpening||n.dataset.mmUserOpened||(n.classList.remove("translate-x-[0]"),n.classList.add("translate-x-[100%]"))});t.observe(n,{attributes:!0,attributeFilter:["class"]})}})(),document.addEventListener("click",function(o){var n=o.target.closest('#cart-preview-area a.link-cart, header.ra-header > .header-bottom a[href*="/checkout/cart"], header.ra-header > .header-bottom a[href*="carrinho"]');if(n){if(n.dataset.mmBypass)return;o.preventDefault(),o.stopPropagation(),a()}},!0);var v=document.querySelector("header.ra-header > .header-bottom");v&&v.addEventListener("click",function(o){var n=o.target.closest('a[href*="carrinho"], a[href*="/checkout/cart"], [class*="carrinho"]');n&&(o.preventDefault(),o.stopPropagation(),a())},!0),document.addEventListener("keydown",function(o){o.key==="Escape"&&Sn&&p()});var C=document.getElementById("mm-h-cart-count"),z=document.getElementById("mm-h-cart");function A(){if(C){var o=et();o>0?(C.textContent=o>99?"99+":String(o),C.hidden=!1):C.hidden=!0,z&&z.setAttribute("aria-label","Carrinho, "+o+" "+(o===1?"item":"itens"));var n=ft();n&&n.dataset.mmLifted&&Hn(n)}}window.addEventListener("reactItemAddedToCart",A),typeof jQuery<"u"&&(jQuery(document).on("reactItemAddedToCart",A),jQuery(document).ajaxComplete(function(o,n,t){t&&t.url&&t.url.indexOf("checkout/cart")!==-1&&setTimeout(A,150)})),setTimeout(A,500),setTimeout(A,2e3),setTimeout(A,5e3);function X(){var o=document.querySelector("#cart-preview-area .item-ctn, .carrinho-container .item-ctn");if(!(!o||o.dataset.mmObserved)){o.dataset.mmObserved="1";var n=new MutationObserver(A);n.observe(o,{childList:!0,characterData:!0,subtree:!0})}}X(),setTimeout(X,1e3),setTimeout(X,3e3);var J=new MutationObserver(function(o){for(var n=0;n<o.length;n++)for(var t=o[n].addedNodes,e=0;e<t.length;e++){var r=t[e];if(r.nodeType===1){var m=r.classList&&r.classList.contains("popup-adicionado-ao-carrinho")||r.querySelector&&r.querySelector(".popup-adicionado-ao-carrinho");if(m){setTimeout(A,120),setTimeout(A,700);return}}}});J.observe(document.body,{childList:!0,subtree:!0});var U=-1;setInterval(function(){var o=et();o!==U&&(U=o,A())},1e3);var an=0,Y=!1,mn=24;function cn(){var o=window.scrollY,n=o-an;o>mn&&n>0?i.classList.add("is-compact"):(o<=mn||n<0)&&i.classList.remove("is-compact"),an=o,Y=!1}window.addEventListener("scroll",function(){Y||(requestAnimationFrame(cn),Y=!0)},{passive:!0})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b()})(),(function(){if(!document.getElementById("mm-org-schema")){var D=document.querySelector('.logo img, header img[alt*="logo" i], header img[alt*="Madeira" i]'),j=D&&D.getAttribute("src")||"";j&&j.indexOf("http")!==0&&(j="https://www.madeiramania.com.br"+j);var I={"@context":"https://schema.org","@type":"OnlineStore","@id":"https://www.madeiramania.com.br/#organization",name:"Madeira Mania",url:"https://www.madeiramania.com.br",description:"Loja online de móveis com preços abaixo dos marketplaces. Racks, mesas, cristaleiras, sofás, camas e estantes com entrega para todo o Brasil. Até 12x sem juros ou 7% de desconto no PIX.",sameAs:["https://www.instagram.com/madeiramaniabr/","https://www.facebook.com/madeiramaniabr/","https://www.reclameaqui.com.br/empresa/madeira-mania-comercio-de-moveis-ltda/","https://www.youtube.com/@madeiramaniabr","https://www.tiktok.com/@madeiramaniabr"],contactPoint:[{"@type":"ContactPoint",telephone:"+55-11-91529-9488",contactType:"customer service",availableLanguage:"Portuguese"},{"@type":"ContactPoint",url:"https://wa.me/5511915299488",contactType:"customer service",description:"WhatsApp"}],hasMerchantReturnPolicy:{"@type":"MerchantReturnPolicy",applicableCountry:"BR",returnPolicyCategory:"https://schema.org/MerchantReturnFiniteReturnWindow",merchantReturnDays:7,returnMethod:"https://schema.org/ReturnByMail"}};j&&j.indexOf("http")===0&&(I.logo=j);var g=document.createElement("script");g.type="application/ld+json",g.id="mm-org-schema",g.textContent=JSON.stringify(I),document.head.appendChild(g)}})(),(function b(){b._retries=(b._retries||0)+1;var D=document.querySelector("#produto-react-app");if(!D||!D.querySelector(".informacoes-compra-produto")){b._retries<30&&setTimeout(b,500);return}if((function(){var g=D.querySelector("#container-swiper"),i=D.querySelector(".swiper-pagination");if(!g||!i)return;var s=i.querySelectorAll(".swiper-pagination-bullet");if(s.length<2)return;var u=D.querySelector(".gallery-main");if(u)for(var f=u.querySelectorAll(".button-prev, .button-next"),h=0;h<f.length;h++)f[h].style.display="none";var E=document.createElement("div");E.id="mm-gallery-counter",E.style.cssText=["position: absolute","top: 12px","left: 12px","background: rgba(255,255,255,0.85)","color: #333","font-size: 12px","font-weight: 500","padding: 3px 10px","border-radius: 12px","z-index: 10","pointer-events: none","font-family: -apple-system, BlinkMacSystemFont, sans-serif","letter-spacing: 0.5px"].join(";"),u&&(u.style.position="relative",u.appendChild(E));function w(){var L=i.querySelector(".swiper-pagination-bullet-active"),R=i.querySelectorAll(".swiper-pagination-bullet");if(!(!L||!R.length)){var c=Array.prototype.indexOf.call(R,L)+1;E.textContent=c+" / "+R.length}}w();var F=new MutationObserver(w);F.observe(i,{subtree:!0,attributes:!0,attributeFilter:["class"]})})(),(function(){var g=D.querySelector(".avaliacoes");if(g){for(var i=document.querySelectorAll("script:not([src])"),s=0,u=0,f=0;f<i.length;f++){var h=i[f].textContent;if(!(h.indexOf("Zord.avaliacoes")===-1&&h.indexOf("produtoAvaliacoes")===-1)){var E=h.match(/produtoAvaliacoes\s*:\s*(\d+)/),w=h.match(/\bnota\s*:\s*(?:Number\()?([\d.]+)/);if(E&&(s=parseInt(E[1],10)),w&&(u=parseFloat(w[1])),s>0)break}}if(s===0){g.style.display="none";return}for(var F=(u%1===0,u.toFixed(1)),L="",R=1;R<=5;R++)R<=Math.floor(u)||R-u<1&&R-u>0?L+='<span style="color:#f5a623;font-size:14px;">&#9733;</span>':L+='<span style="color:#ddd;font-size:14px;">&#9733;</span>';var c=s===1?"avaliação":"avaliações";g.innerHTML='<a href="#avaliacoes" style="display:inline-flex;align-items:center;gap:4px;text-decoration:none;color:#555;font-size:13px;">'+L+' <span style="font-weight:600;color:#1a1a1a;">'+F+'</span> <span style="color:#777;">('+s+" "+c+")</span></a>",g.style.display="",g.style.marginTop="4px"}})(),(function(){var g=D.querySelector("h1");if(g){var i=g.parentElement.querySelector(".text-secondary-700.text-xs");if(i){var s=g.textContent.toLowerCase().replace(/\s+/g," ").trim(),u=i.textContent.toLowerCase().replace(/\s+/g," ").trim(),f=u.split(/[\s\-:,]+/).filter(function(E){return E.length>2}),h=f.filter(function(E){return s.indexOf(E)!==-1});h.length>=f.length*.6&&(i.style.display="none")}}})(),(function(){var g=D.querySelector(".informacoes-compra-produto");if(!g||document.getElementById("mm-action-row"))return;var i=g.querySelector(".salvar-favoritos"),s=g.querySelector(".exibe-botao-whatsapp"),u=g.querySelector(".compartilhar-produto");if(!i&&!s&&!u)return;var f=document.createElement("div");f.id="mm-action-row";function h(){var M=document.createElementNS("http://www.w3.org/2000/svg","svg");M.setAttribute("width","18"),M.setAttribute("height","18"),M.setAttribute("viewBox","0 0 24 24"),M.setAttribute("fill","none"),M.setAttribute("stroke","currentColor"),M.setAttribute("stroke-width","2"),M.setAttribute("stroke-linecap","round"),M.setAttribute("stroke-linejoin","round");var T=document.createElementNS("http://www.w3.org/2000/svg","path");return T.setAttribute("d","M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"),M.appendChild(T),M}function E(){var M=document.createElementNS("http://www.w3.org/2000/svg","svg");M.setAttribute("width","18"),M.setAttribute("height","18"),M.setAttribute("viewBox","0 0 24 24"),M.setAttribute("fill","none"),M.setAttribute("stroke","currentColor"),M.setAttribute("stroke-width","2"),M.setAttribute("stroke-linecap","round"),M.setAttribute("stroke-linejoin","round");var T=document.createElementNS("http://www.w3.org/2000/svg","path");return T.setAttribute("d","M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"),M.appendChild(T),M}if(i){var w=document.createElement("div");w.className="salvar-favoritos";var F=document.createElement("button");F.setAttribute("aria-label","Favoritar"),F.appendChild(E()),F.addEventListener("click",function(){var M=i.querySelector("button");M&&M.click()}),w.appendChild(F),f.appendChild(w),i.style.cssText+=";position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;"}if(s&&(s.style.display="none"),u){var L=document.createElement("div");L.className="compartilhar-produto";var R=document.createElement("button");R.setAttribute("aria-label","Compartilhar"),R.appendChild(h()),R.addEventListener("click",function(){var M=u.querySelector("button");M&&M.click()}),L.appendChild(R),f.appendChild(L),u.style.cssText+=";position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;"}var c=g.querySelector("#area-comprar");if(c){for(var G=c,H=c.nextElementSibling;H;){var S=window.getComputedStyle(H).position;if(S==="fixed"||S==="sticky")G=H,H=H.nextElementSibling;else break}G.parentNode.insertBefore(f,G.nextSibling)}else g.appendChild(f)})(),(function(){var g=D.querySelector(".comprar-fixo.area-compra-float");if(!(!g||g.querySelector("#mm-sticky-old-price"))){var i=D.querySelector(".informacoes-compra-produto");if(i){var s=i.querySelector(".line-through");if(s){var u=s.textContent.trim(),f=g.querySelector(".price-fixed");if(f){var h=document.createElement("span");h.id="mm-sticky-old-price",h.textContent=u,h.style.cssText=["text-decoration: line-through","color: #999","font-size: 11px","display: block","line-height: 1.2","margin-bottom: 1px"].join(";"),f.insertBefore(h,f.firstChild)}}}}})(),(function(){var g=D.querySelector(".informacoes-compra-produto");if(!(!g||document.getElementById("mm-trust-badges"))){var i=g.querySelector("#area-comprar");if(i){var s=document.createElement("div");s.id="mm-trust-badges",s.style.cssText=["display: flex","justify-content: center","align-items: center","flex-wrap: wrap","gap: 6px 10px","padding: 8px 0","margin-top: 2px"].join(";");var u=[{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',text:"Compra Segura"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',text:"Troca 7 dias"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10" stroke="#4b664a"/></svg>',text:"Reclame Aqui"}],f="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:#777;white-space:nowrap;";u.forEach(function(E,w){var F=document.createElement("span");if(F.style.cssText=f,F.innerHTML=E.icon+" "+E.text,s.appendChild(F),w<u.length-1){var L=document.createElement("span");L.textContent="|",L.style.cssText="color:#ddd;font-size:10px;",s.appendChild(L)}});for(var h=i.nextElementSibling;h&&window.getComputedStyle(h).position==="fixed";)h=h.nextElementSibling;h?g.insertBefore(s,h):g.appendChild(s)}}})(),(function(){var g=D.querySelector(".informacoes-compra-produto");if(!(!g||document.getElementById("mm-whatsapp-cta"))){var i=(document.querySelector("#prod-nome")||{}).value||"",s=(document.querySelector("#prod-valor")||{}).value||"",u=window.location.origin+window.location.pathname+(/^#derivacao=/.test(window.location.hash)?window.location.hash:""),f="5511915299488",h="";s&&(h=parseFloat(s).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}));var E="Olá! Tenho interesse no "+i.trim();h&&(E+=" ("+h+")"),E+=". "+u;var w="https://api.whatsapp.com/send?phone="+f+"&text="+encodeURIComponent(E),F=document.createElement("a");F.id="mm-whatsapp-cta",F.href=w,F.target="_blank",F.rel="noopener noreferrer";var L='<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';F.innerHTML=L+"<span>Compre pelo WhatsApp</span>";var R=document.getElementById("mm-action-row"),c=document.getElementById("mm-trust-badges"),G=R||c;G&&G.parentNode===g&&g.insertBefore(F,G.nextElementSibling)}})(),(function(){var g=D.querySelector(".informacoes-compra-produto");if(!(!g||document.getElementById("mm-stock-indicator"))){for(var i=10,s=document.querySelectorAll("script:not([src])"),u=-1,f=0;f<s.length;f++){var h=s[f].textContent,E=h.match(/"qtde_estoque"\s*:\s*(\d+)/);if(E){u=parseInt(E[1],10);break}}var w=u-i;if(!(w<1||w>9)){var F=document.createElement("div");F.id="mm-stock-indicator",F.style.cssText=["display: flex","align-items: center","gap: 6px","padding: 8px 12px","background: #fff8f0","border: 1px solid #fde0c2","border-radius: 8px","font-size: 13px","color: #c65d00","font-weight: 500","margin-top: 4px"].join(";");var L=w===1?"unidade":"unidades";F.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c65d00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>Restam apenas <strong>'+w+"</strong> "+L+" em estoque";var R=g.firstElementChild;R&&R.parentNode.insertBefore(F,R.nextElementSibling)}}})(),(function(){if(!document.getElementById("mm-trust-block")){var g=window.innerWidth>=769,i=document.createElement("div");i.id="mm-trust-block",i.style.cssText=["background: #f7f8f7","display: flex","align-items: center","justify-content: center","gap: "+(g?"40px":"10px"),"padding: "+(g?"14px 24px":"12px 16px"),g?"flex-direction: row":"flex-direction: column",g?"border-top: 1px solid #e8ece8":"border-radius: 10px",g?"border-bottom: 1px solid #e8ece8":"",g?"margin: 0":"margin-top: 10px"].filter(Boolean).join(";");var s=[{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',label:"Atendimento",desc:"Seg à Sex 8h-18h"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',label:"Garantia",desc:"12 meses fabricação"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',label:"Trocas",desc:"Até 7 dias"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',label:"Frete",desc:"Todo o Brasil"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',label:"12x sem juros",desc:"No cartão"}],u="display:flex;align-items:center;gap:8px;",f="font-size:13px;font-weight:600;color:#1a1a1a;line-height:1.2;",h="font-size:11px;color:#777;line-height:1.2;";if(s.forEach(function(R){var c=document.createElement("div");c.style.cssText=u,c.innerHTML=R.icon+'<div><div style="'+f+'">'+R.label+'</div><div style="'+h+'">'+R.desc+"</div></div>",i.appendChild(c)}),g){var E=document.querySelector("#pagina-produto-react-app");if(E&&E.nextSibling)E.parentNode.insertBefore(i,E.nextSibling);else{var w=document.querySelector(".main-produto");w&&w.appendChild(i)}}else{var F=D.querySelector(".informacoes-compra-produto"),L=F?F.querySelector(".calculo-frete"):null;L?L.parentNode.insertBefore(i,L.nextElementSibling):F&&F.appendChild(i)}}})(),(function(){var g=D.querySelector(".informacoes-compra-produto");if(!g||document.getElementById("mm-inline-payments"))return;var i=g.querySelector(".form-pag-link");if(!i)return;var s=parseFloat(i.getAttribute("data-valor"))||0,u=parseFloat(i.getAttribute("data-valor-pix"))||0;if(s<=0)return;for(var f=[],h=1;h<=12;h++)f.push({vezes:h,valor:(s/h).toFixed(2).replace(".",",")});function E(fn){return"R$ "+fn.toFixed(2).replace(".",",")}var w=s-u,F=document.createElement("div");F.id="mm-inline-payments",F.style.cssText=["padding: 12px 0","border-top: 1px solid #f0f0f0","margin-top: 4px"].join(";");var L=window.innerWidth>=769,R="display:flex;align-items:center;gap:6px;padding:"+(L?"2px":"4px")+" 0;font-size:13px;color:#444;",c="width:5px;height:5px;border-radius:50%;background:#4b664a;flex-shrink:0;",G='<div style="'+R+'"><span style="'+c+'"></span><span><strong style="color:#1a1a1a;">PIX: '+E(u)+"</strong>"+(w>0?' <span style="color:#2e7d32;font-size:12px;font-weight:600;">(economize '+E(w)+")</span>":"")+"</span></div>";if(L)F.innerHTML=G+'<button id="mm-toggle-parcelas" style="background:none;border:none;color:#4b664a;font-size:13px;font-weight:500;padding:2px 0 0;cursor:pointer;display:flex;align-items:center;gap:4px;">Ver todas as parcelas <span style="font-size:10px;">&#9660;</span></button><div id="mm-more-parcelas" style="display:none;"></div>';else{for(var H="",S=0;S<3;S++)H+='<div style="'+R+'"><span style="'+c+'"></span><span>'+f[S].vezes+"x de R$ "+f[S].valor+" sem juros</span></div>";F.innerHTML=G+H+'<button id="mm-toggle-parcelas" style="background:none;border:none;color:#4b664a;font-size:13px;font-weight:500;padding:6px 0 0;cursor:pointer;display:flex;align-items:center;gap:4px;">Ver todas as parcelas <span style="font-size:10px;">&#9660;</span></button><div id="mm-more-parcelas" style="display:none;"></div>'}for(var M="",T=L?0:3,P=T;P<12;P++)M+='<div style="'+R+'"><span style="'+c+'"></span><span>'+f[P].vezes+"x de R$ "+f[P].valor+" sem juros</span></div>";var en=i.closest("div");en&&(en.parentNode.insertBefore(F,en),i.style.display="none");var on=document.getElementById("mm-more-parcelas");on&&(on.innerHTML=M);var pn=document.getElementById("mm-toggle-parcelas");pn&&on&&pn.addEventListener("click",function(){var fn=on.style.display!=="none";on.style.display=fn?"none":"block",pn.innerHTML=fn?'Ver todas as parcelas <span style="font-size:10px;">&#9660;</span>':'Ver menos <span style="font-size:10px;">&#9650;</span>'})})(),(function(){var g=document.querySelector(".recomendacao-ctn-0.accordion"),i=document.querySelector(".descricao-produto.accordion");if(!(!g||!i)){var s=g.parentNode;if(!(!s||s!==i.parentNode)){var u=Array.prototype.slice.call(s.children),f=u.indexOf(g),h=u.indexOf(i);f<h&&s.insertBefore(i,g)}}})(),(function(){var g=document.querySelector("#cep");if(!g)return;var i="mm_cep",s=g.closest(".area-calculo");if(s){var u=s.querySelector("button");u&&u.addEventListener("click",function(){var L=g.value.replace(/\D/g,"");if(L.length===8)try{localStorage.setItem(i,L)}catch{}})}var f=null;try{f=localStorage.getItem(i)}catch{}if(!f||f.length!==8||g.value.replace(/\D/g,"").length>0)return;var h=f.substring(0,5)+"-"+f.substring(5);function E(L,R){L.focus();try{L.setSelectionRange(0,(L.value||"").length)}catch{}try{document.execCommand("delete")}catch{}try{document.execCommand("insertText",!1,R)}catch{}}function w(){var L=g.closest(".calculo-frete");return!!(L&&/R\$\s*\d/.test(L.innerText))}function F(L){L<=0||w()||(E(g,h),setTimeout(function(){if(!w()){var R=g.closest(".area-calculo"),c=R&&R.querySelector("button:not([disabled])");c&&c.click(),setTimeout(function(){w()||F(L-1)},2e3)}},2500))}setTimeout(function(){F(3)},600)})(),(function(){for(var g=document.querySelectorAll('.exibe-botao-whatsapp a[href*="whatsapp"]'),i=0;i<g.length;i++){var s=g[i].getAttribute("href");s&&s.indexOf("null")!==-1&&g[i].setAttribute("href",s.replace(/\s*null\s*/g," ").replace(/\s{2,}/g," "))}var u=document.querySelector(".exibe-botao-whatsapp");if(u){var f=new MutationObserver(function(){var h=u.querySelector('a[href*="whatsapp"]');h&&h.href.indexOf("null")!==-1&&h.setAttribute("href",h.getAttribute("href").replace(/\s*null\s*/g," ").replace(/\s{2,}/g," "))});f.observe(u,{subtree:!0,attributes:!0,attributeFilter:["href"]})}})(),(function(){var g=D.querySelector(".informacoes-compra-produto");if(!(!g||document.getElementById("mm-envio-badge"))){for(var i=!1,s=D.querySelectorAll(".tag-produto .text-tag, .tag-produto"),u=0;u<s.length;u++)if(s[u].textContent.toLowerCase().indexOf("envio")!==-1){i=!0;break}if(!i)for(var f=document.querySelectorAll("script:not([src])"),h=0;h<f.length;h++){var E=f[h].textContent.match(/"qtde_estoque"\s*:\s*(\d+)/);if(E){parseInt(E[1],10)>10&&(i=!0);break}}if(i){var w=document.createElement("div");w.id="mm-envio-badge",w.style.cssText=["display: inline-flex","align-items: center","gap: 6px","padding: 4px 0","font-size: 13px","color: #1a1a1a","margin-top: 4px"].join(";"),w.innerHTML='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c65d00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span><strong style="color:#1a1a1a;">Pronta entrega</strong> <span style="color:#777;font-weight:400;">·</span> <span style="color:#555;font-weight:400;">Enviamos em 24h</span></span>';var F=g.firstElementChild;F&&F.nextElementSibling&&F.parentNode.insertBefore(w,F.nextElementSibling)}}})(),(function(){for(var g=D.querySelectorAll(".tag-1.tag-produto"),i=0;i<g.length;i++){var s=g[i].textContent.trim();(s.indexOf("%")!==-1||s.indexOf("OFF")!==-1)&&(g[i].style.display="none")}})(),(function(){for(var g=document.querySelectorAll('a[href*="avaliacoes"], a[href="#avaliacoes"]'),i=0;i<g.length;i++)g[i].addEventListener("click",function(s){s.preventDefault();var u=document.querySelector("#avaliacoes")||document.querySelector(".container-avaliacoes");u&&u.scrollIntoView({behavior:"smooth",block:"start"})})})(),(function(){var g=D.querySelector("h1");if(!(!g||document.getElementById("mm-brand"))){var i=document.querySelector("#prod-marca");if(!(!i||!i.value||i.value.trim()==="")){var s=document.createElement("span");s.id="mm-brand",s.style.cssText="display:block;font-size:13px;color:#777;font-weight:400;margin-top:2px;",s.textContent="por "+i.value.trim();var u=g.parentElement;if(u){var f=g.nextElementSibling;f?u.insertBefore(s,f):u.appendChild(s)}}}})(),(function(){var g=document.getElementById("mm-trust-badges");if(g){for(var i=g.querySelectorAll("span"),s=0;s<i.length;s++)if(i[s].textContent.indexOf("Reclame")!==-1){var u=document.querySelector('footer .reclame-aqui a, footer a[href*="reclameaqui"]'),f=u?u.href:"https://www.reclameaqui.com.br/empresa/madeira-mania-comercio-de-moveis-ltda/";i[s].innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10" stroke="#4b664a"/></svg> <a href="'+f+'" target="_blank" rel="noopener" style="color:#777;text-decoration:none;">RA Verificada</a>'}}})(),(function(){var g=D.querySelector(".informacoes-compra-produto");if(g){var i=g.querySelector(".calculo-frete");if(i){g.style.cssText+=";display:flex !important;flex-direction:column !important;",i.style.cssText+=";order:20 !important;";var s=document.getElementById("mm-trust-block");s&&(s.style.cssText+=";order:30 !important;")}}})(),(function(){var g=D.querySelector(".informacoes-compra-produto");if(!(!g||document.getElementById("mm-mini-specs"))){var i=document.querySelector(".descricao-produto"),s={};if(i)for(var u=i.querySelectorAll("td"),f=0;f<u.length-1;f+=2){var h=u[f].textContent.trim().toLowerCase(),E=u[f+1].textContent.trim();h.indexOf("largura")!==-1&&(s.largura=E),h.indexOf("altura")!==-1&&(s.altura=E),h.indexOf("profundidade")!==-1&&(s.profundidade=E),h.indexOf("material")!==-1&&(s.material=E),h.indexOf("dobradi")!==-1&&(s.dobradicas=E),(h.indexOf("pes")!==-1||h.indexOf("pés")!==-1)&&(s.pes=E)}if(!(!s.largura&&!s.material)){var w=[];if(s.material&&w.push(s.material),s.dobradicas&&w.push("Dobradiças "+s.dobradicas),s.pes&&w.push("Pés: "+s.pes),s.largura&&w.push(s.largura+" × "+(s.altura||"")+" × "+(s.profundidade||"")),w.length!==0){var F=document.createElement("div");F.id="mm-mini-specs",F.style.cssText="padding:8px 0;border-top:1px solid #f0f0f0;margin-top:4px;";var L="";w.forEach(function(c){L+='<div style="display:flex;align-items:center;gap:6px;padding:2px 0;font-size:13px;color:#555;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polyline points="20 6 9 17 4 12"/></svg><span>'+c+"</span></div>"}),F.innerHTML=L;var R=g.querySelector("#area-comprar");R&&g.insertBefore(F,R)}}}})(),(function(){if(window.innerWidth<769||document.getElementById("mm-desktop-sticky"))return;var g=D.querySelector(".informacoes-compra-produto");if(!g)return;var i=g.querySelector(".line-through"),s=(document.querySelector("#prod-valor-principal")||{}).value,u=(document.querySelector("#prod-valor")||{}).value,f=(document.querySelector("#prod-nome")||{}).value||"",h=f.split(" - ")[0]||f;if(!s)return;var E=i?i.textContent.trim():"",w=parseFloat(s).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),F=u?parseFloat(u).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}):"",L=u?(parseFloat(u)/12).toFixed(2).replace(".",","):"",R=document.createElement("div");R.id="mm-desktop-sticky",R.style.cssText=["position: fixed","top: -60px","left: 0","width: 100%","height: 56px","background: #ffffff","border-bottom: 1px solid #e8ece8","box-shadow: 0 2px 8px rgba(0,0,0,0.06)","z-index: 100","display: flex","align-items: center","justify-content: center","padding: 0 24px","transition: top 0.25s ease","font-family: -apple-system, BlinkMacSystemFont, sans-serif"].join(";");var c="display:flex;align-items:center;gap:16px;max-width:1200px;width:100%;",G="font-size:14px;font-weight:500;color:#1a1a1a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:300px;",H="display:flex;align-items:center;gap:8px;margin-left:auto;",S="text-decoration:line-through;color:#999;font-size:12px;",M="font-size:15px;font-weight:600;color:#1a1a1a;",T="font-size:12px;color:#666;",P="display:inline-flex;align-items:center;justify-content:center;padding:8px 20px;background:#4b664a;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer;white-space:nowrap;";R.innerHTML='<div style="'+c+'"><span style="'+G+'">'+h+'</span><div style="'+H+'">'+(E?'<span style="'+S+'">'+E+"</span>":"")+'<span style="'+M+'">'+w+' <small style="font-weight:400;font-size:11px;color:#666;">PIX</small></span>'+(L?'<span style="'+T+'">12x R$ '+L+"</span>":"")+'</div><button id="mm-desktop-sticky-btn" style="'+P+'">Comprar</button></div>',document.body.appendChild(R);var en=document.getElementById("mm-desktop-sticky-btn");en&&en.addEventListener("click",function(){var fn=D.querySelector(".btn-comprar");fn&&fn.click()});var on=g.querySelector("#area-comprar");if(!on)return;function pn(){var fn=on.getBoundingClientRect();R.style.top=fn.bottom<0?"0px":"-60px"}window.addEventListener("scroll",pn,{passive:!0}),pn()})(),(function(){var g=[".selos-seguranca",".formas-pagto"];g.forEach(function(i){var s=document.querySelector("footer "+i);s&&s.classList.contains("closed")&&(s.classList.remove("closed"),s.classList.add("open"))})})(),window.innerWidth>=769){var j=D.querySelector(".informacoes-compra-produto");j&&(j.style.setProperty("gap","12px","important"),j.style.setProperty("row-gap","12px","important"))}document.body.classList.add("mm-ready")})();var Ft=document.currentScript;(function b(){b._retries=(b._retries||0)+1;var D=document.querySelector("#produto-react-app");if(!D||!D.querySelector(".informacoes-compra-produto")){b._retries<30&&setTimeout(b,500);return}if(!document.getElementById("mm-product-schema")){var j=D.querySelector("h1"),I=j?j.textContent.trim():"";if(I){var g=document.querySelector('link[rel="canonical"]'),i=g?g.href:location.href.split("?")[0],s=document.querySelector("#prod-marca"),u=s?s.value.trim():"";!u&&window.dataLayer&&window.dataLayer[0]&&(u=window.dataLayer[0].brand||"");var f=D.querySelector(".form-pag-link"),h=document.querySelector("#prod-valor-principal"),E=document.querySelector("#prod-valor"),w=0,F=0;f&&(w=parseFloat(f.getAttribute("data-valor-pix"))||0,F=parseFloat(f.getAttribute("data-valor"))||0),!F&&E&&(F=parseFloat(E.value)||0),!w&&h&&(w=parseFloat(h.value)||0);var L=w>0?w:F;if(!(L<=0)){var R="";window.dataLayer&&window.dataLayer[0]&&(R=window.dataLayer[0].sku||"");var c="",G="";window.dataLayer&&window.dataLayer[0]&&(c=window.dataLayer[0].category||"",G=window.dataLayer[0].category2||"");for(var H=document.querySelector("#prod-deposito"),S=H?H.value==="1":!0,M=[],T=D.querySelectorAll(".gallery-main img, #block-imagem img"),P=0;P<T.length;P++){var en=T[P].getAttribute("src")||T[P].getAttribute("data-src")||"";en&&en.indexOf("http")===0&&M.indexOf(en)===-1&&M.push(en)}if(M.length===0){var on=document.querySelector('meta[property="og:image"]');on&&on.content&&M.push(on.content)}var pn=document.querySelector('meta[name="description"]'),fn=pn?pn.content.trim():"";if(!fn){var Vn=document.querySelector(".descricao-produto .accordion-content p");Vn&&(fn=Vn.textContent.trim().substring(0,500))}for(var Un=0,Tn=0,hn=document.querySelectorAll("script:not([src])"),Bn=0;Bn<hn.length;Bn++){var In=hn[Bn].textContent;if(!(In.indexOf("Zord.avaliacoes")===-1&&In.indexOf("produtoAvaliacoes")===-1)){var $n=In.match(/produtoAvaliacoes\s*:\s*(\d+)/),Dn=In.match(/\bnota\s*:\s*(?:Number\()?([\d.]+)/);$n&&(Un=parseInt($n[1],10)),Dn&&(Tn=parseFloat(Dn[1]))}}var xn={"@context":"https://schema.org","@type":"Product",name:I,url:i,image:M,description:fn,sku:R,brand:{"@type":"Brand",name:u||"Madeira Mania"},offers:{"@type":"Offer",url:i,price:L.toFixed(2),priceCurrency:"BRL",availability:S?"https://schema.org/InStock":"https://schema.org/OutOfStock",itemCondition:"https://schema.org/NewCondition",seller:{"@type":"Organization",name:"Madeira Mania"},hasMerchantReturnPolicy:{"@type":"MerchantReturnPolicy",applicableCountry:"BR",returnPolicyCategory:"https://schema.org/MerchantReturnFiniteReturnWindow",merchantReturnDays:7,returnMethod:"https://schema.org/ReturnByMail"},shippingDetails:{"@type":"OfferShippingDetails",shippingDestination:{"@type":"DefinedRegion",addressCountry:"BR"},deliveryTime:{"@type":"ShippingDeliveryTime",handlingTime:{"@type":"QuantitativeValue",minValue:1,maxValue:3,unitCode:"DAY"},transitTime:{"@type":"QuantitativeValue",minValue:5,maxValue:20,unitCode:"DAY"}}}}};F>0&&(xn.offers.priceSpecification=[{"@type":"UnitPriceSpecification",price:w>0?w.toFixed(2):L.toFixed(2),priceCurrency:"BRL",name:"PIX"},{"@type":"UnitPriceSpecification",price:(F/12).toFixed(2),priceCurrency:"BRL",name:"12x sem juros",referenceQuantity:{"@type":"QuantitativeValue",value:12,unitCode:"MON"}}]),Un>0&&Tn>0&&(xn.aggregateRating={"@type":"AggregateRating",ratingValue:Tn.toFixed(1),bestRating:"5",worstRating:"1",reviewCount:String(Un)}),c&&(xn.category=c+(G?" > "+G:""));var kn=document.createElement("script");kn.type="application/ld+json",kn.id="mm-product-schema",kn.textContent=JSON.stringify(xn),document.head.appendChild(kn),Ft&&Ft.parentNode&&Ft.parentNode.removeChild(Ft)}}}})();var Tt=document.currentScript;(function b(){b._retries=(b._retries||0)+1;var D=document.querySelector("#produto-react-app"),j=D?D.querySelector("h1"):null;if(!j){b._retries<30&&setTimeout(b,500);return}if(!document.getElementById("mm-breadcrumb-schema")){var I=[],g=1;I.push({"@type":"ListItem",position:g++,name:"Home",item:"https://www.madeiramania.com.br"});var i=document.querySelectorAll('.breadcrumb a, nav[aria-label*="breadcrumb" i] a, .migalha a, .breadcrumb-item a');if(i.length>0)for(var s=0;s<i.length;s++){var u=i[s],f=u.textContent.trim(),h=u.href;!f||f.toLowerCase()==="home"||f.toLowerCase()==="início"||!h||h==="#"||I.push({"@type":"ListItem",position:g++,name:f,item:h})}else if(window.dataLayer&&window.dataLayer[0]){var E=window.dataLayer[0].category||"",w=window.dataLayer[0].category2||"";E&&I.push({"@type":"ListItem",position:g++,name:E,item:"https://www.madeiramania.com.br/"+E.toLowerCase().replace(/\s+/g,"-").replace(/[àáâã]/g,"a").replace(/[éêë]/g,"e").replace(/[íî]/g,"i").replace(/[óôõ]/g,"o").replace(/[úû]/g,"u").replace(/ç/g,"c")}),w&&w!==E&&I.push({"@type":"ListItem",position:g++,name:w,item:"https://www.madeiramania.com.br/"+w.toLowerCase().replace(/\s+/g,"-").replace(/[àáâã]/g,"a").replace(/[éêë]/g,"e").replace(/[íî]/g,"i").replace(/[óôõ]/g,"o").replace(/[úû]/g,"u").replace(/ç/g,"c")})}if(I.push({"@type":"ListItem",position:g,name:j.textContent.trim()}),!(I.length<2)){var F={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:I},L=document.createElement("script");L.type="application/ld+json",L.id="mm-breadcrumb-schema",L.textContent=JSON.stringify(F),document.head.appendChild(L),Tt&&Tt.parentNode&&Tt.parentNode.removeChild(Tt)}}})();var Lt=document.currentScript;(function b(){b._retries=(b._retries||0)+1;var D=document.querySelector(".descricao-produto");if(!D){b._retries<30&&setTimeout(b,500);return}if(!document.getElementById("mm-faq-section")){var j=[{q:"Como funciona a entrega de móveis?",a:"Enviamos para todo o Brasil por transportadora especializada em móveis. O prazo varia de 5 a 20 dias úteis dependendo da sua região. Você pode calcular o frete e prazo exato informando seu CEP na página do produto, acima do botão de compra."},{q:"O móvel vem montado ou precisa montar?",a:"A maioria dos móveis é enviada desmontada para garantir segurança no transporte. Cada produto inclui manual de montagem com instruções passo a passo e todas as ferragens necessárias. Produtos de madeira maciça geralmente exigem apenas encaixe simples de pés ou portas."},{q:"Vocês entregam em apartamento e zona rural?",a:"Sim, entregamos em apartamentos e áreas urbanas em todo o Brasil. Para zonas rurais, a disponibilidade depende da região — consulte informando seu CEP. A entrega é realizada até a portaria ou térreo do edifício."},{q:"E se o produto chegar com defeito?",a:"Você tem 7 dias para solicitar troca ou devolução a partir do recebimento, conforme o Código de Defesa do Consumidor (Art. 49). Basta entrar em contato pelo nosso WhatsApp com fotos do defeito. Todos os produtos possuem garantia de 12 meses contra defeitos de fabricação."},{q:"Quais as formas de pagamento?",a:"Aceitamos PIX com 7% de desconto (processado na hora), cartão de crédito em até 12x sem juros (Visa, Mastercard, Elo, American Express) e boleto bancário. O pagamento via PIX agiliza o despacho do seu pedido."},{q:"O preço de vocês é realmente menor que nos marketplaces?",a:"Sim. Como vendemos direto ao consumidor, sem comissões de marketplace, nossos preços são consistentemente 10% a 25% menores que MadeiraMadeira, Mercado Livre e outros. Compare o mesmo produto pelo código SKU do fabricante e confira a diferença."},{q:"Como funciona a garantia?",a:"Todos os produtos possuem garantia de 12 meses contra defeitos de fabricação, além do direito de arrependimento de 7 dias garantido pelo CDC. Móveis de madeira maciça, com os cuidados adequados, possuem durabilidade superior a 30 anos."}];if(!document.getElementById("mm-faq-styles")){var I=document.createElement("style");I.id="mm-faq-styles",I.textContent=["#mm-faq-section button:focus-visible { outline: 2px solid #4b664a; outline-offset: 2px; border-radius: 4px; }","#mm-faq-section button:active { opacity: 0.7; }","@media (prefers-reduced-motion: reduce) { #mm-faq-section * { transition: none !important; } }"].join(`
`),document.head.appendChild(I)}var g=document.createElement("div");g.id="mm-faq-section",g.style.cssText=["margin: 24px 0","padding: 0 8px"].join(";");var i=document.createElement("h2");i.style.cssText=["font-size: 18px","font-weight: 700","color: #1a1a1a","margin-bottom: 16px","padding-bottom: 8px","border-bottom: 2px solid #4b664a"].join(";"),i.textContent="Perguntas Frequentes",g.appendChild(i);var s=document.createElement("div");s.style.cssText=["display: flex","flex-direction: column","gap: 0"].join(";"),j.forEach(function(w,F){var L=document.createElement("div");L.style.cssText="border-bottom: 1px solid #e8ece8;";var R=document.createElement("button");R.setAttribute("aria-expanded","false"),R.setAttribute("aria-controls","mm-faq-answer-"+F),R.style.cssText=["display: flex","justify-content: space-between","align-items: center","width: 100%","padding: 16px 0","background: none","border: none","cursor: pointer","text-align: left","font-size: 15px","font-weight: 600","color: #1a1a1a","line-height: 1.4","font-family: inherit","-webkit-tap-highlight-color: transparent"].join(";");var c=document.createElement("span");c.textContent=w.q,c.style.cssText="flex: 1; padding-right: 12px;";var G=document.createElement("span");G.textContent="+",G.style.cssText=["font-size: 20px","font-weight: 300","color: #4b664a","flex-shrink: 0","transition: transform 0.2s ease","width: 24px","text-align: center"].join(";"),R.appendChild(c),R.appendChild(G);var H=document.createElement("div");H.id="mm-faq-answer-"+F,H.setAttribute("role","region"),H.setAttribute("aria-labelledby","mm-faq-q-"+F),R.id="mm-faq-q-"+F,H.style.cssText=["max-height: 0","overflow: hidden","transition: max-height 0.3s ease, padding 0.3s ease","font-size: 14px","line-height: 1.6","color: #444"].join(";");var S=document.createElement("div");S.style.cssText="padding: 0 0 14px 0;",S.textContent=w.a,H.appendChild(S),R.addEventListener("click",function(){var M=R.getAttribute("aria-expanded")==="true";M?(H.style.maxHeight="0px",G.textContent="+",R.setAttribute("aria-expanded","false")):(H.style.maxHeight=H.scrollHeight+"px",G.textContent="−",R.setAttribute("aria-expanded","true"))}),R.addEventListener("touchstart",function(){R.style.opacity="0.7"},{passive:!0}),R.addEventListener("touchend",function(){R.style.opacity="1"},{passive:!0}),L.appendChild(R),L.appendChild(H),s.appendChild(L)}),g.appendChild(s);var u=document.querySelector(".produtos-relacionados"),f=document.querySelector(".container-avaliacoes");if(u&&u.nextSibling?u.parentNode.insertBefore(g,u.nextSibling):f?f.parentNode.insertBefore(g,f):D.parentNode.appendChild(g),!document.getElementById("mm-faq-schema")){var h={"@context":"https://schema.org","@type":"FAQPage",mainEntity:j.map(function(w){return{"@type":"Question",name:w.q,acceptedAnswer:{"@type":"Answer",text:w.a}}})},E=document.createElement("script");E.type="application/ld+json",E.id="mm-faq-schema",E.textContent=JSON.stringify(h),document.head.appendChild(E)}Lt&&Lt.parentNode&&Lt.parentNode.removeChild(Lt)}})(),(function b(){b._retries=(b._retries||0)+1;var D=document.querySelector("#produto-react-app");if(!D||!D.querySelector("h1")){b._retries<30&&setTimeout(b,500);return}if(!document.querySelector('meta[property="og:title"]')){var j=D.querySelector("h1"),I=j?j.textContent.trim():document.title,g=document.querySelector('meta[name="description"]'),i=g?g.content.trim():"";if(!i){var s=document.querySelector(".descricao-produto .accordion-content p");s&&(i=s.textContent.trim().substring(0,200))}i||(i=I+" - Compre online na Madeira Mania com até 12x sem juros ou 7% de desconto no PIX.");var u=document.querySelector('link[rel="canonical"]'),f=u?u.href:location.href.split("?")[0],h="",E=D.querySelector(".gallery-main img, #block-imagem img");if(E&&(h=E.getAttribute("src")||E.getAttribute("data-src")||""),!h){var w=document.querySelector('meta[property="og:image"]');w&&(h=w.content)}var F=D.querySelector(".form-pag-link"),L=F&&parseFloat(F.getAttribute("data-valor-pix"))||0;if(L>0){var R="R$ "+L.toFixed(2).replace(".",",");i.indexOf("R$")===-1&&(i=i.replace(/\.$/,"")+" | A partir de "+R+" no PIX.")}i.length>200&&(i=i.substring(0,197)+"...");var c=[{property:"og:type",content:"product"},{property:"og:title",content:I},{property:"og:description",content:i},{property:"og:url",content:f},{property:"og:site_name",content:"Madeira Mania"},{property:"og:locale",content:"pt_BR"}];h&&(c.push({property:"og:image",content:h}),c.push({property:"og:image:width",content:"600"}),c.push({property:"og:image:height",content:"600"})),c.push({name:"twitter:card",content:"summary_large_image"}),c.push({name:"twitter:title",content:I}),c.push({name:"twitter:description",content:i}),h&&c.push({name:"twitter:image",content:h}),c.forEach(function(G){var H=document.createElement("meta");G.property&&H.setAttribute("property",G.property),G.name&&H.setAttribute("name",G.name),H.setAttribute("content",G.content),document.head.appendChild(H)})}})(),(function(b){"use strict";if(!document.getElementById("produto-react-app")&&!document.getElementById("pagina-produto-react-app"))return;const D="3.0.0";window.innerWidth>=1500&&b(document).ready(function(){function g(){b(".gallery-main .swiper-slide img").each(function(){var i=this,s=b(this).closest(".swiper-slide"),u=s.closest(".swiper");function f(){var h=i.naturalWidth,E=i.naturalHeight;h&&E&&h===E&&u.css({"max-width":h+"px",overflow:"hidden"})}i.complete?f():i.addEventListener("load",f)})}g()}),window._variacoesMagazordCarregado&&(console.log(`%c⚠️ Variações Magazord v${D} - Substituindo instância anterior`,"color: #ff9800; font-weight: bold"),window.GerenciadorVariacoesPillsMagazord&&b(".product-variations-pills-container").remove()),window._variacoesMagazordCarregado=D,console.log(`%c🚀 Variações Magazord v${D} (dataProduct) - Inicializando...`,"color: #2196f3; font-weight: bold");const j={formatoNome:{separador:" - ",separadorTipoValor:": ",exibirNomeCompleto:!1,primeiraParte:"nome_base"},labels:{ALTURA:"Altura",LARGURA:"Largura",ILUMINACAO:"Iluminação",ILUMINAÇÃO:"Iluminação",PROFUNDIDADE:"Profundidade",COR:"Cor",ACABAMENTO:"Acabamento",TAMANHO:"Tamanho",PORTAS:"Número de Portas",ESPELHO:"Espelho",GAVETAS:"Gavetas",MODELO:"Modelo",MATERIAL:"Material",LUGARES:"Lugares",FORMATO:"Formato"},variacoesComImagem:["COR","ACABAMENTO"],ignorarPalavras:[],selectors:{areaProdutosSugeridos:".sugestoes-cores",areaVariacoes:".derivacoes-produto .area-derivacoes",containerProduto:".info-produto, .box-info-produto, main",subtituloProduto:".informacoes-compra-produto .text-secondary-700.text-xs"},retry:{maxTentativas:10,intervaloMs:500,usarMutationObserver:!0},debug:!0,performance:{useRequestAnimationFrame:!0,debounceDelay:150}};class I{constructor(){this.variacoes={},this.produtoAtualId=null,this.produtos=[],this.tentativasDeCarregamento=0,this.observer=null,this.inicializado=!1}init(){this.log("🎯 Gerenciador de Variações Magazord v3 (dataProduct)","info"),this.log("🎨 Swatches de imagem para cores + Pills para outras variações","info"),this.esperarDOMPronto()}esperarDOMPronto(){if(typeof jQuery>"u"){setTimeout(()=>this.esperarDOMPronto(),100);return}b(document).ready(()=>{this.log("✅ DOM pronto! Aguardando dataProduct...","success"),this.esperarDataProduct()})}esperarDataProduct(){typeof dataProduct<"u"&&dataProduct.listaProdutosSugeridos?(this.log("✅ dataProduct encontrado!","success"),this.tentarCarregar()):(this.log("⏳ Aguardando dataProduct...","info"),setTimeout(()=>this.esperarDataProduct(),300))}tentarCarregar(){this.tentativasDeCarregamento++,this.log(`
🔄 Tentativa ${this.tentativasDeCarregamento}/${j.retry.maxTentativas}`,"info"),this.carregarProdutos()?(this.processarVariacoes(),this.renderizarVariacoes(),this.bindEventos(),this.inicializado=!0,this.log(`
🎉 Inicialização concluída com sucesso!`,"success"),j.retry.usarMutationObserver&&this.observarMudancasDOM()):this.tentativasDeCarregamento<j.retry.maxTentativas?setTimeout(()=>this.tentarCarregar(),j.retry.intervaloMs):this.log("❌ Número máximo de tentativas atingido.","error")}observarMudancasDOM(){this.log("ℹ️ MutationObserver desativado - dados carregados via dataProduct","info")}log(i,s="log",u=null){if(!j.debug)return;const f={info:"color: #2196f3; font-weight: bold",success:"color: #4caf50; font-weight: bold",warning:"color: #ff9800; font-weight: bold",error:"color: #f44336; font-weight: bold",log:"color: #666"};console.log(`%c${i}`,f[s]||f.log),u&&console.log(u)}carregarProdutos(){if(this.produtos=[],typeof dataProduct>"u"||!dataProduct.listaProdutosSugeridos)return this.log("❌ dataProduct ou listaProdutosSugeridos não encontrado","error"),!1;const i=dataProduct.listaProdutosSugeridos,s=dataProduct.produto,u=dataProduct.hostImagem||"";if(this.log(`📦 Encontrados ${i.length} produtos sugeridos + produto atual`,"info"),s&&s.complemento){const f=s.midia_path&&s.midia_arquivo_nome?`${u}/${s.midia_path}${s.midia_arquivo_nome}`:"",h={id:s.derivacao_id||s.produto_id,nomeCompleto:s.complemento.trim(),estoque:s.qtde_estoque,url:s.link?`/${s.link}`:"",imagem:f,imagemData:f,elemento:null,variacoes:{},nomeBase:"",nomeExibicao:"",isAtual:!0};this.produtoAtualId=h.id,this.extrairVariacoesDoNome(h),this.produtos.push(h),this.log(`   ✓ Produto atual: "${h.nomeCompleto}"`,"success")}return i.forEach((f,h)=>{const E=f.complemento||f.nome||"";if(!E)return;const w=f.derivacao_id||f.produto_id;if(w===this.produtoAtualId){this.log(`   ⏭️ Ignorando duplicata: "${E}"`,"info");return}const F=f.midia_path&&f.midia_arquivo_nome?`${u}/${f.midia_path}${f.midia_arquivo_nome}`:"",L={id:w||h,nomeCompleto:E.trim(),estoque:f.qtde_estoque,url:f.link?`/${f.link}`:"",imagem:F,imagemData:F,elemento:null,variacoes:{},nomeBase:"",nomeExibicao:"",isAtual:!1};this.extrairVariacoesDoNome(L),this.produtos.push(L),this.log(`   ✓ Sugerido: "${L.nomeCompleto}"`,"log")}),this.produtos.length===0?!1:(this.log("✅ Produtos carregados e processados:","success",this.produtos),!0)}normalizarSeparadores(i){const s=["–","—","−","‐","‑","⁃"];let u=i;return s.forEach(f=>{const h=new RegExp(`\\s${f}\\s`,"g");u=u.replace(h," - ")}),u}extrairVariacoesDoNome(i){const u=this.normalizarSeparadores(i.nomeCompleto).split(j.formatoNome.separador);this.log(`
📝 Processando: "${i.nomeCompleto}"`,"log"),j.formatoNome.primeiraParte==="nome_base"&&(i.nomeBase=u[0].trim(),u.shift()),u.forEach(f=>{const h=f.trim();if(h&&h.includes(j.formatoNome.separadorTipoValor)){const[E,...w]=h.split(j.formatoNome.separadorTipoValor),F=w.join(j.formatoNome.separadorTipoValor).trim(),L=this.normalizarTipo(E.trim());if(j.ignorarPalavras.includes(L))return;i.variacoes[L]=F,this.log(`   ✓ ${L}: ${F}`,"success")}}),i.nomeExibicao=j.formatoNome.exibirNomeCompleto?i.nomeCompleto:i.nomeBase||i.nomeCompleto,Object.keys(i.variacoes).length===0&&(i.variacoes.MODELO=i.nomeCompleto,i.nomeExibicao=i.nomeCompleto)}normalizarTipo(i){return i.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim()}processarVariacoes(){this.log(`
🔄 Processando variações...`,"info");const i=new Set;this.produtos.forEach(s=>{Object.keys(s.variacoes).forEach(u=>i.add(u))}),i.forEach(s=>{const u=new Set,f={};this.produtos.forEach(E=>{const w=E.variacoes[s];w&&(u.add(w),f[w]||(f[w]=[]),f[w].push(E))});const h=Array.from(u).sort();this.variacoes[s]={label:j.labels[s]||s,valores:h,produtosPorValor:f,usarImagem:j.variacoesComImagem.includes(s)},this.log(`   📊 ${s}: ${h.length} valor(es) único(s) → [${h.join(", ")}]`,h.length>1?"success":"warning")}),this.log("✅ Variações processadas:","success",this.variacoes)}renderizarVariacoes(){this.log(`
🎨 Renderizando variações...`,"info");let i=b(j.selectors.areaVariacoes);if(i.length===0&&(this.criarAreaVariacoes(),i=b(j.selectors.areaVariacoes)),Object.keys(this.variacoes).length===0)return;const s=b("<div>",{class:"product-variations-pills-container"});let u=0;if(Object.keys(this.variacoes).forEach(f=>{const h=this.variacoes[f];if(h.valores.length<=1){this.log(`⏭️ Ignorando "${f}" - apenas ${h.valores.length} valor(es)`,"info");return}if(h.usarImagem){const E=this.criarGrupoSwatches(f,h);s.append(E),u++}}),Object.keys(this.variacoes).forEach(f=>{const h=this.variacoes[f];if(!(h.valores.length<=1)&&!h.usarImagem){const E=this.criarGrupoPills(f,h);s.append(E),u++}}),u===0){this.log("ℹ️ Nenhuma variação com múltiplas opções - ocultando área","info"),i.closest(".derivacoes-produto").hide(),b(j.selectors.subtituloProduto).hide();return}j.performance.useRequestAnimationFrame&&window.requestAnimationFrame?requestAnimationFrame(()=>{i.empty().append(s),this.log(`✅ ${u} variação(ões) renderizada(s)!`,"success"),this.atualizarNomeProduto()}):(i.empty().append(s),this.log(`✅ ${u} variação(ões) renderizada(s)!`,"success"),this.atualizarNomeProduto())}criarAreaVariacoes(){const i=b(j.selectors.areaProdutosSugeridos);i.length>0?i.before('<div class="derivacoes-produto"><div class="area-derivacoes"></div></div>'):b("body").prepend('<div class="derivacoes-produto"><div class="area-derivacoes"></div></div>')}criarGrupoSwatches(i,s){const u=this.obterValorAtualParaTipo(i),f=b("<div>",{class:"variation-pill-group variation-pill-group--swatches","data-variacao-tipo":i,role:"group","aria-labelledby":`pill-label-${i.toLowerCase()}`}),h=b("<div>",{class:"variation-pill-label",id:`pill-label-${i.toLowerCase()}`});h.append(b("<span>").text(s.label+":")),h.append(b("<span>",{class:"variation-pill-label-value","data-label-value":i}).text(u||""));const E=b("<div>",{class:"variation-swatches-container",role:"radiogroup","aria-labelledby":`pill-label-${i.toLowerCase()}`});return s.valores.forEach((w,F)=>{const L=s.produtosPorValor[w],R=L.some(on=>on.estoque===void 0||on.estoque>0),c=w===u,G=`pill-${i.toLowerCase()}-${this.sanitizeId(w)}`,H=this.encontrarMelhorProdutoParaSwatch(i,w,L);let S=null;H&&(S=H.imagemData||H.imagem);const M=b("<input>",{type:"radio",class:"variation-pill-input",id:G,name:`variation-${i}`,value:w,"data-variacao-tipo":i,"data-produtos":JSON.stringify(L.map(on=>({id:on.id,url:on.url}))),checked:c,disabled:!R,"aria-label":`${s.label}: ${w}${R?"":" (Indisponível)"}`}),T=b("<label>",{class:"variation-color-swatch-wrapper",for:G,"data-tooltip":w}),P=b("<div>",{class:"variation-color-swatch","data-valor":w,tabindex:c?0:-1});S?P.append(b("<img>",{src:S,alt:w,class:"variation-color-swatch-image",loading:"lazy"})):P.css({"background-color":"#E5E7EB",display:"flex","align-items":"center","justify-content":"center","font-size":"14px",color:"#6B7280"}).text(w.charAt(0).toUpperCase());const en=b("<span>",{class:"variation-color-swatch-name",text:w,title:w});T.append(P).append(en),E.append(M).append(T)}),f.append(h).append(E),f}criarGrupoPills(i,s){const u=this.obterValorAtualParaTipo(i),f=b("<div>",{class:"variation-pill-group variation-pill-group--pills","data-variacao-tipo":i,role:"group","aria-labelledby":`pill-label-${i.toLowerCase()}`}),h=b("<div>",{class:"variation-pill-label",id:`pill-label-${i.toLowerCase()}`});h.append(b("<span>").text(s.label+":")),h.append(b("<span>",{class:"variation-pill-label-value","data-label-value":i}).text(u||""));const E=b("<div>",{class:"variation-pills-container",role:"radiogroup","aria-labelledby":`pill-label-${i.toLowerCase()}`});return s.valores.forEach((w,F)=>{const L=s.produtosPorValor[w],R=L.some(T=>T.estoque===void 0||T.estoque>0),c=w===u,G=`pill-${i.toLowerCase()}-${this.sanitizeId(w)}`,H=b("<input>",{type:"radio",class:"variation-pill-input",id:G,name:`variation-${i}`,value:w,"data-variacao-tipo":i,"data-produtos":JSON.stringify(L.map(T=>({id:T.id,url:T.url}))),checked:c,disabled:!R,"aria-label":`${s.label}: ${w}${R?"":" (Indisponível)"}`});let S=w;R||(S+=' <span class="variation-pill-badge">Indisponível</span>');const M=b("<label>",{class:"variation-pill",for:G,html:S,"data-valor":w,tabindex:c?0:-1});E.append(H).append(M)}),f.append(h).append(E),f}sanitizeId(i){return i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}encontrarMelhorProdutoParaSwatch(i,s,u){const f=this.produtos.find(F=>F.isAtual||F.id===this.produtoAtualId);if(!f||u.length===0)return u[0]||null;if(u.length===1)return u[0];const h=f.variacoes;let E=null,w=-1;return u.forEach(F=>{let L=0;Object.keys(h).forEach(R=>{R!==i&&F.variacoes[R]===h[R]&&L++}),(F.imagemData||F.imagem)&&(L+=.5),L>w&&(w=L,E=F)}),this.log(`   🎯 Melhor produto para ${i}="${s}": score=${w}`,"log"),E||u[0]}obterValorAtualParaTipo(i){const s=this.produtos.find(u=>u.isAtual||u.id===this.produtoAtualId);return s?s.variacoes[i]:null}atualizarNomeProduto(){const i=this.produtos.find(u=>u.isAtual||u.id===this.produtoAtualId);if(!i)return;["h1.nome-produto",".product-name h1",".info-produto h1",'h1[itemprop="name"]',".box-info-produto h1"].forEach(u=>{const f=b(u);f.length>0&&f.text(i.nomeExibicao)})}bindEventos(){this.log(`
🔗 Vinculando eventos...`,"info"),b(document).on("change",".variation-pill-input",i=>{this.aoMudarVariacao(i)}),b(document).on("keydown",".variation-pills-container, .variation-swatches-container",i=>{this.handleKeyboardNavigation(i)}),b(document).on("click",".variation-pill, .variation-color-swatch-wrapper",function(){const i=b(this).is("label")?b("#"+b(this).attr("for")):b(this).closest("label").prev(".variation-pill-input");i.length&&!i.prop("disabled")&&b(this).closest(".variation-pill-group").addClass("is-loading")}),this.log("✅ Eventos vinculados","success")}handleKeyboardNavigation(i){const u=b(i.currentTarget).find(".variation-pill-input:not(:disabled)"),f=b(document.activeElement);if(!f.hasClass("variation-pill-input"))return;const h=u.index(f);let E=h;switch(i.key){case"ArrowRight":case"ArrowDown":i.preventDefault(),E=(h+1)%u.length;break;case"ArrowLeft":case"ArrowUp":i.preventDefault(),E=h-1<0?u.length-1:h-1;break;case"Home":i.preventDefault(),E=0;break;case"End":i.preventDefault(),E=u.length-1;break;default:return}u.eq(E).focus().prop("checked",!0).trigger("change")}aoMudarVariacao(i){const s=b(i.target),u=s.data("variacao-tipo"),f=s.val();this.log(`
🔄 Variação selecionada: ${u} = ${f}`,"info"),b(`.variation-pill-label-value[data-label-value="${u}"]`).text(f);const h={};b(".variation-pill-input:checked").each(function(){const w=b(this).data("variacao-tipo"),F=b(this).val();F&&(h[w]=F)}),this.log("📋 Seleção atual:","info",h);const E=this.encontrarProdutoPorVariacoes(h);if(E)this.log("✅ Produto encontrado!","success",E),this.navegarParaProduto(E);else{this.log("⚠️ Produto exato não encontrado, buscando melhor correspondência...","warning");const w=this.encontrarMelhorCorrespondencia(h);w?(this.log("✅ Melhor correspondência encontrada!","success",w),this.navegarParaProduto(w)):(this.log("❌ Nenhum produto correspondente encontrado","error"),b(".variation-pill-group").removeClass("is-loading"))}}encontrarProdutoPorVariacoes(i){return this.produtos.find(s=>Object.keys(i).every(u=>s.variacoes[u]===i[u]))}encontrarMelhorCorrespondencia(i){let s=null,u=0;return this.produtos.forEach(f=>{let h=0;Object.keys(i).forEach(E=>{f.variacoes[E]===i[E]&&h++}),h>u&&(u=h,s=f)}),u>0?s:null}navegarParaProduto(i){this.log(`
🚀 Navegando para: ${i.url}`,"info"),i.url?window.location.href=i.url:(this.log("❌ URL não encontrada para navegação","error"),b(".variation-pill-group").removeClass("is-loading"))}}setTimeout(function(){b(".product-variations-pills-container").remove(),b(".derivacoes-produto").remove();const g=new I;g.init(),window.GerenciadorVariacoesPillsMagazord=g},100)})(typeof jQuery<"u"?jQuery:window.jQuery||window.$),(function(){"use strict";function b(){if(!(typeof jQuery>"u"&&typeof $>"u")){var a=typeof jQuery<"u"?jQuery:$;a(document).ajaxComplete(function(l,p,v){v.url&&v.url.indexOf("checkout/cart")!==-1&&setTimeout(function(){window.dispatchEvent(new CustomEvent("reactItemAddedToCart"))},100)})}}function D(){var a=document.querySelector("#cart-preview-area .border-t.border-solid");if(!(!a||a.querySelector(".installment-total"))){var l=0,p=document.querySelectorAll("#cart-preview-area .cart-item");if(p.forEach(function(A){var X=parseFloat(A.getAttribute("data-item-price"))||0,J=parseInt(A.getAttribute("data-item-quantity"))||1;l+=X*J}),!(l<=0)){var v=(l/12).toFixed(2).replace(".",","),C=document.createElement("div");C.className="installment-total",C.textContent="ou 12x de R$ "+v;var z=a.querySelector(".valor-pix");z&&z.parentNode&&z.parentNode.insertBefore(C,z.nextSibling)}}}var j='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/></svg>',I='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',g='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>';function i(){D();var a=document.querySelectorAll("#cart-preview-area .cart-item, .content-cart .cart-item");a.forEach(function(l){if(!l.querySelector(".qty-btn-minus")){var p=l.querySelector(".qtd-value");if(p){var v=l.querySelector(".cart-remove-item"),C=v?v.getAttribute("data-id"):null;if(C){var z=l.querySelector(".prod-remove");z&&!p.contains(v)&&(p.appendChild(v),z.style.display="none");var A=p.parentElement,X=null;if(A)for(var J=0;J<A.children.length;J++){var U=A.children[J];if(U!==p&&U.classList&&U.classList.contains("valor")){X=U;break}}X&&!p.contains(X)&&p.appendChild(X);var an=parseInt(l.getAttribute("data-item-quantity"));if(!an||isNaN(an)){var Y=p.textContent.match(/(\d+)/);an=Y?parseInt(Y[1]):1}var mn=document.createElement("button");mn.className="qty-btn-minus",mn.type="button",mn.setAttribute("aria-label","Diminuir quantidade"),mn.innerHTML=j,mn.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation();var e=parseInt(cn.textContent)||1;if(e<=1){var r=l.querySelector(".cart-remove-item");r&&r.click();return}xt(l,C,-1,cn,mn,o)});var cn=document.createElement("span");cn.className="qty-display",cn.textContent=an;var o=document.createElement("button");o.className="qty-btn-plus",o.type="button",o.setAttribute("aria-label","Aumentar quantidade"),o.innerHTML=I,o.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),xt(l,C,1,cn,mn,o)});var n=document.createElement("div");n.className="mm-qty-wrap",n.appendChild(mn),n.appendChild(cn),n.appendChild(o),p.insertBefore(n,p.firstChild),v&&(v.innerHTML=g,v.setAttribute("aria-label","Remover produto"))}}}})}function s(){document.addEventListener("click",function(a){var l=a.target.closest(".cart-remove-item");if(!(!l||!l.closest("#cart-preview-area"))){a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation();var p=l.getAttribute("data-id");if(p){var v=l.closest(".cart-item"),C=v&&v.querySelector(".prod-nome")?.textContent?.trim()||"este produto",z=C.length>50?C.substring(0,50)+"…":C,A=document.getElementById("mm-confirm-overlay");A&&A.remove();var X=document.createElement("div");X.id="mm-confirm-overlay",X.className="mm-confirm-overlay",X.innerHTML='<div class="mm-confirm-card"><p class="mm-confirm-title">Remover produto?</p><p class="mm-confirm-desc">'+z.replace(/&/g,"&amp;").replace(/</g,"&lt;")+'</p><div class="mm-confirm-actions"><button class="mm-confirm-btn mm-confirm-btn-cancel">Manter</button><button class="mm-confirm-btn mm-confirm-btn-delete">Remover</button></div></div>',document.body.appendChild(X),X.querySelector(".mm-confirm-btn-cancel").addEventListener("click",function(){X.remove()}),X.querySelector(".mm-confirm-btn-delete").addEventListener("click",function(){X.remove(),window.__mmDeleteItem&&v?window.__mmDeleteItem(v,p):typeof Zord<"u"&&Zord.checkout&&Zord.checkout.deleteItem(parseInt(p))}),X.addEventListener("click",function(J){J.target===X&&X.remove()})}}},!0)}function u(){document.addEventListener("click",function(a){var l=a.target.closest(".finalizar-compra");l&&l.closest("#cart-preview-area")&&(a.preventDefault(),a.stopPropagation(),window.location.href="/checkout/identify")},!0)}function f(){try{var a=document.querySelector("#resumo-compra");if(a){var l=a.querySelector(".txt-cupom");if(l){var p=(l.textContent||"").replace(/\s+/g,"").trim();if(/^[A-Za-z0-9][A-Za-z0-9._-]{1,}$/.test(p))return p.toUpperCase()}return""}}catch{}try{var v=JSON.parse(localStorage.getItem("mm_cart_snapshot")||"null");if(v&&v.couponCode)return String(v.couponCode).toUpperCase()}catch{}return""}function h(a,l){var p="cep=&nenhumCreditoSelecionado=true&id="+encodeURIComponent(String(l))+"&area=main-cart",v=f();return v&&(p+="&cupom-desconto="+encodeURIComponent(v)),fetch("/checkout/cart?operation="+encodeURIComponent(a),{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"text/html,application/json,*/*","X-Requested-With":"XMLHttpRequest"},body:p}).then(function(C){if(!C.ok)throw new Error("HTTP "+C.status);return C.text()})}var E=1500,w=2e3,F="mm_cep",L="mm_cart_snapshot",R=1800*1e3;function c(){try{var a=localStorage.getItem(F)||"",l=a.replace(/\D/g,"");if(l.length===8)return l}catch{}return null}function G(a){return!a||a.length!==8?"":a.slice(0,5)+"-"+a.slice(5)}function H(a){if(!a||a.length!==8)return w;var l=parseInt(a.slice(0,2),10);return isNaN(l)?w:l>=1&&l<=39||l>=80&&l<=99?E:w}function S(){try{var a=localStorage.getItem(L);if(!a)return null;var l=JSON.parse(a);return!l||!l.ts||Date.now()-l.ts>R?null:l}catch{return null}}function M(a){var l=[];return a.forEach(function(p){var v=(p.querySelector(".prod-nome a, .prod-nome")||{}).textContent||"",C=p.querySelector(".qty-display"),z=C?parseInt(C.textContent):parseInt(p.getAttribute("data-item-quantity"))||1;l.push(v.trim().slice(0,30)+"x"+z)}),l.sort().join("|")}function T(a){if(!a||!Array.isArray(a.items))return"";var l=a.items.map(function(p){return(p.name||"").trim().slice(0,30)+"x"+(p.quantity||1)});return l.sort().join("|")}var P='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg>',en='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18M6 6l12 12"/></svg>',on=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];function pn(a){if(!a)return null;var l=String(a).match(/\d+/g);return!l||!l.length?null:Math.max.apply(null,l.map(Number))}function fn(a,l){for(var p=new Date(a.getTime()),v=0;v<l;){p.setDate(p.getDate()+1);var C=p.getDay();C!==0&&C!==6&&v++}return p}function Vn(a){var l=new Date,p="dia "+a.getDate()+" de "+on[a.getMonth()];return a.getFullYear()!==l.getFullYear()&&(p+=" de "+a.getFullYear()),p}function Un(a){var l=pn(a);if(!l||l<1)return null;var p=fn(new Date,l);return"Receba até "+Vn(p)}var Tn={},hn=4e3,Bn={};function In(a,l){if(!a||a.length!==8)return Promise.resolve(null);if(Tn[a])return Tn[a];if(!l){var p=Bn[a]||0;if(Date.now()-p<hn)return Promise.resolve(null)}var v="cep="+encodeURIComponent(a.slice(0,5)+"-"+a.slice(5))+"&nenhumCreditoSelecionado=true&area=main-cart",C=f();C&&(v+="&cupom-desconto="+encodeURIComponent(C));var z=fetch("/checkout/cart?operation=atualizaValoresCarrinho",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"text/html,application/json,*/*","X-Requested-With":"XMLHttpRequest"},body:v}).then(function(A){if(!A.ok)throw new Error("HTTP "+A.status);return A.text()}).then(function(A){return Bn[a]=Date.now(),$n(A)}).catch(function(){return null}).then(function(A){return delete Tn[a],A});return Tn[a]=z,z}function $n(a){try{var l=new DOMParser().parseFromString(a,"text/html"),p=l.querySelector("#resumo-compra .frete-calculado")||l.querySelector(".frete-calculado");if(!p)return null;var v="",C=p.querySelector(".frete-location .city");C&&(v=C.textContent.trim());var z=null,A="",X="",J=p.querySelector(".info-frete-selec");if(J){var U=J.querySelector(".dias-entrega"),an=J.querySelector(".info-title span, .info-title");U&&(A=(U.textContent||"").trim()),an&&(X=(an.textContent||"").trim())}var Y=p.querySelector(".line.valor-frete .value, .value.valor-frete")||p.querySelector(".valor-compra-frete .value");if(Y){var mn=(Y.textContent||"").trim();if(/gr[áa]tis/i.test(mn))z=0;else{var cn=mn.match(/[\d.,]+/);if(cn){var o=parseFloat(cn[0].replace(/\./g,"").replace(",","."));isNaN(o)||(z=o)}}}if(z==null){var n=p.querySelector(".servico-frete");if(n){var t=parseFloat(n.getAttribute("data-valor-frete")||"0");if(isNaN(t)||(z=t),X||(X=n.getAttribute("data-servico-frete")||""),!A){var e=n.querySelector(".dias-entrega");e&&(A=(e.textContent||"").trim())}}}if(z==null)return null;var r=null,m=l.querySelector(".total-boleto .value, .totais-valor.total-boleto .value");if(m){var d=(m.textContent||"").trim(),x=d.match(/[\d.,]+/);if(x){var q=parseFloat(x[0].replace(/\./g,"").replace(",","."));isNaN(q)||(r=q)}}return{city:v,shipping:z,shippingDeadline:A,shippingName:X,totalPix:r}}catch{return null}}function Dn(a,l,p){if(!(!a||!p)){Zn(a);try{let J=function(U){for(var an=0;an<C.length;an++)if(C[an]&&C[an].name===U)return C[an];return null};var v=S()||{};v.ts=Date.now(),v.cepValue=l.slice(0,5)+"-"+l.slice(5),v.shipping=p.shipping,v.shippingDeadline=p.shippingDeadline,v.shippingName=p.shippingName,v.shippingCity=p.city,p.totalPix!=null&&(v.subtotalPix=p.totalPix);var C=v.items&&v.items.length?v.items:[],z=a.querySelectorAll(".cart-item:not(.mm-removing)");v.items=Array.prototype.map.call(z,function(U){var an=U.querySelector(".prod-nome a, .prod-nome"),Y=(an&&an.textContent||"").trim(),mn=U.querySelector(".qty-display"),cn=mn?parseInt(mn.textContent):parseInt(U.getAttribute("data-item-quantity"))||1,o=J(Y);return o&&o.quantity===cn&&(o.lineTotalPix>0||o.lineTotal>0||o.imgSrc)?o:{name:Y,quantity:cn}}),localStorage.setItem(L,JSON.stringify(v))}catch{}var A=a.querySelectorAll(".cart-item:not(.mm-removing)"),X=0;A.forEach(function(J){var U=J.querySelector(".valor");if(U){var an=zn(U.textContent);isNaN(an)||(X+=an)}}),a.querySelector(".box-total-btn")?Pn(a):Sn(a)}}function xn(a){var l=c();if(l){var p=S(),v=T(p),C=M(a.querySelectorAll(".cart-item:not(.mm-removing)")),z=p&&p.cepValue&&p.cepValue.replace(/\D/g,"")===l,A=p&&p.shipping!=null&&!isNaN(p.shipping);p&&v===C&&z&&A||In(l).then(function(X){X&&Dn(a,l,X)})}}function kn(a){return String(a||"").replace(/[&<>"']/g,function(l){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[l]})}function Rn(a){if(!a)return null;var l=a.querySelector(".box-total-btn");if(l)return{host:l,before:l.querySelector(".total")};var p=a.querySelector(".area-finalizar-compra");if(p)return{host:p,before:p.firstElementChild};var v=a.querySelector(".finalizar-compra");if(v&&v.parentElement){var C=v.parentElement;return{host:C,before:C.firstElementChild}}return null}function qn(a){if(!a)return null;var l=a.closest(".carrinho-rapido-ctn");return l||(a.closest("#cart-preview-area")?pt():null)}function Nn(a,l,p,v){if(a){var C=Rn(a);if(C){var z=C.host;a.classList.add("mm-ship-scope");var A=c(),X=S(),J=M(a.querySelectorAll(".cart-item:not(.mm-removing)")),U=T(X),an=X&&U===J,Y=H(A),mn=l>=Y,cn=Math.max(0,Y-l),o=Math.max(0,Math.min(100,l/Y*100)),n=z.querySelector(".mm-cart-ship");if(!n){n=document.createElement("div"),n.className="mm-cart-ship",n.setAttribute("role","group"),n.setAttribute("aria-label","Informações de frete");var t=C.before;t&&t.parentNode===z?z.insertBefore(n,t):z.insertBefore(n,z.firstChild)}if(n.classList.toggle("is-free",mn),lt(n),n.dataset.mmEditing!=="1"){var e=X&&X.cepValue&&X.cepValue.replace(/\D/g,"")===A,r=A&&an&&e&&X.shippingCity,m=r?Un(X.shippingDeadline):null,d="";if(d+='<div class="mm-cart-ship-location">',A){var x=G(A);if(r&&(x+=" · "+kn(X.shippingCity)),d+='<span class="mm-cart-ship-label">Envio para</span><div class="mm-cart-ship-location-value"><span>'+x+'</span><button class="mm-cart-ship-edit" type="button" data-mm-ship="edit">Trocar</button></div>',m){var q=kn(m);v&&p>0?q+=" · <strong>"+kn(En(p))+"</strong>":v&&p===0&&(q+=" · <strong>Grátis</strong>"),d+='<span class="mm-cart-ship-deadline">'+q+"</span>"}}else d+='<span class="mm-cart-ship-label">Calcule o frete</span><div class="mm-cart-ship-location-value"><span style="color:#9CA3AF;font-weight:500;">Informe seu CEP</span><button class="mm-cart-ship-edit" type="button" data-mm-ship="edit">Calcular</button></div>';d+="</div>";var N=mn?"Frete grátis desbloqueado":"Faltam "+En(cn)+" para frete grátis",B=parseFloat(a.dataset.mmShipPct||"0")||0;d+='<div class="mm-cart-ship-progress">',d+='<div class="mm-cart-ship-bar" role="progressbar" aria-valuenow="'+Math.round(l)+'" aria-valuemin="0" aria-valuemax="'+Math.round(Y)+'" aria-valuetext="'+kn(N)+'" aria-label="Progresso para frete grátis"><div class="mm-cart-ship-bar-fill" style="width:'+B.toFixed(1)+'%"></div></div>',d+='<p class="mm-cart-ship-nudge'+(mn?" is-free":"")+'">',mn?d+=P+"Frete grátis garantido":d+="Faltam <strong>"+kn(En(cn))+"</strong> para frete grátis",d+="</p>",d+="</div>",n.innerHTML=d;var _=n.querySelector(".mm-cart-ship-bar-fill");_&&requestAnimationFrame(function(){_.style.width=o.toFixed(1)+"%"});var O=a.dataset.mmShipWasFree==="1";mn&&!O&&B>0&&(n.classList.remove("mm-just-unlocked"),n.offsetWidth,n.classList.add("mm-just-unlocked"),setTimeout(function(){n.classList.remove("mm-just-unlocked")},1400)),a.dataset.mmShipWasFree=mn?"1":"",a.dataset.mmShipPct=o.toFixed(1)}}}}var Wn='<svg class="mm-cart-ship-spinner" width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><style>.mm-sp{animation:mm-spin 1.2s linear infinite;transform-origin:center}.mm-sp circle{stroke:#4B664A;stroke-width:3;fill:none;stroke-linecap:round;stroke-dasharray:44;stroke-dashoffset:16;animation:mm-sp-dash 1.2s ease-in-out infinite}@keyframes mm-spin{to{transform:rotate(360deg)}}@keyframes mm-sp-dash{0%{stroke-dashoffset:44}50%{stroke-dashoffset:8}100%{stroke-dashoffset:44}}</style><g class="mm-sp"><circle cx="12" cy="12" r="9.5"/></g></svg>';function jn(a){if(a){var l=a.querySelector(".mm-cart-ship-deadline");if(l)l.innerHTML="Recalculando frete "+Wn;else{var p=a.querySelector(".mm-cart-ship-location");if(p){var v=document.createElement("span");v.className="mm-cart-ship-deadline",v.innerHTML="Recalculando frete "+Wn,p.appendChild(v)}}var C=Rn(a);C&&C.host.classList.add("mm-ship-loading")}}function Zn(a){if(a){var l=Rn(a);l&&l.host.classList.remove("mm-ship-loading")}}function lt(a){!a||a.dataset.mmShipBound||(a.dataset.mmShipBound="1",a.addEventListener("click",function(l){var p=l.target.closest('[data-mm-ship="edit"]');if(p){l.preventDefault(),l.stopPropagation(),yn(a);return}var v=l.target.closest('[data-mm-ship="cancel"]');if(v){l.preventDefault(),l.stopPropagation(),An(a);return}l.target.closest(".mm-cart-ship-cep-form")&&l.stopPropagation()},!0))}function yn(a){var l=a.querySelector(".mm-cart-ship-location");if(l){a.dataset.mmEditing="1";var p=c()||"";l.innerHTML='<span class="mm-cart-ship-label">Digite seu CEP</span><form class="mm-cart-ship-cep-form" data-mm-ship-form="1" novalidate><input class="mm-cart-ship-cep-input" type="text" inputmode="numeric" autocomplete="postal-code" placeholder="00000-000" maxlength="9" value="'+kn(G(p))+'" aria-label="CEP" /><button class="mm-cart-ship-cep-save" type="submit">OK</button><button class="mm-cart-ship-cep-cancel" type="button" data-mm-ship="cancel" aria-label="Cancelar">'+en+"</button></form>";var v=l.querySelector(".mm-cart-ship-cep-input"),C=l.querySelector("form");v&&(setTimeout(function(){try{v.focus(),v.select()}catch{}},10),v.addEventListener("input",function(){v.classList.remove("is-invalid");var z=v.value.replace(/\D/g,"").slice(0,8);v.value=z.length>5?z.slice(0,5)+"-"+z.slice(5):z}),v.addEventListener("keydown",function(z){z.key==="Escape"&&(z.preventDefault(),An(a))})),C&&C.addEventListener("submit",function(z){z.preventDefault(),z.stopPropagation(),Gn(a)})}}function An(a){a.dataset.mmEditing="";var l=qn(a);if(l){var p=l.querySelectorAll(".cart-item:not(.mm-removing)"),v=0;p.forEach(function(C){var z=C.querySelector(".valor");if(z){var A=zn(z.textContent);isNaN(A)||(v+=A)}}),Nn(l,v)}}function Gn(a){var l=a.querySelector(".mm-cart-ship-cep-input");if(l){var p=l.value.replace(/\D/g,"");if(p.length!==8){l.classList.add("is-invalid"),l.focus();return}try{localStorage.setItem(F,p)}catch{}var v=a.querySelector(".mm-cart-ship-cep-save");v&&(v.disabled=!0,v.textContent="...");var C=qn(a);try{var z=S();z&&(z.cepValue="",localStorage.setItem(L,JSON.stringify(z)))}catch{}An(a),In(p).then(function(A){A&&C&&Dn(C,p,A)})}}function zn(a){if(!a)return NaN;var l=String(a).replace(/\s/g,"").match(/([\d.,]+)/);return l?parseFloat(l[1].replace(/\./g,"").replace(",",".")):NaN}function En(a){return isNaN(a)?"":"R$ "+a.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function Qn(a){if(isNaN(a))return"";var l=a.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),p=l.split(",");return"R$&nbsp;"+p[0]+'<span class="mm-cents">,'+(p[1]||"00")+"</span>"}function dn(a){var l=0;return Array.prototype.forEach.call(a,function(p){var v=parseFloat(p.getAttribute("data-item-price"))||0,C=parseInt(p.getAttribute("data-item-quantity"));if(!C||isNaN(C)){var z=p.querySelector(".qty-display");z?C=parseInt(z.textContent)||1:C=1}l+=v*C}),l}function Yn(a){var l=a.querySelectorAll(".cart-item:not(.mm-removing)");l.forEach(function(p){var v=parseFloat(p.getAttribute("data-item-price"))||0,C=parseInt(p.getAttribute("data-item-quantity"));if(!C||isNaN(C)){var z=p.querySelector(".qty-display");z?C=parseInt(z.textContent)||1:C=1}var A=p.querySelector(".valor");A&&v>0&&(A.innerHTML=Qn(v*C))})}function rt(a){if(!(!a||a.dataset.mmTotalRatio)){var l=a.querySelectorAll(".cart-item");if(l.length){var p=dn(l),v=a.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||a.querySelector(".box-total-btn .linha-total .valor-final strong");if(v&&p>.01){var C=zn(v.textContent);isNaN(C)||(a.dataset.mmTotalRatio=String(C/p))}}}}function gt(a,l){var p=a.querySelector(".box-total-btn .linha-total");if(p){var v=p.parentElement.querySelector(".mm-cart-savings");if(v&&v.remove(),!(!l||l<.01)){var C=document.createElement("span");C.className="mm-cart-savings",C.textContent="Você economiza "+En(l)+" com PIX",p.nextSibling?p.parentElement.insertBefore(C,p.nextSibling):p.parentElement.appendChild(C)}}}function Pn(a,l){if(a){rt(a);var p=a.querySelectorAll(".cart-item:not(.mm-removing)"),v=dn(p),C=a.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||a.querySelector(".box-total-btn .linha-total .valor-final strong"),z=parseFloat(a.dataset.mmTotalRatio||"0.95")||.95,A=v*z,X=v-A,J=c(),U=S(),an=T(U),Y=M(p),mn=U&&U.cepValue&&U.cepValue.replace(/\D/g,"")===J,cn=!!(J&&U&&mn&&U.shipping!=null&&!isNaN(U.shipping)),o=a.dataset.mmShipPendingFetch==="1";!cn&&o&&J&&U&&U.shipping!=null&&(cn=!0);var n=cn?parseFloat(U.shipping):0,t=A+n,e=v+n;if(C){var r=zn(C.textContent);if(l)(isNaN(r)||Math.abs(t-r)>.005)&&(C.innerHTML=Qn(t));else if(!isNaN(r)&&Math.abs(t-r)>.005){var m=a.querySelector(".box-total-btn .linha-total .valor-final");m&&(m.classList.remove("mm-pop"),m.offsetWidth,m.classList.add("mm-pop"),setTimeout(function(){m.classList.remove("mm-pop")},450)),ft(C,r,t)}else C.innerHTML=Qn(t)}var d=a.querySelector(".box-total-btn .valor-final.card");if(d){var x=e/12;d.innerHTML="<span>ou em até <strong>12x</strong> de <strong>"+En(x)+"</strong> no cartão</span>"}var q=a.querySelector(".box-total-btn .linha-total .valor-final .tipo-pagto");q&&(q.textContent="No PIX"),gt(a,X),Nn(a,v,n,cn);try{var N=0;p.forEach(function(_){var O=_.querySelector(".qty-display");O&&(N+=parseInt(O.textContent)||0)});var B=document.getElementById("mm-h-cart-count");B&&(N>0?(B.textContent=N>99?"99+":String(N),B.hidden=!1):B.hidden=!0)}catch{}}}function tt(){var a=document.querySelector(".carrinho-rapido-ctn");if(!(!a||!a.querySelector(".box-total-btn"))){var l=a.querySelectorAll(".cart-item:not(.mm-removing)");if(l.length){var p=a.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||a.querySelector(".box-total-btn .linha-total .valor-final strong");if(p){var v=dn(l);if(v>.01){var C=parseFloat(a.dataset.mmTotalRatio||"0.95")||.95,z=c(),A=S(),X=A&&A.cepValue&&A.cepValue.replace(/\D/g,"")===z,J=!!(z&&A&&X&&A.shipping!=null&&!isNaN(A.shipping));!J&&a.dataset.mmShipPendingFetch==="1"&&z&&A&&A.shipping!=null&&(J=!0);var U=J?parseFloat(A.shipping):0,an=v*C+U,Y=zn(p.textContent);(isNaN(Y)||Math.abs(an-Y)>.01)&&Pn(a,!0)}}}}}function pt(){var a=document.querySelector('#cart-preview-area > div[class*="z-[9999]"]');if(a)return a;var l=document.querySelector(".carrinho-rapido-ctn");return l&&!l.querySelector(".box-total-btn")&&l.querySelector(".valor-pix")?l:null}function ct(a,l){var p=a.querySelector(".installment-total");if(!(!p||!p.parentElement)){var v=p.parentElement,C=v.querySelector(".mm-cart-savings-mobile");if(!l||l<.01){C&&C.remove();return}var z="Você economiza "+En(l)+" com PIX";if(C){C.textContent!==z&&(C.textContent=z);return}var A=document.createElement("span");A.className="mm-cart-savings-mobile",A.textContent=z,p.nextSibling?v.insertBefore(A,p.nextSibling):v.appendChild(A)}}function St(a,l,p){if(!(!a||!a.classList||!a.classList.contains("carrinho-rapido-ctn"))&&!a.querySelector(".box-total-btn")){var v=a.querySelector(".area-finalizar-compra");if(!(!v||!(l>0))){var C=v.querySelector(".forma-pix"),z=C?C.parentElement:null;if(z){var A=l*p,X=l/12,J=l-A;z.classList.add("mm-native-pay-hidden");var U=v.querySelector(".mm-cart-total-b");U||(U=document.createElement("div"),U.className="mm-cart-total-b",U.innerHTML='<span class="mm-tb-label">Total</span><span class="mm-tb-row"><strong class="mm-tb-value"></strong><span class="mm-tb-pix">No PIX</span></span><span class="mm-tb-savings"></span><span class="mm-tb-parcela"></span>',z.nextSibling?v.insertBefore(U,z.nextSibling):v.appendChild(U));var an=U.querySelector(".mm-tb-value"),Y=En(A);an&&an.textContent!==Y&&(an.textContent=Y);var mn=U.querySelector(".mm-tb-savings");if(mn)if(J>=.01){var cn="Você economiza "+En(J)+" com PIX";mn.textContent!==cn&&(mn.textContent=cn),mn.style.display=""}else mn.style.display="none";var o=U.querySelector(".mm-tb-parcela");if(o){var n="ou em até 12x de "+En(X)+" no cartão";o.textContent!==n&&(o.textContent=n)}}}}}function Sn(a){if(a=a||pt(),!(!a||a.querySelector(".box-total-btn")||!a.querySelector(".valor-pix"))){var l=a.querySelectorAll(".cart-item:not(.mm-removing)"),p=l.length,v=document.getElementById("mm-h-cart-count");if(v&&p>0){var C=p>99?"99+":String(p);(v.textContent!==C||v.hidden)&&(v.textContent=C,v.hidden=!1)}if(l.length){var z=dn(l);if(z>0){Array.prototype.forEach.call(l,function(B){var _=parseFloat(B.getAttribute("data-item-price"))||0;if(_>0){var O=parseInt(B.getAttribute("data-item-quantity"));if(!O||isNaN(O)){var K=B.querySelector(".qty-display");O=K&&parseInt(K.textContent)||1}var nn=B.querySelector(".valor");if(nn){var rn=_*O,W=nn.querySelector("span")||nn,un=zn(W.textContent);(isNaN(un)||Math.abs(un-rn)>.005)&&(W.textContent=En(rn))}}});var A=a.querySelector(".valor-pix"),X=A?A.querySelector("span")||A:null;if(!a.dataset.mmMobileRatio&&X){var J=zn(X.textContent);if(!isNaN(J)&&J>0){var U=J/z;U>.8&&U<=1.0001&&(a.dataset.mmMobileRatio=String(U))}}var an=parseFloat(a.dataset.mmMobileRatio||"0.95");if(an>.8&&an<=1.0001||(an=.95),X){var Y=z*an,mn=zn(X.textContent);(isNaN(mn)||Math.abs(mn-Y)>.005)&&(X.textContent=En(Y))}var cn=a.querySelector(".installment-total");if(cn){var o=z/12,n=zn(cn.textContent);(isNaN(n)||Math.abs(n-o)>.005)&&(cn.textContent="ou 12x de "+En(o))}var t=c(),e=S(),r=e&&e.cepValue&&e.cepValue.replace(/\D/g,"")===t,m=!!(t&&e&&r&&e.shipping!=null&&!isNaN(e.shipping)),d=m?parseFloat(e.shipping):0,x=(t||"")+"|"+z.toFixed(2)+"|"+(m?1:0)+"|"+d,q=a.querySelector(".mm-cart-ship"),N=q&&q.dataset.mmEditing==="1";!N&&(!q||a.dataset.mmMobShipSig!==x)&&(a.dataset.mmMobShipSig=x,Nn(a,z,d,m)),xn(a),ct(a,z-z*an),St(a,z,an)}}}}function ft(a,l,p){if(!a||isNaN(l)||isNaN(p))return;var v=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(v){a.innerHTML=Qn(p);return}var C=420,z=performance.now();function A(X){return 1-Math.pow(1-X,3)}(function X(J){var U=Math.min(1,(J-z)/C);a.innerHTML=Qn(l+(p-l)*A(U)),U<1&&requestAnimationFrame(X)})(z)}function xt(a,l,p,v,C,z){if(!(!a||!l)){var A=parseInt(v.textContent)||1,X=A+p;if(!(X<1)){var Y=a.closest(".carrinho-rapido-ctn");rt(Y),C.disabled=!0,z.disabled=!0;var J=parseFloat(a.getAttribute("data-item-price"))||0;v.textContent=X,a.setAttribute("data-item-quantity",X);var U=a.querySelector(".valor");if(U){var an=J*X;U.textContent=En(an),U.classList.remove("mm-pop"),U.offsetWidth,U.classList.add("mm-pop"),setTimeout(function(){U.classList.remove("mm-pop")},450)}var Y=a.closest(".carrinho-rapido-ctn"),mn=p>0?"adicionaItem":"removeItem";c()&&Y&&(Y.dataset.mmShipPendingFetch="1"),Pn(Y),Sn(),c()&&jn(Y),h(mn,l).catch(function(){v.textContent=A,a.setAttribute("data-item-quantity",A),U&&(U.innerHTML=Qn(J*A)),Y&&(Y.dataset.mmShipPendingFetch=""),Pn(Y),Sn()}).then(function(){C.disabled=!1,z.disabled=!1;var cn=c();cn&&Y?(jn(Y),In(cn,!0).then(function(o){Y.dataset.mmShipPendingFetch="",o?Dn(Y,cn,o):Zn(Y)})):Y&&(Y.dataset.mmShipPendingFetch="")})}}}function Ct(a,l){if(!(!a||!l)){var p=a.closest(".carrinho-rapido-ctn");rt(p);var v=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,C=v?0:360;v||a.classList.add("mm-removing"),setTimeout(function(){a.parentNode&&a.parentNode.removeChild(a);var z=p?p.querySelectorAll(".cart-item:not(.mm-removing)"):[],A=z.length===0;if(A){if(p){p.dataset.mmShipPendingFetch="";var X=p.querySelector(".mm-cart-ship");X&&X.remove();var J=p.querySelector(".box-total-btn, .area-finalizar-compra");J&&(J.style.display="none")}typeof window.__mmForceEmptyCartState=="function"&&window.__mmForceEmptyCartState(p)}else Pn(p),c()&&jn(p);var U=document.getElementById("mm-h-cart-count"),an=document.getElementById("mm-h-cart"),Y=z.length;U&&(U.textContent=Y>99?"99+":String(Y),U.hidden=Y===0),an&&an.setAttribute("aria-label","Carrinho, "+Y+" "+(Y===1?"item":"itens")),Sn()},C),h("deleteItem",l).catch(function(){}).then(function(){var z=p?p.querySelectorAll(".cart-item:not(.mm-removing)"):[],A=document.getElementById("mm-h-cart-count");if(A&&(A.textContent=z.length>99?"99+":String(z.length),A.hidden=z.length===0),z.length===0){p&&(p.dataset.mmShipPendingFetch="");return}var X=c();X&&p?(p.dataset.mmShipPendingFetch="1",jn(p),In(X,!0).then(function(J){p.dataset.mmShipPendingFetch="",J?Dn(p,X,J):Zn(p)})):p&&(p.dataset.mmShipPendingFetch="")})}}window.__mmDeleteItem=Ct;var Et=null,yt=new Set,Ln=null;function zt(a){if(!a)return NaN;var l=String(a).replace(/\s/g,"").match(/([\d.,]+)/);if(!l)return NaN;var p=l[1].replace(/\./g,"").replace(",","."),v=parseFloat(p);return isNaN(v)?NaN:v}function wt(a){return isNaN(a)?"":"R$ "+a.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function et(a,l,p){if(!a||isNaN(l)||isNaN(p))return;Ln&&cancelAnimationFrame(Ln);var v=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(v){a.textContent=wt(p);return}var C=420,z=performance.now();function A(J){return 1-Math.pow(1-J,3)}function X(J){var U=J-z,an=Math.min(1,U/C),Y=l+(p-l)*A(an);a.textContent=wt(Y),an<1?Ln=requestAnimationFrame(X):Ln=null}Ln=requestAnimationFrame(X)}function Mt(a){return a?a.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||a.querySelector(".box-total-btn .linha-total .valor-final strong")||a.querySelector(".valor-pix strong")||a.querySelector(".valor-pix"):null}function qt(a){return a?a.querySelector(".box-total-btn .linha-total .valor-final"):null}function It(a){var l=qt(a);l&&(l.classList.remove("mm-pop"),l.offsetWidth,l.classList.add("mm-pop"),setTimeout(function(){l.classList.remove("mm-pop")},450))}function Hn(){var a=document.querySelector(".carrinho-rapido-ctn");if(a){var l=a.querySelectorAll(".cart-item:not(.mm-removing)");if(l.length>0){var p=a.querySelector(".box-total-btn");p&&p.dataset.mmTotalEnhanced!=="1"&&(rt(a),Yn(a),Pn(a),p.dataset.mmTotalEnhanced="1",a.dataset.mmShipRendered="1",xn(a))}a.querySelector(".box-total-btn")||Sn(a);var v=a.querySelectorAll(".cart-item"),C=new Set;v.forEach(function(z){var A=z.id||z.getAttribute("data-item-id")||"";A&&(C.add(A),!yt.has(A)&&yt.size>0&&(z.classList.add("mm-added"),setTimeout(function(){z.classList.remove("mm-added")},500)))}),yt=C}}function Jn(){var a=document.querySelector(".carrinho-rapido-ctn");if(!(!a||a.dataset.mmAnimObserved)){a.dataset.mmAnimObserved="1",Hn();var l=new MutationObserver(function(){clearTimeout(Jn._t),Jn._t=setTimeout(Hn,60)});l.observe(a,{childList:!0,subtree:!0,characterData:!0})}}function vt(){b(),s(),u();var a=document.getElementById("cart-preview-area");if(a){var l=new MutationObserver(function(){setTimeout(i,100),setTimeout(Jn,150),setTimeout(Sn,180),setTimeout(tt,220)});l.observe(a,{childList:!0,subtree:!0})}setInterval(i,800),setInterval(Jn,800),setInterval(Sn,800),setInterval(tt,800),i(),Jn(),Sn(),tt()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",vt):vt()})(),(function b(){"use strict";var D="mm_cep",j="mm_cart_snapshot",I=18e5,g="mm_onepage_draft",i=1440*60*1e3,s=2e3,u="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",f="https://api.whatsapp.com/send?phone=5511915299488&text="+encodeURIComponent("Olá! Estou no checkout e gostaria de tirar uma dúvida sobre meu pedido."),h=location.pathname,E=h.indexOf("/checkout/cart")!==-1,w=h.indexOf("/checkout/identify")!==-1,F=h.indexOf("/checkout/onepage")!==-1,L=h.indexOf("/checkout/payment")!==-1,R=h.indexOf("/checkout/done")!==-1;if(R){try{localStorage.removeItem("mm_onepage_draft")}catch{}return}if(!E&&!w&&!F&&!L)return;b._retries=(b._retries||0)+1;var c=document.querySelector("#checkout-main-area");if(!c){try{var G=document.body&&document.body.textContent||"",H=/muito tempo inativo|realize login novamente/i.test(G);if((F||w)&&(H||b._retries>=40)&&!sessionStorage.getItem("mm_checkout_recovery")){sessionStorage.setItem("mm_checkout_recovery","1"),location.href="/checkout/cart";return}}catch{}b._retries<40&&setTimeout(b,400);return}try{sessionStorage.removeItem("mm_checkout_recovery")}catch{}function S(n){return isNaN(n)||n<0?"R$ 0,00":"R$ "+n.toFixed(2).replace(".",",").replace(/(\d)(?=(\d{3})+,)/g,"$1.")}function M(n){if(!n)return 0;var t=String(n).match(/(-?[\d.]+,\d{2})/);return t&&parseFloat(t[1].replace(/\./g,"").replace(",","."))||0}function T(n){return String(n||"").replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}var P={truck:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-5l-3-4zM6 18.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.5-7H17V9.5h2.04l1.46 2-.04 0z"/></svg>',check:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',checkCircle:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',bolt:'<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',shield:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>',lock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>',card:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',rotate:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',minus:'<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',plus:'<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M3 7h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',trash:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',close:'<svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5l-7 7M3.5 3.5l7 7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',arrow:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',tag:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',whats:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',box:'<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>'},en={get:function(n){try{return localStorage.getItem(n)}catch{return null}},set:function(n,t){try{localStorage.setItem(n,t)}catch{}},remove:function(n){try{localStorage.removeItem(n)}catch{}}};function on(n){try{var t={ts:Date.now(),items:n.items.map(function(e){return{name:e.name,variant:e.variant,imgSrc:e.imgSrc,quantity:e.quantity,lineTotal:e.lineTotal,lineTotalPix:e.lineTotalPix,isPix:e.isPix,deposito:e.deposito}}),subtotalPix:n.subtotalPix,subtotalFull:n.subtotalFull,discount:n.discount,couponCode:n.couponCode,shipping:n.shipping,shippingDeadline:n.shippingDeadline,shippingName:n.shippingName,shippingCity:n.shippingCity,shippingOptions:n.shippingOptions,cepValue:n.cepValue};en.set(j,JSON.stringify(t))}catch{}}function pn(){try{var n=en.get(j);if(!n)return null;var t=JSON.parse(n);return!t||!t.ts||Date.now()-t.ts>I?null:t}catch{return null}}function fn(){try{for(var n=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep","mm-op-rua","mm-op-num","mm-op-comp","mm-op-bairro","mm-op-cidade","mm-op-uf"],t={ts:Date.now()},e=0,r=0;r<n.length;r++){var m=document.getElementById(n[r]);m&&m.value&&(t[n[r]]=m.value,e++)}if(e===0){window._mmDraftDebug&&console.log("[mm-draft] skip save (0 fields)");return}en.set(g,JSON.stringify(t)),window._mmDraftDebug&&console.log("[mm-draft] saved",e,"fields",t)}catch(d){window._mmDraftDebug&&console.warn("[mm-draft] save failed",d)}}function Vn(){try{var n=en.get(g);if(!n)return null;var t=JSON.parse(n);return!t||!t.ts?null:Date.now()-t.ts>i?(en.remove(g),null):t}catch{return null}}function Un(){try{en.remove(g)}catch{}}function Tn(){var n=Vn();if(!n)return window._mmDraftDebug&&console.log("[mm-draft] no draft to restore"),null;for(var t=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep","mm-op-rua","mm-op-num","mm-op-comp","mm-op-bairro","mm-op-cidade","mm-op-uf"],e=0,r=0;r<t.length;r++){var m=document.getElementById(t[r]);if(m&&n[t[r]]){try{var d=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;d.call(m,n[t[r]])}catch{m.value=n[t[r]]}m.dispatchEvent(new Event("input",{bubbles:!0})),/^mm-op-(rua|bairro|cidade|uf)$/.test(t[r])&&(m.dataset.mmCepFill="1"),e++}}return window._mmDraftDebug&&console.log("[mm-draft] restored",e,"fields from draft",n),n}function hn(){for(var n={items:[],subtotalPix:0,subtotalFull:0,discount:0,shipping:null,shippingRaw:"",shippingDeadline:"",shippingName:"",shippingCity:"",shippingOptions:[],couponCode:"",cepValue:"",canFinalize:!1,hasFinalizar:!1},t=c.querySelectorAll(".cart-item"),e=0;e<t.length;e++){var r=t[e],m=r.querySelector('.qtd-item[id^="item_carrinho_"]'),d=m&&m.id.match(/item_carrinho_(\d+)/),x=d?parseInt(d[1],10):null,q=r.querySelector("figure img")||r.querySelector("#product-img")||r.querySelector("img"),N=r.querySelector(".nome-produto .link")||r.querySelector("figure a"),B=r.querySelector(".column-valor-produto .valor"),_=B?B.textContent.trim():"",O=!!r.querySelector(".column-valor-produto .sub");n.items.push({dataId:x,sku:r.getAttribute("data-item-id")||"",name:r.getAttribute("data-item-name")||r.getAttribute("data-name")||"",variant:r.getAttribute("data-item-variant")||"",brand:r.getAttribute("data-item-brand")||"",category:r.getAttribute("data-item-category")||"",priceUnit:parseFloat(r.getAttribute("data-item-price")||"0"),lineTotal:parseFloat(r.getAttribute("data-valor")||"0"),quantity:parseInt(r.getAttribute("data-item-quantity")||"1",10),deposito:r.getAttribute("data-item-deposito")==="1",imgSrc:q?q.getAttribute("src")||q.currentSrc:"",href:N?N.getAttribute("href"):"",lineTotalPix:M(_),isPix:O}),n.subtotalFull+=parseFloat(r.getAttribute("data-valor")||"0")}var K=c.querySelector("#resumo-compra .resumo-valores .value");K&&(n.subtotalPix=M(K.textContent)),n.subtotalPix<=0&&(n.subtotalPix=n.items.reduce(function(kt,Bt){return kt+(Bt.lineTotalPix||0)},0));var nn=c.querySelector("#resumo-compra .discount-value");nn&&(n.discount=M(nn.textContent));var rn=c.querySelector("#resumo-compra .txt-cupom");if(rn){var W=(rn.textContent||"").replace(/\s+/g,"").trim();/^[A-Za-z0-9][A-Za-z0-9._-]{1,}$/.test(W)&&(n.couponCode=W.toUpperCase())}var un=c.querySelector("#resumo-compra .frete-calculado, .frete-calculado");if(un&&un.textContent.trim()){n.shippingRaw=un.textContent.trim();var ln=un.querySelector(".frete-location .city");ln&&(n.shippingCity=ln.textContent.trim());for(var Cn=un.querySelectorAll(".servico-frete"),tn=0;tn<Cn.length;tn++){var sn=Cn[tn],gn=sn.querySelector('input[type="radio"]'),y=sn.querySelector(".dias-entrega"),k=parseFloat(sn.getAttribute("data-valor-frete")||"0"),V=sn.getAttribute("data-servico-frete")||"",Q=y?y.textContent.trim().replace(/\s+/g," ").replace(/\s*-\s*$/,"").trim():"",Z=Q.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i),vn=Z?Z[1].replace(/\s+/g," "):Q;n.shippingOptions.push({id:gn?gn.value:"",name:V,deadline:vn,value:k,isFree:k===0,isSelected:gn?gn.checked:!1})}var bn=n.shippingOptions.filter(function(kt){return kt.isSelected})[0];if(!bn&&n.shippingOptions.length>0&&(bn=n.shippingOptions[0]),bn)n.shipping=bn.value,n.shippingName=bn.name,n.shippingDeadline=bn.deadline;else{var Fn=un.querySelector(".info-frete-selec"),On=un.querySelector(".dias-entrega, .info-frete-selec .dias-entrega"),_n=un.querySelector(".valor-frete .value, .value.valor-frete"),at=un.querySelector(".info-frete-selec .info-title span, .info-title span");if(_n){var Xn=_n.textContent.trim();if(/gr[aá]tis/i.test(Xn))n.shipping=0;else{var ot=M(Xn);ot>0&&(n.shipping=ot)}}if(On){var it=On.textContent.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*\([^)]+\))?(?:\s*[úu]teis)?)/i);it&&(n.shippingDeadline=it[1].replace(/\s+/g," ").replace(/\(s\)/,"").trim())}if(at&&(n.shippingName=at.textContent.trim()),n.shipping===null)if(/gr[aá]tis/i.test(n.shippingRaw))n.shipping=0;else{var ht=M(n.shippingRaw);ht>0&&(n.shipping=ht)}if(!n.shippingDeadline){var Mn=n.shippingRaw.match(/(\d+(?:\s*[aà]\s*\d+)?)\s*dias?/i);Mn&&(n.shippingDeadline=Mn[1]+" dias úteis")}}}var bt=c.querySelector("#cep, .input-cep");return bt&&(n.cepValue=bt.value||""),n.hasFinalizar=!!c.querySelector("#finalizar-compra"),n.canFinalize=n.items.length>0,n}function Bn(n){n=n||"cart";var t='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>';function e(r,m){var d=r===n,x="mm-checkout-step"+(d?" is-active":""),q=d?' aria-current="step"':"";return'<li class="'+x+'"'+q+'><span class="mm-checkout-step-label">'+m+"</span></li>"}return'<header class="mm-checkout-header"><a class="mm-checkout-header-logo" href="/" aria-label="Madeira Mania - voltar à home"><img src="'+u+'" alt="Madeira Mania" width="180" height="44"></a><nav class="mm-checkout-steps" aria-label="Etapas do checkout"><ol>'+e("cart","Carrinho")+'<li class="mm-checkout-step-sep" aria-hidden="true">›</li>'+e("delivery","Entrega")+'<li class="mm-checkout-step-sep" aria-hidden="true">›</li>'+e("payment","Pagamento")+'</ol></nav><div class="mm-checkout-secure">'+t+'<span class="mm-checkout-secure-text"><strong>Compra 100% segura</strong><small>Site protegido por SSL</small></span></div></header>'}function In(n){var t=n.imgSrc?'<img src="'+T(n.imgSrc)+'" alt="'+T(n.name)+'" loading="lazy">':"",e=n.href?'<a class="mm-item-name" href="'+T(n.href)+'">'+T(n.name)+"</a>":'<span class="mm-item-name">'+T(n.name)+"</span>",r=n.variant?'<p class="mm-item-variant">'+T(n.variant)+"</p>":"",m="",d=n.quantity<=1?' disabled aria-disabled="true"':"",x;if(n.lineTotalPix>0&&n.isPix){var q='<span class="mm-item-price-sub">no PIX</span>',N=n.quantity>1?S(n.lineTotalPix/n.quantity)+" cada":"";x='<div class="mm-item-price"><span class="mm-item-price-value">'+S(n.lineTotalPix)+"</span>"+q+(N?'<span class="mm-item-price-unit">'+N+"</span>":"")+"</div>"}else{var B=n.quantity>1?S(n.priceUnit)+" cada":"";x='<div class="mm-item-price"><span class="mm-item-price-value">'+S(n.lineTotal)+"</span>"+(B?'<span class="mm-item-price-unit">'+B+"</span>":"")+"</div>"}return'<div class="mm-item" data-mm-id="'+n.dataId+'"><div class="mm-item-thumb">'+t+'</div><div class="mm-item-body">'+e+r+m+"</div>"+x+'<div class="mm-item-controls"><div class="mm-qty" role="group" aria-label="Quantidade"><button type="button" class="mm-qty-btn" data-mm-act="dec"'+d+' aria-label="Diminuir quantidade">'+P.minus+'</button><span class="mm-qty-value">'+n.quantity+'</span><button type="button" class="mm-qty-btn" data-mm-act="inc" aria-label="Aumentar quantidade">'+P.plus+'</button></div><button type="button" class="mm-item-remove" data-mm-act="remove" aria-label="Remover item" title="Remover">'+P.trash+"</button></div></div>"}function $n(n){return n.items.length?n.items.map(In).join(""):'<div class="mm-empty"><div class="mm-empty-icon">'+P.box+'</div><h3 class="mm-empty-title">Seu carrinho está vazio</h3><p class="mm-empty-desc">Explore nossos móveis e encontre a peça certa para sua casa.</p><a class="mm-empty-cta" href="/">Explorar produtos '+P.arrow+'</a><p class="mm-empty-perks">Frete grátis acima de R$ 2.000 · 12x sem juros · 7% off no PIX</p></div>'}function Dn(n){for(var t="",e=0;e<n;e++)t+='<div class="mm-skel-item"><div class="mm-skel mm-skel-thumb"></div><div class="mm-skel-lines"><div class="mm-skel mm-skel-line w-3-4"></div><div class="mm-skel mm-skel-line w-1-2"></div><div class="mm-skel mm-skel-line w-1-3"></div></div><div class="mm-skel-lines"><div class="mm-skel mm-skel-line w-1-2"></div></div></div>';return t}function xn(n){var t=n.subtotalFull>0?n.subtotalFull:n.subtotalPix,e='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+S(t)+"</span></div>";if(n.shipping!==null){var r;n.shipping===0?r='<span class="mm-row-value is-free">'+P.check+" Grátis</span>":r='<span class="mm-row-value">'+S(n.shipping)+"</span>";var m='<span class="mm-row-label">Frete';n.shippingName&&(m+=' <span class="mm-row-sub">· '+T(n.shippingName)+"</span>"),n.shippingDeadline&&(m+=' <span class="mm-row-sub">· '+T(n.shippingDeadline)+"</span>"),m+="</span>",e+='<div class="mm-row">'+m+r+"</div>"}n.discount>0&&(e+='<div class="mm-row"><span class="mm-row-label">Desconto</span><span class="mm-row-value is-discount">− '+S(n.discount)+"</span></div>");var d="";if(n.shipping!==null){var x=Math.max(0,t+n.shipping-n.discount),q=Math.max(0,n.subtotalPix+n.shipping-n.discount),N=x-q,B=x/12;d='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value">'+S(x)+'</div><div class="mm-total-pix"><span>'+S(q)+" à vista no PIX</span>"+(N>0?'<span class="mm-total-pix-save">economia de '+S(N)+"</span>":"")+'</div><div class="mm-total-parcela">ou 12x de '+S(B)+" sem juros no cartão</div></div>"}else d='<div class="mm-total"><div class="mm-total-label">Subtotal</div><div class="mm-total-value">'+S(n.subtotalPix)+'</div><div class="mm-total-pix"><span>à vista no PIX</span></div><div class="mm-total-pending">Informe seu CEP para ver o frete e o total final.</div></div>';var _;return n.couponCode?_='<div class="mm-coupon-applied"><span class="mm-coupon-applied-left">'+P.tag+"<span>"+T(n.couponCode)+'</span></span><button type="button" data-mm-act="coupon-remove" aria-label="Remover cupom">'+P.close+"</button></div>":_='<div class="mm-coupon"><button type="button" class="mm-coupon-toggle" data-mm-act="coupon-toggle">'+P.tag+'<span>Tenho um cupom</span></button><form class="mm-coupon-form" data-mm-act="coupon-submit"><input type="text" class="mm-input" name="mm-coupon-code" placeholder="CUPOM" autocomplete="off" autocapitalize="characters" spellcheck="false" /><button type="submit" class="mm-btn-secondary">Aplicar</button></form></div>','<div class="mm-sum-stack"><div class="mm-rows">'+e+"</div>"+_+d+"</div>"}function kn(){var n=document.getElementById("mm-layout");if(n)return n.parentElement!==c&&c.insertBefore(n,c.firstChild),n;var t=document.createElement("div");return t.id="mm-layout",t.innerHTML=Bn("cart")+'<div class="mm-grid"><section class="mm-items"><h2 class="mm-h">Carrinho</h2><div class="mm-items-card"><div id="mm-item-list">'+Dn(2)+'</div></div></section><aside class="mm-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><div class="mm-cep"><div class="mm-cep-label"><span class="mm-cep-label-text">Calcular frete</span><a class="mm-cep-label-link" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a></div><div class="mm-cep-row"><input type="text" class="mm-input" id="mm-cep-input" name="mm_cep_calc" inputmode="numeric" maxlength="9" placeholder="00000-000" autocomplete="off" data-lpignore="true" data-1p-ignore="true" data-bwignore="true" data-form-type="other" aria-label="CEP" /><button type="button" class="mm-btn-secondary" data-mm-act="calc-cep">Calcular</button></div></div><div id="mm-sum-dynamic"></div><button type="button" class="mm-cta" data-mm-act="finalizar">Finalizar compra'+P.arrow+'</button><div class="mm-trust"><span class="mm-trust-item">'+P.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+P.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+P.card+'<span>12x sem juros</span></span></div><a class="mm-help" href="'+f+'" target="_blank" rel="noopener" data-mm-track="help-whats">'+P.whats+"<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span></a></div></aside></div>",c.insertBefore(t,c.firstChild),c.classList.add("mm-shadow-mode"),document.body.classList.add("mm-checkout-rebuild"),document.documentElement.classList.remove("mm-cart-loading"),t}function Rn(){var n=hn(),t=document.getElementById("mm-item-list");t&&(t.innerHTML=$n(n));var e=document.getElementById("mm-sum-dynamic");e&&(e.innerHTML=xn(n));var r=document.querySelector(".mm-cta");r&&(r.disabled=!n.canFinalize,r.style.opacity=n.canFinalize?"1":"0.5",r.style.pointerEvents=n.canFinalize?"auto":"none");var m=document.getElementById("mm-cep-input");if(m&&!m.matches(":focus")){var d=en.get(D),x=n.cepValue||d||"";x&&(m.value=qn(x))}return n.items&&n.items.length>0&&on(n),n}function qn(n){var t=String(n||"").replace(/\D/g,"").slice(0,8);return t.length<=5?t:t.slice(0,5)+"-"+t.slice(5)}function Nn(n){var t=String(n||"").replace(/\D/g,"");t.length===8&&en.set(D,t)}function Wn(n){n=n||0;var t=en.get(D);if(!(!t||t.length!==8)){var e=c.querySelector("#cep, .input-cep");if(!e){n<12&&setTimeout(function(){Wn(n+1)},350);return}var r=c.querySelector("#resumo-compra .frete-calculado");if(r&&r.textContent.trim()){var m=document.getElementById("mm-cep-input");m&&!m.value&&(m.value=qn(t));return}var d=document.getElementById("mm-cep-input");d&&!d.value&&(d.value=qn(t)),e.value=qn(t),jn(e),setTimeout(function(){Zn()},200)}}function jn(n){try{var t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;t.call(n,n.value)}catch{}n.dispatchEvent(new Event("input",{bubbles:!0})),n.dispatchEvent(new Event("change",{bubbles:!0}))}function Zn(){try{if(window.Zord&&window.Zord.Cart&&typeof window.Zord.Cart.calculaFreteCarrinho=="function"){window.Zord.Cart.calculaFreteCarrinho();return}}catch{}var n=c.querySelector("#resumo-compra .calcula-frete > button, .area-frete button");n&&n.click()}function lt(){var n=document.getElementById("mm-layout");!n||n._mmBound||(n._mmBound=!0,n.addEventListener("click",function(t){var e=t.target.closest("[data-mm-act]");if(e){var r=e.getAttribute("data-mm-act"),m=e.closest(".mm-item"),d=m?parseInt(m.getAttribute("data-mm-id"),10):null;switch(r){case"inc":yn(d,m,"inc");break;case"dec":yn(d,m,"dec");break;case"remove":An(d,m);break;case"calc-cep":Gn();break;case"coupon-toggle":var x=e.closest(".mm-coupon");if(x){x.classList.add("is-open");var q=x.querySelector("input");q&&setTimeout(function(){q.focus()},100)}break;case"coupon-remove":En();break;case"finalizar":Qn();break}}}),n.addEventListener("submit",function(t){var e=t.target.closest('[data-mm-act="coupon-submit"]');if(e){t.preventDefault();var r=e.querySelector("input");r&&zn(r.value.trim())}}),n.addEventListener("input",function(t){t.target&&t.target.id==="mm-cep-input"&&(t.target.value=qn(t.target.value))}),n.addEventListener("keydown",function(t){t.key==="Enter"&&t.target&&t.target.id==="mm-cep-input"&&(t.preventDefault(),Gn())}))}function yn(n,t,e){if(!(!n||!t)&&!(!window.Zord||!window.Zord.checkout)){t.classList.add("is-updating");try{e==="inc"?window.Zord.checkout.adicionaQuantidade(n):window.Zord.checkout.removeQuantidade(n)}catch(r){console.warn("[mm-cart] qty change failed",r),t.classList.remove("is-updating")}}}function An(n,t){if(!(!n||!t)&&!(!window.Zord||!window.Zord.checkout)){t.classList.add("is-updating"),t.style.transition="opacity 200ms, transform 200ms",t.style.opacity="0",t.style.transform="translateX(-12px)";try{typeof window.Zord.checkout.deleteItem=="function"?window.Zord.checkout.deleteItem(n):window.Zord.checkout.removeQuantidade(n)}catch(e){console.warn("[mm-cart] remove failed",e),t.classList.remove("is-updating"),t.style.opacity="1",t.style.transform=""}}}function Gn(){var n=document.getElementById("mm-cep-input");if(n){var t=(n.value||"").replace(/\D/g,"");if(t.length!==8){n.focus(),n.classList.add("mm-input-error"),setTimeout(function(){n.classList.remove("mm-input-error")},1200);return}Nn(t);var e=c.querySelector("#cep, .input-cep");e&&(e.value=qn(t),jn(e)),Zn()}}function zn(n){if(n&&!(!window.Zord||!window.Zord.checkout)){var t=c.querySelector("#cupom-desconto");t&&(t.value=n.toUpperCase(),jn(t));try{window.Zord.checkout.addCupomDesconto()}catch(e){console.warn("[mm-cart] coupon apply failed",e)}}}function En(){if(!(!window.Zord||!window.Zord.checkout)){try{var n=pn();n&&n.couponCode&&(n.couponCode="",en.set(j,JSON.stringify(n)))}catch{}try{window.Zord.checkout.removeCupomDesconto()}catch(t){console.warn("[mm-cart] coupon remove failed",t)}}}function Qn(){try{var n=hn();n.items&&n.items.length>0&&on(n)}catch{}var t=document.getElementById("finalizar-compra");if(t){t.click();return}location.href="/checkout/identify"}if(E){let n=function(e){if(e=e||0,e>30){t();return}var r=c.querySelectorAll(".cart-item").length>0,m=c.querySelector("#resumo-compra");r||m||e>8?t():setTimeout(function(){n(e+1)},250)},t=function(){kn(),lt(),Rn(),Wn(),typeof jQuery<"u"&&jQuery(document).ajaxComplete(function(m,d,x){if(!(!x||!x.url)){var q=x.url;(q.indexOf("checkout/cart")!==-1||q.indexOf("atualiza")!==-1||q.indexOf("cupom")!==-1||q.indexOf("frete")!==-1||q.indexOf("removeItem")!==-1||q.indexOf("adicionaItem")!==-1)&&(setTimeout(Rn,120),setTimeout(function(){var N=hn();N.shipping!==null&&N.cepValue&&Nn(N.cepValue)},200))}});try{var e=new MutationObserver(function(m){t._mutTimer&&clearTimeout(t._mutTimer),t._mutTimer=setTimeout(Rn,200)}),r=[c.querySelector("#cart-area"),c.querySelector(".cart-area"),c.querySelector("#resumo-compra")].filter(Boolean);r.forEach(function(m){e.observe(m,{childList:!0,subtree:!0,characterData:!0})})}catch{}};if(!document.getElementById("mm-checkout-cro-done")){var dn=document.createElement("div");dn.id="mm-checkout-cro-done",dn.style.display="none",document.body.appendChild(dn)}n()}function Yn(n){if(!n||!n.items||!n.items.length)return'<aside class="mm-id-sum mm-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><div class="mm-sum-empty"><p>Não conseguimos carregar o resumo do seu pedido.</p><a class="mm-btn-secondary" href="/checkout/cart">Voltar ao carrinho</a></div></div></aside>';var t=3,e=n.items.slice(0,t),r=n.items.length-t,m=e.map(function(W){var un=W.quantity>1?'<strong class="mm-id-thumb-qty">'+W.quantity+"×</strong> ":"",ln=!W.imgSrc&&!(W.lineTotalPix>0)&&!(W.lineTotal>0);if(ln)return'<div class="mm-id-thumb"><div class="mm-id-thumb-img"><span class="mm-skel" style="display:block;width:100%;height:100%"></span></div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+un+T(W.name)+"</p>"+(W.variant?'<p class="mm-id-thumb-variant">'+T(W.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price"><span class="mm-skel" style="display:inline-block;width:56px;height:15px"></span></div></div>';var Cn=W.imgSrc?'<img src="'+T(W.imgSrc)+'" alt="'+T(W.name)+'" loading="lazy">':'<div class="mm-id-thumb-placeholder">'+P.box+"</div>",tn=W.lineTotal>0?W.lineTotal:W.lineTotalPix;return'<div class="mm-id-thumb"><div class="mm-id-thumb-img">'+Cn+'</div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+un+T(W.name)+"</p>"+(W.variant?'<p class="mm-id-thumb-variant">'+T(W.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price">'+S(tn)+"</div></div>"}).join("");r>0&&(m+='<div class="mm-id-thumb-more">+ '+r+" "+(r===1?"item":"itens")+" a mais</div>");var d=n.subtotalFull>0?n.subtotalFull:n.subtotalPix,x='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+S(d)+"</span></div>";if(n.shipping!==null&&n.shipping!==void 0){var q;n.shipping===0?q='<span class="mm-row-value is-free">'+P.check+" Grátis</span>":q='<span class="mm-row-value">'+S(n.shipping)+"</span>",x+='<div class="mm-row"><span class="mm-row-label">Frete'+(n.shippingDeadline?' <span class="mm-row-sub">· '+T(n.shippingDeadline)+"</span>":"")+"</span>"+q+"</div>"}n.discount>0&&(x+='<div class="mm-row"><span class="mm-row-label">Desconto'+(n.couponCode?' <span class="mm-row-sub">· '+T(n.couponCode)+"</span>":"")+'</span><span class="mm-row-value is-discount">− '+S(n.discount)+"</span></div>");var N,B=n.shipping!==null&&n.shipping!==void 0?n.shipping:0;if(n.shipping!==null&&n.shipping!==void 0){var _=Math.max(0,d+B-(n.discount||0)),O=Math.max(0,n.subtotalPix+B-(n.discount||0)),K=_-O,nn=_/12;N='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value">'+S(_)+'</div><div class="mm-total-pix"><span>'+S(O)+" à vista no PIX</span>"+(K>0?'<span class="mm-total-pix-save">economia de '+S(K)+"</span>":"")+'</div><div class="mm-total-parcela">ou 12x de '+S(nn)+" sem juros</div></div>"}else{var rn=d/12;N='<div class="mm-total"><div class="mm-total-label">Subtotal</div><div class="mm-total-value">'+S(n.subtotalPix)+'</div><div class="mm-total-pix"><span>à vista no PIX</span></div><div class="mm-total-parcela">ou 12x de '+S(rn)+" sem juros</div></div>"}return'<aside class="mm-id-sum mm-sum"><h2 class="mm-h">Resumo do pedido</h2><div class="mm-sum-card"><div class="mm-id-thumbs">'+m+'</div><div class="mm-rows">'+x+"</div>"+N+'<a class="mm-id-edit-cart" href="/checkout/cart"><span>Editar carrinho</span></a></div><a class="mm-help mm-sum-help" href="'+f+'" target="_blank" rel="noopener" data-mm-track="help-whats-sum">'+P.whats+"<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span></a></aside>"}function rt(){var n='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',t='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',e='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="9" x2="17" y2="9"/><line x1="7" y1="13" x2="17" y2="13"/><line x1="7" y1="17" x2="13" y2="17"/></svg>',r='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';return'<section class="mm-id-form-col"><h2 class="mm-id-h2">Quase lá! Identifique-se</h2><p class="mm-id-sub">Informe seu e-mail para finalizar a compra de forma rápida e segura.</p><form class="mm-id-form" data-mm-act="identify-submit" novalidate><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+n+'</span><input type="email" id="mm-id-email" name="mm-email" class="mm-input" placeholder="seu@email.com" autocomplete="email" inputmode="email" required></div><p class="mm-id-microcopy">'+P.lock+'<span>Seu e-mail é seguro · Não compartilhamos com terceiros</span></p><button type="submit" class="mm-cta">Continuar'+P.arrow+'</button></form><div class="mm-id-divider"><span>ou</span></div><div class="mm-id-google-slot"></div><button type="button" class="mm-id-guest-toggle" data-mm-act="guest-go" aria-label="Continuar como visitante"><span class="mm-id-guest-icon" aria-hidden="true">'+t+'</span><span class="mm-id-guest-label">Continuar como visitante (sem criar conta)</span><span class="mm-id-guest-arrow" aria-hidden="true">'+P.arrow+'</span></button><div class="mm-trust mm-id-trust"><span class="mm-trust-item">'+P.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+P.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+P.shield+'<span>Garantia 12 meses</span></span></div><p class="mm-id-lgpd">Ao continuar, você concorda com nossa <a href="/politica-de-privacidade" target="_blank" rel="noopener">Política de Privacidade</a></p></section>'}function gt(n){var t=document.getElementById("mm-layout");if(t)return t.parentElement!==c&&c.insertBefore(t,c.firstChild),t;var e=document.createElement("div");return e.id="mm-layout",e.classList.add("mm-id-layout"),e.innerHTML=Bn("delivery")+'<div class="mm-grid mm-id-grid">'+rt()+Yn(n)+"</div>",c.insertBefore(e,c.firstChild),document.body.classList.add("mm-checkout-rebuild"),Pn(),c.classList.add("mm-shadow-mode"),document.documentElement.classList.remove("mm-cart-loading"),e}function Pn(){var n=document.querySelector(".mm-id-google-slot"),t=c.querySelector(".social-login-area");if(!(!n||!t)&&!n.contains(t))try{n.appendChild(t),n.classList.add("is-loaded")}catch{}}function tt(n){en.set("mm_user_email",n);var t=c.querySelector("#login");if(!t)return!1;t.value=n,jn(t);var e=t.closest("form"),r=e?e.querySelector('button.button-send, button[type="submit"]'):null;return r?(r.click(),!0):e?(e.submit(),!0):!1}function pt(){var n=document.getElementById("mm-layout");!n||n._mmBound||(n._mmBound=!0,n.addEventListener("submit",function(t){var e=t.target.closest('[data-mm-act="identify-submit"]');if(e){t.preventDefault();var r=e.querySelector("#mm-id-email"),m=r?r.value.trim():"";if(!m||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)){r&&(r.classList.add("mm-input-error"),r.focus(),setTimeout(function(){r.classList.remove("mm-input-error")},1500));return}var d=tt(m);if(d){var x=e.querySelector(".mm-cta");x&&x.classList.add("is-loading")}return}}),n.addEventListener("click",function(t){var e=t.target.closest("[data-mm-act]");if(e){var r=e.getAttribute("data-mm-act");r==="guest-go"&&(en.set("mm_checkout_mode","guest"),e.classList.add("is-loading"),location.href="/checkout/onepage")}}))}function ct(n){try{var t=new DOMParser().parseFromString(n,"text/html"),e=t.querySelector("#checkout-main-area");if(!e)return null;for(var r=[],m=e.querySelectorAll(".cart-item"),d=0,x=0;x<m.length;x++){var q=m[x],N=q.querySelector("figure img")||q.querySelector("#product-img")||q.querySelector("img"),B=q.querySelector(".column-valor-produto .valor"),_=parseFloat(q.getAttribute("data-valor")||"0"),O=B?M(B.textContent):0;r.push({name:q.getAttribute("data-item-name")||q.getAttribute("data-name")||"",variant:q.getAttribute("data-item-variant")||"",imgSrc:N&&N.getAttribute("src")||"",quantity:parseInt(q.getAttribute("data-item-quantity")||"1",10),lineTotal:_,lineTotalPix:O,isPix:!!q.querySelector(".column-valor-produto .sub"),deposito:q.getAttribute("data-item-deposito")==="1"}),d+=_}if(r.length===0)return null;var K=e.querySelector("#resumo-compra .resumo-valores .value"),nn=K?M(K.textContent):0;nn<=0&&(nn=r.reduce(function(bn,Fn){return bn+(Fn.lineTotalPix||0)},0));var rn=e.querySelector("#resumo-compra .discount-value"),W=rn?M(rn.textContent):0,un=e.querySelector("#resumo-compra .txt-cupom"),ln="";if(un){var Cn=(un.textContent||"").replace(/\s+/g,"").trim();/^[A-Za-z0-9][A-Za-z0-9._-]{1,}$/.test(Cn)&&(ln=Cn.toUpperCase())}var tn=e.querySelector("#resumo-compra .frete-calculado"),sn=null,gn="";if(tn){var y=tn.querySelector(".servico-frete[data-valor-frete]");if(y){var k=y.getAttribute("data-valor-frete");if(k!==null&&k!==""){var V=parseFloat(k);isNaN(V)||(sn=V)}}var Q=tn.textContent.trim();if(sn===null&&Q){var Z=M(Q);Z>0&&(sn=Z)}var vn=Q.match(/(\d+)\s*dias?/i);vn&&(gn=vn[1]+" dias úteis")}return{ts:Date.now(),items:r,subtotalPix:nn,subtotalFull:d,discount:W,couponCode:ln,shipping:sn,shippingDeadline:gn,cepValue:""}}catch{return null}}function St(n){try{fetch("/checkout/cart",{credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(t){return t.text()}).then(function(t){var e=ct(t);e&&en.set(j,JSON.stringify(e)),n(e)}).catch(function(){n(null)})}catch{n(null)}}function Sn(n){var t=document.querySelector("#mm-layout .mm-id-sum");if(t){var e=t.parentNode;if(e){var r=document.createElement("div");r.innerHTML=Yn(n);var m=r.firstChild;m&&e.replaceChild(m,t)}}}function ft(){St(function(n){n&&n.items&&n.items.length>0&&Sn(n)})}if(w){let n=function(e){if(e=e||0,e>30){t();return}var r=c.querySelector("#login, #login-form-etapa-01");r||e>8?t():setTimeout(function(){n(e+1)},250)},t=function(){var e=pn();gt(e),pt(),Pn(),setTimeout(Pn,600),setTimeout(Pn,1500),ft(),setTimeout(function(){var r=document.getElementById("mm-id-email");r&&!("ontouchstart"in window)&&r.focus()},250)};n()}function xt(n){var t=String(n||"").replace(/\D/g,"").slice(0,11);return t.length<=3?t:t.length<=6?t.slice(0,3)+"."+t.slice(3):t.length<=9?t.slice(0,3)+"."+t.slice(3,6)+"."+t.slice(6):t.slice(0,3)+"."+t.slice(3,6)+"."+t.slice(6,9)+"-"+t.slice(9)}function Ct(n){var t=String(n||"").replace(/\D/g,"").slice(0,11);return t.length<=2?t.length?"("+t:"":t.length<=6?"("+t.slice(0,2)+") "+t.slice(2):t.length<=10?"("+t.slice(0,2)+") "+t.slice(2,6)+"-"+t.slice(6):"("+t.slice(0,2)+") "+t.slice(2,7)+"-"+t.slice(7)}function Et(n){var t=String(n||"").replace(/\D/g,"").slice(0,8);return t.length<=5?t:t.slice(0,5)+"-"+t.slice(5)}function yt(n,t){var e=String(n||"").replace(/\D/g,"");if(e.length!==8){t(null);return}try{fetch("https://viacep.com.br/ws/"+e+"/json/",{headers:{Accept:"application/json"}}).then(function(r){return r.json()}).then(function(r){if(!r||r.erro){t(null);return}t({logradouro:r.logradouro||"",bairro:r.bairro||"",cidade:r.localidade||"",estado:r.uf||""})}).catch(function(){t(null)})}catch{t(null)}}var Ln={mail:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',doc:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 12h8v2H8zm0 4h5v2H8z"/></svg>',phone:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>',pin:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',pix:'<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M11.917 11.71a2.046 2.046 0 0 1-1.454-.602l-2.1-2.1a.4.4 0 0 0-.551 0l-2.108 2.108a2.044 2.044 0 0 1-1.454.602h-.414l2.66 2.66c.83.83 2.177.83 3.007 0l2.667-2.668h-.253zM4.25 4.282c.55 0 1.066.214 1.454.602l2.108 2.108a.39.39 0 0 0 .552 0l2.1-2.1a2.044 2.044 0 0 1 1.453-.602h.253L9.503 1.623a2.127 2.127 0 0 0-3.007 0l-2.66 2.66h.414z"/><path d="m14.377 6.496-1.612-1.612a.307.307 0 0 1-.114.023h-.733c-.379 0-.75.154-1.017.422l-2.1 2.1a1.005 1.005 0 0 1-1.425 0L5.268 5.32a1.448 1.448 0 0 0-1.018-.422h-.9a.306.306 0 0 1-.109-.021L1.623 6.496c-.83.83-.83 2.177 0 3.008l1.618 1.618a.305.305 0 0 1 .108-.022h.901c.38 0 .75-.153 1.018-.421L7.375 8.57a1.034 1.034 0 0 1 1.426 0l2.1 2.1c.267.268.638.421 1.017.421h.733c.04 0 .079.01.114.024l1.612-1.612c.83-.83.83-2.178 0-3.008z"/></svg>',cardBig:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>',barcode:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 6h2v12H2zm3 0h1v12H5zm2 0h3v12H7zm4 0h1v12h-1zm3 0h2v12h-2zm3 0h1v12h-1zm2 0h3v12h-3z"/></svg>',editPencil:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>'};function zt(n){var t=n?' value="'+T(n)+'"':"";return'<section class="mm-op-form-col"><h2 class="mm-id-h2">Falta pouco. Onde entregar?</h2><p class="mm-id-sub">Preencha seus dados e o endereço de entrega — o frete é calculado automaticamente.</p><form class="mm-op-form" data-mm-act="onepage-submit" novalidate><div class="mm-op-card"><h3 class="mm-op-card-title">'+Ln.user+'<span>Quem vai receber</span></h3><div class="mm-op-grid-2"><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+Ln.mail+'</span><input type="email" id="mm-op-email" class="mm-input" placeholder="seu@email.com" autocomplete="email" inputmode="email" required'+t+'></div><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+Ln.user+'</span><input type="text" id="mm-op-nome" class="mm-input" placeholder="Nome completo" autocomplete="name" required></div><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+Ln.doc+'</span><input type="tel" id="mm-op-cpf" class="mm-input" placeholder="CPF" inputmode="numeric" autocomplete="off" maxlength="14" required></div><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+Ln.phone+'</span><input type="tel" id="mm-op-tel" class="mm-input" placeholder="(11) 91234-5678" inputmode="tel" autocomplete="tel" maxlength="15" required></div></div><p class="mm-op-microcopy-soft">Usamos seus dados só pra emitir nota fiscal e te avisar da entrega.</p></div><div class="mm-op-card"><h3 class="mm-op-card-title">'+Ln.pin+'<span>Endereço de entrega</span></h3><div class="mm-op-grid-2"><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+Ln.pin+'</span><input type="tel" id="mm-op-cep" class="mm-input" placeholder="CEP — 00000-000" inputmode="numeric" autocomplete="postal-code" maxlength="9" required><span class="mm-input-status" id="mm-op-cep-status" aria-live="polite"></span></div><a class="mm-op-cep-help" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+Ln.home+'</span><input type="text" id="mm-op-rua" class="mm-input" placeholder="Rua, Av, Travessa..." autocomplete="address-line1" required></div><div class="mm-input-wrap"><input type="tel" id="mm-op-num" class="mm-input mm-input-noicon" placeholder="Número" inputmode="numeric" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-comp" class="mm-input mm-input-noicon" placeholder="Complemento (opcional)" autocomplete="address-line2"></div><div class="mm-input-wrap mm-op-col-2"><input type="text" id="mm-op-bairro" class="mm-input mm-input-noicon" placeholder="Bairro" autocomplete="address-level3" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-cidade" class="mm-input mm-input-noicon" placeholder="Cidade" autocomplete="address-level2" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-uf" class="mm-input mm-input-noicon" placeholder="UF" maxlength="2" autocomplete="address-level1" required></div></div><div class="mm-op-frete" id="mm-op-frete-slot"></div></div><button type="submit" class="mm-cta mm-op-cta">Última etapa: pagamento'+P.arrow+'</button><p class="mm-id-microcopy mm-op-cta-sub">'+P.lock+'<span>Você revisa tudo antes de finalizar</span></p></form><div class="mm-trust mm-id-trust"><span class="mm-trust-item">'+P.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+P.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+P.shield+"<span>Garantia 12 meses</span></span></div></section>"}function wt(n,t){var e=document.getElementById("mm-layout");if(e)return e.parentElement!==c&&c.insertBefore(e,c.firstChild),e;var r=document.createElement("div");return r.id="mm-layout",r.classList.add("mm-id-layout"),r.classList.add("mm-op-layout"),r.innerHTML=Bn("delivery")+'<div class="mm-grid mm-id-grid mm-op-grid">'+zt(t)+Yn(n)+"</div>",c.insertBefore(r,c.firstChild),document.body.classList.add("mm-checkout-rebuild"),c.classList.add("mm-shadow-mode"),document.documentElement.classList.remove("mm-cart-loading"),r}function et(n){var t=document.getElementById("mm-op-frete-slot");if(t){if(n==="loading"){t.innerHTML='<div class="mm-op-frete-loading"><div class="mm-op-frete-spinner"></div><span>Calculando frete...</span></div>';return}if(n==="error"){t.innerHTML='<div class="mm-op-frete-error"><span>Não conseguimos calcular o frete. Confira o CEP e tente novamente.</span></div>';return}var e=n.value===0,r=e?'<strong class="mm-op-frete-value is-free">Grátis</strong>':'<strong class="mm-op-frete-value">'+S(n.value)+"</strong>",m=n.name?'<span class="mm-op-frete-name">'+T(n.name)+"</span>":"",d=n.deadline?'<span class="mm-op-frete-deadline">Entrega em '+T(n.deadline)+"</span>":"",x=n.city?'<span class="mm-op-frete-city">para '+T(n.city)+"</span>":"",q="";if(n.options&&n.options.length>1){q='<div class="mm-op-frete-options"><button type="button" class="mm-op-frete-toggle" data-mm-act="toggle-frete-opts" aria-expanded="false">Ver outras opções ('+n.options.length+')</button><div class="mm-op-frete-options-list" hidden>';for(var N=0;N<n.options.length;N++){var B=n.options[N],_=B.isSelected?" is-selected":"",O=B.isFree?'<span class="mm-op-frete-opt-value is-free">Grátis</span>':'<span class="mm-op-frete-opt-value">'+S(B.value)+"</span>";q+='<button type="button" class="mm-op-frete-opt'+_+'" data-mm-act="op-ship-select" data-ship-id="'+T(B.id)+'" aria-pressed="'+(B.isSelected?"true":"false")+'"><span class="mm-op-frete-opt-radio" aria-hidden="true"><span></span></span><span class="mm-op-frete-opt-body"><span class="mm-op-frete-opt-name">'+T(B.name||"Padrão")+"</span>"+(B.deadline?'<span class="mm-op-frete-opt-deadline">'+T(B.deadline)+"</span>":"")+"</span>"+O+"</button>"}q+="</div></div>"}t.innerHTML='<div class="mm-op-frete-card'+(e?" is-free":"")+'"><div class="mm-op-frete-icon">'+P.truck+'</div><div class="mm-op-frete-body"><div class="mm-op-frete-row">'+m+r+"</div>"+d+x+"</div></div>"+q}}function Mt(){try{var n=document.querySelector("#resumo-compra");if(n){var t=n.querySelector(".txt-cupom");if(t){var e=(t.textContent||"").replace(/\s+/g,"").trim();if(/^[A-Za-z0-9][A-Za-z0-9._-]{1,}$/.test(e))return e.toUpperCase()}return""}}catch{}try{var r=pn();if(r&&r.couponCode)return String(r.couponCode).toUpperCase()}catch{}return""}function qt(n,t){var e=qn(n),r=Mt(),m="cep="+encodeURIComponent(e);r&&(m+="&cupom-desconto="+encodeURIComponent(r)),fetch("/checkout/cart?operation=atualizaValoresCarrinho",{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest"},body:m}).then(function(d){return d.text()}).then(function(d){var x;try{x=new DOMParser().parseFromString(d,"text/html")}catch{t(null);return}for(var q=x.querySelectorAll(".servico-frete"),N=[],B=0;B<q.length;B++){var _=q[B],O=_.getAttribute("data-valor-frete");if(!(O===null||O==="")){var K=parseFloat(O);if(!isNaN(K)){var nn=_.querySelector('input[type="radio"]'),rn=_.querySelector(".dias-entrega"),W=rn?rn.textContent.trim():"",un=W.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i);N.push({id:nn?nn.value:"",name:_.getAttribute("data-servico-frete")||"",deadline:un?un[1].replace(/\s+/g," "):"",value:K,isFree:K===0,isSelected:nn?nn.checked:!1})}}}if(!N.length){t(null);return}var ln=N.filter(function(tn){return tn.isSelected})[0];ln||(ln=N.reduce(function(tn,sn){return sn.value<tn.value?sn:tn},N[0]),ln.isSelected=!0);var Cn=x.querySelector(".frete-location .city, .frete-calculado .city");t({value:ln.value,name:ln.name,deadline:ln.deadline,city:Cn?Cn.textContent.trim():"",options:N})}).catch(function(){t(null)})}function It(){function n(Q){if(!Q)return"";var Z=Q.match(/(\d+(?:\s*[aà]\s*\d+)?)\s*dias?(?:\s*\([^)]+\))?\s*([úu]teis)?/i);return Z?Z[1].replace(/\s+/g," ")+" dias úteis":""}function t(Q){for(var Z=[],vn=Q.querySelectorAll(".servico-frete"),bn=0;bn<vn.length;bn++){var Fn=vn[bn],On=Fn.querySelector('input[type="radio"]'),_n=Fn.querySelector(".dias-entrega"),at=parseFloat(Fn.getAttribute("data-valor-frete")||"0"),Xn=Fn.getAttribute("data-servico-frete")||"",ot=_n?_n.textContent.trim():"",it=ot.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i);Z.push({id:On?On.value:"",name:Xn,deadline:it?it[1].replace(/\s+/g," "):ot,value:at,isFree:at===0,isSelected:On?On.checked:!1})}return Z}var e=c.querySelector(".frete-calculado");if(e&&e.textContent.trim()){var r=t(e),m=e.querySelector(".frete-location .city"),d=m?m.textContent.trim():"",x=r.filter(function(Q){return Q.isSelected})[0]||r[0];if(x)return{value:x.value,name:x.name,deadline:x.deadline,city:d,options:r};var q=e.querySelector(".info-frete-selec .info-title span, .info-title span"),N=e.querySelector(".info-frete-selec .dias-entrega, .dias-entrega"),B=e.querySelector(".value.valor-frete, .valor-frete .value"),_=e.textContent,O=null;if(B&&(/gr[aá]tis/i.test(B.textContent)?O=0:O=M(B.textContent)),O===null&&(/gr[aá]tis/i.test(_)?O=0:O=M(_)||null),O!==null)return{value:O,name:q?q.textContent.trim():"",deadline:n(N?N.textContent:_),city:d,options:[]}}var K=c.querySelector(".line-entrega"),nn=c.querySelector(".value.valor-frete, .valor-frete .value");if(K||nn){var rn=((K||nn).textContent||"").trim(),W=pn(),un=W&&W.shippingName||"",ln=W&&W.shippingDeadline||"",Cn=W&&W.shippingCity||"",tn=W?W.shippingOptions||[]:[];if(rn){var sn=(c.querySelector(".nome-servico-frete, .info-frete-selec .info-title span")||{}).textContent||"",gn=(c.querySelector(".info-entrega, .prazo-entrega, .line-entrega .sub, .info-frete-selec .dias-entrega")||{}).textContent||"",y=n(gn)||n(rn)||ln,k=sn.trim()||un;if(/gr[aá]tis/i.test(rn))return{value:0,deadline:y,name:k,city:Cn,options:tn};var V=M(rn);if(V>0)return{value:V,deadline:y,name:k,city:Cn,options:tn}}if(W&&W.shipping!==null&&W.shipping!==void 0)return{value:W.shipping,deadline:ln,name:un,city:Cn,options:tn}}return null}function Hn(){var n=document.getElementById("mm-op-cep");if(n){var t=(n.value||"").replace(/\D/g,"");if(t.length===8){if(Hn._lastCep===t){var e=document.getElementById("mm-op-frete-slot");if(e&&e.querySelector(".mm-op-frete-card"))return}Hn._lastCep=t;var r=(Hn._token||0)+1;Hn._token=r,Nn(t);var m=c.querySelector("#cep, .input-cep");m&&(m.value=qn(t),jn(m)),et("loading"),qt(t,function(d){if(Hn._token===r){if(!d){et("error");return}et(d);var x=pn();x&&(x.shipping=d.value,x.shippingDeadline=d.deadline,x.shippingName=d.name||"",x.shippingCity=d.city||"",x.shippingOptions=d.options||[],en.set(j,JSON.stringify(x)),Sn(x))}})}}}function Jn(){var n=document.getElementById("mm-layout");if(!n||n._mmOpBound)return;n._mmOpBound=!0,n.addEventListener("click",function(e){var r=e.target.closest('[data-mm-act="toggle-frete-opts"]');if(r){e.preventDefault();var m=r.parentElement.querySelector(".mm-op-frete-options-list");if(m){var d=m.hasAttribute("hidden");d?m.removeAttribute("hidden"):m.setAttribute("hidden",""),r.setAttribute("aria-expanded",d?"true":"false"),r.textContent=d?"Ocultar opções":"Ver outras opções"}return}var x=e.target.closest('[data-mm-act="op-ship-select"]');if(x){e.preventDefault();var q=x.getAttribute("data-ship-id");if(!q)return;var N=c.querySelector('.servico-frete input[type="radio"][value="'+q+'"]');if(!N){console.warn("[mm-op] modalidade não encontrada no DOM:",q);return}for(var B=n.querySelectorAll(".mm-op-frete-opt"),_=0;_<B.length;_++){var O=B[_],K=O.getAttribute("data-ship-id")===q;O.classList.toggle("is-selected",K),O.setAttribute("aria-pressed",K?"true":"false")}N.checked=!0,N.click();var nn=pn();if(nn&&nn.shippingOptions&&nn.shippingOptions.length){var rn=nn.shippingOptions.filter(function(W){return String(W.id)===String(q)})[0];rn&&(nn.shipping=rn.value,nn.shippingDeadline=rn.deadline||"",nn.shippingName=rn.name||"",nn.shippingOptions=nn.shippingOptions.map(function(W){return W.isSelected=String(W.id)===String(q),W}),en.set(j,JSON.stringify(nn)),et({value:rn.value,deadline:rn.deadline||"",name:rn.name||"",city:nn.shippingCity||"",options:nn.shippingOptions}),Sn(nn))}return}}),n.addEventListener("submit",function(e){var r=e.target.closest('[data-mm-act="onepage-submit"]');if(r){e.preventDefault();var m={email:(document.getElementById("mm-op-email")||{}).value||"",nome:(document.getElementById("mm-op-nome")||{}).value||"",cpf:(document.getElementById("mm-op-cpf")||{}).value||"",tel:(document.getElementById("mm-op-tel")||{}).value||"",cep:(document.getElementById("mm-op-cep")||{}).value||"",rua:(document.getElementById("mm-op-rua")||{}).value||"",num:(document.getElementById("mm-op-num")||{}).value||"",comp:(document.getElementById("mm-op-comp")||{}).value||"",bairro:(document.getElementById("mm-op-bairro")||{}).value||"",cidade:(document.getElementById("mm-op-cidade")||{}).value||"",uf:(document.getElementById("mm-op-uf")||{}).value||""},d=[];if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.email.trim())||d.push("mm-op-email"),m.nome.trim().split(/\s+/).length<2&&d.push("mm-op-nome"),m.cpf.replace(/\D/g,"").length!==11&&d.push("mm-op-cpf"),m.tel.replace(/\D/g,"").length<10&&d.push("mm-op-tel"),m.cep.replace(/\D/g,"").length!==8&&d.push("mm-op-cep"),m.rua.trim()||d.push("mm-op-rua"),m.num.trim()||d.push("mm-op-num"),m.bairro.trim()||d.push("mm-op-bairro"),m.cidade.trim()||d.push("mm-op-cidade"),m.uf.trim()||d.push("mm-op-uf"),d.length){d.forEach(function(N){var B=document.getElementById(N);B&&(B.classList.add("mm-input-error"),setTimeout(function(){B.classList.remove("mm-input-error")},1800))});var x=document.getElementById(d[0]);x&&(x.focus(),x.scrollIntoView({block:"center",behavior:"smooth"}));return}var q=r.querySelector(".mm-cta");q&&q.classList.add("is-loading"),en.set("mm_user_email",m.email.trim()),C(m)}}),n.addEventListener("input",function(e){var r=e.target;if(r){if(r.dataset&&r.dataset.mmCepFill==="1"&&delete r.dataset.mmCepFill,r.id==="mm-op-cpf")r.value=xt(r.value);else if(r.id==="mm-op-tel")r.value=Ct(r.value);else if(r.id==="mm-op-cep"){r.value=Et(r.value);var m=r.value.replace(/\D/g,"");m.length===8&&vt(m)}else r.id==="mm-op-uf"&&(r.value=(r.value||"").replace(/[^A-Za-z]/g,"").toUpperCase().slice(0,2));r.id&&r.id.indexOf("mm-op-")===0&&(Jn._draftTimer&&clearTimeout(Jn._draftTimer),Jn._draftTimer=setTimeout(fn,400))}});function t(){Jn._draftTimer&&(clearTimeout(Jn._draftTimer),Jn._draftTimer=null),fn()}n.addEventListener("blur",function(e){var r=e.target;r&&r.id&&r.id.indexOf("mm-op-")===0&&t()},!0),window.addEventListener("beforeunload",t)}function vt(n){var t=document.getElementById("mm-op-cep-status");t&&(t.className="mm-input-status is-loading",t.textContent="Buscando..."),yt(n,function(e){if(t&&(t.className="mm-input-status"),!e){t&&(t.className="mm-input-status is-error",t.textContent="CEP não encontrado",setTimeout(function(){t.className="mm-input-status",t.textContent=""},2500));return}t&&(t.className="mm-input-status is-ok",t.innerHTML=P.check,setTimeout(function(){t.className="mm-input-status",t.innerHTML=""},1800));var r=[["mm-op-rua",e.logradouro],["mm-op-bairro",e.bairro],["mm-op-cidade",e.cidade],["mm-op-uf",e.estado]];r.forEach(function(d){var x=document.getElementById(d[0]);!x||!d[1]||(!x.value||x.dataset.mmCepFill==="1")&&(x.value=d[1],x.dataset.mmCepFill="1")});var m=document.getElementById("mm-op-num");m&&setTimeout(function(){m.focus()},100),Hn._t&&clearTimeout(Hn._t),Hn._t=setTimeout(Hn,200)})}function a(n){if(!document.getElementById("mm-op-overlay")){var t=document.createElement("div");t.id="mm-op-overlay",t.innerHTML='<div class="mm-op-overlay-card"><div class="mm-op-overlay-spinner"></div><p class="mm-op-overlay-text">'+T(n||"Processando...")+"</p></div>",document.body.appendChild(t)}}function l(n){var t=document.querySelector("#mm-op-overlay .mm-op-overlay-text");t&&(t.textContent=n)}var p=null;function v(){if(!window.__mmStep1Observed){window.__mmStep1Observed=!0;var n=/compraSemCadastro/i;try{var t=window.fetch;typeof t=="function"&&(window.fetch=function(m,d){var x=typeof m=="string"?m:m&&m.url||"",q=d&&d.body||"",N=n.test(x)||n.test(String(q)),B=t.apply(this,arguments);return N&&B.then(function(_){p&&(_&&_.ok?p.done=!0:p.failed=!0)}).catch(function(){p&&(p.failed=!0)}),B})}catch{}try{var e=XMLHttpRequest.prototype.open,r=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(m,d){return this.__mmU=d||"",e.apply(this,arguments)},XMLHttpRequest.prototype.send=function(m){try{if(n.test(this.__mmU||"")||n.test(String(m||""))){var d=this;d.addEventListener("load",function(){p&&(d.status>=200&&d.status<300?p.done=!0:p.failed=!0)}),d.addEventListener("error",function(){p&&(p.failed=!0)})}}catch{}return r.apply(this,arguments)}}catch{}}}function C(n){var t=document.querySelector(".mm-op-form .mm-op-retry");t&&t.remove();var e=n.nome.trim(),r=n.email.trim(),m=n.rua.trim(),d=n.bairro.trim(),x=n.cidade.trim(),q=n.uf.trim(),N=qn(n.cep.replace(/\D/g,""));en.set("mm_user_email",r);var B=function(_,O){var K=c.querySelector(_);if(!K)return!1;try{var nn=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;nn.call(K,O)}catch{K.value=O}return K.dispatchEvent(new Event("input",{bubbles:!0})),K.dispatchEvent(new Event("change",{bubbles:!0})),K.dispatchEvent(new Event("blur",{bubbles:!0})),!0};B("#nome-completo_2",e),B("#cpf_2",n.cpf),B("#email_3",r),B("#telefone_2",n.tel),B("#cep",N),B("#destinatario",e),B("#logradouro",m),B("#numero",n.num),B("#complemento",n.comp),B("#bairro",d),B("#cidade",x),B("#estado",q),a("Confirmando seus dados..."),setTimeout(function(){var _=document.getElementById("mm-layout");_&&(_.style.display="none"),c.classList.remove("mm-shadow-mode");function O(tn){var sn=c.querySelector("#"+tn);return sn?sn.closest("form"):null}function K(){var tn=O("nome-completo_2");if(!tn)return!1;var sn=tn.querySelector('button[type="submit"], input[type="submit"], button:not([type])');return sn?(sn.click(),!0):typeof tn.requestSubmit=="function"?(tn.requestSubmit(),!0):(tn.submit(),!0)}function nn(){var tn=document.querySelector(".mz-toast-popup.error, .swal2-toast.swal2-icon-error");if(tn&&/inativo|realize login/i.test(tn.textContent||""))return"error";for(var sn=document.querySelectorAll('button, [type="submit"]'),gn=0;gn<sn.length;gn++){var y=(sn[gn].textContent||"").toLowerCase();if(y.indexOf("cadastrar endere")!==-1&&sn[gn].offsetParent!==null)return"ready"}return"wait"}function rn(){var tn=O("cep");if(!tn)return!1;var sn=tn.querySelector('button[type="submit"], input[type="submit"], button:not([type])');return sn?(sn.click(),!0):typeof tn.requestSubmit=="function"?(tn.requestSubmit(),!0):(tn.submit(),!0)}function W(tn){var sn=document.getElementById("mm-op-overlay");sn&&sn.remove();var gn=document.getElementById("mm-layout");gn&&(gn.style.display=""),c.classList.add("mm-shadow-mode");var y=document.querySelector(".mm-op-form .mm-cta");y&&y.classList.remove("is-loading");var k=document.querySelector('.mm-op-form[data-mm-act="onepage-submit"]');if(k&&!k.querySelector(".mm-op-retry")){var V=document.createElement("div");V.className="mm-op-retry",V.setAttribute("data-mm-retry","1"),V.setAttribute("role","alert"),V.style.cssText="margin:14px 0;padding:12px 16px;border:1px solid #E7B84B;background:#FFF8E6;border-radius:12px;font-family:Poppins,system-ui,sans-serif;font-size:13px;color:#6B5313;line-height:1.45;",V.textContent=tn||"Quase lá — toque em “Última etapa: pagamento” novamente para concluir.",k.insertBefore(V,k.firstChild);try{V.scrollIntoView({block:"center",behavior:"smooth"})}catch{}}}function un(tn){tn===0&&l("Abrindo o pagamento...");var sn=document.querySelector('input[name="forma-pagto"], #forma-pagto-pix, #forma-pagto-cartao, #forma-pagto-boleto');if(sn&&sn.offsetParent!==null){try{A(n)}catch{var gn=document.getElementById("mm-op-overlay");gn&&gn.remove();var y=document.getElementById("mm-layout");y&&(y.style.display="none")}return}tn<40?setTimeout(function(){un(tn+1)},200):W("Não conseguimos abrir o pagamento. Toque em “Última etapa: pagamento” para tentar de novo.")}function ln(){l("Salvando sua entrega..."),rn(),un(0)}v();var Cn={done:!1,failed:!1};p=Cn,setTimeout(function(){K();var tn=80,sn=4,gn=0,y=null;(function k(){gn++;var V=document.querySelector('input[name="forma-pagto"], #forma-pagto-pix, #forma-pagto-cartao, #forma-pagto-boleto');if(V&&V.offsetParent!==null){un(0);return}var Q=nn();if(Cn.failed||Q==="error"){W("Não foi possível iniciar o pedido. Toque em “Última etapa: pagamento” para tentar de novo.");return}if(Q==="ready"){ln();return}if(Cn.done&&(y===null&&(y=gn),gn-y>=sn)){ln();return}if(gn<tn){setTimeout(k,250);return}Cn.done?ln():W("Está demorando mais que o normal. Toque em “Última etapa: pagamento” para tentar de novo.")})()},120)},80)}function z(){var n={pix:null,cartao:null,boleto:null},t=[];try{t=window.Zord&&window.Zord.Calculo&&window.Zord.Calculo.FormasPagamentoPedido||[]}catch{}t.forEach(function(O){var K=O.formaPagamento&&O.formaPagamento.id,nn=O.formaPagamento&&O.formaPagamento.isCartao,rn=O.condicoes||[];!rn.length||!nn||(!n.cartao||rn.length>n.cartao.condicoes.length)&&(n.cartao={formaId:K,valorTotal:rn[0].valorTotal,condicoes:rn.map(function(W){return{nome:W.condicaoPagamento&&W.condicaoPagamento.nome,numParcelas:W.condicaoPagamento&&W.condicaoPagamento.numeroParcelas,valorParcela:W.valorParcela,valorTotal:W.valorTotal}})})});function e(O){if(!O)return 0;var K=O.getAttribute&&O.getAttribute("data-valor-total");if(K){var nn=parseFloat(K);if(nn>0)return nn}var rn=(O.textContent||"").replace(/[^\d,.]/g,"");return rn.indexOf(",")!==-1&&(rn=rn.replace(/\./g,"").replace(",",".")),parseFloat(rn)||0}var r=document.querySelector("#valor-total-pedido-pix, .valor-total-pix[data-valor-total]"),m=e(r);if(m>0)n.pix={formaId:17,valorTotal:m};else{var d=t.find&&t.find(function(O){return O.formaPagamento&&O.formaPagamento.id===17});d&&d.condicoes&&d.condicoes[0]&&(n.pix={formaId:17,valorTotal:d.condicoes[0].valorTotal})}var x=document.querySelector("#valor-total-pedido-boleto, .valor-total-boleto[data-valor-total]"),q=e(x);if(q>0)n.boleto={valorTotal:q};else{var N=t.find&&t.find(function(O){var K=O.formaPagamento&&O.formaPagamento.id,nn=O.formaPagamento&&O.formaPagamento.isCartao;return!nn&&K!==17&&O.condicoes&&O.condicoes.length});N&&(n.boleto={formaId:N.formaPagamento.id,valorTotal:N.condicoes[0].valorTotal})}if(!n.cartao){var B=document.querySelector(".valor-parcela-cartao");if(B){var _=e(B);_>0&&(n.cartao={valorTotal:_*12,condicoes:[]})}}return n}function A(n){var t=pn(),e=z();c.classList.add("mm-shadow-mode"),document.body.classList.add("mm-checkout-rebuild");var r=document.getElementById("mm-layout");(!r||r.parentElement!==c)&&(r&&r.parentElement&&r.parentElement.removeChild(r),r=document.createElement("div"),r.id="mm-layout",c.insertBefore(r,c.firstChild)),r.className="mm-op-layout mm-op-step3-layout",r.style.display="",r.innerHTML=X(t,n,e),document.documentElement.classList.remove("mm-cart-loading");var m=document.getElementById("mm-op-overlay");m&&m.remove();try{window.scrollTo({top:0,behavior:"smooth"})}catch{window.scrollTo(0,0)}mn(n,e)}function X(n,t,e){var r=typeof renderGlobalFooter=="function"?renderGlobalFooter():"";return Bn("payment")+'<main class="mm-op-main"><div class="mm-op-step3-grid"><section class="mm-op-step3-left">'+U(e)+an()+'</section><aside class="mm-op-step3-sum-wrap">'+J(t)+Y(n,e,"pix")+"</aside></div></main>"+r}function J(n){var t=n||{},e=T(t.nome||""),r=T(t.email||""),m=T(t.cpf||""),d=T(t.tel||""),x=T(t.rua||""),q=T(t.num||""),N=t.comp?", "+T(t.comp):"",B=T(t.bairro||""),_=T(t.cidade||""),O=T(t.uf||""),K=T(t.cep||"");return'<div class="mm-op-step3-completed"><div class="mm-op-completed-card" data-section="dados"><div class="mm-op-completed-head"><span class="mm-op-completed-check">'+P.check+'</span><h3 class="mm-op-completed-title">Dados pessoais</h3><a href="/checkout/onepage" class="mm-op-completed-edit" data-mm-act="edit-dados" aria-label="Editar dados">'+Ln.editPencil+' Editar</a></div><dl class="mm-op-completed-body">'+(e?"<div><dt>Nome</dt><dd>"+e+"</dd></div>":"")+(r?"<div><dt>E-mail</dt><dd>"+r+"</dd></div>":"")+(m?"<div><dt>CPF</dt><dd>"+m+"</dd></div>":"")+(d?"<div><dt>Telefone</dt><dd>"+d+"</dd></div>":"")+'</dl></div><div class="mm-op-completed-card" data-section="endereco"><div class="mm-op-completed-head"><span class="mm-op-completed-check">'+P.check+'</span><h3 class="mm-op-completed-title">Endereço de entrega</h3><a href="/checkout/onepage" class="mm-op-completed-edit" data-mm-act="edit-endereco" aria-label="Editar endereço">'+Ln.editPencil+' Editar</a></div><address class="mm-op-completed-address">'+x+", "+q+N+"<br>"+B+" — "+_+"/"+O+"<br>"+(K?"CEP "+K:"")+"</address></div></div>"}function U(n){var t=n.pix?n.pix.valorTotal:0,e=n.cartao?n.cartao.valorTotal:0,r=n.boleto?n.boleto.valorTotal:0,m=e>t?e-t:0,d=null;n.cartao&&n.cartao.condicoes&&n.cartao.condicoes.length&&(d=n.cartao.condicoes[n.cartao.condicoes.length-1]);var x=d?"até "+d.numParcelas+"x de "+S(d.valorParcela)+" sem juros":e>0?"até 12x sem juros":"Cartão de crédito",q='<label class="mm-op-pay-radio is-active" data-forma="pix"><input type="radio" name="mm-pay" value="pix" checked><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+Ln.pix+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">PIX</span><span class="mm-op-pay-sub">Aprovação instantânea · em 1 minuto</span></div><div class="mm-op-pay-price">'+(m>0?'<span class="mm-op-pay-badge-save">Economize '+S(m)+"</span>":"")+'<span class="mm-op-pay-amount">'+S(t)+'</span></div></div><div class="mm-op-pay-detail"><ul class="mm-op-pay-benefits"><li>'+P.check+"<span>QR Code e Copia-e-Cola após confirmar</span></li><li>"+P.check+"<span>Pedido aprovado em até 1 minuto</span></li><li>"+P.check+"<span>Pagamento 100% seguro · sem dados de cartão</span></li></ul></div></label>",N='<div class="mm-op-pay-brands"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-visa.svg" alt="Visa" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-mastercard.svg" alt="Mastercard" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-american-express.svg" alt="American Express" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-elo.svg" alt="Elo" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-hipercard.svg" alt="Hipercard" width="32" height="20"></div>',B='<span class="mm-op-req" aria-hidden="true">*</span>';function _(rn){return'<span class="mm-op-field-err" id="'+rn+'-err" role="alert" aria-live="polite"></span>'}var O='<div class="mm-op-card-form"><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-num">Número do cartão'+B+'</label><div class="mm-input-wrap mm-input-wrap-card"><span class="mm-input-icon" aria-hidden="true">'+P.card+'</span><input id="mm-pay-card-num" type="tel" class="mm-input" inputmode="numeric" autocomplete="off" data-mmac="cc-number" placeholder="0000 0000 0000 0000" maxlength="23" aria-describedby="mm-pay-card-num-err" aria-required="true" disabled><span class="mm-op-card-brand-detected" aria-live="polite"></span></div>'+_("mm-pay-card-num")+'</div><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-name">Nome impresso no cartão'+B+'</label><input id="mm-pay-card-name" type="text" class="mm-input mm-input-noicon" autocomplete="off" data-mmac="cc-name" placeholder="Como aparece no cartão" maxlength="100" aria-describedby="mm-pay-card-name-err" aria-required="true" disabled>'+_("mm-pay-card-name")+'</div><div class="mm-op-card-field mm-op-card-field-half"><label for="mm-pay-card-exp">Validade'+B+'</label><input id="mm-pay-card-exp" type="tel" class="mm-input mm-input-noicon" inputmode="numeric" autocomplete="off" data-mmac="cc-exp" placeholder="MM/AA" maxlength="5" aria-describedby="mm-pay-card-exp-err" aria-required="true" disabled>'+_("mm-pay-card-exp")+'</div><div class="mm-op-card-field mm-op-card-field-half"><label for="mm-pay-card-cvv">CVV'+B+'</label><input id="mm-pay-card-cvv" type="tel" class="mm-input mm-input-noicon" inputmode="numeric" autocomplete="off" data-mmac="cc-csc" placeholder="000" maxlength="4" aria-describedby="mm-pay-card-cvv-err" aria-required="true" disabled>'+_("mm-pay-card-cvv")+'</div><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-installments">Condições de pagamento'+B+'</label><select id="mm-pay-card-installments" class="mm-input mm-input-noicon mm-op-card-installments" aria-describedby="mm-pay-card-installments-err" aria-required="true" disabled><option value="">Digite o cartão pra ver as condições</option></select>'+_("mm-pay-card-installments")+"</div></div>",K='<label class="mm-op-pay-radio" data-forma="cartao"><input type="radio" name="mm-pay" value="cartao"><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+Ln.cardBig+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">Cartão de Crédito</span><span class="mm-op-pay-sub">'+T(x)+'</span></div><div class="mm-op-pay-price"><span class="mm-op-pay-amount">'+S(e)+'</span></div></div><div class="mm-op-pay-detail">'+N+O+"</div></label>",nn='<label class="mm-op-pay-radio" data-forma="boleto"><input type="radio" name="mm-pay" value="boleto"><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+Ln.barcode+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">Boleto Bancário</span><span class="mm-op-pay-sub">Aprovação em 1 a 3 dias úteis</span></div><div class="mm-op-pay-price"><span class="mm-op-pay-amount">'+S(r)+'</span></div></div><div class="mm-op-pay-detail"><ul class="mm-op-pay-benefits"><li>'+P.check+"<span>Código de barras enviado por e-mail</span></li><li>"+P.check+"<span>Pagamento em banco, lotérica ou app</span></li><li>"+P.check+"<span>Vencimento em 3 dias úteis</span></li></ul></div></label>";return'<section class="mm-op-step3-card" aria-labelledby="mm-op-step3-h"><div class="mm-op-step3-heading"><h2 id="mm-op-step3-h" class="mm-h">Como você quer pagar?</h2><p class="mm-op-step3-sub">Última etapa · escolha sua forma de pagamento '+(m>0?"· PIX tem desconto de "+S(m):"")+'</p></div><div class="mm-op-pay-radios" role="radiogroup" aria-label="Forma de pagamento">'+q+K+nn+'</div><button type="button" class="mm-cta mm-op-cta mm-op-finalizar" data-mm-act="finalizar-compra">'+P.lock+'<span class="mm-op-finalizar-label">Finalizar compra · '+S(t)+'</span></button><p class="mm-op-finalizar-sub">'+P.shield+"<span>Pagamento seguro · criptografia SSL-256 · seus dados não são armazenados</span></p></section>"}function an(){return'<div class="mm-op-trust-payment"><div class="mm-op-trust-payment-row"><span class="mm-trust-item">'+P.lock+'<span>Site 100% seguro</span></span><span class="mm-trust-item">'+P.shield+'<span>Garantia 12 meses</span></span><span class="mm-trust-item">'+P.rotate+'<span>7 dias pra trocar</span></span><span class="mm-trust-item">'+P.whats+'<span>Atendimento humano</span></span></div><p class="mm-op-trust-payment-note">Ao finalizar, você concorda com os <a href="/termos-de-uso" target="_blank" rel="noopener">termos de compra</a> e a <a href="/politica-privacidade" target="_blank" rel="noopener">política de privacidade</a>.</p></div>'}function Y(n,t,e){if(!n||!n.items||!n.items.length)return'<aside class="mm-id-sum mm-sum mm-op-step3-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><p class="mm-sum-empty">Não conseguimos carregar o resumo do seu pedido.</p></div></aside>';var r=t.pix?t.pix.valorTotal:0,m=t.cartao?t.cartao.valorTotal:0,d=t.boleto?t.boleto.valorTotal:0,x=m>r?m-r:0,q=e==="pix"?r:e==="boleto"?d:m,N=e==="pix"?"no PIX":e==="boleto"?"no boleto":"no cartão",B=3,_=n.items.slice(0,B),O=n.items.length-B,K=_.map(function(ln){var Cn=ln.imgSrc?'<img src="'+T(ln.imgSrc)+'" alt="'+T(ln.name)+'" loading="lazy">':'<div class="mm-id-thumb-placeholder">'+P.box+"</div>",tn=ln.quantity>1?'<strong class="mm-id-thumb-qty">'+ln.quantity+"×</strong> ":"",sn=ln.lineTotal>0?ln.lineTotal:ln.lineTotalPix;return'<div class="mm-id-thumb"><div class="mm-id-thumb-img">'+Cn+'</div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+tn+T(ln.name)+"</p>"+(ln.variant?'<p class="mm-id-thumb-variant">'+T(ln.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price">'+S(sn)+"</div></div>"}).join("");O>0&&(K+='<div class="mm-id-thumb-more">+ '+O+" "+(O===1?"item":"itens")+" a mais</div>");var nn=n.subtotalFull>0?n.subtotalFull:n.subtotalPix,rn='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+S(nn)+"</span></div>";if(n.shipping!==null&&n.shipping!==void 0){var W=n.shipping===0?'<span class="mm-row-value is-free">'+P.check+" Grátis</span>":'<span class="mm-row-value">'+S(n.shipping)+"</span>";rn+='<div class="mm-row"><span class="mm-row-label">Frete'+(n.shippingDeadline?' <span class="mm-row-sub">· '+T(n.shippingDeadline)+"</span>":"")+"</span>"+W+"</div>"}n.discount>0&&(rn+='<div class="mm-row"><span class="mm-row-label">Cupom'+(n.couponCode?' <span class="mm-row-sub">· '+T(n.couponCode)+"</span>":"")+'</span><span class="mm-row-value is-discount">− '+S(n.discount)+"</span></div>"),x>0&&e==="pix"&&(rn+='<div class="mm-row mm-row-pix-discount"><span class="mm-row-label">'+P.bolt+' Desconto PIX</span><span class="mm-row-value is-discount">− '+S(x)+"</span></div>");var un='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value" data-mm-total>'+S(q)+'</div><div class="mm-total-pix" data-mm-total-sub><span>'+N+"</span></div></div>";return'<aside class="mm-id-sum mm-sum mm-op-step3-sum" data-active-forma="'+T(e)+'"><h2 class="mm-h">Resumo do pedido</h2><div class="mm-sum-card"><div class="mm-id-thumbs">'+K+'</div><div class="mm-sum-rows">'+rn+"</div>"+un+"</div></aside>"}function mn(n,t){var e=document.getElementById("mm-layout");if(!e||e._mmStep3Bound)return;e._mmStep3Bound=!0;var r=pn(),m={activeForma:"pix",cardNumValid:!1,cardBrand:null,cardInstallments:null,submitting:!1};e.addEventListener("click",function(y){var k=y.target.closest(".mm-op-pay-radio");if(k){var V=k.querySelector('input[type="radio"]');V&&!V.checked&&(y.preventDefault(),V.checked=!0,B(k.getAttribute("data-forma")));return}if(y.target.closest('[data-mm-act="finalizar-compra"]')){y.preventDefault(),gn();return}var Q=y.target.closest('[data-mm-act="edit-dados"], [data-mm-act="edit-endereco"]');if(Q){y.preventDefault(),location.reload();return}}),e.addEventListener("input",function(y){var k=y.target;!k||!k.id||(k.id==="mm-pay-card-num"?rn(k):k.id==="mm-pay-card-exp"?W(k):k.id==="mm-pay-card-cvv"&&(k.value=(k.value||"").replace(/\D/g,"").slice(0,4)))}),e.addEventListener("change",function(y){if(y.target&&y.target.id==="mm-pay-card-installments"){var k=y.target,V=k.options[k.selectedIndex];V&&V.value&&(m.cardInstallments={numero:parseInt(V.value,10),label:V.textContent||""},Cn(V.value),x("mm-pay-card-installments"))}}),e.addEventListener("blur",function(y){var k=y.target;if(!(!k||!k.id)){var V=["mm-pay-card-num","mm-pay-card-name","mm-pay-card-exp","mm-pay-card-cvv"];V.indexOf(k.id)!==-1&&q(k.id)}},!0),e.addEventListener("focus",function(y){var k=y.target;!k||!k.id||/^mm-pay-card-/.test(k.id)&&x(k.id)},!0);function d(y,k){var V=document.getElementById(y),Q=document.getElementById(y+"-err");V&&(V.classList.add("mm-input-error"),V.setAttribute("aria-invalid","true")),Q&&(Q.textContent=k,Q.classList.add("is-visible"))}function x(y){var k=document.getElementById(y),V=document.getElementById(y+"-err");k&&(k.classList.remove("mm-input-error"),k.removeAttribute("aria-invalid")),V&&(V.textContent="",V.classList.remove("is-visible"))}function q(y){var k=document.getElementById(y);if(!k)return!0;var V=(k.value||"").trim();if(y==="mm-pay-card-num"){var Q=V.replace(/\D/g,"");return Q?Q.length<13?(d(y,"Número do cartão incompleto"),!1):N(Q)?(x(y),!0):(d(y,"Número do cartão inválido — confira os dígitos"),!1):(d(y,"Informe o número do cartão"),!1)}if(y==="mm-pay-card-name")return V?V.split(/\s+/).length<2?(d(y,"Use o nome completo como aparece no cartão"),!1):(x(y),!0):(d(y,"Informe o nome impresso no cartão"),!1);if(y==="mm-pay-card-exp"){var Z=V.replace(/\D/g,"");if(Z.length!==4)return d(y,"Informe a validade no formato MM/AA"),!1;var vn=parseInt(Z.slice(0,2),10),bn=parseInt(Z.slice(2),10);if(vn<1||vn>12)return d(y,"Mês inválido (01 a 12)"),!1;var Fn=new Date,On=Fn.getFullYear()%100,_n=Fn.getMonth()+1;return bn<On||bn===On&&vn<_n?(d(y,"Cartão expirado"),!1):(x(y),!0)}if(y==="mm-pay-card-cvv"){var at=V.replace(/\D/g,"");return at.length<3?(d(y,"CVV deve ter 3 ou 4 dígitos"),!1):(x(y),!0)}return y==="mm-pay-card-installments"?V?(x(y),!0):(d(y,"Selecione o número de parcelas"),!1):!0}function N(y){for(var k=0,V=!1,Q=y.length-1;Q>=0;Q--){var Z=parseInt(y.charAt(Q),10);V&&(Z*=2,Z>9&&(Z-=9)),k+=Z,V=!V}return k%10===0}function B(y){if(!(!y||m.activeForma===y)){m.activeForma=y,e.querySelectorAll(".mm-op-pay-radio").forEach(function(Z){Z.classList.toggle("is-active",Z.getAttribute("data-forma")===y)});var k=document.getElementById("forma-pagto-"+y);if(k&&!k.checked)try{k.click()}catch{}var V=e.querySelectorAll(".mm-op-card-form input, .mm-op-card-form select"),Q=y==="cartao";V.forEach(function(Z){Z.disabled=!Q,Q?Z.dataset.mmac&&Z.setAttribute("autocomplete",Z.dataset.mmac):Z.setAttribute("autocomplete","off")}),_(y),y==="cartao"&&setTimeout(function(){var Z=document.getElementById("mm-pay-card-num");Z&&!Z.value&&Z.focus()},250)}}function _(y){var k=e.querySelector(".mm-op-step3-sum");if(k){k.setAttribute("data-active-forma",y);var V=t.pix?t.pix.valorTotal:0,Q=t.cartao?t.cartao.valorTotal:0,Z=t.boleto?t.boleto.valorTotal:0,vn=Q>V?Q-V:0,bn=y==="pix"?V:y==="boleto"?Z:Q,Fn=y==="pix"?"no PIX":y==="boleto"?"no boleto":"no cartão",On=k.querySelector("[data-mm-total]");if(On){var _n=On.textContent||"",at=M(_n);at!==bn?O(On,at,bn,360):On.textContent=S(bn)}var Xn=k.querySelector("[data-mm-total-sub] span");Xn&&Xn.textContent!==Fn&&(Xn.textContent=Fn);var ot=k.querySelector(".mm-sum-rows"),it=ot?ot.querySelector(".mm-row-pix-discount"):null;if(y==="pix"&&vn>0){if(!it&&ot){var ht=document.createElement("div");ht.innerHTML='<div class="mm-row mm-row-pix-discount"><span class="mm-row-label">'+P.bolt+' Desconto PIX</span><span class="mm-row-value is-discount">− '+S(vn)+"</span></div>",ot.appendChild(ht.firstChild)}}else it&&it.remove();K(y)}}function O(y,k,V,Q){y._mmAnimToken&&cancelAnimationFrame(y._mmAnimToken);var Z=null,vn=V-k;function bn(Fn){Z||(Z=Fn);var On=Fn-Z,_n=Math.min(1,On/Q),at=1-Math.pow(1-_n,3),Xn=k+vn*at;y.textContent=S(Xn),_n<1?y._mmAnimToken=requestAnimationFrame(bn):(y.textContent=S(V),y._mmAnimToken=null)}y._mmAnimToken=requestAnimationFrame(bn)}function K(y){var k=e.querySelector(".mm-op-finalizar-label");if(k){var V=y==="pix"?t.pix&&t.pix.valorTotal:y==="boleto"?t.boleto&&t.boleto.valorTotal:t.cartao&&t.cartao.valorTotal;k.textContent="Finalizar compra · "+S(V||0)}}function nn(y){var k=(y||"").replace(/\D/g,"");return k?/^4/.test(k)?"visa":/^(5[1-5]|22[2-9]|2[3-6]|27[01]|2720)/.test(k)?"mastercard":/^3[47]/.test(k)?"amex":/^(4011|4312|4389|4514|4573|5041|5066|5067|509|6277|6362|6363|650|6516|6550)/.test(k)?"elo":/^(606282|384100|384140|384160|606|637095|637568|637599|637609|637612)/.test(k)?"hipercard":null:null}function rn(y){var k=(y.value||"").replace(/\D/g,"").slice(0,19),V=k.replace(/(\d{4})(?=\d)/g,"$1 ");if(V!==y.value){var Q=y.selectionStart;y.value=V;try{y.setSelectionRange(Q+1,Q+1)}catch{}}var Z=nn(k);m.cardBrand=Z,m.cardNumValid=k.length>=13;var vn=e.querySelector(".mm-op-card-brand-detected");vn&&(vn.className="mm-op-card-brand-detected"+(Z?" is-"+Z:""),vn.textContent=Z?Z.toUpperCase():""),k.length>=6&&(un(k),sn())}function W(y){var k=(y.value||"").replace(/\D/g,"").slice(0,4),V=k.length>2?k.slice(0,2)+"/"+k.slice(2):k;if(y.value=V,k.length===4){var Q=k.slice(0,2),Z="20"+k.slice(2);ln("pag-cartao-mes-validade",String(parseInt(Q,10))),ln("pag-cartao-ano-validade",Z)}}function un(y){var k=document.getElementById("pag-cartao-numero");if(k){try{var V=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;V.call(k,y)}catch{k.value=y}k.dispatchEvent(new Event("input",{bubbles:!0})),k.dispatchEvent(new Event("change",{bubbles:!0})),k.dispatchEvent(new Event("blur",{bubbles:!0}))}}function ln(y,k){var V=document.getElementById(y);if(V){try{var Q=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;Q.call(V,k)}catch{V.value=k}V.dispatchEvent(new Event("change",{bubbles:!0}))}}function Cn(y){ln("pag-cartao-parcela",y)}var tn=null;function sn(){if(tn)return;var y=document.getElementById("pag-cartao-parcela");if(!y)return;var k=document.getElementById("mm-pay-card-installments");if(!k)return;function V(){var Q=y.querySelectorAll("option");if(!(Q.length<=1)){var Z="";Q.forEach(function(vn){if(!vn.value){Z+='<option value="">Selecione as parcelas</option>';return}Z+='<option value="'+T(vn.value)+'">'+T(vn.textContent.trim())+"</option>"}),k.innerHTML=Z,k.options.length>1&&(k.selectedIndex=1,m.cardInstallments={numero:parseInt(k.options[1].value,10)||1,label:k.options[1].textContent},Cn(k.options[1].value))}}V(),tn=new MutationObserver(V),tn.observe(y,{childList:!0,subtree:!0})}function gn(){if(console.log("[mm-checkout] submitFinalizar() entry",{submitting:m.submitting,activeForma:m.activeForma}),m.submitting)return;var y=m.activeForma,k=e.querySelector(".mm-op-finalizar");if(!k){console.log("[mm-checkout] submitFinalizar: no .mm-op-finalizar btn");return}if(y==="cartao"){var V=["mm-pay-card-num","mm-pay-card-name","mm-pay-card-exp","mm-pay-card-cvv","mm-pay-card-installments"],Q=V.filter(function(wn){return!q(wn)});if(console.log("[mm-checkout] validation",{errorCount:Q.length,errors:Q}),Q.length){var Z=document.getElementById(Q[0]);if(Z){Z.focus();try{Z.scrollIntoView({block:"center",behavior:"smooth"})}catch{}}return}var vn=document.getElementById("mm-pay-card-name"),bn=document.getElementById("mm-pay-card-cvv"),Fn=document.getElementById("pag-cartao-titular");if(Fn){try{var On=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;On.call(Fn,vn.value.trim())}catch{Fn.value=vn.value.trim()}Fn.dispatchEvent(new Event("input",{bubbles:!0})),Fn.dispatchEvent(new Event("blur",{bubbles:!0}))}var _n=document.getElementById("pag-cartao-vericacao");if(_n){try{var at=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;at.call(_n,bn.value.replace(/\D/g,""))}catch{_n.value=bn.value.replace(/\D/g,"")}_n.dispatchEvent(new Event("input",{bubbles:!0})),_n.dispatchEvent(new Event("blur",{bubbles:!0}))}var Xn=document.getElementById("pag-cartao-cpf");if(Xn&&n&&n.cpf){try{var ot=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;ot.call(Xn,n.cpf)}catch{Xn.value=n.cpf}Xn.dispatchEvent(new Event("input",{bubbles:!0})),Xn.dispatchEvent(new Event("blur",{bubbles:!0}))}}m.submitting=!0,k.classList.add("is-loading"),k.setAttribute("aria-busy","true");var it=k.querySelector(".mm-op-finalizar-label");if(it&&(it.textContent="Processando pagamento..."),a("Finalizando seu pedido..."),y==="cartao"){var ht=document.getElementById("mm-pay-card-installments");ht&&ht.value&&Cn(ht.value)}window.__mmCheckoutDebug=window.__mmCheckoutDebug||[];function Mn(wn,Kn){var nt={t:new Date().toISOString(),msg:wn,data:Kn};window.__mmCheckoutDebug.push(nt),console.log("[mm-checkout]",wn,Kn||"")}function bt(){if(Mn("doSubmit() called",{forma:y}),y==="cartao"){var wn=document.getElementById("aceito-termos-bcash-one-card");wn&&!wn.checked&&(wn.checked=!0,wn.dispatchEvent(new Event("change",{bubbles:!0}))),Mn("terms",{checked:wn?.checked})}var Kn=y==="pix"?"form-pag-pix":y==="boleto"?"form-pag-boleto":"form-pag-cartao",nt=document.getElementById(Kn);if(!nt){Mn("ERROR: form not found",{formId:Kn}),alert("Erro interno: formulário de pagamento não encontrado. Recarregue a página."),m.submitting=!1,k.classList.remove("is-loading");var mt=document.getElementById("mm-op-overlay");mt&&mt.remove();return}y==="cartao"&&Mn("pre-submit cartao state",{numero:document.getElementById("pag-cartao-numero")?.value,bandeira:document.getElementById("pag-cartao-bandeira")?.value,parcela:document.getElementById("pag-cartao-parcela")?.value,titular:document.getElementById("pag-cartao-titular")?.value,mes:document.getElementById("pag-cartao-mes-validade")?.value,ano:document.getElementById("pag-cartao-ano-validade")?.value,cvv:document.getElementById("pag-cartao-vericacao")?.value?.length,cpf:document.getElementById("pag-cartao-cpf")?.value,tokenMp:document.getElementById("pag-cartao-token-mp")?.value?.substring(0,20)});var st=nt.querySelector('button.button-success, button[type="submit"], input[type="submit"]');if(st)Mn("clicking native button",{text:st.textContent?.trim()}),st.click();else if(typeof nt.requestSubmit=="function"){Mn("no native btn, using requestSubmit");try{nt.requestSubmit()}catch(dt){Mn("requestSubmit error",dt.message),nt.submit()}}else Mn("no native btn, using form.submit()"),nt.submit();setTimeout(function(){if(m.submitting&&location.pathname.indexOf("/onepage")!==-1){Mn("8s failsafe: still on /onepage, removing overlay"),m.submitting=!1,k.classList.remove("is-loading");var dt=document.getElementById("mm-op-overlay");dt&&dt.remove(),c.classList.remove("mm-shadow-mode"),e&&(e.style.display="none")}},8e3),setTimeout(function(){c.classList.remove("mm-shadow-mode"),e&&(e.style.display="none")},600)}function kt(){m.submitting=!1,k.classList.remove("is-loading"),k.removeAttribute("aria-busy");var wn=k.querySelector(".mm-op-finalizar-label");wn&&(wn.textContent="Finalizar compra");var Kn=document.getElementById("mm-op-overlay");Kn&&Kn.remove()}function Bt(){var wn=Date.now(),Kn=1e4;(function nt(){var mt=document.getElementById("pag-cartao-token-mp"),st=mt?(mt.value||"").trim():"",dt=st&&st!=="loading..."&&st.length>10;if(dt){Mn("fallback: token ready"),bt();return}if(Date.now()-wn>=Kn){Mn("fallback: timeout",{lastVal:st}),bt();return}setTimeout(nt,200)})()}function Nt(){if(Mn("generateMpTokenAndSubmit() start"),typeof Mercadopago>"u"){Mn("Mercadopago global missing, falling back to wait strategy"),Bt();return}var wn=document.getElementById("pag-cartao-token-mp"),Kn=wn?(wn.value||"").trim():"";if(Kn&&Kn!=="loading..."&&Kn.length>10){Mn("token already present, submitting",{len:Kn.length}),bt();return}var nt=(document.getElementById("mm-pay-card-num")?.value||"").replace(/\D/g,""),mt=(document.getElementById("mm-pay-card-exp")?.value||"").replace(/\D/g,""),st=(document.getElementById("mm-pay-card-cvv")?.value||"").replace(/\D/g,""),dt=(document.getElementById("mm-pay-card-name")?.value||"").trim(),Pt=(n&&n.cpf||document.getElementById("mm-op-cpf")?.value||"").replace(/\D/g,"");if(!nt||!mt||!st||!dt||!Pt){Mn("missing card fields",{num:nt.length,exp:mt.length,cvv:st.length,name:!!dt,doc:Pt.length}),alert("Preencha todos os dados do cartão antes de finalizar."),kt();return}var Ot=mt.slice(0,2),Dt=mt.length===4?"20"+mt.slice(2):mt.slice(2);Mn("calling Mercadopago.createToken",{numLen:nt.length,month:Ot,year:Dt});try{Mercadopago.createToken({cardNumber:nt,securityCode:st,cardExpirationMonth:Ot,cardExpirationYear:Dt,cardholderName:dt,docType:"CPF",docNumber:Pt},function(At,ut){if(Mn("createToken callback",{status:At,hasId:!!(ut&&ut.id),err:ut&&ut.error}),At===200||At===201){if(wn){var jt=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;jt.call(wn,ut.id),wn.dispatchEvent(new Event("input",{bubbles:!0})),wn.dispatchEvent(new Event("change",{bubbles:!0}))}bt()}else{var Rt="Não foi possível validar os dados do cartão.";ut&&ut.cause&&ut.cause[0]&&ut.cause[0].description&&(Rt=ut.cause[0].description),alert(Rt),kt()}})}catch(At){Mn("createToken exception",At.message),Bt()}}y==="cartao"?Nt():setTimeout(bt,500)}}if(F){let n=function(e){if(e=e||0,e>30){t();return}var r=c.querySelector("#cep, .box-area-dados, #nome-completo_2");r||e>8?t():setTimeout(function(){n(e+1)},250)},t=function(){var e=pn(),r=en.get("mm_user_email")||"";en.remove("mm_checkout_mode"),typeof window._mmDraftDebug>"u"&&(window._mmDraftDebug=!1),wt(e,r),Jn();var m=Tn(),d=en.get(D),x=d&&String(d).replace(/\D/g,"").length===8;x?et("loading"):e&&typeof e.shipping=="number"&&e.shipping>0&&et({value:e.shipping,name:e.shippingName||"",deadline:e.shippingDeadline||"",city:e.shippingCity||"",options:e.shippingOptions||[]});try{var q=Array.from(c.querySelectorAll("a, button")).find(function(_){var O=(_.textContent||"").toLowerCase();return O.indexOf("sem cadastro")!==-1&&_.offsetParent!==null});q&&!q.classList.contains("active")&&q.click()}catch{}ft();var N=en.get(D);if(N&&N.length===8){var B=document.getElementById("mm-op-cep");B&&(B.value=qn(N),setTimeout(function(){vt(N)},400))}setTimeout(function(){if(!("ontouchstart"in window))for(var _=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep"],O=0;O<_.length;O++){var K=document.getElementById(_[O]);if(K&&!K.value){K.focus();break}}},350)};n()}if(L){document.documentElement.classList.remove("mm-cart-loading");var cn=c.querySelector('input[placeholder*="numero do cart" i]');cn&&(cn.inputMode="numeric");var o=c.querySelector('input[placeholder*="000" i]');o&&(!o.maxLength||o.maxLength<=4)&&(o.inputMode="numeric")}setTimeout(function(){document.documentElement.classList.contains("mm-cart-loading")&&(console.warn("[mm-cart] failsafe: removing mm-cart-loading after 2s timeout"),document.documentElement.classList.remove("mm-cart-loading"))},2e3)})(),(function(){var D=window.location.pathname,j=/^\/login\/?$/.test(D),I=D.indexOf("/cliente/pedidos")===0;if(!j&&!I)return;var g="5511915299488",i='<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';function s(c){return"https://api.whatsapp.com/send?phone="+g+"&text="+encodeURIComponent(c)}function u(c){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()}function f(c){var G=(c||"").replace(/\D/g,"").slice(0,14);if(G.length<=11)return G.length>9?G.slice(0,3)+"."+G.slice(3,6)+"."+G.slice(6,9)+"-"+G.slice(9):G.length>6?G.slice(0,3)+"."+G.slice(3,6)+"."+G.slice(6):G.length>3?G.slice(0,3)+"."+G.slice(3):G;var H=G.slice(0,2)+"."+G.slice(2,5)+"."+G.slice(5,8)+"/"+G.slice(8,12);return G.length>12&&(H+="-"+G.slice(12)),H}function h(c){return typeof c!="string"||!/cpfcnpj=/i.test(c)?c:c.replace(/(^|&)(cpfcnpj=)([^&]*)/i,function(G,H,S,M){return H+S+encodeURIComponent(f(decodeURIComponent(M)))})}function E(){if(!window.__mmConsultaFix){window.__mmConsultaFix=!0;var c=/operation=consultaPedido/i;try{var G=window.fetch;typeof G=="function"&&(window.fetch=function(M,T){try{var P=typeof M=="string"?M:M&&M.url||"";c.test(P)&&T&&typeof T.body=="string"&&(T.body=h(T.body))}catch{}return G.apply(this,arguments)})}catch{}try{var H=XMLHttpRequest.prototype.open,S=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(M,T){return this.__mmU=T||"",H.apply(this,arguments)},XMLHttpRequest.prototype.send=function(M){try{c.test(this.__mmU||"")&&typeof M=="string"&&(arguments[0]=h(M))}catch{}return S.apply(this,arguments)}}catch{}}}j&&E();function w(){function c(H){if(!H||H.getAttribute("data-mm-mask"))return;H.setAttribute("data-mm-mask","1"),H.setAttribute("maxlength","18"),H.setAttribute("inputmode","numeric");function S(){var P=f((H.value||"").replace(/\D/g,""));H.value!==P&&(H.value=P)}H.addEventListener("input",S),H.addEventListener("change",S),H.addEventListener("blur",S);var M=H.form;if(M&&!M.getAttribute("data-mm-mask")){M.setAttribute("data-mm-mask","1"),M.addEventListener("submit",S,!0);var T=M.querySelector('button.button-login, button[type="submit"], input[type="submit"]');T&&T.addEventListener("click",S,!0)}}var G=0;(function H(){var S=document.getElementById("form-consulta-pedido"),M=document.getElementById("cpfcnpj");if(!S||!M)return++G<20?void setTimeout(H,250):void 0;c(M);var T=S.querySelector(".title-area h2");if(T&&!S.querySelector(".mm-cp-eyebrow")){var P=document.createElement("span");P.className="mm-cp-eyebrow",P.textContent="Acompanhe sua compra",T.insertAdjacentElement("beforebegin",P)}function en(yn,An){if(yn){var Gn=yn.closest(".line")||yn.parentElement;if(!Gn.querySelector(".mm-cp-label")){var zn=document.createElement("label");zn.className="mm-cp-label",zn.textContent=An,yn.id&&zn.setAttribute("for",yn.id),Gn.insertAdjacentElement("afterbegin",zn)}}}en(M,"CPF ou CNPJ"),en(document.getElementById("numero-pedido"),"Nº do pedido"),M.placeholder="000.000.000-00";var on=document.getElementById("numero-pedido");on&&(on.placeholder="Ex.: 0012606865731");var pn=S.querySelector("button.button-login");if(pn)for(var fn=0;fn<pn.childNodes.length;fn++){var Vn=pn.childNodes[fn];Vn.nodeType===3&&/consultar/i.test(Vn.textContent)&&(Vn.textContent=" Consultar meu pedido ")}var Un=S.querySelector(".cancel-consulta span");Un&&(Un.textContent="Voltar para login");var Tn=document.getElementById("numero-pedido");if(Tn&&!S.querySelector(".mm-cp-hint")){var hn=document.createElement("span");hn.className="mm-cp-hint",hn.textContent="O número do pedido está no e‑mail de confirmação da compra.";var Bn=Tn.closest(".line")||Tn.parentElement;Bn.appendChild(hn)}var In=S.querySelector("form");if(In&&!S.querySelector(".mm-cp-wa")){var $n=document.createElement("div");$n.className="mm-cp-wa",$n.innerHTML='Não encontra os dados? <a href="'+s("Olá! Preciso de ajuda para consultar o meu pedido.")+'" target="_blank" rel="noopener">'+i+" Fale com a gente</a>",In.insertAdjacentElement("afterend",$n)}if(document.documentElement.classList.add("mm-consulta-on"),/(?:^|;\s*)zordEm=[^;\s]/.test(document.cookie)&&!S.querySelector(".mm-cp-logged")){var Dn=document.createElement("div");Dn.className="mm-cp-logged",Dn.innerHTML='<strong>Você já está logado.</strong><span>Esta consulta é para quem comprou sem cadastro. Para acompanhar as suas compras:</span><a href="/cliente/pedidos" class="mm-cp-logged-cta">Ver todos os meus pedidos</a>',S.insertAdjacentElement("afterbegin",Dn)}var xn=document.querySelector(".login-holder"),kn=document.querySelector(".page.page-login");if(xn&&kn){var Rn=xn.querySelector(".login-header");if(Rn&&!Rn.querySelector(".mm-lg-eyebrow")){var qn=document.createElement("span");qn.className="mm-lg-eyebrow",qn.textContent="Área do cliente";var Nn=Rn.querySelector("h2");Nn&&Nn.insertAdjacentElement("beforebegin",qn)}var Wn=xn.querySelector(".social-login-area");if(Wn&&!xn.querySelector(".mm-lg-ou")){var jn=document.createElement("div");jn.className="mm-lg-ou",jn.textContent="ou",Wn.insertAdjacentElement("beforebegin",jn)}setTimeout(function(){try{var yn=xn.querySelector(".social-login-area .render-button");yn&&window.google&&google.accounts&&google.accounts.id&&(yn.innerHTML="",google.accounts.id.renderButton(yn,{theme:"outline",size:"large",shape:"pill",width:320,text:"continue_with",logo_alignment:"center"}))}catch{}setTimeout(function(){var An=xn.querySelector(".social-login-area"),Gn=xn.querySelector(".mm-lg-ou"),zn=An&&An.offsetParent!==null&&An.querySelector("iframe");zn||(Gn&&(Gn.style.display="none"),An&&(An.style.display="none"))},2e3)},1200);var Zn=[].filter.call(xn.querySelectorAll("span, div, button"),function(yn){return/pessoa jur/i.test(yn.textContent)&&yn.textContent.length<60&&yn.children.length===0})[0];Zn&&Zn.classList.add("mm-lg-link");var lt=document.querySelector(".footer-login");lt&&[].forEach.call(lt.querySelectorAll("p"),function(yn){/nunca postaremos/i.test(yn.textContent)&&yn.classList.add("mm-lg-nopost")}),document.documentElement.classList.add("mm-login-on")}})(),/#consultar?-?pedido/i.test(window.location.hash)&&setTimeout(function(){var H=document.getElementById("form-consulta-pedido"),S=document.getElementById("cpfcnpj");H&&H.scrollIntoView({behavior:"smooth",block:"center"}),S&&setTimeout(function(){S.focus()},500)},600)}var F={"recebimento-pedido":"Pedido recebido","confirmacao-pagamento":"Pagamento confirmado","emissao-nota":"Nota fiscal emitida",transporte:"Em transporte",entrega:"Entregue"};function L(){var c=document.querySelector(".detalhes-pedido");if(!(!c||c.getAttribute("data-mm-ped"))){c.setAttribute("data-mm-ped","1");var G=c.querySelector(".numero-pedido"),H=G?(G.textContent.match(/[\d]+/)||[""])[0]:"",S=c.querySelector(".resumo-data strong"),M=S?S.textContent.trim().split(" ")[0]:"",T=c.querySelectorAll(".item-historico.status-waiting");T.length&&T[0].classList.add("mm-atual");for(var P='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"',en={"recebimento-pedido":"<svg "+P+'><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',"confirmacao-pagamento":"<svg "+P+'><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>',"emissao-nota":"<svg "+P+'><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M15 2v5h5"/><path d="M8 13h8"/><path d="M8 17h5"/></svg>',transporte:"<svg "+P+'><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',entrega:"<svg "+P+'><path d="M3 10.18v8.82a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8.82"/><path d="M2.5 10.5 12 3l9.5 7.5"/><path d="m9 15 2 2 4-4"/></svg>'},on=c.querySelectorAll(".item-historico"),pn=0;pn<on.length;pn++){var fn=on[pn];if(!fn.querySelector(".mm-step-dot")){var Vn="";for(var Un in en)if(fn.classList.contains(Un)){Vn=en[Un];break}var Tn=document.createElement("span");Tn.className="mm-step-dot",Tn.innerHTML=Vn,fn.insertAdjacentElement("afterbegin",Tn);var hn=document.createElement("span");hn.className="mm-step-line",fn.appendChild(hn)}}var Bn=c.querySelectorAll(".item-historico.status-success"),In="Pedido recebido";if(Bn.length){var $n=Bn[Bn.length-1];for(var Dn in F)if($n.classList.contains(Dn)){In=F[Dn];break}}if(!document.getElementById("mm-ped-hero")&&H){var xn=document.createElement("div");xn.id="mm-ped-hero",xn.innerHTML='<div class="mm-ped-hero-info"><span class="mm-ped-eyebrow">Acompanhe sua compra</span><h1 class="mm-ped-num">Pedido #'+H+' <button type="button" class="mm-ped-copy" aria-label="Copiar número do pedido">copiar</button></h1><div class="mm-ped-meta">'+(M?"<span>Feito em "+M+"</span>":"")+'<span class="mm-ped-badge">'+In+'</span></div></div><a class="mm-ped-hero-wa" target="_blank" rel="noopener" href="'+s("Olá! Gostaria de saber sobre o meu pedido #"+H+".")+'">'+i+" Falar sobre este pedido</a>",c.insertAdjacentElement("afterbegin",xn);var kn=c.querySelector(".resumo-pagamento .resumo-total > span:first-child");kn&&/resumo do pedido/i.test(kn.textContent)&&(kn.textContent="Total");var Rn=c.querySelector(".title-itens-pedido h3");Rn&&/itens do pedido/i.test(Rn.textContent)&&(Rn.textContent=" Itens do pedido ");for(var qn=document.querySelectorAll(".main-content h1, .main-content h2, .main-content .title-user-area, .main-content > div"),Nn=0;Nn<qn.length;Nn++){var Wn=qn[Nn];if(!Wn.contains(c)&&/meus pedidos/i.test(Wn.textContent||"")&&(Wn.textContent||"").trim().length<40){Wn.classList.add("mm-ped-native-title");break}}var jn=xn.querySelector(".mm-ped-copy");jn.addEventListener("click",function(){var ct=this;try{navigator.clipboard.writeText(H).then(function(){ct.textContent="copiado ✓",ct.classList.add("mm-copiado"),setTimeout(function(){ct.textContent="copiar",ct.classList.remove("mm-copiado")},2e3)})}catch{}})}var Zn=c.querySelector(".rastreio-area"),lt=Zn?Zn.querySelector(".previsao-entrega .previsao"):null,yn=lt?lt.textContent.trim():"";if(yn){var An=c.querySelector(".item-historico.entrega");if(An&&!An.querySelector(".mm-step-prev")){var Gn=document.createElement("span");Gn.className="mm-step-prev",Gn.textContent="Previsão: "+yn,An.appendChild(Gn)}}var zn=c.querySelector(".status-pagamento-pedido");if(zn&&!Zn&&!document.getElementById("mm-ped-entrega")){var En=document.createElement("div");En.id="mm-ped-entrega";for(var Qn=null,dn=c.querySelectorAll("a[href]"),Yn=0;Yn<dn.length;Yn++){var Nn=(dn[Yn].textContent||"")+" "+dn[Yn].href;if(/rastre/i.test(Nn)&&!/politica/i.test(dn[Yn].href)){Qn=dn[Yn];break}}var rt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>';Qn?(En.classList.add("mm-tem-rastreio"),En.innerHTML=rt+'<span>Seu pedido está a caminho — <a href="'+Qn.href+'" target="_blank" rel="noopener">acompanhe o rastreio aqui</a>.</span>'):En.innerHTML=rt+'<span>O código de rastreio aparece aqui assim que o pedido for despachado. Enquanto isso, acompanhe as etapas acima ou veja nossa <a href="/politica-de-entrega" target="_blank" rel="noopener">política de entrega</a>.</span>',zn.insertAdjacentElement("afterend",En)}var gt=document.querySelector(".btn-comprar-novamente"),Pn=document.querySelector(".btn-ajuda-pedido"),tt=gt||Pn?(gt||Pn).parentElement:null;tt&&!tt.classList.contains("mm-ped-acoes")&&(tt.classList.add("mm-ped-acoes"),tt.parentElement!==c&&c.appendChild(tt));var pt=document.querySelector("main.central-cliente");pt&&pt.children.length===1&&pt.classList.add("mm-ped-center"),document.documentElement.classList.add("mm-ped-on")}}function R(){if(!(!/rastrear/i.test(location.hash||"")&&!/rastrear/i.test(location.search||""))){var c=0;(function G(){var H=document.getElementById("form-consulta-pedido");if(!H||H.offsetParent===null)return++c<30?void setTimeout(G,200):void 0;try{H.scrollIntoView({behavior:"smooth",block:"center"})}catch{try{H.scrollIntoView()}catch{}}H.classList.add("mm-cp-flash"),setTimeout(function(){H.classList.remove("mm-cp-flash")},2400);var S=document.getElementById("numero-pedido");S&&setTimeout(function(){try{S.focus({preventScroll:!0})}catch{try{S.focus()}catch{}}},700)})()}}u(function(){try{j&&(w(),R()),I&&L()}catch(c){window.console&&console.warn&&console.warn("[mm-pedidos]",c)}})})()})();
