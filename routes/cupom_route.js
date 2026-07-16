const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos cupons.

const CupomController = require("../controller/cupom_controller.js");

router.post("/", CupomController.cadastrar);

router.get("/", CupomController.listar);

router.get("/:id", CupomController.buscarPorId);

router.put("/:id", CupomController.atualizar);

router.delete("/:id", CupomController.excluir);

module.exports = router;