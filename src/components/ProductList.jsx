import { useState, useEffect } from "react";
import Product from "./Product";
import api from "./../utils/api";
import Loader from "./Loader";
import Alert from "./Alert";
import productsJson from "./../data/products";
const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await api.get("/products");
				setProducts(response.data);
				setLoading(true);
			} catch (err) {
				setError(
					err.response?.data?.message || "Error Fetching Products from Database"
				);
				setLoading(false);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	if (loading) return <Loader />;

	if (error) return <Alert message={error} onClose={() => setError(null)} />;

	return (
		<div className="row">
			{products.map((product) => (
				<Product
					key={product._id}
					id={product._id}
					title={product.name}
					price={product.price}
					image="/img/p3.png"
				/>
			))}
		</div>
	);
};

export default ProductList;
