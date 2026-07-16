/*=========================================================
    FANÁTICOS SPORTS
    DASHBOARD ADMIN
=========================================================*/

/*=========================================================
    CONFIGURAÇÕES
=========================================================*/

const sistema={

    loja:"Fanáticos Sports",

    versao:"1.0.0",

    administrador:"Arthur",

    cargo:"Administrador",

    logo:"../assets/images/logo.png",

    avatar:"../assets/images/admin.png"

};

/*=========================================================
    MENU
=========================================================*/

const menu={

    dashboard:"Dashboard",

    produtos:"Produtos",

    cadastrar:"Cadastrar Produto",

    categorias:"Categorias",

    pedidos:"Pedidos",

    clientes:"Clientes",

    estoque:"Estoque",

    relatorios:"Relatórios",

    configuracoes:"Configurações",

    sair:"Sair"

};

/*=========================================================
    DASHBOARD
=========================================================*/

const dashboard={

    produtos:248,

    pedidos:95,

    clientes:1548,

    faturamento:58240.90

};

/*=========================================================
    INICIALIZAÇÃO
=========================================================*/

window.addEventListener("load",function(){

    carregarLogo();

    carregarMenu();

    carregarTopbar();

    carregarCards();

});

/*=========================================================
    LOGO
=========================================================*/

function carregarLogo(){

    document.getElementById("logoAdminImagem").src=sistema.logo;

    document.getElementById("logoAdminImagem").alt=sistema.loja;

    document.getElementById("logoAdminTexto").textContent=sistema.loja;

}

/*=========================================================
    MENU
=========================================================*/

function carregarMenu(){

    document.getElementById("menuDashboardTexto").textContent=menu.dashboard;

    document.getElementById("menuProdutosTexto").textContent=menu.produtos;

    document.getElementById("menuCadastrarProdutoTexto").textContent=menu.cadastrar;

    document.getElementById("menuCategoriasTexto").textContent=menu.categorias;

    document.getElementById("menuPedidosTexto").textContent=menu.pedidos;

    document.getElementById("menuClientesTexto").textContent=menu.clientes;

    document.getElementById("menuEstoqueTexto").textContent=menu.estoque;

    document.getElementById("menuRelatoriosTexto").textContent=menu.relatorios;

    document.getElementById("menuConfiguracoesTexto").textContent=menu.configuracoes;

    document.getElementById("menuSairTexto").textContent=menu.sair;

}

/*=========================================================
    TOPBAR
=========================================================*/

function carregarTopbar(){

    document.getElementById("tituloPagina").textContent="Dashboard";

    document.getElementById("txtPesquisarAdmin").placeholder=

    "Pesquisar...";

    document.getElementById("fotoPerfilAdmin").src=sistema.avatar;

    document.getElementById("nomeAdmin").textContent=sistema.administrador;

    document.getElementById("cargoAdmin").textContent=sistema.cargo;

}

/*=========================================================
    CARDS
=========================================================*/

function carregarCards(){

    document.getElementById("cardTitulo1").textContent="Produtos";

    document.getElementById("cardTitulo2").textContent="Pedidos";

    document.getElementById("cardTitulo3").textContent="Clientes";

    document.getElementById("cardTitulo4").textContent="Faturamento";

    document.getElementById("cardValor1").textContent=

    dashboard.produtos;

    document.getElementById("cardValor2").textContent=

    dashboard.pedidos;

    document.getElementById("cardValor3").textContent=

    dashboard.clientes;

    document.getElementById("cardValor4").textContent=

    formatarMoeda(dashboard.faturamento);

}

/*=========================================================
    UTILITÁRIOS
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
    DADOS DO DASHBOARD
=========================================================*/

const pedidosRecentes=[

    {
        pedido:"#1001",
        cliente:"Carlos Silva",
        valor:349.90,
        status:"Pago",
        data:"16/07/2026"
    },

    {
        pedido:"#1002",
        cliente:"Fernanda Lima",
        valor:219.90,
        status:"Pendente",
        data:"16/07/2026"
    },

    {
        pedido:"#1003",
        cliente:"Lucas Martins",
        valor:599.90,
        status:"Pago",
        data:"15/07/2026"
    },

    {
        pedido:"#1004",
        cliente:"João Pedro",
        valor:179.90,
        status:"Cancelado",
        data:"15/07/2026"
    }

];

const produtosMaisVendidos=[

    {
        nome:"Camisa Flamengo I 2026",
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
        vendas:220
    }

];

const estoqueBaixo=[

    {
        nome:"Camisa PSG Home",
        estoque:3
    },

    {
        nome:"Camisa Santos I",
        estoque:2
    },

    {
        nome:"Camisa Arsenal Home",
        estoque:5
    }

];

/*=========================================================
    GRÁFICO
=========================================================*/

function carregarGrafico(){

    document.getElementById("tituloGrafico").textContent="Vendas do Ano";

    const canvas=document.getElementById("grafico");

    if(!canvas){

        return;

    }

    const ctx=canvas.getContext("2d");

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.font="20px Arial";

    ctx.fillStyle="#2563EB";

    ctx.fillText("Gráfico será implementado futuramente.",20,40);

}

/*=========================================================
    PEDIDOS
=========================================================*/

