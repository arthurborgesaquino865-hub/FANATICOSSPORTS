/*=========================================================
    FANÁTICOS SPORTS
    PAINEL ADMINISTRATIVO
    TELA DE CLIENTES
=========================================================*/


document.addEventListener(

    "DOMContentLoaded",

    iniciarSistema

);





/*=========================================================
    CONFIGURAÇÕES DO SISTEMA
=========================================================*/


const sistema = {


    nome:"Fanáticos Sports",


    logo:"../assets/logo.png",


    fotoUsuario:"../assets/admin.png",


    nomeUsuario:"Administrador",


    cargoUsuario:"Lojista"


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


        ativo:false


    },


    {


        texto:"Clientes",


        icone:"fas fa-users",


        link:"../pages/clientes-lojista.html",


        ativo:true


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


const cardsClientes = [


    {


        titulo:"Total de Clientes",


        valor:"2.548",


        detalhe:"Clientes cadastrados"


    },


    {


        titulo:"Clientes Ativos",


        valor:"2.410",


        detalhe:"Comprando atualmente"


    },


    {


        titulo:"Novos Clientes",


        valor:"184",


        detalhe:"Últimos 30 dias"


    },


    {


        titulo:"Bloqueados",


        valor:"54",


        detalhe:"Clientes suspensos"


    }


];







/*=========================================================
    DADOS DOS CLIENTES
=========================================================*/


const clientes = [


    {


        id:1,


        nome:"Arthur Aquino",


        email:"arthur@gmail.com",


        telefone:"(11) 99999-9999",


        cpf:"123.456.789-00",


        cadastro:"15/07/2026",


        pedidos:12,


        gasto:2450.90,


        status:"Ativo",


        foto:"../assets/admin.png",


        historico:[


            {


                pedido:"#10245",


                data:"04/08/2026",


                valor:324.70,


                status:"Entregue"


            },


            {


                pedido:"#10120",


                data:"20/07/2026",


                valor:229.90,


                status:"Entregue"


            }


        ]


    },



    {


        id:2,


        nome:"João Silva",


        email:"joao@gmail.com",


        telefone:"(21) 98888-7777",


        cpf:"987.654.321-00",


        cadastro:"02/08/2026",


        pedidos:5,


        gasto:899.90,


        status:"Ativo",


        foto:"../assets/admin.png",


        historico:[


            {


                pedido:"#10246",


                data:"04/08/2026",


                valor:769.90,


                status:"Preparando"


            }


        ]


    },



    {


        id:3,


        nome:"Maria Souza",


        email:"maria@gmail.com",


        telefone:"(31) 97777-6666",


        cpf:"456.789.123-00",


        cadastro:"10/06/2026",


        pedidos:2,


        gasto:450.00,


        status:"Bloqueado",


        foto:"../assets/admin.png",


        historico:[]


    }


];

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
    INICIAR SISTEMA
=========================================================*/


function iniciarSistema(){



    carregarLogo();


    carregarUsuario();


    carregarMenu();


    carregarCards();


    carregarTextos();



    carregarTabelaClientes();



}








/*=========================================================
    CARREGAR LOGO
=========================================================*/


function carregarLogo(){



    get("logoImagem").src =

    sistema.logo;



    get("logoTexto").textContent =

    sistema.nome;



}







/*=========================================================
    CARREGAR USUÁRIO
=========================================================*/


function carregarUsuario(){



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



    const menu =

    get("menuLateral");



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
    CARREGAR CARDS
=========================================================*/


function carregarCards(){



    const area =

    get("cardsClientes");



    area.innerHTML = "";




    cardsClientes.forEach(card=>{



        area.innerHTML += `



        <div class="cardCliente">



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
    TEXTOS DA PÁGINA
=========================================================*/


function carregarTextos(){



    get("tituloPrincipal").textContent =

    "Clientes";



    get("tituloClientes").textContent =

    "Gerenciamento de Clientes";



    get("descricaoClientes").textContent =

    "Visualize e gerencie todos os clientes cadastrados na loja.";





    get("textoAdicionarCliente").textContent =

    "Novo Cliente";





    get("lblPesquisaCliente").textContent =

    "Pesquisar cliente";



    get("pesquisaCliente").placeholder =

    "Digite nome ou email...";





    get("lblFiltroStatusCliente").textContent =

    "Status";



    get("lblFiltroDataCliente").textContent =

    "Data de cadastro";





    get("thNomeCliente").textContent =

    "Nome";



    get("thEmailCliente").textContent =

    "Email";



    get("thTelefoneCliente").textContent =

    "Telefone";



    get("thPedidosCliente").textContent =

    "Pedidos";



    get("thValorCliente").textContent =

    "Total gasto";



    get("thStatusCliente").textContent =

    "Status";



    get("thAcoesCliente").textContent =

    "Ações";



    get("footerTexto").textContent =

    "© 2026 Fanáticos Sports - Todos os direitos reservados.";



    get("footerVersao").textContent =

    "Versão 1.0.0";



}

/*=========================================================
    CARREGAR TABELA DE CLIENTES
=========================================================*/


function carregarTabelaClientes(lista = clientes){


    const tabela =

    get("listaClientes");



    tabela.innerHTML = "";




    lista.forEach(cliente=>{



        tabela.innerHTML += `



        <tr>



            <td>

                ${cliente.nome}

            </td>



            <td>

                ${cliente.email}

            </td>



            <td>

                ${cliente.telefone}

            </td>



            <td>

                ${cliente.pedidos}

            </td>



            <td>

                ${formatarMoeda(cliente.gasto)}

            </td>



            <td>


                <span class="statusCliente ${cliente.status.toLowerCase()}">


                    ${cliente.status}


                </span>



            </td>




            <td>



                <div class="acoesCliente">



                    <button

                    class="btnAcaoCliente btnVisualizarCliente"

                    data-id="${cliente.id}">


                        <i class="fas fa-eye"></i>


                    </button>





                    <button

                    class="btnAcaoCliente btnBloquearCliente"

                    data-id="${cliente.id}">


                        <i class="fas fa-ban"></i>


                    </button>



                </div>



            </td>



        </tr>



        `;



    });



}








/*=========================================================
    PESQUISA CLIENTE
=========================================================*/


get("pesquisaCliente")

.addEventListener(

"input",

()=>{


    const texto =

    get("pesquisaCliente")

    .value

    .toLowerCase();




    const resultado = clientes.filter(cliente=>{


        return (

            cliente.nome

            .toLowerCase()

            .includes(texto)


            ||


            cliente.email

            .toLowerCase()

            .includes(texto)


        );


    });



    carregarTabelaClientes(resultado);



});








/*=========================================================
    FILTRO STATUS
=========================================================*/


function carregarFiltroStatus(){



    const select =

    get("filtroStatusCliente");



    select.innerHTML = `


        <option value="todos">

            Todos

        </option>



        <option value="Ativo">

            Ativos

        </option>



        <option value="Bloqueado">

            Bloqueados

        </option>


    `;



}




get("filtroStatusCliente")

.addEventListener(

"change",

()=>{



    const valor =

    get("filtroStatusCliente")

    .value;




    if(valor === "todos"){


        carregarTabelaClientes();


        return;


    }




    const filtrados =

    clientes.filter(cliente=>{


        return cliente.status === valor;


    });




    carregarTabelaClientes(filtrados);



});







/*=========================================================
    ABRIR MODAL CLIENTE
=========================================================*/


function abrirModalCliente(id){



    const cliente =

    clientes.find(

        item => item.id == id

    );



    if(!cliente)

        return;




    get("fotoClienteModal").src =

    cliente.foto;



    get("nomeClienteModal").textContent =

    cliente.nome;



    get("statusClienteModal").textContent =

    cliente.status;




    get("emailClienteModal").textContent =

    "Email: " + cliente.email;



    get("telefoneClienteModal").textContent =

    "Telefone: " + cliente.telefone;



    get("cpfClienteModal").textContent =

    "CPF: " + cliente.cpf;



    get("dataCadastroClienteModal").textContent =

    "Cadastro: " + cliente.cadastro;




    carregarHistoricoCliente(

        cliente.historico

    );



    get("modalCliente")

    .classList.add("ativo");



}








/*=========================================================
    HISTÓRICO DE PEDIDOS
=========================================================*/


function carregarHistoricoCliente(lista){



    const tabela =

    get("listaHistoricoPedidos");



    tabela.innerHTML = "";




    lista.forEach(pedido=>{



        tabela.innerHTML += `



        <tr>



            <td>

                ${pedido.pedido}

            </td>



            <td>

                ${pedido.data}

            </td>



            <td>

                ${formatarMoeda(

                    pedido.valor

                )}


            </td>



            <td>

                ${pedido.status}

            </td>



        </tr>



        `;



    });



}







/*=========================================================
    EVENTOS DOS BOTÕES
=========================================================*/


document.addEventListener(

"click",

evento=>{



    const botao =

    evento.target.closest(

        ".btnAcaoCliente"

    );



    if(!botao)

        return;




    const id =

    botao.dataset.id;




    if(

        botao.classList.contains(

            "btnVisualizarCliente"

        )

    ){


        abrirModalCliente(id);


    }





    if(

        botao.classList.contains(

            "btnBloquearCliente"

        )

    ){


        alterarStatusCliente(id);


    }



});








/*=========================================================
    BLOQUEAR CLIENTE
=========================================================*/


function alterarStatusCliente(id){



    const cliente =

    clientes.find(

        item=>item.id == id

    );



    if(!cliente)

        return;



    if(cliente.status === "Ativo"){


        cliente.status = "Bloqueado";


    }

    else{


        cliente.status = "Ativo";


    }



    carregarTabelaClientes();



}








/*=========================================================
    FECHAR MODAL
=========================================================*/


get("btnFecharModalCliente")

.addEventListener(

"click",

()=>{


    get("modalCliente")

    .classList.remove("ativo");


});







/*=========================================================
    INICIAR FILTROS
=========================================================*/


carregarFiltroStatus();