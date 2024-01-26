const path = require('path');
const fs = require('fs');
const { body } = require('express-validator');

//Verifica que los campos de un formulario sean ingresados de manera correcta.

module.exports = [
    body('nombre').notEmpty().withMessage('El campo nombre no debe estar vacío.'),

    body('apellido').notEmpty().withMessage('El campo apellido no debe estar vacío.'),

    body('correo')
        .notEmpty().withMessage('El campo correo no debe estar vacío.').bail()
        .isEmail().withMessage('El formato de email debe ser: email@ejemplo.').bail()
        .custom(value => {
            const usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')));            
            
            const userExistente = usuarios.filter(({ correo }) => correo.toUpperCase() === value.toUpperCase());      
            return userExistente.length > 0 ?  false : true;
        }).withMessage('El correo ya se encuentra en uso.'),

    body('password')
        .notEmpty().withMessage('EL campo contraseña no debe estar vacío.').bail()
        .isLength({ min: 6 }).withMessage('Debe contener como mínimo 6 caracteres.'),

    body('confirmarPassword')
        .custom((value, { req }) => {
            return value === req.body.password;
        }).withMessage('Las contraseñas no coinciden.')
]