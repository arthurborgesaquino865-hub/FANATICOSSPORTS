/*=========================================================
    CADASTRO DE PRODUTO
=========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*=========================================================
        LOGO
    =========================================================*/

    document.getElementById("logoAdminImagem").src =
        "../assets/logo.png";

    document.getElementById("logoAdminTexto").textContent =
        "Fanáticos Sports";

    /*=========================================================
        TOPBAR
    =========================================================*/

    document.getElementById("tituloPagina").textContent =
        "Cadastro de Produto";

    document.getElementById("txtPesquisar").placeholder =
        "Pesquisar...";

    document.getElementById("fotoPerfilAdmin").src =
        "../assets/admin.png";

    document.getElementById("nomeAdmin").textContent =
        "Arthur";

    document.getElementById("cargoAdmin").textContent =
        "Administrador";

    /*=========================================================
        MENU
    =========================================================*/

    document.getElementById("menuDashboardTexto").textContent =
        "Dashboard";

    document.getElementById("menuProdutosTexto").textContent =
        "Produtos";

    document.getElementById("menuCadastrarProdutoTexto").textContent =
        "Cadastrar Produto";

    document.getElementById("menuCategoriasTexto").textContent =
        "Categorias";

    document.getElementById("menuPedidosTexto").textContent =
        "Pedidos";

    document.getElementById("menuClientesTexto").textContent =
        "Clientes";

    document.getElementById("menuEstoqueTexto").textContent =
        "Estoque";

    document.getElementById("menuRelatoriosTexto").textContent =
        "Relatórios";

    document.getElementById("menuConfiguracoesTexto").textContent =
        "Configurações";

    document.getElementById("menuSairTexto").textContent =
        "Sair";

    /*=========================================================
        CABEÇALHO
    =========================================================*/

    document.getElementById("tituloCadastro").textContent =
        "Cadastrar Novo Produto";

    document.getElementById("subtituloCadastro").textContent =
        "Preencha todas as informações para adicionar um novo produto ao catálogo.";

    document.getElementById("tituloInformacoesBasicas").textContent =
        "Informações Básicas";

    /*=========================================================
        LABELS
    =========================================================*/

    document.getElementById("lblImagemProduto").textContent =
        "Imagem Principal";

    document.getElementById("lblNomeProduto").textContent =
        "Nome do Produto";

    document.getElementById("lblMarcaProduto").textContent =
        "Marca";

    document.getElementById("lblCategoriaProduto").textContent =
        "Categoria";

    document.getElementById("lblSkuProduto").textContent =
        "SKU";

    document.getElementById("lblQuantidadeProduto").textContent =
        "Quantidade";

    document.getElementById("lblPrecoProduto").textContent =
        "Preço";

    document.getElementById("lblPrecoPromocional").textContent =
        "Preço Promocional";

    document.getElementById("lblStatusProduto").textContent =
        "Status";

    document.getElementById("lblTamanhosProduto").textContent =
        "Tamanhos";

    document.getElementById("lblCoresProduto").textContent =
        "Cores";

    /*=========================================================
        PLACEHOLDERS
    =========================================================*/

    document.getElementById("nomeProduto").placeholder =
        "Digite o nome do produto";

    document.getElementById("marcaProduto").placeholder =
        "Digite a marca";

    document.getElementById("skuProduto").placeholder =
        "Ex.: CAM-001";

    document.getElementById("quantidadeProduto").placeholder =
        "0";

    document.getElementById("precoProduto").placeholder =
        "0,00";

    document.getElementById("precoPromocional").placeholder =
        "0,00";

    document.getElementById("coresProduto").placeholder =
        "Ex.: Azul, Branco e Preto";

            /*=========================================================
        SELECT - CATEGORIAS
    =========================================================*/

    const categorias = [

        "Selecione uma categoria",

        "Camisas de Clubes",

        "Camisas de Seleções",

        "Chuteiras",

        "Bolas",

        "Calções",

        "Meiões",

        "Agasalhos",

        "Acessórios"

    ];

    categorias.forEach(function(item, indice){

        const option = document.createElement("option");

        option.textContent = item;

        option.value = indice === 0 ? "" : item;

        document
            .getElementById("categoriaProduto")
            .appendChild(option);

    });

    /*=========================================================
        SELECT - STATUS
    =========================================================*/

    const statusProduto = [

        "Ativo",

        "Inativo"

    ];

    statusProduto.forEach(function(item){

        const option = document.createElement("option");

        option.textContent = item;

        option.value = item;

        document
            .getElementById("statusProduto")
            .appendChild(option);

    });

    /*=========================================================
        GALERIA
    =========================================================*/

    document.getElementById("tituloGaleria").textContent =
        "Galeria de Imagens";

    document.getElementById("previewImagem1").alt =
        "Imagem Principal";

    document.getElementById("previewImagem2").alt =
        "Imagem 2";

    document.getElementById("previewImagem3").alt =
        "Imagem 3";

    document.getElementById("previewImagem4").alt =
        "Imagem 4";

    /*=========================================================
        DESCRIÇÃO
    =========================================================*/

    document.getElementById("tituloDescricao").textContent =
        "Descrição do Produto";

    document.getElementById("lblDescricaoCurta").textContent =
        "Descrição Curta";

    document.getElementById("lblDescricaoCompleta").textContent =
        "Descrição Completa";

    document.getElementById("descricaoCurta").placeholder =
        "Digite uma descrição resumida do produto.";

    document.getElementById("descricaoCompleta").placeholder =
        "Digite uma descrição completa com todas as informações do produto.";

    /*=========================================================
        BOTÕES
    =========================================================*/

    document.getElementById("txtBtnCancelar").textContent =
        "Cancelar";

    document.getElementById("txtBtnLimpar").textContent =
        "Limpar";

    document.getElementById("txtBtnSalvar").textContent =
        "Salvar Produto";

    /*=========================================================
        FOOTER
    =========================================================*/

    document.getElementById("footerTexto").textContent =
        "© 2026 Fanáticos Sports - Todos os direitos reservados.";

    document.getElementById("footerVersao").textContent =
        "Versão 1.0.0";

            /*=========================================================
        PREVIEW DAS IMAGENS
    =========================================================*/

    function carregarPreview(inputId, imagemId){

        const input = document.getElementById(inputId);

        const imagem = document.getElementById(imagemId);

        input.addEventListener("change", function(){

            const arquivo = this.files[0];

            if(!arquivo){

                imagem.removeAttribute("src");

                return;

            }

            const leitor = new FileReader();

            leitor.onload = function(evento){

                imagem.src = evento.target.result;

            };

            leitor.readAsDataURL(arquivo);

        });

    }

    carregarPreview("imagem1", "previewImagem1");

    carregarPreview("imagem2", "previewImagem2");

    carregarPreview("imagem3", "previewImagem3");

    carregarPreview("imagem4", "previewImagem4");

    carregarPreview("imagemProduto", "previewImagem1");



    /*=========================================================
        MENU MOBILE
    =========================================================*/

    const btnMenu = document.getElementById("btnMenuMobile");

    const sidebar = document.getElementById("sidebar");

    if(btnMenu){

        btnMenu.addEventListener("click", function(){

            sidebar.classList.toggle("ativo");

        });

    }



    /*=========================================================
        BOTÃO LIMPAR
    =========================================================*/

    document.getElementById("btnLimparProduto")
    .addEventListener("click", function(){

        document.getElementById("nomeProduto").value = "";

        document.getElementById("marcaProduto").value = "";

        document.getElementById("categoriaProduto").selectedIndex = 0;

        document.getElementById("skuProduto").value = "";

        document.getElementById("quantidadeProduto").value = "";

        document.getElementById("precoProduto").value = "";

        document.getElementById("precoPromocional").value = "";

        document.getElementById("statusProduto").selectedIndex = 0;

        document.getElementById("coresProduto").value = "";

        document.getElementById("descricaoCurta").value = "";

        document.getElementById("descricaoCompleta").value = "";

    });



    /*=========================================================
        BOTÃO CANCELAR
    =========================================================*/

    document.getElementById("btnCancelarProduto")
    .addEventListener("click", function(){

        if(confirm("Deseja cancelar o cadastro do produto?")){

            window.location.href = "produtos-lojista.html";

        }

    });



    /*=========================================================
        BOTÃO SALVAR
    =========================================================*/

    document.getElementById("btnSalvarProduto")
    .addEventListener("click", function(){

        if(document.getElementById("nomeProduto").value.trim() === ""){

            alert("Informe o nome do produto.");

            document.getElementById("nomeProduto").focus();

            return;

        }

        alert("Produto salvo com sucesso!");

    });

});

