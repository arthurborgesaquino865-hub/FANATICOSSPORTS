/*=========================================================
    FANÁTICOS SPORTS
    FAVORITOS
=========================================================*/

document.addEventListener(
    "DOMContentLoaded",
    iniciarSistema
);

/*=========================================================
    CONFIGURAÇÕES
=========================================================*/

const sistema = {

    nome: "Fanáticos Sports",

    logo: "../assets/logo.png",

    usuario: "Arthur",

    fotoPerfil: "../assets/admin.png"

};

/*=========================================================
    API
=========================================================*/

const API_FAVORITOS =
"http://localhost:3000/favoritos";

const API_CARRINHO =
"http://localhost:3000/carrinho";

/*=========================================================
    VARIÁVEIS
=========================================================*/

let favoritos = [];

let favoritoSelecionado = null;

/*=========================================================
    INICIAR SISTEMA
=========================================================*/

async function iniciarSistema(){

    carregarHeader();

    carregarFooter();

    mostrarLoading(true);

    await buscarFavoritos();

    carregarResumo();

    carregarFavoritos();

    configurarEventos();

    mostrarLoading(false);

}

/*=========================================================
    HEADER
=========================================================*/

function carregarHeader(){

    get("logoImagem").src =
    sistema.logo;

    get("logoTexto").textContent =
    sistema.nome;

    get("tituloFavoritos").textContent =
    "Meus Favoritos";

    get("subtituloFavoritos").textContent =
    "Todos os produtos que você salvou.";

    get("pesquisaFavoritos").placeholder =
    "Pesquisar favorito...";

}

/*=========================================================
    FOOTER
=========================================================*/

function carregarFooter(){

    get("footerTitulo").textContent =
    "Fanáticos Sports";

    get("footerTexto").textContent =
    "A maior loja de camisas esportivas do Brasil.";

    get("footerCopyright").textContent =
    "© 2026 Fanáticos Sports";

}

/*=========================================================
    FUNÇÃO AUXILIAR
=========================================================*/

function get(id){

    return document.getElementById(id);

}

/*=========================================================
    BUSCAR FAVORITOS
=========================================================*/

async function buscarFavoritos(){

    try{

        const resposta = await fetch(API_FAVORITOS);

        if(!resposta.ok){

            throw new Error("Erro ao buscar favoritos.");

        }

        favoritos = await resposta.json();

        if(!Array.isArray(favoritos)){

            favoritos = [];

        }

        console.log("Favoritos:", favoritos);

    }

    catch(erro){

        console.error(erro);

        favoritos = [];

    }

}

/*=========================================================
    RESUMO
=========================================================*/

function carregarResumo(){

    const total = favoritos.length;

    const quantidade = get("quantidadeFavoritos");

    if(quantidade){

        quantidade.textContent = total;

    }

}

/*=========================================================
    CARREGAR FAVORITOS
=========================================================*/

function carregarFavoritos(){

    const container = get("favoritosContainer");

    if(!container){

        return;

    }

    container.innerHTML = "";

    if(favoritos.length === 0){

        mostrarSemFavoritos();

        return;

    }

    favoritos.forEach(produto=>{

        container.innerHTML += criarCard(produto);

    });

}

/*=========================================================
    SEM FAVORITOS
=========================================================*/

function mostrarSemFavoritos(){

    const container = get("favoritosContainer");

    container.innerHTML = `

        <div id="semFavoritos">

            <i class="fas fa-heart-crack"></i>

            <h2>

                Você ainda não possui favoritos.

            </h2>

            <p>

                Explore nossa loja e salve seus produtos favoritos.

            </p>

            <button
                id="btnContinuarComprando">

                Continuar Comprando

            </button>

        </div>

    `;

    const botao = get("btnContinuarComprando");

    if(botao){

        botao.addEventListener(

            "click",

            ()=>{

                window.location.href="home.html";

            }

        );

    }

}

/*=========================================================
    CARD DO PRODUTO
=========================================================*/

