'use strict';

const chai = require('chai');
const bin = require('../bin/server');
const chaihttp = require('chai-http');
const Cliente = require('../models/cliente');

const should = chai.should(); //verfica o comportamento na resposta da resquisição

chai.use(chaihttp);

describe('Cliente', function () {


    before(function (next) {
        Cliente.remove({}, function (err) {
            next();
        });
    });
    if ('Buscar Cliente', async() => {
       const cliente = await cliente.get('/clientes')
        .end(function(err, res){
            res.should.have.status(200);
            res.body.should.have.property('cliente');
        });
       
    });
    if ('Buscar Cliente por Id', async()=> {
       const cliente = await cliente.get('/clientes/id/' +id)
        .end(function(err, res){
            res.should.have.status(200);
            res.body.should.have.property('cliente');
        });
        
    });
    if ('Salvar Cliente', async() => {
        var novoCliente = {
            nome: "",
            endereco: "",
            bairro: "",
            cidade: "",
            cep: "",
            telefone: "",
            celular: ""
        }
        const cliente = await cliente.post('/clientes')
            .send(novoCliente)
            .end(function (err, res) {
                res.should.have.status(201);
                res.body.should.have.property('cliente');

                res.body.should.have.property('_id');
                res.body.should.have.property('nome');
                res.body.should.have.property('endereco');
                res.body.should.have.property('bairro');
                res.body.should.have.property('cidade');
                res.body.should.have.property('cep');
                res.body.should.have.property('telefone');
                res.body.should.have.property('celular');



            })
        
    });
    if ('Atualizar Cliente', async() => {
        
    });
    if ('Excluir Cliente', async() => {
       
    });
})