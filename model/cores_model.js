
const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cor
// =========================

function cadastrar(cor, callback) {

    const sql = `
        INSERT INTO Cores
        (nome, codigo_cor)
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            cor.nome,
            cor.codigo_cor
        ],
        callback
    );

}


// =========================
// Listar Cores
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Cores
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

    conexao.query(
        sql,
        [id],
        callback
    );

}


// =========================
// Atualizar Cor
// =========================

function atualizar(id, cor, callback) {

    const sql = `
        UPDATE Cores
        SET
            nome = ?,
            codigo_cor = ?
        WHERE idCores = ?
    `;

    conexao.query(
        sql,
        [
            cor.nome,
            cor.codigo_cor,
            id
        ],
        callback
    );

}


// =========================
// Excluir Cor
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cores
        WHERE idCores = ?
    `;

    conexao.query(
        sql,
        [id],
        callback
    );

}


// =========================
// EXPORTAÇÃO
// =========================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};

