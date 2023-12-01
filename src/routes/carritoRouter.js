const express = require('express');
const router = express.Router();
const carritoController = require("../controllers/carritoController");

// Rutas para manipulación del carrito
router.post('/agregar-producto', carritoController.agregarProducto);
router.post('/quitar-producto', carritoController.quitarProducto);
router.get('/obtener-total', carritoController.obtenerTotal);

module.exports = router;
