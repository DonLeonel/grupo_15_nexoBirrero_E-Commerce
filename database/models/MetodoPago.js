module.exports = (sequelize, DataTypes) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING(30)
        },
        descripcion: {
            type: DataTypes.STRING(30)
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }

    const config = {
        tableName: "metodos_pagos"
    }

    const MetodoPago = sequelize.define("MetodoPago", cols, config);
    return MetodoPago;
}