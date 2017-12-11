'use strict';
const mongoose = require('mongoose');
const Servico = mongoose.model('Servico');

exports.get = async () => {
    const res = await Servico.find({});
    return res;
}

exports.getById = async (id) => {
    const res = await Servico
        .findById(id);
    return res;
}


exports.create = async (data) => {
    var servico = new Servico(data);
    await servico.save();
}

exports.update = async (id, data) => {
    await Servico
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.nome,
                descricao: data.descricao,
                preconormal: data.preconormal,
                precopromocao: data.precopromocao,
                percsalao: data.percprof,
                percprof: data.percprof
            }
        });
}

exports.delete = async (id) => {
    await Servico
        .findOneAndRemove(id);
}