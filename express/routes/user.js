const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const postController = require('../controllers/post');
const { auth }  = require('../middleware/auth');

//  -> url : /users/{id}/
router.post('/', userController.createUser);
router.get('/', userController.retrieveAllUser);

router.get('/:uno/posts',postController.retrieveAllPost);
router.post('/:uno/posts',postController.createPost);

router.get('/:uno',auth, userController.retrieveUser);
router.patch('/:uno',auth, userController.updateUser);
router.delete('/:uno',auth, userController.deleteUser);

module.exports = router;