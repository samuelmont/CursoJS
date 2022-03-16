const nome = 'Samuel';
const sobrenome = 'Monteiro';
const idade = 17;

function soma(x, y) {
    return x + y;
}

export default (x, y) => x * y;

export { nome, sobrenome, idade, soma}




















// Se colocar default depois de export não é necessario usar o nome da variavel/função, qualquer nome ira chamar essa variavel/função
// export { nome as default, sobrenome, idade, soma} //exemplo 1
// export default function e etc // assim não funciona em const


// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }

// export { nome as nome2, sobrenome, idade, soma };