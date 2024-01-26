/* Verifica si un usuario está logueado. Caso contrario, algunas rutas no pueden ser ingresadas (como por ej: carrito, 
setting, administrar) y redirecciona automaticamente a /login. */

module.exports = (req,res,next) => {
    if(!req.session.userLogged){
        return res.redirect('/usuario/login');
    }
    next();
}