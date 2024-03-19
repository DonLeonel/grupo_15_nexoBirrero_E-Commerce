const express = require('express');
const router = express.Router();
const productoApiController = require('../../controllers/api/productosAPIController');

router.get('/productos', productoApiController.listado);
router.get('/producto/:id', productoApiController.detalle);

module.exports = router;