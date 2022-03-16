/*
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de protótipo:
Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype de função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontra este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontar (ou não) tal menbro.
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'Original:' + this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Samuel', 'M.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construtora
const data = new Date(); // <-- Date = Função construtora

console.log(pessoa1);
console.log(data);










































// // Construtora -> molde (classe)
// function Pessoa(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
// }

// // instância
// const pessoa1 = new Pessoa('Samuel', 'M.');  // <- Pessoa = Função construtora
// const pessoa2 = new Pessoa('Maria', 'A.');  // <- Pessoa = Função construtora

// console.log(pessoa1);
// console.log(pessoa2);
