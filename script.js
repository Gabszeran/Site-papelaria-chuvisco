function atendimento() {

    // a página principal some
   home = document.querySelector("#conteudo-home")
   home.classList.remove("display-block")
   home.classList.add("display-none")

    // a página de atendimento aparece
   atendimentoPagina = document.querySelector("#atendimento-pagina")
   atendimentoPagina.classList.remove("display-none")
   atendimentoPagina.classList.add("display-block")

}

document.querySelector('.atendimento-botao').addEventListener('click', atendimento)

function voltarParaSite() {
    
    // a página principal aparece 
    home = document.querySelector("#conteudo-home")
    home.classList.remove("display-none")
    home.classList.add("display-block")

    //a página de atendimento some
    atendimentoPagina = document.querySelector("#atendimento-pagina")
    atendimentoPagina.classList.remove("display-block")
    atendimentoPagina.classList.add("display-none")
    
}

document.querySelector('#button-voltar-site').addEventListener('click', voltarParaSite)


function minhaConta() {

    minhaContaSecao = document.querySelector("#minha-conta-secao")
    minhaContaSecao.classList.remove("display-none")
    minhaContaSecao.classList.add("display-block")

}

document.querySelector(".minha-conta-botao").addEventListener('click', minhaConta)

function sairDoCarrinho() {
    
}
