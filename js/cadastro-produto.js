/*=========================================================
    FANÁTICOS SPORTS
    CADASTRO DE PRODUTOS
=========================================================*/


//=========================================================
// CONFIGURAÇÕES
//=========================================================

const API = "http://localhost:3000";


// Loja que está utilizando o sistema
const ID_LOJA = 1;


//=========================================================
// FUNÇÃO AUXILIAR
//=========================================================

function get(id) {

    return document.getElementById(id);

}


//=========================================================
// ELEMENTOS DO PRODUTO
//=========================================================

const produtoNome =
    get("produtoNome");

const produtoDescricao =
    get("produtoDescricao");


const produtoPrecoAntigo =
    get("produtoPrecoAntigo");

const produtoPrecoPromo =
    get("produtoPrecoPromo");

const produtoEstoque =
    get("produtoEstoque");

const produtoMarca =
    get("produtoMarca");

const produtoCategoria =
    get("produtoCategoria");

const produtoStatus =
    get("produtoStatus");

const produtoCores =
    get("produtoCores");

const produtoTamanhos =
    get("produtoTamanhos");


//=========================================================
// ELEMENTOS DA IMAGEM
//=========================================================

const imagemProduto =
    get("imagemProduto");

const imagemArquivo =
    get("imagemArquivo");

const previewImagem =
    get("previewImagem");


//=========================================================
// TRATAR RESPOSTA DA API
//=========================================================

async function tratarResposta(resposta) {

    const texto =
        await resposta.text();


    let dados;


    try {

        dados =
            JSON.parse(texto);

    }
    catch (erro) {

        console.error(
            "Resposta recebida do servidor:",
            texto
        );


        throw new Error(
            "O servidor não retornou JSON válido."
        );

    }


    if (!resposta.ok) {

        throw new Error(
            dados.mensagem ||
            "Erro ao realizar operação."
        );

    }


    return dados;

}


//=========================================================
// MOSTRAR MENSAGEM
//=========================================================

function mostrarMensagem(
    id,
    mensagem,
    sucesso
) {

    const campo =
        get(id);


    if (!campo) {

        return;

    }


    campo.textContent =
        mensagem;


    if (sucesso) {

        campo.style.color =
            "green";

    }
    else {

        campo.style.color =
            "red";

    }

}


//=========================================================
// LISTAR MARCAS
//=========================================================

async function listarMarcas() {

    try {

        const resposta =
            await fetch(
                `${API}/marca`
            );


        const marcas =
            await tratarResposta(
                resposta
            );


        produtoMarca.innerHTML =
            "";


        const inicial =
            document.createElement(
                "option"
            );


        inicial.value =
            "";


        inicial.textContent =
            "Selecione uma marca";


        produtoMarca.appendChild(
            inicial
        );


        marcas.forEach(
            function (marca) {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    marca.idMarca;


                option.textContent =
                    marca.nome;


                produtoMarca.appendChild(
                    option
                );

            }
        );

    }
    catch (erro) {

        console.error(
            "Erro ao listar marcas:",
            erro
        );

    }

}


//=========================================================
// LISTAR CATEGORIAS
//=========================================================

async function listarCategorias() {

    try {

        const resposta =
            await fetch(
                `${API}/categoria`
            );


        const categorias =
            await tratarResposta(
                resposta
            );


        produtoCategoria.innerHTML =
            "";


        const inicial =
            document.createElement(
                "option"
            );


        inicial.value =
            "";


        inicial.textContent =
            "Selecione uma categoria";


        produtoCategoria.appendChild(
            inicial
        );


        categorias.forEach(
            function (categoria) {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    categoria.idCategoria;


                option.textContent =
                    categoria.nome;


                produtoCategoria.appendChild(
                    option
                );

            }
        );

    }
    catch (erro) {

        console.error(
            "Erro ao listar categorias:",
            erro
        );

    }

}


//=========================================================
// LISTAR CORES
//=========================================================

