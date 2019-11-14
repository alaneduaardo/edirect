import { decorate, observable, action } from "mobx";

class ModalStore {
  editProject = false;
  deleteProject = false;
  deleteTodo = false;

  projectId = null;
  todoId = null;

  toggleDeleteProject(id) {
    this.projectId = id;
    this.deleteProject = !this.deleteProject
  }

  toggleEditProject(id) {
    console.log(id);
    this.projectId = id;
    this.editProject = !this.editProject
  }

  toggleDeleteTodo(projectId, todoId) {
    this.projectId = projectId;
    this.todoId = todoId;
    this.deleteTodo = !this.deleteTodo
  }
}

decorate(ModalStore, {
  editProject: observable,
  deleteProject: observable,
  deleteTodo: observable,
  projectId: observable,
  todoId: observable,
  toggleDeleteProject: action,
  toggleDeleteTodo: action,
  toggleEditProject: action
});

export default new ModalStore();
