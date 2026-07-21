/*=========================================================
    FANÁTICOS SPORTS
    CADASTRAR PRODUTO.JS
=========================================================*/


/*=========================================================
    CONFIGURAÇÕES DO SISTEMA
=========================================================*/


const sistema = {


    loja:"Fanáticos Sports",


    administrador:"Arthur",


    cargo:"Administrador",


    versao:"1.0.0",


    logo:"../assets/images/logo.png",


    avatar:"../assets/images/admin.png"


};







/*=========================================================
    CATEGORIAS
=========================================================*/


const categorias = [


    "Clubes",


    "Seleções",


    "Chuteiras",


    "Masculino",


    "Feminino",


    "Infantil",


    "Promoções"


];








/*=========================================================
    TAMANHOS DISPONÍVEIS
=========================================================*/


const tamanhos = [


    "P",


    "M",


    "G",


    "GG",


    "XG"


];







/*=========================================================
    PRODUTO
=========================================================*/


const produto = {


    imagem:"",


    nome:"",


    categoria:"",


    marca:"",


    preco:0,


    estoque:0,


    tamanhos:[],


    descricao:""


};









/*=========================================================
    UTILITÁRIOS
=========================================================*/


function get(id){


    return document.getElementById(id);


}





function setTexto(id,texto){


    const elemento=get(id);


    if(elemento){


        elemento.textContent=texto;


    }


}





function setImagem(id,caminho){


    const elemento=get(id);


    if(elemento){


        elemento.src=caminho;


    }


}









/*=========================================================
    INICIALIZAÇÃO
=========================================================*/


document.addEventListener(

"DOMContentLoaded",

iniciarSistema

);






function iniciarSistema(){



    carregarLogo();


    carregarTopbar();


    carregarFormulario();


    carregarCategorias();


    carregarTamanhos();


    carregarEventos();


}

/*=========================================================
    LOGO
=========================================================*/


function carregarLogo(){


    setImagem(

        "logoAdminImagem",

        sistema.logo

    );


    setTexto(

        "logoAdminTexto",

        sistema.loja

    );


}









/*=========================================================
    TOPBAR
=========================================================*/


function carregarTopbar(){


    setTexto(

        "tituloPagina",

        "Cadastrar Produto"

    );




    const pesquisa=get(

        "txtPesquisarAdmin"

    );



    if(pesquisa){


        pesquisa.placeholder=

        "Pesquisar produtos...";


    }





    setImagem(

        "fotoPerfilAdmin",

        sistema.avatar

    );




    setTexto(

        "nomeAdmin",

        sistema.administrador

    );




    setTexto(

        "cargoAdmin",

        sistema.cargo

    );


}









/*=========================================================
    FORMULÁRIO
=========================================================*/


function carregarFormulario(){



    setTexto(

        "tituloCadastroProduto",

        "Cadastrar Novo Produto"

    );





    setTexto(

        "descricaoCadastroProduto",

        "Preencha as informações do produto para adicionar ao catálogo."

    );







    setTexto(

        "labelImagemProduto",

        "Imagem do Produto"

    );





    setTexto(

        "labelNomeProduto",

        "Nome do Produto"

    );





    setTexto(

        "labelCategoriaProduto",

        "Categoria"

    );





    setTexto(

        "labelMarcaProduto",

        "Marca"

    );





    setTexto(

        "labelPrecoProduto",

        "Preço"

    );





    setTexto(

        "labelEstoqueProduto",

        "Quantidade em Estoque"

    );





    setTexto(

        "labelTamanhoProduto",

        "Tamanhos Disponíveis"

    );





    setTexto(

        "labelDescricaoProduto",

        "Descrição"

    );





    setTexto(

        "btnCancelarProduto",

        "Cancelar"

    );





    setTexto(

        "btnSalvarProduto",

        "Salvar Produto"

    );



}









/*=========================================================
    CATEGORIAS
=========================================================*/


function carregarCategorias(){


    const select=get(

        "categoriaProduto"

    );



    if(!select){

        return;

    }





    select.innerHTML="";





    categorias.forEach(function(item){



        const option=document.createElement(

            "option"

        );



        option.value=item;



        option.textContent=item;



        select.appendChild(option);



    });



}









/*=========================================================
    TAMANHOS
=========================================================*/


function carregarTamanhos(){



    const area=get(

        "listaTamanhos"

    );



    if(!area){

        return;

    }





    area.innerHTML="";





    tamanhos.forEach(function(item){



        const tamanho=document.createElement(

            "div"

        );





        tamanho.className=

        "tamanhoProduto";





        tamanho.textContent=item;





        tamanho.dataset.tamanho=item;





        tamanho.onclick=function(){



            tamanho.classList.toggle(

                "selecionado"

            );



        };





        area.appendChild(tamanho);



    });



}

