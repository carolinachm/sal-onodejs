'use strict';
const mongoose = require('mongoose');
const Funcionario = mongoose.model('Funcionario');

exports.get = async() => {
    const res = await Funcionario.find({});
    return res;
}

exports.getById = async(id) => {
    const res = await Funcionario
        .findById(id);
    return res;
}


exports.create = async(data) => {
    var funcionario = new Funcionario(data);
    await funcionario.save();
}

exports.update = async(id, data) => {
    await Funcionario
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.nome,
                email: data.email,
                celular: data.celular
            }
        });
}

exports.delete = async(id) => {
    await Funcionario
        .findOneAndRemove(id);
}