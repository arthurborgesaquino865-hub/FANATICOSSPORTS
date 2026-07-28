const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Relacionamento
// =========================

function cadastrar(relacionamento, callback) {

    const sql = `INSERT INTO Categoria_has_Promocao
        (
            Categoria_idCategoria,
            Promocao_idPromocao,
            Promocao_Banner_idBanner
        )
        VALUES (?, ?, ?)`;

    conexao.query(
        sql,
        [
            relacionamento.Categoria_idCategoria,
            relacionamento.Promocao_idPromocao,
            relacionamento.Promocao_Banner_idBanner
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
        FROM Categoria_has_Promocao
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por IDs
// =========================

function buscarPorId(
    categoriaId,
    promocaoId,
    bannerId,
    callback
) {

    const sql = `
        SELECT *
        FROM Categoria_has_Promocao
        WHERE Categoria_idCategoria = ?
        AND Promocao_idPromocao = ?
        AND Promocao_Banner_idBanner = ?
    `;

    conexao.query(
        sql,
        [
            categoriaId,
            promocaoId,
            bannerId
        ],
        callback
    );

}

// =========================
// Atualizar Relacionamento
// =========================

function atualizar(
    categoriaId,
    promocaoId,
    bannerId,
    relacionamento,
    callback
) {

    const sql = `
        UPDATE Categoria_has_Promocao
        SET
            Categoria_idCategoria = ?,
            Promocao_idPromocao = ?,
            Promocao_Banner_idBanner = ?
        WHERE Categoria_idCategoria = ?
        AND Promocao_idPromocao = ?
        AND Promocao_Banner_idBanner = ?
    `;

    conexao.query(
        sql,
        [
            relacionamento.Categoria_idCategoria,
            relacionamento.Promocao_idPromocao,
            relacionamento.Promocao_Banner_idBanner,

            categoriaId,
            promocaoId,
            bannerId
        ],
        callback
    );

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(
    categoriaId,
    promocaoId,
    bannerId,
    callback
) {

    const sql = `
        DELETE FROM Categoria_has_Promocao
        WHERE Categoria_idCategoria = ?
        AND Promocao_idPromocao = ?
        AND Promocao_Banner_idBanner = ?
    `;

    conexao.query(
        sql,
        [
            categoriaId,
            promocaoId,
            bannerId
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