/*=========================================================
    FANÁTICOS SPORTS
    PRODUTOS LOJISTA
=========================================================*/


document.addEventListener(
    "DOMContentLoaded",
    iniciarSistema
);



/*=========================================================
    CONFIGURAÇÕES DO SISTEMA
=========================================================*/


const sistema = {


    nome:

    "Fanáticos Sports",


    logo:

    "../assets/logo.png",


    fotoUsuario:

    "../assets/admin.png",


    nomeUsuario:

    "Administrador",


    cargoUsuario:

    "Lojista"


};



/*=========================================================
    API PRODUTOS
=========================================================*/


const API_PRODUTOS =

"http://localhost:3000/produtos";



/*=========================================================
    VARIÁVEIS
=========================================================*/


let produtos = [];



/*=========================================================
    MENU LATERAL
=========================================================*/


const menuLateral = [


    {

        texto:"Dashboard",

        icone:"fas fa-chart-line",

        link:"../pages/dashboard.html",

        ativo:false

    },


    {

        texto:"Produtos",

        icone:"fas fa-box-open",

        link:"../pages/produtos-lojista.html",

        ativo:true

    },


    {

        texto:"Cadastrar Produto",

        icone:"fas fa-plus-circle",

        link:"../pages/cadastrar-produto.html",

        ativo:false

    },


    {

        texto:"Pedidos",

        icone:"fas fa-shopping-cart",

        link:"../pages/pedidos-lojista.html",

        ativo:false

    },


    {

        texto:"Clientes",

        icone:"fas fa-users",

        link:"../pages/clientes-lojista.html",

        ativo:false

    },


    {

        texto:"Cupons",

        icone:"fas fa-ticket-alt",

        link:"#",

        ativo:false

    },


    {

        texto:"Relatórios",

        icone:"fas fa-chart-pie",

        link:"#",

        ativo:false

    },


    {

        texto:"Configurações",

        icone:"fas fa-cog",

        link:"#",

        ativo:false

    }


];



/*=========================================================
    CARDS RESUMO
=========================================================*/


const cardsResumo = [


    {

        titulo:"Total de Produtos",

        valor:0,

        detalhe:"Produtos cadastrados"

    },


    {

        titulo:"Produtos Ativos",

        valor:0,

        detalhe:"Em estoque"

    },


    {

        titulo:"Estoque Baixo",

        valor:0,

        detalhe:"Menos de 10 unidades"

    },


    {

        titulo:"Sem Estoque",

        valor:0,

        detalhe:"Reposição necessária"

    }


];


/*=========================================================
    BUSCAR PRODUTOS DO BANCO
=========================================================*/

async function carregarProdutosBanco(){

    try{

        const resposta = await fetch(
            "http://localhost:3000/produtos"
        );


        if(!resposta.ok){

            throw new Error(
                "Erro ao buscar produtos"
            );

        }


        produtos = await resposta.json();


        console.log(
            "Produtos carregados:",
            produtos
        );


    }catch(erro){

        console.error(
            "Erro ao carregar produtos:",
            erro
        );


        produtos = [];

    }

}

/*=========================================================
    INICIAR SISTEMA
=========================================================*/


async function iniciarSistema(){

    carregarLogo();

    carregarTopbar();

    carregarMenu();

    carregarCabecalho();

    carregarFiltros();

    await carregarProdutosBanco();

    atualizarCards();

    carregarTabela();

}

/*=========================================================
    FUNÇÕES AUXILIARES
=========================================================*/


function get(id){

    return document.getElementById(id);

}



function formatarMoeda(valor){


    return Number(valor).toLocaleString(

        "pt-BR",

        {

            style:"currency",

            currency:"BRL"

        }

    );


}



/*=========================================================
    CARREGAR LOGO
=========================================================*/


function carregarLogo(){


    if(get("logoImagem")){

        get("logoImagem").src = sistema.logo;

    }


    if(get("logoTexto")){

        get("logoTexto").textContent = sistema.nome;

    }


}



/*=========================================================
    CARREGAR TOPBAR
=========================================================*/


function carregarTopbar(){


    if(get("tituloPrincipal")){

        get("tituloPrincipal").textContent =

        "Produtos";

    }



    if(get("campoPesquisaTopo")){

        get("campoPesquisaTopo").placeholder =

        "Pesquisar no sistema...";

    }



    if(get("fotoUsuario")){

        get("fotoUsuario").src =

        sistema.fotoUsuario;

    }



    if(get("nomeUsuario")){

        get("nomeUsuario").textContent =

        sistema.nomeUsuario;

    }



    if(get("cargoUsuario")){

        get("cargoUsuario").textContent =

        sistema.cargoUsuario;

    }


}



/*=========================================================
    CARREGAR MENU LATERAL
=========================================================*/


function carregarMenu(){


    const menu = get("menuLateral");


    if(!menu){

        return;

    }



    menu.innerHTML = "";



    menuLateral.forEach(item => {



        menu.innerHTML += `


        <a href="${item.link}"

        class="${item.ativo ? "ativo" : ""}">


            <i class="${item.icone}"></i>


            <span>

                ${item.texto}

            </span>


        </a>


        `;


    });


}



