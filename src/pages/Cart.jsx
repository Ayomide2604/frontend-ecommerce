import { Link } from "react-router-dom";
import { useEffect } from "react";
import useAuthStore from "../store/useAuthStore";
import useCartStore from "../store/useCartStore";
import EmptyCart from "../components/cart/EmptyCart";
import Coupon from "../components/cart/Coupon";
import CartTable from "../components/cart/CartTable";
const Cart = () => {
	const {
		cart,
		fetchCart,
		handleRemoveFromCart,
		handleIncreaseQuantity,
		handleDecreaseQuantity,
	} = useCartStore();
	const { token } = useAuthStore();

	useEffect(() => {
		if (token) fetchCart(token);
	}, [token]);

	return (
		<>
			<div className="layout_padding">
				<div className="container">
					{cart?.items?.length > 0 ? (
						<>
							<div className="row mb-5">
								<div className="site-blocks-table">
									{/* Cart Table */}
									<CartTable
										cart={cart}
										removeFromCart={handleRemoveFromCart}
										increaseQuantity={handleIncreaseQuantity}
										decreaseQuantity={handleDecreaseQuantity}
									/>
								</div>
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

									<Coupon />
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
											{/* <div className="row mb-3">
												<div className="col-md-6">
													<span className="text-black">Subtotal</span>
												</div>
												<div className="col-md-6 text-right">
													<strong className="text-black">
														${cart.totalPrice}
													</strong>
												</div>
											</div> */}
											<div className="row mb-5">
												<div className="col-md-6">
													<span className="text-black">Total</span>
												</div>
												<div className="col-md-6 text-right">
													<strong className="text-black">
														${cart.totalPrice}
													</strong>
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
						<EmptyCart />
					)}
				</div>
			</div>
		</>
	);
};

export default Cart;
