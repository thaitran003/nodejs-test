const path = require('path')
class jobdetailController {
    index(req, res) {
        res.render(path.join(__dirname, '../views/users/job-detail.ejs'))
    }
    show(req, res) {
        res.send('hsfdfdfsdf');
    }
}
module.exports = new jobdetailController;       