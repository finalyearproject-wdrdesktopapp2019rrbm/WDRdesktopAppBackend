var db = require('../dbconnection');

var User = {
    getAllUsers: function(callback) {
        return db.query("Select * from Users", callback);
    },
    getUserById: function(id, callback) {
      return db.query("Select * from Users where Id = ?", [id], callback);
    },
    addUser: function(User, callback) {
        let sql = 'INSERT INTO Users (name, username, email, password) VALUES (?,?,?,?)';
        return db.query(sql,[User.name, User.username, User.email, User.password], callback );
        

      },
      deleteUser: function(id, callback) {
        return db.query("delete from Users where Id = ?", [id], callback);
      },
      updateUser: function(id, User, callback){
          let sql = "UPDATE Users SET name=?, username=? , email=?, password=? WHERE Id=?";
          let data = [User.name, User.username, User.email, User.password, id];
          return db.query(sql, data, callback );
      }
};

module.exports = User;
