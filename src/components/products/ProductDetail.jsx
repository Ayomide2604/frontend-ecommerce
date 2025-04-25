import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader";
import Alert from "../Alert";
import useCartStore from "../../store/useCartStore";
import useAuthStore from "../../store/useAuthStore";
import useProductStore from "../../store/useProductStore";
const ProductDetail = () => {
	const { id } = useParams();
	const { token } = useAuthStore();
	const { handleAddToCart } = useCartStore();
	const { fetchProductById, productLoad, productError, product } =
		useProductStore();
	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		fetchProductById(id);
	}, [id]);

	if (productLoad) return <Loader />;

	if (productError)
		return <Alert message={error} onClose={() => setError(null)} />;

	return (
		<div className="product_section layout_padding">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="item-entry">
							<a href="#" className="product-item md-height bg-gray d-block">
								<img
									src={
										product?.image
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
						<h2 className="text-black">{product?.name}</h2>
						<h5 className="mb-4">{product?.collection?.title}</h5>

						{product?.description && (
							<p className="mb-4">{product.description}</p>
						)}
						<p>
							<strong className=" h4">${product?.price}</strong>
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
								onClick={() => handleAddToCart(token, product._id, quantity)}
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
