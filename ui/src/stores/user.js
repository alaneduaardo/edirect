import { decorate, observable, action } from "mobx";
import userApi from '../api/user';

class UserStore {
  loggedUser = localStorage.getItem('edirect-loggedUser');

  login(username, password) {
    return userApi.login(username, password).then(data => {
      this.loggedUser = data;
      localStorage.setItem('edirect-loggedUser', this.loggedUser);
    });
  }

  logout() {
    return userApi.logout().then(action(() => {
      this.loggedUser = null;
      localStorage.clear();
    }));
  }
}

export default new UserStore();

decorate(UserStore, {
  loggedUser: observable
});