/*=========================================================
    BUSCAR PRODUTOS NO BANCO
=========================================================*/


async function buscarProdutos(){


    try{


        const resposta = await fetch(API_PRODUTOS);



        const dados = await resposta.json();



        if(Array.isArray(dados)){


            produtos = dados;


        }

        else{


            produtos = [];

        }



        console.log(

            "Produtos carregados:",

            produtos

        );


    }


    catch(erro){


        console.error(

            "Erro ao buscar produtos:",

            erro

        );


        produtos = [];


    }


}

/*=========================================================
    CABEÇALHO DA PÁGINA
=========================================================*/


function carregarCabecalho(){


    if(get("tituloProdutos")){


        get("tituloProdutos").textContent =

        "Gerenciamento de Produtos";


    }



    if(get("descricaoProdutos")){


        get("descricaoProdutos").textContent =

        "Visualize, pesquise, edite e gerencie seus produtos cadastrados.";


    }



    if(get("textoNovoProduto")){


        get("textoNovoProduto").textContent =

        "Novo Produto";


    }


}





/*=========================================================
    FILTROS
=========================================================*/


const listaCategorias = [

    "Todas",

    "Clubes",

    "Seleções",

    "Chuteiras",

    "Masculino",

    "Feminino",

    "Infantil"

];



const listaMarcas = [

    "Todas",

    "Nike",

    "Adidas",

    "Puma",

    "Umbro",

    "New Balance"

];



const listaStatus = [

    "Todos",

    "Ativo",

    "Baixo",

    "Inativo"

];



const listaOrdenacao = [

    "Mais recentes",

    "Menor preço",

    "Maior preço",

    "Nome A-Z",

    "Nome Z-A"

];





function carregarFiltros(){


    preencherSelect(

        "filtroCategoria",

        listaCategorias

    );


    preencherSelect(

        "filtroMarca",

        listaMarcas

    );


    preencherSelect(

        "filtroStatus",

        listaStatus

    );


    preencherSelect(

        "filtroOrdenacao",

        listaOrdenacao

    );



    if(get("lblPesquisarProduto")){


        get("lblPesquisarProduto").textContent =

        "Pesquisar Produto";


    }


    if(get("lblCategoria")){


        get("lblCategoria").textContent =

        "Categoria";


    }


    if(get("lblMarca")){


        get("lblMarca").textContent =

        "Marca";


    }


    if(get("lblStatus")){


        get("lblStatus").textContent =

        "Status";


    }


    if(get("lblOrdenacao")){


        get("lblOrdenacao").textContent =

        "Ordenação";


    }



    if(get("pesquisaProduto")){


        get("pesquisaProduto").placeholder =

        "Digite o nome do produto...";


    }


}





function preencherSelect(id, lista){


    const select = get(id);



    if(!select){

        return;

    }



    select.innerHTML = "";



    lista.forEach(item=>{


        select.innerHTML += `


        <option>

            ${item}

        </option>


        `;


    });


}







/*=========================================================
    TABELA DE PRODUTOS
=========================================================*/


function carregarTabela(){



    const tabela = get("listaProdutos");



    if(!tabela){

        return;

    }



    tabela.innerHTML = "";



    produtos.forEach(produto => {



        let status = "Ativo";



        if(Number(produto.estoque) === 0){


            status = "Inativo";


        }


        else if(Number(produto.estoque) <= 10){


            status = "Baixo";


        }




        tabela.innerHTML += `


        <tr>


            <td>


                <img

                class="imagemProduto"

                src="../assets/images/produto-sem-imagem.png"

                alt="${produto.nome}">


            </td>



            <td>

                ${produto.nome}

            </td>



            <td>

                ${produto.nomeCategoria || "-"}

            </td>



            <td>

                ${produto.nomeMarca || "-"}

            </td>



            <td>

                ${formatarMoeda(produto.preco)}

            </td>



            <td>

                ${produto.estoque}

            </td>



            <td>


                <span class="status ${status.toLowerCase()}">


                    ${status}


                </span>


            </td>



            <td>


                <div class="acoesProduto">


                    <button

                    class="btnAcao btnVisualizar"

                    data-id="${produto.idProduto}">


                        <i class="fas fa-eye"></i>


                    </button>



                    <button

                    class="btnAcao btnEditar"

                    data-id="${produto.idProduto}">


                        <i class="fas fa-pen"></i>


                    </button>



                    <button

                    class="btnAcao btnExcluir"

                    data-id="${produto.idProduto}">


                        <i class="fas fa-trash"></i>


                    </button>



                </div>


            </td>


        </tr>


        `;



    });



}

/*=========================================================
    PESQUISA DE PRODUTOS
=========================================================*/


function pesquisarProdutos(){


    const campo = get("pesquisaProduto");


    if(!campo){

        return;

    }



    const texto = campo.value
        .toLowerCase()
        .trim();



    const filtrados = produtos.filter(produto =>{


        return (

            produto.nome
            .toLowerCase()
            .includes(texto)


        );


    });



    mostrarProdutos(filtrados);


}



