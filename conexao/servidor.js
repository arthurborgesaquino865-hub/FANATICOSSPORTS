const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//importar a conexao com o banco de dados
const conexao = require("./conexao.js");

//criar uma rota para testar a conexao com o
//banco de dados

const clientesRotas = require("..routes/cliente_rotas.js");
app.use("/clientes", clientesRotas);

const avaliacaoProdutoRotas = require("../routes/avaliacao_produto_rotas.js");
app.use("/avaliacao_produto", avaliacaoProdutoRotas);

const bannerRotas = require("../routes/banner_rotas.js");
app.use("/banner", bannerRotas);



const carrinhoRotas = require("../routes/carrinho_route.js");
app.use("/carrinho", carrinhoRotas);

const cartaoPagamentoRotas = require("../routes/cartao_pagamento_rotas.js");
app.use("/cartao_pagamento", cartaoPagamentoRotas);

const categoriaRotas = require("../routes/categoria_rotas.js");
app.use("/categoria", categoriaRotas);

const coresRotas = require("../routes/cores_rotas.js");
app.use("/cores", coresRotas);

const cupomRotas = require("../routes/cupom_rotas.js");
app.use("/cupom", cupomRotas);

const enderecoRotas = require("../routes/endereco_rotas.js");
app.use("/endereco", enderecoRotas);

const freteRotas = require("../routes/frete_rotas.js");
app.use("/frete", freteRotas);

const marcaRotas = require("../routes/marca_rotas.js");
app.use("/marca", marcaRotas);

const pedidosRotas = require("../routes/pedidos_rotas.js");
app.use("/pedidos", pedidosRotas);

const promocaoRotas = require("../routes/promocao_rotas.js");
app.use("/promocao", promocaoRotas);

const tamanhoRotas = require("../routes/tamanho_rotas.js");
app.use("/tamanho", tamanhoRotas);

const bannerHasProdutoRotas = require("../routes/banner_has_produto_rotas.js");
app.use("/banner_has_produto", bannerHasProdutoRotas);

const carrinhoHasProdutoRotas = require("../routes/carrinho_has_produto_rotas.js");
app.use("/carrinho_has_produto", carrinhoHasProdutoRotas);

const categoriaHasProdutoRotas = require("../routes/categoria_has_produto_rotas.js");
app.use("/categoria_has_produto", categoriaHasProdutoRotas);

const categoriaHasPromocaoRotas = require("../routes/categoria_has_promocao_rotas.js");
app.use("/categoria_has_promocao", categoriaHasPromocaoRotas);

const coresHasProdutoRotas = require("../routes/cores_has_produto_rotas.js");
app.use("/cores_has_produto", coresHasProdutoRotas);

const cupomHasCategoriaHasProdutoRotas = require("../routes/cupom_has_categoria_has_produto_rotas.js");
app.use("/cupom_has_categoria_has_produto", cupomHasCategoriaHasProdutoRotas);

const cupomHasCategoriaRotas = require("../routes/cupom_has_categoria_rotas.js");
app.use("/cupom_has_categoria", cupomHasCategoriaRotas);

const enderecoHasClienteRotas = require("../routes/endereco_has_cliente_rotas.js");
app.use("/endereco_has_cliente", enderecoHasClienteRotas);

const pedidosHasProdutoRotas = require("../routes/pedidos_has_produto_rotas.js");
app.use("/pedidos_has_produto", pedidosHasProdutoRotas);

const promocaoHasProdutoRotas = require("../routes/promocao_has_produto_rotas.js");
app.use("/promocao_has_produto", promocaoHasProdutoRotas);

const tamanhoHasProdutoRotas = require("../routes/tamanho_has_produto_rotas.js");
app.use("/tamanho_has_produto", tamanhoHasProdutoRotas);

    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    })


    
