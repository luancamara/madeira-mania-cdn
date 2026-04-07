(function() {
  'use strict';

  /* =============================================
     SEÇÃO 1: CSS INJECTION
     ============================================= */

  /* Inject CSS: global.css */
  (function(){if(document.getElementById("mm-global-css"))return;var s=document.createElement("style");s.id="mm-global-css";s.textContent="/* =============================================\n   GLOBAL CSS - Madeira Mania (Mobile)\n   Melhorias aplicadas em TODAS as páginas\n\n   Todos com !important para sobrescrever Magazord\n\n   Paleta oficial:\n   - Verde base: #4b664a\n   - Verde claro: #5d765d\n   - Verde escuro: #445c43\n   - Texto: #333333\n   - Fundo: #ffffff\n   ============================================= */\n\n@media (max-width: 768px) {\n\n  /* ==========================================\n     1. OVERFLOW - Impedir scroll horizontal\n     ========================================== */\n\n  html, body {\n    overflow-x: hidden !important;\n  }\n\n  #pagina-produto-react-app,\n  #produto-react-app {\n    overflow-x: hidden !important;\n    max-width: 100vw !important;\n  }\n\n\n  /* ==========================================\n     2. LINKS - Cor dentro da paleta do site\n     ========================================== */\n\n  #pagina-produto-react-app a:not([class*=\"bg-\"]):not([class*=\"text-white\"]):not(header a):not(nav a) {\n    color: #4b664a !important;\n  }\n\n\n  /* ==========================================\n     3. VITRINES — Ocultar estrelas com 0 reviews\n     Aplica em homepage e qualquer vitrine\n     ========================================== */\n\n  .average-rating[data-value=\"0.00\"],\n  .average-rating[data-value=\"0.00\"] + .qtd-aval,\n  .average-rating[data-value=\"0\"] + .qtd-aval,\n  .average-rating[data-value=\"0\"] {\n    display: none !important;\n  }\n\n  /* Ocultar .rating inteiro quando contém apenas 0 */\n  .rating:has(.average-rating[data-value=\"0.00\"]) {\n    display: none !important;\n  }\n\n\n}\n\n\n/* =============================================\n   REGRAS GLOBAIS (todos os viewports)\n   ============================================= */\n\n/* Esconder WhatsApp original — substituído por #mm-floating-whatsapp */\n#popup-msg-whats {\n  display: none !important;\n}\n\n/* --- Absorvido de CA-3 (Arredonda imagens) --- */\nfigure { border-radius: 10% !important; }\n.lazyloaded { margin: 0 !important; }\n\n/* --- Absorvido de CA-12 (Menu desktop verde) --- */\n@media (min-width: 992px) {\n  .menu-link-120 {\n    background-color: #4b664a;\n    color: #fff;\n  }\n}\n\n/* ==========================================\n   FLOATING WHATSAPP — Posição por contexto\n   Mobile: acima do bottom nav (60px)\n   PDP Mobile: override em produto.css (acima da sticky bar)\n   Desktop: canto inferior\n   ========================================== */\n\n/* Default mobile: acima do bottom nav (60px nav + 15px gap) */\n#mm-floating-whatsapp {\n  bottom: 75px !important;\n}\n\n/* Back-to-top: acima do WA (75 + 52 WA + 10 gap) */\n.back-to-top {\n  bottom: 137px !important;\n}\n\n/* Desktop: mais baixo (sem bottom nav) */\n@media (min-width: 769px) {\n  #mm-floating-whatsapp {\n    bottom: 24px !important;\n  }\n  .back-to-top {\n    bottom: 86px !important;\n  }\n}\n\n/* Back-to-top — visual, preservar animação do Magazord (right transition) */\n.back-to-top.opened {\n  border-radius: 50% !important;\n  background: #ffffff !important;\n  border: 1.5px solid #dbe1db !important;\n  opacity: 1 !important;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;\n  width: 44px !important;\n  height: 44px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n\n\n/* =============================================\n   FOOTER REBUILD — Hide Magazord + render ours\n   Aplica em TODO o site (não só checkout)\n   ============================================= */\n\n/* Hide Magazord footer + propaganda globally\n   Aplica em TODAS as páginas — substituído por #mm-footer custom */\n#footer-react-app,\nfooter.ra-footer,\n.ra-footer,\n.footer-04,\n.footer-top,\n.footer-middle,\n.footer-about,\n.footer-bottom,\n.footer-checkout-info,\n.horario-atendimento,\n.magazord-logo-container,\n.icon-magazord {\n  display: none !important;\n}\n\n\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&display=swap');\n\n\n#mm-footer {\n  /* Tokens locais (não dependem de #checkout-main-area) */\n  --f-bg:        #1F2A1E;  /* very dark olive */\n  --f-bg-2:      #283228;  /* trust strip */\n  --f-bg-3:      #161E15;  /* legal bottom */\n  --f-fg:        #E5E7EB;\n  --f-fg-2:      #C4CCC4;  /* secondary text — bumped pra contrast */\n  --f-fg-3:      #A0AA9F;  /* meta info — WCAG-safe em #283228 (ratio 5.58) */\n  --f-heading:   #FFFFFF;\n  --f-accent:    #A0BCA0;  /* light olive hover */\n  --f-border:    rgba(255, 255, 255, 0.08);\n\n  --f-sans:      'Poppins', system-ui, -apple-system, sans-serif;\n  --f-serif:     'Libre Baskerville', Georgia, serif;\n\n  font-family: var(--f-sans);\n  background: var(--f-bg);\n  color: var(--f-fg);\n  font-size: 14px;\n  line-height: 1.6;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n#mm-footer * {\n  box-sizing: border-box;\n}\n\n#mm-footer a {\n  color: var(--f-fg);\n  text-decoration: none;\n  transition: color 320ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n#mm-footer a:hover {\n  color: var(--f-accent);\n}\n\n#mm-footer a:focus-visible {\n  outline: 2px solid var(--f-accent);\n  outline-offset: 3px;\n  border-radius: 2px;\n}\n\n\n/* ---- Main grid ---- */\n.mm-footer-main {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 56px 24px 40px;\n}\n\n.mm-footer-grid {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr 1fr 1fr;\n  gap: 48px;\n}\n\n@media (max-width: 1023px) {\n  .mm-footer-main { padding: 40px 20px 32px; }\n  .mm-footer-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: 36px 24px;\n  }\n}\n\n@media (max-width: 540px) {\n  .mm-footer-grid {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n}\n\n\n/* ---- Brand column ---- */\n.mm-footer-brand {\n  max-width: 360px;\n}\n\n.mm-footer-logo {\n  display: inline-block;\n  margin-bottom: 16px;\n  line-height: 0;\n}\n\n.mm-footer-logo img {\n  height: 48px;\n  width: auto;\n  display: block;\n  filter: brightness(0) invert(1);  /* white version of brand logo */\n  opacity: 0.95;\n}\n\n.mm-footer-tagline {\n  color: var(--f-fg-2);\n  font-size: 13px;\n  line-height: 1.6;\n  margin: 0 0 24px;\n  max-width: 320px;\n}\n\n.mm-footer-social {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.mm-footer-social a {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border: 1px solid var(--f-border);\n  border-radius: 9999px;\n  color: var(--f-fg);\n  transition: all 320ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.mm-footer-social a:hover {\n  background: var(--f-accent);\n  border-color: var(--f-accent);\n  color: var(--f-bg);\n  transform: translateY(-2px);\n}\n\n.mm-footer-social svg {\n  width: 16px;\n  height: 16px;\n  display: block;\n}\n\n\n/* ---- Section heading ---- */\n.mm-footer-h {\n  font-family: var(--f-serif);\n  font-size: 16px;\n  font-weight: 400;\n  color: var(--f-heading);\n  margin: 0 0 18px;\n  letter-spacing: -0.01em;\n}\n\n\n/* ---- Lists ---- */\n.mm-footer-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.mm-footer-list li {\n  display: block;\n}\n\n.mm-footer-list a,\n.mm-footer-list > li > span {\n  font-size: 13px;\n  color: var(--f-fg-2);\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  line-height: 1.4;\n  min-height: 44px;\n  padding: 6px 0;\n  width: auto;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mm-footer-list a:hover {\n  color: var(--f-accent);\n}\n\n.mm-footer-list svg {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  color: var(--f-accent);\n}\n\n.mm-footer-meta {\n  color: var(--f-fg-3) !important;\n  font-size: 12px;\n  font-style: italic;\n  min-height: 0 !important;\n  padding-top: 4px !important;\n}\n\n\n/* ---- Trust strip ---- */\n.mm-footer-trust {\n  background: var(--f-bg-2);\n  border-top: 1px solid var(--f-border);\n  border-bottom: 1px solid var(--f-border);\n}\n\n.mm-footer-trust-inner {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  gap: 20px 32px;\n}\n\n.mm-footer-trust-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  color: var(--f-fg);\n  font-size: 13px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n\n.mm-footer-trust-item svg {\n  flex-shrink: 0;\n  width: 22px;\n  height: 22px;\n  color: var(--f-accent);\n}\n\n.mm-footer-trust-item strong {\n  display: block;\n  color: var(--f-heading);\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 1.2;\n}\n\n.mm-footer-trust-item small {\n  display: block;\n  color: var(--f-fg-3);\n  font-size: 12px;\n  font-weight: 400;\n  margin-top: 2px;\n}\n\n.mm-footer-trust-text {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n\n@media (max-width: 1023px) {\n  .mm-footer-trust-inner {\n    padding: 20px;\n    gap: 14px 24px;\n  }\n}\n\n\n/* ---- Bottom strip ---- */\n.mm-footer-bottom {\n  background: var(--f-bg-3);\n}\n\n.mm-footer-bottom-inner {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n\n.mm-footer-legal {\n  font-size: 12px;\n  color: var(--f-fg-3);\n  margin: 0;\n  line-height: 1.6;\n  font-weight: 400;\n}\n\n.mm-footer-legal strong {\n  color: var(--f-fg-2);\n  font-weight: 500;\n}\n\n.mm-footer-payments {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.mm-footer-payments .mm-pay-chip {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 30px;\n  padding: 4px 6px;\n  border-radius: 5px;\n  background: #FFFFFF;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);\n}\n\n.mm-footer-payments .mm-pay-chip img {\n  display: block;\n  max-width: 100%;\n  max-height: 22px;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n}\n\n@media (max-width: 768px) {\n  .mm-footer-bottom-inner {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 24px 20px;\n    gap: 16px;\n  }\n  .mm-footer-legal { text-align: left; }\n}\n\n\n/* ---- Reduced motion ---- */\n@media (prefers-reduced-motion: reduce) {\n  #mm-footer *,\n  #mm-footer *::before,\n  #mm-footer *::after {\n    transition-duration: 0.01ms !important;\n  }\n}\n\n";document.head.appendChild(s)})();

  /* Inject CSS: produto.css */
  (function(){if(document.getElementById("mm-produto-css"))return;var s=document.createElement("style");s.id="mm-produto-css";s.textContent="/* =============================================\n   PRODUTO CSS - Madeira Mania (Mobile)\n   Redesign v2 — Validado por agentes UI/UX\n\n   Seletores validados via Playwright em 13/02/2026\n   Todos com !important + prefixo de alta especificidade\n\n   Paleta:\n   - Verde base: #4b664a\n   - Borda: #dbe1db\n   - Borda sutil: #e8ece8\n   - Texto: #1a1a1a\n   - Texto sec: #555\n   - Fundo seção: #f7f8f7\n   ============================================= */\n\n@media (max-width: 768px) {\n\n\n  /* ==========================================\n     0. CONTAINER — Corrigir overflow horizontal\n     ========================================== */\n\n  #produto-react-app {\n    overflow-x: hidden !important;\n  }\n\n\n  /* ==========================================\n     0b. ABSORVIDO DE CA-6 (Remove padding produto)\n     ========================================== */\n\n  .ra-produto {\n    padding-left: 0px !important;\n  }\n\n  /* ==========================================\n     0c. ABSORVIDO DE CA-9 (Arredonda img produto)\n     ========================================== */\n\n  .gallery-main img {\n    border-radius: 2rem !important;\n  }\n\n  .gallery-main .swiper-slide {\n    border-radius: 2rem !important;\n  }\n\n\n  /* ==========================================\n     1. GALERIA - Full-bleed edge-to-edge\n     ========================================== */\n\n  #produto-react-app #block-imagem {\n    margin-left: -8px !important;\n    margin-right: -8px !important;\n    width: calc(100% + 16px) !important;\n  }\n\n  #produto-react-app .gallery-container {\n    max-width: 100vw !important;\n    overflow: hidden !important;\n  }\n\n  #produto-react-app .gallery-main {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n\n  /* Esconder setas de navegação — swipe natural */\n  #produto-react-app .gallery-main > .button-prev,\n  #produto-react-app .gallery-main > .button-next {\n    display: none !important;\n  }\n\n  /* Esconder dots do swiper — substituído por counter textual #mm-gallery-counter */\n  #produto-react-app .swiper-pagination {\n    display: none !important;\n  }\n\n\n  /* ==========================================\n     2. BREADCRUMB\n     ========================================== */\n\n  #produto-react-app .breadcrumb a {\n    color: #888 !important;\n  }\n\n  #produto-react-app .breadcrumb .separator {\n    color: #ccc !important;\n  }\n\n  #produto-react-app .bread-produto .text-secondary-700 {\n    color: #555 !important;\n    font-weight: 500 !important;\n  }\n\n\n  /* ==========================================\n     3. TÍTULO\n     ========================================== */\n\n  #produto-react-app h1.text-xl {\n    font-size: 22px !important;\n    line-height: 1.3 !important;\n    color: #1a1a1a !important;\n    letter-spacing: -0.3px !important;\n  }\n\n  /* Estrelas — discretas quando vazio */\n  #produto-react-app .avaliacoes .star-back {\n    opacity: 0.4 !important;\n  }\n\n\n  /* ==========================================\n     4. PREÇO\n     ========================================== */\n\n  #produto-react-app .preco-principal {\n    max-width: 100% !important;\n  }\n\n  /* Badge desconto — verde sólido */\n  #produto-react-app .porcentagem-desconto,\n  #produto-react-app [class*=\"badge-desconto\"],\n  #produto-react-app [class*=\"desconto-badge\"] {\n    background: #2e7d32 !important;\n    color: #ffffff !important;\n    font-weight: 700 !important;\n    border-radius: 6px !important;\n    padding: 3px 8px !important;\n    font-size: 13px !important;\n  }\n\n  /* Preço antigo */\n  #produto-react-app .preco-de,\n  #produto-react-app [class*=\"preco-de\"] {\n    color: #999 !important;\n    font-size: 14px !important;\n  }\n\n  /* Parcelamento */\n  #produto-react-app .valor-parcelado {\n    font-size: 14px !important;\n    color: #555 !important;\n  }\n\n  /* Link \"Mais formas de pagamento\" */\n  #produto-react-app .form-pag-link {\n    border-color: #dbe1db !important;\n    color: #4b664a !important;\n    border-radius: 8px !important;\n    font-size: 13px !important;\n    font-weight: 500 !important;\n  }\n\n\n  /* ==========================================\n     5. VARIAÇÕES — Swatches + Pills\n     ========================================== */\n\n  /* Swatches de cor — arredondar apenas a imagem */\n  #produto-react-app .variation-color-swatch-image {\n    border-radius: 16px !important;\n  }\n\n  #produto-react-app .variation-pill-label-value {\n    font-weight: 600 !important;\n    color: #1a1a1a !important;\n  }\n\n  /* Pills — formato pill verdadeiro */\n  #produto-react-app .variation-pill {\n    border-radius: 9999px !important;\n    min-width: 80px !important;\n    min-height: 44px !important;\n    font-size: 14px !important;\n    font-weight: 500 !important;\n    display: inline-flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    padding: 0 20px !important;\n    transition: all 0.2s ease !important;\n  }\n\n  /* Pill NÃO selecionado */\n  #produto-react-app .variation-pill[tabindex=\"-1\"] {\n    border: 1.5px solid #dbe1db !important;\n    background: #ffffff !important;\n    color: #333 !important;\n  }\n\n  /* Pill selecionado — manter pill + verde do Magazord */\n  #produto-react-app .variation-pill[tabindex=\"0\"] {\n    border-radius: 9999px !important;\n  }\n\n\n  /* ==========================================\n     6. SEÇÃO DE COMPRA — Layout compacto\n     ========================================== */\n\n  #produto-react-app .informacoes-compra-produto {\n    gap: 8px !important;\n    padding-top: 2px !important;\n    padding-bottom: 12px !important;\n    max-width: 100% !important;\n    box-sizing: border-box !important;\n    overflow-x: hidden !important;\n  }\n\n  /* Eliminar gap do grid wrapper entre galeria e info */\n  #produto-react-app > .grid {\n    gap: 0 !important;\n    padding-top: 0 !important;\n  }\n\n  /* Colapsar primeiro filho vazio do info (breadcrumb oculto no mobile) */\n  #produto-react-app .informacoes-compra-produto > .flex.flex-col.gap-space-16:first-child {\n    gap: 0 !important;\n    margin: 0 !important;\n    padding: 0 !important;\n    display: none !important;\n  }\n\n  /* Separador antes das derivações */\n  #produto-react-app .derivacoes-produto {\n    border-top: 1px solid #f0f0f0 !important;\n    padding-top: 10px !important;\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n\n\n  /* ==========================================\n     7. QUANTIDADE\n     ========================================== */\n\n  #produto-react-app #area-comprar {\n    gap: 12px !important;\n  }\n\n  #produto-react-app .quantidade {\n    border-radius: 10px !important;\n    border-color: #dbe1db !important;\n    height: 44px !important;\n  }\n\n  #produto-react-app .quantidade button,\n  #produto-react-app .quantidade input {\n    min-width: 40px !important;\n    min-height: 42px !important;\n    font-size: 16px !important;\n  }\n\n\n  /* ==========================================\n     8. BOTÕES DE AÇÃO — Linha compacta\n     O JS cria um container #mm-action-row\n     com Favoritos (ícone) + WhatsApp + Share (ícone)\n     ========================================== */\n\n  /* Row criada pelo JS — estilos globais fora do @media */\n\n  /* Favoritos — ícone compacto */\n  #produto-react-app #mm-action-row .salvar-favoritos {\n    flex: 0 0 auto !important;\n    width: auto !important;\n  }\n\n  #produto-react-app #mm-action-row .salvar-favoritos button {\n    width: 46px !important;\n    min-width: 46px !important;\n    height: 42px !important;\n    padding: 0 !important;\n    border: 1.5px solid #dbe1db !important;\n    border-radius: 10px !important;\n    background: #ffffff !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n  }\n\n  #produto-react-app #mm-action-row .salvar-favoritos button svg {\n    width: 20px !important;\n    height: 20px !important;\n    color: #777 !important;\n    stroke: #777 !important;\n  }\n\n  /* Compartilhar — ícone compacto */\n  #produto-react-app #mm-action-row .compartilhar-produto {\n    flex: 0 0 auto !important;\n    width: auto !important;\n  }\n\n  #produto-react-app #mm-action-row .compartilhar-produto button {\n    width: 46px !important;\n    min-width: 46px !important;\n    height: 42px !important;\n    padding: 0 !important;\n    border: 1.5px solid #dbe1db !important;\n    border-radius: 10px !important;\n    background: #ffffff !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n  }\n\n  #produto-react-app #mm-action-row .compartilhar-produto button svg {\n    width: 18px !important;\n    height: 18px !important;\n    color: #777 !important;\n  }\n\n  /* Fallback: se JS não rodou, manter botões decentes */\n  #produto-react-app .salvar-favoritos button {\n    border: 1.5px solid #dbe1db !important;\n    border-radius: 10px !important;\n    color: #555 !important;\n    font-size: 14px !important;\n    font-weight: 500 !important;\n    padding: 10px 16px !important;\n    background: #ffffff !important;\n  }\n\n  #produto-react-app .informacoes-compra-produto > .flex.gap-space-4 {\n    width: 100% !important;\n  }\n\n  #produto-react-app .compartilhar-produto {\n    width: 100% !important;\n    flex: 1 !important;\n  }\n\n  #produto-react-app .compartilhar-produto button {\n    width: 100% !important;\n    border: 1.5px solid #dbe1db !important;\n    border-radius: 10px !important;\n    color: #555 !important;\n    font-size: 14px !important;\n    font-weight: 500 !important;\n    padding: 10px 16px !important;\n    background: #ffffff !important;\n    justify-content: center !important;\n  }\n\n\n  /* ==========================================\n     9. FRETE\n     ========================================== */\n\n  #produto-react-app .calculo-frete {\n    border-top: 1px solid #f0f0f0 !important;\n    padding-top: 14px !important;\n  }\n\n  #produto-react-app .label-frete span {\n    font-weight: 500 !important;\n    color: #1a1a1a !important;\n  }\n\n  #produto-react-app .calculo-frete input {\n    border-radius: 10px !important;\n    border-color: #dbe1db !important;\n    font-size: 15px !important;\n  }\n\n  #produto-react-app .calculo-frete a {\n    color: #4b664a !important;\n    font-size: 13px !important;\n  }\n\n  #produto-react-app .area-calculo button {\n    border-radius: 10px !important;\n    font-weight: 500 !important;\n  }\n\n\n  /* ==========================================\n     10. WHATSAPP FLUTUANTE\n     Mover acima da sticky bar + bottom nav\n     Sticky bar: bottom 60px, h=79px → topo em 139px\n     ========================================== */\n\n  #popup-msg-whats {\n    bottom: 152px !important;\n  }\n\n\n  /* ==========================================\n     11. STICKY BAR\n     ========================================== */\n\n  /* PDP Mobile: WA e back-to-top acima da sticky bar\n     Bottom nav: 60px + Sticky bar: 77px = 137px → WA a 152px, BTT a 214px */\n  #mm-floating-whatsapp {\n    bottom: 152px !important;\n  }\n\n  .back-to-top {\n    bottom: 214px !important;\n  }\n\n  #produto-react-app .comprar-fixo {\n    padding: 10px 16px !important;\n    box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.08) !important;\n    background: #ffffff !important;\n    border-top: 1px solid #f0f0f0 !important;\n    z-index: 99 !important;\n    gap: 12px !important;\n  }\n\n  #produto-react-app .comprar-fixo .price-fixed {\n    flex-shrink: 0 !important;\n  }\n\n  #produto-react-app .comprar-fixo > button {\n    border-radius: 12px !important;\n    font-size: 16px !important;\n    font-weight: 600 !important;\n    padding: 14px 24px !important;\n    flex: 1 !important;\n    max-width: 200px !important;\n  }\n\n  /* Preço riscado na sticky bar */\n  #produto-react-app .comprar-fixo #mm-sticky-old-price {\n    text-decoration: line-through !important;\n    color: #999 !important;\n    font-size: 11px !important;\n    line-height: 1.2 !important;\n    display: block !important;\n    margin-bottom: 1px !important;\n  }\n\n\n  /* ==========================================\n     12. DESCRIÇÃO — Tipografia\n     ========================================== */\n\n  #pagina-produto-react-app .descricao-produto.accordion {\n    border-top: 1px solid #f0f0f0 !important;\n  }\n\n  #pagina-produto-react-app .descricao-produto h2,\n  #pagina-produto-react-app .descricao-produto h3 {\n    font-size: 18px !important;\n    color: #1a1a1a !important;\n    margin-top: 20px !important;\n    margin-bottom: 10px !important;\n    line-height: 1.4 !important;\n  }\n\n  #pagina-produto-react-app .descricao-produto p {\n    font-size: 15px !important;\n    line-height: 1.7 !important;\n    color: #444 !important;\n  }\n\n  #pagina-produto-react-app .descricao-produto li {\n    font-size: 15px !important;\n    line-height: 1.7 !important;\n    color: #444 !important;\n  }\n\n\n  /* ==========================================\n     13. ACCORDIONS — Separadores\n     ========================================== */\n\n  #pagina-produto-react-app .recomendacao-ctn-0.accordion,\n  #pagina-produto-react-app .produtos-relacionados.accordion {\n    border-top: 1px solid #f0f0f0 !important;\n  }\n\n  /* Ocultar avaliações vazias (0) em cross-sell e relacionados */\n  .recomendacao-ctn-0 .average-rating[data-value=\"0.00\"],\n  .recomendacao-ctn-0 .average-rating[data-value=\"0.00\"] ~ .qtd-aval,\n  .produtos-relacionados .average-rating[data-value=\"0.00\"],\n  .produtos-relacionados .average-rating[data-value=\"0.00\"] ~ .qtd-aval {\n    display: none !important;\n  }\n\n\n  /* ==========================================\n     14. AVALIAÇÕES — Verde\n     ========================================== */\n\n  .container-avaliacoes button,\n  .container-avaliacoes a[class*=\"btn\"] {\n    background-color: #4b664a !important;\n    border-color: #4b664a !important;\n    border-radius: 12px !important;\n    font-weight: 500 !important;\n  }\n\n\n  /* ==========================================\n     15. TAGS + LINKS\n     ========================================== */\n\n  #pagina-produto-react-app [class*=\"tags\"] a {\n    color: #4b664a !important;\n  }\n\n}\n\n\n/* =============================================\n   REGRAS GLOBAIS (mobile + desktop)\n   Fora do @media para aplicar em todos os viewports\n   ============================================= */\n\n/* Ocultar botão WhatsApp original (substituído por #mm-whatsapp-cta) */\n#produto-react-app .exibe-botao-whatsapp {\n  display: none !important;\n}\n\n/* Ocultar badge de desconto da galeria (% inconsistente com preço PIX) */\n#produto-react-app .tag-1.tag-produto {\n  display: none !important;\n}\n\n/* Reviews reformatados — reset do estilo original */\n#produto-react-app .avaliacoes {\n  display: flex !important;\n  align-items: center !important;\n}\n\n/* WhatsApp CTA inline */\n#produto-react-app #mm-whatsapp-cta {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 8px !important;\n  width: 100% !important;\n  height: 44px !important;\n  padding: 0 16px !important;\n  background: #ffffff !important;\n  color: #4b664a !important;\n  border: 1.5px solid #4b664a !important;\n  border-radius: 10px !important;\n  text-decoration: none !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  font-family: inherit !important;\n  transition: all 0.15s ease !important;\n  cursor: pointer !important;\n  -webkit-tap-highlight-color: transparent !important;\n  box-sizing: border-box !important;\n}\n\n#produto-react-app #mm-whatsapp-cta:hover {\n  background: #f7f8f7 !important;\n}\n\n/* Action row — flex em todos os viewports */\n#produto-react-app #mm-action-row {\n  display: flex !important;\n  gap: 8px !important;\n  align-items: stretch !important;\n  width: 100% !important;\n}\n\n\n/* =============================================\n   DESKTOP OVERRIDES (min-width: 769px)\n   Ajustes para layout 2-colunas do desktop\n   ============================================= */\n\n@media (min-width: 769px) {\n\n  /* Limitar largura dos elementos injetados na coluna de info */\n  #produto-react-app #mm-trust-badges,\n  #produto-react-app #mm-action-row,\n  #produto-react-app #mm-whatsapp-cta,\n  #produto-react-app #mm-frete-progress,\n  #produto-react-app #mm-trust-block,\n  #produto-react-app #mm-inline-payments,\n  #produto-react-app #mm-mini-specs,\n  #produto-react-app #mm-envio-badge,\n  #produto-react-app #mm-stock-indicator,\n  #produto-react-app #mm-brand,\n  #produto-react-app .calculo-frete {\n    max-width: 36rem !important;\n  }\n\n  /* WhatsApp CTA — largura automática no desktop */\n  #produto-react-app #mm-whatsapp-cta {\n    width: fit-content !important;\n    padding: 0 24px !important;\n  }\n\n  /* Action row — layout e botões no desktop */\n  #produto-react-app #mm-action-row {\n    gap: 8px !important;\n  }\n\n  #produto-react-app #mm-action-row .salvar-favoritos,\n  #produto-react-app #mm-action-row .compartilhar-produto {\n    flex: 0 0 auto !important;\n    width: auto !important;\n  }\n\n  #produto-react-app #mm-action-row .salvar-favoritos button,\n  #produto-react-app #mm-action-row .compartilhar-produto button {\n    width: 44px !important;\n    min-width: 44px !important;\n    height: 42px !important;\n    padding: 0 !important;\n    border: 1.5px solid #dbe1db !important;\n    border-radius: 10px !important;\n    background: #ffffff !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    cursor: pointer !important;\n    color: #777 !important;\n  }\n\n  #produto-react-app #mm-action-row .salvar-favoritos button:hover,\n  #produto-react-app #mm-action-row .compartilhar-produto button:hover {\n    background: #f7f8f7 !important;\n  }\n\n  /* Trust badges — alinhar à esquerda no desktop */\n  #produto-react-app #mm-trust-badges {\n    justify-content: flex-start !important;\n  }\n\n  /* Desktop sticky bar */\n  #mm-desktop-sticky button {\n    transition: background 0.15s ease !important;\n  }\n  #mm-desktop-sticky button:hover {\n    background: #3d5340 !important;\n  }\n\n}\n\n\n/* =============================================\n   DESKTOP PDP — Otimizações de conversão\n   Compactar a coluna de info para CTA no fold\n   ============================================= */\n\n@media (min-width: 769px) {\n\n  /* Reduzir gap da área de compra desktop (Magazord default gap-space-40 = 40px) */\n  #produto-react-app .informacoes-compra-produto,\n  #produto-react-app .informacoes-compra-produto.gap-space-40 {\n    gap: 12px !important;\n    row-gap: 12px !important;\n  }\n\n  /* Eliminar gap entre avaliações e próximo elemento */\n  #produto-react-app .informacoes-compra-produto > .flex.flex-col.gap-space-16:first-child {\n    gap: 4px !important;\n  }\n\n  /* Compactar derivações */\n  #produto-react-app .derivacoes-produto {\n    padding-top: 8px !important;\n    padding-bottom: 4px !important;\n  }\n\n  /* Mini specs mais compactos */\n  #produto-react-app #mm-mini-specs {\n    padding: 4px 0 !important;\n  }\n\n  /* Botão comprar — mais destacado */\n  #produto-react-app #area-comprar button[class*=\"bg-primary\"] {\n    font-size: 16px !important;\n    font-weight: 600 !important;\n    padding: 14px 32px !important;\n    border-radius: 12px !important;\n  }\n\n  /* Trust block full-width desktop */\n  #mm-trust-block {\n    max-width: 1200px !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n\n  /* Action row desktop — ícones pequenos, inline */\n  #produto-react-app #mm-action-row {\n    gap: 8px !important;\n  }\n\n  /* WhatsApp CTA desktop — menos destaque, ação secundária */\n  #produto-react-app #mm-whatsapp-cta {\n    height: 38px !important;\n    font-size: 13px !important;\n  }\n\n}\n";document.head.appendChild(s)})();

  /* Inject CSS: variacoes.css */
  (function(){if(document.getElementById("mm-variacoes-css"))return;var s=document.createElement("style");s.id="mm-variacoes-css";s.textContent="/* ============================================\n   VARIÁVEIS CSS CUSTOMIZÁVEIS\n   ============================================ */\n@media (min-width: 1024px) {\n      .h-\\[650px\\],\n      [class*=\"h-[650px]\"] {\n          height: auto !important;\n          max-height: 650px !important;\n      }\n\n      .gallery-main .swiper-slide img {\n          max-height: 650px !important;\n          width: auto !important;\n          height: auto !important;\n          object-fit: contain !important;\n      }\n\n      .gallery-main .swiper,\n      [class*=\"swiper\\]:h-\\[650px\\]\"] .swiper {\n          height: auto !important;\n          max-height: 650px !important;\n      }\n\n      .gallery-main .swiper-slide img {\n          width: 100% !important;\n          height: auto !important;\n          object-fit: contain !important;\n      }\n\n      \n\n      .tags-info-product {\n          position: absolute !important;\n          top: 8px !important;\n          left: 8px !important;\n          z-index: 10 !important;\n          margin: 0 !important;\n      }\n\n      .gallery-main .swiper {\n          height: auto !important;\n      }\n\n      .gallery-main .swiper-wrapper {\n          height: auto !important;\n          align-items: center !important;\n      }\n\n      .gallery-main .swiper-slide {\n          height: auto !important;\n      }\n\n      .gallery-main .swiper-slide img {\n          width: 100% !important;\n          height: auto !important;\n          object-fit: contain !important;\n      }\n\n      .tags-info-product span {\n          border-radius: 999px !important;\n      }\n      .gallery-main .swiper-slide img {\n          object-fit: cover !important;\n      }\n  }\n\n.tag-value {\n    border-radius: 999px !important;\n}\n\n:root {\n    /* Cores principais - MINIMALISTA */\n    --pill-color-selected: rgb(75, 102, 74);\n    --pill-color-selected-hover: rgb(65, 92, 64);\n    --pill-color-normal: #FFFFFF;\n    --pill-color-normal-hover: rgb(249, 250, 251);\n    --pill-color-disabled: rgb(245, 245, 245);\n\n    /* Cores de texto */\n    --pill-text-selected: #FFFFFF;\n    --pill-text-normal: rgb(55, 65, 81);\n    --pill-text-disabled: #9CA3AF;\n\n    /* Borders */\n    --pill-border-selected: rgb(75, 102, 74);\n    --pill-border-normal: rgb(209, 213, 219);\n    --pill-border-disabled: rgb(229, 231, 235);\n\n    /* Espaçamentos */\n    --pill-padding-vertical: 12px;\n    --pill-padding-horizontal: 20px;\n    --pill-gap: 12px;\n    --pill-group-gap: 16px;\n\n    /* Tipografia */\n    --pill-font-size: 15px;\n    --pill-font-weight: 500;\n    --pill-font-weight-selected: 600;\n    --pill-line-height: 1.4;\n\n    /* Border radius - design arredondado */\n    --pill-radius: 40px;\n\n    /* Transições */\n    --pill-transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n\n    /* Shadows */\n    --pill-shadow-normal: 0 1px 2px rgba(0, 0, 0, 0.05);\n    --pill-shadow-hover: 0 2px 4px rgba(0, 0, 0, 0.1);\n    --pill-shadow-selected: 0 2px 4px rgba(75, 102, 74, 0.15);\n    --pill-shadow-focus: 0 0 0 3px rgba(75, 102, 74, 0.2);\n\n    /* ============================================\n       VARIÁVEIS ESPECÍFICAS PARA CORES (IMAGENS)\n       ============================================ */\n    --color-swatch-size: 128px;\n    --color-swatch-size-mobile: 96px;\n    --color-image-size: 128px;\n    --color-image-size-mobile: 96px;\n    --color-border-width: 2px;\n    --color-border-width-selected: 3px;\n    --color-border-radius: 8px;\n}\n\n/* ============================================\n   RESET E BASE STYLES\n   ============================================ */\n.product-variations-pills-container,\n.product-variations-pills-container * {\n    box-sizing: border-box;\n}\n\n/* ============================================\n   GRUPOS DE VARIAÇÃO - LAYOUT MINIMALISTA\n   ============================================ */\n.variation-pill-group {\n    margin-bottom: var(--pill-group-gap);\n}\n\n.variation-pill-group:last-child {\n    margin-bottom: 0;\n}\n\n.variation-pill-label {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    font-size: 14px;\n    font-weight: 400;\n    color: #6B7280;\n    margin-bottom: 12px;\n    letter-spacing: 0.01em;\n}\n\n/* Valor selecionado ao lado do label */\n.variation-pill-label-value {\n    font-weight: 600;\n    color: #1F2937;\n}\n\n.variation-pill-required {\n    color: #EF4444;\n    margin-left: 2px;\n}\n\n/* ============================================\n   CONTAINER DE PILLS E SWATCHES\n   ============================================ */\n.variation-pills-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--pill-gap);\n    align-items: center;\n}\n\n/* ============================================\n   PILLS PADRÃO - ESTRUTURA HTML SEMÂNTICA\n   ============================================ */\n\n/* Input radio escondido mas acessível */\n.variation-pill-input {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0;\n}\n\n/* Label como pill visual (para variações SEM imagem) */\n.variation-pill {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    padding: var(--pill-padding-vertical) var(--pill-padding-horizontal);\n    font-size: var(--pill-font-size);\n    font-weight: var(--pill-font-weight);\n    line-height: var(--pill-line-height);\n    color: var(--pill-text-normal);\n    background-color: var(--pill-color-normal);\n    border: 2px solid var(--pill-border-normal);\n    border-radius: var(--pill-radius);\n    cursor: pointer;\n    transition: var(--pill-transition);\n    user-select: none;\n    box-shadow: var(--pill-shadow-normal);\n    min-height: 44px;\n    text-align: center;\n    white-space: nowrap;\n    position: relative;\n}\n\n.variation-pill:hover {\n    background-color: var(--pill-color-normal-hover);\n    border-color: var(--pill-color-selected);\n    box-shadow: var(--pill-shadow-hover);\n    transform: translateY(-1px);\n}\n\n.variation-pill-input:checked + .variation-pill {\n    background-color: var(--pill-color-selected);\n    border-color: var(--pill-border-selected);\n    color: var(--pill-text-selected);\n    font-weight: var(--pill-font-weight-selected);\n    box-shadow: var(--pill-shadow-selected);\n}\n\n.variation-pill-input:checked + .variation-pill:hover {\n    background-color: var(--pill-color-selected-hover);\n    transform: translateY(0);\n}\n\n.variation-pill-input:focus + .variation-pill {\n    outline: 3px solid var(--pill-color-selected);\n    outline-offset: 2px;\n    box-shadow: var(--pill-shadow-focus);\n}\n\n.variation-pill-input:focus:not(:focus-visible) + .variation-pill {\n    outline: none;\n}\n\n.variation-pill-input:disabled + .variation-pill {\n    background-color: var(--pill-color-disabled);\n    border-color: var(--pill-border-disabled);\n    color: var(--pill-text-disabled);\n    cursor: not-allowed;\n    opacity: 0.6;\n    pointer-events: none;\n}\n\n/* ============================================\n   COLOR SWATCHES - IMAGENS GRANDES\n   ============================================ */\n\n/* Container específico para swatches de cor */\n.variation-swatches-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--pill-gap);\n    align-items: flex-start;\n}\n\n/* Wrapper do swatch (contém imagem + nome no mobile) */\n.variation-color-swatch-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n    width: var(--color-swatch-size);\n    cursor: pointer;\n    position: relative; /* Para o tooltip */\n}\n\n/* Label como swatch de cor (quadrado com imagem) */\n.variation-color-swatch {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--color-swatch-size);\n    height: var(--color-swatch-size);\n    padding: 0;\n    background-color: #FFFFFF;\n    border: var(--color-border-width) solid var(--pill-border-normal);\n    border-radius: var(--color-border-radius);\n    cursor: pointer;\n    transition: var(--pill-transition);\n    user-select: none;\n    position: relative;\n    overflow: hidden; /* Mantém para a imagem */\n}\n\n/* Imagem dentro do swatch */\n.variation-color-swatch-image {\n    width: var(--color-image-size);\n    height: var(--color-image-size);\n    object-fit: cover;\n    display: block;\n    border-radius: calc(var(--color-border-radius) - 2px);\n}\n\n/* Hover state - Desktop only */\n@media (hover: hover) and (pointer: fine) {\n    .variation-color-swatch-wrapper:hover .variation-color-swatch {\n        border-color: var(--pill-color-selected);\n        box-shadow: var(--pill-shadow-hover);\n        transform: scale(1.03);\n    }\n}\n\n/* Selected state */\n.variation-pill-input:checked + .variation-color-swatch-wrapper .variation-color-swatch {\n    border-color: var(--pill-border-selected);\n    border-width: var(--color-border-width-selected);\n    box-shadow: 0 0 0 1px var(--pill-border-selected);\n}\n\n.variation-pill-input:checked + .variation-color-swatch-wrapper:hover .variation-color-swatch {\n    transform: scale(1);\n}\n\n/* Focus state */\n.variation-pill-input:focus + .variation-color-swatch-wrapper .variation-color-swatch {\n    outline: 3px solid var(--pill-color-selected);\n    outline-offset: 2px;\n}\n\n.variation-pill-input:focus:not(:focus-visible) + .variation-color-swatch-wrapper .variation-color-swatch {\n    outline: none;\n}\n\n/* Disabled state */\n.variation-pill-input:disabled + .variation-color-swatch-wrapper {\n    opacity: 0.5;\n    cursor: not-allowed;\n    pointer-events: none;\n}\n\n.variation-pill-input:disabled + .variation-color-swatch-wrapper .variation-color-swatch::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 0;\n    right: 0;\n    height: 2px;\n    background: #EF4444;\n    transform: rotate(-45deg);\n}\n\n/* ============================================\n   NOME DA COR - MOBILE ONLY\n   ============================================ */\n.variation-color-swatch-name {\n    display: none; /* Escondido no desktop */\n    width: 100%;\n    font-size: 11px;\n    font-weight: 500;\n    color: #374151;\n    text-align: center;\n    line-height: 1.3;\n    \n    /* Truncamento de texto */\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n/* Nome da cor quando selecionado */\n.variation-pill-input:checked + .variation-color-swatch-wrapper .variation-color-swatch-name {\n    font-weight: 600;\n    color: var(--pill-color-selected);\n}\n\n/* ============================================\n   TOOLTIP - DESKTOP ONLY (no wrapper, não no swatch)\n   ============================================ */\n@media (hover: hover) and (pointer: fine) {\n    .variation-color-swatch-wrapper[data-tooltip] {\n        position: relative;\n    }\n\n    .variation-color-swatch-wrapper[data-tooltip]::before {\n        content: attr(data-tooltip);\n        position: absolute;\n        bottom: calc(100% + 8px);\n        left: 50%;\n        transform: translateX(-50%) translateY(4px);\n        padding: 8px 14px;\n        background-color: #1F2937;\n        color: #FFFFFF;\n        font-size: 13px;\n        font-weight: 500;\n        white-space: nowrap;\n        border-radius: 6px;\n        opacity: 0;\n        visibility: hidden;\n        transition: all 0.2s ease;\n        z-index: 1000;\n        pointer-events: none;\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n    }\n\n    .variation-color-swatch-wrapper[data-tooltip]::after {\n        content: '';\n        position: absolute;\n        bottom: calc(100% + 2px);\n        left: 50%;\n        transform: translateX(-50%) translateY(4px);\n        border: 6px solid transparent;\n        border-top-color: #1F2937;\n        opacity: 0;\n        visibility: hidden;\n        transition: all 0.2s ease;\n        z-index: 1000;\n    }\n\n    .variation-color-swatch-wrapper[data-tooltip]:hover::before,\n    .variation-color-swatch-wrapper[data-tooltip]:hover::after {\n        opacity: 1;\n        visibility: visible;\n        transform: translateX(-50%) translateY(0);\n    }\n}\n\n/* ============================================\n   BADGE DE INDISPONÍVEL\n   ============================================ */\n.variation-pill-badge {\n    display: inline-block;\n    font-size: 10px;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    margin-left: 6px;\n    padding: 2px 6px;\n    background: rgba(239, 68, 68, 0.1);\n    color: #EF4444;\n    border-radius: 12px;\n}\n\n/* ============================================\n   LOADING STATE\n   ============================================ */\n.variation-pill-group.is-loading {\n    position: relative;\n    pointer-events: none;\n    opacity: 0.6;\n}\n\n.variation-pill-group.is-loading::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 20px;\n    height: 20px;\n    margin: -10px 0 0 -10px;\n    border: 3px solid var(--pill-color-normal);\n    border-top-color: var(--pill-color-selected);\n    border-radius: 50%;\n    animation: pill-spin 0.8s linear infinite;\n}\n\n@keyframes pill-spin {\n    to { transform: rotate(360deg); }\n}\n\n/* ============================================\n   RESPONSIVE DESIGN - MOBILE\n   ============================================ */\n@media (max-width: 767px) {\n    .product-variations-pills-container {\n        margin: 16px 0;\n    }\n\n    .variation-pill {\n        font-size: 14px;\n        padding: 10px 16px;\n        min-height: 44px;\n    }\n\n    .variation-pills-container,\n    .variation-swatches-container {\n        gap: 10px;\n    }\n\n    /* Swatches menores no mobile */\n    .variation-color-swatch-wrapper {\n        width: var(--color-swatch-size-mobile);\n    }\n\n    .variation-color-swatch {\n        width: var(--color-swatch-size-mobile);\n        height: var(--color-swatch-size-mobile);\n    }\n\n    .variation-color-swatch-image {\n        width: var(--color-image-size-mobile);\n        height: var(--color-image-size-mobile);\n    }\n\n    /* Mostrar nome da cor no mobile */\n    .variation-color-swatch-name {\n        display: block;\n    }\n\n    /* Esconder tooltip no mobile (usa o nome visível) */\n    .variation-color-swatch-wrapper[data-tooltip]::before,\n    .variation-color-swatch-wrapper[data-tooltip]::after {\n        display: none !important;\n    }\n}\n\n/* ============================================\n   ACESSIBILIDADE\n   ============================================ */\n.variation-pill-sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0;\n}\n\n@media (prefers-contrast: high) {\n    .variation-pill,\n    .variation-color-swatch {\n        border-width: 3px;\n    }\n}\n\n@media (prefers-reduced-motion: reduce) {\n    *,\n    *::before,\n    *::after {\n        animation-duration: 0.01ms !important;\n        animation-iteration-count: 1 !important;\n        transition-duration: 0.01ms !important;\n    }\n}\n\n/* ============================================\n   ESCONDER ELEMENTOS ANTIGOS\n   ============================================ */\n.sugestoes-cores,\n.produtos-sugeridos,\n.area-produtos-sugeridos,\n#produto-react-app > div > div.informacoes-compra-produto.flex.flex-col.p-4.relative.gap-space-40 > div.flex.flex-col.gap-space-16 > div.flex.flex-col > div.text-secondary-700.text-xs.md\\:text-sm {\n    display: none !important;\n    visibility: hidden !important;\n}";document.head.appendChild(s)})();

  /* Inject CSS: cart-sheet.css */
  (function(){if(document.getElementById("mm-cart-sheet-css"))return;var s=document.createElement("style");s.id="mm-cart-sheet-css";s.textContent="/* =============================================\n   CARRINHO MOBILE - Override Magazord v2\n   Referencia: Figma \"Cart List\" - Furniture eCommerce\n\n   COMO APLICAR NO MAGAZORD:\n   - Conteudo Adicional > Novo\n   - Posicao: Cabecalho Superior\n   - Filtro dispositivo: Mobile\n   - Aplicar em: TODAS AS PAGINAS (nao apenas Home)\n\n   SELETORES: baseados no DOM mobile real do Magazord\n   #cart-preview-area como raiz\n\n   APIs Magazord descobertas (referencia):\n   - Zord.checkout.adicionaQuantidade(dataId)\n   - Zord.checkout.removeQuantidade(dataId, true)\n   - Zord.checkout.deleteItem(dataId)\n   - Zord.checkout.atualizaPreview()\n   - Zord.checkout.atualizaContadorCarrinho()\n   - .cart-remove-item[data-id] = ID interno do item\n   ============================================= */\n\n@media (max-width: 768px) {\n\n  /* ==========================================\n     SITE HEADER - esconder quando carrinho aberto\n     ========================================== */\n\n  #cart-preview-area .shadow-overlay {\n    background: #f4f4f4 !important;\n  }\n\n  /* Esconder header APENAS quando overlay do CARRINHO abre\n     - Usa .content-cart como classe exclusiva do overlay do carrinho (descendente, não :has aninhado)\n     - Não afeta: Menu (z-20), Pesquisa (tem #frm-search), Favoritos (não tem .content-cart) */\n  header:has(.z-\\[9999\\].translate-x-\\[0\\] .content-cart) > .z-40 {\n    display: none !important;\n  }\n\n  header:has(.z-\\[9999\\].translate-x-\\[0\\] .content-cart) > .fixed.bottom-0 {\n    visibility: hidden !important;\n    height: 0 !important;\n    min-height: 0 !important;\n    overflow: hidden !important;\n    padding: 0 !important;\n  }\n\n  header:has(.z-\\[9999\\].translate-x-\\[0\\] .content-cart) > .fixed.bottom-0 #cart-preview-area,\n  header:has(.z-\\[9999\\].translate-x-\\[0\\] .content-cart) > .fixed.bottom-0 #cart-preview-area .h-dvh,\n  header:has(.z-\\[9999\\].translate-x-\\[0\\] .content-cart) > .fixed.bottom-0 #cart-preview-area .h-dvh > div {\n    visibility: visible !important;\n  }\n\n  /* ==========================================\n     HEADER - fundo cinza, titulo + fechar\n     ========================================== */\n  #cart-preview-area .border-b.border-solid {\n    background: #f4f4f4 !important;\n    border-bottom: none !important;\n    padding: 16px 20px !important;\n    min-height: 56px !important;\n  }\n\n  #cart-preview-area .border-b.border-solid > button {\n    font-size: 16px !important;\n    font-weight: 700 !important;\n    color: #1a1a1a !important;\n    background: transparent !important;\n    box-shadow: none !important;\n    padding: 0 !important;\n  }\n\n  #cart-preview-area .border-b.border-solid > button span {\n    font-size: 16px !important;\n    font-weight: 700 !important;\n    color: #1a1a1a !important;\n  }\n\n  #cart-preview-area .border-b.border-solid > button svg {\n    display: none !important;\n  }\n\n  /* Botao fechar - circulo branco com sombra */\n  #cart-preview-area .border-b.border-solid > div {\n    width: 40px !important;\n    height: 40px !important;\n    background: #ffffff !important;\n    border-radius: 50% !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    box-shadow: 0 2px 8px rgba(0,0,0,0.06) !important;\n    cursor: pointer !important;\n    padding: 0 !important;\n    border: none !important;\n  }\n\n  #cart-preview-area .border-b.border-solid > div span {\n    display: none !important;\n  }\n\n  #cart-preview-area .border-b.border-solid > div svg {\n    width: 16px !important;\n    height: 16px !important;\n  }\n\n  /* ==========================================\n     AREA DE CONTEUDO (lista de itens)\n     ========================================== */\n  #cart-preview-area .content-cart {\n    background: #f4f4f4 !important;\n    padding: 8px 20px 16px !important;\n    gap: 14px !important;\n  }\n\n  /* ==========================================\n     CARD DO PRODUTO\n     ========================================== */\n  #cart-preview-area .cart-item {\n    background: #ffffff !important;\n    border-radius: 16px !important;\n    padding: 12px !important;\n    min-height: auto !important;\n    box-shadow: none !important;\n    border: none !important;\n    overflow: hidden !important;\n    position: relative !important;\n  }\n\n  #cart-preview-area .cart-item > div {\n    gap: 12px !important;\n    padding: 0 !important;\n    align-items: flex-start !important;\n    min-height: auto !important;\n  }\n\n  /* ==========================================\n     IMAGEM DO PRODUTO - quadrada com bordas arredondadas\n     ========================================== */\n  #cart-preview-area .cart-item .prod-img {\n    width: 90px !important;\n    height: 90px !important;\n    min-width: 90px !important;\n    min-height: 90px !important;\n    max-width: 90px !important;\n    max-height: 90px !important;\n    border-radius: 12px !important;\n    overflow: hidden !important;\n    background: #ffffff !important;\n    border: none !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    margin-top: 0 !important;\n    flex-shrink: 0 !important;\n  }\n\n  #cart-preview-area .cart-item .prod-img figure {\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    width: 100% !important;\n    height: 100% !important;\n    overflow: hidden !important;\n    margin: 0 !important;\n  }\n\n  #cart-preview-area .cart-item .prod-img img {\n    width: 100% !important;\n    height: 100% !important;\n    max-height: 100% !important;\n    object-fit: cover !important;\n    border-radius: 0 !important;\n    mix-blend-mode: normal !important;\n  }\n\n  /* ==========================================\n     INFO DO PRODUTO\n     ========================================== */\n\n  #cart-preview-area .cart-item .prod-nome {\n    font-size: 14px !important;\n    font-weight: 700 !important;\n    color: #222222 !important;\n    line-height: 1.3 !important;\n    display: -webkit-box !important;\n    -webkit-line-clamp: 2 !important;\n    -webkit-box-orient: vertical !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    margin-bottom: 2px !important;\n  }\n\n  #cart-preview-area .cart-item .derivacao {\n    display: none !important;\n  }\n\n  /* Container preco + quantidade */\n  #cart-preview-area .cart-item .flex.items-center.justify-between {\n    flex-direction: column-reverse !important;\n    align-items: flex-start !important;\n    gap: 6px !important;\n  }\n\n  /* Valor do produto */\n  #cart-preview-area .cart-item .valor {\n    font-size: 14px !important;\n    font-weight: 700 !important;\n    color: #1a1a1a !important;\n    min-width: auto !important;\n    flex: none !important;\n    justify-content: flex-start !important;\n  }\n\n  #cart-preview-area .cart-item .valor span {\n    font-weight: 700 !important;\n    color: #1a1a1a !important;\n    font-size: 14px !important;\n  }\n\n  /* ==========================================\n     QUANTIDADE - botoes reais injetados pelo JS\n     ========================================== */\n  #cart-preview-area .cart-item .qtd-value {\n    display: flex !important;\n    align-items: center !important;\n    gap: 0 !important;\n    font-size: 0 !important;\n    width: auto !important;\n  }\n\n  /* Esconder pseudo-elements decorativos antigos (specificity alta para sobrescrever Magazord CDN) */\n  body #cart-preview-area .cart-item .qtd-value.flex.justify-center::before,\n  body #cart-preview-area .cart-item .qtd-value.flex.justify-center::after,\n  #cart-preview-area .content-cart .cart-item .qtd-value::before,\n  #cart-preview-area .content-cart .cart-item .qtd-value::after {\n    display: none !important;\n    content: none !important;\n    width: 0 !important;\n    height: 0 !important;\n    visibility: hidden !important;\n  }\n\n  /* Esconder span original \"Qtde: N\" e seus pseudo-elements decorativos */\n  #cart-preview-area .cart-item .qtd-value > span:not(.qty-display):not(.cart-remove-item) {\n    display: none !important;\n  }\n\n  /* Botoes reais de quantidade (injetados pelo JS) */\n  #cart-preview-area .qty-btn-minus,\n  #cart-preview-area .qty-btn-plus {\n    width: 30px !important;\n    height: 30px !important;\n    border: none !important;\n    cursor: pointer !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    font-size: 16px !important;\n    font-weight: 600 !important;\n    -webkit-tap-highlight-color: transparent !important;\n    outline: none !important;\n    padding: 0 !important;\n    line-height: 1 !important;\n  }\n\n  #cart-preview-area .qty-btn-minus {\n    background: transparent !important;\n    color: #1a1a1a !important;\n    font-size: 18px !important;\n  }\n\n  #cart-preview-area .qty-btn-plus {\n    background: #1b7a45 !important;\n    color: #ffffff !important;\n    border-radius: 8px !important;\n    font-size: 16px !important;\n  }\n\n  #cart-preview-area .qty-btn-plus:active {\n    background: #156335 !important;\n    transform: scale(0.95) !important;\n  }\n\n  #cart-preview-area .qty-display {\n    width: 28px !important;\n    text-align: center !important;\n    font-size: 15px !important;\n    font-weight: 600 !important;\n    color: #1a1a1a !important;\n  }\n\n  /* Trash icon - posicao absoluta no card */\n  #cart-preview-area .cart-item .cart-remove-item {\n    position: absolute !important;\n    top: 12px !important;\n    right: 12px !important;\n    opacity: 0.3 !important;\n    padding: 0 !important;\n    cursor: pointer !important;\n  }\n\n  #cart-preview-area .cart-item .cart-remove-item svg {\n    width: 14px !important;\n    height: 14px !important;\n  }\n\n  /* ==========================================\n     AREA INFERIOR - FINALIZAR COMPRA\n     ========================================== */\n  #cart-preview-area .border-t.border-solid {\n    background: #ffffff !important;\n    border-radius: 32px 32px 0 0 !important;\n    padding: 24px 24px 28px !important;\n    box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.05) !important;\n    border-top: none !important;\n  }\n\n  #cart-preview-area .title.boleto {\n    font-size: 14px !important;\n    color: #999999 !important;\n    font-weight: 400 !important;\n  }\n\n  #cart-preview-area .forma-pix {\n    padding: 4px 0 0 !important;\n  }\n\n  #cart-preview-area .valor-pix {\n    font-size: 22px !important;\n    font-weight: 700 !important;\n    color: #1a1a1a !important;\n  }\n\n  #cart-preview-area .valor-pix span {\n    font-size: 22px !important;\n    font-weight: 700 !important;\n    color: #1a1a1a !important;\n  }\n\n  /* Texto de parcelamento no total (injetado pelo JS) */\n  #cart-preview-area .installment-total {\n    font-size: 13px !important;\n    font-weight: 400 !important;\n    color: #999999 !important;\n    margin-top: 2px !important;\n  }\n\n  /* ==========================================\n     BOTAO FINALIZAR COMPRA\n     ========================================== */\n  #cart-preview-area .finalizar-compra {\n    background: #1b7a45 !important;\n    color: #ffffff !important;\n    border-radius: 63px !important;\n    padding: 16px 24px !important;\n    font-size: 16px !important;\n    font-weight: 700 !important;\n    letter-spacing: 0 !important;\n    text-transform: none !important;\n    border: none !important;\n    width: 100% !important;\n    text-align: center !important;\n    margin-top: 8px !important;\n  }\n\n  #cart-preview-area .finalizar-compra:active {\n    background: #156335 !important;\n    transform: scale(0.98) !important;\n  }\n\n  #cart-preview-area .finalizar-compra span {\n    font-size: 16px !important;\n    font-weight: 700 !important;\n    color: #ffffff !important;\n  }\n\n  #cart-preview-area .finalizar-compra svg path {\n    fill: #ffffff !important;\n  }\n\n  /* ==========================================\n     DELETE CONFIRM MODAL\n     ========================================== */\n  .mm-confirm-overlay {\n    position: fixed !important;\n    inset: 0 !important;\n    z-index: 99999 !important;\n    background: rgba(0,0,0,0.4) !important;\n    display: flex !important;\n    align-items: flex-end !important;\n    justify-content: center !important;\n    animation: mmConfirmIn 0.2s ease !important;\n    -webkit-backdrop-filter: blur(4px) !important;\n    backdrop-filter: blur(4px) !important;\n  }\n\n  @keyframes mmConfirmIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n  }\n\n  @keyframes mmSlideUp {\n    from { transform: translateY(100%); }\n    to { transform: translateY(0); }\n  }\n\n  .mm-confirm-card {\n    background: #ffffff !important;\n    border-radius: 24px 24px 0 0 !important;\n    padding: 28px 24px !important;\n    padding-bottom: max(28px, env(safe-area-inset-bottom)) !important;\n    width: 100% !important;\n    max-width: 420px !important;\n    animation: mmSlideUp 0.25s ease !important;\n  }\n\n  .mm-confirm-title {\n    font-size: 17px !important;\n    font-weight: 700 !important;\n    color: #1a1a1a !important;\n    margin: 0 0 6px !important;\n  }\n\n  .mm-confirm-desc {\n    font-size: 14px !important;\n    color: #6b7280 !important;\n    margin: 0 0 20px !important;\n    line-height: 1.4 !important;\n  }\n\n  .mm-confirm-actions {\n    display: flex !important;\n    gap: 10px !important;\n  }\n\n  .mm-confirm-btn {\n    flex: 1 !important;\n    height: 48px !important;\n    border: none !important;\n    border-radius: 14px !important;\n    font-size: 15px !important;\n    font-weight: 600 !important;\n    cursor: pointer !important;\n    -webkit-tap-highlight-color: transparent !important;\n  }\n\n  .mm-confirm-btn:active {\n    transform: scale(0.97) !important;\n  }\n\n  .mm-confirm-btn-cancel {\n    background: #f3f4f6 !important;\n    color: #1a1a1a !important;\n  }\n\n  .mm-confirm-btn-delete {\n    background: #ef4444 !important;\n    color: #ffffff !important;\n  }\n\n}";document.head.appendChild(s)})();

  /* Inject CSS: checkout-cro.css */
  (function(){if(document.getElementById("mm-checkout-cro-css"))return;var s=document.createElement("style");s.id="mm-checkout-cro-css";s.textContent="/* =============================================\n   CHECKOUT CRO - Madeira Mania (rebuild v2)\n   Rebuild limpo: \"shadow render\" strategy\n   - Esconde .cart-area + #resumo-compra .conteudo-resumo (source of truth)\n   - Renderiza #mm-layout com nossos próprios componentes\n   - Delega mutações pro Zord API (Zord.checkout.*)\n   - Re-renderiza em $(document).ajaxComplete\n   Design DNA: medusa storefront tokens adaptados ao brand real Madeira Mania\n   ============================================= */\n\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');\n\n\n/* ==========================================\n   ZONA 1 — Esconder Magazord (source of truth fica no DOM pra leitura)\n   ========================================== */\n\n/* Header checkout original Magazord (logo + Google + stepper) */\nbody.mm-checkout-rebuild .header-checkout,\nbody.mm-checkout-rebuild .header-template-checkout-03,\nbody.mm-checkout-rebuild .pagina-conteudo-adicional.conteudo-adicional-25 {\n  display: none !important;\n}\n\n/* Esconder distrações no checkout: ticker bar + popup whats flutuante */\nbody.mm-checkout-rebuild #tickerBar,\nbody.mm-checkout-rebuild .ticker-bar,\nbody.mm-checkout-rebuild #popup-msg-whats {\n  display: none !important;\n}\n\n/* Override do padding inflado do .checkout-main da Magazord */\nbody.mm-checkout-rebuild #checkout-main-area.checkout-main,\nbody.mm-checkout-rebuild #checkout-main-area,\nbody.mm-checkout-rebuild .checkout-main {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  margin-top: 0 !important;\n}\n\n#checkout-main-area.mm-shadow-mode .title-cart-area,\n#checkout-main-area.mm-shadow-mode #cart-area,\n#checkout-main-area.mm-shadow-mode .cart-area,\n#checkout-main-area.mm-shadow-mode #resumo-compra,\n#checkout-main-area.mm-shadow-mode .proxima-etapa,\n#checkout-main-area.mm-shadow-mode > .container > *:not(#mm-layout) {\n  position: absolute !important;\n  left: -99999px !important;\n  top: -99999px !important;\n  width: 1px !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  pointer-events: none !important;\n  opacity: 0 !important;\n}\n\n/* Libera o resumo-compra novamente SE ele for descendente do mm-layout (não é, mas paranoia) */\n#checkout-main-area.mm-shadow-mode #mm-layout,\n#checkout-main-area.mm-shadow-mode #mm-layout * {\n  position: static;\n  left: auto;\n  top: auto;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  pointer-events: auto;\n  opacity: 1;\n}\n\n\n/* ==========================================\n   ZONA 2 — Design tokens (scoped em #mm-layout)\n   ========================================== */\n\n#mm-layout {\n  /* Brand — olive do ticker/header + forest da PDP CTA */\n  --mm-olive:        #4B664A;\n  --mm-olive-dark:   #3D4733;\n  --mm-olive-soft:   rgba(75, 102, 74, 0.08);\n  --mm-cta:          #1b7a45;\n  --mm-cta-dark:     #155a33;\n  --mm-cta-soft:     rgba(27, 122, 69, 0.08);\n\n  /* Neutros (medusa-inspired) */\n  --mm-bg:           #FAFAFA;\n  --mm-card:         #FFFFFF;\n  --mm-border:       #E7E7E7;\n  --mm-border-soft:  #F0F0F0;\n  --mm-divider:      #EFEFEF;\n\n  /* Texto (escala WCAG-safe — todos os tons garantem 4.5:1 em 11px+) */\n  --mm-fg:           #121212;  /* ratio 17.4 — primary  */\n  --mm-fg-soft:      #374151;  /* ratio 10.4 — secondary  */\n  --mm-fg-meta:      #4B5563;  /* ratio 7.14 — tertiary, body small  */\n  --mm-fg-subtle:    #6B7280;  /* ratio 4.86 — meta info readable    */\n  --mm-fg-muted:     #9CA3AF;  /* ratio 2.54 — DECORATIVE ONLY (icons, dividers)  */\n\n  /* Semantic */\n  --mm-danger:       #DC2626;\n  --mm-danger-soft:  rgba(220, 38, 38, 0.08);\n  --mm-success:      #1b7a45;\n\n  /* Typography */\n  --mm-sans:         'Poppins', system-ui, -apple-system, sans-serif;\n  --mm-serif:        'Libre Baskerville', Georgia, serif;\n\n  /* Spacing (4px base) */\n  --mm-s1: 4px;\n  --mm-s2: 8px;\n  --mm-s3: 12px;\n  --mm-s4: 16px;\n  --mm-s5: 20px;\n  --mm-s6: 24px;\n  --mm-s8: 32px;\n  --mm-s10: 40px;\n\n  /* Radius */\n  --mm-r-sm:   4px;\n  --mm-r:      8px;\n  --mm-r-lg:   16px;\n  --mm-r-full: 9999px;\n\n  /* Shadows (flat brand — uso minimal) */\n  --mm-shadow-sm:  0 1px 2px rgba(17, 24, 39, 0.04);\n  --mm-shadow:     0 1px 3px rgba(17, 24, 39, 0.06), 0 1px 2px rgba(17, 24, 39, 0.04);\n  --mm-shadow-lg:  0 8px 24px rgba(17, 24, 39, 0.08);\n\n  /* Transitions — 500ms é slow-intentional (\"premium feel\" medusa) */\n  --mm-tr-fast: 180ms cubic-bezier(0.16, 1, 0.3, 1);\n  --mm-tr:      320ms cubic-bezier(0.16, 1, 0.3, 1);\n  --mm-tr-slow: 500ms cubic-bezier(0.16, 1, 0.3, 1);\n\n  font-family: var(--mm-sans);\n  color: var(--mm-fg);\n  font-size: 14px;\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n\n/* ==========================================\n   ZONA 3 — Layout grid\n   ========================================== */\n\n#mm-layout {\n  display: block;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: var(--mm-s6) var(--mm-s4) var(--mm-s10);\n  box-sizing: border-box;\n  animation: mm-fade-in 320ms cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n\n#mm-layout *,\n#mm-layout *::before,\n#mm-layout *::after {\n  box-sizing: border-box;\n}\n\n.mm-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--mm-s6);\n  align-items: start;\n}\n\n@media (min-width: 1024px) {\n  #mm-layout {\n    padding: var(--mm-s8) var(--mm-s6) var(--mm-s10);\n  }\n  .mm-grid {\n    grid-template-columns: 1fr 380px;\n    gap: var(--mm-s10);\n  }\n}\n\n\n/* ==========================================\n   ZONA 4 — Títulos + headings\n   ========================================== */\n\n.mm-h {\n  font-family: var(--mm-serif);\n  font-weight: 400;\n  font-size: clamp(28px, 4vw, 40px);\n  line-height: 1.15;\n  letter-spacing: -0.01em;\n  color: var(--mm-fg);\n  margin: 0 0 var(--mm-s5);\n  padding: 0;\n}\n\n.mm-eyebrow {\n  font-family: var(--mm-sans);\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--mm-fg-muted);\n  margin: 0;\n}\n\n\n/* ==========================================\n   ZONA 5 — Custom checkout header (substitui o Magazord)\n   Single-row layout: logo left, stepper center, secure right\n   Vertical alignment perfect via grid 3-col + center align\n   ========================================== */\n\n.mm-checkout-header {\n  padding: var(--mm-s5) 0;\n  margin-bottom: var(--mm-s5);\n  border-bottom: 1px solid var(--mm-border-soft);\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);\n  align-items: center;\n  gap: var(--mm-s5);\n  min-height: 72px;\n  animation: mm-fade-down 380ms cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n\n.mm-checkout-header-logo {\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  color: var(--mm-fg);\n  justify-self: start;\n  line-height: 0;\n}\n\n.mm-checkout-header-logo img {\n  height: 44px;\n  width: auto;\n  max-width: 180px;\n  display: block;\n}\n\n/* Stepper centered in middle column */\n.mm-checkout-steps {\n  display: inline-flex;\n  align-items: center;\n  justify-self: center;\n}\n\n.mm-checkout-steps ol {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: var(--mm-s3);\n}\n\n.mm-checkout-step {\n  display: inline-flex;\n  align-items: center;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--mm-fg-subtle);\n  white-space: nowrap;\n  letter-spacing: 0.02em;\n  line-height: 1;\n}\n\n.mm-checkout-step.is-active {\n  color: var(--mm-fg);\n  font-weight: 700;\n  position: relative;\n}\n\n.mm-checkout-step.is-active::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -8px;\n  height: 2px;\n  background: var(--mm-olive);\n  border-radius: 2px;\n}\n\n.mm-checkout-step-sep {\n  font-size: 14px;\n  color: var(--mm-fg-muted);\n  user-select: none;\n  line-height: 1;\n}\n\n/* Secure badge — right column */\n.mm-checkout-secure {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--mm-s2);\n  text-decoration: none;\n  color: var(--mm-fg);\n  justify-self: end;\n}\n\n.mm-checkout-secure svg {\n  color: var(--mm-olive);\n  flex-shrink: 0;\n  width: 18px;\n  height: 18px;\n}\n\n.mm-checkout-secure-text {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n\n.mm-checkout-secure-text strong {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--mm-fg);\n  letter-spacing: -0.01em;\n}\n\n.mm-checkout-secure-text small {\n  font-size: 12px;\n  color: var(--mm-fg-meta);\n  font-weight: 400;\n  margin-top: 1px;\n}\n\n/* Mobile: 2 rows — logo+secure on top, stepper on bottom */\n@media (max-width: 1023px) {\n  .mm-checkout-header {\n    grid-template-columns: auto auto;\n    grid-template-areas:\n      \"logo secure\"\n      \"steps steps\";\n    gap: var(--mm-s3) var(--mm-s4);\n    padding: var(--mm-s4) 0;\n    margin-bottom: var(--mm-s4);\n    min-height: 0;\n  }\n  .mm-checkout-header-logo {\n    grid-area: logo;\n  }\n  .mm-checkout-header-logo img {\n    height: 36px;\n  }\n  .mm-checkout-secure {\n    grid-area: secure;\n  }\n  .mm-checkout-secure svg {\n    width: 16px;\n    height: 16px;\n  }\n  .mm-checkout-secure-text strong { font-size: 12px; }\n  .mm-checkout-secure-text small { font-size: 11px; }\n  .mm-checkout-steps {\n    grid-area: steps;\n    justify-self: center;\n    padding-top: var(--mm-s2);\n  }\n  .mm-checkout-steps ol { gap: var(--mm-s2); }\n  .mm-checkout-step { font-size: 12px; }\n\n  /* Touch target compliance: bump qty buttons to 44 on mobile */\n  .mm-qty-btn {\n    width: 44px !important;\n    height: 44px !important;\n    min-width: 44px !important;\n    min-height: 44px !important;\n  }\n  .mm-qty-value {\n    min-width: 36px;\n    font-size: 15px;\n  }\n}\n\n@media (max-width: 540px) {\n  .mm-checkout-secure-text { display: none; }\n  .mm-checkout-header-logo img { height: 32px; }\n}\n\n\n/* ==========================================\n   ZONA 5b — Shipping nudge (goal-gradient)\n   Só renderiza ENQUANTO falta valor; some quando atinge.\n   ========================================== */\n\n.mm-nudge {\n  background: var(--mm-olive-soft);\n  border: 1px solid rgba(75, 102, 74, 0.15);\n  border-radius: var(--mm-r);\n  padding: var(--mm-s3) var(--mm-s4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--mm-s2);\n  animation: mm-fade-in 320ms var(--mm-tr) both;\n}\n\n.mm-nudge-head {\n  display: flex;\n  align-items: center;\n  gap: var(--mm-s2);\n  font-size: 12px;\n  line-height: 1.4;\n  color: var(--mm-fg);\n  font-weight: 500;\n}\n\n.mm-nudge-head svg {\n  flex-shrink: 0;\n  color: var(--mm-olive);\n}\n\n.mm-nudge-head strong {\n  color: var(--mm-olive);\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n\n.mm-nudge-track {\n  background: rgba(75, 102, 74, 0.18);\n  border-radius: var(--mm-r-full);\n  height: 4px;\n  overflow: hidden;\n}\n\n.mm-nudge-fill {\n  background: var(--mm-olive);\n  height: 100%;\n  border-radius: var(--mm-r-full);\n  transition: width 600ms cubic-bezier(0.16, 1, 0.3, 1);\n  will-change: width;\n}\n\n\n/* ==========================================\n   ZONA 6 — Cart items (single card with internal dividers)\n   ========================================== */\n\n.mm-items {\n  min-width: 0;\n}\n\n.mm-items-card {\n  background: var(--mm-card);\n  border: 1px solid var(--mm-border);\n  border-radius: var(--mm-r-lg);\n  padding: 0 var(--mm-s5);\n  animation: mm-fade-up 480ms cubic-bezier(0.16, 1, 0.3, 1) 80ms both;\n}\n\n.mm-items > .mm-h {\n  animation: mm-fade-down 380ms cubic-bezier(0.16, 1, 0.3, 1) 60ms both;\n}\n\n#mm-item-list {\n  display: flex;\n  flex-direction: column;\n}\n\n.mm-item {\n  padding: var(--mm-s5) 0;\n  display: grid;\n  grid-template-columns: 112px minmax(0, 1fr) auto;\n  gap: var(--mm-s4);\n  align-items: flex-start;\n  position: relative;\n  min-width: 0;\n  border-bottom: 1px solid var(--mm-border-soft);\n  transition: opacity var(--mm-tr);\n  animation: mm-fade-up 460ms cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n\n/* Stagger entrada dos cart items (até 6) */\n.mm-item:nth-child(1) { animation-delay: 140ms; }\n.mm-item:nth-child(2) { animation-delay: 200ms; }\n.mm-item:nth-child(3) { animation-delay: 260ms; }\n.mm-item:nth-child(4) { animation-delay: 320ms; }\n.mm-item:nth-child(5) { animation-delay: 380ms; }\n.mm-item:nth-child(6) { animation-delay: 440ms; }\n\n.mm-item:last-child {\n  border-bottom: none;\n}\n\n.mm-item > * {\n  min-width: 0;\n}\n\n.mm-item.is-updating {\n  opacity: 0.55;\n  pointer-events: none;\n}\n\n.mm-item-thumb {\n  width: 112px;\n  height: 112px;\n  border-radius: var(--mm-r);\n  overflow: hidden;\n  background: var(--mm-bg);\n  flex-shrink: 0;\n  position: relative;\n}\n\n.mm-item-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.mm-item-body {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  gap: var(--mm-s2);\n  padding-right: var(--mm-s6);\n}\n\n.mm-item-name {\n  font-family: var(--mm-sans);\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 1.35;\n  color: var(--mm-fg);\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-decoration: none;\n}\n\n.mm-item-name:hover {\n  color: var(--mm-olive);\n}\n\n.mm-item-name:focus-visible {\n  outline: 2px solid var(--mm-olive);\n  outline-offset: 2px;\n  border-radius: 2px;\n}\n\n.mm-checkout-header-logo:focus-visible {\n  outline: 2px solid var(--mm-olive);\n  outline-offset: 4px;\n  border-radius: 4px;\n}\n\n.mm-item-variant {\n  font-size: 12px;\n  color: var(--mm-fg-subtle);\n  margin: 0;\n}\n\n.mm-item-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--mm-s1);\n  background: #EEF3EE;  /* olive 8% on white, solid pra contrast checkers */\n  color: var(--mm-olive);\n  font-size: 12px;\n  font-weight: 600;\n  padding: 5px 12px;\n  border-radius: var(--mm-r-full);\n  margin-top: var(--mm-s1);\n  align-self: flex-start;\n  line-height: 1.2;\n}\n\n.mm-item-badge svg {\n  flex-shrink: 0;\n}\n\n.mm-item-controls {\n  grid-column: 2;\n  display: flex;\n  align-items: center;\n  gap: var(--mm-s4);\n  margin-top: var(--mm-s3);\n}\n\n.mm-item-price {\n  grid-column: 3;\n  grid-row: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  text-align: right;\n  gap: 2px;\n  white-space: nowrap;\n}\n\n.mm-item-price-value {\n  font-family: var(--mm-sans);\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--mm-fg);\n  line-height: 1.1;\n  font-variant-numeric: tabular-nums;\n}\n\n.mm-item-price-sub {\n  font-size: 12px;\n  color: var(--mm-olive);\n  font-weight: 600;\n  line-height: 1;\n  letter-spacing: 0.02em;\n}\n\n.mm-item-price-unit {\n  font-size: 12px;\n  color: var(--mm-fg-subtle);\n  font-weight: 400;\n  line-height: 1;\n  margin-top: 2px;\n}\n\n\n/* ==========================================\n   ZONA 7 — Quantity selector (rounded-full pill)\n   ========================================== */\n\n.mm-qty {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--mm-border);\n  border-radius: var(--mm-r-full);\n  padding: 4px;\n  background: var(--mm-card);\n  transition: border-color var(--mm-tr);\n}\n\n.mm-qty:hover {\n  border-color: #D1D5DB;\n}\n\n.mm-qty-btn {\n  width: 36px !important;\n  height: 36px !important;\n  min-width: 36px !important;\n  min-height: 36px !important;\n  border: none !important;\n  background: transparent !important;\n  border-radius: var(--mm-r-full) !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  color: var(--mm-fg-soft);\n  cursor: pointer;\n  padding: 0 !important;\n  font-family: var(--mm-sans);\n  transition: background-color var(--mm-tr-slow), color var(--mm-tr-slow);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mm-qty-btn svg {\n  flex-shrink: 0;\n  display: block;\n  width: 16px;\n  height: 16px;\n}\n\n.mm-qty-btn:hover:not(:disabled) {\n  background: var(--mm-bg);\n  color: var(--mm-fg);\n}\n\n.mm-qty-btn:active:not(:disabled) {\n  transform: scale(0.92);\n}\n\n.mm-qty-btn:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n\n.mm-qty-btn:focus-visible {\n  outline: 2px solid var(--mm-olive);\n  outline-offset: 2px;\n}\n\n.mm-qty-value {\n  min-width: 32px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--mm-fg);\n  font-variant-numeric: tabular-nums;\n  user-select: none;\n  padding: 0 var(--mm-s2);\n}\n\n\n/* Remove button (icon-only, minimalist, 44pt hit area) */\n.mm-item-remove {\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  background: transparent !important;\n  border: none !important;\n  color: var(--mm-fg-subtle);\n  cursor: pointer;\n  padding: 0 !important;\n  width: 44px !important;\n  height: 44px !important;\n  min-width: 44px !important;\n  min-height: 44px !important;\n  border-radius: var(--mm-r-full) !important;\n  transition: color var(--mm-tr), background-color var(--mm-tr);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mm-item-remove:hover {\n  color: var(--mm-danger);\n  background: var(--mm-danger-soft) !important;\n}\n\n.mm-item-remove:focus-visible {\n  outline: 2px solid var(--mm-olive);\n  outline-offset: 2px;\n}\n\n.mm-item-remove svg {\n  flex-shrink: 0;\n  width: 18px;\n  height: 18px;\n  display: block;\n}\n\n\n/* ==========================================\n   ZONA 8 — Summary card\n   ========================================== */\n\n.mm-sum {\n  min-width: 0;\n  position: relative;\n}\n\n@media (min-width: 1024px) {\n  .mm-sum {\n    position: sticky;\n    top: var(--mm-s5);\n  }\n}\n\n.mm-sum-card {\n  background: var(--mm-card);\n  border: 1px solid var(--mm-border);\n  border-radius: var(--mm-r-lg);\n  padding: var(--mm-s5);\n  display: flex;\n  flex-direction: column;\n  gap: var(--mm-s4);\n  animation: mm-fade-up 540ms cubic-bezier(0.16, 1, 0.3, 1) 180ms both;\n}\n\n.mm-sum > .mm-h {\n  animation: mm-fade-down 380ms cubic-bezier(0.16, 1, 0.3, 1) 120ms both;\n}\n\n.mm-help {\n  animation: mm-fade-in 400ms cubic-bezier(0.16, 1, 0.3, 1) 480ms both;\n}\n\n.mm-trust {\n  animation: mm-fade-in 400ms cubic-bezier(0.16, 1, 0.3, 1) 380ms both;\n}\n\n/* Sum stack: groups dynamic content (rows + coupon + total) with consistent gap */\n.mm-sum-stack {\n  display: flex;\n  flex-direction: column;\n  gap: var(--mm-s4);\n}\n\n\n/* ---- CEP input block ---- */\n.mm-cep {\n  display: flex;\n  flex-direction: column;\n  gap: var(--mm-s2);\n}\n\n.mm-cep-label {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--mm-s2);\n}\n\n.mm-cep-label-text {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--mm-fg-subtle);\n}\n\n.mm-cep-label-link {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--mm-olive);\n  text-decoration: none;\n  border-bottom: 1px solid var(--mm-olive-soft);\n  padding-bottom: 1px;\n  transition: border-color var(--mm-tr);\n}\n\n.mm-cep-label-link:hover {\n  border-bottom-color: var(--mm-olive);\n}\n\n.mm-cep-label-link:focus-visible {\n  outline: 2px solid var(--mm-olive);\n  outline-offset: 2px;\n  border-radius: 2px;\n}\n\n.mm-cep-row {\n  display: flex;\n  align-items: stretch;\n  gap: var(--mm-s2);\n}\n\n.mm-input {\n  flex: 1;\n  height: 48px !important;\n  min-height: 48px !important;\n  padding: 0 var(--mm-s5) !important;\n  background: var(--mm-card) !important;\n  border: 1px solid var(--mm-border) !important;\n  border-radius: var(--mm-r-full) !important;\n  font-family: var(--mm-sans) !important;\n  font-size: 16px !important;  /* 16px previne zoom no iOS */\n  font-weight: 500 !important;\n  color: var(--mm-fg) !important;\n  outline: none !important;\n  transition: border-color var(--mm-tr-slow), box-shadow var(--mm-tr-slow);\n  min-width: 0;\n  box-sizing: border-box !important;\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.mm-input::placeholder {\n  color: var(--mm-fg-subtle);\n  font-weight: 400;\n}\n\n.mm-input:hover {\n  border-color: #D1D5DB !important;\n}\n\n.mm-input:focus,\n.mm-input:focus-visible {\n  border-color: var(--mm-olive) !important;\n  box-shadow: 0 0 0 3px var(--mm-olive-soft) !important;\n}\n\n.mm-btn-secondary {\n  flex-shrink: 0;\n  height: 48px !important;\n  min-height: 48px !important;\n  padding: 0 var(--mm-s5) !important;\n  background: var(--mm-fg) !important;\n  color: #FFF !important;\n  border: none !important;\n  border-radius: var(--mm-r-full) !important;\n  font-family: var(--mm-sans) !important;\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.02em;\n  cursor: pointer;\n  transition: background-color var(--mm-tr-slow), transform 150ms;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: var(--mm-s1);\n  -webkit-tap-highlight-color: transparent;\n  box-sizing: border-box !important;\n}\n\n.mm-btn-secondary:hover {\n  background: var(--mm-olive-dark) !important;\n}\n\n.mm-btn-secondary:active {\n  transform: scale(0.97);\n}\n\n.mm-btn-secondary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.mm-btn-secondary:focus-visible {\n  outline: 3px solid var(--mm-olive);\n  outline-offset: 2px;\n}\n\n\n/* ---- Shipping result display ---- */\n.mm-shipping-result {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: var(--mm-s3);\n  background: var(--mm-bg);\n  border-radius: var(--mm-r);\n  border: 1px solid var(--mm-border-soft);\n  animation: mm-fade-in 320ms var(--mm-tr) both;\n}\n\n.mm-shipping-result-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--mm-s2);\n  font-size: 12px;\n}\n\n.mm-shipping-result-label {\n  color: var(--mm-fg-soft);\n  font-weight: 500;\n}\n\n.mm-shipping-result-value {\n  color: var(--mm-fg);\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n\n.mm-shipping-result-value.is-free {\n  color: var(--mm-olive);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  font-size: 11px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.mm-shipping-result-deadline {\n  color: var(--mm-fg-muted);\n  font-size: 11px;\n}\n\n\n/* ---- Divider ---- */\n.mm-divider {\n  border: none;\n  border-top: 1px solid var(--mm-divider);\n  margin: 0;\n}\n\n\n/* ---- Summary rows (Subtotal / Frete / Desconto) ---- */\n.mm-rows {\n  display: flex;\n  flex-direction: column;\n  gap: var(--mm-s3);\n}\n\n.mm-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--mm-s3);\n  font-size: 13px;\n}\n\n.mm-row-label {\n  color: var(--mm-fg-soft);\n  font-weight: 500;\n}\n\n.mm-row-sub {\n  color: var(--mm-fg-subtle);\n  font-weight: 400;\n  font-size: 12px;\n}\n\n.mm-row-value {\n  color: var(--mm-fg);\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n\n.mm-row-value.is-discount {\n  color: var(--mm-cta);\n}\n\n.mm-row-value.is-free {\n  color: var(--mm-olive);\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.mm-row-value.is-free svg {\n  flex-shrink: 0;\n  display: block;\n}\n\n\n/* ---- Total block ---- */\n.mm-total {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding-top: var(--mm-s3);\n  border-top: 1px solid var(--mm-divider);\n}\n\n.mm-total-label {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--mm-fg-subtle);\n  margin-bottom: 2px;\n}\n\n.mm-total-value {\n  font-family: var(--mm-serif);\n  font-size: 34px;\n  font-weight: 700;\n  color: var(--mm-fg);\n  line-height: 1.05;\n  letter-spacing: -0.01em;\n  font-variant-numeric: tabular-nums;\n  animation: mm-pop 400ms cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n\n.mm-total-pix {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--mm-s1) var(--mm-s2);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--mm-olive);\n  margin-top: var(--mm-s2);\n  font-variant-numeric: tabular-nums;\n}\n\n.mm-total-pix-save {\n  color: var(--mm-fg-muted);\n  font-weight: 500;\n  font-size: 11px;\n}\n\n.mm-total-parcela {\n  font-size: 12px;\n  color: var(--mm-fg-soft);\n  font-weight: 500;\n  margin-top: 2px;\n  font-variant-numeric: tabular-nums;\n}\n\n.mm-total-pending {\n  font-size: 12px;\n  color: var(--mm-fg-subtle);\n  font-weight: 500;\n  line-height: 1.4;\n  padding: var(--mm-s3) 0 0;\n}\n\n\n/* ---- Coupon (collapsible) ---- */\n.mm-coupon-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--mm-s2);\n  background: transparent;\n  border: 1px dashed var(--mm-border);\n  border-radius: var(--mm-r-full);\n  padding: var(--mm-s3) var(--mm-s4);\n  min-height: 44px;\n  font-family: var(--mm-sans);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--mm-fg-soft);\n  cursor: pointer;\n  align-self: flex-start;\n  transition: border-color var(--mm-tr), color var(--mm-tr);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mm-coupon-toggle:hover {\n  border-color: var(--mm-olive);\n  color: var(--mm-olive);\n}\n\n.mm-coupon-toggle:focus-visible {\n  outline: 2px solid var(--mm-olive);\n  outline-offset: 2px;\n}\n\n.mm-coupon-form {\n  display: none;\n  gap: var(--mm-s2);\n  align-items: stretch;\n}\n\n.mm-coupon.is-open .mm-coupon-toggle {\n  display: none;\n}\n\n.mm-coupon.is-open .mm-coupon-form {\n  display: flex;\n  animation: mm-fade-in 240ms var(--mm-tr) both;\n}\n\n.mm-coupon-applied {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--mm-s2);\n  background: var(--mm-olive-soft);\n  border: 1px solid var(--mm-olive-soft);\n  border-radius: var(--mm-r-full);\n  padding: var(--mm-s2) var(--mm-s3) var(--mm-s2) var(--mm-s4);\n  font-size: 12px;\n  animation: mm-fade-in 240ms var(--mm-tr) both;\n}\n\n.mm-coupon-applied-left {\n  display: flex;\n  align-items: center;\n  gap: var(--mm-s2);\n  font-weight: 600;\n  color: var(--mm-olive);\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n.mm-coupon-applied-left svg {\n  flex-shrink: 0;\n}\n\n.mm-coupon-applied button {\n  background: transparent;\n  border: none;\n  color: var(--mm-fg-muted);\n  cursor: pointer;\n  padding: 4px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--mm-r-full);\n  transition: color var(--mm-tr);\n}\n\n.mm-coupon-applied button:hover {\n  color: var(--mm-danger);\n}\n\n\n/* ---- Primary CTA ---- */\n.mm-cta {\n  background: var(--mm-cta) !important;\n  color: #FFFFFF !important;\n  border: none !important;\n  border-radius: var(--mm-r-full) !important;\n  padding: var(--mm-s4) var(--mm-s5) !important;\n  min-height: 56px !important;\n  font-family: var(--mm-sans) !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.01em;\n  cursor: pointer;\n  width: 100%;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: var(--mm-s2);\n  box-shadow: 0 4px 12px rgba(27, 122, 69, 0.22) !important;\n  transition: background-color var(--mm-tr-slow), box-shadow var(--mm-tr-slow), transform 150ms;\n  -webkit-tap-highlight-color: transparent;\n  outline: none !important;\n  box-sizing: border-box !important;\n}\n\n.mm-cta:hover {\n  background: var(--mm-cta-dark) !important;\n  box-shadow: 0 6px 20px rgba(27, 122, 69, 0.28) !important;\n}\n\n.mm-cta:active {\n  transform: translateY(1px);\n  box-shadow: 0 2px 6px rgba(27, 122, 69, 0.22) !important;\n}\n\n.mm-cta:focus-visible {\n  outline: 3px solid var(--mm-olive) !important;\n  outline-offset: 3px !important;\n}\n\n.mm-cta svg {\n  transition: transform var(--mm-tr-slow);\n}\n\n.mm-cta:hover svg {\n  transform: translateX(3px);\n}\n\n\n/* ---- Trust badges ---- */\n.mm-trust {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 6px 18px;\n  padding-top: var(--mm-s2);\n}\n\n.mm-trust-item {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--mm-s1);\n  font-size: 12px;\n  color: var(--mm-fg-subtle);\n  font-weight: 500;\n  white-space: nowrap;\n  line-height: 1;\n}\n\n.mm-trust-item svg {\n  flex-shrink: 0;\n  width: 13px;\n  height: 13px;\n  color: var(--mm-fg-muted);\n}\n\n\n/* ---- WhatsApp help block (objection breaker) ---- */\n.mm-help {\n  display: flex;\n  align-items: center;\n  gap: var(--mm-s3);\n  margin-top: var(--mm-s2);\n  padding: var(--mm-s3) var(--mm-s4);\n  background: #F4FCF7;  /* very subtle green-tint, solid for contrast checkers */\n  border: 1px solid #DDEFE3;\n  border-radius: var(--mm-r);\n  text-decoration: none;\n  color: var(--mm-fg);\n  font-size: 13px;\n  line-height: 1.4;\n  min-height: 56px;\n  transition: background-color var(--mm-tr-slow), border-color var(--mm-tr-slow);\n}\n\n.mm-help:hover {\n  background: #E9F8EE;\n  border-color: #BDDFC9;\n}\n\n.mm-help:focus-visible {\n  outline: 2px solid #25D366;\n  outline-offset: 2px;\n}\n\n.mm-help svg {\n  color: #25D366;\n  flex-shrink: 0;\n}\n\n.mm-help span {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n\n.mm-help strong {\n  display: block;\n  font-weight: 600;\n  color: var(--mm-fg);\n  font-size: 12px;\n  margin-bottom: 1px;\n}\n\n\n/* ==========================================\n   ZONA 9 — Empty cart state\n   ========================================== */\n\n.mm-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: var(--mm-s10) var(--mm-s4);\n  gap: var(--mm-s4);\n  background: var(--mm-card);\n  border: 1px solid var(--mm-border);\n  border-radius: var(--mm-r-lg);\n  animation: mm-fade-up 400ms var(--mm-tr) both;\n}\n\n.mm-empty-icon {\n  color: var(--mm-fg-muted);\n  margin-bottom: var(--mm-s2);\n}\n\n.mm-empty-title {\n  font-family: var(--mm-serif);\n  font-size: 24px;\n  font-weight: 400;\n  color: var(--mm-fg);\n  margin: 0;\n  letter-spacing: -0.01em;\n}\n\n.mm-empty-desc {\n  color: var(--mm-fg-soft);\n  font-size: 14px;\n  max-width: 380px;\n  margin: 0;\n}\n\n.mm-empty-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--mm-s2);\n  background: var(--mm-cta);\n  color: #FFF;\n  text-decoration: none;\n  padding: var(--mm-s3) var(--mm-s6);\n  border-radius: var(--mm-r-full);\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: var(--mm-s2);\n  box-shadow: 0 4px 12px rgba(27, 122, 69, 0.22);\n  transition: background-color var(--mm-tr-slow);\n}\n\n.mm-empty-cta:hover {\n  background: var(--mm-cta-dark);\n}\n\n.mm-empty-perks {\n  font-size: 11px;\n  color: var(--mm-fg-muted);\n  margin-top: var(--mm-s2);\n}\n\n\n/* ==========================================\n   ZONA 10 — Skeleton (loading state)\n   ========================================== */\n\n.mm-skel {\n  background: linear-gradient(\n    90deg,\n    var(--mm-border-soft) 0%,\n    #F7F7F7 50%,\n    var(--mm-border-soft) 100%\n  );\n  background-size: 200% 100%;\n  animation: mm-shimmer 1400ms ease-in-out infinite;\n  border-radius: var(--mm-r-sm);\n}\n\n.mm-skel-item {\n  padding: var(--mm-s5) 0;\n  display: grid;\n  grid-template-columns: 112px 1fr auto;\n  gap: var(--mm-s4);\n  align-items: flex-start;\n  border-bottom: 1px solid var(--mm-border-soft);\n}\n\n.mm-skel-item:last-child {\n  border-bottom: none;\n}\n\n.mm-skel-thumb {\n  width: 112px;\n  height: 112px;\n  border-radius: var(--mm-r);\n}\n\n.mm-skel-lines {\n  display: flex;\n  flex-direction: column;\n  gap: var(--mm-s2);\n  padding-top: var(--mm-s1);\n}\n\n.mm-skel-line {\n  height: 12px;\n}\n\n.mm-skel-line.w-full { width: 100%; }\n.mm-skel-line.w-3-4  { width: 75%; }\n.mm-skel-line.w-1-2  { width: 50%; }\n.mm-skel-line.w-1-3  { width: 33%; }\n\n\n/* ==========================================\n   ZONA 11 — Mobile responsive (< 1024px)\n   ========================================== */\n\n@media (max-width: 1023px) {\n  .mm-items-card {\n    padding: 0 var(--mm-s4);\n  }\n\n  .mm-item {\n    grid-template-columns: 88px minmax(0, 1fr);\n    grid-template-areas:\n      \"thumb body\"\n      \"thumb price\"\n      \"controls controls\";\n    gap: var(--mm-s2) var(--mm-s3);\n    padding: var(--mm-s4) 0;\n  }\n\n  .mm-item-thumb {\n    grid-area: thumb;\n    width: 88px;\n    height: 88px;\n    align-self: start;\n  }\n\n  .mm-item-body {\n    grid-area: body;\n    padding-right: 0;\n  }\n\n  .mm-item-controls {\n    grid-area: controls;\n    margin-top: var(--mm-s2);\n    grid-column: auto;\n    justify-content: space-between;\n  }\n\n  .mm-item-price {\n    grid-area: price;\n    align-items: flex-start;\n    text-align: left;\n    grid-column: auto;\n    grid-row: auto;\n  }\n\n  .mm-item-name {\n    font-size: 14px;\n  }\n\n  .mm-item-price-value {\n    font-size: 15px;\n  }\n\n  /* Touch target compliance: bump qty buttons to 44 on mobile (after base rule) */\n  .mm-qty-btn {\n    width: 44px !important;\n    height: 44px !important;\n    min-width: 44px !important;\n    min-height: 44px !important;\n  }\n  .mm-qty-value {\n    min-width: 36px;\n    font-size: 15px;\n  }\n\n  .mm-skel-item {\n    grid-template-columns: 88px 1fr;\n  }\n\n  .mm-skel-thumb {\n    width: 88px;\n    height: 88px;\n  }\n\n  .mm-h {\n    font-size: 26px;\n    margin-bottom: var(--mm-s3);\n  }\n\n  .mm-sum-card {\n    padding: var(--mm-s4);\n  }\n\n  .mm-total-value {\n    font-size: 30px;\n  }\n\n  .mm-cep-row {\n    flex-direction: row;\n  }\n\n  .mm-btn-secondary {\n    padding: 0 var(--mm-s4);\n    font-size: 12px;\n  }\n}\n\n@media (max-width: 480px) {\n  #mm-layout {\n    padding: var(--mm-s4) var(--mm-s3) var(--mm-s10);\n  }\n  .mm-item-thumb {\n    width: 80px;\n    height: 80px;\n  }\n  .mm-item {\n    grid-template-columns: 80px minmax(0, 1fr);\n  }\n  .mm-item-name {\n    font-size: 13px;\n  }\n  .mm-item-price-value {\n    font-size: 14px;\n  }\n}\n\n\n/* ==========================================\n   ZONA 12 — Keyframes\n   ========================================== */\n\n@keyframes mm-fade-in {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n\n@keyframes mm-fade-up {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes mm-fade-down {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes mm-pop {\n  0%   { opacity: 0; transform: scale(0.94); }\n  60%  { opacity: 1; transform: scale(1.02); }\n  100% { opacity: 1; transform: scale(1); }\n}\n\n@keyframes mm-shimmer {\n  0%   { background-position: 200% 0; }\n  100% { background-position: -200% 0; }\n}\n\n/* Respeitar prefers-reduced-motion */\n@media (prefers-reduced-motion: reduce) {\n  #mm-layout *,\n  #mm-layout *::before,\n  #mm-layout *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n\n/* ==========================================\n   ZONA 13 — Identify / Onepage (outras etapas do checkout)\n   Mantém só o mínimo de CRO copy + tap targets\n   ========================================== */\n\n.checkout-etapa-2 input,\n.checkout-etapa-3 input {\n  min-height: 44px !important;\n  font-size: 16px !important; /* previne zoom iOS */\n}\n\n#checkout-main-area .button-success,\n#checkout-main-area button.button-success {\n  min-height: 48px !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  border-radius: 9999px !important;\n  width: 100% !important;\n}\n";document.head.appendChild(s)})();

  /* Inject CSS: ticker.css */
  (function(){if(document.getElementById("mm-ticker-css"))return;var s=document.createElement("style");s.id="mm-ticker-css";s.textContent=".ticker-bar {\n    background-color: #4b664a;\n    overflow: hidden;\n    white-space: nowrap;\n    position: relative;\n    width: 100%;\n    padding: 10px 0;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n  .ticker-track {\n    display: inline-flex;\n    animation: ticker-scroll 65s linear infinite;\n  }\n\n  .ticker-track:hover {\n    animation-play-state: paused;\n  }\n\n  .ticker-item {\n    display: inline-flex;\n    align-items: center;\n    padding: 0 20px;\n    color: #f8f8f8;\n    font-size: 13px;\n    letter-spacing: 0.5px;\n    text-decoration: none;\n    white-space: nowrap;\n  }\n\n  .ticker-item a {\n    color: #f8f8f8;\n    text-decoration: none;\n  }\n\n  .ticker-item a:hover {\n    text-decoration: underline;\n  }\n\n  .ticker-separator {\n    display: inline-flex;\n    align-items: center;\n    color: #f8f8f8;\n    opacity: 0.5;\n    padding: 0 5px;\n    font-size: 10px;\n  }\n\n  .ticker-close {\n    position: absolute;\n    right: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n    background: none;\n    border: none;\n    color: #000000;\n    font-size: 16px;\n    cursor: pointer;\n    opacity: 0.5;\n    padding: 2px 6px;\n    line-height: 1;\n    z-index: 2;\n    transition: opacity 0.2s;\n  }\n\n  .ticker-close:hover {\n    opacity: 1;\n  }\n\n  @keyframes ticker-scroll {\n    0% {\n      transform: translateX(0);\n    }\n    100% {\n      transform: translateX(-50%);\n    }\n  }";document.head.appendChild(s)})();

  /* =============================================
     SEÇÃO 2: HTML INJECTION
     ============================================= */

  /* Inject HTML: ticker.html */
  (function(){if(document.getElementById("tickerBar"))return;var d=document.createElement("div");d.innerHTML="<div class=\"ticker-bar\" id=\"tickerBar\">\n  <button class=\"ticker-close\" onclick=\"document.getElementById('tickerBar').style.display='none'\" aria-label=\"Fechar\">×</button>\n  <div class=\"ticker-track\">\n    <!-- Bloco 1 (original) -->\n    <span class=\"ticker-item\">\n      🎟️ Use o cupom: <b> BEMVINDO </b>&nbsp;para garantir 5%OFF na sua primeira compra\n    </span>\n    <span class=\"ticker-separator\">•</span>\n    <span class=\"ticker-item\">\n      Parcele em até 12x sem juros no cartão\n    </span>\n    <span class=\"ticker-separator\">•</span>\n    <span class=\"ticker-item\">\n      🚚 Envios em até 24h para produtos pronta entrega\n    </span>\n    <span class=\"ticker-separator\">•</span>\n    <span class=\"ticker-item\">\n      Frete grátis em pedidos acima de R$ 2.000\n    </span>\n    <span class=\"ticker-separator\">•</span>\n    <span class=\"ticker-item\">\n      <a href=\"https://api.whatsapp.com/send?l=pt_BR&amp;phone=5511915299488&amp;text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos.\" target=\"_blank\">📞 11 91529-9488</a>\n    </span>\n    <span class=\"ticker-separator\">•</span>\n\n    <!-- Bloco 2 (duplicado para loop infinito) -->\n    <span class=\"ticker-item\">\n      🎟️ Use o cupom: <b> BEMVINDO </b>&nbsp;para garantir 5%OFF na sua primeira compra\n    </span>\n    <span class=\"ticker-separator\">•</span>\n    <span class=\"ticker-item\">\n      Parcele em até 12x sem juros no cartão\n    </span>\n    <span class=\"ticker-separator\">•</span>\n    <span class=\"ticker-item\">\n      🚚 Envios em até 24h para produtos pronta entrega\n    </span>\n    <span class=\"ticker-separator\">•</span>\n    <span class=\"ticker-item\">\n      Frete grátis em pedidos acima de R$ 2.000\n    </span>\n    <span class=\"ticker-separator\">•</span>\n    <span class=\"ticker-item\">\n      <a href=\"https://api.whatsapp.com/send?l=pt_BR&amp;phone=5511915299488&amp;text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos.\" target=\"_blank\">📞 11 91529-9488</a>\n    </span>\n    <span class=\"ticker-separator\">•</span>\n  </div>\n</div>";var el=d.firstElementChild;document.body.insertBefore(el,document.body.firstChild)})();

  /* =============================================
     SEÇÃO 3: EXTERNAL SCRIPT LOADERS
     ============================================= */

  /* === contentsquare-loader.js === */
  /* ContentSquare loader (ex CA-10) */
  (function() {
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
  
    /* Init SDKs — apenas os NOVOS (GA4 + Meta Pixel ja estao no site) */
    mmInitPostHog();
    setTimeout(function() { mmInitClarity(); }, 2000);
    setTimeout(function() { mmInitFingerprintJS(); }, 3000);
  
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
      lock: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
      shield: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
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
  
    function criarControlesQtd() {
      injetarParcelamentoTotal();
      var items = document.querySelectorAll('#cart-preview-area .qtd-value');
      items.forEach(function(qtdDiv) {
        // Evitar duplicar botoes
        if (qtdDiv.querySelector('.qty-btn-minus')) return;
  
        var spanQtd = qtdDiv.querySelector('span:first-child');
        if (!spanQtd) return;
  
        var match = spanQtd.textContent.match(/(\d+)/);
        var qty = match ? parseInt(match[1]) : 1;
  
        // Pegar data-id do botao remover (ID interno do Magazord)
        var removeBtn = qtdDiv.querySelector('.cart-remove-item');
        var dataId = removeBtn ? removeBtn.getAttribute('data-id') : null;
        if (!dataId) return;
  
        // Criar botao minus
        var btnMinus = document.createElement('button');
        btnMinus.className = 'qty-btn-minus';
        btnMinus.textContent = '\u2212';
        btnMinus.type = 'button';
        btnMinus.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          if (typeof Zord !== 'undefined' && Zord.checkout) {
            Zord.checkout.removeQuantidade(parseInt(dataId), true);
          }
        });
  
        // Criar display do numero
        var numDisplay = document.createElement('span');
        numDisplay.className = 'qty-display';
        numDisplay.textContent = qty;
  
        // Criar botao plus
        var btnPlus = document.createElement('button');
        btnPlus.className = 'qty-btn-plus';
        btnPlus.textContent = '+';
        btnPlus.type = 'button';
        btnPlus.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          if (typeof Zord !== 'undefined' && Zord.checkout) {
            Zord.checkout.adicionaQuantidade(parseInt(dataId));
          }
        });
  
        // Inserir botoes no inicio do qtdDiv (antes dos spans existentes)
        qtdDiv.insertBefore(btnPlus, qtdDiv.firstChild);
        qtdDiv.insertBefore(numDisplay, qtdDiv.firstChild);
        qtdDiv.insertBefore(btnMinus, qtdDiv.firstChild);
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
    var FRETE_GRATIS_THRESHOLD = 2000;
    var MM_LOGO_URL = 'https://madeiramania.cdn.magazord.com.br/resources/Design%20sem%20nome%20(1).svg';
    var MM_WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5511915299488&text=' + encodeURIComponent('Olá! Estou no checkout e gostaria de tirar uma dúvida sobre meu pedido.');
  
    var path = location.pathname;
    var isCart = path.indexOf('/checkout/cart') !== -1;
    var isIdentify = path.indexOf('/checkout/identify') !== -1;
    var isOnepage =
      path.indexOf('/checkout/onepage') !== -1 ||
      path.indexOf('/checkout/payment') !== -1;
  
    if (!isCart && !isIdentify && !isOnepage) return;
  
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
      truck: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
      check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
      checkCircle: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      bolt: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
      shield: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
      lock: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
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
      set: function(k, v) { try { localStorage.setItem(k, v); } catch(e) {} }
    };
  
  
    /* =============================================
       READ — extrai estado da DOM Magazord
       ============================================= */
  
    function readCart() {
      var state = {
        items: [],
        subtotalPix: 0,      /* valor em PIX (já descontado) */
        subtotalFull: 0,     /* soma de data-valor (preço cheio) */
        discount: 0,         /* desconto do cupom */
        shipping: null,      /* null = não calculado, 0 = grátis, > 0 = valor */
        shippingRaw: '',     /* texto original do frete-calculado */
        shippingDeadline: '',/* prazo em dias */
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
  
      /* Shipping */
      var freteEl = mainArea.querySelector('#resumo-compra .frete-calculado');
      if (freteEl && freteEl.textContent.trim()) {
        state.shippingRaw = freteEl.textContent.trim();
        if (/gr[aá]tis/i.test(state.shippingRaw)) {
          state.shipping = 0;
        } else {
          var parsed = parseBRL(state.shippingRaw);
          if (parsed > 0) state.shipping = parsed;
        }
        var deadlineMatch = state.shippingRaw.match(/(\d+)\s*dias?/i);
        if (deadlineMatch) state.shippingDeadline = deadlineMatch[1] + ' dias úteis';
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
       clear progress indicator, big readable trust signal */
    function renderCheckoutHeader() {
      var lockBig = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';
  
      return (
        '<header class="mm-checkout-header">' +
          '<a class="mm-checkout-header-logo" href="/" aria-label="Madeira Mania - voltar à home">' +
            '<img src="' + MM_LOGO_URL + '" alt="Madeira Mania" width="180" height="44">' +
          '</a>' +
          '<nav class="mm-checkout-steps" aria-label="Etapas do checkout">' +
            '<ol>' +
              '<li class="mm-checkout-step is-active" aria-current="step">' +
                '<span class="mm-checkout-step-label">Carrinho</span>' +
              '</li>' +
              '<li class="mm-checkout-step-sep" aria-hidden="true">›</li>' +
              '<li class="mm-checkout-step">' +
                '<span class="mm-checkout-step-label">Identificação</span>' +
              '</li>' +
              '<li class="mm-checkout-step-sep" aria-hidden="true">›</li>' +
              '<li class="mm-checkout-step">' +
                '<span class="mm-checkout-step-label">Pagamento</span>' +
              '</li>' +
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
        rows +=
          '<div class="mm-row">' +
            '<span class="mm-row-label">Frete' +
              (state.shippingDeadline ? ' <span class="mm-row-sub">· ' + escapeHTML(state.shippingDeadline) + '</span>' : '') +
            '</span>' +
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
      if (document.getElementById('mm-layout')) return document.getElementById('mm-layout');
  
      var layout = document.createElement('div');
      layout.id = 'mm-layout';
  
      /* Use o .container ou o próprio mainArea */
      var container = mainArea.querySelector('.container') || mainArea;
  
      layout.innerHTML =
        renderCheckoutHeader() +
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
                '<div class="mm-cep-row">' +
                  '<input type="text" class="mm-input" id="mm-cep-input" inputmode="numeric" maxlength="9" placeholder="00000-000" autocomplete="postal-code" />' +
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
  
      container.insertBefore(layout, container.firstChild);
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
  
      /* Se a UI mostrar um cupom aplicado, sincroniza o cupom label */
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
       IDENTIFY — minimal CRO copy
       ============================================= */
  
    if (isIdentify) {
      var h2 = mainArea.querySelector('h2');
      if (h2 && h2.textContent.indexOf('Acesse') !== -1) {
        h2.textContent = 'Quase lá! Identifique-se';
      }
      var subtitleEls = mainArea.querySelectorAll('div, span, p');
      for (var d = 0; d < subtitleEls.length; d++) {
        var txt = subtitleEls[d].textContent.trim();
        if (txt === 'Informe seu e-mail ou CPF/CNPJ para continuar.' && subtitleEls[d].children.length === 0) {
          subtitleEls[d].textContent = 'Informe seu e-mail para finalizar a compra de forma rápida e segura.';
          break;
        }
      }
      var allP = mainArea.querySelectorAll('p');
      for (var p = 0; p < allP.length; p++) {
        if (allP[p].textContent.indexOf('Nunca postaremos') !== -1) {
          allP[p].style.display = 'none';
        }
      }
      var emailInput = mainArea.querySelector('input[type="text"]');
      if (emailInput && emailInput.placeholder && emailInput.placeholder.indexOf('e-mail') !== -1) {
        emailInput.type = 'email';
      }
    }
  
  
    /* =============================================
       ONEPAGE / PAYMENT — input modes + security label
       ============================================= */
  
    if (isOnepage) {
      var cepInput2 = mainArea.querySelector('#cep, input[placeholder*="00000" i]');
      if (cepInput2) cepInput2.inputMode = 'numeric';
  
      var cardNumInput = mainArea.querySelector('input[placeholder*="numero do cart" i]');
      if (cardNumInput) cardNumInput.inputMode = 'numeric';
  
      var cvvInput = mainArea.querySelector('input[placeholder*="000" i]');
      if (cvvInput && (!cvvInput.maxLength || cvvInput.maxLength <= 4)) cvvInput.inputMode = 'numeric';
  
      var cpfInput = mainArea.querySelector('input[placeholder*="CPF" i]');
      if (cpfInput) cpfInput.inputMode = 'numeric';
    }
  
  })();

})();
