const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017');
        console.log('connect db thanh cong')

    } catch (error) {
        console.log('connect db that bai')
    }
}
module.exports = { connect };
