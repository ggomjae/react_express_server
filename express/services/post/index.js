
const { Post } = require('../../models');

const retrieveAllPost = (uno) => {
  return new Promise((resolve, reject) => {
    Post.findAll({ where: {uno: uno}, order: [ ['createdAt', 'ASC'] ] })
      .then((posts) => {
        resolve({
          posts,
          status : true
        });
      })
      .catch((err) => {
        reject({
          getPostsSuccess: false,message: err
        });
      });
  });
}

const createPost = (req) => {
  return new Promise((resolve, reject) => {
    Post.create({
        uno : req.params.uno,
        content : req.body.content,
        flag : req.body.flag
      })
      .then(() => {
        return resolve({ success: true });
      })
      .catch((err) => {
        return reject({ success: false, message: err });
      });
    });
}

module.exports = {
  retrieveAllPost,
  createPost
};