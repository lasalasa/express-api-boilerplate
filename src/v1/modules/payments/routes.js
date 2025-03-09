const express = require('express');
const router = express.Router();
const paymentController = require('./controller');
router.post('/process', paymentController.processPayment);
module.exports = router;