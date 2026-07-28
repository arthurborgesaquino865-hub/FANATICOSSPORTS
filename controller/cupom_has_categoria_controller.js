const cupomHasCategoriaModel = require("../model/cupom_has_categoria_model");

//==========================================
// LISTAR
//==========================================

exports.listar = (req, res) => {

    cupomHasCategoriaModel.listar((erro, resultado) => {

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

    const { Cupom_idCupom, Categoria_idCategoria } = req.params;

    cupomHasCategoriaModel.buscarPorId(
        Cupom_idCupom,
        Categoria_idCategoria,
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

    cupomHasCategoriaModel.cadastrar(dados, (erro, resultado) => {

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

    const { Cupom_idCupom, Categoria_idCategoria } = req.params;

    const dados = req.body;

    cupomHasCategoriaModel.atualizar(
        Cupom_idCupom,
        Categoria_idCategoria,
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

    const { Cupom_idCupom, Categoria_idCategoria } = req.params;

    cupomHasCategoriaModel.excluir(
        Cupom_idCupom,
        Categoria_idCategoria,
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Registro excluído com sucesso!"
            });

        });

};