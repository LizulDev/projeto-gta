/*1o objetivo: ao clicar o botão plataformas, deve-se abrir naturalmente as plataformas que se deseja escolher;

2o objetivo: Fechar a seleçai de plataformas quando o usuario clicar nela*/

const btnPlataforma = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");
 
btnPlataforma.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});






