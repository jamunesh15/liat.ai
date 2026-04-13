import api from './api';

const contactService = {
  submit: (data) => api.post('/contact', data),
};

export default contactService;
