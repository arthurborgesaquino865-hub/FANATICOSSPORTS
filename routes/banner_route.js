const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos banners.

const BannerController = require("../controller/banner_controller.js");

router.post("/", BannerController.cadastrar);

router.get("/", BannerController.listar);

router.get("/:id", BannerController.buscarPorId);

router.put("/:id", BannerController.atualizar);

router.delete("/:id", BannerController.excluir);

module.exports = router;