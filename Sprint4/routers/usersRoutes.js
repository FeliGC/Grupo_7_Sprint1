const express = require ('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

/* Login */
router.get('/login', usersController.login);

/* Register */
router.get('/register', usersController.register);

module.exports = router