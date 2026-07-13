/*=========================================================
    FANÁTICOS SPORTS
    PRODUTOS.JS
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
    MENU PRINCIPAL
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
    BANNER
=========================================================*/

const banner = {

    categoria: "NOVIDADE",

    titulo: "Camisas Oficiais 2026",

    descricao: "Confira os novos uniformes dos maiores clubes e seleções do mundo.",

    botao: "Ver Coleção",

    imagem: "../assets/images/banner-produtos.png"

};

/*=========================================================
    CATEGORIAS
=========================================================*/

const categorias = [

    "Clubes",

    "Seleções",

    "Chuteiras",

    "Masculino",

    "Feminino",

    "Infantil"

];

/*=========================================================
    INICIALIZAÇÃO
=========================================================*/

window.onload = function(){

    carregarHeader();

    carregarMenu();

    carregarBanner();

    carregarCategorias();

}

/*=========================================================
    HEADER
=========================================================*/

function carregarHeader(){

    document.getElementById("logoImagem").src = sistema.logo;

    document.getElementById("logoImagem").alt = sistema.nome;

    document.getElementById("logoTexto").textContent = sistema.nome;

    document.getElementById("txtPesquisar").placeholder = sistema.placeholderPesquisa;

    document.getElementById("btnFavoritos").href = "favoritos.html";

    document.getElementById("btnCarrinho").href = "carrinho.html";

    document.getElementById("btnLogin").href = "login.html";

}

/*=========================================================
    MENU
=========================================================*/

function carregarMenu(){

    for(let i=1;i<=7;i++){

        document.getElementById("menu"+i).textContent = menu[i-1];

        document.getElementById("menu"+i).href = "#";

    }

}

/*=========================================================
    BANNER
=========================================================*/

function carregarBanner(){

    document.getElementById("bannerCategoria").textContent = banner.categoria;

    document.getElementById("bannerTitulo").textContent = banner.titulo;

    document.getElementById("bannerDescricao").textContent = banner.descricao;

    document.getElementById("bannerBotao").textContent = banner.botao;

    document.getElementById("bannerImg").src = banner.imagem;

    document.getElementById("bannerImg").alt = banner.titulo;

}

/*=========================================================
    CATEGORIAS
=========================================================*/

function carregarCategorias(){

    document.getElementById("tituloCategorias").textContent = "Categorias";

    for(let i=1;i<=6;i++){

        document.getElementById("categoria"+i).textContent = categorias[i-1];

    }

}

/*=========================================================
    ORDENAÇÃO
=========================================================*/

function carregarOrdenacao(){

    document.getElementById("lblOrdenar").textContent = "Ordenar por";

    document.getElementById("ordem1").textContent = "Mais Vendidos";

    document.getElementById("ordem2").textContent = "Menor Preço";

    document.getElementById("ordem3").textContent = "Maior Preço";

    document.getElementById("ordem4").textContent = "Mais Recentes";

    document.getElementById("ordem5").textContent = "Promoções";

}

carregarOrdenacao();

/*=========================================================
    PRODUTOS
=========================================================*/

