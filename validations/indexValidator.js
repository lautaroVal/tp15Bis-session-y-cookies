const {body} = require('express-validator');

module.exports = [
    body('name')
    .notEmpty().withMessage('Este campo es requerido.').bail(),
    body('email')
    .notEmpty().withMessage('Este campo es requerido.').bail()
    .isEmail().withMessage('Debe ser un email valido'),
    body('color')
    .notEmpty().withMessage('Este campo es requerido.'),
   /*  body('age')
    .isInt().withMessage('Debe ingresar solo números'), */
]