const enderecoHasClienteModel = require("../model/endereco_has_cliente_model");

//==========================================
// LISTAR
//==========================================

exports.listar = (req, res) => {

    enderecoHasClienteModel.listar((erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json(resultado);

    });

};

//==========================================
// BUSCAR POR ID
//==========================================

exports.buscarPorId = (req, res) => {

    const { Endereco_idEndereco, Cliente_idCliente } = req.params;

    enderecoHasClienteModel.buscarPorId(
        Endereco_idEndereco,
        Cliente_idCliente,
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            if (resultado.length === 0) {
                return res.status(404).json({
                    mensagem: "Registro não encontrado."
                });
            }

            res.status(200).json(resultado[0]);

        });

};

//==========================================
// CADASTRAR
//==========================================

exports.cadastrar = (req, res) => {

    const dados = req.body;

    enderecoHasClienteModel.cadastrar(dados, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(201).json({
            mensagem: "Registro cadastrado com sucesso!"
        });

    });

};

//==========================================
// ATUALIZAR
//==========================================

exports.atualizar = (req, res) => {

    const { Endereco_idEndereco, Cliente_idCliente } = req.params;
    const dados = req.body;

    enderecoHasClienteModel.atualizar(
        Endereco_idEndereco,
        Cliente_idCliente,
        dados,
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Registro atualizado com sucesso!"
            });

        });

};

//==========================================
// EXCLUIR
//==========================================

exports.excluir = (req, res) => {

    const { Endereco_idEndereco, Cliente_idCliente } = req.params;

    enderecoHasClienteModel.excluir(
        Endereco_idEndereco,
        Cliente_idCliente,
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Registro excluído com sucesso!"
            });

        });

};