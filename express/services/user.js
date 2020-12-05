
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

// 로그인하는 메소드
const loginUser = (email, password) => {

  return new Promise((resolve, reject) => {

    // email 이 존재하지 않으면 false 반환, 존재하면 bcrypt.compare를 이용하여 password 검사
    User.findOne({where : { 'email' : email }})
      .then((user) => {
        console.log(user.password);
        if(!user) resolve(false)
        else{
          bcrypt.compare(password,user.password,function(err, res) {
            if (err) reject(err)
            
            //만약 일치하면 token return, 일치하지 않으면 false return, 
            if(res){
              getToken(email, password)     // token을 받아와서 반환
                .then( (token) =>{
                  resolve(token)
                })
            }else resolve(false)            
          });
        }
      })
      .catch((err) => {
        reject(err);
      })
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

/////////////////////////////////////////////////
//              Token 생성 로직                 //
/////////////////////////////////////////////////

// User make Token - jwt.sign(payload, secret, options, [callback]) , default : HS256
const getToken = (email, password) => {

  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        "email": email         // payload 구간
      },
      jwtObj.secret,   // 임시로 여기에 선언, 현재 임시로 보관중    
      {
        expiresIn: '2h',       // 만료 기간을 잡는 옵션
        issuer: 'ggomjae',  // 토큰 발급자
        subject: 'ggomjaeTitle'   // 토큰 제목
      }, 
      function(err,token){
        if(err) reject(err);    // 생성 후 콜백함수
        else resolve(token);
      })
  });  // return promise
}

module.exports = {
    userList,
    retrieveUser,
    createUser,
    loginUser,
    updateUser,
    deleteUser
};