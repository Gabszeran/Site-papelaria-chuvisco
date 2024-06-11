home = document.querySelector("#conteudo-home")
atendimentoPagina = document.querySelector("#atendimento-pagina")
meuCarrinhoSecao = document.querySelector("#meu-carrinho-secao")
produtoNoCarrinho = document.querySelector(".produto-carrinho")


function atendimento() {

    // a página principal some
   home.classList.remove("display-block")
   home.classList.add("display-none")

   // a página de atendimento aparece
   atendimentoPagina.classList.remove("display-none")
   atendimentoPagina.classList.add("display-block")
   
}

document.querySelector('.atendimento-botao').addEventListener('click', atendimento)

function voltarParaSite() {
    
    // a página principal aparece 
    home.classList.remove("display-none")
    home.classList.add("display-block")

    //a página de atendimento some
    atendimentoPagina.classList.remove("display-block")
    atendimentoPagina.classList.add("display-none")
    
}

document.querySelector('#button-voltar-site').addEventListener('click', voltarParaSite)


function minhaConta() {

    meuCarrinhoSecao.classList.remove("display-none")
    meuCarrinhoSecao.classList.add("display-block")

}

document.querySelector(".meu-carrinho-botao").addEventListener('click', minhaConta)

function sairDoCarrinho() {

    meuCarrinhoSecao.classList.remove("display-block")
    meuCarrinhoSecao.classList.add("display-none")

}

document.querySelector("#x").addEventListener('click', sairDoCarrinho)
