const express = require ('express');
const router = express.Router();

/**
 * END POINT - USER AUTH 
 */ 
const AuthController = require('../controllersTest/authControllerTest');

//const AuthController = require('../controllersTest/authControllerTest');

router.post('/auth-ong', AuthController.auth_ong);
//router.post('/auth-doador', AuthController.auth_doador);


module.exports = router;