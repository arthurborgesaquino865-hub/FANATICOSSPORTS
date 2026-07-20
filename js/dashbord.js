/*=========================================================
    FANÁTICOS SPORTS
    DASHBOARD ADMIN.JS
=========================================================*/


/*=========================================================
    CONFIGURAÇÕES DO SISTEMA
=========================================================*/

const sistema = {

    nome: "Fanáticos Sports",

    administrador: "Arthur",

    cargo: "Administrador",

    versao: "1.0.0",

    logo: "../assets/images/logo.png",

    avatar: "../assets/images/admin.png"

};


/*=========================================================
    MENU ADMINISTRATIVO
=========================================================*/

const menu = [

    "Dashboard",

    "Produtos",

    "Cadastrar Produto",

    "Categorias",

    "Pedidos",

    "Clientes",

    "Estoque",

    "Relatórios",

    "Configurações",

    "Sair"

];


/*=========================================================
    CARDS DO DASHBOARD
=========================================================*/

const cards = [

    {

        titulo:"Produtos",

        valor:"248"

    },


    {

        titulo:"Pedidos",

        valor:"95"

    },


    {

        titulo:"Clientes",

        valor:"1.548"

    },


    {

        titulo:"Faturamento",

        valor:"R$ 58.240,90"

    }

];


/*=========================================================
    INICIALIZAÇÃO
=========================================================*/

window.onload=function(){


    carregarLogo();

    carregarTopbar();

    carregarMenu();

    carregarCards();


};


/*=========================================================
    LOGO
=========================================================*/

function carregarLogo(){


    document.getElementById("logoAdminImagem").src = sistema.logo;


    document.getElementById("logoAdminImagem").alt = sistema.nome;


    document.getElementById("logoAdminTexto").textContent = sistema.nome;


}


/*=========================================================
    TOPBAR
=========================================================*/

function carregarTopbar(){


    document.getElementById("tituloPagina").textContent =

    "Dashboard";


    document.getElementById("txtPesquisarAdmin").placeholder =

    "Pesquisar...";


    document.getElementById("fotoPerfilAdmin").src =

    sistema.avatar;


    document.getElementById("fotoPerfilAdmin").alt =

    sistema.administrador;


    document.getElementById("nomeAdmin").textContent =

    sistema.administrador;


    document.getElementById("cargoAdmin").textContent =

    sistema.cargo;


}


/*=========================================================
    MENU
=========================================================*/

function carregarMenu(){


    document.getElementById("menuDashboardTexto").textContent = menu[0];


    document.getElementById("menuProdutosTexto").textContent = menu[1];


    document.getElementById("menuCadastrarProdutoTexto").textContent = menu[2];


    document.getElementById("menuCategoriasTexto").textContent = menu[3];


    document.getElementById("menuPedidosTexto").textContent = menu[4];


    document.getElementById("menuClientesTexto").textContent = menu[5];


    document.getElementById("menuEstoqueTexto").textContent = menu[6];


    document.getElementById("menuRelatoriosTexto").textContent = menu[7];


    document.getElementById("menuConfiguracoesTexto").textContent = menu[8];


    document.getElementById("menuSairTexto").textContent = menu[9];


}


/*=========================================================
    CARDS
=========================================================*/

function carregarCards(){


    document.getElementById("cardTitulo1").textContent =

    cards[0].titulo;


    document.getElementById("cardValor1").textContent =

    cards[0].valor;



    document.getElementById("cardTitulo2").textContent =

    cards[1].titulo;


    document.getElementById("cardValor2").textContent =

    cards[1].valor;



    document.getElementById("cardTitulo3").textContent =

    cards[2].titulo;


    document.getElementById("cardValor3").textContent =

    cards[2].valor;



    document.getElementById("cardTitulo4").textContent =

    cards[3].titulo;


    document.getElementById("cardValor4").textContent =

    cards[3].valor;


}


/*=========================================================
    FIM DA PARTE 1
=========================================================*/

/*=========================================================
    DADOS DO DASHBOARD
=========================================================*/


