const path = require('path')

class _404Controller {
    index(req, res) {

        res.render(path.join(__dirname, '../views/users/404.ejs'))
    }
    show(req, res) {
        res.send('hsfdfdfsdf');
    }
}
module.exports = new _404Controller;       