var mysql = require('mysql');

  var connection = mysql.createPool({
      host: 'localhost',
      user: 'kisakyamukama',
      password: 'michael0310',
      database: 'wdrDb'
  });

module.exports = connection;
