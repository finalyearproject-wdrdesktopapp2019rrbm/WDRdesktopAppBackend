var db = require('../dbconnection');

var User = {
    getAllUsers: function(callback) {
        return db.query("Select * from Users", callback);
    },
    getUserById: function(id, callback) {
      return db.query("Select * from Users where id = ?", [id], callback);
    },
    addUser: function(User, callback) {
        let sql = 'INSERT INTO Users (username, email, password) VALUES (?,?,?)';
        return db.query(sql,[User.username, User.email, User.password], callback );
        

      },
      deleteUser: function(id, callback) {
        return db.query("delete from Users where Id = ?", [id], callback);
      },
      updateUser: function(id, User, callback){
        console.log(User);
          let sql = "UPDATE Users SET username=? , email=?, password=? WHERE id =?";
          let data = [User.username, User.email, User.password, id];
          return db.query(sql, data, callback );
      }
};

module.exports = User;
