const path = require('path');
const fs = require('fs');

module.exports = {
    categoriaView: (req, res) => {
        //const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf-8'));        
        //res.render(path.resolve(__dirname, '../views/product/categoria.ejs')
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
        res.render(path.resolve(__dirname, '../views/product/administrar.ejs'));
    },
    registrarView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/product/registrar.ejs'));
    },
    save: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf-8'));
        
        let ultProducto = producto.pop();
        producto.push(ultProducto);        

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

        let nuevoProductoGuardar = JSON.stringify(productos,null,2);
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), nuevoProductoGuardar);
        res.redirect('/productos/administrar')
    },
    carritoView : (req, res) => {   
        res.send('gasdasdasdasdasd')     
        //res.render(path.resolve(__dirname, '../views/product/carrito.ejs'));
    }
}