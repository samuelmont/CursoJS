const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },                            // O nome vai ser requirido obrigatóriamente
    sobrenome: { type: String, required: false, default: '' },         // O sobrenome não vai ser obrigatório, e se não for preencido ele será um campo vazio
    email: { type: String, required: false, default: '' },             // O email não vai ser obrigatório, e se não for preencido ele será um campo vazio
    telefone: { type: String, required: false, default: '' },          // O telefone não vai ser obrigatório, e se não for preencido ele será um campo vazio
    criadoEm: { type: Date, default: Date.now },                       // Essa cria uma data automaticamente quando o usuário salvar algo na agenda
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.buscaPorId = async function(id) {
    if(typeof id !== 'string') return;                         // Se id não for uma string ele retorna
    const user = await ContatoModel.findById(id);
    return user;
}

Contato.prototype.register = async function() {                       // Função assincrona sempre retorna uma promessa
    this.valida();
    if(this.errors.length > 0) return;
    this.contato = await ContatoModel.create(this.body);
}

Contato.prototype.valida = function() {
    this.cleanUp();

    // Validação
    // O e-mail precisa ser valido
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');  // Se houver email, tu valida, se não houver tu irá passar para a próxima
    if(!this.body.nome) this.errors.push('Nome é uma campo obrigatório.');
    if(!this.body.email && !this.body.telefone) this.errors.push('Pelo menos um contato precisa ser envidao: e-mail ou telefone.');
}

Contato.prototype.cleanUp = function() {
    for(const key in this.body) {
        if(typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }

    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone,
    };
}

Contato.prototype.edit = async function(id) {
    if(typeof id !== 'string') return;
    this.valida();
    if(this.errors.length > 0) return;
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });
}

module.exports = Contato;