const userService = require('../services/user');

const retrieveAllUser = (req, res) => {
  userService.userList()
  .then((result) => {
      res.status(200).json(result);
  })
  .catch((fail) => {
      res.json(fail);
  });
}

const createUser = (req, res) => {
 
  userService.createUser(req)
  .then((success) => {
      res.json(success);
  })
  .catch((fail) => {
      res.json(fail);
  });
}

module.exports = {
  retrieveAllUser,
  createUser
};