import { Link, Outlet } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { useLocation } from "react-router-dom";

const AccountScreen = () => {
	const currentPath = useLocation().pathname;
	const { user } = useAuthStore();
	return (
		<>
			<div className="d-flex px-5 my-5">
				<div className="card col-4">
					<div className="card author-box">
						<div className="card-body">
							<div className="author-box-center">
								<img
									alt="image"
									src="/img/client.jpg"
									className="rounded-circle author-box-picture"
								/>
								<div className="clearfix"></div>
								<div className="author-box-name">
									<p className="text-decoration-none">
										{user.firstName} {user.lastName}
									</p>
								</div>
							</div>
							<div className="text-center">
								<div className="card-body">
									<div className="list-group">
										<Link
											to="/account"
											className={
												currentPath === "/account"
													? "list-group-item list-group-item-action active"
													: "list-group-item list-group-item-action"
											}
										>
											Edit Profile
										</Link>
										<Link
											to="/account/orders"
											className={
												currentPath === "/account/orders"
													? "list-group-item list-group-item-action active"
													: "list-group-item list-group-item-action"
											}
										>
											View Orders
										</Link>
										<Link
											to="/account/change_password"
											className={
												currentPath === "/account/change_password"
													? "list-group-item list-group-item-action active"
													: "list-group-item list-group-item-action"
											}
										>
											Change Password
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-8">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default AccountScreen;
