let { Schema } = require('mongoose');

let User = new Schema({
  _id: {type: String, required: true, default: () => uuid.v1() }},
  name: {type: String, required: [true, 'Name must to be valid']},
  username: {type: String, required: [true, 'Username must to be valid']},
  password: {type: String, required: [true, 'Password must to be valid']},
});

module.exports = mongoose.model('Users', User );
