const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/setting', usuarioController.setting);
router.get("/register", usuarioController.registerView)
router.post('/usuario/register', usuarioController.save);
router.get("/recuperar-password", usuarioController.recuperarPassView)
router.post('/recuperar-password', usuarioController.recuperarPass)
router.get('/login', usuarioController.loginView);
router.post('/login', usuarioController.login);

module.exports = router;