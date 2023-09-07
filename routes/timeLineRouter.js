const express = require('express')
const router = express.Router();

const timeLineController = require('../controller/timeLineController')

router.get('/', timeLineController.show);
module.exports = router