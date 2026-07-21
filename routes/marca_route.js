const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às marcas.

const MarcaController = require("../controller/marca_controller.js");

router.post("/", MarcaController.cadastrar);

router.get("/", MarcaController.listar);

router.get("/:id", MarcaController.buscarPorId);

router.put("/:id", MarcaController.atualizar);

router.delete("/:id", MarcaController.excluir);

module.exports = router;