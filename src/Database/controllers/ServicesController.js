const Services = require('../models/Services')
const User = require('../models/User')
const Projects = require('../models/Projects')

module.exports = {

    async index(req, res){
        const { project_id } = req.params

        const project = await Projects.findByPk(project_id, {
            include: { association: 'services' }
        })
        
        return res.json(project)

    },

    async store(req, res){
        const { user_id, project_id } = req.params
        const { name, cost, description } = req.body

        const user = await User.findByPk(user_id)

        if(!user) {
            return res.status(400).json({error: 'User not found'})
        }

        const services = await Services.create({
            user_id,
            project_id,
            name,
            cost,
            description,
        })
        const project = await Projects.findByPk(project_id, {
            include: { association: 'services' }
        })
        return res.status(200).json(project)
    },

    async delete(req, res){
        const { project_id } = req.params

        const project = await Projects.findByPk(project_id)
        if(!project) {
            return res.status(400).json({message: 'Project not found'})
        }

        Services.destroy({where: {'id': req.params.service_id}})
        
        return res.status(200) 
    }

}