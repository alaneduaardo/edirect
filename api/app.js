var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

mongoose.connect("mongodb://mongodb:27017/edirect");
mongoose.connection.on("error", error => {
    console.log("Database connection error:", error);
});
mongoose.connection.once("open", () => {
    console.log("Connected to Database!");
});

var app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var projectsRouter = require('./routes/projects');
var todosRouter = require('./routes/todos');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/projects', projectsRouter);
app.use('/projects/:projectId/todos', todosRouter);

// set error 404
app.use(function(req, res, next) {
  let statusCode = 404;
  next({status:statusCode, ...createError(statusCode)});
});

// error handler
app.use(function(err, req, res, next) {
  let responseError = req.app.get('env') === 'development' ?
    {"error":err} :
    {"error":"Contact the system administrator"};

  res.status(err.status || 500);
  res.send(responseError);
});

module.exports = app;
