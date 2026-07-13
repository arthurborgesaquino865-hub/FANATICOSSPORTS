/*=========================================================
    FANÁTICOS SPORTS
    CARRINHO.JS
=========================================================*/

/*=========================================================
    CONFIGURAÇÕES DO SISTEMA
=========================================================*/

const sistema = {

    nome: "Fanáticos Sports",

    logo: "../assets/images/logo.png",

    placeholderPesquisa: "Pesquisar produtos..."

};

/*=========================================================
    MENU
=========================================================*/

const menu = [

    "Clubes",

    "Seleções",

    "Chuteiras",

    "Masculino",

    "Feminino",

    "Infantil",

    "Promoções"

];

/*=========================================================
    PRODUTOS DO CARRINHO
=========================================================*/

const carrinho = [

    {

        categoria:"Seleções",

        nome:"Camisa Brasil 2026",

        preco:249.90,

        quantidade:1,

        imagem:"../assets/images/brasil.png"

    },

    {

        categoria:"Clubes",

        nome:"Camisa Flamengo I",

        preco:229.90,

        quantidade:2,

        imagem:"../assets/images/flamengo.png"

    }

];

/*=========================================================
    INICIALIZAÇÃO
=========================================================*/

window.onload=function(){

    carregarHeader();

    carregarMenu();

    carregarTitulo();

}

/*=========================================================
    HEADER
=========================================================*/

function carregarHeader(){

    document.getElementById("logoImagem").src=sistema.logo;

    document.getElementById("logoImagem").alt=sistema.nome;

    document.getElementById("logoTexto").textContent=sistema.nome;

    document.getElementById("txtPesquisar").placeholder=sistema.placeholderPesquisa;

    document.getElementById("btnFavoritos").href="favoritos.html";

    document.getElementById("btnCarrinho").href="carrinho.html";

    document.getElementById("btnLogin").href="login.html";

}

/*=========================================================
    MENU
=========================================================*/

function carregarMenu(){

    document.getElementById("menu1").textContent=menu[0];

    document.getElementById("menu2").textContent=menu[1];

    document.getElementById("menu3").textContent=menu[2];

    document.getElementById("menu4").textContent=menu[3];

    document.getElementById("menu5").textContent=menu[4];

    document.getElementById("menu6").textContent=menu[5];

    document.getElementById("menu7").textContent=menu[6];

    document.getElementById("menu1").href="#";

    document.getElementById("menu2").href="#";

    document.getElementById("menu3").href="#";

    document.getElementById("menu4").href="#";

    document.getElementById("menu5").href="#";

    document.getElementById("menu6").href="#";

    document.getElementById("menu7").href="#";

}

/*=========================================================
    TÍTULO DA PÁGINA
=========================================================*/

function carregarTitulo(){

    document.getElementById("tituloCarrinho").textContent="Carrinho de Compras";

    document.getElementById("descricaoCarrinho").textContent=

    "Confira os produtos adicionados ao seu carrinho antes de finalizar o pedido.";

}

/*=========================================================
    CARREGAR PRODUTOS
=========================================================*/

window.addEventListener("load",carregarCarrinho);

function carregarCarrinho(){

    preencherProduto(1,carrinho[0]);

    preencherProduto(2,carrinho[1]);

    atualizarResumo();

}

/*=========================================================
    PREENCHER PRODUTO
=========================================================*/

function preencherProduto(numero,produto){

    document.getElementById("produtoImagem"+numero).src=produto.imagem;

    document.getElementById("produtoImagem"+numero).alt=produto.nome;

    document.getElementById("produtoCategoria"+numero).textContent=produto.categoria;

    document.getElementById("produtoNome"+numero).textContent=produto.nome;

    document.getElementById("produtoPreco"+numero).textContent=

        formatarMoeda(produto.preco);

    document.getElementById("quantidade"+numero).value=

        produto.quantidade;

    atualizarSubtotal(numero);

}

/*=========================================================
    SUBTOTAL
=========================================================*/

function atualizarSubtotal(numero){

    const produto=carrinho[numero-1];

    const subtotal=produto.preco*produto.quantidade;

    document.getElementById("subtotal"+numero).textContent=

        formatarMoeda(subtotal);

}

/*=========================================================
    BOTÕES DE QUANTIDADE
=========================================================*/

document.getElementById("btnMais1").onclick=function(){

    aumentarQuantidade(1);

}

document.getElementById("btnMais2").onclick=function(){

    aumentarQuantidade(2);

}

document.getElementById("btnMenos1").onclick=function(){

    diminuirQuantidade(1);

}

document.getElementById("btnMenos2").onclick=function(){

    diminuirQuantidade(2);

}

/*=========================================================
    AUMENTAR
=========================================================*/

function aumentarQuantidade(numero){

    carrinho[numero-1].quantidade++;

    document.getElementById("quantidade"+numero).value=

        carrinho[numero-1].quantidade;

    atualizarSubtotal(numero);

    atualizarResumo();

}

