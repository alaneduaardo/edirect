module.exports = function(TodoModel, ProjectModel) {
  const model = TodoModel;
  const projectModel = ProjectModel;

  this.new = (req, res, next) => {
    model.create(req.body, (err, newTodo) => {
      if(err) return next({...err,requestBody:req.body});

      req.project.todos.push(newTodo._id);

      projectModel.updateOne({ _id: req.project._id }, req.project, (err, project) => {
        if(err) return next(err);

        res.send(project);
      });
    });
  }

  this.update = (req, res, next) => {
    model.updateOne({ _id: req.params.id }, req.body, (err, data) => {
      if(err) return next({...err,requestBody:req.body});

      res.send(data);
    });
  }

  this.delete = (req, res, next) => {
    let { project } = req;

    delete project.todos[project.todos.indexOf(req.params.id)];
    project.todos = project.todos.filter(Boolean);

    projectModel.updateOne({ _id: project._id }, project, (err) => {
      if(err) return next(err);

      model.deleteOne({ _id: req.params.id }, (err, data) => {
        if(err) return next({...err,requestBody:req.body});
      });

      res.send(project);
    });
  }
}
