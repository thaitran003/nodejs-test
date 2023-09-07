const path = require('path')
const jobs = require('../model/jobModel')
class joblistController {
    async index(req, res) {
        const job = await jobs.find({})
        console.log(job);
        res.render(path.join(__dirname, '../views/users/job-list.ejs'), {
            job,
        })
    }
    show(req, res) {
        res.send('hsfdfdfsdf');
    }
}
module.exports = new joblistController;       