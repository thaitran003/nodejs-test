const express = require('express')
const router = express.Router();
const categoryController = require('../controller/categoryController');

router.get('/', categoryController.index);

module.exports = router;    