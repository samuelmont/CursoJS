const nomes = ['Samuel', 'Monteiro', 'Silva'];

// For clássico - Geralmente com interáveis (array ou string)
// For in - Retorna índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteraveis, array ou string)

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);                                        // for classico
}

console.log('||||||||||');

for (let i in nomes) {
    console.log(nomes[i]);                                        // for in
}

console.log('||||||||||');

for (let valor of nomes) {
    console.log(valor);                                           // for of
}

console.log('||||||||||');

nomes.forEach(function (valor, indice, array){
    console.log(valor, indice, array);
});