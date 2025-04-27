import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import api from "../../../utils/api";
import Loader from "../../Loader";
import Alert from "../../Alert";

import useProductStore from "./../../../store/useProductStore";
import ProductFilters from "../../products/productFilters";
import Pagination from "../../Pagination";

const ProductTable = () => {
	const {
		products,
		productsLoad,
		productsError,
		fetchProducts,
		clearProductsError,
		page,
		setPage,
		totalPages,
		limit,
		setLimit,
		sort,
		setSort,
	} = useProductStore();

	const [error, setError] = useState(null);

	useEffect(() => {
		fetchProducts();
	}, [page, limit, sort]);

	const deleteProduct = async (id) => {
		try {
			const response = await api.delete(`/products/${id}`);
		} catch (err) {
			console.error(
				err.response?.data?.message || "Error deleting Product from Database"
			);
		}
	};

	if (productsLoad)
		return (
			<div className="main-content">
				<section className="section">
					<div className="section-body">
						<Loader />
					</div>
				</section>
			</div>
		);

	if (productsError)
		return (
			<div className="main-content">
				<section className="section">
					<div className="section-body">
						<Alert
							message={productsError}
							onClose={() => clearProductsError(null)}
						/>
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
								<Link to="/admin/add_product">
									<button className="btn btn-primary">
										<IoAdd size={20} />
										<span> New Product</span>
									</button>
								</Link>
							</div>
							<div className="card">
								<div className="card-header d-flex justify-content-between">
									<h4>All Products </h4>

									<span>
										<ProductFilters
											limit={limit}
											setLimit={setLimit}
											sort={sort}
											setSort={setSort}
										/>
									</span>
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
																to={`/admin/products/${product._id}/edit_product`}
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
								<div className="card-footer text-right d-flex justify-content-end align-items-center ms-2">
									<Pagination
										page={page}
										setPage={setPage}
										totalPages={totalPages}
									/>
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
