const { Model, DataTypes } = require('sequelize')

class Services extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            cost: DataTypes.STRING,
            description: DataTypes.STRING,
        }, {
            sequelize,
        })
    }

    static associate(models) {
        this.belongsTo(models.Projects, {foreignKey: 'project_id', as: 'project'})
        this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
    }
}

module.exports = Services