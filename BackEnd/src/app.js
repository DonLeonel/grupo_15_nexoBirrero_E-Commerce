const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const userLogged = require('./middlewares/validacionUserLogged'); //Middleware de aplicación
const recordarme = require('./middlewares/recordarme'); //Middleware de aplicación

//Requerimos las rutas.
const homeRouter = require('./routes/homeRouter');
const usuarioRouter = require('./routes/usuarioRouter')
const productoRouter = require('./routes/productosRouter')
//Requerimos las rutas para las APIS.
const apiUsuariosRouter = require('./routes/api/usuariosAPIRouter');
const apiProductosRouter = require('./routes/api/productosAPIRouter');

//Seteamos que motor de plantilla usaremos y donde encontrar las Views
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'/src/views'));

//Middlewares - para poder trabajar con json, objetos y recursos estaticos.
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'topSecret',
    resave: false,
    saveUninitialized: false
}))
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser())
app.use(recordarme);
app.use(userLogged);

//Usamos las rutas
app.use('/', homeRouter);
app.use('/usuario',usuarioRouter);
app.use('/productos',productoRouter);
//Usamos las rutas para las APIS
app.use('/api', apiUsuariosRouter);
app.use('/api', apiProductosRouter);

//Seteamos la pagina 404
app.get('*', (req, res) => {
    res.status(404).render(path.resolve(__dirname, './views/web/not-found.ejs'));
});

//Se levanta el servidor.
const _PORT = 3000;
app.listen(_PORT, () => console.log('Servidor corriendo. http://localhost:' + _PORT + '/'));