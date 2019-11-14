import { decorate, observable, action } from "mobx";
import userApi from '../api/user';

class UserStore {
  loggedUser = JSON.parse(localStorage.getItem('edirect-loggedUser')) || null;

  login(username, password) {
    return userApi.login(username, password).then(data => {
      this.loggedUser = data;
      localStorage.setItem('edirect-loggedUser', JSON.stringify(this.loggedUser));
    });
  }

  logout() {
    return userApi.logout().then(() => {
      this.loggedUser = null;
      localStorage.clear();
    });
  }
}

decorate(UserStore, {
  loggedUser: observable,
  login: action,
  logout: action
});

export default new UserStore();
