import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "./../utils/api";
import Loader from "./Loader";
import Alert from "./Alert";
const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState();
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

	if (loading) return <Loader />;

	if (error) return <Alert message={error} onClose={() => setError(null)} />;

	return (
		<div className="product_section layout_padding">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="item-entry">
							<a href="#" className="product-item md-height bg-gray d-block">
								<img src="/img/p3.png" alt="Image" className="img-fluid mb-5" />
							</a>
						</div>
					</div>
					<div className="col-md-6  ">
						<h2 className="text-black">{product.name}</h2>

						{product.description && (
							<p className="mb-4">{product.description}</p>
						)}
						<p>
							<strong className=" h4">${product.price}</strong>
						</p>

						<div className="mb-5">
							<div className="input-group mb-3" style={{ maxWidth: "120px" }}>
								<div className="input-group-prepend">
									<button className="btn btn-outline-dark " type="button">
										-
									</button>
								</div>
								<input
									type="text"
									className="form-control text-center"
									// value="1"
									placeholder=""
									aria-label="Example text with button addon"
									aria-describedby="button-addon1"
								/>
								<div className="input-group-append">
									<button className="btn btn-outline-dark " type="button">
										+
									</button>
								</div>
							</div>
						</div>
						<p className="btn-box d-flex justify-content-start">
							<a href="cart.html" className=" btn btn1 rounded-4">
								Add To Cart
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
