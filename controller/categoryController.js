const path = require('path')
const majors = require('../model/majorsModel')
class categoryController {
    async index(req, res) {
        const major = await majors.find({})
        res.render(path.join(__dirname, '../views/users/category.ejs'), {
            major,
        })
    }
    async addjob(req, res) {
        const major = new majors(req.body)
        await major.save()
        // res.render(path.join(__dirname, '../views/users/category.ejs'))
        res.json(req.body)
    }
}
module.exports = new categoryController 