const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos endereços e clientes.

const EnderecoHasClienteController = require("../controller/endereco_has_cliente_controller.js");

router.post("/", EnderecoHasClienteController.cadastrar);

router.get("/", EnderecoHasClienteController.listar);

router.get("/:id", EnderecoHasClienteController.buscarPorId);

router.put("/:id", EnderecoHasClienteController.atualizar);

router.delete("/:id", EnderecoHasClienteController.excluir);

module.exports = router;