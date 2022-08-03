const express = require ('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

const uploadFile = require('../middlewares/uploadFile');
const registerValidation = require('../middlewares/registerValidation');

/* Register */
router.get('/register', usersController.register);
/* Procesar el registro */
router.post('/register', uploadFile.single('userAvatar'), registerValidation, usersController.processRegister);

/* Login */
router.get('/login', usersController.login);

module.exports = router