/*
Operadores Lógico
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR  -> OU   Uma das expressões precisam ser verdadeiras para retornar true
!  -> NOT -> NÃO  Ele nega a expressão (se for !true vira false) e (se for !false vira true)
*/
const expressaoAnd = true && true && true && true;
const expressaoOr = true || false || false || false;
const expressaoNot = !false;

console.log(expressaoNot);