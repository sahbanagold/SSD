var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/schedule', function(req, res, next) {
  res.render('form',{});
});
module.exports = router;
