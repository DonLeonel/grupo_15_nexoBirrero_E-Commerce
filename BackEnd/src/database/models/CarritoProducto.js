module.exports = (sequelize, DataTypes) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        productoId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        carritoId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precio: {
            type: DataTypes.DECIMAL,
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
        tableName: "carritos_productos"
    }

    const CarritoProducto = sequelize.define("CarritoProducto", cols, config);
    CarritoProducto.associate = function(modelos) {
        CarritoProducto.belongsTo(modelos.Carrito, {
            // por las dudas ponemos el as :P 
            as : "carrito",
            foreignKey: "carritoId"            
        });

        CarritoProducto.belongsTo(modelos.Producto, {
            // por las dudas ponemos el as :P 
            as : "producto",
            foreignKey: "productoId"            
        });
    }

    return CarritoProducto;
}