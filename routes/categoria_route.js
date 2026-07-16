const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às categorias.

const CategoriaController = require("../controller/categoria_controller.js");

router.post("/", CategoriaController.cadastrar);

router.get("/", CategoriaController.listar);

router.get("/:id", CategoriaController.buscarPorId);

router.put("/:id", CategoriaController.atualizar);

router.delete("/:id", CategoriaController.excluir);

module.exports = router;