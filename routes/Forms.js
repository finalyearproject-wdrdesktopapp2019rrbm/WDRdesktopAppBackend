var express = require('express');
var router = express.Router();
var Form = require('../models/Form');

//select observationslip form
router.get('/count', function (req, res, next) {
  console.log('count')
  Form.countSyncObservationslipForms(function (err, count){
    if(err){
      res.json(err)
    } else {
      // console.log(rows.length);
      res.json(count)
    }
  });
});

//update sync status
router.put('/updateSyncStatus', function (req, res, next ) {
  console.log('sync status update');
  console.log(rq.body);

    Form.updateSyncStatus(req.body, function (err, count) {
      console.log(req.body)
        if (err) {
          res.json(err);
        } else {
          // res.json(req.body);
          res.json(count);
        }
      });
});

router.get('/:id?', function(req, res, next) {
  if (req.params.id) {
    Form.getObservationslipFormById(req.params.id, function (err, rows) {
      if (err){
        res.json(err);
      } else {
        console.log(rows)
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

//add new user
router.post('/', function (req, res, next ) {
    Form.addObservationSlip(req.body, function (err, count) {
      console.log(req.body)
        if (err) {
          res.json(err);
        } else {
          res.json(req.body);
          // res.json(count);
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



// STATION

  // add new station
      router.post('/station', function (req, res, next ) {
        Form.addStation(req.body, function (err, count) {
            if (err) {
              res.json(err);
            } else {
              res.json(req.body);
            }
          });
    });

    // return  station(s)
    router.get('getStation/:id?', function(req, res, next) {
      console.log('yes 1')
      if (req.params.id) {
        Form.getStationById(req.params.id, function (err, rows) {
          if (err){
            res.json(err);
          } else {
            res.json(rows);
          }
        });
      } else{
        // get all
        Form.getAllStations( function (err, rows ) {
          console.log('yes')
          if (err) {
            res.json(err);
          } else {
            res.json (rows);
          }
        });
      }
    });


module.exports = router;