const path = require('path');
const { validationResult } = require('express-validator');
const { Producto, Categoria } = require('../database/models');

module.exports = {
    categoriaView: async (req, res) => {
        try {
            const productos = await Producto.findAll({
                where: {
                    activo: 1,
                    categoriaId: req.params.id
                }
            });

            res.render(path.resolve(__dirname, '../views/product/categoria.ejs'), { productos });
        } catch (error) {
            console.error('No se pudo recuperar los productos de la db', error)
        }
    },

    detalleView: async (req, res) => {
        try {
            const miProducto = await Producto.findByPk(req.params.id, {
                include:
                    ['categoria']
            });

            res.render(path.resolve(__dirname, '../views/product/detalle.ejs'), { miProducto });
        } catch (error) {
            console.error('No se pudo encontrar al productos seleccionado', error);
        }
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

    adminDetalleView: async (req, res) => {
        try {
            const miProducto = await Producto.findByPk(req.params.id, {
                include:
                    ['categoria']
            });

            res.render(path.resolve(__dirname, '../views/product/adminDetalle.ejs'), { miProducto });
        } catch (error) {
            console.error('No se pudo encontrar al productos seleccionado', error);
        }
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

        if (errors.isEmpty()) {
            Producto.create({
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
            })
                .then(() => res.redirect('/productos/administrar'))
                .catch((error) => {
                    console.error('No se pudo registrar el producto', error);
                });
        }
        else {
            const categorias = await Categoria.findAll();
            res.render(path.resolve(__dirname, '../views/product/registrar.ejs'), {
                errors: errors.mapped(),
                oldData: req.body,
                categorias
            });
        }
    },

    carritoView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/product/carrito.ejs'));
    },

    editarView: async (req, res) => {
        try {
            const producto = await Producto.findByPk(req.params.id);
            const categorias = await Categoria.findAll();
            res.render(path.resolve(__dirname, '../views/product/editar.ejs'), { producto, categorias });
        } catch (error) {
            console.error('No se pudo recuperar el producto indicado!', error);
        }
    },

    actualizar: async (req, res) => {
        try {
            await Producto.update({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                categoriaId: req.body.categoriaId,
                precio: req.body.precio,
                nacionalidad: req.body.nacionalidad,
                variedad: req.body.variedad,
                cervecera: req.body.cervecera,
                graduacion: req.body.graduacion,
                volContenido: req.body.cont_envase,
                img: req.file && req.file.filename
            },
                {
                    where: {
                        id: req.params.id
                    }
                })

            res.redirect('/productos/administrar');
        } catch (error) {
            console.error('No se pudo actualizar el producto', error);
        }
    },

    delete: async (req, res) => {   //No borra el producto, sino que actualiza el campo activo = 0 (Borrado Lógico)
        try {
            await Producto.update(
                {
                    activo: 0
                },
                {
                    where: {
                        id: req.params.id
                    }
                });

            res.redirect('/productos/administrar')
        } catch (error) {
            console.error('No se pudo eliminar el producto.', error);
        }
    }
}