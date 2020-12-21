const userService = require('../../services/user');

// 모든 유저를 갖고오는 메소드를 부르는 
const retrieveAllUser = (req, res) => {
  userService.retrieveAllUser()
  .then((result) => {
      res.status(200).json(result);
  })
  .catch((fail) => {
      res.json(fail);
  });
}

// 유저를 갖고오는 메소드
const retrieveUser = (req, res) => {
  
  userService.retrieveUser(req)
  .then((result) => {
      res.status(200).json(result);
  })
  .catch((fail) => {
      res.json(fail);
  });
}

// 유저를 회원가입하는 메소드를 부르는
const createUser = (req, res) => {
  
  userService.createUser(req)
  .then((success) => {
      res.status(201).json(success);
  })
  .catch((fail) => {
      res.json(fail);
  });
}

// 사용자 로그인하는 메소드는 부르는
const loginUser = (req, res) => {
  
  userService.loginUser(req)
  .then((success) => {
      res.json(success);
  })
  .catch((fail) => {
      res.json(fail);
  });
}

// 패스워드를 업데이트 하는 메소드를 부르는
const updateUser = (req, res) => {
  userService.updateUser(req)
  .then((result) => {
      res.status(200).json(result);
  })
  .catch((fail) => {
      res.json(fail);
  });
}

// 회원을 삭제하는 메소드를 부르는
const deleteUser = (req, res) => {
  userService.deleteUser(req)
  .then((result) => {
      res.status(200).json(result);
  })
  .catch((fail) => {
      res.json(fail);
  });
}

module.exports = {
  retrieveAllUser,
  retrieveUser,
  createUser,
  updateUser,
  deleteUser,
  loginUser
};