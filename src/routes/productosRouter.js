const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/producto/:categoria', productosController.index);
router.get('/producto/:id', productosController.detalle )

module.exports = router;