module.exports = (sequelize, DataTypes) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        metodoPagoId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        usuarioId: {
            type: DataTypes.INTEGER,
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
        tableName: "facturas"
    }

    const Factura = sequelize.define("Factura", cols, config);

    Factura.associate = function(modelos){
        Factura.belongsTo(modelos.MetodoPago, {
            as: "metodoPago",
            foreignKey: "metodoPagoId"
        });

        Factura.belongsTo(modelos.Usuario, {
            as: "usuario",
            foreignKey: "usuarioId"
        });

        Factura.hasMany(modelos.DetalleFactura, {
            as: "detallesFactura",
            foreignKey: "facturaId"
        });
    };

    return Factura;
}