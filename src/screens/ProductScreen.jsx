import ProductList from "./../components/ProductList";
const ProductScreen = () => {
	return (
		<>
			<section className="product_section layout_padding">
				<div className="container">
					<div className="heading_container heading_center">
						<h2>
							Our <span>products</span>
						</h2>
						
					</div>
					<ProductList />

					<div className="btn-box">
						<a href="">View All products</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductScreen;
