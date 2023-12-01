const express = require('express');
const router = express.Router();
const carritoController = require("../controllers/carritoController");

// Rutas para manipulación del carrito
router.get('/carrito', carritoController.carritoView);
// router.get('carrito/obtener-total', carritoController.obtenerTotal);
// router.post('carrito/agregar-producto', carritoController.agregarProducto);
// router.post('carrito/quitar-producto', carritoController.quitarProducto);

module.exports = router;
