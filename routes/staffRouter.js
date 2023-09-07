const express = require('express')
const router = express.Router();

const staffController = require('../controller/staffController')

router.get('/', staffController.getallstaff);
router.get('/:id', staffController.getStaffById)
router.post('/', staffController.createstaff);
router.delete('/:id', staffController.deletestaff)
router.put('/:id', staffController.updatestaff)
module.exports = router