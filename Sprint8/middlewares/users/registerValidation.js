const { body } = require('express-validator');

const validationRegister = [
    body('first_name').isLength({ min:3 }).withMessage("Ingrese un nombre valido"),
    body('last_name').isLength({ min:3 }).withMessage("Ingrese un apellido valido"),
    body('email').isEmail().withMessage("Ingrese un email valido"),
    body('password').isLength({ min:8 }).withMessage("La contraseña debe de tener mas de 8 caracteres"),
    body('userAvatar').isEmpty().withMessage('Seleccione una imagen'),
];

module.exports = validationRegister;