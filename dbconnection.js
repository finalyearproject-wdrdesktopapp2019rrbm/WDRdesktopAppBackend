var mysql = require('mysql');

  var connection = mysql.createPool({
      host: 'localhost',
      user: 'kisakyamukama',
      password: 'michael0310',
      database: 'FinalYearProject'
  });

module.exports = connection;
