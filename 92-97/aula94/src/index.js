// import { nome2 , sobrenome, idade, soma, Pessoa as OutraCoisa } from './modulo1';
// import * as MeuModulo from './modulo1'; // importa tudo do modulo
import o, {nome as n, sobrenome, idade, soma}from './modulo1';

console.log(o(5, 40));
console.log(n, sobrenome, idade, soma(4, 4));
