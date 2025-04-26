import { useState, useEffect } from "react";
import { CiCircleCheck } from "react-icons/ci";
import api from "../../../utils/api";
import Loader from "../../Loader";
import Alert from "../../Alert";
import BackButton from "../../BackButton";

const AddCollectionForm = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);
	const initialFormValues = {
		title: "",
	};
	const [formValues, setFormValues] = useState(initialFormValues);

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setLoading(true);
			const response = await api.post("/collections", formValues);
			setLoading(false);
			setSuccess(true);
			setFormValues(initialFormValues);
			setTimeout(() => setSuccess(false), 3000);
		} catch (error) {
			setError("Unable to Add Collection at this  time", error.response);
			setLoading(false);
			setSuccess(false);
		} finally {
			setLoading(false);
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
		<div className="main-content position-relative">
			<section
				className={
					success ? "section content-wrapper blur" : "section content-wrapper"
				}
			>
				<div className="section-body">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-header d-flex justify-content-between ">
									<BackButton />
									<h4>Add New Collection</h4>
									<span></span>
								</div>
								<div className="card-body">
									<form onSubmit={handleSubmit}>
										<div className="form-group row mb-4">
											<label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
												Title:
											</label>
											<div className="col-sm-12 col-md-7">
												<input
													type="text"
													className="form-control"
													name="title"
													onChange={handleChange}
													value={formValues.title}
												/>
											</div>
										</div>

										<div className="form-group row mb-4">
											<label className="col-form-label text-md-right col-12 col-md-3 col-lg-3" />
											<div className="col-sm-12 col-md-7">
												<button className="btn btn-primary">
													Add Collection
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{success && (
				<div
					className="main-content position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center  bg-opacity-50"
					style={{ height: "100vh" }}
				>
					<section className="section">
						<div className="section-body">
							<div className="col-12 col-sm-12 col-lg-12 ">
								<div className="card p-4 ">
									<div className="card-body text-center">
										<div className="mb-3 success-animation text-center text-success display-1">
											<CiCircleCheck />
										</div>
										<h6>Product Added Successfully</h6>
										<button
											className="btn btn-success"
											onClick={() => setSuccess(false)}
										>
											Okay
										</button>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			)}
		</div>
	);
};

export default AddCollectionForm;
