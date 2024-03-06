module.exports = (sequelize, DataTypes) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING(30),
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
        tableName: "metodos_pagos"
    }

    const MetodoPago = sequelize.define("MetodoPago", cols, config);

    MetodoPago.associate = function(modelos){
        MetodoPago.hasMany(modelos.Factura, {
            as: "facturas",
            foreignKey: "metodoPagoId"
        });
    };

    return MetodoPago;
}