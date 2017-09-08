var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET login page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* GET login page. */
router.get('/help', function(req, res, next) {
  res.render('help', { title: 'Help' });
});

module.exports = router;
