import { decorate, observable, action } from "mobx";
import projectApi from '../api/project';
import todoApi from '../api/todo';

class ProjectStore {
  projects = [];

  list() {
    return projectApi.list().then(data => {
      this.projects = data;
    });
  }

  findOne(projectId) {
    return projectApi.findOne(projectId);
  }

  new(data) {
    return projectApi.new(data).then(() => {
      this.list();
    });
  }

  update(projectId, data) {
    return projectApi.update(projectId, data).then(() => {
      this.list();
    });
  }

  delete(projectId) {
    return projectApi.delete(projectId).then(() => {
      this.list();
    });
  }

  addTodo(projectId, data) {
    return todoApi.new(projectId, data).then(() => {
      this.list();
    });
  }

  checkTodo(projectId, todoId) {
    return todoApi.check(projectId, todoId).then(() => {
      this.list();
    });
  }

  deleteTodo(projectId, todoId) {
    return todoApi.delete(projectId, todoId).then(() => {
      this.list();
    });
  }
}

decorate(ProjectStore, {
  projects: observable,
  findOne: action,
  new: action,
  update: action,
  delete: action,
  addTodo: action,
  checkTodo: action,
  deleteTodo: action,
  list: action,
});

export default new ProjectStore();
