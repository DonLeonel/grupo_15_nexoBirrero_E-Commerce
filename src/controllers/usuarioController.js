const path = require('path');

module.exports = {
    setting : (req, res) => {
        res.render(path.resolve(__dirname, '../views/user/setting.ejs'));
    },     
    registerView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/user/register.ejs'));
    }, 
    save: (req,res) => {
        //req.body
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
