const Sequelize = require('sequelize');

// 개발환경인지 아닌지 여부
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

// Sequlize instance 생성
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Sequlize package, instance 주입
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require('./user')(sequelize, Sequelize);

// db 안에는 sequlize package, instance, model에 대한 정의
module.exports = db;