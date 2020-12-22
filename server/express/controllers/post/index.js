const postService = require('../../services/post');

// 게시물 모두 갖고 오는 메소드
const retrieveAllPost = (req, res) => {
  postService.retrieveAllPost(req)
  .then((success) => {
      res.status(200).json(success);
  })
  .catch((fail) => {
      res.json(fail);
  });
}

// 게시물 만드는 메소드
const createPost = (req, res) => {
  postService.createPost(req)
  .then((success) => { 
      res.status(201).json(success);
  })
  .catch((fail) => {
      res.json(fail);
  });
}

// 해당 게시물을 갖고오는 메소드
const retrievePost = (req, res) => {
  postService.retrievePost(req)
  .then((success) => { 
    res.status(200).json(success);
  })
  .catch((fail) => {
      res.json(fail);
  });
}

// 업데이트 하는 메소드
const updatePost = (req, res) => {
  
  postService.updatePostContent(req)
  .then((result) => {
    res.status(200).json(result);
  })
  .catch((fail) => {
    res.json(fail);
  });
}

// 게시물을 삭제하는 메소드
const deletePost = (req, res) => {
  postService.deletePost(req)
  .then((result) => {
      res.status(204).end();
  })
  .catch((fail) => {
      res.json(fail);
  });
}

module.exports = {
  retrieveAllPost,
  createPost,
  retrievePost,
  updatePost,
  deletePost
};