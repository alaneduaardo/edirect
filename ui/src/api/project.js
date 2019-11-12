import axios from "axios";
import constants from '../constants';

export default {
  list: () => {
    return axios.get(`${constants.API_URL_BASE}/project`,).then(res => {
          if(res.status !== 200) throw new Error(res.statusText);
          return res.data
        });
  },
};
