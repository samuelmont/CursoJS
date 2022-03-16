// capturar evento de submit de formulario
const form = document.querySelector('#formulario');                               // obteve o formulario

form.addEventListener('submit', function (e) {                                    // adicionou um evento (e) de submit
    e.preventDefault();                                                           // previniu de enviar esse formulario
    const inputPeso = e.target.querySelector('#peso');                            // peguei os input
    const inputAltura = e.target.querySelector('#altura');                        // peguei os input
    
    const peso = Number(inputPeso.value);                                         // converteu para number e se vim alguma outra coisa é NaN Ou seja indeice falsy
    const altura = Number(inputAltura.value);                                     // converteu para number e se vim alguma outra coisa é NaN Ou seja indeice falsy

    if (!peso) {
        setResultado('Peso inválido', false);                                     // se o peso não for verdadeiro vai mostrar peso invalido
        return;
    }

    if (!altura) {
        setResultado('Altura inválido', false);                                   // se a altura não for verdadeiro vai mostrar altura invalido
        return;
    }

    const imc = getImc(peso, altura);                                             
    const nivelImc = getNivelImc(imc);
    const msg = `Seu Imc é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >=39.9){
        return nivel [5];
    }
    if (imc>=34.9){
        return nivel [4];
    }
    if (imc>=29.9){
        return nivel [3];
    }
    if (imc>=24.9){
        return nivel [2];
    }
    if (imc>=18.5){
        return nivel [1];
    }
    if (imc<18.5){
        return nivel [0];
    }
} 

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP ();
    
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;  
    resultado.appendChild(p);
}