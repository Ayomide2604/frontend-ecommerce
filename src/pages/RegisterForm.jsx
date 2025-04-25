import React from "react";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuthStore from "./../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const RegisterForm = () => {
	const navigate = useNavigate();
	const { register, registerLoad, registerError } = useAuthStore();
	const initialFormValues = {
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
	};

	const [formValues, setFormValues] = useState(initialFormValues);

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const handleRegister = async (e) => {
		e.preventDefault();

		const formData = {
			firstName: formValues.firstName,
			lastName: formValues.lastName,
			username: formValues.username.toLowerCase(),
			email: formValues.email.toLowerCase(),
			password: formValues.password,
		};

		register(formData);
		setFormValues(initialFormValues);
		navigate("/login");
	};

	return (
		<section className="py-3 py-md-5 py-xl-8">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="mb-5">
							<h2 className="display-5 fw-bold text-center">Register</h2>
							<p className="text-center m-0">
								Already have an account? <Link to="/login">Sign in</Link>
							</p>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-12 col-lg-10 col-xl-8">
						<div className="row gy-5 justify-content-center">
							<div className="col-12 col-lg-5">
								<form onSubmit={handleRegister}>
									<div className="row gy-3 overflow-hidden">
										<div className="col-12">
											<div className="form-floating mb-3">
												<input
													type="text"
													className="form-control border-0 border-bottom rounded-0"
													name="firstName"
													id="username"
													value={formValues.firstName}
													onChange={handleChange}
													required
												/>
												<label htmlFor="username" className="form-label">
													FirstName
												</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating mb-3">
												<input
													type="text"
													className="form-control border-0 border-bottom rounded-0"
													name="lastName"
													value={formValues.lastName}
													onChange={handleChange}
													id="username"
													required
												/>
												<label htmlFor="username" className="form-label">
													LastName
												</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating mb-3">
												<input
													type="text"
													className="form-control border-0 border-bottom rounded-0"
													name="username"
													id="username"
													value={formValues.username}
													onChange={handleChange}
													required
												/>
												<label htmlFor="username" className="form-label">
													Username
												</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating mb-3">
												<input
													type="email"
													className="form-control border-0 border-bottom rounded-0"
													name="email"
													id="email"
													value={formValues.email}
													onChange={handleChange}
													required
												/>
												<label htmlFor="email" className="form-label">
													Email
												</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating mb-3">
												<input
													type="text"
													className="form-control border-0 border-bottom rounded-0"
													name="password"
													value={formValues.password}
													onChange={handleChange}
													id="password"
													placeholder="Password"
													required
												/>
												<label htmlFor="password" className="form-label">
													Password
												</label>
											</div>
										</div>
										{/* <div className="col-12">
											<div className="form-floating mb-3">
												<input
													type="password"
													className="form-control border-0 border-bottom rounded-0"
													name="confirmPassword"
													id="confirmPassword"
													placeholder="Confirm Password"
													required
												/>
												<label htmlFor="confirmPassword" className="form-label">
													Confirm Password
												</label>
											</div>
										</div> */}
										<div className="col-12">
											<div className="d-grid">
												<button
													className="btn btn-lg btn-dark rounded-0 fs-6"
													type="submit"
												>
													Register
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
							<div className="col-12 col-lg-2 d-flex align-items-center justify-content-center gap-3 flex-lg-column">
								<div>or</div>
								<div
									className="bg-dark h-100 d-none d-lg-block"
									style={{
										"--bs-bg-opacity": ".1",
										width: "1px",
									}}
								/>
								<div>
									<div
										className="bg-dark w-100 d-lg-none"
										style={{
											"--bs-bg-opacity": ".1",
											height: "1px",
										}}
									/>
									<div
										className="bg-dark h-100 d-none d-lg-block"
										style={{
											"--bs-bg-opacity": ".1",
											width: "1px",
										}}
									/>
									<div
										className="bg-dark w-100 d-lg-none"
										style={{
											"--bs-bg-opacity": ".1",
											height: "1px",
										}}
									/>
								</div>
							</div>
							<div className="col-12 col-lg-5 d-flex align-items-center">
								<div className="d-flex gap-3 flex-column w-100">
									<a
										href="#!"
										className="btn bsb-btn-2xl btn-outline-dark rounded-0 d-flex align-items-center"
									>
										<FaGoogle />
										<span className="ms-2 fs-6 flex-grow-1">
											Continue with Google
										</span>
									</a>
									<a
										href="#!"
										className="btn bsb-btn-2xl btn-outline-dark rounded-0 d-flex align-items-center"
									>
										<FaApple />
										<span className="ms-2 fs-6 flex-grow-1">
											Continue with Apple
										</span>
									</a>
									<a
										href="#!"
										className="btn bsb-btn-2xl btn-outline-dark rounded-0 d-flex align-items-center"
									>
										<FaFacebook />
										<span className="ms-2 fs-6 flex-grow-1">
											Continue with Facebook
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RegisterForm;
