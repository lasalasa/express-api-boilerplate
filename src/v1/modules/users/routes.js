const express = require('express');
const router = express.Router();
const userController = require('./controller');
const authMiddleware = require('../../../common/authMiddleware'); // If authentication is needed

// Get all users
router.get('/', userController.getUsers);

// Get a single user by ID
router.get('/:id', userController.getUserById);

// Create a new user
router.post('/', userController.createUser);

// Update user details
router.put('/:id', userController.updateUser);

// Delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;
