// Selecionar as comidas
let selecao01 = '';
let selecao02 = '';
let selecao03 = '';
let preco01 = 0;
let preco02 = 0;
let preco03 = 0;
let total = 0;
let articleSelecionado = 'article-selecionado';
// Selecionar prato
function selecionarPrato(pratoThis, icone){
    //selecionar bordas
    const opcaoSelecionada = document.querySelector('.prato .article-selecionado');
    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove(articleSelecionado);
    }
    pratoThis.classList.toggle(articleSelecionado);
    //selecionar icone
    const iconeSelecionado = document.querySelector('.prato .verde');
    if (iconeSelecionado !== null){
        iconeSelecionado.classList.remove('verde');
    }
    const inconeNovo = document.querySelector(icone);
    inconeNovo.classList.add('verde');
    //Validar botão fechar pedido
    preco01 = pratoThis.querySelector('.preco > h4').innerHTML;
    selecao01 = pratoThis.querySelector('h3').innerHTML;
    verificarSelecao();
}
// Selecionar bebida
function selecionarBebida(bebidaThis, icone) {
    //selecionar bordas
    const opcaoSelecionada = document.querySelector('.bebida .article-selecionado');
    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove(articleSelecionado);
    }
    bebidaThis.classList.toggle(articleSelecionado);
    //selecionar icone
    const iconeSelecionado = document.querySelector('.bebida .verde');
    if (iconeSelecionado !== null){
        iconeSelecionado.classList.remove('verde');
    }
    const iconeNovo = document.querySelector(icone);
    iconeNovo.classList.toggle('verde');
    //Validar botão fechar pedido
    preco02 = bebidaThis.querySelector('.preco > h4').innerHTML;
    selecao02 = bebidaThis.querySelector('h3').innerHTML;
    verificarSelecao();
}
// Selecionar sobremesa
function selecionarSobremesa(sobremesaThis, icone){
    //selecionar bordas
    const opcaoSelecionada = document.querySelector('.sobremesa .article-selecionado');
    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove(articleSelecionado);
    }
    sobremesaThis.classList.toggle(articleSelecionado);
    //selecionar icone
    const iconeSelecionado = document.querySelector('.sobremesa .verde');
    if (iconeSelecionado !== null){
        iconeSelecionado.classList.remove('verde');
    }
    const iconeNovo = document.querySelector(icone);
    iconeNovo.classList.toggle('verde');
    //Validar botão fechar pedido
    preco03 = sobremesaThis.querySelector('.preco > h4').innerHTML;
    selecao03 = sobremesaThis.querySelector('h3').innerHTML;
    verificarSelecao();
}
// verifica se as opções foram selecionadas e habilitar botão
function verificarSelecao(){
    if (selecao01 !== '' && selecao02 !== '' && selecao03 !== ''){
        const preco01Number = Number(preco01.replace('R$ ','').replace(',','.'));
        const preco02Number = Number(preco02.replace('R$ ','').replace(',','.'));
        const preco03Number = Number(preco03.replace('R$ ','').replace(',','.'));
        total = preco01Number + preco02Number + preco03Number;
        document.querySelector('.total h2').innerHTML = "R$ " + total.toFixed(2).replace('.',',');
        document.querySelector('.opcoes-prato p').innerHTML = selecao01;
        document.querySelector('.opcoes-bebida p').innerHTML = selecao02;
        document.querySelector('.opcoes-sobremesa p').innerHTML = selecao03;
        document.querySelector('.opcoes-prato h2').innerHTML = preco01.replace('R$ ','');
        document.querySelector('.opcoes-bebida h2').innerHTML = preco02.replace('R$ ','');
        document.querySelector('.opcoes-sobremesa h2').innerHTML = preco03.replace('R$ ','');
        document.querySelector('button').disabled = false;
        document.querySelector('button').classList.add('selecionado');
        document.querySelector('button p').classList.add('botao-p-peso');
        document.querySelector('button p').innerHTML = "Fechar pedido";
    }
}
// Aparecer painel
let nome = '';
let endereco = '';
function ativarBotao(){
    nome = prompt('Qual o seu nome?');
    endereco = prompt('Qual o seu endereço');
    document.querySelector('.painel').classList.remove('escondido');
    document.querySelector('.transparente').classList.remove('escondido');
}
// Botão cancelar
function cancelar(){
    document.querySelector('.painel').classList.add('escondido');
    document.querySelector('.transparente').classList.add('escondido');
}
// Botão tudo certo, pode pedir!
function pedir(){
    const link = "https://wa.me/5583999999999?text=";
    const mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${selecao01}
- Bebida: ${selecao02}
- Sobremesa: ${selecao03}
Total: R$ ${total.toFixed(2)}

Nome: ${nome}
Endereço: ${endereco}`);
    document.querySelector('a').href = link + mensagem;
}