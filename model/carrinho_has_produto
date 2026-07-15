const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Relacionamento
// =========================

function cadastrar(relacionamento, callback) {

    const sql = `INSERT INTO Carrinho_has_Produto
        (
            Carrinho_idCarrinho,
            Produto_idProduto
        )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            relacionamento.Carrinho_idCarrinho,
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
        FROM Carrinho_has_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por IDs
// =========================

function buscarPorId(
    carrinhoId,
    produtoId,
    callback
) {

    const sql = `
        SELECT *
        FROM Carrinho_has_Produto
        WHERE Carrinho_idCarrinho = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            carrinhoId,
            produtoId
        ],
        callback
    );

}

// =========================
// Atualizar Relacionamento
// =========================

function atualizar(
    carrinhoId,
    produtoId,
    relacionamento,
    callback
) {

    const sql = `
        UPDATE Carrinho_has_Produto
        SET
            Carrinho_idCarrinho = ?,
            Produto_idProduto = ?
        WHERE Carrinho_idCarrinho = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            relacionamento.Carrinho_idCarrinho,
            relacionamento.Produto_idProduto,

            carrinhoId,
            produtoId
        ],
        callback
    );

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(
    carrinhoId,
    produtoId,
    callback
) {

    const sql = `
        DELETE FROM Carrinho_has_Produto
        WHERE Carrinho_idCarrinho = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            carrinhoId,
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