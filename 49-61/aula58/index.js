// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)
// Fabrica -> criaPessoa

function Pessoa(nome, sobrenome) {
    //Atributos ou métodos privados
    const ID = 123456;

    const metodoInterno = function() {

    };

    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo() = function() {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Samuel', 'Monteiro');
const p2 = new Pessoa('Maria', 'Aparecida');

console.log(p2.nome)