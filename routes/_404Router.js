const express = require('express')
const router = express.Router();
const _404Controller = require('../controller/_404Controller');

router.use('/:id', _404Controller.show);
router.use('/', _404Controller.index);

module.exports = router;    