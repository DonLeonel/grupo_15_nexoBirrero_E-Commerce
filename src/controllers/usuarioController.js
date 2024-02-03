const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt')

module.exports = {
    setting: (req, res) => {
        console.log(req.session.userLogged);
        res.render(path.resolve(__dirname, '../views/user/setting.ejs'), {
            user: req.session.userLogged
        });    
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
            let ultUsuario = usuarios.pop();
            let ID;
            if (ultUsuario) {
                ID = ultUsuario.id + 1;
                usuarios.push(ultUsuario);
            }
            else { ID = 1; }

            const user = {
                id: ID,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                correo: req.body.correo,
                password: bcrypt.hashSync(req.body.password, 10),
                rol: 'CLIENTE', //por defecto el rol es cliente. (un administrador puede editar el rol de un cliente)
                avatar: 'user.png'  //por defecto que tenga ese avatar (por el momento).
            }

            usuarios.push(user);
            fs.writeFileSync(path.resolve(__dirname, '../data/usuarios.json'), JSON.stringify(usuarios, null, 2));
            res.redirect('/usuario/login');
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

    login: (req, res) => {
        const usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json'))); //Pasa el JSON de usuarios a un array
        let usuarioALoguear = usuarios.find(user => user.correo.toUpperCase() == req.body.correo.toUpperCase()); //Si al momento de iniciar sesion, el correo es valido, guardamos al usuario en un objeto literal. Caso contrario, la variable "usuarioALoguear" tendrá valor undefined

        if(usuarioALoguear){ 
            const coincide = bcrypt.compareSync(req.body.password, usuarioALoguear.password) //Comparamos la contraseña ingresada, con la contraseña (hasheada) del usuario
            if(coincide){  
                delete usuarioALoguear.password; //Borramos la contraseña del objeto literal, ya que no nos interesa     
                req.session.userLogged = usuarioALoguear; //Guardamos en req.session.userLogged, el objeto literal del usuario logueado
              
                if(req.body.recordarme){  //Si el checkbox esta tildado, se creara una cookie con el nombre recordarme y se guardara el correo asociado a ese usuario.
                    res.cookie(
                        'recordarme', 
                        usuarioALoguear.correo,
                        { maxAge: 60000 }  // en este objeto literal se define la propiedad de duración en mili segundos de la cookie.
                    )
                }

                return res.redirect('/usuario/setting'); 
            }
        }

        return res.render(path.resolve(__dirname, '../views/user/login.ejs'), {
            errors: {
                msg: 'El correo y/o contraseña son inválidos.'
            }
        });
    },

    logout: (req,res) => {
        req.session.destroy();
        return res.redirect('/');
    }
}
