/* Verifica si un usuario está logueado. Si es asi, algunas rutas no pueden ser ingresadas (como por ej: loguin o register) 
y redirecciona automaticamente a /setting. */

module.exports = (req,res,next) => {
    if(req.session.userLogged){
        return res.redirect('/usuario/setting');
    }
    next();
}