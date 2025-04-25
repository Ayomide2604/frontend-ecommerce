import { create } from "zustand";
import api from "../utils/api";

const useCartStore = create((set, get) => ({
	cart: null,
	totalItems: 0,

	fetchCart: async (token) => {
		try {
			const response = await api.get("/cart", {
				headers: { Authorization: `Bearer ${token}` },
			});

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

	handleAddToCart: async (token, productId, quantity) => {
		try {
			await api.post(
				"/cart/add",
				{ productId, quantity: quantity || 1 },
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			alert("Product Added Succesfully");
			await get().fetchCart(token);
		} catch (error) {
			console.error("Error Adding Product to cart", error);
			alert("Failed to add to cart");
		}
	},

	handleRemoveFromCart: async (token, itemId) => {
		try {
			await api.delete(`/cart/remove/${itemId}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			await get().fetchCart(token);
		} catch (error) {
			console.error("Failed to remove item ", error);
			alert("failed to remove item from cart ");
		}
	},

	handleIncreaseQuantity: async (token, itemId) => {
		try {
			await api.patch(`cart/item/${itemId}/increase`);
			// alert("product quantity increased");
			await get().fetchCart(token);
		} catch (error) {
			console.error("Error increading product quantity", error.message);
		}
	},
	handleDecreaseQuantity: async (token, itemId) => {
		try {
			await api.patch(`cart/item/${itemId}/decrease`);
			// alert("product quantity decreased");
			await get().fetchCart(token);
		} catch (error) {
			console.error("Error increading product quantity", error.message);
		}
	},
}));
export default useCartStore;
