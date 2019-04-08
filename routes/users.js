var express = require('express');
var router = express.Router();
var User = require('../models/User');

// select user ng 
router.get('/:id?', function(req, res, next) {
  if(req.params.id){
    User.getUserById(req.params.id,  function(err, rows){
      if(err) res.json(err);
      else res.json(rows);
    })
  }else{
    // select all users
    User.getAllUsers(function(err, rows){
      if(err) res.json(err);
      else res.json(rows);
    });
  }
});

// add user
router.post('/', function(req, res, next) {
  User.addUser(req.body, function(err, count) {
    if (err) res.json(err);
    else {
      res.json(req.body);
    }
  });
});

//delete user
router.delete('/:id', function(req, res, next) {
  User.deleteUser(req.params.id, function(err, count) {
    if (err) res.json(err);
    else res.json(count);
  });
});

//update user update
router.put('/:id', function(req, res, next) {
  User.updateUser(req.params.id, req.body, function(err, rows) {
    if(err) res.json(err);
    else res.json(rows);
  });
});

module.exports = router;
