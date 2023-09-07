const jobs = require('../model/job')
const staff = require('../model/staffModel')
class jobController {
    async getAllJob(req, res) {
        res.send(await jobs.find({}))
    }
    async getJobByID(req, res) {
        const JobId = await jobs.findOne({ _id: req.params.id })
        const humanJoin = await staff.find({ job_id: req.params.id })
        const result = { ...JobId._doc, humanJoin: humanJoin }
        res.send(result)
    }
    async createJob(req, res) {
        const b = await jobs.insertMany(req.body)
        for (let a of b) {
            await staff.updateMany({ _id: a.staff_id }, { $push: { job_id: a._id } })
        }
        res.send(await jobs.find({}))
    }
    async updateJob(req, res) {
        await jobs.updateOne({ _id: req.params.id }, req.body).set('updatedAt', new Date())
        res.send(await jobs.find({}))
    }
    async deleteJob(req, res) {
        const a = await jobs.findOne({ _id: req.params.id })
        await staff.updateOne({ _id: a.staff_id }, { $pull: { job_id: a._id } })
        await jobs.deleteOne({ _id: req.params.id })
        res.send(await jobs.find())
    }
}
module.exports = new jobController