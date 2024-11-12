const ativar = document.querySelector(".ativar");

/** @param {MouseEvent} event*/

function ativarclick(event){
  console.log(event.x);
}

ativar.addEventListener("click", ativarclick);

console.log(ativar);