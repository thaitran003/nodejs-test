const user = require('../model/userModel')
class userController {
    async getAllUser(req, res) {
        res.send(await user.find())
    }
    async register(req, res, next) {
        // const { email, userName, password } = req.body
        try {

            if (req.body) {
                req.body.creatAt = new Date()
                res.send(await user.create(req.body))
            }
            next()
        } catch (error) {
            res.send('Error Sign up')
        }
    }
    async login(req, res) {
        const a = await user.find(req.body)
        res.send(a)
    }
}
module.exports = new userController