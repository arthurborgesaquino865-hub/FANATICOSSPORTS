const promocaoHasProdutoModel = require("../model/promocao_has_produto_model");

//==========================================
// LISTAR
//==========================================

exports.listar = (req, res) => {

    promocaoHasProdutoModel.listar((erro, resultado) => {

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

    const { Promocao_idPromocao, Produto_idProduto } = req.params;

    promocaoHasProdutoModel.buscarPorId(
        Promocao_idPromocao,
        Produto_idProduto,
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

    promocaoHasProdutoModel.cadastrar(dados, (erro, resultado) => {

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

    const { Promocao_idPromocao, Produto_idProduto } = req.params;
    const dados = req.body;

    promocaoHasProdutoModel.atualizar(
        Promocao_idPromocao,
        Produto_idProduto,
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

    const { Promocao_idPromocao, Produto_idProduto } = req.params;

    promocaoHasProdutoModel.excluir(
        Promocao_idPromocao,
        Produto_idProduto,
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Registro excluído com sucesso!"
            });

        });

};