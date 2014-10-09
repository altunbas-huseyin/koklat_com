/*
var express = require('express');
var router = express.Router();

/// GET home page.
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/


var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


/* GET users listing. */
router.get('/', function(req, res) {
    mongoose.model("dil").find(function(err,users)
    {
        res.send(users);
    });

});

module.exports = router;