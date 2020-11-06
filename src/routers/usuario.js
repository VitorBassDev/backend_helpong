const express = require ('express');
const router = express.Router();

/**
 * END POINT - USER CONTROLLER 
 */ 
const UsuarioController = require('../controllers/UsuarioController');

const UsuarioControllerTest = require('../controllersTest/userControllerTest');

router.get('/usuario-all', UsuarioController.listarUsuario);
router.post('/usuario-ong', UsuarioController.criarOng);
router.post('/usuario-doador', UsuarioController.criarDoador);

router.post('/usuarioTest-ong', UsuarioControllerTest.criarOng);


module.exports = router;