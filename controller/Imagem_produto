const imagemProdutoModel = require("../model/imagem_produto_model");

//==========================================
// CADASTRAR IMAGEM DO PRODUTO
//==========================================

function cadastrar(req, res) {

    const imagem = req.body;

    // Validação dos campos obrigatórios
    if (
        !imagem.arquivo ||
        !imagem.Produto_idProduto
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    imagemProdutoModel.cadastrar(imagem, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar imagem do produto."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Imagem do produto cadastrada com sucesso!",
            idImagem_Produto: resultado.insertId

        });

    });

}

//==========================================
// LISTAR IMAGENS DOS PRODUTOS
//==========================================

function listar(req, res) {

    imagemProdutoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar imagens dos produtos."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR IMAGEM POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    imagemProdutoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar imagem do produto."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Imagem do produto não encontrada."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR IMAGEM DO PRODUTO
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const imagem = req.body;

    imagemProdutoModel.atualizar(id, imagem, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar imagem do produto."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Imagem do produto atualizada com sucesso."
        });

    });

}

//==========================================
// EXCLUIR IMAGEM DO PRODUTO
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    imagemProdutoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir imagem do produto."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Imagem do produto excluída com sucesso."
        });

    });

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