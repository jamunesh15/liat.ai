import apiConnector from './apiConnector';

const analyticsService = {
  trackSectionView: (section) => apiConnector.post('/analytics/section-view', { section }),
};

export default analyticsService;
