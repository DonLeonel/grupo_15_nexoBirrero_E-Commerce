const express = require('express');
const router = express.Router();
const categoriasApiController = require('../../controllers/api/categoriasAPIController');

router.get('/categorias', categoriasApiController.listado);
router.get('/categoria/:id', categoriasApiController.detalle);

module.exports = router;