//=====================================================
// IMPORTAR CONEXÃO
//=====================================================

const db =
    require("../conexao/conexao.js");


//=====================================================
// LISTAR TODOS OS PRODUTOS
//=====================================================

exports.listar = (callback) => {

    const sql = `

        SELECT

            p.idProduto,

            p.nome,

            p.descricao,

           

            p.preco_antigo,

            p.preco_promocional,

            p.quantidade_estoque,

            p.status_produto,

            p.Loja_idLoja,

            p.Marca_idMarca,

            m.nome AS marca,

            p.Categoria_idCategoria,

            c.nome AS categoria,

            (
                SELECT ip.arquivo

                FROM Imagem_produto ip

                WHERE
                    ip.Produto_idProduto =
                    p.idProduto

                ORDER BY
                    ip.idImagem_produto ASC

                LIMIT 1

            ) AS imagem

        FROM Produto p


        LEFT JOIN Marca m

            ON p.Marca_idMarca =
               m.idMarca


        LEFT JOIN Categoria c

            ON p.Categoria_idCategoria =
               c.idCategoria


        WHERE
            p.status_produto = 1


        ORDER BY
            p.idProduto DESC

    `;


    db.query(
        sql,
        callback
    );

};


//=====================================================
// BUSCAR PRODUTO POR ID
//=====================================================

exports.buscarPorId = (
    id,
    callback
) => {

    const sql = `

        SELECT *

        FROM Produto

        WHERE idProduto = ?

    `;


    db.query(
        sql,
        [id],
        callback
    );

};


//=====================================================
// CADASTRAR PRODUTO
//=====================================================

exports.cadastrar = (
    dados,
    callback
) => {

    const sql = `

        INSERT INTO Produto
        (
            nome,

            descricao,

           

            preco_antigo,

            preco_promocional,

            quantidade_estoque,

            status_produto,

            Loja_idLoja,

            Marca_idMarca,

            Categoria_idCategoria
        )

        VALUES
        (
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
        )

    `;


    db.query(

        sql,

        [

            dados.nome,

            dados.descricao,

            

            dados.preco_antigo,

            dados.preco_promocional,

            dados.quantidade_estoque,

            dados.status_produto,

            dados.Loja_idLoja,

            dados.Marca_idMarca,

            dados.Categoria_idCategoria

        ],

        callback

    );

};


//=====================================================
// ATUALIZAR PRODUTO
//=====================================================

exports.atualizar = (
    id,
    dados,
    callback
) => {

    const sql = `

        UPDATE Produto

        SET

            nome = ?,

            descricao = ?,

             

            preco_antigo = ?,

            preco_promocional = ?,

            quantidade_estoque = ?,

            status_produto = ?,

            Loja_idLoja = ?,

            Marca_idMarca = ?,

            Categoria_idCategoria = ?

        WHERE idProduto = ?

    `;


    db.query(

        sql,

        [

            dados.nome,

            dados.descricao,

            
            dados.preco_antigo,

            dados.preco_promocional,

            dados.quantidade_estoque,

            dados.status_produto,

            dados.Loja_idLoja,

            dados.Marca_idMarca,

            dados.Categoria_idCategoria,

            id

        ],

        callback

    );

};


//=====================================================
// EXCLUIR PRODUTO
//=====================================================

exports.excluir = (
    id,
    callback
) => {

    const sql = `

        DELETE FROM Produto

        WHERE idProduto = ?

    `;


    db.query(
        sql,
        [id],
        callback
    );

};