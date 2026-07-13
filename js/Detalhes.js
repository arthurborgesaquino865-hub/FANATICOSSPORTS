/*=========================================================
    FANÁTICOS SPORTS
    PRODUTO.JS
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
    DADOS DO PRODUTO
=========================================================*/

const produto = {

    categoria: "Clubes",

    nome: "Camisa Oficial Flamengo I 2026",

    codigo: "REF: FLA2026-001",

    estrelas: "★★★★★",

    precoAntigo: 299.90,

    preco: 249.90,

    parcelamento: "ou 10x de R$ 24,99 sem juros",

    estoque: "Em estoque",

    imagemPrincipal: "../assets/images/produtos/flamengo1.png",

    miniaturas: [

        "../assets/images/produtos/flamengo1.png",
        "../assets/images/produtos/flamengo2.png",
        "../assets/images/produtos/flamengo3.png",
        "../assets/images/produtos/flamengo4.png"

    ]

};

/*=========================================================
    INICIALIZAÇÃO
=========================================================*/

window.onload=function(){

    carregarHeader();

    carregarMenu();

    carregarBreadcrumb();

    carregarProduto();

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

    for(let i=1;i<=7;i++){

        document.getElementById("menu"+i).textContent=menu[i-1];

        document.getElementById("menu"+i).href="#";

    }

}

/*=========================================================
    BREADCRUMB
=========================================================*/

function carregarBreadcrumb(){

    document.getElementById("breadcrumbHome").textContent="Home";

    document.getElementById("breadcrumbProdutos").textContent="Produtos";

    document.getElementById("breadcrumbAtual").textContent=produto.nome;

    document.getElementById("breadcrumbSeparador1").textContent=">";

    document.getElementById("breadcrumbSeparador2").textContent=">";

}

/*=========================================================
    PRODUTO
=========================================================*/

