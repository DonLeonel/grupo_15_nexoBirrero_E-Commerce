const path = require('path');
const fs = require('fs');

module.exports = {
    setting : (req, res) => {
        res.render(path.resolve(__dirname, '../views/user/setting.ejs'));
    },     
    registerView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/user/register.ejs'));
    }, 
    save: (req,res) => {
        const usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')));
        
        let ultUsuario = usuarios.pop();
        usuarios.push(ultUsuario);

        const user = {
            id: ultUsuario.id + 1,
            nombreCompleto: req.body.nombreCompleto,            
            usuario: req.body.usuarios,
            correo: req.body.correo           
        }
    }, 
    recuperarPass: (req,res)=> {
      //  req.body
    },
    recuperarPassView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/user/recuperar-password.ejs'));
    },
    loginView: (req, res) => {        
        res.render(path.resolve(__dirname, '../views/user/login.ejs'));
    },
    login: (req, res) => {        
        
    }
}