/*=========================================================
    DIMINUIR
=========================================================*/

function diminuirQuantidade(numero){

    if(carrinho[numero-1].quantidade>1){

        carrinho[numero-1].quantidade--;

        document.getElementById("quantidade"+numero).value=

            carrinho[numero-1].quantidade;

        atualizarSubtotal(numero);

        atualizarResumo();

    }

}

/*=========================================================
    RESUMO DO PEDIDO
=========================================================*/

function atualizarResumo(){

    let subtotal=0;

    carrinho.forEach(function(produto){

        subtotal+=produto.preco*produto.quantidade;

    });

    const frete=25.00;

    const desconto=subtotal>=500 ? 50 : 0;

    const total=subtotal+frete-desconto;

    document.getElementById("tituloResumo").textContent="Resumo do Pedido";

    document.getElementById("lblSubtotal").textContent="Subtotal";

    document.getElementById("lblFrete").textContent="Frete";

    document.getElementById("lblDesconto").textContent="Desconto";

    document.getElementById("lblTotal").textContent="Total";

    document.getElementById("valorSubtotal").textContent=

        formatarMoeda(subtotal);

    document.getElementById("valorFrete").textContent=

        formatarMoeda(frete);

    document.getElementById("valorDesconto").textContent=

        "- "+formatarMoeda(desconto);

    document.getElementById("valorTotal").textContent=

        formatarMoeda(total);

    document.getElementById("btnContinuarComprando").textContent=

        "Continuar Comprando";

    document.getElementById("btnFinalizarCompra").textContent=

        "Finalizar Compra";

}

/*=========================================================
    FORMATAÇÃO DE MOEDA
=========================================================*/

function formatarMoeda(valor){

    return valor.toLocaleString("pt-BR",{

        style:"currency",

        currency:"BRL"

    });

}

/*=========================================================
    REMOVER PRODUTOS
=========================================================*/

document.getElementById("btnRemover1").onclick=function(){

    removerProduto(1);

}

document.getElementById("btnRemover2").onclick=function(){

    removerProduto(2);

}

function removerProduto(numero){

    if(confirm("Deseja remover este produto do carrinho?")){

        document.getElementsByClassName("produtoCarrinho")[numero-1]
        .style.display="none";

        carrinho[numero-1].quantidade=0;

        atualizarResumo();

    }

}

/*=========================================================
    PESQUISA
=========================================================*/

document.getElementById("btnPesquisar").addEventListener("click",pesquisar);

document.getElementById("txtPesquisar").addEventListener("keyup",function(e){

    if(e.key==="Enter"){

        pesquisar();

    }

});

function pesquisar(){

    const texto=document
        .getElementById("txtPesquisar")
        .value
        .trim();

    if(texto===""){

        alert("Digite um produto para pesquisar.");

        return;

    }

    alert("Pesquisando por: "+texto);

}

/*=========================================================
    BOTÕES DO RESUMO
=========================================================*/

document.getElementById("btnContinuarComprando").onclick=function(){

    window.location.href="index.html";

}

document.getElementById("btnFinalizarCompra").onclick=function(){

    alert("Redirecionando para o Checkout...");

    window.location.href="checkout.html";

}

/*=========================================================
    FOOTER
=========================================================*/

function carregarFooter(){

    document.getElementById("footerTitulo1").textContent="Fanáticos Sports";

    document.getElementById("footerTexto1").textContent=
    "A sua loja especializada em artigos esportivos.";

    document.getElementById("footerTitulo2").textContent="Institucional";

    document.getElementById("footerLink1").textContent="Quem Somos";
    document.getElementById("footerLink2").textContent="Nossa História";
    document.getElementById("footerLink3").textContent="Trabalhe Conosco";

    document.getElementById("footerLink1").href="#";
    document.getElementById("footerLink2").href="#";
    document.getElementById("footerLink3").href="#";

    document.getElementById("footerTitulo3").textContent="Atendimento";

    document.getElementById("footerContato1").textContent="Central de Ajuda";
    document.getElementById("footerContato2").textContent="Trocas e Devoluções";
    document.getElementById("footerContato3").textContent="Contato";

    document.getElementById("footerContato1").href="#";
    document.getElementById("footerContato2").href="#";
    document.getElementById("footerContato3").href="#";

    document.getElementById("footerTitulo4").textContent="Redes Sociais";

    document.getElementById("facebook").textContent="Facebook";
    document.getElementById("instagram").textContent="Instagram";
    document.getElementById("youtube").textContent="YouTube";

    document.getElementById("facebook").href="#";
    document.getElementById("instagram").href="#";
    document.getElementById("youtube").href="#";

    document.getElementById("copyright").textContent=

    "© 2026 Fanáticos Sports - Todos os direitos reservados.";

}

/*=========================================================
    INICIALIZAÇÃO FINAL
=========================================================*/

window.addEventListener("load",function(){

    carregarFooter();

});

/*=========================================================
    FIM DO ARQUIVO
=========================================================*/