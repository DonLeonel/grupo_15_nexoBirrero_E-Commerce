const path = require('path');
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

    updateCorreo: async (req, res) => {

        const resultValidation = validationResult(req);
        const errores = resultValidation.mapped();

        if (errores?.correo) {
            return res.render(path.resolve(__dirname, '../views/user/cambiarCorreo.ejs'), {
                errors: errores.correo
            });
        }

        try {
            const user = await Usuario.findByPk(req.params.id);
            user.correo = req.body.correo.toUpperCase();
            user.save();
            res.redirect("/usuario/logout");
        } catch (error) {
            console.error('Algo salio mal con la DB', error);
        }
    },

    cambiarContraseniaView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/user/cambiarContrasenia.ejs'))
    },

    updateContrasenia: async (req, res) => {
        const resultValidation = validationResult(req);
        const errores = resultValidation.mapped();

        try {
            const user = await Usuario.findByPk(req.params.id);
            const coincide = bcrypt.compareSync(req.body.passwordActual, user.contrasenia);
            if (coincide) {
                if (errores?.password || errores?.confirmarPassword) {
                    return res.render(path.resolve(__dirname, '../views/user/cambiarContrasenia.ejs'), {
                        errors: errores
                    });
                }
            }
            else {
                return res.render(path.resolve(__dirname, '../views/user/cambiarContrasenia.ejs'), {
                    error: {
                        msg: 'La contraseña actual no coincide.'
                    }
                });
            }

            user.contrasenia = bcrypt.hashSync(req.body.password, 10);
            user.save();
            res.redirect("/usuario/logout");
        } catch (error) {
            console.error('Algo salio mal con la DB', error);
        }
    },

    cambiarAvatarView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/user/cambiarAvatar.ejs'), {
            usuario: req.session.userLogged
        })
    },

    updateAvatar: async (req, res) => {
        const user = await Usuario.findByPk(req.params.id);

        if (req.file) {
            user.avatar = req.file.filename;
            await user.save();
        }
        else {
            return res.render(path.resolve(__dirname, '../views/user/cambiarAvatar.ejs'), {
                errors: {
                    msg: 'Debe cargar una imagen valida.'
                }
            });
        }
        res.redirect('/usuario/setting');
    },

    registerView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/user/register.ejs'));
    },

    save: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.isEmpty()) {

            Usuario.create({                
                correo: req.body.correo.toUpperCase(),
                contrasenia: bcrypt.hashSync(req.body.password, 10),
                avatar: 'user.png',
                rolId: 1, 
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                //telefono, ciudadId y fechaNac --> seran Null cuando el usuario se registre, cuando quiera hacer una compra tendra que actualizar esos datos.
                activo: 1                
            })
                .then(() => {
                    res.redirect('/usuario/login');
                })
                .catch(error => console.error('No se pudo registrar al usuario.',error));
        }
        else {
            return res.render(path.resolve(__dirname, '../views/user/register.ejs'), {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
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
        try {
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
                            { maxAge: (1000 * 60 * 60) }  // en este objeto literal se define la propiedad de duración en mili segundos de la cookie.
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
        } catch (error) {
            console.error('Ups, no se pudo realizar la solicitud..', error);
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    }
}