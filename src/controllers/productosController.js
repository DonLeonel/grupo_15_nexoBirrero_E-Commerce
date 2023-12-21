const path = require('path');
const fs = require('fs');

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
        res.render(path.resolve(__dirname, '../views/product/administrar.ejs'), {productos});
    },

    registrarView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/product/registrar.ejs'));
    },

    save: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf-8'));
        
        let ultProducto = productos.pop();
        productos.push(ultProducto);       
        
        const errors = validationResult(req);

        if(errors.isEmpty()){
            
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
        }
        else{
            console.log(errors.array())
        }
        
    },

    carritoView: (req, res) => {                
        res.render(path.resolve(__dirname, '../views/product/carrito.ejs'));
    },

    editarView: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf-8'));
        let id = req.params.id;        
        let Producto = productos.find(producto => producto.id == id);        

        res.render(path.resolve(__dirname, '../views/product/editar.ejs'), { Producto });
    },

    actualizar: (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));  
        let id = req.params.id;
        req.body.id = id;

        let productoActualizado = productos.map(p =>{
            if(p.id == id){            
                return p = req.body;
            }
            return p;
        })    
        console.log(productoActualizado)
        
        let productoYaActualizado = JSON.stringify(productoActualizado,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../data/productos.json'),productoYaActualizado);
        res.redirect('productos/administrar');
    },

    delete: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf-8'));        
        let productosSinElBorrado = productos.filter(p => p.id != req.params.id);
        console.log(productosSinElBorrado)
        let productosGuardar = JSON.stringify(productosSinElBorrado,null,2);
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), productosGuardar); 
        res.redirect('/productos/administrar')          
    }
}