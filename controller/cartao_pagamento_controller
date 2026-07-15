const cartaoPagamentoModel = require("../model/cartao_pagamento_model");

//==========================================
// CADASTRAR CARTÃO DE PAGAMENTO
//==========================================

function cadastrar(req, res) {

    const cartao = req.body;

    // Validação dos campos obrigatórios
    if (
        !cartao.numero ||
        !cartao.data_vencimento ||
        !cartao.cvc ||
        !cartao.cpf ||
        !cartao.nome_proprietario ||
        !cartao.nome_identificacao ||
        !cartao.bandeira ||
        !cartao.tipo ||
        cartao.ativo === undefined ||
        !cartao.Cliente_idCliente
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    cartaoPagamentoModel.cadastrar(cartao, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar cartão de pagamento."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Cartão de pagamento cadastrado com sucesso!",
            idCartao_pagamento: resultado.insertId

        });

    });

}

//==========================================
// LISTAR CARTÕES DE PAGAMENTO
//==========================================

function listar(req, res) {

    cartaoPagamentoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar cartões de pagamento."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR CARTÃO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    cartaoPagamentoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar cartão de pagamento."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Cartão de pagamento não encontrado."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR CARTÃO DE PAGAMENTO
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const cartao = req.body;

    cartaoPagamentoModel.atualizar(id, cartao, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar cartão de pagamento."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cartão de pagamento atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR CARTÃO DE PAGAMENTO
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    cartaoPagamentoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir cartão de pagamento."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cartão de pagamento excluído com sucesso."
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