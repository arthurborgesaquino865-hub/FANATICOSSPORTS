const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos pedidos.

const PedidosController = require("../controller/pedidos_controller.js");

router.post("/", PedidosController.cadastrar);

router.get("/", PedidosController.listar);

router.get("/:id", PedidosController.buscarPorId);

router.put("/:id", PedidosController.atualizar);

router.delete("/:id", PedidosController.excluir);

module.exports = router;