const express = require("express");

const router = express.Router();

const controller =
require("../controller/imagem_has_produto_controller.js");

router.get("/", controller.listar);

router.get("/:id", controller.buscar);

router.post("/", controller.cadastrar);

router.put("/:id", controller.editar);

router.delete("/:id", controller.excluir);

module.exports = router;