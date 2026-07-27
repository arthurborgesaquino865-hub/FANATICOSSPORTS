const cupomHasCategoriaHasProdutoModel = require("../model/cupom_has_categoria_has_produto_model");

//==========================================
// LISTAR
//==========================================

exports.listar = (req, res) => {

    cupomHasCategoriaHasProdutoModel.listar((erro, resultado) => {

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
        Cupom_idCupom,
        Cupom_Loja_idLoja,
        Categoria_has_Produto_Categoria_idCategoria,
        Categoria_has_Produto_Produto_idProduto,
        Categoria_has_Produto_Produto_Loja_idLoja,
        Categoria_has_Produto_Produto_Loja_Logista_idLogista,
        Categoria_has_Produto_Produto_Marca_idMarca
    } = req.params;

    cupomHasCategoriaHasProdutoModel.buscarPorId(
        Cupom_idCupom,
        Cupom_Loja_idLoja,
        Categoria_has_Produto_Categoria_idCategoria,
        Categoria_has_Produto_Produto_idProduto,
        Categoria_has_Produto_Produto_Loja_idLoja,
        Categoria_has_Produto_Produto_Loja_Logista_idLogista,
        Categoria_has_Produto_Produto_Marca_idMarca,
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

    cupomHasCategoriaHasProdutoModel.cadastrar(dados, (erro, resultado) => {

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
        Cupom_idCupom,
        Cupom_Loja_idLoja,
        Categoria_has_Produto_Categoria_idCategoria,
        Categoria_has_Produto_Produto_idProduto,
        Categoria_has_Produto_Produto_Loja_idLoja,
        Categoria_has_Produto_Produto_Loja_Logista_idLogista,
        Categoria_has_Produto_Produto_Marca_idMarca
    } = req.params;

    const dados = req.body;

    cupomHasCategoriaHasProdutoModel.atualizar(
        Cupom_idCupom,
        Cupom_Loja_idLoja,
        Categoria_has_Produto_Categoria_idCategoria,
        Categoria_has_Produto_Produto_idProduto,
        Categoria_has_Produto_Produto_Loja_idLoja,
        Categoria_has_Produto_Produto_Loja_Logista_idLogista,
        Categoria_has_Produto_Produto_Marca_idMarca,
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
        Cupom_idCupom,
        Cupom_Loja_idLoja,
        Categoria_has_Produto_Categoria_idCategoria,
        Categoria_has_Produto_Produto_idProduto,
        Categoria_has_Produto_Produto_Loja_idLoja,
        Categoria_has_Produto_Produto_Loja_Logista_idLogista,
        Categoria_has_Produto_Produto_Marca_idMarca
    } = req.params;

    cupomHasCategoriaHasProdutoModel.excluir(
        Cupom_idCupom,
        Cupom_Loja_idLoja,
        Categoria_has_Produto_Categoria_idCategoria,
        Categoria_has_Produto_Produto_idProduto,
        Categoria_has_Produto_Produto_Loja_idLoja,
        Categoria_has_Produto_Produto_Loja_Logista_idLogista,
        Categoria_has_Produto_Produto_Marca_idMarca,
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Registro excluído com sucesso!"
            });

        });

};