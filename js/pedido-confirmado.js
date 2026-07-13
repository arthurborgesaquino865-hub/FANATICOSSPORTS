/*=========================================================
    FANÁTICOS SPORTS
    PEDIDO-CONFIRMADO.JS
=========================================================*/

/*=========================================================
    CONFIGURAÇÕES DO SISTEMA
=========================================================*/

const sistema={

    nome:"Fanáticos Sports",

    logo:"../assets/images/logo.png",

    placeholderPesquisa:"Pesquisar produtos..."

};

/*=========================================================
    MENU
=========================================================*/

const menu=[

    "Clubes",
    "Seleções",
    "Chuteiras",
    "Masculino",
    "Feminino",
    "Infantil",
    "Promoções"

];

/*=========================================================
    DADOS DO PEDIDO
=========================================================*/

const pedido={

    numero:"FS202600001",

    produto:"Camisa Oficial Flamengo I 2026",

    quantidade:2,

    pagamento:"PIX",

    valor:474.70,

    dataCompra:"15/01/2026",

    previsaoEntrega:"22/01/2026"

};

/*=========================================================
    INICIALIZAÇÃO
=========================================================*/

window.onload=function(){

    carregarHeader();

    carregarMenu();

    carregarBreadcrumb();

    carregarConfirmacao();

    carregarResumo();

};

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

    document.getElementById("breadcrumbPagamento").textContent="Pagamento";

    document.getElementById("breadcrumbAtual").textContent="Pedido Confirmado";

    document.getElementById("breadcrumbSeparador1").textContent=">";

    document.getElementById("breadcrumbSeparador2").textContent=">";

}

/*=========================================================
    CONFIRMAÇÃO
=========================================================*/

function carregarConfirmacao(){

    document.getElementById("tituloSucesso").textContent=
    "Pedido Confirmado!";

    document.getElementById("mensagemSucesso").textContent=
    "Obrigado pela sua compra. Seu pedido foi recebido com sucesso e já está sendo processado pela nossa equipe.";

    document.getElementById("tituloPedido").textContent=
    "Número do Pedido";

    document.getElementById("numeroPedido").textContent=
    "#"+pedido.numero;

}

/*=========================================================
    RESUMO DO PEDIDO
=========================================================*/

function carregarResumo(){

    document.getElementById("tituloResumo").textContent=
    "Resumo da Compra";

    document.getElementById("lblProduto").textContent=
    "Produto";

    document.getElementById("produto").textContent=
    pedido.produto;

    document.getElementById("lblQuantidade").textContent=
    "Quantidade";

    document.getElementById("quantidade").textContent=
    pedido.quantidade;

    document.getElementById("lblPagamento").textContent=
    "Forma de Pagamento";

    document.getElementById("formaPagamento").textContent=
    pedido.pagamento;

    document.getElementById("lblValor").textContent=
    "Valor Total";

    document.getElementById("valorTotal").textContent=
    formatarMoeda(pedido.valor);

    document.getElementById("lblDataCompra").textContent=
    "Data da Compra";

    document.getElementById("dataCompra").textContent=
    pedido.dataCompra;

    document.getElementById("lblEntrega").textContent=
    "Previsão de Entrega";

    document.getElementById("previsaoEntrega").textContent=
    pedido.previsaoEntrega;

}

/*=========================================================
    FORMATAÇÃO
=========================================================*/

function formatarMoeda(valor){

    return valor.toLocaleString("pt-BR",{

        style:"currency",

        currency:"BRL"

    });

}

/*=========================================================
    INFORMAÇÕES AO CLIENTE
=========================================================*/

function carregarInformacoes(){

    document.getElementById("textoInformacao1").textContent=
    "Enviamos um e-mail com todos os detalhes do seu pedido. Caso não encontre, verifique também sua caixa de spam.";

    document.getElementById("textoInformacao2").textContent=
    "Você também poderá acompanhar todas as atualizações diretamente na área de pedidos da sua conta.";

}

/*=========================================================
    STATUS DO PEDIDO
=========================================================*/

function carregarStatus(){

    document.getElementById("statusTitulo1").textContent=
    "Pedido Recebido";

    document.getElementById("statusTexto1").textContent=
    "Seu pedido foi recebido e registrado com sucesso.";

    document.getElementById("statusTitulo2").textContent=
    "Preparando Envio";

    document.getElementById("statusTexto2").textContent=
    "Nossa equipe está separando e embalando seus produtos.";

    document.getElementById("statusTitulo3").textContent=
    "Entrega";

    document.getElementById("statusTexto3").textContent=
    "Assim que o pedido for enviado, você receberá o código de rastreamento.";

}

/*=========================================================
    FOOTER
=========================================================*/

