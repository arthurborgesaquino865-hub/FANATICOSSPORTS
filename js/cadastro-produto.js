/*=========================================================
    FANÁTICOS SPORTS
    CADASTRO DE PRODUTO
=========================================================*/

document.addEventListener("DOMContentLoaded", iniciarSistema);


/*=========================================================
    CONFIGURAÇÕES DO SISTEMA
=========================================================*/

const sistema = {

    nome: "Fanáticos Sports",

    logo: "../assets/logo.png",

    fotoUsuario: "../assets/admin.png",

    nomeUsuario: "Arthur",

    cargoUsuario: "Administrador"

};


/*=========================================================
    MENU LATERAL
=========================================================*/

const menuLateral = [

    {
        texto: "Dashboard",
        icone: "fas fa-chart-line",
        link: "dashboard.html",
        ativo: false
    },

    {
        texto: "Produtos",
        icone: "fas fa-box",
        link: "produtos-lojista.html",
        ativo: false
    },

    {
        texto: "Cadastrar Produto",
        icone: "fas fa-circle-plus",
        link: "cadastro-produto.html",
        ativo: true
    },

    {
        texto: "Categorias",
        icone: "fas fa-tags",
        link: "#",
        ativo: false
    },

    {
        texto: "Pedidos",
        icone: "fas fa-cart-shopping",
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
        texto: "Estoque",
        icone: "fas fa-warehouse",
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
        icone: "fas fa-gear",
        link: "#",
        ativo: false
    },

    {
        texto: "Sair",
        icone: "fas fa-right-from-bracket",
        link: "#",
        ativo: false
    }

];


/*=========================================================
    FUNÇÕES AUXILIARES
=========================================================*/

function get(id){

    return document.getElementById(id);

}


/*=========================================================
    INICIAR SISTEMA
=========================================================*/

function iniciarSistema(){

    carregarLogo();

    carregarTopbar();

    carregarMenu();

    carregarCabecalho();

    carregarSelects();

    carregarLabels();

    carregarPlaceholders();

    carregarPreviewImagens();

    configurarBotoes();

    configurarMenuMobile();

    carregarFooter();

}

/*=========================================================
    LOGO
=========================================================*/

function carregarLogo(){

    get("logoAdminImagem").src = sistema.logo;

    get("logoAdminTexto").textContent = sistema.nome;

}


/*=========================================================
    TOPBAR
=========================================================*/

function carregarTopbar(){

    get("tituloPagina").textContent = "Cadastro de Produto";

    get("txtPesquisar").placeholder = "Pesquisar...";

    get("fotoPerfilAdmin").src = sistema.fotoUsuario;

    get("nomeAdmin").textContent = sistema.nomeUsuario;

    get("cargoAdmin").textContent = sistema.cargoUsuario;

}


/*=========================================================
    CABEÇALHO
=========================================================*/

function carregarCabecalho(){

    get("tituloCadastro").textContent =
        "Cadastrar Novo Produto";

    get("subtituloCadastro").textContent =
        "Preencha todas as informações para adicionar um novo produto ao catálogo.";

    get("tituloInformacoesBasicas").textContent =
        "Informações Básicas";

}


/*=========================================================
    MENU
=========================================================*/

function carregarMenu(){

    get("menuDashboardTexto").textContent = "Dashboard";

    get("menuProdutosTexto").textContent = "Produtos";

    get("menuCadastrarProdutoTexto").textContent =
        "Cadastrar Produto";

    get("menuCategoriasTexto").textContent =
        "Categorias";

    get("menuPedidosTexto").textContent =
        "Pedidos";

    get("menuClientesTexto").textContent =
        "Clientes";

    get("menuEstoqueTexto").textContent =
        "Estoque";

    get("menuRelatoriosTexto").textContent =
        "Relatórios";

    get("menuConfiguracoesTexto").textContent =
        "Configurações";

    get("menuSairTexto").textContent =
        "Sair";

}
















// ======================================
// ELEMENTOS
// ======================================


const produtoNome = document.getElementById("produtoNome");
const produtoDescricao = document.getElementById("produtoDescricao");
const produtoCodigo = document.getElementById("produtoCodigo");

const produtoPrecoAntigo =
    document.getElementById("produtoPrecoAntigo");


const produtoPrecoPromo =
    document.getElementById("produtoPrecoPromo");


const produtoEstoque =
    document.getElementById("produtoEstoque");


const produtoMarca =
    document.getElementById("produtoMarca");


const produtoCategoria =
    document.getElementById("produtoCategoria");


const produtoStatus =
    document.getElementById("produtoStatus");



// ======================================
// LISTAS VINDAS DO BANCO
// FUTURAMENTE API MYSQL
// ======================================


