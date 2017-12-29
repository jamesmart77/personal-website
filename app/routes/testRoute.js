var express = require('express');
var path = require('path');
var router = express.Router();

// define the survey route
router.get('/', function (req, res) {
  //send home.html back in response
  //res.send('WELCOME TO THE Test PAGE')
  res.sendFile(path.join(__dirname, "../public/test.html"));
});

module.exports = router