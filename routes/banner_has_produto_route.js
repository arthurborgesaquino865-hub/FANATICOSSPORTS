const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos banners e produtos.

const BannerHasProdutoController = require("../controller/banner_has_produto_controller.js");

router.post("/", BannerHasProdutoController.cadastrar);

router.get("/", BannerHasProdutoController.listar);

router.get("/:id", BannerHasProdutoController.buscarPorId);

router.put("/:id", BannerHasProdutoController.atualizar);

router.delete("/:id", BannerHasProdutoController.excluir);

module.exports = router;