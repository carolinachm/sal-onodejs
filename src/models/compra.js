'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
   
    quantidade: {
        type: Number,
    },
     precounitario: {
        type: Number,
    },
     precototal: {
        type: Number,
    },
     precovenda: {
        type: Number,
    },
    dataCompra: {
        type: Date,
        default: Date.now
    },
    Compra: {
        nome:String,
        Produto: [{ type: Schema.Types.ObjectId, ref: 'Produto' }]
    }
   
     
   
});
module.exports = mongoose.model('Compra', schema);

