var express = require('express');
var router = express.Router();
var appConfig = require('../config/appConfig.json');
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(JSON.stringify(appConfig));
  if (appConfig.app.setupComplete) {
    res.render('index', { title: 'Home' });
  } else {
    res.redirect('/setup');
    //res.render('setup', { title: 'Setup' });
  }
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* GET help page. */
router.get('/help', function(req, res, next) {
  res.render('help', { title: 'Help' });
});

/* GET help page. */
router.get('/help/restapi', function(req, res, next) {
  res.render('help/restapi', { title: 'REST API' });
});

/* GET setup page. */
router.get('/setup', function(req, res, next) {
  res.render('setup', { title: 'Setup' });
});

/* POST setup page. */
router.post('/setup', function(req, res, next) {
  res.render('setup', { title: 'Setup' });
});

module.exports = router;
