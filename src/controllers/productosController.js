const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const { Producto, Categoria } = require('../database/models');

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

    administrarView: async (req, res) => {
        try {
            const productos = await Producto.findAll({
                where: {
                    activo: 1
                }
            });

            res.render(path.resolve(__dirname, '../views/product/administrar.ejs'), { productos });
        } catch (error) {
            console.error('No se pudo recuperar los productos de la Db', error);
        }
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

    registrarView: async (req, res) => {
        try {
            const categorias = await Categoria.findAll();
            res.render(path.resolve(__dirname, '../views/product/registrar.ejs'), { categorias });            
        } catch (error) {
            console.error('Error al llamar a las categorias', error);
        }        
    },

    save: async (req, res) => {
        const errors = validationResult(req);
        try {
            if (errors.isEmpty()) {
                await Producto.create({
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                    categoriaId: req.body.categoriaId,
                    precio: req.body.precio,
                    nacionalidad: req.body.nacionalidad,
                    variedad: req.body.variedad,
                    cervecera: req.body.cervecera,
                    graduacion: req.body.graduacion,
                    volContenido: req.body.cont_envase,
                    img: req.file.filename,
                    activo: 1
                });

                res.redirect('/productos/administrar')
            }
            else {
                const categorias = await Categoria.findAll();
                //res.send(req.body);
                res.render(path.resolve(__dirname, '../views/product/registrar.ejs'), {
                    errors: errors.mapped(),
                    oldData: req.body,
                    categorias
                });
            }
        }
        catch (error) {
            console.error('No se pudo registrar el producto', error);
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