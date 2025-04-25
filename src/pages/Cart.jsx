import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
const Cart = () => {
	const navigate = useNavigate();
	const [cart, setCart] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const token = localStorage.getItem("token");

	useEffect(() => {
		const fetchCart = async () => {
			try {
				const response = await api.get("/cart", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setCart(response.data.cart);
			} catch (err) {
				console.error(err);
				setError(err.response?.data?.message || "Error fetching cart");
			} finally {
				setLoading(false);
			}
		};

		fetchCart();
	}, [token]);

	const handleRemoveFromCart = async (itemId) => {
		try {
			const token = localStorage.getItem("token");
			await api.delete(`/cart/remove/${itemId}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			setCart((prev) => ({
				...prev,
				items: prev.items.filter((item) => item._id !== itemId),
			}));
		} catch (error) {
			console.error("Failed to remove item ", error);
			alert("failed to remove item from cart ");
		}
	};

	const handleQuantityChange = async (itemId, newQuantity) => {
		try {
			const token = localStorage.getItem("token");
			const response = api.put(
				`/cart/update/${itemId}`,
				{
					quantity: Number(newQuantity),
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			);

			setCart((prev) => ({
				...prev,
				items: prev.items.map((item) =>
					item._id === itemId
						? { ...item, quantity: Number(newQuantity) }
						: item
				),
			}));
		} catch (error) {
			console.error(err);
			alert("Failed to uodate quantity");
		}
	};

	return (
		<>
			<div className="layout_padding">
				<div className="container">
					{cart?.items?.length > 0 ? (
						<>
							<div className="row mb-5">
								<form className="col-md-12" method="post">
									<div className="site-blocks-table">
										<table className="table table-bordered">
											<thead>
												<tr>
													<th className="product-thumbnail">Image</th>
													<th className="product-name">Product</th>
													<th className="product-price">Price</th>
													<th className="product-quantity">Quantity</th>
													<th className="product-total">Total</th>
													<th className="product-remove">Remove</th>
												</tr>
											</thead>
											<tbody>
												<>
													{cart.items.map((item) => (
														<tr key={item._id}>
															<td className="product-thumbnail">
																<img
																	src={
																		item.product.image
																			? `${import.meta.env.VITE_IMAGE_URL}${
																					item.product.image
																			  }`
																			: "/img/default_product.jpg"
																	}
																	alt="Image"
																	className="img-fluid"
																	style={{ maxWidth: 120, maxHeight: "100px" }}
																/>
															</td>
															<td className="product-name">
																<h2 className="h5 text-black">
																	{item.product.name}
																</h2>
															</td>
															<td>${item.product.price}</td>
															<td>
																<div
																	className="input-group mb-3"
																	style={{ maxWidth: 120 }}
																>
																	<div className="input-group-prepend">
																		<button
																			className="btn btn-outline-primary js-btn-minus"
																			type="button"
																		>
																			−
																		</button>
																	</div>
																	<input
																		type="text"
																		min="1"
																		className="form-control text-center"
																		value={item.quantity}
																		aria-label="Example text with button addon"
																		onChange={() =>
																			handleQuantityChange(
																				item._id,
																				e.target.value
																			)
																		}
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
															</td>
															<td>$49.00</td>
															<td>
																<Link
																	onClick={() => handleRemoveFromCart(item._id)}
																	className="btn btn-primary height-auto btn-sm"
																>
																	X
																</Link>
															</td>
														</tr>
													))}
												</>
											</tbody>
										</table>
									</div>
								</form>
							</div>
							<div className="row">
								<div className="col-md-6">
									<div className="row mb-5">
										<div className="col-md-6 mb-3 mb-md-0">
											<button className="btn btn-outline-primary btn-sm btn-block">
												Clear Cart
											</button>
										</div>
										<div className="col-md-6">
											<button className="btn btn-primary btn-sm btn-block">
												Continue Shopping
											</button>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<label className="text-black h4" htmlFor="coupon">
												Coupon
											</label>
											<p>Enter your coupon code if you have one.</p>
										</div>
										<div className="col-md-8 mb-3 mb-md-0">
											<input
												type="text"
												className="form-control py-3"
												id="coupon"
												placeholder="Coupon Code"
											/>
										</div>
										<div className="col-md-4">
											<button className="btn btn-primary btn-sm px-4">
												Apply Coupon
											</button>
										</div>
									</div>
								</div>
								<div className="col-md-6 pl-5">
									<div className="row justify-content-end">
										<div className="col-md-7">
											<div className="row">
												<div className="col-md-12 text-right border-bottom mb-5">
													<h3 className="text-black h4 text-uppercase">
														Cart Totals
													</h3>
												</div>
											</div>
											<div className="row mb-3">
												<div className="col-md-6">
													<span className="text-black">Subtotal</span>
												</div>
												<div className="col-md-6 text-right">
													<strong className="text-black">$230.00</strong>
												</div>
											</div>
											<div className="row mb-5">
												<div className="col-md-6">
													<span className="text-black">Total</span>
												</div>
												<div className="col-md-6 text-right">
													<strong className="text-black">$230.00</strong>
												</div>
											</div>
											<div className="row">
												<div className="col-md-12">
													<Link to="/checkout">
														<button className="btn btn-primary btn-lg btn-block">
															Proceed To Checkout
														</button>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</>
					) : (
						<>
							<div id="page-content">
								<div className="row">
									<div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center pt-5 pb-5">
										<p>
											<img src="/img/empty-cart.png" alt="" />
										</p>
										<h2 className="mt-4">
											<strong>SORRY,</strong> Your shopping cart is empty!
										</h2>
										<p className="mb-3 pb-1">
											You have no items in your shopping cart.
										</p>
										<p>
											<Link
												onClick={() => navigate(-1)}
												className="btn btn-outline-dark rounded mb-2 me-2"
											>
												GO Back
											</Link>
											<a
												href="shop-left-sidebar.html"
												className="btn btn-dark mb-2 text-capitalize"
											>
												Continue shopping
											</a>
										</p>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Cart;
