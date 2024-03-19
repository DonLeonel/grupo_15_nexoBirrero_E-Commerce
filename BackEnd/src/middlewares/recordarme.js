const { Usuario } = require('../database/models');

module.exports = (req, res, next) => {

    if (req.cookies.recordarme != undefined && req.session.userLogged == undefined) { //Si recordarme es true AND NO hay usuario en session        
        Usuario.findOne({
            where: {
                correo: req.cookies.recordarme
            }
        })
        .then(user => {            
            req.session.userLogged = user; //se lo pasamos a session.    
        }) 
        .catch(error => {
            console.error('No se encontro el usuario', error);
        })
    }

    next();
}
