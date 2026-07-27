const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cartão de Pagamento
// =========================

function cadastrar(Promocao, callback) {

    const sql = `INSERT INTO Promocao
        ( data_inicio,data_final,valor_promocao,nome,banner_idbanner )
        VALUES (?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            Promocao.data_inicio,
            Promocao.data_final,
            Promocao.valor_promocao,
            Promocao.nome,
            Promocao.banner_idbanner
            
        ],
        callback
    );

}

// =========================
// Listar Promocoes
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Promocao
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Promocao
        WHERE idPromocao = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(nome, callback) {

    const sql = `
        SELECT * FROM Promocao
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Promocao
// =========================

function atualizar(id, Promocao, callback) {

    const sql = `
        UPDATE Promocao
        SET

            data_inicio = ?,
            data_final = ?,
            valor_promocao = ?,
            nome = ?,
            banner_idbanner = ?
            
        WHERE idPromocao = ?
    `;

    conexao.query(
        sql,
        [
            Promocao.data_inicio,
            Promocao.data_final,
            Promocao.valor_promocao,
            Promocao.nome,
            Promocao.banner_idbanner,
            id
        ],
        callback
    );

}


// =========================
// Excluir Promocao
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Promocao
        WHERE idPromocao = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    
    atualizar,
    excluir

};