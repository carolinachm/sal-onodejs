'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    valorproduto: {
        type:Number,
        
    },
    quantidade: {
        type: Number,
        
    },
    valorvenda: {
        type:Number,
        
    },
    dataVenda: {
        type: Date,
        default: Date.now
    },
    VendaProduto: {
       
        produto: [{ type: Schema.Types.ObjectId, ref: 'Produto' , nome:String}],
        cliente: [{ type: Schema.Types.ObjectId, ref: 'Cliente', nome: String }],
        funcionario: [{ type: Schema.Types.ObjectId, ref: 'Funcionario', nome: String }],
        formapagamento: [{ type: Schema.Types.ObjectId, ref: 'FormaPagamento' , nome: String}]
    },



});
module.exports = mongoose.model('VendaProduto', schema);



