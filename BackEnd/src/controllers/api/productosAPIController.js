const { Producto } = require('../../database/models');

module.exports = {
    listado: async (req, res) => {
        try {
            const productos = await Producto.findAll({                
                where: {
                    activo: 1
                }
            });

            let respuesta = {
                meta: {
                    length: productos.length,
                    url: '/api/productos',
                    statusCode: 200
                },              
                data: productos
            };

            res.status(200).json(respuesta);
        } catch (error) {
            console.error('Error: ' ,error);
            res.status(500).json({
                error: error.message,
                statusCode: 500
            });
        }
    },
    detalle: async (req, res) => {
        try {
            const producto = await Producto.findByPk(req.params.id, {                
                include: ['categoria']
            });

            let respuesta = {
                meta: {                        
                    url: '/api/producto/:id'                    
                }
            };
            if (producto) {                
                respuesta = {
                    meta: {                        
                        statusCode: 200
                    },
                    data: producto
                };
                res.status(200).json(respuesta);
            } else {
                respuesta = {
                    meta: {                        
                        statusCode: 400                      
                    },
                    data: null
                };
                res.status(400).json(respuesta);
            };
        } catch (error) {
            console.error('Error: ' ,error);
            res.status(500).json({
                error: error.message,
                statusCode: 500
            });
        }
    }
}