const produtos = [

    {
        categoria:"Clubes",
        nome:"Camisa Flamengo I 2026",
        precoAntigo:299.90,
        preco:249.90,
        imagem:"../assets/images/produtos/flamengo1.png",
        tag:"-17%",
        estrelas:"★★★★★"
    },

    {
        categoria:"Clubes",
        nome:"Camisa Palmeiras I 2026",
        precoAntigo:289.90,
        preco:239.90,
        imagem:"../assets/images/produtos/palmeiras1.png",
        tag:"Oferta",
        estrelas:"★★★★★"
    },

    {
        categoria:"Clubes",
        nome:"Camisa Corinthians I",
        precoAntigo:279.90,
        preco:229.90,
        imagem:"../assets/images/produtos/corinthians1.png",
        tag:"Novo",
        estrelas:"★★★★★"
    },

    {
        categoria:"Clubes",
        nome:"Camisa São Paulo I",
        precoAntigo:289.90,
        preco:239.90,
        imagem:"../assets/images/produtos/saopaulo1.png",
        tag:"-15%",
        estrelas:"★★★★★"
    },

    {
        categoria:"Clubes",
        nome:"Camisa Vasco I",
        precoAntigo:279.90,
        preco:219.90,
        imagem:"../assets/images/produtos/vasco1.png",
        tag:"Oferta",
        estrelas:"★★★★★"
    },

    {
        categoria:"Seleções",
        nome:"Camisa Brasil 2026",
        precoAntigo:319.90,
        preco:269.90,
        imagem:"../assets/images/produtos/brasil1.png",
        tag:"Novo",
        estrelas:"★★★★★"
    },

    {
        categoria:"Seleções",
        nome:"Camisa Argentina 2026",
        precoAntigo:319.90,
        preco:269.90,
        imagem:"../assets/images/produtos/argentina1.png",
        tag:"Novo",
        estrelas:"★★★★★"
    },

    {
        categoria:"Seleções",
        nome:"Camisa Portugal",
        precoAntigo:309.90,
        preco:259.90,
        imagem:"../assets/images/produtos/portugal1.png",
        tag:"-20%",
        estrelas:"★★★★★"
    },

    {
        categoria:"Seleções",
        nome:"Camisa França",
        precoAntigo:309.90,
        preco:259.90,
        imagem:"../assets/images/produtos/franca1.png",
        tag:"Oferta",
        estrelas:"★★★★★"
    },

    {
        categoria:"Chuteiras",
        nome:"Nike Mercurial Vapor",
        precoAntigo:999.90,
        preco:849.90,
        imagem:"../assets/images/produtos/mercurial.png",
        tag:"Top",
        estrelas:"★★★★★"
    },

    {
        categoria:"Chuteiras",
        nome:"Adidas Predator Elite",
        precoAntigo:1099.90,
        preco:949.90,
        imagem:"../assets/images/produtos/predator.png",
        tag:"Novo",
        estrelas:"★★★★★"
    },

    {
        categoria:"Chuteiras",
        nome:"Puma Future Ultimate",
        precoAntigo:949.90,
        preco:799.90,
        imagem:"../assets/images/produtos/future.png",
        tag:"-16%",
        estrelas:"★★★★★"
    }

];

/*=========================================================
    CARREGAR PRODUTOS
=========================================================*/

window.addEventListener("load",carregarProdutos);

function carregarProdutos(){

    for(let i=0;i<produtos.length;i++){

        preencherProduto(i+1,produtos[i]);

    }

}

/*=========================================================
    PREENCHER PRODUTO
=========================================================*/

function preencherProduto(numero,produto){

    document.getElementById("tagProduto"+numero).textContent=
    produto.tag;

    document.getElementById("produtoImagem"+numero).src=
    produto.imagem;

    document.getElementById("produtoImagem"+numero).alt=
    produto.nome;

    document.getElementById("produtoCategoria"+numero).textContent=
    produto.categoria;

    document.getElementById("produtoNome"+numero).textContent=
    produto.nome;

    document.getElementById("estrelas"+numero).textContent=
    produto.estrelas;

    document.getElementById("precoAntigo"+numero).textContent=
    formatarMoeda(produto.precoAntigo);

    document.getElementById("preco"+numero).textContent=
    formatarMoeda(produto.preco);

    document.getElementById("comprar"+numero).textContent=
    "Comprar";

}

/*=========================================================
    FAVORITOS
=========================================================*/

const favoritos = [];

for(let i = 1; i <= produtos.length; i++){

    document.getElementById("favorito"+i)
    .addEventListener("click",function(){

        alternarFavorito(i);

    });

}

function alternarFavorito(numero){

    const botao = document.getElementById("favorito"+numero);

    const icone = botao.querySelector("i");

    if(favoritos.includes(numero)){

        favoritos.splice(favoritos.indexOf(numero),1);

        icone.className = "far fa-heart";

    }else{

        favoritos.push(numero);

        icone.className = "fas fa-heart";

    }

}

/*=========================================================
    BOTÕES COMPRAR
=========================================================*/

for(let i = 1; i <= produtos.length; i++){

    document.getElementById("comprar"+i)
    .addEventListener("click",function(){

        comprarProduto(i);

    });

}

function comprarProduto(numero){

    const produto = produtos[numero-1];

    alert(produto.nome + " foi adicionado ao carrinho!");

}

/*=========================================================
    PESQUISA
=========================================================*/

document.getElementById("btnPesquisar")
.addEventListener("click",pesquisarProdutos);

document.getElementById("txtPesquisar")
.addEventListener("keyup",function(e){

    if(e.key==="Enter"){

        pesquisarProdutos();

    }

});

function pesquisarProdutos(){

    const pesquisa = document
        .getElementById("txtPesquisar")
        .value
        .toLowerCase()
        .trim();

    if(pesquisa===""){

        alert("Digite um produto para pesquisar.");

        return;

    }

    alert("Pesquisa realizada: " + pesquisa);

}

