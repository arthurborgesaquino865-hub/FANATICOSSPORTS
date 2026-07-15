const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Relacionamento
// =========================

function cadastrar(relacionamento, callback) {

    const sql = `INSERT INTO Endereco_has_Cliente
        (Endereco_idEndereco, Cliente_idCliente)
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            relacionamento.Endereco_idEndereco,
            relacionamento.Cliente_idCliente
        ],
        callback
    );

}

// =========================
// Listar Relacionamentos
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Endereco_has_Cliente
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por IDs
// =========================

function buscarPorId(enderecoId, clienteId, callback) {

    const sql = `
        SELECT *
        FROM Endereco_has_Cliente
        WHERE Endereco_idEndereco = ?
        AND Cliente_idCliente = ?
    `;

    conexao.query(sql, [enderecoId, clienteId], callback);

}

// =========================
// Atualizar Relacionamento
// =========================

function atualizar(enderecoId, clienteId, relacionamento, callback) {

    const sql = `
        UPDATE Endereco_has_Cliente
        SET
            Endereco_idEndereco = ?,
            Cliente_idCliente = ?
        WHERE Endereco_idEndereco = ?
        AND Cliente_idCliente = ?
    `;

    conexao.query(
        sql,
        [
            relacionamento.Endereco_idEndereco,
            relacionamento.Cliente_idCliente,
            enderecoId,
            clienteId
        ],
        callback
    );

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(enderecoId, clienteId, callback) {

    const sql = `
        DELETE FROM Endereco_has_Cliente
        WHERE Endereco_idEndereco = ?
        AND Cliente_idCliente = ?
    `;

    conexao.query(sql, [enderecoId, clienteId], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};