function carregarProduto(){

    document.getElementById("categoriaProduto").textContent=produto.categoria;

    document.getElementById("nomeProduto").textContent=produto.nome;

    document.getElementById("codigoProduto").textContent=produto.codigo;

    document.getElementById("estrelasProduto").textContent=produto.estrelas;

    document.getElementById("precoAntigo").textContent=
        formatarMoeda(produto.precoAntigo);

    document.getElementById("precoAtual").textContent=
        formatarMoeda(produto.preco);

    document.getElementById("parcelamento").textContent=
        produto.parcelamento;

    document.getElementById("estoque").textContent=
        produto.estoque;

    document.getElementById("imagemPrincipal").src=
        produto.imagemPrincipal;

    document.getElementById("imagemPrincipal").alt=
        produto.nome;

    for(let i=1;i<=4;i++){

        document.getElementById("miniatura"+i).src=
            produto.miniaturas[i-1];

        document.getElementById("miniatura"+i).alt=
            produto.nome+" "+i;

    }

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
    TAMANHOS
=========================================================*/

const tamanhos = ["P","M","G","GG","XGG"];

let tamanhoSelecionado = "M";

function carregarTamanhos(){

    for(let i=0;i<tamanhos.length;i++){

        const botao = document.getElementById("tam"+tamanhos[i]);

        botao.textContent = tamanhos[i];

        if(tamanhos[i] === tamanhoSelecionado){

            botao.style.background = "#009640";
            botao.style.color = "#FFFFFF";
            botao.style.borderColor = "#009640";

        }

        botao.addEventListener("click",function(){

            selecionarTamanho(tamanhos[i]);

        });

    }

}

function selecionarTamanho(tamanho){

    tamanhoSelecionado = tamanho;

    tamanhos.forEach(function(item){

        const botao = document.getElementById("tam"+item);

        botao.style.background = "#FFFFFF";
        botao.style.color = "#222222";
        botao.style.borderColor = "#E5E5E5";

    });

    const selecionado = document.getElementById("tam"+tamanho);

    selecionado.style.background = "#009640";
    selecionado.style.color = "#FFFFFF";
    selecionado.style.borderColor = "#009640";

}

/*=========================================================
    MINIATURAS
=========================================================*/

function carregarMiniaturas(){

    for(let i=1;i<=4;i++){

        document.getElementById("miniatura"+i)
        .addEventListener("click",function(){

            trocarImagem(i);

        });

    }

}

function trocarImagem(indice){

    document.getElementById("imagemPrincipal").src =
    produto.miniaturas[indice-1];

}

/*=========================================================
    QUANTIDADE
=========================================================*/

let quantidade = 1;

function carregarQuantidade(){

    document.getElementById("quantidade").textContent = quantidade;

    document.getElementById("btnMais")
    .addEventListener("click",aumentarQuantidade);

    document.getElementById("btnMenos")
    .addEventListener("click",diminuirQuantidade);

}

function aumentarQuantidade(){

    quantidade++;

    atualizarQuantidade();

}

function diminuirQuantidade(){

    if(quantidade > 1){

        quantidade--;

        atualizarQuantidade();

    }

}

function atualizarQuantidade(){

    document.getElementById("quantidade").textContent = quantidade;

}

/*=========================================================
    FAVORITOS
=========================================================*/

let favorito = false;

document.getElementById("btnFavoritar")
.addEventListener("click",alternarFavorito);

function alternarFavorito(){

    favorito = !favorito;

    const icone = document.querySelector("#btnFavoritar i");

    if(favorito){

        icone.className = "fas fa-heart";

    }else{

        icone.className = "far fa-heart";

    }

}

/*=========================================================
    BOTÕES
=========================================================*/

function carregarBotoes(){

    document.getElementById("btnComprarAgora").textContent =
    "Comprar Agora";

    document.getElementById("btnAdicionarCarrinho").textContent =
    "Adicionar ao Carrinho";

    document.getElementById("textoFavoritar").textContent =
    "Favoritar";

    document.getElementById("btnComprarAgora")
    .addEventListener("click",comprarAgora);

    document.getElementById("btnAdicionarCarrinho")
    .addEventListener("click",adicionarCarrinho);

}

function comprarAgora(){

    alert(
        "Compra iniciada!\n\n" +
        "Produto: " + produto.nome +
        "\nTamanho: " + tamanhoSelecionado +
        "\nQuantidade: " + quantidade
    );

}

function adicionarCarrinho(){

    alert(
        quantidade +
        " unidade(s) adicionada(s) ao carrinho!"
    );

}

/*=========================================================
    INICIALIZAÇÃO
=========================================================*/

window.addEventListener("load",function(){

    carregarTamanhos();

    carregarMiniaturas();

    carregarQuantidade();

    carregarBotoes();

});

/*=========================================================
    FRETE
=========================================================*/

function carregarFrete(){

    document.getElementById("tituloFrete").textContent =
    "Calcule o Frete";

    document.getElementById("cep").placeholder =
    "Digite seu CEP";

    document.getElementById("btnCalcularFrete").textContent =
    "Calcular";

    document.getElementById("btnCalcularFrete")
    .addEventListener("click",calcularFrete);

}

function calcularFrete(){

    const cep = document.getElementById("cep").value.trim();

    if(cep===""){

        document.getElementById("resultadoFrete").textContent =
        "Informe um CEP válido.";

        return;

    }

    document.getElementById("resultadoFrete").textContent =
    "Entrega prevista entre 3 e 7 dias úteis.";

}

/*=========================================================
    ABAS
=========================================================*/

function carregarAbas(){

    document.getElementById("abaDescricao").textContent =
    "Descrição";

    document.getElementById("abaEspecificacoes").textContent =
    "Especificações";

    document.getElementById("abaAvaliacoes").textContent =
    "Avaliações";

    document.getElementById("descricaoProduto").textContent =
    "Camisa oficial confeccionada com tecido leve, respirável e confortável. Produto licenciado, ideal para uso esportivo ou casual.";

    document.getElementById("especificacoesProduto").innerHTML =

    "• Material: Poliéster<br>" +
    "• Escudo Bordado<br>" +
    "• Tecnologia Dry Fit<br>" +
    "• Gola Careca<br>" +
    "• Temporada 2026";

    document.getElementById("avaliacoesProduto").innerHTML =

    "★★★★★ João Silva<br>" +
    "Excelente qualidade!<br><br>" +

    "★★★★★ Carlos Souza<br>" +
    "Produto original e muito bonito.";

    mostrarAba("descricao");

    document.getElementById("abaDescricao")
    .addEventListener("click",function(){

        mostrarAba("descricao");

    });

    document.getElementById("abaEspecificacoes")
    .addEventListener("click",function(){

        mostrarAba("especificacoes");

    });

    document.getElementById("abaAvaliacoes")
    .addEventListener("click",function(){

        mostrarAba("avaliacoes");

    });

}

function mostrarAba(nome){

    document.getElementById("descricaoProduto").style.display="none";
    document.getElementById("especificacoesProduto").style.display="none";
    document.getElementById("avaliacoesProduto").style.display="none";

    document.getElementById("descricaoProduto").style.display =
        nome==="descricao" ? "block" : "none";

    document.getElementById("especificacoesProduto").style.display =
        nome==="especificacoes" ? "block" : "none";

    document.getElementById("avaliacoesProduto").style.display =
        nome==="avaliacoes" ? "block" : "none";

}

/*=========================================================
    PRODUTOS RELACIONADOS
=========================================================*/

const relacionados=[

    {

        categoria:"Clubes",

        nome:"Camisa Palmeiras I",

        preco:239.90,

        precoAntigo:289.90,

        estrelas:"★★★★★",

        imagem:"../assets/images/produtos/palmeiras1.png"

    },

    {

        categoria:"Clubes",

        nome:"Camisa Corinthians I",

        preco:229.90,

        precoAntigo:279.90,

        estrelas:"★★★★★",

        imagem:"../assets/images/produtos/corinthians1.png"

    },

    {

        categoria:"Seleções",

        nome:"Camisa Brasil 2026",

        preco:269.90,

        precoAntigo:319.90,

        estrelas:"★★★★★",

        imagem:"../assets/images/produtos/brasil1.png"

    },

    {

        categoria:"Chuteiras",

        nome:"Nike Mercurial Vapor",

        preco:849.90,

        precoAntigo:999.90,

        estrelas:"★★★★★",

        imagem:"../assets/images/produtos/mercurial.png"

    }

];

function carregarRelacionados(){

    document.getElementById("tituloRelacionados").textContent =
    "Produtos Relacionados";

    for(let i=1;i<=4;i++){

        const item = relacionados[i-1];

        document.getElementById("relacionadoImg"+i).src =
        item.imagem;

        document.getElementById("relacionadoImg"+i).alt =
        item.nome;

        document.getElementById("relacionadoCategoria"+i).textContent =
        item.categoria;

        document.getElementById("relacionadoNome"+i).textContent =
        item.nome;

        document.getElementById("relacionadoEstrelas"+i).textContent =
        item.estrelas;

        document.getElementById("relacionadoPrecoAntigo"+i).textContent =
        formatarMoeda(item.precoAntigo);

        document.getElementById("relacionadoPreco"+i).textContent =
        formatarMoeda(item.preco);

        document.getElementById("relacionadoComprar"+i).textContent =
        "Comprar";

        document.getElementById("relacionadoComprar"+i)
        .addEventListener("click",function(){

            alert(item.nome + " selecionado.");

        });

    }

}

/*=========================================================
    INICIALIZAÇÃO
=========================================================*/

window.addEventListener("load",function(){

    carregarFrete();

    carregarAbas();

    carregarRelacionados();

});

/*=========================================================
    INFORMAÇÕES EXTRAS
=========================================================*/

function carregarInformacoesExtras(){

    document.getElementById("infoGarantia").textContent =
    "Garantia de 90 dias contra defeitos de fabricação.";

    document.getElementById("infoEntrega").textContent =
    "Entrega rápida para todo o Brasil.";

    document.getElementById("infoPagamento").textContent =
    "Parcelamento em até 10x sem juros.";

}

/*=========================================================
    FOOTER
=========================================================*/

function carregarFooter(){

    document.getElementById("footerTitulo1").textContent =
    sistema.nome;

    document.getElementById("footerTexto1").textContent =
    "A Fanáticos Sports oferece produtos oficiais dos maiores clubes e seleções do mundo com qualidade, segurança e os melhores preços.";

    document.getElementById("footerTitulo2").textContent =
    "Institucional";

    document.getElementById("footerLink1").textContent =
    "Quem Somos";

    document.getElementById("footerLink2").textContent =
    "Nossa História";

    document.getElementById("footerLink3").textContent =
    "Política de Privacidade";

    document.getElementById("footerTitulo3").textContent =
    "Atendimento";

    document.getElementById("footerContato1").textContent =
    "Central de Ajuda";

    document.getElementById("footerContato2").textContent =
    "Trocas e Devoluções";

    document.getElementById("footerContato3").textContent =
    "Fale Conosco";

    document.getElementById("footerTitulo4").textContent =
    "Redes Sociais";

    document.getElementById("facebook").textContent =
    "Facebook";

    document.getElementById("instagram").textContent =
    "Instagram";

    document.getElementById("youtube").textContent =
    "YouTube";

    document.getElementById("footerLink1").href="#";
    document.getElementById("footerLink2").href="#";
    document.getElementById("footerLink3").href="#";

    document.getElementById("footerContato1").href="#";
    document.getElementById("footerContato2").href="#";
    document.getElementById("footerContato3").href="#";

    document.getElementById("facebook").href="#";
    document.getElementById("instagram").href="#";
    document.getElementById("youtube").href="#";

    document.getElementById("copyright").textContent =
    "© 2026 Fanáticos Sports - Todos os direitos reservados.";

}

/*=========================================================
    MENU
=========================================================*/

function configurarMenu(){

    for(let i=1;i<=7;i++){

        document.getElementById("menu"+i)
        .addEventListener("click",function(e){

            e.preventDefault();

            console.log("Menu selecionado:",this.textContent);

        });

    }

}

/*=========================================================
    BREADCRUMB
=========================================================*/

function configurarBreadcrumb(){

    document.getElementById("breadcrumbHome")
    .addEventListener("click",function(e){

        e.preventDefault();

        console.log("Ir para Home");

    });

    document.getElementById("breadcrumbProdutos")
    .addEventListener("click",function(e){

        e.preventDefault();

        console.log("Ir para Produtos");

    });

}

/*=========================================================
    PESQUISA
=========================================================*/

function configurarPesquisa(){

    document.getElementById("btnPesquisar")
    .addEventListener("click",realizarPesquisa);

    document.getElementById("txtPesquisar")
    .addEventListener("keyup",function(e){

        if(e.key==="Enter"){

            realizarPesquisa();

        }

    });

}

function realizarPesquisa(){

    const texto =
    document.getElementById("txtPesquisar")
    .value
    .trim();

    if(texto===""){

        alert("Digite um produto para pesquisar.");

        return;

    }

    alert("Pesquisa realizada: " + texto);

}

/*=========================================================
    INICIALIZAÇÃO FINAL
=========================================================*/

window.addEventListener("load",function(){

    carregarInformacoesExtras();

    carregarFooter();

    configurarMenu();

    configurarBreadcrumb();

    configurarPesquisa();

    console.log("Página de detalhes do produto carregada com sucesso.");

});

/*=========================================================
    FIM DO ARQUIVO
=========================================================*/