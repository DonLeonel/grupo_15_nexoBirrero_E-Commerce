module.exports = (sequelize, DataTypes) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        correo: {
            type: DataTypes.STRING(100),
            allowNull: false            
        },
        contrasenia: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        rolId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        ciudadId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        fechaNac: {
            type: DataTypes.DATE,
            allowNull: true
        },
        activo: {
            type: DataTypes.INTEGER(1),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true            
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
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
        });

        Usuario.hasMany(modelos.Factura, {
            as : "facturas",
            foreignKey: "usuarioId"
        });
    };

    return Usuario;
}