function criarCard(produto){

    const preco = Number(produto.preco || 0);

    const precoPromocional =
        Number(produto.precoPromocional || 0);

    const imagem =

        produto.imagem ||

        "../assets/images/produto-sem-imagem.png";

    const desconto =

        precoPromocional > 0 &&
        precoPromocional < preco;

    return `

    <article class="cardFavorito">

        <div class="imagemFavorito">

            <img
                src="${imagem}"
                alt="${produto.nome}">

            ${desconto ? `

                <span class="tagDesconto">

                    ${Math.round(
                        ((preco-precoPromocional)/preco)*100
                    )}% OFF

                </span>

            ` : ""}

        </div>

        <div class="conteudoFavorito">

            <span class="categoriaProduto">

                ${produto.nomeCategoria || "Categoria"}

            </span>

            <h3>

                ${produto.nome}

            </h3>

            <div class="avaliacaoProduto">

                <i class="fas fa-star"></i>

                <i class="fas fa-star"></i>

                <i class="fas fa-star"></i>

                <i class="fas fa-star"></i>

                <i class="fas fa-star-half-alt"></i>

                <span>

                    (4.8)

                </span>

            </div>

            <div class="precoProduto">

                ${desconto ?

                `

                <small>

                    ${formatarMoeda(preco)}

                </small>

                <strong>

                    ${formatarMoeda(precoPromocional)}

                </strong>

                `

                :

                `

                <strong>

                    ${formatarMoeda(preco)}

                </strong>

                `

                }

            </div>

            <div class="estoqueProduto">

                ${Number(produto.estoque)>0 ?

                `

                <span class="estoque">

                    <i class="fas fa-check-circle"></i>

                    Em estoque

                </span>

                `

                :

                `

                <span class="semEstoque">

                    <i class="fas fa-times-circle"></i>

                    Sem estoque

                </span>

                `

                }

            </div>

            <div class="acoesFavorito">

                <button
                    class="btnDetalhes"
                    onclick="abrirProduto(${produto.idProduto})">

                    <i class="fas fa-eye"></i>

                    Ver Produto

                </button>

                <button
                    class="btnCarrinho"
                    onclick="adicionarCarrinho(${produto.idProduto})">

                    <i class="fas fa-cart-plus"></i>

                </button>

                <button
                    class="btnExcluirFavorito"
                    onclick="abrirModalRemover(${produto.idFavorito})">

                    <i class="fas fa-heart-crack"></i>

                </button>

            </div>

        </div>

    </article>

    `;

}

/*=========================================================
    FORMATAR MOEDA
=========================================================*/

function formatarMoeda(valor){

    return Number(valor).toLocaleString(

        "pt-BR",

        {

            style:"currency",

            currency:"BRL"

        }

    );

}

/*=========================================================
    ABRIR PRODUTO
=========================================================*/

function abrirProduto(idProduto){

    window.location.href =

    "detalhes-produto.html?id=" + idProduto;

}

/*=========================================================
    ADICIONAR AO CARRINHO
=========================================================*/

async function adicionarCarrinho(idProduto){

    try{

        const resposta = await fetch(

            API_CARRINHO,

            {

                method:"POST",

                headers:{

                    "Content-Type":"application/json"

                },

                body:JSON.stringify({

                    idProduto:idProduto,

                    quantidade:1

                })

            }

        );

        const dados = await resposta.json();

        alert(

            dados.mensagem ||

            "Produto adicionado ao carrinho."

        );

    }

    catch(erro){

        console.error(erro);

        alert(

            "Erro ao adicionar ao carrinho."

        );

    }

}

/*=========================================================
    MODAL REMOVER FAVORITO
=========================================================*/

function abrirModalRemover(idFavorito){

    favoritoSelecionado = idFavorito;

    const modal = get("modalExcluirFavorito");

    if(modal){

        modal.classList.add("ativo");

    }

}

/*=========================================================
    FECHAR MODAL
=========================================================*/

function fecharModalRemover(){

    favoritoSelecionado = null;

    const modal = get("modalExcluirFavorito");

    if(modal){

        modal.classList.remove("ativo");

    }

}

/*=========================================================
    EXCLUIR FAVORITO
=========================================================*/

