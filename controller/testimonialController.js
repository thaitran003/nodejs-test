const path = require('path')
const clients = require('../model/clientsModel')
class testimonialController {
    index(req, res) {
        res.render(path.join(__dirname, '../views/users/testimonial.ejs'), {
            clients: clients
        })
    }
    show(req, res) {
        res.send('hsfdfdfsdf');
    }
}
module.exports = new testimonialController;       