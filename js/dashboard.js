/*=========================================================
    DASHBOARD
=========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*=========================================================
        LOGO
    =========================================================*/

    document.getElementById("logoAdminImagem").src =
        "../assets/logo.png";

    document.getElementById("logoAdminTexto").textContent =
        "Fanáticos Sports";

    /*=========================================================
        TOPBAR
    =========================================================*/

    document.getElementById("tituloPagina").textContent =
        "Dashboard";

    document.getElementById("txtPesquisarAdmin").placeholder =
        "Pesquisar...";

    document.getElementById("fotoPerfilAdmin").src =
        "../assets/admin.png";

    document.getElementById("nomeAdmin").textContent =
        "Arthur";

    document.getElementById("cargoAdmin").textContent =
        "Administrador";

    /*=========================================================
        MENU LATERAL
    =========================================================*/

    document.getElementById("menuDashboardTexto").textContent =
        "Dashboard";

    document.getElementById("menuProdutosTexto").textContent =
        "Produtos";

    document.getElementById("menuCadastrarProdutoTexto").textContent =
        "Cadastrar Produto";

    document.getElementById("menuCategoriasTexto").textContent =
        "Categorias";

    document.getElementById("menuPedidosTexto").textContent =
        "Pedidos";

    document.getElementById("menuClientesTexto").textContent =
        "Clientes";

    document.getElementById("menuEstoqueTexto").textContent =
        "Estoque";

    document.getElementById("menuRelatoriosTexto").textContent =
        "Relatórios";

    document.getElementById("menuConfiguracoesTexto").textContent =
        "Configurações";

    document.getElementById("menuSairTexto").textContent =
        "Sair";

    /*=========================================================
        CARDS
    =========================================================*/

    document.getElementById("cardTitulo1").textContent =
        "Produtos";

    document.getElementById("cardValor1").textContent =
        "248";

    document.getElementById("cardTitulo2").textContent =
        "Pedidos";

    document.getElementById("cardValor2").textContent =
        "95";

    document.getElementById("cardTitulo3").textContent =
        "Clientes";

    document.getElementById("cardValor3").textContent =
        "1.548";

    document.getElementById("cardTitulo4").textContent =
        "Faturamento";

    document.getElementById("cardValor4").textContent =
        "R$ 58.240,90";

});

/*=========================================================
    GRÁFICO
=========================================================*/

document.getElementById("tituloGrafico").textContent =
    "Vendas dos Últimos Meses";

const grafico = document.getElementById("graficoVendas");

const contexto = grafico.getContext("2d");

contexto.fillStyle = "#2563EB";

contexto.font = "22px Arial";

contexto.fillText(

    "Gráfico será implementado com Chart.js",

    20,

    40

);

/*=========================================================
    TÍTULOS DAS TABELAS
=========================================================*/

document.getElementById("tituloPedidos").textContent =
    "Últimos Pedidos";

document.getElementById("thPedido").textContent =
    "Pedido";

document.getElementById("thCliente").textContent =
    "Cliente";

document.getElementById("thValor").textContent =
    "Valor";

document.getElementById("thStatus").textContent =
    "Status";

document.getElementById("thData").textContent =
    "Data";

/*=========================================================
    PEDIDOS
=========================================================*/

const pedidos = [

    {
        codigo:"#1001",
        cliente:"Carlos Silva",
        valor:"R$ 349,90",
        status:"Pago",
        data:"20/07/2026"
    },

    {
        codigo:"#1002",
        cliente:"Fernanda Lima",
        valor:"R$ 219,90",
        status:"Pendente",
        data:"20/07/2026"
    },

    {
        codigo:"#1003",
        cliente:"João Pedro",
        valor:"R$ 589,90",
        status:"Pago",
        data:"19/07/2026"
    },

    {
        codigo:"#1004",
        cliente:"Lucas Martins",
        valor:"R$ 149,90",
        status:"Cancelado",
        data:"19/07/2026"
    }

];

