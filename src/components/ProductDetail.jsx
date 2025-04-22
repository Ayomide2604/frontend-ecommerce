import { useState, useEffect } from "react";
import productJson from "../data/products";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
	const { id } = useParams();
	const product = productJson.find(
		(product) => parseInt(product.id) === parseInt(id)
	);

	return (
		<div className="product_section layout_padding">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="item-entry">
							<a href="#" className="product-item md-height bg-gray d-block">
								<img src={product.image} alt="Image" className="img-fluid" />
							</a>
						</div>
					</div>
					<div className="col-md-6 ">
						<h2 className="text-black">{product.title}</h2>

						<p className="mb-4">{product.description}</p>
						<p>
							<strong className="text-primary h4">${product.price}</strong>
						</p>

						<div className="mb-5">
							<div className="input-group mb-3" style={{ maxWidth: "120px" }}>
								<div className="input-group-prepend">
									<button
										className="btn btn-outline-primary js-btn-minus"
										type="button"
									>
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
									<button
										className="btn btn-outline-primary js-btn-plus"
										type="button"
									>
										+
									</button>
								</div>
							</div>
						</div>
						<p className="btn-box d-flex justify-content-start">
							<a
								href="cart.html"
								className="buy-now btn btn-sm height-auto px-4 py-3 btn1"
							>
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
