var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var expressNunjucks = require('express-nunjucks');
var cors = require('cors');

var routes = require('./app_server/routes/index');
var api_routes = require('./api_server/routes/index');
//var users = require('./app_server/routes/users');

var app = express();


var corsOptions = {
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors());

const isDev = app.get('env') === 'development';

nunjucks.configure(path.join(__dirname, 'app_server','views'), {
  autoescape: true,
  express: app,
  watch: isDev,
  noCache: isDev
});

const njk = expressNunjucks(app,{
  watch: isDev,
  noCache: isDev
});

// view engine setup
app.set('views', path.join(__dirname, 'app_server','views'));
app.set('view engine', 'njk');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', api_routes);
app.use('/', routes);


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
