
const { User } = require('../models');

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

const createUser = (req) => {
  return new Promise((resolve, reject) => {
    
    User.create(req.body)
      .then(() => {
        return resolve({ success: true });
      })
      .catch((err) => {
        return reject({ success: false, message: err.errors[0].message 
      });
    });
  });
}

module.exports = {
    userList,
    createUser
};