import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProductScreen from "./screens/ProductScreen";
import ContactScreen from "./screens/ContactScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "../RegisterScreen";
import Cart from "./pages/Cart";
import CheckoutScreen from "./screens/CheckoutScreen";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/about" element={<AboutScreen />} />
				<Route path="/products" element={<ProductScreen />} />
				<Route path="/products/:id" element={<ProductDetailScreen />} />
				<Route path="/contact" element={<ContactScreen />} />
				<Route path="/login" element={<LoginScreen />} />
				<Route path="/register" element={<RegisterScreen />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/checkout" element={<CheckoutScreen />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
