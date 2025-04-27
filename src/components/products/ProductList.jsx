import { useEffect } from "react";
import Product from "./Product";
import Loader from "../Loader";
import Alert from "../Alert";
import useProductStore from "../../store/useProductStore";
import { useLocation } from "react-router-dom";
import ProductFilters from "./productFilters";
import Pagination from "../Pagination";
const ProductList = () => {
	const {
		products,
		productsLoad,
		productsError,
		fetchProducts,
		clearProductsError,
		page,
		setPage,
		totalPages,
		limit,
		setLimit,
		sort,
		setSort,
	} = useProductStore();
	const location = useLocation();
	const currentPath = location.pathname;
	console.log(currentPath);

	useEffect(() => {
		fetchProducts();
	}, [page, limit, sort]);

	const handlePageChange = (page) => {
		setPage(page + 1);
	};

	if (productsLoad) return <Loader />;

	if (productsError)
		return (
			<Alert message={productsError} onClose={() => clearProductsError(null)} />
		);

	return (
		<>
			{currentPath === "/products" && (
				<ProductFilters
					limit={limit}
					setLimit={setLimit}
					sort={sort}
					setSort={setSort}
				/>
			)}

			<div className="row mb-5">
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

			{currentPath === "/products" ? (
				<div className="d-flex justify-content-center align-items-center">
					<Pagination
						page={page}
						setPage={setPage}
						totalPages={totalPages}
						variant="dark"
					/>
				</div>
			) : null}
		</>
	);
};

export default ProductList;
