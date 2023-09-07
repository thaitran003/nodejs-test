const express = require('express')
const router = express.Router();
const joblistController = require('../controller/joblistController');

router.use('/:id', joblistController.show);
router.use('/', joblistController.index);

module.exports = router;    