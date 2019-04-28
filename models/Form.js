var db = require('../dbconnection');

var User = {
    getAllObservationslipForms: function(callback) {
        return db.query("Select * from  observationslip ORDER BY Date DESC LIMIT 3", callback);
    },
    getFormById: function(id, callback) {
      return db.query("Select * from systemusersTest where Userid = ?", [id], callback);
    },
     addObservationSlip: function(User, callback) {
      console.log(User);
        let sql = 'INSERT INTO systemusersTest (station, FirstName, SurName, UserName, UserPassword, UserRole, UserEmail, UserPhone) VALUES (?,?,?,?,?,?,?,?)';
        return db.query(sql,[User.station, User.FirstName, User.SurName, User.UserName,User.UserPassword, User.UserRole,User.UserEmail, User.UserPhone], callback );



      },
      deleteObservationslip: function(id, callback) {
        return db.query("delete from systemusersTest where Userid = ?", [id], callback);
      },
      updateObservationSlipForm: function(id, User, callback){
          let sql = "UPDATE systemusersTest SET UserName=? , UserEmail=?, UserPassword=? WHERE Userid =?";
          let data = [User.UserName, User.UserEmail, User.UserPassword, Userid];
          return db.query(sql, data, callback );
      }
};

module.exports = User;
