// arrow function não possui arguments
const conta = function(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
conta('+', 0, 20, 30, 40, 50);

// argumetos que sustenta todos os argumentos enviados
// function funcao([valor1, varlor2, valor3]) {
//     console.log(valor1, varlor2, valor3);
// }
// funcao(['Samuel', 'Monteiro', 20]);

// function funcao({nome , sobrenome, idade}) {
//     console.log(nome , sobrenome, idade);
// }
// funcao({ nome: 'Samuel', sobrenome: 'Monteiro', idade: 20});


// function funcao(a, b = 2, c = 4) {
//     console.log(a + b + c);
// }
// funcao(2, undefined, 20);


// function funcao() {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

// function funcao() {
//     console.log(arguments[0]);
// }
// funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);