const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/usuario/setting', usuarioController.setting);
router.get("/usuario/register", usuarioController.registerView)
router.post('/usuario/save', usuarioController.saveUsuario);
router.post('/usuario/reset-password', usuarioController.recuperarPass)
router.get("/usuario/recuperar-password", usuarioController.recuperarPassView)

module.exports = router;