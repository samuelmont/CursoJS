// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true,    // mostra a chave
        value: estoque,       // valor
        writable: false,       // Pode alterar o valor se for (true) ou não pode alterar se for (flase)
        configurable: false     // configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,   // mostra a chave
            value: nome,         // valor
            writable: true,       // Pode alterar o valor se for (true) ou não pode alterar se for (flase)
            configurable: true     // configurável
        },
        preco: {
            enumerable: true,   // mostra a chave
            value: preco,        // valor
            writable: true,       // Pode alterar o valor se for (true) ou não pode alterar se for (flase)
            configurable: true     // configurável
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for(let chave in p1) {
    console.log(chave)
};