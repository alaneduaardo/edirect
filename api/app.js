const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  methods:['GET', 'POST', 'PUT', 'DELETE'],
  origin: ['http://localhost:3000','http://127.0.0.1:3000']
}));


app.param('projectId', function (req, res, next, projectId) {
  const { ProjectModel } = require('./models');

  ProjectModel.findOne({_id: projectId}, (err, project) => {
    req.project = project;
    next();
  });
});

const { MainRouter, UserRouter, ProjectRouter, TodoRouter } = require('./routes');

app.use('/', MainRouter);
app.use('/user', UserRouter);
app.use('/project', ProjectRouter);
app.use('/project/:projectId/todo', TodoRouter);

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
