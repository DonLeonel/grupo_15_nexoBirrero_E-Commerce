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
        tableName: "ciudades"
    }

    const Ciudad = sequelize.define("Ciudad", cols, config);

    Ciudad.associate = function(modelo){
        Ciudad.hasMany(modelo.Usuario, {
            as: 'usuarios',
            foreignKey: 'ciudadId'
        });
    };

    return Ciudad;
}