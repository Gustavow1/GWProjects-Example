const { Model, DataTypes } = require('sequelize')

class Projects extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            budget: DataTypes.STRING,
            category: DataTypes.STRING,
            cost: DataTypes.NUMBER,
        }, {
            sequelize,
        })
    }

    static associate(models) {
        this.hasMany(models.Services, { foreignKey: 'project_id', as: 'services'})
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
        
    }
}

module.exports = Projects