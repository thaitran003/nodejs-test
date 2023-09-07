const express = require('express')
const router = express.Router();
const contactController = require('../controller/contactController');

router.use('/:id', contactController.show);
router.use('/', contactController.index);

module.exports = router;    