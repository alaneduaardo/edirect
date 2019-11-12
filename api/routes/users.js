const express = require('express');
const router = express.Router();
const { UserModel } = require('../models');
const { UsersController } = require('../controllers');

const Users = new UsersController(UserModel);

/* POST user login */
router.post('/login', Users.login);

/* POST user logout */
router.get('/logout', Users.logout);

module.exports = router;
