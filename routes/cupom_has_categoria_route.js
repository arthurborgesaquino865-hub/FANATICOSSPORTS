const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos cupons e categorias.

const CupomHasCategoriaController = require("../controller/cupom_has_categoria_controller.js");

router.post("/", CupomHasCategoriaController.cadastrar);

router.get("/", CupomHasCategoriaController.listar);

router.get("/:id", CupomHasCategoriaController.buscarPorId);

router.put("/:id", CupomHasCategoriaController.atualizar);

router.delete("/:id", CupomHasCategoriaController.excluir);

module.exports = router;