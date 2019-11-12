module.exports = function() {
  this.verify = function (req, res, next) {
    if(typeof req.session.user == 'undefined') {
      next({ status: 403, message: "User not logged", ...req.session });
    }

    next();
  }
}
