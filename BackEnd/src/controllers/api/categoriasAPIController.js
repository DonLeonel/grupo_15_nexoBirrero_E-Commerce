const { Categoria } = require('../../database/models');

module.exports = {
    listado: async (req, res) => {
        try {
            const categorias = await Categoria.findAll();

            let respuesta = {
                meta: {
                    length: categorias.length,
                    url: '/api/categorias',
                    statusCode: 200
                },              
                data: categorias
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
            const categoria = await Categoria.findByPk(req.params.id, {                
                include: ['productos']
            });

            let respuesta = {
                meta: {                        
                    url: '/api/categoria/:id'                    
                }
            };
            if (categoria) {                
                respuesta = {
                    meta: {                        
                        statusCode: 200
                    },
                    data: categoria
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