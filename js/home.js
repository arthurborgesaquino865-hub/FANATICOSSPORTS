/*=========================================================
    FANÁTICOS SPORTS
    HOME
=========================================================*/


//=========================================================
// API
//=========================================================

const API =
    "http://localhost:3000";


//=========================================================
// CONFIGURAÇÕES DO SISTEMA
//=========================================================

const sistema = {

    nome:
        "Fanáticos Sports",

    logo:
        "assets/images/logo.png",

    placeholderPesquisa:
        "Pesquisar produtos...",

    banner: {

        tag:
            "LANÇAMENTO",

        titulo:
            "Nova Coleção 2026",

        descricao:
            "As melhores camisas oficiais, chuteiras e acessórios esportivos com os melhores preços.",

        botao:
            "COMPRAR AGORA",

        imagem:
            "assets/images/banner.png"

    }

};


//=========================================================
// MENU
//=========================================================

const menu = [

    "Clubes",

    "Seleções",

    "Chuteiras",

    "Masculino",

    "Feminino",

    "Infantil",

    "Promoções"

];


//=========================================================
// PRODUTOS RECEBIDOS DO BANCO
//=========================================================

let produtos = [];


//=========================================================
// INICIALIZAR SISTEMA
//=========================================================

document.addEventListener(

    "DOMContentLoaded",

    async function () {


        console.log(
            "Home Fanáticos Sports carregada."
        );


        //=========================================
        // INTERFACE
        //=========================================

        carregarHeader();

        carregarMenu();

        carregarBanner();

        carregarFooter();


        //=========================================
        // PRODUTOS DO BANCO
        //=========================================

        await carregarProdutos();


        //=========================================
        // PESQUISA
        //=========================================

        configurarPesquisa();


        //=========================================
        // BANNER
        //=========================================

        configurarBanner();

    }

);


//=========================================================
// HEADER
//=========================================================

function carregarHeader() {


    //=====================================================
    // LOGO
    //=====================================================

    document
        .getElementById(
            "logoImagem"
        )
        .src =
        sistema.logo;


    document
        .getElementById(
            "logoImagem"
        )
        .alt =
        sistema.nome;


    document
        .getElementById(
            "logoTexto"
        )
        .textContent =
        sistema.nome;


    //=====================================================
    // PESQUISA
    //=====================================================

    document
        .getElementById(
            "txtPesquisar"
        )
        .placeholder =
        sistema.placeholderPesquisa;


    //=====================================================
    // LINKS
    //=====================================================

    document
        .getElementById(
            "btnLogin"
        )
        .href =
        "pages/login.html";


    document
        .getElementById(
            "btnCarrinho"
        )
        .href =
        "pages/carrinho.html";


    document
        .getElementById(
            "btnFavoritos"
        )
        .href =
        "pages/favoritos.html";

}


//=========================================================
// CARREGAR MENU
//=========================================================

function carregarMenu() {


    for (
        let i = 0;
        i < menu.length;
        i++
    ) {


        const item =
            document.getElementById(
                "menu" + (i + 1)
            );


        if (item) {


            item.textContent =
                menu[i];


            item.href =
                "#";

        }

    }

}


//=========================================================
// BANNER
//=========================================================

function carregarBanner() {


    document
        .getElementById(
            "bannerTag"
        )
        .textContent =
        sistema.banner.tag;


    document
        .getElementById(
            "bannerTitulo"
        )
        .textContent =
        sistema.banner.titulo;


    document
        .getElementById(
            "bannerDescricao"
        )
        .textContent =
        sistema.banner.descricao;


    document
        .getElementById(
            "bannerBotao"
        )
        .textContent =
        sistema.banner.botao;


    document
        .getElementById(
            "bannerImagem"
        )
        .src =
        sistema.banner.imagem;


    document
        .getElementById(
            "bannerImagem"
        )
        .alt =
        sistema.banner.titulo;

}


//=========================================================
// TRATAR RESPOSTA DA API
//=========================================================

async function tratarResposta(
    resposta
) {


    const texto =
        await resposta.text();


    let dados;


    try {


        dados =
            JSON.parse(
                texto
            );


    }
    catch (erro) {


        console.error(
            "Resposta recebida:",
            texto
        );


        throw new Error(
            "O servidor não retornou JSON válido."
        );

    }


    if (
        !resposta.ok
    ) {


        throw new Error(

            dados.mensagem ||

            "Erro ao consultar o servidor."

        );

    }


    return dados;

}


//=========================================================
// CARREGAR PRODUTOS DO BANCO
//=========================================================

