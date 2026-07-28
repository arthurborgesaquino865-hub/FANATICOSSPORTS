const conexao = require("../conexao/conexao.js");

//==========================================
// LISTAR
//==========================================

exports.listar = (callback) => {

    const sql = `
        SELECT *
        FROM Cupom_has_Categoria
    `;

    conexao.query(sql, callback);

};

//==========================================
// BUSCAR POR ID
//==========================================

exports.buscarPorId = (Cupom_idCupom, Categoria_idCategoria, callback) => {

    const sql = `
        SELECT *
        FROM Cupom_has_Categoria
        WHERE Cupom_idCupom = ?
        AND Categoria_idCategoria = ?
    `;

    conexao.query(sql, [Cupom_idCupom, Categoria_idCategoria], callback);

};

//==========================================
// CADASTRAR
//==========================================

exports.cadastrar = (dados, callback) => {

    const sql = `
        INSERT INTO Cupom_has_Categoria
        SET ?
    `;

    conexao.query(sql, dados, callback);

};

//==========================================
// ATUALIZAR
//==========================================

exports.atualizar = (Cupom_idCupom, Categoria_idCategoria, dados, callback) => {

    const sql = `
        UPDATE Cupom_has_Categoria
        SET ?
        WHERE Cupom_idCupom = ?
        AND Categoria_idCategoria = ?
    `;

    conexao.query(
        sql,
        [dados, Cupom_idCupom, Categoria_idCategoria],
        callback
    );

};

//==========================================
// EXCLUIR
//==========================================

exports.excluir = (Cupom_idCupom, Categoria_idCategoria, callback) => {

    const sql = `
        DELETE FROM Cupom_has_Categoria
        WHERE Cupom_idCupom = ?
        AND Categoria_idCategoria = ?
    `;

    conexao.query(
        sql,
        [Cupom_idCupom, Categoria_idCategoria],
        callback
    );

};