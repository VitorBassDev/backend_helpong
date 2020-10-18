const express = require ('express');
const router = express.Router();


const UserController = require('../controllers/userController');


router.get('/user-ong', UserController.index);

module.exports = router;