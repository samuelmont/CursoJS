// Global
function retornaFuncao() {
    const nome = 'Samuel'; // closure
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao();
console.dir(funcao);