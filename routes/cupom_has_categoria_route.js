const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos cupons e produtos.

const CupomHasProdutoController = require("../controller/cupom_has_produto_controller.js");

router.post("/", CupomHasProdutoController.cadastrar);

router.get("/", CupomHasProdutoController.listar);

router.get("/:id", CupomHasProdutoController.buscarPorId);

router.put("/:id", CupomHasProdutoController.atualizar);

router.delete("/:id", CupomHasProdutoController.excluir);

module.exports = router;