module.exports = {
  carritoView : (req, res) => {
    res.render('carrito')
  }
}


// let carrito = [];

// const agregarProducto = (req, res) => {
//   const producto = req.body.producto;
//   const cantidad = req.body.cantidad; 

//   res.json({ success: true, message: `Producto agregado al carrito: ${producto}` });
// };

// const quitarProducto = (req, res) => {
//   const producto = req.body.producto;
//   res.json({ success: true, message: `Producto quitado del carrito: ${producto}` });
// };

// const obtenerTotal = (req, res) => {

//   res.json({ total: 2497 });
// };

// module.exports = {
//   agregarProducto,
//   quitarProducto,
//   obtenerTotal,
// };