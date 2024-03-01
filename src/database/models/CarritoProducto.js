module.exports = (sequelize, DataTypes) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER
        },
        productoId: {
            type: DataTypes.INTEGER
        },
        carritoId: {
            type: DataTypes.INTEGER
        },
        cantidad: {
            type: DataTypes.INTEGER
        },
        precio: {
            type: DataTypes.DECIMAL
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }

    const config = {
        tableName: "carritos_productos"
    }

    const CarritoProducto = sequelize.define("CarritoProducto", cols, config);
    CarritoProducto.associate = function(modelos) {
        CarritoProducto.belongsTo(modelos.Carrito, {
            // por las dudas ponemos el as :P 
            as : "carrito",
            foreignKey: "carritoId"
            
        })
        CarritoProducto.belongsTo(modelos.Producto, {
            // por las dudas ponemos el as :P 
            as : "producto",
            foreignKey: "productoId"
            
        })
    }

    return CarritoProducto;
}