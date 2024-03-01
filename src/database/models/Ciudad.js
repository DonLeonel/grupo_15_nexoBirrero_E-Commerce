module.exports = (sequelize, DataTypes) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING(50)
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }

    const config = {
        tableName: "ciudades"
    }

    const Ciudad = sequelize.define("Ciudad", cols, config);

    Ciudad.associate = function(modelo){
        Ciudad.hasMany(modelo.Usuario, {
            as: 'usuario',
            foreignKey: 'ciudadId'
        })
    }

    return Ciudad;
}