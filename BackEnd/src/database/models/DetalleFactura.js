module.exports = (sequelize, DataTypes) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        facturaId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productoId: {
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
        tableName: "detalles_facturas"
    }

    const DetalleFactura = sequelize.define("DetalleFactura", cols, config);

    DetalleFactura.associate = function(modelos) {
        DetalleFactura.belongsTo(modelos.Producto, {
            as: "producto",
            foreignKey: "productoId"
        });

        DetalleFactura.belongsTo(modelos.Factura, {
            as: "factura",
            foreignKey: "facturaId"
        });
    };

    return DetalleFactura;
}