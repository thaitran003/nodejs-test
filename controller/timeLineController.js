const job = require('../model/job')
const staff = require('../model/staffModel')
class timeLineController {
    async show(req, res) {
        const startDate = new Date(req.query.start)
        const endDate = new Date(req.query.end)
        const jobTime = await job.find({ date_start: { $gt: startDate, $lt: endDate } })
        const staffinf = await staff.find({})
        const clonedJobTime = [...jobTime]
        const clonedstaffinf = [...staffinf]
        const result = clonedJobTime.map((item1) => {
            const item2 = clonedstaffinf.find((item) => item._id == item1.staff_id);
            return { ...item1._doc, staffs: item2._doc };
        });
        res.send(result)
    }
}
module.exports = new timeLineController 