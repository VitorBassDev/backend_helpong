const express = require ('express');
const router = express.Router();

/**
 * END POINT - USER CONTROLLER 
 */ 
const DoacaoController = require('../controllers/DoacaoController');
const DoacaoControllerTest = require('../controllers/DoacaoControllerTest');

router.get('/', DoacaoController.NecessidadeJoin);
//router.get('/mostrar', DoacaoController.Mostrar);
router.put('/receberDoacao/:id', DoacaoController.receberDoacao);
router.put('/desfazerDoacao/:id', DoacaoController.desfazerDoacao);


module.exports = router;