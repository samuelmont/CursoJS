function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() *(max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

//                                                            Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     esperaAi('Promise 1', rand(1, 5)),
//     esperaAi('Promise 2', rand(1, 5)),
//     esperaAi('Promise 3', rand(1, 5)),
//     esperaAi(1000, rand(1, 5)),
// ]

// Promise.race(promises).then(function(valor) {              // Promise.race me mostra a primeira promise que aparecer
//     console.log(valor);                                    // Promise.all me mostra todas por sequencia ou o erro
// }).catch(function(erro) {                                  // Promise.resolve resolve a promise
//     console.log(erro);                                     // Promise.reject rejeita e te joga para o erro
// });

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache');
    }else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log('ERRO', e));