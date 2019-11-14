const { UserModel } = require('../models');
const jwt = require('jsonwebtoken');

module.exports = function() {
  this.verify = async function (req, res, next) {

    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const _id = jwt.verify(token, process.env.JWT_KEY)._id;
        const loggedUser = await UserModel.findOne({ _id, token });

        if (!loggedUser) {
            throw new Error('Not authorized to access this resource');
        }

        console.log(loggedUser)

        req.user = loggedUser;
        req.token = token;

        next();
    } catch (error) {
        res.status(401).send({ error: error.message })
    }
  }
}
