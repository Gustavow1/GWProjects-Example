const express = require('express')
const CategoryController = require('./controllers/CategoryController')
const UserController = require('./controllers/UserController')
const ProjectsController = require('./controllers/ProjectsController')
const LoginController = require('./controllers/LoginController')
const ServicesController = require('./controllers/ServicesController')

const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/users/:user_id/projects', ProjectsController.index)
routes.post('/users/:user_id/newproject', ProjectsController.store)
routes.delete('/users/:user_id/:project_id/deleteproject', ProjectsController.delete)
routes.patch('/users/:user_id/:project_id/edit', ProjectsController.edit)
routes.patch('/users/:user_id/:project_id/costcheck', ProjectsController.check)

routes.post('/login', LoginController.validation)

routes.get('/categories', CategoryController.index)
routes.post('/categories', CategoryController.store)
routes.delete('/categories/delete/:id', CategoryController.delete)

routes.get('/users/:user_id/:project_id/services', ServicesController.index)
routes.post('/users/:user_id/:project_id/newservice', ServicesController.store)
routes.delete('/users/:user_id/:project_id/:service_id/deleteservice', ServicesController.delete)


module.exports = routes