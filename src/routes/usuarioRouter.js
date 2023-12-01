const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.index);
router.post('/registro', usuarioController.registrarUsuario);
router.get("/register", usuarioController.register)
router.post('/reset-password', usuarioController.recuperarPass)
router.get("recuperar-password", usuarioController.recuperarPassView)
module.exports = router;