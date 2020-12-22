const request = require('supertest');
const should = require('should'); // 만약 하지 않으면 'be' 오류가 남
const app = require('../../server');
const models = require('../../models');

describe('GET /users', ()=> {
  
  describe('성공시', ()=> {
    it('유저 객체를 담은 배열로 응답한다 ', done => {
      request(app)
          .get('/users')
          .end((err, res) => {
            res.body.should.be.instanceOf(Array);
            done();
          });
    });
  });
});

describe('POST /users', () => {

  /*
    const email = req.body.email; 
    const password = req.body.password;
    const name = req.body.name;
  */
  const users = {
    email : "ggomjae@naver.com",
    password : "1234",
    name : "gomjae"
  };

  before(() => models.sequelize.sync({force: true}));
  before(() => models.User.bulkCreate(users));

  describe('성공시', ()=> {
    it('존재한다면', done => {
      request(app)
          .post('/users/1')
          .expect(200)
          .end(done);
    });
  });
});