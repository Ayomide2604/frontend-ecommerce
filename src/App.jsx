import "./App.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import useScrollToTop from "./hooks/useScrollToTop";

// Private, Admin Routes and Unauthorized Page
import PrivateRoute from "./components/auth/PrivateRoute";
import AdminRoute from "./components/auth/AdminRoute";
import UnauthorizedPage from "./components/UnauthorizedPage";

// Main site Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// Main Site Screens
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProductScreen from "./screens/ProductScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import ContactScreen from "./screens/ContactScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "../RegisterScreen";
import Cart from "./pages/Cart";
import CheckoutScreen from "./screens/CheckoutScreen";
import ProfileScreen from "./screens/ProfileScreen";

// Admin Imports
import AdminScreen from "./screens/AdminScreen";

// Product Admin Imports
import ProductTable from "./components/admin/product/ProductTable";
import AddProductForm from "./components/admin/product/AddProductForm";
import EditProductForm from "./components/admin/product/EditProductForm";

// Collection Admin Imports
import CollectionTable from "./components/admin/collection/CollectionTable";
import EditCollectionForm from "./components/admin/collection/EditCollectionForm";
import AddCollectionForm from "./components/admin/collection/AddCollectionForm";

// User Admin Imports
import UserTable from "./components/UserTable";

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
			{currentPath.startsWith("/admin") ? "" : <Header />}
			<Routes>
				{/* Start Public Routes */}
				<Route path="/" element={<HomeScreen />} />
				<Route path="/about" element={<AboutScreen />} />
				<Route path="/products" element={<ProductScreen />} />
				<Route path="/products/:id" element={<ProductDetailScreen />} />
				<Route path="/contact" element={<ContactScreen />} />
				<Route path="/login" element={<LoginScreen />} />
				<Route path="/register" element={<RegisterScreen />} />
				<Route path="/unauthorized" element={<UnauthorizedPage />} />
				{/* End Public Routes */}

				{/*  Start Private Routes */}
				<Route path="/cart" element={<PrivateRoute element={Cart} />} />
				<Route
					path="/checkout"
					element={<PrivateRoute element={CheckoutScreen} />}
				/>
				<Route
					path="/profile"
					element={<PrivateRoute element={ProfileScreen} />}
				/>

				{/* End Private Route */}

				{/*Start  Admin Routes */}

				<Route path="/admin" element={<AdminRoute element={AdminScreen} />}>
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

					<Route path="users" element={<UserTable />} />
				</Route>
				{/* End Admin Routes */}
			</Routes>
			{currentPath.startsWith("/admin") ? "" : <Footer />}
		</>
	);
}

export default App;
