import "./App.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import useScrollToTop from "./hooks/useScrollToTop";
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
import AccountScreen from "./screens/AccountScreen";
import AccountHeader from "./components/AccountHeader";
import AccountFooter from "./components/AccountFooter";

function App() {
	const location = useLocation();
	const currentPath = location.pathname;
	useScrollToTop();

	useEffect(() => {
		if (currentPath.startsWith("/account")) {
			import("./assets/css/style2.css");
		} else {
			null;
		}
	}, [currentPath]);

	return (
		<>
			{currentPath.startsWith("/account") ? <AccountHeader /> : <Header />}
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
				<Route path="/account" element={<AccountScreen />} />
			</Routes>
			{currentPath.startsWith("/account") ? <AccountFooter /> : <Footer />}
		</>
	);
}

export default App;