function carregarFooter(){

    document.getElementById("footerTitulo1").textContent=
    sistema.nome;

    document.getElementById("footerTexto1").textContent=
    "Produtos oficiais dos maiores clubes e seleções do mundo com segurança e qualidade.";

    document.getElementById("footerTitulo2").textContent=
    "Institucional";

    document.getElementById("footerLink1").textContent=
    "Quem Somos";

    document.getElementById("footerLink2").textContent=
    "Nossa História";

    document.getElementById("footerLink3").textContent=
    "Política de Privacidade";

    document.getElementById("footerTitulo3").textContent=
    "Atendimento";

    document.getElementById("footerContato1").textContent=
    "Central de Ajuda";

    document.getElementById("footerContato2").textContent=
    "Trocas e Devoluções";

    document.getElementById("footerContato3").textContent=
    "Fale Conosco";

    document.getElementById("footerTitulo4").textContent=
    "Redes Sociais";

    document.getElementById("facebook").textContent=
    "Facebook";

    document.getElementById("instagram").textContent=
    "Instagram";

    document.getElementById("youtube").textContent=
    "YouTube";

    document.getElementById("copyright").textContent=
    "© 2026 Fanáticos Sports - Todos os direitos reservados.";

}

/*=========================================================
    PESQUISA
=========================================================*/

function configurarPesquisa(){

    document.getElementById("btnPesquisar")
    .addEventListener("click",pesquisar);

    document.getElementById("txtPesquisar")
    .addEventListener("keyup",function(event){

        if(event.key==="Enter"){

            pesquisar();

        }

    });

}

function pesquisar(){

    const texto=document
    .getElementById("txtPesquisar")
    .value
    .trim();

    if(texto===""){

        alert("Digite um produto para pesquisar.");

        return;

    }

    alert("Pesquisa: "+texto);

}

/*=========================================================
    BOTÕES
=========================================================*/

function configurarBotoes(){

    document.getElementById("btnAcompanharPedido").textContent=
    "Acompanhar Pedido";

    document.getElementById("btnContinuarComprando").textContent=
    "Continuar Comprando";

    document.getElementById("btnAcompanharPedido")
    .addEventListener("click",function(){

        alert("Em breve você poderá acompanhar seu pedido.");

        // window.location.href="meus-pedidos.html";

    });

    document.getElementById("btnContinuarComprando")
    .addEventListener("click",function(){

        window.location.href="home.html";

    });

}

/*=========================================================
    INICIALIZAÇÃO COMPLEMENTAR
=========================================================*/

window.addEventListener("load",function(){

    carregarInformacoes();

    carregarStatus();

    carregarFooter();

    configurarPesquisa();

    configurarBotoes();

});

/*=========================================================
    GERAÇÃO DO PEDIDO
=========================================================*/

function gerarNumeroPedido(){

    const ano=new Date().getFullYear();

    const numero=Math.floor(Math.random()*900000)+100000;

    pedido.numero="FS"+ano+numero;

    document.getElementById("numeroPedido").textContent=
    "#"+pedido.numero;

}

/*=========================================================
    DATAS
=========================================================*/

function atualizarDatas(){

    const hoje=new Date();

    const entrega=new Date();

    entrega.setDate(hoje.getDate()+7);

    document.getElementById("dataCompra").textContent=
    formatarData(hoje);

    document.getElementById("previsaoEntrega").textContent=
    formatarData(entrega);

}

function formatarData(data){

    return data.toLocaleDateString("pt-BR");

}

/*=========================================================
    ANIMAÇÕES
=========================================================*/

function iniciarAnimacoes(){

    const container=document.querySelector(".pedidoContainer");

    container.style.opacity="0";

    container.style.transform="translateY(30px)";

    setTimeout(function(){

        container.style.transition="all .6s ease";

        container.style.opacity="1";

        container.style.transform="translateY(0)";

    },150);

}

/*=========================================================
    EFEITOS DOS BOTÕES
=========================================================*/

function configurarHoverBotoes(){

    const botoes=document.querySelectorAll("button");

    botoes.forEach(function(botao){

        botao.addEventListener("mouseenter",function(){

            this.style.transform="translateY(-2px)";

        });

        botao.addEventListener("mouseleave",function(){

            this.style.transform="translateY(0)";

        });

    });

}

/*=========================================================
    MENSAGEM FINAL
=========================================================*/

function exibirMensagemBoasVindas(){

    console.log("====================================");

    console.log("Fanáticos Sports");

    console.log("Pedido confirmado com sucesso!");

    console.log("Número do pedido: "+pedido.numero);

    console.log("====================================");

}

/*=========================================================
    INICIALIZAÇÃO FINAL
=========================================================*/

window.addEventListener("load",function(){

    gerarNumeroPedido();

    atualizarDatas();

    iniciarAnimacoes();

    configurarHoverBotoes();

    exibirMensagemBoasVindas();

});

/*=========================================================
    FIM DO ARQUIVO
=========================================================*/