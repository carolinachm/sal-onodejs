'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    descricao: {
        type: String,
        trim: true
    },
  
    preconormal: {
        type: Number,
        required: true
    },
    precopromocao: {
        type: Number,
        required: true
    },
    percsalao: {
        type: Number,
        required: true
    },
     percprof: {
        type: Number,
        required: true
    }
   
});
module.exports = mongoose.model('Servico', schema);
