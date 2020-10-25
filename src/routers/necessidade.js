const express = require ('express');
const router = express.Router();

/**
 * END POINT - NECESSIDADE CONTROLLER 
 */ 

const NecessidadeController = require('../controllers/NecessidadeController');

router.get('/novaNecessidade', NecessidadeController.listaNecessidade);
router.post('/novaNecessidade', NecessidadeController.necessidadeOng);



module.exports = router;