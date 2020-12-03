
const { User } = require('../models');

// 모든 유저를 갖고 오는 메소드
const userList = () => {
  return new Promise((resolve, reject) => {
    User.findAll({})
      .then((users) => {
        resolve(users);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// 유저를 갖고오는 메소드
const retrieveUser = (user_id) => {
  return new Promise((resolve, reject) => {
    User.findOne({ where: {uno: user_id} })
      .then((user) => {
        if(!user) {
          reject({
            status: false
          });
        }
        resolve(user);
      })
      .catch((err) => {
        reject({
          status: false
        });
      });
  });
}  

// 회원가입하는 메소드
const createUser = (req) => {
  return new Promise((resolve, reject) => {
    
    User.create(req.body)
      .then(() => {
        resolve({ status: true });
      })
      .catch((err) => {
        reject({ 
          status: false, message: err.errors[0].message 
        });
      });
  });
}

// 업데이트하는 메소드
const updateUser = (uno, password) => {
  return new Promise((resolve, reject) => {
    User.update({ password: password }, { where: {uno: uno} })
      .then(() => {
        resolve({ status: true });
      })
      .catch(() => {
        reject({
          status: false
        });
      });
  });
}

// 회원을 삭제하는 메소드
const deleteUser = (uno) => {
  return new Promise((resolve, reject) => {
      User.destroy({ where: {uno: uno} })
      .then(() => {
          resolve({ state: true });
      })
      .catch(() => {
          reject({ state: false });
      });
  });
}


module.exports = {
    userList,
    retrieveUser,
    createUser,
    updateUser,
    deleteUser
};