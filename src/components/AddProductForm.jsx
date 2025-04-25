import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import { CiCircleCheck } from "react-icons/ci";
import Loader from "./Loader";
import Alert from "./Alert";
import BackButton from "./BackButton";
import useCollectionStore from "../store/useCollectionStore";
import useProductStore from "../store/useProductStore";

const AddProductForm = () => {
	const { fetchCollections, collections } = useCollectionStore();
	const {
		addNewProduct,
		addProductLoad,
		addProductSuccess,
		setAddProductSuccess,
		addProductError,
	} = useProductStore();
	const navigate = useNavigate();

	const initialFormValues = {
		name: "",
		description: "",
		price: "",
		collection: "",
		image: null,
	};

	const [formValues, setFormValues] = useState(initialFormValues);

	useEffect(() => {
		fetchCollections();
	}, []);

	const handleChange = (e) => {
		if (e.target.name === "image") {
			setFormValues({ ...formValues, image: e.target.files[0] });
		} else {
			setFormValues({ ...formValues, [e.target.name]: e.target.value });
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", formValues.name);
		formData.append("description", formValues.description);
		formData.append("price", formValues.price);
		formData.append("collection", formValues.collection);
		formData.append("image", formValues.image);

		addNewProduct(formData);
		setFormValues(initialFormValues);
	};

	if (addProductLoad)
		return (
			<div className="main-content">
				<section className="section">
					<div className="section-body">
						<Loader />
					</div>
				</section>
			</div>
		);

	if (addProductError)
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
					addProductSuccess
						? "section content-wrapper blur"
						: "section content-wrapper"
				}
			>
				<div className="section-body">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-header d-flex justify-content-between ">
									<BackButton />
									<h4>Add New Product</h4>
									<span></span>
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
													type="number"
													min="1"
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
													{collections.map((collection) => (
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

										{formValues.image && (
											<div className="form-group row mb-4">
												<label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
													Current Image
												</label>
												<div className="col-sm-12 col-md-7">
													<img
														src={URL.createObjectURL(formValues.image)}
														alt="Product"
														style={{
															width: "150px",
															height: "auto",
															objectFit: "cover",
															marginBottom: "10px",
														}}
													/>
												</div>
											</div>
										)}

										<div className="form-group row mb-4">
											<label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
												Image
											</label>
											<div className="col-sm-12 col-md-7">
												<input
													type="file"
													name="image"
													onChange={handleChange}
												/>
											</div>
										</div>

										<div className="form-group row mb-4">
											<div className="col-sm-12 col-md-7">
												<button className="btn btn-primary">Add Product</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{addProductSuccess && (
				<div
					className="main-content position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-opacity-50"
					style={{ height: "100vh" }}
				>
					<section className="section">
						<div className="section-body">
							<div className="col-12">
								<div className="card p-4 ">
									<div className="card-body text-center">
										<div className="mb-3 success-animation text-center text-success display-1">
											<CiCircleCheck />
										</div>
										<h6>Product Added Successfully</h6>
										<button
											className="btn btn-success"
											onClick={() => {
												setAddProductSuccess(false);
												navigate("/account/products");
											}}
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
