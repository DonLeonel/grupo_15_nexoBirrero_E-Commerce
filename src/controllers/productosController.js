const path = require('path');
const fs = require('fs');
//const Swal = require('sweetalert2');

const { validationResult } = require('express-validator');

module.exports = {
    categoriaView: (req, res) => {
    },

    detalleView: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf-8'));

        let id = req.params.id;
        let miProducto;
        productos.forEach(producto => {
            if (producto.id == id) {
                miProducto = producto;
            }
        });

        res.render(path.resolve(__dirname, '../views/product/detalle.ejs'), { miProducto });
    },

    administrarView: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf-8'));
        res.render(path.resolve(__dirname, '../views/product/administrar.ejs'), { productos });
    },

    adminDetalleView: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf-8'));

        let id = req.params.id;
        let miProducto;
        productos.forEach(producto => {
            if (producto.id == id) {
                miProducto = producto;
            }
        });

        res.render(path.resolve(__dirname, '../views/product/adminDetalle.ejs'), { miProducto });
    },

    registrarView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/product/registrar.ejs'));
    },

    save: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf-8'));

        let ultProducto = productos.pop();
        productos.push(ultProducto);

        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const nvoProducto = {
                id: ultProducto.id + 1,
                nombre: req.body.nombre,
                categoria: req.body.categoria,
                variedad: req.body.variedad,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                cervecera: req.body.cervecera,
                nacionalidad: req.body.nacionalidad,
                graduacion: req.body.graduacion,
                cont_envase: req.body.cont_envase,
                disponible: true,
                img: req.file.filename
            };

            productos.push(nvoProducto);            
            fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), JSON.stringify(productos, null, 2));
            res.redirect('/productos/administrar')
        }
        else {            
            res.render(path.resolve(__dirname, '../views/product/registrar.ejs'),{
                errors: errors.mapped(),
                oldData: req.body                
            });
        }
    },

    carritoView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/product/carrito.ejs'));
    },

    editarView: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf-8'));
        let Producto = productos.find(producto => producto.id == req.params.id);

        res.render(path.resolve(__dirname, '../views/product/editar.ejs'), { Producto });
    },

    actualizar: (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));
        let id = req.params.id;
        req.body.id = id;

        let productoActualizado = productos.map(p => {
            if (p.id == id) {
                p.nombre = req.body.nombre;
                p.categoria = req.body.categoria;
                p.variedad = req.body.variedad;
                p.descripcion = req.body.descripcion;
                p.precio = req.body.precio;
                p.cont_envase = req.body.cont_envase;
                p.cervecera = req.body.cervecera;
                p.nacionalidad = req.body.nacionalidad;
                p.graduacion = req.body.graduacion;
                if (req.file) { p.img = req.file.filename }
            }
            return p;
        })       

        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), JSON.stringify(productoActualizado, null, 2));
        res.redirect('/productos/administrar');
    },

    delete: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf-8'));

        // let productosSinElBorrado = productos.filter(p => p.id != req.params.id);
        // let productosGuardar = JSON.stringify(productosSinElBorrado, null, 2);
        // fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), productosGuardar);
        // res.redirect('/productos/administrar')  
        res.send('Funciona!!, pero está comentado.')     
    }
}