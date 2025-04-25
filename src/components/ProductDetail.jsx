import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "./../utils/api";
import Loader from "./Loader";
import Alert from "./Alert";
const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState();
	const [quantity, setQuantity] = useState(1);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProductById = async (id) => {
			try {
				const response = await api.get(`/products/${id}`);
				setProduct(response.data);
				setLoading(true);
			} catch (err) {
				setError(err.response?.data?.message || "An error occurred");
				setLoading(false);
			} finally {
				setLoading(false);
			}
		};

		fetchProductById(id);
	}, [id]);

	const handleAddToCart = async (productId, quantity) => {
		try {
			const token = localStorage.getItem("token");
			await api.post(
				"/cart/add",
				{ productId, quantity: quantity || 1 },
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			alert("Product Added Succesfully");
		} catch (error) {
			console.error("Error Adding Product to cart", error);
			alert("Failed to add to cart");
		}
	};

	if (loading) return <Loader />;

	if (error) return <Alert message={error} onClose={() => setError(null)} />;

	return (
		<div className="product_section layout_padding">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="item-entry">
							<a href="#" className="product-item md-height bg-gray d-block">
								<img
									src={
										product.image
											? `${import.meta.env.VITE_IMAGE_URL}${product.image}`
											: "/img/default_product.jpg"
									}
									alt="Image"
									className="img-fluid mb-5"
								/>
							</a>
						</div>
					</div>
					<div className="col-md-6  ">
						<h2 className="text-black">{product.name}</h2>
						<h5 className="mb-4">{product.collection?.title}</h5>

						{product.description && (
							<p className="mb-4">{product.description}</p>
						)}
						<p>
							<strong className=" h4">${product.price}</strong>
						</p>

						<div className="mb-5">
							<div className="input-group mb-3" style={{ maxWidth: "120px" }}>
								<div className="input-group-prepend">
									<button
										onClick={() => setQuantity(quantity - 1)}
										className={
											quantity <= 1
												? "btn btn-outline-dark disabled "
												: "btn btn-outline-dark "
										}
										type="button"
									>
										-
									</button>
								</div>
								<input
									type="text"
									disabled
									className="form-control text-center"
									value={quantity}
									placeholder=""
									aria-label="Example text with button addon"
									aria-describedby="button-addon1"
								/>
								<div className="input-group-append">
									<button
										onClick={() => setQuantity(quantity + 1)}
										className="btn btn-outline-dark  "
										type="button"
									>
										+
									</button>
								</div>
							</div>
						</div>
						<p className="btn-box d-flex justify-content-start">
							<Link
								onClick={() => handleAddToCart(product._id, quantity)}
								className=" btn btn1 rounded-4"
							>
								Add To Cart
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
