const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt')
const { Usuario } = require('../database/models')

module.exports = {
    setting: (req, res) => {
        res.render(path.resolve(__dirname, '../views/user/setting.ejs'))
    },

    cambiarCorreoView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/user/cambiarCorreo.ejs'))
    },

    cambiarContraseniaView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/user/cambiarContrasenia.ejs'))
    },

    cambiarAvatarView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/user/cambiarAvatar.ejs'), {
            usuario: req.session.userLogged
        })
    },

    actualizarAvatar: (req, res) => {
        const usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')));

        let userActualizado = usuarios.map(user => {
            if (user.id == req.params.id) {
                user.avatar = req.file.filename;
            }
            return user
        })

        fs.writeFileSync(path.resolve(__dirname, '../data/usuarios.json'), JSON.stringify(userActualizado, null, 2));
        res.redirect('/usuario/setting');
    },

    registerView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/user/register.ejs'));
    },

    save: (req, res) => {
        const usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')));
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render(path.resolve(__dirname, '../views/user/register.ejs'), {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        else {
            Usuario.create({
                //id: Como es auto incremental, no hay que pasarle id. (la db lo coloca solo)
                correo: req.body.correo.toUpperCase(),
                contrasenia: bcrypt.hashSync(req.body.password, 10),
                avatar: 'user.png',  //por defecto tiene un avatar, el usuario puede cambiarla.
                rolId: 1, //por defecto el rol es 1 para los cliente. (luego un administrador puede cambiar el rol de un cliente)
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                //telefono, ciudadId y fechaNac --> seran Null cuando el usuario se registre, cuando quiera hacer una compra tendra que actualizar esos datos.
                activo: 1,
                createAt: new Date(),
                updateAt: null           
            })         
            .then(() => {
                res.redirect('/usuario/login');
            })
            .catch(error => console.log(error.message));            
        }
    },

    recuperarPassView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/user/recuperar-password.ejs'));
    },

    recuperarPass: (req, res) => {

    },

    loginView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/user/login.ejs'));
    },

    login: async (req, res) => {
        const correoEnLogin = req.body.correo.toUpperCase(); //Correo con el que se esta logueando convertido en Mayúscula.

        let usuarioALoguear = await Usuario.findOne({
            where: {
                correo: correoEnLogin
            }
        });
        
        if (usuarioALoguear) {
            const coincide = bcrypt.compareSync(req.body.password, usuarioALoguear.contrasenia); //Comparamos la contraseña ingresada, con la contraseña (hasheada) del usuario
            if (coincide) {
                delete usuarioALoguear.password; //Borramos la contraseña del objeto literal, ya que no nos interesa     
                req.session.userLogged = usuarioALoguear; //Guardamos en req.session.userLogged, el objeto literal del usuario logueado

                if (req.body.recordarme) {  //Si el checkbox esta tildado, se creara una cookie con el nombre recordarme y se guardara el correo asociado a ese usuario.
                    res.cookie(
                        'recordarme',
                        usuarioALoguear.correo,
                        { maxAge: (1000 * 20) }  // en este objeto literal se define la propiedad de duración en mili segundos de la cookie.
                    );
                };

                return res.redirect('/');
            }
        }

        return res.render(path.resolve(__dirname, '../views/user/login.ejs'), {
            errors: {
                msg: 'El correo y/o contraseña son inválidos.'
            }
        });
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    }
}
