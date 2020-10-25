const express = require ('express');
const router = express.Router();

/**
 * END POINT - NECESSIDADE CONTROLLER 
 */ 

const ProfileController = require('../controllers/ProfileController')
router.post('/ong', ProfileController.loginOng);


module.exports = router;