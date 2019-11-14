module.exports = function(UserModel, jwt) {
  const model = UserModel;

  this.login = async (req, res, next) => {
    let { username, password } = req.body;

    try {
        const user = await model.authenticate(username, password);

        user.generateAuthToken((token) => {
          res.send({ id: user._id, name: user.name, token });
        });
    } catch (error) {
        res.status(401).send({ error: error.message });
    }
  };

  this.logout = (req, res) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const _id = jwt.verify(token, process.env.JWT_KEY)._id;

        model.logout(_id);

        res.send();
    } catch (error) {
        res.status(500).send({error: error.message})
    }
  }
}
