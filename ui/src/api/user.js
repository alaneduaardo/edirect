import api from './api-base';

export default {
  login: (username, password) => {
    return api.post('/user/login', { username, password }).then(res => {
      return res.data
    });
  },
  logout: () => {
    return api.get('/user/logout');
  }
};
