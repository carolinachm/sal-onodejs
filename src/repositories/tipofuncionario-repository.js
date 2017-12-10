'use strict';
const mongoose = require('mongoose');
const TipoFuncionario = mongoose.model('TipoFuncionario');

exports.get = async() => {
    const res = await TipoFuncionario.find({});
    return res;
}

exports.getById = async(id) => {
    const res = await TipoFuncionario
        .findById(id);
    return res;
}


exports.create = async(data) => {
    var tipofuncionario = new TipoFuncionario(data);
    await tipofuncionario.save();
}

exports.update = async(id, data) => {
    await TipoFuncionario
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.nome,
                
            }
        });
}

exports.delete = async(id) => {
    await TipoFuncionario
        .findOneAndRemove(id);
}