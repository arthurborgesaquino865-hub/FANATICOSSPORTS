const carrinhoHasProduto = require("../model/carrinho_has_produto_model.js");

//==========================================
// CADASTRAR
//==========================================

function cadastrar(req, res) {

    const relacionamento = req.body;

    if (
        !relacionamento.Carrinho_idCarrinho ||
        !relacionamento.Produto_idProduto
    ) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });
    }

    carrinhoHasProduto.cadastrar(relacionamento, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar relacionamento."
            });
        }

        res.status(201).json({
            sucesso: true,
            mensagem: "Relacionamento cadastrado com sucesso."
        });

    });

}

//==========================================
// LISTAR
//==========================================

function listar(req, res) {

    carrinhoHasProduto.listar((erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar."
            });
        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR POR ID
//==========================================

function buscarPorId(req, res) {

    const carrinhoId = req.params.carrinhoId;
    const produtoId = req.params.produtoId;

    carrinhoHasProduto.buscarPorId(
        carrinhoId,
        produtoId,
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao buscar."
                });
            }

            if (resultado.length === 0) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Relacionamento não encontrado."
                });
            }

            res.json(resultado[0]);

        }
    );

}

//==========================================
// ATUALIZAR
//==========================================

function atualizar(req, res) {

    const carrinhoId = req.params.carrinhoId;
    const produtoId = req.params.produtoId;

    const relacionamento = req.body;

    carrinhoHasProduto.atualizar(
        carrinhoId,
        produtoId,
        relacionamento,
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao atualizar."
                });
            }

            res.json({
                sucesso: true,
                mensagem: "Relacionamento atualizado com sucesso."
            });

        }
    );

}

//==========================================
// EXCLUIR
//==========================================

function excluir(req, res) {

    const carrinhoId = req.params.carrinhoId;
    const produtoId = req.params.produtoId;

    carrinhoHasProduto.excluir(
        carrinhoId,
        produtoId,
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao excluir."
                });
            }

            res.json({
                sucesso: true,
                mensagem: "Relacionamento excluído com sucesso."
            });

        }
    );

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};