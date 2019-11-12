const UserModel = require('./user');
const ProjectModel = require('./project');
const TodoModel = require('./todo');

const mongoose = require('mongoose');

mongoose.connect(
  "mongodb://mongodb:27017/edirect",
  {useNewUrlParser: true, useUnifiedTopology: true}
);
mongoose.connection.on("error", error => {
    console.log("Database connection error:", error);
});

module.exports = {
  UserModel,
  ProjectModel,
  TodoModel
}
