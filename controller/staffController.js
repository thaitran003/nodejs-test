
const staff = require('../model/staffModel')
const job = require('../model/job')
class staffController {
    async getallstaff(req, res) {
        res.send(await staff.find({}))
    }
    async getStaffById(req, res) {
        const a = await staff.findOne({ _id: req.params.id })
        const b = a.job_id.map((item) => {
            return item
        })
        const jobs = await job.find({ _id: b })
        const job_complete = await job.find({ staff_id: req.params.id, progress: "hoanthanh" })
        const job_incomplete = await job.find({ staff_id: req.params.id, progress: 'chuahoanthanh' })
        const result = { ...a._doc, jobs: jobs, job_complete: job_complete, job_incomplete: job_incomplete };
        res.send(result)
    }

    async createstaff(req, res) {
        await staff.insertMany(req.body)
        res.send(await staff.find({}))
    }
    async deletestaff(req, res) {
        await staff.deleteOne({ _id: req.params.id })
        res.send(await staff.find())
    }
    async updatestaff(req, res) {
        await staff.updateOne({ _id: req.params.id }, req.body).set('updatedAt', new Date())
        res.send(await staff.find())
    }
}
module.exports = new staffController;       