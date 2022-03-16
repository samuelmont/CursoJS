// const pessoa = {
//     nome: 'Samuel',                  // Literal
//     sobrenome: 'Monteiro'
// };

// const pessoa1 = new Object();
// pessoa1.nome = 'Samuel';             // Construtor
// pessoa1.sobrenome = 'Monteiro';

// const chave = 'sobrenome';
// console.log(pessoa['sobrenome'])
// console.log(pessoa[chave]);

// const pessoa1 = new Object();
// pessoa1.nome = 'Samuel';
// pessoa1.sobrenome = 'Monteiro';
// pessoa1.idade = 17;
// pessoa1.falarNome = function() {
//     return (`${this.nome} está falando seu nome.`);
// };
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// for(let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// }

// Factory functions/ Constructor functions / Classes(SintaxSugar)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // Assim eu travo tudo
}

const p1 = new Pessoa('Samuel', 'Monteiro');
Object.freeze(p1); // Assim eu travo só a p1
p1.nome = 'Outra Coisa';
const p2 = new Pessoa('Edmilson', 'Monteiro');
console.log(p1);
console.log(p2);


// Factory function
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Samuel', 'Monteiro');
// console.log(p1.nomeCompleto());
