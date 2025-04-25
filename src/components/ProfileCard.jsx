import { Link } from "react-router-dom";
const ProfileCard = ({ user }) => {
	return (
		<div className="col-12 col-md-12 col-lg-4">
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
						<div className="author-box-description">
							<div className="card-header">
								<h4>Personal Details</h4>
							</div>
							<div className="card-body">
								<div className="py-4">
									<p className="clearfix">
										<span className="float-left">Birthday</span>
										<span className="float-right text-muted">30-05-1998</span>
									</p>
									<p className="clearfix">
										<span className="float-left">Phone</span>
										<span className="float-right text-muted">
											(0123)123456789
										</span>
									</p>
									<p className="clearfix">
										<span className="float-left">Mail</span>
										<span className="float-right text-muted">
											test@example.com
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