async function listarCores() {

    try {

        const resposta =
            await fetch(
                `${API}/cores`
            );


        const cores =
            await tratarResposta(
                resposta
            );


        produtoCores.innerHTML =
            "";


        cores.forEach(
            function (cor) {


                //=========================================
                // BOTÃO
                //=========================================

                const botao =
                    document.createElement(
                        "button"
                    );


                botao.type =
                    "button";


                botao.classList.add(
                    "cor-opcao"
                );


                botao.dataset.id =
                    cor.idCores;


                botao.dataset.selecionado =
                    "false";


                //=========================================
                // CÍRCULO DA COR
                //=========================================

                const circulo =
                    document.createElement(
                        "span"
                    );


                circulo.classList.add(
                    "circulo-cor"
                );


                circulo.style.backgroundColor =
                    cor.codigo_cor ||
                    "#CCCCCC";


                //=========================================
                // NOME
                //=========================================

                const nome =
                    document.createElement(
                        "span"
                    );


                nome.textContent =
                    cor.nome;


                //=========================================
                // MONTAR
                //=========================================

                botao.appendChild(
                    circulo
                );


                botao.appendChild(
                    nome
                );


                //=========================================
                // SELECIONAR
                //=========================================

                botao.addEventListener(
                    "click",
                    function () {


                        if (
                            botao.dataset.selecionado ===
                            "true"
                        ) {

                            botao.dataset.selecionado =
                                "false";


                            botao.classList.remove(
                                "selecionado"
                            );

                        }
                        else {

                            botao.dataset.selecionado =
                                "true";


                            botao.classList.add(
                                "selecionado"
                            );

                        }

                    }
                );


                produtoCores.appendChild(
                    botao
                );

            }
        );

    }
    catch (erro) {

        console.error(
            "Erro ao listar cores:",
            erro
        );

    }

}


//=========================================================
// LISTAR TAMANHOS
//=========================================================

async function listarTamanhos() {

    try {

        const resposta =
            await fetch(
                `${API}/tamanho`
            );


        const tamanhos =
            await tratarResposta(
                resposta
            );


        produtoTamanhos.innerHTML =
            "";


        tamanhos.forEach(
            function (tamanho) {


                const botao =
                    document.createElement(
                        "button"
                    );


                botao.type =
                    "button";


                botao.classList.add(
                    "tamanho-opcao"
                );


                botao.dataset.id =
                    tamanho.idTamanho;


                botao.dataset.selecionado =
                    "false";


                botao.textContent =
                    tamanho.tamanho;


                botao.addEventListener(
                    "click",
                    function () {


                        if (
                            botao.dataset.selecionado ===
                            "true"
                        ) {

                            botao.dataset.selecionado =
                                "false";


                            botao.classList.remove(
                                "selecionado"
                            );

                        }
                        else {

                            botao.dataset.selecionado =
                                "true";


                            botao.classList.add(
                                "selecionado"
                            );

                        }

                    }
                );


                produtoTamanhos.appendChild(
                    botao
                );

            }
        );

    }
    catch (erro) {

        console.error(
            "Erro ao listar tamanhos:",
            erro
        );

    }

}


//=========================================================
// PEGAR CORES SELECIONADAS
//=========================================================

function pegarCoresSelecionadas() {

    const botoes =
        document.querySelectorAll(
            ".cor-opcao.selecionado"
        );


    const cores =
        [];


    botoes.forEach(
        function (botao) {

            cores.push(
                Number(
                    botao.dataset.id
                )
            );

        }
    );


    return cores;

}


//=========================================================
// PEGAR TAMANHOS SELECIONADOS
//=========================================================

function pegarTamanhosSelecionados() {

    const botoes =
        document.querySelectorAll(
            ".tamanho-opcao.selecionado"
        );


    const tamanhos =
        [];


    botoes.forEach(
        function (botao) {

            tamanhos.push(
                Number(
                    botao.dataset.id
                )
            );

        }
    );


    return tamanhos;

}


//=========================================================
// LIMPAR SELEÇÕES
//=========================================================

