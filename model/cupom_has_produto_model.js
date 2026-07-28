const conexao = require("../conexao/conexao.js");
//==========================================
// LISTAR
//==========================================

exports.listar = (callback) => {

    const sql = `
        SELECT *
        FROM Cupom_has_Produto
    `;

    conexao.query(sql, callback);

};

//==========================================
// BUSCAR POR ID
//==========================================

exports.buscarPorId = (Cupom_idCupom, Produto_idProduto, callback) => {

    const sql = `
        SELECT *
        FROM Cupom_has_Produto
        WHERE Cupom_idCupom = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(sql, [Cupom_idCupom, Produto_idProduto], callback);

};

//==========================================
// CADASTRAR
//==========================================

exports.cadastrar = (dados, callback) => {

    const sql = `
        INSERT INTO Cupom_has_Produto
        SET ?
    `;

    conexao.query(sql, dados, callback);

};

//==========================================
// ATUALIZAR
//==========================================

exports.atualizar = (Cupom_idCupom, Produto_idProduto, dados, callback) => {

    const sql = `
        UPDATE Cupom_has_Produto
        SET ?
        WHERE Cupom_idCupom = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [dados, Cupom_idCupom, Produto_idProduto],
        callback
    );

};

//==========================================
// EXCLUIR
//==========================================

exports.excluir = (Cupom_idCupom, Produto_idProduto, callback) => {

    const sql = `
        DELETE FROM Cupom_has_Produto
        WHERE Cupom_idCupom = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [Cupom_idCupom, Produto_idProduto],
        callback
    );

};