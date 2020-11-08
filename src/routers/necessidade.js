const express = require ('express');
const router = express.Router();

/**
 * END POINT - NECESSIDADE CONTROLLER 
 */ 

const NecessidadeController = require('../controllers/NecessidadeController');
//const ProfileController = require('../controllers/ProfileController');

router.get('/necessidadeGeral',         NecessidadeController.necessidadeGeral);
router.get('/necessidadeOng',           NecessidadeController.necessidadePorOng);
router.get('/listaPaginaInicial',       NecessidadeController.listaPaginaInicial);
router.get('/listaPaginaDoacao',        NecessidadeController.listaPaginaDoacao);
router.post('/registraNecessidade',     NecessidadeController.registraNecessidade);
router.delete('/deletaNecessidade/:id', NecessidadeController.deletaNecessidade);

//router.get('/necessidadeOng', ProfileController.necessidadeOng);

const NecessidadeControllerTest = require('../controllersTest/NecessidadeControllerTest');
router.get('/resumo',                  NecessidadeControllerTest.resumo);
router.get('/resumo2',                  NecessidadeControllerTest.listaPaginaInicial);
router.post('/registraNecessidadetest', NecessidadeControllerTest.registraNecessidade);
router.delete('/deletaNecessidadeTest/:id', NecessidadeControllerTest.deletaNecessidade);
router.get('/necessidadeOngTest',        NecessidadeControllerTest.necessidadePorOng);
router.get('/necessidadeOngTestv2',        NecessidadeControllerTest.necessidadePorOngv2);
router.get('/buscaId/:id',        NecessidadeControllerTest.BuscaPorID);
router.put('/alterar',        NecessidadeControllerTest.editaNecessidade);

module.exports = router;