const express = require ('express');
const router = express.Router();

/**
 * END POINT - NECESSIDADE CONTROLLER 
 */ 

const NecessidadeController = require('../controllers/NecessidadeController');
//const ProfileController = require('../controllers/ProfileController');

router.get('/necessidadeAll', NecessidadeController.listaNecessidade);
router.get('/necessidadeOng', NecessidadeController.necessidadeOng);
router.post('/novaNecessidade', NecessidadeController.criaNecessidade);
router.delete('/deletaNecessidade/:id', NecessidadeController.deletaNecessidade);


//router.get('/necessidadeOng', ProfileController.necessidadeOng);


module.exports = router;