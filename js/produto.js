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
let cores;
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