let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

/*Jeito antigo
const varAbase = varA;
const varBbase = varB;
const varCbase = varC;

varA = varBbase;
varB = varCbase;
varC = varAbase;
*/
//Jeito novo
[varA, varB, varC] = [varB, varC, varA]

console.log (varA, varB, varC)