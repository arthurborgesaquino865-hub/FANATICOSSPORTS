const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cartão de Pagamento
// =========================

function cadastrar(formas_pagamento, callback) {

    const sql = `INSERT INTO formas_pagamento
        ( nome, link, ativo )
        VALUES (?, ?, ?)`;

    conexao.query(
        sql,
        [
            formas_pagamento.nome,
            formas_pagamento.link,
            formas_pagamento.ativo,
        ],
        callback
    );

}

// =========================
// Listar Formas de Pagamento
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM formas_pagamento
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM formas_pagamento
        WHERE idFormas_pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================



// =========================
// Atualizar Forma de Pagamento
// =========================

function atualizar(id, formas_pagamento, callback) {

    const sql = `
        UPDATE formas_pagamento
        SET

            nome = ?,
            link = ?,
            ativo = ?

        WHERE idFormas_pagamento = ?
    `;

    conexao.query(
        sql,
        [
            formas_pagamento.nome,
            formas_pagamento.link,
            formas_pagamento.ativo,
            id
        ],
        callback
    );

}

// =========================
// Excluir Forma de Pagamento
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM formas_pagamento
        WHERE idFormas_pagamento = ?
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