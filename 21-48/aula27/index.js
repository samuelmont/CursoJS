// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 9999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

/*if (pontuacaoUsuario >=1000){
    console.log('Usuário VIP');
}else {
    console.log('Usuário normal');
}*/
