/*=========================================================
    LOGIN - FANÁTICOS SPORTS
=========================================================*/


document.addEventListener("DOMContentLoaded", function(){



/*=========================================================
    CONFIGURAÇÕES DO SISTEMA
=========================================================*/


const sistema = {


    nome:

    "Fanáticos Sports",


    logo:

    "../assets/logo.png",


    fundo:

    "../assets/login-bg.jpg"


};



/*=========================================================
    CARREGAR LOGO
=========================================================*/


document.getElementById("logoImagem").src =

sistema.logo;


document.getElementById("logoTexto").textContent =

sistema.nome;



/*=========================================================
    TEXTOS LOGIN
=========================================================*/


document.getElementById("tituloLogin").textContent =

"Bem-vindo novamente";


document.getElementById("subtituloLogin").textContent =

"Entre na sua conta para continuar suas compras.";



document.getElementById("lblEmailLogin").textContent =

"Email";


document.getElementById("lblSenhaLogin").textContent =

"Senha";



document.getElementById("emailLogin").placeholder =

"Digite seu email";


document.getElementById("senhaLogin").placeholder =

"Digite sua senha";



document.getElementById("textoLembrar").textContent =

"Lembrar de mim";


document.getElementById("linkEsqueciSenha").textContent =

"Esqueci minha senha";



document.getElementById("textoEntrar").textContent =

"Entrar";



/*=========================================================
    TEXTOS CADASTRO
=========================================================*/


document.getElementById("tituloCadastro").textContent =

"Criar uma conta";


document.getElementById("subtituloCadastro").textContent =

"Cadastre seus dados para começar a comprar.";



document.getElementById("lblNome").textContent =

"Nome Completo";


document.getElementById("lblCpf").textContent =

"CPF";


document.getElementById("lblTelefone").textContent =

"Telefone";


document.getElementById("lblEmailCadastro").textContent =

"Email";


document.getElementById("lblSenhaCadastro").textContent =

"Senha";


document.getElementById("lblConfirmarSenha").textContent =

"Confirmar Senha";


document.getElementById("lblNascimento").textContent =

"Data de Nascimento";


document.getElementById("lblLoja").textContent =

"Loja";



/*=========================================================
    PLACEHOLDERS CADASTRO
=========================================================*/


document.getElementById("nomeCadastro").placeholder =

"Digite seu nome completo";


document.getElementById("cpfCadastro").placeholder =

"Digite seu CPF";


document.getElementById("telefoneCadastro").placeholder =

"(00) 00000-0000";


document.getElementById("emailCadastro").placeholder =

"Digite seu email";


document.getElementById("senhaCadastro").placeholder =

"Crie uma senha";


document.getElementById("confirmarSenha").placeholder =

"Confirme sua senha";



/*=========================================================
    TERMOS E BOTÃO
=========================================================*/


document.getElementById("textoTermos").textContent =

"Eu aceito os termos de uso";


document.getElementById("textoCriarConta").textContent =

"Criar Conta";


document.getElementById("textoJaPossuiConta").textContent =

"Já possui uma conta?";


document.getElementById("textoBtnIrLogin").textContent =

"Voltar para login";



/*=========================================================
    CARREGAR LOJAS
=========================================================*/


const lojas = [

    {
        id:1,
        nome:"Fanáticos Sports - Centro"
    },

    {
        id:2,
        nome:"Fanáticos Sports - Shopping"
    },

    {
        id:3,
        nome:"Fanáticos Sports - Online"
    }

];


const selectLoja = document.getElementById("lojaCadastro");



const opcaoInicial = document.createElement("option");

opcaoInicial.value = "";

opcaoInicial.textContent =

"Selecione uma loja";


selectLoja.appendChild(opcaoInicial);



lojas.forEach(function(loja){


    const option = document.createElement("option");


    option.value = loja.id;


    option.textContent = loja.nome;


    selectLoja.appendChild(option);


});



/*=========================================================
    MOSTRAR / OCULTAR SENHA LOGIN
=========================================================*/


const btnMostrarSenha =

document.getElementById("btnMostrarSenha");


const senhaLogin =

document.getElementById("senhaLogin");



btnMostrarSenha.addEventListener("click", function(){


    if(senhaLogin.type === "password"){


        senhaLogin.type = "text";


        btnMostrarSenha.innerHTML =

        '<i class="fas fa-eye-slash"></i>';


    }

    else{


        senhaLogin.type = "password";


        btnMostrarSenha.innerHTML =

        '<i class="fas fa-eye"></i>';


    }


});



/*=========================================================
    MÁSCARA CPF
=========================================================*/


const campoCpf =

document.getElementById("cpfCadastro");



campoCpf.addEventListener("input", function(){


    let valor = this.value.replace(/\D/g,"");


    valor = valor.substring(0,11);



    valor = valor.replace(

        /(\d{3})(\d)/,

        "$1.$2"

    );


    valor = valor.replace(

        /(\d{3})(\d)/,

        "$1.$2"

    );


    valor = valor.replace(

        /(\d{3})(\d{1,2})$/,

        "$1-$2"

    );


    this.value = valor;


});



/*=========================================================
    MÁSCARA TELEFONE
=========================================================*/


const campoTelefone =

document.getElementById("telefoneCadastro");



campoTelefone.addEventListener("input", function(){


    let valor = this.value.replace(/\D/g,"");


    valor = valor.substring(0,11);



    if(valor.length <=10){


        valor = valor.replace(

            /(\d{2})(\d)/,

            "($1) $2"

        );


        valor = valor.replace(

            /(\d{4})(\d)/,

            "$1-$2"

        );


    }

    else{


        valor = valor.replace(

            /(\d{2})(\d)/,

            "($1) $2"

        );


        valor = valor.replace(

            /(\d{5})(\d)/,

            "$1-$2"

        );


    }



    this.value = valor;


});



/*=========================================================
    VALIDAÇÃO CONFIRMAÇÃO DE SENHA
=========================================================*/


const senhaCadastro =

document.getElementById("senhaCadastro");


const confirmarSenha =

document.getElementById("confirmarSenha");



confirmarSenha.addEventListener("blur", function(){


    if(

        senhaCadastro.value !==

        confirmarSenha.value

    ){


        confirmarSenha.style.borderColor =

        "#EF4444";


    }

    else{


        confirmarSenha.style.borderColor =

        "#22C55E";


    }


});

/*=========================================================
    LOGIN
=========================================================*/


const formLogin =

document.getElementById("formLogin");



formLogin.addEventListener("submit", function(event){


    event.preventDefault();



    const email =

    document.getElementById("emailLogin").value;



    const senha =

    document.getElementById("senhaLogin").value;



    if(email === "" || senha === ""){


        alert("Preencha todos os campos do login.");


        return;


    }



    /*
        Aqui futuramente entra a API:

        POST /login

        enviando:

        email
        senha

    */



    alert("Login realizado com sucesso!");



});



/*=========================================================
    CADASTRO DE CLIENTE
=========================================================*/


const formCadastro =

document.getElementById("formCadastro");



formCadastro.addEventListener("submit", function(event){


    event.preventDefault();



    const nome =

    document.getElementById("nomeCadastro").value;



    const email =

    document.getElementById("emailCadastro").value;



    const senha =

    document.getElementById("senhaCadastro").value;



    const confirmar =

    document.getElementById("confirmarSenha").value;



    const termos =

    document.getElementById("aceitarTermos").checked;



    const loja =

    document.getElementById("lojaCadastro").value;



    if(nome.trim() === ""){


        alert("Digite seu nome completo.");

        return;


    }



    if(email.trim() === ""){


        alert("Digite seu email.");

        return;


    }



    if(senha.length < 6){


        alert("A senha precisa ter pelo menos 6 caracteres.");

        return;


    }



    if(senha !== confirmar){


        alert("As senhas não são iguais.");

        return;


    }



    if(loja === ""){


        alert("Selecione uma loja.");

        return;


    }



    if(!termos){


        alert("Aceite os termos de uso.");

        return;


    }




    /*
        Futuramente envia para o banco:

        INSERT INTO Cliente

        nome
        cpf
        telefone
        email
        senha
        data_nascimento
        Loja_idLoja

    */



    alert("Conta criada com sucesso!");



});



/*=========================================================
    VOLTAR PARA LOGIN
=========================================================*/


document

.getElementById("btnIrLogin")

.addEventListener("click", function(){


    document

    .getElementById("emailLogin")

    .focus();


});



/*=========================================================
    FOOTER
=========================================================*/


document

.getElementById("footerTexto")

.textContent =

"© 2026 Fanáticos Sports - Todos os direitos reservados.";



document

.getElementById("footerVersao")

.textContent =

"Versão 1.0.0";



});