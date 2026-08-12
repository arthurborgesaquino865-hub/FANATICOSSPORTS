const imagemProdutoModel =
    require("../model/imagem_produto_model");


//==========================================
// CADASTRAR IMAGEM
//==========================================

function cadastrar(req, res) {

    const imagem =
        req.body;


    if (

        !imagem.arquivo ||

        !imagem.Produto_idProduto

    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Preencha todos os campos."

        });

    }


    try {

        //======================================
        // SEPARAR BASE64
        //======================================

        const partes =
            imagem.arquivo.split(",");


        if (partes.length < 2) {

            return res.status(400).json({

                sucesso: false,

                mensagem:
                    "Formato da imagem inválido."

            });

        }


        //======================================
        // TRANSFORMAR EM BUFFER
        //======================================

        const arquivoBuffer =
            Buffer.from(
                partes[1],
                "base64"
            );


        const dadosImagem = {

            arquivo:
                arquivoBuffer,

            Produto_idProduto:
                Number(
                    imagem.Produto_idProduto
                )

        };


        //======================================
        // CADASTRAR
        //======================================

        imagemProdutoModel.cadastrar(

            dadosImagem,

            (erro, resultado) => {

                if (erro) {

                    console.error(

                        "Erro MySQL imagem:",

                        erro

                    );


                    return res.status(500).json({

                        sucesso: false,

                        mensagem:
                            "Erro ao cadastrar imagem do produto."

                    });

                }


                return res.status(201).json({

                    sucesso: true,

                    mensagem:
                        "Imagem do produto cadastrada com sucesso!",

                    idImagem_produto:
                        resultado.insertId

                });

            }

        );

    }

    catch (erro) {

        console.error(

            "Erro ao processar imagem:",

            erro

        );


        return res.status(500).json({

            sucesso: false,

            mensagem:
                "Erro ao processar a imagem."

        });

    }

}


//==========================================
// LISTAR
//==========================================

function listar(req, res) {

    imagemProdutoModel.listar(

        (erro, resultado) => {

            if (erro) {

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao listar imagens."

                });

            }


            res.status(200).json(
                resultado
            );

        }

    );

}


//==========================================
// BUSCAR POR ID
//==========================================

function buscarPorId(req, res) {

    const id =
        req.params.id;


    imagemProdutoModel.buscarPorId(

        id,

        (erro, resultado) => {

            if (erro) {

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao buscar imagem."

                });

            }


            if (resultado.length === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Imagem não encontrada."

                });

            }


            res.status(200).json(
                resultado[0]
            );

        }

    );

}


//==========================================
// ATUALIZAR
//==========================================

function atualizar(req, res) {

    const id =
        req.params.id;

    const imagem =
        req.body;


    if (

        !imagem.arquivo ||

        !imagem.Produto_idProduto

    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Preencha todos os campos."

        });

    }


    try {

        const partes =
            imagem.arquivo.split(",");


        const arquivoBuffer =
            Buffer.from(
                partes[1],
                "base64"
            );


        const dadosImagem = {

            arquivo:
                arquivoBuffer,

            Produto_idProduto:
                Number(
                    imagem.Produto_idProduto
                )

        };


        imagemProdutoModel.atualizar(

            id,

            dadosImagem,

            erro => {

                if (erro) {

                    return res.status(500).json({

                        sucesso: false,

                        mensagem:
                            "Erro ao atualizar imagem."

                    });

                }


                res.status(200).json({

                    sucesso: true,

                    mensagem:
                        "Imagem atualizada com sucesso."

                });

            }

        );

    }

    catch (erro) {

        return res.status(500).json({

            sucesso: false,

            mensagem:
                "Erro ao processar imagem."

        });

    }

}


//==========================================
// EXCLUIR
//==========================================

function excluir(req, res) {

    const id =
        req.params.id;


    imagemProdutoModel.excluir(

        id,

        erro => {

            if (erro) {

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao excluir imagem."

                });

            }


            res.status(200).json({

                sucesso: true,

                mensagem:
                    "Imagem excluída com sucesso."

            });

        }

    );

}


//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,

    listar,

    buscarPorId,

    atualizar,

    excluir

};