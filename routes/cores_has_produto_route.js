const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às cores e produtos.

const CoresHasProdutoController = require("../controller/cores_has_produto_controller.js");

router.post("/", CoresHasProdutoController.cadastrar);

router.get("/", CoresHasProdutoController.listar);

router.get("/:id", CoresHasProdutoController.buscarPorId);

router.put("/:id", CoresHasProdutoController.atualizar);

router.delete("/:id", CoresHasProdutoController.excluir);

module.exports = router;