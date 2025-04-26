import { create } from "zustand";
import api from "../utils/api";
const useAuthStore = create((set) => ({
	token: localStorage.getItem("token") || null,
	user: JSON.parse(localStorage.getItem("user")) || null,
	users: [],
	usersLoad: false,
	usersError: null,
	loginLoad: false,
	loginError: null,
	registerLoad: false,
	registerError: null,

	fetchUsers: async () => {
		try {
			set({ usersLoad: true, usersError: null });
			const response = await api.get("/auth/users");
			set({ users: response.data, usersLoad: false, usersError: null });
		} catch (error) {
			console.error("error fetching users", error.message);
			set({ usersError: error.message, usersLoad: false });
		} finally {
			set({ usersLoad: false });
		}
	},
	login: async (formData) => {
		try {
			set({ loginLoad: true, loginError: null });
			const response = await api.post("/auth/login", formData);
			const { token, user } = response.data;
			localStorage.setItem("token", token);
			localStorage.setItem("user", JSON.stringify(user));
			set({ token: token, user: user, loginLoad: false });
		} catch (error) {
			set({ loginError: error });
			console.error("Error logging in:", error);
		} finally {
			set({ loginLoad: false });
		}
	},

	register: async (formData) => {
		try {
			set({ registerLoad: true, registerError: null });
			const response = await api.post("/auth/register", formData);
			console.log(response.data);
			set({ registerLoad: false, registerError: null });
			alert("user registered successfully ");
		} catch (error) {
			console.error("An Error occured While Signing up", error);
			set({ registerError: error });
		} finally {
			set({ registerLoad: false });
		}
	},
	logout: () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		set({ token: null, user: null });
	},
}));

export default useAuthStore;
