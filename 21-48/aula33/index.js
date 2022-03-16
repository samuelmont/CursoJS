const pessoa = {
    nome: 'Samuel',
    sobrenome: 'Monteiro',
    idade: 17,
    endereco: {
        rua: 'Palhoça',
        numero: '80'
    }
};

// Atribuição via desestruturação
// const { nome: n = '', sobrenome, idade} = pessoa;
// const {endereco: { rua: r = 12345, numero}, endereco} = pessoa;

const {nome, ...resto} = pessoa;
console.log(resto);