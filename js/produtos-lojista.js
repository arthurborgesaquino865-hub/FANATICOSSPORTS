/*=========================================================
    FANÁTICOS SPORTS
    PRODUTOS LOJISTA
=========================================================*/


document.addEventListener("DOMContentLoaded", iniciarSistema);


/*=========================================================
    CONFIGURAÇÕES
=========================================================*/

const sistema = {

    nome: "Fanáticos Sports",

    logo: "../assets/images/logo.png",

    fotoUsuario: "../assets/images/admin.png",

    nomeUsuario: "Administrador",

    cargoUsuario: "Lojista"

};


/*=========================================================
    MENU LATERAL
=========================================================*/

const menuLateral = [

    {
        texto: "Dashboard",
        icone: "fas fa-chart-line",
        link: "../pages/dashboard.html",
        ativo: false
    },

    {
        texto: "Produtos",
        icone: "fas fa-box-open",
        link: "../pages/produtos-lojista.html",
        ativo: true
    },

    {
        texto: "Cadastrar Produto",
        icone: "fas fa-plus-circle",
        link: "../pages/cadastrar-produto.html",
        ativo: false
    },

    {
        texto: "Pedidos",
        icone: "fas fa-shopping-cart",
        link: "#",
        ativo: false
    },

    {
        texto: "Clientes",
        icone: "fas fa-users",
        link: "#",
        ativo: false
    },

    {
        texto: "Cupons",
        icone: "fas fa-ticket-alt",
        link: "#",
        ativo: false
    },

    {
        texto: "Relatórios",
        icone: "fas fa-chart-pie",
        link: "#",
        ativo: false
    },

    {
        texto: "Configurações",
        icone: "fas fa-cog",
        link: "#",
        ativo: false
    }

];


/*=========================================================
    CARDS
=========================================================*/

const cardsResumo = [

    {

        titulo: "Total de Produtos",

        valor: "248",

        detalhe: "+12 este mês"

    },

    {

        titulo: "Produtos Ativos",

        valor: "221",

        detalhe: "89% do catálogo"

    },

    {

        titulo: "Estoque Baixo",

        valor: "17",

        detalhe: "Reposição necessária"

    },

    {

        titulo: "Produtos Inativos",

        valor: "27",

        detalhe: "Aguardando revisão"

    }

];

/*=========================================================
    PRODUTOS
=========================================================*/

const produtos = [

    {

        id: 1,

        imagem: "../assets/images/produtos/camisa-flamengo.png",

        nome: "Camisa Flamengo I 2026",

        categoria: "Clubes",

        marca: "Adidas",

        preco: 229.90,

        estoque: 18,

        status: "Ativo"

    },

    {

        id: 2,

        imagem: "../assets/images/produtos/camisa-brasil.png",

        nome: "Camisa Brasil 2026",

        categoria: "Seleções",

        marca: "Nike",

        preco: 249.90,

        estoque: 7,

        status: "Ativo"

    },

    {

        id: 3,

        imagem: "../assets/images/produtos/chuteira-nike.png",

        nome: "Chuteira Nike Mercurial",

        categoria: "Chuteiras",

        marca: "Nike",

        preco: 799.90,

        estoque: 4,

        status: "Baixo"

    },

    {

        id: 4,

        imagem: "../assets/images/produtos/camisa-real.png",

        nome: "Camisa Real Madrid Home",

        categoria: "Clubes",

        marca: "Adidas",

        preco: 269.90,

        estoque: 0,

        status: "Inativo"

    }

];


/*=========================================================
    FILTROS
=========================================================*/

const categorias = [

    "Todas",

    "Clubes",

    "Seleções",

    "Chuteiras",

    "Masculino",

    "Feminino",

    "Infantil"

];


const marcas = [

    "Todas",

    "Nike",

    "Adidas",

    "Puma",

    "Umbro",

    "New Balance"

];


const statusProdutos = [

    "Todos",

    "Ativo",

    "Baixo",

    "Inativo"

];


const ordenacoes = [

    "Mais recentes",

    "Menor preço",

    "Maior preço",

    "Nome A-Z",

    "Nome Z-A"

];


/*=========================================================
    INICIAR SISTEMA
=========================================================*/

function iniciarSistema(){

    carregarLogo();

    carregarTopbar();

    carregarMenu();

    carregarCabecalho();

    carregarCards();

    carregarFiltros();

    carregarTabela();

}


