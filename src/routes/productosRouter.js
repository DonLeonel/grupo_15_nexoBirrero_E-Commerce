const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/:categoria', productosController.index);
router.get('/:id', productosController.detalle )

module.exports = router;