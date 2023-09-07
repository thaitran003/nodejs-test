const express = require('express')
const router = express.Router();
const jobdetailController = require('../controller/jobdetailController');

router.use('/:id', jobdetailController.show);
router.use('/', jobdetailController.index);

module.exports = router;    