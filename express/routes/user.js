const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

//  -> url : /users/{id}/
router.post('/', userController.createUser);
router.get('/', userController.retrieveAllUser);
router.get('/:uno', userController.retrieveUser);
router.patch('/:uno',userController.updateUser);
router.delete('/:uno',userController.deleteUser);

module.exports = router;