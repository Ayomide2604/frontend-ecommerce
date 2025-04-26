import { create } from "zustand";
import api from "../utils/api";

const useCartStore = create((set, get) => ({
	cart: null,
	totalItems: 0,

	fetchCart: async () => {
		try {
			const response = await api.get("/cart");
			const cart = response.data.cart;
			const items = response.data.items || [];

			set({
				cart: response.data,
				totalItems: items.length,
			});
			console.log("Cart fetched:", cart);
		} catch (error) {
			console.error("Error fetching cart:", error.message);
		}
	},

	handleAddToCart: async (productId, quantity) => {
		try {
			await api.post("/cart/add", { productId, quantity: quantity || 1 });
			alert("Product Added Successfully");
			await get().fetchCart();
		} catch (error) {
			console.error(
				"Error Adding Product to cart",
				error.response?.data || error.message
			);
			alert("Failed to add to cart");
		}
	},

	handleRemoveFromCart: async (itemId) => {
		try {
			await api.delete(`/cart/remove/${itemId}`);
			await get().fetchCart();
		} catch (error) {
			console.error(
				"Failed to remove item",
				error.response?.data || error.message
			);
			alert("Failed to remove item from cart");
		}
	},

	handleIncreaseQuantity: async (itemId) => {
		try {
			await api.patch(`cart/item/${itemId}/increase`);
			await get().fetchCart();
		} catch (error) {
			console.error(
				"Error increasing product quantity",
				error.response?.data || error.message
			);
		}
	},

	handleDecreaseQuantity: async (itemId) => {
		try {
			await api.patch(`cart/item/${itemId}/decrease`);
			await get().fetchCart();
		} catch (error) {
			console.error(
				"Error decreasing product quantity",
				error.response?.data || error.message
			);
		}
	},
}));

export default useCartStore;
