/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutavel) - array, object, function - Passados por referência
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
}
const b = {...a};

a.nome = 'João';
console.log(b);
console.log(a);



/*let a = [1,2,3,];
let b = [...a]; // copia o que pedir mesmo se tiver alterações
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz')
console.log(a, c);*/