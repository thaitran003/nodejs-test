const express = require('express')
const router = express.Router();
const indexController = require('../controller/indexController');

router.use('/:id', indexController.show);
router.use('/', indexController.index);

module.exports = router;    