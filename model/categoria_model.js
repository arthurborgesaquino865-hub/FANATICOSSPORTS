const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cartão de Pagamento
// =========================

function cadastrar(categoria, callback) {

    const sql = `INSERT INTO Categoria
        ( idCategoria,nome )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            categoria.idCategoria,
            categoria.nome,
        ],
        callback
    );

}

// =========================
// Listar Categorias
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Categoria
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Categoria
        WHERE idCategoria = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Nome
// =========================

function buscarPorNome(nome, callback) {

    const sql = `
        SELECT * FROM Categoria
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Cartão de Pagamento
// =========================

function atualizar(id, categoria, callback) {

    const sql = `
        UPDATE Categoria
        SET

            idCategoria = ?,
            nome = ?,

        WHERE idCategoria = ?
    `;

    conexao.query(
        sql,
        [
            categoria.idCategoria,
            categoria.nome,
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
        DELETE FROM Categoria
        WHERE idCategoria = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorNome,
    atualizar,
    excluir





};