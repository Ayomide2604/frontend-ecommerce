import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import useAuthStore from "../store/useAuthStore";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const { login, loginLoad, loginError } = useAuthStore();

	const initialFormValues = {
		email: "",
		password: "",
	};

	const [formValues, setFormValues] = useState(initialFormValues);

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};
	const handleLogin = async (e) => {
		e.preventDefault();

		const formData = {
			email: formValues.email.toLowerCase(),
			password: formValues.password,
		};
		login(formData);
		setFormValues(initialFormValues);
		navigate("/products");
	};
	return (
		<section className="py-3 py-md-5 py-xl-8">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="mb-5">
							<h2 className="display-5 fw-bold text-center">Sign in</h2>
							<p className="text-center m-0">
								Don't have an account? <Link to="/register">Sign up</Link>
							</p>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-12 col-lg-10 col-xl-8">
						<div className="row gy-5 justify-content-center">
							<div className="col-12 col-lg-5">
								<form onSubmit={handleLogin}>
									<div className="row gy-3 overflow-hidden">
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
													type="password"
													className="form-control border-0 border-bottom rounded-0"
													name="password"
													id="password"
													placeholder="Password"
													value={formValues.password}
													onChange={handleChange}
													required
												/>
												<label htmlFor="password" className="form-label">
													Password
												</label>
											</div>
										</div>
										<div className="col-12">
											<div className="row justify-content-between">
												<div className="col-6">
													<div className="text-end">
														<Link href="#!" className="link-primary ">
															Forgot password?
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className="col-12">
											<div className="d-grid">
												<button
													className="btn btn-lg btn-dark rounded-0 fs-6"
													type="submit"
												>
													Log in
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
								{""}
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
								{""}
							</div>
							<div className="col-12 col-lg-5 d-flex align-items-center">
								<div className="d-flex gap-3 flex-column w-100 ">
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

export default LoginForm;
