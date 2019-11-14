import api from './api-base';

export default {
  new: (projectId, data) => {
    return api.post(`/project/${projectId}/todo`, data).then(res => {
      return res.data
    });
  },
  check: (projectId, todoId) => {
    return api.put(`/project/${projectId}/todo/${todoId}`, { done: true }).then(res => {
      return res.data
    });
  },
  delete: (projectId, todoId) => {
    return api.delete(`/project/${projectId}/todo/${todoId}`);
  }
};
