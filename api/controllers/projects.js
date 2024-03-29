module.exports = function(ProjectModel) {
  const model = ProjectModel;

  this.find = (req, res, next) => {
    model.find({ user: req.user._id }, (err, data) => {
      if(err) return next(err);

      res.send(data);
    })
    .populate('todos');
  }

  this.findOne = (req, res, next) => {
    model.findOne({ _id: req.params.id }, (err, data) => {
      if(err) return next(err);

      res.send(data);
    })
    .populate('todos');
  }

  this.new = (req, res, next) => {
    model.create(req.body, (err, data) => {
      if(err) return next({status:400, ...err, requestBody:req.body});

      res.send(data);
    });
  }

  this.update = (req, res, next) => {
    model.updateOne({ _id: req.params.id }, req.body, (err, data) => {
      if(err) return next({status:400, ...err, requestBody:req.body});

      res.send(data);
    });
  }

  this.delete = (req, res, next) => {
    model.deleteOne({ _id: req.params.id }, (err, data) => {
      if(err) return next({status:400, ...err, requestBody:req.body});

      res.send(data);
    });
  }
}
