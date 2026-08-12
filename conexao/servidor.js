//=====================================================
// IMPORTAÇÕES
//=====================================================

const express = require("express");

const cors = require("cors");


//=====================================================
// CRIAR SERVIDOR
//=====================================================

const app = express();


//=====================================================
// MIDDLEWARES
//=====================================================

app.use(cors());


// O limite foi aumentado porque as imagens
// serão enviadas em Base64 pelo JavaScript
app.use(
    express.json({
        limit: "10mb"
    })
);


//=====================================================
// CONEXÃO COM BANCO DE DADOS
//=====================================================

const conexao =
    require("./conexao.js");


//=====================================================
// ROTAS
//=====================================================


//=====================================================
// CLIENTE
//=====================================================

const clientesRotas =
    require(
        "../routes/cliente_route.js"
    );

app.use(
    "/clientes",
    clientesRotas
);


//=====================================================
// AVALIAÇÃO PRODUTO
//=====================================================

const avaliacaoProdutoRotas =
    require(
        "../routes/avaliacao_produto_route.js"
    );

app.use(
    "/avaliacao_produto",
    avaliacaoProdutoRotas
);


//=====================================================
// BANNER
//=====================================================

const bannerRotas =
    require(
        "../routes/banner_route.js"
    );

app.use(
    "/banner",
    bannerRotas
);


//=====================================================
// CARRINHO
//=====================================================

const carrinhoRotas =
    require(
        "../routes/carrinho_route.js"
    );

app.use(
    "/carrinho",
    carrinhoRotas
);


//=====================================================
// CARTÃO DE PAGAMENTO
//=====================================================

const cartaoPagamentoRotas =
    require(
        "../routes/cartao_pagamento_route.js"
    );

app.use(
    "/cartao_pagamento",
    cartaoPagamentoRotas
);


//=====================================================
// CATEGORIA
//=====================================================

const categoriaRotas =
    require(
        "../routes/categoria_route.js"
    );

app.use(
    "/categoria",
    categoriaRotas
);


//=====================================================
// CORES
//=====================================================

const coresRotas =
    require(
        "../routes/cores_route.js"
    );

app.use(
    "/cores",
    coresRotas
);


//=====================================================
// CUPOM
//=====================================================

const cupomRotas =
    require(
        "../routes/cupom_route.js"
    );

app.use(
    "/cupom",
    cupomRotas
);


//=====================================================
// ENDEREÇO
//=====================================================

const enderecoRotas =
    require(
        "../routes/endereco_route.js"
    );

app.use(
    "/endereco",
    enderecoRotas
);


//=====================================================
// FRETE
//=====================================================

const freteRotas =
    require(
        "../routes/frete_route.js"
    );

app.use(
    "/frete",
    freteRotas
);


//=====================================================
// MARCA
//=====================================================

const marcaRotas =
    require(
        "../routes/marca_route.js"
    );

app.use(
    "/marca",
    marcaRotas
);


//=====================================================
// PEDIDOS
//=====================================================

const pedidosRotas =
    require(
        "../routes/pedidos_route.js"
    );

app.use(
    "/pedidos",
    pedidosRotas
);


//=====================================================
// PROMOÇÃO
//=====================================================

const promocaoRotas =
    require(
        "../routes/promocao_route.js"
    );

app.use(
    "/promocao",
    promocaoRotas
);


//=====================================================
// TAMANHO
//=====================================================

const tamanhoRotas =
    require(
        "../routes/tamanho_route.js"
    );

app.use(
    "/tamanho",
    tamanhoRotas
);


//=====================================================
// BANNER X PRODUTO
//=====================================================

const bannerHasProdutoRotas =
    require(
        "../routes/banner_has_produto_route.js"
    );

app.use(
    "/banner_has_produto",
    bannerHasProdutoRotas
);


//=====================================================
// CARRINHO X PRODUTO
//=====================================================

const carrinhoHasProdutoRotas =
    require(
        "../routes/carrinho_has_produto_route.js"
    );

app.use(
    "/carrinho_has_produto",
    carrinhoHasProdutoRotas
);


//=====================================================
// CATEGORIA X PRODUTO
//=====================================================

const categoriaHasProdutoRotas =
    require(
        "../routes/categoria_has_produto_route.js"
    );

app.use(
    "/categoria_has_produto",
    categoriaHasProdutoRotas
);


//=====================================================
// CATEGORIA X PROMOÇÃO
//=====================================================

const categoriaHasPromocaoRotas =
    require(
        "../routes/categoria_has_promocao_route.js"
    );

app.use(
    "/categoria_has_promocao",
    categoriaHasPromocaoRotas
);


//=====================================================
// CORES X PRODUTO
//=====================================================

const coresHasProdutoRotas =
    require(
        "../routes/cores_has_produto_route.js"
    );

app.use(
    "/cores_has_produto",
    coresHasProdutoRotas
);


//=====================================================
// CUPOM X CATEGORIA X PRODUTO
//=====================================================

const cupomHasCategoriaHasProdutoRotas =
    require(
        "../routes/cupom_has_categoria_has_produto_route.js"
    );

app.use(
    "/cupom_has_categoria_has_produto",
    cupomHasCategoriaHasProdutoRotas
);


//=====================================================
// CUPOM X PRODUTO
//=====================================================

const cupomHasProdutoRotas =
    require(
        "../routes/cupom_has_produto_route.js"
    );

app.use(
    "/cupom_has_produto",
    cupomHasProdutoRotas
);


//=====================================================
// CUPOM X CATEGORIA
//=====================================================

const cupomHasCategoriaRotas =
    require(
        "../routes/cupom_has_categoria_route.js"
    );

app.use(
    "/cupom_has_categoria",
    cupomHasCategoriaRotas
);


//=====================================================
// ENDEREÇO X CLIENTE
//=====================================================

const enderecoHasClienteRotas =
    require(
        "../routes/endereco_has_cliente_route.js"
    );

app.use(
    "/endereco_has_cliente",
    enderecoHasClienteRotas
);


//=====================================================
// PEDIDOS X PRODUTO
//=====================================================

const pedidosHasProdutoRotas =
    require(
        "../routes/pedidos_has_produto_route.js"
    );

app.use(
    "/pedidos_has_produto",
    pedidosHasProdutoRotas
);


//=====================================================
// PROMOÇÃO X PRODUTO
//=====================================================

const promocaoHasProdutoRotas =
    require(
        "../routes/promocao_has_produto_route.js"
    );

app.use(
    "/promocao_has_produto",
    promocaoHasProdutoRotas
);


//=====================================================
// TAMANHO X PRODUTO
//=====================================================

const tamanhoHasProdutoRotas =
    require(
        "../routes/tamanho_has_produto_route.js"
    );

app.use(
    "/tamanho_has_produto",
    tamanhoHasProdutoRotas
);


//=====================================================
// PRODUTO
//=====================================================

const produtoRoute =
    require(
        "../routes/produto_route.js"
    );

app.use(
    "/produtos",
    produtoRoute
);


//=====================================================
// IMAGEM DO PRODUTO
//=====================================================

const imagemProdutoRoute =
    require(
        "../routes/imagem_produto_route.js"
    );

app.use(
    "/imagens-produto",
    imagemProdutoRoute
);


//=====================================================
// INICIAR SERVIDOR
//=====================================================

app.listen(
    3000,
    () => {

        console.log(
            "Servidor rodando na porta 3000"
        );

        console.log(
            "http://localhost:3000"
        );

    }
);