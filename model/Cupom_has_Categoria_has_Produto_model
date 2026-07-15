const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Relacionamento
// =========================

function cadastrar(relacionamento, callback) {

    const sql = `INSERT INTO Cupom_has_Categoria_has_Produto
        (
            Cupom_idCupom,
            Cupom_Loja_idLoja,
            Categoria_has_Produto_Categoria_idCategoria,
            Categoria_has_Produto_Produto_idProduto,
            Categoria_has_Produto_Produto_Loja_idLoja,
            Categoria_has_Produto_Produto_Marca_idMarca
        )
        VALUES (?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            relacionamento.Cupom_idCupom,
            relacionamento.Cupom_Loja_idLoja,
            relacionamento.Categoria_has_Produto_Categoria_idCategoria,
            relacionamento.Categoria_has_Produto_Produto_idProduto,
            relacionamento.Categoria_has_Produto_Produto_Loja_idLoja,
            relacionamento.Categoria_has_Produto_Produto_Marca_idMarca
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
        FROM Cupom_has_Categoria_has_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por IDs
// =========================

function buscarPorId(
    cupomId,
    lojaId,
    categoriaId,
    produtoId,
    produtoLojaId,
    marcaId,
    callback
) {

    const sql = `
        SELECT *
        FROM Cupom_has_Categoria_has_Produto
        WHERE Cupom_idCupom = ?
        AND Cupom_Loja_idLoja = ?
        AND Categoria_has_Produto_Categoria_idCategoria = ?
        AND Categoria_has_Produto_Produto_idProduto = ?
        AND Categoria_has_Produto_Produto_Loja_idLoja = ?
        AND Categoria_has_Produto_Produto_Marca_idMarca = ?
    `;

    conexao.query(
        sql,
        [
            cupomId,
            lojaId,
            categoriaId,
            produtoId,
            produtoLojaId,
            marcaId
        ],
        callback
    );

}

// =========================
// Atualizar Relacionamento
// =========================

function atualizar(
    cupomId,
    lojaId,
    categoriaId,
    produtoId,
    produtoLojaId,
    marcaId,
    relacionamento,
    callback
) {

    const sql = `
        UPDATE Cupom_has_Categoria_has_Produto
        SET
            Cupom_idCupom = ?,
            Cupom_Loja_idLoja = ?,
            Categoria_has_Produto_Categoria_idCategoria = ?,
            Categoria_has_Produto_Produto_idProduto = ?,
            Categoria_has_Produto_Produto_Loja_idLoja = ?,
            Categoria_has_Produto_Produto_Marca_idMarca = ?
        WHERE Cupom_idCupom = ?
        AND Cupom_Loja_idLoja = ?
        AND Categoria_has_Produto_Categoria_idCategoria = ?
        AND Categoria_has_Produto_Produto_idProduto = ?
        AND Categoria_has_Produto_Produto_Loja_idLoja = ?
        AND Categoria_has_Produto_Produto_Marca_idMarca = ?
    `;

    conexao.query(
        sql,
        [
            relacionamento.Cupom_idCupom,
            relacionamento.Cupom_Loja_idLoja,
            relacionamento.Categoria_has_Produto_Categoria_idCategoria,
            relacionamento.Categoria_has_Produto_Produto_idProduto,
            relacionamento.Categoria_has_Produto_Produto_Loja_idLoja,
            relacionamento.Categoria_has_Produto_Produto_Marca_idMarca,

            cupomId,
            lojaId,
            categoriaId,
            produtoId,
            produtoLojaId,
            marcaId
        ],
        callback
    );

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(
    cupomId,
    lojaId,
    categoriaId,
    produtoId,
    produtoLojaId,
    marcaId,
    callback
) {

    const sql = `
        DELETE FROM Cupom_has_Categoria_has_Produto
        WHERE Cupom_idCupom = ?
        AND Cupom_Loja_idLoja = ?
        AND Categoria_has_Produto_Categoria_idCategoria = ?
        AND Categoria_has_Produto_Produto_idProduto = ?
        AND Categoria_has_Produto_Produto_Loja_idLoja = ?
        AND Categoria_has_Produto_Produto_Marca_idMarca = ?
    `;

    conexao.query(
        sql,
        [
            cupomId,
            lojaId,
            categoriaId,
            produtoId,
            produtoLojaId,
            marcaId
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