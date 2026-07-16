const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às promoções.

const PromocaoController = require("../controller/promocao_controller.js");

router.post("/", PromocaoController.cadastrar);

router.get("/", PromocaoController.listar);

router.get("/:id", PromocaoController.buscarPorId);

router.put("/:id", PromocaoController.atualizar);

router.delete("/:id", PromocaoController.excluir);

module.exports = router;