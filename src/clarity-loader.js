/* =============================================
   Microsoft Clarity loader (standalone)
   Heatmaps + session replay. Project id: vnhd0x9eve

   POR QUE STANDALONE: o Clarity vivia dentro do tracking.js, que foi
   desativado em 2026-04-14 (commit c34fae7) pra parar duplicação de
   conversões no Google Ads. Mas o Clarity é session-replay/heatmap puro:
   NÃO empurra eventos pro dataLayer/GA4/Ads/Meta, então NÃO duplica nada.
   Saiu como dano colateral. Aqui ele volta isolado, sem reativar as
   partes do tracking.js que realmente duplicavam (purchase tracker, etc.).

   DECISÕES:
   - Roda em TODAS as páginas, INCLUSIVE /checkout/* (diferente do
     Contentsquare, que era pulado no checkout por um bug de recursão
     hkINP do visitor.js — o Clarity não tem esse bug, e o funil de
     checkout é justamente onde a gravação tem mais valor).
   - Opt-out: localStorage.mm_no_tracking === '1' pula tudo (modo teste),
     mesma convenção do contentsquare-loader.js e do tracking.js.
   - Idempotente: não injeta se o Clarity já estiver presente.
   - Carrega em idle (requestIdleCallback / fallback) pra não competir
     com o LCP nem com o boot do bundle.
   ============================================= */
(function () {
  var CLARITY_ID = 'vnhd0x9eve';

  /* Opt-out: modo teste pula o Clarity */
  try { if (localStorage.getItem('mm_no_tracking') === '1') return; } catch (e) {}

  /* Idempotência: não injetar 2x (stub já criado OU tag já no DOM) */
  if (window.clarity) return;
  if (document.querySelector('script[src*="clarity.ms"]')) return;

  function loadClarity() {
    if (window.clarity) return;
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_ID);
  }

  /* Defer pro idle: não atrapalha LCP/parse do bundle.
     requestIdleCallback quando disponível; senão setTimeout pós-load. */
  function schedule() {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadClarity, { timeout: 4000 });
    } else {
      setTimeout(loadClarity, 2000);
    }
  }

  if (document.readyState === 'complete') {
    schedule();
  } else {
    window.addEventListener('load', schedule, { once: true });
  }
})();
