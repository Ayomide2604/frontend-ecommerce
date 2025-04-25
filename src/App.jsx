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

import ProductTable from "./components/ProductTable";
import AddProductForm from "./components/AddProductForm";
import EditProductForm from "./components/EditProductForm";
import CollectionTable from "./components/CollectionTable";
import EditCollectionForm from "./components/EditCollectionForm";
import AddCollectionForm from "./components/AddCollectionForm";
import ProfilePage from "./pages/ProfilePage";
import ChangePassword from "./pages/ChangePassword";

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
			{currentPath.startsWith("/account") ? "" : <Header />}
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
				<Route path="/account" element={<AccountScreen />}>
					<Route path="products" element={<ProductTable />} />
					<Route path="add_product" element={<AddProductForm />} />
					<Route
						path="products/:id/edit_product"
						element={<EditProductForm />}
					/>
					<Route path="collections" element={<CollectionTable />} />
					<Route path="add_collection" element={<AddCollectionForm />} />
					<Route
						path="collections/:id/edit_collection"
						element={<EditCollectionForm />}
					/>
					<Route path="profile" element={<ProfilePage />} />
					<Route path="change_password" element={<ChangePassword />} />
				</Route>
			</Routes>
			{currentPath.startsWith("/account") ? "" : <Footer />}
		</>
	);
}

export default App;
