const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productosController = require('../controllers/productosController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/img/productos'));
    },
    filename: (req, file, cb) => {
        const fileName = Date.now + '_IMG' + path.extname(file.originalname);
        cb(null, fileName);
    }
})

const upload = multer({ storage })

router.get('/:categoria', productosController.categoriaView);
router.get('/detalle/:id', productosController.detalleView);
router.get('/carrito', productosController.carritoView);
router.get('/administrar', productosController.administrarView);
router.get('/registrar', productosController.registrarView);
router.post('/registrar', upload.single('imagen'), productosController.save);

module.exports = router;