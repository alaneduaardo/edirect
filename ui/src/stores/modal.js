import { decorate, observable, action } from "mobx";

class ModalStore {
  deleteProject = false;
  deleteProjectId = null;

  toggleDeleteProject(id) {
    this.deleteProjectId = id;
    this.deleteProject = !this.deleteProject
  }
}

decorate(ModalStore, {
  deleteProject: observable,
  toggleDeleteProject: action
});

export default new ModalStore();
