//IEEE 754-2008
let num1 = 0.7; //number
let num2 = 0.1; //number

/* num1 =((num1 * 100) + (num2 * 100)) /100 //0.8
   num1 =((num1 * 100) + (num2 * 100)) /100 //0.9
   num1 =((num1 * 100) + (num2 * 100)) /100 //1.0 */

//num1 = Number(num1.toFixed(2)); esse jeito é mais facil

console.log(num1)
console.log(Number.isInteger(num1))

//console.log(num1.toString() + num2); para concatenar o number para string mas é temporario/ para ser definitivo use assim ''num1 = toString() '' 
//console.log(typeof num1); ele procura o tipo de codigo que é
//console.log(num1.toString(2)); para transformar em numero binario
//console.log(num1.toFixed(2)); pega um numero decimal e simplifica para menos casas decimais de acordo com o numero que está entre parenteses ''()''
//console.log(Number.isInteger(num1)) para checar se é um numero inteiro ou não
//let temp = num1 * 'É isso' 
//console.log(Number.isNaN(temp)) ele pergunta se aquele calculo é um NaN (not a number)