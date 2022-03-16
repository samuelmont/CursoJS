/*
Samuel Monteiro tem 17 anos, pesa 74 kg
tem 1.80 metros de altura e seu imc é 22.839506172839506
Samuel Monteiro nasceu em 2004
*/
const nome = 'Samuel'
const sobrenome = 'Monteiro'
const idade = 17
const peso = 74
const alturaEmM = 1.80
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM)
anoNascimento = 2021 - idade
console.log ( nome, sobrenome, 'anos, pesa', peso, 'kg')
console.log ('tem', alturaEmM, 'metros de altura e seu imc é', imc )
console.log (nome, sobrenome, 'nasceu em', anoNascimento + '.')

console.log ( `${nome} ${sobrenome} anos pesa ${peso} kg`)
console.log (`tem ${alturaEmM} metros de altura e seu imc é ${imc}`)
console.log ( `${nome} ${sobrenome} nasceu em ${anoNascimento}.`)