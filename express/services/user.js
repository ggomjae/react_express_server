
const { User } = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken')
const jwtObj = require('../config/jwt');

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
    
    const email = req.body.email; 
    const password = req.body.password;
    const name = req.body.name;
    
    User.findOne({where : { 'email' : email }})
    .then((user) => {
      if(user){
        resolve(false);
      }
    })
    .catch((err) => {
      reject(new Error("이메일 중복"));
    })

    // 같은 email을 갖는 user가 없다면 DB에 user 생성 후, true를 반환
    bcrypt.hash(password, saltRounds, function(err, passwordHash) {
      
      const newUser = {
        'name' : name,
        'password' : passwordHash,
        'email' : email,
        'roles': "user"
      }

      User.create(newUser)
        .then(() => {
          resolve({ status: true });
        })
        .catch((err) => {
          reject({ 
            status: false, message: err.errors[0].message 
          });
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