module.exports = (sequelize, DataTypes) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER
        },
        usuarioId: {
            type: DataTypes.INTEGER
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
        tableName: "carritos"
    }

    const Carrito = sequelize.define("Carrito", cols, config);

    Carrito.associate = function(modelos){
        Carrito.belongsTo(modelos.Usuario, {
            as: "usuario",
            foreignKey: "usuarioId"
        });        
    };
    
    return Carrito;
}