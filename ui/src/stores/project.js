import { decorate, observable, action } from "mobx";
import projectApi from '../api/project';
import todoApi from '../api/todo';

class ProjectStore {
  projects = [];

  list() {
    return projectApi.list().then(action(data => {
      this.projects = data;
    }));
  }

  new(data) {
    return projectApi.new(data).then(() => {
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
  list: action,
});

export default new ProjectStore();
