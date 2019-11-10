let { Schema } = require('mongoose');
let uuid = require('node-uuid');

let Project = new Schema({
  _id: { type: String, default: () => uuid.v1() }},
  name: {type: String, required: true},
  todos: [{type: Schema.Types.ObjectId, ref: 'Todo'}],
});

module.exports = mongoose.model('Projects', Project);
