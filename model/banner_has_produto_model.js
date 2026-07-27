const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cartão de Pagamento
// =========================

function cadastrar(cartao_pagamento, callback) {

    const sql = `INSERT INTO Cartao_pagamento
        ( numero,data_vencimento,cvc,cpf,nome_proprietario,
         nome_identificacao,bandeira,tipo,ativo,Cliente_idCliente )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            cartao_pagamento.numero,
            cartao_pagamento.data_vencimento,
            cartao_pagamento.cvc,
            cartao_pagamento.cpf,
            cartao_pagamento.nome_proprietario,
            cartao_pagamento.nome_identificacao,
            cartao_pagamento.bandeira,
            cartao_pagamento.tipo,
            cartao_pagamento.ativo,
            cartao_pagamento.Cliente_idCliente,
        ],
        callback
    );

}

// =========================
// Listar Cartões de Pagamento
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Cartao_pagamento
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Cartao_pagamento
        WHERE idCartao_pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================



// =========================
// Atualizar Cartão de Pagamento
// =========================

function atualizar(id, cartao_pagamento, callback) {

    const sql = `
        UPDATE Cartao_pagamento
        SET

            numero = ?,
            data_vencimento = ?,
            cvc = ?,
            cpf = ?,
            nome_proprietario = ?,
            nome_identificacao = ?,
            bandeira = ?,
            tipo = ?,
            ativo = ?,
            Cliente_idCliente = ?

        WHERE idCartao_pagamento = ?
    `;

    conexao.query(
        sql,
        [
            cartao_pagamento.numero,
            cartao_pagamento.data_vencimento,
            cartao_pagamento.cvc,
            cartao_pagamento.cpf,
            cartao_pagamento.nome_proprietario,
            cartao_pagamento.nome_identificacao,
            cartao_pagamento.bandeira,
            cartao_pagamento.tipo,
            cartao_pagamento.ativo,
            cartao_pagamento.Cliente_idCliente,
            id
        ],
        callback
    );

}

// =========================
// Excluir Cartão de Pagamento
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cartao_pagamento
        WHERE idCartao_pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};