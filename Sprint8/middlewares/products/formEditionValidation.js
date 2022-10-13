const { body } = require('express-validator');

const formCreateValidation = [
    body('name')
        .notEmpty().withMessage('Este campo no puede estar vacio')
        .isLength({ min:1, max:100 }).withMessage("Solo se permiten letras"),
    body('description')
        .notEmpty().withMessage('Este campo no puede estar vacio')
        .isLength({ min:1, max:100 }).withMessage("El maximo es de 100 caracteres"),
    body('category_id')
        .notEmpty().withMessage('Por favor, elija una categoria'),
    body('price')
        .notEmpty().withMessage('Este campo no puede estar vacio')
        .isInt("Debe de dar un precio").withMessage(),
];

module.exports = formCreateValidation;