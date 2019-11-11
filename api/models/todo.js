let mongoose = require('mongoose');
let uuid = require('node-uuid');

let Schema = mongoose.Schema;

let Todo = new Schema({
  _id: {type: String, required: true, default: () => uuid.v1() },
  name: {type: String, required: [true, 'Name must to be valid']},
  done: {type: Boolean, default: false},
});

module.exports = mongoose.model('Todo', Todo);
