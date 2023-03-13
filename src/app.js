var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var accountRouter = require('./routes/account');
var adminRouter = require('./routes/admin');
var dashboardRouter = require('./routes/dashboard');
var indexRouter = require('./routes/index');
var patientprofileRouter = require('./routes/patientprofile');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/account', accountRouter);
app.use('/admin', adminRouter);
app.use('/dashboard', dashboardRouter);
app.use('/', indexRouter);
app.use('/patientprofile', patientprofileRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

// Get references to the header and footer elements
//const header = document.getElementById("header");
//const footer = document.getElementById("footer");

// Use the fetch API to load the header and footer HTML files
//fetch("header.ejs")
  //.then(response => response.text())
  //.then(html => {
    // Insert the header HTML into the header element
    //header.innerHTML = html;
  //});

//fetch("footer.ejs")
  //.then(response => response.text())
  //.then(html => {
    // Insert the footer HTML into the footer element
    //footer.innerHTML = html;
  //});
