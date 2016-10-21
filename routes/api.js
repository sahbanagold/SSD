var express = require('express');
var router = express.Router();
var Schedule = require('../models/Schedule.js')

/* GET home page. */

router.get('/schedule', function(req, res, next) {
    Schedule.find({}, function(err, result) {
        res.json(result)
    })
})

router.post('/schedule', function(req, res, next) {
  var date = new Date(req.body.begindate);  // dateStr you get from mongodb

var d = date.getDate();
var m = date.getMonth()+1;
var y = date.getYear()+1900;
console.log(d,m,y)
        let newSchedule = new   Schedule({
            description: req.body.description,
            begindate: req.body.begindate,
            enddate: req.body.enddate,
            beginhour: parseInt(req.body.beginhour),
            endhour: parseInt(req.body.endhour),
            status: req.body.status
        }).save(function(err, result) {
            if (err) {
                res.json({
                    success: false,
                    message: err
                })
            } else {
                res.json({
                    success: true,
                    message: "add user is succesful",
                    data: result
                })
            }
        })
    })
module.exports = router;
