const { Model, DataTypes } = require('sequelize')

class Login extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize,
            tableName: "users"
        })
    }
}

module.exports = Login