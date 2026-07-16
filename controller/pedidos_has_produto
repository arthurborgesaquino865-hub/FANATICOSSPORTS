const pedidosHasProdutoModel = require("../model/pedidos_has_produto_model");

//==========================================
// LISTAR
//==========================================

exports.listar = (req, res) => {

    pedidosHasProdutoModel.listar((erro, resultado) => {

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

    const { Pedidos_idPedidos, Produto_idProduto } = req.params;

    pedidosHasProdutoModel.buscarPorId(
        Pedidos_idPedidos,
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

    pedidosHasProdutoModel.cadastrar(dados, (erro, resultado) => {

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

    const { Pedidos_idPedidos, Produto_idProduto } = req.params;
    const dados = req.body;

    pedidosHasProdutoModel.atualizar(
        Pedidos_idPedidos,
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

    const { Pedidos_idPedidos, Produto_idProduto } = req.params;

    pedidosHasProdutoModel.excluir(
        Pedidos_idPedidos,
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