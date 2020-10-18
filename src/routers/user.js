const express = require ('express');
const router = express.Router();


const UserController = require('../controllers/userController');


router.get('/user-ong', UserController.select_user);
router.post('/user-ong', UserController.create_user);

module.exports = router;