import { useState, useEffect } from "react";
import api from "../utils/api";
import { CiCircleCheck } from "react-icons/ci";
import Loader from "./Loader";
import Alert from "./Alert";

const AddProductForm = () => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);
	const initialFormValues = {
		name: "",
		description: undefined,
		price: "",
		collection: "",
	};
	const [formValues, setFormValues] = useState(initialFormValues);

	useEffect(() => {
		const fetchCollections = async () => {
			try {
				const response = await api.get("/collections");
				setCategories(response.data);
			} catch (err) {
				console.error(
					err.response || "Error Fetching Collections from database"
				);
			}
		};

		fetchCollections();
	}, []);

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setLoading(true);
			const response = await api.post("/products", formValues);
			setLoading(false);
			setSuccess(true);
			setFormValues(initialFormValues);
			setTimeout(() => setSuccess(false), 3000);
		} catch (error) {
			setError("Unable to Add Product at this  time", error.response);
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
								<div className="card-header">
									<h4>Add New Product</h4>
								</div>
								<div className="card-body">
									<form onSubmit={handleSubmit}>
										<div className="form-group row mb-4">
											<label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
												Name:
											</label>
											<div className="col-sm-12 col-md-7">
												<input
													type="text"
													className="form-control"
													name="name"
													onChange={handleChange}
													value={formValues.name}
												/>
											</div>
										</div>
										<div className="form-group row mb-4">
											<label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
												Price:
											</label>
											<div className="col-sm-12 col-md-7">
												<input
													type="text"
													className="form-control"
													name="price"
													onChange={handleChange}
													value={formValues.price}
												/>
											</div>
										</div>
										<div className="form-group row mb-4">
											<label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
												Collection:
											</label>
											<div className="col-sm-12 col-md-7">
												<select
													className="form-control selectric"
													onChange={handleChange}
													name="collection"
													value={formValues.collection}
												>
													<option value="">Select A Collection</option>
													{categories.map((collection) => (
														<option key={collection._id} value={collection._id}>
															{collection.title}
														</option>
													))}
												</select>
											</div>
										</div>
										<div className="form-group row mb-4">
											<label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
												Description:
											</label>
											<div className="col-sm-12 col-md-7">
												<textarea
													onChange={handleChange}
													name="description"
													className="summernote-simple"
													value={formValues.description}
												/>
											</div>
										</div>
										{/* <div className="form-group row mb-4">
										<label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
										Thumbnail
										</label>
										<div className="col-sm-12 col-md-7">
											<div id="image-preview" className="image-preview">
											<label htmlFor="image-upload" id="image-label">
													Choose File
													</label>
													<input type="file" name="image" id="image-upload" />
													</div>
													</div>
													</div> */}

										<div className="form-group row mb-4">
											<label className="col-form-label text-md-right col-12 col-md-3 col-lg-3" />
											<div className="col-sm-12 col-md-7">
												<button className="btn btn-primary">Add Post</button>
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
										<h6>Collection Added Successfully</h6>
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

export default AddProductForm;
