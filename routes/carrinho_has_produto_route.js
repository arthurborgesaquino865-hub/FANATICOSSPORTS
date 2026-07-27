const express = require("express");

const router = express.Router();

const CarrinhoHasProdutoController = require("../controller/carrinho_has_produto");

// Cadastrar
router.post("/", CarrinhoHasProdutoController.cadastrar);

// Listar todos
router.get("/", CarrinhoHasProdutoController.listar);

// Buscar por chave composta
router.get("/:carrinhoId/:produtoId", CarrinhoHasProdutoController.buscarPorId);

// Atualizar
router.put("/:carrinhoId/:produtoId", CarrinhoHasProdutoController.atualizar);

// Excluir
router.delete("/:carrinhoId/:produtoId", CarrinhoHasProdutoController.excluir);

module.exports = router;