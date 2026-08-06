const imagem_has_produto_model =
require("../model/imagem_has_produto_model.js");


function listar(req,res){

    imagem_has_produto_model.listar(

        function(resultado){

            if(resultado){

                res.json(resultado);

            }else{

                res.status(500).json({

                    sucesso:false,

                    mensagem:"Erro ao listar imagens."

                });

            }

        }

    );

}


function buscar(req,res){

    const id = req.params.id;

    imagem_has_produto_model.buscar(

        id,

        function(resultado){

            if(resultado){

                res.json(resultado);

            }else{

                res.status(404).json({

                    sucesso:false,

                    mensagem:"Imagem não encontrada."

                });

            }

        }

    );

}


function cadastrar(req,res){

    imagem_has_produto_model.cadastrar(

        req.body,

        function(resultado){

            if(resultado){

                res.json({

                    sucesso:true,

                    mensagem:"Imagem cadastrada com sucesso."

                });

            }else{

                res.status(500).json({

                    sucesso:false,

                    mensagem:"Erro ao cadastrar imagem."

                });

            }

        }

    );

}


function editar(req,res){

    const id = req.params.id;

    imagem_has_produto_model.editar(

        id,

        req.body,

        function(resultado){

            if(resultado){

                res.json({

                    sucesso:true,

                    mensagem:"Imagem alterada com sucesso."

                });

            }else{

                res.status(500).json({

                    sucesso:false,

                    mensagem:"Erro ao alterar imagem."

                });

            }

        }

    );

}


function excluir(req,res){

    const id = req.params.id;

    imagem_has_produto_model.excluir(

        id,

        function(resultado){

            if(resultado){

                res.json({

                    sucesso:true,

                    mensagem:"Imagem excluída."

                });

            }else{

                res.status(500).json({

                    sucesso:false,

                    mensagem:"Erro ao excluir imagem."

                });

            }

        }

    );

}


module.exports={

    listar,

    buscar,

    cadastrar,

    editar,

    excluir

};