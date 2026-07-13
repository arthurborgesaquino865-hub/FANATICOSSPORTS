/*=========================================================
    FANÁTICOS SPORTS
    SCRIPT.JS
=========================================================*/

/*=========================================================
    CONFIGURAÇÕES DO SISTEMA
=========================================================*/

const sistema = {

    nome: "Fanáticos Sports",

    logo: "assets/images/logo.png",

    placeholderPesquisa: "Pesquisar produtos...",

    banner:{

        tag:"LANÇAMENTO",

        titulo:"Nova Coleção 2026",

        descricao:"As melhores camisas oficiais, chuteiras e acessórios esportivos com os melhores preços.",

        botao:"COMPRAR AGORA",

        imagem:"assets/images/banner.png"

    }

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
    INICIALIZAÇÃO
=========================================================*/

window.onload=function(){

    carregarHeader();

    carregarMenu();

    carregarBanner();

}

/*=========================================================
    HEADER
=========================================================*/

function carregarHeader(){

    /* Logo */

    document.getElementById("logoImagem").src=sistema.logo;

    document.getElementById("logoImagem").alt=sistema.nome;

    document.getElementById("logoTexto").textContent=sistema.nome;

    /* Pesquisa */

    document.getElementById("txtPesquisar").placeholder=sistema.placeholderPesquisa;

    /* Links */

    document.getElementById("btnLogin").href="pages/login.html";

    document.getElementById("btnCarrinho").href="pages/carrinho.html";

    document.getElementById("btnFavoritos").href="pages/favoritos.html";

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
    BANNER
=========================================================*/

function carregarBanner(){

    document.getElementById("bannerTag").textContent=sistema.banner.tag;

    document.getElementById("bannerTitulo").textContent=sistema.banner.titulo;

    document.getElementById("bannerDescricao").textContent=sistema.banner.descricao;

    document.getElementById("bannerBotao").textContent=sistema.banner.botao;

    document.getElementById("bannerImagem").src=sistema.banner.imagem;

    document.getElementById("bannerImagem").alt=sistema.banner.titulo;

}

/*=========================================================
    PRODUTOS
=========================================================*/

const produtos = [

    {

        categoria: "Seleções",

        nome: "Camisa Brasil 2026",

        precoAntigo: "R$ 349,90",

        preco: "R$ 249,90",

        imagem: "assets/images/brasil.png",

        promocao: "-30%"

    },

    {

        categoria: "Clubes",

        nome: "Camisa Flamengo I",

        precoAntigo: "R$ 329,90",

        preco: "R$ 229,90",

        imagem: "assets/images/flamengo.png",

        promocao: "OFERTA"

    },

    {

        categoria: "Clubes",

        nome: "Camisa Corinthians I",

        precoAntigo: "R$ 329,90",

        preco: "R$ 229,90",

        imagem: "assets/images/corinthians.png",

        promocao: "NOVO"

    },

    {

        categoria: "Chuteiras",

        nome: "Nike Mercurial Vapor",

        precoAntigo: "R$ 999,90",

        preco: "R$ 799,90",

        imagem: "assets/images/chuteira.png",

        promocao: "-20%"

    }

];

/*=========================================================
    CARREGAR PRODUTOS
=========================================================*/

window.addEventListener("load",carregarProdutos);

function carregarProdutos(){

    document.getElementById("tituloMaisVendidos").textContent="Mais Vendidos";

    preencherProduto(1,produtos[0]);

    preencherProduto(2,produtos[1]);

    preencherProduto(3,produtos[2]);

    preencherProduto(4,produtos[3]);

}

/*=========================================================
    PREENCHER PRODUTO
=========================================================*/

function preencherProduto(numero,produto){

    document.getElementById("tagProduto"+numero).textContent=produto.promocao;

    document.getElementById("produtoImagem"+numero).src=produto.imagem;

    document.getElementById("produtoImagem"+numero).alt=produto.nome;

    document.getElementById("categoria"+numero).textContent=produto.categoria;

    document.getElementById("produtoNome"+numero).textContent=produto.nome;

    document.getElementById("precoAntigo"+numero).textContent=produto.precoAntigo;

    document.getElementById("preco"+numero).textContent=produto.preco;

    document.getElementById("comprar"+numero).textContent="Comprar";

    document.getElementById("estrelas"+numero).innerHTML=`

        <i class="fas fa-star"></i>

        <i class="fas fa-star"></i>

        <i class="fas fa-star"></i>

        <i class="fas fa-star"></i>

        <i class="fas fa-star-half-alt"></i>

    `;

}

/*=========================================================
    BOTÕES COMPRAR
=========================================================*/

document.getElementById("comprar1").onclick=()=>comprar(1);

document.getElementById("comprar2").onclick=()=>comprar(2);

document.getElementById("comprar3").onclick=()=>comprar(3);

document.getElementById("comprar4").onclick=()=>comprar(4);

/*=========================================================
    COMPRAR
=========================================================*/

function comprar(indice){

    const produto=produtos[indice-1];

    alert(

        "Produto adicionado ao carrinho!\n\n"+

        produto.nome+"\n"+

        produto.preco

    );

}

/*=========================================================
    RODAPÉ
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

    alert("Pesquisar: "+texto);

}

/*=========================================================
    FAVORITOS
=========================================================*/

document.getElementById("favorito1").onclick=()=>favoritar(1);

document.getElementById("favorito2").onclick=()=>favoritar(2);

document.getElementById("favorito3").onclick=()=>favoritar(3);

document.getElementById("favorito4").onclick=()=>favoritar(4);

function favoritar(numero){

    const botao=document
        .getElementById("favorito"+numero)
        .querySelector("i");

    if(botao.classList.contains("fas")){

        botao.classList.remove("fas");

        botao.classList.add("far");

        botao.style.color="#999";

    }

    else{

        botao.classList.remove("far");

        botao.classList.add("fas");

        botao.style.color="#ff3b30";

    }

}

/*=========================================================
    BOTÃO DO BANNER
=========================================================*/

document.getElementById("bannerBotao").addEventListener("click",function(){

    document.getElementById("maisVendidos").scrollIntoView({

        behavior:"smooth"

    });

});

/*=========================================================
    INICIALIZAÇÃO FINAL
=========================================================*/

window.addEventListener("load",function(){

    carregarFooter();

});

/*=========================================================
    FIM DO SCRIPT
=========================================================*/