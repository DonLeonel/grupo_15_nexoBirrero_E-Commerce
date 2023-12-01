module.exports = {
    index : (req, res) => {
        res.send('Hola Usuario');
    }, 
    registrarUsuario: (req,res) => {
        res.render('Hola Usuario');
    }, 
    register: (req, res) => {
        res.render('register');
    }, 
    recuperarPass: (req,res)=> {
      //  req.render('Hola Usuario');
    }, 
    recuperarPassView: (req, res) => {
        res.render('recuperar-password');
    }
}
