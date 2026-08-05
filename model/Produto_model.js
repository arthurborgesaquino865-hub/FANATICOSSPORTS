/*
=========================================================
    MODEL PRODUTO
    FANÁTICOS SPORTS
=========================================================
*/


const conexao = require("../conexao/conexao.js");





//=========================================================
// CADASTRAR PRODUTO
//=========================================================


function cadastrar(produto, callback){



    const sql = `

        INSERT INTO Produto
        (
            nome,
            descricao,
            preco,
            estoque,
            Marca_idMarca,
            Categoria_idCategoria
        )

        VALUES (?, ?, ?, ?, ?, ?)

    `;



    conexao.query(

        sql,

        [

            produto.nome,

            produto.descricao,

            produto.preco,

            produto.estoque,

            produto.Marca_idMarca,

            produto.Categoria_idCategoria

        ],

        callback

    );

}








//=========================================================
// LISTAR PRODUTOS
//=========================================================


function listar(callback) {

    const sql = `

        SELECT

            p.idProduto,

            p.nome,

            p.descricao,

            p.preco,

            p.estoque,

            m.nome AS nomeMarca,

            c.nome AS nomeCategoria

        FROM Produto p

        LEFT JOIN Marca m
            ON p.Marca_idMarca = m.idMarca

        LEFT JOIN Categoria c
            ON p.Categoria_idCategoria = c.idCategoria

        ORDER BY p.idProduto DESC

    `;

    conexao.query(sql, callback);

}








// =========================
// Buscar Produto por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `

        SELECT

            p.idProduto,

            p.nome,

            p.descricao,

            p.preco,

            p.estoque,

            m.nome AS nomeMarca,

            c.nome AS nomeCategoria

        FROM Produto p

        LEFT JOIN Marca m
            ON p.Marca_idMarca = m.idMarca

        LEFT JOIN Categoria c
            ON p.Categoria_idCategoria = c.idCategoria

        WHERE p.idProduto = ?

    `;

    conexao.query(sql, [id], callback);

}








//=========================================================
// ATUALIZAR PRODUTO
//=========================================================


function atualizar(id, produto, callback){



    const sql = `


        UPDATE Produto

        SET


            nome = ?,


            descricao = ?,


            preco = ?,


            estoque = ?,


            Marca_idMarca = ?,


            Categoria_idCategoria = ?



        WHERE idProduto = ?



    `;



    conexao.query(

        sql,

        [

            produto.nome,

            produto.descricao,

            produto.preco,

            produto.estoque,

            produto.Marca_idMarca,

            produto.Categoria_idCategoria,

            id


        ],

        callback

    );


}








//=========================================================
// EXCLUIR PRODUTO
//=========================================================


function excluir(id, callback){



    const sql = `


        DELETE FROM Produto

        WHERE idProduto = ?



    `;



    conexao.query(

        sql,

        [

            id

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