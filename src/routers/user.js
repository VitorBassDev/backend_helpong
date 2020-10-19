const express = require ('express');
const router = express.Router();
//const connection = require ('../database/connection');


const UserController = require('../controllers/userController');

router.get('/user-test', UserController.select_user_test);
router.post('/user-ong', UserController.create_user_ong);
router.post('/user-ong', UserController.create_user_test);

module.exports = router;