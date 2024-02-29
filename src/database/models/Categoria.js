module.exports = (sequelize, DataTypes) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING(30)
        },
        descripcion: {
            type: DataTypes.STRING(80)
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }

    const config = {
        tableName: "categorias"
    }

    const Categoria = sequelize.define("Categoria", cols, config);
    return Categoria;
}