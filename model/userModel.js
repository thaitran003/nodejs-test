const mongoose = require("mongoose");
const schema = mongoose.Schema
const user = new schema({
    nameUser: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    creatAt: {
        type: String
    },
    updateAt: {
        type: String
    }

})
module.exports = mongoose.model('user', user)   