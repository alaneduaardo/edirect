import axios from "axios";
import constants from '../constants';

export default {
  login: (username, password) => {
    let params = new URLSearchParams({ username, password }).toString();

    return axios.post(`${constants.API_URL_BASE}/user/login`, { username, password }).then(res => {
          if(res.status !== 200) throw new Error(res.statusText);
          return res.data
        });
  },
  logout: () => {
    return axios.get(`${constants.API_URL_BASE}/user/logout`).then((err, res) => {
          if(err.status !== 200) throw new Error(res.statusText);
        });
  }
};
