/*=========================================================
    LOGIN E CADASTRO
    Todo o conteúdo da página é criado via JavaScript.
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    criarHeader();
    criarTitulo();
    criarTelaLogin();
    criarFooter();

});

/*=========================================================
    HEADER
=========================================================*/

function criarHeader(){

    const header = document.getElementById("header");

    header.innerHTML = `
        <div class="top-header">

            <div class="logo">
                ABA<span>Sports</span>
            </div>

            <nav class="menu">

                <a href="#">Ajuda</a>

                <a href="#">Privacidade</a>

                <a href="#">Termos</a>

            </nav>

        </div>
    `;

}

/*=========================================================
    TÍTULO
=========================================================*/

function criarTitulo(){

    const topBar = document.getElementById("topBar");

    topBar.innerHTML = `

        <div class="page-title">

            <h1>Login e Cadastro</h1>

        </div>

    `;

}

/*=========================================================
    LOGIN
=========================================================*/

function criarTelaLogin(){

    const container = document.getElementById("authContainer");

    container.innerHTML = `

        <div class="auth-wrapper">

            <div class="auth-grid">

                <!-- LOGIN -->

                <div class="card">

                    <h2>Entrar</h2>

                    <form class="form">

                        <input
                            type="email"
                            placeholder="Seu e-mail">

                        <input
                            type="password"
                            placeholder="Sua senha">

                        <div class="link">

                            <a href="#">
                                Esqueci minha senha
                            </a>

                        </div>

                        <button
                            type="submit"
                            class="btn btn-primary">

                            Entrar

                        </button>

                        <button
                            type="button"
                            class="btn btn-google">

                            Entrar com Google

                        </button>

                    </form>

                </div>

                <!-- CADASTRO -->

                <div class="card">

                    <h2>Criar Conta</h2>

                    <form class="form">

                        <input
                            type="text"
                            placeholder="Nome">

                        <input
                            type="email"
                            placeholder="E-mail">

                        <input
                            type="password"
                            placeholder="Senha">

                        <input
                            type="password"
                            placeholder="Confirmar senha">

                        <button
                            type="submit"
                            class="btn btn-primary">

                            Cadastrar

                        </button>

                    </form>

                </div>

            </div>

        </div>

    `;

}

/*=========================================================
    FOOTER
=========================================================*/

function criarFooter(){

    const footer = document.getElementById("footer");

    footer.innerHTML = `

        <div class="footer-content">

            <div class="footer-column">

                <h3>Empresa</h3>

                <p>

                    Plataforma desenvolvida para
                    autenticação de usuários.

                </p>

            </div>

            <div class="footer-column">

                <h3>Contato</h3>

                <p>

                    suporte@email.com

                </p>

                <p>

                    (11) 99999-9999

                </p>

            </div>

            <div class="footer-column">

                <h3>Links</h3>

                <p>Ajuda</p>

                <p>Privacidade</p>

                <p>Termos</p>

            </div>

        </div>

        <div class="copy">

            © 2026 DevSystem - Todos os direitos reservados.

        </div>

    `;

}

document.getElementById("btn-criar-conta").addEventListener("click", () => {
 
    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const dataNascimento =
        document.getElementById("dataNascimento").value;
    const mensagem =
        document.getElementById("mensagem");
 
    //verificar se todos os campos foram preenchidos
    if (
        nome == "" ||
        cpf == "" ||
        telefone == "" ||
        email == "" ||
        senha == "" ||
        dataNascimento == ""
    ) {
 
        mensagem.style.color = "red";
        mensagem.innerHTML = "Preencha todos os campos.";
 
 
 
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
    if (senha !== confirmarSenha) {
        mensagem.style.color = "red";
        mensagem.innerHTML = "As senhas não coincidem.";
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
 
 
    if (!email.includes("@gmail.com") ||
        !email.includes("@hotmail.com") ||
        !email.includes("@yahoo.com") ||
        !email.includes("@outlook.com") ||
        !email.includes("@icloud.com")) {
 
        mensagem.style.color = "red";
        mensagem.innerHTML = "Digite um e-mail válido.";
 
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
                document.getElementById("nome").value = "";
                document.getElementById("cpf").value = "";
                document.getElementById("telefone").value = "";
                document.getElementById("email").value = "";
                document.getElementById("senha").value = "";
                document.getElementById("dataNascimento").value = "";
 
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
 