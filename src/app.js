const express = require('express');
const path = require('path');
const app = express();

//Requerimos las rutas.
const homeRouter = require('./routes/homeRouter');
const loginRouter = require('./routes/loginRouter');
const usuarioRouter = require('./routes/usuarioRouter')
const productosRouter = require('./routes/productosRouter')
const carritoRouter =  require('./routes/carritoRouter')

//Usamos las rutas
app.use(homeRouter);
app.use(loginRouter);
app.use(usuarioRouter);
app.use(productosRouter);
app.use(carritoRouter);

//Seteamos que motor de plantilla usaremos y donde encontrar las Views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

//Se levanta el servidor.
const _PORT = 3000;
app.listen(_PORT, () => console.log('Servidor corriendo. http://localhost:' + _PORT + '/'));

//Middlewares - para poder trabajar con json, objetos y recursos estaticos.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../public')));

//Seteamos la pagina 404
app.get('*', (req, res) => {
    res.status(404).render('not-found');
});