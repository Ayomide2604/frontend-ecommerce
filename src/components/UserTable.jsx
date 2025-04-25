import { useState, useEffect } from "react";
import api from "../utils/api";
import Loader from "./Loader";
import Alert from "./Alert";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import useAuthStore from "../store/useAuthStore";

const UserTable = () => {
	const { fetchUsers, users, usersLoad, usersError } = useAuthStore();

	useEffect(() => {
		fetchUsers();
	}, []);

	if (usersLoad)
		return (
			<div className="main-content">
				<section className="section">
					<div className="section-body">
						<Loader />
					</div>
				</section>
			</div>
		);

	if (usersError)
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
							<div className="card">
								<div className="card-header">
									<h4>All Users </h4>
								</div>
								<div className="card-body p-0">
									<div className="table-responsive">
										<table className="table table-striped table-md">
											<tbody>
												<tr>
													<th>#</th>
													<th>First Name</th>
													<th>Last Name</th>
													<th>email</th>
													<th>username</th>
													<th>Details</th>
												</tr>
												{users.map((user, index) => (
													<tr key={user._id}>
														<td>{index + 1}</td>
														<td>{user.firstName}</td>
														<td>{user.lastName}</td>
														<td>{user.email} </td>
														<td>{user.username} </td>

														<td>
															<a
																href={`/collections/${user._id}`}
																className="btn btn-primary"
															>
																View Profile
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

export default UserTable;
