const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt')

module.exports = {
    setting: (req, res) => {
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
                rol: req.body.rol, 
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
        const usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')));
        let usuarioALoguear = usuarios.find(user => user.correo.toUpperCase() == req.body.correo.toUpperCase());

        if(usuarioALoguear){
            const coincide = bcrypt.compareSync(req.body.password, usuarioALoguear.password)
            if(coincide){  
                delete usuarioALoguear.password;       
                req.session.userLogged = usuarioALoguear; 

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
