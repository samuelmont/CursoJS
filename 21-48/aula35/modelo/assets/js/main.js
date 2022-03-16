const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'section', texto: 'Frase 4'}, // 3
    {tag: 'footer', texto: 'Frase 3'}, // 2
];

const container = document.querySelector('.container');                               // Ele pusha na classe container.
const div = document.createElement('div');                                            // Esse cria um elemento no HTML, (só use depois de puxar a classe/id).

for (let i = 0; i < elementos.length; i++) {                                          // Aqui eu seto o i sendo igual á 0 e informo que ele tem que parar menor que elementos.lenght que é igual a 3 (0,1,2,3)
    let { tag, texto } = elementos[i];                                                // Associação via desestruturação
    let tagCriada = document.createElement(tag);                                      // Aqui eu crio as tags
    let textoCriado = document.createTextNode(texto);                                 // Aqui eu coloco o texto de cada tag
    
    tagCriada.appendChild(textoCriado);                                               // Aqui eu adiciono o texto na tag criada
    div.appendChild(tagCriada);                                                       // Aqui eu adiciono as tags dentro da div criada la em cima
}                                                                                     // Não se coloca ponto e virgula (;) no final do for

container.appendChild(div);                                                           // Aqui eu adiciono a div dentro  do container