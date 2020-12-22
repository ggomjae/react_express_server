
const { Post } = require('../../models');

// 게시물 모두 갖고 오는 메소드
const retrieveAllPost = req => {

  const user_id = req.params.uno;

  return new Promise((resolve, reject) => {
    Post.findAll({ where: {uno: user_id}, order: [ ['createdAt', 'ASC'] ] })
      .then((posts) => {
        resolve({
          posts,
          status : true
        });
      })
      .catch((err) => {
        reject({
          status: false,
          message: err
        });
      });
  });
}

// 해당 게시물을 갖고오는 메소드  * 1. user_id 검사  2.post_id 존재
const retrievePost = req => {

  //const user_id = req.params.uno;
  const post_id = req.params.pno;

  return new Promise((resolve, reject) => {
    Post.findOne({ where: {pno: post_id} })
      .then((post) => {
        if(!post) {
          reject({
            status: false,
            message: 'Not find Post'
          });
        }
        resolve({
          post,
          status: true
        });
      })
      .catch((err) => {
        reject({
          status: false,
          message: err
        });
      });
  });
}  

// 게시물 추가하는 메소드
const createPost = req => {

  return new Promise((resolve, reject) => {
    Post.create({
        uno : req.params.uno,
        content : req.body.content,
        flag : req.body.flag
      })
      .then(() => {
        resolve({ 
          status: true 
        });
      })
      .catch((err) => {
        reject({ 
          status: false, 
          message: err 
        });
      });
    });
}

// 내용을 수정하는 메소드
const updatePostContent = req => {
  
  const post_id = req.params.pno;
  const newContent = req.body.content;
  
  return new Promise((resolve, reject) => {
      Post.update({ content: newContent }, { where: {pno: post_id} })
      .then(() => {
          resolve({ status: true });
      })
      .catch((err) => {
          reject({
              status: false,
              message: "Post Fail."
          });
      }); 
  });
}

// 게시물을 삭제하는 메소드
const deletePost = req => {
  
  const post_id = req.params.pno;
  
  return new Promise((resolve, reject) => {
      Post.destroy({ where: {pno: post_id} })
      .then(() => {
          resolve({ }); // 204 보낼 예정이라 필요가없음.
      })
      .catch((err) => {
          reject({ 
            status: false,
            message: err 
          });
      });
  });
}

module.exports = {
  retrieveAllPost,
  createPost,
  retrievePost,
  updatePostContent,
  deletePost
};