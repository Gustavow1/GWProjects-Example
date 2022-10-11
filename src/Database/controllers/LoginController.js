const Login = require('../models/Login')

module.exports = {
    async validation(req, res) {
        const user = await Login.findOne({
            attributes: ["id","name", "email"],
            where: { name: `${req.body.name}`, email: `${req.body.email}` }
        })
        if(user == null){
            return res.status(400).json({
                message: 'Erro. Usuário não encontrado.'
            })
        }
        return res.status(200).json(user.id)
    },
}