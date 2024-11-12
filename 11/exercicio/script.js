// function livro(nome , ano , autor) {
//   const nomemaior = nome.toUpperCase();
//   const totalano = 2050 - ano;
//   const frase = nome + " por " + autor;
//   const objeto = {
//     nome: nomemaior,
//     totalano,
//     frase,
//   };
//   return objeto;
// }

// const livroretorno = livro("O senhor dos aneis", 1954, "J. R. R. Tolkien");
// console.log(livroretorno.frase);

function livro(nome , ano , autor) {
  return {
    nome: nome.toUpperCase(),
    totalano: 2050 - ano,
    frase: nome + " por " + autor,
  };
}

const livroretorno = livro("O senhor dos aneis", 1954, "J. R. R. Tolkien");
console.log(livroretorno.frase);