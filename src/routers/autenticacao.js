const express = require ('express');
const router = express.Router();

/**
 * END POINT - NECESSIDADE CONTROLLER 
 */ 

const ProfileController = require('../controllers/AutenticacaoController')
const ProfileControllerTest = require('../controllersTest/authControllerTest')
router.post('/loginCpf', ProfileController.loginCpf);

router.post('/authOng',             ProfileController.authOng);
router.post('/authDoador',          ProfileController.authDoador);
router.post('/authAdministrador',   ProfileController.authAdministrador);


router.post('/authOngTest', ProfileController.authOng);


module.exports = router;