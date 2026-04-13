import axios from 'axios';

const api = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
	headers: { 'Content-Type': 'application/json' },
	timeout: 10000,
});

api.interceptors.request.use((config) => {
	window.dispatchEvent(new CustomEvent('api:request:start'));
	const token = localStorage.getItem('token');
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
}, (error) => {
	window.dispatchEvent(new CustomEvent('api:request:end'));
	return Promise.reject(error);
});

api.interceptors.response.use(
	(response) => {
		window.dispatchEvent(new CustomEvent('api:request:end'));
		return response.data;
	},
	(error) => {
		window.dispatchEvent(new CustomEvent('api:request:end'));
		const message = error.response?.data?.message || 'Something went wrong';
		return Promise.reject(new Error(message));
	}
);

export default api;
