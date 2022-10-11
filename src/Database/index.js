const Sequelize = require('sequelize')
const dbConfig = require('./config/database')

const User = require('./models/User')
const Category = require('./models/Category')
const Projects = require('./models/Projects')
const Login = require('./models/Login')
const Services = require('./models/Services')


const connection = new Sequelize(dbConfig)

Projects.init(connection)
User.init(connection)
Category.init(connection)
Login.init(connection)
Services.init(connection)

User.associate(connection.models)
Projects.associate(connection.models)
Services.associate(connection.models)

module.exports = connection
