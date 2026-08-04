const express = require("express");

const router = express.Router();

const produtoController = require("../controller/produto_controller.js");


//==========================================
// CADASTRAR PRODUTO
//==========================================

router.post(
    "/",
    produtoController.cadastrar
);



//==========================================
// LISTAR PRODUTOS
//==========================================

router.get(
    "/",
    produtoController.listar
);



//==========================================
// BUSCAR POR ID
//==========================================

router.get(
    "/:id",
    produtoController.buscarPorId
);



//==========================================
// ATUALIZAR PRODUTO
//==========================================

router.put(
    "/:id",
    produtoController.atualizar
);



//==========================================
// EXCLUIR PRODUTO
//==========================================

router.delete(
    "/:id",
    produtoController.excluir
);



module.exports = router;