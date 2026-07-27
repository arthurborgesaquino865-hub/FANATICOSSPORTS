const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cartão de Pagamento
// =========================

function cadastrar(cores, callback) {

    const sql = `INSERT INTO Cores
        ( nome,codigo_cor )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            cores.nome,
            cores.codigo_cor,
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
        FROM Cores
        WHERE idCores = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================



// =========================
// Atualizar Cartão de Pagamento
// =========================

function atualizar(id, cores, callback) {

    const sql = `
        UPDATE Cores
        SET

            nome = ?,
            codigo_cor = ?,
           
        WHERE idCores = ?
    `;

    conexao.query(
        sql,
        [
            cores.nome,
            cores.codigo_cor,
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
        DELETE FROM Cores
        WHERE idCores = ?
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