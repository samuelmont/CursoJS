// Declaração de função (Function hoisting)
falaOi();
function falaOi() {
    console.log('Oie');
}

// First-class Object (Objetos de primeira classe)
// Function Expression
const souUmDado = function() {
    console.log('Sou um dado.');
};

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando ...');
    }
};
obj.falar();