const express = require("express");

const router = express.Router();

const CoresHasProdutoController = require("../controller/cores_has_produto_controller.js");

// Cadastrar
router.post("/", CoresHasProdutoController.cadastrar);

// Listar
router.get("/", CoresHasProdutoController.listar);

// Buscar por ID
router.get("/:Cores_idCores/:Produto_idProduto", CoresHasProdutoController.buscarPorId);

// Atualizar
router.put("/:Cores_idCores/:Produto_idProduto", CoresHasProdutoController.atualizar);

// Excluir
router.delete("/:Cores_idCores/:Produto_idProduto", CoresHasProdutoController.excluir);

module.exports = router;