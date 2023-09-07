const path = require('path')
class contactController {
    index(req, res) {
        res.render(path.join(__dirname, '../views/users/contact.ejs'))
    }
    show(req, res) {
        res.send('hsfdfdfsdf');
    }
}
module.exports = new contactController;       