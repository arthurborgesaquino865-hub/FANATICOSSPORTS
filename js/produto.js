//criando variaveis
/*nome das variaveis nao pode ter:
-acentos
-espacos
-simbolos
-nao pode comecar com numeros
-nao pode ser escrito com a primeira letra em maiusculo
*/

// variaveis que alteram de valor
let preco_promocional= 99.50;
let preco_antigo=150.89;
let desconto= "-15%";
let quantidade= 5;
let favorito=false;
//variaveis que sao constantes/ nao alternam de valor
const nomeProduto="Camisa do ecuador";
const tamanho=["p","M","G","GG"];
let cores=["azul"];
const avaliacoes=4.5;
const img_miniaturas=
[
    "/assets/frente.jpg",
    "/assets/lateral.jpg",
    "/assets/costas.jpg"
];
const img_principal="/assets/camisaecuador.png";
const descricao="Confeccionado em tecido macio, com execelentes detalhes nas laterais  Possui listras texturizadas por todo o uniforme, criando um padrão moderno e elegante.";
let frete;
// botoes e arquivos
let btn_add_carrinho;
let btn_add_quantidade;
let btn_comprar;
let btn_remover_quantidade;
let btn_calcular_frete;


//codigo para preencher as imagens no html

//criando uma variavel para reconhecer o id da imagem lateral
const lateral= document.getElementById("img-lateral");


//lendo a quantidade de imagens cadastradas e criando as tag img

/* ForEach: percorre uma lista de itens ate o final
- ele percorre o primeiro, se ver que tem outro,ele le o outro
- quando chega no ultimo ele para de ler e finaliza a execuçao
- img_miniatura e chamado pq ele que contem a lista de img
- depois o ForEach e chamado para ler a lista
- e dentro do ForEach passamos o tipo de documento lido (imagem) 
*/
img_miniaturas.forEach(imagem=>{
    //criando uma variavel que crie a tag img na div do html
const img= document.createElement("img");

// criando o codigo que mostra as imagens no site
    img.src=imagem;//ele joga o caminho da img na tag img 
    img.classList.add("img-lateral");//jogar a tag criada na div
    
    /*criando o codigo que substitui a imagem
    principal pela miniatura clicada*/
    img.addEventListener("click",()=>{
        document.getElementById("img-principal").src=
        imagem;
    });//ver se a pessoa clicou na imagem
    lateral.appendChild(img);//mostra a imagem adicionada

});//fechar o ForEach

document.getElementById("imagem-maior").src= img_principal;


//----------PREECHER DADOS DO PRODUTO-----------

document.getElementById("nome-produto").textContent =nomeProduto;
document.getElementById("valor-avaliaçao").textContent =avaliacoes;
document.getElementById("preco-antigo").textContent =preco_antigo;
document.getElementById("preco-promocional").textContent =preco_promocional;
document.getElementById("desconto").textContent =desconto;
//--------CORES DO PRODUTO---------------
// ELE VAI LER QUANTAS CORES O PRODUTO TEM
// VAI CRIAR BOTOES PARA AS CORES 
// -------- CORES DO PRODUTO --------
const listaCores = document.getElementById("cores");

cores.forEach(cor => { // percorrer as cores cadastradas
    const botao = document.createElement("button");

    // criar um botão para cada cor encontrada
    botao.textContent = cor;

    listaCores.appendChild(botao);
});

// -------- TAMANHOS DO PRODUTO --------
const listaTamanhos = document.getElementById("tamanhos");

tamanho.forEach(tamanho => { // percorrer os tamanhos cadastrados
    const botao = document.createElement("button");

    // criar um botão para cada tamanho encontrado
    botao.textContent = tamanho;

    listaTamanhos.appendChild(botao);
});

//----quantidade de produto------
/*o limite de quantidade vai ser igual a quantidade de produtos
que o lojista cadastrou no estoque.
quando o cliente clicar no botao de + a quantidade comprada
aumenta de 1 em 1
quando ele clicar no botao de - a quantidade comprada diminui de 
1 em 1
inicialmente o valor da quantidade aparece como 1.*/

let quantidade_inicial = 1;//criar a quantidade inicial.
// chama os botoes e passar o id do html dentro deles
btn_add_quantidade = document.getElementById("aumentar");
btn_remover_quantidade = document.getElementById("diminuir");
const numero = document.getElementById("numero-quantidade");
//passando o valor inicial para a tag html
numero.textContent = quantidade_inicial;


//criando o codigo de aumentar a quantidade de 1 em 1
btn_remover_quantidade.addEventListener("click", () =>{

    if (quantidade_inicial > 0) {
    quantidade_inicial--;//diminui de 1 em 1
    numero.textContent = quantidade_inicial;
    }


});

//criando o codigo de 1 em 1
btn_add_quantidade.addEventListener("click", () =>{
    //se a quantidade for menor que estoque
    if (quantidade_inicial < quantidade ) {
        quantidade_inicial++;//aumentar de 1 em 1
        numero.textContent = quantidade_inicial;
    } else{
        alert("voce atingiu o limite do estoque");
    }
})

const produtoModel = require("../model/produto_model.js");


//==========================================
// CADASTRAR PRODUTO
//==========================================

function cadastrar(req, res){


    const produto = req.body;



    if(

        !produto.nome ||
        !produto.preco ||
        !produto.estoque

    ){

        return res.status(400).json({

            sucesso:false,

            mensagem:"Preencha os campos obrigatórios."

        });

    }



    produtoModel.cadastrar(

        produto,

        (erro, resultado)=>{


            if(erro){


                console.log(erro);


                return res.status(500).json({

                    sucesso:false,

                    mensagem:"Erro ao cadastrar produto."

                });


            }



            res.status(201).json({

                sucesso:true,

                mensagem:"Produto cadastrado com sucesso!",

                idProduto:resultado.insertId

            });



        }

    );


}






//==========================================
// LISTAR PRODUTOS
//==========================================


function listar(req,res){


    produtoModel.listar(

        (erro,resultado)=>{


            if(erro){


                return res.status(500).json({

                    sucesso:false,

                    mensagem:"Erro ao buscar produtos."

                });


            }



            res.json(resultado);



        }

    );


}





//==========================================
// BUSCAR POR ID
//==========================================


function buscarPorId(req,res){


    const id = req.params.id;



    produtoModel.buscarPorId(

        id,

        (erro,resultado)=>{


            if(erro){


                return res.status(500).json({

                    sucesso:false,

                    mensagem:"Erro ao buscar produto."

                });


            }




            if(resultado.length === 0){


                return res.status(404).json({

                    sucesso:false,

                    mensagem:"Produto não encontrado."

                });


            }




            res.json(resultado[0]);



        }

    );


}





//==========================================
// ATUALIZAR
//==========================================


function atualizar(req,res){


    const id = req.params.id;


    produtoModel.atualizar(

        id,

        req.body,

        (erro)=>{


            if(erro){


                return res.status(500).json({

                    sucesso:false,

                    mensagem:"Erro ao atualizar produto."

                });


            }




            res.json({

                sucesso:true,

                mensagem:"Produto atualizado."

            });



        }

    );


}





//==========================================
// EXCLUIR
//==========================================


function excluir(req,res){


    const id = req.params.id;



    produtoModel.excluir(

        id,

        (erro)=>{


            if(erro){


                return res.status(500).json({

                    sucesso:false,

                    mensagem:"Erro ao excluir produto."

                });


            }



            res.json({

                sucesso:true,

                mensagem:"Produto excluído."

            });



        }

    );


}




module.exports={


    cadastrar,

    listar,

    buscarPorId,

    atualizar,

    excluir


};