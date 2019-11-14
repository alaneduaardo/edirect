import api from './api-base';

export default {
  list: () => {
    return api.get('/project').then(res => {
      return res.data
    });
  },
  new: (data) => {
    return api.post('/project', data).then(res => {
      return res.data
    });
  },
  delete: (projectId) => {
    return api.delete(`/project/${projectId}`);
  }
};
