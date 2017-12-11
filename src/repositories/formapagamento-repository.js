'use strict';
const mongoose = require('mongoose');
const FormaPagamento = mongoose.model('FormaPagamento');

exports.get = async() => {
    const res = await FormaPagamento.find({});
    return res;
}

exports.getById = async(id) => {
    const res = await FormaPagamento
        .findById(id);
    return res;
}


exports.create = async(data) => {
    var formapagamento = new FormaPagamento(data);
    await formapagamento.save();
}

exports.update = async(id, data) => {
    await FormaPagamento
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.nome,
            }
        });
}

exports.delete = async(id) => {
    await FormaPagamento
        .findOneAndRemove(id);
}