async function carregarProdutos() {


    const lista =
        document.getElementById(
            "listaProdutos"
        );


    //=====================================================
    // CARREGANDO
    //=====================================================

    lista.innerHTML = `

        <p class="carregando-produtos">

            Carregando produtos...

        </p>

    `;


    try {


        //=================================================
        // GET /PRODUTOS
        //=================================================

        const resposta =
            await fetch(
                `${API}/produtos`
            );


        produtos =
            await tratarResposta(
                resposta
            );


        console.log(
            "Produtos recebidos:",
            produtos
        );


        //=================================================
        // LIMPAR ÁREA
        //=================================================

        lista.innerHTML =
            "";


        //=================================================
        // NENHUM PRODUTO
        //=================================================

        if (
            !Array.isArray(produtos) ||
            produtos.length === 0
        ) {


            lista.innerHTML = `

                <p class="nenhum-produto">

                    Nenhum produto cadastrado.

                </p>

            `;


            return;

        }


        //=================================================
        // CRIAR CARDS
        //=================================================

        produtos.forEach(

            function (produto) {


                criarCardProduto(
                    produto
                );

            }

        );


    }
    catch (erro) {


        console.error(
            "Erro ao carregar produtos:",
            erro
        );


        lista.innerHTML = `

            <p class="erro-produtos">

                Não foi possível carregar os produtos.

            </p>

        `;

    }

}


//=========================================================
// CRIAR CARD DO PRODUTO
//=========================================================

function criarCardProduto(
    produto
) {


    const lista =
        document.getElementById(
            "listaProdutos"
        );


    //=====================================================
    // CARD
    //=====================================================

    const card =
        document.createElement(
            "div"
        );


    card.classList.add(
        "cardProduto"
    );


    card.dataset.id =
        produto.idProduto;


    //=====================================================
    // TAG
    //=====================================================

    const tag =
        document.createElement(
            "span"
        );


    tag.id =
        "tagProduto" +
        produto.idProduto;


    if (
        temPromocao(
            produto
        )
    ) {


        tag.textContent =
            "OFERTA";


    }
    else {


        tag.textContent =
            "NOVO";

    }


    //=====================================================
    // FAVORITO
    //=====================================================

    const favorito =
        document.createElement(
            "button"
        );


    favorito.type =
        "button";


    favorito.id =
        "favorito" +
        produto.idProduto;


    favorito.setAttribute(
        "aria-label",
        "Adicionar aos favoritos"
    );


    const iconeFavorito =
        document.createElement(
            "i"
        );


    iconeFavorito.classList.add(
        "far",
        "fa-heart"
    );


    favorito.appendChild(
        iconeFavorito
    );


    favorito.addEventListener(

        "click",

        function () {


            favoritar(
                favorito
            );

        }

    );


    //=====================================================
    // IMAGEM
    //=====================================================

    const imagem =
        document.createElement(
            "img"
        );


    imagem.id =
        "produtoImagem" +
        produto.idProduto;


    imagem.alt =
        produto.nome;


    if (
        produto.imagem
    ) {


        const mime =
            produto.mime_imagem ||
            "image/jpeg";


        imagem.src =
            `data:${mime};base64,${produto.imagem}`;


    }
    else {


        imagem.src =
            "assets/images/sem-imagem.png";

    }


    //=====================================================
    // CASO A IMAGEM NÃO EXISTA
    //=====================================================

    imagem.onerror =
        function () {


            this.onerror =
                null;


            this.src =
                "assets/images/sem-imagem.png";

        };


    //=====================================================
    // CATEGORIA
    //=====================================================

    const categoria =
        document.createElement(
            "span"
        );


    categoria.id =
        "categoria" +
        produto.idProduto;


    categoria.textContent =
        produto.categoria ||
        "Sem categoria";


    //=====================================================
    // NOME
    //=====================================================

    const nome =
        document.createElement(
            "h3"
        );


    nome.id =
        "produtoNome" +
        produto.idProduto;


    nome.textContent =
        produto.nome;


    //=====================================================
    // ESTRELAS
    //=====================================================

    const estrelas =
        document.createElement(
            "div"
        );


    estrelas.id =
        "estrelas" +
        produto.idProduto;


    estrelas.innerHTML = `

        <i class="fas fa-star"></i>

        <i class="fas fa-star"></i>

        <i class="fas fa-star"></i>

        <i class="fas fa-star"></i>

        <i class="far fa-star"></i>

    `;


    //=====================================================
    // PREÇO ANTIGO
    //=====================================================

    const precoAntigo =
        document.createElement(
            "span"
        );


    precoAntigo.id =
        "precoAntigo" +
        produto.idProduto;


    //=====================================================
    // PREÇO ATUAL
    //=====================================================

    const preco =
        document.createElement(
            "h2"
        );


    preco.id =
        "preco" +
        produto.idProduto;


    //=====================================================
    // DEFINIR PREÇOS
    //=====================================================

    if (
        temPromocao(
            produto
        )
    ) {


        precoAntigo.textContent =
            formatarPreco(
                produto.preco_antigo
            );


        preco.textContent =
            formatarPreco(
                produto.preco_promocional
            );


    }
    else {


        precoAntigo.textContent =
            "";


        preco.textContent =
            formatarPreco(
                produto.preco_antigo
            );

    }


    //=====================================================
    // ESTOQUE
    //=====================================================

    const estoque =
        document.createElement(
            "small"
        );


    estoque.classList.add(
        "estoque-produto"
    );


    if (
        Number(
            produto.quantidade_estoque
        ) > 0
    ) {


        estoque.textContent =
            `${produto.quantidade_estoque} em estoque`;


    }
    else {


        estoque.textContent =
            "Produto indisponível";


        estoque.classList.add(
            "sem-estoque"
        );

    }


    //=====================================================
    // BOTÃO COMPRAR
    //=====================================================

    const comprar =
        document.createElement(
            "button"
        );


    comprar.type =
        "button";


    comprar.id =
        "comprar" +
        produto.idProduto;


    if (
        Number(
            produto.quantidade_estoque
        ) > 0
    ) {


        comprar.textContent =
            "Comprar";


    }
    else {


        comprar.textContent =
            "Indisponível";


        comprar.disabled =
            true;

    }


    comprar.addEventListener(

        "click",

        function () {


            comprarProduto(
                produto
            );

        }

    );


    //=====================================================
    // MONTAR CARD
    //=====================================================

    card.appendChild(
        tag
    );


    card.appendChild(
        favorito
    );


    card.appendChild(
        imagem
    );


    card.appendChild(
        categoria
    );


    card.appendChild(
        nome
    );


    card.appendChild(
        estrelas
    );


    card.appendChild(
        precoAntigo
    );


    card.appendChild(
        preco
    );


    card.appendChild(
        estoque
    );


    card.appendChild(
        comprar
    );


    //=====================================================
    // ADICIONAR NA HOME
    //=====================================================

    lista.appendChild(
        card
    );

}


