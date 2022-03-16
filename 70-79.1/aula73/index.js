/*
Object.values (retorna só os valores)
Object.entries (retorna valores e as chaves)
Object.assing(des, any) // ele serve para copiar um objeto sem mudar o original (mas é melhor usar spread {...produto, material: 'porcelana'})
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = { nome: 'Produto', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto);












// const caneca = Object.assign({}, produto, {material: 'porcelana'});
// const caneca = {nome: produto.nome, preco: produto.preco }; se eu queisesse selecionar uma propriedade de um objeto espessífico