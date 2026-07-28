const conexao = require("../conexao/conexao.js");

//==========================================
// LISTAR
//==========================================

exports.listar = (callback) => {

    const sql = `
        SELECT *
        FROM Categoria_has_Produto
    `;

    conexao.query(sql, callback);

};

//==========================================
// BUSCAR POR ID
//==========================================

exports.buscarPorId = (Categoria_idCategoria, Produto_idProduto, callback) => {

    const sql = `
        SELECT *
        FROM Categoria_has_Produto
        WHERE Categoria_idCategoria = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(sql, [Categoria_idCategoria, Produto_idProduto], callback);

};

//==========================================
// CADASTRAR
//==========================================

exports.cadastrar = (dados, callback) => {

    const sql = `
        INSERT INTO Categoria_has_Produto
        SET ?
    `;

    conexao.query(sql, dados, callback);

};

//==========================================
// ATUALIZAR
//==========================================

exports.atualizar = (Categoria_idCategoria, Produto_idProduto, dados, callback) => {

    const sql = `
        UPDATE Categoria_has_Produto
        SET ?
        WHERE Categoria_idCategoria = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [dados, Categoria_idCategoria, Produto_idProduto],
        callback
    );

};

//==========================================
// EXCLUIR
//==========================================

exports.excluir = (Categoria_idCategoria, Produto_idProduto, callback) => {

    const sql = `
        DELETE FROM Categoria_has_Produto
        WHERE Categoria_idCategoria = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [Categoria_idCategoria, Produto_idProduto],
        callback
    );

};