// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se  o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se  o número digito for maior que 9, consideramos 0.
*/

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');          // Limpa o cpf deixando apenas os Numbers
        }
    });
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;  // se o cpf estiver como 'undefined' ele fica false
    if(this.cpfLimpo.length !== 11) return false;           // se o cpf não tiver EXATAMENTE 11 digitos ele fica false
    if(this.isSequencia()) return false;                    // pega o prototype isSequencia e se for verdadeiro ele retorna false e vice versa

    const cpfParcial = this.cpfLimpo.slice(0, -2);          // tira os ultimos dois digitos do cpf
    const digito1 = this.criaDigito(cpfParcial);            // digito 1
    const digito2 = this.criaDigito(cpfParcial + digito1);  // digito 2

    const novoCpf = cpfParcial + digito1 + digito2;         // junta os 9 digitos e digito 1 e 2

    return novoCpf === this.cpfLimpo;                       // reescreve o cpfLimpo ja com os calculos
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;                   // tamanho do cpfArray(9)+1 = 10 9 8 7 6 5 4 3 2 
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));                   // pega o cpf e muitiplica com o calculo
        regressivo--;                                       // EX: 10 9 8 7 6 5 4 3 2
        return ac;                                          //    * 5 5 6 9 5 1 8 9 8 = 37
    }, 0);
    
    const digito = 11 - (total % 11);                       // pega o resto do calculo e da o resultado
    return digito > 9 ? '0' : String(digito);               // retorna o 0 se o resultado passou de 9 ou o resultado 
}

ValidaCPF.prototype.isSequencia = function() {              // retorna true ou false se o cpf for ou não sequencial
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('556.951.898-37');                // CPF apresentado

if(cpf.valida()) {
    console.log('Cpf Válido');                              // Resposta
} else {
    console.log('Cpf inválido');
}