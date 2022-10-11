const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize,
            tableName:"users"
        })
    }

    static associate(models) {
        this.hasMany(models.Projects, { foreignKey: 'user_id', as: 'projects'})
        this.hasMany(models.Services, { foreignKey: 'user_id', as: 'user'})
    }
}

module.exports = User