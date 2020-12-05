const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// login User
router.post('/login',userController.loginUser);

module.exports = router;