function limparSelecoesProduto() {


    document
        .querySelectorAll(
            ".cor-opcao.selecionado"
        )
        .forEach(
            function (botao) {

                botao.classList.remove(
                    "selecionado"
                );


                botao.dataset.selecionado =
                    "false";

            }
        );


    document
        .querySelectorAll(
            ".tamanho-opcao.selecionado"
        )
        .forEach(
            function (botao) {

                botao.classList.remove(
                    "selecionado"
                );


                botao.dataset.selecionado =
                    "false";

            }
        );

}


//=========================================================
// CADASTRAR CATEGORIA
//=========================================================

get("btnCategoria")
    .addEventListener(
        "click",
        async function () {


            const campo =
                get("categoriaNome");


            const nome =
                campo.value.trim();


            if (nome === "") {

                mostrarMensagem(
                    "mensagemCategoria",
                    "Preencha o nome da categoria.",
                    false
                );

                return;

            }


            const categoria = {

                nome:
                    nome

            };


            try {

                const resposta =
                    await fetch(
                        `${API}/categoria`,
                        {

                            method:
                                "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(
                                    categoria
                                )

                        }
                    );


                const dados =
                    await tratarResposta(
                        resposta
                    );


                mostrarMensagem(
                    "mensagemCategoria",
                    dados.mensagem,
                    true
                );


                campo.value =
                    "";


                await listarCategorias();


                if (
                    dados.idCategoria
                ) {

                    produtoCategoria.value =
                        dados.idCategoria;

                }

            }
            catch (erro) {

                console.error(
                    erro
                );


                mostrarMensagem(
                    "mensagemCategoria",
                    erro.message,
                    false
                );

            }

        }
    );


//=========================================================
// CADASTRAR COR
//=========================================================

get("btnCor")
    .addEventListener(
        "click",
        async function () {


            const campoNome =
                get("corNome");


            const campoCodigo =
                get("corCodigo");


            const nome =
                campoNome.value.trim();


            


            if (nome === "") {

                mostrarMensagem(
                    "mensagemCor",
                    "Preencha o nome da cor.",
                    false
                );

                return;

            }


            if (codigo === "") {

                mostrarMensagem(
                    "mensagemCor",
                    "Preencha o código da cor.",
                    false
                );

                return;

            }


            if (
                !/^#[0-9A-Fa-f]{6}$/.test(
                    codigo
                )
            ) {

                mostrarMensagem(
                    "mensagemCor",
                    "Digite uma cor válida. Exemplo: #FF0000",
                    false
                );

                return;

            }


            const cor = {

                nome:
                    nome,

                codigo_cor:
                    codigo

            };


            try {

                const resposta =
                    await fetch(
                        `${API}/cores`,
                        {

                            method:
                                "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(
                                    cor
                                )

                        }
                    );


                const dados =
                    await tratarResposta(
                        resposta
                    );


                mostrarMensagem(
                    "mensagemCor",
                    dados.mensagem,
                    true
                );


                campoNome.value =
                    "";


                campoCodigo.value =
                    "";


                get("seletorCor").value =
                    "#000000";


                await listarCores();

            }
            catch (erro) {

                console.error(
                    erro
                );


                mostrarMensagem(
                    "mensagemCor",
                    erro.message,
                    false
                );

            }

        }
    );


//=========================================================
// SELETOR DE COR
//=========================================================

const seletorCor =
    get("seletorCor");


const campoCodigoCor =
    get("corCodigo");


seletorCor.addEventListener(
    "input",
    function () {

        campoCodigoCor.value =
            seletorCor.value;

    }
);


campoCodigoCor.addEventListener(
    "input",
    function () {


        if (
            /^#[0-9A-Fa-f]{6}$/.test(
                campoCodigoCor.value
            )
        ) {

            seletorCor.value =
                campoCodigoCor.value;

        }

    }
);


//=========================================================
// CADASTRAR TAMANHO
//=========================================================

