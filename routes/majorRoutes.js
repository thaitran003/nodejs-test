const express = require('express')

const router = express.Router()

const majorsController = require('../controller/majorController')

router.get('/', majorsController.getmajor);
router.post('/', majorsController.addmajor);
router.put('/:id', majorsController.updatemajor);
router.delete('/:id', majorsController.deletemajor)
module.exports = router
