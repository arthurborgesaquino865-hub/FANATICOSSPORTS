const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Importar conexão com o banco de dados
const conexao = require("./conexao.js");

// ==================== ROTAS ====================

// Cliente
const clientesRotas = require("../routes/cliente_route.js");
app.use("/clientes", clientesRotas);

// Avaliação Produto
const avaliacaoProdutoRotas = require("../routes/avaliacao_produto_route.js");
app.use("/avaliacao_produto", avaliacaoProdutoRotas);

// Banner
const bannerRotas = require("../routes/banner_route.js");
app.use("/banner", bannerRotas);

// Carrinho
const carrinhoRotas = require("../routes/carrinho_route.js");
app.use("/carrinho", carrinhoRotas);

// Cartão de Pagamento
const cartaoPagamentoRotas = require("../routes/cartao_pagamento_route.js");
app.use("/cartao_pagamento", cartaoPagamentoRotas);

// Categoria
const categoriaRotas = require("../routes/categoria_route.js");
app.use("/categoria", categoriaRotas);

// Cores
const coresRotas = require("../routes/cores_route.js");
app.use("/cores", coresRotas);

// Cupom
const cupomRotas = require("../routes/cupom_route.js");
app.use("/cupom", cupomRotas);

// Endereço
const enderecoRotas = require("../routes/endereco_route.js");
app.use("/endereco", enderecoRotas);

// Frete
const freteRotas = require("../routes/frete_route.js");
app.use("/frete", freteRotas);

// Marca
const marcaRotas = require("../routes/marca_route.js");
app.use("/marca", marcaRotas);

// Pedidos
const pedidosRotas = require("../routes/pedidos_route.js");
app.use("/pedidos", pedidosRotas);

// Promoção
const promocaoRotas = require("../routes/promocao_route.js");
app.use("/promocao", promocaoRotas);

// Tamanho
const tamanhoRotas = require("../routes/tamanho_route.js");
app.use("/tamanho", tamanhoRotas);

// Banner x Produto
const bannerHasProdutoRotas = require("../routes/banner_has_produto_route.js");
app.use("/banner_has_produto", bannerHasProdutoRotas);

// Carrinho x Produto
const carrinhoHasProdutoRotas = require("../routes/carrinho_has_produto_route.js");
app.use("/carrinho_has_produto", carrinhoHasProdutoRotas);

// Categoria x Produto
const categoriaHasProdutoRotas = require("../routes/categoria_has_produto_route.js");
app.use("/categoria_has_produto", categoriaHasProdutoRotas);

// Categoria x Promoção
const categoriaHasPromocaoRotas = require("../routes/categoria_has_promocao_route.js");
app.use("/categoria_has_promocao", categoriaHasPromocaoRotas);

// Cores x Produto
const coresHasProdutoRotas = require("../routes/cores_has_produto_route.js");
app.use("/cores_has_produto", coresHasProdutoRotas);

// Cupom x Categoria x Produto
const cupomHasCategoriaHasProdutoRotas = require("../routes/cupom_has_categoria_has_produto_route.js");
app.use("/cupom_has_categoria_has_produto", cupomHasCategoriaHasProdutoRotas);

const cupomHasProdutoRotas = require("../routes/cupom_has_produto_route.js");
app.use("/cupom_has_produto", cupomHasProdutoRotas);

// Cupom x Categoria
const cupomHasCategoriaRotas = require("../routes/cupom_has_categoria_route.js");
app.use("/cupom_has_categoria", cupomHasCategoriaRotas);

// Endereço x Cliente
const enderecoHasClienteRotas = require("../routes/endereco_has_cliente_route.js");
app.use("/endereco_has_cliente", enderecoHasClienteRotas);

// Pedidos x Produto
const pedidosHasProdutoRotas = require("../routes/pedidos_has_produto_route.js");
app.use("/pedidos_has_produto", pedidosHasProdutoRotas);

// Promoção x Produto
const promocaoHasProdutoRotas = require("../routes/promocao_has_produto_route.js");
app.use("/promocao_has_produto", promocaoHasProdutoRotas);

// Tamanho x Produto
const tamanhoHasProdutoRotas = require("../routes/tamanho_has_produto_route.js");
app.use("/tamanho_has_produto", tamanhoHasProdutoRotas);

const produtoRoute = require("../routes/produto_route.js");
app.use(
    "/produtos",
    produtoRoute
);

const imagem_has_produto_route =
require("../routes/imagem_has_produto_route.js");
app.use(
    "/imagem_has_produto",
    imagem_has_produto_route
);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});