const path = require('path')
const about = require('../model/aboutModel')
class controllerabout {
    index(req, res) {
        res.render(path.join(__dirname, '../views/users/about.ejs'), {
            about: about
        })
    }
    show(req, res) {
        res.send('hsfdfdfsdf');
    }
}
module.exports = new controllerabout;   