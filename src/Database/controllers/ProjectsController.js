const Projects = require ('../models/Projects')
const User = require('../models/User')
const Services = require('../models/Services')

module.exports = {

    async index(req, res){
        const { user_id } = req.params 

        const user = await User.findByPk(user_id, {
            include: { association: 'projects' }
        })

        return res.json(user.projects)
    },


    async store(req, res) {
        const { user_id } = req.params
        const { name, budget, category} = req.body

        const user = await User.findByPk(user_id)
        
        if(!user) {
            return res.status(400).json({error: 'User not found'})
        }

        const projects = await Projects.create({
            name, budget, category, user_id
        })

        return res.json(projects)
    },
    
    async delete(req, res) {
        const { user_id } = req.params
        const user = await User.findByPk(user_id)
        if(!user) {
            return res.status(400).json({message: 'User not found'})
        }

        await Projects.destroy({where: {'id': req.params.project_id}})

        return res.status(200).json({message: 'delete success'})
    },

    async edit(req, res) {
        const { project_id, user_id } = req.params
        const name = req.body.name
        const budget = req.body.budget
        const category = req.body.category
        const cost = req.body.cost

        const project = await Projects.update({name, budget, category, cost},{
            where: {
                id: project_id,
                user_id: user_id,
            },
        })   
        const result = await Projects.findByPk(project_id)
        return res.json(result)
    },

    async check(req, res) {
        const { project_id, user_id } = req.params
        const cost = parseFloat(req.body.cost)

        const costCheck = await Projects.findOne({
            where:{ 
                id: project_id,
                user_id: user_id,
            }
        })

        const projectCost = parseFloat(costCheck.cost)

        if(costCheck.budget - projectCost >= cost){

            const project = await Projects.update({cost: projectCost + cost},{
                where: {
                    id: project_id,
                    user_id: user_id,
                },
            })
            return res.status(200).json({status: 200})
        }

        return res.status(400).json({status: 400})
    }

}