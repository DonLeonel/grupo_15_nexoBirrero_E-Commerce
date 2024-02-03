const path = require('path');
const fs = require('fs');

module.exports = (req, res, next) => {
    
    if (req.cookies.recordarme != undefined && req.session.userLogged == undefined) { //Si recordarme es true AND NO hay usuario en session
        const usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json'))); //Pasa el JSON de usuarios a un array

        usuarios.find(user => {
            if (user.correo == req.cookies.recordarme) {
                req.session.userLogged = user;  //Si se encontró el usuario, se lo pasamos a session.
            }
        });        
    }

    next();
}
