const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const job = new Schema({
    name: { type: String },
    location: { type: String },
    time: { type: String },
    salary: { type: String },
    dateline: { type: String },
    img: { type: String },
}, { versionKey: false });
module.exports = mongoose.model('job', job);  