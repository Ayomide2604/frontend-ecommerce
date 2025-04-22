import { Link } from "react-router-dom";

const Product = ({ id, title, price, image }) => {
	return (
		<div className="col-sm-6 col-md-4 col-lg-4">
			<div className="box">
				<div className="option_container">
					<div className="options">
						<Link
							to={`/products/${id}`}
							className="text-decoration-none text-reset  option1"
						>
							{title}
						</Link>
						<a href="" className="option2">
							Buy Now
						</a>
					</div>
				</div>
				<div className="img-box">
					<img src={image} alt="" />
				</div>
				<div className="detail-box">
					<h5>{title}</h5>
					<h6>${price}</h6>
				</div>
			</div>
		</div>
	);
};

export default Product;
