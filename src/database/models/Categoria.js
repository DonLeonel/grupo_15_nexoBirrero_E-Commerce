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
            type: DataTypes.STRING(80),
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
        tableName: "categorias"
    }

    const Categoria = sequelize.define("Categoria", cols, config);

    Categoria.associate = function(models){
        Categoria.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'categoriaId'
        });
    }

    return Categoria;
}