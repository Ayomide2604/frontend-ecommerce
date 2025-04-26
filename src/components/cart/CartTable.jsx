import { Link } from "react-router-dom";
const CartTable = ({
	token,
	cart,
	removeFromCart,
	increaseQuantity,
	decreaseQuantity,
}) => {
	return (
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
											? `${import.meta.env.VITE_IMAGE_URL}${item.product.image}`
											: "/img/default_product.jpg"
									}
									alt="Image"
									className="img-fluid"
									style={{ maxWidth: 120, maxHeight: "100px" }}
								/>
							</td>
							<td className="product-name">
								<h2 className="h5 text-black">{item.product.name}</h2>
							</td>
							<td>${item.product.price}</td>
							<td>
								<div className="input-group mb-3" style={{ maxWidth: 120 }}>
									<div className="input-group-prepend">
										<button
											onClick={() => decreaseQuantity(item._id)}
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
											handleQuantityChange(item._id, e.target.value)
										}
										aria-describedby="button-addon1"
									/>
									<div className="input-group-append">
										<button
											onClick={() => increaseQuantity(item._id)}
											className="btn btn-outline-primary js-btn-plus"
											type="button"
										>
											+
										</button>
									</div>
								</div>
							</td>
							<td>${item.subTotal}</td>
							<td>
								<Link
									onClick={() => removeFromCart(item._id)}
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
	);
};

export default CartTable;
