const { body } = require('express-validator');
//agrego path//
const path = require('path');

const createValidator = [
    body('name').isLength({ min:5 }).withMessage("Por favor, ingrese un nombre valido"),
    body('description').isLength({ max:250 }).withMessage("Por favor, debe respetar la cantidad de caracteres"),
    body('category').isBoolean().withMessage("Por favor, seleccione una categoria"),
    body('price').isNumeric({ min:1 }).withMessage("Por favor, ingresé un precio")
];

module.exports = createValidator;