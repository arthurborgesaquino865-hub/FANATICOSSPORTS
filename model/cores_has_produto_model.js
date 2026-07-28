const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Relacionamento
// =========================

function cadastrar(relacionamento, callback) {

    const sql = `INSERT INTO Cores_has_Produto
        (
            Cores_idCores,
            Produto_idProduto
        )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            relacionamento.Cores_idCores,
            relacionamento.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar Relacionamentos
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Cores_has_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por IDs
// =========================

function buscarPorId(
    corId,
    produtoId,
    callback
) {

    const sql = `
        SELECT *
        FROM Cores_has_Produto
        WHERE Cores_idCores = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            corId,
            produtoId
        ],
        callback
    );

}

// =========================
// Atualizar Relacionamento
// =========================

function atualizar(
    corId,
    produtoId,
    relacionamento,
    callback
) {

    const sql = `
        UPDATE Cores_has_Produto
        SET
            Cores_idCores = ?,
            Produto_idProduto = ?
        WHERE Cores_idCores = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            relacionamento.Cores_idCores,
            relacionamento.Produto_idProduto,

            corId,
            produtoId
        ],
        callback
    );

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(
    corId,
    produtoId,
    callback
) {

    const sql = `
        DELETE FROM Cores_has_Produto
        WHERE Cores_idCores = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            corId,
            produtoId
        ],
        callback
    );

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};