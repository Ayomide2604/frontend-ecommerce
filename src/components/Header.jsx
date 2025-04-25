import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import api from "../utils/api";
import useAuthStore from "../store/useAuthStore";

const Header = () => {
	const [collections, setCollections] = useState([]);
	const { token, user, logout } = useAuthStore();
	const [menuOpen, setMenuOpen] = useState(false);
	const [collectionMenuOpen, setCollectionMenuOpen] = useState(false);
	const [accountMenuOpen, setAccountMenuOpen] = useState(false);
	const location = useLocation();
	const currentPath = location.pathname;

	useEffect(() => {
		const fetchCollections = async () => {
			try {
				const response = await api.get("/collections");
				setCollections(response.data);
			} catch (err) {
				console.error(
					err.response || "Error Fetching Collections from database"
				);
			}
		};

		fetchCollections();
	}, []);

	return (
		<>
			<header
				className="header_section p-3 "
				style={{
					position: "sticky",
					top: 0,
					zIndex: 1000,
					backgroundColor: "#ffff",
				}}
			>
				<div className="container">
					<nav className="navbar navbar-expand-lg custom_nav-container ">
						<Link className="navbar-brand" to="/">
							<img width={250} src={Logo} alt="#" />
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded={menuOpen}
							aria-label="Toggle navigation"
							onClick={() => setMenuOpen(!menuOpen)}
						>
							<span> </span>
						</button>
						<div
							className={
								menuOpen ? "navbar-collapse" : "collapse navbar-collapse"
							}
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav">
								<li
									onClick={() => setMenuOpen(!menuOpen)}
									className={
										currentPath === "/" ? "nav-item active" : " nav-item"
									}
								>
									<Link className="nav-link " to="/">
										Home
									</Link>
								</li>

								<li
									onClick={() => setMenuOpen(!menuOpen)}
									className={
										currentPath === "/about" ? "nav-item active" : " nav-item"
									}
								>
									<Link className="nav-link" to="/about">
										About
									</Link>
								</li>

								<li
									className="nav-item dropdown"
									onMouseLeave={() => setCollectionMenuOpen(false)}
								>
									<a
										className="nav-link dropdown-toggle"
										href="#"
										onClick={(e) => {
											e.preventDefault();
											setCollectionMenuOpen((prev) => !prev);
										}}
									>
										Collections <span className="caret"></span>
									</a>
									<ul
										className={`dropdown-menu ${
											collectionMenuOpen ? "show" : ""
										}`}
									>
										{collections.map((collection) => (
											<li key={collection._id}>
												<a href={`${collection.title}`}>{collection.title}</a>
											</li>
										))}
									</ul>
								</li>

								<li
									onClick={() => setMenuOpen(!menuOpen)}
									className={
										currentPath === "/products"
											? "nav-item active"
											: " nav-item"
									}
								>
									<Link className="nav-link" to="/products">
										Products
									</Link>
								</li>

								<li
									onClick={() => setMenuOpen(!menuOpen)}
									className={
										currentPath === "/contact" ? "nav-item active" : " nav-item"
									}
								>
									<Link className="nav-link" to="/contact">
										Contact
									</Link>
								</li>

								{token ? (
									<>
										<li
											className="nav-item dropdown"
											onMouseLeave={() => setAccountMenuOpen(false)}
										>
											<a
												className="nav-link dropdown-toggle"
												href="#"
												onClick={(e) => {
													e.preventDefault();
													setAccountMenuOpen((prev) => !prev);
												}}
											>
												({user.username}) <span className="caret"></span>
											</a>
											<ul
												className={`dropdown-menu ${
													accountMenuOpen ? "show" : ""
												}`}
											>
												<li>
													<Link to="/account">Profile</Link>
												</li>
												<li>
													<Link onClick={logout}>Logout</Link>
												</li>
											</ul>
										</li>
									</>
								) : (
									<>
										<li
											onClick={() => setMenuOpen(!menuOpen)}
											className={
												currentPath === "/login"
													? "nav-item active"
													: " nav-item"
											}
										>
											<Link className="nav-link" to="/login">
												Login
											</Link>
										</li>
										<li
											onClick={() => setMenuOpen(!menuOpen)}
											className={
												currentPath === "/register"
													? "nav-item active"
													: " nav-item"
											}
										>
											<Link className="nav-link" to="/register">
												Register
											</Link>
										</li>
									</>
								)}

								<li onClick={() => setMenuOpen(!menuOpen)}>
									<Link
										className="nav-link d-flex align-self-center"
										to="/cart"
									>
										<FaShoppingCart />
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
