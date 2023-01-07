//Selecionar as comidas
let prato;

function selecionarPrato(selecionadoPrato){
    const opcaoSelecionada = document.querySelector('.prato .article-selecionado');
    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove('article-selecionado')
    }
    const articleSelecionado = document.querySelector(selecionadoPrato);
    articleSelecionado.classList.add('article-selecionado');

    prato = articleSelecionado.innerHTML;
    verificarSelecao();
}

let bebida;

function selecionarBebida(bebidaThis) {
    const selecionadoAntes = document.querySelector('.bebida .article-selecionado');
    if (selecionadoAntes !== null){
        selecionadoAntes.classList.remove('article-selecionado');
    }
    bebidaThis.classList.toggle('article-selecionado');

    bebida = bebidaThis.innerHTML;
    verificarSelecao();
}

let sobremesa;

function selecionarSobremesa(sobremesaThis){
    const selecionadoAnteriormente = document.querySelector('.sobremesa .article-selecionado');
    if (selecionadoAnteriormente !== null){
        selecionadoAnteriormente.classList.remove('article-selecionado');
    }
    sobremesaThis.classList.toggle('article-selecionado');

    sobremesa = sobremesaThis.innerHTML;
    verificarSelecao();
}

document.querySelector("ion-icon").classList.add('verde');

//verifica se as opções foram selecionadas
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

//Mudança no botão
function ativarBotao(){
    document.querySelector('.painel').classList.remove('escondido');
    document.querySelector('.transparente').classList.remove('escondido');
}

//Botão cancelar
function cancelar(){
    document.querySelector('.painel').classList.add('escondido');
    document.querySelector('.transparente').classList.add('escondido');
}

/*
const paragrafo = document.querySelector("");
    if (){
        document.querySelector('button p').classList.add('selecionado');
        paragrafo.innerHTML = "Fechar pedido";
        */