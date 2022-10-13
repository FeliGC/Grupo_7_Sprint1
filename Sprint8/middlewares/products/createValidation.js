const { body } = require('express-validator');

const createValidator = [
    body('name').isLength().withMessage("Por favor, ingrese un nombre valido"),
    body('description').isLength({ max:250 }).withMessage("Por favor, debe respetar la cantidad de caracteres"),
    body('category').notEmpty().withMessage("Por favor, seleccione una categoria"),
    body('price').isNumeric().withMessage("Por favor, ingresé un precio")
];

module.exports = createValidator;