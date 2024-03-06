module.exports = (sequelize, DataTypes) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        categoriaId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precio: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        nacionalidad: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        variedad: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        cervecera: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        graduacion: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        volContenido: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        activo: {
            type: DataTypes.INTEGER(1),
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
        tableName: "productos"
    }

    const Producto = sequelize.define("Producto", cols, config);

    Producto.associate = function(modelos){
        Producto.belongsTo(modelos.Categoria, {
            as: "categoria",
            foreignKey: "categoriaId"
        });

        Producto.hasMany(modelos.DetalleFactura, {
            // por las dudas si no anda cambiar el as 1/3/2024 (corrigió Leo 06/03)
            as : "detallesFacturas", //Un producto puede estar en muchos detalles, pero eso detallesFacturas
            foreignKey:"productoId"
        });

        Producto.belongsToMany(modelos.Carrito, {
            as: "carritos",
            through:"carritos_productos",
            foreignKey: "productoId",
            otherKey: "carritoId",
            timestamps: true
        });
    };

    return Producto;
}