get("btnTamanho")
    .addEventListener(
        "click",
        async function () {


            const campo =
                get("tamanhoNome");


            const tamanhoDigitado =
                campo.value
                    .trim()
                    .toUpperCase();


            if (
                tamanhoDigitado === ""
            ) {

                mostrarMensagem(
                    "mensagemTamanho",
                    "Preencha o tamanho.",
                    false
                );

                return;

            }


            const tamanho = {

                tamanho:
                    tamanhoDigitado

            };


            try {

                const resposta =
                    await fetch(
                        `${API}/tamanho`,
                        {

                            method:
                                "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(
                                    tamanho
                                )

                        }
                    );


                const dados =
                    await tratarResposta(
                        resposta
                    );


                mostrarMensagem(
                    "mensagemTamanho",
                    dados.mensagem,
                    true
                );


                campo.value =
                    "";


                await listarTamanhos();

            }
            catch (erro) {

                console.error(
                    erro
                );


                mostrarMensagem(
                    "mensagemTamanho",
                    erro.message,
                    false
                );

            }

        }
    );


//=========================================================
// PREVIEW DA MARCA
//=========================================================

get("marcaLogo")
    .addEventListener(
        "change",
        function () {


            const arquivo =
                this.files[0];


            const preview =
                get("previewMarca");


            preview.innerHTML =
                "";


            if (!arquivo) {

                return;

            }


            const imagem =
                document.createElement(
                    "img"
                );


            imagem.src =
                URL.createObjectURL(
                    arquivo
                );


            imagem.style.maxWidth =
                "150px";


            imagem.style.maxHeight =
                "100px";


            imagem.style.objectFit =
                "contain";


            preview.appendChild(
                imagem
            );

        }
    );


//=========================================================
// CADASTRAR MARCA
//=========================================================

get("btnMarca")
    .addEventListener(
        "click",
        async function () {


            const campoNome =
                get("marcaNome");


            const campoLogo =
                get("marcaLogo");


            const nome =
                campoNome.value.trim();


            const logo =
                campoLogo.files[0];


            if (nome === "") {

                mostrarMensagem(
                    "mensagemMarca",
                    "Preencha o nome da marca.",
                    false
                );

                return;

            }


            if (!logo) {

                mostrarMensagem(
                    "mensagemMarca",
                    "Selecione a logo da marca.",
                    false
                );

                return;

            }


            const formData =
                new FormData();


            formData.append(
                "nome",
                nome
            );


            formData.append(
                "logo",
                logo
            );


            try {

                const resposta =
                    await fetch(
                        `${API}/marca`,
                        {

                            method:
                                "POST",

                            body:
                                formData

                        }
                    );


                const dados =
                    await tratarResposta(
                        resposta
                    );


                mostrarMensagem(
                    "mensagemMarca",
                    dados.mensagem,
                    true
                );


                campoNome.value =
                    "";


                campoLogo.value =
                    "";


                get("previewMarca").innerHTML =
                    "";


                await listarMarcas();


                if (
                    dados.idMarca
                ) {

                    produtoMarca.value =
                        dados.idMarca;

                }

            }
            catch (erro) {

                console.error(
                    "Erro ao cadastrar marca:",
                    erro
                );


                mostrarMensagem(
                    "mensagemMarca",
                    erro.message,
                    false
                );

            }

        }
    );


//=========================================================
// CADASTRAR PRODUTO
//=========================================================

