import axios from "axios";
import constants from '../constants';
import api from './api-base';

export default {
  new: (projectId, data) => {
    return api.post(`/project/${projectId}/todo`, data).then(res => {
      return res.data
    });
  }
};
