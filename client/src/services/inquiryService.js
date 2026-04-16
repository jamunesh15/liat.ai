import api from './api';
const inquiryService = {
  submitLeasing:      (data) => api.post('/inquiries/leasing', data),
  submitSponsorship:  (data) => api.post('/inquiries/sponsorship', data),
  submitEvent:        (data) => api.post('/inquiries/event', data),
};
export default inquiryService;
