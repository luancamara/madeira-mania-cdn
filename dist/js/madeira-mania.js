(function() {
  'use strict';

  /* =============================================
     SEÇÃO 1: CSS INJECTION
     ============================================= */

  /* Inject CSS: global.css */
  (function(){if(document.getElementById("mm-global-css"))return;var s=document.createElement("style");s.id="mm-global-css";s.textContent="/* =============================================\n   GLOBAL CSS - Madeira Mania (Mobile)\n   Melhorias aplicadas em TODAS as páginas\n\n   Todos com !important para sobrescrever Magazord\n\n   Paleta oficial:\n   - Verde base: #4b664a\n   - Verde claro: #5d765d\n   - Verde escuro: #445c43\n   - Texto: #333333\n   - Fundo: #ffffff\n   ============================================= */\n\n@media (max-width: 768px) {\n\n  /* ==========================================\n     1. OVERFLOW - Impedir scroll horizontal\n     ========================================== */\n\n  html, body {\n    overflow-x: hidden !important;\n  }\n\n  #pagina-produto-react-app,\n  #produto-react-app {\n    overflow-x: hidden !important;\n    max-width: 100vw !important;\n  }\n\n\n  /* ==========================================\n     2. LINKS - Cor dentro da paleta do site\n     ========================================== */\n\n  #pagina-produto-react-app a:not([class*=\"bg-\"]):not([class*=\"text-white\"]):not(header a):not(nav a) {\n    color: #4b664a !important;\n  }\n\n\n  /* ==========================================\n     3. VITRINES — Ocultar estrelas com 0 reviews\n     Aplica em homepage e qualquer vitrine\n     ========================================== */\n\n  .average-rating[data-value=\"0.00\"],\n  .average-rating[data-value=\"0.00\"] + .qtd-aval,\n  .average-rating[data-value=\"0\"] + .qtd-aval,\n  .average-rating[data-value=\"0\"] {\n    display: none !important;\n  }\n\n  /* Ocultar .rating inteiro quando contém apenas 0 */\n  .rating:has(.average-rating[data-value=\"0.00\"]) {\n    display: none !important;\n  }\n\n\n}\n\n\n/* =============================================\n   REGRAS GLOBAIS (todos os viewports)\n   ============================================= */\n\n/* Esconder WhatsApp original — substituído por #mm-floating-whatsapp */\n#popup-msg-whats {\n  display: none !important;\n}\n\n/* --- Absorvido de CA-3 (Arredonda imagens) --- */\nfigure { border-radius: 10% !important; }\n.lazyloaded { margin: 0 !important; }\n\n/* --- Absorvido de CA-12 (Menu desktop verde) --- */\n@media (min-width: 992px) {\n  .menu-link-120 {\n    background-color: #4b664a;\n    color: #fff;\n  }\n}\n\n/* ==========================================\n   FLOATING WHATSAPP — Posição por contexto\n   Mobile: acima do bottom nav (60px)\n   PDP Mobile: override em produto.css (acima da sticky bar)\n   Desktop: canto inferior\n   ========================================== */\n\n/* Default mobile: acima do bottom nav (60px nav + 15px gap) */\n#mm-floating-whatsapp {\n  bottom: 75px !important;\n}\n\n/* Back-to-top: acima do WA (75 + 52 WA + 10 gap) */\n.back-to-top {\n  bottom: 137px !important;\n}\n\n/* Desktop: mais baixo (sem bottom nav) */\n@media (min-width: 769px) {\n  #mm-floating-whatsapp {\n    bottom: 24px !important;\n  }\n  .back-to-top {\n    bottom: 86px !important;\n  }\n}\n\n/* Back-to-top — visual, preservar animação do Magazord (right transition) */\n.back-to-top.opened {\n  border-radius: 50% !important;\n  background: #ffffff !important;\n  border: 1.5px solid #dbe1db !important;\n  opacity: 1 !important;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;\n  width: 44px !important;\n  height: 44px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n\n\n/* =============================================\n   FOOTER REBUILD — Hide Magazord + render ours\n   Aplica em TODO o site (não só checkout)\n   ============================================= */\n\n/* Hide Magazord footer + propaganda globally\n   Aplica em TODAS as páginas — substituído por #mm-footer custom */\n#footer-react-app,\nfooter.ra-footer,\n.ra-footer,\n.footer-04,\n.footer-top,\n.footer-middle,\n.footer-about,\n.footer-bottom,\n.footer-checkout-info,\n.horario-atendimento,\n.magazord-logo-container,\n.icon-magazord {\n  display: none !important;\n}\n\n\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&display=swap');\n\n\n#mm-footer {\n  /* Tokens locais (não dependem de #checkout-main-area) */\n  --f-bg:        #1F2A1E;  /* very dark olive */\n  --f-bg-2:      #283228;  /* trust strip */\n  --f-bg-3:      #161E15;  /* legal bottom */\n  --f-fg:        #E5E7EB;\n  --f-fg-2:      #C4CCC4;  /* secondary text — bumped pra contrast */\n  --f-fg-3:      #A0AA9F;  /* meta info — WCAG-safe em #283228 (ratio 5.58) */\n  --f-heading:   #FFFFFF;\n  --f-accent:    #A0BCA0;  /* light olive hover */\n  --f-border:    rgba(255, 255, 255, 0.08);\n\n  --f-sans:      'Poppins', system-ui, -apple-system, sans-serif;\n  --f-serif:     'Libre Baskerville', Georgia, serif;\n\n  font-family: var(--f-sans);\n  background: var(--f-bg);\n  color: var(--f-fg);\n  font-size: 14px;\n  line-height: 1.6;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n#mm-footer * {\n  box-sizing: border-box;\n}\n\n#mm-footer a {\n  color: var(--f-fg);\n  text-decoration: none;\n  transition: color 320ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n#mm-footer a:hover {\n  color: var(--f-accent);\n}\n\n#mm-footer a:focus-visible {\n  outline: 2px solid var(--f-accent);\n  outline-offset: 3px;\n  border-radius: 2px;\n}\n\n\n/* ---- Main grid ---- */\n.mm-footer-main {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 56px 24px 40px;\n}\n\n.mm-footer-grid {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr 1fr 1fr;\n  gap: 48px;\n}\n\n@media (max-width: 1023px) {\n  .mm-footer-main { padding: 40px 20px 32px; }\n  .mm-footer-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: 36px 24px;\n  }\n}\n\n@media (max-width: 540px) {\n  .mm-footer-grid {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n}\n\n\n/* ---- Brand column ---- */\n.mm-footer-brand {\n  max-width: 360px;\n}\n\n.mm-footer-logo {\n  display: inline-block;\n  margin-bottom: 16px;\n  line-height: 0;\n}\n\n.mm-footer-logo img {\n  height: 48px;\n  width: auto;\n  display: block;\n  filter: brightness(0) invert(1);  /* white version of brand logo */\n  opacity: 0.95;\n}\n\n.mm-footer-tagline {\n  color: var(--f-fg-2);\n  font-size: 13px;\n  line-height: 1.6;\n  margin: 0 0 24px;\n  max-width: 320px;\n}\n\n.mm-footer-social {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.mm-footer-social a {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border: 1px solid var(--f-border);\n  border-radius: 9999px;\n  color: var(--f-fg);\n  transition: all 320ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.mm-footer-social a:hover {\n  background: var(--f-accent);\n  border-color: var(--f-accent);\n  color: var(--f-bg);\n  transform: translateY(-2px);\n}\n\n.mm-footer-social svg {\n  width: 16px;\n  height: 16px;\n  display: block;\n}\n\n\n/* ---- Section heading ---- */\n.mm-footer-h {\n  font-family: var(--f-serif);\n  font-size: 16px;\n  font-weight: 400;\n  color: var(--f-heading);\n  margin: 0 0 18px;\n  letter-spacing: -0.01em;\n}\n\n\n/* ---- Lists ---- */\n.mm-footer-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.mm-footer-list li {\n  display: block;\n}\n\n.mm-footer-list a,\n.mm-footer-list > li > span {\n  font-size: 13px;\n  color: var(--f-fg-2);\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  line-height: 1.4;\n  min-height: 44px;\n  padding: 6px 0;\n  width: auto;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mm-footer-list a:hover {\n  color: var(--f-accent);\n}\n\n.mm-footer-list svg {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  color: var(--f-accent);\n}\n\n.mm-footer-meta {\n  color: var(--f-fg-3) !important;\n  font-size: 12px;\n  font-style: italic;\n  min-height: 0 !important;\n  padding-top: 4px !important;\n}\n\n\n/* ---- Trust strip ---- */\n.mm-footer-trust {\n  background: var(--f-bg-2);\n  border-top: 1px solid var(--f-border);\n  border-bottom: 1px solid var(--f-border);\n}\n\n.mm-footer-trust-inner {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  gap: 20px 32px;\n}\n\n.mm-footer-trust-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  color: var(--f-fg);\n  font-size: 13px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n\n.mm-footer-trust-item svg {\n  flex-shrink: 0;\n  width: 22px;\n  height: 22px;\n  color: var(--f-accent);\n}\n\n.mm-footer-trust-item strong {\n  display: block;\n  color: var(--f-heading);\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 1.2;\n}\n\n.mm-footer-trust-item small {\n  display: block;\n  color: var(--f-fg-3);\n  font-size: 12px;\n  font-weight: 400;\n  margin-top: 2px;\n}\n\n.mm-footer-trust-text {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n\n@media (max-width: 1023px) {\n  .mm-footer-trust-inner {\n    padding: 20px;\n    gap: 14px 24px;\n  }\n}\n\n\n/* ---- Bottom strip ---- */\n.mm-footer-bottom {\n  background: var(--f-bg-3);\n}\n\n.mm-footer-bottom-inner {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n\n.mm-footer-legal {\n  font-size: 12px;\n  color: var(--f-fg-3);\n  margin: 0;\n  line-height: 1.6;\n  font-weight: 400;\n}\n\n.mm-footer-legal strong {\n  color: var(--f-fg-2);\n  font-weight: 500;\n}\n\n.mm-footer-payments {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.mm-footer-payments .mm-pay-chip {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 30px;\n  padding: 4px 6px;\n  border-radius: 5px;\n  background: #FFFFFF;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);\n}\n\n.mm-footer-payments .mm-pay-chip img {\n  display: block;\n  max-width: 100%;\n  max-height: 22px;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n}\n\n@media (max-width: 768px) {\n  .mm-footer-bottom-inner {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 24px 20px;\n    gap: 16px;\n  }\n  .mm-footer-legal { text-align: left; }\n}\n\n\n/* ---- Reduced motion ---- */\n@media (prefers-reduced-motion: reduce) {\n  #mm-footer *,\n  #mm-footer *::before,\n  #mm-footer *::after {\n    transition-duration: 0.01ms !important;\n  }\n}\n\n\n/* =============================================\n   HEADER REBUILD — Hide Magazord native header\n   Aplica em TODO o site — substituído por #mm-header custom\n   ============================================= */\n\n#tickerBar,\n.ticker-bar,\nheader.ra-header > .header-top,\nheader.ra-header > .header-middle,\nheader.ra-header > .header-bottom {\n  display: none !important;\n}\n\nheader.ra-header {\n  min-height: 0 !important;\n  padding: 0 !important;\n}\n\nbody {\n  /* 168 = 32 topbar + 88 main + 48 nav (Phase 2) */\n  padding-top: var(--mm-header-total, 168px);\n}\n@media (max-width: 767px) {\n  body {\n    padding-top: var(--mm-header-total-mobile, 92px);\n  }\n}\n\n/* =============================================\n   ATENDIMENTO PAGE — premium block inside .title-content\n   ============================================= */\n.atendimento .title-content h1 {\n  font-family: 'Libre Baskerville', Georgia, serif;\n  font-size: 32px;\n  font-weight: 700;\n  color: #333333;\n  margin: 0 0 12px;\n  letter-spacing: -0.01em;\n}\n.atendimento .title-content .mm-atd-lead {\n  font-size: 16px;\n  line-height: 1.6;\n  color: #333333;\n  margin: 0 0 28px;\n  max-width: 640px;\n  font-family: 'Montserrat', sans-serif;\n}\n.atendimento .title-content .mm-atd-channels {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n  margin-bottom: 40px;\n  max-width: 720px;\n}\n.atendimento .title-content .mm-atd-whatsapp {\n  display: flex !important;\n  align-items: center;\n  gap: 16px;\n  padding: 20px 24px;\n  background: #25D366;\n  color: #ffffff !important;\n  text-decoration: none !important;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  font-family: 'Montserrat', sans-serif;\n  transition: background 0.2s;\n  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.2);\n}\n.atendimento .title-content .mm-atd-whatsapp:hover {\n  background: #1FB755;\n  color: #ffffff !important;\n}\n.atendimento .title-content .mm-atd-whatsapp svg {\n  flex-shrink: 0;\n}\n.atendimento .title-content .mm-atd-whatsapp-label {\n  flex: 1;\n}\n.atendimento .title-content .mm-atd-whatsapp-number {\n  font-size: 14px;\n  opacity: 0.9;\n  letter-spacing: 0.02em;\n  font-weight: 500;\n}\n.atendimento .title-content .mm-atd-info {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  padding: 28px;\n  background: #F2F2F2;\n  border-radius: 8px;\n  border: 1px solid #E6E6E6;\n}\n.atendimento .title-content .mm-atd-info-item strong {\n  display: block;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #4b664a;\n  margin-bottom: 10px;\n}\n.atendimento .title-content .mm-atd-info-item span,\n.atendimento .title-content .mm-atd-info-item a {\n  display: block;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 14px;\n  color: #333333;\n  line-height: 1.8;\n  text-decoration: none;\n}\n.atendimento .title-content .mm-atd-info-item a:hover {\n  color: #4b664a;\n}\n.atendimento .title-content .mm-atd-form-title {\n  font-family: 'Libre Baskerville', Georgia, serif;\n  font-size: 22px;\n  font-weight: 700;\n  color: #333333;\n  margin: 32px 0 16px;\n  padding-top: 32px;\n  border-top: 1px solid #E6E6E6;\n}\n@media (max-width: 600px) {\n  .atendimento .title-content h1 { font-size: 26px; }\n  .atendimento .title-content .mm-atd-info { grid-template-columns: 1fr; padding: 20px; }\n  .atendimento .title-content .mm-atd-whatsapp { flex-direction: column; align-items: flex-start; }\n  .atendimento .title-content .mm-atd-whatsapp-number { margin-left: 0; }\n}\n\n/* =============================================\n   TRUST BAR — informativos-desktop-3 (componente dynamic-banner)\n   Imagem deve ir full-bleed (de cabo a rabo) no desktop.\n   Estrutura real (probed 2026-04-09):\n     #componente-id-XjCRvyXQ0p (container-row, width 1440)\n       └ .swiper.swiper-componente-id-XjCRvyXQ0p.dynamic-banner.container (max-width 1240, margin 0 100px, padding 0 10px)\n           └ .swiper-initialized (width 1220, overflow: hidden) <-- clips any negative-margin trick\n               └ .swiper-wrapper\n                   └ .swiper-slide.banner-img.banner-promo (padding 0 10px)\n                       └ figure\n                           └ img (max-width 100%)\n   Fix: neutralizar max-width, margins e paddings da container hard-coded\n   pelo Magazord e forçar img 100vw.\n   ============================================= */\n#componente-id-XjCRvyXQ0p,\n.componente-id-XjCRvyXQ0p {\n  width: 100vw !important;\n  max-width: 100vw !important;\n  margin-left: calc(50% - 50vw) !important;\n  margin-right: calc(50% - 50vw) !important;\n  padding: 0 !important;\n}\n/* The inner swiper with .container + dynamic-banner class has hard-coded max-width 1240 and margin 100px */\n.swiper-componente-id-XjCRvyXQ0p,\n.swiper-componente-id-XjCRvyXQ0p.container,\n.swiper-componente-id-XjCRvyXQ0p.dynamic-banner {\n  width: 100% !important;\n  max-width: 100% !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n.swiper-componente-id-XjCRvyXQ0p .swiper,\n.swiper-componente-id-XjCRvyXQ0p .swiper-wrapper {\n  width: 100% !important;\n  max-width: 100% !important;\n  overflow: hidden !important; /* Swiper needs overflow:hidden but now container is full-width */\n}\n.swiper-componente-id-XjCRvyXQ0p .swiper-slide,\n.swiper-componente-id-XjCRvyXQ0p .swiper-slide.banner-img,\n.swiper-componente-id-XjCRvyXQ0p .swiper-slide.banner-promo {\n  width: 100% !important;\n  max-width: 100% !important;\n  margin: 0 !important;\n  padding: 0 !important; /* kill the 10px inner gutters */\n  flex-shrink: 0;\n}\n.swiper-componente-id-XjCRvyXQ0p figure {\n  width: 100% !important;\n  max-width: 100% !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  border-radius: 0 !important; /* override the global.css figure border-radius 10% */\n  line-height: 0;\n}\n.swiper-componente-id-XjCRvyXQ0p img {\n  width: 100% !important;\n  max-width: 100% !important;\n  height: auto !important;\n  display: block !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  object-fit: cover;\n}\n";document.head.appendChild(s)})();

  /* Inject CSS: produto.css */
  (function(){if(document.getElementById("mm-produto-css"))return;var s=document.createElement("style");s.id="mm-produto-css";s.textContent="/* =============================================\n   PRODUTO CSS - Madeira Mania (Mobile)\n   Redesign v2 — Validado por agentes UI/UX\n\n   Seletores validados via Playwright em 13/02/2026\n   Todos com !important + prefixo de alta especificidade\n\n   Paleta:\n   - Verde base: #4b664a\n   - Borda: #dbe1db\n   - Borda sutil: #e8ece8\n   - Texto: #1a1a1a\n   - Texto sec: #555\n   - Fundo seção: #f7f8f7\n   ============================================= */\n\n@media (max-width: 768px) {\n\n\n  /* ==========================================\n     0. CONTAINER — Corrigir overflow horizontal\n     ========================================== */\n\n  #produto-react-app {\n    overflow-x: hidden !important;\n  }\n\n\n  /* ==========================================\n     0b. ABSORVIDO DE CA-6 (Remove padding produto)\n     ========================================== */\n\n  .ra-produto {\n    padding-left: 0px !important;\n  }\n\n  /* ==========================================\n     0c. ABSORVIDO DE CA-9 (Arredonda img produto)\n     ========================================== */\n\n  .gallery-main img {\n    border-radius: 2rem !important;\n  }\n\n  .gallery-main .swiper-slide {\n    border-radius: 2rem !important;\n  }\n\n\n  /* ==========================================\n     1. GALERIA - Full-bleed edge-to-edge\n     ========================================== */\n\n  #produto-react-app #block-imagem {\n    margin-left: -8px !important;\n    margin-right: -8px !important;\n    width: calc(100% + 16px) !important;\n  }\n\n  #produto-react-app .gallery-container {\n    max-width: 100vw !important;\n    overflow: hidden !important;\n  }\n\n  #produto-react-app .gallery-main {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n\n  /* Esconder setas de navegação — swipe natural */\n  #produto-react-app .gallery-main > .button-prev,\n  #produto-react-app .gallery-main > .button-next {\n    display: none !important;\n  }\n\n  /* Esconder dots do swiper — substituído por counter textual #mm-gallery-counter */\n  #produto-react-app .swiper-pagination {\n    display: none !important;\n  }\n\n\n  /* ==========================================\n     2. BREADCRUMB\n     ========================================== */\n\n  #produto-react-app .breadcrumb a {\n    color: #888 !important;\n  }\n\n  #produto-react-app .breadcrumb .separator {\n    color: #ccc !important;\n  }\n\n  #produto-react-app .bread-produto .text-secondary-700 {\n    color: #555 !important;\n    font-weight: 500 !important;\n  }\n\n\n  /* ==========================================\n     3. TÍTULO\n     ========================================== */\n\n  #produto-react-app h1.text-xl {\n    font-size: 22px !important;\n    line-height: 1.3 !important;\n    color: #1a1a1a !important;\n    letter-spacing: -0.3px !important;\n  }\n\n  /* Estrelas — discretas quando vazio */\n  #produto-react-app .avaliacoes .star-back {\n    opacity: 0.4 !important;\n  }\n\n\n  /* ==========================================\n     4. PREÇO\n     ========================================== */\n\n  #produto-react-app .preco-principal {\n    max-width: 100% !important;\n  }\n\n  /* Badge desconto — verde sólido */\n  #produto-react-app .porcentagem-desconto,\n  #produto-react-app [class*=\"badge-desconto\"],\n  #produto-react-app [class*=\"desconto-badge\"] {\n    background: #2e7d32 !important;\n    color: #ffffff !important;\n    font-weight: 700 !important;\n    border-radius: 6px !important;\n    padding: 3px 8px !important;\n    font-size: 13px !important;\n  }\n\n  /* Preço antigo */\n  #produto-react-app .preco-de,\n  #produto-react-app [class*=\"preco-de\"] {\n    color: #999 !important;\n    font-size: 14px !important;\n  }\n\n  /* Parcelamento */\n  #produto-react-app .valor-parcelado {\n    font-size: 14px !important;\n    color: #555 !important;\n  }\n\n  /* Link \"Mais formas de pagamento\" */\n  #produto-react-app .form-pag-link {\n    border-color: #dbe1db !important;\n    color: #4b664a !important;\n    border-radius: 8px !important;\n    font-size: 13px !important;\n    font-weight: 500 !important;\n  }\n\n\n  /* ==========================================\n     5. VARIAÇÕES — Swatches + Pills\n     ========================================== */\n\n  /* Swatches de cor — arredondar apenas a imagem */\n  #produto-react-app .variation-color-swatch-image {\n    border-radius: 16px !important;\n  }\n\n  #produto-react-app .variation-pill-label-value {\n    font-weight: 600 !important;\n    color: #1a1a1a !important;\n  }\n\n  /* Pills — formato pill verdadeiro */\n  #produto-react-app .variation-pill {\n    border-radius: 9999px !important;\n    min-width: 80px !important;\n    min-height: 44px !important;\n    font-size: 14px !important;\n    font-weight: 500 !important;\n    display: inline-flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    padding: 0 20px !important;\n    transition: all 0.2s ease !important;\n  }\n\n  /* Pill NÃO selecionado */\n  #produto-react-app .variation-pill[tabindex=\"-1\"] {\n    border: 1.5px solid #dbe1db !important;\n    background: #ffffff !important;\n    color: #333 !important;\n  }\n\n  /* Pill selecionado — manter pill + verde do Magazord */\n  #produto-react-app .variation-pill[tabindex=\"0\"] {\n    border-radius: 9999px !important;\n  }\n\n\n  /* ==========================================\n     6. SEÇÃO DE COMPRA — Layout compacto\n     ========================================== */\n\n  #produto-react-app .informacoes-compra-produto {\n    gap: 8px !important;\n    padding-top: 2px !important;\n    padding-bottom: 12px !important;\n    max-width: 100% !important;\n    box-sizing: border-box !important;\n    overflow-x: hidden !important;\n  }\n\n  /* Eliminar gap do grid wrapper entre galeria e info */\n  #produto-react-app > .grid {\n    gap: 0 !important;\n    padding-top: 0 !important;\n  }\n\n  /* Colapsar primeiro filho vazio do info (breadcrumb oculto no mobile) */\n  #produto-react-app .informacoes-compra-produto > .flex.flex-col.gap-space-16:first-child {\n    gap: 0 !important;\n    margin: 0 !important;\n    padding: 0 !important;\n    display: none !important;\n  }\n\n  /* Separador antes das derivações */\n  #produto-react-app .derivacoes-produto {\n    border-top: 1px solid #f0f0f0 !important;\n    padding-top: 10px !important;\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n\n\n  /* ==========================================\n     7. QUANTIDADE\n     ========================================== */\n\n  #produto-react-app #area-comprar {\n    gap: 12px !important;\n  }\n\n  #produto-react-app .quantidade {\n    border-radius: 10px !important;\n    border-color: #dbe1db !important;\n    height: 44px !important;\n  }\n\n  #produto-react-app .quantidade button,\n  #produto-react-app .quantidade input {\n    min-width: 40px !important;\n    min-height: 42px !important;\n    font-size: 16px !important;\n  }\n\n\n  /* ==========================================\n     8. BOTÕES DE AÇÃO — Linha compacta\n     O JS cria um container #mm-action-row\n     com Favoritos (ícone) + WhatsApp + Share (ícone)\n     ========================================== */\n\n  /* Row criada pelo JS — estilos globais fora do @media */\n\n  /* Favoritos — ícone compacto */\n  #produto-react-app #mm-action-row .salvar-favoritos {\n    flex: 0 0 auto !important;\n    width: auto !important;\n  }\n\n  #produto-react-app #mm-action-row .salvar-favoritos button {\n    width: 46px !important;\n    min-width: 46px !important;\n    height: 42px !important;\n    padding: 0 !important;\n    border: 1.5px solid #dbe1db !important;\n    border-radius: 10px !important;\n    background: #ffffff !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n  }\n\n  #produto-react-app #mm-action-row .salvar-favoritos button svg {\n    width: 20px !important;\n    height: 20px !important;\n    color: #777 !important;\n    stroke: #777 !important;\n  }\n\n  /* Compartilhar — ícone compacto */\n  #produto-react-app #mm-action-row .compartilhar-produto {\n    flex: 0 0 auto !important;\n    width: auto !important;\n  }\n\n  #produto-react-app #mm-action-row .compartilhar-produto button {\n    width: 46px !important;\n    min-width: 46px !important;\n    height: 42px !important;\n    padding: 0 !important;\n    border: 1.5px solid #dbe1db !important;\n    border-radius: 10px !important;\n    background: #ffffff !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n  }\n\n  #produto-react-app #mm-action-row .compartilhar-produto button svg {\n    width: 18px !important;\n    height: 18px !important;\n    color: #777 !important;\n  }\n\n  /* Fallback: se JS não rodou, manter botões decentes */\n  #produto-react-app .salvar-favoritos button {\n    border: 1.5px solid #dbe1db !important;\n    border-radius: 10px !important;\n    color: #555 !important;\n    font-size: 14px !important;\n    font-weight: 500 !important;\n    padding: 10px 16px !important;\n    background: #ffffff !important;\n  }\n\n  #produto-react-app .informacoes-compra-produto > .flex.gap-space-4 {\n    width: 100% !important;\n  }\n\n  #produto-react-app .compartilhar-produto {\n    width: 100% !important;\n    flex: 1 !important;\n  }\n\n  #produto-react-app .compartilhar-produto button {\n    width: 100% !important;\n    border: 1.5px solid #dbe1db !important;\n    border-radius: 10px !important;\n    color: #555 !important;\n    font-size: 14px !important;\n    font-weight: 500 !important;\n    padding: 10px 16px !important;\n    background: #ffffff !important;\n    justify-content: center !important;\n  }\n\n\n  /* ==========================================\n     9. FRETE\n     ========================================== */\n\n  #produto-react-app .calculo-frete {\n    border-top: 1px solid #f0f0f0 !important;\n    padding-top: 14px !important;\n  }\n\n  #produto-react-app .label-frete span {\n    font-weight: 500 !important;\n    color: #1a1a1a !important;\n  }\n\n  #produto-react-app .calculo-frete input {\n    border-radius: 10px !important;\n    border-color: #dbe1db !important;\n    font-size: 15px !important;\n  }\n\n  #produto-react-app .calculo-frete a {\n    color: #4b664a !important;\n    font-size: 13px !important;\n  }\n\n  #produto-react-app .area-calculo button {\n    border-radius: 10px !important;\n    font-weight: 500 !important;\n  }\n\n\n  /* ==========================================\n     10. WHATSAPP FLUTUANTE\n     Mover acima da sticky bar + bottom nav — SÓ NA PDP\n     Sticky bar: bottom 60px, h=79px → topo em 139px\n     Escopo via body:has(#produto-react-app) pra NÃO afetar outras páginas\n     mobile (home, categoria, etc.) onde não há sticky bar.\n     ========================================== */\n\n  body:has(#produto-react-app) #popup-msg-whats {\n    bottom: 152px !important;\n  }\n\n\n  /* ==========================================\n     11. STICKY BAR\n     ========================================== */\n\n  /* PDP Mobile: WA e back-to-top acima da sticky bar\n     Bottom nav: 60px + Sticky bar: 77px = 137px → WA a 152px, BTT a 214px\n     Escopo via body:has(#produto-react-app) — fora da PDP usa o default\n     de global.css (bottom: 75px) acima só do bottom nav. */\n  body:has(#produto-react-app) #mm-floating-whatsapp {\n    bottom: 152px !important;\n  }\n\n  body:has(#produto-react-app) .back-to-top {\n    bottom: 214px !important;\n  }\n\n  #produto-react-app .comprar-fixo {\n    padding: 10px 16px !important;\n    box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.08) !important;\n    background: #ffffff !important;\n    border-top: 1px solid #f0f0f0 !important;\n    z-index: 99 !important;\n    gap: 12px !important;\n  }\n\n  #produto-react-app .comprar-fixo .price-fixed {\n    flex-shrink: 0 !important;\n  }\n\n  #produto-react-app .comprar-fixo > button {\n    border-radius: 12px !important;\n    font-size: 16px !important;\n    font-weight: 600 !important;\n    padding: 14px 24px !important;\n    flex: 1 !important;\n    max-width: 200px !important;\n  }\n\n  /* Preço riscado na sticky bar */\n  #produto-react-app .comprar-fixo #mm-sticky-old-price {\n    text-decoration: line-through !important;\n    color: #999 !important;\n    font-size: 11px !important;\n    line-height: 1.2 !important;\n    display: block !important;\n    margin-bottom: 1px !important;\n  }\n\n\n  /* ==========================================\n     12. DESCRIÇÃO — Tipografia\n     ========================================== */\n\n  #pagina-produto-react-app .descricao-produto.accordion {\n    border-top: 1px solid #f0f0f0 !important;\n  }\n\n  #pagina-produto-react-app .descricao-produto h2,\n  #pagina-produto-react-app .descricao-produto h3 {\n    font-size: 18px !important;\n    color: #1a1a1a !important;\n    margin-top: 20px !important;\n    margin-bottom: 10px !important;\n    line-height: 1.4 !important;\n  }\n\n  #pagina-produto-react-app .descricao-produto p {\n    font-size: 15px !important;\n    line-height: 1.7 !important;\n    color: #444 !important;\n  }\n\n  #pagina-produto-react-app .descricao-produto li {\n    font-size: 15px !important;\n    line-height: 1.7 !important;\n    color: #444 !important;\n  }\n\n\n  /* ==========================================\n     13. ACCORDIONS — Separadores\n     ========================================== */\n\n  #pagina-produto-react-app .recomendacao-ctn-0.accordion,\n  #pagina-produto-react-app .produtos-relacionados.accordion {\n    border-top: 1px solid #f0f0f0 !important;\n  }\n\n  /* Ocultar avaliações vazias (0) em cross-sell e relacionados */\n  .recomendacao-ctn-0 .average-rating[data-value=\"0.00\"],\n  .recomendacao-ctn-0 .average-rating[data-value=\"0.00\"] ~ .qtd-aval,\n  .produtos-relacionados .average-rating[data-value=\"0.00\"],\n  .produtos-relacionados .average-rating[data-value=\"0.00\"] ~ .qtd-aval {\n    display: none !important;\n  }\n\n\n  /* ==========================================\n     14. AVALIAÇÕES — Verde\n     ========================================== */\n\n  .container-avaliacoes button,\n  .container-avaliacoes a[class*=\"btn\"] {\n    background-color: #4b664a !important;\n    border-color: #4b664a !important;\n    border-radius: 12px !important;\n    font-weight: 500 !important;\n  }\n\n\n  /* ==========================================\n     15. TAGS + LINKS\n     ========================================== */\n\n  #pagina-produto-react-app [class*=\"tags\"] a {\n    color: #4b664a !important;\n  }\n\n}\n\n\n/* =============================================\n   REGRAS GLOBAIS (mobile + desktop)\n   Fora do @media para aplicar em todos os viewports\n   ============================================= */\n\n/* Ocultar botão WhatsApp original (substituído por #mm-whatsapp-cta) */\n#produto-react-app .exibe-botao-whatsapp {\n  display: none !important;\n}\n\n/* Ocultar badge de desconto da galeria (% inconsistente com preço PIX) */\n#produto-react-app .tag-1.tag-produto {\n  display: none !important;\n}\n\n/* Reviews reformatados — reset do estilo original */\n#produto-react-app .avaliacoes {\n  display: flex !important;\n  align-items: center !important;\n}\n\n/* WhatsApp CTA inline */\n#produto-react-app #mm-whatsapp-cta {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 8px !important;\n  width: 100% !important;\n  height: 44px !important;\n  padding: 0 16px !important;\n  background: #ffffff !important;\n  color: #4b664a !important;\n  border: 1.5px solid #4b664a !important;\n  border-radius: 10px !important;\n  text-decoration: none !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  font-family: inherit !important;\n  transition: all 0.15s ease !important;\n  cursor: pointer !important;\n  -webkit-tap-highlight-color: transparent !important;\n  box-sizing: border-box !important;\n}\n\n#produto-react-app #mm-whatsapp-cta:hover {\n  background: #f7f8f7 !important;\n}\n\n/* Action row — flex em todos os viewports */\n#produto-react-app #mm-action-row {\n  display: flex !important;\n  gap: 8px !important;\n  align-items: stretch !important;\n  width: 100% !important;\n}\n\n\n/* =============================================\n   DESKTOP OVERRIDES (min-width: 769px)\n   Ajustes para layout 2-colunas do desktop\n   ============================================= */\n\n@media (min-width: 769px) {\n\n  /* Limitar largura dos elementos injetados na coluna de info */\n  #produto-react-app #mm-trust-badges,\n  #produto-react-app #mm-action-row,\n  #produto-react-app #mm-whatsapp-cta,\n  #produto-react-app #mm-frete-progress,\n  #produto-react-app #mm-trust-block,\n  #produto-react-app #mm-inline-payments,\n  #produto-react-app #mm-mini-specs,\n  #produto-react-app #mm-envio-badge,\n  #produto-react-app #mm-stock-indicator,\n  #produto-react-app #mm-brand,\n  #produto-react-app .calculo-frete {\n    max-width: 36rem !important;\n  }\n\n  /* WhatsApp CTA — largura automática no desktop */\n  #produto-react-app #mm-whatsapp-cta {\n    width: fit-content !important;\n    padding: 0 24px !important;\n  }\n\n  /* Action row — layout e botões no desktop */\n  #produto-react-app #mm-action-row {\n    gap: 8px !important;\n  }\n\n  #produto-react-app #mm-action-row .salvar-favoritos,\n  #produto-react-app #mm-action-row .compartilhar-produto {\n    flex: 0 0 auto !important;\n    width: auto !important;\n  }\n\n  #produto-react-app #mm-action-row .salvar-favoritos button,\n  #produto-react-app #mm-action-row .compartilhar-produto button {\n    width: 44px !important;\n    min-width: 44px !important;\n    height: 42px !important;\n    padding: 0 !important;\n    border: 1.5px solid #dbe1db !important;\n    border-radius: 10px !important;\n    background: #ffffff !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    cursor: pointer !important;\n    color: #777 !important;\n  }\n\n  #produto-react-app #mm-action-row .salvar-favoritos button:hover,\n  #produto-react-app #mm-action-row .compartilhar-produto button:hover {\n    background: #f7f8f7 !important;\n  }\n\n  /* Trust badges — alinhar à esquerda no desktop */\n  #produto-react-app #mm-trust-badges {\n    justify-content: flex-start !important;\n  }\n\n  /* Desktop sticky bar */\n  #mm-desktop-sticky button {\n    transition: background 0.15s ease !important;\n  }\n  #mm-desktop-sticky button:hover {\n    background: #3d5340 !important;\n  }\n\n}\n\n\n/* =============================================\n   DESKTOP PDP — Otimizações de conversão\n   Compactar a coluna de info para CTA no fold\n   ============================================= */\n\n@media (min-width: 769px) {\n\n  /* Reduzir gap da área de compra desktop (Magazord default gap-space-40 = 40px) */\n  #produto-react-app .informacoes-compra-produto,\n  #produto-react-app .informacoes-compra-produto.gap-space-40 {\n    gap: 12px !important;\n    row-gap: 12px !important;\n  }\n\n  /* Eliminar gap entre avaliações e próximo elemento */\n  #produto-react-app .informacoes-compra-produto > .flex.flex-col.gap-space-16:first-child {\n    gap: 4px !important;\n  }\n\n  /* Compactar derivações */\n  #produto-react-app .derivacoes-produto {\n    padding-top: 8px !important;\n    padding-bottom: 4px !important;\n  }\n\n  /* Mini specs mais compactos */\n  #produto-react-app #mm-mini-specs {\n    padding: 4px 0 !important;\n  }\n\n  /* Botão comprar — mais destacado */\n  #produto-react-app #area-comprar button[class*=\"bg-primary\"] {\n    font-size: 16px !important;\n    font-weight: 600 !important;\n    padding: 14px 32px !important;\n    border-radius: 12px !important;\n  }\n\n  /* Trust block full-width desktop */\n  #mm-trust-block {\n    max-width: 1200px !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n\n  /* Action row desktop — ícones pequenos, inline */\n  #produto-react-app #mm-action-row {\n    gap: 8px !important;\n  }\n\n  /* WhatsApp CTA desktop — menos destaque, ação secundária */\n  #produto-react-app #mm-whatsapp-cta {\n    height: 38px !important;\n    font-size: 13px !important;\n  }\n\n}\n";document.head.appendChild(s)})();

  /* Inject CSS: variacoes.css */
  (function(){if(document.getElementById("mm-variacoes-css"))return;var s=document.createElement("style");s.id="mm-variacoes-css";s.textContent="/* ============================================\n   VARIÁVEIS CSS CUSTOMIZÁVEIS\n   ============================================ */\n@media (min-width: 1024px) {\n      .h-\\[650px\\],\n      [class*=\"h-[650px]\"] {\n          height: auto !important;\n          max-height: 650px !important;\n      }\n\n      .gallery-main .swiper-slide img {\n          max-height: 650px !important;\n          width: auto !important;\n          height: auto !important;\n          object-fit: contain !important;\n      }\n\n      .gallery-main .swiper,\n      [class*=\"swiper\\]:h-\\[650px\\]\"] .swiper {\n          height: auto !important;\n          max-height: 650px !important;\n      }\n\n      .gallery-main .swiper-slide img {\n          width: 100% !important;\n          height: auto !important;\n          object-fit: contain !important;\n      }\n\n      \n\n      .tags-info-product {\n          position: absolute !important;\n          top: 8px !important;\n          left: 8px !important;\n          z-index: 10 !important;\n          margin: 0 !important;\n      }\n\n      .gallery-main .swiper {\n          height: auto !important;\n      }\n\n      .gallery-main .swiper-wrapper {\n          height: auto !important;\n          align-items: center !important;\n      }\n\n      .gallery-main .swiper-slide {\n          height: auto !important;\n      }\n\n      .gallery-main .swiper-slide img {\n          width: 100% !important;\n          height: auto !important;\n          object-fit: contain !important;\n      }\n\n      .tags-info-product span {\n          border-radius: 999px !important;\n      }\n      .gallery-main .swiper-slide img {\n          object-fit: cover !important;\n      }\n  }\n\n.tag-value {\n    border-radius: 999px !important;\n}\n\n:root {\n    /* Cores principais - MINIMALISTA */\n    --pill-color-selected: rgb(75, 102, 74);\n    --pill-color-selected-hover: rgb(65, 92, 64);\n    --pill-color-normal: #FFFFFF;\n    --pill-color-normal-hover: rgb(249, 250, 251);\n    --pill-color-disabled: rgb(245, 245, 245);\n\n    /* Cores de texto */\n    --pill-text-selected: #FFFFFF;\n    --pill-text-normal: rgb(55, 65, 81);\n    --pill-text-disabled: #9CA3AF;\n\n    /* Borders */\n    --pill-border-selected: rgb(75, 102, 74);\n    --pill-border-normal: rgb(209, 213, 219);\n    --pill-border-disabled: rgb(229, 231, 235);\n\n    /* Espaçamentos */\n    --pill-padding-vertical: 12px;\n    --pill-padding-horizontal: 20px;\n    --pill-gap: 12px;\n    --pill-group-gap: 16px;\n\n    /* Tipografia */\n    --pill-font-size: 15px;\n    --pill-font-weight: 500;\n    --pill-font-weight-selected: 600;\n    --pill-line-height: 1.4;\n\n    /* Border radius - design arredondado */\n    --pill-radius: 40px;\n\n    /* Transições */\n    --pill-transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n\n    /* Shadows */\n    --pill-shadow-normal: 0 1px 2px rgba(0, 0, 0, 0.05);\n    --pill-shadow-hover: 0 2px 4px rgba(0, 0, 0, 0.1);\n    --pill-shadow-selected: 0 2px 4px rgba(75, 102, 74, 0.15);\n    --pill-shadow-focus: 0 0 0 3px rgba(75, 102, 74, 0.2);\n\n    /* ============================================\n       VARIÁVEIS ESPECÍFICAS PARA CORES (IMAGENS)\n       ============================================ */\n    --color-swatch-size: 128px;\n    --color-swatch-size-mobile: 96px;\n    --color-image-size: 128px;\n    --color-image-size-mobile: 96px;\n    --color-border-width: 2px;\n    --color-border-width-selected: 3px;\n    --color-border-radius: 8px;\n}\n\n/* ============================================\n   RESET E BASE STYLES\n   ============================================ */\n.product-variations-pills-container,\n.product-variations-pills-container * {\n    box-sizing: border-box;\n}\n\n/* ============================================\n   GRUPOS DE VARIAÇÃO - LAYOUT MINIMALISTA\n   ============================================ */\n.variation-pill-group {\n    margin-bottom: var(--pill-group-gap);\n}\n\n.variation-pill-group:last-child {\n    margin-bottom: 0;\n}\n\n.variation-pill-label {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    font-size: 14px;\n    font-weight: 400;\n    color: #6B7280;\n    margin-bottom: 12px;\n    letter-spacing: 0.01em;\n}\n\n/* Valor selecionado ao lado do label */\n.variation-pill-label-value {\n    font-weight: 600;\n    color: #1F2937;\n}\n\n.variation-pill-required {\n    color: #EF4444;\n    margin-left: 2px;\n}\n\n/* ============================================\n   CONTAINER DE PILLS E SWATCHES\n   ============================================ */\n.variation-pills-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--pill-gap);\n    align-items: center;\n}\n\n/* ============================================\n   PILLS PADRÃO - ESTRUTURA HTML SEMÂNTICA\n   ============================================ */\n\n/* Input radio escondido mas acessível */\n.variation-pill-input {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0;\n}\n\n/* Label como pill visual (para variações SEM imagem) */\n.variation-pill {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    padding: var(--pill-padding-vertical) var(--pill-padding-horizontal);\n    font-size: var(--pill-font-size);\n    font-weight: var(--pill-font-weight);\n    line-height: var(--pill-line-height);\n    color: var(--pill-text-normal);\n    background-color: var(--pill-color-normal);\n    border: 2px solid var(--pill-border-normal);\n    border-radius: var(--pill-radius);\n    cursor: pointer;\n    transition: var(--pill-transition);\n    user-select: none;\n    box-shadow: var(--pill-shadow-normal);\n    min-height: 44px;\n    text-align: center;\n    white-space: nowrap;\n    position: relative;\n}\n\n.variation-pill:hover {\n    background-color: var(--pill-color-normal-hover);\n    border-color: var(--pill-color-selected);\n    box-shadow: var(--pill-shadow-hover);\n    transform: translateY(-1px);\n}\n\n.variation-pill-input:checked + .variation-pill {\n    background-color: var(--pill-color-selected);\n    border-color: var(--pill-border-selected);\n    color: var(--pill-text-selected);\n    font-weight: var(--pill-font-weight-selected);\n    box-shadow: var(--pill-shadow-selected);\n}\n\n.variation-pill-input:checked + .variation-pill:hover {\n    background-color: var(--pill-color-selected-hover);\n    transform: translateY(0);\n}\n\n.variation-pill-input:focus + .variation-pill {\n    outline: 3px solid var(--pill-color-selected);\n    outline-offset: 2px;\n    box-shadow: var(--pill-shadow-focus);\n}\n\n.variation-pill-input:focus:not(:focus-visible) + .variation-pill {\n    outline: none;\n}\n\n.variation-pill-input:disabled + .variation-pill {\n    background-color: var(--pill-color-disabled);\n    border-color: var(--pill-border-disabled);\n    color: var(--pill-text-disabled);\n    cursor: not-allowed;\n    opacity: 0.6;\n    pointer-events: none;\n}\n\n/* ============================================\n   COLOR SWATCHES - IMAGENS GRANDES\n   ============================================ */\n\n/* Container específico para swatches de cor */\n.variation-swatches-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--pill-gap);\n    align-items: flex-start;\n}\n\n/* Wrapper do swatch (contém imagem + nome no mobile) */\n.variation-color-swatch-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n    width: var(--color-swatch-size);\n    cursor: pointer;\n    position: relative; /* Para o tooltip */\n}\n\n/* Label como swatch de cor (quadrado com imagem) */\n.variation-color-swatch {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--color-swatch-size);\n    height: var(--color-swatch-size);\n    padding: 0;\n    background-color: #FFFFFF;\n    border: var(--color-border-width) solid var(--pill-border-normal);\n    border-radius: var(--color-border-radius);\n    cursor: pointer;\n    transition: var(--pill-transition);\n    user-select: none;\n    position: relative;\n    overflow: hidden; /* Mantém para a imagem */\n}\n\n/* Imagem dentro do swatch */\n.variation-color-swatch-image {\n    width: var(--color-image-size);\n    height: var(--color-image-size);\n    object-fit: cover;\n    display: block;\n    border-radius: calc(var(--color-border-radius) - 2px);\n}\n\n/* Hover state - Desktop only */\n@media (hover: hover) and (pointer: fine) {\n    .variation-color-swatch-wrapper:hover .variation-color-swatch {\n        border-color: var(--pill-color-selected);\n        box-shadow: var(--pill-shadow-hover);\n        transform: scale(1.03);\n    }\n}\n\n/* Selected state */\n.variation-pill-input:checked + .variation-color-swatch-wrapper .variation-color-swatch {\n    border-color: var(--pill-border-selected);\n    border-width: var(--color-border-width-selected);\n    box-shadow: 0 0 0 1px var(--pill-border-selected);\n}\n\n.variation-pill-input:checked + .variation-color-swatch-wrapper:hover .variation-color-swatch {\n    transform: scale(1);\n}\n\n/* Focus state */\n.variation-pill-input:focus + .variation-color-swatch-wrapper .variation-color-swatch {\n    outline: 3px solid var(--pill-color-selected);\n    outline-offset: 2px;\n}\n\n.variation-pill-input:focus:not(:focus-visible) + .variation-color-swatch-wrapper .variation-color-swatch {\n    outline: none;\n}\n\n/* Disabled state */\n.variation-pill-input:disabled + .variation-color-swatch-wrapper {\n    opacity: 0.5;\n    cursor: not-allowed;\n    pointer-events: none;\n}\n\n.variation-pill-input:disabled + .variation-color-swatch-wrapper .variation-color-swatch::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 0;\n    right: 0;\n    height: 2px;\n    background: #EF4444;\n    transform: rotate(-45deg);\n}\n\n/* ============================================\n   NOME DA COR - MOBILE ONLY\n   ============================================ */\n.variation-color-swatch-name {\n    display: none; /* Escondido no desktop */\n    width: 100%;\n    font-size: 11px;\n    font-weight: 500;\n    color: #374151;\n    text-align: center;\n    line-height: 1.3;\n    \n    /* Truncamento de texto */\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n/* Nome da cor quando selecionado */\n.variation-pill-input:checked + .variation-color-swatch-wrapper .variation-color-swatch-name {\n    font-weight: 600;\n    color: var(--pill-color-selected);\n}\n\n/* ============================================\n   TOOLTIP - DESKTOP ONLY (no wrapper, não no swatch)\n   ============================================ */\n@media (hover: hover) and (pointer: fine) {\n    .variation-color-swatch-wrapper[data-tooltip] {\n        position: relative;\n    }\n\n    .variation-color-swatch-wrapper[data-tooltip]::before {\n        content: attr(data-tooltip);\n        position: absolute;\n        bottom: calc(100% + 8px);\n        left: 50%;\n        transform: translateX(-50%) translateY(4px);\n        padding: 8px 14px;\n        background-color: #1F2937;\n        color: #FFFFFF;\n        font-size: 13px;\n        font-weight: 500;\n        white-space: nowrap;\n        border-radius: 6px;\n        opacity: 0;\n        visibility: hidden;\n        transition: all 0.2s ease;\n        z-index: 1000;\n        pointer-events: none;\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n    }\n\n    .variation-color-swatch-wrapper[data-tooltip]::after {\n        content: '';\n        position: absolute;\n        bottom: calc(100% + 2px);\n        left: 50%;\n        transform: translateX(-50%) translateY(4px);\n        border: 6px solid transparent;\n        border-top-color: #1F2937;\n        opacity: 0;\n        visibility: hidden;\n        transition: all 0.2s ease;\n        z-index: 1000;\n    }\n\n    .variation-color-swatch-wrapper[data-tooltip]:hover::before,\n    .variation-color-swatch-wrapper[data-tooltip]:hover::after {\n        opacity: 1;\n        visibility: visible;\n        transform: translateX(-50%) translateY(0);\n    }\n}\n\n/* ============================================\n   BADGE DE INDISPONÍVEL\n   ============================================ */\n.variation-pill-badge {\n    display: inline-block;\n    font-size: 10px;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    margin-left: 6px;\n    padding: 2px 6px;\n    background: rgba(239, 68, 68, 0.1);\n    color: #EF4444;\n    border-radius: 12px;\n}\n\n/* ============================================\n   LOADING STATE\n   ============================================ */\n.variation-pill-group.is-loading {\n    position: relative;\n    pointer-events: none;\n    opacity: 0.6;\n}\n\n.variation-pill-group.is-loading::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 20px;\n    height: 20px;\n    margin: -10px 0 0 -10px;\n    border: 3px solid var(--pill-color-normal);\n    border-top-color: var(--pill-color-selected);\n    border-radius: 50%;\n    animation: pill-spin 0.8s linear infinite;\n}\n\n@keyframes pill-spin {\n    to { transform: rotate(360deg); }\n}\n\n/* ============================================\n   RESPONSIVE DESIGN - MOBILE\n   ============================================ */\n@media (max-width: 767px) {\n    .product-variations-pills-container {\n        margin: 16px 0;\n    }\n\n    .variation-pill {\n        font-size: 14px;\n        padding: 10px 16px;\n        min-height: 44px;\n    }\n\n    .variation-pills-container,\n    .variation-swatches-container {\n        gap: 10px;\n    }\n\n    /* Swatches menores no mobile */\n    .variation-color-swatch-wrapper {\n        width: var(--color-swatch-size-mobile);\n    }\n\n    .variation-color-swatch {\n        width: var(--color-swatch-size-mobile);\n        height: var(--color-swatch-size-mobile);\n    }\n\n    .variation-color-swatch-image {\n        width: var(--color-image-size-mobile);\n        height: var(--color-image-size-mobile);\n    }\n\n    /* Mostrar nome da cor no mobile */\n    .variation-color-swatch-name {\n        display: block;\n    }\n\n    /* Esconder tooltip no mobile (usa o nome visível) */\n    .variation-color-swatch-wrapper[data-tooltip]::before,\n    .variation-color-swatch-wrapper[data-tooltip]::after {\n        display: none !important;\n    }\n}\n\n/* ============================================\n   ACESSIBILIDADE\n   ============================================ */\n.variation-pill-sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0;\n}\n\n@media (prefers-contrast: high) {\n    .variation-pill,\n    .variation-color-swatch {\n        border-width: 3px;\n    }\n}\n\n@media (prefers-reduced-motion: reduce) {\n    *,\n    *::before,\n    *::after {\n        animation-duration: 0.01ms !important;\n        animation-iteration-count: 1 !important;\n        transition-duration: 0.01ms !important;\n    }\n}\n\n/* ============================================\n   ESCONDER ELEMENTOS ANTIGOS\n   ============================================ */\n.sugestoes-cores,\n.produtos-sugeridos,\n.area-produtos-sugeridos,\n#produto-react-app > div > div.informacoes-compra-produto.flex.flex-col.p-4.relative.gap-space-40 > div.flex.flex-col.gap-space-16 > div.flex.flex-col > div.text-secondary-700.text-xs.md\\:text-sm {\n    display: none !important;\n    visibility: hidden !important;\n}";document.head.appendChild(s)})();

  /* Inject CSS: cart-sheet.css */
  (function(){if(document.getElementById("mm-cart-sheet-css"))return;var s=document.createElement("style");s.id="mm-cart-sheet-css";s.textContent="/* =============================================\n   CART MODAL (mobile + desktop) — Override Magazord\n\n   DOM real (confirmado via Playwright + route intercept):\n\n   MOBILE (.z-[9999] overlay):\n     #cart-preview-area > .z-[9999] > .relative.z-[10]\n       > .border-b.border-solid  ← header\n       > .content-cart > .cart-item  ← items\n       > .border-t.border-solid  ← footer (.title.boleto + .valor-pix + .finalizar-compra)\n\n   DESKTOP (.carrinho-rapido-ctn drawer):\n     #cart-preview-area > .carrinho-rapido-ctn > .carrinho-rapido\n       > .top-carrinho.bg-cor-base  ← header\n         > .meu-carrinho > a \"Meu carrinho\" + .icon-arrow-bottom\n       > .content-cart\n         > .cart-items > .cart-item  ← items\n         > .area-finalizar-compra  ← footer\n           > .formas.forma-pix (icon + \"PIX\" + .valor.valor-pix)\n           > .formas.forma-cartao (icon + \"Cartão\" + .valor.valor-cartao)\n           > a > button.finalizar-compra\n\n   Estratégia:\n     - #cart-preview-area ancestor comum → usado como scope principal\n     - Rules específicas para estrutura diferente mobile vs desktop\n     - .content-cart + .finalizar-compra são classes compartilhadas\n\n   APIs Magazord (referência):\n     - Zord.checkout.adicionaQuantidade(dataId)\n     - Zord.checkout.removeQuantidade(dataId, true)\n     - Zord.checkout.deleteItem(dataId)\n     - .cart-remove-item[data-id] = ID interno do item\n   ============================================= */\n\n/* ==========================================================================\n   TOPBAR: esconder topbar do site quando cart overlay está aberto (mobile)\n   ========================================================================== */\n@media (max-width: 768px) {\n  header:has(.z-\\[9999\\].translate-x-\\[0\\] .content-cart) > .z-40:not(.fixed) {\n    display: none !important;\n  }\n}\n\n/* ==========================================================================\n   DRAWER / SHEET: background cinza checkout\n\n   IMPORTANTE: não usar selector `#cart-preview-area > div` porque existem\n   DOIS elementos com id=cart-preview-area (bug do Magazord) e um deles é\n   o wrapper do ícone do carrinho no header, cujo filho direto é o scrim\n   fullscreen (.fixed.w-screen.h-screen.bg-black/40) que abre junto com o\n   drawer. Pintar esse div cinza cobria a tela inteira.\n\n   Escopamos só nos containers REAIS do drawer.\n   ========================================================================== */\n.content-cart,\n.content-cart > .cart-item,\n.carrinho-rapido-ctn,\n.carrinho-rapido-ctn .carrinho-rapido {\n  background: #F2F2F2 !important;\n}\n\n/* Mobile overlay (.z-[9999]) — esse wrapper tem o panel branco como filho */\n.z-\\[9999\\] .relative.z-\\[10\\] {\n  background: #F2F2F2 !important;\n}\n\n/* ==========================================================================\n   HEADER: título serif + botão fechar redondo\n   ========================================================================== */\n#cart-preview-area .border-b.border-solid {\n  background: #F2F2F2 !important;\n  border-bottom: none !important;\n  padding: 18px 20px !important;\n  min-height: 60px !important;\n}\n\n#cart-preview-area .border-b.border-solid > button,\n#cart-preview-area .border-b.border-solid > button span {\n  font-family: 'Libre Baskerville', Georgia, serif !important;\n  font-size: 18px !important;\n  font-weight: 700 !important;\n  color: #121212 !important;\n  letter-spacing: -0.01em !important;\n  background: transparent !important;\n  box-shadow: none !important;\n  padding: 0 !important;\n}\n#cart-preview-area .border-b.border-solid > button svg {\n  display: none !important;\n}\n\n/* Fechar — círculo branco com sombra (touch target 44x44) */\n#cart-preview-area .border-b.border-solid > div {\n  width: 44px !important;\n  height: 44px !important;\n  background: #FFFFFF !important;\n  border: 1px solid #E7E7E7 !important;\n  border-radius: 50% !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.06) !important;\n  cursor: pointer !important;\n  padding: 0 !important;\n  transition: border-color 150ms, box-shadow 150ms !important;\n}\n#cart-preview-area .border-b.border-solid > div:hover {\n  border-color: #4B664A !important;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;\n}\n#cart-preview-area .border-b.border-solid > div:focus-visible {\n  outline: 2px solid #4B664A !important;\n  outline-offset: 2px !important;\n}\n#cart-preview-area .border-b.border-solid > div span {\n  display: none !important;\n}\n#cart-preview-area .border-b.border-solid > div svg {\n  width: 14px !important;\n  height: 14px !important;\n}\n\n/* ==========================================================================\n   LISTA: padding + gap\n   ========================================================================== */\n.content-cart {\n  padding: 14px 14px 16px !important;\n  gap: 12px !important;\n}\n\n/* ==========================================================================\n   CARD DO ITEM: white surface com border soft, shadow gentil, hover lift\n   Referência visual: .mm-item do /checkout/cart, mas adaptado pro drawer\n   (espaço mais restrito, 390-430px de largura).\n   ========================================================================== */\n.content-cart .cart-item {\n  background: #FFFFFF !important;\n  border: 1px solid #F0F0F0 !important;\n  border-radius: 14px !important;\n  padding: 14px !important;\n  box-shadow: 0 1px 2px rgba(17, 24, 39, 0.04) !important;\n  position: relative !important;\n  transition:\n    box-shadow 260ms cubic-bezier(0.16, 1, 0.3, 1),\n    border-color 260ms cubic-bezier(0.16, 1, 0.3, 1) !important;\n  animation: mm-cart-item-in 420ms cubic-bezier(0.16, 1, 0.3, 1) both !important;\n}\n.content-cart .cart-item:hover {\n  border-color: #E0E0E0 !important;\n  box-shadow: 0 3px 10px rgba(17, 24, 39, 0.05) !important;\n}\n\n/* Stagger entrada dos cart items — 50ms deltas (MD motion guidelines) */\n.content-cart .cart-item:nth-child(1) { animation-delay: 40ms !important; }\n.content-cart .cart-item:nth-child(2) { animation-delay: 90ms !important; }\n.content-cart .cart-item:nth-child(3) { animation-delay: 140ms !important; }\n.content-cart .cart-item:nth-child(4) { animation-delay: 190ms !important; }\n.content-cart .cart-item:nth-child(5) { animation-delay: 240ms !important; }\n.content-cart .cart-item:nth-child(6) { animation-delay: 290ms !important; }\n\n@keyframes mm-cart-item-in {\n  from { opacity: 0; transform: translateY(8px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n/* Thumbnail — 90×90 com bg soft e border radius consistente */\n.content-cart .cart-item .prod-img {\n  width: 90px !important;\n  height: 90px !important;\n  min-width: 90px !important;\n  max-width: 90px !important;\n  border-radius: 10px !important;\n  overflow: hidden !important;\n  background: #FAFAFA !important;\n  border: 1px solid #F3F4F6 !important;\n  flex-shrink: 0 !important;\n}\n.content-cart .cart-item .prod-img figure {\n  width: 100% !important;\n  height: 100% !important;\n  margin: 0 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n.content-cart .cart-item .prod-img img,\n.content-cart .cart-item .prod-img a img {\n  width: 100% !important;\n  height: 100% !important;\n  object-fit: cover !important;\n  transition: transform 480ms cubic-bezier(0.16, 1, 0.3, 1) !important;\n}\n.content-cart .cart-item:hover .prod-img img {\n  transform: scale(1.04) !important;\n}\n\n/* Nome do produto — Poppins 15 medium, 2-line clamp */\n.content-cart .cart-item .prod-nome,\n.content-cart .cart-item .prod-nome a {\n  font-family: 'Poppins', system-ui, sans-serif !important;\n  font-size: 15px !important;\n  font-weight: 500 !important;\n  color: #121212 !important;\n  letter-spacing: -0.005em !important;\n  line-height: 1.35 !important;\n  display: -webkit-box !important;\n  -webkit-line-clamp: 2 !important;\n  -webkit-box-orient: vertical !important;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  margin: 0 !important;\n  text-decoration: none !important;\n  max-width: 100% !important;\n  white-space: normal !important;\n}\n/* Magazord usa class=\"truncate\" no desktop que força white-space:nowrap — override */\n.content-cart .cart-item .prod-nome.truncate {\n  white-space: normal !important;\n  overflow: hidden !important;\n  text-overflow: clip !important;\n}\n\n.content-cart .cart-item .derivacao {\n  display: none !important;\n}\n\n/* Valor — Poppins 15 bold + tabular-nums */\n.content-cart .cart-item .valor,\n.content-cart .cart-item .valor span {\n  font-family: 'Poppins', system-ui, sans-serif !important;\n  font-size: 15px !important;\n  font-weight: 700 !important;\n  color: #121212 !important;\n  font-variant-numeric: tabular-nums !important;\n  letter-spacing: -0.01em !important;\n  white-space: nowrap !important;\n}\n\n/* ==========================================================================\n   FOOTER: seção branca com radius top\n   ========================================================================== */\n#cart-preview-area .border-t.border-solid {\n  background: #FFFFFF !important;\n  border-top: 1px solid #E7E7E7 !important;\n  border-radius: 16px 16px 0 0 !important;\n  padding: 20px 22px 22px !important;\n  box-shadow: 0 -6px 20px rgba(0, 0, 0, 0.04) !important;\n}\n\n/* Label \"Valor total\" */\n#cart-preview-area .title.boleto {\n  font-family: 'Poppins', system-ui, sans-serif !important;\n  font-size: 11px !important;\n  color: #4B5563 !important;\n  font-weight: 500 !important;\n  text-transform: uppercase !important;\n  letter-spacing: 0.06em !important;\n}\n\n/* Valor total — Libre Baskerville serif + tabular-nums */\n#cart-preview-area .valor-pix,\n#cart-preview-area .valor-pix span {\n  font-family: 'Libre Baskerville', Georgia, serif !important;\n  font-size: 24px !important;\n  font-weight: 700 !important;\n  color: #121212 !important;\n  letter-spacing: -0.01em !important;\n  font-variant-numeric: tabular-nums !important;\n}\n\n/* Texto de parcelamento */\n#cart-preview-area .installment-total {\n  font-family: 'Poppins', system-ui, sans-serif !important;\n  font-size: 12px !important;\n  color: #4B5563 !important;\n  font-weight: 400 !important;\n  margin-top: 2px !important;\n  font-variant-numeric: tabular-nums !important;\n}\n\n/* ==========================================================================\n   CTA Finalizar — pill olive, full-width\n   ========================================================================== */\n#cart-preview-area .finalizar-compra {\n  background: #1b7a45 !important;\n  color: #FFFFFF !important;\n  border: none !important;\n  border-radius: 999px !important;\n  padding: 14px 24px !important;\n  font-family: 'Poppins', system-ui, sans-serif !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.01em !important;\n  text-transform: none !important;\n  width: 100% !important;\n  text-align: center !important;\n  margin-top: 12px !important;\n  box-shadow: 0 4px 12px rgba(27, 122, 69, 0.22) !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  transition: background-color 200ms, box-shadow 200ms, transform 150ms !important;\n}\n#cart-preview-area .finalizar-compra:hover {\n  background: #155a33 !important;\n  box-shadow: 0 6px 20px rgba(27, 122, 69, 0.28) !important;\n}\n#cart-preview-area .finalizar-compra:active {\n  transform: scale(0.98) !important;\n}\n#cart-preview-area .finalizar-compra:focus-visible {\n  outline: 2px solid #4B664A !important;\n  outline-offset: 3px !important;\n}\n#cart-preview-area .finalizar-compra span {\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  color: #FFFFFF !important;\n}\n#cart-preview-area .finalizar-compra svg path {\n  fill: #FFFFFF !important;\n}\n\n/* ==========================================================================\n   QTD CONTROLS + TRASH — mesma identidade visual do /checkout/cart\n   (.mm-qty / .mm-qty-btn / .mm-qty-value / .mm-item-remove em checkout-cro.css)\n\n   O JS cart-sheet.js injeta esta estrutura dentro de .qtd-value:\n     .mm-qty-wrap\n       └─ button.qty-btn-minus (SVG)\n       └─ span.qty-display\n       └─ button.qty-btn-plus (SVG)\n\n   O trash (.cart-remove-item) continua onde o Magazord renderiza nativamente:\n     - Mobile: dentro do .qtd-value (sibling dos botões)\n     - Desktop: em .prod-remove (sibling do main row)\n   ========================================================================== */\n\n/* Esconde os elementos nativos do Magazord que o nosso JS vai substituir */\n.content-cart .cart-item .qtd-value > .quantidade,\n.content-cart .cart-item .qtd-value > span:not(.qty-display):not(.cart-remove-item):not(.valor):not(.mm-qty-wrap) {\n  display: none !important;\n}\n\n/* Container .qtd-value — row única com ordem forçada:\n   qty pill  →  trash  →  preço (push right via margin-left: auto)  */\n.content-cart .cart-item .qtd-value {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: flex-start !important;\n  gap: 8px !important;\n  width: 100% !important;\n  margin-top: 10px !important;\n}\n\n/* Forçar ordem visual explicitamente (independente da ordem do DOM) */\n.content-cart .cart-item .qtd-value > .mm-qty-wrap    { order: 1 !important; }\n.content-cart .cart-item .qtd-value > .cart-remove-item { order: 2 !important; }\n.content-cart .cart-item .qtd-value > .valor          { order: 3 !important; margin-left: auto !important; }\n\n/* Pill wrap com border (replica .mm-qty do /checkout/cart) */\n.content-cart .cart-item .mm-qty-wrap {\n  display: inline-flex !important;\n  align-items: center !important;\n  border: 1px solid #E7E7E7 !important;\n  border-radius: 9999px !important;\n  padding: 4px !important;\n  background: #FFFFFF !important;\n  transition: border-color 320ms cubic-bezier(0.16, 1, 0.3, 1) !important;\n}\n.content-cart .cart-item .mm-qty-wrap:hover {\n  border-color: #D1D5DB !important;\n}\n\n/* Botões minus/plus (replica .mm-qty-btn 36×36 do /checkout/cart)\n   Wrapper pill tem padding 4px → 36 + 8 = 44 altura total (Apple HIG min). */\n.content-cart .qty-btn-minus,\n.content-cart .qty-btn-plus {\n  width: 36px !important;\n  height: 36px !important;\n  min-width: 36px !important;\n  min-height: 36px !important;\n  border: none !important;\n  background: transparent !important;\n  border-radius: 9999px !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  color: #374151 !important;\n  cursor: pointer !important;\n  padding: 0 !important;\n  font-family: 'Poppins', system-ui, sans-serif !important;\n  transition: background-color 260ms cubic-bezier(0.16, 1, 0.3, 1),\n              color 260ms cubic-bezier(0.16, 1, 0.3, 1) !important;\n  -webkit-tap-highlight-color: transparent !important;\n  flex: none !important;\n}\n.content-cart .qty-btn-minus svg,\n.content-cart .qty-btn-plus svg {\n  width: 14px !important;\n  height: 14px !important;\n  display: block !important;\n  flex-shrink: 0 !important;\n}\n.content-cart .qty-btn-minus:hover:not(:disabled),\n.content-cart .qty-btn-plus:hover:not(:disabled) {\n  background: #F2F2F2 !important;\n  color: #121212 !important;\n}\n.content-cart .qty-btn-minus:active:not(:disabled),\n.content-cart .qty-btn-plus:active:not(:disabled) {\n  transform: scale(0.92) !important;\n}\n.content-cart .qty-btn-minus:disabled,\n.content-cart .qty-btn-plus:disabled {\n  opacity: 0.35 !important;\n  cursor: not-allowed !important;\n}\n.content-cart .qty-btn-minus:focus-visible,\n.content-cart .qty-btn-plus:focus-visible {\n  outline: 2px solid #4B664A !important;\n  outline-offset: 2px !important;\n}\n\n/* Display numérico (replica .mm-qty-value) */\n.content-cart .qty-display {\n  min-width: 28px !important;\n  text-align: center !important;\n  font-family: 'Poppins', system-ui, sans-serif !important;\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  color: #121212 !important;\n  font-variant-numeric: tabular-nums !important;\n  user-select: none !important;\n  padding: 0 6px !important;\n}\n\n/* Kill Magazord .prod-remove hover:bg-cor-base-light (verde olive no hover).\n   O JS move o .cart-remove-item pra fora do .prod-remove no desktop, mas\n   mantemos esse guard caso o wrapper ainda exista. */\n.content-cart .cart-item .prod-remove,\n.content-cart .cart-item .prod-remove:hover {\n  background: transparent !important;\n  color: inherit !important;\n  display: none !important;\n}\n\n/* Trash icon — replica .mm-item-remove (44pt hit area, minimalist, red on hover) */\n.content-cart .cart-item .cart-remove-item,\n.content-cart .cart-item .prod-remove .cart-remove-item {\n  position: static !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  background: transparent !important;\n  border: none !important;\n  color: #6B7280 !important;\n  cursor: pointer !important;\n  padding: 0 !important;\n  width: 40px !important;\n  height: 40px !important;\n  min-width: 40px !important;\n  min-height: 40px !important;\n  border-radius: 9999px !important;\n  transition: color 320ms cubic-bezier(0.16, 1, 0.3, 1),\n              background-color 320ms cubic-bezier(0.16, 1, 0.3, 1) !important;\n  -webkit-tap-highlight-color: transparent !important;\n  opacity: 1 !important;\n  top: auto !important;\n  right: auto !important;\n  flex: none !important;\n}\n.content-cart .cart-item .cart-remove-item:hover {\n  color: #DC2626 !important;\n  background: rgba(220, 38, 38, 0.08) !important;\n}\n.content-cart .cart-item .cart-remove-item:focus-visible {\n  outline: 2px solid #4B664A !important;\n  outline-offset: 2px !important;\n}\n.content-cart .cart-item .cart-remove-item svg {\n  width: 16px !important;\n  height: 16px !important;\n  display: block !important;\n  flex-shrink: 0 !important;\n}\n.content-cart .cart-item .cart-remove-item svg path,\n.content-cart .cart-item .cart-remove-item svg polyline {\n  stroke: currentColor !important;\n  fill: none !important;\n}\n\n/* Empty state */\n.content-cart .box-empty-cart {\n  padding: 48px 20px !important;\n}\n.content-cart .empty-cart {\n  font-family: 'Poppins', system-ui, sans-serif !important;\n  font-size: 14px !important;\n  color: #4B5563 !important;\n  font-weight: 500 !important;\n}\n\n/* ==========================================================================\n   DELETE CONFIRM MODAL (mobile sheet bottom-up)\n   ========================================================================== */\n.mm-confirm-overlay {\n  position: fixed !important;\n  inset: 0 !important;\n  z-index: 99999 !important;\n  background: rgba(0,0,0,0.4) !important;\n  display: flex !important;\n  align-items: flex-end !important;\n  justify-content: center !important;\n  animation: mmConfirmIn 0.2s ease !important;\n  -webkit-backdrop-filter: blur(4px) !important;\n  backdrop-filter: blur(4px) !important;\n}\n@keyframes mmConfirmIn { from { opacity: 0; } to { opacity: 1; } }\n@keyframes mmSlideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }\n\n.mm-confirm-card {\n  background: #FFFFFF !important;\n  border-radius: 24px 24px 0 0 !important;\n  padding: 28px 24px !important;\n  padding-bottom: max(28px, env(safe-area-inset-bottom)) !important;\n  width: 100% !important;\n  max-width: 420px !important;\n  animation: mmSlideUp 0.25s ease !important;\n}\n.mm-confirm-title {\n  font-family: 'Libre Baskerville', Georgia, serif !important;\n  font-size: 17px !important;\n  font-weight: 700 !important;\n  color: #121212 !important;\n  margin: 0 0 6px !important;\n}\n.mm-confirm-desc {\n  font-family: 'Poppins', system-ui, sans-serif !important;\n  font-size: 14px !important;\n  color: #4B5563 !important;\n  margin: 0 0 20px !important;\n  line-height: 1.4 !important;\n}\n.mm-confirm-actions { display: flex !important; gap: 10px !important; }\n.mm-confirm-btn {\n  flex: 1 !important;\n  height: 48px !important;\n  border: none !important;\n  border-radius: 14px !important;\n  font-family: 'Poppins', system-ui, sans-serif !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  cursor: pointer !important;\n  -webkit-tap-highlight-color: transparent !important;\n}\n.mm-confirm-btn:active { transform: scale(0.97) !important; }\n.mm-confirm-btn-cancel { background: #F3F4F6 !important; color: #121212 !important; }\n.mm-confirm-btn-delete { background: #EF4444 !important; color: #FFFFFF !important; }\n\n/* ==========================================================================\n   DESKTOP: drawer .carrinho-rapido-ctn tem estrutura diferente do mobile\n   - Header: .top-carrinho (não .border-b.border-solid)\n   - Footer: .area-finalizar-compra (não .border-t.border-solid)\n   - Linhas PIX/Cartão: .formas.forma-pix + .formas.forma-cartao\n   ========================================================================== */\n@media (min-width: 769px) {\n\n  /* Drawer container — background cinza como checkout */\n  .carrinho-rapido-ctn,\n  .carrinho-rapido-ctn .carrinho-rapido,\n  .carrinho-rapido-ctn .content-cart {\n    background: #F2F2F2 !important;\n  }\n\n  /* HEADER — substitui faixa olive por seção cinza com título serif */\n  .carrinho-rapido-ctn .top-carrinho {\n    background: #F2F2F2 !important;\n    padding: 18px 22px !important;\n    position: relative !important;\n  }\n\n  .carrinho-rapido-ctn .top-carrinho .meu-carrinho {\n    align-items: center !important;\n  }\n\n  .carrinho-rapido-ctn .top-carrinho .meu-carrinho > a {\n    font-family: 'Libre Baskerville', Georgia, serif !important;\n    font-size: 18px !important;\n    font-weight: 700 !important;\n    color: #121212 !important;\n    letter-spacing: -0.01em !important;\n    text-transform: none !important;\n    text-decoration: none !important;\n  }\n\n  /* Ícone close — círculo branco (touch target 44x44) */\n  .carrinho-rapido-ctn .top-carrinho .icon-arrow-bottom {\n    width: 44px !important;\n    height: 44px !important;\n    background: #FFFFFF !important;\n    border: 1px solid #E7E7E7 !important;\n    border-radius: 50% !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    box-shadow: 0 2px 8px rgba(0,0,0,0.06) !important;\n    color: #121212 !important;\n    cursor: pointer !important;\n    transition: border-color 150ms, box-shadow 150ms !important;\n  }\n  .carrinho-rapido-ctn .top-carrinho .icon-arrow-bottom:hover {\n    border-color: #4B664A !important;\n    box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;\n  }\n  .carrinho-rapido-ctn .top-carrinho .icon-arrow-bottom:focus-visible {\n    outline: 2px solid #4B664A !important;\n    outline-offset: 2px !important;\n  }\n  .carrinho-rapido-ctn .top-carrinho .icon-arrow-bottom svg {\n    width: 14px !important;\n    height: 14px !important;\n    fill: #121212 !important;\n  }\n  .carrinho-rapido-ctn .top-carrinho .icon-arrow-bottom svg path {\n    fill: #121212 !important;\n    stroke: #121212 !important;\n  }\n\n  /* LISTA de items */\n  .carrinho-rapido-ctn .content-cart .cart-items {\n    background: #F2F2F2 !important;\n    padding: 8px 12px !important;\n    max-height: calc(100vh - 340px) !important;\n  }\n\n  /* CARD do item */\n  .carrinho-rapido-ctn .content-cart .cart-item {\n    background: #FFFFFF !important;\n    border: 1px solid #E7E7E7 !important;\n    border-radius: 14px !important;\n    margin: 8px 0 !important;\n    padding: 14px !important;\n    min-height: 100px !important;\n    box-shadow: none !important;\n  }\n\n  .carrinho-rapido-ctn .content-cart .cart-item .prod-img {\n    width: 76px !important;\n    height: 76px !important;\n    min-width: 76px !important;\n    border-radius: 10px !important;\n    border: 1px solid #F0F0F0 !important;\n  }\n\n  .carrinho-rapido-ctn .content-cart .cart-item .prod-nome a {\n    font-family: 'Poppins', system-ui, sans-serif !important;\n    font-size: 14px !important;\n    font-weight: 600 !important;\n    color: #121212 !important;\n    text-decoration: none !important;\n  }\n\n  /* Derivacao escondida globalmente (.content-cart .cart-item .derivacao no\n     bloco base) — Madeira Mania não usa sistema de variantes nativo, então\n     \"Único: Único\" é ruído visual. */\n\n  .carrinho-rapido-ctn .content-cart .cart-item .valor {\n    font-family: 'Poppins', system-ui, sans-serif !important;\n    font-size: 14px !important;\n    font-weight: 700 !important;\n    color: #121212 !important;\n  }\n\n  /* FOOTER — seção branca com radius top */\n  .carrinho-rapido-ctn .area-finalizar-compra {\n    background: #FFFFFF !important;\n    border-top: 1px solid #E7E7E7 !important;\n    border-radius: 16px 16px 0 0 !important;\n    padding: 16px 22px 20px !important;\n    box-shadow: 0 -6px 20px rgba(0, 0, 0, 0.04) !important;\n  }\n\n  /* Linhas PIX / Cartão */\n  .carrinho-rapido-ctn .area-finalizar-compra .formas {\n    border: none !important;\n    padding: 6px 0 !important;\n  }\n  .carrinho-rapido-ctn .area-finalizar-compra .formas .tittle {\n    font-family: 'Poppins', system-ui, sans-serif !important;\n    font-size: 12px !important;\n    color: #4B5563 !important;\n    font-weight: 500 !important;\n    text-transform: uppercase !important;\n    letter-spacing: 0.04em !important;\n  }\n\n  /* Valor destaque — serif para o total + tabular-nums */\n  .carrinho-rapido-ctn .area-finalizar-compra .valor.valor-pix,\n  .carrinho-rapido-ctn .area-finalizar-compra .valor.valor-pix span {\n    font-family: 'Libre Baskerville', Georgia, serif !important;\n    font-size: 22px !important;\n    font-weight: 700 !important;\n    color: #121212 !important;\n    letter-spacing: -0.01em !important;\n    font-variant-numeric: tabular-nums !important;\n  }\n\n  .carrinho-rapido-ctn .area-finalizar-compra .valor.valor-cartao,\n  .carrinho-rapido-ctn .area-finalizar-compra .valor.valor-cartao div {\n    font-family: 'Poppins', system-ui, sans-serif !important;\n    font-size: 14px !important;\n    font-weight: 600 !important;\n    color: #4B5563 !important;\n    font-variant-numeric: tabular-nums !important;\n  }\n\n  /* CTA Finalizar — pill olive como /checkout/cart */\n  .carrinho-rapido-ctn .finalizar-compra {\n    background: #1b7a45 !important;\n    color: #FFFFFF !important;\n    border: none !important;\n    border-radius: 999px !important;\n    padding: 14px 24px !important;\n    font-family: 'Poppins', system-ui, sans-serif !important;\n    font-size: 15px !important;\n    font-weight: 600 !important;\n    text-transform: none !important;\n    width: 100% !important;\n    margin-top: 10px !important;\n    box-shadow: 0 4px 12px rgba(27, 122, 69, 0.22) !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    gap: 6px !important;\n    transition: background-color 200ms, box-shadow 200ms, transform 150ms !important;\n  }\n  .carrinho-rapido-ctn .finalizar-compra:hover {\n    background: #155a33 !important;\n    box-shadow: 0 6px 20px rgba(27, 122, 69, 0.28) !important;\n  }\n  .carrinho-rapido-ctn .finalizar-compra:active {\n    transform: scale(0.98) !important;\n  }\n  .carrinho-rapido-ctn .finalizar-compra:focus-visible {\n    outline: 2px solid #4B664A !important;\n    outline-offset: 3px !important;\n  }\n  .carrinho-rapido-ctn .finalizar-compra span {\n    color: #FFFFFF !important;\n    font-family: 'Poppins', system-ui, sans-serif !important;\n    font-size: 15px !important;\n    font-weight: 600 !important;\n  }\n  .carrinho-rapido-ctn .finalizar-compra svg,\n  .carrinho-rapido-ctn .finalizar-compra svg path {\n    fill: #FFFFFF !important;\n    stroke: #FFFFFF !important;\n  }\n}\n\n/* ==========================================================================\n   EMPTY CART — brand-aligned + product suggestions\n   Native Magazord renders .box-empty-cart (SVG + \"Seu carrinho está vazio\").\n   header.js injects a sibling .mm-cart-empty-wrapper when the drawer opens\n   and adds .mm-cart-has-empty-enhancement on the parent .content-cart so\n   we can hide the native version via CSS.\n   ========================================================================== */\n.content-cart.mm-cart-has-empty-enhancement {\n  display: flex !important;\n  align-items: flex-start !important;\n  justify-content: flex-start !important;\n  flex-direction: column !important;\n  padding: 24px 20px 24px !important;\n  overflow-y: auto;\n  background: #F2F2F2 !important;\n}\n.content-cart.mm-cart-has-empty-enhancement > .box-empty-cart,\n.content-cart.mm-cart-has-empty-enhancement > .empty-cart {\n  display: none !important;\n}\n.mm-cart-empty-wrapper {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  font-family: 'Montserrat', system-ui, -apple-system, sans-serif;\n  color: #333333;\n}\n.mm-cart-empty-hero {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 16px 8px 8px;\n}\n.mm-cart-empty-icon {\n  width: 72px;\n  height: 72px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: #FFFFFF;\n  color: #4b664a;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 12px rgba(75, 102, 74, 0.08);\n}\n.mm-cart-empty-title {\n  margin: 0 0 8px 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #4b664a;\n  letter-spacing: 0.01em;\n  font-family: 'Playfair Display', 'Montserrat', serif;\n}\n.mm-cart-empty-copy {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #666666;\n  max-width: 280px;\n}\n.mm-cart-suggestions {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.mm-cart-suggestions-label {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #999999;\n  padding-left: 4px;\n}\n.mm-cart-suggestions-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.mm-cart-suggestion-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 10px;\n  min-height: 80px;\n  background: #FFFFFF;\n  border: 1px solid #E6E6E6;\n  border-radius: 10px;\n  text-decoration: none;\n  color: #333333;\n  transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease;\n  -webkit-tap-highlight-color: transparent;\n}\n.mm-cart-suggestion-card:hover,\n.mm-cart-suggestion-card:focus-visible {\n  border-color: #4b664a;\n  box-shadow: 0 4px 16px rgba(75, 102, 74, 0.12);\n  outline: none;\n  text-decoration: none;\n  color: #333333;\n}\n.mm-cart-suggestion-thumb {\n  flex-shrink: 0;\n  width: 64px;\n  height: 64px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #F2F2F2;\n  display: block;\n}\n.mm-cart-suggestion-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.mm-cart-suggestion-body {\n  flex: 1 1 auto;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.mm-cart-suggestion-name {\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 1.35;\n  color: #333333;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.mm-cart-suggestion-price {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.mm-cart-suggestion-price-from {\n  font-size: 11px;\n  color: #999999;\n  text-decoration: line-through;\n}\n.mm-cart-suggestion-price-to {\n  font-size: 14px;\n  font-weight: 600;\n  color: #4b664a;\n}\n\n/* ==========================================================================\n   REDUCED MOTION: respeita preferência de sistema\n   ========================================================================== */\n@media (prefers-reduced-motion: reduce) {\n  #cart-preview-area *,\n  #cart-preview-area *::before,\n  #cart-preview-area *::after,\n  .carrinho-rapido-ctn *,\n  .carrinho-rapido-ctn *::before,\n  .carrinho-rapido-ctn *::after,\n  .mm-confirm-overlay,\n  .mm-confirm-card {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n";document.head.appendChild(s)})();

  /* Inject CSS: checkout-cro.css */
  (function(){if(document.getElementById("mm-checkout-cro-css"))return;var s=document.createElement("style");s.id="mm-checkout-cro-css";s.textContent="/* =============================================\n   CHECKOUT CRO - Madeira Mania (rebuild v2)\n   Rebuild limpo: \"shadow render\" strategy\n   - Esconde .cart-area + #resumo-compra .conteudo-resumo (source of truth)\n   - Renderiza #mm-layout com nossos próprios componentes\n   - Delega mutações pro Zord API (Zord.checkout.*)\n   - Re-renderiza em $(document).ajaxComplete\n   Design DNA: medusa storefront tokens adaptados ao brand real Madeira Mania\n   ============================================= */\n\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');\n\n\n/* ==========================================\n   ZONA 1 — Esconder Magazord (source of truth fica no DOM pra leitura)\n   ========================================== */\n\n/* Header checkout original Magazord (logo + Google + stepper) */\nbody.mm-checkout-rebuild .header-checkout,\nbody.mm-checkout-rebuild .header-template-checkout-03,\nbody.mm-checkout-rebuild .pagina-conteudo-adicional.conteudo-adicional-25 {\n  display: none !important;\n}\n\n/* Esconder distrações no checkout: ticker bar + popup whats flutuante */\nbody.mm-checkout-rebuild #tickerBar,\nbody.mm-checkout-rebuild .ticker-bar,\nbody.mm-checkout-rebuild #popup-msg-whats {\n  display: none !important;\n}\n\n/* Override do padding inflado do .checkout-main da Magazord */\nbody.mm-checkout-rebuild #checkout-main-area.checkout-main,\nbody.mm-checkout-rebuild #checkout-main-area,\nbody.mm-checkout-rebuild .checkout-main {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  margin-top: 0 !important;\n}\n\n#checkout-main-area.mm-shadow-mode .title-cart-area,\n#checkout-main-area.mm-shadow-mode #cart-area,\n#checkout-main-area.mm-shadow-mode .cart-area,\n#checkout-main-area.mm-shadow-mode #resumo-compra,\n#checkout-main-area.mm-shadow-mode .proxima-etapa,\n#checkout-main-area.mm-shadow-mode > .container > *:not(#mm-layout),\n/* Identify (Fase 2): forms Magazord são filhos diretos do mainArea\n   — não usam .container como wrapper. Esconde tudo que não é #mm-layout. */\n#checkout-main-area.mm-shadow-mode > *:not(#mm-layout):not(style):not(script) {\n  position: absolute !important;\n  left: -99999px !important;\n  top: -99999px !important;\n  width: 1px !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  pointer-events: none !important;\n  opacity: 0 !important;\n}\n\n/* Libera o resumo-compra novamente SE ele for descendente do mm-layout (não é, mas paranoia) */\n#checkout-main-area.mm-shadow-mode #mm-layout,\n#checkout-main-area.mm-shadow-mode #mm-layout * {\n  position: static;\n  left: auto;\n  top: auto;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  pointer-events: auto;\n  opacity: 1;\n}\n\n\n/* ==========================================\n   ZONA 2 — Design tokens (scoped em #mm-layout)\n   ========================================== */\n\n#mm-layout {\n  /* Brand — olive do ticker/header + forest da PDP CTA */\n  --mm-olive:        #4B664A;\n  --mm-olive-dark:   #3D4733;\n  --mm-olive-soft:   rgba(75, 102, 74, 0.08);\n  --mm-cta:          #1b7a45;\n  --mm-cta-dark:     #155a33;\n  --mm-cta-soft:     rgba(27, 122, 69, 0.08);\n\n  /* Neutros (medusa-inspired) */\n  --mm-bg:           #FAFAFA;\n  --mm-card:         #FFFFFF;\n  --mm-border:       #E7E7E7;\n  --mm-border-soft:  #F0F0F0;\n  --mm-divider:      #EFEFEF;\n\n  /* Texto (escala WCAG-safe — todos os tons garantem 4.5:1 em 11px+) */\n  --mm-fg:           #121212;  /* ratio 17.4 — primary  */\n  --mm-fg-soft:      #374151;  /* ratio 10.4 — secondary  */\n  --mm-fg-meta:      #4B5563;  /* ratio 7.14 — tertiary, body small  */\n  --mm-fg-subtle:    #6B7280;  /* ratio 4.86 — meta info readable    */\n  --mm-fg-muted:     #9CA3AF;  /* ratio 2.54 — DECORATIVE ONLY (icons, dividers)  */\n\n  /* Semantic */\n  --mm-danger:       #DC2626;\n  --mm-danger-soft:  rgba(220, 38, 38, 0.08);\n  --mm-success:      #1b7a45;\n\n  /* Typography */\n  --mm-sans:         'Poppins', system-ui, -apple-system, sans-serif;\n  --mm-serif:        'Libre Baskerville', Georgia, serif;\n\n  /* Spacing (4px base) */\n  --mm-s1: 4px;\n  --mm-s2: 8px;\n  --mm-s3: 12px;\n  --mm-s4: 16px;\n  --mm-s5: 20px;\n  --mm-s6: 24px;\n  --mm-s8: 32px;\n  --mm-s10: 40px;\n\n  /* Radius */\n  --mm-r-sm:   4px;\n  --mm-r:      8px;\n  --mm-r-lg:   16px;\n  --mm-r-full: 9999px;\n\n  /* Shadows (flat brand — uso minimal) */\n  --mm-shadow-sm:  0 1px 2px rgba(17, 24, 39, 0.04);\n  --mm-shadow:     0 1px 3px rgba(17, 24, 39, 0.06), 0 1px 2px rgba(17, 24, 39, 0.04);\n  --mm-shadow-lg:  0 8px 24px rgba(17, 24, 39, 0.08);\n\n  /* Transitions — 500ms é slow-intentional (\"premium feel\" medusa) */\n  --mm-tr-fast: 180ms cubic-bezier(0.16, 1, 0.3, 1);\n  --mm-tr:      320ms cubic-bezier(0.16, 1, 0.3, 1);\n  --mm-tr-slow: 500ms cubic-bezier(0.16, 1, 0.3, 1);\n\n  font-family: var(--mm-sans);\n  color: var(--mm-fg);\n  font-size: 14px;\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n\n/* ==========================================\n   ZONA 3 — Layout grid\n   ========================================== */\n\n#mm-layout {\n  display: block;\n  max-width: 1200px;\n  margin: 0 auto;\n  /* Mobile default: padding horizontal 0 — cards/grids internos adicionam\n     margem mínima. Aproveita quase todo o viewport no mobile estreito. */\n  padding: var(--mm-s4) 0 var(--mm-s8);\n  box-sizing: border-box;\n  animation: mm-fade-in 320ms cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n\n#mm-layout *,\n#mm-layout *::before,\n#mm-layout *::after {\n  box-sizing: border-box;\n}\n\n.mm-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--mm-s6);\n  align-items: start;\n}\n\n@media (min-width: 1024px) {\n  #mm-layout {\n    /* Padding top reduzido (s8=32→s4=16) pra dar mais altura útil\n       ao conteúdo e aproximar do topo da viewport. */\n    padding: var(--mm-s4) var(--mm-s6) var(--mm-s10);\n  }\n  .mm-grid {\n    grid-template-columns: 1fr 380px;\n    gap: var(--mm-s10);\n  }\n}\n\n\n/* ==========================================\n   ZONA 4 — Títulos + headings\n   ========================================== */\n\n.mm-h {\n  font-family: var(--mm-serif);\n  font-weight: 400;\n  font-size: clamp(28px, 4vw, 40px);\n  line-height: 1.15;\n  letter-spacing: -0.01em;\n  color: var(--mm-fg);\n  margin: 0 0 var(--mm-s5);\n  padding: 0;\n}\n\n.mm-eyebrow {\n  font-family: var(--mm-sans);\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--mm-fg-muted);\n  margin: 0;\n}\n\n\n/* ==========================================\n   ZONA 5 — Custom checkout header (substitui o Magazord)\n   Single-row layout: logo left, stepper center, secure right\n   Vertical alignment perfect via grid 3-col + center align\n   ========================================== */\n\n.mm-checkout-header {\n  padding: var(--mm-s5) 0;\n  margin-bottom: var(--mm-s5);\n  border-bottom: 1px solid var(--mm-border-soft);\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);\n  align-items: center;\n  gap: var(--mm-s5);\n  min-height: 72px;\n  animation: mm-fade-down 380ms cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n\n.mm-checkout-header-logo {\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  color: var(--mm-fg);\n  justify-self: start;\n  line-height: 0;\n}\n\n.mm-checkout-header-logo img {\n  height: 44px;\n  width: auto;\n  max-width: 180px;\n  display: block;\n}\n\n/* Stepper centered in middle column */\n.mm-checkout-steps {\n  display: inline-flex;\n  align-items: center;\n  justify-self: center;\n}\n\n.mm-checkout-steps ol {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: var(--mm-s3);\n}\n\n.mm-checkout-step {\n  display: inline-flex;\n  align-items: center;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--mm-fg-subtle);\n  white-space: nowrap;\n  letter-spacing: 0.02em;\n  line-height: 1;\n}\n\n.mm-checkout-step.is-active {\n  color: var(--mm-fg);\n  font-weight: 700;\n  position: relative;\n}\n\n.mm-checkout-step.is-active::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -8px;\n  height: 2px;\n  background: var(--mm-olive);\n  border-radius: 2px;\n}\n\n.mm-checkout-step-sep {\n  font-size: 14px;\n  color: var(--mm-fg-muted);\n  user-select: none;\n  line-height: 1;\n}\n\n/* Secure badge — right column */\n.mm-checkout-secure {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--mm-s2);\n  text-decoration: none;\n  color: var(--mm-fg);\n  justify-self: end;\n}\n\n.mm-checkout-secure svg {\n  color: var(--mm-olive);\n  flex-shrink: 0;\n  width: 18px;\n  height: 18px;\n}\n\n.mm-checkout-secure-text {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n\n.mm-checkout-secure-text strong {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--mm-fg);\n  letter-spacing: -0.01em;\n}\n\n.mm-checkout-secure-text small {\n  font-size: 12px;\n  color: var(--mm-fg-meta);\n  font-weight: 400;\n  margin-top: 1px;\n}\n\n/* Mobile: 2 rows — logo+secure on top, stepper on bottom */\n@media (max-width: 1023px) {\n  .mm-checkout-header {\n    grid-template-columns: auto auto;\n    grid-template-areas:\n      \"logo secure\"\n      \"steps steps\";\n    gap: var(--mm-s3) var(--mm-s4);\n    padding: var(--mm-s4) 0;\n    margin-bottom: var(--mm-s4);\n    min-height: 0;\n  }\n  .mm-checkout-header-logo {\n    grid-area: logo;\n  }\n  .mm-checkout-header-logo img {\n    height: 36px;\n  }\n  .mm-checkout-secure {\n    grid-area: secure;\n  }\n  .mm-checkout-secure svg {\n    width: 16px;\n    height: 16px;\n  }\n  .mm-checkout-secure-text strong { font-size: 12px; }\n  .mm-checkout-secure-text small { font-size: 11px; }\n  .mm-checkout-steps {\n    grid-area: steps;\n    justify-self: center;\n    padding-top: var(--mm-s2);\n  }\n  .mm-checkout-steps ol { gap: var(--mm-s2); }\n  .mm-checkout-step { font-size: 12px; }\n\n  /* Touch target compliance: bump qty buttons to 44 on mobile */\n  .mm-qty-btn {\n    width: 44px !important;\n    height: 44px !important;\n    min-width: 44px !important;\n    min-height: 44px !important;\n  }\n  .mm-qty-value {\n    min-width: 36px;\n    font-size: 15px;\n  }\n}\n\n@media (max-width: 540px) {\n  .mm-checkout-secure-text { display: none; }\n  .mm-checkout-header-logo img { height: 32px; }\n}\n\n\n/* ==========================================\n   ZONA 5b — Shipping nudge (goal-gradient)\n   Só renderiza ENQUANTO falta valor; some quando atinge.\n   ========================================== */\n\n.mm-nudge {\n  background: var(--mm-olive-soft);\n  border: 1px solid rgba(75, 102, 74, 0.15);\n  border-radius: var(--mm-r);\n  padding: var(--mm-s3) var(--mm-s4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--mm-s2);\n  animation: mm-fade-in 320ms var(--mm-tr) both;\n}\n\n.mm-nudge-head {\n  display: flex;\n  align-items: center;\n  gap: var(--mm-s2);\n  font-size: 12px;\n  line-height: 1.4;\n  color: var(--mm-fg);\n  font-weight: 500;\n}\n\n.mm-nudge-head svg {\n  flex-shrink: 0;\n  color: var(--mm-olive);\n}\n\n.mm-nudge-head strong {\n  color: var(--mm-olive);\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n\n.mm-nudge-track {\n  background: rgba(75, 102, 74, 0.18);\n  border-radius: var(--mm-r-full);\n  height: 4px;\n  overflow: hidden;\n}\n\n.mm-nudge-fill {\n  background: var(--mm-olive);\n  height: 100%;\n  border-radius: var(--mm-r-full);\n  transition: width 600ms cubic-bezier(0.16, 1, 0.3, 1);\n  will-change: width;\n}\n\n\n/* ==========================================\n   ZONA 6 — Cart items (single card with internal dividers)\n   ========================================== */\n\n.mm-items {\n  min-width: 0;\n}\n\n.mm-items-card {\n  background: var(--mm-card);\n  border: 1px solid var(--mm-border);\n  border-radius: var(--mm-r-lg);\n  padding: 0 var(--mm-s5);\n  animation: mm-fade-up 480ms cubic-bezier(0.16, 1, 0.3, 1) 80ms both;\n}\n\n.mm-items > .mm-h {\n  animation: mm-fade-down 380ms cubic-bezier(0.16, 1, 0.3, 1) 60ms both;\n}\n\n#mm-item-list {\n  display: flex;\n  flex-direction: column;\n}\n\n.mm-item {\n  padding: var(--mm-s5) 0;\n  display: grid;\n  grid-template-columns: 112px minmax(0, 1fr) auto;\n  gap: var(--mm-s4);\n  align-items: flex-start;\n  position: relative;\n  min-width: 0;\n  border-bottom: 1px solid var(--mm-border-soft);\n  transition: opacity var(--mm-tr);\n  animation: mm-fade-up 460ms cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n\n/* Stagger entrada dos cart items (até 6) */\n.mm-item:nth-child(1) { animation-delay: 140ms; }\n.mm-item:nth-child(2) { animation-delay: 200ms; }\n.mm-item:nth-child(3) { animation-delay: 260ms; }\n.mm-item:nth-child(4) { animation-delay: 320ms; }\n.mm-item:nth-child(5) { animation-delay: 380ms; }\n.mm-item:nth-child(6) { animation-delay: 440ms; }\n\n.mm-item:last-child {\n  border-bottom: none;\n}\n\n.mm-item > * {\n  min-width: 0;\n}\n\n.mm-item.is-updating {\n  opacity: 0.55;\n  pointer-events: none;\n}\n\n.mm-item-thumb {\n  width: 112px;\n  height: 112px;\n  border-radius: var(--mm-r);\n  overflow: hidden;\n  background: var(--mm-bg);\n  flex-shrink: 0;\n  position: relative;\n}\n\n.mm-item-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.mm-item-body {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  gap: var(--mm-s2);\n  padding-right: var(--mm-s6);\n}\n\n.mm-item-name {\n  font-family: var(--mm-sans);\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 1.35;\n  color: var(--mm-fg);\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-decoration: none;\n}\n\n.mm-item-name:hover {\n  color: var(--mm-olive);\n}\n\n.mm-item-name:focus-visible {\n  outline: 2px solid var(--mm-olive);\n  outline-offset: 2px;\n  border-radius: 2px;\n}\n\n.mm-checkout-header-logo:focus-visible {\n  outline: 2px solid var(--mm-olive);\n  outline-offset: 4px;\n  border-radius: 4px;\n}\n\n.mm-item-variant {\n  font-size: 12px;\n  color: var(--mm-fg-subtle);\n  margin: 0;\n}\n\n.mm-item-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--mm-s1);\n  background: #EEF3EE;  /* olive 8% on white, solid pra contrast checkers */\n  color: var(--mm-olive);\n  font-size: 12px;\n  font-weight: 600;\n  padding: 5px 12px;\n  border-radius: var(--mm-r-full);\n  margin-top: var(--mm-s1);\n  align-self: flex-start;\n  line-height: 1.2;\n}\n\n.mm-item-badge svg {\n  flex-shrink: 0;\n}\n\n.mm-item-controls {\n  grid-column: 2;\n  display: flex;\n  align-items: center;\n  gap: var(--mm-s4);\n  margin-top: var(--mm-s3);\n}\n\n.mm-item-price {\n  grid-column: 3;\n  grid-row: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  text-align: right;\n  gap: 2px;\n  white-space: nowrap;\n}\n\n.mm-item-price-value {\n  font-family: var(--mm-sans);\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--mm-fg);\n  line-height: 1.1;\n  font-variant-numeric: tabular-nums;\n}\n\n.mm-item-price-sub {\n  font-size: 12px;\n  color: var(--mm-olive);\n  font-weight: 600;\n  line-height: 1;\n  letter-spacing: 0.02em;\n}\n\n.mm-item-price-unit {\n  font-size: 12px;\n  color: var(--mm-fg-subtle);\n  font-weight: 400;\n  line-height: 1;\n  margin-top: 2px;\n}\n\n\n/* ==========================================\n   ZONA 7 — Quantity selector (rounded-full pill)\n   ========================================== */\n\n.mm-qty {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--mm-border);\n  border-radius: var(--mm-r-full);\n  padding: 4px;\n  background: var(--mm-card);\n  transition: border-color var(--mm-tr);\n}\n\n.mm-qty:hover {\n  border-color: #D1D5DB;\n}\n\n.mm-qty-btn {\n  width: 36px !important;\n  height: 36px !important;\n  min-width: 36px !important;\n  min-height: 36px !important;\n  border: none !important;\n  background: transparent !important;\n  border-radius: var(--mm-r-full) !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  color: var(--mm-fg-soft);\n  cursor: pointer;\n  padding: 0 !important;\n  font-family: var(--mm-sans);\n  transition: background-color var(--mm-tr-slow), color var(--mm-tr-slow);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mm-qty-btn svg {\n  flex-shrink: 0;\n  display: block;\n  width: 16px;\n  height: 16px;\n}\n\n.mm-qty-btn:hover:not(:disabled) {\n  background: var(--mm-bg);\n  color: var(--mm-fg);\n}\n\n.mm-qty-btn:active:not(:disabled) {\n  transform: scale(0.92);\n}\n\n.mm-qty-btn:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n\n.mm-qty-btn:focus-visible {\n  outline: 2px solid var(--mm-olive);\n  outline-offset: 2px;\n}\n\n.mm-qty-value {\n  min-width: 32px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--mm-fg);\n  font-variant-numeric: tabular-nums;\n  user-select: none;\n  padding: 0 var(--mm-s2);\n}\n\n\n/* Remove button (icon-only, minimalist, 44pt hit area) */\n.mm-item-remove {\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  background: transparent !important;\n  border: none !important;\n  color: var(--mm-fg-subtle);\n  cursor: pointer;\n  padding: 0 !important;\n  width: 44px !important;\n  height: 44px !important;\n  min-width: 44px !important;\n  min-height: 44px !important;\n  border-radius: var(--mm-r-full) !important;\n  transition: color var(--mm-tr), background-color var(--mm-tr);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mm-item-remove:hover {\n  color: var(--mm-danger);\n  background: var(--mm-danger-soft) !important;\n}\n\n.mm-item-remove:focus-visible {\n  outline: 2px solid var(--mm-olive);\n  outline-offset: 2px;\n}\n\n.mm-item-remove svg {\n  flex-shrink: 0;\n  width: 18px;\n  height: 18px;\n  display: block;\n}\n\n\n/* ==========================================\n   ZONA 8 — Summary card\n   ========================================== */\n\n.mm-sum {\n  min-width: 0;\n  position: relative;\n}\n\n@media (min-width: 1024px) {\n  .mm-sum {\n    position: sticky;\n    top: var(--mm-s5);\n  }\n}\n\n.mm-sum-card {\n  background: var(--mm-card);\n  border: 1px solid var(--mm-border);\n  border-radius: var(--mm-r-lg);\n  padding: var(--mm-s5);\n  display: flex;\n  flex-direction: column;\n  gap: var(--mm-s4);\n  animation: mm-fade-up 540ms cubic-bezier(0.16, 1, 0.3, 1) 180ms both;\n}\n\n.mm-sum > .mm-h {\n  animation: mm-fade-down 380ms cubic-bezier(0.16, 1, 0.3, 1) 120ms both;\n}\n\n.mm-help {\n  animation: mm-fade-in 400ms cubic-bezier(0.16, 1, 0.3, 1) 480ms both;\n}\n\n.mm-trust {\n  animation: mm-fade-in 400ms cubic-bezier(0.16, 1, 0.3, 1) 380ms both;\n}\n\n/* Sum stack: groups dynamic content (rows + coupon + total) with consistent gap */\n.mm-sum-stack {\n  display: flex;\n  flex-direction: column;\n  gap: var(--mm-s4);\n}\n\n\n/* ---- CEP input block ---- */\n.mm-cep {\n  display: flex;\n  flex-direction: column;\n  gap: var(--mm-s2);\n}\n\n.mm-cep-label {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--mm-s2);\n}\n\n.mm-cep-label-text {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--mm-fg-subtle);\n}\n\n.mm-cep-label-link {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--mm-olive);\n  text-decoration: none;\n  border-bottom: 1px solid var(--mm-olive-soft);\n  padding-bottom: 1px;\n  transition: border-color var(--mm-tr);\n}\n\n.mm-cep-label-link:hover {\n  border-bottom-color: var(--mm-olive);\n}\n\n.mm-cep-label-link:focus-visible {\n  outline: 2px solid var(--mm-olive);\n  outline-offset: 2px;\n  border-radius: 2px;\n}\n\n.mm-cep-row {\n  display: flex;\n  align-items: stretch;\n  gap: var(--mm-s2);\n}\n\n.mm-input {\n  flex: 1;\n  height: 48px !important;\n  min-height: 48px !important;\n  padding: 0 var(--mm-s5) !important;\n  background: var(--mm-card) !important;\n  border: 1px solid var(--mm-border) !important;\n  border-radius: var(--mm-r-full) !important;\n  font-family: var(--mm-sans) !important;\n  font-size: 16px !important;  /* 16px previne zoom no iOS */\n  font-weight: 500 !important;\n  color: var(--mm-fg) !important;\n  outline: none !important;\n  transition: border-color var(--mm-tr-slow), box-shadow var(--mm-tr-slow);\n  min-width: 0;\n  box-sizing: border-box !important;\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.mm-input::placeholder {\n  color: var(--mm-fg-subtle);\n  font-weight: 400;\n}\n\n.mm-input:hover {\n  border-color: #D1D5DB !important;\n}\n\n.mm-input:focus,\n.mm-input:focus-visible {\n  border-color: var(--mm-olive) !important;\n  box-shadow: 0 0 0 3px var(--mm-olive-soft) !important;\n}\n\n.mm-btn-secondary {\n  flex-shrink: 0;\n  height: 48px !important;\n  min-height: 48px !important;\n  padding: 0 var(--mm-s5) !important;\n  background: var(--mm-fg) !important;\n  color: #FFF !important;\n  border: none !important;\n  border-radius: var(--mm-r-full) !important;\n  font-family: var(--mm-sans) !important;\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.02em;\n  cursor: pointer;\n  transition: background-color var(--mm-tr-slow), transform 150ms;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: var(--mm-s1);\n  -webkit-tap-highlight-color: transparent;\n  box-sizing: border-box !important;\n}\n\n.mm-btn-secondary:hover {\n  background: var(--mm-olive-dark) !important;\n}\n\n.mm-btn-secondary:active {\n  transform: scale(0.97);\n}\n\n.mm-btn-secondary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.mm-btn-secondary:focus-visible {\n  outline: 3px solid var(--mm-olive);\n  outline-offset: 2px;\n}\n\n\n/* ---- Shipping result display ---- */\n.mm-shipping-result {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: var(--mm-s3);\n  background: var(--mm-bg);\n  border-radius: var(--mm-r);\n  border: 1px solid var(--mm-border-soft);\n  animation: mm-fade-in 320ms var(--mm-tr) both;\n}\n\n.mm-shipping-result-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--mm-s2);\n  font-size: 12px;\n}\n\n.mm-shipping-result-label {\n  color: var(--mm-fg-soft);\n  font-weight: 500;\n}\n\n.mm-shipping-result-value {\n  color: var(--mm-fg);\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n\n.mm-shipping-result-value.is-free {\n  color: var(--mm-olive);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  font-size: 11px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.mm-shipping-result-deadline {\n  color: var(--mm-fg-muted);\n  font-size: 11px;\n}\n\n\n/* ---- Divider ---- */\n.mm-divider {\n  border: none;\n  border-top: 1px solid var(--mm-divider);\n  margin: 0;\n}\n\n\n/* ---- Summary rows (Subtotal / Frete / Desconto) ---- */\n.mm-rows {\n  display: flex;\n  flex-direction: column;\n  gap: var(--mm-s3);\n}\n\n.mm-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--mm-s3);\n  font-size: 13px;\n}\n\n.mm-row-label {\n  color: var(--mm-fg-soft);\n  font-weight: 500;\n}\n\n.mm-row-sub {\n  color: var(--mm-fg-subtle);\n  font-weight: 400;\n  font-size: 12px;\n}\n\n.mm-row-value {\n  color: var(--mm-fg);\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n\n.mm-row-value.is-discount {\n  color: var(--mm-cta);\n}\n\n.mm-row-value.is-free {\n  color: var(--mm-olive);\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.mm-row-value.is-free svg {\n  flex-shrink: 0;\n  display: block;\n}\n\n\n/* ---- Total block ---- */\n.mm-total {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding-top: var(--mm-s3);\n  border-top: 1px solid var(--mm-divider);\n}\n\n.mm-total-label {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--mm-fg-subtle);\n  margin-bottom: 2px;\n}\n\n.mm-total-value {\n  font-family: var(--mm-serif);\n  font-size: 34px;\n  font-weight: 700;\n  color: var(--mm-fg);\n  line-height: 1.05;\n  letter-spacing: -0.01em;\n  font-variant-numeric: tabular-nums;\n  animation: mm-pop 400ms cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n\n.mm-total-pix {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--mm-s1) var(--mm-s2);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--mm-olive);\n  margin-top: var(--mm-s2);\n  font-variant-numeric: tabular-nums;\n}\n\n.mm-total-pix-save {\n  color: var(--mm-fg-muted);\n  font-weight: 500;\n  font-size: 11px;\n}\n\n.mm-total-parcela {\n  font-size: 12px;\n  color: var(--mm-fg-soft);\n  font-weight: 500;\n  margin-top: 2px;\n  font-variant-numeric: tabular-nums;\n}\n\n.mm-total-pending {\n  font-size: 12px;\n  color: var(--mm-fg-subtle);\n  font-weight: 500;\n  line-height: 1.4;\n  padding: var(--mm-s3) 0 0;\n}\n\n\n/* ---- Coupon (collapsible) ---- */\n.mm-coupon-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--mm-s2);\n  background: transparent;\n  border: 1px dashed var(--mm-border);\n  border-radius: var(--mm-r-full);\n  padding: var(--mm-s3) var(--mm-s4);\n  min-height: 44px;\n  font-family: var(--mm-sans);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--mm-fg-soft);\n  cursor: pointer;\n  align-self: flex-start;\n  transition: border-color var(--mm-tr), color var(--mm-tr);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mm-coupon-toggle:hover {\n  border-color: var(--mm-olive);\n  color: var(--mm-olive);\n}\n\n.mm-coupon-toggle:focus-visible {\n  outline: 2px solid var(--mm-olive);\n  outline-offset: 2px;\n}\n\n.mm-coupon-form {\n  display: none;\n  gap: var(--mm-s2);\n  align-items: stretch;\n}\n\n.mm-coupon.is-open .mm-coupon-toggle {\n  display: none;\n}\n\n.mm-coupon.is-open .mm-coupon-form {\n  display: flex;\n  animation: mm-fade-in 240ms var(--mm-tr) both;\n}\n\n.mm-coupon-applied {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--mm-s2);\n  background: var(--mm-olive-soft);\n  border: 1px solid var(--mm-olive-soft);\n  border-radius: var(--mm-r-full);\n  padding: var(--mm-s2) var(--mm-s3) var(--mm-s2) var(--mm-s4);\n  font-size: 12px;\n  animation: mm-fade-in 240ms var(--mm-tr) both;\n}\n\n.mm-coupon-applied-left {\n  display: flex;\n  align-items: center;\n  gap: var(--mm-s2);\n  font-weight: 600;\n  color: var(--mm-olive);\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n.mm-coupon-applied-left svg {\n  flex-shrink: 0;\n}\n\n.mm-coupon-applied button {\n  background: transparent;\n  border: none;\n  color: var(--mm-fg-muted);\n  cursor: pointer;\n  padding: 4px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--mm-r-full);\n  transition: color var(--mm-tr);\n}\n\n.mm-coupon-applied button:hover {\n  color: var(--mm-danger);\n}\n\n\n/* ---- Primary CTA ---- */\n.mm-cta {\n  background: var(--mm-cta) !important;\n  color: #FFFFFF !important;\n  border: none !important;\n  border-radius: var(--mm-r-full) !important;\n  padding: var(--mm-s4) var(--mm-s5) !important;\n  min-height: 56px !important;\n  font-family: var(--mm-sans) !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.01em;\n  cursor: pointer;\n  width: 100% !important;\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: var(--mm-s2);\n  box-shadow: 0 4px 12px rgba(27, 122, 69, 0.22) !important;\n  transition: background-color var(--mm-tr-slow), box-shadow var(--mm-tr-slow), transform 150ms;\n  -webkit-tap-highlight-color: transparent;\n  outline: none !important;\n  box-sizing: border-box !important;\n}\n\n.mm-cta:hover {\n  background: var(--mm-cta-dark) !important;\n  box-shadow: 0 6px 20px rgba(27, 122, 69, 0.28) !important;\n}\n\n.mm-cta:active {\n  transform: translateY(1px);\n  box-shadow: 0 2px 6px rgba(27, 122, 69, 0.22) !important;\n}\n\n.mm-cta:focus-visible {\n  outline: 3px solid var(--mm-olive) !important;\n  outline-offset: 3px !important;\n}\n\n.mm-cta svg {\n  transition: transform var(--mm-tr-slow);\n}\n\n.mm-cta:hover svg {\n  transform: translateX(3px);\n}\n\n\n/* ---- Trust badges ---- */\n.mm-trust {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 6px 18px;\n  padding-top: var(--mm-s2);\n}\n\n.mm-trust-item {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--mm-s1);\n  font-size: 12px;\n  color: var(--mm-fg-subtle);\n  font-weight: 500;\n  white-space: nowrap;\n  line-height: 1;\n}\n\n.mm-trust-item svg {\n  flex-shrink: 0;\n  width: 13px;\n  height: 13px;\n  color: var(--mm-fg-muted);\n}\n\n\n/* ---- WhatsApp help block (objection breaker) ---- */\n.mm-help {\n  display: flex;\n  align-items: center;\n  gap: var(--mm-s3);\n  margin-top: var(--mm-s2);\n  padding: var(--mm-s3) var(--mm-s4);\n  background: #F4FCF7;  /* very subtle green-tint, solid for contrast checkers */\n  border: 1px solid #DDEFE3;\n  border-radius: var(--mm-r);\n  text-decoration: none;\n  color: var(--mm-fg);\n  font-size: 13px;\n  line-height: 1.4;\n  min-height: 56px;\n  transition: background-color var(--mm-tr-slow), border-color var(--mm-tr-slow);\n}\n\n.mm-help:hover {\n  background: #E9F8EE;\n  border-color: #BDDFC9;\n}\n\n.mm-help:focus-visible {\n  outline: 2px solid #25D366;\n  outline-offset: 2px;\n}\n\n.mm-help svg {\n  color: #25D366;\n  flex-shrink: 0;\n}\n\n.mm-help span {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n\n.mm-help strong {\n  display: block;\n  font-weight: 600;\n  color: var(--mm-fg);\n  font-size: 12px;\n  margin-bottom: 1px;\n}\n\n\n/* ==========================================\n   ZONA 9 — Empty cart state\n   ========================================== */\n\n.mm-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: var(--mm-s10) var(--mm-s4);\n  gap: var(--mm-s4);\n  background: var(--mm-card);\n  border: 1px solid var(--mm-border);\n  border-radius: var(--mm-r-lg);\n  animation: mm-fade-up 400ms var(--mm-tr) both;\n}\n\n.mm-empty-icon {\n  color: var(--mm-fg-muted);\n  margin-bottom: var(--mm-s2);\n}\n\n.mm-empty-title {\n  font-family: var(--mm-serif);\n  font-size: 24px;\n  font-weight: 400;\n  color: var(--mm-fg);\n  margin: 0;\n  letter-spacing: -0.01em;\n}\n\n.mm-empty-desc {\n  color: var(--mm-fg-soft);\n  font-size: 14px;\n  max-width: 380px;\n  margin: 0;\n}\n\n.mm-empty-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--mm-s2);\n  background: var(--mm-cta);\n  color: #FFF;\n  text-decoration: none;\n  padding: var(--mm-s3) var(--mm-s6);\n  border-radius: var(--mm-r-full);\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: var(--mm-s2);\n  box-shadow: 0 4px 12px rgba(27, 122, 69, 0.22);\n  transition: background-color var(--mm-tr-slow);\n}\n\n.mm-empty-cta:hover {\n  background: var(--mm-cta-dark);\n}\n\n.mm-empty-perks {\n  font-size: 11px;\n  color: var(--mm-fg-muted);\n  margin-top: var(--mm-s2);\n}\n\n\n/* ==========================================\n   ZONA 10 — Skeleton (loading state)\n   ========================================== */\n\n.mm-skel {\n  background: linear-gradient(\n    90deg,\n    var(--mm-border-soft) 0%,\n    #F7F7F7 50%,\n    var(--mm-border-soft) 100%\n  );\n  background-size: 200% 100%;\n  animation: mm-shimmer 1400ms ease-in-out infinite;\n  border-radius: var(--mm-r-sm);\n}\n\n.mm-skel-item {\n  padding: var(--mm-s5) 0;\n  display: grid;\n  grid-template-columns: 112px 1fr auto;\n  gap: var(--mm-s4);\n  align-items: flex-start;\n  border-bottom: 1px solid var(--mm-border-soft);\n}\n\n.mm-skel-item:last-child {\n  border-bottom: none;\n}\n\n.mm-skel-thumb {\n  width: 112px;\n  height: 112px;\n  border-radius: var(--mm-r);\n}\n\n.mm-skel-lines {\n  display: flex;\n  flex-direction: column;\n  gap: var(--mm-s2);\n  padding-top: var(--mm-s1);\n}\n\n.mm-skel-line {\n  height: 12px;\n}\n\n.mm-skel-line.w-full { width: 100%; }\n.mm-skel-line.w-3-4  { width: 75%; }\n.mm-skel-line.w-1-2  { width: 50%; }\n.mm-skel-line.w-1-3  { width: 33%; }\n\n\n/* ==========================================\n   ZONA 11 — Mobile responsive (< 1024px)\n   ========================================== */\n\n@media (max-width: 1023px) {\n  .mm-items-card {\n    padding: 0 var(--mm-s4);\n  }\n\n  .mm-item {\n    grid-template-columns: 88px minmax(0, 1fr);\n    grid-template-areas:\n      \"thumb body\"\n      \"thumb price\"\n      \"controls controls\";\n    gap: var(--mm-s2) var(--mm-s3);\n    padding: var(--mm-s4) 0;\n  }\n\n  .mm-item-thumb {\n    grid-area: thumb;\n    width: 88px;\n    height: 88px;\n    align-self: start;\n  }\n\n  .mm-item-body {\n    grid-area: body;\n    padding-right: 0;\n  }\n\n  .mm-item-controls {\n    grid-area: controls;\n    margin-top: var(--mm-s2);\n    grid-column: auto;\n    justify-content: space-between;\n  }\n\n  .mm-item-price {\n    grid-area: price;\n    align-items: flex-start;\n    text-align: left;\n    grid-column: auto;\n    grid-row: auto;\n  }\n\n  .mm-item-name {\n    font-size: 14px;\n  }\n\n  .mm-item-price-value {\n    font-size: 15px;\n  }\n\n  /* Touch target compliance: bump qty buttons to 44 on mobile (after base rule) */\n  .mm-qty-btn {\n    width: 44px !important;\n    height: 44px !important;\n    min-width: 44px !important;\n    min-height: 44px !important;\n  }\n  .mm-qty-value {\n    min-width: 36px;\n    font-size: 15px;\n  }\n\n  .mm-skel-item {\n    grid-template-columns: 88px 1fr;\n  }\n\n  .mm-skel-thumb {\n    width: 88px;\n    height: 88px;\n  }\n\n  .mm-h {\n    font-size: 26px;\n    margin-bottom: var(--mm-s3);\n  }\n\n  .mm-sum-card {\n    padding: var(--mm-s4);\n  }\n\n  .mm-total-value {\n    font-size: 30px;\n  }\n\n  .mm-cep-row {\n    flex-direction: row;\n  }\n\n  .mm-btn-secondary {\n    padding: 0 var(--mm-s4);\n    font-size: 12px;\n  }\n}\n\n@media (max-width: 480px) {\n  #mm-layout {\n    padding: var(--mm-s4) 0 var(--mm-s10);\n  }\n  .mm-item-thumb {\n    width: 80px;\n    height: 80px;\n  }\n  .mm-item {\n    grid-template-columns: 80px minmax(0, 1fr);\n  }\n  .mm-item-name {\n    font-size: 13px;\n  }\n  .mm-item-price-value {\n    font-size: 14px;\n  }\n}\n\n\n/* ==========================================\n   ZONA 12 — Keyframes\n   ========================================== */\n\n@keyframes mm-fade-in {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n\n@keyframes mm-fade-up {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes mm-fade-down {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes mm-pop {\n  0%   { opacity: 0; transform: scale(0.94); }\n  60%  { opacity: 1; transform: scale(1.02); }\n  100% { opacity: 1; transform: scale(1); }\n}\n\n@keyframes mm-shimmer {\n  0%   { background-position: 200% 0; }\n  100% { background-position: -200% 0; }\n}\n\n/* Respeitar prefers-reduced-motion */\n@media (prefers-reduced-motion: reduce) {\n  #mm-layout *,\n  #mm-layout *::before,\n  #mm-layout *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n\n/* ==========================================\n   ZONA 13 — Onepage (outras etapas do checkout — fallback)\n   ========================================== */\n\n.checkout-etapa-3 input {\n  min-height: 44px !important;\n  font-size: 16px !important; /* previne zoom iOS */\n}\n\n\n/* ==========================================\n   ZONA 14 — IDENTIFY (Fase 2) — full shadow-render layout\n   Reaproveita tokens da zona 2 e componentes da zona 6+\n   Adiciona padrões novos: .mm-input-wrap (input com ícone),\n   .mm-input-error, .mm-cta.is-loading, e estilos identify-only\n   ========================================== */\n\n/* ----- input com ícone (padrão novo, reutilizável) -----\n   !important defensivo: Magazord aplica display:flex column em\n   .checkout-main label e .holder-input que quebra o layout. */\n#mm-layout .mm-input-wrap,\n#mm-layout div.mm-input-wrap {\n  position: relative !important;\n  display: block !important;\n  width: 100% !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  flex-direction: row !important;\n}\n\n#mm-layout .mm-input-wrap .mm-input-icon {\n  position: absolute !important;\n  top: 50% !important;\n  left: 18px !important;\n  transform: translateY(-50%) !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  width: 18px !important;\n  height: 18px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  color: var(--mm-fg-meta);\n  pointer-events: none;\n  transition: color 180ms ease;\n  z-index: 1;\n}\n\n#mm-layout .mm-input-wrap .mm-input {\n  padding-left: 48px !important;\n  width: 100% !important;\n  display: block !important;\n  box-sizing: border-box !important;\n}\n\n#mm-layout .mm-input-wrap:focus-within .mm-input-icon {\n  color: var(--mm-olive);\n}\n\n/* Error state — sem shake, só border + shadow */\n#mm-layout .mm-input.mm-input-error {\n  border-color: #DC2626 !important;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15) !important;\n}\n\n/* CTA loading state */\n#mm-layout .mm-cta.is-loading {\n  pointer-events: none;\n  opacity: 0.7;\n  position: relative;\n}\n#mm-layout .mm-cta.is-loading::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  right: 22px;\n  width: 18px;\n  height: 18px;\n  margin-top: -9px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: mm-load-spin 700ms linear infinite;\n}\n#mm-layout .mm-cta.is-loading svg {\n  opacity: 0;\n}\n\n@keyframes mm-load-spin {\n  to { transform: rotate(360deg); }\n}\n\n/* ----- grid layout do identify ----- */\n#mm-layout.mm-id-layout {\n  animation: mm-fade-in 320ms cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n\n#mm-layout .mm-id-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);\n  gap: 32px;\n  align-items: start;\n  max-width: 1180px;\n  margin: 24px auto 48px;\n  padding: 0 24px;\n}\n\n@media (max-width: 980px) {\n  #mm-layout .mm-id-grid {\n    grid-template-columns: 1fr;\n    gap: 12px;\n    margin-top: 10px;\n    padding: 0 8px;\n  }\n}\n\n/* ----- coluna do form ----- */\n#mm-layout .mm-id-form-col {\n  background: var(--mm-card);\n  border: 1px solid var(--mm-border);\n  border-radius: 16px;\n  padding: 40px 44px;\n  box-shadow: var(--mm-shadow);\n  animation: mm-fade-up 480ms cubic-bezier(0.16, 1, 0.3, 1) 80ms both;\n}\n\n@media (max-width: 980px) {\n  #mm-layout .mm-id-form-col {\n    padding: 28px 22px;\n    border-radius: 14px;\n  }\n}\n\n#mm-layout .mm-id-h2 {\n  font-family: 'Libre Baskerville', Georgia, serif;\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--mm-fg);\n  margin: 0 0 8px;\n  letter-spacing: -0.01em;\n}\n\n@media (max-width: 980px) {\n  #mm-layout .mm-id-h2 {\n    font-size: 22px;\n  }\n}\n\n#mm-layout .mm-id-sub {\n  font-size: 15px;\n  line-height: 1.55;\n  color: var(--mm-fg-soft);\n  margin: 0 0 28px;\n}\n\n#mm-layout .mm-id-form {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin: 0;\n}\n\n#mm-layout .mm-id-form .mm-cta {\n  margin-top: 4px;\n}\n\n/* microcopy abaixo do input */\n#mm-layout .mm-id-microcopy {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12.5px;\n  color: var(--mm-fg-meta);\n  margin: -6px 0 0 4px;\n  line-height: 1.4;\n}\n#mm-layout .mm-id-microcopy svg {\n  flex-shrink: 0;\n  color: var(--mm-olive);\n}\n\n/* divider \"ou\" */\n#mm-layout .mm-id-divider {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin: 24px 0 18px;\n  color: var(--mm-fg-subtle);\n  font-size: 13px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n#mm-layout .mm-id-divider::before,\n#mm-layout .mm-id-divider::after {\n  content: \"\";\n  flex: 1;\n  height: 1px;\n  background: var(--mm-border);\n}\n\n/* google login slot */\n#mm-layout .mm-id-google-slot {\n  display: flex;\n  justify-content: center;\n  min-height: 48px;\n  margin-bottom: 18px;\n}\n#mm-layout .mm-id-google-slot:empty::before {\n  content: \"Carregando opção Google...\";\n  color: var(--mm-fg-subtle);\n  font-size: 13px;\n  align-self: center;\n}\n#mm-layout .mm-id-google-slot.is-loaded:empty::before {\n  display: none;\n}\n/* override Magazord styles dentro do slot pra encaixar */\n#mm-layout .mm-id-google-slot .social-login-area {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n}\n#mm-layout .mm-id-google-slot .btn-login-social,\n#mm-layout .mm-id-google-slot .button-google {\n  width: 100% !important;\n  max-width: 320px;\n  margin: 0 auto !important;\n}\n\n/* guest CTA — navegação direta pra onepage (não toggle de panel)\n   !important defensivo pra Magazord button overrides */\n#mm-layout button.mm-id-guest-toggle,\n#mm-layout .mm-id-guest-toggle {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 10px !important;\n  width: 100% !important;\n  background: transparent !important;\n  border: 1.5px dashed var(--mm-border) !important;\n  border-radius: 9999px !important;\n  padding: 14px 20px !important;\n  font-family: inherit !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  line-height: 1.3 !important;\n  color: var(--mm-olive) !important;\n  cursor: pointer !important;\n  transition: all 180ms ease !important;\n  margin-top: 4px !important;\n  text-align: center !important;\n  flex-direction: row !important;\n  flex-wrap: nowrap !important;\n  min-height: 48px !important;\n  box-shadow: none !important;\n}\n#mm-layout .mm-id-guest-toggle:hover {\n  border-color: var(--mm-olive) !important;\n  background: var(--mm-olive-soft) !important;\n  transform: translateY(-1px);\n}\n#mm-layout .mm-id-guest-toggle:focus-visible {\n  outline: none !important;\n  border-color: var(--mm-olive) !important;\n  box-shadow: 0 0 0 3px var(--mm-olive-soft) !important;\n}\n#mm-layout .mm-id-guest-toggle.is-loading {\n  pointer-events: none !important;\n  opacity: 0.7 !important;\n}\n#mm-layout .mm-id-guest-toggle .mm-id-guest-icon,\n#mm-layout .mm-id-guest-toggle .mm-id-guest-arrow {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  flex-shrink: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n#mm-layout .mm-id-guest-toggle .mm-id-guest-arrow {\n  margin-left: auto !important;\n  opacity: 0.6;\n  transition: transform 180ms ease, opacity 180ms ease;\n}\n#mm-layout .mm-id-guest-toggle:hover .mm-id-guest-arrow {\n  transform: translateX(3px);\n  opacity: 1;\n}\n#mm-layout .mm-id-guest-toggle .mm-id-guest-icon svg,\n#mm-layout .mm-id-guest-toggle .mm-id-guest-arrow svg {\n  display: block !important;\n}\n#mm-layout .mm-id-guest-toggle .mm-id-guest-label {\n  display: inline !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  font: inherit !important;\n  color: inherit !important;\n}\n\n/* trust strip identify */\n#mm-layout .mm-id-trust {\n  margin-top: 24px;\n  justify-content: center;\n}\n\n/* política de privacidade */\n#mm-layout .mm-id-lgpd {\n  margin: 16px 0 0;\n  text-align: center;\n  font-size: 12px;\n  color: var(--mm-fg-subtle);\n  line-height: 1.5;\n}\n#mm-layout .mm-id-lgpd a {\n  color: var(--mm-olive);\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n\n/* ----- coluna do summary (sticky desktop) ----- */\n#mm-layout .mm-id-sum {\n  position: sticky;\n  top: 24px;\n  animation: mm-fade-up 540ms cubic-bezier(0.16, 1, 0.3, 1) 180ms both;\n}\n\n@media (max-width: 980px) {\n  #mm-layout .mm-id-sum {\n    position: static;\n  }\n}\n\n#mm-layout .mm-id-sum .mm-h {\n  font-family: 'Libre Baskerville', Georgia, serif;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--mm-fg-soft);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin: 0 0 12px;\n}\n\n#mm-layout .mm-id-sum .mm-sum-card {\n  background: var(--mm-card);\n  border: 1px solid var(--mm-border);\n  border-radius: 16px;\n  padding: 24px;\n  box-shadow: var(--mm-shadow);\n}\n\n/* thumbnails do resumo */\n#mm-layout .mm-id-thumbs {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding-bottom: 18px;\n  margin-bottom: 16px;\n  border-bottom: 1px solid var(--mm-border);\n}\n\n#mm-layout .mm-id-thumb {\n  display: grid;\n  grid-template-columns: 56px 1fr auto;\n  gap: 12px;\n  align-items: center;\n}\n\n#mm-layout .mm-id-thumb-img {\n  position: relative;\n  width: 56px;\n  height: 56px;\n  border-radius: 8px;\n  background: #F5F5F5;\n  overflow: hidden;\n  border: 1px solid var(--mm-border);\n}\n#mm-layout .mm-id-thumb-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n#mm-layout .mm-id-thumb-placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  color: var(--mm-fg-subtle);\n}\n\n/* Qty inline prefix no nome (não mais badge sobre a imagem) */\n#mm-layout .mm-id-thumb-name .mm-id-thumb-qty,\n#mm-layout strong.mm-id-thumb-qty {\n  display: inline-block;\n  font-weight: 700;\n  color: var(--mm-olive);\n  font-size: 13.5px;\n  margin-right: 4px;\n  letter-spacing: 0;\n}\n\n#mm-layout .mm-id-thumb-body {\n  min-width: 0;\n}\n#mm-layout .mm-id-thumb-name {\n  font-size: 13.5px;\n  line-height: 1.35;\n  color: var(--mm-fg);\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  font-weight: 500;\n}\n#mm-layout .mm-id-thumb-variant {\n  font-size: 11.5px;\n  color: var(--mm-fg-meta);\n  margin: 2px 0 0;\n  line-height: 1.3;\n}\n#mm-layout .mm-id-thumb-price {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--mm-fg);\n  white-space: nowrap;\n}\n\n#mm-layout .mm-id-thumb-more {\n  font-size: 12.5px;\n  color: var(--mm-fg-meta);\n  text-align: center;\n  padding: 6px 0 0;\n  font-style: italic;\n}\n\n/* link \"Editar carrinho\" abaixo do total */\n#mm-layout .mm-id-edit-cart {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  margin: 16px 0 0;\n  padding: 10px;\n  font-size: 13px;\n  color: var(--mm-olive);\n  text-decoration: none;\n  border-radius: 8px;\n  transition: background 180ms ease;\n}\n#mm-layout .mm-id-edit-cart:hover {\n  background: var(--mm-olive-soft);\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n\n/* empty state do summary */\n#mm-layout .mm-sum-empty {\n  text-align: center;\n  padding: 12px 0;\n}\n#mm-layout .mm-sum-empty p {\n  font-size: 13.5px;\n  color: var(--mm-fg-meta);\n  margin: 0 0 14px;\n}\n#mm-layout .mm-sum-empty .mm-btn-secondary {\n  display: inline-flex;\n  text-decoration: none;\n}\n\n\n/* ==========================================\n   ZONA 15 — ONEPAGE (Fase 3) — dados pessoais + endereço + frete\n   Reaproveita .mm-input-wrap, .mm-cta, .mm-trust, .mm-help, etc da Zona 14\n   ========================================== */\n\n/* Layout grid mantém o mesmo da Fase 2 (.mm-id-grid) — só ajustes */\n#mm-layout.mm-op-layout {\n  animation: mm-fade-in 320ms cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n\n#mm-layout .mm-op-grid {\n  /* mesmo grid 1.4fr / 1fr da identify */\n}\n\n/* Coluna do form é wider que a da identify pra acomodar 2 cards */\n#mm-layout .mm-op-form-col {\n  background: transparent;\n  border: none;\n  padding: 0;\n  box-shadow: none;\n  animation: mm-fade-up 480ms cubic-bezier(0.16, 1, 0.3, 1) 80ms both;\n}\n\n#mm-layout .mm-op-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 0 0 16px;\n}\n\n/* ----- Cards (dados + endereço) ----- */\n#mm-layout .mm-op-card {\n  background: var(--mm-card);\n  border: 1px solid var(--mm-border);\n  border-radius: 16px;\n  padding: 32px 36px;\n  box-shadow: var(--mm-shadow);\n}\n\n@media (max-width: 980px) {\n  #mm-layout .mm-op-card {\n    padding: 24px 20px;\n    border-radius: 14px;\n  }\n}\n\n#mm-layout .mm-op-card-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-family: 'Libre Baskerville', Georgia, serif;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--mm-fg);\n  margin: 0 0 20px;\n  letter-spacing: -0.005em;\n}\n#mm-layout .mm-op-card-title svg {\n  flex-shrink: 0;\n  color: var(--mm-olive);\n}\n\n/* Grid 2-col interno do card */\n#mm-layout .mm-op-grid-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n#mm-layout .mm-op-col-2 {\n  grid-column: 1 / -1;\n}\n\n@media (max-width: 600px) {\n  #mm-layout .mm-op-grid-2 {\n    grid-template-columns: 1fr;\n  }\n  #mm-layout .mm-op-col-2 {\n    grid-column: 1;\n  }\n}\n\n/* Microcopy soft (LGPD/garantia) abaixo do card de dados */\n#mm-layout .mm-op-microcopy-soft {\n  margin: 14px 0 0;\n  padding: 0;\n  font-size: 12px;\n  color: var(--mm-fg-meta);\n  line-height: 1.5;\n}\n\n/* Input sem ícone (números, complemento, etc) — sem padding-left extra */\n#mm-layout .mm-input.mm-input-noicon {\n  padding-left: 18px !important;\n}\n#mm-layout .mm-input-wrap:has(.mm-input-noicon) .mm-input-icon {\n  display: none !important;\n}\n/* Fallback pra browsers sem :has() — input-noicon assume que não tem icon */\n\n/* Status indicator dentro do CEP input (loading/ok/error) */\n#mm-layout .mm-input-wrap .mm-input-status {\n  position: absolute !important;\n  top: 50% !important;\n  right: 18px !important;\n  transform: translateY(-50%) !important;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--mm-fg-meta);\n  pointer-events: none;\n  z-index: 2;\n}\n#mm-layout .mm-input-wrap .mm-input-status.is-loading::before {\n  content: \"\";\n  width: 14px;\n  height: 14px;\n  border: 2px solid var(--mm-border);\n  border-top-color: var(--mm-olive);\n  border-radius: 50%;\n  animation: mm-load-spin 700ms linear infinite;\n  display: inline-block;\n}\n#mm-layout .mm-input-wrap .mm-input-status.is-ok {\n  color: var(--mm-cta);\n}\n#mm-layout .mm-input-wrap .mm-input-status.is-error {\n  color: #DC2626;\n}\n\n/* Link \"Não sei meu CEP\" abaixo do input */\n#mm-layout .mm-op-cep-help {\n  display: inline-flex;\n  align-items: center;\n  font-size: 12px;\n  color: var(--mm-olive);\n  text-decoration: none;\n  margin: -2px 0 0;\n  padding: 4px 0;\n  grid-column: 1 / -1;\n}\n#mm-layout .mm-op-cep-help:hover {\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n\n/* ----- Frete revealed card ----- */\n/* Frete slot — reserva espaço pra evitar CLS (ui-ux-pro-max §3 content-jumping).\n   Quando vazio mostra placeholder neutro; quando preenchido vira card colorido. */\n#mm-layout .mm-op-frete {\n  margin-top: 16px;\n  min-height: 62px;\n}\n#mm-layout .mm-op-frete:empty::before {\n  content: \"Informe o CEP para calcular o frete\";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 14px 18px;\n  background: #FAFAFA;\n  border: 1px dashed var(--mm-border);\n  border-radius: 10px;\n  font-size: 13px;\n  color: var(--mm-fg-subtle);\n  min-height: 48px;\n}\n\n/* Tabular nums em preços — previne layout shift quando valores mudam\n   (ui-ux-pro-max §6 number-tabular) */\n#mm-layout .mm-total-value,\n#mm-layout .mm-total-pix,\n#mm-layout .mm-total-parcela,\n#mm-layout .mm-row-value,\n#mm-layout .mm-id-thumb-price,\n#mm-layout .mm-op-frete-value {\n  font-variant-numeric: tabular-nums;\n  font-feature-settings: \"tnum\";\n}\n\n/* WhatsApp help na sidebar — margin-top pra separar do summary card */\n#mm-layout .mm-sum-help {\n  margin-top: 14px;\n}\n\n#mm-layout .mm-op-frete-loading {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  background: #FAFAFA;\n  border: 1px dashed var(--mm-border);\n  border-radius: 10px;\n  font-size: 13.5px;\n  color: var(--mm-fg-meta);\n  animation: mm-fade-in 220ms ease-out both;\n}\n#mm-layout .mm-op-frete-spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid var(--mm-border);\n  border-top-color: var(--mm-olive);\n  border-radius: 50%;\n  animation: mm-load-spin 700ms linear infinite;\n  flex-shrink: 0;\n}\n\n#mm-layout .mm-op-frete-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  background: var(--mm-card);\n  border: 1.5px solid var(--mm-border);\n  border-radius: 12px;\n  animation: mm-pop 380ms cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n#mm-layout .mm-op-frete-card.is-free {\n  background: var(--mm-cta-soft);\n  border-color: var(--mm-cta);\n}\n#mm-layout .mm-op-frete-icon {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--mm-olive);\n}\n#mm-layout .mm-op-frete-card.is-free .mm-op-frete-icon {\n  color: var(--mm-cta);\n}\n#mm-layout .mm-op-frete-icon svg {\n  width: 22px !important;\n  height: 22px !important;\n  display: block;\n}\n#mm-layout .mm-op-frete-body {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n  min-width: 0;\n}\n#mm-layout .mm-op-frete-row {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n#mm-layout .mm-op-frete-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--mm-fg);\n  letter-spacing: -0.01em;\n}\n#mm-layout .mm-op-frete-value {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--mm-fg);\n  letter-spacing: -0.01em;\n  white-space: nowrap;\n}\n#mm-layout .mm-op-frete-value.is-free {\n  color: var(--mm-cta);\n  text-transform: uppercase;\n  font-size: 14px;\n  letter-spacing: 0.04em;\n}\n#mm-layout .mm-op-frete-deadline {\n  font-size: 13px;\n  color: var(--mm-fg-soft);\n  font-weight: 500;\n}\n#mm-layout .mm-op-frete-city {\n  font-size: 12px;\n  color: var(--mm-fg-meta);\n}\n\n/* Múltiplas opções (toggle + lista) */\n#mm-layout .mm-op-frete-options {\n  margin-top: 8px;\n}\n#mm-layout .mm-op-frete-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: none;\n  padding: 6px 0;\n  font: inherit;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--mm-olive);\n  cursor: pointer;\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n#mm-layout .mm-op-frete-toggle:hover {\n  color: var(--mm-olive-dark);\n}\n#mm-layout .mm-op-frete-options-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 10px;\n}\n#mm-layout .mm-op-frete-options-list[hidden] { display: none; }\n#mm-layout .mm-op-frete-opt {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: var(--mm-card);\n  border: 1.5px solid var(--mm-border);\n  border-radius: 10px;\n  cursor: pointer;\n  text-align: left;\n  width: 100%;\n  font: inherit;\n  color: inherit;\n  transition: border-color 120ms ease, background 120ms ease, box-shadow 120ms ease;\n}\n#mm-layout .mm-op-frete-opt:hover {\n  border-color: var(--mm-olive);\n  background: var(--mm-olive-soft);\n}\n#mm-layout .mm-op-frete-opt.is-selected {\n  border-color: var(--mm-olive);\n  background: var(--mm-olive-soft);\n  box-shadow: 0 0 0 3px rgba(75, 102, 74, 0.08);\n}\n#mm-layout .mm-op-frete-opt-radio {\n  flex-shrink: 0;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 2px solid var(--mm-border);\n  background: var(--mm-card);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n#mm-layout .mm-op-frete-opt.is-selected .mm-op-frete-opt-radio {\n  border-color: var(--mm-olive);\n}\n#mm-layout .mm-op-frete-opt-radio span {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--mm-olive);\n  opacity: 0;\n}\n#mm-layout .mm-op-frete-opt.is-selected .mm-op-frete-opt-radio span {\n  opacity: 1;\n}\n#mm-layout .mm-op-frete-opt-body {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n  min-width: 0;\n}\n#mm-layout .mm-op-frete-opt-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--mm-fg);\n  letter-spacing: -0.01em;\n}\n#mm-layout .mm-op-frete-opt-deadline {\n  font-size: 12px;\n  color: var(--mm-fg-meta);\n}\n#mm-layout .mm-op-frete-opt-value {\n  flex-shrink: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--mm-fg);\n  white-space: nowrap;\n}\n#mm-layout .mm-op-frete-opt-value.is-free {\n  color: var(--mm-cta);\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 0.04em;\n}\n#mm-layout .mm-op-frete-error {\n  padding: 14px 18px;\n  background: #FEF2F2;\n  border: 1px solid #FCA5A5;\n  border-radius: 10px;\n  color: #B91C1C;\n  font-size: 13px;\n  line-height: 1.4;\n  animation: mm-fade-in 220ms ease-out both;\n}\n\n/* ----- CTA pagamento ----- */\n#mm-layout .mm-op-cta {\n  margin-top: 4px;\n  font-size: 16px;\n}\n\n#mm-layout .mm-op-cta-sub {\n  margin: -8px 0 0;\n  text-align: center;\n  justify-content: center;\n}\n\n/* ----- Overlay fullscreen \"Processando...\" ----- */\n#mm-op-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.94);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  z-index: 999999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: mm-fade-in 220ms ease-out both;\n}\n#mm-op-overlay .mm-op-overlay-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18px;\n  padding: 36px 48px;\n  background: var(--mm-card, #FFFFFF);\n  border: 1px solid var(--mm-border, #E7E7E7);\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n}\n#mm-op-overlay .mm-op-overlay-spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #E7E7E7;\n  border-top-color: #4B664A;\n  border-radius: 50%;\n  animation: mm-load-spin 800ms linear infinite;\n}\n#mm-op-overlay .mm-op-overlay-text {\n  margin: 0;\n  font-family: 'Poppins', system-ui, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: #121212;\n  letter-spacing: -0.005em;\n}\n\n/* ==========================================\n   ZONA 16 — STEP 3 PAYMENT (Fase 4)\n   Hijack do step 3 do /onepage — radios PIX/cartão/boleto, cartão form\n   inline, summary lateral dinâmico, trust máximo, CTA primário único.\n   Reaproveita tokens + componentes das zonas 2, 14, 15.\n   ========================================== */\n\n/* Layout grid (mirror .mm-id-grid / .mm-op-grid) */\n#mm-layout.mm-op-step3-layout {\n  animation: mm-fade-in 320ms cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n\n/* Step 3: 2-col layout — payment card sozinho à esquerda,\n   coluna direita empilha dados + endereço + resumo. */\n#mm-layout .mm-op-step3-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);\n  gap: 20px;\n  align-items: start;\n  max-width: 1280px;\n  margin: 12px auto 32px;\n  padding: 0 24px;\n}\n\n#mm-layout .mm-op-step3-left {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  animation: mm-fade-up 480ms cubic-bezier(0.16, 1, 0.3, 1) 80ms both;\n}\n\n/* Sidebar direita: empilha dados + endereço + resumo */\n#mm-layout .mm-op-step3-sum-wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  position: sticky;\n  top: 24px;\n  animation: mm-fade-up 520ms cubic-bezier(0.16, 1, 0.3, 1) 140ms both;\n}\n\n/* Cards \"completed\" (dados + endereço) viram filhos diretos da coluna */\n#mm-layout .mm-op-step3-completed {\n  display: contents;\n}\n\n/* Summary inline (não sticky interno) */\n#mm-layout .mm-op-step3-sum-wrap .mm-op-step3-sum,\n#mm-layout .mm-op-step3-sum-wrap .mm-id-sum {\n  position: static !important;\n  top: auto !important;\n  margin: 0;\n  animation: none;\n}\n\n@media (max-width: 980px) {\n  #mm-layout .mm-op-step3-grid {\n    grid-template-columns: 1fr;\n    gap: 12px;\n    margin-top: 10px;\n    padding: 0 8px;\n  }\n  #mm-layout .mm-op-step3-sum-wrap {\n    position: static;\n    order: -1;\n  }\n}\n\n#mm-layout .mm-op-completed-card {\n  background: var(--mm-card);\n  border: 1px solid var(--mm-border);\n  border-radius: 14px;\n  padding: 16px 18px;\n  box-shadow: var(--mm-shadow-sm);\n  min-width: 0;\n}\n#mm-layout .mm-op-completed-head {\n  margin-bottom: 10px;\n}\n\n#mm-layout .mm-op-completed-head {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n\n#mm-layout .mm-op-completed-check {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: var(--mm-cta);\n  color: #fff;\n  flex-shrink: 0;\n}\n#mm-layout .mm-op-completed-check svg {\n  width: 13px;\n  height: 13px;\n}\n\n#mm-layout .mm-op-completed-title {\n  flex: 1;\n  margin: 0;\n  font-family: 'Poppins', system-ui, sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--mm-fg);\n  letter-spacing: -0.005em;\n}\n\n#mm-layout .mm-op-completed-edit {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--mm-olive);\n  text-decoration: none;\n  padding: 6px 8px;\n  border-radius: 6px;\n  transition: background 150ms ease;\n}\n#mm-layout .mm-op-completed-edit:hover {\n  background: rgba(75, 102, 74, 0.08);\n  text-decoration: none;\n}\n#mm-layout .mm-op-completed-edit svg {\n  flex-shrink: 0;\n}\n\n#mm-layout .mm-op-completed-body {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin: 0;\n  padding: 0;\n}\n#mm-layout .mm-op-completed-body > div {\n  display: flex;\n  gap: 6px;\n  align-items: baseline;\n  font-size: 13px;\n  line-height: 1.45;\n}\n#mm-layout .mm-op-completed-body dt {\n  font-weight: 500;\n  color: var(--mm-fg-meta);\n  min-width: 48px;\n  margin: 0;\n}\n#mm-layout .mm-op-completed-body dd {\n  margin: 0;\n  color: var(--mm-fg);\n  word-break: break-word;\n}\n\n#mm-layout .mm-op-completed-address {\n  font-style: normal;\n  font-size: 13px;\n  line-height: 1.55;\n  color: var(--mm-fg);\n}\n\n/* ----- Card principal de pagamento ----- */\n#mm-layout .mm-op-step3-card {\n  background: var(--mm-card);\n  border: 1px solid var(--mm-border);\n  border-radius: 16px;\n  padding: 22px 28px 24px;\n  box-shadow: var(--mm-shadow);\n}\n\n@media (max-width: 760px) {\n  #mm-layout .mm-op-step3-card {\n    padding: 18px 16px;\n    border-radius: 14px;\n  }\n}\n\n#mm-layout .mm-op-step3-heading {\n  margin-bottom: 16px;\n}\n#mm-layout .mm-op-step3-heading .mm-h {\n  font-family: 'Libre Baskerville', Georgia, serif;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--mm-fg);\n  margin: 0 0 6px;\n  letter-spacing: -0.01em;\n  line-height: 1.2;\n}\n#mm-layout .mm-op-step3-sub {\n  margin: 0;\n  font-size: 13px;\n  color: var(--mm-fg-meta);\n  line-height: 1.55;\n}\n\n/* ----- Radio cards (PIX / Cartão / Boleto) ----- */\n#mm-layout .mm-op-pay-radios {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n\n/* Defensivo: Magazord aplica display:flex column em label → força block\n   pros label radios do nosso step 3 (mas também adicionamos width/box-sizing\n   explícitos nos descendants pra evitar regressões). */\n#mm-layout .mm-op-pay-radio {\n  display: block !important;\n  flex-direction: initial !important;\n  width: 100% !important;\n  box-sizing: border-box !important;\n  background: var(--mm-card);\n  border: 1.5px solid var(--mm-border);\n  border-radius: 14px;\n  padding: 0;\n  cursor: pointer;\n  transition: border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease;\n  overflow: hidden;\n  position: relative;\n  margin: 0 !important;\n}\n#mm-layout .mm-op-pay-head,\n#mm-layout .mm-op-pay-detail,\n#mm-layout .mm-op-card-form,\n#mm-layout .mm-op-card-field {\n  width: 100%;\n  box-sizing: border-box;\n}\n#mm-layout .mm-op-card-field {\n  min-width: 0; /* permite shrink dentro do grid */\n}\n#mm-layout .mm-op-card-field label {\n  display: block !important;\n  flex-direction: initial !important;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n#mm-layout .mm-op-pay-radio:hover {\n  border-color: #c7c7c7;\n  background: #fdfdfd;\n}\n#mm-layout .mm-op-pay-radio.is-active {\n  border-color: var(--mm-cta);\n  background: #fafbfa;\n  box-shadow: 0 0 0 3px rgba(27, 122, 69, 0.08), var(--mm-shadow-sm);\n}\n\n/* Esconde radio nativo — mm-shadow-mode wildcard força opacity:1, width:auto\n   e position:static em todos descendentes do #mm-layout, então aqui precisamos\n   de !important pra manter o input invisível. Usa position absolute fora da tela\n   pra evitar clip/tab focus acidental. */\n#mm-layout .mm-op-pay-radio input[type=\"radio\"] {\n  position: absolute !important;\n  left: -9999px !important;\n  top: -9999px !important;\n  width: 1px !important;\n  height: 1px !important;\n  opacity: 0 !important;\n  pointer-events: none !important;\n  clip: rect(0, 0, 0, 0);\n}\n\n#mm-layout .mm-op-pay-head {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 18px 22px;\n  min-height: 72px;\n}\n\n/* !important em width/height/position — mm-shadow-mode wildcard\n   (#checkout-main-area.mm-shadow-mode #mm-layout *) força\n   position:static, width:auto, height:auto, quebrando o dot. */\n#mm-layout .mm-op-pay-radio-dot {\n  flex-shrink: 0;\n  width: 20px !important;\n  height: 20px !important;\n  border: 2px solid #d4d4d4;\n  border-radius: 50% !important;\n  background: #fff;\n  position: relative !important;\n  transition: border-color 180ms ease;\n}\n#mm-layout .mm-op-pay-radio.is-active .mm-op-pay-radio-dot {\n  border-color: var(--mm-cta);\n}\n#mm-layout .mm-op-pay-radio.is-active .mm-op-pay-radio-dot::after {\n  content: '';\n  position: absolute !important;\n  top: 50% !important;\n  left: 50% !important;\n  transform: translate(-50%, -50%);\n  width: 10px !important;\n  height: 10px !important;\n  background: var(--mm-cta);\n  border-radius: 50% !important;\n  animation: mm-pop 240ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n#mm-layout .mm-op-pay-icon {\n  flex-shrink: 0;\n  color: var(--mm-olive);\n  display: inline-flex;\n  align-items: center;\n}\n#mm-layout .mm-op-pay-radio.is-active .mm-op-pay-icon {\n  color: var(--mm-cta);\n}\n\n#mm-layout .mm-op-pay-body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n#mm-layout .mm-op-pay-title {\n  font-family: 'Poppins', system-ui, sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--mm-fg);\n  letter-spacing: -0.005em;\n}\n\n#mm-layout .mm-op-pay-sub {\n  font-size: 12.5px;\n  color: var(--mm-fg-meta);\n  line-height: 1.35;\n}\n\n#mm-layout .mm-op-pay-price {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n  flex-shrink: 0;\n}\n\n#mm-layout .mm-op-pay-badge-save {\n  display: inline-block;\n  font-family: 'Poppins', system-ui, sans-serif;\n  font-size: 10.5px;\n  font-weight: 600;\n  color: #fff;\n  background: var(--mm-olive);\n  padding: 3px 8px;\n  border-radius: 999px;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  white-space: nowrap;\n}\n\n#mm-layout .mm-op-pay-amount {\n  font-family: 'Libre Baskerville', Georgia, serif;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--mm-fg);\n  letter-spacing: -0.01em;\n  font-variant-numeric: tabular-nums lining-nums;\n  white-space: nowrap;\n}\n#mm-layout .mm-op-step3-sum .mm-total-value,\n#mm-layout .mm-op-step3-sum .mm-row-value {\n  font-variant-numeric: tabular-nums lining-nums;\n}\n#mm-layout .mm-op-pay-radio.is-active .mm-op-pay-amount {\n  color: var(--mm-cta);\n}\n\n/* ----- Detail panel (expande quando ativo) -----\n   Magazord CSS força overflow:visible em descendants do checkout-main —\n   combate com !important + height:0 + visibility:hidden pra garantir o\n   collapse absoluto quando a forma não está ativa. */\n/* Detail collapsed — display:none evita flicker de height animation,\n   remove do layout flow, e impede password managers (Bitwarden) de\n   tentar preencher os campos do cartão quando PIX/boleto estão ativos. */\n#mm-layout .mm-op-pay-detail {\n  display: none !important;\n}\n#mm-layout .mm-op-pay-radio.is-active .mm-op-pay-detail {\n  display: block !important;\n  padding: 4px 22px 22px !important;\n  animation: mm-fade-in 200ms ease-out both;\n}\n\n#mm-layout .mm-op-pay-benefits {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n#mm-layout .mm-op-pay-benefits li {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--mm-fg-soft);\n  line-height: 1.45;\n}\n#mm-layout .mm-op-pay-benefits li svg {\n  flex-shrink: 0;\n  color: var(--mm-cta);\n  margin-top: 2px;\n}\n\n/* Bandeiras cartão (flags row) */\n#mm-layout .mm-op-pay-brands {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  margin: 0 0 16px;\n  flex-wrap: wrap;\n}\n#mm-layout .mm-op-pay-brands img {\n  width: 32px;\n  height: 20px;\n  object-fit: contain;\n  opacity: 0.85;\n}\n\n/* ----- Cartão form grid ----- */\n#mm-layout .mm-op-card-form {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n#mm-layout .mm-op-card-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n#mm-layout .mm-op-card-field-full {\n  grid-column: 1 / -1;\n}\n#mm-layout .mm-op-card-field label {\n  font-family: 'Poppins', system-ui, sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--mm-fg-meta);\n  letter-spacing: -0.003em;\n}\n\n/* Input wrap do cartão (mostra brand detected à direita) — !important\n   pra sobrescrever mm-shadow-mode wildcard que força position:static. */\n#mm-layout .mm-input-wrap-card {\n  position: relative !important;\n}\n#mm-layout .mm-input-wrap-card .mm-input {\n  padding-right: 74px !important; /* espaço pro badge brand à direita */\n}\n#mm-layout .mm-op-card-brand-detected {\n  position: absolute !important;\n  right: 14px !important;\n  top: 50% !important;\n  left: auto !important;\n  transform: translateY(-50%);\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  color: var(--mm-fg-meta);\n  padding: 3px 6px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  text-transform: uppercase;\n  pointer-events: none;\n  transition: background 180ms ease, color 180ms ease;\n  white-space: nowrap;\n}\n#mm-layout .mm-op-card-brand-detected:empty {\n  display: none !important;\n}\n#mm-layout .mm-op-card-brand-detected.is-visa,\n#mm-layout .mm-op-card-brand-detected.is-mastercard,\n#mm-layout .mm-op-card-brand-detected.is-amex,\n#mm-layout .mm-op-card-brand-detected.is-elo,\n#mm-layout .mm-op-card-brand-detected.is-hipercard {\n  background: var(--mm-cta);\n  color: #fff;\n}\n\n#mm-layout .mm-op-card-installments {\n  appearance: none;\n  background-color: #fff;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23374151' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 16px center;\n  padding-right: 40px !important;\n  cursor: pointer;\n}\n\n/* Required indicator (*) — sutil, não poluidor (form-cro) */\n#mm-layout .mm-op-req {\n  color: #DC2626;\n  margin-left: 2px;\n  font-weight: 700;\n}\n\n/* Inline error message slot — aparece só quando .is-visible (form-cro: error clarity) */\n#mm-layout .mm-op-field-err {\n  display: block;\n  min-height: 0;\n  max-height: 0;\n  overflow: hidden;\n  font-family: 'Poppins', system-ui, sans-serif;\n  font-size: 11.5px;\n  color: #DC2626;\n  line-height: 1.4;\n  font-weight: 500;\n  letter-spacing: -0.003em;\n  margin: 0;\n  opacity: 0;\n  transition: max-height 240ms cubic-bezier(0.16, 1, 0.3, 1),\n              opacity 180ms ease,\n              margin 200ms ease;\n}\n#mm-layout .mm-op-field-err.is-visible {\n  max-height: 40px;\n  margin-top: 4px;\n  opacity: 1;\n}\n\n@media (max-width: 520px) {\n  #mm-layout .mm-op-card-form {\n    grid-template-columns: 1fr;\n  }\n  #mm-layout .mm-op-card-field-half {\n    grid-column: 1;\n  }\n}\n@media (min-width: 521px) {\n  #mm-layout .mm-op-card-field-half {\n    grid-column: span 1;\n  }\n}\n\n/* ----- CTA finalizar ----- */\n#mm-layout .mm-op-finalizar {\n  width: 100%;\n  margin-top: 4px;\n  gap: 8px;\n}\n#mm-layout .mm-op-finalizar .mm-op-finalizar-label {\n  font-weight: 600;\n}\n\n#mm-layout .mm-op-finalizar-sub {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  justify-content: center;\n  margin: 14px 0 0;\n  font-size: 11.5px;\n  color: var(--mm-fg-meta);\n  line-height: 1.4;\n  text-align: center;\n}\n#mm-layout .mm-op-finalizar-sub svg {\n  flex-shrink: 0;\n  color: var(--mm-olive);\n}\n\n/* ----- Trust footer do step 3 ----- */\n#mm-layout .mm-op-trust-payment {\n  padding: 20px 22px;\n  background: #fafafa;\n  border: 1px solid var(--mm-border);\n  border-radius: 14px;\n  text-align: center;\n}\n\n#mm-layout .mm-op-trust-payment-row {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 12px;\n}\n\n#mm-layout .mm-op-trust-payment .mm-trust-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--mm-fg-soft);\n  font-weight: 500;\n}\n#mm-layout .mm-op-trust-payment .mm-trust-item svg {\n  color: var(--mm-olive);\n}\n\n#mm-layout .mm-op-trust-payment-note {\n  margin: 0;\n  font-size: 11px;\n  color: var(--mm-fg-meta);\n  line-height: 1.5;\n}\n#mm-layout .mm-op-trust-payment-note a {\n  color: var(--mm-olive);\n  text-decoration: underline;\n}\n\n/* ----- Summary lateral do step 3 (reaproveita .mm-id-sum) ----- */\n#mm-layout .mm-op-step3-sum {\n  /* Herda do .mm-id-sum da zona 14 */\n}\n\n/* Row desconto PIX destacado */\n#mm-layout .mm-row-pix-discount {\n  background: rgba(75, 102, 74, 0.06);\n  margin: 2px -8px;\n  padding: 6px 8px;\n  border-radius: 6px;\n}\n#mm-layout .mm-row-pix-discount .mm-row-label {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--mm-olive);\n  font-weight: 600;\n}\n#mm-layout .mm-row-pix-discount .mm-row-label svg {\n  color: var(--mm-olive);\n}\n\n/* Mobile: reorder + spacing tight + sticky CTA (form-cro: always-visible CTA) */\n@media (max-width: 760px) {\n  #mm-layout .mm-op-pay-head {\n    padding: 16px 18px;\n    gap: 12px;\n    min-height: 68px;\n  }\n  #mm-layout .mm-op-pay-title {\n    font-size: 15px;\n  }\n  #mm-layout .mm-op-pay-amount {\n    font-size: 16px;\n  }\n  #mm-layout .mm-op-pay-detail {\n    padding: 0 18px !important;\n  }\n  #mm-layout .mm-op-pay-radio.is-active .mm-op-pay-detail {\n    padding: 4px 18px 18px !important;\n  }\n  #mm-layout .mm-op-trust-payment {\n    padding: 16px 14px;\n  }\n  #mm-layout .mm-op-trust-payment-row {\n    gap: 12px 18px;\n  }\n\n  /* Mobile sticky CTA wrapper — fica visível mesmo com scroll longo.\n     Padding-bottom no layout pra compensar o sticky overlap. */\n  #mm-layout.mm-op-step3-layout {\n    padding-bottom: 96px;\n  }\n  #mm-layout .mm-op-step3-card {\n    position: relative;\n  }\n  #mm-layout .mm-op-finalizar {\n    position: sticky;\n    bottom: 12px;\n    z-index: 100;\n    box-shadow: 0 10px 30px rgba(27, 122, 69, 0.25), 0 2px 6px rgba(0, 0, 0, 0.08);\n  }\n}\n\n/* Reduced motion: remove animações */\n@media (prefers-reduced-motion: reduce) {\n  #mm-layout.mm-op-step3-layout,\n  #mm-layout .mm-op-step3-left,\n  #mm-layout .mm-op-step3-sum-wrap,\n  #mm-layout .mm-op-pay-detail,\n  #mm-layout .mm-op-pay-radio,\n  #mm-layout .mm-op-pay-radio-dot::after {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n";document.head.appendChild(s)})();

  /* Inject CSS: ticker.css */
  (function(){if(document.getElementById("mm-ticker-css"))return;var s=document.createElement("style");s.id="mm-ticker-css";s.textContent=".ticker-bar {\n    background-color: #4b664a;\n    overflow: hidden;\n    white-space: nowrap;\n    position: relative;\n    width: 100%;\n    padding: 10px 0;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n  .ticker-track {\n    display: inline-flex;\n    animation: ticker-scroll 65s linear infinite;\n  }\n\n  .ticker-track:hover {\n    animation-play-state: paused;\n  }\n\n  .ticker-item {\n    display: inline-flex;\n    align-items: center;\n    padding: 0 20px;\n    color: #f8f8f8;\n    font-size: 13px;\n    letter-spacing: 0.5px;\n    text-decoration: none;\n    white-space: nowrap;\n  }\n\n  .ticker-item a {\n    color: #f8f8f8;\n    text-decoration: none;\n  }\n\n  .ticker-item a:hover {\n    text-decoration: underline;\n  }\n\n  .ticker-separator {\n    display: inline-flex;\n    align-items: center;\n    color: #f8f8f8;\n    opacity: 0.5;\n    padding: 0 5px;\n    font-size: 10px;\n  }\n\n  .ticker-close {\n    position: absolute;\n    right: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n    background: none;\n    border: none;\n    color: #000000;\n    font-size: 16px;\n    cursor: pointer;\n    opacity: 0.5;\n    padding: 2px 6px;\n    line-height: 1;\n    z-index: 2;\n    transition: opacity 0.2s;\n  }\n\n  .ticker-close:hover {\n    opacity: 1;\n  }\n\n  @keyframes ticker-scroll {\n    0% {\n      transform: translateX(0);\n    }\n    100% {\n      transform: translateX(-50%);\n    }\n  }";document.head.appendChild(s)})();

  /* Inject CSS: header.css */
  (function(){if(document.getElementById("mm-header-css"))return;var s=document.createElement("style");s.id="mm-header-css";s.textContent="/* =============================================\n   HEADER — Madeira Mania\n   Substitui .ra-header > .header-top / .header-middle / .header-bottom\n   Aplica em TODAS as páginas\n   ============================================= */\n\n#mm-header {\n  /* Layout */\n  --h-topbar: 32px;\n  --h-main: 88px;\n  --h-nav: 48px;\n  --h-main-compact: 56px;\n  --h-mobile-topbar: 28px;\n  --h-mobile-main: 64px;\n  --container-max: 1280px;\n  --container-pad: 40px;\n  --container-pad-mobile: 16px;\n\n  /* Colors */\n  --c-topbar-bg: #F2F2F2; /* matches site canonical bg-background-color */\n  --c-header-bg: #FFFFFF;\n  --c-text: #333333;\n  --c-text-muted: #999999;\n  --c-text-heading: #4b664a;\n  --c-brand: #4b664a;\n  --c-border: #E6E6E6;\n  --c-scrim: rgba(0, 0, 0, 0.5);\n  --c-scrim-light: rgba(0, 0, 0, 0.04);\n\n  /* Glass */\n  --c-glass-bg: rgba(255, 255, 255, 0.85);\n  --glass-blur: blur(12px);\n\n  /* Typography */\n  --font-sans: 'Montserrat', system-ui, -apple-system, sans-serif;\n  --ls-loose: 0.04em;\n  --ls-nav: 0.08em;\n\n  /* Motion */\n  --t-fast: 200ms cubic-bezier(0.16, 1, 0.3, 1);\n  --t-base: 250ms cubic-bezier(0.16, 1, 0.3, 1);\n\n  /* Z */\n  --z-header: 100;\n  --z-overlay: 200;\n  --z-drawer: 300;\n\n  /* Reset */\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: var(--z-header);\n  font-family: var(--font-sans);\n  color: var(--c-text);\n}\n\n#mm-header *, #mm-header *::before, #mm-header *::after {\n  box-sizing: border-box;\n}\n\n#mm-header a {\n  color: inherit;\n  text-decoration: none;\n  transition: color var(--t-fast);\n}\n\n/* Topbar */\n#mm-header .mm-h-topbar {\n  height: var(--h-topbar);\n  background: var(--c-topbar-bg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#mm-header .mm-h-topbar-inner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: var(--ls-loose);\n  color: var(--c-brand);\n}\n#mm-header .mm-h-topbar-inner a {\n  -webkit-tap-highlight-color: transparent;\n  touch-action: manipulation;\n}\n#mm-header .mm-h-topbar-inner a:hover { color: #2f4a2e; }\n#mm-header .mm-h-topbar-sep { color: var(--c-brand); opacity: 0.4; }\n#mm-header .mm-h-topbar-desktop-only { display: contents; }\n@media (max-width: 767px) {\n  #mm-header .mm-h-topbar-desktop-only { display: none; }\n}\n\n/* Header main */\n#mm-header .mm-h-main {\n  height: var(--h-main);\n  background: var(--c-header-bg);\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 0 var(--container-pad);\n  max-width: 100vw;\n  border-bottom: 1px solid var(--c-border);\n}\n#mm-header .mm-h-main-left {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n#mm-header .mm-h-main-right {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 32px;\n}\n#mm-header .mm-h-logo {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  line-height: 0;\n}\n#mm-header .mm-h-logo img {\n  width: 280px;\n  height: auto;\n  display: block;\n}\n#mm-header .mm-h-action {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: var(--ls-loose);\n  padding: 12px 14px;\n  min-height: 44px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  color: var(--c-text);\n  touch-action: manipulation;\n  -webkit-tap-highlight-color: transparent;\n  position: relative;\n}\n#mm-header .mm-h-action:hover { color: var(--c-brand); }\n#mm-header .mm-h-action svg {\n  width: 20px;\n  height: 20px;\n  stroke: currentColor;\n  stroke-width: 1.6;\n  fill: none;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  flex-shrink: 0;\n}\n\n/* Hamburger (mobile-only, shown via @media below) */\n#mm-header .mm-h-burger {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  padding: 0;\n  background: transparent;\n  border: none;\n  font-size: 20px;\n  color: var(--c-text);\n  cursor: pointer;\n  touch-action: manipulation;\n  -webkit-tap-highlight-color: transparent;\n}\n#mm-header .mm-h-burger:hover { color: var(--c-brand); }\n/* Cart badge — pill on top-right of the cart icon */\n#mm-header #mm-h-cart .mm-h-cart-icon {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n#mm-header .mm-h-cart-badge {\n  position: absolute;\n  top: -6px;\n  right: -8px;\n  min-width: 16px;\n  height: 16px;\n  padding: 0 4px;\n  background: var(--c-brand);\n  color: #FFFFFF;\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 16px;\n  text-align: center;\n  border-radius: 9999px;\n  border: 2px solid var(--c-header-bg);\n  box-sizing: content-box;\n  letter-spacing: 0;\n}\n\n/* Focus-visible (a11y) */\n#mm-header a:focus-visible,\n#mm-header button:focus-visible {\n  outline: 2px solid var(--c-brand);\n  outline-offset: 3px;\n  border-radius: 2px;\n}\n\n/* Skip-link (a11y) */\n#mm-header .mm-h-skip {\n  position: absolute;\n  left: -9999px;\n}\n#mm-header .mm-h-skip:focus {\n  position: fixed;\n  top: 8px;\n  left: 8px;\n  background: #FFFFFF;\n  color: var(--c-text);\n  padding: 12px 16px;\n  z-index: 9999;\n  outline: 2px solid var(--c-brand);\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n/* Mobile */\n@media (max-width: 767px) {\n  #mm-header .mm-h-topbar { height: var(--h-mobile-topbar); }\n  #mm-header .mm-h-topbar-inner { font-size: 11px; gap: 10px; }\n  #mm-header .mm-h-main { height: var(--h-mobile-main); padding: 0 var(--container-pad-mobile); }\n\n  /* Switch from desktop absolute-center logo to flex layout\n     (absolute layout causes logo/right-cluster collision at <=767px) */\n  #mm-header .mm-h-main-left { flex: 0 0 auto; }\n  #mm-header .mm-h-main-right { flex: 0 0 auto; gap: 8px; }\n  #mm-header .mm-h-logo {\n    position: static;\n    transform: none;\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    min-width: 0;\n  }\n  #mm-header .mm-h-logo img {\n    max-width: 160px;\n    width: auto;\n    height: auto;\n  }\n\n  /* Show burger, hide desktop-only actions */\n  #mm-header .mm-h-burger { display: inline-flex; }\n  #mm-header .mm-h-action#mm-h-buscar { display: none; }\n  #mm-header .mm-h-main-right .mm-h-action[href=\"/wishlist\"],\n  #mm-header .mm-h-main-right .mm-h-action[href=\"/login\"] { display: none; }\n}\n\n@media (max-width: 479px) {\n  #mm-header .mm-h-logo img { max-width: 130px; }\n}\n\n/* Nav row */\n#mm-header .mm-h-nav {\n  height: var(--h-nav);\n  background: var(--c-header-bg);\n  border-top: 1px solid var(--c-border);\n  border-bottom: 1px solid var(--c-border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n#mm-header .mm-h-nav-list {\n  list-style: none;\n  display: flex;\n  gap: 64px;\n  margin: 0;\n  padding: 0;\n  align-items: center;\n}\n#mm-header .mm-h-nav-item {\n  position: static; /* mega-menu uses nav as positioning context, not the li */\n}\n#mm-header .mm-h-nav-link {\n  font-size: 13px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: var(--ls-nav);\n  color: var(--c-text);\n  padding: 12px 8px;\n  display: inline-flex;\n  align-items: center;\n  min-height: 44px;\n  position: relative;\n  touch-action: manipulation;\n  -webkit-tap-highlight-color: transparent;\n}\n#mm-header .mm-h-nav-link:hover {\n  color: var(--c-brand);\n}\n#mm-header .mm-h-nav-link::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  right: 50%;\n  bottom: 8px;\n  height: 2px;\n  background: var(--c-brand);\n  transition: left var(--t-fast), right var(--t-fast);\n}\n#mm-header .mm-h-nav-link:hover::after,\n#mm-header .mm-h-nav-item.is-open > .mm-h-nav-link::after,\n#mm-header .mm-h-nav-link.is-active::after {\n  left: 8px;\n  right: 8px;\n}\n\n/* Hide nav on mobile (drawer in Phase 6 handles mobile nav) */\n@media (max-width: 767px) {\n  #mm-header .mm-h-nav { display: none; }\n}\n\n/* Mega-menu (hover-triggered from nav items) */\n#mm-header .mm-h-mega {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 100%;\n  background: var(--c-header-bg);\n  border-bottom: 1px solid var(--c-border);\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(-8px);\n  transition: opacity var(--t-fast), transform var(--t-fast);\n  padding: 40px 0;\n}\n#mm-header .mm-h-nav-item.is-open .mm-h-mega {\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateY(0);\n}\n#mm-header .mm-h-mega-inner {\n  max-width: var(--container-max);\n  margin: 0 auto;\n  padding: 0 var(--container-pad);\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 48px;\n}\n#mm-header .mm-h-mega-heading {\n  font-size: 13px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--c-text);\n  margin: 0 0 14px;\n  display: block;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--c-border);\n}\n#mm-header .mm-h-mega-heading-link {\n  transition: color var(--t-fast), border-color var(--t-fast);\n}\n#mm-header .mm-h-mega-heading-link:hover {\n  color: var(--c-brand);\n  border-bottom-color: var(--c-brand);\n}\n/* Stacked heading inside same column (2nd ambiente in col 3 and 4) */\n#mm-header .mm-h-mega-col ul + .mm-h-mega-heading {\n  margin-top: 28px;\n}\n#mm-header .mm-h-mega-col ul {\n  list-style: none;\n  margin: 0 0 4px;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n#mm-header .mm-h-mega-col a {\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--c-text);\n  padding: 6px 0;\n  min-height: 32px;\n  display: inline-flex;\n  align-items: center;\n  transition: color var(--t-fast);\n}\n#mm-header .mm-h-mega-col a:hover {\n  color: var(--c-brand);\n}\n\n/* Mega-menu footer with CTA */\n#mm-header .mm-h-mega-footer {\n  max-width: var(--container-max);\n  margin: 32px auto 0;\n  padding: 20px var(--container-pad) 0;\n  border-top: 1px solid var(--c-border);\n  display: flex;\n  justify-content: flex-end;\n}\n#mm-header .mm-h-mega-cta {\n  font-size: 13px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: var(--ls-nav);\n  color: var(--c-brand);\n  padding: 10px 0;\n  min-height: 44px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: gap var(--t-fast);\n  touch-action: manipulation;\n}\n#mm-header .mm-h-mega-cta:hover {\n  gap: 12px;\n  color: var(--c-text-heading);\n}\n\n/* Mega-menu hidden on mobile (drawer handles mobile nav) */\n@media (max-width: 767px) {\n  #mm-header .mm-h-mega { display: none; }\n}\n\n/* Search overlay */\n#mm-header .mm-h-search-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: var(--z-overlay);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  animation: mm-fade-in var(--t-base) ease-out;\n}\n#mm-header .mm-h-search-overlay[hidden] {\n  display: none;\n}\n#mm-header .mm-h-search-backdrop {\n  position: absolute;\n  inset: 0;\n  background: var(--c-scrim);\n}\n#mm-header .mm-h-search-inner {\n  position: relative;\n  width: 100%;\n  max-width: 800px;\n  background: var(--c-header-bg);\n  padding: 56px 40px 40px;\n  margin-top: 80px;\n  animation: mm-slide-down var(--t-base) ease-out;\n  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n}\n#mm-header .mm-h-search-close {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: transparent;\n  border: none;\n  font-size: 28px;\n  line-height: 1;\n  cursor: pointer;\n  width: 44px;\n  height: 44px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--c-text);\n  touch-action: manipulation;\n  -webkit-tap-highlight-color: transparent;\n}\n#mm-header .mm-h-search-close:hover {\n  color: var(--c-brand);\n}\n#mm-header .mm-h-search-label {\n  position: absolute;\n  left: -9999px;\n}\n#mm-header .mm-h-search-form {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 20px;\n  background: var(--c-topbar-bg);\n  border-radius: 9999px;\n  border: 1px solid var(--c-border);\n}\n#mm-header .mm-h-search-form::before {\n  content: '';\n  flex-shrink: 0;\n  width: 20px;\n  height: 20px;\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23999999' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.3-4.3'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n}\n#mm-header .mm-h-search-form input {\n  width: 100%;\n  font-size: 18px;\n  font-family: var(--font-sans);\n  font-weight: 400;\n  border: none;\n  padding: 4px 0;\n  outline: none;\n  background: transparent;\n  color: var(--c-text);\n  letter-spacing: 0.01em;\n}\n#mm-header .mm-h-search-form input::placeholder {\n  color: var(--c-text-muted);\n}\n#mm-header .mm-h-search-suggestions {\n  margin-top: 28px;\n}\n#mm-header .mm-h-search-sug-label {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--c-text-muted);\n  margin-bottom: 14px;\n}\n#mm-header .mm-h-search-suggestions a {\n  display: inline-flex;\n  align-items: center;\n  font-size: 13px;\n  color: var(--c-text);\n  padding: 10px 16px;\n  margin: 0 8px 8px 0;\n  background: var(--c-topbar-bg);\n  border: 1px solid var(--c-border);\n  border-radius: 9999px;\n  min-height: 44px;\n  transition: background var(--t-fast), color var(--t-fast), border-color var(--t-fast);\n  touch-action: manipulation;\n  -webkit-tap-highlight-color: transparent;\n}\n#mm-header .mm-h-search-suggestions a:hover {\n  background: var(--c-brand);\n  border-color: var(--c-brand);\n  color: var(--c-header-bg);\n}\n/* Search results / recent searches (dynamic) */\n#mm-header .mm-h-search-results {\n  margin-top: 24px;\n  border-top: 1px solid var(--c-border);\n  padding-top: 16px;\n}\n#mm-header .mm-h-search-results[hidden] {\n  display: none;\n}\n#mm-header .mm-h-search-section + .mm-h-search-section {\n  margin-top: 16px;\n}\n#mm-header .mm-h-search-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n#mm-header .mm-h-search-result {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  min-height: 44px;\n  padding: 10px 12px;\n  margin: 0 -12px;\n  font-size: 14px;\n  color: var(--c-text);\n  border-radius: 8px;\n  transition: background var(--t-fast), color var(--t-fast);\n  touch-action: manipulation;\n  -webkit-tap-highlight-color: transparent;\n}\n#mm-header .mm-h-search-result:hover,\n#mm-header .mm-h-search-result:focus-visible {\n  background: var(--c-topbar-bg);\n  color: var(--c-text-heading);\n  outline: none;\n}\n#mm-header .mm-h-search-result-icon {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  color: var(--c-text-muted);\n}\n#mm-header .mm-h-search-result:hover .mm-h-search-result-icon {\n  color: var(--c-brand);\n}\n#mm-header .mm-h-search-result-label {\n  flex: 1 1 auto;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n#mm-header .mm-h-search-result-label strong {\n  color: var(--c-text-heading);\n  font-weight: 600;\n}\n#mm-header .mm-h-search-result-arrow {\n  flex-shrink: 0;\n  font-size: 16px;\n  color: var(--c-text-muted);\n  opacity: 0;\n  transform: translateX(-4px);\n  transition: opacity var(--t-fast), transform var(--t-fast);\n}\n#mm-header .mm-h-search-result:hover .mm-h-search-result-arrow {\n  opacity: 1;\n  transform: translateX(0);\n  color: var(--c-brand);\n}\n#mm-header .mm-h-search-result-primary {\n  font-weight: 500;\n}\n#mm-header .mm-h-search-result-primary .mm-h-search-result-icon {\n  color: var(--c-brand);\n}\n\n#mm-header .mm-h-search-hint {\n  margin-top: 24px;\n  font-size: 12px;\n  color: var(--c-text-muted);\n  letter-spacing: var(--ls-loose);\n}\n#mm-header .mm-h-search-hint kbd {\n  display: inline-block;\n  padding: 2px 8px;\n  background: var(--c-topbar-bg);\n  border: 1px solid var(--c-border);\n  font-family: var(--font-sans);\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--c-text);\n}\n\n/* Mobile: make overlay full-screen */\n@media (max-width: 767px) {\n  #mm-header .mm-h-search-inner {\n    max-width: none;\n    margin-top: 0;\n    min-height: 100dvh;\n    padding: 56px 20px 40px;\n    box-shadow: none;\n  }\n  #mm-header .mm-h-search-form input {\n    font-size: 20px;\n  }\n}\n\n@keyframes mm-fade-in {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n@keyframes mm-slide-down {\n  from { opacity: 0; transform: translateY(-16px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n/* Sticky compact state (scroll-direction sticky) */\n#mm-header .mm-h-main,\n#mm-header .mm-h-topbar,\n#mm-header .mm-h-nav {\n  transition: height var(--t-base), opacity var(--t-base);\n}\n#mm-header.is-compact .mm-h-topbar,\n#mm-header.is-compact .mm-h-nav {\n  height: 0;\n  overflow: hidden;\n  opacity: 0;\n  pointer-events: none;\n}\n#mm-header.is-compact .mm-h-main {\n  height: var(--h-main-compact);\n  background: var(--c-glass-bg);\n  backdrop-filter: var(--glass-blur);\n  -webkit-backdrop-filter: var(--glass-blur);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n}\n#mm-header.is-compact .mm-h-logo img {\n  max-width: 200px;\n  transition: max-width var(--t-base);\n}\n#mm-header .mm-h-logo img {\n  transition: max-width var(--t-base);\n}\n@media (max-width: 767px) {\n  #mm-header.is-compact .mm-h-main {\n    height: var(--h-mobile-main);\n  }\n  #mm-header.is-compact .mm-h-logo img {\n    max-width: 140px;\n  }\n}\n\n/* Mobile drawer */\n#mm-header .mm-h-drawer {\n  position: fixed;\n  inset: 0;\n  z-index: var(--z-drawer);\n}\n#mm-header .mm-h-drawer[hidden] { display: none; }\n#mm-header .mm-h-drawer-backdrop {\n  position: absolute;\n  inset: 0;\n  background: var(--c-scrim);\n  animation: mm-fade-in var(--t-base) ease-out;\n}\n#mm-header .mm-h-drawer-panel {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 86%;\n  max-width: 380px;\n  background: var(--c-header-bg);\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  animation: mm-slide-right var(--t-base) ease-out;\n  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.08);\n}\n#mm-header .mm-h-drawer-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--c-border);\n  min-height: 64px;\n}\n#mm-header .mm-h-drawer-title {\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: var(--ls-nav);\n  color: var(--c-text);\n}\n#mm-header .mm-h-drawer-close {\n  background: transparent;\n  border: none;\n  font-size: 28px;\n  line-height: 1;\n  cursor: pointer;\n  width: 44px;\n  height: 44px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--c-text);\n  touch-action: manipulation;\n  -webkit-tap-highlight-color: transparent;\n}\n#mm-header .mm-h-drawer-close:hover { color: var(--c-brand); }\n\n#mm-header .mm-h-drawer-search {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--c-border);\n}\n#mm-header .mm-h-drawer-search input {\n  width: 100%;\n  font-size: 16px;\n  font-family: var(--font-sans);\n  padding: 12px 16px;\n  background: var(--c-topbar-bg);\n  border: 1px solid var(--c-border);\n  border-radius: 9999px;\n  outline: none;\n  color: var(--c-text);\n}\n#mm-header .mm-h-drawer-search input:focus {\n  border-color: var(--c-brand);\n}\n\n#mm-header .mm-h-drawer-nav {\n  padding: 8px 0;\n  flex: 1;\n}\n#mm-header .mm-h-drawer-section {\n  border-bottom: 1px solid var(--c-border);\n}\n#mm-header .mm-h-drawer-section summary {\n  padding: 16px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: var(--ls-nav);\n  color: var(--c-text);\n  cursor: pointer;\n  min-height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  list-style: none;\n  touch-action: manipulation;\n}\n#mm-header .mm-h-drawer-section summary::-webkit-details-marker { display: none; }\n#mm-header .mm-h-drawer-section summary::after {\n  content: '+';\n  font-size: 20px;\n  font-weight: 400;\n  color: var(--c-text-muted);\n  transition: transform var(--t-fast);\n}\n#mm-header .mm-h-drawer-section[open] summary::after {\n  content: '−';\n}\n#mm-header .mm-h-drawer-section[open] summary {\n  color: var(--c-brand);\n}\n#mm-header .mm-h-drawer-section ul {\n  list-style: none;\n  margin: 0;\n  padding: 0 20px 16px 32px;\n}\n#mm-header .mm-h-drawer-section li {\n  padding: 0;\n}\n#mm-header .mm-h-drawer-section li a {\n  display: block;\n  padding: 10px 0;\n  font-size: 14px;\n  color: var(--c-text);\n  min-height: 44px;\n  line-height: 24px;\n  touch-action: manipulation;\n}\n#mm-header .mm-h-drawer-section li a:hover { color: var(--c-brand); }\n\n#mm-header .mm-h-drawer-link {\n  display: block;\n  padding: 16px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: var(--ls-nav);\n  color: var(--c-text);\n  border-bottom: 1px solid var(--c-border);\n  min-height: 44px;\n  touch-action: manipulation;\n}\n#mm-header .mm-h-drawer-link:hover { color: var(--c-brand); }\n\n#mm-header .mm-h-drawer-footer {\n  padding: 16px 20px;\n  background: var(--c-topbar-bg);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-top: auto;\n}\n#mm-header .mm-h-drawer-footer a {\n  display: block;\n  padding: 10px 0;\n  font-size: 13px;\n  color: var(--c-text);\n  min-height: 44px;\n  line-height: 24px;\n  touch-action: manipulation;\n}\n#mm-header .mm-h-drawer-footer a:hover { color: var(--c-brand); }\n\n@keyframes mm-slide-right {\n  from { transform: translateX(-100%); }\n  to { transform: translateX(0); }\n}\n\n/* Drawer hidden on desktop (it's mobile-only) */\n@media (min-width: 768px) {\n  #mm-header .mm-h-drawer { display: none !important; }\n}\n\n/* Reduced motion (a11y) */\n@media (prefers-reduced-motion: reduce) {\n  #mm-header *,\n  #mm-header *::before,\n  #mm-header *::after {\n    transition-duration: 0.01ms !important;\n  }\n}\n";document.head.appendChild(s)})();

  /* =============================================
     SEÇÃO 2: HTML INJECTION
     ============================================= */

  /* Inject HTML: ticker.html */
  (function(){if(document.getElementById("tickerBar"))return;var d=document.createElement("div");d.innerHTML="<div class=\"ticker-bar\" id=\"tickerBar\">\n  <button class=\"ticker-close\" onclick=\"document.getElementById('tickerBar').style.display='none'\" aria-label=\"Fechar\">×</button>\n  <div class=\"ticker-track\">\n    <!-- Bloco 1 (original) -->\n    <span class=\"ticker-item\">\n      🎟️ Use o cupom: <b> BEMVINDO </b>&nbsp;para garantir 5%OFF na sua primeira compra\n    </span>\n    <span class=\"ticker-separator\">•</span>\n    <span class=\"ticker-item\">\n      Parcele em até 12x sem juros no cartão\n    </span>\n    <span class=\"ticker-separator\">•</span>\n    <span class=\"ticker-item\">\n      🚚 Envios em até 24h para produtos pronta entrega\n    </span>\n    <span class=\"ticker-separator\">•</span>\n    <span class=\"ticker-item\">\n      Frete grátis em pedidos acima de R$ 2.000\n    </span>\n    <span class=\"ticker-separator\">•</span>\n    <span class=\"ticker-item\">\n      <a href=\"https://api.whatsapp.com/send?l=pt_BR&amp;phone=5511915299488&amp;text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos.\" target=\"_blank\">📞 11 91529-9488</a>\n    </span>\n    <span class=\"ticker-separator\">•</span>\n\n    <!-- Bloco 2 (duplicado para loop infinito) -->\n    <span class=\"ticker-item\">\n      🎟️ Use o cupom: <b> BEMVINDO </b>&nbsp;para garantir 5%OFF na sua primeira compra\n    </span>\n    <span class=\"ticker-separator\">•</span>\n    <span class=\"ticker-item\">\n      Parcele em até 12x sem juros no cartão\n    </span>\n    <span class=\"ticker-separator\">•</span>\n    <span class=\"ticker-item\">\n      🚚 Envios em até 24h para produtos pronta entrega\n    </span>\n    <span class=\"ticker-separator\">•</span>\n    <span class=\"ticker-item\">\n      Frete grátis em pedidos acima de R$ 2.000\n    </span>\n    <span class=\"ticker-separator\">•</span>\n    <span class=\"ticker-item\">\n      <a href=\"https://api.whatsapp.com/send?l=pt_BR&amp;phone=5511915299488&amp;text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos.\" target=\"_blank\">📞 11 91529-9488</a>\n    </span>\n    <span class=\"ticker-separator\">•</span>\n  </div>\n</div>";var el=d.firstElementChild;document.body.insertBefore(el,document.body.firstChild)})();

  /* =============================================
     SEÇÃO 3: EXTERNAL SCRIPT LOADERS
     ============================================= */

  /* === contentsquare-loader.js === */
  /* ContentSquare loader (ex CA-10)
     CRÍTICO: Contentsquare visitor.js tem bug conhecido de recursão infinita
     em hkINP (Interaction to Next Paint) → "Maximum call stack size exceeded".
     Quando acontece durante mount do checkout (buildLayout/mountStep3Payment),
     quebra a execução do bundle e deixa a tela em branco.
     → Pulamos Contentsquare em TODAS as páginas de checkout pra proteger
       a conversão. Session replay fica disponível só fora do funnel. */
  (function() {
    var p = location.pathname;
    if (/^\/checkout\//i.test(p)) return;
    /* Opt-out: modo teste pula Contentsquare (session replay) */
    try { if (localStorage.getItem('mm_no_tracking') === '1') return; } catch(e) {}
    var s = document.createElement("script");
    s.src = "https://t.contentsquare.net/uxa/7126f355c4bb8.js";
    s.async = true;
    document.head.appendChild(s);
  })();

  /* =============================================
     SEÇÃO 4: GLOBAL JS (todas as páginas)
     ============================================= */

  /* === tracking.js === */
  /* =============================================
     TRACKING.JS - Madeira Mania
     Sistema de tracking agressivo - standalone
     Nao modifica CSS/JS de UI existentes.
  
     Ferramentas: PostHog, GA4, Meta Pixel,
     Microsoft Clarity, FingerprintJS Pro
     ============================================= */
  
  /* =============================================
     SECAO 1: CONFIGURACAO
     ============================================= */
  
  var MM_CONFIG = {
    posthog_key:  'phc_YBkzKTdsH90FWTbTjSsy62Jo95iDKjQgSlZFXqbds3Q',
    posthog_host: 'https://us.i.posthog.com',
    clarity_id:   'vnhd0x9eve',
    fp_key:       'Jn0Wp90CjDoz3DHpUbVs',
    debug:        false
  };
  /* GA4 (gtag) e Meta Pixel (fbq) ja carregados pelo Magazord —
     apenas despachamos eventos para window.gtag e window.fbq */
  
  /* =============================================
     TEST MODE — opt-out global de tracking
     ============================================= */
  /* Ativa via: localStorage.setItem('mm_no_tracking','1')
     Ou via URL ?mm_no_tracking=1 (persistente, seta o localStorage)
     Desativa: localStorage.removeItem('mm_no_tracking')
     Quando ativo: bloqueia TODOS os eventos (PostHog, GA4, Meta Pixel,
     Clarity, FingerprintJS, Contentsquare, Meta Purchase) + sinaliza
     no DOM pra debug (classe mm-no-tracking no <html>). */
  (function initNoTrackingOptOut() {
    try {
      var params = new URLSearchParams(location.search);
      if (params.get('mm_no_tracking') === '1') {
        localStorage.setItem('mm_no_tracking', '1');
      } else if (params.get('mm_no_tracking') === '0') {
        localStorage.removeItem('mm_no_tracking');
      }
    } catch(e) {}
  })();
  function mmIsTrackingDisabled() {
    try {
      return localStorage.getItem('mm_no_tracking') === '1';
    } catch(e) { return false; }
  }
  if (mmIsTrackingDisabled()) {
    document.documentElement.classList.add('mm-no-tracking');
    /* Bloqueia gtag/fbq antes mesmo do Magazord inicializar eles.
       Usa stubs que ignoram chamadas. */
    window.gtag = function() {};
    window.fbq = function() {};
    window.dataLayer = window.dataLayer || [];
    var _push = window.dataLayer.push;
    window.dataLayer.push = function() { return 0; };
    console.info('[MM] tracking disabled via mm_no_tracking flag');
  }
  
  /* =============================================
     SECAO 2: UTILIDADES
     ============================================= */
  
  function mmLoadScript(src, onLoad) {
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    if (onLoad) s.onload = onLoad;
    (document.head || document.documentElement).appendChild(s);
  }
  
  function mmGetSelector(el) {
    if (!el || !el.tagName) return '';
    var parts = [];
    while (el && el.tagName) {
      var sel = el.tagName.toLowerCase();
      if (el.id) { parts.unshift(sel + '#' + el.id); break; }
      /* SVGAnimatedString guard */
      var cls = typeof el.className === 'string' ? el.className : (el.className.baseVal || '');
      if (cls) {
        sel += '.' + cls.trim().split(/\s+/).slice(0, 2).join('.');
      }
      parts.unshift(sel);
      el = el.parentElement;
    }
    return parts.join(' > ').substring(0, 150);
  }
  
  function mmHashString(str) {
    if (!window.crypto || !window.crypto.subtle) return Promise.resolve('');
    var buf = new TextEncoder().encode(str.toLowerCase().trim());
    return crypto.subtle.digest('SHA-256', buf).then(function(hash) {
      return Array.from(new Uint8Array(hash)).map(function(b) {
        return b.toString(16).padStart(2, '0');
      }).join('');
    });
  }
  
  function mmGetClosestSection(node) {
    if (!node || !node.closest) return 'unknown';
    if (node.closest('.informacoes-compra-produto')) return 'purchase_info';
    if (node.closest('#block-imagem')) return 'gallery';
    if (node.closest('.descricao-produto')) return 'description';
    if (node.closest('.container-avaliacoes')) return 'reviews';
    if (node.closest('.produtos-relacionados')) return 'related_products';
    if (node.closest('.recomendacao-ctn-0')) return 'cross_sell';
    if (node.closest('.comprar-fixo')) return 'sticky_bar';
    if (node.closest('header')) return 'header';
    if (node.closest('footer')) return 'footer';
    return 'other';
  }
  
  /* =============================================
     SECAO 3: CONTEXTO
     ============================================= */
  
  function mmDetectPageType() {
    var path = location.pathname;
    if (path === '/' || path === '') return 'home';
    if (document.querySelector('#pagina-produto-react-app')) return 'product';
    if (path.indexOf('/carrinho') !== -1 || document.querySelector('.carrinho')) return 'cart';
    if (path.indexOf('/checkout') !== -1 || path.indexOf('/pagamento') !== -1) return 'checkout';
    if (path.indexOf('/busca') !== -1 || location.search.indexOf('busca=') !== -1) return 'search';
    if (document.querySelector('.listagem-produtos') || document.querySelector('.produtos-categoria')) return 'category';
    return 'other';
  }
  
  function mmExtractUTMs() {
    var params = new URLSearchParams(location.search);
    var keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
    var utms = {};
    var hasAny = false;
    keys.forEach(function(k) {
      var v = params.get(k);
      if (v) { utms[k] = v; hasAny = true; }
    });
    if (hasAny) {
      try { sessionStorage.setItem('mm_utms', JSON.stringify(utms)); } catch(e) {}
    } else {
      try {
        var stored = sessionStorage.getItem('mm_utms');
        if (stored) utms = JSON.parse(stored);
      } catch(e) {}
    }
    return utms;
  }
  
  function mmGetOrCreateId() {
    var anonId, sessionId;
    try {
      anonId = localStorage.getItem('mm_anon_id');
      if (!anonId) {
        anonId = 'mm_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 10);
        localStorage.setItem('mm_anon_id', anonId);
      }
    } catch(e) {
      anonId = 'mm_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 10);
    }
    try {
      sessionId = sessionStorage.getItem('mm_session_id');
      if (!sessionId) {
        sessionId = 'ses_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 8);
        sessionStorage.setItem('mm_session_id', sessionId);
      }
    } catch(e) {
      sessionId = 'ses_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 8);
    }
    return { anon_id: anonId, session_id: sessionId };
  }
  
  function mmDetectReturnVisitor() {
    var now = Date.now();
    var info = { visit_count: 1, is_returning: false, days_since_last: 0, first_seen: now };
    try {
      var data = localStorage.getItem('mm_visitor');
      if (data) {
        var parsed = JSON.parse(data);
        info.visit_count = (parsed.visit_count || 0) + 1;
        info.first_seen = parsed.first_seen || now;
        info.days_since_last = Math.floor((now - (parsed.last_visit || now)) / 86400000);
        info.is_returning = true;
      }
      localStorage.setItem('mm_visitor', JSON.stringify({
        visit_count: info.visit_count,
        first_seen: info.first_seen,
        last_visit: now
      }));
    } catch(e) {}
    return info;
  }
  
  function mmDetectDevice() {
    var ua = navigator.userAgent;
    var w = window.innerWidth;
    var type = 'desktop';
    if (/Mobi|Android/i.test(ua) || w < 768) type = 'mobile';
    else if (/Tablet|iPad/i.test(ua) || (w >= 768 && w < 1024)) type = 'tablet';
  
    var conn = navigator.connection || {};
    return {
      device_type: type,
      viewport_width: w,
      viewport_height: window.innerHeight,
      screen_width: screen.width,
      screen_height: screen.height,
      connection_type: conn.effectiveType || 'unknown',
      user_agent: ua
    };
  }
  
  function mmBuildContext() {
    var ids = mmGetOrCreateId();
    var visitor = mmDetectReturnVisitor();
    var device = mmDetectDevice();
    var utms = mmExtractUTMs();
  
    return {
      anon_id: ids.anon_id,
      session_id: ids.session_id,
      visitor_id: null, /* set by FingerprintJS later */
      page_type: mmDetectPageType(),
      url: location.href,
      path: location.pathname,
      referrer: document.referrer,
      title: document.title,
      visit_count: visitor.visit_count,
      is_returning: visitor.is_returning,
      days_since_last: visitor.days_since_last,
      first_seen: visitor.first_seen,
      device_type: device.device_type,
      viewport_width: device.viewport_width,
      viewport_height: device.viewport_height,
      connection_type: device.connection_type,
      utm_source: utms.utm_source || null,
      utm_medium: utms.utm_medium || null,
      utm_campaign: utms.utm_campaign || null,
      utm_term: utms.utm_term || null,
      utm_content: utms.utm_content || null,
      gclid: utms.gclid || null,
      fbclid: utms.fbclid || null,
      timestamp: Date.now()
    };
  }
  
  /* =============================================
     SECAO 4: EVENT DISPATCH
     ============================================= */
  
  function mmMapToFBEvent(name, props) {
    var map = {
      page_view:        { fb: 'PageView' },
      product_viewed:   { fb: 'ViewContent', params: { content_type: 'product', content_ids: [props.product_id], value: props.price, currency: 'BRL' } },
      add_to_cart:      { fb: 'AddToCart', params: { content_type: 'product', content_ids: [props.product_id], value: props.price, currency: 'BRL' } },
      checkout_started: { fb: 'InitiateCheckout', params: { value: props.cart_value, currency: 'BRL' } },
      freight_calculated: { fb: 'CustomizeProduct' }
      /* purchase: NÃO mapear aqui — Magazord já dispara fbq('track','Purchase')
         nativamente com eventID para dedup CAPI. Disparar aqui duplicaria. */
    };
    if (name === 'whatsapp_inline_clicked' || name === 'whatsapp_float_clicked') {
      return { fb: 'Contact' };
    }
    return map[name] || null;
  }
  
  function mmTrackEvent(name, props) {
    /* Opt-out: test mode bloqueia todos os eventos */
    if (mmIsTrackingDisabled()) {
      if (MM_CONFIG.debug) console.log('[MM Track SKIP]', name, props);
      return;
    }
    props = props || {};
    var ctx = window.__MM.ctx;
    var merged = {};
    /* merge select context fields */
    merged.mm_session_id = ctx.session_id;
    merged.mm_anon_id = ctx.anon_id;
    merged.mm_page_type = ctx.page_type;
    merged.mm_device_type = ctx.device_type;
    merged.mm_visit_count = ctx.visit_count;
    merged.mm_is_returning = ctx.is_returning;
    for (var k in props) {
      if (props.hasOwnProperty(k)) merged[k] = props[k];
    }
  
    /* Debug */
    if (MM_CONFIG.debug) {
      console.log('[MM Track]', name, merged);
    }
  
    /* Queue if not ready */
    if (!window.__MM._ready) {
      window.__MM._q.push({ name: name, props: merged, ts: Date.now() });
      return;
    }
  
    /* PostHog */
    try {
      if (window.posthog && window.posthog.capture) {
        window.posthog.capture(name, merged);
      }
    } catch(e) {}
  
    /* GA4 */
    try {
      if (window.gtag) {
        window.gtag('event', name, merged);
      }
    } catch(e) {}
  
    /* Meta Pixel — skip 'purchase' pois Magazord já dispara nativamente */
    try {
      if (window.fbq && name !== 'purchase') {
        var fbEvt = mmMapToFBEvent(name, merged);
        if (fbEvt) {
          if (fbEvt.params) {
            window.fbq('track', fbEvt.fb, fbEvt.params);
          } else {
            window.fbq('track', fbEvt.fb);
          }
        } else {
          window.fbq('trackCustom', name, merged);
        }
      }
    } catch(e) {}
  }
  
  function mmFlushQueue() {
    var q = window.__MM._q;
    window.__MM._q = [];
    q.forEach(function(item) {
      mmTrackEvent(item.name, item.props);
    });
  }
  
  /* =============================================
     SECAO 5: INICIALIZACAO SDKs
     ============================================= */
  
  function mmInitPostHog() {
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once unregister opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing startSessionRecording stopSessionRecording sessionRecordingStarted loadToolbar get_property getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSurvey getSurveyResponse".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
  
    var ctx = window.__MM.ctx;
    window.posthog.init(MM_CONFIG.posthog_key, {
      api_host: MM_CONFIG.posthog_host,
      autocapture: true,
      capture_pageview: true,
      capture_pageleave: true,
      enable_recording_console_log: true,
      session_recording: {
        maskAllInputs: false,
        maskInputOptions: { password: true }
      },
      persistence: 'localStorage+cookie',
      respect_dnt: false,
      loaded: function(ph) {
        ph.register({
          mm_session_id: ctx.session_id,
          mm_visit_count: ctx.visit_count,
          mm_is_returning: ctx.is_returning,
          mm_device_type: ctx.device_type
        });
        if (MM_CONFIG.debug) console.log('[MM] PostHog loaded');
      }
    });
  }
  
  /* GA4 e Meta Pixel: JA carregados pelo site.
     O dispatch em mmTrackEvent() usa window.gtag e window.fbq diretamente. */
  
  function mmInitClarity() {
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", MM_CONFIG.clarity_id);
    if (MM_CONFIG.debug) console.log('[MM] Clarity loaded');
  }
  
  function mmInitFingerprintJS() {
    /* FingerprintJS Pro v3 — endpoint IIFE (compativel com <script> normal) */
    mmLoadScript('https://fpjscdn.net/v3/' + MM_CONFIG.fp_key + '/iife.min.js', function() {
      var FpJS = window.FingerprintJS;
      if (!FpJS) {
        if (MM_CONFIG.debug) console.warn('[MM] FingerprintJS global nao encontrado');
        return;
      }
      FpJS.load().then(function(fp) {
        return fp.get();
      }).then(function(result) {
        window.__MM.ctx.visitor_id = result.visitorId;
        /* Identify in PostHog */
        if (window.posthog && window.posthog.identify) {
          window.posthog.identify(result.visitorId, {
            fp_confidence: result.confidence.score,
            mm_anon_id: window.__MM.ctx.anon_id
          });
        }
        mmTrackEvent('visitor_identified', {
          visitor_id: result.visitorId,
          confidence: result.confidence.score,
          is_returning: window.__MM.ctx.is_returning
        });
        if (MM_CONFIG.debug) console.log('[MM] FingerprintJS:', result.visitorId, result.confidence.score);
      }).catch(function(err) {
        if (MM_CONFIG.debug) console.warn('[MM] FingerprintJS error:', err);
      });
    });
  }
  
  /* =============================================
     SECAO 6: OBSERVADORES GLOBAIS
     ============================================= */
  
  function mmInitScrollTracker() {
    var thresholds = [10, 25, 50, 75, 90, 100];
    var fired = {};
    var maxScroll = 0;
    var ticking = false;
  
    function getScrollPercent() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var docHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight
      );
      var winHeight = window.innerHeight;
      if (docHeight <= winHeight) return 100;
      return Math.round((scrollTop / (docHeight - winHeight)) * 100);
    }
  
    window.addEventListener('scroll', function() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function() {
        var pct = getScrollPercent();
        if (pct > maxScroll) maxScroll = pct;
        thresholds.forEach(function(t) {
          if (pct >= t && !fired[t]) {
            fired[t] = true;
            mmTrackEvent('scroll_depth_' + t, { max_scroll_percent: maxScroll });
          }
        });
        ticking = false;
      });
    }, { passive: true });
  
    /* Expose maxScroll for other trackers */
    window.__MM._getMaxScroll = function() { return maxScroll; };
  }
  
  function mmInitTimeTracker() {
    var milestones = [5000, 15000, 30000, 60000, 120000, 300000];
    var firedIdx = 0;
    var visibleTime = 0;
    var lastVisible = document.hidden ? null : Date.now();
    var intervalId;
  
    function tick() {
      if (lastVisible !== null) {
        visibleTime += Date.now() - lastVisible;
        lastVisible = Date.now();
      }
      while (firedIdx < milestones.length && visibleTime >= milestones[firedIdx]) {
        var ms = milestones[firedIdx];
        mmTrackEvent('time_on_page_' + (ms / 1000) + 's', { cumulative_visible_ms: visibleTime });
        firedIdx++;
      }
      if (firedIdx >= milestones.length) clearInterval(intervalId);
    }
  
    intervalId = setInterval(tick, 1000);
  
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        if (lastVisible !== null) {
          visibleTime += Date.now() - lastVisible;
          lastVisible = null;
        }
        mmTrackEvent('tab_hidden', { time_visible_ms: visibleTime });
      } else {
        var away = lastVisible === null ? 0 : 0;
        /* Calculate time away */
        mmTrackEvent('tab_visible', { time_away_ms: 0 });
        lastVisible = Date.now();
      }
    });
  
    window.__MM._getVisibleTime = function() { return visibleTime + (lastVisible ? Date.now() - lastVisible : 0); };
  }
  
  function mmInitEngagementTracker() {
    var fired = false;
    var loadTime = Date.now();
    function handler() {
      if (fired) return;
      fired = true;
      mmTrackEvent('page_engaged', { time_to_first_interaction_ms: Date.now() - loadTime });
      window.removeEventListener('scroll', handler);
      window.removeEventListener('click', handler);
      window.removeEventListener('keypress', handler);
    }
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('click', handler);
    window.addEventListener('keypress', handler);
  }
  
  function mmInitExitIntent() {
    /* Desktop: mouse leaves viewport top */
    var exitFired = false;
    if (window.__MM.ctx.device_type === 'desktop') {
      document.addEventListener('mouseout', function(e) {
        if (exitFired) return;
        if (e.clientY <= 0) {
          exitFired = true;
          mmTrackEvent('exit_intent', {
            method: 'mouseout_top',
            time_on_page_ms: window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0,
            max_scroll: window.__MM._getMaxScroll ? window.__MM._getMaxScroll() : 0
          });
        }
      });
    }
  
    /* Both: beforeunload */
    window.addEventListener('beforeunload', function() {
      if (!exitFired) {
        mmTrackEvent('exit_intent', {
          method: 'beforeunload',
          time_on_page_ms: window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0,
          max_scroll: window.__MM._getMaxScroll ? window.__MM._getMaxScroll() : 0
        });
      }
    });
  }
  
  function mmInitClickQuality() {
    var clickLog = []; /* { ts, target } */
  
    document.addEventListener('click', function(e) {
      var now = Date.now();
      var target = e.target;
      var sel = mmGetSelector(target);
  
      /* --- Rage click: 3+ clicks on same element in 1s --- */
      clickLog.push({ ts: now, sel: sel });
      /* Clean old entries */
      clickLog = clickLog.filter(function(c) { return now - c.ts < 1000; });
      var sameEl = clickLog.filter(function(c) { return c.sel === sel; });
      if (sameEl.length >= 3) {
        mmTrackEvent('rage_click', {
          element_selector: sel,
          element_text: (target.textContent || '').trim().substring(0, 60),
          click_count: sameEl.length
        });
        clickLog = []; /* reset after firing */
      }
  
      /* --- Dead click: non-interactive element --- */
      var tag = target.tagName.toLowerCase();
      var isInteractive = (
        tag === 'a' || tag === 'button' || tag === 'input' ||
        tag === 'select' || tag === 'textarea' || tag === 'label' ||
        target.getAttribute('role') === 'button' ||
        target.getAttribute('tabindex') !== null ||
        target.onclick !== null ||
        target.closest('a') || target.closest('button') || target.closest('[role="button"]')
      );
      if (!isInteractive) {
        mmTrackEvent('dead_click', {
          element_selector: sel,
          element_tag: tag,
          element_text: (target.textContent || '').trim().substring(0, 60)
        });
      }
    }, true);
  }
  
  function mmInitPerformanceTracker() {
    setTimeout(function() {
      var perf = {};
      try {
        var nav = performance.getEntriesByType('navigation')[0];
        if (nav) perf.ttfb_ms = Math.round(nav.responseStart - nav.requestStart);
  
        var paint = performance.getEntriesByType('paint');
        paint.forEach(function(p) {
          if (p.name === 'first-contentful-paint') perf.fcp_ms = Math.round(p.startTime);
        });
  
        /* LCP */
        if (window.PerformanceObserver) {
          try {
            var lcpEntries = performance.getEntriesByType('largest-contentful-paint');
            if (lcpEntries && lcpEntries.length > 0) {
              perf.lcp_ms = Math.round(lcpEntries[lcpEntries.length - 1].startTime);
            }
          } catch(e) {}
        }
  
        /* CLS via PerformanceObserver if available, otherwise skip */
        perf.cls_score = 0;
        try {
          var clsEntries = performance.getEntriesByType('layout-shift');
          if (clsEntries) {
            clsEntries.forEach(function(entry) {
              if (!entry.hadRecentInput) perf.cls_score += entry.value;
            });
            perf.cls_score = Math.round(perf.cls_score * 1000) / 1000;
          }
        } catch(e) {}
      } catch(e) {}
  
      if (Object.keys(perf).length > 0) {
        mmTrackEvent('page_performance', perf);
      }
    }, 10000);
  }
  
  function mmInitErrorTracker() {
    window.addEventListener('error', function(e) {
      mmTrackEvent('js_error', {
        message: (e.message || '').substring(0, 200),
        source: (e.filename || '').substring(0, 100),
        line: e.lineno,
        col: e.colno,
        stack: (e.error && e.error.stack) ? e.error.stack.substring(0, 300) : ''
      });
    });
    window.addEventListener('unhandledrejection', function(e) {
      var msg = '';
      if (e.reason) msg = (e.reason.message || String(e.reason)).substring(0, 200);
      mmTrackEvent('js_error', {
        message: msg,
        source: 'unhandledrejection',
        line: 0,
        col: 0,
        stack: (e.reason && e.reason.stack) ? e.reason.stack.substring(0, 300) : ''
      });
    });
  }
  
  function mmInitContentTracker() {
    /* Copy event */
    document.addEventListener('copy', function(e) {
      var sel = window.getSelection();
      var text = sel ? sel.toString().substring(0, 100) : '';
      mmTrackEvent('text_copied', {
        copied_text: text,
        page_section: mmGetClosestSection(sel.anchorNode)
      });
    });
  
    /* Right-click */
    document.addEventListener('contextmenu', function(e) {
      mmTrackEvent('right_click', {
        element_selector: mmGetSelector(e.target),
        element_tag: e.target.tagName.toLowerCase()
      });
    });
  }
  
  function mmInitWhatsAppFloatTracker() {
    document.addEventListener('click', function(e) {
      var wa = e.target.closest('#popup-msg-whats') || e.target.closest('[id*="whatsapp"]');
      if (wa && !e.target.closest('.exibe-botao-whatsapp')) {
        mmTrackEvent('whatsapp_float_clicked', {
          page_type: window.__MM.ctx.page_type,
          time_on_page_ms: window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0
        });
      }
    }, true);
  }
  
  function mmInitDeanonTracker() {
    /* Email capture on blur */
    document.addEventListener('blur', function(e) {
      var target = e.target;
      if (!target || target.tagName !== 'INPUT') return;
      var type = (target.type || '').toLowerCase();
      var name = (target.name || '').toLowerCase();
      if (type === 'email' || name.indexOf('email') !== -1 || name.indexOf('mail') !== -1) {
        var val = target.value || '';
        if (val.indexOf('@') !== -1) {
          mmHashString(val).then(function(hash) {
            mmTrackEvent('email_captured', { email_hash: hash });
            if (window.posthog && window.posthog.identify) {
              window.posthog.identify(hash);
            }
          });
        }
      }
    }, true);
  
    /* Login detection */
    setTimeout(function() {
      /* Common Magazord logged-in selectors */
      var userEl = document.querySelector('.nome-usuario') ||
                   document.querySelector('.meu-perfil .nome') ||
                   document.querySelector('[data-user-name]');
      if (userEl) {
        var name = (userEl.textContent || userEl.getAttribute('data-user-name') || '').trim();
        if (name) {
          mmHashString(name).then(function(hash) {
            mmTrackEvent('login_detected', { user_id_hash: hash });
            if (window.posthog && window.posthog.identify) {
              window.posthog.identify(hash);
            }
          });
        }
      }
    }, 3000);
  
    /* Form submit tracking */
    document.addEventListener('submit', function(e) {
      var form = e.target;
      if (!form || form.tagName !== 'FORM') return;
      var inputs = form.querySelectorAll('input');
      var hasEmail = false, hasPhone = false;
      inputs.forEach(function(inp) {
        var n = (inp.name || '').toLowerCase();
        var t = (inp.type || '').toLowerCase();
        if (t === 'email' || n.indexOf('email') !== -1) hasEmail = true;
        if (t === 'tel' || n.indexOf('phone') !== -1 || n.indexOf('tel') !== -1 || n.indexOf('celular') !== -1) hasPhone = true;
      });
      mmTrackEvent('form_submitted', {
        form_type: form.getAttribute('action') || 'unknown',
        has_email: hasEmail,
        has_phone: hasPhone
      });
    }, true);
  }
  
  /* =============================================
     SECAO 7: TRACKERS DE PRODUTO
     ============================================= */
  
  function mmInitProductTrackers() {
    var app = document.querySelector('#produto-react-app');
    if (!app) return;
  
    /* --- Extract product context from DOM --- */
    var h1 = app.querySelector('h1');
    var productName = h1 ? h1.textContent.trim() : '';
    var priceEl = app.querySelector('.preco-principal .texto-preco') ||
                  app.querySelector('.preco-principal') ||
                  app.querySelector('[class*="preco"]');
    var priceText = priceEl ? priceEl.textContent.trim() : '';
    var priceNum = parseFloat(priceText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
  
    var pixPriceEl = app.querySelector('.preco-pix .texto-preco') || app.querySelector('.preco-pix');
    var pixPriceText = pixPriceEl ? pixPriceEl.textContent.trim() : '';
    var pixPrice = parseFloat(pixPriceText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
  
    var variationPills = app.querySelectorAll('.variation-pill');
    var swatches = app.querySelectorAll('.variation-color-swatch-wrapper');
    var hasVariations = variationPills.length > 0 || swatches.length > 0;
  
    var images = app.querySelectorAll('.swiper-slide img, .gallery-main img');
    var imageCount = images.length;
  
    var reviewCountEl = document.querySelector('.container-avaliacoes .total-avaliacoes') ||
                        document.querySelector('.container-avaliacoes [class*="total"]');
    var reviewCount = reviewCountEl ? parseInt(reviewCountEl.textContent.replace(/\D/g, ''), 10) || 0 : 0;
    var hasReviews = reviewCount > 0;
  
    /* product_id from URL or data attribute */
    var pathParts = location.pathname.split('/');
    var productId = pathParts[pathParts.length - 1] || location.pathname;
  
    var productCtx = {
      product_id: productId,
      name: productName,
      price: priceNum,
      price_pix: pixPrice,
      has_variations: hasVariations,
      variation_count: variationPills.length + swatches.length,
      image_count: imageCount,
      has_reviews: hasReviews,
      review_count: reviewCount
    };
  
    /* #27 product_viewed */
    mmTrackEvent('product_viewed', productCtx);
  
    /* --- #28-29 Gallery tracker --- */
    (function initGalleryTracker() {
      var pagination = app.querySelector('.swiper-pagination');
      if (!pagination) return;
  
      var viewedImages = new Set();
      var currentIdx = 0;
      var lastChangeTime = Date.now();
  
      function getCurrentIndex() {
        var active = pagination.querySelector('.swiper-pagination-bullet-active');
        var allBullets = pagination.querySelectorAll('.swiper-pagination-bullet');
        if (!active) return 0;
        return Array.prototype.indexOf.call(allBullets, active);
      }
  
      function onSlideChange() {
        var newIdx = getCurrentIndex();
        if (newIdx === currentIdx) return;
  
        var timePrev = Date.now() - lastChangeTime;
  
        /* #28 */
        mmTrackEvent('gallery_image_viewed', {
          image_index: newIdx,
          total_images: imageCount,
          time_on_previous_ms: timePrev
        });
  
        viewedImages.add(newIdx);
        currentIdx = newIdx;
        lastChangeTime = Date.now();
  
        /* #29 */
        if (viewedImages.size === imageCount && imageCount > 1) {
          mmTrackEvent('gallery_all_viewed', {
            total_images: imageCount,
            time_to_view_all_ms: Date.now() - window.__MM._productLoadTime
          });
        }
      }
  
      viewedImages.add(getCurrentIndex());
  
      var observer = new MutationObserver(onSlideChange);
      observer.observe(pagination, { subtree: true, attributes: true, attributeFilter: ['class'] });
  
      /* #30 Gallery zoom (pinch-to-zoom via touch events) */
      var gallery = app.querySelector('.gallery-main') || app.querySelector('#block-imagem');
      if (gallery) {
        var touchCount = 0;
        gallery.addEventListener('touchstart', function(e) {
          touchCount = e.touches.length;
        }, { passive: true });
        gallery.addEventListener('touchmove', function(e) {
          if (e.touches.length >= 2 && touchCount < 2) {
            mmTrackEvent('gallery_zoom', { image_index: getCurrentIndex() });
          }
          touchCount = e.touches.length;
        }, { passive: true });
      }
    })();
  
    /* --- #31-32 Variation tracker --- */
    (function initVariationTracker() {
      var derivacoes = app.querySelector('.derivacoes-produto') || app;
      var selectionCount = 0;
      var changeCount = 0;
      var lastSelection = null;
  
      derivacoes.addEventListener('click', function(e) {
        var pill = e.target.closest('.variation-pill');
        var swatch = e.target.closest('.variation-color-swatch-wrapper');
        var target = pill || swatch;
        if (!target) return;
  
        var type = swatch ? 'color' : 'size';
        var value = target.textContent.trim().substring(0, 50) ||
                    (target.querySelector('img') ? target.querySelector('img').alt : 'unknown');
        selectionCount++;
  
        if (lastSelection !== null && lastSelection !== value) {
          changeCount++;
          /* #32 */
          mmTrackEvent('variation_changed', {
            from_value: lastSelection,
            to_value: value,
            change_count: changeCount
          });
        }
  
        /* #31 */
        mmTrackEvent('variation_selected', {
          type: type,
          value: value,
          previous_value: lastSelection,
          selection_count: selectionCount,
          time_since_load_ms: Date.now() - window.__MM._productLoadTime
        });
  
        lastSelection = value;
      }, true);
    })();
  
    /* --- #36 Quantity tracker --- */
    (function initQuantityTracker() {
      var quantArea = app.querySelector('.quantidade') || app.querySelector('[class*="quantidade"]');
      if (!quantArea) return;
  
      quantArea.addEventListener('click', function(e) {
        var btn = e.target.closest('button');
        if (!btn) return;
        setTimeout(function() {
          var input = quantArea.querySelector('input');
          var qty = input ? parseInt(input.value, 10) : 1;
          var text = btn.textContent.trim();
          mmTrackEvent('quantity_changed', {
            new_quantity: qty,
            direction: text === '+' ? 'increase' : 'decrease',
            previous_quantity: text === '+' ? qty - 1 : qty + 1
          });
        }, 100);
      }, true);
    })();
  
    /* --- #37-39 Freight tracker --- */
    (function initFreightTracker() {
      var freteArea = app.querySelector('.calculo-frete') ||
                      app.querySelector('[class*="frete"]') ||
                      app.querySelector('[class*="cep"]');
      if (!freteArea) return;
  
      var cepInput = freteArea.querySelector('input');
      var calcBtn = freteArea.querySelector('button');
      var focusTime = null;
  
      if (cepInput) {
        cepInput.addEventListener('focus', function() {
          focusTime = Date.now();
          /* #37 */
          mmTrackEvent('freight_input_focused', {
            time_since_load_ms: Date.now() - window.__MM._productLoadTime
          });
        });
  
        cepInput.addEventListener('blur', function() {
          var val = cepInput.value.replace(/\D/g, '');
          if (val.length < 8 && focusTime) {
            /* #38 - abandoned without calculating */
            mmTrackEvent('freight_input_abandoned', {
              cep_partial: val.substring(0, 5),
              time_typing_ms: Date.now() - focusTime
            });
          }
        });
      }
  
      if (calcBtn) {
        calcBtn.addEventListener('click', function() {
          /* Wait for result */
          setTimeout(function() {
            var resultEl = freteArea.querySelector('.resultado-frete') ||
                           freteArea.querySelector('[class*="resultado"]') ||
                           freteArea.querySelector('table');
            var hasResult = !!resultEl && resultEl.children.length > 0;
            var val = cepInput ? cepInput.value.replace(/\D/g, '') : '';
            /* #39 */
            mmTrackEvent('freight_calculated', {
              cep_region: val.substring(0, 5),
              has_result: hasResult,
              time_from_price_view_ms: window.__MM._priceViewTime
                ? Date.now() - window.__MM._priceViewTime
                : null
            });
          }, 2000);
        });
      }
    })();
  
    /* --- #40 Payment options tracker --- */
    (function initPaymentTracker() {
      app.addEventListener('click', function(e) {
        var link = e.target.closest('.form-pag-link') || e.target.closest('[class*="parcela"]');
        if (link) {
          mmTrackEvent('payment_options_clicked', {
            time_since_load_ms: Date.now() - window.__MM._productLoadTime
          });
        }
      }, true);
    })();
  
    /* --- #33-35, #41-49 Section visibility (IntersectionObservers) --- */
    (function initSectionVisibility() {
      var sections = [
        { sel: '.preco-principal, [class*="preco-principal"]', event: 'price_section_viewed', timeEvent: 'price_section_time', ctx: app },
        { sel: '.porcentagem-desconto, [class*="desconto"]', event: 'discount_badge_viewed', ctx: app },
        { sel: '.descricao-produto.accordion, .descricao-produto', event: 'description_opened', timeEvent: 'description_time', ctx: document },
        { sel: '.container-avaliacoes', event: 'reviews_section_viewed', timeEvent: 'reviews_time', ctx: document },
        { sel: '.produtos-relacionados.accordion, .produtos-relacionados', event: 'related_products_viewed', ctx: document },
        { sel: '.recomendacao-ctn-0', event: 'cross_sell_viewed', ctx: document }
      ];
  
      sections.forEach(function(section) {
        var el = section.ctx.querySelector(section.sel);
        if (!el) return;
  
        var viewStartTime = null;
        var hasFired = false;
  
        var observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting && !hasFired) {
              hasFired = true;
              viewStartTime = Date.now();
              var props = { time_since_load_ms: Date.now() - window.__MM._productLoadTime };
  
              if (section.event === 'price_section_viewed') {
                window.__MM._priceViewTime = Date.now();
                props.price_value = priceNum;
              }
              if (section.event === 'discount_badge_viewed') {
                var text = el.textContent.replace(/[^\d]/g, '');
                props.discount_percent = parseInt(text, 10) || 0;
              }
              if (section.event === 'reviews_section_viewed') {
                props.review_count = reviewCount;
              }
  
              mmTrackEvent(section.event, props);
            }
  
            if (!entry.isIntersecting && viewStartTime && section.timeEvent) {
              mmTrackEvent(section.timeEvent, {
                time_visible_ms: Date.now() - viewStartTime,
                price_value: section.event === 'price_section_time' ? priceNum : undefined
              });
              viewStartTime = null;
            }
          });
        }, { threshold: 0.3 });
  
        observer.observe(el);
      });
    })();
  
    /* --- #45 Write review clicked --- */
    (function() {
      document.addEventListener('click', function(e) {
        var btn = e.target.closest('.container-avaliacoes button') ||
                  e.target.closest('[class*="avaliar"]') ||
                  e.target.closest('[class*="review"] button');
        if (btn) {
          mmTrackEvent('write_review_clicked', { existing_review_count: reviewCount });
        }
      }, true);
    })();
  
    /* --- #47 Related product clicked --- */
    (function() {
      var related = document.querySelector('.produtos-relacionados');
      if (!related) return;
      related.addEventListener('click', function(e) {
        var link = e.target.closest('a');
        if (!link) return;
        var nameEl = link.querySelector('.nome-produto') || link.querySelector('h3') || link;
        var items = related.querySelectorAll('a[href*="/"]');
        var pos = Array.prototype.indexOf.call(items, link);
        mmTrackEvent('related_product_clicked', {
          clicked_product_name: (nameEl.textContent || '').trim().substring(0, 80),
          position: pos
        });
      }, true);
    })();
  
    /* --- #49 Cross-sell clicked --- */
    (function() {
      var crossSell = document.querySelector('.recomendacao-ctn-0');
      if (!crossSell) return;
      crossSell.addEventListener('click', function(e) {
        var link = e.target.closest('a');
        if (!link) return;
        var nameEl = link.querySelector('.nome-produto') || link.querySelector('h3') || link;
        var items = crossSell.querySelectorAll('a[href*="/"]');
        var pos = Array.prototype.indexOf.call(items, link);
        mmTrackEvent('cross_sell_clicked', {
          clicked_product_name: (nameEl.textContent || '').trim().substring(0, 80),
          position: pos
        });
      }, true);
    })();
  
    /* --- #50-51, #55 Purchase tracker (buy button + sticky + hesitation) --- */
    (function initPurchaseTracker() {
      /* Inline buy button */
      var buyBtn = app.querySelector('#area-comprar button') ||
                   app.querySelector('.comprar button');
  
      /* Sticky buy button */
      var stickyBar = document.querySelector('.comprar-fixo.area-compra-float');
      var stickyAppeared = false;
  
      /* #51 Sticky bar appeared (when main buy button leaves viewport) */
      if (buyBtn && stickyBar) {
        var stickyObserver = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (!entry.isIntersecting && !stickyAppeared) {
              stickyAppeared = true;
              mmTrackEvent('sticky_bar_appeared', {
                scroll_position: window.pageYOffset,
                time_on_page_ms: window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0
              });
            }
          });
        }, { threshold: 0 });
        stickyObserver.observe(buyBtn);
      }
  
      /* #50 Add to cart */
      function handleBuyClick(e, location) {
        var btn = e.target.closest('button');
        if (!btn) return;
        var text = btn.textContent.toLowerCase();
        if (text.indexOf('comprar') === -1 && text.indexOf('carrinho') === -1 && text.indexOf('adicionar') === -1) return;
  
        mmTrackEvent('add_to_cart', {
          product_id: productId,
          name: productName,
          price: priceNum,
          quantity: (function() {
            var inp = app.querySelector('.quantidade input');
            return inp ? parseInt(inp.value, 10) || 1 : 1;
          })(),
          selected_variations: (function() {
            var selected = [];
            app.querySelectorAll('.variation-pill[tabindex="0"]').forEach(function(p) {
              selected.push(p.textContent.trim());
            });
            return selected.join(', ');
          })(),
          time_on_page_ms: window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0,
          scroll_depth: window.__MM._getMaxScroll ? window.__MM._getMaxScroll() : 0,
          button_location: location
        });
      }
  
      if (buyBtn) {
        buyBtn.closest('#area-comprar').addEventListener('click', function(e) {
          handleBuyClick(e, 'inline');
        }, true);
      }
  
      if (stickyBar) {
        stickyBar.addEventListener('click', function(e) {
          handleBuyClick(e, 'sticky');
        }, true);
      }
  
      /* #55 Buy button hesitation (hover/touch > 3s without click) */
      function trackHesitation(btn, location) {
        if (!btn) return;
        var hoverStart = null;
        var hoverTimer = null;
  
        function startHesitation() {
          hoverStart = Date.now();
          hoverTimer = setTimeout(function() {
            mmTrackEvent('buy_button_hesitation', {
              hesitation_ms: Date.now() - hoverStart,
              button_location: location
            });
          }, 3000);
        }
  
        function clearHesitation() {
          if (hoverTimer) clearTimeout(hoverTimer);
          hoverStart = null;
        }
  
        btn.addEventListener('mouseenter', startHesitation);
        btn.addEventListener('mouseleave', clearHesitation);
        btn.addEventListener('click', clearHesitation);
        btn.addEventListener('touchstart', startHesitation, { passive: true });
        btn.addEventListener('touchend', clearHesitation);
      }
  
      trackHesitation(buyBtn, 'inline');
      if (stickyBar) trackHesitation(stickyBar.querySelector('button'), 'sticky');
    })();
  
    /* --- #52-54 Action row tracker --- */
    (function initActionRowTracker() {
      /* #52 Favorite */
      app.addEventListener('click', function(e) {
        if (e.target.closest('.salvar-favoritos')) {
          mmTrackEvent('favorite_clicked', { product_id: productId, product_name: productName });
        }
      }, true);
  
      /* #53 Share */
      app.addEventListener('click', function(e) {
        if (e.target.closest('.compartilhar-produto')) {
          mmTrackEvent('share_clicked', { product_id: productId });
        }
      }, true);
  
      /* #54 WhatsApp inline */
      app.addEventListener('click', function(e) {
        if (e.target.closest('.exibe-botao-whatsapp')) {
          mmTrackEvent('whatsapp_inline_clicked', {
            product_id: productId,
            product_price: priceNum,
            time_on_page_ms: window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0
          });
        }
      }, true);
    })();
  
    /* --- #56-58 Scroll pattern tracker --- */
    (function initScrollPattern() {
      var lastDir = null;
      var dirChanges = 0;
      var lastY = window.pageYOffset;
      var sectionsViewed = new Set();
      var excessiveFired = false;
      var recentReversals = [];
  
      window.addEventListener('scroll', function() {
        var y = window.pageYOffset;
        var dir = y > lastY ? 'down' : 'up';
  
        if (lastDir && dir !== lastDir) {
          dirChanges++;
          recentReversals.push(Date.now());
          /* Keep only last 10s */
          var cutoff = Date.now() - 10000;
          recentReversals = recentReversals.filter(function(t) { return t > cutoff; });
  
          /* #58 Excessive scrolling */
          if (recentReversals.length >= 5 && !excessiveFired) {
            excessiveFired = true;
            mmTrackEvent('excessive_scrolling', {
              reversal_count: recentReversals.length,
              section: mmGetClosestSection(document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2))
            });
          }
        }
  
        lastDir = dir;
        lastY = y;
  
        /* Track sections in viewport */
        var midEl = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
        if (midEl) sectionsViewed.add(mmGetClosestSection(midEl));
      }, { passive: true });
  
      /* #56 Product scroll pattern on beforeunload */
      window.addEventListener('beforeunload', function() {
        mmTrackEvent('product_scroll_pattern', {
          max_scroll: window.__MM._getMaxScroll ? window.__MM._getMaxScroll() : 0,
          direction_changes: dirChanges,
          sections_viewed: Array.from(sectionsViewed),
          time_total_ms: window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0
        });
      });
  
      /* #57 Bounce with context */
      setTimeout(function() {
        var scroll = window.__MM._getMaxScroll ? window.__MM._getMaxScroll() : 0;
        if (scroll < 25) {
          /* Will fire if user leaves before 15s with <25% scroll */
          window.addEventListener('beforeunload', function bounceHandler() {
            var time = window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0;
            if (time < 15000 && scroll < 25) {
              var lastEl = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
              mmTrackEvent('bounce_with_context', {
                time_on_page_ms: time,
                last_element_seen: lastEl ? mmGetSelector(lastEl) : 'unknown'
              });
            }
            window.removeEventListener('beforeunload', bounceHandler);
          });
        }
      }, 5000);
    })();
  }
  
  /* =============================================
     SECAO 8: CART / CHECKOUT TRACKERS
     ============================================= */
  
  function mmInitCartTrackers() {
    var pageType = window.__MM.ctx.page_type;
  
    /* #62 Cart viewed */
    if (pageType === 'cart') {
      setTimeout(function() {
        var items = document.querySelectorAll('.item-carrinho, .cart-item, [class*="item-cart"]');
        var totalEl = document.querySelector('.total-carrinho, .cart-total, [class*="total"]');
        var totalText = totalEl ? totalEl.textContent : '';
        var totalVal = parseFloat(totalText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
  
        mmTrackEvent('cart_viewed', {
          cart_value: totalVal,
          item_count: items.length
        });
  
        /* #63 Cart item removed (MutationObserver) */
        var cartContainer = items.length > 0 ? items[0].parentElement : null;
        if (cartContainer) {
          var prevCount = items.length;
          var cartObserver = new MutationObserver(function() {
            var currentItems = cartContainer.querySelectorAll('.item-carrinho, .cart-item, [class*="item-cart"]');
            if (currentItems.length < prevCount) {
              mmTrackEvent('cart_item_removed', {
                removed_product: 'unknown',
                remaining_count: currentItems.length
              });
            }
            prevCount = currentItems.length;
          });
          cartObserver.observe(cartContainer, { childList: true, subtree: true });
        }
      }, 2000);
    }
  
    /* #64-65 Checkout */
    if (pageType === 'checkout') {
      setTimeout(function() {
        var totalEl = document.querySelector('.total-pedido, .order-total, [class*="total"]');
        var totalText = totalEl ? totalEl.textContent : '';
        var totalVal = parseFloat(totalText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
        var items = document.querySelectorAll('.item-pedido, .checkout-item, [class*="item"]');
  
        /* #64 */
        mmTrackEvent('checkout_started', {
          cart_value: totalVal,
          item_count: items.length
        });
  
        /* #65 Checkout abandoned */
        window.addEventListener('beforeunload', function() {
          var lastStep = '';
          var steps = document.querySelectorAll('.step.active, .etapa.ativa, [class*="step"].active');
          if (steps.length > 0) lastStep = steps[steps.length - 1].textContent.trim().substring(0, 50);
  
          mmTrackEvent('checkout_abandoned', {
            last_step: lastStep,
            time_in_checkout_ms: window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0,
            cart_value: totalVal
          });
        });
      }, 2000);
    }
  }
  
  /* =============================================
     SECAO 8B: PURCHASE TRACKER (/checkout/done)
     Lê dataLayer[0].transaction (nativo Magazord)
     e despacha para GTM (dataLayer push), GA4,
     Meta Pixel e PostHog via mmTrackEvent.
     Dedup por transaction_id em sessionStorage.
     ============================================= */
  
  function mmInitPurchaseTracker() {
    if (location.pathname.indexOf('/checkout/done') === -1) return;
  
    var PURCHASE_KEY = 'mm_purchase_fired';
  
    function tryFirePurchase() {
      /* Ler dados do dataLayer nativo Magazord */
      var dl = window.dataLayer && window.dataLayer[0];
      if (!dl || !dl.transaction || !dl.transaction.id) return false;
  
      var txn = dl.transaction;
      var txnId = String(txn.id);
  
      /* Dedup: não disparar se já disparou para este pedido */
      try {
        var firedIds = JSON.parse(sessionStorage.getItem(PURCHASE_KEY) || '[]');
        if (firedIds.indexOf(txnId) !== -1) {
          if (MM_CONFIG.debug) console.log('[MM] Purchase já disparado para', txnId);
          return true;
        }
        firedIds.push(txnId);
        sessionStorage.setItem(PURCHASE_KEY, JSON.stringify(firedIds));
      } catch(e) {}
  
      /* Montar items no formato GA4 */
      var items = [];
      var contentIds = [];
      if (txn.items && txn.items.length) {
        txn.items.forEach(function(item) {
          var cats = (item.category || '').split(',');
          contentIds.push(item.sku || item.skuGroup || '');
          items.push({
            item_id: item.sku || item.skuGroup || '',
            item_name: (item.name || '').substring(0, 100),
            item_brand: item.brand || '',
            item_category: cats[0] ? cats[0].trim() : '',
            item_category2: item.category2 || (cats[1] ? cats[1].trim() : ''),
            item_variant: item.variant || '',
            price: parseFloat(item.price) || 0,
            quantity: parseInt(item.quantity, 10) || 1
          });
        });
      }
  
      var value = parseFloat(txn.value) || 0;
      var shipping = parseFloat(txn.shipping) || 0;
  
      /* 1) Push para dataLayer — dispara trigger CE-purchase do GTM
            (Google Ads Conversion + GA4 purchase) */
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ ecommerce: null }); /* limpar ecommerce anterior */
      window.dataLayer.push({
        event: 'purchase',
        ecommerce: {
          transaction_id: txnId,
          value: value,
          currency: 'BRL',
          shipping: shipping,
          items: items
        }
      });
  
      /* 2) mmTrackEvent — despacha para PostHog + Meta Pixel (Purchase) */
      mmTrackEvent('purchase', {
        transaction_id: txnId,
        value: value,
        shipping: shipping,
        item_count: items.length,
        content_ids: contentIds,
        num_items: items.length
      });
  
      if (MM_CONFIG.debug) console.log('[MM] Purchase disparado:', txnId, 'valor:', value);
      return true;
    }
  
    /* Magazord pode demorar a popular dataLayer[0].transaction
       Tentar imediatamente e com retry */
    if (!tryFirePurchase()) {
      var attempts = 0;
      var interval = setInterval(function() {
        attempts++;
        if (tryFirePurchase() || attempts >= 20) {
          clearInterval(interval);
        }
      }, 500);
    }
  }
  
  /* =============================================
     SECAO 9: BOOT
     ============================================= */
  
  (function mmBoot() {
    /* Namespace global */
    window.__MM = {
      cfg: MM_CONFIG,
      ctx: null,
      track: mmTrackEvent,
      _q: [],
      _ready: false,
      _productLoadTime: Date.now(),
      _priceViewTime: null
    };
  
    /* Build context */
    window.__MM.ctx = mmBuildContext();
  
    if (MM_CONFIG.debug) {
      console.log('[MM] Context:', window.__MM.ctx);
    }
  
    /* Init SDKs — apenas os NOVOS (GA4 + Meta Pixel ja estao no site).
       Pula tudo se mm_no_tracking estiver ativo (modo teste). */
    if (!mmIsTrackingDisabled()) {
      mmInitPostHog();
      setTimeout(function() { mmInitClarity(); }, 2000);
      setTimeout(function() { mmInitFingerprintJS(); }, 3000);
    }
  
    /* Mark ready + flush queue after short delay for SDKs to load */
    setTimeout(function() {
      window.__MM._ready = true;
      mmFlushQueue();
      if (MM_CONFIG.debug) console.log('[MM] Ready. Flushed', window.__MM._q.length, 'queued events');
    }, 4000);
  
    /* #1 page_view (fires immediately, may queue) */
    mmTrackEvent('page_view', {
      page_type: window.__MM.ctx.page_type,
      url: window.__MM.ctx.url,
      referrer: window.__MM.ctx.referrer,
      utm_source: window.__MM.ctx.utm_source,
      utm_medium: window.__MM.ctx.utm_medium,
      utm_campaign: window.__MM.ctx.utm_campaign,
      device_type: window.__MM.ctx.device_type,
      is_returning: window.__MM.ctx.is_returning,
      visit_count: window.__MM.ctx.visit_count,
      viewport: window.__MM.ctx.viewport_width + 'x' + window.__MM.ctx.viewport_height
    });
  
    /* Init global observers immediately */
    mmInitScrollTracker();
    mmInitTimeTracker();
    mmInitEngagementTracker();
    mmInitExitIntent();
    mmInitClickQuality();
    mmInitPerformanceTracker();
    mmInitErrorTracker();
    mmInitContentTracker();
    mmInitWhatsAppFloatTracker();
    mmInitDeanonTracker();
  
    /* Product page: wait for React render then init product trackers */
    if (window.__MM.ctx.page_type === 'product') {
      (function waitForProduct() {
        var retries = 0;
        function check() {
          retries++;
          var reactApp = document.querySelector('#produto-react-app');
          if (reactApp && reactApp.querySelector('.informacoes-compra-produto')) {
            window.__MM._productLoadTime = Date.now();
            mmInitProductTrackers();
            return;
          }
          if (retries < 30) setTimeout(check, 500);
        }
        check();
      })();
    }
  
    /* Cart/Checkout trackers */
    if (window.__MM.ctx.page_type === 'cart' || window.__MM.ctx.page_type === 'checkout') {
      mmInitCartTrackers();
    }
  
    /* Purchase tracker (/checkout/done) */
    mmInitPurchaseTracker();
  
    /* #25 Session summary on beforeunload */
    window.addEventListener('beforeunload', function() {
      var productsViewed = 0;
      try {
        var stored = sessionStorage.getItem('mm_products_viewed');
        productsViewed = stored ? JSON.parse(stored).length : 0;
      } catch(e) {}
  
      mmTrackEvent('session_summary', {
        pages_viewed: (function() {
          try {
            var count = parseInt(sessionStorage.getItem('mm_page_count') || '0', 10);
            return count;
          } catch(e) { return 0; }
        })(),
        total_time_ms: window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0,
        max_scroll: window.__MM._getMaxScroll ? window.__MM._getMaxScroll() : 0,
        products_viewed: productsViewed,
        add_to_cart_count: parseInt(sessionStorage.getItem('mm_atc_count') || '0', 10)
      });
    });
  
    /* Track page count and products viewed in sessionStorage */
    try {
      var pageCount = parseInt(sessionStorage.getItem('mm_page_count') || '0', 10) + 1;
      sessionStorage.setItem('mm_page_count', String(pageCount));
  
      if (window.__MM.ctx.page_type === 'product') {
        var productsArr = [];
        try { productsArr = JSON.parse(sessionStorage.getItem('mm_products_viewed') || '[]'); } catch(e) {}
        productsArr.push(location.pathname);
        sessionStorage.setItem('mm_products_viewed', JSON.stringify(productsArr));
      }
    } catch(e) {}
  
    if (MM_CONFIG.debug) {
      console.log('[MM] Boot complete. Page type:', window.__MM.ctx.page_type);
      /* Expose track function globally for testing */
      window.mmTrack = mmTrackEvent;
    }
  })();

  /* === global.js === */
  /* =============================================
     GLOBAL JS - Madeira Mania
     Funcionalidades para TODAS as páginas
     ============================================= */
  
  /* --- 1. Floating WhatsApp — criar botão (posição controlada via CSS) --- */
  (function createFloatingWhatsApp() {
    if (document.getElementById('mm-floating-whatsapp')) return;
  
    var phone = '5511915299488';
    var prodNome = (document.querySelector('#prod-nome') || {}).value;
    var currentUrl = window.location.href;
  
    var msg;
    if (prodNome) {
      msg = 'Olá! Tenho interesse no ' + prodNome.trim() + '. ' + currentUrl;
    } else {
      msg = 'Olá! Vim pelo site e gostaria de ajuda. ' + currentUrl;
    }
  
    var whatsUrl = 'https://api.whatsapp.com/send?phone=' + phone
      + '&text=' + encodeURIComponent(msg);
  
    var el = document.createElement('a');
    el.id = 'mm-floating-whatsapp';
    el.href = whatsUrl;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
    el.setAttribute('aria-label', 'Fale conosco pelo WhatsApp');
  
    /* Posição definida via CSS em global.css e produto.css — NÃO definir bottom aqui */
    el.style.cssText = [
      'position: fixed',
      'right: 14px',
      'z-index: 98',
      'display: flex',
      'align-items: center',
      'justify-content: center',
      'width: 52px',
      'height: 52px',
      'background: #4b664a',
      'border-radius: 50%',
      'box-shadow: 0 3px 12px rgba(0,0,0,0.18)',
      'text-decoration: none',
      'transition: transform 0.15s ease',
      '-webkit-tap-highlight-color: transparent'
    ].join(';');
  
    el.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" style="display:block;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  
    el.addEventListener('touchstart', function() { el.style.transform = 'scale(0.92)'; }, { passive: true });
    el.addEventListener('touchend', function() { el.style.transform = ''; }, { passive: true });
  
    document.body.appendChild(el);
  })();
  
  /* --- 2. Back-to-top — substituir ícone (posição controlada via CSS) --- */
  (function improveBackToTop() {
    var btt = document.querySelector('.back-to-top');
    if (!btt) return;
  
    var icon = btt.querySelector('.icon');
    if (icon) {
      icon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';
      icon.style.cssText = 'display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:none !important;';
    }
  })();
  
  
  /* --- 3. Footer rebuild — hide Magazord footer + inject ours
     Aplica em TODAS as páginas (inclusive checkout)
     --- */
  (function buildMmFooter() {
    var MM_LOGO_URL = 'https://madeiramania.cdn.magazord.com.br/resources/Design%20sem%20nome%20(1).svg';
    var WHATS = 'https://api.whatsapp.com/send?phone=5511915299488&text=' + encodeURIComponent('Olá! Vim pelo site e gostaria de ajuda.');
  
    var ICONS = {
      phone: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
      whats: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',
      mail: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
      clock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
      pin: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
      lock: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>',
      shield: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>',
      truck: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
      card: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
      instagram: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
      facebook: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>',
      tiktok: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.39a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.42z"/></svg>'
    };
  
    function buildFooterDom() {
      if (document.getElementById('mm-footer')) return;
      if (!document.body) return;
  
      document.body.classList.add('mm-footer-rebuild');
  
      var footer = document.createElement('footer');
      footer.id = 'mm-footer';
      footer.className = 'mm-footer';
      footer.setAttribute('role', 'contentinfo');
  
      footer.innerHTML =
        /* MAIN GRID */
        '<div class="mm-footer-main">' +
          '<div class="mm-footer-grid">' +
            /* Brand */
            '<div class="mm-footer-col mm-footer-brand">' +
              '<a class="mm-footer-logo" href="/" aria-label="Madeira Mania - voltar à home">' +
                '<img src="' + MM_LOGO_URL + '" alt="Madeira Mania" width="180" height="48">' +
              '</a>' +
              '<p class="mm-footer-tagline">Móveis com design moderno e qualidade superior pra transformar sua casa em um lar cheio de personalidade.</p>' +
              '<div class="mm-footer-social">' +
                '<a href="https://www.instagram.com/madeira.mania" target="_blank" rel="noopener" aria-label="Instagram da Madeira Mania">' + ICONS.instagram + '</a>' +
                '<a href="https://web.facebook.com/profile.php?id=61578397120844" target="_blank" rel="noopener" aria-label="Facebook da Madeira Mania">' + ICONS.facebook + '</a>' +
                '<a href="https://www.tiktok.com/@madeira.mania" target="_blank" rel="noopener" aria-label="TikTok da Madeira Mania">' + ICONS.tiktok + '</a>' +
              '</div>' +
            '</div>' +
            /* Atendimento */
            '<div class="mm-footer-col">' +
              '<h4 class="mm-footer-h">Atendimento</h4>' +
              '<ul class="mm-footer-list">' +
                '<li><a href="tel:+5511915299488">' + ICONS.phone + '<span>(11) 91529-9488</span></a></li>' +
                '<li><a href="' + WHATS + '" target="_blank" rel="noopener">' + ICONS.whats + '<span>WhatsApp</span></a></li>' +
                '<li><a href="mailto:contato@madeiramania.com.br">' + ICONS.mail + '<span>contato@madeiramania.com.br</span></a></li>' +
                '<li><span class="mm-footer-meta">' + ICONS.clock + '<span>Seg a Sex · 8h às 18h</span></span></li>' +
              '</ul>' +
            '</div>' +
            /* Compra */
            '<div class="mm-footer-col">' +
              '<h4 class="mm-footer-h">Sua compra</h4>' +
              '<ul class="mm-footer-list">' +
                '<li><a href="/como-comprar">Como comprar</a></li>' +
                '<li><a href="/politica-de-entrega">Frete e entrega</a></li>' +
                '<li><a href="/politica-de-trocas-e-devolucoes">Trocas e devoluções</a></li>' +
                '<li><a href="/compra-segura">Compra segura</a></li>' +
                '<li><a href="/avaliacoes-de-clientes">Avaliações de clientes</a></li>' +
              '</ul>' +
            '</div>' +
            /* Institucional */
            '<div class="mm-footer-col">' +
              '<h4 class="mm-footer-h">Madeira Mania</h4>' +
              '<ul class="mm-footer-list">' +
                '<li><a href="/quem-somos">Quem somos</a></li>' +
                '<li><a href="/atendimento">Central de atendimento</a></li>' +
                '<li><a href="/envio-imediato">Pronta entrega</a></li>' +
                '<li><a href="/politica-de-privacidade">Política de privacidade</a></li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
        '</div>' +
  
        /* TRUST STRIP */
        '<div class="mm-footer-trust">' +
          '<div class="mm-footer-trust-inner">' +
            '<div class="mm-footer-trust-item">' + ICONS.lock +
              '<div class="mm-footer-trust-text"><strong>Compra 100% segura</strong><small>Site protegido por SSL</small></div>' +
            '</div>' +
            '<div class="mm-footer-trust-item">' + ICONS.shield +
              '<div class="mm-footer-trust-text"><strong>7 dias para troca</strong><small>Direito de arrependimento</small></div>' +
            '</div>' +
            '<div class="mm-footer-trust-item">' + ICONS.truck +
              '<div class="mm-footer-trust-text"><strong>Frete grátis</strong><small>Acima de R$ 2.000</small></div>' +
            '</div>' +
            '<div class="mm-footer-trust-item">' + ICONS.card +
              '<div class="mm-footer-trust-text"><strong>12x sem juros</strong><small>Em todos os cartões</small></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
  
        /* BOTTOM STRIP */
        '<div class="mm-footer-bottom">' +
          '<div class="mm-footer-bottom-inner">' +
            '<p class="mm-footer-legal">' +
              '© 2026 <strong>Madeira Mania</strong> · CNPJ 60.021.382/0001-61<br>' +
              'Av. Paulista, 1636 · Bela Vista · São Paulo/SP · 01310-200' +
            '</p>' +
            '<div class="mm-footer-payments" aria-label="Formas de pagamento aceitas">' +
              '<span class="mm-pay-chip" title="PIX"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/pix.svg" alt="PIX" loading="lazy"></span>' +
              '<span class="mm-pay-chip" title="Visa"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/visa.svg" alt="Visa" loading="lazy"></span>' +
              '<span class="mm-pay-chip" title="Mastercard"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/mastercard.svg" alt="Mastercard" loading="lazy"></span>' +
              '<span class="mm-pay-chip" title="Elo"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/elo.svg" alt="Elo" loading="lazy"></span>' +
              '<span class="mm-pay-chip" title="Hipercard"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/hipercard.svg" alt="Hipercard" loading="lazy"></span>' +
              '<span class="mm-pay-chip" title="American Express"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/american2.svg" alt="American Express" loading="lazy"></span>' +
              '<span class="mm-pay-chip" title="Boleto Bancário"><img src="https://public-resources.zordcdn.com.br/assets/global/footer/formas-pagamento/boleto.svg" alt="Boleto Bancário" loading="lazy"></span>' +
            '</div>' +
          '</div>' +
        '</div>';
  
      document.body.appendChild(footer);
      /* Remove anti-flicker loading class — nosso footer já renderizou */
      document.documentElement.classList.remove('mm-footer-loading');
    }
  
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', buildFooterDom);
    } else {
      buildFooterDom();
    }
  
    /* Re-aplicar guard se React re-renderizar e remover nosso footer */
    setTimeout(buildFooterDom, 1000);
    setTimeout(buildFooterDom, 3000);
  
    /* Failsafe: remove loading class após 6s mesmo se algo der errado, evita ficar sem footer pra sempre */
    setTimeout(function() {
      document.documentElement.classList.remove('mm-footer-loading');
    }, 6000);
  })();
  
  /* =============================================
     ATENDIMENTO PAGE — Inject premium header block
     Magazord CMS cache é teimoso; injetamos via bundle
     ============================================= */
  (function() {
    'use strict';
    if (location.pathname.replace(/\/$/, '') !== '/atendimento') return;
  
    function enhance() {
      var titleContent = document.querySelector('.atendimento .title-content');
      if (!titleContent || titleContent.dataset.mmEnhanced) return;
      titleContent.dataset.mmEnhanced = '1';
  
      var whatsappIcon = '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.053 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64.001 5.122 1.03 6.988 2.898 1.866 1.868 2.893 4.352 2.892 6.992-.003 5.45-4.437 9.887-9.885 9.887zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.465 3.488z"/></svg>';
  
      titleContent.innerHTML = [
        '<h1>Fale com a gente</h1>',
        '<p class="mm-atd-lead">Nosso time está pronto para ajudar você a escolher os móveis certos para sua casa. Use o WhatsApp para respostas rápidas ou preencha o formulário abaixo.</p>',
        '<div class="mm-atd-channels">',
        '  <a class="mm-atd-whatsapp" href="https://api.whatsapp.com/send?phone=5511915299488&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20m%C3%B3veis." target="_blank" rel="noopener">',
        '    ' + whatsappIcon,
        '    <span class="mm-atd-whatsapp-label">Fale pelo WhatsApp</span>',
        '    <span class="mm-atd-whatsapp-number">11 91529-9488</span>',
        '  </a>',
        '  <div class="mm-atd-info">',
        '    <div class="mm-atd-info-item">',
        '      <strong>Horário de atendimento</strong>',
        '      <span>Segunda a sexta · 9h às 18h</span>',
        '      <span>Sábado · 9h às 13h</span>',
        '    </div>',
        '    <div class="mm-atd-info-item">',
        '      <strong>E-mail</strong>',
        '      <a href="mailto:contato@madeiramania.com.br">contato@madeiramania.com.br</a>',
        '    </div>',
        '  </div>',
        '</div>',
        '<h2 class="mm-atd-form-title">Formulário de contato</h2>'
      ].join('\n');
    }
  
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', enhance);
    } else {
      enhance();
    }
    setTimeout(enhance, 500);
    setTimeout(enhance, 2000);
  })();

  /* === header.js === */
  /* =============================================
     HEADER — Madeira Mania
     Injection of custom #mm-header shell
     Idempotent (checks guard ID before injecting)
     ============================================= */
  
  (function(){
    if (document.getElementById('mm-header')) return;
  
    function init() {
      if (document.getElementById('mm-header')) return;
  
      var logoUrl = 'https://madeiramania.cdn.magazord.com.br/resources/Design%20sem%20nome%20(1).svg';
      // ^^^ extracted from live site (2026-04-09) — Magazord CDN SVG, 1800x446 native
  
      // Inline SVG icons (stroke-based, currentColor inherits from text)
      var svg = {
        search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
        heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
        user: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
        bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>'
      };
  
      var header = document.createElement('div');
      header.id = 'mm-header';
      header.innerHTML = [
        '<a class="mm-h-skip" href="#main">Pular para o conteúdo</a>',
        '<div class="mm-h-topbar">',
        '  <div class="mm-h-topbar-inner">',
        '    <span class="mm-h-topbar-desktop-only">',
        '      <a href="/atendimento">Atendimento</a>',
        '      <span class="mm-h-topbar-sep" aria-hidden="true">·</span>',
        '    </span>',
        '    <span>Frete grátis R$ 2.000+</span>',
        '    <span class="mm-h-topbar-sep" aria-hidden="true">·</span>',
        '    <span>12x sem juros</span>',
        '  </div>',
        '</div>',
        '<div class="mm-h-main">',
        '  <div class="mm-h-main-left">',
        '    <button class="mm-h-burger" id="mm-h-burger" type="button" aria-label="Abrir menu"><span aria-hidden="true">☰</span></button>',
        '    <button class="mm-h-action" id="mm-h-buscar" type="button">' + svg.search + '<span>Buscar</span></button>',
        '  </div>',
        '  <a class="mm-h-logo" href="/" aria-label="Madeira Mania, ir para a página inicial">',
        '    <img src="' + logoUrl + '" alt="" width="280" height="70" loading="eager" />',
        '  </a>',
        '  <div class="mm-h-main-right">',
        '    <a class="mm-h-action" href="/wishlist">' + svg.heart + '<span>Favoritos</span></a>',
        '    <a class="mm-h-action" href="/login">' + svg.user + '<span>Conta</span></a>',
        '    <a class="mm-h-action" href="/checkout/cart" id="mm-h-cart" aria-label="Carrinho, 0 itens" aria-live="polite">',
        '      <span class="mm-h-cart-icon">' + svg.bag + '<span class="mm-h-cart-badge" id="mm-h-cart-count" aria-hidden="true" hidden>0</span></span>',
        '      <span>Carrinho</span>',
        '    </a>',
        '  </div>',
        '</div>',
        '<nav class="mm-h-nav" role="navigation" aria-label="Categorias">',
        '  <ul class="mm-h-nav-list">',
        '    <li class="mm-h-nav-item" data-menu="ambientes">',
        '      <a href="#" class="mm-h-nav-link" aria-haspopup="true" aria-expanded="false">Ambientes</a>',
        '      <div class="mm-h-mega" role="menu" aria-label="Ambientes">',
        '        <div class="mm-h-mega-inner">',
        '          <div class="mm-h-mega-col">',
        '            <a href="/sala-de-estar-9677307902" class="mm-h-mega-heading mm-h-mega-heading-link">Sala de Estar</a>',
        '            <ul>',
        '              <li><a href="/sala-de-estar/mesas">Mesas</a></li>',
        '              <li><a href="/sala-de-estar/racks">Racks para TV</a></li>',
        '              <li><a href="/sala-de-estar/estantes">Estantes</a></li>',
        '              <li><a href="/sala-de-estar/home-theaters">Home Theaters</a></li>',
        '              <li><a href="/sala-de-estar/aparadores">Aparadores</a></li>',
        '              <li><a href="/sala-de-estar/cristaleiras">Cristaleiras</a></li>',
        '              <li><a href="/sala-de-estar/buffets">Buffets</a></li>',
        '              <li><a href="/sala-de-estar/bares">Bares</a></li>',
        '              <li><a href="/sala-de-estar/paineis">Painéis</a></li>',
        '              <li><a href="/sala-de-estar/nichos">Nichos</a></li>',
        '            </ul>',
        '          </div>',
        '          <div class="mm-h-mega-col">',
        '            <a href="/sala-de-jantar-1916970475" class="mm-h-mega-heading mm-h-mega-heading-link">Sala de Jantar</a>',
        '            <ul>',
        '              <li><a href="/sala-de-jantar/mesas">Mesas</a></li>',
        '              <li><a href="/sala-de-jantar/cadeiras">Cadeiras</a></li>',
        '              <li><a href="/sala-de-jantar/aparadores">Aparadores</a></li>',
        '              <li><a href="/sala-de-jantar/buffets">Buffets</a></li>',
        '              <li><a href="/sala-de-jantar/cristaleiras">Cristaleiras</a></li>',
        '              <li><a href="/sala-de-jantar/balcoes">Balcões</a></li>',
        '              <li><a href="/sala-de-jantar/banquetas">Banquetas</a></li>',
        '              <li><a href="/sala-de-jantar/bares">Bares</a></li>',
        '            </ul>',
        '          </div>',
        '          <div class="mm-h-mega-col">',
        '            <a href="/cozinha-6327619447" class="mm-h-mega-heading mm-h-mega-heading-link">Cozinha</a>',
        '            <ul>',
        '              <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>',
        '              <li><a href="/cozinha/banquetas">Banquetas</a></li>',
        '              <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>',
        '              <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>',
        '            </ul>',
        '            <a href="/bar-e-cafe" class="mm-h-mega-heading mm-h-mega-heading-link">Bar e Café</a>',
        '            <ul>',
        '              <li><a href="/bar-e-cafe/bares">Bares</a></li>',
        '              <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',
        '            </ul>',
        '          </div>',
        '          <div class="mm-h-mega-col">',
        '            <a href="/quarto-0961844589" class="mm-h-mega-heading mm-h-mega-heading-link">Quarto</a>',
        '            <ul>',
        '              <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>',
        '              <li><a href="/quarto/comodas">Cômodas</a></li>',
        '              <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>',
        '              <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>',
        '              <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>',
        '            </ul>',
        '            <a href="/escritorio-899523853" class="mm-h-mega-heading mm-h-mega-heading-link">Escritório</a>',
        '            <ul>',
        '              <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',
        '            </ul>',
        '          </div>',
        '        </div>',
        '        <div class="mm-h-mega-footer">',
        '          <a href="/envio-imediato" class="mm-h-mega-cta">Ver todos os ambientes <span aria-hidden="true">→</span></a>',
        '        </div>',
        '      </div>',
        '    </li>',
        '    <li class="mm-h-nav-item">',
        '      <a href="/envio-imediato" class="mm-h-nav-link">Envio Imediato</a>',
        '    </li>',
        '    <li class="mm-h-nav-item">',
        '      <a href="/outlet" class="mm-h-nav-link">Outlet</a>',
        '    </li>',
        '  </ul>',
        '</nav>',
        '<div class="mm-h-drawer" id="mm-h-drawer" hidden role="dialog" aria-modal="true" aria-label="Menu">',
        '  <div class="mm-h-drawer-backdrop"></div>',
        '  <aside class="mm-h-drawer-panel">',
        '    <div class="mm-h-drawer-header">',
        '      <span class="mm-h-drawer-title">Menu</span>',
        '      <button class="mm-h-drawer-close" id="mm-h-drawer-close" type="button" aria-label="Fechar menu">',
        '        <span aria-hidden="true">×</span>',
        '      </button>',
        '    </div>',
        '    <div class="mm-h-drawer-search">',
        '      <form action="/busca" method="get">',
        '        <input type="search" name="q" placeholder="Buscar" aria-label="Buscar" />',
        '      </form>',
        '    </div>',
        '    <nav class="mm-h-drawer-nav" aria-label="Navegação móvel">',
        '      <details class="mm-h-drawer-section">',
        '        <summary>Sala de Estar</summary>',
        '        <ul>',
        '          <li><a href="/sala-de-estar-9677307902">Ver todos</a></li>',
        '          <li><a href="/sala-de-estar/mesas">Mesas</a></li>',
        '          <li><a href="/sala-de-estar/racks">Racks para TV</a></li>',
        '          <li><a href="/sala-de-estar/estantes">Estantes</a></li>',
        '          <li><a href="/sala-de-estar/home-theaters">Home Theaters</a></li>',
        '          <li><a href="/sala-de-estar/aparadores">Aparadores</a></li>',
        '          <li><a href="/sala-de-estar/cristaleiras">Cristaleiras</a></li>',
        '          <li><a href="/sala-de-estar/buffets">Buffets</a></li>',
        '          <li><a href="/sala-de-estar/bares">Bares</a></li>',
        '          <li><a href="/sala-de-estar/paineis">Painéis</a></li>',
        '          <li><a href="/sala-de-estar/nichos">Nichos</a></li>',
        '        </ul>',
        '      </details>',
        '      <details class="mm-h-drawer-section">',
        '        <summary>Sala de Jantar</summary>',
        '        <ul>',
        '          <li><a href="/sala-de-jantar-1916970475">Ver todos</a></li>',
        '          <li><a href="/sala-de-jantar/mesas">Mesas</a></li>',
        '          <li><a href="/sala-de-jantar/cadeiras">Cadeiras</a></li>',
        '          <li><a href="/sala-de-jantar/aparadores">Aparadores</a></li>',
        '          <li><a href="/sala-de-jantar/buffets">Buffets</a></li>',
        '          <li><a href="/sala-de-jantar/cristaleiras">Cristaleiras</a></li>',
        '          <li><a href="/sala-de-jantar/balcoes">Balcões</a></li>',
        '          <li><a href="/sala-de-jantar/banquetas">Banquetas</a></li>',
        '          <li><a href="/sala-de-jantar/bares">Bares</a></li>',
        '        </ul>',
        '      </details>',
        '      <details class="mm-h-drawer-section">',
        '        <summary>Cozinha</summary>',
        '        <ul>',
        '          <li><a href="/cozinha-6327619447">Ver todos</a></li>',
        '          <li><a href="/cozinha/mesas-de-jantar">Mesas de Jantar</a></li>',
        '          <li><a href="/cozinha/banquetas">Banquetas</a></li>',
        '          <li><a href="/cozinha/cristaleiras">Cristaleiras</a></li>',
        '          <li><a href="/cozinha/cantinhos-do-cafe">Cantinhos do Café</a></li>',
        '        </ul>',
        '      </details>',
        '      <details class="mm-h-drawer-section">',
        '        <summary>Quarto</summary>',
        '        <ul>',
        '          <li><a href="/quarto-0961844589">Ver todos</a></li>',
        '          <li><a href="/quarto/cabeceiras">Cabeceiras</a></li>',
        '          <li><a href="/quarto/comodas">Cômodas</a></li>',
        '          <li><a href="/quarto/guardaroupas">Guarda-Roupas</a></li>',
        '          <li><a href="/quarto/mesas-de-cabeceira">Mesas de Cabeceira</a></li>',
        '          <li><a href="/quarto/penteadeiras">Penteadeiras</a></li>',
        '        </ul>',
        '      </details>',
        '      <details class="mm-h-drawer-section">',
        '        <summary>Bar e Café</summary>',
        '        <ul>',
        '          <li><a href="/bar-e-cafe">Ver todos</a></li>',
        '          <li><a href="/bar-e-cafe/bares">Bares</a></li>',
        '          <li><a href="/bar-e-cafe/cantinhos-do-cafe">Cantinhos do Café</a></li>',
        '        </ul>',
        '      </details>',
        '      <details class="mm-h-drawer-section">',
        '        <summary>Escritório</summary>',
        '        <ul>',
        '          <li><a href="/escritorio-899523853">Ver todos</a></li>',
        '          <li><a href="/escritorio/escrivaninhas">Escrivaninhas</a></li>',
        '        </ul>',
        '      </details>',
        '      <a href="/envio-imediato" class="mm-h-drawer-link">Envio Imediato</a>',
        '      <a href="/outlet" class="mm-h-drawer-link">Outlet</a>',
        '    </nav>',
        '    <div class="mm-h-drawer-footer">',
        '      <a href="/wishlist">Favoritos</a>',
        '      <a href="/login">Conta</a>',
        '      <a href="/atendimento">Atendimento</a>',
        '    </div>',
        '  </aside>',
        '</div>',
        '<div class="mm-h-search-overlay" id="mm-h-search-overlay" hidden role="dialog" aria-modal="true" aria-label="Buscar">',
        '  <div class="mm-h-search-backdrop"></div>',
        '  <div class="mm-h-search-inner">',
        '    <button class="mm-h-search-close" id="mm-h-search-close" type="button" aria-label="Fechar busca">',
        '      <span aria-hidden="true">×</span>',
        '    </button>',
        '    <form action="/busca" method="get" class="mm-h-search-form">',
        '      <label for="mm-h-search-input" class="mm-h-search-label">O que você procura?</label>',
        '      <input type="search" name="q" id="mm-h-search-input" placeholder="O que você procura?" autocomplete="off" />',
        '    </form>',
        '    <div class="mm-h-search-results" id="mm-h-search-results" hidden></div>',
        '    <div class="mm-h-search-suggestions" id="mm-h-search-suggestions">',
        '      <span class="mm-h-search-sug-label">Sugestões populares</span>',
        '      <a href="/busca?q=mesa+de+jantar">Mesa de jantar</a>',
        '      <a href="/busca?q=rack">Rack</a>',
        '      <a href="/busca?q=guarda-roupas">Guarda-roupas</a>',
        '      <a href="/busca?q=cristaleira">Cristaleira</a>',
        '      <a href="/busca?q=aparador">Aparador</a>',
        '    </div>',
        '    <div class="mm-h-search-hint"><kbd>Esc</kbd> para fechar</div>',
        '  </div>',
        '</div>'
      ].join('\n');
      document.body.insertBefore(header, document.body.firstChild);
  
      // Hover-intent for mega-menus (150ms delay to prevent accidental triggers)
      var navItems = header.querySelectorAll('.mm-h-nav-item[data-menu]');
      var intentTimer = null;
      var leaveTimer = null;
      navItems.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
          clearTimeout(leaveTimer);
          clearTimeout(intentTimer);
          intentTimer = setTimeout(function () {
            navItems.forEach(function (i) {
              i.classList.remove('is-open');
              var link = i.querySelector('.mm-h-nav-link');
              if (link) link.setAttribute('aria-expanded', 'false');
            });
            item.classList.add('is-open');
            var link = item.querySelector('.mm-h-nav-link');
            if (link) link.setAttribute('aria-expanded', 'true');
          }, 150);
        });
        item.addEventListener('mouseleave', function () {
          clearTimeout(intentTimer);
          leaveTimer = setTimeout(function () {
            item.classList.remove('is-open');
            var link = item.querySelector('.mm-h-nav-link');
            if (link) link.setAttribute('aria-expanded', 'false');
          }, 200);
        });
      });
  
      // Escape key closes mega-menus
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          navItems.forEach(function (i) {
            i.classList.remove('is-open');
            var link = i.querySelector('.mm-h-nav-link');
            if (link) link.setAttribute('aria-expanded', 'false');
          });
        }
      });
  
      // Prevent the Ambientes link with href="#" from jumping the page
      var ambientesLink = header.querySelector('.mm-h-nav-item[data-menu="ambientes"] > .mm-h-nav-link');
      if (ambientesLink) {
        ambientesLink.addEventListener('click', function (e) { e.preventDefault(); });
      }
  
      // Search overlay
      var overlay = document.getElementById('mm-h-search-overlay');
      var openBtn = document.getElementById('mm-h-buscar');
      var closeBtn = document.getElementById('mm-h-search-close');
      var searchInput = document.getElementById('mm-h-search-input');
      var searchBackdrop = overlay && overlay.querySelector('.mm-h-search-backdrop');
      var prevFocus = null;
  
      function openSearch() {
        if (!overlay) return;
        prevFocus = document.activeElement;
        overlay.hidden = false;
        document.body.style.overflow = 'hidden';
        setTimeout(function () { if (searchInput) searchInput.focus(); }, 50);
      }
      function closeSearch() {
        if (!overlay) return;
        overlay.hidden = true;
        document.body.style.overflow = '';
        if (prevFocus && prevFocus.focus) prevFocus.focus();
      }
  
      if (openBtn) openBtn.addEventListener('click', openSearch);
      if (closeBtn) closeBtn.addEventListener('click', closeSearch);
      if (searchBackdrop) searchBackdrop.addEventListener('click', closeSearch);
  
      // Keyboard: Esc closes overlay, `/` opens search when not typing
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay && !overlay.hidden) {
          closeSearch();
          return;
        }
        if (e.key === '/' && overlay && overlay.hidden) {
          var tag = document.activeElement && document.activeElement.tagName;
          if (tag !== 'INPUT' && tag !== 'TEXTAREA' && !(document.activeElement && document.activeElement.isContentEditable)) {
            e.preventDefault();
            openSearch();
          }
        }
      });
  
      // Basic focus trap (Tab cycles inside overlay)
      if (overlay) {
        overlay.addEventListener('keydown', function (e) {
          if (e.key !== 'Tab' || overlay.hidden) return;
          var focusables = overlay.querySelectorAll('button, input, a[href]');
          if (focusables.length === 0) return;
          var first = focusables[0];
          var last = focusables[focusables.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault(); last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault(); first.focus();
          }
        });
      }
  
      // Search autocomplete — debounced filter + "Buscar por" CTA + recent searches
      // NOTE: Magazord has no JSON autocomplete endpoint (probed 2026-04-09) and /busca
      // renders products client-side via React, so raw fetch() can't scrape results.
      // Strategy: instant "Buscar por '<q>'" CTA + filtered popular terms + recent
      // searches from localStorage. Honest, zero-latency, no broken promises.
      var searchResults = document.getElementById('mm-h-search-results');
      var searchSuggestions = document.getElementById('mm-h-search-suggestions');
      var POPULAR_TERMS = [
        { label: 'Mesa de jantar', q: 'mesa de jantar' },
        { label: 'Mesa de centro', q: 'mesa de centro' },
        { label: 'Rack para TV', q: 'rack' },
        { label: 'Guarda-roupas', q: 'guarda-roupas' },
        { label: 'Cristaleira', q: 'cristaleira' },
        { label: 'Aparador', q: 'aparador' },
        { label: 'Buffet', q: 'buffet' },
        { label: 'Painel para TV', q: 'painel' },
        { label: 'Cabeceira', q: 'cabeceira' },
        { label: 'Cômoda', q: 'comoda' },
        { label: 'Estante', q: 'estante' },
        { label: 'Home theater', q: 'home theater' }
      ];
      var RECENT_KEY = 'mm_recent_searches';
      function getRecentSearches() {
        try {
          var raw = localStorage.getItem(RECENT_KEY);
          if (!raw) return [];
          var arr = JSON.parse(raw);
          return Array.isArray(arr) ? arr.slice(0, 5) : [];
        } catch (e) { return []; }
      }
      function pushRecentSearch(q) {
        if (!q) return;
        try {
          var list = getRecentSearches().filter(function (x) { return x && x.toLowerCase() !== q.toLowerCase(); });
          list.unshift(q);
          localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, 5)));
        } catch (e) { /* localStorage blocked */ }
      }
      function escHtml(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
          return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
      }
      var searchIconSvg = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>';
      var clockIconSvg = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
  
      function renderEmptyState() {
        if (!searchResults) return;
        var recents = getRecentSearches();
        if (!recents.length) {
          // Show only the popular-terms cloud (original behavior)
          searchResults.hidden = true;
          searchResults.innerHTML = '';
          if (searchSuggestions) searchSuggestions.hidden = false;
          return;
        }
        // Show recent searches list + popular terms cloud
        var html = '<div class="mm-h-search-section">';
        html += '<span class="mm-h-search-sug-label">Buscas recentes</span>';
        html += '<ul class="mm-h-search-list">';
        for (var i = 0; i < recents.length; i++) {
          var r = recents[i];
          html += '<li><a class="mm-h-search-result" href="/busca?q=' + encodeURIComponent(r) + '">' +
            '<span class="mm-h-search-result-icon">' + clockIconSvg + '</span>' +
            '<span class="mm-h-search-result-label">' + escHtml(r) + '</span>' +
            '</a></li>';
        }
        html += '</ul></div>';
        searchResults.innerHTML = html;
        searchResults.hidden = false;
        if (searchSuggestions) searchSuggestions.hidden = false;
      }
  
      function renderQueryResults(q) {
        if (!searchResults) return;
        if (searchSuggestions) searchSuggestions.hidden = true;
        var qTrim = q.trim();
        if (qTrim.length < 2) { renderEmptyState(); return; }
        var qLower = qTrim.toLowerCase();
        // Filter popular terms that match
        var matches = POPULAR_TERMS.filter(function (t) {
          return t.label.toLowerCase().indexOf(qLower) !== -1 || t.q.toLowerCase().indexOf(qLower) !== -1;
        }).slice(0, 5);
        var html = '<ul class="mm-h-search-list">';
        // Primary "Buscar por" CTA (always first)
        html += '<li><a class="mm-h-search-result mm-h-search-result-primary" href="/busca?q=' + encodeURIComponent(qTrim) + '" data-recent="1">' +
          '<span class="mm-h-search-result-icon">' + searchIconSvg + '</span>' +
          '<span class="mm-h-search-result-label">Buscar por <strong>&ldquo;' + escHtml(qTrim) + '&rdquo;</strong></span>' +
          '<span class="mm-h-search-result-arrow" aria-hidden="true">&rarr;</span>' +
          '</a></li>';
        // Filtered popular matches
        for (var i = 0; i < matches.length; i++) {
          var m = matches[i];
          html += '<li><a class="mm-h-search-result" href="/busca?q=' + encodeURIComponent(m.q) + '" data-recent="1">' +
            '<span class="mm-h-search-result-icon">' + searchIconSvg + '</span>' +
            '<span class="mm-h-search-result-label">' + escHtml(m.label) + '</span>' +
            '</a></li>';
        }
        html += '</ul>';
        searchResults.innerHTML = html;
        searchResults.hidden = false;
      }
  
      var searchDebounce = null;
      if (searchInput) {
        searchInput.addEventListener('input', function () {
          clearTimeout(searchDebounce);
          var val = searchInput.value;
          searchDebounce = setTimeout(function () {
            if (!val || val.trim().length < 2) renderEmptyState();
            else renderQueryResults(val);
          }, 180);
        });
        // Wire up recent-search persistence on result click and form submit
        if (searchResults) {
          searchResults.addEventListener('click', function (e) {
            var a = e.target.closest && e.target.closest('a[data-recent]');
            if (a) {
              var q = a.getAttribute('href').split('q=')[1];
              if (q) pushRecentSearch(decodeURIComponent(q.replace(/\+/g, ' ')));
            }
          });
        }
        var searchForm = overlay && overlay.querySelector('.mm-h-search-form');
        if (searchForm) {
          searchForm.addEventListener('submit', function () {
            pushRecentSearch((searchInput.value || '').trim());
          });
        }
      }
      // On overlay open, render the empty state so recent searches appear immediately
      if (openBtn) {
        openBtn.addEventListener('click', function () {
          renderEmptyState();
        });
      }
  
      // Mobile drawer (replaces the Phase 1 stub that opened search)
      var drawer = document.getElementById('mm-h-drawer');
      var drawerClose = document.getElementById('mm-h-drawer-close');
      var drawerBackdrop = drawer && drawer.querySelector('.mm-h-drawer-backdrop');
  
      function openDrawer() {
        if (!drawer) return;
        drawer.hidden = false;
        document.body.style.overflow = 'hidden';
        // Focus first interactive for keyboard users
        setTimeout(function () {
          var first = drawer.querySelector('.mm-h-drawer-close');
          if (first) first.focus();
        }, 100);
      }
      function closeDrawer() {
        if (!drawer) return;
        drawer.hidden = true;
        document.body.style.overflow = '';
        // Return focus to burger
        var burger = document.getElementById('mm-h-burger');
        if (burger) burger.focus();
      }
  
      var burger = document.getElementById('mm-h-burger');
      if (burger) {
        burger.addEventListener('click', openDrawer);
      }
      if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
      if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);
  
      // Esc closes drawer (extends existing Esc handlers — add new listener)
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && drawer && !drawer.hidden) closeDrawer();
      });
  
      // Swipe-left to close (basic touch handler)
      if (drawer) {
        var touchStartX = 0;
        drawer.addEventListener('touchstart', function (e) {
          touchStartX = e.touches[0].clientX;
        }, { passive: true });
        drawer.addEventListener('touchend', function (e) {
          var touchEndX = e.changedTouches[0].clientX;
          if (touchStartX - touchEndX > 80) closeDrawer();
        }, { passive: true });
      }
  
      // Cart drawer integration — reuse Magazord native .carrinho-rapido-ctn
      // (The drawer lives inside .header-middle which we hide via display:none.
      //  We lift it out on first open, then toggle transform to slide in/out.)
      var cartLink = document.getElementById('mm-h-cart');
      var liftedDrawer = null;
      var cartScrim = null;
  
      function findDrawer() {
        // Drawer may not exist yet on first page load — Magazord renders it client-side
        return document.querySelector('.carrinho-rapido-ctn');
      }
      function liftDrawer(drawer) {
        if (drawer && !drawer.dataset.mmLifted) {
          // Move out of hidden parent and make it a body-level fixed element
          document.body.appendChild(drawer);
          drawer.dataset.mmLifted = '1';
          // Remove display:none inheritance from parent chain
          drawer.style.display = 'block';
          // Force z-index ABOVE our header (100) and scrim (150) so user can close it
          drawer.style.zIndex = '200';
        }
      }
      // Curated top-10 products (captured from /top-10-produtos 2026-04-09).
      // Fetching at runtime is not viable: /top-10-produtos renders product
      // cards client-side via React after scroll, so raw fetch() returns no
      // product links. A hardcoded curated list is stable (top-10 rarely
      // changes) and guarantees zero layout shift + zero latency.
      var MM_CART_TOP_PRODUCTS = [
        {
          href: '/rack-atenas-cor-naturalle-largura-220-cm',
          name: 'Rack Atenas 220cm',
          img: 'https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5519/am-2501-mavaular-rack-atenas-220-naturalle-lado.jpg?ims=200x200',
          priceFrom: 'R$ 1.615,49',
          priceTo: 'R$ 1.032,30'
        },
        {
          href: '/rack-atenas-cor-naturalle-largura-180-cm',
          name: 'Rack Atenas 180cm',
          img: 'https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5419/am-2501-mavaular-rack-atenas-180-naturalle.jpg?ims=200x200',
          priceFrom: 'R$ 1.688,71',
          priceTo: 'R$ 942,31'
        },
        {
          href: '/buffet-arcus-cor-naturalle-largura-92-cm',
          name: 'Buffet Arcus 92cm',
          img: 'https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/5439/am-2501-mavaular-arcus-02-pts-naturalle.jpg?ims=200x200',
          priceFrom: 'R$ 1.359,09',
          priceTo: 'R$ 807,30'
        },
        {
          href: '/buffet-atenas-cor-naturalle',
          name: 'Buffet Atenas',
          img: 'https://madeiramania.cdn.magazord.com.br/img/2025/12/produto/4237/am-2502-mavaular-buffet-atenas-naturalle.jpg?ims=200x200',
          priceFrom: 'R$ 2.124,07',
          priceTo: 'R$ 1.032,30'
        }
      ];
      var cartBagSvg = '<svg viewBox="0 0 48 48" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 14 8 20v22a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V20l-4-6z"/><path d="M8 20h32"/><path d="M32 28a8 8 0 0 1-16 0"/></svg>';
  
      function enhanceEmptyCart(drawer) {
        if (!drawer) return;
        var content = drawer.querySelector('.content-cart');
        if (!content) return;
        var emptyBox = content.querySelector('.box-empty-cart');
        if (!emptyBox) return; // not empty, nothing to do
        if (emptyBox.dataset.mmEnhanced) return;
        emptyBox.dataset.mmEnhanced = '1';
  
        // Build our custom empty state node, leave the native one untouched
        // but hidden via CSS class on the wrapper. Using a sibling keeps us
        // safe from React re-renders clobbering our markup — if React wipes
        // content, the box-empty-cart returns without mmEnhanced and we
        // re-inject on next open.
        var wrap = document.createElement('div');
        wrap.className = 'mm-cart-empty-wrapper';
        var productsHtml = '';
        for (var i = 0; i < MM_CART_TOP_PRODUCTS.length; i++) {
          var pd = MM_CART_TOP_PRODUCTS[i];
          productsHtml += '<a class="mm-cart-suggestion-card" href="' + pd.href + '">' +
            '<span class="mm-cart-suggestion-thumb"><img src="' + pd.img + '" alt="" loading="lazy" width="80" height="80"/></span>' +
            '<span class="mm-cart-suggestion-body">' +
              '<span class="mm-cart-suggestion-name">' + pd.name + '</span>' +
              '<span class="mm-cart-suggestion-price">' +
                '<span class="mm-cart-suggestion-price-from">' + pd.priceFrom + '</span>' +
                '<span class="mm-cart-suggestion-price-to">' + pd.priceTo + '</span>' +
              '</span>' +
            '</span>' +
            '</a>';
        }
        wrap.innerHTML =
          '<div class="mm-cart-empty-hero">' +
            '<div class="mm-cart-empty-icon">' + cartBagSvg + '</div>' +
            '<h3 class="mm-cart-empty-title">Seu carrinho está vazio</h3>' +
            '<p class="mm-cart-empty-copy">Dê uma olhada nos móveis que nossos clientes mais amam.</p>' +
          '</div>' +
          '<div class="mm-cart-suggestions">' +
            '<span class="mm-cart-suggestions-label">Você pode gostar de</span>' +
            '<div class="mm-cart-suggestions-grid">' + productsHtml + '</div>' +
          '</div>';
        // Mark the content-cart so our CSS hides the native empty state
        content.classList.add('mm-cart-has-empty-enhancement');
        content.appendChild(wrap);
      }
  
      function openCartDrawer() {
        var drawer = findDrawer();
        if (!drawer) { window.location.href = '/checkout/cart'; return; }
        liftDrawer(drawer);
        // Try to enhance empty state — runs every open so if React re-renders
        // the drawer contents between opens, we re-inject.
        enhanceEmptyCart(drawer);
        // Force transform via inline style (bypasses Tailwind class system)
        drawer.style.transform = 'translateX(0)';
        drawer.style.transition = 'transform 320ms cubic-bezier(0.16, 1, 0.3, 1)';
        // Scrim — z-index 150 (between header 100 and drawer 200)
        if (!cartScrim) {
          cartScrim = document.createElement('div');
          cartScrim.id = 'mm-h-cart-scrim';
          cartScrim.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:150;opacity:0;transition:opacity 320ms;';
          cartScrim.addEventListener('click', closeCartDrawer);
          document.body.appendChild(cartScrim);
          // Trigger transition
          requestAnimationFrame(function () { cartScrim.style.opacity = '1'; });
        }
        document.body.style.overflow = 'hidden';
      }
      function closeCartDrawer() {
        var drawer = findDrawer();
        if (drawer) drawer.style.transform = 'translateX(110%)';
        if (cartScrim) {
          cartScrim.style.opacity = '0';
          var s = cartScrim;
          setTimeout(function () { if (s && s.parentNode) s.parentNode.removeChild(s); }, 320);
          cartScrim = null;
        }
        document.body.style.overflow = '';
      }
  
      if (cartLink) {
        cartLink.addEventListener('click', function (e) {
          // Mobile: let default navigate to /checkout/cart (drawer comes Phase 6 via different path)
          if (window.matchMedia('(max-width: 767px)').matches) return;
          e.preventDefault();
          openCartDrawer();
        });
      }
  
      // Esc closes cart drawer (separate listener, doesn't conflict with search/mega-menu)
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && cartScrim) closeCartDrawer();
      });
  
      // Cart count sync — subscribe to Magazord's reactItemAddedToCart event
      // and read the count from the native DOM badge (if it exists) OR from data attributes.
      var cartBadge = document.getElementById('mm-h-cart-count');
      var cartAction = document.getElementById('mm-h-cart');
  
      function updateCartCount() {
        if (!cartBadge) return;
        // Magazord renders count in multiple places — try several sources
        var count = 0;
        // 1. Check for native cart count element
        var nativeCount = document.querySelector('.header-middle .cart-count, .carrinho-ctn .count, [class*="carrinho"] [class*="qtd"], #cart-preview-area [class*="count"]');
        if (nativeCount) {
          var txt = (nativeCount.textContent || '').trim().replace(/\D/g, '');
          if (txt) count = parseInt(txt, 10) || 0;
        }
        // 2. Fallback: count cart items in the drawer
        if (count === 0) {
          var items = document.querySelectorAll('#cart-preview-area .cart-item, .carrinho-rapido-ctn .cart-item');
          count = items.length;
        }
        // 3. Fallback: data attribute on body or header (Magazord sometimes sets this)
        if (count === 0) {
          var dataCount = document.body.dataset.cartCount || document.querySelector('[data-cart-count]')?.dataset.cartCount;
          if (dataCount) count = parseInt(dataCount, 10) || 0;
        }
  
        if (count > 0) {
          cartBadge.textContent = count > 99 ? '99+' : String(count);
          cartBadge.hidden = false;
        } else {
          cartBadge.hidden = true;
        }
        // Update aria-label for screen readers
        if (cartAction) {
          cartAction.setAttribute('aria-label', 'Carrinho, ' + count + ' ' + (count === 1 ? 'item' : 'itens'));
        }
      }
  
      // Listen for cart mutations
      window.addEventListener('reactItemAddedToCart', updateCartCount);
      // Also listen on document for jQuery-dispatched events (Magazord is jQuery-based)
      if (typeof jQuery !== 'undefined') {
        jQuery(document).on('reactItemAddedToCart', updateCartCount);
        // Also hook into ajax cart updates directly
        jQuery(document).ajaxComplete(function (event, xhr, settings) {
          if (settings && settings.url && settings.url.indexOf('checkout/cart') !== -1) {
            setTimeout(updateCartCount, 150);
          }
        });
      }
      // Initial read on load (cart may already have items from session)
      setTimeout(updateCartCount, 500);
      setTimeout(updateCartCount, 2000); // retry after Magazord finishes rendering
  
      // Sticky compact state (scroll-direction sticky)
      var lastScrollY = 0;
      var ticking = false;
      var COMPACT_THRESHOLD = 24;
  
      function onScroll() {
        var y = window.scrollY;
        var delta = y - lastScrollY;
  
        if (y > COMPACT_THRESHOLD && delta > 0) {
          // Scrolling DOWN past threshold
          header.classList.add('is-compact');
        } else if (y <= COMPACT_THRESHOLD || delta < 0) {
          // At top OR scrolling UP
          header.classList.remove('is-compact');
        }
  
        lastScrollY = y;
        ticking = false;
      }
  
      window.addEventListener('scroll', function () {
        if (!ticking) {
          requestAnimationFrame(onScroll);
          ticking = true;
        }
      }, { passive: true });
    }
  
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  })();

  /* === schema-organization.js === */
  /* =============================================
     SCHEMA ORGANIZATION (OnlineStore) JSON-LD
     Madeira Mania — GLOBAL (todas as páginas)
  
     Injeta structured data de organização para:
     - Knowledge Panel no Google
     - Entity recognition por IAs
     - Conexão de entidade entre plataformas (sameAs)
  
     Tipo: OnlineStore (subtipo de Organization)
     recomendado pelo Google para e-commerce sem loja física
     ============================================= */
  
  (function injectOrganizationSchema() {
    /* Evitar duplicação */
    if (document.getElementById('mm-org-schema')) return;
  
    /* Extrair logo da página */
    var logoEl = document.querySelector('.logo img, header img[alt*="logo" i], header img[alt*="Madeira" i]');
    var logoUrl = logoEl ? (logoEl.getAttribute('src') || '') : '';
    if (logoUrl && logoUrl.indexOf('http') !== 0) {
      logoUrl = 'https://www.madeiramania.com.br' + logoUrl;
    }
  
    var schema = {
      '@context': 'https://schema.org',
      '@type': 'OnlineStore',
      '@id': 'https://www.madeiramania.com.br/#organization',
      'name': 'Madeira Mania',
      'url': 'https://www.madeiramania.com.br',
      'description': 'Loja online de móveis com preços abaixo dos marketplaces. Racks, mesas, cristaleiras, sofás, camas e estantes com entrega para todo o Brasil. Até 12x sem juros ou 7% de desconto no PIX.',
      'sameAs': [
        'https://www.instagram.com/madeiramaniabr/',
        'https://www.facebook.com/madeiramaniabr/',
        'https://www.reclameaqui.com.br/empresa/madeira-mania-comercio-de-moveis-ltda/',
        'https://www.youtube.com/@madeiramaniabr',
        'https://www.tiktok.com/@madeiramaniabr'
      ],
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'telephone': '+55-11-91529-9488',
          'contactType': 'customer service',
          'availableLanguage': 'Portuguese'
        },
        {
          '@type': 'ContactPoint',
          'url': 'https://wa.me/5511915299488',
          'contactType': 'customer service',
          'description': 'WhatsApp'
        }
      ],
      'hasMerchantReturnPolicy': {
        '@type': 'MerchantReturnPolicy',
        'applicableCountry': 'BR',
        'returnPolicyCategory': 'https://schema.org/MerchantReturnFiniteReturnWindow',
        'merchantReturnDays': 7,
        'returnMethod': 'https://schema.org/ReturnByMail'
      }
    };
  
    /* Logo — só incluir se encontrou URL válida */
    if (logoUrl && logoUrl.indexOf('http') === 0) {
      schema.logo = logoUrl;
    }
  
    /* Injetar no <head> */
    var scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.id = 'mm-org-schema';
    scriptTag.textContent = JSON.stringify(schema);
    document.head.appendChild(scriptTag);
  })();

  /* === fb-purchase.js === */
  /* FB Purchase tracking (ex CA-20)
     Dispara fbq('track', 'Purchase') na página de confirmação.
     Suporta PIX (aguarda QR code sumir) e Cartão/Boleto (direto). */
  (function() {
    try {
      /* Opt-out: modo teste bloqueia o Purchase event */
      try { if (localStorage.getItem('mm_no_tracking') === '1') return; } catch(e) {}
      if (typeof fbq === 'undefined') return;
      var dl = window.dataLayer;
      if (!dl || !dl[0] || dl[0].pageType !== 'transaction') return;
  
      var tx = dl[0].transaction;
      var orderId = tx.id;
      var key = 'mm_fbq_' + orderId;
      if (localStorage.getItem(key)) return;
  
      var ids = [];
      for (var i = 0; i < tx.items.length; i++) {
        ids.push(tx.items[i].sku);
      }
  
      function firePurchase() {
        if (localStorage.getItem(key)) return;
        fbq('track', 'Purchase', {
          value: tx.value,
          currency: 'BRL',
          content_type: 'product',
          content_ids: ids,
          num_items: tx.items.length
        }, { eventID: orderId });
        localStorage.setItem(key, '1');
      }
  
      var qrBox = document.querySelector('.box-qrcode');
      var isPix = qrBox && qrBox.style.display !== 'none';
  
      if (!isPix) {
        firePurchase();
        return;
      }
  
      var observer = new MutationObserver(function() {
        if (qrBox.style.display === 'none') {
          firePurchase();
          observer.disconnect();
        }
      });
      observer.observe(qrBox, { attributes: true, attributeFilter: ['style'] });
    } catch(e) {}
  })();

  /* =============================================
     SEÇÃO 5: PDP JS (páginas de produto)
     ============================================= */

  /* === produto.js === */
  /* =============================================
     PRODUTO JS - Madeira Mania (Mobile)
     Melhorias dinâmicas da página de produto
  
     Todas as funções são executadas após o DOM
     estar carregado e o React ter renderizado
     ============================================= */
  
  (function initProduto() {
    /* Aguardar o React renderizar o app */
    initProduto._retries = (initProduto._retries || 0) + 1;
  
    var app = document.querySelector('#produto-react-app');
    if (!app || !app.querySelector('.informacoes-compra-produto')) {
      if (initProduto._retries < 30) {
        setTimeout(initProduto, 500);
      }
      return;
    }
  
    /* --- 1. Contador de imagens na galeria (1/5) --- */
    (function addGalleryCounter() {
      var swiper = app.querySelector('#container-swiper');
      var pagination = app.querySelector('.swiper-pagination');
      if (!swiper || !pagination) return;
  
      var bullets = pagination.querySelectorAll('.swiper-pagination-bullet');
      if (bullets.length < 2) return;
  
      /* Esconder setas de navegação — scroll natural por swipe */
      var galleryMain = app.querySelector('.gallery-main');
      if (galleryMain) {
        var arrows = galleryMain.querySelectorAll('.button-prev, .button-next');
        for (var a = 0; a < arrows.length; a++) {
          arrows[a].style.display = 'none';
        }
      }
  
      /* Criar counter — topo esquerdo, fundo branco */
      var counter = document.createElement('div');
      counter.id = 'mm-gallery-counter';
      counter.style.cssText = [
        'position: absolute',
        'top: 12px',
        'left: 12px',
        'background: rgba(255,255,255,0.85)',
        'color: #333',
        'font-size: 12px',
        'font-weight: 500',
        'padding: 3px 10px',
        'border-radius: 12px',
        'z-index: 10',
        'pointer-events: none',
        'font-family: -apple-system, BlinkMacSystemFont, sans-serif',
        'letter-spacing: 0.5px'
      ].join(';');
  
      if (galleryMain) {
        galleryMain.style.position = 'relative';
        galleryMain.appendChild(counter);
      }
  
      function updateCounter() {
        var active = pagination.querySelector('.swiper-pagination-bullet-active');
        var allBullets = pagination.querySelectorAll('.swiper-pagination-bullet');
        if (!active || !allBullets.length) return;
        var idx = Array.prototype.indexOf.call(allBullets, active) + 1;
        counter.textContent = idx + ' / ' + allBullets.length;
      }
  
      updateCounter();
  
      /* Observar mudanças nos bullets (classe active muda) */
      var observer = new MutationObserver(updateCounter);
      observer.observe(pagination, {
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
      });
    })();
  
  
    /* --- 2. Esconder estrelas vazias OU reformatar reviews --- */
    (function reformatReviews() {
      var stars = app.querySelector('.avaliacoes');
      if (!stars) return;
  
      /* Extrair dados de avaliações do script Zord.avaliacoes */
      var scripts = document.querySelectorAll('script:not([src])');
      var totalReviews = 0;
      var nota = 0;
      for (var i = 0; i < scripts.length; i++) {
        var txt = scripts[i].textContent;
        /* Buscar apenas no script que contém Zord.avaliacoes */
        if (txt.indexOf('Zord.avaliacoes') === -1 && txt.indexOf('produtoAvaliacoes') === -1) continue;
        var matchTotal = txt.match(/produtoAvaliacoes\s*:\s*(\d+)/);
        /* Regex específica: "nota:" sem dígito colado (evita nota1, nota5, etc.) */
        var matchNota = txt.match(/\bnota\s*:\s*(?:Number\()?([\d.]+)/);
        if (matchTotal) totalReviews = parseInt(matchTotal[1], 10);
        if (matchNota) nota = parseFloat(matchNota[1]);
        if (totalReviews > 0) break; /* Encontrou — parar de iterar */
      }
  
      /* Se 0 reviews, esconder */
      if (totalReviews === 0) {
        stars.style.display = 'none';
        return;
      }
  
      /* Reformatar: ⭐ 5.0 (231 avaliações) */
      var notaFormatted = nota % 1 === 0 ? nota.toFixed(1) : nota.toFixed(1);
      var starsHtml = '';
      for (var s = 1; s <= 5; s++) {
        if (s <= Math.floor(nota)) {
          starsHtml += '<span style="color:#f5a623;font-size:14px;">&#9733;</span>';
        } else if (s - nota < 1 && s - nota > 0) {
          starsHtml += '<span style="color:#f5a623;font-size:14px;">&#9733;</span>';
        } else {
          starsHtml += '<span style="color:#ddd;font-size:14px;">&#9733;</span>';
        }
      }
  
      var labelPlural = totalReviews === 1 ? 'avaliação' : 'avaliações';
      stars.innerHTML = '<a href="#avaliacoes" style="display:inline-flex;align-items:center;gap:4px;text-decoration:none;color:#555;font-size:13px;">'
        + starsHtml
        + ' <span style="font-weight:600;color:#1a1a1a;">' + notaFormatted + '</span>'
        + ' <span style="color:#777;">(' + totalReviews + ' ' + labelPlural + ')</span>'
        + '</a>';
      stars.style.display = '';
      stars.style.marginTop = '4px';
    })();
  
  
    /* --- 3. Esconder subtítulo redundante --- */
    (function hideRedundantSubtitle() {
      var h1 = app.querySelector('h1');
      if (!h1) return;
      var next = h1.parentElement.querySelector('.text-secondary-700.text-xs');
      if (!next) return;
  
      /* Se o subtítulo repete essencialmente o mesmo do H1, esconder */
      var h1Text = h1.textContent.toLowerCase().replace(/\s+/g, ' ').trim();
      var subText = next.textContent.toLowerCase().replace(/\s+/g, ' ').trim();
  
      /* Verificar sobreposição: se >60% das palavras do sub estão no h1 */
      var subWords = subText.split(/[\s\-:,]+/).filter(function(w) { return w.length > 2; });
      var matches = subWords.filter(function(w) { return h1Text.indexOf(w) !== -1; });
  
      if (matches.length >= subWords.length * 0.6) {
        next.style.display = 'none';
      }
    })();
  
  
    /* --- 4. Linha compacta de ações (Favoritos + WhatsApp + Compartilhar) --- */
    /* IMPORTANTE: NÃO mover elementos React do DOM (appendChild/insertBefore).
       React crasha em re-renders (ex: cálculo frete) com "insertBefore" error
       se encontrar nós fora da posição esperada.
       Fix: CLONAR os botões e esconder os originais via CSS. */
    (function createActionRow() {
      var info = app.querySelector('.informacoes-compra-produto');
      if (!info || document.getElementById('mm-action-row')) return;
  
      var fav = info.querySelector('.salvar-favoritos');
      var whats = info.querySelector('.exibe-botao-whatsapp');
      var shareEl = info.querySelector('.compartilhar-produto');
  
      /* Precisa de pelo menos 2 itens para justificar o row */
      if (!fav && !whats && !shareEl) return;
  
      var row = document.createElement('div');
      row.id = 'mm-action-row';
  
      /* Helper: criar ícone SVG de compartilhar */
      function createShareIcon() {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '18');
        svg.setAttribute('height', '18');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '2');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13');
        svg.appendChild(path);
        return svg;
      }
  
      /* Helper: criar ícone SVG de coração (favoritos) */
      function createHeartIcon() {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '18');
        svg.setAttribute('height', '18');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '2');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z');
        svg.appendChild(path);
        return svg;
      }
  
      /* --- Favoritos: criar botão clone que delega click ao original --- */
      if (fav) {
        var favClone = document.createElement('div');
        favClone.className = 'salvar-favoritos';
        var favBtn = document.createElement('button');
        favBtn.setAttribute('aria-label', 'Favoritar');
        favBtn.appendChild(createHeartIcon());
        favBtn.addEventListener('click', function() {
          var origBtn = fav.querySelector('button');
          if (origBtn) origBtn.click();
        });
        favClone.appendChild(favBtn);
        row.appendChild(favClone);
        /* Esconder original via CSS (não remove do DOM — React precisa dele) */
        fav.style.cssText += ';position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;';
      }
  
      /* WhatsApp: esconder o botão original — substituído pelo CTA dedicado (item 4b) */
      if (whats) {
        whats.style.display = 'none';
      }
  
      /* --- Compartilhar: criar botão clone que delega click ao original --- */
      if (shareEl) {
        var shareClone = document.createElement('div');
        shareClone.className = 'compartilhar-produto';
        var shareBtnNew = document.createElement('button');
        shareBtnNew.setAttribute('aria-label', 'Compartilhar');
        shareBtnNew.appendChild(createShareIcon());
        shareBtnNew.addEventListener('click', function() {
          var origBtn = shareEl.querySelector('button');
          if (origBtn) origBtn.click();
        });
        shareClone.appendChild(shareBtnNew);
        row.appendChild(shareClone);
        /* Esconder original via CSS (não remove do DOM) */
        shareEl.style.cssText += ';position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0,0,0,0) !important;';
      }
  
      /* Inserir após #area-comprar (quantidade fica no lugar) */
      var areaComprar = info.querySelector('#area-comprar');
      if (areaComprar) {
        var insertAfter = areaComprar;
        var next = areaComprar.nextElementSibling;
        while (next) {
          var pos = window.getComputedStyle(next).position;
          if (pos === 'fixed' || pos === 'sticky') {
            insertAfter = next;
            next = next.nextElementSibling;
          } else {
            break;
          }
        }
        insertAfter.parentNode.insertBefore(row, insertAfter.nextSibling);
      } else {
        info.appendChild(row);
      }
    })();
  
  
    /* --- 5. Preço riscado na Sticky Bar --- */
    (function addStickyBarOldPrice() {
      var stickyBar = app.querySelector('.comprar-fixo.area-compra-float');
      if (!stickyBar || stickyBar.querySelector('#mm-sticky-old-price')) return;
  
      /* Buscar preço "de" na área de preço principal */
      var info = app.querySelector('.informacoes-compra-produto');
      if (!info) return;
      var oldPriceEl = info.querySelector('.line-through');
      if (!oldPriceEl) return;
  
      var oldPriceText = oldPriceEl.textContent.trim();
      var priceFixed = stickyBar.querySelector('.price-fixed');
      if (!priceFixed) return;
  
      /* Criar elemento de preço riscado */
      var oldPrice = document.createElement('span');
      oldPrice.id = 'mm-sticky-old-price';
      oldPrice.textContent = oldPriceText;
      oldPrice.style.cssText = [
        'text-decoration: line-through',
        'color: #999',
        'font-size: 11px',
        'display: block',
        'line-height: 1.2',
        'margin-bottom: 1px'
      ].join(';');
  
      /* Inserir acima do preço PIX */
      priceFixed.insertBefore(oldPrice, priceFixed.firstChild);
    })();
  
  
    /* --- 6. Mini selos de segurança abaixo do CTA --- */
    (function addTrustBadges() {
      var info = app.querySelector('.informacoes-compra-produto');
      if (!info || document.getElementById('mm-trust-badges')) return;
  
      var areaComprar = info.querySelector('#area-comprar');
      if (!areaComprar) return;
  
      var badges = document.createElement('div');
      badges.id = 'mm-trust-badges';
      badges.style.cssText = [
        'display: flex',
        'justify-content: center',
        'align-items: center',
        'flex-wrap: wrap',
        'gap: 6px 10px',
        'padding: 8px 0',
        'margin-top: 2px'
      ].join(';');
  
      var items = [
        { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>', text: 'Compra Segura' },
        { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>', text: 'Troca 7 dias' },
        { icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10" stroke="#4b664a"/></svg>', text: 'Reclame Aqui' }
      ];
  
      var itemStyle = 'display:inline-flex;align-items:center;gap:4px;font-size:11px;color:#777;white-space:nowrap;';
  
      items.forEach(function(item, idx) {
        var el = document.createElement('span');
        el.style.cssText = itemStyle;
        el.innerHTML = item.icon + ' ' + item.text;
        badges.appendChild(el);
        if (idx < items.length - 1) {
          var sep = document.createElement('span');
          sep.textContent = '|';
          sep.style.cssText = 'color:#ddd;font-size:10px;';
          badges.appendChild(sep);
        }
      });
  
      /* Inserir logo após #area-comprar, antes da sticky bar */
      var insertRef = areaComprar.nextElementSibling;
      /* Pular sticky bar (fixed) */
      while (insertRef && window.getComputedStyle(insertRef).position === 'fixed') {
        insertRef = insertRef.nextElementSibling;
      }
      if (insertRef) {
        info.insertBefore(badges, insertRef);
      } else {
        info.appendChild(badges);
      }
    })();
  
  
    /* --- 6b. Botão WhatsApp inline (substitui o original) --- */
    (function addWhatsAppCTA() {
      var info = app.querySelector('.informacoes-compra-produto');
      if (!info || document.getElementById('mm-whatsapp-cta')) return;
  
      /* Dados do produto para mensagem pré-preenchida */
      var prodNome = (document.querySelector('#prod-nome') || {}).value || '';
      var prodValor = (document.querySelector('#prod-valor') || {}).value || '';
      var prodUrl = window.location.href;
      var phone = '5511915299488';
  
      /* Formatar preço */
      var precoFormatado = '';
      if (prodValor) {
        precoFormatado = parseFloat(prodValor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      }
  
      /* Mensagem direta (sem "null") */
      var msg = 'Olá! Tenho interesse no ' + prodNome.trim();
      if (precoFormatado) msg += ' (' + precoFormatado + ')';
      msg += '. ' + prodUrl;
  
      var whatsUrl = 'https://api.whatsapp.com/send?phone=' + phone
        + '&text=' + encodeURIComponent(msg);
  
      /* Criar botão — integrado à paleta do site */
      var cta = document.createElement('a');
      cta.id = 'mm-whatsapp-cta';
      cta.href = whatsUrl;
      cta.target = '_blank';
      cta.rel = 'noopener noreferrer';
  
      /* Ícone WhatsApp SVG (16px, combina com o tamanho do texto) */
      var waIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  
      cta.innerHTML = waIcon + '<span>Compre pelo WhatsApp</span>';
  
      /* Posicionar após os trust badges ou após o action row */
      var actionRow = document.getElementById('mm-action-row');
      var trustBadges = document.getElementById('mm-trust-badges');
      var insertAfterEl = actionRow || trustBadges;
      if (insertAfterEl && insertAfterEl.parentNode === info) {
        info.insertBefore(cta, insertAfterEl.nextElementSibling);
      }
    })();
  
  
    /* --- 7. Indicador de estoque baixo --- */
    (function addStockIndicator() {
      var info = app.querySelector('.informacoes-compra-produto');
      if (!info || document.getElementById('mm-stock-indicator')) return;
  
      /* Extrair qtde_estoque dos scripts inline */
      var scripts = document.querySelectorAll('script:not([src])');
      var stock = -1;
      for (var i = 0; i < scripts.length; i++) {
        var txt = scripts[i].textContent;
        /* Buscar qtde_estoque como número (não boolean) */
        var match = txt.match(/"qtde_estoque"\s*:\s*(\d+)/);
        if (match) {
          stock = parseInt(match[1], 10);
          break;
        }
      }
  
      /* Só mostrar se estoque real entre 1 e 9 */
      if (stock < 1 || stock > 9) return;
  
      var indicator = document.createElement('div');
      indicator.id = 'mm-stock-indicator';
      indicator.style.cssText = [
        'display: flex',
        'align-items: center',
        'gap: 6px',
        'padding: 8px 12px',
        'background: #fff8f0',
        'border: 1px solid #fde0c2',
        'border-radius: 8px',
        'font-size: 13px',
        'color: #c65d00',
        'font-weight: 500',
        'margin-top: 4px'
      ].join(';');
  
      var plural = stock === 1 ? 'unidade' : 'unidades';
      indicator.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c65d00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'
        + 'Restam apenas <strong>' + stock + '</strong> ' + plural + ' em estoque';
  
      /* Inserir após a área de preço (primeiro filho do info) */
      var priceArea = info.firstElementChild;
      if (priceArea) {
        priceArea.parentNode.insertBefore(indicator, priceArea.nextElementSibling);
      }
    })();
  
  
    /* --- 8. Bloco de confiança — full-width no desktop, coluna no mobile --- */
    (function addTrustBlock() {
      if (document.getElementById('mm-trust-block')) return;
  
      var isDesktop = window.innerWidth >= 769;
  
      var block = document.createElement('div');
      block.id = 'mm-trust-block';
      block.style.cssText = [
        'background: #f7f8f7',
        'display: flex',
        'align-items: center',
        'justify-content: center',
        'gap: ' + (isDesktop ? '40px' : '10px'),
        'padding: ' + (isDesktop ? '14px 24px' : '12px 16px'),
        isDesktop ? 'flex-direction: row' : 'flex-direction: column',
        isDesktop ? 'border-top: 1px solid #e8ece8' : 'border-radius: 10px',
        isDesktop ? 'border-bottom: 1px solid #e8ece8' : '',
        isDesktop ? 'margin: 0' : 'margin-top: 10px'
      ].filter(Boolean).join(';');
  
      var items = [
        { icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>', label: 'Atendimento', desc: 'Seg à Sex 8h-18h' },
        { icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', label: 'Garantia', desc: '12 meses fabricação' },
        { icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>', label: 'Trocas', desc: 'Até 7 dias' },
        { icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>', label: 'Frete', desc: 'Todo o Brasil' },
        { icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>', label: '12x sem juros', desc: 'No cartão' }
      ];
  
      var rowStyle = 'display:flex;align-items:center;gap:8px;';
      var labelStyle = 'font-size:13px;font-weight:600;color:#1a1a1a;line-height:1.2;';
      var descStyle = 'font-size:11px;color:#777;line-height:1.2;';
  
      items.forEach(function(item) {
        var row = document.createElement('div');
        row.style.cssText = rowStyle;
        row.innerHTML = item.icon
          + '<div><div style="' + labelStyle + '">' + item.label + '</div>'
          + '<div style="' + descStyle + '">' + item.desc + '</div></div>';
        block.appendChild(row);
      });
  
      if (isDesktop) {
        /* Desktop: full-width FORA do React, entre o grid do produto e as seções abaixo */
        var produtoContainer = document.querySelector('#pagina-produto-react-app');
        if (produtoContainer && produtoContainer.nextSibling) {
          produtoContainer.parentNode.insertBefore(block, produtoContainer.nextSibling);
        } else {
          /* Fallback: após o app */
          var mainProduto = document.querySelector('.main-produto');
          if (mainProduto) mainProduto.appendChild(block);
        }
      } else {
        /* Mobile: dentro de .informacoes-compra-produto, após o frete */
        var info = app.querySelector('.informacoes-compra-produto');
        var frete = info ? info.querySelector('.calculo-frete') : null;
        if (frete) {
          frete.parentNode.insertBefore(block, frete.nextElementSibling);
        } else if (info) {
          info.appendChild(block);
        }
      }
    })();
  
  
    /* --- 9. Formas de pagamento inline (PIX + 1-3x visíveis) --- */
    (function showInlinePayments() {
      var info = app.querySelector('.informacoes-compra-produto');
      if (!info || document.getElementById('mm-inline-payments')) return;
  
      var formPagLink = info.querySelector('.form-pag-link');
      if (!formPagLink) return;
  
      /* Extrair dados do link */
      var valorCartao = parseFloat(formPagLink.getAttribute('data-valor')) || 0;
      var valorPix = parseFloat(formPagLink.getAttribute('data-valor-pix')) || 0;
  
      if (valorCartao <= 0) return;
  
      /* Calcular parcelas sem juros (1x a 12x) */
      var parcelas = [];
      for (var n = 1; n <= 12; n++) {
        parcelas.push({
          vezes: n,
          valor: (valorCartao / n).toFixed(2).replace('.', ',')
        });
      }
  
      /* Formatar moeda */
      function fmt(v) {
        return 'R$\u00a0' + v.toFixed(2).replace('.', ',');
      }
  
      /* Calcular economia PIX */
      var economia = valorCartao - valorPix;
  
      var container = document.createElement('div');
      container.id = 'mm-inline-payments';
      container.style.cssText = [
        'padding: 12px 0',
        'border-top: 1px solid #f0f0f0',
        'margin-top: 4px'
      ].join(';');
  
      var isDesktop = window.innerWidth >= 769;
      var itemStyle = 'display:flex;align-items:center;gap:6px;padding:' + (isDesktop ? '2px' : '4px') + ' 0;font-size:13px;color:#444;';
      var dotStyle = 'width:5px;height:5px;border-radius:50%;background:#4b664a;flex-shrink:0;';
  
      /* PIX */
      var pixLine = '<div style="' + itemStyle + '">'
        + '<span style="' + dotStyle + '"></span>'
        + '<span><strong style="color:#1a1a1a;">PIX: ' + fmt(valorPix) + '</strong>'
        + (economia > 0 ? ' <span style="color:#2e7d32;font-size:12px;font-weight:600;">(economize ' + fmt(economia) + ')</span>' : '')
        + '</span></div>';
  
      if (isDesktop) {
        /* Desktop: compacto — só PIX + link "Ver parcelas" */
        container.innerHTML = pixLine
          + '<button id="mm-toggle-parcelas" style="'
          + 'background:none;border:none;color:#4b664a;font-size:13px;font-weight:500;'
          + 'padding:2px 0 0;cursor:pointer;display:flex;align-items:center;gap:4px;'
          + '">Ver todas as parcelas <span style="font-size:10px;">&#9660;</span></button>'
          + '<div id="mm-more-parcelas" style="display:none;"></div>';
      } else {
        /* Mobile: PIX + 1-3x visíveis + expandível */
        var visibleLines = '';
        for (var v = 0; v < 3; v++) {
          visibleLines += '<div style="' + itemStyle + '">'
            + '<span style="' + dotStyle + '"></span>'
            + '<span>' + parcelas[v].vezes + 'x de R$\u00a0' + parcelas[v].valor + ' sem juros</span>'
            + '</div>';
        }
        container.innerHTML = pixLine + visibleLines
          + '<button id="mm-toggle-parcelas" style="'
          + 'background:none;border:none;color:#4b664a;font-size:13px;font-weight:500;'
          + 'padding:6px 0 0;cursor:pointer;display:flex;align-items:center;gap:4px;'
          + '">Ver todas as parcelas <span style="font-size:10px;">&#9660;</span></button>'
          + '<div id="mm-more-parcelas" style="display:none;"></div>';
      }
  
      /* Parcelas escondidas (todas, para o expand) */
      var hiddenLines = '';
      var startIdx = isDesktop ? 0 : 3;
      for (var h = startIdx; h < 12; h++) {
        hiddenLines += '<div style="' + itemStyle + '">'
          + '<span style="' + dotStyle + '"></span>'
          + '<span>' + parcelas[h].vezes + 'x de R$\u00a0' + parcelas[h].valor + ' sem juros</span>'
          + '</div>';
      }
  
      /* Inserir antes do link .form-pag-link (substituir visualmente) */
      var formPagContainer = formPagLink.closest('div');
      if (formPagContainer) {
        formPagContainer.parentNode.insertBefore(container, formPagContainer);
        formPagLink.style.display = 'none';
      }
  
      /* Injetar parcelas expandíveis */
      var moreSection = document.getElementById('mm-more-parcelas');
      if (moreSection) moreSection.innerHTML = hiddenLines;
  
      /* Toggle accordion */
      var toggleBtn = document.getElementById('mm-toggle-parcelas');
      if (toggleBtn && moreSection) {
        toggleBtn.addEventListener('click', function() {
          var isOpen = moreSection.style.display !== 'none';
          moreSection.style.display = isOpen ? 'none' : 'block';
          toggleBtn.innerHTML = isOpen
            ? 'Ver todas as parcelas <span style="font-size:10px;">&#9660;</span>'
            : 'Ver menos <span style="font-size:10px;">&#9650;</span>';
        });
      }
    })();
  
  
    /* --- 10. Trocar ordem: Descrição antes de "Que tal complementar" --- */
    (function swapDescriptionAndCrossSell() {
      var crossSell = document.querySelector('.recomendacao-ctn-0.accordion');
      var descricao = document.querySelector('.descricao-produto.accordion');
      if (!crossSell || !descricao) return;
  
      /* Só trocar se cross-sell vem ANTES da descrição */
      var parent = crossSell.parentNode;
      if (!parent || parent !== descricao.parentNode) return;
  
      var children = Array.prototype.slice.call(parent.children);
      var crossIdx = children.indexOf(crossSell);
      var descIdx = children.indexOf(descricao);
  
      if (crossIdx < descIdx) {
        /* Mover descrição para antes do cross-sell */
        parent.insertBefore(descricao, crossSell);
      }
    })();
  
  
    /* --- 11. CEP cache + auto-cálculo de frete --- */
    (function autoCep() {
      var cepInput = document.querySelector('#cep');
      if (!cepInput) return;
  
      var STORAGE_KEY = 'mm_cep';
  
      /* Salvar CEP quando o usuário calcular */
      var freteBtn = cepInput.closest('.area-calculo');
      if (freteBtn) {
        var btn = freteBtn.querySelector('button');
        if (btn) {
          btn.addEventListener('click', function() {
            var val = cepInput.value.replace(/\D/g, '');
            if (val.length === 8) {
              try { localStorage.setItem(STORAGE_KEY, val); } catch(e) {}
            }
          });
        }
      }
  
      /* Se já tem CEP salvo e o campo está vazio, preencher e calcular */
      var saved = null;
      try { saved = localStorage.getItem(STORAGE_KEY); } catch(e) {}
      if (!saved || saved.length !== 8) return;
      if (cepInput.value.replace(/\D/g, '').length > 0) return; /* Já preenchido */
  
      /* Formatar CEP: 12345-678 */
      var formatted = saved.substring(0, 5) + '-' + saved.substring(5);
  
      /* Simular digitação (React controlled input) */
      var nativeSet = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype, 'value'
      ).set;
      nativeSet.call(cepInput, formatted);
      cepInput.dispatchEvent(new Event('input', { bubbles: true }));
  
      /* Aguardar o React processar o input e habilitar o botão */
      function tryClickCalc(attempts) {
        if (attempts <= 0) return;
        var calcBtn = cepInput.closest('.area-calculo');
        if (calcBtn) {
          var b = calcBtn.querySelector('button');
          if (b && !b.disabled) {
            b.click();
          } else {
            setTimeout(function() { tryClickCalc(attempts - 1); }, 500);
          }
        }
      }
      setTimeout(function() { tryClickCalc(6); }, 500);
    })();
  
  
    /* --- 12. Fix WhatsApp "null" na mensagem --- */
    (function fixWhatsAppNull() {
      var links = document.querySelectorAll('.exibe-botao-whatsapp a[href*="whatsapp"]');
      for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute('href');
        if (href && href.indexOf('null') !== -1) {
          /* Remover " null" ou "null " do texto da mensagem */
          links[i].setAttribute('href', href.replace(/\s*null\s*/g, ' ').replace(/\s{2,}/g, ' '));
        }
      }
  
      /* Observer para caso o React re-renderize o link */
      var whatsContainer = document.querySelector('.exibe-botao-whatsapp');
      if (whatsContainer) {
        var observer = new MutationObserver(function() {
          var link = whatsContainer.querySelector('a[href*="whatsapp"]');
          if (link && link.href.indexOf('null') !== -1) {
            link.setAttribute('href', link.getAttribute('href').replace(/\s*null\s*/g, ' ').replace(/\s{2,}/g, ' '));
          }
        });
        observer.observe(whatsContainer, { subtree: true, attributes: true, attributeFilter: ['href'] });
      }
    })();
  
  
    /* --- 13. Badge "Envio Imediato" na área de compra --- */
    (function addEnvioImediatoBadge() {
      var info = app.querySelector('.informacoes-compra-produto');
      if (!info || document.getElementById('mm-envio-badge')) return;
  
      /* Detectar se produto tem tag "Envio Imediato" */
      var hasEnvio = false;
      var tags = app.querySelectorAll('.tag-produto .text-tag, .tag-produto');
      for (var i = 0; i < tags.length; i++) {
        if (tags[i].textContent.toLowerCase().indexOf('envio') !== -1) {
          hasEnvio = true;
          break;
        }
      }
      /* Fallback: estoque real > 10 (virtual é sempre 10, então >10 = estoque próprio) */
      if (!hasEnvio) {
        var scripts = document.querySelectorAll('script:not([src])');
        for (var s = 0; s < scripts.length; s++) {
          var match = scripts[s].textContent.match(/"qtde_estoque"\s*:\s*(\d+)/);
          if (match) {
            if (parseInt(match[1], 10) > 10) hasEnvio = true;
            break;
          }
        }
      }
  
      if (!hasEnvio) return;
  
      var badge = document.createElement('div');
      badge.id = 'mm-envio-badge';
      badge.style.cssText = [
        'display: inline-flex',
        'align-items: center',
        'gap: 6px',
        'padding: 4px 0',
        'font-size: 13px',
        'color: #1a1a1a',
        'margin-top: 4px'
      ].join(';');
      /* Ícone raio (velocidade) — SVG stroke, não emoji */
      badge.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c65d00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'
        + '<span><strong style="color:#1a1a1a;">Pronta entrega</strong>'
        + ' <span style="color:#777;font-weight:400;">·</span> '
        + '<span style="color:#555;font-weight:400;">Enviamos em 24h</span></span>';
  
      /* Inserir após a área de preço (primeiro filho do info) */
      var priceArea = info.firstElementChild;
      if (priceArea && priceArea.nextElementSibling) {
        priceArea.parentNode.insertBefore(badge, priceArea.nextElementSibling);
      }
    })();
  
  
    /* --- 14. Ocultar badge de desconto da galeria (evitar inconsistência) --- */
    (function hideGalleryDiscountBadge() {
      /* O badge da galeria mostra -41% (preço cartão) enquanto o da área de preço
         mostra -44% (preço PIX). Ocultar o da galeria para evitar confusão. */
      var galleryTags = app.querySelectorAll('.tag-1.tag-produto');
      for (var i = 0; i < galleryTags.length; i++) {
        var text = galleryTags[i].textContent.trim();
        if (text.indexOf('%') !== -1 || text.indexOf('OFF') !== -1) {
          galleryTags[i].style.display = 'none';
        }
      }
    })();
  
  
    /* --- 15. Fix link #avaliacoes — scroll suave para reviews --- */
    /* Nota: já tratado parcialmente em reformatReviews (item 2).
       Aqui garantimos que qualquer link para #avaliacoes funcione. */
    (function fixReviewsScroll() {
      var reviewLinks = document.querySelectorAll('a[href*="avaliacoes"], a[href="#avaliacoes"]');
      for (var i = 0; i < reviewLinks.length; i++) {
        reviewLinks[i].addEventListener('click', function(e) {
          e.preventDefault();
          var target = document.querySelector('#avaliacoes') || document.querySelector('.container-avaliacoes');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      }
    })();
  
  
    /* --- 16. Exibir marca do fabricante abaixo do título --- */
    (function showBrand() {
      var h1 = app.querySelector('h1');
      if (!h1 || document.getElementById('mm-brand')) return;
  
      var marca = document.querySelector('#prod-marca');
      if (!marca || !marca.value || marca.value.trim() === '') return;
  
      var brandEl = document.createElement('span');
      brandEl.id = 'mm-brand';
      brandEl.style.cssText = 'display:block;font-size:13px;color:#777;font-weight:400;margin-top:2px;';
      brandEl.textContent = 'por ' + marca.value.trim();
  
      /* Inserir logo após o h1 */
      var parent = h1.parentElement;
      if (parent) {
        var nextEl = h1.nextElementSibling;
        if (nextEl) {
          parent.insertBefore(brandEl, nextEl);
        } else {
          parent.appendChild(brandEl);
        }
      }
    })();
  
  
    /* --- 17. Atualizar trust badges com score RA e garantia --- */
    (function updateTrustInfo() {
      /* Atualizar mini selos: trocar "Reclame Aqui" por "RA Verificada" com link */
      var badges = document.getElementById('mm-trust-badges');
      if (badges) {
        var spans = badges.querySelectorAll('span');
        for (var i = 0; i < spans.length; i++) {
          if (spans[i].textContent.indexOf('Reclame') !== -1) {
            /* Encontrar URL do RA no footer */
            var raLink = document.querySelector('footer .reclame-aqui a, footer a[href*="reclameaqui"]');
            var raUrl = raLink ? raLink.href : 'https://www.reclameaqui.com.br/empresa/madeira-mania-comercio-de-moveis-ltda/';
            spans[i].innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10" stroke="#4b664a"/></svg>'
              + ' <a href="' + raUrl + '" target="_blank" rel="noopener" style="color:#777;text-decoration:none;">RA Verificada</a>';
          }
        }
      }
  
      /* Garantia já incluída nos items do trust block (item 8) — não duplicar */
    })();
  
  
    /* =============================================
       FASE 2 — Área de Compra
       ============================================= */
  
  
    /* --- 19. Reposicionar frete visualmente via CSS order --- */
    /* IMPORTANTE: NÃO mover .calculo-frete no DOM com insertBefore/appendChild.
       React crasha em re-renders se elementos filhos mudarem de posição.
       Fix: usar CSS order no container flex para reordenar visualmente. */
    (function reorderFreteWithCSS() {
      var info = app.querySelector('.informacoes-compra-produto');
      if (!info) return;
  
      var frete = info.querySelector('.calculo-frete');
      if (!frete) return;
  
      /* Garantir que o container é flex column para order funcionar */
      info.style.cssText += ';display:flex !important;flex-direction:column !important;';
  
      /* Dar order alto ao frete para ele ficar após nossos elementos injetados,
         mas antes do trust block. Nossos elementos injetados têm order padrão (0). */
      frete.style.cssText += ';order:20 !important;';
  
      /* Trust block (item 8) fica depois do frete */
      var trustBlock = document.getElementById('mm-trust-block');
      if (trustBlock) trustBlock.style.cssText += ';order:30 !important;';
    })();
  
  
    /* --- 20. Progress bar frete grátis --- REMOVIDO ---
       Desativado a pedido. Manter numeração para referência. */
  
  
    /* --- 21. Mini-resumo de specs na área de compra --- */
    (function addMiniSpecs() {
      var info = app.querySelector('.informacoes-compra-produto');
      if (!info || document.getElementById('mm-mini-specs')) return;
  
      /* Extrair specs da tabela de descrição */
      var descSection = document.querySelector('.descricao-produto');
      var specs = {};
      if (descSection) {
        var cells = descSection.querySelectorAll('td');
        for (var i = 0; i < cells.length - 1; i += 2) {
          var label = cells[i].textContent.trim().toLowerCase();
          var value = cells[i + 1].textContent.trim();
          if (label.indexOf('largura') !== -1) specs.largura = value;
          if (label.indexOf('altura') !== -1) specs.altura = value;
          if (label.indexOf('profundidade') !== -1) specs.profundidade = value;
          if (label.indexOf('material') !== -1) specs.material = value;
          if (label.indexOf('dobradi') !== -1) specs.dobradicas = value;
          if (label.indexOf('pes') !== -1 || label.indexOf('pés') !== -1) specs.pes = value;
        }
      }
  
      /* Se não encontrou specs suficientes, não exibir */
      if (!specs.largura && !specs.material) return;
  
      var items = [];
      if (specs.material) items.push(specs.material);
      if (specs.dobradicas) items.push('Dobradiças ' + specs.dobradicas);
      if (specs.pes) items.push('Pés: ' + specs.pes);
      if (specs.largura) items.push(specs.largura + ' × ' + (specs.altura || '') + ' × ' + (specs.profundidade || ''));
  
      if (items.length === 0) return;
  
      var el = document.createElement('div');
      el.id = 'mm-mini-specs';
      el.style.cssText = 'padding:8px 0;border-top:1px solid #f0f0f0;margin-top:4px;';
  
      var html = '';
      items.forEach(function(item) {
        html += '<div style="display:flex;align-items:center;gap:6px;padding:2px 0;font-size:13px;color:#555;">'
          + '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polyline points="20 6 9 17 4 12"/></svg>'
          + '<span>' + item + '</span></div>';
      });
  
      el.innerHTML = html;
  
      /* Inserir após as derivações (variações) e antes do #area-comprar */
      var areaComprar = info.querySelector('#area-comprar');
      if (areaComprar) {
        info.insertBefore(el, areaComprar);
      }
    })();
  
  
    /* --- 22. Sticky bar desktop (aparece ao scrollar) --- */
    (function addDesktopStickyBar() {
      /* Apenas desktop — mobile já tem sticky bar nativa */
      if (window.innerWidth < 769) return;
      if (document.getElementById('mm-desktop-sticky')) return;
  
      var info = app.querySelector('.informacoes-compra-produto');
      if (!info) return;
  
      /* Extrair dados */
      var oldPriceEl = info.querySelector('.line-through');
      var pixPrice = (document.querySelector('#prod-valor-principal') || {}).value;
      var cardPrice = (document.querySelector('#prod-valor') || {}).value;
      var prodNome = (document.querySelector('#prod-nome') || {}).value || '';
      var shortName = prodNome.split(' - ')[0] || prodNome; /* "Rack Atenas" */
  
      if (!pixPrice) return;
  
      var oldPriceText = oldPriceEl ? oldPriceEl.textContent.trim() : '';
      var pixFormatted = parseFloat(pixPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      var cardFormatted = cardPrice ? parseFloat(cardPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '';
      var parcela = cardPrice ? (parseFloat(cardPrice) / 12).toFixed(2).replace('.', ',') : '';
  
      var bar = document.createElement('div');
      bar.id = 'mm-desktop-sticky';
      bar.style.cssText = [
        'position: fixed',
        'top: -60px', /* Começa escondido */
        'left: 0',
        'width: 100%',
        'height: 56px',
        'background: #ffffff',
        'border-bottom: 1px solid #e8ece8',
        'box-shadow: 0 2px 8px rgba(0,0,0,0.06)',
        'z-index: 100',
        'display: flex',
        'align-items: center',
        'justify-content: center',
        'padding: 0 24px',
        'transition: top 0.25s ease',
        'font-family: -apple-system, BlinkMacSystemFont, sans-serif'
      ].join(';');
  
      var innerStyle = 'display:flex;align-items:center;gap:16px;max-width:1200px;width:100%;';
      var nameStyle = 'font-size:14px;font-weight:500;color:#1a1a1a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:300px;';
      var priceStyle = 'display:flex;align-items:center;gap:8px;margin-left:auto;';
      var oldStyle = 'text-decoration:line-through;color:#999;font-size:12px;';
      var pixStyle = 'font-size:15px;font-weight:600;color:#1a1a1a;';
      var parcelaStyle = 'font-size:12px;color:#666;';
      var btnStyle = 'display:inline-flex;align-items:center;justify-content:center;padding:8px 20px;background:#4b664a;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer;white-space:nowrap;';
  
      bar.innerHTML = '<div style="' + innerStyle + '">'
        + '<span style="' + nameStyle + '">' + shortName + '</span>'
        + '<div style="' + priceStyle + '">'
        + (oldPriceText ? '<span style="' + oldStyle + '">' + oldPriceText + '</span>' : '')
        + '<span style="' + pixStyle + '">' + pixFormatted + ' <small style="font-weight:400;font-size:11px;color:#666;">PIX</small></span>'
        + (parcela ? '<span style="' + parcelaStyle + '">12x R$\u00a0' + parcela + '</span>' : '')
        + '</div>'
        + '<button id="mm-desktop-sticky-btn" style="' + btnStyle + '">Comprar</button>'
        + '</div>';
  
      document.body.appendChild(bar);
  
      /* Botão clica no mesmo botão do Magazord */
      var stickyBtn = document.getElementById('mm-desktop-sticky-btn');
      if (stickyBtn) {
        stickyBtn.addEventListener('click', function() {
          var originalBtn = app.querySelector('.btn-comprar');
          if (originalBtn) originalBtn.click();
        });
      }
  
      /* Mostrar/esconder baseado no scroll */
      var areaComprar = info.querySelector('#area-comprar');
      if (!areaComprar) return;
  
      function onScroll() {
        var rect = areaComprar.getBoundingClientRect();
        bar.style.top = rect.bottom < 0 ? '0px' : '-60px';
      }
  
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    })();
  
  
    /* --- 23. Footer: expandir selos e formas de pagamento --- */
    (function openFooterAccordions() {
      var selectors = ['.selos-seguranca', '.formas-pagto'];
      selectors.forEach(function(sel) {
        var section = document.querySelector('footer ' + sel);
        if (!section) return;
        /* Trocar closed por open (Tailwind group pattern) */
        if (section.classList.contains('closed')) {
          section.classList.remove('closed');
          section.classList.add('open');
        }
      });
    })();
  
  
    /* --- Desktop: compactar gaps para CTA no fold --- */
    if (window.innerWidth >= 769) {
      var info = app.querySelector('.informacoes-compra-produto');
      if (info) {
        info.style.setProperty('gap', '12px', 'important');
        info.style.setProperty('row-gap', '12px', 'important');
      }
    }
  
    /* --- Sinalizar que o JS terminou (anti-flicker) --- */
    document.body.classList.add('mm-ready');
  
  })();

  /* === schema-product.js === */
  /* =============================================
     SCHEMA PRODUCT JSON-LD - Madeira Mania
     Injeta structured data para SEO e GEO
  
     Extrai dados do DOM/dataLayer do Magazord e
     gera schema Product completo no <head>
  
     Executa após React renderizar (retry pattern)
  
     IMPORTANTE: Este script é injetado pelo Magazord
     via "Conteudo Adicional" no Cabecalho Inferior,
     que fica DENTRO da árvore DOM do React.
     Precisamos remover o <script> wrapper do DOM
     para não crashar o React em re-renders.
     ============================================= */
  
  /* Capturar referência ao próprio <script> ANTES de qualquer async */
  var __schemaProductScript = document.currentScript;
  
  (function initSchemaProduct() {
    initSchemaProduct._retries = (initSchemaProduct._retries || 0) + 1;
  
    var app = document.querySelector('#produto-react-app');
    if (!app || !app.querySelector('.informacoes-compra-produto')) {
      if (initSchemaProduct._retries < 30) {
        setTimeout(initSchemaProduct, 500);
      }
      return;
    }
  
    /* Evitar duplicação */
    if (document.getElementById('mm-product-schema')) return;
  
    /* ---- Extrair dados do DOM e dataLayer ---- */
  
    /* Nome do produto (H1) */
    var h1 = app.querySelector('h1');
    var productName = h1 ? h1.textContent.trim() : '';
    if (!productName) return;
  
    /* URL canônica */
    var canonical = document.querySelector('link[rel="canonical"]');
    var productUrl = canonical ? canonical.href : location.href.split('?')[0];
  
    /* Marca (input hidden ou dataLayer) */
    var marcaInput = document.querySelector('#prod-marca');
    var brand = marcaInput ? marcaInput.value.trim() : '';
    if (!brand && window.dataLayer && window.dataLayer[0]) {
      brand = window.dataLayer[0].brand || '';
    }
  
    /* Preços */
    var formPagLink = app.querySelector('.form-pag-link');
    var valorPrincipal = document.querySelector('#prod-valor-principal');
    var valorCartao = document.querySelector('#prod-valor');
  
    var pricePix = 0;
    var priceCard = 0;
  
    if (formPagLink) {
      pricePix = parseFloat(formPagLink.getAttribute('data-valor-pix')) || 0;
      priceCard = parseFloat(formPagLink.getAttribute('data-valor')) || 0;
    }
    if (!priceCard && valorCartao) {
      priceCard = parseFloat(valorCartao.value) || 0;
    }
    if (!pricePix && valorPrincipal) {
      pricePix = parseFloat(valorPrincipal.value) || 0;
    }
  
    /* Usar o menor preço (PIX) como principal, cartão como fallback */
    var mainPrice = pricePix > 0 ? pricePix : priceCard;
    if (mainPrice <= 0) return;
  
    /* SKU (dataLayer) */
    var sku = '';
    if (window.dataLayer && window.dataLayer[0]) {
      sku = window.dataLayer[0].sku || '';
    }
  
    /* Categorias (dataLayer) */
    var category = '';
    var category2 = '';
    if (window.dataLayer && window.dataLayer[0]) {
      category = window.dataLayer[0].category || '';
      category2 = window.dataLayer[0].category2 || '';
    }
  
    /* Disponibilidade */
    var deposito = document.querySelector('#prod-deposito');
    var inStock = deposito ? deposito.value === '1' : true;
  
    /* Imagens da galeria */
    var images = [];
    var galleryImgs = app.querySelectorAll('.gallery-main img, #block-imagem img');
    for (var i = 0; i < galleryImgs.length; i++) {
      var src = galleryImgs[i].getAttribute('src') || galleryImgs[i].getAttribute('data-src') || '';
      if (src && src.indexOf('http') === 0 && images.indexOf(src) === -1) {
        images.push(src);
      }
    }
    if (images.length === 0) {
      var ogImg = document.querySelector('meta[property="og:image"]');
      if (ogImg && ogImg.content) images.push(ogImg.content);
    }
  
    /* Descrição (meta description ou primeiro parágrafo) */
    var metaDesc = document.querySelector('meta[name="description"]');
    var description = metaDesc ? metaDesc.content.trim() : '';
    if (!description) {
      var descEl = document.querySelector('.descricao-produto .accordion-content p');
      if (descEl) description = descEl.textContent.trim().substring(0, 500);
    }
  
    /* Avaliações (scripts inline com Zord.avaliacoes) */
    var totalReviews = 0;
    var nota = 0;
    var scripts = document.querySelectorAll('script:not([src])');
    for (var s = 0; s < scripts.length; s++) {
      var txt = scripts[s].textContent;
      if (txt.indexOf('Zord.avaliacoes') === -1 && txt.indexOf('produtoAvaliacoes') === -1) continue;
      var matchTotal = txt.match(/produtoAvaliacoes\s*:\s*(\d+)/);
      var matchNota = txt.match(/\bnota\s*:\s*(?:Number\()?([\d.]+)/);
      if (matchTotal) totalReviews = parseInt(matchTotal[1], 10);
      if (matchNota) nota = parseFloat(matchNota[1]);
    }
  
    /* ---- Montar o objeto Schema ---- */
  
    var schema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': productName,
      'url': productUrl,
      'image': images,
      'description': description,
      'sku': sku,
      'brand': {
        '@type': 'Brand',
        'name': brand || 'Madeira Mania'
      },
      'offers': {
        '@type': 'Offer',
        'url': productUrl,
        'price': mainPrice.toFixed(2),
        'priceCurrency': 'BRL',
        'availability': inStock
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
        'itemCondition': 'https://schema.org/NewCondition',
        'seller': {
          '@type': 'Organization',
          'name': 'Madeira Mania'
        },
        'hasMerchantReturnPolicy': {
          '@type': 'MerchantReturnPolicy',
          'applicableCountry': 'BR',
          'returnPolicyCategory': 'https://schema.org/MerchantReturnFiniteReturnWindow',
          'merchantReturnDays': 7,
          'returnMethod': 'https://schema.org/ReturnByMail'
        },
        'shippingDetails': {
          '@type': 'OfferShippingDetails',
          'shippingDestination': {
            '@type': 'DefinedRegion',
            'addressCountry': 'BR'
          },
          'deliveryTime': {
            '@type': 'ShippingDeliveryTime',
            'handlingTime': {
              '@type': 'QuantitativeValue',
              'minValue': 1,
              'maxValue': 3,
              'unitCode': 'DAY'
            },
            'transitTime': {
              '@type': 'QuantitativeValue',
              'minValue': 5,
              'maxValue': 20,
              'unitCode': 'DAY'
            }
          }
        }
      }
    };
  
    /* Parcelas (priceSpecification) */
    if (priceCard > 0) {
      schema.offers.priceSpecification = [
        {
          '@type': 'UnitPriceSpecification',
          'price': pricePix > 0 ? pricePix.toFixed(2) : mainPrice.toFixed(2),
          'priceCurrency': 'BRL',
          'name': 'PIX'
        },
        {
          '@type': 'UnitPriceSpecification',
          'price': (priceCard / 12).toFixed(2),
          'priceCurrency': 'BRL',
          'name': '12x sem juros',
          'referenceQuantity': {
            '@type': 'QuantitativeValue',
            'value': 12,
            'unitCode': 'MON'
          }
        }
      ];
    }
  
    /* Avaliações — só incluir se existem reviews reais */
    if (totalReviews > 0 && nota > 0) {
      schema.aggregateRating = {
        '@type': 'AggregateRating',
        'ratingValue': nota.toFixed(1),
        'bestRating': '5',
        'worstRating': '1',
        'reviewCount': String(totalReviews)
      };
    }
  
    /* Categoria */
    if (category) {
      schema.category = category + (category2 ? ' > ' + category2 : '');
    }
  
    /* ---- Injetar no <head> ---- */
  
    var scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.id = 'mm-product-schema';
    scriptTag.textContent = JSON.stringify(schema);
    document.head.appendChild(scriptTag);
  
    /* Remover o <script> wrapper do DOM do React para evitar crash em re-renders.
       Magazord injeta o Conteudo Adicional dentro da árvore React,
       e quando React re-renderiza (ex: cálculo de frete), ele encontra
       este nó estrangeiro e crasha com insertBefore error. */
    if (__schemaProductScript && __schemaProductScript.parentNode) {
      __schemaProductScript.parentNode.removeChild(__schemaProductScript);
    }
  })();

  /* === schema-breadcrumb.js === */
  /* =============================================
     SCHEMA BREADCRUMBLIST JSON-LD
     Madeira Mania — TODAS as PDPs
  
     Extrai breadcrumb do DOM (navegação de categorias)
     e injeta BreadcrumbList schema para:
     - Breadcrumbs visuais no Google (desktop)
     - Melhor crawling/indexing
     - Voice search
  
     Nota: Google removeu breadcrumbs do mobile (Jan 2025)
     mas schema ainda ajuda em desktop e crawling
     ============================================= */
  
  /* Capturar referência ao próprio <script> ANTES de qualquer async */
  var __breadcrumbScript = document.currentScript;
  
  (function initBreadcrumbSchema() {
    initBreadcrumbSchema._retries = (initBreadcrumbSchema._retries || 0) + 1;
  
    /* Esperar breadcrumb ou h1 existirem */
    var app = document.querySelector('#produto-react-app');
    var h1 = app ? app.querySelector('h1') : null;
    if (!h1) {
      if (initBreadcrumbSchema._retries < 30) {
        setTimeout(initBreadcrumbSchema, 500);
      }
      return;
    }
  
    /* Evitar duplicação */
    if (document.getElementById('mm-breadcrumb-schema')) return;
  
    var items = [];
    var position = 1;
  
    /* Item 1: Home (sempre) */
    items.push({
      '@type': 'ListItem',
      'position': position++,
      'name': 'Home',
      'item': 'https://www.madeiramania.com.br'
    });
  
    /* Tentar extrair breadcrumbs do DOM */
    var breadcrumbLinks = document.querySelectorAll(
      '.breadcrumb a, nav[aria-label*="breadcrumb" i] a, .migalha a, .breadcrumb-item a'
    );
  
    if (breadcrumbLinks.length > 0) {
      for (var i = 0; i < breadcrumbLinks.length; i++) {
        var link = breadcrumbLinks[i];
        var name = link.textContent.trim();
        var href = link.href;
  
        /* Pular "Home" duplicado e links vazios */
        if (!name || name.toLowerCase() === 'home' || name.toLowerCase() === 'início') continue;
        if (!href || href === '#') continue;
  
        items.push({
          '@type': 'ListItem',
          'position': position++,
          'name': name,
          'item': href
        });
      }
    } else {
      /* Fallback: extrair categorias do dataLayer */
      if (window.dataLayer && window.dataLayer[0]) {
        var cat1 = window.dataLayer[0].category || '';
        var cat2 = window.dataLayer[0].category2 || '';
  
        if (cat1) {
          items.push({
            '@type': 'ListItem',
            'position': position++,
            'name': cat1,
            'item': 'https://www.madeiramania.com.br/' + cat1.toLowerCase().replace(/\s+/g, '-').replace(/[àáâã]/g, 'a').replace(/[éêë]/g, 'e').replace(/[íî]/g, 'i').replace(/[óôõ]/g, 'o').replace(/[úû]/g, 'u').replace(/ç/g, 'c')
          });
        }
        if (cat2 && cat2 !== cat1) {
          items.push({
            '@type': 'ListItem',
            'position': position++,
            'name': cat2,
            'item': 'https://www.madeiramania.com.br/' + cat2.toLowerCase().replace(/\s+/g, '-').replace(/[àáâã]/g, 'a').replace(/[éêë]/g, 'e').replace(/[íî]/g, 'i').replace(/[óôõ]/g, 'o').replace(/[úû]/g, 'u').replace(/ç/g, 'c')
          });
        }
      }
    }
  
    /* Último item: produto atual (sem URL, conforme spec) */
    items.push({
      '@type': 'ListItem',
      'position': position,
      'name': h1.textContent.trim()
    });
  
    /* Mínimo 2 itens para ser válido */
    if (items.length < 2) return;
  
    var schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items
    };
  
    /* Injetar no <head> */
    var scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.id = 'mm-breadcrumb-schema';
    scriptTag.textContent = JSON.stringify(schema);
    document.head.appendChild(scriptTag);
  
    /* Remover o <script> wrapper do DOM do React */
    if (__breadcrumbScript && __breadcrumbScript.parentNode) {
      __breadcrumbScript.parentNode.removeChild(__breadcrumbScript);
    }
  })();

  /* === faq-universal.js === */
  /* =============================================
     FAQ UNIVERSAL + Schema FAQPage - Madeira Mania
     Injeta FAQ accordion visível em TODAS as PDPs
     + schema FAQPage JSON-LD para SEO/GEO
  
     Perguntas genéricas sobre entrega, montagem,
     pagamento, trocas — não dependem do produto
  
     Técnicas GEO aplicadas (Princeton):
     - Estatísticas (+22% citação IA)
     - Tom autoritativo (+25%)
     - Citações de fonte (+30-40%)
     - Respostas diretas nos primeiros 40-60 palavras
     ============================================= */
  
  /* Capturar referência ao próprio <script> ANTES de qualquer async */
  var __faqScript = document.currentScript;
  
  (function initFaqUniversal() {
    initFaqUniversal._retries = (initFaqUniversal._retries || 0) + 1;
  
    /* Esperar seção de descrição existir */
    var descricao = document.querySelector('.descricao-produto');
    if (!descricao) {
      if (initFaqUniversal._retries < 30) {
        setTimeout(initFaqUniversal, 500);
      }
      return;
    }
  
    /* Evitar duplicação */
    if (document.getElementById('mm-faq-section')) return;
  
    /* ---- Perguntas e Respostas ---- */
  
    var faqs = [
      {
        q: 'Como funciona a entrega de móveis?',
        a: 'Enviamos para todo o Brasil por transportadora especializada em móveis. O prazo varia de 5 a 20 dias úteis dependendo da sua região. Você pode calcular o frete e prazo exato informando seu CEP na página do produto, acima do botão de compra.'
      },
      {
        q: 'O móvel vem montado ou precisa montar?',
        a: 'A maioria dos móveis é enviada desmontada para garantir segurança no transporte. Cada produto inclui manual de montagem com instruções passo a passo e todas as ferragens necessárias. Produtos de madeira maciça geralmente exigem apenas encaixe simples de pés ou portas.'
      },
      {
        q: 'Vocês entregam em apartamento e zona rural?',
        a: 'Sim, entregamos em apartamentos e áreas urbanas em todo o Brasil. Para zonas rurais, a disponibilidade depende da região — consulte informando seu CEP. A entrega é realizada até a portaria ou térreo do edifício.'
      },
      {
        q: 'E se o produto chegar com defeito?',
        a: 'Você tem 7 dias para solicitar troca ou devolução a partir do recebimento, conforme o Código de Defesa do Consumidor (Art. 49). Basta entrar em contato pelo nosso WhatsApp com fotos do defeito. Todos os produtos possuem garantia de 12 meses contra defeitos de fabricação.'
      },
      {
        q: 'Quais as formas de pagamento?',
        a: 'Aceitamos PIX com 7% de desconto (processado na hora), cartão de crédito em até 12x sem juros (Visa, Mastercard, Elo, American Express) e boleto bancário. O pagamento via PIX agiliza o despacho do seu pedido.'
      },
      {
        q: 'O preço de vocês é realmente menor que nos marketplaces?',
        a: 'Sim. Como vendemos direto ao consumidor, sem comissões de marketplace, nossos preços são consistentemente 10% a 25% menores que MadeiraMadeira, Mercado Livre e outros. Compare o mesmo produto pelo código SKU do fabricante e confira a diferença.'
      },
      {
        q: 'Como funciona a garantia?',
        a: 'Todos os produtos possuem garantia de 12 meses contra defeitos de fabricação, além do direito de arrependimento de 7 dias garantido pelo CDC. Móveis de madeira maciça, com os cuidados adequados, possuem durabilidade superior a 30 anos.'
      }
    ];
  
    /* ---- Injetar HTML do FAQ accordion ---- */
  
    /* Injetar CSS para focus-visible e reduced-motion */
    if (!document.getElementById('mm-faq-styles')) {
      var faqStyle = document.createElement('style');
      faqStyle.id = 'mm-faq-styles';
      faqStyle.textContent = [
        '#mm-faq-section button:focus-visible { outline: 2px solid #4b664a; outline-offset: 2px; border-radius: 4px; }',
        '#mm-faq-section button:active { opacity: 0.7; }',
        '@media (prefers-reduced-motion: reduce) { #mm-faq-section * { transition: none !important; } }'
      ].join('\n');
      document.head.appendChild(faqStyle);
    }
  
    var section = document.createElement('div');
    section.id = 'mm-faq-section';
    section.style.cssText = [
      'margin: 24px 0',
      'padding: 0 8px'
    ].join(';');
  
    var title = document.createElement('h2');
    title.style.cssText = [
      'font-size: 18px',
      'font-weight: 700',
      'color: #1a1a1a',
      'margin-bottom: 16px',
      'padding-bottom: 8px',
      'border-bottom: 2px solid #4b664a'
    ].join(';');
    title.textContent = 'Perguntas Frequentes';
    section.appendChild(title);
  
    var list = document.createElement('div');
    list.style.cssText = [
      'display: flex',
      'flex-direction: column',
      'gap: 0'
    ].join(';');
  
    faqs.forEach(function(faq, idx) {
      var item = document.createElement('div');
      item.style.cssText = 'border-bottom: 1px solid #e8ece8;';
  
      var question = document.createElement('button');
      question.setAttribute('aria-expanded', 'false');
      question.setAttribute('aria-controls', 'mm-faq-answer-' + idx);
      question.style.cssText = [
        'display: flex',
        'justify-content: space-between',
        'align-items: center',
        'width: 100%',
        'padding: 16px 0',
        'background: none',
        'border: none',
        'cursor: pointer',
        'text-align: left',
        'font-size: 15px',
        'font-weight: 600',
        'color: #1a1a1a',
        'line-height: 1.4',
        'font-family: inherit',
        '-webkit-tap-highlight-color: transparent'
      ].join(';');
  
      var qText = document.createElement('span');
      qText.textContent = faq.q;
      qText.style.cssText = 'flex: 1; padding-right: 12px;';
  
      var arrow = document.createElement('span');
      arrow.textContent = '+';
      arrow.style.cssText = [
        'font-size: 20px',
        'font-weight: 300',
        'color: #4b664a',
        'flex-shrink: 0',
        'transition: transform 0.2s ease',
        'width: 24px',
        'text-align: center'
      ].join(';');
  
      question.appendChild(qText);
      question.appendChild(arrow);
  
      var answer = document.createElement('div');
      answer.id = 'mm-faq-answer-' + idx;
      answer.setAttribute('role', 'region');
      answer.setAttribute('aria-labelledby', 'mm-faq-q-' + idx);
      question.id = 'mm-faq-q-' + idx;
      answer.style.cssText = [
        'max-height: 0',
        'overflow: hidden',
        'transition: max-height 0.3s ease, padding 0.3s ease',
        'font-size: 14px',
        'line-height: 1.6',
        'color: #444'
      ].join(';');
  
      var answerInner = document.createElement('div');
      answerInner.style.cssText = 'padding: 0 0 14px 0;';
      answerInner.textContent = faq.a;
      answer.appendChild(answerInner);
  
      /* Toggle com aria-expanded + active feedback */
      question.addEventListener('click', function() {
        var isOpen = question.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
          answer.style.maxHeight = '0px';
          arrow.textContent = '+';
          question.setAttribute('aria-expanded', 'false');
        } else {
          answer.style.maxHeight = answer.scrollHeight + 'px';
          arrow.textContent = '−';
          question.setAttribute('aria-expanded', 'true');
        }
      });
  
      /* Press feedback — sutil opacity change */
      question.addEventListener('touchstart', function() {
        question.style.opacity = '0.7';
      }, { passive: true });
      question.addEventListener('touchend', function() {
        question.style.opacity = '1';
      }, { passive: true });
  
      item.appendChild(question);
      item.appendChild(answer);
      list.appendChild(item);
    });
  
    section.appendChild(list);
  
    /* ---- Posicionar: após .produtos-relacionados, antes de avaliações ---- */
    var relacionados = document.querySelector('.produtos-relacionados');
    var avaliacoes = document.querySelector('.container-avaliacoes');
  
    if (relacionados && relacionados.nextSibling) {
      relacionados.parentNode.insertBefore(section, relacionados.nextSibling);
    } else if (avaliacoes) {
      avaliacoes.parentNode.insertBefore(section, avaliacoes);
    } else {
      descricao.parentNode.appendChild(section);
    }
  
    /* ---- Injetar Schema FAQPage JSON-LD ---- */
  
    if (!document.getElementById('mm-faq-schema')) {
      var faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(function(faq) {
          return {
            '@type': 'Question',
            'name': faq.q,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.a
            }
          };
        })
      };
  
      var scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.id = 'mm-faq-schema';
      scriptTag.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(scriptTag);
    }
  
    /* Remover o <script> wrapper do DOM do React */
    if (__faqScript && __faqScript.parentNode) {
      __faqScript.parentNode.removeChild(__faqScript);
    }
  })();

  /* === og-tags-product.js === */
  /* =============================================
     OPEN GRAPH META TAGS - Madeira Mania (PDPs)
  
     IMPORTANTE: Crawlers sociais (WhatsApp, Facebook,
     LinkedIn, Telegram) NÃO executam JavaScript.
     Tags OG injetadas via JS NÃO funcionam para
     previews de compartilhamento.
  
     ESTE SCRIPT SERVE COMO FALLBACK para motores
     que executam JS (Google, Bing) e como documentação
     de quais tags são necessárias.
  
     SOLUÇÃO IDEAL: Configurar OG tags server-side
     no painel Magazord.
  
     Se Magazord permite HTML puro no Conteúdo Adicional
     (Cabeçalho Superior), usar og-tags-static.html
     com template server-side em vez deste script.
     ============================================= */
  
  (function injectOgTags() {
    injectOgTags._retries = (injectOgTags._retries || 0) + 1;
  
    var app = document.querySelector('#produto-react-app');
    if (!app || !app.querySelector('h1')) {
      if (injectOgTags._retries < 30) {
        setTimeout(injectOgTags, 500);
      }
      return;
    }
  
    /* Evitar duplicação */
    if (document.querySelector('meta[property="og:title"]')) return;
  
    /* Extrair dados */
    var h1 = app.querySelector('h1');
    var title = h1 ? h1.textContent.trim() : document.title;
  
    var metaDesc = document.querySelector('meta[name="description"]');
    var description = metaDesc ? metaDesc.content.trim() : '';
    if (!description) {
      var descEl = document.querySelector('.descricao-produto .accordion-content p');
      if (descEl) description = descEl.textContent.trim().substring(0, 200);
    }
    if (!description) {
      description = title + ' - Compre online na Madeira Mania com até 12x sem juros ou 7% de desconto no PIX.';
    }
  
    var canonical = document.querySelector('link[rel="canonical"]');
    var url = canonical ? canonical.href : location.href.split('?')[0];
  
    /* Imagem — pegar a primeira da galeria */
    var image = '';
    var galleryImg = app.querySelector('.gallery-main img, #block-imagem img');
    if (galleryImg) {
      image = galleryImg.getAttribute('src') || galleryImg.getAttribute('data-src') || '';
    }
    if (!image) {
      var ogExisting = document.querySelector('meta[property="og:image"]');
      if (ogExisting) image = ogExisting.content;
    }
  
    /* Preço para descrição */
    var formPagLink = app.querySelector('.form-pag-link');
    var pricePix = formPagLink ? parseFloat(formPagLink.getAttribute('data-valor-pix')) || 0 : 0;
    if (pricePix > 0) {
      var priceStr = 'R$ ' + pricePix.toFixed(2).replace('.', ',');
      if (description.indexOf('R$') === -1) {
        description = description.replace(/\.$/, '') + ' | A partir de ' + priceStr + ' no PIX.';
      }
    }
  
    /* Truncar description em 200 chars */
    if (description.length > 200) {
      description = description.substring(0, 197) + '...';
    }
  
    /* Injetar meta tags */
    var tags = [
      { property: 'og:type', content: 'product' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:site_name', content: 'Madeira Mania' },
      { property: 'og:locale', content: 'pt_BR' }
    ];
  
    if (image) {
      tags.push({ property: 'og:image', content: image });
      tags.push({ property: 'og:image:width', content: '600' });
      tags.push({ property: 'og:image:height', content: '600' });
    }
  
    /* Twitter Card */
    tags.push({ name: 'twitter:card', content: 'summary_large_image' });
    tags.push({ name: 'twitter:title', content: title });
    tags.push({ name: 'twitter:description', content: description });
    if (image) {
      tags.push({ name: 'twitter:image', content: image });
    }
  
    tags.forEach(function(tag) {
      var meta = document.createElement('meta');
      if (tag.property) meta.setAttribute('property', tag.property);
      if (tag.name) meta.setAttribute('name', tag.name);
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    });
  })();

  /* === variacoes.js === */
  (function($) {
      'use strict';
  
      // ============================================
      // PAGE GUARD — script é específico pra PDP (páginas de produto).
      // Checkout/cart/home/etc não precisam e rodar aqui causa
      // loops de "Aguardando dataProduct..." poluindo o console.
      // ============================================
      var _mmPath = location.pathname;
      var _isProductPage = /\/produto\//i.test(_mmPath) || /\/p\//i.test(_mmPath);
      if (!_isProductPage) return;
  
      // ============================================
      // PROTEÇÃO CONTRA MÚLTIPLAS EXECUÇÕES
      // ============================================
      const VERSAO = '3.0.0';
  
      if (window.innerWidth >= 1500) {
        $(document).ready(function() {
            function ajustarImagensQuadradas() {
                $('.gallery-main .swiper-slide img').each(function() {
                    var img = this;
                    var $slide = $(this).closest('.swiper-slide');
                    var $swiper = $slide.closest('.swiper');
  
                    function verificar() {
                        var w = img.naturalWidth;
                        var h = img.naturalHeight;
                        if (w && h && w === h) {
                            $swiper.css({
                                'max-width': w + 'px',
                                'overflow': 'hidden'
                            });
                        }
                    }
  
                    if (img.complete) {
                        verificar();
                    } else {
                        img.addEventListener('load', verificar);
                    }
                });
            }
  
            ajustarImagensQuadradas();
        });
    }
  
      // Se já existe uma instância, destruir a anterior e usar esta
      if (window._variacoesMagazordCarregado) {
          console.log(`%c⚠️ Variações Magazord v${VERSAO} - Substituindo instância anterior`, 'color: #ff9800; font-weight: bold');
          // Limpar instância anterior
          if (window.GerenciadorVariacoesPillsMagazord) {
              // Remover elementos renderizados pela versão anterior
              $('.product-variations-pills-container').remove();
          }
      }
      window._variacoesMagazordCarregado = VERSAO;
      console.log(`%c🚀 Variações Magazord v${VERSAO} (dataProduct) - Inicializando...`, 'color: #2196f3; font-weight: bold');
  
      // ============================================
      // CONFIGURAÇÃO
      // ============================================
      const CONFIG = {
          formatoNome: {
              separador: ' - ',
              separadorTipoValor: ': ',
              exibirNomeCompleto: false,
              primeiraParte: 'nome_base'
          },
          labels: {
              'ALTURA': 'Altura',
              'LARGURA': 'Largura',
              'ILUMINACAO': 'Iluminação',
              'ILUMINAÇÃO': 'Iluminação',
              'PROFUNDIDADE': 'Profundidade',
              'COR': 'Cor',
              'ACABAMENTO': 'Acabamento',
              'TAMANHO': 'Tamanho',
              'PORTAS': 'Número de Portas',
              'ESPELHO': 'Espelho',
              'GAVETAS': 'Gavetas',
              'MODELO': 'Modelo',
              'MATERIAL': 'Material',
              'LUGARES': 'Lugares',
              'FORMATO': 'Formato'
          },
          // Tipos de variação que devem exibir como SWATCH DE IMAGEM (não pill)
          variacoesComImagem: ['COR', 'ACABAMENTO'],
          ignorarPalavras: [],
          selectors: {
              areaProdutosSugeridos: '.sugestoes-cores',
              areaVariacoes: '.derivacoes-produto .area-derivacoes',
              containerProduto: '.info-produto, .box-info-produto, main',
              // Seletor do subtítulo a ser ocultado quando não há variações
              subtituloProduto: '.informacoes-compra-produto .text-secondary-700.text-xs'
          },
          retry: {
              maxTentativas: 10,
              intervaloMs: 500,
              usarMutationObserver: true
          },
          debug: true,
          performance: {
              useRequestAnimationFrame: true,
              debounceDelay: 150
          }
      };
  
      // ============================================
      // GERENCIADOR DE VARIAÇÕES
      // ============================================
      class GerenciadorVariacoesPills {
          constructor() {
              this.variacoes = {};
              this.produtoAtualId = null;
              this.produtos = [];
              this.tentativasDeCarregamento = 0;
              this.observer = null;
              this.inicializado = false;
          }
  
          init() {
              this.log('🎯 Gerenciador de Variações Magazord v3 (dataProduct)', 'info');
              this.log('🎨 Swatches de imagem para cores + Pills para outras variações', 'info');
              this.esperarDOMPronto();
          }
  
          esperarDOMPronto() {
              if (typeof jQuery === 'undefined') {
                  setTimeout(() => this.esperarDOMPronto(), 100);
                  return;
              }
              $(document).ready(() => {
                  this.log('✅ DOM pronto! Aguardando dataProduct...', 'success');
                  this.esperarDataProduct();
              });
          }
  
          esperarDataProduct() {
              if (typeof dataProduct !== 'undefined' && dataProduct.listaProdutosSugeridos) {
                  this.log('✅ dataProduct encontrado!', 'success');
                  this.tentarCarregar();
              } else {
                  this.log('⏳ Aguardando dataProduct...', 'info');
                  setTimeout(() => this.esperarDataProduct(), 300);
              }
          }
  
          tentarCarregar() {
              this.tentativasDeCarregamento++;
              this.log(`\n🔄 Tentativa ${this.tentativasDeCarregamento}/${CONFIG.retry.maxTentativas}`, 'info');
  
              const sucesso = this.carregarProdutos();
  
              if (sucesso) {
                  this.processarVariacoes();
                  this.renderizarVariacoes();
                  this.bindEventos();
                  this.inicializado = true;
                  this.log('\n🎉 Inicialização concluída com sucesso!', 'success');
                  if (CONFIG.retry.usarMutationObserver) this.observarMudancasDOM();
              } else {
                  if (this.tentativasDeCarregamento < CONFIG.retry.maxTentativas) {
                      setTimeout(() => this.tentarCarregar(), CONFIG.retry.intervaloMs);
                  } else {
                      this.log('❌ Número máximo de tentativas atingido.', 'error');
                  }
              }
          }
  
          observarMudancasDOM() {
              // MutationObserver não é mais necessário pois os dados vêm diretamente do dataProduct
              // Mantido como placeholder caso seja necessário no futuro
              this.log('ℹ️ MutationObserver desativado - dados carregados via dataProduct', 'info');
          }
  
          log(mensagem, tipo = 'log', dados = null) {
              if (!CONFIG.debug) return;
              const estilos = {
                  'info': 'color: #2196f3; font-weight: bold',
                  'success': 'color: #4caf50; font-weight: bold',
                  'warning': 'color: #ff9800; font-weight: bold',
                  'error': 'color: #f44336; font-weight: bold',
                  'log': 'color: #666'
              };
              console.log(`%c${mensagem}`, estilos[tipo] || estilos.log);
              if (dados) console.log(dados);
          }
  
          carregarProdutos() {
              this.produtos = [];
  
              // Verificar se dataProduct existe e tem os dados necessários
              if (typeof dataProduct === 'undefined' || !dataProduct.listaProdutosSugeridos) {
                  this.log('❌ dataProduct ou listaProdutosSugeridos não encontrado', 'error');
                  return false;
              }
  
              const listaProdutos = dataProduct.listaProdutosSugeridos;
              const produtoAtual = dataProduct.produto;
              const hostImagem = dataProduct.hostImagem || '';
  
              this.log(`📦 Encontrados ${listaProdutos.length} produtos sugeridos + produto atual`, 'info');
  
              // Adicionar o produto atual primeiro (marcado como selecionado)
              if (produtoAtual && produtoAtual.complemento) {
                  const imagemUrl = produtoAtual.midia_path && produtoAtual.midia_arquivo_nome
                      ? `${hostImagem}/${produtoAtual.midia_path}${produtoAtual.midia_arquivo_nome}`
                      : '';
  
                  const produtoAtualObj = {
                      id: produtoAtual.derivacao_id || produtoAtual.produto_id,
                      nomeCompleto: produtoAtual.complemento.trim(),
                      estoque: produtoAtual.qtde_estoque,
                      url: produtoAtual.link ? `/${produtoAtual.link}` : '',
                      imagem: imagemUrl,
                      imagemData: imagemUrl,
                      elemento: null,
                      variacoes: {},
                      nomeBase: '',
                      nomeExibicao: '',
                      isAtual: true
                  };
  
                  this.produtoAtualId = produtoAtualObj.id;
                  this.extrairVariacoesDoNome(produtoAtualObj);
                  this.produtos.push(produtoAtualObj);
                  this.log(`   ✓ Produto atual: "${produtoAtualObj.nomeCompleto}"`, 'success');
              }
  
              // Adicionar produtos sugeridos
              listaProdutos.forEach((item, index) => {
                  const nomeCompleto = item.complemento || item.nome || '';
  
                  if (!nomeCompleto) return;
  
                  // Não adicionar se for o mesmo produto atual
                  const itemId = item.derivacao_id || item.produto_id;
                  if (itemId === this.produtoAtualId) {
                      this.log(`   ⏭️ Ignorando duplicata: "${nomeCompleto}"`, 'info');
                      return;
                  }
  
                  const imagemUrl = item.midia_path && item.midia_arquivo_nome
                      ? `${hostImagem}/${item.midia_path}${item.midia_arquivo_nome}`
                      : '';
  
                  const produto = {
                      id: itemId || index,
                      nomeCompleto: nomeCompleto.trim(),
                      estoque: item.qtde_estoque,
                      url: item.link ? `/${item.link}` : '',
                      imagem: imagemUrl,
                      imagemData: imagemUrl,
                      elemento: null,
                      variacoes: {},
                      nomeBase: '',
                      nomeExibicao: '',
                      isAtual: false
                  };
  
                  this.extrairVariacoesDoNome(produto);
                  this.produtos.push(produto);
                  this.log(`   ✓ Sugerido: "${produto.nomeCompleto}"`, 'log');
              });
  
              if (this.produtos.length === 0) return false;
              this.log('✅ Produtos carregados e processados:', 'success', this.produtos);
              return true;
          }
  
          normalizarSeparadores(texto) {
              const hifens = ['–', '—', '−', '‐', '‑', '⁃'];
              let textoNormalizado = texto;
              hifens.forEach(hifen => {
                  const regex = new RegExp(`\\s${hifen}\\s`, 'g');
                  textoNormalizado = textoNormalizado.replace(regex, ' - ');
              });
              return textoNormalizado;
          }
  
          extrairVariacoesDoNome(produto) {
              const nomeNormalizado = this.normalizarSeparadores(produto.nomeCompleto);
              const partes = nomeNormalizado.split(CONFIG.formatoNome.separador);
              this.log(`\n📝 Processando: "${produto.nomeCompleto}"`, 'log');
  
              if (CONFIG.formatoNome.primeiraParte === 'nome_base') {
                  produto.nomeBase = partes[0].trim();
                  partes.shift();
              }
  
              partes.forEach((parte) => {
                  const parteProcessada = parte.trim();
                  if (!parteProcessada) return;
  
                  if (parteProcessada.includes(CONFIG.formatoNome.separadorTipoValor)) {
                      const [tipo, ...restoValor] = parteProcessada.split(CONFIG.formatoNome.separadorTipoValor);
                      const valor = restoValor.join(CONFIG.formatoNome.separadorTipoValor).trim();
                      const tipoNormalizado = this.normalizarTipo(tipo.trim());
  
                      if (CONFIG.ignorarPalavras.includes(tipoNormalizado)) return;
  
                      produto.variacoes[tipoNormalizado] = valor;
                      this.log(`   ✓ ${tipoNormalizado}: ${valor}`, 'success');
                  }
              });
  
              produto.nomeExibicao = CONFIG.formatoNome.exibirNomeCompleto ?
                                     produto.nomeCompleto :
                                     (produto.nomeBase || produto.nomeCompleto);
  
              if (Object.keys(produto.variacoes).length === 0) {
                  produto.variacoes['MODELO'] = produto.nomeCompleto;
                  produto.nomeExibicao = produto.nomeCompleto;
              }
          }
  
          normalizarTipo(tipo) {
              return tipo.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
          }
  
          processarVariacoes() {
              this.log('\n🔄 Processando variações...', 'info');
              const tiposDeVariacao = new Set();
              this.produtos.forEach(produto => {
                  Object.keys(produto.variacoes).forEach(tipo => tiposDeVariacao.add(tipo));
              });
  
              tiposDeVariacao.forEach(tipo => {
                  const valoresPossiveis = new Set();
                  const produtosPorValor = {};
  
                  this.produtos.forEach(produto => {
                      const valor = produto.variacoes[tipo];
                      if (valor) {
                          valoresPossiveis.add(valor);
                          if (!produtosPorValor[valor]) produtosPorValor[valor] = [];
                          produtosPorValor[valor].push(produto);
                      }
                  });
  
                  const valoresArray = Array.from(valoresPossiveis).sort();
  
                  this.variacoes[tipo] = {
                      label: CONFIG.labels[tipo] || tipo,
                      valores: valoresArray,
                      produtosPorValor: produtosPorValor,
                      usarImagem: CONFIG.variacoesComImagem.includes(tipo)
                  };
  
                  // Log detalhado para debug
                  this.log(`   📊 ${tipo}: ${valoresArray.length} valor(es) único(s) → [${valoresArray.join(', ')}]`,
                      valoresArray.length > 1 ? 'success' : 'warning');
              });
  
              this.log('✅ Variações processadas:', 'success', this.variacoes);
          }
  
          renderizarVariacoes() {
              this.log('\n🎨 Renderizando variações...', 'info');
              let $areaVariacoes = $(CONFIG.selectors.areaVariacoes);
  
              if ($areaVariacoes.length === 0) {
                  this.criarAreaVariacoes();
                  $areaVariacoes = $(CONFIG.selectors.areaVariacoes);
              }
  
              if (Object.keys(this.variacoes).length === 0) return;
  
              const $container = $('<div>', { class: 'product-variations-pills-container' });
              let variacoesRenderizadas = 0;
  
              // Renderizar variações COM IMAGEM primeiro (cores)
              Object.keys(this.variacoes).forEach(tipo => {
                  const variacao = this.variacoes[tipo];
                  // Ignorar se tiver apenas 1 valor (não precisa de seletor)
                  if (variacao.valores.length <= 1) {
                      this.log(`⏭️ Ignorando "${tipo}" - apenas ${variacao.valores.length} valor(es)`, 'info');
                      return;
                  }
                  if (variacao.usarImagem) {
                      const $grupo = this.criarGrupoSwatches(tipo, variacao);
                      $container.append($grupo);
                      variacoesRenderizadas++;
                  }
              });
  
              // Depois renderizar variações SEM IMAGEM (pills)
              Object.keys(this.variacoes).forEach(tipo => {
                  const variacao = this.variacoes[tipo];
                  // Ignorar se tiver apenas 1 valor (não precisa de seletor)
                  if (variacao.valores.length <= 1) {
                      return; // Já foi logado acima
                  }
                  if (!variacao.usarImagem) {
                      const $grupo = this.criarGrupoPills(tipo, variacao);
                      $container.append($grupo);
                      variacoesRenderizadas++;
                  }
              });
  
              // Se não há variações para mostrar, ocultar a área inteira
              if (variacoesRenderizadas === 0) {
                  this.log('ℹ️ Nenhuma variação com múltiplas opções - ocultando área', 'info');
                  $areaVariacoes.closest('.derivacoes-produto').hide();
                  // Ocultar também o subtítulo se existir
                  $(CONFIG.selectors.subtituloProduto).hide();
                  return;
              }
  
              if (CONFIG.performance.useRequestAnimationFrame && window.requestAnimationFrame) {
                  requestAnimationFrame(() => {
                      $areaVariacoes.empty().append($container);
                      this.log(`✅ ${variacoesRenderizadas} variação(ões) renderizada(s)!`, 'success');
                      this.atualizarNomeProduto();
                  });
              } else {
                  $areaVariacoes.empty().append($container);
                  this.log(`✅ ${variacoesRenderizadas} variação(ões) renderizada(s)!`, 'success');
                  this.atualizarNomeProduto();
              }
          }
  
          criarAreaVariacoes() {
              const $areaSugeridos = $(CONFIG.selectors.areaProdutosSugeridos);
              if ($areaSugeridos.length > 0) {
                  $areaSugeridos.before('<div class="derivacoes-produto"><div class="area-derivacoes"></div></div>');
              } else {
                  $('body').prepend('<div class="derivacoes-produto"><div class="area-derivacoes"></div></div>');
              }
          }
  
          // ============================================
          // CRIAR GRUPO DE SWATCHES (IMAGENS DE COR)
          // ============================================
          criarGrupoSwatches(tipo, variacao) {
              const valorAtual = this.obterValorAtualParaTipo(tipo);
  
              const $grupo = $('<div>', {
                  class: 'variation-pill-group variation-pill-group--swatches',
                  'data-variacao-tipo': tipo,
                  'role': 'group',
                  'aria-labelledby': `pill-label-${tipo.toLowerCase()}`
              });
  
              // Label com valor selecionado ao lado (estilo MadeiraMadeira)
              const $label = $('<div>', {
                  class: 'variation-pill-label',
                  id: `pill-label-${tipo.toLowerCase()}`
              });
              
              $label.append($('<span>').text(variacao.label + ':'));
              $label.append($('<span>', { 
                  class: 'variation-pill-label-value',
                  'data-label-value': tipo
              }).text(valorAtual || ''));
  
              const $container = $('<div>', {
                  class: 'variation-swatches-container',
                  role: 'radiogroup',
                  'aria-labelledby': `pill-label-${tipo.toLowerCase()}`
              });
  
              variacao.valores.forEach((valor, index) => {
                  const produtos = variacao.produtosPorValor[valor];
                  const temEstoque = produtos.some(p => p.estoque === undefined || p.estoque > 0);
                  const isAtual = valor === valorAtual;
                  const pillId = `pill-${tipo.toLowerCase()}-${this.sanitizeId(valor)}`;
  
                  // Buscar imagem do melhor produto correspondente
                  // Prioriza produtos com as mesmas variações (gavetas, LED, etc.)
                  const melhorProduto = this.encontrarMelhorProdutoParaSwatch(tipo, valor, produtos);
                  let imagemUrl = null;
                  if (melhorProduto) {
                      imagemUrl = melhorProduto.imagemData || melhorProduto.imagem;
                  }
  
                  const $input = $('<input>', {
                      type: 'radio',
                      class: 'variation-pill-input',
                      id: pillId,
                      name: `variation-${tipo}`,
                      value: valor,
                      'data-variacao-tipo': tipo,
                      'data-produtos': JSON.stringify(produtos.map(p => ({ id: p.id, url: p.url }))),
                      checked: isAtual,
                      disabled: !temEstoque,
                      'aria-label': `${variacao.label}: ${valor}${!temEstoque ? ' (Indisponível)' : ''}`
                  });
  
                  // Wrapper que contém swatch + nome (para mobile)
                  // TOOLTIP NO WRAPPER para evitar problema do overflow:hidden
                  const $wrapper = $('<label>', {
                      class: 'variation-color-swatch-wrapper',
                      for: pillId,
                      'data-tooltip': valor // Tooltip no wrapper!
                  });
  
                  const $swatch = $('<div>', {
                      class: 'variation-color-swatch',
                      'data-valor': valor,
                      tabindex: isAtual ? 0 : -1
                  });
  
                  if (imagemUrl) {
                      $swatch.append($('<img>', {
                          src: imagemUrl,
                          alt: valor,
                          class: 'variation-color-swatch-image',
                          loading: 'lazy'
                      }));
                  } else {
                      // Fallback: cor sólida ou placeholder
                      $swatch.css({
                          'background-color': '#E5E7EB',
                          'display': 'flex',
                          'align-items': 'center',
                          'justify-content': 'center',
                          'font-size': '14px',
                          'color': '#6B7280'
                      }).text(valor.charAt(0).toUpperCase());
                  }
  
                  // Nome da cor (visível apenas no mobile)
                  const $colorName = $('<span>', {
                      class: 'variation-color-swatch-name',
                      text: valor,
                      title: valor // Title para mostrar texto completo no hover
                  });
  
                  $wrapper.append($swatch).append($colorName);
                  $container.append($input).append($wrapper);
              });
  
              $grupo.append($label).append($container);
              return $grupo;
          }
  
          // ============================================
          // CRIAR GRUPO DE PILLS (OUTRAS VARIAÇÕES)
          // ============================================
          criarGrupoPills(tipo, variacao) {
              const valorAtual = this.obterValorAtualParaTipo(tipo);
  
              const $grupo = $('<div>', {
                  class: 'variation-pill-group variation-pill-group--pills',
                  'data-variacao-tipo': tipo,
                  'role': 'group',
                  'aria-labelledby': `pill-label-${tipo.toLowerCase()}`
              });
  
              // Label com valor selecionado ao lado
              const $label = $('<div>', {
                  class: 'variation-pill-label',
                  id: `pill-label-${tipo.toLowerCase()}`
              });
              
              $label.append($('<span>').text(variacao.label + ':'));
              $label.append($('<span>', { 
                  class: 'variation-pill-label-value',
                  'data-label-value': tipo
              }).text(valorAtual || ''));
  
              const $container = $('<div>', {
                  class: 'variation-pills-container',
                  role: 'radiogroup',
                  'aria-labelledby': `pill-label-${tipo.toLowerCase()}`
              });
  
              variacao.valores.forEach((valor, index) => {
                  const produtos = variacao.produtosPorValor[valor];
                  const temEstoque = produtos.some(p => p.estoque === undefined || p.estoque > 0);
                  const isAtual = valor === valorAtual;
                  const pillId = `pill-${tipo.toLowerCase()}-${this.sanitizeId(valor)}`;
  
                  const $input = $('<input>', {
                      type: 'radio',
                      class: 'variation-pill-input',
                      id: pillId,
                      name: `variation-${tipo}`,
                      value: valor,
                      'data-variacao-tipo': tipo,
                      'data-produtos': JSON.stringify(produtos.map(p => ({ id: p.id, url: p.url }))),
                      checked: isAtual,
                      disabled: !temEstoque,
                      'aria-label': `${variacao.label}: ${valor}${!temEstoque ? ' (Indisponível)' : ''}`
                  });
  
                  let labelHTML = valor;
                  if (!temEstoque) {
                      labelHTML += ' <span class="variation-pill-badge">Indisponível</span>';
                  }
  
                  const $labelPill = $('<label>', {
                      class: 'variation-pill',
                      for: pillId,
                      html: labelHTML,
                      'data-valor': valor,
                      tabindex: isAtual ? 0 : -1
                  });
  
                  $container.append($input).append($labelPill);
              });
  
              $grupo.append($label).append($container);
              return $grupo;
          }
  
          sanitizeId(text) {
              return text.toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .replace(/[^a-z0-9]+/g, '-')
                        .replace(/^-+|-+$/g, '');
          }
  
          // ============================================
          // ENCONTRAR MELHOR PRODUTO PARA SWATCH DE COR
          // Prioriza produtos que tenham as mesmas variações (exceto cor)
          // ============================================
          encontrarMelhorProdutoParaSwatch(tipoVariacao, valorVariacao, produtosComEsseValor) {
              // Obter variações atuais do produto selecionado
              const produtoAtual = this.produtos.find(p => p.isAtual || p.id === this.produtoAtualId);
  
              if (!produtoAtual || produtosComEsseValor.length === 0) {
                  return produtosComEsseValor[0] || null;
              }
  
              // Se só tem um produto, retornar ele
              if (produtosComEsseValor.length === 1) {
                  return produtosComEsseValor[0];
              }
  
              const variacoesAtuais = produtoAtual.variacoes;
              let melhorProduto = null;
              let melhorScore = -1;
  
              produtosComEsseValor.forEach(produto => {
                  let score = 0;
  
                  // Contar quantas variações (exceto a do tipo atual) coincidem
                  Object.keys(variacoesAtuais).forEach(tipo => {
                      // Ignorar o tipo que estamos variando (ex: COR)
                      if (tipo === tipoVariacao) return;
  
                      // Se o produto tem a mesma variação, aumentar score
                      if (produto.variacoes[tipo] === variacoesAtuais[tipo]) {
                          score++;
                      }
                  });
  
                  // Priorizar produtos com imagem
                  if (produto.imagemData || produto.imagem) {
                      score += 0.5;
                  }
  
                  if (score > melhorScore) {
                      melhorScore = score;
                      melhorProduto = produto;
                  }
              });
  
              this.log(`   🎯 Melhor produto para ${tipoVariacao}="${valorVariacao}": score=${melhorScore}`, 'log');
  
              return melhorProduto || produtosComEsseValor[0];
          }
  
          obterValorAtualParaTipo(tipo) {
              const produtoAtual = this.produtos.find(p => p.isAtual || p.id === this.produtoAtualId);
              return produtoAtual ? produtoAtual.variacoes[tipo] : null;
          }
  
          atualizarNomeProduto() {
              const produtoAtual = this.produtos.find(p => p.isAtual || p.id === this.produtoAtualId);
              if (!produtoAtual) return;
  
              const seletoresNome = [
                  'h1.nome-produto',
                  '.product-name h1',
                  '.info-produto h1',
                  'h1[itemprop="name"]',
                  '.box-info-produto h1'
              ];
  
              seletoresNome.forEach(selector => {
                  const $elemento = $(selector);
                  if ($elemento.length > 0) {
                      $elemento.text(produtoAtual.nomeExibicao);
                  }
              });
          }
  
          bindEventos() {
              this.log('\n🔗 Vinculando eventos...', 'info');
  
              // Evento de mudança para pills E swatches
              $(document).on('change', '.variation-pill-input', (e) => {
                  this.aoMudarVariacao(e);
              });
  
              // Navegação por teclado
              $(document).on('keydown', '.variation-pills-container, .variation-swatches-container', (e) => {
                  this.handleKeyboardNavigation(e);
              });
  
              // Loading visual ao clicar
              $(document).on('click', '.variation-pill, .variation-color-swatch-wrapper', function() {
                  const $input = $(this).is('label') ? 
                      $('#' + $(this).attr('for')) : 
                      $(this).closest('label').prev('.variation-pill-input');
                      
                  if ($input.length && !$input.prop('disabled')) {
                      $(this).closest('.variation-pill-group').addClass('is-loading');
                  }
              });
  
              this.log('✅ Eventos vinculados', 'success');
          }
  
          handleKeyboardNavigation(e) {
              const $container = $(e.currentTarget);
              const $inputs = $container.find('.variation-pill-input:not(:disabled)');
              const $currentFocus = $(document.activeElement);
  
              if (!$currentFocus.hasClass('variation-pill-input')) return;
  
              const currentIndex = $inputs.index($currentFocus);
              let nextIndex = currentIndex;
  
              switch(e.key) {
                  case 'ArrowRight':
                  case 'ArrowDown':
                      e.preventDefault();
                      nextIndex = (currentIndex + 1) % $inputs.length;
                      break;
                  case 'ArrowLeft':
                  case 'ArrowUp':
                      e.preventDefault();
                      nextIndex = currentIndex - 1 < 0 ? $inputs.length - 1 : currentIndex - 1;
                      break;
                  case 'Home':
                      e.preventDefault();
                      nextIndex = 0;
                      break;
                  case 'End':
                      e.preventDefault();
                      nextIndex = $inputs.length - 1;
                      break;
                  default:
                      return;
              }
  
              const $nextInput = $inputs.eq(nextIndex);
              $nextInput.focus().prop('checked', true).trigger('change');
          }
  
          aoMudarVariacao(event) {
              const $input = $(event.target);
              const tipo = $input.data('variacao-tipo');
              const valorSelecionado = $input.val();
  
              this.log(`\n🔄 Variação selecionada: ${tipo} = ${valorSelecionado}`, 'info');
  
              // Atualizar o label com o valor selecionado
              $(`.variation-pill-label-value[data-label-value="${tipo}"]`).text(valorSelecionado);
  
              const selecaoAtual = {};
              $('.variation-pill-input:checked').each(function() {
                  const tipoInput = $(this).data('variacao-tipo');
                  const valorInput = $(this).val();
                  if (valorInput) {
                      selecaoAtual[tipoInput] = valorInput;
                  }
              });
  
              this.log('📋 Seleção atual:', 'info', selecaoAtual);
  
              const produtoCorrespondente = this.encontrarProdutoPorVariacoes(selecaoAtual);
  
              if (produtoCorrespondente) {
                  this.log('✅ Produto encontrado!', 'success', produtoCorrespondente);
                  this.navegarParaProduto(produtoCorrespondente);
              } else {
                  this.log('⚠️ Produto exato não encontrado, buscando melhor correspondência...', 'warning');
                  const melhorCorrespondencia = this.encontrarMelhorCorrespondencia(selecaoAtual);
                  if (melhorCorrespondencia) {
                      this.log('✅ Melhor correspondência encontrada!', 'success', melhorCorrespondencia);
                      this.navegarParaProduto(melhorCorrespondencia);
                  } else {
                      this.log('❌ Nenhum produto correspondente encontrado', 'error');
                      $('.variation-pill-group').removeClass('is-loading');
                  }
              }
          }
  
          encontrarProdutoPorVariacoes(selecao) {
              return this.produtos.find(produto => {
                  return Object.keys(selecao).every(tipo => {
                      return produto.variacoes[tipo] === selecao[tipo];
                  });
              });
          }
  
          encontrarMelhorCorrespondencia(selecao) {
              let melhorProduto = null;
              let melhorScore = 0;
  
              this.produtos.forEach(produto => {
                  let score = 0;
                  Object.keys(selecao).forEach(tipo => {
                      if (produto.variacoes[tipo] === selecao[tipo]) score++;
                  });
  
                  if (score > melhorScore) {
                      melhorScore = score;
                      melhorProduto = produto;
                  }
              });
  
              return melhorScore > 0 ? melhorProduto : null;
          }
  
          navegarParaProduto(produto) {
              this.log(`\n🚀 Navegando para: ${produto.url}`, 'info');
  
              if (produto.url) {
                  window.location.href = produto.url;
              } else {
                  this.log('❌ URL não encontrada para navegação', 'error');
                  $('.variation-pill-group').removeClass('is-loading');
              }
          }
      }
  
      // ============================================
      // INICIALIZAÇÃO GLOBAL
      // ============================================
      // Usar setTimeout para garantir que este script rode por último
      // e sobrescreva qualquer versão anterior
      setTimeout(function() {
          // Limpar qualquer renderização anterior
          $('.product-variations-pills-container').remove();
          $('.derivacoes-produto').remove();
  
          const gerenciador = new GerenciadorVariacoesPills();
          gerenciador.init();
  
          window.GerenciadorVariacoesPillsMagazord = gerenciador;
      }, 100);
  
  })(typeof jQuery !== 'undefined' ? jQuery : window.jQuery || window.$);
  /* =============================================
     SEÇÃO 6: CART + CHECKOUT JS
     ============================================= */

  /* === cart-sheet.js === */
  /* =============================================
     CARRINHO MOBILE - JS Override Magazord v2
     Cria botoes de quantidade funcionais (+/-)
     usando as APIs nativas do Magazord:
     - Zord.checkout.adicionaQuantidade(dataId)
     - Zord.checkout.removeQuantidade(dataId, true)
  
     ATUALIZACAO REACT:
     O carrinho preview e um componente React que escuta
     o evento "reactItemAddedToCart" para re-renderizar.
     As funcoes Zord.checkout.* NAO disparam esse evento
     (e NAO retornam promises encadeáveis).
     Usamos $(document).ajaxComplete para detectar quando
     qualquer AJAX do carrinho completa e disparar o evento.
     ============================================= */
  (function() {
    'use strict';
  
    // Disparar evento React apos qualquer AJAX do carrinho completar.
    // Isso cobre: adicionaQuantidade, removeQuantidade, deleteItem,
    // e qualquer outra operacao que use Zord.callArea("checkout/cart", ...).
    function registrarAjaxListener() {
      if (typeof jQuery === 'undefined' && typeof $ === 'undefined') return;
      var jq = typeof jQuery !== 'undefined' ? jQuery : $;
      jq(document).ajaxComplete(function(event, xhr, settings) {
        if (settings.url && settings.url.indexOf('checkout/cart') !== -1) {
          setTimeout(function() {
            window.dispatchEvent(new CustomEvent('reactItemAddedToCart'));
          }, 100);
        }
      });
    }
  
    function injetarParcelamentoTotal() {
      var footer = document.querySelector('#cart-preview-area .border-t.border-solid');
      if (!footer || footer.querySelector('.installment-total')) return;
  
      // Somar valor total do carrinho a partir dos itens
      var total = 0;
      var cartItems = document.querySelectorAll('#cart-preview-area .cart-item');
      cartItems.forEach(function(item) {
        var price = parseFloat(item.getAttribute('data-item-price')) || 0;
        var qty = parseInt(item.getAttribute('data-item-quantity')) || 1;
        total += price * qty;
      });
  
      if (total <= 0) return;
  
      var parcela = (total / 12).toFixed(2).replace('.', ',');
      var el = document.createElement('div');
      el.className = 'installment-total';
      el.textContent = 'ou 12x de R$ ' + parcela;
  
      // Inserir apos o valor-pix
      var valorPix = footer.querySelector('.valor-pix');
      if (valorPix && valorPix.parentNode) {
        valorPix.parentNode.insertBefore(el, valorPix.nextSibling);
      }
    }
  
    // SVG icons matching /checkout/cart (.mm-qty-btn / .mm-item-remove)
    var SVG_MINUS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/></svg>';
    var SVG_PLUS  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
    var SVG_TRASH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>';
  
    function criarControlesQtd() {
      injetarParcelamentoTotal();
  
      // Itera por .cart-item (scope correto pra funcionar em mobile E desktop —
      // no desktop o .cart-remove-item fica fora do .qtd-value, em .prod-remove sibling).
      var cartItems = document.querySelectorAll('#cart-preview-area .cart-item, .content-cart .cart-item');
      cartItems.forEach(function(cartItem) {
        // Evita re-injeção
        if (cartItem.querySelector('.qty-btn-minus')) return;
  
        var qtdDiv = cartItem.querySelector('.qtd-value');
        if (!qtdDiv) return;
  
        // Trash button pode estar dentro de .qtd-value (mobile) ou em .prod-remove sibling (desktop)
        var removeBtn = cartItem.querySelector('.cart-remove-item');
        var dataId = removeBtn ? removeBtn.getAttribute('data-id') : null;
        if (!dataId) return;
  
        // Desktop: trash está num wrapper .prod-remove separado com hover:bg-cor-base-light
        // que deixa tudo verde olive no hover. Move o trash pra dentro do .qtd-value,
        // e esconde o wrapper vazio pra não capturar hover.
        var prodRemoveWrap = cartItem.querySelector('.prod-remove');
        if (prodRemoveWrap && !qtdDiv.contains(removeBtn)) {
          qtdDiv.appendChild(removeBtn);
          prodRemoveWrap.style.display = 'none';
        }
  
        // Unifica estrutura entre mobile e desktop: no mobile o .valor é sibling
        // do .qtd-value; no desktop já está dentro. Move pra dentro pra facilitar
        // ordenação via flex.
        var qtdParent = qtdDiv.parentElement;
        var valor = null;
        if (qtdParent) {
          for (var i = 0; i < qtdParent.children.length; i++) {
            var child = qtdParent.children[i];
            if (child !== qtdDiv && child.classList && child.classList.contains('valor')) {
              valor = child;
              break;
            }
          }
        }
        if (valor && !qtdDiv.contains(valor)) {
          qtdDiv.appendChild(valor);
        }
  
        // Quantidade vem de data-attribute no .cart-item (disponível em ambos viewports);
        // fallback pra parse do texto do qtdDiv.
        var qty = parseInt(cartItem.getAttribute('data-item-quantity'));
        if (!qty || isNaN(qty)) {
          var m = qtdDiv.textContent.match(/(\d+)/);
          qty = m ? parseInt(m[1]) : 1;
        }
  
        // Criar botão minus — SVG icon matching /checkout/cart
        var btnMinus = document.createElement('button');
        btnMinus.className = 'qty-btn-minus';
        btnMinus.type = 'button';
        btnMinus.setAttribute('aria-label', 'Diminuir quantidade');
        btnMinus.innerHTML = SVG_MINUS;
        if (qty <= 1) btnMinus.disabled = true;
        btnMinus.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          if (typeof Zord !== 'undefined' && Zord.checkout) {
            Zord.checkout.removeQuantidade(parseInt(dataId), true);
          }
        });
  
        // Display numérico
        var numDisplay = document.createElement('span');
        numDisplay.className = 'qty-display';
        numDisplay.textContent = qty;
  
        // Botão plus
        var btnPlus = document.createElement('button');
        btnPlus.className = 'qty-btn-plus';
        btnPlus.type = 'button';
        btnPlus.setAttribute('aria-label', 'Aumentar quantidade');
        btnPlus.innerHTML = SVG_PLUS;
        btnPlus.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          if (typeof Zord !== 'undefined' && Zord.checkout) {
            Zord.checkout.adicionaQuantidade(parseInt(dataId));
          }
        });
  
        // Wrap minus + display + plus num container .mm-qty-wrap (pill border igual /checkout/cart)
        var qtyWrap = document.createElement('div');
        qtyWrap.className = 'mm-qty-wrap';
        qtyWrap.appendChild(btnMinus);
        qtyWrap.appendChild(numDisplay);
        qtyWrap.appendChild(btnPlus);
  
        // Inserir wrap no início do qtdDiv
        qtdDiv.insertBefore(qtyWrap, qtdDiv.firstChild);
  
        // Substituir o conteúdo visual do trash nativo pelo nosso ícone SVG limpo
        // (mantém o element pra preservar handlers/data-id do Magazord)
        if (removeBtn) {
          removeBtn.innerHTML = SVG_TRASH;
          removeBtn.setAttribute('aria-label', 'Remover produto');
        }
      });
    }
  
    // Interceptar clique no trash icon (cart-remove-item) para pedir confirmacao
    function interceptarDeleteComConfirmacao() {
      document.addEventListener('click', function(e) {
        var removeBtn = e.target.closest('.cart-remove-item');
        if (!removeBtn || !removeBtn.closest('#cart-preview-area')) return;
  
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
  
        var dataId = removeBtn.getAttribute('data-id');
        if (!dataId) return;
  
        // Get product name from the card
        var cartItem = removeBtn.closest('.cart-item');
        var prodNome = cartItem ? (cartItem.querySelector('.prod-nome')?.textContent?.trim() || 'este produto') : 'este produto';
        var truncated = prodNome.length > 50 ? prodNome.substring(0, 50) + '…' : prodNome;
  
        // Build modal
        var existing = document.getElementById('mm-confirm-overlay');
        if (existing) existing.remove();
  
        var overlay = document.createElement('div');
        overlay.id = 'mm-confirm-overlay';
        overlay.className = 'mm-confirm-overlay';
        overlay.innerHTML =
          '<div class="mm-confirm-card">' +
          '<p class="mm-confirm-title">Remover produto?</p>' +
          '<p class="mm-confirm-desc">' + truncated.replace(/&/g,'&amp;').replace(/</g,'&lt;') + '</p>' +
          '<div class="mm-confirm-actions">' +
          '<button class="mm-confirm-btn mm-confirm-btn-cancel">Manter</button>' +
          '<button class="mm-confirm-btn mm-confirm-btn-delete">Remover</button>' +
          '</div></div>';
  
        document.body.appendChild(overlay);
  
        overlay.querySelector('.mm-confirm-btn-cancel').addEventListener('click', function() {
          overlay.remove();
        });
        overlay.querySelector('.mm-confirm-btn-delete').addEventListener('click', function() {
          overlay.remove();
          if (typeof Zord !== 'undefined' && Zord.checkout) {
            Zord.checkout.deleteItem(parseInt(dataId));
          }
        });
        overlay.addEventListener('click', function(ev) {
          if (ev.target === overlay) overlay.remove();
        });
      }, true); // capturing phase to intercept before Magazord's handler
    }
  
    // Redirecionar "Finalizar compra" do carrinho preview direto para identify (pula /checkout/cart)
    function redirecionarFinalizarCompra() {
      document.addEventListener('click', function(e) {
        var btn = e.target.closest('.finalizar-compra');
        if (btn && btn.closest('#cart-preview-area')) {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = '/checkout/identify';
        }
      }, true);
    }
  
    function iniciar() {
      registrarAjaxListener();
      interceptarDeleteComConfirmacao();
      redirecionarFinalizarCompra();
  
      var alvo = document.getElementById('cart-preview-area');
      if (alvo) {
        var obs = new MutationObserver(function() {
          setTimeout(criarControlesQtd, 100);
        });
        obs.observe(alvo, { childList: true, subtree: true });
      }
      // Fallback: executar periodicamente
      setInterval(criarControlesQtd, 800);
      criarControlesQtd();
    }
  
    // Aguardar DOM pronto
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', iniciar);
    } else {
      iniciar();
    }
  })();
  /* === checkout-cro.js === */
  /* =============================================
     CHECKOUT CRO - Madeira Mania (rebuild v2)
     "Shadow render" strategy:
     1. Esconde DOM original da Magazord (mantém em memória como source of truth)
     2. Renderiza #mm-layout lendo .cart-item e #resumo-compra
     3. Delega mutações pro Zord API (Zord.checkout.*)
     4. Re-renderiza em $(document).ajaxComplete
     5. Observa .cart-area via MutationObserver (safety net)
  
     CEP: sincroniza com localStorage.mm_cep (mesma chave do produto.js)
     pra auto-calcular frete cross-page.
     ============================================= */
  
  (function initCheckoutCRO() {
    'use strict';
  
    var CEP_KEY = 'mm_cep';
    var CART_SNAPSHOT_KEY = 'mm_cart_snapshot';
    var CART_SNAPSHOT_TTL_MS = 30 * 60 * 1000; /* 30 min */
    var ONEPAGE_DRAFT_KEY = 'mm_onepage_draft';
    var ONEPAGE_DRAFT_TTL_MS = 24 * 60 * 60 * 1000; /* 24h */
    var FRETE_GRATIS_THRESHOLD = 2000;
    var MM_LOGO_URL = 'https://madeiramania.cdn.magazord.com.br/resources/Design%20sem%20nome%20(1).svg';
    var MM_WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5511915299488&text=' + encodeURIComponent('Olá! Estou no checkout e gostaria de tirar uma dúvida sobre meu pedido.');
  
    var path = location.pathname;
    var isCart = path.indexOf('/checkout/cart') !== -1;
    var isIdentify = path.indexOf('/checkout/identify') !== -1;
    var isOnepage = path.indexOf('/checkout/onepage') !== -1;
    var isPayment = path.indexOf('/checkout/payment') !== -1;
    var isDone = path.indexOf('/checkout/done') !== -1;
  
    /* Pedido confirmado — limpa o draft do onepage (user terminou o fluxo) */
    if (isDone) {
      try { localStorage.removeItem('mm_onepage_draft'); } catch (e) {}
      return;
    }
  
    if (!isCart && !isIdentify && !isOnepage && !isPayment) return;
  
    /* Retry até Magazord montar o DOM do checkout */
    initCheckoutCRO._retries = (initCheckoutCRO._retries || 0) + 1;
    var mainArea = document.querySelector('#checkout-main-area');
    if (!mainArea) {
      if (initCheckoutCRO._retries < 40) setTimeout(initCheckoutCRO, 400);
      return;
    }
  
  
    /* =============================================
       HELPERS — parsing, formatting, icons
       ============================================= */
  
    function formatBRL(n) {
      if (isNaN(n) || n < 0) return 'R$ 0,00';
      return 'R$ ' + n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+,)/g, '$1.');
    }
  
    function parseBRL(text) {
      if (!text) return 0;
      var m = String(text).match(/(-?[\d.]+,\d{2})/);
      if (!m) return 0;
      return parseFloat(m[1].replace(/\./g, '').replace(',', '.')) || 0;
    }
  
    function escapeHTML(s) {
      return String(s || '').replace(/[&<>"']/g, function(c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
      });
    }
  
    /* Lucide-style icons (stroke 2) */
    var ICON = {
      truck: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-5l-3-4zM6 18.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.5-7H17V9.5h2.04l1.46 2-.04 0z"/></svg>',
      check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
      checkCircle: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      bolt: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
      shield: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>',
      lock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>',
      card: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
      rotate: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',
      minus: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
      plus: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M3 7h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
      trash: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
      close: '<svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5l-7 7M3.5 3.5l7 7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
      arrow: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
      tag: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
      whats: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>',
      box: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>'
    };
  
    var STORAGE = {
      get: function(k) { try { return localStorage.getItem(k); } catch(e) { return null; } },
      set: function(k, v) { try { localStorage.setItem(k, v); } catch(e) {} },
      remove: function(k) { try { localStorage.removeItem(k); } catch(e) {} }
    };
  
    /* Cart snapshot helpers — usados pra alimentar o resumo lateral em outras
       páginas do checkout (identify/onepage) sem ter o cart no DOM. */
    function saveCartSnapshot(state) {
      try {
        var snap = {
          ts: Date.now(),
          items: state.items.map(function(it) {
            return {
              name: it.name,
              variant: it.variant,
              imgSrc: it.imgSrc,
              quantity: it.quantity,
              lineTotal: it.lineTotal,
              lineTotalPix: it.lineTotalPix,
              isPix: it.isPix,
              deposito: it.deposito
            };
          }),
          subtotalPix: state.subtotalPix,
          subtotalFull: state.subtotalFull,
          discount: state.discount,
          couponCode: state.couponCode,
          shipping: state.shipping,
          shippingDeadline: state.shippingDeadline,
          shippingName: state.shippingName,
          shippingCity: state.shippingCity,
          shippingOptions: state.shippingOptions,
          cepValue: state.cepValue
        };
        STORAGE.set(CART_SNAPSHOT_KEY, JSON.stringify(snap));
      } catch (e) {}
    }
    function loadCartSnapshot() {
      try {
        var raw = STORAGE.get(CART_SNAPSHOT_KEY);
        if (!raw) return null;
        var snap = JSON.parse(raw);
        if (!snap || !snap.ts) return null;
        if (Date.now() - snap.ts > CART_SNAPSHOT_TTL_MS) return null;
        return snap;
      } catch (e) { return null; }
    }
  
    /* Draft do onepage — persiste campos em localStorage pra sobreviver
       reload. TTL 24h. Chaves == ids dos inputs (mm-op-*).
       IMPORTANTE: não sobrescreve o draft existente se NENHUM campo tem
       valor (ex: chamado do beforeunload na página do step 3 onde os
       inputs mm-op-* não existem). Isso preservaria o draft bom. */
    function saveOnepageDraft() {
      try {
        var ids = ['mm-op-email','mm-op-nome','mm-op-cpf','mm-op-tel','mm-op-cep','mm-op-rua','mm-op-num','mm-op-comp','mm-op-bairro','mm-op-cidade','mm-op-uf'];
        var data = { ts: Date.now() };
        var count = 0;
        for (var i = 0; i < ids.length; i++) {
          var el = document.getElementById(ids[i]);
          if (el && el.value) { data[ids[i]] = el.value; count++; }
        }
        /* Guard: zero campos = não sobrescreve. Preserva draft anterior. */
        if (count === 0) {
          if (window._mmDraftDebug) console.log('[mm-draft] skip save (0 fields)');
          return;
        }
        STORAGE.set(ONEPAGE_DRAFT_KEY, JSON.stringify(data));
        if (window._mmDraftDebug) console.log('[mm-draft] saved', count, 'fields', data);
      } catch (e) {
        if (window._mmDraftDebug) console.warn('[mm-draft] save failed', e);
      }
    }
    function loadOnepageDraft() {
      try {
        var raw = STORAGE.get(ONEPAGE_DRAFT_KEY);
        if (!raw) return null;
        var d = JSON.parse(raw);
        if (!d || !d.ts) return null;
        if (Date.now() - d.ts > ONEPAGE_DRAFT_TTL_MS) { STORAGE.remove(ONEPAGE_DRAFT_KEY); return null; }
        return d;
      } catch (e) { return null; }
    }
    function clearOnepageDraft() {
      try { STORAGE.remove(ONEPAGE_DRAFT_KEY); } catch(e) {}
    }
    function restoreOnepageDraft() {
      var d = loadOnepageDraft();
      if (!d) {
        if (window._mmDraftDebug) console.log('[mm-draft] no draft to restore');
        return null;
      }
      var ids = ['mm-op-email','mm-op-nome','mm-op-cpf','mm-op-tel','mm-op-cep','mm-op-rua','mm-op-num','mm-op-comp','mm-op-bairro','mm-op-cidade','mm-op-uf'];
      var restored = 0;
      for (var i = 0; i < ids.length; i++) {
        var el = document.getElementById(ids[i]);
        /* Sempre restaura (não checa !el.value) — draft é autoritative */
        if (el && d[ids[i]]) {
          try {
            var nativeSet = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
            nativeSet.call(el, d[ids[i]]);
          } catch (e) { el.value = d[ids[i]]; }
          el.dispatchEvent(new Event('input', { bubbles: true }));
          restored++;
        }
      }
      if (window._mmDraftDebug) console.log('[mm-draft] restored', restored, 'fields from draft', d);
      return d;
    }
  
  
    /* =============================================
       READ — extrai estado da DOM Magazord
       ============================================= */
  
    function readCart() {
      var state = {
        items: [],
        subtotalPix: 0,      /* valor em PIX (já descontado) */
        subtotalFull: 0,     /* soma de data-valor (preço cheio) */
        discount: 0,         /* desconto do cupom */
        shipping: null,      /* null = não calculado, 0 = grátis, > 0 = valor (modalidade selecionada) */
        shippingRaw: '',     /* texto original do frete-calculado */
        shippingDeadline: '',/* prazo da modalidade selecionada */
        shippingName: '',    /* nome da modalidade selecionada (Econômico, Normal, Expressa) */
        shippingCity: '',    /* cidade do CEP (São Paulo/SP) */
        shippingOptions: [], /* todas as modalidades: [{id, name, deadline, value, isFree, isSelected}] */
        couponCode: '',      /* se aplicado */
        cepValue: '',        /* valor atual do #cep */
        canFinalize: false,  /* true se tem itens */
        hasFinalizar: false  /* true se #finalizar-compra existe */
      };
  
      /* Items */
      var itemEls = mainArea.querySelectorAll('.cart-item');
      for (var i = 0; i < itemEls.length; i++) {
        var el = itemEls[i];
        var qtyInput = el.querySelector('.qtd-item[id^="item_carrinho_"]');
        var match = qtyInput && qtyInput.id.match(/item_carrinho_(\d+)/);
        var dataId = match ? parseInt(match[1], 10) : null;
        var img = el.querySelector('figure img') || el.querySelector('#product-img') || el.querySelector('img');
        var link = el.querySelector('.nome-produto .link') || el.querySelector('figure a');
        var valorEl = el.querySelector('.column-valor-produto .valor');
        var valorDisplayText = valorEl ? valorEl.textContent.trim() : '';
        var isPix = !!el.querySelector('.column-valor-produto .sub'); /* ".sub" = "no PIX" */
  
        state.items.push({
          dataId: dataId,
          sku: el.getAttribute('data-item-id') || '',
          name: el.getAttribute('data-item-name') || el.getAttribute('data-name') || '',
          variant: el.getAttribute('data-item-variant') || '',
          brand: el.getAttribute('data-item-brand') || '',
          category: el.getAttribute('data-item-category') || '',
          priceUnit: parseFloat(el.getAttribute('data-item-price') || '0'),
          lineTotal: parseFloat(el.getAttribute('data-valor') || '0'), /* preço cheio linha */
          quantity: parseInt(el.getAttribute('data-item-quantity') || '1', 10),
          deposito: el.getAttribute('data-item-deposito') === '1',
          imgSrc: img ? (img.getAttribute('src') || img.currentSrc) : '',
          href: link ? link.getAttribute('href') : '',
          lineTotalPix: parseBRL(valorDisplayText),
          isPix: isPix
        });
  
        state.subtotalFull += parseFloat(el.getAttribute('data-valor') || '0');
      }
  
      /* Subtotal PIX — vem direto do Magazord no .resumo-valores .value (já descontado) */
      var resumoValueEl = mainArea.querySelector('#resumo-compra .resumo-valores .value');
      if (resumoValueEl) {
        state.subtotalPix = parseBRL(resumoValueEl.textContent);
      }
      if (state.subtotalPix <= 0) {
        /* Fallback: soma os lineTotalPix dos items */
        state.subtotalPix = state.items.reduce(function(acc, i) { return acc + (i.lineTotalPix || 0); }, 0);
      }
  
      /* Discount */
      var discountEl = mainArea.querySelector('#resumo-compra .discount-value');
      if (discountEl) state.discount = parseBRL(discountEl.textContent);
  
      var couponEl = mainArea.querySelector('#resumo-compra .txt-cupom, #resumo-compra .alert.alert-type-1');
      if (couponEl) {
        var m = couponEl.textContent.match(/([A-Z0-9]{3,})/);
        if (m) state.couponCode = m[1];
      }
  
      /* Shipping — parse rico via .servico-frete + fallback texto */
      var freteEl = mainArea.querySelector('#resumo-compra .frete-calculado, .frete-calculado');
      if (freteEl && freteEl.textContent.trim()) {
        state.shippingRaw = freteEl.textContent.trim();
  
        /* Cidade do CEP — ".frete-location .city" */
        var cityEl = freteEl.querySelector('.frete-location .city');
        if (cityEl) state.shippingCity = cityEl.textContent.trim();
  
        /* Opções de modalidade — cada .servico-frete com data attrs e radio */
        var servEls = freteEl.querySelectorAll('.servico-frete');
        for (var si = 0; si < servEls.length; si++) {
          var s = servEls[si];
          var radio = s.querySelector('input[type="radio"]');
          var prazoEl = s.querySelector('.dias-entrega');
          var valor = parseFloat(s.getAttribute('data-valor-frete') || '0');
          var nome = s.getAttribute('data-servico-frete') || '';
          var prazoText = prazoEl ? prazoEl.textContent.trim().replace(/\s+/g, ' ').replace(/\s*-\s*$/, '').trim() : '';
          /* Normaliza prazo: extrai só "8 a 10 dias úteis" do texto bruto */
          var pm = prazoText.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i);
          var prazoClean = pm ? pm[1].replace(/\s+/g, ' ') : prazoText;
          state.shippingOptions.push({
            id: radio ? radio.value : '',
            name: nome,
            deadline: prazoClean,
            value: valor,
            isFree: valor === 0,
            isSelected: radio ? radio.checked : false
          });
        }
  
        /* Modalidade selecionada — usa info-frete-selec se existir, senão pega o checked */
        var selectedOpt = state.shippingOptions.filter(function(o) { return o.isSelected; })[0];
        if (!selectedOpt && state.shippingOptions.length > 0) selectedOpt = state.shippingOptions[0];
  
        if (selectedOpt) {
          state.shipping = selectedOpt.value;
          state.shippingName = selectedOpt.name;
          state.shippingDeadline = selectedOpt.deadline;
        } else {
          /* Fallback: parsing por texto (sem .servico-frete) */
          var infoSelec = freteEl.querySelector('.info-frete-selec');
          var diasEl = freteEl.querySelector('.dias-entrega, .info-frete-selec .dias-entrega');
          var valEl = freteEl.querySelector('.valor-frete .value, .value.valor-frete');
          var nomeSelEl = freteEl.querySelector('.info-frete-selec .info-title span, .info-title span');
          if (valEl) {
            var valTxt = valEl.textContent.trim();
            if (/gr[aá]tis/i.test(valTxt)) {
              state.shipping = 0;
            } else {
              var parsed = parseBRL(valTxt);
              if (parsed > 0) state.shipping = parsed;
            }
          }
          if (diasEl) {
            var dpm = diasEl.textContent.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*\([^)]+\))?(?:\s*[úu]teis)?)/i);
            if (dpm) state.shippingDeadline = dpm[1].replace(/\s+/g, ' ').replace(/\(s\)/, '').trim();
          }
          if (nomeSelEl) state.shippingName = nomeSelEl.textContent.trim();
          /* Fallback final por regex no raw */
          if (state.shipping === null) {
            if (/gr[aá]tis/i.test(state.shippingRaw)) {
              state.shipping = 0;
            } else {
              var parsedRaw = parseBRL(state.shippingRaw);
              if (parsedRaw > 0) state.shipping = parsedRaw;
            }
          }
          if (!state.shippingDeadline) {
            var dm2 = state.shippingRaw.match(/(\d+(?:\s*[aà]\s*\d+)?)\s*dias?/i);
            if (dm2) state.shippingDeadline = dm2[1] + ' dias úteis';
          }
        }
      }
  
      /* CEP input */
      var cepInput = mainArea.querySelector('#cep, .input-cep');
      if (cepInput) state.cepValue = cepInput.value || '';
  
      /* Finalize state */
      state.hasFinalizar = !!mainArea.querySelector('#finalizar-compra');
      state.canFinalize = state.items.length > 0;
  
      return state;
    }
  
  
    /* =============================================
       RENDER — componentes
       ============================================= */
  
    /* Shipping nudge: SÓ aparece enquanto falta valor pra frete grátis.
       Quando atingido, a linha "Frete: Grátis" no resumo já comunica. */
    function renderShippingNudge(state) {
      var subtotal = state.subtotalFull > 0 ? state.subtotalFull : state.subtotalPix;
      if (subtotal <= 0) return '';
      if (subtotal >= FRETE_GRATIS_THRESHOLD) return '';
      if (state.shipping === 0) return '';
  
      var falta = Math.max(0, FRETE_GRATIS_THRESHOLD - subtotal);
      var pct = Math.min((subtotal / FRETE_GRATIS_THRESHOLD) * 100, 100);
      return (
        '<div class="mm-nudge">' +
          '<div class="mm-nudge-head">' +
            ICON.truck +
            '<span>Adicione mais <strong>' + formatBRL(falta) + '</strong> e ganhe frete grátis</span>' +
          '</div>' +
          '<div class="mm-nudge-track"><div class="mm-nudge-fill" style="width:' + pct + '%"></div></div>' +
        '</div>'
      );
    }
  
    /* Custom checkout header — substitui o header-checkout da Magazord
       ui-ux-pro-max applied: visual hierarchy via size > color, premium spacing,
       clear progress indicator, big readable trust signal.
       currentStep: 'cart' | 'delivery' | 'payment' (default 'cart')
       Note: 'delivery' cobre /checkout/identify E /checkout/onepage —
       ambas marcam "Entrega" como ativo (continuidade visual entre telas) */
    function renderCheckoutHeader(currentStep) {
      currentStep = currentStep || 'cart';
      /* Shield-check filled — universal SSL/security mark, recognizable at small sizes */
      var lockBig = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.4 16L6 12.4l1.4-1.4 3.2 3.2 6.8-6.8L18.8 8.8 10.6 17z"/></svg>';
  
      function step(key, label) {
        var isActive = key === currentStep;
        var cls = 'mm-checkout-step' + (isActive ? ' is-active' : '');
        var ariaCurrent = isActive ? ' aria-current="step"' : '';
        return '<li class="' + cls + '"' + ariaCurrent + '>' +
                 '<span class="mm-checkout-step-label">' + label + '</span>' +
               '</li>';
      }
  
      return (
        '<header class="mm-checkout-header">' +
          '<a class="mm-checkout-header-logo" href="/" aria-label="Madeira Mania - voltar à home">' +
            '<img src="' + MM_LOGO_URL + '" alt="Madeira Mania" width="180" height="44">' +
          '</a>' +
          '<nav class="mm-checkout-steps" aria-label="Etapas do checkout">' +
            '<ol>' +
              step('cart', 'Carrinho') +
              '<li class="mm-checkout-step-sep" aria-hidden="true">›</li>' +
              step('delivery', 'Entrega') +
              '<li class="mm-checkout-step-sep" aria-hidden="true">›</li>' +
              step('payment', 'Pagamento') +
            '</ol>' +
          '</nav>' +
          '<div class="mm-checkout-secure">' +
            lockBig +
            '<span class="mm-checkout-secure-text">' +
              '<strong>Compra 100% segura</strong>' +
              '<small>Site protegido por SSL</small>' +
            '</span>' +
          '</div>' +
        '</header>'
      );
    }
  
    function renderItem(item) {
      var imgHTML = item.imgSrc
        ? '<img src="' + escapeHTML(item.imgSrc) + '" alt="' + escapeHTML(item.name) + '" loading="lazy">'
        : '';
      var nameHTML = item.href
        ? '<a class="mm-item-name" href="' + escapeHTML(item.href) + '">' + escapeHTML(item.name) + '</a>'
        : '<span class="mm-item-name">' + escapeHTML(item.name) + '</span>';
      var variantHTML = item.variant
        ? '<p class="mm-item-variant">' + escapeHTML(item.variant) + '</p>'
        : '';
      var badgeHTML = item.deposito
        ? '<span class="mm-item-badge">' + ICON.bolt + '<span>Pronta entrega · Envio em 24h</span></span>'
        : '';
      var minDisabled = item.quantity <= 1 ? ' disabled aria-disabled="true"' : '';
  
      var priceBlock;
      if (item.lineTotalPix > 0 && item.isPix) {
        var priceSub = '<span class="mm-item-price-sub">no PIX</span>';
        var unitStr = item.quantity > 1 ? formatBRL(item.lineTotalPix / item.quantity) + ' cada' : '';
        priceBlock =
          '<div class="mm-item-price">' +
            '<span class="mm-item-price-value">' + formatBRL(item.lineTotalPix) + '</span>' +
            priceSub +
            (unitStr ? '<span class="mm-item-price-unit">' + unitStr + '</span>' : '') +
          '</div>';
      } else {
        var unitStr2 = item.quantity > 1 ? formatBRL(item.priceUnit) + ' cada' : '';
        priceBlock =
          '<div class="mm-item-price">' +
            '<span class="mm-item-price-value">' + formatBRL(item.lineTotal) + '</span>' +
            (unitStr2 ? '<span class="mm-item-price-unit">' + unitStr2 + '</span>' : '') +
          '</div>';
      }
  
      return (
        '<div class="mm-item" data-mm-id="' + item.dataId + '">' +
          '<div class="mm-item-thumb">' + imgHTML + '</div>' +
          '<div class="mm-item-body">' +
            nameHTML +
            variantHTML +
            badgeHTML +
          '</div>' +
          priceBlock +
          '<div class="mm-item-controls">' +
            '<div class="mm-qty" role="group" aria-label="Quantidade">' +
              '<button type="button" class="mm-qty-btn" data-mm-act="dec"' + minDisabled + ' aria-label="Diminuir quantidade">' + ICON.minus + '</button>' +
              '<span class="mm-qty-value">' + item.quantity + '</span>' +
              '<button type="button" class="mm-qty-btn" data-mm-act="inc" aria-label="Aumentar quantidade">' + ICON.plus + '</button>' +
            '</div>' +
            '<button type="button" class="mm-item-remove" data-mm-act="remove" aria-label="Remover item" title="Remover">' +
              ICON.trash +
            '</button>' +
          '</div>' +
        '</div>'
      );
    }
  
    function renderItemsList(state) {
      if (!state.items.length) {
        return (
          '<div class="mm-empty">' +
            '<div class="mm-empty-icon">' + ICON.box + '</div>' +
            '<h3 class="mm-empty-title">Seu carrinho está vazio</h3>' +
            '<p class="mm-empty-desc">Explore nossos móveis e encontre a peça certa para sua casa.</p>' +
            '<a class="mm-empty-cta" href="/">Explorar produtos ' + ICON.arrow + '</a>' +
            '<p class="mm-empty-perks">Frete grátis acima de R$ 2.000 · 12x sem juros · 7% off no PIX</p>' +
          '</div>'
        );
      }
      return state.items.map(renderItem).join('');
    }
  
    function renderSkeletonItems(n) {
      var out = '';
      for (var i = 0; i < n; i++) {
        out +=
          '<div class="mm-skel-item">' +
            '<div class="mm-skel mm-skel-thumb"></div>' +
            '<div class="mm-skel-lines">' +
              '<div class="mm-skel mm-skel-line w-3-4"></div>' +
              '<div class="mm-skel mm-skel-line w-1-2"></div>' +
              '<div class="mm-skel mm-skel-line w-1-3"></div>' +
            '</div>' +
            '<div class="mm-skel-lines">' +
              '<div class="mm-skel mm-skel-line w-1-2"></div>' +
            '</div>' +
          '</div>';
      }
      return out;
    }
  
    function renderSummaryDynamic(state) {
      var subtotalFull = state.subtotalFull > 0 ? state.subtotalFull : state.subtotalPix;
  
      /* Rows: Subtotal, Frete (se calculado), Desconto */
      var rows =
        '<div class="mm-row">' +
          '<span class="mm-row-label">Subtotal</span>' +
          '<span class="mm-row-value">' + formatBRL(subtotalFull) + '</span>' +
        '</div>';
  
      if (state.shipping !== null) {
        var freteValue;
        if (state.shipping === 0) {
          freteValue = '<span class="mm-row-value is-free">' + ICON.check + ' Grátis</span>';
        } else {
          freteValue = '<span class="mm-row-value">' + formatBRL(state.shipping) + '</span>';
        }
        var freteLabelParts = '<span class="mm-row-label">Frete';
        if (state.shippingName) freteLabelParts += ' <span class="mm-row-sub">· ' + escapeHTML(state.shippingName) + '</span>';
        if (state.shippingDeadline) freteLabelParts += ' <span class="mm-row-sub">· ' + escapeHTML(state.shippingDeadline) + '</span>';
        freteLabelParts += '</span>';
        rows +=
          '<div class="mm-row">' +
            freteLabelParts +
            freteValue +
          '</div>';
      }
  
      if (state.discount > 0) {
        rows +=
          '<div class="mm-row">' +
            '<span class="mm-row-label">Desconto</span>' +
            '<span class="mm-row-value is-discount">− ' + formatBRL(state.discount) + '</span>' +
          '</div>';
      }
  
      /* Total block */
      var totalBlock = '';
      if (state.shipping !== null) {
        var totalFull = Math.max(0, subtotalFull + state.shipping - state.discount);
        var totalPix = Math.max(0, state.subtotalPix + state.shipping - state.discount);
        var save = totalFull - totalPix;
        var parcela = totalFull / 12;
        totalBlock =
          '<div class="mm-total">' +
            '<div class="mm-total-label">Total</div>' +
            '<div class="mm-total-value">' + formatBRL(totalFull) + '</div>' +
            '<div class="mm-total-pix">' +
              '<span>' + formatBRL(totalPix) + ' à vista no PIX</span>' +
              (save > 0 ? '<span class="mm-total-pix-save">economia de ' + formatBRL(save) + '</span>' : '') +
            '</div>' +
            '<div class="mm-total-parcela">ou 12x de ' + formatBRL(parcela) + ' sem juros no cartão</div>' +
          '</div>';
      } else {
        totalBlock =
          '<div class="mm-total">' +
            '<div class="mm-total-label">Subtotal</div>' +
            '<div class="mm-total-value">' + formatBRL(state.subtotalPix) + '</div>' +
            '<div class="mm-total-pix"><span>à vista no PIX</span></div>' +
            '<div class="mm-total-pending">Informe seu CEP para ver o frete e o total final.</div>' +
          '</div>';
      }
  
      /* Coupon block */
      var couponBlock;
      if (state.couponCode) {
        couponBlock =
          '<div class="mm-coupon-applied">' +
            '<span class="mm-coupon-applied-left">' + ICON.tag + '<span>' + escapeHTML(state.couponCode) + '</span></span>' +
            '<button type="button" data-mm-act="coupon-remove" aria-label="Remover cupom">' + ICON.close + '</button>' +
          '</div>';
      } else {
        couponBlock =
          '<div class="mm-coupon">' +
            '<button type="button" class="mm-coupon-toggle" data-mm-act="coupon-toggle">' +
              ICON.tag + '<span>Tenho um cupom</span>' +
            '</button>' +
            '<form class="mm-coupon-form" data-mm-act="coupon-submit">' +
              '<input type="text" class="mm-input" name="mm-coupon-code" placeholder="CUPOM" autocomplete="off" autocapitalize="characters" spellcheck="false" />' +
              '<button type="submit" class="mm-btn-secondary">Aplicar</button>' +
            '</form>' +
          '</div>';
      }
  
      return (
        '<div class="mm-sum-stack">' +
          '<div class="mm-rows">' + rows + '</div>' +
          couponBlock +
          totalBlock +
        '</div>'
      );
    }
  
  
    /* =============================================
       LAYOUT — cria estrutura permanente do mm-layout
       ============================================= */
  
    function buildLayout() {
      var existing = document.getElementById('mm-layout');
      if (existing) {
        /* Safety: se o Magazord reparentou pra dentro de .container,
           move de volta pra ser filho direto do mainArea. Senão o
           mm-shadow-mode joga o .container pai offscreen junto. */
        if (existing.parentElement !== mainArea) {
          mainArea.insertBefore(existing, mainArea.firstChild);
        }
        return existing;
      }
  
      var layout = document.createElement('div');
      layout.id = 'mm-layout';
  
      layout.innerHTML =
        renderCheckoutHeader('cart') +
        '<div class="mm-grid">' +
          '<section class="mm-items">' +
            '<h2 class="mm-h">Carrinho</h2>' +
            '<div class="mm-items-card">' +
              '<div id="mm-item-list">' + renderSkeletonItems(2) + '</div>' +
            '</div>' +
          '</section>' +
          '<aside class="mm-sum">' +
            '<h2 class="mm-h">Resumo</h2>' +
            '<div class="mm-sum-card">' +
              /* Shipping nudge slot — só renderiza se faltar valor */
              '<div id="mm-nudge-slot"></div>' +
              /* CEP card */
              '<div class="mm-cep">' +
                '<div class="mm-cep-label">' +
                  '<span class="mm-cep-label-text">Calcular frete</span>' +
                  '<a class="mm-cep-label-link" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a>' +
                '</div>' +
                /* Ignore attributes pra password managers não interferirem.
                   Bitwarden, 1Password, LastPass e Dashlane respeitam combinações
                   diferentes — aplica todos pra cobrir o máximo possível.
                   Também usa name="mm_cep_calc" (não "cep" / "postal" / "zip")
                   pra evitar heurísticas de form-field matching. */
                '<div class="mm-cep-row">' +
                  '<input type="text" class="mm-input" id="mm-cep-input"' +
                    ' name="mm_cep_calc"' +
                    ' inputmode="numeric"' +
                    ' maxlength="9"' +
                    ' placeholder="00000-000"' +
                    ' autocomplete="off"' +
                    ' data-lpignore="true"' +
                    ' data-1p-ignore="true"' +
                    ' data-bwignore="true"' +
                    ' data-form-type="other"' +
                    ' aria-label="CEP" />' +
                  '<button type="button" class="mm-btn-secondary" data-mm-act="calc-cep">Calcular</button>' +
                '</div>' +
              '</div>' +
              /* Dynamic summary (rows + total + coupon) */
              '<div id="mm-sum-dynamic"></div>' +
              /* CTA */
              '<button type="button" class="mm-cta" data-mm-act="finalizar">' +
                'Finalizar compra' + ICON.arrow +
              '</button>' +
              /* Trust */
              '<div class="mm-trust">' +
                '<span class="mm-trust-item">' + ICON.lock + '<span>Pagamento seguro</span></span>' +
                '<span class="mm-trust-item">' + ICON.rotate + '<span>7 dias para troca</span></span>' +
                '<span class="mm-trust-item">' + ICON.card + '<span>12x sem juros</span></span>' +
              '</div>' +
              /* Help (objection breaker) */
              '<a class="mm-help" href="' + MM_WHATSAPP_URL + '" target="_blank" rel="noopener" data-mm-track="help-whats">' +
                ICON.whats +
                '<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span>' +
              '</a>' +
            '</div>' +
          '</aside>' +
        '</div>';
  
      /* IMPORTANTE: insere direto no mainArea (não no .container).
         O CSS mm-shadow-mode joga > * (filhos diretos do mainArea) offscreen,
         então o mm-layout precisa ser filho direto pra escapar do hide.
         Caso contrário o .container que envolve nosso layout vai offscreen
         e o mm-layout vai junto, mesmo com :not(#mm-layout) no seletor. */
      mainArea.insertBefore(layout, mainArea.firstChild);
      mainArea.classList.add('mm-shadow-mode');
      document.body.classList.add('mm-checkout-rebuild');
      /* Remove anti-flicker loading class — nosso layout já renderizou */
      document.documentElement.classList.remove('mm-cart-loading');
      return layout;
    }
  
  
    /* =============================================
       HYDRATE — lê estado e injeta no layout
       ============================================= */
  
    function hydrate() {
      var state = readCart();
      var itemList = document.getElementById('mm-item-list');
      if (itemList) itemList.innerHTML = renderItemsList(state);
  
      var dyn = document.getElementById('mm-sum-dynamic');
      if (dyn) dyn.innerHTML = renderSummaryDynamic(state);
  
      var nudgeSlot = document.getElementById('mm-nudge-slot');
      if (nudgeSlot) nudgeSlot.innerHTML = renderShippingNudge(state);
  
      /* CTA disabled se vazio */
      var cta = document.querySelector('.mm-cta');
      if (cta) {
        cta.disabled = !state.canFinalize;
        cta.style.opacity = state.canFinalize ? '1' : '0.5';
        cta.style.pointerEvents = state.canFinalize ? 'auto' : 'none';
      }
  
      /* Sync CEP input da nossa UI com o valor atual */
      var cepUIInput = document.getElementById('mm-cep-input');
      if (cepUIInput && !cepUIInput.matches(':focus')) {
        var saved = STORAGE.get(CEP_KEY);
        var currentVal = state.cepValue || (saved || '');
        if (currentVal) {
          cepUIInput.value = formatCep(currentVal);
        }
      }
  
      /* Salva snapshot pra outras telas do checkout (identify/onepage)
         só persiste quando há itens — evita sobrescrever com cart vazio */
      if (state.items && state.items.length > 0) {
        saveCartSnapshot(state);
      }
  
      return state;
    }
  
  
    /* =============================================
       CEP helpers
       ============================================= */
  
    function formatCep(raw) {
      var digits = String(raw || '').replace(/\D/g, '').slice(0, 8);
      if (digits.length <= 5) return digits;
      return digits.slice(0, 5) + '-' + digits.slice(5);
    }
  
    function saveCep(raw) {
      var digits = String(raw || '').replace(/\D/g, '');
      if (digits.length === 8) STORAGE.set(CEP_KEY, digits);
    }
  
    /* Auto-preenche e dispara cálculo de frete se houver CEP salvo.
       Retry pattern: o input #cep pode ser injetado pelo Magazord depois.
       Também pula se o frete já está calculado (state.shipping !== null). */
    function autoCalcCep(attempt) {
      attempt = attempt || 0;
      var saved = STORAGE.get(CEP_KEY);
      if (!saved || saved.length !== 8) return;
  
      var hiddenCep = mainArea.querySelector('#cep, .input-cep');
      if (!hiddenCep) {
        if (attempt < 12) setTimeout(function() { autoCalcCep(attempt + 1); }, 350);
        return;
      }
  
      /* Se o frete já está calculado, atualiza UI sem disparar de novo */
      var freteEl = mainArea.querySelector('#resumo-compra .frete-calculado');
      if (freteEl && freteEl.textContent.trim()) {
        var ourCepInput = document.getElementById('mm-cep-input');
        if (ourCepInput && !ourCepInput.value) ourCepInput.value = formatCep(saved);
        return;
      }
  
      /* Sincroniza UI nossa primeiro */
      var ourInput = document.getElementById('mm-cep-input');
      if (ourInput && !ourInput.value) ourInput.value = formatCep(saved);
  
      hiddenCep.value = formatCep(saved);
      triggerInputEvent(hiddenCep);
  
      /* Dispara o cálculo pela API Magazord */
      setTimeout(function() {
        triggerCepCalc();
      }, 200);
    }
  
    function triggerInputEvent(el) {
      try {
        var nativeSet = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        nativeSet.call(el, el.value);
      } catch(e) {}
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    }
  
    function triggerCepCalc() {
      /* Prefer Zord.Cart.calculaFreteCarrinho, fallback pro botão OK nativo */
      try {
        if (window.Zord && window.Zord.Cart && typeof window.Zord.Cart.calculaFreteCarrinho === 'function') {
          window.Zord.Cart.calculaFreteCarrinho();
          return;
        }
      } catch(e) {}
      var okBtn = mainArea.querySelector('#resumo-compra .calcula-frete > button, .area-frete button');
      if (okBtn) okBtn.click();
    }
  
  
    /* =============================================
       EVENT DELEGATION
       ============================================= */
  
    function bindEvents() {
      var layout = document.getElementById('mm-layout');
      if (!layout || layout._mmBound) return;
      layout._mmBound = true;
  
      layout.addEventListener('click', function(e) {
        var actEl = e.target.closest('[data-mm-act]');
        if (!actEl) return;
        var act = actEl.getAttribute('data-mm-act');
        var itemEl = actEl.closest('.mm-item');
        var dataId = itemEl ? parseInt(itemEl.getAttribute('data-mm-id'), 10) : null;
  
        switch (act) {
          case 'inc':
            handleQtyChange(dataId, itemEl, 'inc');
            break;
          case 'dec':
            handleQtyChange(dataId, itemEl, 'dec');
            break;
          case 'remove':
            handleRemove(dataId, itemEl);
            break;
          case 'calc-cep':
            handleCalcCep();
            break;
          case 'coupon-toggle':
            var wrap = actEl.closest('.mm-coupon');
            if (wrap) {
              wrap.classList.add('is-open');
              var inp = wrap.querySelector('input');
              if (inp) setTimeout(function() { inp.focus(); }, 100);
            }
            break;
          case 'coupon-remove':
            handleCouponRemove();
            break;
          case 'finalizar':
            handleFinalizar();
            break;
        }
      });
  
      /* Submit do formulário de cupom (Enter key) */
      layout.addEventListener('submit', function(e) {
        var form = e.target.closest('[data-mm-act="coupon-submit"]');
        if (!form) return;
        e.preventDefault();
        var input = form.querySelector('input');
        if (!input) return;
        handleCouponApply(input.value.trim());
      });
  
      /* Máscara + Enter no input CEP */
      layout.addEventListener('input', function(e) {
        if (e.target && e.target.id === 'mm-cep-input') {
          e.target.value = formatCep(e.target.value);
        }
      });
      layout.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.target && e.target.id === 'mm-cep-input') {
          e.preventDefault();
          handleCalcCep();
        }
      });
    }
  
  
    /* =============================================
       HANDLERS — chamam Zord API
       ============================================= */
  
    function handleQtyChange(dataId, itemEl, direction) {
      if (!dataId || !itemEl) return;
      if (!window.Zord || !window.Zord.checkout) return;
      itemEl.classList.add('is-updating');
      try {
        if (direction === 'inc') {
          window.Zord.checkout.adicionaQuantidade(dataId);
        } else {
          window.Zord.checkout.removeQuantidade(dataId);
        }
      } catch (e) {
        console.warn('[mm-cart] qty change failed', e);
        itemEl.classList.remove('is-updating');
      }
    }
  
    function handleRemove(dataId, itemEl) {
      if (!dataId || !itemEl) return;
      if (!window.Zord || !window.Zord.checkout) return;
      itemEl.classList.add('is-updating');
      /* Fade out visual antes da AJAX responder */
      itemEl.style.transition = 'opacity 200ms, transform 200ms';
      itemEl.style.opacity = '0';
      itemEl.style.transform = 'translateX(-12px)';
      try {
        /* removeQuantidade auto-deleta quando qty == 1 */
        if (typeof window.Zord.checkout.deleteItem === 'function') {
          window.Zord.checkout.deleteItem(dataId);
        } else {
          window.Zord.checkout.removeQuantidade(dataId);
        }
      } catch (e) {
        console.warn('[mm-cart] remove failed', e);
        itemEl.classList.remove('is-updating');
        itemEl.style.opacity = '1';
        itemEl.style.transform = '';
      }
    }
  
    function handleCalcCep() {
      var input = document.getElementById('mm-cep-input');
      if (!input) return;
      var digits = (input.value || '').replace(/\D/g, '');
      if (digits.length !== 8) {
        input.focus();
        input.classList.add('mm-input-error');
        setTimeout(function() { input.classList.remove('mm-input-error'); }, 1200);
        return;
      }
      saveCep(digits);
      /* Aplica no input hidden Magazord */
      var hidden = mainArea.querySelector('#cep, .input-cep');
      if (hidden) {
        hidden.value = formatCep(digits);
        triggerInputEvent(hidden);
      }
      triggerCepCalc();
    }
  
    function handleCouponApply(code) {
      if (!code) return;
      if (!window.Zord || !window.Zord.checkout) return;
      var hidden = mainArea.querySelector('#cupom-desconto');
      if (hidden) {
        hidden.value = code.toUpperCase();
        triggerInputEvent(hidden);
      }
      try {
        window.Zord.checkout.addCupomDesconto();
      } catch (e) {
        console.warn('[mm-cart] coupon apply failed', e);
      }
    }
  
    function handleCouponRemove() {
      if (!window.Zord || !window.Zord.checkout) return;
      try {
        window.Zord.checkout.removeCupomDesconto();
      } catch (e) {
        console.warn('[mm-cart] coupon remove failed', e);
      }
    }
  
    function handleFinalizar() {
      /* Salva snapshot SYNC antes de navegar — garante que identify
         sempre tem dados frescos do cart, mesmo se hydrate async não rolou */
      try {
        var s = readCart();
        if (s.items && s.items.length > 0) {
          saveCartSnapshot(s);
        }
      } catch (e) {}
  
      var btn = document.getElementById('finalizar-compra');
      if (btn) {
        btn.click();
        return;
      }
      /* Fallback: navegar direto */
      location.href = '/checkout/identify';
    }
  
  
    /* =============================================
       CART MAIN ENTRY
       ============================================= */
  
    if (isCart) {
      if (!document.getElementById('mm-checkout-cro-done')) {
        var marker = document.createElement('div');
        marker.id = 'mm-checkout-cro-done';
        marker.style.display = 'none';
        document.body.appendChild(marker);
      }
  
      /* Aguarda o DOM Magazord renderizar itens (ou empty) */
      function waitForCartDom(attempt) {
        attempt = attempt || 0;
        if (attempt > 30) { mountCart(); return; }
        var hasItems = mainArea.querySelectorAll('.cart-item').length > 0;
        var hasResumo = mainArea.querySelector('#resumo-compra');
        if (hasItems || hasResumo || attempt > 8) {
          mountCart();
        } else {
          setTimeout(function() { waitForCartDom(attempt + 1); }, 250);
        }
      }
  
      function mountCart() {
        buildLayout();
        bindEvents();
        hydrate();
  
        /* Auto-calcula frete se tiver CEP salvo */
        autoCalcCep();
  
        /* Re-hydrate em cada AJAX do cart */
        if (typeof jQuery !== 'undefined') {
          jQuery(document).ajaxComplete(function(e, xhr, settings) {
            if (!settings || !settings.url) return;
            var url = settings.url;
            if (
              url.indexOf('checkout/cart') !== -1 ||
              url.indexOf('atualiza') !== -1 ||
              url.indexOf('cupom') !== -1 ||
              url.indexOf('frete') !== -1 ||
              url.indexOf('removeItem') !== -1 ||
              url.indexOf('adicionaItem') !== -1
            ) {
              /* Pequeno delay pro Magazord terminar de mexer no DOM */
              setTimeout(hydrate, 120);
              setTimeout(function() {
                var s = readCart();
                /* Salva CEP automaticamente quando o frete é calculado com sucesso */
                if (s.shipping !== null && s.cepValue) {
                  saveCep(s.cepValue);
                }
              }, 200);
            }
          });
        }
  
        /* MutationObserver safety net — re-render se Magazord mexer no cart-area */
        try {
          var observer = new MutationObserver(function(muts) {
            /* Debounce */
            if (mountCart._mutTimer) clearTimeout(mountCart._mutTimer);
            mountCart._mutTimer = setTimeout(hydrate, 200);
          });
          var watchNodes = [
            mainArea.querySelector('#cart-area'),
            mainArea.querySelector('.cart-area'),
            mainArea.querySelector('#resumo-compra')
          ].filter(Boolean);
          watchNodes.forEach(function(n) {
            observer.observe(n, { childList: true, subtree: true, characterData: true });
          });
        } catch (e) {}
      }
  
      waitForCartDom();
    }
  
  
    /* =============================================
       IDENTIFY — shadow-render strategy
       1. Esconde forms Magazord (.page.page-login) via mm-shadow-mode
       2. Renderiza #mm-layout com header + 2-col grid (form + summary)
       3. Re-parenta .social-login-area (Google iframe) pro nosso slot
       4. On submit: copia value pro #login Magazord, dispara click no btn nativo
       5. Guest CTA expande inline o form do #full-anonymous-buy-form-etapa-01
       ============================================= */
  
    /* ----- render do summary lateral (lê do snapshot) ----- */
    function renderIdentifySummary(snap) {
      if (!snap || !snap.items || !snap.items.length) {
        return (
          '<aside class="mm-id-sum mm-sum">' +
            '<h2 class="mm-h">Resumo</h2>' +
            '<div class="mm-sum-card">' +
              '<div class="mm-sum-empty">' +
                '<p>Não conseguimos carregar o resumo do seu pedido.</p>' +
                '<a class="mm-btn-secondary" href="/checkout/cart">Voltar ao carrinho</a>' +
              '</div>' +
            '</div>' +
          '</aside>'
        );
      }
  
      /* thumbs (até 3) */
      var maxThumbs = 3;
      var displayItems = snap.items.slice(0, maxThumbs);
      var extraCount = snap.items.length - maxThumbs;
      var thumbsHTML = displayItems.map(function(it) {
        var img = it.imgSrc
          ? '<img src="' + escapeHTML(it.imgSrc) + '" alt="' + escapeHTML(it.name) + '" loading="lazy">'
          : '<div class="mm-id-thumb-placeholder">' + ICON.box + '</div>';
        /* Qty inline prefix (não badge sobre a imagem):
           padrão Apple/Stripe/Mercado Livre, mais discoverable + acessível.
           Só renderiza quando qty > 1 — qty 1 não precisa de "1×" noise. */
        var qtyPrefix = it.quantity > 1
          ? '<strong class="mm-id-thumb-qty">' + it.quantity + '×</strong> '
          : '';
        var price = it.lineTotalPix > 0 ? it.lineTotalPix : it.lineTotal;
        return (
          '<div class="mm-id-thumb">' +
            '<div class="mm-id-thumb-img">' + img + '</div>' +
            '<div class="mm-id-thumb-body">' +
              '<p class="mm-id-thumb-name">' + qtyPrefix + escapeHTML(it.name) + '</p>' +
              (it.variant ? '<p class="mm-id-thumb-variant">' + escapeHTML(it.variant) + '</p>' : '') +
            '</div>' +
            '<div class="mm-id-thumb-price">' + formatBRL(price) + '</div>' +
          '</div>'
        );
      }).join('');
      if (extraCount > 0) {
        thumbsHTML +=
          '<div class="mm-id-thumb-more">' +
            '+ ' + extraCount + ' ' + (extraCount === 1 ? 'item' : 'itens') + ' a mais' +
          '</div>';
      }
  
      /* totals */
      var subtotalFull = snap.subtotalFull > 0 ? snap.subtotalFull : snap.subtotalPix;
      var rows =
        '<div class="mm-row">' +
          '<span class="mm-row-label">Subtotal</span>' +
          '<span class="mm-row-value">' + formatBRL(subtotalFull) + '</span>' +
        '</div>';
      if (snap.shipping !== null && snap.shipping !== undefined) {
        var freteValue;
        if (snap.shipping === 0) {
          freteValue = '<span class="mm-row-value is-free">' + ICON.check + ' Grátis</span>';
        } else {
          freteValue = '<span class="mm-row-value">' + formatBRL(snap.shipping) + '</span>';
        }
        rows +=
          '<div class="mm-row">' +
            '<span class="mm-row-label">Frete' +
              (snap.shippingDeadline ? ' <span class="mm-row-sub">· ' + escapeHTML(snap.shippingDeadline) + '</span>' : '') +
            '</span>' +
            freteValue +
          '</div>';
      }
      if (snap.discount > 0) {
        rows +=
          '<div class="mm-row">' +
            '<span class="mm-row-label">Desconto' +
              (snap.couponCode ? ' <span class="mm-row-sub">· ' + escapeHTML(snap.couponCode) + '</span>' : '') +
            '</span>' +
            '<span class="mm-row-value is-discount">− ' + formatBRL(snap.discount) + '</span>' +
          '</div>';
      }
  
      var totalBlock;
      var shippingNum = (snap.shipping !== null && snap.shipping !== undefined) ? snap.shipping : 0;
      if (snap.shipping !== null && snap.shipping !== undefined) {
        var totalFull = Math.max(0, subtotalFull + shippingNum - (snap.discount || 0));
        var totalPix = Math.max(0, snap.subtotalPix + shippingNum - (snap.discount || 0));
        var save = totalFull - totalPix;
        var parcela = totalFull / 12;
        totalBlock =
          '<div class="mm-total">' +
            '<div class="mm-total-label">Total</div>' +
            '<div class="mm-total-value">' + formatBRL(totalFull) + '</div>' +
            '<div class="mm-total-pix">' +
              '<span>' + formatBRL(totalPix) + ' à vista no PIX</span>' +
              (save > 0 ? '<span class="mm-total-pix-save">economia de ' + formatBRL(save) + '</span>' : '') +
            '</div>' +
            '<div class="mm-total-parcela">ou 12x de ' + formatBRL(parcela) + ' sem juros</div>' +
          '</div>';
      } else {
        var parcelaNoFrete = subtotalFull / 12;
        totalBlock =
          '<div class="mm-total">' +
            '<div class="mm-total-label">Subtotal</div>' +
            '<div class="mm-total-value">' + formatBRL(snap.subtotalPix) + '</div>' +
            '<div class="mm-total-pix"><span>à vista no PIX</span></div>' +
            '<div class="mm-total-parcela">ou 12x de ' + formatBRL(parcelaNoFrete) + ' sem juros</div>' +
          '</div>';
      }
  
      return (
        '<aside class="mm-id-sum mm-sum">' +
          '<h2 class="mm-h">Resumo do pedido</h2>' +
          '<div class="mm-sum-card">' +
            '<div class="mm-id-thumbs">' + thumbsHTML + '</div>' +
            '<div class="mm-rows">' + rows + '</div>' +
            totalBlock +
            '<a class="mm-id-edit-cart" href="/checkout/cart">' +
              '<span>Editar carrinho</span>' +
            '</a>' +
          '</div>' +
          /* WhatsApp help — ABAIXO do summary (contexto de dúvida = ver o total) */
          '<a class="mm-help mm-sum-help" href="' + MM_WHATSAPP_URL + '" target="_blank" rel="noopener" data-mm-track="help-whats-sum">' +
            ICON.whats +
            '<span><strong>Ficou com alguma dúvida?</strong> Fale com a gente no WhatsApp</span>' +
          '</a>' +
        '</aside>'
      );
    }
  
    /* ----- render do form principal (email + Google + guest + trust) ----- */
    function renderIdentifyForm() {
      var mailIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>';
      var userIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
      var docIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="9" x2="17" y2="9"/><line x1="7" y1="13" x2="17" y2="13"/><line x1="7" y1="17" x2="13" y2="17"/></svg>';
      var phoneIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
  
      return (
        '<section class="mm-id-form-col">' +
          '<h2 class="mm-id-h2">Quase lá! Identifique-se</h2>' +
          '<p class="mm-id-sub">Informe seu e-mail para finalizar a compra de forma rápida e segura.</p>' +
  
          /* form principal email — uso DIV (não label) pra evitar conflito com
             Magazord CSS que força display:flex column em labels do checkout */
          '<form class="mm-id-form" data-mm-act="identify-submit" novalidate>' +
            '<div class="mm-input-wrap">' +
              '<span class="mm-input-icon" aria-hidden="true">' + mailIcon + '</span>' +
              '<input type="email" id="mm-id-email" name="mm-email" class="mm-input" ' +
                'placeholder="seu@email.com" autocomplete="email" inputmode="email" required>' +
            '</div>' +
            '<p class="mm-id-microcopy">' + ICON.lock + '<span>Seu e-mail é seguro · Não compartilhamos com terceiros</span></p>' +
            '<button type="submit" class="mm-cta">Continuar' + ICON.arrow + '</button>' +
          '</form>' +
  
          /* divider */
          '<div class="mm-id-divider"><span>ou</span></div>' +
  
          /* google login slot — .social-login-area é movido pra cá via JS */
          '<div class="mm-id-google-slot"></div>' +
  
          /* guest CTA — navegação direta pra onepage (sem coletar dados aqui;
             evita digitar nome/CPF/email duas vezes — isso será coletado na
             Fase 3 do rebuild da onepage com auto-fill via mm_checkout_mode flag) */
          '<button type="button" class="mm-id-guest-toggle" data-mm-act="guest-go" aria-label="Continuar como visitante">' +
            '<span class="mm-id-guest-icon" aria-hidden="true">' + userIcon + '</span>' +
            '<span class="mm-id-guest-label">Continuar como visitante (sem criar conta)</span>' +
            '<span class="mm-id-guest-arrow" aria-hidden="true">' + ICON.arrow + '</span>' +
          '</button>' +
  
          /* trust strip */
          '<div class="mm-trust mm-id-trust">' +
            '<span class="mm-trust-item">' + ICON.lock + '<span>Pagamento seguro</span></span>' +
            '<span class="mm-trust-item">' + ICON.rotate + '<span>7 dias para troca</span></span>' +
            '<span class="mm-trust-item">' + ICON.shield + '<span>Garantia 12 meses</span></span>' +
          '</div>' +
  
          /* política de privacidade */
          '<p class="mm-id-lgpd">Ao continuar, você concorda com nossa <a href="/politica-de-privacidade" target="_blank" rel="noopener">Política de Privacidade</a></p>' +
        '</section>'
      );
    }
  
    /* ----- monta o layout completo do identify ----- */
    function buildIdentifyLayout(snap) {
      var existing = document.getElementById('mm-layout');
      if (existing) {
        if (existing.parentElement !== mainArea) {
          mainArea.insertBefore(existing, mainArea.firstChild);
        }
        return existing;
      }
  
      var layout = document.createElement('div');
      layout.id = 'mm-layout';
      layout.classList.add('mm-id-layout');
  
      layout.innerHTML =
        renderCheckoutHeader('delivery') +
        '<div class="mm-grid mm-id-grid">' +
          renderIdentifyForm() +
          renderIdentifySummary(snap) +
        '</div>';
  
      /* IMPORTANTE: insere direto no mainArea (não no .container).
         Identify NÃO usa .container como wrapper — o único .container é
         #recomendacao-checkout no rodapé. Os forms Magazord são filhos
         diretos do mainArea. */
      mainArea.insertBefore(layout, mainArea.firstChild);
      document.body.classList.add('mm-checkout-rebuild');
      /* Reparenta Google ANTES de aplicar shadow-mode pra evitar iframe reload */
      reparentGoogleLogin();
      mainArea.classList.add('mm-shadow-mode');
      document.documentElement.classList.remove('mm-cart-loading');
      return layout;
    }
  
    /* ----- move .social-login-area (Google iframe) pro nosso slot -----
       Tenta appendChild — se a iframe re-renderizar, Google preserva sessão. */
    function reparentGoogleLogin() {
      var slot = document.querySelector('.mm-id-google-slot');
      var social = mainArea.querySelector('.social-login-area');
      if (!slot || !social) return;
      if (slot.contains(social)) return; /* já movido */
      try {
        slot.appendChild(social);
        slot.classList.add('is-loaded');
      } catch (e) {}
    }
  
    /* ----- handlers de submit ----- */
    function submitMagazordEmailForm(email) {
      /* Salva email pra reuso no onepage Fase 3 (pré-preenche o input) */
      STORAGE.set('mm_user_email', email);
  
      var hidden = mainArea.querySelector('#login');
      if (!hidden) return false;
      hidden.value = email;
      triggerInputEvent(hidden);
      /* Encontra o button.button-send dentro do form pai do #login */
      var form = hidden.closest('form');
      var btn = form ? form.querySelector('button.button-send, button[type="submit"]') : null;
      if (btn) {
        btn.click();
        return true;
      }
      if (form) {
        form.submit();
        return true;
      }
      return false;
    }
  
    /* ----- bind eventos do identify ----- */
    function bindIdentifyEvents() {
      var layout = document.getElementById('mm-layout');
      if (!layout || layout._mmBound) return;
      layout._mmBound = true;
  
      /* Submit do form email principal */
      layout.addEventListener('submit', function(e) {
        var emailForm = e.target.closest('[data-mm-act="identify-submit"]');
        if (emailForm) {
          e.preventDefault();
          var input = emailForm.querySelector('#mm-id-email');
          var val = input ? input.value.trim() : '';
          if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
            if (input) {
              input.classList.add('mm-input-error');
              input.focus();
              setTimeout(function() { input.classList.remove('mm-input-error'); }, 1500);
            }
            return;
          }
          var ok = submitMagazordEmailForm(val);
          if (ok) {
            var btn = emailForm.querySelector('.mm-cta');
            if (btn) btn.classList.add('is-loading');
          }
          return;
        }
  
      });
  
      /* Click delegation — guest CTA navega direto pra onepage.
         Salva flag pra Fase 3 detectar e auto-selecionar "Compra sem cadastro" */
      layout.addEventListener('click', function(e) {
        var actEl = e.target.closest('[data-mm-act]');
        if (!actEl) return;
        var act = actEl.getAttribute('data-mm-act');
        if (act === 'guest-go') {
          STORAGE.set('mm_checkout_mode', 'guest');
          actEl.classList.add('is-loading');
          location.href = '/checkout/onepage';
        }
      });
    }
  
    /* ----- fetch fallback: se snapshot está null, busca /checkout/cart
       em background, parseia e hidrata o summary -----
       Cobre cenários: snapshot expirou, user pulou direto pro identify
       via URL, primeira sessão sem cart visit prévio, etc. */
    function parseCartHtml(html) {
      try {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var area = doc.querySelector('#checkout-main-area');
        if (!area) return null;
        var items = [];
        var itemEls = area.querySelectorAll('.cart-item');
        var subtotalFull = 0;
        for (var i = 0; i < itemEls.length; i++) {
          var el = itemEls[i];
          var img = el.querySelector('figure img') || el.querySelector('#product-img') || el.querySelector('img');
          var valorEl = el.querySelector('.column-valor-produto .valor');
          var lineFull = parseFloat(el.getAttribute('data-valor') || '0');
          var linePix = valorEl ? parseBRL(valorEl.textContent) : 0;
          items.push({
            name: el.getAttribute('data-item-name') || el.getAttribute('data-name') || '',
            variant: el.getAttribute('data-item-variant') || '',
            imgSrc: img ? (img.getAttribute('src') || '') : '',
            quantity: parseInt(el.getAttribute('data-item-quantity') || '1', 10),
            lineTotal: lineFull,
            lineTotalPix: linePix,
            isPix: !!el.querySelector('.column-valor-produto .sub'),
            deposito: el.getAttribute('data-item-deposito') === '1'
          });
          subtotalFull += lineFull;
        }
        if (items.length === 0) return null;
        var resumoValueEl = area.querySelector('#resumo-compra .resumo-valores .value');
        var subtotalPix = resumoValueEl ? parseBRL(resumoValueEl.textContent) : 0;
        if (subtotalPix <= 0) {
          subtotalPix = items.reduce(function(a, i) { return a + (i.lineTotalPix || 0); }, 0);
        }
        var discountEl = area.querySelector('#resumo-compra .discount-value');
        var discount = discountEl ? parseBRL(discountEl.textContent) : 0;
        var couponEl = area.querySelector('#resumo-compra .txt-cupom, #resumo-compra .alert.alert-type-1');
        var couponCode = '';
        if (couponEl) {
          var m = couponEl.textContent.match(/([A-Z0-9]{3,})/);
          if (m) couponCode = m[1];
        }
        var freteEl = area.querySelector('#resumo-compra .frete-calculado');
        var shipping = null, shippingDeadline = '';
        if (freteEl && freteEl.textContent.trim()) {
          var raw = freteEl.textContent.trim();
          if (/gr[aá]tis/i.test(raw)) shipping = 0;
          else {
            var p = parseBRL(raw);
            if (p > 0) shipping = p;
          }
          var dm = raw.match(/(\d+)\s*dias?/i);
          if (dm) shippingDeadline = dm[1] + ' dias úteis';
        }
        return {
          ts: Date.now(),
          items: items,
          subtotalPix: subtotalPix,
          subtotalFull: subtotalFull,
          discount: discount,
          couponCode: couponCode,
          shipping: shipping,
          shippingDeadline: shippingDeadline,
          cepValue: ''
        };
      } catch (e) { return null; }
    }
  
    function fetchCartSnapshotFallback(callback) {
      try {
        fetch('/checkout/cart', {
          credentials: 'include',
          headers: { 'X-Requested-With': 'XMLHttpRequest' }
        })
          .then(function(r) { return r.text(); })
          .then(function(html) {
            var snap = parseCartHtml(html);
            if (snap) {
              STORAGE.set(CART_SNAPSHOT_KEY, JSON.stringify(snap));
            }
            callback(snap);
          })
          .catch(function() { callback(null); });
      } catch (e) { callback(null); }
    }
  
    /* Re-renderiza apenas a coluna do summary com snapshot novo */
    function rehydrateIdentifySummary(snap) {
      var existing = document.querySelector('#mm-layout .mm-id-sum');
      if (!existing) return;
      var grid = existing.parentNode;
      if (!grid) return;
      var temp = document.createElement('div');
      temp.innerHTML = renderIdentifySummary(snap);
      var fresh = temp.firstChild;
      if (fresh) grid.replaceChild(fresh, existing);
    }
  
    /* ----- mount entry ----- */
    if (isIdentify) {
      function waitForIdentifyDom(attempt) {
        attempt = attempt || 0;
        if (attempt > 30) { mountIdentify(); return; }
        var hasForm = mainArea.querySelector('#login, #login-form-etapa-01');
        if (hasForm || attempt > 8) {
          mountIdentify();
        } else {
          setTimeout(function() { waitForIdentifyDom(attempt + 1); }, 250);
        }
      }
  
      function mountIdentify() {
        var snap = loadCartSnapshot();
        buildIdentifyLayout(snap);
        bindIdentifyEvents();
        reparentGoogleLogin();
  
        /* Tenta novamente o reparent depois pra cobrir caso .social-login-area
           tenha sido injetada async pelo Google script */
        setTimeout(reparentGoogleLogin, 600);
        setTimeout(reparentGoogleLogin, 1500);
  
        /* Fallback: se snapshot está null/empty, fetch /checkout/cart e
           re-renderiza a coluna do summary quando chegar */
        if (!snap || !snap.items || snap.items.length === 0) {
          fetchCartSnapshotFallback(function(freshSnap) {
            if (freshSnap && freshSnap.items && freshSnap.items.length > 0) {
              rehydrateIdentifySummary(freshSnap);
            }
          });
        }
  
        /* Auto-focus no input email após mount */
        setTimeout(function() {
          var emailInput = document.getElementById('mm-id-email');
          if (emailInput && !('ontouchstart' in window)) emailInput.focus();
        }, 250);
      }
  
      waitForIdentifyDom();
    }
  
  
    /* =============================================
       ONEPAGE — Fase 3 — shadow-render do form de dados + endereço
       /checkout/onepage = "Entrega" no stepper
  
       Estratégia:
       1. Esconde Magazord forms (mm-shadow-mode)
       2. Renderiza #mm-layout 2-col: form (esquerda) + summary (direita sticky)
       3. Form tem 2 cards: dados pessoais (4 campos) + endereço (CEP + autofill)
       4. Email pré-preenchido via localStorage.mm_user_email (set na Fase 2)
       5. CEP autofill via ViaCEP API (fallback Zord)
       6. Frete calculado automaticamente após CEP+número
       7. Auto-detect localStorage.mm_checkout_mode='guest' (set na Fase 2)
       8. Submit: copia values pros inputs Magazord originais + clica btn next
       ============================================= */
  
    /* ----- helpers de máscara (compartilhados com qualquer fase) ----- */
    function maskCPF(raw) {
      var d = String(raw || '').replace(/\D/g, '').slice(0, 11);
      if (d.length <= 3) return d;
      if (d.length <= 6) return d.slice(0, 3) + '.' + d.slice(3);
      if (d.length <= 9) return d.slice(0, 3) + '.' + d.slice(3, 6) + '.' + d.slice(6);
      return d.slice(0, 3) + '.' + d.slice(3, 6) + '.' + d.slice(6, 9) + '-' + d.slice(9);
    }
    function maskPhone(raw) {
      var d = String(raw || '').replace(/\D/g, '').slice(0, 11);
      if (d.length <= 2) return d.length ? '(' + d : '';
      if (d.length <= 6) return '(' + d.slice(0, 2) + ') ' + d.slice(2);
      if (d.length <= 10) return '(' + d.slice(0, 2) + ') ' + d.slice(2, 6) + '-' + d.slice(6);
      return '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7);
    }
    function maskCEP(raw) {
      var d = String(raw || '').replace(/\D/g, '').slice(0, 8);
      if (d.length <= 5) return d;
      return d.slice(0, 5) + '-' + d.slice(5);
    }
  
    /* ----- ViaCEP fetch ----- */
    function fetchViaCep(cep, callback) {
      var clean = String(cep || '').replace(/\D/g, '');
      if (clean.length !== 8) { callback(null); return; }
      try {
        fetch('https://viacep.com.br/ws/' + clean + '/json/', {
          headers: { 'Accept': 'application/json' }
        })
          .then(function(r) { return r.json(); })
          .then(function(data) {
            if (!data || data.erro) { callback(null); return; }
            callback({
              logradouro: data.logradouro || '',
              bairro: data.bairro || '',
              cidade: data.localidade || '',
              estado: data.uf || ''
            });
          })
          .catch(function() { callback(null); });
      } catch (e) { callback(null); }
    }
  
    /* ----- icons usados no onepage form ----- */
    var ICONS_OP = {
      mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',
      user: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',
      doc: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 12h8v2H8zm0 4h5v2H8z"/></svg>',
      phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>',
      pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
      home: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
      /* Fase 4 — step 3 payment (todos filled, 24px) */
      /* PIX — logo oficial via svgrepo.com/download/500416/pix.svg */
      pix: '<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M11.917 11.71a2.046 2.046 0 0 1-1.454-.602l-2.1-2.1a.4.4 0 0 0-.551 0l-2.108 2.108a2.044 2.044 0 0 1-1.454.602h-.414l2.66 2.66c.83.83 2.177.83 3.007 0l2.667-2.668h-.253zM4.25 4.282c.55 0 1.066.214 1.454.602l2.108 2.108a.39.39 0 0 0 .552 0l2.1-2.1a2.044 2.044 0 0 1 1.453-.602h.253L9.503 1.623a2.127 2.127 0 0 0-3.007 0l-2.66 2.66h.414z"/><path d="m14.377 6.496-1.612-1.612a.307.307 0 0 1-.114.023h-.733c-.379 0-.75.154-1.017.422l-2.1 2.1a1.005 1.005 0 0 1-1.425 0L5.268 5.32a1.448 1.448 0 0 0-1.018-.422h-.9a.306.306 0 0 1-.109-.021L1.623 6.496c-.83.83-.83 2.177 0 3.008l1.618 1.618a.305.305 0 0 1 .108-.022h.901c.38 0 .75-.153 1.018-.421L7.375 8.57a1.034 1.034 0 0 1 1.426 0l2.1 2.1c.267.268.638.421 1.017.421h.733c.04 0 .079.01.114.024l1.612-1.612c.83-.83.83-2.178 0-3.008z"/></svg>',
      cardBig: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>',
      barcode: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 6h2v12H2zm3 0h1v12H5zm2 0h3v12H7zm4 0h1v12h-1zm3 0h2v12h-2zm3 0h1v12h-1zm2 0h3v12h-3z"/></svg>',
      editPencil: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>'
    };
  
    /* ----- render do form onepage (dados + endereço) ----- */
    function renderOnepageForm(prefilledEmail) {
      var emailVal = prefilledEmail ? ' value="' + escapeHTML(prefilledEmail) + '"' : '';
      return (
        '<section class="mm-op-form-col">' +
          '<h2 class="mm-id-h2">Falta pouco. Onde entregar?</h2>' +
          '<p class="mm-id-sub">Preencha seus dados e o endereço de entrega — o frete é calculado automaticamente.</p>' +
  
          /* CARD 1 — Dados pessoais */
          '<form class="mm-op-form" data-mm-act="onepage-submit" novalidate>' +
            '<div class="mm-op-card">' +
              '<h3 class="mm-op-card-title">' + ICONS_OP.user + '<span>Quem vai receber</span></h3>' +
              '<div class="mm-op-grid-2">' +
                '<div class="mm-input-wrap mm-op-col-2">' +
                  '<span class="mm-input-icon" aria-hidden="true">' + ICONS_OP.mail + '</span>' +
                  '<input type="email" id="mm-op-email" class="mm-input" placeholder="seu@email.com" autocomplete="email" inputmode="email" required' + emailVal + '>' +
                '</div>' +
                '<div class="mm-input-wrap mm-op-col-2">' +
                  '<span class="mm-input-icon" aria-hidden="true">' + ICONS_OP.user + '</span>' +
                  '<input type="text" id="mm-op-nome" class="mm-input" placeholder="Nome completo" autocomplete="name" required>' +
                '</div>' +
                '<div class="mm-input-wrap">' +
                  '<span class="mm-input-icon" aria-hidden="true">' + ICONS_OP.doc + '</span>' +
                  '<input type="tel" id="mm-op-cpf" class="mm-input" placeholder="CPF" inputmode="numeric" autocomplete="off" maxlength="14" required>' +
                '</div>' +
                '<div class="mm-input-wrap">' +
                  '<span class="mm-input-icon" aria-hidden="true">' + ICONS_OP.phone + '</span>' +
                  '<input type="tel" id="mm-op-tel" class="mm-input" placeholder="(11) 91234-5678" inputmode="tel" autocomplete="tel" maxlength="15" required>' +
                '</div>' +
              '</div>' +
              '<p class="mm-op-microcopy-soft">Usamos seus dados só pra emitir nota fiscal e te avisar da entrega.</p>' +
            '</div>' +
  
            /* CARD 2 — Endereço */
            '<div class="mm-op-card">' +
              '<h3 class="mm-op-card-title">' + ICONS_OP.pin + '<span>Endereço de entrega</span></h3>' +
              '<div class="mm-op-grid-2">' +
                '<div class="mm-input-wrap">' +
                  '<span class="mm-input-icon" aria-hidden="true">' + ICONS_OP.pin + '</span>' +
                  '<input type="tel" id="mm-op-cep" class="mm-input" placeholder="CEP — 00000-000" inputmode="numeric" autocomplete="postal-code" maxlength="9" required>' +
                  '<span class="mm-input-status" id="mm-op-cep-status" aria-live="polite"></span>' +
                '</div>' +
                '<a class="mm-op-cep-help" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a>' +
                '<div class="mm-input-wrap mm-op-col-2">' +
                  '<span class="mm-input-icon" aria-hidden="true">' + ICONS_OP.home + '</span>' +
                  '<input type="text" id="mm-op-rua" class="mm-input" placeholder="Rua, Av, Travessa..." autocomplete="address-line1" required>' +
                '</div>' +
                '<div class="mm-input-wrap">' +
                  '<input type="tel" id="mm-op-num" class="mm-input mm-input-noicon" placeholder="Número" inputmode="numeric" required>' +
                '</div>' +
                '<div class="mm-input-wrap">' +
                  '<input type="text" id="mm-op-comp" class="mm-input mm-input-noicon" placeholder="Complemento (opcional)" autocomplete="address-line2">' +
                '</div>' +
                '<div class="mm-input-wrap mm-op-col-2">' +
                  '<input type="text" id="mm-op-bairro" class="mm-input mm-input-noicon" placeholder="Bairro" autocomplete="address-level3" required>' +
                '</div>' +
                '<div class="mm-input-wrap">' +
                  '<input type="text" id="mm-op-cidade" class="mm-input mm-input-noicon" placeholder="Cidade" autocomplete="address-level2" required>' +
                '</div>' +
                '<div class="mm-input-wrap">' +
                  '<input type="text" id="mm-op-uf" class="mm-input mm-input-noicon" placeholder="UF" maxlength="2" autocomplete="address-level1" required>' +
                '</div>' +
              '</div>' +
  
              /* Frete display — só renderiza após cálculo */
              '<div class="mm-op-frete" id="mm-op-frete-slot"></div>' +
            '</div>' +
  
            /* CTA — última etapa pagamento */
            '<button type="submit" class="mm-cta mm-op-cta">' +
              'Última etapa: pagamento' + ICON.arrow +
            '</button>' +
            '<p class="mm-id-microcopy mm-op-cta-sub">' + ICON.lock + '<span>Você revisa tudo antes de finalizar</span></p>' +
          '</form>' +
  
          /* trust strip — WhatsApp help foi movido pra sidebar (abaixo do summary) */
          '<div class="mm-trust mm-id-trust">' +
            '<span class="mm-trust-item">' + ICON.lock + '<span>Pagamento seguro</span></span>' +
            '<span class="mm-trust-item">' + ICON.rotate + '<span>7 dias para troca</span></span>' +
            '<span class="mm-trust-item">' + ICON.shield + '<span>Garantia 12 meses</span></span>' +
          '</div>' +
        '</section>'
      );
    }
  
    /* ----- monta layout completo do onepage ----- */
    function buildOnepageLayout(snap, prefilledEmail) {
      var existing = document.getElementById('mm-layout');
      if (existing) {
        if (existing.parentElement !== mainArea) {
          mainArea.insertBefore(existing, mainArea.firstChild);
        }
        return existing;
      }
  
      var layout = document.createElement('div');
      layout.id = 'mm-layout';
      layout.classList.add('mm-id-layout');
      layout.classList.add('mm-op-layout');
  
      layout.innerHTML =
        renderCheckoutHeader('delivery') +
        '<div class="mm-grid mm-id-grid mm-op-grid">' +
          renderOnepageForm(prefilledEmail) +
          renderIdentifySummary(snap) +
        '</div>';
  
      mainArea.insertBefore(layout, mainArea.firstChild);
      document.body.classList.add('mm-checkout-rebuild');
      mainArea.classList.add('mm-shadow-mode');
      document.documentElement.classList.remove('mm-cart-loading');
      return layout;
    }
  
    /* ----- frete cálculo: usa Zord API se disponível, lê resultado do DOM Magazord ----- */
    function renderFreteResult(state) {
      var slot = document.getElementById('mm-op-frete-slot');
      if (!slot) return;
      if (state === 'loading') {
        slot.innerHTML =
          '<div class="mm-op-frete-loading">' +
            '<div class="mm-op-frete-spinner"></div>' +
            '<span>Calculando frete...</span>' +
          '</div>';
        return;
      }
      if (state === 'error') {
        slot.innerHTML =
          '<div class="mm-op-frete-error">' +
            '<span>Não conseguimos calcular o frete. Confira o CEP e tente novamente.</span>' +
          '</div>';
        return;
      }
      /* state = { value: number|0, deadline: string, name: string, city: string, options: array } */
      var isFree = state.value === 0;
      var valueLabel = isFree
        ? '<strong class="mm-op-frete-value is-free">Grátis</strong>'
        : '<strong class="mm-op-frete-value">' + formatBRL(state.value) + '</strong>';
      var nameLabel = state.name
        ? '<span class="mm-op-frete-name">' + escapeHTML(state.name) + '</span>'
        : '';
      var deadlineLabel = state.deadline
        ? '<span class="mm-op-frete-deadline">Entrega em ' + escapeHTML(state.deadline) + '</span>'
        : '';
      var cityLabel = state.city
        ? '<span class="mm-op-frete-city">para ' + escapeHTML(state.city) + '</span>'
        : '';
  
      /* Se tem múltiplas opções, mostra a selecionada + link "alterar" */
      var optionsHTML = '';
      if (state.options && state.options.length > 1) {
        optionsHTML =
          '<div class="mm-op-frete-options">' +
            '<button type="button" class="mm-op-frete-toggle" data-mm-act="toggle-frete-opts" aria-expanded="false">' +
              'Ver outras opções (' + state.options.length + ')' +
            '</button>' +
            '<div class="mm-op-frete-options-list" hidden>';
        for (var oi = 0; oi < state.options.length; oi++) {
          var opt = state.options[oi];
          var sel = opt.isSelected ? ' is-selected' : '';
          var ov = opt.isFree
            ? '<span class="mm-op-frete-opt-value is-free">Grátis</span>'
            : '<span class="mm-op-frete-opt-value">' + formatBRL(opt.value) + '</span>';
          optionsHTML +=
            '<button type="button" class="mm-op-frete-opt' + sel + '" data-mm-act="op-ship-select" data-ship-id="' + escapeHTML(opt.id) + '" aria-pressed="' + (opt.isSelected ? 'true' : 'false') + '">' +
              '<span class="mm-op-frete-opt-radio" aria-hidden="true"><span></span></span>' +
              '<span class="mm-op-frete-opt-body">' +
                '<span class="mm-op-frete-opt-name">' + escapeHTML(opt.name || 'Padrão') + '</span>' +
                (opt.deadline ? '<span class="mm-op-frete-opt-deadline">' + escapeHTML(opt.deadline) + '</span>' : '') +
              '</span>' +
              ov +
            '</button>';
        }
        optionsHTML += '</div></div>';
      }
  
      slot.innerHTML =
        '<div class="mm-op-frete-card' + (isFree ? ' is-free' : '') + '">' +
          '<div class="mm-op-frete-icon">' + ICON.truck + '</div>' +
          '<div class="mm-op-frete-body">' +
            '<div class="mm-op-frete-row">' +
              nameLabel +
              valueLabel +
            '</div>' +
            deadlineLabel +
            cityLabel +
          '</div>' +
        '</div>' +
        optionsHTML;
    }
  
    /* Lê frete do DOM Magazord — retorna { value, deadline, name, city, options[] }
       Suporta tanto cart (.frete-calculado com .servico-frete) quanto onepage
       (.info-frete-selec com .item-frete + .dias-entrega). */
    function readFreteFromDom() {
      function parseDeadline(text) {
        if (!text) return '';
        var m = text.match(/(\d+(?:\s*[aà]\s*\d+)?)\s*dias?(?:\s*\([^)]+\))?\s*([úu]teis)?/i);
        if (!m) return '';
        return m[1].replace(/\s+/g, ' ') + ' dias úteis';
      }
  
      /* Lê todas as opções de modalidade — funciona em qualquer página
         que tenha .frete-calculado com .servico-frete (cart e às vezes onepage) */
      function readOptions(scope) {
        var out = [];
        var servEls = scope.querySelectorAll('.servico-frete');
        for (var i = 0; i < servEls.length; i++) {
          var s = servEls[i];
          var radio = s.querySelector('input[type="radio"]');
          var prazoEl = s.querySelector('.dias-entrega');
          var valor = parseFloat(s.getAttribute('data-valor-frete') || '0');
          var nome = s.getAttribute('data-servico-frete') || '';
          var prazoText = prazoEl ? prazoEl.textContent.trim() : '';
          var pm = prazoText.match(/(\d+(?:\s*[aà]\s*\d+)?\s*dias?(?:\s*[úu]teis)?)/i);
          out.push({
            id: radio ? radio.value : '',
            name: nome,
            deadline: pm ? pm[1].replace(/\s+/g, ' ') : prazoText,
            value: valor,
            isFree: valor === 0,
            isSelected: radio ? radio.checked : false
          });
        }
        return out;
      }
  
      /* 1) .frete-calculado existe (cart + às vezes onepage com cálculo recente) */
      var freteEl = mainArea.querySelector('.frete-calculado');
      if (freteEl && freteEl.textContent.trim()) {
        var options = readOptions(freteEl);
        var cityEl = freteEl.querySelector('.frete-location .city');
        var city = cityEl ? cityEl.textContent.trim() : '';
        var selected = options.filter(function(o) { return o.isSelected; })[0] || options[0];
        if (selected) {
          return {
            value: selected.value,
            name: selected.name,
            deadline: selected.deadline,
            city: city,
            options: options
          };
        }
        /* Fallback: parse pelo .info-frete-selec se .servico-frete não existir */
        var infoTitle = freteEl.querySelector('.info-frete-selec .info-title span, .info-title span');
        var diasEl = freteEl.querySelector('.info-frete-selec .dias-entrega, .dias-entrega');
        var valEl = freteEl.querySelector('.value.valor-frete, .valor-frete .value');
        var rawTxt = freteEl.textContent;
        var val = null;
        if (valEl) {
          if (/gr[aá]tis/i.test(valEl.textContent)) val = 0;
          else val = parseBRL(valEl.textContent);
        }
        if (val === null) {
          if (/gr[aá]tis/i.test(rawTxt)) val = 0;
          else val = parseBRL(rawTxt) || null;
        }
        if (val !== null) {
          return {
            value: val,
            name: infoTitle ? infoTitle.textContent.trim() : '',
            deadline: diasEl ? parseDeadline(diasEl.textContent) : parseDeadline(rawTxt),
            city: city,
            options: []
          };
        }
      }
  
      /* 2) Onepage: .line-entrega (Magazord nativo, simples) — Magazord onepage
         só expõe o valor final, não as modalidades. Mergeia com snapshot pra
         recuperar nome/prazo/opções salvos pelo cart. */
      var lineEntrega = mainArea.querySelector('.line-entrega');
      var valorFreteEl = mainArea.querySelector('.value.valor-frete, .valor-frete .value');
      if (lineEntrega || valorFreteEl) {
        var fullText = ((lineEntrega || valorFreteEl).textContent || '').trim();
        var snap = loadCartSnapshot();
        var snapName = snap ? (snap.shippingName || '') : '';
        var snapDeadline = snap ? (snap.shippingDeadline || '') : '';
        var snapCity = snap ? (snap.shippingCity || '') : '';
        var snapOptions = snap ? (snap.shippingOptions || []) : [];
  
        if (fullText) {
          var nome2 = (mainArea.querySelector('.nome-servico-frete, .info-frete-selec .info-title span') || {}).textContent || '';
          var infoEntrega = (mainArea.querySelector('.info-entrega, .prazo-entrega, .line-entrega .sub, .info-frete-selec .dias-entrega') || {}).textContent || '';
          var deadline = parseDeadline(infoEntrega) || parseDeadline(fullText) || snapDeadline;
          var name = nome2.trim() || snapName;
          if (/gr[aá]tis/i.test(fullText)) return { value: 0, deadline: deadline, name: name, city: snapCity, options: snapOptions };
          var p = parseBRL(fullText);
          if (p > 0) return { value: p, deadline: deadline, name: name, city: snapCity, options: snapOptions };
        }
  
        /* fallback puro: usa snapshot se DOM existe mas vazio */
        if (snap && snap.shipping !== null && snap.shipping !== undefined) {
          return {
            value: snap.shipping,
            deadline: snapDeadline,
            name: snapName,
            city: snapCity,
            options: snapOptions
          };
        }
      }
  
      return null;
    }
  
    /* calcFreteOnepage — dedupe por CEP: só recalcula se o CEP mudou desde
       o último cálculo. Evita múltiplos polls concorrentes ao digitar número. */
    function calcFreteOnepage() {
      var cepInput = document.getElementById('mm-op-cep');
      if (!cepInput) return;
      var digits = (cepInput.value || '').replace(/\D/g, '');
      if (digits.length !== 8) return;
  
      /* Dedupe: se já calculamos pra este CEP e o resultado está no slot,
         não recalcula. Previne bug de keystroke no número disparar fetch. */
      if (calcFreteOnepage._lastCep === digits) {
        var slot = document.getElementById('mm-op-frete-slot');
        if (slot && slot.querySelector('.mm-op-frete-card')) return;
      }
      calcFreteOnepage._lastCep = digits;
  
      /* Token cancela polls anteriores — novo cálculo invalida o anterior */
      var myToken = (calcFreteOnepage._token || 0) + 1;
      calcFreteOnepage._token = myToken;
  
      saveCep(digits);
  
      var hidden = mainArea.querySelector('#cep, .input-cep');
      if (hidden) {
        hidden.value = formatCep(digits);
        triggerInputEvent(hidden);
      }
  
      renderFreteResult('loading');
  
      try {
        if (window.Zord && window.Zord.Cart && typeof window.Zord.Cart.calculaFreteCarrinho === 'function') {
          window.Zord.Cart.calculaFreteCarrinho();
        }
      } catch (e) {}
  
      var attempts = 0;
      var maxAttempts = 18;
      function pollFrete() {
        /* Cancelado por cálculo mais recente? aborta silenciosamente */
        if (calcFreteOnepage._token !== myToken) return;
        attempts++;
        var result = readFreteFromDom();
        if (result) {
          renderFreteResult(result);
          var snap = loadCartSnapshot();
          if (snap) {
            snap.shipping = result.value;
            snap.shippingDeadline = result.deadline;
            snap.shippingName = result.name || '';
            snap.shippingCity = result.city || '';
            snap.shippingOptions = result.options || [];
            STORAGE.set(CART_SNAPSHOT_KEY, JSON.stringify(snap));
            rehydrateIdentifySummary(snap);
          }
          return;
        }
        if (attempts < maxAttempts) {
          setTimeout(pollFrete, 350);
        } else {
          renderFreteResult('error');
        }
      }
      setTimeout(pollFrete, 400);
    }
  
    /* ----- bind eventos do onepage ----- */
    function bindOnepageEvents() {
      var layout = document.getElementById('mm-layout');
      if (!layout || layout._mmOpBound) return;
      layout._mmOpBound = true;
  
      /* Click handlers — frete options + toggle */
      layout.addEventListener('click', function(e) {
        var toggle = e.target.closest('[data-mm-act="toggle-frete-opts"]');
        if (toggle) {
          e.preventDefault();
          var list = toggle.parentElement.querySelector('.mm-op-frete-options-list');
          if (list) {
            var hidden = list.hasAttribute('hidden');
            if (hidden) list.removeAttribute('hidden'); else list.setAttribute('hidden', '');
            toggle.setAttribute('aria-expanded', hidden ? 'true' : 'false');
            toggle.textContent = hidden ? 'Ocultar opções' : 'Ver outras opções';
          }
          return;
        }
        var optBtn = e.target.closest('[data-mm-act="op-ship-select"]');
        if (optBtn) {
          e.preventDefault();
          var modId = optBtn.getAttribute('data-ship-id');
          if (!modId) return;
          var radio = mainArea.querySelector('.servico-frete input[type="radio"][value="' + modId + '"]');
          if (!radio) {
            console.warn('[mm-op] modalidade não encontrada no DOM:', modId);
            return;
          }
          /* Optimistic UI */
          var btns = layout.querySelectorAll('.mm-op-frete-opt');
          for (var i = 0; i < btns.length; i++) {
            var b = btns[i];
            var match = b.getAttribute('data-ship-id') === modId;
            b.classList.toggle('is-selected', match);
            b.setAttribute('aria-pressed', match ? 'true' : 'false');
          }
          radio.checked = true;
          radio.click();
          /* Re-poll the frete result após Magazord recalcular */
          setTimeout(function() {
            var result = readFreteFromDom();
            if (result) {
              renderFreteResult(result);
              var snap = loadCartSnapshot();
              if (snap) {
                snap.shipping = result.value;
                snap.shippingDeadline = result.deadline;
                snap.shippingName = result.name || '';
                snap.shippingOptions = result.options || [];
                STORAGE.set(CART_SNAPSHOT_KEY, JSON.stringify(snap));
                rehydrateIdentifySummary(snap);
              }
            }
          }, 700);
          return;
        }
      });
  
      /* Submit form principal */
      layout.addEventListener('submit', function(e) {
        var form = e.target.closest('[data-mm-act="onepage-submit"]');
        if (!form) return;
        e.preventDefault();
  
        var data = {
          email: (document.getElementById('mm-op-email') || {}).value || '',
          nome: (document.getElementById('mm-op-nome') || {}).value || '',
          cpf: (document.getElementById('mm-op-cpf') || {}).value || '',
          tel: (document.getElementById('mm-op-tel') || {}).value || '',
          cep: (document.getElementById('mm-op-cep') || {}).value || '',
          rua: (document.getElementById('mm-op-rua') || {}).value || '',
          num: (document.getElementById('mm-op-num') || {}).value || '',
          comp: (document.getElementById('mm-op-comp') || {}).value || '',
          bairro: (document.getElementById('mm-op-bairro') || {}).value || '',
          cidade: (document.getElementById('mm-op-cidade') || {}).value || '',
          uf: (document.getElementById('mm-op-uf') || {}).value || ''
        };
  
        /* Validação inline */
        var errors = [];
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.push('mm-op-email');
        if (data.nome.trim().split(/\s+/).length < 2) errors.push('mm-op-nome');
        if (data.cpf.replace(/\D/g, '').length !== 11) errors.push('mm-op-cpf');
        if (data.tel.replace(/\D/g, '').length < 10) errors.push('mm-op-tel');
        if (data.cep.replace(/\D/g, '').length !== 8) errors.push('mm-op-cep');
        if (!data.rua.trim()) errors.push('mm-op-rua');
        if (!data.num.trim()) errors.push('mm-op-num');
        if (!data.bairro.trim()) errors.push('mm-op-bairro');
        if (!data.cidade.trim()) errors.push('mm-op-cidade');
        if (!data.uf.trim()) errors.push('mm-op-uf');
  
        if (errors.length) {
          errors.forEach(function(id) {
            var el = document.getElementById(id);
            if (el) {
              el.classList.add('mm-input-error');
              setTimeout(function() { el.classList.remove('mm-input-error'); }, 1800);
            }
          });
          var first = document.getElementById(errors[0]);
          if (first) {
            first.focus();
            first.scrollIntoView({ block: 'center', behavior: 'smooth' });
          }
          return;
        }
  
        /* Loading state */
        var btn = form.querySelector('.mm-cta');
        if (btn) btn.classList.add('is-loading');
  
        /* Persistir email + checkoutmode pra próxima etapa */
        STORAGE.set('mm_user_email', data.email.trim());
  
        /* NÃO limpa draft aqui — usuário pode voltar pro onepage e ainda
           deve encontrar seus dados preenchidos. Draft expira em 24h ou
           é limpo em /checkout/done quando o pedido é confirmado. */
  
        /* Copiar values pros inputs Magazord originais */
        submitOnepageToMagazord(data);
      });
  
      /* Auto-fill via CEP — quando user preenche CEP completo */
      layout.addEventListener('input', function(e) {
        var t = e.target;
        if (!t) return;
        if (t.id === 'mm-op-cpf') {
          t.value = maskCPF(t.value);
        } else if (t.id === 'mm-op-tel') {
          t.value = maskPhone(t.value);
        } else if (t.id === 'mm-op-cep') {
          t.value = maskCEP(t.value);
          var digits = t.value.replace(/\D/g, '');
          if (digits.length === 8) {
            handleCepComplete(digits);
          }
        } else if (t.id === 'mm-op-uf') {
          t.value = (t.value || '').replace(/[^A-Za-z]/g, '').toUpperCase().slice(0, 2);
        }
        /* Nota: NÃO recalcula frete no input número — o CEP já é suficiente
           pro Magazord calcular (o número influencia só a entrega física,
           não o valor/prazo do frete). Recalcular a cada keystroke causava
           múltiplos polls concorrentes e prazo perdido. Dedupe em calcFreteOnepage
           + trigger único no handleCepComplete resolvem o problema. */
  
        /* Persiste draft do form (debounced 400ms) */
        if (t.id && t.id.indexOf('mm-op-') === 0) {
          if (bindOnepageEvents._draftTimer) clearTimeout(bindOnepageEvents._draftTimer);
          bindOnepageEvents._draftTimer = setTimeout(saveOnepageDraft, 400);
        }
      });
  
      /* Flush imediato em blur + beforeunload — cobre reloads rápidos
         e navegações antes do debounce disparar. */
      function flushDraftSave() {
        if (bindOnepageEvents._draftTimer) {
          clearTimeout(bindOnepageEvents._draftTimer);
          bindOnepageEvents._draftTimer = null;
        }
        saveOnepageDraft();
      }
      layout.addEventListener('blur', function(e) {
        var t = e.target;
        if (t && t.id && t.id.indexOf('mm-op-') === 0) flushDraftSave();
      }, true);
      window.addEventListener('beforeunload', flushDraftSave);
    }
  
    /* CEP completo: dispara ViaCEP fetch + auto-fill + cálculo de frete */
    function handleCepComplete(digits) {
      var statusEl = document.getElementById('mm-op-cep-status');
      if (statusEl) {
        statusEl.className = 'mm-input-status is-loading';
        statusEl.textContent = 'Buscando...';
      }
      fetchViaCep(digits, function(data) {
        if (statusEl) statusEl.className = 'mm-input-status';
        if (!data) {
          if (statusEl) {
            statusEl.className = 'mm-input-status is-error';
            statusEl.textContent = 'CEP não encontrado';
            setTimeout(function() {
              statusEl.className = 'mm-input-status';
              statusEl.textContent = '';
            }, 2500);
          }
          return;
        }
        if (statusEl) {
          statusEl.className = 'mm-input-status is-ok';
          statusEl.innerHTML = ICON.check;
          setTimeout(function() {
            statusEl.className = 'mm-input-status';
            statusEl.innerHTML = '';
          }, 1800);
        }
        /* Auto-fill */
        var fields = [
          ['mm-op-rua', data.logradouro],
          ['mm-op-bairro', data.bairro],
          ['mm-op-cidade', data.cidade],
          ['mm-op-uf', data.estado]
        ];
        fields.forEach(function(pair) {
          var el = document.getElementById(pair[0]);
          if (el && pair[1] && !el.value) el.value = pair[1];
        });
        /* Foca no número (próximo campo lógico) */
        var num = document.getElementById('mm-op-num');
        if (num) setTimeout(function() { num.focus(); }, 100);
  
        /* Dispara cálculo de frete imediato (não espera número) */
        if (calcFreteOnepage._t) clearTimeout(calcFreteOnepage._t);
        calcFreteOnepage._t = setTimeout(calcFreteOnepage, 200);
      });
    }
  
    /* Submit final: estratégia híbrida.
       1. Preenche TODOS os fields Magazord (anonymous _3 + PF _2 + endereço)
       2. Mostra overlay fullscreen "Processando..."
       3. Remove shadow-mode + hide #mm-layout (Magazord original visible offscreen)
       4. Clica no button visible "Próxima etapa" do Magazord
       5. Magazord JS faz toda a chain interna (POSTs + cliques + navegação)
       6. Overlay persiste até /payment carregar
  
       Por que essa abordagem: o Magazord JS interno tem callbacks complexos
       (animações fade, validação, fingerprint, sessão state) que são frágeis
       pra replicar via fetch direto. Deixar o Magazord rodar nativo é robusto. */
    function showSubmitOverlay(message) {
      if (document.getElementById('mm-op-overlay')) return;
      var overlay = document.createElement('div');
      overlay.id = 'mm-op-overlay';
      overlay.innerHTML =
        '<div class="mm-op-overlay-card">' +
          '<div class="mm-op-overlay-spinner"></div>' +
          '<p class="mm-op-overlay-text">' + escapeHTML(message || 'Processando...') + '</p>' +
        '</div>';
      document.body.appendChild(overlay);
    }
  
    function submitOnepageToMagazord(data) {
      var nomeT = data.nome.trim();
      var emailT = data.email.trim();
      var ruaT = data.rua.trim();
      var bairroT = data.bairro.trim();
      var cidadeT = data.cidade.trim();
      var ufT = data.uf.trim();
      var cepF = formatCep(data.cep.replace(/\D/g, ''));
  
      /* Persiste pra próximas telas */
      STORAGE.set('mm_user_email', emailT);
  
      var setVal = function(sel, value) {
        var el = mainArea.querySelector(sel);
        if (!el) return false;
        try {
          var nativeSet = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
          nativeSet.call(el, value);
        } catch (e) { el.value = value; }
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
        el.dispatchEvent(new Event('blur', { bubbles: true }));
        return true;
      };
  
      /* IDs do form anonymous (Compra sem cadastro) — anonymous flow tem
         sufixos mistos: nome/cpf/tel = _2, email = _3 */
      setVal('#nome-completo_2', nomeT);
      setVal('#cpf_2', data.cpf);
      setVal('#email_3', emailT);
      setVal('#telefone_2', data.tel);
  
      /* Form de endereço — todos sem sufixo, plus #destinatario que é
         específico do form endereço (mesmo valor que nome) */
      setVal('#cep', cepF);
      setVal('#destinatario', nomeT);
      setVal('#logradouro', ruaT);
      setVal('#numero', data.num);
      setVal('#complemento', data.comp);
      setVal('#bairro', bairroT);
      setVal('#cidade', cidadeT);
      setVal('#estado', ufT);
  
      /* Show overlay loading fullscreen */
      showSubmitOverlay('Indo para o pagamento...');
  
      /* Hide nosso layout + remove shadow-mode pra Magazord ficar no flow
         normal (overlay esconde visualmente). Magazord JS roda a chain
         interna nativa (form transitions + POSTs + navegação). */
      setTimeout(function() {
        var layout = document.getElementById('mm-layout');
        if (layout) layout.style.display = 'none';
        mainArea.classList.remove('mm-shadow-mode');
  
        /* Helper: encontra form ATUALMENTE visible que contém um input
           específico (ID conhecido por ser sempre presente naquele step) */
        function findFormByInputId(id) {
          var input = mainArea.querySelector('#' + id);
          if (!input) return null;
          return input.closest('form');
        }
  
        /* STEP 1 — submit form anonymous (dados pessoais).
           requestSubmit() é mais robusto que btn.click() porque dispara o
           submit handler nativo do form, que o Magazord JS escuta. */
        function submitStep1() {
          var f1 = findFormByInputId('nome-completo_2');
          if (f1 && typeof f1.requestSubmit === 'function') {
            f1.requestSubmit();
            return true;
          }
          if (f1) { f1.submit(); return true; }
          return false;
        }
  
        /* STEP 2/3 — submit form de endereço. O CEP pode estar num form
           intermediário (button-cep "Continuar") ou no form completo de
           endereço (button-endereco "Cadastrar endereço"). Tentamos
           requestSubmit em qualquer form que contenha #cep. */
        function submitEnderecoForm() {
          var f = findFormByInputId('cep');
          if (f && typeof f.requestSubmit === 'function') {
            f.requestSubmit();
            return true;
          }
          if (f) { f.submit(); return true; }
          return false;
        }
  
        setTimeout(function() {
          submitStep1();
  
          /* Aguarda ~1.5s pro POST etapa 1 + DOM transition pra etapa 2 */
          setTimeout(function() {
            submitEnderecoForm();
  
            /* Aguarda Magazord chegar no step 3 (pagamento — forma-pagto-pix
               aparece). NÃO navegamos pra /checkout/payment porque o flow
               Magazord onepage tem dados + endereço + pagamento INLINE
               na mesma URL — /checkout/payment é só a tela de processing/done.
  
               Quando detectamos os radios de pagamento → Fase 4 hijack:
               re-ativa shadow-mode + re-renderiza #mm-layout com nosso
               step 3 premium (radios PIX/cartão/boleto, cartão form inline,
               botão Finalizar compra). Os forms nativos Magazord ficam
               hidden atrás, sincronizamos valores via native setter e
               delegamos o submit final pra form.requestSubmit(). */
            var paymentDetectAttempts = 0;
            function pollForPaymentStep() {
              paymentDetectAttempts++;
              var paymentRadio = document.querySelector('input[name="forma-pagto"], #forma-pagto-pix, #forma-pagto-cartao, #forma-pagto-boleto');
              if (paymentRadio && paymentRadio.offsetParent !== null) {
                /* Magazord chegou no step 3 — hijack pra nosso layout premium */
                try {
                  mountStep3Payment(data);
                } catch (e) {
                  /* Fallback: se o hijack falhar, remove overlay e deixa o
                     user no Magazord native (degradação graceful) */
                  var ovErr = document.getElementById('mm-op-overlay');
                  if (ovErr) ovErr.remove();
                  var layoutErr = document.getElementById('mm-layout');
                  if (layoutErr) layoutErr.style.display = 'none';
                }
                return;
              }
              if (paymentDetectAttempts < 30) {
                setTimeout(pollForPaymentStep, 250);
              } else {
                /* Timeout — algo deu errado, remove overlay mesmo assim
                   pra user não ficar travado na tela de loading */
                var ov2 = document.getElementById('mm-op-overlay');
                if (ov2) ov2.remove();
              }
            }
            setTimeout(pollForPaymentStep, 800);
          }, 1500);
        }, 150);
      }, 100);
    }
  
    /* =============================================
       FASE 4 — Step 3 Payment (inline no /onepage)
       =============================================
       Hijack quando Magazord chega no step 3 de pagamento. Re-renderiza
       #mm-layout com UI premium: radios PIX/cartão/boleto, cartão form com
       auto-detect de bandeira + parcelas sincronizadas com Zord, summary
       lateral com total dinâmico por forma selecionada, trust máximo.
  
       Mental models aplicados:
       - Goal-gradient: stepper "Pagamento" ativo + copy "última etapa"
       - Loss aversion: PIX badge "Economize R$ X" + anchor no cartão
       - Default effect: PIX pre-selecionado (respeita Zord default)
       - Progressive disclosure: cartão form só expande quando ativo
       - Commitment & consistency: summary lateral reforça passos concluídos
       - Regret aversion: trust signals + garantia próximos ao CTA
       ========================================== */
  
    /* Lê Zord.Calculo.FormasPagamentoPedido e consolida info por forma.
       Retorna objeto { pix: {...}, cartao: {...}, boleto: {...} } com
       preços, parcelas e condições — robusto a estruturas variáveis.
  
       Estratégia de detecção ROBUSTA (2 passadas):
       1) Cartão: isCartao=true (pode ter múltiplos gateways — pega o mais rico)
       2) PIX / Boleto: ambos têm isCartao=false e label "À Vista" genérico,
          então NÃO dá pra distinguir por nome. Usamos fonte confiável: DOM
          do Magazord native — o forma-pagto-pix radio tem o valorTotal real
          e o forma-pagto-boleto também. Linkamos cada forma Magazord ao
          id do Zord por meio do data-pagamento-tipo ou pelo form[name]. */
    function readFormasPagamento() {
      var out = { pix: null, cartao: null, boleto: null };
      var list = [];
      try {
        list = (window.Zord && window.Zord.Calculo && window.Zord.Calculo.FormasPagamentoPedido) || [];
      } catch (e) {}
  
      /* Cartão: iteração por isCartao flag */
      list.forEach(function(fp) {
        var formaId = fp.formaPagamento && fp.formaPagamento.id;
        var isCartao = fp.formaPagamento && fp.formaPagamento.isCartao;
        var condicoes = fp.condicoes || [];
        if (!condicoes.length || !isCartao) return;
  
        if (!out.cartao || condicoes.length > out.cartao.condicoes.length) {
          out.cartao = {
            formaId: formaId,
            valorTotal: condicoes[0].valorTotal,
            condicoes: condicoes.map(function(c) {
              return {
                nome: c.condicaoPagamento && c.condicaoPagamento.nome,
                numParcelas: c.condicaoPagamento && c.condicaoPagamento.numeroParcelas,
                valorParcela: c.valorParcela,
                valorTotal: c.valorTotal
              };
            })
          };
        }
      });
  
      /* PIX: fonte primária = DOM Magazord (#valor-total-pedido-pix ou
         data-valor-total no elemento PIX). Fonte secundária = Zord list
         com formaId=17 (id padrão Magazord pra PIX). */
      function parseValorFromEl(el) {
        if (!el) return 0;
        var dv = el.getAttribute && el.getAttribute('data-valor-total');
        if (dv) { var v = parseFloat(dv); if (v > 0) return v; }
        var txt = (el.textContent || '').replace(/[^\d,.]/g, '');
        /* BRL: "1.234,56" → "1234.56" */
        if (txt.indexOf(',') !== -1) {
          txt = txt.replace(/\./g, '').replace(',', '.');
        }
        return parseFloat(txt) || 0;
      }
  
      /* PIX real: lê do form nativo pix */
      var pixEl = document.querySelector('#valor-total-pedido-pix, .valor-total-pix[data-valor-total]');
      var pixVal = parseValorFromEl(pixEl);
      if (pixVal > 0) {
        out.pix = { formaId: 17, valorTotal: pixVal };
      } else {
        /* Fallback: Zord list id=17 */
        var pixFp = list.find && list.find(function(fp) {
          return fp.formaPagamento && fp.formaPagamento.id === 17;
        });
        if (pixFp && pixFp.condicoes && pixFp.condicoes[0]) {
          out.pix = { formaId: 17, valorTotal: pixFp.condicoes[0].valorTotal };
        }
      }
  
      /* BOLETO real: lê do form nativo boleto */
      var boletoEl = document.querySelector('#valor-total-pedido-boleto, .valor-total-boleto[data-valor-total]');
      var boletoVal = parseValorFromEl(boletoEl);
      if (boletoVal > 0) {
        out.boleto = { valorTotal: boletoVal };
      } else {
        /* Fallback: Zord list — primeiro não-cartão, não-id-17 */
        var bolFp = list.find && list.find(function(fp) {
          var fpId = fp.formaPagamento && fp.formaPagamento.id;
          var fpCart = fp.formaPagamento && fp.formaPagamento.isCartao;
          return !fpCart && fpId !== 17 && fp.condicoes && fp.condicoes.length;
        });
        if (bolFp) {
          out.boleto = { formaId: bolFp.formaPagamento.id, valorTotal: bolFp.condicoes[0].valorTotal };
        }
      }
  
      /* Cartão fallback: se não pegou da Zord list, pega do DOM */
      if (!out.cartao) {
        var carEl = document.querySelector('.valor-parcela-cartao');
        if (carEl) {
          var parcNum = parseValorFromEl(carEl);
          if (parcNum > 0) {
            out.cartao = { valorTotal: parcNum * 12, condicoes: [] };
          }
        }
      }
  
      return out;
    }
  
    /* Hijack principal: re-ativa shadow-mode + re-renderiza #mm-layout
       com o step 3 payment UI + bind de eventos. */
    function mountStep3Payment(userData) {
      var snap = loadCartSnapshot();
      var formas = readFormasPagamento();
  
      /* Re-ativa shadow-mode (tinha sido removido no submit chain) */
      mainArea.classList.add('mm-shadow-mode');
      document.body.classList.add('mm-checkout-rebuild');
  
      /* Rebuild layout — CRÍTICO: sempre garantir que o mm-layout seja
         filho DIRETO do mainArea (não dentro de .container). O CSS
         mm-shadow-mode joga > * offscreen, então se o layout estiver
         wrapped em .container, ele vai offscreen junto. Magazord
         re-renderiza o mainArea na transição pro step 3 — o layout
         existente pode ter sido removido ou reparentado. */
      var layout = document.getElementById('mm-layout');
      if (!layout || layout.parentElement !== mainArea) {
        if (layout && layout.parentElement) {
          layout.parentElement.removeChild(layout);
        }
        layout = document.createElement('div');
        layout.id = 'mm-layout';
        mainArea.insertBefore(layout, mainArea.firstChild);
      }
      layout.className = 'mm-op-layout mm-op-step3-layout';
      layout.style.display = '';
      layout.innerHTML = buildStep3Layout(snap, userData, formas);
  
      /* Remove anti-flicker class se ainda ativa */
      document.documentElement.classList.remove('mm-cart-loading');
  
      /* Remove overlay */
      var ov = document.getElementById('mm-op-overlay');
      if (ov) ov.remove();
  
      /* Scroll top pra user ver header + stepper */
      try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { window.scrollTo(0, 0); }
  
      bindStep3Events(userData, formas);
    }
  
    function buildStep3Layout(snap, userData, formas) {
      var footerHTML = typeof renderGlobalFooter === 'function' ? renderGlobalFooter() : '';
  
      /* Layout 2-col: payment card sozinho à esquerda, direita com
         dados + endereço + resumo empilhados (mesma coluna do resumo). */
      return (
        renderCheckoutHeader('payment') +
        '<main class="mm-op-main">' +
          '<div class="mm-op-step3-grid">' +
            '<section class="mm-op-step3-left">' +
              renderStep3PaymentCard(formas) +
              renderStep3TrustFooter() +
            '</section>' +
            '<aside class="mm-op-step3-sum-wrap">' +
              renderStep3CompletedCards(userData) +
              renderStep3Summary(snap, formas, 'pix') +
            '</aside>' +
          '</div>' +
        '</main>' +
        footerHTML
      );
    }
  
    function renderStep3CompletedCards(userData) {
      var u = userData || {};
      var nome = escapeHTML(u.nome || '');
      var email = escapeHTML(u.email || '');
      var cpf = escapeHTML(u.cpf || '');
      var tel = escapeHTML(u.tel || '');
      var rua = escapeHTML(u.rua || '');
      var num = escapeHTML(u.num || '');
      var comp = u.comp ? ', ' + escapeHTML(u.comp) : '';
      var bairro = escapeHTML(u.bairro || '');
      var cidade = escapeHTML(u.cidade || '');
      var uf = escapeHTML(u.uf || '');
      var cep = escapeHTML(u.cep || '');
  
      return (
        '<div class="mm-op-step3-completed">' +
          '<div class="mm-op-completed-card" data-section="dados">' +
            '<div class="mm-op-completed-head">' +
              '<span class="mm-op-completed-check">' + ICON.check + '</span>' +
              '<h3 class="mm-op-completed-title">Dados pessoais</h3>' +
              '<a href="/checkout/onepage" class="mm-op-completed-edit" data-mm-act="edit-dados" aria-label="Editar dados">' + ICONS_OP.editPencil + ' Editar</a>' +
            '</div>' +
            '<dl class="mm-op-completed-body">' +
              (nome ? '<div><dt>Nome</dt><dd>' + nome + '</dd></div>' : '') +
              (email ? '<div><dt>E-mail</dt><dd>' + email + '</dd></div>' : '') +
              (cpf ? '<div><dt>CPF</dt><dd>' + cpf + '</dd></div>' : '') +
              (tel ? '<div><dt>Telefone</dt><dd>' + tel + '</dd></div>' : '') +
            '</dl>' +
          '</div>' +
          '<div class="mm-op-completed-card" data-section="endereco">' +
            '<div class="mm-op-completed-head">' +
              '<span class="mm-op-completed-check">' + ICON.check + '</span>' +
              '<h3 class="mm-op-completed-title">Endereço de entrega</h3>' +
              '<a href="/checkout/onepage" class="mm-op-completed-edit" data-mm-act="edit-endereco" aria-label="Editar endereço">' + ICONS_OP.editPencil + ' Editar</a>' +
            '</div>' +
            '<address class="mm-op-completed-address">' +
              rua + ', ' + num + comp + '<br>' +
              bairro + ' — ' + cidade + '/' + uf + '<br>' +
              (cep ? 'CEP ' + cep : '') +
            '</address>' +
          '</div>' +
        '</div>'
      );
    }
  
    function renderStep3PaymentCard(formas) {
      var pixVal = formas.pix ? formas.pix.valorTotal : 0;
      var cartaoVal = formas.cartao ? formas.cartao.valorTotal : 0;
      var boletoVal = formas.boleto ? formas.boleto.valorTotal : 0;
      var save = cartaoVal > pixVal ? cartaoVal - pixVal : 0;
  
      /* Parcelas label do cartão: última condição (normalmente 12x sem juros) */
      var maxParcela = null;
      if (formas.cartao && formas.cartao.condicoes && formas.cartao.condicoes.length) {
        maxParcela = formas.cartao.condicoes[formas.cartao.condicoes.length - 1];
      }
      var cartaoSub = maxParcela
        ? 'até ' + maxParcela.numParcelas + 'x de ' + formatBRL(maxParcela.valorParcela) + ' sem juros'
        : (cartaoVal > 0 ? 'até 12x sem juros' : 'Cartão de crédito');
  
      var pixRadio =
        '<label class="mm-op-pay-radio is-active" data-forma="pix">' +
          '<input type="radio" name="mm-pay" value="pix" checked>' +
          '<div class="mm-op-pay-head">' +
            '<span class="mm-op-pay-radio-dot" aria-hidden="true"></span>' +
            '<span class="mm-op-pay-icon">' + ICONS_OP.pix + '</span>' +
            '<div class="mm-op-pay-body">' +
              '<span class="mm-op-pay-title">PIX</span>' +
              '<span class="mm-op-pay-sub">Aprovação instantânea · em 1 minuto</span>' +
            '</div>' +
            '<div class="mm-op-pay-price">' +
              (save > 0 ? '<span class="mm-op-pay-badge-save">Economize ' + formatBRL(save) + '</span>' : '') +
              '<span class="mm-op-pay-amount">' + formatBRL(pixVal) + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="mm-op-pay-detail">' +
            /* Desconto já aparece 2x (badge no header + row no resumo) —
               não duplicar aqui. Só benefícios úteis. */
            '<ul class="mm-op-pay-benefits">' +
              '<li>' + ICON.check + '<span>QR Code e Copia-e-Cola após confirmar</span></li>' +
              '<li>' + ICON.check + '<span>Pedido aprovado em até 1 minuto</span></li>' +
              '<li>' + ICON.check + '<span>Pagamento 100% seguro · sem dados de cartão</span></li>' +
            '</ul>' +
          '</div>' +
        '</label>';
  
      var bandeirasHTML =
        '<div class="mm-op-pay-brands">' +
          '<img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-visa.svg" alt="Visa" width="32" height="20">' +
          '<img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-mastercard.svg" alt="Mastercard" width="32" height="20">' +
          '<img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-american-express.svg" alt="American Express" width="32" height="20">' +
          '<img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-elo.svg" alt="Elo" width="32" height="20">' +
          '<img src="https://public-resources.zordcdn.com.br/assets/global/payment-vector/cartao-hipercard.svg" alt="Hipercard" width="32" height="20">' +
        '</div>';
  
      /* Required asterisk helper — sinaliza campos obrigatórios sem poluir */
      var req = '<span class="mm-op-req" aria-hidden="true">*</span>';
      /* Error slot template — pra cada campo, um <span> aria-live com msg específica on blur */
      function errSlot(id) {
        return '<span class="mm-op-field-err" id="' + id + '-err" role="alert" aria-live="polite"></span>';
      }
  
      /* Estado inicial: PIX ativo, cartão inativo → inputs do cartão começam
         disabled + autocomplete="off" pra não serem preenchidos pelo
         Bitwarden/password managers. setActiveForma habilita quando o user
         escolhe cartão. (Os data-* guardam o autocomplete original.) */
      var cartaoForm =
        '<div class="mm-op-card-form">' +
          '<div class="mm-op-card-field mm-op-card-field-full">' +
            '<label for="mm-pay-card-num">Número do cartão' + req + '</label>' +
            '<div class="mm-input-wrap mm-input-wrap-card">' +
              '<span class="mm-input-icon" aria-hidden="true">' + ICON.card + '</span>' +
              '<input id="mm-pay-card-num" type="tel" class="mm-input" inputmode="numeric" autocomplete="off" data-mmac="cc-number" placeholder="0000 0000 0000 0000" maxlength="23" aria-describedby="mm-pay-card-num-err" aria-required="true" disabled>' +
              '<span class="mm-op-card-brand-detected" aria-live="polite"></span>' +
            '</div>' +
            errSlot('mm-pay-card-num') +
          '</div>' +
          '<div class="mm-op-card-field mm-op-card-field-full">' +
            '<label for="mm-pay-card-name">Nome impresso no cartão' + req + '</label>' +
            '<input id="mm-pay-card-name" type="text" class="mm-input mm-input-noicon" autocomplete="off" data-mmac="cc-name" placeholder="Como aparece no cartão" maxlength="100" aria-describedby="mm-pay-card-name-err" aria-required="true" disabled>' +
            errSlot('mm-pay-card-name') +
          '</div>' +
          '<div class="mm-op-card-field mm-op-card-field-half">' +
            '<label for="mm-pay-card-exp">Validade' + req + '</label>' +
            '<input id="mm-pay-card-exp" type="tel" class="mm-input mm-input-noicon" inputmode="numeric" autocomplete="off" data-mmac="cc-exp" placeholder="MM/AA" maxlength="5" aria-describedby="mm-pay-card-exp-err" aria-required="true" disabled>' +
            errSlot('mm-pay-card-exp') +
          '</div>' +
          '<div class="mm-op-card-field mm-op-card-field-half">' +
            '<label for="mm-pay-card-cvv">CVV' + req + '</label>' +
            '<input id="mm-pay-card-cvv" type="tel" class="mm-input mm-input-noicon" inputmode="numeric" autocomplete="off" data-mmac="cc-csc" placeholder="000" maxlength="4" aria-describedby="mm-pay-card-cvv-err" aria-required="true" disabled>' +
            errSlot('mm-pay-card-cvv') +
          '</div>' +
          '<div class="mm-op-card-field mm-op-card-field-full">' +
            '<label for="mm-pay-card-installments">Condições de pagamento' + req + '</label>' +
            '<select id="mm-pay-card-installments" class="mm-input mm-input-noicon mm-op-card-installments" aria-describedby="mm-pay-card-installments-err" aria-required="true" disabled>' +
              '<option value="">Digite o cartão pra ver as condições</option>' +
            '</select>' +
            errSlot('mm-pay-card-installments') +
          '</div>' +
        '</div>';
  
      var cartaoRadio =
        '<label class="mm-op-pay-radio" data-forma="cartao">' +
          '<input type="radio" name="mm-pay" value="cartao">' +
          '<div class="mm-op-pay-head">' +
            '<span class="mm-op-pay-radio-dot" aria-hidden="true"></span>' +
            '<span class="mm-op-pay-icon">' + ICONS_OP.cardBig + '</span>' +
            '<div class="mm-op-pay-body">' +
              '<span class="mm-op-pay-title">Cartão de Crédito</span>' +
              '<span class="mm-op-pay-sub">' + escapeHTML(cartaoSub) + '</span>' +
            '</div>' +
            '<div class="mm-op-pay-price">' +
              '<span class="mm-op-pay-amount">' + formatBRL(cartaoVal) + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="mm-op-pay-detail">' +
            bandeirasHTML +
            cartaoForm +
          '</div>' +
        '</label>';
  
      var boletoRadio =
        '<label class="mm-op-pay-radio" data-forma="boleto">' +
          '<input type="radio" name="mm-pay" value="boleto">' +
          '<div class="mm-op-pay-head">' +
            '<span class="mm-op-pay-radio-dot" aria-hidden="true"></span>' +
            '<span class="mm-op-pay-icon">' + ICONS_OP.barcode + '</span>' +
            '<div class="mm-op-pay-body">' +
              '<span class="mm-op-pay-title">Boleto Bancário</span>' +
              '<span class="mm-op-pay-sub">Aprovação em 1 a 3 dias úteis</span>' +
            '</div>' +
            '<div class="mm-op-pay-price">' +
              '<span class="mm-op-pay-amount">' + formatBRL(boletoVal) + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="mm-op-pay-detail">' +
            /* Prazo já aparece no sub do header ("Aprovação em 1 a 3 dias úteis")
               — sem warning duplicado. Só benefícios úteis. */
            '<ul class="mm-op-pay-benefits">' +
              '<li>' + ICON.check + '<span>Código de barras enviado por e-mail</span></li>' +
              '<li>' + ICON.check + '<span>Pagamento em banco, lotérica ou app</span></li>' +
              '<li>' + ICON.check + '<span>Vencimento em 3 dias úteis</span></li>' +
            '</ul>' +
          '</div>' +
        '</label>';
  
      return (
        '<section class="mm-op-step3-card" aria-labelledby="mm-op-step3-h">' +
          '<div class="mm-op-step3-heading">' +
            '<h2 id="mm-op-step3-h" class="mm-h">Como você quer pagar?</h2>' +
            '<p class="mm-op-step3-sub">Última etapa · escolha sua forma de pagamento ' +
              (save > 0 ? '· PIX tem desconto de ' + formatBRL(save) : '') +
            '</p>' +
          '</div>' +
          '<div class="mm-op-pay-radios" role="radiogroup" aria-label="Forma de pagamento">' +
            pixRadio +
            cartaoRadio +
            boletoRadio +
          '</div>' +
          '<button type="button" class="mm-cta mm-op-cta mm-op-finalizar" data-mm-act="finalizar-compra">' +
            ICON.lock +
            '<span class="mm-op-finalizar-label">Finalizar compra · ' + formatBRL(pixVal) + '</span>' +
          '</button>' +
          '<p class="mm-op-finalizar-sub">' +
            ICON.shield +
            '<span>Pagamento seguro · criptografia SSL-256 · seus dados não são armazenados</span>' +
          '</p>' +
        '</section>'
      );
    }
  
    function renderStep3TrustFooter() {
      return (
        '<div class="mm-op-trust-payment">' +
          '<div class="mm-op-trust-payment-row">' +
            '<span class="mm-trust-item">' + ICON.lock + '<span>Site 100% seguro</span></span>' +
            '<span class="mm-trust-item">' + ICON.shield + '<span>Garantia 12 meses</span></span>' +
            '<span class="mm-trust-item">' + ICON.rotate + '<span>7 dias pra trocar</span></span>' +
            '<span class="mm-trust-item">' + ICON.whats + '<span>Atendimento humano</span></span>' +
          '</div>' +
          '<p class="mm-op-trust-payment-note">Ao finalizar, você concorda com os ' +
            '<a href="/termos-de-uso" target="_blank" rel="noopener">termos de compra</a> e a ' +
            '<a href="/politica-privacidade" target="_blank" rel="noopener">política de privacidade</a>.' +
          '</p>' +
        '</div>'
      );
    }
  
    /* Summary lateral do step 3 — reaproveita renderIdentifySummary e sobrepõe
       o total baseado na forma ativa (PIX mostra com desconto, cartão/boleto
       mostra valor cheio). Usa um wrapper com .mm-op-step3-sum e data-forma
       pra CSS/JS destacar a opção ativa. */
    function renderStep3Summary(snap, formas, activeForma) {
      if (!snap || !snap.items || !snap.items.length) {
        return (
          '<aside class="mm-id-sum mm-sum mm-op-step3-sum">' +
            '<h2 class="mm-h">Resumo</h2>' +
            '<div class="mm-sum-card">' +
              '<p class="mm-sum-empty">Não conseguimos carregar o resumo do seu pedido.</p>' +
            '</div>' +
          '</aside>'
        );
      }
  
      var pixVal = formas.pix ? formas.pix.valorTotal : 0;
      var cartaoVal = formas.cartao ? formas.cartao.valorTotal : 0;
      var boletoVal = formas.boleto ? formas.boleto.valorTotal : 0;
      var save = cartaoVal > pixVal ? cartaoVal - pixVal : 0;
  
      /* Total dinâmico por forma */
      var activeTotal = activeForma === 'pix' ? pixVal : (activeForma === 'boleto' ? boletoVal : cartaoVal);
      var activeLabel = activeForma === 'pix' ? 'no PIX' : (activeForma === 'boleto' ? 'no boleto' : 'no cartão');
  
      /* Thumbs (até 3) */
      var maxThumbs = 3;
      var displayItems = snap.items.slice(0, maxThumbs);
      var extraCount = snap.items.length - maxThumbs;
      var thumbsHTML = displayItems.map(function(it) {
        var img = it.imgSrc
          ? '<img src="' + escapeHTML(it.imgSrc) + '" alt="' + escapeHTML(it.name) + '" loading="lazy">'
          : '<div class="mm-id-thumb-placeholder">' + ICON.box + '</div>';
        var qtyPrefix = it.quantity > 1 ? '<strong class="mm-id-thumb-qty">' + it.quantity + '×</strong> ' : '';
        var price = it.lineTotalPix > 0 ? it.lineTotalPix : it.lineTotal;
        return (
          '<div class="mm-id-thumb">' +
            '<div class="mm-id-thumb-img">' + img + '</div>' +
            '<div class="mm-id-thumb-body">' +
              '<p class="mm-id-thumb-name">' + qtyPrefix + escapeHTML(it.name) + '</p>' +
              (it.variant ? '<p class="mm-id-thumb-variant">' + escapeHTML(it.variant) + '</p>' : '') +
            '</div>' +
            '<div class="mm-id-thumb-price">' + formatBRL(price) + '</div>' +
          '</div>'
        );
      }).join('');
      if (extraCount > 0) {
        thumbsHTML += '<div class="mm-id-thumb-more">+ ' + extraCount + ' ' + (extraCount === 1 ? 'item' : 'itens') + ' a mais</div>';
      }
  
      /* Rows subtotal + frete + desconto */
      var subtotalFull = snap.subtotalFull > 0 ? snap.subtotalFull : snap.subtotalPix;
      var rows =
        '<div class="mm-row">' +
          '<span class="mm-row-label">Subtotal</span>' +
          '<span class="mm-row-value">' + formatBRL(subtotalFull) + '</span>' +
        '</div>';
      if (snap.shipping !== null && snap.shipping !== undefined) {
        var freteValue = snap.shipping === 0
          ? '<span class="mm-row-value is-free">' + ICON.check + ' Grátis</span>'
          : '<span class="mm-row-value">' + formatBRL(snap.shipping) + '</span>';
        rows +=
          '<div class="mm-row">' +
            '<span class="mm-row-label">Frete' +
              (snap.shippingDeadline ? ' <span class="mm-row-sub">· ' + escapeHTML(snap.shippingDeadline) + '</span>' : '') +
            '</span>' +
            freteValue +
          '</div>';
      }
      if (snap.discount > 0) {
        rows +=
          '<div class="mm-row">' +
            '<span class="mm-row-label">Cupom' + (snap.couponCode ? ' <span class="mm-row-sub">· ' + escapeHTML(snap.couponCode) + '</span>' : '') + '</span>' +
            '<span class="mm-row-value is-discount">− ' + formatBRL(snap.discount) + '</span>' +
          '</div>';
      }
      if (save > 0 && activeForma === 'pix') {
        rows +=
          '<div class="mm-row mm-row-pix-discount">' +
            '<span class="mm-row-label">' + ICON.bolt + ' Desconto PIX</span>' +
            '<span class="mm-row-value is-discount">− ' + formatBRL(save) + '</span>' +
          '</div>';
      }
  
      var totalBlock =
        '<div class="mm-total">' +
          '<div class="mm-total-label">Total</div>' +
          '<div class="mm-total-value" data-mm-total>' + formatBRL(activeTotal) + '</div>' +
          '<div class="mm-total-pix" data-mm-total-sub>' +
            '<span>' + activeLabel + '</span>' +
          '</div>' +
        '</div>';
  
      return (
        '<aside class="mm-id-sum mm-sum mm-op-step3-sum" data-active-forma="' + escapeHTML(activeForma) + '">' +
          '<h2 class="mm-h">Resumo do pedido</h2>' +
          '<div class="mm-sum-card">' +
            '<div class="mm-id-thumbs">' + thumbsHTML + '</div>' +
            '<div class="mm-sum-rows">' + rows + '</div>' +
            totalBlock +
          '</div>' +
        '</aside>'
      );
    }
  
    /* ============ Bind events ============ */
    function bindStep3Events(userData, formas) {
      var layout = document.getElementById('mm-layout');
      if (!layout || layout._mmStep3Bound) return;
      layout._mmStep3Bound = true;
  
      var snap = loadCartSnapshot();
      var state = {
        activeForma: 'pix',
        cardNumValid: false,
        cardBrand: null,
        cardInstallments: null, /* {numero, valorParcela} */
        submitting: false
      };
  
      /* ---- Click delegation: radio cards ---- */
      layout.addEventListener('click', function(e) {
        var radio = e.target.closest('.mm-op-pay-radio');
        if (radio) {
          /* Previne navegação default do label wrapping um input */
          var input = radio.querySelector('input[type="radio"]');
          if (input && !input.checked) {
            e.preventDefault();
            input.checked = true;
            setActiveForma(radio.getAttribute('data-forma'));
          }
          return;
        }
  
        /* Finalizar compra */
        if (e.target.closest('[data-mm-act="finalizar-compra"]')) {
          e.preventDefault();
          submitFinalizar();
          return;
        }
  
        /* Editar dados/endereço — recarrega onepage (volta ao form) */
        var editBtn = e.target.closest('[data-mm-act="edit-dados"], [data-mm-act="edit-endereco"]');
        if (editBtn) {
          e.preventDefault();
          location.reload();
          return;
        }
      });
  
      /* ---- Input delegation: cartão form ---- */
      layout.addEventListener('input', function(e) {
        var t = e.target;
        if (!t || !t.id) return;
        if (t.id === 'mm-pay-card-num') handleCardNumInput(t);
        else if (t.id === 'mm-pay-card-exp') handleCardExpInput(t);
        else if (t.id === 'mm-pay-card-cvv') t.value = (t.value || '').replace(/\D/g, '').slice(0, 4);
      });
  
      /* ---- Change: parcelas dropdown ---- */
      layout.addEventListener('change', function(e) {
        if (e.target && e.target.id === 'mm-pay-card-installments') {
          var sel = e.target;
          var opt = sel.options[sel.selectedIndex];
          if (opt && opt.value) {
            state.cardInstallments = {
              numero: parseInt(opt.value, 10),
              label: opt.textContent || ''
            };
            /* Sync pro select nativo Magazord */
            syncMagazordInstallments(opt.value);
            clearFieldError('mm-pay-card-installments');
          }
        }
      });
  
      /* ---- Blur: inline validation (form-cro: validate on blur, não keystroke) ---- */
      layout.addEventListener('blur', function(e) {
        var t = e.target;
        if (!t || !t.id) return;
        var cardFieldIds = ['mm-pay-card-num', 'mm-pay-card-name', 'mm-pay-card-exp', 'mm-pay-card-cvv'];
        if (cardFieldIds.indexOf(t.id) === -1) return;
        validateField(t.id);
      }, true); /* true = captura (blur não bubbles) */
  
      /* ---- Focus: limpa erro do campo ao re-focar ---- */
      layout.addEventListener('focus', function(e) {
        var t = e.target;
        if (!t || !t.id) return;
        if (/^mm-pay-card-/.test(t.id)) clearFieldError(t.id);
      }, true);
  
      /* ---- Field validators + error display ---- */
      function showFieldError(id, msg) {
        var input = document.getElementById(id);
        var slot = document.getElementById(id + '-err');
        if (input) {
          input.classList.add('mm-input-error');
          input.setAttribute('aria-invalid', 'true');
        }
        if (slot) {
          slot.textContent = msg;
          slot.classList.add('is-visible');
        }
      }
      function clearFieldError(id) {
        var input = document.getElementById(id);
        var slot = document.getElementById(id + '-err');
        if (input) {
          input.classList.remove('mm-input-error');
          input.removeAttribute('aria-invalid');
        }
        if (slot) {
          slot.textContent = '';
          slot.classList.remove('is-visible');
        }
      }
  
      /* Valida 1 campo. Retorna true se válido, false+mostra erro se inválido.
         Mensagens específicas por campo (form-cro: error clarity). */
      function validateField(id) {
        var el = document.getElementById(id);
        if (!el) return true;
        var v = (el.value || '').trim();
  
        if (id === 'mm-pay-card-num') {
          var digits = v.replace(/\D/g, '');
          if (!digits) { showFieldError(id, 'Informe o número do cartão'); return false; }
          if (digits.length < 13) { showFieldError(id, 'Número do cartão incompleto'); return false; }
          if (!luhnCheck(digits)) { showFieldError(id, 'Número do cartão inválido — confira os dígitos'); return false; }
          clearFieldError(id);
          return true;
        }
        if (id === 'mm-pay-card-name') {
          if (!v) { showFieldError(id, 'Informe o nome impresso no cartão'); return false; }
          if (v.split(/\s+/).length < 2) { showFieldError(id, 'Use o nome completo como aparece no cartão'); return false; }
          clearFieldError(id);
          return true;
        }
        if (id === 'mm-pay-card-exp') {
          var expDigits = v.replace(/\D/g, '');
          if (expDigits.length !== 4) { showFieldError(id, 'Informe a validade no formato MM/AA'); return false; }
          var mm = parseInt(expDigits.slice(0, 2), 10);
          var aa = parseInt(expDigits.slice(2), 10);
          if (mm < 1 || mm > 12) { showFieldError(id, 'Mês inválido (01 a 12)'); return false; }
          /* Ano atual 20XX → compara. Se aa < (ano atual % 100) OR (aa == ano atual AND mm < mes atual) → expirado */
          var now = new Date();
          var curYear = now.getFullYear() % 100;
          var curMonth = now.getMonth() + 1;
          if (aa < curYear || (aa === curYear && mm < curMonth)) {
            showFieldError(id, 'Cartão expirado');
            return false;
          }
          clearFieldError(id);
          return true;
        }
        if (id === 'mm-pay-card-cvv') {
          var cvvDigits = v.replace(/\D/g, '');
          if (cvvDigits.length < 3) { showFieldError(id, 'CVV deve ter 3 ou 4 dígitos'); return false; }
          clearFieldError(id);
          return true;
        }
        if (id === 'mm-pay-card-installments') {
          if (!v) { showFieldError(id, 'Selecione o número de parcelas'); return false; }
          clearFieldError(id);
          return true;
        }
        return true;
      }
  
      /* Luhn check pra validar número de cartão (mod 10) */
      function luhnCheck(num) {
        var sum = 0;
        var alt = false;
        for (var i = num.length - 1; i >= 0; i--) {
          var d = parseInt(num.charAt(i), 10);
          if (alt) { d *= 2; if (d > 9) d -= 9; }
          sum += d;
          alt = !alt;
        }
        return sum % 10 === 0;
      }
  
      /* ---- Funções ---- */
      function setActiveForma(forma) {
        if (!forma || state.activeForma === forma) return;
        state.activeForma = forma;
  
        /* Visual: marca o radio card ativo */
        layout.querySelectorAll('.mm-op-pay-radio').forEach(function(el) {
          el.classList.toggle('is-active', el.getAttribute('data-forma') === forma);
        });
  
        /* Sync pro radio nativo Magazord */
        var nativeRadio = document.getElementById('forma-pagto-' + forma);
        if (nativeRadio && !nativeRadio.checked) {
          try { nativeRadio.click(); } catch (e) {}
        }
  
        /* Desabilita inputs do cartão quando não for cartão — evita que o
           Bitwarden/password managers tentem autofill em campos invisíveis.
           Inputs disabled são ignorados por form autofill e submission. */
        var cardFormInputs = layout.querySelectorAll('.mm-op-card-form input, .mm-op-card-form select');
        var cardActive = forma === 'cartao';
        cardFormInputs.forEach(function(input) {
          input.disabled = !cardActive;
          /* Toggle autocomplete: restaura o cc-* value original quando ativo,
             força "off" quando inativo. O data-mmac guarda o valor original. */
          if (cardActive) {
            if (input.dataset.mmac) {
              input.setAttribute('autocomplete', input.dataset.mmac);
            }
          } else {
            input.setAttribute('autocomplete', 'off');
          }
        });
  
        /* Atualiza summary lateral (total + label + destaque) + CTA label */
        updateSummaryForForma(forma);
  
        /* Se cartão ativo, foca no input do cartão (próximo step lógico) */
        if (forma === 'cartao') {
          setTimeout(function() {
            var cardInput = document.getElementById('mm-pay-card-num');
            if (cardInput && !cardInput.value) cardInput.focus();
          }, 250);
        }
      }
  
      /* Update cirúrgico — evita o flicker de innerHTML replace.
         Anima só o valor total + swap label + toggle da linha de desconto PIX. */
      function updateSummaryForForma(forma) {
        var sum = layout.querySelector('.mm-op-step3-sum');
        if (!sum) return;
        sum.setAttribute('data-active-forma', forma);
  
        var pixVal = formas.pix ? formas.pix.valorTotal : 0;
        var cartaoVal = formas.cartao ? formas.cartao.valorTotal : 0;
        var boletoVal = formas.boleto ? formas.boleto.valorTotal : 0;
        var save = cartaoVal > pixVal ? cartaoVal - pixVal : 0;
        var newTotal = forma === 'pix' ? pixVal : (forma === 'boleto' ? boletoVal : cartaoVal);
        var newLabel = forma === 'pix' ? 'no PIX' : (forma === 'boleto' ? 'no boleto' : 'no cartão');
  
        /* Anima o valor do total de forma incremental */
        var totalEl = sum.querySelector('[data-mm-total]');
        if (totalEl) {
          var fromText = totalEl.textContent || '';
          var fromVal = parseBRL(fromText);
          if (fromVal !== newTotal) {
            animateValue(totalEl, fromVal, newTotal, 360);
          } else {
            totalEl.textContent = formatBRL(newTotal);
          }
        }
  
        /* Swap label "no PIX" / "no cartão" / "no boleto" */
        var subEl = sum.querySelector('[data-mm-total-sub] span');
        if (subEl && subEl.textContent !== newLabel) {
          subEl.textContent = newLabel;
        }
  
        /* Toggle row de desconto PIX — aparece só em PIX com save > 0 */
        var rowsEl = sum.querySelector('.mm-sum-rows');
        var discountRow = rowsEl ? rowsEl.querySelector('.mm-row-pix-discount') : null;
        if (forma === 'pix' && save > 0) {
          if (!discountRow && rowsEl) {
            var tmp = document.createElement('div');
            tmp.innerHTML =
              '<div class="mm-row mm-row-pix-discount">' +
                '<span class="mm-row-label">' + ICON.bolt + ' Desconto PIX</span>' +
                '<span class="mm-row-value is-discount">− ' + formatBRL(save) + '</span>' +
              '</div>';
            rowsEl.appendChild(tmp.firstChild);
          }
        } else if (discountRow) {
          discountRow.remove();
        }
  
        /* Atualiza CTA label também */
        updateCtaLabel(forma);
      }
  
      /* Animação de número incremental com easing cubic-out */
      function animateValue(el, from, to, duration) {
        if (el._mmAnimToken) cancelAnimationFrame(el._mmAnimToken);
        var start = null;
        var diff = to - from;
        function step(ts) {
          if (!start) start = ts;
          var elapsed = ts - start;
          var t = Math.min(1, elapsed / duration);
          /* easeOutCubic */
          var eased = 1 - Math.pow(1 - t, 3);
          var current = from + diff * eased;
          el.textContent = formatBRL(current);
          if (t < 1) {
            el._mmAnimToken = requestAnimationFrame(step);
          } else {
            el.textContent = formatBRL(to);
            el._mmAnimToken = null;
          }
        }
        el._mmAnimToken = requestAnimationFrame(step);
      }
  
      function updateCtaLabel(forma) {
        var label = layout.querySelector('.mm-op-finalizar-label');
        if (!label) return;
        var val = forma === 'pix' ? (formas.pix && formas.pix.valorTotal)
                : forma === 'boleto' ? (formas.boleto && formas.boleto.valorTotal)
                : (formas.cartao && formas.cartao.valorTotal);
        label.textContent = 'Finalizar compra · ' + formatBRL(val || 0);
      }
  
      /* Bandeira detection básica por primeiros dígitos (BIN simplificado).
         Não substitui o backend Zord — só mostra feedback visual imediato. */
      function detectCardBrand(num) {
        var n = (num || '').replace(/\D/g, '');
        if (!n) return null;
        if (/^4/.test(n)) return 'visa';
        if (/^(5[1-5]|22[2-9]|2[3-6]|27[01]|2720)/.test(n)) return 'mastercard';
        if (/^3[47]/.test(n)) return 'amex';
        if (/^(4011|4312|4389|4514|4573|5041|5066|5067|509|6277|6362|6363|650|6516|6550)/.test(n)) return 'elo';
        if (/^(606282|384100|384140|384160|606|637095|637568|637599|637609|637612)/.test(n)) return 'hipercard';
        return null;
      }
  
      function handleCardNumInput(t) {
        var raw = (t.value || '').replace(/\D/g, '').slice(0, 19);
        /* Formata com espaço a cada 4 dígitos */
        var formatted = raw.replace(/(\d{4})(?=\d)/g, '$1 ');
        if (formatted !== t.value) {
          var pos = t.selectionStart;
          t.value = formatted;
          try { t.setSelectionRange(pos + 1, pos + 1); } catch (e) {}
        }
  
        /* Detect brand + update UI */
        var brand = detectCardBrand(raw);
        state.cardBrand = brand;
        state.cardNumValid = raw.length >= 13;
  
        var brandSlot = layout.querySelector('.mm-op-card-brand-detected');
        if (brandSlot) {
          brandSlot.className = 'mm-op-card-brand-detected' + (brand ? ' is-' + brand : '');
          brandSlot.textContent = brand ? brand.toUpperCase() : '';
        }
  
        /* Sync com Magazord native (trigger Zord BIN detection + parcelas fetch) */
        if (raw.length >= 6) {
          syncMagazordCardNum(raw);
          /* Observer: aguarda o select #pag-cartao-parcela populate e copia opções */
          watchMagazordInstallments();
        }
      }
  
      function handleCardExpInput(t) {
        var raw = (t.value || '').replace(/\D/g, '').slice(0, 4);
        var formatted = raw.length > 2 ? raw.slice(0, 2) + '/' + raw.slice(2) : raw;
        t.value = formatted;
  
        /* Quando 5 chars (MM/AA), sync pros selects nativos de validade */
        if (raw.length === 4) {
          var mm = raw.slice(0, 2);
          var aa = '20' + raw.slice(2);
          syncMagazordSelect('pag-cartao-mes-validade', String(parseInt(mm, 10)));
          syncMagazordSelect('pag-cartao-ano-validade', aa);
        }
      }
  
      function syncMagazordCardNum(num) {
        var native = document.getElementById('pag-cartao-numero');
        if (!native) return;
        try {
          var setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
          setter.call(native, num);
        } catch (e) { native.value = num; }
        native.dispatchEvent(new Event('input', { bubbles: true }));
        native.dispatchEvent(new Event('change', { bubbles: true }));
        native.dispatchEvent(new Event('blur', { bubbles: true }));
      }
  
      function syncMagazordSelect(id, value) {
        var sel = document.getElementById(id);
        if (!sel) return;
        try {
          var setter = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, 'value').set;
          setter.call(sel, value);
        } catch (e) { sel.value = value; }
        sel.dispatchEvent(new Event('change', { bubbles: true }));
      }
  
      function syncMagazordInstallments(parcelas) {
        syncMagazordSelect('pag-cartao-parcela', parcelas);
      }
  
      /* Observer nas opções do select nativo de parcelas — quando Zord popula
         após o BIN detection, copia pro nosso select shadow */
      var _installmentsObserver = null;
      function watchMagazordInstallments() {
        if (_installmentsObserver) return;
        var native = document.getElementById('pag-cartao-parcela');
        if (!native) return;
  
        var ourSelect = document.getElementById('mm-pay-card-installments');
        if (!ourSelect) return;
  
        function syncOptions() {
          var opts = native.querySelectorAll('option');
          if (opts.length <= 1) return; /* ainda não populou */
  
          var html = '';
          opts.forEach(function(opt) {
            if (!opt.value) {
              html += '<option value="">Selecione as parcelas</option>';
              return;
            }
            html += '<option value="' + escapeHTML(opt.value) + '">' + escapeHTML(opt.textContent.trim()) + '</option>';
          });
          ourSelect.innerHTML = html;
  
          /* Auto-seleciona a primeira opção válida (geralmente max parcelas) */
          if (ourSelect.options.length > 1) {
            ourSelect.selectedIndex = 1;
            state.cardInstallments = {
              numero: parseInt(ourSelect.options[1].value, 10) || 1,
              label: ourSelect.options[1].textContent
            };
          }
        }
  
        syncOptions();
        _installmentsObserver = new MutationObserver(syncOptions);
        _installmentsObserver.observe(native, { childList: true, subtree: true });
      }
  
      /* Submit final — direciona pro form nativo Magazord correto */
      function submitFinalizar() {
        if (state.submitting) return;
  
        var forma = state.activeForma;
        var btn = layout.querySelector('.mm-op-finalizar');
        if (!btn) return;
  
        /* Validação por forma — usa validateField (com textos específicos) */
        if (forma === 'cartao') {
          var fields = ['mm-pay-card-num', 'mm-pay-card-name', 'mm-pay-card-exp', 'mm-pay-card-cvv', 'mm-pay-card-installments'];
          var errors = fields.filter(function(id) { return !validateField(id); });
  
          if (errors.length) {
            var first = document.getElementById(errors[0]);
            if (first) {
              first.focus();
              try { first.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) {}
            }
            return;
          }
  
          var name = document.getElementById('mm-pay-card-name');
          var cvv = document.getElementById('mm-pay-card-cvv');
  
          /* Sync titular + CPF do titular (usa CPF do buyer como default) */
          var titularNative = document.getElementById('pag-cartao-titular');
          if (titularNative) {
            try {
              var setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
              setter.call(titularNative, name.value.trim());
            } catch (e) { titularNative.value = name.value.trim(); }
            titularNative.dispatchEvent(new Event('input', { bubbles: true }));
            titularNative.dispatchEvent(new Event('blur', { bubbles: true }));
          }
  
          var cvvNative = document.getElementById('pag-cartao-vericacao');
          if (cvvNative) {
            try {
              var setterCvv = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
              setterCvv.call(cvvNative, cvv.value.replace(/\D/g, ''));
            } catch (e) { cvvNative.value = cvv.value.replace(/\D/g, ''); }
            cvvNative.dispatchEvent(new Event('input', { bubbles: true }));
            cvvNative.dispatchEvent(new Event('blur', { bubbles: true }));
          }
  
          /* CPF do titular (usa o do buyer) */
          var cpfNative = document.getElementById('pag-cartao-cpf');
          if (cpfNative && userData && userData.cpf) {
            try {
              var setterCpf = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
              setterCpf.call(cpfNative, userData.cpf);
            } catch (e) { cpfNative.value = userData.cpf; }
            cpfNative.dispatchEvent(new Event('input', { bubbles: true }));
            cpfNative.dispatchEvent(new Event('blur', { bubbles: true }));
          }
        }
  
        /* Loading state */
        state.submitting = true;
        btn.classList.add('is-loading');
        btn.setAttribute('aria-busy', 'true');
        var lbl = btn.querySelector('.mm-op-finalizar-label');
        if (lbl) lbl.textContent = 'Processando pagamento...';
  
        /* Overlay fullscreen (reusa o do F3) */
        showSubmitOverlay('Finalizando seu pedido...');
  
        /* Delay pra garantir que todos os inputs sincronizaram + Zord processou */
        setTimeout(function() {
          /* Aceita termos bcash se cartão */
          if (forma === 'cartao') {
            var terms = document.getElementById('aceito-termos-bcash-one-card');
            if (terms && !terms.checked) {
              terms.checked = true;
              terms.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }
  
          /* Pega o form nativo correto por ID */
          var formId = forma === 'pix' ? 'form-pag-pix'
                     : forma === 'boleto' ? 'form-pag-boleto'
                     : 'form-pag-cartao';
          var form = document.getElementById(formId);
  
          /* Fallback: alguns submits precisam do click no botão nativo (eventos
             delegados pelo Magazord JS). Tentamos requestSubmit primeiro, e
             se não funcionar em 1s, clicamos no botão visível. */
          if (form && typeof form.requestSubmit === 'function') {
            try { form.requestSubmit(); }
            catch (e) {
              var btnNative = form.querySelector('button.button-success, button[type="submit"], input[type="submit"]');
              if (btnNative) btnNative.click();
            }
          } else if (form) {
            var btnFallback = form.querySelector('button.button-success, button[type="submit"], input[type="submit"]');
            if (btnFallback) btnFallback.click();
            else form.submit();
          }
  
          /* Tenta esconder nosso layout pra Magazord assumir (processing page) */
          setTimeout(function() {
            mainArea.classList.remove('mm-shadow-mode');
            if (layout) layout.style.display = 'none';
          }, 400);
        }, 500);
      }
    }
  
    /* ----- mount entry ----- */
    if (isOnepage) {
      function waitForOnepageDom(attempt) {
        attempt = attempt || 0;
        if (attempt > 30) { mountOnepage(); return; }
        var hasForm = mainArea.querySelector('#cep, .box-area-dados, #nome-completo_2');
        if (hasForm || attempt > 8) {
          mountOnepage();
        } else {
          setTimeout(function() { waitForOnepageDom(attempt + 1); }, 250);
        }
      }
  
      function mountOnepage() {
        var snap = loadCartSnapshot();
        var prefilledEmail = STORAGE.get('mm_user_email') || '';
  
        /* Limpa flag mm_checkout_mode (já foi usada pra entrar no flow guest) */
        STORAGE.remove('mm_checkout_mode');
  
        /* Liga debug do draft — expose pra user inspecionar no console.
           Desativa com: window._mmDraftDebug = false */
        if (typeof window._mmDraftDebug === 'undefined') window._mmDraftDebug = true;
  
        buildOnepageLayout(snap, prefilledEmail);
        bindOnepageEvents();
  
        /* Restaura draft salvo (campos que o user já tinha digitado antes do reload) */
        var draft = restoreOnepageDraft();
  
        /* Render inicial do frete a partir do snapshot do cart — Magazord
           onepage não expõe modalidades (.servico-frete), só o valor final.
           O snapshot tem nome+prazo+opções porque foi salvo no cart. */
        if (snap && snap.shipping !== null && snap.shipping !== undefined) {
          renderFreteResult({
            value: snap.shipping,
            name: snap.shippingName || '',
            deadline: snap.shippingDeadline || '',
            city: snap.shippingCity || '',
            options: snap.shippingOptions || []
          });
        }
  
        /* Garante que o tab "Compra sem cadastro" do Magazord esteja ativo
           (caso não esteja por default) — clicamos no link nativo */
        try {
          var sememCadLink = Array.from(mainArea.querySelectorAll('a, button')).find(function(el) {
            var t = (el.textContent || '').toLowerCase();
            return t.indexOf('sem cadastro') !== -1 && el.offsetParent !== null;
          });
          if (sememCadLink && !sememCadLink.classList.contains('active')) {
            sememCadLink.click();
          }
        } catch (e) {}
  
        /* Auto-fetch cart snapshot fallback (mesmo padrão da Fase 2) */
        if (!snap || !snap.items || snap.items.length === 0) {
          fetchCartSnapshotFallback(function(freshSnap) {
            if (freshSnap && freshSnap.items && freshSnap.items.length > 0) {
              rehydrateIdentifySummary(freshSnap);
            }
          });
        }
  
        /* Auto-preenche CEP e dispara fetch se já tem CEP salvo */
        var savedCep = STORAGE.get(CEP_KEY);
        if (savedCep && savedCep.length === 8) {
          var cepInput = document.getElementById('mm-op-cep');
          if (cepInput) {
            cepInput.value = formatCep(savedCep);
            setTimeout(function() { handleCepComplete(savedCep); }, 400);
          }
        }
  
        /* Auto-focus primeiro input vazio (mobile-friendly: skip se touch) */
        setTimeout(function() {
          if ('ontouchstart' in window) return;
          var inputs = ['mm-op-email', 'mm-op-nome', 'mm-op-cpf', 'mm-op-tel', 'mm-op-cep'];
          for (var i = 0; i < inputs.length; i++) {
            var el = document.getElementById(inputs[i]);
            if (el && !el.value) { el.focus(); break; }
          }
        }, 350);
      }
  
      waitForOnepageDom();
    }
  
  
    /* =============================================
       PAYMENT — Fase 4 (TODO) — minimal input modes por enquanto
       ============================================= */
  
    if (isPayment) {
      /* Fallback legado: /checkout/payment ainda existe no Magazord mas o fluxo novo
         não navega pra lá (step 3 payment ficou inline em /onepage). Se o usuário
         cair aqui por back button / link externo, deixamos a tela nativa do Magazord
         aparecer — mas precisamos remover mm-cart-loading pra não deixar o spinner
         travado (o anti-flicker roda pra qualquer /checkout/* exceto /done). */
      document.documentElement.classList.remove('mm-cart-loading');
  
      var cardNumInput = mainArea.querySelector('input[placeholder*="numero do cart" i]');
      if (cardNumInput) cardNumInput.inputMode = 'numeric';
  
      var cvvInput = mainArea.querySelector('input[placeholder*="000" i]');
      if (cvvInput && (!cvvInput.maxLength || cvvInput.maxLength <= 4)) cvvInput.inputMode = 'numeric';
    }
  
    /* Safety net: failsafe global — se chegamos até o final da IIFE e a classe
       ainda está presente (ex: algum handler acima teve early-return), remove
       depois de 2s pro spinner não ficar eterno em caso de edge case. */
    setTimeout(function(){
      if (document.documentElement.classList.contains('mm-cart-loading')) {
        console.warn('[mm-cart] failsafe: removing mm-cart-loading after 2s timeout');
        document.documentElement.classList.remove('mm-cart-loading');
      }
    }, 2000);
  
  })();

})();
