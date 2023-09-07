const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const majors = new Schema({
    namejob: { type: String },
    vacancy: { type: String },
}, { versionKey: false });
module.exports = mongoose.model('majors', majors);  