/*=========================================================
    ORDENAÇÃO
=========================================================*/

document.getElementById("selectOrdenacao")
.addEventListener("change",function(){

    const opcao = this.selectedIndex;

    switch(opcao){

        case 0:

            produtos.sort((a,b)=>0);

        break;

        case 1:

            produtos.sort((a,b)=>a.preco-b.preco);

        break;

        case 2:

            produtos.sort((a,b)=>b.preco-a.preco);

        break;

        case 3:

            produtos.reverse();

        break;

        case 4:

            produtos.sort((a,b)=>{

                return a.precoAntigo-a.preco < b.precoAntigo-b.preco ? 1 : -1;

            });

        break;

    }

    carregarProdutos();

});

/*=========================================================
    PAGINAÇÃO
=========================================================*/

document.getElementById("paginaAnterior").textContent="<";

document.getElementById("pagina1").textContent="1";

document.getElementById("pagina2").textContent="2";

document.getElementById("pagina3").textContent="3";

document.getElementById("pagina4").textContent="4";

document.getElementById("pagina5").textContent="5";

document.getElementById("paginaProxima").textContent=">";

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
    CATEGORIAS
=========================================================*/

for(let i=1;i<=6;i++){

    document.getElementById("categoria"+i)
    .addEventListener("click",function(){

        selecionarCategoria(i);

    });

}

function selecionarCategoria(numero){

    document.querySelectorAll(".categorias button")
    .forEach(function(botao){

        botao.style.background="#FFFFFF";

        botao.style.color="#009640";

    });

    const categoria=document.getElementById("categoria"+numero);

    categoria.style.background="#009640";

    categoria.style.color="#FFFFFF";

    console.log("Categoria selecionada:",categoria.textContent);

}

/*=========================================================
    BANNER
=========================================================*/

document.getElementById("bannerBotao")
.addEventListener("click",function(){

    alert("Abrindo coleção de produtos...");

});

/*=========================================================
    MENU
=========================================================*/

for(let i=1;i<=7;i++){

    document.getElementById("menu"+i)
    .addEventListener("click",function(e){

        e.preventDefault();

        console.log("Menu:",this.textContent);

    });

}

/*=========================================================
    FOOTER
=========================================================*/

function carregarFooter(){

    document.getElementById("footerTitulo1").textContent="Fanáticos Sports";

    document.getElementById("footerTexto1").textContent=
    "A sua loja especializada em artigos esportivos, oferecendo produtos oficiais com qualidade e segurança.";

    document.getElementById("footerTitulo2").textContent="Institucional";

    document.getElementById("footerLink1").textContent="Quem Somos";
    document.getElementById("footerLink2").textContent="Nossa História";
    document.getElementById("footerLink3").textContent="Trabalhe Conosco";

    document.getElementById("footerTitulo3").textContent="Atendimento";

    document.getElementById("footerContato1").textContent="Central de Ajuda";
    document.getElementById("footerContato2").textContent="Trocas e Devoluções";
    document.getElementById("footerContato3").textContent="Contato";

    document.getElementById("footerTitulo4").textContent="Redes Sociais";

    document.getElementById("facebook").textContent="Facebook";
    document.getElementById("instagram").textContent="Instagram";
    document.getElementById("youtube").textContent="YouTube";

    document.getElementById("footerLink1").href="#";
    document.getElementById("footerLink2").href="#";
    document.getElementById("footerLink3").href="#";

    document.getElementById("footerContato1").href="#";
    document.getElementById("footerContato2").href="#";
    document.getElementById("footerContato3").href="#";

    document.getElementById("facebook").href="#";
    document.getElementById("instagram").href="#";
    document.getElementById("youtube").href="#";

    document.getElementById("copyright").textContent=
    "© 2026 Fanáticos Sports - Todos os direitos reservados.";

}

/*=========================================================
    PAGINAÇÃO
=========================================================*/

const paginas=[

    "paginaAnterior",
    "pagina1",
    "pagina2",
    "pagina3",
    "pagina4",
    "pagina5",
    "paginaProxima"

];

paginas.forEach(function(id){

    document.getElementById(id)
    .addEventListener("click",function(){

        console.log("Clique:",id);

    });

});

/*=========================================================
    INICIALIZAÇÃO FINAL
=========================================================*/

window.addEventListener("load",function(){

    carregarFooter();

    console.log("Sistema carregado com sucesso.");

});

/*=========================================================
    FIM DO ARQUIVO
=========================================================*/