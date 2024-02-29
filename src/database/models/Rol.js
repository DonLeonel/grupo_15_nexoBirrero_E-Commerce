module.exports = (sequelize, DataTypes) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING(20)
        },
        descripcion: {
            type: DataTypes.STRING(100)
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }

    const config = {
        tableName: "roles"
    }

    const Rol = sequelize.define("Rol", cols, config);
    return Rol;
}