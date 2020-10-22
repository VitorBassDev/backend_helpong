const express = require ('express');
const router = express.Router();

/**
 * END POINT - USER CONTROLLER 
 */ 

 const UserController = require('../controllers/userController');
//const UserController = require('../controllersTest/userControllerTest');
router.get('/user-test', UserController.select_user_test);
router.post('/user-ong', UserController.create_user_ong);
router.post('/user-doador', UserController.create_user_doador);

module.exports = router;