const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às categorias e produtos.

const CategoriaHasProdutoController = require("../controller/Categoria_has_produto_Controller.js");

router.post("/", CategoriaHasProdutoController.cadastrar);

router.get("/", CategoriaHasProdutoController.listar);

router.get("/:id", CategoriaHasProdutoController.buscarPorId);

router.put("/:id", CategoriaHasProdutoController.atualizar);

router.delete("/:id", CategoriaHasProdutoController.excluir);

module.exports = router;