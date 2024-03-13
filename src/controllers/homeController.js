const path = require('path');
const { Producto, Categoria } = require('../database/models')

module.exports = {
    index: async (req, res) => {
        try {
            const categorias = await Categoria.findAll();
            const productos = await Producto.findAll({ where: { activo: 1 } });

            res.render(path.resolve(__dirname, '../views/web/home.ejs'), { productos, categorias });
        } catch (error) {
            console.error('No se pudo recuperar datos de la db', error)
        }
    }
}