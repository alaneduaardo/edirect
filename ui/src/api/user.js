import axios from "axios";
import constants from '../constants';

const api = axios.create({
  baseURL: constants.API_URL_BASE
});

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
