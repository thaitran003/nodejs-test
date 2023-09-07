const axios = require('axios');
const { localsName } = require('ejs');
class whetherController {
    getwhether(req, res) {
        res.status(500).json();
        console.log(1);
    }
}
module.exports = new whetherController
