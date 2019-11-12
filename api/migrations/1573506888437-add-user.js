'use strict'
const { UserModel } = require('../models');

const data = [
  { name: 'test', username: 'test1', password: 'test1' },
];

module.exports.up = async function (next) {
  for (var x in data) {
    await UserModel.create(data[x]);
  }

  next();
}

module.exports.down = async function (next) {
  for (var x in data) {
    await UserModel.deleteOne({ username: data[x].username });
  }

  next();
}
