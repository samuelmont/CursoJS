
function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros.');
    }
    return x + y;
}
try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    //console.log(error);
    console.log('Alguma coisa mais amigável por usuario');
}
// try {
//     console.log(naoExisto);
// } catch (err) {
//     console.log('naoExisto Não existe.');
//     console.log(err);
// }