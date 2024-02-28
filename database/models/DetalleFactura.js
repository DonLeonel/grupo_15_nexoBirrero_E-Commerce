module.exports = (sequelize, DataTypes) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER
        },
        facturaId: {
            type: DataTypes.INTEGER
        },
        productoId: {
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
        tableName: "detalles_facturas"
    }

    const DetalleFactura = sequelize.define("DetalleFactura", cols, config);

    return DetalleFactura;
}