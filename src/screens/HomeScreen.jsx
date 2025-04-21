import ProductList from "../components/ProductList";
import Hero from "../pages/Hero";
import WhySection from "../pages/ShopWithUs";
import Subscribe from "../pages/Subscribe";

const HomeScreen = () => {
	return (
		<>
			<Hero />
			<WhySection />
			<ProductList />
			<Subscribe />
		</>
	);
};

export default HomeScreen;
