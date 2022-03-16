const nome = 'Samuel'; // escopo léxico

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Monteiro';
    falaNome();
}
usaFalaNome();
