
const express = require('express')

const router = express.Router()

const employeeController = require('../controller/employeeController');

router.get('/', employeeController.getAll);
router.get('/search', employeeController.getUser);
router.get('/:id', employeeController.getUserId)
router.post('/', employeeController.createUser)
router.delete('/:id', employeeController.deleteUserId)
router.put('/:id', employeeController.updateUser)
module.exports = router
