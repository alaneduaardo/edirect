module.exports = function(ProjectModel) {
  const model = ProjectModel;

  this.find = (req, res, next) => {
    model.find({ user: req.session.user._id }, (err, data) => {
      if(err) return next(err);

      res.send(data);
    })
    .populate('Todo')
    .populate('User');
  }

  this.findOne = (req, res, next) => {
    model.findOne({ _id: req.params.id }, (err, data) => {
      if(err) return next(err);

      res.send(data);
    })
    .populate('Todo')
    .populate('User');
  }

  this.new = (req, res, next) => {
    let project = new model({ ...req.body, user: req.session.user._id });

    project.save((err, data) => {
      if(err) return next({...err,requestBody:req.body});

      res.send(data);
    });
  }

  this.update = (req, res, next) => {
    model.updateOne({ _id: req.params.id }, req.body, (err, data) => {
      if(err) return next({...err,requestBody:req.body});

      res.send(data);
    });
  }

  this.delete = (req, res, next) => {
    model.deleteOne({ _id: req.params.id }, (err, data) => {
      if(err) return next({...err,requestBody:req.body});

      res.send(data);
    });
  }
}
