const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// -> Filtrar pares
const filtradosPar = numeros.filter(valor => valor % 2 === 0);
console.log(filtradosPar);

// -> Dobrar os valores
const dobro = numeros.map(valor => valor * 2);
console.log(dobro);

// -> Reduzir (somar tudo)
const somados = numeros.reduce((acumulador, valor) => acumulador + valor);
console.log(somados);

// Retorne a soma do dobro de todos os pares
// Método Pequeno
const resultado = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((acumulador, valor) => acumulador + valor);
console.log(resultado);

// Método Grande
const filtraPar = numeros.filter(valor => valor % 2 === 0);
const dobra = filtraPar.map(valor => valor * 2);
const total = dobra.reduce((acumulador, valor) => acumulador + valor);
console.log(total);
