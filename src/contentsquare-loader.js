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
  /* Idempotência: não injetar 2x */
  if (window._uxa || document.querySelector('script[src*="contentsquare.net"]')) return;

  function loadCS() {
    if (window._uxa || document.querySelector('script[src*="contentsquare.net"]')) return;
    var s = document.createElement("script");
    s.src = "https://t.contentsquare.net/uxa/7126f355c4bb8.js";
    s.async = true;
    document.head.appendChild(s);
  }

  /* Defer pro idle: visitor.js é pesado, não competir com LCP/parse do bundle */
  function schedule() {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadCS, { timeout: 5000 });
    } else {
      setTimeout(loadCS, 2500);
    }
  }

  if (document.readyState === 'complete') {
    schedule();
  } else {
    window.addEventListener('load', schedule, { once: true });
  }
})();
