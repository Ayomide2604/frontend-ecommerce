import Product from "./Product";
import productsJson from "../data/products";

const ProductList = () => {
	const products = productsJson;
	return (
		<section className="product_section layout_padding">
			<div className="container">
				<div className="heading_container heading_center">
					<h2>
						Our <span>products</span>
					</h2>
				</div>
				<div className="row">
					{products.map((product) => (
						<Product
							key={product.id}
							id={product.id}
							title={product.title}
							price={product.price}
							image={product.image}
						/>
					))}
				</div>
				<div className="btn-box">
					<a href="">View All products</a>
				</div>
			</div>
		</section>
	);
};

export default ProductList;
