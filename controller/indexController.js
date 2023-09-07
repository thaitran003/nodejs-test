const path = require('path')
const jobs = require('../model/jobModel')
const majors = require('../model/majorsModel')
const about = require('../model/aboutModel')
const clients = require('../model/clientsModel')
const employee = require('../model/employees')
class indexController {
    async index(req, res) {
        const major = await majors.find({})
        const job = await jobs.find({})
        res.render(path.join(__dirname, '../views/users/index.ejs'), {
            job,
            major,
            about: about,
            clients: clients
        })
    }
    async show(req, res) {
        const emp = await employee.find({});
        res.json(emp)
    }
}
module.exports = new indexController;       