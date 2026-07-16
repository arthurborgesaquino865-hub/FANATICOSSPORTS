const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às promoções e produtos.

const PromocaoHasProdutoController = require("../controller/promocao_has_produto_controller.js");

router.post("/", PromocaoHasProdutoController.cadastrar);

router.get("/", PromocaoHasProdutoController.listar);

router.get("/:id", PromocaoHasProdutoController.buscarPorId);

router.put("/:id", PromocaoHasProdutoController.atualizar);

router.delete("/:id", PromocaoHasProdutoController.excluir);

module.exports = router;