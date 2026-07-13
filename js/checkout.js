/*=========================================================
    FANÁTICOS SPORTS
    CHECKOUT.JS
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

    produto:"Camisa Oficial Flamengo I 2026",

    tamanho:"M",

    quantidade:2,

    imagem:"../assets/images/produtos/flamengo1.png",

    subtotal:499.80,

    frete:24.90,

    desconto:0,

    total:524.70

};

/*=========================================================
    INICIALIZAÇÃO
=========================================================*/

window.onload=function(){

    carregarHeader();

    carregarMenu();

    carregarBreadcrumb();

    carregarFormulario();

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

    document.getElementById("breadcrumbCarrinho").textContent="Carrinho";

    document.getElementById("breadcrumbAtual").textContent="Checkout";

    document.getElementById("breadcrumbSeparador1").textContent=">";

    document.getElementById("breadcrumbSeparador2").textContent=">";

}

/*=========================================================
    FORMULÁRIO
=========================================================*/

function carregarFormulario(){

    document.getElementById("tituloDadosCliente").textContent="Dados do Cliente";

    document.getElementById("lblNome").textContent="Nome Completo";

    document.getElementById("lblCpf").textContent="CPF";

    document.getElementById("lblEmail").textContent="E-mail";

    document.getElementById("lblTelefone").textContent="Celular";

    document.getElementById("lblCep").textContent="CEP";

    document.getElementById("lblRua").textContent="Rua";

    document.getElementById("lblNumero").textContent="Número";

    document.getElementById("lblComplemento").textContent="Complemento";

    document.getElementById("lblBairro").textContent="Bairro";

    document.getElementById("lblCidade").textContent="Cidade";

    document.getElementById("lblEstado").textContent="Estado";

    document.getElementById("tituloEndereco").textContent="Endereço";

    document.getElementById("nome").placeholder="Digite seu nome";

    document.getElementById("cpf").placeholder="000.000.000-00";

    document.getElementById("email").placeholder="Digite seu e-mail";

    document.getElementById("telefone").placeholder="(00) 00000-0000";

    document.getElementById("cep").placeholder="00000-000";

    document.getElementById("rua").placeholder="Nome da rua";

    document.getElementById("numero").placeholder="Número";

    document.getElementById("complemento").placeholder="Apartamento, bloco...";

    document.getElementById("bairro").placeholder="Bairro";

    document.getElementById("cidade").placeholder="Cidade";

}

/*=========================================================
    RESUMO DO PEDIDO
=========================================================*/

