const express = require('express');
const router = express.Router();
const path = require('path');
const validaciones = require('../middlewares/validacionesProducto.js')
const uploadFile = require('../middlewares/multer.js')
const productosController = require(path.resolve(__dirname, '../controllers/productosController'));

router.get('/registrar', productosController.registrarView);
router.post('/registrar', uploadFile.single('imagen'), validaciones, productosController.save);

router.get('/editar/:id', productosController.editarView);
router.put('/actualizar/:id', uploadFile.single('imagen'), productosController.actualizar);

router.get('/delete/:id', productosController.delete);
router.get('/administrar', productosController.administrarView);

router.get('/detalle/:id', productosController.detalleView);
router.get('/administrar/detalle/:id', productosController.adminDetalleView);

router.get('/carrito', productosController.carritoView);

//router.get('/:categoria', productosController.categoriaView);

module.exports = router;