/*=========================================================
    FANÁTICOS SPORTS
    PAGAMENTO.JS
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

    desconto:50.00,

    total:474.70

};

/*=========================================================
    INICIALIZAÇÃO
=========================================================*/

window.onload=function(){

    carregarHeader();

    carregarMenu();

    carregarBreadcrumb();

    carregarFormasPagamento();

    carregarCartao();

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

    document.getElementById("breadcrumbCheckout").textContent="Checkout";

    document.getElementById("breadcrumbAtual").textContent="Pagamento";

    document.getElementById("breadcrumbSeparador1").textContent=">";

    document.getElementById("breadcrumbSeparador2").textContent=">";

}

/*=========================================================
    FORMAS DE PAGAMENTO
=========================================================*/

function carregarFormasPagamento(){

    document.getElementById("tituloPagamento").textContent="Forma de Pagamento";

    document.getElementById("lblCredito").textContent="Cartão de Crédito";

    document.getElementById("lblDebito").textContent="Cartão de Débito";

    document.getElementById("lblPix").textContent="PIX";

    document.getElementById("lblBoleto").textContent="Boleto Bancário";

    document.getElementById("formaCredito").checked=true;

}

/*=========================================================
    DADOS DO CARTÃO
=========================================================*/

function carregarCartao(){

    document.getElementById("tituloCartao").textContent="Dados do Cartão";

    document.getElementById("lblNomeCartao").textContent="Nome do Titular";

    document.getElementById("lblNumeroCartao").textContent="Número do Cartão";

    document.getElementById("lblValidade").textContent="Validade";

    document.getElementById("lblCvv").textContent="CVV";

    document.getElementById("lblParcelas").textContent="Parcelas";

    document.getElementById("nomeCartao").placeholder="Nome impresso no cartão";

    document.getElementById("numeroCartao").placeholder="0000 0000 0000 0000";

    document.getElementById("validadeCartao").placeholder="MM/AA";

    document.getElementById("cvvCartao").placeholder="123";

    const parcelas=document.getElementById("parcelas");

    for(let i=1;i<=12;i++){

        const option=document.createElement("option");

        option.value=i;

        option.textContent=i+"x sem juros";

        parcelas.appendChild(option);

    }

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
    PIX
=========================================================*/

function carregarPix(){

    document.getElementById("tituloPix").textContent=
    "Pagamento via PIX";

    document.getElementById("textoPix").textContent=
    "Escaneie o QR Code ou copie o código abaixo para realizar o pagamento.";

    document.getElementById("qrCodePix").src=
    "../assets/images/pix/qrcode.png";

    document.getElementById("qrCodePix").alt=
    "QR Code PIX";

    document.getElementById("codigoPix").value=
    "00020126580014BR.GOV.BCB.PIX0136FANATICOSSPORTS5204000053039865802BR5925FANATICOSSPORTS6009SAOPAULO62070503***6304ABCD";

    document.getElementById("btnCopiarPix").textContent=
    "Copiar Código PIX";

}

/*=========================================================
    TEMPORIZADOR PIX
=========================================================*/

let tempoPix=900;

let intervaloPix=null;

function iniciarTemporizadorPix(){

    atualizarTemporizador();

    intervaloPix=setInterval(function(){

        tempoPix--;

        atualizarTemporizador();

        if(tempoPix<=0){

            clearInterval(intervaloPix);

            document.getElementById("temporizadorPix")
            .textContent="QR Code expirado.";

        }

    },1000);

}

function atualizarTemporizador(){

    const minutos=Math.floor(tempoPix/60);

    const segundos=tempoPix%60;

    document.getElementById("temporizadorPix").textContent=

    "Expira em: "+

    String(minutos).padStart(2,"0")+

    ":"+

    String(segundos).padStart(2,"0");

}

/*=========================================================
    COPIAR PIX
=========================================================*/

function configurarPix(){

    document.getElementById("btnCopiarPix")
    .addEventListener("click",function(){

        const codigo=document.getElementById("codigoPix");

        codigo.select();

        codigo.setSelectionRange(0,99999);

        navigator.clipboard.writeText(codigo.value);

        alert("Código PIX copiado!");

    });

}

/*=========================================================
    BOLETO
=========================================================*/

function carregarBoleto(){

    document.getElementById("tituloBoleto").textContent=
    "Pagamento via Boleto";

    document.getElementById("textoBoleto").textContent=
    "O boleto será gerado automaticamente após a confirmação da compra.";

    document.getElementById("btnGerarBoleto").textContent=
    "Gerar Boleto";

}

/*=========================================================
    SEGURANÇA
=========================================================*/

function carregarSeguranca(){

    document.getElementById("tituloSeguranca").textContent=
    "Pagamento Seguro";

    document.getElementById("seguranca1").textContent=
    "Criptografia SSL";

    document.getElementById("seguranca2").textContent=
    "Dados protegidos";

    document.getElementById("seguranca3").textContent=
    "Ambiente 100% seguro";

}

/*=========================================================
    TROCA DE FORMA DE PAGAMENTO
=========================================================*/

function configurarFormasPagamento(){

    const cartao=document.getElementById("secaoCartao");

    const pix=document.getElementById("secaoPix");

    const boleto=document.getElementById("secaoBoleto");

    function atualizar(){

        cartao.style.display="none";

        pix.style.display="none";

        boleto.style.display="none";

        if(document.getElementById("formaCredito").checked ||

           document.getElementById("formaDebito").checked){

            cartao.style.display="block";

        }

        if(document.getElementById("formaPix").checked){

            pix.style.display="block";

        }

        if(document.getElementById("formaBoleto").checked){

            boleto.style.display="block";

        }

    }

    document
    .querySelectorAll("input[name='formaPagamento']")
    .forEach(function(radio){

        radio.addEventListener("change",atualizar);

    });

    atualizar();

}

/*=========================================================
    INICIALIZAÇÃO COMPLEMENTAR
=========================================================*/

window.addEventListener("load",function(){

    carregarPix();

    carregarBoleto();

    carregarSeguranca();

    configurarPix();

    configurarFormasPagamento();

    iniciarTemporizadorPix();

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
    PESQUISA
=========================================================*/

function configurarPesquisa(){

    document.getElementById("btnPesquisar")
    .addEventListener("click",pesquisar);

    document.getElementById("txtPesquisar")
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
    VALIDAÇÃO DO CARTÃO
=========================================================*/

function validarPagamento(){

    if(document.getElementById("formaPix").checked){

        return true;

    }

    if(document.getElementById("formaBoleto").checked){

        return true;

    }

    const campos=[

        "nomeCartao",
        "numeroCartao",
        "validadeCartao",
        "cvvCartao"

    ];

    for(let i=0;i<campos.length;i++){

        const campo=document.getElementById(campos[i]);

        if(campo.value.trim()===""){

            alert("Preencha todos os dados do cartão.");

            campo.focus();

            return false;

        }

    }

    return true;

}

/*=========================================================
    FINALIZAR COMPRA
=========================================================*/

function configurarFinalizarCompra(){

    document.getElementById("btnFinalizarCompra")
    .textContent="Finalizar Compra";

    document.getElementById("btnFinalizarCompra")
    .addEventListener("click",finalizarCompra);

}

function finalizarCompra(){

    if(!validarPagamento()){

        return;

    }

    alert(
        "Pagamento realizado com sucesso!\n\n" +
        "Obrigado por comprar na Fanáticos Sports."
    );

    // window.location.href="pedido-confirmado.html";

}

/*=========================================================
    EVENTOS DOS CAMPOS
=========================================================*/

function configurarCampos(){

    const inputs=document.querySelectorAll("input, select");

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

    configurarPesquisa();

    configurarCampos();

    configurarFinalizarCompra();

    console.log("Pagamento carregado com sucesso.");

});

/*=========================================================
    FIM DO ARQUIVO
=========================================================*/