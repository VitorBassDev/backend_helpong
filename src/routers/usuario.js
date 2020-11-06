const express = require ('express');
const router = express.Router();

/**
 * END POINT - USER CONTROLLER 
 */ 
const UsuarioController = require('../controllers/UsuarioController');

router.get('/usuario-all', UsuarioController.listarUsuario);
router.post('/usuario-ong', UsuarioController.criarOng);
router.post('/usuario-doador', UsuarioController.criarDoador);


const UsuarioControllerTest = require('../controllersTest/userControllerTest');
router.post('/usuarioTest-ong', UsuarioControllerTest.criarOng);
router.post('/usuarioTest-Doador', UsuarioControllerTest.criarDoador);


module.exports = router;