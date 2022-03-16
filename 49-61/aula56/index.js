//Factory Function (Função Fábrica)
//Constructor function (Função Construtora)
function criaPessoa (nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split (' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala: function (assunto) {
            return `${this.nome} está ${assunto}.`;
        },

        altura: altura,
        peso: peso,

        //Getter
        get imc() {
            const indice = this.peso/ (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Samuel', 'Monteiro', 1.8, 74);
p1.nomeCompleto = 'Maria Aparecida Silva';
console.log(p1.nome);
console.log(p1.sobrenome)