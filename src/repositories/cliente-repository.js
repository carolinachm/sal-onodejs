'use strict';
const mongoose = require('mongoose');
const Cliente = mongoose.model('Cliente');

exports.get = async() => {
    const res = await Cliente.find({});
    return res;
}

exports.getById = async(id) => {
    const res = await Cliente
        .findById(id);
    return res;
}


exports.create = async(data) => {
    var cliente = new Cliente(data);
    await cliente.save();
}

exports.update = async(id, data) => {
    await Cliente
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.nome,
                email: data.email,
                celular: data.celular
            }
        });
}

exports.delete = async(id) => {
    await Cliente
        .findOneAndRemove(id);
}