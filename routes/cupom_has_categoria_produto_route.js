const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos cupons, categorias e produtos.

const CupomHasCategoriaHasProdutoController = require("../controller/cupom_has_categoria_has_produto_Controller.js");

router.post("/", CupomHasCategoriaHasProdutoController.cadastrar);

router.get("/", CupomHasCategoriaHasProdutoController.listar);

router.get("/:id", CupomHasCategoriaHasProdutoController.buscarPorId);

router.put("/:id", CupomHasCategoriaHasProdutoController.atualizar);

router.delete("/:id", CupomHasCategoriaHasProdutoController.excluir);

module.exports = router;