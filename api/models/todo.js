let { Schema } = require('mongoose');
let uuid = require('node-uuid');

let Todo = new Schema({
  _id: {type: String, required: true, default: () => uuid.v1() }},
  name: {type: String, required: true},
  done: {type: Boolean, required: true},
});

module.exports = mongoose.model('Todo', Todo);
