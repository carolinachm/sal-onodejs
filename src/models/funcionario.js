'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    tipofuncionario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoFuncionario'
    },
    nome: {
        type: String,
        required: [true, 'O nome é obrigatorio'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'O e-mail é obrigatorio'],
        trim: true
    },
    dataNascimento: {
        type: Date,
        default: Date.now
    },
    admissao: {
        type: Date,
        default: Date.now
    },
    endereco: {
        type: String,
        trim: true
    },
    bairro: {
        type: String,
        trim: true
    },
    cidade: {
        type: String,
        trim: true
    },
    cep: {
        type: String,
        trim: true
    },
    datacriacao: {
        type: Date,
        default: Date.now
    },
    telefone: {
        type: String,
        trim: true
    },
    celular: {
        type: String,
        required: [true, 'O telefone é obrigatorio'],
        trim: true
    },
    funcionario: {
        nome:String,
        tipofuncionario: [{ type: Schema.Types.ObjectId, ref: 'TipoFuncionario' }]
    }

});
module.exports = mongoose.model('Funcionario', schema);