get("btnProduto")
    .addEventListener(
        "click",
        async function () {


            //=========================================
            // CAMPOS
            //=========================================

            const nome =
                produtoNome.value.trim();


            const descricao =
                produtoDescricao.value.trim();


            


            const preco =
                produtoPrecoAntigo.value;


            const precoPromocional =
                produtoPrecoPromo.value;


            const estoque =
                produtoEstoque.value;


            const marca =
                produtoMarca.value;


            const categoria =
                produtoCategoria.value;


            const status =
                produtoStatus.value;


            const cores =
                pegarCoresSelecionadas();


            const tamanhos =
                pegarTamanhosSelecionados();


            //=========================================
            // VALIDAÇÕES
            //=========================================

            if (nome === "") {

                mostrarMensagem(
                    "mensagemProduto",
                    "Preencha o nome do produto.",
                    false
                );

                return;

            }


            if (descricao === "") {

                mostrarMensagem(
                    "mensagemProduto",
                    "Preencha a descrição do produto.",
                    false
                );

                return;

            }


           



            if (
                preco === ""
            ) {

                mostrarMensagem(
                    "mensagemProduto",
                    "Preencha o preço.",
                    false
                );

                return;

            }


            if (
                Number(preco) < 0
            ) {

                mostrarMensagem(
                    "mensagemProduto",
                    "O preço não pode ser negativo.",
                    false
                );

                return;

            }


            if (
                estoque === ""
            ) {

                mostrarMensagem(
                    "mensagemProduto",
                    "Preencha o estoque.",
                    false
                );

                return;

            }


            if (
                Number(estoque) < 0
            ) {

                mostrarMensagem(
                    "mensagemProduto",
                    "O estoque não pode ser negativo.",
                    false
                );

                return;

            }


            if (marca === "") {

                mostrarMensagem(
                    "mensagemProduto",
                    "Selecione uma marca.",
                    false
                );

                return;

            }


            if (categoria === "") {

                mostrarMensagem(
                    "mensagemProduto",
                    "Selecione uma categoria.",
                    false
                );

                return;

            }


            if (
                cores.length === 0
            ) {

                mostrarMensagem(
                    "mensagemProduto",
                    "Selecione pelo menos uma cor.",
                    false
                );

                return;

            }


            if (
                tamanhos.length === 0
            ) {

                mostrarMensagem(
                    "mensagemProduto",
                    "Selecione pelo menos um tamanho.",
                    false
                );

                return;

            }


            //=========================================
            // OBJETO PRODUTO
            //=========================================

            const produto = {


                nome:
                    nome,


                descricao:
                    descricao,


          
                preco_antigo:
                    Number(
                        preco
                    ),


                preco_promocional:
                    precoPromocional === ""
                        ? null
                        : Number(
                            precoPromocional
                        ),


                quantidade_estoque:
                    Number(
                        estoque
                    ),


                //=====================================
                // CORRIGIDO
                //=====================================

                status_produto:
                    status === "true"
                        ? 1
                        : 0,


                Loja_idLoja:
                    ID_LOJA,


                Marca_idMarca:
                    Number(
                        marca
                    ),


                Categoria_idCategoria:
                    Number(
                        categoria
                    ),


                cores:
                    cores,


                tamanhos:
                    tamanhos

            };


            //=========================================
            // DEBUG
            //=========================================

            console.log(
                "======================================"
            );


            console.log(
                "PRODUTO QUE SERÁ ENVIADO:"
            );


            console.log(
                produto
            );


            console.log(
                "Nome:",
                produto.nome
            );


            console.log(
                "Descrição:",
                produto.descricao
            );


           


            console.log(
                "Preço:",
                produto.preco_antigo
            );


            console.log(
                "Preço promoção:",
                produto.preco_promocional
            );


            console.log(
                "Estoque:",
                produto.quantidade_estoque
            );


            console.log(
                "Status:",
                produto.status_produto
            );


            console.log(
                "Loja:",
                produto.Loja_idLoja
            );


            console.log(
                "Marca:",
                produto.Marca_idMarca
            );


            console.log(
                "Categoria:",
                produto.Categoria_idCategoria
            );


            console.log(
                "Cores:",
                produto.cores
            );


            console.log(
                "Tamanhos:",
                produto.tamanhos
            );


            console.log(
                "======================================"
            );


            //=========================================
            // ENVIAR PRODUTO
            //=========================================

            try {

                const resposta =
                    await fetch(
                        `${API}/produtos`,
                        {

                            method:
                                "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(
                                    produto
                                )

                        }
                    );


                const dados =
                    await tratarResposta(
                        resposta
                    );


                console.log(
                    "Resposta cadastro produto:",
                    dados
                );


                mostrarMensagem(
                    "mensagemProduto",
                    dados.mensagem,
                    true
                );


                //=========================================
                // ID DO PRODUTO CADASTRADO
                //=========================================

                const idProduto =
                    dados.idProduto;


                //=========================================
                // LIMPAR
                //=========================================

                produtoNome.value =
                    "";


                produtoDescricao.value =
                    "";


               


                produtoPrecoAntigo.value =
                    "";


                produtoPrecoPromo.value =
                    "";


                produtoEstoque.value =
                    "";


                produtoMarca.value =
                    "";


                produtoCategoria.value =
                    "";


                produtoStatus.value =
                    "true";


                limparSelecoesProduto();


                //=========================================
                // ATUALIZAR LISTA DA IMAGEM
                //=========================================

                await listarProdutosImagem();


                //=========================================
                // SELECIONAR PRODUTO NOVO
                //=========================================

                if (idProduto) {

                    imagemProduto.value =
                        idProduto;

                }

            }
            catch (erro) {

                console.error(
                    "Erro ao cadastrar produto:",
                    erro
                );


                mostrarMensagem(
                    "mensagemProduto",
                    erro.message,
                    false
                );

            }

        }
    );


