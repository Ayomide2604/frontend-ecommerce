import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../utils/api";

const useProductStore = create(
	persist(
		(set, get) => ({
			products: [],
			totalPages: 1,
			page: 1,
			limit: 10,
			sort: "-createdAt",
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
			clearProductsError: () => set({ productsError: null }),

			fetchProducts: async () => {
				set({ productsLoad: true });
				try {
					const { page, limit, sort } = useProductStore.getState();
					const response = await api.get("/products", {
						params: { page, limit, sort },
					});
					set({
						products: response.data.products,
						totalPages: response.data.totalPages,
						productCount: response.data.productCount,
						productsLoad: false,
					});
				} catch (err) {
					set({
						productsError:
							err.response?.data?.message || "Error fetching products",
						productsLoad: false,
					});
				}
			},
			setPage: (page) => set({ page }),
			setLimit: (limit) => set({ limit }),
			setSort: (sort) => set({ sort }),

			fetchProductById: async (id) => {
				set({ productLoad: true, productError: null });
				try {
					const response = await api.get(`/products/${id}`);
					set({ product: response.data, productLoad: false });
				} catch (error) {
					set({
						productError:
							error.response?.data?.message || "Error fetching product",
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
							error.response?.data?.message ||
							"Unable to Add Product at this time",
					});
				}
			},
		}),
		{
			name: "product-store",
			partialize: (state) => ({
				page: state.page,
				limit: state.limit,
				sort: state.sort,
			}),
		}
	)
);

export default useProductStore;
