var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'wdrdb'
});
module.exports = connection;