const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos carrinhos e produtos.

const CarrinhoHasProdutoController = require("../controller/carrinho_has_produto_controller.js");

router.post("/", CarrinhoHasProdutoController.cadastrar);

router.get("/", CarrinhoHasProdutoController.listar);

router.get("/:id", CarrinhoHasProdutoController.buscarPorId);

router.put("/:id", CarrinhoHasProdutoController.atualizar);

router.delete("/:id", CarrinhoHasProdutoController.excluir);

module.exports = router;