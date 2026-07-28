const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos pedidos e produtos.

const PedidosHasProdutoController = require("../controller/pedidos_has_produto_controller.js");

router.post("/", PedidosHasProdutoController.cadastrar);

router.get("/", PedidosHasProdutoController.listar);

router.get("/:id", PedidosHasProdutoController.buscarPorId);

router.put("/:id", PedidosHasProdutoController.atualizar);

router.delete("/:id", PedidosHasProdutoController.excluir);

module.exports = router;