const express = require ('express');
const router = express.Router();

/**
 * END POINT - NECESSIDADE CONTROLLER 
 */ 

const ProfileController = require('../controllers/AutenticacaoController')
router.post('/loginCpf', ProfileController.loginCpf);

router.post('/authOng', ProfileController.authOng);
router.post('/authDoador', ProfileController.authDoador);


module.exports = router;