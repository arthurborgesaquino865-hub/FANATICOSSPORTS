/*=========================================================
    FANÁTICOS SPORTS
    PRODUTOS LOJISTA.JS
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
    PRODUTOS
=========================================================*/


const produtos = [


    {


        id:1,


        imagem:"../assets/images/flamengo.png",


        nome:"Camisa Flamengo I 2026",


        categoria:"Clubes",


        preco:229.90,


        estoque:15,


        vendas:352,


        status:"Ativo"


    },



    {


        id:2,


        imagem:"../assets/images/brasil.png",


        nome:"Camisa Brasil 2026",


        categoria:"Seleções",


        preco:249.90,


        estoque:8,


        vendas:280,


        status:"Ativo"


    },



    {


        id:3,


        imagem:"../assets/images/real.png",


        nome:"Camisa Real Madrid Home",


        categoria:"Clubes",


        preco:279.90,


        estoque:3,


        vendas:195,


        status:"Ativo"


    },



    {


        id:4,


        imagem:"../assets/images/psg.png",


        nome:"Camisa PSG Home",


        categoria:"Clubes",


        preco:259.90,


        estoque:0,


        vendas:120,


        status:"Inativo"


    }


];





/*=========================================================
    CATEGORIAS
=========================================================*/


const categorias = [


    "Clubes",


    "Seleções",


    "Chuteiras",


    "Masculino",


    "Feminino",


    "Infantil"


];






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





function formatarMoeda(valor){


    return valor.toLocaleString("pt-BR",{


        style:"currency",


        currency:"BRL"


    });


}






/*=========================================================
    INICIALIZAÇÃO
=========================================================*/


document.addEventListener(


    "DOMContentLoaded",


    iniciarProdutos


);





