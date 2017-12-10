'use strict';

const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conexao com banco
mongoose.connect('mongodb://mongo:mongo@ds044577.mlab.com:44577/salaonodejs');
// Carrega os Models
const Cliente = require('./models/cliente');
const Produto = require('./models/produto');
const TipoFuncionario = require('./models/tipofuncionario');
const Funcionario = require('./models/funcionario');

//carregar as rotas
const indexRoute = require('./routes/index-route');
const clienteRoute = require('./routes/cliente-route');
const produtoRoute = require('./routes/produto-route');
const tipofuncionarioRoute = require('./routes/tipofuncionario-route');
const funcionarioRoute = require('./routes/funcionario-route');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/clientes', clienteRoute);
app.use('/produtos', produtoRoute);
app.use('/tipofuncionarios', tipofuncionarioRoute);
app.use('/funcionarios', funcionarioRoute);



module.exports = app;