//=========================================================
// VERIFICAR PROMOÇÃO
//=========================================================

function temPromocao(
    produto
) {


    return (

        produto.preco_promocional !== null &&

        produto.preco_promocional !== undefined &&

        Number(
            produto.preco_promocional
        ) > 0

    );

}


//=========================================================
// FORMATAR PREÇO
//=========================================================

function formatarPreco(
    valor
) {


    if (
        valor === null ||
        valor === undefined ||
        valor === ""
    ) {


        return "R$ 0,00";

    }


    return Number(
        valor
    ).toLocaleString(

        "pt-BR",

        {

            style:
                "currency",

            currency:
                "BRL"

        }

    );

}


//=========================================================
// FAVORITAR
//=========================================================

function favoritar(
    botao
) {


    const icone =
        botao.querySelector(
            "i"
        );


    if (
        icone.classList.contains(
            "fas"
        )
    ) {


        icone.classList.remove(
            "fas"
        );


        icone.classList.add(
            "far"
        );


        icone.style.color =
            "#999";


    }
    else {


        icone.classList.remove(
            "far"
        );


        icone.classList.add(
            "fas"
        );


        icone.style.color =
            "#ff3b30";

    }

}


//=========================================================
// COMPRAR PRODUTO
//=========================================================

function comprarProduto(
    produto
) {


    if (
        Number(
            produto.quantidade_estoque
        ) <= 0
    ) {


        alert(
            "Produto indisponível."
        );


        return;

    }


    let valor;


    if (
        temPromocao(
            produto
        )
    ) {


        valor =
            produto.preco_promocional;


    }
    else {


        valor =
            produto.preco_antigo;

    }


    alert(

        "Produto selecionado!\n\n" +

        produto.nome +

        "\n" +

        formatarPreco(
            valor
        )

    );


    //=====================================================
    // FUTURA PÁGINA DO PRODUTO
    //=====================================================

    /*
    window.location.href =
        "pages/produto.html?id=" +
        produto.idProduto;
    */

}


//=========================================================
// CONFIGURAR PESQUISA
//=========================================================

