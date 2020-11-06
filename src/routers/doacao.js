const express = require ('express');
const router = express.Router();

/**
 * END POINT - USER CONTROLLER 
 */ 
//const DoacaoController = require('../controllers/DoacaoController');
const DoacaoController = require('../controllers/DoacaoControllerTest');

router.get('/', DoacaoController.NecessidadeJoin);
router.get('/mostrar', DoacaoController.Mostrar);



module.exports = router;