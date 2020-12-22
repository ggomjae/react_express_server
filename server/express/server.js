const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3001;

// DB
const dbConfig = require('./config/database')
const db = require('./models');

// database + sequelize 
const connection = dbConfig.init();
dbConfig.connect(connection);

/*
  경우에 따른 옵션 : 딱히 Test라고 Table을 초기화 시키지 않겠음.
  const options = {
    force: process.env.NODE_ENV === 'test' ? true : false
  }
*/

//sync()가 실행되면 index.js 내에서 작성된 Sequelize 작업이 실제 DB와 동기화되면서 실행.
db.sequelize.sync();

if (process.env.NODE_ENV !== 'test') {
   app.use(morgan('dev'));
}

// URI 
app.use(express.json()) // body-parser 대신에 가능
app.use('/', require("./routes/other"));
app.use('/users', require("./routes/user"));

app.listen(port, () => {
  console.log(`🚀  Server ready at ${port}`);
})

module.exports = app;
