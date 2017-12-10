'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    linha: {
        type: String,
        required: true,
        trim: true
    },
    nome: {
        type: String,
        trim: true
    },
    marca: {
        type: String,
        trim: true
    },
    descricao: {
        type: String,
        required: true
    },
    precocompra: {
        type: Number,
        required: true
    },
    precovenda: {
        type: Number,
        required: true
    },
    quantidade: {
        type: Number
       
    },
    ativo: {
        type: Boolean,
        required: true,
        default: true
    }
   
});
module.exports = mongoose.model('Produto', schema);
