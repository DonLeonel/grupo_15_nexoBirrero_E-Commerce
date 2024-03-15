const { Usuario } = require('../../database/models');

module.exports = {
    listado: async (req, res) => {
        try {
            const usuarios = await Usuario.findAll({
                where: {
                    activo: 1
                }
            });

            let respuesta = {
                length: usuarios.length,
                statusCode: 200,
                data: usuarios
            };

            res.json(respuesta);
        } catch (error) {
            throw new Error(error);
        }
    },
    detalle: async (req, res) => {
        try {
            const usuario = await Usuario.findByPk(req.params.id, {
                include: ['rol', 'ciudad']
            });

            if (usuario) {
                delete usuario.contrasenia;
                let respuesta = {
                    statusCode: 200,
                    data: usuario
                };
                res.json(respuesta);
            } else {
                let respuesta = {
                    statusCode: 400,
                    data: null
                };
            };
        } catch (error) {
            throw new Error(error);
        }
    }
}