/*=========================================================
    UTILIDADES
=========================================================*/

function get(id){

    return document.getElementById(id);

}


function formatarMoeda(valor){

    return valor.toLocaleString("pt-BR",{

        style:"currency",

        currency:"BRL"

    });

}

/*=========================================================
    LOGO
=========================================================*/

function carregarLogo(){

    get("logoImagem").src = sistema.logo;

    get("logoTexto").textContent = sistema.nome;

}

/*=========================================================
    TOPBAR
=========================================================*/

function carregarTopbar(){

    get("tituloPrincipal").textContent = "Produtos";

    get("campoPesquisaTopo").placeholder = "Pesquisar no sistema...";

    get("fotoUsuario").src = sistema.fotoUsuario;

    get("nomeUsuario").textContent = sistema.nomeUsuario;

    get("cargoUsuario").textContent = sistema.cargoUsuario;

}

/*=========================================================
    MENU LATERAL
=========================================================*/

function carregarMenu(){

    const menu = get("menuLateral");

    menu.innerHTML = "";

    menuLateral.forEach(item =>{

        menu.innerHTML += `

            <a href="${item.link}"

               class="${item.ativo ? "ativo" : ""}">

                <i class="${item.icone}"></i>

                <span>${item.texto}</span>

            </a>

        `;

    });

}

/*=========================================================
    CABEÇALHO
=========================================================*/

function carregarCabecalho(){

    get("tituloProdutos").textContent =

        "Gerenciamento de Produtos";

    get("descricaoProdutos").textContent =

        "Visualize, pesquise, edite e gerencie todos os produtos cadastrados.";

    get("textoNovoProduto").textContent =

        "Novo Produto";

}

/*=========================================================
    CARDS
=========================================================*/

function carregarCards(){

    const container = get("cardsResumo");

    container.innerHTML = "";

    cardsResumo.forEach(card =>{

        container.innerHTML += `

            <div class="cardResumo">

                <h3>${card.titulo}</h3>

                <h2>${card.valor}</h2>

                <span>${card.detalhe}</span>

            </div>

        `;

    });

}

/*=========================================================
    FILTROS
=========================================================*/

function carregarFiltros(){

    preencherSelect(
        "filtroCategoria",
        categorias
    );

    preencherSelect(
        "filtroMarca",
        marcas
    );

    preencherSelect(
        "filtroStatus",
        statusProdutos
    );

    preencherSelect(
        "filtroOrdenacao",
        ordenacoes
    );

    get("lblPesquisarProduto").textContent =
    "Pesquisar Produto";

    get("lblCategoria").textContent =
    "Categoria";

    get("lblMarca").textContent =
    "Marca";

    get("lblStatus").textContent =
    "Status";

    get("lblOrdenacao").textContent =
    "Ordenação";

    get("pesquisaProduto").placeholder =
    "Digite o nome do produto...";

}


/*=========================================================
    PREENCHER SELECT
=========================================================*/

function preencherSelect(id, lista){

    const select = get(id);

    select.innerHTML = "";

    lista.forEach(item=>{

        select.innerHTML +=

        `<option>${item}</option>`;

    });

}


/*=========================================================
    TABELA
=========================================================*/

function carregarTabela(){

    const tabela = get("listaProdutos");

    tabela.innerHTML = "";

    produtos.forEach(produto=>{

        tabela.innerHTML += `

        <tr>

            <td>

                <img
                    class="imagemProduto"
                    src="${produto.imagem}"
                    alt="${produto.nome}">

            </td>

            <td>

                ${produto.nome}

            </td>

            <td>

                ${produto.categoria}

            </td>

            <td>

                ${produto.marca}

            </td>

            <td>

                ${formatarMoeda(produto.preco)}

            </td>

            <td>

                ${produto.estoque}

            </td>

            <td>

                <span class="status ${produto.status.toLowerCase()}">

                    ${produto.status}

                </span>

            </td>

            <td>

                <div class="acoesProduto">

                    <button
                        class="btnAcao btnVisualizar"
                        title="Visualizar">

                        <i class="fas fa-eye"></i>

                    </button>

                    <button
                        class="btnAcao btnEditar"
                        title="Editar">

                        <i class="fas fa-pen"></i>

                    </button>

                    <button
                        class="btnAcao btnExcluir"
                        title="Excluir">

                        <i class="fas fa-trash"></i>

                    </button>

                </div>

            </td>

        </tr>

        `;

    });

}

