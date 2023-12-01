module.exports = {
    setting : (req, res) => {
        res.render('setting');
    },     
    saveUsuario: (req,res) => {
        //req.body
    }, 
    registerView: (req, res) => {
        res.render('register');
    }, 
    recuperarPass: (req,res)=> {
      //  req.body
    },
    recuperarPassView: (req, res) => {
        res.render('recuperar-password');
    }
}
