/*=========================================================
    FANÁTICOS SPORTS
    SISTEMA ADMINISTRATIVO
    TELA DE PEDIDOS
=========================================================*/


document.addEventListener(
    "DOMContentLoaded",
    iniciarSistema
);



/*=========================================================
    CONFIGURAÇÕES DO SISTEMA
=========================================================*/

const sistema = {

    nome: "Fanáticos Sports",

    logo: "../assets/logo.png",

    fotoUsuario: "../assets/admin.png",

    nomeUsuario: "Administrador",

    cargoUsuario: "Lojista"

};



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

        ativo:false

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

        ativo:true

    },


    {

        texto:"Clientes",

        icone:"fas fa-users",

        link:"../pages/clientes.html",

        ativo:false

    },


    {

        texto:"Cupons",

        icone:"fas fa-ticket-alt",

        link:"../pages/cupons.html",

        ativo:false

    },


    {

        texto:"Relatórios",

        icone:"fas fa-chart-pie",

        link:"../pages/relatorios.html",

        ativo:false

    },


    {

        texto:"Configurações",

        icone:"fas fa-cog",

        link:"../pages/configuracoes.html",

        ativo:false

    }

];



/*=========================================================
    CARDS DE RESUMO
=========================================================*/

const cardsResumo = [

    {

        titulo:"Total de Pedidos",

        valor:"1.248",

        detalhe:"+24 pedidos hoje"

    },


    {

        titulo:"Em andamento",

        valor:"86",

        detalhe:"Pedidos sendo preparados"

    },


    {

        titulo:"Entregues",

        valor:"1.102",

        detalhe:"88% concluídos"

    },


    {

        titulo:"Cancelados",

        valor:"60",

        detalhe:"4,8% dos pedidos"

    },


    {

        titulo:"Faturamento",

        valor:"R$ 58.420,90",

        detalhe:"Últimos 30 dias"

    }

];

/*=========================================================
    DADOS DOS PEDIDOS
=========================================================*/


const pedidos = [

    {

        codigo:"#10245",

        cliente:"Arthur Aquino",

        cpf:"123.456.789-00",

        telefone:"(11) 99999-9999",

        data:"04/08/2026",

        pagamento:"PIX",

        status:"Pago",

        endereco:"Rua das Palmeiras, 250",

        cidade:"São Paulo - SP",

        cep:"01000-000",

        produtos:[

            {

                nome:"Camisa Flamengo I 2026",

                quantidade:1,

                valor:229.90

            },

            {

                nome:"Meião Oficial Flamengo",

                quantidade:2,

                valor:39.90

            }

        ],

        frete:15.00,

        desconto:0,

        total:324.70

    },


    {

        codigo:"#10246",

        cliente:"João Silva",

        cpf:"987.654.321-00",

        telefone:"(21) 98888-7777",

        data:"04/08/2026",

        pagamento:"Cartão de Crédito",

        status:"Preparando",

        endereco:"Av. Brasil, 500",

        cidade:"Rio de Janeiro - RJ",

        cep:"20000-000",

        produtos:[

            {

                nome:"Chuteira Nike Mercurial",

                quantidade:1,

                valor:799.90

            }

        ],

        frete:20.00,

        desconto:50,

        total:769.90

    },


    {

        codigo:"#10247",

        cliente:"Carlos Oliveira",

        cpf:"456.789.123-00",

        telefone:"(31) 97777-6666",

        data:"03/08/2026",

        pagamento:"Boleto",

        status:"Enviado",

        endereco:"Rua Central, 80",

        cidade:"Belo Horizonte - MG",

        cep:"30000-000",

        produtos:[

            {

                nome:"Camisa Brasil 2026",

                quantidade:1,

                valor:249.90

            },

            {

                nome:"Boné Nike Futebol",

                quantidade:1,

                valor:99.90

            }

        ],

        frete:18.00,

        desconto:20,

        total:347.80

    },


    {

        codigo:"#10248",

        cliente:"Fernanda Lima",

        cpf:"789.123.456-00",

        telefone:"(41) 96666-5555",

        data:"02/08/2026",

        pagamento:"PIX",

        status:"Entregue",

        endereco:"Rua Paraná, 120",

        cidade:"Curitiba - PR",

        cep:"80000-000",

        produtos:[

            {

                nome:"Camisa Real Madrid Home",

                quantidade:1,

                valor:269.90

            }

        ],

        frete:15.00,

        desconto:0,

        total:284.90

    },


    {

        codigo:"#10249",

        cliente:"Lucas Martins",

        cpf:"321.654.987-00",

        telefone:"(51) 95555-4444",

        data:"01/08/2026",

        pagamento:"Cartão",

        status:"Cancelado",

        endereco:"Rua Porto Alegre, 90",

        cidade:"Porto Alegre - RS",

        cep:"90000-000",

        produtos:[

            {

                nome:"Camisa Palmeiras I",

                quantidade:1,

                valor:229.90

            }

        ],

        frete:15.00,

        desconto:0,

        total:244.90

    }

];



