const express = require('express');
const app = express();
const port = 3000;

// DB
const dbConfig = require('./config/database')
const db = require('./models');

// database + sequelize 
const connection = dbConfig.init();
dbConfig.connect(connection);

//sync()가 실행되면 index.js 내에서 작성된 Sequelize 작업이 실제 DB와 동기화되면서 실행.
db.sequelize.sync();

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`🚀  Server ready at ${port}`);
})