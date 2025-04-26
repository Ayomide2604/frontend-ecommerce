import { Link } from "react-router-dom";
import useCartStore from "../../store/useCartStore";

const Product = ({ id, title, price, image }) => {
	const { handleAddToCart } = useCartStore();

	return (
		<div className="col-sm-6 col-md-4 col-lg-4">
			<div className="box">
				<div className="option_container">
					<div className="options">
						<Link
							onClick={() => handleAddToCart(id)}
							className="text-decoration-none text-reset option1"
						>
							Add to Cart
						</Link>
						<Link to={`/products/${id}`} className="option2">
							View Product
						</Link>
					</div>
				</div>
				<div className="img-box">
					<img src={image} alt={title} />
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
