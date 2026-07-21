const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos carrinhos.

const CarrinhoController = require("../controller/carrinho_controller.js");

router.post("/", CarrinhoController.cadastrar);

router.get("/", CarrinhoController.listar);

router.get("/:id", CarrinhoController.buscarPorId);

router.put("/:id", CarrinhoController.atualizar);

router.delete("/:id", CarrinhoController.excluir);

module.exports = router;