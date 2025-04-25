import { useNavigate, Link } from "react-router-dom";

const EmptyCart = () => {
	const navigate = useNavigate();
	return (
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
								Go Back
							</Link>
							<Link
								to="/products"
								className="btn btn-dark mb-2 text-capitalize"
							>
								Continue shopping
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default EmptyCart;
