import { create } from "zustand";
import api from "../utils/api";

const useProductStore = create((set) => ({
	products: [],
	productsLoad: false,
	productsError: null,
	product: null,
	productLoad: false,
	productError: null,
	newProduct: null,
	addProductLoad: false,
	addProductError: null,
	addProductSuccess: false,
	setAddProductSuccess: (value) => set({ addProductSuccess: value }),

	fetchProducts: async () => {
		set({ productsLoad: true });
		try {
			const response = await api.get("/products");
			set({ products: response.data, productsLoad: false });
		} catch (err) {
			set({
				productsError: err.response?.data?.message || "Error fetching products",
				productsLoad: false,
			});
		}
	},

	fetchProductById: async (id) => {
		set({ productLoad: true, productError: null });
		try {
			const response = await api.get(`/products/${id}`);
			set({ product: response.data, productLoad: false });
		} catch (error) {
			set({
				productError: error.response?.data?.message || "Error fetching product",
				productLoad: false,
			});
		}
	},

	addNewProduct: async (formData) => {
		try {
			set({ addProductLoad: true, addProductError: null });
			const response = await api.post("/products", formData, {
				headers: {
					"Content-Type": "multipart/form-data ",
				},
			});
			set({
				newProduct: response.data,
				addProductLoad: false,
				addProductSuccess: true,
			});

			setTimeout(() => {
				set({ addProductSuccess: false });
				navigate("/account/products");
			}, 3000);
		} catch (error) {
			set({
				addProductLoad: false,
				addProductSuccess: false,
				addProductError:
					error.response?.data?.message || "Unable to Add Product at this time",
			});
		}
	},
}));

export default useProductStore;
