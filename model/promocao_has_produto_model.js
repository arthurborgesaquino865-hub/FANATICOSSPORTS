const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Relacionamento
// =========================

function cadastrar(relacionamento, callback) {

    const sql = `INSERT INTO Promocao_has_Produto
        (
            Promocao_idPromocao,
            Produto_idProduto
        )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            relacionamento.Promocao_idPromocao,
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
        FROM Promocao_has_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por IDs
// =========================

function buscarPorId(
    promocaoId,
    produtoId,
    callback
) {

    const sql = `
        SELECT *
        FROM Promocao_has_Produto
        WHERE Promocao_idPromocao = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            promocaoId,
            produtoId
        ],
        callback
    );

}

// =========================
// Atualizar Relacionamento
// =========================

function atualizar(
    promocaoId,
    produtoId,
    relacionamento,
    callback
) {

    const sql = `
        UPDATE Promocao_has_Produto
        SET
            Promocao_idPromocao = ?,
            Produto_idProduto = ?
        WHERE Promocao_idPromocao = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            relacionamento.Promocao_idPromocao,
            relacionamento.Produto_idProduto,

            promocaoId,
            produtoId
        ],
        callback
    );

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(
    promocaoId,
    produtoId,
    callback
) {

    const sql = `
        DELETE FROM Promocao_has_Produto
        WHERE Promocao_idPromocao = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            promocaoId,
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