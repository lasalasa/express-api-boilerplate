const express = require('express');
const router = express.Router();
const userController = require('./controller');
const authMiddleware = require('../../../common/authMiddleware'); // Authentication middleware

// User login
router.post('/login', userController.loginUser);

// Create a new user
router.post('/', userController.createUser);

// AuthMiddleware (Admin only)
// Get all users 
router.get('/', authMiddleware.authenticateUser, authMiddleware.authorizeRoles('admin'), userController.getUsers);

// Delete a user
router.delete('/:id', authMiddleware.authenticateUser, authMiddleware.authorizeRoles('admin'), userController.deleteUser);

// AuthMiddleware (Admin+User)
// Get a single user by ID
router.get('/:id', authMiddleware.authenticateUser, userController.getUserById);

// Update user details
router.put('/:id', authMiddleware.authenticateUser, userController.updateUser);

// Get current logged-in user
router.get('/me', authMiddleware.authenticateUser, userController.getCurrentUser);

module.exports = router;
