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
    const clientes = await repository.find({});
    clientes.should.have.length(3);
  });
});

