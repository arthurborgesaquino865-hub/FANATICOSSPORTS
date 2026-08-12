//==========================================
// CONEXÃO COM O BANCO DE DADOS
//==========================================

const conexao = require("../conexao/conexao.js");


//==========================================
// CADASTRAR MARCA
//==========================================

function cadastrar(marca, callback) {

    const sql = `
        INSERT INTO Marca
        (
            nome,
            logo
        )
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            marca.nome,
            marca.logo
        ],
        callback
    );

}


//==========================================
// LISTAR MARCAS
//==========================================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Marca
    `;

    conexao.query(sql, callback);

}


//==========================================
// BUSCAR MARCA POR ID
//==========================================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Marca
        WHERE idMarca = ?
    `;

    conexao.query(sql, [id], callback);

}


//==========================================
// ATUALIZAR MARCA
//==========================================

function atualizar(id, marca, callback) {

    const sql = `
        UPDATE Marca
        SET
            nome = ?,
            logo = ?
        WHERE idMarca = ?
    `;

    conexao.query(
        sql,
        [
            marca.nome,
            marca.logo,
            id
        ],
        callback
    );

}


//==========================================
// EXCLUIR MARCA
//==========================================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Marca
        WHERE idMarca = ?
    `;

    conexao.query(
        sql,
        [id],
        callback
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