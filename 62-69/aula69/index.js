const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let total = 0;

a1.forEach(valor =>(total += valor)); // forEach com Reduce
console.log(total);

a1.forEach(function(valor, indice, array) {
    console.log(valor, indice);
});

// for(let valor of a1) {
//     console.log(valor);   // forOf
// };