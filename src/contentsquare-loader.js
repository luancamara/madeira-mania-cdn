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
