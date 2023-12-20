const express = require('express');
const path = require('path');
const app = express();

//Requerimos las rutas.
const homeRouter = require('./routes/homeRouter');
const usuarioRouter = require('./routes/usuarioRouter')
const productoRouter = require('./routes/productosRouter')

//Seteamos que motor de plantilla usaremos y donde encontrar las Views
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'/src/views'));

//Middlewares - para poder trabajar con json, objetos y recursos estaticos.
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Usamos las rutas
app.use('/', homeRouter);
app.use('/usuario',usuarioRouter);
app.use('/productos',productoRouter);

//Seteamos la pagina 404
app.get('*', (req, res) => {
    res.status(404).render(path.resolve(__dirname, './views/web/not-found.ejs'));
});

//Se levanta el servidor.
const _PORT = 3000;
app.listen(_PORT, () => console.log('Servidor corriendo. http://localhost:' + _PORT + '/'));