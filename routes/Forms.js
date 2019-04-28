var express = require('express');
var router = express.Router();
var Form = require('../models/Form');

//select observationslip form
router.get('/:id?', function(req, res, next) {
  if (req.params.id) {
    Form.getFormById(req.params.id, function (err, rows) {
      if (err){
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else{
    // get all
    Form.getAllObservationslipForms( function (err, rows ) {
      if (err) {
        res.json(err);
      } else {
        res.json (rows);
      }
    });
  }
});

//add new
router.post('/', function (req, res, next ) {
    Form.addForm(req.body, function (err, count) {
        if (err) {
          res.json(err);
        } else {
          res.json(req.body);
        }
      });
});

//delete
router.delete('/:id', function (req, res, next ) {
    Form.deleteForm(req.params.id, function (err, count) {
      if (err) {
        res.json(err);
      } else {
        res.json(count);
      }
  });
});

// update
router.put('/:id', function (req, res, next ) {
    Form.updateForm(req.params.id, req.body, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
  });
});


module.exports = router;
