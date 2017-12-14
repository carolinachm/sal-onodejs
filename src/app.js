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
const FormaPagamento = require('./models/formapagamento');
const  Servico = require('./models/servico');
const Compra = require('./models/compra');
const VendaProduto = require('./models/vendaproduto');

//carregar as rotas
const indexRoute = require('./routes/index-route');
const clienteRoute = require('./routes/cliente-route');
const produtoRoute = require('./routes/produto-route');
const tipofuncionarioRoute = require('./routes/tipofuncionario-route');
const funcionarioRoute = require('./routes/funcionario-route');
const formapagamentoRoute = require('./routes/formapagamento-route');
const servicoRoute = require('./routes/servico-route');
const compraRoute = require('./routes/compra-route');
const vendaprodutoRoute = require('./routes/vendaproduto-route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/clientes', clienteRoute);
app.use('/produtos', produtoRoute);
app.use('/tipofuncionarios', tipofuncionarioRoute);
app.use('/funcionarios', funcionarioRoute);
app.use('/formapagamentos', formapagamentoRoute);
app.use('/servicos', servicoRoute);
app.use('/compras', compraRoute);
app.use('/vendaprodutos', vendaprodutoRoute);



module.exports = app;