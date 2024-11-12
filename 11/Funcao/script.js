function logCurso(nome,hora){
  console.log(nome,hora, 'horas');
  return{
    nome,
    hora,
  };
}

const retorno = logCurso("javascript", '40');
logCurso("locura", '20');

console.log(retorno);

