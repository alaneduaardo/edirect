const mongoose = require('mongoose');
const uuid = require('node-uuid');
const bcryptjs = require('bcryptjs');

let Schema = mongoose.Schema;

let User = new Schema({
  _id: {type: String, required: true, default: () => uuid.v1() },
  name: {type: String, required: [true, 'Name must to be valid']},
  username: {type: String, unique: true, required: [true, 'Username must to be valid']},
  password: {type: String, required: [true, 'Password must to be valid']},
});

User.statics.authenticate = function (username, password, callback) {
  UserModel.findOne({ username })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        let errNotFound = { status:401, message:'User not found.' };
        return callback(errNotFound);
      }

      let result = bcryptjs.compareSync(password, user.password);

      if (result === true) {
        return callback(null, user);
      }

      let errInvalid = { status:401, message:'User credentials are invalid.' };
      errInvalid.status = 401;

      return callback(errInvalid);

    });
}

User.pre('save', function (next) {
  this.password = bcryptjs.hashSync(this.password, 10);

  next();
});

const UserModel = mongoose.model('users', User)
module.exports = UserModel;
