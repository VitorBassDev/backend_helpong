const express = require ('express');
const router = express.Router();

/**
 * END POINT - NECESSIDADE CONTROLLER 
 */ 

const NecessidadeController = require('../controllers/NecessidadeController');
//const ProfileController = require('../controllers/ProfileController');

router.get('/necessidadeGeral', NecessidadeController.necessidadeGeral);
router.get('/necessidadeOng', NecessidadeController.necessidadePorOng);
router.post('/registraNecessidade', NecessidadeController.registraNecessidade);
router.delete('/deletaNecessidade/:id', NecessidadeController.deletaNecessidade);


//router.get('/necessidadeOng', ProfileController.necessidadeOng);


module.exports = router;