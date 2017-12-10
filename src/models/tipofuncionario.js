'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        trim: true
    }
});
module.exports = mongoose.model('TipoFuncionario', schema);