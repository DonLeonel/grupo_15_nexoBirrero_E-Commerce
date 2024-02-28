module.exports = (sequelize, DataTypes) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER
        },
        metodoPagoId: {
            type: DataTypes.INTEGER
        },
        usuarioId: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }

    const config = {
        tableName: "facturas"
    }

    const Factura = sequelize.define("Factura", cols, config);

    Factura.associate = function(modelos){
        Factura.belongsTo(modelos.metodoPago, {
            as: "metodo_pago",
            foreignKey: "metodoPagoId"
        });

        Factura.belongsTo(modelos.Usuario, {
            as: "usuario",
            foreignKey: "usuarioId"
        });
    };

    return Factura;
}