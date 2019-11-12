import constants from '../constants';

module.exports.login = (username, password) => {
  return fetch(`${constants.API_URL_BASE}/user/login`, {
        method: 'post',
        headers: {'Content-Type': constants.API_DEFAULT_CONTENT_TYPE},
        body: JSON.stringify({ username, password })
      }).then(res => res.json());
}

module.exports.logout = () => {
  return fetch(`${constants.API_URL_BASE}/user/logout`, {
        method: 'get'
      }).then(res => res.json());
}
