const path = require('path');
const fs = require('fs');

module.exports = {
    index: (req, res) => {        
        const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf-8'));
        
        const afrutados = productos.filter((p) => p.category === 'afrutadas')
        const trigo = productos.filter((p) => p.category === 'trigo')
        const ale = productos.filter((p) => p.category === 'ale')

        res.render('home', { productos });
    }
}