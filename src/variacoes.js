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