function carregarPedidos(){

    document.getElementById("tituloPedidos").textContent="Últimos Pedidos";

    document.getElementById("thPedido").textContent="Pedido";

    document.getElementById("thCliente").textContent="Cliente";

    document.getElementById("thValor").textContent="Valor";

    document.getElementById("thStatus").textContent="Status";

    document.getElementById("thData").textContent="Data";

    const tabela=document.getElementById("listaPedidos");

    tabela.innerHTML="";

    pedidosRecentes.forEach(function(item){

        tabela.innerHTML+=`

            <tr>

                <td>${item.pedido}</td>

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

    document.getElementById("tituloProdutos").textContent=

    "Produtos Mais Vendidos";

    const lista=document.getElementById("listaProdutosMaisVendidos");

    lista.innerHTML="";

    produtosMaisVendidos.forEach(function(produto){

        lista.innerHTML+=`

            <li>

                <span>${produto.nome}</span>

                <strong>${produto.vendas} vendas</strong>

            </li>

        `;

    });

}

/*=========================================================
    ESTOQUE
=========================================================*/

function carregarEstoque(){

    document.getElementById("tituloEstoque").textContent=

    "Estoque Baixo";

    const lista=document.getElementById("listaEstoqueBaixo");

    lista.innerHTML="";

    estoqueBaixo.forEach(function(produto){

        lista.innerHTML+=`

            <li>

                <span>${produto.nome}</span>

                <strong>${produto.estoque} un.</strong>

            </li>

        `;

    });

}

/*=========================================================
    INICIALIZAÇÃO
=========================================================*/

window.addEventListener("load",function(){

    carregarGrafico();

    carregarPedidos();

    carregarProdutosMaisVendidos();

    carregarEstoque();

});

/*=========================================================
    NOTIFICAÇÕES
=========================================================*/

const notificacoes=[

    {
        titulo:"Novo Pedido",
        descricao:"Pedido #1005 aguardando confirmação."
    },

    {
        titulo:"Estoque Baixo",
        descricao:"Camisa Santos I com apenas 2 unidades."
    },

    {
        titulo:"Novo Cliente",
        descricao:"Um novo cliente realizou cadastro."
    },

    {
        titulo:"Pagamento Recebido",
        descricao:"Pedido #1001 foi aprovado."
    }

];

function carregarNotificacoes(){

    document.getElementById("tituloNotificacoes").textContent=

    "Notificações";

    const lista=document.getElementById("listaNotificacoes");

    lista.innerHTML="";

    notificacoes.forEach(function(item){

        lista.innerHTML+=`

            <li>

                <div class="notificacaoIcone">

                    <i class="fas fa-bell"></i>

                </div>

                <div class="notificacaoConteudo">

                    <div class="notificacaoTitulo">

                        ${item.titulo}

                    </div>

                    <div class="notificacaoTexto">

                        ${item.descricao}

                    </div>

                </div>

            </li>

        `;

    });

}

/*=========================================================
    ATIVIDADES
=========================================================*/

const atividades=[

    "Produto cadastrado.",

    "Pedido enviado.",

    "Categoria atualizada.",

    "Cliente realizou login.",

    "Cupom criado."

];

function carregarAtividades(){

    document.getElementById("tituloAtividades").textContent=

    "Atividades Recentes";

    const lista=document.getElementById("listaAtividades");

    lista.innerHTML="";

    atividades.forEach(function(item){

        lista.innerHTML+=`

            <li>

                <span class="atividadeHora">

                    ${new Date().toLocaleTimeString("pt-BR",{

                        hour:"2-digit",

                        minute:"2-digit"

                    })}

                </span>

                <span class="atividadeTexto">

                    ${item}

                </span>

            </li>

        `;

    });

}

/*=========================================================
    FOOTER
=========================================================*/

function carregarFooter(){

    document.getElementById("footerTexto").textContent=

    "© 2026 Fanáticos Sports - Painel Administrativo";

    document.getElementById("footerVersao").textContent=

    "Versão " + sistema.versao;

}

/*=========================================================
    PESQUISA
=========================================================*/

function configurarPesquisa(){

    document.getElementById("btnPesquisarAdmin")

    .addEventListener("click",pesquisar);

    document.getElementById("txtPesquisarAdmin")

    .addEventListener("keyup",function(event){

        if(event.key==="Enter"){

            pesquisar();

        }

    });

}

function pesquisar(){

    const texto=document

    .getElementById("txtPesquisarAdmin")

    .value

    .trim();

    if(texto===""){

        alert("Digite algo para pesquisar.");

        return;

    }

    alert("Pesquisa realizada por: " + texto);

}

/*=========================================================
    MENU MOBILE
=========================================================*/

function configurarMenuMobile(){

    const botao=document.getElementById("btnMenuMobile");

    const sidebar=document.getElementById("sidebar");

    if(!botao){

        return;

    }

    botao.addEventListener("click",function(){

        sidebar.classList.toggle("menuAberto");

    });

}

/*=========================================================
    BOTÃO SAIR
=========================================================*/

function configurarLogout(){

    document.getElementById("menuSair")

    .addEventListener("click",function(event){

        event.preventDefault();

        const sair=confirm(

            "Deseja realmente sair do painel?"

        );

        if(sair){

            window.location.href="login-admin.html";

        }

    });

}

/*=========================================================
    MENU ATIVO
=========================================================*/

function configurarMenu(){

    const links=document.querySelectorAll(".menuAdmin a");

    links.forEach(function(link){

        link.addEventListener("click",function(){

            links.forEach(function(item){

                item.classList.remove("ativo");

            });

            this.classList.add("ativo");

        });

    });

}

/*=========================================================
    INICIALIZAÇÃO FINAL
=========================================================*/

window.addEventListener("load",function(){

    carregarNotificacoes();

    carregarAtividades();

    carregarFooter();

    configurarPesquisa();

    configurarMenu();

    configurarMenuMobile();

    configurarLogout();

    console.log("Dashboard carregado com sucesso.");

});

/*=========================================================
    FIM DO ARQUIVO
=========================================================*/