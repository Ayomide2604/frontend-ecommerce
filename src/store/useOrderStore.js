import { create } from "zustand";
import api from "../utils/api";

const useOrderStore = create((set) => ({
	orders: [],
	ordersLoad: false,
	ordersError: null,
	order: null,
	orderLoad: false,
	orderError: null,
	neworder: null,
	neworderLoad: false,
	neworderError: null,
	newOrderSuccess: false,

	setAddOrderSuccess: (value) => set({ addOrderSuccess: value }),

	fetchOrders: async () => {
		set({ ordersLoad: true });
		try {
			const response = await api.get("/orders");
			set({ orders: response.data, ordersLoad: false });
		} catch (err) {
			set({
				ordersError: err.response?.data?.message || "Error fetching orders",
				ordersLoad: false,
			});
		}
	},

	fetchOrderById: async (id) => {
		set({ orderLoad: true, orderError: null });
		try {
			const response = await api.get(`/orders/${id}`);
			set({ order: response.data, orderLoad: false });
		} catch (error) {
			set({
				orderError: error.response?.data?.message || "Error fetching order",
				orderLoad: false,
			});
		}
	},

	checkout: async (formData) => {
		try {
			set({ addOrderLoad: true, addOrderError: null });
			const response = await api.post("orders/checkout", formData, {
				headers: {
					"Content-Type": "multipart/form-data ",
				},
			});
			set({
				newOrder: response.data,
				addOrderLoad: false,
				addOrderSuccess: true,
			});

			setTimeout(() => {
				set({ addOrderSuccess: false });
				navigate("/orders");
			}, 3000);
		} catch (error) {
			set({
				addorderLoad: false,
				addorderSuccess: false,
				addorderError:
					error.response?.data?.message || "Unable to Add Product at this time",
			});
		}
	},
}));

export default useOrderStore;
