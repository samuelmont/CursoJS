const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
inteiro.innerHTML = `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
enumero.innerHTML = `<p>É NaN: ${isNaN(numero)}</p>`
redondoBaixo.innerHTML = `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`
redondoCima.innerHTML = `<p>Arredondando para Cima: ${Math.ceil(numero)}</p>`
decimal.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`