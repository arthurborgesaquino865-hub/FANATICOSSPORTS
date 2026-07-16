const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às cores.

const CoresController = require("../controller/cores_controller.js");

router.post("/", CoresController.cadastrar);

router.get("/", CoresController.listar);

router.get("/:id", CoresController.buscarPorId);

router.put("/:id", CoresController.atualizar);

router.delete("/:id", CoresController.excluir);

module.exports = router;