const marcas = [

    {
        id: 1,
        nome: "Nike"
    },

    {
        id: 2,
        nome: "Adidas"
    }

];



const categorias = [

    {
        id: 1,
        nome: "Legging"
    },

    {
        id: 2,
        nome: "Top Fitness"
    }

];





// ======================================
// ALIMENTA SELECTS
// ======================================


marcas.forEach(marca => {


    let option = document.createElement("option");


    option.value = marca.id;

    option.textContent = marca.nome;


    produtoMarca.appendChild(option);



});






categorias.forEach(cat => {


    let option = document.createElement("option");


    option.value = cat.id;


    option.textContent = cat.nome;



    produtoCategoria.appendChild(option);


});



//======================================================
// CADASTRO CATEGORIA
//======================================================

document.getElementById("btnCategoria").
    addEventListener("click", function () {
        //capturar os dados do input
        const categoriaNome
            = document.getElementById("categoriaNome").value;

        // criar um if para validar se o campo está vazio    
        if (categoriaNome === "") {
            alert("Por favor, preencha o nome da categoria.");
            return;
        }

        // criar um objeto com os dados da categoria
        const categoria = {
            nome: categoriaNome

        };

        // enviar os dados para o servidor
        fetch("http://localhost:3000/categoria", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(categoria)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Categoria cadastrada:", data);
                alert("Categoria cadastrada com sucesso!");
            })
            .catch(error => {
                console.error("Erro ao cadastrar categoria:", error);
                alert("Erro ao cadastrar categoria.");
            });
    });


//======================================================
// CADASTRO MARCAS
//======================================================

document.getElementById("btnMarca").
    addEventListener("click", function () {
        //capturar os dados do input
        const marcaNome
            = document.getElementById("marcaNome").value;

        // criar um if para validar se o campo está vazio    
        if (marcaNome === "") {
            alert("Por favor, preencha o nome da marca.");
            return;
        }

        // criar um objeto com os dados da marca
        const marca = {
            nome: marcaNome

        };

        // enviar os dados para o servidor
        fetch("http://localhost:3000/marca", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(marca)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Marca cadastrada:", data);
                alert("Marca cadastrada com sucesso!");
            })
            .catch(error => {
                console.error("Erro ao cadastrar marca:", error);
                alert("Erro ao cadastrar marca.");
            });
    });

//======================================================
// CADASTRO COR
//======================================================

document.getElementById("btnCor").
    addEventListener("click", function () {
        //capturar os dados do input
        const corNome
            = document.getElementById("corNome").value;

        // criar um if para validar se o campo está vazio    
        if (corNome === "") {
            alert("Por favor, preencha o nome da cor.");
            return;
        }

        // criar um objeto com os dados da cor
        const cor = {
            nome: corNome

        };

        // enviar os dados para o servidor
        fetch("http://localhost:3000/cores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cor)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Cor cadastrada:", data);
                alert("Cor cadastrada com sucesso!");
            })
            .catch(error => {
                console.error("Erro ao cadastrar cor:", error);
                alert("Erro ao cadastrar cor.");
            });
    });

//======================================================
// CADASTRO IMAGEM
//======================================================

document.getElementById("btnImagem").
    addEventListener("click", function () {
        //capturar os dados do input
        const imagemNome
            = document.getElementById("imagemNome").value;

        // criar um if para validar se o campo está vazio    
        if (imagemNome === "") {
            alert("Por favor, preencha o nome da imagem.");
            return;
        }

        // criar um objeto com os dados da imagem
        const imagem = {
            nome: imagemNome

        };

        // enviar os dados para o servidor
        fetch("http://localhost:3000/imagens", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(imagem)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Imagem cadastrada:", data);
                alert("Imagem cadastrada com sucesso!");
            })
            .catch(error => {
                console.error("Erro ao cadastrar imagem:", error);
                alert("Erro ao cadastrar imagem.");
            });
    });

    //======================================================
// CADASTRO TAMANHO
//======================================================

document.getElementById("btnTamanho").
    addEventListener("click", function () {
        //capturar os dados do input
        const tamanhoNome
            = document.getElementById("tamanhoNome").value;

        // criar um if para validar se o campo está vazio    
        if (tamanhoNome === "") {
            alert("Por favor, preencha o nome do tamanho.");
            return;
        }

        // criar um objeto com os dados do tamanho
        const tamanho = {
            nome: tamanhoNome

        };

        // enviar os dados para o servidor
        fetch("http://localhost:3000/tamanho", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tamanho)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Tamanho cadastrado:", data);
                alert("Tamanho cadastrado com sucesso!");
            })
            .catch(error => {
                console.error("Erro ao cadastrar tamanho:", error);
                alert("Erro ao cadastrar tamanho.");
            });
    });