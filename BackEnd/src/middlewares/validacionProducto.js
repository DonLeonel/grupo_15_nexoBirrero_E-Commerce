const { body } = require('express-validator');

/* Verifica que los campos de los productos al momento de administrarlos, sean ingresados de manera correcta */

module.exports = [
    body('nombre').notEmpty().withMessage('El campo nombre no debe estar vacío.'),

    body('cervecera').notEmpty().withMessage('El campo cervecera no debe estar vacío.'),

    body('categoriaId').notEmpty().withMessage('Debe seleccionar alguna categoría.'),

    body('variedad').notEmpty().withMessage('Debe seleccionar alguna variedad.'),

    body('descripcion')
        .notEmpty().withMessage('El campo descripción no debe estar vacío.').bail()
        .isLength({ min: 10, max: 250 }).withMessage('El campo descripción debe contener entre 10 y 250 caracteres.'),

    body('precio').notEmpty().withMessage('El campo precio no debe estar vacío.'),

    body('cont_envase').notEmpty().withMessage('Debe seleccionar el volumen del contenido.'),

    body('nacionalidad').notEmpty().withMessage('El campo nacionalidad no debe estar vacío.'),

    body('graduacion').notEmpty().withMessage('El campo graduación no debe estar vacío.'),

    body('imagen').custom((value, { req }) => {
        return !req.file ? false : true;        
    }).withMessage('Debe subir alguna imagen para el producto.'),
]