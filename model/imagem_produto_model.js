const conexao =
    require("../conexao/conexao.js");


//==========================================
// CADASTRAR IMAGEM
//==========================================

function cadastrar(imagem, callback) {

    const sql = `

        INSERT INTO Imagem_produto
        (
            arquivo,
            Produto_idProduto
        )

        VALUES (?, ?)

    `;


    conexao.query(

        sql,

        [

            imagem.arquivo,

            imagem.Produto_idProduto

        ],

        callback

    );

}


//==========================================
// LISTAR IMAGENS
//==========================================

function listar(callback) {

    const sql = `

        SELECT
            idImagem_produto,
            Produto_idProduto

        FROM Imagem_produto

        ORDER BY idImagem_produto DESC

    `;


    conexao.query(
        sql,
        callback
    );

}


//==========================================
// BUSCAR IMAGEM
//==========================================

function buscarPorId(id, callback) {

    const sql = `

        SELECT *

        FROM Imagem_produto

        WHERE idImagem_produto = ?

    `;


    conexao.query(
        sql,
        [id],
        callback
    );

}


//==========================================
// ATUALIZAR IMAGEM
//==========================================

function atualizar(id, imagem, callback) {

    const sql = `

        UPDATE Imagem_produto

        SET

            arquivo = ?,

            Produto_idProduto = ?

        WHERE idImagem_produto = ?

    `;


    conexao.query(

        sql,

        [

            imagem.arquivo,

            imagem.Produto_idProduto,

            id

        ],

        callback

    );

}


//==========================================
// EXCLUIR IMAGEM
//==========================================

function excluir(id, callback) {

    const sql = `

        DELETE FROM Imagem_produto

        WHERE idImagem_produto = ?

    `;


    conexao.query(
        sql,
        [id],
        callback
    );

}


//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,

    listar,

    buscarPorId,

    atualizar,

    excluir

};