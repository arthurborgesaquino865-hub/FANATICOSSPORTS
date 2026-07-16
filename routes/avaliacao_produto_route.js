const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às avaliações de produtos.

const AvaliacaoProdutoController = require("../controller/avaliacao_produto_controller.js");

router.post("/", AvaliacaoProdutoController.cadastrar);

router.get("/", AvaliacaoProdutoController.listar);

router.get("/:id", AvaliacaoProdutoController.buscarPorId);

router.put("/:id", AvaliacaoProdutoController.atualizar);

router.delete("/:id", AvaliacaoProdutoController.excluir);

module.exports = router;