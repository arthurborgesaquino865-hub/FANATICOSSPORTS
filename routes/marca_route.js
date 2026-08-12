//==========================================
// IMPORTA O EXPRESS
//==========================================

const express =
    require("express");


const router =
    express.Router();


//==========================================
// MULTER
//==========================================

const multer =
    require("multer");


const upload =
    multer({

        storage:
            multer.memoryStorage()

    });


//==========================================
// CONTROLLER
//==========================================

const marcaController =
    require("../controller/marca_controller");


//==========================================
// CADASTRAR MARCA
//==========================================

router.post(
    "/",
    upload.single("logo"),
    marcaController.cadastrar
);


//==========================================
// LISTAR MARCAS
//==========================================

router.get(
    "/",
    marcaController.listar
);


//==========================================
// BUSCAR MARCA
//==========================================

router.get(
    "/:id",
    marcaController.buscarPorId
);


//==========================================
// ATUALIZAR MARCA
//==========================================

router.put(
    "/:id",
    upload.single("logo"),
    marcaController.atualizar
);


//==========================================
// EXCLUIR MARCA
//==========================================

router.delete(
    "/:id",
    marcaController.excluir
);


//==========================================
// EXPORTAÇÃO
//==========================================

module.exports =
    router;