const express = require('express')
const router = express.Router()
const whetherController = require('../controller/whetherController');

router.get('/', whetherController.getwhether);

module.exports = router
