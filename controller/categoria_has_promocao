const categoriaHasPromocaoModel = require("../model/categoria_has_promocao_model");

//==========================================
// LISTAR
//==========================================

exports.listar = (req, res) => {

    categoriaHasPromocaoModel.listar((erro, resultado) => {

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

    const {
        Categoria_idCategoria,
        Promocao_idPromocao,
        Promocao_Banner_idBanner
    } = req.params;

    categoriaHasPromocaoModel.buscarPorId(
        Categoria_idCategoria,
        Promocao_idPromocao,
        Promocao_Banner_idBanner,
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

    categoriaHasPromocaoModel.cadastrar(dados, (erro, resultado) => {

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

    const {
        Categoria_idCategoria,
        Promocao_idPromocao,
        Promocao_Banner_idBanner
    } = req.params;

    const dados = req.body;

    categoriaHasPromocaoModel.atualizar(
        Categoria_idCategoria,
        Promocao_idPromocao,
        Promocao_Banner_idBanner,
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

    const {
        Categoria_idCategoria,
        Promocao_idPromocao,
        Promocao_Banner_idBanner
    } = req.params;

    categoriaHasPromocaoModel.excluir(
        Categoria_idCategoria,
        Promocao_idPromocao,
        Promocao_Banner_idBanner,
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Registro excluído com sucesso!"
            });

        });

};