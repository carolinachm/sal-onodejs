'use strict';
process.env.NODE_ENV = 'test';

const chai = require('chai');
const bin = require('../bin/server');
const chaihttp = require('chai-http');
const Cliente = require('../models/cliente');
const repository = require('../repositories/cliente-repository');

const should = chai.should(); //verfica o comportamento na resposta da resquisição

chai.use(chaihttp);

describe('Cliente', function() {
  it('Buscar Cliente', async function() {
    const clientes = await repository.find({nome:'Jão'});
    clientes.should.have.length(3);
  });
  it('buscar por Cliente id', async () => {
    const cliente = await repository.findById({id: 1 });
    
  });
   it('Novo cliente', async () => {
    const cliente = await repository.create({nome: 'Jao' });
    
  });
  it('Atualiza Client', async() =>{
    
  })
});