pedidos.forEach(function(item){

    document.getElementById("listaPedidos").innerHTML +=

    `

    <tr>

        <td>${item.codigo}</td>

        <td>${item.cliente}</td>

        <td>${item.valor}</td>

        <td>

            <span class="status ${item.status.toLowerCase()}">

                ${item.status}

            </span>

        </td>

        <td>${item.data}</td>

    </tr>

    `;

});

/*=========================================================
    PRODUTOS MAIS VENDIDOS
=========================================================*/

document.getElementById("tituloProdutos").textContent =
    "Produtos Mais Vendidos";

const produtos = [

    "Camisa Flamengo 2026",

    "Camisa Real Madrid Home",

    "Camisa Barcelona Home",

    "Camisa Palmeiras Home"

];

produtos.forEach(function(item){

    document.getElementById("listaProdutosMaisVendidos").innerHTML +=

    `

    <li>

        <span>${item}</span>

        <strong>★★★★★</strong>

    </li>

    `;

});

/*=========================================================
    ESTOQUE BAIXO
=========================================================*/

document.getElementById("tituloEstoque").textContent =
    "Estoque Baixo";

const estoque = [

    "Camisa Santos - 2 unidades",

    "Camisa PSG - 3 unidades",

    "Camisa Arsenal - 5 unidades"

];

estoque.forEach(function(item){

    document.getElementById("listaEstoqueBaixo").innerHTML +=

    `

    <li>

        <span>${item}</span>

    </li>

    `;

});

/*=========================================================
    NOTIFICAÇÕES
=========================================================*/

document.getElementById("tituloNotificacoes").textContent =
    "Notificações";

const notificacoes = [

    "Novo pedido recebido.",

    "Produto com estoque baixo.",

    "Pagamento aprovado.",

    "Novo cliente cadastrado."

];

notificacoes.forEach(function(item){

    document.getElementById("listaNotificacoes").innerHTML +=

    `

    <li>

        <span>${item}</span>

    </li>

    `;

});

/*=========================================================
    ATIVIDADES RECENTES
=========================================================*/

document.getElementById("tituloAtividades").textContent =
    "Atividades Recentes";

const atividades = [

    "Produto cadastrado com sucesso.",

    "Pedido #1003 enviado.",

    "Cliente alterou seus dados.",

    "Categoria adicionada."

];

atividades.forEach(function(item){

    document.getElementById("listaAtividades").innerHTML +=

    `

    <li>

        <span>${item}</span>

    </li>

    `;

});

/*=========================================================
    FOOTER
=========================================================*/

document.getElementById("footerTexto").textContent =
    "© 2026 Fanáticos Sports - Todos os direitos reservados.";

document.getElementById("footerVersao").textContent =
    "Versão 1.0.0";

/*=========================================================
    MENU MOBILE
=========================================================*/

document.getElementById("btnMenuMobile").addEventListener(

    "click",

    function(){

        document.getElementById("sidebar").classList.toggle("ativo");

    }

);

/*=========================================================
    BOTÃO SAIR
=========================================================*/

document.getElementById("menuSair").addEventListener(

    "click",

    function(event){

        event.preventDefault();

        const sair = confirm(

            "Deseja realmente sair do painel administrativo?"

        );

        if(sair){

            window.location.href = "../index.html";

        }

    }

);

/*=========================================================
    PESQUISA
=========================================================*/

document.getElementById("btnPesquisarAdmin").addEventListener(

    "click",

    function(){

        const pesquisa = document
            .getElementById("txtPesquisarAdmin")
            .value
            .trim();

        if(pesquisa === ""){

            alert("Digite algo para pesquisar.");

            return;

        }

        alert("Pesquisa realizada por: " + pesquisa);

    }

);

document.getElementById("txtPesquisarAdmin").addEventListener(

    "keypress",

    function(event){

        if(event.key === "Enter"){

            document
                .getElementById("btnPesquisarAdmin")
                .click();

        }

    }

);

/*=========================================================
    NOTIFICAÇÕES
=========================================================*/

document.getElementById("btnNotificacoes").addEventListener(

    "click",

    function(){

        alert(

            "Você possui " +

            notificacoes.length +

            " notificações."

        );

    }

);