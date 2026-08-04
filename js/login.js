/*=========================================================
    LOGIN - FANÁTICOS SPORTS
=========================================================*/


document.addEventListener("DOMContentLoaded", function () {



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
        MOSTRAR / OCULTAR SENHA LOGIN
    =========================================================*/


    const btnMostrarSenha =

        document.getElementById("btnMostrarSenha");


    const senhaLogin =

        document.getElementById("senhaLogin");



    btnMostrarSenha.addEventListener("click", function () {


        if (senhaLogin.type === "password") {


            senhaLogin.type = "text";


            btnMostrarSenha.innerHTML =

                '<i class="fas fa-eye-slash"></i>';


        }

        else {


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



    campoCpf.addEventListener("input", function () {


        let valor = this.value.replace(/\D/g, "");


        valor = valor.substring(0, 11);



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



    campoTelefone.addEventListener("input", function () {


        let valor = this.value.replace(/\D/g, "");


        valor = valor.substring(0, 11);



        if (valor.length <= 10) {


            valor = valor.replace(

                /(\d{2})(\d)/,

                "($1) $2"

            );


            valor = valor.replace(

                /(\d{4})(\d)/,

                "$1-$2"

            );


        }

        else {


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



    confirmarSenha.addEventListener("blur", function () {


        if (

            senhaCadastro.value !==

            confirmarSenha.value

        ) {


            confirmarSenha.style.borderColor =

                "#EF4444";


        }

        else {


            confirmarSenha.style.borderColor =

                "#22C55E";


        }


    });

    /*=========================================================
        LOGIN
    =========================================================*/


    const formLogin =

        document.getElementById("formLogin");



    formLogin.addEventListener("submit", function (event) {


        event.preventDefault();



        const email =

            document.getElementById("emailLogin").value;



        const senha =

            document.getElementById("senhaLogin").value;



        if (email === "" || senha === "") {


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



    //======================================================
    // BOTÃO CADASTRAR
    //======================================================

    document.getElementById("btnCriarConta").addEventListener("click", () => {

        const nome = document.getElementById("nomeCadastro").value.trim();
        const cpf = document.getElementById("cpfCadastro").value.trim();
        const telefone = document.getElementById("telefoneCadastro").value.trim();
        const email = document.getElementById("emailCadastro").value.trim();
        const senha = document.getElementById("senhaCadastro").value;
        const dataNascimento =
            document.getElementById("dataNascimento").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;
        const aceitarTermos = document.getElementById("aceitarTermos").checked;
        const mensagem =
            document.getElementById("mensagem");

        //verificar se todos os campos foram preenchidos
        if (
            nome == "" ||
            cpf == "" ||
            telefone == "" ||
            email == "" ||
            senha == "" ||
            dataNascimento == "" ||
            confirmarSenha == ""

        ) {

            mensagem.style.color = "red";
            mensagem.innerHTML = "Preencha todos os campos por favor.";



            return;

        }

        if (senha.length < 8 || senha.length > 13) {

            mensagem.style.color = "red";
            mensagem.innerHTML =
                "A senha deve possuir entre 8 e 13 caracteres.";
            return;

        }
        // verificar se a senha possui letras maiusculas
        if (!/[A-Z]/.test(senha)) {
            mensagem.style.color = "red";
            mensagem.innerHTML =
                "A senha deve conter pelo menos uma letra maiúscula.";
            return;
        }
        if (!/[a-z]/.test(senha)) {
            mensagem.style.color = "red";
            mensagem.innerHTML =
                "A senha deve conter pelo menos uma letra minúscula.";
            return;
        }

        if (!/[!@#$%^&*(),.?":{}|<>_\-+=/\[\]\\;'`~]/.test(senha)) {
            mensagem.style.color = "red";
            mensagem.innerHTML =
                "A senha deve conter pelo menos um caracter especial.";
            return;
        }
        if (!/[0-9]/.test(senha)) {
            mensagem.style.color = "red";
            mensagem.innerHTML =
                "A senha deve conter pelo menos um número.";
            return;
        }
        //verificar se a senha possui nome da pessoa
        if (senha.includes(nome)) {
            mensagem.style.color = "red";
            mensagem.innerHTML =
                "A senha não pode conter o nome do usuário.";
            return;
        }

        //verificar se o cliente é maior de idade
        const idade = new Date().getFullYear() -
            new Date(dataNascimento).getFullYear();

        if (idade < 18) {
            mensagem.style.color = "red";
            mensagem.innerHTML =
                "Você deve ser maior de idade para se cadastrar.";
            return;
        }


        if (!email.includes("@gmail.com") &&
            !email.includes("@hotmail.com") &&
            !email.includes("@yahoo.com") &&
            !email.includes("@outlook.com") && !email.includes("@") &&
            !email.includes("@icloud.com")) {

            mensagem.style.color = "red";
            mensagem.innerHTML = "Digite um e-mail válido.";

            return;

        }

        if (senha !== confirmarSenha) {
            mensagem.style.color = "red";
            mensagem.innerHTML = "As senhas não coincidem.";
            return;
        }

        if (!document.getElementById("aceitarTermos").checked) {
            mensagem.style.color = "red";
            mensagem.innerHTML = "Você deve aceitar os termos e condições.";
            return;
        }

        mensagem.style.color = "green";

        mensagem.innerHTML =
            "Cadastro realizado com sucesso!";

        // Objeto pronto para enviar ao Node.js
        const cliente = {
            nome: nome,
            cpf: cpf.replace(/\D/g, ""),
            telefone: telefone.replace(/\D/g, ""),
            email: email,
            senha: senha,
            data_nascimento: dataNascimento,
            Loja_idLoja: 1
        };

        console.log(cliente);


        fetch("http://localhost:3000/clientes", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(cliente)

        })
            .then(res => res.json())

            .then(resposta => {

                if (resposta.sucesso) {

                    mensagem.style.color = "green";
                    mensagem.innerHTML = resposta.mensagem;

                    // Limpa os campos
                    document.getElementById("nomeCadastro").value = "";
                    document.getElementById("cpfCadastro").value = "";
                    document.getElementById("telefoneCadastro").value = "";
                    document.getElementById("emailCadastro").value = "";
                    document.getElementById("senhaCadastro").value = "";
                    document.getElementById("dataNascimento").value = "";


                    setTimeout(() => {

                        window.location.href = "../pages/login.html";


                    }, 1000);

                } else {

                    mensagem.style.color = "red";
                    mensagem.innerHTML = resposta.mensagem;

                }

            })

            .catch(() => {

                mensagem.style.color = "red";
                mensagem.innerHTML = "Erro ao conectar com o servidor.";

            });


    });





    /*=========================================================
        VOLTAR PARA LOGIN
    =========================================================*/


    document

        .getElementById("btnIrLogin")

        .addEventListener("click", function () {


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





const btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click", () => {

    const email = document.getElementById("emailLogin").value.trim();
    const senha = document.getElementById("senhaLogin").value;

    const mensagem = document.getElementById("mensagemlogin");

    if (email === "" || senha === "") {

        mensagem.innerHTML = "Preencha todos os campos.";
        mensagem.style.color = "red";
        return;

    }

    if (senha.length < 8) {

        mensagem.innerHTML = "A senha deve possuir no mínimo 8 caracteres.";
        mensagem.style.color = "red";
        return;

    }

    fetch("http://localhost:3000/clientes/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email,
            senha
        })

    })

        .then(res => res.json())

        .then(resposta => {

            if (resposta.sucesso) {

                localStorage.setItem(
                    "cliente",
                    JSON.stringify(resposta.cliente)
                );

                window.location.href = "../index.html";

            } else {

                mensagem.innerHTML = resposta.mensagem;
                mensagem.style.color = "red";

            }

        });
});