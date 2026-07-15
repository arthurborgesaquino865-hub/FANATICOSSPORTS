const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Relacionamento
// =========================

function cadastrar(relacionamento, callback) {

    const sql = `INSERT INTO Tamanho_has_Produto
        (
            Tamanho_idTamanho,
            Produto_idProduto
        )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            relacionamento.Tamanho_idTamanho,
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
        FROM Tamanho_has_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por IDs
// =========================

function buscarPorId(
    tamanhoId,
    produtoId,
    callback
) {

    const sql = `
        SELECT *
        FROM Tamanho_has_Produto
        WHERE Tamanho_idTamanho = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            tamanhoId,
            produtoId
        ],
        callback
    );

}

// =========================
// Atualizar Relacionamento
// =========================

function atualizar(
    tamanhoId,
    produtoId,
    relacionamento,
    callback
) {

    const sql = `
        UPDATE Tamanho_has_Produto
        SET
            Tamanho_idTamanho = ?,
            Produto_idProduto = ?
        WHERE Tamanho_idTamanho = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            relacionamento.Tamanho_idTamanho,
            relacionamento.Produto_idProduto,

            tamanhoId,
            produtoId
        ],
        callback
    );

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(
    tamanhoId,
    produtoId,
    callback
) {

    const sql = `
        DELETE FROM Tamanho_has_Produto
        WHERE Tamanho_idTamanho = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            tamanhoId,
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