const express = require('express');

const rotaUser = require('../src/routers/user');
const rotaAuth = require('../src/routers/auth');
const routes = express.Router();

routes.use('/user' , rotaUser);
routes.use('/auth' , rotaAuth);

module.exports = routes;
