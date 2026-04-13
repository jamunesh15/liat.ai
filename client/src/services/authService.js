import api from './api';

const authService = {
  login: (data) => api.post('/auth/login', data),
};

export default authService;
