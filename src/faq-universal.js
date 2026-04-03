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

  /* ---- Posicionar: após .descricao-produto ---- */
  var recomendacao = document.querySelector('.recomendacao-ctn-0');
  var relacionados = document.querySelector('.produtos-relacionados');
  var insertTarget = recomendacao || relacionados;

  if (insertTarget) {
    insertTarget.parentNode.insertBefore(section, insertTarget);
  } else {
    descricao.parentNode.insertBefore(section, descricao.nextElementSibling);
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
