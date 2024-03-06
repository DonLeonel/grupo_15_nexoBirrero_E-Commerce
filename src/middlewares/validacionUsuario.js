const { body } = require('express-validator');
const { Usuario } = require('../database/models');

//Verifica que los campos de un formulario sean ingresados de manera correcta
module.exports = [
    body('nombre').notEmpty().withMessage('El campo nombre no debe estar vacío.'),

    body('apellido').notEmpty().withMessage('El campo apellido no debe estar vacío.'),

    body('correo')
    .notEmpty().withMessage('El campo correo no debe estar vacío.')
    .bail()
    .isEmail().withMessage('El formato de email debe ser: email@ejemplo.')
    .bail()
    .custom(async (value) => {
        // Convertimos el correo ingresado por el usuario en mayúscula.
        const correoIngresado = value.toUpperCase();
        try {
            // Buscamos el usuario en la base de datos
            const usuario = await Usuario.findOne({
                where: {
                    correo: correoIngresado
                }
            });
            // Si el usuario existe, lanzamos un error
            if (usuario) {
                throw new Error();
            }
            // Si el usuario no existe, la validación pasa
            return true;
        } catch (e) {
            // Si hay un error en la consulta, lanzamos un error
            throw new Error('El correo ya se encuentra en uso.'); 
        }
    }).withMessage('El correo ya se encuentra en uso.'),

    body('password')
        .notEmpty().withMessage('EL campo contraseña no debe estar vacío.').bail()
        .isLength({ min: 6 }).withMessage('Debe contener como mínimo 6 caracteres.'),

    body('confirmarPassword')
        .custom((value, { req }) => {
            return value === req.body.password;
        }).withMessage('Las contraseñas no coinciden.')
]