const express = require('express')
const router = express.Router();
const jobController = require('../controller/jobController')

router.get('/', jobController.getAllJob);
router.get('/:id', jobController.getJobByID)
router.post('/', jobController.createJob);
router.delete('/:id', jobController.deleteJob);
router.put('/:id', jobController.updateJob);
module.exports = router;        