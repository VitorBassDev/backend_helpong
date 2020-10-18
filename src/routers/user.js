const express = require ('express');
const router = express.Router();


const UserController = require('../controllers/userController');

router.post('/user-ong', UserController.create_user_ong);
router.post('/user-doador', UserController.create_user_doador);


module.exports = router;