function carregarResumo(){

    document.getElementById("tituloResumo").textContent="Resumo do Pedido";

    document.getElementById("produtoImagem").src=pedido.imagem;

    document.getElementById("produtoImagem").alt=pedido.produto;

    document.getElementById("produtoNome").textContent=pedido.produto;

    document.getElementById("produtoTamanho").textContent=
    "Tamanho: "+pedido.tamanho;

    document.getElementById("produtoQuantidade").textContent=
    "Quantidade: "+pedido.quantidade;

    document.getElementById("lblSubtotal").textContent="Subtotal";

    document.getElementById("lblFrete").textContent="Frete";

    document.getElementById("lblDesconto").textContent="Desconto";

    document.getElementById("lblTotal").textContent="Total";

    document.getElementById("subtotal").textContent=
    formatarMoeda(pedido.subtotal);

    document.getElementById("frete").textContent=
    formatarMoeda(pedido.frete);

    document.getElementById("desconto").textContent=
    formatarMoeda(pedido.desconto);

    document.getElementById("total").textContent=
    formatarMoeda(pedido.total);

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
    ESTADOS
=========================================================*/

const estados=[

    "AC","AL","AP","AM","BA","CE","DF","ES",
    "GO","MA","MT","MS","MG","PA","PB","PR",
    "PE","PI","RJ","RN","RS","RO","RR","SC",
    "SP","SE","TO"

];

function carregarEstados(){

    const select=document.getElementById("estado");

    estados.forEach(function(uf){

        const option=document.createElement("option");

        option.value=uf;

        option.textContent=uf;

        select.appendChild(option);

    });

}

/*=========================================================
    ENTREGA
=========================================================*/

function carregarEntrega(){

    document.getElementById("tituloEntrega").textContent=
    "Forma de Entrega";

    document.getElementById("lblEntregaPac").textContent=
    "PAC • Entrega entre 5 e 8 dias úteis";

    document.getElementById("lblEntregaSedex").textContent=
    "SEDEX • Entrega entre 1 e 3 dias úteis";

    document.getElementById("lblEntregaLoja").textContent=
    "Retirar na Loja";

    document.getElementById("entregaPac").checked=true;

}

/*=========================================================
    CUPOM
=========================================================*/

function carregarCupom(){

    document.getElementById("tituloCupom").textContent=
    "Cupom de Desconto";

    document.getElementById("cupom").placeholder=
    "Digite seu cupom";

    document.getElementById("btnAplicarCupom").textContent=
    "Aplicar";

    document.getElementById("btnAplicarCupom")
    .addEventListener("click",aplicarCupom);

}

function aplicarCupom(){

    const cupom=document
    .getElementById("cupom")
    .value
    .trim()
    .toUpperCase();

    if(cupom==="FANATICOS10"){

        pedido.desconto=50;

    }else{

        pedido.desconto=0;

    }

    pedido.total=
    pedido.subtotal+
    pedido.frete-
    pedido.desconto;

    document.getElementById("desconto").textContent=
    formatarMoeda(pedido.desconto);

    document.getElementById("total").textContent=
    formatarMoeda(pedido.total);

}

/*=========================================================
    MENU
=========================================================*/

function configurarMenu(){

    for(let i=1;i<=7;i++){

        document
        .getElementById("menu"+i)
        .addEventListener("click",function(e){

            e.preventDefault();

            console.log("Menu:",this.textContent);

        });

    }

}

/*=========================================================
    BREADCRUMB
=========================================================*/

function configurarBreadcrumb(){

    document
    .getElementById("breadcrumbHome")
    .addEventListener("click",function(e){

        e.preventDefault();

        console.log("Home");

    });

    document
    .getElementById("breadcrumbCarrinho")
    .addEventListener("click",function(e){

        e.preventDefault();

        console.log("Carrinho");

    });

}

/*=========================================================
    PESQUISA
=========================================================*/

function configurarPesquisa(){

    document
    .getElementById("btnPesquisar")
    .addEventListener("click",pesquisar);

    document
    .getElementById("txtPesquisar")
    .addEventListener("keyup",function(e){

        if(e.key==="Enter"){

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
    INICIALIZAÇÃO
=========================================================*/

window.addEventListener("load",function(){

    carregarEstados();

    carregarEntrega();

    carregarCupom();

    configurarMenu();

    configurarBreadcrumb();

    configurarPesquisa();

});

/*=========================================================
    FOOTER
=========================================================*/

function carregarFooter(){

    document.getElementById("footerTitulo1").textContent=
    sistema.nome;

    document.getElementById("footerTexto1").textContent=
    "A Fanáticos Sports oferece produtos oficiais dos maiores clubes e seleções do mundo com qualidade, segurança e os melhores preços.";

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

    document.getElementById("footerLink1").href="#";
    document.getElementById("footerLink2").href="#";
    document.getElementById("footerLink3").href="#";

    document.getElementById("footerContato1").href="#";
    document.getElementById("footerContato2").href="#";
    document.getElementById("footerContato3").href="#";

    document.getElementById("facebook").href="#";
    document.getElementById("instagram").href="#";
    document.getElementById("youtube").href="#";

    document.getElementById("copyright").textContent=
    "© 2026 Fanáticos Sports - Todos os direitos reservados.";

}

/*=========================================================
    VALIDAÇÃO DO FORMULÁRIO
=========================================================*/

function validarFormulario(){

    const campos=[

        "nome",
        "cpf",
        "email",
        "telefone",
        "cep",
        "rua",
        "numero",
        "bairro",
        "cidade"

    ];

    for(let i=0;i<campos.length;i++){

        const campo=document.getElementById(campos[i]);

        if(campo.value.trim()===""){

            alert("Preencha o campo corretamente.");

            campo.focus();

            return false;

        }

    }

    if(document.getElementById("estado").value===""){

        alert("Selecione um estado.");

        document.getElementById("estado").focus();

        return false;

    }

    return true;

}

/*=========================================================
    CONTINUAR PARA PAGAMENTO
=========================================================*/

function configurarPagamento(){

    document.getElementById("btnContinuarPagamento")
    .textContent="Continuar para Pagamento";

    document.getElementById("btnContinuarPagamento")
    .addEventListener("click",continuarPagamento);

}

function continuarPagamento(){

    if(!validarFormulario()){

        return;

    }

    alert(
        "Dados preenchidos com sucesso!\n\n" +
        "Você será direcionado para a tela de pagamento."
    );

    // window.location.href="pagamento.html";

}

/*=========================================================
    EVENTOS DOS INPUTS
=========================================================*/

function configurarCampos(){

    const inputs=document.querySelectorAll("input");

    inputs.forEach(function(input){

        input.addEventListener("focus",function(){

            this.style.borderColor="#009640";

        });

        input.addEventListener("blur",function(){

            this.style.borderColor="#E5E5E5";

        });

    });

}

/*=========================================================
    INICIALIZAÇÃO FINAL
=========================================================*/

window.addEventListener("load",function(){

    carregarFooter();

    configurarCampos();

    configurarPagamento();

    console.log("Checkout carregado com sucesso.");

});

/*=========================================================
    FIM DO ARQUIVO
=========================================================*/