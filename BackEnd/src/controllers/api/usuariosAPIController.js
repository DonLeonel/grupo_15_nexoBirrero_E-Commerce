const { Usuario } = require('../../database/models');

module.exports = {
    listado: async (req, res) => {
        try {
            const usuarios = await Usuario.findAll({
                attributes: {
                    exclude: ['contrasenia']
                },
                where: {
                    activo: 1
                }
            });

            let respuesta = {
                meta: {
                    length: usuarios.length,
                    url: '/api/usuarios',
                    statusCode: 200
                },              
                data: usuarios
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
            const usuario = await Usuario.findByPk(req.params.id, {
                attributes: {
                    exclude: ['contrasenia']
                },
                include: ['rol', 'ciudad']
            });

            let respuesta;
            if (usuario) {                
                respuesta = {
                    meta: {
                        url: '/api/usuario/:id',
                        statusCode: 200
                    },
                    data: usuario
                };
                res.status(200).json(respuesta);
            } else {
                respuesta = {
                    meta: {
                        url: '/api/usuario/:id',
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