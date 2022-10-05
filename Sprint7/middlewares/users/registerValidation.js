const { body } = require('express-validator');
//agrego path//
const path = require('path');

const validationRegister = [
    body('firstName').isLength({ min:3 }).withMessage("Por favor, ingrese un nombre valido"),
    body('lastName').isLength({ min:3 }).withMessage("Por favor, ingrese un apellido valido"),
    body('email').isEmail().withMessage("Por favor, ingrese un email valido"),
    body('password').isLength({ min:8 }).withMessage("Por favor, la contraseña debe de tener mas de 8 caracteres")
];

module.exports = validationRegister;