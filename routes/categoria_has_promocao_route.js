const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às categorias e promoções.

const CategoriaHasPromocaoController = require("../controller/categoria_has_promocao_controller.js");

router.post("/", CategoriaHasPromocaoController.cadastrar);

router.get("/", CategoriaHasPromocaoController.listar);

router.get("/:id", CategoriaHasPromocaoController.buscarPorId);

router.put("/:id", CategoriaHasPromocaoController.atualizar);

router.delete("/:id", CategoriaHasPromocaoController.excluir);

module.exports = router;