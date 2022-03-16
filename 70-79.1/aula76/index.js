// Produto -> aumento, desconto
// Camiseta = Cor, Caneca = Material
function Produto(nome, preco) {                                
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {                // Método aumento
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {               // Método desconto
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);                           // Linka o produto
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);         // Linka os métodos (aumento e desconto)
Camiseta.prototype.constructor = Camiseta;                     // Muda o nome do construtor

Camiseta.prototype.aumento = function(percentual) {            // Aqui eu mudo o aumento recriando ele em porcentagem
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);                           // Linka o produto
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);           // Linka os métodos (aumento e desconto)
Caneca.prototype.constructor = Caneca;                         // Muda o nome do construtor

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preto');
const caneca = new Caneca('Com alça', 15, 'Cerâmica', 45);
caneca.estoque = 100;

console.log(caneca.estoque);
console.log(caneca);
console.log(camiseta);
console.log(produto);
