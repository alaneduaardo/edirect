import { decorate, observable, action } from "mobx";

class ModalStore {
  deleteProject = false;
  deleteProjectId = null;

  deleteTodo = false;
  deleteTodoId = null;

  toggleDeleteProject(id) {
    this.deleteProjectId = id;
    this.deleteProject = !this.deleteProject
  }

  toggleDeleteTodo(projectId, todoId) {
    this.deleteTodoId = todoId;
    this.deleteProjectId = projectId;
    this.deleteTodo = !this.deleteTodo
  }
}

decorate(ModalStore, {
  deleteProject: observable,
  deleteTodo: observable,
  toggleDeleteProject: action,
  toggleDeleteTodo: action
});

export default new ModalStore();
