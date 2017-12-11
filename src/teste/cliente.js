'use strict';
process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const Cliente = mongoose.model('Cliente');

//Aqui estamos declarando as dependências necessárias para realizar os nossos testes!
const chai = require('chai');
const chaiHttp = require('chai-http');
const bin = require('../bin/server');
const should = chai.should();

chai.use(chaiHttp);
 
//Aqui é o bloco principal que executará o nossos testes:
describe('Clientes', function() {
    beforeEach(function(done) {
 
        //Sempre depois de executar o nosso teste, iremos limpar a nossa base de dados:
        Cliente.remove({}, function(error) {
            done();
        });
    });
 
/**
 * Teste da rota: /GET
 */
describe('/GET clientes', function() {
    it('Deve retornar todos os clientes', function(done) {
        chai.request(server)
        .get('/clientes')
        .end(function(error, res) {
            //Se tudo der certo deve retornar o status: 200 - OK
            res.should.have.status(200);
            //E em seguida retornar em um array todos os cliente cadastrados na base de dados:
            res.body.should.be.a('array');
            res.body.length.should.be.eql(0);
        done();
        });
    });
});
/**
 * Teste da rota: /POST
 */
describe('/POST clientes', function() {
    it('Não deve retornar o POST do cliente criado, uma vez que não foi definido o campo: email', function(done) {
 
        //Aqui simulamos a criação de um cliente:
        var cliente = {
            nome: "Jão"
        }
        chai.request(server)
        .post('/clientes')
        .send(clientes)
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('errors');
            res.body.errors.should.have.property('email');
            res.body.errors.paginas.should.have.property('kind').eql('required');
            done();
        });
    });
 /**
 * Teste da rota: /POST
 */
describe('/POST livro', function() {
    it('Não deve retornar o POST do livro criado, uma vez que não foi definido o campo: paginas', function(done) {
 
        //Aqui simulamos a criação de um livro, porém sem definir a página do livro:
        var livro = {
            titulo: "Javascript. O Guia Definitivo",
            autor: "David Flanagan",
            ano: 2012
        }
        chai.request(server)
        .post('/livro')
        .send(livro)
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('errors');
            res.body.errors.should.have.property('paginas');
            res.body.errors.paginas.should.have.property('kind').eql('required');
            done();
        });
    });
 
    it('Deve Criar um livro', function(done) {
        var livro = {
            titulo: "Javascript. O Guia Definitivo",
            autor: "David Flanagan",
            paginas:1080,
            ano: 2012
        }
        chai.request(server)
        .post('/livro')
        .send(livro)
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Livro adicionado com Sucesso!');
            res.body.livro.should.have.property('titulo');
            res.body.livro.should.have.property('autor');
            res.body.livro.should.have.property('paginas');
            res.body.livro.should.have.property('ano');
        done();
        });
    });
});
/**
 * Teste da rota: /GET/:id
 */
describe('/GET/:id livro', function() {
    it('Deve retornar um livro dado o id', function() {
        var livro = new Livro( {
            titulo: "Javascript. O Guia Definitivo",
            autor: "David Flanagan",
            paginas:1080,
            ano: 2012
        });
        livro.save(function(error, livro) {
            chai.request(server)
            .get('/livro/' + livro.id)
            .send(livro)
            .end(function(error, res) {
               res.should.be.a('object');
               res.body.should.have.property('titulo');
               res.body.should.have.property('autor');
               res.body.should.have.property('paginas');
               res.body.should.have.property('ano');
               res.body.should.have.property('_id').eql(livro.id);
        done();
            });
        });
    });
});
/**
 * Teste da rota: /PUT/:id
 */
describe('/PUT/:id livro', function(){
      it('Deve atualizar um livro dado o id', function(done){
        var livro = new Livro({titulo: "Use A Cabeça! C#", autor: "Andrew Stellman", ano: 2013, paginas: 738})
        livro.save(function(error, livro){
                chai.request(server)
                .put('/livro/' + livro.id)
                .send({titulo: "Use A Cabeça! C#", autor: "Andrew Stellman", ano: 2014, paginas: 738})
                .end(function(error, res){
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Livro Atualizado com Sucesso');
                    res.body.livro.should.have.property('ano').eql(2014);
                done();
            });
        });
    });
});
/**
 * Teste da rota: /DELETE/:id
 */
describe('/DELETE/:id livro', function(){
      it('Deve excluir um livro dado o id', function(done){
        var livro = new Livro({titulo: "Use A Cabeça! C#", autor: "Andrew Stellman", ano: 2013, paginas: 738})
        livro.save(function(error, livro){
                chai.request(server)
                .delete('/livro/' + livro.id)
                .end(function(error, res){
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Livro excluído com Sucesso!');
                  done();
            });
        });
    });
});