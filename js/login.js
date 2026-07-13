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