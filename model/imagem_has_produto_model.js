const conexao =
require("../conexao/conexao.js");


function listar(callback){

    const sql = `

        SELECT *

        FROM imagem_has_produto

    `;

    conexao.query(

        sql,

        callback

    );

}


function buscar(id,callback){

    const sql = `

        SELECT *

        FROM imagem_has_produto

        WHERE idImagemProduto = ?

    `;

    conexao.query(

        sql,

        [id],

        callback

    );

}


function cadastrar(dados,callback){

    const sql = `

        INSERT INTO imagem_has_produto

        (

            idProduto,

            caminhoImagem,

            principal

        )

        VALUES

        (

            ?,

            ?,

            ?

        )

    `;

    conexao.query(

        sql,

        [

            dados.idProduto,

            dados.caminhoImagem,

            dados.principal

        ],

        callback

    );

}


function editar(id,dados,callback){

    const sql = `

        UPDATE imagem_has_produto

        SET

            idProduto = ?,

            caminhoImagem = ?,

            principal = ?

        WHERE

            idImagemProduto = ?

    `;

    conexao.query(

        sql,

        [

            dados.idProduto,

            dados.caminhoImagem,

            dados.principal,

            id

        ],

        callback

    );

}


function excluir(id,callback){

    const sql = `

        DELETE FROM imagem_has_produto

        WHERE idImagemProduto = ?

    `;

    conexao.query(

        sql,

        [id],

        callback

    );

}


module.exports={

    listar,

    buscar,

    cadastrar,

    editar,

    excluir

};