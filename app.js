var 
  express = require('express')
  http = require('http'),
  path = require('path');

//var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// get config handle
var appConfig = require('./config/appConfig.json');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.set('port', process.env.PORT || 8080);
app.set('host', process.env.HOST || "localhost");
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap3/dist/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/fontawesome', express.static(__dirname + '/node_modules/fontawesome/'));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


// Set config into environment varibles
app.locals.env = appConfig;
console.log(app.locals.env);
//console.log("Host [{0}]", app.locals.env.server.host);
//console.log("Port [{0}]", app.locals.env.server.port);
//console.log("Footer Company: [{0}]", app.locals.env.app.footer.company);
//console.log("Footer Year: [{0}]", app.locals.env.app.footer.year);

http.createServer(app).listen(app.get('port'), app.get('host'), function () {
  console.log(`Express server listening on port [${app.get('port')}] on host [${app.get('host')}]`);
  if (app.get('port') != 443) {
    console.log(`Use http://${app.get('host')}:${app.get('port')}`);
  } else {
    console.log(`Use https://${app.get('host')}:${app.get('port')}`);
  }
});
