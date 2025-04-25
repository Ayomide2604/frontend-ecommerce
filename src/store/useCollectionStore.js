import { create } from "zustand";
import api from "../utils/api";

const useCollectionStore = create((set) => ({
	collections: [],
	collectionsLoad: false,
	CollectionsError: null,

	fetchCollections: async () => {
		set({ collectionsLoad: true });
		try {
			const response = await api.get("/collections");
			set({ collections: response.data, collectionsLoad: false });
		} catch (err) {
			set({
				CollectionsError:
					err.response?.data?.message || "Error fetching collections",
				collectionsLoad: false,
			});
		}
	},
}));

export default useCollectionStore;