/*=========================================================
    MOSTRAR PRODUTOS FILTRADOS
=========================================================*/


function mostrarProdutos(lista){


    const tabela = get("listaProdutos");



    tabela.innerHTML = "";



    lista.forEach(produto =>{


        let status = "Ativo";



        if(Number(produto.estoque) === 0){

            status = "Inativo";

        }


        else if(Number(produto.estoque) <= 10){

            status = "Baixo";

        }



        tabela.innerHTML += `


        <tr>


            <td>

                <img

                class="imagemProduto"

                src="../assets/images/produto-sem-imagem.png">


            </td>


            <td>

                ${produto.nome}

            </td>


            <td>

                ${produto.nomeCategoria || "-"}

            </td>


            <td>

                ${produto.nomeMarca || "-"}

            </td>


            <td>

                ${formatarMoeda(produto.preco)}

            </td>


            <td>

                ${produto.estoque}

            </td>


            <td>

                <span class="status ${status.toLowerCase()}">

                    ${status}

                </span>

            </td>


            <td>


                <button

                class="btnAcao btnVisualizar"

                onclick="visualizarProduto(${produto.idProduto})">


                <i class="fas fa-eye"></i>


                </button>



                <button

                class="btnAcao btnEditar"

                onclick="editarProduto(${produto.idProduto})">


                <i class="fas fa-pen"></i>


                </button>



                <button

                class="btnAcao btnExcluir"

                onclick="excluirProduto(${produto.idProduto})">


                <i class="fas fa-trash"></i>


                </button>


            </td>


        </tr>


        `;



    });


}




/*=========================================================
    EVENTO PESQUISA
=========================================================*/


if(get("pesquisaProduto")){


    get("pesquisaProduto")

    .addEventListener(

        "keyup",

        pesquisarProdutos

    );


}





/*=========================================================
    VISUALIZAR PRODUTO
=========================================================*/


function visualizarProduto(id){


    const produto = produtos.find(

        item => item.idProduto == id

    );



    if(!produto){

        return;

    }



    alert(

        "Produto: "

        + produto.nome

        + "\nPreço: "

        + formatarMoeda(produto.preco)

        + "\nEstoque: "

        + produto.estoque

    );


}





/*=========================================================
    EDITAR PRODUTO
=========================================================*/


function editarProduto(id){


    window.location.href =

    "../pages/cadastrar-produto.html?id=" + id;


}





/*=========================================================
    EXCLUIR PRODUTO
=========================================================*/


async function excluirProduto(id){



    const confirmar = confirm(

        "Deseja realmente excluir este produto?"

    );



    if(!confirmar){

        return;

    }



    try{


        const resposta = await fetch(

            API + "/" + id,

            {

                method:"DELETE"

            }

        );



        const dados = await resposta.json();



        alert(dados.mensagem);



        await carregarProdutosBanco();



        carregarCards();


        carregarTabela();



    }


    catch(erro){


        console.error(erro);


        alert(

            "Erro ao excluir produto."

        );


    }



}






/*=========================================================
    FOOTER
=========================================================*/


function carregarFooter(){



    if(get("textoRodape")){


        get("textoRodape").textContent =


        "© 2026 Fanáticos Sports - Todos os direitos reservados.";


    }


}





/*=========================================================
    INICIALIZAÇÃO FINAL
=========================================================*/


window.addEventListener(

    "load",

    function(){


        carregarFooter();


        console.log(

            "Produtos lojista carregado com sucesso!"

        );


    }

);

function atualizarCards(){

    const container = get("cardsResumo");


    if(!container){

        return;

    }


    container.innerHTML = "";


    const total = produtos.length;


    const ativos = produtos.filter(produto =>

        Number(produto.estoque) > 0

    ).length;


    const baixo = produtos.filter(produto =>

        Number(produto.estoque) > 0 &&
        Number(produto.estoque) <= 10

    ).length;


    const semEstoque = produtos.filter(produto =>

        Number(produto.estoque) === 0

    ).length;



    const cards = [

        {
            titulo:"Total de Produtos",
            valor:total,
            detalhe:"Produtos cadastrados"
        },

        {
            titulo:"Produtos Ativos",
            valor:ativos,
            detalhe:"Em estoque"
        },

        {
            titulo:"Estoque Baixo",
            valor:baixo,
            detalhe:"Menos de 10 unidades"
        },

        {
            titulo:"Sem Estoque",
            valor:semEstoque,
            detalhe:"Reposição necessária"
        }

    ];



    cards.forEach(card=>{


        container.innerHTML += `


        <div class="cardResumo">


            <h3>${card.titulo}</h3>


            <h2>${card.valor}</h2>


            <span>${card.detalhe}</span>


        </div>


        `;


    });


}


document.getElementById("btnNovoProduto").addEventListener("click", function(){

    window.location.href = "../pages/cadastro-produto.html";   


});