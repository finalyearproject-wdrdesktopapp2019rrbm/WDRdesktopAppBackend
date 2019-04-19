var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'kisakyamukama',
    password: 'michael0310',
    database: 'apiTest'
});
module.exports = connection;
