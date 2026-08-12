//==========================================
// IMPORTA MODELS
//==========================================

const produtoModel =
    require("../model/produto_model");

const coresHasProdutoModel =
    require("../model/cores_has_produto_model");

const produtoHasTamanhoModel =
    require("../model/tamanho_has_produto_model");


//==========================================
// CADASTRAR PRODUTO
//==========================================

function cadastrar(req, res) {

    const produto =
        req.body;


    //======================================
    // VALIDAR PRODUTO
    //======================================

    if (

        !produto.nome ||

        !produto.descricao ||

       
        produto.preco_antigo === undefined ||

        produto.quantidade_estoque === undefined ||

        produto.status_produto === undefined ||

        !produto.Loja_idLoja ||

        !produto.Marca_idMarca ||

        !produto.Categoria_idCategoria

    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Preencha todos os campos obrigatórios."

        });

    }


    //======================================
    // VALIDAR CORES
    //======================================

    if (

        !Array.isArray(produto.cores) ||

        produto.cores.length === 0

    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Selecione pelo menos uma cor."

        });

    }


    //======================================
    // VALIDAR TAMANHOS
    //======================================

    if (

        !Array.isArray(produto.tamanhos) ||

        produto.tamanhos.length === 0

    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Selecione pelo menos um tamanho."

        });

    }


    //======================================
    // CADASTRAR PRODUTO
    //======================================

    produtoModel.cadastrar(

        produto,

        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro MySQL produto:",
                    erro
                );


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao cadastrar produto."

                });

            }


            const idProduto =
                resultado.insertId;


            //==================================
            // TOTAL DE RELACIONAMENTOS
            //==================================

            const total =
                produto.cores.length +
                produto.tamanhos.length;


            let concluidos = 0;

            let respostaEnviada = false;


            //==================================
            // FINALIZAR
            //==================================

            function finalizar() {

                concluidos++;


                if (

                    concluidos === total &&

                    !respostaEnviada

                ) {

                    respostaEnviada = true;


                    return res.status(201).json({

                        sucesso: true,

                        mensagem:
                            "Produto cadastrado com sucesso.",

                        idProduto:
                            idProduto

                    });

                }

            }


            //==================================
            // CADASTRAR CORES
            //==================================

            produto.cores.forEach(

                idCor => {

                    const dadosCor = {

                        Cores_idCores:
                            idCor,

                        Produto_idProduto:
                            idProduto

                    };


                    coresHasProdutoModel.cadastrar(

                        dadosCor,

                        erroCor => {

                            if (

                                erroCor &&

                                !respostaEnviada

                            ) {

                                respostaEnviada = true;


                                console.error(

                                    "Erro relacionamento cor:",

                                    erroCor

                                );


                                return res.status(500).json({

                                    sucesso: false,

                                    mensagem:
                                        "Produto cadastrado, mas ocorreu erro ao relacionar a cor."

                                });

                            }


                            finalizar();

                        }

                    );

                }

            );


            //==================================
            // CADASTRAR TAMANHOS
            //==================================

            produto.tamanhos.forEach(

                idTamanho => {

                    const dadosTamanho = {

                        Tamanho_idTamanho:
                            idTamanho,

                        Produto_idProduto:
                            idProduto

                    };


                    produtoHasTamanhoModel.cadastrar(

                        dadosTamanho,

                        erroTamanho => {

                            if (

                                erroTamanho &&

                                !respostaEnviada

                            ) {

                                respostaEnviada = true;


                                console.error(

                                    "Erro relacionamento tamanho:",

                                    erroTamanho

                                );


                                return res.status(500).json({

                                    sucesso: false,

                                    mensagem:
                                        "Produto cadastrado, mas ocorreu erro ao relacionar o tamanho."

                                });

                            }


                            finalizar();

                        }

                    );

                }

            );

        }

    );

}


//==========================================
// LISTAR PRODUTOS
//==========================================

//==========================================
// LISTAR PRODUTOS
//==========================================

function listar(req, res) {

    produtoModel.listar(

        (erro, resultado) => {


            if (erro) {

                console.error(
                    "ERRO AO LISTAR PRODUTOS:"
                );

                console.error(
                    erro
                );


                return res
                    .status(500)
                    .json({

                        sucesso: false,

                        mensagem:
                            "Erro ao listar produtos."

                    });

            }


            try {


                const produtos =
                    resultado.map(

                        produto => {


                            //==================================
                            // CONVERTER IMAGEM
                            //==================================

                            if (
                                produto.imagem
                            ) {


                                // DESCOBRIR TIPO
                                let tipoImagem =
                                    "image/jpeg";


                                // PNG
                                if (
                                    produto.imagem[0] === 0x89 &&
                                    produto.imagem[1] === 0x50 &&
                                    produto.imagem[2] === 0x4E &&
                                    produto.imagem[3] === 0x47
                                ) {

                                    tipoImagem =
                                        "image/png";

                                }


                                // JPEG
                                else if (
                                    produto.imagem[0] === 0xFF &&
                                    produto.imagem[1] === 0xD8
                                ) {

                                    tipoImagem =
                                        "image/jpeg";

                                }


                                // WEBP
                                else if (

                                    produto.imagem.length >= 12 &&

                                    produto.imagem
                                        .subarray(
                                            0,
                                            4
                                        )
                                        .toString() ===
                                    "RIFF" &&

                                    produto.imagem
                                        .subarray(
                                            8,
                                            12
                                        )
                                        .toString() ===
                                    "WEBP"

                                ) {

                                    tipoImagem =
                                        "image/webp";

                                }


                                produto.mime_imagem =
                                    tipoImagem;


                                produto.imagem =
                                    produto.imagem
                                        .toString(
                                            "base64"
                                        );

                            }
                            else {


                                produto.imagem =
                                    null;


                                produto.mime_imagem =
                                    null;

                            }


                            return produto;

                        }

                    );


                console.log(
                    "PRODUTOS ENCONTRADOS:",
                    produtos.length
                );


                return res
                    .status(200)
                    .json(
                        produtos
                    );


            }
            catch (erroConversao) {


                console.error(
                    "ERRO AO CONVERTER IMAGEM:"
                );


                console.error(
                    erroConversao
                );


                return res
                    .status(500)
                    .json({

                        sucesso: false,

                        mensagem:
                            "Erro ao preparar produtos."

                    });

            }

        }

    );

}

//==========================================
// BUSCAR PRODUTO
//==========================================

function buscarPorId(req, res) {

    const id =
        req.params.id;


    produtoModel.buscarPorId(

        id,

        (erro, resultado) => {

            if (erro) {

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao buscar produto."

                });

            }


            if (resultado.length === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Produto não encontrado."

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

    const produto =
        req.body;


    produtoModel.atualizar(

        id,

        produto,

        erro => {

            if (erro) {

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao atualizar produto."

                });

            }


            res.status(200).json({

                sucesso: true,

                mensagem:
                    "Produto atualizado com sucesso."

            });

        }

    );

}


//==========================================
// EXCLUIR
//==========================================

function excluir(req, res) {

    const id =
        req.params.id;


    produtoModel.excluir(

        id,

        erro => {

            if (erro) {

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao excluir produto."

                });

            }


            res.status(200).json({

                sucesso: true,

                mensagem:
                    "Produto excluído com sucesso."

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