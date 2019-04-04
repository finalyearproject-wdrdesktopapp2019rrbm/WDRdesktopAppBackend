var db = require('../dbconnection');

var User = {
    getAllUsers: function(callback) {
        return db.query("Select * from Users", callback);
    },
    getUserById: function(id, callback) {
      return db.query("Select * from Users where Id = ?", [id], callback);
    },
    addUser: function(Task, callback) {
        return db.query("Insert into Users values (?,?,?,?,?)", [User.Id, User.name, User.username, User.email, User.password], callback);
      },
      deleteUser: function(id, callback) {
        return db.query("delete from Users where Id = ?", [id], callback);
      },
      updateUser: function(id, Task, callback){
          return db.query("update Users set name=?, username=? where ID=?", [User.Id, User.name, User.username, User.email, User.password], callback);
      }
};

module.exports = User;
