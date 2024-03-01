module.exports = (sequelize, DataTypes) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER
        },
        correo: {
            type: DataTypes.STRING(100)
        },
        contrasenia: {
            type: DataTypes.STRING(150)
        },
        avatar: {
            type: DataTypes.STRING(30)
        },
        rolId: {
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING(50)
        },
        apellido: {
            type: DataTypes.STRING(50)
        },
        telefono: {
            type: DataTypes.STRING(20)
        },
        ciudadId: {
            type: DataTypes.INTEGER
        },
        fechaNac: {
            type: DataTypes.DATE
        },
        activo: {
            type: DataTypes.INTEGER(1)
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }

    const config = {
        tableName: "usuarios"
    }

    const Usuario = sequelize.define("Usuario", cols, config);

    Usuario.associate = function(modelos){
        Usuario.belongsTo(modelos.Rol, {
            as: "rol",
            foreignKey: "rolId"
        });

        Usuario.belongsTo(modelos.Ciudad, {
            as: "ciudad",
            foreignKey: "ciudadId"
        });
        Usuario.hasOne(modelos.Carrito, {
            as :"carrito",
            foreignKey: "usuarioId"
        })
        Usuario.hasMany(modelos.Factura, {
            as : "factura",
            foreignKey: "usuarioId"
        })
    };

    return Usuario;
}