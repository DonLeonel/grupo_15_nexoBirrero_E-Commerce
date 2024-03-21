const { Rol } = require('../../database/models');

module.exports = {
    listado: async (req, res) => {
        try {
            const roles = await Rol.findAll();

            let respuesta = {
                meta: {
                    length: roles.length,
                    url: '/api/roles',
                    statusCode: 200
                },              
                data: roles
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
            const rol = await Rol.findByPk(req.params.id, {                
                include: ['usuarios'],
                attributes: {
                    exclude: ['contrasenia']  //Reparar porque no excluye.
                },
            });

            let respuesta = {
                meta: {                        
                    url: '/api/rol/:id'                    
                }
            };
            if (rol) {                
                respuesta = {
                    meta: {                        
                        statusCode: 200
                    },
                    data: rol
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