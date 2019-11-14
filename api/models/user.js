const mongoose = require('mongoose');
const uuid = require('node-uuid');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

let Schema = mongoose.Schema;

let User = new Schema({
  _id: {type: String, required: true, default: () => uuid.v1() },
  name: {type: String, required: [true, 'Name must to be valid']},
  username: {type: String, unique: true, required: [true, 'Username must to be valid']},
  password: {type: String, required: [true, 'Password must to be valid']},
  token: {type: String }
});

User.methods.generateAuthToken = async function() {
    const user = this;

    user.token = jwt.sign({_id: user._id}, process.env.JWT_KEY);
    await user.save();

    return user.token;
}

User.statics.authenticate = async (username, password) => {
    const user = await UserModel.findOne({ username });

    if (!user) {
        throw new Error('Invalid login credentials');
    }

    if (!await bcryptjs.compare(password, user.password)) {
        throw new Error('Invalid login credentials');
    }

    return user
}

User.statics.logout = async (_id) => {
    await UserModel.updateOne({ _id }, { token: null });
}

User.pre('save', function (next) {
  this.password = bcryptjs.hashSync(this.password, 10);

  next();
});

const UserModel = mongoose.model('User', User)
module.exports = UserModel;
