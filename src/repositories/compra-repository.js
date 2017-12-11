'use strict';
const mongoose = require('mongoose');
const Compra = mongoose.model('Compra');

exports.get = async () => {
    const res = await Compra.find({});
    return res;
}

exports.getById = async (id) => {
    const res = await Compra
        .findById(id);
    return res;
}


exports.create = async (data) => {
    var compra = new Compra(data);
    await compra.save();
}

exports.update = async (id, data) => {
    await Compra
        .findByIdAndUpdate(id, {
            $set: {
                codigoproduto: data.codigoproduto,
                quantidade: data.quantidade,
                precounitario: data.precounitario,
                precototal: data.precototal,
                precovenda: data.precovenda,
                dataCompra: data.dataCompra
            }
        });
}

exports.delete = async (id) => {
    await Compra
        .findOneAndRemove(id);
}