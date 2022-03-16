/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false ->  vai retornar "O valor verdadeiro"

FALSY
false
0
'' "" ``
null/ undefined
NaN
*/
const a = 0;
const b = null;
const c = 'false'; // Aqui
const d = false;
const e = NaN;

console.log(a||b||c||d||e);