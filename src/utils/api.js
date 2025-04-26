import axios from "axios";
import useAuthStore from "../store/useAuthStore";

// Create an Axios instance with the base URL
const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api", // Replace with your API URL
});

// Set up Axios request interceptor to automatically add the Authorization token
api.interceptors.request.use(
	(config) => {
		// Retrieve the token from the Zustand store
		const { token } = useAuthStore.getState();

		// If a token is present, set the Authorization header
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config; // Proceed with the request
	},
	(error) => {
		// Return a rejected promise in case of an error
		return Promise.reject(error);
	}
);

export default api;
