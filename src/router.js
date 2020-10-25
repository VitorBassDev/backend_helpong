const express = require('express');
const routes = express.Router();
const rotaUsuario = require('../src/routers/usuario');
const rotaNecessidade = require('../src/routers/necessidade');
const rotaDoacao = require('../src/routers/doacao');
const rotaProfile = require('../src/routers/profile');


routes.use('/usuario' , rotaUsuario);
routes.use('/necessidade' , rotaNecessidade);
routes.use('/doacao' , rotaDoacao);
routes.use('/profile' , rotaProfile);

module.exports = routes;
