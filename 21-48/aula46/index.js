function mostraHora() {                                               // Essa função está buscando a hora
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {                         // Aqui ela chama a hora
        hour12: false                                                 // Aqui eu falo pra ela que quero no formato de 24 horas
    });
}
               // Aqui eu seto um timer mas ele fica pra sempre se nao desativalo
const timer = setInterval(function funcaoDoInterval() {console.log(mostraHora());}, 1000); // Função anonima em uma linha

setTimeout(function () {                                                                   // Aqui eu desativo o time
    clearInterval(timer);                                                                  // Função anonima normal
}, 3000);

setTimeout(function() {
    console.log('Olá mundo!');
},  3000)

// setInterval(function funcaoDoInterval() {console.log(mostraHora());}, 1000);

// function funcaoDoInterval() {                                         // Essa função está chamando a função de cima ^
//     console.log(mostraHora());
// }

// setInterval(funcaoDoInterval, 1000);