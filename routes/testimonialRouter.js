const express = require('express')
const router = express.Router();
const testimonialController = require('../controller/testimonialController');

router.use('/:id', testimonialController.show);
router.use('/', testimonialController.index);

module.exports = router;    