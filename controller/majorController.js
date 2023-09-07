const majors = require('../model/majorsModel')
class majorController {
    async getmajor(req, res) {
        const major = await majors.find({})
        res.send(major)
    }
    async addmajor(req, res) {
        const major = new majors(req.body)
        await major.save()
        res.send(major)
    }
    async updatemajor(req, res) {
        const id_update = req.params.id
        await majors.updateOne({ _id: id_update }, req.body);
        res.send(req.body)
    }
    async deletemajor(req, res) {
        const id_delete = req.params.id
        await majors.deleteOne({ _id: id_delete })
        res.send(id_delete)
    }
}
module.exports = new majorController