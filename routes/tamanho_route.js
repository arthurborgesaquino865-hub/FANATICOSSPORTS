const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos tamanhos.

const TamanhoController = require("../controller/tamanho_controller.js");

router.post("/", TamanhoController.cadastrar);

router.get("/", TamanhoController.listar);

router.get("/:id", TamanhoController.buscarPorId);

router.put("/:id", TamanhoController.atualizar);

router.delete("/:id", TamanhoController.excluir);

module.exports = router;