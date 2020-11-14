const express = require ('express');
const router = express.Router();

/**
 * END POINT - USER CONTROLLER 
 */ 
const UsuarioController = require('../controllers/UsuarioController');

router.get('/usuario-all', UsuarioController.listarUsuario);
router.post('/usuario-ong', UsuarioController.criarOng);
router.post('/usuario-doador', UsuarioController.criarDoador);
router.post('/usuario-administrador', UsuarioController.criarAdministrador);
router.patch('/usuarioEditar', UsuarioController.editarUsuario);
router.delete('/deletaUsuario/:id', UsuarioController.deletaUsuario);


const UsuarioControllerTest = require('../controllersTest/userControllerTest');
router.post('/usuarioTest-ong', UsuarioControllerTest.criarOng);
router.post('/usuarioTest-Doador', UsuarioControllerTest.criarDoador);
router.patch('/usuarioEditarTest', UsuarioControllerTest.editarUsuario);
router.patch('/usuarioEditarTestNovo', UsuarioControllerTest.editarUsuarioNovo);
router.post('/usuarioUnicoTest', UsuarioControllerTest.buscarUsuario);
router.delete('/deletaUsuarioTest/:id', UsuarioControllerTest.deletaUsuario);



module.exports = router;