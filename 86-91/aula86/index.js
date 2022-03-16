function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() *(max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', rand(1, 3)).then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 2', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 3', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
}).then(() => {
    console.log('Eu serei o último a ser exibido');
}).catch(e => {
    console.log('ERRO', e);                                     // Esse catch vai sempre ser o erro
});

console.log('Essa coisa aparece antes da promise por que o motor do java script não vai esperar a promise acabar para me exibir')