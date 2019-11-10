let { Schema } = require('mongoose');

let User = new Schema({
  _id: {type: String, required: true, default: () => uuid.v1() }},
  name: {type: String, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true},
});

module.exports = mongoose.model('Users', User );
