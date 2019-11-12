import { decorate, observable, action } from "mobx";
import projectApi from '../api/project';

class ProjectStore {
  projects = [];

  list() {
    return projectApi.list().then(data => {
      this.projects = data;
    });
  }
}

export default new ProjectStore();

decorate(ProjectStore, {
  projects: observable
});
