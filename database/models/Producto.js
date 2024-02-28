module.exports = (sequelize, DataTypes) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING(50)
        },
        descripcion: {
            type: DataTypes.STRING(100)
        },
        categoriaId: {
            type: DataTypes.INTEGER
        },
        precio: {
            type: DataTypes.DECIMAL
        },
        nacionalidad: {
            type: DataTypes.STRING(30)
        },
        variedad: {
            type: DataTypes.STRING(20)
        },
        cervecera: {
            type: DataTypes.SRING(20)
        },
        graduacion: {
            type: DataTypes.DECIMAL
        },
        volContenido: {
            type: DataTypes.INTEGER
        },
        img: {
            type: DataTypes.STRING(60)
        },
        activo: {
            type: DataTypes.INTEGER(1)
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }

    const config = {
        tableName: "productos"
    }

    const Producto = sequelize.define("Producto", cols, config);

    Producto.associate = function(modelos){
        Producto.belongsTo(modelos.Categoria, {
            as: "categoria",
            foreignKey: "categoriaId"
        });
    };

    return Producto;
}