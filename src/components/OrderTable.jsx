import { useState } from "react";
import useOrderStore from "../store/useOrderStore";

const OrderTable = ({}) => {
	const { orders, ordersLoad, ordersError, clearOrdersError } = useOrderStore();

	if (ordersLoad) return <Loader />;

	if (ordersError)
		return (
			<Alert message={ordersError} onClose={() => clearOrdersError(null)} />
		);

	return (
		<div>
			<div className="card">
				<div className="card-header">
					<h4>Your Orders</h4>
				</div>
				<div className="card-body p-0">
					<div className="table-responsive">
						<table className="table table-striped table-md">
							<thead>
								<tr>
									<th>#</th>
									<th>Order ID</th>
									<th>Order Total</th>
									<th>Status</th>
									<th>Date</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{orders.map((order) => (
									<tr>
										<td>{order._id}</td>
										<td>Irwansyah Saputra</td>
										<td>2017-01-09</td>
										<td>
											<div className="badge badge-success">Active</div>
										</td>
										<td></td>
										<td>
											<a href="#" className="btn btn-primary">
												Detail
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
							<li className="page-item disabled">
								<a className="page-link" href="#" tabIndex="-1">
									<i className="fas fa-chevron-left"></i>
								</a>
							</li>
							<li className="page-item active">
								<a className="page-link" href="#">
									1 <span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="page-item">
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
									<i className="fas fa-chevron-right"></i>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default OrderTable;