function iniciarProdutos(){



    carregarLogo();



    carregarTopbar();



    carregarMenu();



    carregarTitulo();



    carregarCategorias();



    carregarProdutos();



    carregarFooter();



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

        "Produtos"

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
    MENU LATERAL
=========================================================*/


const menuAdminProdutos=[


    {

        texto:"Dashboard",

        id:"menuDashboardTexto",

        link:"dashboard.html"

    },


    {

        texto:"Produtos",

        id:"menuProdutosTexto",

        link:"produtos-lojista.html"

    },


    {

        texto:"Cadastrar Produto",

        id:"menuCadastrarProdutoTexto",

        link:"#"

    },


    {

        texto:"Categorias",

        id:"menuCategoriasTexto",

        link:"#"

    },


    {

        texto:"Pedidos",

        id:"menuPedidosTexto",

        link:"#"

    },


    {

        texto:"Clientes",

        id:"menuClientesTexto",

        link:"#"

    },


    {

        texto:"Estoque",

        id:"menuEstoqueTexto",

        link:"#"

    },


    {

        texto:"Relatórios",

        id:"menuRelatoriosTexto",

        link:"#"

    },


    {

        texto:"Configurações",

        id:"menuConfiguracoesTexto",

        link:"#"

    },


    {

        texto:"Sair",

        id:"menuSairTexto",

        link:"login.html"

    }


];






function carregarMenu(){


    menuAdminProdutos.forEach(function(item){



        setTexto(

            item.id,

            item.texto

        );



    });



    get("menuDashboard").href=

    "dashboard.html";



    get("menuProdutos").href=

    "produtos-lojista.html";



    get("menuSair").href=

    "login.html";


}







/*=========================================================
    TÍTULO
=========================================================*/


function carregarTitulo(){


    setTexto(

        "tituloProdutos",

        "Produtos da Loja"

    );



    setTexto(

        "descricaoProdutos",

        "Gerencie os produtos cadastrados no sistema."

    );


}






/*=========================================================
    CATEGORIAS FILTRO
=========================================================*/


function carregarCategorias(){


    const select=get(

        "filtroCategoria"

    );



    if(!select){

        return;

    }



    categorias.forEach(function(categoria){



        select.innerHTML += `


            <option value="${categoria}">

                ${categoria}

            </option>


        `;



    });


}






/*=========================================================
    TABELA DE PRODUTOS
=========================================================*/


function carregarProdutos(){



    const tabela=get(

        "listaProdutos"

    );



    if(!tabela){

        return;

    }



    tabela.innerHTML="";





    produtos.forEach(function(produto){



        tabela.innerHTML += `



        <tr>



            <td>


                <img 


                class="produtoTabelaImagem"


                src="${produto.imagem}"


                alt="${produto.nome}"


                >



            </td>





            <td>

                ${produto.nome}

            </td>





            <td>

                ${produto.categoria}

            </td>





            <td>

                ${formatarMoeda(produto.preco)}

            </td>





            <td>

                ${produto.estoque}

            </td>





            <td>


                <span class="statusProduto ${produto.status.toLowerCase()}">

                    ${produto.status}

                </span>


            </td>





            <td>



                <div class="acoesProduto">



                    <button 

                    class="btnEditarProduto"

                    onclick="editarProduto(${produto.id})">


                    <i class="fas fa-edit"></i>


                    </button>





                    <button 

                    class="btnExcluirProduto"

                    onclick="excluirProduto(${produto.id})">


                    <i class="fas fa-trash"></i>


                    </button>



                </div>



            </td>




        </tr>



        `;



    });



}

/*=========================================================
    MODAL PRODUTO
=========================================================*/


let produtoEditando = null;



function abrirModalProduto(){


    const modal=get(

        "modalProduto"

    );



    if(modal){


        modal.classList.add("ativo");


    }


}






function fecharModalProduto(){


    const modal=get(

        "modalProduto"

    );



    if(modal){


        modal.classList.remove("ativo");


    }



}





/*=========================================================
    BOTÃO NOVO PRODUTO
=========================================================*/


const btnNovoProduto=get(

    "btnNovoProduto"

);



if(btnNovoProduto){


    btnNovoProduto.onclick=function(){



        produtoEditando=null;



        limparFormulario();



        abrirModalProduto();



    }


}





/*=========================================================
    FECHAR MODAL
=========================================================*/


const btnFecharModal=get(

    "btnFecharModal"

);



if(btnFecharModal){


    btnFecharModal.onclick=function(){



        fecharModalProduto();



    }


}







/*=========================================================
    LIMPAR FORMULÁRIO
=========================================================*/


function limparFormulario(){



    if(get("produtoNome")){


        get("produtoNome").value="";


    }



    if(get("produtoCategoria")){


        get("produtoCategoria").value="";


    }



    if(get("produtoPreco")){


        get("produtoPreco").value="";


    }



    if(get("produtoEstoque")){


        get("produtoEstoque").value="";


    }



}







/*=========================================================
    SALVAR PRODUTO
=========================================================*/


function salvarProduto(){



    const nome=get("produtoNome").value;



    const categoria=get("produtoCategoria").value;



    const preco=parseFloat(

        get("produtoPreco").value

    );



    const estoque=parseInt(

        get("produtoEstoque").value

    );





    if(nome==="" || categoria==="" || !preco){



        alert(

            "Preencha todos os campos."

        );



        return;


    }






    if(produtoEditando){



        produtoEditando.nome=nome;


        produtoEditando.categoria=categoria;


        produtoEditando.preco=preco;


        produtoEditando.estoque=estoque;



    }

    else{



        produtos.push({



            id:produtos.length+1,



            imagem:"../assets/images/produto.png",



            nome:nome,



            categoria:categoria,



            preco:preco,



            estoque:estoque,



            vendas:0,



            status:"Ativo"



        });



    }






    carregarProdutos();



    fecharModalProduto();




}






const btnSalvarProduto=get(

    "btnSalvarProduto"

);



if(btnSalvarProduto){


    btnSalvarProduto.onclick=salvarProduto;


}








/*=========================================================
    EDITAR PRODUTO
=========================================================*/


function editarProduto(id){



    produtoEditando=produtos.find(function(produto){



        return produto.id===id;



    });





    if(!produtoEditando){


        return;


    }





    get("produtoNome").value=

    produtoEditando.nome;



    get("produtoCategoria").value=

    produtoEditando.categoria;



    get("produtoPreco").value=

    produtoEditando.preco;



    get("produtoEstoque").value=

    produtoEditando.estoque;




    abrirModalProduto();



}








/*=========================================================
    EXCLUIR PRODUTO
=========================================================*/


function excluirProduto(id){



    const confirmar=

    confirm(

        "Deseja excluir este produto?"

    );





    if(confirmar){



        const indice=

        produtos.findIndex(function(produto){



            return produto.id===id;



        });





        produtos.splice(indice,1);



        carregarProdutos();



    }



}







/*=========================================================
    PESQUISA
=========================================================*/


const btnPesquisarAdmin=get(

    "btnPesquisarAdmin"

);



if(btnPesquisarAdmin){



    btnPesquisarAdmin.onclick=function(){



        pesquisarProduto();



    }



}







function pesquisarProduto(){



    const texto=

    get("txtPesquisarAdmin")

    .value

    .toLowerCase();





    const tabela=get(

        "listaProdutos"

    );





    tabela.innerHTML="";





    produtos.filter(function(produto){



        return produto.nome

        .toLowerCase()

        .includes(texto);



    })

    .forEach(function(produto){



        tabela.innerHTML += `



        <tr>



        <td>

        <img class="produtoTabelaImagem"

        src="${produto.imagem}">


        </td>



        <td>${produto.nome}</td>



        <td>${produto.categoria}</td>



        <td>${formatarMoeda(produto.preco)}</td>



        <td>${produto.estoque}</td>



        <td>${produto.status}</td>



        </tr>



        `;



    });



}







/*=========================================================
    FOOTER
=========================================================*/


function carregarFooter(){



    setTexto(


        "footerTexto",


        "© 2026 Fanáticos Sports - Todos os direitos reservados."


    );



    setTexto(


        "footerVersao",


        "Sistema versão "+sistema.versao


    );



}