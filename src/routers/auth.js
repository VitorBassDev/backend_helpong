const express = require ('express');
const router = express.Router();

const UserController = require('../controllers/authController');

router.post('/auth-ong', UserController.auth_ong);
router.post('/auth-doador', UserController.auth_doador);

module.exports = router;