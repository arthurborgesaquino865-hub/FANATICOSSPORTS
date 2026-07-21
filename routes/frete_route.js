const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos fretes.

const FreteController = require("../controller/frete_controller.js");

router.post("/", FreteController.cadastrar);

router.get("/", FreteController.listar);

router.get("/:id", FreteController.buscarPorId);

router.put("/:id", FreteController.atualizar);

router.delete("/:id", FreteController.excluir);

module.exports = router;