// IIFE -> Immediately invoked function expression
(function (idade, peso, altura){

    const sobrenome = 'Monteiro';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Samuel'));
    }
    
    falaNome();
    console.log(idade, peso, altura);

})(17, 74, 1.86);
