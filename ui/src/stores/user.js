import { decorate, observable, action } from "mobx";
import userApi from '../api/user';

class UserStore {
  loggedUser = {};

  login(username, password) {
    return userApi.login(username, password).then(action(data => {
      this.loggedUser = data;
    }));
  }

  logout() {
    return userApi.logout().then(action(() => {
      this.loggedUser = {};
    }));
  }
}

export default new UserStore();

decorate(UserStore, {
  loggedUser: observable
});
