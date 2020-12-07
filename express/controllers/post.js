const postService = require('../services/post');

// 게시물 모두 갖고 오는 메소드
const retrieveAllPost = (req, res) => {
  postService.retrieveAllPost(req.params.uno)
  .then((success) => {
      res.json(success);
  })
  .catch((fail) => {
      res.json(fail);
  });
}

// 게시물 만드는 오는 메소드
const createPost = (req, res) => {
  postService.createPost(req)
  .then((success) => { 
      res.json(success);
  })
  .catch((fail) => {
      res.json(fail);
  });
}

module.exports = {
  retrieveAllPost,
  createPost
};