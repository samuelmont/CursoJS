// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com números de 0 á 100.

function fizzBuzz (n){
    if (typeof n !== 'number') return n;
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if (n % 5 === 0) return 'Buzz';
    if (n % 3 === 0) return 'Fizz;'
    return n;
}

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}

console.log('________________________');


function random (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
let aleatorio = (random(0, 100));
console.log(aleatorio);

const eNaN = isNaN(aleatorio);

if (eNaN === false) {
    console.log('É um numero');
} else {
    console.log('Não é um numero');
}

function divisivel (x) {
    if (x % 3 === 0 && x % 5 === 0) {
        return 'FizzBuzz';
    } else if (x % 5 === 0) {
        return 'Buzz';
    } else if (x % 3 === 0) {
        return 'Fizz';
    } else {
        return x;
    }
}
const resultado = divisivel(aleatorio);
console.log(resultado);