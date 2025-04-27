const ProfileForm = () => {
	return (
		<div className="col-12 col-md-12 col-lg-8">
			<div className="card">
				<div className="padding-20">
					<ul className="nav nav-tabs" id="myTab2" role="tablist">
						<li className="nav-item">
							<a
								className="nav-link"
								id="profile-tab2"
								data-toggle="tab"
								href="#settings"
								role="tab"
								aria-selected="false"
							>
								Settings
							</a>
						</li>
					</ul>
					<div className="tab-content tab-bordered" id="myTab3Content">
						<div
							className="tab-pane fade show active"
							id="settings"
							role="tabpanel"
							aria-labelledby="profile-tab2"
						>
							<form method="post" className="needs-validation">
								<div className="card-header">
									<h4>Edit Profile</h4>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="form-group col-md-6 col-12">
											<label>First Name</label>
											<input
												type="text"
												className="form-control"
												value="Sarah"
											/>
											<div className="invalid-feedback">
												Please fill in the first name
											</div>
										</div>
										<div className="form-group col-md-6 col-12">
											<label>Last Name</label>
											<input
												type="text"
												className="form-control"
												value="Smith"
											/>
											<div className="invalid-feedback">
												Please fill in the last name
											</div>
										</div>
									</div>
									<div className="row">
										<div className="form-group col-md-7 col-12">
											<label>Email</label>
											<input
												type="email"
												className="form-control"
												value="sarah@example.com"
											/>
											<div className="invalid-feedback">
												Please fill in the email
											</div>
										</div>
										<div className="form-group col-md-5 col-12">
											<label>Phone</label>
											<input type="tel" className="form-control" value="" />
										</div>
									</div>
									<div className="row">
										<div className="form-group col-12">
											<label>Bio</label>
											<textarea className="form-control summernote-simple">
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Pariatur voluptatum alias molestias minus quod
												dignissimos.
											</textarea>
										</div>
									</div>
									<div className="row">
										<div className="form-group mb-0 col-12">
											<div className="custom-control custom-checkbox">
												<input
													type="checkbox"
													name="remember"
													className="custom-control-input"
													id="newsletter"
												/>
												<label
													className="custom-control-label"
													for="newsletter"
												>
													Subscribe to newsletter
												</label>
												<div className="text-muted form-text">
													You will get new information about products, offers
													and promotions
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="card-footer text-right">
									<button className="btn btn-primary">Save Changes</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileForm;
