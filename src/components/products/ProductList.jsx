import { useEffect } from "react";
import Product from "./Product";
import Loader from "../Loader";
import Alert from "../Alert";
import useProductStore from "../../store/useProductStore";
const ProductList = () => {
	const { products, productsLoad, productsError, fetchProducts } =
		useProductStore();

	useEffect(() => {
		fetchProducts();
	}, []);

	if (productsLoad) return <Loader />;

	if (productsError)
		return <Alert message={productsError} onClose={() => setError(null)} />;

	return (
		<div className="row">
			{products.map((product) => (
				<Product
					key={product._id}
					id={product._id}
					title={product.name}
					price={product.price}
					image={
						product.image
							? `${import.meta.env.VITE_IMAGE_URL}${product.image}`
							: "/img/default_product.jpg"
					}
				/>
			))}
		</div>
	);
};

export default ProductList;
