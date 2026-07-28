const express = require("express");

const router = express.Router();

const TamanhoHasProdutoController = require("../controller/tamanho_has_produto_controller.js");

// Cadastrar
router.post("/", TamanhoHasProdutoController.cadastrar);

// Listar todos
router.get("/", TamanhoHasProdutoController.listar);

// Buscar por chave composta
router.get("/:Tamanho_idTamanho/:Produto_idProduto", TamanhoHasProdutoController.buscarPorId);

// Atualizar
router.put("/:Tamanho_idTamanho/:Produto_idProduto", TamanhoHasProdutoController.atualizar);

// Excluir
router.delete("/:Tamanho_idTamanho/:Produto_idProduto", TamanhoHasProdutoController.excluir);

module.exports = router;