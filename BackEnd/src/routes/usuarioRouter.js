const express = require('express');
const router = express.Router();
const path = require('path');
const validacionUsuario = require('../middlewares/validacionUsuario.js'); 
const validacionAuth = require('../middlewares/validacionAuth.js'); 
const validacionGuest = require('../middlewares/validacionGuest.js'); 
const uploadFile = require('../middlewares/multerUsuarios.js'); 
const usuarioController = require(path.resolve(__dirname, '../controllers/usuarioController'));

router.get('/setting', validacionAuth, usuarioController.setting);

router.get('/setting/cambiar-correo', validacionAuth, usuarioController.cambiarCorreoView);
router.put('/setting/cambiar-correo/:id', validacionUsuario, usuarioController.updateCorreo);

router.get('/setting/cambiar-contrasenia', validacionAuth, usuarioController.cambiarContraseniaView);
router.put('/setting/cambiar-contrasenia/:id', validacionUsuario, usuarioController.updateContrasenia);

router.get('/setting/cambiar-avatar', validacionAuth, usuarioController.cambiarAvatarView);
router.put('/setting/cambiar-avatar/:id', uploadFile.single('avatarNuevo'), usuarioController.updateAvatar);

router.get("/register", validacionGuest, usuarioController.registerView)
router.post('/register', validacionUsuario, usuarioController.save);

router.get('/login', validacionGuest, usuarioController.loginView);
router.post('/login', usuarioController.login);

router.get('/logout', usuarioController.logout);

router.get("/recuperar-password", usuarioController.recuperarPassView)
router.post('/recuperar-password', usuarioController.recuperarPass)

module.exports = router;