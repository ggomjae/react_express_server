const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const postController = require('../controllers/post');
const { auth }  = require('../middleware/auth');

/*
  /users -> 부터 시작
*/

// User
router.post('/', userController.createUser);
router.get('/', userController.retrieveAllUser);
router.get('/:uno',auth, userController.retrieveUser);
router.patch('/:uno',auth, userController.updateUser);
router.delete('/:uno',auth, userController.deleteUser);

// Post 
router.post('/:uno/posts',postController.createPost);
router.get('/:uno/posts',postController.retrieveAllPost);
router.get('/:uno/posts/:pno',postController.retrievePost);
router.patch('/:uno/posts/:pno',postController.updatePost);
router.delete('/:uno/posts/:pno',postController.deletePost);

module.exports = router;