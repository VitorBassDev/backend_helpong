const express = require('express');
const routes = express.Router();
const rotaUsuario = require('../src/routers/usuario');
const rotaNecessidade = require('../src/routers/necessidade');
const rotaDoacao = require('../src/routers/doacao');
const rotaAutenticacao = require('../src/routers/autenticacao');


routes.use('/usuario' , rotaUsuario);
routes.use('/necessidade' , rotaNecessidade);
routes.use('/doacao' , rotaDoacao);
routes.use('/autenticacao' , rotaAutenticacao);

module.exports = routes;
