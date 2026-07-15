/* =============================================
   PEDIDOS JS — Consultar Pedido (/login) + Resultado (/cliente/pedidos)
   Abordagem B: enhancements cirúrgicos sobre o DOM nativo (jQuery, sem React).
   As classes .mm-consulta-on / .mm-ped-on no <html> só entram depois que o
   enhancement roda — se algo falhar, o CSS não aplica e a tela nativa fica
   intacta.
   ============================================= */
(function mmPedidos() {
  var path = window.location.pathname;
  var isLogin = /^\/login\/?$/.test(path);
  var isPedido = path.indexOf('/cliente/pedidos') === 0;
  if (!isLogin && !isPedido) return;

  var WA_PHONE = '5511915299488';
  var WA_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  function waUrl(msg) {
    return 'https://api.whatsapp.com/send?phone=' + WA_PHONE + '&text=' + encodeURIComponent(msg);
  }

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  /* Formata CPF/CNPJ com pontuação (progressivo). Módulo-level: usado pela
     máscara visual E pelo interceptor de rede abaixo. */
  function fmtDoc(digits) {
    var d = (digits || '').replace(/\D/g, '').slice(0, 14);
    if (d.length <= 11) {
      if (d.length > 9) return d.slice(0, 3) + '.' + d.slice(3, 6) + '.' + d.slice(6, 9) + '-' + d.slice(9);
      if (d.length > 6) return d.slice(0, 3) + '.' + d.slice(3, 6) + '.' + d.slice(6);
      if (d.length > 3) return d.slice(0, 3) + '.' + d.slice(3);
      return d;
    }
    var p = d.slice(0, 2) + '.' + d.slice(2, 5) + '.' + d.slice(5, 8) + '/' + d.slice(8, 12);
    if (d.length > 12) p += '-' + d.slice(12);
    return p;
  }

  /* À PROVA DE TUDO: o Magazord envia a consulta como POST AJAX pra
     /login?operation=consultaPedido. Se o cpfcnpj for SEM pontuação, o servidor
     responde {"pedido-invalido":true} → "Informe um número do pedido válido".
     A máscara visual + captura resolvem quase tudo, mas timing de evento /
     autofill / colar podem escapar. Aqui pontuamos o cpfcnpj NO CORPO da request
     (fetch E XMLHttpRequest) — independente de como o form foi submetido. */
  function fixCpfInBody(body) {
    if (typeof body !== 'string' || !/cpfcnpj=/i.test(body)) return body;
    return body.replace(/(^|&)(cpfcnpj=)([^&]*)/i, function (_, pre, key, val) {
      return pre + key + encodeURIComponent(fmtDoc(decodeURIComponent(val)));
    });
  }
  function installConsultaInterceptor() {
    if (window.__mmConsultaFix) return;
    window.__mmConsultaFix = true;
    var reC = /operation=consultaPedido/i;
    try {
      var of = window.fetch;
      if (typeof of === 'function') {
        window.fetch = function (input, init) {
          try {
            var url = (typeof input === 'string') ? input : (input && input.url) || '';
            if (reC.test(url) && init && typeof init.body === 'string') init.body = fixCpfInBody(init.body);
          } catch (e) {}
          return of.apply(this, arguments);
        };
      }
    } catch (e) {}
    try {
      var oo = XMLHttpRequest.prototype.open, os = XMLHttpRequest.prototype.send;
      XMLHttpRequest.prototype.open = function (m, u) { this.__mmU = u || ''; return oo.apply(this, arguments); };
      XMLHttpRequest.prototype.send = function (body) {
        try { if (reC.test(this.__mmU || '') && typeof body === 'string') arguments[0] = fixCpfInBody(body); } catch (e) {}
        return os.apply(this, arguments);
      };
    } catch (e) {}
  }
  /* Instala JÁ (síncrono) — antes de qualquer submit possível. */
  if (isLogin) installConsultaInterceptor();

  /* ==========================================================
     PARTE 1 — /login: form Consultar Pedido
     ========================================================== */
  function enhanceConsulta() {
    /* máscara CPF/CNPJ — fmtDoc é módulo-level (usado também pelo interceptor de
       rede). CRÍTICO: backend Magazord rejeita CPF sem pontuação com erro
       enganoso ({"pedido-invalido":true} → "Informe um número do pedido válido"). */
    function bindMask(input) {
      if (!input || input.getAttribute('data-mm-mask')) return;
      input.setAttribute('data-mm-mask', '1');
      input.setAttribute('maxlength', '18');
      input.setAttribute('inputmode', 'numeric');
      function normalize() {
        var masked = fmtDoc((input.value || '').replace(/\D/g, ''));
        if (input.value !== masked) input.value = masked;
      }
      /* 'input' = digitação. 'change'/'blur' = autofill/colar, que NÃO disparam
         'input' de forma confiável — era o furo: CPF autofillado ficava SEM
         pontuação e o Magazord rejeitava com "Informe um número do pedido
         válido" (erro enganoso: a culpa é da pontuação do CPF, não do pedido). */
      input.addEventListener('input', normalize);
      input.addEventListener('change', normalize);
      input.addEventListener('blur', normalize);
      /* Garante a pontuação ANTES da validação nativa do Magazord. O handler
         antigo era 'submit' na fase de bubble (registrado DEPOIS do Magazord →
         rodava tarde demais). Fase de CAPTURA roda antes dos handlers bubble do
         Magazord, no submit E no clique do botão (caso valide no click). */
      var form = input.form;
      if (form && !form.getAttribute('data-mm-mask')) {
        form.setAttribute('data-mm-mask', '1');
        form.addEventListener('submit', normalize, true);
        var submitBtn = form.querySelector('button.button-login, button[type="submit"], input[type="submit"]');
        if (submitBtn) submitBtn.addEventListener('click', normalize, true);
      }
    }

    /* o form existe no primeiro paint, mas re-checa por segurança */
    var tries = 0;
    (function setup() {
      var box = document.getElementById('form-consulta-pedido');
      var cpf = document.getElementById('cpfcnpj');
      if (!box || !cpf) {
        if (++tries < 20) return void setTimeout(setup, 250);
        return;
      }

      bindMask(cpf);

      /* eyebrow acima do título (padrão do checkout) */
      var h2 = box.querySelector('.title-area h2');
      if (h2 && !box.querySelector('.mm-cp-eyebrow')) {
        var eyebrow = document.createElement('span');
        eyebrow.className = 'mm-cp-eyebrow';
        eyebrow.textContent = 'Acompanhe sua compra';
        h2.insertAdjacentElement('beforebegin', eyebrow);
      }

      /* micro-labels eyebrow acima dos campos (placeholder some ao digitar) */
      function addFieldLabel(input, txt) {
        if (!input) return;
        var line = input.closest('.line') || input.parentElement;
        if (line.querySelector('.mm-cp-label')) return;
        var lb = document.createElement('label');
        lb.className = 'mm-cp-label';
        lb.textContent = txt;
        if (input.id) lb.setAttribute('for', input.id);
        line.insertAdjacentElement('afterbegin', lb);
      }
      addFieldLabel(cpf, 'CPF ou CNPJ');
      addFieldLabel(document.getElementById('numero-pedido'), 'Nº do pedido');
      cpf.placeholder = '000.000.000-00';
      var numeroIpt = document.getElementById('numero-pedido');
      if (numeroIpt) numeroIpt.placeholder = 'Ex.: 0012606865731';

      /* sentence case nos textos de ação (nativo mistura Title Case) */
      var btnSubmit = box.querySelector('button.button-login');
      if (btnSubmit) {
        for (var bn = 0; bn < btnSubmit.childNodes.length; bn++) {
          var nd = btnSubmit.childNodes[bn];
          if (nd.nodeType === 3 && /consultar/i.test(nd.textContent)) {
            nd.textContent = ' Consultar meu pedido ';
          }
        }
      }
      var cancelSpan = box.querySelector('.cancel-consulta span');
      if (cancelSpan) cancelSpan.textContent = 'Voltar para login';

      /* hint: onde achar o nº do pedido */
      var numIpt = document.getElementById('numero-pedido');
      if (numIpt && !box.querySelector('.mm-cp-hint')) {
        var hint = document.createElement('span');
        hint.className = 'mm-cp-hint';
        /* \u2011 = hífen não separável (evita quebrar "e-mail" entre linhas) */
        hint.textContent = 'O número do pedido está no\u00A0e\u2011mail de confirmação da compra.';
        var line = numIpt.closest('.line') || numIpt.parentElement;
        line.appendChild(hint);
      }

      /* fallback WhatsApp */
      var form = box.querySelector('form');
      if (form && !box.querySelector('.mm-cp-wa')) {
        var wa = document.createElement('div');
        wa.className = 'mm-cp-wa';
        wa.innerHTML = 'Não encontra os dados? <a href="' +
          waUrl('Olá! Preciso de ajuda para consultar o meu pedido.') +
          '" target="_blank" rel="noopener">' + WA_SVG + ' Fale com a gente</a>';
        form.insertAdjacentElement('afterend', wa);
      }

      document.documentElement.classList.add('mm-consulta-on');

      /* --- layout unificado login + consulta (sem toggle) --- */
      var holder = document.querySelector('.login-holder');
      var pageLogin = document.querySelector('.page.page-login');
      if (holder && pageLogin) {
        /* eyebrow no header do login */
        var lgHeader = holder.querySelector('.login-header');
        if (lgHeader && !lgHeader.querySelector('.mm-lg-eyebrow')) {
          var lgEyebrow = document.createElement('span');
          lgEyebrow.className = 'mm-lg-eyebrow';
          lgEyebrow.textContent = 'Área do cliente';
          var lgH2 = lgHeader.querySelector('h2');
          if (lgH2) lgH2.insertAdjacentElement('beforebegin', lgEyebrow);
        }
        /* divisor "ou" antes do login social */
        var social = holder.querySelector('.social-login-area');
        if (social && !holder.querySelector('.mm-lg-ou')) {
          var ou = document.createElement('div');
          ou.className = 'mm-lg-ou';
          ou.textContent = 'ou';
          social.insertAdjacentElement('beforebegin', ou);
        }
        /* Google Sign-In: re-renderiza no formato pill do DS (a API do GSI
           aceita shape/width — o iframe nativo vinha retangular 223px) */
        setTimeout(function () {
          try {
            var rb = holder.querySelector('.social-login-area .render-button');
            if (rb && window.google && google.accounts && google.accounts.id) {
              rb.innerHTML = '';
              google.accounts.id.renderButton(rb, {
                theme: 'outline', size: 'large', shape: 'pill',
                width: 320,
                text: 'continue_with', logo_alignment: 'center'
              });
            }
          } catch (e) { /* GSI ausente — botão nativo permanece */ }
          /* social não renderizou (comum no mobile): divisor "ou" órfão sai */
          setTimeout(function () {
            var soc = holder.querySelector('.social-login-area');
            var ou2 = holder.querySelector('.mm-lg-ou');
            var vivo = soc && soc.offsetParent !== null && soc.querySelector('iframe');
            if (!vivo) {
              if (ou2) ou2.style.display = 'none';
              if (soc) soc.style.display = 'none';
            }
          }, 2000);
        }, 1200);

        /* "Inserir dados como pessoa jurídica" não é <a> — marca pra estilizar */
        var pjToggle = [].filter.call(holder.querySelectorAll('span, div, button'), function (e2) {
          return /pessoa jur/i.test(e2.textContent) && e2.textContent.length < 60 && e2.children.length === 0;
        })[0];
        if (pjToggle) pjToggle.classList.add('mm-lg-link');

        /* "*Nunca postaremos nada em suas redes sociais" é <p> sem classe */
        var footerLg = document.querySelector('.footer-login');
        if (footerLg) {
          [].forEach.call(footerLg.querySelectorAll('p'), function (pp) {
            if (/nunca postaremos/i.test(pp.textContent)) pp.classList.add('mm-lg-nopost');
          });
        }

        document.documentElement.classList.add('mm-login-on');
      }
    })();

    /* deep-link: /login#consultar-pedido rola até o card e foca o CPF
       (a consulta agora é permanente — clicar no toggle esconderia o login) */
    if (/#consultar?-?pedido/i.test(window.location.hash)) {
      setTimeout(function () {
        var box = document.getElementById('form-consulta-pedido');
        var cpfIpt = document.getElementById('cpfcnpj');
        if (box) box.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (cpfIpt) setTimeout(function () { cpfIpt.focus(); }, 500);
      }, 600);
    }
  }

  /* ==========================================================
     PARTE 2 — /cliente/pedidos: resultado do pedido
     ========================================================== */
  var STATUS_LABEL = {
    'recebimento-pedido': 'Pedido recebido',
    'confirmacao-pagamento': 'Pagamento confirmado',
    'emissao-nota': 'Nota fiscal emitida',
    'transporte': 'Em transporte',
    'entrega': 'Entregue'
  };

  function enhancePedido() {
    var detalhes = document.querySelector('.detalhes-pedido');
    if (!detalhes || detalhes.getAttribute('data-mm-ped')) return;
    detalhes.setAttribute('data-mm-ped', '1');

    var numEl = detalhes.querySelector('.numero-pedido');
    var numero = numEl ? (numEl.textContent.match(/[\d]+/) || [''])[0] : '';
    var dataEl = detalhes.querySelector('.resumo-data strong');
    var dataCompra = dataEl ? dataEl.textContent.trim().split(' ')[0] : '';

    /* etapa atual: marca a primeira .status-waiting; badge = última success */
    var waiting = detalhes.querySelectorAll('.item-historico.status-waiting');
    if (waiting.length) waiting[0].classList.add('mm-atual');

    /* stepper: injeta ícone (dot) e conector como DOM real — os pseudo
       elements nativos do Magazord são desligados via CSS */
    var ICON_ATTRS = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
    var STEP_ICON = {
      'recebimento-pedido': '<svg ' + ICON_ATTRS + '><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
      'confirmacao-pagamento': '<svg ' + ICON_ATTRS + '><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>',
      'emissao-nota': '<svg ' + ICON_ATTRS + '><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M15 2v5h5"/><path d="M8 13h8"/><path d="M8 17h5"/></svg>',
      'transporte': '<svg ' + ICON_ATTRS + '><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
      'entrega': '<svg ' + ICON_ATTRS + '><path d="M3 10.18v8.82a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8.82"/><path d="M2.5 10.5 12 3l9.5 7.5"/><path d="m9 15 2 2 4-4"/></svg>'
    };
    var itens = detalhes.querySelectorAll('.item-historico');
    for (var s = 0; s < itens.length; s++) {
      var item = itens[s];
      if (item.querySelector('.mm-step-dot')) continue;
      var icon = '';
      for (var cls in STEP_ICON) {
        if (item.classList.contains(cls)) { icon = STEP_ICON[cls]; break; }
      }
      var dot = document.createElement('span');
      dot.className = 'mm-step-dot';
      dot.innerHTML = icon;
      item.insertAdjacentElement('afterbegin', dot);
      var linha = document.createElement('span');
      linha.className = 'mm-step-line';
      item.appendChild(linha);
    }
    var success = detalhes.querySelectorAll('.item-historico.status-success');
    var badgeTxt = 'Pedido recebido';
    if (success.length) {
      var last = success[success.length - 1];
      for (var k in STATUS_LABEL) {
        if (last.classList.contains(k)) { badgeTxt = STATUS_LABEL[k]; break; }
      }
    }

    /* --- HERO --- */
    if (!document.getElementById('mm-ped-hero') && numero) {
      var hero = document.createElement('div');
      hero.id = 'mm-ped-hero';
      hero.innerHTML =
        '<div class="mm-ped-hero-info">' +
          '<span class="mm-ped-eyebrow">Acompanhe sua compra</span>' +
          '<h1 class="mm-ped-num">Pedido #' + numero +
            ' <button type="button" class="mm-ped-copy" aria-label="Copiar número do pedido">copiar</button></h1>' +
          '<div class="mm-ped-meta">' +
            (dataCompra ? '<span>Feito em ' + dataCompra + '</span>' : '') +
            '<span class="mm-ped-badge">' + badgeTxt + '</span>' +
          '</div>' +
        '</div>' +
        '<a class="mm-ped-hero-wa" target="_blank" rel="noopener" href="' +
          waUrl('Olá! Gostaria de saber sobre o meu pedido #' + numero + '.') + '">' +
          WA_SVG + ' Falar sobre este pedido</a>';
      detalhes.insertAdjacentElement('afterbegin', hero);

      /* label do total: "Resumo do Pedido" quebra em 2-3 linhas — vira "Total" */
    var totalRow = detalhes.querySelector('.resumo-pagamento .resumo-total > span:first-child');
    if (totalRow && /resumo do pedido/i.test(totalRow.textContent)) {
      totalRow.textContent = 'Total';
    }
    /* capitalização consistente entre títulos de seção */
    var h3itens = detalhes.querySelector('.title-itens-pedido h3');
    if (h3itens && /itens do pedido/i.test(h3itens.textContent)) {
      h3itens.textContent = ' Itens do pedido ';
    }

    /* título nativo "Meus pedidos" (acima do detalhes) fica redundante */
      var headings = document.querySelectorAll('.main-content h1, .main-content h2, .main-content .title-user-area, .main-content > div');
      for (var t = 0; t < headings.length; t++) {
        var el = headings[t];
        if (el.contains(detalhes)) continue;
        if (/meus pedidos/i.test(el.textContent || '') && (el.textContent || '').trim().length < 40) {
          el.classList.add('mm-ped-native-title');
          break;
        }
      }

      var copyBtn = hero.querySelector('.mm-ped-copy');
      copyBtn.addEventListener('click', function () {
        var self = this;
        try {
          navigator.clipboard.writeText(numero).then(function () {
            self.textContent = 'copiado ✓';
            self.classList.add('mm-copiado');
            setTimeout(function () {
              self.textContent = 'copiar';
              self.classList.remove('mm-copiado');
            }, 2000);
          });
        } catch (e) { /* clipboard indisponível — sem drama */ }
      });
    }

    /* --- previsão de entrega no stepper (pedidos despachados) --- */
    var rastreioArea = detalhes.querySelector('.rastreio-area');
    var prevEl = rastreioArea ? rastreioArea.querySelector('.previsao-entrega .previsao') : null;
    var prevTxt = prevEl ? prevEl.textContent.trim() : '';
    if (prevTxt) {
      var etapaEntrega = detalhes.querySelector('.item-historico.entrega');
      if (etapaEntrega && !etapaEntrega.querySelector('.mm-step-prev')) {
        var prev = document.createElement('span');
        prev.className = 'mm-step-prev';
        prev.textContent = 'Previsão: ' + prevTxt;
        etapaEntrega.appendChild(prev);
      }
    }

    /* --- BLOCO ENTREGA/RASTREIO (após a timeline) ---
       Só quando o pedido AINDA NÃO foi despachado — depois do despacho o
       card nativo "Transporte" (restilizado) assume com prazo+código+CTA. */
    var situacao = detalhes.querySelector('.status-pagamento-pedido');
    if (situacao && !rastreioArea && !document.getElementById('mm-ped-entrega')) {
      var bloco = document.createElement('div');
      bloco.id = 'mm-ped-entrega';

      /* procura rastreio já exposto pelo Magazord (pedidos despachados) */
      var rastreio = null;
      var links = detalhes.querySelectorAll('a[href]');
      for (var i = 0; i < links.length; i++) {
        var t = (links[i].textContent || '') + ' ' + links[i].href;
        if (/rastre/i.test(t) && !/politica/i.test(links[i].href)) { rastreio = links[i]; break; }
      }

      var TRUCK = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4b664a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>';
      if (rastreio) {
        bloco.classList.add('mm-tem-rastreio');
        bloco.innerHTML = TRUCK + '<span>Seu pedido está a caminho — <a href="' + rastreio.href +
          '" target="_blank" rel="noopener">acompanhe o rastreio aqui</a>.</span>';
      } else {
        bloco.innerHTML = TRUCK + '<span>O código de rastreio aparece aqui assim que o pedido for despachado. ' +
          'Enquanto isso, acompanhe as etapas acima ou veja nossa ' +
          '<a href="/politica-de-entrega" target="_blank" rel="noopener">política de entrega</a>.</span>';
      }
      situacao.insertAdjacentElement('afterend', bloco);
    }

    /* --- AÇÕES: agrupa botões nativos e injeta o container na ordem --- */
    var btnComprar = document.querySelector('.btn-comprar-novamente');
    var btnAjuda = document.querySelector('.btn-ajuda-pedido');
    var acoesRow = (btnComprar || btnAjuda) ? (btnComprar || btnAjuda).parentElement : null;
    if (acoesRow && !acoesRow.classList.contains('mm-ped-acoes')) {
      acoesRow.classList.add('mm-ped-acoes');
      /* se o container das ações não for filho direto de .detalhes-pedido,
         move pra lá pra participar do flex order (fica por último) */
      if (acoesRow.parentElement !== detalhes) detalhes.appendChild(acoesRow);
    }

    /* consulta anônima não tem sidebar: centraliza a coluna */
    var mainEl = document.querySelector('main.central-cliente');
    if (mainEl && mainEl.children.length === 1) {
      mainEl.classList.add('mm-ped-center');
    }

    document.documentElement.classList.add('mm-ped-on');
  }

  /* Deep-link "Rastrear pedido" (#rastrear, vindo do header/rodapé): rola até o
     form de consulta e destaca — deixa claro que é ali que se rastreia, mesmo
     estando na /login. */
  function focusConsultaFromHash() {
    if (!/rastrear/i.test(location.hash || '') && !/rastrear/i.test(location.search || '')) return;
    var tries = 0;
    (function go() {
      var box = document.getElementById('form-consulta-pedido');
      if (!box || box.offsetParent === null) {
        if (++tries < 30) return void setTimeout(go, 200);
        return;
      }
      try { box.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) { try { box.scrollIntoView(); } catch (e2) {} }
      box.classList.add('mm-cp-flash');
      setTimeout(function () { box.classList.remove('mm-cp-flash'); }, 2400);
      var num = document.getElementById('numero-pedido');
      if (num) setTimeout(function () { try { num.focus({ preventScroll: true }); } catch (e) { try { num.focus(); } catch (e2) {} } }, 700);
    })();
  }

  onReady(function () {
    try {
      if (isLogin) { enhanceConsulta(); focusConsultaFromHash(); }
      if (isPedido) enhancePedido();
    } catch (e) {
      /* degrada pro nativo — nunca quebra a página */
      if (window.console && console.warn) console.warn('[mm-pedidos]', e);
    }
  });
})();
