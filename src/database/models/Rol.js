module.exports = (sequelize, DataTypes) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING(100),
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
        tableName: "roles"
    }

    const Rol = sequelize.define("Rol", cols, config);

    Rol.associate = function(modelos){
        Rol.hasMany(modelos.Usuario, {
            as: 'usuarios',
            foreignKey: 'rolId'
        });
    };
    
    return Rol;
}