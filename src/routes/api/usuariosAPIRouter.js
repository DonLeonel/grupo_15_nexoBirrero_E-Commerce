const express = require('express');
const router = express.Router();
const usuarioApiController = require('../../controllers/api/usuariosAPIController');

router.get('/usuarios', usuarioApiController.listado);
router.get('/usuario/:id', usuarioApiController.detalle);

module.exports = router;