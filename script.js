//Selecionar as comidas
let prato;

function selecionarPrato(pratoThis, icone){
    //selecionar bordas
    const opcaoSelecionada = document.querySelector('.prato .article-selecionado');
    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove('article-selecionado')
    }
    pratoThis.classList.toggle('article-selecionado');
    //selecionar icone
    const iconeSelecionado = document.querySelector('.prato .verde');
    if (iconeSelecionado !== null){
        iconeSelecionado.classList.remove('verde')
    }
    const inconeNovo = document.querySelector(icone);
    inconeNovo.classList.add('verde');
    //Validar botão fechar pedido
    prato = pratoThis.innerHTML;
    verificarSelecao();
}

let bebida;

function selecionarBebida(bebidaThis, icone) {
    //selecionar bordas
    const opcaoSelecionada = document.querySelector('.bebida .article-selecionado');
    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove('article-selecionado');
    }
    bebidaThis.classList.toggle('article-selecionado');
    //selecionar icone
    const iconeSelecionado = document.querySelector('.bebida .verde');
    if (iconeSelecionado !== null){
        iconeSelecionado.classList.remove('verde');
    }
    const iconeNovo = document.querySelector(icone);
    iconeNovo.classList.toggle('verde');
    //Validar botão fechar pedido
    bebida = bebidaThis.innerHTML;
    verificarSelecao();
}

let sobremesa;

function selecionarSobremesa(sobremesaThis, icone){
    //selecionar bordas
    const opcaoSelecionada = document.querySelector('.sobremesa .article-selecionado');
    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove('article-selecionado');
    }
    sobremesaThis.classList.toggle('article-selecionado');
    //selecionar icone
    const iconeSelecionado = document.querySelector('.sobremesa .verde');
    if (iconeSelecionado !== null){
        iconeSelecionado.classList.remove('verde');
    }
    const iconeNovo = document.querySelector(icone);
    iconeNovo.classList.toggle('verde');
    //Validar botão fechar pedido
    sobremesa = sobremesaThis.innerHTML;
    verificarSelecao();
}

//verifica se as opções foram selecionadas e habilitar botão
function verificarSelecao(){
    if (prato !== undefined){
        if (bebida !== undefined){
            if (sobremesa !== undefined){
                document.querySelector('button').disabled = false;
                document.querySelector('button').classList.add('selecionado');
                document.querySelector('button p').classList.add('botao-p-peso');
                document.querySelector('button p').innerHTML = "Fechar pedido";
            }
        }
    }
}

//Aparecer painel
function ativarBotao(){
    document.querySelector('.painel').classList.remove('escondido');
    document.querySelector('.transparente').classList.remove('escondido');
}

//Botão cancelar
function cancelar(){
    document.querySelector('.painel').classList.add('escondido');
    document.querySelector('.transparente').classList.add('escondido');
}

// Botão tudo certo, pode pedir!
function pedir(){
    const nome = prompt('Qual o seu nome?');
    const endereco = prompt('Qual o seu endereço');
    const link = "https://wa.me/5583998647840";
    document.querySelector('a').href = link;
}