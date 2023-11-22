const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(3000, () => console.log('Servidor corriendo. http://localhost:3000/'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'));
});

app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productos.html'));
});

app.get('/detalle-producto', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/detalle-producto.html'));
});

app.get('/carrito', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/carrito.html'));
});

app.get('/recuperar-password', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/recuperar-password.html'));
});


app.get('/configuracion', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/configuracion.html'));
});



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/not-found.html'));
});