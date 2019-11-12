let mongoose = require('mongoose');
let uuid = require('node-uuid');

let Schema = mongoose.Schema;

let Project = new Schema({
  _id: {type: String, default: () => uuid.v1() },
  user: {type: String, required: [true, 'The user must to be assigned'], ref: 'User'},
  name: {type: String, required: [true, 'Name must to be valid']},
  todos: [{type: String, ref: 'Todo'}],
});

module.exports = mongoose.model('Project', Project);
