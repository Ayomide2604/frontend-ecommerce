import ProductList from "../components/products/ProductList";
const ProductScreen = () => {
	return (
		<>
			<section className="product_section layout_padding">
				<div className="container">
					<div className="heading_container heading_center">
						<h2>
							All <span>products</span>
						</h2>
					</div>
					<ProductList />
				</div>
			</section>
		</>
	);
};

export default ProductScreen;
