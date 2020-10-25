const express = require ('express');
const router = express.Router();

/**
 * END POINT - USER CONTROLLER 
 */ 
const DoacaoController = require('../controllers/DoacaoController');

router.get('/', DoacaoController.NecessidadeJoin);



module.exports = router;