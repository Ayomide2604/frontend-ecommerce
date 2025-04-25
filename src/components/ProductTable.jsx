import { useState, useEffect } from "react";
import api from "../utils/api";
import Loader from "./Loader";
import Alert from "./Alert";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const ProductTable = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await api.get("/products");
				setProducts(response.data);
				setLoading(true);
			} catch (err) {
				setError(
					err.response?.data?.message || "Error Fetching Products from Database"
				);
				setLoading(false);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, [products]);

	const deleteProduct = async (id) => {
		try {
			const response = await api.delete(`/products/${id}`);
		} catch (err) {
			console.error(
				err.response?.data?.message || "Error deleting Product from Database"
			);
		}
	};

	if (loading)
		return (
			<div className="main-content">
				<section className="section">
					<div className="section-body">
						<Loader />
					</div>
				</section>
			</div>
		);

	if (error)
		return (
			<div className="main-content">
				<section className="section">
					<div className="section-body">
						<Alert message={error} onClose={() => setError(null)} />
					</div>
				</section>
			</div>
		);
	return (
		<div className="main-content">
			<section className="section">
				<div className="section-body">
					<div className="row">
						<div className="col-12 col-md-12 col-lg-12">
							<div className="m-3 d-flex justify-content-end align-items-center">
								<Link to="/account/add_product">
									<button className="btn btn-primary">
										<IoAdd size={20} />
										<span> New Product</span>
									</button>
								</Link>
							</div>
							<div className="card">
								<div className="card-header">
									<h4>All Products </h4>
								</div>
								<div className="card-body p-0">
									<div className="table-responsive">
										<table className="table table-striped table-md">
											<tbody>
												<tr>
													<th>#</th>
													<th>Name</th>
													<th>Price</th>
													<th>Collection</th>
													<th>Action</th>
													<th>Details</th>
												</tr>
												{products.map((product, index) => (
													<tr key={product._id}>
														<td>{index + 1}</td>
														<td>{product.name}</td>
														<td>${product.price}</td>
														<td>{product.collection?.title}</td>
														<td>
															<Link
																to={`/account/products/${product._id}/edit_product`}
																className="btn btn-primary mr-2"
															>
																Edit
															</Link>
															<a
																onClick={() => deleteProduct(product._id)}
																className="btn btn-danger ms-2"
															>
																Delete
															</a>
														</td>
														<td>
															<a
																href={`/products/${product._id}`}
																className="btn btn-primary"
															>
																View Product
															</a>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
								<div className="card-footer text-right">
									<nav className="d-inline-block">
										<ul className="pagination mb-0">
											<li className="page-item ">
												<a className="page-link" href="#" tabIndex={-1}>
													<FaCaretLeft />
												</a>
											</li>
											<li className="page-item ">
												<a className="page-link" href="#">
													1 <span className="sr-only">(current)</span>
												</a>
											</li>
											<li className="page-item active">
												<a className="page-link" href="#">
													2
												</a>
											</li>
											<li className="page-item ">
												<a className="page-link" href="#">
													3
												</a>
											</li>
											<li className="page-item">
												<a className="page-link" href="#">
													<FaCaretRight />
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProductTable;
