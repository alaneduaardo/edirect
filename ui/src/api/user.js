import constants from '../constants';

export default {
  login: (username, password) => {
    let params = new URLSearchParams({ username, password }).toString();

    return fetch(`${constants.API_URL_BASE}/user/login`, {
          method: 'POST',
          headers: {'Content-Type': constants.API_DEFAULT_CONTENT_TYPE},
          body: params
        }).then(res => {
          if(res.status !== 200) throw new Error(res.statusText);
          res.json()
        });
  },
  logout: () => {
    return fetch(`${constants.API_URL_BASE}/user/logout`, {
          method: 'GET'
        }).then((err, res) => {
          if(err.status !== 200) throw new Error(res.statusText);
        });
  }
};
