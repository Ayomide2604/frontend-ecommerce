import { Link } from "react-router-dom";
import ProductList from "../components/products/ProductList";
import Hero from "../pages/Hero";
import WhySection from "../pages/ShopWithUs";
import Subscribe from "../pages/Subscribe";

const HomeScreen = () => {
	return (
		<>
			<Hero />
			<WhySection />
			<section className="product_section layout_padding">
				<div className="container">
					<div className="heading_container heading_center">
						<h2>
							Latest <span>products</span>
						</h2>
					</div>

					<ProductList />
					<div className="btn-box">
						<Link to="/products">View All products</Link>
					</div>
				</div>
			</section>
			<Subscribe />
		</>
	);
};

export default HomeScreen;
