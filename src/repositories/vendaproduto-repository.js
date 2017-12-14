'use strict';
const mongoose = require('mongoose');
const VendaProduto = mongoose.model('VendaProduto');

exports.get = async () => {
    const res = await VendaProduto.find({});
    return res;
}

exports.getById = async (id) => {
    const res = await VendaProduto
        .findById(id);
    return res;
}


exports.create = async (data) => {
    var vendaproduto = new VendaProduto(data);
    await vendaproduto.save();
}

exports.update = async (id, data) => {
    await VendaProduto
        .findByIdAndUpdate(id, {
            $set: {
                valorproduto: data.valorproduto,
                qtde: data.qtde,
                valorvenda: data.valorvenda
            }
        });
}

exports.delete = async (id) => {
    await VendaProduto
        .findOneAndRemove(id);
}