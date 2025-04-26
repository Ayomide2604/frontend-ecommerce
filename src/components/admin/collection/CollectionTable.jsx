import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import api from "../../../utils/api";
import Loader from "../../Loader";
import Alert from "../../Alert";

const CollectionTable = () => {
	const [collections, setCollections] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchCollections = async () => {
			try {
				const response = await api.get("/collections");
				setCollections(response.data);
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

		fetchCollections();
	}, [collections]);

	const deleteCollection = async (id) => {
		try {
			const response = await api.delete(`/collections/${id}`);
		} catch (err) {
			console.error(
				err.response?.data?.message || "Error Deleting Collection from Database"
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
								<Link to="/account/add_collection">
									<button className="btn btn-primary">
										<IoAdd size={20} />
										<span> New Collection</span>
									</button>
								</Link>
							</div>
							<div className="card">
								<div className="card-header">
									<h4>All Collections </h4>
								</div>
								<div className="card-body p-0">
									<div className="table-responsive">
										<table className="table table-striped table-md">
											<tbody>
												<tr>
													<th>#</th>
													<th>Name</th>
													<th>Number of Products</th>
													<th>Action</th>
													<th>Details</th>
												</tr>
												{collections.map((collection, index) => (
													<tr key={collection._id}>
														<td>{index + 1}</td>
														<td>{collection.title}</td>
														<td>- </td>
														<td>
															<Link
																to={`/account/collections/${collection._id}/edit_collection`}
																className="btn btn-primary mr-2"
															>
																Edit
															</Link>
															<a
																onClick={() => deleteCollection(collection._id)}
																className="btn btn-danger ms-2"
															>
																Delete
															</a>
														</td>
														<td>
															<a
																href={`/collections/${collection._id}`}
																className="btn btn-primary"
															>
																View Collection
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
											<li className="page-item">
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

export default CollectionTable;
