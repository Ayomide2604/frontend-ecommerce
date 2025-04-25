const ChangePassword = () => {
	return (
		<section className="section my-5">
			<div className="container mt-5">
				<div className="row">
					<div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
						<div className="card card-primary">
							<div className="card-header">
								<h4>Change Password</h4>
							</div>
							<div className="card-body ">
								<p className="text-muted">Enter Your New Password</p>
								<form method="POST">
									<div className="form-group">
										<label for="password">New Password</label>
										<input
											id="password"
											type="password"
											className="form-control pwstrength"
											data-indicator="pwindicator"
											name="password"
											tabindex="2"
											required
										/>
										<div id="pwindicator" className="pwindicator">
											<div className="bar"></div>
											<div className="label"></div>
										</div>
									</div>
									<div className="form-group">
										<label for="password-confirm">Confirm Password</label>
										<input
											id="password-confirm"
											type="password"
											className="form-control"
											name="confirm-password"
											tabindex="2"
											required
										/>
									</div>
									<div className="form-group">
										<button
											type="submit"
											className="btn btn-primary btn-lg btn-block"
											tabindex="4"
										>
											Reset Password
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ChangePassword;