/*=========================================================
    STATUS DISPONÍVEIS
=========================================================*/

const statusPedidos = [

    "Todos",

    "Aguardando",

    "Pago",

    "Preparando",

    "Enviado",

    "Entregue",

    "Cancelado"

];



/*=========================================================
    FORMAS DE PAGAMENTO
=========================================================*/

const formasPagamento = [

    "Todos",

    "PIX",

    "Cartão de Crédito",

    "Cartão",

    "Boleto"

];

/*=========================================================
    INICIALIZAÇÃO DO SISTEMA
=========================================================*/


function iniciarSistema(){

    carregarLogo();

    carregarTopbar();

    carregarMenu();

    carregarCabecalho();

    carregarCards();

    carregarFiltros();

    carregarTabelaPedidos();

}



/*=========================================================
    FUNÇÕES AUXILIARES
=========================================================*/


function get(id){

    return document.getElementById(id);

}



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
    CARREGAR LOGO
=========================================================*/


function carregarLogo(){

    get("logoImagem").src = sistema.logo;

    get("logoTexto").textContent = sistema.nome;

}



/*=========================================================
    CARREGAR TOPBAR
=========================================================*/


function carregarTopbar(){

    get("tituloPrincipal").textContent =

        "Pedidos";


    get("campoPesquisaTopo").placeholder =

        "Pesquisar pedidos...";


    get("fotoUsuario").src =

        sistema.fotoUsuario;


    get("nomeUsuario").textContent =

        sistema.nomeUsuario;


    get("cargoUsuario").textContent =

        sistema.cargoUsuario;

}



/*=========================================================
    CARREGAR MENU
=========================================================*/


