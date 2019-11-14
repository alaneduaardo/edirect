module.exports = function(UserModel) {
  const model = UserModel;

  this.login = async (req, res, next) => {
    let { username, password } = req.body;

    try {
        const user = await model.authenticate(username, password);
        const token = await user.generateAuthToken();

        res.send({ id: user._id, name: user.name, token });
    } catch (error) {
        res.status(401).send({ error: error.message });
    }
  };

  this.logout = (req, res) => {
    try {
        UserModel.logout(req.user._id);

        res.send();
    } catch (error) {
        res.status(500).send({error: error.message})
    }
  }
}
