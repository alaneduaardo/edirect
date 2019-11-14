import api from './api-base';

export default {
  list: () => {
    return api.get('/project').then(res => {
      return res.data
    });
  },
  findOne: (projectId) => {
    return api.get(`/project/${projectId}`).then(res => {
      return res.data
    });
  },
  new: (data) => {
    return api.post('/project', data).then(res => {
      return res.data
    });
  },
  update: (projectId, data) => {
    return api.put(`/project/${projectId}`, data).then(res => {
      return res.data
    });
  },
  delete: (projectId) => {
    return api.delete(`/project/${projectId}`);
  }
};
