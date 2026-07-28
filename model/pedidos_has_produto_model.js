const conexao = require("../conexao/conexao.js");

//==========================================
// LISTAR
//==========================================

exports.listar = (callback) => {

    const sql = `
        SELECT *
        FROM Pedidos_has_Produto
    `;

    conexao.query(sql, callback);

};

//==========================================
// BUSCAR POR ID
//==========================================

exports.buscarPorId = (Pedidos_idPedidos, Produto_idProduto, callback) => {

    const sql = `
        SELECT *
        FROM Pedidos_has_Produto
        WHERE Pedidos_idPedidos = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(sql, [Pedidos_idPedidos, Produto_idProduto], callback);

};

//==========================================
// CADASTRAR
//==========================================

exports.cadastrar = (dados, callback) => {

    const sql = `
        INSERT INTO Pedidos_has_Produto
        SET ?
    `;

    conexao.query(sql, dados, callback);

};

//==========================================
// ATUALIZAR
//==========================================

exports.atualizar = (Pedidos_idPedidos, Produto_idProduto, dados, callback) => {

    const sql = `
        UPDATE Pedidos_has_Produto
        SET ?
        WHERE Pedidos_idPedidos = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [dados, Pedidos_idPedidos, Produto_idProduto],
        callback
    );

};

//==========================================
// EXCLUIR
//==========================================

exports.excluir = (Pedidos_idPedidos, Produto_idProduto, callback) => {

    const sql = `
        DELETE FROM Pedidos_has_Produto
        WHERE Pedidos_idPedidos = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [Pedidos_idPedidos, Produto_idProduto],
        callback
    );

};