/*=========================================================
    PEDIDOS
=========================================================*/

const pedidos = [

    {

        codigo:"#1001",

        cliente:"Carlos Silva",

        valor:349.90,

        status:"Pago",

        data:"20/07/2026"

    },


    {

        codigo:"#1002",

        cliente:"Fernanda Lima",

        valor:219.90,

        status:"Pendente",

        data:"20/07/2026"

    },


    {

        codigo:"#1003",

        cliente:"João Pedro",

        valor:589.90,

        status:"Pago",

        data:"19/07/2026"

    },


    {

        codigo:"#1004",

        cliente:"Lucas Martins",

        valor:149.90,

        status:"Cancelado",

        data:"19/07/2026"

    }

];



/*=========================================================
    PRODUTOS MAIS VENDIDOS
=========================================================*/

const produtosMaisVendidos = [

    {

        nome:"Camisa Flamengo 2026",

        vendas:352

    },


    {

        nome:"Camisa Real Madrid Home",

        vendas:284

    },


    {

        nome:"Camisa Barcelona Home",

        vendas:241

    },


    {

        nome:"Camisa Palmeiras I",

        vendas:197

    }

];



/*=========================================================
    ESTOQUE BAIXO
=========================================================*/

const estoqueBaixo = [

    {

        nome:"Camisa Santos I",

        quantidade:2

    },


    {

        nome:"Camisa PSG Home",

        quantidade:3

    },


    {

        nome:"Camisa Arsenal Home",

        quantidade:5

    }

];



/*=========================================================
    ATUALIZA INICIALIZAÇÃO
=========================================================*/

window.addEventListener("load",function(){


    carregarGrafico();

    carregarPedidos();

    carregarProdutosMaisVendidos();

    carregarEstoque();


});



/*=========================================================
    GRÁFICO
=========================================================*/

function carregarGrafico(){


    document.getElementById("tituloGrafico").textContent =

    "Vendas do Ano";


    const canvas = document.getElementById("grafico");


    if(!canvas){

        return;

    }


    canvas.width = canvas.offsetWidth;

    canvas.height = 300;


    const ctx = canvas.getContext("2d");


    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );


    ctx.fillStyle="#2563EB";


    ctx.font="18px Arial";


    ctx.fillText(

        "Gráfico de vendas",

        20,

        40

    );


}



/*=========================================================
    PEDIDOS
=========================================================*/

function carregarPedidos(){


    document.getElementById("tituloPedidos").textContent =

    "Últimos Pedidos";


    document.getElementById("thPedido").textContent="Pedido";

    document.getElementById("thCliente").textContent="Cliente";

    document.getElementById("thValor").textContent="Valor";

    document.getElementById("thStatus").textContent="Status";

    document.getElementById("thData").textContent="Data";



    const tabela = document.getElementById("listaPedidos");


    tabela.innerHTML="";



    pedidos.forEach(function(item){


        tabela.innerHTML += `


        <tr>


            <td>${item.codigo}</td>


            <td>${item.cliente}</td>


            <td>${formatarMoeda(item.valor)}</td>


            <td>


                <span class="status ${item.status.toLowerCase()}">

                    ${item.status}

                </span>


            </td>


            <td>${item.data}</td>


        </tr>


        `;


    });


}



/*=========================================================
    PRODUTOS MAIS VENDIDOS
=========================================================*/

function carregarProdutosMaisVendidos(){


    document.getElementById("tituloProdutos").textContent =

    "Produtos Mais Vendidos";



    const lista = document.getElementById("listaProdutosMaisVendidos");


    lista.innerHTML="";



    produtosMaisVendidos.forEach(function(item){


        lista.innerHTML += `


        <li>


            <span>${item.nome}</span>


            <strong>${item.vendas} vendas</strong>


        </li>


        `;


    });


}



/*=========================================================
    ESTOQUE
=========================================================*/

