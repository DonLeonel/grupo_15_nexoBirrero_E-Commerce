const express = require('express');
const router = express.Router();
const path = require('path');
const validaciones = require('../middlewares/validacionesUsuario')
const usuarioController = require(path.resolve(__dirname, '../controllers/usuarioController'));

router.get('/setting', usuarioController.setting);

router.get("/register", usuarioController.registerView)
router.post('/register', validaciones, usuarioController.save);

router.get('/login', usuarioController.loginView);
router.post('/login', usuarioController.login);

router.get("/recuperar-password", usuarioController.recuperarPassView)
router.post('/recuperar-password', usuarioController.recuperarPass)

module.exports = router;