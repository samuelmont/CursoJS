// For in -> lê os indices ou chaves do objeto
//               0       1       2
const pessoa = {
    nome: 'Samuel',
    sobrenome: 'Monteiro',
    idade: 17
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
};

// const frutas = ['Pera', 'Maçã', 'Uva']; // array simples pode ser chamado de vetor

// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }

// for (let i = 0; i < frutas.length; i++ ) {
//     console.log(frutas[i]);
// }