const express = require ('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

const uploadFile = require('../middlewares/users/uploadFile');
const registerValidation = require('../middlewares/users/registerValidation');
const guestMiddleware = require('../middlewares/users/guestMiddleware');
const authMiddleware = require('../middlewares/users/authMiddleware');


/* Register */
router.get('/register', guestMiddleware, usersController.register);
/* Procesar el registro */
router.post('/register', uploadFile.single('userAvatar'), registerValidation, usersController.processRegister);

/* Login */
router.get('/login', guestMiddleware, usersController.login);
/*procesar Login */
router.post('/login', usersController.loginProcess);

/* Perfil */
router.get('/profile', authMiddleware, usersController.profile);
/*Logout*/
router.get('/logout', usersController.logout);

module.exports = router