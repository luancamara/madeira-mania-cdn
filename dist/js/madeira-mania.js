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
</div>`;var P=b.firstElementChild;document.body.insertBefore(P,document.body.firstChild)}})(),(function(){var b=location.pathname;if(/^\/checkout\//i.test(b))return;try{if(localStorage.getItem("mm_no_tracking")==="1")return}catch{}if(window._uxa||document.querySelector('script[src*="contentsquare.net"]'))return;function P(){if(!(window._uxa||document.querySelector('script[src*="contentsquare.net"]'))){var T=document.createElement("script");T.src="https://t.contentsquare.net/uxa/7126f355c4bb8.js",T.async=!0,document.head.appendChild(T)}}function N(){"requestIdleCallback"in window?requestIdleCallback(P,{timeout:5e3}):setTimeout(P,2500)}document.readyState==="complete"?N():window.addEventListener("load",N,{once:!0})})(),(function(){var b="vnhd0x9eve";try{if(localStorage.getItem("mm_no_tracking")==="1")return}catch{}if(window.clarity||document.querySelector('script[src*="clarity.ms"]'))return;function P(){window.clarity||(function(T,h,o,m,c,f,u){T[o]=T[o]||function(){(T[o].q=T[o].q||[]).push(arguments)},f=h.createElement(m),f.async=1,f.src="https://www.clarity.ms/tag/"+c,u=h.getElementsByTagName(m)[0],u.parentNode.insertBefore(f,u)})(window,document,"clarity","script",b)}function N(){"requestIdleCallback"in window?requestIdleCallback(P,{timeout:4e3}):setTimeout(P,2e3)}document.readyState==="complete"?N():window.addEventListener("load",N,{once:!0})})(),(function(){if(!document.getElementById("mm-floating-whatsapp")){var P="5511915299488",N=(document.querySelector("#prod-nome")||{}).value,T=window.location.origin+window.location.pathname+(/^#derivacao=/.test(window.location.hash)?window.location.hash:""),h;N?h="Olá! Tenho interesse no "+N.trim()+". "+T:h="Olá! Vim pelo site e gostaria de ajuda. "+T;var o="https://api.whatsapp.com/send?phone="+P+"&text="+encodeURIComponent(h),m=document.createElement("a");m.id="mm-floating-whatsapp",m.href=o,m.target="_blank",m.rel="noopener noreferrer",m.setAttribute("aria-label","Fale conosco pelo WhatsApp"),m.style.cssText=["position: fixed","right: 14px","z-index: 98","display: flex","align-items: center","justify-content: center","width: 52px","height: 52px","background: #4b664a","border-radius: 50%","box-shadow: 0 3px 12px rgba(0,0,0,0.18)","text-decoration: none","transition: transform 0.15s ease","-webkit-tap-highlight-color: transparent"].join(";"),m.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" style="display:block;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',m.addEventListener("touchstart",function(){m.style.transform="scale(0.92)"},{passive:!0}),m.addEventListener("touchend",function(){m.style.transform=""},{passive:!0}),document.body.appendChild(m)}})(),(function(){var P=/^(utm_|gad_|gclid$|gbraid$|wbraid$|fbclid$|msclkid$|ttclid$|srsltid$)/;function N(){try{if(!window.history||!window.history.replaceState||!window.URL||!window.location.search)return;var T=new URL(window.location.href),h=[];T.searchParams.forEach(function(c,f){h.push(f)});var o=!1;if(h.forEach(function(c){P.test(c)&&(T.searchParams.delete(c),o=!0)}),!o)return;var m=T.searchParams.toString();window.history.replaceState(window.history.state,document.title,T.pathname+(m?"?"+m:"")+T.hash)}catch{}}document.readyState==="complete"?setTimeout(N,3e3):window.addEventListener("load",function(){setTimeout(N,3e3)})})(),(function(){var P=document.querySelector(".back-to-top");if(P){var N=P.querySelector(".icon");N&&(N.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',N.style.cssText="display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:none !important;")}})(),(function(){var P="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",N="https://api.whatsapp.com/send?phone=5511915299488&text="+encodeURIComponent("Olá! Vim pelo site e gostaria de ajuda."),T={phone:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',whats:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',mail:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',clock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',pin:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',lock:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>',shield:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>',truck:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',card:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',instagram:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',facebook:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>',tiktok:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.39a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.42z"/></svg>'};function h(){if(!document.getElementById("mm-footer")&&document.body){document.body.classList.add("mm-footer-rebuild");var o=document.createElement("footer");o.id="mm-footer",o.className="mm-footer",o.setAttribute("role","contentinfo"),o.innerHTML='<div class="mm-footer-main"><div class="mm-footer-grid"><div class="mm-footer-col mm-footer-brand"><a class="mm-footer-logo" href="/" aria-label="Madeira Mania - voltar à home"><img src="'+P+'" alt="Madeira Mania" width="180" height="48"></a><p class="mm-footer-tagline">Móveis com design moderno e qualidade superior pra transformar sua casa em um lar cheio de personalidade.</p><div class="mm-footer-social"><a href="https://www.instagram.com/madeira.mania" target="_blank" rel="noopener" aria-label="Instagram da Madeira Mania">'+T.instagram+'</a><a href="https://web.facebook.com/profile.php?id=61578397120844" target="_blank" rel="noopener" aria-label="Facebook da Madeira Mania">'+T.facebook+'</a><a href="https://www.tiktok.com/@madeira.mania" target="_blank" rel="noopener" aria-label="TikTok da Madeira Mania">'+T.tiktok+'</a></div></div><div class="mm-footer-col"><h4 class="mm-footer-h">Atendimento</h4><ul class="mm-footer-list"><li><a href="tel:+5511915299488">'+T.phone+'<span>(11) 91529-9488</span></a></li><li><a href="'+N+'" target="_blank" rel="noopener">'+T.whats+'<span>WhatsApp</span></a></li><li><a href="mailto:contato@madeiramania.com.br">'+T.mail+'<span>contato@madeiramania.com.br</span></a></li><li><span class="mm-footer-meta">'+T.clock+'<span>Seg a Sex · 8h às 18h</span></span></li></ul></div><div class="mm-footer-col"><h4 class="mm-footer-h">Sua compra</h4><ul class="mm-footer-list"><li><a href="/como-comprar">Como comprar</a></li><li><a href="/politica-de-entrega">Frete e entrega</a></li><li><a href="/politica-de-trocas-e-devolucoes">Trocas e devoluções</a></li><li><a href="/compra-segura">Compra segura</a></li><li><a href="/avaliacoes-de-clientes">Avaliações de clientes</a></li></ul></div><div class="mm-footer-col"><h4 class="mm-footer-h">Madeira Mania</h4><ul class="mm-footer-list"><li><a href="/quem-somos">Quem somos</a></li><li><a href="/atendimento">Central de atendimento</a></li><li><a href="/envio-imediato">Pronta entrega</a></li><li><a href="/politica-de-privacidade">Política de privacidade</a></li></ul></div></div></div><div class="mm-footer-trust"><div class="mm-footer-trust-inner"><div class="mm-footer-trust-item">'+T.lock+'<div class="mm-footer-trust-text"><strong>Compra 100% segura</strong><small>Site protegido por SSL</small></div></div><div class="mm-footer-trust-item">'+T.shield+'<div class="mm-footer-trust-text"><strong>7 dias para troca</strong><small>Direito de arrependimento</small></div></div><div class="mm-footer-trust-item">'+T.truck+'<div class="mm-footer-trust-text"><strong>Frete grátis</strong><small>Acima de R$ 2.000</small></div></div><div class="mm-footer-trust-item">'+T.card+'<div class="mm-footer-trust-text"><strong>12x sem juros</strong><small>Em todos os cartões</small></div></div></div></div><div class="mm-footer-bottom"><div class="mm-footer-bottom-inner"><p class="mm-footer-legal">© 2026 <strong>Madeira Mania</strong> · CNPJ 60.021.382/0001-61<br>Av. Paulista, 1636 · Bela Vista · São Paulo/SP · 01310-200</p><div class="mm-footer-payments" aria-label="Formas de pagamento aceitas"><span class="mm-pay-chip" title="PIX"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/pix.svg" alt="PIX" loading="lazy"></span><span class="mm-pay-chip" title="Visa"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/visa.svg" alt="Visa" loading="lazy"></span><span class="mm-pay-chip" title="Mastercard"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/mastercard.svg" alt="Mastercard" loading="lazy"></span><span class="mm-pay-chip" title="Elo"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/elo.svg" alt="Elo" loading="lazy"></span><span class="mm-pay-chip" title="Hipercard"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/hipercard.svg" alt="Hipercard" loading="lazy"></span><span class="mm-pay-chip" title="American Express"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/american2.svg" alt="American Express" loading="lazy"></span><span class="mm-pay-chip" title="Boleto Bancário"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/boleto.svg" alt="Boleto Bancário" loading="lazy"></span></div></div></div>',document.body.appendChild(o),document.documentElement.classList.remove("mm-footer-loading")}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h(),setTimeout(h,1e3),setTimeout(h,3e3),setTimeout(function(){document.documentElement.classList.remove("mm-footer-loading")},6e3)})(),(function(){"use strict";if(location.pathname.replace(/\/$/,"")!=="/atendimento")return;function b(){var P=document.querySelector(".atendimento .title-content");if(!(!P||P.dataset.mmEnhanced)){P.dataset.mmEnhanced="1";var N='<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.053 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64.001 5.122 1.03 6.988 2.898 1.866 1.868 2.893 4.352 2.892 6.992-.003 5.45-4.437 9.887-9.885 9.887zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.465 3.488z"/></svg>';P.innerHTML=["<h1>Fale com a gente</h1>",'<p class="mm-atd-lead">Nosso time está pronto para ajudar você a escolher os móveis certos para sua casa. Use o WhatsApp para respostas rápidas ou preencha o formulário abaixo.</p>','<div class="mm-atd-channels">','  <a class="mm-atd-whatsapp" href="https://api.whatsapp.com/send?phone=5511915299488&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20m%C3%B3veis." target="_blank" rel="noopener">',"    "+N,'    <span class="mm-atd-whatsapp-label">Fale pelo WhatsApp</span>','    <span class="mm-atd-whatsapp-number">11 91529-9488</span>',"  </a>",'  <div class="mm-atd-info">','    <div class="mm-atd-info-item">',"      <strong>Horário de atendimento</strong>","      <span>Segunda a sexta · 9h às 18h</span>","      <span>Sábado · 9h às 13h</span>","    </div>",'    <div class="mm-atd-info-item">',"      <strong>E-mail</strong>",'      <a href="mailto:contato@madeiramania.com.br">contato@madeiramania.com.br</a>',"    </div>","  </div>","</div>",'<h2 class="mm-atd-form-title">Formulário de contato</h2>'].join(`
`)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b(),setTimeout(b,500),setTimeout(b,2e3)})(),(function(){if(/^\/checkout\//.test(location.pathname)||document.getElementById("mm-header"))return;function b(){if(document.getElementById("mm-header"))return;var P="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",N={search:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',user:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',bag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>'},T=document.createElement("div");T.id="mm-header",T.innerHTML=['<a class="mm-h-skip" href="#main">Pular para o conteúdo</a>','<div class="mm-h-topbar">','  <div class="mm-h-topbar-inner">','    <span class="mm-h-topbar-desktop-only">','      <a href="/atendimento">Atendimento</a>','      <span class="mm-h-topbar-sep" aria-hidden="true">·</span>',"    </span>","    <span>Frete grátis R$ 2.000+</span>",'    <span class="mm-h-topbar-sep" aria-hidden="true">·</span>',"    <span>12x sem juros</span>","  </div>","</div>",'<div class="mm-h-main">','  <div class="mm-h-main-left">','    <button class="mm-h-burger" id="mm-h-burger" type="button" aria-label="Abrir menu"><span aria-hidden="true">☰</span></button>','    <button class="mm-h-action" id="mm-h-buscar" type="button">'+N.search+"<span>Buscar</span></button>","  </div>",'  <a class="mm-h-logo" href="/" aria-label="Madeira Mania, ir para a página inicial">','    <img src="'+P+'" alt="" width="280" height="70" loading="eager" />',"  </a>",'  <div class="mm-h-main-right">','    <a class="mm-h-action" href="/wishlist">'+N.heart+"<span>Favoritos</span></a>",'    <a class="mm-h-action" href="/login">'+N.user+"<span>Conta</span></a>",'    <button class="mm-h-action" type="button" id="mm-h-cart" aria-label="Carrinho, 0 itens" aria-live="polite">','      <span class="mm-h-cart-icon">'+N.bag+'<span class="mm-h-cart-badge" id="mm-h-cart-count" aria-hidden="true" hidden>0</span></span>',"      <span>Carrinho</span>","    </button>","  </div>","</div>",'<nav class="mm-h-nav" role="navigation" aria-label="Categorias">','  <ul class="mm-h-nav-list">','    <li class="mm-h-nav-item" data-menu="ambientes">','      <a href="#" class="mm-h-nav-link" aria-haspopup="true" aria-expanded="false">Ambientes</a>','      <div class="mm-h-mega" role="menu" aria-label="Ambientes">','        <div class="mm-h-mega-inner">','          <div class="mm-h-mega-col">','            <a href="/sala-de-estar-9677307902" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="sala-de-estar">Sala de Estar</a>',"            <ul>",'              <li><a href="/sala-de-estar/mesas">Mesas</a></li>','              <li><a href="/sala-de-estar/racks">Racks para TV</a></li>','              <li><a href="/sala-de-estar/estantes">Estantes</a></li>','              <li><a href="/sala-de-estar/home-theaters">Home Theaters</a></li>','              <li><a href="/sala-de-estar/aparadores">Aparadores</a></li>','              <li><a href="/sala-de-estar/cristaleiras">Cristaleiras</a></li>','              <li><a href="/sala-de-estar/buffets">Buffets</a></li>','              <li><a href="/sala-de-estar/bares">Bares</a></li>','              <li><a href="/sala-de-estar/paineis">Painéis</a></li>','              <li><a href="/sala-de-estar/nichos">Nichos</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col">','            <a href="/sala-de-jantar-1916970475" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="sala-de-jantar">Sala de Jantar</a>',"            <ul>",'              <li><a href="/sala-de-jantar/mesas">Mesas</a></li>','              <li><a href="/sala-de-jantar/cadeiras">Cadeiras</a></li>','              <li><a href="/sala-de-jantar/aparadores">Aparadores</a></li>','              <li><a href="/sala-de-jantar/buffets">Buffets</a></li>','              <li><a href="/sala-de-jantar/cristaleiras">Cristaleiras</a></li>','              <li><a href="/sala-de-jantar/balcoes">Balcões</a></li>','              <li><a href="/sala-de-jantar/banquetas">Banquetas</a></li>','              <li><a href="/sala-de-jantar/bares">Bares</a></li>',"            </ul>",'            <a href="/bar-e-cafe" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="bar-e-cafe">Bar e Café</a>',"            <ul>",'              <li><a href="/bar-e-cafe/bares">Bares</a></li>','              <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col">','            <a href="/cozinha-6327619447" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="cozinha">Cozinha</a>',"            <ul>",'              <li><a href="/cozinha/armarios-de-cozinha">Armários de Cozinha</a></li>','              <li><a href="/cozinha/balcoes">Balcões</a></li>','              <li><a href="/cozinha/banquetas">Banquetas</a></li>','              <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>','              <li><a href="/cozinha/cozinhas-completas">Cozinhas Completas</a></li>','              <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>','              <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>','              <li><a href="/cozinha/multiuso">Multiuso</a></li>','              <li><a href="/cozinha/paneleiros">Paneleiros</a></li>',"            </ul>",'            <a href="/lavanderia" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="lavanderia">Lavanderia</a>','            <a href="/banheiro" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="banheiro">Banheiro</a>',"          </div>",'          <div class="mm-h-mega-col">','            <a href="/quarto-0961844589" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="quarto">Quarto</a>',"            <ul>",'              <li><a href="/quarto/bercos">Berços</a></li>','              <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>','              <li><a href="/quarto/camas">Camas</a></li>','              <li><a href="/quarto/colchoes">Colchões</a></li>','              <li><a href="/quarto/comodas">Cômodas</a></li>','              <li><a href="/quarto/dormitorios">Dormitórios</a></li>','              <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>','              <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>','              <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>','              <li><a href="/quarto/roupeiros">Roupeiros</a></li>',"            </ul>",'            <a href="/escritorio-899523853" class="mm-h-mega-heading mm-h-mega-heading-link" data-hero="escritorio">Escritório</a>',"            <ul>",'              <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',"            </ul>","          </div>",'          <div class="mm-h-mega-col mm-h-mega-col-hero" aria-hidden="true">','            <div class="mm-h-mega-hero">','              <img class="mm-h-mega-hero-img" src="" alt="" loading="lazy" width="320" height="240" />','              <div class="mm-h-mega-hero-label"></div>',"            </div>","          </div>","        </div>",'        <div class="mm-h-mega-footer">','          <a href="/envio-imediato" class="mm-h-mega-cta">Ver todos os ambientes <span aria-hidden="true">→</span></a>',"        </div>","      </div>","    </li>",'    <li class="mm-h-nav-item">','      <a href="/envio-imediato" class="mm-h-nav-link">Envio Imediato</a>',"    </li>",'    <li class="mm-h-nav-item">','      <a href="/outlet" class="mm-h-nav-link">Outlet</a>',"    </li>","  </ul>","</nav>",'<div class="mm-h-drawer" id="mm-h-drawer" hidden role="dialog" aria-modal="true" aria-label="Menu">','  <div class="mm-h-drawer-backdrop"></div>','  <aside class="mm-h-drawer-panel">','    <div class="mm-h-drawer-header">','      <span class="mm-h-drawer-title">Menu</span>','      <button class="mm-h-drawer-close" id="mm-h-drawer-close" type="button" aria-label="Fechar menu">','        <span aria-hidden="true">×</span>',"      </button>","    </div>",'    <div class="mm-h-drawer-search">','      <form action="/busca" method="get">','        <input type="search" name="q" placeholder="Buscar" aria-label="Buscar" />',"      </form>","    </div>",'    <nav class="mm-h-drawer-nav" aria-label="Navegação móvel">','      <details class="mm-h-drawer-section">',"        <summary>Sala de Estar</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/sala-de-estar-9677307902">Ver todos →</a></li>','          <li><a href="/sala-de-estar/mesas">Mesas</a></li>','          <li><a href="/sala-de-estar/racks">Racks para TV</a></li>','          <li><a href="/sala-de-estar/estantes">Estantes</a></li>','          <li><a href="/sala-de-estar/home-theaters">Home Theaters</a></li>','          <li><a href="/sala-de-estar/aparadores">Aparadores</a></li>','          <li><a href="/sala-de-estar/cristaleiras">Cristaleiras</a></li>','          <li><a href="/sala-de-estar/buffets">Buffets</a></li>','          <li><a href="/sala-de-estar/bares">Bares</a></li>','          <li><a href="/sala-de-estar/paineis">Painéis</a></li>','          <li><a href="/sala-de-estar/nichos">Nichos</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Sala de Jantar</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/sala-de-jantar-1916970475">Ver todos →</a></li>','          <li><a href="/sala-de-jantar/mesas">Mesas</a></li>','          <li><a href="/sala-de-jantar/cadeiras">Cadeiras</a></li>','          <li><a href="/sala-de-jantar/aparadores">Aparadores</a></li>','          <li><a href="/sala-de-jantar/buffets">Buffets</a></li>','          <li><a href="/sala-de-jantar/cristaleiras">Cristaleiras</a></li>','          <li><a href="/sala-de-jantar/balcoes">Balcões</a></li>','          <li><a href="/sala-de-jantar/banquetas">Banquetas</a></li>','          <li><a href="/sala-de-jantar/bares">Bares</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Cozinha</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/cozinha-6327619447">Ver todos →</a></li>','          <li><a href="/cozinha/armarios-de-cozinha">Armários de Cozinha</a></li>','          <li><a href="/cozinha/balcoes">Balcões</a></li>','          <li><a href="/cozinha/banquetas">Banquetas</a></li>','          <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>','          <li><a href="/cozinha/cozinhas-completas">Cozinhas Completas</a></li>','          <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>','          <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>','          <li><a href="/cozinha/multiuso">Multiuso</a></li>','          <li><a href="/cozinha/paneleiros">Paneleiros</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Quarto</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/quarto-0961844589">Ver todos →</a></li>','          <li><a href="/quarto/bercos">Berços</a></li>','          <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>','          <li><a href="/quarto/camas">Camas</a></li>','          <li><a href="/quarto/colchoes">Colchões</a></li>','          <li><a href="/quarto/comodas">Cômodas</a></li>','          <li><a href="/quarto/dormitorios">Dormitórios</a></li>','          <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>','          <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>','          <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>','          <li><a href="/quarto/roupeiros">Roupeiros</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Bar e Café</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/bar-e-cafe">Ver todos →</a></li>','          <li><a href="/bar-e-cafe/bares">Bares</a></li>','          <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',"        </ul>","      </details>",'      <details class="mm-h-drawer-section">',"        <summary>Escritório</summary>","        <ul>",'          <li class="mm-h-drawer-viewall"><a href="/escritorio-899523853">Ver todos →</a></li>','          <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',"        </ul>","      </details>",'      <a href="/lavanderia" class="mm-h-drawer-link">Lavanderia</a>','      <a href="/banheiro" class="mm-h-drawer-link">Banheiro</a>','      <a href="/envio-imediato" class="mm-h-drawer-link">Envio Imediato</a>','      <a href="/outlet" class="mm-h-drawer-link">Outlet</a>',"    </nav>",'    <div class="mm-h-drawer-footer">','      <a href="/wishlist">Favoritos</a>','      <a href="/login">Conta</a>','      <a href="/atendimento">Atendimento</a>',"    </div>","  </aside>","</div>",'<div class="mm-h-search-overlay" id="mm-h-search-overlay" hidden role="dialog" aria-modal="true" aria-label="Buscar">','  <div class="mm-h-search-backdrop"></div>','  <div class="mm-h-search-inner">','    <button class="mm-h-search-close" id="mm-h-search-close" type="button" aria-label="Fechar busca">','      <span aria-hidden="true">×</span>',"    </button>",'    <form action="/busca" method="get" class="mm-h-search-form">','      <label for="mm-h-search-input" class="mm-h-search-label">O que você procura?</label>','      <input type="search" name="q" id="mm-h-search-input" placeholder="O que você procura?" autocomplete="off" />',"    </form>",'    <div class="mm-h-search-results" id="mm-h-search-results" hidden></div>','    <div class="mm-h-search-suggestions" id="mm-h-search-suggestions">','      <span class="mm-h-search-sug-label">Sugestões populares</span>','      <a href="/busca?q=mesa+de+jantar">Mesa de jantar</a>','      <a href="/busca?q=rack">Rack</a>','      <a href="/busca?q=guarda-roupas">Guarda-roupas</a>','      <a href="/busca?q=cristaleira">Cristaleira</a>','      <a href="/busca?q=aparador">Aparador</a>',"    </div>",'    <div class="mm-h-search-hint"><kbd>Esc</kbd> para fechar</div>',"  </div>","</div>"].join(`
`),document.body.insertBefore(T,document.body.firstChild),document.documentElement.classList.remove("mm-header-loading");var h=(function(){try{var n=Array.from(document.scripts).find(function(a){return a.src&&a.src.indexOf("madeira-mania.js")!==-1});if(n&&n.src.indexOf("localhost")!==-1)return"http://localhost:8080/assets/mega-hero/";if(n){var t=n.src.match(/@([^/]+)/);if(t)return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@"+t[1]+"/dist/assets/mega-hero/"}return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@main/dist/assets/mega-hero/"}catch{return"https://cdn.jsdelivr.net/gh/luancamara/madeira-mania-cdn@main/dist/assets/mega-hero/"}})(),o={"sala-de-estar":"Sala de Estar","sala-de-jantar":"Sala de Jantar",cozinha:"Cozinha","bar-e-cafe":"Bar e Café",quarto:"Quarto",escritorio:"Escritório",lavanderia:"Lavanderia",banheiro:"Banheiro"},m=T.querySelector(".mm-h-mega-hero-img"),c=T.querySelector(".mm-h-mega-hero-label");Object.keys(o).forEach(function(n){var t=new Image;t.src=h+n+".jpg"});function f(n){m&&(m.onerror=function(){m.style.visibility="hidden"},m.style.visibility="",m.src=h+n+".jpg",m.alt=o[n]||"",c&&(c.textContent=o[n]||""))}f("sala-de-estar"),T.querySelectorAll(".mm-h-mega-heading-link[data-hero]").forEach(function(n){n.addEventListener("mouseenter",function(){f(n.dataset.hero)})});var u=T.querySelectorAll(".mm-h-nav-item[data-menu]"),C=null,v=null;u.forEach(function(n){n.addEventListener("mouseenter",function(){clearTimeout(v),clearTimeout(C),C=setTimeout(function(){u.forEach(function(a){a.classList.remove("is-open");var i=a.querySelector(".mm-h-nav-link");i&&i.setAttribute("aria-expanded","false")}),n.classList.add("is-open");var t=n.querySelector(".mm-h-nav-link");t&&t.setAttribute("aria-expanded","true")},150)}),n.addEventListener("mouseleave",function(){clearTimeout(C),v=setTimeout(function(){n.classList.remove("is-open");var t=n.querySelector(".mm-h-nav-link");t&&t.setAttribute("aria-expanded","false")},200)})}),document.addEventListener("keydown",function(n){n.key==="Escape"&&u.forEach(function(t){t.classList.remove("is-open");var a=t.querySelector(".mm-h-nav-link");a&&a.setAttribute("aria-expanded","false")})});var F=T.querySelector('.mm-h-nav-item[data-menu="ambientes"] > .mm-h-nav-link');F&&F.addEventListener("click",function(n){n.preventDefault()});var q=document.getElementById("mm-h-search-overlay"),z=document.getElementById("mm-h-buscar"),d=document.getElementById("mm-h-search-close"),W=document.getElementById("mm-h-search-input"),Y=q&&q.querySelector(".mm-h-search-backdrop"),R=null;function H(){q&&(R=document.activeElement,q.hidden=!1,document.body.style.overflow="hidden",setTimeout(function(){W&&W.focus()},50))}function O(){q&&(q.hidden=!0,document.body.style.overflow="",R&&R.focus&&R.focus())}z&&z.addEventListener("click",H),d&&d.addEventListener("click",O),Y&&Y.addEventListener("click",O),document.addEventListener("keydown",function(n){if(n.key==="Escape"&&q&&!q.hidden){O();return}if(n.key==="/"&&q&&q.hidden){var t=document.activeElement&&document.activeElement.tagName;t!=="INPUT"&&t!=="TEXTAREA"&&!(document.activeElement&&document.activeElement.isContentEditable)&&(n.preventDefault(),H())}}),q&&q.addEventListener("keydown",function(n){if(!(n.key!=="Tab"||q.hidden)){var t=q.querySelectorAll("button, input, a[href]");if(t.length!==0){var a=t[0],i=t[t.length-1];n.shiftKey&&document.activeElement===a?(n.preventDefault(),i.focus()):!n.shiftKey&&document.activeElement===i&&(n.preventDefault(),a.focus())}}});var L=document.getElementById("mm-h-search-results"),tn=document.getElementById("mm-h-search-suggestions"),on=[{label:"Mesa de jantar",q:"mesa de jantar"},{label:"Mesa de centro",q:"mesa de centro"},{label:"Rack para TV",q:"rack"},{label:"Guarda-roupas",q:"guarda-roupas"},{label:"Cristaleira",q:"cristaleira"},{label:"Aparador",q:"aparador"},{label:"Buffet",q:"buffet"},{label:"Painel para TV",q:"painel"},{label:"Cabeceira",q:"cabeceira"},{label:"Cômoda",q:"comoda"},{label:"Estante",q:"estante"},{label:"Home theater",q:"home theater"}],mn="mm_recent_searches";function dn(){try{var n=localStorage.getItem(mn);if(!n)return[];var t=JSON.parse(n);return Array.isArray(t)?t.slice(0,5):[]}catch{return[]}}function Ln(n){if(n)try{var t=dn().filter(function(a){return a&&a.toLowerCase()!==n.toLowerCase()});t.unshift(n),localStorage.setItem(mn,JSON.stringify(t.slice(0,5)))}catch{}}function gn(n){return String(n).replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}var Hn='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',Tn='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',sn="mm_search_cache_v1",Pn=600*1e3,zn=20,qn=null;function bn(){try{return JSON.parse(sessionStorage.getItem(sn)||"{}")}catch{return{}}}function An(n){try{var t=Object.keys(n);if(t.length>zn){t.sort(function(i,l){return n[i].ts-n[l].ts});for(var a=0;a<t.length-zn;a++)delete n[t[a]]}sessionStorage.setItem(sn,JSON.stringify(n))}catch{}}function $n(n){var t=bn(),a=t[n.toLowerCase()];return!a||Date.now()-a.ts>Pn?null:a.products}function kn(n,t){var a=bn();a[n.toLowerCase()]={ts:Date.now(),products:t},An(a)}function Wn(n){for(var t="itens:",a=0;(a=n.indexOf(t,a))!==-1;){var i=n.indexOf("[",a);if(i===-1)return null;for(var l=0,g=!1,y=!1,S=-1,B=i;B<n.length;B++){var D=n.charAt(B);if(y){y=!1;continue}if(D==="\\"){y=!0;continue}if(D==='"'){g=!g;continue}if(!g){if(D==="[")l++;else if(D==="]"&&(l--,l===0)){S=B;break}}}if(S!==-1){var M=n.substring(i,S+1);try{var G=JSON.parse(M);if(Array.isArray(G)&&G.length>0)return G}catch{}}a=i+1}return null}function pn(n){var t=Wn(n);if(!t)return[];for(var a=[],i=0;i<t.length&&a.length<6;i++){var l=t[i];if(l){var g=l.titulo||l.nome||"";if(g){var y=l.link||"";y&&y.charAt(0)!=="/"&&y.indexOf("http")!==0&&(y="/"+y);var S=l.midia_url||"",B=parseFloat(l.valor),D=parseFloat(l.valor_de),M=isNaN(B)?"":"R$ "+B.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),G=!isNaN(D)&&D>B?"R$ "+D.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):"",Q="";typeof l.percentual_off=="number"&&l.percentual_off>0&&(Q="-"+Math.round(l.percentual_off)+"%"),a.push({href:y,title:g,img:S,price:M,oldPrice:G,discount:Q})}}}return a}function yn(n){var t=n.toLowerCase().trim();if(!t||t.length<3)return Promise.resolve([]);var a=$n(t);if(a)return Promise.resolve(a);if(qn)try{qn.abort()}catch{}qn=typeof AbortController<"u"?new AbortController:null;var i="/busca?q="+encodeURIComponent(t),l={credentials:"same-origin",headers:{Accept:"text/html"}};return qn&&(l.signal=qn.signal),fetch(i,l).then(function(g){if(!g.ok)throw new Error("HTTP "+g.status);return g.text()}).then(function(g){var y=pn(g);return kn(t,y),y}).catch(function(g){return g&&g.name==="AbortError"?null:[]})}function On(n){var t=n.img?'<img src="'+gn(n.img)+'" alt="" loading="lazy" width="64" height="64"/>':'<div class="mm-h-search-product-noimg"></div>',a=n.price?'<span class="mm-h-search-product-price">'+gn(n.price)+"</span>":"",i=n.oldPrice&&n.oldPrice!==n.price?'<span class="mm-h-search-product-oldprice">'+gn(n.oldPrice)+"</span>":"",l=n.discount?'<span class="mm-h-search-product-discount">'+gn(n.discount)+"</span>":"";return'<a class="mm-h-search-product" href="'+gn(n.href)+'" data-recent="1"><span class="mm-h-search-product-thumb">'+t+l+'</span><span class="mm-h-search-product-body"><span class="mm-h-search-product-name">'+gn(n.title)+'</span><span class="mm-h-search-product-prices">'+i+a+"</span></span></a>"}function Bn(){if(L){var n=dn();if(!n.length){L.hidden=!0,L.innerHTML="",tn&&(tn.hidden=!1);return}var t='<div class="mm-h-search-section">';t+='<span class="mm-h-search-sug-label">Buscas recentes</span>',t+='<ul class="mm-h-search-list">';for(var a=0;a<n.length;a++){var i=n[a];t+='<li><a class="mm-h-search-result" href="/busca?q='+encodeURIComponent(i)+'"><span class="mm-h-search-result-icon">'+Tn+'</span><span class="mm-h-search-result-label">'+gn(i)+"</span></a></li>"}t+="</ul></div>",L.innerHTML=t,L.hidden=!1,tn&&(tn.hidden=!1)}}function Qn(n){if(!L)return"";tn&&(tn.hidden=!0);var t=n.trim();if(t.length<2)return Bn(),"";var a=t.toLowerCase(),i=on.filter(function(S){return S.label.toLowerCase().indexOf(a)!==-1||S.q.toLowerCase().indexOf(a)!==-1}).slice(0,4),l="";l+='<ul class="mm-h-search-list">',l+='<li><a class="mm-h-search-result mm-h-search-result-primary" href="/busca?q='+encodeURIComponent(t)+'" data-recent="1"><span class="mm-h-search-result-icon">'+Hn+'</span><span class="mm-h-search-result-label">Buscar por <strong>&ldquo;'+gn(t)+'&rdquo;</strong></span><span class="mm-h-search-result-arrow" aria-hidden="true">&rarr;</span></a></li>';for(var g=0;g<i.length;g++){var y=i[g];l+='<li><a class="mm-h-search-result" href="/busca?q='+encodeURIComponent(y.q)+'" data-recent="1"><span class="mm-h-search-result-icon">'+Hn+'</span><span class="mm-h-search-result-label">'+gn(y.label)+"</span></a></li>"}return l+="</ul>",t.length>=3&&(l+='<div class="mm-h-search-products-section" data-q="'+gn(t)+'"><span class="mm-h-search-sug-label">Produtos</span><div class="mm-h-search-products-grid mm-h-search-products-loading"><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div><div class="mm-h-search-product-skel"></div></div></div>'),L.innerHTML=l,L.hidden=!1,t}function pt(n){var t=Qn(n);!t||t.length<3||yn(t).then(function(a){if(W){var i=(W.value||"").trim();if(i===t&&a!==null){var l=L&&L.querySelector('.mm-h-search-products-section[data-q="'+t.replace(/"/g,'\\"')+'"]');if(l){var g=l.querySelector(".mm-h-search-products-grid");if(g){if(g.classList.remove("mm-h-search-products-loading"),!a||a.length===0){l.innerHTML='<span class="mm-h-search-sug-label">Nenhum produto encontrado para &ldquo;'+gn(t)+"&rdquo;</span>";return}for(var y="",S=0;S<a.length;S++)y+=On(a[S]);g.innerHTML=y}}}}})}var En=null;if(W){W.addEventListener("input",function(){clearTimeout(En);var n=W.value;En=setTimeout(function(){!n||n.trim().length<2?Bn():pt(n)},300)}),L&&L.addEventListener("click",function(n){var t=n.target.closest&&n.target.closest("a[data-recent]");if(t){var a=t.getAttribute("href").split("q=")[1];a&&Ln(decodeURIComponent(a.replace(/\+/g," ")))}});var xn=q&&q.querySelector(".mm-h-search-form");xn&&xn.addEventListener("submit",function(){Ln((W.value||"").trim())})}z&&z.addEventListener("click",function(){Bn()});var cn=document.getElementById("mm-h-drawer"),Jn=document.getElementById("mm-h-drawer-close"),ot=cn&&cn.querySelector(".mm-h-drawer-backdrop");function Dn(){cn&&(cn.hidden=!1,document.body.style.overflow="hidden",setTimeout(function(){var n=cn.querySelector(".mm-h-drawer-close");n&&n.focus()},100))}function Kn(){!cn||cn.hidden||(cn.classList.add("mm-h-drawer-closing"),document.body.style.overflow="",setTimeout(function(){cn.hidden=!0,cn.classList.remove("mm-h-drawer-closing");var n=document.getElementById("mm-h-burger");n&&n.focus()},320))}var Rn=document.getElementById("mm-h-burger");if(Rn&&Rn.addEventListener("click",Dn),Jn&&Jn.addEventListener("click",Kn),ot&&ot.addEventListener("click",Kn),document.addEventListener("keydown",function(n){n.key==="Escape"&&cn&&!cn.hidden&&Kn()}),cn){var nt=0;cn.addEventListener("touchstart",function(n){nt=n.touches[0].clientX},{passive:!0}),cn.addEventListener("touchend",function(n){var t=n.changedTouches[0].clientX;nt-t>80&&Kn()},{passive:!0})}cn&&cn.querySelectorAll(".mm-h-drawer-section summary").forEach(function(n){n.addEventListener("click",function(t){t.preventDefault();var a=n.parentElement,i=a.querySelector("ul");if(i)if(a.open)i.style.maxHeight=i.scrollHeight+"px",i.style.opacity="1",requestAnimationFrame(function(){i.style.maxHeight="0",i.style.opacity="0",i.style.paddingTop="0",i.style.paddingBottom="0"}),setTimeout(function(){a.open=!1,i.style.maxHeight="",i.style.opacity="",i.style.paddingTop="",i.style.paddingBottom=""},300);else{a.open=!0;var l=i.scrollHeight;i.style.maxHeight="0",i.style.opacity="0",i.style.paddingTop="0",i.style.paddingBottom="0",requestAnimationFrame(function(){i.style.maxHeight=l+"px",i.style.opacity="1",i.style.paddingTop="",i.style.paddingBottom=""}),setTimeout(function(){i.style.maxHeight="",i.style.opacity=""},320)}})});var gt=document.getElementById("mm-h-cart"),qt=null,Nn=null;function Gn(){var n=document.querySelector(".carrinho-rapido-ctn");return n||document.querySelector('#cart-preview-area > div.z-\\[9999\\], #cart-preview-area > div[class*="z-[9999]"]')}function ft(n){return!!(n&&n.className&&n.className.indexOf("z-[9999]")!==-1)}var vt='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';function xt(n){if(n){var t=n.querySelector(".close-car-fast");t&&!t.innerHTML.trim()&&(t.innerHTML=vt,t.setAttribute("aria-label","Fechar carrinho"),t.setAttribute("role","button"),t.setAttribute("tabindex","0"))}}function At(n){!n||n.dataset.mmCloseWired||(n.dataset.mmCloseWired="1",n.addEventListener("click",function(t){var a=t.target;a&&a.closest&&(a.closest(".close-car-fast")||a.closest(".icon-arrow-bottom"))&&(t.preventDefault(),t.stopPropagation(),s())},!0),n.addEventListener("keydown",function(t){(t.key==="Enter"||t.key===" ")&&t.target&&t.target.closest&&t.target.closest(".close-car-fast")&&(t.preventDefault(),s())}))}function bt(n){if(n){if(!n.dataset.mmLifted){n.dataset.mmLifted="1",n.style.position="fixed",n.style.display="block",n.style.zIndex="200";for(var t=n.parentElement;t&&!t.classList.contains("header-middle");)t.style.zIndex="auto",t.style.transform="none",t.style.filter="none",t.style.isolation="auto",t=t.parentElement}At(n),xt(n)}}var mt=[{href:"/rack-atenas-cor-naturalle-largura-220-cm",name:"Rack Atenas 220cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5519/am-2501-mavaular-rack-atenas-220-naturalle-lado.jpg?ims=200x200",priceFrom:"R$ 1.615,49",priceTo:"R$ 1.032,30"},{href:"/rack-atenas-cor-naturalle-largura-180-cm",name:"Rack Atenas 180cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5419/am-2501-mavaular-rack-atenas-180-naturalle.jpg?ims=200x200",priceFrom:"R$ 1.688,71",priceTo:"R$ 942,31"},{href:"/buffet-arcus-cor-naturalle-largura-92-cm",name:"Buffet Arcus 92cm",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5439/am-2501-mavaular-arcus-02-pts-naturalle.jpg?ims=200x200",priceFrom:"R$ 1.359,09",priceTo:"R$ 807,30"},{href:"/buffet-atenas-cor-naturalle",name:"Buffet Atenas",img:"https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/4237/am-2502-mavaular-buffet-atenas-naturalle.jpg?ims=200x200",priceFrom:"R$ 2.124,07",priceTo:"R$ 1.032,30"}],jn='<svg viewBox="0 0 48 48" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 14 8 20v22a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V20l-4-6z"/><path d="M8 20h32"/><path d="M32 28a8 8 0 0 1-16 0"/></svg>';function it(){try{if(typeof Zord<"u"&&typeof Zord.get=="function"){var n=Zord.get("cart.size");if(typeof n=="number"&&n>0)return n;if(typeof n=="string"&&/^\d+$/.test(n)&&parseInt(n,10)>0)return parseInt(n,10)}}catch{}var t=document.querySelector("#cart-preview-area .item-ctn, .carrinho-container .item-ctn");if(t){var a=(t.textContent||"").trim();if(a&&/\d/.test(a)){var i=parseInt(a.replace(/\D/g,""),10);if(!isNaN(i))return i}}var l=document.querySelector(".carrinho-rapido-ctn");if(l){var g=0;if(l.querySelectorAll(".cart-item").forEach(function(y){y.closest(".mm-cart-empty-wrapper")||g++}),g>0)return g}return 0}function Ft(n){if(it()!==0||!n)return!1;var t=n.querySelector(".box-empty-cart");if(!t)return!1;var a=getComputedStyle(t);return!(a.display==="none"||a.visibility==="hidden")}function ct(n){if(!n)return!1;var t=it();if(t===0)return!1;var a=0;return n.querySelectorAll(".cart-item").forEach(function(i){i.closest(".mm-cart-empty-wrapper")||a++}),a>0}function kt(n){if(n){n.classList.remove("mm-cart-has-empty-enhancement");var t=n.querySelector(":scope > .mm-cart-empty-wrapper");t&&t.remove()}}function yt(n){if(n){var t=n.querySelector(".content-cart");if(t){if(ct(t)){kt(t);return}var a=t.querySelectorAll(".cart-item").length===0;if(!(!Ft(t)&&!(a&&it()===0))&&!t.querySelector(":scope > .mm-cart-empty-wrapper")){var i=document.createElement("div");i.className="mm-cart-empty-wrapper";for(var l="",g=0;g<mt.length;g++){var y=mt[g];l+='<a class="mm-cart-suggestion-card" href="'+y.href+'"><span class="mm-cart-suggestion-thumb"><img src="'+y.img+'" alt="" loading="lazy" width="80" height="80"/></span><span class="mm-cart-suggestion-body"><span class="mm-cart-suggestion-name">'+y.name+'</span><span class="mm-cart-suggestion-price"><span class="mm-cart-suggestion-price-from">'+y.priceFrom+'</span><span class="mm-cart-suggestion-price-to">'+y.priceTo+"</span></span></span></a>"}i.innerHTML='<div class="mm-cart-empty-hero"><div class="mm-cart-empty-icon">'+jn+'</div><h3 class="mm-cart-empty-title">Seu carrinho está vazio</h3><p class="mm-cart-empty-copy">Dê uma olhada nos móveis que nossos clientes mais amam.</p></div><div class="mm-cart-suggestions"><span class="mm-cart-suggestions-label">Você pode gostar de</span><div class="mm-cart-suggestions-grid">'+l+"</div></div>",t.classList.add("mm-cart-has-empty-enhancement"),t.appendChild(i)}}}}function Zn(n){try{document.querySelectorAll("#cart-preview-area .item-ctn, .carrinho-container .item-ctn, .item-ctn").forEach(function(t){t.textContent="0"})}catch{}n&&yt(n)}window.__mmForceEmptyCartState=Zn;function _n(n,t){try{if(typeof Zord>"u"||!Zord.checkout||typeof Zord.checkout.atualizaPreview!="function"){t();return}var a=it();if(a===0){t();return}if(n.querySelector(".cart-item")){t();return}Zord.checkout.atualizaPreview();var i=Date.now(),l=2e3;(function g(){if(n.querySelector(".cart-item")){t();return}if(Date.now()-i>=l){t();return}setTimeout(g,50)})()}catch{t()}}function dt(){if(window.innerWidth<=767){var n=document.querySelector("#cart-preview-area a.link-cart")||document.querySelector('#cart-preview-area a[href*="/checkout/cart"]');if(n){let g=function(S){!S||S.dataset.mmCloseWired||(S.dataset.mmCloseWired="1",S.addEventListener("click",function(B){var D=B.target;if(!(!D||!D.closest)){var M=D.closest('[class*="text-error-700"]');if(!M)for(var G=D,Q=0;Q<4&&G&&G!==S;Q++){if((G.textContent||"").trim()==="Fechar"){M=G;break}G=G.parentElement}M&&(B.preventDefault(),B.stopImmediatePropagation(),S.classList.remove("translate-x-[0]"),S.classList.add("translate-x-[100%]"),delete S.dataset.mmUserOpened,document.body.style.overflow="")}},!0))},y=function(){var S=document.querySelector('#cart-preview-area > div[class*="z-[9999]"]');S&&(S.dataset.mmUserOpened="1",S.className.indexOf("translate-x-[0]")===-1&&(S.classList.remove("translate-x-[100%]"),S.classList.add("translate-x-[0]")),g(S))};document.documentElement.dataset.mmCartOpening="1",n.dataset.mmBypass="1",n.click(),delete n.dataset.mmBypass,setTimeout(y,120),setTimeout(y,380),setTimeout(y,700),setTimeout(function(){delete document.documentElement.dataset.mmCartOpening},800);return}window.location.href="/checkout/cart";return}var t=Gn();if(t){_n(t,function(){r(t)});return}var a=0,i=14,l=!1;(function g(){if(a++,t=Gn(),t){_n(t,function(){r(t)});return}if(!l&&a>=2){l=!0;try{typeof Zord<"u"&&Zord.checkout&&typeof Zord.checkout.atualizaPreview=="function"&&Zord.checkout.atualizaPreview()}catch{}}a<i?setTimeout(g,200):window.location.href="/checkout/cart"})()}function r(n){var t=ft(n);t||(bt(n),xt(n)),yt(n);var a=n.querySelector(".content-cart");if(a&&!a.dataset.mmObserved){a.dataset.mmObserved="1";var i=new MutationObserver(function(){yt(n)});i.observe(a,{childList:!0,subtree:!0,attributes:!1})}if(t){n.classList.remove("translate-x-[100%]"),n.classList.add("translate-x-[0]");var l=n.querySelector('.group.cursor-pointer, [class*="text-error-700"]');l&&!l.dataset.mmWired&&(l.dataset.mmWired="1",l.addEventListener("click",function(g){g.preventDefault(),g.stopPropagation(),s()},!0))}else n.classList.add("mm-drawer-open");!t&&!Nn&&(Nn=document.createElement("div"),Nn.id="mm-h-cart-scrim",Nn.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:150;opacity:0;transition:opacity 320ms;",Nn.addEventListener("click",s),document.body.appendChild(Nn),requestAnimationFrame(function(){Nn.style.opacity="1"})),document.body.style.overflow="hidden"}function s(){var n=Gn();if(n&&(ft(n)?(n.classList.remove("translate-x-[0]"),n.classList.add("translate-x-[100%]")):n.classList.remove("mm-drawer-open")),Nn){Nn.style.opacity="0";var t=Nn;setTimeout(function(){t&&t.parentNode&&t.parentNode.removeChild(t)},320),Nn=null}document.body.style.overflow=""}gt&&gt.addEventListener("click",function(n){n.preventDefault(),dt()}),window.innerWidth<=767&&(function n(){var t=document.querySelector('#cart-preview-area > [class*="z-[9999]"]');if(!t){setTimeout(n,500);return}if(!t.dataset.mmGuardWired){t.dataset.mmGuardWired="1";var a=new MutationObserver(function(){if(t.className.indexOf("translate-x-[0]")===-1){delete t.dataset.mmUserOpened;return}document.documentElement.dataset.mmCartOpening||t.dataset.mmUserOpened||(t.classList.remove("translate-x-[0]"),t.classList.add("translate-x-[100%]"))});a.observe(t,{attributes:!0,attributeFilter:["class"]})}})(),document.addEventListener("click",function(n){var t=n.target.closest('#cart-preview-area a.link-cart, header.ra-header > .header-bottom a[href*="/checkout/cart"], header.ra-header > .header-bottom a[href*="carrinho"]');if(t){if(t.dataset.mmBypass)return;n.preventDefault(),n.stopPropagation(),dt()}},!0);var p=document.querySelector("header.ra-header > .header-bottom");p&&p.addEventListener("click",function(n){var t=n.target.closest('a[href*="carrinho"], a[href*="/checkout/cart"], [class*="carrinho"]');t&&(n.preventDefault(),n.stopPropagation(),dt())},!0),document.addEventListener("keydown",function(n){n.key==="Escape"&&Nn&&s()});var x=document.getElementById("mm-h-cart-count"),A=document.getElementById("mm-h-cart");function w(){if(x){var n=it();n>0?(x.textContent=n>99?"99+":String(n),x.hidden=!1):x.hidden=!0,A&&A.setAttribute("aria-label","Carrinho, "+n+" "+(n===1?"item":"itens"));var t=Gn();t&&t.dataset.mmLifted&&yt(t)}}window.addEventListener("reactItemAddedToCart",w),typeof jQuery<"u"&&(jQuery(document).on("reactItemAddedToCart",w),jQuery(document).ajaxComplete(function(n,t,a){a&&a.url&&a.url.indexOf("checkout/cart")!==-1&&setTimeout(w,150)})),setTimeout(w,500),setTimeout(w,2e3),setTimeout(w,5e3);function I(){var n=document.querySelector("#cart-preview-area .item-ctn, .carrinho-container .item-ctn");if(!(!n||n.dataset.mmObserved)){n.dataset.mmObserved="1";var t=new MutationObserver(w);t.observe(n,{childList:!0,characterData:!0,subtree:!0})}}I(),setTimeout(I,1e3),setTimeout(I,3e3);var V=new MutationObserver(function(n){for(var t=0;t<n.length;t++)for(var a=n[t].addedNodes,i=0;i<a.length;i++){var l=a[i];if(l.nodeType===1){var g=l.classList&&l.classList.contains("popup-adicionado-ao-carrinho")||l.querySelector&&l.querySelector(".popup-adicionado-ao-carrinho");if(g){setTimeout(w,120),setTimeout(w,700);return}}}});V.observe(document.body,{childList:!0,subtree:!0});var K=-1;setInterval(function(){var n=it();n!==K&&(K=n,w())},1e3);var X=0,en=!1,J=24;function e(){var n=window.scrollY,t=n-X;n>J&&t>0?T.classList.add("is-compact"):(n<=J||t<0)&&T.classList.remove("is-compact"),X=n,en=!1}window.addEventListener("scroll",function(){en||(requestAnimationFrame(e),en=!0)},{passive:!0})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b()})(),(function(){if(!document.getElementById("mm-org-schema")){var P=document.querySelector('.logo img, header img[alt*="logo" i], header img[alt*="Madeira" i]'),N=P&&P.getAttribute("src")||"";N&&N.indexOf("http")!==0&&(N="https://www.madeiramania.com.br"+N);var T={"@context":"https://schema.org","@type":"OnlineStore","@id":"https://www.madeiramania.com.br/#organization",name:"Madeira Mania",url:"https://www.madeiramania.com.br",description:"Loja online de móveis com preços abaixo dos marketplaces. Racks, mesas, cristaleiras, sofás, camas e estantes com entrega para todo o Brasil. Até 12x sem juros ou 7% de desconto no PIX.",sameAs:["https://www.instagram.com/madeiramaniabr/","https://www.facebook.com/madeiramaniabr/","https://www.reclameaqui.com.br/empresa/madeira-mania-comercio-de-moveis-ltda/","https://www.youtube.com/@madeiramaniabr","https://www.tiktok.com/@madeiramaniabr"],contactPoint:[{"@type":"ContactPoint",telephone:"+55-11-91529-9488",contactType:"customer service",availableLanguage:"Portuguese"},{"@type":"ContactPoint",url:"https://wa.me/5511915299488",contactType:"customer service",description:"WhatsApp"}],hasMerchantReturnPolicy:{"@type":"MerchantReturnPolicy",applicableCountry:"BR",returnPolicyCategory:"https://schema.org/MerchantReturnFiniteReturnWindow",merchantReturnDays:7,returnMethod:"https://schema.org/ReturnByMail"}};N&&N.indexOf("http")===0&&(T.logo=N);var h=document.createElement("script");h.type="application/ld+json",h.id="mm-org-schema",h.textContent=JSON.stringify(T),document.head.appendChild(h)}})(),(function b(){b._retries=(b._retries||0)+1;var P=document.querySelector("#produto-react-app");if(!P||!P.querySelector(".informacoes-compra-produto")){b._retries<30&&setTimeout(b,500);return}if((function(){var h=P.querySelector("#container-swiper"),o=P.querySelector(".swiper-pagination");if(!h||!o)return;var m=o.querySelectorAll(".swiper-pagination-bullet");if(m.length<2)return;var c=P.querySelector(".gallery-main");if(c)for(var f=c.querySelectorAll(".button-prev, .button-next"),u=0;u<f.length;u++)f[u].style.display="none";var C=document.createElement("div");C.id="mm-gallery-counter",C.style.cssText=["position: absolute","top: 12px","left: 12px","background: rgba(255,255,255,0.85)","color: #333","font-size: 12px","font-weight: 500","padding: 3px 10px","border-radius: 12px","z-index: 10","pointer-events: none","font-family: -apple-system, BlinkMacSystemFont, sans-serif","letter-spacing: 0.5px"].join(";"),c&&(c.style.position="relative",c.appendChild(C));function v(){var q=o.querySelector(".swiper-pagination-bullet-active"),z=o.querySelectorAll(".swiper-pagination-bullet");if(!(!q||!z.length)){var d=Array.prototype.indexOf.call(z,q)+1;C.textContent=d+" / "+z.length}}v();var F=new MutationObserver(v);F.observe(o,{subtree:!0,attributes:!0,attributeFilter:["class"]})})(),(function(){var h=P.querySelector(".avaliacoes");if(h){for(var o=document.querySelectorAll("script:not([src])"),m=0,c=0,f=0;f<o.length;f++){var u=o[f].textContent;if(!(u.indexOf("Zord.avaliacoes")===-1&&u.indexOf("produtoAvaliacoes")===-1)){var C=u.match(/produtoAvaliacoes\s*:\s*(\d+)/),v=u.match(/\bnota\s*:\s*(?:Number\()?([\d.]+)/);if(C&&(m=parseInt(C[1],10)),v&&(c=parseFloat(v[1])),m>0)break}}if(m===0){h.style.display="none";return}for(var F=(c%1===0,c.toFixed(1)),q="",z=1;z<=5;z++)z<=Math.floor(c)||z-c<1&&z-c>0?q+='<span style="color:#f5a623;font-size:14px;">&#9733;</span>':q+='<span style="color:#ddd;font-size:14px;">&#9733;</span>';var d=m===1?"avaliação":"avaliações";h.innerHTML='<a href="#avaliacoes" style="display:inline-flex;align-items:center;gap:4px;text-decoration:none;color:#555;font-size:13px;">'+q+' <span style="font-weight:600;color:#1a1a1a;">'+F+'</span> <span style="color:#777;">('+m+" "+d+")</span></a>",h.style.display="",h.style.marginTop="4px"}})(),(function(){var h=P.querySelector("h1");if(h){var o=h.parentElement.querySelector(".text-secondary-700.text-xs");if(o){var m=h.textContent.toLowerCase().replace(/\s+/g," ").trim(),c=o.textContent.toLowerCase().replace(/\s+/g," ").trim(),f=c.split(/[\s\-:,]+/).filter(function(C){return C.length>2}),u=f.filter(function(C){return m.indexOf(C)!==-1});u.length>=f.length*.6&&(o.style.display="none")}}})(),(function(){var h=P.querySelector(".informacoes-compra-produto");if(!h||document.getElementById("mm-action-row"))return;var o=h.querySelector(".salvar-favoritos"),m=h.querySelector(".exibe-botao-whatsapp"),c=h.querySelector(".compartilhar-produto");if(!o&&!m&&!c)return;var f=document.createElement("div");f.id="mm-action-row";function u(){var H=document.createElementNS("http://www.w3.org/2000/svg","svg");H.setAttribute("width","18"),H.setAttribute("height","18"),H.setAttribute("viewBox","0 0 24 24"),H.setAttribute("fill","none"),H.setAttribute("stroke","currentColor"),H.setAttribute("stroke-width","2"),H.setAttribute("stroke-linecap","round"),H.setAttribute("stroke-linejoin","round");var O=document.createElementNS("http://www.w3.org/2000/svg","path");return O.setAttribute("d","M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"),H.appendChild(O),H}function C(){var H=document.createElementNS("http://www.w3.org/2000/svg","svg");H.setAttribute("width","18"),H.setAttribute("height","18"),H.setAttribute("viewBox","0 0 24 24"),H.setAttribute("fill","none"),H.setAttribute("stroke","currentColor"),H.setAttribute("stroke-width","2"),H.setAttribute("stroke-linecap","round"),H.setAttribute("stroke-linejoin","round");var O=document.createElementNS("http://www.w3.org/2000/svg","path");return O.setAttribute("d","M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"),H.appendChild(O),H}if(o){var v=document.createElement("div");v.className="salvar-favoritos";var F=document.createElement("button");F.setAttribute("aria-label","Favoritar"),F.appendChild(C()),F.addEventListener("click",function(){var H=o.querySelector("button");H&&H.click()}),v.appendChild(F),f.appendChild(v),o.style.cssText+=";position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;"}if(m&&(m.style.display="none"),c){var q=document.createElement("div");q.className="compartilhar-produto";var z=document.createElement("button");z.setAttribute("aria-label","Compartilhar"),z.appendChild(u()),z.addEventListener("click",function(){var H=c.querySelector("button");H&&H.click()}),q.appendChild(z),f.appendChild(q),c.style.cssText+=";position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;"}var d=h.querySelector("#area-comprar");if(d){for(var W=d,Y=d.nextElementSibling;Y;){var R=window.getComputedStyle(Y).position;if(R==="fixed"||R==="sticky")W=Y,Y=Y.nextElementSibling;else break}W.parentNode.insertBefore(f,W.nextSibling)}else h.appendChild(f)})(),(function(){var h=P.querySelector(".comprar-fixo.area-compra-float");if(!(!h||h.querySelector("#mm-sticky-old-price"))){var o=P.querySelector(".informacoes-compra-produto");if(o){var m=o.querySelector(".line-through");if(m){var c=m.textContent.trim(),f=h.querySelector(".price-fixed");if(f){var u=document.createElement("span");u.id="mm-sticky-old-price",u.textContent=c,u.style.cssText=["text-decoration: line-through","color: #999","font-size: 11px","display: block","line-height: 1.2","margin-bottom: 1px"].join(";"),f.insertBefore(u,f.firstChild)}}}}})(),(function(){var h=P.querySelector(".informacoes-compra-produto");if(!(!h||document.getElementById("mm-trust-badges"))){var o=h.querySelector("#area-comprar");if(o){var m=document.createElement("div");m.id="mm-trust-badges",m.style.cssText=["display: flex","justify-content: center","align-items: center","flex-wrap: wrap","gap: 6px 10px","padding: 8px 0","margin-top: 2px"].join(";");var c=[{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',text:"Compra Segura"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',text:"Troca 7 dias"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10" stroke="#4b664a"/></svg>',text:"Reclame Aqui"}],f="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:#777;white-space:nowrap;";c.forEach(function(C,v){var F=document.createElement("span");if(F.style.cssText=f,F.innerHTML=C.icon+" "+C.text,m.appendChild(F),v<c.length-1){var q=document.createElement("span");q.textContent="|",q.style.cssText="color:#ddd;font-size:10px;",m.appendChild(q)}});for(var u=o.nextElementSibling;u&&window.getComputedStyle(u).position==="fixed";)u=u.nextElementSibling;u?h.insertBefore(m,u):h.appendChild(m)}}})(),(function(){var h=P.querySelector(".informacoes-compra-produto");if(!(!h||document.getElementById("mm-whatsapp-cta"))){var o=(document.querySelector("#prod-nome")||{}).value||"",m=(document.querySelector("#prod-valor")||{}).value||"",c=window.location.origin+window.location.pathname+(/^#derivacao=/.test(window.location.hash)?window.location.hash:""),f="5511915299488",u="";m&&(u=parseFloat(m).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}));var C="Olá! Tenho interesse no "+o.trim();u&&(C+=" ("+u+")"),C+=". "+c;var v="https://api.whatsapp.com/send?phone="+f+"&text="+encodeURIComponent(C),F=document.createElement("a");F.id="mm-whatsapp-cta",F.href=v,F.target="_blank",F.rel="noopener noreferrer";var q='<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';F.innerHTML=q+"<span>Compre pelo WhatsApp</span>";var z=document.getElementById("mm-action-row"),d=document.getElementById("mm-trust-badges"),W=z||d;W&&W.parentNode===h&&h.insertBefore(F,W.nextElementSibling)}})(),(function(){var h=P.querySelector(".informacoes-compra-produto");if(!(!h||document.getElementById("mm-stock-indicator"))){for(var o=10,m=document.querySelectorAll("script:not([src])"),c=-1,f=0;f<m.length;f++){var u=m[f].textContent,C=u.match(/"qtde_estoque"\s*:\s*(\d+)/);if(C){c=parseInt(C[1],10);break}}var v=c-o;if(!(v<1||v>9)){var F=document.createElement("div");F.id="mm-stock-indicator",F.style.cssText=["display: flex","align-items: center","gap: 6px","padding: 8px 12px","background: #fff8f0","border: 1px solid #fde0c2","border-radius: 8px","font-size: 13px","color: #c65d00","font-weight: 500","margin-top: 4px"].join(";");var q=v===1?"unidade":"unidades";F.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c65d00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>Restam apenas <strong>'+v+"</strong> "+q+" em estoque";var z=h.firstElementChild;z&&z.parentNode.insertBefore(F,z.nextElementSibling)}}})(),(function(){if(!document.getElementById("mm-trust-block")){var h=window.innerWidth>=769,o=document.createElement("div");o.id="mm-trust-block",o.style.cssText=["background: #f7f8f7","display: flex","align-items: center","justify-content: center","gap: "+(h?"40px":"10px"),"padding: "+(h?"14px 24px":"12px 16px"),h?"flex-direction: row":"flex-direction: column",h?"border-top: 1px solid #e8ece8":"border-radius: 10px",h?"border-bottom: 1px solid #e8ece8":"",h?"margin: 0":"margin-top: 10px"].filter(Boolean).join(";");var m=[{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',label:"Atendimento",desc:"Seg à Sex 8h-18h"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',label:"Garantia",desc:"12 meses fabricação"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',label:"Trocas",desc:"Até 7 dias"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',label:"Frete",desc:"Todo o Brasil"},{icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',label:"12x sem juros",desc:"No cartão"}],c="display:flex;align-items:center;gap:8px;",f="font-size:13px;font-weight:600;color:#1a1a1a;line-height:1.2;",u="font-size:11px;color:#777;line-height:1.2;";if(m.forEach(function(z){var d=document.createElement("div");d.style.cssText=c,d.innerHTML=z.icon+'<div><div style="'+f+'">'+z.label+'</div><div style="'+u+'">'+z.desc+"</div></div>",o.appendChild(d)}),h){var C=document.querySelector("#pagina-produto-react-app");if(C&&C.nextSibling)C.parentNode.insertBefore(o,C.nextSibling);else{var v=document.querySelector(".main-produto");v&&v.appendChild(o)}}else{var F=P.querySelector(".informacoes-compra-produto"),q=F?F.querySelector(".calculo-frete"):null;q?q.parentNode.insertBefore(o,q.nextElementSibling):F&&F.appendChild(o)}}})(),(function(){var h=P.querySelector(".informacoes-compra-produto");if(!h||document.getElementById("mm-inline-payments"))return;var o=h.querySelector(".form-pag-link");if(!o)return;var m=parseFloat(o.getAttribute("data-valor"))||0,c=parseFloat(o.getAttribute("data-valor-pix"))||0;if(m<=0)return;for(var f=[],u=1;u<=12;u++)f.push({vezes:u,valor:(m/u).toFixed(2).replace(".",",")});function C(dn){return"R$ "+dn.toFixed(2).replace(".",",")}var v=m-c,F=document.createElement("div");F.id="mm-inline-payments",F.style.cssText=["padding: 12px 0","border-top: 1px solid #f0f0f0","margin-top: 4px"].join(";");var q=window.innerWidth>=769,z="display:flex;align-items:center;gap:6px;padding:"+(q?"2px":"4px")+" 0;font-size:13px;color:#444;",d="width:5px;height:5px;border-radius:50%;background:#4b664a;flex-shrink:0;",W='<div style="'+z+'"><span style="'+d+'"></span><span><strong style="color:#1a1a1a;">PIX: '+C(c)+"</strong>"+(v>0?' <span style="color:#2e7d32;font-size:12px;font-weight:600;">(economize '+C(v)+")</span>":"")+"</span></div>";if(q)F.innerHTML=W+'<button id="mm-toggle-parcelas" style="background:none;border:none;color:#4b664a;font-size:13px;font-weight:500;padding:2px 0 0;cursor:pointer;display:flex;align-items:center;gap:4px;">Ver todas as parcelas <span style="font-size:10px;">&#9660;</span></button><div id="mm-more-parcelas" style="display:none;"></div>';else{for(var Y="",R=0;R<3;R++)Y+='<div style="'+z+'"><span style="'+d+'"></span><span>'+f[R].vezes+"x de R$ "+f[R].valor+" sem juros</span></div>";F.innerHTML=W+Y+'<button id="mm-toggle-parcelas" style="background:none;border:none;color:#4b664a;font-size:13px;font-weight:500;padding:6px 0 0;cursor:pointer;display:flex;align-items:center;gap:4px;">Ver todas as parcelas <span style="font-size:10px;">&#9660;</span></button><div id="mm-more-parcelas" style="display:none;"></div>'}for(var H="",O=q?0:3,L=O;L<12;L++)H+='<div style="'+z+'"><span style="'+d+'"></span><span>'+f[L].vezes+"x de R$ "+f[L].valor+" sem juros</span></div>";var tn=o.closest("div");tn&&(tn.parentNode.insertBefore(F,tn),o.style.display="none");var on=document.getElementById("mm-more-parcelas");on&&(on.innerHTML=H);var mn=document.getElementById("mm-toggle-parcelas");mn&&on&&mn.addEventListener("click",function(){var dn=on.style.display!=="none";on.style.display=dn?"none":"block",mn.innerHTML=dn?'Ver todas as parcelas <span style="font-size:10px;">&#9660;</span>':'Ver menos <span style="font-size:10px;">&#9650;</span>'})})(),(function(){var h=document.querySelector(".recomendacao-ctn-0.accordion"),o=document.querySelector(".descricao-produto.accordion");if(!(!h||!o)){var m=h.parentNode;if(!(!m||m!==o.parentNode)){var c=Array.prototype.slice.call(m.children),f=c.indexOf(h),u=c.indexOf(o);f<u&&m.insertBefore(o,h)}}})(),(function(){var h=document.querySelector("#cep");if(!h)return;var o="mm_cep",m=h.closest(".area-calculo");if(m){var c=m.querySelector("button");c&&c.addEventListener("click",function(){var q=h.value.replace(/\D/g,"");if(q.length===8)try{localStorage.setItem(o,q)}catch{}})}var f=null;try{f=localStorage.getItem(o)}catch{}if(!f||f.length!==8||h.value.replace(/\D/g,"").length>0)return;var u=f.substring(0,5)+"-"+f.substring(5);function C(q,z){q.focus();try{q.setSelectionRange(0,(q.value||"").length)}catch{}try{document.execCommand("delete")}catch{}try{document.execCommand("insertText",!1,z)}catch{}}function v(){var q=h.closest(".calculo-frete");return!!(q&&/R\$\s*\d/.test(q.innerText))}function F(q){q<=0||v()||(C(h,u),setTimeout(function(){if(!v()){var z=h.closest(".area-calculo"),d=z&&z.querySelector("button:not([disabled])");d&&d.click(),setTimeout(function(){v()||F(q-1)},2e3)}},2500))}setTimeout(function(){F(3)},600)})(),(function(){for(var h=document.querySelectorAll('.exibe-botao-whatsapp a[href*="whatsapp"]'),o=0;o<h.length;o++){var m=h[o].getAttribute("href");m&&m.indexOf("null")!==-1&&h[o].setAttribute("href",m.replace(/\s*null\s*/g," ").replace(/\s{2,}/g," "))}var c=document.querySelector(".exibe-botao-whatsapp");if(c){var f=new MutationObserver(function(){var u=c.querySelector('a[href*="whatsapp"]');u&&u.href.indexOf("null")!==-1&&u.setAttribute("href",u.getAttribute("href").replace(/\s*null\s*/g," ").replace(/\s{2,}/g," "))});f.observe(c,{subtree:!0,attributes:!0,attributeFilter:["href"]})}})(),(function(){var h=P.querySelector(".informacoes-compra-produto");if(!(!h||document.getElementById("mm-envio-badge"))){for(var o=!1,m=P.querySelectorAll(".tag-produto .text-tag, .tag-produto"),c=0;c<m.length;c++)if(m[c].textContent.toLowerCase().indexOf("envio")!==-1){o=!0;break}if(!o)for(var f=document.querySelectorAll("script:not([src])"),u=0;u<f.length;u++){var C=f[u].textContent.match(/"qtde_estoque"\s*:\s*(\d+)/);if(C){parseInt(C[1],10)>10&&(o=!0);break}}if(o){var v=document.createElement("div");v.id="mm-envio-badge",v.style.cssText=["display: inline-flex","align-items: center","gap: 6px","padding: 4px 0","font-size: 13px","color: #1a1a1a","margin-top: 4px"].join(";"),v.innerHTML='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c65d00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span><strong style="color:#1a1a1a;">Pronta entrega</strong> <span style="color:#777;font-weight:400;">·</span> <span style="color:#555;font-weight:400;">Enviamos em 24h</span></span>';var F=h.firstElementChild;F&&F.nextElementSibling&&F.parentNode.insertBefore(v,F.nextElementSibling)}}})(),(function(){for(var h=P.querySelectorAll(".tag-1.tag-produto"),o=0;o<h.length;o++){var m=h[o].textContent.trim();(m.indexOf("%")!==-1||m.indexOf("OFF")!==-1)&&(h[o].style.display="none")}})(),(function(){for(var h=document.querySelectorAll('a[href*="avaliacoes"], a[href="#avaliacoes"]'),o=0;o<h.length;o++)h[o].addEventListener("click",function(m){m.preventDefault();var c=document.querySelector("#avaliacoes")||document.querySelector(".container-avaliacoes");c&&c.scrollIntoView({behavior:"smooth",block:"start"})})})(),(function(){var h=P.querySelector("h1");if(!(!h||document.getElementById("mm-brand"))){var o=document.querySelector("#prod-marca");if(!(!o||!o.value||o.value.trim()==="")){var m=document.createElement("span");m.id="mm-brand",m.style.cssText="display:block;font-size:13px;color:#777;font-weight:400;margin-top:2px;",m.textContent="por "+o.value.trim();var c=h.parentElement;if(c){var f=h.nextElementSibling;f?c.insertBefore(m,f):c.appendChild(m)}}}})(),(function(){var h=document.getElementById("mm-trust-badges");if(h){for(var o=h.querySelectorAll("span"),m=0;m<o.length;m++)if(o[m].textContent.indexOf("Reclame")!==-1){var c=document.querySelector('footer .reclame-aqui a, footer a[href*="reclameaqui"]'),f=c?c.href:"https://www.reclameaqui.com.br/empresa/madeira-mania-comercio-de-moveis-ltda/";o[m].innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10" stroke="#4b664a"/></svg> <a href="'+f+'" target="_blank" rel="noopener" style="color:#777;text-decoration:none;">RA Verificada</a>'}}})(),(function(){var h=P.querySelector(".informacoes-compra-produto");if(h){var o=h.querySelector(".calculo-frete");if(o){h.style.cssText+=";display:flex !important;flex-direction:column !important;",o.style.cssText+=";order:20 !important;";var m=document.getElementById("mm-trust-block");m&&(m.style.cssText+=";order:30 !important;")}}})(),(function(){var h=P.querySelector(".informacoes-compra-produto");if(!(!h||document.getElementById("mm-mini-specs"))){var o=document.querySelector(".descricao-produto"),m={};if(o)for(var c=o.querySelectorAll("td"),f=0;f<c.length-1;f+=2){var u=c[f].textContent.trim().toLowerCase(),C=c[f+1].textContent.trim();u.indexOf("largura")!==-1&&(m.largura=C),u.indexOf("altura")!==-1&&(m.altura=C),u.indexOf("profundidade")!==-1&&(m.profundidade=C),u.indexOf("material")!==-1&&(m.material=C),u.indexOf("dobradi")!==-1&&(m.dobradicas=C),(u.indexOf("pes")!==-1||u.indexOf("pés")!==-1)&&(m.pes=C)}if(!(!m.largura&&!m.material)){var v=[];if(m.material&&v.push(m.material),m.dobradicas&&v.push("Dobradiças "+m.dobradicas),m.pes&&v.push("Pés: "+m.pes),m.largura&&v.push(m.largura+" × "+(m.altura||"")+" × "+(m.profundidade||"")),v.length!==0){var F=document.createElement("div");F.id="mm-mini-specs",F.style.cssText="padding:8px 0;border-top:1px solid #f0f0f0;margin-top:4px;";var q="";v.forEach(function(d){q+='<div style="display:flex;align-items:center;gap:6px;padding:2px 0;font-size:13px;color:#555;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polyline points="20 6 9 17 4 12"/></svg><span>'+d+"</span></div>"}),F.innerHTML=q;var z=h.querySelector("#area-comprar");z&&h.insertBefore(F,z)}}}})(),(function(){if(window.innerWidth<769||document.getElementById("mm-desktop-sticky"))return;var h=P.querySelector(".informacoes-compra-produto");if(!h)return;var o=h.querySelector(".line-through"),m=(document.querySelector("#prod-valor-principal")||{}).value,c=(document.querySelector("#prod-valor")||{}).value,f=(document.querySelector("#prod-nome")||{}).value||"",u=f.split(" - ")[0]||f;if(!m)return;var C=o?o.textContent.trim():"",v=parseFloat(m).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),F=c?parseFloat(c).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}):"",q=c?(parseFloat(c)/12).toFixed(2).replace(".",","):"",z=document.createElement("div");z.id="mm-desktop-sticky",z.style.cssText=["position: fixed","top: -60px","left: 0","width: 100%","height: 56px","background: #ffffff","border-bottom: 1px solid #e8ece8","box-shadow: 0 2px 8px rgba(0,0,0,0.06)","z-index: 100","display: flex","align-items: center","justify-content: center","padding: 0 24px","transition: top 0.25s ease","font-family: -apple-system, BlinkMacSystemFont, sans-serif"].join(";");var d="display:flex;align-items:center;gap:16px;max-width:1200px;width:100%;",W="font-size:14px;font-weight:500;color:#1a1a1a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:300px;",Y="display:flex;align-items:center;gap:8px;margin-left:auto;",R="text-decoration:line-through;color:#999;font-size:12px;",H="font-size:15px;font-weight:600;color:#1a1a1a;",O="font-size:12px;color:#666;",L="display:inline-flex;align-items:center;justify-content:center;padding:8px 20px;background:#4b664a;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer;white-space:nowrap;";z.innerHTML='<div style="'+d+'"><span style="'+W+'">'+u+'</span><div style="'+Y+'">'+(C?'<span style="'+R+'">'+C+"</span>":"")+'<span style="'+H+'">'+v+' <small style="font-weight:400;font-size:11px;color:#666;">PIX</small></span>'+(q?'<span style="'+O+'">12x R$ '+q+"</span>":"")+'</div><button id="mm-desktop-sticky-btn" style="'+L+'">Comprar</button></div>',document.body.appendChild(z);var tn=document.getElementById("mm-desktop-sticky-btn");tn&&tn.addEventListener("click",function(){var dn=P.querySelector(".btn-comprar");dn&&dn.click()});var on=h.querySelector("#area-comprar");if(!on)return;function mn(){var dn=on.getBoundingClientRect();z.style.top=dn.bottom<0?"0px":"-60px"}window.addEventListener("scroll",mn,{passive:!0}),mn()})(),(function(){var h=[".selos-seguranca",".formas-pagto"];h.forEach(function(o){var m=document.querySelector("footer "+o);m&&m.classList.contains("closed")&&(m.classList.remove("closed"),m.classList.add("open"))})})(),window.innerWidth>=769){var N=P.querySelector(".informacoes-compra-produto");N&&(N.style.setProperty("gap","12px","important"),N.style.setProperty("row-gap","12px","important"))}document.body.classList.add("mm-ready")})();var Et=document.currentScript;(function b(){b._retries=(b._retries||0)+1;var P=document.querySelector("#produto-react-app");if(!P||!P.querySelector(".informacoes-compra-produto")){b._retries<30&&setTimeout(b,500);return}if(!document.getElementById("mm-product-schema")){var N=P.querySelector("h1"),T=N?N.textContent.trim():"";if(T){var h=document.querySelector('link[rel="canonical"]'),o=h?h.href:location.href.split("?")[0],m=document.querySelector("#prod-marca"),c=m?m.value.trim():"";!c&&window.dataLayer&&window.dataLayer[0]&&(c=window.dataLayer[0].brand||"");var f=P.querySelector(".form-pag-link"),u=document.querySelector("#prod-valor-principal"),C=document.querySelector("#prod-valor"),v=0,F=0;f&&(v=parseFloat(f.getAttribute("data-valor-pix"))||0,F=parseFloat(f.getAttribute("data-valor"))||0),!F&&C&&(F=parseFloat(C.value)||0),!v&&u&&(v=parseFloat(u.value)||0);var q=v>0?v:F;if(!(q<=0)){var z="";window.dataLayer&&window.dataLayer[0]&&(z=window.dataLayer[0].sku||"");var d="",W="";window.dataLayer&&window.dataLayer[0]&&(d=window.dataLayer[0].category||"",W=window.dataLayer[0].category2||"");for(var Y=document.querySelector("#prod-deposito"),R=Y?Y.value==="1":!0,H=[],O=P.querySelectorAll(".gallery-main img, #block-imagem img"),L=0;L<O.length;L++){var tn=O[L].getAttribute("src")||O[L].getAttribute("data-src")||"";tn&&tn.indexOf("http")===0&&H.indexOf(tn)===-1&&H.push(tn)}if(H.length===0){var on=document.querySelector('meta[property="og:image"]');on&&on.content&&H.push(on.content)}var mn=document.querySelector('meta[name="description"]'),dn=mn?mn.content.trim():"";if(!dn){var Ln=document.querySelector(".descricao-produto .accordion-content p");Ln&&(dn=Ln.textContent.trim().substring(0,500))}for(var gn=0,Hn=0,Tn=document.querySelectorAll("script:not([src])"),sn=0;sn<Tn.length;sn++){var Pn=Tn[sn].textContent;if(!(Pn.indexOf("Zord.avaliacoes")===-1&&Pn.indexOf("produtoAvaliacoes")===-1)){var zn=Pn.match(/produtoAvaliacoes\s*:\s*(\d+)/),qn=Pn.match(/\bnota\s*:\s*(?:Number\()?([\d.]+)/);zn&&(gn=parseInt(zn[1],10)),qn&&(Hn=parseFloat(qn[1]))}}var bn={"@context":"https://schema.org","@type":"Product",name:T,url:o,image:H,description:dn,sku:z,brand:{"@type":"Brand",name:c||"Madeira Mania"},offers:{"@type":"Offer",url:o,price:q.toFixed(2),priceCurrency:"BRL",availability:R?"https://schema.org/InStock":"https://schema.org/OutOfStock",itemCondition:"https://schema.org/NewCondition",seller:{"@type":"Organization",name:"Madeira Mania"},hasMerchantReturnPolicy:{"@type":"MerchantReturnPolicy",applicableCountry:"BR",returnPolicyCategory:"https://schema.org/MerchantReturnFiniteReturnWindow",merchantReturnDays:7,returnMethod:"https://schema.org/ReturnByMail"},shippingDetails:{"@type":"OfferShippingDetails",shippingDestination:{"@type":"DefinedRegion",addressCountry:"BR"},deliveryTime:{"@type":"ShippingDeliveryTime",handlingTime:{"@type":"QuantitativeValue",minValue:1,maxValue:3,unitCode:"DAY"},transitTime:{"@type":"QuantitativeValue",minValue:5,maxValue:20,unitCode:"DAY"}}}}};F>0&&(bn.offers.priceSpecification=[{"@type":"UnitPriceSpecification",price:v>0?v.toFixed(2):q.toFixed(2),priceCurrency:"BRL",name:"PIX"},{"@type":"UnitPriceSpecification",price:(F/12).toFixed(2),priceCurrency:"BRL",name:"12x sem juros",referenceQuantity:{"@type":"QuantitativeValue",value:12,unitCode:"MON"}}]),gn>0&&Hn>0&&(bn.aggregateRating={"@type":"AggregateRating",ratingValue:Hn.toFixed(1),bestRating:"5",worstRating:"1",reviewCount:String(gn)}),d&&(bn.category=d+(W?" > "+W:""));var An=document.createElement("script");An.type="application/ld+json",An.id="mm-product-schema",An.textContent=JSON.stringify(bn),document.head.appendChild(An),Et&&Et.parentNode&&Et.parentNode.removeChild(Et)}}}})();var Ct=document.currentScript;(function b(){b._retries=(b._retries||0)+1;var P=document.querySelector("#produto-react-app"),N=P?P.querySelector("h1"):null;if(!N){b._retries<30&&setTimeout(b,500);return}if(!document.getElementById("mm-breadcrumb-schema")){var T=[],h=1;T.push({"@type":"ListItem",position:h++,name:"Home",item:"https://www.madeiramania.com.br"});var o=document.querySelectorAll('.breadcrumb a, nav[aria-label*="breadcrumb" i] a, .migalha a, .breadcrumb-item a');if(o.length>0)for(var m=0;m<o.length;m++){var c=o[m],f=c.textContent.trim(),u=c.href;!f||f.toLowerCase()==="home"||f.toLowerCase()==="início"||!u||u==="#"||T.push({"@type":"ListItem",position:h++,name:f,item:u})}else if(window.dataLayer&&window.dataLayer[0]){var C=window.dataLayer[0].category||"",v=window.dataLayer[0].category2||"";C&&T.push({"@type":"ListItem",position:h++,name:C,item:"https://www.madeiramania.com.br/"+C.toLowerCase().replace(/\s+/g,"-").replace(/[àáâã]/g,"a").replace(/[éêë]/g,"e").replace(/[íî]/g,"i").replace(/[óôõ]/g,"o").replace(/[úû]/g,"u").replace(/ç/g,"c")}),v&&v!==C&&T.push({"@type":"ListItem",position:h++,name:v,item:"https://www.madeiramania.com.br/"+v.toLowerCase().replace(/\s+/g,"-").replace(/[àáâã]/g,"a").replace(/[éêë]/g,"e").replace(/[íî]/g,"i").replace(/[óôõ]/g,"o").replace(/[úû]/g,"u").replace(/ç/g,"c")})}if(T.push({"@type":"ListItem",position:h,name:N.textContent.trim()}),!(T.length<2)){var F={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:T},q=document.createElement("script");q.type="application/ld+json",q.id="mm-breadcrumb-schema",q.textContent=JSON.stringify(F),document.head.appendChild(q),Ct&&Ct.parentNode&&Ct.parentNode.removeChild(Ct)}}})();var zt=document.currentScript;(function b(){b._retries=(b._retries||0)+1;var P=document.querySelector(".descricao-produto");if(!P){b._retries<30&&setTimeout(b,500);return}if(!document.getElementById("mm-faq-section")){var N=[{q:"Como funciona a entrega de móveis?",a:"Enviamos para todo o Brasil por transportadora especializada em móveis. O prazo varia de 5 a 20 dias úteis dependendo da sua região. Você pode calcular o frete e prazo exato informando seu CEP na página do produto, acima do botão de compra."},{q:"O móvel vem montado ou precisa montar?",a:"A maioria dos móveis é enviada desmontada para garantir segurança no transporte. Cada produto inclui manual de montagem com instruções passo a passo e todas as ferragens necessárias. Produtos de madeira maciça geralmente exigem apenas encaixe simples de pés ou portas."},{q:"Vocês entregam em apartamento e zona rural?",a:"Sim, entregamos em apartamentos e áreas urbanas em todo o Brasil. Para zonas rurais, a disponibilidade depende da região — consulte informando seu CEP. A entrega é realizada até a portaria ou térreo do edifício."},{q:"E se o produto chegar com defeito?",a:"Você tem 7 dias para solicitar troca ou devolução a partir do recebimento, conforme o Código de Defesa do Consumidor (Art. 49). Basta entrar em contato pelo nosso WhatsApp com fotos do defeito. Todos os produtos possuem garantia de 12 meses contra defeitos de fabricação."},{q:"Quais as formas de pagamento?",a:"Aceitamos PIX com 7% de desconto (processado na hora), cartão de crédito em até 12x sem juros (Visa, Mastercard, Elo, American Express) e boleto bancário. O pagamento via PIX agiliza o despacho do seu pedido."},{q:"O preço de vocês é realmente menor que nos marketplaces?",a:"Sim. Como vendemos direto ao consumidor, sem comissões de marketplace, nossos preços são consistentemente 10% a 25% menores que MadeiraMadeira, Mercado Livre e outros. Compare o mesmo produto pelo código SKU do fabricante e confira a diferença."},{q:"Como funciona a garantia?",a:"Todos os produtos possuem garantia de 12 meses contra defeitos de fabricação, além do direito de arrependimento de 7 dias garantido pelo CDC. Móveis de madeira maciça, com os cuidados adequados, possuem durabilidade superior a 30 anos."}];if(!document.getElementById("mm-faq-styles")){var T=document.createElement("style");T.id="mm-faq-styles",T.textContent=["#mm-faq-section button:focus-visible { outline: 2px solid #4b664a; outline-offset: 2px; border-radius: 4px; }","#mm-faq-section button:active { opacity: 0.7; }","@media (prefers-reduced-motion: reduce) { #mm-faq-section * { transition: none !important; } }"].join(`
`),document.head.appendChild(T)}var h=document.createElement("div");h.id="mm-faq-section",h.style.cssText=["margin: 24px 0","padding: 0 8px"].join(";");var o=document.createElement("h2");o.style.cssText=["font-size: 18px","font-weight: 700","color: #1a1a1a","margin-bottom: 16px","padding-bottom: 8px","border-bottom: 2px solid #4b664a"].join(";"),o.textContent="Perguntas Frequentes",h.appendChild(o);var m=document.createElement("div");m.style.cssText=["display: flex","flex-direction: column","gap: 0"].join(";"),N.forEach(function(v,F){var q=document.createElement("div");q.style.cssText="border-bottom: 1px solid #e8ece8;";var z=document.createElement("button");z.setAttribute("aria-expanded","false"),z.setAttribute("aria-controls","mm-faq-answer-"+F),z.style.cssText=["display: flex","justify-content: space-between","align-items: center","width: 100%","padding: 16px 0","background: none","border: none","cursor: pointer","text-align: left","font-size: 15px","font-weight: 600","color: #1a1a1a","line-height: 1.4","font-family: inherit","-webkit-tap-highlight-color: transparent"].join(";");var d=document.createElement("span");d.textContent=v.q,d.style.cssText="flex: 1; padding-right: 12px;";var W=document.createElement("span");W.textContent="+",W.style.cssText=["font-size: 20px","font-weight: 300","color: #4b664a","flex-shrink: 0","transition: transform 0.2s ease","width: 24px","text-align: center"].join(";"),z.appendChild(d),z.appendChild(W);var Y=document.createElement("div");Y.id="mm-faq-answer-"+F,Y.setAttribute("role","region"),Y.setAttribute("aria-labelledby","mm-faq-q-"+F),z.id="mm-faq-q-"+F,Y.style.cssText=["max-height: 0","overflow: hidden","transition: max-height 0.3s ease, padding 0.3s ease","font-size: 14px","line-height: 1.6","color: #444"].join(";");var R=document.createElement("div");R.style.cssText="padding: 0 0 14px 0;",R.textContent=v.a,Y.appendChild(R),z.addEventListener("click",function(){var H=z.getAttribute("aria-expanded")==="true";H?(Y.style.maxHeight="0px",W.textContent="+",z.setAttribute("aria-expanded","false")):(Y.style.maxHeight=Y.scrollHeight+"px",W.textContent="−",z.setAttribute("aria-expanded","true"))}),z.addEventListener("touchstart",function(){z.style.opacity="0.7"},{passive:!0}),z.addEventListener("touchend",function(){z.style.opacity="1"},{passive:!0}),q.appendChild(z),q.appendChild(Y),m.appendChild(q)}),h.appendChild(m);var c=document.querySelector(".produtos-relacionados"),f=document.querySelector(".container-avaliacoes");if(c&&c.nextSibling?c.parentNode.insertBefore(h,c.nextSibling):f?f.parentNode.insertBefore(h,f):P.parentNode.appendChild(h),!document.getElementById("mm-faq-schema")){var u={"@context":"https://schema.org","@type":"FAQPage",mainEntity:N.map(function(v){return{"@type":"Question",name:v.q,acceptedAnswer:{"@type":"Answer",text:v.a}}})},C=document.createElement("script");C.type="application/ld+json",C.id="mm-faq-schema",C.textContent=JSON.stringify(u),document.head.appendChild(C)}zt&&zt.parentNode&&zt.parentNode.removeChild(zt)}})(),(function b(){b._retries=(b._retries||0)+1;var P=document.querySelector("#produto-react-app");if(!P||!P.querySelector("h1")){b._retries<30&&setTimeout(b,500);return}if(!document.querySelector('meta[property="og:title"]')){var N=P.querySelector("h1"),T=N?N.textContent.trim():document.title,h=document.querySelector('meta[name="description"]'),o=h?h.content.trim():"";if(!o){var m=document.querySelector(".descricao-produto .accordion-content p");m&&(o=m.textContent.trim().substring(0,200))}o||(o=T+" - Compre online na Madeira Mania com até 12x sem juros ou 7% de desconto no PIX.");var c=document.querySelector('link[rel="canonical"]'),f=c?c.href:location.href.split("?")[0],u="",C=P.querySelector(".gallery-main img, #block-imagem img");if(C&&(u=C.getAttribute("src")||C.getAttribute("data-src")||""),!u){var v=document.querySelector('meta[property="og:image"]');v&&(u=v.content)}var F=P.querySelector(".form-pag-link"),q=F&&parseFloat(F.getAttribute("data-valor-pix"))||0;if(q>0){var z="R$ "+q.toFixed(2).replace(".",",");o.indexOf("R$")===-1&&(o=o.replace(/\.$/,"")+" | A partir de "+z+" no PIX.")}o.length>200&&(o=o.substring(0,197)+"...");var d=[{property:"og:type",content:"product"},{property:"og:title",content:T},{property:"og:description",content:o},{property:"og:url",content:f},{property:"og:site_name",content:"Madeira Mania"},{property:"og:locale",content:"pt_BR"}];u&&(d.push({property:"og:image",content:u}),d.push({property:"og:image:width",content:"600"}),d.push({property:"og:image:height",content:"600"})),d.push({name:"twitter:card",content:"summary_large_image"}),d.push({name:"twitter:title",content:T}),d.push({name:"twitter:description",content:o}),u&&d.push({name:"twitter:image",content:u}),d.forEach(function(W){var Y=document.createElement("meta");W.property&&Y.setAttribute("property",W.property),W.name&&Y.setAttribute("name",W.name),Y.setAttribute("content",W.content),document.head.appendChild(Y)})}})(),(function(b){"use strict";if(!document.getElementById("produto-react-app")&&!document.getElementById("pagina-produto-react-app"))return;const P="3.0.0";window.innerWidth>=1500&&b(document).ready(function(){function h(){b(".gallery-main .swiper-slide img").each(function(){var o=this,m=b(this).closest(".swiper-slide"),c=m.closest(".swiper");function f(){var u=o.naturalWidth,C=o.naturalHeight;u&&C&&u===C&&c.css({"max-width":u+"px",overflow:"hidden"})}o.complete?f():o.addEventListener("load",f)})}h()}),window._variacoesMagazordCarregado&&(console.log(`%c⚠️ Variações Magazord v${P} - Substituindo instância anterior`,"color: #ff9800; font-weight: bold"),window.GerenciadorVariacoesPillsMagazord&&b(".product-variations-pills-container").remove()),window._variacoesMagazordCarregado=P,console.log(`%c🚀 Variações Magazord v${P} (dataProduct) - Inicializando...`,"color: #2196f3; font-weight: bold");const N={formatoNome:{separador:" - ",separadorTipoValor:": ",exibirNomeCompleto:!1,primeiraParte:"nome_base"},labels:{ALTURA:"Altura",LARGURA:"Largura",ILUMINACAO:"Iluminação",ILUMINAÇÃO:"Iluminação",PROFUNDIDADE:"Profundidade",COR:"Cor",ACABAMENTO:"Acabamento",TAMANHO:"Tamanho",PORTAS:"Número de Portas",ESPELHO:"Espelho",GAVETAS:"Gavetas",MODELO:"Modelo",MATERIAL:"Material",LUGARES:"Lugares",FORMATO:"Formato"},variacoesComImagem:["COR","ACABAMENTO"],ignorarPalavras:[],selectors:{areaProdutosSugeridos:".sugestoes-cores",areaVariacoes:".derivacoes-produto .area-derivacoes",containerProduto:".info-produto, .box-info-produto, main",subtituloProduto:".informacoes-compra-produto .text-secondary-700.text-xs"},retry:{maxTentativas:10,intervaloMs:500,usarMutationObserver:!0},debug:!0,performance:{useRequestAnimationFrame:!0,debounceDelay:150}};class T{constructor(){this.variacoes={},this.produtoAtualId=null,this.produtos=[],this.tentativasDeCarregamento=0,this.observer=null,this.inicializado=!1}init(){this.log("🎯 Gerenciador de Variações Magazord v3 (dataProduct)","info"),this.log("🎨 Swatches de imagem para cores + Pills para outras variações","info"),this.esperarDOMPronto()}esperarDOMPronto(){if(typeof jQuery>"u"){setTimeout(()=>this.esperarDOMPronto(),100);return}b(document).ready(()=>{this.log("✅ DOM pronto! Aguardando dataProduct...","success"),this.esperarDataProduct()})}esperarDataProduct(){typeof dataProduct<"u"&&dataProduct.listaProdutosSugeridos?(this.log("✅ dataProduct encontrado!","success"),this.tentarCarregar()):(this.log("⏳ Aguardando dataProduct...","info"),setTimeout(()=>this.esperarDataProduct(),300))}tentarCarregar(){this.tentativasDeCarregamento++,this.log(`
🔄 Tentativa ${this.tentativasDeCarregamento}/${N.retry.maxTentativas}`,"info"),this.carregarProdutos()?(this.processarVariacoes(),this.renderizarVariacoes(),this.bindEventos(),this.inicializado=!0,this.log(`
🎉 Inicialização concluída com sucesso!`,"success"),N.retry.usarMutationObserver&&this.observarMudancasDOM()):this.tentativasDeCarregamento<N.retry.maxTentativas?setTimeout(()=>this.tentarCarregar(),N.retry.intervaloMs):this.log("❌ Número máximo de tentativas atingido.","error")}observarMudancasDOM(){this.log("ℹ️ MutationObserver desativado - dados carregados via dataProduct","info")}log(o,m="log",c=null){if(!N.debug)return;const f={info:"color: #2196f3; font-weight: bold",success:"color: #4caf50; font-weight: bold",warning:"color: #ff9800; font-weight: bold",error:"color: #f44336; font-weight: bold",log:"color: #666"};console.log(`%c${o}`,f[m]||f.log),c&&console.log(c)}carregarProdutos(){if(this.produtos=[],typeof dataProduct>"u"||!dataProduct.listaProdutosSugeridos)return this.log("❌ dataProduct ou listaProdutosSugeridos não encontrado","error"),!1;const o=dataProduct.listaProdutosSugeridos,m=dataProduct.produto,c=dataProduct.hostImagem||"";if(this.log(`📦 Encontrados ${o.length} produtos sugeridos + produto atual`,"info"),m&&m.complemento){const f=m.midia_path&&m.midia_arquivo_nome?`${c}/${m.midia_path}${m.midia_arquivo_nome}`:"",u={id:m.derivacao_id||m.produto_id,nomeCompleto:m.complemento.trim(),estoque:m.qtde_estoque,url:m.link?`/${m.link}`:"",imagem:f,imagemData:f,elemento:null,variacoes:{},nomeBase:"",nomeExibicao:"",isAtual:!0};this.produtoAtualId=u.id,this.extrairVariacoesDoNome(u),this.produtos.push(u),this.log(`   ✓ Produto atual: "${u.nomeCompleto}"`,"success")}return o.forEach((f,u)=>{const C=f.complemento||f.nome||"";if(!C)return;const v=f.derivacao_id||f.produto_id;if(v===this.produtoAtualId){this.log(`   ⏭️ Ignorando duplicata: "${C}"`,"info");return}const F=f.midia_path&&f.midia_arquivo_nome?`${c}/${f.midia_path}${f.midia_arquivo_nome}`:"",q={id:v||u,nomeCompleto:C.trim(),estoque:f.qtde_estoque,url:f.link?`/${f.link}`:"",imagem:F,imagemData:F,elemento:null,variacoes:{},nomeBase:"",nomeExibicao:"",isAtual:!1};this.extrairVariacoesDoNome(q),this.produtos.push(q),this.log(`   ✓ Sugerido: "${q.nomeCompleto}"`,"log")}),this.produtos.length===0?!1:(this.log("✅ Produtos carregados e processados:","success",this.produtos),!0)}normalizarSeparadores(o){const m=["–","—","−","‐","‑","⁃"];let c=o;return m.forEach(f=>{const u=new RegExp(`\\s${f}\\s`,"g");c=c.replace(u," - ")}),c}extrairVariacoesDoNome(o){const c=this.normalizarSeparadores(o.nomeCompleto).split(N.formatoNome.separador);this.log(`
📝 Processando: "${o.nomeCompleto}"`,"log"),N.formatoNome.primeiraParte==="nome_base"&&(o.nomeBase=c[0].trim(),c.shift()),c.forEach(f=>{const u=f.trim();if(u&&u.includes(N.formatoNome.separadorTipoValor)){const[C,...v]=u.split(N.formatoNome.separadorTipoValor),F=v.join(N.formatoNome.separadorTipoValor).trim(),q=this.normalizarTipo(C.trim());if(N.ignorarPalavras.includes(q))return;o.variacoes[q]=F,this.log(`   ✓ ${q}: ${F}`,"success")}}),o.nomeExibicao=N.formatoNome.exibirNomeCompleto?o.nomeCompleto:o.nomeBase||o.nomeCompleto,Object.keys(o.variacoes).length===0&&(o.variacoes.MODELO=o.nomeCompleto,o.nomeExibicao=o.nomeCompleto)}normalizarTipo(o){return o.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim()}processarVariacoes(){this.log(`
🔄 Processando variações...`,"info");const o=new Set;this.produtos.forEach(m=>{Object.keys(m.variacoes).forEach(c=>o.add(c))}),o.forEach(m=>{const c=new Set,f={};this.produtos.forEach(C=>{const v=C.variacoes[m];v&&(c.add(v),f[v]||(f[v]=[]),f[v].push(C))});const u=Array.from(c).sort();this.variacoes[m]={label:N.labels[m]||m,valores:u,produtosPorValor:f,usarImagem:N.variacoesComImagem.includes(m)},this.log(`   📊 ${m}: ${u.length} valor(es) único(s) → [${u.join(", ")}]`,u.length>1?"success":"warning")}),this.log("✅ Variações processadas:","success",this.variacoes)}renderizarVariacoes(){this.log(`
🎨 Renderizando variações...`,"info");let o=b(N.selectors.areaVariacoes);if(o.length===0&&(this.criarAreaVariacoes(),o=b(N.selectors.areaVariacoes)),Object.keys(this.variacoes).length===0)return;const m=b("<div>",{class:"product-variations-pills-container"});let c=0;if(Object.keys(this.variacoes).forEach(f=>{const u=this.variacoes[f];if(u.valores.length<=1){this.log(`⏭️ Ignorando "${f}" - apenas ${u.valores.length} valor(es)`,"info");return}if(u.usarImagem){const C=this.criarGrupoSwatches(f,u);m.append(C),c++}}),Object.keys(this.variacoes).forEach(f=>{const u=this.variacoes[f];if(!(u.valores.length<=1)&&!u.usarImagem){const C=this.criarGrupoPills(f,u);m.append(C),c++}}),c===0){this.log("ℹ️ Nenhuma variação com múltiplas opções - ocultando área","info"),o.closest(".derivacoes-produto").hide(),b(N.selectors.subtituloProduto).hide();return}N.performance.useRequestAnimationFrame&&window.requestAnimationFrame?requestAnimationFrame(()=>{o.empty().append(m),this.log(`✅ ${c} variação(ões) renderizada(s)!`,"success"),this.atualizarNomeProduto()}):(o.empty().append(m),this.log(`✅ ${c} variação(ões) renderizada(s)!`,"success"),this.atualizarNomeProduto())}criarAreaVariacoes(){const o=b(N.selectors.areaProdutosSugeridos);o.length>0?o.before('<div class="derivacoes-produto"><div class="area-derivacoes"></div></div>'):b("body").prepend('<div class="derivacoes-produto"><div class="area-derivacoes"></div></div>')}criarGrupoSwatches(o,m){const c=this.obterValorAtualParaTipo(o),f=b("<div>",{class:"variation-pill-group variation-pill-group--swatches","data-variacao-tipo":o,role:"group","aria-labelledby":`pill-label-${o.toLowerCase()}`}),u=b("<div>",{class:"variation-pill-label",id:`pill-label-${o.toLowerCase()}`});u.append(b("<span>").text(m.label+":")),u.append(b("<span>",{class:"variation-pill-label-value","data-label-value":o}).text(c||""));const C=b("<div>",{class:"variation-swatches-container",role:"radiogroup","aria-labelledby":`pill-label-${o.toLowerCase()}`});return m.valores.forEach((v,F)=>{const q=m.produtosPorValor[v],z=q.some(on=>on.estoque===void 0||on.estoque>0),d=v===c,W=`pill-${o.toLowerCase()}-${this.sanitizeId(v)}`,Y=this.encontrarMelhorProdutoParaSwatch(o,v,q);let R=null;Y&&(R=Y.imagemData||Y.imagem);const H=b("<input>",{type:"radio",class:"variation-pill-input",id:W,name:`variation-${o}`,value:v,"data-variacao-tipo":o,"data-produtos":JSON.stringify(q.map(on=>({id:on.id,url:on.url}))),checked:d,disabled:!z,"aria-label":`${m.label}: ${v}${z?"":" (Indisponível)"}`}),O=b("<label>",{class:"variation-color-swatch-wrapper",for:W,"data-tooltip":v}),L=b("<div>",{class:"variation-color-swatch","data-valor":v,tabindex:d?0:-1});R?L.append(b("<img>",{src:R,alt:v,class:"variation-color-swatch-image",loading:"lazy"})):L.css({"background-color":"#E5E7EB",display:"flex","align-items":"center","justify-content":"center","font-size":"14px",color:"#6B7280"}).text(v.charAt(0).toUpperCase());const tn=b("<span>",{class:"variation-color-swatch-name",text:v,title:v});O.append(L).append(tn),C.append(H).append(O)}),f.append(u).append(C),f}criarGrupoPills(o,m){const c=this.obterValorAtualParaTipo(o),f=b("<div>",{class:"variation-pill-group variation-pill-group--pills","data-variacao-tipo":o,role:"group","aria-labelledby":`pill-label-${o.toLowerCase()}`}),u=b("<div>",{class:"variation-pill-label",id:`pill-label-${o.toLowerCase()}`});u.append(b("<span>").text(m.label+":")),u.append(b("<span>",{class:"variation-pill-label-value","data-label-value":o}).text(c||""));const C=b("<div>",{class:"variation-pills-container",role:"radiogroup","aria-labelledby":`pill-label-${o.toLowerCase()}`});return m.valores.forEach((v,F)=>{const q=m.produtosPorValor[v],z=q.some(O=>O.estoque===void 0||O.estoque>0),d=v===c,W=`pill-${o.toLowerCase()}-${this.sanitizeId(v)}`,Y=b("<input>",{type:"radio",class:"variation-pill-input",id:W,name:`variation-${o}`,value:v,"data-variacao-tipo":o,"data-produtos":JSON.stringify(q.map(O=>({id:O.id,url:O.url}))),checked:d,disabled:!z,"aria-label":`${m.label}: ${v}${z?"":" (Indisponível)"}`});let R=v;z||(R+=' <span class="variation-pill-badge">Indisponível</span>');const H=b("<label>",{class:"variation-pill",for:W,html:R,"data-valor":v,tabindex:d?0:-1});C.append(Y).append(H)}),f.append(u).append(C),f}sanitizeId(o){return o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}encontrarMelhorProdutoParaSwatch(o,m,c){const f=this.produtos.find(F=>F.isAtual||F.id===this.produtoAtualId);if(!f||c.length===0)return c[0]||null;if(c.length===1)return c[0];const u=f.variacoes;let C=null,v=-1;return c.forEach(F=>{let q=0;Object.keys(u).forEach(z=>{z!==o&&F.variacoes[z]===u[z]&&q++}),(F.imagemData||F.imagem)&&(q+=.5),q>v&&(v=q,C=F)}),this.log(`   🎯 Melhor produto para ${o}="${m}": score=${v}`,"log"),C||c[0]}obterValorAtualParaTipo(o){const m=this.produtos.find(c=>c.isAtual||c.id===this.produtoAtualId);return m?m.variacoes[o]:null}atualizarNomeProduto(){const o=this.produtos.find(c=>c.isAtual||c.id===this.produtoAtualId);if(!o)return;["h1.nome-produto",".product-name h1",".info-produto h1",'h1[itemprop="name"]',".box-info-produto h1"].forEach(c=>{const f=b(c);f.length>0&&f.text(o.nomeExibicao)})}bindEventos(){this.log(`
🔗 Vinculando eventos...`,"info"),b(document).on("change",".variation-pill-input",o=>{this.aoMudarVariacao(o)}),b(document).on("keydown",".variation-pills-container, .variation-swatches-container",o=>{this.handleKeyboardNavigation(o)}),b(document).on("click",".variation-pill, .variation-color-swatch-wrapper",function(){const o=b(this).is("label")?b("#"+b(this).attr("for")):b(this).closest("label").prev(".variation-pill-input");o.length&&!o.prop("disabled")&&b(this).closest(".variation-pill-group").addClass("is-loading")}),this.log("✅ Eventos vinculados","success")}handleKeyboardNavigation(o){const c=b(o.currentTarget).find(".variation-pill-input:not(:disabled)"),f=b(document.activeElement);if(!f.hasClass("variation-pill-input"))return;const u=c.index(f);let C=u;switch(o.key){case"ArrowRight":case"ArrowDown":o.preventDefault(),C=(u+1)%c.length;break;case"ArrowLeft":case"ArrowUp":o.preventDefault(),C=u-1<0?c.length-1:u-1;break;case"Home":o.preventDefault(),C=0;break;case"End":o.preventDefault(),C=c.length-1;break;default:return}c.eq(C).focus().prop("checked",!0).trigger("change")}aoMudarVariacao(o){const m=b(o.target),c=m.data("variacao-tipo"),f=m.val();this.log(`
🔄 Variação selecionada: ${c} = ${f}`,"info"),b(`.variation-pill-label-value[data-label-value="${c}"]`).text(f);const u={};b(".variation-pill-input:checked").each(function(){const v=b(this).data("variacao-tipo"),F=b(this).val();F&&(u[v]=F)}),this.log("📋 Seleção atual:","info",u);const C=this.encontrarProdutoPorVariacoes(u);if(C)this.log("✅ Produto encontrado!","success",C),this.navegarParaProduto(C);else{this.log("⚠️ Produto exato não encontrado, buscando melhor correspondência...","warning");const v=this.encontrarMelhorCorrespondencia(u);v?(this.log("✅ Melhor correspondência encontrada!","success",v),this.navegarParaProduto(v)):(this.log("❌ Nenhum produto correspondente encontrado","error"),b(".variation-pill-group").removeClass("is-loading"))}}encontrarProdutoPorVariacoes(o){return this.produtos.find(m=>Object.keys(o).every(c=>m.variacoes[c]===o[c]))}encontrarMelhorCorrespondencia(o){let m=null,c=0;return this.produtos.forEach(f=>{let u=0;Object.keys(o).forEach(C=>{f.variacoes[C]===o[C]&&u++}),u>c&&(c=u,m=f)}),c>0?m:null}navegarParaProduto(o){this.log(`
🚀 Navegando para: ${o.url}`,"info"),o.url?window.location.href=o.url:(this.log("❌ URL não encontrada para navegação","error"),b(".variation-pill-group").removeClass("is-loading"))}}setTimeout(function(){b(".product-variations-pills-container").remove(),b(".derivacoes-produto").remove();const h=new T;h.init(),window.GerenciadorVariacoesPillsMagazord=h},100)})(typeof jQuery<"u"?jQuery:window.jQuery||window.$),(function(){"use strict";function b(){if(!(typeof jQuery>"u"&&typeof $>"u")){var r=typeof jQuery<"u"?jQuery:$;r(document).ajaxComplete(function(s,p,x){x.url&&x.url.indexOf("checkout/cart")!==-1&&setTimeout(function(){window.dispatchEvent(new CustomEvent("reactItemAddedToCart"))},100)})}}function P(){var r=document.querySelector("#cart-preview-area .border-t.border-solid");if(!(!r||r.querySelector(".installment-total"))){var s=0,p=document.querySelectorAll("#cart-preview-area .cart-item");if(p.forEach(function(I){var V=parseFloat(I.getAttribute("data-item-price"))||0,K=parseInt(I.getAttribute("data-item-quantity"))||1;s+=V*K}),!(s<=0)){var x=(s/12).toFixed(2).replace(".",","),A=document.createElement("div");A.className="installment-total",A.textContent="ou 12x de R$ "+x;var w=r.querySelector(".valor-pix");w&&w.parentNode&&w.parentNode.insertBefore(A,w.nextSibling)}}}var N='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/></svg>',T='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',h='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>';function o(){P();var r=document.querySelectorAll("#cart-preview-area .cart-item, .content-cart .cart-item");r.forEach(function(s){if(!s.querySelector(".qty-btn-minus")){var p=s.querySelector(".qtd-value");if(p){var x=s.querySelector(".cart-remove-item"),A=x?x.getAttribute("data-id"):null;if(A){var w=s.querySelector(".prod-remove");w&&!p.contains(x)&&(p.appendChild(x),w.style.display="none");var I=p.parentElement,V=null;if(I)for(var K=0;K<I.children.length;K++){var X=I.children[K];if(X!==p&&X.classList&&X.classList.contains("valor")){V=X;break}}V&&!p.contains(V)&&p.appendChild(V);var en=parseInt(s.getAttribute("data-item-quantity"));if(!en||isNaN(en)){var J=p.textContent.match(/(\d+)/);en=J?parseInt(J[1]):1}var e=document.createElement("button");e.className="qty-btn-minus",e.type="button",e.setAttribute("aria-label","Diminuir quantidade"),e.innerHTML=N,e.addEventListener("click",function(i){i.preventDefault(),i.stopPropagation();var l=parseInt(n.textContent)||1;if(l<=1){var g=s.querySelector(".cart-remove-item");g&&g.click();return}vt(s,A,-1,n,e,t)});var n=document.createElement("span");n.className="qty-display",n.textContent=en;var t=document.createElement("button");t.className="qty-btn-plus",t.type="button",t.setAttribute("aria-label","Aumentar quantidade"),t.innerHTML=T,t.addEventListener("click",function(i){i.preventDefault(),i.stopPropagation(),vt(s,A,1,n,e,t)});var a=document.createElement("div");a.className="mm-qty-wrap",a.appendChild(e),a.appendChild(n),a.appendChild(t),p.insertBefore(a,p.firstChild),x&&(x.innerHTML=h,x.setAttribute("aria-label","Remover produto"))}}}})}function m(){document.addEventListener("click",function(r){var s=r.target.closest(".cart-remove-item");if(!(!s||!s.closest("#cart-preview-area"))){r.preventDefault(),r.stopPropagation(),r.stopImmediatePropagation();var p=s.getAttribute("data-id");if(p){var x=s.closest(".cart-item"),A=x&&x.querySelector(".prod-nome")?.textContent?.trim()||"este produto",w=A.length>50?A.substring(0,50)+"…":A,I=document.getElementById("mm-confirm-overlay");I&&I.remove();var V=document.createElement("div");V.id="mm-confirm-overlay",V.className="mm-confirm-overlay",V.innerHTML='<div class="mm-confirm-card"><p class="mm-confirm-title">Remover produto?</p><p class="mm-confirm-desc">'+w.replace(/&/g,"&amp;").replace(/</g,"&lt;")+'</p><div class="mm-confirm-actions"><button class="mm-confirm-btn mm-confirm-btn-cancel">Manter</button><button class="mm-confirm-btn mm-confirm-btn-delete">Remover</button></div></div>',document.body.appendChild(V),V.querySelector(".mm-confirm-btn-cancel").addEventListener("click",function(){V.remove()}),V.querySelector(".mm-confirm-btn-delete").addEventListener("click",function(){V.remove(),window.__mmDeleteItem&&x?window.__mmDeleteItem(x,p):typeof Zord<"u"&&Zord.checkout&&Zord.checkout.deleteItem(parseInt(p))}),V.addEventListener("click",function(K){K.target===V&&V.remove()})}}},!0)}function c(){document.addEventListener("click",function(r){var s=r.target.closest(".finalizar-compra");s&&s.closest("#cart-preview-area")&&(r.preventDefault(),r.stopPropagation(),window.location.href="/checkout/identify")},!0)}function f(r,s){var p="cep=&cupom-desconto=&nenhumCreditoSelecionado=true&id="+encodeURIComponent(String(s))+"&area=main-cart";return fetch("/checkout/cart?operation="+encodeURIComponent(r),{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"text/html,application/json,*/*","X-Requested-With":"XMLHttpRequest"},body:p}).then(function(x){if(!x.ok)throw new Error("HTTP "+x.status);return x.text()})}var u=1500,C=2e3,v="mm_cep",F="mm_cart_snapshot",q=1800*1e3;function z(){try{var r=localStorage.getItem(v)||"",s=r.replace(/\D/g,"");if(s.length===8)return s}catch{}return null}function d(r){return!r||r.length!==8?"":r.slice(0,5)+"-"+r.slice(5)}function W(r){if(!r||r.length!==8)return C;var s=parseInt(r.slice(0,2),10);return isNaN(s)?C:s>=1&&s<=39||s>=80&&s<=99?u:C}function Y(){try{var r=localStorage.getItem(F);if(!r)return null;var s=JSON.parse(r);return!s||!s.ts||Date.now()-s.ts>q?null:s}catch{return null}}function R(r){var s=[];return r.forEach(function(p){var x=(p.querySelector(".prod-nome a, .prod-nome")||{}).textContent||"",A=p.querySelector(".qty-display"),w=A?parseInt(A.textContent):parseInt(p.getAttribute("data-item-quantity"))||1;s.push(x.trim().slice(0,30)+"x"+w)}),s.sort().join("|")}function H(r){if(!r||!Array.isArray(r.items))return"";var s=r.items.map(function(p){return(p.name||"").trim().slice(0,30)+"x"+(p.quantity||1)});return s.sort().join("|")}var O='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg>',L='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18M6 6l12 12"/></svg>',tn=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];function on(r){if(!r)return null;var s=String(r).match(/\d+/g);return!s||!s.length?null:Math.max.apply(null,s.map(Number))}function mn(r,s){for(var p=new Date(r.getTime()),x=0;x<s;){p.setDate(p.getDate()+1);var A=p.getDay();A!==0&&A!==6&&x++}return p}function dn(r){var s=new Date,p="dia "+r.getDate()+" de "+tn[r.getMonth()];return r.getFullYear()!==s.getFullYear()&&(p+=" de "+r.getFullYear()),p}function Ln(r){var s=on(r);if(!s||s<1)return null;var p=mn(new Date,s);return"Receba até "+dn(p)}var gn={},Hn=4e3,Tn={};function sn(r,s){if(!r||r.length!==8)return Promise.resolve(null);if(gn[r])return gn[r];if(!s){var p=Tn[r]||0;if(Date.now()-p<Hn)return Promise.resolve(null)}var x="cep="+encodeURIComponent(r.slice(0,5)+"-"+r.slice(5))+"&cupom-desconto=&nenhumCreditoSelecionado=true&area=main-cart",A=fetch("/checkout/cart?operation=atualizaValoresCarrinho",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"text/html,application/json,*/*","X-Requested-With":"XMLHttpRequest"},body:x}).then(function(w){if(!w.ok)throw new Error("HTTP "+w.status);return w.text()}).then(function(w){return Tn[r]=Date.now(),Pn(w)}).catch(function(){return null}).then(function(w){return delete gn[r],w});return gn[r]=A,A}function Pn(r){try{var s=new DOMParser().parseFromString(r,"text/html"),p=s.querySelector("#resumo-compra .frete-calculado")||s.querySelector(".frete-calculado");if(!p)return null;var x="",A=p.querySelector(".frete-location .city");A&&(x=A.textContent.trim());var w=null,I="",V="",K=p.querySelector(".info-frete-selec");if(K){var X=K.querySelector(".dias-entrega"),en=K.querySelector(".info-title span, .info-title");X&&(I=(X.textContent||"").trim()),en&&(V=(en.textContent||"").trim())}var J=p.querySelector(".line.valor-frete .value, .value.valor-frete")||p.querySelector(".valor-compra-frete .value");if(J){var e=(J.textContent||"").trim();if(/gr[áa]tis/i.test(e))w=0;else{var n=e.match(/[\d.,]+/);if(n){var t=parseFloat(n[0].replace(/\./g,"").replace(",","."));isNaN(t)||(w=t)}}}if(w==null){var a=p.querySelector(".servico-frete");if(a){var i=parseFloat(a.getAttribute("data-valor-frete")||"0");if(isNaN(i)||(w=i),V||(V=a.getAttribute("data-servico-frete")||""),!I){var l=a.querySelector(".dias-entrega");l&&(I=(l.textContent||"").trim())}}}if(w==null)return null;var g=null,y=s.querySelector(".total-boleto .value, .totais-valor.total-boleto .value");if(y){var S=(y.textContent||"").trim(),B=S.match(/[\d.,]+/);if(B){var D=parseFloat(B[0].replace(/\./g,"").replace(",","."));isNaN(D)||(g=D)}}return{city:x,shipping:w,shippingDeadline:I,shippingName:V,totalPix:g}}catch{return null}}function zn(r,s,p){if(!(!r||!p)){yn(r);try{let K=function(X){for(var en=0;en<A.length;en++)if(A[en]&&A[en].name===X)return A[en];return null};var x=Y()||{};x.ts=Date.now(),x.cepValue=s.slice(0,5)+"-"+s.slice(5),x.shipping=p.shipping,x.shippingDeadline=p.shippingDeadline,x.shippingName=p.shippingName,x.shippingCity=p.city,p.totalPix!=null&&(x.subtotalPix=p.totalPix);var A=x.items&&x.items.length?x.items:[],w=r.querySelectorAll(".cart-item:not(.mm-removing)");x.items=Array.prototype.map.call(w,function(X){var en=X.querySelector(".prod-nome a, .prod-nome"),J=(en&&en.textContent||"").trim(),e=X.querySelector(".qty-display"),n=e?parseInt(e.textContent):parseInt(X.getAttribute("data-item-quantity"))||1,t=K(J);return t&&t.quantity===n&&(t.lineTotalPix>0||t.lineTotal>0||t.imgSrc)?t:{name:J,quantity:n}}),localStorage.setItem(F,JSON.stringify(x))}catch{}var I=r.querySelectorAll(".cart-item:not(.mm-removing)"),V=0;I.forEach(function(K){var X=K.querySelector(".valor");if(X){var en=En(X.textContent);isNaN(en)||(V+=en)}}),r.querySelector(".box-total-btn")?Rn(r):Gn(r)}}function qn(r){var s=z();if(s){var p=Y(),x=H(p),A=R(r.querySelectorAll(".cart-item:not(.mm-removing)")),w=p&&p.cepValue&&p.cepValue.replace(/\D/g,"")===s,I=p&&p.shipping!=null&&!isNaN(p.shipping);p&&x===A&&w&&I||sn(s).then(function(V){V&&zn(r,s,V)})}}function bn(r){return String(r||"").replace(/[&<>"']/g,function(s){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]})}function An(r){if(!r)return null;var s=r.querySelector(".box-total-btn");if(s)return{host:s,before:s.querySelector(".total")};var p=r.querySelector(".area-finalizar-compra");if(p)return{host:p,before:p.firstElementChild};var x=r.querySelector(".finalizar-compra");if(x&&x.parentElement){var A=x.parentElement;return{host:A,before:A.firstElementChild}}return null}function $n(r){if(!r)return null;var s=r.closest(".carrinho-rapido-ctn");return s||(r.closest("#cart-preview-area")?gt():null)}function kn(r,s,p,x){if(r){var A=An(r);if(A){var w=A.host;r.classList.add("mm-ship-scope");var I=z(),V=Y(),K=R(r.querySelectorAll(".cart-item:not(.mm-removing)")),X=H(V),en=V&&X===K,J=W(I),e=s>=J,n=Math.max(0,J-s),t=Math.max(0,Math.min(100,s/J*100)),a=w.querySelector(".mm-cart-ship");if(!a){a=document.createElement("div"),a.className="mm-cart-ship",a.setAttribute("role","group"),a.setAttribute("aria-label","Informações de frete");var i=A.before;i&&i.parentNode===w?w.insertBefore(a,i):w.insertBefore(a,w.firstChild)}if(a.classList.toggle("is-free",e),On(a),a.dataset.mmEditing!=="1"){var l=V&&V.cepValue&&V.cepValue.replace(/\D/g,"")===I,g=I&&en&&l&&V.shippingCity,y=g?Ln(V.shippingDeadline):null,S="";if(S+='<div class="mm-cart-ship-location">',I){var B=d(I);if(g&&(B+=" · "+bn(V.shippingCity)),S+='<span class="mm-cart-ship-label">Envio para</span><div class="mm-cart-ship-location-value"><span>'+B+'</span><button class="mm-cart-ship-edit" type="button" data-mm-ship="edit">Trocar</button></div>',y){var D=bn(y);x&&p>0?D+=" · <strong>"+bn(xn(p))+"</strong>":x&&p===0&&(D+=" · <strong>Grátis</strong>"),S+='<span class="mm-cart-ship-deadline">'+D+"</span>"}}else S+='<span class="mm-cart-ship-label">Calcule o frete</span><div class="mm-cart-ship-location-value"><span style="color:#9CA3AF;font-weight:500;">Informe seu CEP</span><button class="mm-cart-ship-edit" type="button" data-mm-ship="edit">Calcular</button></div>';S+="</div>";var M=e?"Frete grátis desbloqueado":"Faltam "+xn(n)+" para frete grátis",G=parseFloat(r.dataset.mmShipPct||"0")||0;S+='<div class="mm-cart-ship-progress">',S+='<div class="mm-cart-ship-bar" role="progressbar" aria-valuenow="'+Math.round(s)+'" aria-valuemin="0" aria-valuemax="'+Math.round(J)+'" aria-valuetext="'+bn(M)+'" aria-label="Progresso para frete grátis"><div class="mm-cart-ship-bar-fill" style="width:'+G.toFixed(1)+'%"></div></div>',S+='<p class="mm-cart-ship-nudge'+(e?" is-free":"")+'">',e?S+=O+"Frete grátis garantido":S+="Faltam <strong>"+bn(xn(n))+"</strong> para frete grátis",S+="</p>",S+="</div>",a.innerHTML=S;var Q=a.querySelector(".mm-cart-ship-bar-fill");Q&&requestAnimationFrame(function(){Q.style.width=t.toFixed(1)+"%"});var j=r.dataset.mmShipWasFree==="1";e&&!j&&G>0&&(a.classList.remove("mm-just-unlocked"),a.offsetWidth,a.classList.add("mm-just-unlocked"),setTimeout(function(){a.classList.remove("mm-just-unlocked")},1400)),r.dataset.mmShipWasFree=e?"1":"",r.dataset.mmShipPct=t.toFixed(1)}}}}var Wn='<svg class="mm-cart-ship-spinner" width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><style>.mm-sp{animation:mm-spin 1.2s linear infinite;transform-origin:center}.mm-sp circle{stroke:#4B664A;stroke-width:3;fill:none;stroke-linecap:round;stroke-dasharray:44;stroke-dashoffset:16;animation:mm-sp-dash 1.2s ease-in-out infinite}@keyframes mm-spin{to{transform:rotate(360deg)}}@keyframes mm-sp-dash{0%{stroke-dashoffset:44}50%{stroke-dashoffset:8}100%{stroke-dashoffset:44}}</style><g class="mm-sp"><circle cx="12" cy="12" r="9.5"/></g></svg>';function pn(r){if(r){var s=r.querySelector(".mm-cart-ship-deadline");if(s)s.innerHTML="Recalculando frete "+Wn;else{var p=r.querySelector(".mm-cart-ship-location");if(p){var x=document.createElement("span");x.className="mm-cart-ship-deadline",x.innerHTML="Recalculando frete "+Wn,p.appendChild(x)}}var A=An(r);A&&A.host.classList.add("mm-ship-loading")}}function yn(r){if(r){var s=An(r);s&&s.host.classList.remove("mm-ship-loading")}}function On(r){!r||r.dataset.mmShipBound||(r.dataset.mmShipBound="1",r.addEventListener("click",function(s){var p=s.target.closest('[data-mm-ship="edit"]');if(p){s.preventDefault(),s.stopPropagation(),Bn(r);return}var x=s.target.closest('[data-mm-ship="cancel"]');if(x){s.preventDefault(),s.stopPropagation(),Qn(r);return}s.target.closest(".mm-cart-ship-cep-form")&&s.stopPropagation()},!0))}function Bn(r){var s=r.querySelector(".mm-cart-ship-location");if(s){r.dataset.mmEditing="1";var p=z()||"";s.innerHTML='<span class="mm-cart-ship-label">Digite seu CEP</span><form class="mm-cart-ship-cep-form" data-mm-ship-form="1" novalidate><input class="mm-cart-ship-cep-input" type="text" inputmode="numeric" autocomplete="postal-code" placeholder="00000-000" maxlength="9" value="'+bn(d(p))+'" aria-label="CEP" /><button class="mm-cart-ship-cep-save" type="submit">OK</button><button class="mm-cart-ship-cep-cancel" type="button" data-mm-ship="cancel" aria-label="Cancelar">'+L+"</button></form>";var x=s.querySelector(".mm-cart-ship-cep-input"),A=s.querySelector("form");x&&(setTimeout(function(){try{x.focus(),x.select()}catch{}},10),x.addEventListener("input",function(){x.classList.remove("is-invalid");var w=x.value.replace(/\D/g,"").slice(0,8);x.value=w.length>5?w.slice(0,5)+"-"+w.slice(5):w}),x.addEventListener("keydown",function(w){w.key==="Escape"&&(w.preventDefault(),Qn(r))})),A&&A.addEventListener("submit",function(w){w.preventDefault(),w.stopPropagation(),pt(r)})}}function Qn(r){r.dataset.mmEditing="";var s=$n(r);if(s){var p=s.querySelectorAll(".cart-item:not(.mm-removing)"),x=0;p.forEach(function(A){var w=A.querySelector(".valor");if(w){var I=En(w.textContent);isNaN(I)||(x+=I)}}),kn(s,x)}}function pt(r){var s=r.querySelector(".mm-cart-ship-cep-input");if(s){var p=s.value.replace(/\D/g,"");if(p.length!==8){s.classList.add("is-invalid"),s.focus();return}try{localStorage.setItem(v,p)}catch{}var x=r.querySelector(".mm-cart-ship-cep-save");x&&(x.disabled=!0,x.textContent="...");var A=$n(r);try{var w=Y();w&&(w.cepValue="",localStorage.setItem(F,JSON.stringify(w)))}catch{}Qn(r),sn(p).then(function(I){I&&A&&zn(A,p,I)})}}function En(r){if(!r)return NaN;var s=String(r).replace(/\s/g,"").match(/([\d.,]+)/);return s?parseFloat(s[1].replace(/\./g,"").replace(",",".")):NaN}function xn(r){return isNaN(r)?"":"R$ "+r.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function cn(r){if(isNaN(r))return"";var s=r.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),p=s.split(",");return"R$&nbsp;"+p[0]+'<span class="mm-cents">,'+(p[1]||"00")+"</span>"}function Jn(r){var s=0;return Array.prototype.forEach.call(r,function(p){var x=parseFloat(p.getAttribute("data-item-price"))||0,A=parseInt(p.getAttribute("data-item-quantity"));if(!A||isNaN(A)){var w=p.querySelector(".qty-display");w?A=parseInt(w.textContent)||1:A=1}s+=x*A}),s}function ot(r){var s=r.querySelectorAll(".cart-item:not(.mm-removing)");s.forEach(function(p){var x=parseFloat(p.getAttribute("data-item-price"))||0,A=parseInt(p.getAttribute("data-item-quantity"));if(!A||isNaN(A)){var w=p.querySelector(".qty-display");w?A=parseInt(w.textContent)||1:A=1}var I=p.querySelector(".valor");I&&x>0&&(I.innerHTML=cn(x*A))})}function Dn(r){if(!(!r||r.dataset.mmTotalRatio)){var s=r.querySelectorAll(".cart-item");if(s.length){var p=Jn(s),x=r.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||r.querySelector(".box-total-btn .linha-total .valor-final strong");if(x&&p>.01){var A=En(x.textContent);isNaN(A)||(r.dataset.mmTotalRatio=String(A/p))}}}}function Kn(r,s){var p=r.querySelector(".box-total-btn .linha-total");if(p){var x=p.parentElement.querySelector(".mm-cart-savings");if(x&&x.remove(),!(!s||s<.01)){var A=document.createElement("span");A.className="mm-cart-savings",A.textContent="Você economiza "+xn(s)+" com PIX",p.nextSibling?p.parentElement.insertBefore(A,p.nextSibling):p.parentElement.appendChild(A)}}}function Rn(r,s){if(r){Dn(r);var p=r.querySelectorAll(".cart-item:not(.mm-removing)"),x=Jn(p),A=r.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||r.querySelector(".box-total-btn .linha-total .valor-final strong"),w=parseFloat(r.dataset.mmTotalRatio||"0.95")||.95,I=x*w,V=x-I,K=z(),X=Y(),en=H(X),J=R(p),e=X&&X.cepValue&&X.cepValue.replace(/\D/g,"")===K,n=!!(K&&X&&e&&X.shipping!=null&&!isNaN(X.shipping)),t=r.dataset.mmShipPendingFetch==="1";!n&&t&&K&&X&&X.shipping!=null&&(n=!0);var a=n?parseFloat(X.shipping):0,i=I+a,l=x+a;if(A){var g=En(A.textContent);if(s)(isNaN(g)||Math.abs(i-g)>.005)&&(A.innerHTML=cn(i));else if(!isNaN(g)&&Math.abs(i-g)>.005){var y=r.querySelector(".box-total-btn .linha-total .valor-final");y&&(y.classList.remove("mm-pop"),y.offsetWidth,y.classList.add("mm-pop"),setTimeout(function(){y.classList.remove("mm-pop")},450)),ft(A,g,i)}else A.innerHTML=cn(i)}var S=r.querySelector(".box-total-btn .valor-final.card");if(S){var B=l/12;S.innerHTML="<span>ou em até <strong>12x</strong> de <strong>"+xn(B)+"</strong> no cartão</span>"}var D=r.querySelector(".box-total-btn .linha-total .valor-final .tipo-pagto");D&&(D.textContent="No PIX"),Kn(r,V),kn(r,x,a,n);try{var M=0;p.forEach(function(Q){var j=Q.querySelector(".qty-display");j&&(M+=parseInt(j.textContent)||0)});var G=document.getElementById("mm-h-cart-count");G&&(M>0?(G.textContent=M>99?"99+":String(M),G.hidden=!1):G.hidden=!0)}catch{}}}function nt(){var r=document.querySelector(".carrinho-rapido-ctn");if(!(!r||!r.querySelector(".box-total-btn"))){var s=r.querySelectorAll(".cart-item:not(.mm-removing)");if(s.length){var p=r.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||r.querySelector(".box-total-btn .linha-total .valor-final strong");if(p){var x=Jn(s);if(x>.01){var A=parseFloat(r.dataset.mmTotalRatio||"0.95")||.95,w=z(),I=Y(),V=I&&I.cepValue&&I.cepValue.replace(/\D/g,"")===w,K=!!(w&&I&&V&&I.shipping!=null&&!isNaN(I.shipping));!K&&r.dataset.mmShipPendingFetch==="1"&&w&&I&&I.shipping!=null&&(K=!0);var X=K?parseFloat(I.shipping):0,en=x*A+X,J=En(p.textContent);(isNaN(J)||Math.abs(en-J)>.01)&&Rn(r,!0)}}}}}function gt(){var r=document.querySelector('#cart-preview-area > div[class*="z-[9999]"]');if(r)return r;var s=document.querySelector(".carrinho-rapido-ctn");return s&&!s.querySelector(".box-total-btn")&&s.querySelector(".valor-pix")?s:null}function qt(r,s){var p=r.querySelector(".installment-total");if(!(!p||!p.parentElement)){var x=p.parentElement,A=x.querySelector(".mm-cart-savings-mobile");if(!s||s<.01){A&&A.remove();return}var w="Você economiza "+xn(s)+" com PIX";if(A){A.textContent!==w&&(A.textContent=w);return}var I=document.createElement("span");I.className="mm-cart-savings-mobile",I.textContent=w,p.nextSibling?x.insertBefore(I,p.nextSibling):x.appendChild(I)}}function Nn(r,s,p){if(!(!r||!r.classList||!r.classList.contains("carrinho-rapido-ctn"))&&!r.querySelector(".box-total-btn")){var x=r.querySelector(".area-finalizar-compra");if(!(!x||!(s>0))){var A=x.querySelector(".forma-pix"),w=A?A.parentElement:null;if(w){var I=s*p,V=s/12,K=s-I;w.classList.add("mm-native-pay-hidden");var X=x.querySelector(".mm-cart-total-b");X||(X=document.createElement("div"),X.className="mm-cart-total-b",X.innerHTML='<span class="mm-tb-label">Total</span><span class="mm-tb-row"><strong class="mm-tb-value"></strong><span class="mm-tb-pix">No PIX</span></span><span class="mm-tb-savings"></span><span class="mm-tb-parcela"></span>',w.nextSibling?x.insertBefore(X,w.nextSibling):x.appendChild(X));var en=X.querySelector(".mm-tb-value"),J=xn(I);en&&en.textContent!==J&&(en.textContent=J);var e=X.querySelector(".mm-tb-savings");if(e)if(K>=.01){var n="Você economiza "+xn(K)+" com PIX";e.textContent!==n&&(e.textContent=n),e.style.display=""}else e.style.display="none";var t=X.querySelector(".mm-tb-parcela");if(t){var a="ou em até 12x de "+xn(V)+" no cartão";t.textContent!==a&&(t.textContent=a)}}}}}function Gn(r){if(r=r||gt(),!(!r||r.querySelector(".box-total-btn")||!r.querySelector(".valor-pix"))){var s=r.querySelectorAll(".cart-item:not(.mm-removing)"),p=s.length,x=document.getElementById("mm-h-cart-count");if(x&&p>0){var A=p>99?"99+":String(p);(x.textContent!==A||x.hidden)&&(x.textContent=A,x.hidden=!1)}if(s.length){var w=Jn(s);if(w>0){Array.prototype.forEach.call(s,function(G){var Q=parseFloat(G.getAttribute("data-item-price"))||0;if(Q>0){var j=parseInt(G.getAttribute("data-item-quantity"));if(!j||isNaN(j)){var _=G.querySelector(".qty-display");j=_&&parseInt(_.textContent)||1}var rn=G.querySelector(".valor");if(rn){var an=Q*j,ln=rn.querySelector("span")||rn,un=En(ln.textContent);(isNaN(un)||Math.abs(un-an)>.005)&&(ln.textContent=xn(an))}}});var I=r.querySelector(".valor-pix"),V=I?I.querySelector("span")||I:null;if(!r.dataset.mmMobileRatio&&V){var K=En(V.textContent);if(!isNaN(K)&&K>0){var X=K/w;X>.8&&X<=1.0001&&(r.dataset.mmMobileRatio=String(X))}}var en=parseFloat(r.dataset.mmMobileRatio||"0.95");if(en>.8&&en<=1.0001||(en=.95),V){var J=w*en,e=En(V.textContent);(isNaN(e)||Math.abs(e-J)>.005)&&(V.textContent=xn(J))}var n=r.querySelector(".installment-total");if(n){var t=w/12,a=En(n.textContent);(isNaN(a)||Math.abs(a-t)>.005)&&(n.textContent="ou 12x de "+xn(t))}var i=z(),l=Y(),g=l&&l.cepValue&&l.cepValue.replace(/\D/g,"")===i,y=!!(i&&l&&g&&l.shipping!=null&&!isNaN(l.shipping)),S=y?parseFloat(l.shipping):0,B=(i||"")+"|"+w.toFixed(2)+"|"+(y?1:0)+"|"+S,D=r.querySelector(".mm-cart-ship"),M=D&&D.dataset.mmEditing==="1";!M&&(!D||r.dataset.mmMobShipSig!==B)&&(r.dataset.mmMobShipSig=B,kn(r,w,S,y)),qn(r),qt(r,w-w*en),Nn(r,w,en)}}}}function ft(r,s,p){if(!r||isNaN(s)||isNaN(p))return;var x=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(x){r.innerHTML=cn(p);return}var A=420,w=performance.now();function I(V){return 1-Math.pow(1-V,3)}(function V(K){var X=Math.min(1,(K-w)/A);r.innerHTML=cn(s+(p-s)*I(X)),X<1&&requestAnimationFrame(V)})(w)}function vt(r,s,p,x,A,w){if(!(!r||!s)){var I=parseInt(x.textContent)||1,V=I+p;if(!(V<1)){var J=r.closest(".carrinho-rapido-ctn");Dn(J),A.disabled=!0,w.disabled=!0;var K=parseFloat(r.getAttribute("data-item-price"))||0;x.textContent=V,r.setAttribute("data-item-quantity",V);var X=r.querySelector(".valor");if(X){var en=K*V;X.textContent=xn(en),X.classList.remove("mm-pop"),X.offsetWidth,X.classList.add("mm-pop"),setTimeout(function(){X.classList.remove("mm-pop")},450)}var J=r.closest(".carrinho-rapido-ctn"),e=p>0?"adicionaItem":"removeItem";z()&&J&&(J.dataset.mmShipPendingFetch="1"),Rn(J),Gn(),z()&&pn(J),f(e,s).catch(function(){x.textContent=I,r.setAttribute("data-item-quantity",I),X&&(X.innerHTML=cn(K*I)),J&&(J.dataset.mmShipPendingFetch=""),Rn(J),Gn()}).then(function(){A.disabled=!1,w.disabled=!1;var n=z();n&&J?(pn(J),sn(n,!0).then(function(t){J.dataset.mmShipPendingFetch="",t?zn(J,n,t):yn(J)})):J&&(J.dataset.mmShipPendingFetch="")})}}}function xt(r,s){if(!(!r||!s)){var p=r.closest(".carrinho-rapido-ctn");Dn(p);var x=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,A=x?0:360;x||r.classList.add("mm-removing"),setTimeout(function(){r.parentNode&&r.parentNode.removeChild(r);var w=p?p.querySelectorAll(".cart-item:not(.mm-removing)"):[],I=w.length===0;if(I){if(p){p.dataset.mmShipPendingFetch="";var V=p.querySelector(".mm-cart-ship");V&&V.remove();var K=p.querySelector(".box-total-btn, .area-finalizar-compra");K&&(K.style.display="none")}typeof window.__mmForceEmptyCartState=="function"&&window.__mmForceEmptyCartState(p)}else Rn(p),z()&&pn(p);var X=document.getElementById("mm-h-cart-count"),en=document.getElementById("mm-h-cart"),J=w.length;X&&(X.textContent=J>99?"99+":String(J),X.hidden=J===0),en&&en.setAttribute("aria-label","Carrinho, "+J+" "+(J===1?"item":"itens")),Gn()},A),f("deleteItem",s).catch(function(){}).then(function(){var w=p?p.querySelectorAll(".cart-item:not(.mm-removing)"):[],I=document.getElementById("mm-h-cart-count");if(I&&(I.textContent=w.length>99?"99+":String(w.length),I.hidden=w.length===0),w.length===0){p&&(p.dataset.mmShipPendingFetch="");return}var V=z();V&&p?(p.dataset.mmShipPendingFetch="1",pn(p),sn(V,!0).then(function(K){p.dataset.mmShipPendingFetch="",K?zn(p,V,K):yn(p)})):p&&(p.dataset.mmShipPendingFetch="")})}}window.__mmDeleteItem=xt;var At=null,bt=new Set,mt=null;function jn(r){if(!r)return NaN;var s=String(r).replace(/\s/g,"").match(/([\d.,]+)/);if(!s)return NaN;var p=s[1].replace(/\./g,"").replace(",","."),x=parseFloat(p);return isNaN(x)?NaN:x}function it(r){return isNaN(r)?"":"R$ "+r.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function Ft(r,s,p){if(!r||isNaN(s)||isNaN(p))return;mt&&cancelAnimationFrame(mt);var x=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(x){r.textContent=it(p);return}var A=420,w=performance.now();function I(K){return 1-Math.pow(1-K,3)}function V(K){var X=K-w,en=Math.min(1,X/A),J=s+(p-s)*I(en);r.textContent=it(J),en<1?mt=requestAnimationFrame(V):mt=null}mt=requestAnimationFrame(V)}function ct(r){return r?r.querySelector(".box-total-btn .linha-total .valor-final > .valor > strong")||r.querySelector(".box-total-btn .linha-total .valor-final strong")||r.querySelector(".valor-pix strong")||r.querySelector(".valor-pix"):null}function kt(r){return r?r.querySelector(".box-total-btn .linha-total .valor-final"):null}function yt(r){var s=kt(r);s&&(s.classList.remove("mm-pop"),s.offsetWidth,s.classList.add("mm-pop"),setTimeout(function(){s.classList.remove("mm-pop")},450))}function Zn(){var r=document.querySelector(".carrinho-rapido-ctn");if(r){var s=r.querySelectorAll(".cart-item:not(.mm-removing)");if(s.length>0){var p=r.querySelector(".box-total-btn");p&&p.dataset.mmTotalEnhanced!=="1"&&(Dn(r),ot(r),Rn(r),p.dataset.mmTotalEnhanced="1",r.dataset.mmShipRendered="1",qn(r))}r.querySelector(".box-total-btn")||Gn(r);var x=r.querySelectorAll(".cart-item"),A=new Set;x.forEach(function(w){var I=w.id||w.getAttribute("data-item-id")||"";I&&(A.add(I),!bt.has(I)&&bt.size>0&&(w.classList.add("mm-added"),setTimeout(function(){w.classList.remove("mm-added")},500)))}),bt=A}}function _n(){var r=document.querySelector(".carrinho-rapido-ctn");if(!(!r||r.dataset.mmAnimObserved)){r.dataset.mmAnimObserved="1",Zn();var s=new MutationObserver(function(){clearTimeout(_n._t),_n._t=setTimeout(Zn,60)});s.observe(r,{childList:!0,subtree:!0,characterData:!0})}}function dt(){b(),m(),c();var r=document.getElementById("cart-preview-area");if(r){var s=new MutationObserver(function(){setTimeout(o,100),setTimeout(_n,150),setTimeout(Gn,180),setTimeout(nt,220)});s.observe(r,{childList:!0,subtree:!0})}setInterval(o,800),setInterval(_n,800),setInterval(Gn,800),setInterval(nt,800),o(),_n(),Gn(),nt()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",dt):dt()})(),(function b(){"use strict";var P="mm_cep",N="mm_cart_snapshot",T=18e5,h="mm_onepage_draft",o=1440*60*1e3,m=2e3,c="https://magazord-public.s3.sa-east-1.amazonaws.com/madeiramania/resources/Design%20sem%20nome%20(1).svg",f="https://api.whatsapp.com/send?phone=5511915299488&text="+encodeURIComponent("Olá! Estou no checkout e gostaria de tirar uma dúvida sobre meu pedido."),u=location.pathname,C=u.indexOf("/checkout/cart")!==-1,v=u.indexOf("/checkout/identify")!==-1,F=u.indexOf("/checkout/onepage")!==-1,q=u.indexOf("/checkout/payment")!==-1,z=u.indexOf("/checkout/done")!==-1;if(z){try{localStorage.removeItem("mm_onepage_draft")}catch{}return}if(!C&&!v&&!F&&!q)return;b._retries=(b._retries||0)+1;var d=document.querySelector("#checkout-main-area");if(!d){try{var W=document.body&&document.body.textContent||"",Y=/muito tempo inativo|realize login novamente/i.test(W);if((F||v)&&(Y||b._retries>=40)&&!sessionStorage.getItem("mm_checkout_recovery")){sessionStorage.setItem("mm_checkout_recovery","1"),location.href="/checkout/cart";return}}catch{}b._retries<40&&setTimeout(b,400);return}try{sessionStorage.removeItem("mm_checkout_recovery")}catch{}function R(e){return isNaN(e)||e<0?"R$ 0,00":"R$ "+e.toFixed(2).replace(".",",").replace(/(\d)(?=(\d{3})+,)/g,"$1.")}function H(e){if(!e)return 0;var n=String(e).match(/(-?[\d.]+,\d{2})/);return n&&parseFloat(n[1].replace(/\./g,"").replace(",","."))||0}function O(e){return String(e||"").replace(/[&<>"']/g,function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[n]})}var L={truck:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-5l-3-4zM6 18.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.5-7H17V9.5h2.04l1.46 2-.04 0z"/></svg>',check:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',checkCircle:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',bolt:'<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',shield:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>',lock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>',card:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',rotate:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',minus:'<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',plus:'<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M3 7h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',trash:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',close:'<svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5l-7 7M3.5 3.5l7 7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',arrow:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',tag:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',whats:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',box:'<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>'},tn={get:function(e){try{return localStorage.getItem(e)}catch{return null}},set:function(e,n){try{localStorage.setItem(e,n)}catch{}},remove:function(e){try{localStorage.removeItem(e)}catch{}}};function on(e){try{var n={ts:Date.now(),items:e.items.map(function(t){return{name:t.name,variant:t.variant,imgSrc:t.imgSrc,quantity:t.quantity,lineTotal:t.lineTotal,lineTotalPix:t.lineTotalPix,isPix:t.isPix,deposito:t.deposito}}),subtotalPix:e.subtotalPix,subtotalFull:e.subtotalFull,discount:e.discount,couponCode:e.couponCode,shipping:e.shipping,shippingDeadline:e.shippingDeadline,shippingName:e.shippingName,shippingCity:e.shippingCity,shippingOptions:e.shippingOptions,cepValue:e.cepValue};tn.set(N,JSON.stringify(n))}catch{}}function mn(){try{var e=tn.get(N);if(!e)return null;var n=JSON.parse(e);return!n||!n.ts||Date.now()-n.ts>T?null:n}catch{return null}}function dn(){try{for(var e=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep","mm-op-rua","mm-op-num","mm-op-comp","mm-op-bairro","mm-op-cidade","mm-op-uf"],n={ts:Date.now()},t=0,a=0;a<e.length;a++){var i=document.getElementById(e[a]);i&&i.value&&(n[e[a]]=i.value,t++)}if(t===0){window._mmDraftDebug&&console.log("[mm-draft] skip save (0 fields)");return}tn.set(h,JSON.stringify(n)),window._mmDraftDebug&&console.log("[mm-draft] saved",t,"fields",n)}catch(l){window._mmDraftDebug&&console.warn("[mm-draft] save failed",l)}}function Ln(){try{var e=tn.get(h);if(!e)return null;var n=JSON.parse(e);return!n||!n.ts?null:Date.now()-n.ts>o?(tn.remove(h),null):n}catch{return null}}function gn(){try{tn.remove(h)}catch{}}function Hn(){var e=Ln();if(!e)return window._mmDraftDebug&&console.log("[mm-draft] no draft to restore"),null;for(var n=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep","mm-op-rua","mm-op-num","mm-op-comp","mm-op-bairro","mm-op-cidade","mm-op-uf"],t=0,a=0;a<n.length;a++){var i=document.getElementById(n[a]);if(i&&e[n[a]]){try{var l=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;l.call(i,e[n[a]])}catch{i.value=e[n[a]]}i.dispatchEvent(new Event("input",{bubbles:!0})),/^mm-op-(rua|bairro|cidade|uf)$/.test(n[a])&&(i.dataset.mmCepFill="1"),t++}}return window._mmDraftDebug&&console.log("[mm-draft] restored",t,"fields from draft",e),e}function Tn(){for(var e={items:[],subtotalPix:0,subtotalFull:0,discount:0,shipping:null,shippingRaw:"",shippingDeadline:"",shippingName:"",shippingCity:"",shippingOptions:[],couponCode:"",cepValue:"",canFinalize:!1,hasFinalizar:!1},n=d.querySelectorAll(".cart-item"),t=0;t<n.length;t++){var a=n[t],i=a.querySelector('.qtd-item[id^="item_carrinho_"]'),l=i&&i.id.match(/item_carrinho_(\d+)/),g=l?parseInt(l[1],10):null,y=a.querySelector("figure img")||a.querySelector("#product-img")||a.querySelector("img"),S=a.querySelector(".nome-produto .link")||a.querySelector("figure a"),B=a.querySelector(".column-valor-produto .valor"),D=B?B.textContent.trim():"",M=!!a.querySelector(".column-valor-produto .sub");e.items.push({dataId:g,sku:a.getAttribute("data-item-id")||"",name:a.getAttribute("data-item-name")||a.getAttribute("data-name")||"",variant:a.getAttribute("data-item-variant")||"",brand:a.getAttribute("data-item-brand")||"",category:a.getAttribute("data-item-category")||"",priceUnit:parseFloat(a.getAttribute("data-item-price")||"0"),lineTotal:parseFloat(a.getAttribute("data-valor")||"0"),quantity:parseInt(a.getAttribute("data-item-quantity")||"1",10),deposito:a.getAttribute("data-item-deposito")==="1",imgSrc:y?y.getAttribute("src")||y.currentSrc:"",href:S?S.getAttribute("href"):"",lineTotalPix:H(D),isPix:M}),e.subtotalFull+=parseFloat(a.getAttribute("data-valor")||"0")}var G=d.querySelector("#resumo-compra .resumo-valores .value");G&&(e.subtotalPix=H(G.textContent)),e.subtotalPix<=0&&(e.subtotalPix=e.items.reduce(function(wt,Tt){return wt+(Tt.lineTotalPix||0)},0));var Q=d.querySelector("#resumo-compra .discount-value");Q&&(e.discount=H(Q.textContent));var j=d.querySelector("#resumo-compra .txt-cupom, #resumo-compra .alert.alert-type-1");if(j){var _=j.textContent.match(/([A-Z0-9]{3,})/);_&&(e.couponCode=_[1])}var rn=d.querySelector("#resumo-compra .frete-calculado, .frete-calculado");if(rn&&rn.textContent.trim()){e.shippingRaw=rn.textContent.trim();var an=rn.querySelector(".frete-location .city");an&&(e.shippingCity=an.textContent.trim());for(var ln=rn.querySelectorAll(".servico-frete"),un=0;un<ln.length;un++){var wn=ln[un],In=wn.querySelector('input[type="radio"]'),k=wn.querySelector(".dias-entrega"),E=parseFloat(wn.getAttribute("data-valor-frete")||"0"),U=wn.getAttribute("data-servico-frete")||"",nn=k?k.textContent.trim().replace(/\s+/g," ").replace(/\s*-\s*$/,"").trim():"",Z=nn.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i),fn=Z?Z[1].replace(/\s+/g," "):nn;e.shippingOptions.push({id:In?In.value:"",name:U,deadline:fn,value:E,isFree:E===0,isSelected:In?In.checked:!1})}var hn=e.shippingOptions.filter(function(wt){return wt.isSelected})[0];if(!hn&&e.shippingOptions.length>0&&(hn=e.shippingOptions[0]),hn)e.shipping=hn.value,e.shippingName=hn.name,e.shippingDeadline=hn.deadline;else{var Sn=rn.querySelector(".info-frete-selec"),Fn=rn.querySelector(".dias-entrega, .info-frete-selec .dias-entrega"),Mn=rn.querySelector(".valor-frete .value, .value.valor-frete"),Yn=rn.querySelector(".info-frete-selec .info-title span, .info-title span");if(Mn){var Vn=Mn.textContent.trim();if(/gr[aá]tis/i.test(Vn))e.shipping=0;else{var tt=H(Vn);tt>0&&(e.shipping=tt)}}if(Fn){var et=Fn.textContent.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*\([^)]+\))?(?:\s*[úu]teis)?)/i);et&&(e.shippingDeadline=et[1].replace(/\s+/g," ").replace(/\(s\)/,"").trim())}if(Yn&&(e.shippingName=Yn.textContent.trim()),e.shipping===null)if(/gr[aá]tis/i.test(e.shippingRaw))e.shipping=0;else{var ut=H(e.shippingRaw);ut>0&&(e.shipping=ut)}if(!e.shippingDeadline){var Cn=e.shippingRaw.match(/(\d+(?:\s*[aà]\s*\d+)?)\s*dias?/i);Cn&&(e.shippingDeadline=Cn[1]+" dias úteis")}}}var ht=d.querySelector("#cep, .input-cep");return ht&&(e.cepValue=ht.value||""),e.hasFinalizar=!!d.querySelector("#finalizar-compra"),e.canFinalize=e.items.length>0,e}function sn(e){e=e||"cart";var n='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>';function t(a,i){var l=a===e,g="mm-checkout-step"+(l?" is-active":""),y=l?' aria-current="step"':"";return'<li class="'+g+'"'+y+'><span class="mm-checkout-step-label">'+i+"</span></li>"}return'<header class="mm-checkout-header"><a class="mm-checkout-header-logo" href="/" aria-label="Madeira Mania - voltar à home"><img src="'+c+'" alt="Madeira Mania" width="180" height="44"></a><nav class="mm-checkout-steps" aria-label="Etapas do checkout"><ol>'+t("cart","Carrinho")+'<li class="mm-checkout-step-sep" aria-hidden="true">›</li>'+t("delivery","Entrega")+'<li class="mm-checkout-step-sep" aria-hidden="true">›</li>'+t("payment","Pagamento")+'</ol></nav><div class="mm-checkout-secure">'+n+'<span class="mm-checkout-secure-text"><strong>Compra 100% segura</strong><small>Site protegido por SSL</small></span></div></header>'}function Pn(e){var n=e.imgSrc?'<img src="'+O(e.imgSrc)+'" alt="'+O(e.name)+'" loading="lazy">':"",t=e.href?'<a class="mm-item-name" href="'+O(e.href)+'">'+O(e.name)+"</a>":'<span class="mm-item-name">'+O(e.name)+"</span>",a=e.variant?'<p class="mm-item-variant">'+O(e.variant)+"</p>":"",i="",l=e.quantity<=1?' disabled aria-disabled="true"':"",g;if(e.lineTotalPix>0&&e.isPix){var y='<span class="mm-item-price-sub">no PIX</span>',S=e.quantity>1?R(e.lineTotalPix/e.quantity)+" cada":"";g='<div class="mm-item-price"><span class="mm-item-price-value">'+R(e.lineTotalPix)+"</span>"+y+(S?'<span class="mm-item-price-unit">'+S+"</span>":"")+"</div>"}else{var B=e.quantity>1?R(e.priceUnit)+" cada":"";g='<div class="mm-item-price"><span class="mm-item-price-value">'+R(e.lineTotal)+"</span>"+(B?'<span class="mm-item-price-unit">'+B+"</span>":"")+"</div>"}return'<div class="mm-item" data-mm-id="'+e.dataId+'"><div class="mm-item-thumb">'+n+'</div><div class="mm-item-body">'+t+a+i+"</div>"+g+'<div class="mm-item-controls"><div class="mm-qty" role="group" aria-label="Quantidade"><button type="button" class="mm-qty-btn" data-mm-act="dec"'+l+' aria-label="Diminuir quantidade">'+L.minus+'</button><span class="mm-qty-value">'+e.quantity+'</span><button type="button" class="mm-qty-btn" data-mm-act="inc" aria-label="Aumentar quantidade">'+L.plus+'</button></div><button type="button" class="mm-item-remove" data-mm-act="remove" aria-label="Remover item" title="Remover">'+L.trash+"</button></div></div>"}function zn(e){return e.items.length?e.items.map(Pn).join(""):'<div class="mm-empty"><div class="mm-empty-icon">'+L.box+'</div><h3 class="mm-empty-title">Seu carrinho está vazio</h3><p class="mm-empty-desc">Explore nossos móveis e encontre a peça certa para sua casa.</p><a class="mm-empty-cta" href="/">Explorar produtos '+L.arrow+'</a><p class="mm-empty-perks">Frete grátis acima de R$ 2.000 · 12x sem juros · 7% off no PIX</p></div>'}function qn(e){for(var n="",t=0;t<e;t++)n+='<div class="mm-skel-item"><div class="mm-skel mm-skel-thumb"></div><div class="mm-skel-lines"><div class="mm-skel mm-skel-line w-3-4"></div><div class="mm-skel mm-skel-line w-1-2"></div><div class="mm-skel mm-skel-line w-1-3"></div></div><div class="mm-skel-lines"><div class="mm-skel mm-skel-line w-1-2"></div></div></div>';return n}function bn(e){var n=e.subtotalFull>0?e.subtotalFull:e.subtotalPix,t='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+R(n)+"</span></div>";if(e.shipping!==null){var a;e.shipping===0?a='<span class="mm-row-value is-free">'+L.check+" Grátis</span>":a='<span class="mm-row-value">'+R(e.shipping)+"</span>";var i='<span class="mm-row-label">Frete';e.shippingName&&(i+=' <span class="mm-row-sub">· '+O(e.shippingName)+"</span>"),e.shippingDeadline&&(i+=' <span class="mm-row-sub">· '+O(e.shippingDeadline)+"</span>"),i+="</span>",t+='<div class="mm-row">'+i+a+"</div>"}e.discount>0&&(t+='<div class="mm-row"><span class="mm-row-label">Desconto</span><span class="mm-row-value is-discount">− '+R(e.discount)+"</span></div>");var l="";if(e.shipping!==null){var g=Math.max(0,n+e.shipping-e.discount),y=Math.max(0,e.subtotalPix+e.shipping-e.discount),S=g-y,B=g/12;l='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value">'+R(g)+'</div><div class="mm-total-pix"><span>'+R(y)+" à vista no PIX</span>"+(S>0?'<span class="mm-total-pix-save">economia de '+R(S)+"</span>":"")+'</div><div class="mm-total-parcela">ou 12x de '+R(B)+" sem juros no cartão</div></div>"}else l='<div class="mm-total"><div class="mm-total-label">Subtotal</div><div class="mm-total-value">'+R(e.subtotalPix)+'</div><div class="mm-total-pix"><span>à vista no PIX</span></div><div class="mm-total-pending">Informe seu CEP para ver o frete e o total final.</div></div>';var D;return e.couponCode?D='<div class="mm-coupon-applied"><span class="mm-coupon-applied-left">'+L.tag+"<span>"+O(e.couponCode)+'</span></span><button type="button" data-mm-act="coupon-remove" aria-label="Remover cupom">'+L.close+"</button></div>":D='<div class="mm-coupon"><button type="button" class="mm-coupon-toggle" data-mm-act="coupon-toggle">'+L.tag+'<span>Tenho um cupom</span></button><form class="mm-coupon-form" data-mm-act="coupon-submit"><input type="text" class="mm-input" name="mm-coupon-code" placeholder="CUPOM" autocomplete="off" autocapitalize="characters" spellcheck="false" /><button type="submit" class="mm-btn-secondary">Aplicar</button></form></div>','<div class="mm-sum-stack"><div class="mm-rows">'+t+"</div>"+D+l+"</div>"}function An(){var e=document.getElementById("mm-layout");if(e)return e.parentElement!==d&&d.insertBefore(e,d.firstChild),e;var n=document.createElement("div");return n.id="mm-layout",n.innerHTML=sn("cart")+'<div class="mm-grid"><section class="mm-items"><h2 class="mm-h">Carrinho</h2><div class="mm-items-card"><div id="mm-item-list">'+qn(2)+'</div></div></section><aside class="mm-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><div class="mm-cep"><div class="mm-cep-label"><span class="mm-cep-label-text">Calcular frete</span><a class="mm-cep-label-link" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a></div><div class="mm-cep-row"><input type="text" class="mm-input" id="mm-cep-input" name="mm_cep_calc" inputmode="numeric" maxlength="9" placeholder="00000-000" autocomplete="off" data-lpignore="true" data-1p-ignore="true" data-bwignore="true" data-form-type="other" aria-label="CEP" /><button type="button" class="mm-btn-secondary" data-mm-act="calc-cep">Calcular</button></div></div><div id="mm-sum-dynamic"></div><button type="button" class="mm-cta" data-mm-act="finalizar">Finalizar compra'+L.arrow+'</button><div class="mm-trust"><span class="mm-trust-item">'+L.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+L.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+L.card+'<span>12x sem juros</span></span></div><a class="mm-help" href="'+f+'" target="_blank" rel="noopener" data-mm-track="help-whats">'+L.whats+"<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span></a></div></aside></div>",d.insertBefore(n,d.firstChild),d.classList.add("mm-shadow-mode"),document.body.classList.add("mm-checkout-rebuild"),document.documentElement.classList.remove("mm-cart-loading"),n}function $n(){var e=Tn(),n=document.getElementById("mm-item-list");n&&(n.innerHTML=zn(e));var t=document.getElementById("mm-sum-dynamic");t&&(t.innerHTML=bn(e));var a=document.querySelector(".mm-cta");a&&(a.disabled=!e.canFinalize,a.style.opacity=e.canFinalize?"1":"0.5",a.style.pointerEvents=e.canFinalize?"auto":"none");var i=document.getElementById("mm-cep-input");if(i&&!i.matches(":focus")){var l=tn.get(P),g=e.cepValue||l||"";g&&(i.value=kn(g))}return e.items&&e.items.length>0&&on(e),e}function kn(e){var n=String(e||"").replace(/\D/g,"").slice(0,8);return n.length<=5?n:n.slice(0,5)+"-"+n.slice(5)}function Wn(e){var n=String(e||"").replace(/\D/g,"");n.length===8&&tn.set(P,n)}function pn(e){e=e||0;var n=tn.get(P);if(!(!n||n.length!==8)){var t=d.querySelector("#cep, .input-cep");if(!t){e<12&&setTimeout(function(){pn(e+1)},350);return}var a=d.querySelector("#resumo-compra .frete-calculado");if(a&&a.textContent.trim()){var i=document.getElementById("mm-cep-input");i&&!i.value&&(i.value=kn(n));return}var l=document.getElementById("mm-cep-input");l&&!l.value&&(l.value=kn(n)),t.value=kn(n),yn(t),setTimeout(function(){On()},200)}}function yn(e){try{var n=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;n.call(e,e.value)}catch{}e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0}))}function On(){try{if(window.Zord&&window.Zord.Cart&&typeof window.Zord.Cart.calculaFreteCarrinho=="function"){window.Zord.Cart.calculaFreteCarrinho();return}}catch{}var e=d.querySelector("#resumo-compra .calcula-frete > button, .area-frete button");e&&e.click()}function Bn(){var e=document.getElementById("mm-layout");!e||e._mmBound||(e._mmBound=!0,e.addEventListener("click",function(n){var t=n.target.closest("[data-mm-act]");if(t){var a=t.getAttribute("data-mm-act"),i=t.closest(".mm-item"),l=i?parseInt(i.getAttribute("data-mm-id"),10):null;switch(a){case"inc":Qn(l,i,"inc");break;case"dec":Qn(l,i,"dec");break;case"remove":pt(l,i);break;case"calc-cep":En();break;case"coupon-toggle":var g=t.closest(".mm-coupon");if(g){g.classList.add("is-open");var y=g.querySelector("input");y&&setTimeout(function(){y.focus()},100)}break;case"coupon-remove":cn();break;case"finalizar":Jn();break}}}),e.addEventListener("submit",function(n){var t=n.target.closest('[data-mm-act="coupon-submit"]');if(t){n.preventDefault();var a=t.querySelector("input");a&&xn(a.value.trim())}}),e.addEventListener("input",function(n){n.target&&n.target.id==="mm-cep-input"&&(n.target.value=kn(n.target.value))}),e.addEventListener("keydown",function(n){n.key==="Enter"&&n.target&&n.target.id==="mm-cep-input"&&(n.preventDefault(),En())}))}function Qn(e,n,t){if(!(!e||!n)&&!(!window.Zord||!window.Zord.checkout)){n.classList.add("is-updating");try{t==="inc"?window.Zord.checkout.adicionaQuantidade(e):window.Zord.checkout.removeQuantidade(e)}catch(a){console.warn("[mm-cart] qty change failed",a),n.classList.remove("is-updating")}}}function pt(e,n){if(!(!e||!n)&&!(!window.Zord||!window.Zord.checkout)){n.classList.add("is-updating"),n.style.transition="opacity 200ms, transform 200ms",n.style.opacity="0",n.style.transform="translateX(-12px)";try{typeof window.Zord.checkout.deleteItem=="function"?window.Zord.checkout.deleteItem(e):window.Zord.checkout.removeQuantidade(e)}catch(t){console.warn("[mm-cart] remove failed",t),n.classList.remove("is-updating"),n.style.opacity="1",n.style.transform=""}}}function En(){var e=document.getElementById("mm-cep-input");if(e){var n=(e.value||"").replace(/\D/g,"");if(n.length!==8){e.focus(),e.classList.add("mm-input-error"),setTimeout(function(){e.classList.remove("mm-input-error")},1200);return}Wn(n);var t=d.querySelector("#cep, .input-cep");t&&(t.value=kn(n),yn(t)),On()}}function xn(e){if(e&&!(!window.Zord||!window.Zord.checkout)){var n=d.querySelector("#cupom-desconto");n&&(n.value=e.toUpperCase(),yn(n));try{window.Zord.checkout.addCupomDesconto()}catch(t){console.warn("[mm-cart] coupon apply failed",t)}}}function cn(){if(!(!window.Zord||!window.Zord.checkout))try{window.Zord.checkout.removeCupomDesconto()}catch(e){console.warn("[mm-cart] coupon remove failed",e)}}function Jn(){try{var e=Tn();e.items&&e.items.length>0&&on(e)}catch{}var n=document.getElementById("finalizar-compra");if(n){n.click();return}location.href="/checkout/identify"}if(C){let e=function(t){if(t=t||0,t>30){n();return}var a=d.querySelectorAll(".cart-item").length>0,i=d.querySelector("#resumo-compra");a||i||t>8?n():setTimeout(function(){e(t+1)},250)},n=function(){An(),Bn(),$n(),pn(),typeof jQuery<"u"&&jQuery(document).ajaxComplete(function(i,l,g){if(!(!g||!g.url)){var y=g.url;(y.indexOf("checkout/cart")!==-1||y.indexOf("atualiza")!==-1||y.indexOf("cupom")!==-1||y.indexOf("frete")!==-1||y.indexOf("removeItem")!==-1||y.indexOf("adicionaItem")!==-1)&&(setTimeout($n,120),setTimeout(function(){var S=Tn();S.shipping!==null&&S.cepValue&&Wn(S.cepValue)},200))}});try{var t=new MutationObserver(function(i){n._mutTimer&&clearTimeout(n._mutTimer),n._mutTimer=setTimeout($n,200)}),a=[d.querySelector("#cart-area"),d.querySelector(".cart-area"),d.querySelector("#resumo-compra")].filter(Boolean);a.forEach(function(i){t.observe(i,{childList:!0,subtree:!0,characterData:!0})})}catch{}};if(!document.getElementById("mm-checkout-cro-done")){var ot=document.createElement("div");ot.id="mm-checkout-cro-done",ot.style.display="none",document.body.appendChild(ot)}e()}function Dn(e){if(!e||!e.items||!e.items.length)return'<aside class="mm-id-sum mm-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><div class="mm-sum-empty"><p>Não conseguimos carregar o resumo do seu pedido.</p><a class="mm-btn-secondary" href="/checkout/cart">Voltar ao carrinho</a></div></div></aside>';var n=3,t=e.items.slice(0,n),a=e.items.length-n,i=t.map(function(_){var rn=_.quantity>1?'<strong class="mm-id-thumb-qty">'+_.quantity+"×</strong> ":"",an=!_.imgSrc&&!(_.lineTotalPix>0)&&!(_.lineTotal>0);if(an)return'<div class="mm-id-thumb"><div class="mm-id-thumb-img"><span class="mm-skel" style="display:block;width:100%;height:100%"></span></div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+rn+O(_.name)+"</p>"+(_.variant?'<p class="mm-id-thumb-variant">'+O(_.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price"><span class="mm-skel" style="display:inline-block;width:56px;height:15px"></span></div></div>';var ln=_.imgSrc?'<img src="'+O(_.imgSrc)+'" alt="'+O(_.name)+'" loading="lazy">':'<div class="mm-id-thumb-placeholder">'+L.box+"</div>",un=_.lineTotalPix>0?_.lineTotalPix:_.lineTotal;return'<div class="mm-id-thumb"><div class="mm-id-thumb-img">'+ln+'</div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+rn+O(_.name)+"</p>"+(_.variant?'<p class="mm-id-thumb-variant">'+O(_.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price">'+R(un)+"</div></div>"}).join("");a>0&&(i+='<div class="mm-id-thumb-more">+ '+a+" "+(a===1?"item":"itens")+" a mais</div>");var l=e.subtotalFull>0?e.subtotalFull:e.subtotalPix,g='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+R(l)+"</span></div>";if(e.shipping!==null&&e.shipping!==void 0){var y;e.shipping===0?y='<span class="mm-row-value is-free">'+L.check+" Grátis</span>":y='<span class="mm-row-value">'+R(e.shipping)+"</span>",g+='<div class="mm-row"><span class="mm-row-label">Frete'+(e.shippingDeadline?' <span class="mm-row-sub">· '+O(e.shippingDeadline)+"</span>":"")+"</span>"+y+"</div>"}e.discount>0&&(g+='<div class="mm-row"><span class="mm-row-label">Desconto'+(e.couponCode?' <span class="mm-row-sub">· '+O(e.couponCode)+"</span>":"")+'</span><span class="mm-row-value is-discount">− '+R(e.discount)+"</span></div>");var S,B=e.shipping!==null&&e.shipping!==void 0?e.shipping:0;if(e.shipping!==null&&e.shipping!==void 0){var D=Math.max(0,l+B-(e.discount||0)),M=Math.max(0,e.subtotalPix+B-(e.discount||0)),G=D-M,Q=D/12;S='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value">'+R(D)+'</div><div class="mm-total-pix"><span>'+R(M)+" à vista no PIX</span>"+(G>0?'<span class="mm-total-pix-save">economia de '+R(G)+"</span>":"")+'</div><div class="mm-total-parcela">ou 12x de '+R(Q)+" sem juros</div></div>"}else{var j=l/12;S='<div class="mm-total"><div class="mm-total-label">Subtotal</div><div class="mm-total-value">'+R(e.subtotalPix)+'</div><div class="mm-total-pix"><span>à vista no PIX</span></div><div class="mm-total-parcela">ou 12x de '+R(j)+" sem juros</div></div>"}return'<aside class="mm-id-sum mm-sum"><h2 class="mm-h">Resumo do pedido</h2><div class="mm-sum-card"><div class="mm-id-thumbs">'+i+'</div><div class="mm-rows">'+g+"</div>"+S+'<a class="mm-id-edit-cart" href="/checkout/cart"><span>Editar carrinho</span></a></div><a class="mm-help mm-sum-help" href="'+f+'" target="_blank" rel="noopener" data-mm-track="help-whats-sum">'+L.whats+"<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span></a></aside>"}function Kn(){var e='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',n='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',t='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="9" x2="17" y2="9"/><line x1="7" y1="13" x2="17" y2="13"/><line x1="7" y1="17" x2="13" y2="17"/></svg>',a='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';return'<section class="mm-id-form-col"><h2 class="mm-id-h2">Quase lá! Identifique-se</h2><p class="mm-id-sub">Informe seu e-mail para finalizar a compra de forma rápida e segura.</p><form class="mm-id-form" data-mm-act="identify-submit" novalidate><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+e+'</span><input type="email" id="mm-id-email" name="mm-email" class="mm-input" placeholder="seu@email.com" autocomplete="email" inputmode="email" required></div><p class="mm-id-microcopy">'+L.lock+'<span>Seu e-mail é seguro · Não compartilhamos com terceiros</span></p><button type="submit" class="mm-cta">Continuar'+L.arrow+'</button></form><div class="mm-id-divider"><span>ou</span></div><div class="mm-id-google-slot"></div><button type="button" class="mm-id-guest-toggle" data-mm-act="guest-go" aria-label="Continuar como visitante"><span class="mm-id-guest-icon" aria-hidden="true">'+n+'</span><span class="mm-id-guest-label">Continuar como visitante (sem criar conta)</span><span class="mm-id-guest-arrow" aria-hidden="true">'+L.arrow+'</span></button><div class="mm-trust mm-id-trust"><span class="mm-trust-item">'+L.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+L.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+L.shield+'<span>Garantia 12 meses</span></span></div><p class="mm-id-lgpd">Ao continuar, você concorda com nossa <a href="/politica-de-privacidade" target="_blank" rel="noopener">Política de Privacidade</a></p></section>'}function Rn(e){var n=document.getElementById("mm-layout");if(n)return n.parentElement!==d&&d.insertBefore(n,d.firstChild),n;var t=document.createElement("div");return t.id="mm-layout",t.classList.add("mm-id-layout"),t.innerHTML=sn("delivery")+'<div class="mm-grid mm-id-grid">'+Kn()+Dn(e)+"</div>",d.insertBefore(t,d.firstChild),document.body.classList.add("mm-checkout-rebuild"),nt(),d.classList.add("mm-shadow-mode"),document.documentElement.classList.remove("mm-cart-loading"),t}function nt(){var e=document.querySelector(".mm-id-google-slot"),n=d.querySelector(".social-login-area");if(!(!e||!n)&&!e.contains(n))try{e.appendChild(n),e.classList.add("is-loaded")}catch{}}function gt(e){tn.set("mm_user_email",e);var n=d.querySelector("#login");if(!n)return!1;n.value=e,yn(n);var t=n.closest("form"),a=t?t.querySelector('button.button-send, button[type="submit"]'):null;return a?(a.click(),!0):t?(t.submit(),!0):!1}function qt(){var e=document.getElementById("mm-layout");!e||e._mmBound||(e._mmBound=!0,e.addEventListener("submit",function(n){var t=n.target.closest('[data-mm-act="identify-submit"]');if(t){n.preventDefault();var a=t.querySelector("#mm-id-email"),i=a?a.value.trim():"";if(!i||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)){a&&(a.classList.add("mm-input-error"),a.focus(),setTimeout(function(){a.classList.remove("mm-input-error")},1500));return}var l=gt(i);if(l){var g=t.querySelector(".mm-cta");g&&g.classList.add("is-loading")}return}}),e.addEventListener("click",function(n){var t=n.target.closest("[data-mm-act]");if(t){var a=t.getAttribute("data-mm-act");a==="guest-go"&&(tn.set("mm_checkout_mode","guest"),t.classList.add("is-loading"),location.href="/checkout/onepage")}}))}function Nn(e){try{var n=new DOMParser().parseFromString(e,"text/html"),t=n.querySelector("#checkout-main-area");if(!t)return null;for(var a=[],i=t.querySelectorAll(".cart-item"),l=0,g=0;g<i.length;g++){var y=i[g],S=y.querySelector("figure img")||y.querySelector("#product-img")||y.querySelector("img"),B=y.querySelector(".column-valor-produto .valor"),D=parseFloat(y.getAttribute("data-valor")||"0"),M=B?H(B.textContent):0;a.push({name:y.getAttribute("data-item-name")||y.getAttribute("data-name")||"",variant:y.getAttribute("data-item-variant")||"",imgSrc:S&&S.getAttribute("src")||"",quantity:parseInt(y.getAttribute("data-item-quantity")||"1",10),lineTotal:D,lineTotalPix:M,isPix:!!y.querySelector(".column-valor-produto .sub"),deposito:y.getAttribute("data-item-deposito")==="1"}),l+=D}if(a.length===0)return null;var G=t.querySelector("#resumo-compra .resumo-valores .value"),Q=G?H(G.textContent):0;Q<=0&&(Q=a.reduce(function(hn,Sn){return hn+(Sn.lineTotalPix||0)},0));var j=t.querySelector("#resumo-compra .discount-value"),_=j?H(j.textContent):0,rn=t.querySelector("#resumo-compra .txt-cupom, #resumo-compra .alert.alert-type-1"),an="";if(rn){var ln=rn.textContent.match(/([A-Z0-9]{3,})/);ln&&(an=ln[1])}var un=t.querySelector("#resumo-compra .frete-calculado"),wn=null,In="";if(un){var k=un.querySelector(".servico-frete[data-valor-frete]");if(k){var E=k.getAttribute("data-valor-frete");if(E!==null&&E!==""){var U=parseFloat(E);isNaN(U)||(wn=U)}}var nn=un.textContent.trim();if(wn===null&&nn){var Z=H(nn);Z>0&&(wn=Z)}var fn=nn.match(/(\d+)\s*dias?/i);fn&&(In=fn[1]+" dias úteis")}return{ts:Date.now(),items:a,subtotalPix:Q,subtotalFull:l,discount:_,couponCode:an,shipping:wn,shippingDeadline:In,cepValue:""}}catch{return null}}function Gn(e){try{fetch("/checkout/cart",{credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(n){return n.text()}).then(function(n){var t=Nn(n);t&&tn.set(N,JSON.stringify(t)),e(t)}).catch(function(){e(null)})}catch{e(null)}}function ft(e){var n=document.querySelector("#mm-layout .mm-id-sum");if(n){var t=n.parentNode;if(t){var a=document.createElement("div");a.innerHTML=Dn(e);var i=a.firstChild;i&&t.replaceChild(i,n)}}}function vt(){Gn(function(e){e&&e.items&&e.items.length>0&&ft(e)})}if(v){let e=function(t){if(t=t||0,t>30){n();return}var a=d.querySelector("#login, #login-form-etapa-01");a||t>8?n():setTimeout(function(){e(t+1)},250)},n=function(){var t=mn();Rn(t),qt(),nt(),setTimeout(nt,600),setTimeout(nt,1500),vt(),setTimeout(function(){var a=document.getElementById("mm-id-email");a&&!("ontouchstart"in window)&&a.focus()},250)};e()}function xt(e){var n=String(e||"").replace(/\D/g,"").slice(0,11);return n.length<=3?n:n.length<=6?n.slice(0,3)+"."+n.slice(3):n.length<=9?n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6):n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6,9)+"-"+n.slice(9)}function At(e){var n=String(e||"").replace(/\D/g,"").slice(0,11);return n.length<=2?n.length?"("+n:"":n.length<=6?"("+n.slice(0,2)+") "+n.slice(2):n.length<=10?"("+n.slice(0,2)+") "+n.slice(2,6)+"-"+n.slice(6):"("+n.slice(0,2)+") "+n.slice(2,7)+"-"+n.slice(7)}function bt(e){var n=String(e||"").replace(/\D/g,"").slice(0,8);return n.length<=5?n:n.slice(0,5)+"-"+n.slice(5)}function mt(e,n){var t=String(e||"").replace(/\D/g,"");if(t.length!==8){n(null);return}try{fetch("https://viacep.com.br/ws/"+t+"/json/",{headers:{Accept:"application/json"}}).then(function(a){return a.json()}).then(function(a){if(!a||a.erro){n(null);return}n({logradouro:a.logradouro||"",bairro:a.bairro||"",cidade:a.localidade||"",estado:a.uf||""})}).catch(function(){n(null)})}catch{n(null)}}var jn={mail:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',doc:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 12h8v2H8zm0 4h5v2H8z"/></svg>',phone:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>',pin:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',pix:'<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M11.917 11.71a2.046 2.046 0 0 1-1.454-.602l-2.1-2.1a.4.4 0 0 0-.551 0l-2.108 2.108a2.044 2.044 0 0 1-1.454.602h-.414l2.66 2.66c.83.83 2.177.83 3.007 0l2.667-2.668h-.253zM4.25 4.282c.55 0 1.066.214 1.454.602l2.108 2.108a.39.39 0 0 0 .552 0l2.1-2.1a2.044 2.044 0 0 1 1.453-.602h.253L9.503 1.623a2.127 2.127 0 0 0-3.007 0l-2.66 2.66h.414z"/><path d="m14.377 6.496-1.612-1.612a.307.307 0 0 1-.114.023h-.733c-.379 0-.75.154-1.017.422l-2.1 2.1a1.005 1.005 0 0 1-1.425 0L5.268 5.32a1.448 1.448 0 0 0-1.018-.422h-.9a.306.306 0 0 1-.109-.021L1.623 6.496c-.83.83-.83 2.177 0 3.008l1.618 1.618a.305.305 0 0 1 .108-.022h.901c.38 0 .75-.153 1.018-.421L7.375 8.57a1.034 1.034 0 0 1 1.426 0l2.1 2.1c.267.268.638.421 1.017.421h.733c.04 0 .079.01.114.024l1.612-1.612c.83-.83.83-2.178 0-3.008z"/></svg>',cardBig:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>',barcode:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 6h2v12H2zm3 0h1v12H5zm2 0h3v12H7zm4 0h1v12h-1zm3 0h2v12h-2zm3 0h1v12h-1zm2 0h3v12h-3z"/></svg>',editPencil:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>'};function it(e){var n=e?' value="'+O(e)+'"':"";return'<section class="mm-op-form-col"><h2 class="mm-id-h2">Falta pouco. Onde entregar?</h2><p class="mm-id-sub">Preencha seus dados e o endereço de entrega — o frete é calculado automaticamente.</p><form class="mm-op-form" data-mm-act="onepage-submit" novalidate><div class="mm-op-card"><h3 class="mm-op-card-title">'+jn.user+'<span>Quem vai receber</span></h3><div class="mm-op-grid-2"><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+jn.mail+'</span><input type="email" id="mm-op-email" class="mm-input" placeholder="seu@email.com" autocomplete="email" inputmode="email" required'+n+'></div><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+jn.user+'</span><input type="text" id="mm-op-nome" class="mm-input" placeholder="Nome completo" autocomplete="name" required></div><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+jn.doc+'</span><input type="tel" id="mm-op-cpf" class="mm-input" placeholder="CPF" inputmode="numeric" autocomplete="off" maxlength="14" required></div><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+jn.phone+'</span><input type="tel" id="mm-op-tel" class="mm-input" placeholder="(11) 91234-5678" inputmode="tel" autocomplete="tel" maxlength="15" required></div></div><p class="mm-op-microcopy-soft">Usamos seus dados só pra emitir nota fiscal e te avisar da entrega.</p></div><div class="mm-op-card"><h3 class="mm-op-card-title">'+jn.pin+'<span>Endereço de entrega</span></h3><div class="mm-op-grid-2"><div class="mm-input-wrap"><span class="mm-input-icon" aria-hidden="true">'+jn.pin+'</span><input type="tel" id="mm-op-cep" class="mm-input" placeholder="CEP — 00000-000" inputmode="numeric" autocomplete="postal-code" maxlength="9" required><span class="mm-input-status" id="mm-op-cep-status" aria-live="polite"></span></div><a class="mm-op-cep-help" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a><div class="mm-input-wrap mm-op-col-2"><span class="mm-input-icon" aria-hidden="true">'+jn.home+'</span><input type="text" id="mm-op-rua" class="mm-input" placeholder="Rua, Av, Travessa..." autocomplete="address-line1" required></div><div class="mm-input-wrap"><input type="tel" id="mm-op-num" class="mm-input mm-input-noicon" placeholder="Número" inputmode="numeric" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-comp" class="mm-input mm-input-noicon" placeholder="Complemento (opcional)" autocomplete="address-line2"></div><div class="mm-input-wrap mm-op-col-2"><input type="text" id="mm-op-bairro" class="mm-input mm-input-noicon" placeholder="Bairro" autocomplete="address-level3" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-cidade" class="mm-input mm-input-noicon" placeholder="Cidade" autocomplete="address-level2" required></div><div class="mm-input-wrap"><input type="text" id="mm-op-uf" class="mm-input mm-input-noicon" placeholder="UF" maxlength="2" autocomplete="address-level1" required></div></div><div class="mm-op-frete" id="mm-op-frete-slot"></div></div><button type="submit" class="mm-cta mm-op-cta">Última etapa: pagamento'+L.arrow+'</button><p class="mm-id-microcopy mm-op-cta-sub">'+L.lock+'<span>Você revisa tudo antes de finalizar</span></p></form><div class="mm-trust mm-id-trust"><span class="mm-trust-item">'+L.lock+'<span>Pagamento seguro</span></span><span class="mm-trust-item">'+L.rotate+'<span>7 dias para troca</span></span><span class="mm-trust-item">'+L.shield+"<span>Garantia 12 meses</span></span></div></section>"}function Ft(e,n){var t=document.getElementById("mm-layout");if(t)return t.parentElement!==d&&d.insertBefore(t,d.firstChild),t;var a=document.createElement("div");return a.id="mm-layout",a.classList.add("mm-id-layout"),a.classList.add("mm-op-layout"),a.innerHTML=sn("delivery")+'<div class="mm-grid mm-id-grid mm-op-grid">'+it(n)+Dn(e)+"</div>",d.insertBefore(a,d.firstChild),document.body.classList.add("mm-checkout-rebuild"),d.classList.add("mm-shadow-mode"),document.documentElement.classList.remove("mm-cart-loading"),a}function ct(e){var n=document.getElementById("mm-op-frete-slot");if(n){if(e==="loading"){n.innerHTML='<div class="mm-op-frete-loading"><div class="mm-op-frete-spinner"></div><span>Calculando frete...</span></div>';return}if(e==="error"){n.innerHTML='<div class="mm-op-frete-error"><span>Não conseguimos calcular o frete. Confira o CEP e tente novamente.</span></div>';return}var t=e.value===0,a=t?'<strong class="mm-op-frete-value is-free">Grátis</strong>':'<strong class="mm-op-frete-value">'+R(e.value)+"</strong>",i=e.name?'<span class="mm-op-frete-name">'+O(e.name)+"</span>":"",l=e.deadline?'<span class="mm-op-frete-deadline">Entrega em '+O(e.deadline)+"</span>":"",g=e.city?'<span class="mm-op-frete-city">para '+O(e.city)+"</span>":"",y="";if(e.options&&e.options.length>1){y='<div class="mm-op-frete-options"><button type="button" class="mm-op-frete-toggle" data-mm-act="toggle-frete-opts" aria-expanded="false">Ver outras opções ('+e.options.length+')</button><div class="mm-op-frete-options-list" hidden>';for(var S=0;S<e.options.length;S++){var B=e.options[S],D=B.isSelected?" is-selected":"",M=B.isFree?'<span class="mm-op-frete-opt-value is-free">Grátis</span>':'<span class="mm-op-frete-opt-value">'+R(B.value)+"</span>";y+='<button type="button" class="mm-op-frete-opt'+D+'" data-mm-act="op-ship-select" data-ship-id="'+O(B.id)+'" aria-pressed="'+(B.isSelected?"true":"false")+'"><span class="mm-op-frete-opt-radio" aria-hidden="true"><span></span></span><span class="mm-op-frete-opt-body"><span class="mm-op-frete-opt-name">'+O(B.name||"Padrão")+"</span>"+(B.deadline?'<span class="mm-op-frete-opt-deadline">'+O(B.deadline)+"</span>":"")+"</span>"+M+"</button>"}y+="</div></div>"}n.innerHTML='<div class="mm-op-frete-card'+(t?" is-free":"")+'"><div class="mm-op-frete-icon">'+L.truck+'</div><div class="mm-op-frete-body"><div class="mm-op-frete-row">'+i+a+"</div>"+l+g+"</div></div>"+y}}function kt(e,n){var t=kn(e),a="";try{var i=mn();a=i&&i.couponCode||""}catch{}var l="cep="+encodeURIComponent(t)+"&cupom-desconto="+encodeURIComponent(a);fetch("/checkout/cart?operation=atualizaValoresCarrinho",{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest"},body:l}).then(function(g){return g.text()}).then(function(g){var y;try{y=new DOMParser().parseFromString(g,"text/html")}catch{n(null);return}for(var S=y.querySelectorAll(".servico-frete"),B=[],D=0;D<S.length;D++){var M=S[D],G=M.getAttribute("data-valor-frete");if(!(G===null||G==="")){var Q=parseFloat(G);if(!isNaN(Q)){var j=M.querySelector('input[type="radio"]'),_=M.querySelector(".dias-entrega"),rn=_?_.textContent.trim():"",an=rn.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i);B.push({id:j?j.value:"",name:M.getAttribute("data-servico-frete")||"",deadline:an?an[1].replace(/\s+/g," "):"",value:Q,isFree:Q===0,isSelected:j?j.checked:!1})}}}if(!B.length){n(null);return}var ln=B.filter(function(wn){return wn.isSelected})[0];ln||(ln=B.reduce(function(wn,In){return In.value<wn.value?In:wn},B[0]),ln.isSelected=!0);var un=y.querySelector(".frete-location .city, .frete-calculado .city");n({value:ln.value,name:ln.name,deadline:ln.deadline,city:un?un.textContent.trim():"",options:B})}).catch(function(){n(null)})}function yt(){function e(nn){if(!nn)return"";var Z=nn.match(/(\d+(?:\s*[aà]\s*\d+)?)\s*dias?(?:\s*\([^)]+\))?\s*([úu]teis)?/i);return Z?Z[1].replace(/\s+/g," ")+" dias úteis":""}function n(nn){for(var Z=[],fn=nn.querySelectorAll(".servico-frete"),hn=0;hn<fn.length;hn++){var Sn=fn[hn],Fn=Sn.querySelector('input[type="radio"]'),Mn=Sn.querySelector(".dias-entrega"),Yn=parseFloat(Sn.getAttribute("data-valor-frete")||"0"),Vn=Sn.getAttribute("data-servico-frete")||"",tt=Mn?Mn.textContent.trim():"",et=tt.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i);Z.push({id:Fn?Fn.value:"",name:Vn,deadline:et?et[1].replace(/\s+/g," "):tt,value:Yn,isFree:Yn===0,isSelected:Fn?Fn.checked:!1})}return Z}var t=d.querySelector(".frete-calculado");if(t&&t.textContent.trim()){var a=n(t),i=t.querySelector(".frete-location .city"),l=i?i.textContent.trim():"",g=a.filter(function(nn){return nn.isSelected})[0]||a[0];if(g)return{value:g.value,name:g.name,deadline:g.deadline,city:l,options:a};var y=t.querySelector(".info-frete-selec .info-title span, .info-title span"),S=t.querySelector(".info-frete-selec .dias-entrega, .dias-entrega"),B=t.querySelector(".value.valor-frete, .valor-frete .value"),D=t.textContent,M=null;if(B&&(/gr[aá]tis/i.test(B.textContent)?M=0:M=H(B.textContent)),M===null&&(/gr[aá]tis/i.test(D)?M=0:M=H(D)||null),M!==null)return{value:M,name:y?y.textContent.trim():"",deadline:e(S?S.textContent:D),city:l,options:[]}}var G=d.querySelector(".line-entrega"),Q=d.querySelector(".value.valor-frete, .valor-frete .value");if(G||Q){var j=((G||Q).textContent||"").trim(),_=mn(),rn=_&&_.shippingName||"",an=_&&_.shippingDeadline||"",ln=_&&_.shippingCity||"",un=_?_.shippingOptions||[]:[];if(j){var wn=(d.querySelector(".nome-servico-frete, .info-frete-selec .info-title span")||{}).textContent||"",In=(d.querySelector(".info-entrega, .prazo-entrega, .line-entrega .sub, .info-frete-selec .dias-entrega")||{}).textContent||"",k=e(In)||e(j)||an,E=wn.trim()||rn;if(/gr[aá]tis/i.test(j))return{value:0,deadline:k,name:E,city:ln,options:un};var U=H(j);if(U>0)return{value:U,deadline:k,name:E,city:ln,options:un}}if(_&&_.shipping!==null&&_.shipping!==void 0)return{value:_.shipping,deadline:an,name:rn,city:ln,options:un}}return null}function Zn(){var e=document.getElementById("mm-op-cep");if(e){var n=(e.value||"").replace(/\D/g,"");if(n.length===8){if(Zn._lastCep===n){var t=document.getElementById("mm-op-frete-slot");if(t&&t.querySelector(".mm-op-frete-card"))return}Zn._lastCep=n;var a=(Zn._token||0)+1;Zn._token=a,Wn(n);var i=d.querySelector("#cep, .input-cep");i&&(i.value=kn(n),yn(i)),ct("loading"),kt(n,function(l){if(Zn._token===a){if(!l){ct("error");return}ct(l);var g=mn();g&&(g.shipping=l.value,g.shippingDeadline=l.deadline,g.shippingName=l.name||"",g.shippingCity=l.city||"",g.shippingOptions=l.options||[],tn.set(N,JSON.stringify(g)),ft(g))}})}}}function _n(){var e=document.getElementById("mm-layout");if(!e||e._mmOpBound)return;e._mmOpBound=!0,e.addEventListener("click",function(t){var a=t.target.closest('[data-mm-act="toggle-frete-opts"]');if(a){t.preventDefault();var i=a.parentElement.querySelector(".mm-op-frete-options-list");if(i){var l=i.hasAttribute("hidden");l?i.removeAttribute("hidden"):i.setAttribute("hidden",""),a.setAttribute("aria-expanded",l?"true":"false"),a.textContent=l?"Ocultar opções":"Ver outras opções"}return}var g=t.target.closest('[data-mm-act="op-ship-select"]');if(g){t.preventDefault();var y=g.getAttribute("data-ship-id");if(!y)return;var S=d.querySelector('.servico-frete input[type="radio"][value="'+y+'"]');if(!S){console.warn("[mm-op] modalidade não encontrada no DOM:",y);return}for(var B=e.querySelectorAll(".mm-op-frete-opt"),D=0;D<B.length;D++){var M=B[D],G=M.getAttribute("data-ship-id")===y;M.classList.toggle("is-selected",G),M.setAttribute("aria-pressed",G?"true":"false")}S.checked=!0,S.click();var Q=mn();if(Q&&Q.shippingOptions&&Q.shippingOptions.length){var j=Q.shippingOptions.filter(function(_){return String(_.id)===String(y)})[0];j&&(Q.shipping=j.value,Q.shippingDeadline=j.deadline||"",Q.shippingName=j.name||"",Q.shippingOptions=Q.shippingOptions.map(function(_){return _.isSelected=String(_.id)===String(y),_}),tn.set(N,JSON.stringify(Q)),ct({value:j.value,deadline:j.deadline||"",name:j.name||"",city:Q.shippingCity||"",options:Q.shippingOptions}),ft(Q))}return}}),e.addEventListener("submit",function(t){var a=t.target.closest('[data-mm-act="onepage-submit"]');if(a){t.preventDefault();var i={email:(document.getElementById("mm-op-email")||{}).value||"",nome:(document.getElementById("mm-op-nome")||{}).value||"",cpf:(document.getElementById("mm-op-cpf")||{}).value||"",tel:(document.getElementById("mm-op-tel")||{}).value||"",cep:(document.getElementById("mm-op-cep")||{}).value||"",rua:(document.getElementById("mm-op-rua")||{}).value||"",num:(document.getElementById("mm-op-num")||{}).value||"",comp:(document.getElementById("mm-op-comp")||{}).value||"",bairro:(document.getElementById("mm-op-bairro")||{}).value||"",cidade:(document.getElementById("mm-op-cidade")||{}).value||"",uf:(document.getElementById("mm-op-uf")||{}).value||""},l=[];if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.email.trim())||l.push("mm-op-email"),i.nome.trim().split(/\s+/).length<2&&l.push("mm-op-nome"),i.cpf.replace(/\D/g,"").length!==11&&l.push("mm-op-cpf"),i.tel.replace(/\D/g,"").length<10&&l.push("mm-op-tel"),i.cep.replace(/\D/g,"").length!==8&&l.push("mm-op-cep"),i.rua.trim()||l.push("mm-op-rua"),i.num.trim()||l.push("mm-op-num"),i.bairro.trim()||l.push("mm-op-bairro"),i.cidade.trim()||l.push("mm-op-cidade"),i.uf.trim()||l.push("mm-op-uf"),l.length){l.forEach(function(S){var B=document.getElementById(S);B&&(B.classList.add("mm-input-error"),setTimeout(function(){B.classList.remove("mm-input-error")},1800))});var g=document.getElementById(l[0]);g&&(g.focus(),g.scrollIntoView({block:"center",behavior:"smooth"}));return}var y=a.querySelector(".mm-cta");y&&y.classList.add("is-loading"),tn.set("mm_user_email",i.email.trim()),s(i)}}),e.addEventListener("input",function(t){var a=t.target;if(a){if(a.dataset&&a.dataset.mmCepFill==="1"&&delete a.dataset.mmCepFill,a.id==="mm-op-cpf")a.value=xt(a.value);else if(a.id==="mm-op-tel")a.value=At(a.value);else if(a.id==="mm-op-cep"){a.value=bt(a.value);var i=a.value.replace(/\D/g,"");i.length===8&&dt(i)}else a.id==="mm-op-uf"&&(a.value=(a.value||"").replace(/[^A-Za-z]/g,"").toUpperCase().slice(0,2));a.id&&a.id.indexOf("mm-op-")===0&&(_n._draftTimer&&clearTimeout(_n._draftTimer),_n._draftTimer=setTimeout(dn,400))}});function n(){_n._draftTimer&&(clearTimeout(_n._draftTimer),_n._draftTimer=null),dn()}e.addEventListener("blur",function(t){var a=t.target;a&&a.id&&a.id.indexOf("mm-op-")===0&&n()},!0),window.addEventListener("beforeunload",n)}function dt(e){var n=document.getElementById("mm-op-cep-status");n&&(n.className="mm-input-status is-loading",n.textContent="Buscando..."),mt(e,function(t){if(n&&(n.className="mm-input-status"),!t){n&&(n.className="mm-input-status is-error",n.textContent="CEP não encontrado",setTimeout(function(){n.className="mm-input-status",n.textContent=""},2500));return}n&&(n.className="mm-input-status is-ok",n.innerHTML=L.check,setTimeout(function(){n.className="mm-input-status",n.innerHTML=""},1800));var a=[["mm-op-rua",t.logradouro],["mm-op-bairro",t.bairro],["mm-op-cidade",t.cidade],["mm-op-uf",t.estado]];a.forEach(function(l){var g=document.getElementById(l[0]);!g||!l[1]||(!g.value||g.dataset.mmCepFill==="1")&&(g.value=l[1],g.dataset.mmCepFill="1")});var i=document.getElementById("mm-op-num");i&&setTimeout(function(){i.focus()},100),Zn._t&&clearTimeout(Zn._t),Zn._t=setTimeout(Zn,200)})}function r(e){if(!document.getElementById("mm-op-overlay")){var n=document.createElement("div");n.id="mm-op-overlay",n.innerHTML='<div class="mm-op-overlay-card"><div class="mm-op-overlay-spinner"></div><p class="mm-op-overlay-text">'+O(e||"Processando...")+"</p></div>",document.body.appendChild(n)}}function s(e){var n=e.nome.trim(),t=e.email.trim(),a=e.rua.trim(),i=e.bairro.trim(),l=e.cidade.trim(),g=e.uf.trim(),y=kn(e.cep.replace(/\D/g,""));tn.set("mm_user_email",t);var S=function(B,D){var M=d.querySelector(B);if(!M)return!1;try{var G=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;G.call(M,D)}catch{M.value=D}return M.dispatchEvent(new Event("input",{bubbles:!0})),M.dispatchEvent(new Event("change",{bubbles:!0})),M.dispatchEvent(new Event("blur",{bubbles:!0})),!0};S("#nome-completo_2",n),S("#cpf_2",e.cpf),S("#email_3",t),S("#telefone_2",e.tel),S("#cep",y),S("#destinatario",n),S("#logradouro",a),S("#numero",e.num),S("#complemento",e.comp),S("#bairro",i),S("#cidade",l),S("#estado",g),r("Indo para o pagamento..."),setTimeout(function(){var B=document.getElementById("mm-layout");B&&(B.style.display="none"),d.classList.remove("mm-shadow-mode");function D(j){var _=d.querySelector("#"+j);return _?_.closest("form"):null}function M(){var j=D("nome-completo_2");if(!j)return!1;var _=j.querySelector('button[type="submit"], input[type="submit"], button:not([type])');return _?(_.click(),!0):typeof j.requestSubmit=="function"?(j.requestSubmit(),!0):(j.submit(),!0)}function G(){var j=document.querySelector(".mz-toast-popup.error, .swal2-toast.swal2-icon-error");if(j&&/inativo|realize login/i.test(j.textContent||""))return"error";for(var _=document.querySelectorAll('button, [type="submit"]'),rn=0;rn<_.length;rn++){var an=(_[rn].textContent||"").toLowerCase();if(an.indexOf("cadastrar endere")!==-1&&_[rn].offsetParent!==null)return"ready"}return"wait"}function Q(){var j=D("cep");if(!j)return!1;var _=j.querySelector('button[type="submit"], input[type="submit"], button:not([type])');return _?(_.click(),!0):typeof j.requestSubmit=="function"?(j.requestSubmit(),!0):(j.submit(),!0)}setTimeout(function(){M();var j=0;(function _(){j++;var rn=G();if(rn==="error"){var an=document.getElementById("mm-op-overlay");an&&an.remove();return}if(rn!=="ready"&&j<20){setTimeout(_,400);return}Q();var ln=0;function un(){ln++;var wn=document.querySelector('input[name="forma-pagto"], #forma-pagto-pix, #forma-pagto-cartao, #forma-pagto-boleto');if(wn&&wn.offsetParent!==null){try{x(e)}catch{var In=document.getElementById("mm-op-overlay");In&&In.remove();var k=document.getElementById("mm-layout");k&&(k.style.display="none")}return}if(ln<30)setTimeout(un,250);else{var E=document.getElementById("mm-op-overlay");E&&E.remove()}}setTimeout(un,800)})()},150)},100)}function p(){var e={pix:null,cartao:null,boleto:null},n=[];try{n=window.Zord&&window.Zord.Calculo&&window.Zord.Calculo.FormasPagamentoPedido||[]}catch{}n.forEach(function(M){var G=M.formaPagamento&&M.formaPagamento.id,Q=M.formaPagamento&&M.formaPagamento.isCartao,j=M.condicoes||[];!j.length||!Q||(!e.cartao||j.length>e.cartao.condicoes.length)&&(e.cartao={formaId:G,valorTotal:j[0].valorTotal,condicoes:j.map(function(_){return{nome:_.condicaoPagamento&&_.condicaoPagamento.nome,numParcelas:_.condicaoPagamento&&_.condicaoPagamento.numeroParcelas,valorParcela:_.valorParcela,valorTotal:_.valorTotal}})})});function t(M){if(!M)return 0;var G=M.getAttribute&&M.getAttribute("data-valor-total");if(G){var Q=parseFloat(G);if(Q>0)return Q}var j=(M.textContent||"").replace(/[^\d,.]/g,"");return j.indexOf(",")!==-1&&(j=j.replace(/\./g,"").replace(",",".")),parseFloat(j)||0}var a=document.querySelector("#valor-total-pedido-pix, .valor-total-pix[data-valor-total]"),i=t(a);if(i>0)e.pix={formaId:17,valorTotal:i};else{var l=n.find&&n.find(function(M){return M.formaPagamento&&M.formaPagamento.id===17});l&&l.condicoes&&l.condicoes[0]&&(e.pix={formaId:17,valorTotal:l.condicoes[0].valorTotal})}var g=document.querySelector("#valor-total-pedido-boleto, .valor-total-boleto[data-valor-total]"),y=t(g);if(y>0)e.boleto={valorTotal:y};else{var S=n.find&&n.find(function(M){var G=M.formaPagamento&&M.formaPagamento.id,Q=M.formaPagamento&&M.formaPagamento.isCartao;return!Q&&G!==17&&M.condicoes&&M.condicoes.length});S&&(e.boleto={formaId:S.formaPagamento.id,valorTotal:S.condicoes[0].valorTotal})}if(!e.cartao){var B=document.querySelector(".valor-parcela-cartao");if(B){var D=t(B);D>0&&(e.cartao={valorTotal:D*12,condicoes:[]})}}return e}function x(e){var n=mn(),t=p();d.classList.add("mm-shadow-mode"),document.body.classList.add("mm-checkout-rebuild");var a=document.getElementById("mm-layout");(!a||a.parentElement!==d)&&(a&&a.parentElement&&a.parentElement.removeChild(a),a=document.createElement("div"),a.id="mm-layout",d.insertBefore(a,d.firstChild)),a.className="mm-op-layout mm-op-step3-layout",a.style.display="",a.innerHTML=A(n,e,t),document.documentElement.classList.remove("mm-cart-loading");var i=document.getElementById("mm-op-overlay");i&&i.remove();try{window.scrollTo({top:0,behavior:"smooth"})}catch{window.scrollTo(0,0)}X(e,t)}function A(e,n,t){var a=typeof renderGlobalFooter=="function"?renderGlobalFooter():"";return sn("payment")+'<main class="mm-op-main"><div class="mm-op-step3-grid"><section class="mm-op-step3-left">'+I(t)+V()+'</section><aside class="mm-op-step3-sum-wrap">'+w(n)+K(e,t,"pix")+"</aside></div></main>"+a}function w(e){var n=e||{},t=O(n.nome||""),a=O(n.email||""),i=O(n.cpf||""),l=O(n.tel||""),g=O(n.rua||""),y=O(n.num||""),S=n.comp?", "+O(n.comp):"",B=O(n.bairro||""),D=O(n.cidade||""),M=O(n.uf||""),G=O(n.cep||"");return'<div class="mm-op-step3-completed"><div class="mm-op-completed-card" data-section="dados"><div class="mm-op-completed-head"><span class="mm-op-completed-check">'+L.check+'</span><h3 class="mm-op-completed-title">Dados pessoais</h3><a href="/checkout/onepage" class="mm-op-completed-edit" data-mm-act="edit-dados" aria-label="Editar dados">'+jn.editPencil+' Editar</a></div><dl class="mm-op-completed-body">'+(t?"<div><dt>Nome</dt><dd>"+t+"</dd></div>":"")+(a?"<div><dt>E-mail</dt><dd>"+a+"</dd></div>":"")+(i?"<div><dt>CPF</dt><dd>"+i+"</dd></div>":"")+(l?"<div><dt>Telefone</dt><dd>"+l+"</dd></div>":"")+'</dl></div><div class="mm-op-completed-card" data-section="endereco"><div class="mm-op-completed-head"><span class="mm-op-completed-check">'+L.check+'</span><h3 class="mm-op-completed-title">Endereço de entrega</h3><a href="/checkout/onepage" class="mm-op-completed-edit" data-mm-act="edit-endereco" aria-label="Editar endereço">'+jn.editPencil+' Editar</a></div><address class="mm-op-completed-address">'+g+", "+y+S+"<br>"+B+" — "+D+"/"+M+"<br>"+(G?"CEP "+G:"")+"</address></div></div>"}function I(e){var n=e.pix?e.pix.valorTotal:0,t=e.cartao?e.cartao.valorTotal:0,a=e.boleto?e.boleto.valorTotal:0,i=t>n?t-n:0,l=null;e.cartao&&e.cartao.condicoes&&e.cartao.condicoes.length&&(l=e.cartao.condicoes[e.cartao.condicoes.length-1]);var g=l?"até "+l.numParcelas+"x de "+R(l.valorParcela)+" sem juros":t>0?"até 12x sem juros":"Cartão de crédito",y='<label class="mm-op-pay-radio is-active" data-forma="pix"><input type="radio" name="mm-pay" value="pix" checked><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+jn.pix+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">PIX</span><span class="mm-op-pay-sub">Aprovação instantânea · em 1 minuto</span></div><div class="mm-op-pay-price">'+(i>0?'<span class="mm-op-pay-badge-save">Economize '+R(i)+"</span>":"")+'<span class="mm-op-pay-amount">'+R(n)+'</span></div></div><div class="mm-op-pay-detail"><ul class="mm-op-pay-benefits"><li>'+L.check+"<span>QR Code e Copia-e-Cola após confirmar</span></li><li>"+L.check+"<span>Pedido aprovado em até 1 minuto</span></li><li>"+L.check+"<span>Pagamento 100% seguro · sem dados de cartão</span></li></ul></div></label>",S='<div class="mm-op-pay-brands"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-visa.svg" alt="Visa" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-mastercard.svg" alt="Mastercard" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-american-express.svg" alt="American Express" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-elo.svg" alt="Elo" width="32" height="20"><img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-hipercard.svg" alt="Hipercard" width="32" height="20"></div>',B='<span class="mm-op-req" aria-hidden="true">*</span>';function D(j){return'<span class="mm-op-field-err" id="'+j+'-err" role="alert" aria-live="polite"></span>'}var M='<div class="mm-op-card-form"><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-num">Número do cartão'+B+'</label><div class="mm-input-wrap mm-input-wrap-card"><span class="mm-input-icon" aria-hidden="true">'+L.card+'</span><input id="mm-pay-card-num" type="tel" class="mm-input" inputmode="numeric" autocomplete="off" data-mmac="cc-number" placeholder="0000 0000 0000 0000" maxlength="23" aria-describedby="mm-pay-card-num-err" aria-required="true" disabled><span class="mm-op-card-brand-detected" aria-live="polite"></span></div>'+D("mm-pay-card-num")+'</div><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-name">Nome impresso no cartão'+B+'</label><input id="mm-pay-card-name" type="text" class="mm-input mm-input-noicon" autocomplete="off" data-mmac="cc-name" placeholder="Como aparece no cartão" maxlength="100" aria-describedby="mm-pay-card-name-err" aria-required="true" disabled>'+D("mm-pay-card-name")+'</div><div class="mm-op-card-field mm-op-card-field-half"><label for="mm-pay-card-exp">Validade'+B+'</label><input id="mm-pay-card-exp" type="tel" class="mm-input mm-input-noicon" inputmode="numeric" autocomplete="off" data-mmac="cc-exp" placeholder="MM/AA" maxlength="5" aria-describedby="mm-pay-card-exp-err" aria-required="true" disabled>'+D("mm-pay-card-exp")+'</div><div class="mm-op-card-field mm-op-card-field-half"><label for="mm-pay-card-cvv">CVV'+B+'</label><input id="mm-pay-card-cvv" type="tel" class="mm-input mm-input-noicon" inputmode="numeric" autocomplete="off" data-mmac="cc-csc" placeholder="000" maxlength="4" aria-describedby="mm-pay-card-cvv-err" aria-required="true" disabled>'+D("mm-pay-card-cvv")+'</div><div class="mm-op-card-field mm-op-card-field-full"><label for="mm-pay-card-installments">Condições de pagamento'+B+'</label><select id="mm-pay-card-installments" class="mm-input mm-input-noicon mm-op-card-installments" aria-describedby="mm-pay-card-installments-err" aria-required="true" disabled><option value="">Digite o cartão pra ver as condições</option></select>'+D("mm-pay-card-installments")+"</div></div>",G='<label class="mm-op-pay-radio" data-forma="cartao"><input type="radio" name="mm-pay" value="cartao"><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+jn.cardBig+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">Cartão de Crédito</span><span class="mm-op-pay-sub">'+O(g)+'</span></div><div class="mm-op-pay-price"><span class="mm-op-pay-amount">'+R(t)+'</span></div></div><div class="mm-op-pay-detail">'+S+M+"</div></label>",Q='<label class="mm-op-pay-radio" data-forma="boleto"><input type="radio" name="mm-pay" value="boleto"><div class="mm-op-pay-head"><span class="mm-op-pay-radio-dot" aria-hidden="true"></span><span class="mm-op-pay-icon">'+jn.barcode+'</span><div class="mm-op-pay-body"><span class="mm-op-pay-title">Boleto Bancário</span><span class="mm-op-pay-sub">Aprovação em 1 a 3 dias úteis</span></div><div class="mm-op-pay-price"><span class="mm-op-pay-amount">'+R(a)+'</span></div></div><div class="mm-op-pay-detail"><ul class="mm-op-pay-benefits"><li>'+L.check+"<span>Código de barras enviado por e-mail</span></li><li>"+L.check+"<span>Pagamento em banco, lotérica ou app</span></li><li>"+L.check+"<span>Vencimento em 3 dias úteis</span></li></ul></div></label>";return'<section class="mm-op-step3-card" aria-labelledby="mm-op-step3-h"><div class="mm-op-step3-heading"><h2 id="mm-op-step3-h" class="mm-h">Como você quer pagar?</h2><p class="mm-op-step3-sub">Última etapa · escolha sua forma de pagamento '+(i>0?"· PIX tem desconto de "+R(i):"")+'</p></div><div class="mm-op-pay-radios" role="radiogroup" aria-label="Forma de pagamento">'+y+G+Q+'</div><button type="button" class="mm-cta mm-op-cta mm-op-finalizar" data-mm-act="finalizar-compra">'+L.lock+'<span class="mm-op-finalizar-label">Finalizar compra · '+R(n)+'</span></button><p class="mm-op-finalizar-sub">'+L.shield+"<span>Pagamento seguro · criptografia SSL-256 · seus dados não são armazenados</span></p></section>"}function V(){return'<div class="mm-op-trust-payment"><div class="mm-op-trust-payment-row"><span class="mm-trust-item">'+L.lock+'<span>Site 100% seguro</span></span><span class="mm-trust-item">'+L.shield+'<span>Garantia 12 meses</span></span><span class="mm-trust-item">'+L.rotate+'<span>7 dias pra trocar</span></span><span class="mm-trust-item">'+L.whats+'<span>Atendimento humano</span></span></div><p class="mm-op-trust-payment-note">Ao finalizar, você concorda com os <a href="/termos-de-uso" target="_blank" rel="noopener">termos de compra</a> e a <a href="/politica-privacidade" target="_blank" rel="noopener">política de privacidade</a>.</p></div>'}function K(e,n,t){if(!e||!e.items||!e.items.length)return'<aside class="mm-id-sum mm-sum mm-op-step3-sum"><h2 class="mm-h">Resumo</h2><div class="mm-sum-card"><p class="mm-sum-empty">Não conseguimos carregar o resumo do seu pedido.</p></div></aside>';var a=n.pix?n.pix.valorTotal:0,i=n.cartao?n.cartao.valorTotal:0,l=n.boleto?n.boleto.valorTotal:0,g=i>a?i-a:0,y=t==="pix"?a:t==="boleto"?l:i,S=t==="pix"?"no PIX":t==="boleto"?"no boleto":"no cartão",B=3,D=e.items.slice(0,B),M=e.items.length-B,G=D.map(function(an){var ln=an.imgSrc?'<img src="'+O(an.imgSrc)+'" alt="'+O(an.name)+'" loading="lazy">':'<div class="mm-id-thumb-placeholder">'+L.box+"</div>",un=an.quantity>1?'<strong class="mm-id-thumb-qty">'+an.quantity+"×</strong> ":"",wn=an.lineTotalPix>0?an.lineTotalPix:an.lineTotal;return'<div class="mm-id-thumb"><div class="mm-id-thumb-img">'+ln+'</div><div class="mm-id-thumb-body"><p class="mm-id-thumb-name">'+un+O(an.name)+"</p>"+(an.variant?'<p class="mm-id-thumb-variant">'+O(an.variant)+"</p>":"")+'</div><div class="mm-id-thumb-price">'+R(wn)+"</div></div>"}).join("");M>0&&(G+='<div class="mm-id-thumb-more">+ '+M+" "+(M===1?"item":"itens")+" a mais</div>");var Q=e.subtotalFull>0?e.subtotalFull:e.subtotalPix,j='<div class="mm-row"><span class="mm-row-label">Subtotal</span><span class="mm-row-value">'+R(Q)+"</span></div>";if(e.shipping!==null&&e.shipping!==void 0){var _=e.shipping===0?'<span class="mm-row-value is-free">'+L.check+" Grátis</span>":'<span class="mm-row-value">'+R(e.shipping)+"</span>";j+='<div class="mm-row"><span class="mm-row-label">Frete'+(e.shippingDeadline?' <span class="mm-row-sub">· '+O(e.shippingDeadline)+"</span>":"")+"</span>"+_+"</div>"}e.discount>0&&(j+='<div class="mm-row"><span class="mm-row-label">Cupom'+(e.couponCode?' <span class="mm-row-sub">· '+O(e.couponCode)+"</span>":"")+'</span><span class="mm-row-value is-discount">− '+R(e.discount)+"</span></div>"),g>0&&t==="pix"&&(j+='<div class="mm-row mm-row-pix-discount"><span class="mm-row-label">'+L.bolt+' Desconto PIX</span><span class="mm-row-value is-discount">− '+R(g)+"</span></div>");var rn='<div class="mm-total"><div class="mm-total-label">Total</div><div class="mm-total-value" data-mm-total>'+R(y)+'</div><div class="mm-total-pix" data-mm-total-sub><span>'+S+"</span></div></div>";return'<aside class="mm-id-sum mm-sum mm-op-step3-sum" data-active-forma="'+O(t)+'"><h2 class="mm-h">Resumo do pedido</h2><div class="mm-sum-card"><div class="mm-id-thumbs">'+G+'</div><div class="mm-sum-rows">'+j+"</div>"+rn+"</div></aside>"}function X(e,n){var t=document.getElementById("mm-layout");if(!t||t._mmStep3Bound)return;t._mmStep3Bound=!0;var a=mn(),i={activeForma:"pix",cardNumValid:!1,cardBrand:null,cardInstallments:null,submitting:!1};t.addEventListener("click",function(k){var E=k.target.closest(".mm-op-pay-radio");if(E){var U=E.querySelector('input[type="radio"]');U&&!U.checked&&(k.preventDefault(),U.checked=!0,B(E.getAttribute("data-forma")));return}if(k.target.closest('[data-mm-act="finalizar-compra"]')){k.preventDefault(),In();return}var nn=k.target.closest('[data-mm-act="edit-dados"], [data-mm-act="edit-endereco"]');if(nn){k.preventDefault(),location.reload();return}}),t.addEventListener("input",function(k){var E=k.target;!E||!E.id||(E.id==="mm-pay-card-num"?j(E):E.id==="mm-pay-card-exp"?_(E):E.id==="mm-pay-card-cvv"&&(E.value=(E.value||"").replace(/\D/g,"").slice(0,4)))}),t.addEventListener("change",function(k){if(k.target&&k.target.id==="mm-pay-card-installments"){var E=k.target,U=E.options[E.selectedIndex];U&&U.value&&(i.cardInstallments={numero:parseInt(U.value,10),label:U.textContent||""},ln(U.value),g("mm-pay-card-installments"))}}),t.addEventListener("blur",function(k){var E=k.target;if(!(!E||!E.id)){var U=["mm-pay-card-num","mm-pay-card-name","mm-pay-card-exp","mm-pay-card-cvv"];U.indexOf(E.id)!==-1&&y(E.id)}},!0),t.addEventListener("focus",function(k){var E=k.target;!E||!E.id||/^mm-pay-card-/.test(E.id)&&g(E.id)},!0);function l(k,E){var U=document.getElementById(k),nn=document.getElementById(k+"-err");U&&(U.classList.add("mm-input-error"),U.setAttribute("aria-invalid","true")),nn&&(nn.textContent=E,nn.classList.add("is-visible"))}function g(k){var E=document.getElementById(k),U=document.getElementById(k+"-err");E&&(E.classList.remove("mm-input-error"),E.removeAttribute("aria-invalid")),U&&(U.textContent="",U.classList.remove("is-visible"))}function y(k){var E=document.getElementById(k);if(!E)return!0;var U=(E.value||"").trim();if(k==="mm-pay-card-num"){var nn=U.replace(/\D/g,"");return nn?nn.length<13?(l(k,"Número do cartão incompleto"),!1):S(nn)?(g(k),!0):(l(k,"Número do cartão inválido — confira os dígitos"),!1):(l(k,"Informe o número do cartão"),!1)}if(k==="mm-pay-card-name")return U?U.split(/\s+/).length<2?(l(k,"Use o nome completo como aparece no cartão"),!1):(g(k),!0):(l(k,"Informe o nome impresso no cartão"),!1);if(k==="mm-pay-card-exp"){var Z=U.replace(/\D/g,"");if(Z.length!==4)return l(k,"Informe a validade no formato MM/AA"),!1;var fn=parseInt(Z.slice(0,2),10),hn=parseInt(Z.slice(2),10);if(fn<1||fn>12)return l(k,"Mês inválido (01 a 12)"),!1;var Sn=new Date,Fn=Sn.getFullYear()%100,Mn=Sn.getMonth()+1;return hn<Fn||hn===Fn&&fn<Mn?(l(k,"Cartão expirado"),!1):(g(k),!0)}if(k==="mm-pay-card-cvv"){var Yn=U.replace(/\D/g,"");return Yn.length<3?(l(k,"CVV deve ter 3 ou 4 dígitos"),!1):(g(k),!0)}return k==="mm-pay-card-installments"?U?(g(k),!0):(l(k,"Selecione o número de parcelas"),!1):!0}function S(k){for(var E=0,U=!1,nn=k.length-1;nn>=0;nn--){var Z=parseInt(k.charAt(nn),10);U&&(Z*=2,Z>9&&(Z-=9)),E+=Z,U=!U}return E%10===0}function B(k){if(!(!k||i.activeForma===k)){i.activeForma=k,t.querySelectorAll(".mm-op-pay-radio").forEach(function(Z){Z.classList.toggle("is-active",Z.getAttribute("data-forma")===k)});var E=document.getElementById("forma-pagto-"+k);if(E&&!E.checked)try{E.click()}catch{}var U=t.querySelectorAll(".mm-op-card-form input, .mm-op-card-form select"),nn=k==="cartao";U.forEach(function(Z){Z.disabled=!nn,nn?Z.dataset.mmac&&Z.setAttribute("autocomplete",Z.dataset.mmac):Z.setAttribute("autocomplete","off")}),D(k),k==="cartao"&&setTimeout(function(){var Z=document.getElementById("mm-pay-card-num");Z&&!Z.value&&Z.focus()},250)}}function D(k){var E=t.querySelector(".mm-op-step3-sum");if(E){E.setAttribute("data-active-forma",k);var U=n.pix?n.pix.valorTotal:0,nn=n.cartao?n.cartao.valorTotal:0,Z=n.boleto?n.boleto.valorTotal:0,fn=nn>U?nn-U:0,hn=k==="pix"?U:k==="boleto"?Z:nn,Sn=k==="pix"?"no PIX":k==="boleto"?"no boleto":"no cartão",Fn=E.querySelector("[data-mm-total]");if(Fn){var Mn=Fn.textContent||"",Yn=H(Mn);Yn!==hn?M(Fn,Yn,hn,360):Fn.textContent=R(hn)}var Vn=E.querySelector("[data-mm-total-sub] span");Vn&&Vn.textContent!==Sn&&(Vn.textContent=Sn);var tt=E.querySelector(".mm-sum-rows"),et=tt?tt.querySelector(".mm-row-pix-discount"):null;if(k==="pix"&&fn>0){if(!et&&tt){var ut=document.createElement("div");ut.innerHTML='<div class="mm-row mm-row-pix-discount"><span class="mm-row-label">'+L.bolt+' Desconto PIX</span><span class="mm-row-value is-discount">− '+R(fn)+"</span></div>",tt.appendChild(ut.firstChild)}}else et&&et.remove();G(k)}}function M(k,E,U,nn){k._mmAnimToken&&cancelAnimationFrame(k._mmAnimToken);var Z=null,fn=U-E;function hn(Sn){Z||(Z=Sn);var Fn=Sn-Z,Mn=Math.min(1,Fn/nn),Yn=1-Math.pow(1-Mn,3),Vn=E+fn*Yn;k.textContent=R(Vn),Mn<1?k._mmAnimToken=requestAnimationFrame(hn):(k.textContent=R(U),k._mmAnimToken=null)}k._mmAnimToken=requestAnimationFrame(hn)}function G(k){var E=t.querySelector(".mm-op-finalizar-label");if(E){var U=k==="pix"?n.pix&&n.pix.valorTotal:k==="boleto"?n.boleto&&n.boleto.valorTotal:n.cartao&&n.cartao.valorTotal;E.textContent="Finalizar compra · "+R(U||0)}}function Q(k){var E=(k||"").replace(/\D/g,"");return E?/^4/.test(E)?"visa":/^(5[1-5]|22[2-9]|2[3-6]|27[01]|2720)/.test(E)?"mastercard":/^3[47]/.test(E)?"amex":/^(4011|4312|4389|4514|4573|5041|5066|5067|509|6277|6362|6363|650|6516|6550)/.test(E)?"elo":/^(606282|384100|384140|384160|606|637095|637568|637599|637609|637612)/.test(E)?"hipercard":null:null}function j(k){var E=(k.value||"").replace(/\D/g,"").slice(0,19),U=E.replace(/(\d{4})(?=\d)/g,"$1 ");if(U!==k.value){var nn=k.selectionStart;k.value=U;try{k.setSelectionRange(nn+1,nn+1)}catch{}}var Z=Q(E);i.cardBrand=Z,i.cardNumValid=E.length>=13;var fn=t.querySelector(".mm-op-card-brand-detected");fn&&(fn.className="mm-op-card-brand-detected"+(Z?" is-"+Z:""),fn.textContent=Z?Z.toUpperCase():""),E.length>=6&&(rn(E),wn())}function _(k){var E=(k.value||"").replace(/\D/g,"").slice(0,4),U=E.length>2?E.slice(0,2)+"/"+E.slice(2):E;if(k.value=U,E.length===4){var nn=E.slice(0,2),Z="20"+E.slice(2);an("pag-cartao-mes-validade",String(parseInt(nn,10))),an("pag-cartao-ano-validade",Z)}}function rn(k){var E=document.getElementById("pag-cartao-numero");if(E){try{var U=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;U.call(E,k)}catch{E.value=k}E.dispatchEvent(new Event("input",{bubbles:!0})),E.dispatchEvent(new Event("change",{bubbles:!0})),E.dispatchEvent(new Event("blur",{bubbles:!0}))}}function an(k,E){var U=document.getElementById(k);if(U){try{var nn=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;nn.call(U,E)}catch{U.value=E}U.dispatchEvent(new Event("change",{bubbles:!0}))}}function ln(k){an("pag-cartao-parcela",k)}var un=null;function wn(){if(un)return;var k=document.getElementById("pag-cartao-parcela");if(!k)return;var E=document.getElementById("mm-pay-card-installments");if(!E)return;function U(){var nn=k.querySelectorAll("option");if(!(nn.length<=1)){var Z="";nn.forEach(function(fn){if(!fn.value){Z+='<option value="">Selecione as parcelas</option>';return}Z+='<option value="'+O(fn.value)+'">'+O(fn.textContent.trim())+"</option>"}),E.innerHTML=Z,E.options.length>1&&(E.selectedIndex=1,i.cardInstallments={numero:parseInt(E.options[1].value,10)||1,label:E.options[1].textContent},ln(E.options[1].value))}}U(),un=new MutationObserver(U),un.observe(k,{childList:!0,subtree:!0})}function In(){if(console.log("[mm-checkout] submitFinalizar() entry",{submitting:i.submitting,activeForma:i.activeForma}),i.submitting)return;var k=i.activeForma,E=t.querySelector(".mm-op-finalizar");if(!E){console.log("[mm-checkout] submitFinalizar: no .mm-op-finalizar btn");return}if(k==="cartao"){var U=["mm-pay-card-num","mm-pay-card-name","mm-pay-card-exp","mm-pay-card-cvv","mm-pay-card-installments"],nn=U.filter(function(vn){return!y(vn)});if(console.log("[mm-checkout] validation",{errorCount:nn.length,errors:nn}),nn.length){var Z=document.getElementById(nn[0]);if(Z){Z.focus();try{Z.scrollIntoView({block:"center",behavior:"smooth"})}catch{}}return}var fn=document.getElementById("mm-pay-card-name"),hn=document.getElementById("mm-pay-card-cvv"),Sn=document.getElementById("pag-cartao-titular");if(Sn){try{var Fn=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;Fn.call(Sn,fn.value.trim())}catch{Sn.value=fn.value.trim()}Sn.dispatchEvent(new Event("input",{bubbles:!0})),Sn.dispatchEvent(new Event("blur",{bubbles:!0}))}var Mn=document.getElementById("pag-cartao-vericacao");if(Mn){try{var Yn=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;Yn.call(Mn,hn.value.replace(/\D/g,""))}catch{Mn.value=hn.value.replace(/\D/g,"")}Mn.dispatchEvent(new Event("input",{bubbles:!0})),Mn.dispatchEvent(new Event("blur",{bubbles:!0}))}var Vn=document.getElementById("pag-cartao-cpf");if(Vn&&e&&e.cpf){try{var tt=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;tt.call(Vn,e.cpf)}catch{Vn.value=e.cpf}Vn.dispatchEvent(new Event("input",{bubbles:!0})),Vn.dispatchEvent(new Event("blur",{bubbles:!0}))}}i.submitting=!0,E.classList.add("is-loading"),E.setAttribute("aria-busy","true");var et=E.querySelector(".mm-op-finalizar-label");if(et&&(et.textContent="Processando pagamento..."),r("Finalizando seu pedido..."),k==="cartao"){var ut=document.getElementById("mm-pay-card-installments");ut&&ut.value&&ln(ut.value)}window.__mmCheckoutDebug=window.__mmCheckoutDebug||[];function Cn(vn,Xn){var Un={t:new Date().toISOString(),msg:vn,data:Xn};window.__mmCheckoutDebug.push(Un),console.log("[mm-checkout]",vn,Xn||"")}function ht(){if(Cn("doSubmit() called",{forma:k}),k==="cartao"){var vn=document.getElementById("aceito-termos-bcash-one-card");vn&&!vn.checked&&(vn.checked=!0,vn.dispatchEvent(new Event("change",{bubbles:!0}))),Cn("terms",{checked:vn?.checked})}var Xn=k==="pix"?"form-pag-pix":k==="boleto"?"form-pag-boleto":"form-pag-cartao",Un=document.getElementById(Xn);if(!Un){Cn("ERROR: form not found",{formId:Xn}),alert("Erro interno: formulário de pagamento não encontrado. Recarregue a página."),i.submitting=!1,E.classList.remove("is-loading");var at=document.getElementById("mm-op-overlay");at&&at.remove();return}k==="cartao"&&Cn("pre-submit cartao state",{numero:document.getElementById("pag-cartao-numero")?.value,bandeira:document.getElementById("pag-cartao-bandeira")?.value,parcela:document.getElementById("pag-cartao-parcela")?.value,titular:document.getElementById("pag-cartao-titular")?.value,mes:document.getElementById("pag-cartao-mes-validade")?.value,ano:document.getElementById("pag-cartao-ano-validade")?.value,cvv:document.getElementById("pag-cartao-vericacao")?.value?.length,cpf:document.getElementById("pag-cartao-cpf")?.value,tokenMp:document.getElementById("pag-cartao-token-mp")?.value?.substring(0,20)});var rt=Un.querySelector('button.button-success, button[type="submit"], input[type="submit"]');if(rt)Cn("clicking native button",{text:rt.textContent?.trim()}),rt.click();else if(typeof Un.requestSubmit=="function"){Cn("no native btn, using requestSubmit");try{Un.requestSubmit()}catch(st){Cn("requestSubmit error",st.message),Un.submit()}}else Cn("no native btn, using form.submit()"),Un.submit();setTimeout(function(){if(i.submitting&&location.pathname.indexOf("/onepage")!==-1){Cn("8s failsafe: still on /onepage, removing overlay"),i.submitting=!1,E.classList.remove("is-loading");var st=document.getElementById("mm-op-overlay");st&&st.remove(),d.classList.remove("mm-shadow-mode"),t&&(t.style.display="none")}},8e3),setTimeout(function(){d.classList.remove("mm-shadow-mode"),t&&(t.style.display="none")},600)}function wt(){i.submitting=!1,E.classList.remove("is-loading"),E.removeAttribute("aria-busy");var vn=E.querySelector(".mm-op-finalizar-label");vn&&(vn.textContent="Finalizar compra");var Xn=document.getElementById("mm-op-overlay");Xn&&Xn.remove()}function Tt(){var vn=Date.now(),Xn=1e4;(function Un(){var at=document.getElementById("pag-cartao-token-mp"),rt=at?(at.value||"").trim():"",st=rt&&rt!=="loading..."&&rt.length>10;if(st){Cn("fallback: token ready"),ht();return}if(Date.now()-vn>=Xn){Cn("fallback: timeout",{lastVal:rt}),ht();return}setTimeout(Un,200)})()}function Pt(){if(Cn("generateMpTokenAndSubmit() start"),typeof Mercadopago>"u"){Cn("Mercadopago global missing, falling back to wait strategy"),Tt();return}var vn=document.getElementById("pag-cartao-token-mp"),Xn=vn?(vn.value||"").trim():"";if(Xn&&Xn!=="loading..."&&Xn.length>10){Cn("token already present, submitting",{len:Xn.length}),ht();return}var Un=(document.getElementById("mm-pay-card-num")?.value||"").replace(/\D/g,""),at=(document.getElementById("mm-pay-card-exp")?.value||"").replace(/\D/g,""),rt=(document.getElementById("mm-pay-card-cvv")?.value||"").replace(/\D/g,""),st=(document.getElementById("mm-pay-card-name")?.value||"").trim(),Mt=(e&&e.cpf||document.getElementById("mm-op-cpf")?.value||"").replace(/\D/g,"");if(!Un||!at||!rt||!st||!Mt){Cn("missing card fields",{num:Un.length,exp:at.length,cvv:rt.length,name:!!st,doc:Mt.length}),alert("Preencha todos os dados do cartão antes de finalizar."),wt();return}var Lt=at.slice(0,2),Bt=at.length===4?"20"+at.slice(2):at.slice(2);Cn("calling Mercadopago.createToken",{numLen:Un.length,month:Lt,year:Bt});try{Mercadopago.createToken({cardNumber:Un,securityCode:rt,cardExpirationMonth:Lt,cardExpirationYear:Bt,cardholderName:st,docType:"CPF",docNumber:Mt},function(St,lt){if(Cn("createToken callback",{status:St,hasId:!!(lt&&lt.id),err:lt&&lt.error}),St===200||St===201){if(vn){var Ot=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;Ot.call(vn,lt.id),vn.dispatchEvent(new Event("input",{bubbles:!0})),vn.dispatchEvent(new Event("change",{bubbles:!0}))}ht()}else{var It="Não foi possível validar os dados do cartão.";lt&&lt.cause&&lt.cause[0]&&lt.cause[0].description&&(It=lt.cause[0].description),alert(It),wt()}})}catch(St){Cn("createToken exception",St.message),Tt()}}k==="cartao"?Pt():setTimeout(ht,500)}}if(F){let e=function(t){if(t=t||0,t>30){n();return}var a=d.querySelector("#cep, .box-area-dados, #nome-completo_2");a||t>8?n():setTimeout(function(){e(t+1)},250)},n=function(){var t=mn(),a=tn.get("mm_user_email")||"";tn.remove("mm_checkout_mode"),typeof window._mmDraftDebug>"u"&&(window._mmDraftDebug=!1),Ft(t,a),_n();var i=Hn(),l=tn.get(P),g=l&&String(l).replace(/\D/g,"").length===8;g?ct("loading"):t&&typeof t.shipping=="number"&&t.shipping>0&&ct({value:t.shipping,name:t.shippingName||"",deadline:t.shippingDeadline||"",city:t.shippingCity||"",options:t.shippingOptions||[]});try{var y=Array.from(d.querySelectorAll("a, button")).find(function(D){var M=(D.textContent||"").toLowerCase();return M.indexOf("sem cadastro")!==-1&&D.offsetParent!==null});y&&!y.classList.contains("active")&&y.click()}catch{}vt();var S=tn.get(P);if(S&&S.length===8){var B=document.getElementById("mm-op-cep");B&&(B.value=kn(S),setTimeout(function(){dt(S)},400))}setTimeout(function(){if(!("ontouchstart"in window))for(var D=["mm-op-email","mm-op-nome","mm-op-cpf","mm-op-tel","mm-op-cep"],M=0;M<D.length;M++){var G=document.getElementById(D[M]);if(G&&!G.value){G.focus();break}}},350)};e()}if(q){document.documentElement.classList.remove("mm-cart-loading");var en=d.querySelector('input[placeholder*="numero do cart" i]');en&&(en.inputMode="numeric");var J=d.querySelector('input[placeholder*="000" i]');J&&(!J.maxLength||J.maxLength<=4)&&(J.inputMode="numeric")}setTimeout(function(){document.documentElement.classList.contains("mm-cart-loading")&&(console.warn("[mm-cart] failsafe: removing mm-cart-loading after 2s timeout"),document.documentElement.classList.remove("mm-cart-loading"))},2e3)})(),(function(){var P=window.location.pathname,N=/^\/login\/?$/.test(P),T=P.indexOf("/cliente/pedidos")===0;if(!N&&!T)return;var h="5511915299488",o='<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';function m(v){return"https://api.whatsapp.com/send?phone="+h+"&text="+encodeURIComponent(v)}function c(v){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v()}function f(){function v(z){var d=z.slice(0,14);if(d.length<=11)return d.length>9?d.slice(0,3)+"."+d.slice(3,6)+"."+d.slice(6,9)+"-"+d.slice(9):d.length>6?d.slice(0,3)+"."+d.slice(3,6)+"."+d.slice(6):d.length>3?d.slice(0,3)+"."+d.slice(3):d;var W=d.slice(0,2)+"."+d.slice(2,5)+"."+d.slice(5,8)+"/"+d.slice(8,12);return d.length>12&&(W+="-"+d.slice(12)),W}function F(z){if(!(!z||z.getAttribute("data-mm-mask"))){z.setAttribute("data-mm-mask","1"),z.setAttribute("maxlength","18"),z.setAttribute("inputmode","numeric"),z.addEventListener("input",function(){var W=v(this.value.replace(/\D/g,""));this.value!==W&&(this.value=W)});var d=z.form;d&&!d.getAttribute("data-mm-mask")&&(d.setAttribute("data-mm-mask","1"),d.addEventListener("submit",function(){z.value=v(z.value.replace(/\D/g,""))}))}}var q=0;(function z(){var d=document.getElementById("form-consulta-pedido"),W=document.getElementById("cpfcnpj");if(!d||!W)return++q<20?void setTimeout(z,250):void 0;F(W);var Y=d.querySelector(".title-area h2");if(Y&&!d.querySelector(".mm-cp-eyebrow")){var R=document.createElement("span");R.className="mm-cp-eyebrow",R.textContent="Acompanhe sua compra",Y.insertAdjacentElement("beforebegin",R)}function H(pn,yn){if(pn){var On=pn.closest(".line")||pn.parentElement;if(!On.querySelector(".mm-cp-label")){var Bn=document.createElement("label");Bn.className="mm-cp-label",Bn.textContent=yn,pn.id&&Bn.setAttribute("for",pn.id),On.insertAdjacentElement("afterbegin",Bn)}}}H(W,"CPF ou CNPJ"),H(document.getElementById("numero-pedido"),"Nº do pedido"),W.placeholder="000.000.000-00";var O=document.getElementById("numero-pedido");O&&(O.placeholder="Ex.: 0012606865731");var L=d.querySelector("button.button-login");if(L)for(var tn=0;tn<L.childNodes.length;tn++){var on=L.childNodes[tn];on.nodeType===3&&/consultar/i.test(on.textContent)&&(on.textContent=" Consultar meu pedido ")}var mn=d.querySelector(".cancel-consulta span");mn&&(mn.textContent="Voltar para login");var dn=document.getElementById("numero-pedido");if(dn&&!d.querySelector(".mm-cp-hint")){var Ln=document.createElement("span");Ln.className="mm-cp-hint",Ln.textContent="O número do pedido está no e‑mail de confirmação da compra.";var gn=dn.closest(".line")||dn.parentElement;gn.appendChild(Ln)}var Hn=d.querySelector("form");if(Hn&&!d.querySelector(".mm-cp-wa")){var Tn=document.createElement("div");Tn.className="mm-cp-wa",Tn.innerHTML='Não encontra os dados? <a href="'+m("Olá! Preciso de ajuda para consultar o meu pedido.")+'" target="_blank" rel="noopener">'+o+" Fale com a gente</a>",Hn.insertAdjacentElement("afterend",Tn)}document.documentElement.classList.add("mm-consulta-on");var sn=document.querySelector(".login-holder"),Pn=document.querySelector(".page.page-login");if(sn&&Pn){var zn=sn.querySelector(".login-header");if(zn&&!zn.querySelector(".mm-lg-eyebrow")){var qn=document.createElement("span");qn.className="mm-lg-eyebrow",qn.textContent="Área do cliente";var bn=zn.querySelector("h2");bn&&bn.insertAdjacentElement("beforebegin",qn)}var An=sn.querySelector(".social-login-area");if(An&&!sn.querySelector(".mm-lg-ou")){var $n=document.createElement("div");$n.className="mm-lg-ou",$n.textContent="ou",An.insertAdjacentElement("beforebegin",$n)}setTimeout(function(){try{var pn=sn.querySelector(".social-login-area .render-button");pn&&window.google&&google.accounts&&google.accounts.id&&(pn.innerHTML="",google.accounts.id.renderButton(pn,{theme:"outline",size:"large",shape:"pill",width:320,text:"continue_with",logo_alignment:"center"}))}catch{}setTimeout(function(){var yn=sn.querySelector(".social-login-area"),On=sn.querySelector(".mm-lg-ou"),Bn=yn&&yn.offsetParent!==null&&yn.querySelector("iframe");Bn||(On&&(On.style.display="none"),yn&&(yn.style.display="none"))},2e3)},1200);var kn=[].filter.call(sn.querySelectorAll("span, div, button"),function(pn){return/pessoa jur/i.test(pn.textContent)&&pn.textContent.length<60&&pn.children.length===0})[0];kn&&kn.classList.add("mm-lg-link");var Wn=document.querySelector(".footer-login");Wn&&[].forEach.call(Wn.querySelectorAll("p"),function(pn){/nunca postaremos/i.test(pn.textContent)&&pn.classList.add("mm-lg-nopost")}),document.documentElement.classList.add("mm-login-on")}})(),/#consultar?-?pedido/i.test(window.location.hash)&&setTimeout(function(){var z=document.getElementById("form-consulta-pedido"),d=document.getElementById("cpfcnpj");z&&z.scrollIntoView({behavior:"smooth",block:"center"}),d&&setTimeout(function(){d.focus()},500)},600)}var u={"recebimento-pedido":"Pedido recebido","confirmacao-pagamento":"Pagamento confirmado","emissao-nota":"Nota fiscal emitida",transporte:"Em transporte",entrega:"Entregue"};function C(){var v=document.querySelector(".detalhes-pedido");if(!(!v||v.getAttribute("data-mm-ped"))){v.setAttribute("data-mm-ped","1");var F=v.querySelector(".numero-pedido"),q=F?(F.textContent.match(/[\d]+/)||[""])[0]:"",z=v.querySelector(".resumo-data strong"),d=z?z.textContent.trim().split(" ")[0]:"",W=v.querySelectorAll(".item-historico.status-waiting");W.length&&W[0].classList.add("mm-atual");for(var Y='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"',R={"recebimento-pedido":"<svg "+Y+'><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',"confirmacao-pagamento":"<svg "+Y+'><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>',"emissao-nota":"<svg "+Y+'><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M15 2v5h5"/><path d="M8 13h8"/><path d="M8 17h5"/></svg>',transporte:"<svg "+Y+'><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',entrega:"<svg "+Y+'><path d="M3 10.18v8.82a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8.82"/><path d="M2.5 10.5 12 3l9.5 7.5"/><path d="m9 15 2 2 4-4"/></svg>'},H=v.querySelectorAll(".item-historico"),O=0;O<H.length;O++){var L=H[O];if(!L.querySelector(".mm-step-dot")){var tn="";for(var on in R)if(L.classList.contains(on)){tn=R[on];break}var mn=document.createElement("span");mn.className="mm-step-dot",mn.innerHTML=tn,L.insertAdjacentElement("afterbegin",mn);var dn=document.createElement("span");dn.className="mm-step-line",L.appendChild(dn)}}var Ln=v.querySelectorAll(".item-historico.status-success"),gn="Pedido recebido";if(Ln.length){var Hn=Ln[Ln.length-1];for(var Tn in u)if(Hn.classList.contains(Tn)){gn=u[Tn];break}}if(!document.getElementById("mm-ped-hero")&&q){var sn=document.createElement("div");sn.id="mm-ped-hero",sn.innerHTML='<div class="mm-ped-hero-info"><span class="mm-ped-eyebrow">Acompanhe sua compra</span><h1 class="mm-ped-num">Pedido #'+q+' <button type="button" class="mm-ped-copy" aria-label="Copiar número do pedido">copiar</button></h1><div class="mm-ped-meta">'+(d?"<span>Feito em "+d+"</span>":"")+'<span class="mm-ped-badge">'+gn+'</span></div></div><a class="mm-ped-hero-wa" target="_blank" rel="noopener" href="'+m("Olá! Gostaria de saber sobre o meu pedido #"+q+".")+'">'+o+" Falar sobre este pedido</a>",v.insertAdjacentElement("afterbegin",sn);var Pn=v.querySelector(".resumo-pagamento .resumo-total > span:first-child");Pn&&/resumo do pedido/i.test(Pn.textContent)&&(Pn.textContent="Total");var zn=v.querySelector(".title-itens-pedido h3");zn&&/itens do pedido/i.test(zn.textContent)&&(zn.textContent=" Itens do pedido ");for(var qn=document.querySelectorAll(".main-content h1, .main-content h2, .main-content .title-user-area, .main-content > div"),bn=0;bn<qn.length;bn++){var An=qn[bn];if(!An.contains(v)&&/meus pedidos/i.test(An.textContent||"")&&(An.textContent||"").trim().length<40){An.classList.add("mm-ped-native-title");break}}var $n=sn.querySelector(".mm-ped-copy");$n.addEventListener("click",function(){var Rn=this;try{navigator.clipboard.writeText(q).then(function(){Rn.textContent="copiado ✓",Rn.classList.add("mm-copiado"),setTimeout(function(){Rn.textContent="copiar",Rn.classList.remove("mm-copiado")},2e3)})}catch{}})}var kn=v.querySelector(".rastreio-area"),Wn=kn?kn.querySelector(".previsao-entrega .previsao"):null,pn=Wn?Wn.textContent.trim():"";if(pn){var yn=v.querySelector(".item-historico.entrega");if(yn&&!yn.querySelector(".mm-step-prev")){var On=document.createElement("span");On.className="mm-step-prev",On.textContent="Previsão: "+pn,yn.appendChild(On)}}var Bn=v.querySelector(".status-pagamento-pedido");if(Bn&&!kn&&!document.getElementById("mm-ped-entrega")){var Qn=document.createElement("div");Qn.id="mm-ped-entrega";for(var pt=null,En=v.querySelectorAll("a[href]"),xn=0;xn<En.length;xn++){var bn=(En[xn].textContent||"")+" "+En[xn].href;if(/rastre/i.test(bn)&&!/politica/i.test(En[xn].href)){pt=En[xn];break}}var cn='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>';pt?(Qn.classList.add("mm-tem-rastreio"),Qn.innerHTML=cn+'<span>Seu pedido está a caminho — <a href="'+pt.href+'" target="_blank" rel="noopener">acompanhe o rastreio aqui</a>.</span>'):Qn.innerHTML=cn+'<span>O código de rastreio aparece aqui assim que o pedido for despachado. Enquanto isso, acompanhe as etapas acima ou veja nossa <a href="/politica-de-entrega" target="_blank" rel="noopener">política de entrega</a>.</span>',Bn.insertAdjacentElement("afterend",Qn)}var Jn=document.querySelector(".btn-comprar-novamente"),ot=document.querySelector(".btn-ajuda-pedido"),Dn=Jn||ot?(Jn||ot).parentElement:null;Dn&&!Dn.classList.contains("mm-ped-acoes")&&(Dn.classList.add("mm-ped-acoes"),Dn.parentElement!==v&&v.appendChild(Dn));var Kn=document.querySelector("main.central-cliente");Kn&&Kn.children.length===1&&Kn.classList.add("mm-ped-center"),document.documentElement.classList.add("mm-ped-on")}}c(function(){try{N&&f(),T&&C()}catch(v){window.console&&console.warn&&console.warn("[mm-pedidos]",v)}})})()})();
