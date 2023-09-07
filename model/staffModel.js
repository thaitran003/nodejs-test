const mongoose = require('mongoose');
const job = require('./job');
const Schema = mongoose.Schema;
const staff = new Schema({
    name: { type: String },
    age: { type: Number },
    job_id: [{ type: String, ref: job }],
    updatedAt: { type: Date }
}, { versionKey: false });
module.exports = mongoose.model('staff', staff);