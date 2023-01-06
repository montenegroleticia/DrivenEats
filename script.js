//Selecionar as comidas
function selecionarPrato(selecionadoPrato){
    const opcaoSelecionada = document.querySelector('.prato .article-selecionado');
    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove('article-selecionado')
    }
    const articleSelecionado = document.querySelector(selecionadoPrato);
    articleSelecionado.classList.add('article-selecionado');
}

function selecionarBebida(bebidaThis) {
    const selecionadoAntes = document.querySelector('.bebida .article-selecionado');
    if (selecionadoAntes !== null){
        selecionadoAntes.classList.remove('article-selecionado');
    }
    bebidaThis.classList.toggle('article-selecionado');
}

function selecionarSobremesa(sobremesaThis){
    const selecionadoAnteriormente = document.querySelector('.sobremesa .article-selecionado');
    if (selecionadoAnteriormente !== null){
        selecionadoAnteriormente.classList.remove('article-selecionado');
    }
    sobremesaThis.classList.toggle('article-selecionado');
}

//Mudança no botão
/*
const paragrafo = document.querySelector("button");
paragrafo.innerHTML = "Fechar pedido" */