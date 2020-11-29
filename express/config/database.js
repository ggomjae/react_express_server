const mysql = require('mysql2');
const dbInfo = require('./dev').dbInfo;

module.exports = {
  init: function() {
    // dbInfo로 host,password 등의 DBinfo로 connection 생성 
    return mysql.createConnection(dbInfo);
  },
  // mysql과 connection하는 부분 : Entry Point 에서 connection.connect();
  connect: function(conn) {
    conn.connect(function(err) {
      if(err) {
        console.error('MySQL connection error : ', err);
      } else {
        console.log('MySQL is connected successfully !!');
      }
    })
  }
}