function carregarEstoque(){


    document.getElementById("tituloEstoque").textContent =

    "Estoque Baixo";



    const lista = document.getElementById("listaEstoqueBaixo");


    lista.innerHTML="";



    estoqueBaixo.forEach(function(item){


        lista.innerHTML += `


        <li>


            <span>${item.nome}</span>


            <strong>${item.quantidade} un.</strong>


        </li>


        `;


    });


}


/*=========================================================
    FORMATAÇÃO DE MOEDA
=========================================================*/

function formatarMoeda(valor){


    return valor.toLocaleString(

        "pt-BR",

        {

            style:"currency",

            currency:"BRL"

        }

    );


}


/*=========================================================
    FIM DA PARTE 2
=========================================================*/

/*=========================================================
    DADOS DE NOTIFICAÇÕES
=========================================================*/

const notificacoes = [

    {

        titulo:"Novo pedido recebido",

        texto:"Pedido #1005 realizado por um cliente.",

        icone:"fa-shopping-cart"

    },


    {

        titulo:"Estoque baixo",

        texto:"Camisa Santos I possui apenas 2 unidades.",

        icone:"fa-box"

    },


    {

        titulo:"Novo cliente cadastrado",

        texto:"Um novo cliente entrou na plataforma.",

        icone:"fa-user"

    }

];



/*=========================================================
    DADOS DE ATIVIDADES
=========================================================*/

const atividades = [

    {

        hora:"10:30",

        texto:"Pedido #1001 foi aprovado."

    },


    {

        hora:"09:45",

        texto:"Produto Flamengo 2026 atualizado."

    },


    {

        hora:"08:20",

        texto:"Novo cliente cadastrado no sistema."

    },


    {

        hora:"07:50",

        texto:"Relatório diário gerado."

    }

];



/*=========================================================
    INICIALIZAÇÃO PARTE 3
=========================================================*/

window.addEventListener("load",function(){


    carregarNotificacoes();

    carregarAtividades();

    carregarFooter();

    configurarMenuMobile();


});



/*=========================================================
    NOTIFICAÇÕES
=========================================================*/

function carregarNotificacoes(){


    document.getElementById("tituloNotificacoes").textContent =

    "Notificações";



    const lista = document.getElementById("listaNotificacoes");


    lista.innerHTML="";



    notificacoes.forEach(function(item){


        lista.innerHTML += `


        <li>


            <div class="notificacaoIcone">


                <i class="fas ${item.icone}"></i>


            </div>



            <div class="notificacaoConteudo">


                <div class="notificacaoTitulo">

                    ${item.titulo}

                </div>



                <div class="notificacaoTexto">

                    ${item.texto}

                </div>


            </div>


        </li>


        `;


    });


}



/*=========================================================
    ATIVIDADES RECENTES
=========================================================*/

function carregarAtividades(){


    document.getElementById("tituloAtividades").textContent =

    "Atividades Recentes";



    const lista = document.getElementById("listaAtividades");


    lista.innerHTML="";



    atividades.forEach(function(item){


        lista.innerHTML += `


        <li>


            <span class="atividadeHora">

                ${item.hora}

            </span>



            <span class="atividadeTexto">

                ${item.texto}

            </span>


        </li>


        `;


    });


}



/*=========================================================
    FOOTER
=========================================================*/

function carregarFooter(){


    document.getElementById("footerTexto").textContent =

    "© 2026 Fanáticos Sports - Todos os direitos reservados.";



    document.getElementById("footerVersao").textContent =

    "Versão "+sistema.versao;


}



/*=========================================================
    MENU MOBILE
=========================================================*/

function configurarMenuMobile(){


    const botao = document.getElementById("btnMenuMobile");


    const sidebar = document.getElementById("sidebar");



    if(botao && sidebar){


        botao.onclick=function(){


            sidebar.classList.toggle("menuAberto");


        };


    }


}



/*=========================================================
    BOTÃO NOTIFICAÇÕES
=========================================================*/

const btnNotificacao = document.getElementById("btnNotificacoes");


if(btnNotificacao){


    btnNotificacao.onclick=function(){


        alert("Você possui "+notificacoes.length+" notificações novas.");


    };


}



/*=========================================================
    FIM DA PARTE 3
=========================================================*/