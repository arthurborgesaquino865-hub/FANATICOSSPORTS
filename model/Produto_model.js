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


function listar(callback){



    const sql = `


        SELECT

        Produto.*,

        Marca.nome AS nomeMarca,

        Categoria.nome AS nomeCategoria


        FROM Produto



        LEFT JOIN Marca

        ON Produto.Marca_idMarca = Marca.idMarca



        LEFT JOIN Categoria

        ON Produto.Categoria_idCategoria = Categoria.idCategoria



    `;



    conexao.query(

        sql,

        callback

    );

}








//=========================================================
// BUSCAR PRODUTO POR ID
//=========================================================


function buscarPorId(id, callback){



    const sql = `


        SELECT *

        FROM Produto

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