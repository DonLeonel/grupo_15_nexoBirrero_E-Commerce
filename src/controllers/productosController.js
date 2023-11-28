const path = require('path');
const fs = require('fs');

module.exports = {
    index: (req, res) => {        
        const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf-8'));                
         
        res.render('productos', { afrutados, trigo , ale });
    },
    detalle : (req, res) => {
        
    }
}