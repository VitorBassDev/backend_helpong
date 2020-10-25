const express = require('express');
const routes = express.Router();
const rotaUsuario = require('../src/routers/usuario');
const rotaNecessidade = require('../src/routers/necessidade');


routes.use('/usuario' , rotaUsuario);
routes.use('/necessidade' , rotaNecessidade);

module.exports = routes;
