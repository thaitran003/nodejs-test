const express = require('express')
const router = express.Router();
const aboutController = require('../controller/aboutController');

router.use('/:id', aboutController.show);
router.use('/', aboutController.index);

module.exports = router;    