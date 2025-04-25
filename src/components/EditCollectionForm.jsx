import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import { CiCircleCheck } from "react-icons/ci";
import Loader from "./Loader";
import Alert from "./Alert";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";

const EditCollectionForm = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [collection, setCollection] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const initialFormValues = {
		title: "",
	};

	const [formValues, setFormValues] = useState(initialFormValues);

	useEffect(() => {
		const fetchCollectionById = async (id) => {
			try {
				setLoading(true);
				const response = await api.get(`/collections/${id}`);
				setCollection(response.data);
			} catch (err) {
				setError(err.response?.data?.message || "An error occurred");
			} finally {
				setLoading(false);
			}
		};

		fetchCollectionById(id);
	}, [id]);

	// Set form values after product is fetched
	useEffect(() => {
		if (collection) {
			setFormValues({
				title: collection.title || "",
			});
		}
	}, [collection]);

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("title", formValues.title);

		try {
			setLoading(true);
			const response = await api.put(`/collections/${id}`, formData, {
				headers: { "Content-Type": "application/json" },
			});
			console.log(response.data);
			setSuccess(true);
			setTimeout(() => {
				setSuccess(false);
				navigate("/account/collections");
			}, 3000);
		} catch (error) {
			setError("Unable to update collection at this time");
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
		<div className="main-content">
			<section
				className={
					success ? "section content-wrapper blur" : "section content-wrapper"
				}
			>
				<div className="section-body">
					<div className="row">
						<div className="col-12 ">
							<div className="card p-5">
								<div className="card-header d-flex justify-content-between ">
									<BackButton />
									<h4>Edit Collection ({collection?.title})</h4>
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
											<div className="col-sm-12 col-md-7">
												<button className="btn btn-primary">
													Save Changes
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
					className="main-content position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-opacity-50"
					style={{ height: "100vh" }}
				>
					<section className="section">
						<div className="section-body">
							<div className="col-12">
								<div className="card p-4">
									<div className="card-body text-center">
										<div className="mb-3 success-animation text-center text-success display-1">
											<CiCircleCheck />
										</div>
										<p>Product Updated Successfully!</p>
										<button
											className="btn btn-primary my-3"
											onClick={() => {
												setSuccess(false);
												navigate("/account/collections");
											}}
										>
											Ok
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

export default EditCollectionForm;
