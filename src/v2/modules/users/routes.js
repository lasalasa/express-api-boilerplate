const express = require('express');
const router = express.Router();
const userController = require('./controller');
const authMiddleware = require('../../../common/authMiddleware');

// New v2 Feature: Advanced User Pagination
router.get('/paginated', authMiddleware.authenticateUser, userController.getUsersWithPagination);

// New v2 Feature: User Analytics
router.get('/analytics', authMiddleware.authenticateUser, authMiddleware.authorizeRoles('admin'), userController.getUserAnalytics);

module.exports = router;