async function excluirFavorito(){

    if(favoritoSelecionado == null){

        return;

    }

    try{

        const resposta = await fetch(

            API_FAVORITOS +

            "/" +

            favoritoSelecionado,

            {

                method:"DELETE"

            }

        );

        const dados = await resposta.json();

        alert(

            dados.mensagem ||

            "Favorito removido."

        );

        fecharModalRemover();

        await buscarFavoritos();

        carregarResumo();

        carregarFavoritos();

    }

    catch(erro){

        console.error(erro);

        alert(

            "Erro ao remover favorito."

        );

    }

}

/*=========================================================
    EVENTOS
=========================================================*/

function configurarEventos(){

    const btnCancelar =

        get("btnCancelarExcluir");

    if(btnCancelar){

        btnCancelar.addEventListener(

            "click",

            fecharModalRemover

        );

    }

    const btnConfirmar =

        get("btnConfirmarExcluir");

    if(btnConfirmar){

        btnConfirmar.addEventListener(

            "click",

            excluirFavorito

        );

    }

}

/*=========================================================
    LOADING
=========================================================*/

function mostrarLoading(status){

    const loading = get("loading");

    if(!loading){

        return;

    }

    loading.style.display =

        status ?

        "flex"

        :

        "none";

}

/*=========================================================
    PESQUISA
=========================================================*/

function pesquisarFavoritos(){

    const campo = get("pesquisaFavoritos");

    if(!campo){

        return;

    }

    const texto = campo.value
        .toLowerCase()
        .trim();

    const resultado = favoritos.filter(produto =>{

        return (

            produto.nome
            .toLowerCase()
            .includes(texto)

            ||

            (produto.nomeCategoria || "")
            .toLowerCase()
            .includes(texto)

            ||

            (produto.nomeMarca || "")
            .toLowerCase()
            .includes(texto)

        );

    });

    const container = get("favoritosContainer");

    container.innerHTML = "";

    if(resultado.length === 0){

        mostrarSemFavoritos();

        return;

    }

    resultado.forEach(produto=>{

        container.innerHTML += criarCard(produto);

    });

}

/*=========================================================
    ORDENAÇÃO
=========================================================*/

function ordenarFavoritos(tipo){

    switch(tipo){

        case "nome":

            favoritos.sort((a,b)=>

                a.nome.localeCompare(b.nome)

            );

        break;

        case "preco":

            favoritos.sort((a,b)=>

                Number(a.preco)-Number(b.preco)

            );

        break;

        case "maiorPreco":

            favoritos.sort((a,b)=>

                Number(b.preco)-Number(a.preco)

            );

        break;

    }

    carregarFavoritos();

}

/*=========================================================
    ANIMAÇÃO
=========================================================*/

function animarCards(){

    const cards =

        document.querySelectorAll(".cardFavorito");

    cards.forEach((card,index)=>{

        card.style.opacity = "0";

        card.style.transform =

        "translateY(20px)";

        setTimeout(()=>{

            card.style.transition =

            ".35s";

            card.style.opacity = "1";

            card.style.transform =

            "translateY(0)";

        },index*80);

    });

}

/*=========================================================
    EVENTOS GERAIS
=========================================================*/

function configurarInterface(){

    const pesquisa =

        get("pesquisaFavoritos");

    if(pesquisa){

        pesquisa.addEventListener(

            "keyup",

            pesquisarFavoritos

        );

    }

    const ordenar =

        get("ordenarFavoritos");

    if(ordenar){

        ordenar.addEventListener(

            "change",

            function(){

                ordenarFavoritos(this.value);

            }

        );

    }

}

/*=========================================================
    INICIAR
=========================================================*/

async function iniciarSistema(){

    mostrarLoading(true);

    await buscarFavoritos();

    carregarResumo();

    carregarFavoritos();

    configurarEventos();

    configurarInterface();

    animarCards();

    mostrarLoading(false);

}

/*=========================================================
    INICIALIZAÇÃO
=========================================================*/

window.addEventListener(

    "load",

    iniciarSistema

);

console.log(

    "Favoritos carregado com sucesso!"

);