//=========================================================
// LISTAR PRODUTOS PARA IMAGEM
//=========================================================

async function listarProdutosImagem() {

    try {

        const resposta =
            await fetch(
                `${API}/produtos`
            );


        const produtos =
            await tratarResposta(
                resposta
            );


        imagemProduto.innerHTML =
            "";


        const inicial =
            document.createElement(
                "option"
            );


        inicial.value =
            "";


        inicial.textContent =
            "Selecione um produto";


        imagemProduto.appendChild(
            inicial
        );


        produtos.forEach(
            function (produto) {


                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    produto.idProduto;


                option.textContent =
                    produto.nome;


                imagemProduto.appendChild(
                    option
                );

            }
        );

    }
    catch (erro) {

        console.error(
            "Erro ao listar produtos:",
            erro
        );

    }

}


//=========================================================
// PREVIEW DA IMAGEM DO PRODUTO
//=========================================================

imagemArquivo.addEventListener(
    "change",
    function () {


        const arquivo =
            this.files[0];


        previewImagem.innerHTML =
            "";


        if (!arquivo) {

            return;

        }


        if (
            !arquivo.type.startsWith(
                "image/"
            )
        ) {

            mostrarMensagem(
                "mensagemImagem",
                "Selecione uma imagem válida.",
                false
            );


            this.value =
                "";


            return;

        }


        const imagem =
            document.createElement(
                "img"
            );


        imagem.src =
            URL.createObjectURL(
                arquivo
            );


        imagem.style.maxWidth =
            "200px";


        imagem.style.maxHeight =
            "200px";


        imagem.style.objectFit =
            "contain";


        previewImagem.appendChild(
            imagem
        );

    }
);


//=========================================================
// CONVERTER ARQUIVO PARA BASE64
//=========================================================

function converterArquivoParaBase64(
    arquivo
) {

    return new Promise(

        function (
            resolve,
            reject
        ) {


            const leitor =
                new FileReader();


            leitor.onload =
                function () {

                    resolve(
                        leitor.result
                    );

                };


            leitor.onerror =
                function () {

                    reject(
                        new Error(
                            "Erro ao ler a imagem."
                        )
                    );

                };


            leitor.readAsDataURL(
                arquivo
            );

        }

    );

}


//=========================================================
// CADASTRAR IMAGEM
//=========================================================

