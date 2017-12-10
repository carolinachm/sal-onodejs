'use strict';
const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

exports.get = async() => {
    const res = await Produto.find({});
    return res;
}

exports.getById = async(id) => {
    const res = await Produto
        .findById(id);
    return res;
}


exports.create = async(data) => {
    var produto = new Produto(data);
    await produto.save();
    
}

exports.update = async(id, data) => {
    await Produto
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.nome,
                
            }
        });
}

exports.delete = async(id) => {
    await Produto
        .findOneAndRemove(id);
}