function carregarMenu(){

    const menu = get("menuLateral");


    menu.innerHTML = "";


    menuLateral.forEach(item=>{


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
    CABEÇALHO DA PÁGINA
=========================================================*/


function carregarCabecalho(){


    get("tituloPedidos").textContent =

        "Gerenciamento de Pedidos";


    get("descricaoPedidos").textContent =

        "Acompanhe, atualize e gerencie todos os pedidos realizados na loja.";


    get("textoAtualizarPedidos").textContent =

        "Atualizar";

}



/*=========================================================
    CARDS DE RESUMO
=========================================================*/


function carregarCards(){

    const area = get("cardsResumo");


    area.innerHTML = "";


    cardsResumo.forEach(card=>{


        area.innerHTML += `


        <div class="cardResumo">


            <h3>

                ${card.titulo}

            </h3>


            <h2>

                ${card.valor}

            </h2>


            <span>

                ${card.detalhe}

            </span>


        </div>


        `;


    });


}



/*=========================================================
    FILTROS
=========================================================*/


function carregarFiltros(){


    get("lblPesquisarPedido").textContent =

        "Pesquisar pedido";


    get("pesquisaPedido").placeholder =

        "Digite o código ou cliente...";



    get("lblCliente").textContent =

        "Cliente";



    get("lblStatus").textContent =

        "Status";



    get("lblPagamento").textContent =

        "Pagamento";



    get("lblData").textContent =

        "Data";



    preencherSelect(

        "filtroStatus",

        statusPedidos

    );


    preencherSelect(

        "filtroPagamento",

        formasPagamento

    );


}



/*=========================================================
    PREENCHER SELECT
=========================================================*/


function preencherSelect(id, lista){


    const select = get(id);


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
    CARREGAR TABELA DE PEDIDOS
=========================================================*/


function carregarTabelaPedidos(lista = pedidos){


    const tabela = get("listaPedidos");


    tabela.innerHTML = "";



    lista.forEach(pedido=>{


        tabela.innerHTML += `


        <tr>


            <td class="codigoPedido">

                ${pedido.codigo}

            </td>



            <td>

                ${pedido.cliente}

            </td>



            <td>

                ${pedido.data}

            </td>



            <td>

                ${pedido.pagamento}

            </td>



            <td>

                ${formatarMoeda(pedido.total)}

            </td>



            <td>


                <span class="status ${pedido.status.toLowerCase()}">

                    ${pedido.status}

                </span>


            </td>



            <td>


                <div class="acoesPedido">


                    <button

                        class="btnAcao btnVisualizar"

                        data-pedido="${pedido.codigo}"

                        title="Visualizar pedido">


                        <i class="fas fa-eye"></i>


                    </button>



                    <button

                        class="btnAcao btnStatus"

                        data-pedido="${pedido.codigo}"

                        title="Alterar status">


                        <i class="fas fa-rotate"></i>


                    </button>



                </div>


            </td>



        </tr>


        `;


    });


}



/*=========================================================
    PESQUISA DE PEDIDOS
=========================================================*/


get("pesquisaPedido")
.addEventListener(

    "keyup",

    pesquisarPedidos

);



function pesquisarPedidos(){


    const texto = get("pesquisaPedido")

    .value

    .toLowerCase();



    const resultado = pedidos.filter(pedido=>{


        return (

            pedido.codigo

            .toLowerCase()

            .includes(texto)


            ||


            pedido.cliente

            .toLowerCase()

            .includes(texto)


        );


    });



    carregarTabelaPedidos(resultado);


}



/*=========================================================
    BOTÕES DA TABELA
=========================================================*/


document.addEventListener(

"click",

function(event){



    const botao =

    event.target.closest(".btnAcao");



    if(!botao)

        return;



    const codigo =

    botao.dataset.pedido;



    if(botao.classList.contains("btnVisualizar")){


        abrirDetalhesPedido(codigo);


    }



    if(botao.classList.contains("btnStatus")){


        abrirAlterarStatus(codigo);


    }



});



/*=========================================================
    ATUALIZAR PEDIDOS
=========================================================*/


get("btnAtualizarPedidos")

.addEventListener(

"click",

()=>{


    carregarTabelaPedidos();


    alert(

        "Pedidos atualizados com sucesso!"

    );


}

);

/*=========================================================
    ABRIR DETALHES DO PEDIDO
=========================================================*/


function abrirDetalhesPedido(codigo){


    const pedido = pedidos.find(

        item => item.codigo === codigo

    );



    if(!pedido)

        return;



    get("tituloDetalhesPedido").textContent =

        "Pedido " + pedido.codigo;



    get("statusDetalhesPedido").textContent =

        pedido.status;



    get("nomeCliente").textContent =

        "Nome: " + pedido.cliente;



    get("cpfCliente").textContent =

        "CPF: " + pedido.cpf;



    get("telefoneCliente").textContent =

        "Telefone: " + pedido.telefone;



    get("enderecoEntrega").textContent =

        pedido.endereco;



    get("cidadeEntrega").textContent =

        pedido.cidade;



    get("cepEntrega").textContent =

        "CEP: " + pedido.cep;



    get("formaPagamento").textContent =

        "Pagamento: " + pedido.pagamento;



    get("valorPedido").textContent =

        "Produtos: " + formatarMoeda(

            pedido.total

        );



    get("fretePedido").textContent =

        "Frete: " + formatarMoeda(

            pedido.frete

        );



    get("descontoPedido").textContent =

        "Desconto: " + formatarMoeda(

            pedido.desconto

        );



    get("totalPedido").textContent =

        "Total: " + formatarMoeda(

            pedido.total

        );



    carregarProdutosPedido(

        pedido.produtos

    );



    get("modalVisualizarPedido")

    .classList.add("ativo");


}



/*=========================================================
    PRODUTOS DO PEDIDO
=========================================================*/


function carregarProdutosPedido(produtos){


    const tabela =

    get("listaProdutosPedido");



    tabela.innerHTML = "";



    produtos.forEach(produto=>{


        tabela.innerHTML += `


        <tr>


            <td>

                ${produto.nome}

            </td>



            <td>

                ${produto.quantidade}

            </td>



            <td>

                ${formatarMoeda(

                    produto.valor

                )}


            </td>



            <td>

                ${formatarMoeda(

                    produto.valor *

                    produto.quantidade

                )}


            </td>


        </tr>


        `;


    });


}



/*=========================================================
    FECHAR MODAL VISUALIZAÇÃO
=========================================================*/


get("btnFecharVisualizar")

.addEventListener(

"click",

()=>{


    get("modalVisualizarPedido")

    .classList.remove("ativo");


}

);



/*=========================================================
    ALTERAR STATUS
=========================================================*/


let pedidoSelecionado = null;



function abrirAlterarStatus(codigo){


    pedidoSelecionado = codigo;



    preencherSelect(

        "novoStatusPedido",

        statusPedidos.slice(1)

    );



    get("modalStatusPedido")

    .classList.add("ativo");


}



/*=========================================================
    SALVAR NOVO STATUS
=========================================================*/


get("btnSalvarStatus")

.addEventListener(

"click",

()=>{


    const pedido = pedidos.find(

        item =>

        item.codigo === pedidoSelecionado

    );



    if(pedido){


        pedido.status =

        get("novoStatusPedido").value;



        carregarTabelaPedidos();



        get("modalStatusPedido")

        .classList.remove("ativo");


    }


}

);



/*=========================================================
    CANCELAR ALTERAÇÃO
=========================================================*/


get("btnCancelarStatus")

.addEventListener(

"click",

()=>{


    get("modalStatusPedido")

    .classList.remove("ativo");


}

);



/*=========================================================
    FECHAR MODAL CLICANDO FORA
=========================================================*/


window.addEventListener(

"click",

(event)=>{


    if(

        event.target ===

        get("modalVisualizarPedido")

    ){


        get("modalVisualizarPedido")

        .classList.remove("ativo");


    }



    if(

        event.target ===

        get("modalStatusPedido")

    ){


        get("modalStatusPedido")

        .classList.remove("ativo");


    }


});