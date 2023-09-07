const mongoose = require('mongoose')
const schema = mongoose.Schema
const job = new schema({
    namejob: { type: String },
    staff_id: { type: String },
    progress: { type: String },
    date_start: { type: Date },
    createAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
}, { versionKey: false })
module.exports = mongoose.model('jobs', job);