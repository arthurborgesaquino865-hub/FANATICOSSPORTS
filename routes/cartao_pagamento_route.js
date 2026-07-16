const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos cartões de pagamento.

const CartaoPagamentoController = require("../controller/cartao_pagamento_controller.js");

router.post("/", CartaoPagamentoController.cadastrar);

router.get("/", CartaoPagamentoController.listar);

router.get("/:id", CartaoPagamentoController.buscarPorId);

router.put("/:id", CartaoPagamentoController.atualizar);

router.delete("/:id", CartaoPagamentoController.excluir);

module.exports = router;