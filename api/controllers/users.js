module.exports = function(UserModel) {
  const model = UserModel;

  this.login = (req, res, next) => {
    let { username, password } = req.body;

    model.authenticate(username, password, (err, user) => {
      if(err) return next(err);

      req.session.user = user;

      res.send({
        id: user._id,
        name: user.name
      });
    });
  };

  this.logout = (req, res) => {
    delete req.session.user;

    res.send({
      user: typeof req.session.user
    });
  }
}
