const express =
    require("express");


const router =
    express.Router();


const imagemProdutoController =
    require(
        "../controller/imagem_produto_controller"
    );


//==========================================
// CADASTRAR IMAGEM
//==========================================

router.post(
    "/",
    imagemProdutoController.cadastrar
);


//==========================================
// LISTAR IMAGENS
//==========================================

router.get(
    "/",
    imagemProdutoController.listar
);


//==========================================
// BUSCAR IMAGEM
//==========================================

router.get(
    "/:id",
    imagemProdutoController.buscarPorId
);


//==========================================
// ATUALIZAR IMAGEM
//==========================================

router.put(
    "/:id",
    imagemProdutoController.atualizar
);


//==========================================
// EXCLUIR IMAGEM
//==========================================

router.delete(
    "/:id",
    imagemProdutoController.excluir
);


module.exports =
    router;