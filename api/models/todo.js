let { Schema } = require('mongoose');
let uuid = require('node-uuid');

let Todo = new Schema({
  _id: {type: String, required: true, default: () => uuid.v1() }},
  name: {type: String, required: [true, 'Name must to be valid']},
  done: {type: Boolean, required: [true, 'Done flag must to be assigned']},
});

module.exports = mongoose.model('Todo', Todo);