function configurarPesquisa() {


    const botao =
        document.getElementById(
            "btnPesquisar"
        );


    const campo =
        document.getElementById(
            "txtPesquisar"
        );


    botao.addEventListener(

        "click",

        pesquisar

    );


    campo.addEventListener(

        "keyup",

        function (
            evento
        ) {


            if (
                evento.key ===
                "Enter"
            ) {


                pesquisar();

            }

        }

    );


    //=====================================================
    // PESQUISA ENQUANTO DIGITA
    //=====================================================

    campo.addEventListener(

        "input",

        function () {


            if (
                campo.value.trim() ===
                ""
            ) {


                exibirProdutos(
                    produtos
                );

            }

        }

    );

}


//=========================================================
// PESQUISAR
//=========================================================

function pesquisar() {


    const texto =
        document
            .getElementById(
                "txtPesquisar"
            )
            .value
            .trim()
            .toLowerCase();


    //=====================================================
    // CAMPO VAZIO
    //=====================================================

    if (
        texto === ""
    ) {


        exibirProdutos(
            produtos
        );


        return;

    }


    //=====================================================
    // FILTRAR
    //=====================================================

    const encontrados =
        produtos.filter(

            function (
                produto
            ) {


                const nome =
                    (
                        produto.nome ||
                        ""
                    )
                        .toLowerCase();


                const categoria =
                    (
                        produto.categoria ||
                        ""
                    )
                        .toLowerCase();


                const marca =
                    (
                        produto.marca ||
                        ""
                    )
                        .toLowerCase();


                const codigo =
                    (
                        produto.codigo ||
                        ""
                    )
                        .toLowerCase();


                return (

                    nome.includes(
                        texto
                    ) ||

                    categoria.includes(
                        texto
                    ) ||

                    marca.includes(
                        texto
                    ) ||

                    codigo.includes(
                        texto
                    )

                );

            }

        );


    exibirProdutos(
        encontrados
    );

}


//=========================================================
// EXIBIR PRODUTOS FILTRADOS
//=========================================================

function exibirProdutos(
    listaProdutos
) {


    const lista =
        document.getElementById(
            "listaProdutos"
        );


    lista.innerHTML =
        "";


    if (
        listaProdutos.length === 0
    ) {


        lista.innerHTML = `

            <p class="nenhum-produto">

                Nenhum produto encontrado.

            </p>

        `;


        return;

    }


    listaProdutos.forEach(

        function (
            produto
        ) {


            criarCardProduto(
                produto
            );

        }

    );

}


//=========================================================
// BOTÃO DO BANNER
//=========================================================

function configurarBanner() {


    document
        .getElementById(
            "bannerBotao"
        )
        .addEventListener(

            "click",

            function () {


                document
                    .getElementById(
                        "maisVendidos"
                    )
                    .scrollIntoView({

                        behavior:
                            "smooth"

                    });

            }

        );

}


//=========================================================
// FOOTER
//=========================================================

function carregarFooter() {


    document
        .getElementById(
            "footerTitulo1"
        )
        .textContent =
        "Fanáticos Sports";


    document
        .getElementById(
            "footerTexto1"
        )
        .textContent =
        "A sua loja especializada em artigos esportivos.";


    document
        .getElementById(
            "footerTitulo2"
        )
        .textContent =
        "Institucional";


    document
        .getElementById(
            "footerLink1"
        )
        .textContent =
        "Quem Somos";


    document
        .getElementById(
            "footerLink2"
        )
        .textContent =
        "Nossa História";


    document
        .getElementById(
            "footerLink3"
        )
        .textContent =
        "Trabalhe Conosco";


    document
        .getElementById(
            "footerTitulo3"
        )
        .textContent =
        "Atendimento";


    document
        .getElementById(
            "footerContato1"
        )
        .textContent =
        "Central de Ajuda";


    document
        .getElementById(
            "footerContato2"
        )
        .textContent =
        "Trocas e Devoluções";


    document
        .getElementById(
            "footerContato3"
        )
        .textContent =
        "Contato";


    document
        .getElementById(
            "footerTitulo4"
        )
        .textContent =
        "Redes Sociais";


    document
        .getElementById(
            "facebook"
        )
        .textContent =
        "Facebook";


    document
        .getElementById(
            "instagram"
        )
        .textContent =
        "Instagram";


    document
        .getElementById(
            "youtube"
        )
        .textContent =
        "YouTube";


    document
        .getElementById(
            "copyright"
        )
        .textContent =
        "© 2026 Fanáticos Sports - Todos os direitos reservados.";

}