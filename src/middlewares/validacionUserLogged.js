/* Verifica si un usuario está logueado. Este middleware lo usamos para mostrar o no, detalles u opciones de vistas globales (como por ej: header, footer, etc) */

module.exports = (req,res,next) => {
    res.locals.isLogged = false;

    if(req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}