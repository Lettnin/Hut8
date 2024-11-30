// const ativar = document.querySelector(".ativar");

// /** @param {MouseEvent} event*/

// function ativarclick(event){
//   console.log(event.x);
// }

// ativar.addEventListener("click", ativarclick);

// console.log(ativar);

const botao = document.querySelector('.botao');

function mostrar() {
  const texto = document.querySelector(".texto");
  texto.classList.toggle("ativar");
}

botao.addEventListener('click', mostrar);