get("btnImagem")
    .addEventListener(
        "click",
        async function () {


            const idProduto =
                imagemProduto.value;


            const arquivo =
                imagemArquivo.files[0];


            //=========================================
            // VALIDAR
            //=========================================

            if (
                idProduto === ""
            ) {

                mostrarMensagem(
                    "mensagemImagem",
                    "Selecione o produto.",
                    false
                );

                return;

            }


            if (!arquivo) {

                mostrarMensagem(
                    "mensagemImagem",
                    "Selecione uma imagem.",
                    false
                );

                return;

            }


            if (
                !arquivo.type.startsWith(
                    "image/"
                )
            ) {

                mostrarMensagem(
                    "mensagemImagem",
                    "Selecione uma imagem válida.",
                    false
                );

                return;

            }


            // Máximo 5 MB
            if (
                arquivo.size >
                5 * 1024 * 1024
            ) {

                mostrarMensagem(
                    "mensagemImagem",
                    "A imagem deve possuir no máximo 5 MB.",
                    false
                );

                return;

            }


            try {


                //=========================================
                // CONVERTER
                //=========================================

                const arquivoBase64 =
                    await converterArquivoParaBase64(
                        arquivo
                    );


                //=========================================
                // OBJETO
                //=========================================

                const imagem = {

                    arquivo:
                        arquivoBase64,

                    Produto_idProduto:
                        Number(
                            idProduto
                        )

                };


                console.log(
                    "IMAGEM QUE SERÁ ENVIADA:"
                );


                console.log(
                    "Produto:",
                    imagem.Produto_idProduto
                );


                console.log(
                    "Arquivo recebido:",
                    !!imagem.arquivo
                );


                //=========================================
                // ENVIAR
                //=========================================

                const resposta =
                    await fetch(
                        `${API}/imagens-produto`,
                        {

                            method:
                                "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(
                                    imagem
                                )

                        }
                    );


                const dados =
                    await tratarResposta(
                        resposta
                    );


                mostrarMensagem(
                    "mensagemImagem",
                    dados.mensagem,
                    true
                );


                //=========================================
                // LIMPAR
                //=========================================

                imagemArquivo.value =
                    "";


                previewImagem.innerHTML =
                    "";

            }
            catch (erro) {

                console.error(
                    "Erro ao cadastrar imagem:",
                    erro
                );


                mostrarMensagem(
                    "mensagemImagem",
                    erro.message,
                    false
                );

            }

        }
    );


//=========================================================
// CARREGAR DADOS DA PÁGINA
//=========================================================

document.addEventListener(
    "DOMContentLoaded",
    async function () {


        console.log(
            "Cadastro de produtos carregado."
        );


        //=========================================
        // DADOS VISUAIS
        //=========================================

        if (
            get("logoAdminImagem")
        ) {

            get(
                "logoAdminImagem"
            ).src =
                "../assets/logo.png";

        }


        if (
            get("logoAdminTexto")
        ) {

            get(
                "logoAdminTexto"
            ).textContent =
                "Fanáticos Sports";

        }


        if (
            get("tituloPagina")
        ) {

            get(
                "tituloPagina"
            ).textContent =
                "Cadastro de Produto";

        }


        if (
            get("nomeAdmin")
        ) {

            get(
                "nomeAdmin"
            ).textContent =
                "Arthur";

        }


        if (
            get("cargoAdmin")
        ) {

            get(
                "cargoAdmin"
            ).textContent =
                "Administrador";

        }


        //=========================================
        // MENU
        //=========================================

        if (get("menuDashboardTexto")) {

            get(
                "menuDashboardTexto"
            ).textContent =
                "Dashboard";

        }


        if (get("menuProdutosTexto")) {

            get(
                "menuProdutosTexto"
            ).textContent =
                "Produtos";

        }


        if (
            get(
                "menuCadastrarProdutoTexto"
            )
        ) {

            get(
                "menuCadastrarProdutoTexto"
            ).textContent =
                "Cadastrar Produto";

        }


        if (get("menuCategoriasTexto")) {

            get(
                "menuCategoriasTexto"
            ).textContent =
                "Categorias";

        }


        if (get("menuPedidosTexto")) {

            get(
                "menuPedidosTexto"
            ).textContent =
                "Pedidos";

        }


        if (get("menuClientesTexto")) {

            get(
                "menuClientesTexto"
            ).textContent =
                "Clientes";

        }


        if (get("menuEstoqueTexto")) {

            get(
                "menuEstoqueTexto"
            ).textContent =
                "Estoque";

        }


        if (get("menuRelatoriosTexto")) {

            get(
                "menuRelatoriosTexto"
            ).textContent =
                "Relatórios";

        }


        if (
            get(
                "menuConfiguracoesTexto"
            )
        ) {

            get(
                "menuConfiguracoesTexto"
            ).textContent =
                "Configurações";

        }


        if (get("menuSairTexto")) {

            get(
                "menuSairTexto"
            ).textContent =
                "Sair";

        }


        //=========================================
        // CARREGAR BANCO
        //=========================================

        await listarMarcas();

        await listarCategorias();

        await listarCores();

        await listarTamanhos();

        await listarProdutosImagem();

    }
);