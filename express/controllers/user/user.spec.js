const request = require('supertest');
//const should = require('should');
const app = require('../../server');
const models = require('../../models');

describe('GET /users는', ()=> {

  // before(() => models.sequelize.sync({force: true}));
  // before(() => models.User.bulkCreate(users));

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