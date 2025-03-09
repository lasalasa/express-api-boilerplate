const express = require('express');
const router = express.Router();
const subscriptionController = require('./controller');
router.post('/subscribe', subscriptionController.subscribeUser);
module.exports = router;