import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<header className="header_section">
				<div className="container">
					<nav className="navbar navbar-expand-lg custom_nav-container ">
						<a className="navbar-brand" href="index.html">
							<img width={250} src="img/logo.png" alt="#" />
						</a>
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
								<li onClick={() => setMenuOpen(!menuOpen)}>
									<Link className="nav-link" to="/cart">
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
