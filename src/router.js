const express = require('express');

const rotaUser = require('../src/routers/user');
const routes = express.Router();

routes.use('/user' , rotaUser);

module.exports = routes;
