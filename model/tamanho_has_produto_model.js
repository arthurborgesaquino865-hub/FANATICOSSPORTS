//=====================================================
// IMPORTAR CONEXÃO
//=====================================================

const conexao =
    require("../conexao/conexao.js");


//=====================================================
// CADASTRAR RELACIONAMENTO
// PRODUTO X TAMANHO
//=====================================================

function cadastrar(dados, callback) {

    const sql = `

        INSERT INTO Produto_has_Tamanho
        (
            Produto_idProduto,
            Tamanho_idTamanho
        )

        VALUES (?, ?)

    `;


    conexao.query(

        sql,

        [

            dados.Produto_idProduto,

            dados.Tamanho_idTamanho

        ],

        callback

    );

}


//=====================================================
// LISTAR RELACIONAMENTOS
//=====================================================

function listar(callback) {

    const sql = `

        SELECT

            Produto_has_Tamanho.Produto_idProduto,

            Produto.nome AS produto,

            Produto_has_Tamanho.Tamanho_idTamanho,

            Tamanho.tamanho

        FROM Produto_has_Tamanho

        INNER JOIN Produto
            ON Produto_has_Tamanho.Produto_idProduto =
               Produto.idProduto

        INNER JOIN Tamanho
            ON Produto_has_Tamanho.Tamanho_idTamanho =
               Tamanho.idTamanho

    `;


    conexao.query(
        sql,
        callback
    );

}


//=====================================================
// BUSCAR POR PRODUTO
//=====================================================

function buscarPorProduto(
    idProduto,
    callback
) {

    const sql = `

        SELECT

            Produto_has_Tamanho.Produto_idProduto,

            Produto_has_Tamanho.Tamanho_idTamanho,

            Tamanho.tamanho

        FROM Produto_has_Tamanho

        INNER JOIN Tamanho
            ON Produto_has_Tamanho.Tamanho_idTamanho =
               Tamanho.idTamanho

        WHERE
            Produto_has_Tamanho.Produto_idProduto = ?

    `;


    conexao.query(

        sql,

        [idProduto],

        callback

    );

}


//=====================================================
// EXCLUIR RELACIONAMENTO
//=====================================================

function excluir(
    idProduto,
    idTamanho,
    callback
) {

    const sql = `

        DELETE FROM Produto_has_Tamanho

        WHERE
            Produto_idProduto = ?

        AND
            Tamanho_idTamanho = ?

    `;


    conexao.query(

        sql,

        [
            idProduto,
            idTamanho
        ],

        callback

    );

}


//=====================================================
// EXCLUIR TODOS OS TAMANHOS DO PRODUTO
//=====================================================

function excluirPorProduto(
    idProduto,
    callback
) {

    const sql = `

        DELETE FROM Produto_has_Tamanho

        WHERE Produto_idProduto = ?

    `;


    conexao.query(

        sql,

        [idProduto],

        callback

    );

}


//=====================================================
// EXPORTAÇÃO
//=====================================================

module.exports = {

    cadastrar,

    listar,

    buscarPorProduto,

    excluir,

    excluirPorProduto

};