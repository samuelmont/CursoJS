// Map -> ele modifica um array mantendo o tamanho do proprio array
// Dobre os números
//               0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome);
// console.log(nomes);

// Remova apenas a chave "nome" do objeto
const idade = pessoas.map(valor => ({ idade: valor.idade }));
// console.log(idade);

// Adicione uma chave id em cada objeto
const idNoOriginal = pessoas.map(function(obj, indice) {
    obj.id = (indice + 1) * 1000;                            // Se eu quisesse mudar o original
    return obj;
});
console.log(idNoOriginal);

const id = pessoas.map(function(obj, indice) {
    const newObj = {...obj };
    newObj.id = (indice + 1) * 1000;
    return newObj;
});
console.log(id);